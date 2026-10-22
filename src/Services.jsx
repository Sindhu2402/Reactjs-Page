
const services = [
  {
    title: "Web Development",
    description: "Responsive and modern websites."
  },
  {
    title: "UI Design",
    description: "Clean and user-friendly designs."
  },
  {
    title: "Technical Support",
    description: "Help with technical problems."
  }
];

export default function Services() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Services</h1>
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center p-4">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => alert(service.title)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}