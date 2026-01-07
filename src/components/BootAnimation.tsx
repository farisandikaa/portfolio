"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PCScene from "./PCScene";
import TerminalBoot from "./TerminalBoot";

export default function RetroBootAnimation({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<"scene" | "boot" | "content">("scene");

  useEffect(() => {
    
    const t1 = setTimeout(() => {
      setPhase("boot");
    }, 9000);

    const t2 = setTimeout(() => {
      setPhase("content");
      onComplete?.();
    }, 12000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <section className="fixed inset-0 z-50">

      {phase === "scene" && (
        <motion.div className="absolute inset-0 bg-black">
          <PCScene />
        </motion.div>
      )}

      {phase === "boot" && (
        <motion.div className="absolute inset-0 bg-black flex items-center justify-center font-mono text-green-500">
          <div className="w-[90%] max-w-2xl text-sm leading-relaxed">
            <TerminalBoot />
          </div>
        </motion.div>
      )}

      {phase === "content" && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

    </section>
  );
}