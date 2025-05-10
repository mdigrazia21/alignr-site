import { Card } from "@/components/ui/card";
import { Check, Users, TrendingUp, Award, Clock, Banknote, FileText, ThumbsUp, UserCheck } from "lucide-react";
export function WhyUsSection() {
  const benefits = [{
    icon: <UserCheck className="w-10 h-10 text-primary" />,
    title: "Quality Talent Support",
    description: "Not only place top-quality and highly vetted talent but also coach and support them for a year post-placement"
  }, {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Innovative Recruitment",
    description: "Professional & Innovative Recruitment, blending modern tactics & Tech to reduce complexity & hiring time"
  }, {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Unbeatable EVP",
    description: "Have an unbeatable EVP"
  }, {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Extended Guarantee",
    description: "6-month standard guarantee"
  }, {
    icon: <Banknote className="w-10 h-10 text-primary" />,
    title: "Transparent Pricing",
    description: "Fixed & Transparent Pricing (up to 30% more cost-effective than traditional recruitment agencies)"
  }, {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Flexible Payments",
    description: "Monthly Invoice installments (up to 4 months) to support cash flow"
  }, {
    icon: <ThumbsUp className="w-10 h-10 text-primary" />,
    title: "Talent Retention",
    description: "Support, Grow & Retain top talent via our 12-month post-placement peer network program"
  }, {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Consistent Quality",
    description: "We know your needs deeply! Consistent Quality, same hiring expert every time"
  }];
  return <section className="w-full bg-slate-50 py-[84px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-center text-base/7 font-semibold text-primary">For every hire & every client we help...</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-medium tracking-tight text-balance text-gray-950 sm:text-5xl">
            Why us
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mt-4 font-dm-sans mb-8">
            We're effective, we're about quality over quantity and using data & modern tactics to focus on attitude as much as experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => <Card key={index} className="relative overflow-hidden h-full">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="flex flex-col items-start h-full px-6 py-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <p className="text-lg font-medium tracking-tight text-gray-950 mb-1">
                    {benefit.title}
                  </p>
                  <p className="text-sm/6 text-gray-600">
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