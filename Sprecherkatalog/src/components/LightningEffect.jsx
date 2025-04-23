// src/components/LightningEffect.jsx
import { useEffect } from "react";
import "../components/LightningEffect.css";

export default function LightningEffect({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // WICHTIG: Callback auslösen
    }, 1200); // Dauer muss zur CSS-Animation passen

    return () => clearTimeout(timer);
  }, [onComplete]);

  return <div className="lightning-flash" />;
}
