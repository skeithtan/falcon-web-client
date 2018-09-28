enum PresentationMedium {
    Paper = "Paper",
    Poster = "Poster",
    Research = "Research",
}

export const PresentationMediumReadable = new Map<PresentationMedium, string>([
    [PresentationMedium.Paper, "Paper"],
    [PresentationMedium.Poster, "Poster"],
    [PresentationMedium.Research, "Research"],
]);

export default PresentationMedium;
