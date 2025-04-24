// Zeigt die Fragen mit den jeweiligen Audios und Play-Buttons
export default function QuestionList({ questions, audioRefs, playingIndex, handlePlay }) {
    return (
      <div className="mt-2">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white text-black p-1 my-1 rounded shadow-sm flex items-center justify-between"
          >
            <span>{question.text}</span>
  
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={question.audio}
              onCanPlay={() => console.log("✅ Audio bereit:", question.audio)}
              onError={() => console.error("❌ Audio konnte nicht geladen werden:", question.audio)}
              onEnded={() => {
                console.log("🔁 Audio beendet:", index);
                if (playingIndex === index) {
                  // Reset only if this was the playing one
                  handlePlay(index);
                }
              }}
            />
            <button
              onClick={() => handlePlay(index)}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-7 h-7 flex items-center justify-center"
            >
              {playingIndex === index ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="14" height="14">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    );
  }