import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 1024,
        minHeight: 1200,
        margin: "auto",
    },
    printContentContainer: {
        padding: theme.spacing.unit * 8,
    },
    printButton: {
        position: "absolute",
        bottom: 40,
        right: 40,
    },
    root: {
        overflow: "scroll",
        height: "100%",
        padding: theme.spacing.unit * 4,
    },
});