import React from "react";
// import Icons from "../Constants/icons";

function Sender() {
  return (
    <div className="flex flex-row-reverse gap-6 ml-auto my-2 pr-2">
      <div>
        <span className="bg-white p-3 rounded-r-lg rounded-bl-lg w-fit   relative">
          hi goodness
          <div className="text-[7px]    flex items-center absolute top-8 right-0  gap-1 ">
            <span>3:20pm</span>
            {/* <span className="">{Icons.messasegeNotRecieved()}</span> */}
          </div>
        </span>
        {/* if there is image it will display here */}
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Sender;
