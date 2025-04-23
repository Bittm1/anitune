import { useRef, useState } from "react";
import { useCardEffects } from "../../hooks/useCardEffects";
import "../../styles/shineEffects.css"; // Anpassen je nach Pfadstruktur

import {
  Avatar,
  NameLevel,
  SocialIcons,
  TitleRating,
  QuestionList,
} from "./";
import questions from "../../data/questions";

export default function SpeakerCard({ data, showAnime, setVoiceAvatar  }) {
  const tiltRef = useRef(null);
  const shineRef = useRef(null);
  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [flipped, setFlipped] = useState(false);

  useCardEffects(tiltRef, shineRef, {
    opacity: 0.4,
    glare: 0.3,
    max: 20,
    speed: 400,
  });  

  const toggleFlip = () => setFlipped((prev) => !prev);

  const handlePlay = (index) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    audioRefs.current.forEach((audio, i) => {
      if (i !== index && audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (currentAudio.paused) {
      currentAudio.play();
      setPlayingIndex(index);
    } else {
      currentAudio.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <div ref={tiltRef} className="w-full max-w-sm mx-auto perspective">
      <div
        className={`relative w-full h-[600px] transition-transform duration-700 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Vorderseite */}
        <div className="absolute w-full h-full backface-hidden">
          <div
            className={`card-glow group h-full flex flex-col justify-between rounded-xl border-4 ${data.style.border} shadow-xl p-4 pt-6 bg-gradient-to-b ${data.style.gradient} relative`}
          >
            {/* Glanzeffekt */}
            <div
              ref={shineRef}
              className="shine-overlay pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-xlshine-overlay pointer-events-none absolute inset-0 z-50 overflow-hidden rounded-xl"
            />

            <div>
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-br-xl">
                LEGENDARY
              </div>
              <NameLevel name={data.name} level={data.level} />
              <Avatar
              image={data.image}
              animeImage={data.animeImage}
              intro={data.intro}
              name={data.name}
              showAnime={showAnime}
            />
              <SocialIcons social={data.social} />
              <TitleRating title={data.title} rating={data.rating} />
              <QuestionList
                questions={questions}
                audioRefs={audioRefs}
                playingIndex={playingIndex}
                handlePlay={handlePlay}
              />
            </div>

            
            <button
            onClick={() => setVoiceAvatar(data)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-full mx-auto transition-all duration-300">
            Wähle {data.name.split(" ")[0]} als deinen Sprachavatar
            </button>

            <button
              onClick={toggleFlip}
              className="mt-4 bg-gray-200 hover:bg-gray-300 text-sm text-black py-1 px-4 rounded-full mx-auto">
              Klicken zum Umdrehen 🔄
            </button>

          </div>
        </div>

        {/* Rückseite */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <div
            className={`card-glow h-full flex flex-col justify-between rounded-xl border-4 ${data.style.border} shadow-xl p-4 pt-6 bg-gradient-to-b ${data.style.gradient}`}
          >
            <div className="flex-1"></div>

            <button
              onClick={toggleFlip}
              className="mt-4 bg-gray-200 hover:bg-gray-300 text-sm text-black py-1 px-4 rounded-full mx-auto"
            >
              Zurück zur Vorderseite 🔄
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
