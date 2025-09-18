import { Button } from "./ui/button";
import { useRouter } from "./Router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import hrqLogo from 'figma:asset/e48705bed5d6c442b7c0cb01554f3fc6e0b94257.png';

export function Header() {
  const { currentPage, navigate } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'about' as const, label: 'About' },
    { id: 'services' as const, label: 'Services' },
    { id: 'industries' as const, label: 'Industries' },
    { id: 'case-studies' as const, label: 'Case Studies' },
    { id: 'insights' as const, label: 'Insights' }
  ];

  const handleNavigation = (id: typeof navItems[0]['id']) => {
    navigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#15014c' }}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
          <img 
            src={hrqLogo} 
            alt="HRQ - Human Resource Quantum" 
            className="w-20 h-20 object-contain transition-transform duration-[2000ms] hover:rotate-y-180"
            style={{ width: '80px', height: '80px' }}
          />
        </div>
        
        <div className="flex items-center space-x-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`transition-colors hover:text-white/80 font-bold ${
                  currentPage === item.id ? 'text-white border-b-2 border-white pb-1' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              style={{backgroundColor: '#00ABF5', position: 'relative', overflow: 'hidden'}} 
              className="text-white hover:opacity-90 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
              onClick={() => handleNavigation('contact')}
            >
              Get Consultation
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/20" style={{ backgroundColor: '#15014c' }}>
          <nav className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left transition-colors hover:text-white/80 font-bold ${
                  currentPage === item.id ? 'text-white border-l-2 border-white pl-4' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <Button 
                style={{backgroundColor: '#00ABF5', position: 'relative', overflow: 'hidden'}} 
                className="text-white hover:opacity-90 w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
                onClick={() => handleNavigation('contact')}
              >
                Get Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}