export const graphQlQuery = `
{
    item {
      hasChildren
      children {
        url
        name
        children {
          url
          name
          children {
            url
            name
            children {
              url
              name
              children {
                url
                name
                children {
                  url
                  name
                }
              }
            }
          }
        }
      }
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
    `;
};
export const generateQuery = (path) => {
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
                value
              }
              tileDescription {
                value
              }
              tileImage {
                src
                alt
              }
            }
          }
        }
        }
         `;
};
export const mockedResponse = {
  "data": {
    "item": {
      "hasChildren": true,
      "children": [
        {
          "url": "/sitecore/content",
          "name": "content",
          "children": [
            {
              "url": "/",
              "name": "Home",
              "children": []
            },
            {
              "url": "/",
              "name": "test",
              "children": [
                {
                  "url": "/Components",
                  "name": "Components",
                  "children": [
                    {
                      "url": "/Components/Announcement",
                      "name": "Announcement",
                      "children": []
                    },
                    {
                      "url": "/Components/AuthorProfile",
                      "name": "AuthorProfile",
                      "children": []
                    },
                    {
                      "url": "/Components/ContentBlock",
                      "name": "ContentBlock",
                      "children": []
                    },
                    {
                      "url": "/Components/Dashboard",
                      "name": "Dashboard",
                      "children": []
                    },
                    {
                      "url": "/Components/LearningCard",
                      "name": "LearningCard",
                      "children": []
                    },
                    {
                      "url": "/Components/LearningResourceCard",
                      "name": "LearningResourceCard",
                      "children": []
                    },
                    {
                      "url": "/Components/Styleguide",
                      "name": "Styleguide",
                      "children": [
                        {
                          "url": "/Components/Styleguide/ContentReuse",
                          "name": "ContentReuse",
                          "children": [
                            {
                              "url": "/Components/Styleguide/ContentReuse/LoremIpsumContentBlock",
                              "name": "LoremIpsumContentBlock"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/Content",
                  "name": "Content",
                  "children": [
                    {
                      "url": "/Content/AuthorFolder",
                      "name": "AuthorFolder",
                      "children": [
                        {
                          "url": "/Content/AuthorFolder/Dmitri-Larionov",
                          "name": "Dmitri-Larionov",
                          "children": []
                        },
                        {
                          "url": "/Content/AuthorFolder/Ryan-Kuchler",
                          "name": "Ryan-Kuchler",
                          "children": []
                        },
                        {
                          "url": "/Content/AuthorFolder/Will-Rolloff",
                          "name": "Will-Rolloff",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/Content/colors",
                      "name": "colors",
                      "children": [
                        {
                          "url": "/Content/colors/0066cc",
                          "name": "0066cc",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/00ffff",
                          "name": "00ffff",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/3d6999",
                          "name": "3d6999",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/939393",
                          "name": "939393",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/Black",
                          "name": "Black",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/c8c8c8",
                          "name": "c8c8c8",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/CC2314",
                          "name": "CC2314",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/f4f4f4",
                          "name": "f4f4f4",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/ff6b40",
                          "name": "ff6b40",
                          "children": []
                        },
                        {
                          "url": "/Content/colors/ffffff",
                          "name": "ffffff",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/Content/DifficultyTags",
                      "name": "DifficultyTags",
                      "children": [
                        {
                          "url": "/Content/DifficultyTags/advanced",
                          "name": "advanced",
                          "children": []
                        },
                        {
                          "url": "/Content/DifficultyTags/beginner",
                          "name": "beginner",
                          "children": []
                        },
                        {
                          "url": "/Content/DifficultyTags/intermediate",
                          "name": "intermediate",
                          "children": []
                        },
                        {
                          "url": "/Content/DifficultyTags/ninja",
                          "name": "ninja",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/Content/LearningCategoriesFolder",
                      "name": "LearningCategoriesFolder",
                      "children": [
                        {
                          "url": "/Content/LearningCategoriesFolder/angular",
                          "name": "angular",
                          "children": []
                        },
                        {
                          "url": "/Content/LearningCategoriesFolder/api",
                          "name": "api",
                          "children": []
                        },
                        {
                          "url": "/Content/LearningCategoriesFolder/css",
                          "name": "css",
                          "children": []
                        },
                        {
                          "url": "/Content/LearningCategoriesFolder/database",
                          "name": "database",
                          "children": []
                        },
                        {
                          "url": "/Content/LearningCategoriesFolder/Docker",
                          "name": "Docker",
                          "children": []
                        },
                        {
                          "url": "/Content/LearningCategoriesFolder/html",
                          "name": "html",
                          "children": []
                        },
                        {
                          "url": "/Content/LearningCategoriesFolder/javascript",
                          "name": "javascript",
                          "children": []
                        },
                        {
                          "url": "/Content/LearningCategoriesFolder/react",
                          "name": "react",
                          "children": []
                        },
                        {
                          "url": "/Content/LearningCategoriesFolder/redis",
                          "name": "redis",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/Content/ThemeFolder",
                      "name": "ThemeFolder",
                      "children": [
                        {
                          "url": "/Content/ThemeFolder/dark",
                          "name": "dark",
                          "children": []
                        },
                        {
                          "url": "/Content/ThemeFolder/light",
                          "name": "light",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/",
                  "name": "home",
                  "children": [
                    {
                      "url": "/Page-Components",
                      "name": "Page Components",
                      "children": [
                        {
                          "url": "/Page-Components/home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-1",
                          "name": "home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-1",
                          "children": []
                        },
                        {
                          "url": "/Page-Components/home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-2",
                          "name": "home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-2",
                          "children": []
                        },
                        {
                          "url": "/Page-Components/home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-3",
                          "name": "home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-3",
                          "children": []
                        },
                        {
                          "url": "/Page-Components/home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-4",
                          "name": "home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-4",
                          "children": []
                        },
                        {
                          "url": "/Page-Components/home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-5",
                          "name": "home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-5",
                          "children": []
                        },
                        {
                          "url": "/Page-Components/home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-6",
                          "name": "home-dashboard-content-74B6AC39-8573-5B42-92DF-84F089FBB805-0-LearningCard-6",
                          "children": []
                        },
                        {
                          "url": "/Page-Components/home-jss-main-Dashboard-1",
                          "name": "home-jss-main-Dashboard-1",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/about",
                      "name": "about",
                      "children": [
                        {
                          "url": "/about/Page-Components",
                          "name": "Page Components",
                          "children": [
                            {
                              "url": "/about/Page-Components/about-jss-main-Dashboard-1",
                              "name": "about-jss-main-Dashboard-1"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/authors",
                      "name": "authors",
                      "children": [
                        {
                          "url": "/authors/DmitriLarionov",
                          "name": "DmitriLarionov",
                          "children": [
                            {
                              "url": "/authors/DmitriLarionov/Page-Components",
                              "name": "Page Components"
                            }
                          ]
                        },
                        {
                          "url": "/authors/RyanKuchler",
                          "name": "RyanKuchler",
                          "children": [
                            {
                              "url": "/authors/RyanKuchler/Page-Components",
                              "name": "Page Components"
                            }
                          ]
                        },
                        {
                          "url": "/authors/WillRolloff",
                          "name": "WillRolloff",
                          "children": [
                            {
                              "url": "/authors/WillRolloff/Page-Components",
                              "name": "Page Components"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/blog",
                      "name": "blog",
                      "children": [
                        {
                          "url": "/blog/Page-Components",
                          "name": "Page Components",
                          "children": [
                            {
                              "url": "/blog/Page-Components/blog-jss-main-Dashboard-1",
                              "name": "blog-jss-main-Dashboard-1"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/careers",
                      "name": "careers",
                      "children": [
                        {
                          "url": "/careers/Page-Components",
                          "name": "Page Components",
                          "children": [
                            {
                              "url": "/careers/Page-Components/careers-jss-main-Dashboard-1",
                              "name": "careers-jss-main-Dashboard-1"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/contact",
                      "name": "contact",
                      "children": [
                        {
                          "url": "/contact/Page-Components",
                          "name": "Page Components",
                          "children": [
                            {
                              "url": "/contact/Page-Components/contact-jss-main-Dashboard-1",
                              "name": "contact-jss-main-Dashboard-1"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/news",
                      "name": "news",
                      "children": [
                        {
                          "url": "/news/Page-Components",
                          "name": "Page Components",
                          "children": [
                            {
                              "url": "/news/Page-Components/news-jss-main-Dashboard-1",
                              "name": "news-jss-main-Dashboard-1"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/test-Dictionary",
                  "name": "test Dictionary",
                  "children": [
                    {
                      "url": "/test-Dictionary/About",
                      "name": "About",
                      "children": []
                    },
                    {
                      "url": "/test-Dictionary/Blog",
                      "name": "Blog",
                      "children": []
                    },
                    {
                      "url": "/test-Dictionary/Contact-Us",
                      "name": "Contact Us",
                      "children": []
                    },
                    {
                      "url": "/test-Dictionary/News",
                      "name": "News",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "url": "/sitecore/Forms",
          "name": "Forms",
          "children": []
        },
        {
          "url": "/sitecore/layout",
          "name": "layout",
          "children": [
            {
              "url": "/sitecore/layout/Controllers",
              "name": "Controllers",
              "children": []
            },
            {
              "url": "/sitecore/layout/Devices",
              "name": "Devices",
              "children": [
                {
                  "url": "/sitecore/layout/Devices/Default",
                  "name": "Default",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Devices/Print",
                  "name": "Print",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Devices/Feed",
                  "name": "Feed",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/layout/Layouts",
              "name": "Layouts",
              "children": [
                {
                  "url": "/sitecore/layout/Layouts/Foundation",
                  "name": "Foundation",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Layouts/Feature",
                  "name": "Feature",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Layouts/Project",
                  "name": "Project",
                  "children": [
                    {
                      "url": "/sitecore/layout/Layouts/Project/test",
                      "name": "test",
                      "children": [
                        {
                          "url": "/sitecore/layout/Layouts/Project/test/test-Layout",
                          "name": "test Layout",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Layouts/Sample-Layout",
                  "name": "Sample Layout",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Layouts/Modules",
                  "name": "Modules",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Layouts/System",
                  "name": "System",
                  "children": [
                    {
                      "url": "/sitecore/layout/Layouts/System/Email",
                      "name": "Email",
                      "children": [
                        {
                          "url": "/sitecore/layout/Layouts/System/Email/Text-Message-Layout",
                          "name": "Text Message Layout",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Layouts/System/Email/Imported",
                          "name": "Imported",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Layouts/System/Email/Sample-MVC",
                          "name": "Sample MVC",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Layouts/System/Email/Sample-Newsletter",
                          "name": "Sample Newsletter",
                          "children": [
                            {
                              "url": "/sitecore/layout/Layouts/System/Email/Sample-Newsletter/Newsletter-Layout",
                              "name": "Newsletter Layout"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/layout/Layouts/System/Email/Single-Column-Layout",
                          "name": "Single Column Layout",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Layouts/System/Email/Two-Column-Layout",
                          "name": "Two Column Layout",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/layout/Layouts/System/Feed-Delivery-Layout",
                      "name": "Feed Delivery Layout",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Layouts/System/FXM",
                      "name": "FXM",
                      "children": [
                        {
                          "url": "/sitecore/layout/Layouts/System/FXM/ExperienceEditor",
                          "name": "ExperienceEditor",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/layout/Layouts/System/Simulated-Device-Layout",
                      "name": "Simulated Device Layout",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/layout/Models",
              "name": "Models",
              "children": [
                {
                  "url": "/sitecore/layout/Models/Foundation",
                  "name": "Foundation",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Models/Feature",
                  "name": "Feature",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Models/Project",
                  "name": "Project",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/layout/Placeholder-Settings",
              "name": "Placeholder Settings",
              "children": [
                {
                  "url": "/sitecore/layout/Placeholder-Settings/Email",
                  "name": "Email",
                  "children": [
                    {
                      "url": "/sitecore/layout/Placeholder-Settings/Email/SampleNewsletter",
                      "name": "SampleNewsletter",
                      "children": [
                        {
                          "url": "/sitecore/layout/Placeholder-Settings/Email/SampleNewsletter/newsletter",
                          "name": "newsletter",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Placeholder-Settings/Email/SampleNewsletter/newsletter_head",
                          "name": "newsletter_head",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Placeholder-Settings/Foundation",
                  "name": "Foundation",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Placeholder-Settings/Feature",
                  "name": "Feature",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Placeholder-Settings/Project",
                  "name": "Project",
                  "children": [
                    {
                      "url": "/sitecore/layout/Placeholder-Settings/Project/test",
                      "name": "test",
                      "children": [
                        {
                          "url": "/sitecore/layout/Placeholder-Settings/Project/test/dashboard-content",
                          "name": "dashboard-content",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Placeholder-Settings/Project/test/jss-main",
                          "name": "jss-main",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Placeholder-Settings/Project/test/jss-tabs",
                          "name": "jss-tabs",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Placeholder-Settings/Project/test/news",
                          "name": "news",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Placeholder-Settings/content",
                  "name": "content",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Placeholder-Settings/webedit",
                  "name": "webedit",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/layout/Renderings",
              "name": "Renderings",
              "children": [
                {
                  "url": "/sitecore/layout/Renderings/Foundation",
                  "name": "Foundation",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Renderings/Feature",
                  "name": "Feature",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Renderings/Project",
                  "name": "Project",
                  "children": [
                    {
                      "url": "/sitecore/layout/Renderings/Project/test",
                      "name": "test",
                      "children": [
                        {
                          "url": "/sitecore/layout/Renderings/Project/test/Announcement",
                          "name": "Announcement",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/Project/test/AuthorProfile",
                          "name": "AuthorProfile",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/Project/test/ContentBlock",
                          "name": "ContentBlock",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/Project/test/Dashboard",
                          "name": "Dashboard",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/Project/test/LearningCard",
                          "name": "LearningCard",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/Project/test/LearningResourceCard",
                          "name": "LearningResourceCard",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Renderings/Sample",
                  "name": "Sample",
                  "children": [
                    {
                      "url": "/sitecore/layout/Renderings/Sample/Sample-Rendering",
                      "name": "Sample Rendering",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Renderings/System",
                  "name": "System",
                  "children": [
                    {
                      "url": "/sitecore/layout/Renderings/System/FieldRenderer",
                      "name": "FieldRenderer",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Renderings/System/ItemRenderer",
                      "name": "ItemRenderer",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Renderings/System/WebEdit",
                      "name": "WebEdit",
                      "children": [
                        {
                          "url": "/sitecore/layout/Renderings/System/WebEdit/WebEdit-Content-Editor",
                          "name": "WebEdit Content Editor",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/System/WebEdit/WebEdit-Ribbon",
                          "name": "WebEdit Ribbon",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/System/WebEdit/Hidden-Rendering",
                          "name": "Hidden Rendering",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/layout/Renderings/System/Email",
                      "name": "Email",
                      "children": [
                        {
                          "url": "/sitecore/layout/Renderings/System/Email/Sample-Newsletter",
                          "name": "Sample Newsletter",
                          "children": [
                            {
                              "url": "/sitecore/layout/Renderings/System/Email/Sample-Newsletter/Call-to-Action",
                              "name": "Call to Action"
                            },
                            {
                              "url": "/sitecore/layout/Renderings/System/Email/Sample-Newsletter/Content",
                              "name": "Content"
                            },
                            {
                              "url": "/sitecore/layout/Renderings/System/Email/Sample-Newsletter/Footer",
                              "name": "Footer"
                            },
                            {
                              "url": "/sitecore/layout/Renderings/System/Email/Sample-Newsletter/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/layout/Renderings/System/Email/Sample-Newsletter/Image",
                              "name": "Image"
                            },
                            {
                              "url": "/sitecore/layout/Renderings/System/Email/Sample-Newsletter/List",
                              "name": "List"
                            },
                            {
                              "url": "/sitecore/layout/Renderings/System/Email/Sample-Newsletter/Two-Column-Call-to-Action",
                              "name": "Two Column Call to Action"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/layout/Renderings/System/Email/Set-Page-Title",
                          "name": "Set Page Title",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/System/Email/Display-Body",
                          "name": "Display Body",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/System/Email/Display-Sidebar",
                          "name": "Display Sidebar",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/System/Email/Text-Message",
                          "name": "Text Message",
                          "children": []
                        },
                        {
                          "url": "/sitecore/layout/Renderings/System/Email/Display-Footer",
                          "name": "Display Footer",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/layout/Renderings/System/Feeds",
                      "name": "Feeds",
                      "children": [
                        {
                          "url": "/sitecore/layout/Renderings/System/Feeds/FeedRenderer",
                          "name": "FeedRenderer",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/layout/Renderings/System/Forms",
                      "name": "Forms",
                      "children": [
                        {
                          "url": "/sitecore/layout/Renderings/System/Forms/Mvc-Form",
                          "name": "Mvc Form",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Renderings/Modules",
                  "name": "Modules",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/layout/Sublayouts",
              "name": "Sublayouts",
              "children": [
                {
                  "url": "/sitecore/layout/Sublayouts/App-Center-Sync",
                  "name": "App Center Sync",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Sublayouts/Modules",
                  "name": "Modules",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Sublayouts/Sample-Datasource-Sublayout",
                  "name": "Sample Datasource Sublayout",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Sublayouts/Sample-Inner-Sublayout",
                  "name": "Sample Inner Sublayout",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Sublayouts/Sample-Sublayout",
                  "name": "Sample Sublayout",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Sublayouts/Social",
                  "name": "Social",
                  "children": [
                    {
                      "url": "/sitecore/layout/Sublayouts/Social/Connector",
                      "name": "Connector",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Sublayouts/Social/Sharing",
                      "name": "Sharing",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/layout/Simulators",
              "name": "Simulators",
              "children": [
                {
                  "url": "/sitecore/layout/Simulators/None",
                  "name": "None",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Simulators/Android-Phone",
                  "name": "Android Phone",
                  "children": [
                    {
                      "url": "/sitecore/layout/Simulators/Android-Phone/Android-Phone-Landscape",
                      "name": "Android Phone Landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/Android-Phone/No-Silverlight-Support-Trait",
                      "name": "No Silverlight Support Trait",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Simulators/Android-Tablet",
                  "name": "Android Tablet",
                  "children": [
                    {
                      "url": "/sitecore/layout/Simulators/Android-Tablet/Android-Tablet-Portrait",
                      "name": "Android Tablet Portrait",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/Android-Tablet/No-Silverlight-Support-Trait",
                      "name": "No Silverlight Support Trait",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Simulators/Android-Phablet",
                  "name": "Android Phablet",
                  "children": [
                    {
                      "url": "/sitecore/layout/Simulators/Android-Phablet/Android-Phablet-Landscape",
                      "name": "Android Phablet Landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/Android-Phablet/No-Silverlight-Support-Trait",
                      "name": "No Silverlight Support Trait",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Simulators/Blackberry",
                  "name": "Blackberry",
                  "children": [
                    {
                      "url": "/sitecore/layout/Simulators/Blackberry/No-Flash-Support-Trait",
                      "name": "No Flash Support Trait",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/Blackberry/No-Silverlight-Support-Trait",
                      "name": "No Silverlight Support Trait",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Simulators/Feature-Phone",
                  "name": "Feature Phone",
                  "children": []
                },
                {
                  "url": "/sitecore/layout/Simulators/HD-TV",
                  "name": "HD TV",
                  "children": [
                    {
                      "url": "/sitecore/layout/Simulators/HD-TV/No-Flash-Support-Trait",
                      "name": "No Flash Support Trait",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/HD-TV/No-Silverlight-Support-Trait",
                      "name": "No Silverlight Support Trait",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Simulators/iPad",
                  "name": "iPad",
                  "children": [
                    {
                      "url": "/sitecore/layout/Simulators/iPad/iPad-landscape",
                      "name": "iPad landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/iPad/No-Flash-Support",
                      "name": "No Flash Support",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/iPad/No-Silverlight-Support",
                      "name": "No Silverlight Support",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Simulators/iPhone",
                  "name": "iPhone",
                  "children": [
                    {
                      "url": "/sitecore/layout/Simulators/iPhone/iPhone-Landscape",
                      "name": "iPhone Landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/iPhone/No-Flash-Support",
                      "name": "No Flash Support",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/iPhone/No-Silverlight-Support",
                      "name": "No Silverlight Support",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/layout/Simulators/Windows-Phone",
                  "name": "Windows Phone",
                  "children": [
                    {
                      "url": "/sitecore/layout/Simulators/Windows-Phone/No-Flash-Support-Trait",
                      "name": "No Flash Support Trait",
                      "children": []
                    },
                    {
                      "url": "/sitecore/layout/Simulators/Windows-Phone/Windows-Phone-Landscape",
                      "name": "Windows Phone Landscape",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "url": "/sitecore/media-library",
          "name": "media library",
          "children": [
            {
              "url": "/sitecore/media-library/Default-Website",
              "name": "Default Website",
              "children": [
                {
                  "url": "/sitecore/shell/-/media/Default-Website/cover.ashx",
                  "name": "cover",
                  "children": []
                },
                {
                  "url": "/sitecore/shell/-/media/Default-Website/sc_logo.ashx",
                  "name": "sc_logo",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/shell/-/media/Experience-Explorer.ashx",
              "name": "Experience Explorer",
              "children": [
                {
                  "url": "/sitecore/media-library/Experience-Explorer/Presets",
                  "name": "Presets",
                  "children": [
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Cecile-128x128.ashx",
                      "name": "Cecile 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Chris-128x128.ashx",
                      "name": "Chris 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Christian-128x128.ashx",
                      "name": "Christian 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Emilie-128x128.ashx",
                      "name": "Emilie 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Ian-128x128.ashx",
                      "name": "Ian 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Jimmie-128x128.ashx",
                      "name": "Jimmie 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Josephine-128x128.ashx",
                      "name": "Josephine 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Julie-128x128.ashx",
                      "name": "Julie 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Sandra-128x128.ashx",
                      "name": "Sandra 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Tammie-128x128.ashx",
                      "name": "Tammie 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Thomas-128x128.ashx",
                      "name": "Thomas 128x128",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/Experience-Explorer/Presets/Unknown-128x128.ashx",
                      "name": "Unknown 128x128",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/media-library/Files",
              "name": "Files",
              "children": []
            },
            {
              "url": "/sitecore/media-library/Images",
              "name": "Images",
              "children": []
            },
            {
              "url": "/sitecore/media-library/System",
              "name": "System",
              "children": [
                {
                  "url": "/sitecore/media-library/System/Channel-Images",
                  "name": "Channel Images",
                  "children": [
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-3rd-party.ashx",
                      "name": "ch-3rd-party",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-advertising.ashx",
                      "name": "ch-advertising",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-analyst.ashx",
                      "name": "ch-analyst",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-appstore-activity.ashx",
                      "name": "ch-appstore-activity",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-basket.ashx",
                      "name": "ch-basket",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-bing-search.ashx",
                      "name": "ch-bing-search",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-callcenter.ashx",
                      "name": "ch-callcenter",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-catalogue.ashx",
                      "name": "ch-catalogue",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-collateral.ashx",
                      "name": "ch-collateral",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-company-website.ashx",
                      "name": "ch-company-website",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-counter.ashx",
                      "name": "ch-counter",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-customer-service.ashx",
                      "name": "ch-customer-service",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-digital-events.ashx",
                      "name": "ch-digital-events",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-direct.ashx",
                      "name": "ch-direct",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-direct-marketing.ashx",
                      "name": "ch-direct-marketing",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-display-advertising.ashx",
                      "name": "ch-display-advertising",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-door.ashx",
                      "name": "ch-door",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-email-marketing.ashx",
                      "name": "ch-email-marketing",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-event-tradeshow.ashx",
                      "name": "ch-event-tradeshow",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-facebook.ashx",
                      "name": "ch-facebook",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-facebook-post.ashx",
                      "name": "ch-facebook-post",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-faq.ashx",
                      "name": "ch-faq",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-forum.ashx",
                      "name": "ch-forum",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-google-display-network.ashx",
                      "name": "ch-google-display-network",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-google-search.ashx",
                      "name": "ch-google-search",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-linkedin.ashx",
                      "name": "ch-linkedin",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-linkedin-post.ashx",
                      "name": "ch-linkedin-post",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-linkedin-search.ashx",
                      "name": "ch-linkedin-search",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-livechat.ashx",
                      "name": "ch-livechat",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-marketing-intelligence.ashx",
                      "name": "ch-marketing-intelligence",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-mobile-app.ashx",
                      "name": "ch-mobile-app",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-order.ashx",
                      "name": "ch-order",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-organic-search.ashx",
                      "name": "ch-organic-search",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-partner-marketing.ashx",
                      "name": "ch-partner-marketing",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-ppc-advertising.ashx",
                      "name": "ch-ppc-advertising",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-pr.ashx",
                      "name": "ch-pr",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-productdisplay.ashx",
                      "name": "ch-productdisplay",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-push.ashx",
                      "name": "ch-push",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-sales.ashx",
                      "name": "ch-sales",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-self-service.ashx",
                      "name": "ch-self-service",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-social-media-community.ashx",
                      "name": "ch-social-media-community",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-social-media-mentions.ashx",
                      "name": "ch-social-media-mentions",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-store.ashx",
                      "name": "ch-store",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-telemarketing.ashx",
                      "name": "ch-telemarketing",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-tryproduct.ashx",
                      "name": "ch-tryproduct",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-twitter-post.ashx",
                      "name": "ch-twitter-post",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-usage.ashx",
                      "name": "ch-usage",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-youtube-post.ashx",
                      "name": "ch-youtube-post",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Channel-Images/ch-youtube-search.ashx",
                      "name": "ch-youtube-search",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/media-library/System/Email",
                  "name": "Email",
                  "children": [
                    {
                      "url": "/sitecore/media-library/System/Email/Attachments",
                      "name": "Attachments",
                      "children": []
                    },
                    {
                      "url": "/sitecore/media-library/System/Email/PreferenceCenter",
                      "name": "PreferenceCenter",
                      "children": [
                        {
                          "url": "/sitecore/shell/-/media/System/Email/PreferenceCenter/breadcrumb_red_bg.ashx",
                          "name": "breadcrumb_red_bg",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/PreferenceCenter/logo_spiral.ashx",
                          "name": "logo_spiral",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/PreferenceCenter/SitecoreLogo.ashx",
                          "name": "SitecoreLogo",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/media-library/System/Email/SampleNewsletter",
                      "name": "SampleNewsletter",
                      "children": [
                        {
                          "url": "/sitecore/shell/-/media/System/Email/SampleNewsletter/64.ashx",
                          "name": "64",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/SampleNewsletter/lion.ashx",
                          "name": "lion",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/SampleNewsletter/logo.ashx",
                          "name": "logo",
                          "children": []
                        },
                        {
                          "url": "/sitecore/media-library/System/Email/SampleNewsletter/Thumbnails",
                          "name": "Thumbnails",
                          "children": [
                            {
                              "url": "/sitecore/shell/-/media/System/Email/SampleNewsletter/Thumbnails/Call-to-Action.ashx",
                              "name": "Call to Action"
                            },
                            {
                              "url": "/sitecore/shell/-/media/System/Email/SampleNewsletter/Thumbnails/Content.ashx",
                              "name": "Content"
                            },
                            {
                              "url": "/sitecore/shell/-/media/System/Email/SampleNewsletter/Thumbnails/Image.ashx",
                              "name": "Image"
                            },
                            {
                              "url": "/sitecore/shell/-/media/System/Email/SampleNewsletter/Thumbnails/List.ashx",
                              "name": "List"
                            },
                            {
                              "url": "/sitecore/shell/-/media/System/Email/SampleNewsletter/Thumbnails/Two-Column-Call-to-Action.ashx",
                              "name": "Two Column Call to Action"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/media-library/System/Email/TempFiles",
                      "name": "TempFiles",
                      "children": []
                    },
                    {
                      "url": "/sitecore/media-library/System/Email/Thumbnails",
                      "name": "Thumbnails",
                      "children": [
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/basic-template.ashx",
                          "name": "basic-template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/Category-Section.ashx",
                          "name": "Category Section",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/existing.ashx",
                          "name": "existing",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/html_file.ashx",
                          "name": "html_file",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/html-template.ashx",
                          "name": "html-template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/import-html.ashx",
                          "name": "import-html",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/newsletter.ashx",
                          "name": "newsletter",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/one_column.ashx",
                          "name": "one_column",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/one-column-template.ashx",
                          "name": "one-column-template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/plain_text.ashx",
                          "name": "plain_text",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/pre-existing-template.ashx",
                          "name": "pre-existing-template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/simple_html.ashx",
                          "name": "simple_html",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/target.ashx",
                          "name": "target",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/text-template.ashx",
                          "name": "text-template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/two_column.ashx",
                          "name": "two_column",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/System/Email/Thumbnails/two-column-template.ashx",
                          "name": "two-column-template",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/media-library/System/Forms",
                  "name": "Forms",
                  "children": [
                    {
                      "url": "/sitecore/shell/-/media/System/Forms/Form.ashx",
                      "name": "Form",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/media-library/System/List-Manager",
                  "name": "List Manager",
                  "children": []
                },
                {
                  "url": "/sitecore/media-library/System/Page-Event-Images",
                  "name": "Page Event Images",
                  "children": [
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Begin-Transaction.ashx",
                      "name": "Begin Transaction",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Campaign.ashx",
                      "name": "Campaign",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Campaign-Registration-Failed.ashx",
                      "name": "Campaign Registration Failed",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Cancel-Transaction.ashx",
                      "name": "Cancel Transaction",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Download.ashx",
                      "name": "Download",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Download-Brochure.ashx",
                      "name": "Download Brochure",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/End-Transaction.ashx",
                      "name": "End Transaction",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Error.ashx",
                      "name": "Error",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Field-Changed.ashx",
                      "name": "Field Changed",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Follow-Hit.ashx",
                      "name": "Follow Hit",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Form-Submitted.ashx",
                      "name": "Form Submitted",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Information.ashx",
                      "name": "Information",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Login-Failed.ashx",
                      "name": "Login Failed",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Logout.ashx",
                      "name": "Logout",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Long-Running-Request.ashx",
                      "name": "Long Running Request",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Newsletter-Removed.ashx",
                      "name": "Newsletter Removed",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/No-Search-Hits-Found.ashx",
                      "name": "No Search Hits Found",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Page-Error.ashx",
                      "name": "Page Error",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Page-Not-Found.ashx",
                      "name": "Page Not Found",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Page-Visit.ashx",
                      "name": "Page Visit",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Page-Visited.ashx",
                      "name": "Page Visited",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Poll.ashx",
                      "name": "Poll",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Pricing-Quote-Request.ashx",
                      "name": "Pricing Quote Request",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Print.ashx",
                      "name": "Print",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Put-in-Basket.ashx",
                      "name": "Put in Basket",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Rate.ashx",
                      "name": "Rate",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Register-Failed.ashx",
                      "name": "Register Failed",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Register-for-Event.ashx",
                      "name": "Register for Event",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/RSS.ashx",
                      "name": "RSS",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Search.ashx",
                      "name": "Search",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Session-Begin.ashx",
                      "name": "Session Begin",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Session-End.ashx",
                      "name": "Session End",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Submit-Success.ashx",
                      "name": "Submit Success",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Update-Profile.ashx",
                      "name": "Update Profile",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Page-Event-Images/Visit.ashx",
                      "name": "Visit",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/media-library/System/Simulator-Backgrounds",
                  "name": "Simulator Backgrounds",
                  "children": [
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Android-Phablet.ashx",
                      "name": "Android Phablet",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Android-Phablet-Landscape.ashx",
                      "name": "Android Phablet Landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Android-Phone.ashx",
                      "name": "Android Phone",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Android-Phone_landscape.ashx",
                      "name": "Android Phone_landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Android-Tablet.ashx",
                      "name": "Android Tablet",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Android-Tablet_landscape.ashx",
                      "name": "Android Tablet_landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Blackberry.ashx",
                      "name": "Blackberry",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Feature-Phone.ashx",
                      "name": "Feature Phone",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/HD-TV.ashx",
                      "name": "HD TV",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/iPad.ashx",
                      "name": "iPad",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/iPad_landscape.ashx",
                      "name": "iPad_landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/iPhone.ashx",
                      "name": "iPhone",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/iPhone_landscape.ashx",
                      "name": "iPhone_landscape",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Windows-Phone.ashx",
                      "name": "Windows Phone",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Simulator-Backgrounds/Windows-Phone-Landscape.ashx",
                      "name": "Windows Phone Landscape",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/media-library/System/Template-Thumbnails",
                  "name": "Template Thumbnails",
                  "children": [
                    {
                      "url": "/sitecore/shell/-/media/System/Template-Thumbnails/audio.ashx",
                      "name": "audio",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Template-Thumbnails/document.ashx",
                      "name": "document",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Template-Thumbnails/file.ashx",
                      "name": "file",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Template-Thumbnails/leopard-folder-big.ashx",
                      "name": "leopard-folder-big",
                      "children": []
                    },
                    {
                      "url": "/sitecore/shell/-/media/System/Template-Thumbnails/video.ashx",
                      "name": "video",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/media-library/test",
              "name": "test",
              "children": [
                {
                  "url": "/sitecore/media-library/test/assets",
                  "name": "assets",
                  "children": [
                    {
                      "url": "/sitecore/media-library/test/assets/authorImages",
                      "name": "authorImages",
                      "children": [
                        {
                          "url": "/sitecore/shell/-/media/test/assets/authorImages/dmitri.ashx",
                          "name": "dmitri",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/test/assets/authorImages/ryan.ashx",
                          "name": "ryan",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/test/assets/authorImages/will.ashx",
                          "name": "will",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/media-library/test/assets/learningCardImages",
                      "name": "learningCardImages",
                      "children": [
                        {
                          "url": "/sitecore/shell/-/media/test/assets/learningCardImages/cardImage1.ashx",
                          "name": "cardImage1",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/test/assets/learningCardImages/cardImage2.ashx",
                          "name": "cardImage2",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/test/assets/learningCardImages/cardImage3.ashx",
                          "name": "cardImage3",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/test/assets/learningCardImages/cardImage4.ashx",
                          "name": "cardImage4",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/test/assets/learningCardImages/cardImage5.ashx",
                          "name": "cardImage5",
                          "children": []
                        },
                        {
                          "url": "/sitecore/shell/-/media/test/assets/learningCardImages/cardImage6.ashx",
                          "name": "cardImage6",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "url": "/sitecore/system",
          "name": "system",
          "children": [
            {
              "url": "/sitecore/system/Aliases",
              "name": "Aliases",
              "children": []
            },
            {
              "url": "/sitecore/system/Dictionary",
              "name": "Dictionary",
              "children": []
            },
            {
              "url": "/sitecore/system/Languages",
              "name": "Languages",
              "children": [
                {
                  "url": "/sitecore/system/Languages/en",
                  "name": "en",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/system/List-Manager",
              "name": "List Manager",
              "children": [
                {
                  "url": "/sitecore/system/List-Manager/ListOperations",
                  "name": "ListOperations",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/system/Marketing-Control-Panel",
              "name": "Marketing Control Panel",
              "children": [
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies",
                  "name": "Taxonomies",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Campaign-group",
                      "name": "Campaign group",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Marketing-categories",
                      "name": "Marketing categories",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Marketing-categories/Email-types",
                          "name": "Email types",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Marketing-categories/Email-types/Premium-Content",
                              "name": "Premium Content"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Marketing-categories/Email-types/Product-Updates",
                              "name": "Product Updates"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Marketing-categories/Email-types/Webinars",
                              "name": "Webinars"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Marketing-categories/Email-types/Events",
                              "name": "Events"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Marketing-categories/Email-types/Newsletter",
                              "name": "Newsletter"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Outcome-group",
                      "name": "Outcome group",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Outcome-group/Identification",
                          "name": "Identification",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Outcome-group/Lead-management-funnel",
                          "name": "Lead management funnel",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Outcome-group/Purchase",
                          "name": "Purchase",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Venue",
                      "name": "Venue",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel",
                      "name": "Channel",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online",
                          "name": "Online",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/3rd-party",
                              "name": "3rd party"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Apps",
                              "name": "Apps"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Automation-programs",
                              "name": "Automation programs"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Digital-events",
                              "name": "Digital events"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Direct",
                              "name": "Direct"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Display",
                              "name": "Display"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Email-campaigns",
                              "name": "Email campaigns"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Organic-search",
                              "name": "Organic search"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Paid-search",
                              "name": "Paid search"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Referral",
                              "name": "Referral"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/SMS-campaigns",
                              "name": "SMS campaigns"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Social-community",
                              "name": "Social community"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Social-mentions",
                              "name": "Social mentions"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/Social-sponsored-posts",
                              "name": "Social sponsored posts"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Online/System",
                              "name": "System"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline",
                          "name": "Offline",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Advertising",
                              "name": "Advertising"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Call-center",
                              "name": "Call center"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Direct-marketing",
                              "name": "Direct marketing"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Event",
                              "name": "Event"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Partner-marketing",
                              "name": "Partner marketing"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/PR",
                              "name": "PR"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Resources",
                              "name": "Resources"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Sales",
                              "name": "Sales"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Store",
                              "name": "Store"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Channel/Offline/Telemarketing",
                              "name": "Telemarketing"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Asset",
                      "name": "Asset",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Campaign-facet-1",
                      "name": "Campaign facet 1",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Campaign-facet-2",
                      "name": "Campaign facet 2",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Campaign-facet-3",
                      "name": "Campaign facet 3",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Campaign-facet-4",
                      "name": "Campaign facet 4",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Campaign-facet-5",
                      "name": "Campaign facet 5",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Campaign-facet-6",
                      "name": "Campaign facet 6",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Campaign-facet-7",
                      "name": "Campaign facet 7",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Goal-facet-1",
                      "name": "Goal facet 1",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Goal-facet-2",
                      "name": "Goal facet 2",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Goal-facet-3",
                      "name": "Goal facet 3",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Asset-facet-1",
                      "name": "Asset facet 1",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Asset-facet-2",
                      "name": "Asset facet 2",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Taxonomies/Asset-facet-3",
                      "name": "Asset facet 3",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Goals",
                  "name": "Goals",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Goals/Brochures-Request",
                      "name": "Brochures Request",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Goals/Click-Email-Link",
                      "name": "Click Email Link",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Goals/Instant-Demo",
                      "name": "Instant Demo",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Goals/Login",
                      "name": "Login",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Goals/Newsletter-Signup",
                      "name": "Newsletter Signup",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Goals/Register",
                      "name": "Register",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Automation-Plans",
                  "name": "Automation Plans",
                  "children": []
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Campaigns",
                  "name": "Campaigns",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Campaigns/Emails",
                      "name": "Emails",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Contact-Lists",
                  "name": "Contact Lists",
                  "children": []
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Events",
                  "name": "Events",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Events/MV-Test",
                      "name": "MV Test",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Events/Page-View",
                      "name": "Page View",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Events/PersonalizationEvent",
                      "name": "PersonalizationEvent",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics",
                  "name": "Experience Analytics",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions",
                      "name": "Dimensions",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Email",
                          "name": "Email",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Email/By-email",
                              "name": "By email"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Email/By-email-manager",
                              "name": "By email manager"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Email/By-language-specific-email",
                              "name": "By language specific email"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM",
                          "name": "ExM",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-AB-test-variant",
                              "name": "By AB test variant"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-demographics",
                              "name": "By demographics"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-device",
                              "name": "By device"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-email",
                              "name": "By email"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-email-manager",
                              "name": "By email manager"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-landing-page",
                              "name": "By landing page"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-language-specific-email",
                              "name": "By language specific email"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-location",
                              "name": "By location"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-message",
                              "name": "By message"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/ExM/By-time-of-day",
                              "name": "By time of day"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages",
                          "name": "Pages",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-entry-page",
                              "name": "By entry page"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-entry-page",
                              "name": "By entry page"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-entry-page-URL",
                              "name": "By entry page URL"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-entry-page-URL",
                              "name": "By entry page URL"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-exit-page",
                              "name": "By exit page"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-exit-page",
                              "name": "By exit page"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-exit-page-URL",
                              "name": "By exit page URL"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-exit-page-URL",
                              "name": "By exit page URL"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-page",
                              "name": "By page"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-page",
                              "name": "By page"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-page-URL",
                              "name": "By page URL"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Pages/By-page-URL",
                              "name": "By page URL"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits",
                          "name": "Visits",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-asset",
                              "name": "By asset"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-asset",
                              "name": "By asset"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-asset-facet",
                              "name": "By asset facet"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-asset-facet-group",
                              "name": "By asset facet group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-asset-group",
                              "name": "By asset group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-asset-group",
                              "name": "By asset group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-campaign",
                              "name": "By campaign"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-campaign",
                              "name": "By campaign"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-campaign-facet",
                              "name": "By campaign facet"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-campaign-facet",
                              "name": "By campaign facet"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-campaign-facet-group",
                              "name": "By campaign facet group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-campaign-facet-group",
                              "name": "By campaign facet group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-campaign-group",
                              "name": "By campaign group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-campaign-group",
                              "name": "By campaign group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-channel",
                              "name": "By channel"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-channel",
                              "name": "By channel"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-channel-group",
                              "name": "By channel group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-channel-group",
                              "name": "By channel group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-channel-type",
                              "name": "By channel type"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-channel-type",
                              "name": "By channel type"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-city",
                              "name": "By city"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-city",
                              "name": "By city"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-conversion",
                              "name": "By conversion"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-conversion",
                              "name": "By conversion"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-country",
                              "name": "By country"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-country",
                              "name": "By country"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-device-model",
                              "name": "By device model"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-device-model",
                              "name": "By device model"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-device-size",
                              "name": "By device size"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-device-type",
                              "name": "By device type"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-device-type",
                              "name": "By device type"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-download",
                              "name": "By download"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-download",
                              "name": "By download"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-goal",
                              "name": "By goal"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-goal",
                              "name": "By goal"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-goal-facet",
                              "name": "By goal facet"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-goal-facet",
                              "name": "By goal facet"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-goal-facet-group",
                              "name": "By goal facet group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-goal-facet-group",
                              "name": "By goal facet group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-language",
                              "name": "By language"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-language",
                              "name": "By language"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-local-search-keyword",
                              "name": "By local search keyword"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-local-search-keyword",
                              "name": "By local search keyword"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-outcome",
                              "name": "By outcome"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-outcome",
                              "name": "By outcome"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-outcome-group",
                              "name": "By outcome group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-outcome-group",
                              "name": "By outcome group"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-page-view",
                              "name": "By page view"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-page-view",
                              "name": "By page view"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-pattern",
                              "name": "By pattern"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-pattern",
                              "name": "By pattern"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-referring-site",
                              "name": "By referring site"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-referring-site",
                              "name": "By referring site"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-region",
                              "name": "By region"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Dimensions/Visits/By-region",
                              "name": "By region"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Experience-Analytics/Filters",
                      "name": "Filters",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Funnels",
                  "name": "Funnels",
                  "children": []
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/FXM",
                  "name": "FXM",
                  "children": []
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Marketing-Automation-Templates",
                  "name": "Marketing Automation Templates",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Marketing-Automation-Templates/422e238c-65aa-4ec9-8f98-d563cdee6c72",
                      "name": "422e238c-65aa-4ec9-8f98-d563cdee6c72",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Marketing-Automation-Templates/57586726-55e0-4704-b562-2c6fb2e288b9",
                      "name": "57586726-55e0-4704-b562-2c6fb2e288b9",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Marketing-Automation-Templates/938ec74b-3ba4-4c93-9152-015655088998",
                      "name": "938ec74b-3ba4-4c93-9152-015655088998",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Marketing-Automation-Templates/af89bdff-13f8-4d5e-b6c3-ebc4cf0887d3",
                      "name": "af89bdff-13f8-4d5e-b6c3-ebc4cf0887d3",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Marketing-Automation-Templates/Blank",
                      "name": "Blank",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Marketing-Automation-Templates/d5fb20f6-b032-4e08-b8b0-a581a24f37b6",
                      "name": "d5fb20f6-b032-4e08-b8b0-a581a24f37b6",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Marketing-Automation-Templates/f3486c4c-8838-4efc-966e-b17483a087d9",
                      "name": "f3486c4c-8838-4efc-966e-b17483a087d9",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Outcomes",
                  "name": "Outcomes",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Outcomes/Marketing-Lead",
                      "name": "Marketing Lead",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Outcomes/Sales-Lead",
                      "name": "Sales Lead",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Outcomes/Opportunity",
                      "name": "Opportunity",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Outcomes/Close---Won",
                      "name": "Close - Won",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Outcomes/Close---Lost",
                      "name": "Close - Lost",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Outcomes/Close---Cancelled",
                      "name": "Close - Cancelled",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Outcomes/Contact-Acquisition",
                      "name": "Contact Acquisition",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Outcomes/Product-Purchase",
                      "name": "Product Purchase",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer",
                  "name": "Path Analyzer",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer/Maps",
                      "name": "Maps",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer/Maps/Default-maps",
                          "name": "Default maps",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer/Maps/Default-maps/Global-maps",
                              "name": "Global maps"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer/Maps/Default-maps/Site-maps",
                              "name": "Site maps"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer/Maps/Custom-maps",
                          "name": "Custom maps",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer/MapTypes",
                      "name": "MapTypes",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer/MapTypes/Experience-Map",
                          "name": "Experience Map",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Path-Analyzer/MapTypes/Page-Map",
                          "name": "Page Map",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Personalization",
                  "name": "Personalization",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules",
                      "name": "Predefined Rules",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-analyst",
                          "name": "visitor is analyst",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-business-partner",
                          "name": "visitor is business partner",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-competitor",
                          "name": "visitor is competitor",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-existing-customer",
                          "name": "visitor is existing customer",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-human",
                          "name": "visitor is human",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-ISP",
                          "name": "visitor is ISP",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-my-company",
                          "name": "visitor is my company",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-press",
                          "name": "visitor is press",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-prospect",
                          "name": "visitor is prospect",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-robot",
                          "name": "visitor is robot",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Predefined-Rules/visitor-is-supplier",
                          "name": "visitor is supplier",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Rules",
                      "name": "Rules",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Rules/Persona",
                          "name": "Persona",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Rules/Persona/Visitor-Is-Human",
                              "name": "Visitor Is Human"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Personalization/Rules/Profiles",
                          "name": "Profiles",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Profiles",
                  "name": "Profiles",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Focus",
                      "name": "Focus",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Focus/Background",
                          "name": "Background",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Focus/Practical",
                          "name": "Practical",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Focus/Process",
                          "name": "Process",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Focus/Scope",
                          "name": "Scope",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Focus/Profile-Cards",
                          "name": "Profile Cards",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Focus/Pattern-Cards",
                          "name": "Pattern Cards",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Function",
                      "name": "Function",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Function/Building-Trust",
                          "name": "Building Trust",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Function/Call-to-Action",
                          "name": "Call to Action",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Function/Create-Desire",
                          "name": "Create Desire",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Function/Define-Concept",
                          "name": "Define Concept",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Function/Profile-Cards",
                          "name": "Profile Cards",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Function/Pattern-Cards",
                          "name": "Pattern Cards",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Persona",
                      "name": "Persona",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Persona/Cecile",
                          "name": "Cecile",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Persona/Chris",
                          "name": "Chris",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Persona/Ian",
                          "name": "Ian",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Persona/Sandra",
                          "name": "Sandra",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Persona/Profile-Cards",
                          "name": "Profile Cards",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Persona/Pattern-Cards",
                          "name": "Pattern Cards",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Score",
                      "name": "Score",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Score/Lead",
                          "name": "Lead",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Score/Profile-Cards",
                          "name": "Profile Cards",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Profiles/Score/Pattern-Cards",
                          "name": "Pattern Cards",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Segments",
                  "name": "Segments",
                  "children": []
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Subscriptions",
                  "name": "Subscriptions",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Subscriptions/Email-Experience-Manager",
                      "name": "Email Experience Manager",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Subscriptions/Manual",
                      "name": "Manual",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Test-Lab",
                  "name": "Test Lab",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Test-Lab/Emails",
                      "name": "Emails",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Experience-Explorer",
                  "name": "Experience Explorer",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Experience-Explorer/Presets",
                      "name": "Presets",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Explorer/Presets/Anonymous",
                          "name": "Anonymous",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Explorer/Presets/Cecile",
                          "name": "Cecile",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Explorer/Presets/Chris",
                          "name": "Chris",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Explorer/Presets/Ian",
                          "name": "Ian",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Experience-Explorer/Presets/Sandra",
                          "name": "Sandra",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters",
                  "name": "Analytics Filters",
                  "children": [
                    {
                      "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters",
                      "name": "Report Filters",
                      "children": [
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification",
                          "name": "Business Classification",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Analyst",
                              "name": "Analyst"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Business-Partner",
                              "name": "Business Partner"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Competitor",
                              "name": "Competitor"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Existing-Customer",
                              "name": "Existing Customer"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Human",
                              "name": "Human"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/ISP",
                              "name": "ISP"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/My-Company",
                              "name": "My Company"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Potential",
                              "name": "Potential"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Press",
                              "name": "Press"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Prospect",
                              "name": "Prospect"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Robot",
                              "name": "Robot"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Supplier",
                              "name": "Supplier"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Business-Classification/Unknown",
                              "name": "Unknown"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country",
                          "name": "Country",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/Australia",
                              "name": "Australia"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/DACH",
                              "name": "DACH"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/Denmark",
                              "name": "Denmark"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/Europe",
                              "name": "Europe"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/Netherlands",
                              "name": "Netherlands"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/North-America",
                              "name": "North America"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/Sweden",
                              "name": "Sweden"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/UK",
                              "name": "UK"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/Country/USA",
                              "name": "USA"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State",
                          "name": "State",
                          "children": [
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Alabama",
                              "name": "Alabama"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Alaska",
                              "name": "Alaska"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Arizona",
                              "name": "Arizona"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Arkansas",
                              "name": "Arkansas"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/California",
                              "name": "California"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Colorado",
                              "name": "Colorado"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Connecticut",
                              "name": "Connecticut"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Delaware",
                              "name": "Delaware"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/District-of-Columbia",
                              "name": "District of Columbia"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Florida",
                              "name": "Florida"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Georgia",
                              "name": "Georgia"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Hawaii",
                              "name": "Hawaii"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Idaho",
                              "name": "Idaho"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Illinois",
                              "name": "Illinois"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Indiana",
                              "name": "Indiana"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Iowa",
                              "name": "Iowa"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Kansas",
                              "name": "Kansas"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Kentucky",
                              "name": "Kentucky"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Louisiana",
                              "name": "Louisiana"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Maine",
                              "name": "Maine"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Maryland",
                              "name": "Maryland"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Massachusetts",
                              "name": "Massachusetts"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Michigan",
                              "name": "Michigan"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Minnesota",
                              "name": "Minnesota"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Mississippi",
                              "name": "Mississippi"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Missouri",
                              "name": "Missouri"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Montana",
                              "name": "Montana"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Nebraska",
                              "name": "Nebraska"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Nevada",
                              "name": "Nevada"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/New-Hampshire",
                              "name": "New Hampshire"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/New-Jersey",
                              "name": "New Jersey"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/New-Mexico",
                              "name": "New Mexico"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/New-York",
                              "name": "New York"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/North-Carolina",
                              "name": "North Carolina"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/North-Dakota",
                              "name": "North Dakota"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Ohio",
                              "name": "Ohio"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Oklahoma",
                              "name": "Oklahoma"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Oregon",
                              "name": "Oregon"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Pennsylvania",
                              "name": "Pennsylvania"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Rhode-Island",
                              "name": "Rhode Island"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/South-Carolina",
                              "name": "South Carolina"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/South-Dakota",
                              "name": "South Dakota"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Tennessee",
                              "name": "Tennessee"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Texas",
                              "name": "Texas"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Utah",
                              "name": "Utah"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Vermont",
                              "name": "Vermont"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Virginia",
                              "name": "Virginia"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Washington",
                              "name": "Washington"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/West-Virginia",
                              "name": "West Virginia"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Wisconsin",
                              "name": "Wisconsin"
                            },
                            {
                              "url": "/sitecore/system/Marketing-Control-Panel/Analytics-Filters/Report-Filters/State/Wyoming",
                              "name": "Wyoming"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/system/Modules",
              "name": "Modules",
              "children": [
                {
                  "url": "/sitecore/system/Modules/Layout-Service",
                  "name": "Layout Service",
                  "children": [
                    {
                      "url": "/sitecore/system/Modules/Layout-Service/Rendering-Contents-Resolvers",
                      "name": "Rendering Contents Resolvers",
                      "children": [
                        {
                          "url": "/sitecore/system/Modules/Layout-Service/Rendering-Contents-Resolvers/Context-Item-Children-Resolver",
                          "name": "Context Item Children Resolver",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Modules/Layout-Service/Rendering-Contents-Resolvers/Context-Item-Resolver",
                          "name": "Context Item Resolver",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Modules/Layout-Service/Rendering-Contents-Resolvers/Datasource-Item-Children-Resolver",
                          "name": "Datasource Item Children Resolver",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Modules/Layout-Service/Rendering-Contents-Resolvers/Datasource-Resolver",
                          "name": "Datasource Resolver",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Modules/Layout-Service/Rendering-Contents-Resolvers/Folder-Filter-Resolver",
                          "name": "Folder Filter Resolver",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Modules/Experience-Explorer",
                  "name": "Experience Explorer",
                  "children": [
                    {
                      "url": "/sitecore/system/Modules/Experience-Explorer/Components",
                      "name": "Components",
                      "children": [
                        {
                          "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpEditor",
                          "name": "ExpEditor",
                          "children": [
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpEditor/Experience",
                              "name": "Experience"
                            },
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpEditor/Onsite-Behavior",
                              "name": "Onsite Behavior"
                            },
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpEditor/Visitor-Information",
                              "name": "Visitor Information"
                            },
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpEditor/Referral-Information",
                              "name": "Referral Information"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpViewer",
                          "name": "ExpViewer",
                          "children": [
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpViewer/Experience",
                              "name": "Experience"
                            },
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpViewer/Onsite-Behavior",
                              "name": "Onsite Behavior"
                            },
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpViewer/Visitor-Information",
                              "name": "Visitor Information"
                            },
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpViewer/Referral-Information",
                              "name": "Referral Information"
                            },
                            {
                              "url": "/sitecore/system/Modules/Experience-Explorer/Components/ExpViewer/Page-Configuration",
                              "name": "Page Configuration"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Modules/Experience-Explorer/Map-Settings",
                      "name": "Map Settings",
                      "children": [
                        {
                          "url": "/sitecore/system/Modules/Experience-Explorer/Map-Settings/Bing",
                          "name": "Bing",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Modules/Experience-Explorer/Map-Settings/Google",
                          "name": "Google",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/system/Publishing-targets",
              "name": "Publishing targets",
              "children": [
                {
                  "url": "/sitecore/system/Publishing-targets/Internet",
                  "name": "Internet",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/system/Settings",
              "name": "Settings",
              "children": [
                {
                  "url": "/sitecore/system/Settings/Insert-Rules",
                  "name": "Insert Rules",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Insert-Rules/Path-Analyzer",
                      "name": "Path Analyzer",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Insert-Rules/Path-Analyzer/Map-Folder-Insert-Rule",
                          "name": "Map Folder Insert Rule",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Analytics",
                  "name": "Analytics",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Analytics/ContactList-Types",
                      "name": "ContactList Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/ContactList-Types/ContactList",
                          "name": "ContactList",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/ContactList-Types/SegmentedList",
                          "name": "SegmentedList",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Filters",
                      "name": "Filters",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Lookups",
                      "name": "Lookups",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Lookups/Countries",
                          "name": "Countries",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Afghanistan",
                              "name": "Afghanistan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Aland-Islands",
                              "name": "Aland Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Albania",
                              "name": "Albania"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Algeria",
                              "name": "Algeria"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/American-Samoa",
                              "name": "American Samoa"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Andorra",
                              "name": "Andorra"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Angola",
                              "name": "Angola"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Anguilla",
                              "name": "Anguilla"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Anonymous-Proxy",
                              "name": "Anonymous Proxy"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Antarctica",
                              "name": "Antarctica"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Antigua-and-Barbuda",
                              "name": "Antigua and Barbuda"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Argentina",
                              "name": "Argentina"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Armenia",
                              "name": "Armenia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Aruba",
                              "name": "Aruba"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/AsiaPacific-Region",
                              "name": "AsiaPacific Region"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Australia",
                              "name": "Australia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Austria",
                              "name": "Austria"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Azerbaijan",
                              "name": "Azerbaijan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bahamas",
                              "name": "Bahamas"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bahrain",
                              "name": "Bahrain"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bangladesh",
                              "name": "Bangladesh"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Barbados",
                              "name": "Barbados"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Belarus",
                              "name": "Belarus"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Belgium",
                              "name": "Belgium"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Belize",
                              "name": "Belize"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Benin",
                              "name": "Benin"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bermuda",
                              "name": "Bermuda"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bhutan",
                              "name": "Bhutan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bolivia",
                              "name": "Bolivia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bosnia-and-Herzegovina",
                              "name": "Bosnia and Herzegovina"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Botswana",
                              "name": "Botswana"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bouvet-Island",
                              "name": "Bouvet Island"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Brazil",
                              "name": "Brazil"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/British-Indian-Ocean-Territory",
                              "name": "British Indian Ocean Territory"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Brunei-Darussalam",
                              "name": "Brunei Darussalam"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Bulgaria",
                              "name": "Bulgaria"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Burkina-Faso",
                              "name": "Burkina Faso"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Burundi",
                              "name": "Burundi"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cambodia",
                              "name": "Cambodia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cameroon",
                              "name": "Cameroon"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Canada",
                              "name": "Canada"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cape-Verde",
                              "name": "Cape Verde"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cayman-Islands",
                              "name": "Cayman Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Central-African-Republic",
                              "name": "Central African Republic"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Chad",
                              "name": "Chad"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Chile",
                              "name": "Chile"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/China",
                              "name": "China"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Christmas-Island",
                              "name": "Christmas Island"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cocos-Keeling-Islands",
                              "name": "Cocos Keeling Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Colombia",
                              "name": "Colombia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Comoros",
                              "name": "Comoros"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Congo",
                              "name": "Congo"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Congo-The-Democratic-Republic-of-the",
                              "name": "Congo The Democratic Republic of the"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cook-Islands",
                              "name": "Cook Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Costa-Rica",
                              "name": "Costa Rica"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cote-dIvoire",
                              "name": "Cote dIvoire"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Croatia",
                              "name": "Croatia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cuba",
                              "name": "Cuba"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Cyprus",
                              "name": "Cyprus"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Czech-Republic",
                              "name": "Czech Republic"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Denmark",
                              "name": "Denmark"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Djibouti",
                              "name": "Djibouti"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Dominica",
                              "name": "Dominica"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Dominican-Republic",
                              "name": "Dominican Republic"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Ecuador",
                              "name": "Ecuador"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Egypt",
                              "name": "Egypt"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/El-Salvador",
                              "name": "El Salvador"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Equatorial-Guinea",
                              "name": "Equatorial Guinea"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Eritrea",
                              "name": "Eritrea"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Estonia",
                              "name": "Estonia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Ethiopia",
                              "name": "Ethiopia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Europe",
                              "name": "Europe"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Falkland-Islands-Malvinas",
                              "name": "Falkland Islands Malvinas"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Faroe-Islands",
                              "name": "Faroe Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Fiji",
                              "name": "Fiji"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Finland",
                              "name": "Finland"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/France",
                              "name": "France"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/France-Metropolitan",
                              "name": "France Metropolitan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/French-Guiana",
                              "name": "French Guiana"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/French-Polynesia",
                              "name": "French Polynesia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/French-Southern-Territories",
                              "name": "French Southern Territories"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Gabon",
                              "name": "Gabon"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Gambia",
                              "name": "Gambia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Georgia",
                              "name": "Georgia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Germany",
                              "name": "Germany"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Ghana",
                              "name": "Ghana"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Gibraltar",
                              "name": "Gibraltar"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Greece",
                              "name": "Greece"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Greenland",
                              "name": "Greenland"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Grenada",
                              "name": "Grenada"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Guadeloupe",
                              "name": "Guadeloupe"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Guam",
                              "name": "Guam"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Guatemala",
                              "name": "Guatemala"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Guernsey",
                              "name": "Guernsey"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Guinea",
                              "name": "Guinea"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Guinea-Bissau",
                              "name": "Guinea-Bissau"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Guyana",
                              "name": "Guyana"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Haiti",
                              "name": "Haiti"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Heard-Island-and-McDonald-Islands",
                              "name": "Heard Island and McDonald Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Holy-See-Vatican-City-State",
                              "name": "Holy See Vatican City State"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Honduras",
                              "name": "Honduras"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Hong-Kong",
                              "name": "Hong Kong"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Hungary",
                              "name": "Hungary"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Iceland",
                              "name": "Iceland"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/India",
                              "name": "India"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Indonesia",
                              "name": "Indonesia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Iran-Islamic-Republic-of",
                              "name": "Iran Islamic Republic of"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Iraq",
                              "name": "Iraq"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Ireland",
                              "name": "Ireland"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Isle-of-Man",
                              "name": "Isle of Man"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Israel",
                              "name": "Israel"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Italy",
                              "name": "Italy"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Jamaica",
                              "name": "Jamaica"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Japan",
                              "name": "Japan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Jersey",
                              "name": "Jersey"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Jordan",
                              "name": "Jordan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Kazakhstan",
                              "name": "Kazakhstan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Kenya",
                              "name": "Kenya"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Kiribati",
                              "name": "Kiribati"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Korea-Democratic-Peoples-Republic-of",
                              "name": "Korea Democratic Peoples Republic of"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Korea-Republic-of",
                              "name": "Korea Republic of"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Kuwait",
                              "name": "Kuwait"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Kyrgyzstan",
                              "name": "Kyrgyzstan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Lao-Peoples-Democratic-Republic",
                              "name": "Lao Peoples Democratic Republic"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Latvia",
                              "name": "Latvia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Lebanon",
                              "name": "Lebanon"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Lesotho",
                              "name": "Lesotho"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Liberia",
                              "name": "Liberia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Libyan-Arab-Jamahiriya",
                              "name": "Libyan Arab Jamahiriya"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Liechtenstein",
                              "name": "Liechtenstein"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Lithuania",
                              "name": "Lithuania"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Luxembourg",
                              "name": "Luxembourg"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Macao",
                              "name": "Macao"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Macedonia",
                              "name": "Macedonia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Madagascar",
                              "name": "Madagascar"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Malawi",
                              "name": "Malawi"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Malaysia",
                              "name": "Malaysia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Maldives",
                              "name": "Maldives"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Mali",
                              "name": "Mali"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Malta",
                              "name": "Malta"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Marshall-Islands",
                              "name": "Marshall Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Martinique",
                              "name": "Martinique"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Mauritania",
                              "name": "Mauritania"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Mauritius",
                              "name": "Mauritius"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Mayotte",
                              "name": "Mayotte"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Mexico",
                              "name": "Mexico"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Micronesia-Federated-States-of",
                              "name": "Micronesia Federated States of"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Moldova-Republic-of",
                              "name": "Moldova Republic of"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Monaco",
                              "name": "Monaco"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Mongolia",
                              "name": "Mongolia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Montenegro",
                              "name": "Montenegro"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Montserrat",
                              "name": "Montserrat"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Morocco",
                              "name": "Morocco"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Mozambique",
                              "name": "Mozambique"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Myanmar",
                              "name": "Myanmar"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Namibia",
                              "name": "Namibia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Nauru",
                              "name": "Nauru"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Nepal",
                              "name": "Nepal"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Netherlands",
                              "name": "Netherlands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Netherlands-Antilles",
                              "name": "Netherlands Antilles"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/New-Caledonia",
                              "name": "New Caledonia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/New-Zealand",
                              "name": "New Zealand"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Nicaragua",
                              "name": "Nicaragua"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Niger",
                              "name": "Niger"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Nigeria",
                              "name": "Nigeria"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Niue",
                              "name": "Niue"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Norfolk-Island",
                              "name": "Norfolk Island"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Northern-Mariana-Islands",
                              "name": "Northern Mariana Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Norway",
                              "name": "Norway"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Oman",
                              "name": "Oman"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Other-Country",
                              "name": "Other Country"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Pakistan",
                              "name": "Pakistan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Palau",
                              "name": "Palau"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Palestinian-Territory",
                              "name": "Palestinian Territory"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Panama",
                              "name": "Panama"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Papua-New-Guinea",
                              "name": "Papua New Guinea"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Paraguay",
                              "name": "Paraguay"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Peru",
                              "name": "Peru"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Philippines",
                              "name": "Philippines"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Pitcairn",
                              "name": "Pitcairn"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Poland",
                              "name": "Poland"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Portugal",
                              "name": "Portugal"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Puerto-Rico",
                              "name": "Puerto Rico"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Qatar",
                              "name": "Qatar"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Reunion",
                              "name": "Reunion"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Romania",
                              "name": "Romania"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Russian-Federation",
                              "name": "Russian Federation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Rwanda",
                              "name": "Rwanda"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Saint-Bartelemey",
                              "name": "Saint Bartelemey"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Saint-Helena",
                              "name": "Saint Helena"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Saint-Kitts-and-Nevis",
                              "name": "Saint Kitts and Nevis"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Saint-Lucia",
                              "name": "Saint Lucia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Saint-Martin",
                              "name": "Saint Martin"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Saint-Pierre-and-Miquelon",
                              "name": "Saint Pierre and Miquelon"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Saint-Vincent-and-the-Grenadines",
                              "name": "Saint Vincent and the Grenadines"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Samoa",
                              "name": "Samoa"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/San-Marino",
                              "name": "San Marino"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Sao-Tome-and-Principe",
                              "name": "Sao Tome and Principe"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Satellite-Provider",
                              "name": "Satellite Provider"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Saudi-Arabia",
                              "name": "Saudi Arabia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Senegal",
                              "name": "Senegal"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Serbia",
                              "name": "Serbia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Seychelles",
                              "name": "Seychelles"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Sierra-Leone",
                              "name": "Sierra Leone"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Singapore",
                              "name": "Singapore"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Slovakia",
                              "name": "Slovakia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Slovenia",
                              "name": "Slovenia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Solomon-Islands",
                              "name": "Solomon Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Somalia",
                              "name": "Somalia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/South-Africa",
                              "name": "South Africa"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/South-Georgia-and-the-South-Sandwich-Islands",
                              "name": "South Georgia and the South Sandwich Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Spain",
                              "name": "Spain"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Sri-Lanka",
                              "name": "Sri Lanka"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Sudan",
                              "name": "Sudan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Suriname",
                              "name": "Suriname"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Svalbard-and-Jan-Mayen",
                              "name": "Svalbard and Jan Mayen"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Swaziland",
                              "name": "Swaziland"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Sweden",
                              "name": "Sweden"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Switzerland",
                              "name": "Switzerland"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Syrian-Arab-Republic",
                              "name": "Syrian Arab Republic"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Taiwan",
                              "name": "Taiwan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Tajikistan",
                              "name": "Tajikistan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Tanzania-United-Republic-of",
                              "name": "Tanzania United Republic of"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Thailand",
                              "name": "Thailand"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Timor-Leste",
                              "name": "Timor-Leste"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Togo",
                              "name": "Togo"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Tokelau",
                              "name": "Tokelau"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Tonga",
                              "name": "Tonga"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Trinidad-and-Tobago",
                              "name": "Trinidad and Tobago"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Tunisia",
                              "name": "Tunisia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Turkey",
                              "name": "Turkey"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Turkmenistan",
                              "name": "Turkmenistan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Turks-and-Caicos-Islands",
                              "name": "Turks and Caicos Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Tuvalu",
                              "name": "Tuvalu"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Uganda",
                              "name": "Uganda"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Ukraine",
                              "name": "Ukraine"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/United-Arab-Emirates",
                              "name": "United Arab Emirates"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/United-Kingdom",
                              "name": "United Kingdom"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/United-States",
                              "name": "United States"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/United-States-Minor-Outlying-Islands",
                              "name": "United States Minor Outlying Islands"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Uruguay",
                              "name": "Uruguay"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Uzbekistan",
                              "name": "Uzbekistan"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Vanuatu",
                              "name": "Vanuatu"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Venezuela",
                              "name": "Venezuela"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Vietnam",
                              "name": "Vietnam"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Virgin-Islands-British",
                              "name": "Virgin Islands British"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Virgin-Islands-US",
                              "name": "Virgin Islands US"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Wallis-and-Futuna",
                              "name": "Wallis and Futuna"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Western-Sahara",
                              "name": "Western Sahara"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Yemen",
                              "name": "Yemen"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Zambia",
                              "name": "Zambia"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Lookups/Countries/Zimbabwe",
                              "name": "Zimbabwe"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Marketing-Automation",
                      "name": "Marketing Automation",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types",
                          "name": "Activity Types",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Taxonomies",
                              "name": "Taxonomies"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Campaign-Entry",
                              "name": "Campaign Entry"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Campaign-Exit",
                              "name": "Campaign Exit"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Campaign-listener",
                              "name": "Campaign listener"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Change-behavior-profile-value",
                              "name": "Change behavior profile value"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Custom-listener",
                              "name": "Custom listener"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Decision-Point",
                              "name": "Decision Point"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Delay",
                              "name": "Delay"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Email-clicked",
                              "name": "Email clicked"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Email-opened",
                              "name": "Email opened"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Goal-triggered",
                              "name": "Goal triggered"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Increase-engagement-value",
                              "name": "Increase engagement value"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Move-to-another-campaign",
                              "name": "Move to another campaign"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Outcome-registered",
                              "name": "Outcome registered"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Remove-from-campaign",
                              "name": "Remove from campaign"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Return-to-start",
                              "name": "Return to start"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Send-email",
                              "name": "Send email"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Subscribe-to-list",
                              "name": "Subscribe to list"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Unsubscribe-from-list",
                              "name": "Unsubscribe from list"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Update-consent-settings",
                              "name": "Update consent settings"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Validate-email-address",
                              "name": "Validate email address"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Activity-Types/Visit-listener",
                              "name": "Visit listener"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Editor-Types",
                          "name": "Editor Types",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Editor-Types/Conditional-Parameter",
                              "name": "Conditional Parameter"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Marketing-Automation/Editor-Types/JSON-Parameter",
                              "name": "JSON Parameter"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Marketing-Themes",
                      "name": "Marketing Themes",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Marketing-Themes/Account-development",
                          "name": "Account development",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Marketing-Themes/Acquisition",
                          "name": "Acquisition",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Marketing-Themes/Conversion",
                          "name": "Conversion",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Marketing-Themes/Retention",
                          "name": "Retention",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Marketing-Themes/Service-campaigns",
                          "name": "Service campaigns",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Marketing-Themes/Win-back",
                          "name": "Win back",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Organic-Branded-Keywords",
                      "name": "Organic Branded Keywords",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Page-Events",
                      "name": "Page Events",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Forms",
                          "name": "Forms",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/Forms/Field-completed",
                              "name": "Field completed"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/Forms/Field-error",
                              "name": "Field error"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/Forms/Form-begin",
                              "name": "Form begin"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/Forms/Form-dropout",
                              "name": "Form dropout"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/Forms/Form-error",
                              "name": "Form error"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/Forms/Form-submit",
                              "name": "Form submit"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/Forms/Form-submit-success",
                              "name": "Form submit success"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Begin-transaction",
                          "name": "Begin transaction",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Campaign",
                          "name": "Campaign",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Campaign-registration-failed",
                          "name": "Campaign registration failed",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Cancel-transaction",
                          "name": "Cancel transaction",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Download",
                          "name": "Download",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Download-brochure",
                          "name": "Download brochure",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/End-transaction",
                          "name": "End transaction",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Error",
                          "name": "Error",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/EXM",
                          "name": "EXM",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/EXM/Dispatch-Failed",
                              "name": "Dispatch Failed"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/EXM/Email-Bounced",
                              "name": "Email Bounced"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/EXM/Email-Opened",
                              "name": "Email Opened"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/EXM/Email-Sent",
                              "name": "Email Sent"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/EXM/Email-Spam-Reported",
                              "name": "Email Spam Reported"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Page-Events/EXM/Unsubscribe-from-email",
                              "name": "Unsubscribe from email"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Field-changed",
                          "name": "Field changed",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Follow-hit",
                          "name": "Follow hit",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Form-submitted",
                          "name": "Form submitted",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Information",
                          "name": "Information",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Login-failed",
                          "name": "Login failed",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Logout",
                          "name": "Logout",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Long-running-request",
                          "name": "Long running request",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Newsletter-removed",
                          "name": "Newsletter removed",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/No-search-hits-found",
                          "name": "No search hits found",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Page-error",
                          "name": "Page error",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Page-not-found",
                          "name": "Page not found",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Page-visited",
                          "name": "Page visited",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Poll",
                          "name": "Poll",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Print",
                          "name": "Print",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Put-in-basket",
                          "name": "Put in basket",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Rate",
                          "name": "Rate",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Register-failed",
                          "name": "Register failed",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Register-for-event",
                          "name": "Register for event",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/RSS",
                          "name": "RSS",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Search",
                          "name": "Search",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Session-begin",
                          "name": "Session begin",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Session-end",
                          "name": "Session end",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Submit-success",
                          "name": "Submit success",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Page-Events/Update-profile",
                          "name": "Update profile",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Pattern-Matching-Types",
                      "name": "Pattern Matching Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Pattern-Matching-Types/N-Dimensional-Euclidian-Distance",
                          "name": "N-Dimensional Euclidian Distance",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Preset-Types",
                      "name": "Preset Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Preset-Types/Single",
                          "name": "Single",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Preset-Types/Multiple",
                          "name": "Multiple",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Preset-Types/Multiple-with-Percentages",
                          "name": "Multiple with Percentages",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Profile-Key-Controls",
                      "name": "Profile Key Controls",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Profile-Key-Controls/Checkbox",
                          "name": "Checkbox",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Profile-Key-Controls/Slider",
                          "name": "Slider",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Profile-Key-Controls/Smileys",
                          "name": "Smileys",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Profile-Key-Controls/Stars",
                          "name": "Stars",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Profile-Key-Controls/Text",
                          "name": "Text",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Profile-Types",
                      "name": "Profile Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Profile-Types/Average",
                          "name": "Average",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Profile-Types/Percentage",
                          "name": "Percentage",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Profile-Types/Sum",
                          "name": "Sum",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Rules",
                      "name": "Rules",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Rules/Session-Begin",
                          "name": "Session Begin",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Analytics/Rules/Session-Begin/Rules",
                              "name": "Rules"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Rules/Session-Begin/Tags",
                              "name": "Tags"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Rules/Session-End",
                          "name": "Session End",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Analytics/Rules/Session-End/Rules",
                              "name": "Rules"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Rules/Session-End/Tags",
                              "name": "Tags"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Traffic-Type",
                      "name": "Traffic Type",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Search-Engine---Organic",
                          "name": "Search Engine - Organic",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Search-Engine---Organic-Branded",
                          "name": "Search Engine - Organic Branded",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Direct",
                          "name": "Direct",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Referred---Other",
                          "name": "Referred - Other",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Referred---Blog",
                          "name": "Referred - Blog",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Referred---News",
                          "name": "Referred - News",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Referred---Conversations",
                          "name": "Referred - Conversations",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Referred---Community",
                          "name": "Referred - Community",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Referred---Wiki",
                          "name": "Referred - Wiki",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Referred---Analyst",
                          "name": "Referred - Analyst",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/RSS",
                          "name": "RSS",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Email",
                          "name": "Email",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Paid",
                          "name": "Paid",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Traffic-Type/Unknown",
                          "name": "Unknown",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Vendor-Specific-Filters",
                      "name": "Vendor Specific Filters",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Vendor-Specific-Filters/MSSQL",
                          "name": "MSSQL",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Analytics/Vendor-Specific-Filters/MSSQL/Business-Classification",
                              "name": "Business Classification"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Vendor-Specific-Filters/MSSQL/Country",
                              "name": "Country"
                            },
                            {
                              "url": "/sitecore/system/Settings/Analytics/Vendor-Specific-Filters/MSSQL/State",
                              "name": "State"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Visitor-Identification-Types",
                      "name": "Visitor Identification Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identification-Types/Business",
                          "name": "Business",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identification-Types/Dns",
                          "name": "Dns",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identification-Types/IP",
                          "name": "IP",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identification-Types/User-Agent",
                          "name": "User Agent",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identification-Types/Visitor",
                          "name": "Visitor",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications",
                      "name": "Visitor Identifications",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/000---Unidentified",
                          "name": "000 - Unidentified",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/010---Business",
                          "name": "010 - Business",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/020---ISP",
                          "name": "020 - ISP",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/025---Existing-Customer",
                          "name": "025 - Existing Customer",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/030---Analyst",
                          "name": "030 - Analyst",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/040---Press",
                          "name": "040 - Press",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/050---Supplier",
                          "name": "050 - Supplier",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/060---Business-Partner",
                          "name": "060 - Business Partner",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/500---Competitor",
                          "name": "500 - Competitor",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/600---My-Company",
                          "name": "600 - My Company",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/900---Bot---Feed-Reader",
                          "name": "900 - Bot - Feed Reader",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/910---Bot---Seach-Engine",
                          "name": "910 - Bot - Seach Engine",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/920---Bot---Unidentified",
                          "name": "920 - Bot - Unidentified",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/925---Bot---Auto-Detected",
                          "name": "925 - Bot - Auto Detected",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Analytics/Visitor-Identifications/930---Bot---Malicious",
                          "name": "930 - Bot - Malicious",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Buckets",
                  "name": "Buckets",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Buckets/Facets",
                      "name": "Facets",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Author",
                          "name": "Author",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Author-Template",
                          "name": "Author Template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Bucket",
                          "name": "Bucket",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Create-Date-Author",
                          "name": "Create Date Author",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Date-Range",
                          "name": "Date Range",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/File-Size",
                          "name": "File Size",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/File-Type",
                          "name": "File Type",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Image-Dimensions",
                          "name": "Image Dimensions",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/In-Workflow",
                          "name": "In Workflow",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Language",
                          "name": "Language",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Language-Template",
                          "name": "Language Template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Location",
                          "name": "Location",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Tags",
                          "name": "Tags",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Template",
                          "name": "Template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Template-Author",
                          "name": "Template Author",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Facets/Updated-Date",
                          "name": "Updated Date",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Buckets/Search-Types",
                      "name": "Search Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/User-Defined",
                          "name": "User Defined",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Author",
                          "name": "Author",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Custom",
                          "name": "Custom",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Debug",
                          "name": "Debug",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/End-Date",
                          "name": "End Date",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/File-Type",
                          "name": "File Type",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/ID",
                          "name": "ID",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Language",
                          "name": "Language",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Location",
                          "name": "Location",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Site",
                          "name": "Site",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Sort",
                          "name": "Sort",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Start-Date",
                          "name": "Start Date",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Tag",
                          "name": "Tag",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Template",
                          "name": "Template",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Text",
                          "name": "Text",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/UpdatedBy",
                          "name": "UpdatedBy",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Search-Types/Version",
                          "name": "Version",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Buckets/Settings",
                      "name": "Settings",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Buckets/Settings/Client-Side-Hooks",
                          "name": "Client Side Hooks",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Client-Side-Hooks/custom",
                              "name": "custom"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Client-Side-Hooks/date",
                              "name": "date"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Client-Side-Hooks/id",
                              "name": "id"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Client-Side-Hooks/normal",
                              "name": "normal"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Client-Side-Hooks/sort",
                              "name": "sort"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions",
                          "name": "Quick Actions",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Add-Item",
                              "name": "Add Item"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Add-New-Template",
                              "name": "Add New Template"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Add-to-Favorites",
                              "name": "Add to Favorites"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Add-Version",
                              "name": "Add Version"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Archive",
                              "name": "Archive"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Configure-Standard-Values",
                              "name": "Configure Standard Values"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Delete-Children",
                              "name": "Delete Children"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Download",
                              "name": "Download"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Load-Item",
                              "name": "Load Item"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Lock-for-Editing",
                              "name": "Lock for Editing"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Open",
                              "name": "Open"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Page-Editor",
                              "name": "Page Editor"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Personalize",
                              "name": "Personalize"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Play",
                              "name": "Play"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Preview",
                              "name": "Preview"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Publish",
                              "name": "Publish"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Rename",
                              "name": "Rename"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Reset-Fields",
                              "name": "Reset Fields"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Quick-Actions/Unlock-from-Editing",
                              "name": "Unlock from Editing"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Settings/Search-Box-Dropdown",
                          "name": "Search Box Dropdown",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Box-Dropdown/Recent-Results",
                              "name": "Recent Results"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Box-Dropdown/Recent-Items",
                              "name": "Recent Items"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Box-Dropdown/Recently-Created",
                              "name": "Recently Created"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Box-Dropdown/Recently-Opened-Tabs",
                              "name": "Recently Opened Tabs"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Box-Dropdown/Search-Filters",
                              "name": "Search Filters"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Box-Dropdown/Search-Operations",
                              "name": "Search Operations"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Settings/Search-Filter-Control-Types",
                          "name": "Search Filter Control Types",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Filter-Control-Types/Auto-Suggest-List",
                              "name": "Auto Suggest List"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Filter-Control-Types/Calendar",
                              "name": "Calendar"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Filter-Control-Types/Check-Box",
                              "name": "Check Box"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Filter-Control-Types/Color-Picker",
                              "name": "Color Picker"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Filter-Control-Types/Flag-List",
                              "name": "Flag List"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Filter-Control-Types/Slider",
                              "name": "Slider"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Filter-Control-Types/Text",
                              "name": "Text"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Settings/Search-Operations",
                          "name": "Search Operations",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Operations/Fields",
                              "name": "Fields"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Operations/Information-Architecture",
                              "name": "Information Architecture"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Operations/Marketing",
                              "name": "Marketing"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Operations/Presentation",
                              "name": "Presentation"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Settings/Search-Result-Options",
                          "name": "Search Result Options",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Result-Options/New-Content-Editor",
                              "name": "New Content Editor"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Result-Options/New-Tab",
                              "name": "New Tab"
                            },
                            {
                              "url": "/sitecore/system/Settings/Buckets/Settings/Search-Result-Options/New-Tab-Not-Selected",
                              "name": "New Tab Not Selected"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Buckets/Tab-Options",
                      "name": "Tab Options",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Buckets/Tab-Options/Close-Tab",
                          "name": "Close Tab",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Tab-Options/Close-All",
                          "name": "Close All",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Tab-Options/Close-All-But-This",
                          "name": "Close All But This",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Tab-Options/Close-Tabs-To-Right",
                          "name": "Close Tabs To Right",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Tab-Options/Bookmark-All",
                          "name": "Bookmark All",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Buckets/Tag-Repositories",
                      "name": "Tag Repositories",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Buckets/Tag-Repositories/Sitecore-Items",
                          "name": "Sitecore Items",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Buckets/TagRepository",
                      "name": "TagRepository",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Buckets/TagRepository/2012",
                          "name": "2012",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Buckets/TagRepository/2012/11",
                              "name": "11"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Buckets/Views",
                      "name": "Views",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Buckets/Views/ID-View",
                          "name": "ID View",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Views/Image-View",
                          "name": "Image View",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Views/Lock-View",
                          "name": "Lock View",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Views/Media-View",
                          "name": "Media View",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Views/Preview-View",
                          "name": "Preview View",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Views/Table-View",
                          "name": "Table View",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Buckets/Views/Tag-View",
                          "name": "Tag View",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Buckets/Item-Buckets-Settings",
                      "name": "Item Buckets Settings",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Content-Testing",
                  "name": "Content Testing",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Content-Testing/End-Test-Behavior",
                      "name": "End Test Behavior",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/End-Test-Behavior/Is-Content-Test",
                          "name": "Is Content Test",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/End-Test-Behavior/Is-Content-Test/Duration-Reached",
                              "name": "Duration Reached"
                            },
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/End-Test-Behavior/Is-Content-Test/Winner-found",
                              "name": "Winner found"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/End-Test-Behavior/Is-Mv-Test",
                          "name": "Is Mv Test",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/End-Test-Behavior/Is-Mv-Test/Duration-Reached",
                              "name": "Duration Reached"
                            },
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/End-Test-Behavior/Is-Mv-Test/Winner-Found",
                              "name": "Winner Found"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Content-Testing/Personalization-Suggestions",
                      "name": "Personalization Suggestions",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Personalization-Suggestions/No-pattern-match",
                          "name": "No pattern match",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Personalization-Suggestions/No-campaign",
                          "name": "No campaign",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Content-Testing/Report-Queries",
                      "name": "Report Queries",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Average-Time-on-Page",
                          "name": "Average Time on Page",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Calculated-Cluster-Data-By-Test-Id",
                          "name": "Calculated Cluster Data By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Clicks-To-Pages-By-Test-Id",
                          "name": "Clicks To Pages By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Clustering-Data-By-Test-Id",
                          "name": "Clustering Data By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Conversions-By-Test-Id",
                          "name": "Conversions By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Item-Bounced",
                          "name": "Item Bounced",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Last-Test-Id-By-RuleSetId-And-RuleId",
                          "name": "Last Test Id By RuleSetId And RuleId",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Last-Test-Id-Within-Days",
                          "name": "Last Test Id Within Days",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/MV-Test-Details-By-Test-Id",
                          "name": "MV Test Details By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/MV-Test-Details-By-Test-Id-And-Goal-Id",
                          "name": "MV Test Details By Test Id And Goal Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/MV-Test-Visits-By-Test-Id",
                          "name": "MV Test Visits By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Page-Views-By-Item-Id",
                          "name": "Page Views By Item Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Personalization-Performance-By-Test-Id",
                          "name": "Personalization Performance By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Personalization-Visits-By-Range",
                          "name": "Personalization Visits By Range",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Reach-By-Test-Id",
                          "name": "Reach By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Reach-For-Item",
                          "name": "Reach For Item",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Reach-For-Rule",
                          "name": "Reach For Rule",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Ruleset-Exposure",
                          "name": "Ruleset Exposure",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Site-Statistics-By-Test-Id",
                          "name": "Site Statistics By Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/SuggestedPersonalizationsByTestId",
                          "name": "SuggestedPersonalizationsByTestId",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Test-Outcome-by-Test-Id",
                          "name": "Test Outcome by Test Id",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Test-Outcome-Count-After-Date",
                          "name": "Test Outcome Count After Date",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Test-Outcome-Count-Before-Date",
                          "name": "Test Outcome Count Before Date",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Test-Outcomes",
                          "name": "Test Outcomes",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Test-Potential",
                          "name": "Test Potential",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Test-Statistics",
                          "name": "Test Statistics",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/VisitorCount-By-TestId-And-TestCombination",
                          "name": "VisitorCount By TestId And TestCombination",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Visits",
                          "name": "Visits",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Winning-Combination-for-Testing-Cluster",
                          "name": "Winning Combination for Testing Cluster",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Write-Test-Outcomes",
                          "name": "Write Test Outcomes",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Write-Test-Statistics",
                          "name": "Write Test Statistics",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Write-Testing-Cluster",
                          "name": "Write Testing Cluster",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Write-Testing-Cluster-Members",
                          "name": "Write Testing Cluster Members",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Deprecated",
                          "name": "Deprecated",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Deprecated/Average-Unique-Page-Views",
                              "name": "Average Unique Page Views"
                            },
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Deprecated/Clicks-To-Pages-By-Test-Id-And-Test-Values",
                              "name": "Clicks To Pages By Test Id And Test Values"
                            },
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Deprecated/Last-Test-Id-For-Rule",
                              "name": "Last Test Id For Rule"
                            },
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Deprecated/MV-Test-Visits-by-Test-Id-And-Test-Values",
                              "name": "MV Test Visits by Test Id And Test Values"
                            },
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Deprecated/Number-of-Sessions-Above-Average-Value",
                              "name": "Number of Sessions Above Average Value"
                            },
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Deprecated/Number-of-Sessions-Below-Average-Value",
                              "name": "Number of Sessions Below Average Value"
                            },
                            {
                              "url": "/sitecore/system/Settings/Content-Testing/Report-Queries/Deprecated/Testing-Clusters-By-Test-Id",
                              "name": "Testing Clusters By Test Id"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Content-Testing/Test-Strategies",
                      "name": "Test Strategies",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Strategies/Random",
                          "name": "Random",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Strategies/Round-Robin-Sticky",
                          "name": "Round Robin Sticky",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Strategies/Sticky",
                          "name": "Sticky",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Strategies/Subgroup-Round-Robin-Sticky",
                          "name": "Subgroup Round Robin Sticky",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Strategies/Round-Robin",
                          "name": "Round Robin",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Content-Testing/Test-Suggestions",
                      "name": "Test Suggestions",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Suggestions/Has-never-been-tested",
                          "name": "Has never been tested",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Content-Testing/Test-Types",
                      "name": "Test Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Types/Component",
                          "name": "Component",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Types/Content",
                          "name": "Content",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Types/Page",
                          "name": "Page",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Types/Personalization",
                          "name": "Personalization",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Content-Testing/Test-Winner-Strategies",
                      "name": "Test Winner Strategies",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Winner-Strategies/Manual",
                          "name": "Manual",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Winner-Strategies/Test-Objective",
                          "name": "Test Objective",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Content-Testing/Test-Winner-Strategies/Weighted-Engagement-Value",
                          "name": "Weighted Engagement Value",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Email",
                  "name": "Email",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Email/Common-Text",
                      "name": "Common Text",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Address-Changed-Confirmation",
                          "name": "Address Changed Confirmation",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/an-email",
                          "name": "an email",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Cannot-Create-Anonymous",
                          "name": "Cannot Create Anonymous",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Email-Address",
                          "name": "Email Address",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Email-In-Use",
                          "name": "Email In Use",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Email-Not-Valid",
                          "name": "Email Not Valid",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Enter-Email",
                          "name": "Enter Email",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Incorrect-Chars",
                          "name": "Incorrect Chars",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Newsletters",
                          "name": "Newsletters",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/No-Newsletters",
                          "name": "No Newsletters",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Please-Login",
                          "name": "Please Login",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Simple-Title",
                          "name": "Simple Title",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Subscribe",
                          "name": "Subscribe",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Common-Text/Type-Chars",
                          "name": "Type Chars",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Email/Instance-Tasks",
                      "name": "Instance Tasks",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Email/Instance-Tasks/Content-Delivery",
                          "name": "Content Delivery",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Instance-Tasks/Content-Management-Dedicated",
                          "name": "Content Management Dedicated",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Instance-Tasks/Content-Management-Primary",
                          "name": "Content Management Primary",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Email/Instance-Tasks/Content-Management-Primary/Message-Statistics",
                              "name": "Message Statistics"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/Instance-Tasks/Content-Management-Primary/Reset-Failed-Automated-Messages",
                              "name": "Reset Failed Automated Messages"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Instance-Tasks/Processing",
                          "name": "Processing",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/Instance-Tasks/Reporting",
                          "name": "Reporting",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Email/Tasks",
                      "name": "Tasks",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Email/System",
                      "name": "System",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Email/System/Message-States",
                          "name": "Message States",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-States/Activation-Scheduled",
                              "name": "Activation Scheduled"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-States/Active",
                              "name": "Active"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-States/Dispatch-Scheduled",
                              "name": "Dispatch Scheduled"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-States/Draft",
                              "name": "Draft"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-States/Inactive",
                              "name": "Inactive"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-States/Queuing",
                              "name": "Queuing"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-States/Sending",
                              "name": "Sending"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-States/Sent",
                              "name": "Sent"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/System/Message-Types",
                          "name": "Message Types",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-Types/Automated",
                              "name": "Automated"
                            },
                            {
                              "url": "/sitecore/system/Settings/Email/System/Message-Types/Regular",
                              "name": "Regular"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/System/Root-List",
                          "name": "Root List",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Email/System/Hostname-Mappings",
                          "name": "Hostname Mappings",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Forms",
                  "name": "Forms",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Forms/Field-Types",
                      "name": "Field Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Forms/Field-Types/Basic",
                          "name": "Basic",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Basic/Text",
                              "name": "Text"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Basic/Single-Line-Text",
                              "name": "Single-Line Text"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Basic/Multiple-Line-Text",
                              "name": "Multiple-Line Text"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Basic/Number",
                              "name": "Number"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Basic/Email",
                              "name": "Email"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Basic/Telephone",
                              "name": "Telephone"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Basic/Checkbox",
                              "name": "Checkbox"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Basic/Date",
                              "name": "Date"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Field-Types/Lists",
                          "name": "Lists",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Lists/Dropdown-List",
                              "name": "Dropdown List"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Lists/List-Box",
                              "name": "List Box"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Lists/Checkbox-List",
                              "name": "Checkbox List"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Lists/Radio-Button-List",
                              "name": "Radio Button List"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Field-Types/Security",
                          "name": "Security",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Security/Password",
                              "name": "Password"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Security/Password-Confirmation",
                              "name": "Password Confirmation"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Field-Types/Structure",
                          "name": "Structure",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Structure/Section",
                              "name": "Section"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Structure/Page",
                              "name": "Page"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Field-Types/Structure/Submit-Button",
                              "name": "Submit Button"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Field-Types/Form",
                          "name": "Form",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Forms/Meta-Data",
                      "name": "Meta Data",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Forms/Meta-Data/Conditions",
                          "name": "Conditions",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Conditions/Action-Types",
                              "name": "Action Types"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Conditions/Match-Types",
                              "name": "Match Types"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Conditions/Operators",
                              "name": "Operators"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags",
                          "name": "Text Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/p",
                              "name": "p"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/h1",
                              "name": "h1"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/h2",
                              "name": "h2"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/h3",
                              "name": "h3"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/h4",
                              "name": "h4"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/h5",
                              "name": "h5"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/h6",
                              "name": "h6"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/span",
                              "name": "span"
                            },
                            {
                              "url": "/sitecore/system/Settings/Forms/Meta-Data/Text-Tags/label",
                              "name": "label"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Forms/Report-Queries",
                      "name": "Report Queries",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Forms/Report-Queries/Form-Metrics",
                          "name": "Form Metrics",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Report-Queries/Form-Field-Metrics",
                          "name": "Form Field Metrics",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Report-Queries/Field-Metrics",
                          "name": "Field Metrics",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Forms/Submit-Actions",
                      "name": "Submit Actions",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Forms/Submit-Actions/Trigger-Goal",
                          "name": "Trigger Goal",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Submit-Actions/Trigger-Campaign-Activity",
                          "name": "Trigger Campaign Activity",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Submit-Actions/Trigger-Outcome",
                          "name": "Trigger Outcome",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Submit-Actions/Send-Email-Campaign-Message",
                          "name": "Send Email Campaign Message",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Submit-Actions/Redirect-to-Page",
                          "name": "Redirect to Page",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Submit-Actions/Save-Data",
                          "name": "Save Data",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Forms/Validations",
                      "name": "Validations",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Forms/Validations/Date-Validator",
                          "name": "Date Validator",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Validations/Email-Validator",
                          "name": "Email Validator",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Validations/Number-Step-Validator",
                          "name": "Number Step Validator",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Validations/Number-Validator",
                          "name": "Number Validator",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Validations/Phone-Number-Validator",
                          "name": "Phone Number Validator",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Forms/Validations/String-Length-Validator",
                          "name": "String Length Validator",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Forms/Value-Providers",
                      "name": "Value Providers",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Layouts",
                  "name": "Layouts",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Layouts/Presets",
                      "name": "Presets",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Layouts/Presets/Sample-Layout",
                          "name": "Sample Layout",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Rules",
                  "name": "Rules",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Rules/Definitions",
                      "name": "Definitions",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups",
                          "name": "ElementGroups",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Campaign",
                              "name": "Campaign"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Channel",
                              "name": "Channel"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Contact",
                              "name": "Contact"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Device",
                              "name": "Device"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Date",
                              "name": "Date"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Email",
                              "name": "Email"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Marketing-Automation",
                              "name": "Marketing Automation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/GeoIP",
                              "name": "GeoIP"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Outcomes",
                              "name": "Outcomes"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/ElementGroups/Visit",
                              "name": "Visit"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Elements",
                          "name": "Elements",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Predefined-Rules",
                              "name": "Predefined Rules"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Bucketing",
                              "name": "Bucketing"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Campaigns",
                              "name": "Campaigns"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Channel",
                              "name": "Channel"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Conditional-Renderings",
                              "name": "Conditional Renderings"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Content-Editor",
                              "name": "Content Editor"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Context",
                              "name": "Context"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Custom",
                              "name": "Custom"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Date",
                              "name": "Date"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Device",
                              "name": "Device"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Device-Detection",
                              "name": "Device Detection"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Email",
                              "name": "Email"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Federated-Experience-Manager---Domain-Matching",
                              "name": "Federated Experience Manager - Domain Matching"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Federated-Experience-Manager---Domain-Tracking",
                              "name": "Federated Experience Manager - Domain Tracking"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Federated-Experience-Manager---Page-Matching",
                              "name": "Federated Experience Manager - Page Matching"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Fields",
                              "name": "Fields"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/GeoIP",
                              "name": "GeoIP"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Indexing-and-Search",
                              "name": "Indexing and Search"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Insert-Options",
                              "name": "Insert Options"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Interaction-segmentation",
                              "name": "Interaction segmentation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Item-Attributes",
                              "name": "Item Attributes"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Item-Hierarchy",
                              "name": "Item Hierarchy"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Item-Information",
                              "name": "Item Information"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Item-Security",
                              "name": "Item Security"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Item-Version",
                              "name": "Item Version"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Item-Version-CM",
                              "name": "Item Version CM"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Marketing-Automation",
                              "name": "Marketing Automation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Path-Analyzer-Map-Groups",
                              "name": "Path Analyzer Map Groups"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Rule-Visibility",
                              "name": "Rule Visibility"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Script",
                              "name": "Script"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Search-Query-Builder",
                              "name": "Search Query Builder"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Security",
                              "name": "Security"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Security-Editor",
                              "name": "Security Editor"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Sitecore-Query",
                              "name": "Sitecore Query"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/System",
                              "name": "System"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Testing",
                              "name": "Testing"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Tracking",
                              "name": "Tracking"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Validation",
                              "name": "Validation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Venue",
                              "name": "Venue"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Visit",
                              "name": "Visit"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Visitor",
                              "name": "Visitor"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Workflows",
                              "name": "Workflows"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Campaign",
                              "name": "XConnect - Campaign"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Campaign-Search-Queries",
                              "name": "XConnect - Campaign Search Queries"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Channel",
                              "name": "XConnect - Channel"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Channel-Conditions",
                              "name": "XConnect - Channel Conditions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Channel-Search-Queries",
                              "name": "XConnect - Channel Search Queries"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Contact",
                              "name": "XConnect - Contact"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Contact-Conditions",
                              "name": "XConnect - Contact Conditions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Contact-Consent",
                              "name": "XConnect - Contact Consent"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Contact-Consent-Conditions",
                              "name": "XConnect - Contact Consent Conditions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Contact-List-Subscriptions",
                              "name": "XConnect - Contact List Subscriptions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Contact-Personal-Details",
                              "name": "XConnect - Contact Personal Details"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Contact-Personal-Details-Conditions",
                              "name": "XConnect - Contact Personal Details Conditions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Date",
                              "name": "XConnect - Date"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Device",
                              "name": "XConnect - Device"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---E-mail",
                              "name": "XConnect - E-mail"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---E-mail-Automation",
                              "name": "XConnect - E-mail Automation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Engagement-Measures",
                              "name": "XConnect - Engagement Measures"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Engagement-Measures-Conditions",
                              "name": "XConnect - Engagement Measures Conditions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---GeoIP",
                              "name": "XConnect - GeoIP"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---GeoIP-Conditions",
                              "name": "XConnect - GeoIP Conditions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Marketing-Automation",
                              "name": "XConnect - Marketing Automation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Outcomes",
                              "name": "XConnect - Outcomes"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Outcomes-Search-Queries",
                              "name": "XConnect - Outcomes Search Queries"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Visit",
                              "name": "XConnect - Visit"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Visit-Conditions",
                              "name": "XConnect - Visit Conditions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/XConnect---Visit-Search-Queries",
                              "name": "XConnect - Visit Search Queries"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Elements/Xdb",
                              "name": "Xdb"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Inclusion-Operators",
                          "name": "Inclusion Operators",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Inclusion-Operators/exclude-both-values",
                              "name": "exclude both values"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Inclusion-Operators/include-both-values",
                              "name": "include both values"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Inclusion-Operators/include-lower-value",
                              "name": "include lower value"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Inclusion-Operators/include-upper-value",
                              "name": "include upper value"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/List-Operators",
                          "name": "List Operators",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/List-Operators/is-equal-to",
                              "name": "is equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/List-Operators/is-in-list",
                              "name": "is in list"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/List-Operators/is-not-equal-to",
                              "name": "is not equal to"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Macros",
                          "name": "Macros",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/AutomationActivity",
                              "name": "AutomationActivity"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Boost",
                              "name": "Boost"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/DateTime",
                              "name": "DateTime"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/InclusionOperator",
                              "name": "InclusionOperator"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Integer",
                              "name": "Integer"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/ListOperator",
                              "name": "ListOperator"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/MarketingPreferenceSubscription",
                              "name": "MarketingPreferenceSubscription"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Operator",
                              "name": "Operator"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/OrderByOperator",
                              "name": "OrderByOperator"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Pattern",
                              "name": "Pattern"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/PatternList",
                              "name": "PatternList"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/PositiveInteger",
                              "name": "PositiveInteger"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Profile",
                              "name": "Profile"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/ProfileKey",
                              "name": "ProfileKey"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Script",
                              "name": "Script"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/StringOperator",
                              "name": "StringOperator"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Template",
                              "name": "Template"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Tree",
                              "name": "Tree"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/Treelist",
                              "name": "Treelist"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/TreeOrList",
                              "name": "TreeOrList"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/UserRoles",
                              "name": "UserRoles"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Macros/ValidatorResult",
                              "name": "ValidatorResult"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Marketing-Preferences-Subscription-Operators",
                          "name": "Marketing Preferences Subscription Operators",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Marketing-Preferences-Subscription-Operators/has-not-subscribed-to",
                              "name": "has not subscribed to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Marketing-Preferences-Subscription-Operators/has-subscribed-to",
                              "name": "has subscribed to"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete",
                          "name": "Obsolete",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete/Common",
                              "name": "Common"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete/Content-Editor-Warnings",
                              "name": "Content Editor Warnings"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete/Indexing",
                              "name": "Indexing"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete/Insert-Options",
                              "name": "Insert Options"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete/Item-Deleted",
                              "name": "Item Deleted"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete/Item-Saved",
                              "name": "Item Saved"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete/Session-End",
                              "name": "Session End"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Obsolete/Version-Removed",
                              "name": "Version Removed"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Operators",
                          "name": "Operators",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Operators/is-equal-to",
                              "name": "is equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Operators/is-greater-than",
                              "name": "is greater than"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Operators/is-greater-than-or-equal-to",
                              "name": "is greater than or equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Operators/is-less-than",
                              "name": "is less than"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Operators/is-less-than-or-equal-to",
                              "name": "is less than or equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Operators/is-not-equal-to",
                              "name": "is not equal to"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Order-By-Operators",
                          "name": "Order By Operators",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Order-By-Operators/ascending",
                              "name": "ascending"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Order-By-Operators/descending",
                              "name": "descending"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators",
                          "name": "String Operators",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators/is-equal-to",
                              "name": "is equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators/is-case-insensitively-equal-to",
                              "name": "is case-insensitively equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators/is-not-equal-to",
                              "name": "is not equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators/is-not-case-insensitively-equal-to",
                              "name": "is not case-insensitively equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators/contains",
                              "name": "contains"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators/matches-the-regular-expression",
                              "name": "matches the regular expression"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators/ends-with",
                              "name": "ends with"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/String-Operators/starts-with",
                              "name": "starts with"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Predefined-Rules",
                              "name": "Predefined Rules"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Bucketing",
                              "name": "Bucketing"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Campaigns",
                              "name": "Campaigns"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Conditional-Renderings",
                              "name": "Conditional Renderings"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Content-Editor",
                              "name": "Content Editor"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Context",
                              "name": "Context"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Custom",
                              "name": "Custom"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Date",
                              "name": "Date"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Device",
                              "name": "Device"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Device-Detection",
                              "name": "Device Detection"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Email",
                              "name": "Email"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Federated-Experience-Manager---Domain-Matching",
                              "name": "Federated Experience Manager - Domain Matching"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Federated-Experience-Manager---Domain-Tracking",
                              "name": "Federated Experience Manager - Domain Tracking"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Federated-Experience-Manager---Page-Matching",
                              "name": "Federated Experience Manager - Page Matching"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Fields",
                              "name": "Fields"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/GeoIP",
                              "name": "GeoIP"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Indexing-and-Search",
                              "name": "Indexing and Search"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Insert-Options",
                              "name": "Insert Options"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Interaction-segmentation",
                              "name": "Interaction segmentation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Item-Attributes",
                              "name": "Item Attributes"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Item-Hierarchy",
                              "name": "Item Hierarchy"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Item-Information",
                              "name": "Item Information"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Item-Security",
                              "name": "Item Security"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Item-Version",
                              "name": "Item Version"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Item-Version-CM",
                              "name": "Item Version CM"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Marketing-Automation",
                              "name": "Marketing Automation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Path-Analyzer-Map-Groups",
                              "name": "Path Analyzer Map Groups"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Rule-visibility",
                              "name": "Rule visibility"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Script",
                              "name": "Script"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Search-Query-Builder",
                              "name": "Search Query Builder"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Security",
                              "name": "Security"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Security-Editor",
                              "name": "Security Editor"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Sitecore-Query",
                              "name": "Sitecore Query"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/System",
                              "name": "System"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Validation",
                              "name": "Validation"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Visit",
                              "name": "Visit"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Visitor",
                              "name": "Visitor"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/Workflows",
                              "name": "Workflows"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/XConnect---Condition",
                              "name": "XConnect - Condition"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/XConnect---E-mail",
                              "name": "XConnect - E-mail"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Tags/XConnect---Search-Query",
                              "name": "XConnect - Search Query"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/Validation-Results",
                          "name": "Validation Results",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Validation-Results/CriticalError",
                              "name": "CriticalError"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Validation-Results/Error",
                              "name": "Error"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Validation-Results/FatalError",
                              "name": "FatalError"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Validation-Results/Suggestion",
                              "name": "Suggestion"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Validation-Results/Valid",
                              "name": "Valid"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/Validation-Results/Warning",
                              "name": "Warning"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---DateTime-Values",
                          "name": "XConnect - DateTime Values",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---DateTime-Values/Time-Units",
                              "name": "Time Units"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---DateTime-Values/Months",
                              "name": "Months"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---DateTime-Values/Days",
                              "name": "Days"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---Numeric-Operators",
                          "name": "XConnect - Numeric Operators",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---Numeric-Operators/is-equal-to",
                              "name": "is equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---Numeric-Operators/is-not-equal-to",
                              "name": "is not equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---Numeric-Operators/is-greater-than",
                              "name": "is greater than"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---Numeric-Operators/is-greater-than-or-equal-to",
                              "name": "is greater than or equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---Numeric-Operators/is-less-than",
                              "name": "is less than"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---Numeric-Operators/is-less-than-or-equal-to",
                              "name": "is less than or equal to"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---String-Operators",
                          "name": "XConnect - String Operators",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---String-Operators/is-case-insensitive-and-equal-to",
                              "name": "is case insensitive and equal to"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Definitions/XConnect---String-Operators/is-case-insensitive-and-not-equal-to",
                              "name": "is case insensitive and not equal to"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Bucketing",
                      "name": "Bucketing",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Bucketing/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Bucketing/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Campaigns",
                      "name": "Campaigns",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Campaigns/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Campaigns/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Campaigns/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Conditional-Renderings",
                      "name": "Conditional Renderings",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Conditional-Renderings/Global-Rules",
                          "name": "Global Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Conditional-Renderings/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Conditional-Renderings/Tags/Default",
                              "name": "Default"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Conditional-Renderings/Tags/Device",
                              "name": "Device"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Content-Editor-Warnings",
                      "name": "Content Editor Warnings",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Content-Editor-Warnings/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Content-Editor-Warnings/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Content-Editor-Warnings/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Device-Detection",
                      "name": "Device Detection",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Device-Detection/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Device-Detection/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Device-Detection/Tags/Default",
                              "name": "Default"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Device-Detection/Tags/Device",
                              "name": "Device"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Experience-Analytics",
                      "name": "Experience Analytics",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Experience-Analytics/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Experience-Analytics/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Experience-Analytics/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Domain-Matching",
                      "name": "Federated Experience Manager - Domain Matching",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Domain-Matching/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Domain-Matching/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Domain-Matching/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Domain-Tracking",
                      "name": "Federated Experience Manager - Domain Tracking",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Domain-Tracking/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Domain-Tracking/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Domain-Tracking/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Page-Matching",
                      "name": "Federated Experience Manager - Page Matching",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Page-Matching/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Page-Matching/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Federated-Experience-Manager---Page-Matching/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Indexing-and-Search",
                      "name": "Indexing and Search",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Indexing-and-Search/Global-Rules",
                          "name": "Global Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Indexing-and-Search/Item-Rules",
                          "name": "Item Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Indexing-and-Search/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Indexing-and-Search/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Insert-Options",
                      "name": "Insert Options",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules",
                          "name": "Rules",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Analytics-Campaigns",
                              "name": "Analytics Campaigns"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Bucket",
                              "name": "Bucket"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Conditional-Renderings",
                              "name": "Conditional Renderings"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Conditional-Renderings-Actions",
                              "name": "Conditional Renderings Actions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Conditional-Renderings-Conditions",
                              "name": "Conditional Renderings Conditions"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Facets",
                              "name": "Facets"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Funnels",
                              "name": "Funnels"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Goals",
                              "name": "Goals"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/JavaScript-Layouts",
                              "name": "JavaScript Layouts"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/MVC-Controllers",
                              "name": "MVC Controllers"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/MVC-Layouts",
                              "name": "MVC Layouts"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/MVC-Models",
                              "name": "MVC Models"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/MVC-Renderings",
                              "name": "MVC Renderings"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Outcomes",
                              "name": "Outcomes"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Page-Events",
                              "name": "Page Events"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Page-Level-Test-Definition",
                              "name": "Page Level Test Definition"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Pattern-Folder-Insert-Option",
                              "name": "Pattern Folder Insert Option"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Persona",
                              "name": "Persona"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Profile-Cards",
                              "name": "Profile Cards"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Profiles",
                              "name": "Profiles"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Rules-Categories",
                              "name": "Rules Categories"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Rules/Simulator-Insert-Option",
                              "name": "Simulator Insert Option"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Insert-Options/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Insert-Options/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Item-Deleted",
                      "name": "Item Deleted",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Item-Deleted/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Item-Deleted/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Item-Deleted/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Item-Saved",
                      "name": "Item Saved",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Item-Saved/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Item-Saved/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Item-Saved/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Marketing-Workflows",
                      "name": "Marketing Workflows",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Marketing-Workflows/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Marketing-Workflows/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Marketing-Workflows/Tags/Default",
                              "name": "Default"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Marketing-Workflows/Tags/Device",
                              "name": "Device"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Page-Events",
                      "name": "Page Events",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Page-Events/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Page-Events/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Page-Events/Tags/Default",
                              "name": "Default"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Page-Events/Tags/Device",
                              "name": "Device"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Path-Analyzer-Map-Groups",
                      "name": "Path Analyzer Map Groups",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Path-Analyzer-Map-Groups/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Path-Analyzer-Map-Groups/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Path-Analyzer-Map-Groups/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Path-Analyzer-Maps",
                      "name": "Path Analyzer Maps",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Path-Analyzer-Maps/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Path-Analyzer-Maps/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Path-Analyzer-Maps/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Rule-Elements-Visibility",
                      "name": "Rule Elements Visibility",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Rule-Elements-Visibility/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Rule-Elements-Visibility/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Rule-Elements-Visibility/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Search-Query-Builder",
                      "name": "Search Query Builder",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Search-Query-Builder/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Search-Query-Builder/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Search-Query-Builder/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Testing",
                      "name": "Testing",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Testing/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Testing/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Testing/Tags/Default",
                              "name": "Default"
                            },
                            {
                              "url": "/sitecore/system/Settings/Rules/Testing/Tags/Tags-Definition",
                              "name": "Tags Definition"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Validation-Rules",
                      "name": "Validation Rules",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Validation-Rules/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Validation-Rules/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Validation-Rules/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/Version-Removed",
                      "name": "Version Removed",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/Version-Removed/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/Version-Removed/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/Version-Removed/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/XConnect---Conditions",
                      "name": "XConnect - Conditions",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/XConnect---Conditions/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/XConnect---Conditions/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/XConnect---Conditions/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Rules/XConnect---Search-Queries",
                      "name": "XConnect - Search Queries",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Rules/XConnect---Search-Queries/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Rules/XConnect---Search-Queries/Tags",
                          "name": "Tags",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Rules/XConnect---Search-Queries/Tags/Default",
                              "name": "Default"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Security",
                  "name": "Security",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Security/Presets",
                      "name": "Presets",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Security/Presets/Remove-Inherit",
                          "name": "Remove Inherit",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Security/Presets/Require-Login",
                          "name": "Require Login",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Security/Presets/JSS-Import---No-overwrite",
                          "name": "JSS Import - No overwrite",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Security/Presets/JSS-Import---No-new-children",
                          "name": "JSS Import - No new children",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Services",
                  "name": "Services",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Services/API-Keys",
                      "name": "API Keys",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Services/API-Keys/JSS",
                          "name": "JSS",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Services/Throttle-Strategies",
                      "name": "Throttle Strategies",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Simulators",
                  "name": "Simulators",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Simulators/Scale-Values",
                      "name": "Scale Values",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Simulators/Scale-Values/50",
                          "name": "50",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Simulators/Scale-Values/75",
                          "name": "75",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Simulators/Scale-Values/100",
                          "name": "100",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Subitems-Sorting",
                  "name": "Subitems Sorting",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Subitems-Sorting/Created",
                      "name": "Created",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Subitems-Sorting/Default",
                      "name": "Default",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Subitems-Sorting/Display-name",
                      "name": "Display name",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Subitems-Sorting/Logical",
                      "name": "Logical",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Subitems-Sorting/Reverse",
                      "name": "Reverse",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Subitems-Sorting/Updated",
                      "name": "Updated",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Validation-Rules",
                  "name": "Validation Rules",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules",
                      "name": "Field Rules",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Required",
                          "name": "Required",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Common",
                          "name": "Common",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Common/Is-Email",
                              "name": "Is Email"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Common/Is-Integer",
                              "name": "Is Integer"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Common/Is-Percentage",
                              "name": "Is Percentage"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Common/Is-Xhtml",
                              "name": "Is Xhtml"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Common/Spellcheck",
                              "name": "Spellcheck"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Email",
                          "name": "Email",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Email/Is-Valid-Email",
                              "name": "Is Valid Email"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Email/Is-Valid-Url",
                              "name": "Is Valid Url"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/External",
                          "name": "External",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/External/W3C-XHtml-Validation",
                              "name": "W3C XHtml Validation"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Path-Analyzer",
                          "name": "Path Analyzer",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Path-Analyzer/Referenced-Item-Is-Invalid",
                              "name": "Referenced Item Is Invalid"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Sample",
                          "name": "Sample",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Sample/Max-Length-40",
                              "name": "Max Length 40"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Sample/Minimum-Length-8",
                              "name": "Minimum Length 8"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Sample/Rating-1-to-9",
                              "name": "Rating 1 to 9"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Sample/US-Social-Security-Number",
                              "name": "US Social Security Number"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System",
                          "name": "System",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Alt-Required",
                              "name": "Alt Required"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Broken-Links",
                              "name": "Broken Links"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Circular-Dependency-Validator",
                              "name": "Circular Dependency Validator"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Database-Name",
                              "name": "Database Name"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Extension-May-Not-Start-with-a-Dot",
                              "name": "Extension May Not Start with a Dot"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Extern-Link-Target",
                              "name": "Extern Link Target"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/File-Exists",
                              "name": "File Exists"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/GUID",
                              "name": "GUID"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Image-Has-Alt-Text",
                              "name": "Image Has Alt Text"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Image-Has-Alt-Text-from-Media-Library",
                              "name": "Image Has Alt Text from Media Library"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Image-Size",
                              "name": "Image Size"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Is-Xml",
                              "name": "Is Xml"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Linked-Item-Has-Allowed-Template",
                              "name": "Linked Item Has Allowed Template"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Parameters-String",
                              "name": "Parameters String"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Reset-To-Standard-Value",
                              "name": "Reset To Standard Value"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Rich-Text-Image-Size",
                              "name": "Rich Text Image Size"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Rule-Elements-Type-Field-Validator",
                              "name": "Rule Elements Type Field Validator"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Sitecore-Command",
                              "name": "Sitecore Command"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Source",
                              "name": "Source"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Source-Item",
                              "name": "Source Item"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Type-and-Assembly",
                              "name": "Type and Assembly"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/System/Unique-Placeholder-Key",
                              "name": "Unique Placeholder Key"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Text",
                          "name": "Text",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Text/Must-be-Lower-Case",
                              "name": "Must be Lower Case"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Text/Must-be-Upper-Case",
                              "name": "Must be Upper Case"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Text/No-Spaces",
                              "name": "No Spaces"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Text/No-Tags",
                              "name": "No Tags"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Text/Start-with-a-Capital-Letter-and-End-with-a-Dot",
                              "name": "Start with a Capital Letter and End with a Dot"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Rules/Valid-Bucket-Query",
                          "name": "Valid Bucket Query",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Validation-Rules/Field-Types",
                      "name": "Field Types",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Checklist",
                          "name": "Checklist",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/DropLink",
                          "name": "DropLink",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Droplist",
                          "name": "Droplist",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Droptree",
                          "name": "Droptree",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/General-Link",
                          "name": "General Link",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Grouped-Droplink",
                          "name": "Grouped Droplink",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Grouped-Droplist",
                          "name": "Grouped Droplist",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Image",
                          "name": "Image",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/link",
                          "name": "link",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Multilist",
                          "name": "Multilist",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Rich-Text",
                          "name": "Rich Text",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/Rules",
                          "name": "Rules",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/TreeList",
                          "name": "TreeList",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/TreeListEx",
                          "name": "TreeListEx",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Field-Types/server-file",
                          "name": "server file",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Settings/Validation-Rules/Global-Rules",
                      "name": "Global Rules",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules",
                      "name": "Item Rules",
                      "children": [
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Development",
                          "name": "Development",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Development/Not-Serialized",
                              "name": "Not Serialized"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Devices",
                          "name": "Devices",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Devices/Only-One-Device-Can-Be-Default",
                              "name": "Only One Device Can Be Default"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Insert-Options",
                          "name": "Insert Options",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Insert-Options/Item-Has-Subitems-that-Are-Not-In-Insert-Options",
                              "name": "Item Has Subitems that Are Not In Insert Options"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item",
                          "name": "Item",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item/Duplicate-Name",
                              "name": "Duplicate Name"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item/Duplicate-Sort-Order",
                              "name": "Duplicate Sort Order"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item/Full-Page-XHtml",
                              "name": "Full Page XHtml"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item/Name-Encoded-Characters",
                              "name": "Name Encoded Characters"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item/Publish-Unpublish-Date-Range",
                              "name": "Publish Unpublish Date Range"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item/Reminder-is-after-Archive-Date",
                              "name": "Reminder is after Archive Date"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item/Url-Characters",
                              "name": "Url Characters"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Item/Valid-From-Valid-To-Date-Range",
                              "name": "Valid From Valid To Date Range"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Links",
                          "name": "Links",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Links/Broken-Links",
                              "name": "Broken Links"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Links/Item-is-not-referenced",
                              "name": "Item is not referenced"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Media",
                          "name": "Media",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Media/Media-Size-Too-Big",
                              "name": "Media Size Too Big"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Path-Analyzer",
                          "name": "Path Analyzer",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Path-Analyzer/Duplicate-Map",
                              "name": "Duplicate Map"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Rules",
                          "name": "Rules",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Rules/Validation-Rules",
                              "name": "Validation Rules"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Security",
                          "name": "Security",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Security/Locked-By-Non-Existing-User",
                              "name": "Locked By Non Existing User"
                            },
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Security/Owned-By-Non-Existing-User",
                              "name": "Owned By Non Existing User"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Standard-Values",
                          "name": "Standard Values",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Standard-Values/Has-Name-Macro",
                              "name": "Has Name Macro"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Workflow",
                          "name": "Workflow",
                          "children": [
                            {
                              "url": "/sitecore/system/Settings/Validation-Rules/Item-Rules/Workflow/Workflow-has-final-state",
                              "name": "Workflow has final state"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Settings/Workflow",
                  "name": "Workflow",
                  "children": [
                    {
                      "url": "/sitecore/system/Settings/Workflow/Check-in",
                      "name": "Check in",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/system/Tasks",
              "name": "Tasks",
              "children": [
                {
                  "url": "/sitecore/system/Tasks/Commands",
                  "name": "Commands",
                  "children": [
                    {
                      "url": "/sitecore/system/Tasks/Commands/Content-Testing",
                      "name": "Content Testing",
                      "children": [
                        {
                          "url": "/sitecore/system/Tasks/Commands/Content-Testing/Calculate-Statistical-Relevancy",
                          "name": "Calculate Statistical Relevancy",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Content-Testing/Rebuild-Suggested-Tests-Index",
                          "name": "Rebuild Suggested Tests Index",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Content-Testing/Suspend-Corrupted-Tests",
                          "name": "Suspend Corrupted Tests",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Content-Testing/Try-Finish-Test",
                          "name": "Try Finish Test",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Tasks/Commands/Email-Campaign",
                      "name": "Email Campaign",
                      "children": [
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Activate-Automated-Message",
                          "name": "Activate Automated Message",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Deactivate-Automated-Message",
                          "name": "Deactivate Automated Message",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Message-Statistics-Missing",
                          "name": "Message Statistics Missing",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Message-Statistics-Older",
                          "name": "Message Statistics Older",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Message-Statistics-Recent",
                          "name": "Message Statistics Recent",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Message-Statistics-Today",
                          "name": "Message Statistics Today",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Reset-Failed-Automated-Messages",
                          "name": "Reset Failed Automated Messages",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Select-Winner",
                          "name": "Select Winner",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Commands/Email-Campaign/Send-Scheduled",
                          "name": "Send Scheduled",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Tasks/Schedules",
                  "name": "Schedules",
                  "children": [
                    {
                      "url": "/sitecore/system/Tasks/Schedules/__Task-Schedule",
                      "name": "__Task Schedule",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Tasks/Schedules/Content-Testing",
                      "name": "Content Testing",
                      "children": [
                        {
                          "url": "/sitecore/system/Tasks/Schedules/Content-Testing/Calculate-Statistical-Relevancy",
                          "name": "Calculate Statistical Relevancy",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Schedules/Content-Testing/Rebuild-Suggested-Tests-Index",
                          "name": "Rebuild Suggested Tests Index",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Schedules/Content-Testing/Suspend-Corrupted-Tests",
                          "name": "Suspend Corrupted Tests",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Tasks/Schedules/Content-Testing/Try-Finish-Test",
                          "name": "Try Finish Test",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/system/Toolbox",
              "name": "Toolbox",
              "children": [
                {
                  "url": "/sitecore/system/Toolbox/Common",
                  "name": "Common",
                  "children": [
                    {
                      "url": "/sitecore/system/Toolbox/Common/Placeholder",
                      "name": "Placeholder",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Toolbox/Renderings",
                  "name": "Renderings",
                  "children": [
                    {
                      "url": "/sitecore/system/Toolbox/Renderings/Renderings",
                      "name": "Renderings",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Toolbox/Sublayouts",
                  "name": "Sublayouts",
                  "children": [
                    {
                      "url": "/sitecore/system/Toolbox/Sublayouts/Sublayouts",
                      "name": "Sublayouts",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/system/Workflows",
              "name": "Workflows",
              "children": [
                {
                  "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow",
                  "name": "Analytics Testing Workflow",
                  "children": [
                    {
                      "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Draft",
                      "name": "Draft",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Draft/Deploy",
                          "name": "Deploy",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Draft/Deploy/Start-Test",
                              "name": "Start Test"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Deployed",
                      "name": "Deployed",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Deployed/Auto-Publish",
                          "name": "Auto Publish",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Deployed/End-Test",
                          "name": "End Test",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Deployed/End-Test/End-Test",
                              "name": "End Test"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Deployed/Suspend-Test",
                          "name": "Suspend Test",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Deployed/Suspend-Test/End-Test",
                              "name": "End Test"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Deployed/Cancel-Test",
                          "name": "Cancel Test",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Deployed/Cancel-Test/End-Test",
                              "name": "End Test"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Completed",
                      "name": "Completed",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Completed/Auto-Publish",
                          "name": "Auto Publish",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Cancelled",
                      "name": "Cancelled",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Cancelled/Auto-Publish",
                          "name": "Auto Publish",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Suspended",
                      "name": "Suspended",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Suspended/Auto-Publish",
                          "name": "Auto Publish",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Suspended/Deploy",
                          "name": "Deploy",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Analytics-Testing-Workflow/Suspended/Deploy/Start-Test",
                              "name": "Start Test"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Workflows/Analytics-Workflow",
                  "name": "Analytics Workflow",
                  "children": [
                    {
                      "url": "/sitecore/system/Workflows/Analytics-Workflow/Draft",
                      "name": "Draft",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Analytics-Workflow/Draft/Deploy",
                          "name": "Deploy",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Analytics-Workflow/Deployed",
                      "name": "Deployed",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Workflows/JSS-Development-Workflow",
                  "name": "JSS Development Workflow",
                  "children": [
                    {
                      "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Development-Mode",
                      "name": "Development Mode",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Development-Mode/To-Content-Mode",
                          "name": "To Content Mode",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Development-Mode/__OnSave",
                          "name": "__OnSave",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Content-Mode",
                      "name": "Content Mode",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Content-Mode/Allow-Developer-Overwrite",
                          "name": "Allow Developer Overwrite",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Content-Mode/Allow-Developer-Overwrite/Confirmation",
                              "name": "Confirmation"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Content-Mode/Publish",
                          "name": "Publish",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Content-Mode/Publish/Validation-Action",
                              "name": "Validation Action"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Content-Mode/Publish-with-Test",
                          "name": "Publish with Test",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Content-Mode/Publish-with-Test/Validation-Action",
                              "name": "Validation Action"
                            },
                            {
                              "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Content-Mode/Publish-with-Test/Launch-Create-Test-Dialog",
                              "name": "Launch Create Test Dialog"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/JSS-Development-Workflow/Published",
                      "name": "Published",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Workflows/Path-Analyzer-Maps",
                  "name": "Path Analyzer Maps",
                  "children": [
                    {
                      "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Initializing",
                      "name": "Initializing",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Initializing/Ensure-Proper-Workflow-State",
                          "name": "Ensure Proper Workflow State",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Initializing/Deploy",
                          "name": "Deploy",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Initializing/Deploy/Validate-Map",
                              "name": "Validate Map"
                            },
                            {
                              "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Initializing/Deploy/Deploy-Map",
                              "name": "Deploy Map"
                            },
                            {
                              "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Initializing/Deploy/Secure-Map",
                              "name": "Secure Map"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Deployed",
                      "name": "Deployed",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Deployed/Re-deploy",
                          "name": "Re-deploy",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Deployed/Re-deploy/Validate-Map",
                              "name": "Validate Map"
                            },
                            {
                              "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Deployed/Re-deploy/Secure-Map",
                              "name": "Secure Map"
                            },
                            {
                              "url": "/sitecore/system/Workflows/Path-Analyzer-Maps/Deployed/Re-deploy/Deploy-Map",
                              "name": "Deploy Map"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Workflows/Sample-Workflow",
                  "name": "Sample Workflow",
                  "children": [
                    {
                      "url": "/sitecore/system/Workflows/Sample-Workflow/Draft",
                      "name": "Draft",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Sample-Workflow/Draft/Submit",
                          "name": "Submit",
                          "children": []
                        },
                        {
                          "url": "/sitecore/system/Workflows/Sample-Workflow/Draft/__OnSave",
                          "name": "__OnSave",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Sample-Workflow/Draft/__OnSave/Auto-Submit-Action",
                              "name": "Auto Submit Action"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Sample-Workflow/Awaiting-Approval",
                      "name": "Awaiting Approval",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Sample-Workflow/Awaiting-Approval/Approve-with-Test",
                          "name": "Approve with Test",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Sample-Workflow/Awaiting-Approval/Approve-with-Test/Validation-Action",
                              "name": "Validation Action"
                            },
                            {
                              "url": "/sitecore/system/Workflows/Sample-Workflow/Awaiting-Approval/Approve-with-Test/Launch-Create-Test-Dialog",
                              "name": "Launch Create Test Dialog"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Workflows/Sample-Workflow/Awaiting-Approval/Approve",
                          "name": "Approve",
                          "children": [
                            {
                              "url": "/sitecore/system/Workflows/Sample-Workflow/Awaiting-Approval/Approve/Validation-Action",
                              "name": "Validation Action"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/system/Workflows/Sample-Workflow/Awaiting-Approval/Reject",
                          "name": "Reject",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Sample-Workflow/Approved",
                      "name": "Approved",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Sample-Workflow/Approved/Auto-Publish",
                          "name": "Auto Publish",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/system/Workflows/Segment",
                  "name": "Segment",
                  "children": [
                    {
                      "url": "/sitecore/system/Workflows/Segment/Inactive",
                      "name": "Inactive",
                      "children": []
                    },
                    {
                      "url": "/sitecore/system/Workflows/Segment/Initializing",
                      "name": "Initializing",
                      "children": [
                        {
                          "url": "/sitecore/system/Workflows/Segment/Initializing/Deploy",
                          "name": "Deploy",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/system/Workflows/Segment/Deployed",
                      "name": "Deployed",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "url": "/sitecore/templates",
          "name": "templates",
          "children": [
            {
              "url": "/sitecore/templates/Branches",
              "name": "Branches",
              "children": [
                {
                  "url": "/sitecore/templates/Branches/Foundation",
                  "name": "Foundation",
                  "children": []
                },
                {
                  "url": "/sitecore/templates/Branches/Feature",
                  "name": "Feature",
                  "children": []
                },
                {
                  "url": "/sitecore/templates/Branches/Project",
                  "name": "Project",
                  "children": []
                },
                {
                  "url": "/sitecore/templates/Branches/System",
                  "name": "System",
                  "children": [
                    {
                      "url": "/sitecore/templates/Branches/System/Analytics",
                      "name": "Analytics",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Analytics/Marketing-Automation",
                          "name": "Marketing Automation",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Analytics/Marketing-Automation/Activity-Type",
                              "name": "Activity Type"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Analytics/Profile",
                          "name": "Profile",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Analytics/Profile/$name",
                              "name": "$name"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Branches/System/Branch",
                      "name": "Branch",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Branch/Command-Template",
                          "name": "Command Template",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Branch/Command-Template/$name",
                              "name": "$name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Branch/New-Branch",
                          "name": "New Branch",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Branch/New-Branch/$name",
                              "name": "$name"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Branches/System/Email",
                      "name": "Email",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Email/Messages",
                          "name": "Messages",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Email/Messages/Pre-existing-Page",
                              "name": "Pre-existing Page"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Email/Messages/One-Column-Message",
                              "name": "One-Column Message"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Email/Messages/Two-Column-Message",
                              "name": "Two-Column Message"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Email/Activate-Automated-Task",
                          "name": "Activate Automated Task",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Email/Activate-Automated-Task/$name",
                              "name": "$name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Email/Deactivate-Automated-Task",
                          "name": "Deactivate Automated Task",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Email/Deactivate-Automated-Task/$name",
                              "name": "$name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Email/SelectWinnerTask",
                          "name": "SelectWinnerTask",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Email/SelectWinnerTask/$name",
                              "name": "$name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Email/SendMessageTask",
                          "name": "SendMessageTask",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Email/SendMessageTask/$name",
                              "name": "$name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Email/Manager-Root",
                          "name": "Manager Root",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Email/Manager-Root/$name",
                              "name": "$name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Email/Sample-Newsletter",
                          "name": "Sample Newsletter",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Email/Sample-Newsletter/Sample-Newsletter",
                              "name": "Sample Newsletter"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Email/Sample-Newsletter/Section-Folder",
                              "name": "Section Folder"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Branches/System/Globalization",
                      "name": "Globalization",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Globalization/Language",
                          "name": "Language",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Branches/System/Layouts",
                      "name": "Layouts",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Layouts/Layout",
                          "name": "Layout",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/Layout/Layout",
                              "name": "Layout"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Layouts/MVC-Layout",
                          "name": "MVC Layout",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/MVC-Layout/MVC-Layout",
                              "name": "MVC Layout"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Layouts/Renderings",
                          "name": "Renderings",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/Renderings/Sublayout",
                              "name": "Sublayout"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/Renderings/__Method-Rendering",
                              "name": "__Method Rendering"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/Renderings/__Sublayout",
                              "name": "__Sublayout"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/Renderings/__Url-Rendering",
                              "name": "__Url Rendering"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/Renderings/__Webcontrol",
                              "name": "__Webcontrol"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/Renderings/__Xsl-file",
                              "name": "__Xsl file"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/Renderings/__Xsl-Rendering",
                              "name": "__Xsl Rendering"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Layouts/__Device",
                          "name": "__Device",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/__Device/__Device",
                              "name": "__Device"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Layouts/__Layout",
                          "name": "__Layout",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/__Layout/__Layout",
                              "name": "__Layout"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Layouts/__Layout-Preset",
                          "name": "__Layout Preset",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/__Layout-Preset/$name",
                              "name": "$name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Layouts/__Xml-layout",
                          "name": "__Xml layout",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Layouts/__Xml-layout/__Xml-layout",
                              "name": "__Xml layout"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Branches/System/Media",
                      "name": "Media",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Media/Upload-File",
                          "name": "Upload File",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/Branches/System/Media/Upload-Files---Advanced",
                          "name": "Upload Files - Advanced",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Branches/System/Path-Analyzer",
                      "name": "Path Analyzer",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Path-Analyzer/Site-map-group",
                          "name": "Site map group",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Path-Analyzer/Site-map-group/$name",
                              "name": "$name"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Branches/System/Rules",
                      "name": "Rules",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Rules/Taxonomy",
                          "name": "Taxonomy",
                          "children": [
                            {
                              "url": "/sitecore/templates/Branches/System/Rules/Taxonomy/Element-Folder",
                              "name": "Element Folder"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Rules/Taxonomy/Rules-Context-Folder",
                              "name": "Rules Context Folder"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Rules/Taxonomy/Tag",
                              "name": "Tag"
                            },
                            {
                              "url": "/sitecore/templates/Branches/System/Rules/Taxonomy/Tags",
                              "name": "Tags"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Branches/System/Templates",
                      "name": "Templates",
                      "children": [
                        {
                          "url": "/sitecore/templates/Branches/System/Templates/New-Template",
                          "name": "New Template",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/Branches/User-Defined",
                  "name": "User Defined",
                  "children": []
                }
              ]
            },
            {
              "url": "/sitecore/templates/Common",
              "name": "Common",
              "children": [
                {
                  "url": "/sitecore/templates/Common/Folder",
                  "name": "Folder",
                  "children": [
                    {
                      "url": "/sitecore/templates/Common/Folder/__Standard-Values",
                      "name": "__Standard Values",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/templates/List-Manager",
              "name": "List Manager",
              "children": [
                {
                  "url": "/sitecore/templates/List-Manager/ListOperation",
                  "name": "ListOperation",
                  "children": [
                    {
                      "url": "/sitecore/templates/List-Manager/ListOperation/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/List-Manager/ListOperation/Data/ListId",
                          "name": "ListId",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/List-Manager/ListOperation/Data/Type",
                          "name": "Type",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/List-Manager/ListOperation/Data/Status",
                          "name": "Status",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/List-Manager/ListOperation/Data/SyncToken",
                          "name": "SyncToken",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/List-Manager/ListOperation/Data/ProcessedCount",
                          "name": "ProcessedCount",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/List-Manager/ListOperation/Data/TotalCount",
                          "name": "TotalCount",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/templates/System",
              "name": "System",
              "children": [
                {
                  "url": "/sitecore/templates/System/Alias",
                  "name": "Alias",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Alias/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Alias/Data/Linked-item",
                          "name": "Linked item",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Analytics",
                  "name": "Analytics",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy",
                      "name": "Marketing Taxonomy",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Campaign-group",
                          "name": "Campaign group",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Campaign-group/Campaign-group-taxonomy",
                              "name": "Campaign group taxonomy"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Campaign-group/Campaign-group",
                              "name": "Campaign group"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Marketing-category",
                          "name": "Marketing category",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Marketing-category/Marketing-category-taxonomy",
                              "name": "Marketing category taxonomy"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Marketing-category/Marketing-category-group",
                              "name": "Marketing category group"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Marketing-category/Marketing-category",
                              "name": "Marketing category"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Outcome",
                          "name": "Outcome",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Outcome/Outcome-group",
                              "name": "Outcome group"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Outcome/Outcome-group-taxonomy",
                              "name": "Outcome group taxonomy"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Venue",
                          "name": "Venue",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Venue/Venue",
                              "name": "Venue"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Venue/Venue-group",
                              "name": "Venue group"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Venue/Venue-taxonomy",
                              "name": "Venue taxonomy"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Venue/Venue-type",
                              "name": "Venue type"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Channel",
                          "name": "Channel",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Channel/Channel-taxonomy",
                              "name": "Channel taxonomy"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Channel/Channel-type",
                              "name": "Channel type"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Channel/Channel-group",
                              "name": "Channel group"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Channel/Channel",
                              "name": "Channel"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Asset",
                          "name": "Asset",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Asset/Asset-taxonomy",
                              "name": "Asset taxonomy"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Asset/Asset-group",
                              "name": "Asset group"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Asset/Asset",
                              "name": "Asset"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Custom",
                          "name": "Custom",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Custom/Custom-group",
                              "name": "Custom group"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Custom/Custom-Taxon",
                              "name": "Custom Taxon"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Custom/Custom-taxonomy",
                              "name": "Custom taxonomy"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Base",
                          "name": "Base",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Base/Classification",
                              "name": "Classification"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Base/Taxonomy",
                              "name": "Taxonomy"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Taxonomy/Base/Taxonomy-tag-definition",
                              "name": "Taxonomy tag definition"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Campaign",
                      "name": "Campaign",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Campaign/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Data/Title",
                              "name": "Title"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Data/Campaign-Link",
                              "name": "Campaign Link"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Data/Enroll-in-Engagement-Plan",
                              "name": "Enroll in Engagement Plan"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Data/Description",
                              "name": "Description"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Campaign/Traffic-Type",
                          "name": "Traffic Type",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Traffic-Type/Select-Traffic-Type",
                              "name": "Select Traffic Type"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Campaign/Duration",
                          "name": "Duration",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Duration/StartDate",
                              "name": "StartDate"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Duration/EndDate",
                              "name": "EndDate"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Campaign/Cost",
                          "name": "Cost",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Cost/Cost",
                              "name": "Cost"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Cost/Cost-Base",
                              "name": "Cost Base"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Cost/Cost-per-Click",
                              "name": "Cost per Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Cost/Cost-per-Day",
                              "name": "Cost per Day"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Campaign/Options",
                          "name": "Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Options/Hidden",
                              "name": "Hidden"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Campaign/Options/Data",
                              "name": "Data"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Campaign/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Campaign-Category",
                      "name": "Campaign Category",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Campaign-Category/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Contact-List",
                      "name": "Contact List",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Contact-List/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Contact-List/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Contact-List/Data/Owner",
                              "name": "Owner"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Contact-List/Data/OperationIds",
                              "name": "OperationIds"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Contact-List/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Contact-List/ListSource",
                          "name": "ListSource",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Contact-List/ListSource/IncludedLists",
                              "name": "IncludedLists"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Contact-List/ListSource/ExcludedLists",
                              "name": "ExcludedLists"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Contact-List/ListSource/SegmentDefinitionIds",
                              "name": "SegmentDefinitionIds"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Contact-List/ListSource/SubscriptionDefinitionIds",
                              "name": "SubscriptionDefinitionIds"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Country",
                      "name": "Country",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Country/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Country/Data/Country-Code",
                              "name": "Country Code"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Event",
                      "name": "Event",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Event/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Event/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Event/Data/Points",
                              "name": "Points"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Event/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Event/Data/Image",
                              "name": "Image"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Event/Data/IsLiveEvent",
                              "name": "IsLiveEvent"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Event/Data/IsSystem",
                              "name": "IsSystem"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Event/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Event/Experience-Profile-Options",
                          "name": "Experience Profile Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Event/Experience-Profile-Options/Show-in-Xfile-as-Latest-Event",
                              "name": "Show in Xfile as Latest Event"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Event/Experience-Profile-Options/Show-in-Xfile-events-list",
                              "name": "Show in Xfile events list"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager",
                      "name": "Federated Experience Manager",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Domain-Matcher",
                          "name": "Domain Matcher",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Domain-Matcher/Configuration",
                              "name": "Configuration"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Domain-Matcher/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Filters-and-Actions",
                          "name": "Filters and Actions",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Filters-and-Actions/Client-Action",
                              "name": "Client Action"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Filters-and-Actions/Client-Actions",
                              "name": "Client Actions"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Filters-and-Actions/Element-Placeholder",
                              "name": "Element Placeholder"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Filters-and-Actions/OutcomesStorage",
                              "name": "OutcomesStorage"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Filters-and-Actions/Page-Filter",
                              "name": "Page Filter"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Federated-Experience-Manager/Filters-and-Actions/Placeholder-Positions",
                              "name": "Placeholder Positions"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Filter",
                      "name": "Filter",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Filter/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Funnel",
                      "name": "Funnel",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Funnel/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Funnel/Data/Title",
                              "name": "Title"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Funnel/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Funnel/Data/Sequence",
                              "name": "Sequence"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Funnel/Data/Image",
                              "name": "Image"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Funnel/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Goal",
                      "name": "Goal",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Goal/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Goal-Category",
                      "name": "Goal Category",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Goal-Category/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Marketing-Automation",
                      "name": "Marketing Automation",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Activity-Type",
                          "name": "Activity Type",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Activity-Type/Activity-Parameter",
                              "name": "Activity Parameter"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Activity-Type/Activity-Parameter-Folder",
                              "name": "Activity Parameter Folder"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Activity-Type/Activity-Path",
                              "name": "Activity Path"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Activity-Type/Activity-Path-Folder",
                              "name": "Activity Path Folder"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Activity-Type/Activity-Type",
                              "name": "Activity Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Activity-Type/Activity-Type-Folder",
                              "name": "Activity Type Folder"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Activity-Type/Taxonomy",
                              "name": "Taxonomy"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Editor-Type",
                          "name": "Editor Type",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Editor-Type/Editor-Type",
                              "name": "Editor Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Automation/Editor-Type/Editor-Type-Folder",
                              "name": "Editor Type Folder"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Marketing-Definition",
                      "name": "Marketing Definition",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Definition/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Definition/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Definition/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Definition/Data/Image",
                              "name": "Image"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Definition/Extension",
                          "name": "Extension",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Definition/Extension/Custom-Values",
                              "name": "Custom Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Marketing-Theme",
                      "name": "Marketing Theme",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Theme/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Marketing-Theme/Data/Name",
                              "name": "Name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Marketing-Theme/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Organic-Branded-Keywords",
                      "name": "Organic Branded Keywords",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Organic-Branded-Keywords/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Organic-Branded-Keywords/Data/Keywords",
                              "name": "Keywords"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Outcome",
                      "name": "Outcome",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Outcome/Outcome-Definition",
                          "name": "Outcome Definition",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Outcome/Outcome-Definition/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Outcome/Outcome-Definition/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Outcome/Outcome-Type",
                          "name": "Outcome Type",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Outcome/Outcome-Type/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Outcome/Outcome-Type/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Page-Event",
                      "name": "Page Event",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Page-Event/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Page-Event/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Page-Event/Data/Category",
                              "name": "Category"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Page-Event/Options",
                          "name": "Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Page-Event/Options/IsAuthorFeedback",
                              "name": "IsAuthorFeedback"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Page-Event/Options/IsFailure",
                              "name": "IsFailure"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Page-Event/Options/IsGoal",
                              "name": "IsGoal"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Page-Event/Rules",
                          "name": "Rules",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Page-Event/Rules/Rule",
                              "name": "Rule"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Page-Event-Category",
                      "name": "Page Event Category",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Page-Event-Category/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Patterns",
                      "name": "Patterns",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Patterns/Pattern-Card",
                          "name": "Pattern Card",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Patterns/Pattern-Card/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Patterns/Pattern-Card/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Patterns/Pattern-Cards",
                          "name": "Pattern Cards",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Patterns/Pattern-Cards/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Patterns/Pattern-Cards/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Plan-Definition",
                      "name": "Plan Definition",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Plan-Definition/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Plan-Definition/Data/Start-Date",
                              "name": "Start Date"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Plan-Definition/Data/End-Date",
                              "name": "End Date"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Plan-Definition/Data/Plan-Data",
                              "name": "Plan Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Plan-Definition/Data/Marketing-Theme",
                              "name": "Marketing Theme"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Plan-Definition/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Predefined-Filter-Value",
                      "name": "Predefined Filter Value",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Predefined-Filter-Value/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Predefined-Filter-Value/Data/Value",
                              "name": "Value"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Predefined-Filter-Value/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Profile",
                      "name": "Profile",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile/Data/Decay",
                              "name": "Decay"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile/Data/Image",
                              "name": "Image"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Profile-Card",
                      "name": "Profile Card",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Card/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Data/Details",
                              "name": "Details"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Data/Image",
                              "name": "Image"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Data/Profile-Card-Value",
                              "name": "Profile Card Value"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Card/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information",
                          "name": "Persona Information",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Age",
                              "name": "Age"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/DayOfMyLife",
                              "name": "DayOfMyLife"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Education",
                              "name": "Education"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Environment",
                              "name": "Environment"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Family",
                              "name": "Family"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Goal",
                              "name": "Goal"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Interests",
                              "name": "Interests"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Organization",
                              "name": "Organization"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Psychographics",
                              "name": "Psychographics"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Responsibility",
                              "name": "Responsibility"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Card/Persona-Information/Title",
                              "name": "Title"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Profile-Card---Persona",
                      "name": "Profile Card - Persona",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Card---Persona/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Profile-Cards",
                      "name": "Profile Cards",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Cards/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Cards/Data/Authoring-Selection",
                              "name": "Authoring Selection"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Cards/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Profile-Key",
                      "name": "Profile Key",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Key/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Key/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Key/Data/MinValue",
                              "name": "MinValue"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Key/Data/MaxValue",
                              "name": "MaxValue"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Key/Data/DefaultValue",
                              "name": "DefaultValue"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Key/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Profile-Key-Control",
                      "name": "Profile Key Control",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Profile-Key-Control/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Profile-Key-Control/Data/Control",
                              "name": "Control"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Rules",
                      "name": "Rules",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Rules/Session-End-Rule",
                          "name": "Session End Rule",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Rules/Session-End-Rule/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Rules/Session-End-Rule/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Segment",
                      "name": "Segment",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Segment/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Segment/Data/Rules",
                              "name": "Rules"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Segment/Data/UseAsAnalyticsFilter",
                              "name": "UseAsAnalyticsFilter"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Segment/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Standard-Data-Template",
                      "name": "Standard Data Template",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Subscription",
                      "name": "Subscription",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Subscription/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Subscription/Data/DefinitionLink",
                              "name": "DefinitionLink"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Subscription/Data/Tags",
                              "name": "Tags"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Subscription/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Traffic-Type",
                      "name": "Traffic Type",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Traffic-Type/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Traffic-Type/Data/Value",
                              "name": "Value"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Traffic-Type/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Vendor-Specific-Filter",
                      "name": "Vendor Specific Filter",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Vendor-Specific-Filter/Mapping",
                          "name": "Mapping",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Vendor-Specific-Filter/Mapping/FilterEntry",
                              "name": "FilterEntry"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Vendor-Specific-Filter/Configuration",
                          "name": "Configuration",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Vendor-Specific-Filter/Configuration/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Vendor-Specific-Filter/Configuration/ConstructorParameters",
                              "name": "ConstructorParameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Vendor-Specific-Filter/Configuration/FilteringKey",
                              "name": "FilteringKey"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/Visitor-Identification",
                      "name": "Visitor Identification",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/Visitor-Identification/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/Visitor-Identification/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Visitor-Identification/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Visitor-Identification/Data/Value",
                              "name": "Value"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/Visitor-Identification/Data/Allow-for-User-Agent",
                              "name": "Allow for User Agent"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/Visitor-Identification/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Analytics/ReportQuery",
                      "name": "ReportQuery",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Analytics/ReportQuery/Report-Query",
                          "name": "Report Query",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/ReportQuery/Report-Query/Data-Source",
                              "name": "Data Source"
                            },
                            {
                              "url": "/sitecore/templates/System/Analytics/ReportQuery/Report-Query/Query",
                              "name": "Query"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Analytics/ReportQuery/Filters",
                          "name": "Filters",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Analytics/ReportQuery/Filters/Filters",
                              "name": "Filters"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Archiving",
                  "name": "Archiving",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Archiving/Archived-item",
                      "name": "Archived item",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Archiving/Archived-item/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Archiving/Archived-item/Data/Archive-date",
                              "name": "Archive date"
                            },
                            {
                              "url": "/sitecore/templates/System/Archiving/Archived-item/Data/Completed",
                              "name": "Completed"
                            },
                            {
                              "url": "/sitecore/templates/System/Archiving/Archived-item/Data/Database-name",
                              "name": "Database name"
                            },
                            {
                              "url": "/sitecore/templates/System/Archiving/Archived-item/Data/Item-ID",
                              "name": "Item ID"
                            },
                            {
                              "url": "/sitecore/templates/System/Archiving/Archived-item/Data/Item-xml",
                              "name": "Item xml"
                            },
                            {
                              "url": "/sitecore/templates/System/Archiving/Archived-item/Data/Parent-ID",
                              "name": "Parent ID"
                            },
                            {
                              "url": "/sitecore/templates/System/Archiving/Archived-item/Data/User-name",
                              "name": "User name"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Branches",
                  "name": "Branches",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Branches/Branch",
                      "name": "Branch",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Branches/Branch/Data",
                          "name": "Data",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Branches/Command-Template",
                      "name": "Command Template",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Branches/Command-Template/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Branches/Command-Template/Data/Command",
                              "name": "Command"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Branches/Insert-Rule",
                      "name": "Insert Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Branches/Insert-Rule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Branches/Insert-Rule/Data/Type",
                              "name": "Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Branches/Branch-Folder",
                      "name": "Branch Folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Branches/Branch-Folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Browsers",
                  "name": "Browsers",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Browsers/Script",
                      "name": "Script",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Browsers/Script/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Browsers/Script/Data/Source",
                              "name": "Source"
                            },
                            {
                              "url": "/sitecore/templates/System/Browsers/Script/Data/Defer",
                              "name": "Defer"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Browsers/Stylesheet",
                      "name": "Stylesheet",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Browsers/Stylesheet/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Browsers/Stylesheet/Data/Source",
                              "name": "Source"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Child-Sorting",
                  "name": "Child Sorting",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Child-Sorting/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Child-Sorting/Data/Type",
                          "name": "Type",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Content-Tagging",
                  "name": "Content Tagging",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Content-Tagging/Configuration",
                      "name": "Configuration",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Tagging/Configuration/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Tagging/Configuration/Data/Content-Provider",
                              "name": "Content Provider"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Tagging/Configuration/Data/Discovery-Provider",
                              "name": "Discovery Provider"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Tagging/Configuration/Data/Taxonomy-Provider",
                              "name": "Taxonomy Provider"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Tagging/Configuration/Data/Tagger",
                              "name": "Tagger"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Tagging/Provider",
                      "name": "Provider",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Tagging/Provider/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Tagging/Provider/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Tagging/Provider/Data/Parameters",
                              "name": "Parameters"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Content-Testing",
                  "name": "Content Testing",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data",
                      "name": "Historical Test Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data/Data/Experiences",
                              "name": "Experiences"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data/Data/Test-Duration",
                              "name": "Test Duration"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data/Data/End-Date",
                              "name": "End Date"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data/Data/Is-Test-Canceled",
                              "name": "Is Test Canceled"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data/Data/Test-Score",
                              "name": "Test Score"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data/Data/Effect",
                              "name": "Effect"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Historical-Test-Data/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Strategy",
                      "name": "Multivariate Test Strategy",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Strategy/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Strategy/Test-Variable-Strategy-Script",
                          "name": "Test Variable Strategy Script",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Strategy/Test-Variable-Strategy-Script/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Strategy/Test-Variable-Strategy-Script/Code",
                              "name": "Code"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Strategy/Test-Variable-Strategy-Script/References",
                              "name": "References"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Strategy/Test-Variable-Strategy-Script/Language",
                              "name": "Language"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Behaviors",
                      "name": "Behaviors",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Behaviors/Behavior",
                          "name": "Behavior",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Behaviors/Behavior/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Behaviors/Behavior/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Behaviors/Rule-Container",
                          "name": "Rule Container",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Behaviors/Rule-Container/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Behaviors/Rule-Container/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Content-Test-Value",
                      "name": "Content Test Value",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Content-Test-Value/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Content-Test-Value/Data/Datasource",
                              "name": "Datasource"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Content-Test-Variable",
                      "name": "Content Test Variable",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Content-Test-Variable/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Content-Test-Variable/Data/Device",
                              "name": "Device"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Content-Test-Variable/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Definition",
                      "name": "Multivariate Test Definition",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Definition/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Definition/Data/Item",
                              "name": "Item"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Definition/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Value",
                      "name": "Multivariate Test Value",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Value/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Value/Data/Datasource",
                              "name": "Datasource"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Value/Data/Hide-Component",
                              "name": "Hide Component"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Value/Data/Replacement-Component",
                              "name": "Replacement Component"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Value/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Variable",
                      "name": "Multivariate Test Variable",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Multivariate-Test-Variable/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Definition",
                      "name": "Page Level Test Definition",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Definition/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Value",
                      "name": "Page Level Test Value",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Value/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Value/Data/Datasource",
                              "name": "Datasource"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Value/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Variable",
                      "name": "Page Level Test Variable",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Variable/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Variable/Data/Device",
                              "name": "Device"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Page-Level-Test-Variable/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Personalization-Test-Variable",
                      "name": "Personalization Test Variable",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Personalization-Test-Variable/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Suggested-Test",
                      "name": "Suggested Test",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Suggested-Test/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Suggested-Test/Data/Text",
                              "name": "Text"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Tasks",
                      "name": "Tasks",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Tasks/Rebuild-Index-Command",
                          "name": "Rebuild Index Command",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Tasks/Rebuild-Index-Command/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Tasks/Rebuild-Index-Command/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Tasks/Try-Finish-Tests",
                          "name": "Try Finish Tests",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Tasks/Try-Finish-Tests/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Tasks/Try-Finish-Tests/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Test-Definition",
                      "name": "Test Definition",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Device",
                              "name": "Device"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Language",
                              "name": "Language"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Test-Strategy",
                              "name": "Test Strategy"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Traffic-Allocation",
                              "name": "Traffic Allocation"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Conversion",
                              "name": "Conversion"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/TrackWithEngagement",
                              "name": "TrackWithEngagement"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Select-Winner-Strategy",
                              "name": "Select Winner Strategy"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Guess",
                              "name": "Guess"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/ConfidenceLevel",
                              "name": "ConfidenceLevel"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/Content-Item",
                              "name": "Content Item"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/WinnerCombination",
                              "name": "WinnerCombination"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/ModelTrainingTaskId",
                              "name": "ModelTrainingTaskId"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Data/ModelTrainingTaskStatus",
                              "name": "ModelTrainingTaskStatus"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Definition/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Scheduling",
                          "name": "Scheduling",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Scheduling/MaxDuration",
                              "name": "MaxDuration"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/Scheduling/MinDuration",
                              "name": "MinDuration"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Definition/System",
                          "name": "System",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Definition/System/__Is-Running",
                              "name": "__Is Running"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Test-Type",
                      "name": "Test Type",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Type/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Type/Data/Name",
                              "name": "Name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Type/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Test-Value",
                      "name": "Test Value",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Value/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Value/Data/Name",
                              "name": "Name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Value/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Test-Variable",
                      "name": "Test Variable",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Variable/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Variable/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Variable/Data/Test-Type",
                              "name": "Test Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Variable/Data/Original-Value",
                              "name": "Original Value"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Variable/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Test-Winner-Strategy",
                      "name": "Test Winner Strategy",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Test-Winner-Strategy/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Winner-Strategy/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Test-Winner-Strategy/Data/Type",
                              "name": "Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Content-Testing/Workflow",
                      "name": "Workflow",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Workflow/Deploy-Associated-Tests-Action",
                          "name": "Deploy Associated Tests Action",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Deploy-Associated-Tests-Action/Associated-Tests",
                              "name": "Associated Tests"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Deploy-Associated-Tests-Action/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Deploy-Associated-Tests-Action/Targets",
                              "name": "Targets"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Workflow/Launch-Create-Test-Dialog-Action",
                          "name": "Launch Create Test Dialog Action",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Launch-Create-Test-Dialog-Action/Settings",
                              "name": "Settings"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Launch-Create-Test-Dialog-Action/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Workflow/Not-Enough-Versions-Execute-Command-Action",
                          "name": "Not Enough Versions Execute Command Action",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Not-Enough-Versions-Execute-Command-Action/Versions",
                              "name": "Versions"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Not-Enough-Versions-Execute-Command-Action/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Workflow/Remove-Tests-Action",
                          "name": "Remove Tests Action",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Remove-Tests-Action/Settings",
                              "name": "Settings"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Remove-Tests-Action/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Content-Testing/Workflow/Test-Candidate-Check-Action",
                          "name": "Test Candidate Check Action",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Test-Candidate-Check-Action/Tests",
                              "name": "Tests"
                            },
                            {
                              "url": "/sitecore/templates/System/Content-Testing/Workflow/Test-Candidate-Check-Action/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Dictionary",
                  "name": "Dictionary",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Dictionary/Dictionary-Domain",
                      "name": "Dictionary Domain",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Dictionary/Dictionary-Domain/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Dictionary/Dictionary-Domain/Data/Fallback-Domain",
                              "name": "Fallback Domain"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Dictionary/Dictionary-Domain/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Dictionary/Dictionary-entry",
                      "name": "Dictionary entry",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Dictionary/Dictionary-entry/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Dictionary/Dictionary-entry/Data/Key",
                              "name": "Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Dictionary/Dictionary-entry/Data/Phrase",
                              "name": "Phrase"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Dictionary/Dictionary-entry/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Dictionary/Dictionary-folder",
                      "name": "Dictionary folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Dictionary/Dictionary-folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Email",
                  "name": "Email",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Email/Global-Settings",
                      "name": "Global Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Email/Global-Settings/Hostname-Mapping",
                          "name": "Hostname Mapping",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Global-Settings/Hostname-Mapping/Hostname-Mapping",
                              "name": "Hostname Mapping"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Global-Settings/Hostname-Mapping/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Global-Settings/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Global-Settings/Settings/Global-Settings",
                              "name": "Global Settings"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Global-Settings/Root-List",
                          "name": "Root List",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Global-Settings/Root-List/Data",
                              "name": "Data"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Global-Settings/Front-End-Text",
                          "name": "Front End Text",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Global-Settings/Front-End-Text/Front-End-Text",
                              "name": "Front End Text"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Email/Sample-Newsletter",
                      "name": "Sample Newsletter",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Email/Sample-Newsletter/Footer",
                          "name": "Footer",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Footer/Footer",
                              "name": "Footer"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Footer/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Sample-Newsletter/Header",
                          "name": "Header",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Header/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Header/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Sample-Newsletter/Link",
                          "name": "Link",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Link/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Link/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Sample-Newsletter/Newsletter-Options",
                          "name": "Newsletter Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Newsletter-Options/Options",
                              "name": "Options"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Newsletter-Options/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Newsletter-Options/Html",
                              "name": "Html"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Sample-Newsletter/ParametersTemplate_NewsletterSection",
                          "name": "ParametersTemplate_NewsletterSection",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/ParametersTemplate_NewsletterSection/Section-Options",
                              "name": "Section Options"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/ParametersTemplate_NewsletterSection/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Sample-Newsletter/Section-Content",
                          "name": "Section Content",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Section-Content/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Section-Content/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Sample-Newsletter/Section-Folder",
                          "name": "Section Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/Section-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Sample-Newsletter/_FixedSection",
                          "name": "_FixedSection",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/_FixedSection/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Sample-Newsletter/_FixedSection/Options",
                              "name": "Options"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Email/Message-Types",
                      "name": "Message Types",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Email/Message-Types/Message-Types-Container",
                          "name": "Message Types Container",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Message-Types/Message-Types-Container/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Message-Types/Message-Type",
                          "name": "Message Type",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Message-Types/Message-Type/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Message-Types/Message-Type/Analytics",
                              "name": "Analytics"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Message-Types/Regular-Type-Folder",
                          "name": "Regular Type Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Message-Types/Regular-Type-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Message-Types/Regular",
                          "name": "Regular",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Message-Types/Automated-Type-Folder",
                          "name": "Automated Type Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Message-Types/Automated-Type-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Message-Types/Automated",
                          "name": "Automated",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Email/Messages",
                      "name": "Messages",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Email/Messages/Messages-Container",
                          "name": "Messages Container",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Messages-Container/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/Message-Folder",
                          "name": "Message Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Message-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/AB-Test-Message",
                          "name": "AB Test Message",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/AB-Test-Message/Message",
                              "name": "Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/AB-Test-Message/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/ImportFromHtml",
                          "name": "ImportFromHtml",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/ImportFromHtml/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/Inner-Content",
                          "name": "Inner Content",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Inner-Content/Message-Root",
                              "name": "Message Root"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Inner-Content/Subject",
                              "name": "Subject"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Inner-Content/Content",
                              "name": "Content"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Inner-Content/Sidebar",
                              "name": "Sidebar"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Inner-Content/Footer",
                              "name": "Footer"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/Mail-Message",
                          "name": "Mail Message",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/Message-Header",
                              "name": "Message Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/Options",
                              "name": "Options"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/Message-Context",
                              "name": "Message Context"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/Status-Notifications",
                              "name": "Status Notifications"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/Analytics",
                              "name": "Analytics"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/System",
                              "name": "System"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/History",
                              "name": "History"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/Recipient-Lists",
                              "name": "Recipient Lists"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Mail-Message/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/Plain-Text-Message",
                          "name": "Plain Text Message",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Plain-Text-Message/Message",
                              "name": "Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Plain-Text-Message/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/Base-HTML-Message",
                          "name": "Base HTML Message",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Base-HTML-Message/Message",
                              "name": "Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Base-HTML-Message/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/HTML-Message",
                          "name": "HTML Message",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/HTML-Message/Message",
                              "name": "Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/HTML-Message/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Messages/Pre-existing-Page",
                          "name": "Pre-existing Page",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Pre-existing-Page/Message",
                              "name": "Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Messages/Pre-existing-Page/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Email/Manager-Root",
                      "name": "Manager Root",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Message-Generation",
                          "name": "Message Generation",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Message-Generation/Base-URL",
                              "name": "Base URL"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Message-Generation/Preview-base-URL",
                              "name": "Preview base URL"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Message-Generation/Encoding",
                              "name": "Encoding"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Message-Generation/Embed-Images",
                              "name": "Embed Images"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Message-Generation/Track-Message-Open",
                              "name": "Track Message Open"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Message-Generation/Renderer-User",
                              "name": "Renderer User"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Subscription-Control",
                          "name": "Subscription Control",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Subscription-Control/Already-Unsubscribed-Page",
                              "name": "Already Unsubscribed Page"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Subscription-Control/Email-Sent-Confirmation-Page",
                              "name": "Email Sent Confirmation Page"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Subscription-Control/Final-Confirmation-Page",
                              "name": "Final Confirmation Page"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Subscription-Control/Subscription-Page",
                              "name": "Subscription Page"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Subscription-Control/Global-Opt-out-List",
                              "name": "Global Opt-out List"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Subscription-Control/Undelivered-Maximum",
                              "name": "Undelivered Maximum"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Delivery-Status-Notifications",
                          "name": "Delivery Status Notifications",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Delivery-Status-Notifications/Gather-Notifications",
                              "name": "Gather Notifications"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Delivery-Status-Notifications/Return-Address",
                              "name": "Return Address"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Delivery-Status-Notifications/POP3-Server",
                              "name": "POP3 Server"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Delivery-Status-Notifications/POP3-SSL",
                              "name": "POP3 SSL"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Delivery-Status-Notifications/POP3-Port",
                              "name": "POP3 Port"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Delivery-Status-Notifications/POP3-User-Name",
                              "name": "POP3 User Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Delivery-Status-Notifications/POP3-Password",
                              "name": "POP3 Password"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Default-Message-Header",
                          "name": "Default Message Header",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Default-Message-Header/From-Name",
                              "name": "From Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Default-Message-Header/From-Address",
                              "name": "From Address"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Default-Message-Header/Reply-To",
                              "name": "Reply To"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Send-Limits",
                          "name": "Send Limits",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Send-Limits/Send-Limits-Enabled",
                              "name": "Send Limits Enabled"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Send-Limits/Daily-Send-Limit",
                              "name": "Daily Send Limit"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Send-Limits/Weekly-Send-Limit",
                              "name": "Weekly Send Limit"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Send-Limits/Monthly-Send-Limit",
                              "name": "Monthly Send Limit"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Unsubscribe-Handling",
                          "name": "Unsubscribe Handling",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Unsubscribe-Handling/Send-unsubscribe-confirmations",
                              "name": "Send unsubscribe confirmations"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Unsubscribe-Handling/Add-List-Unsubscribe-header-to-emails",
                              "name": "Add List-Unsubscribe header to emails"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Branding",
                          "name": "Branding",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Branding/Brand-Name",
                              "name": "Brand Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Branding/Brand-Logo",
                              "name": "Brand Logo"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Marketing-Categories",
                          "name": "Marketing Categories",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Marketing-Categories/Marketing-Category-Groups",
                              "name": "Marketing Category Groups"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center",
                          "name": "Preference Center",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Title",
                              "name": "Preference Center Title"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Intro",
                              "name": "Preference Center Intro"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Layout-Html",
                              "name": "Preference Center Layout Html"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Marketing-Group-Html",
                              "name": "Preference Center Marketing Group Html"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Marketing-Category-Html",
                              "name": "Preference Center Marketing Category Html"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Unsubscribe-from-all",
                              "name": "Preference Center Unsubscribe from all"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Submit",
                              "name": "Preference Center Submit"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Success",
                              "name": "Preference Center Success"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-Error",
                              "name": "Preference Center Error"
                            },
                            {
                              "url": "/sitecore/templates/System/Email/Manager-Root/Preference-Center/Preference-Center-JavaScript",
                              "name": "Preference Center JavaScript"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Email/ID-Source-Based-Parameters",
                      "name": "ID Source Based Parameters",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Email/ID-Source-Based-Parameters/ec_General",
                          "name": "ec_General",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Email/ID-Source-Based-Parameters/ec_General/Data-Source",
                              "name": "Data Source"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Email/ID-Source-Based-Parameters/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Email/Email-Test-Definition",
                      "name": "Email Test Definition",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Experience-Explorer",
                  "name": "Experience Explorer",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Experience-Explorer/Accordion",
                      "name": "Accordion",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Accordion/accordion",
                          "name": "accordion",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Accordion/accordion/Accordion-Name",
                              "name": "Accordion Name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Accordion/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Explorer/Control",
                      "name": "Control",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Control/Control",
                          "name": "Control",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Control/Control/Tab-Name",
                              "name": "Tab Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Control/Control/Path",
                              "name": "Path"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Control/Control/Method",
                              "name": "Method"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Control/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Explorer/Map-Provider",
                      "name": "Map Provider",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Map-Provider/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Map-Provider/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Map-Provider/Data/Api-Key",
                              "name": "Api Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Map-Provider/Data/Scripts",
                              "name": "Scripts"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Explorer/Map-Settings",
                      "name": "Map Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Map-Settings/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Map-Settings/Data/Map-Provider",
                              "name": "Map Provider"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Map-Settings/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Explorer/Preset",
                      "name": "Preset",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Data/Details",
                              "name": "Details"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Data/Image",
                              "name": "Image"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Data/Description",
                              "name": "Description"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset/Onsite-Behaviour",
                          "name": "Onsite Behaviour",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Onsite-Behaviour/Consumed-Assets",
                              "name": "Consumed Assets"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Onsite-Behaviour/Viewed-Pages",
                              "name": "Viewed Pages"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset/Visitor-Information",
                          "name": "Visitor Information",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Visitor-Information/Classify-As",
                              "name": "Classify As"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Visitor-Information/Associated-Sitecore-User",
                              "name": "Associated Sitecore User"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Visitor-Information/Associated-Sitecore-User-Profile",
                              "name": "Associated Sitecore User Profile"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Visitor-Information/Tags",
                              "name": "Tags"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Visitor-Information/Device",
                              "name": "Device"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset/Location",
                          "name": "Location",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Location/Geo-Ip",
                              "name": "Geo Ip"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Location/Geo-Country",
                              "name": "Geo Country"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Location/Geo-Latitude",
                              "name": "Geo Latitude"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Location/Geo-Longitude",
                              "name": "Geo Longitude"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset/Referral-Information",
                          "name": "Referral Information",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/Referral-Information/Referrer",
                              "name": "Referrer"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset/History",
                          "name": "History",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/History/Visit-1",
                              "name": "Visit 1"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/History/Visit-2",
                              "name": "Visit 2"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/History/Visit-3",
                              "name": "Visit 3"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/History/Visit-4",
                              "name": "Visit 4"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset/History/Visit-5",
                              "name": "Visit 5"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona",
                      "name": "Preset Persona",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Age",
                              "name": "Age"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Education",
                              "name": "Education"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Family",
                              "name": "Family"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Interests",
                              "name": "Interests"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/DayOfMyLive",
                              "name": "DayOfMyLive"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Organization",
                              "name": "Organization"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Psychographics",
                              "name": "Psychographics"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Environment",
                              "name": "Environment"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Responsibility",
                              "name": "Responsibility"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/Data/Goal",
                              "name": "Goal"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Explorer/Preset-Persona/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Feeds",
                  "name": "Feeds",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters",
                      "name": "Feed Rendering Parameters",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters/Data/TitleField",
                              "name": "TitleField"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters/Data/BodyField",
                              "name": "BodyField"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters/Data/AuthorField",
                              "name": "AuthorField"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters/Data/EnclosureField",
                              "name": "EnclosureField"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters/Parameters",
                          "name": "Parameters",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Feeds/Feed-Rendering-Parameters/Parameters/Additional-Parameters",
                              "name": "Additional Parameters"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Feeds/RSS-Feed",
                      "name": "RSS Feed",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Feeds/RSS-Feed/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Data/Source",
                              "name": "Source"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Data/Title",
                              "name": "Title"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Data/Link",
                              "name": "Link"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Feeds/RSS-Feed/Additional-Metadata",
                          "name": "Additional Metadata",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Additional-Metadata/Image",
                              "name": "Image"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Additional-Metadata/Copyright",
                              "name": "Copyright"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Additional-Metadata/Managing-editor",
                              "name": "Managing editor"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Feeds/RSS-Feed/Caching",
                          "name": "Caching",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Caching/Cacheable",
                              "name": "Cacheable"
                            },
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Caching/Cache-Duration",
                              "name": "Cache Duration"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Feeds/RSS-Feed/Extensibility",
                          "name": "Extensibility",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Feeds/RSS-Feed/Extensibility/Type",
                              "name": "Type"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Feeds/RSS-Feed/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Forms",
                  "name": "Forms",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Forms/Fields",
                      "name": "Fields",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Button",
                          "name": "Button",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Button/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Button/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Checkbox",
                          "name": "Checkbox",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Checkbox/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Checkbox/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Date",
                          "name": "Date",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Date/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Date/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Dropdown-List",
                          "name": "Dropdown List",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Dropdown-List/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Dropdown-List/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Email",
                          "name": "Email",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Email/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Field",
                          "name": "Field",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Field/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Field/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/List",
                          "name": "List",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/List/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/List/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/List-Box",
                          "name": "List Box",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/List-Box/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/List-Box/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Multiple-Line-Text",
                          "name": "Multiple-Line Text",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Multiple-Line-Text/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Multiple-Line-Text/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Number",
                          "name": "Number",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Number/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Number/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Password",
                          "name": "Password",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Password/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Password-Confirmation",
                          "name": "Password Confirmation",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Password-Confirmation/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Password-Confirmation/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Text",
                          "name": "Text",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Text/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Text/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Page",
                          "name": "Page",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Page/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Section",
                          "name": "Section",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Section/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Fields/Input",
                          "name": "Input",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Input/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Fields/Input/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Condition-Settings",
                      "name": "Condition Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Condition-Settings/Condition-Settings",
                          "name": "Condition Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Condition-Settings/Condition-Settings/Field-Key",
                              "name": "Field Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Condition-Settings/Condition-Settings/Conditions",
                              "name": "Conditions"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Meta-Data",
                      "name": "Meta Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Meta-Data/Conditions",
                          "name": "Conditions",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Meta-Data/Conditions/Action-Type",
                              "name": "Action Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Meta-Data/Conditions/Editor-Settings",
                              "name": "Editor Settings"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Meta-Data/Conditions/Operator",
                              "name": "Operator"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Meta-Data/Extended-List-Item",
                          "name": "Extended List Item",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Meta-Data/Extended-List-Item/Data",
                              "name": "Data"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Meta-Data/List-Item",
                          "name": "List Item",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Rendering-Settings",
                      "name": "Rendering Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Rendering-Settings/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Rendering-Settings/Settings/Field-Type",
                              "name": "Field Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Save-Settings",
                      "name": "Save Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Save-Settings/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Save-Settings/Data/Allow-Save",
                              "name": "Allow Save"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Save-Settings/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Submit-Action",
                      "name": "Submit Action",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Submit-Action/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Submit-Action/Settings/Model-Type",
                              "name": "Model Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Submit-Action/Settings/Error-Message",
                              "name": "Error Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Submit-Action/Settings/Editor",
                              "name": "Editor"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Submit-Action-Definition",
                      "name": "Submit Action Definition",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Submit-Action-Definition/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Submit-Action-Definition/Settings/Submit-Action",
                              "name": "Submit Action"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Submit-Action-Definition/Settings/Parameters",
                              "name": "Parameters"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Tracking-Settings",
                      "name": "Tracking Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Tracking-Settings/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Tracking-Settings/Settings/Is-Tracking-Enabled",
                              "name": "Is Tracking Enabled"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Validation",
                      "name": "Validation",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Validation/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Validation/Settings/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Validation/Settings/Message",
                              "name": "Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Validation/Settings/Parameters",
                              "name": "Parameters"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Validation-Settings",
                      "name": "Validation Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Validation-Settings/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Validation-Settings/Data/Required",
                              "name": "Required"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Validation-Settings/Data/Validations",
                              "name": "Validations"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Value-Provider",
                      "name": "Value Provider",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Value-Provider/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Value-Provider/Settings/Model-Type",
                              "name": "Model Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Value-Provider-Settings",
                      "name": "Value Provider Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Value-Provider-Settings/Value-Provider-Settings",
                          "name": "Value Provider Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Value-Provider-Settings/Value-Provider-Settings/Value-Provider",
                              "name": "Value Provider"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Value-Provider-Settings/Value-Provider-Settings/Value-Provider-Parameters",
                              "name": "Value Provider Parameters"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Form",
                      "name": "Form",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Form/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Form/Settings/Is-Ajax",
                              "name": "Is Ajax"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Form/Settings/Css-Class",
                              "name": "Css Class"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Form/Settings/Scripts",
                              "name": "Scripts"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Form/Settings/Styles",
                              "name": "Styles"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Form/Settings/Is-Template",
                              "name": "Is Template"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Form/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Field-Type",
                      "name": "Field Type",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Field-Type/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Settings/View-Path",
                              "name": "View Path"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Settings/Model-Type",
                              "name": "Model Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Settings/Allowed-Validations",
                              "name": "Allowed Validations"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Settings/Property-Editor",
                              "name": "Property Editor"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Field-Type/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Data/Field-Template",
                              "name": "Field Template"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Forms/Field-Type/Appearance",
                          "name": "Appearance",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Appearance/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Appearance/SpritePosition",
                              "name": "SpritePosition"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Appearance/IsDisabled",
                              "name": "IsDisabled"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Field-Type/Appearance/BackgroundColor",
                              "name": "BackgroundColor"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Forms/Label-Settings",
                      "name": "Label Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Forms/Label-Settings/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Forms/Label-Settings/Data/Title",
                              "name": "Title"
                            },
                            {
                              "url": "/sitecore/templates/System/Forms/Label-Settings/Data/Label-Css-Class",
                              "name": "Label Css Class"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Geospatial",
                  "name": "Geospatial",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Geospatial/Coordinate",
                      "name": "Coordinate",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Geospatial/Coordinate/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Geospatial/Coordinate/Data/Latitude",
                              "name": "Latitude"
                            },
                            {
                              "url": "/sitecore/templates/System/Geospatial/Coordinate/Data/Longitude",
                              "name": "Longitude"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Html-editor",
                  "name": "Html editor",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Html-editor/HTML-Class",
                      "name": "HTML Class",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-editor/HTML-Class/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Class/Data/Display-class",
                              "name": "Display class"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Class/Data/Reference-class",
                              "name": "Reference class"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-editor/Html-Custom-Button",
                      "name": "Html Custom Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-editor/Html-Custom-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-editor/Html-Custom-Button/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/Html-Custom-Button/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/Html-Custom-Button/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/Html-Custom-Button/Data/Click",
                              "name": "Click"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-editor/HTML-Font",
                      "name": "HTML Font",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-editor/HTML-Font/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Font/Data/Display-name",
                              "name": "Display name"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Font/Data/Reference-name",
                              "name": "Reference name"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-editor/HTML-Size",
                      "name": "HTML Size",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-editor/HTML-Size/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Size/Data/Display-size",
                              "name": "Display size"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Size/Data/Reference-size",
                              "name": "Reference size"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-editor/HTML-Tidy",
                      "name": "HTML Tidy",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Allowed-tags",
                              "name": "Allowed tags"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Clean-on-button",
                              "name": "Clean on button"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Clean-on-drop",
                              "name": "Clean on drop"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Clean-on-paste",
                              "name": "Clean on paste"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Clean-on-save",
                              "name": "Clean on save"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Filter-on-button",
                              "name": "Filter on button"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Filter-on-drop",
                              "name": "Filter on drop"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Filter-on-paste",
                              "name": "Filter on paste"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Filter-on-save",
                              "name": "Filter on save"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Tidy-on-button",
                              "name": "Tidy on button"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Tidy-on-drop",
                              "name": "Tidy on drop"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Tidy-on-paste",
                              "name": "Tidy on paste"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Tidy/Data/Tidy-on-save",
                              "name": "Tidy on save"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-editor/HTML-Translation",
                      "name": "HTML Translation",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-editor/HTML-Translation/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-editor/HTML-Translation/Data/New-class",
                              "name": "New class"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-editor/Setting-group",
                      "name": "Setting group",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-editor/Setting-group/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-editor/Setting-group/Data/Disabled",
                              "name": "Disabled"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Html-Editor-Profiles",
                  "name": "Html Editor Profiles",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Button",
                      "name": "Html Editor Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Button/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Button/Data/Shortcut",
                              "name": "Shortcut"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Class-Translation",
                      "name": "Html Editor Class Translation",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Class-Translation/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Class-Translation/Data/Key",
                              "name": "Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Class-Translation/Data/Value",
                              "name": "Value"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Divider",
                      "name": "Html Editor Divider",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Drop-Down",
                      "name": "Html Editor Drop Down",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Drop-Down/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Drop-Down/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Drop-Down/Data/Shortcut",
                              "name": "Shortcut"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Drop-Down-Button",
                      "name": "Html Editor Drop Down Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Drop-Down-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Drop-Down-Button/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Drop-Down-Button/Data/Shortcut",
                              "name": "Shortcut"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Html-Item",
                      "name": "Html Editor Html Item",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Html-Item/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Html-Item/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Html-Item/Data/Value",
                              "name": "Value"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-List-Item",
                      "name": "Html Editor List Item",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-List-Item/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-List-Item/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-List-Item/Data/Value",
                              "name": "Value"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Snippet",
                      "name": "Html Editor Snippet",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Snippet/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Snippet/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Snippet/Data/Value",
                              "name": "Value"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Tidy",
                      "name": "Html Editor Tidy",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Tidy/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Tidy/Data/Allowed-Tags",
                              "name": "Allowed Tags"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Tidy/Data/Clean",
                              "name": "Clean"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Tidy/Data/Filter",
                              "name": "Filter"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Tidy/Data/Tidy",
                              "name": "Tidy"
                            },
                            {
                              "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Tidy/Data/Tidy-Configuration-Path",
                              "name": "Tidy Configuration Path"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Html-Editor-Profiles/Html-Editor-Toolbar",
                      "name": "Html Editor Toolbar",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Indexing-and-Search",
                  "name": "Indexing and Search",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Indexing-and-Search/Boosting-Rule",
                      "name": "Boosting Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Indexing-and-Search/Boosting-Rule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Indexing-and-Search/Boosting-Rule/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Indexing-and-Search/Boosting-Rule/Data/Rule",
                              "name": "Rule"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Indexing-and-Search/Boosting-Rule/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Item",
                  "name": "Item",
                  "children": []
                },
                {
                  "url": "/sitecore/templates/System/Item-Buckets",
                  "name": "Item Buckets",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Bucket",
                      "name": "Bucket",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Bucket/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Clientside-Hook",
                      "name": "Clientside Hook",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Clientside-Hook/Details",
                          "name": "Details",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Clientside-Hook/Details/Name",
                              "name": "Name"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List",
                      "name": "Dropdown List",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List/Dropdown-List",
                          "name": "Dropdown List",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List/Dropdown-List/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List/Dropdown-List/List-Name",
                              "name": "List Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List/Dropdown-List/Command-Name",
                              "name": "Command Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List/Dropdown-List/Enabled",
                              "name": "Enabled"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List/Dropdown-List/Display-Text",
                              "name": "Display Text"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List/Dropdown-List/Icon",
                              "name": "Icon"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Dropdown-List/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Facet",
                      "name": "Facet",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet",
                          "name": "Facet",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet/DisplayName",
                              "name": "DisplayName"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet/Parameters",
                              "name": "Parameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet/Enabled",
                              "name": "Enabled"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet/Minimum-Number-of-Items",
                              "name": "Minimum Number of Items"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet/Client-Side-Handle",
                              "name": "Client Side Handle"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Facet/Facet/Global",
                              "name": "Global"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Facet/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type",
                      "name": "Field Search Type",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type",
                          "name": "Search Type",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type/Field",
                              "name": "Field"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type/Control-Type",
                              "name": "Control Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type/Control-Type-Parameters",
                              "name": "Control Type Parameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type/Display-Text",
                              "name": "Display Text"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type/WebMethod",
                              "name": "WebMethod"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/Search-Type/Client-Side-Hook",
                              "name": "Client Side Hook"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Field-Search-Type/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Item-Buckets-Settings",
                      "name": "Item Buckets Settings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Item-Buckets-Settings/Settings",
                          "name": "Settings",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Item-Buckets-Settings/Settings/Opening-Search-Results",
                              "name": "Opening Search Results"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Item-Buckets-Settings/Settings/Tag-Parent",
                              "name": "Tag Parent"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Item-Buckets-Settings/Settings/Rule",
                              "name": "Rule"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Item-Buckets-Settings/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Open-Result-Type",
                      "name": "Open Result Type",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Quick-Action",
                      "name": "Quick Action",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Quick-Action/Command",
                          "name": "Command",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Quick-Action/Command/Command",
                              "name": "Command"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Saved-Search",
                      "name": "Saved Search",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Saved-Search/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Search-Control-Type",
                      "name": "Search Control Type",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Search-Control-Type/Search-Filter-Control-Details",
                          "name": "Search Filter Control Details",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Search-Control-Type/Search-Filter-Control-Details/Control-Type",
                              "name": "Control Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Tab-Option",
                      "name": "Tab Option",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Tag",
                      "name": "Tag",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Tag/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/Tag-Repository",
                      "name": "Tag Repository",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/Tag-Repository/Repository-Details",
                          "name": "Repository Details",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Tag-Repository/Repository-Details/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/Tag-Repository/Repository-Details/Enabled",
                              "name": "Enabled"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Item-Buckets/View",
                      "name": "View",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-Buckets/View/View-Details",
                          "name": "View Details",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/View/View-Details/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/View/View-Details/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/View/View-Details/Header-Template",
                              "name": "Header Template"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/View/View-Details/Item-Template",
                              "name": "Item Template"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/View/View-Details/Footer-Template",
                              "name": "Footer Template"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/View/View-Details/Default",
                              "name": "Default"
                            },
                            {
                              "url": "/sitecore/templates/System/Item-Buckets/View/View-Details/Enabled",
                              "name": "Enabled"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Item-section",
                  "name": "Item section",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Item-section/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Item-section/Data/Header",
                          "name": "Header",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Item-section/Data/Icon",
                          "name": "Icon",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Language",
                  "name": "Language",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Language/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Language/Data/Charset",
                          "name": "Charset",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Language/Data/Code-page",
                          "name": "Code page",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Language/Data/Dictionary",
                          "name": "Dictionary",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Language/Data/Encoding",
                          "name": "Encoding",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Language/Data/Fallback-Language",
                          "name": "Fallback Language",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Language/Data/Iso",
                          "name": "Iso",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Language/Data/Regional-Iso-Code",
                          "name": "Regional Iso Code",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Language/Data/WorldLingo-Language-Identifier",
                          "name": "WorldLingo Language Identifier",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Layout",
                  "name": "Layout",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Layout/Controller",
                      "name": "Controller",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Controller/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Controller/Data/Controller-Name",
                              "name": "Controller Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Controller/Data/Action-Name",
                              "name": "Action Name"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Device",
                      "name": "Device",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Device/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Device/Data/Default",
                              "name": "Default"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Device/Data/Fallback-device",
                              "name": "Fallback device"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Device/Data/Capabilities-Type",
                              "name": "Capabilities Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Device/Data/Default-Simulator",
                              "name": "Default Simulator"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Device/Detection",
                          "name": "Detection",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Device/Detection/Agent",
                              "name": "Agent"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Device/Detection/Query-string",
                              "name": "Query string"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Device/Detection/Rule",
                              "name": "Rule"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Layout",
                      "name": "Layout",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Layout/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Layout/Data/Path",
                              "name": "Path"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Layout/Data/Model",
                              "name": "Model"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Layout/Data/Area",
                              "name": "Area"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Layout/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Layout/Layout-Service",
                          "name": "Layout Service",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Layout/Layout-Service/Placeholders",
                              "name": "Placeholders"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Layout-Folder",
                      "name": "Layout Folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Layout-Folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Layout-group",
                      "name": "Layout group",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Layout-Preset",
                      "name": "Layout Preset",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Layout-Preset/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Layout-Preset/Data/Layout",
                              "name": "Layout"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Layout-Service",
                      "name": "Layout Service",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Layout-Service/Rendering-Contents-Resolver",
                          "name": "Rendering Contents Resolver",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Layout-Service/Rendering-Contents-Resolver/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Layout-Service/Rendering-Contents-Resolver/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Layout-Service/Rendering-Contents-Resolvers-Folder",
                          "name": "Rendering Contents Resolvers Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Layout-Service/Rendering-Contents-Resolvers-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Model",
                      "name": "Model",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Model/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Model/Data/Model-Type",
                              "name": "Model Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Placeholder",
                      "name": "Placeholder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Placeholder/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Placeholder/Data/Placeholder-Key",
                              "name": "Placeholder Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Placeholder/Data/Allowed-Controls",
                              "name": "Allowed Controls"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Placeholder/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Placeholder/Data/Editable",
                              "name": "Editable"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Placeholder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Placeholder-Settings-Folder",
                      "name": "Placeholder Settings Folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Placeholder-Settings-Folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Preset-Folder",
                      "name": "Preset Folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Preset-Folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Preview-Simulators",
                      "name": "Preview Simulators",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Preview-Simulators/No-Flash-Support-Trait",
                          "name": "No Flash Support Trait",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Preview-Simulators/No-Flash-Support-Trait/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Preview-Simulators/No-Silverlight-Support-Trait",
                          "name": "No Silverlight Support Trait",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Preview-Simulators/No-Silverlight-Support-Trait/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Preview-Simulators/Simulator",
                          "name": "Simulator",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Preview-Simulators/Simulator/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Preview-Simulators/Simulator/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Preview-Simulators/Simulator-Rotated-State",
                          "name": "Simulator Rotated State",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Preview-Simulators/Trait",
                          "name": "Trait",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Preview-Simulators/Trait/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Preview-Simulators/Trait/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Preview-Simulators/Sections",
                          "name": "Sections",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Preview-Simulators/Sections/Simulator-Appearance",
                              "name": "Simulator Appearance"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Preview-Simulators/Sections/Unsupported-Content",
                              "name": "Unsupported Content"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Rendering-group",
                      "name": "Rendering group",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Rendering-Parameters",
                      "name": "Rendering Parameters",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Rendering-Parameters/Standard-Rendering-Parameters",
                          "name": "Standard Rendering Parameters",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Rendering-Parameters/Standard-Rendering-Parameters/General",
                              "name": "General"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Rendering-Parameters/Standard-Rendering-Parameters/Parameters",
                              "name": "Parameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Rendering-Parameters/Standard-Rendering-Parameters/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Rendering-Parameters/Standard-Rendering-Parameters/Caching",
                              "name": "Caching"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Rendering-Parameters/Standard-Rendering-Parameters/Personalization",
                              "name": "Personalization"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Rendering-Parameters/Standard-Rendering-Parameters/Test-Lab",
                              "name": "Test Lab"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Renderings",
                      "name": "Renderings",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Controller-rendering",
                          "name": "Controller rendering",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Controller-rendering/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Controller-rendering/Editor-Options",
                              "name": "Editor Options"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Item-rendering",
                          "name": "Item rendering",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Item-rendering/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Item-rendering/Editor-Options",
                              "name": "Editor Options"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Method-Rendering",
                          "name": "Method Rendering",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Method-Rendering/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Method-Rendering/Editor-Options",
                              "name": "Editor Options"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Method-Rendering/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Rendering",
                          "name": "Rendering",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Rendering/Data",
                              "name": "Data"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Rendering-Folder",
                          "name": "Rendering Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Rendering-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Sublayout",
                          "name": "Sublayout",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Sublayout/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Sublayout/Editor-Options",
                              "name": "Editor Options"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Sublayout/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Sublayout-Folder",
                          "name": "Sublayout Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Sublayout-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Url-Rendering",
                          "name": "Url Rendering",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Url-Rendering/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Url-Rendering/Editor-Options",
                              "name": "Editor Options"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/View-rendering",
                          "name": "View rendering",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/View-rendering/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/View-rendering/Editor-Options",
                              "name": "Editor Options"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/View-rendering/Designer-Options",
                              "name": "Designer Options"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Webcontrol",
                          "name": "Webcontrol",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Webcontrol/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Webcontrol/Editor-Options",
                              "name": "Editor Options"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/XmlControl",
                          "name": "XmlControl",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/XmlControl/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/XmlControl/Editor-Options",
                              "name": "Editor Options"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Renderings/Xsl-Rendering",
                          "name": "Xsl Rendering",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Xsl-Rendering/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Renderings/Xsl-Rendering/Editor-Options",
                              "name": "Editor Options"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Sections",
                      "name": "Sections",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Sections/BaseSection",
                          "name": "BaseSection",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Sections/Caching",
                          "name": "Caching",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Sections/Caching/Caching",
                              "name": "Caching"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Layout/Sections/Rendering-Options",
                          "name": "Rendering Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Sections/Rendering-Options/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Sections/Rendering-Options/Editor-Options",
                              "name": "Editor Options"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Sections/Rendering-Options/Layout-Service",
                              "name": "Layout Service"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Layout/Xml-layout",
                      "name": "Xml layout",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Layout/Xml-layout/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Layout/Xml-layout/Data/Control",
                              "name": "Control"
                            },
                            {
                              "url": "/sitecore/templates/System/Layout/Xml-layout/Data/Path",
                              "name": "Path"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Main-section",
                  "name": "Main section",
                  "children": []
                },
                {
                  "url": "/sitecore/templates/System/Media",
                  "name": "Media",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Media/Media-folder",
                      "name": "Media folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Media/Media-folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Media/Unversioned",
                      "name": "Unversioned",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Audio",
                          "name": "Audio",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Audio/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Doc",
                          "name": "Doc",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Document",
                          "name": "Document",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Document/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Docx",
                          "name": "Docx",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/File",
                          "name": "File",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/File/Media",
                              "name": "Media"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/File/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/File/Information",
                              "name": "Information"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/File/Properties",
                              "name": "Properties"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/File/Location",
                              "name": "Location"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Flash",
                          "name": "Flash",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Flash/Flash",
                              "name": "Flash"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Flash/Properties",
                              "name": "Properties"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Image",
                          "name": "Image",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Image/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Image/Image",
                              "name": "Image"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Image/Properties",
                              "name": "Properties"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Jpeg",
                          "name": "Jpeg",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Jpeg/Exif",
                              "name": "Exif"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Movie",
                          "name": "Movie",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Movie/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Mp3",
                          "name": "Mp3",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Mp3/ID3",
                              "name": "ID3"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Mp3/Properties",
                              "name": "Properties"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Pdf",
                          "name": "Pdf",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Unversioned/Zip",
                          "name": "Zip",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Unversioned/Zip/Properties",
                              "name": "Properties"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Media/Versioned",
                      "name": "Versioned",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Audio",
                          "name": "Audio",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Audio/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Doc",
                          "name": "Doc",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Document",
                          "name": "Document",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Document/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Docx",
                          "name": "Docx",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/File",
                          "name": "File",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/File/Media",
                              "name": "Media"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/File/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/File/Information",
                              "name": "Information"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/File/Properties",
                              "name": "Properties"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/File/Location",
                              "name": "Location"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Flash",
                          "name": "Flash",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Flash/Flash",
                              "name": "Flash"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Flash/Properties",
                              "name": "Properties"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Image",
                          "name": "Image",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Image/__Standard-Values",
                              "name": "__Standard Values"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Image/Image",
                              "name": "Image"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Image/Properties",
                              "name": "Properties"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Jpeg",
                          "name": "Jpeg",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Jpeg/Exif",
                              "name": "Exif"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Movie",
                          "name": "Movie",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Movie/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Mp3",
                          "name": "Mp3",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Mp3/ID3",
                              "name": "ID3"
                            },
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Mp3/Properties",
                              "name": "Properties"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Pdf",
                          "name": "Pdf",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Media/Versioned/Zip",
                          "name": "Zip",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Media/Versioned/Zip/Properties",
                              "name": "Properties"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Menus",
                  "name": "Menus",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Menus/Menu-divider",
                      "name": "Menu divider",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Menus/Menu-Header",
                      "name": "Menu Header",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Menus/Menu-Header/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-Header/Data/Header",
                              "name": "Header"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Menus/Menu-item",
                      "name": "Menu item",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Menus/Menu-item/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-item/Data/Action",
                              "name": "Action"
                            },
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-item/Data/Checkbox",
                              "name": "Checkbox"
                            },
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-item/Data/Display-name",
                              "name": "Display name"
                            },
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-item/Data/Hotkey",
                              "name": "Hotkey"
                            },
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-item/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-item/Data/ID",
                              "name": "ID"
                            },
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-item/Data/Message",
                              "name": "Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Menus/Menu-item/Data/Radiogroup",
                              "name": "Radiogroup"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Navigation",
                  "name": "Navigation",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Navigation/Notification",
                      "name": "Notification",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Navigation/Notification/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Navigation/Notification/Data/Text",
                              "name": "Text"
                            },
                            {
                              "url": "/sitecore/templates/System/Navigation/Notification/Data/Action",
                              "name": "Action"
                            },
                            {
                              "url": "/sitecore/templates/System/Navigation/Notification/Data/Users",
                              "name": "Users"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Node",
                  "name": "Node",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Node/__Standard-Values",
                      "name": "__Standard Values",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Notification",
                  "name": "Notification",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Notification/Notification",
                      "name": "Notification",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Notification/Notification/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Notification/Notification/Data/Text",
                              "name": "Text"
                            },
                            {
                              "url": "/sitecore/templates/System/Notification/Notification/Data/Action",
                              "name": "Action"
                            },
                            {
                              "url": "/sitecore/templates/System/Notification/Notification/Data/Users",
                              "name": "Users"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Packages",
                  "name": "Packages",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Packages/Package-registration",
                      "name": "Package registration",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Packages/Package-registration/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Packages/Package-registration/Data/Package-ID",
                              "name": "Package ID"
                            },
                            {
                              "url": "/sitecore/templates/System/Packages/Package-registration/Data/Package-name",
                              "name": "Package name"
                            },
                            {
                              "url": "/sitecore/templates/System/Packages/Package-registration/Data/Package-version",
                              "name": "Package version"
                            },
                            {
                              "url": "/sitecore/templates/System/Packages/Package-registration/Data/Package-author",
                              "name": "Package author"
                            },
                            {
                              "url": "/sitecore/templates/System/Packages/Package-registration/Data/Package-publisher",
                              "name": "Package publisher"
                            },
                            {
                              "url": "/sitecore/templates/System/Packages/Package-registration/Data/Package-readme",
                              "name": "Package readme"
                            },
                            {
                              "url": "/sitecore/templates/System/Packages/Package-registration/Data/Package-revision",
                              "name": "Package revision"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Path-Analyzer",
                  "name": "Path Analyzer",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/Commands",
                      "name": "Commands",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/Commands/Site-map-group",
                          "name": "Site map group",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/AssetMap",
                      "name": "AssetMap",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/AssetMap/Scope",
                          "name": "Scope",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/AssetMap/Scope/TargetAsset",
                              "name": "TargetAsset"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/AssetMap/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/BaseMap",
                      "name": "BaseMap",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/Info",
                          "name": "Info",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/Info/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/Info/Description",
                              "name": "Description"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/Scope",
                          "name": "Scope",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/Scope/Rule",
                              "name": "Rule"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/System",
                          "name": "System",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/System/MapType",
                              "name": "MapType"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/BaseMap/System/MapItemType",
                              "name": "MapItemType"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/CampaignMap",
                      "name": "CampaignMap",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/CampaignMap/Options",
                          "name": "Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/CampaignMap/Options/TargetCampaign",
                              "name": "TargetCampaign"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/CampaignMap/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/ChannelMap",
                      "name": "ChannelMap",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/ChannelMap/Options",
                          "name": "Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ChannelMap/Options/TargetChannel",
                              "name": "TargetChannel"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/ChannelMap/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap",
                      "name": "ExperienceMap",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options",
                          "name": "Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludeChannel",
                              "name": "IncludeChannel"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludeCampaign",
                              "name": "IncludeCampaign"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludeAllPages",
                              "name": "IncludeAllPages"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludeEntryPage",
                              "name": "IncludeEntryPage"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludeExitPage",
                              "name": "IncludeExitPage"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludePageEvents",
                              "name": "IncludePageEvents"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludeGoals",
                              "name": "IncludeGoals"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludeGoalsWithValue",
                              "name": "IncludeGoalsWithValue"
                            },
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/Options/IncludeOutcomes",
                              "name": "IncludeOutcomes"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/ExperienceMap/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/GoalMap",
                      "name": "GoalMap",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/GoalMap/Options",
                          "name": "Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/GoalMap/Options/TargetGoal",
                              "name": "TargetGoal"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/GoalMap/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/Map",
                      "name": "Map",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/Map/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/Map-folder",
                      "name": "Map folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/Map-folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/MapGroup",
                      "name": "MapGroup",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/MapGroup/Scope",
                          "name": "Scope",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/MapGroup/Scope/Rule",
                              "name": "Rule"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/MapGroup/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/MapGroupFolder",
                      "name": "MapGroupFolder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/MapGroupFolder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/MapType",
                      "name": "MapType",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/MapType/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/MapType/Data/BuilderType",
                              "name": "BuilderType"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/MapType/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/OutcomeMap",
                      "name": "OutcomeMap",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/OutcomeMap/Options",
                          "name": "Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/OutcomeMap/Options/TargetOutcome",
                              "name": "TargetOutcome"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/OutcomeMap/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/ReversableMap",
                      "name": "ReversableMap",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/ReversableMap/Options",
                          "name": "Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/ReversableMap/Options/Reverse",
                              "name": "Reverse"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/ReversableMap/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Path-Analyzer/Site-map-group",
                      "name": "Site map group",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/Site-map-group/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Path-Analyzer/Site-map-group/Data/Site-Name",
                              "name": "Site Name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Path-Analyzer/Site-map-group/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Portal",
                  "name": "Portal",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Portal/Portal",
                      "name": "Portal",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Portal/Portal/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Portal/Portal/Data/Window",
                              "name": "Window"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Portal/Portlet",
                      "name": "Portlet",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Portal/Portlet/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Portal/Portlet/Data/ID",
                              "name": "ID"
                            },
                            {
                              "url": "/sitecore/templates/System/Portal/Portlet/Data/Control-name",
                              "name": "Control name"
                            },
                            {
                              "url": "/sitecore/templates/System/Portal/Portlet/Data/Zone",
                              "name": "Zone"
                            },
                            {
                              "url": "/sitecore/templates/System/Portal/Portlet/Data/Order",
                              "name": "Order"
                            },
                            {
                              "url": "/sitecore/templates/System/Portal/Portlet/Data/Default",
                              "name": "Default"
                            },
                            {
                              "url": "/sitecore/templates/System/Portal/Portlet/Data/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Portal/Portlet/Data/Parameters",
                              "name": "Parameters"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Property",
                  "name": "Property",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Property/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Property/Data/Value",
                          "name": "Value",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Publishing-target",
                  "name": "Publishing target",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Publishing-target/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Publishing-target/Data/Target-database",
                          "name": "Target database",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Publishing-target/Data/Preview-publishing-target",
                          "name": "Preview publishing target",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Reference",
                  "name": "Reference",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Reference/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Reference/Data/Reference",
                          "name": "Reference",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Ribbon",
                  "name": "Ribbon",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Ribbon/Chunk",
                      "name": "Chunk",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Chunk/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Chunk/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Chunk/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Chunk/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Chunk/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Chunk/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Command",
                      "name": "Command",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Command/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Command/Data/Command",
                              "name": "Command"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Custom-Control",
                      "name": "Custom Control",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Custom-Control/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Custom-Control/Data/Type",
                              "name": "Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Large-Button",
                      "name": "Large Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Large-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Button/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Button/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Button/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Button/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Button/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Button/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Button/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button",
                      "name": "Large Combo Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Gallery",
                              "name": "Gallery"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Gallery-Width",
                              "name": "Gallery Width"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Gallery-Height",
                              "name": "Gallery Height"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/Gallery-Parameters",
                              "name": "Gallery Parameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Combo-Button/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button",
                      "name": "Large Gallery Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/Command",
                              "name": "Command"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/Gallery",
                              "name": "Gallery"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/Gallery-Width",
                              "name": "Gallery Width"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/Gallery-Height",
                              "name": "Gallery Height"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Large-Gallery-Button/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Panel",
                      "name": "Panel",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Panel/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Panel/Data/Type",
                              "name": "Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Separator",
                      "name": "Separator",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Small-Button",
                      "name": "Small Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Small-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Button/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Button/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Button/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Button/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Button/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Button/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Button/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Small-Check-Button",
                      "name": "Small Check Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Small-Check-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Check-Button/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Check-Button/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Check-Button/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Check-Button/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Check-Button/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Check-Button/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button",
                      "name": "Small Combo Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Command",
                              "name": "Command"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Gallery",
                              "name": "Gallery"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Gallery-Width",
                              "name": "Gallery Width"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Gallery-Height",
                              "name": "Gallery Height"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/Gallery-Parameters",
                              "name": "Gallery Parameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Combo-Button/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box",
                      "name": "Small Drop Down Box",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data/Items",
                              "name": "Items"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Drop-Down-Box/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button",
                      "name": "Small Gallery Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Command",
                              "name": "Command"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Gallery",
                              "name": "Gallery"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Gallery-Width",
                              "name": "Gallery Width"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Gallery-Height",
                              "name": "Gallery Height"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/Gallery-Parameters",
                              "name": "Gallery Parameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Gallery-Button/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Small-Input-Box",
                      "name": "Small Input Box",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Small-Input-Box/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Input-Box/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Input-Box/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Input-Box/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Input-Box/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Input-Box/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Input-Box/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Small-Input-Box/Data/ID",
                              "name": "ID"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Strip",
                      "name": "Strip",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Strip/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Strip/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Strip/Data/Contextual-Header",
                              "name": "Contextual Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Strip/Data/ID",
                              "name": "ID"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Strip/Data/Access-Key",
                              "name": "Access Key"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Strip/Data/Tooltip",
                              "name": "Tooltip"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Strip/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Strip/Data/Hidden-by-Default",
                              "name": "Hidden by Default"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Tool-Button",
                      "name": "Tool Button",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Tool-Button/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Tool-Button/Data/Click",
                              "name": "Click"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Tool-Button/Data/Header",
                              "name": "Header"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Tool-Button/Data/Icon",
                              "name": "Icon"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Tool-Button/Data/KeyCode",
                              "name": "KeyCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Tool-Button/Data/ID",
                              "name": "ID"
                            },
                            {
                              "url": "/sitecore/templates/System/Ribbon/Tool-Button/Data/Tooltip",
                              "name": "Tooltip"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Tool-Button-Group",
                      "name": "Tool Button Group",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Tool-Button-New-Line",
                      "name": "Tool Button New Line",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Ribbon/Toolbar",
                      "name": "Toolbar",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Ribbon/Toolbar/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Ribbon/Toolbar/Data/Sticky-Chunk",
                              "name": "Sticky Chunk"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Root",
                  "name": "Root",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Root/Data",
                      "name": "Data",
                      "children": []
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Rules",
                  "name": "Rules",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Rules/Action",
                      "name": "Action",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Action/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Action/Data/Text",
                              "name": "Text"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Action/Script",
                          "name": "Script",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Action/Script/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Action/Script/Code",
                              "name": "Code"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Action/Script/References",
                              "name": "References"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Action/Script/Language",
                              "name": "Language"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Condition",
                      "name": "Condition",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Condition/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Condition/Data/Text",
                              "name": "Text"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Condition/Script",
                          "name": "Script",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Condition/Script/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Condition/Script/Code",
                              "name": "Code"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Condition/Script/References",
                              "name": "References"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Condition/Script/Language",
                              "name": "Language"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Conditional-Rendering-Rule",
                      "name": "Conditional Rendering Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Conditional-Rendering-Rule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Conditional-Rendering-Rule/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Conditional-Rendering-Rule/Data/Rule",
                              "name": "Rule"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Conditional-Rendering-Rule/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Content-Editor-Warning-Rule",
                      "name": "Content Editor Warning Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Content-Editor-Warning-Rule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Content-Editor-Warning-Rule/Data/Rule",
                              "name": "Rule"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Insert-Options-Rule",
                      "name": "Insert Options Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Insert-Options-Rule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Insert-Options-Rule/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Insert-Options-Rule/Data/Rule",
                              "name": "Rule"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Macro",
                      "name": "Macro",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Macro/Script",
                          "name": "Script",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Macro/Script/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Macro/Script/Code",
                              "name": "Code"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Macro/Script/References",
                              "name": "References"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Macro/Script/Language",
                              "name": "Language"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Rule",
                      "name": "Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Rule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Rule/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Rule/Data/Rule",
                              "name": "Rule"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Rule/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/RuleBase",
                      "name": "RuleBase",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Script",
                      "name": "Script",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Script/Script",
                          "name": "Script",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Script/Script/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Script/Script/Code",
                              "name": "Code"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Script/Script/References",
                              "name": "References"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Script/Script/Language",
                              "name": "Language"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Taxonomy",
                      "name": "Taxonomy",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Element-Folder",
                          "name": "Element Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Element-Folder/Taxonomy",
                              "name": "Taxonomy"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Element-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Group",
                          "name": "Group",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Rule-Elements-Visibility-Rule",
                          "name": "Rule Elements Visibility Rule",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Rule-Elements-Visibility-Rule/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Rule-Elements-Visibility-Rule/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Rules-Context-Folder",
                          "name": "Rules Context Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Rules-Context-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Rules-Folder",
                          "name": "Rules Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Rules-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Tag",
                          "name": "Tag",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Tags-Definition",
                          "name": "Tags Definition",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Tags-Definition/Taxonomy",
                              "name": "Taxonomy"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Tags-Definition/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Tags-Definitions-Folder",
                          "name": "Tags Definitions Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Tags-Definitions-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Taxonomy/Visibility",
                          "name": "Visibility",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Taxonomy/Visibility/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Validation-Result",
                      "name": "Validation Result",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Validation-Result/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Rules/Validation-Rule",
                      "name": "Validation Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Rules/Validation-Rule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Rules/Validation-Rule/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Rules/Validation-Rule/Data/Rule",
                              "name": "Rule"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Rules/Validation-Rule/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Security",
                  "name": "Security",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Security/Role",
                      "name": "Role",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Security/Role/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Security/Role/Data/Roles",
                              "name": "Roles"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Security/Security-folder",
                      "name": "Security folder",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Security/Security-Preset",
                      "name": "Security Preset",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Security/Security-Preset/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Security/Security-Preset/Data/Security-Preset",
                              "name": "Security Preset"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/Security-Preset/Data/Overwrite",
                              "name": "Overwrite"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Security/User",
                      "name": "User",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Security/User/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/Administrator",
                              "name": "Administrator"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/CanBoost",
                              "name": "CanBoost"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/ClientLanguage",
                              "name": "ClientLanguage"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/ContentLanguage",
                              "name": "ContentLanguage"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/DefaultItem",
                              "name": "DefaultItem"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/Email",
                              "name": "Email"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/Fullname",
                              "name": "Fullname"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/Password",
                              "name": "Password"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/Portrait",
                              "name": "Portrait"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/RegionalIsoCode",
                              "name": "RegionalIsoCode"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/Roles",
                              "name": "Roles"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/Start-Url",
                              "name": "Start Url"
                            },
                            {
                              "url": "/sitecore/templates/System/Security/User/Data/Wallpaper",
                              "name": "Wallpaper"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Services",
                  "name": "Services",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Services/API-Key",
                      "name": "API Key",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Services/API-Key/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Services/API-Key/Data/CORS-Origins",
                              "name": "CORS Origins"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/API-Key/Data/AllowedControllers",
                              "name": "AllowedControllers"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/API-Key/Data/Impersonation-User",
                              "name": "Impersonation User"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/API-Key/Data/Throttle-Strategy",
                              "name": "Throttle Strategy"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Services/API-Key/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Services/Item-Service",
                      "name": "Item Service",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Services/Item-Service/Query",
                          "name": "Query",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Services/Item-Service/Query/Query-Definition",
                              "name": "Query Definition"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/Item-Service/Query/Query-Folder",
                              "name": "Query Folder"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Services/Item-Service/Search",
                          "name": "Search",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Services/Item-Service/Search/Search-Definition",
                              "name": "Search Definition"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/Item-Service/Search/Search-Folder",
                              "name": "Search Folder"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Services/OData-Item-API-Key",
                      "name": "OData Item API Key",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Services/OData-Item-API-Key/Custom",
                          "name": "Custom",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Services/OData-Item-API-Key/Custom/Database",
                              "name": "Database"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/OData-Item-API-Key/Custom/Search-Filter",
                              "name": "Search Filter"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Services/OData-Item-API-Key/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Services/Throttle",
                      "name": "Throttle",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Services/Throttle/Strategy-Folder",
                          "name": "Strategy Folder",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Services/Throttle/Strategy-Folder/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Services/Throttle/Strategy",
                          "name": "Strategy",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Services/Throttle/Strategy/Common-Options",
                              "name": "Common Options"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/Throttle/Strategy/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Services/Throttle/Sliding-Window-Strategy",
                          "name": "Sliding Window Strategy",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Services/Throttle/Sliding-Window-Strategy/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/Throttle/Sliding-Window-Strategy/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Services/Throttle/Composite-Strategy",
                          "name": "Composite Strategy",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Services/Throttle/Composite-Strategy/Data",
                              "name": "Data"
                            },
                            {
                              "url": "/sitecore/templates/System/Services/Throttle/Composite-Strategy/__Standard-Values",
                              "name": "__Standard Values"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Snippet",
                  "name": "Snippet",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Snippet/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Snippet/Data/Icon",
                          "name": "Icon",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Snippet/Data/Snippet",
                          "name": "Snippet",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Snippet/Data/Title",
                          "name": "Title",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Tasks",
                  "name": "Tasks",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Tasks/Command",
                      "name": "Command",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Tasks/Command/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Tasks/Command/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Tasks/Command/Data/Method",
                              "name": "Method"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Tasks/Schedule",
                      "name": "Schedule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Tasks/Schedule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Tasks/Schedule/Data/Command",
                              "name": "Command"
                            },
                            {
                              "url": "/sitecore/templates/System/Tasks/Schedule/Data/Items",
                              "name": "Items"
                            },
                            {
                              "url": "/sitecore/templates/System/Tasks/Schedule/Data/Schedule",
                              "name": "Schedule"
                            },
                            {
                              "url": "/sitecore/templates/System/Tasks/Schedule/Data/Last-run",
                              "name": "Last run"
                            },
                            {
                              "url": "/sitecore/templates/System/Tasks/Schedule/Data/Async",
                              "name": "Async"
                            },
                            {
                              "url": "/sitecore/templates/System/Tasks/Schedule/Data/Auto-remove",
                              "name": "Auto remove"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Templates",
                  "name": "Templates",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Templates/Sections",
                      "name": "Sections",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Advanced",
                          "name": "Advanced",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Advanced/Advanced",
                              "name": "Advanced"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Appearance",
                          "name": "Appearance",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Appearance/Appearance",
                              "name": "Appearance"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Help",
                          "name": "Help",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Help/Help",
                              "name": "Help"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Indexing",
                          "name": "Indexing",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Indexing/Indexing",
                              "name": "Indexing"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Insert-Options",
                          "name": "Insert Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Insert-Options/Insert-Options",
                              "name": "Insert Options"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Item-Buckets",
                          "name": "Item Buckets",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Item-Buckets/Item-Buckets",
                              "name": "Item Buckets"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Layout",
                          "name": "Layout",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Layout/Layout",
                              "name": "Layout"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Lifetime",
                          "name": "Lifetime",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Lifetime/Lifetime",
                              "name": "Lifetime"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Publishing",
                          "name": "Publishing",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Publishing/Publishing",
                              "name": "Publishing"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Security",
                          "name": "Security",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Security/Security",
                              "name": "Security"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Statistics",
                          "name": "Statistics",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Statistics/Statistics",
                              "name": "Statistics"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Tagging",
                          "name": "Tagging",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Tagging/Tagging",
                              "name": "Tagging"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Tasks",
                          "name": "Tasks",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Tasks/Tasks",
                              "name": "Tasks"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Validators",
                          "name": "Validators",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Validators/Validation-Rules",
                              "name": "Validation Rules"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Sections/Workflow",
                          "name": "Workflow",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Sections/Workflow/Workflow",
                              "name": "Workflow"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Templates/Standard-template",
                      "name": "Standard template",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/System/Templates/Template",
                      "name": "Template",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Templates/Template/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Template/Data/__Base-template",
                              "name": "__Base template"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Template/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Templates/Template-field",
                      "name": "Template field",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Templates/Template-field/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Title",
                              "name": "Title"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Source",
                              "name": "Source"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Blob",
                              "name": "Blob"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Shared",
                              "name": "Shared"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Unversioned",
                              "name": "Unversioned"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Default-value",
                              "name": "Default value"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Validation",
                              "name": "Validation"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/ValidationText",
                              "name": "ValidationText"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Reset-blank",
                              "name": "Reset blank"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Enable-Shared-Language-Fallback",
                              "name": "Enable Shared Language Fallback"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Enable-Language-Fallback",
                              "name": "Enable Language Fallback"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Exclude-From-Text-Search",
                              "name": "Exclude From Text Search"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Page-Editor-Buttons",
                              "name": "Page Editor Buttons"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Data/Ignore-Dictionary-Translations",
                              "name": "Ignore Dictionary Translations"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Template-field/Validation-Rules",
                          "name": "Validation Rules",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Validation-Rules/Quick-Action-Bar",
                              "name": "Quick Action Bar"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Validation-Rules/Validate-Button",
                              "name": "Validate Button"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Validation-Rules/Validator-Bar",
                              "name": "Validator Bar"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Validation-Rules/Workflow",
                              "name": "Workflow"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Template-field/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Template-field/Search-Results",
                          "name": "Search Results",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field/Search-Results/Is-Displayed-in-Search-Results",
                              "name": "Is Displayed in Search Results"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Templates/Template-field-type",
                      "name": "Template field type",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Templates/Template-field-type/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field-type/Data/Assembly",
                              "name": "Assembly"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field-type/Data/Class",
                              "name": "Class"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field-type/Data/Control",
                              "name": "Control"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field-type/Data/Parameters",
                              "name": "Parameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Templates/Template-field-type/Data/WebEdit-Control",
                              "name": "WebEdit Control"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Templates/Template-Folder",
                      "name": "Template Folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Templates/Template-Folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Templates/Template-section",
                      "name": "Template section",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Templates/Template-section/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Templates/Template-section/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Templates/Template-section/Data/Collapsed-by-Default",
                              "name": "Collapsed by Default"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Validation",
                  "name": "Validation",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Validation/Field-Type-Validation-Rules",
                      "name": "Field Type Validation Rules",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Validation/Field-Type-Validation-Rules/Validation-Rules",
                          "name": "Validation Rules",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Validation/Field-Type-Validation-Rules/Validation-Rules/Quick-Action-Bar",
                              "name": "Quick Action Bar"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Field-Type-Validation-Rules/Validation-Rules/Validate-Button",
                              "name": "Validate Button"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Field-Type-Validation-Rules/Validation-Rules/Validator-Bar",
                              "name": "Validator Bar"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Field-Type-Validation-Rules/Validation-Rules/Workflow",
                              "name": "Workflow"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Validation/Global-Validation-Rules",
                      "name": "Global Validation Rules",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Validation/Global-Validation-Rules/Validation-Rules",
                          "name": "Validation Rules",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Validation/Global-Validation-Rules/Validation-Rules/Quick-Action-Bar",
                              "name": "Quick Action Bar"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Global-Validation-Rules/Validation-Rules/Validate-Button",
                              "name": "Validate Button"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Global-Validation-Rules/Validation-Rules/Validator-Bar",
                              "name": "Validator Bar"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Global-Validation-Rules/Validation-Rules/Workflow",
                              "name": "Workflow"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Validation/Rules-Validation-Rule",
                      "name": "Rules Validation Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Validation/Rules-Validation-Rule/Rules",
                          "name": "Rules",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Validation/Rules-Validation-Rule/Rules/Rule",
                              "name": "Rule"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Validation/Rules-Validation-Rule/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Validation/Validation-Rule",
                      "name": "Validation Rule",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Validation/Validation-Rule/Text",
                          "name": "Text",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Text/Title",
                              "name": "Title"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Text/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Text/Text",
                              "name": "Text"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Validation/Validation-Rule/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Data/Parameters",
                              "name": "Parameters"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Data/Use-Thread",
                              "name": "Use Thread"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Validation/Validation-Rule/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/System/Validation/Validation-Rule/Script",
                          "name": "Script",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Script/Code",
                              "name": "Code"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Script/References",
                              "name": "References"
                            },
                            {
                              "url": "/sitecore/templates/System/Validation/Validation-Rule/Script/Language",
                              "name": "Language"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/WebDAV",
                  "name": "WebDAV",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/WebDAV/FDAMediaFolder",
                      "name": "FDAMediaFolder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/WebDAV/FDAMediaFolder/FDA",
                          "name": "FDA",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/WebDAV/FDAMediaFolder/FDA/Referrers",
                              "name": "Referrers"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/WebDAV/FDAMediaFolder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Workflow",
                  "name": "Workflow",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Workflow/Action",
                      "name": "Action",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Workflow/Action/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Workflow/Action/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Action/Data/Parameters",
                              "name": "Parameters"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Workflow/Auto-Submit-Action",
                      "name": "Auto Submit Action",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Workflow/Auto-Submit-Action/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Workflow/Auto-Submit-Action/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Auto-Submit-Action/Data/Role-Name",
                              "name": "Role Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Auto-Submit-Action/Data/Next-state",
                              "name": "Next state"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Workflow/Command",
                      "name": "Command",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Workflow/Command/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Workflow/Command/Data/Next-state",
                              "name": "Next state"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Command/Data/Suppress-Comment",
                              "name": "Suppress Comment"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Command/Data/Comment-Template",
                              "name": "Comment Template"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Command/Data/Comment-Dialog-Height",
                              "name": "Comment Dialog Height"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Command/Data/Appearance-Evaluator-Type",
                              "name": "Appearance Evaluator Type"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Workflow/Command/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Workflow/Email-action",
                      "name": "Email action",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Workflow/Email-action/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Workflow/Email-action/Data/To",
                              "name": "To"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Email-action/Data/From",
                              "name": "From"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Email-action/Data/Subject",
                              "name": "Subject"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Email-action/Data/Message",
                              "name": "Message"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Email-action/Data/Mail-server",
                              "name": "Mail server"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Email-action/Data/Type",
                              "name": "Type"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Workflow/Standard-Comment-Template",
                      "name": "Standard Comment Template",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Workflow/Standard-Comment-Template/Comment",
                          "name": "Comment",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Workflow/Standard-Comment-Template/Comment/Comments",
                              "name": "Comments"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Workflow/State",
                      "name": "State",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Workflow/State/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Workflow/State/Data/Final",
                              "name": "Final"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/State/Data/Preview-publishing-targets",
                              "name": "Preview publishing targets"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/State/Data/Description",
                              "name": "Description"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Workflow/State/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Workflow/Validation-Action",
                      "name": "Validation Action",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Workflow/Validation-Action/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Workflow/Validation-Action/Data/Type",
                              "name": "Type"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Validation-Action/Data/Max-Result",
                              "name": "Max Result"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Validation-Action/Data/Unknown",
                              "name": "Unknown"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Validation-Action/Data/Warning",
                              "name": "Warning"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Validation-Action/Data/Error",
                              "name": "Error"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Validation-Action/Data/Critical-Error",
                              "name": "Critical Error"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Validation-Action/Data/Fatal-Error",
                              "name": "Fatal Error"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Workflow/Workflow",
                      "name": "Workflow",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Workflow/Workflow/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Workflow/Workflow/Data/Initial-state",
                              "name": "Initial state"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Workflow/Data/Default-Comment-Template",
                              "name": "Default Comment Template"
                            },
                            {
                              "url": "/sitecore/templates/System/Workflow/Workflow/Data/Default-Comment-Dialog-Height",
                              "name": "Default Comment Dialog Height"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Workflow/Workflow/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "url": "/sitecore/templates/System/Experience-Analytics",
                  "name": "Experience Analytics",
                  "children": [
                    {
                      "url": "/sitecore/templates/System/Experience-Analytics/Branches",
                      "name": "Branches",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/Branches/Dimension",
                          "name": "Dimension",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Analytics/Branches/Dimension/$name",
                              "name": "$name"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Analytics/BaseDimension",
                      "name": "BaseDimension",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/BaseDimension/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Analytics/BaseDimension/Data/Name",
                              "name": "Name"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/BaseDimension/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Analytics/BaseSegment",
                      "name": "BaseSegment",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/BaseSegment/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Analytics/BaseSegment/Data/Name",
                              "name": "Name"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Analytics/BaseSegment/Data/Filter",
                              "name": "Filter"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/BaseSegment/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Analytics/Dimension",
                      "name": "Dimension",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/Dimension/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Analytics/DimensionFolder",
                      "name": "DimensionFolder",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/DimensionFolder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Analytics/Filter",
                      "name": "Filter",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/Filter/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Analytics/Filter/Data/Rule",
                              "name": "Rule"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Analytics/FlexibleDimension",
                      "name": "FlexibleDimension",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/FlexibleDimension/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/System/Experience-Analytics/FlexibleDimension/Data/MetricType",
                              "name": "MetricType"
                            },
                            {
                              "url": "/sitecore/templates/System/Experience-Analytics/FlexibleDimension/Data/Metrics",
                              "name": "Metrics"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/FlexibleDimension/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/System/Experience-Analytics/Segment",
                      "name": "Segment",
                      "children": [
                        {
                          "url": "/sitecore/templates/System/Experience-Analytics/Segment/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/templates/Foundation",
              "name": "Foundation",
              "children": [
                {
                  "url": "/sitecore/templates/Foundation/JavaScript-Services",
                  "name": "JavaScript Services",
                  "children": [
                    {
                      "url": "/sitecore/templates/Foundation/JavaScript-Services/App",
                      "name": "App",
                      "children": []
                    },
                    {
                      "url": "/sitecore/templates/Foundation/JavaScript-Services/Route",
                      "name": "Route",
                      "children": [
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/Route/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Foundation/JavaScript-Services/JSS-Layout",
                      "name": "JSS Layout",
                      "children": [
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/JSS-Layout/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering",
                      "name": "JavaScript Rendering",
                      "children": [
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Data/Server-Script-Path",
                              "name": "Server Script Path"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Data/Exported-Function-Name",
                              "name": "Exported Function Name"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Data/Client-Script-Path",
                              "name": "Client Script Path"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Data/Component-Name",
                              "name": "Component Name"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Data/Placeholder",
                              "name": "Placeholder"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Data/Data-source",
                              "name": "Data source"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Data/Parameters",
                              "name": "Parameters"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Editor-Options",
                          "name": "Editor Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Editor-Options/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Editor-Options/Parameters-Template",
                              "name": "Parameters Template"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Editor-Options/Open-Properties-after-Add",
                              "name": "Open Properties after Add"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Editor-Options/Customize-Page",
                              "name": "Customize Page"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Field-Editor",
                          "name": "Field Editor",
                          "children": [
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Field-Editor/AddFieldEditorButton",
                              "name": "AddFieldEditorButton"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/Field-Editor/FieldEditorFields",
                              "name": "FieldEditorFields"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/GraphQL",
                          "name": "GraphQL",
                          "children": [
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/JavaScript-Rendering/GraphQL/ComponentQuery",
                              "name": "ComponentQuery"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering",
                      "name": "Json Rendering",
                      "children": [
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Data/componentName",
                              "name": "componentName"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Data/Placeholder",
                              "name": "Placeholder"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Data/Data-source",
                              "name": "Data source"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Data/Parameters",
                              "name": "Parameters"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Editor-Options",
                          "name": "Editor Options",
                          "children": [
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Editor-Options/Description",
                              "name": "Description"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Editor-Options/Parameters-Template",
                              "name": "Parameters Template"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Editor-Options/Open-Properties-after-Add",
                              "name": "Open Properties after Add"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Editor-Options/Customize-Page",
                              "name": "Customize Page"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Field-Editor",
                          "name": "Field Editor",
                          "children": [
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Field-Editor/AddFieldEditorButton",
                              "name": "AddFieldEditorButton"
                            },
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/Field-Editor/FieldEditorFields",
                              "name": "FieldEditorFields"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/GraphQL",
                          "name": "GraphQL",
                          "children": [
                            {
                              "url": "/sitecore/templates/Foundation/JavaScript-Services/Json-Rendering/GraphQL/ComponentQuery",
                              "name": "ComponentQuery"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/templates/Feature",
              "name": "Feature",
              "children": []
            },
            {
              "url": "/sitecore/templates/Project",
              "name": "Project",
              "children": [
                {
                  "url": "/sitecore/templates/Project/test",
                  "name": "test",
                  "children": [
                    {
                      "url": "/sitecore/templates/Project/test/Announcement",
                      "name": "Announcement",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/Announcement/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/Announcement/Data/heading",
                              "name": "heading"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/Announcement/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/App-Route",
                      "name": "App Route",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/App-Route/Page-Metadata",
                          "name": "Page Metadata",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/App-Route/Page-Metadata/pageTitle",
                              "name": "pageTitle"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/App-Route/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/AuthorFolder",
                      "name": "AuthorFolder",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/AuthorFolder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/AuthorItem",
                      "name": "AuthorItem",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/AuthorItem/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/AuthorProfile",
                      "name": "AuthorProfile",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/AuthorProfile/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/AuthorProfile/Data/authorName",
                              "name": "authorName"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/AuthorProfile/Data/authorImage",
                              "name": "authorImage"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/AuthorProfile/Data/authorDetails",
                              "name": "authorDetails"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/AuthorProfile/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/AuthorProfile-Rendering-Parameters",
                      "name": "AuthorProfile Rendering Parameters",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/AuthorProfile-Rendering-Parameters/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/AuthorProfile-Rendering-Parameters/Data/headingColor",
                              "name": "headingColor"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/AuthorProfile-Rendering-Parameters/Data/headerColor",
                              "name": "headerColor"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/AuthorProfile-Rendering-Parameters/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/color-folder",
                      "name": "color-folder",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/color-folder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/color-item",
                      "name": "color-item",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/color-item/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/ContentBlock",
                      "name": "ContentBlock",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/ContentBlock/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/ContentBlock/Data/heading",
                              "name": "heading"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/ContentBlock/Data/content",
                              "name": "content"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/ContentBlock/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/Dashboard",
                      "name": "Dashboard",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/Dashboard/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/Dashboard/Data/heading",
                              "name": "heading"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/Dashboard/Data/heading2",
                              "name": "heading2"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/Dashboard/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/DifficultyTags",
                      "name": "DifficultyTags",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/DifficultyTags/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/DifficultyTagsItem",
                      "name": "DifficultyTagsItem",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/DifficultyTagsItem/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/LearningCard",
                      "name": "LearningCard",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/LearningCard/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/LearningCard/Data/heading",
                              "name": "heading"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/LearningCard/Data/link",
                              "name": "link"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/LearningCard/Data/image",
                              "name": "image"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/LearningCard/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/LearningCard-Rendering-Parameters",
                      "name": "LearningCard Rendering Parameters",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/LearningCard-Rendering-Parameters/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/LearningCard-Rendering-Parameters/Data/difficultyTag",
                              "name": "difficultyTag"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/LearningCard-Rendering-Parameters/Data/learningCategoryTag",
                              "name": "learningCategoryTag"
                            },
                            {
                              "url": "/sitecore/templates/Project/test/LearningCard-Rendering-Parameters/Data/author",
                              "name": "author"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/LearningCard-Rendering-Parameters/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/LearningCategoriesFolder",
                      "name": "LearningCategoriesFolder",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/LearningCategoriesFolder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/LearningCategoriesItem",
                      "name": "LearningCategoriesItem",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/LearningCategoriesItem/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/LearningResourceCard",
                      "name": "LearningResourceCard",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/LearningResourceCard/Data",
                          "name": "Data",
                          "children": [
                            {
                              "url": "/sitecore/templates/Project/test/LearningResourceCard/Data/heading",
                              "name": "heading"
                            }
                          ]
                        },
                        {
                          "url": "/sitecore/templates/Project/test/LearningResourceCard/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/ThemeFolder",
                      "name": "ThemeFolder",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/ThemeFolder/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Project/test/ThemeItem",
                      "name": "ThemeItem",
                      "children": [
                        {
                          "url": "/sitecore/templates/Project/test/ThemeItem/__Standard-Values",
                          "name": "__Standard Values",
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/templates/Sample",
              "name": "Sample",
              "children": [
                {
                  "url": "/sitecore/templates/Sample/Sample-Item",
                  "name": "Sample Item",
                  "children": [
                    {
                      "url": "/sitecore/templates/Sample/Sample-Item/Data",
                      "name": "Data",
                      "children": [
                        {
                          "url": "/sitecore/templates/Sample/Sample-Item/Data/Title",
                          "name": "Title",
                          "children": []
                        },
                        {
                          "url": "/sitecore/templates/Sample/Sample-Item/Data/Text",
                          "name": "Text",
                          "children": []
                        }
                      ]
                    },
                    {
                      "url": "/sitecore/templates/Sample/Sample-Item/__Standard-Values",
                      "name": "__Standard Values",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "url": "/sitecore/templates/User-Defined",
              "name": "User Defined",
              "children": []
            }
          ]
        }
      ]
    }
  }
}

