import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../../../../../interfaces/style_classes";
import RecommendationFacultyMember from "../../../../../../../../../../models/entities/recommendation_faculty_member";
import { FacultyMemberTypeReadable } from "../../../../../../../../../../models/enums/faculty_member_type";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    facultyMember: RecommendationFacultyMember;
    classes: IStyleClasses;
    onClick: () => void;
}

@inject("facultyLoading")
@observer
class FacultyDialogItemCard extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading, facultyMember, classes, onClick } = this.props;
        const {
            classesTabState: { assignFacultyDialogState },
        } = facultyLoading!;
        const { form } = assignFacultyDialogState;
        const selected =
            Boolean(form.facultyMember) &&
            form.facultyMember!.facultyMember.id ===
                facultyMember!.facultyMember.id;

        const { pros, cons, errors } = facultyMember;

        return (
            <Card
                className={classNames(classes.card, {
                    selected,
                })}
                onClick={onClick}
            >
                <CardContent>
                    <Typography variant="subtitle2">
                        {facultyMember.fullName}
                    </Typography>
                    <Typography variant="overline">
                        {FacultyMemberTypeReadable.get(
                            facultyMember.facultyMember.type
                        )}
                    </Typography>
                    <Typography color="textSecondary">
                        {`Score: ${facultyMember.score}`}
                    </Typography>
                </CardContent>
                <Divider light />
                <List dense>
                    {pros.length > 0 && (
                        <li className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader>Pros</ListSubheader>
                                {pros.map(p => (
                                    <ListItem key={p}>
                                        <ListItemText>{p}</ListItemText>
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                    )}
                    {cons.length > 0 && (
                        <li className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader>Cons</ListSubheader>
                                {cons.map(c => (
                                    <ListItem key={c}>
                                        <ListItemText>{c}</ListItemText>
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                    )}
                    {errors.length > 0 && (
                        <li className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader>Errors</ListSubheader>
                                {errors.map(e => (
                                    <ListItem key={e}>
                                        <ListItemText>{e}</ListItemText>
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                    )}
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(FacultyDialogItemCard);
