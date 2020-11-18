import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#EAEAF4",
    },
    navigation: {
        width: "90%",
        margin: "auto",
        padding: 20,
        backgroundColor: "#EAEAF4",
    },
    italicText: {
        fontStyle: "italic"
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
    }
});

export default useStyles;