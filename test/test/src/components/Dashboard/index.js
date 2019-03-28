import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

import './dashboardStyles.css'

const Dashboard = (props) => (
  <div className="row">
    <div className="col-md-12">
      <h1>
        <Text field={props.fields.heading} />
      </h1>
    </div>
    <div className="col-md-12">
      <h2>
        <Text field={props.fields.heading2} />
      </h2>
    </div>
  </div>
);

export default Dashboard;
