import { useEffect, useState } from 'react'
import ParticipantForm from './components/ParticipantForm'
import ParticipantList from './components/ParticipantList'
import CostSummary from './components/CostSummary'
import Recommendation from './components/Recommendation'
import SavedMeetings from './components/SavedMeetings'
import { calculateTotalCost } from './utils/calculateCost'
import { getRecommendation } from './utils/recommendation'

const App = () => {
  const [participants, setParticipants] = useState(() => {
    return JSON.parse(localStorage.getItem('participants')) || []
  })

  const [duration, setDuration] = useState(() => {
    return JSON.parse(localStorage.getItem('duration')) || 30
  })

  const [agenda, setAgenda] = useState(() => {
    return localStorage.getItem('agenda') || ''
  })

  const [savedMeetings, setSavedMeetings] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('savedMeetings')) || []
    )
  })

  const totalCost = calculateTotalCost(
    participants,
    duration
  )

  const recommendation = getRecommendation(
    totalCost,
    agenda,
    duration
  )

  useEffect(() => {
    localStorage.setItem(
      'participants',
      JSON.stringify(participants)
    )
  }, [participants])

  useEffect(() => {
    localStorage.setItem(
      'duration',
      JSON.stringify(duration)
    )
  }, [duration])

  useEffect(() => {
    localStorage.setItem('agenda', agenda)
  }, [agenda])

  useEffect(() => {
    localStorage.setItem(
      'savedMeetings',
      JSON.stringify(savedMeetings)
    )
  }, [savedMeetings])

  const addParticipant = (participant) => {
    setParticipants((prev) => [...prev, participant])
  }

  const removeParticipant = (id) => {
    setParticipants((prev) =>
      prev.filter((person) => person.id !== id)
    )
  }

  const saveMeeting = () => {
    if (!agenda || participants.length === 0) return

    const meeting = {
      id: Date.now(),
      agenda,
      duration,
      totalCost,
      participants,
    }

    setSavedMeetings((prev) => [...prev, meeting])
  }

  return (
    <div className="min-h-screen bg-[#f3f5f9]">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6">
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 px-6 sm:px-10 py-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Smart Meeting Planning
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
                Meeting Cost Calculator
              </h1>

              <p className="text-gray-500 mt-4 text-base leading-7">
                Estimate meeting expenses based on attendee
                cost, duration, and agenda quality before
                scheduling a discussion.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#f8fafc] border border-gray-100 rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Meeting Setup
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Configure duration and agenda
                      </p>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-black text-white flex items-center justify-center font-semibold">
                      {participants.length}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">
                        Meeting Duration
                      </label>

                      <input
                        type="number"
                        value={duration}
                        onChange={(e) =>
                          setDuration(Number(e.target.value))
                        }
                        className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-white text-lg focus:border-black transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">
                        Meeting Agenda
                      </label>

                      <textarea
                        value={agenda}
                        onChange={(e) =>
                          setAgenda(e.target.value)
                        }
                        placeholder="Example: Finalize product launch timeline and deployment checklist"
                        className="w-full min-h-[140px] p-4 rounded-2xl border border-gray-200 bg-white resize-none focus:border-black transition-all"
                      />
                    </div>
                  </div>
                </div>

                <ParticipantForm addParticipant={addParticipant} />

                <ParticipantList
                  participants={participants}
                  removeParticipant={removeParticipant}
                />
              </div>

              <div className="space-y-6">
                <CostSummary
                  totalCost={totalCost}
                  duration={duration}
                />

                <Recommendation recommendation={recommendation} />

                <button
                  onClick={saveMeeting}
                  className="w-full h-14 rounded-2xl bg-black text-white text-lg font-semibold hover:opacity-90 transition-all"
                >
                  Save Meeting
                </button>

                <SavedMeetings meetings={savedMeetings} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App