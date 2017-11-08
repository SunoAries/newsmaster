const URL = 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=&udid='

async function getNews() {
    try {
        let response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Cache-Control': 'no-cache'
            }
        });
        if (!response.ok) new Error('错误' + response.status);
        return await response.json();
    }catch (e){
        console.log(e)
    }
}

export default getNews
