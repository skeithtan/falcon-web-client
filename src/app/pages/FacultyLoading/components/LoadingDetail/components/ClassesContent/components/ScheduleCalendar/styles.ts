import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
        backgroundColor: theme.palette.background.paper,
    },
    divider: {
        width: "100%",
    },
    scheduleColumsGridItemContainer: {
        paddingTop: theme.spacing.unit,
        height: "100%",
        overflowY: "scroll",
    },
    meetingHourHeader: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit,
    },
});
