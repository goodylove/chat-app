import GoogleButton from "react-google-button";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./../../firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";

function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    console.log(user);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <nav className="flex w-full justify-between px-3 bg-black py-3 items-center">
      <div className="text-2xl font-bold text-green-300">CHAT APP</div>

      {user ? (
        <button
          onClick={signOut}
          className="bg-white p-2 rounded-sm text-md font-bold"
        >
          Sign Out
        </button>
      ) : (
        <GoogleButton style={{ width: "153px" }} onClick={signInWithGoogle} />
      )}
    </nav>
  );
}

export default NavBar;
