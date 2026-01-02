export const IndustriesPage = () => {
  return (
    <div>
      {/* Water Treatment - Modern & Elegant Design */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="mx-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                Industry Focus
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="industries.waterTreatmentFull"
            >
              Water & Wastewater
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Treatment Solutions
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="industries.waterTreatmentDesc"
            >
              Advanced automation solutions for water and wastewater treatment
              facilities, ensuring efficient operations, regulatory compliance,
              and optimal resource utilization. Our systems provide real-time
              monitoring and control of critical processes.
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Card 1 - Process Control Systems */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-blue-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-cogs text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                  data-translate="industries.processControlSystems"
                >
                  Process Control Systems
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.processControlSystemsDesc"
                >
                  Automated control of filtration, chemical dosing, and
                  treatment processes
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2 - SCADA Integration */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-blue-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-network-wired text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                  data-translate="industries.scadaIntegration"
                >
                  SCADA Integration
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.scadaIntegrationDesc"
                >
                  Centralized monitoring and control of multiple treatment
                  facilities
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Compliance Reporting */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-blue-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-clipboard-check text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                  data-translate="industries.complianceReporting"
                >
                  Compliance Reporting
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.complianceReportingDesc"
                >
                  Automated data collection and reporting for regulatory
                  compliance
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Key Features Grid - Modern Design with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/877923/2026-01-02/ad4f38a3-9eae-4460-885f-2091409066ca.png"
                  alt="Filtration Systems"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-filter text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.filtrationSystems"
                  >
                    Filtration Systems
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/877923/2026-01-02/6df084e3-81cf-467c-99b8-6688a1775272.png"
                  alt="Chemical Dosing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-flask text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.chemicalDosing"
                  >
                    Chemical Dosing
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/877923/2026-01-02/56cb404f-fedd-4545-908d-cb488742b1b8.png"
                  alt="Quality Monitoring"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-chart-line text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.qualityMonitoring"
                  >
                    Quality Monitoring
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/877923/2026-01-02/6a59dcc6-8e39-487d-945e-564111c55514.png"
                  alt="Waste Management"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-recycle text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.wasteManagement"
                  >
                    Waste Management
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pulp and Paper - Modern & Elegant Design (Updated to match homepage style) */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white/30 to-gray-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-green-600/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-600"></div>
              <span className="mx-4 text-sm font-semibold text-green-600 uppercase tracking-widest">
                Industry Focus
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-600"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="industries.pulpPaperFull"
            >
              Pulp & Paper
              <br />
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Manufacturing Solutions
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="industries.pulpPaperDesc"
            >
              Comprehensive automation solutions for pulp and paper production
              facilities, from wood preparation to final product packaging. Our
              systems optimize production efficiency, quality control, and
              resource utilization while ensuring environmental compliance.
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Card 1 - Production Optimization */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-green-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-cogs text-green-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300"
                  data-translate="industries.productionOptimization"
                >
                  Production Optimization
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.productionOptimizationDesc"
                >
                  Maximizing throughput while maintaining quality standards
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2 - Process Control */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-green-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-thermometer-half text-green-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300"
                  data-translate="industries.processControl"
                >
                  Process Control
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.processControlDesc"
                >
                  Temperature, pressure, and flow control systems
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Environmental Controls */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-green-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-leaf text-green-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300"
                  data-translate="industries.environmentalControls"
                >
                  Environmental Controls
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.environmentalControlsDesc"
                >
                  Emission monitoring and waste reduction systems
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Process Control Areas Grid - Modern Design with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2hpcHN8ZW58MHx8fHwxNzY3MjQxMTQ5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Wood Preparation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-tree text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.woodPreparation"
                  >
                    Wood Preparation
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxwdWxwJTIwbWlsbHxlbnwwfHx8fDE3NjcyNDExNTR8MA&ixlib=rb-4.1.0&q=85"
                  alt="Pulp Processing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-industry text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.pulpProcessing"
                  >
                    Pulp Processing
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1732984160322-ec48339d8eb7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwYXBlciUyMG1pbGwlMjBmYWN0b3J5fGVufDB8fHx8MTc2NzI0MTEwN3ww&ixlib=rb-4.1.0&q=85"
                  alt="Paper Machine"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-scroll text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.paperMachine"
                  >
                    Paper Machine
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBsaW5lfGVufDB8fHx8MTc2NzI0MTE2MXww&ixlib=rb-4.1.0&q=85"
                  alt="Finishing & Packaging"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-boxes text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.finishingPackaging"
                  >
                    Finishing & Packaging
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Industry - Modern & Elegant Design (Updated to match homepage style) */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-600/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-600"></div>
              <span className="mx-4 text-sm font-semibold text-gray-600 uppercase tracking-widest">
                Industry Focus
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-600"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="industries.metalIndustryFull"
            >
              Metal Processing &
              <br />
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                Manufacturing Solutions
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="industries.metalIndustryDesc"
            >
              Advanced automation solutions for steel, aluminum, and metal
              processing operations. Our systems enhance precision, safety, and
              productivity across all stages of metal manufacturing from
              smelting to finishing.
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Card 1 - Smelting & Refining */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-gray-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-fire text-red-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300"
                  data-translate="industries.smeltingRefining"
                >
                  Smelting & Refining
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.smeltingRefiningDesc"
                >
                  Precision temperature control and safety systems for furnace
                  operations
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 2 - Rolling & Forming */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-gray-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-compress-arrows-alt text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                  data-translate="industries.rollingForming"
                >
                  Rolling & Forming
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.rollingFormingDesc"
                >
                  Advanced positioning and synchronization for metal forming
                  processes
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Card 3 - Cutting & Finishing */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-gray-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-600/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Modern Icon Design */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                    <i className="fas fa-cut text-gray-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-300"
                  data-translate="industries.cuttingFinishing"
                >
                  Cutting & Finishing
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  data-translate="industries.cuttingFinishingDesc"
                >
                  Precision cutting, surface treatment, and quality control
                  automation
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Process Areas Grid - Modern Design with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZ1cm5hY2V8ZW58MHx8fHwxNzY3MjQxMTcyfDA&ixlib=rb-4.1.0&q=85"
                  alt="Furnace Control"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-fire text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.furnaceTempControl"
                  >
                    Furnace Control
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxtZXRhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzY3MjQxMTE1fDA&ixlib=rb-4.1.0&q=85"
                  alt="Rolling Mills"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-compress-arrows-alt text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.rollGapPositioning"
                  >
                    Rolling Mills
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGN1dHRpbmd8ZW58MHx8fHwxNzY3MjQxMTg3fDA&ixlib=rb-4.1.0&q=85"
                  alt="Precision Cutting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-cut text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.precisionCutting"
                  >
                    Precision Cutting
                  </h4>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565957872295-e50896c7537e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtZXRhbCUyMHF1YWxpdHklMjBpbnNwZWN0aW9ufGVufDB8fHx8MTc2NzI0MTE5Mnww&ixlib=rb-4.1.0&q=85"
                  alt="Quality Inspection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <i className="fas fa-search text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                  <h4
                    className="text-xl font-bold text-center"
                    data-translate="industries.qualityInspection"
                  >
                    Quality Inspection
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mining */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-100 rounded-full px-6 py-2 mb-6">
                <i className="fas fa-mountain text-yellow-600 mr-2"></i>
                <span
                  className="text-yellow-600 font-semibold"
                  data-translate="industries.mining"
                >
                  Mining Industry
                </span>
              </div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-6"
                data-translate="industries.miningFull"
              >
                Mining & Mineral Processing
              </h2>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                data-translate="industries.miningDesc"
              >
                Robust automation systems designed for harsh mining
                environments, from extraction to processing. Our solutions
                enhance safety, productivity, and operational efficiency while
                meeting stringent environmental and safety standards.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.safetySystems"
                    >
                      Safety Systems
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-truck text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.materialHandling"
                    >
                      Material Handling
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cogs text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.crushingGrinding"
                    >
                      Crushing & Grinding
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-filter text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.separationSystems"
                    >
                      Separation Systems
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-tint text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.dewatering"
                    >
                      Dewatering
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-chart-line text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.processMonitoring"
                    >
                      Process Monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8">
              <h3
                className="text-2xl font-bold text-gray-800 mb-6 text-center"
                data-translate="industries.miningApplications"
              >
                Mining Applications
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4
                    className="font-bold text-gray-800 mb-2"
                    data-translate="industries.extractionTransport"
                  >
                    Extraction & Transportation
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="industries.extractionTransportDesc"
                  >
                    Conveyor systems, crushers, and material handling automation
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4
                    className="font-bold text-gray-800 mb-2"
                    data-translate="industries.processingRefining"
                  >
                    Processing & Refining
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="industries.processingRefiningDesc"
                  >
                    Flotation, grinding, and separation process control
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4
                    className="font-bold text-gray-800 mb-2"
                    data-translate="industries.environmentalControl"
                  >
                    Environmental Control
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="industries.environmentalControlDesc"
                  >
                    Dust suppression, water treatment, and waste management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="industries.additionalIndustries"
            >
              Additional Industries
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="industries.additionalIndustriesDesc"
            >
              Expanding our expertise across diverse industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-flask text-purple-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.processPlants"
              >
                Process Plants
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.processPlantsFull"
              >
                Chemical, food, and pharmaceutical processing automation
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{" "}
                  <span data-translate="industries.batchProcessing">
                    Batch processing control
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.recipeManagement">
                    Recipe management
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.qualityAssurance">
                    Quality assurance systems
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.regulatoryCompliance">
                    Regulatory compliance
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-conveyor-belt text-orange-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.materialHandling"
              >
                Material Handling
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.materialHandlingFull"
              >
                Warehouse and distribution center automation
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{" "}
                  <span data-translate="industries.conveyorSystems">
                    Conveyor systems
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.sortingRouting">
                    Sorting and routing
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.inventoryTracking">
                    Inventory tracking
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.automatedStorage">
                    Automated storage
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-cog text-indigo-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.consumerGoods"
              >
                Consumer Goods
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.consumerGoodsFull"
              >
                Manufacturing machinery automation for consumer products
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{" "}
                  <span data-translate="industries.productionLine">
                    Production line control
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.qualityInspection">
                    Quality inspection
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.packagingAuto">
                    Packaging automation
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.traceability">
                    Traceability systems
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-bolt text-red-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.powerPlant"
              >
                Power Plant
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.powerPlantFull"
              >
                Power generation and distribution system automation
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{" "}
                  <span data-translate="industries.turbineControl">
                    Turbine control systems
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.loadDispatch">
                    Load dispatch automation
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.protectionSystems">
                    Protection systems
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.gridSync">
                    Grid synchronization
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-print text-teal-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.printing"
              >
                Printing Industry
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.printingFull"
              >
                Modern printing press automation and control systems
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  •{" "}
                  <span data-translate="industries.webTension">
                    Web tension control
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.registration">
                    Registration systems
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.colorManagement">
                    Color management
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.qualityMonitoring">
                    Quality monitoring
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-utensils text-pink-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.foodBeverage"
              >
                Food & Beverage
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.foodBeverageFull"
              >
                Hygienic automation solutions for food processing
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  •{" "}
                  <span data-translate="industries.cipSystems">
                    CIP systems
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.temperatureControl">
                    Temperature control
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.batchTracking">
                    Batch tracking
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.safetyCompliance">
                    Safety compliance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              data-translate="industries.whyChooseUs"
            >
              Why Industries Choose Us
            </h2>
            <p
              className="text-xl text-blue-100"
              data-translate="industries.whyChooseUsDesc"
            >
              Proven expertise and results across all industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-white text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                data-translate="industries.certifiedExpertise"
              >
                Certified Expertise
              </h3>
              <p
                className="text-blue-100"
                data-translate="industries.certifiedExpertiseDesc"
              >
                Rockwell Automation Silver System Integrator with proven
                industry knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                data-translate="industries.experiencedTeam"
              >
                Experienced Team
              </h3>
              <p
                className="text-blue-100"
                data-translate="industries.experiencedTeamDesc"
              >
                30+ professionals with deep understanding of industrial
                processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-white text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                data-translate="industries.longTermPartnership"
              >
                Long-term Partnership
              </h3>
              <p
                className="text-blue-100"
                data-translate="industries.longTermPartnershipDesc"
              >
                Committed to ongoing support and system optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            data-translate="industries.readyToAutomate"
          >
            Ready to Automate Your Industry?
          </h2>
          <p
            className="text-xl text-gray-600 mb-8"
            data-translate="industries.readyToAutomateDesc"
          >
            Contact our industry experts to discuss your specific automation
            requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-2"></i>
              <span data-translate="industries.discussProject">
                Discuss Your Project
              </span>
            </a>
            <a
              href="/services"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <i className="fas fa-cogs mr-2"></i>
              <span data-translate="industries.viewServices">
                View Our Services
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
