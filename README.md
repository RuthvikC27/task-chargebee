# Getting started
> Create firebase-permission.json in permissions folder.
### Sample type:
```
{
  "type": "service_account",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
```
> Create fire.js in client/src/components/firebase/ folder.
### Sample type:
```
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase;
```


# Technologies used -
1. ReactJS (Webpack)
1. Material-ui (CSS)
1. NodeJS/ExpressJS
1. Firebase database, firestore, and authentication.
1. Twilio - a message sending package.

# Backend -
### Created two api's
1. /api/auth/login - handles storing user token, email, and password after firebase createUserWithEmailAndPassword authentication.
1. /api/message/sendmessage - handles send message to user using twilio package.

# Frontend -
1. It consists of just four routes. A homepage, authentication page, landing page(after signed in) and message page(where user can send message) and also an 404 error page if url doesn't exist.
1. User can be sign up using email and password or google authentication. Also sign in by the same process.

### As time was little I could not style the entire homepage.

# Deployed to https://protected-island-81932.herokuapp.com/ -->


<!-- # Task

Congratulations on clearing round 1 of of internship selection process at WAMessages, a project under Closer Innovation Labs LLP.
This is the 2nd round of selection post which 5 candidates will be invited for a face to fcae interview over Google Meet with the Technical Lead and Product Manager working on this project. 
The aim of the assignment is to give you a small trailor of what you'll be working on if selected for the internship.
**The round 2 take home assignment details are as follows -**
1. A landing page and a login page using React and Material UI library similar to this website  -https://www.chargebee.com
1. In the landing page, make a login button, and after clicking on the button, a login page should open. The design for login page can be basic. The login page will have login through Gmail using Google OAuth and should work in firebase with a user created in NODE backend.
1. You’ll need to make a free account in Twilio to get access to for next task - https://www.twilio.com
1. A  button in nav bar which leads to a different page where user can type a message and send the message to the number which is registered in twilio sandbox. 
	a)	The number can be registered to Twlio SandBox using https://www.twilio.com/console/sms/whatsapp/senders
	b)	To send messages using NODE backend you can see this doc https://www.twilio.com/docs/whatsapp/api
1. Upload the code on your Github along with hosted project (You can use Netlify/heroku for hosting) and share the links of both- The code on GitHub and the hosted project, with us before 18th of November 11 59 pm.
Notes - Please write clean code with proper comments.
																																																
> You can find attached document to send whatstapp message to the registered user at https://www.twilio.com/docs/whatsapp/api

In case of any queries please mail us at support@wamessages.com

<!-- Typosource00100 -->

> Please note that the first point in the assignment means that you've to code the landing page of the website exactly. This will test your front end skills. 

> Just the login button will work, rest all buttons are dummy. You can download the images from the given website whenever needed but rest all of the components need to be coded in React using Material UI library.
