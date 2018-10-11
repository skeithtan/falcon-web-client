import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import * as React from "react";
import SubjectsController from "src/app/controllers/subject";
import IStyleClasses from "../../../../interfaces/style_classes";
import SubjectCategory, {
    SubjectCategoryReadable,
} from "../../../../models/enums/subject_category";
import { SubjectsState } from "../../../../store/subjects";
import SubjectItem from "./components/SubjectItem";
import styles from "./styles";

interface IPropsType {
    subjects?: SubjectsState;
    classes: IStyleClasses;
}

@inject("subjects")
@observer
class SubjectList extends React.Component<IPropsType> {
    public onAddButtonClick = () =>
        SubjectsController.toggleAddSubjectForm(true);

    public render() {
        const { subjects, classes } = this.props;
        const { segregatedSubjects } = subjects!;

        return (
            <React.Fragment>
                <List subheader={<li />} className={classes.list}>
                    {Object.keys(segregatedSubjects).map(subjectCategory => {
                        const subjectItems =
                            segregatedSubjects[subjectCategory];
                        const readable = SubjectCategoryReadable.get(
                            subjectCategory as SubjectCategory
                        );

                        return (
                            <li key={readable} className={classes.listSection}>
                                <ul className={classes.ul}>
                                    <ListSubheader>{readable}</ListSubheader>
                                    {subjectItems.map(si => (
                                        <SubjectItem subject={si} key={si.id} />
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </List>
                <Button
                    variant="fab"
                    color="primary"
                    className={classes.addButton}
                    onClick={this.onAddButtonClick}
                >
                    <AddIcon />
                </Button>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SubjectList);
