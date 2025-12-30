export const Layout = ({ children }: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PT Sumur Batu - Automation & Drives System Engineering</title>
        <meta
          name="description"
          content="PT Sumur Batu - Official Silver System Integrator for Rockwell Automation. Specialists in Control System Design, PLC Programming, and Industrial Automation Solutions."
        />
        {/* Tailwind via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/static/style.css" rel="stylesheet" />

        {/* Language Switcher Script */}
        <script src="/static/language-switcher.js"></script>
        {/* Main App Script */}
        <script src="/static/app.js"></script>

        {/* Konfigurasi Tailwind Custom Colors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'rockwell-red': '#E31937',
                    'rockwell-blue': '#004C97',
                    'primary': '#004C97',
                    'secondary': '#E31937',
                    'accent': '#F39200'
                  }
                }
              }
            }
          `,
          }}
        />
      </head>
      <body className="bg-gray-50 font-sans">
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <i className="fas fa-cogs text-white text-xl"></i>
                </div>
                <div>
                  <h1
                    className="text-xl font-bold text-gray-800"
                    data-translate="company.name"
                  >
                    PT Sumur Batu
                  </h1>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="company.tagline"
                  >
                    Automation Engineering
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  data-translate="nav.home"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  data-translate="nav.about"
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  data-translate="nav.services"
                >
                  Services
                </a>
                <a
                  href="/industries"
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  data-translate="nav.industries"
                >
                  Industries
                </a>
                <a
                  href="/products"
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  data-translate="nav.products"
                >
                  Products
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  data-translate="nav.contact"
                >
                  Contact Us
                </a>

                {/* Desktop Language Switcher - Modern Pill Design */}
                <div className="language-switcher ml-6 pl-6 border-l border-gray-200">
                  <div className="bg-gray-100 p-1 rounded-full flex items-center shadow-inner">
                    <button
                      id="lang-en"
                      className="lang-btn flex items-center space-x-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
                    >
                      <i className="fas fa-globe text-[10px] opacity-70"></i>
                      <span>EN</span>
                    </button>
                    <button
                      id="lang-id"
                      className="lang-btn flex items-center space-x-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
                    >
                      <span>ID</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile menu button area */}
              <div className="lg:hidden flex items-center space-x-3">
                {/* Mobile Language Switcher - Modern Pill Design */}
                <div className="language-switcher mr-2">
                  <div className="bg-gray-100 p-0.5 rounded-full flex items-center">
                    <button
                      id="lang-en-mobile"
                      className="lang-btn px-3 py-1 rounded-full text-[10px] font-bold transition-all"
                    >
                      EN
                    </button>
                    <button
                      id="lang-id-mobile"
                      className="lang-btn px-3 py-1 rounded-full text-[10px] font-bold transition-all"
                    >
                      ID
                    </button>
                  </div>
                </div>

                <button id="mobile-menu-button" className="p-2">
                  <i className="fas fa-bars text-gray-700 text-xl"></i>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              id="mobile-menu"
              className="hidden lg:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="/"
                  className="text-gray-700 hover:text-primary font-medium"
                  data-translate="nav.home"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-700 hover:text-primary font-medium"
                  data-translate="nav.about"
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className="text-gray-700 hover:text-primary font-medium"
                  data-translate="nav.services"
                >
                  Services
                </a>
                <a
                  href="/industries"
                  className="text-gray-700 hover:text-primary font-medium"
                  data-translate="nav.industries"
                >
                  Industries
                </a>
                <a
                  href="/products"
                  className="text-gray-700 hover:text-primary font-medium"
                  data-translate="nav.products"
                >
                  Products
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-primary font-medium"
                  data-translate="nav.contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <i className="fas fa-cogs text-white"></i>
                  </div>
                  <h3
                    className="text-xl font-bold"
                    data-translate="company.name"
                  >
                    PT Sumur Batu
                  </h3>
                </div>
                <p
                  className="text-gray-300 mb-4"
                  data-translate="footer.description"
                >
                  Official Silver System Integrator for Rockwell Automation.
                  Your partner in automation and drives system engineering since
                  2007.
                </p>
              </div>
              <div>
                <h4
                  className="text-lg font-semibold mb-4"
                  data-translate="footer.quickLinks"
                >
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-300 hover:text-white transition-colors"
                      data-translate="nav.about"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-gray-300 hover:text-white transition-colors"
                      data-translate="nav.services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-300 hover:text-white transition-colors"
                      data-translate="nav.contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  className="text-lg font-semibold mb-4"
                  data-translate="footer.contactInfo"
                >
                  Contact Info
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span data-translate="company.location">
                      Surabaya, East Java
                    </span>
                  </p>
                  <p>
                    <i className="fas fa-phone mr-2"></i>
                    <span data-translate="company.phone">+62-31-879.8168</span>
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-1"></i>
                    <span data-translate="company.email">
                      SumurBatu@gmail.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>
                &copy; 2024{" "}
                <span data-translate="company.name">PT Sumur Batu</span>.{" "}
                <span data-translate="footer.copyright">
                  All rights reserved.
                </span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};
