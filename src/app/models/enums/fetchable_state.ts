enum FetchableState {
    Unfetched,
    Fetched,
    Fetching,
    Error,
}

export const FetchableStateReadable = new Map<FetchableState, string>([
    [FetchableState.Unfetched, "Unfetched"],
    [FetchableState.Fetched, "Fetched"],
    [FetchableState.Fetching, "Fetching"],
    [FetchableState.Error, "Error"],
]);

export default FetchableState;
