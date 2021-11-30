import "./player.scss";

import FoodDrink from "../assets/images/Food-Drink-img.svg";
import { useEffect, useState } from "react";

import Videos from "../videos/videos";
import { Route, Switch } from "react-router";

function PlayerPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <div className="player-all-wrapper">
        <div>
          <div className="iframe-wrapper">
            <iframe
              className="iframe-video"
              width="940"
              height="506"
              src="https://www.youtube.com/embed/3wiYAuIaios"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
            <div>
              <div>
                <h2 className="iframe-wrapper__heading">
                  Dude You Re Getting A Telescope
                </h2>
                <p className="iframe-wrapper__paragraph">123k views</p>
              </div>
              <div></div>
            </div>
          </div>
          <hr className="player-hr" />
          <div>
            <div className="player-bottom-wrapper">
              <div className="player-bottom-wrapper__img-wrapper">
                <img
                  className="player-bottom-wrapper__img"
                  src={FoodDrink}
                  alt="there is a food img"
                  width="80"
                  height="80"
                />
              </div>
              <div>
                <div className="player-bottom-wrapper__headings-wrapper">
                  <span>
                    <h3 className="player-bottom-wrapper__heading">
                      Food & Drink
                    </h3>
                    <p className="player-bottom-wrapper__mini-paragraph">
                      Published on 14 Jun 2019
                    </p>
                  </span>
                  <span className="player-bottom-wrapper__span">
                    Subscribe 2.3m
                  </span>
                </div>
                <p className="player-bottom-wrapper__paragraph">
                  A successful marketing plan relies heavily on the
                  pulling-power of advertising copy. Writing result-oriented ad
                  copy is difficult, as it must appeal to, entice, and convince
                  consumers to take action. There is no magic formula to write
                  perfect ad copy; it is based on a number of factors, including
                  ad placement, demographic, even the consumer’s mood when they
                  see your ad.
                </p>
                <p className="player-bottom-wrapper__show-more">Show more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-right-wrapper">
          <h3 className="form-right-wrapper__heading">Next</h3>

          <Switch>
            <Route to="./player">
              <ul className="form-right-wrapper__videos-item">
                {items.map(video => (
                  <div className="form-right-wrapper__video-wrapper">
                    <Videos key={video.id} title={video.title} />
                  </div>
                ))}
              </ul>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
