import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    card: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
    grow: {
        flex: "1",
    },
});
