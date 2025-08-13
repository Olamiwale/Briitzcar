const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'worker-service' });
});

app.listen(3000, () => {
  console.log('Users service running on port 3000');
});
