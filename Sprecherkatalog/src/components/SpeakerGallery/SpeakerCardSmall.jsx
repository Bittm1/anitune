export default function SpeakerCardSmall({ actor, showAnime, onClick }) {
  const imageToShow = showAnime && actor.animeImage ? actor.animeImage : actor.image;

  return (
    <div
      className="cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <div className="relative w-full h-52 overflow-hidden rounded-xl border-2 border-white/40 shadow-md bg-black">
        <img
          src={imageToShow}
          alt={actor.name}
          className="absolute left-0"
          style={{
            top: actor.topOffset ?? "0px",       // Sicher: Falls undefined ➔ 0px
            height: actor.imageHeight ?? "100%",  // Sicher: Falls undefined ➔ 100%
            width: actor.imageWidth ?? "100%",    // Sicher: Falls undefined ➔ 100%
            objectFit: "cover",
          }}
        />
      </div>

      <div className="mt-2 text-center text-sm font-semibold text-white">
        {actor.name}
      </div>
    </div>
  );
}
