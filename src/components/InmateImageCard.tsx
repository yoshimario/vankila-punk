import { User, ShieldCheck } from "lucide-react";

export function InmateImageCard() {
  const inmatePhoto = "/inmate-666.jpg";

  return (
    <div className="cell-panel bg-[var(--panel-bg)] !p-4 flex flex-col items-center transition-colors duration-500 w-full max-w-[320px]">
      {/* HEADER: Permit Identification */}
      <div className="bg-black text-cell-mustard p-2 w-full mb-4 flex justify-between font-mono font-black text-[9px] uppercase italic border-b-2 border-cell-mustard">
        <span className="truncate">ISO-GATE // PERMIT</span>
        <ShieldCheck size={14} className="shrink-0" />
      </div>

      {/* PHOTO SLOT: Narrow 9:16 Ratio */}
      <div className="w-full aspect-[9/16] bg-black border-[4px] border-black mb-4 relative overflow-hidden group shadow-inner">
        {inmatePhoto ? (
          <img
            src={inmatePhoto}
            alt="VANKI-PUNK"
            /* FIXED: Use 'object-cover' with 'object-top' to ensure 
               the head/tattoo is the priority if anything is clipped.
            */
            className="w-full h-full object-cover object-top transition-all duration-700 brightness-90 group-hover:brightness-110"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-white/5 italic">
            <User size={60} />
            <span className="text-[8px] mt-2 uppercase">
              Locating_Subject...
            </span>
          </div>
        )}

        {/* CCTV Overlay Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="absolute top-2 left-2 flex gap-1 items-center">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
          <span className="text-[7px] text-white font-mono font-bold opacity-50">
            REC
          </span>
        </div>
      </div>

      {/* REGISTRY DETAILS: Using VANKI-PUNK */}
      <div className="w-full space-y-3 text-[var(--text-main)] font-mono">
        <div className="border-b-2 border-black/10 dark:border-white/10 pb-1 flex justify-between items-end gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-[7px] font-black opacity-40 uppercase leading-none mb-1">
              Subject_Identity
            </span>
            {/* FIXED: 'text-xl' with 'tracking-tighter' to prevent overflow */}
            <span className="text-xl font-black uppercase tracking-tighter leading-none truncate block">
              VANKI-PUNK
            </span>
          </div>
          <span className="text-[10px] font-black opacity-20 shrink-0">
            #666
          </span>
        </div>

        <div className="flex justify-between items-center gap-2">
          <div className="bg-red-700 text-white px-2 py-1 text-[9px] font-black uppercase tracking-widest inline-block shadow-[2px_2px_0px_black] shrink-0">
            STATUS: IN_CUSTODY
          </div>
          <span className="text-[8px] font-black opacity-30 uppercase italic truncate">
            UNIT_666
          </span>
        </div>
      </div>
    </div>
  );
}
