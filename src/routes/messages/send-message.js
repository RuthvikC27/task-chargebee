module.exports = (req, res, next) => {
    const { email, body, to } = req.body;
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // and set the environment variables. See http://twil.io/secure
    const accountSid = '';
    const authToken = '';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: body,
            to: `whatsapp:${to}`
        })
        .then(message => {
            // console.log(message.sid);
            return res.status(200).send({message: `message successfully sent`})
        })
        .catch(err => {
            return res.status(400).send({error: "something went wrong"})
        })
}