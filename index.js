const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


const apollo_leads = require('./apolloIO');
const linkedin_profiles = require('./profiles');
var fs = require('fs');

app.get('/apollo/search/leads', (req, res) => {
  res.send(apollo_leads);
});

app.get('/in/:id', (req, res) => {
  const { id } = req.params;
  var linkedin_profile = linkedin_profiles.filter((u) => u.id == id);
  res.send(linkedin_profile[0]);
});

app.listen(port, () => {
  console.log('App listening on Port ' + port);
});
