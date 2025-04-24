import { useEffect, useRef, useState } from "react";
import { useCardEffects } from "../../hooks/useCardEffects";
import questions from "../../data/questions";
import QuestionList from "./QuestionList";
import NameLevel from "./NameLevel";
import Avatar from "./Avatar";

export default function SpeakerCard({ data, showAnime, setVoiceAvatar }) {
  const tiltRef = useRef(null);
  const shineRef = useRef(null);
  const videoRef = useRef(null);
  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [flipped, setFlipped] = useState(false);

  useCardEffects(tiltRef, shineRef, {
    opacity: 0.4,
    glare: 0.3,
    max: 20,
    speed: 400,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay blockiert:", err);
      });
    }
  }, []);

  const toggleFlip = () => setFlipped((prev) => !prev);

  const handlePlay = (index) => {
    const currentAudio = audioRefs.current[index];

    if (!currentAudio) return;

    if (playingIndex === index) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setPlayingIndex(null);
      return;
    }

    audioRefs.current.forEach((audio, i) => {
      if (i !== index && audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    currentAudio.play();
    setPlayingIndex(index);
  };

  return (
    <div ref={tiltRef} className="w-full max-w-sm mx-auto perspective">
      <div
        className={`relative w-full h-[600px] transition-transform duration-700 preserve-3d ${flipped ? "rotate-y-180" : ""}`}
      >
        {/* Vorderseite */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative w-full h-full bg-yellow-200 border-[4px] border-yellow-500 rounded-xl shadow-2xl p-2 font-sans flex flex-col justify-between overflow-hidden">

            {/* Glanzeffekt von AniTune */}
            <div
              ref={shineRef}
              className="shine-overlay pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-xl"
            >
              <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-gradient-to-r from-white/30 via-transparent to-white/30 rotate-[30deg] animate-bling" />
            </div>

            {/* STUFE 1 */}
            <div className="absolute top-2 left-2 w-[80px] h-[26px] z-20">
              <div
                className="absolute inset-0 bg-black"
                style={{
                  clipPath:
                    'polygon(15% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 25%)',
                }}
              />
              <div
                className="absolute inset-[2px] bg-gray-300 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-black"
                style={{
                  clipPath:
                    'polygon(15% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 25%)',
                }}
              >
                STUFE 1
              </div>
            </div>

            {/* KP-Zeile */}
            <div className="flex justify-end items-center px-2 mt-2 z-10">
              <span className="text-red-600 font-bold text-lg">70 KP</span>
            </div>

            {/* Name */}
            <NameLevel name={data.name} level={data.level} />

            {/* Bildbereich mit Video-Hintergrund */}
            <div className="relative z-20 mx-2 mb-2 border-[4px] border-black rounded-sm overflow-hidden">
              <div className="relative border-[4px] border-yellow-500 rounded-sm overflow-hidden w-full h-[190px]">
                <video
                  ref={videoRef}
                  className="absolute top-[-20px] left-0 w-full h-auto object-cover z-0"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/images/background.mp4" type="video/mp4" />
                </video>

                <img
                  src={data.image}
                  alt={data.name}
                  className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[60%] z-10 pointer-events-none"
                />
              </div>
            </div>
            {/* Beschreibung */}
            <div className="text-center mb-2 z-10">
              <p className="text-[11px] italic text-black">
                Legendärer Sprecher – Stimmfarbe: warm, Präsenz: stark
              </p>
            </div>

            {/* Attacke 1 */}
            <div className="bg-orange-50 border-2 border-yellow-400 mx-2 mt-1 p-2 rounded shadow-md text-sm z-10">
              <div className="flex justify-between items-center font-bold text-sm border-b border-yellow-300 pb-1">
                <span>🎤 Ruckzucktext</span>
                <span>10+</span>
              </div>
              <p className="text-xs mt-1">
                Wirf eine Münze. Bei „Kopf“ fügt dieser Text 20 zusätzliche Wirkungspunkte hinzu. Bei „Zahl“ bleibt es bei 10.
              </p>
            </div>

            {/* Attacke 2 */}
            <div className="bg-orange-50 border-2 border-yellow-400 mx-2 mt-2 p-2 rounded shadow-md text-sm z-10">
              <div className="flex justify-between items-center font-bold text-sm border-b border-yellow-300 pb-1">
                <span>🔥 Wutkommentar</span>
                <span>40+</span>
              </div>
              <p className="text-xs mt-1">
                Lege 2 Energiepunkte ab, um diesen Dialog-Effekt einzusetzen. Fügt +10 für jede Fanreaktion hinzu.
              </p>
            </div>

            {/* Schwächen */}
            <div className="flex justify-between text-xs text-gray-700 mt-2 px-2 z-10">
              <span>Schwäche: ❄️</span>
              <span>Resistenz: 🔊</span>
              <span>Rückzug: 🔁</span>
            </div>

            {/* Zitat */}
            <div className="text-[10px] text-center italic mt-1 text-gray-600 z-10">
              „Wenn er spricht, bleibt der Raum stehen.“ – Sprecherkarte Lv. 34, Nr. 59
            </div>

            {/* Button */}
            <button
              onClick={toggleFlip}
              className="mt-2 bg-gray-200 hover:bg-gray-300 text-sm text-black py-1 px-4 rounded-full mx-auto"
            >
              Klicken zum Umdrehen 🔄
            </button>
          </div>
        </div>

        {/* Rückseite */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <div className={`card-glow h-full flex flex-col justify-between rounded-xl border-4 ${data.style.border} shadow-xl p-4 pt-6 bg-gradient-to-b ${data.style.gradient}`}>
            <QuestionList
              questions={questions}
              audioRefs={audioRefs}
              playingIndex={playingIndex}
              handlePlay={handlePlay}
            />

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
