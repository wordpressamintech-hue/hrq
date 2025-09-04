import { 
  Monitor, 
  ShoppingCart, 
  Banknote, 
  Heart, 
  Factory, 
  Zap, 
  Users 
} from "lucide-react";

export function IndustriesCarousel() {
  const industries = [
    { icon: Monitor, name: "Technology", color: "#00ABF5" },
    { icon: ShoppingCart, name: "FMCG", color: "#005EF5" },
    { icon: Banknote, name: "Finance", color: "#0213F5" },
    { icon: Heart, name: "Healthcare", color: "#00F5F1" },
    { icon: Factory, name: "Manufacturing", color: "#5923FA" },
    { icon: Zap, name: "Energy", color: "#5190F5" },
    { icon: Users, name: "NGOs", color: "#00ABF5" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600">
            Proven HR Solutions Across Diverse Sectors
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center hover:scale-110 transition-transform cursor-pointer"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow"
                style={{ backgroundColor: industry.color }}
              >
                <industry.icon className="w-10 h-10 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-900 group-hover:text-[#00ABF5] transition-colors">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Animated background elements */}
        <div className="relative mt-16 h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00ABF5]/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}