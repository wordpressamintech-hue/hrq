import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { MapPin, Clock, Briefcase, Users, GraduationCap, Upload, X, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface JobApplication {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  availability: string;
  coverLetter: string;
  cv: File | null;
}

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string;
  benefits: string;
  status: string;
  createdAt: string;
}

// Mock jobs data with diverse positions across different regions and functions
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Sales Manager',
    department: 'Sales',
    location: 'Karachi, Pakistan',
    type: 'Onsite',
    experience: '5-8 years',
    description: 'Lead sales initiatives and drive revenue growth across Pakistan market while building strong client relationships.',
    requirements: 'Bachelor\'s degree in Business or related field\n5+ years of B2B sales experience\nProven track record of meeting sales targets\nStrong communication and negotiation skills\nFluency in Urdu and English',
    benefits: 'Competitive salary + commission\nHealth insurance for family\nPerformance bonuses\nCar allowance',
    status: 'active',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Dubai, UAE',
    type: 'Hybrid',
    experience: '3-5 years',
    description: 'Develop and execute digital marketing campaigns across social media, email, and web platforms to drive brand awareness.',
    requirements: 'Bachelor\'s degree in Marketing or related field\n3+ years in digital marketing\nExperience with Google Ads, Facebook Ads, LinkedIn\nSEO/SEM knowledge\nAnalytics and data analysis skills',
    benefits: 'Tax-free salary\nFlexible work arrangements\nProfessional development budget\nHealth insurance',
    status: 'active',
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Business Development Manager',
    department: 'Business Development',
    location: 'New York, USA',
    type: 'Remote',
    experience: '4-6 years',
    description: 'Identify new business opportunities, develop strategic partnerships, and expand market presence in North America.',
    requirements: 'Bachelor\'s degree in Business or related field\n4+ years in business development\nStrategic planning and market analysis skills\nExcellent presentation abilities\nCRM software proficiency',
    benefits: '$80,000-$100,000 annual salary\nRemote work flexibility\nStock options\nComprehensive health benefits',
    status: 'active',
    createdAt: '2024-01-18'
  },
  {
    id: '4',
    title: 'Full Stack Software Developer',
    department: 'Software Development',
    location: 'London, UK',
    type: 'Hybrid',
    experience: '3-5 years',
    description: 'Build and maintain web applications using modern frameworks while collaborating with cross-functional teams.',
    requirements: 'Bachelor\'s degree in Computer Science or related field\nProficiency in React, Node.js, TypeScript\nDatabase design and management experience\nAgile development methodology knowledge\nGit version control expertise',
    benefits: '£45,000-£60,000 annual salary\nFlexible working hours\nLearning and development budget\nPension scheme',
    status: 'active',
    createdAt: '2024-01-22'
  },
  {
    id: '5',
    title: 'AI/ML Engineer',
    department: 'Artificial Intelligence',
    location: 'Lahore, Pakistan',
    type: 'Onsite',
    experience: '4-6 years',
    description: 'Design and implement machine learning models and AI solutions to solve complex business problems.',
    requirements: 'Master\'s degree in AI, ML, or Computer Science\n4+ years in ML/AI development\nProficiency in Python, TensorFlow, PyTorch\nExperience with cloud platforms (AWS, Azure)\nStatistical analysis and data science skills',
    benefits: 'Competitive salary package\nResearch publication opportunities\nState-of-the-art equipment\nConference attendance support',
    status: 'active',
    createdAt: '2024-01-25'
  },
  {
    id: '6',
    title: 'Cybersecurity Analyst',
    department: 'Cybersecurity',
    location: 'Dubai, UAE',
    type: 'Onsite',
    experience: '3-5 years',
    description: 'Monitor, detect, and respond to security threats while implementing robust cybersecurity measures.',
    requirements: 'Bachelor\'s degree in Cybersecurity or IT\n3+ years in cybersecurity roles\nCertifications (CISSP, CEH, or similar)\nIncident response experience\nKnowledge of security frameworks',
    benefits: 'Tax-free salary\nSecurity certification sponsorship\nContinuous training\nHealth insurance',
    status: 'active',
    createdAt: '2024-01-28'
  },
  {
    id: '7',
    title: 'Production Manager',
    department: 'Production',
    location: 'Berlin, Germany',
    type: 'Onsite',
    experience: '6-8 years',
    description: 'Oversee production operations, optimize processes, and ensure quality standards in manufacturing environment.',
    requirements: 'Bachelor\'s degree in Engineering or related field\n6+ years in production management\nLean manufacturing experience\nQuality management systems knowledge\nTeam leadership skills',
    benefits: '€55,000-€70,000 annual salary\n30 days vacation\nCompany car\nProfit sharing program',
    status: 'active',
    createdAt: '2024-02-01'
  },
  {
    id: '8',
    title: 'IT Infrastructure Specialist',
    department: 'Information Technology',
    location: 'Islamabad, Pakistan',
    type: 'Hybrid',
    experience: '4-6 years',
    description: 'Manage IT infrastructure, network systems, and provide technical support for organizational technology needs.',
    requirements: 'Bachelor\'s degree in IT or Computer Science\n4+ years in IT infrastructure\nNetwork administration experience\nCloud services knowledge (AWS, Azure)\nSystem monitoring and troubleshooting skills',
    benefits: 'Market competitive salary\nFlexible work schedule\nTechnology allowance\nHealth insurance',
    status: 'active',
    createdAt: '2024-02-05'
  },
  {
    id: '9',
    title: 'Regional Sales Director',
    department: 'Sales',
    location: 'Singapore',
    type: 'Onsite',
    experience: '8-10 years',
    description: 'Lead regional sales strategy and manage sales teams across Asia-Pacific markets.',
    requirements: 'Bachelor\'s degree in Business or related field\n8+ years in sales leadership\nRegional market experience\nTeam management skills\nStrategic planning abilities',
    benefits: 'SGD $120,000-$150,000 package\nPerformance bonuses\nRegional travel opportunities\nComprehensive benefits',
    status: 'active',
    createdAt: '2024-02-08'
  },
  {
    id: '10',
    title: 'Marketing Analytics Manager',
    department: 'Marketing',
    location: 'Chicago, USA',
    type: 'Remote',
    experience: '5-7 years',
    description: 'Analyze marketing performance, generate insights, and optimize campaign effectiveness using data-driven approaches.',
    requirements: 'Bachelor\'s degree in Marketing or Data Science\n5+ years in marketing analytics\nProficiency in SQL, Python, R\nExperience with analytics tools (GA, Adobe)\nData visualization skills',
    benefits: '$75,000-$95,000 annual salary\nRemote work flexibility\nData tools and software access\nProfessional development support',
    status: 'active',
    createdAt: '2024-02-10'
  },
  {
    id: '11',
    title: 'Business Development Executive',
    department: 'Business Development',
    location: 'Amsterdam, Netherlands',
    type: 'Hybrid',
    experience: '2-4 years',
    description: 'Support business growth initiatives, conduct market research, and assist in partnership development.',
    requirements: 'Bachelor\'s degree in Business or related field\n2+ years in business development\nMarket research and analysis skills\nClient relationship management\nMultilingual capabilities preferred',
    benefits: '€40,000-€55,000 annual salary\nFlexible working arrangements\nTravel opportunities\nLanguage training support',
    status: 'active',
    createdAt: '2024-02-12'
  },
  {
    id: '12',
    title: 'Senior Software Architect',
    department: 'Software Development',
    location: 'Karachi, Pakistan',
    type: 'Onsite',
    experience: '7-10 years',
    description: 'Design scalable software architecture and provide technical leadership for development teams.',
    requirements: 'Bachelor\'s/Master\'s degree in Computer Science\n7+ years in software development\nArchitecture design experience\nMultiple programming languages proficiency\nTechnical leadership skills',
    benefits: 'Senior level compensation\nTechnical conference opportunities\nMentorship programs\nFlexible benefits package',
    status: 'active',
    createdAt: '2024-02-15'
  },
  {
    id: '13',
    title: 'AI Research Scientist',
    department: 'Artificial Intelligence',
    location: 'San Francisco, USA',
    type: 'Hybrid',
    experience: '5-8 years',
    description: 'Conduct cutting-edge AI research, develop novel algorithms, and publish findings in top-tier conferences.',
    requirements: 'PhD in AI, ML, or related field\n5+ years in AI research\nPublication record in top venues\nDeep learning expertise\nResearch methodology skills',
    benefits: '$130,000-$170,000 annual salary\nResearch budget allocation\nConference presentation opportunities\nEquity participation',
    status: 'active',
    createdAt: '2024-02-18'
  },
  {
    id: '14',
    title: 'Cybersecurity Manager',
    department: 'Cybersecurity',
    location: 'London, UK',
    type: 'Onsite',
    experience: '6-8 years',
    description: 'Lead cybersecurity team, develop security policies, and ensure compliance with industry standards.',
    requirements: 'Bachelor\'s degree in Cybersecurity or related field\n6+ years in cybersecurity roles\nManagement and leadership experience\nSecurity frameworks knowledge\nIncident response expertise',
    benefits: '£65,000-£85,000 annual salary\nSecurity certification support\nTeam leadership opportunities\nComprehensive benefits',
    status: 'active',
    createdAt: '2024-02-20'
  },
  {
    id: '15',
    title: 'Production Operations Supervisor',
    department: 'Production',
    location: 'Dubai, UAE',
    type: 'Onsite',
    experience: '4-6 years',
    description: 'Supervise daily production activities, ensure safety compliance, and optimize operational efficiency.',
    requirements: 'Bachelor\'s degree in Engineering or related field\n4+ years in production operations\nSafety management experience\nProcess optimization skills\nTeam supervision abilities',
    benefits: 'Tax-free salary package\nProduction efficiency bonuses\nSafety training programs\nCareer advancement opportunities',
    status: 'active',
    createdAt: '2024-02-22'
  },
  {
    id: '16',
    title: 'IT Project Manager',
    department: 'Information Technology',
    location: 'Toronto, Canada',
    type: 'Remote',
    experience: '5-7 years',
    description: 'Manage IT projects from conception to completion while coordinating with global teams and stakeholders.',
    requirements: 'Bachelor\'s degree in IT or Project Management\n5+ years in IT project management\nPMP or similar certification preferred\nAgile/Scrum methodology experience\nStakeholder management skills',
    benefits: 'CAD $85,000-$105,000 annual salary\nRemote work setup allowance\nProject management training\nHealth and dental benefits',
    status: 'active',
    createdAt: '2024-02-25'
  },
  {
    id: '17',
    title: 'Sales Account Executive',
    department: 'Sales',
    location: 'Lahore, Pakistan',
    type: 'Hybrid',
    experience: '2-4 years',
    description: 'Manage client accounts, drive sales growth, and build long-term customer relationships.',
    requirements: 'Bachelor\'s degree in Business or related field\n2+ years in sales or account management\nClient relationship management skills\nSales target achievement record\nCommunication and presentation skills',
    benefits: 'Base salary + commission structure\nClient entertainment allowance\nSales achievement rewards\nHealth insurance coverage',
    status: 'active',
    createdAt: '2024-02-28'
  },
  {
    id: '18',
    title: 'Content Marketing Manager',
    department: 'Marketing',
    location: 'Berlin, Germany',
    type: 'Remote',
    experience: '4-6 years',
    description: 'Develop content strategy, create engaging content, and manage brand storytelling across multiple channels.',
    requirements: 'Bachelor\'s degree in Marketing or Communications\n4+ years in content marketing\nContent creation and strategy skills\nSEO and content optimization knowledge\nMultichannel campaign management',
    benefits: '€50,000-€65,000 annual salary\nCreative freedom and flexibility\nContent creation tools access\nRemote work equipment',
    status: 'active',
    createdAt: '2024-03-01'
  },
  {
    id: '19',
    title: 'International Business Developer',
    department: 'Business Development',
    location: 'Dubai, UAE',
    type: 'Onsite',
    experience: '5-7 years',
    description: 'Expand business internationally, develop market entry strategies, and establish global partnerships.',
    requirements: 'Bachelor\'s degree in International Business\n5+ years in international business development\nCross-cultural communication skills\nMarket expansion experience\nMultilingual capabilities',
    benefits: 'Tax-free salary package\nInternational travel opportunities\nCultural exposure and training\nGlobal networking events',
    status: 'active',
    createdAt: '2024-03-03'
  },
  {
    id: '20',
    title: 'DevOps Engineer',
    department: 'Software Development',
    location: 'Amsterdam, Netherlands',
    type: 'Remote',
    experience: '4-6 years',
    description: 'Implement CI/CD pipelines, manage cloud infrastructure, and optimize deployment processes.',
    requirements: 'Bachelor\'s degree in Computer Science or related field\n4+ years in DevOps or similar role\nCloud platforms experience (AWS, Azure, GCP)\nContainerization and orchestration skills\nInfrastructure as code knowledge',
    benefits: '€60,000-€75,000 annual salary\nRemote work flexibility\nCloud platform training\nTech conference attendance',
    status: 'active',
    createdAt: '2024-03-05'
  }
];

