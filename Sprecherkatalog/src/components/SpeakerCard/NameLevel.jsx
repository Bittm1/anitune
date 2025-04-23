export default function NameLevel({ name, level }) {
  return (
    <div className="flex justify-between items-start flex-wrap gap-2">
      {/* Name: Wortweise gruppiert, Buchstabenweise animiert */}
      <div className="flex flex-wrap max-w-[70%] font-extrabold text-2xl mb-1 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] gap-x-1 leading-tight">
        {name.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="flex space-x-[1px]">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                className="transition-transform duration-300 ease-in-out hover:scale-125 hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>

      {/* Level-Badge */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white text-xs shadow-inner px-2 py-1 rounded-full whitespace-nowrap mt-1">
        LV {level}
      </div>
    </div>
  );
}
