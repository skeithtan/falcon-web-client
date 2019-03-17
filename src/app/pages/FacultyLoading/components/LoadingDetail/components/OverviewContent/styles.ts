import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 10,
        display: "flex",
        justifyContent: "center",
        overflowY: "scroll",
    },
    gridContainer: {
        height: "100%",
        maxWidth: 1600,
    },
    printButton: { position: "absolute", bottom: 40, right: 40 },
});
