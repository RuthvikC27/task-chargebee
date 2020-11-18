import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Grid,
    Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        padding: 15,
        backgroundColor: "#F0F5F9"
    },
    navButtons: {
        textDecoration: 'none',
        color: 'black',
    },
    activeNav: {
        fontWeight: 600,
        color: 'red',
    },
    leftSide: {

    },
    textClass: {
        color: 'inherit',
        padding: 5,
        fontWeight: 600,
        fontSize: 15,
    },
    buttonClass: {
        backgroundColor: "#FF7846",
        color: "white",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: 500,
        fontSize: 14,
    }
});

const Index = () => {
    const classes = useStyles();

    const links = [
        {
            name: "Brand",
            href: "/",
            side: "left",
            activeNavClass: classes.activeNav,
            variant: "subtitle1",
            component: "h5",
            CSSClass: classes.textClass,
            type: "text"
        },
        {
            name: "Product",
            href: "/product",
            side: "left",
            activeNavClass: classes.activeNav,
            variant: "subtitle1",
            component: "h5",
            CSSClass: classes.textClass,
            type: "text"
        },
        {
            name: "Pricing",
            href: "/pricing",
            side: "left",
            activeNavClass: classes.activeNav,
            variant: "subtitle1",
            component: "h5",
            CSSClass: classes.textClass,
            type: "text"
        },
        {
            name: "Solutions",
            href: "/solutions",
            side: "left",
            activeNavClass: classes.activeNav,
            variant: "subtitle1",
            component: "h5",
            CSSClass: classes.textClass,
            type: "text"
        },
        {
            name: "Customers",
            href: "/customers",
            side: "left",
            activeNavClass: classes.activeNav,
            variant: "subtitle1",
            component: "h5",
            CSSClass: classes.textClass,
            type: "text"
        },
        {
            name: "Resources",
            href: "/resources",
            side: "left",
            activeNavClass: classes.activeNav,
            variant: "subtitle1",
            component: "h5",
            CSSClass: classes.textClass,
            type: "text"
        },
        {
            name: "Login >",
            href: "/user",
            side: "right",
            activeNavClass: classes.activeNav,
            variant: "subtitle1",
            component: "h5",
            CSSClass: classes.textClass,
            type: "text"
        },
        {
            name: "Schedule a demo >",
            href: "/demo",
            side: "right",
            activeNavClass: classes.activeNav,
            variant: "button",
            component: "h5",
            CSSClass: classes.buttonClass,
            type: "button"
        }
    ]

    const generateLinks = (side) => {
        return links.filter((link) => {
            return link.side === side
        }).map((link, index) => {
            return <Grid item key={index}>
                <NavLink to={link.href}
                    className={classes.navButtons}
                    activeClassName={link.activeNavClass}>
                    <Typography variant={link.variant} component={link.component}
                        className={link.CSSClass}>
                        {link.name}
                    </Typography>
                </NavLink>
            </Grid>
        })
    }

    return (
        <Grid container
            className={classes.root}
            direction="row"
            justify="space-around"
            alignItems="center">
            <Grid container item
                className={classes.leftSide}
                xs={6}
                spacing={1}
                direction="row"
                justify="space-evenly"
                alignItems="center">
                {
                    generateLinks("left")
                }
            </Grid>
            <Grid container item
                xs={6}
                spacing={6}
                direction="row"
                justify="flex-end"
                alignItems="center">
                {
                    generateLinks("right")
                }
            </Grid>
        </Grid>
    );
};

export default Index;