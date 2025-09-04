import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description: "We deliver superior quality in every aspect of our service, ensuring our clients receive world-class HR solutions."
    },
    {
      icon: Users,
      title: "Partnership", 
      description: "We build long-term relationships with our clients, working as trusted partners in their growth journey."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We leverage cutting-edge technology and best practices to create efficient, future-ready HR solutions."
    },
    {
      icon: Globe,
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparency in all our business relationships."
    }
  ];

  const leadership = [
    {
      name: "Navid Ahmed",
      position: "Founder & CEO",
      bio: "25+ years experience in MNCs heading HR functions, systems & HR transformation",
      initials: "NA"
    },
    {
      name: "Shahid Amin", 
      position: "Co-Founder & Chief Operations Officer",
      bio: "20+ years experience in Recruitment, Executive Search and HR consulting across the Globe",
      initials: "SA"
    }
  ];

  const consultants = [
    {
      name: "Sarah Williams",
      position: "Senior HR Consultant",
      bio: "15+ years in HR transformation and organizational development across EMEA region",
      initials: "SW"
    },
    {
      name: "Dr. Michael Chen",
      position: "Compliance & Audit Consultant",
      bio: "PhD in Organizational Psychology, specializing in ISO standards and compliance frameworks",
      initials: "MC"
    },
    {
      name: "Amara Okafor",
      position: "Talent Acquisition Consultant",
      bio: "12+ years in executive search and talent acquisition for multinational corporations",
      initials: "AO"
    },
    {
      name: "David Rodriguez",
      position: "Learning & Development Consultant",
      bio: "10+ years designing corporate training programs and leadership development initiatives",
      initials: "DR"
    },
    {
      name: "Jennifer Liu",
      position: "HR Technology Consultant",
      bio: "8+ years in HRIS implementation and HR technology optimization across Asia-Pacific",
      initials: "JL"
    },
    {
      name: "Robert Thompson",
      position: "Strategic HR Consultant",
      bio: "18+ years in HR strategy development and workforce planning for Fortune 500 companies",
      initials: "RT"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676276375450-3707e4e624c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2UlMjBjdWx0dXJlfGVufDF8fHx8MTc1NTc4NzkwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="HRQ team culture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ABF5]/70 to-[#005EF5]/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About HRQ</h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
            Transforming Human Resources into Strategic Business Advantage
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded in 2025, Human Resource Quantum (HRQ) emerged from a simple yet powerful vision: 
              to transform HR from an administrative burden into a strategic catalyst for business growth. 
              What started as a boutique HR consulting firm has evolved into a global leader in HR outsourcing, 
              recruitment, and transformation services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we serve clients across four continents, combining deep industry expertise with 
              cutting-edge technology to deliver measurable results. Our ISO-certified processes and 
              technology-enabled solutions help organizations build agile, compliant, and future-ready HR functions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  To be the world's most trusted partner in HR transformation, 
                  empowering organizations to unlock their human potential and 
                  achieve sustainable growth through innovative, technology-driven HR solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00F5F1] to-[#5923FA] rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  To deliver exceptional HR services that combine global best practices 
                  with local compliance expertise, enabling our clients to focus on their 
                  core business while we build and manage world-class HR functions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-700">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center bg-white">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving our vision forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{leader.initials}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{leader.name}</CardTitle>
                  <p className="text-[#00ABF5] font-medium">{leader.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultant Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consultant Team</h2>
            <p className="text-xl text-gray-600">
              Our expert consultants bringing specialized knowledge and industry expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultants.map((consultant, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-[#00F5F1] to-[#5923FA] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{consultant.initials}</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900">{consultant.name}</CardTitle>
                  <p className="text-[#5923FA] font-medium text-sm">{consultant.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {consultant.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}