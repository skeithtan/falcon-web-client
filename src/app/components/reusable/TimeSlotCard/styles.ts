import Green from "@material-ui/core/colors/green";
import Red from "@material-ui/core/colors/red";
import { StyleRules } from "@material-ui/core/styles";

export default {
    card: {
        height: "100%",
        minHeight: 80,
    },
    availableCard: {
        backgroundColor: Green["100"],
    },
    preferredCard: {
        backgroundColor: Green["200"],
    },
    rejectedCard: {
        backgroundColor: Red["100"],
    },
} as StyleRules;
