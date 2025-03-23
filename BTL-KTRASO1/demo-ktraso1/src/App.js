import "./styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.js";
import Destination from "./pages/Destination.js";
import Introduce from "./pages/Introduce.js";
import Contact from "./pages/Contact.js";

function App() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <>
      <header id="Header">
        <h1>Du Lịch Khám Phá</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className={activePage === "/" ? "active" : ""}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                to="/Destination"
                className={activePage === "/Destination" ? "active" : ""}
              >
                Điểm đến
              </Link>
            </li>
            <li>
              <Link
                to="/Introduce"
                className={activePage === "/Introduce" ? "active" : ""}
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={activePage === "/Contact" ? "active" : ""}
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default function AppFinal() {
  return (
    <Router>
      <App />
    </Router>
  );
}
