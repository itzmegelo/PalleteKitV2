import React, { useState } from "react";
import { Copy } from "lucide-react";
function ColorBox({ color }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="relative flex-1 group cursor-pointer transition-transform"
      style={{ backgroundColor: color }}
      onClick={handleCopy}
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-white font-semibold text-sm mb-1">{color}</p>
        <Copy className="w-4 h-4 text-white" />
        {copied && (
          <span className="absolute bottom-2 text-xs text-green-400 font-medium">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}

export default ColorBox;