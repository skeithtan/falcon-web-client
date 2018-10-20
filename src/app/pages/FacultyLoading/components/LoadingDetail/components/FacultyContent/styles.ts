import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    gridContainer: {
        height: "100%",
    },
    facultyListGridItem: {
        height: "100%",
    },
    detailEmptyState: {
        height: "100%",
    },
    content: {
        width: "100%",
        padding: theme.spacing.unit * 5,
        overflowY: "scroll",
    },
    activeFacultyDetailView: {
        maxWidth: 1600,
    },
});
