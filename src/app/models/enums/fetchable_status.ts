enum FetchableStatus {
    Unfetched,
    Fetched,
    Fetching,
    Error,
}

export const FetchableStatusReadable = new Map<FetchableStatus, string>([
    [FetchableStatus.Unfetched, "Unfetched"],
    [FetchableStatus.Fetched, "Fetched"],
    [FetchableStatus.Fetching, "Fetching"],
    [FetchableStatus.Error, "Error"],
]);

export default FetchableStatus;
