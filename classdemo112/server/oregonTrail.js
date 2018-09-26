const express = require('express');
const app = express();

app.use(express.static('client/public'))

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './client/views'})
})

app.get('/index.html', function(request, response){
  response.sendFile('index.html', {root: './client/views'})
})

app.get('/mainmenu.html', function(request,response){
  response.sendFile('mainmenu.html', {root: './client/views'})
})

app.get('/setup.html', function(request,response){
  response.sendFile('setup.html', {root: './client/views'})
})

app.get('/topten.html', function(request,response){
  response.sendFile('topten.html', {root: './client/views'})
})

app.get('/trail.html', function(request,response){
  response.sendFile('trail.html', {root: './client/views'})
})

app.listen(1337,() => console.log("this is working"));
