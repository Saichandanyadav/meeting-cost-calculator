export const getRecommendation = (cost, agenda, duration) => {
  const text = agenda.toLowerCase()

  const weakWords = ['sync', 'discussion', 'talk', 'meeting']

  const weakAgenda =
    agenda.length < 10 ||
    weakWords.some((word) => text.includes(word))

  if (weakAgenda && cost > 2000) {
    return {
      status: 'bad',
      message: 'Expensive meeting with unclear agenda.',
    }
  }

  if (cost > 5000 || duration > 60) {
    return {
      status: 'warning',
      message: 'Consider shortening the meeting or reducing attendees.',
    }
  }

  return {
    status: 'good',
    message: 'Meeting cost looks reasonable.',
  }
}