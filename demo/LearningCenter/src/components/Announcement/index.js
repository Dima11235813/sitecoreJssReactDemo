import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Announcement = (props) => (
  <div>
    <p>Announcement Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Announcement;
