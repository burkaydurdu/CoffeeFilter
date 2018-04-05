// app-server.js
import React from 'react'
import { match, RoutingContext } from 'react-router'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import expressReactView from 'express-react-views'

import user from './db/api/methods'

// user.user_created({
//     username: 'engineer',
//     email: ['burkaydurdu@outlook.com'],
//     password: '1412hh52',
//     name:'burkay durdu'
// });

const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactView.createEngine());
app.use('/', express.static(__dirname + '/public/'));
app.set('port', (process.env.PORT || 3000));

app.get('*', (req, res) => {
    res.render('pages/login', {name: 'burkay'});
});
app.listen(app.get('port'))

console.info('==> Server is listening in ' + process.env.NODE_ENV + 'mode');
console.info('==> Go to http://localhost:%s', app.get('port'));
