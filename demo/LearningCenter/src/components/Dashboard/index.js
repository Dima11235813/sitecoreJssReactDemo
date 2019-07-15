import React from 'react';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-react';

import './dashboardStyles.css'

const Dashboard = (props) => {
if(!props.fields){
  return null
}
// debugger //if you set a break point here you can see child renderings
return(
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
      <Placeholder name="dashboard-content" {...props}/>
      {/* This won't work unless you manually pass props */}
      {/* or you have to wrap */}
      {/* <Placeholder name="dashboard-content"/>  */}
    </div>
  </div>
</div>
</section>
)
}

export default Dashboard;
