import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
    },
    meetingHourHeader: {
        padding: theme.spacing.unit * 2,
    },
});
