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

var topTen = require('./controllers/topTenController');

app.route('/api/topTen')
  .get(topTen.getCurrentScores)

var setup = require('./controllers/setupController');
var getProf = ('./models/professions');
/*
app.route('/api/setup/getSetup')
  .get(setup.getSetup)
*/



app.route('/api/getSetupScreen/:id')
  .get(setup.getSetupScreen)

app.route('/api/getProf/profession')
  .get(setup.getProfession)

app.route('/api/getProf/profession/:id')
  .post(setup.getProfession)

app.route('/api/setup/player')
  .get(setup.getAllPlayerNames)

app.route('/api/setup/player/:name')
  .post(setup.getAllPlayerNames)

app.route('/api/setup/month')
  .get(setup.getStartMonth)

app.route('/api/setup/month/:id')
  .post(setup.getStartMonth)

var gameCont = require('./controllers/gameController');

app.route('/api/setup/getSetup')
  .get(gameCont.getGameData)

app.route('/api/gameCont/nextday')
  .get(gameCont.updateGame)

app.route('/api/gameCont/reset')
  .get(gameCont.resetGame)

app.route('/api/gameCont/hunt')
  .get(gameCont.hunt)

app.route('/api/gameCont/eat')
  .get(gameCont.eat)

var getPaces = require('./models/pace');

app.route('/api/getPaces/getAllPaces')
  .get(gameCont.getPace)

app.route('/api/getPaces/getAllPaces/:id')
  .post(gameCont.getPace)

app.listen(1337,() => console.log("this is working"));
