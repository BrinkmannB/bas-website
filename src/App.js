export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-xl">
            Bas Brinkmann
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-neutral-600">
              Over mij
            </a>
            <a href="#values" className="hover:text-neutral-600">
              Waar ik voor sta
            </a>
            <a href="#value" className="hover:text-neutral-600">
              Wat ik breng
            </a>
            <a href="#clients" className="hover:text-neutral-600">
              Voor wie
            </a>
            <a href="#process" className="hover:text-neutral-600">
              Werkwijze
            </a>
            <a href="#contact" className="hover:text-neutral-600">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition"
          >
            Kennismaken <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
              AI-ethiek • Vertrouwenspersoon
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Tussen mens en machine:{" "}
              <span className="underline decoration-4 decoration-neutral-900 underline-offset-4">
                eerlijkheid
              </span>{" "}
              als uitgangspunt
            </h1>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              Ik help organisaties veilig, eerlijk en toekomstbestendig te
              werken — met een scherp oog voor mensen én een helder begrip van
              technologie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition"
              >
                Plan een kennismaking
              </a>
              <a
                href="#value"
                className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm hover:bg-neutral-100 transition"
              >
                Wat ik breng
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-xs text-neutral-500">
              <li className="px-3 py-1 rounded-full bg-neutral-100">
                MKB 10–250 FTE
              </li>
              <li className="px-3 py-1 rounded-full bg-neutral-100">NGO’s</li>
              <li className="px-3 py-1 rounded-full bg-neutral-100">
                Financiële sector & HR
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                alt="Zwart-wit bos met licht en schaduw"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-[10px] text-neutral-400 mt-2">
              Vervang later door je eigen zwart-wit beeld.
            </p>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER SECTIONS */}
      <section id="about" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Wie ik ben</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Ik ben Bas, extern vertrouwenspersoon en adviseur op het snijvlak
            van AI-ethiek en organisatiecultuur.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-neutral-200 bg-neutral-900 text-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold">Kennismaken</h2>
          <p className="mt-4 text-neutral-300">
            Mail me:{" "}
            <a className="underline" href="mailto:voorbeelden@jouwdomein.nl">
              voorbeelden@jouwdomein.nl
            </a>
          </p>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Bas Brinkmann
        </div>
      </footer>
    </div>
  );
}
