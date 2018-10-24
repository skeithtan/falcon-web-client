import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});
