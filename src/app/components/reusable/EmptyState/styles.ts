import { StyleRules } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme): StyleRules => ({
    root: {
        background: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: 400,
        marginBottom: 200,
    },
});
