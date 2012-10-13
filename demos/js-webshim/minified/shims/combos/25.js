jQuery.webshims.register("dom-extend",function(c,i,k,n,m){var x=i.modules,p=/\s*,\s*/,o={},q={},r={},s={},t={},j=c.fn.val,z=function(b,a,d,g,f){return f?j.call(c(b)):j.call(c(b),d)};c.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?j.call(this):c.prop(a,"value",b,"val",!0);if(c.isArray(b))return j.apply(this,arguments);var d=c.isFunction(b);return this.each(function(g){a=this;1===a.nodeType&&(d?(g=b.call(a,g,c.prop(a,"value",m,"val",
!0)),null==g&&(g=""),c.prop(a,"value",g,"val")):c.prop(a,"value",b,"val"))})};var u="_webshimsLib"+Math.round(1E3*Math.random()),y=function(b,a,d){b=b.jquery?b[0]:b;if(!b)return d||{};var g=c.data(b,u);d!==m&&(g||(g=c.data(b,u,{})),a&&(g[a]=d));return a?g&&g[a]:g};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){c.fn[b.name]=function(){return this.map(function(){var a=y(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){o[b]=c[b];c[b]=function(a,d,g,f,e){var w="val"==f,v=!w?o[b]:z;if(!a||!q[d]||1!==a.nodeType||!w&&f&&"attr"==b&&c.attrFn[d])return v(a,d,g,f,e);var A=(a.nodeName||"").toLowerCase(),h=r[A],i="attr"==b&&(!1===g||null===g)?"removeAttr":b,l,j,k;h||(h=r["*"]);h&&(h=h[d]);h&&(l=h[i]);if(l){if("value"==d)j=l.isVal,l.isVal=w;if("removeAttr"===i)return l.value.call(a);if(g===m)return l.get?l.get.call(a):l.value;l.set&&
("attr"==b&&!0===g&&(g=d),k=l.set.call(a,g));if("value"==d)l.isVal=j}else k=v(a,d,g,f,e);if((g!==m||"removeAttr"===i)&&t[A]&&t[A][d]){var n;n="removeAttr"==i?!1:"prop"==i?!!g:!0;t[A][d].forEach(function(d){if(!d.only||(d.only="prop"==b)||"attr"==d.only&&"prop"!=b)d.call(a,g,n,w?"val":i,b)})}return k};s[b]=function(a,d,g){r[a]||(r[a]={});r[a][d]||(r[a][d]={});var f=r[a][d][b],e=function(a,f,c){return f&&f[a]?f[a]:c&&c[a]?c[a]:"prop"==b&&"value"==d?function(a){return g.isVal?z(this,d,a,!1,0===arguments.length):
o[b](this,d,a)}:"prop"==b&&"value"==a&&g.value.apply?function(a){var g=o[b](this,d);g&&g.apply&&(g=g.apply(this,arguments));return g}:function(a){return o[b](this,d,a)}};r[a][d][b]=g;if(g.value===m){if(!g.set)g.set=g.writeable?e("set",g,f):i.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+a;}:c.noop;if(!g.get)g.get=e("get",g,f)}["value","get","set"].forEach(function(a){g[a]&&(g["_sup"+a]=e(a,f))})}});var f=!c.browser.msie||8<parseInt(c.browser.version,10),e=function(){var b=i.getPrototypeOf(n.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(d,g,c){var e=n.createElement(d),w=i.getPrototypeOf(e);if(f&&w&&b!==w&&(!e[g]||!a.call(e,g))){var v=e[g];c._supvalue=function(){return v&&v.apply?v.apply(this,arguments):v};w[g]=c.value}else c._supvalue=function(){var a=y(this,"propValue");return a&&a[g]&&a[g].apply?a[g].apply(this,arguments):a&&a[g]},h.extendValue(d,g,c.value);c.value._supvalue=c._supvalue}}(),h=function(){var b={};i.addReady(function(a,d){var g={},f=function(b){g[b]||(g[b]=c(a.getElementsByTagName(b)),
d[0]&&c.nodeName(d[0],b)&&(g[b]=g[b].add(d)))};c.each(b,function(a,b){f(a);!b||!b.forEach?i.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){g[a].each(b)})});g=null});var a,d=c([]),g=function(d,g){b[d]?b[d].push(g):b[d]=[g];c.isDOMReady&&(a||c(n.getElementsByTagName(d))).each(g)};return{createTmpCache:function(b){c.isDOMReady&&(a=a||c(n.getElementsByTagName(b)));return a||d},flushTmpCache:function(){a=null},content:function(a,b){g(a,function(){var a=c.attr(this,b);null!=a&&c.attr(this,
b,a)})},createElement:function(a,b){g(a,b)},extendValue:function(a,b,d){g(a,function(){c(this).each(function(){y(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),l=function(b,a){if(b.defaultValue===m)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}};if(!b.attr)b.attr={}};c.extend(i,{getID:function(){var b=(new Date).getTime();return function(a){var a=c(a),d=a.attr("id");d||(b++,d="ID-"+b,a.attr("id",d));
return d}}(),extendUNDEFProp:function(b,a){c.each(a,function(a,g){a in b||(b[a]=g)})},createPropDefault:l,data:y,moveToFirstEvent:function(){var b=c._data?"_data":"data";return function(a,d,g){if((a=(c[b](a,"events")||{})[d])&&1<a.length)d=a.pop(),g||(g="bind"),"bind"==g&&a.delegateCount?a.splice(a.delegateCount,0,d):a.unshift(d)}}(),addShadowDom:function(){var b,a,d,g={init:!1,runs:0,test:function(){var a=g.getHeight(),b=g.getWidth();a!=g.height||b!=g.width?(g.height=a,g.width=b,g.handler({type:"docresize"}),
g.runs++,30>g.runs&&setTimeout(g.test,30)):g.runs=0},handler:function(f){clearTimeout(b);b=setTimeout(function(){if("resize"==f.type){var b=c(k).width(),e=c(k).width();if(e==a&&b==d)return;a=e;d=b;g.height=g.getHeight();g.width=g.getWidth()}c.event.trigger("updateshadowdom")},10)},_create:function(){c.each({Height:"getHeight",Width:"getWidth"},function(a,b){var d=n.body,f=n.documentElement;g[b]=function(){return Math.max(d["scroll"+a],f["scroll"+a],d["offset"+a],f["offset"+a],f["client"+a])}})},start:function(){if(!this.init&&
n.body)this.init=!0,this._create(),this.height=g.getHeight(),this.width=g.getWidth(),setInterval(this.test,400),c(this.test),c(k).bind("load",this.test),c(k).bind("resize",this.handler)}};c.event.customEvent.updateshadowdom=!0;return function(a,b,d){d=d||{};a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);var f=c.data(a,u)||c.data(a,u,{}),e=c.data(b,u)||c.data(b,u,{}),h={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];h=c.data(d.shadowFocusElement,
u)||c.data(d.shadowFocusElement,u,h)}}else d.shadowFocusElement=b;f.hasShadow=b;h.nativeElement=e.nativeElement=a;h.shadowData=e.shadowData=f.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){y(this,"shadowData",e.shadowData)});if(d.data)h.shadowData.data=e.shadowData.data=f.shadowData.data=d.data;d=null;i.ready("DOM",function(){g.start()})}}(),propTypes:{standard:function(b){l(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,
""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){l(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}},src:function(){var b=n.createElement("a");b.style.display="none";return function(a,d){l(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var a=this.getAttribute(d),f;if(null==a)return"";b.setAttribute("href",a+"");if(!c.support.hrefNormalized){try{c(b).insertAfter(this),
f=b.getAttribute("href",4)}catch(e){f=b.getAttribute("href",4)}c(b).detach()}return f||b.href}}}}(),enumarated:function(b){l(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var a=(b.attr.get.call(this)||"").toLowerCase();if(!a||-1==b.limitedTo.indexOf(a))a=b.defaultValue;return a}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(p));a.forEach(function(a){i.defineNodeNamesProperty(b,a,{prop:{set:function(b){c.attr(this,a,b)},get:function(){return c.attr(this,
a)||""}}})})},defineNodeNameProperty:function(b,a,d){q[a]=!0;if(d.reflect)i.propTypes[d.propType||"standard"](d,a);["prop","attr","removeAttr"].forEach(function(f){var h=d[f];h&&(h="prop"===f?c.extend({writeable:!0},h):c.extend({},h,{writeable:!0}),s[f](b,a,h),"*"!=b&&i.cfg.extendNative&&"prop"==f&&h.value&&c.isFunction(h.value)&&e(b,a,h),d[f]=h)});d.initAttr&&h.content(b,a);return d},defineNodeNameProperties:function(b,a,d,f){for(var c in a)!f&&a[c].initAttr&&h.createTmpCache(b),d&&!a[c][d]&&(a[c][d]=
{},["value","set","get"].forEach(function(b){b in a[c]&&(a[c][d][b]=a[c][b],delete a[c][b])})),a[c]=i.defineNodeNameProperty(b,c,a[c]);f||h.flushTmpCache();return a},createElement:function(b,a,d){var f;c.isFunction(a)&&(a={after:a});h.createTmpCache(b);a.before&&h.createElement(b,a.before);d&&(f=i.defineNodeNameProperties(b,d,!1,!0));a.after&&h.createElement(b,a.after);h.flushTmpCache();return f},onNodeNamesPropertyModify:function(b,a,d,f){"string"==typeof b&&(b=b.split(p));c.isFunction(d)&&(d={set:d});
b.forEach(function(b){t[b]||(t[b]={});"string"==typeof a&&(a=a.split(p));d.initAttr&&h.createTmpCache(b);a.forEach(function(a){t[b][a]||(t[b][a]=[],q[a]=!0);if(d.set){if(f)d.set.only=f;t[b][a].push(d.set)}d.initAttr&&h.content(b,a)});h.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,d){d||(d={});if(c.isFunction(d))d.set=d;i.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?m:a}},removeAttr:{value:function(){this.removeAttribute(a);
d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(b,a,d){if(b.nodeName){if(d===m)return b=b.attributes[a]||{},d=b.specified?b.value:null,null==d?m:d;"boolean"==typeof d?d?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,d)}},activeLang:function(){var b=[],a={},d,f,e=/:\/\/|^\.*\//,h=function(a,b,d){return b&&d&&-1!==c.inArray(b,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,e.test(d)||(d=i.cfg.basePath+d),i.loader.loadScript(d+b+".js",
function(){a.langObj[b]?(a.loading=!1,v(a,!0)):c(function(){a.langObj[b]&&v(a,!0);a.loading=!1})}),!0):!1},w=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},v=function(a,b){if(a.activeLang!=d&&a.activeLang!==f){var c=x[a.module].options;if(a.langObj[d]||f&&a.langObj[f])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[f],d),w(a.module);else if(!b&&!h(a,d,c)&&!h(a,f,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),w(a.module)}};return function(e){if("string"==
typeof e&&e!==d)d=e,f=d.split("-")[0],d==f&&(f=!1),c.each(b,function(a,b){v(b)});else if("object"==typeof e)if(e.register)a[e.register]||(a[e.register]=[]),a[e.register].push(e),e.callback();else{if(!e.activeLang)e.activeLang="";b.push(e);v(e)}return d}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){i[b]=function(b,f,c,e){"string"==typeof b&&(b=b.split(p));var h={};b.forEach(function(b){h[b]=
i[a](b,f,c,e)});return h}});i.isReady("webshimLocalization",!0)});
(function(c,i){var k=c.webshims.browserVersion;if(!(c.browser.mozilla&&5<k)&&(!c.browser.msie||12>k&&7<k)){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(c,i){c.getAttribute("role")||c.setAttribute("role",i)};c.webshims.addReady(function(k,p){c.each(n,function(i,t){for(var j=c(i,k).add(p.filter(i)),n=0,u=j.length;n<u;n++)m(j[n],t)});if(k===i){var o=i.getElementsByTagName("header")[0],q=i.getElementsByTagName("footer"),r=q.length;
o&&!c(o).closest("section, article")[0]&&m(o,"banner");r&&(o=q[r-1],c(o).closest("section, article")[0]||m(o,"contentinfo"))}})}})(jQuery,document);
(function(c,i,k){var n=i.audio&&i.video,m=!1,x=k.cfg.mediaelement,p=k.bugs,o=function(){k.ready("mediaelement-swf",function(){if(!k.mediaelement.createSWF)k.modules["mediaelement-swf"].test=c.noop,k.reTest(["mediaelement-swf"],n)})},q;if(n){var r=document.createElement("video");i.videoBuffered="buffered"in r;m="loop"in r;k.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));i.videoBuffered||(k.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:i.videoBuffered,d:["dom-support"]}),k.reTest("mediaelement-native-fix"))}if(n&&!x.preferFlash){var s=function(i){var j=i.target.parentNode;!x.preferFlash&&(c(i.target).is("audio, video")||j&&c("source:last",j)[0]==i.target)&&k.ready("DOM mediaelement",function(){q&&o();k.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){q&&!x.preferFlash&&k.mediaelement.createSWF&&!c(i.target).closest("audio, video").is(".nonnative-api-active")?(x.preferFlash=!0,document.removeEventListener("error",
s,!0),c("audio, video").mediaLoad(),k.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+i.target.src)):q||document.removeEventListener("error",s,!0)},20)})})};document.addEventListener("error",s,!0);c("audio, video").each(function(){this.error&&s({target:this})})}p.track=!1;i.track&&function(){if(!p.track)p.track="number"!=typeof c("<track />")[0].readyState;if(!p.track)try{new TextTrackCue(2,3,"")}catch(i){p.track=!0}var j=k.cfg.track,m=function(f){c(f.target).filter("track").each(n)},
n=function(){if(p.track||!j.override&&3==c.prop(this,"readyState"))j.override=!0,k.reTest("track"),document.removeEventListener("error",m,!0),this&&c.nodeName(this,"track")?k.error("track support was overwritten. Please check your vtt including your vtt mime-type"):k.info("track support was overwritten. due to bad browser support")},o=function(){document.addEventListener("error",m,!0);p.track?n():c("track").each(n)};j.override||(k.isReady("track")?o():c(o))}();k.register("mediaelement-core",function(c,
j,k,r,s){q=swfobject.hasFlashPlayerVersion("9.0.115");var f=j.mediaelement,e=function(a,b){var a=c(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var e=a.attr("type");if(e)d.type=e,d.container=c.trim(e.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=f.getTypeForSrc(d.src,b))d.type=e,d.container=e;if(e=a.attr("media"))d.media=e;return d},h=!q&&"postMessage"in k&&n,l=
function(){var a;return function(){!a&&h&&(a=!0,j.loader.loadScript("https://www.youtube.com/player_api"),c(function(){j.polyfill("mediaelement-yt")}))}}(),b=function(){q?o():l()};j.addPolyfill("mediaelement-yt",{test:!h,d:["dom-support"]});f.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};f.mimeTypes.source=c.extend({},f.mimeTypes.audio,f.mimeTypes.video);f.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||
-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;c.each(f.mimeTypes[b],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};f.srces=function(a,b){a=c(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(b)||(b=[b]),b.forEach(function(b){var d=r.createElement("source");"string"==typeof b&&(b={src:b});d.setAttribute("src",b.src);b.type&&d.setAttribute("type",b.type);b.media&&d.setAttribute("media",b.media);a.append(d)});
else{var b=[],d=a[0].nodeName.toLowerCase(),f=e(a,d);f.src?b.push(f):c("source",a).each(function(){f=e(this,d);f.src&&b.push(f)});return b}};c.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==s&&(c(this).removeAttr("poster"),b&&c.attr(this,"poster",b));f.srces(this,a);c(this).mediaLoad()})};f.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
f.canThirdPlaySrces=function(a,b){var d="";if(q||h)a=c(a),b=b||f.srces(a),c.each(b,function(a,b){if(b.container&&b.src&&(q&&-1!=f.swfMimeTypes.indexOf(b.container)||h&&"video/youtube"==b.container))return d=b,!1});return d};var a={};f.canNativePlaySrces=function(b,d){var e="";if(n){var b=c(b),g=(b[0].nodeName||"").toLowerCase();if(!a[g])return e;d=d||f.srces(b);c.each(d,function(d,c){if(c.type&&a[g].prop._supvalue.call(b[0],c.type))return e=c,!1})}return e};f.setError=function(a,b){b||(b="can't play sources");
c(a).pause().data("mediaerror",b);j.warn("mediaelementError: "+b);setTimeout(function(){c(a).data("mediaerror")&&c(a).trigger("mediaerror")},1)};var d=function(){var a;return function(c,e,g){j.ready(q?"mediaelement-swf":"mediaelement-yt",function(){f.createSWF?f.createSWF(c,e,g):a||(a=!0,b(),d(c,e,g))});!a&&h&&!f.createSWF&&l()}}(),g=function(a,b,c,e,h){c||!1!==c&&b&&"third"==b.isActive?(c=f.canThirdPlaySrces(a,e))?d(a,c,b):h?f.setError(a,!1):g(a,b,!1,e,!0):(c=f.canNativePlaySrces(a,e))?b&&"third"==
b.isActive&&f.setActive(a,"html5",b):h?(f.setError(a,!1),b&&"third"==b.isActive&&f.setActive(a,"html5",b)):g(a,b,!0,e,!0)},C=/^(?:embed|object|datalist)$/i,B=function(a,b){var d=j.data(a,"mediaelementBase")||j.data(a,"mediaelementBase",{}),e=f.srces(a),h=a.parentNode;clearTimeout(d.loadTimer);c.data(a,"mediaerror",!1);if(e.length&&h&&!(1!=h.nodeType||C.test(h.nodeName||"")))b=b||j.data(a,"mediaelement"),g(a,b,x.preferFlash||s,e)};c(r).bind("ended",function(a){var b=j.data(a.target,"mediaelement");
(!m||b&&"html5"!=b.isActive||c.prop(a.target,"loop"))&&setTimeout(function(){!c.prop(a.target,"paused")&&c.prop(a.target,"loop")&&c(a.target).prop("currentTime",0).play()},1)});m||j.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var d=j.defineNodeNameProperty(b,"load",{prop:{value:function(){var a=j.data(this,"mediaelement");B(this,a);n&&(!a||"html5"==a.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});a[b]=j.defineNodeNameProperty(b,
"canPlayType",{prop:{value:function(d){var e="";n&&a[b].prop._supvalue&&(e=a[b].prop._supvalue.call(this,d),"no"==e&&(e=""));!e&&q&&(d=c.trim((d||"").split(";")[0]),-1!=f.swfMimeTypes.indexOf(d)&&(e="maybe"));return e}}})});j.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=j.data(a,"mediaelementBase")||j.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){B(a);a=null},9)}});k=function(){j.addReady(function(a,b){c("video, audio",
a).add(b.filter("video, audio")).each(function(){c.browser.msie&&8<j.browserVersion&&c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():B(this);if(n){var a,b,d=this,f=function(){var a=c.prop(d,"buffered");if(a){for(var b="",f=0,e=a.length;f<e;f++)b+=a.end(f);return b}},e=function(){var a=f();a!=b&&(b=a,c(d).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(d){"progress"==
d.type&&(b=f());clearTimeout(a);a=setTimeout(e,999)}).bind("emptied stalled mediaerror abort suspend",function(d){"emptied"==d.type&&(b=!1);clearTimeout(a)})}})})};i.track&&!p.track&&j.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});n?(j.isReady("mediaelement-core",!0),k(),j.ready("WINDOWLOAD mediaelement",b)):j.ready("mediaelement-swf",k);c(function(){j.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("track",function(c,i,k,n){var m=i.mediaelement;(new Date).getTime();var x={subtitles:1,captions:1,descriptions:1},p=Modernizr.ES5&&Modernizr.objectAccessor,o=function(c){var e={};c.addEventListener=function(c,f){e[c]&&i.error("always use $.bind to the shimed event: "+c+" already bound fn was: "+e[c]+" your fn was: "+f);e[c]=f};c.removeEventListener=function(c,f){e[c]&&e[c]!=f&&i.error("always use $.bind/$.unbind to the shimed event: "+c+" already bound fn was: "+e[c]+" your fn was: "+
f);e[c]&&delete e[c]};return c},q={getCueById:function(c){for(var e=null,h=0,i=this.length;h<i;h++)if(this[h].id===c){e=this[h];break}return e}},r={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(c){if(this.cues){var e=this.cues[this.cues.length-1];e&&e.startTime>c.startTime&&i.error("cue startTime higher than previous cue's startTime")}else this.cues=
m.createCueList();c.track&&c.track.removeCue&&c.track.removeCue(c);c.track=this;this.cues.push(c)},removeCue:function(c){var e=this.cues||[],h=0,l=e.length;if(c.track!=this)i.error("cue not part of track");else{for(;h<l;h++)if(e[h]===c){e.splice(h,1);c.track=null;break}c.track&&i.error("cue not part of track")}},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},s=["kind","label","srclang"],t={srclang:"language"},j=Function.prototype.call.bind(Object.prototype.hasOwnProperty),
z=function(f,e){var h=[],l=[],b=[],a,d;f||(f=i.data(this,"mediaelementBase")||i.data(this,"mediaelementBase",{}));if(!e)f.blockTrackListUpdate=!0,e=c.prop(this,"textTracks"),f.blockTrackListUpdate=!1;clearTimeout(f.updateTrackListTimer);c("track",this).each(function(){var a=c.prop(this,"track");b.push(a);-1==e.indexOf(a)&&l.push(a)});if(f.scriptedTextTracks)for(a=0,d=f.scriptedTextTracks.length;a<d;a++)b.push(f.scriptedTextTracks[a]),-1==e.indexOf(f.scriptedTextTracks[a])&&l.push(f.scriptedTextTracks[a]);
for(a=0,d=e.length;a<d;a++)-1==b.indexOf(e[a])&&h.push(e[a]);if(h.length||l.length){e.splice(0);for(a=0,d=b.length;a<d;a++)e.push(b[a]);for(a=0,d=h.length;a<d;a++)c([e]).triggerHandler(c.Event({type:"removetrack",track:e,track:h[a]}));for(a=0,d=l.length;a<d;a++)c([e]).triggerHandler(c.Event({type:"addtrack",track:e,track:l[a]}));(f.scriptedTextTracks||h.length)&&c(this).triggerHandler("updatetrackdisplay")}},u=function(f,e){e||(e=i.data(f,"trackData"));if(e&&!e.isTriggering)e.isTriggering=!0,setTimeout(function(){(e.track||
{}).readyState?c(f).closest("audio, video").triggerHandler("updatetrackdisplay"):c(f).triggerHandler("checktrackmode");e.isTriggering=!1},1)},y=c("<div />")[0];k.TextTrackCue=function(c,e,h){3!=arguments.length&&i.error("wrong arguments.length for TextTrackCue.constructor");this.startTime=c;this.endTime=e;this.text=h;this.id="";this.pauseOnExit=!1;o(this)};k.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var c="",e="",h=n.createDocumentFragment(),i;if(!j(this,
"getCueAsHTML"))i=this.getCueAsHTML=function(){var b,a;if(c!=this.text){c=this.text;e=m.parseCueTextToHTML(c);y.innerHTML=e;for(b=0,a=y.childNodes.length;b<a;b++)h.appendChild(y.childNodes[b].cloneNode(!0))}return h.cloneNode(!0)};return i?i.apply(this,arguments):h.cloneNode(!0)},track:null,id:""};m.createCueList=function(){return c.extend([],q)};m.parseCueTextToHTML=function(){var c=/(<\/?[^>]+>)/ig,e=/^(?:c|v|ruby|rt|b|i|u)/,h=/\<\s*\//,i=function(a,b,c,e){h.test(e)?a="</"+a+">":(c.splice(0,1),
a="<"+a+" "+b+'="'+c.join(" ").replace(/\"/g,"&#34;")+'">');return a},b=function(a){var b=a.replace(/[<\/>]+/ig,"").split(/[\s\.]+/);b[0]&&(b[0]=b[0].toLowerCase(),e.test(b[0])?"c"==b[0]?a=i("span","class",b,a):"v"==b[0]&&(a=i("q","title",b,a)):a="");return a};return function(a){return a.replace(c,b)}}();m.loadTextTrack=function(f,e,h,l){var b=h.track,a=function(){var d=c.prop(e,"src"),g,h;if("disabled"!=b.mode&&d&&c.attr(e,"src")&&(c(f).unbind("play playing timeupdate updatetrackdisplay",a),c(e).unbind("checktrackmode",
a),!b.readyState)){g=function(){b.readyState=3;b.cues=null;b.activeCues=b.shimActiveCues=b._shimActiveCues=null;c(e).triggerHandler("error")};b.readyState=1;try{b.cues=m.createCueList(),b.activeCues=b.shimActiveCues=b._shimActiveCues=m.createCueList(),h=c.ajax({dataType:"text",url:d,success:function(a){"text/vtt"!=h.getResponseHeader("content-type")&&i.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt");m.parseCaptions(a,b,function(a){a&&"length"in
a?(b.readyState=2,c(e).triggerHandler("load"),c(f).triggerHandler("updatetrackdisplay")):g()})},error:g})}catch(l){g(),i.warn(l)}}};b.readyState=0;b.shimActiveCues=null;b._shimActiveCues=null;b.activeCues=null;b.cues=null;c(f).unbind("play playing timeupdate updatetrackdisplay",a);c(e).unbind("checktrackmode",a);c(f).bind("play playing timeupdate updatetrackdisplay",a);c(e).bind("checktrackmode",a);if(l)b.mode=x[b.kind]?"showing":"hidden",a()};m.createTextTrack=function(f,e){var h,l;if(e.nodeName&&
(l=i.data(e,"trackData")))u(e,l),h=l.track;if(!h)h=o(i.objectCreate(r)),p||s.forEach(function(b){var a=c.prop(e,b);a&&(h[t[b]||b]=a)}),e.nodeName?(p&&s.forEach(function(b){i.defineProperty(h,t[b]||b,{get:function(){return c.prop(e,b)}})}),l=i.data(e,"trackData",{track:h}),m.loadTextTrack(f,e,l,c.prop(e,"default")&&c(e).siblings("track[default]").andSelf()[0]==e)):(p&&s.forEach(function(b){i.defineProperty(h,t[b]||b,{value:e[b],writeable:!1})}),h.cues=m.createCueList(),h.activeCues=h._shimActiveCues=
h.shimActiveCues=m.createCueList(),h.mode="hidden",h.readyState=2);return h};m.parseCaptionChunk=function(){var c=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,e=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,h=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,l=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(b){var a,d,g,j;if(e.exec(b)||h.exec(b)||l.exec(b))return null;for(b=b.split(/\n/g);!b[0].replace(/\s+/ig,"").length&&0<b.length;)b.shift();for(b[0].match(/^\s*[a-z0-9-\_]+\s*$/ig)&&
(g=""+b.shift().replace(/\s*/ig,""));0<b.length;){if(j=c.exec(b[0]))d=j.slice(1),a=parseInt(3600*(d[0]||0),10)+parseInt(60*(d[1]||0),10)+parseInt(d[2]||0,10)+parseFloat("0."+(d[3]||0)),d=parseInt(3600*(d[4]||0),10)+parseInt(60*(d[5]||0),10)+parseInt(d[6]||0,10)+parseFloat("0."+(d[7]||0));b=b.slice(0,0).concat(b.slice(1));break}if(!a&&!d)return i.warn("couldn't extract time information: "+[a,d,b.join("\n"),g].join(" ; ")),null;b=b.join("\n");a=new TextTrackCue(a,d,b);if(g)a.id=g;return a}}();m.parseCaptions=
function(c,e,h){m.createCueList();var l,b,a,d,g;c?(a=/^WEBVTT(\s*FILE)?/ig,b=function(j,k){for(;j<k;j++){l=c[j];if(a.test(l))g=!0;else if(l.replace(/\s*/ig,"").length){if(!g){i.error("please use WebVTT format. This is the standard");h(null);break}(l=m.parseCaptionChunk(l,j))&&e.addCue(l)}if(d<(new Date).getTime()-30){j++;setTimeout(function(){d=(new Date).getTime();b(j,k)},90);break}}j>=k&&(g||i.error("please use WebVTT format. This is the standard"),h(e.cues))},c=c.replace(/\r\n/g,"\n"),setTimeout(function(){c=
c.replace(/\r/g,"\n");setTimeout(function(){d=(new Date).getTime();c=c.split(/\n\n+/g);b(0,c.length)},9)},9)):i.error("Required parameter captionData not supplied.")};m.createTrackList=function(c,e){e=e||i.data(c,"mediaelementBase")||i.data(c,"mediaelementBase",{});if(!e.textTracks)e.textTracks=[],i.defineProperties(e.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),o(e.textTracks);return e.textTracks};Modernizr.track||(i.defineNodeNamesBooleanProperty(["track"],"default"),i.reflectProperties(["track"],
["srclang","label"]),i.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}}));i.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(c){var e=i.data(this,"trackData");this.setAttribute("data-kind",c);if(e)e.attrKind=c},get:function(){var c=i.data(this,"trackData");return c&&"attrKind"in c?c.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}});
c.each(s,function(f,e){var h=t[e]||e;i.onNodeNamesPropertyModify("track",e,function(){var f=i.data(this,"trackData"),b=this;if(f)"kind"==e&&u(this,f),p||(f.track[h]=c.prop(this,e)),clearTimeout(f.changedTrackPropTimer),f.changedTrackPropTimer=setTimeout(function(){c(b).trigger("updatesubtitlestate")},1)})});i.onNodeNamesPropertyModify("track","src",function(f){if(f){var f=i.data(this,"trackData"),e;f&&(e=c(this).closest("video, audio"),e[0]&&m.loadTextTrack(e,this,f))}});i.defineNodeNamesProperties(["track"],
{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(c.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return m.createTextTrack(c(this).closest("audio, video")[0],this)},writeable:!1}},"prop");i.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var c=i.data(this,"mediaelementBase")||i.data(this,"mediaelementBase",{}),e=m.createTrackList(this,c);c.blockTrackListUpdate||z.call(this,c,e);return e},
writeable:!1},addTextTrack:{value:function(c,e,h){c=m.createTextTrack(this,{kind:c||"",label:e||"",srclang:h||""});e=i.data(this,"mediaelementBase")||i.data(this,"mediaelementBase",{});if(!e.scriptedTextTracks)e.scriptedTextTracks=[];e.scriptedTextTracks.push(c);z.call(this);return c}}},"prop");c(n).bind("emptied ended updatetracklist",function(f){if(c(f.target).is("audio, video")){var e=i.data(f.target,"mediaelementBase");if(e)clearTimeout(e.updateTrackListTimer),e.updateTrackListTimer=setTimeout(function(){z.call(f.target,
e)},0)}});i.addReady(function(f,e){var h=e.filter("video, audio, track").closest("audio, video");c("video, audio",f).add(h).each(function(){z.call(this)}).each(function(){if(Modernizr.track){var e=this.textTracks;c.prop(this,"textTracks").length!=e.length&&i.error("textTracks couldn't be copied");c("track",this).each(function(){var b=c.prop(this,"track"),a=this.track,d,e;if(a){d=c.prop(this,"kind");e=a.readyState||this.readyState;if(a.mode||e)b.mode=a.mode;if("descriptions"!=d)a.mode="string"==typeof a.mode?
"disabled":0,this.kind="metadata",c(this).attr({kind:d})}}).bind("load error",function(b){b.originalEvent&&b.stopImmediatePropagation()})}});h.each(function(){var c=this,b=i.data(c,"mediaelementBase");if(b)clearTimeout(b.updateTrackListTimer),b.updateTrackListTimer=setTimeout(function(){z.call(c,b)},9)})});Modernizr.track&&c("video, audio").trigger("trackapichange")});