
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge";

function Hero1() {
  const scrollToContact = () => {
    // Find the contact section element and scroll to it
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-[90vh] flex flex-col">
      <div className="container mx-auto flex-grow flex items-start">
        <div className="flex gap-8 pt-20 pb-40 lg:pt-24 lg:pb-60 items-center justify-center flex-col w-full relative">
          {/* Subtle geometric shapes positioned in a triangle around the heading */}
          <div className="absolute top-[15%] left-[15%] w-16 h-16 rounded-full bg-[#C3F0C8] opacity-30 rotate-12 transform-gpu"></div>
          <div className="absolute top-[30%] right-[20%] w-14 h-14 bg-[#FEC6A1] opacity-30 rounded-lg rotate-45 transform-gpu"></div>
          <div className="absolute bottom-[25%] left-[30%] w-12 h-12 bg-[#1e2c56] opacity-20 clip-path-triangle rotate-[30deg] transform-gpu"></div>
          
          <div>
            <Badge variant="outline" className="border-[#FEC6A1] text-[#1e2c56] border-2 px-3 py-1">Recruitment done right</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-medium font-dm-sans">
              Helping companies align with the right<br /> talent
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Need a different approach to scaling your team? We help you find perfectly aligned talent,
              reduce hiring costs, and eliminate recruitment headaches.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md" onClick={scrollToContact}>
              Let's talk hiring <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        `}
      </style>
    </div>
  );
}

export { Hero1 };
