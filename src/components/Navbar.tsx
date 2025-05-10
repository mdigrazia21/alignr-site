
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

  // Function to scroll to the contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/221f4612-db32-4bee-a6b6-fe3ac02dd0f2.png" 
              alt="alignr logo" 
              className="h-10 w-auto transition-all duration-300"
            />
          </a>
          
          <div className="hidden md:flex items-center">
            <button 
              onClick={scrollToContact} 
              className="font-medium font-dm-sans text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={scrollToContact}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
