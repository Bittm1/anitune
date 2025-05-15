let currentAudio = null; // Globale Referenz im Modul

export function playHoverAudio(audioList) {
  if (!audioList || audioList.length === 0) return;

  const randomIndex = Math.floor(Math.random() * audioList.length);
  const selectedAudio = audioList[randomIndex];

  // Falls vorheriges Audio noch spielt, stoppen
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(selectedAudio);
  currentAudio.play().catch((err) => {
    console.error("Fehler beim Abspielen:", err);
  });
}

export function stopHoverAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
