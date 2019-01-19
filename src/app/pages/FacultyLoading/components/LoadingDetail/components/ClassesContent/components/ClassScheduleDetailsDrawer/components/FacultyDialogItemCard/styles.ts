import Green from "@material-ui/core/colors/green";
import Grey from "@material-ui/core/colors/grey";
import { StyleRules } from "@material-ui/core/styles";

export default {
    card: {
        maxWidth: 280,
        cursor: "pointer",
        transition: "200ms all",

        "&:hover": {
            background: Grey["100"],
        },
    },
    selected: {
        backgroundColor: Green["100"],
        color: "white",
    },
} as StyleRules;
