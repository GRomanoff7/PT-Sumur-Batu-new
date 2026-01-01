export const Homepage = () => {
  // Customer data - easily customizable
  const customers = [
    {
      name: "PT Nestle Indonesia",
      logo: "/static/logo/nestle.jpeg",
      url: "https://www.nestle.co.id",
    },
    {
      name: "PT Sorini Agro Asia Corporindo",
      logo: "/static/logo/sorini.jpeg",
      url: "https://www.cargill.co.id/id/lokasi",
    },
    {
      name: "PT Surya Pamenang",
      logo: "/static/logo/surya_pamenang.png",
      url: "https://www.suryapamenang.com/",
    },
    {
      name: "PT Fajar Surya Wisesa",
      logo: "/static/logo/fajar_surya.png",
      url: "https://www.fajarpaper.com/?lang=id",
    },
    {
      name: "PT Amman Mineral Nusa Tenggara",
      logo: "/static/logo/amman.jpeg",
      url: "https://www.amman.co.id/id",
    },
    {
      name: "PT Suez Water Treatment Indonesia",
      logo: "/static/logo/suez.png",
      url: "https://indocement.co.id",
    },
    {
      name: "PT. Tirta Lyonnaise Medan",
      logo: "/static/logos/holcim.svg",
      url: "https://holcim.co.id",
    },
    {
      name: "PT Tumbakmas Inti Mulia",
      logo: "/static/logo/tumbakmas.jpeg",
      url: "https://unilever.co.id",
    },
    {
      name: "PT Lintech Duta Pratama",
      logo: "/static/logo/lintech.jpeg",
      url: "https://astra.co.id",
    },
  ];

  return (
    <div>
      {/* Hero Section with Auto-Sliding Background - Modern & Elegant */}
      <section
        className="hero-section relative overflow-hidden text-white py-24 lg:py-40"
        data-testid="hero-section"
      >
        {/* Sliding Background Images */}
        <div className="hero-slider">
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NjU0NTkxMjV8MA&ixlib=rb-4.1.0&q=85')",
            }}
          ></div>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1717386255773-a456c611dc4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NjU0NTkxMjV8MA&ixlib=rb-4.1.0&q=85')",
            }}
          ></div>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxmYWN0b3J5fGVufDB8fHx8MTc2NTQ1OTEzNXww&ixlib=rb-4.1.0&q=85')",
            }}
          ></div>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg')",
            }}
          ></div>
        </div>

        {/* Enhanced Multi-Layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent z-10"></div>

        {/* Decorative Geometric Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl z-10 animate-pulse-slower"></div>

        {/* Content positioned on LEFT with enhanced animations */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-3xl">
            {/* Enhanced Badge with Glassmorphism */}
            <div
              className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 hero-badge-animate"
              data-testid="hero-badge"
            >
              <i className="fas fa-award text-accent mr-3 text-lg animate-pulse-badge"></i>
              <span
                className="text-sm font-semibold tracking-wide"
                data-translate="hero.badge"
              >
                Silver System Integrator Partner
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Enhanced Typography with Better Hierarchy */}
            <h1
              className="text-5xl lg:text-7xl font-extrabold mb-8 leading-normal hero-title-animate"
              data-testid="hero-title"
            >
              <span
                className="block mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent py-2 decoration-clone"
                data-translate="hero.title"
              >
                Your Partner in
              </span>
              <span
                className="block text-accent drop-shadow-2xl text-6xl lg:text-8xl mb-4 py-2 hero-accent-glow"
                data-translate="hero.titleAccent"
              >
                Automation
              </span>
              <span
                className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent py-3 decoration-clone"
                data-translate="hero.titleEnd"
              >
                Engineering
              </span>
            </h1>

            {/* Enhanced Description */}
            <p
              className="text-xl lg:text-2xl mb-10 text-blue-50 leading-relaxed max-w-2xl font-light hero-description-animate"
              data-translate="hero.description"
              data-testid="hero-description"
            >
              Official Silver System Integrator for Rockwell Automation.
              Delivering cutting-edge control systems, PLC programming, and
              industrial automation solutions since 2007.
            </p>

            {/* Modern CTA Buttons with Enhanced Effects */}
            <div className="flex flex-col sm:flex-row gap-5 hero-cta-animate">
              <a
                href="/contact"
                className="group relative bg-secondary hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-red-500/50 hover:scale-105 overflow-hidden"
                data-testid="hero-cta-consultation"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <i className="fas fa-phone mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300"></i>
                <span
                  className="relative z-10"
                  data-translate="hero.ctaConsultation"
                >
                  Get Free Consultation
                </span>
                <i className="fas fa-arrow-right ml-3 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
              </a>
              <a
                href="/about"
                className="group relative border-2 border-white/80 text-white hover:bg-white hover:text-primary px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:shadow-2xl hover:scale-105 overflow-hidden"
                data-testid="hero-cta-learn-more"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <i className="fas fa-info-circle mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300"></i>
                <span
                  className="relative z-10 group-hover:text-primary transition-colors"
                  data-translate="hero.ctaLearnMore"
                >
                  Learn More
                </span>
                <i className="fas fa-arrow-right ml-3 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:text-primary"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Line Element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 z-20"></div>
      </section>

      {/* Stats Section with CountUp Animation & Spotlight Effect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              data-translate="stats.title"
            >
              Proven Track Record of Excellence
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              data-translate="stats.subtitle"
            >
              Numbers that reflect our commitment to quality and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div
              className="spotlight-card relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 transition-all duration-300 shadow-md hover:shadow-lg"
              data-testid="stat-years"
            >
              <div className="spotlight-overlay"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 mb-3">
                  <span className="countup" data-target="17" data-suffix="+">
                    0
                  </span>
                </div>
                <div
                  className="text-sm font-semibold text-gray-600 uppercase tracking-wider"
                  data-translate="stats.yearsExperience"
                >
                  Years of Experience
                </div>
              </div>
            </div>

            <div
              className="spotlight-card relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 transition-all duration-300 shadow-md hover:shadow-lg"
              data-testid="stat-engineers"
            >
              <div className="spotlight-overlay"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-700 mb-3">
                  <span className="countup" data-target="30" data-suffix="+">
                    0
                  </span>
                </div>
                <div
                  className="text-sm font-semibold text-gray-600 uppercase tracking-wider"
                  data-translate="stats.expertEngineers"
                >
                  Expert Engineers
                </div>
              </div>
            </div>

            <div
              className="spotlight-card relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 transition-all duration-300 shadow-md hover:shadow-lg"
              data-testid="stat-projects"
            >
              <div className="spotlight-overlay"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-amber-700 mb-3">
                  <span className="countup" data-target="500" data-suffix="+">
                    0
                  </span>
                </div>
                <div
                  className="text-sm font-semibold text-gray-600 uppercase tracking-wider"
                  data-translate="stats.completedProjects"
                >
                  Completed Projects
                </div>
              </div>
            </div>

            <div
              className="spotlight-card relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 transition-all duration-300 shadow-md hover:shadow-lg"
              data-testid="stat-industries"
            >
              <div className="spotlight-overlay"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-700 mb-3">
                  <span className="countup" data-target="8" data-suffix="+">
                    0
                  </span>
                </div>
                <div
                  className="text-sm font-semibold text-gray-600 uppercase tracking-wider"
                  data-translate="stats.industriesServed"
                >
                  Industries Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Introduction - Modern & Elegant Redesign */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="mx-4 text-sm font-semibold text-primary uppercase tracking-widest">
                Core Business
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="coreBusiness.title"
            >
              Leading Automation & Drives
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                System Engineering
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="coreBusiness.subtitle"
            >
              PT Sumur Batu specializes in comprehensive automation solutions,
              from control system design to complete system integration and
              support services.
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Certified Partnership */}
            <div
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              data-testid="core-business-card-1"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-certificate text-primary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300"
                  data-translate="coreBusiness.certifiedPartnership.title"
                >
                  Certified Partnership
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="coreBusiness.certifiedPartnership.description"
                >
                  Official Silver System Integrator status with Rockwell
                  Automation ensures quality and reliability.
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2 - Expert Team */}
            <div
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2"
              data-testid="core-business-card-2"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-users text-secondary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors duration-300"
                  data-translate="coreBusiness.expertTeam.title"
                >
                  Expert Team
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="coreBusiness.expertTeam.description"
                >
                  30 skilled professionals including senior engineers with over
                  20 years of experience.
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-secondary to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Complete Solutions */}
            <div
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
              data-testid="core-business-card-3"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-tools text-accent text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300"
                  data-translate="coreBusiness.completeSolutions.title"
                >
                  Complete Solutions
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="coreBusiness.completeSolutions.description"
                >
                  End-to-end automation services from design and programming to
                  manufacturing and support.
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Optional CTA or Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              Trusted by leading companies across Indonesia for over 17 years
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              data-translate="services.title"
            >
              Our Core Services
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-translate="services.subtitle"
            >
              Comprehensive automation solutions tailored to your industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/873261/2025-12-30/fef38393-42b8-43b0-885f-f46a210eb608.png"
                  alt="Control System Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3
                    className="text-2xl font-bold mb-2 leading-tight"
                    data-translate="services.controlSystem.title"
                  >
                    Control System Design
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p
                  className="text-gray-600 leading-relaxed mb-4"
                  data-translate="services.controlSystem.description"
                >
                  Custom control system architecture and engineering design for
                  optimal performance.
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span data-translate="services.learnMore">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/873261/2025-12-30/f6172df2-d435-4635-b2a7-9df83e012da2.png"
                  alt="PLC & HMI/SCADA Programming"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3
                    className="text-2xl font-bold mb-2 leading-tight"
                    data-translate="services.plcProgramming.title"
                  >
                    PLC & HMI/SCADA Programming
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p
                  className="text-gray-600 leading-relaxed mb-4"
                  data-translate="services.plcProgramming.description"
                >
                  Advanced programming solutions for Allen-Bradley controllers
                  and visualization systems.
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span data-translate="services.learnMore">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/873261/2025-12-30/878da9c1-84aa-46fa-ac54-e9ae7f8610bc.png"
                  alt="Control Panel & MCC Manufacturing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3
                    className="text-2xl font-bold mb-2 leading-tight"
                    data-translate="services.controlPanel.title"
                  >
                    Control Panel & MCC Manufacturing
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p
                  className="text-gray-600 leading-relaxed mb-4"
                  data-translate="services.controlPanel.description"
                >
                  Cubic Modular Systems and custom panel fabrication with
                  quality assurance.
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span data-translate="services.learnMore">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/873261/2025-12-30/e64c490d-f7e7-4b94-b900-16ec7ec1bcbd.png"
                  alt="Technical Support & Commissioning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3
                    className="text-2xl font-bold mb-2 leading-tight"
                    data-translate="services.technicalSupport.title"
                  >
                    Technical Support & Commissioning
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p
                  className="text-gray-600 leading-relaxed mb-4"
                  data-translate="services.technicalSupport.description"
                >
                  Comprehensive support services including troubleshooting and
                  system commissioning.
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span data-translate="services.learnMore">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Enhanced with Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              data-translate="industries.title"
            >
              Industries We Serve
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-translate="industries.subtitle"
            >
              Expertise across diverse industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Water Treatment */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50fGVufDB8fHx8MTc2NzI0MTEwMnww&ixlib=rb-4.1.0&q=85"
                  alt="Water Treatment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <i className="fas fa-tint text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
                  <h3
                    className="text-xl font-bold text-center"
                    data-translate="industries.waterTreatment"
                  >
                    Water Treatment
                  </h3>
                </div>
              </div>
            </div>

            {/* Pulp and Paper */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1732984160322-ec48339d8eb7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwYXBlciUyMG1pbGwlMjBmYWN0b3J5fGVufDB8fHx8MTc2NzI0MTEwN3ww&ixlib=rb-4.1.0&q=85"
                  alt="Pulp and Paper"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <i className="fas fa-leaf text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
                  <h3
                    className="text-xl font-bold text-center"
                    data-translate="industries.pulpPaper"
                  >
                    Pulp and Paper
                  </h3>
                </div>
              </div>
            </div>

            {/* Metal Industry */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxtZXRhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzY3MjQxMTE1fDA&ixlib=rb-4.1.0&q=85"
                  alt="Metal Industry"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <i className="fas fa-hammer text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
                  <h3
                    className="text-xl font-bold text-center"
                    data-translate="industries.metalIndustry"
                  >
                    Metal Industry
                  </h3>
                </div>
              </div>
            </div>

            {/* Mining */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2566850/pexels-photo-2566850.jpeg"
                  alt="Mining"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 via-yellow-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <i className="fas fa-mountain text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
                  <h3
                    className="text-xl font-bold text-center"
                    data-translate="industries.mining"
                  >
                    Mining
                  </h3>
                </div>
              </div>
            </div>

            {/* Process Plants */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629447388369-760612337eff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxjaGVtaWNhbCUyMHBsYW50fGVufDB8fHx8MTc2NzI0MTEyN3ww&ixlib=rb-4.1.0&q=85"
                  alt="Process Plants"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <i className="fas fa-flask text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
                  <h3
                    className="text-xl font-bold text-center"
                    data-translate="industries.processPlants"
                  >
                    Process Plants
                  </h3>
                </div>
              </div>
            </div>

            {/* Material Handling */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx3YXJlaG91c2UlMjBhdXRvbWF0aW9ufGVufDB8fHx8MTc2NzI0MTEzMnww&ixlib=rb-4.1.0&q=85"
                  alt="Material Handling"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-orange-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <i className="fas fa-conveyor-belt text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
                  <h3
                    className="text-xl font-bold text-center"
                    data-translate="industries.materialHandling"
                  >
                    Material Handling
                  </h3>
                </div>
              </div>
            </div>

            {/* Power Plant */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxwb3dlciUyMHBsYW50fGVufDB8fHx8MTc2NzI0MTEzN3ww&ixlib=rb-4.1.0&q=85"
                  alt="Power Plant"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <i className="fas fa-bolt text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
                  <h3
                    className="text-xl font-bold text-center"
                    data-translate="industries.powerPlant"
                  >
                    Power Plant
                  </h3>
                </div>
              </div>
            </div>

            {/* Printing */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1693031630369-bd429a57f115?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxwcmludGluZyUyMHByZXNzfGVufDB8fHx8MTc2NzI0MTE0M3ww&ixlib=rb-4.1.0&q=85"
                  alt="Printing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <i className="fas fa-print text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
                  <h3
                    className="text-xl font-bold text-center"
                    data-translate="industries.printing"
                  >
                    Printing
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/industries"
              className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center shadow-lg hover:shadow-xl"
              data-testid="industries-explore-btn"
            >
              <span data-translate="industries.exploreAll">
                Explore All Industries
              </span>
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Our Valued Customers - Infinite Scroll Animation with Clickable Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="customers.title"
            >
              Our Valued Customers
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="customers.subtitle"
            >
              Trusted by leading companies across Indonesia
            </p>
          </div>

          <div className="logo-scroll-container py-8">
            <div className="logo-scroll-track">
              {/* First set of logos */}
              {customers.map((customer, index) => (
                <div key={`logo-1-${index}`} className="logo-item">
                  <a
                    href={customer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full hover:opacity-80 transition-opacity"
                    title={customer.name}
                  >
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="h-14 w-auto object-contain transition-all duration-300"
                    />
                  </a>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {customers.map((customer, index) => (
                <div key={`logo-2-${index}`} className="logo-item">
                  <a
                    href={customer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full hover:opacity-80 transition-opacity"
                    title={customer.name}
                  >
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="h-14 w-auto object-contain transition-all duration-300"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Modern Glassmorphism Design */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background Elements - Matching Hero Style */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>

        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Main Content Container with Glassmorphism */}
          <div className="max-w-5xl mx-auto">
            {/* Badge with Glassmorphism - Matching Hero Style */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-md rounded-full px-6 py-3 border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300">
                <div className="h-2 w-2 bg-secondary rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                  Let's Work Together
                </span>
              </div>
            </div>

            {/* Main CTA Card with Enhanced Design */}
            <div className="relative group">
              {/* Glassmorphism Card */}
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-gray-200/50 shadow-2xl">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>

                {/* Spotlight Effect */}
                <div className="spotlight-overlay"></div>

                <div className="relative z-10 text-center">
                  {/* Enhanced Typography */}
                  <h2
                    className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
                    data-translate="cta.title"
                    data-testid="cta-title"
                  >
                    <span className="block mb-2">Ready to Automate</span>
                    <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      Your Operations?
                    </span>
                  </h2>

                  <p
                    className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    data-translate="cta.subtitle"
                    data-testid="cta-subtitle"
                  >
                    Get expert consultation from our certified automation
                    engineers and transform your industrial processes today
                  </p>

                  {/* Enhanced CTA Buttons with Modern Effects */}
                  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    {/* Primary CTA - Contact */}
                    <a
                      href="/contact"
                      className="group/btn relative bg-gradient-to-r from-secondary to-red-700 hover:from-red-700 hover:to-secondary text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-secondary/30 hover:scale-105 overflow-hidden min-w-[280px]"
                      data-testid="cta-contact-btn"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>

                      {/* Animated Icon Container */}
                      <div className="relative z-10 mr-3 w-6 h-6 flex items-center justify-center">
                        <i className="fas fa-phone transform group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-300"></i>
                      </div>

                      <span
                        className="relative z-10"
                        data-translate="cta.contactUs"
                      >
                        Contact Us Today
                      </span>

                      <i className="fas fa-arrow-right ml-3 relative z-10 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300"></i>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </a>

                    {/* Secondary CTA - Services */}
                    <a
                      href="/services"
                      className="group/btn relative bg-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 text-primary hover:text-white border-2 border-primary px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden min-w-[280px]"
                      data-testid="cta-services-btn"
                    >
                      {/* Animated Icon Container */}
                      <div className="relative z-10 mr-3 w-6 h-6 flex items-center justify-center">
                        <i className="fas fa-cogs transform group-hover/btn:rotate-180 transition-all duration-500"></i>
                      </div>

                      <span
                        className="relative z-10"
                        data-translate="cta.viewServices"
                      >
                        View Our Services
                      </span>

                      <i className="fas fa-arrow-right ml-3 relative z-10 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300"></i>
                    </a>
                  </div>

                  {/* Additional Trust Indicators */}
                  <div className="mt-12 pt-8 border-t border-gray-200/50">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-secondary mr-2"></i>
                        <span>Free Consultation</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-secondary mr-2"></i>
                        <span>17+ Years Experience</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-secondary mr-2"></i>
                        <span>Certified Partner</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accent Decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/20 rounded-br-3xl"></div>
              </div>

              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>

            {/* Bottom Contact Info */}
            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm font-medium mb-2">
                Or reach us directly at
              </p>
              <a
                href="tel:+62318798168"
                className="text-primary hover:text-secondary font-bold text-lg transition-colors inline-flex items-center"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                +62-31-879.8168
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      </section>
    </div>
  );
};
