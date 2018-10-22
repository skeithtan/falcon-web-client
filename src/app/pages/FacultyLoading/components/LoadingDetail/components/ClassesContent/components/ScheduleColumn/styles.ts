import grey from "@material-ui/core/colors/grey";
import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    padded: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
    classSchedule: {
        padding: theme.spacing.unit * 2,
        border: "1px solid",
        borderColor: grey["300"],
    },
});
