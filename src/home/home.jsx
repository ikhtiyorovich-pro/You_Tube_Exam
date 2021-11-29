import "./home.scss";

import { Switch, Route } from "react-router";

import Channel from "../channel/channel";

import Header from "../header/header";
import Sidebar from "./sidebar/sidebar";
import Menu from "./menu/menu";
import Videos from "../videos/videos";

// Images
import Gussie from "../assets/images/Gussie.svg";
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
                  <div className="channel-wrapper__list">
                    <div className="channel-wrapper__akk-item">
                      <img
                        src={Gussie}
                        alt="there is a Gussie img"
                        width="40"
                        height="40"
                      />
                      <h2 className="akk-item__heading">Dollie Blair</h2>
                    </div>
                    <ul className="channel-wrapper__item">
                      {items.map(video => (
                        <Videos key={video.id} title={video.title} />
                      ))}
                    </ul>
                    <div className="recommended-wrapper">
                      <h2 className="akk-item__heading">Recommended</h2>
                    </div>
                    <ul className="channel-wrapper__item">
                      {items.map(video => (
                        <Videos key={video.id} title={video.title} />
                      ))}
                    </ul>
                    <div className="recommended-wrapper">
                      <h2 className="akk-item__heading">Food & Drink</h2>
                      <p className="akk-item__heading">Recommended channel for you</p>
                    </div>
                    <ul className="channel-wrapper__item">
                      {items.map(video => (
                        <Videos key={video.id} title={video.title} />
                      ))}
                    </ul>
                  </div>
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
