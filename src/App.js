import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Prices from "./Prices";
import AboutUs from "./AboutUs";
import Home from "./Home";
import HashLoader from "react-spinners/HashLoader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="app__loader--container">
          <HashLoader color={"#ff8c27"} loading={loading} size={150} />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route path="/contact">
              <Header isSticky />
              <Contact />
              <Footer />
            </Route>
            <Route path="/aboutUs">
              <Header isSticky />
              <AboutUs />
              <Footer />
            </Route>
            <Route path="/prices">
              <Header isSticky />
              <Prices />
              <Footer />
            </Route>
            <Route path="/gallery">
              <Header isSticky />
              <Gallery />
            </Route>
            <Route path="/home">
              <Header isAnimated isAbsoluteFixed />
              <Home />
            </Route>
            <Route path="/">
              <Header isAnimated isAbsoluteFixed />
              <Home />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
