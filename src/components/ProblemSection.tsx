
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-2px] leading-tight font-dm-sans mb-6">
            THE PROBLEM WITH HIRING TODAY
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-dm-sans">
            If you're reading this, you're facing the below challenges when hiring
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Spending too much on traditional recruitment agencies",
            "Not getting great talent",
            "Stressed about having to do hiring yourself and falling behind",
            "Lost confidence & team productivity due to a recent bad hire"
          ].map((problem, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
              <CardContent className="p-8">
                <p className="text-lg font-medium font-dm-sans">{problem}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-medium mb-4 font-dm-sans tracking-tight">WHY?</h3>
          <p className="text-xl font-dm-sans mb-6">Let's face it hiring good talent is hard. But it doesn't have to be.</p>
          <p className="text-lg text-muted-foreground font-dm-sans">
            Traditional approaches aren't working. Your in-house talent capability is stretched or requires scaling 
            but you're not ready. Traditional recruitment agencies might be fast but are insanely expensive, 
            transactional and their interests aren't always aligned with yours.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="animate-bounce bg-primary rounded-full p-2 text-white">
              <ArrowDown size={24} />
            </div>
          </div>
          <h3 className="text-3xl font-medium mt-4 font-dm-sans tracking-tight">WHAT DO YOU DO?</h3>
        </div>
      </div>
    </section>
  );
}
