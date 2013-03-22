(function(e){"use strict";var t=/webkit/i.test(navigator.userAgent),n=window.Modernizr,r=e.webshims,i=r.bugs,s=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),o=function(){if(s[0].querySelector)try{i.findRequired=!s[0].querySelector("select:required")}catch(e){i.findRequired=!1}},u=e("input",s).eq(0),a=function(e){r.loader.loadList(["dom-extend"]),r.ready("dom-extend",e)};i.findRequired=!1,i.validationMessage=!1,r.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!!(n.apply(this,arguments)||e.data(t.target,t.type+"DefaultPrevented")||!1)},t._isPolyfilled=!0}};if(!n.formvalidation||i.bustedValidity)o();else{r.capturingEvents(["input"]),r.capturingEvents(["invalid"],!0);if(window.opera||window.testGoodWithFix)s.appendTo("head"),o(),i.validationMessage=!u.prop("validationMessage"),r.reTest(["form-native-extend","form-message"]),s.remove(),e(function(){a(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(n){var i=r.defineNodeNameProperty(n,"checkValidity",{prop:{value:function(){r.fromSubmit||e(this).on("invalid.checkvalidity",t),r.fromCheckValidity=!0;var n=i.prop._supvalue.apply(this,arguments);return r.fromSubmit||e(this).unbind("invalid.checkvalidity",t),r.fromCheckValidity=!1,n}}})})})});t&&!r.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,n=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(n=e.target.form)&&setTimeout(function(){n=!1},1)},!1),e(window).on("invalid",function(e){e.originalEvent&&n&&n==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()}jQuery.webshims.register("form-core",function(e,r,i,s,o,u){var a={checkbox:1,radio:1},f=e([]),l=r.bugs,c={radio:1},h=function(t){t=e(t);var n,r,i=f;return c[t[0].type]&&(r=t.prop("form"),n=t[0].name,n?r?i=e(r[n]):i=e(s.getElementsByName(n)).filter(function(){return!e.prop(this,"form")}):i=t,i=i.filter('[type="radio"]')),i},p=r.getContentValidationMessage=function(t,n,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&i[r]&&(i=i[r]),typeof i=="object"&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||e.each(n,function(e,t){if(t&&e!="valid"&&i[e])return i=i[e],!1})),typeof i=="object"&&(i=i.defaultMessage),i||""},d={number:1,range:1,date:1},v=function(t){var n=!1;return e(e.prop(t,"elements")).each(function(){n=e(this).is(":invalid");if(n)return!1}),n};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!v(t):!!e.prop(t,"willValidate")&&!!g(t)},"invalid-element":function(t){return e.nodeName(t,"form")?v(t):!!e.prop(t,"willValidate")&&!g(t)},"required-element":function(t){return!!e.prop(t,"willValidate")&&!!e.prop(t,"required")},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!!e.prop(t,"willValidate")&&e.prop(t,"required")===!1},"in-range":function(t){if(!d[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!!(n&&!n.rangeOverflow&&!n.rangeUnderflow)},"out-of-range":function(t){if(!d[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!(!n||!n.rangeOverflow&&!n.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(n){}return!1},n.formvalidation&&t&&!r.bugs.bustedValidity&&function(){var t=function(){var e;(e=this.validity)&&!e.customError&&this.setCustomValidity("")};r.addReady(function(n,r){n!==s&&e('input[type="radio"]:invalid',n).add(r.filter('input[type="radio"]:invalid')).each(t)})}();var m=e.event.customEvent||{},g=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(l.bustedValidity||l.findRequired)&&function(){var t=e.find,r=e.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,o=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,n=function(n){var r=arguments;return r=e.call(r,1,r.length),r.unshift(n.replace(i,o)),t.apply(this,r)};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}();if(!n.prefixed||n.prefixed("matchesSelector",s.documentElement))e.find.matchesSelector=function(e,t){return t=t.replace(i,o),r.call(this,e,t)}}();var y=e.prop,b={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,n,r){var i=y.apply(this,arguments);return t&&"form"in t&&b[n]&&r!==o&&e(t).hasClass(S)&&g(t)&&(e(t).getShadowElement().removeClass(x),n=="checked"&&r&&h(t).not(t).removeClass(x).removeAttr("aria-invalid")),i};var w=function(t,n){var r;return e.each(t,function(t,i){if(i)return r=t=="customError"?e.prop(n,"validationMessage"):t,!1}),r},E=function(e){var t;try{t=s.activeElement.name===e}catch(n){}return t},S="user-error",x="user-error form-ui-invalid",T="user-success",N="user-success form-ui-valid",C={time:1,date:1,month:1,datetime:1,week:1,"datetime-local":1},k=function(n){var r,i;if(!n.target)return;r=e(n.target).getNativeElement()[0];if(r.type=="submit"||!e.prop(r,"willValidate"))return;i=e.data(r,"webshimsswitchvalidityclass");var s=function(){if(n.type=="focusout"&&r.type=="radio"&&E(r.name))return;var i=e.prop(r,"validity"),s=e(r).getShadowElement(),o,u,f,c,p;if(t&&n.type=="change"&&!l.bustedValidity&&C[s.prop("type")]&&s.is(":focus"))return;e(r).trigger("refreshCustomValidityRules"),i.valid?s.hasClass(T)||(o=N,u=x,c="changedvaliditystate",f="changedvalid",a[r.type]&&r.checked&&h(r).not(r).removeClass(u).addClass(o).removeAttr("aria-invalid"),e.removeData(r,"webshimsinvalidcause")):(p=w(i,r),e.data(r,"webshimsinvalidcause")!=p&&(e.data(r,"webshimsinvalidcause",p),c="changedvaliditystate"),s.hasClass(S)||(o=x,u=N,a[r.type]&&!r.checked&&h(r).not(r).removeClass(u).addClass(o),f="changedinvalid")),o&&(s.addClass(o).removeClass(u),setTimeout(function(){e(r).trigger(f)},0)),c&&setTimeout(function(){e(r).trigger(c)},0),e.removeData(n.target,"webshimsswitchvalidityclass")};i&&clearTimeout(i),n.type=="refreshvalidityui"?s():e.data(r,"webshimsswitchvalidityclass",setTimeout(s,9))};e(s).on(u.validityUIEvents||"focusout change refreshvalidityui",k),m.changedvaliditystate=!0,m.refreshCustomValidityRules=!0,m.changedvalid=!0,m.changedinvalid=!0,m.refreshvalidityui=!0,r.triggerInlineForm=function(t,n){e(t).trigger(n)},r.modules["form-core"].getGroupElements=h;var L=function(){r.scrollRoot=t||s.compatMode=="BackCompat"?e(s.body):e(s.documentElement)};L(),r.ready("DOM",L),r.getRelOffset=function(t,n){t=e(t);var r=e(n).offset(),i;return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=t.offset()}),r.top-=i.top,r.left-=i.left,r},r.validityAlert=function(){var t="span",n,o=!1,u=!1,a=!1,f,l={hideDelay:5e3,showFor:function(t,n,r,s){l._create(),t=e(t);var u=e(t).getShadowElement(),c=l.getOffsetFromBody(u);l.clear(),s?this.hide():(this.getMessage(t,n),this.position(u,c),this.show(),this.hideDelay&&(o=setTimeout(f,this.hideDelay)),e(i).on("resize.validityalert reposoverlay.validityalert",function(){clearTimeout(a),a=setTimeout(function(){l.position(u)},9)})),r||this.setFocus(u,c)},getOffsetFromBody:function(e){return r.getRelOffset(n,e)},setFocus:function(o,u){var a=e(o).getShadowFocusElement(),l=r.scrollRoot.scrollTop(),c=(u||a.offset()).top-30,h;r.getID&&t=="label"&&n.attr("for",r.getID(a)),l>c&&(r.scrollRoot.animate({scrollTop:c-5},{queue:!1,duration:Math.max(Math.min(600,(l-c)*1.5),80)}),h=!0);try{a[0].focus()}catch(p){}h&&(r.scrollRoot.scrollTop(l),setTimeout(function(){r.scrollRoot.scrollTop(l)},0)),setTimeout(function(){e(s).on("focusout.validityalert",f)},10),e(i).triggerHandler("reposoverlay")},getMessage:function(t,r){r||(r=p(t[0])||t.prop("customValidationMessage")||t.prop("validationMessage")),r?e("span.va-box",n).text(r):this.hide()},position:function(t,r){r=r?e.extend({},r):l.getOffsetFromBody(t),r.top+=t.outerHeight(),n.css(r)},show:function(){n.css("display")==="none"&&n.css({opacity:0}).show(),n.addClass("va-visible").fadeTo(400,1)},hide:function(){n.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(u),clearTimeout(o),e(s).unbind(".validityalert"),e(i).unbind(".validityalert"),n.stop().removeAttr("for")},_create:function(){if(n)return;n=l.errorBubble=e("<"+t+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+t+">").css({position:"absolute",display:"none"}),r.ready("DOM",function(){n.appendTo("body"),e.fn.bgIframe&&n.bgIframe()})}};return f=e.proxy(l,"hide"),l}(),function(){var t,n=[],r,i;e(s).on("invalid",function(i){if(i.wrongWebkitInvalid)return;var o=e(i.target),u=o.getShadowElement();u.hasClass(S)||(u.addClass(x).removeClass(N),setTimeout(function(){e(i.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=i.isDefaultPrevented;var a=e.Event("firstinvalidsystem");e(s).triggerHandler(a,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&i.preventDefault(),n.push(i.target),i.extraData="fix",clearTimeout(r),r=setTimeout(function(){var r={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(i.target).trigger(r,r)},9),o=null,u=null})}(),e.fn.getErrorMessage=function(){var t="",n=this[0];return n&&(t=p(n)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),t},u.replaceValidationUI&&r.ready("DOM forms",function(){e(s).on("firstinvalid",function(t){t.isInvalidUIPrevented()||(t.preventDefault(),e.webshims.validityAlert.showFor(t.target))})})})})(jQuery),jQuery.webshims.register("form-native-extend",function(e,t,n,r,i,s){"use strict";var o=n.Modernizr,u=o.inputtypes;if(!o.formvalidation||t.bugs.bustedValidity)return;var a=t.inputTypes,f={};t.addInputType=function(e,t){a[e]=t},t.addValidityRule=function(e,t){f[e]=t},t.addValidityRule("typeMismatch",function(e,t,n,r){if(t==="")return!1;var i=r.typeMismatch;return"type"in n||(n.type=(e[0].getAttribute("type")||"").toLowerCase()),a[n.type]&&a[n.type].mismatch&&(i=a[n.type].mismatch(t,e)),i});var l=s.overrideMessages,c=!u.number||!u.time||!u.range||l,h=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],p=l?["value","checked"]:["value"],d=[],v=function(t,n){if(!t)return;var i=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();if(!l&&!a[i])return;l&&!n&&i=="radio"&&t.name?e(r.getElementsByName(t.name)).each(function(){e.prop(this,"validity")}):e.prop(t,"validity")},m={};["input","textarea","select"].forEach(function(n){var r=t.defineNodeNameProperty(n,"setCustomValidity",{prop:{value:function(i){i+="";var s=n=="input"?e(this).getNativeElement()[0]:this;r.prop._supvalue.call(s,i),t.bugs.validationMessage&&t.data(s,"customvalidationMessage",i),c&&(t.data(s,"hasCustomError",!!i),v(s))}}});m[n]=r.prop._supvalue});if(c||l)p.push("min"),p.push("max"),p.push("step"),d.push("input");l&&(p.push("required"),p.push("pattern"),d.push("select"),d.push("textarea"));if(c){var g;d.forEach(function(n){var r=t.defineNodeNameProperty(n,"validity",{prop:{get:function(){if(g)return;var i=n=="input"?e(this).getNativeElement()[0]:this,s=r.prop._supget.call(i);if(!s)return s;var o={};h.forEach(function(e){o[e]=s[e]});if(!e.prop(i,"willValidate"))return o;g=!0;var u=e(i),c={type:(i.getAttribute&&i.getAttribute("type")||"").toLowerCase(),nodeName:(i.nodeName||"").toLowerCase()},p=u.val(),d=!!t.data(i,"hasCustomError"),v;g=!1,o.customError=d;if(o.valid&&o.customError)o.valid=!1;else if(!o.valid){var y=!0;e.each(o,function(e,t){if(t)return y=!1,!1}),y&&(o.valid=!0)}return e.each(f,function(e,r){o[e]=r(u,p,c,o),o[e]&&(o.valid||!v)&&(l||a[c.type]&&a[c.type].mismatch)&&(m[n].call(i,t.createValidationMessage(i,e)),o.valid=!1,v=!0)}),o.valid?(m[n].call(i,""),t.data(i,"hasCustomError",!1)):l&&!v&&!d&&e.each(o,function(e,r){if(e!=="valid"&&r)return m[n].call(i,t.createValidationMessage(i,e)),!1}),o},writeable:!1}})}),p.forEach(function(e){t.onNodeNamesPropertyModify(d,e,function(e){v(this)})});if(r.addEventListener){var y,b=function(t){if(!("form"in t.target))return;var n=t.target.form;clearTimeout(y),v(t.target),n&&l&&e("input",n).each(function(){this.type=="password"&&v(this)})};r.addEventListener("change",b,!0),l&&(r.addEventListener("blur",b,!0),r.addEventListener("keydown",function(e){if(e.keyCode!=13)return;b(e)},!0)),r.addEventListener("input",function(e){clearTimeout(y),y=setTimeout(function(){v(e.target)},290)},!0)}var w=d.join(",");t.addReady(function(t,n){e(w,t).add(n.filter(w)).each(function(){e.prop(this,"validity")})}),l&&t.ready("DOM form-message",function(){t.activeLang({register:"form-core",callback:function(){e("input, select, textarea").getNativeElement().each(function(){if(t.data(this,"hasCustomError"))return;var n=this,r=e.prop(n,"validity")||{valid:!0},i;if(r.valid)return;i=(n.nodeName||"").toLowerCase(),e.each(r,function(e,r){if(e!=="valid"&&r)return m[i].call(n,t.createValidationMessage(n,e)),!1})})}})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}})}),jQuery.webshims.register("form-message",function(e,t,n,r,i,s){"use strict";var o=t.validityMessages,u=s.overrideMessages||s.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),["select","radio"].forEach(function(e){typeof o["en"].valueMissing=="object"&&(o.en.valueMissing[e]="Please select an option.")}),["date","time","datetime-local"].forEach(function(e){typeof o["en"].rangeUnderflow=="object"&&(o.en.rangeUnderflow[e]="Value must be at or after {%min}.")}),["date","time","datetime-local"].forEach(function(e){typeof o["en"].rangeOverflow=="object"&&(o.en.rangeOverflow[e]="Value must be at or before {%max}.")}),o["en-US"]=o["en-US"]||o.en,o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},o.de||{}),["select","radio"].forEach(function(e){typeof o["de"].valueMissing=="object"&&(o.de.valueMissing[e]="Bitte w\u00e4hlen Sie eine Option aus")}),["date","time","datetime-local"].forEach(function(e){typeof o["de"].rangeUnderflow=="object"&&(o.de.rangeUnderflow[e]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen.")}),["date","time","datetime-local"].forEach(function(e){typeof o["de"].rangeOverflow=="object"&&(o.de.rangeOverflow[e]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen.")});var a=o[""];t.createValidationMessage=function(n,r){var i=a[r];return i&&typeof i!="string"&&(i=i[e.prop(n,"type")]||i[(n.nodeName||"").toLowerCase()]||i.defaultMessage),i&&["value","min","max","title","maxlength","label"].forEach(function(s){if(i.indexOf("{%"+s)===-1)return;var o=(s=="label"?e.trim(e('label[for="'+n.id+'"]',n.form).text()).replace(/\*$|:$/,""):e.attr(n,s))||"";r=="patternMismatch"&&s=="title"&&!o&&t.error("no title for patternMismatch provided. Always add a title attribute."),i=i.replace("{%"+s+"}",o),"value"==s&&(i=i.replace("{%valueLen}",o.length))}),i||""},(t.bugs.validationMessage||!Modernizr.formvalidation||t.bugs.bustedValidity)&&u.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){a=e}}),u.forEach(function(n){t.defineNodeNamesProperty(["fieldset","output","button"],n,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(r){var i=t.defineNodeNameProperty(r,n,{prop:{get:function(){var n=this,r="";if(!e.prop(n,"willValidate"))return r;var s=e.prop(n,"validity")||{valid:1};if(s.valid)return r;r=t.getContentValidationMessage(n,s);if(r)return r;if(s.customError&&n.nodeName){r=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(n):t.data(n,"customvalidationMessage");if(r)return r}return e.each(s,function(e,i){if(e=="valid"||!i)return;r=t.createValidationMessage(n,e);if(r)return!1}),r||""},writeable:!1}})})})});