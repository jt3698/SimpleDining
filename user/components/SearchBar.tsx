import React from 'react';
import { SearchBar } from 'react-native-elements';

export default class SBar extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = (search: string) => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
      return (
        <SearchBar
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
        />
      );
    }
  }