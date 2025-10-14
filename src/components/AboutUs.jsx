function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-4 bg-white dark:bg-gray-900 min-h-screen">
      {/* Intro Section */}
      <section
        id="intro"
        className="min-h-[90vh] flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-back-2">
            About <span className="text-[#6366f1]">Us</span>
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            We are passionate developers and designers dedicated to creating
            AI-powered tools that turn your ideas into stunning anime artwork.
            Our mission is to make high-quality anime creation accessible to
            everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        id="mission-vision"
        className="min-h-[70vh] flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-700 p-6 rounded-2xl shadow-xl border border-purple-200 dark:border-purple-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-300">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              To empower artists and enthusiasts to create personalized anime
              artwork quickly and effortlessly using advanced AI technology.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-700 p-6 rounded-2xl shadow-xl border border-cyan-200 dark:border-cyan-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-cyan-600 dark:text-cyan-300">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              To become the leading platform for AI-generated anime artwork,
              bridging creativity and technology while making it fun and
              accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="min-h-[50vh] flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-black mb-6 leading-tight text-back-2">
            Meet Our Team
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Our team consists of passionate AI developers, artists, and UX/UI
            designers who work together to deliver high-quality tools and
            experiences to our users.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
