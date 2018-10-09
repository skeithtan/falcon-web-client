import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { inject, observer } from "mobx-react";
import * as React from "react";
import SubjectsController from "../../../../../../controllers/subject";
import Subject from "../../../../../../models/entities/subject";
import { SubjectsState } from "../../../../../../store/subjects";

interface IPropsType {
    subject: Subject;
    subjects?: SubjectsState;
}

@inject("subjects")
@observer
export default class SubjectItem extends React.Component<IPropsType> {
    public onClick = () => {
        const { subject } = this.props;
        SubjectsController.setActiveSubject(subject.id);
        SubjectsController.getExperiencedFaculties(subject);
    };

    public render() {
        const { subject, subjects } = this.props;
        const { activeSubjectId } = subjects!;

        return (
            <ListItem
                button
                selected={activeSubjectId === subject.id}
                onClick={this.onClick}
            >
                <ListItemText primary={subject.code} secondary={subject.name} />
            </ListItem>
        );
    }
}
