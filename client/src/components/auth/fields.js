import React from 'react';
import {
    Grid,
    Typography,
} from '@material-ui/core';
import Helmet from 'react-helmet';
import loadingImg from './loading.svg';

const Fields = (props) => {
    const {
        classes,
        onSetEmail,
        email,
        emailError,
        onSetPassword,
        password,
        passwordError,
        handleLogin,
        onSubmitSignUp,
        hasAccount,
        onSetHasAccount,
        googleAuthSignUp,
        googleAuthSignIn,
        loading
    } = props;

    return (
        <React.Fragment>
            {
                loading && <div align="center">
                    <img src={loadingImg} alt="loading" />
                </div>
            }

            {!loading &&
                <Grid container className={classes.root}>
                    <Grid container
                        item
                        direction="row"
                        className={classes.navigation}
                        justify="space-between">
                        <Grid container item xs>
                            <Typography>Chargebee</Typography>
                        </Grid>
                        <Grid container item xs
                            justify="flex-end">
                            <Grid item>
                                <Typography className={classes.italicText}>Welcome  to </Typography>
                            </Grid>
                            <Grid item>
                                <Typography> Chargebee&gt;</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container
                        item
                        direction="column"
                        alignItems="center"
                        className={classes.signin}>
                        <Grid container
                            item
                            direction="column"
                            justify="center"
                            alignItems="center">


                            {
                                hasAccount ? (
                                    <Grid item>
                                        <Helmet>
                                            <title>Sign in</title>
                                        </Helmet>
                                        <Typography variant="h5">
                                            Sign in
                            </Typography>
                                    </Grid>
                                ) : (
                                        <Grid item>
                                            <Helmet>
                                                <title>Sign up</title>
                                            </Helmet>
                                            <Typography variant="h5">
                                                Sign up
                                </Typography>
                                        </Grid>
                                    )
                            }

                            <Grid item>
                                {/* <AccountCircle /> */}
                                <input type="text"
                                    className={classes.inputs}
                                    autoFocus={true}
                                    onChange={onSetEmail}
                                    value={email}
                                    placeholder="name@company.com" />
                            </Grid>
                            <Grid item>
                                <p className={classes.errorMessages}>{emailError}</p>
                            </Grid>
                            <Grid item>
                                <input type="password"
                                    className={classes.inputs}
                                    onChange={onSetPassword}
                                    value={password}
                                    placeholder="password" />
                            </Grid>
                            <Grid item>
                                <p className={classes.errorMessages}>{passwordError}</p>
                            </Grid>
                            {
                                hasAccount ? (
                                    <Grid item>
                                        <button type="submit"
                                            onClick={handleLogin}
                                            className={classes.buttonsVoilet}>Signin</button>
                                    </Grid>
                                ) : (
                                        <Grid item>
                                            <button type="submit"
                                                onClick={onSubmitSignUp}
                                                className={classes.buttonsVoilet}>Signup</button>
                                        </Grid>
                                    )
                            }
                            {
                                hasAccount ? (
                                    <Grid item>
                                        <p className={classes.hasAccount}>not have an account? <span
                                            className={classes.clickAuth}
                                            onClick={onSetHasAccount}
                                        >Signup</span></p>
                                    </Grid>
                                ) : (
                                        <Grid item>
                                            <p className={classes.hasAccount}>have an account? <span
                                                className={classes.clickAuth}
                                                onClick={onSetHasAccount}
                                            >Signin</span></p>
                                        </Grid>
                                    )
                            }
                            <Grid>
                                <Typography className={classes.or}
                                    varaint="subtitle2">OR</Typography>
                            </Grid>
                        </Grid>
                        {
                            hasAccount ?
                                <Grid item>
                                    <button onClick={googleAuthSignIn} className={classes.buttons}>Signin with google</button>
                                </Grid>
                                :
                                <Grid item>
                                    <button onClick={googleAuthSignUp} className={classes.buttons}>Signup with google</button>
                                </Grid>
                        }

                    </Grid>
                </Grid>
            }
        </React.Fragment>
    );
};

export default Fields;