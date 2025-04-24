// Zeigt z. B. das YouTube-Icon
export default function SocialIcons({ social }) {
  const youtubeIcon = "/images/icons/youtube.svg";
  const youtubeLink = social?.youtube || null;

  return (
    <div className="flex justify-center gap-3 my-2">
      {youtubeLink ? (
        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
        </a>
      ) : (
        <img
          src={youtubeIcon}
          alt="YouTube"
          className="w-6 h-6 opacity-100 cursor-not-allowed"
          title="Kein YouTube-Link verfügbar"
        />
      )}
    </div>
  );
}
