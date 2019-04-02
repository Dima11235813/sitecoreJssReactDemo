// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the LearningCard component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'LearningCard',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['dashboard-content'],
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'link', type: CommonFieldTypes.GeneralLink },
      { name: 'image', type: CommonFieldTypes.Image },
    ],
    params: [
      { name: "difficultyTag", displayName: 'Learning Card Difficulty Tag', type: 'droplist', source: '/sitecore/content/learningcenterincreact/Content/DifficultyTagsFolder' },
      { name: "learningCategoryTag", displayName: 'Learning Category Tag', type: 'droplist', source: '/sitecore/content/learningcenterincreact/Content/LearningCategoriesFolder' },
      { name: "author", displayName: 'Author Tag', type: 'droplist', source: '/sitecore/content/learningcenterincreact/Content/AuthorFolder' }
    ]
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
