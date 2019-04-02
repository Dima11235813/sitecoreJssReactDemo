import React from 'react';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-react';

import './learningCardStyles.css'

const LearningCard = (props) => {
  
const {heading, link, image} = props.fields

const params = props.params ? props.params : null
const {difficultyTag, learningCategoryTag, theme} = params

//set up styles for difficulty tag
let difficultyTagClass = ""
if(difficultyTag){
  difficultyTagClass = returnClassForDifficultyBadge(difficultyTag)
}
//set up styles for category tag
let categoryTagClass = ""
if(difficultyTag){
  categoryTagClass = returnClassForCategoryBadge(learningCategoryTag)
}

return(
  <div className="learning-card-container">
    <Link field={link}>
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
    </Link>
  </div>
)
}

export default LearningCard;





const returnClassForCategoryBadge = (categoryTag) => {
  switch(categoryTag){
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
  switch(difficultyTag){
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