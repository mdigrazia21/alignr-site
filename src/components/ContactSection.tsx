import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://getform.io/f/bvryedrb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        alert("There was an issue submitting your message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="w-full bg-white py-[84px]">
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
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    className="rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your hiring needs..."
                    className="w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl shadow-sm transition-all duration-300 hover:shadow-md gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
