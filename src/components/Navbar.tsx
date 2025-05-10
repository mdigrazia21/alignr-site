
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold font-dm-sans flex items-center gap-2">
            <span className={`transition-colors ${isScrolled ? 'text-primary' : 'text-black'}`}>Hire</span>
            <span className="text-primary">Craft</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="font-medium font-dm-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              size="sm" 
              variant="outline" 
              className="rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:bg-primary hover:text-white gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Contact Us
            </Button>
          </div>
          
          <Button 
            variant="ghost"
            size="sm"
            className="md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
