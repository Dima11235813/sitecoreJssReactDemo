import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const LearningResourceCard = (props) => (
  <div>
    <p>LearningResourceCard Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default LearningResourceCard;
