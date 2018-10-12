import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
    },
    myProfileGrid: {
        width: "90%",
        maxWidth: 1400,
        margin: "auto",
        padding: theme.spacing.unit * 4,
    },
});
