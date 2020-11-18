import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "80%",
        margin: "auto",
        padding: 10,
    },

    signin: {
        padding: 50,
        backgroundColor: "white",
        width: "50%",
        margin: "auto",
        borderRadius: 10,
        height: 600
    },
    inputs: {
        padding: 15,
        width: 300,
        marginTop: 30
    },
    buttons: {
        backgroundColor: "#C51162",
        marginTop: 30,
        cursor: "pointer",
        border: 0,
        color: "white",
        padding: 15,
        borderRadius: 5
    },
    buttonsVoilet: {
        backgroundColor: "#500AD2",
        marginTop: 30,
        cursor: "pointer",
        border: 0,
        color: "white",
        padding: 15,
        borderRadius: 5
    },
    or: {
        marginTop: 30
    },
    hasAccount: {
        marginTop: 30
    },
    clickAuth: {
        color: "brown",
        cursor: "pointer",
        fontStyle: "bold"
    },
    errorMessages: {
        color: "red",
        fontSize: 14,
        overflow: "hidden",
        padding: 5,
        fontStyle: "bold"
    },
    mainHeading: {
        padding: 40,
        color: "#500AD2",
    },
    displayData: {
        padding: 15,
        color: "white",
        backgroundColor: "orange",
        width: "25%",
        margin: "auto",
        borderRadius: 10
    },
    closeButton: {
        backgroundColor: "red",
        borderRadius: 4,
        paddingLeft: 5,
        paddingRight: 5,
        cursor: "pointer"
    }
})

export default useStyles;