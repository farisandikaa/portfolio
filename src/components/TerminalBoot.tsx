import { useEffect, useState } from "react";

const lines = [
  "[ OK ] Initializing system kernel",
  "[ OK ] Loading device drivers",
  "[ OK ] Mounting file systems",
  "[ OK ] Starting network services",
  "[ OK ] Initializing GPU",
  "[ OK ] Starting display manager",
  " ",
  "Welcome to RetroOS 1.0",
  "Loading graphical interface..."
];

export default function TerminalBoot() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setVisibleLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    const cursorBlink = setInterval(() => {
      setCursor((c) => !c);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <div>
      {visibleLines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
      <div>
        {cursor ? "▮" : " "}
      </div>
    </div>
  );
}
