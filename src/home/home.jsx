import "./home.scss";

import { Switch, Route } from "react-router";

import Channel from "../channel/channel";

import Header from "../header/header";
import Sidebar from "./sidebar/sidebar";
import Menu from "./menu/menu";
import Videos from "../videos/videos";
import PlayerPage from "../player/player";

// Images
import Gussie from "../assets/images/Gussie.svg";
import FoodDrink from "../assets/images/Food-Drink-img.svg";
import Settings from "../assets/images/settings-img.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <div className="logo-item settings">
            <Link className="logo-item__navlink" to="/settings">
              <img src={Settings} alt="" />
              <h4 className="logo-item__heading">Settings</h4>
            </Link>
          </div>
        </div>
        <div className="home__pages-wrapper">
          <div>
            <Switch>
              <Route path="/channel" component={Channel}></Route>
            </Switch>
            <Switch>
              <Route path="/player" component={PlayerPage}></Route>
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
                      <h2 className="recommend-heading">Recommended</h2>
                    </div>
                    <ul className="channel-wrapper__item">
                      {items.map(video => (
                        <Videos key={video.id} title={video.title} />
                      ))}
                    </ul>
                    <div className="food-drink-wrapper">
                      <img
                        src={FoodDrink}
                        alt="there is a Gussie img"
                        width="50"
                        height="50"
                      />
                      <h2 className="food-drink__heading">Food & Drink</h2>
                      <p className="food-drink__paragraph">
                        Recommended channel for you
                      </p>
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
