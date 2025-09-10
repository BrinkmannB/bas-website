import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Over from "./pages/Over";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="container">
          <nav aria-label="Hoofdmenu">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="/over"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Over mij
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over" element={<Over />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="container">
        © {new Date().getFullYear()} Vertrouwelijk Luisterend Oor · Alle rechten
        voorbehouden.
      </footer>
    </BrowserRouter>
  );
}
