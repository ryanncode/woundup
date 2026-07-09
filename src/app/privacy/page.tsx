export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono">
      <div className="mb-12 border-b-2 border-slate-800 pb-8">
        <h1 className="text-3xl font-black text-slate-100 tracking-tight uppercase">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-bold">Last Updated: Jan 2026</p>
      </div>

      <div className="space-y-8 text-slate-400 text-sm leading-relaxed">
        <section>
          <h2 className="text-white font-bold uppercase tracking-wider mb-3">1. Data Collection</h2>
          <p>
            Wound Up collects minimal telemetry data required for the operation of the Vici Engine and streaming services. This includes performance metrics of the WebAudio API, latency measurements, and session duration.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold uppercase tracking-wider mb-3">2. Audio Processing</h2>
          <p>
            When utilizing the standalone Vici DJ tool, all digital signal processing and track decoding occurs entirely on the client side (within your browser). Audio files are not uploaded to our servers unless specifically utilizing the upcoming cloud broadcasting features.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold uppercase tracking-wider mb-3">3. Telemetry Opt-Out</h2>
          <p>
            Users may opt out of performance telemetry by adjusting the settings panel within the Vici application. Operational logs necessary for crash reporting cannot be disabled for beta testers.
          </p>
        </section>
      </div>
    </div>
  );
}
