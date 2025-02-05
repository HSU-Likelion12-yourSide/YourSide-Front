import "./App.css";
import logo from "./dev/img/logo192.png";

const App = () => {
  return (
    <div id="title">
      <h1>Hello, Webpack with React!</h1>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default App;
