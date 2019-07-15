import React from 'react';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-react';

import './dashboardStyles.css'

const Dashboard = (props) => (
  <section>
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
    <div className="row">
      <div className="col-md-12">
        <div className="DashBoardContentContainer">
          <Placeholder name="dashboard-content" {...props} />
        </div>
      </div>
    </div>
  </section>
)

export default Dashboard;
