import { auth } from "../firebase";
import Receiver from "./Receiver";
import Sender from "./Sender";
import { useAuthState } from "react-firebase-hooks/auth";

function Message({ message }) {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className=" flex-1 my-4">
      {message.uid === user.uid ? (
        <Sender message={message} />
      ) : (
        <Receiver message={message} />
      )}
    </div>
  );
}

export default Message;
