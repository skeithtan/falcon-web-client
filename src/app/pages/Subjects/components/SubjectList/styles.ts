import Grey from "@material-ui/core/colors/grey";
import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    list: {
        background: Grey["100"],
        borderRight: `1px solid ${theme.palette.grey["200"]}`,
        height: "100%",
        overflowY: "auto",
    },
    addButton: {
        position: "absolute",
        bottom: 24,
        right: 24,
        zIndex: theme.zIndex.drawer,
    },
});
