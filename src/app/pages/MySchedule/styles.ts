import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    outerStateWrapper: {
        overflowY: "scroll",
        padding: theme.spacing.unit * 5,
        height: "100%"
    },
    content: {
        height: "inherit",
    },
});
