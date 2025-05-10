
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="w-full py-8 lg:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-[-2px] leading-[1.4] text-left font-medium font-dm-sans">
                Helping companies align with the right talent
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left font-dm-sans">
                Need a different approach to scaling your team? We help you find perfectly aligned talent,
                reduce hiring costs, and eliminate recruitment headaches.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md" variant="outline">
                Let's talk hiring <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-2xl shadow-md overflow-hidden aspect-square">
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
