import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { styles } from "../../../../reusable";

export default (theme: Theme) => ({
    pageTitle: {
        display: "inline-block",
        fontSize: 20,
        fontWeight: theme.typography.fontWeightLight,
    },
    falconLogo: {
        ...styles.falconLogo,
        display: "inline-block",
        marginRight: 4,
        fontSize: 20,
    },
});
