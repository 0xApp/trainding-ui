import { chatStore, ChatStoreModel } from "./chat";
import { profileStore, ProfileStoreModel } from "./profile";

export interface AppStoreModel {
    profileStore: ProfileStoreModel;
    chatStore: ChatStoreModel;
}

const appStore: AppStoreModel = {
    profileStore: profileStore,
    chatStore: chatStore,
}

export { appStore }
