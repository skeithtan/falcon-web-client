import Grey from "@material-ui/core/colors/grey";
import Red from "@material-ui/core/colors/red";
import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    assigned: {
        background: theme.palette.primary.light,
        color: theme.palette.common.white,
    },
    rejected: {
        background: Red["200"],
        color: theme.palette.common.white,
    },
    adjunct: {
        background: Grey["500"],
        color: theme.palette.common.white,
    },
});
