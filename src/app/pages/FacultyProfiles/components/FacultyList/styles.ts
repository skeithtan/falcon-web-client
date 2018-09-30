import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    ul: {
        backgroundColor: "inherit",
        padding: 0,
    },
    listSection: {
        backgroundColor: "inherit",
    },
    list: {
        background: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.grey["200"]}`,
        height: "100%",
    },
});
