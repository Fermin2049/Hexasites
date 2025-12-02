export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Fast, secure and SEO-optimised websites built with modern technologies.",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps for iOS and Android, designed for performance.",
    },
    {
      title: "IT Consulting",
      description:
        "Technical strategy, infrastructure, cloud and digital transformation guidance.",
    },
    {
      title: "Business Automation",
      description:
        "Systems that automate workflows, reduce manual work and increase efficiency.",
    },
    {
      title: "Custom Software",
      description:
        "Tailored software solutions built to meet unique business needs.",
    },
    {
      title: "Technical Support",
      description:
        "Ongoing maintenance, updates and professional technical assistance.",
    },
  ];

  return (
    <section
      className="section-default max-w-6xl mx-auto"
      aria-labelledby="services-title"
    >
      <h2
        id="services-title"
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        Our Services
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
