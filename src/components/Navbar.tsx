import Link from "next/link";
import { Disc3 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900 border-b-2 border-slate-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded bg-teal-600 flex items-center justify-center border border-teal-500 shadow-inner group-hover:bg-teal-500 transition-colors">
              <Disc3 className="text-white" size={18} />
            </div>
            <span className="font-black text-xl tracking-widest text-slate-100 uppercase mt-0.5">
              Wound<span className="text-teal-500 group-hover:text-teal-400 transition-colors">Up</span>
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/woundup" className="text-slate-400 hover:text-white px-3 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors">Wound Up</Link>
              <Link href="/vici" className="text-slate-400 hover:text-white px-3 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors">Vici Engine</Link>
              <Link href="/pricing" className="text-slate-400 hover:text-white px-3 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors">Pricing</Link>
              <Link href="/about" className="text-slate-400 hover:text-white px-3 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors">About</Link>
            </div>
          </div>

          <div>
            <a 
              href="https://dj.woundup.org" 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-teal-600 text-white border-2 border-teal-500 hover:bg-teal-500 transition-colors shadow-sm"
            >
              Launch DJ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
