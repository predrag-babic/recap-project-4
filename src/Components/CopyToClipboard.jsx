import { useState } from "react";

export default function CopyToClipboard({ hex }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyToClipboard() {
    try {
      await navigator.clipboard.writeText(hex);
    } catch (error) {
      console.error("Failed to copy!", error);
    }
  }
}
