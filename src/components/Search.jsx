class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(props) {
    
    var query = document.getElementById('input').value;
    var options = {};
    options.query = query;
    options.max = 5;
    options.key = window.YOUTUBE_API_KEY;
  
    searchYouTube(options, this.props.updateVideoList);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" id="input" type="text" />
        <button className="btn hidden-sm-down" onClick={ this.handleUserInput } >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
