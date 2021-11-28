import "./videos.scss";

import Creation from "../images/creation-img.png";

function Videos({ title }) {
  return (
    <div className="videos-wrapper">
      <li className="videos-wrapper__item">
        <img
          className="home-top__img"
          src={Creation}
          alt="pic"
          width="250"
          height="150"
        ></img>
        <h5 className="home-top__text">{title}</h5>

        <span><p className="text-tube">123k views · 1 months ago</p>
        <p>Ali Fayzullayev</p>
       </span>
      </li>
    </div>
  );
}

export default Videos;
