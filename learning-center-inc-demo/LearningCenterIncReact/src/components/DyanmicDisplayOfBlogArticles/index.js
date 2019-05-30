import React from "react";
import axios from "axios";
//https://mdbootstrap.com/docs/react/advanced/popovers/
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import { setJssState } from "../../utils/jssUtils";
import {
  generateJssQuery,
  generateQuery,
  mockedResponse,
  graphQlQuery
} from "./jssGqlUtils";
import config from "../../temp/config";

class DyanmicDisplayOfBlogArticles extends React.Component {
  constructor(props) {
    super(props);
    //set up var to container whether we are in jss code first mode
    this.jssCodeFirstState = setJssState(this); //pass context so util has access to passed props
    this.state = {
      content: null
    };
  }

  componentDidMount = () => {
    const { graphQLEndpointPath, sitecoreApiKey } = config;
    const { gridContentSource } = this.props.params;
    //call graph ql endpoint to get a list of all articles under blog
    //check if running in jss start
    if (this.jssCodeFirstState) {
      this.setState({
        cardDataToRender: mockedResponse.data
      });
    } else if (this.props.context.pageEditing) {
      //generate jss query if in editing mode
      graphQlQuery = generateJssQuery(gridContentSource);
    } else {
      graphQlQuery = generateQuery(gridContentSource);
    }
    if (!this.jssCodeFirstState) {
      axios({
        url: `${graphQLEndpointPath}?sc_apikey=${sitecoreApiKey}`,
        method: "post",
        data: { query: graphQlQuery }
      })
        .then(response => {
          let content = response.data;
          this.setState({
            contentToDisplay: content
          });
        })
        .catch(err => {
          console.log(`
          GraphQL Error Getting Content Data: 
          ${err}`);
        });
    }
  };
  render() {
    // const { defaultCardImage } = this.props.fields;
    let content = null;
    return ( 
      <MDBContainer>
      <div style={{ display: "flex" }} className="m-5 p-5">

        <MDBPopover
          placement="right"
          popover
          clickable
          id="popper2"
        >
          <MDBBtn>popover on right</MDBBtn>
          <div>
            <MDBPopoverHeader>popover on right</MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>

      </div>
    </MDBContainer>
    )
    // if (this.state.cardDataToRender) {
    //   content = (
    //     <SitecoreItems
    //       style={sitecoreItemsContainerStyles}
    //       items={this.state.cardDataToRender.item.children}
    //     />
    //   );
    // }
    // return this.props.loading ? <div>Loading</div> : content;
  }
}
const sitecoreItemsContainerStyles = {
  overflowX: "scrollbar"
};

let sitecoreItemCount = 0;
let sitecoreItemCountWithChildren = 0;
let sitecoreItemWrapperCount = 0;

const SitecoreItems = ({ items }) => {
  // console.log(
  //   `Number of wrapper component creations ${sitecoreItemWrapperCount}`
  // );
  return items.map(item => {
    sitecoreItemWrapperCount += 1;
    return (
      <SitecoreItem key={`Wrapper${sitecoreItemWrapperCount}`} item={item} />
    );
  });
};

const SitecoreItem = ({ item }) => {
  const multiplierForLeftMargin = 1;
  const itemStyle = {
    ...itemStyleShared,
    marginLeft: `${multiplierForLeftMargin * sitecoreItemWrapperCount}px`
  };
  let { name, url } = item;
  let urlArray = url.split("/");
  let urlLastItem = urlArray[urlArray.length - 1];

  const itemHasChildren = item.children && item.children.length > 0;
  let potentialChildren = <span />;
  if (itemHasChildren) {
    sitecoreItemCountWithChildren += 1;
    // console.log(
    //   `Number of item with children creations ${sitecoreItemCountWithChildren}`
    // );
    potentialChildren = (
      <SitecoreItems
        key={`nonTopLevelWrapper${sitecoreItemCountWithChildren}`}
        items={item.children}
      />
    );
  }
  sitecoreItemCount += 1;
  // console.log(
  //   `Number of items with no children creations ${sitecoreItemCount}`
  // );
  const itemId = `${sitecoreItemCount}Item`;
  return (
    //style={itemStyle}
    <React.Fragment>
    {/* //    <MDBContainer>
    //   <div style={{ display: "flex" }} className="m-5 p-5">

    //     <MDBPopover 
    //       placement="right"
    //       popover
    //       clickable
    //       id={`popper${itemId}`}
    //     >
    //       <MDBBtn>{url}</MDBBtn>
    //       <div>
    //         <MDBPopoverHeader>popover on right</MDBPopoverHeader>
    //         <MDBPopoverBody>
    //                      {name}
    //         </MDBPopoverBody>
    //       </div>
    //     </MDBPopover>
    //   </div>
    // </MDBContainer>
      {/* <p key={`${sitecoreItemCount}item`}>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href={itemId}
          role="button"
          aria-expanded="false"
          aria-controls={`#${itemId}"`}
        >
          {name}
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target={`#${itemId}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          {name}
        </button>
      </p>
      <div className="collapse" id={`${itemId}"`}>
        <div className="card card-body">{url}</div>
      </div> */}
      {potentialChildren}
    </React.Fragment>
  );
};

let itemStyleShared = {
  // height: "30px",
  // width: "100px"
  height: "auto",
  width: "auto"
};

export default DyanmicDisplayOfBlogArticles;
