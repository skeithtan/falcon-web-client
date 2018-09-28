enum ExtensionWorkRole {
    Lecturer = "Lecturer",
    Trainer = "Trainer",
    ResourceSpeaker = "ResourceSpeaker",
    Facilitator = "Facilitator",
    Coach = "Coach",
    MaterialWriter = "MaterialWriter",
}

export const ExtensionWorkRoleReadable = new Map<ExtensionWorkRole, string>([
    [ExtensionWorkRole.Lecturer, "Lecturer"],
    [ExtensionWorkRole.Trainer, "Trainer"],
    [ExtensionWorkRole.ResourceSpeaker, "Resource Speaker"],
    [ExtensionWorkRole.Facilitator, "Facilitator"],
    [ExtensionWorkRole.Coach, "Coach"],
    [ExtensionWorkRole.MaterialWriter, "Material Writer"],
]);

export default ExtensionWorkRole;
