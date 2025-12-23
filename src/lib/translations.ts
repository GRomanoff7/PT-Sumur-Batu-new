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
