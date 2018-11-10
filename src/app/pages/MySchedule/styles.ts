import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    content: {
        padding: theme.spacing.unit * 5,
        overflowY: "scroll",
    },
});
