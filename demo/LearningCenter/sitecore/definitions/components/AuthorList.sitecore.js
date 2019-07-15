// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the AuthorProfile component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'AuthorProfile',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'authorName', type: CommonFieldTypes.SingleLineText },
      { name: 'authorImage', type: CommonFieldTypes.Image },
      { name: 'authorDetails', type: CommonFieldTypes.RichText },
    ],
    params: [
      { name: "headingColor", displayName: 'Author Heading Color', type: 'droplist', source: '/sitecore/content/learningcenter/Content/Colors' },
      { name: "headerColor", displayName: 'Author Heading Color', type: 'droplist', source: '/sitecore/content/learningcenter/Content/Colors' }
    ]
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
