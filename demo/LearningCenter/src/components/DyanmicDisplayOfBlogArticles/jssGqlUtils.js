export const graphQlQuery = `
{
    item {
    }
  }
  
`;

export const generateJssQuery = (path) => {
  return `
  {
    item(path: "${path}") {
      children {
        name
        url
       template{
         name
       }
        ... on Contenttiledata {
          tileTitle {
            jss
          }
          tileDescription {
            jss
          }
          tileImage {
            jss
          }
        }
      }
    }
    }
    `
}
export const generateQuery = () => {
  return ``
}
export const mockedResponse = {
  "data": {
    "item": {
      "children": [
        {
          "name": "Dmitri-Larionov",
          "url": "/authors/Dmitri-Larionov",
          "template": {
            "name": "App Route"
          }
        },
        {
          "name": "Ryan-Kuchler",
          "url": "/authors/Ryan-Kuchler",
          "template": {
            "name": "App Route"
          }
        },
        {
          "name": "Will-Rolloff",
          "url": "/authors/Will-Rolloff",
          "template": {
            "name": "App Route"
          }
        }
      ]
    }
  }
}

//Saved query for authors

const authorsQuery = `
{
  item(path: "/sitecore/content/learningcenter/home/authors") {
    children {
      name
      url
      itemUri
    }
  }
  }
  `

  const allBlogPagesQuery = `
  

  {
    item(path: "/sitecore/content/learningcenter/home/blog") {
      url	
      children{
          name 
        	url
        
     ... on Contenttiledata {
      pageTitle {
       value
        displayName
        
      }
      tileDescription {
        value
        displayName
        name
      }
      tileImage {
        value
        src 
        alt
        name
      }
      tileTitle {
        value
        displayName
        name
      }
      
    }
      }
    
    }
  }
  `
