export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16 font-mono flex-1 flex flex-col">
      <div className="mb-12 border-b-2 border-slate-800 pb-8 text-center">
        <h1 className="text-3xl font-black text-slate-100 tracking-tight uppercase mb-2">
          Contact Ops
        </h1>
        <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
          System inquiries and enterprise deployment
        </p>
      </div>

      <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded shadow-lg">
        <form className="space-y-6">
          <div>
            <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="sys_id">
              System ID / Callsign
            </label>
            <input 
              id="sys_id" 
              type="text" 
              className="w-full bg-slate-950 border-2 border-slate-800 rounded p-3 text-white focus:outline-none focus:border-teal-500 transition-colors placeholder-slate-700" 
              placeholder="Enter identifier"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2" htmlFor="transmission">
              Transmission Data
            </label>
            <textarea 
              id="transmission" 
              rows={5}
              className="w-full bg-slate-950 border-2 border-slate-800 rounded p-3 text-white focus:outline-none focus:border-teal-500 transition-colors placeholder-slate-700 resize-none" 
              placeholder="Enter message details..."
            ></textarea>
          </div>

          <button 
            type="button" 
            className="w-full py-4 text-sm font-bold uppercase tracking-wider text-white bg-teal-600 border-2 border-teal-500 rounded hover:bg-teal-500 transition-colors shadow-sm"
          >
            Transmit Protocol
          </button>
        </form>
      </div>
    </div>
  );
}
