import { motion } from "framer-motion";
import { X, FileText, Lock } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "../PortableTextComponents";

export function FullscreenDossier({
  report,
  onClose,
}: {
  report: any;
  onClose: () => void;
}) {
  if (!report) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10005] bg-black/90 backdrop-blur-md flex flex-col p-4 md:p-12 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* HEADER: Always Black */}
        <div className="flex justify-between items-center bg-black p-6 mb-10 border-b-4 border-cell-mustard">
          <div className="flex items-center gap-6 text-white">
            <div className="bg-cell-mustard p-2 text-black">
              <FileText size={24} />
            </div>
            <h2 className="font-black text-2xl uppercase tracking-tighter">
              {report.title}
            </h2>
          </div>
          <button onClick={onClose} className="btn-close">
            <X size={32} strokeWidth={4} />
          </button>
        </div>

        {/* PANEL: Now uses var(--panel-bg) */}
        <div className="cell-panel">
          <div className="flex justify-between opacity-30 font-mono text-[9px] uppercase border-b border-black/10 pb-4 mb-10">
            <span className="flex items-center gap-2">
              <Lock size={12} /> Secure_Log_Node
            </span>
            <span>Ref_{report._id.slice(0, 8)}</span>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none text-inherit">
            <PortableText value={report.body} components={ptComponents} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
