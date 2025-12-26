// Language translations for PT Sumur Batu website
export interface Translation {
  [key: string]: string | Translation;
}

export const translations: { [lang: string]: Translation } = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      industries: "Industries",
      products: "Products",
      contact: "Contact Us",
    },

    // Homepage Hero Section
    hero: {
      badge: "Silver System Integrator Partner",
      title: "Your Partner in",
      titleAccent: "Automation",
      titleEnd: "Engineering",
      description:
        "Official Silver System Integrator for Rockwell Automation. Delivering cutting-edge control systems, PLC programming, and industrial automation solutions since 2007.",
      ctaConsultation: "Get Free Consultation",
      ctaLearnMore: "Learn More",
    },

    // Stats Section
    stats: {
      title: "Proven Track Record of Excellence",
      subtitle: "Numbers that reflect our commitment to quality and innovation",
      yearsExperience: "Years of Experience",
      expertEngineers: "Expert Engineers",
      completedProjects: "Completed Projects",
      industriesServed: "Industries Served",
    },

    // Core Business Section
    coreBusiness: {
      title: "Leading Automation & Drives System Engineering",
      subtitle:
        "PT Sumur Batu specializes in comprehensive automation solutions, from control system design to complete system integration and support services.",
      certifiedPartnership: {
        title: "Certified Partnership",
        description:
          "Official Silver System Integrator status with Rockwell Automation ensures quality and reliability.",
      },
      expertTeam: {
        title: "Expert Team",
        description:
          "30 skilled professionals including senior engineers with over 20 years of experience.",
      },
      completeSolutions: {
        title: "Complete Solutions",
        description:
          "End-to-end automation services from design and programming to manufacturing and support.",
      },
    },

    // Services Section
    services: {
      title: "Our Core Services",
      subtitle:
        "Comprehensive automation solutions tailored to your industry needs",
      controlSystem: {
        title: "Control System Design",
        description:
          "Custom control system architecture and engineering design for optimal performance.",
      },
      plcProgramming: {
        title: "PLC & HMI/SCADA Programming",
        description:
          "Advanced programming solutions for Allen-Bradley controllers and visualization systems.",
      },
      controlPanel: {
        title: "Control Panel & MCC Manufacturing",
        description:
          "Cubic Modular Systems and custom panel fabrication with quality assurance.",
      },
      technicalSupport: {
        title: "Technical Support & Commissioning",
        description:
          "Comprehensive support services including troubleshooting and system commissioning.",
      },
      learnMore: "Learn More",
    },

    // Services Page
    servicesPage: {
      heroTitle: "Our Services",
      heroSubtitle:
        "Comprehensive automation engineering services from design to deployment and ongoing support",

      // Engineering & Design Section
      engineeringBadge: "Engineering & Design",
      engineeringTitle: "Control System & Drives System Design",
      engineeringDesc:
        "Our expert engineers design comprehensive control and drives systems tailored to your specific industrial requirements. We leverage cutting-edge technology and proven methodologies to deliver optimal performance, reliability, and efficiency.",
      customArchitecture: "Custom System Architecture",
      customArchitectureDesc: "Tailored designs for optimal performance",
      scalableSolutions: "Scalable Solutions",
      scalableSolutionsDesc:
        "Future-ready systems that grow with your business",
      complianceStandards: "Compliance & Standards",
      complianceStandardsDesc:
        "Meeting all industrial safety and quality standards",
      systemArchitecture: "System Architecture",
      controlDesign: "Control Design",
      driveSystems: "Drive Systems",
      safetySystems: "Safety Systems",

      // Programming & Integration Section
      programmingBadge: "Programming & Integration",
      programmingTitle: "PLC & HMI/SCADA Programming",
      programmingDesc:
        "Our experienced programmers develop sophisticated control logic and intuitive operator interfaces using Allen-Bradley platforms. We ensure seamless integration between all system components for optimal performance and user experience.",
      programmingCapabilities: "Programming Capabilities",
      plcProgramming: "PLC Programming",
      plcProgrammingDesc: "ControlLogix, CompactLogix, Micro800",
      hmiDevelopment: "HMI Development",
      hmiDevelopmentDesc: "PanelView, FactoryTalk View",
      scadaSystems: "SCADA Systems",
      scadaSystemsDesc: "FactoryTalk View SE",
      motionControl: "Motion Control",
      motionControlDesc: "Kinetix Servo Systems",
      advancedProgramming: "Advanced Programming",
      advancedProgrammingDesc:
        "Ladder logic, structured text, and function blocks",
      systemIntegration: "System Integration",
      systemIntegrationDesc: "Seamless connectivity between all components",
      testingDebugging: "Testing & Debugging",
      testingDebuggingDesc: "Comprehensive testing for reliable operation",

      // Manufacturing Section
      manufacturingBadge: "Manufacturing",
      manufacturingTitle: "Control Panel & MCC Manufacturing",
      manufacturingSubtitle:
        "High-quality panel fabrication using both Cubic Modular Systems and custom local panels",
      cubicModularTitle: "Cubic Modular Systems",
      cubicModular1: "Standardized modular design",
      cubicModular2: "Faster assembly and delivery",
      cubicModular3: "Superior quality assurance",
      cubicModular4: "Easy maintenance and expansion",
      customPanelsTitle: "Custom Local Panels",
      customPanels1: "Tailored to specific requirements",
      customPanels2: "Cost-effective solutions",
      customPanels3: "Local sourcing and support",
      customPanels4: "Skilled local craftsmanship",
      manufacturingCapabilities: "Manufacturing Capabilities",
      motorControlCenters: "Motor Control Centers",
      motorControlCentersDesc: "Complete MCC solutions for motor management",
      controlPanels: "Control Panels",
      controlPanelsDesc: "Custom control panels for automation systems",
      distributionPanels: "Distribution Panels",
      distributionPanelsDesc: "Power distribution and protection systems",

      // Support & Modernization Section
      supportBadge: "Support & Modernization",
      supportTitle: "Technical Support & System Upgrades",
      supportSubtitle:
        "Comprehensive support services to keep your systems running optimally and up-to-date",
      technicalSupportTitle: "Technical Support",
      support1: "Troubleshooting and diagnostics",
      support2: "System modifications and optimization",
      support3: "Commissioning and startup support",
      support4: "Preventive maintenance programs",
      trainingTitle: "Training Services",
      training1: "Operator training programs",
      training2: "Maintenance training courses",
      training3: "Technical documentation",
      training4: "On-site training sessions",
      upgradeTitle: "Upgrade & Modernization",
      upgradeDesc:
        "Migrate legacy systems to modern platforms for improved performance, reliability, and maintainability.",
      legacyMigration: "Legacy System Migration",
      migrationBenefits: "Migration Benefits",
      benefit1: "Improved system reliability and performance",
      benefit2: "Enhanced cybersecurity features",
      benefit3: "Better integration capabilities",
      benefit4: "Reduced maintenance costs",

      // Service Process Section
      processTitle: "Our Service Process",
      processSubtitle:
        "Structured approach ensuring project success from start to finish",
      step1: "Consultation",
      step1Desc: "Understanding your requirements and challenges",
      step2: "Design",
      step2Desc: "Custom system design and engineering",
      step3: "Development",
      step3Desc: "Programming and panel manufacturing",
      step4: "Implementation",
      step4Desc: "Installation and commissioning",
      step5: "Support",
      step5Desc: "Ongoing maintenance and optimization",

      // CTA Section
      ctaTitle: "Ready to Start Your Automation Project?",
      ctaSubtitle:
        "Let our certified engineers design the perfect automation solution for your needs",
      ctaConsultation: "Get Free Consultation",
      ctaProducts: "View Our Products",
    },

    // Industries Section
    industries: {
      title: "Industries We Serve",
      subtitle: "Expertise across diverse industrial sectors",
      waterTreatment: "Water Treatment",
      pulpPaper: "Pulp and Paper",
      metalIndustry: "Metal Industry",
      mining: "Mining",
      processPlants: "Process Plants",
      materialHandling: "Material Handling",
      powerPlant: "Power Plant",
      printing: "Printing",
      exploreAll: "Explore All Industries",
    },

    // Customers Section
    customers: {
      title: "Our Valued Customers",
      subtitle: "Trusted by leading companies across Indonesia",
      clientLogo: "Client Logo",
    },

    // Call to Action
    cta: {
      title: "Ready to Automate Your Operations?",
      subtitle:
        "Get expert consultation from our certified automation engineers",
      contactUs: "Contact Us Today",
      viewServices: "View Our Services",
    },

    // Contact Page
    contact: {
      heroTitle: "Contact Us",
      heroSubtitle:
        "Get in touch with our automation experts for consultation, support, or project inquiries",
      getInTouch: "Get In Touch",
      officeAddress: "Office Address",
      phoneAndFax: "Phone & Fax",
      phone: "Phone:",
      fax: "Fax:",
      email: "Email",
      businessHours: "Business Hours",
      mondayFriday: "Monday - Friday:",
      mondayFridayTime: "8:00 AM - 5:00 PM",
      saturday: "Saturday:",
      saturdayTime: "8:00 AM - 12:00 PM",
      sunday: "Sunday:",
      sundayTime: "Closed",
      emergencySupport: "* Emergency support available 24/7",
      sendMessage: "Send us a Message",
      firstName: "First Name",
      lastName: "Last Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      companyName: "Company Name",
      industry: "Industry",
      selectIndustry: "Select your industry",
      waterTreatment: "Water Treatment",
      pulpPaper: "Pulp and Paper",
      metalIndustry: "Metal Industry",
      mining: "Mining",
      processPlant: "Process Plant (Food, Chemical)",
      materialHandling: "Material Handling",
      consumerGoods: "Consumer Goods Machinery",
      powerPlant: "Power Plant",
      printing: "Printing",
      other: "Other",
      projectType: "Project Type",
      selectProjectType: "Select project type",
      newInstallation: "New Installation",
      systemUpgrade: "System Upgrade",
      maintenanceSupport: "Maintenance & Support",
      consultation: "Consultation",
      training: "Training",
      emergencyRepair: "Emergency Repair",
      projectDetails: "Project Details / Message",
      projectDetailsPlaceholder:
        "Please describe your project requirements, timeline, or any specific questions...",
      privacyPolicy:
        "I agree to PT Sumur Batu's privacy policy and consent to being contacted regarding my inquiry.",
      sendMessageBtn: "Send Message",
      firstNamePlaceholder: "Enter your first name",
      lastNamePlaceholder: "Enter your last name",
      emailPlaceholder: "Enter your email address",
      phonePlaceholder: "Enter your phone number",
      companyPlaceholder: "Enter your company name",
      findOffice: "Find Our Office",
      findOfficeSubtitle:
        "Located in the heart of Surabaya's industrial district",
      strategicLocation: "Strategic Location",
      industrialHub: "Industrial Hub",
      industrialHubDesc:
        "Located in Surabaya's major industrial area with easy access to manufacturing facilities",
      easyAccess: "Easy Access",
      easyAccessDesc:
        "Convenient location with parking facilities and main road connectivity",
      transportLinks: "Transport Links",
      transportLinksDesc:
        "Close to Juanda International Airport and major transportation networks",
      directions: "Directions",
      directionsDesc:
        "Our office is located on Jl. Raya Kalirungkut, easily accessible from central Surabaya. Look for the Rungkut Megah Raya complex.",
      openInGoogleMaps: "Open in Google Maps",
      interactiveMap: "Interactive Map",
      clickToView: "Click below to view location",
      viewOnGoogleMaps: "View on Google Maps",
      quickContactOptions: "Quick Contact Options",
      quickContactSubtitle: "Multiple ways to reach our automation experts",
      callUsNow: "Call Us Now",
      callUsDesc:
        "Speak directly with our technical team for immediate assistance and consultation",
      emailUs: "Email Us",
      emailUsDesc:
        "Send detailed project requirements and receive comprehensive technical proposals",
      scheduleVisit: "Schedule Visit",
      scheduleVisitDesc:
        "Arrange an on-site consultation to discuss your automation requirements in detail",
      scheduleMeeting: "Schedule Meeting",
      emergencySupportAvailable: "Emergency Support Available",
      emergencySupportDesc:
        "System down? Critical automation failure? Our emergency response team is available 24/7 to get your operations back online quickly.",
      emergencyHotline: "Emergency Hotline: +62-31-879.8168",
      emergencyEmail: "Emergency Email",
      emergencyCharges:
        "* Emergency support charges may apply for after-hours service",
    },

    // About Page
    about: {
      heroTitle: "About PT Sumur Batu",
      heroSubtitle:
        "Leading automation and drives system engineering company in Indonesia, serving industries with excellence since 2007",
      companyStoryTitle: "Our Company Story",
      companyStoryP1:
        "Established in 2007 and headquartered in Surabaya, East Java, PT Sumur Batu has grown to become a trusted name in automation and drives system engineering throughout Indonesia.",
      companyStoryP2:
        "As an official Silver System Integrator Partner of Rockwell Automation, we bring world-class automation solutions to diverse industries, combining global expertise with local understanding.",
      companyStoryP3:
        "Our journey began with a simple mission: to provide the best engineering solutions and services for our customers. Today, with over 17 years of experience and a team of 30 skilled professionals, we continue to push the boundaries of what's possible in industrial automation.",
      founded: "Founded",
      yearsExperience: "Years Experience",
      teamMembers: "Team Members",
      projects: "Projects",
      visionMissionTitle: "Vision & Mission",
      visionMissionSubtitle:
        "Guiding principles that drive our commitment to excellence",
      ourVision: "Our Vision",
      visionText:
        "To become one of the best companies in the field of Automation and Drives System Engineering in Indonesia, regionally, and globally, setting the standard for excellence in industrial automation solutions.",
      ourMission: "Our Mission",
      missionText:
        "To be an engineering company that provides the best solutions and services for customers, delivering innovative, reliable, and cost-effective automation systems that enhance operational efficiency and drive business success.",
      partnershipTitle: "Rockwell Automation Partnership",
      partnershipSubtitle:
        "Certified expertise in cutting-edge automation technology",
      silverIntegrator: "Silver System Integrator",
      partnershipStatusTitle: "Official Partnership Status",
      partnershipDesc:
        "Our Silver System Integrator status with Rockwell Automation demonstrates our commitment to excellence and expertise in implementing Allen-Bradley automation solutions. This partnership ensures access to the latest technology, training, and support.",
      certifiedExpertise: "Certified technical expertise and training",
      latestTechnology: "Access to latest Rockwell Automation technology",
      qualityAssurance: "Quality assurance and reliability guarantee",
      programDisciplines: "Program Disciplines",
      discipline: "Discipline",
      status: "Status",
      certified: "Certified",
      control: "Control",
      visualization: "Visualization",
      lowVoltageDrives: "Low Voltage Drives",
      cubicModular: "CUBIC Modular Assemblies",
      expertTeamTitle: "Our Expert Team",
      expertTeamSubtitle:
        "30 skilled professionals dedicated to automation excellence",
      seniorEngineers: "Senior Automation Engineers",
      seniorExperience: "Over 20 years of experience",
      experiencedEngineers: "Experienced Engineers",
      experiencedYears: "3-10 years of experience",
      juniorEngineers: "Junior Engineers",
      juniorYears: "1-3 years of experience",
      controlDesigners: "Control System Designers",
      electricians: "Electricians",
      adminLogistics: "Admin & Logistics",
      continuousLearning: "Continuous Learning & Development",
      learningDesc:
        "Our team is committed to continuous skill improvement through comprehensive internal and external training programs, ensuring we stay at the forefront of automation technology and industry best practices.",
      rockwellTraining: "Rockwell Training",
      technicalWorkshops: "Technical Workshops",
      industryConferences: "Industry Conferences",
      ctaTitle: "Ready to Work with Our Expert Team?",
      ctaSubtitle:
        "Experience the difference that certified expertise and proven experience can make for your automation projects",
      startProject: "Start Your Project",
      ourServices: "Our Services",
    },

    // Footer
    footer: {
      description:
        "Official Silver System Integrator for Rockwell Automation. Your partner in automation and drives system engineering since 2007.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      copyright: "All rights reserved.",
    },

    // Company Info
    company: {
      name: "PT Sumur Batu",
      tagline: "Automation Engineering",
      location: "Surabaya, East Java",
      phone: "+62-31-879.8168",
      email: "SumurBatu@gmail.com",
    },
  },

  id: {
    // Navigation
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      industries: "Industri",
      products: "Produk",
      contact: "Kontak Kami",
    },

    // Homepage Hero Section
    hero: {
      badge: "Partner Silver System Integrator",
      title: "Partner Anda dalam",
      titleAccent: "Otomasi",
      titleEnd: "Engineering",
      description:
        "Silver System Integrator resmi untuk Rockwell Automation. Menghadirkan sistem kontrol terdepan, pemrograman PLC, dan solusi otomasi industri sejak 2007.",
      ctaConsultation: "Konsultasi Gratis",
      ctaLearnMore: "Pelajari Lebih Lanjut",
    },

    // Stats Section
    stats: {
      title: "Rekam Jejak Keunggulan yang Terbukti",
      subtitle:
        "Angka-angka yang mencerminkan komitmen kami terhadap kualitas dan inovasi",
      yearsExperience: "Tahun Pengalaman",
      expertEngineers: "Insinyur Ahli",
      completedProjects: "Proyek Selesai",
      industriesServed: "Industri yang Dilayani",
    },

    // Core Business Section
    coreBusiness: {
      title: "Terdepan dalam Otomasi & Drives System Engineering",
      subtitle:
        "PT Sumur Batu mengkhususkan diri dalam solusi otomasi komprehensif, dari desain sistem kontrol hingga integrasi sistem lengkap dan layanan dukungan.",
      certifiedPartnership: {
        title: "Kemitraan Bersertifikat",
        description:
          "Status Silver System Integrator resmi dengan Rockwell Automation menjamin kualitas dan keandalan.",
      },
      expertTeam: {
        title: "Tim Ahli",
        description:
          "30 profesional terampil termasuk insinyur senior dengan pengalaman lebih dari 20 tahun.",
      },
      completeSolutions: {
        title: "Solusi Lengkap",
        description:
          "Layanan otomasi end-to-end dari desain dan pemrograman hingga manufaktur dan dukungan.",
      },
    },

    // Services Section
    services: {
      title: "Layanan Inti Kami",
      subtitle:
        "Solusi otomasi komprehensif yang disesuaikan dengan kebutuhan industri Anda",
      controlSystem: {
        title: "Desain Sistem Kontrol",
        description:
          "Arsitektur sistem kontrol khusus dan desain engineering untuk performa optimal.",
      },
      plcProgramming: {
        title: "Pemrograman PLC & HMI/SCADA",
        description:
          "Solusi pemrograman canggih untuk kontroler Allen-Bradley dan sistem visualisasi.",
      },
      controlPanel: {
        title: "Manufaktur Panel Kontrol & MCC",
        description:
          "Sistem Modular Kubik dan fabrikasi panel khusus dengan jaminan kualitas.",
      },
      technicalSupport: {
        title: "Dukungan Teknis & Commissioning",
        description:
          "Layanan dukungan komprehensif termasuk troubleshooting dan commissioning sistem.",
      },
      learnMore: "Pelajari Lebih Lanjut",
    },

    // Services Page
    servicesPage: {
      heroTitle: "Layanan Kami",
      heroSubtitle:
        "Layanan engineering otomasi komprehensif dari desain hingga deployment dan dukungan berkelanjutan",

      // Engineering & Design Section
      engineeringBadge: "Engineering & Desain",
      engineeringTitle: "Desain Sistem Kontrol & Drives",
      engineeringDesc:
        "Insinyur ahli kami merancang sistem kontrol dan drives komprehensif yang disesuaikan dengan kebutuhan industri spesifik Anda. Kami memanfaatkan teknologi terdepan dan metodologi terbukti untuk menghadirkan performa, keandalan, dan efisiensi optimal.",
      customArchitecture: "Arsitektur Sistem Khusus",
      customArchitectureDesc: "Desain yang disesuaikan untuk performa optimal",
      scalableSolutions: "Solusi Scalable",
      scalableSolutionsDesc:
        "Sistem siap masa depan yang berkembang dengan bisnis Anda",
      complianceStandards: "Kepatuhan & Standar",
      complianceStandardsDesc:
        "Memenuhi semua standar keselamatan dan kualitas industri",
      systemArchitecture: "Arsitektur Sistem",
      controlDesign: "Desain Kontrol",
      driveSystems: "Sistem Drives",
      safetySystems: "Sistem Keselamatan",

      // Programming & Integration Section
      programmingBadge: "Pemrograman & Integrasi",
      programmingTitle: "Pemrograman PLC & HMI/SCADA",
      programmingDesc:
        "Programmer berpengalaman kami mengembangkan logika kontrol canggih dan antarmuka operator intuitif menggunakan platform Allen-Bradley. Kami memastikan integrasi mulus antara semua komponen sistem untuk performa dan pengalaman pengguna optimal.",
      programmingCapabilities: "Kemampuan Pemrograman",
      plcProgramming: "Pemrograman PLC",
      plcProgrammingDesc: "ControlLogix, CompactLogix, Micro800",
      hmiDevelopment: "Pengembangan HMI",
      hmiDevelopmentDesc: "PanelView, FactoryTalk View",
      scadaSystems: "Sistem SCADA",
      scadaSystemsDesc: "FactoryTalk View SE",
      motionControl: "Motion Control",
      motionControlDesc: "Sistem Servo Kinetix",
      advancedProgramming: "Pemrograman Lanjutan",
      advancedProgrammingDesc:
        "Ladder logic, structured text, dan function blocks",
      systemIntegration: "Integrasi Sistem",
      systemIntegrationDesc: "Konektivitas mulus antara semua komponen",
      testingDebugging: "Testing & Debugging",
      testingDebuggingDesc: "Testing komprehensif untuk operasi yang andal",

      // Manufacturing Section
      manufacturingBadge: "Manufaktur",
      manufacturingTitle: "Manufaktur Panel Kontrol & MCC",
      manufacturingSubtitle:
        "Fabrikasi panel berkualitas tinggi menggunakan Sistem Modular Kubik dan panel lokal khusus",
      cubicModularTitle: "Sistem Modular Kubik",
      cubicModular1: "Desain modular standar",
      cubicModular2: "Perakitan dan pengiriman lebih cepat",
      cubicModular3: "Jaminan kualitas superior",
      cubicModular4: "Pemeliharaan dan ekspansi mudah",
      customPanelsTitle: "Panel Lokal Khusus",
      customPanels1: "Disesuaikan dengan kebutuhan spesifik",
      customPanels2: "Solusi hemat biaya",
      customPanels3: "Sumber dan dukungan lokal",
      customPanels4: "Keahlian lokal yang terampil",
      manufacturingCapabilities: "Kemampuan Manufaktur",
      motorControlCenters: "Motor Control Centers",
      motorControlCentersDesc: "Solusi MCC lengkap untuk manajemen motor",
      controlPanels: "Panel Kontrol",
      controlPanelsDesc: "Panel kontrol khusus untuk sistem otomasi",
      distributionPanels: "Panel Distribusi",
      distributionPanelsDesc: "Sistem distribusi dan proteksi daya",

      // Support & Modernization Section
      supportBadge: "Dukungan & Modernisasi",
      supportTitle: "Dukungan Teknis & Upgrade Sistem",
      supportSubtitle:
        "Layanan dukungan komprehensif untuk menjaga sistem Anda berjalan optimal dan up-to-date",
      technicalSupportTitle: "Dukungan Teknis",
      support1: "Troubleshooting dan diagnostik",
      support2: "Modifikasi dan optimisasi sistem",
      support3: "Dukungan commissioning dan startup",
      support4: "Program pemeliharaan preventif",
      trainingTitle: "Layanan Pelatihan",
      training1: "Program pelatihan operator",
      training2: "Kursus pelatihan pemeliharaan",
      training3: "Dokumentasi teknis",
      training4: "Sesi pelatihan on-site",
      upgradeTitle: "Upgrade & Modernisasi",
      upgradeDesc:
        "Migrasi sistem lama ke platform modern untuk peningkatan performa, keandalan, dan maintainability.",
      legacyMigration: "Migrasi Sistem Lama",
      migrationBenefits: "Manfaat Migrasi",
      benefit1: "Peningkatan keandalan dan performa sistem",
      benefit2: "Fitur keamanan siber yang ditingkatkan",
      benefit3: "Kemampuan integrasi yang lebih baik",
      benefit4: "Biaya pemeliharaan berkurang",

      // Service Process Section
      processTitle: "Proses Layanan Kami",
      processSubtitle:
        "Pendekatan terstruktur memastikan kesuksesan proyek dari awal hingga akhir",
      step1: "Konsultasi",
      step1Desc: "Memahami kebutuhan dan tantangan Anda",
      step2: "Desain",
      step2Desc: "Desain sistem khusus dan engineering",
      step3: "Pengembangan",
      step3Desc: "Pemrograman dan manufaktur panel",
      step4: "Implementasi",
      step4Desc: "Instalasi dan commissioning",
      step5: "Dukungan",
      step5Desc: "Pemeliharaan dan optimisasi berkelanjutan",

      // CTA Section
      ctaTitle: "Siap Memulai Proyek Otomasi Anda?",
      ctaSubtitle:
        "Biarkan insinyur bersertifikat kami merancang solusi otomasi sempurna untuk kebutuhan Anda",
      ctaConsultation: "Konsultasi Gratis",
      ctaProducts: "Lihat Produk Kami",
    },

    // Industries Section
    industries: {
      title: "Industri yang Kami Layani",
      subtitle: "Keahlian di berbagai sektor industri",
      waterTreatment: "Pengolahan Air",
      pulpPaper: "Pulp dan Kertas",
      metalIndustry: "Industri Logam",
      mining: "Pertambangan",
      processPlants: "Pabrik Proses",
      materialHandling: "Material Handling",
      powerPlant: "Pembangkit Listrik",
      printing: "Percetakan",
      exploreAll: "Jelajahi Semua Industri",
    },

    // Customers Section
    customers: {
      title: "Pelanggan Terpercaya Kami",
      subtitle: "Dipercaya oleh perusahaan terkemuka di seluruh Indonesia",
      clientLogo: "Logo Klien",
    },

    // Call to Action
    cta: {
      title: "Siap Mengotomatisasi Operasi Anda?",
      subtitle:
        "Dapatkan konsultasi ahli dari insinyur otomasi bersertifikat kami",
      contactUs: "Hubungi Kami Hari Ini",
      viewServices: "Lihat Layanan Kami",
    },

    // Contact Page
    contact: {
      heroTitle: "Hubungi Kami",
      heroSubtitle:
        "Hubungi ahli otomasi kami untuk konsultasi, dukungan, atau pertanyaan proyek",
      getInTouch: "Hubungi Kami",
      officeAddress: "Alamat Kantor",
      phoneAndFax: "Telepon & Fax",
      phone: "Telepon:",
      fax: "Fax:",
      email: "Email",
      businessHours: "Jam Kerja",
      mondayFriday: "Senin - Jumat:",
      mondayFridayTime: "08:00 - 17:00",
      saturday: "Sabtu:",
      saturdayTime: "08:00 - 12:00",
      sunday: "Minggu:",
      sundayTime: "Tutup",
      emergencySupport: "* Dukungan darurat tersedia 24/7",
      sendMessage: "Kirim Pesan",
      firstName: "Nama Depan",
      lastName: "Nama Belakang",
      emailAddress: "Alamat Email",
      phoneNumber: "Nomor Telepon",
      companyName: "Nama Perusahaan",
      industry: "Industri",
      selectIndustry: "Pilih industri Anda",
      waterTreatment: "Pengolahan Air",
      pulpPaper: "Pulp dan Kertas",
      metalIndustry: "Industri Logam",
      mining: "Pertambangan",
      processPlant: "Pabrik Proses (Makanan, Kimia)",
      materialHandling: "Material Handling",
      consumerGoods: "Mesin Barang Konsumen",
      powerPlant: "Pembangkit Listrik",
      printing: "Percetakan",
      other: "Lainnya",
      projectType: "Tipe Proyek",
      selectProjectType: "Pilih tipe proyek",
      newInstallation: "Instalasi Baru",
      systemUpgrade: "Upgrade Sistem",
      maintenanceSupport: "Pemeliharaan & Dukungan",
      consultation: "Konsultasi",
      training: "Pelatihan",
      emergencyRepair: "Perbaikan Darurat",
      projectDetails: "Detail Proyek / Pesan",
      projectDetailsPlaceholder:
        "Silakan jelaskan kebutuhan proyek Anda, timeline, atau pertanyaan spesifik...",
      privacyPolicy:
        "Saya setuju dengan kebijakan privasi PT Sumur Batu dan menyetujui untuk dihubungi terkait pertanyaan saya.",
      sendMessageBtn: "Kirim Pesan",
      firstNamePlaceholder: "Masukkan nama depan Anda",
      lastNamePlaceholder: "Masukkan nama belakang Anda",
      emailPlaceholder: "Masukkan alamat email Anda",
      phonePlaceholder: "Masukkan nomor telepon Anda",
      companyPlaceholder: "Masukkan nama perusahaan Anda",
      findOffice: "Temukan Kantor Kami",
      findOfficeSubtitle: "Terletak di jantung distrik industri Surabaya",
      strategicLocation: "Lokasi Strategis",
      industrialHub: "Pusat Industri",
      industrialHubDesc:
        "Terletak di area industri utama Surabaya dengan akses mudah ke fasilitas manufaktur",
      easyAccess: "Akses Mudah",
      easyAccessDesc:
        "Lokasi nyaman dengan fasilitas parkir dan konektivitas jalan utama",
      transportLinks: "Koneksi Transportasi",
      transportLinksDesc:
        "Dekat dengan Bandara Internasional Juanda dan jaringan transportasi utama",
      directions: "Petunjuk Arah",
      directionsDesc:
        "Kantor kami terletak di Jl. Raya Kalirungkut, mudah diakses dari pusat Surabaya. Cari kompleks Rungkut Megah Raya.",
      openInGoogleMaps: "Buka di Google Maps",
      interactiveMap: "Peta Interaktif",
      clickToView: "Klik di bawah untuk melihat lokasi",
      viewOnGoogleMaps: "Lihat di Google Maps",
      quickContactOptions: "Opsi Kontak Cepat",
      quickContactSubtitle: "Berbagai cara untuk menghubungi ahli otomasi kami",
      callUsNow: "Hubungi Kami Sekarang",
      callUsDesc:
        "Berbicara langsung dengan tim teknis kami untuk bantuan dan konsultasi segera",
      emailUs: "Email Kami",
      emailUsDesc:
        "Kirim kebutuhan proyek detail dan terima proposal teknis komprehensif",
      scheduleVisit: "Jadwalkan Kunjungan",
      scheduleVisitDesc:
        "Atur konsultasi on-site untuk mendiskusikan kebutuhan otomasi Anda secara detail",
      scheduleMeeting: "Jadwalkan Pertemuan",
      emergencySupportAvailable: "Dukungan Darurat Tersedia",
      emergencySupportDesc:
        "Sistem down? Kegagalan otomasi kritis? Tim respons darurat kami tersedia 24/7 untuk mengembalikan operasi Anda dengan cepat.",
      emergencyHotline: "Hotline Darurat: +62-31-879.8168",
      emergencyEmail: "Email Darurat",
      emergencyCharges:
        "* Biaya dukungan darurat mungkin berlaku untuk layanan di luar jam kerja",
    },

    // About Page
    about: {
      heroTitle: "Tentang PT Sumur Batu",
      heroSubtitle:
        "Perusahaan terdepan dalam otomasi dan drives system engineering di Indonesia, melayani industri dengan keunggulan sejak 2007",
      companyStoryTitle: "Kisah Perusahaan Kami",
      companyStoryP1:
        "Didirikan pada tahun 2007 dan berkantor pusat di Surabaya, Jawa Timur, PT Sumur Batu telah berkembang menjadi nama terpercaya dalam otomasi dan drives system engineering di seluruh Indonesia.",
      companyStoryP2:
        "Sebagai Silver System Integrator Partner resmi dari Rockwell Automation, kami menghadirkan solusi otomasi kelas dunia ke berbagai industri, menggabungkan keahlian global dengan pemahaman lokal.",
      companyStoryP3:
        "Perjalanan kami dimulai dengan misi sederhana: memberikan solusi dan layanan engineering terbaik untuk pelanggan kami. Hari ini, dengan pengalaman lebih dari 17 tahun dan tim 30 profesional terampil, kami terus mendorong batas-batas kemungkinan dalam otomasi industri.",
      founded: "Didirikan",
      yearsExperience: "Tahun Pengalaman",
      teamMembers: "Anggota Tim",
      projects: "Proyek",
      visionMissionTitle: "Visi & Misi",
      visionMissionSubtitle:
        "Prinsip panduan yang mendorong komitmen kami terhadap keunggulan",
      ourVision: "Visi Kami",
      visionText:
        "Menjadi salah satu perusahaan terbaik di bidang Otomasi dan Drives System Engineering di Indonesia, regional, dan global, menetapkan standar keunggulan dalam solusi otomasi industri.",
      ourMission: "Misi Kami",
      missionText:
        "Menjadi perusahaan engineering yang memberikan solusi dan layanan terbaik untuk pelanggan, menghadirkan sistem otomasi yang inovatif, andal, dan hemat biaya yang meningkatkan efisiensi operasional dan mendorong kesuksesan bisnis.",
      partnershipTitle: "Kemitraan Rockwell Automation",
      partnershipSubtitle:
        "Keahlian bersertifikat dalam teknologi otomasi terdepan",
      silverIntegrator: "Silver System Integrator",
      partnershipStatusTitle: "Status Kemitraan Resmi",
      partnershipDesc:
        "Status Silver System Integrator kami dengan Rockwell Automation menunjukkan komitmen kami terhadap keunggulan dan keahlian dalam mengimplementasikan solusi otomasi Allen-Bradley. Kemitraan ini memastikan akses ke teknologi, pelatihan, dan dukungan terbaru.",
      certifiedExpertise: "Keahlian teknis dan pelatihan bersertifikat",
      latestTechnology: "Akses ke teknologi Rockwell Automation terbaru",
      qualityAssurance: "Jaminan kualitas dan keandalan",
      programDisciplines: "Disiplin Program",
      discipline: "Disiplin",
      status: "Status",
      certified: "Bersertifikat",
      control: "Kontrol",
      visualization: "Visualisasi",
      lowVoltageDrives: "Low Voltage Drives",
      cubicModular: "CUBIC Modular Assemblies",
      expertTeamTitle: "Tim Ahli Kami",
      expertTeamSubtitle:
        "30 profesional terampil yang berdedikasi untuk keunggulan otomasi",
      seniorEngineers: "Insinyur Otomasi Senior",
      seniorExperience: "Lebih dari 20 tahun pengalaman",
      experiencedEngineers: "Insinyur Berpengalaman",
      experiencedYears: "3-10 tahun pengalaman",
      juniorEngineers: "Insinyur Junior",
      juniorYears: "1-3 tahun pengalaman",
      controlDesigners: "Desainer Sistem Kontrol",
      electricians: "Teknisi Listrik",
      adminLogistics: "Admin & Logistik",
      continuousLearning: "Pembelajaran & Pengembangan Berkelanjutan",
      learningDesc:
        "Tim kami berkomitmen untuk peningkatan keterampilan berkelanjutan melalui program pelatihan internal dan eksternal yang komprehensif, memastikan kami tetap di garis depan teknologi otomasi dan praktik terbaik industri.",
      rockwellTraining: "Pelatihan Rockwell",
      technicalWorkshops: "Workshop Teknis",
      industryConferences: "Konferensi Industri",
      ctaTitle: "Siap Bekerja dengan Tim Ahli Kami?",
      ctaSubtitle:
        "Rasakan perbedaan yang dapat dibuat oleh keahlian bersertifikat dan pengalaman terbukti untuk proyek otomasi Anda",
      startProject: "Mulai Proyek Anda",
      ourServices: "Layanan Kami",
    },

    // Footer
    footer: {
      description:
        "Silver System Integrator resmi untuk Rockwell Automation. Partner Anda dalam otomasi dan drives system engineering sejak 2007.",
      quickLinks: "Tautan Cepat",
      contactInfo: "Info Kontak",
      copyright: "Hak cipta dilindungi.",
    },

    // Company Info
    company: {
      name: "PT Sumur Batu",
      tagline: "Automation Engineering",
      location: "Surabaya, Jawa Timur",
      phone: "+62-31-879.8168",
      email: "SumurBatu@gmail.com",
    },
  },
};

export const getTranslation = (lang: string, key: string): string => {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === "string" ? value : key;
};
