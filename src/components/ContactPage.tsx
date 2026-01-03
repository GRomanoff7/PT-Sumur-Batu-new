export const ContactPage = () => {
  return (
    <div>
      {/* Modern Contact Header - Elegant & Minimal */}
      <section className="relative py-20 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="mx-4 text-sm font-semibold text-primary uppercase tracking-widest">
                Get In Touch
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="contact.heroTitle"
            >
              Contact Our
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Automation Experts
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="contact.heroSubtitle"
            >
              Reach out to our certified team for consultation, support, or project inquiries.
              We're here to help transform your industrial processes.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Contact Information & Form - Elegant Redesign */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl z-0 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl z-0 animate-pulse-slower"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Modern Contact Information - Glassmorphism Design */}
            <div>
              <div className="mb-12">
                <h3
                  className="text-3xl font-bold text-gray-800 mb-6"
                  data-translate="contact.getInTouch"
                >
                  Connect With Us
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our team of certified automation engineers is ready to assist you with
                  comprehensive solutions tailored to your industrial needs.
                </p>
              </div>

              {/* Modern Contact Cards Grid */}
              <div className="grid gap-6">
                {/* Address Card */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-start">
                    <div className="relative w-16 h-16 mr-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-map-marker-alt text-primary text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                        Office Address
                      </h4>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Rungkut Megah Raya N33</p>
                        <p>Jl. Raya Kalirungkut No. 5</p>
                        <p>Surabaya, Jawa Timur, Indonesia</p>
                        <p className="font-semibold text-primary">60293</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details Card */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start mb-6">
                      <div className="relative w-16 h-16 mr-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                          <i className="fas fa-phone text-secondary text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-secondary transition-colors duration-300">
                          Phone & Fax
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-gray-700">Phone:</p>
                            <a
                              href="tel:+6231879168"
                              className="text-primary hover:text-secondary transition-colors text-lg font-semibold"
                            >
                              +62-31-879.8168
                            </a>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Fax:</p>
                            <p className="text-gray-600">+62-31-870.0875</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="relative w-16 h-16 mr-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                          <i className="fas fa-envelope text-accent text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-accent transition-colors duration-300">
                          Email
                        </h4>
                        <a
                          href="mailto:SumurBatu@gmail.com"
                          className="text-primary hover:text-secondary transition-colors text-lg font-semibold"
                        >
                          SumurBatu@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-start">
                    <div className="relative w-16 h-16 mr-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-clock text-green-600 text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                        Business Hours
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-gray-700">Monday - Friday:</p>
                          <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">Saturday:</p>
                          <p className="text-gray-600">8:00 AM - 12:00 PM</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">Sunday:</p>
                          <p className="text-gray-600">Closed</p>
                        </div>
                        <div className="pt-2 border-t border-gray-200">
                          <p className="text-sm text-gray-500">
                            * Emergency support available 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Modern Design */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <h2
                    className="text-3xl font-bold text-gray-800 mb-8"
                    data-translate="contact.sendMessage"
                  >
                    Send us a Message
                  </h2>
                  <form id="contactForm" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                          data-translate="contact.firstName"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/50 backdrop-blur-sm"
                          placeholder="Enter your first name"
                          data-translate="contact.firstNamePlaceholder"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                          data-translate="contact.lastName"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/50 backdrop-blur-sm"
                          placeholder="Enter your last name"
                          data-translate="contact.lastNamePlaceholder"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-translate="contact.emailAddress"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your email address"
                        data-translate="contact.emailPlaceholder"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-translate="contact.phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                        data-translate="contact.phonePlaceholder"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-translate="contact.companyName"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your company name"
                        data-translate="contact.companyPlaceholder"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-translate="contact.industry"
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/50 backdrop-blur-sm"
                      >
                        <option value="" data-translate="contact.selectIndustry">
                          Select your industry
                        </option>
                        <option
                          value="water-treatment"
                          data-translate="contact.waterTreatment"
                        >
                          Water Treatment
                        </option>
                        <option
                          value="pulp-paper"
                          data-translate="contact.pulpPaper"
                        >
                          Pulp and Paper
                        </option>
                        <option
                          value="metal"
                          data-translate="contact.metalIndustry"
                        >
                          Metal Industry
                        </option>
                        <option value="mining" data-translate="contact.mining">
                          Mining
                        </option>
                        <option
                          value="process-plant"
                          data-translate="contact.processPlant"
                        >
                          Process Plant (Food, Chemical)
                        </option>
                        <option
                          value="material-handling"
                          data-translate="contact.materialHandling"
                        >
                          Material Handling
                        </option>
                        <option
                          value="consumer-goods"
                          data-translate="contact.consumerGoods"
                        >
                          Consumer Goods Machinery
                        </option>
                        <option
                          value="power-plant"
                          data-translate="contact.powerPlant"
                        >
                          Power Plant
                        </option>
                        <option value="printing" data-translate="contact.printing">
                          Printing
                        </option>
                        <option value="other" data-translate="contact.other">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-translate="contact.projectType"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/50 backdrop-blur-sm"
                      >
                        <option value="" data-translate="contact.selectProjectType">
                          Select project type
                        </option>
                        <option
                          value="new-installation"
                          data-translate="contact.newInstallation"
                        >
                          New Installation
                        </option>
                        <option
                          value="system-upgrade"
                          data-translate="contact.systemUpgrade"
                        >
                          System Upgrade
                        </option>
                        <option
                          value="maintenance-support"
                          data-translate="contact.maintenanceSupport"
                        >
                          Maintenance & Support
                        </option>
                        <option
                          value="consultation"
                          data-translate="contact.consultation"
                        >
                          Consultation
                        </option>
                        <option value="training" data-translate="contact.training">
                          Training
                        </option>
                        <option
                          value="emergency-repair"
                          data-translate="contact.emergencyRepair"
                        >
                          Emergency Repair
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-translate="contact.projectDetails"
                      >
                        Project Details / Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white/50 backdrop-blur-sm resize-vertical"
                        placeholder="Please describe your project requirements, timeline, or any specific questions..."
                        data-translate="contact.projectDetailsPlaceholder"
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label
                        htmlFor="privacy"
                        className="ml-2 text-sm text-gray-600"
                        data-translate="contact.privacyPolicy"
                      >
                        I agree to PT Sumur Batu's privacy policy and consent to
                        being contacted regarding my inquiry. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <i className="fas fa-paper-plane mr-2"></i>
                      <span data-translate="contact.sendMessageBtn">
                        Send Message
                      </span>
                    </button>

                    <div id="formMessage" className="hidden p-4 rounded-lg"></div>
                  </form>
                </div>

                {/* Corner Accent Decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/20 rounded-br-3xl"></div>
              </div>

              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Modern Redesign with OpenStreetMap */}
      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        {/* Decorative Background Elements - Matching Homepage Style */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Enhanced Typography - Matching Homepage */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="mx-4 text-sm font-semibold text-primary uppercase tracking-widest">
                Visit Us
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              data-translate="contact.findOffice"
            >
              Find Our Office in
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Surabaya
              </span>
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              data-translate="contact.findOfficeSubtitle"
            >
              Located in the heart of Surabaya's industrial district with easy access
              to major manufacturing facilities and transportation networks
            </p>
          </div>

          {/* Modern Card Grid with Glassmorphism - Matching Homepage Style */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Location Information Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3
                  className="text-3xl font-bold text-gray-900 mb-8 group-hover:text-primary transition-colors duration-300"
                  data-translate="contact.strategicLocation"
                >
                  Strategic Location
                </h3>

                <div className="space-y-6">
                  {/* Industrial Hub */}
                  <div className="flex items-start">
                    <div className="relative w-14 h-14 mr-5 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-building text-primary text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="text-xl font-bold text-gray-800 mb-2"
                        data-translate="contact.industrialHub"
                      >
                        Industrial Hub
                      </h4>
                      <p
                        className="text-gray-600 leading-relaxed"
                        data-translate="contact.industrialHubDesc"
                      >
                        Located in Surabaya's major industrial area with easy
                        access to manufacturing facilities
                      </p>
                    </div>
                  </div>

                  {/* Easy Access */}
                  <div className="flex items-start">
                    <div className="relative w-14 h-14 mr-5 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-red-700 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-car text-secondary text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="text-xl font-bold text-gray-800 mb-2"
                        data-translate="contact.easyAccess"
                      >
                        Easy Access
                      </h4>
                      <p
                        className="text-gray-600 leading-relaxed"
                        data-translate="contact.easyAccessDesc"
                      >
                        Convenient location with parking facilities and main
                        road connectivity
                      </p>
                    </div>
                  </div>

                  {/* Transport Links */}
                  <div className="flex items-start">
                    <div className="relative w-14 h-14 mr-5 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-500 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <i className="fas fa-plane text-accent text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h4
                        className="text-xl font-bold text-gray-800 mb-2"
                        data-translate="contact.transportLinks"
                      >
                        Transport Links
                      </h4>
                      <p
                        className="text-gray-600 leading-relaxed"
                        data-translate="contact.transportLinksDesc"
                      >
                        Close to Juanda International Airport and major
                        transportation networks
                      </p>
                    </div>
                  </div>
                </div>

                {/* Directions Card */}
                <div className="mt-8 p-6 bg-gradient-to-br from-white/95 to-white/80 rounded-2xl shadow-md border border-gray-100">
                  <h4
                    className="text-lg font-bold text-gray-800 mb-3 flex items-center"
                    data-translate="contact.directions"
                  >
                    <i className="fas fa-route text-primary mr-2"></i>
                    Directions
                  </h4>
                  <p
                    className="text-gray-600 leading-relaxed mb-4"
                    data-translate="contact.directionsDesc"
                  >
                    Our office is located on Jl. Raya Kalirungkut, easily
                    accessible from central Surabaya. Look for the Rungkut Megah
                    Raya complex.
                  </p>
                  <a
                    href="https://www.openstreetmap.org/?mlat=-7.3386&mlon=112.7661#map=17/-7.3386/112.7661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors group/link"
                  >
                    <i className="fas fa-external-link-alt mr-2 group-hover/link:scale-110 transition-transform"></i>
                    <span data-translate="contact.openInGoogleMaps">
                      Open in OpenStreetMap
                    </span>
                    <i className="fas fa-arrow-right ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"></i>
                  </a>
                </div>

                {/* Decorative Bottom Element */}
                <div className="mt-6 h-1 w-24 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Interactive OpenStreetMap Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 group-hover:text-secondary transition-colors duration-300">
                  Interactive Map
                </h3>

                {/* OpenStreetMap Embed */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden shadow-inner mb-6 aspect-[4/3]">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=112.7611%2C-7.3436%2C112.7711%2C-7.3336&layer=mapnik&marker=-7.3386%2C112.7661"
                    style={{ border: 0, borderRadius: '1rem' }}
                    title="Office Location Map"
                  ></iframe>
                </div>

                {/* CTA Button */}
                <a
                  href="https://www.openstreetmap.org/?mlat=-7.3386&mlon=112.7661#map=17/-7.3386/112.7661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  
                  <i className="fas fa-map-marker-alt mr-3 relative z-10 group-hover/btn:scale-110 transition-transform duration-300"></i>
                  <span 
                    className="relative z-10"
                    data-translate="contact.viewOnGoogleMaps"
                  >
                    View Larger Map
                  </span>
                  <i className="fas fa-arrow-right ml-3 relative z-10 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300"></i>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </a>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-600 text-center">
                    <i className="fas fa-info-circle text-primary mr-2"></i>
                    Interactive map powered by OpenStreetMap
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Trust Indicator */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm font-medium">
              Serving Surabaya and East Java region for over 17 years
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options - Modern Redesign */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="contact.quickContactOptions"
            >
              Quick Contact Options
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="contact.quickContactSubtitle"
            >
              Multiple ways to reach our automation experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                  <i className="fas fa-phone text-green-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4 text-center"
                data-translate="contact.callUsNow"
              >
                Call Us Now
              </h3>
              <p
                className="text-gray-600 mb-6 text-center"
                data-translate="contact.callUsDesc"
              >
                Speak directly with our technical team for immediate assistance
                and consultation
              </p>
              <div className="text-center">
                <a
                  href="tel:+6231879168"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-phone mr-2"></i>
                  +62-31-879.8168
                </a>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                  <i className="fas fa-envelope text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4 text-center"
                data-translate="contact.emailUs"
              >
                Email Us
              </h3>
              <p
                className="text-gray-600 mb-6 text-center"
                data-translate="contact.emailUsDesc"
              >
                Send detailed project requirements and receive comprehensive
                technical proposals
              </p>
              <div className="text-center">
                <a
                  href="mailto:SumurBatu@gmail.com?subject=Automation Project Inquiry"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  <span data-translate="contact.email">Send Email</span>
                </a>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                  <i className="fas fa-calendar-alt text-purple-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4 text-center"
                data-translate="contact.scheduleVisit"
              >
                Schedule Visit
              </h3>
              <p
                className="text-gray-600 mb-6 text-center"
                data-translate="contact.scheduleVisitDesc"
              >
                Arrange an on-site consultation to discuss your automation
                requirements in detail
              </p>
              <div className="text-center">
                <a
                  href="mailto:SumurBatu@gmail.com?subject=Schedule Site Visit&body=I would like to schedule a site visit to discuss our automation requirements."
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-calendar-plus mr-2"></i>
                  <span data-translate="contact.scheduleMeeting">
                    Schedule Meeting
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support - Modern Redesign */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-16 h-16 mr-4">
                <div className="absolute inset-0 bg-white/20 rounded-full transform rotate-6"></div>
                <div className="absolute inset-0 bg-white/10 rounded-full flex items-center justify-center transform -rotate-6">
                  <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
                </div>
              </div>
              <h2
                className="text-3xl font-bold"
                data-translate="contact.emergencySupportAvailable"
              >
                Emergency Support Available
              </h2>
            </div>
            <p
              className="text-xl text-red-100 mb-8"
              data-translate="contact.emergencySupportDesc"
            >
              System down? Critical automation failure? Our emergency response
              team is available 24/7 to get your operations back online quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6231879168"
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-phone mr-2"></i>
                <span data-translate="contact.emergencyHotline">
                  Emergency Hotline: +62-31-879.8168
                </span>
              </a>
              <a
                href="mailto:SumurBatu@gmail.com?subject=EMERGENCY: System Failure"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-envelope mr-2"></i>
                <span data-translate="contact.emergencyEmail">
                  Emergency Email
                </span>
              </a>
            </div>
            <p
              className="text-sm text-red-200 mt-4"
              data-translate="contact.emergencyCharges"
            >
              * Emergency support charges may apply for after-hours service
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};