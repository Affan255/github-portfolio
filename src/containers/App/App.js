import logo from "../../logo.svg";
import Header from "../../components/Header/Header.js";
import Profile from "../Profile/Profile.js";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
