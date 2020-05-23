var faker = require('faker');
var fs = require('fs');
var express = require('express');
//// creates server
var app = express(); 
//// everytime take to this default page

app.use('/', express.static('com601'))
app.get('/',  function (req, res) {

fs.readFile('./com601/index.html', (err, data) => {
  if (err) throw err;
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
  console.log(data);
})
});

var bodyParser = require('body-parser');
var fs = require('fs');

var path = require('path');
app.use(bodyParser.urlencoded({
extended: false
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

fs.readFile('./com601/data.json', 'utf8', function(err, data) {
    if (err) {
        throw err;
    }
    quotes = JSON.parse(data); 
});


//// get table
app.get('/', function(req, res) {
res.sendFile(__dirname + "/index.html");
});
app.get('/table', function(req, res) {
console.log(quotes);
res.send(quotes);
});



////// add data

app.post('/postData', function(req, res) {
var key = req.body.key;
var value = req.body.value;
var streetAddress = req.body.streetAddress;
var city = req.body.city;
var country = req.body.country;
var zipCode = req.body.zipCode;
var email = req.body.email

console.log('Key = ' + key + ', Value = ' + value + ', streetAddress = ' + streetAddress + ', country = ' + country + ' city = ' + city + 'zipCode = ' + zipCode + 'email = ' + email);
var newQuote = {
    firstName: req.body.key,
    lastName: req.body.value,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    country: req.body.country,
    zipCode: req.body.zipCode,
    email: req.body.email
    
};
quotes.push(newQuote);
res.end('yes');
});




////// get data

app.get('/getData', function(req, res) {
res.json(quotes);
console.log(quotes);
res.end('yes');
});


    



var dataArray = [];

for (var i = 0; i < 25; i++) {
    var data = {};
    data.firstName = faker.name.firstName(); 
    data.lastName = faker.name.lastName();
    data.streetAddress = faker.address.streetAddress();
    data.country = faker.address.country();
    data.city = faker.address.city();
    data.zipCode = faker.address.zipCode();
    data.email = faker.internet.email();
    dataArray.push(data);
}

fs.writeFile('./com601/data.json', JSON.stringify(dataArray), (err) => {
    if (err) throw err;
    console.log('file created');
});

app.get('/data', function(req, res) {

    res.send(dataArray);
});

app.delete('/products/:id', function(req, res) {
    var id = req.params.id;

    dataArray.splice(id, 1);

    res.send('Successfully deleted contact!');
});




app.listen(1338)

