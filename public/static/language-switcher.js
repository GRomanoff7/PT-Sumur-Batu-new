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
      servicesPage: {
        heroTitle: "Our Services",
        heroSubtitle:
          "Comprehensive automation engineering services from design to deployment and ongoing support",
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
        ctaTitle: "Ready to Start Your Automation Project?",
        ctaSubtitle:
          "Let our certified engineers design the perfect automation solution for your needs",
        ctaConsultation: "Get Free Consultation",
        ctaProducts: "View Our Products",
      },
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
      industries: {
        title: "Industries We Serve",
        subtitle: "Expertise across diverse industrial sectors",
        heroTitle: "Industries We Serve",
        heroSubtitle:
          "Comprehensive automation solutions across diverse industrial sectors with proven expertise and results",
        waterTreatment: "Water Treatment",
        waterTreatmentFull: "Water & Wastewater Treatment",
        waterTreatmentDesc:
          "Advanced automation solutions for water and wastewater treatment facilities, ensuring efficient operations, regulatory compliance, and optimal resource utilization. Our systems provide real-time monitoring and control of critical processes.",
        processControlSystems: "Process Control Systems",
        processControlSystemsDesc:
          "Automated control of filtration, chemical dosing, and treatment processes",
        scadaIntegration: "SCADA Integration",
        scadaIntegrationDesc:
          "Centralized monitoring and control of multiple treatment facilities",
        complianceReporting: "Compliance Reporting",
        complianceReportingDesc:
          "Automated data collection and reporting for regulatory compliance",
        filtrationSystems: "Filtration Systems",
        chemicalDosing: "Chemical Dosing",
        qualityMonitoring: "Quality Monitoring",
        wasteManagement: "Waste Management",
        pulpPaper: "Pulp and Paper",
        pulpPaperFull: "Pulp & Paper Manufacturing",
        pulpPaperDesc:
          "Comprehensive automation solutions for pulp and paper production facilities, from wood preparation to final product packaging. Our systems optimize production efficiency, quality control, and resource utilization while ensuring environmental compliance.",
        processControlAreas: "Process Control Areas",
        woodPreparation: "Wood Preparation",
        woodPreparationDesc: "Chipping and screening automation",
        pulpProcessing: "Pulp Processing",
        pulpProcessingDesc: "Digester and bleaching control",
        paperMachine: "Paper Machine",
        paperMachineDesc: "Formation and pressing systems",
        finishingPackaging: "Finishing & Packaging",
        finishingPackagingDesc: "Winding and cutting control",
        productionOptimization: "Production Optimization",
        productionOptimizationDesc:
          "Maximizing throughput while maintaining quality standards",
        processControl: "Process Control",
        processControlDesc: "Temperature, pressure, and flow control systems",
        environmentalControls: "Environmental Controls",
        environmentalControlsDesc:
          "Emission monitoring and waste reduction systems",
        metalIndustry: "Metal Industry",
        metalIndustryFull: "Metal Processing & Manufacturing",
        metalIndustryDesc:
          "Advanced automation for steel, aluminum, and other metal processing operations",
        smeltingRefining: "Smelting & Refining",
        furnaceTempControl: "Furnace temperature control",
        alloyComposition: "Alloy composition monitoring",
        safetyInterlocks: "Safety interlock systems",
        emissionControl: "Emission control systems",
        rollingForming: "Rolling & Forming",
        rollGapPositioning: "Roll gap positioning",
        speedSync: "Speed synchronization",
        thicknessControl: "Thickness control",
        qualityInspection: "Quality inspection",
        cuttingFinishing: "Cutting & Finishing",
        precisionCutting: "Precision cutting systems",
        surfaceTreatment: "Surface treatment control",
        packagingAutomation: "Packaging automation",
        inventoryManagement: "Inventory management",
        mining: "Mining",
        miningFull: "Mining & Mineral Processing",
        miningDesc:
          "Robust automation systems designed for harsh mining environments, from extraction to processing. Our solutions enhance safety, productivity, and operational efficiency while meeting stringent environmental and safety standards.",
        safetySystems: "Safety Systems",
        materialHandling: "Material Handling",
        crushingGrinding: "Crushing & Grinding",
        separationSystems: "Separation Systems",
        dewatering: "Dewatering",
        processMonitoring: "Process Monitoring",
        miningApplications: "Mining Applications",
        extractionTransport: "Extraction & Transportation",
        extractionTransportDesc:
          "Conveyor systems, crushers, and material handling automation",
        processingRefining: "Processing & Refining",
        processingRefiningDesc:
          "Flotation, grinding, and separation process control",
        environmentalControl: "Environmental Control",
        environmentalControlDesc:
          "Dust suppression, water treatment, and waste management",
        additionalIndustries: "Additional Industries",
        additionalIndustriesDesc:
          "Expanding our expertise across diverse industrial sectors",
        processPlants: "Process Plants",
        processPlantsFull:
          "Chemical, food, and pharmaceutical processing automation",
        batchProcessing: "Batch processing control",
        recipeManagement: "Recipe management",
        qualityAssurance: "Quality assurance systems",
        regulatoryCompliance: "Regulatory compliance",
        materialHandlingFull: "Warehouse and distribution center automation",
        conveyorSystems: "Conveyor systems",
        sortingRouting: "Sorting and routing",
        inventoryTracking: "Inventory tracking",
        automatedStorage: "Automated storage",
        consumerGoods: "Consumer Goods",
        consumerGoodsFull:
          "Manufacturing machinery automation for consumer products",
        productionLine: "Production line control",
        packagingAuto: "Packaging automation",
        traceability: "Traceability systems",
        powerPlant: "Power Plant",
        powerPlantFull: "Power generation and distribution system automation",
        turbineControl: "Turbine control systems",
        loadDispatch: "Load dispatch automation",
        protectionSystems: "Protection systems",
        gridSync: "Grid synchronization",
        printing: "Printing",
        printingFull: "Modern printing press automation and control systems",
        webTension: "Web tension control",
        registration: "Registration systems",
        colorManagement: "Color management",
        foodBeverage: "Food & Beverage",
        foodBeverageFull: "Hygienic automation solutions for food processing",
        cipSystems: "CIP systems",
        temperatureControl: "Temperature control",
        batchTracking: "Batch tracking",
        safetyCompliance: "Safety compliance",
        whyChooseUs: "Why Industries Choose Us",
        whyChooseUsDesc:
          "Proven expertise and results across all industrial sectors",
        certifiedExpertise: "Certified Expertise",
        certifiedExpertiseDesc:
          "Rockwell Automation Silver System Integrator with proven industry knowledge",
        experiencedTeam: "Experienced Team",
        experiencedTeamDesc:
          "30+ professionals with deep understanding of industrial processes",
        longTermPartnership: "Long-term Partnership",
        longTermPartnershipDesc:
          "Committed to ongoing support and system optimization",
        readyToAutomate: "Ready to Automate Your Industry?",
        readyToAutomateDesc:
          "Contact our industry experts to discuss your specific automation requirements",
        discussProject: "Discuss Your Project",
        viewServices: "View Our Services",
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
      servicesPage: {
        heroTitle: "Layanan Kami",
        heroSubtitle:
          "Layanan engineering otomasi komprehensif dari desain hingga deployment dan dukungan berkelanjutan",
        engineeringBadge: "Engineering & Desain",
        engineeringTitle: "Desain Sistem Kontrol & Drives",
        engineeringDesc:
          "Insinyur ahli kami merancang sistem kontrol dan drives komprehensif yang disesuaikan dengan kebutuhan industri spesifik Anda. Kami memanfaatkan teknologi terdepan dan metodologi terbukti untuk menghadirkan performa, keandalan, dan efisiensi optimal.",
        customArchitecture: "Arsitektur Sistem Khusus",
        customArchitectureDesc:
          "Desain yang disesuaikan untuk performa optimal",
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
        ctaTitle: "Siap Memulai Proyek Otomasi Anda?",
        ctaSubtitle:
          "Biarkan insinyur bersertifikat kami merancang solusi otomasi sempurna untuk kebutuhan Anda",
        ctaConsultation: "Konsultasi Gratis",
        ctaProducts: "Lihat Produk Kami",
      },
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
      industries: {
        title: "Industri yang Kami Layani",
        subtitle: "Keahlian di berbagai sektor industri",
        heroTitle: "Industri yang Kami Layani",
        heroSubtitle:
          "Solusi otomasi komprehensif di berbagai sektor industri dengan keahlian dan hasil yang terbukti",
        waterTreatment: "Pengolahan Air",
        waterTreatmentFull: "Pengolahan Air & Air Limbah",
        waterTreatmentDesc:
          "Solusi otomasi canggih untuk fasilitas pengolahan air dan air limbah, memastikan operasi yang efisien, kepatuhan regulasi, dan pemanfaatan sumber daya yang optimal. Sistem kami menyediakan pemantauan dan kontrol real-time dari proses kritis.",
        processControlSystems: "Sistem Kontrol Proses",
        processControlSystemsDesc:
          "Kontrol otomatis filtrasi, dosis kimia, dan proses pengolahan",
        scadaIntegration: "Integrasi SCADA",
        scadaIntegrationDesc:
          "Pemantauan dan kontrol terpusat dari berbagai fasilitas pengolahan",
        complianceReporting: "Pelaporan Kepatuhan",
        complianceReportingDesc:
          "Pengumpulan data dan pelaporan otomatis untuk kepatuhan regulasi",
        filtrationSystems: "Sistem Filtrasi",
        chemicalDosing: "Dosis Kimia",
        qualityMonitoring: "Pemantauan Kualitas",
        wasteManagement: "Manajemen Limbah",
        pulpPaper: "Pulp dan Kertas",
        pulpPaperFull: "Manufaktur Pulp & Kertas",
        pulpPaperDesc:
          "Solusi otomasi komprehensif untuk fasilitas produksi pulp dan kertas, dari persiapan kayu hingga pengemasan produk akhir. Sistem kami mengoptimalkan efisiensi produksi, kontrol kualitas, dan pemanfaatan sumber daya sambil memastikan kepatuhan lingkungan.",
        processControlAreas: "Area Kontrol Proses",
        woodPreparation: "Persiapan Kayu",
        woodPreparationDesc: "Otomasi pemotongan dan penyaringan",
        pulpProcessing: "Pemrosesan Pulp",
        pulpProcessingDesc: "Kontrol digester dan pemutihan",
        paperMachine: "Mesin Kertas",
        paperMachineDesc: "Sistem pembentukan dan penekanan",
        finishingPackaging: "Finishing & Pengemasan",
        finishingPackagingDesc: "Kontrol penggulungan dan pemotongan",
        productionOptimization: "Optimisasi Produksi",
        productionOptimizationDesc:
          "Memaksimalkan throughput sambil mempertahankan standar kualitas",
        processControl: "Kontrol Proses",
        processControlDesc: "Sistem kontrol suhu, tekanan, dan aliran",
        environmentalControls: "Kontrol Lingkungan",
        environmentalControlsDesc:
          "Pemantauan emisi dan sistem pengurangan limbah",
        metalIndustry: "Industri Logam",
        metalIndustryFull: "Pemrosesan & Manufaktur Logam",
        metalIndustryDesc:
          "Otomasi canggih untuk operasi pemrosesan baja, aluminium, dan logam lainnya",
        smeltingRefining: "Peleburan & Pemurnian",
        furnaceTempControl: "Kontrol suhu tungku",
        alloyComposition: "Pemantauan komposisi paduan",
        safetyInterlocks: "Sistem interlock keselamatan",
        emissionControl: "Sistem kontrol emisi",
        rollingForming: "Penggulungan & Pembentukan",
        rollGapPositioning: "Posisi celah gulungan",
        speedSync: "Sinkronisasi kecepatan",
        thicknessControl: "Kontrol ketebalan",
        qualityInspection: "Inspeksi kualitas",
        cuttingFinishing: "Pemotongan & Finishing",
        precisionCutting: "Sistem pemotongan presisi",
        surfaceTreatment: "Kontrol perawatan permukaan",
        packagingAutomation: "Otomasi pengemasan",
        inventoryManagement: "Manajemen inventaris",
        mining: "Pertambangan",
        miningFull: "Pertambangan & Pemrosesan Mineral",
        miningDesc:
          "Sistem otomasi tangguh yang dirancang untuk lingkungan pertambangan yang keras, dari ekstraksi hingga pemrosesan. Solusi kami meningkatkan keselamatan, produktivitas, dan efisiensi operasional sambil memenuhi standar lingkungan dan keselamatan yang ketat.",
        safetySystems: "Sistem Keselamatan",
        materialHandling: "Material Handling",
        crushingGrinding: "Penghancuran & Penggilingan",
        separationSystems: "Sistem Pemisahan",
        dewatering: "Pengeringan",
        processMonitoring: "Pemantauan Proses",
        miningApplications: "Aplikasi Pertambangan",
        extractionTransport: "Ekstraksi & Transportasi",
        extractionTransportDesc:
          "Sistem konveyor, penghancur, dan otomasi material handling",
        processingRefining: "Pemrosesan & Pemurnian",
        processingRefiningDesc:
          "Flotasi, penggilingan, dan kontrol proses pemisahan",
        environmentalControl: "Kontrol Lingkungan",
        environmentalControlDesc:
          "Penekanan debu, pengolahan air, dan manajemen limbah",
        additionalIndustries: "Industri Tambahan",
        additionalIndustriesDesc:
          "Memperluas keahlian kami di berbagai sektor industri",
        processPlants: "Pabrik Proses",
        processPlantsFull: "Otomasi pemrosesan kimia, makanan, dan farmasi",
        batchProcessing: "Kontrol pemrosesan batch",
        recipeManagement: "Manajemen resep",
        qualityAssurance: "Sistem jaminan kualitas",
        regulatoryCompliance: "Kepatuhan regulasi",
        materialHandlingFull: "Otomasi gudang dan pusat distribusi",
        conveyorSystems: "Sistem konveyor",
        sortingRouting: "Penyortiran dan perutean",
        inventoryTracking: "Pelacakan inventaris",
        automatedStorage: "Penyimpanan otomatis",
        consumerGoods: "Barang Konsumen",
        consumerGoodsFull: "Otomasi mesin manufaktur untuk produk konsumen",
        productionLine: "Kontrol jalur produksi",
        packagingAuto: "Otomasi pengemasan",
        traceability: "Sistem ketertelusuran",
        powerPlant: "Pembangkit Listrik",
        powerPlantFull: "Otomasi sistem pembangkit dan distribusi listrik",
        turbineControl: "Sistem kontrol turbin",
        loadDispatch: "Otomasi pengiriman beban",
        protectionSystems: "Sistem proteksi",
        gridSync: "Sinkronisasi grid",
        printing: "Percetakan",
        printingFull: "Otomasi dan sistem kontrol mesin cetak modern",
        webTension: "Kontrol tegangan web",
        registration: "Sistem registrasi",
        colorManagement: "Manajemen warna",
        foodBeverage: "Makanan & Minuman",
        foodBeverageFull: "Solusi otomasi higienis untuk pemrosesan makanan",
        cipSystems: "Sistem CIP",
        temperatureControl: "Kontrol suhu",
        batchTracking: "Pelacakan batch",
        safetyCompliance: "Kepatuhan keselamatan",
        whyChooseUs: "Mengapa Industri Memilih Kami",
        whyChooseUsDesc:
          "Keahlian dan hasil yang terbukti di semua sektor industri",
        certifiedExpertise: "Keahlian Bersertifikat",
        certifiedExpertiseDesc:
          "Rockwell Automation Silver System Integrator dengan pengetahuan industri yang terbukti",
        experiencedTeam: "Tim Berpengalaman",
        experiencedTeamDesc:
          "30+ profesional dengan pemahaman mendalam tentang proses industri",
        longTermPartnership: "Kemitraan Jangka Panjang",
        longTermPartnershipDesc:
          "Berkomitmen untuk dukungan berkelanjutan dan optimisasi sistem",
        readyToAutomate: "Siap Mengotomatisasi Industri Anda?",
        readyToAutomateDesc:
          "Hubungi ahli industri kami untuk mendiskusikan kebutuhan otomasi spesifik Anda",
        discussProject: "Diskusikan Proyek Anda",
        viewServices: "Lihat Layanan Kami",
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
      element.textContent = translation;
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
