export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4 uppercase">
          System <span className="text-teal-500">Access</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Select your operational tier for the Wound Up streaming platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg flex flex-col opacity-75">
          <h3 className="text-xl font-bold text-slate-300 mb-2 uppercase">Listener</h3>
          <div className="text-3xl font-black text-slate-100 mb-6">$0<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-4 mb-8 text-sm text-slate-400 flex-1">
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Listen to live autonomous streams</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Participate in queue voting</li>
            <li className="flex items-center gap-2 text-slate-600"><span className="font-bold">×</span> Broadcast own streams</li>
            <li className="flex items-center gap-2 text-slate-600"><span className="font-bold">×</span> Vici Engine Access</li>
          </ul>
          <button className="w-full py-3 text-sm font-bold uppercase tracking-wider text-slate-400 bg-slate-800 border-2 border-slate-700 rounded cursor-not-allowed">
            Free Default
          </button>
        </div>

        {/* Tier 2 */}
        <div className="bg-slate-900 border-2 border-teal-500 p-8 rounded shadow-[0_0_20px_rgba(20,184,166,0.15)] flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded border border-teal-400">
            Recommended
          </div>
          <h3 className="text-xl font-bold text-teal-400 mb-2 uppercase">Broadcaster</h3>
          <div className="text-3xl font-black text-white mb-6">$10<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-4 mb-8 text-sm text-slate-300 flex-1">
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Everything in Listener</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Host autonomous live streams</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Upload personal library (100GB)</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Vici Standalone Engine Access</li>
          </ul>
          <button className="w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-teal-600 border-2 border-teal-500 rounded hover:bg-teal-500 transition-colors">
            Initialize
          </button>
        </div>

        {/* Tier 3 */}
        <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg flex flex-col">
          <h3 className="text-xl font-bold text-slate-300 mb-2 uppercase">Enterprise</h3>
          <div className="text-3xl font-black text-slate-100 mb-6">$40<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-4 mb-8 text-sm text-slate-400 flex-1">
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Everything in Broadcaster</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Unlimited library storage</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> Custom DSP algorithm injection</li>
            <li className="flex items-center gap-2"><span className="text-teal-500 font-bold">✓</span> White-label embedded player</li>
          </ul>
          <button className="w-full py-3 text-sm font-bold uppercase tracking-wider text-teal-400 bg-slate-900 border-2 border-teal-700 rounded hover:bg-slate-800 transition-colors">
            Contact Ops
          </button>
        </div>
      </div>
    </div>
  );
}
