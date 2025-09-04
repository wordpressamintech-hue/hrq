import image_88bdf4dee3ad26575b76161a680421c08cbd9e08 from 'figma:asset/88bdf4dee3ad26575b76161a680421c08cbd9e08.png';
import image_60b9a9759e709f9db3b890c048c8786c9d4292ba from 'figma:asset/60b9a9759e709f9db3b890c048c8786c9d4292ba.png';
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import transworldLogo from 'figma:asset/e43c20682e54df2f2da1ca3f26a9c127dbb30455.png';
import bloowatchLogo from 'figma:asset/260804bc284df4c7ecd06d7ff2a9dd680a8c2da9.png';
import colgateLogo from 'figma:asset/18bd17fbf3881c9fbebfc4a338a8f554b8ee1284.png';
import shangrilaLogo from 'figma:asset/518bcbb47d03a2be538f93cc0cf39f02138838ad.png';
import makroLogo from 'figma:asset/2681462ec14a0e310a1b7ad227e4f41d6bbf936d.png';
import tpsLogo from 'figma:asset/ec1c6b1a9ee21098a28601cb7c8bdf308d8722d3.png';
import ulkerLogo from 'figma:asset/4e36be50bd0d9804456833e505fcaeb047dc18f7.png';
import networkIconLogo from 'figma:asset/813cda862bc6e3f5892de3da458b4367ba2dcf71.png';
import tradekeyLogo from 'figma:asset/6a2ea665fa2f2ba687a60ca78fa3c9b2a31214b1.png';

export function ClientLogoSlider() {
  // Client logos featuring actual partner companies
  const clients = [
    {
      name: "Transworld HOME",
      logo: transworldLogo
    },
    {
      name: "Bloowatch",
      logo: bloowatchLogo
    },
    {
      name: "Colgate",
      logo: colgateLogo
    },
    {
      name: "Shangrila",
      logo: shangrilaLogo
    },
    {
      name: "Makro",
      logo: makroLogo
    },
    {
      name: "TPS",
      logo: tpsLogo
    },
    {
      name: "Ülker",
      logo: ulkerLogo
    },
    {
      name: "Network Solutions",
      logo: networkIconLogo
    },
    {
      name: "TradeKey",
      logo: tradekeyLogo
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with industry leaders to deliver exceptional HR solutions and drive business transformation.
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative">
          <div className="flex space-x-8 animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-transparent rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <ImageWithFallback
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {clients.map((client, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-transparent rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <ImageWithFallback
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}