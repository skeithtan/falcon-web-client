import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "inherit",
        width: "72%",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 10,
    },
});
