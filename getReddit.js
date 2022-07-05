// import fetch from 'node-fetch';
const fetch = require('node-fetch');

let getMemes = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(resultData => {
      let result = resultData.data.children;
      for (x = 0; x < result.length; x++) {
        let video = result[x].data.is_video;
        let imgUrl = result[x].data.url_overridden_by_dest;

        if (!video) {
          console.log(imgUrl)
        }
      }
    });
}

let getFad = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(resultData => {
      let result = resultData.data.children;
      for (x = 0; x < result.length; x++) {
        var titles = [];
        let title = result[x].data.title;
        let isAd = result[x].data.is_created_from_ads_ui;
        if (title.toLowerCase().includes("f4m") && isAd === false) {
          const age = parseInt(title.substring(0, 2));
          if (age) {

            post = {
              title: result[x].data.title,
              caption: result[x].data.selftext,
              posted_by: 'https://www.reddit.com/user/' + result[x].data.author,
              post_link: 'https://www.reddit.com' + result[x].data.permalink,
            };
          }
          return titles.push(post);
        }
      }
    });
}

getFad('http://www.reddit.com/r/foreveralonedating.json')

module.exports = {
  getMemes,
  getFad
}