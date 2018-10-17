import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    addButton: {
        position: "absolute",
        bottom: 24,
        right: 24,
        zIndex: theme.zIndex.drawer,
    },
});
