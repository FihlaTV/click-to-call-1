import React from 'react';

class SearchCandidates extends React.Component {

    state = {
        initialItems: [],
        items: []
    }

    filterList = (event) => {
      let items = this.state.data;
      items = items.filter((item) => {
        return item.name.official_full.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });

      this.setState({data: items});
    }

    resetList = (event) => {
      event.preventDefault();
      this.setState({data: this.props.data});
    }

    componentWillMount = () => {
      this.setState({
          initialItems: this.props.content,
          items: this.props.content,
          data: this.props.data

      })
    }

    render() {
      return (
        <div>

          <input type="text" placeholder="Search" onChange={this.filterList} />
          <a onClick={this.resetList}>RESET</a>
          <div>
            {
                this.state.data.map(function(item) {
                    return (
                        <div key={item.id.bioguide}>
                            {item.name.official_full}
                        </div>
                    )
                })
            }
            </div>
        </div>
      );
    }
};

export default SearchCandidates;