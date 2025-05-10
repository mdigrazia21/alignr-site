
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, TrendingUp, Award, Clock, Banknote, FileText, ThumbsUp, UserCheck } from "lucide-react";

export function WhyUsSection() {
  const benefits = [
    {
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      text: "Not only place top-quality and highly vetted talent but also coach and support them for a year post-placement"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      text: "Professional & Innovative Recruitment, blending modern tactics & Tech to reduce complexity & hiring time"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      text: "Have an unbeatable EVP"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      text: "6-month standard guarantee"
    },
    {
      icon: <Banknote className="w-6 h-6 text-primary" />,
      text: "Fixed & Transparent Pricing (up to 30% more cost-effective than traditional recruitment agencies)"
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      text: "Monthly Invoice installments (up to 4 months) to support cash flow"
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-primary" />,
      text: "Support, Grow & Retain top talent via our 12-month post-placement peer network program"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      text: "We know your needs deeply! Consistent Quality, same hiring expert every time"
    }
  ];

  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-2px] leading-tight font-dm-sans mb-6">
            Why us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl font-dm-sans mb-8">
            We're effective, we're about quality over quantity and using data & modern tactics to focus on attitude as much as experience.
          </p>
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-2xl mb-12">
            <Check className="w-5 h-5 mr-2" />
            <span className="font-medium font-dm-sans">For every hire & every client we help...</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md border-none bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">{benefit.icon}</div>
                  <p className="text-base font-dm-sans pt-2">{benefit.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
