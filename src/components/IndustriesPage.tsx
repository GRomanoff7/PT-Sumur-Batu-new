export const IndustriesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1
              className="text-5xl font-bold mb-6"
              data-translate="industries.heroTitle"
            >
              Industries We Serve
            </h1>
            <p
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              data-translate="industries.heroSubtitle"
            >
              Comprehensive automation solutions across diverse industrial
              sectors with proven expertise and results
            </p>
          </div>
        </div>
      </section>

      {/* Water Treatment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
                <i className="fas fa-tint text-blue-600 mr-2"></i>
                <span
                  className="text-blue-600 font-semibold"
                  data-translate="industries.waterTreatment"
                >
                  Water Treatment
                </span>
              </div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-6"
                data-translate="industries.waterTreatmentFull"
              >
                Water & Wastewater Treatment
              </h2>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                data-translate="industries.waterTreatmentDesc"
              >
                Advanced automation solutions for water and wastewater treatment
                facilities, ensuring efficient operations, regulatory
                compliance, and optimal resource utilization. Our systems
                provide real-time monitoring and control of critical processes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="industries.processControlSystems"
                    >
                      Process Control Systems
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="industries.processControlSystemsDesc"
                    >
                      Automated control of filtration, chemical dosing, and
                      treatment processes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="industries.scadaIntegration"
                    >
                      SCADA Integration
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="industries.scadaIntegrationDesc"
                    >
                      Centralized monitoring and control of multiple treatment
                      facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="industries.complianceReporting"
                    >
                      Compliance Reporting
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="industries.complianceReportingDesc"
                    >
                      Automated data collection and reporting for regulatory
                      compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i className="fas fa-filter text-blue-600 text-3xl mb-3"></i>
                  <h4
                    className="font-bold text-gray-800"
                    data-translate="industries.filtrationSystems"
                  >
                    Filtration Systems
                  </h4>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i className="fas fa-flask text-blue-600 text-3xl mb-3"></i>
                  <h4
                    className="font-bold text-gray-800"
                    data-translate="industries.chemicalDosing"
                  >
                    Chemical Dosing
                  </h4>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i className="fas fa-chart-line text-blue-600 text-3xl mb-3"></i>
                  <h4
                    className="font-bold text-gray-800"
                    data-translate="industries.qualityMonitoring"
                  >
                    Quality Monitoring
                  </h4>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i className="fas fa-recycle text-blue-600 text-3xl mb-3"></i>
                  <h4
                    className="font-bold text-gray-800"
                    data-translate="industries.wasteManagement"
                  >
                    Waste Management
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pulp and Paper */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <h3
                  className="text-2xl font-bold text-gray-800 mb-6 text-center"
                  data-translate="industries.processControlAreas"
                >
                  Process Control Areas
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <i className="fas fa-tree text-green-600 mr-4 text-xl"></i>
                    <div>
                      <h4
                        className="font-semibold text-gray-800"
                        data-translate="industries.woodPreparation"
                      >
                        Wood Preparation
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        data-translate="industries.woodPreparationDesc"
                      >
                        Chipping and screening automation
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <i className="fas fa-industry text-green-600 mr-4 text-xl"></i>
                    <div>
                      <h4
                        className="font-semibold text-gray-800"
                        data-translate="industries.pulpProcessing"
                      >
                        Pulp Processing
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        data-translate="industries.pulpProcessingDesc"
                      >
                        Digester and bleaching control
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <i className="fas fa-scroll text-green-600 mr-4 text-xl"></i>
                    <div>
                      <h4
                        className="font-semibold text-gray-800"
                        data-translate="industries.paperMachine"
                      >
                        Paper Machine
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        data-translate="industries.paperMachineDesc"
                      >
                        Formation and pressing systems
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <i className="fas fa-boxes text-green-600 mr-4 text-xl"></i>
                    <div>
                      <h4
                        className="font-semibold text-gray-800"
                        data-translate="industries.finishingPackaging"
                      >
                        Finishing & Packaging
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        data-translate="industries.finishingPackagingDesc"
                      >
                        Winding and cutting control
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
                <i className="fas fa-leaf text-green-600 mr-2"></i>
                <span
                  className="text-green-600 font-semibold"
                  data-translate="industries.pulpPaper"
                >
                  Pulp and Paper
                </span>
              </div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-6"
                data-translate="industries.pulpPaperFull"
              >
                Pulp & Paper Manufacturing
              </h2>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                data-translate="industries.pulpPaperDesc"
              >
                Comprehensive automation solutions for pulp and paper production
                facilities, from wood preparation to final product packaging.
                Our systems optimize production efficiency, quality control, and
                resource utilization while ensuring environmental compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-cogs text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="industries.productionOptimization"
                    >
                      Production Optimization
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="industries.productionOptimizationDesc"
                    >
                      Maximizing throughput while maintaining quality standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-thermometer-half text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="industries.processControl"
                    >
                      Process Control
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="industries.processControlDesc"
                    >
                      Temperature, pressure, and flow control systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-leaf text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4
                      className="font-semibold text-gray-800"
                      data-translate="industries.environmentalControls"
                    >
                      Environmental Controls
                    </h4>
                    <p
                      className="text-gray-600 text-sm"
                      data-translate="industries.environmentalControlsDesc"
                    >
                      Emission monitoring and waste reduction systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Industry */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-2 mb-6">
              <i className="fas fa-hammer text-gray-600 mr-2"></i>
              <span
                className="text-gray-600 font-semibold"
                data-translate="industries.metalIndustry"
              >
                Metal Industry
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="industries.metalIndustryFull"
            >
              Metal Processing & Manufacturing
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-translate="industries.metalIndustryDesc"
            >
              Advanced automation for steel, aluminum, and other metal
              processing operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <i className="fas fa-fire text-red-600 text-4xl mb-6"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.smeltingRefining"
              >
                Smelting & Refining
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-red-600 mr-2 text-sm"></i>
                  <span data-translate="industries.furnaceTempControl">
                    Furnace temperature control
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-red-600 mr-2 text-sm"></i>
                  <span data-translate="industries.alloyComposition">
                    Alloy composition monitoring
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-red-600 mr-2 text-sm"></i>
                  <span data-translate="industries.safetyInterlocks">
                    Safety interlock systems
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-red-600 mr-2 text-sm"></i>
                  <span data-translate="industries.emissionControl">
                    Emission control systems
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <i className="fas fa-compress-arrows-alt text-blue-600 text-4xl mb-6"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.rollingForming"
              >
                Rolling & Forming
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-blue-600 mr-2 text-sm"></i>
                  <span data-translate="industries.rollGapPositioning">
                    Roll gap positioning
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-blue-600 mr-2 text-sm"></i>
                  <span data-translate="industries.speedSync">
                    Speed synchronization
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-blue-600 mr-2 text-sm"></i>
                  <span data-translate="industries.thicknessControl">
                    Thickness control
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-blue-600 mr-2 text-sm"></i>
                  <span data-translate="industries.qualityInspection">
                    Quality inspection
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <i className="fas fa-cut text-green-600 text-4xl mb-6"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.cuttingFinishing"
              >
                Cutting & Finishing
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-600 mr-2 text-sm"></i>
                  <span data-translate="industries.precisionCutting">
                    Precision cutting systems
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-600 mr-2 text-sm"></i>
                  <span data-translate="industries.surfaceTreatment">
                    Surface treatment control
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-600 mr-2 text-sm"></i>
                  <span data-translate="industries.packagingAutomation">
                    Packaging automation
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-600 mr-2 text-sm"></i>
                  <span data-translate="industries.inventoryManagement">
                    Inventory management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mining */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-100 rounded-full px-6 py-2 mb-6">
                <i className="fas fa-mountain text-yellow-600 mr-2"></i>
                <span
                  className="text-yellow-600 font-semibold"
                  data-translate="industries.mining"
                >
                  Mining Industry
                </span>
              </div>
              <h2
                className="text-4xl font-bold text-gray-800 mb-6"
                data-translate="industries.miningFull"
              >
                Mining & Mineral Processing
              </h2>
              <p
                className="text-gray-600 mb-6 leading-relaxed"
                data-translate="industries.miningDesc"
              >
                Robust automation systems designed for harsh mining
                environments, from extraction to processing. Our solutions
                enhance safety, productivity, and operational efficiency while
                meeting stringent environmental and safety standards.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.safetySystems"
                    >
                      Safety Systems
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-truck text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.materialHandling"
                    >
                      Material Handling
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cogs text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.crushingGrinding"
                    >
                      Crushing & Grinding
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-filter text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.separationSystems"
                    >
                      Separation Systems
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-tint text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.dewatering"
                    >
                      Dewatering
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-chart-line text-yellow-600 mr-3"></i>
                    <span
                      className="font-semibold text-gray-800"
                      data-translate="industries.processMonitoring"
                    >
                      Process Monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8">
              <h3
                className="text-2xl font-bold text-gray-800 mb-6 text-center"
                data-translate="industries.miningApplications"
              >
                Mining Applications
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4
                    className="font-bold text-gray-800 mb-2"
                    data-translate="industries.extractionTransport"
                  >
                    Extraction & Transportation
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="industries.extractionTransportDesc"
                  >
                    Conveyor systems, crushers, and material handling automation
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4
                    className="font-bold text-gray-800 mb-2"
                    data-translate="industries.processingRefining"
                  >
                    Processing & Refining
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="industries.processingRefiningDesc"
                  >
                    Flotation, grinding, and separation process control
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4
                    className="font-bold text-gray-800 mb-2"
                    data-translate="industries.environmentalControl"
                  >
                    Environmental Control
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-translate="industries.environmentalControlDesc"
                  >
                    Dust suppression, water treatment, and waste management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              data-translate="industries.additionalIndustries"
            >
              Additional Industries
            </h2>
            <p
              className="text-xl text-gray-600"
              data-translate="industries.additionalIndustriesDesc"
            >
              Expanding our expertise across diverse industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-flask text-purple-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.processPlants"
              >
                Process Plants
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.processPlantsFull"
              >
                Chemical, food, and pharmaceutical processing automation
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{" "}
                  <span data-translate="industries.batchProcessing">
                    Batch processing control
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.recipeManagement">
                    Recipe management
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.qualityAssurance">
                    Quality assurance systems
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.regulatoryCompliance">
                    Regulatory compliance
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-conveyor-belt text-orange-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.materialHandling"
              >
                Material Handling
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.materialHandlingFull"
              >
                Warehouse and distribution center automation
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{" "}
                  <span data-translate="industries.conveyorSystems">
                    Conveyor systems
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.sortingRouting">
                    Sorting and routing
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.inventoryTracking">
                    Inventory tracking
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.automatedStorage">
                    Automated storage
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-cog text-indigo-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.consumerGoods"
              >
                Consumer Goods
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.consumerGoodsFull"
              >
                Manufacturing machinery automation for consumer products
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{" "}
                  <span data-translate="industries.productionLine">
                    Production line control
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.qualityInspection">
                    Quality inspection
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.packagingAuto">
                    Packaging automation
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.traceability">
                    Traceability systems
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-bolt text-red-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.powerPlant"
              >
                Power Plant
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.powerPlantFull"
              >
                Power generation and distribution system automation
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  •{" "}
                  <span data-translate="industries.turbineControl">
                    Turbine control systems
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.loadDispatch">
                    Load dispatch automation
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.protectionSystems">
                    Protection systems
                  </span>
                </li>
                <li>
                  •{" "}
                  <span data-translate="industries.gridSync">
                    Grid synchronization
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-print text-teal-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.printing"
              >
                Printing Industry
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.printingFull"
              >
                Modern printing press automation and control systems
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  •{" "}
                  <span data-translate="industries.webTension">
                    Web tension control
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.registration">
                    Registration systems
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.colorManagement">
                    Color management
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.qualityMonitoring">
                    Quality monitoring
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i className="fas fa-utensils text-pink-600 text-4xl mb-4"></i>
              <h3
                className="text-xl font-bold text-gray-800 mb-4"
                data-translate="industries.foodBeverage"
              >
                Food & Beverage
              </h3>
              <p
                className="text-gray-600 mb-4"
                data-translate="industries.foodBeverageFull"
              >
                Hygienic automation solutions for food processing
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  •{" "}
                  <span data-translate="industries.cipSystems">
                    CIP systems
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.temperatureControl">
                    Temperature control
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.batchTracking">
                    Batch tracking
                  </span>
                </div>
                <div>
                  •{" "}
                  <span data-translate="industries.safetyCompliance">
                    Safety compliance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              data-translate="industries.whyChooseUs"
            >
              Why Industries Choose Us
            </h2>
            <p
              className="text-xl text-blue-100"
              data-translate="industries.whyChooseUsDesc"
            >
              Proven expertise and results across all industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-white text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                data-translate="industries.certifiedExpertise"
              >
                Certified Expertise
              </h3>
              <p
                className="text-blue-100"
                data-translate="industries.certifiedExpertiseDesc"
              >
                Rockwell Automation Silver System Integrator with proven
                industry knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                data-translate="industries.experiencedTeam"
              >
                Experienced Team
              </h3>
              <p
                className="text-blue-100"
                data-translate="industries.experiencedTeamDesc"
              >
                30+ professionals with deep understanding of industrial
                processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-white text-3xl"></i>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                data-translate="industries.longTermPartnership"
              >
                Long-term Partnership
              </h3>
              <p
                className="text-blue-100"
                data-translate="industries.longTermPartnershipDesc"
              >
                Committed to ongoing support and system optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            data-translate="industries.readyToAutomate"
          >
            Ready to Automate Your Industry?
          </h2>
          <p
            className="text-xl text-gray-600 mb-8"
            data-translate="industries.readyToAutomateDesc"
          >
            Contact our industry experts to discuss your specific automation
            requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-2"></i>
              <span data-translate="industries.discussProject">
                Discuss Your Project
              </span>
            </a>
            <a
              href="/services"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <i className="fas fa-cogs mr-2"></i>
              <span data-translate="industries.viewServices">
                View Our Services
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
