// Language Switcher for PT Sumur Batu Website
(function () {
  "use strict";

  // Import translations
  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        industries: "Industries",
        products: "Products",
        contact: "Contact Us",
      },
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
      stats: {
        title: "Proven Track Record of Excellence",
        subtitle:
          "Numbers that reflect our commitment to quality and innovation",
        yearsExperience: "Years of Experience",
        expertEngineers: "Expert Engineers",
        completedProjects: "Completed Projects",
        industriesServed: "Industries Served",
      },
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
      // Products Page
      productsPage: {
        heroTitle: "Rockwell Automation Products",
        heroSubtitle:
          "High-quality Allen-Bradley automation products integrated and supported by certified professionals",
        controllersBadge: "Controllers (PLC)",
        controllersTitle: "Allen-Bradley Controllers",
        controllersSubtitle:
          "Industry-leading programmable logic controllers for all applications",
        controlLogixTitle: "ControlLogix",
        controlLogixDesc:
          "High-performance controller for complex applications requiring advanced control capabilities",
        modularArchitecture: "Modular architecture",
        integratedMotion: "Integrated motion control",
        advancedNetworking: "Advanced networking",
        redundancyOptions: "Redundancy options",
        idealApplications: "Ideal Applications:",
        controlLogixApps:
          "Large manufacturing systems, process control, complex machinery",
        compactLogixTitle: "CompactLogix",
        compactLogixDesc:
          "Compact, all-in-one controller perfect for mid-range applications",
        integratedIO: "Integrated I/O and communications",
        builtInEthernet: "Built-in Ethernet networking",
        motionCapabilities: "Motion control capabilities",
        costEffective: "Cost-effective solution",
        compactLogixApps:
          "Packaging machines, material handling, small to medium systems",
        micro800Title: "Micro800",
        micro800Desc:
          "Entry-level controllers for basic automation requirements",
        easyProgramming: "Easy programming",
        builtInIO: "Built-in I/O",
        ethernetConnectivity: "Ethernet connectivity",
        affordablePricing: "Affordable pricing",
        micro800Apps:
          "Simple machinery, standalone equipment, basic process control",
        drivesBadge: "Motor Drives",
        drivesTitle: "PowerFlex Drive Series",
        drivesSubtitle: "Advanced AC and DC drives for precise motor control",
        acDrivesTitle: "AC Drives / Inverters",
        powerFlex525Title: "PowerFlex 525",
        powerFlex525Desc:
          "Compact drive for basic to advanced applications with integrated safety features",
        powerRange: "Power Range:",
        applications: "Applications:",
        powerFlex525Range: "0.4 to 22 kW",
        powerFlex525Apps: "Pumps, fans, conveyors",
        powerFlex753Title: "PowerFlex 753",
        powerFlex753Desc:
          "High-performance drive with advanced control algorithms and networking",
        powerFlex753Range: "0.4 to 2.3 MW",
        powerFlex753Apps: "Process control, precision applications",
        powerFlex755Title: "PowerFlex 755",
        powerFlex755Desc:
          "Modular drive system for complex applications requiring maximum flexibility",
        powerFlex755Range: "90 kW to 5.7 MW",
        powerFlex755Apps: "Large motors, harsh environments",
        dcDrivesTitle: "DC Drives & Special Applications",
        powerFlexDCTitle: "PowerFlex DC",
        powerFlexDCDesc:
          "High-performance DC drives for applications requiring precise speed and torque control",
        regenerativeCapabilities: "Regenerative capabilities",
        fieldWeakening: "Field weakening control",
        advancedDiagnostics: "Advanced diagnostics",
        powerFlex755TTitle: "PowerFlex 755T",
        powerFlex755TDesc:
          "Total Force Technology drives designed for harsh industrial environments",
        enhancedProtection: "Enhanced environmental protection",
        reducedHarmonic: "Reduced harmonic distortion",
        extendedTemp: "Extended operating temperature range",
        driveApplicationsTitle: "Drive Applications",
        hvacSystems: "HVAC Systems",
        pumpControl: "Pump Control",
        conveyorSystems: "Conveyor Systems",
        compressors: "Compressors",
        processControl: "Process Control",
        machineTools: "Machine Tools",
        motionBadge: "Motion Control",
        motionTitle: "Kinetix Servo Systems",
        motionDesc:
          "Precision servo drives and motors for demanding motion control applications. The Kinetix family provides integrated motion solutions with superior performance and flexibility for complex automation systems.",
        highPerformance: "High Performance",
        highPerformanceDesc: "Exceptional speed, accuracy, and repeatability",
        integratedControl: "Integrated Control",
        integratedControlDesc: "Seamless integration with ControlLogix systems",
        easyConfiguration: "Easy Configuration",
        easyConfigurationDesc: "Simple setup and commissioning tools",
        kinetixRangeTitle: "Kinetix Product Range",
        servoDrives: "Servo Drives",
        servoDrivesDesc: "Kinetix 5700, 5500, 350 series drives",
        servoMotors: "Servo Motors",
        servoMotorsDesc: "Rotary and linear servo motor options",
        motionControllers: "Motion Controllers",
        motionControllersDesc: "Standalone and integrated motion control",
        actuators: "Actuators",
        actuatorsDesc: "Electric cylinders and linear actuators",
        hmiBadge: "Operator Interface & Visualization",
        hmiTitle: "PanelView & FactoryTalk Solutions",
        hmiSubtitle:
          "Intuitive operator interfaces and powerful visualization software",
        panelViewTitle: "PanelView Operator Interfaces",
        panelView5000Title: "PanelView 5000",
        panelView5000Desc:
          "Advanced graphic terminals with multi-touch displays and enhanced performance",
        displaySizes: '4" to 15" displays',
        multiTouch: "Multi-touch capability",
        ethernetConn: "Ethernet connectivity",
        industrialRated: "Industrial rated",
        panelViewPlus7Title: "PanelView Plus 7",
        panelViewPlus7Desc:
          "Cost-effective terminals with built-in communication and application flexibility",
        multipleScreens: "Multiple screen sizes available",
        webBrowser: "Web browser capabilities",
        recipeManagement: "Recipe management",
        factoryTalkTitle: "FactoryTalk Software",
        factoryTalkSETitle: "FactoryTalk View SE",
        factoryTalkSEDesc:
          "Scalable HMI/SCADA software for plant-wide visualization and control",
        realtimeTrending: "Real-time and historical trending",
        alarmManagement: "Alarm management system",
        multiUserSecurity: "Multi-user security system",
        reportingTools: "Comprehensive reporting tools",
        visualizationCapabilities: "Visualization Capabilities",
        richGraphics: "Rich Graphics",
        remoteAccess: "Remote Access",
        dataLogging: "Data Logging",
        analytics: "Analytics",
        cloudConnectivity: "Cloud Connectivity",
        customApplications: "Custom Applications",
        networkingBadge: "Industrial Networking",
        networkingTitle: "Stratix Ethernet Switches",
        networkingSubtitle:
          "Robust industrial networking solutions for reliable communication",
        managedSwitchesTitle: "Managed Switches",
        advancedFeatures: "Advanced Features",
        vlanSupport: "VLAN support and traffic management",
        qosPrioritization: "Quality of Service (QoS) prioritization",
        networkRedundancy: "Network redundancy protocols",
        snmpMonitoring: "SNMP monitoring and diagnostics",
        securityFeatures: "Security Features",
        portAccess: "Port-based access control",
        macFiltering: "MAC address filtering",
        industrialFirewall: "Industrial firewall capabilities",
        secureRemote: "Secure remote management",
        unmanagedSwitchesTitle: "Unmanaged Switches",
        simpleReliable: "Simple & Reliable",
        plugAndPlay: "Plug-and-play operation",
        industrialTemp: "Industrial temperature rating",
        dinRailMounting: "DIN rail mounting options",
        costEffectiveNet: "Cost-effective networking",
        unmanagedApps: "Applications",
        smallControlSystems: "Small control systems",
        deviceLevel: "Device-level networking",
        machineLevel: "Machine-level communication",
        basicEthernet: "Basic Ethernet connectivity",
        gigabitSpeed: "High Performance",
        gigabitSpeedDesc: "Gigabit Ethernet speeds",
        industrialGrade: "Industrial Grade",
        industrialGradeDesc: "Harsh environment rated",
        ethernetIP: "EtherNet/IP",
        ethernetIPDesc: "Native protocol support",
        redundancy: "Redundancy",
        redundancyDesc: "Network fault tolerance",
        integrationTitle: "Why Choose Our Rockwell Integration?",
        integrationSubtitle:
          "Certified expertise ensures optimal product performance and support",
        certifiedIntegration: "Certified Integration",
        certifiedIntegrationDesc:
          "Our Silver System Integrator status ensures proper product selection, configuration, and integration for optimal performance.",
        completeSupport: "Complete Support",
        completeSupportDesc:
          "From initial design through commissioning and ongoing maintenance, we provide comprehensive support for all Rockwell products.",
        warrantyService: "Warranty & Service",
        warrantyServiceDesc:
          "All products come with manufacturer warranty plus our additional service guarantees and local technical support.",
        ctaTitle: "Ready to Implement Rockwell Automation?",
        ctaSubtitle:
          "Consult with our certified engineers to select the perfect products for your application",
        ctaConsultation: "Get Product Consultation",
        ctaServices: "Integration Services",
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
      customers: {
        title: "Our Valued Customers",
        subtitle: "Trusted by leading companies across Indonesia",
        clientLogo: "Client Logo",
      },
      cta: {
        title: "Ready to Automate Your Operations?",
        subtitle:
          "Get expert consultation from our certified automation engineers",
        contactUs: "Contact Us Today",
        viewServices: "View Our Services",
      },
      footer: {
        description:
          "Official Silver System Integrator for Rockwell Automation. Your partner in automation and drives system engineering since 2007.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        copyright: "All rights reserved.",
      },
      company: {
        name: "PT Sumur Batu",
        tagline: "Automation Engineering",
        location: "Surabaya, East Java",
        phone: "+62-31-879.8168",
        email: "SumurBatu@gmail.com",
      },
    },
    id: {
      nav: {
        home: "Beranda",
        about: "Tentang Kami",
        services: "Layanan",
        industries: "Industri",
        products: "Produk",
        contact: "Kontak Kami",
      },
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
      stats: {
        title: "Rekam Jejak Keunggulan yang Terbukti",
        subtitle:
          "Angka-angka yang mencerminkan komitmen kami terhadap kualitas dan inovasi",
        yearsExperience: "Tahun Pengalaman",
        expertEngineers: "Insinyur Ahli",
        completedProjects: "Proyek Selesai",
        industriesServed: "Industri yang Dilayani",
      },
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
      // About Page - Indonesian
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
      // Products Page - Indonesian
      productsPage: {
        heroTitle: "Produk Rockwell Automation",
        heroSubtitle:
          "Produk otomasi Allen-Bradley berkualitas tinggi yang diintegrasikan dan didukung oleh profesional bersertifikat",
        controllersBadge: "Kontroler (PLC)",
        controllersTitle: "Kontroler Allen-Bradley",
        controllersSubtitle:
          "Kontroler logika terprogram terdepan di industri untuk semua aplikasi",
        controlLogixTitle: "ControlLogix",
        controlLogixDesc:
          "Kontroler performa tinggi untuk aplikasi kompleks yang membutuhkan kemampuan kontrol canggih",
        modularArchitecture: "Arsitektur modular",
        integratedMotion: "Kontrol motion terintegrasi",
        advancedNetworking: "Jaringan canggih",
        redundancyOptions: "Opsi redundansi",
        idealApplications: "Aplikasi Ideal:",
        controlLogixApps:
          "Sistem manufaktur besar, kontrol proses, mesin kompleks",
        compactLogixTitle: "CompactLogix",
        compactLogixDesc:
          "Kontroler kompak all-in-one sempurna untuk aplikasi menengah",
        integratedIO: "I/O dan komunikasi terintegrasi",
        builtInEthernet: "Jaringan Ethernet built-in",
        motionCapabilities: "Kemampuan kontrol motion",
        costEffective: "Solusi hemat biaya",
        compactLogixApps:
          "Mesin pengemasan, material handling, sistem kecil hingga menengah",
        micro800Title: "Micro800",
        micro800Desc: "Kontroler entry-level untuk kebutuhan otomasi dasar",
        easyProgramming: "Pemrograman mudah",
        builtInIO: "I/O built-in",
        ethernetConnectivity: "Konektivitas Ethernet",
        affordablePricing: "Harga terjangkau",
        micro800Apps:
          "Mesin sederhana, peralatan standalone, kontrol proses dasar",
        drivesBadge: "Motor Drives",
        drivesTitle: "Seri PowerFlex Drive",
        drivesSubtitle: "Drive AC dan DC canggih untuk kontrol motor presisi",
        acDrivesTitle: "Drive AC / Inverter",
        powerFlex525Title: "PowerFlex 525",
        powerFlex525Desc:
          "Drive kompak untuk aplikasi dasar hingga lanjutan dengan fitur keselamatan terintegrasi",
        powerRange: "Rentang Daya:",
        applications: "Aplikasi:",
        powerFlex525Range: "0,4 hingga 22 kW",
        powerFlex525Apps: "Pompa, kipas, konveyor",
        powerFlex753Title: "PowerFlex 753",
        powerFlex753Desc:
          "Drive performa tinggi dengan algoritma kontrol canggih dan jaringan",
        powerFlex753Range: "0,4 hingga 2,3 MW",
        powerFlex753Apps: "Kontrol proses, aplikasi presisi",
        powerFlex755Title: "PowerFlex 755",
        powerFlex755Desc:
          "Sistem drive modular untuk aplikasi kompleks yang membutuhkan fleksibilitas maksimum",
        powerFlex755Range: "90 kW hingga 5,7 MW",
        powerFlex755Apps: "Motor besar, lingkungan keras",
        dcDrivesTitle: "Drive DC & Aplikasi Khusus",
        powerFlexDCTitle: "PowerFlex DC",
        powerFlexDCDesc:
          "Drive DC performa tinggi untuk aplikasi yang membutuhkan kontrol kecepatan dan torsi presisi",
        regenerativeCapabilities: "Kemampuan regeneratif",
        fieldWeakening: "Kontrol field weakening",
        advancedDiagnostics: "Diagnostik canggih",
        powerFlex755TTitle: "PowerFlex 755T",
        powerFlex755TDesc:
          "Drive Total Force Technology dirancang untuk lingkungan industri keras",
        enhancedProtection: "Proteksi lingkungan yang ditingkatkan",
        reducedHarmonic: "Distorsi harmonik berkurang",
        extendedTemp: "Rentang suhu operasi diperpanjang",
        driveApplicationsTitle: "Aplikasi Drive",
        hvacSystems: "Sistem HVAC",
        pumpControl: "Kontrol Pompa",
        conveyorSystems: "Sistem Konveyor",
        compressors: "Kompresor",
        processControl: "Kontrol Proses",
        machineTools: "Perkakas Mesin",
        motionBadge: "Motion Control",
        motionTitle: "Sistem Servo Kinetix",
        motionDesc:
          "Drive servo dan motor presisi untuk aplikasi motion control yang menuntut. Keluarga Kinetix menyediakan solusi motion terintegrasi dengan performa superior dan fleksibilitas untuk sistem otomasi kompleks.",
        highPerformance: "Performa Tinggi",
        highPerformanceDesc: "Kecepatan, akurasi, dan repeatability luar biasa",
        integratedControl: "Kontrol Terintegrasi",
        integratedControlDesc: "Integrasi mulus dengan sistem ControlLogix",
        easyConfiguration: "Konfigurasi Mudah",
        easyConfigurationDesc: "Alat setup dan commissioning sederhana",
        kinetixRangeTitle: "Rangkaian Produk Kinetix",
        servoDrives: "Drive Servo",
        servoDrivesDesc: "Drive seri Kinetix 5700, 5500, 350",
        servoMotors: "Motor Servo",
        servoMotorsDesc: "Opsi motor servo rotary dan linear",
        motionControllers: "Kontroler Motion",
        motionControllersDesc: "Kontrol motion standalone dan terintegrasi",
        actuators: "Aktuator",
        actuatorsDesc: "Silinder listrik dan aktuator linear",
        hmiBadge: "Antarmuka Operator & Visualisasi",
        hmiTitle: "Solusi PanelView & FactoryTalk",
        hmiSubtitle:
          "Antarmuka operator intuitif dan software visualisasi powerful",
        panelViewTitle: "Antarmuka Operator PanelView",
        panelView5000Title: "PanelView 5000",
        panelView5000Desc:
          "Terminal grafis canggih dengan layar multi-touch dan performa ditingkatkan",
        displaySizes: 'Layar 4" hingga 15"',
        multiTouch: "Kemampuan multi-touch",
        ethernetConn: "Konektivitas Ethernet",
        industrialRated: "Rated industri",
        panelViewPlus7Title: "PanelView Plus 7",
        panelViewPlus7Desc:
          "Terminal hemat biaya dengan komunikasi built-in dan fleksibilitas aplikasi",
        multipleScreens: "Berbagai ukuran layar tersedia",
        webBrowser: "Kemampuan web browser",
        recipeManagement: "Manajemen resep",
        factoryTalkTitle: "Software FactoryTalk",
        factoryTalkSETitle: "FactoryTalk View SE",
        factoryTalkSEDesc:
          "Software HMI/SCADA scalable untuk visualisasi dan kontrol plant-wide",
        realtimeTrending: "Trending real-time dan historis",
        alarmManagement: "Sistem manajemen alarm",
        multiUserSecurity: "Sistem keamanan multi-user",
        reportingTools: "Alat pelaporan komprehensif",
        visualizationCapabilities: "Kemampuan Visualisasi",
        richGraphics: "Grafis Kaya",
        remoteAccess: "Akses Remote",
        dataLogging: "Pencatatan Data",
        analytics: "Analitik",
        cloudConnectivity: "Konektivitas Cloud",
        customApplications: "Aplikasi Kustom",
        networkingBadge: "Jaringan Industri",
        networkingTitle: "Switch Ethernet Stratix",
        networkingSubtitle:
          "Solusi jaringan industri tangguh untuk komunikasi andal",
        managedSwitchesTitle: "Switch Terkelola",
        advancedFeatures: "Fitur Canggih",
        vlanSupport: "Dukungan VLAN dan manajemen traffic",
        qosPrioritization: "Prioritas Quality of Service (QoS)",
        networkRedundancy: "Protokol redundansi jaringan",
        snmpMonitoring: "Pemantauan dan diagnostik SNMP",
        securityFeatures: "Fitur Keamanan",
        portAccess: "Kontrol akses berbasis port",
        macFiltering: "Penyaringan alamat MAC",
        industrialFirewall: "Kemampuan firewall industri",
        secureRemote: "Manajemen remote aman",
        unmanagedSwitchesTitle: "Switch Tidak Terkelola",
        simpleReliable: "Sederhana & Andal",
        plugAndPlay: "Operasi plug-and-play",
        industrialTemp: "Rating suhu industri",
        dinRailMounting: "Opsi pemasangan DIN rail",
        costEffectiveNet: "Jaringan hemat biaya",
        unmanagedApps: "Aplikasi",
        smallControlSystems: "Sistem kontrol kecil",
        deviceLevel: "Jaringan tingkat perangkat",
        machineLevel: "Komunikasi tingkat mesin",
        basicEthernet: "Konektivitas Ethernet dasar",
        gigabitSpeed: "Performa Tinggi",
        gigabitSpeedDesc: "Kecepatan Gigabit Ethernet",
        industrialGrade: "Grade Industri",
        industrialGradeDesc: "Rated lingkungan keras",
        ethernetIP: "EtherNet/IP",
        ethernetIPDesc: "Dukungan protokol native",
        redundancy: "Redundansi",
        redundancyDesc: "Toleransi kesalahan jaringan",
        integrationTitle: "Mengapa Memilih Integrasi Rockwell Kami?",
        integrationSubtitle:
          "Keahlian bersertifikat memastikan performa dan dukungan produk optimal",
        certifiedIntegration: "Integrasi Bersertifikat",
        certifiedIntegrationDesc:
          "Status Silver System Integrator kami memastikan pemilihan produk, konfigurasi, dan integrasi yang tepat untuk performa optimal.",
        completeSupport: "Dukungan Lengkap",
        completeSupportDesc:
          "Dari desain awal hingga commissioning dan pemeliharaan berkelanjutan, kami menyediakan dukungan komprehensif untuk semua produk Rockwell.",
        warrantyService: "Garansi & Layanan",
        warrantyServiceDesc:
          "Semua produk dilengkapi dengan garansi pabrikan plus jaminan layanan tambahan kami dan dukungan teknis lokal.",
        ctaTitle: "Siap Mengimplementasikan Rockwell Automation?",
        ctaSubtitle:
          "Konsultasikan dengan insinyur bersertifikat kami untuk memilih produk sempurna untuk aplikasi Anda",
        ctaConsultation: "Konsultasi Produk",
        ctaServices: "Layanan Integrasi",
      },
      // Contact Page - Indonesian
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
        quickContactSubtitle:
          "Berbagai cara untuk menghubungi ahli otomasi kami",
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
      customers: {
        title: "Pelanggan Terpercaya Kami",
        subtitle: "Dipercaya oleh perusahaan terkemuka di seluruh Indonesia",
        clientLogo: "Logo Klien",
      },
      cta: {
        title: "Siap Mengotomatisasi Operasi Anda?",
        subtitle:
          "Dapatkan konsultasi ahli dari insinyur otomasi bersertifikat kami",
        contactUs: "Hubungi Kami Hari Ini",
        viewServices: "Lihat Layanan Kami",
      },
      footer: {
        description:
          "Silver System Integrator resmi untuk Rockwell Automation. Partner Anda dalam otomasi dan drives system engineering sejak 2007.",
        quickLinks: "Tautan Cepat",
        contactInfo: "Info Kontak",
        copyright: "Hak cipta dilindungi.",
      },
      company: {
        name: "PT Sumur Batu",
        tagline: "Automation Engineering",
        location: "Surabaya, Jawa Timur",
        phone: "+62-31-879.8168",
        email: "SumurBatu@gmail.com",
      },
    },
  };

  // Get translation value from nested object
  function getTranslation(lang, key) {
    const keys = key.split(".");
    let value = translations[lang];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  }

  // Update all elements with data-translate attribute
  function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      const translation = getTranslation(lang, key);

      // Handle both textContent and placeholder attributes
      if (element.hasAttribute("placeholder")) {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Save language preference
    localStorage.setItem("preferred-language", lang);

    // Update button states
    updateButtonStates(lang);
  }

  // Update language button active states
  function updateButtonStates(lang) {
    const allButtons = document.querySelectorAll(".lang-btn");
    allButtons.forEach((btn) => {
      const btnLang = btn.id.includes("en") ? "en" : "id";
      if (btnLang === lang) {
        btn.classList.add("bg-primary", "text-white");
        btn.classList.remove("text-gray-600", "hover:bg-gray-100");
      } else {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("text-gray-600", "hover:bg-gray-100");
      }
    });
  }

  // Initialize language switcher
  function initLanguageSwitcher() {
    // Get saved language or default to English
    const savedLang = localStorage.getItem("preferred-language") || "en";

    // Set initial language
    updateLanguage(savedLang);

    // Add click handlers to all language buttons
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const lang = this.id.includes("en") ? "en" : "id";
        updateLanguage(lang);
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
