import {
    CommonFieldTypes,
    SitecoreIcon,
    Manifest
  } from "@sitecore-jss/sitecore-jss-manifest";
  
  /**
   * Adds the PageRoute component to the disconnected manifest.
   * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
   * @param {Manifest} manifest Manifest instance to add components to
   */
  export default function(manifest) {
    manifest.addRouteType({
      name: "page-route",
      displayName: "Page Route",
      inherits: ["App Route", "content-tile-data"],
      icon: "/~/icon/applications/32x32/document_plain.png"
    });
  }
  