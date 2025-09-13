export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
        {/* Bedrijfsnaam & slogan */}
        <div>
          <h3 className="font-serif text-xl text-slate-800">Luisterend Oor</h3>
          <p className="mt-2 text-sm text-slate-600">
            Vertrouwenspersoon &amp; AI-ethiek adviseur.
            <br />
            Luisteren • Helder maken • Richting geven.
          </p>
        </div>

        {/* Navigatie */}
        <nav className="space-y-2 text-sm">
          <h4 className="font-semibold text-slate-700">Navigatie</h4>
          <ul className="space-y-1">
            <li>
              <a href="#over" className="hover:text-indigo-600">
                Over
              </a>
            </li>
            <li>
              <a href="#diensten" className="hover:text-indigo-600">
                Diensten
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-slate-700">Contact</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:info@luisterendoor.info"
              className="hover:text-indigo-600"
            >
              info@luisterendoor.info
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/basbrinkmann"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              Bas Brinkmann
            </a>
          </p>

          <a
            href="https://calendly.com/vertrouwelijkluisterendoor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700 transition"
          >
            Plan een gesprek
          </a>
        </div>
      </div>

      {/* Onderste balk */}
      <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 text-center">
        <p>
          &copy; {new Date().getFullYear()} luisterendoor.info — alle rechten
          voorbehouden.
        </p>
      </div>
    </footer>
  );
}
