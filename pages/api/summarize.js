export default async function handler(req, res) {
  const { text } = req.body;
  Authorization: `Bearer ${process.env.HF_API_KEY}`

  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: text }),
    }
  );

  const data = await response.json();

  res.status(200).json({
    summary: data[0]?.summary_text || "لا يوجد ملخص",
  });
}
