enum Sex {
    Male = "Male",
    Female = "Female",
}

export const SexReadable = new Map<Sex, string>([
    [Sex.Male, "Male"],
    [Sex.Female, "Female"],
]);

export default Sex;
