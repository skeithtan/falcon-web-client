import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    detail: {
        height: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
    },
    tab: {
        height: "100%",
        width: "90%",
        margin: theme.spacing.unit * 4,
        overflowY: "scroll",
        overflowX: "hidden",
    },
});
