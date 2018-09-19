const express = require('express');
const app = express();


app.use(express.static('clinet/public'))
app.get('/', function(request, response){
  response.sendFile('index.html', {root: './client/views'})
})

app.listen(1337,() => console.log("this is working"));
