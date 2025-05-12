import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="w-full bg-slate-900 text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/lovable-uploads/221f4612-db32-4bee-a6b6-fe3ac02dd0f2.png" alt="alignr logo" className="h-10 w-auto mr-2" />
            </div>
            <p className="text-slate-300 font-dm-sans">
              Modern recruitment platform helping companies align with perfect talent, save costs, and eliminate hiring headaches.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium font-dm-sans">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About Us", "Testimonials", "Contact"].map(link => <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors font-dm-sans flex items-center gap-1 group">
                    {link}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>)}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium font-dm-sans">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="font-dm-sans">alex@alignr.com.au</li>
              
              
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium font-dm-sans">Subscribe</h3>
            <p className="text-slate-300 font-dm-sans">
              Get the latest updates and recruiting insights.
            </p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-slate-800 text-white rounded-xl px-4 py-2 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-primary" />
              <Button size="sm" className="rounded-xl">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-dm-sans">
            © {currentYear} alignr. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => <a key={item} href="#" className="text-slate-400 hover:text-white text-sm transition-colors font-dm-sans">
                {item}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
}