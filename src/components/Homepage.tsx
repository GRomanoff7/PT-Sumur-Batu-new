export const Homepage = () => {
  return (
    <div>
      {/* Hero Section with Auto-Sliding Background */}
      <section className="hero-section relative overflow-hidden text-white py-20 lg:py-32">
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

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

        {/* Content positioned on LEFT */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <i className="fas fa-award text-accent mr-2"></i>
              <span className="text-sm font-medium" data-translate="hero.badge">
                Silver System Integrator Partner
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span data-translate="hero.title">Your Partner in</span>
              <span
                className="text-accent block"
                data-translate="hero.titleAccent"
              >
                Automation
              </span>
              <span data-translate="hero.titleEnd">Engineering</span>
            </h1>
            <p
              className="text-xl mb-8 text-blue-100 leading-relaxed"
              data-translate="hero.description"
            >
              Official Silver System Integrator for Rockwell Automation.
              Delivering cutting-edge control systems, PLC programming, and
              industrial automation solutions since 2007.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-secondary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <i className="fas fa-phone mr-2"></i>
                <span data-translate="hero.ctaConsultation">
                  Get Free Consultation
                </span>
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
              >
                <i className="fas fa-info-circle mr-2"></i>
                <span data-translate="hero.ctaLearnMore">Learn More</span>
              </a>
            </div>
          </div>
        </div>
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

      {/* Core Business Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="coreBusiness.title"
            >
              Leading Automation & Drives System Engineering
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-translate="coreBusiness.subtitle"
            >
              PT Sumur Batu specializes in comprehensive automation solutions,
              from control system design to complete system integration and
              support services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-primary text-2xl"></i>
              </div>
              <h3
                className="text-xl font-semibold text-gray-800 mb-2"
                data-translate="coreBusiness.certifiedPartnership.title"
              >
                Certified Partnership
              </h3>
              <p
                className="text-gray-600"
                data-translate="coreBusiness.certifiedPartnership.description"
              >
                Official Silver System Integrator status with Rockwell
                Automation ensures quality and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-secondary text-2xl"></i>
              </div>
              <h3
                className="text-xl font-semibold text-gray-800 mb-2"
                data-translate="coreBusiness.expertTeam.title"
              >
                Expert Team
              </h3>
              <p
                className="text-gray-600"
                data-translate="coreBusiness.expertTeam.description"
              >
                30 skilled professionals including senior engineers with over 20
                years of experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-accent text-2xl"></i>
              </div>
              <h3
                className="text-xl font-semibold text-gray-800 mb-2"
                data-translate="coreBusiness.completeSolutions.title"
              >
                Complete Solutions
              </h3>
              <p
                className="text-gray-600"
                data-translate="coreBusiness.completeSolutions.description"
              >
                End-to-end automation services from design and programming to
                manufacturing and support.
              </p>
            </div>
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

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="industries.title"
            >
              Industries We Serve
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="industries.subtitle"
            >
              Expertise across diverse industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-tint text-blue-600 text-3xl mb-4"></i>
              <h3
                className="font-semibold text-gray-800"
                data-translate="industries.waterTreatment"
              >
                Water Treatment
              </h3>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-leaf text-green-600 text-3xl mb-4"></i>
              <h3
                className="font-semibold text-gray-800"
                data-translate="industries.pulpPaper"
              >
                Pulp and Paper
              </h3>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-hammer text-gray-600 text-3xl mb-4"></i>
              <h3
                className="font-semibold text-gray-800"
                data-translate="industries.metalIndustry"
              >
                Metal Industry
              </h3>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-mountain text-yellow-600 text-3xl mb-4"></i>
              <h3
                className="font-semibold text-gray-800"
                data-translate="industries.mining"
              >
                Mining
              </h3>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-flask text-purple-600 text-3xl mb-4"></i>
              <h3
                className="font-semibold text-gray-800"
                data-translate="industries.processPlants"
              >
                Process Plants
              </h3>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-conveyor-belt text-orange-600 text-3xl mb-4"></i>
              <h3
                className="font-semibold text-gray-800"
                data-translate="industries.materialHandling"
              >
                Material Handling
              </h3>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-bolt text-red-600 text-3xl mb-4"></i>
              <h3
                className="font-semibold text-gray-800"
                data-translate="industries.powerPlant"
              >
                Power Plant
              </h3>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-print text-indigo-600 text-3xl mb-4"></i>
              <h3
                className="font-semibold text-gray-800"
                data-translate="industries.printing"
              >
                Printing
              </h3>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/industries"
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <span data-translate="industries.exploreAll">
                Explore All Industries
              </span>{" "}
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Our Valued Customers - Infinite Scroll Animation */}
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
              {[...Array(12)].map((_, index) => (
                <div key={`logo-1-${index}`} className="logo-item">
                  <div className="h-16 flex items-center justify-center w-full">
                    <span
                      className="text-gray-500 text-sm font-medium"
                      data-translate="customers.clientLogo"
                    >
                      Client Logo {index + 1}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[...Array(12)].map((_, index) => (
                <div key={`logo-2-${index}`} className="logo-item">
                  <div className="h-16 flex items-center justify-center w-full">
                    <span
                      className="text-gray-500 text-sm font-medium"
                      data-translate="customers.clientLogo"
                    >
                      Client Logo {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4" data-translate="cta.title">
            Ready to Automate Your Operations?
          </h2>
          <p
            className="text-xl mb-8 text-blue-100"
            data-translate="cta.subtitle"
          >
            Get expert consultation from our certified automation engineers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-2"></i>
              <span data-translate="cta.contactUs">Contact Us Today</span>
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <i className="fas fa-cogs mr-2"></i>
              <span data-translate="cta.viewServices">View Our Services</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
