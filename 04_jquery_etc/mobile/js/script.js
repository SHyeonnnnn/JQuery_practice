let deviceAgent = navigator.userAgent.toLowerCase();

var isTouchDevice = Modernizr.touch ||
(deviceAgent.match(/(iphone|ipod|ipad)/) ||
deviceAgent.match(/(android)/)  ||
deviceAgent.match(/(iemobile)/) ||
deviceAgent.match(/iphone/i) ||
deviceAgent.match(/ipad/i) ||
deviceAgent.match(/ipod/i) ||
deviceAgent.match(/blackberry/i) ||
deviceAgent.match(/bada/i));


if (isTouchDevice) {
    location.href='http://shyeonn.dothome.co.kr/mobile/mobile/'
  } else {
    // not-supported
  }