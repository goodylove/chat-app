import { useContext, useRef, useState } from "react";
import Input from "./../Input";
import { DbContext } from "../DbContext";
import { useEffect } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import Message from "./../Message";
import { Messages } from "./../Messages";

function Chat() {
  const scroll = useRef();
  const [message, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc"),
      limit(10)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const getMassege = [];
      QuerySnapshot.forEach((doc) => {
        getMassege.push({ ...doc.data(), id: doc.id });
      });

      // const sorted = getMassege.sort((a, b) => a.createdAt - b.createdAt);
      setMessages(getMassege);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className=" md:basis-8/12">
      {/* chart info start */}
      {/* chart info  ends */}
      {message.length > 0 ? (
        message.map((message) => {
          return <Messages key={message.id} message={message} />;
        })
      ) : (
        <div className="flex justify-center items-center h-[67vh] flex-col">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2665/2665038.png"
            width={100}
          />
          <span className=" font-serif">Start a Conversation</span>
        </div>
      )}
      <span ref={scroll}></span>
      <>
        <Input scroll={scroll} />
      </>
    </main>
  );
}

export default Chat;
