import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import EmptyState from "../../components/reusable/EmptyState";
import StateWrapper from "../../components/reusable/StateWrapper";
import SubjectsController from "../../controllers/subject";
import IStyleClasses from "../../interfaces/style_classes";
import { SubjectsState } from "../../store/subjects";
import AddSubjectFormView from "./components/AddSubjectForm";
import SubjectDetail from "./components/SubjectDetail";
import SubjectList from "./components/SubjectList";
import UpdateSubjectFormView from "./components/UpdateSubjectForm";
import styles from "./styles";

interface IRouteParameters {
    subjectId?: string;
}

interface IPropsType extends RouteComponentProps<IRouteParameters> {
    classes: IStyleClasses;
    subjects?: SubjectsState;
}

@inject("subjects")
@observer
class Subjects extends React.Component<IPropsType> {
    public componentDidMount() {
        document.title = "Subjects - Falcon";
        SubjectsController.getAll();
    }

    public addSubjectFormToggle = (shouldShow: boolean) => () => {
        SubjectsController.toggleAddSubjectForm(shouldShow);
    };

    public render() {
        const { classes, subjects } = this.props;
        const { subjectItems } = subjects!;
        return (
            <StateWrapper fetchableState={subjects!.fetchStatus} disableFlex>
                {() => (
                    <React.Fragment>
                        {subjectItems!.size === 0 && (
                            <EmptyState
                                title="Subjects"
                                description="View, create and modify subjects."
                                addButton="Add Subject"
                                onButtonClick={this.addSubjectFormToggle(true)}
                            />
                        )}

                        {subjectItems!.size > 0 && (
                            <Grid
                                className={classes.root}
                                container
                                direction="row"
                                alignItems="stretch"
                                wrap="nowrap"
                            >
                                <React.Fragment>
                                    <Grid item className={classes.list}>
                                        <SubjectList />
                                    </Grid>
                                    <Grid item className={classes.detail}>
                                        <SubjectDetail />
                                    </Grid>
                                </React.Fragment>
                            </Grid>
                        )}

                        <AddSubjectFormView />
                        <UpdateSubjectFormView />
                    </React.Fragment>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(Subjects);
