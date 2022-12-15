const http = require('http');
const express = require('express');
const path = require('path');
const { channel } = require('diagnostics_channel');
const app = express();
const hbs = require("hbs");

const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../templates/views/');
const partialPath = path.join(__dirname,'../templates/partials');

//Set the view engine
app.set("view engine", "hbs");
app.set("views",templatePath);
app.registerPartials(partialPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index", {
        myName:"Gomes"
    });
});

app.get("/band", (req, res) => {
    res.render("band");
});

app.get("/tour", (req, res) => {
    res.render("tour");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("*", (req, res) => {
    res.render("404",{
        errorComment:'This page does not exist',
    });
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html')
        );
});


const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening to port' + port);