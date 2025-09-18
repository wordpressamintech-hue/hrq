import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { TrendingUp, Users, Clock, Target } from "lucide-react";
import { useRouter } from "../components/Router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudiesPage() {
  const { navigate } = useRouter();
  
  const caseStudies = [
    {
      id: 1,
      title: "SaaS Startup Scales 12x with Strategic HR Partnership",
      industry: "Technology",
      service: "HR Transformation",
      client: "TechFlow Solutions",
      challenge: "A rapidly growing SaaS startup needed to scale from 25 to 300 employees in 18 months while maintaining company culture and compliance across multiple countries.",
      solution: "Implemented a comprehensive HR transformation including automated onboarding, performance management systems, and multi-country compliance frameworks.",
      results: [
        { metric: "Employee Growth", value: "1100%", icon: Users },
        { metric: "Retention Rate", value: "92%", icon: Target },
        { metric: "Time to Productivity", value: "-55%", icon: Clock },
        { metric: "HR Cost per Employee", value: "-35%", icon: TrendingUp }
      ],
      testimonial: "HRQ transformed our HR operations from a bottleneck into a competitive advantage. Their technology-driven approach allowed us to scale rapidly while maintaining our startup culture.",
      clientRole: "Sarah Chen, Chief People Officer"
    },
    {
      id: 2,
      title: "Global FMCG Company Achieves Compliance Standards Across 12 Countries",
      industry: "FMCG",
      service: "HR Compliance",
      client: "GlobalConsumer Corp",
      challenge: "A multinational FMCG company needed to standardize HR processes and achieve compliance across diverse markets with varying regulatory requirements.",
      solution: "Developed standardized HR policies adapted for local regulations, implemented compliance monitoring systems, and conducted comprehensive audit preparation.",
      results: [
        { metric: "Countries Certified", value: "12", icon: Target },
        { metric: "Compliance Score", value: "98%", icon: Users },
        { metric: "Audit Preparation Time", value: "-70%", icon: Clock },
        { metric: "Risk Incidents", value: "-85%", icon: TrendingUp }
      ],
      testimonial: "The expertise HRQ brought to our compliance project was exceptional. They navigated complex multi-country requirements seamlessly.",
      clientRole: "Michael Rodriguez, VP Global Operations"
    },
    {
      id: 3,
      title: "Healthcare Network Reduces Administrative Burden by 50%",
      industry: "Healthcare",
      service: "HR Outsourcing",
      client: "Regional Medical Center",
      challenge: "A 500-bed hospital network struggled with complex shift scheduling, credential verification, and compliance management across multiple facilities.",
      solution: "Implemented integrated HR systems for credential tracking, automated scheduling solutions, and centralized compliance management.",
      results: [
        { metric: "Admin Time Saved", value: "48%", icon: Clock },
        { metric: "Compliance Rate", value: "99%", icon: Target },
        { metric: "Scheduling Efficiency", value: "+62%", icon: TrendingUp },
        { metric: "Staff Satisfaction", value: "+38%", icon: Users }
      ],
      testimonial: "HRQ's healthcare expertise was evident from day one. They understood our unique challenges and delivered solutions that work in our demanding environment.",
      clientRole: "Dr. Amira Hassan, Chief Medical Officer"
    },
    {
      id: 4,
      title: "Manufacturing Company Improves Safety Scores by 60%",
      industry: "Manufacturing",
      service: "Learning & Development",
      client: "AutoParts Manufacturing",
      challenge: "An automotive parts manufacturer needed to improve safety compliance and reduce workplace incidents while maintaining production efficiency.",
      solution: "Developed comprehensive safety training programs, implemented competency tracking systems, and created safety-focused performance metrics.",
      results: [
        { metric: "Safety Score Improvement", value: "58%", icon: Target },
        { metric: "Incident Reduction", value: "-42%", icon: TrendingUp },
        { metric: "Training Completion", value: "96%", icon: Users },
        { metric: "Productivity Maintained", value: "100%", icon: Clock }
      ],
      testimonial: "The safety transformation HRQ delivered exceeded our expectations. Our workers are safer and more engaged than ever before.",
      clientRole: "David Martinez, Plant Manager"
    },
    {
      id: 5,
      title: "Fintech Startup Achieves Regulatory Readiness in 6 Months",
      industry: "Finance",
      service: "HR Compliance",
      client: "PaymentTech Solutions",
      challenge: "A fintech startup needed to establish compliant HR processes quickly to meet regulatory requirements for their banking license application.",
      solution: "Fast-tracked implementation of banking-grade HR policies, background check systems, and regulatory reporting capabilities.",
      results: [
        { metric: "Implementation Time", value: "6 months", icon: Clock },
        { metric: "Regulatory Approval", value: "First Try", icon: Target },
        { metric: "Policy Coverage", value: "98%", icon: Users },
        { metric: "Time to Market", value: "-38%", icon: TrendingUp }
      ],
      testimonial: "HRQ's deep understanding of financial services regulations was crucial to our success. They delivered compliant systems in record time.",
      clientRole: "Jennifer Liu, Chief Compliance Officer"
    },
    {
      id: 6,
      title: "NGO Reduces HR Costs by 45% While Expanding Globally",
      industry: "NGO",
      service: "HR Outsourcing",
      client: "Global Aid Foundation",
      challenge: "An international NGO needed to reduce operational costs while expanding to 8 new countries with limited budget and complex local requirements.",
      solution: "Developed cost-effective HR service delivery model with shared services approach and local partnership network.",
      results: [
        { metric: "Cost Reduction", value: "42%", icon: TrendingUp },
        { metric: "New Countries", value: "8", icon: Target },
        { metric: "Service Quality", value: "+28%", icon: Users },
        { metric: "Expansion Timeline", value: "-48%", icon: Clock }
      ],
      testimonial: "HRQ enabled us to expand our humanitarian mission while being fiscally responsible. Their cost-effective solutions are perfect for our sector.",
      clientRole: "Maria Santos, Executive Director"
    }
  ];

  const industries = ["All", "Technology", "FMCG", "Healthcare", "Manufacturing", "Finance", "NGO"];
  const services = ["All", "HR Transformation", "HR Compliance", "HR Outsourcing", "Learning & Development"];

  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedService, setSelectedService] = useState("All");

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === "All" || study.industry === selectedIndustry;
    const serviceMatch = selectedService === "All" || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606235729070-5da8437f6e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNlJTIwc3R1ZHklMjBidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU1OTUwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Case study business success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ABF5]/80 to-[#005EF5]/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. Discover how HRQ has transformed HR operations across industries and helped organizations achieve their strategic objectives.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="industry" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="industry">Filter by Industry</TabsTrigger>
              <TabsTrigger value="service">Filter by Service</TabsTrigger>
            </TabsList>
            
            <TabsContent value="industry">
              <div className="flex flex-wrap justify-center gap-2">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry)}
                    style={selectedIndustry === industry ? { backgroundColor: '#00ABF5' } : {}}
                    className={selectedIndustry === industry ? "text-white" : ""}
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="service">
              <div className="flex flex-wrap justify-center gap-2">
                {services.map((service) => (
                  <Button
                    key={service}
                    variant={selectedService === service ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedService(service)}
                    style={selectedService === service ? { backgroundColor: '#00ABF5' } : {}}
                    className={selectedService === service ? "text-white" : ""}
                  >
                    {service}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="bg-[#00ABF5]/10 text-[#00ABF5]">
                        {study.industry}
                      </Badge>
                      <Badge variant="outline">
                        {study.service}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 leading-tight">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                          <result.icon className="w-6 h-6 text-[#00ABF5] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                          <div className="text-xs text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-[#00ABF5]/5 p-4 rounded-lg border-l-4 border-[#00ABF5]">
                    <p className="text-gray-700 italic text-sm mb-2">"{study.testimonial}"</p>
                    <p className="text-[#00ABF5] font-medium text-sm">- {study.clientRole}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00ABF5] to-[#005EF5]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how HRQ can transform your HR operations and deliver measurable results for your organization.
          </p>
          <Button 
            size="lg"
            className="bg-white text-[#00ABF5] hover:bg-gray-100 px-8 py-4 text-lg"
            onClick={() => navigate('contact')}
          >
            Start Your Transformation
          </Button>
        </div>
      </section>
    </div>
  );
}