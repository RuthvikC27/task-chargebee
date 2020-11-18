import React from 'react';

import {
    Grid,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: 90,
        paddingLeft: 180,
        paddingRight: 250,
        backgroundImage: "linear-gradient(#F0F6F9, white)",
    },
    footerChild: {
        color: "blue",
        padding: 1,
        marginTop: 2,
        cursor: "pointer"
    },
    footerParent: {
        color: "black",
        padding: 1,
        fontWeight: 600,
    },
    childs: {
        marginTop: 10,
    }
});

const Footer = () => {
    const classes = useStyles();

    const elements = {
        "Product": [
            "Subscription Management",
            "Recurring Billing and Invoicing",
            "Recurring Payments",
            "Accounting and Taxes",
            "SaaS Reporting",
            "Enterprise Billing",
            "Integrations",
        ],
        "Help & Support": [
            "Security",
            "FAQs",
            "Status",
            "Product Documentation",
            "API Documentation",
            "Supported Payment Gateways",
            "Sitemap",
        ],
        "Resources": [
            "Blog",
            "Compare Payment Gateways",
            "Tackling Payment Failures",
            "Enterprise Billing Guide",
            "Webinars",
            "Glossaries",
        ],
        "Company": [
            "Customers",
            "Partners",
            "Careers",
            "Press",
            "Terms",
            "Privacy",
        ]
    };

    const keys = Object.keys(elements);

    return (
        <Grid container
            className={classes.root}
            direction="row"
            alignContent="center"
            justify="center">
            {/* <Grid container item
                alignContent="center"
                direction="column"
                xs>
                <Typography variant="h6">Product</Typography>
                <Typography variant="subtitle2">Subscription Management</Typography>
                <Typography variant="subtitle2">Recurring Billing and Invoicing</Typography>
                <Typography variant="subtitle2">Recurring Payments</Typography>
                <Typography variant="subtitle2">Accounting and Taxes</Typography>
                <Typography variant="subtitle2">SaaS Reporting</Typography>
                <Typography variant="subtitle2">Enterprise Billing</Typography>
                <Typography variant="subtitle2">Integrations</Typography>
            </Grid> */}


            {
                keys && keys.map((val, key) => {
                    return <Grid container item
                        alignContent="center"
                        key={key}
                        direction="column"
                        xs>
                        <Typography className={classes.footerParent} 
                        variant="body1">{val} &gt;</Typography>
                        <Grid item className={classes.childs}>
                        {
                            elements[val].map((element, index) => {
                                return <Typography key={index} variant="subtitle2" className={classes.footerChild}>
                                    {element}
                                </Typography>
                            })
                        }
                        </Grid>
                    </Grid>
                })
            }

        </Grid>
    );
};

export default Footer;

