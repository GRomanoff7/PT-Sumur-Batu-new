export const ProductsPage = () => {
  return (
    <div>
      {/* Controllers (PLC) - Modern & Elegant Redesign */}
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
                <i className="fas fa-microchip mr-2"></i>
                <span data-translate="productsPage.controllersBadge">
                  Controllers (PLC)
                </span>
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="productsPage.controllersTitle"
            >
              Allen-Bradley
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Controllers
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="productsPage.controllersSubtitle"
            >
              Industry-leading programmable logic controllers for all
              applications
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - ControlLogix */}
            <div
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/878636/2026-01-02/79eb4592-2117-43d0-af44-0cebeb46406b.png"
                  alt="ControlLogix PLC"
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 p-8">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-server text-primary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300"
                  data-translate="productsPage.controlLogixTitle"
                >
                  ControlLogix
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg mb-6"
                  data-translate="productsPage.controlLogixDesc"
                >
                  High-performance controller for complex applications requiring
                  advanced control capabilities
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.modularArchitecture"
                    >
                      Modular architecture
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.integratedMotion"
                    >
                      Integrated motion control
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.advancedNetworking"
                    >
                      Advanced networking
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.redundancyOptions"
                    >
                      Redundancy options
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200/50">
                  <h4
                    className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide"
                    data-translate="productsPage.idealApplications"
                  >
                    Ideal Applications:
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.controlLogixApps"
                  >
                    Large manufacturing systems, process control, complex
                    machinery
                  </p>
                </div>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2 - CompactLogix */}
            <div
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/878636/2026-01-02/8c69aea5-993d-47d1-95e6-5e6b84268424.png"
                  alt="CompactLogix PLC"
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 p-8">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-cube text-secondary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors duration-300"
                  data-translate="productsPage.compactLogixTitle"
                >
                  CompactLogix
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg mb-6"
                  data-translate="productsPage.compactLogixDesc"
                >
                  Compact, all-in-one controller perfect for mid-range
                  applications
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.integratedIO"
                    >
                      Integrated I/O and communications
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.builtInEthernet"
                    >
                      Built-in Ethernet networking
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.motionCapabilities"
                    >
                      Motion control capabilities
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.costEffective"
                    >
                      Cost-effective solution
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200/50">
                  <h4
                    className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide"
                    data-translate="productsPage.idealApplications"
                  >
                    Ideal Applications:
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.compactLogixApps"
                  >
                    Packaging machines, material handling, small to medium systems
                  </p>
                </div>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-secondary to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Micro800 */}
            <div
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/878636/2026-01-02/10e90ae4-2667-4863-bbdc-9886d6c35fd4.png"
                  alt="Micro800 PLC"
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 p-8">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-microchip text-accent text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300"
                  data-translate="productsPage.micro800Title"
                >
                  Micro800
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg mb-6"
                  data-translate="productsPage.micro800Desc"
                >
                  Entry-level controllers for basic automation requirements
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.easyProgramming"
                    >
                      Easy programming
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.builtInIO"
                    >
                      Built-in I/O
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.ethernetConnectivity"
                    >
                      Ethernet connectivity
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span
                      className="text-gray-700"
                      data-translate="productsPage.affordablePricing"
                    >
                      Affordable pricing
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200/50">
                  <h4
                    className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide"
                    data-translate="productsPage.idealApplications"
                  >
                    Ideal Applications:
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.micro800Apps"
                  >
                    Simple machinery, standalone equipment, basic process control
                  </p>
                </div>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Optional Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              All controllers backed by our certified integration expertise
            </p>
          </div>
        </div>
      </section>

      {/* Drives - Modern & Elegant Redesign */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary"></div>
              <span className="mx-4 text-sm font-semibold text-secondary uppercase tracking-widest">
                <i className="fas fa-tachometer-alt mr-2"></i>
                <span data-translate="productsPage.drivesBadge">
                  Motor Drives
                </span>
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="productsPage.drivesTitle"
            >
              PowerFlex
              <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Drive Series
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="productsPage.drivesSubtitle"
            >
              Advanced AC and DC drives for precise motor control
            </p>
          </div>

          {/* Modern Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - AC Drives */}
            <div>
              <h3
                className="text-3xl font-bold text-gray-900 mb-8"
                data-translate="productsPage.acDrivesTitle"
              >
                AC Drives / Inverters
              </h3>
              <div className="space-y-6">
                {/* PowerFlex 525 */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879114/2026-01-02/06d2242f-c608-41c8-bf82-bfb372156d14.png"
                      alt="PowerFlex 525 Drive"
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 mr-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                          <i className="fas fa-bolt text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                        </div>
                      </div>
                      <h4
                        className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                        data-translate="productsPage.powerFlex525Title"
                      >
                        PowerFlex 525
                      </h4>
                    </div>
                    <p
                      className="text-gray-600 mb-4 leading-relaxed"
                      data-translate="productsPage.powerFlex525Desc"
                    >
                      Compact drive for basic to advanced applications with
                      integrated safety features
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span
                          className="font-semibold text-gray-800"
                          data-translate="productsPage.powerRange"
                        >
                          Power Range:
                        </span>
                        <br />
                        <span className="text-gray-600" data-translate="productsPage.powerFlex525Range">
                          0.4 to 22 kW
                        </span>
                      </div>
                      <div>
                        <span
                          className="font-semibold text-gray-800"
                          data-translate="productsPage.applications"
                        >
                          Applications:
                        </span>
                        <br />
                        <span className="text-gray-600" data-translate="productsPage.powerFlex525Apps">
                          Pumps, fans, conveyors
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* PowerFlex 753 */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-green-300 transition-all duration-500 hover:shadow-2xl hover:shadow-green-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879114/2026-01-02/d36f9f35-d3c5-4894-874a-7884859e820e.png"
                      alt="PowerFlex 753 Drive"
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 mr-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                          <i className="fas fa-cogs text-green-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                        </div>
                      </div>
                      <h4
                        className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300"
                        data-translate="productsPage.powerFlex753Title"
                      >
                        PowerFlex 753
                      </h4>
                    </div>
                    <p
                      className="text-gray-600 mb-4 leading-relaxed"
                      data-translate="productsPage.powerFlex753Desc"
                    >
                      High-performance drive with advanced control algorithms and
                      networking
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span
                          className="font-semibold text-gray-800"
                          data-translate="productsPage.powerRange"
                        >
                          Power Range:
                        </span>
                        <br />
                        <span className="text-gray-600" data-translate="productsPage.powerFlex753Range">
                          0.4 to 2.3 MW
                        </span>
                      </div>
                      <div>
                        <span
                          className="font-semibold text-gray-800"
                          data-translate="productsPage.applications"
                        >
                          Applications:
                        </span>
                        <br />
                        <span className="text-gray-600" data-translate="productsPage.powerFlex753Apps">
                          Process control, precision applications
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-green-500 to-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* PowerFlex 755 */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879114/2026-01-02/e3169a40-d8de-4c11-a2eb-314645cfea7a.png"
                      alt="PowerFlex 755 Drive"
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 mr-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                          <i className="fas fa-server text-purple-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                        </div>
                      </div>
                      <h4
                        className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300"
                        data-translate="productsPage.powerFlex755Title"
                      >
                        PowerFlex 755
                      </h4>
                    </div>
                    <p
                      className="text-gray-600 mb-4 leading-relaxed"
                      data-translate="productsPage.powerFlex755Desc"
                    >
                      Modular drive system for complex applications requiring
                      maximum flexibility
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span
                          className="font-semibold text-gray-800"
                          data-translate="productsPage.powerRange"
                        >
                          Power Range:
                        </span>
                        <br />
                        <span className="text-gray-600" data-translate="productsPage.powerFlex755Range">
                          90 kW to 5.7 MW
                        </span>
                      </div>
                      <div>
                        <span
                          className="font-semibold text-gray-800"
                          data-translate="productsPage.applications"
                        >
                          Applications:
                        </span>
                        <br />
                        <span className="text-gray-600" data-translate="productsPage.powerFlex755Apps">
                          Large motors, harsh environments
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - DC Drives & Special Applications */}
            <div>
              <h3
                className="text-3xl font-bold text-gray-900 mb-8"
                data-translate="productsPage.dcDrivesTitle"
              >
                DC Drives & Special Applications
              </h3>
              <div className="space-y-6">
                {/* PowerFlex DC */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-red-300 transition-all duration-500 hover:shadow-2xl hover:shadow-red-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879114/2026-01-02/77108751-879b-4c49-a59e-4a5e7084e4c1.png"
                      alt="PowerFlex DC Drive"
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 mr-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                          <i className="fas fa-battery-three-quarters text-red-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                        </div>
                      </div>
                      <h4
                        className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300"
                        data-translate="productsPage.powerFlexDCTitle"
                      >
                        PowerFlex DC
                      </h4>
                    </div>
                    <p
                      className="text-gray-600 mb-4 leading-relaxed"
                      data-translate="productsPage.powerFlexDCDesc"
                    >
                      High-performance DC drives for applications requiring
                      precise speed and torque control
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <i className="fas fa-check text-green-600 text-xs"></i>
                        </div>
                        <span data-translate="productsPage.regenerativeCapabilities">
                          Regenerative capabilities
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <i className="fas fa-check text-green-600 text-xs"></i>
                        </div>
                        <span data-translate="productsPage.fieldWeakening">
                          Field weakening control
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <i className="fas fa-check text-green-600 text-xs"></i>
                        </div>
                        <span data-translate="productsPage.advancedDiagnostics">
                          Advanced diagnostics
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-500 to-red-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* PowerFlex 755T */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879114/2026-01-02/5abcfb1d-3325-4c71-b84a-55a1b05b5635.png"
                      alt="PowerFlex 755T Drive"
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 mr-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                          <i className="fas fa-thermometer-half text-indigo-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                        </div>
                      </div>
                      <h4
                        className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300"
                        data-translate="productsPage.powerFlex755TTitle"
                      >
                        PowerFlex 755T
                      </h4>
                    </div>
                    <p
                      className="text-gray-600 mb-4 leading-relaxed"
                      data-translate="productsPage.powerFlex755TDesc"
                    >
                      Total Force Technology drives designed for harsh industrial
                      environments
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <i className="fas fa-check text-green-600 text-xs"></i>
                        </div>
                        <span data-translate="productsPage.enhancedProtection">
                          Enhanced environmental protection
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <i className="fas fa-check text-green-600 text-xs"></i>
                        </div>
                        <span data-translate="productsPage.reducedHarmonic">
                          Reduced harmonic distortion
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <i className="fas fa-check text-green-600 text-xs"></i>
                        </div>
                        <span data-translate="productsPage.extendedTemp">
                          Extended operating temperature range
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Drive Applications Card - Enhanced with Images */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 shadow-md">
                  <h4
                    className="text-2xl font-bold text-gray-900 mb-6 text-center"
                    data-translate="productsPage.driveApplicationsTitle"
                  >
                    Drive Applications
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {/* HVAC Systems */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src="https://mgx-backend-cdn.metadl.com/generate/images/879134/2026-01-02/b5fe815c-5957-481b-8545-3f373880a1c0.png"
                          alt="HVAC Systems"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-2 left-2">
                          <i className="fas fa-fan text-white text-2xl drop-shadow-lg"></i>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <span
                          className="text-sm font-semibold text-gray-800"
                          data-translate="productsPage.hvacSystems"
                        >
                          HVAC Systems
                        </span>
                      </div>
                    </div>

                    {/* Pump Control */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src="https://mgx-backend-cdn.metadl.com/generate/images/879134/2026-01-02/f28de406-d75d-4e54-aa97-abf95be8f6f5.png"
                          alt="Pump Control"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-2 left-2">
                          <i className="fas fa-tint text-white text-2xl drop-shadow-lg"></i>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <span
                          className="text-sm font-semibold text-gray-800"
                          data-translate="productsPage.pumpControl"
                        >
                          Pump Control
                        </span>
                      </div>
                    </div>

                    {/* Conveyor Systems */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src="https://mgx-backend-cdn.metadl.com/generate/images/879134/2026-01-02/f4e18d85-5ff5-440b-b103-b498640e3253.png"
                          alt="Conveyor Systems"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-2 left-2">
                          <i className="fas fa-conveyor-belt text-white text-2xl drop-shadow-lg"></i>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <span
                          className="text-sm font-semibold text-gray-800"
                          data-translate="productsPage.conveyorSystems"
                        >
                          Conveyor Systems
                        </span>
                      </div>
                    </div>

                    {/* Compressors */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src="https://mgx-backend-cdn.metadl.com/generate/images/879134/2026-01-02/41810048-1114-4cda-8888-b74210a3aeba.png"
                          alt="Compressors"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-2 left-2">
                          <i className="fas fa-compress text-white text-2xl drop-shadow-lg"></i>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <span
                          className="text-sm font-semibold text-gray-800"
                          data-translate="productsPage.compressors"
                        >
                          Compressors
                        </span>
                      </div>
                    </div>

                    {/* Process Control */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src="https://mgx-backend-cdn.metadl.com/generate/images/879134/2026-01-02/fcd60f75-7b6f-4136-976d-988189aa7e68.png"
                          alt="Process Control"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-2 left-2">
                          <i className="fas fa-industry text-white text-2xl drop-shadow-lg"></i>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <span
                          className="text-sm font-semibold text-gray-800"
                          data-translate="productsPage.processControl"
                        >
                          Process Control
                        </span>
                      </div>
                    </div>

                    {/* Machine Tools */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src="https://mgx-backend-cdn.metadl.com/generate/images/879134/2026-01-02/446163e1-0c48-42d0-8981-3b9433684f85.png"
                          alt="Machine Tools"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-2 left-2">
                          <i className="fas fa-cogs text-white text-2xl drop-shadow-lg"></i>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <span
                          className="text-sm font-semibold text-gray-800"
                          data-translate="productsPage.machineTools"
                        >
                          Machine Tools
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              All drives backed by our certified integration expertise
            </p>
          </div>
        </div>
      </section>

      {/* Motion Control */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
                <i className="fas fa-sync text-green-600 mr-2"></i>
                <span
                  className="text-green-600 font-semibold"
                  data-translate="productsPage.motionBadge"
                >
                  Motion Control
                </span>
              </div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-6"
                data-translate="productsPage.motionTitle"
              >
                Kinetix Servo Systems
              </h2>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                data-translate="productsPage.motionDesc"
              >
                Precision servo drives and motors for demanding motion control
                applications. The Kinetix family provides integrated motion
                solutions with superior performance and flexibility for complex
                automation systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-rocket text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="productsPage.highPerformance"
                    >
                      High Performance
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="productsPage.highPerformanceDesc"
                    >
                      Exceptional speed, accuracy, and repeatability
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-link text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="productsPage.integratedControl"
                    >
                      Integrated Control
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="productsPage.integratedControlDesc"
                    >
                      Seamless integration with ControlLogix systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-tools text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="productsPage.easyConfiguration"
                    >
                      Easy Configuration
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="productsPage.easyConfigurationDesc"
                    >
                      Simple setup and commissioning tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-100 rounded-2xl p-8">
              <h3
                className="text-2xl font-bold text-gray-800 mb-6 text-center"
                data-translate="productsPage.kinetixRangeTitle"
              >
                Kinetix Product Range
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4
                      className="font-bold text-gray-800"
                      data-translate="productsPage.servoDrives"
                    >
                      Servo Drives
                    </h4>
                    <i className="fas fa-microchip text-green-600"></i>
                  </div>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.servoDrivesDesc"
                  >
                    Kinetix 5700, 5500, 350 series drives
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4
                      className="font-bold text-gray-800"
                      data-translate="productsPage.servoMotors"
                    >
                      Servo Motors
                    </h4>
                    <i className="fas fa-cog text-green-600"></i>
                  </div>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.servoMotorsDesc"
                  >
                    Rotary and linear servo motor options
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4
                      className="font-bold text-gray-800"
                      data-translate="productsPage.motionControllers"
                    >
                      Motion Controllers
                    </h4>
                    <i className="fas fa-gamepad text-green-600"></i>
                  </div>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.motionControllersDesc"
                  >
                    Standalone and integrated motion control
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4
                      className="font-bold text-gray-800"
                      data-translate="productsPage.actuators"
                    >
                      Actuators
                    </h4>
                    <i className="fas fa-expand-arrows-alt text-green-600"></i>
                  </div>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.actuatorsDesc"
                  >
                    Electric cylinders and linear actuators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HMI & Visualization */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-indigo-100 rounded-full px-6 py-2 mb-6">
              <i className="fas fa-desktop text-indigo-600 mr-2"></i>
              <span
                className="text-indigo-600 font-semibold"
                data-translate="productsPage.hmiBadge"
              >
                Operator Interface & Visualization
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="productsPage.hmiTitle"
            >
              PanelView & FactoryTalk Solutions
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="productsPage.hmiSubtitle"
            >
              Intuitive operator interfaces and powerful visualization software
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3
                className="text-3xl font-bold text-gray-800 mb-8"
                data-translate="productsPage.panelViewTitle"
              >
                PanelView Operator Interfaces
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4
                    className="text-xl font-bold text-gray-800 mb-3"
                    data-translate="productsPage.panelView5000Title"
                  >
                    PanelView 5000
                  </h4>
                  <p
                    className="text-gray-600 mb-4"
                    data-translate="productsPage.panelView5000Desc"
                  >
                    Advanced graphic terminals with multi-touch displays and
                    enhanced performance
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <i className="fas fa-tv text-indigo-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.displaySizes"
                        >
                          4" to 15" displays
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-hand-pointer text-indigo-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.multiTouch"
                        >
                          Multi-touch capability
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <i className="fas fa-ethernet text-indigo-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.ethernetConn"
                        >
                          Ethernet connectivity
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-shield-alt text-indigo-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.industrialRated"
                        >
                          Industrial rated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4
                    className="text-xl font-bold text-gray-800 mb-3"
                    data-translate="productsPage.panelViewPlus7Title"
                  >
                    PanelView Plus 7
                  </h4>
                  <p
                    className="text-gray-600 mb-4"
                    data-translate="productsPage.panelViewPlus7Desc"
                  >
                    Cost-effective terminals with built-in communication and
                    application flexibility
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <i className="fas fa-check text-green-600 mr-2"></i>
                      <span data-translate="productsPage.multipleScreens">
                        Multiple screen sizes available
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-green-600 mr-2"></i>
                      <span data-translate="productsPage.webBrowser">
                        Web browser capabilities
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-green-600 mr-2"></i>
                      <span data-translate="productsPage.recipeManagement">
                        Recipe management
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3
                className="text-3xl font-bold text-gray-800 mb-8"
                data-translate="productsPage.factoryTalkTitle"
              >
                FactoryTalk Software
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4
                    className="text-xl font-bold text-gray-800 mb-3"
                    data-translate="productsPage.factoryTalkSETitle"
                  >
                    FactoryTalk View SE
                  </h4>
                  <p
                    className="text-gray-600 mb-4"
                    data-translate="productsPage.factoryTalkSEDesc"
                  >
                    Scalable HMI/SCADA software for plant-wide visualization and
                    control
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <i className="fas fa-chart-line text-indigo-600 mr-2"></i>
                      <span data-translate="productsPage.realtimeTrending">
                        Real-time and historical trending
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-bell text-indigo-600 mr-2"></i>
                      <span data-translate="productsPage.alarmManagement">
                        Alarm management system
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-users text-indigo-600 mr-2"></i>
                      <span data-translate="productsPage.multiUserSecurity">
                        Multi-user security system
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-file-alt text-indigo-600 mr-2"></i>
                      <span data-translate="productsPage.reportingTools">
                        Comprehensive reporting tools
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6">
                  <h4
                    className="font-bold text-gray-800 mb-4"
                    data-translate="productsPage.visualizationCapabilities"
                  >
                    Visualization Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div>
                        <i className="fas fa-palette text-purple-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.richGraphics"
                        >
                          Rich Graphics
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-mobile-alt text-purple-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.remoteAccess"
                        >
                          Remote Access
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-database text-purple-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.dataLogging"
                        >
                          Data Logging
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <i className="fas fa-chart-pie text-purple-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.analytics"
                        >
                          Analytics
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-cloud text-purple-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.cloudConnectivity"
                        >
                          Cloud Connectivity
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-cog text-purple-600 mr-2"></i>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.customApplications"
                        >
                          Custom Applications
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <i className="fas fa-network-wired text-blue-600 mr-2"></i>
              <span
                className="text-blue-600 font-semibold"
                data-translate="productsPage.networkingBadge"
              >
                Industrial Networking
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="productsPage.networkingTitle"
            >
              Stratix Ethernet Switches
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="productsPage.networkingSubtitle"
            >
              Robust industrial networking solutions for reliable communication
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3
                  className="text-2xl font-bold text-gray-800 mb-6"
                  data-translate="productsPage.managedSwitchesTitle"
                >
                  Managed Switches
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4
                      className="font-bold text-gray-800 mb-2"
                      data-translate="productsPage.advancedFeatures"
                    >
                      Advanced Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li data-translate="productsPage.vlanSupport">
                        • VLAN support and traffic management
                      </li>
                      <li data-translate="productsPage.qosPrioritization">
                        • Quality of Service (QoS) prioritization
                      </li>
                      <li data-translate="productsPage.networkRedundancy">
                        • Network redundancy protocols
                      </li>
                      <li data-translate="productsPage.snmpMonitoring">
                        • SNMP monitoring and diagnostics
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4
                      className="font-bold text-gray-800 mb-2"
                      data-translate="productsPage.securityFeatures"
                    >
                      Security Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li data-translate="productsPage.portAccess">
                        • Port-based access control
                      </li>
                      <li data-translate="productsPage.macFiltering">
                        • MAC address filtering
                      </li>
                      <li data-translate="productsPage.industrialFirewall">
                        • Industrial firewall capabilities
                      </li>
                      <li data-translate="productsPage.secureRemote">
                        • Secure remote management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="text-2xl font-bold text-gray-800 mb-6"
                  data-translate="productsPage.unmanagedSwitchesTitle"
                >
                  Unmanaged Switches
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4
                      className="font-bold text-gray-800 mb-2"
                      data-translate="productsPage.simpleReliable"
                    >
                      Simple & Reliable
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li data-translate="productsPage.plugAndPlay">
                        • Plug-and-play operation
                      </li>
                      <li data-translate="productsPage.industrialTemp">
                        • Industrial temperature rating
                      </li>
                      <li data-translate="productsPage.dinRailMounting">
                        • DIN rail mounting options
                      </li>
                      <li data-translate="productsPage.costEffectiveNet">
                        • Cost-effective networking
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4
                      className="font-bold text-gray-800 mb-2"
                      data-translate="productsPage.unmanagedApps"
                    >
                      Applications
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li data-translate="productsPage.smallControlSystems">
                        • Small control systems
                      </li>
                      <li data-translate="productsPage.deviceLevel">
                        • Device-level networking
                      </li>
                      <li data-translate="productsPage.machineLevel">
                        • Machine-level communication
                      </li>
                      <li data-translate="productsPage.basicEthernet">
                        • Basic Ethernet connectivity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-200">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <i className="fas fa-tachometer-alt text-blue-600 text-3xl mb-2"></i>
                  <h4
                    className="font-bold text-gray-800"
                    data-translate="productsPage.gigabitSpeed"
                  >
                    High Performance
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.gigabitSpeedDesc"
                  >
                    Gigabit Ethernet speeds
                  </p>
                </div>
                <div>
                  <i className="fas fa-shield-alt text-blue-600 text-3xl mb-2"></i>
                  <h4
                    className="font-bold text-gray-800"
                    data-translate="productsPage.industrialGrade"
                  >
                    Industrial Grade
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.industrialGradeDesc"
                  >
                    Harsh environment rated
                  </p>
                </div>
                <div>
                  <i className="fas fa-link text-blue-600 text-3xl mb-2"></i>
                  <h4
                    className="font-bold text-gray-800"
                    data-translate="productsPage.ethernetIP"
                  >
                    EtherNet/IP
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.ethernetIPDesc"
                  >
                    Native protocol support
                  </p>
                </div>
                <div>
                  <i className="fas fa-sync text-blue-600 text-3xl mb-2"></i>
                  <h4
                    className="font-bold text-gray-800"
                    data-translate="productsPage.redundancy"
                  >
                    Redundancy
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="productsPage.redundancyDesc"
                  >
                    Network fault tolerance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Integration Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="productsPage.integrationTitle"
            >
              Why Choose Our Rockwell Integration?
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="productsPage.integrationSubtitle"
            >
              Certified expertise ensures optimal product performance and
              support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-primary text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="productsPage.certifiedIntegration"
              >
                Certified Integration
              </h3>
              <p
                className="text-gray-600"
                data-translate="productsPage.certifiedIntegrationDesc"
              >
                Our Silver System Integrator status ensures proper product
                selection, configuration, and integration for optimal
                performance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-tools text-secondary text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="productsPage.completeSupport"
              >
                Complete Support
              </h3>
              <p
                className="text-gray-600"
                data-translate="productsPage.completeSupportDesc"
              >
                From initial design through commissioning and ongoing
                maintenance, we provide comprehensive support for all Rockwell
                products.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-accent text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="productsPage.warrantyService"
              >
                Warranty & Service
              </h3>
              <p
                className="text-gray-600"
                data-translate="productsPage.warrantyServiceDesc"
              >
                All products come with manufacturer warranty plus our additional
                service guarantees and local technical support.
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
            data-translate="productsPage.ctaTitle"
          >
            Ready to Implement Rockwell Automation?
          </h2>
          <p
            className="text-xl mb-8 text-blue-100"
            data-translate="productsPage.ctaSubtitle"
          >
            Consult with our certified engineers to select the perfect products
            for your application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-2"></i>
              <span data-translate="productsPage.ctaConsultation">
                Get Product Consultation
              </span>
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <i className="fas fa-cogs mr-2"></i>
              <span data-translate="productsPage.ctaServices">
                Integration Services
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};