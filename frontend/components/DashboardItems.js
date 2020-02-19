import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DashboardItem from './DashboardItem';
import { perPage } from '../config';



const ALL_DASHBOARD_ITEMS_QUERY = gql`
  query ALL_DASHBOARD_ITEMS_QUERY {
    campaignItems {
      id
      title
      expiration
      customURL
      user {
        id
        name
      }
    }
  }
`;



class DashboardItems extends Component {
  render() {
    return (
        <Query
          query={ALL_DASHBOARD_ITEMS_QUERY}
          fetchPolicy="network-only"
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <tbody>{data.campaignItems.map(item => <DashboardItem item={item} key={item.id} />)}</tbody>
            );
          }}
        </Query>
    );
  }
}

export default DashboardItems;
export { ALL_DASHBOARD_ITEMS_QUERY };
