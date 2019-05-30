// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the DyanmicDisplayOfBlogArticles component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'DyanmicDisplayOfBlogArticles',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: "defaultCardImage", displayName: 'Default Grid Card', type: CommonFieldTypes.Image },
    ],
    params: [
      { name: "contentSource", displayName: 'Grid Content Source', type: "Internal Link", source: "/sitecore/content/test/home" },
    ],
    /*
    standardValue: '<image alt="content card" mediaid="{14478F87-8535-526D-8CAD-3E2D1DD84C2B}" />' 
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
