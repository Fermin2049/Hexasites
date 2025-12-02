export default function ContactCTA() {
  return (
    <section
      className="section-default max-w-4xl mx-auto text-center"
      aria-labelledby="contact-cta-title"
    >
      <h2
        id="contact-cta-title"
        className="text-3xl md:text-4xl font-bold text-white"
      >
        Ready to Start Your Next Project?
      </h2>

      <p className="text-gray-300 mt-4 text-lg">
        Whether you need a website, mobile app or a complete digital solution —
        we can help bring your ideas to life.
      </p>

      <button
        className="mt-8 px-10 py-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-lg hover:bg-white/20 transition"
      >
        Get in Touch
      </button>
    </section>
  );
}
