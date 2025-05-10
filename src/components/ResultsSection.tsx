
import { Card, CardContent } from "@/components/ui/card";

export function ResultsSection() {
  const stats = [
    { label: "Placements", value: "14" },
    { label: "Retention", value: "100%" },
    { label: "Fill rate", value: "100%" },
    { label: "Average hire time", value: "3 weeks" },
    { label: "Client Savings", value: "30%" }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-2px] leading-tight font-dm-sans mb-6">
            Results / Performance
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl shadow-sm border-none bg-gradient-to-br from-primary/5 to-primary/20 transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <span className="text-4xl sm:text-5xl font-bold text-primary mb-2 font-dm-sans">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground font-dm-sans">{stat.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
