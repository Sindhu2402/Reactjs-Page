
export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Your message has been submitted!");
  }

  return (
    <div className="form-container">
      <h2 className="text-center mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name"
          required
        />

        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          required
        />

        <label className="form-label">Message</label>
        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Write your message"
          required
        />

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </div>
  );
}