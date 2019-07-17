import React from 'react';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { setJssState, setEditingMode } from '../../utils/jssUtils'

import './dashboardStyles.css'

const Dashboard = (props) => {
  const editingMessageStyle = {
    fontSize: "2rem",
    color: "black"
  }
  const editingMode = setEditingMode(props)
  return (
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
          {editingMode ? <div style={editingMessageStyle}>Component designed for image having 16:10 aspect ratio</div> : null}
          <div className="DashBoardContentContainer">
            <Placeholder name="dashboard-content" {...props} />
          </div>
        </div>
      </div>
    </section>
  )
}


export default Dashboard;
