import { Theme } from "@material-ui/core/styles";
import { falconLogo } from "../../../../reusable/styles";

export default (theme: Theme) => ({
    falconLogo: {
        ...falconLogo,
        fontSize: 20,
    },
    pnuLogo: {
        width: 80,
        height: 80,
    },
    drawerHeadContainer: {
        padding: "40px 40px 16px 24px",
        borderBottom: "1px solid",
        background: theme.palette.grey["100"],
        borderBottomColor: theme.palette.grey["200"],
    },
});
