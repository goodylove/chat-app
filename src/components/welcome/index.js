import Button from "../Button";
import useGoogleSign from "../../Hooks/useGoogleSign";

function Welcome() {
  const { signInWithGoogle } = useGoogleSign();
  return (
    <div className=" flex items-center  h-[79vh] justify-center font-serif">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2>Welcome to Let's chat app</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46Kyi7Mj7BrRNTa0x-VewKGP9xqkm7zrb6uliA9KhhldhbZhh" />
        <h3 className="text-xl">
          Sign in with your google account to get started
        </h3>
        <Button onClick={signInWithGoogle} />
      </div>
    </div>
  );
}

export default Welcome;
