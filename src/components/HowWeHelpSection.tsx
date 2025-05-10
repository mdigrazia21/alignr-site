import { Card } from "@/components/ui/card";
import { Users, Clock, Banknote, Check, Bookmark, Heart } from "lucide-react";
export function HowWeHelpSection() {
  const benefits = [{
    title: "Reduce your hiring costs",
    description: "We are up to 30% more cost-effective than traditional rec agencies",
    icon: <Banknote className="w-10 h-10 text-primary" />
  }, {
    title: "Improve quality and talent",
    description: "Deeper insights, focus on attitudes as much as skills",
    icon: <Users className="w-10 h-10 text-primary" />
  }, {
    title: "Reduce hiring time",
    description: "By combining innovative recruitment tactics with technology, data-driven alignment strategies to surface what matters in hiring we reduce hiring time by 40%",
    icon: <Clock className="w-10 h-10 text-primary" />
  }, {
    title: "We simplify",
    description: "We do the heavy lifting",
    icon: <Check className="w-10 h-10 text-primary" />
  }, {
    title: "Made for small to medium companies",
    description: "We know what works for you",
    icon: <Bookmark className="w-10 h-10 text-primary" />
  }, {
    title: "Beyond CVs and invoices",
    description: "We provide in-depth support across interview scorecards & tactics to give you more confidence, and post placement support to protect your investment and help them thrive!",
    icon: <Heart className="w-10 h-10 text-primary" />
  }];
  return <section className="w-full bg-slate-50 py-[84px]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-center text-base/7 font-semibold text-primary">We can help</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-medium tracking-tight text-balance text-gray-950 sm:text-5xl">
            How we help you
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4 font-dm-sans">
            We're a modern recruitment platform for growing companies: helping you hire better, 
            align teams more effectively, and scale with confidence.
          </p>
        </div>
        
        <div className="mt-10 grid gap-4 sm:mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => <Card key={index} className="relative overflow-hidden h-full">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="flex flex-col items-center justify-center h-full text-center px-8 py-10">
                  <div className="mb-4">{benefit.icon}</div>
                  <p className="text-lg font-medium tracking-tight text-gray-950">
                    {benefit.title}
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
            </Card>)}
        </div>
      </div>
    </section>;
}