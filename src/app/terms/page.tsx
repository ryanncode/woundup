export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono">
      <div className="mb-12 border-b-2 border-slate-800 pb-8">
        <h1 className="text-3xl font-black text-slate-100 tracking-tight uppercase">
          Terms of Service
        </h1>
        <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-bold">Last Updated: Jan 2026</p>
      </div>

      <div className="space-y-8 text-slate-400 text-sm leading-relaxed">
        <section>
          <h2 className="text-white font-bold uppercase tracking-wider mb-3">1. Service Usage</h2>
          <p>
            The Wound Up platform and Vici Engine are provided "as-is". Usage of the autonomous streaming tools is subject to fair-use bandwidth limitations to ensure stability across the network.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold uppercase tracking-wider mb-3">2. Intellectual Property</h2>
          <p>
            Users are solely responsible for ensuring they possess the necessary licensing and rights for any audio tracks processed through the Vici Engine or broadcast via the Wound Up streaming platform. 
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold uppercase tracking-wider mb-3">3. Beta Liability</h2>
          <p>
            During the beta phase, the developers of Wound Up accept no liability for interruptions to live sets, data loss, or audio artifacts resulting from experimental DSP features.
          </p>
        </section>
      </div>
    </div>
  );
}
