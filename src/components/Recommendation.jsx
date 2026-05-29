const Recommendation = ({ recommendation }) => {
  const styles = {
    good: {
      bg: 'bg-green-50',
      border: 'border-green-100',
      text: 'text-green-700',
      badge: 'Good',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-100',
      text: 'text-yellow-700',
      badge: 'Warning',
    },
    bad: {
      bg: 'bg-red-50',
      border: 'border-red-100',
      text: 'text-red-700',
      badge: 'Not Recommended',
    },
  }

  const current = styles[recommendation.status]

  return (
    <div
      className={`${current.bg} ${current.border} border rounded-3xl p-6`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          AI Recommendation
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${current.text}`}
        >
          {current.badge}
        </span>
      </div>

      <p className={`text-base leading-7 ${current.text}`}>
        {recommendation.message}
      </p>
    </div>
  )
}

export default Recommendation