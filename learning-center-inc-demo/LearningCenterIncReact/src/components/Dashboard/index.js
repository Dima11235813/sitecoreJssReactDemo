import React from 'react';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-react';

import './dashboardStyles.css'

const Dashboard = (props) => {
// debugger
return(
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
  <div className="DashBoardContentContainer"></div>
  <Placeholder name="dashboard" />
</div>
)
}

export default Dashboard;
