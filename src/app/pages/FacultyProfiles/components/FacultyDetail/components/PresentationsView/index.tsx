import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import Presentation from "../../../../../../models/entities/presentation";
import PresentationCategory, {
    PresentationCategoryReadable,
} from "../../../../../../models/enums/presentation_category";
import PresentationMedium, {
    PresentationMediumReadable,
} from "../../../../../../models/enums/presentation_medium";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import FacultyDetailItem from "../FacultyDetailItem";

interface IPropsType {
    presentations: Presentation[];
}

@inject("facultyProfiles")
@observer
export default class PresentationsView extends React.Component<IPropsType> {
    public render() {
        const { presentations } = this.props;
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
                        const date = moment(p.date).format("LL");
                        const daysDuration = `${p.daysDuration} days`;
                        return (
                            <ExpansionPanel key={p.id}>
                                <ExpansionPanelSummary>
                                    <Typography variant="subheading">
                                        {p.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <List>
                                        <FacultyDetailItem
                                            field="Category"
                                            value={category}
                                        />
                                        <FacultyDetailItem
                                            field="Date"
                                            value={date}
                                        />
                                        <FacultyDetailItem
                                            field="Sponsor"
                                            value={p.sponsor}
                                        />
                                        <FacultyDetailItem
                                            field="Venue"
                                            value={p.venue}
                                        />
                                        <FacultyDetailItem
                                            field="Conference"
                                            value={p.conference}
                                        />
                                        <FacultyDetailItem
                                            field="Medium"
                                            value={medium}
                                        />
                                        <FacultyDetailItem
                                            field="Days Duration"
                                            value={daysDuration}
                                        />
                                        <AssociatedProgramsItem
                                            field="Associated Programs"
                                            programs={p.associatedPrograms!}
                                        />
                                    </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })}
            </React.Fragment>
        );
    }
}
