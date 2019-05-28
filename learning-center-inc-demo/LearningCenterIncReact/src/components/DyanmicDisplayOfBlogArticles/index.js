import React from 'react';
import axios from 'axios'
import { Text } from '@sitecore-jss/sitecore-jss-react';

const DyanmicDisplayOfBlogArticles = (props) => {
  
  { defaultCardImage, contentSource } = props
  //set up var to container whether we are in jss code first mode
  const jssCodeFirstState = props.routeData.databaseName === "available-in-connected-mode"

  componentDidMount = () => {
    //call graph ql endpoint to get a list of all articles under blog
    //check if running in jss start
    if(this.jssCodeFirstState){
      this.setState({
        cardDataToRender: mockedResponse.data.item.children
      })
    }else if(this.props.context.pageEditing){
      //generate jss query if in editing mode
      graphQlQuery = generateJssQuery(gridContentSource)
    }else{
      graphQlQuery = generateQuery(gridContentSource)
    }
    if(!this.jssCodeFirstState){
      axios({
        url: `${gqlHost}?sc_apikey=${apiKey}`,
        method: "post",
        data: {query: graphQlQuery}
      })
      .then((response) => {
          let cardData = response.data
          this.setState({
            cardDataToRender: cardData.data.item.children
          })
      })
      .catch(err => {
          console.log(`
          GraphQL Error Getting Navigation Data: 
          ${err}`)
      })

  }

  return (

  <div>
    
  </div>
  )
}

export default DyanmicDisplayOfBlogArticles;
