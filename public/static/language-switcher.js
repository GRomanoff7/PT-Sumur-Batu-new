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
