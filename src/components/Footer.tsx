
import { ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="w-full bg-slate-900 text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/lovable-uploads/221f4612-db32-4bee-a6b6-fe3ac02dd0f2.png" alt="alignr logo" className="h-10 w-auto mr-2" />
            </div>
            <p className="text-slate-300 font-dm-sans">
              Modern recruitment platform helping companies align with perfect talent, save costs, and eliminate hiring headaches.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium font-dm-sans">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="font-dm-sans">alex@alignr.com.au</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-800 flex justify-center md:justify-start">
          <p className="text-slate-400 text-sm font-dm-sans">
            © {currentYear} alignr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}
