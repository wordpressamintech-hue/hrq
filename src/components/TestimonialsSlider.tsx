import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSlider() {
  const testimonials = [
    {
      quote: "HRQ helped us achieve ISO compliance in record time while improving our employee engagement scores by 30%. Their expertise in both compliance and employee experience is unmatched.",
      author: "Sarah Chen",
      position: "Chief Human Resources Officer",
      company: "TechFlow Solutions"
    },
    {
      quote: "The transformation of our HR processes was seamless. HRQ's technology-driven approach reduced our administrative overhead by 40% while improving service quality.",
      author: "Michael Rodriguez",
      position: "VP Operations",
      company: "Global Manufacturing Corp"
    },
    {
      quote: "Working with HRQ has been transformational for our organization. Their strategic approach to talent management helped us scale from 50 to 500 employees efficiently.",
      author: "Dr. Amira Hassan",
      position: "CEO",
      company: "HealthTech Innovations"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by industry leaders across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-[#00ABF5] mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-[#00ABF5] font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}