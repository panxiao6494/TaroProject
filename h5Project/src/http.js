import Taro from "@tarojs/taro";
const ApiHost = "https://www.qyino.com/huazun_liquor_uat/"
const $httpRequest = function (method, url, params = {}) {
  //请求头设置
  let contentType = "application/x-www-form-urlencoded";
  let token = '';
  return Taro.request({
    method,
    url: ApiHost + url,
    params,
    header: { 'content-type': contentType },
    success: (res) => {
      console.log(url, res)
    },
    fail: () => {
      console.log('请求超时')
    }
  })
};
export default $httpRequest;
