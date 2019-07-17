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
    const { graphQLEndpointPath, sitecoreApiKey } = config;
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
        url: `${graphQLEndpointPath}?sc_apikey=${sitecoreApiKey}`,
        method: "post",
        data: { query: graphQlQuery }
      })
        .then(response => {
          debugger
          let content = response.data;
          this.setState({
            contentToDisplay: content
          });
        })
        .catch(err => {
          debugger
          console.log(`
          GraphQL Error Getting Content Data:
          ${err}`);
        });
      axios({
        url: `${graphQLEndpointPath}?sc_apikey=${sitecoreApiKey}`,
        method: "post",
        data: { query: authorsQuery }
      })
        .then(response => {
          debugger
          let content = response.data;
          this.setState({
            authorContent: content
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
                imageSourceAltered = tileImage.src.replace('/sitecore/shell/-/media/learningcenter/', '')
              }
              
              blogCount += 1
              let manipAuthorName = authorTag.value.replace('-', '')//since the name compes back with a dash
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
                      <div className="blog-list-author">By {authorTag.value}</div>
                    </Link>
                  </div>
                )
              }
            }

          })
        }
      </div>
    } else if (this.pageEditing) {
      return (
        <div className="blog-list-container">

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
