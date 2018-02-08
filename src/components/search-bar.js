import React, { Component } from 'react';
// { Component } pega a classe Component do react e a traz como variavel, podendo ser usada sem React.Component

/* const SearchBar = () => {
  return <input />;
}; */

// Cria uma nova classe chamada SearchBar e dá acesso a todas as funcionalidades da classe de componentes no React
class SearchBar extends Component {
  render() {
    return <input />;
  }
}

export default SearchBar;