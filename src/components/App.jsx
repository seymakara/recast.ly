import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import exampleVideoData from "../data/exampleVideoData.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  video: exampleVideoData[0], 
                  videos: exampleVideoData
                };
  }

  onClickHandler(event, video) {
    this.setState({
      video // ES6 version of video: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
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


