class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      allVideos: window.exampleVideoData,
    };
    this.toggleClick = this.toggleClick.bind(this);
    this.updateVideoList = this.updateVideoList.bind(this);
  }
  toggleClick(currentVideo) {
    this.setState({
      currentVideo: currentVideo
    });    
  }
  updateVideoList(data) {
    this.setState ({
      allVideos: data.items, 
      currentVideo: data.items[0]
    });      
  } 
  componentDidMount() {
    this.selector('manchester');
  }
    
  selector(string) {
    var options = {};
    options.query = string;
    options.max = 5;
    options.key = window.YOUTUBE_API_KEY; 
    this.props.searchYouTube(options, this.updateVideoList); 
  }    
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em></em> <Search handleSearch={this.selector.bind(this)} /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5> <VideoPlayer video={this.state.currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5> <VideoList videos={this.state.allVideos} onClick={this.toggleClick} /></h5></div>
          </div>
        </div>
      </div>  
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//ReactDOM.render(<App/>, document.getElementByID('app'));
