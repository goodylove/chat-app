import { auth } from "./../../firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../Button";
import useGoogleSign from "../../Hooks/useGoogleSign";

function NavBar() {
  const { signInWithGoogle } = useGoogleSign();
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
  };
  return (
    <nav className="flex w-full justify-between px-3 bg-black py-3 items-center fixed top-0">
      <div className="text-2xl font-bold text-white">Let's Chat</div>

      {user ? (
        <button
          onClick={signOut}
          className="bg-white p-2 rounded-sm text-md font-bold"
        >
          Sign Out
        </button>
      ) : (
        <Button onClick={signInWithGoogle} />
      )}
    </nav>
  );
}

export default NavBar;
