import React, {Component} from 'react';
// { Component } pega a classe Component do react e a traz como variavel, podendo ser usada sem React.Component

// Cria uma nova classe chamada SearchBar e dá acesso a todas as funcionalidades da classe de componentes no React
class SearchBar extends Component {
  // A função constructor é a primeira e unica a ser chamada automaticamente quando uma nova instancia da classe (no caso, SearchBar) é criada
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})} />
        {/* toda vez que o valor do input muda, ele atualiza o estado da classe. */}
      </div>
    );
  }
}

export default SearchBar;