export default function Services() {
  const services = [
    {
      title: "Backend & API Development (.NET Core / Node.js)",
      description:
        "We design and build secure, scalable, high-performance APIs using .NET Core and Node.js. This includes JWT authentication, role-based access control, SQL optimisation, domain-driven structure and Swagger documentation.",
    },
    {
      title: "Business Systems & Workflow Automation",
      description:
        "We create complete business platforms such as booking systems, payment modules, clinical/laboratory systems and workflow automation that reduces manual work and improves efficiency.",
    },
    {
      title: "Full-Stack Web Development (React / Next.js)",
      description:
        "Modern, fast and responsive web applications using React, Next.js and Tailwind CSS, including dashboards, business portals and high-performance websites.",
    },
    {
      title: "Mobile App Development (Android – Kotlin/Java, MVVM & React Native)",
      description:
        "Native Android apps built with Kotlin/Java and MVVM, including secure authentication, payments and offline support. We also build cross-platform apps using React Native.",
    },
    {
      title: "Cloud, DevOps & Technical Architecture",
      description:
        "Implementation of secure deployments, AWS integration, Docker environments and CI/CD pipelines to support scalable and reliable systems.",
    },
    {
      title: "Technical Consulting & Software Advisory",
      description:
        "We help companies choose the right technologies, improve system performance and plan long-term digital strategies.",
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
