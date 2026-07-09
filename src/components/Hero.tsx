import { ArrowRight, AudioWaveform } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
          <span className="text-sm font-medium text-gray-300">Vici Auto-Mixer is now live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tight mb-8 drop-shadow-lg">
          The Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Autonomous Streaming</span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto mb-10 leading-relaxed">
          Wound Up is building the next generation of algorithmic DJ streaming. 
          While we craft the ultimate listening experience, you can try our cutting-edge mixing engine today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://dj.woundup.org" 
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-blue-600 border border-transparent rounded-full hover:from-purple-500 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transform hover:-translate-y-1"
          >
            <AudioWaveform size={20} className="animate-pulse" />
            Launch Vici DJ Tool
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#learn-more" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Bottom gradient fade to match future sections */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
