import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "inherit",
        padding: theme.spacing.unit * 10,
    },
    printButton: {
        position: "absolute",
        bottom: 40,
        right: 40,
    },
    paper: {
        minHeight: 1000,
        minWidth: 1200,
        backgroundColor: theme.palette.background.paper,
        margin: "auto",
    },
});
