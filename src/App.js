import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Over from "./pages/Over";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; // let op: hoofdletter F en juiste map

export default function App() {
  return (
    <BrowserRouter>
      {/* Header */}
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

      {/* Main */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over" element={<Over />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}
