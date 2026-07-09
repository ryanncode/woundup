import Link from "next/link";
import { Disc3, Mail, Link2, Disc } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t-2 border-slate-800 pt-16 pb-8 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-teal-600 flex items-center justify-center border border-teal-500 shadow-inner">
                <Disc3 className="text-white" size={18} />
              </div>
              <span className="font-black text-xl tracking-widest text-slate-100 uppercase mt-0.5">
                Wound<span className="text-teal-500">Up</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm">
              The next generation of algorithmic DJ streaming. Continuous, autonomous, and perfectly mixed music for any vibe.
            </p>
          </div>
          
          <div>
            <h3 className="text-slate-100 font-bold mb-4 uppercase tracking-widest text-xs">Product</h3>
            <ul className="space-y-3">
              <li><a href="https://dj.woundup.org" className="text-slate-400 hover:text-teal-400 transition-colors">Vici DJ Tool</a></li>
              <li><Link href="/platform" className="text-slate-400 hover:text-slate-200 transition-colors">Streaming Platform</Link></li>
              <li><Link href="/pricing" className="text-slate-400 hover:text-slate-200 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-slate-100 font-bold mb-4 uppercase tracking-widest text-xs">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-slate-400 hover:text-slate-200 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-slate-200 transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-slate-200 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t-2 border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">
            &copy; {new Date().getFullYear()} Wound Up. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              <Mail size={18} />
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              <Link2 size={18} />
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              <Disc size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
