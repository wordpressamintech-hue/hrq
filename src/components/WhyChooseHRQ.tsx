export function WhyChooseHRQ() {
  const stats = [
    { number: "20+", label: "Years of Experience", color: "#00ABF5" },
    { number: "7+", label: "Industries Served", color: "#005EF5" },
    { number: "4", label: "Continents Covered", color: "#00F5F1" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Statistics */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: stat.color }}
                >
                  <span className="text-2xl font-bold text-white">{stat.number}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.label}</h3>
                  <div 
                    className="w-16 h-1 mt-2 rounded"
                    style={{ backgroundColor: stat.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Strategic HR Partner
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are not just an outsourcing provider – we are your HR department's strategic partner, delivering measurable results and future-proof HR strategies.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our comprehensive approach combines industry expertise with cutting-edge technology to transform your human capital management from a cost center into a strategic advantage.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#00ABF5] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800">Global expertise with deep local market knowledge</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#005EF5] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800">Technology-driven solutions for maximum efficiency</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#00F5F1] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800">Proven track record of successful implementations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}