import {
    CommonFieldTypes,
    SitecoreIcon,
    Manifest
  } from "@sitecore-jss/sitecore-jss-manifest";
  
  /**
   * Adds the ContentTileData component to the disconnected manifest.
   * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
   * @param {Manifest} manifest Manifest instance to add components to
   */
  const contentTileSection = "Content Tile Data";

  export default function(manifest) {  
    manifest.addRouteType({
      name: "content-tile-data",
      displayName: "Content Tile Data",
      fields: [
        { section: contentTileSection, name: "tileTitle", displayName: "Tile Title", type: CommonFieldTypes.SingleLineText },
        { section: contentTileSection, name: "tileDescription", displayName: "Tile Description", type: CommonFieldTypes.SingleLineText },
        { section: contentTileSection, name: "tileImage", displayName: "Tile Image", type: CommonFieldTypes.Image },
        { section: contentTileSection, name: "authorTag", displayName: 'Blog Author', type: "treelist", source: "/sitecore/content/learningcenter/content/Authors" },
      ],
    });
  }
  