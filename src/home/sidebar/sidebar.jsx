import "./sidebar.scss";

import { Link } from "react-router-dom";

// Pages
import Gussie from "../../assets/images/Gussie.svg"
import Nora from "../../assets/images/Nora.svg"
import Belle from "../../assets/images/Belle.svg"
import Eunice from "../../assets/images/Eunice.svg"
import Emma from "../../assets/images/Emma.svg"
import Leah from "../../assets/images/Leah.svg"


function Sidebar() {
  return (
    <div>
      <ul className="sidebar__list">
      <p className="sidebar__paragraph">Subscriptions</p>
        <li className="logo-item">
          <Link className="logo-item__navlink" to="/channel"> <img src={Gussie} alt="" />
          <h4 className="logo-item__heading">GussieSingleton</h4>
          <span></span>
          </Link>
        </li>
        <li className="logo-item">
          <Link className="logo-item__navlink" to="/channel"> <img src={Nora} alt="" />
          <h4 className="logo-item__heading">NoraFrancis</h4>
          </Link>
        </li>
        <li className="logo-item">
          <Link className="logo-item__navlink" to="/channel"> <img src={Belle} alt="" />
          <h4 className="logo-item__heading">BelleBriggs</h4>
          </Link>
        </li>
        <li className="logo-item">
          <Link className="logo-item__navlink" to="/channel"> <img src={Eunice} alt="" />
          <h4 className="logo-item__heading">EuniceCortez</h4>
          </Link>
        </li>
        <li className="logo-item">
          <Link className="logo-item__navlink" to="/channel"> <img src={Emma} alt="" />
          <h4 className="logo-item__heading">EmmaHanson</h4>
          </Link>
        </li>
        <li className="logo-item">
          <Link className="logo-item__navlink" to="/channel"> <img src={Leah} alt="" />
          <h4 className="logo-item__heading">LeahBerry</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
