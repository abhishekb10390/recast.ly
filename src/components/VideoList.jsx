
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

// class VideoListItems extends React.Component {
//   constructor(props) {
//     super(props);
//   } 
//   render() {
//     return (   {this.props.title}</em> {this.props.description}</h5></div>);
//   } 
// }
var VideoList = (props) => (
  
  <div className="video-list">
    {props.videos.map((video, index) =>
      <VideoListEntry key={index} video={video} onClick={props.onClick} />
    )}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


