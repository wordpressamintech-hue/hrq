import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Settings,
  Users,
  UserCheck,
  FileCheck,
  TrendingUp,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "../components/Router";
import servicesHeroImage from 'figma:asset/8e1016d8ceaceab993233052beaf6adb0e763eb3.png';

export function ServicesPage() {
  const { navigate } = useRouter();

  const services = [
    {
      icon: Settings,
      title: "HR Function Setup & Outsourcing",
      description:
        "Complete HR infrastructure development and ongoing management for growing businesses.",
      features: [
        "HR policy development and implementation",
        "HRIS setup and management",
        "Payroll processing and compliance",
        "Employee records management",
        "Performance management systems",
      ],
      process: [
        "Initial HR audit and assessment",
        "Custom solution design",
        "System implementation",
        "Training and knowledge transfer",
        "Ongoing support and optimization",
      ],
      benefits: [
        "Reduced operational costs by up to 40%",
        "Improved compliance and risk management",
        "Scalable solutions that grow with your business",
      ],
    },
    {
      icon: Users,
      title: "Recruitment & Talent Acquisition",
      description:
        "Strategic hiring solutions that connect you with top talent across all industries, including specialized services for modern workforce needs.",
      features: [
        "Executive search and selection",
        "Volume recruitment campaigns",
        "Technical and specialist hiring",
        "Staff Augmentation services",
        "Remote Team Setup and management",
        "Employer branding strategies",
        "Candidate experience optimization",
        "Global talent sourcing",
      ],
      process: [
        "Role analysis and candidate profiling",
        "Multi-channel sourcing strategy",
        "Comprehensive screening process",
        "Interview coordination and support",
        "Team integration and onboarding facilitation",
      ],
      benefits: [
        "Average time-to-hire reduced by 50%",
        "Higher quality candidates and retention",
        "Enhanced employer brand reputation",
        "Flexible scaling of team resources",
        "Cost-effective remote team solutions",
      ],
    },
    {
      icon: UserCheck,
      title: "Onboarding & Employee Lifecycle",
      description:
        "Seamless employee journey management from hire to retire.",
      features: [
        "Digital onboarding platforms",
        "Employee handbook creation",
        "Compliance documentation",
        "Career development planning",
        "Exit interview management",
      ],
      process: [
        "Pre-boarding preparation",
        "Structured orientation program",
        "Role-specific training delivery",
        "Progress monitoring and feedback",
        "Continuous improvement cycles",
      ],
      benefits: [
        "90% improvement in new hire satisfaction",
        "Faster time to productivity",
        "Reduced early turnover by 35%",
      ],
    },
    {
      icon: FileCheck,
      title: "HR Compliance & Audit Readiness",
      description:
        "Ensure regulatory compliance and prepare for audits with confidence.",
      features: [
        "ISO 30414 and ISO 9001 compliance",
        "Labor law compliance monitoring",
        "Data privacy and security",
        "Audit preparation and support",
        "Risk assessment and mitigation",
      ],
      process: [
        "Compliance gap analysis",
        "Policy and procedure development",
        "Documentation standardization",
        "Training and awareness programs",
        "Regular compliance monitoring",
      ],
      benefits: [
        "100% audit success rate",
        "Reduced legal and compliance risks",
        "International standard certification",
      ],
    },
    {
      icon: TrendingUp,
      title: "HR Transformation & Strategy",
      description:
        "Digital transformation and strategic HR planning for future growth.",
      features: [
        "HR strategy development",
        "Digital transformation roadmap",
        "Technology implementation",
        "Change management support",
        "ROI measurement and optimization",
      ],
      process: [
        "Current state assessment",
        "Future state vision design",
        "Technology selection and implementation",
        "Change management execution",
        "Performance monitoring and adjustment",
      ],
      benefits: [
        "Strategic HR alignment with business goals",
        "Enhanced employee experience",
        "Measurable productivity improvements",
      ],
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Comprehensive training programs to enhance employee skills and performance.",
      features: [
        "Leadership development programs",
        "Technical skills training",
        "Compliance training delivery",
        "E-learning platform management",
        "Training effectiveness measurement",
      ],
      process: [
        "Training needs analysis",
        "Curriculum design and development",
        "Multi-modal delivery approach",
        "Progress tracking and assessment",
        "Impact evaluation and reporting",
      ],
      benefits: [
        "Enhanced employee capabilities",
        "Improved performance metrics",
        "Higher employee engagement scores",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwc3RyYXRlZ3klMjBoYW5kc2hha2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2MDM3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="HR Strategic Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ABF5]/80 to-[#005EF5]/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Our service portfolio covers the full HR value chain, from foundational setup to strategic transformation. 
            Each solution is tailored to your specific needs and industry requirements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg overflow-hidden bg-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Overview */}
                  <CardHeader className="lg:col-span-1 bg-gray-100 p-8">
                    <div className="w-16 h-16 mb-4 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </CardDescription>
                    <Button
                      style={{ backgroundColor: "#00ABF5" }}
                      className="text-white hover:opacity-90"
                      onClick={() => navigate("contact")}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardHeader>

                  {/* Service Details */}
                  <CardContent className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map(
                            (feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-5 h-5 text-[#00ABF5] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                  {feature}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {/* Process */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Our Process
                        </h4>
                        <ol className="space-y-2">
                          {service.process.map((step, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <Badge
                                variant="outline"
                                className="min-w-[24px] h-6 rounded-full flex items-center justify-center text-xs"
                              >
                                {idx + 1}
                              </Badge>
                              <span className="text-gray-700">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Client Benefits
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {service.benefits.map(
                          (benefit, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-[#00ABF5]/10 text-[#00ABF5] border-[#00ABF5]/20"
                            >
                              {benefit}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00ABF5] to-[#005EF5]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss which services are right for your
            organization and create a customized solution.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#00ABF5] hover:bg-gray-100 px-8 py-4 text-lg"
            onClick={() => navigate("contact")}
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}