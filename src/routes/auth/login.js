const admin = require('firebase-admin');
const db = admin.firestore();


module.exports = (req, res) => {
    const {
        email,
        token,
        password
    } = req.body;
    // console.log(email,
    //     token.user.uid,
    //     password);

    (async () => {
        try {
            await db.collection('users').doc("/" + token.user.uid + "/")
                .create({
                    email,
                    password
                })

                console.log("saved");
            return res.status(200).send();
        } catch (err) {
            return res.status(400).send({
                error: err
            })
        }
    })()
}