import Grey from "@material-ui/core/colors/grey";
import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
    },
    preview: {
        backgroundColor: Grey["700"],
        position: "relative",
        height: "100%",
    },
    settings: {
        backgroundColor: theme.palette.background.paper,
        borderLeft: "1px solid grey",
        padding: theme.spacing.unit * 4,
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 1024,
        minHeight: 1200,
        margin: "auto",
        padding: theme.spacing.unit * 8,
    },
    base: {
        overflow: "scroll",
        height: "100%",
        padding: theme.spacing.unit * 4,
    },
    printButton: {
        position: "absolute",
        bottom: 40,
        right: 40,
    },
});
