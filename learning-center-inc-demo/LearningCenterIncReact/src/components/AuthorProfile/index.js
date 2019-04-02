import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

import './authorProfileContainer.css'

const AuthorProfile = (props) => {
  const {authorName, authorImage, authorDetails} = props.fields

  //use params to style the author page
  const params = props.params ? props.params : null
  const {headingColor, headerColor}  = params
  const sectionStyles = {backgroundColor: `#${headingColor}`}
  const authorNameStyles = {color: `#${headerColor}`}
debugger
  return(
<section className="row" style={sectionStyles}>
  <div className="col-md-12">
    <div className="author-profile-container">
      <div className="author-profile-name" style={authorNameStyles}>
        <Text field={authorName}></Text>
      </div>
      <div className="author-profile-image">
        <Image field={authorImage}></Image>
      </div>
      <div className="author-profile-details">
        <RichText field={authorDetails} />
      </div>
    </div>
  </div>
</section>
)
}

export default AuthorProfile;