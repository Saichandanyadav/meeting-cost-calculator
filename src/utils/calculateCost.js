export const calculateParticipantCost = (hourlyRate, minutes) => {
  return (hourlyRate / 60) * minutes
}

export const calculateTotalCost = (participants, minutes) => {
  return participants.reduce((total, person) => {
    return total + calculateParticipantCost(person.hourlyRate, minutes)
  }, 0)
}