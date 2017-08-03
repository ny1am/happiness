const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname + '/public/img/favicon.ico')));

app.get('/', function(request, response) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
