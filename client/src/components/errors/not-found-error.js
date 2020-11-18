import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import notFoundImg from './404-not-found.png';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#00CD98",
        height: 665
    }
});

const NotFoundError = () => {
    const classes = useStyles();

    return (
        <Grid container
            className={classes.root}
            direction="column"
            justify="center"
            alignContent="center">
            <Grid item>
                <img src={notFoundImg} alt="not found" height="500" width="680" />
            </Grid>
        </Grid>
    );
};

export default NotFoundError;