import React from "react";
import Message from "./Message";
import Sender from "./Sender";

export const Messages = ({ message }) => {
  return (
    // <div className="bg-gray-300  h-[83%] pl-3  overflow-y-scroll chat-1">
    //   <Sender message={message} />
    // </div>
    <div className="flex flex-row-reverse gap-6 ml-auto my-2 pr-2">
      <div>
        <span className="bg-white p-3 rounded-r-lg rounded-bl-lg w-fit   relative">
          {message.text}

          <div className="text-[7px]    flex items-center absolute top-8 right-0  gap-1 ">
            <span></span>
            {/* <span className="">{Icons.messasegeNotRecieved()}</span> */}
          </div>
        </span>
        {/* if there is image it will display here */}
        <img src="" alt="" />
      </div>
    </div>
  );
};
