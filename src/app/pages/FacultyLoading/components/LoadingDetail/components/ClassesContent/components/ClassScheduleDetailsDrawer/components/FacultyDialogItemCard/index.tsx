import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../../../../../interfaces/style_classes";
import RecommendationFacultyMember from "../../../../../../../../../../models/entities/recommendation_faculty_member";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    facultyMember: RecommendationFacultyMember;
    classes: IStyleClasses;
    onClick: () => void;
}

@inject("facultyLoading")
@observer
class FacultyDialogItemCard extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading, facultyMember, classes, onClick } = this.props;
        const {
            classesTabState: { assignFacultyDialogState },
        } = facultyLoading!;
        const { form } = assignFacultyDialogState;
        const selected =
            Boolean(form.facultyMember) &&
            form.facultyMember!.id === facultyMember!.id;

        return (
            <Card
                className={classNames(classes.card, {
                    [classes.selected]: selected
                })}
                onClick={onClick}
            >
                <CardContent>
                    <Typography variant="h6">
                        {facultyMember.fullName}
                    </Typography>
                    <Typography color="textSecondary">
                        {`Score: ${facultyMember.score}`}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(FacultyDialogItemCard);
