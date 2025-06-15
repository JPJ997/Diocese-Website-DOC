export function NewsPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Newsletters</h2>
      <ul className="list-disc ml-6">
        <li><a href="/src/assets/newsletters/Churchman.pdf" className="text-blue-500" target="_blank" rel="noopener noreferrer">Churchman (English)</a></li>
        <li><a href="/src/assets/newsletters/Thelivu.pdf" className="text-blue-500" target="_blank" rel="noopener noreferrer">Thelivu (Tamil)</a></li>
        <li><a href="/src/assets/newsletters/Subathepa.pdf" className="text-blue-500" target="_blank" rel="noopener noreferrer">Subathepa (Sinhala)</a></li>
      </ul>
    </div>
  );
}
