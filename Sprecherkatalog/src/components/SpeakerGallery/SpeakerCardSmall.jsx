export default function SpeakerCardSmall({ actor, showAnime, onClick }) {
  // Schritt 2: Dynamische Anpassung der Werte
  const topOffset = showAnime ? actor.animeTopOffset : actor.topOffset;
  const imageHeight = showAnime ? actor.animeImageHeight : actor.imageHeight;
  const imageWidth = showAnime ? actor.animeImageWidth : actor.imageWidth;

  const imageToShow = showAnime && actor.animeImage ? actor.animeImage : actor.image;

  return (
    <div
      className="cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <div className="rounded-xl overflow-hidden border-2 border-white/80 shadow-md bg-black">
        {/* Bild */}
        <div className="relative w-full h-52 overflow-hidden">
          <img
            src={imageToShow}
            alt={actor.name}
            className="absolute left-0"
            style={{
              top: topOffset ?? "0px",  // Verwendung der dynamischen topOffset-Werte
              height: imageHeight ?? "100%",
              width: imageWidth ?? "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Namensleiste integriert */}
        <div className="bg-slate-600 text-white text-center text-sm font-semibold py-2">
          {actor.name}
        </div>
      </div>
    </div>
  );
}
