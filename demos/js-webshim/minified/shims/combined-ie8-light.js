(function(b,o){if(!(!b.attachEvent||window.Modernizr)){var C=o.createElement("div");C.innerHTML="<z>i</z>";C.childNodes.length!==1&&function(){function s(g,k){if(l[g])l[g].styleSheet.cssText+=k;else{var m=w[t],y=o[A]("style");y.media=g;m.insertBefore(y,m[t]);l[g]=y;s(g,k)}}function q(g,k){for(var m=RegExp("\\b("+i+")\\b(?!.*[;}])","gi"),y=function(E){return".iepp_"+E},B=-1;++B<g.length;){k=g[B].media||k;q(g[B].imports,k);s(k,g[B].cssText.replace(m,y))}}for(var w=o.documentElement,j=o.createDocumentFragment(),
l={},i="abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/ /g,"|"),d=i.split("|"),f=[],p=-1,t="firstChild",A="createElement";++p<d.length;){o[A](d[p]);j[A](d[p])}j=j.appendChild(o[A]("div"));b.attachEvent("onbeforeprint",function(){for(var g,k=o.getElementsByTagName("*"),m,y,B=RegExp("^"+i+"$","i"),E=-1;++E<k.length;)if((g=k[E])&&(y=g.nodeName.match(B))){m=RegExp("^\\s*<"+y+"(.*)\\/"+y+">\\s*$","i");j.innerHTML=
g.outerHTML.replace(/\r|\n/g," ").replace(m,g.currentStyle.display=="block"?"<div$1/div>":"<span$1/span>");m=j.childNodes[0];m.className+=" iepp_"+y;m=f[f.length]=[g,m];g.parentNode.replaceChild(m[1],m[0])}q(o.styleSheets,"all")});b.attachEvent("onafterprint",function(){for(var g=-1,k;++g<f.length;)f[g][1].parentNode.replaceChild(f[g][0],f[g][1]);for(k in l)w[t].removeChild(l[k]);l={};f=[]})}()}})(this,document);
(function(b){var o=document,C,s;b.webshims.fixHTML5=function(q){if(typeof q!="string")return q;if(!s){C=o.body;s=o.createElement("div");s.style.display="none"}var w=s.cloneNode(false);C.appendChild(w);w.innerHTML=q;C.removeChild(w);return w.childNodes}})(jQuery);
(function(b){if(!navigator.geolocation){var o=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},C=0;navigator.geolocation=function(){var s,q={getCurrentPosition:function(w,j,l){var i=function(){clearTimeout(d);if(!(s||!window.google||!google.loader||!google.loader.ClientLocation)){var f=google.loader.ClientLocation;s={coords:{latitude:f.latitude,longitude:f.longitude,altitude:null,accuracy:43E3,altitudeAccuracy:null,
heading:parseInt("NaN",10),velocity:null},address:b.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},f.address)}}if(s)w(b.extend(s,{timestamp:(new Date).getTime()}));else j&&j({code:2,message:"POSITION_UNAVAILABLE"})},d;if(!window.google||!google.loader){if(b.webshims.modules.geolocation.options.destroyWrite){document.write=o;document.writeln=o}b(document).one("google-loader",i);b.webshims.loader.loadScript("http://www.google.com/jsapi",false,"google-loader");if(l&&l.timeout)d=
setTimeout(function(){b(document).unbind("google-loader",i);j&&j({code:3,message:"TIMEOUT"})},l.timeout)}else setTimeout(i,1)},clearWatch:b.noop};q.watchPosition=function(w,j,l){q.getCurrentPosition(w,j,l);C++;return C};return q}()}})(jQuery);
jQuery.webshims.ready("es5",function(b,o,C,s,q){var w=b.support,j=function(g){g=b(g);return(g.data("inputUIReplace")||{visual:g}).visual},l={checkbox:1,radio:1},i=b([]),d=function(g){g=b(g);return l[g[0].type]&&g[0].name?b(s.getElementsByName(g[0].name)).not(g[0]):i};b.extend(b.expr.filters,{valid:function(g){return(b.attr(g,"validity")||{valid:true}).valid},invalid:function(g){return!b.expr.filters.valid(g)},willValidate:function(g){return b.attr(g,"willValidate")}});var f=b.attr,p={selectedIndex:1,
value:1,checked:1,disabled:1,readonly:1},t;b.attr=function(g,k,m){if(g.form&&p[k]&&m!==q&&b(g).hasClass("form-ui-invalid")){var y=f.apply(this,arguments);if(b.expr.filters.valid(g)){j(g).removeClass("form-ui-invalid");k=="checked"&&m&&d(g).removeClass("form-ui-invalid")}return y}return f.apply(this,arguments)};b(document).bind("focusout change refreshValidityStyle",function(g){if(!(t||!g.target||!g.target.form)){var k=b.attr(g.target,"html5element")||g.target;if(b.attr(k,"willValidate")){var m,y;
if(b.expr.filters.valid(g.target)){m="form-ui-valid";y="form-ui-invalid";l[g.target.type]&&g.target.checked&&d(k).removeClass(y)}else{m="form-ui-invalid";y="form-ui-valid";l[g.target.type]&&!g.target.checked&&d(k).removeClass(y)}j(k).addClass(m).removeClass(y);t=true;setTimeout(function(){t=false},9)}else j(k).removeClass("form-ui-invalid form-ui-valid")}});o.triggerInlineForm=function(){var g=function(k){if(typeof k!="string"||k.indexOf("-")!==-1||k.indexOf(".")!==-1||k.indexOf('"')!==-1)return"";
return"var "+k+' = this.form["'+k+'"];'};return function(k,m){var y=k["on"+m]||k.getAttribute("on"+m)||"",B;m=b.Event({type:m,target:k[0],currentTarget:k[0]});if(y&&typeof y=="string"&&k.form&&k.form.elements){var E="";B=0;for(var K=k.form.elements,x=K.length;B<x;B++){var D=K[B].name,F=K[B].id;if(D)E+=g(D);if(F&&F!==D)E+=g(F)}B=function(){eval(E+y)}.call(k,m)}b(k).trigger(m);return B}}();var A=function(){o.scrollRoot=b.browser.webkit||s.compatMode=="BackCompat"?b(s.body):b(s.documentElement)};A();
b(A);o.validityAlert=function(){var g=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",k={hideDelay:5E3,showFor:function(x,D,F){x=b(x);var I=j(x);K();k.clear();this.getMessage(x,D);this.position(I);this.show();if(this.hideDelay)y=setTimeout(B,this.hideDelay);F||this.setFocus(I,x[0])},setFocus:function(x,D){var F=b("input, select, textarea, .ui-slider-handle",x).filter(":visible:first");F[0]||(F=x);var I=o.scrollRoot.scrollTop(),J=F.offset().top,v;m.attr("for",o.getID(F));if(I>J){if((v=
D.id&&b("label[for="+D.id+"]",D.form).offset())&&v.top<J)J=v.top;o.scrollRoot.animate({scrollTop:J-5},{queue:false,duration:Math.max(Math.min(450,(I-J)*2),140)})}F.focus();o.scrollRoot.scrollTop(I);b(s).bind("focusout.validityalert",B)},getMessage:function(x,D){b("> span",m).text(D||x.attr("validationMessage"))},position:function(x){var D=x.offset();D.top+=x.outerHeight();m.css(D)},show:function(){m.css("display")==="none"?m.fadeIn():m.fadeTo(400,1)},hide:function(){k.clear();m.fadeOut()},clear:function(){clearTimeout(y);
b(s).unbind("focusout.validityalert");m.stop().removeAttr("for")},alert:b("<"+g+' class="validity-alert" role="alert"><span class="va-box" /></'+g+">").css({position:"absolute",display:"none"})},m=k.alert,y=false,B=b.proxy(k,"hide"),E=false,K=function(){if(!E){E=true;b(function(){m.appendTo("body")})}};return k}();(function(){var g,k=[],m;b(s).bind("invalid",function(y){var B=b(y.target).addClass("form-ui-invalid").removeClass("form-ui-valid");if(!g){g=b.Event("firstinvalid");B.trigger(g)}g&&g.isDefaultPrevented()&&
y.preventDefault();k.push(y.target);y.extraData="fix";clearTimeout(m);m=setTimeout(function(){var E={type:"lastinvalid",cancelable:false,invalidlist:b(k)};g=false;k=[];b(void 0).unbind("submit.preventInvalidSubmit");B.trigger(E,E)},9)})})();(function(){if(!(!w.validity||C.noHTMLExtFixes||w.fieldsetValidation)){var g=function(k){var m=(b.attr(k,"validity")||{valid:true}).valid;!m&&k.checkValidity()&&b(k).trigger("invalid");return m};o.addMethod("checkValidity",function(){if(this.elements||b.nodeName(this,
"fieldset")){var k=true;b(this.elements||"input, textarea, select",this).each(function(){g(this)||(k=false)});return k}else if(this.checkValidity)return g(this)})}})();o.createReadyEvent("form-core")},true);
jQuery.webshims.ready("form-core",function(b,o,C,s){var q=o.validityMessages;C=b.support;q.en=q.en||q["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",
stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};q["en-US"]=q["en-US"]||q.en;q[""]=q[""]||q["en-US"];q.de=q.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",
date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",
patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var w=q[""];b(s).bind("htmlExtLangChange",function(){o.activeLang(q,"form-message",function(j){w=j})});o.createValidationMessage=function(j,l){var i=w[l];if(i&&typeof i!=="string")i=i[(j.getAttribute("type")||"").toLowerCase()]||i.defaultMessage;i&&["value","min","max","title","maxlength","label"].forEach(function(d){if(i.indexOf("{%"+d)!==-1){var f=(d=="label"?b.trim(b("label[for="+
j.id+"]",j.form).text()).replace(/\*$|:$/,""):b.attr(j,d))||"";i=i.replace("{%"+d+"}",f);if("value"==d)i=i.replace("{%valueLen}",f.length)}});return i||""};s=o.overrideValidationMessages||o.implement.customValidationMessage?["customValidationMessage"]:[];C.validationMessage||s.push("validationMessage");b.each(s,function(j,l){o.attr(l,{elementNames:["input","select","textarea"],getter:function(i){var d="";if(!b.attr(i,"willValidate"))return d;var f=b.attr(i,"validity")||{valid:1};if(f.valid)return d;
if(f.customError||l==="validationMessage")if(d="validationMessage"in i?i.validationMessage:b.data(i,"customvalidationMessage"))return d;b.each(f,function(p,t){if(!(p=="valid"||!t))if(d=o.createValidationMessage(i,p))return false});return d||""}})})},true);
jQuery.webshims.ready("form-core",function(b,o,C){if(!b.support.validity){o.inputTypes=o.inputTypes||{};var s=o.inputTypes,q={radio:1,checkbox:1};o.addInputType=function(d,f){s[d]=f};var w={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},j={valueMissing:function(d,f,p){if(!d.attr("required"))return false;var t=false;if(!("type"in p))p.type=(d[0].getAttribute("type")||d[0].type||"").toLowerCase();
return t=p.nodeName=="select"?!f&&d[0].type=="select-one"&&d[0].size<2&&b("> option:first-child:not(:disabled)",d).attr("selected"):q[p.type]?!b(d[0].form&&d[0].name?d[0].form[d[0].name]:[]).filter(":checked")[0]:!f},tooLong:function(d,f,p){if(f===""||p.nodeName=="select")return false;d=d.attr("maxlength");p=false;var t=f.length;if(t&&d>=0&&f.replace&&(typeof d=="number"||d&&d==d*1))p=t>d;return p},typeMismatch:function(d,f,p){if(f===""||p.nodeName=="select")return false;var t=false;if(!("type"in
p))p.type=(d[0].getAttribute("type")||d[0].type||"").toLowerCase();if(s[p.type]&&s[p.type].mismatch)t=s[p.type].mismatch(f,d);return t},patternMismatch:function(d,f,p){if(f===""||p.nodeName=="select")return false;d=d.attr("pattern");if(!d)return false;return!RegExp("^(?:"+d+")$").test(f)}};o.addValidityRule=function(d,f){j[d]=f};o.addMethod("checkValidity",function(){var d,f=function(p){var t,A=b.attr(p,"validity");if(A)b.data(p,"cachedValidity",A);else return true;if(!A.valid){t=b.Event("invalid");
var g=b(p).trigger(t);if(!d&&!t.isDefaultPrevented()){o.validityAlert.showFor(g);d=true}}b.data(p,"cachedValidity",false);return A.valid};return function(){d=false;if(b.nodeName(this,"form")||b.nodeName(this,"fieldset")){for(var p=true,t=this.elements||b("input, textarea, select",this),A=0,g=t.length;A<g;A++)f(t[A])||(p=false);return p}else return this.form?f(this):true}}());o.addMethod("setCustomValidity",function(d){b.data(this,"customvalidationMessage",""+d)});b.event.special.invalid={add:function(){b.data(this,
"invalidEventShim")||b.event.special.invalid.setup.call(this)},setup:function(){b(this).bind("submit",b.event.special.invalid.handler).data("invalidEventShim",true);var d=b(this).data("events").submit;d&&d.length>1&&d.unshift(d.pop())},teardown:function(){b(this).unbind("submit",b.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(d){if(!(d.type!="submit"||!b.nodeName(d.target,"form")||b.attr(d.target,"novalidate")!=null||b.data(d.target,"novalidate")))if(!b(d.target).checkValidity()){!d.originalEvent&&
C.console&&console.log&&console.log("submit");d.stopImmediatePropagation();return false}}};o.attr("validity",{elementNames:["input","select","textarea"],getter:function(d){var f=b.data(d,"cachedValidity");if(f)return f;f=b.extend({},w);if(!b.attr(d,"willValidate"))return f;var p=b(d),t=p.val(),A={nodeName:d.nodeName.toLowerCase()};f.customError=!!b.data(d,"customvalidationMessage");if(f.customError)f.valid=false;b.each(j,function(g,k){if(k(p,t,A)){f[g]=true;f.valid=false}});return f}});o.createBooleanAttrs("required",
["input","textarea","select"]);o.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var d={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(f){return!!(f.name&&f.form&&!f.disabled&&!f.readOnly&&!d[f.type]&&b.attr(f.form,"novalidate")==null)}}()});o.addInputType("email",{mismatch:function(){var d=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(f){return!d.test(f)}}()});o.addInputType("url",{mismatch:function(){var d=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(f){return!d.test(f)}}()});var l=function(){var d=this;if(d.form){b.data(d.form,"novalidate",true);setTimeout(function(){b.data(d.form,"novalidate",false)},1)}},i={submit:1,button:1};b(document).bind("click",function(d){d.target&&d.target.form&&i[d.target.type]&&b.attr(d.target,"formnovalidate")!=null&&l.call(d.target)});o.addReady(function(d,f){var p=b("form",d).add(f.filter("form")).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",l).end();if(!document.activeElement||
!document.activeElement.form)b("input, select, textarea",p).filter("[autofocus]:first").focus()});o.createReadyEvent("form-extend")}},true);
(function(b){if(!b.support.placeholder){var o=function(j,l,i,d,f){if(!d){d=b.data(j,"placeHolder");if(!d)return}if(f=="focus"||!f&&j===document.activeElement)d.box.removeClass("placeholder-visible");else{if(l===false)l=b.attr(j,"value");if(l)d.box.removeClass("placeholder-visible");else{if(i===false)i=b.attr(j,"placeholder");d.box[i&&!l?"addClass":"removeClass"]("placeholder-visible")}}},C=function(j){j=b(j);var l=j.attr("id"),i=!!(j.attr("title")||j.attr("aria-labeledby"));if(!i&&l)i=!!b("label[for="+
l+"]",j[0].form)[0];return b(i?'<span class="placeholder-text"></span>':'<label for="'+(l||b.webshims.getID(j))+'" class="placeholder-text"></label>')},s=function(){var j=/\n|\r|\f|\t/g,l={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(i){var d=b.data(i,"placeHolder");if(d)return d;d=b.data(i,"placeHolder",{text:C(i)});d.box=b(i).wrap('<span class="placeholder-box placeholder-box-'+(i.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",function(A){o(this,
false,false,d,A.type)}).parent();d.text.insertAfter(i).bind("mousedown.placeholder",function(){o(this,false,false,d,"focus");i.focus();return false});b.each(["Left","Top"],function(A,g){var k=(parseInt(b.curCSS(i,"padding"+g),10)||0)+Math.max(parseInt(b.curCSS(i,"margin"+g),10)||0,0)+(parseInt(b.curCSS(i,"border"+g+"Width"),10)||0);d.text.css("padding"+g,k)});var f=b.curCSS(i,"lineHeight"),p={width:b(i).width(),height:b(i).height()},t=b.curCSS(i,"float");d.text.css("lineHeight")!==f&&d.text.css("lineHeight",
f);p.width&&p.height&&d.text.css(p);t!=="none"&&d.box.addClass("placeholder-box-"+t);return d},update:function(i,d){if(l[b.attr(i,"type")]||b.nodeName(i,"textarea")){if(b.nodeName(i,"input"))d=d.replace(j,"");var f=s.create(i);i.setAttribute("placeholder",d);f.text.text(d);o(i,false,d,f)}}}}();b.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(j,l){s.update(j,l)},getter:function(j){return j.getAttribute("placeholder")||""}});var q={elementNames:["input","textarea"],setter:function(j,
l,i){var d=j.getAttribute("placeholder");d&&"value"in j&&o(j,l,d);i()},getter:true};b.webshims.attr("value",q);var w=b.fn.val;b.fn.val=function(j){j!==undefined&&this.each(function(){this.nodeType===1&&q.setter(this,j,b.noop)});return w.apply(this,arguments)};b.webshims.addReady(function(j,l){b("input[placeholder], textarea[placeholder]",j).add(l.filter("input[placeholder], textarea[placeholder]")).attr("placeholder",function(i,d){return d})})}})(jQuery);
jQuery.webshims.ready("form-core",function(b,o){if(!("value"in document.createElement("output"))){var C=document;(function(){var q={input:1,textarea:1},w={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},j=function(l){var i,d=l.attr("value"),f=function(t){if(l){var A=l.attr("value");if(A!==d){d=A;if(!t||t.type!="input")o.triggerInlineForm(l[0],"input")}}},p=function(){l.unbind("focusout",p).unbind("input",f);clearInterval(i);f();l=null};clearInterval(i);i=setInterval(f,b.browser.mozilla?
250:111);setTimeout(f,9);l.bind("focusout",p).bind("input",f)};b(C).bind("focusin",function(l){if(l.target&&l.target.type&&!l.target.readonly&&!l.target.readOnly&&!l.target.disabled&&q[(l.target.nodeName||"").toLowerCase()]&&!w[l.target.type])j(b(l.target))})})();var s=function(q){if(!q.getAttribute("aria-live")){q=b(q);var w=(q.text()||"").trim(),j=q.attr("id"),l=q.attr("for"),i=b('<input class="output-shim" type="hidden" name="'+(q.attr("name")||"")+'" value="'+w+'" style="display: none" />').insertAfter(q),
d=i[0].form||C,f=function(p){i[0].value=p;p=i[0].value;q.text(p);q[0].value=p};q[0].defaultValue=w;q[0].value=w;q.attr({"aria-live":"polite"});if(j){i.attr("id",j);q.attr("aria-labeldby",o.getID(b("label[for="+j+"]",d)))}if(l){j=o.getID(q);l.split(" ").forEach(function(p){(p=d.getElementById(p))&&p.setAttribute("aria-controls",j)})}q.data("outputShim",f);i.data("outputShim",f);return f}};o.attr("value",{elementNames:["output","input"],getter:true,setter:function(q,w,j){var l=b.data(q,"outputShim");
if(!l)if(b.nodeName(q,"output"))l=s(q);else return j();l(w)}});o.addReady(function(q,w){b("output",q).add(w.filter("output")).each(function(){s(this)})});o.createReadyEvent("form-output")}},true);
document.createElement("canvas").getContext||function(b){function o(){return this.context_||(this.context_=new f(this))}function C(a,c){var e=F.call(arguments,2);return function(){return a.apply(c,e.concat(F.call(arguments)))}}function s(a){var c=a.srcElement;if(c.getContext&&"clearRect"in c.getContext())switch(a.propertyName){case "width":c.style.width=c.attributes.width.nodeValue+"px";c.getContext().clearRect();break;case "height":c.style.height=c.attributes.height.nodeValue+"px";c.getContext().clearRect();
break}}function q(a){a=a.srcElement;if(a.firstChild){a.firstChild.style.width=a.clientWidth+"px";a.firstChild.style.height=a.clientHeight+"px"}}function w(){return[[1,0,0],[0,1,0],[0,0,1]]}function j(a,c){for(var e=w(),h=0;h<3;h++)for(var n=0;n<3;n++){for(var z=0,u=0;u<3;u++)z+=a[h][u]*c[u][n];e[h][n]=z}return e}function l(a,c){c.fillStyle=a.fillStyle;c.lineCap=a.lineCap;c.lineJoin=a.lineJoin;c.lineWidth=a.lineWidth;c.miterLimit=a.miterLimit;c.shadowBlur=a.shadowBlur;c.shadowColor=a.shadowColor;c.shadowOffsetX=
a.shadowOffsetX;c.shadowOffsetY=a.shadowOffsetY;c.strokeStyle=a.strokeStyle;c.globalAlpha=a.globalAlpha;c.arcScaleX_=a.arcScaleX_;c.arcScaleY_=a.arcScaleY_;c.lineScale_=a.lineScale_}function i(a){var c,e=1;a=String(a);if(a.substring(0,3)=="rgb"){c=a.indexOf("(",3);var h=a.indexOf(")",c+1);h=a.substring(c+1,h).split(",");c="#";for(var n=0;n<3;n++)c+=J[Number(h[n])];if(h.length==4&&a.substr(3,1)=="a")e=h[3]}else c=a;return{color:c,alpha:e}}function d(a){switch(a){case "butt":return"flat";case "round":return"round";
case "square":default:return"square"}}function f(a){this.m_=w();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=x*1;this.globalAlpha=1;this.canvas=a;var c=a.ownerDocument.createElement("div");c.style.width=a.clientWidth+"px";c.style.height=a.clientHeight+"px";c.style.overflow="hidden";c.style.position="absolute";a.appendChild(c);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=
1}function p(a,c,e,h){a.currentPath_.push({type:"bezierCurveTo",cp1x:c.x,cp1y:c.y,cp2x:e.x,cp2y:e.y,x:h.x,y:h.y});a.currentX_=h.x;a.currentY_=h.y}function t(a,c,e){var h;a:{for(h=0;h<3;h++)for(var n=0;n<2;n++)if(!isFinite(c[h][n])||isNaN(c[h][n])){h=false;break a}h=true}if(h){a.m_=c;if(e)a.lineScale_=K(E(c[0][0]*c[1][1]-c[0][1]*c[1][0]))}}function A(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function g(){}var k=Math,m=k.round,y=k.sin,B=k.cos,E=k.abs,K=
k.sqrt,x=10,D=x/2,F=Array.prototype.slice,I={init:function(a){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var c=a||document;c.createElement("canvas");var e=this;setTimeout(function(){b(C(e.init_,e,c))},0)}},init_:function(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!a.styleSheets.ex_canvas_){var c=a.createStyleSheet();c.owningElement.id=
"ex_canvas_";c.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}a=a.getElementsByTagName("canvas");for(c=0;c<a.length;c++)this.initElement(a[c])},initElement:function(a){if(!a.getContext){a.getContext=o;a.innerHTML="";a.attachEvent("onpropertychange",s);a.attachEvent("onresize",q);var c=a.attributes;if(c.width&&c.width.specified)a.style.width=c.width.nodeValue+"px";else a.width=
a.clientWidth;if(c.height&&c.height.specified)a.style.height=c.height.nodeValue+"px";else a.height=a.clientHeight}return a}};I.init();for(var J=[],v=0;v<16;v++)for(var Q=0;Q<16;Q++)J[v*16+Q]=v.toString(16)+Q.toString(16);v=f.prototype;v.clearRect=function(){this.element_.innerHTML=""};v.beginPath=function(){this.currentPath_=[]};v.moveTo=function(a,c){var e=this.getCoords_(a,c);this.currentPath_.push({type:"moveTo",x:e.x,y:e.y});this.currentX_=e.x;this.currentY_=e.y};v.lineTo=function(a,c){var e=
this.getCoords_(a,c);this.currentPath_.push({type:"lineTo",x:e.x,y:e.y});this.currentX_=e.x;this.currentY_=e.y};v.bezierCurveTo=function(a,c,e,h,n,z){n=this.getCoords_(n,z);a=this.getCoords_(a,c);e=this.getCoords_(e,h);p(this,a,e,n)};v.quadraticCurveTo=function(a,c,e,h){a=this.getCoords_(a,c);e=this.getCoords_(e,h);h={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};p(this,h,{x:h.x+(e.x-this.currentX_)/3,y:h.y+(e.y-this.currentY_)/3},e)};v.arc=function(a,c,e,h,
n,z){e*=x;var u=z?"at":"wa",r=a+B(h)*e-D,G=c+y(h)*e-D;h=a+B(n)*e-D;n=c+y(n)*e-D;if(r==h&&!z)r+=0.125;a=this.getCoords_(a,c);r=this.getCoords_(r,G);h=this.getCoords_(h,n);this.currentPath_.push({type:u,x:a.x,y:a.y,radius:e,xStart:r.x,yStart:r.y,xEnd:h.x,yEnd:h.y})};v.rect=function(a,c,e,h){this.moveTo(a,c);this.lineTo(a+e,c);this.lineTo(a+e,c+h);this.lineTo(a,c+h);this.closePath()};v.strokeRect=function(a,c,e,h){var n=this.currentPath_;this.beginPath();this.moveTo(a,c);this.lineTo(a+e,c);this.lineTo(a+
e,c+h);this.lineTo(a,c+h);this.closePath();this.stroke();this.currentPath_=n};v.fillRect=function(a,c,e,h){var n=this.currentPath_;this.beginPath();this.moveTo(a,c);this.lineTo(a+e,c);this.lineTo(a+e,c+h);this.lineTo(a,c+h);this.closePath();this.fill();this.currentPath_=n};v.createLinearGradient=function(a,c,e,h){var n=new A("gradient");n.x0_=a;n.y0_=c;n.x1_=e;n.y1_=h;return n};v.createRadialGradient=function(a,c,e,h,n,z){var u=new A("gradientradial");u.x0_=a;u.y0_=c;u.r0_=e;u.x1_=h;u.y1_=n;u.r1_=
z;return u};v.drawImage=function(a){var c,e,h,n,z,u,r,G;h=a.runtimeStyle.width;n=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var L=a.width,M=a.height;a.runtimeStyle.width=h;a.runtimeStyle.height=n;if(arguments.length==3){c=arguments[1];e=arguments[2];z=u=0;r=h=L;G=n=M}else if(arguments.length==5){c=arguments[1];e=arguments[2];h=arguments[3];n=arguments[4];z=u=0;r=L;G=M}else if(arguments.length==9){z=arguments[1];u=arguments[2];r=arguments[3];G=arguments[4];c=arguments[5];
e=arguments[6];h=arguments[7];n=arguments[8]}else throw Error("Invalid number of arguments");var H=this.getCoords_(c,e),N=[];N.push(" <g_vml_:group",' coordsize="',x*10,",",x*10,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var O=[];O.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",m(H.x/x),",","Dy=",m(H.y/x),"");var P=this.getCoords_(c+h,e),R=this.getCoords_(c,
e+n);c=this.getCoords_(c+h,e+n);H.x=k.max(H.x,P.x,R.x,c.x);H.y=k.max(H.y,P.y,R.y,c.y);N.push("padding:0 ",m(H.x/x),"px ",m(H.y/x),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",O.join(""),", sizingmethod='clip');")}else N.push("top:",m(H.y/x),"px;left:",m(H.x/x),"px;");N.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',x*h,"px;"," height:",x*n,'px;"',' cropleft="',z/L,'"',' croptop="',u/M,'"',' cropright="',(L-z-r)/L,'"',' cropbottom="',(M-u-G)/M,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",
N.join(""))};v.stroke=function(a){var c=[],e=i(a?this.fillStyle:this.strokeStyle),h=e.color;e=e.alpha*this.globalAlpha;c.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',x*10," ",x*10,'"',' stroked="',!a,'"',' path="');for(var n={x:null,y:null},z={x:null,y:null},u=0;u<this.currentPath_.length;u++){var r=this.currentPath_[u];switch(r.type){case "moveTo":c.push(" m ",m(r.x),",",m(r.y));break;case "lineTo":c.push(" l ",
m(r.x),",",m(r.y));break;case "close":c.push(" x ");r=null;break;case "bezierCurveTo":c.push(" c ",m(r.cp1x),",",m(r.cp1y),",",m(r.cp2x),",",m(r.cp2y),",",m(r.x),",",m(r.y));break;case "at":case "wa":c.push(" ",r.type," ",m(r.x-this.arcScaleX_*r.radius),",",m(r.y-this.arcScaleY_*r.radius)," ",m(r.x+this.arcScaleX_*r.radius),",",m(r.y+this.arcScaleY_*r.radius)," ",m(r.xStart),",",m(r.yStart)," ",m(r.xEnd),",",m(r.yEnd));break}if(r){if(n.x==null||r.x<n.x)n.x=r.x;if(z.x==null||r.x>z.x)z.x=r.x;if(n.y==
null||r.y<n.y)n.y=r.y;if(z.y==null||r.y>z.y)z.y=r.y}}c.push(' ">');if(a)if(typeof this.fillStyle=="object"){h=this.fillStyle;r=0;a={x:0,y:0};e=0;var G=1;if(h.type_=="gradient"){r=h.x1_/this.arcScaleX_;n=h.y1_/this.arcScaleY_;u=this.getCoords_(h.x0_/this.arcScaleX_,h.y0_/this.arcScaleY_);r=this.getCoords_(r,n);r=Math.atan2(r.x-u.x,r.y-u.y)*180/Math.PI;if(r<0)r+=360;if(r<1.0E-6)r=0}else{u=this.getCoords_(h.x0_,h.y0_);e=z.x-n.x;G=z.y-n.y;a={x:(u.x-n.x)/e,y:(u.y-n.y)/G};e/=this.arcScaleX_*x;G/=this.arcScaleY_*
x;u=k.max(e,G);e=2*h.r0_/u;G=2*h.r1_/u-e}n=h.colors_;n.sort(function(R,S){return R.offset-S.offset});z=n.length;var L=n[0].color,M=n[z-1].color,H=n[0].alpha*this.globalAlpha,N=n[z-1].alpha*this.globalAlpha,O=[];for(u=0;u<z;u++){var P=n[u];O.push(P.offset*G+e+" "+P.color)}c.push('<g_vml_:fill type="',h.type_,'"',' method="none" focus="100%"',' color="',L,'"',' color2="',M,'"',' colors="',O.join(","),'"',' opacity="',N,'"',' g_o_:opacity2="',H,'"',' angle="',r,'"',' focusposition="',a.x,",",a.y,'" />')}else c.push('<g_vml_:fill color="',
h,'" opacity="',e,'" />');else{a=this.lineScale_*this.lineWidth;if(a<1)e*=a;c.push("<g_vml_:stroke",' opacity="',e,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',d(this.lineCap),'"',' weight="',a,'px"',' color="',h,'" />')}c.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",c.join(""))};v.fill=function(){this.stroke(true)};v.closePath=function(){this.currentPath_.push({type:"close"})};v.getCoords_=function(a,c){var e=this.m_;return{x:x*(a*e[0][0]+
c*e[1][0]+e[2][0])-D,y:x*(a*e[0][1]+c*e[1][1]+e[2][1])-D}};v.save=function(){var a={};l(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=j(w(),this.m_)};v.restore=function(){l(this.aStack_.pop(),this);this.m_=this.mStack_.pop()};v.translate=function(a,c){t(this,j([[1,0,0],[0,1,0],[a,c,1]],this.m_),false)};v.rotate=function(a){var c=B(a);a=y(a);t(this,j([[c,a,0],[-a,c,0],[0,0,1]],this.m_),false)};v.scale=function(a,c){this.arcScaleX_*=a;this.arcScaleY_*=c;t(this,j([[a,0,0],[0,c,0],[0,
0,1]],this.m_),true)};v.transform=function(a,c,e,h,n,z){t(this,j([[a,c,0],[e,h,0],[n,z,1]],this.m_),true)};v.setTransform=function(a,c,e,h,n,z){t(this,[[a,c,0],[e,h,0],[n,z,1]],true)};v.clip=function(){};v.arcTo=function(){};v.createPattern=function(){return new g};A.prototype.addColorStop=function(a,c){c=i(c);this.colors_.push({offset:a,color:c.color,alpha:c.alpha})};G_vmlCanvasManager=I;CanvasRenderingContext2D=f;CanvasGradient=A;CanvasPattern=g;(function(){var a=document;if(a.styleSheets&&a.namespaces){b.webshims.addMethod("getContext",
function(c){this.getContext||G_vmlCanvasManager.initElement(this);return this.getContext(c)});b.webshims.addReady(function(c,e){a!==c&&b("canvas",c).add(e.filter("canvas")).each(function(){this.getContext||G_vmlCanvasManager.initElement(this)})});b(function(){setTimeout(function(){b.webshims.createReadyEvent("canvas")},9)})}})()}(jQuery);
