import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    ul: {
        backgroundColor: "inherit",
        padding: 0,
    },
    listSection: {
        backgroundColor: "inherit",
    },
    expansionDetail: {
        "& > li": {
            width: "100%",
        },
    },
});
