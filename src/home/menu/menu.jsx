import "./menu.scss";

// Images
import MenuHomeIcon from "../../images/menu-home-icon.png";
import MenuTrendingIcon from "../../images/menu-trending-icon.png";
import MenuSubscriptionsIcon from "../../images/menu-subscriptions-icon.png";
import MenuLibraryIcon from "../../images/menu-library-icon.png";
import MenuHistoryIcon from "../../images/menu-history-icon.png";
import MenuLaterIcon from "../../images/menu-later-icon.png";
import MenuFavouritesIcon from "../../images/menu-favourites-icon.png";
import MenuLikedIcon from "../../images/menu-liked-icon.png";
import MenuMusicIcon from "../../images/menu-music-icon.png";
import MenuGamesIcon from "../../images/menu-games-icon.png";
import MenuMoreIcon from "../../images/menu-more-icon.png";

function Menu() {
  return (
    <div>
      <ul className="menu-icons">
        <li className="menu-icons__item">
          <img className="menu-icons__img" src={MenuHomeIcon} alt="Home-icon" />
          <h5 className="menu-icons__heading-red"> Home</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuTrendingIcon}
            alt="Trending-icon"
          />
          <h5 className="menu-icons__heading">Trending</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuSubscriptionsIcon}
            alt="Subscriptions-icon"
          />
          <h5 className="menu-icons__heading"> Subscriptions</h5>
        </li>
        <br />
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuLibraryIcon}
            alt="Library-icon"
          />
          <h5 className="menu-icons__heading">Library</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuHistoryIcon}
            alt="History-icon"
          />
          <h5 className="menu-icons__heading">History</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuLaterIcon}
            alt="Watch-later-icon"
          />
          <h5 className="menu-icons__heading"> Watch later</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuFavouritesIcon}
            alt="Favourites-icon"
          />
          <h5 className="menu-icons__heading">Favourites</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuLikedIcon}
            alt="Liked-videos-icon"
          />
          <h5 className="menu-icons__heading">Liked videos</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuMusicIcon}
            alt="Music-icon"
          />
          <h5 className="menu-icons__heading">Music</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuGamesIcon}
            alt="Games-icon"
          />
          <h5 className="menu-icons__heading"> Games</h5>
        </li>
        <li className="menu-icons__item">
          <img
            className="menu-icons__img"
            src={MenuMoreIcon}
            alt="Show-more-icon"
          />
          <h5 className="menu-icons__heading">Show more</h5>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
