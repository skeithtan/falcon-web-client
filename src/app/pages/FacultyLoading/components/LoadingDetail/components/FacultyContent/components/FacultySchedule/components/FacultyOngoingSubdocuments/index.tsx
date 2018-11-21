import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import DetailItem from "../../../../../../../../../../components/reusable/DetailItem";
import OngoingSubdocument from "../../../../../../../../../../models/entities/ongoing_subdocument";

interface IPropsType {
    subdocuments: OngoingSubdocument[];
}

export default class FacultyOngoingSubdocuments extends React.Component<
    IPropsType
> {
    public render() {
        const { subdocuments } = this.props;
        return (
            <Card>
                <Toolbar>
                    <Typography variant="h6">Ongoing Subdocuments</Typography>
                </Toolbar>
                <CardContent>
                    {subdocuments.length === 0 && (
                        <Typography>
                            <i>
                                No ongoing degrees, instructional materials or
                                extension works.
                            </i>
                        </Typography>
                    )}
                    {subdocuments.length > 0 && (
                        <List disablePadding>
                            {subdocuments.map(sd => (
                                <DetailItem
                                    key={sd.title}
                                    field={sd.type}
                                    value={sd.title}
                                />
                            ))}
                        </List>
                    )}
                </CardContent>
            </Card>
        );
    }
}
