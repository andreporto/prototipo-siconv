(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{TrFr:function(e,o,c){"use strict";c.r(o),c.d(o,"IonCheckbox",function(){return r});var i=c("cBjU"),t=c("TJRR"),n=c("HHlg"),r=function(){function e(){var e=this;this.inputId="ion-cb-"+a++,this.labelId=this.inputId+"-lbl",this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onChange=function(){e.checked=!e.checked},this.onKeyUp=function(){e.keyFocus=!0},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.keyFocus=!1,e.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.componentDidLoad=function(){this.ionStyle=Object(t.e)(this.ionStyle)},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.hostData=function(){return{class:Object.assign({},Object(n.h)(this.color),{"in-item":Object(n.j)("ion-item",this.el),"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){return Object(t.f)(this.el,this.name,this.value,this.disabled),[Object(i.b)("div",{class:"checkbox-icon"},Object(i.b)("div",{class:"checkbox-inner"})),Object(i.b)("input",{type:"checkbox",id:this.inputId,"aria-labelledby":this.labelId,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,checked:this.checked,name:this.name,value:this.value,disabled:this.disabled})]},Object.defineProperty(e,"is",{get:function(){return"ion-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-checkbox-ios-h{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--size:24px;--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:var(--ion-item-border-color, #c8c7cc);--background:var(--ion-item-background-color, var(--ion-background-color, #fff))}.ion-color.sc-ion-checkbox-ios-h{--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}input.sc-ion-checkbox-ios{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.checkbox-icon.sc-ion-checkbox-ios{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict}.checkbox-inner.sc-ion-checkbox-ios{border-color:var(--checkmark-color);opacity:0;left:calc(var(--size)/ 2.5 - 1px);top:calc(var(--size)/ 6);position:absolute;width:calc(var(--size)/ 6 + 1px);height:calc(var(--size)/ 2);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 1px 1px 0;border-style:solid}.checkbox-checked.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios{border-color:var(--border-color-checked);background:var(--background-checked)}.checkbox-checked.sc-ion-checkbox-ios-h   .checkbox-inner.sc-ion-checkbox-ios{opacity:1}.checkbox-disabled.sc-ion-checkbox-ios-h{pointer-events:none;opacity:.3}.checkbox-key.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios::after{border-radius:50%;left:-9px;top:-9px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}.in-item.sc-ion-checkbox-ios-h{margin:8px 16px 8px 2px;display:block;position:static}.in-item[slot=end].sc-ion-checkbox-ios-h{margin:10px 8px 9px 0}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),a=0}}]);