module.exports = function(args) {
var qcloudSDK = require('./submit'); 
var config = this.config;
var secret_Id = config.tencentcdn.secretId;
var secret_Key = config.tencentcdn.secretKey;
var url = config.url
qcloudSDK.config({
    secretId: secret_Id,
    secretKey: secret_Key
})

qcloudSDK.request('RefreshCdnUrl', {
    'urls.1': url
}, (res) => {
console.log('腾讯云CDN首页刷新推送结果' + res);
// console.log('secret_Id:' + secret_Id);
// console.log('secret_Key:' + secret_Key);
// console.log('url:' + url);
})
};