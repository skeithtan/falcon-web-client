import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    assigned: {
        background: theme.palette.primary.light,
        color: theme.palette.common.white
    },
});