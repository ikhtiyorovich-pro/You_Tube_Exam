import "./videos.scss";

import Hotel from "../assets/images/Hotel-img.png";
import { Link } from "react-router-dom";

function Videos({ title }) {
  return (
    <div className="videos-wrapper">
      <li className="videos-wrapper__item">
        <Link className="Link" to="/player">
          <img
            className="home-top__img"
            src={Hotel}
            alt="pic"
            width="250"
            height="150"
          ></img>
          <h4 className="home-top__text">{title}</h4>
        </Link>
        <span className="tube-span">
          <p className="text-tube">18k views · 2 days ago</p>
          <p className="text-mini-tube">Ali Fayzullayev</p>
        </span>
      </li>
    </div>
  );
}

export default Videos;
