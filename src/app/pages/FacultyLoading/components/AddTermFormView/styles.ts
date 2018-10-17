import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    content: {
        padding: theme.spacing.unit * 4,
    },
    actions: {
        padding: theme.spacing.unit * 4,
    },
});
