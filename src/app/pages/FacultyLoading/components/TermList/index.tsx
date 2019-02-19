import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FacultyLoadingController from "../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../interfaces/style_classes";
import TermStatus from "../../../../models/enums/term_status";
import UserType from "../../../../models/enums/user_type";
import { AuthenticationState } from "../../../../store/authentication";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import styles from "./styles";

interface IPropsType {
    authentication?: AuthenticationState;
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading", "authentication")
@observer
class TermList extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleTermList(false);
    };

    public setActiveTerm = (id: number) => () => {
        const { currentUser } = this.props.authentication!;
        FacultyLoadingController.setActiveTerm(id).then(() => {
            if (currentUser!.authorization === UserType.Faculty) {
                FacultyLoadingController.getCurrentFaculty();
            }
        });
        this.onClose();
    };

    public onAddClick = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleAddTermForm(shouldShow);
    };

    public render() {
        const { facultyLoading, authentication, classes } = this.props;
        const { currentUser } = authentication!;
        const {
            terms,
            termListState,
            activeTermId,
            activeTerm,
        } = facultyLoading!;
        const { isShowing } = termListState!;
        return (
            <DrawerForm
                disablePadding
                open={isShowing}
                onClose={this.onClose}
                formTitle="Term List"
            >
                <React.Fragment>
                    <List>
                        {Array.from(terms!).map(([termId, term]) => {
                            return (
                                <ListItem
                                    key={termId}
                                    selected={activeTermId === termId}
                                    button
                                    onClick={this.setActiveTerm(termId)}
                                >
                                    <ListItemText
                                        primary={term.ordinalTermReadable}
                                        secondary={term.yearRangeReadable}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                    {currentUser!.authorization !== UserType.Faculty && (
                        <Button
                            variant="extendedFab"
                            color="primary"
                            onClick={this.onAddClick(true)}
                            className={classes.addButton}
                            disabled={
                                activeTerm!.status !== TermStatus.Published
                            }
                        >
                            <AddIcon />
                            New Term
                        </Button>
                    )}
                </React.Fragment>
            </DrawerForm>
        );
    }
}

export default withStyles(styles)(TermList);
