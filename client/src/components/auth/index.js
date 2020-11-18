import React, { useState, useEffect } from 'react';
import fire from "../firebase/fire";
import Landing from '../landing';
import Fields from './fields';
import useStyles from './styles';
import axios from 'axios';

// import { AccountCircle } from '@material-ui/icons';

const Index = () => {
    const classes = useStyles();
    const [user, setUser] = useState();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(true);
    const [loading, setLoading] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const onSetEmail = (e) => {
        setEmail(e.target.value);
    }


    const onSetPassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        clearErrors();
        // console.log(email, password)
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default:

                }
            })
    }

    const onSubmitSignUp = (e) => {
        clearErrors();
        // console.log(email, password)
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((token) => {
                console.log(token);
                axios.post("/api/auth/login", { email, token, password})
            })
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                    default:
                }
            })
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        fire.auth().signOut();
    }

    const onSetHasAccount = () => {
        clearErrors();
        clearInputs();
        if (hasAccount === true) {
            setHasAccount(false);
        } else {
            setHasAccount(true);
        }
    }

    useEffect(() => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user.email);
            } else {
                setUser('');
            }
        })
    }, [])

    const googleAuthSignUp = () => {
        setLoading(true);
        const provider = new fire.auth.GoogleAuthProvider();

        fire.auth().signInWithPopup(provider).then((res) => {
            setUser(res.user.email);
            setLoading(false);
        }).catch((error) => {
            console.log(error.message)
        })

    }

    const googleAuthSignIn = () => {
        setLoading(true);
        const provider = new fire.auth.GoogleAuthProvider();

        fire.auth().signInWithRedirect(provider).then((res) => {
            setUser(res.user.email);
            setLoading(false);
        }).catch((error) => {
            console.log(error.message)
        });
    }

    if(user){
        localStorage.setItem("user", user);
    }

    return (
        <React.Fragment>
            {/* {
                loading && <img src="/loading.svg" alt="loading"/>
            } */}

            {
                user ? (<Landing handleLogout={handleLogout}
                    user={user} />) : (
                    <Fields classes={classes}
                        loading={loading}
                        onSetEmail={onSetEmail}
                        email={email}
                        emailError={emailError}
                        onSetPassword={onSetPassword}
                        password={password}
                        passwordError={passwordError}
                        handleLogin={handleLogin}
                        onSubmitSignUp={onSubmitSignUp}
                        onSetHasAccount={onSetHasAccount}
                        googleAuthSignUp={googleAuthSignUp}
                        googleAuthSignIn={googleAuthSignIn}
                        hasAccount={hasAccount} />
                )
            }
        </ React.Fragment>

    );
};

export default Index; 