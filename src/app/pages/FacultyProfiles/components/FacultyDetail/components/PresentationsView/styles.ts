import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    list: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
});
