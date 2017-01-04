import React,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAhLDMemeA2q0k_Zpwlj1vRJSVu4Gk4q4o';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos:[]};
    YTSearch({key:API_KEY, term:'Surfboard'}, (videos) => {
      this.setState({videos})
    });

  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
