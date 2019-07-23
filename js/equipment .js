var sUserAgent = navigator.userAgent.toLowerCase();
// console.log(sUserAgent);

let PCurl = 'webPage.html';
let Moburl = 'mobilePage.html'

let now = window.location.href;
let nowUrl = now.substr(now.lastIndexOf("/") + 1);
// console.log('当前加载的文件：',nowUrl)

var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp = sUserAgent.match(/midp/i) == "midp";
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
    if (Moburl != nowUrl) {
        window.location.href = "mobilePage.html";
    }
} else {
    if (PCurl != nowUrl) {
        window.location.href = "webPage.html";
    }
}

