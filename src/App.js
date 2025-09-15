import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Over from "./pages/Over";
import Contact from "./pages/Contact";
import Diensten from "./pages/Diensten";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

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
              to="/diensten"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Diensten
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
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}
