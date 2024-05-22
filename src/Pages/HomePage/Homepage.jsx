import Blink from "../../components/Blink/Blink";

import "./HomePage.css";
const Homepage = () => {
  return (
    <>
      <div className="HomePage">
        <div className="Navbar">
          <h1>Blinke</h1>
          <div className="buttons">
            <button className="btn_search">Search</button>
            <button id="btn_SignOut">Cerrar sesión</button>
          </div>
        </div>
        <div className="Nav_create">
          <h2 id="feed-title">Tu Feed</h2>
          <button id="btn_create">Create Blink</button>
        </div>
        <div className="Blinks_container"></div>
      </div>
    </>
  );
};
export default Homepage
