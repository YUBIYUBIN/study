import { useState } from "react";

import "./App.css";

const App = () => {
  const [isShowing, setIsShowing] = useState(true);
  const changeShowOrHide = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <div>Hello , welcome to YUBIN's website!</div>
      <div>
        <input placeholder="Email" />
      </div>
      <div>
        <input placeholder="Password" type={isShowing ? "password" : "text"} />{" "}
        <button className="showOrHide" onClick={changeShowOrHide}>
          {!isShowing ? "hide" : "show"}
        </button>
      </div>
      <button className="loginAndSignUp">Login</button>
      <button className="loginAndSignUp">Sign up</button>
    </>
  );
};

export default App;
