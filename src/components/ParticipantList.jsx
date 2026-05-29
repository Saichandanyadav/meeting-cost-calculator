const ParticipantList = ({ participants, removeParticipant }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Participants</h2>

      {participants.length === 0 ? (
        <p>No participants added.</p>
      ) : (
        <div className="space-y-3">
          {participants.map((person) => (
            <div
              key={person.id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <div>
                <p className="font-semibold">{person.name}</p>
                <p>₹{person.hourlyRate}/hour</p>
              </div>

              <button
                onClick={() => removeParticipant(person.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ParticipantList