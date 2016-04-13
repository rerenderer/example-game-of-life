// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.android.core');
goog.require('cljs.core');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.platform.android.bus');
goog.require('rerenderer.platform.android.events');
goog.require('rerenderer.types.render_result');
goog.require('rerenderer.types.component');
goog.require('rerenderer.types.node');
goog.require('rerenderer.lang.core');
if(cljs.core.truth_(rerenderer.platform.android.bus.available_QMARK_.call(null))){
cljs.core.reset_BANG_.call(null,rerenderer.platform.core.platform,new cljs.core.Keyword(null,"android","android",-2084094573));
} else {
}

/**
 * Should be implemented for adding android support to component.
 * @interface
 */
rerenderer.platform.android.core.IAndroid = function(){};

rerenderer.platform.android.core.render_android = (function rerenderer$platform$android$core$render_android(_,bitmap){
if((!((_ == null))) && (!((_.rerenderer$platform$android$core$IAndroid$render_android$arity$2 == null)))){
return _.rerenderer$platform$android$core$IAndroid$render_android$arity$2(_,bitmap);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (rerenderer.platform.android.core.render_android[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,_,bitmap);
} else {
var m__6812__auto____$1 = (rerenderer.platform.android.core.render_android["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,_,bitmap);
} else {
throw cljs.core.missing_protocol.call(null,"IAndroid.render-android",_);
}
}
}
});

cljs.core._add_method.call(null,rerenderer.platform.core.apply_script_BANG_,new cljs.core.Keyword(null,"android","android",-2084094573),(function (script,root,options){
return rerenderer.platform.android.bus.interpret_BANG_.call(null,script,root,options);
}));
cljs.core._add_method.call(null,rerenderer.platform.core.listen_BANG_,new cljs.core.Keyword(null,"android","android",-2084094573),(function (ch,_){
return rerenderer.platform.android.events.bind_event_BANG_.call(null,ch);
}));
cljs.core._add_method.call(null,rerenderer.platform.core.render,new cljs.core.Keyword(null,"android","android",-2084094573),(function (component){
if(((!((component == null)))?(((false) || (component.rerenderer$types$component$IComponent$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.types.component.IComponent,component):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.types.component.IComponent,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IComponent","IComponent",-2062734473,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.rerenderer$platform$android$core$IAndroid$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.platform.android.core.IAndroid,component):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.platform.android.core.IAndroid,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IAndroid","IAndroid",1793461610,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,rerenderer.lang.core.script,cljs.core.PersistentVector.EMPTY);

var script = rerenderer.lang.core.script;
var result__20092__auto__ = (function (){var map__20373 = rerenderer.types.component.props.call(null,component);
var map__20373__$1 = ((((!((map__20373 == null)))?((((map__20373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20373):map__20373);
var width = cljs.core.get.call(null,map__20373__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20373__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var colorspace = rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Bitmap$Config"),"ARGB_8888");
var bitmap = rerenderer.lang.core.rcall_BANG_.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Bitmap"),"createBitmap",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height,colorspace], null));
var canvas = rerenderer.lang.core.rnew.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Canvas"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bitmap], null));
rerenderer.platform.android.core.render_android.call(null,component,canvas);

return rerenderer.types.render_result.__GT_RenderResult.call(null,cljs.core.deref.call(null,script),bitmap);
})();
cljs.core.reset_BANG_.call(null,rerenderer.lang.core.script,cljs.core.PersistentVector.EMPTY);

return result__20092__auto__;
}));
cljs.core._add_method.call(null,rerenderer.platform.core.render_to,new cljs.core.Keyword(null,"android","android",-2084094573),(function (child,parent){
if((child instanceof rerenderer.types.node.Node)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"Node","Node",446032991,null),new cljs.core.Symbol(null,"child","child",-2030468224,null))))].join('')));
}

if((parent instanceof rerenderer.types.node.Node)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"Node","Node",446032991,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,rerenderer.lang.core.script,cljs.core.PersistentVector.EMPTY);

var script = rerenderer.lang.core.script;
var result__20092__auto__ = (function (){
var paint_20375 = rerenderer.lang.core.rnew.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Paint"),cljs.core.PersistentVector.EMPTY);
var parent_canvas_20376 = rerenderer.lang.core.rnew.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Canvas"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(parent)], null));
rerenderer.lang.core.rcall_BANG_.call(null,parent_canvas_20376,"drawBitmap",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(child),paint_20375], null));

return cljs.core.deref.call(null,script);
})()
;
cljs.core.reset_BANG_.call(null,rerenderer.lang.core.script,cljs.core.PersistentVector.EMPTY);

return result__20092__auto__;
}));
cljs.core._add_method.call(null,rerenderer.platform.core.information,new cljs.core.Keyword(null,"android","android",-2084094573),(function (_){
return cljs.core.deref.call(null,rerenderer.platform.android.bus.information);
}));
