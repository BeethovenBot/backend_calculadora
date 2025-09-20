const express = require('express');
const {urlencoded, json} = require('express');
const router = require('./routes/calculadora.routes.js');
const routerApi = require('./routes/routesApi.js');
const cors = require('cors');

const app = express();

app.use(urlencoded({extended: true}));
app.use(json());
app.use(cors());

app.use('/v1/calculadora', router);
app.use('/api', routerApi);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok-ok-Funciona nando XXX', service: 'calculadora-api', time: new Date().toISOString() });
});

app.listen(3500, ()=>{
    console.log("Listening at port 3500");
})