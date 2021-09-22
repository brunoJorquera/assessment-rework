const express = require("express");
const cors = require("cors");

const ctrl = require('./controllers/controller.js')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', ctrl.getFortune)
app.post('/api/fortune', ctrl.addFortune)

app.get('/api/phrase', ctrl.getPhrase)
app.post('/api/phrase', ctrl.addPhrase)

app.listen(4000, () => console.log("Server running on 4000"));
