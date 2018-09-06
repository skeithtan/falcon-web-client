import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme) => ({
    toolbar: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit * 2,
    },
});
