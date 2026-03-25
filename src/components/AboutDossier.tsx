import { motion } from "framer-motion";
import {
  X,
  Fingerprint,
  Mail,
  MessageSquare,
  Radio,
  ShieldCheck,
  Target,
  User,
} from "lucide-react";

// --- SUB-COMPONENT: THE INMATE IMAGE CARD ---
// FIXED: Locked to naming convention & full-length PNG layout
function InmateImageCard() {
  const inmatePhoto = "/inmate-666.png";

  return (
    <div className="bg-[var(--panel-bg)] border-[4px] border-black dark:border-cell-blue shadow-[10px_10px_0px_black] p-4 flex flex-col items-center w-full max-w-[320px] mx-auto lg:mx-0 transition-colors duration-500">
      {/* CARD HEADER */}
      <div className="bg-black text-cell-mustard p-2 w-full mb-4 flex justify-between font-mono font-black text-[9px] uppercase italic border-b-2 border-cell-mustard">
        <span>ISO-GATE // PERMIT</span>
        <ShieldCheck size={14} />
      </div>

      {/* PHOTO SLOT - aspect-[9/16] to show the whole guy (tattoo to feet) */}
      <div className="w-full aspect-[9/16] bg-black border-[6px] border-black mb-4 relative overflow-hidden group">
        {inmatePhoto ? (
          <img
            src={inmatePhoto}
            alt="VANKI-PUNK"
            className="w-full h-full object-contain transition-all duration-500 brightness-90 group-hover:brightness-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white/10 italic">
            <User size={80} />
            <span className="text-[8px] mt-2 uppercase tracking-widest">
              Searching...
            </span>
          </div>
        )}

        {/* LIVE SCAN OVERLAY */}
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-sm">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
          <span className="text-[7px] font-mono text-white/80 uppercase font-bold">
            Live_Feed
          </span>
        </div>
      </div>

      {/* REGISTRY DETAILS */}
      <div className="w-full space-y-3 text-[var(--text-main)] font-mono">
        <div className="border-b-2 border-black/10 dark:border-white/10 pb-1 flex justify-between items-end gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-[7px] font-black opacity-40 uppercase leading-none mb-1">
              Identity
            </span>
            <span className="text-xl font-black uppercase tracking-tighter leading-none truncate block">
              VANKI-PUNK
            </span>
          </div>
          <span className="text-[10px] font-black opacity-20 shrink-0">
            #666
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-red-700 text-white px-2 py-1 text-[9px] font-black uppercase tracking-widest shadow-[2px_2px_0px_black]">
            STATUS: IN_CUSTODY
          </div>
          <span className="text-[8px] font-black opacity-30 italic uppercase">
            Cell_Block_666
          </span>
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---
export function AboutDossier({ onClose }: { onClose: () => void }) {
  const contacts = [
    {
      label: "Matrix_ID",
      value: "@prisondude:matrix.org",
      icon: <MessageSquare size={18} />,
    },
    {
      label: "Uplink_Email",
      value: "prisondude@outlook.com",
      icon: <Mail size={18} />,
    },
    {
      label: "Comm_Node",
      value: "CELL_666",
      icon: <Radio size={18} />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] bg-[var(--bg-color)]/98 backdrop-blur-xl flex flex-col p-6 md:p-12 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* GLOBAL HEADER */}
        <div className="flex justify-between items-center mb-16 border-b-4 border-cell-mustard bg-black p-6 shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-6 text-white">
            <Fingerprint
              size={40}
              className="text-cell-mustard animate-pulse"
            />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-cell-mustard font-black uppercase tracking-[0.4em]">
                Personal_Manifesto_Node
              </span>
              <h2 className="font-mono font-black text-3xl md:text-5xl uppercase italic tracking-tighter leading-none">
                Dossier
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="btn-close hover:text-red-600 transition-colors"
          >
            <X size={32} strokeWidth={4} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-32">
          {/* LEFT COLUMN: THE PHYSICAL PERMIT */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <InmateImageCard />
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 font-mono text-[10px] uppercase space-y-2 opacity-60 text-[var(--text-main)]">
              <div className="flex justify-between">
                <span>Access_Clearance:</span>
                <span className="text-cell-mustard font-black">ALPHA_666</span>
              </div>
              <div className="flex justify-between">
                <span>Registry_Status:</span>
                <span className="font-black text-red-600">
                  PERMANENT_ERASURE
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE MANIFESTO & UPLINK */}
          <div className="lg:col-span-8 space-y-16">
            {/* MANIFESTO BOX: BRUTAL EDITION */}
            <div className="cell-panel bg-[var(--panel-bg)] border-red-900/30">
              {/* FIXED ALIGNMENT HEADER */}
              <h3 className="text-5xl md:text-8xl font-black uppercase text-red-600 italic mb-10 leading-[0.95] tracking-tighter flex flex-col items-start">
                <span className="block">SOCIETY</span>
                <span className="text-[var(--text-main)] block">IS THE</span>
                <span className="bg-red-600 text-black px-4 -ml-1 mt-2 inline-block shadow-[6px_6px_0px_black] not-italic">
                  CAGE
                </span>
              </h3>

              <div className="prose prose-zinc dark:prose-invert max-w-none text-xl md:text-2xl font-bold italic leading-tight space-y-10 text-[var(--text-main)]">
                <p className="border-l-4 border-red-600 pl-6">
                  Node 666 is the **refusal to be redacted**. Society didn't
                  fail me; it spent billions to build a world where I am merely
                  a **statistical error**.
                </p>

                <div className="bg-black text-white p-10 border-b-[16px] border-cell-mustard shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[80px] font-black opacity-5 select-none leading-none uppercase">
                    REDACTED
                  </div>
                  <p className="relative z-10 text-cell-mustard">
                    "They love the clinical chill of this **poured concrete**
                    because it makes the blood easier to mop up. I am the stain
                    they can't scrub out. I am the noise in a society that
                    demands total, hollow silence."
                  </p>
                </div>

                <p className="text-lg not-italic font-mono uppercase tracking-tighter bg-red-600/10 p-4 border border-red-600/20">
                  <span className="text-red-600 font-black">WARNING:</span>
                  Subject VANKI-PUNK is a non-person. Communication with this
                  Node is a violation of Citizen_Protocol_01.
                </p>

                <div className="pt-10 border-t-4 border-black/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] not-italic font-black uppercase tracking-[0.4em]">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-600 animate-ping rounded-full" />
                    <span>Subject_VANKI-PUNK // Unreformed</span>
                  </div>
                  <span className="opacity-40 bg-black text-white px-2 py-1">
                    Security_Level: CRITICAL
                  </span>
                </div>
              </div>
            </div>

            {/* CONTACT LOGS: RECALIBRATED FOR CLARITY */}
            <div className="cell-panel bg-black/5 dark:bg-white/5 border-t-8 border-cell-blue">
              <div className="flex items-center gap-4 text-cell-blue font-mono text-xs font-black uppercase mb-12 border-b-2 border-cell-blue/20 pb-4">
                <Radio size={18} className="animate-pulse" />
                <span>Uplink_Protocols // Encrypted_Channels</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-mono">
                {contacts.map((c) => (
                  <div
                    key={c.label}
                    className="relative group border-l-4 border-black/10 dark:border-white/10 pl-6 pb-2"
                  >
                    <span className="text-[10px] md:text-xs font-black uppercase opacity-60 block mb-3 tracking-[0.2em] text-cell-blue">
                      {c.label}
                    </span>
                    <div className="flex items-center gap-5">
                      <div className="text-[var(--text-main)] opacity-80 group-hover:text-cell-blue transition-colors">
                        {c.icon}
                      </div>
                      <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-[var(--text-main)] break-all">
                        {c.value}
                      </span>
                    </div>

                    {c.label === "Comm_Node" && (
                      <div className="flex gap-1.5 mt-5 items-center bg-black/10 dark:bg-white/5 p-2 w-fit border border-black/10">
                        {[1, 2, 3, 4, 5].map((bar) => (
                          <div
                            key={bar}
                            className={`w-2 h-4 border border-black dark:border-white/20 ${
                              bar <= 2
                                ? "bg-cell-mustard shadow-[0_0_8px_rgba(234,179,8,0.4)]"
                                : "bg-black/20 dark:bg-white/10"
                            } ${bar === 2 ? "animate-pulse" : ""}`}
                          />
                        ))}
                        <span className="text-[9px] ml-3 uppercase font-black text-red-600 animate-pulse">
                          Signal_Weak
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
