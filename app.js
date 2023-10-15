const express = require('express');
const bodyParser = require('body-parser');
const studentsRoutes = require('./routes/studentsRoutes');
const worksRoutes = require('./routes/worksRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/students', studentsRoutes);
app.use('/works', worksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
