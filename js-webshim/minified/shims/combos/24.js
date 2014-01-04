webshims.register("form-shim-extend",function(a,b,c,d,e){"use strict";b.inputTypes=b.inputTypes||{};var f=b.cfg.forms,g=b.bugs,h=b.inputTypes,i={radio:1,checkbox:1},j=function(a){return(a.getAttribute("type")||a.type||"").toLowerCase()};!function(){if("querySelector"in d){try{g.findRequired=!a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /></form>')[0].querySelector("select:required")}catch(b){g.findRequired=!1}(g.bustedValidity||g.findRequired)&&!function(){var b=a.find,c=a.find.matchesSelector,e=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/gi,f=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,c=function(c){var d=arguments;return d=a.call(d,1,d.length),d.unshift(c.replace(e,f)),b.apply(this,d)};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}(),(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",d.documentElement))&&(a.find.matchesSelector=function(a,b){return b=b.replace(e,f),c.call(this,a,b)})}()}}(),b.addInputType=function(a,b){h[a]=b};var k={customError:!1,typeMismatch:!1,badInput:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,patternMismatch:!1,valueMissing:!1,valid:!0},l=function(b){if("select-one"==b.type&&b.size<2){var c=a("> option:first-child",b);return!!c.prop("selected")}return!1},m=a([]),n=function(b){b=a(b);var c,e,f=m;return"radio"==b[0].type&&(e=b.prop("form"),c=b[0].name,f=c?e?a(e[c]):a(d.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):b,f=f.filter('[type="radio"]')),f},o={url:1,email:1,text:1,search:1,tel:1,password:1},p=a.extend({textarea:1},o),q={valueMissing:function(a,b,c){if(!a.prop("required"))return!1;var d=!1;return"type"in c||(c.type=j(a[0])),d="select"==c.nodeName?!b&&(a[0].selectedIndex<0||l(a[0])):i[c.type]?"checkbox"==c.type?!a.is(":checked"):!n(a).filter(":checked")[0]:!b},patternMismatch:function(a,c,d){if(""===c||"select"==d.nodeName)return!1;if("type"in d||(d.type=j(a[0])),!o[d.type])return!1;var e=a.attr("pattern");if(!e)return!1;try{e=new RegExp("^(?:"+e+")$")}catch(f){b.error('invalid pattern value: "'+e+'" | '+f),e=!1}return e?!e.test(c):!1}};a.each({tooShort:["minLength",-1],tooLong:["maxLength",1]},function(a,b){q[a]=function(a,c,d){if("select"==d.nodeName||a.prop("defaultValue")==c)return!1;if("type"in d||(d.type=j(a[0])),!p[d.type])return!1;var e=a.prop(b[0]);return e>0&&e*b[1]<c.length*b[1]}}),a.each({typeMismatch:"mismatch",badInput:"bad"},function(a,b){q[a]=function(c,d,e){if(""===d||"select"==e.nodeName)return!1;var f=!1;return"type"in e||(e.type=j(c[0])),h[e.type]&&h[e.type][b]?f=h[e.type][b](d,c):"validity"in c[0]&&"name"in c[0].validity&&(f=c[0].validity[a]||!1),f}}),b.addValidityRule=function(a,b){q[a]=b},a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var c=this.form||this;return a.data(c,"invalidEventShim")?(c=null,void 0):(a(c).data("invalidEventShim",!0).on("submit",a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"),b.bugs.bustedValidity&&a.nodeName(c,"form")&&!function(){var a=c.getAttribute("novalidate");c.setAttribute("novalidate","novalidate"),b.data(c,"bustedNoValidate",null==a?null:a)}(),c=null,void 0)},teardown:a.noop,handler:function(b){if("submit"==b.type&&!b.testedValidity&&b.originalEvent&&a.nodeName(b.target,"form")&&!a.prop(b.target,"noValidate")){b.testedValidity=!0;var c=!a(b.target).callProp("reportValidity");return c?(b.stopImmediatePropagation(),!1):void 0}}},a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var r=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){return a.nodeName(this,"form")?a(this).on("invalid",a.noop):a("form",this).on("invalid",a.noop),r.apply(this,arguments)}}),b.ready("form-shim-extend2 WINDOWLOAD",function(){a(c).on("invalid",a.noop)}),b.addInputType("email",{mismatch:function(){var b=f.emailReg||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,c=/\s*,\s*/g;return function(d,e){var f=!1;d=a(e).prop("multiple")?d.split(c):[d];for(var g=0;g<d.length;g++)if(!b.test(d[g])){f=!0;break}return f}}()}),b.addInputType("url",{mismatch:function(){var a=f.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return function(b){return!a.test(b)}}()}),b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=this,c=(a.getAttribute("type")||"").toLowerCase();return b.inputTypes[c]?c:a.type}}}),b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},reportValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},k)}}},"prop");var s=function(c,d){var e,f=a.prop(c,"validity");if(!f)return!0;if(a.data(c,"cachedValidity",f),!f.valid){e=a.Event("invalid");var g=a(c).trigger(e);"reportValidity"!=d||s.unhandledInvalids||e.isDefaultPrevented()||(b.validityAlert.showFor(g),s.unhandledInvalids=!0)}return a.removeData(c,"cachedValidity"),f.valid},t=/^(?:select|textarea|input)/i;["checkValidity","reportValidity"].forEach(function(c){b.defineNodeNameProperty("form",c,{prop:{value:function(){var d=!0,e=a(a.prop(this,"elements")).filter(function(){if(!t.test(this.nodeName))return!1;var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});s.unhandledInvalids=!1;for(var f=0,g=e.length;g>f;f++)s(e[f],c)||(d=!1);return d}}})}),["input","textarea","select"].forEach(function(c){var d={setCustomValidity:{value:function(c){a.removeData(this,"cachedValidity"),b.data(this,"customvalidationMessage",""+c),g.bustedValidity&&d.setCustomValidity.prop._supvalue&&d.setCustomValidity.prop._supvalue.apply(this,arguments)}},willValidate:{writeable:!1,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.readOnly||b[c.type]||a(c).is(":disabled"))}}()},validity:{writeable:!1,get:function(){var c=a(this).getNativeElement(),d=c[0],e=a.data(d,"cachedValidity");if(e)return e;if(e=a.extend({},k),!a.prop(d,"willValidate")||"submit"==d.type)return e;var f=c.val(),g={nodeName:d.nodeName.toLowerCase()};return e.customError=!!b.data(d,"customvalidationMessage"),e.customError&&(e.valid=!1),a.each(q,function(a,b){b(c,f,g)&&(e[a]=!0,e.valid=!1)}),a(this).getShadowFocusElement().attr("aria-invalid",e.valid?"false":"true"),c=null,d=null,e}}};["checkValidity","reportValidity"].forEach(function(b){d[b]={value:function(){return s.unhandledInvalids=!1,s(a(this).getNativeElement()[0],b)}}}),b.defineNodeNameProperties(c,d,"prop")}),b.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:Modernizr.localstorage}),b.defineNodeNamesBooleanProperty(["input"],"multiple"),g.bustedValidity&&(b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){b.data(this,"bustedNoValidate",""+a)},get:function(){var a=b.data(this,"bustedNoValidate");return null==a?e:a}},removeAttr:{value:function(){b.data(this,"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(a,b){q[b]=function(a){return(a[0].validity||{})[b]||!1}})),b.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b=!!b,b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}}),b.defineNodeNamesProperty(["input","textarea"],"minLength",{prop:{set:function(a){if(a*=1,0>a)throw"INDEX_SIZE_ERR";this.setAttribute("minlength",a||0)},get:function(){var a=this.getAttribute("minlength");return null==a?-1:1*a||0}}}),Modernizr.inputtypes.date&&/webkit/i.test(navigator.userAgent)&&!function(){var b={updateInput:1,input:1},c={date:1,time:1,month:1,week:1,"datetime-local":1},e={focusout:1,blur:1},f={updateInput:1,change:1},g=function(a){var c,d,g=!0,h=a.prop("value"),i=h,j=function(c){if(a){var d=a.prop("value");d!==h&&(h=d,c&&b[c.type]||a.trigger("input")),c&&f[c.type]&&(i=d),g||d===i||a.trigger("change")}},k=function(){clearTimeout(d),d=setTimeout(j,9)},l=function(b){clearInterval(c),setTimeout(function(){b&&e[b.type]&&(g=!1),a&&(a.off("focusout blur",l).off("input change updateInput",j),j()),a=null},1)};clearInterval(c),c=setInterval(j,160),k(),a.off({"focusout blur":l,"input change updateInput":j}).on({"focusout blur":l,"input updateInput change":j})};a(d).on("focusin",function(b){b.target&&c[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&g(a(b.target))})}(),b.addReady(function(b,c){var e;a("form",b).add(c.filter("form")).on("invalid",a.noop);try{b!=d||"form"in(d.activeElement||{})||(e=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0],e&&e.offsetHeight&&e.offsetWidth&&e.focus())}catch(f){}}),Modernizr.input.list||b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c,d=this,e=a("select",d);return e[0]?c=a.makeArray(e[0].options||[]):(c=a("option",d).get(),c.length&&b.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),c}}});var u={submit:1,button:1,image:1},v={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),e="form"+b.name,f=b.name,g="click.webshimssubmittermutate"+f,h=function(){var d=this;if("form"in d&&u[d.type]){var g=a.prop(d,"form");if(g){var h=a.attr(d,e);if(null!=h&&(!b.limitedTo||h.toLowerCase()===a.prop(d,c))){var i=a.attr(g,f);a.attr(g,f,h),setTimeout(function(){if(null!=i)a.attr(g,f,i);else try{a(g).removeAttr(f)}catch(b){g.removeAttribute(f)}},9)}}}};switch(b.proptype){case"url":var i=d.createElement("form");v[c]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var b=a.attr(this,e);return null==b?"":(i.setAttribute("action",b),i.action)}}};break;case"boolean":v[c]={prop:{set:function(b){b=!!b,b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case"enum":v[c]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var c=a.attr(this,e);return!c||(c=c.toLowerCase())&&!b.limitedTo[c]?b.defaultProp:c}}};break;default:v[c]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var b=a.attr(this,e);return null!=b?b:""}}}}v[e]||(v[e]={}),v[e].attr={set:function(b){v[e].attr._supset.call(this,b),a(this).off(g).on(g,h)},get:function(){return v[e].attr._supget.call(this)}},v[e].initAttr=!0,v[e].removeAttr={value:function(){a(this).off(g),v[e].removeAttr._supvalue.call(this)}}}),b.defineNodeNamesProperties(["input","button"],v)}),webshims.register("form-shim-extend2",function(a,b,c,d,e,f){"use strict";var g=a([]),h=function(a){return"number"==typeof a||a&&a==1*a},i=function(b){b=a(b);var c,e,f=g;return"radio"==b[0].type&&(e=b.prop("form"),c=b[0].name,f=c?e?a(e[c]):a(d.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):b,f=f.filter('[type="radio"]')),f},j=!("getSetAttribute"in a.support&&!a.support.getSetAttribute),k=!("submitBubbles"in a.support)||a.support.submitBubbles,l=function(b){k||!b||"object"!=typeof b||b._submit_attached||(a.event.add(b,"submit._submit",function(a){a._submit_bubble=!0}),b._submit_attached=!0)};if(!k&&a.event.special.submit&&(a.event.special.submit.setup=function(){return a.nodeName(this,"form")?!1:(a.event.add(this,"click._submit keypress._submit",function(b){var c=b.target,d=a.nodeName(c,"input")||a.nodeName(c,"button")?a.prop(c,"form"):e;l(d)}),void 0)}),b.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:Modernizr.localstorage}),b.reflectProperties(["input"],["pattern"]),!("maxLength"in d.createElement("textarea"))){var m=function(){var b,c=0,d=a([]),e=1e9,f=function(){var a=d.prop("value"),b=a.length;b>c&&b>e&&(b=Math.max(c,e),d.prop("value",a.substr(0,b))),c=b},g=function(){clearTimeout(b),d.off(".maxlengthconstraint")};return function(h,i){g(),i>-1&&(e=i,c=a.prop(h,"value").length,d=a(h),d.on({"keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint":function(){setTimeout(f,0)},"keyup.maxlengthconstraint":f,"blur.maxlengthconstraint":g}),b=setInterval(f,200))}}();m.update=function(b,c){a(b).is(":focus")&&(c||(c=a.prop(b,"maxlength")),m(b,c))},a(d).on("focusin",function(b){var c;"TEXTAREA"==b.target.nodeName&&(c=a.prop(b.target,"maxlength"))>-1&&m(b.target,c)}),b.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a),m.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?e:a}},prop:{set:function(a){if(h(a)){if(0>a)throw"INDEX_SIZE_ERR";return a=parseInt(a,10),this.setAttribute("maxlength",a),m.update(this,a),void 0}this.setAttribute("maxlength","0"),m.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return h(a)&&a>=0?parseInt(a,10):-1}}}),b.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}j||null!=a("<form novalidate></form>").attr("novalidate")||b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?e:a}}}),Modernizr.formattribute&&Modernizr.fieldsetdisabled&&Modernizr.fieldsetelements||!function(){if(!Modernizr.fieldsetdisabled){var f=/^(?:fieldset)$/i,g="input, textarea, select, button";a.extend(a.expr[":"],{enabled:function(c){return c.disabled===!1||f.test(c.nodeName)&&null==b.contentAttr(c,"disabled")&&!a(c).is("fieldset[disabled] *")},disabled:function(c){return c.disabled===!0||f.test(c.nodeName)&&(null!=b.contentAttr(c,"disabled")||a(c).is("fieldset[disabled] *"))}});var h={getElements:function(b){a(g,b).each(h.disable)},disable:function(){this.disabled||(b.data(this,"groupedisabled",!0),this.disabled=!0)},enable:function(){this.disabled&&b.data(this,"groupedisabled")&&(b.data(this,"groupedisabled",!1),this.disabled=!1)}};a(c).on("unload",function(){a(g).each(h.enable)}),b.defineNodeNamesBooleanProperty(["fieldset"],"disabled",{set:function(b){if(b)a(g,this).each(h.disable);else if(!a(this).is("fieldset[disabled] *")){var c=a("fieldset[disabled]",this),d=a(g,this);c.length&&(d=d.not("fieldset[disabled] *")),d.each(h.enable)}},initAttr:!0,useContentAttribute:!0}),["input","textarea","select","button"].forEach(function(c){var d=b.defineNodeNameProperty(c,"disabled",{prop:{set:function(c){c?(b.data(this,"groupedisabled",!1),d.prop._supset.call(this,c)):a(this).is("fieldset[disabled] *")?(b.data(this,"groupedisabled",!0),d.prop._supset.call(this,!0)):(b.data(this,"groupedisabled",!1),d.prop._supset.call(this,c))},get:function(){var a=d.prop._supget.call(this);return a?!b.data(this,"groupedisabled"):a}},removeAttr:{value:function(){d.set.call(this,!1)}}})}),b.addReady(function(b){a(b).filter("fieldset[disabled], fieldset[disabled] *").find(g).each(h.disable)})}if(!Modernizr.formattribute){!function(b,c){a.prop=function(e,f,g){var h;return e&&1==e.nodeType&&g===c&&a.nodeName(e,"form")&&e.id&&(h=d.getElementsByName(f),h&&h.length||(h=d.getElementById(f)),h&&(h=a(h).filter(function(){return a.prop(this,"form")==e}).get(),h.length))?1==h.length?h[0]:h:b.apply(this,arguments)}}(a.prop,e);var i=function(b){var c=a.data(b,"webshimsAddedElements");c&&(c.remove(),a.removeData(b,"webshimsAddedElements"))};if(b.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var c=b.contentAttr(this,"form");return c&&(c=d.getElementById(c),c&&!a.nodeName(c,"form")&&(c=null)),c||this.form},writeable:!1}}),b.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var b=this.id,c=a.makeArray(this.elements);return b&&(c=a(c).add('input[form="'+b+'"], select[form="'+b+'"], textarea[form="'+b+'"], button[form="'+b+'"], fieldset[form="'+b+'"]').not(".webshims-visual-hide > *").get()),c},writeable:!1}}),a(function(){var b=function(a){a.stopPropagation()},c={image:1,submit:1};a(d).on("submit",function(b){if(!b.isDefaultPrevented()){var c,d=b.target,e=d.id;e&&(i(d),c=a('input[form="'+e+'"], select[form="'+e+'"], textarea[form="'+e+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=d}).clone(),c.length&&(a.data(d,"webshimsAddedElements",a('<div class="webshims-visual-hide" />').append(c).appendTo(d)),setTimeout(function(){i(d)},9)),c=null)}}),a(d).on("click",function(d){if(c[d.target.type]&&!d.isDefaultPrevented()&&a(d.target).is("input[form], button[form]")){var e,f=a.prop(d.target,"form"),g=d.target.form;f&&f!=g&&(e=a(d.target).clone().removeAttr("form").addClass("webshims-visual-hide").on("click",b).appendTo(f),g&&d.preventDefault(),l(f),e.trigger("click"),setTimeout(function(){e.remove(),e=null},9))}})}),!a.fn.finish&&parseFloat(a.fn.jquery,10)<1.9){var j=/\r?\n/g,k=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,m=/^(?:select|textarea)/i;a.fn.serializeArray=function(){return this.map(function(){var b=a.prop(this,"elements");return b?a.makeArray(b):this}).filter(function(){return this.name&&!a(this).is(":disabled")&&(this.checked||m.test(this.nodeName)||k.test(this.type))}).map(function(b,c){var d=a(this).val();return null==d?null:a.isArray(d)?a.map(d,function(a){return{name:c.name,value:a.replace(j,"\r\n")}}):{name:c.name,value:d.replace(j,"\r\n")}}).get()}}}Modernizr.fieldsetelements||b.defineNodeNamesProperty(["fieldset"],"elements",{prop:{get:function(){return a("input, select, textarea, button, fieldset",this).get()||[]},writeable:!1}})}(),null==a("<input />").prop("labels")&&b.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var b=this.id,c=a(this).closest("label").filter(function(){var a=this.attributes["for"]||{};return!a.specified||a.value==b});return b&&(c=c.add('label[for="'+b+'"]')),c.get()},writeable:!1}}),"value"in d.createElement("progress")||!function(){var c=parseInt("NaN",10),d=function(b){var c;c=a.prop(b,"position"),a.attr(b,"data-position",c),a("> span",b).css({width:(0>c?100:100*c)+"%"})},e={position:{prop:{get:function(){var b,e=this.getAttribute("value"),f=-1;return e=e?1*e:c,isNaN(e)?d.isInChange&&a(this).removeAttr("aria-valuenow").addClass("ws-indeterminate"):(b=a.prop(this,"max"),f=Math.max(Math.min(e/b,1),0),d.isInChange&&(a.attr(this,"aria-valuenow",100*f),"max"==d.isInChange&&a.attr(this,"aria-valuemax",b)),a(this).removeClass("ws-indeterminate")),f},writeable:!1}}};a.each({value:0,max:1},function(c,f){var g="value"==c&&!a.fn.finish;e[c]={attr:{set:function(a){var b=e[c].attr._supset.call(this,a);return d.isInChange=c,d(this),d.isInChange=!1,b}},removeAttr:{value:function(){if(this.removeAttribute(c),g)try{delete this.value}catch(a){}d.isInChange=c,d(this),d.isInChange=!1}},prop:{get:function(){var b=1*e[c].attr.get.call(this);return 0>b||isNaN(b)?b=f:"value"==c?b=Math.min(b,a.prop(this,"max")):0===b&&(b=f),b},set:function(a){return a=1*a,isNaN(a)&&b.error("Floating-point value is not finite."),e[c].attr.set.call(this,a)}}}}),b.createElement("progress",function(){var c=a(this).attr({role:"progressbar","aria-valuemin":"0"}).html('<span class="progress-value" />').jProp("labels").map(function(){return b.getID(this)}).get();c.length?a.attr(this,"aria-labelledby",c.join(" ")):b.info("you should use label elements for your prgogress elements"),d.isInChange="max",d(this),d.isInChange=!1},e)}();try{d.querySelector(":checked")}catch(n){!function(){a("html").addClass("no-csschecked");var c={radio:1,checkbox:1},e=function(){var b,c,d,e=this.options||[];for(b=0,c=e.length;c>b;b++)d=a(e[b]),d[a.prop(e[b],"selected")?"addClass":"removeClass"]("prop-checked")},f=function(){var b,c=a.prop(this,"checked")?"addClass":"removeClass",d=this.className||"";-1==d.indexOf("prop-checked")==("addClass"==c)&&(a(this)[c]("prop-checked"),(b=this.parentNode)&&(b.className=b.className))};b.onNodeNamesPropertyModify("select","value",e),b.onNodeNamesPropertyModify("select","selectedIndex",e),b.onNodeNamesPropertyModify("option","selected",function(){a(this).closest("select").each(e)}),b.onNodeNamesPropertyModify("input","checked",function(b,d){var e=this.type;"radio"==e&&d?i(this).each(f):c[e]&&a(this).each(f)}),a(d).on("change",function(b){c[b.target.type]?"radio"==b.target.type?i(b.target).each(f):a(b.target)[a.prop(b.target,"checked")?"addClass":"removeClass"]("prop-checked"):"select"==b.target.nodeName.toLowerCase()&&a(b.target).each(e)}),b.addReady(function(b,d){a("option, input",b).add(d.filter("option, input")).each(function(){var b;c[this.type]?b="checked":"option"==this.nodeName.toLowerCase()&&(b="selected"),b&&a(this)[a.prop(this,b)?"addClass":"removeClass"]("prop-checked")})})}()}"setSelectionRange"in d.createElement("input")||!function(){var c=function(b,c){var e,f,g,h,i,j,k=0,l=0;return d.selection&&(e=d.selection.createRange())&&e.parentElement()==b&&(f=a.prop(b,"value"),i=f.length,g=f.replace(/\r\n/g,"\n"),h=b.createTextRange(),h.moveToBookmark(e.getBookmark()),j=b.createTextRange(),j.collapse(!1),h.compareEndPoints("StartToEnd",j)>-1?k=l=i:c?(k=-h.moveStart("character",-i),k+=g.slice(0,k).split("\n").length-1):h.compareEndPoints("EndToEnd",j)>-1?l=i:(l=-h.moveEnd("character",-i),l+=g.slice(0,l).split("\n").length-1)),{start:k,end:l}};["input","textarea"].forEach(function(d){var e="textarea"==d,f={text:1,search:1,url:1,tel:1,password:1,email:1},g="InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable. selection not allowed on this type";b.defineNodeNameProperties(d,{selectionStart:{get:function(){return e||f[a.prop(this,"type")]?c(this,!0).start:(b.error(g),void 0)},set:function(c){if(this.createTextRange&&(e||f[a.prop(this,"type")])){var d=this.createTextRange();d.collapse(!0),d.moveStart("character",c),d.moveEnd("character",a.prop(this,"selectionEnd")),a(this).is(":focus")&&d.select()}else b.error(g)}},selectionEnd:{get:function(){return e||f[a.prop(this,"type")]?c(this).end:(b.error(g),void 0)},set:function(d){if(this.createTextRange&&(e||f[a.prop(this,"type")])){var h,i=this.createTextRange();i.collapse(!0),h=c(this,!0).start,i.moveStart("character",h),i.moveEnd("character",d-h),a(this).is(":focus")&&i.select()}else b.error(g)}},setSelectionRange:{value:function(c,d){if(this.createTextRange&&(e||f[a.prop(this,"type")])){var h=this.createTextRange();h.collapse(!0),h.moveStart("character",c),h.moveEnd("character",d-c),a(this).is(":focus")&&h.select()}else b.error(g)}}},"prop")})}(),function(){if(!f.noPlaceholderPolyfill){var d;if(Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]),Modernizr.input.placeholder&&f.overridePlaceholder&&(d=!0),Modernizr.input.placeholder&&Modernizr.textareaPlaceholder&&!d)return function(){var b=navigator.userAgent;-1!=b.indexOf("Mobile")&&-1!=b.indexOf("Safari")&&a(c).on("orientationchange",function(){var b,c=function(a,b){return b},d=function(){a("input[placeholder], textarea[placeholder]").attr("placeholder",c)};return function(){clearTimeout(b),b=setTimeout(d,9)}}())}(),void 0;var e="over"==b.cfg.forms.placeholderType,g=b.cfg.forms.responsivePlaceholder,h=["textarea"];(!Modernizr.input.placeholder||d)&&h.push("input");var i=function(b){try{return a(b).setSelectionRange(0,0),!0}catch(c){}},j=function(b,c,d,f){if(d===!1&&(d=a.prop(b,"value")),e||"password"==b.type){if(!d&&f)return a(b).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(d){(!d||17!=d.keyCode&&16!=d.keyCode)&&(c.box.removeClass("placeholder-visible"),a(b).off(".placeholderremove"))},"blur.placeholderremove":function(){a(b).off(".placeholderremove")}}),void 0}else{if(!d&&f&&i(b)){var g=setTimeout(function(){i(b)},9);return a(b).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(d){(!d||17!=d.keyCode&&16!=d.keyCode)&&(b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(g),a(b).off(".placeholderremove"))},"mousedown.placeholderremove drag.placeholderremove select.placeholderremove":function(){i(b),clearTimeout(g),g=setTimeout(function(){i(b)},9)},"blur.placeholderremove":function(){clearTimeout(g),a(b).off(".placeholderremove")}}),void 0}f||d||!b.value||(b.value=d)}c.box.removeClass("placeholder-visible")},k=function(b,c,d){d===!1&&(d=a.prop(b,"placeholder")),e||"password"==b.type||(b.value=d),c.box.addClass("placeholder-visible")},l=function(b,c,d,f,g){if(f||(f=a.data(b,"placeHolder"))){var h=a(b).hasClass("placeholder-visible");return d===!1&&(d=a.attr(b,"placeholder")||""),a(b).off(".placeholderremove"),c===!1&&(c=a.prop(b,"value")),c||"focus"!=g&&(g||!a(b).is(":focus"))?c?(j(b,f,c),void 0):(d&&!c?k(b,f,d):j(b,f,c),void 0):(("password"==b.type||e||h)&&j(b,f,"",!0),void 0)}},m=function(b){return b=a(b),!!(b.prop("title")||b.attr("aria-labelledby")||b.attr("aria-label")||b.jProp("labels").length)},n=function(b){return b=a(b),a(m(b)?'<span class="placeholder-text"></span>':'<label for="'+b.prop("id")+'" class="placeholder-text"></label>')},o=function(){var d={text:1,search:1,url:1,email:1,password:1,tel:1,number:1};return b.modules["form-number-date-ui"].loaded&&delete d.number,{create:function(b){var d,f=a.data(b,"placeHolder");if(f)return f;if(f=a.data(b,"placeHolder",{}),a(b).on("focus.placeholder blur.placeholder",function(a){l(this,!1,!1,f,a.type),f.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")}),(d=a.prop(b,"form"))&&a(b).onWSOff("reset.placeholder",function(a){setTimeout(function(){l(b,!1,!1,f,a.type)},0)},!1,d),"password"==b.type||e)f.text=n(b),g||a(b).is(".responsive-width")||-1!=(b.currentStyle||{width:""}).width.indexOf("%")?f.box=f.text:(f.box=a('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+" placeholder-box-"+a.css(b,"float")+'" />').insertAfter(b),f.box.append(b)),f.text.insertAfter(b).on("mousedown.placeholder",function(){l(this,!1,!1,f,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1}),a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(c,d){var e=a.css(b,d);f.text.css(d)!=e&&f.text.css(d,e)}),a.each(["Left","Top"],function(c,d){var e=(parseInt(a.css(b,"padding"+d),10)||0)+Math.max(parseInt(a.css(b,"margin"+d),10)||0,0)+(parseInt(a.css(b,"border"+d+"Width"),10)||0);f.text.css("padding"+d,e)}),a(b).onWSOff("updateshadowdom",function(){var c,d;((d=b.offsetWidth)||(c=b.offsetHeight))&&f.text.css({width:d,height:c}).css(a(b).position())},!0);else{var h=function(c){a(b).hasClass("placeholder-visible")&&(j(b,f,""),setTimeout(function(){(!c||"submit"!=c.type||c.isDefaultPrevented())&&l(b,!1,!1,f)},9))};a(b).onWSOff("beforeunload",h,!1,c),f.box=a(b),d&&a(b).onWSOff("submit",h,!1,d)}return f},update:function(c,e){var f=(a.attr(c,"type")||a.prop(c,"type")||"").toLowerCase();if(!d[f]&&!a.nodeName(c,"textarea"))return b.warn('placeholder not allowed on input[type="'+f+'"], but it is a good fallback :-)'),void 0;var g=o.create(c);g.text&&g.text.text(e),l(c,!1,e,g)}}}();a.webshims.publicMethods={pHolder:o},h.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){var c=this;d?(b.data(c,"bustedPlaceholder",a),c.placeholder=""):b.contentAttr(c,"placeholder",a),o.update(c,a)},get:function(){var a;return d&&(a=b.data(this,"bustedPlaceholder")),a||b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})}),h.forEach(function(c){var e,f={};["attr","prop"].forEach(function(c){f[c]={set:function(f){var g,h=this;d&&(g=b.data(h,"bustedPlaceholder")),g||(g=b.contentAttr(h,"placeholder")),a.removeData(h,"cachedValidity");var i=e[c]._supset.call(h,f);return g&&"value"in h&&l(h,f,g),i},get:function(){var b=this;return a(b).hasClass("placeholder-visible")?"":e[c]._supget.call(b)}}}),e=b.defineNodeNameProperty(c,"value",f)})}}(),function(){var c=d;if(!("value"in d.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var c=a.data(this,"outputShim");c||(c=e(this)),c(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}}),b.onNodeNamesPropertyModify("input","value",function(b,c,d){if("removeAttr"!=d){var e=a.data(this,"outputShim");e&&e(b)}});var e=function(e){if(!e.getAttribute("aria-live")){e=a(e);var f=(e.text()||"").trim(),g=e.prop("id"),h=e.attr("for"),i=a('<input class="output-shim" type="text" disabled name="'+(e.attr("name")||"")+'" value="'+f+'" style="display: none !important;" />').insertAfter(e),j=(i[0].form||c,function(a){i[0].value=a,a=i[0].value,e.text(a),b.contentAttr(e[0],"value",a)});return e[0].defaultValue=f,b.contentAttr(e[0],"value",f),e.attr({"aria-live":"polite"}),g&&(i.attr("id",g),e.attr("aria-labelledby",e.jProp("labels").map(function(){return b.getID(this)}).get().join(" "))),h&&(g=b.getID(e),h.split(" ").forEach(function(a){a=d.getElementById(a),a&&a.setAttribute("aria-controls",g)})),e.data("outputShim",j),i.data("outputShim",j),j}};b.addReady(function(b,c){a("output",b).add(c.filter("output")).each(function(){e(this)})}),function(){var d={updateInput:1,input:1},e={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},f=function(a){var c,e,f=a.prop("value"),g=function(c){if(a){var e=a.prop("value");e!==f&&(f=e,c&&d[c.type]||b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},h=function(){clearTimeout(e),e=setTimeout(g,9)},i=function(){a.off("focusout",i).off("keyup keypress keydown paste cut",h).off("input change updateInput triggerinput",g),clearInterval(c),setTimeout(function(){g(),a=null},1)};clearInterval(c),c=setInterval(g,200),h(),a.on({"keyup keypress keydown paste cut":h,focusout:i,"input updateInput change triggerinput":g})};a(c).on("focusin",function(c){!c.target||c.target.readOnly||c.target.disabled||"input"!=(c.target.nodeName||"").toLowerCase()||e[c.target.type]||(b.data(c.target,"implemented")||{}).inputwidgets||f(a(c.target))})}()}}()});