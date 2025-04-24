import { useState } from "react";
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import SpeakerCardSmall from "./SpeakerCardSmall";
import VoiceActors from "../../data/Voiceactors";
import LightningEffect from "../LightningEffect";

export default function SpeakerGrid() {
  const [selectedActor, setSelectedActor] = useState(VoiceActors[0]);
  const [showAnime, setShowAnime] = useState(false);
  const [blitzActive, setBlitzActive] = useState(false);

  const handleToggle = () => {
    setShowAnime((prev) => !prev);
    setBlitzActive(true);
    setTimeout(() => setBlitzActive(false), 700);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen">
      {blitzActive && <LightningEffect />}

      {/* Linker Bereich */}
      <div className="lg:w-1/3 w-full flex justify-center items-start pt-20 lg:pt-28 px-4">

        <SpeakerCard data={selectedActor} showAnime={showAnime} />
      </div>

      {/* Rechter Bereich ohne Hintergrundfarben */}
      <div className="lg:w-2/3 w-full px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center rounded-xl p-4 shadow-lg">
          <button
            onClick={handleToggle}
            className={`mb-4 px-6 py-2 rounded-full transition-all duration-300 shadow-md font-bold transform hover:scale-110 ${
              showAnime ? "bg-blue-700 text-white" : "bg-gray-300 text-gray-800"
            }`}
          >
            {showAnime ? "DETOON" : "ANITOON"}
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {VoiceActors.map((actor) => (
              <SpeakerCardSmall
                key={actor.id}
                actor={actor}
                showAnime={showAnime}
                onClick={() => setSelectedActor(actor)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
