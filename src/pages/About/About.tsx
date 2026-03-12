const About = () => {
  return (
    <article>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about helping businesses achieve their full
            potential through strategic SEO implementation and digital marketing
            excellence.
          </p>
        </header>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses of all sizes with cutting-edge SEO tools and
              knowledge, making professional search engine optimization
              accessible and effective for everyone.
            </p>
          </section>
          <section className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become the world's most trusted resource for SEO education and
              tools, helping millions of websites achieve top search engine
              rankings and sustainable growth.
            </p>
          </section>
        </div>

        {/* Equipo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jane Smith", role: "CEO & Founder", icon: "👩‍💼" },
              { name: "John Doe", role: "CTO", icon: "👨‍💻" },
              { name: "Sarah Johnson", role: "Head of SEO", icon: "👩‍🔬" },
            ].map((member, idx) => (
              <article key={idx} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                  {member.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Valores */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                desc: "We strive for the highest quality in everything we do",
              },
              {
                title: "Innovation",
                desc: "We constantly evolve with the latest SEO trends",
              },
              {
                title: "Integrity",
                desc: "We practice ethical SEO and transparent communication",
              },
              {
                title: "Education",
                desc: "We believe in empowering through knowledge sharing",
              },
            ].map((value, idx) => (
              <article key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default About;
