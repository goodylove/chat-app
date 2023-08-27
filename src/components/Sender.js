import React, { useContext } from "react";
import { DbContext } from "./DbContext";
// import Icons from "../Constants/icons";
import Message from "./Message";

function Sender({ message }) {
  const messageTime = new Date(message.createdAt);
  console.log(messageTime);
  return (
    <>
      <div className="flex flex-row-reverse gap-6 ml-auto my-2 pr-2">
        <div>
          <span className="bg-white p-3 rounded-r-lg rounded-bl-lg w-fit   relative">
            {message}

            <div className="text-[7px]    flex items-center absolute top-8 right-0  gap-1 ">
              <span></span>
              {/* <span className="">{Icons.messasegeNotRecieved()}</span> */}
            </div>
          </span>
          {/* if there is image it will display here */}
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default Sender;
