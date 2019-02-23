import Green from "@material-ui/core/colors/green";
import Grey from "@material-ui/core/colors/grey";
import { StyleRules } from "@material-ui/core/styles";

export default {
    card: {
        width: 280,
        cursor: "pointer",
        transition: "200ms all",

        "&:hover:not(.selected)": {
            background: Grey["100"],
        },
        "&.selected": {
            backgroundColor: Green["100"],
            color: "white",
        },
    },
    listSection: {
        backgroundColor: "inherit",
    },
    ul: {
        backgroundColor: "inherit",
        padding: 0,
    },
} as StyleRules;
