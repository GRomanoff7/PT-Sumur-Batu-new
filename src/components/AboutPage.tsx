export const AboutPage = () => {
  return (
    <div>
      {/* Modern Company Story Section - Replaces Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/876360/2026-01-01/e9456d82-c83f-4c15-8774-d51c3967bf94.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Elegant Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
                <i className="fas fa-building text-white text-2xl"></i>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Our Journey of Excellence
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Pioneering automation solutions with innovation and expertise
                since 2007
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Story Content */}
              <div className="space-y-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Building the Future of Automation
                  </h2>

                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Established in 2007 and headquartered in Surabaya, East
                      Java, PT Sumur Batu has evolved into a premier automation
                      and drives system engineering company, trusted by
                      industries across Indonesia.
                    </p>

                    <p className="text-lg">
                      As an official{" "}
                      <span className="font-semibold text-blue-600">
                        Silver System Integrator Partner
                      </span>{" "}
                      of Rockwell Automation, we bridge global technological
                      excellence with deep local industry understanding.
                    </p>

                    <p className="text-lg">
                      Our journey is defined by a relentless pursuit of
                      engineering excellence. With over 17 years of experience
                      and a dedicated team of 30+ professionals, we continue to
                      redefine industrial automation standards across Southeast
                      Asia.
                    </p>
                  </div>
                </div>

                {/* Modern Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="text-3xl font-bold text-blue-700 mb-2">
                      2007
                    </div>
                    <div className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                      Year Founded
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <div className="text-3xl font-bold text-indigo-700 mb-2">
                      17+
                    </div>
                    <div className="text-sm font-medium text-indigo-600 uppercase tracking-wider">
                      Years Experience
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <div className="text-3xl font-bold text-purple-700 mb-2">
                      30+
                    </div>
                    <div className="text-sm font-medium text-purple-600 uppercase tracking-wider">
                      Team Members
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                    <div className="text-3xl font-bold text-green-700 mb-2">
                      500+
                    </div>
                    <div className="text-sm font-medium text-green-600 uppercase tracking-wider">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="space-y-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                    <img
                      src="https://mgx-backend-cdn.metadl.com/generate/images/876360/2026-01-01/864b3a0b-a206-4d58-aa73-349ddf38e64a.png"
                      alt="Modern Automation Engineering"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-white">
                      <div className="text-sm font-medium text-blue-300 mb-1">
                        TECHNOLOGY
                      </div>
                      <h3 className="text-xl font-semibold">
                        Cutting-Edge Automation Solutions
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-8 text-white">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-handshake text-blue-300 text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Partnership Excellence
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our Silver System Integrator status with Rockwell
                        Automation represents our commitment to certified
                        expertise and industry-leading solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                        <i className="fas fa-users text-blue-600 text-2xl"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Expert Team
                      </h4>
                      <p className="text-gray-600 text-sm">
                        30+ skilled professionals dedicated to automation
                        excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Modern Redesign */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background Elements - Matching Homepage Style */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Header with Homepage Style */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="mx-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                Our Foundation
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vision & Mission
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Guiding Our Journey
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              The principles that drive our commitment to excellence and
              innovation in automation engineering
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism - Matching Homepage Core Business Section */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="group relative">
              {/* Gradient Border Effect - Visible on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>

              {/* Main Card with Glassmorphism */}
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/876180/2026-01-01/6abb3230-6eb5-470e-8d60-8574af36538c.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon with Gradient Background - Matching Homepage Style */}
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                      <img
                        src="https://mgx-backend-cdn.metadl.com/generate/images/876180/2026-01-01/b1c29f6d-a32c-4542-9f99-58088c9207ee.png"
                        alt="Vision Icon"
                        className="w-12 h-12"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-6 py-2 mb-6">
                      <i className="fas fa-star text-blue-600 mr-2"></i>
                      <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                        Our Vision
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                      Leading Automation Excellence
                    </h3>

                    <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                      <p>
                        To become the premier automation and drives system
                        engineering company in Indonesia and across Southeast
                        Asia, setting the standard for excellence in industrial
                        automation solutions.
                      </p>
                      <p className="font-medium text-blue-600">
                        We envision a future where every industry operates at
                        peak efficiency through intelligent, reliable, and
                        innovative automation systems.
                      </p>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Corner Accent Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-indigo-500/20 rounded-br-3xl"></div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              {/* Gradient Border Effect - Visible on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>

              {/* Main Card with Glassmorphism */}
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/876180/2026-01-01/bba4ab54-fa62-4925-a18d-80059690331a.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon with Gradient Background - Matching Homepage Style */}
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                      <img
                        src="https://mgx-backend-cdn.metadl.com/generate/images/876180/2026-01-01/3d886a7e-37eb-4dfa-8b33-55566786309b.png"
                        alt="Mission Icon"
                        className="w-12 h-12"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-6 py-2 mb-6">
                      <i className="fas fa-bullseye text-purple-600 mr-2"></i>
                      <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
                        Our Mission
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">
                      Delivering Exceptional Solutions
                    </h3>

                    <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                      <p>
                        To provide innovative, reliable, and cost-effective
                        automation solutions that enhance operational efficiency
                        and drive business success for our customers across
                        diverse industries.
                      </p>
                      <p className="font-medium text-purple-600">
                        We are committed to engineering excellence, customer
                        satisfaction, and continuous innovation in every project
                        we undertake.
                      </p>
                    </div>

                    {/* Decorative Bottom Element */}
                    <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Corner Accent Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-500/20 rounded-br-3xl"></div>
              </div>
            </div>
          </div>

          {/* Connecting Element */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <div className="mx-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-purple-500 to-transparent"></div>
            </div>
            <p className="text-gray-500 mt-4 text-lg">
              Together, our Vision and Mission guide every decision and
              innovation
            </p>
          </div>
        </div>
      </section>

      {/* Rockwell Automation Partnership - Modern & Elegant Redesign */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        {/* Decorative Background Elements - Matching Homepage Style */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-500/5 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Header with Homepage Style */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="mx-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                Strategic Partnership
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Rockwell Automation
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                Partnership Excellence
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Certified expertise in cutting-edge automation technology through
              our official Silver System Integrator status
            </p>
          </div>

          {/* Main Partnership Card - Matching Homepage Core Business Style */}
          <div className="max-w-6xl mx-auto">
            <div className="group relative">
              {/* Gradient Border Effect - Visible on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-red-500 to-amber-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>

              {/* Main Card with Glassmorphism */}
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-10 lg:p-16 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/876360/2026-01-01/e9456d82-c83f-4c15-8774-d51c3967bf94.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Partnership Details */}
                    <div>
                      {/* Badge - Matching Homepage Style */}
                      <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-red-50 rounded-full px-6 py-3 mb-8 border border-blue-100/50 shadow-sm">
                        <i className="fas fa-award text-blue-600 mr-3 text-lg"></i>
                        <span className="text-blue-700 font-bold text-sm uppercase tracking-wider">
                          Silver System Integrator
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                        Official Partnership Status
                      </h3>

                      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        Our Silver System Integrator status with Rockwell
                        Automation demonstrates our commitment to excellence and
                        expertise in implementing Allen-Bradley automation
                        solutions. This partnership ensures access to the latest
                        technology, training, and support.
                      </p>

                      {/* Benefits List with Modern Design */}
                      <div className="space-y-4">
                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                            <i className="fas fa-check text-green-600 text-sm"></i>
                          </div>
                          <div>
                            <span className="text-gray-800 font-medium text-lg">
                              Certified technical expertise and training
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                            <i className="fas fa-check text-green-600 text-sm"></i>
                          </div>
                          <div>
                            <span className="text-gray-800 font-medium text-lg">
                              Access to latest Rockwell Automation technology
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start group/item">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                            <i className="fas fa-check text-green-600 text-sm"></i>
                          </div>
                          <div>
                            <span className="text-gray-800 font-medium text-lg">
                              Quality assurance and reliability guarantee
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Program Disciplines */}
                    <div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                            <i className="fas fa-certificate text-white text-xl"></i>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900">
                            Program Disciplines
                          </h4>
                        </div>

                        <div className="space-y-4">
                          {[
                            {
                              name: "Control",
                              status: "Certified",
                              color: "blue",
                            },
                            {
                              name: "Visualization",
                              status: "Certified",
                              color: "indigo",
                            },
                            {
                              name: "Low Voltage Drives",
                              status: "Certified",
                              color: "purple",
                            },
                            {
                              name: "CUBIC Modular Assemblies",
                              status: "Certified",
                              color: "pink",
                            },
                          ].map((discipline, index) => (
                            <div
                              key={index}
                              className="group/discipline flex items-center justify-between py-4 px-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300"
                            >
                              <div className="flex items-center">
                                <div
                                  className={`w-2 h-2 bg-${discipline.color}-500 rounded-full mr-3 group-hover/discipline:scale-150 transition-transform duration-300`}
                                ></div>
                                <span className="text-gray-800 font-semibold text-lg">
                                  {discipline.name}
                                </span>
                              </div>
                              <span className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold border border-green-200/50 flex items-center">
                                <i className="fas fa-check-circle mr-2"></i>
                                {discipline.status}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            All disciplines are certified and maintained through
                            continuous training and quality assessments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accent Decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-500/20 rounded-br-3xl"></div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <div className="mx-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-red-500 to-transparent"></div>
            </div>
            <p className="text-gray-500 mt-4 text-lg font-medium">
              Trusted partnership delivering world-class automation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Expert Team - Modern & Elegant Redesign - Matching Homepage Style */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background Elements - Matching Homepage Style */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Header with Homepage Style */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="mx-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                Our People
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Expert Team
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Driving Innovation Forward
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              30+ skilled professionals dedicated to automation excellence and
              continuous innovation
            </p>
          </div>

          {/* Team Hero Image Card - Matching Homepage Core Business Style */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="group relative">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative aspect-[21/9] overflow-hidden">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/876360/2026-01-01/778d7126-aa44-4f96-bba3-25cb2cfe2806.png"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-purple-900/60"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end p-8 lg:p-12">
                    <div className="max-w-3xl">
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-4">
                        <i className="fas fa-users text-white mr-2"></i>
                        <span className="text-white font-semibold text-sm uppercase tracking-wider">
                          Collaborative Excellence
                        </span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Multidisciplinary Expertise
                      </h3>
                      <p className="text-blue-100 text-lg leading-relaxed">
                        Our team combines decades of experience with
                        cutting-edge technical expertise to deliver exceptional
                        automation solutions across diverse industries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner Accent Decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-3xl"></div>
              </div>
            </div>
          </div>

          {/* Team Structure Cards - Matching Homepage Core Business Style */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Senior Engineers Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>

              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                      <i className="fas fa-user-tie text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-4 py-2 mb-4">
                      <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                        Leadership
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      Senior Automation Engineers
                    </h3>

                    <div className="text-5xl font-bold text-blue-600 mb-3">
                      3
                    </div>

                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                      Over 20 years of experience
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="fas fa-star text-yellow-400 text-sm"
                        ></i>
                      ))}
                    </div>

                    <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/20 rounded-br-3xl"></div>
              </div>
            </div>

            {/* Experienced Engineers Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>

              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                      <i className="fas fa-user-tie text-indigo-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-full px-4 py-2 mb-4">
                      <span className="text-indigo-700 font-bold text-xs uppercase tracking-wider">
                        Core Team
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                      Experienced Engineers
                    </h3>

                    <div className="text-5xl font-bold text-indigo-600 mb-3">
                      8
                    </div>

                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                      3-10 years of experience
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(4)].map((_, i) => (
                        <i
                          key={i}
                          className="fas fa-star text-yellow-400 text-sm"
                        ></i>
                      ))}
                      <i className="fas fa-star text-gray-300 text-sm"></i>
                    </div>

                    <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-indigo-500/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-indigo-500/20 rounded-br-3xl"></div>
              </div>
            </div>

            {/* Junior Engineers Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>

              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                      <i className="fas fa-user-tie text-purple-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-purple-100 rounded-full px-4 py-2 mb-4">
                      <span className="text-purple-700 font-bold text-xs uppercase tracking-wider">
                        Rising Talent
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      Junior Engineers
                    </h3>

                    <div className="text-5xl font-bold text-purple-600 mb-3">
                      7
                    </div>

                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                      1-3 years of experience
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(3)].map((_, i) => (
                        <i
                          key={i}
                          className="fas fa-star text-yellow-400 text-sm"
                        ></i>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <i
                          key={i}
                          className="fas fa-star text-gray-300 text-sm"
                        ></i>
                      ))}
                    </div>

                    <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-purple-500/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-500/20 rounded-br-3xl"></div>
              </div>
            </div>
          </div>

          {/* Training & Development Card - Matching Homepage CTA Style */}
          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>

              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                      <i className="fas fa-graduation-cap text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    Continuous Learning & Development
                  </h3>

                  <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    Our team is committed to continuous skill improvement
                    through comprehensive internal and external training
                    programs, ensuring we stay at the forefront of automation
                    technology and industry best practices.
                  </p>

                  {/* Training Tags */}
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="group/tag inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-full px-6 py-3 border border-blue-200/50 transition-all duration-300 hover:scale-105">
                      <i className="fas fa-certificate text-blue-600 mr-3 group-hover/tag:scale-110 transition-transform duration-300"></i>
                      <span className="text-blue-700 font-semibold">
                        Rockwell Training
                      </span>
                    </div>

                    <div className="group/tag inline-flex items-center bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 rounded-full px-6 py-3 border border-indigo-200/50 transition-all duration-300 hover:scale-105">
                      <i className="fas fa-book text-indigo-600 mr-3 group-hover/tag:scale-110 transition-transform duration-300"></i>
                      <span className="text-indigo-700 font-semibold">
                        Technical Workshops
                      </span>
                    </div>

                    <div className="group/tag inline-flex items-center bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-full px-6 py-3 border border-purple-200/50 transition-all duration-300 hover:scale-105">
                      <i className="fas fa-users text-purple-600 mr-3 group-hover/tag:scale-110 transition-transform duration-300"></i>
                      <span className="text-purple-700 font-semibold">
                        Industry Conferences
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/20 rounded-br-3xl"></div>
              </div>
            </div>
          </div>

          {/* Bottom Connecting Element */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <div className="mx-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-purple-500 to-transparent"></div>
            </div>
            <p className="text-gray-500 mt-4 text-lg">
              Empowering innovation through expertise and dedication
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Automation Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Partner with certified experts who combine global technology with
              local expertise to deliver exceptional automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-handshake mr-3"></i>
                Start Your Project
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                <i className="fas fa-cogs mr-3"></i>
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
