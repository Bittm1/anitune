/* export function playHoverAudio(source) {
    if (!source) return;
  
    let selected;
  
    if (Array.isArray(source)) {
      // Wähle zufällig einen Eintrag aus dem Array
      const index = Math.floor(Math.random() * source.length);
      selected = source[index];
    } else {
      // Falls nur ein String kommt, normal abspielen
      selected = source;
    }
  
    const audio = new Audio(selected);
    audio.play().catch((err) => {
      console.error("Fehler beim Abspielen:", err);
    });
  } */