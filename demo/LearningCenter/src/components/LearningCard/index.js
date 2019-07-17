import React from 'react';
import { Link } from 'react-router-dom'
import { Text, Link as JssLink, Image } from '@sitecore-jss/sitecore-jss-react';
import { setJssState, setEditingMode } from '../../utils/jssUtils'

import './learningCardStyles.css'

class LearningCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { heading, link, image } = this.props.fields
    const params = this.props.params ? this.props.params : {
      difficultyTag: "advanced",
      learningCategoryTag: "html",
      author: "Dmitri-Larionov"
    }
    const { difficultyTag, learningCategoryTag, author } = params

    let authorUrl = '/'
    let authorNameForDisplay = ''

    if (author) {
      authorUrl = author.split('-').join('')
      authorNameForDisplay = author.split('-').join(' ')
    }
    let difficultyTagClass = returnClassForDifficultyBadge(difficultyTag)
    let categoryTagClass = returnClassForCategoryBadge(learningCategoryTag)
    let jssCodeFirstState = setJssState(this.props);
    let pageEditing = setEditingMode(this.props)
    if (pageEditing) {
      return (

      //if page editing don't wrap card content in link to prevent users from navigating away from experience editor
      <div className="learning-card-container">
          <JssLink field={link}></JssLink>
            <div className="learning-card-text">
              <Text field={heading} />
            </div>
            <div className="learning-card-difficulty-tag-container">
              <div className={`badge badge-pill ${difficultyTagClass}`}>
                {difficultyTag}
              </div>
              {/* TODO Set styles from case switch statement */}
              <div className={`learning-card-category-tag badge badge-pill badge-dark`}>
                {learningCategoryTag}
              </div>
            </div>
            <div className="learning-card-image">
              <Image media={image} />
            </div>
            {/* If no author is set then don't display this section */}
          {authorNameForDisplay === '' ? null :
            <div className="learning-card-author-container">
              {`By `}
              <Link to={`/authors/${authorUrl}`}>
                <span className="learning-card-author">
                  {authorNameForDisplay}
                </span>
              </Link>
            </div>
          }
        </div>
      )
    } else {
      return (
        <div className="learning-card-container">
          <JssLink field={link}>
            <div className="learning-card-text">
              <Text field={heading} />
            </div>
            <div className="learning-card-difficulty-tag-container">
              <div className={`badge badge-pill ${difficultyTagClass}`}>
                {difficultyTag}
              </div>
              {/* TODO Set styles from case switch statement */}
              <div className={`learning-card-category-tag badge badge-pill badge-dark`}>
                {learningCategoryTag}
              </div>
            </div>
            <div className="learning-card-image">
              <Image media={image} />
            </div>
            {/* If no author is set then don't display this section */}
          </JssLink>
          {authorNameForDisplay === '' ? null :
            <div className="learning-card-author-container">
              {`By `}
              <Link to={`/authors/${authorUrl}`}>
                <span className="learning-card-author">
                  {authorNameForDisplay}
                </span>
              </Link>
            </div>
          }
        </div>
      )
    }
  }

}

export default LearningCard;





const returnClassForCategoryBadge = (categoryTag) => {
  switch (categoryTag) {
    case "react":
      return "badge-success"
    case "angular":
      return "badge-warning"
    case "vue":
      return "badge-danger"
    case "html":
      return "badge-info"
    case "css":
      return "badge-info"
    case "javascript":
      return "badge-info"
    case "redis":
      return "badge-info"
    case "restful api":
      return "badge-info"
    case "database":
      return "badge-info"
    default:
      return "badge-light"
  }
}
const returnClassForDifficultyBadge = (difficultyTag) => {
  switch (difficultyTag) {
    case "beginner":
      return "badge-success"
    case "intermediate":
      return "badge-warning"
    case "advanced":
      return "badge-danger"
    case "ninja":
      return "badge-info"
    default:
      return "badge-light"
  }
}