
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Banknote, Check, Bookmark, Heart } from "lucide-react";

export function HowWeHelpSection() {
  const benefits = [
    {
      title: "Reduce your hiring costs",
      description: "We are up to 30% more cost-effective than traditional rec agencies",
      icon: <Banknote className="w-10 h-10 text-primary" />
    },
    {
      title: "Improve quality and talent",
      description: "Deeper insights, focus on attitudes as much as skills",
      icon: <Users className="w-10 h-10 text-primary" />
    },
    {
      title: "Reduce hiring time",
      description: "By combining innovative recruitment tactics with technology, data-driven alignment strategies to surface what matters in hiring we reduce hiring time by 40%",
      icon: <Clock className="w-10 h-10 text-primary" />
    },
    {
      title: "We simplify",
      description: "We do the heavy lifting",
      icon: <Check className="w-10 h-10 text-primary" />
    },
    {
      title: "Made for small to medium companies",
      description: "We know what works for you",
      icon: <Bookmark className="w-10 h-10 text-primary" />
    },
    {
      title: "Beyond CVs and invoices",
      description: "We provide in-depth support across interview scorecards & tactics to give you more confidence, and post placement support to protect your investment and help them thrive!",
      icon: <Heart className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-2px] leading-tight font-dm-sans mb-6">
            How we help you
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
              <CardHeader className="pb-0">
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl font-dm-sans">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-muted-foreground font-dm-sans">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
