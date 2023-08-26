import React from "react";
import Message from "./Message";

export const Messages = () => {
  return (
    <div className="bg-gray-300  h-[83%] pl-3  overflow-y-scroll chat-1">
      <Message />
    </div>
  );
};
