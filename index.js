const TikTokScraper = require('./build/index.js');


(async () => {
    try {
        const videoMeta = await TikTokScraper.getVideoMeta('https://www.tiktok.com/@karthiksunny100/video/7137578195238309126', {});
        console.log(videoMeta);
    } catch (error) {
        console.log(error);
    }
})();