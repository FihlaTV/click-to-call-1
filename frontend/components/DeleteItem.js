import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_DASHBOARD_ITEMS_QUERY } from './DashboardItems';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteCampaignItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {

  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_DASHBOARD_ITEMS_QUERY });

    // 2. Filter the deleted item out of the page
    data.campaignItems = data.campaignItems.filter(item => item.id !== payload.data.deleteCampaignItem.id);
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_DASHBOARD_ITEMS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteCampaignItem, { error }) => (
          <button
            className="dupbtn"
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                deleteCampaignItem().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
