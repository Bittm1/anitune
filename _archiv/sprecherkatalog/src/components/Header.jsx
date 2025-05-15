import { playHoverAudio, stopHoverAudio } from "../utils/playHoverAudio";
import { useCallback, useRef } from "react";

export default function Header({ voiceAvatar }) {
  const navItems = [
    { label: "START", key: "start" },
    { label: "NEWS", key: "news" },
    { label: "DISCORD", key: "discord" },
    { label: "MEILENSTEINE", key: "meilensteine" },
    { label: "SPRECHER", key: "sprecher" },
  ];

  // Debounce mit cancel
  const timeoutRef = useRef(null);

  const handleMouseEnter = useCallback((key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (voiceAvatar?.hoverAudios?.[key] && voiceAvatar.hoverAudios[key].length > 0) {
        playHoverAudio(voiceAvatar.hoverAudios[key]);
      }
    }, 200);
  }, [voiceAvatar]);

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Verhindert verzögertes Play
    stopHoverAudio(); // Stoppt laufenden Sound
  };

  return (
    <header className="bg-black text-white px-6 py-3 flex items-center justify-between border-b border-gray-800">
      {/* Logo */}
      <div
        className="text-2xl font-bold italic"
        onMouseEnter={() => handleMouseEnter("logo")}
        onMouseLeave={handleMouseLeave}
      >
        AniTune
      </div>

      {/* Navigation mit Audio-Hover */}
      <nav className="hidden md:flex space-x-6 text-sm italic font-medium">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="hover:underline"
            onMouseEnter={() => handleMouseEnter(item.key)}
            onMouseLeave={handleMouseLeave}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Rechts: Login + Avatar */}
      <div className="flex items-center space-x-4">
        <button className="bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded italic text-sm">
          ANMELDEN
        </button>
        <div
          className="w-8 h-8 rounded-full bg-slate-500 text-xs italic flex items-center justify-center"
          onMouseEnter={() => handleMouseEnter("avatar")}
          onMouseLeave={handleMouseLeave}
        >
          AVATAR
        </div>
      </div>
    </header>
  );
}
