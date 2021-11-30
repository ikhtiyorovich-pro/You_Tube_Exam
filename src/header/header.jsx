import "./header.scss";

import useThema from "../hooks/useThema";

// Images
import UserPhoto from "../../src/assets/images/user-photo.JPEG";
import BlackLogo from "../libs/black-logo";
import Hamburger from "../libs/hamburger-img";
import SearchIcon from "../libs/search-icon";
import VideoIcon from "../libs/video-icon";
import ShapeIcon from "../libs/shape-icon";
import CallIcon from "../libs/call-icon";
import { NavLink } from "react-router-dom";

function Header() {
  const [thema, setThema] = useThema();
  return (
    <div className={thema}>
      <div className="container">
        <ul className="header__list">
          <li className="header__logo-item">
            <span className="hamburger-span">
              <Hamburger />
            </span>
            <span>
              <NavLink to="/">
                <BlackLogo />
              </NavLink>
            </span>
          </li>
          <li className="header__search-item">
            <form className="search-item__form">
              <span className="form__span">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Search..."
                />
                <SearchIcon />
              </span>
            </form>
          </li>
          <select
            defaultValue={thema}
            onChange={evt => setThema(evt.target.value)}
          >
            <option value="light">l ight</option>
            <option value="dark">dark</option>
          </select>
          <li className="three-icons-item">
            <span className="three-icons-span">
              <VideoIcon />
              <ShapeIcon />
              <CallIcon />
            </span>
            <img
              className="user-photo"
              src={UserPhoto}
              alt=""
              width="40"
              height="40"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
