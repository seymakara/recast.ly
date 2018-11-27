import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import exampleVideoData from "../data/exampleVideoData.js";
import YOUTUBE_API_KEY from '../config/youtube.js';

var video = {
  kind: '',
  etag: '',
  id: {
    kind: '',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 120,
        height: 90
      },
      medium: {
        url: '',
        width: 320,
        height: 180
      },
      high: {
        url: '',
        width: 480,
        height: 360
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
};

var debounceTimeout = null;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  video: video, 
                  videos: [video]
                };
    //this.debounceTimeout = null;
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
    clearTimeout(debounceTimeout);
    var searchInput = event.target.value; 
    var apiSearch = (input) => {
        this.props.searchYouTube({key: YOUTUBE_API_KEY, query: input, max: 5}, (data) => this.setState({
          videos : data,
          video: data[0]  
        }));
    }
    debounceTimeout = setTimeout(() => apiSearch(searchInput), 0);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onTypeHandler={this.onTypeHandler.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
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


