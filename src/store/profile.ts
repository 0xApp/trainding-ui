import { action, Action, computed, Computed, thunk, Thunk } from "easy-peasy";
import { getProfile, setGoal, setTag } from "../api/api";
import { Profile, UserCourse } from "../types/apitypes";
import { AppStoreModel } from "./model";

export interface ProfileStoreModel {
  profile: Profile | null;
  setProfile: Action<ProfileStoreModel, Profile | null>;

  courses: UserCourse[];
  setCourses: Action<ProfileStoreModel, UserCourse[]>;

  login: Thunk<ProfileStoreModel, string, {}, AppStoreModel, Promise<boolean>>;
  setGoal: Thunk<
    ProfileStoreModel,
    number,
    {},
    AppStoreModel,
    Promise<boolean>
  >;
  setTag: Thunk<
    ProfileStoreModel,
    { tag: string; checked: boolean },
    {},
    AppStoreModel,
    Promise<boolean>
  >;
  loggedIn: Computed<ProfileStoreModel, boolean, AppStoreModel>;
}

const profileStore: ProfileStoreModel = {
  profile: null,
  setProfile: action((state, payload) => {
    state.profile = payload;
  }),

  courses: [],
  setCourses: action((state, payload) => {
    state.courses = payload;
  }),

  login: thunk(async (actions, payload) => {
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
  setGoal: thunk(async (actions, payload, { getState }) => {
    var { profile } = getState();
    try {
      await setGoal(profile!.id, payload);
      actions.setProfile({
        ...profile!,
        goal: payload,
      });
      return Promise.resolve(true);
    } catch (error) {
      actions.setProfile(null);
      return Promise.resolve(false);
    }
  }),
  setTag: thunk(async (actions, payload, { getState }) => {
    var { profile } = getState();
    try {
      await setTag(profile!.id, payload.tag, payload.checked);
      if (payload.checked) {
        actions.setProfile({
          ...profile!,
          tags: [...profile!.tags, payload.tag],
        });
      } else {
        actions.setProfile({
          ...profile!,
          tags: profile!.tags.filter((t) => t !== payload.tag),
        });
      }

      return Promise.resolve(true);
    } catch (error) {
      actions.setProfile(null);
      return Promise.resolve(false);
    }
  }),
};

export { profileStore };
