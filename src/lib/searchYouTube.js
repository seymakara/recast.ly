import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options = {key: YOUTUBE_API_KEY, query: 'react', max: 5}, callback) => {

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
