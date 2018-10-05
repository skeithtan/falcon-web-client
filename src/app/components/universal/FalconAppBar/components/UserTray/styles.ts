import { Theme } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    currentUserDisplay: {
        padding: theme.spacing.unit * 3,
        background: theme.palette.grey["200"],
    },
    userTrayPaper: {
        minWidth: 280,
    },
});
