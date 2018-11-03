const express = require('express');
const app = express();

app.use(express.static('client/public'))

var topTen = require('./controllers/topTenController');
var gameData = require('./controllers/gameController');
var setup = require('./controllers/setupController');

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

app.route('/api/setup/profession'){
  .get(setup.getProfession)
  .post(setup.saveProfession)
}

app.route('/api/setup/player')
  .get(setup.getAllPlayerNames)
  .post(setup.savePLayerName)

app.route('/api/setup/player/:id')

app.route('/api/topTen')
  .get(topTen.getCurrentScores)
  .patch(topTen.updateUser)


//app.route('/api/gameData')
  //.get(gameData.setPace)
  //.post(gameData.updatePace)


app.listen(1337,() => console.log("this is working"));
