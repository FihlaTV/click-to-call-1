import React, { Component } from 'react';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Mutation, Query } from 'react-apollo';
import ScriptItem from './ScriptItem';


const CAMPAIGN_SCRIPT_ITEM_QUERY = gql`
  query CAMPAIGN_SCRIPT_ITEM_QUERY {
    campaignScripts {
      # campaignScripts(filter: $filter) {
        id
        campaignID
        title
    }
  }
`;


class ScriptListing extends Component {

  state = {
    urlID: this.props.props,
  }

  saveToState = e => {
    this.setState({[e.target.name]: e.target.value });
  }

  componentDidMount() {
    // How do we get the values for filter and origin?
    console.log(this.state.urlID);
  }


  render() {


    const { items } = this.props;

    return (

      <Query
      query={CAMPAIGN_SCRIPT_ITEM_QUERY}
      // variables={{campaignID: this.props.id}}
      fetchPolicy="network-only"
      >

      {({data, loading, error}) => {
          if(loading) return <p>Loading...</p>;
          if(data.item) return <p>No Item Found for ID...</p>;
          if(error) return <p>Error: {error.message}</p>;

          return (
            <div className="campaignScripts">
              <h2>Scripts</h2>

              {data.campaignScripts.map(item => {
                if(item.campaignID == this.state.urlID) return <ScriptItem item={item} key={item.id} />
              }
              )}
            </div>
          )
      }}
    </Query>
    );
  }
}

export default ScriptListing;