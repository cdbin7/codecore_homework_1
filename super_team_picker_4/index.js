const express = require('express');
const app = express();

const path = require('path')
app.use(express.static(path.join(__dirname, 'public'))) //http://localhost:3000/public

const methodOverride = require('method-override');

const logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}))

app.use(methodOverride((req, res)=> {
  if(req.body && req.body._method) {
    const method = req.body._method;
    return method;
  }
}))

const cohortRouter = require('./routes/cohorts');
app.use('/cohorts', cohortRouter);

const PORT = 5000;
const DOMAIN = 'localhost';

app.listen(PORT, DOMAIN, () => {
  console.log(`Server listening on http://${DOMAIN}:${PORT}`);
})