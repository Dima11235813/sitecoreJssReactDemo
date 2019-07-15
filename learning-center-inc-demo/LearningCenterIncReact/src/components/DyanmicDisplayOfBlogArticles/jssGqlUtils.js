export const graphQlQuery = `
{
    item {
    }
  }
  
`;

export const generateJssQuery = path => {
  return `
  {
    item(path: "${path}") {
      children {
      }
    }
  }
`;
};
