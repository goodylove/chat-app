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
      orderBy("createdAt", "desc"),
      limit(10)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      console.log(q);
      const getMassege = [];
      QuerySnapshot.forEach((doc) => {
        getMassege.push({ ...doc.data(), id: doc.id });
      });

      // const sorted = getMassege.sort((a, b) => a.createdAt - b.createdAt);
      setMessages(getMassege);
      console.log(message);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className=" md:basis-8/12">
      {/* chart info start */}

      {/* chart info  ends */}

      {message?.map((message) => {
        return <Messages key={message.id} message={message} />;
      })}

      <span ref={scroll}></span>
      <>
        <Input scroll={scroll} />
      </>
    </main>
  );
}

export default Chat;
