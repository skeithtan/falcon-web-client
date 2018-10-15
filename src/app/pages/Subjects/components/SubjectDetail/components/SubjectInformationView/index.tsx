import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Create from "@material-ui/icons/Create";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DetailItem from "../../../../../../components/reusable/DetailItem";
import SubjectsController from "../../../../../../controllers/subject";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import Subject from "../../../../../../models/entities/subject";
import Program, {
    ProgramReadable,
} from "../../../../../../models/enums/program";
import SubjectCategory, {
    SubjectCategoryReadable,
} from "../../../../../../models/enums/subject_category";
import styles from "./styles";

interface IPropsType {
    canUpdate: boolean;
    classes: IStyleClasses;
    subject: Subject;
}

@inject("subjects")
@observer
class SubjectInformationView extends React.Component<IPropsType> {
    public toggleUpdateSubjectForm = (shouldShow: boolean) => () => {
        SubjectsController.toggleUpdateSubjectForm(shouldShow);
    };

    public render() {
        const { canUpdate, classes, subject } = this.props;
        const readableCategory = SubjectCategoryReadable.get(
            subject.category
        ) as SubjectCategory;
        const readableProgram = ProgramReadable.get(subject.program) as Program;

        return (
            <Card>
                <Toolbar>
                    <Typography variant="headline">{subject.code}</Typography>
                    <div className={classes.grow} />
                    {canUpdate && (
                        <Tooltip title="Update information">
                            <IconButton
                                onClick={this.toggleUpdateSubjectForm(true)}
                            >
                                <Create />
                            </IconButton>
                        </Tooltip>
                    )}
                </Toolbar>
                <List disablePadding>
                    <DetailItem field="Name" value={subject.name} />
                    <DetailItem
                        field="Description"
                        value={subject.description}
                    />
                    <DetailItem field="Category" value={readableCategory} />
                    <DetailItem field="Program" value={readableProgram} />
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(SubjectInformationView);
