import React from 'react';

import {
    Grid,
    Typography,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: 50,
        backgroundImage: "linear-gradient(#F0F6F9, white)",
    },
    heading1: {
        marginTop: 60,
        marginBottom: 25,
        padding: 40,
        paddingBottom: 0
    },
    textBig: {
        fontWeight: 600,
        color: 'black',
        lineHeight: 1.2,
        letterSpacing: 1.1,
        textAlign: "center"
    },
    textBigVoilet: {
        fontWeight: 600,
        color: "#500AD2",
        lineHeight: 1.2,
        letterSpacing: 1.1,
        fontSize: 44
    },

    heading2: {
        marginBottom: 20,
    },
    textSmall: {
        fontSize: 16,
        letterSpacing: 1.1,
        textAlign: 'center'
    },

    heading3: {

    },
    buttonClass: {
        padding: 15,
        margin: 20,
        marginBottom: 5,
        letterSpacing: 1.6,
    },
    buttonClassBlue: {
        // background: "#F6FAFC",
        padding: 15,
        margin: 20,
        marginBottom: 5,
        letterSpacing: 1.6,
    }

});

const MainOne = () => {
    const classes = useStyles();

    return (
        <Grid container
            className={classes.root}
            direction="column"
            alignItems="center"
            justify="center">
            <Grid item className={classes.heading1}>
                <Grid item>
                    <Typography className={classes.textBigVoilet}
                        variant="h3"
                        component="h3">
                        Subscription Billing & Revenue Operations
                </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h3"
                        className={classes.textBig}
                        component="h3">
                        for Fast-growth B2B SaaS
                </Typography>
                </Grid>
            </Grid>

            <Grid item
                className={classes.heading2}>
                <Grid item>
                    <Typography variant="subtitle2"
                        className={classes.textSmall}
                        component="h3">
                        Get the operational sophistication to achieve, sustain,
                </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2"
                        className={classes.textSmall}
                        component="h3">
                        and scale recurring revenue.
                </Typography>
                </Grid>
            </Grid>
            <Grid container item
                direction="row"
                className={classes.heading3}
                justify="center">
                <Button variant="contained"
                    className={classes.buttonClassBlue}
                    color="primary">
                    Schedule a Demo -&gt;
                </Button >
                <Button variant="contained"
                    className={classes.buttonClass}
                    color="default">
                    Sign up for free -&gt;
                </Button >
            </Grid>
        </Grid>
    );
};

export default MainOne;