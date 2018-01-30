const express = require('express');
const jquery = require('jquery');
const Instagram = require('node-instagram').default;

// Create a new instance.
const instagram = new Instagram({
  clientId: ' 40918c9d033b4589b849b35c3f56d03d',
  clientSecret: ' d633cc1333f141f692267e57359f71b7',
  accessToken: '522066540.1677ed0.1c34121592054c70b3c419646200de4f',
});

// const redirectUri = 'http://localhost:3000/auth/instagram/callback';

// create express server
const app = express();

app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname } );
});

// Handle auth code and get access_token for user
app.get('/auth/instagram/callback', async (req, res) => {
    const data = await instagram.get('users/self');
    res.json(data);
});

// listen to port 3000
app.listen(3000, () => {
  console.log('app listening on http://localhost:3000');
});