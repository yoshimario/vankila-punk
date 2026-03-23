// src/App.tsx
import { useState } from 'react';
import { PrisonGate } from './components/Intro/PrisonGate';
import { ShieldAlert, FileText, Activity } from 'lucide-react';

function App() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="min-h-screen bg-prison-linen font-sans selection:bg-prison-maroon selection:text-white">
      {/* Intro Animation */}
      {isLocked && <PrisonGate onComplete={() => setIsLocked(false)} />}

      {/* Institutional Header (The "Maroon Yoke") */}
      <header className="bg-prison-maroon text-prison-linen p-4 border-b-4 border-prison-lead flex justify-between items-center">
        <h1 className="font-mono font-bold tracking-tighter text-2xl uppercase">
          Vankilapunk // VHL.001
        </h1>
        <div className="flex gap-4">
          <Activity size={20} className="animate-pulse text-prison-grey" />
          <span className="font-mono text-sm uppercase opacity-70">Sector: Online</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 md:p-12">
        {/* Sample "Case File" Blog Post */}
        <article className="border-2 border-prison-lead bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
          <div className="bg-prison-grey p-2 border-b-2 border-prison-lead flex justify-between font-mono text-xs uppercase">
            <span>Entry ID: 7708CD</span>
            <span className="flex items-center gap-1 text-prison-maroon">
              <ShieldAlert size={14} /> High Priority
            </span>
          </div>
          
          <div className="p-8 prose prose-slate max-w-none">
            <h2 className="font-mono text-3xl font-black uppercase text-prison-lead mb-4">
              The Normality Philosophy
            </h2>
            <p className="text-lg leading-relaxed text-prison-lead">
              Finnish prison design is based on the principle of <strong>normality</strong>. 
              The surroundings should resemble life outside as much as possible. 
              This blog explores how that aesthetic—specifically the VHL-standard 
              grey and maroon—can be translated into a digital experience.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;