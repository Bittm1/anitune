export default function Avatar({ image, animeImage, intro, name, showAnime }) {
  const imageToShow = showAnime && animeImage ? animeImage : image;

  return (
    <>
      <img
        src={`${import.meta.env.BASE_URL}${imageToShow}`}
        alt={name}
        className="w-32 h-40 rounded-[43%] object-cover border-4 border-black shadow-md mx-auto my-2 bg-white contrast-125 saturate-125"
        onMouseEnter={() => {
          const audio = document.getElementById("avatar-audio");
          if (audio) {
            audio.currentTime = 0;
            audio.play();
          }
        }}
        onMouseLeave={() => {
          const audio = document.getElementById("avatar-audio");
          if (audio) {
            audio.pause();
            audio.currentTime = 0;
          }
        }}
      />
      {intro && <audio id="avatar-audio" src={intro} />}
    </>
  );
}
