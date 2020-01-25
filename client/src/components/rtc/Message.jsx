import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageSent">
      <p className="sentBy">{trimmedName}</p>
      <div className="messageSentBox">
        <p className="messageSentText">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageReceived">
      <div className="messageBox">
        <p className="messageText">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="receivedFrom">{user}</p>
    </div>
  );
};

export default Message;
