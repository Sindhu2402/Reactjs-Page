
import { Link } from "react-router-dom";

export default function Login() {
  function handleLogin(e) {
    e.preventDefault();
    alert("Login form submitted!");
  }

  return (
    <div className="form-container">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <label className="form-label">Email</label>
        <input type="email" className="form-control mb-3"
          placeholder="Enter your email" required />

        <label className="form-label">Password</label>
        <input type="password" className="form-control mb-3"
          placeholder="Enter your password" required />

        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="text-center mt-3">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}