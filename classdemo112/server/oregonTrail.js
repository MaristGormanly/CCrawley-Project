const express = require('express');
const app = express();

app.use(express.static('client/public'))

var topTen = require('./controllers/topTenController');
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

app.route('/api/topTen')
  .get(topTen.getCurrentScores)

/*app.route('/api/setup/profession')
  .post(setup.getProfession)

app.route('/api/setup/player')
  .get(setup.getAllPlayerNames)
  .post(setup.savePLayerName)

app.route('/api/setup/player/:id')
  .get(setup.getAllPlayerNames)
  .post(setup.savePLayerName)

app.route('/api/setup/month')
  .post(setup.getStartMonth)*/

var gameCont = require('./controllers/gameController');

app.route('/api/gameCont/nextday')
  .get(gameCont.updateGame)

app.route('/api/gameCont/reset')
  .post(gameCont.resetGame)

var getPaces = require('./models/pace');
app.route('/api/gameCont/getAllPaces')
  .get(getPaces.getAllPaces)

app.route('/api/gameCont/getAllPaces/:id')
  .post(getPaces.getAllPaces)

app.listen(1337,() => console.log("this is working"));
