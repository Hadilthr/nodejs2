const express = require('express');
const app = express();
const responseRouter = require('./routes/response');
const tryRouter = require('./routes/try');
const mainrouter = require('./routes/main');
const port = 3000;


app.use('/api/v1', responseRouter);
app.use('/try', tryRouter);
app.use('/main', mainrouter);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});