import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    services: [] as string[],
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const serviceOptions = [
    { id: 'recruitment', label: 'Talent Acquisition & Recruitment' },
    { id: 'payroll', label: 'Payroll Management' },
    { id: 'benefits', label: 'Benefits Administration' },
    { id: 'compliance', label: 'HR Compliance & Legal' },
    { id: 'performance', label: 'Performance Management' },
    { id: 'training', label: 'Training & Development' },
    { id: 'onboarding', label: 'Employee Onboarding' },
    { id: 'offboarding', label: 'Employee Offboarding' },
    { id: 'hr-audit', label: 'HR Audit & Assessment' },
    { id: 'policy', label: 'HR Policy Development' },
    { id: 'employee-relations', label: 'Employee Relations' },
    { id: 'compensation', label: 'Compensation & Rewards' },
    { id: 'hr-analytics', label: 'HR Analytics & Reporting' },
    { id: 'headcount-budgeting', label: 'Headcount Budgeting & Org. Chart' },
    { id: '3ps-contract', label: '3Ps Contract' },
    { id: 'full-outsourcing', label: 'Complete HR Outsourcing' },
    { id: 'consultation', label: 'HR Consultation' },
    { id: 'other', label: 'Other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, serviceId]
        : prev.services.filter(id => id !== serviceId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const { name, email, company, phone, industry, services, message } = formData;

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Missing EmailJS configuration in .env");
      }

      // Send email via EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          name,
          email,
          company,
          phone,
          industry,
          services: services.join(", "), // multiple services as string
          message,
        },
        publicKey
      );

      console.log("Email successfully sent!", result.text);
      setSuccess(true);

      // reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        services: [],
        message: ''
      });

    } catch (error: any) {
      console.error("EmailJS error:", error);
      setError("Unable to submit form at this time. Please try again later or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact HRQ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your HR operations? Get in touch with our experts for a personalized consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6"
                  >
                    Thank you for your message! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6"
                  >
                    <div className="font-medium mb-1">Form Submission Error</div>
                    <div>{error}</div>
                    {error.includes('Unable to submit') && (
                      <div className="mt-2 text-sm text-red-600">
                        <div>You can reach us directly at:</div>
                        <div>• Email: info@hr-q.com</div>
                        <div>• Phone: +92 331 133 4595</div>
                      </div>
                    )}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required disabled={loading} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required disabled={loading} placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} disabled={loading} placeholder="Your Company" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} disabled={loading} placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <Select onValueChange={(value) => handleSelectChange('industry', value)} disabled={loading}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology & Software</SelectItem>
                        <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                        <SelectItem value="finance">Finance & Banking</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail & E-commerce</SelectItem>
                        <SelectItem value="construction">Construction & Real Estate</SelectItem>
                        <SelectItem value="education">Education & Training</SelectItem>
                        <SelectItem value="hospitality">Hospitality & Tourism</SelectItem>
                        <SelectItem value="energy">Energy & Utilities</SelectItem>
                        <SelectItem value="telecommunications">Telecommunications</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="consulting">Consulting Services</SelectItem>
                        <SelectItem value="non-profit">Non-Profit</SelectItem>
                        <SelectItem value="government">Government & Public Sector</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Services of Interest (Select all that apply)</label>
                    <Select
                      onValueChange={(value) => {
                        if (value && !formData.services.includes(value)) {
                          setFormData(prev => ({ ...prev, services: [...prev.services, value] }));
                        }
                      }}
                      disabled={loading}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select services of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {formData.services.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-700 mb-2">Selected Services:</p>
                        <div className="flex flex-wrap gap-2">
                          {formData.services.map((serviceId) => {
                            const service = serviceOptions.find(s => s.id === serviceId);
                            return (
                              <div
                                key={serviceId}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                              >
                                {service?.label}
                                <button
                                  type="button"
                                  onClick={() => handleServiceChange(serviceId, false)}
                                  disabled={loading}
                                  className="ml-1 text-blue-600 hover:text-blue-800"
                                >
                                  ×
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      rows={5}
                      placeholder="Tell us more about your specific HR challenges, goals, or requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Our team of HR experts is ready to help you streamline your human resources operations and drive business growth.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Head Office',
                  content: 'Karachi, Pakistan\nServing clients globally from our Pakistan headquarters'
                },
                {
                  icon: Phone,
                  title: 'Phone Numbers',
                  content: '+92 331 133 4595\n+92 323 242 1030\nAvailable during business hours'
                },
                {
                  icon: Mail,
                  title: 'Email & Website',
                  content: 'info@hr-q.com\nwww.hr-q.com'
                },
                {
                  icon: Clock,
                  title: 'Response Time',
                  content: 'Within 24 hours\nPriority support for enterprise clients'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
