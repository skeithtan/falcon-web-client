import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    detail: {
        padding: theme.spacing.unit * 5,
    },
    item: {
        width: "100%",
    },
    emptyState: {
        height: "100%",
    },
});
