export const ServicesPage = () => {
  return (
    <div>
      {/* Engineering & Design - Modern & Elegant Redesign */}
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
                Engineering & Design
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="servicesPage.engineeringTitle"
            >
              Control System &
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Drives System Design
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="servicesPage.engineeringDesc"
            >
              Our expert engineers design comprehensive control and drives
              systems tailored to your specific industrial requirements. We
              leverage cutting-edge technology and proven methodologies to
              deliver optimal performance, reliability, and efficiency.
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Card 1 - Custom System Architecture */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-project-diagram text-primary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300"
                  data-translate="servicesPage.customArchitecture"
                >
                  Custom System Architecture
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="servicesPage.customArchitectureDesc"
                >
                  Tailored designs for optimal performance
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2 - Scalable Solutions */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-cogs text-secondary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors duration-300"
                  data-translate="servicesPage.scalableSolutions"
                >
                  Scalable Solutions
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="servicesPage.scalableSolutionsDesc"
                >
                  Future-ready systems that grow with your business
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-secondary to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Compliance & Standards */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-shield-alt text-accent text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300"
                  data-translate="servicesPage.complianceStandards"
                >
                  Compliance & Standards
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="servicesPage.complianceStandardsDesc"
                >
                  Meeting all industrial safety and quality standards
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Design Capabilities Grid - Enhanced with Images */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              Design Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* System Architecture */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/877530/2026-01-01/46884910-97b3-4dc3-9a2b-21da609ee94c.png"
                    alt="System Architecture"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="fas fa-project-diagram text-white text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4
                    className="font-bold text-gray-800 text-lg"
                    data-translate="servicesPage.systemArchitecture"
                  >
                    System Architecture
                  </h4>
                </div>
              </div>

              {/* Control Design */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/877530/2026-01-01/4a411372-403d-4731-b49f-4d546736d5ef.png"
                    alt="Control Design"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="fas fa-cogs text-white text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4
                    className="font-bold text-gray-800 text-lg"
                    data-translate="servicesPage.controlDesign"
                  >
                    Control Design
                  </h4>
                </div>
              </div>

              {/* Drive Systems */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/877530/2026-01-01/a2111e79-8f2d-4146-becd-19a0094364a1.png"
                    alt="Drive Systems"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="fas fa-tachometer-alt text-white text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4
                    className="font-bold text-gray-800 text-lg"
                    data-translate="servicesPage.driveSystems"
                  >
                    Drive Systems
                  </h4>
                </div>
              </div>

              {/* Safety Systems */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/877530/2026-01-01/d91bd36d-e00b-4754-8f0a-8bf4557cfabd.png"
                    alt="Safety Systems"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="fas fa-shield-alt text-white text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4
                    className="font-bold text-gray-800 text-lg"
                    data-translate="servicesPage.safetySystems"
                  >
                    Safety Systems
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Optional CTA or Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              Certified engineering solutions backed by 17+ years of expertise
            </p>
          </div>
        </div>
      </section>

      {/* Programming & Integration - Modern & Elegant Redesign */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary"></div>
              <span className="mx-4 text-sm font-semibold text-secondary uppercase tracking-widest">
                Programming & Integration
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="servicesPage.programmingTitle"
            >
              PLC & HMI/SCADA
              <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Programming Excellence
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="servicesPage.programmingDesc"
            >
              Our experienced programmers develop sophisticated control logic
              and intuitive operator interfaces using Allen-Bradley platforms.
              We ensure seamless integration between all system components for
              optimal performance and user experience.
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Card 1 - Advanced Programming */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-laptop-code text-secondary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors duration-300"
                  data-translate="servicesPage.advancedProgramming"
                >
                  Advanced Programming
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="servicesPage.advancedProgrammingDesc"
                >
                  Ladder logic, structured text, and function blocks
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-secondary to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2 - System Integration */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-link text-accent text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300"
                  data-translate="servicesPage.systemIntegration"
                >
                  System Integration
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="servicesPage.systemIntegrationDesc"
                >
                  Seamless connectivity between all components
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Testing & Debugging */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-green-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-bug text-green-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300"
                  data-translate="servicesPage.testingDebugging"
                >
                  Testing & Debugging
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="servicesPage.testingDebuggingDesc"
                >
                  Comprehensive testing for reliable operation
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Programming Capabilities Grid - Enhanced with Images */}
          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              Programming Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* PLC Programming */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/877548/2026-01-01/a27d18f5-c253-41ad-a8c1-65ea87d20993.png"
                    alt="PLC Programming"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="fas fa-microchip text-white text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h4
                    className="font-bold text-gray-800 text-lg mb-2 text-center"
                    data-translate="servicesPage.plcProgramming"
                  >
                    PLC Programming
                  </h4>
                  <p
                    className="text-sm text-gray-600 text-center"
                    data-translate="servicesPage.plcProgrammingDesc"
                  >
                    ControlLogix, CompactLogix, Micro800
                  </p>
                </div>
              </div>

              {/* HMI Development */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/877548/2026-01-01/2187456c-9996-46e4-93d0-2811d4e9af7a.png"
                    alt="HMI Development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="fas fa-desktop text-white text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h4
                    className="font-bold text-gray-800 text-lg mb-2 text-center"
                    data-translate="servicesPage.hmiDevelopment"
                  >
                    HMI Development
                  </h4>
                  <p
                    className="text-sm text-gray-600 text-center"
                    data-translate="servicesPage.hmiDevelopmentDesc"
                  >
                    PanelView, FactoryTalk View
                  </p>
                </div>
              </div>

              {/* SCADA Systems */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/877548/2026-01-01/da364c9c-abec-4e93-b5fd-a37ecfb8a2b7.png"
                    alt="SCADA Systems"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="fas fa-chart-line text-white text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h4
                    className="font-bold text-gray-800 text-lg mb-2 text-center"
                    data-translate="servicesPage.scadaSystems"
                  >
                    SCADA Systems
                  </h4>
                  <p
                    className="text-sm text-gray-600 text-center"
                    data-translate="servicesPage.scadaSystemsDesc"
                  >
                    FactoryTalk View SE
                  </p>
                </div>
              </div>

              {/* Motion Control */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/877548/2026-01-01/6e3ece9a-d150-4851-aa80-d457b5e90788.png"
                    alt="Motion Control"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <i className="fas fa-sync text-white text-3xl drop-shadow-lg"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h4
                    className="font-bold text-gray-800 text-lg mb-2 text-center"
                    data-translate="servicesPage.motionControl"
                  >
                    Motion Control
                  </h4>
                  <p
                    className="text-sm text-gray-600 text-center"
                    data-translate="servicesPage.motionControlDesc"
                  >
                    Kinetix Servo Systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional CTA or Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              Expert programming solutions using industry-leading Allen-Bradley
              platforms
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-2 mb-6">
              <i className="fas fa-industry text-accent mr-2"></i>
              <span
                className="text-accent font-semibold"
                data-translate="servicesPage.manufacturingBadge"
              >
                Manufacturing
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="servicesPage.manufacturingTitle"
            >
              Control Panel & MCC Manufacturing
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-translate="servicesPage.manufacturingSubtitle"
            >
              High-quality panel fabrication using both Cubic Modular Systems
              and custom local panels
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-8">
              <h3
                className="text-2xl font-bold text-gray-800 mb-6"
                data-translate="servicesPage.cubicModularTitle"
              >
                Cubic Modular Systems
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-cube text-accent mr-3"></i>
                  <span
                    className="text-gray-700"
                    data-translate="servicesPage.cubicModular1"
                  >
                    Standardized modular design
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-accent mr-3"></i>
                  <span
                    className="text-gray-700"
                    data-translate="servicesPage.cubicModular2"
                  >
                    Faster assembly and delivery
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-accent mr-3"></i>
                  <span
                    className="text-gray-700"
                    data-translate="servicesPage.cubicModular3"
                  >
                    Superior quality assurance
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-wrench text-accent mr-3"></i>
                  <span
                    className="text-gray-700"
                    data-translate="servicesPage.cubicModular4"
                  >
                    Easy maintenance and expansion
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
              <h3
                className="text-2xl font-bold text-gray-800 mb-6"
                data-translate="servicesPage.customPanelsTitle"
              >
                Custom Local Panels
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-tools text-primary mr-3"></i>
                  <span
                    className="text-gray-700"
                    data-translate="servicesPage.customPanels1"
                  >
                    Tailored to specific requirements
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-dollar-sign text-primary mr-3"></i>
                  <span
                    className="text-gray-700"
                    data-translate="servicesPage.customPanels2"
                  >
                    Cost-effective solutions
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                  <span
                    className="text-gray-700"
                    data-translate="servicesPage.customPanels3"
                  >
                    Local sourcing and support
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-hammer text-primary mr-3"></i>
                  <span
                    className="text-gray-700"
                    data-translate="servicesPage.customPanels4"
                  >
                    Skilled local craftsmanship
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3
              className="text-2xl font-bold text-gray-800 mb-6 text-center"
              data-translate="servicesPage.manufacturingCapabilities"
            >
              Manufacturing Capabilities
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-bolt text-accent text-4xl mb-4"></i>
                <h4
                  className="font-bold text-gray-800 mb-2"
                  data-translate="servicesPage.motorControlCenters"
                >
                  Motor Control Centers
                </h4>
                <p
                  className="text-gray-600"
                  data-translate="servicesPage.motorControlCentersDesc"
                >
                  Complete MCC solutions for motor management
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-microchip text-primary text-4xl mb-4"></i>
                <h4
                  className="font-bold text-gray-800 mb-2"
                  data-translate="servicesPage.controlPanels"
                >
                  Control Panels
                </h4>
                <p
                  className="text-gray-600"
                  data-translate="servicesPage.controlPanelsDesc"
                >
                  Custom control panels for automation systems
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-network-wired text-secondary text-4xl mb-4"></i>
                <h4
                  className="font-bold text-gray-800 mb-2"
                  data-translate="servicesPage.distributionPanels"
                >
                  Distribution Panels
                </h4>
                <p
                  className="text-gray-600"
                  data-translate="servicesPage.distributionPanelsDesc"
                >
                  Power distribution and protection systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Modernization */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
              <i className="fas fa-life-ring text-green-600 mr-2"></i>
              <span
                className="text-green-600 font-semibold"
                data-translate="servicesPage.supportBadge"
              >
                Support & Modernization
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="servicesPage.supportTitle"
            >
              Technical Support & System Upgrades
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-translate="servicesPage.supportSubtitle"
            >
              Comprehensive support services to keep your systems running
              optimally and up-to-date
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-tools text-green-600 text-xl"></i>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800"
                    data-translate="servicesPage.technicalSupportTitle"
                  >
                    Technical Support
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span data-translate="servicesPage.support1">
                      Troubleshooting and diagnostics
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span data-translate="servicesPage.support2">
                      System modifications and optimization
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span data-translate="servicesPage.support3">
                      Commissioning and startup support
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span data-translate="servicesPage.support4">
                      Preventive maintenance programs
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-graduation-cap text-blue-600 text-xl"></i>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-800"
                    data-translate="servicesPage.trainingTitle"
                  >
                    Training Services
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-blue-600 mr-2"></i>
                    <span data-translate="servicesPage.training1">
                      Operator training programs
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-blue-600 mr-2"></i>
                    <span data-translate="servicesPage.training2">
                      Maintenance training courses
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-blue-600 mr-2"></i>
                    <span data-translate="servicesPage.training3">
                      Technical documentation
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-blue-600 mr-2"></i>
                    <span data-translate="servicesPage.training4">
                      On-site training sessions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-sync-alt text-secondary text-xl"></i>
                </div>
                <h3
                  className="text-xl font-bold text-gray-800"
                  data-translate="servicesPage.upgradeTitle"
                >
                  Upgrade & Modernization
                </h3>
              </div>
              <p
                className="text-gray-600 mb-6"
                data-translate="servicesPage.upgradeDesc"
              >
                Migrate legacy systems to modern platforms for improved
                performance, reliability, and maintainability.
              </p>

              <h4
                className="font-bold text-gray-800 mb-4"
                data-translate="servicesPage.legacyMigration"
              >
                Legacy System Migration
              </h4>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">
                      Allen-Bradley PLC-5
                    </span>
                    <i className="fas fa-arrow-right text-secondary"></i>
                    <span className="font-medium text-primary">
                      ControlLogix
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">SLC-500</span>
                    <i className="fas fa-arrow-right text-secondary"></i>
                    <span className="font-medium text-primary">
                      CompactLogix
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">
                      Reliance Electric Automax DCS
                    </span>
                    <i className="fas fa-arrow-right text-secondary"></i>
                    <span className="font-medium text-primary">Modern DCS</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5
                  className="font-semibold text-blue-800 mb-2"
                  data-translate="servicesPage.migrationBenefits"
                >
                  Migration Benefits
                </h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li data-translate="servicesPage.benefit1">
                    • Improved system reliability and performance
                  </li>
                  <li data-translate="servicesPage.benefit2">
                    • Enhanced cybersecurity features
                  </li>
                  <li data-translate="servicesPage.benefit3">
                    • Better integration capabilities
                  </li>
                  <li data-translate="servicesPage.benefit4">
                    • Reduced maintenance costs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="servicesPage.processTitle"
            >
              Our Service Process
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="servicesPage.processSubtitle"
            >
              Structured approach ensuring project success from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3
                className="font-bold text-gray-800 mb-2"
                data-translate="servicesPage.step1"
              >
                Consultation
              </h3>
              <p
                className="text-gray-600 text-sm"
                data-translate="servicesPage.step1Desc"
              >
                Understanding your requirements and challenges
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3
                className="font-bold text-gray-800 mb-2"
                data-translate="servicesPage.step2"
              >
                Design
              </h3>
              <p
                className="text-gray-600 text-sm"
                data-translate="servicesPage.step2Desc"
              >
                Custom system design and engineering
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3
                className="font-bold text-gray-800 mb-2"
                data-translate="servicesPage.step3"
              >
                Development
              </h3>
              <p
                className="text-gray-600 text-sm"
                data-translate="servicesPage.step3Desc"
              >
                Programming and panel manufacturing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3
                className="font-bold text-gray-800 mb-2"
                data-translate="servicesPage.step4"
              >
                Implementation
              </h3>
              <p
                className="text-gray-600 text-sm"
                data-translate="servicesPage.step4Desc"
              >
                Installation and commissioning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3
                className="font-bold text-gray-800 mb-2"
                data-translate="servicesPage.step5"
              >
                Support
              </h3>
              <p
                className="text-gray-600 text-sm"
                data-translate="servicesPage.step5Desc"
              >
                Ongoing maintenance and optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            data-translate="servicesPage.ctaTitle"
          >
            Ready to Start Your Automation Project?
          </h2>
          <p
            className="text-xl mb-8 text-blue-100"
            data-translate="servicesPage.ctaSubtitle"
          >
            Let our certified engineers design the perfect automation solution
            for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-2"></i>
              <span data-translate="servicesPage.ctaConsultation">
                Get Free Consultation
              </span>
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <i className="fas fa-cube mr-2"></i>
              <span data-translate="servicesPage.ctaProducts">
                View Our Products
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
