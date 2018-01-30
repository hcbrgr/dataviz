const Instagram = require('node-instagram').default;

// Create a new instance.
const instagram = new Instagram({
  clientId: ' 40918c9d033b4589b849b35c3f56d03d',
  clientSecret: ' d633cc1333f141f692267e57359f71b7',
  accessToken: '522066540.1677ed0.1c34121592054c70b3c419646200de4f',
});

// You can use callbacks or promises
instagram.get('users/self', (err, data) => {
  if (err) {
    // an error occured
    console.log(err);
  } else {
    console.log(data);
  }
});

// Get information about the owner of the access_token.
const data = await instagram.get('users/self');
console.log(data);

// Handle errors
instagram.get('tags/paris').then((data) => {
  console.log(data);
}).catch((err) => {
  // An error occured
  console.log(err);
});

console.log('Ready');
