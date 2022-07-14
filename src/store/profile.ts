import { action, Action, computed, Computed, thunk, Thunk } from "easy-peasy";
import { getProfile } from "../api/api";
import { Profile } from "../types/apitypes";
import { AppStoreModel } from "./model";

export interface ProfileStoreModel {
  profile: Profile | null;
  setProfile: Action<ProfileStoreModel, Profile | null>;
  login: Thunk<ProfileStoreModel, string, {}, AppStoreModel, Promise<boolean>>;
  loggedIn: Computed<ProfileStoreModel, boolean, AppStoreModel>;
}

const profileStore: ProfileStoreModel = {
  profile: null,
  setProfile: action((state, payload) => {
    state.profile = payload;
  }),
  login: thunk(async (actions, payload) => {
    // getProfile(payload)
    //   .then((p) => {
    //     console.log({ p });
    //     actions.setProfile(p);
    //   })
    //   .catch(() => {
    //     console.log({ error: 'login failed' });
    //     actions.setProfile(null);
    //   });
    try {
      var p = await getProfile(payload);
      actions.setProfile(p);
      return Promise.resolve(true);
    } catch (error) {
      actions.setProfile(null);
      return Promise.resolve(false);
    }
  }),
  loggedIn: computed((s) => s.profile !== null),
};

export { profileStore };
