const 今日头条 =  'http://is.snssdk.com/api/news/feed/v51/=android '
function getNews() {
  return  fetch(今日头条)
        .then((response) => response.json())
        .then((responseData) => {
            return responseData
        })
}
export default {
    getNews:getNews
}