
//ads
var script = document.createElement("script");
script.async = true;
script.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3888041590832287");
script.setAttribute("crossorigin", "anonymous");
document.getElementsByTagName("head")[0].appendChild(script); 

//レスポンシブ広告
var ins = document.createElement("ins");
ins.setAttribute("class", "adsbygoogle");
ins.setAttribute("style", "display:block");
ins.setAttribute("data-ad-client", "ca-pub-3888041590832287");
ins.setAttribute("data-ad-slot", "3571148881");
ins.setAttribute("data-ad-format", "auto");
ins.setAttribute("data-full-width-responsive", "true");
document.getElementsByTagName("head")[0].appendChild(ins); 

var scrip2 = document.createElement("script");
scrip2.append("window.onload = function() {(adsbygoogle = window.adsbygoogle || []).push({});}")
ins.after(scrip2);