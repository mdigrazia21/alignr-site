import { Card } from "@/components/ui/card";
import { ArrowDown, DollarSign, Users, BrainCircuit, TrendingDown } from "lucide-react";
export function ProblemSection() {
  return <section className="w-full bg-gray-50 py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-center text-base/7 font-semibold text-primary">The reality</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-medium tracking-tight text-balance text-gray-950 sm:text-5xl">
            The problem with hiring today
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4 font-dm-sans">
            If you're reading this, you're facing the below challenges when hiring
          </p>
        </div>
        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-4">
          {[{
          title: "Spending too much",
          content: "Spending too much on traditional recruitment agencies with high fees and no guarantee of quality",
          icon: <DollarSign className="w-10 h-10 text-primary" />
        }, {
          title: "Not getting great talent",
          content: "Experiencing frustration with candidates who don't match your requirements or culture",
          icon: <Users className="w-10 h-10 text-primary" />
        }, {
          title: "Stressed about hiring",
          content: "Feeling overwhelmed by having to handle recruitment yourself while managing your core business",
          icon: <BrainCircuit className="w-10 h-10 text-primary" />
        }, {
          title: "Lost confidence & productivity",
          content: "Dealing with the aftermath of bad hires that impact team morale and business performance",
          icon: <TrendingDown className="w-10 h-10 text-primary" />
        }].map((problem, index) => <Card key={index} className="relative overflow-hidden h-full">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="flex flex-col items-center justify-center h-full text-center px-8 py-10">
                  <div className="mb-4">{problem.icon}</div>
                  <p className="text-lg font-medium tracking-tight text-gray-950">
                    {problem.title}
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-600">
                    {problem.content}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
            </Card>)}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          
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
          <h3 className="text-3xl font-medium mt-4 font-dm-sans tracking-tight">What do you do?</h3>
        </div>
      </div>
    </section>;
}