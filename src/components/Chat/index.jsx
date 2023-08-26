import Input from "./../Input";
import { useRef } from "react";
import Messages from "./../Message";

function Chat() {
  const scroll = useRef();
  return (
    <main className=" md:basis-8/12    ">
      {/* chart info start */}

      {/* chart info  ends */}
      <Messages />
      <span ref={scroll}></span>
      <>
        <Input scroll={scroll} />
      </>
    </main>
  );
}

export default Chat;
