const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

app.listen(3001, () => {
  console.log('✅ Server pornit pe http://localhost:3001');
});