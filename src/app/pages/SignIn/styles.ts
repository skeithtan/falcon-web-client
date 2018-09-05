import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme) => ({
    background: {
        height: "100%",
        width: "100%",
        background: theme.palette.grey["200"],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cardImage: {
        width: 80,
        height: 80,
    },
    cardContent: {
        padding: theme.spacing.unit * 5,
        width: 400,
    },
});
