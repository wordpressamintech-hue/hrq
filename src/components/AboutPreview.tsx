import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRouter } from "./Router";

export function AboutPreview() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NTc4NzExOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional corporate meeting"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ABF5]/20 to-transparent rounded-lg"></div>
          </div>
          
          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Accelerating the Future of Talent
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Human Resource Quantum (HRQ) transforms HR from an administrative function into a strategic driver of business success. We combine global best practices with local compliance mastery to help startups, SMEs, and multinational enterprises build agile, future-ready HR functions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our technology-enabled approach ensures seamless integration with your business objectives while maintaining the highest standards of compliance and employee experience.
            </p>
            <Button 
              size="lg"
              style={{backgroundColor: '#00ABF5'}}
              className="text-white px-8 py-3 hover:opacity-90 transition-opacity"
              onClick={() => navigate('about')}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}