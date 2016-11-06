const express = require('express');
const app = express();

app.use(express.static('bin/public'));
app.use(express.static('static'));

app.use('/api', require('./server'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
