/**
 * Created by Administrator on 8/29/2017.
 */

console.log(window);


console.log(navigator);

//navigator.appName：浏览器名称；
//navigator.appVersion：浏览器版本；
//navigator.language：浏览器设置的语言；
//navigator.platform：操作系统类型；
//navigator.userAgent：浏览器设定的User-Agent字符串。

console.log(screen);

//screen.width：屏幕宽度，以像素为单位；
//screen.height：屏幕高度，以像素为单位；
//screen.colorDepth：返回颜色位数，如8、16、24。
console.log(location);

location.protocol;
location.host;
location.port;
location.pathname;
location.search;
location.hash;


console.log(document);




var menu = document.getElement
menu = document.getElementByIdById('drink-menu');
var drinks = document.getElementsByTagName('dt');
var i, s, menu, drinks;
('drink-menu');
menu.tagName; // 'DL'

drinks = document.getElementsByTagName('dt');
s = '提供的饮料有:';
for (i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
console.log(s);


document.querySelector();
document.querySelectorAll();

var a = document.querySelector("#drink-menu");

var b = document.querySelector(".drink-menu");

var c = document.querySelector("ul");



// console.log(history);





