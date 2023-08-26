import Receiver from "./Receiver";
import Sender from "./Sender";

function Message() {
  return (
    <div className=" flex-1 my-4">
      <Receiver />
      <Sender />
    </div>
  );
}

export default Message;
