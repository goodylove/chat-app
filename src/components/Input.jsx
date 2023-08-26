import { useState } from "react";
import { auth, db } from "./../firebase/index";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";

function Input({ scroll }) {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      alert("Please enter a message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" p-3  flex bg-white justify-between items-center fixed bottom-0 w-full ">
      <input
        type="text"
        placeholder="enter your text"
        className=" outline-none bg-white "
      />
      <div className="flex gap-2 items-center">
        <img src="/attachment.png" alt="" className="w-5 h-5" />
        <input
          type="file"
          id="file"
          className="hidden"
          value={message}
          onChange={(e) => sendMessage(e.target.value)}
        />
        <label htmlFor="file">
          <img src="gallery_input.png" alt="" className="w-5 h-5" />
        </label>
        <button className="bg-gray-500 rounded-sm py-1 px-2 text-sm  text-white">
          Send
        </button>
      </div>
    </div>
  );
}

export default Input;
