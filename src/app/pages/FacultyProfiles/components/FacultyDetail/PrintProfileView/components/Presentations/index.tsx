import Grid from "@material-ui/core/Grid";
import * as moment from "moment";
import * as React from "react";
import DetailItem from "../../../../../../../components/reusable/DetailItem";
import Presentation from "../../../../../../../models/entities/presentation";
import PrintEmptyState from "../PrintEmptyState";
import PrintSubdocument from "../PrintSubdocument";

interface IPropsType {
    presentations: Presentation[];
}

export default class Presentations extends React.Component<IPropsType> {
    public render() {
        const { presentations } = this.props;
        return (
            <React.Fragment>
                {presentations.length === 0 && (
                    <PrintEmptyState subdocument="Presentations" />
                )}

                {presentations.length > 0 && (
                    <PrintSubdocument title="Presentations">
                        <Grid container direction="row">
                            {presentations.map(p => {
                                const date = moment(p.date).format(
                                    "MMMM Do YYYY"
                                );
                                const daysDuration = `${p.daysDuration} days`;

                                return (
                                    <Grid item xs key={p.id}>
                                        <DetailItem
                                            field="Title"
                                            value={p.title}
                                        />
                                        <DetailItem
                                            field="Category"
                                            value={p.category}
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
                                            value={p.medium}
                                        />
                                        <DetailItem
                                            field="Conference"
                                            value={daysDuration}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </PrintSubdocument>
                )}
            </React.Fragment>
        );
    }
}
