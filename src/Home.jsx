
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero text-center">
      <h1>Welcome to MyWebsite</h1>
      <p>Discover our services and create your account.</p>
      <Link to="/services" className="btn btn-primary m-2">
        Explore Services
      </Link>
      <Link to="/register" className="btn btn-outline-dark m-2">
        Get Started
      </Link>
    </div>
  );
}