import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FacultyLoadingController from "../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class TermList extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleTermList(false);
    };

    public setActiveTerm = (id: number) => () => {
        FacultyLoadingController.setActiveTerm(id);
    };

    public onAddClick = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleAddTermForm(shouldShow);
    };

    public render() {
        const { facultyLoading, classes } = this.props;
        const { terms, termListState } = facultyLoading!;
        const { isShowing } = termListState!;
        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Term List"
            >
                <React.Fragment>
                    <List>
                        {Array.from(terms!).map(([termId, term]: any) => {
                            return (
                                <ListItem
                                    key={termId}
                                    button
                                    onClick={this.setActiveTerm(termId)}
                                >
                                    <ListItemText
                                        primary={term.readableString}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                    <Button
                        variant="extendedFab"
                        size="small"
                        color="primary"
                        onClick={this.onAddClick(true)}
                        className={classes.addButton}
                    >
                        New Term
                    </Button>
                </React.Fragment>
            </DrawerForm>
        );
    }
}

export default withStyles(styles)(TermList);
