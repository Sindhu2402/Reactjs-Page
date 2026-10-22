
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
    
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">
      MyWebsite
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#myNavbar"
      aria-controls="myNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse"
      id="myNavbar"
    >
      <div className="navbar-nav ms-auto gap-lg-2">

        <Link className="nav-link" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/register">
          Register
        </Link>

        <Link className="nav-link" to="/home">
          Home
        </Link>

        <Link className="nav-link" to="/services">
          Services
        </Link>

        <Link className="nav-link" to="/about">
          About
        </Link>

        <Link className="nav-link" to="/contact">
          Contact
        </Link>

      </div>
    </div>
  </div>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}



