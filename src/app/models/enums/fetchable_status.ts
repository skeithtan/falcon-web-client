enum FetchableStatus {
    Unfetched,
    Partial,
    Fetched,
    Fetching,
    Error,
}

export const FetchableStatusReadable = new Map<FetchableStatus, string>([
    [FetchableStatus.Unfetched, "Unfetched"],
    [FetchableStatus.Partial, "Partial"],
    [FetchableStatus.Fetched, "Fetched"],
    [FetchableStatus.Fetching, "Fetching"],
    [FetchableStatus.Error, "Error"],
]);

export default FetchableStatus;
