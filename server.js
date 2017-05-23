var express = require('express')

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use((request, response, next) => {
  if (request.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    response.redirect('http://' + request.hostname + request.url);
  }
});

app.listen(PORT, () => {
  console.log('Express server is running on port ' + PORT);
});
