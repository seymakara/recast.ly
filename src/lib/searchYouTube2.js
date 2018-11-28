import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube2 = (options = {key: YOUTUBE_API_KEY, id: 'Ys7-6_t7OEQ', max: 50}, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    type: 'GET',
    data: {
            key: options.key, 
            maxResults: options.max, 
            part: 'statistics',
            id: options.id
          },
    dataType: 'json',
    success: data => {
                      data = data.items[0].statistics;
                      callback(data);
                    },
    error: function (data) {
      console.error('error: ', data);
    }
  });

};

export default searchYouTube2;
