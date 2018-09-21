const express = require('express');
const app = express();

app.use(express.static('client/public'))

app.get('/', function(request, response){
  response.sendFile('index', {root: './client/views'})
})

app.get('/mainmenu', function(request,response){
  response.sendFile('mainmenu', {root: './client/views'})
})

app.get('/setup', function(request,response){
  response.sendFile('setup', {root: './client/views'})
})

app.get('/topten', function(request,response){
  response.sendFile('topten', {root: './client/views'})
})

app.get('/trail', function(request,response){
  response.sendFile('trail', {root: './client/views'})
})

app.listen(1337,() => console.log("this is working"));
