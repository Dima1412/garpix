import "./App.css";
import React from "react";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import Content from "./components/Content/Content";
import FooterContainer from "./components/FooterContainer/FooterContainer";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, HashRouter } from "react-router-dom";
import AppleMusic from "./components/Content/AppleMusic/AppleMusic";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <ScrollToTop>
          <div className="app-wrapper">
            <HeaderContainer />
            <Route
              exact
              path="/"
              render={() => <Redirect to={"/partners"} />}
            />
            <Route path="/coupons" component={Content} />
            <Route path="/impressions" component={Content} />
            <Route path="/aviatickets" component={Content} />
            <Route path="/traintickets" component={Content} />
            <Route path="/hotels" component={Content} />
            <Route path="/carsharing" component={Content} />
            <Route path="/theaters" component={Content} />
            <Route path="/insurance" component={Content} />
            <Route path="/connect" component={Content} />
            <Route exact path="/partners" component={Content} />
            <Route path="/partners/apple" component={AppleMusic} />
            <FooterContainer />
          </div>
        </ScrollToTop>
      </Provider>
    </HashRouter>
  );
}

export default App;
