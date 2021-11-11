const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT;
const answer = "orange";
const answer2 = "piano";


app.use(express.static('main'))

app.get('/answer', (req, res) => {
  let query = req.query;
  let guess = query.word;
  if(guess == answer){;
    res.redirect("/correct");
  }else{
    res.redirect("/incorrect");
  }
})

app.get('/answer2', (req, res) => {
  let query2 = req.query;
  let guess2 = query2.word;
  if(guess2 == answer2){
    res.redirect("/correct/goodjob/theend");
  }else{
    res.redirect("/correct/goodjob/tryagain");
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
