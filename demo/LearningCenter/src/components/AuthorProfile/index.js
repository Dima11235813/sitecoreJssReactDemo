import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

import './authorProfileContainer.css'

const AuthorProfile = (props) => {
  const { authorName, authorImage, authorDetails } = props.fields
  //use params to style the author page
  const params = props.params ? props.params : null //defensive code
  const { headingColor, headerColor } = params
  const sectionStyles = { backgroundColor: `#${headerColor}` }
  const authorNameStyles = { color: `#${headingColor}` }

  return (
    <section className="row" style={sectionStyles}>
      <div className="col-md-12">
        <div className="author-profile-container">
          <div className="author-profile-name" style={authorNameStyles}>
            <Text field={authorName}></Text>
          </div>
          <div className="author-profile-image">
            <Image media={authorImage}></Image>
          </div>
          <div className="author-profile-details">
            <RichText field={authorDetails} style={authorNameStyles} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthorProfile;