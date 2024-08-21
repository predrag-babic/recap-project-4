import { useEffect, useState } from "react";

export default function CopyToClipboard({ hex }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyToClipboard() {
    try {
      await navigator.clipboard.writeText(hex);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy!", error);
    }
  }

  useEffect(() => {
    if (isCopied) {
      const timer = setInterval(() => setIsCopied(false), 3000);
      return () => clearInterval(timer);
    }
  }, [isCopied]);

  return (
    <button onClick={handleCopyToClipboard}>
      {isCopied ? "SUCCESSFULLY COPIED!" : "COPY"}
    </button>
  );
}
