import './Chat.css';

const Chat = () => {
    return (
      <div className="chat-container">
        <div className="chat-header">Name</div>
        <div className="chats">
          <div className="chat-from">
            <span className='bg-lvl3'>from</span>
          </div>
          <div className="chat-to text-right">
            <span className='bg-lvl2'>to</span>
          </div>
            </div>
            <div className="chat-text">
                <input type="text" className='form-control' />
            </div>
      </div>
    );
};

export default Chat;
