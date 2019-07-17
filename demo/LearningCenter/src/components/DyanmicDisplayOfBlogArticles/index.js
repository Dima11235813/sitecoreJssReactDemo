import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { setJssState, setEditingMode } from "../../utils/jssUtils";
import {
  authorsMockedResponse,
  mockedBlogPagesResponse,
  graphQlQuery,
  authorsQuery,
  generateJssForBlogQuery,
  generateForBlogQuery
} from "./jssGqlUtils";
import config from "../../temp/config";
import './blog.css'

class DyanmicDisplayOfBlogArticles extends React.Component {
  constructor(props) {
    super(props);
    // set up var to container whether we are in jss code first mode
    this.jssCodeFirstState = setJssState(props); //pass context so util has access to passed props
    this.pageEditing = setEditingMode(props)
    this.state = {
      cardDataToRender: null,
      authorContent: null,
      authorValue: 0
    };
  }

  componentDidMount = () => {
    const { graphQLEndpointPath, sitecoreApiKey, sitecoreApiHost } = config;
    let graphQlQuery //may be for jss or for data
    //call graph ql endpoint to get a list of all articles under blog
    //check if running in jss start
    if (this.jssCodeFirstState) {
      this.setState({
        cardDataToRender: mockedBlogPagesResponse.data,
        authorContent: authorsMockedResponse.data
      });
    } else if (this.pageEditing) {
      //generate jss query if in editing mode
      graphQlQuery = generateJssForBlogQuery;
    } else {
      graphQlQuery = generateForBlogQuery;
    }
    if (!this.jssCodeFirstState) {
      axios({
        url: `${sitecoreApiHost}${graphQLEndpointPath}?sc_apikey=${sitecoreApiKey}`,
        method: "post",
        data: { query: graphQlQuery }
      })
        .then(response => {
          this.setState({
            cardDataToRender: response.data.data
          });
        })
        .catch(err => {
          console.log(`
          GraphQL Error Getting Content Data:
          ${err}`);
        });
        axios({
          url: `${sitecoreApiHost}${graphQLEndpointPath}?sc_apikey=${sitecoreApiKey}`,
          method: "post",
          data: { query: authorsQuery }
        })
        .then(response => {
          this.setState({
            authorContent: response.data.data
          });
        })
        .catch(err => {
          debugger
          console.log(`
          GraphQL Error Getting Content Data:
          ${err}`);
        });
    }
  };
  lookUpOfAuthorUrl = {}
  change = (event) => {
    this.setState({ authorValue: parseInt(event.target.value, 10) });
  }
  render() {
    let blogContent = <div> Loading...</div>
    let authorContent = <div> Loading...</div>
    if (this.state.authorContent && this.state.cardDataToRender && !this.pageEditing) {
      let authorCount = 0
      authorContent = <div className="author-picklist-container">
        <select onChange={this.change} defaultValue={this.state.authorValue}>
          <option value="0">All</option>
          {
            this.state.authorContent.item.children.map(author => {
              authorCount += 1
              this.lookUpOfAuthorUrl[author.name] = {
                id: authorCount,
                url: author.url
              }
              return (
                <option key={`${authorCount}author`} value={authorCount}>{author.name}</option>
              )
            })
          }
        </select>
      </div>
    }
    let blogCount = 0
    if (this.state.authorContent && this.state.cardDataToRender && !this.pageEditing) {
      let content = this.state.cardDataToRender.item.children
      blogContent = <div className="blog-list-container">
        {
          content.map(item => {
            //first item in returned data is the list of page components - don't use this to render anything
            if (item.name !== "Page Components") {
              const { authorTag, tileDescription, tileImage, tileTitle, url, name } = item
              let imageSourceAltered
              if(this.jssCodeFirstState){
                imageSourceAltered = tileImage.src.replace('/sitecore/shell/-/media/learningcenter/', '').replace('.ashx', '.jpg');
              }else{
                //since this sitecore instance is on another machine - provide the full path if in connected mode
                imageSourceAltered = config.sitecoreApiHost + tileImage.src.replace('/sitecore/shell/-/media/learningcenter/', '')
              }
              
              blogCount += 1
              let manipAuthorName
              let displayName
              //temp handling of non set imported author tags
              if(authorTag.value.indexOf("System" > -1)){
                manipAuthorName = "DmitriLarionov"
                displayName = "Dmitri Larionov"
              }else{
                manipAuthorName = authorTag.value.replace('-', '')//since the name compes back with a dash
                displayName = authorTag.value.replace('-', ' ')
              }
              if (this.lookUpOfAuthorUrl[manipAuthorName].id === this.state.authorValue || this.state.authorValue === 0) {
                return (
                  <div className="blog-item" key={`${blogCount}blog`}>
                    <div className="image-title-container">

                      <div className="blog-list-tileimage-container">
                        <img className="blog-image" src={imageSourceAltered} alt={tileImage.alt}></img>
                      </div>
                      <Link to={url}>
                        <div className="blog-list-tileTitle">{tileTitle.value}</div>
                      </Link>
                    </div>
                    <div className="blog-list-tileDescription">{tileDescription.value}</div>
                    <Link to={this.lookUpOfAuthorUrl[manipAuthorName].url}>
                      <div className="blog-list-author">By {displayName}</div>
                    </Link>
                  </div>
                )
              }
            }

          })
        }
      </div>
    } else if (this.pageEditing) {
      let blogCount = 0
      let styleForLabel = {
        width: "100%"
      }
      return (
        <div className="blog-list-container">
          {this.state.cardDataToRender.item.children.map(item => {
            debugger
            blogCount += 1
            const { authorTag, tileDescription, tileImage, tileTitle, url, name } = item
            const noAttributeIndicator = "N/A"
            //tileDescription
            const tileDescriptionJss = tileDescription.jss ? tileDescription.jss : noAttributeIndicator
            const tileDescriptionJssExists = tileDescription === noAttributeIndicator
            //author tag
            const authorTagJss = authorTag.jss ? authorTag.jss : noAttributeIndicator
            const authorTagJssExists = authorTagJss === noAttributeIndicator
            return (
              <div className="blog-item" key={`${blogCount}blog`}>
                <div style={styleForLabel}>Blog Title</div>
                  {/* <div className="image-title-container">
    
                    <div className="blog-list-tileimage-container">
                      <img className="blog-image" src={imageSourceAltered} alt={tileImage.alt}></img>
                    </div>
                    <Link to={url}>
                      <div className="blog-list-tileTitle">{tileTitle.value}</div>
                    </Link>
                  </div> */}
                  <div style={styleForLabel}>Blog Description</div>
                  {tileDescriptionJssExists ? <Text field={tileDescriptionJss}></Text> : noAttributeIndicator}
                  <div style={styleForLabel}>Author Name</div>
                  {authorTagJssExists ? <Text field={authorTagJss}></Text> : noAttributeIndicator}
                  {/* <Link to={this.lookUpOfAuthorUrl[manipAuthorName].url}>
                    <div className="blog-list-author">By {displayName}</div>
                  </Link> */}
                </div>
            )
          })}
          </div>
      )
    }
    return <React.Fragment>
      <div>{authorContent}</div>
      <div>{blogContent}</div>
    </React.Fragment>
  }
}

export default DyanmicDisplayOfBlogArticles;
