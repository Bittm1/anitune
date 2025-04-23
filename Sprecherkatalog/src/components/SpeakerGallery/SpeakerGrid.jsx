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
    // ⚡ Blitz UND Ansicht gleichzeitig umschalten
    setShowAnime((prev) => !prev);
    setBlitzActive(true);

    // ⏱ Effekt verschwindet nach 700ms
    setTimeout(() => {
      setBlitzActive(false);
    }, 700);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {blitzActive && <LightningEffect />}

      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Linke große Karte */}
        <div className="lg:w-1/3 w-full mt-[52px]">
          <SpeakerCard data={selectedActor} showAnime={showAnime} />
        </div>

        {/* Rechte Seite mit Button + Grid */}
        <div className="lg:w-2/3 w-full flex flex-col items-center">
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
