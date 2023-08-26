import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import NavBar from "./components/NavBar";
import Welcome from "./components/welcome";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);
  return (
    <main className="App">
      <NavBar />
      <>{!user ? <Welcome /> : <Chat />}</>
    </main>
  );
}

export default App;
