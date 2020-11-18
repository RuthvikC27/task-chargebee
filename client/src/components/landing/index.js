import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
    Button
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: "80%",
        margin: "auto",
        padding: 10,
    }
})

const Landing = ({ handleLogout, user }) => {
    const classes = useStyles();
    const history = useHistory();
    
    return (
        <Grid container
            className={classes.root}
            justify="space-between">
            <Grid container item xs
                justify="space-evenly">
                <Typography variant="overline">Welcome {user}</Typography>
                <Button variant="contained"
                onClick={() => history.push("/user/message")}
                    color="secondary">Send Message</Button>
            </Grid>
            <Grid container item
                justify="flex-end"
                xs>
                <Button variant="contained"
                    color="primary"
                    onClick={handleLogout}>Logout</Button>

            </Grid>
        </Grid>
    );
};

export default Landing;