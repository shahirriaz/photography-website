import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Header = React.lazy(() => import("./Header"));
const Gallery = React.lazy(() => import("./Gallery"));
const Contact = React.lazy(() => import("./Contact"));
const Prices = React.lazy(() => import("./Prices"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const Footer = React.lazy(() => import("./Footer"));
const Home = React.lazy(() => import("./Home"));
const Bestill = React.lazy(() => import("./Bestill"));

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <React.Suspense fallback={<p>Loading..</p>}>
            <Route path="/kontakt">
              <Header isSticky />
              <Contact />
            </Route>
            <Route path="/omoss">
              <Header isSticky />
              <AboutUs />
            </Route>
            <Route path="/priser">
              <Header isSticky />
              <Prices />
            </Route>
            <Route path="/bestill">
              <Header isSticky />
              <Bestill />
            </Route>
            <Route path="/galleri/:name">
              <Header isAnimated isAbsoluteFixed />
              <Gallery />
            </Route>
            <Route path="/:name"></Route>
            <Route path="/">
              <Header isAnimated isAbsoluteFixed />
              <Home />
            </Route>
          </React.Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
