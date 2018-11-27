var searchYouTube = (options, callback) => {

  console.log("options", options)

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {key: options.key, q: options.query, maxResults: options.max},
    dataType: 'json',
    success: data => {
                      callback(data)},
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('error: ', data);
    }
  });

};

export default searchYouTube;
