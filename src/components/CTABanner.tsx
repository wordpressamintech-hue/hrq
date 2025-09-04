import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "./Router";

export function CTABanner() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 bg-gradient-to-r from-[#00ABF5] to-[#005EF5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your HR Function?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of companies that have revolutionized their HR operations with HRQ. 
          Let's discuss how we can accelerate your business growth through strategic HR transformation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-white text-[#00ABF5] hover:bg-gray-100 px-8 py-4 text-lg group transition-all"
            onClick={() => navigate('contact')}
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="mt-8 text-blue-100">
          <p className="text-sm">
            🔒 Your information is secure and will never be shared with third parties
          </p>
        </div>
      </div>
    </section>
  );
}