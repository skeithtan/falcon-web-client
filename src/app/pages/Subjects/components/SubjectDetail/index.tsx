import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../components/reusable/StateWrapper";
import IStyleClasses from "../../../../interfaces/style_classes";
import Subject from "../../../../models/entities/subject";
import { SubjectsState } from "../../../../store/subjects";
import SubjectInformationView from "./components/SubjectInformationView";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
    subjects?: SubjectsState;
}

@inject("subjects")
@observer
class SubjectDetail extends React.Component<IPropsType> {
    public renderEmptyState = () => {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.detailEmptyState}
            >
                <Typography variant="h5" color="textSecondary">
                    Select a subject to view its details
                </Typography>
            </Grid>
        );
    };

    public renderDetail = (s: Subject) => {
        const { classes } = this.props;
        return (
            <StateWrapper fetchableState={s.fetchStatus}>
                {() => (
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.detail}
                        spacing={24}
                    >
                        <Grid item className={classes.item}>
                            <SubjectInformationView subject={s} canUpdate />
                        </Grid>
                        {/* Grid item for experiended faculties view */}
                    </Grid>
                )}
            </StateWrapper>
        );
    };

    public render() {
        const { subjects } = this.props;
        const { activeSubject } = subjects!;
        return activeSubject
            ? this.renderDetail(activeSubject)
            : this.renderEmptyState();
    }
}

export default withStyles(styles)(SubjectDetail);
