(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{Ihw8:function(e,t,n){"use strict";n.r(t),n.d(t,"IonMenu",function(){return a}),n.d(t,"IonMenuButton",function(){return h}),n.d(t,"IonMenuController",function(){return y}),n.d(t,"IonMenuToggle",function(){return v});var i=n("B5Ai"),o=n("cBjU"),r=n("gfhn"),s=n("TJRR"),a=function(){function e(){this.lastOnEnd=0,this.blocker=r.a.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return e.prototype.typeChanged=function(e,t){var n=this.contentEl;n&&(void 0!==t&&n.classList.remove("menu-content-"+t),n.classList.add("menu-content-"+e),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},e.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},e.prototype.sideChanged=function(){this.isEndSide=Object(s.h)(this.win,this.side)},e.prototype.swipeGestureChanged=function(){this.updateState()},e.prototype.componentWillLoad=function(){return i.a(this,void 0,void 0,function(){var e,t,o,r,s,a=this;return i.c(this,function(i){switch(i.label){case 0:return this.type=this.type||this.config.get("menuType","ios"===this.mode?"reveal":"overlay"),this.isServer?(this.disabled=!0,[2]):(t=this,[4,this.lazyMenuCtrl.componentOnReady().then(function(e){return e._getInstance()})]);case 1:return e=t.menuCtrl=i.sent(),o=this.el.parentNode,(r=void 0!==this.contentId?document.getElementById(this.contentId):o&&o.querySelector&&o.querySelector("[main]"))&&r.tagName?(this.contentEl=r,r.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),e._register(this),s=this,[4,n.e(0).then(n.bind(null,"2jMD"))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 2:return s.gesture=i.sent().createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:40,threshold:10,canStart:function(e){return a.canStart(e)},onWillStart:function(){return a.onWillStart()},onStart:function(){return a.onStart()},onMove:function(e){return a.onMove(e)},onEnd:function(e){return a.onEnd(e)}}),this.updateState(),[2]}})})},e.prototype.componentDidLoad=function(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},e.prototype.componentDidUnload=function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},e.prototype.onSplitPaneChanged=function(e){this.isPaneVisible=e.detail.isPane(this.el),this.updateState()},e.prototype.onBackdropClick=function(e){this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())},e.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},e.prototype.isActive=function(){return Promise.resolve(this._isActive())},e.prototype.open=function(e){return void 0===e&&(e=!0),this.setOpen(!0,e)},e.prototype.close=function(e){return void 0===e&&(e=!0),this.setOpen(!1,e)},e.prototype.toggle=function(e){return void 0===e&&(e=!0),this.setOpen(!this._isOpen,e)},e.prototype.setOpen=function(e,t){return void 0===t&&(t=!0),this.menuCtrl._setOpen(this,e,t)},e.prototype._setOpen=function(e,t){return void 0===t&&(t=!0),i.a(this,void 0,void 0,function(){return i.c(this,function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||e===this._isOpen?[2,!1]:(this.beforeAnimation(e),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(e,t)];case 2:return n.sent(),this.afterAnimation(e),[2,!0]}})})},e.prototype.loadAnimation=function(){return i.a(this,void 0,void 0,function(){var e,t;return i.c(this,function(n){switch(n.label){case 0:return(e=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t=this,[4,this.menuCtrl._createAnimation(this.type,this)]);case 1:return t.animation=n.sent(),[2]}})})},e.prototype.startAnimation=function(e,t){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!e),t?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},e.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},e.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},e.prototype.canStart=function(e){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&function(e,t,n,i){return n?t>=e.innerWidth-i:t<=i}(this.win,e.currentX,this.isEndSide,this.maxEdgeStart))},e.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},e.prototype.onStart=function(){this.isAnimating&&this.animation&&this.animation.reverse(this._isOpen).progressStart()},e.prototype.onMove=function(e){if(this.isAnimating&&this.animation){var t=u(e.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(t/this.width)}},e.prototype.onEnd=function(e){var t=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=u(e.deltaX,n,i),r=this.width,s=o/r,a=e.velocityX,c=r/2,l=a>=0&&(a>.2||e.deltaX>c),d=a<=0&&(a<-.2||e.deltaX<-c),h=n?i?l:d:i?d:l,p=!n&&h;n&&!h&&(p=!0);var m=(h?1-s:s)*r,f=0;if(m>5){var b=m/Math.abs(a);f=Math.min(b,300)}this.lastOnEnd=e.timeStamp,this.animation.onFinish(function(){return t.afterAnimation(p)},{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(h,s,f)}},e.prototype.beforeAnimation=function(e){this.el.classList.add(c),this.backdropEl&&this.backdropEl.classList.add(l),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()},e.prototype.afterAnimation=function(e){this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),this.enableListener(this,"click",e),e?(this.contentEl&&this.contentEl.classList.add(d),this.ionDidOpen.emit()):(this.el.classList.remove(c),this.contentEl&&this.contentEl.classList.remove(d),this.backdropEl&&this.backdropEl.classList.remove(l),this.ionDidClose.emit())},e.prototype.updateState=function(){var e=this._isActive();this.gesture&&this.gesture.setDisabled(!e||!this.swipeGesture),!e&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this)},e.prototype.forceClosing=function(){this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)},e.prototype.hostData=function(){var e,t=this.isEndSide,n=this.disabled,i=this.isPaneVisible;return{role:"complementary",class:(e={},e["menu-type-"+this.type]=!0,e["menu-enabled"]=!n,e["menu-side-end"]=t,e["menu-side-start"]=!t,e["menu-pane-visible"]=i,e)}},e.prototype.render=function(){var e=this;return[Object(o.b)("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},Object(o.b)("slot",null)),Object(o.b)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(e,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionWillOpen",method:"ionWillOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionWillClose",method:"ionWillClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidOpen",method:"ionDidOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidClose",method:"ionDidClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-menu-ios-h{--width:304px;--width-small:264px;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}.show-menu.sc-ion-menu-ios-h{display:block}.menu-inner.sc-ion-menu-ios{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);height:100%;background:var(--background);contain:strict}.menu-side-start.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{--ion-safe-area-right:0px;right:auto;left:0}.menu-side-end.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop.sc-ion-menu-ios{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner.sc-ion-menu-ios{width:var(--width-small)}}.menu-type-reveal.sc-ion-menu-ios-h{z-index:0}.menu-type-reveal.show-menu.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-type-overlay.sc-ion-menu-ios-h{z-index:80}.menu-type-overlay.sc-ion-menu-ios-h   .show-backdrop.sc-ion-menu-ios{display:block;cursor:pointer}.menu-pane-visible.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}.menu-pane-visible.sc-ion-menu-ios-h   ion-backdrop.sc-ion-menu-ios{display:hidden!important}.menu-type-push.sc-ion-menu-ios-h{z-index:80}.menu-type-push.sc-ion-menu-ios-h   .show-backdrop.sc-ion-menu-ios{display:block}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function u(e,t,n){return Math.max(0,t!==n?-e:e)}var c="show-menu",l="show-backdrop",d="menu-content-open",h=function(){function e(){this.autoHide=!0}return e.prototype.hostData=function(){return{"ion-activatable":!0,class:{button:!0}}},e.prototype.render=function(){var e=this.config.get("menuIcon","menu");return Object(o.b)("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},Object(o.b)("button",{type:"button"},Object(o.b)("slot",null,Object(o.b)("ion-icon",{icon:e,mode:this.mode,color:this.color,lazy:!1})),"md"===this.mode&&Object(o.b)("ion-ripple-effect",null)))},Object.defineProperty(e,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-menu-button-ios-h{color:var(--color);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;--color:var(--ion-color-primary, #3880ff)}button.sc-ion-menu-button-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 5px}ion-icon.sc-ion-menu-button-ios{margin:0;padding:0;pointer-events:none;font-size:31px}.ion-color.sc-ion-menu-button-ios-h   .button-native.sc-ion-menu-button-ios{color:var(--ion-color-base)}.activated.sc-ion-menu-button-ios-h{opacity:.4}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function p(e){return Promise.resolve((new e).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var m=8;function f(e,t,n){var i,o,r=n.width+m;n.isEndSide?(i=r+"px",o="0px"):(i=-r+"px",o="0px");var s=(new e).addElement(n.menuInnerEl).fromTo("translateX",i,o),a=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.3);return p(e).then(function(e){return e.add(s).add(a)})}function b(e,t,n){var i,o,r=n.width;n.isEndSide?(i=-r+"px",o=r+"px"):(i=r+"px",o=-r+"px");var s=(new e).addElement(n.menuInnerEl).fromTo("translateX",o,"0px"),a=(new e).addElement(n.contentEl).fromTo("translateX","0px",i),u=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.2);return p(e).then(function(e){return e.add(s).add(u).add(a)})}function g(e,t,n){var i=n.width*(n.isEndSide?-1:1)+"px",o=(new e).addElement(n.contentEl).fromTo("translateX","0px",i);return p(e).then(function(e){return e.add(o)})}var y=function(){function e(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",g),this.registerAnimation("push",b),this.registerAnimation("overlay",f)}return e.prototype.open=function(e){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,t.open()]:[2,!1]}})})},e.prototype.close=function(e){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(n){switch(n.label){case 0:return[4,void 0!==e?this.get(e):this.getOpen()];case 1:return void 0!==(t=n.sent())?[2,t.close()]:[2,!1]}})})},e.prototype.toggle=function(e){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,t.toggle()]:[2,!1]}})})},e.prototype.enable=function(e,t){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(i){switch(i.label){case 0:return[4,this.get(t)];case 1:return(n=i.sent())&&(n.disabled=!e),[2,n]}})})},e.prototype.swipeGesture=function(e,t){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(i){switch(i.label){case 0:return[4,this.get(t)];case 1:return(n=i.sent())&&(n.swipeGesture=e),[2,n]}})})},e.prototype.isOpen=function(e){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(n){switch(n.label){case 0:return null==e?[3,2]:[4,this.get(e)];case 1:return[2,void 0!==(t=n.sent())&&t.isOpen()];case 2:return[4,this.getOpen()];case 3:return[2,void 0!==(t=n.sent())]}})})},e.prototype.isEnabled=function(e){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(n){switch(n.label){case 0:return[4,this.get(e)];case 1:return(t=n.sent())?[2,!t.disabled]:[2,!1]}})})},e.prototype.get=function(e){return i.a(this,void 0,void 0,function(){var t,n;return i.c(this,function(i){switch(i.label){case 0:return[4,this.waitUntilReady()];case 1:return i.sent(),"start"===e||"end"===e?(t=this.find(function(t){return t.side===e&&!t.disabled}))?[2,t]:[2,this.find(function(t){return t.side===e})]:null!=e?[2,this.find(function(t){return t.menuId===e})]:(n=this.find(function(e){return!e.disabled}))?[2,n]:[2,this.menus.length>0?this.menus[0].el:void 0]}})})},e.prototype.getOpen=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(e){switch(e.label){case 0:return[4,this.waitUntilReady()];case 1:return e.sent(),[2,this.getOpenSync()]}})})},e.prototype.getMenus=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(e){switch(e.label){case 0:return[4,this.waitUntilReady()];case 1:return e.sent(),[2,this.getMenusSync()]}})})},e.prototype.isAnimating=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(e){switch(e.label){case 0:return[4,this.waitUntilReady()];case 1:return e.sent(),[2,this.isAnimatingSync()]}})})},e.prototype.registerAnimation=function(e,t){this.menuAnimations.set(e,t)},e.prototype._getInstance=function(){return Promise.resolve(this)},e.prototype._register=function(e){var t=this.menus;t.indexOf(e)<0&&(e.disabled||this._setActiveMenu(e),t.push(e))},e.prototype._unregister=function(e){var t=this.menus.indexOf(e);t>-1&&this.menus.splice(t,1)},e.prototype._setActiveMenu=function(e){var t=e.side;this.menus.filter(function(n){return n.side===t&&n!==e}).forEach(function(e){return e.disabled=!0})},e.prototype._setOpen=function(e,t,n){return i.a(this,void 0,void 0,function(){var o;return i.c(this,function(i){switch(i.label){case 0:return this.isAnimatingSync()?[2,!1]:t?[4,this.getOpen()]:[3,3];case 1:return(o=i.sent())&&e.el!==o?[4,o.setOpen(!1,!1)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,e._setOpen(t,n)]}})})},e.prototype._createAnimation=function(e,t){var n=this.menuAnimations.get(e);return n?this.animationCtrl.create(n,null,t):Promise.reject("animation not registered")},e.prototype.getOpenSync=function(){return this.find(function(e){return e._isOpen})},e.prototype.getMenusSync=function(){return this.menus.map(function(e){return e.el})},e.prototype.isAnimatingSync=function(){return this.menus.some(function(e){return e.isAnimating})},e.prototype.find=function(e){var t=this.menus.find(e);if(void 0!==t)return t.el},e.prototype.waitUntilReady=function(){return Promise.all(Array.from(this.doc.querySelectorAll("ion-menu")).map(function(e){return e.componentOnReady()}))},Object.defineProperty(e,"is",{get:function(){return"ion-menu-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{_getInstance:{method:!0},animationCtrl:{connect:"ion-animation-controller"},close:{method:!0},doc:{context:"document"},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"},enumerable:!0,configurable:!0}),e}(),v=function(){function e(){this.visible=!1,this.autoHide=!0}return e.prototype.componentDidLoad=function(){return this.updateVisibility()},e.prototype.onClick=function(){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(t){switch(t.label){case 0:return[4,w(this.doc)];case 1:return(e=t.sent())?[4,e.get(this.menu)]:[3,3];case 2:t.sent()&&e.toggle(this.menu),t.label=3;case 3:return[2]}})})},e.prototype.updateVisibility=function(){return i.a(this,void 0,void 0,function(){var e,t,n;return i.c(this,function(i){switch(i.label){case 0:return[4,w(this.doc)];case 1:return(e=i.sent())?[4,e.get(this.menu)]:[3,5];case 2:return t=i.sent(),(n=t)?[4,t.isActive()]:[3,4];case 3:n=i.sent(),i.label=4;case 4:if(n)return this.visible=!0,[2];i.label=5;case 5:return this.visible=!1,[2]}})})},e.prototype.hostData=function(){var e=this.autoHide&&!this.visible;return{"aria-hidden":e?"true":null,class:{"menu-toggle-hidden":e}}},e.prototype.render=function(){return Object(o.b)("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".menu-toggle-hidden.sc-ion-menu-toggle-h{display:none}"},enumerable:!0,configurable:!0}),e}();function w(e){var t=e.querySelector("ion-menu-controller");return t?t.componentOnReady():Promise.resolve(void 0)}}}]);