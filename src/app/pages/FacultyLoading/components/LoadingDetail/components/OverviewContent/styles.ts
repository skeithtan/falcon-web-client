import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 5,
        display: "flex",
        justifyContent: "center",
    },
    gridContainer: {
        height: "100%",
        maxWidth: 1600,
    },
});
