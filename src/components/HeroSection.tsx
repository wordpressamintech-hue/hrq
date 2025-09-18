import { Button } from "./ui/button";
import { useRouter } from "./Router";
import { motion } from "motion/react";
import heroBackgroundImage from 'figma:asset/a575bdbdf9e42e053a48742df2c112e358a97906.png';

export function HeroSection() {
  const { navigate } = useRouter();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-6 text-center h-full flex flex-col justify-center">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Human Resource Quantum
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 sm:mb-8 drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your Strategic HR Partner
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed drop-shadow-lg px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          End-to-End HR Outsourcing, Recruitment, and Transformation – Powered by Technology, Backed by 20+ Years of Experience.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hero-button w-full sm:w-auto"
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
            className="text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hero-button w-full sm:w-auto"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">20+</div>
            <div className="text-gray-200 text-base sm:text-lg">Years of Excellence</div>
          </div>
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">4</div>
            <div className="text-gray-200 text-base sm:text-lg">Global Regions</div>
          </div>
          <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">7+</div>
            <div className="text-gray-200 text-base sm:text-lg">Industry Sectors</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}