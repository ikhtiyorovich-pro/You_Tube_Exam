import "./channel.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Videos from "../videos/videos";

// Images
import VideoImg from "../assets/images/Video-img.png";
import Nora from "../assets/images/Nora.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import CallIcon from "../assets/images/call-icon.svg";

function Channel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);
  return (
    <div className="channel">
      <div className="channel-all-wrapper">
        <div className="channel-top-big-img"></div>
        <div>
          <div>
            <div className="channeller-top-wrapper">
              <div className="channeller-wrapper">
                <img
                  className="channeller-img"
                  src={Nora}
                  alt="there is a Nora img"
                  width="80"
                  height="80"
                />
                <span>
                  <h2>Margaret Phelps</h2>
                  <p className="subs-paragraph">245K subscribed</p>
                </span>
              </div>
              <div className="subs-link-wrapper">
                <img
                  src={CallIcon}
                  alt="there is a call img"
                  width="22"
                  height="26"
                />
                <p className="subs-link-p">Subscribe 2.3m</p>
              </div>
            </div>
            <li className="links-wrapper">
              <Link className="channel-mini-links" to="/">
                Home
              </Link>
              <Link className="channel-mini-links" to="/player">
                Videos
              </Link>
              <Link className="channel-mini-links" to="/player">
                Playlists
              </Link>
              <Link className="channel-mini-red-link" to="/channel">
                Channels
              </Link>
              <Link className="channel-mini-links" to="/channel">
                Discussion
              </Link>
              <Link className="channel-mini-links" to="/channel">
                About
              </Link>
              <img src={SearchIcon} alt="" />
            </li>
          </div>
          <div className="main-video-wrapper">
            <div>
              <Link to="/player">
                <img
                  className="main-video-wrapper__img"
                  src={VideoImg}
                  alt=""
                />
              </Link>
            </div>
            <div>
              <h3 className="main-video-wrapper__heading">
                Choosing The Best Audio Player Software For Your Computer
              </h3>
              <p className="main-video-wrapper__paragraph">
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads.
              </p>
              <p className="main-video-wrapper__mini-paragraph">
                11k views · 6 months ago
              </p>
            </div>
          </div>
          <div className="bottom-video-wrapper">
            <h2 className="bottom-video-wrapper__heading">
              Margaret Phelps videos
            </h2>

            <ul className="channel-wrapper__item">
              {items.map(video => (
                <Videos key={video.id} title={video.title} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