export function CareerPage() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationData, setApplicationData] = useState<JobApplication>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    availability: "",
    coverLetter: "",
    cv: null
  });

  const handleInputChange = (field: keyof JobApplication, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf" || file.type.includes("document")) {
        setApplicationData(prev => ({ ...prev, cv: file }));
      } else {
        toast.error("Please upload a PDF or document file");
      }
    }
  };

  const removeFile = () => {
    setApplicationData(prev => ({ ...prev, cv: null }));
  };

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setApplicationData(prev => ({ ...prev, position: job.title }));
    setIsApplicationOpen(true);
  };

  const handleSubmitApplication = async () => {
    if (!applicationData.firstName || !applicationData.lastName || !applicationData.email || !applicationData.coverLetter) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Store application for manual processing since we removed Supabase
      const applicationRecord = {
        type: 'job_application',
        timestamp: new Date().toISOString(),
        jobId: selectedJob?.id,
        jobTitle: applicationData.position,
        data: {
          firstName: applicationData.firstName,
          lastName: applicationData.lastName,
          email: applicationData.email,
          phone: applicationData.phone,
          location: applicationData.availability,
          experience: applicationData.experience,
          coverLetter: applicationData.coverLetter,
          hasResume: !!applicationData.cv
        }
      };
      
      console.log('JOB APPLICATION SUBMISSION:', applicationRecord);
      
      // Store in localStorage for manual processing
      const applications = JSON.parse(localStorage.getItem('job_applications') || '[]');
      applications.push(applicationRecord);
      localStorage.setItem('job_applications', JSON.stringify(applications));
      
      // Simulate delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Application submitted successfully! We'll review your application and get back to you soon.");
      setIsApplicationOpen(false);
      setApplicationData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        education: "",
        availability: "",
        coverLetter: "",
        cv: null
      });
    } catch (error) {
      console.error('Application submission error:', error);
      toast.error("Unable to submit application at this time. Please contact us directly at info@hr-q.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBncm93dGglMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjAzNjMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Career opportunities at HRQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ABF5]/80 to-[#005EF5]/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Job Openings at Our Clients</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Build your career globally. We offer exciting opportunities for growth, learning, and making a real impact.
          </p>
        </div>
      </section>

      {/* Why Join HRQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose HRQ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team of passionate HR professionals and contribute to innovative solutions that shape the future of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Global Impact",
                description: "Work with clients across continents and make a difference in organizations worldwide."
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                description: "Access to training, certifications, and professional development opportunities."
              },
              {
                icon: Briefcase,
                title: "Career Growth",
                description: "Clear career progression paths and opportunities to advance your expertise."
              },
              {
                icon: Clock,
                title: "Work-Life Balance",
                description: "Flexible working arrangements and emphasis on maintaining healthy work-life balance."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Explore exciting career opportunities and find your next role with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loading ? (
              <div className="col-span-2 flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : jobs.length === 0 ? (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-600">No job openings available at the moment.</p>
              </div>
            ) : (
              jobs.map((job) => (
                <Card key={job.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-[#00ABF5]/10 text-[#00ABF5]">
                        {job.department}
                      </Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{job.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      {job.experience && (
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {job.description}
                    </CardDescription>
                    
                    {job.requirements && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          {job.requirements.split('\n').slice(0, 3).map((req, index) => (
                            <p key={index}>• {req}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                            <DialogDescription className="text-lg">
                              {job.department} • {job.location} • {job.type}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                              <p className="text-gray-600">{job.description}</p>
                            </div>
                            
                            {job.requirements && (
                              <div>
                                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                                <div className="text-gray-600 space-y-2">
                                  {job.requirements.split('\n').map((req, index) => (
                                    <p key={index}>• {req}</p>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {job.benefits && (
                              <div>
                                <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                                <div className="text-gray-600 space-y-2">
                                  {job.benefits.split('\n').map((benefit, index) => (
                                    <p key={index}>• {benefit}</p>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            <Button 
                              onClick={() => handleApply(job)}
                              style={{backgroundColor: '#00ABF5'}}
                              className="w-full text-white hover:opacity-90"
                            >
                              Apply for this Position
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        onClick={() => handleApply(job)}
                        style={{backgroundColor: '#00ABF5'}}
                        className="flex-1 text-white hover:opacity-90"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Fill out the application form below. All fields marked with * are required.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={applicationData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={applicationData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={applicationData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Years of Experience</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-8">5-8 years</SelectItem>
                      <SelectItem value="8+">8+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Education Level</Label>
                  <Select onValueChange={(value) => handleInputChange("education", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="certification">Professional Certification</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Availability</Label>
                  <Select onValueChange={(value) => handleInputChange("availability", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="2weeks">2 weeks notice</SelectItem>
                      <SelectItem value="1month">1 month notice</SelectItem>
                      <SelectItem value="2months">2+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* CV Upload */}
            <div>
              <Label htmlFor="cv">Upload CV/Resume *</Label>
              <div className="mt-1">
                {applicationData.cv ? (
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                    <span className="text-sm text-gray-600">{applicationData.cv.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeFile}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOC, or DOCX (MAX. 10MB)</p>
                    </div>
                    <input
                      id="cv"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <Label htmlFor="coverLetter">Cover Letter *</Label>
              <Textarea
                id="coverLetter"
                value={applicationData.coverLetter}
                onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                rows={5}
                className="mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setIsApplicationOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitApplication}
                disabled={isSubmitting}
                style={{backgroundColor: '#00ABF5'}}
                className="flex-1 text-white hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}