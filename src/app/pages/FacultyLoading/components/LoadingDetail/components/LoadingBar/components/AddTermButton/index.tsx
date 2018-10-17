import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import * as React from "react";

interface IPropsType {
    onAddClick: () => void;
}

export default class AddTermButton extends React.Component<IPropsType> {
    public render() {
        const { onAddClick } = this.props;
        return (
            <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={onAddClick}
            >
                <AddIcon />
                New Term
            </Button>
        );
    }
}
