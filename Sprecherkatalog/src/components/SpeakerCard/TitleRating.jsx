// Zeigt den Titel und die Sterne
export default function TitleRating({ title, rating }) {
    return (
      <div className="bg-blue-600 text-white text-sm font-semibold rounded px-2 py-1 text-center">
        {title} {"\u2605".repeat(rating)}
      </div>
    );
  }