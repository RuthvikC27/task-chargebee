import React, { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Button
} from '@material-ui/core';
import Helmet from 'react-helmet';
import { useHistory } from 'react-router-dom';
import fire from '../firebase/fire';
import axios from 'axios';

import useStyles from './styles';



const Landing = () => {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState();

    const [body, setBody] = useState("");

    const [bodyError, setBodyError] = useState("");

    const [data, setData] = useState();

    const handleLogout = () => {
        localStorage.removeItem("user");
        fire.auth().signOut();
        history.push("/user");
    }

    useEffect(() => {
        const user = localStorage.getItem('user');
        // console.log(user)
        if (!user) {
            localStorage.removeItem('user');
            history.push("/user");
        } else {
            setEmail(user);
        }
    }, [history])

    const onSubmit = (e) => {
        e.preventDefault();
        setBodyError("");

        if (body === "") {
            setBodyError("Body cannot be null");
            return false;
        }

        axios.post("/api/message/sendmessage", {
            body,
        }).then(res => {
            // console.log(res.data);
            setData(res.data.message);
        })
            .catch(err => {
                // console.log(err.res.data);
                setData("Something went wrong!");
            })
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Send message</title>
            </Helmet>
            <Grid container
                className={classes.root}
                justify="space-between">
                <Grid container item xs
                    justify="space-evenly">
                    <Typography variant="overline">Welcome {email}</Typography>
                    <Button variant="contained"
                        onClick={() => history.push("/user")}
                        color="secondary">Home</Button>
                </Grid>
                <Grid container item
                    justify="flex-end"
                    xs>
                    <Button variant="contained"
                        color="primary"
                        onClick={handleLogout}>Logout</Button>

                </Grid>
            </Grid>

            <Grid container
                justify="center"
                className={classes.mainHeading}>
                <Grid item>
                    <Typography variant="h3">
                        Send message to WhatsApp number
                    </Typography>
                </Grid>
            </Grid>

            {
                data && <Grid container item
                    className={classes.displayData}
                    direction="row"
                    justify="space-between">
                    <Grid item>
                        <Typography variant="body1">
                            {data}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.closeButton}
                            onClick={() => setData(null)}>x</Typography>
                    </Grid>
                </Grid>
            }

            <Grid container
                justify="center">
                <form>
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <Grid item>
                            {/* <AccountCircle /> */}
                            <input type="text"
                                className={classes.inputs}
                                autoFocus={true}
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                                placeholder="Enter message" />
                        </Grid>
                        <Grid item>
                            <p className={classes.errorMessages}>{bodyError}</p>
                        </Grid>

                        <Grid item>
                            <button type="submit"
                                onClick={onSubmit}
                                className={classes.buttonsVoilet}>Send message</button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </React.Fragment>
    );
};

export default Landing;