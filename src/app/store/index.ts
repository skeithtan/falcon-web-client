import authentication, { AuthenticationState } from "./authentication";

interface IRootStore {
    authentication: AuthenticationState;
}

const rootStore: IRootStore = {
    authentication,
};

export default rootStore;
