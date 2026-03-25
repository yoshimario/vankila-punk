import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, ShieldAlert, Zap } from "lucide-react";

export function SystemLogTicker({ isDarkMode }: { isDarkMode: boolean }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isAlertActive, setIsAlertActive] = useState(false);

  // 1. THE CLOCK HEARTBEAT
  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  // 2. THE RED ALERT TIMER (60 Seconds)
  useEffect(() => {
    let alertTimer: ReturnType<typeof setTimeout>;

    if (isDarkMode) {
      // Trigger breach after 60 seconds of darkness
      alertTimer = setTimeout(() => setIsAlertActive(true), 60000);
    } else {
      // Reset immediately when light returns
      setIsAlertActive(false);
    }

    return () => clearTimeout(alertTimer);
  }, [isDarkMode]);

const standardLogs = [
  "UNIT_666_STATUS: COMPLIANT",
  "OXYGEN_RECYCLER: RHYTHMIC",
  "BIRCH_SURFACE_INTEGRITY: 99.4%",
  "OVERSIGHT_IS_GIFT",
  "REMEMBER: NOISE_IS_THE_SIGNAL",
  "COBALT_SYNC_STABLE"
];

const breachLogs = [
  "THE_CONCRETE_IS_BREATHING",
  "HEARTBEAT_OVERRIDDEN_BY_OVERSIGHT",
  "BIRCH_GRAIN_BLEEDING_COBALT",
  "VOID_SCAN: SUBJECT_NOT_FOUND",
  "CITIZEN_REMAINDER: ZERO",
  "THE_BUNKER_HAS_NO_EXIT",
  "REDACTION_IS_MERCY",
  "PULSE_IRREGULAR // LOG_FAILED"
];
  const currentLogs = isAlertActive ? breachLogs : standardLogs;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-14 border-t-4 flex items-center overflow-hidden z-[500] transition-colors duration-500 
      ${isAlertActive ? "bg-red-950 border-red-500 animate-pulse" : "bg-black border-cell-mustard"}`}
    >
      {/* CLOCK BLOCK */}
      <div
        className={`h-full px-6 flex items-center gap-3 font-mono text-xs font-black z-20 shadow-[10px_0_20px_rgba(0,0,0,0.4)] whitespace-nowrap transition-colors
        ${isAlertActive ? "bg-red-600 text-white" : "bg-cell-mustard text-black"}`}
      >
        {isAlertActive ? (
          <ShieldAlert size={16} className="animate-spin" />
        ) : (
          <Clock size={16} />
        )}
        <span className="tabular-nums tracking-tighter text-sm">{time}</span>
      </div>

      {/* LOG STREAM */}
      <div className="flex-1 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 items-center px-10"
        >
          {[...currentLogs, ...currentLogs].map((log, i) => (
            <span
              key={i}
              className={`font-mono text-[10px] uppercase font-black tracking-[0.3em] transition-colors
              ${isAlertActive ? "text-red-500" : "text-white/40"}`}
            >
              {log}{" "}
              <span
                className={isAlertActive ? "text-white" : "text-cell-mustard"}
              >
                {" "}
                //{" "}
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* STATUS TAG */}
      <div className="hidden md:flex h-full px-6 items-center bg-white/5 border-l border-white/10 font-mono text-[9px] uppercase tracking-widest text-white/20">
        {isAlertActive ? "PROTOCOL: RED_REDACTION" : "STATUS: ENCRYPTED"}
      </div>
    </div>
  );
}
