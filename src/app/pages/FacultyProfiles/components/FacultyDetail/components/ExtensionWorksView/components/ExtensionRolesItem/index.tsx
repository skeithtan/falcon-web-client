import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import DetailChip from "../../../../../../../../components/reusable/DetailChip";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import ExtensionWorkRole, {
    ExtensionWorkRoleReadable,
} from "../../../../../../../../models/enums/extension_work_role";
import styles from "./styles";

interface IPropsType {
    field: string;
    extensionWorkRoles: ExtensionWorkRole[];
    classes: IStyleClasses;
}

class ExtensionRolesItem extends React.Component<IPropsType> {
    public render() {
        const { field, extensionWorkRoles, classes } = this.props;
        return (
            <ListItem divider>
                <Grid className={classes.listItem}>
                    <Grid container>
                        <Grid item sm zeroMinWidth>
                            <Typography variant="body2">{field}</Typography>
                        </Grid>
                        <Grid item sm={9} zeroMinWidth>
                            {extensionWorkRoles !== undefined &&
                                extensionWorkRoles.map(ewr => {
                                    const readable = ExtensionWorkRoleReadable.get(
                                        ewr
                                    ) as ExtensionWorkRole;
                                    return (
                                        <DetailChip
                                            key={readable}
                                            detail={readable}
                                        />
                                    );
                                })}
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        );
    }
}

export default withStyles(styles)(ExtensionRolesItem);
