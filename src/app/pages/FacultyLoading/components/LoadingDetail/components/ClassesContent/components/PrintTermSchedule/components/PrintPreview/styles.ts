import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 1024,
        minHeight: 1200,
        margin: "auto",
        padding: theme.spacing.unit * 8,
    },
});