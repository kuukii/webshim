jQuery.webshims.register("form-datalist",function(e,t,n,r,i,s){"use strict";var o=r;t.propTypes.element=function(n){t.createPropDefault(n,"attr");if(n.prop)return;n.prop={get:function(){var t=n.attr.get.call(this);return t&&(t=r.getElementById(t),t&&n.propNodeName&&!e.nodeName(t,n.propNodeName)&&(t=null)),t||null},writeable:!1}},function(){var o=e.webshims.cfg.forms,u=Modernizr.input.list;if(u&&!o.customDatalist)return;var a=function(){u||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var n=this,r=e("select",n),i;return r[0]?i=r[0].options:(i=e("option",n).get(),i.length&&t.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),i}}});var n={autocomplete:{attr:{get:function(){var t=this,n=e.data(t,"datalistWidget");return n?n._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var n=this,r=e.data(n,"datalistWidget");r?(r._autocomplete=t,t=="off"&&r.hideList()):"autocomplete"in n?n.autocomplete=t:n.setAttribute("autocomplete",t)}}}};o.customDatalist&&(!u||!("selectedOption"in e("<input />")[0]))&&(n.selectedOption={prop:{writeable:!1,get:function(){var t=this,n=e.prop(t,"list"),r=null,i,s;return n?(i=e.prop(t,"value"),i?(s=e.prop(n,"options"),s.length?(e.each(s,function(t,n){if(i==e.prop(n,"value"))return r=n,!1}),r):r):r):r}}}),u?((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var n=this,r=e("select",n);r[0]&&r[0].options&&r[0].options.length&&(t=r[0].options)}return t}}}),n.list={attr:{get:function(){var n=t.contentAttr(this,"list");return n!=null?this.removeAttribute("list"):n=e.data(this,"datalistListAttr"),n==null?i:n},set:function(n){var r=this;e.data(r,"datalistListAttr",n),t.objectCreate(v,i,{input:r,id:n,datalist:e.prop(r,"list")}),e(r).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):n.list={attr:{get:function(){var e=t.contentAttr(this,"list");return e==null?i:e},set:function(n){var r=this;t.contentAttr(r,"list",n),t.objectCreate(v,i,{input:r,id:n,datalist:e.prop(r,"list")}),e(r).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"},t.defineNodeNameProperties("input",n),t.addReady(function(t,n){n.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(function(){var t=e.prop(this,"id");e(this).triggerHandler("updateDatalist")})})},f=0,l={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1},c={},h=function(e){if(!e)return[];if(c[e])return c[e];var t;try{t=JSON.parse(localStorage.getItem("storedDatalistOptions"+e))}catch(n){}return c[e]=t||[],t||[]},p=function(e,t){if(!e)return;t=t||[];try{localStorage.setItem("storedDatalistOptions"+e,JSON.stringify(t))}catch(n){}},d=function(t){return t.textContent||t.innerText||e.text([t])||""},v={_create:function(r){if(l[e.prop(r.input,"type")]||l[e.attr(r.input,"type")])return;var i=r.datalist,u=e.data(r.input,"datalistWidget");if(i&&u&&u.datalist!==i){u.datalist=i,u.id=r.id,e(u.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(u,"_resetListCached")),u._resetListCached();return}if(!i){u&&u.destroy();return}if(u&&u.datalist===i)return;f++;var a=this;this.hideList=e.proxy(a,"hideList"),this.datalist=i,this.id=r.id,this.hasViewableData=!0,this._autocomplete=e.attr(r.input,"autocomplete"),e.data(r.input,"datalistWidget",this),this.popover=t.objectCreate(t.wsPopover,{},s.datalistPopover),this.shadowList=this.popover.element.addClass("datalist-polyfill"),this.index=-1,this.input=r.input,this.arrayOptions=[],this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(t){var n=e("li:not(.hidden-item)",a.shadowList),i=t.type=="mousedown"||t.type=="click";return a.markItem(n.index(t.currentTarget),i,n),t.type=="click"&&(a.hideList(),o.customDatalist&&e(r.input).trigger("datalistselect")),t.type!="mousedown"}),r.input.setAttribute("autocomplete","off"),e(r.input).attr({"aria-haspopup":"true"}).on({"input.datalistWidget":function(){a.triggeredByDatalist||(a.changedValue=!1,a.showHideOptions())},"keydown.datalistWidget":function(t){var n=t.keyCode,i,s;if(n==40&&!a.showList())return a.markItem(a.index+1,!0),!1;if(!a.popover.isVisible)return;if(n==38)return a.markItem(a.index-1,!0),!1;if(!t.shiftKey&&(n==33||n==36))return a.markItem(0,!0),!1;if(!t.shiftKey&&(n==34||n==35))return s=e("li:not(.hidden-item)",a.shadowList),a.markItem(s.length-1,!0,s),!1;if(n==13||n==27)return n==13&&(i=e("li.active-item:not(.hidden-item)",a.shadowList),a.changeValue(e("li.active-item:not(.hidden-item)",a.shadowList))),a.hideList(),o.customDatalist&&i&&i[0]&&e(r.input).trigger("datalistselect"),!1},"focus.datalistWidget":function(){e(this).hasClass("list-focus")&&a.showList()},"mousedown.datalistWidget":function(){e(this).is(":focus")&&a.showList()}}),e(this.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(this,"_resetListCached")),this._resetListCached(),r.input.form&&(r.input.name||r.input.id)&&e(r.input.form).on("submit.datalistWidget"+r.input.id,function(){if(!e(r.input).hasClass("no-datalist-cache")&&a._autocomplete!="off"){var t=e.prop(r.input,"value"),n=(r.input.name||r.input.id)+e.prop(r.input,"type");a.storedOptions||(a.storedOptions=h(n)),t&&a.storedOptions.indexOf(t)==-1&&(a.storedOptions.push(t),p(n,a.storedOptions))}}),e(n).on("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){a.destroy()})},destroy:function(){var t=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(r).off(".datalist"+this.id),e(n).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),t===i?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",t)},_resetListCached:function(e){var i=this,s;this.needsUpdate=!0,this.lastUpdatedValue=!1,this.lastUnfoundValue="",this.updateTimer||(n.QUnit||(s=e&&r.activeElement==i.input)?i.updateListOptions(s):t.ready("WINDOWLOAD",function(){i.updateTimer=setTimeout(function(){i.updateListOptions(),i=null,f=1},200+100*f)}))},maskHTML:function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")},updateListOptions:function(t){this.needsUpdate=!1,clearTimeout(this.updateTimer),this.updateTimer=!1,this.searchStart=o.customDatalist&&e(this.input).hasClass("search-start");var n=[],r=[],i=[],s,u,a,f,l,c;for(a=e.prop(this.datalist,"options"),f=0,l=a.length;f<l;f++){s=a[f];if(s.disabled)return;u={value:e(s).val()||"",text:e.trim(e.attr(s,"label")||d(s)),className:s.className||"",style:e.attr(s,"style")||""},u.text?u.text!=u.value&&(u.className+=" different-label-value"):u.text=u.value,r[f]=u.value,i[f]=u}this.storedOptions||(this.storedOptions=e(this.input).hasClass("no-datalist-cache")||this._autocomplete=="off"?[]:h((this.input.name||this.input.id)+e.prop(this.input,"type"))),this.storedOptions.forEach(function(e,t){r.indexOf(e)==-1&&i.push({value:e,text:e,className:"stored-suggest",style:""})});for(f=0,l=i.length;f<l;f++)c=i[f],n[f]='<li class="'+c.className+'" style="'+c.style+'" tabindex="-1" role="listitem"><span class="option-label">'+this.maskHTML(c.text,"label",c)+'</span> <span class="option-value">'+this.maskHTML(c.value,"value",c)+"</span></li>";this.arrayOptions=i,this.popover.contentElement.html('<div class="datalist-box"><ul role="list">'+n.join("\n")+"</ul></div>"),(t||this.popover.isVisible)&&this.showHideOptions()},showHideOptions:function(t){var n=e.prop(this.input,"value").toLowerCase();if(n===this.lastUpdatedValue||this.lastUnfoundValue&&n.indexOf(this.lastUnfoundValue)===0)return;this.lastUpdatedValue=n;var r=!1,i=this.searchStart,s=e("li",this.shadowList);n?this.arrayOptions.forEach(function(t,o){var u;"lowerText"in t||(t.text!=t.value?t.lowerText=t.value.toLowerCase()+t.text.toLowerCase():t.lowerText=t.text.toLowerCase()),u=t.lowerText.indexOf(n),u=i?!u:u!==-1,u?(e(s[o]).removeClass("hidden-item"),r=!0):e(s[o]).addClass("hidden-item")}):s.length&&(s.removeClass("hidden-item"),r=!0),this.hasViewableData=r,!t&&r&&this.showList(),r||(this.lastUnfoundValue=n,this.hideList())},showList:function(){if(this.popover.isVisible)return!1;this.needsUpdate&&this.updateListOptions(),this.showHideOptions(!0);if(!this.hasViewableData)return!1;var e=this;return e.shadowList.find("li.active-item").removeClass("active-item"),e.popover.show(this.input),!0},hideList:function(){if(!this.popover.isVisible)return!1;var n=this,r=function(t){n.changedValue&&e(n.input).trigger("change"),n.changedValue=!1};return this.popover.hide(),n.shadowList.removeClass("datalist-visible list-item-active"),n.index=-1,n.changedValue&&(n.triggeredByDatalist=!0,t.triggerInlineForm&&t.triggerInlineForm(n.input,"input"),e(n.input).is(":focus")?e(n.input).one("blur",r):r(),n.triggeredByDatalist=!1),!0},scrollIntoView:function(t){var n=e("ul",this.shadowList),r=e("div.datalist-box",this.shadowList),i=t.position(),s;i.top-=(parseInt(n.css("paddingTop"),10)||0)+(parseInt(n.css("marginTop"),10)||0)+(parseInt(n.css("borderTopWidth"),10)||0);if(i.top<0){r.scrollTop(r.scrollTop()+i.top-2);return}i.top+=t.outerHeight(),s=r.height(),i.top>s&&r.scrollTop(r.scrollTop()+(i.top-s)+2)},changeValue:function(t){if(!t[0])return;var n=e("span.option-value",t).text(),r=e.prop(this.input,"value");n!=r&&(e(this.input).prop("value",n).triggerHandler("updateInput"),this.changedValue=!0)},markItem:function(t,n,r){var i,s;r=r||e("li:not(.hidden-item)",this.shadowList);if(!r.length)return;t<0?t=r.length-1:t>=r.length&&(t=0),r.removeClass("active-item"),this.shadowList.addClass("list-item-active"),i=r.filter(":eq("+t+")").addClass("active-item"),n&&(this.changeValue(i),this.scrollIntoView(i)),this.index=t}};a()}()});