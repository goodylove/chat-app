import { createContext, useRef } from "react";
import { useState } from "react";

import { auth, db } from "./../firebase/index";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";

export const DbContext = createContext();

export const ContextProvider = ({ children }) => {
  const scroll = useRef();
  const [message, setMessage] = useState("");
  const [typed, setTyped] = useState("");

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
    setTyped(message);
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const context = {
    message,
    setMessage,
    sendMessage,
    scroll,
    typed,
  };
  return <DbContext.Provider value={context}>{children}</DbContext.Provider>;
};
