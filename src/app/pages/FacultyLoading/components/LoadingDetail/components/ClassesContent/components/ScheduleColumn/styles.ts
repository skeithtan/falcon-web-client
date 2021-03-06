import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    padded: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
});
