import "./home.scss";

import { Switch, Route } from "react-router";

import Channel from "../channel/channel";

import Header from "../header/header";
import Sidebar from "./sidebar/sidebar";
import Menu from "./menu/menu";
import Videos from "../videos/videos";

// Images
import Gussie from "../images/Gussie.svg";
// import Creation from "../images/creation-img.png";
import { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);
  return (
    <div>
      <Header />

      <div className="home">
        <div className="change-pages two-pages-wrapper">
          <div className="menu-sidebar-wrapper">
            <Menu />
            <Sidebar />
          </div>
        </div>
        <div className="home__pages-wrapper">
          <div>
            <Switch>
              <Route path="/channel" component={Channel}></Route>
            </Switch>
            <Switch>
              <Route path="/" component={Home} exact>
                <div className="channel-wrapper">
                  <ul className="channel-wrapper__list">
                    <li>
                      <img
                        src={Gussie}
                        alt="there is a Gussie img"
                        width="40"
                        height="40"
                      />
                      <h2>GussieSingleton</h2>
                    </li>
                    <ul className="channel-wrapper__item">
                      {items.map(video => (
                        <Videos key={video.id} title={video.title} />
                      ))}
                    </ul>
                  </ul>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
