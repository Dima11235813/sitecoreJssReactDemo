import React from "react";
import {
  Placeholder,
  VisitorIdentification
} from "@sitecore-jss/sitecore-jss-react";
import { NavLink } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import Helmet from "react-helmet";
import LayoutFooter from "./Footer";

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import "bootstrap/dist/css/bootstrap.css";
import "./assets/app.css";
import logo from "./assets/sc_logo.png";

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
let Navigation = ({ t, i18n }) => {
  const navStyle = {
    marginBottom: "0px !important",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "15px",
    paddingRight: "15px"
  };
  // const themeFromProps = theme ? theme : 'dark'
  const themeFromProps = "light";
  // const colorForNavigationTitle = themeFromProps === "darkTheme" ? 'darkTitleStyles' : 'lightTitleStyles'
  const colorForNavigationTitle = "lightTitleStyles";
  // const navClass = themeFromProps === "darkTheme" ? "darkNavClass" : "lightNavClass"
  const navClass = "lightNavClass";
  return (
    <header className={`${themeFromProps} navbar-default`} style={navStyle}>
      <h5 className="">
        <NavLink to="/" className="text-dark">
          <img src={logo} alt="SiteCore" style={{ maxHeight: "84px" }} />
          <span
            className={`site-header-title ${colorForNavigationTitle}`}
            style={{ marginLeft: "1em" }}
          >
            Generic Inc Proudly Presents
          </span>
        </NavLink>
      </h5>
      <nav className={navClass}>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/News">News</NavLink>
        <NavLink to="/Contact">Contact Us</NavLink>
      </nav>
    </header>
  );
};

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes
Navigation = withNamespaces()(Navigation);

const Layout = ({ sitecoreData }) => {
  const {route, context } = sitecoreData
  const containerStyle = {
    minHeight: "calc(100vh - 192px)",
    maxWidth: "1200px"
  };
  // let containerClassStyle
  let containerClassStyle = "lightTheme";
  // switch(themeColor){
  //   case "dark":
  //     containerClassStyle = "darkTheme"
  //     break
  //   case "light":
  //     containerClassStyle = "lightTheme"
  //     break
  // }
  // debugger
  return (
    <React.Fragment>
      {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
      <Helmet>
        <title>
          {(route.fields &&
            route.fields.pageTitle &&
            route.fields.pageTitle.value) ||
            "Page"}
        </title>
      </Helmet>

      {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
      <VisitorIdentification />

      <Navigation theme={containerClassStyle} />

      {/* root placeholder for the app, which we add components to using route data */}
      <div
        className={`container-fluid ${containerClassStyle}`}
        style={containerStyle}
      >
        <div className="containter">
          <Placeholder name="jss-main" rendering={route} context={context}/>
        </div>
      </div>

      <LayoutFooter />
    </React.Fragment>
  );
};

export default Layout;
