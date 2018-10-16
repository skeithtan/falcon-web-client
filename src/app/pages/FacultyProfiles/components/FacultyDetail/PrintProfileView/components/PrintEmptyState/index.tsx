import Typography from "@material-ui/core/Typography";
import * as React from "react";

interface IPropsType {
    subdocument: string;
}

export default class PrintEmptyState extends React.Component<IPropsType> {
    public render() {
        const { subdocument } = this.props;
        return (
            <Typography
            >{`No ${subdocument} recorded for this faculty member.`}</Typography>
        );
    }
}
