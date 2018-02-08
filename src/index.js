import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyBHBpmF949mGEfGbpNbTuHuCL_kUp6DQ5Q';

//Novo componente
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'surf'}, (videos) => {
      this.setState({videos});
      //this.setState({videos: videos}) -> quando os nomes da key e do value do objeto são iguais, pode-se condensar a chamada
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
        {/* Passando props pro VideoList */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));