import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client, urlFor } from "./sanityClient";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "./PortableTextComponents";
import {
  Activity,
  Sun,
  Moon,
  Square,
  ChevronRight,
  Target,
  Camera,
  Fingerprint,
} from "lucide-react";

// MODULAR COMPONENTS
import { SolitaryDoor } from "./components/SolitaryDoor";
import { SystemLogTicker } from "./components/SystemLogTicker";
import { FullscreenDossier } from "./components/FullscreenDossier";
import { AboutDossier } from "./components/AboutDossier";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- LOGIC: ONLY VIEW ANIMATION ON INITIAL LOAD ---
  // Checks sessionStorage so the door stays open during refreshes/navigation
  const [isEntryComplete, setEntryComplete] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("vanki_access") === "granted";
    }
    return false;
  });

  const [reports, setReports] = useState<any[]>([]);
  const [selectedReport, setSelectedReport] = useState<any | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  // FETCH INCIDENT REPORTS FROM SANITY
  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc)`)
      .then(setReports);
  }, []);

  // --- THE HANDSHAKE PROTOCOL (SOUND + DOOR EXIT) ---
  const handleEntryProtocol = () => {
    // 1. Play the Heavy Gate Sound (ensure file is in /public)
    const clank = new Audio("/gate-clank.mp3");
    clank.volume = 0.6;
    clank.play().catch((err) => console.warn("Audio blocked by browser:", err));

    // 2. Grant Session Access (Prevents door from reappearing on refresh)
    sessionStorage.setItem("vanki_access", "granted");

    // 3. Trigger the exit animation
    setEntryComplete(true);
  };

  const latest = reports[0];
  const archives = reports.slice(1);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="cell-main-bg relative overflow-x-hidden antialiased font-mono min-h-screen transition-colors duration-500">
        {/* 1. ENTRY MODULE: THE HEAVY VAULT DOOR */}
        <AnimatePresence mode="wait">
          {!isEntryComplete && (
            <SolitaryDoor key="gate" onComplete={handleEntryProtocol} />
          )}
        </AnimatePresence>

        {/* 2. MAIN TERMINAL DASHBOARD */}
        {isEntryComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            {/* FIXED HEADER HUD */}
            <header className="fixed top-0 left-0 right-0 z-[500] bg-black p-4 border-b-4 border-cell-mustard shadow-2xl">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Square
                    size={18}
                    className="fill-cell-mustard text-cell-mustard"
                  />
                  <span className="hidden md:block text-white font-black text-[10px] uppercase tracking-widest">
                    UNIT_666 // HKI_FACILITY
                  </span>
                </div>

                <h2 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase italic">
                  ISO-GATE <span className="text-cell-mustard">// 666</span>
                </h2>

                <div className="flex items-center gap-4">
                  {/* THEME TOGGLE */}
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 bg-white text-black border-2 border-black hover:bg-cell-mustard transition-all cursor-pointer shadow-[2px_2px_0px_black]"
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button>

                  {/* MANIFESTO ACCESS BUTTON */}
                  <button
                    onClick={() => setShowAbout(true)}
                    className="bg-cell-mustard text-black px-4 py-2 border-2 border-black shadow-[4px_4px_0px_black] font-black text-[10px] uppercase hover:bg-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer flex items-center gap-2 group"
                  >
                    <Fingerprint
                      size={14}
                      className="group-hover:animate-pulse"
                    />
                    <span>Manifesto</span>
                  </button>
                </div>
              </div>
            </header>

            {/* CONTENT VIEWPORT */}
            <main className="pt-40 pb-64 px-6 max-w-5xl mx-auto space-y-32">
              {/* LATEST INCIDENT REPORT */}
              {latest ? (
                <article className="space-y-10 group">
                  <div className="bg-cell-mustard p-3 border-4 border-black shadow-[10px_10px_0px_black] flex justify-between items-center font-black text-[11px] uppercase text-black">
                    <span className="flex items-center gap-2">
                      <Activity size={14} className="animate-pulse" />{" "}
                      Handshake_Live
                    </span>
                    <span className="hidden md:block tracking-widest">
                      REG_ID: {latest._id.slice(0, 12).toUpperCase()}
                    </span>
                  </div>

                  <div className="cell-panel">
                    {/* EVIDENCE IMAGE */}
                    {latest.mainImage && (
                      <div className="relative mb-12 border-b-8 border-black -mx-8 -mt-8 overflow-hidden group/img">
                        <img
                          src={urlFor(latest.mainImage).width(1200).url()}
                          alt="Evidence_Visual"
                          className="w-full h-[500px] object-cover grayscale contrast-125 brightness-75 group-hover/img:brightness-100 group-hover/img:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 pointer-events-none border-[20px] border-black/10 flex items-center justify-center">
                          <div className="border-4 border-red-600/20 text-red-600/20 px-10 py-4 font-black text-5xl md:text-8xl uppercase rotate-[-15deg] select-none">
                            CLASSIFIED // 666
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-6 bg-black text-white px-4 py-1 text-[10px] font-black uppercase flex items-center gap-2">
                          <Camera size={12} /> Evidence_Frame_01
                        </div>
                      </div>
                    )}

                    <h3 className="text-4xl md:text-7xl font-black uppercase mb-10 text-cell-blue italic border-b-8 border-black pb-8 leading-none tracking-tighter">
                      {latest.title}
                    </h3>

                    <div className="prose prose-zinc dark:prose-invert max-w-none text-xl md:text-2xl font-bold leading-tight text-[var(--text-main)]">
                      <PortableText
                        value={latest.body}
                        components={ptComponents}
                      />
                    </div>
                  </div>
                </article>
              ) : (
                <div className="h-64 flex items-center justify-center font-black uppercase opacity-20">
                  Waiting_for_Uplink...
                </div>
              )}

              {/* ARCHIVE NODES: Theme-Synced Cards */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {archives.map((r) => (
                  <div
                    key={r._id}
                    onClick={() => setSelectedReport(r)}
                    className="cell-panel bg-[var(--panel-bg)] text-[var(--text-main)] cursor-pointer hover:bg-cell-blue hover:text-white transition-all group shadow-[8px_8px_0px_black] border-black dark:border-white/10"
                  >
                    <div className="flex justify-between items-start mb-10">
                      <Target
                        className="text-red-600 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all"
                        size={24}
                      />
                      <span className="text-[9px] font-black uppercase opacity-30">
                        Node_ID: {r._id.slice(0, 6)}
                      </span>
                    </div>
                    <h5 className="text-2xl font-black uppercase leading-tight group-hover:translate-x-1 transition-transform">
                      {r.title}
                    </h5>
                    <div className="mt-12 pt-4 border-t-4 border-black/10 flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase">
                        Inspect_Log
                      </span>
                      <ChevronRight
                        size={20}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </div>
                  </div>
                ))}
              </section>
            </main>

            {/* SYSTEM TICKER */}
            <footer className="fixed bottom-0 left-0 right-0 z-[500]">
              <SystemLogTicker isDarkMode={isDarkMode} />
            </footer>
          </motion.div>
        )}

        {/* OVERLAY MODALS */}
        <AnimatePresence>
          {selectedReport && (
            <FullscreenDossier
              key="modal-dossier"
              report={selectedReport}
              onClose={() => setSelectedReport(null)}
            />
          )}
          {showAbout && (
            <AboutDossier
              key="modal-about"
              onClose={() => setShowAbout(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
