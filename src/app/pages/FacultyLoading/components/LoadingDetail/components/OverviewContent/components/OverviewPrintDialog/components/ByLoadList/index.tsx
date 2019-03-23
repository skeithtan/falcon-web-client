import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import FacultyProfile from "../../../../../../../../../../models/entities/faculty_profile";

interface IPropsType {
    title: string;
    facultyMembers: FacultyProfile[];
}

export default class ByLoadList extends React.Component<IPropsType> {
    public render() {
        const { title, facultyMembers } = this.props;
        const emptyList = facultyMembers.length === 0;
        return (
            <Grid container direction="column" spacing={8}>
                <Grid>
                    <Typography variant="subtitle2">
                        {emptyList ? `${title} -- None` : title}
                    </Typography>
                </Grid>
                <Grid>
                    {!emptyList && (
                        <List>
                            {facultyMembers.map(fm => (
                                <ListItem key={fm.id}>
                                    <ListItemText>{`${fm.firstName} ${
                                        fm.lastName
                                    }`}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Grid>
            </Grid>
        );
    }
}
