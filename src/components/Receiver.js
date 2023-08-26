function Receiver() {
  return (
    <div className="flex my-2">
      {/* <div className="flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBwbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span>just now</span>
      </div> */}
      <div className="">
        <span className="bg-white p-3 rounded-r-lg rounded-bl-lg w-fit  relative">
          hello nwachukwu goodness
          <span className="text-[6px]  absolute top-8 right-1 ">3:20pm</span>
        </span>
        {/* if there is image it will display here */}
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Receiver;
