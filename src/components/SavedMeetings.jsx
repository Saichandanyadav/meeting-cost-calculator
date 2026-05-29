const SavedMeetings = ({ meetings }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Saved Meetings
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Previously stored meeting history
          </p>
        </div>

        <div className="bg-gray-100 text-gray-700 h-11 min-w-11 px-3 rounded-2xl flex items-center justify-center text-sm font-semibold">
          {meetings.length}
        </div>
      </div>

      {meetings.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-2xl py-12 px-6 text-center bg-gray-50">
          <p className="text-gray-500 text-sm">
            No meetings saved yet
          </p>
        </div>
      ) : (
        <div className="max-h-[190px] overflow-y-auto pr-2 space-y-4">
          {meetings
            .slice()
            .reverse()
            .map((meeting) => (
              <div
                key={meeting.id}
                className="border border-gray-100 rounded-2xl p-5 hover:border-gray-300 transition-all bg-[#fafafa]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-6 break-words">
                      {meeting.agenda}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                        {meeting.duration} mins
                      </span>

                      <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                        {meeting.participants.length} participants
                      </span>
                    </div>
                  </div>

                  <div className="bg-black text-white px-4 py-2 rounded-2xl text-sm font-semibold whitespace-nowrap shrink-0">
                    ₹{meeting.totalCost.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default SavedMeetings