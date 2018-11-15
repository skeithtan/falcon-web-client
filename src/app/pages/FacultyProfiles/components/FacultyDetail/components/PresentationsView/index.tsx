import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
import IStyleClasses from "src/app/interfaces/style_classes";
import DetailItem from "../../../../../../components/reusable/DetailItem";
import Presentation from "../../../../../../models/entities/presentation";
import PresentationCategory, {
    PresentationCategoryReadable,
} from "../../../../../../models/enums/presentation_category";
import PresentationMedium, {
    PresentationMediumReadable,
} from "../../../../../../models/enums/presentation_medium";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import SubdoucmentActions from "../SubdocumentActions";
import SubdocumentSummary from "../SubdocumentSummary";
import styles from "./styles";

interface IPropsType {
    presentations: Presentation[];
    classes: IStyleClasses;
}

@observer
class PresentationsView extends React.Component<IPropsType> {
    public onRemoveClick = (presentation: Presentation) => () => {
        if (
            confirm(
                `Are you sure you want to delete the presentation ${
                    presentation.title
                }`
            )
        ) {
            FacultyProfilesController.removePresentation(presentation).catch(
                (e: Error) =>
                    alert(
                        `An error occurred while deleting the presentation ${e}`
                    )
            );
        }
    };

    public onOngoingChange = (ongoing: boolean, p: Presentation) => () => {
        p.ongoing = ongoing;
    };

    public render() {
        const { presentations, classes } = this.props;
        return (
            <React.Fragment>
                {presentations !== undefined &&
                    presentations.map(p => {
                        const category = PresentationCategoryReadable.get(
                            p.category
                        ) as PresentationCategory;
                        const medium = PresentationMediumReadable.get(
                            p.medium
                        ) as PresentationMedium;
                        const date = moment(p.date).format("MMMM Do YYYY");
                        const daysDuration = `${p.daysDuration} days`;
                        return (
                            <ExpansionPanel key={p.id}>
                                <ExpansionPanelSummary>
                                    <SubdocumentSummary
                                        title={p.title}
                                        ongoing={p.ongoing}
                                    />
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails
                                    className={classes.panelDetail}
                                >
                                    <List
                                        className={classes.list}
                                        disablePadding
                                    >
                                        <DetailItem
                                            field="Category"
                                            value={category}
                                        />
                                        <DetailItem field="Date" value={date} />
                                        <DetailItem
                                            field="Sponsor"
                                            value={p.sponsor}
                                        />
                                        <DetailItem
                                            field="Venue"
                                            value={p.venue}
                                        />
                                        <DetailItem
                                            field="Conference"
                                            value={p.conference}
                                        />
                                        <DetailItem
                                            field="Medium"
                                            value={medium}
                                        />
                                        <DetailItem
                                            field="Days Duration"
                                            value={daysDuration}
                                        />
                                        <AssociatedProgramsItem
                                            field="Associated Programs"
                                            programs={p.associatedPrograms!}
                                        />
                                    </List>
                                </ExpansionPanelDetails>
                                <ExpansionPanelActions>
                                    <SubdoucmentActions
                                        ongoing={p.ongoing}
                                        onOngoingChange={this.onOngoingChange(
                                            p.ongoing,
                                            p
                                        )}
                                        onRemoveClick={this.onRemoveClick(p)}
                                    />
                                </ExpansionPanelActions>
                            </ExpansionPanel>
                        );
                    })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PresentationsView);
