import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Settings, 
  Users, 
  UserCheck, 
  FileCheck, 
  TrendingUp, 
  GraduationCap,
  BarChart3,
  FileText
} from "lucide-react";
import { useRouter } from "./Router";

export function ServicesOverview() {
  const { navigate } = useRouter();

  const services = [
    {
      icon: Settings,
      title: "HR Function Startup & Outsourcing",
      description: "Complete HR infrastructure development and ongoing management for growing businesses."
    },
    {
      icon: Users,
      title: "Recruitment & Talent Acquisition",
      description: "Strategic hiring solutions that connect you with top talent across all industries."
    },
    {
      icon: UserCheck,
      title: "Onboarding & Employee Lifecycle",
      description: "Seamless employee journey management from hire to retire."
    },
    {
      icon: FileCheck,
      title: "HR Compliance & HR Audit Readiness",
      description: "Ensure regulatory compliance and prepare for audits with confidence."
    },
    {
      icon: BarChart3,
      title: "Headcount Budgeting & Org. Chart",
      description: "Strategic workforce planning and organizational structure development."
    },
    {
      icon: TrendingUp,
      title: "HR Transformation & Strategy",
      description: "Digital transformation and strategic HR planning for future growth."
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Comprehensive training programs to enhance employee skills and performance."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From building HR foundations to executing large-scale transformations, HRQ delivers tailored solutions that work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow border-0 shadow-md bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            style={{backgroundColor: '#00ABF5'}}
            className="text-white px-8 py-3 hover:opacity-90 transition-opacity"
            onClick={() => navigate('services')}
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
}