const admin = require('firebase-admin');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var serviceAccount = require("./permissions/firebase-permission.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://wamessages-a9e58.firebaseio.com"
});

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Serve up static assets (Usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/dist"));

  // Handles any requests that don't match the ones above
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
  });
}

// ROUTERS
const messageRouter = require("./src/routes/messages");
const authRouter = require("./src/routes/auth");

// ROUTES
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

// Export the api to firebase cloud functions
// exports.app = functions.https.onRequest(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`)
})