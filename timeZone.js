let moment = require('moment');
let fetch = require('node-fetch');
let fs = require('fs');
let Handlebars = require("handlebars");
let exphbs = require("express-handlebars")

// Node's standard path module
// See https://nodejs.org/api/path.html
let path = require('path');

// The Express web application framework
// See http://expressjs.com/
let express = require('express');

// Library for nicer logging of HTTP requests
// See https://github.com/expressjs/morgan
// let logger = require('morgan');

let app = express();
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.get('/',(req,res) => {
  res.render('main')
})

// Tell Express to load static files from the public/ directory
app.use(express.static(path.join(__dirname, 'public')));

// Tell Express to log HTTP requests in the 'dev' format
// See the Morgan documentation for what that looks like
// app.use(logger('dev'));

console.log(moment().format('LLL'))
console.log(moment().add(1, 'hours').format('LLL'))
console.log(moment().add(2, 'hours').format('LLL'))
console.log(moment().add(3, 'hours').format('LLL'))

function(input) {
  cityDict = {pacific: ['San Francisco', 'Los Angeles'], 'mountain':[], 'central':[], 'east':[]}
    if (input in cityDict.pacific) {
      moment().format('LLL')
      }
    }
// console.log(moment().subtract(4, 'hours'));
// fetch('https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=AIzaSyCvRhiyGbB6TRVzHjZMr595qWs7dMKg9zQ')
//   .then(function(response) {
//       console.log(response)
//         return;
//       })
      function getLayoutHTML(content) {
        // Template strings can span multiple lines, making them
        // well-suited for, well, acting as templates.
        let html = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <title>TimeZones!</title>

              <link rel="stylesheet" href="/css/main.css">
            </head>
            <body>
              <section id="content">
                {{{content}}}
              </section>
            </body>
          </html>
        `;

        return html;
      }
