import Link from "next/link";
import { Disc3, Mail, Link2, Disc } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Disc3 className="text-purple-500" size={24} />
              <span className="font-bold text-xl tracking-tight text-white">
                Wound<span className="text-purple-400">Up</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              The next generation of algorithmic DJ streaming. Continuous, autonomous, and perfectly mixed music for any vibe.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Product</h3>
            <ul className="space-y-3">
              <li><a href="https://dj.woundup.org" className="text-gray-400 hover:text-purple-400 transition-colors">Vici DJ Tool</a></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Streaming Platform</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Wound Up. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Link2 size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Disc size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
