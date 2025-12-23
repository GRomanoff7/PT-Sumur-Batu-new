export const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1
              className="text-5xl font-bold mb-6"
              data-translate="about.heroTitle"
            >
              About PT Sumur Batu
            </h1>
            <p
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              data-translate="about.heroSubtitle"
            >
              Leading automation and drives system engineering company in
              Indonesia, serving industries with excellence since 2007
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-6"
                data-translate="about.companyStoryTitle"
              >
                Our Company Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p data-translate="about.companyStoryP1">
                  Established in 2007 and headquartered in Surabaya, East Java,
                  PT Sumur Batu has grown to become a trusted name in automation
                  and drives system engineering throughout Indonesia.
                </p>
                <p data-translate="about.companyStoryP2">
                  As an official{" "}
                  <strong className="text-primary">
                    Silver System Integrator Partner
                  </strong>{" "}
                  of Rockwell Automation, we bring world-class automation
                  solutions to diverse industries, combining global expertise
                  with local understanding.
                </p>
                <p data-translate="about.companyStoryP3">
                  Our journey began with a simple mission: to provide the best
                  engineering solutions and services for our customers. Today,
                  with over 17 years of experience and a team of 30 skilled
                  professionals, we continue to push the boundaries of what's
                  possible in industrial automation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-primary mb-2">
                      2007
                    </div>
                    <div
                      className="text-sm text-gray-600"
                      data-translate="about.founded"
                    >
                      Founded
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">
                      17+
                    </div>
                    <div
                      className="text-sm text-gray-600"
                      data-translate="about.yearsExperience"
                    >
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-accent mb-2">
                      30+
                    </div>
                    <div
                      className="text-sm text-gray-600"
                      data-translate="about.teamMembers"
                    >
                      Team Members
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      500+
                    </div>
                    <div
                      className="text-sm text-gray-600"
                      data-translate="about.projects"
                    >
                      Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="about.visionMissionTitle"
            >
              Vision & Mission
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="about.visionMissionSubtitle"
            >
              Guiding principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-eye text-primary text-2xl"></i>
                </div>
                <h3
                  className="text-2xl font-bold text-gray-800"
                  data-translate="about.ourVision"
                >
                  Our Vision
                </h3>
              </div>
              <p
                className="text-gray-600 text-lg leading-relaxed"
                data-translate="about.visionText"
              >
                To become one of the best companies in the field of Automation
                and Drives System Engineering in Indonesia, regionally, and
                globally, setting the standard for excellence in industrial
                automation solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-bullseye text-secondary text-2xl"></i>
                </div>
                <h3
                  className="text-2xl font-bold text-gray-800"
                  data-translate="about.ourMission"
                >
                  Our Mission
                </h3>
              </div>
              <p
                className="text-gray-600 text-lg leading-relaxed"
                data-translate="about.missionText"
              >
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="about.partnershipTitle"
            >
              Rockwell Automation Partnership
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="about.partnershipSubtitle"
            >
              Certified expertise in cutting-edge automation technology
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
                  <i className="fas fa-award text-primary mr-2"></i>
                  <span
                    className="text-primary font-semibold"
                    data-translate="about.silverIntegrator"
                  >
                    Silver System Integrator
                  </span>
                </div>
                <h3
                  className="text-3xl font-bold text-gray-800 mb-6"
                  data-translate="about.partnershipStatusTitle"
                >
                  Official Partnership Status
                </h3>
                <p
                  className="text-gray-600 mb-6 leading-relaxed"
                  data-translate="about.partnershipDesc"
                >
                  Our Silver System Integrator status with Rockwell Automation
                  demonstrates our commitment to excellence and expertise in
                  implementing Allen-Bradley automation solutions. This
                  partnership ensures access to the latest technology, training,
                  and support.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                    <span
                      className="text-gray-700"
                      data-translate="about.certifiedExpertise"
                    >
                      Certified technical expertise and training
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                    <span
                      className="text-gray-700"
                      data-translate="about.latestTechnology"
                    >
                      Access to latest Rockwell Automation technology
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                    <span
                      className="text-gray-700"
                      data-translate="about.qualityAssurance"
                    >
                      Quality assurance and reliability guarantee
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4
                  className="text-xl font-bold text-gray-800 mb-6"
                  data-translate="about.programDisciplines"
                >
                  Program Disciplines
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th
                          className="text-left py-3 px-2 font-semibold text-gray-700"
                          data-translate="about.discipline"
                        >
                          Discipline
                        </th>
                        <th
                          className="text-center py-3 px-2 font-semibold text-gray-700"
                          data-translate="about.status"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-gray-100">
                        <td
                          className="py-3 px-2 text-gray-600"
                          data-translate="about.control"
                        >
                          Control
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <i className="fas fa-check mr-1"></i>
                            <span data-translate="about.certified">
                              Certified
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td
                          className="py-3 px-2 text-gray-600"
                          data-translate="about.visualization"
                        >
                          Visualization
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <i className="fas fa-check mr-1"></i>
                            <span data-translate="about.certified">
                              Certified
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td
                          className="py-3 px-2 text-gray-600"
                          data-translate="about.lowVoltageDrives"
                        >
                          Low Voltage Drives
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <i className="fas fa-check mr-1"></i>
                            <span data-translate="about.certified">
                              Certified
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="py-3 px-2 text-gray-600"
                          data-translate="about.cubicModular"
                        >
                          CUBIC Modular Assemblies
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <i className="fas fa-check mr-1"></i>
                            <span data-translate="about.certified">
                              Certified
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="about.expertTeamTitle"
            >
              Our Expert Team
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="about.expertTeamSubtitle"
            >
              30 skilled professionals dedicated to automation excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-tie text-primary text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-2"
                data-translate="about.seniorEngineers"
              >
                Senior Automation Engineers
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p
                className="text-gray-600"
                data-translate="about.seniorExperience"
              >
                Over 20 years of experience
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="fas fa-star text-yellow-400 text-sm"
                    ></i>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-secondary text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-2"
                data-translate="about.experiencedEngineers"
              >
                Experienced Engineers
              </h3>
              <div className="text-3xl font-bold text-secondary mb-2">8</div>
              <p
                className="text-gray-600"
                data-translate="about.experiencedYears"
              >
                3-10 years of experience
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((star) => (
                    <i
                      key={star}
                      className="fas fa-star text-yellow-400 text-sm"
                    ></i>
                  ))}
                  <i className="far fa-star text-yellow-400 text-sm"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-accent text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-2"
                data-translate="about.juniorEngineers"
              >
                Junior Engineers
              </h3>
              <div className="text-3xl font-bold text-accent mb-2">7</div>
              <p className="text-gray-600" data-translate="about.juniorYears">
                1-3 years of experience
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex space-x-1">
                  {[1, 2, 3].map((star) => (
                    <i
                      key={star}
                      className="fas fa-star text-yellow-400 text-sm"
                    ></i>
                  ))}
                  {[1, 2].map((star) => (
                    <i
                      key={star}
                      className="far fa-star text-yellow-400 text-sm"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-drafting-compass text-green-600 text-2xl"></i>
              </div>
              <h3
                className="text-lg font-bold text-gray-800 mb-2"
                data-translate="about.controlDesigners"
              >
                Control System Designers
              </h3>
              <div className="text-2xl font-bold text-green-600">3</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-blue-600 text-2xl"></i>
              </div>
              <h3
                className="text-lg font-bold text-gray-800 mb-2"
                data-translate="about.electricians"
              >
                Electricians
              </h3>
              <div className="text-2xl font-bold text-blue-600">6</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clipboard-list text-purple-600 text-2xl"></i>
              </div>
              <h3
                className="text-lg font-bold text-gray-800 mb-2"
                data-translate="about.adminLogistics"
              >
                Admin & Logistics
              </h3>
              <div className="text-2xl font-bold text-purple-600">3</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="about.continuousLearning"
              >
                Continuous Learning & Development
              </h3>
              <p
                className="text-gray-600 mb-4 max-w-2xl"
                data-translate="about.learningDesc"
              >
                Our team is committed to continuous skill improvement through
                comprehensive internal and external training programs, ensuring
                we stay at the forefront of automation technology and industry
                best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <i className="fas fa-certificate mr-1"></i>
                  <span data-translate="about.rockwellTraining">
                    Rockwell Training
                  </span>
                </span>
                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  <i className="fas fa-book mr-1"></i>
                  <span data-translate="about.technicalWorkshops">
                    Technical Workshops
                  </span>
                </span>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  <i className="fas fa-users mr-1"></i>
                  <span data-translate="about.industryConferences">
                    Industry Conferences
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            data-translate="about.ctaTitle"
          >
            Ready to Work with Our Expert Team?
          </h2>
          <p
            className="text-xl mb-8 text-blue-100"
            data-translate="about.ctaSubtitle"
          >
            Experience the difference that certified expertise and proven
            experience can make for your automation projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-handshake mr-2"></i>
              <span data-translate="about.startProject">
                Start Your Project
              </span>
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <i className="fas fa-cogs mr-2"></i>
              <span data-translate="about.ourServices">Our Services</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
