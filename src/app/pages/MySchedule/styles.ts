import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    content: {
        height: "100%",
        width: "100%",
        padding: theme.spacing.unit * 5,
        overflowY: "scroll",
    },
});
