import { Button } from "./ui/button";
import { useRouter } from "./Router";
import { motion } from "motion/react";
import heroBackgroundImage from 'figma:asset/a575bdbdf9e42e053a48742df2c112e358a97906.png';

export function HeroSection() {
  const { navigate } = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackgroundImage}
          alt="HR Outsourcing - Global Business Solutions"
          className="w-full h-full object-cover object-center"
        />
        {/* Enhanced Dark Overlay for Sharp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#15014c]/80 to-[#005EF5]/70"></div>
      </div>
      
      {/* God Rays Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="god-rays"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Human Resource Quantum
        </motion.h1>
        
        <motion.h2 
          className="text-4xl md:text-6xl font-semibold text-white mb-8 drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your Strategic HR Partner
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          End-to-End HR Outsourcing, Recruitment, and Transformation – Powered by Technology, Backed by 20+ Years of Experience.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="text-white px-10 py-5 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hero-button"
            style={{
              background: 'linear-gradient(135deg, #15014c 0%, #00ABF5 100%)',
              border: '2px solid rgba(255,255,255,0.2)'
            }}
            onClick={() => navigate('contact')}
          >
            Get Started Today
          </Button>
          <Button 
            size="lg" 
            className="text-white px-10 py-5 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hero-button"
            style={{
              background: 'linear-gradient(135deg, #15014c 0%, #00ABF5 100%)',
              border: '2px solid rgba(255,255,255,0.2)'
            }}
            onClick={() => navigate('services')}
          >
            Explore Services
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">20+</div>
            <div className="text-gray-200 text-lg">Years of Excellence</div>
          </div>
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">4</div>
            <div className="text-gray-200 text-lg">Global Regions</div>
          </div>
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">7+</div>
            <div className="text-gray-200 text-lg">Industry Sectors</div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .god-rays {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            ellipse at 20% 20%,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.05) 25%,
            transparent 50%
          ),
          radial-gradient(
            ellipse at 80% 30%,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.03) 30%,
            transparent 60%
          ),
          radial-gradient(
            ellipse at 40% 70%,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 35%,
            transparent 70%
          );
          animation: godRays 8s ease-in-out infinite alternate;
        }

        .hero-button:hover {
          background: linear-gradient(135deg, #00ABF5 0%, #00F5F1 100%) !important;
          box-shadow: 0 20px 40px rgba(0, 171, 245, 0.3);
        }

        @keyframes godRays {
          0% {
            opacity: 0.3;
            transform: rotate(0deg) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: rotate(1deg) scale(1.02);
          }
          100% {
            opacity: 0.4;
            transform: rotate(-1deg) scale(0.98);
          }
        }
      `}</style>
    </section>
  );
}