import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Monitor, 
  ShoppingCart, 
  Banknote, 
  Heart, 
  Factory, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useRouter } from "../components/Router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function IndustriesPage() {
  const { navigate } = useRouter();
  
  const industries = [
    {
      icon: Monitor,
      name: "Technology",
      description: "Rapid scaling HR solutions for tech startups and established technology companies.",
      challenges: [
        "Rapid workforce scaling",
        "Talent retention in competitive market",
        "Remote work management",
        "Technical skills assessment"
      ],
      solutions: [
        "Agile recruitment processes",
        "Flexible remote onboarding",
        "Technical competency frameworks",
        "Equity and compensation management"
      ],
      caseStudy: "Helped a SaaS startup scale from 25 to 300 employees in 18 months while maintaining 95% retention rate.",
      color: "#00ABF5"
    },
    {
      icon: ShoppingCart,
      name: "FMCG (Fast-Moving Consumer Goods)",
      description: "Comprehensive HR solutions for consumer goods manufacturers and distributors.",
      challenges: [
        "Seasonal workforce management",
        "Supply chain talent needs",
        "Multi-location coordination",
        "Compliance across markets"
      ],
      solutions: [
        "Flexible staffing models",
        "Regional HR hubs",
        "Standardized processes",
        "Local compliance expertise"
      ],
      caseStudy: "Streamlined HR operations for a global FMCG company across 12 countries, reducing costs by 35%.",
      color: "#005EF5"
    },
    {
      icon: Banknote,
      name: "Financial Services",
      description: "Specialized HR services for banks, insurance companies, and fintech organizations.",
      challenges: [
        "Regulatory compliance",
        "Risk management culture",
        "Professional certification tracking",
        "Client confidentiality requirements"
      ],
      solutions: [
        "Compliance-first HR processes",
        "Risk-aware recruitment",
        "Certification management systems",
        "Enhanced security protocols"
      ],
      caseStudy: "Achieved 100% regulatory compliance for a regional bank while improving employee satisfaction by 40%.",
      color: "#0213F5"
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Tailored HR solutions for hospitals, clinics, and healthcare technology companies.",
      challenges: [
        "Professional licensing verification",
        "Shift scheduling complexity",
        "Patient safety requirements",
        "Continuing education compliance"
      ],
      solutions: [
        "Credential verification systems",
        "Advanced scheduling platforms",
        "Safety-focused onboarding",
        "CE tracking and management"
      ],
      caseStudy: "Reduced administrative burden by 50% for a 500-bed hospital while ensuring 100% compliance.",
      color: "#00F5F1"
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Industrial HR solutions for manufacturing companies and production facilities.",
      challenges: [
        "Safety compliance management",
        "Skills-based workforce planning",
        "Shift work coordination",
        "Equipment certification tracking"
      ],
      solutions: [
        "Safety-first HR policies",
        "Competency-based hiring",
        "24/7 support systems",
        "Training management platforms"
      ],
      caseStudy: "Improved safety scores by 60% and reduced turnover by 25% for a automotive manufacturer.",
      color: "#5923FA"
    },
    {
      icon: Zap,
      name: "Energy",
      description: "Specialized HR services for oil & gas, renewable energy, and utilities companies.",
      challenges: [
        "Remote location management",
        "Safety-critical roles",
        "Project-based workforce",
        "Environmental compliance"
      ],
      solutions: [
        "Remote HR service delivery",
        "Enhanced safety protocols",
        "Project workforce management",
        "Environmental compliance training"
      ],
      caseStudy: "Managed workforce transitions for renewable energy projects across 3 continents.",
      color: "#5190F5"
    },
    {
      icon: Users,
      name: "Non-Profit Organizations",
      description: "Cost-effective HR solutions tailored for NGOs and non-profit organizations.",
      challenges: [
        "Limited budget constraints",
        "Volunteer management",
        "Grant compliance requirements",
        "Mission-driven culture alignment"
      ],
      solutions: [
        "Cost-optimized HR services",
        "Volunteer coordination systems",
        "Grant compliance tracking",
        "Values-based recruitment"
      ],
      caseStudy: "Enabled a global NGO to reduce HR costs by 45% while expanding operations to 8 new countries.",
      color: "#00ABF5"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1736666835308-27fa97a0d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyeSUyMG1hbnVmYWN0dXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTk0ODgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Industry manufacturing technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ABF5]/80 to-[#005EF5]/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            HRQ delivers industry-specific solutions that work in local and global contexts. 
            Our deep sector expertise ensures compliance, efficiency, and strategic alignment with your business objectives.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: industry.color }}
                    >
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{industry.name}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Challenges */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Challenges</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industry.challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Our Solutions</h4>
                    <div className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-[#00ABF5] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Success Story</h4>
                    <p className="text-sm text-gray-600 italic">"{industry.caseStudy}"</p>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200">
                    <Button 
                      variant="outline" 
                      className="w-full border-[#00ABF5] text-[#00ABF5] hover:bg-[#00ABF5] hover:text-white"
                      onClick={() => navigate('contact')}
                    >
                      Discuss Your {industry.name} Needs
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-[#00ABF5]/5 to-[#005EF5]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Industry Impact</h2>
            <p className="text-xl text-gray-600">Measurable results across diverse sectors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00ABF5] mb-2">7+</div>
              <div className="text-lg text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#005EF5] mb-2">500+</div>
              <div className="text-lg text-gray-600">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00F5F1] mb-2">50K+</div>
              <div className="text-lg text-gray-600">Employees Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00ABF5] to-[#005EF5]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our expertise extends beyond these core industries. Let's discuss how we can tailor our services to your specific sector requirements.
          </p>
          <Button 
            size="lg"
            className="bg-white text-[#00ABF5] hover:bg-gray-100 px-8 py-4 text-lg"
            onClick={() => navigate('contact')}
          >
            Explore Custom Solutions
          </Button>
        </div>
      </section>
    </div>
  );
}