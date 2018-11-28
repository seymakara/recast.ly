import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import exampleVideoData from "../data/exampleVideoData.js";
import YOUTUBE_API_KEY from '../config/youtube.js';
import blankData from "../data/blankData.js";


class App extends React.Component {
  constructor(props) {
    // App.props = props;
    super(props);
    this.state = {
                  video: blankData.video, 
                  videos: [blankData.video],
                  autoPlay: false
                };
  }

  componentDidMount() {
   this.props.searchYouTube(undefined, (data) => this.setState({
    videos : data,
    video: data[0]  
   }));
  }
  
  onClickHandler(event, video) {
    this.setState({
      video // ES6 version of video: video
    });
  }

  onTypeHandler(event){
    clearTimeout(blankData.debounceTimeout);
    var searchInput = event.target.value; 
    var apiSearch = (input) => {
        this.props.searchYouTube({key: YOUTUBE_API_KEY, query: input, max: 5}, (data) => this.setState({
          videos : data,
          video: data[0]  
        }));
    }
    blankData.debounceTimeout = setTimeout(() => apiSearch(searchInput), 500);
  }

  ToggleAutoPlay(event) {
    this.setState({
      autoPlay: !this.state.autoPlay 
    });
  }

  render() {

    var style = this.state.autoPlay ? {backgroundColor: 'green'} : {backgroundColor: 'red'};

    return (
      <div>
        <button style={style} onClick={this.ToggleAutoPlay.bind(this)}>Toggle auto-play</button>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onTypeHandler={this.onTypeHandler.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer autoPlay={this.state.autoPlay} video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList onClickHandler={this.onClickHandler.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


