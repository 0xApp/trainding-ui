import { useStoreActions, useStoreState } from "../../store";
import "./Chat.css";

const Chat = () => {
  const { to } = useStoreState((s) => s.chatStore);
  const { clearChat } = useStoreActions((s) => s.chatStore);
  return (
    <div className="chat-container">
      <div className="chat-header">
        <span>{to}</span>
        <span style={{ float: "right" }}>
          <button
            className="btn btn-flat btn-sm"
            onClick={() => {
              clearChat();
            }}
          >
            &times;
          </button>
        </span>
      </div>
      <div className="chats">
        <div className="chat-from">
          <span className="bg-lvl3">
            Hey would you like to follow DotNet course with me?
          </span>
        </div>
        <div className="chat-to text-right">
          <span className="bg-lvl2">
            Hello B, since you are joining. I will join too.
          </span>
        </div>
        <div className="chat-to text-right">
          <span className="bg-lvl2">Let's register.</span>
        </div>
        <div className="chat-from">
          <span className="bg-lvl3">Yes Let's do it.</span>
        </div>
      </div>
      <div className="chat-text">
        <input type="text" className="form-control" />
      </div>
    </div>
  );
};

export default Chat;
