import { profileStore, ProfileStoreModel } from "./profile";

export interface AppStoreModel {
    profileStore: ProfileStoreModel;
}

const appStore: AppStoreModel = {
    profileStore: profileStore,
}

export { appStore }
