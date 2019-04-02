import React from 'react';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-react';

const LearningCard = (props) => {
  
const {heading, link, image} = props
debugger
return(
  <div className="LearningCardContainer">
    <Text field={heading} />
    <Link field={link} />
    <Image field={image} />
  </div>
)
}

export default LearningCard;
