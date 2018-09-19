const express = require('express');
const app = express();

app.get('/', function(request, response){res.sendFile('index.html', {root: ./client/views'})
})

app.listen(1337,() => console.log("this is working"));
