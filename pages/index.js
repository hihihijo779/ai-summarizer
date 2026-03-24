import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Summarizer</h1>

      <textarea
        rows="10"
        style={{ width: "100%" }}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSummarize}>
        تلخيص
      </button>

      <p>{summary}</p>
    </div>
  );
}
