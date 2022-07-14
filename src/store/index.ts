import { createStore, createTypedHooks } from "easy-peasy";
import { appStore, AppStoreModel } from "./model";

var store = createStore(appStore);

const { useStoreState, useStoreActions } = createTypedHooks<AppStoreModel>();

export { store, useStoreActions, useStoreState }
