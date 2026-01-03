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
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
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
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
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
                    Packaging machines, material handling, small to medium
                    systems
                  </p>
                </div>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-secondary to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Micro800 */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
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
                    Simple machinery, standalone equipment, basic process
                    control
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
                        <span
                          className="text-gray-600"
                          data-translate="productsPage.powerFlex525Range"
                        >
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
                        <span
                          className="text-gray-600"
                          data-translate="productsPage.powerFlex525Apps"
                        >
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
                      High-performance drive with advanced control algorithms
                      and networking
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
                        <span
                          className="text-gray-600"
                          data-translate="productsPage.powerFlex753Range"
                        >
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
                        <span
                          className="text-gray-600"
                          data-translate="productsPage.powerFlex753Apps"
                        >
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
                        <span
                          className="text-gray-600"
                          data-translate="productsPage.powerFlex755Range"
                        >
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
                        <span
                          className="text-gray-600"
                          data-translate="productsPage.powerFlex755Apps"
                        >
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
                      Total Force Technology drives designed for harsh
                      industrial environments
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* HVAC Systems */}
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                      <div className="relative h-40 overflow-hidden flex-shrink-0">
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
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                      <div className="relative h-40 overflow-hidden flex-shrink-0">
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
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                      <div className="relative h-40 overflow-hidden flex-shrink-0">
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
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                      <div className="relative h-40 overflow-hidden flex-shrink-0">
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
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                      <div className="relative h-40 overflow-hidden flex-shrink-0">
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
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                      <div className="relative h-40 overflow-hidden flex-shrink-0">
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

      {/* Motion Control - Modern & Elegant Redesign */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-600"></div>
              <span className="mx-4 text-sm font-semibold text-green-600 uppercase tracking-widest">
                <i className="fas fa-sync mr-2"></i>
                <span data-translate="productsPage.motionBadge">
                  Motion Control
                </span>
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-600"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="productsPage.motionTitle"
            >
              Kinetix
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Servo Systems
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="productsPage.motionDesc"
            >
              Precision servo drives and motors for demanding motion control
              applications. The Kinetix family provides integrated motion
              solutions with superior performance and flexibility for complex
              automation systems.
            </p>
          </div>

          {/* Modern Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
            {/* Left Column - Key Features */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Key Features
              </h3>
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:border-green-300 transition-all duration-500 hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  <div className="relative z-10 flex items-start">
                    <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-rocket text-green-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300"
                        data-translate="productsPage.highPerformance"
                      >
                        High Performance
                      </h4>
                      <p
                        className="text-gray-600 leading-relaxed"
                        data-translate="productsPage.highPerformanceDesc"
                      >
                        Exceptional speed, accuracy, and repeatability
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  <div className="relative z-10 flex items-start">
                    <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-link text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                        data-translate="productsPage.integratedControl"
                      >
                        Integrated Control
                      </h4>
                      <p
                        className="text-gray-600 leading-relaxed"
                        data-translate="productsPage.integratedControlDesc"
                      >
                        Seamless integration with ControlLogix systems
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:border-purple-300 transition-all duration-500 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  <div className="relative z-10 flex items-start">
                    <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-tools text-purple-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300"
                        data-translate="productsPage.easyConfiguration"
                      >
                        Easy Configuration
                      </h4>
                      <p
                        className="text-gray-600 leading-relaxed"
                        data-translate="productsPage.easyConfigurationDesc"
                      >
                        Simple setup and commissioning tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Range WITH IMAGES */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                <span data-translate="productsPage.kinetixRangeTitle">
                  Kinetix Product Range
                </span>
              </h3>
              <div className="space-y-6">
                {/* Servo Drives */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-green-300 transition-all duration-500 hover:shadow-2xl hover:shadow-green-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879160/2026-01-02/aff76192-240f-4538-b813-add930222dda.png"
                      alt="Kinetix Servo Drives"
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4
                        className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300"
                        data-translate="productsPage.servoDrives"
                      >
                        Servo Drives
                      </h4>
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-microchip text-green-600 text-xl"></i>
                      </div>
                    </div>
                    <p
                      className="text-gray-600 leading-relaxed"
                      data-translate="productsPage.servoDrivesDesc"
                    >
                      Kinetix 5700, 5500, 350 series drives
                    </p>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-green-500 to-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Servo Motors */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879160/2026-01-02/c0ffd715-b659-495b-a450-03c93d3155f1.png"
                      alt="Kinetix Servo Motors"
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4
                        className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                        data-translate="productsPage.servoMotors"
                      >
                        Servo Motors
                      </h4>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-cog text-blue-600 text-xl"></i>
                      </div>
                    </div>
                    <p
                      className="text-gray-600 leading-relaxed"
                      data-translate="productsPage.servoMotorsDesc"
                    >
                      Rotary and linear servo motor options
                    </p>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Motion Controllers */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879160/2026-01-02/0c642a56-ca98-49db-9ea8-1f155a8ddd38.png"
                      alt="Kinetix Motion Controllers"
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4
                        className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300"
                        data-translate="productsPage.motionControllers"
                      >
                        Motion Controllers
                      </h4>
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-gamepad text-purple-600 text-xl"></i>
                      </div>
                    </div>
                    <p
                      className="text-gray-600 leading-relaxed"
                      data-translate="productsPage.motionControllersDesc"
                    >
                      Standalone and integrated motion control
                    </p>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Actuators */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879160/2026-01-02/ca8db90e-b9ab-4059-979d-642220d38e49.png"
                      alt="Kinetix Actuators"
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4
                        className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300"
                        data-translate="productsPage.actuators"
                      >
                        Actuators
                      </h4>
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-expand-arrows-alt text-indigo-600 text-xl"></i>
                      </div>
                    </div>
                    <p
                      className="text-gray-600 leading-relaxed"
                      data-translate="productsPage.actuatorsDesc"
                    >
                      Electric cylinders and linear actuators
                    </p>
                    <div className="mt-4 h-1 w-16 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              All motion control products backed by our certified integration
              expertise
            </p>
          </div>
        </div>
      </section>

      {/* HMI & Visualization - Modern & Elegant Redesign */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-600"></div>
              <span className="mx-4 text-sm font-semibold text-indigo-600 uppercase tracking-widest">
                <i className="fas fa-desktop mr-2"></i>
                <span data-translate="productsPage.hmiBadge">
                  Operator Interface & Visualization
                </span>
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-600"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="productsPage.hmiTitle"
            >
              PanelView &
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                FactoryTalk Solutions
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="productsPage.hmiSubtitle"
            >
              Intuitive operator interfaces and powerful visualization software
            </p>
          </div>

          {/* Modern Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - PanelView */}
            <div>
              <h3
                className="text-3xl font-bold text-gray-900 mb-8"
                data-translate="productsPage.panelViewTitle"
              >
                PanelView Operator Interfaces
              </h3>
              <div className="space-y-6">
                {/* PanelView 5000 */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879192/2026-01-02/f6f95b37-84fc-451f-bd14-c865a3469892.png"
                      alt="PanelView 5000 HMI Terminal"
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-8">
                    {/* Modern Icon Design */}
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-tv text-indigo-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>

                    <h4
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300"
                      data-translate="productsPage.panelView5000Title"
                    >
                      PanelView 5000
                    </h4>
                    <p
                      className="text-gray-600 mb-6 leading-relaxed text-lg"
                      data-translate="productsPage.panelView5000Desc"
                    >
                      Advanced graphic terminals with multi-touch displays and
                      enhanced performance
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                            <i className="fas fa-check text-indigo-600 text-sm"></i>
                          </div>
                          <span
                            className="text-gray-700 text-sm"
                            data-translate="productsPage.displaySizes"
                          >
                            4" to 15" displays
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                            <i className="fas fa-check text-indigo-600 text-sm"></i>
                          </div>
                          <span
                            className="text-gray-700 text-sm"
                            data-translate="productsPage.multiTouch"
                          >
                            Multi-touch capability
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                            <i className="fas fa-check text-indigo-600 text-sm"></i>
                          </div>
                          <span
                            className="text-gray-700 text-sm"
                            data-translate="productsPage.ethernetConn"
                          >
                            Ethernet connectivity
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                            <i className="fas fa-check text-indigo-600 text-sm"></i>
                          </div>
                          <span
                            className="text-gray-700 text-sm"
                            data-translate="productsPage.industrialRated"
                          >
                            Industrial rated
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-6 h-1 w-16 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* PanelView Plus 7 */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879192/2026-01-02/927d1f4c-59a2-4cb7-9ef2-2df055046195.png"
                      alt="PanelView Plus 7 Terminal"
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-8">
                    {/* Modern Icon Design */}
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-hand-pointer text-purple-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>

                    <h4
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300"
                      data-translate="productsPage.panelViewPlus7Title"
                    >
                      PanelView Plus 7
                    </h4>
                    <p
                      className="text-gray-600 mb-6 leading-relaxed text-lg"
                      data-translate="productsPage.panelViewPlus7Desc"
                    >
                      Cost-effective terminals with built-in communication and
                      application flexibility
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.multipleScreens"
                        >
                          Multiple screen sizes available
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.webBrowser"
                        >
                          Web browser capabilities
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.recipeManagement"
                        >
                          Recipe management
                        </span>
                      </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-6 h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - FactoryTalk */}
            <div>
              <h3
                className="text-3xl font-bold text-gray-900 mb-8"
                data-translate="productsPage.factoryTalkTitle"
              >
                FactoryTalk Software
              </h3>
              <div className="space-y-6">
                {/* FactoryTalk View SE */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/879192/2026-01-02/87a06546-e2d9-4bfb-9493-4bf0de5e69e6.png"
                      alt="FactoryTalk View SE Software"
                      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 p-8">
                    {/* Modern Icon Design */}
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-chart-line text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>

                    <h4
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                      data-translate="productsPage.factoryTalkSETitle"
                    >
                      FactoryTalk View SE
                    </h4>
                    <p
                      className="text-gray-600 mb-6 leading-relaxed text-lg"
                      data-translate="productsPage.factoryTalkSEDesc"
                    >
                      Scalable HMI/SCADA software for plant-wide visualization
                      and control
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-blue-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.realtimeTrending"
                        >
                          Real-time and historical trending
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-blue-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.alarmManagement"
                        >
                          Alarm management system
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-blue-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.multiUserSecurity"
                        >
                          Multi-user security system
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-blue-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.reportingTools"
                        >
                          Comprehensive reporting tools
                        </span>
                      </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Visualization Capabilities */}
                <div className="relative bg-gradient-to-br from-indigo-50 to-purple-100 rounded-3xl p-8 border border-indigo-200/50 shadow-md">
                  <h4
                    className="text-2xl font-bold text-gray-900 mb-6"
                    data-translate="productsPage.visualizationCapabilities"
                  >
                    Visualization Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3 shadow-sm">
                          <i className="fas fa-palette text-purple-600 text-xl"></i>
                        </div>
                        <span
                          className="text-gray-800 font-semibold"
                          data-translate="productsPage.richGraphics"
                        >
                          Rich Graphics
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3 shadow-sm">
                          <i className="fas fa-mobile-alt text-purple-600 text-xl"></i>
                        </div>
                        <span
                          className="text-gray-800 font-semibold"
                          data-translate="productsPage.remoteAccess"
                        >
                          Remote Access
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3 shadow-sm">
                          <i className="fas fa-database text-purple-600 text-xl"></i>
                        </div>
                        <span
                          className="text-gray-800 font-semibold"
                          data-translate="productsPage.dataLogging"
                        >
                          Data Logging
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3 shadow-sm">
                          <i className="fas fa-chart-pie text-purple-600 text-xl"></i>
                        </div>
                        <span
                          className="text-gray-800 font-semibold"
                          data-translate="productsPage.analytics"
                        >
                          Analytics
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3 shadow-sm">
                          <i className="fas fa-cloud text-purple-600 text-xl"></i>
                        </div>
                        <span
                          className="text-gray-800 font-semibold"
                          data-translate="productsPage.cloudConnectivity"
                        >
                          Cloud Connectivity
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3 shadow-sm">
                          <i className="fas fa-cog text-purple-600 text-xl"></i>
                        </div>
                        <span
                          className="text-gray-800 font-semibold"
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

          {/* Optional Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              All HMI and visualization products backed by our certified
              integration expertise
            </p>
          </div>
        </div>
      </section>

      {/* Networking - Modern & Elegant Redesign */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="mx-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                <i className="fas fa-network-wired mr-2"></i>
                <span data-translate="productsPage.networkingBadge">
                  Industrial Networking
                </span>
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="productsPage.networkingTitle"
            >
              Stratix
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Ethernet Switches
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="productsPage.networkingSubtitle"
            >
              Robust industrial networking solutions for reliable communication
            </p>
          </div>

          {/* Modern Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Managed Switches */}
            <div>
              <h3
                className="text-3xl font-bold text-gray-900 mb-8"
                data-translate="productsPage.managedSwitchesTitle"
              >
                Managed Switches
              </h3>
              <div className="space-y-6">
                {/* Advanced Features Card */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Modern Icon Design */}
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-sliders-h text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>

                    <h4
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                      data-translate="productsPage.advancedFeatures"
                    >
                      Advanced Features
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-blue-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.vlanSupport"
                        >
                          VLAN support and traffic management
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-blue-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.qosPrioritization"
                        >
                          Quality of Service (QoS) prioritization
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-blue-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.networkRedundancy"
                        >
                          Network redundancy protocols
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-blue-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.snmpMonitoring"
                        >
                          SNMP monitoring and diagnostics
                        </span>
                      </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Security Features Card */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-cyan-300 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Modern Icon Design */}
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-shield-alt text-cyan-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>

                    <h4
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300"
                      data-translate="productsPage.securityFeatures"
                    >
                      Security Features
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-cyan-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.portAccess"
                        >
                          Port-based access control
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-cyan-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.macFiltering"
                        >
                          MAC address filtering
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-cyan-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.industrialFirewall"
                        >
                          Industrial firewall capabilities
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-cyan-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.secureRemote"
                        >
                          Secure remote management
                        </span>
                      </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-6 h-1 w-16 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Unmanaged Switches */}
            <div>
              <h3
                className="text-3xl font-bold text-gray-900 mb-8"
                data-translate="productsPage.unmanagedSwitchesTitle"
              >
                Unmanaged Switches
              </h3>
              <div className="space-y-6">
                {/* Simple & Reliable Card */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-green-300 transition-all duration-500 hover:shadow-2xl hover:shadow-green-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Modern Icon Design */}
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-plug text-green-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>

                    <h4
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300"
                      data-translate="productsPage.simpleReliable"
                    >
                      Simple & Reliable
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.plugAndPlay"
                        >
                          Plug-and-play operation
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.industrialTemp"
                        >
                          Industrial temperature rating
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.dinRailMounting"
                        >
                          DIN rail mounting options
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-green-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.costEffectiveNet"
                        >
                          Cost-effective networking
                        </span>
                      </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-6 h-1 w-16 bg-gradient-to-r from-green-500 to-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Applications Card */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Modern Icon Design */}
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-industry text-indigo-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>

                    <h4
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300"
                      data-translate="productsPage.unmanagedApps"
                    >
                      Applications
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-indigo-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.smallControlSystems"
                        >
                          Small control systems
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-indigo-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.deviceLevel"
                        >
                          Device-level networking
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-indigo-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.machineLevel"
                        >
                          Machine-level communication
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <i className="fas fa-check text-indigo-600 text-sm"></i>
                        </div>
                        <span
                          className="text-gray-700"
                          data-translate="productsPage.basicEthernet"
                        >
                          Basic Ethernet connectivity
                        </span>
                      </div>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-6 h-1 w-16 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* High Performance */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-tachometer-alt text-blue-600 text-3xl"></i>
                </div>
                <h4
                  className="font-bold text-gray-800 mb-2"
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
            </div>

            {/* Industrial Grade */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:border-green-300 transition-all duration-500 hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-shield-alt text-green-600 text-3xl"></i>
                </div>
                <h4
                  className="font-bold text-gray-800 mb-2"
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
            </div>

            {/* EtherNet/IP */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:border-cyan-300 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-100 hover:-translate-y-1 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-link text-cyan-600 text-3xl"></i>
                </div>
                <h4
                  className="font-bold text-gray-800 mb-2"
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
            </div>

            {/* Redundancy */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 hover:border-indigo-300 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-sync text-indigo-600 text-3xl"></i>
                </div>
                <h4
                  className="font-bold text-gray-800 mb-2"
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

          {/* Optional Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              All networking products backed by our certified integration expertise
            </p>
          </div>
        </div>
      </section>

      {/* Product Integration Benefits - Modern & Elegant Redesign */}
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
                Integration Benefits
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="productsPage.integrationTitle"
            >
              Why Choose Our
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Rockwell Integration?
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="productsPage.integrationSubtitle"
            >
              Certified expertise ensures optimal product performance and
              support
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Certified Integration */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-certificate text-primary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300"
                  data-translate="productsPage.certifiedIntegration"
                >
                  Certified Integration
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="productsPage.certifiedIntegrationDesc"
                >
                  Our Silver System Integrator status ensures proper product
                  selection, configuration, and integration for optimal
                  performance.
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mx-auto"></div>
              </div>
            </div>

            {/* Card 2 - Complete Support */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-tools text-secondary text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors duration-300"
                  data-translate="productsPage.completeSupport"
                >
                  Complete Support
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="productsPage.completeSupportDesc"
                >
                  From initial design through commissioning and ongoing
                  maintenance, we provide comprehensive support for all Rockwell
                  products.
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-secondary to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mx-auto"></div>
              </div>
            </div>

            {/* Card 3 - Warranty & Service */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-handshake text-accent text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300"
                  data-translate="productsPage.warrantyService"
                >
                  Warranty & Service
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="productsPage.warrantyServiceDesc"
                >
                  All products come with manufacturer warranty plus our additional
                  service guarantees and local technical support.
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Optional Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              Trusted integration partner backed by Rockwell Automation certification
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action - Modern Glassmorphism Design */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background Elements - Matching Homepage Style */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>

        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Main Content Container with Glassmorphism */}
          <div className="max-w-5xl mx-auto">
            {/* Badge with Glassmorphism - Matching Homepage Style */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-md rounded-full px-6 py-3 border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300">
                <div className="h-2 w-2 bg-secondary rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                  Product Solutions
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
                    data-translate="productsPage.ctaTitle"
                    data-testid="products-cta-title"
                  >
                    <span className="block mb-2">Ready to Implement</span>
                    <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      Rockwell Automation?
                    </span>
                  </h2>

                  <p
                    className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    data-translate="productsPage.ctaSubtitle"
                    data-testid="products-cta-subtitle"
                  >
                    Consult with our certified engineers to select the perfect products
                    for your application
                  </p>

                  {/* Enhanced CTA Buttons with Modern Effects */}
                  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    {/* Primary CTA - Product Consultation */}
                    <a
                      href="/contact"
                      className="group/btn relative bg-gradient-to-r from-secondary to-red-700 hover:from-red-700 hover:to-secondary text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-secondary/30 hover:scale-105 overflow-hidden min-w-[280px]"
                      data-testid="products-cta-consultation-btn"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>

                      {/* Animated Icon Container */}
                      <div className="relative z-10 mr-3 w-6 h-6 flex items-center justify-center">
                        <i className="fas fa-phone transform group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-300"></i>
                      </div>

                      <span
                        className="relative z-10"
                        data-translate="productsPage.ctaConsultation"
                      >
                        Get Product Consultation
                      </span>

                      <i className="fas fa-arrow-right ml-3 relative z-10 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300"></i>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </a>

                    {/* Secondary CTA - Integration Services */}
                    <a
                      href="/services"
                      className="group/btn relative bg-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 text-primary hover:text-white border-2 border-primary px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden min-w-[280px]"
                      data-testid="products-cta-services-btn"
                    >
                      {/* Animated Icon Container */}
                      <div className="relative z-10 mr-3 w-6 h-6 flex items-center justify-center">
                        <i className="fas fa-cogs transform group-hover/btn:rotate-180 transition-all duration-500"></i>
                      </div>

                      <span
                        className="relative z-10"
                        data-translate="productsPage.ctaServices"
                      >
                        Integration Services
                      </span>

                      <i className="fas fa-arrow-right ml-3 relative z-10 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300"></i>
                    </a>
                  </div>

                  {/* Additional Trust Indicators */}
                  <div className="mt-12 pt-8 border-t border-gray-200/50">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-secondary mr-2"></i>
                        <span>Certified Partner</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-secondary mr-2"></i>
                        <span>Expert Engineering</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-secondary mr-2"></i>
                        <span>Complete Support</span>
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