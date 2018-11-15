import Grey from "@material-ui/core/colors/grey";
import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    card: {
        width: "100%",
    },
    grow: {
        flex: "1",
    },
    cardItems: {
        backgroundColor: Grey["100"]
    }
});
