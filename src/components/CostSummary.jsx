const CostSummary = ({ totalCost, duration }) => {
  return (
    <div className="bg-black text-white rounded-3xl p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-300">
            Total Meeting Cost
          </p>

          <h2 className="text-4xl font-bold mt-3">
            ₹{totalCost.toFixed(2)}
          </h2>
        </div>

        <div className="bg-white/10 px-4 py-2 rounded-xl">
          <p className="text-sm text-gray-300">
            Duration
          </p>

          <h3 className="text-lg font-semibold mt-1">
            {duration} mins
          </h3>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-sm text-gray-400">
          This is the estimated company cost for the meeting.
        </p>
      </div>
    </div>
  )
}

export default CostSummary