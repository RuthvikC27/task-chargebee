import React from 'react';
import middleOne from './middleimageone.png';
import middleTwo from './middleimagetwo.png';
import {
    Grid,
} from '@material-ui/core';

const MainTwo = () => {
    return (
        <Grid container
            direction="column"
            justify="center"
            alignContent="center">
            <Grid item>
                <img src={middleOne} width="100%" height="100%" alt="sample1" />
            </Grid>
            <Grid item>
                <img src={middleTwo} width="100%" height="100%" alt="sample2" />
            </Grid>
        </Grid>
    );
};

export default MainTwo;