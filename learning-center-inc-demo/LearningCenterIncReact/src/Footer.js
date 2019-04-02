import React from 'react';
import { Link } from 'react-router-dom'

const Footer = ({t, i18n, theme}) => {
  let containerStyle
  let navClassToUse = theme === "darkTheme" ? "darkNavClass" : "lightNavClass"
  switch(theme){
    case "darkTheme":
      containerStyle = {
        background: 'black',
        color: 'white',
        height: '100px'
      }
      break
    case "lightTheme":
      containerStyle = {
        background: 'grey',
        color: "black",
        height: '100px'
      }
      break
    default:
      containerStyle = {
        background: '#999999',
        color: 'white',
        height: '100px'
      }
      break
  }
  return(
    <footer className={`footer container-fluid`} style={containerStyle}>
      <div className="containter">
        <div className="row">
          <div className={`col-md-12 ${navClassToUse} text-center`} style={{padding: "20px", margin: 'auto', fontSize: '2rem'}}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Careers">Careers</Link>
            <Link to="/Contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
)};

export default Footer;
