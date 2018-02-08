var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
app.get('/', function(req, res){
  request('https://www.bit-z.com/api_v1/tickerall', function(error, response, body){
    if (!error && response.statusCode == 200) {
      // $ = cheerio.load(body);
      console.log(JSON.parse(body.xas_btc));
      let a = JSON.parse(body);
      res.send(a);
    }
  })
})

app.listen(3000);