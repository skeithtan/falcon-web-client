enum UserType {
    Dean = "Dean",
    AssociateDean = "AssociateDean",
    Faculty = "Faculty",
    Clerk = "Clerk",
    Guest = "Guest",
}

export const UserTypeReadable = new Map<UserType, string>([
    [UserType.Dean, "Dean"],
    [UserType.AssociateDean, "Associate Dean"],
    [UserType.Faculty, "Faculty Member"],
    [UserType.Clerk, "Clerk"],
    [UserType.Guest, "Guest"],
]);

export default UserType;
