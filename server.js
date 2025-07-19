const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/generate', async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  // Fake AI logic for now
  const ideas = `1. AI-powered ${topic} assistant\n2. ${topic} automation tool\n3. ${topic} prediction model`;
  res.json({ ideas });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
