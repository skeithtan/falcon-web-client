import { StyleRules } from "@material-ui/core/styles";

export default {
    root: {
        height: "100%",
    },
    list: {
        minWidth: 280,
    },
    detail: {
        width: "100%",
        overflowY: "scroll",
    },
    button: {
        // hacky hack
        position: "fixed",
        bottom: "16px",
        left: "210px",
    },
} as StyleRules;
