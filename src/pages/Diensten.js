export default function Diensten() {
  return (
    <section className="container">
      <h1 className="font-serif text-3xl tracking-tight mb-8">Diensten</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="font-semibold text-lg">Luistersessies</h2>
          <p className="mt-2 text-slate-600">
            Structuur, ruimte en aandacht om vraagstukken te verhelderen.
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-600">
            <li>Intake & doel scherp</li>
            <li>Analyse & reflectie</li>
            <li>Concrete next steps</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="font-semibold text-lg">Verhaal & Positionering</h2>
          <p className="mt-2 text-slate-600">
            Kernboodschap, doelgroep en bewijs op één lijn.
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-600">
            <li>Kernboodschap & toon</li>
            <li>Doelgroep & cases</li>
            <li>Praktische messaging</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="font-semibold text-lg">Structuur & Flow</h2>
          <p className="mt-2 text-slate-600">
            Van complexe info naar heldere beslisstructuur.
          </p>
          <ul className="mt-3 list-disc pl-5 text-slate-600">
            <li>Informatie-architectuur</li>
            <li>Roadmap & ritme</li>
            <li>Heldere next steps</li>
          </ul>
        </article>
      </div>

      <a
        href="https://calendly.com/vertrouwelijkluisterendoor"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
      >
        Plan een gesprek
      </a>
    </section>
  );
}
