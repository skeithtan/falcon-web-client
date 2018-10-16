import Grid from "@material-ui/core/Grid";
import * as React from "react";
import DetailItem from "../../../../../../../components/reusable/DetailItem";
import ExtensionWork from "../../../../../../../models/entities/extension_work";
import ExtensionRolesItem from "../../../components/ExtensionWorksView/components/ExtensionRolesItem";
import PrintEmptyState from "../PrintEmptyState";
import PrintSubdocument from "../PrintSubdocument";

interface IPropsType {
    extensionWorks: ExtensionWork[];
}

export default class ExtensionWorks extends React.Component<IPropsType> {
    public render() {
        const { extensionWorks } = this.props;
        return (
            <React.Fragment>
                {extensionWorks.length === 0 && (
                    <PrintEmptyState subdocument="Extension Works" />
                )}

                {extensionWorks.length > 0 && (
                    <PrintSubdocument title="Extension Works">
                        <Grid container direction="row">
                            {extensionWorks.map(ew => {
                                return (
                                    <Grid item xs key={ew.id}>
                                        <DetailItem
                                            field="Title"
                                            value={ew.title}
                                        />
                                        <DetailItem
                                            field="Venue"
                                            value={ew.venue}
                                        />
                                        <ExtensionRolesItem
                                            field="Roles"
                                            extensionWorkRoles={ew.roles}
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
