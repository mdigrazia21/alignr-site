
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 items-center md:grid-cols-1 lg:grid-cols-12">
          {/* Text content section - takes 7/12 columns on large screens */}
          <div className="flex gap-5 flex-col lg:col-span-7 lg:pr-8">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-xl tracking-[-2px] leading-[1.2] font-medium font-dm-sans">
                Helping companies align with the right talent
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg font-dm-sans">
                Need a different approach to scaling your team? We help you find perfectly aligned talent,
                reduce hiring costs, and eliminate recruitment headaches.
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 pt-2 md:pt-4">
              <Button size="lg" className="gap-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md" variant="outline">
                Let's talk hiring <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Image section - takes 5/12 columns on large screens */}
          <div className="mt-8 lg:mt-0 lg:col-span-5 bg-muted rounded-2xl shadow-md overflow-hidden aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              alt="Team collaboration" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
