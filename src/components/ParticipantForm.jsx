import { useState } from 'react'

const ParticipantForm = ({ addParticipant }) => {
  const [name, setName] = useState('')
  const [hourlyRate, setHourlyRate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !hourlyRate) return

    addParticipant({
      id: Date.now(),
      name,
      hourlyRate: Number(hourlyRate),
    })

    setName('')
    setHourlyRate('')
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Add Team Member
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Add participants and their hourly cost
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Participant Name
          </label>

          <input
            type="text"
            placeholder="Enter participant name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-black focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Hourly Cost (₹)
          </label>

          <input
            type="number"
            placeholder="Enter hourly cost"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-black focus:bg-white transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-black text-white font-medium hover:opacity-90 transition-all"
        >
          Add Participant
        </button>
      </form>
    </div>
  )
}

export default ParticipantForm