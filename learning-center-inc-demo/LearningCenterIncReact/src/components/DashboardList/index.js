import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const DashboardList = (props) => (
  <div>
    <p>DashboardList Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default DashboardList;
