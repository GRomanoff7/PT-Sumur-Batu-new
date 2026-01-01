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
            backgroundSize: 'cover',
            backgroundPosition: 'center'
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
                Pioneering automation solutions with innovation and expertise since 2007
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
                      Established in 2007 and headquartered in Surabaya, East Java, 
                      PT Sumur Batu has evolved into a premier automation and drives 
                      system engineering company, trusted by industries across Indonesia.
                    </p>
                    
                    <p className="text-lg">
                      As an official{' '}
                      <span className="font-semibold text-blue-600">
                        Silver System Integrator Partner
                      </span>{' '}
                      of Rockwell Automation, we bridge global technological excellence 
                      with deep local industry understanding.
                    </p>
                    
                    <p className="text-lg">
                      Our journey is defined by a relentless pursuit of engineering 
                      excellence. With over 17 years of experience and a dedicated team 
                      of 30+ professionals, we continue to redefine industrial automation 
                      standards across Southeast Asia.
                    </p>
                  </div>
                </div>

                {/* Modern Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="text-3xl font-bold text-blue-700 mb-2">2007</div>
                    <div className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                      Year Founded
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <div className="text-3xl font-bold text-indigo-700 mb-2">17+</div>
                    <div className="text-sm font-medium text-indigo-600 uppercase tracking-wider">
                      Years Experience
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <div className="text-3xl font-bold text-purple-700 mb-2">30+</div>
                    <div className="text-sm font-medium text-purple-600 uppercase tracking-wider">
                      Team Members
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                    <div className="text-3xl font-bold text-green-700 mb-2">500+</div>
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
                      <div className="text-sm font-medium text-blue-300 mb-1">TECHNOLOGY</div>
                      <h3 className="text-xl font-semibold">Cutting-Edge Automation Solutions</h3>
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
                      <h3 className="text-xl font-semibold mb-3">Partnership Excellence</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our Silver System Integrator status with Rockwell Automation 
                        represents our commitment to certified expertise and 
                        industry-leading solutions.
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Expert Team</h4>
                      <p className="text-gray-600 text-sm">
                        30+ skilled professionals dedicated to automation excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-eye text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become one of the best companies in the field of Automation
                and Drives System Engineering in Indonesia, regionally, and
                globally, setting the standard for excellence in industrial
                automation solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-bullseye text-indigo-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be an engineering company that provides the best solutions
                and services for customers, delivering innovative, reliable, and
                cost-effective automation systems that enhance operational
                efficiency and drive business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rockwell Automation Partnership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rockwell Automation Partnership
            </h2>
            <p className="text-xl text-gray-600">
              Certified expertise in cutting-edge automation technology
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white rounded-full px-6 py-2 mb-6 shadow-sm">
                  <i className="fas fa-award text-blue-600 mr-2"></i>
                  <span className="text-blue-700 font-semibold">
                    Silver System Integrator
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Official Partnership Status
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our Silver System Integrator status with Rockwell Automation
                  demonstrates our commitment to excellence and expertise in
                  implementing Allen-Bradley automation solutions. This
                  partnership ensures access to the latest technology, training,
                  and support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">
                      Certified technical expertise and training
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">
                      Access to latest Rockwell Automation technology
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-check text-green-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">
                      Quality assurance and reliability guarantee
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Program Disciplines
                </h4>
                <div className="space-y-4">
                  {[
                    { name: 'Control', status: 'Certified' },
                    { name: 'Visualization', status: 'Certified' },
                    { name: 'Low Voltage Drives', status: 'Certified' },
                    { name: 'CUBIC Modular Assemblies', status: 'Certified' }
                  ].map((discipline, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 font-medium">{discipline.name}</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        <i className="fas fa-check mr-1"></i>
                        {discipline.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Team */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              30+ skilled professionals dedicated to automation excellence and continuous innovation
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden mb-16">
            <div className="aspect-[21/9] bg-gradient-to-r from-gray-900 to-gray-800">
              <img 
                src="https://mgx-backend-cdn.metadl.com/generate/images/876360/2026-01-01/778d7126-aa44-4f96-bba3-25cb2cfe2806.png"
                alt="Team Collaboration"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-white mb-3">Collaborative Excellence</h3>
                <p className="text-blue-100">
                  Our multidisciplinary team combines decades of experience with cutting-edge 
                  technical expertise to deliver exceptional automation solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: 'Senior Automation Engineers', 
                count: '3', 
                experience: 'Over 20 years of experience',
                stars: 5,
                color: 'blue'
              },
              { 
                title: 'Experienced Engineers', 
                count: '8', 
                experience: '3-10 years of experience',
                stars: 4,
                color: 'indigo'
              },
              { 
                title: 'Junior Engineers', 
                count: '7', 
                experience: '1-3 years of experience',
                stars: 3,
                color: 'purple'
              }
            ].map((team, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br from-${team.color}-50 to-${team.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <i className={`fas fa-user-tie text-${team.color}-600 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {team.title}
                </h3>
                <div className="text-3xl font-bold text-center mb-2">
                  <span className={`text-${team.color}-700`}>{team.count}</span>
                </div>
                <p className="text-gray-600 text-center mb-4">
                  {team.experience}
                </p>
                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`fas ${i < team.stars ? 'fa-star' : 'fa-star'} text-${i < team.stars ? 'yellow-400' : 'gray-300'} text-sm`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 inline-block max-w-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Continuous Learning & Development
              </h3>
              <p className="text-gray-700 mb-6">
                Our team is committed to continuous skill improvement through
                comprehensive internal and external training programs, ensuring
                we stay at the forefront of automation technology and industry
                best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                  <i className="fas fa-certificate mr-2"></i>
                  Rockwell Training
                </span>
                <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-100">
                  <i className="fas fa-book mr-2"></i>
                  Technical Workshops
                </span>
                <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-100">
                  <i className="fas fa-users mr-2"></i>
                  Industry Conferences
                </span>
              </div>
            </div>
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