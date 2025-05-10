
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge";

function Hero1() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col lg:pt-24 lg:pb-36">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-[115%] tracking-tighter text-center font-medium font-dm-sans">
              Helping companies align with the right talent
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Need a different approach to scaling your team? We help you find perfectly aligned talent,
              reduce hiring costs, and eliminate recruitment headaches.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md" variant="outline">
              Let's talk hiring <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero1 };
