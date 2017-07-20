var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: options.query,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    },
    dataType: 'json',
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.error('failed to search', data);
    } 
  });
};
window.searchYouTube = searchYouTube;
