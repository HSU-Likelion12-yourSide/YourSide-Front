import Sync from "./utils/Hydration";
import "./App.css";
import logo from "./dev/img/logo192.png";
import check from "./dev/img/modal-check.svg";

const App = () => {
  return (
    <Sync>
      <div id="title">
        <h1>Hello, Webpack with React!</h1>
        <div>
          <img src={check} alt="" width="100px" height="auto" />
          <img src={logo} alt="" />
        </div>
      </div>
    </Sync>
  );
};

export default App;
