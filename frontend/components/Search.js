import React from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';


const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    campaignItems(where: { title_contains: $searchTerm }) {
      id
      title
    }
  }
`;

function routeToItem(item) {
  Router.push({
    pathname: '/item',
    query: {
      id: item.id,
    },
  });
}

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false,

  }
  onChange = debounce( async (e, client) => {
    // turn loading on
    this.setState({loading: true});
    // manually trigger apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    console.log(res);
    this.setState({
      items: res.data.campaignItems,
      loading: false
    });
  }, 350);

  render() {
    return (
      <SearchStyles>
        <Downshift>
          {({getInputProps, getItemProps, isOpen, inputValue, highlightedIndex}) => (
        <div>
          <ApolloConsumer>
            {(client) => (
              <input
                {...getInputProps({
                  type: "search",
                  placeholder: "Search",
                  id: "search",
                  className: this.state.loading ? 'loading' : '',
                  onChange: e => {
                      e.persist();
                      this.onChange(e, client);
                    }
                  }
                )}
              />
            )}
          </ApolloConsumer>
          { isOpen && (
            <DropDown>
              {this.state.items.map((item, index) => (
                console.log(item)
                // <DropDownItem
                //   {...getItemProps({item})}
                //   key={item.id}
                //   highlighted={index === highlightedIndex}
                // >
                //   {item.title}
                // </DropDownItem>
              ))}
            </DropDown>
          )}
        </div>
        )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;
