export default function NotFound() {
  return (
    <section className="container">
      <h1 className="font-serif text-3xl tracking-tight mb-3">
        Pagina niet gevonden
      </h1>
      <p className="text-slate-600 mb-6">
        De pagina die je zocht bestaat niet (meer).
      </p>
      <a href="/" className="text-indigo-700 hover:underline">
        Terug naar home
      </a>
    </section>
  );
}
