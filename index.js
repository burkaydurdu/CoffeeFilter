// app-server.js
import React from 'react'
import { match, RoutingContext } from 'react-router'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import expressReactView from 'express-react-views'
import bodyParser from 'body-parser'
import {router} from './router/router.js';

import user from './db/api/methods'

// user.user_created({
//     username: 'engineer',
//     email: ['burkaydurdu@outlook.com'],
//     password: '1412hh52',
//     name:'burkay durdu'
// });

const app = express();

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactView.createEngine());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public/'));
app.use('/', router);

app.listen(app.get('port'));

console.info('==> Server is listening in ' + process.env.NODE_ENV + 'mode');
console.info('==> Go to http://localhost:%s', app.get('port'));
