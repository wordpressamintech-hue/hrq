import { Award, Shield, Cog, Globe } from "lucide-react";

export function USPHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Proven expertise across 7+ industries."
    },
    {
      icon: Shield,
      title: "ISO-Ready Processes",
      description: "Compliance-first HR solutions (ISO 30414 / ISO 9001)."
    },
    {
      icon: Cog,
      title: "End-to-End HR Solutions",
      description: "From HR setup to digital transformation."
    },
    {
      icon: Globe,
      title: "Global Reach, Local Insight",
      description: "Serving clients across Asia, Middle East, Europe, and North America."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}