const router = require('express').Router();
const four0four = require('./utils/404')();

// router.get('/people', getPeople);
// router.get('/person/:id', getPerson);
router.get('/*', four0four.notFoundMiddleware);
router.post('/authenticate', authenticate);

module.exports = router;

//////////////

console.log('helo');

function authenticate(req, res, next){
  console.log(req.body);
  console.log('someone accessed this endpoint');
  if(req.body.username 
      && req.body.password
      && req.body.username === 'John Doe'
      && req.body.password === 'password'){
        console.log(req);
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        const currentPath = process.cwd();
        res.status(200).send({
          date: datetime,
          message: 'Welcome ' + req.body.username,
          path: currentPath
        })
  } 
  else {
    console.log(req);
    res.status(400).send({
      success: 'false',
      message: req.body
    });
  }
}
