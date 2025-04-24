export default function SpeakerCardSmall({ actor, showAnime, onClick }) {
  const imageToShow = showAnime && actor.animeImage ? actor.animeImage : actor.image;

  return (
    <div
      className="cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <div className="rounded-xl overflow-hidden border border-gray-300 shadow-md bg-black">
        <img
          src={imageToShow}
          alt={actor.name}
          className="w-full h-52 object-contain p-1"
        />
      </div>
      <div className="mt-2 text-center text-sm font-semibold text-white">
        {actor.name}
      </div>
    </div>
  );
}
