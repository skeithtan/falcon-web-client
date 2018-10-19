import Grey from "@material-ui/core/colors/grey";
import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    card: {
        width: "100%",
        margin: "auto",
    },
    overview: {
        borderRight: "1px solid",
        borderColor: Grey["300"],
        marginRight: theme.spacing.unit * 4,
    },
});
