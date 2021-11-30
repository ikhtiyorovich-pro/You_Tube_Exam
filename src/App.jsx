import { Route, Switch } from "react-router";
import "./App.scss";
import "./assets/fonts/fonts.scss";

import Home from "./home/home";
import PlayerPage from "./player/player";
import Channel from "./channel/channel";

// Pages

function App() {

  return (
    <div>
      <div className="app site-wrapper">
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/channel" component={Channel}></Route>
            <Route path="/player" component={PlayerPage}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
