const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // allow frontend access
app.use(express.json()); // parse JSON body

// Routes
app.get('/', (req, res) => {
  res.send('Express server is running!');
});

app.get('/donations', (req, res) => {
  res.json({ totalDonation: 123 });
});
app.get('/intern', (req, res) => {
  res.json({ name: "vanshika",
    referralCode: 'INT-ARV2025' });
   });
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
