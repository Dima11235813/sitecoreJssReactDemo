export const graphQlQuery = `
{
    item {
    }
  }
  
`;

export const generateJssForAuthorsQuery = (path) => {
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

export const authorsQuery = `
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

  export const authorsMockedResponse = {
    "data": {
      "item": {
        "children": [
          {
            "name": "DmitriLarionov",
            "url": "/authors/DmitriLarionov",
            "itemUri": "sitecore://master/{989EEC3F-CD45-5EAB-B495-8AC8E17CE20F}?lang=en&ver=1"
          },
          {
            "name": "RyanKuchler",
            "url": "/authors/RyanKuchler",
            "itemUri": "sitecore://master/{1ECDE973-C1E6-52BA-B6BA-AC9C9EC783CF}?lang=en&ver=1"
          },
          {
            "name": "WillRolloff",
            "url": "/authors/WillRolloff",
            "itemUri": "sitecore://master/{A9F55459-0C1E-5956-85A1-21DB36FDFDC1}?lang=en&ver=1"
          }
        ]
      }
    }
  }
  

  export const generateForBlogQuery = `
  {
    item(path: "/sitecore/content/learningcenter/home/blog") {
      url	
      children{
          name 
        	url
        
     ... on Contenttiledata {
      authorTag {
        value
      }
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
  export const generateJssForBlogQuery = `
  {
    item(path: "/sitecore/content/learningcenter/home/blog") {
      url	
      children{
          name 
        	url
        
     ... on Contenttiledata {
      authorTag {
        jss
      }
      pageTitle {
        jss
        
      }
      tileDescription {
        jss
      }
      tileImage {
        jss
      }
      tileTitle {
        jss
      }
      
    }
      }
    
    }
  }
  `

  export const mockedBlogPagesResponse = {
    "data": {
      "item": {
        "url": "/blog",
        "children": [
          {
            "name": "Page Components",
            "url": "/blog/Page-Components"
          },
          {
            "name": "blog1",
            "url": "/blog/blog1",
            "authorTag": {
              "value": "Dmitri-Larionov"
            },
            "pageTitle": {
              "value": "Blog Article One",
              "displayName": "Page Title"
            },
            "tileDescription": {
              "value": "Blog Article 1 Description",
              "displayName": "Tile Description",
              "name": "tileDescription"
            },
            "tileImage": {
              "value": "<image alt=\"Card 1\" mediaid=\"{0671968E-BC88-5233-92A4-CE7C59DB9782}\" />",
              "src": "/sitecore/shell/-/media/learningcenter/assets/learningCardImages/cardImage1.ashx",
              "alt": "Card 1",
              "name": "tileImage"
            },
            "tileTitle": {
              "value": "Blog Article 1",
              "displayName": "Tile Title",
              "name": "tileTitle"
            }
          },
          {
            "name": "blog2",
            "url": "/blog/blog2",
            "authorTag": {
              "value": "Ryan-Kuchler"
            },
            "pageTitle": {
              "value": "Blog Article One",
              "displayName": "Page Title"
            },
            "tileDescription": {
              "value": "Blog Article 2 Description",
              "displayName": "Tile Description",
              "name": "tileDescription"
            },
            "tileImage": {
              "value": "<image alt=\"Card 2\" mediaid=\"{083C3385-967E-5829-A633-62AC3FAA3C3A}\" />",
              "src": "/sitecore/shell/-/media/learningcenter/assets/learningCardImages/cardImage2.ashx",
              "alt": "Card 2",
              "name": "tileImage"
            },
            "tileTitle": {
              "value": "Blog Article 2",
              "displayName": "Tile Title",
              "name": "tileTitle"
            }
          },
          {
            "name": "blog3",
            "url": "/blog/blog3",
            "authorTag": {
              "value": "Will-Rolloff"
            },
            "pageTitle": {
              "value": "Blog Article One",
              "displayName": "Page Title"
            },
            "tileDescription": {
              "value": "Blog Article 3 Description",
              "displayName": "Tile Description",
              "name": "tileDescription"
            },
            "tileImage": {
              "value": "<image alt=\"Card 3\" mediaid=\"{38C984C9-961C-5948-86AF-6E083D7F7466}\" />",
              "src": "/sitecore/shell/-/media/learningcenter/assets/learningCardImages/cardImage3.ashx",
              "alt": "Card 3",
              "name": "tileImage"
            },
            "tileTitle": {
              "value": "Blog Article 3",
              "displayName": "Tile Title",
              "name": "tileTitle"
            }
          }
        ]
      }
    }
  }
