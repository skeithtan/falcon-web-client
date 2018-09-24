import { StyleRules } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme): StyleRules => ({
    toolbar: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit * 2,
    },
});
