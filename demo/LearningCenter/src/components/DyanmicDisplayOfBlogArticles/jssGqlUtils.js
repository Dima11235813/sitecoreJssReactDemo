export const graphQlQuery = `
{
    item {
    }
  }
  
`;

const generateJssQuery = (path) => {
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
export default generateJssQuery
export const mockedResponse = {
  "data": {
    "item": {
      "children": [
        {
          "name": "DmitriLarionov",
          "url": "/authors/DmitriLarionov",
          "template": {
            "name": "App Route"
          }
        },
        {
          "name": "RyanKuchler",
          "url": "/authors/RyanKuchler",
          "template": {
            "name": "App Route"
          }
        },
        {
          "name": "WillRolloff",
          "url": "/authors/WillRolloff",
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
