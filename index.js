const TikTokScraper = require('./build/index.js');


(async () => {
    try {
        const videoMeta = await TikTokScraper.getVideoMeta('https://www.tiktok.com/@karthiksunny100/video/7137578195238309126', {
            //useTestEndpoints: true,
			sessionList: ['sid_tt=f8950798d8a47d3ed03fbfaee4b8d267;']
		});
        videoMeta.collector[0].comments.forEach(function(comment) {
            console.log(comment)
        })
    } catch (error) {
        console.log(error);
    }
})();