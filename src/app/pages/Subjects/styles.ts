import { StyleRules } from "@material-ui/core/styles";

export default {
    root: {
        height: "100%",
    },
    list: {
        minWidth: 280,
        maxWidth: 320,
        position: "relative",
        overflowY: "hidden",
    },
    detail: {
        width: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
    },
} as StyleRules;
