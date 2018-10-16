import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
import IStyleClasses from "src/app/interfaces/style_classes";
import DetailItem from "../../../../../../components/reusable/DetailItem";
import Recognition from "../../../../../../models/entities/recognition";
import RecognitionBasis, {
    RecognitionBasisReadable,
} from "../../../../../../models/enums/recognition_basis";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import styles from "./styles";

interface IPropsType {
    recognitions: Recognition[];
    classes: IStyleClasses;
}

@observer
class RecognitionsView extends React.Component<IPropsType> {
    public onDeleteClick = (recognition: Recognition) => () => {
        if (
            confirm(
                `Are you sure you want to delete the recognition ${
                    recognition.title
                }`
            )
        ) {
            FacultyProfilesController.removeRecognition(recognition).catch(
                (e: Error) =>
                    alert(
                        `An error occurred while deleting the recognition ${
                            e
                        }`
                    )
            );
        }
    };

    public render() {
        const { recognitions, classes } = this.props;
        return (
            <React.Fragment>
                {recognitions !== undefined &&
                    recognitions.map(r => {
                        const basis = RecognitionBasisReadable.get(
                            r.basis
                        ) as RecognitionBasis;
                        const recognitionDate = moment(r.date).format(
                            "MMMM Do YYYY"
                        );
                        return (
                            <ExpansionPanel key={r.id}>
                                <ExpansionPanelSummary>
                                    <Typography variant="subtitle1">
                                        {r.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails
                                    className={classes.panelDetail}
                                >
                                    <List
                                        className={classes.list}
                                        disablePadding
                                    >
                                        <DetailItem
                                            field="Basis"
                                            value={basis}
                                        />
                                        <DetailItem
                                            field="Sponsor"
                                            value={r.sponsor}
                                        />
                                        <DetailItem
                                            field="Date"
                                            value={recognitionDate}
                                        />
                                        <AssociatedProgramsItem
                                            field="Associated Programs"
                                            programs={r.associatedPrograms!}
                                        />
                                    </List>
                                </ExpansionPanelDetails>
                                <ExpansionPanelActions>
                                    <Button
                                        color="secondary"
                                        onClick={this.onDeleteClick(r)}
                                    >
                                        Remove
                                    </Button>
                                </ExpansionPanelActions>
                            </ExpansionPanel>
                        );
                    })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(RecognitionsView);
