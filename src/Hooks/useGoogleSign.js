import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";

function useGoogleSign() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return { signInWithGoogle };
}

export default useGoogleSign;
