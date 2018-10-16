import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
    },
    preview: {
        backgroundColor: "grey",
        padding: theme.spacing.unit * 4,
        overflow: "scroll",
    },
    settings: {
        backgroundColor: theme.palette.background.paper,
        borderLeft: "1px solid grey",
        padding: theme.spacing.unit * 4,
    },
});
