import SpeakerGrid from "./components/SpeakerGallery/SpeakerGrid";
import Header from "./components/Header";
import voiceAvatar from "./data/VoiceAvatars"; // Importiere voiceAvatar

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header voiceAvatar={voiceAvatar} /> {/* Direkt voiceAvatar übergeben */}
      <SpeakerGrid />
    </div>
  );
}