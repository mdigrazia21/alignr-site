
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // In a real app, you would send this data to a server
    setIsSubmitted(true);
    // Reset form
    setFormState({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
  };
  
  return <section className="w-full bg-white py-[84px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-2px] leading-tight font-dm-sans mb-6">
            Contact us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-dm-sans">
            Ready to transform how you hire? Get in touch and let's discuss your needs.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-md">
          <CardHeader className="bg-primary/5 pb-6">
            <CardTitle className="text-2xl font-dm-sans">Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-medium mb-2">Thank you!</h3>
                <p className="text-muted-foreground mb-6">
                  We've received your message and will be in touch shortly.
                </p>
                <Button
                  onClick={handleNewMessage}
                  className="rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Your name" className="rounded-xl" value={formState.name} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" className="rounded-xl" value={formState.email} onChange={handleInputChange} required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Your company name" className="rounded-xl" value={formState.company} onChange={handleInputChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} placeholder="Tell us about your hiring needs..." className="w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" value={formState.message} onChange={handleInputChange} required />
                </div>
                
                <Button type="submit" className="w-full rounded-xl shadow-sm transition-all duration-300 hover:shadow-md gap-2">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>;
}
