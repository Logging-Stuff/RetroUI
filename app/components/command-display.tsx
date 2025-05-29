import { ClipboardIcon, CheckIcon } from "lucide-react";
import { useState } from "react";

interface CommandDisplayProps {
  command: string;
}

export function CommandDisplay({ command }: CommandDisplayProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group flex items-center bg-black/90 rounded-lg px-4 py-2 font-mono text-sm">
      <div className="flex-1 text-primary">
        <span className="text-blue-400">npx</span>{" "}
        <span className="text-yellow-400">shadcn@latest</span>{" "}
        <span className="text-green-400">add</span>{" "}
        <span className="text-purple-400">
          "https://retroui.dev/r/button.json"
        </span>
      </div>
      <button
        onClick={copyToClipboard}
        className="ml-2 p-1 text-gray-400 hover:text-white transition-colors"
        aria-label="Copy command"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-green-400" />
        ) : (
          <ClipboardIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
