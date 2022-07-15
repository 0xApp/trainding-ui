import { action, Action, thunk, Thunk } from "easy-peasy";
import { createChatMessage, getChats } from "../api/api";
import { Chat, CreateChat } from "../types/apitypes";
import { AppStoreModel } from "./model";

export interface ChatStoreModel {
  chats: Chat[];
  isOpen: boolean;
  to: string | null;
  from: string | null;
  setChats: Action<ChatStoreModel, Chat[]>;
  clearChat: Action<ChatStoreModel, void>;
  openChat: Action<ChatStoreModel, string>;
  addChat: Thunk<ChatStoreModel, CreateChat, {}, AppStoreModel>;
}

const chatStore: ChatStoreModel = {
  chats: [],
  isOpen: false,

  to: null,
  from: null,
  setChats: action((state, payload) => {
    state.chats = payload;
  }),
  addChat: thunk(async (action, payload, { getStoreState }) => {
    const { from, to } = getStoreState().chatStore;
    createChatMessage(payload).then(() => {
      getChats(from!, to!).then((c) => {
        action.setChats(c);
      });
    });
  }),
  clearChat: action((state, payload) => {
    state.chats = [];
    state.isOpen = false;
    state.to = null;
  }),
  openChat: action((state, payload) => {
    state.isOpen = true;
    state.to = payload;
    state.chats = [];
  }),
};

export { chatStore };
