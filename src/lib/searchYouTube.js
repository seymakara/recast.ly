var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
            key: options.key, 
            q: options.query, 
            maxResults: options.max, 
            part: 'snippet',
            videoEmbeddable: 'true',
            type: 'video'
          },
    dataType: 'json',
    success: data => {
                      data = data.items;
                      callback(data);
                    },
    error: function (data) {
      console.error('error: ', data);
    }
  });

};

export default searchYouTube;
