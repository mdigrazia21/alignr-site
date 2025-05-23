import { Badge } from "@/components/ui/badge";
export function WhatWeDoSection() {
  const roles = ["HR & Talent", "Sales", "Admin", "Finance", "Operations"];
  return <section className="w-full bg-white py-[84px]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-center text-base/7 font-semibold text-primary">Plain and simple</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-medium tracking-tight text-balance text-gray-950 sm:text-5xl">
            What we do
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4 font-dm-sans">We're a modern recruitment agency designed for Australian businesses: helping you hire better, align teams more effectively, and scale with confidence.</p>
        </div>
        
        <div className="w-full max-w-2xl mx-auto mt-10">
          <p className="text-lg font-dm-sans mb-6">We help align your organization by finding the perfect talent across:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {roles.map((role, index) => <Badge key={index} className="px-4 py-2 bg-primary/10 text-primary text-base rounded-2xl transition-all hover:scale-105">
                {role}
              </Badge>)}
          </div>
        </div>
      </div>
    </section>;
}