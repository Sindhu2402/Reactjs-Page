
import { Link } from "react-router-dom";

export default function Register() {
  function handleRegister(e) {
    e.preventDefault();
    alert("Registration form submitted!");
  }

  return (
    <div className="form-container">
      <h2 className="text-center mb-4">Create Account</h2>
      <form onSubmit={handleRegister}>
        <label className="form-label">Full Name</label>
        <input type="text" className="form-control mb-3"
          placeholder="Enter your name" required />

        <label className="form-label">Email</label>
        <input type="email" className="form-control mb-3"
          placeholder="Enter your email" required />

        <label className="form-label">Password</label>
        <input type="password" className="form-control mb-3"
          placeholder="Create a password" required />

        <label className="form-label">Confirm Password</label>
        <input type="password" className="form-control mb-3"
          placeholder="Confirm your password" required />

        <button className="btn btn-success w-100">Register</button>
      </form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}