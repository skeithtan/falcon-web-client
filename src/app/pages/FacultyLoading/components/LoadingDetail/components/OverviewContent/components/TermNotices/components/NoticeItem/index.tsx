import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import Notice from "../../../../../../../../../../models/entities/notice";

interface IPropsType {
    notice: Notice;
    onRemoveClick: () => void;
}

export default class NoticeItem extends React.Component<IPropsType> {
    public render() {
        const { notice, onRemoveClick } = this.props;
        return (
            <Card>
                <CardContent>
                    <Typography>{notice.facultyMember.fullName}</Typography>
                    <Divider />
                    <Typography variant="subtitle1">
                        {notice.message}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onRemoveClick}
                    >
                        Remove
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
