import { useEffect, useRef } from "react";

export default function SpeakerCard() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay blockiert:", err);
      });
    }
  }, []);

  return (
    <div className="relative w-[370px] h-[520px] bg-yellow-200 border-[4px] border-yellow-500 rounded-xl shadow-2xl p-2 font-sans flex flex-col justify-between overflow-hidden">

      {/* ✨ KRÄFTIGER GLANZ EFFEKT */}
      <div className="absolute inset-0 z-50 pointer-events-none rounded-xl overflow-hidden">
        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-gradient-to-r from-white/30 via-transparent to-white/30 rotate-[30deg] animate-bling" />
      </div>

      {/* STUFE 1 */}
      <div className="absolute top-2 left-2 w-[80px] h-[26px] z-10">
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
      <div className="text-center mt-3 mb-1 z-10">
        <h1 className="text-lg font-extrabold">Tobias Müller</h1>
      </div>

      {/* Bildbereich mit Video-Hintergrund (kein Glanz auf diesem Container!) */}
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
            Your browser does not support the video tag.
          </video>

          <img
            src="/images/tobi_vor.png"
            alt="Tobias"
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

      {/* Schwächen etc. */}
      <div className="flex justify-between text-xs text-gray-700 mt-2 px-2 z-10">
        <span>Schwäche: ❄️</span>
        <span>Resistenz: 🔊</span>
        <span>Rückzug: 🔁</span>
      </div>

      {/* Zitat */}
      <div className="text-[10px] text-center italic mt-1 text-gray-600 z-10">
        „Wenn er spricht, bleibt der Raum stehen.“ – Sprecherkarte Lv. 34, Nr. 59
      </div>
    </div>
  );
}