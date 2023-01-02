import "./App.css";
import { LeftMenu } from "./components/LeftMenu";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <maincontainer />
      <rightmenu />
      <div className="background"></div>
    </div>
  );
}

export default App;
