// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.browser.core');
goog.require('cljs.core');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.platform.browser.interpreter');
goog.require('rerenderer.platform.browser.events');
goog.require('rerenderer.lang.core');
goog.require('rerenderer.types.render_result');
goog.require('rerenderer.types.component');
goog.require('rerenderer.types.node');
if(cljs.core.truth_(cljs.core.deref.call(null,rerenderer.platform.core.platform))){
} else {
cljs.core.reset_BANG_.call(null,rerenderer.platform.core.platform,new cljs.core.Keyword(null,"browser","browser",828191719));
}

/**
 * Should be implemented for adding browser support to component.
 * @interface
 */
rerenderer.platform.browser.core.IBrowser = function(){};

rerenderer.platform.browser.core.render_browser = (function rerenderer$platform$browser$core$render_browser(_,ctx){
if((!((_ == null))) && (!((_.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 == null)))){
return _.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2(_,ctx);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (rerenderer.platform.browser.core.render_browser[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,_,ctx);
} else {
var m__6812__auto____$1 = (rerenderer.platform.browser.core.render_browser["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,_,ctx);
} else {
throw cljs.core.missing_protocol.call(null,"IBrowser.render-browser",_);
}
}
}
});

/**
 * Return canvas from options or first canvas in the document.
 */
rerenderer.platform.browser.core.get_canvas = (function rerenderer$platform$browser$core$get_canvas(options){
var or__6156__auto__ = new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (document.getElementsByTagName("canvas")[(0)]);
}
});
cljs.core._add_method.call(null,rerenderer.platform.core.apply_script_BANG_,new cljs.core.Keyword(null,"browser","browser",828191719),(function (script,p__20100,options){
var vec__20101 = p__20100;
var _ = cljs.core.nth.call(null,vec__20101,(0),null);
var root_ref = cljs.core.nth.call(null,vec__20101,(1),null);
var canvas = rerenderer.platform.browser.core.get_canvas.call(null,options);
var ctx = canvas.getContext("2d");
var pool = rerenderer.platform.browser.interpreter.interpret_BANG_.call(null,script);
var rendered = pool.call(null,root_ref);
if(cljs.core.truth_(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(options))){
return ctx.drawImage(rendered,(0),(0),rendered.width,rendered.height,(0),(0),canvas.width,canvas.height);
} else {
return ctx.drawImage(rendered,(0),(0));
}
}));
cljs.core._add_method.call(null,rerenderer.platform.core.listen_BANG_,new cljs.core.Keyword(null,"browser","browser",828191719),(function (ch,options){
return rerenderer.platform.browser.events.bind_events_BANG_.call(null,ch,rerenderer.platform.browser.core.get_canvas.call(null,options));
}));
cljs.core._add_method.call(null,rerenderer.platform.core.render,new cljs.core.Keyword(null,"browser","browser",828191719),(function (component){
if(((!((component == null)))?(((false) || (component.rerenderer$types$component$IComponent$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.types.component.IComponent,component):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.types.component.IComponent,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IComponent","IComponent",-2062734473,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.rerenderer$platform$browser$core$IBrowser$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.platform.browser.core.IBrowser,component):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.platform.browser.core.IBrowser,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IBrowser","IBrowser",-1679262377,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,rerenderer.lang.core.script,cljs.core.PersistentVector.EMPTY);

var script = rerenderer.lang.core.script;
var result__20092__auto__ = (function (){var map__20104 = rerenderer.types.component.props.call(null,component);
var map__20104__$1 = ((((!((map__20104 == null)))?((((map__20104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20104):map__20104);
var width = cljs.core.get.call(null,map__20104__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20104__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var canvas = rerenderer.lang.core.rcall_BANG_.call(null,rerenderer.lang.forms.__GT_Static.call(null,"document"),"createElement",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["canvas"], null));
var ctx = rerenderer.lang.core.rcall_BANG_.call(null,canvas,"getContext",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2d"], null));
rerenderer.lang.core.rset_BANG_.call(null,canvas,"width",width);

rerenderer.lang.core.rset_BANG_.call(null,canvas,"height",height);

rerenderer.platform.browser.core.render_browser.call(null,component,ctx);

return rerenderer.types.render_result.__GT_RenderResult.call(null,cljs.core.deref.call(null,script),canvas);
})();
cljs.core.reset_BANG_.call(null,rerenderer.lang.core.script,cljs.core.PersistentVector.EMPTY);

return result__20092__auto__;
}));
cljs.core._add_method.call(null,rerenderer.platform.core.render_to,new cljs.core.Keyword(null,"browser","browser",828191719),(function (child,parent){
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
var ctx_20106 = rerenderer.lang.core.rcall_BANG_.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(parent),"getContext",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2d"], null));
rerenderer.lang.core.rcall_BANG_.call(null,ctx_20106,"drawImage",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(child)], null));

return cljs.core.deref.call(null,script);
})()
;
cljs.core.reset_BANG_.call(null,rerenderer.lang.core.script,cljs.core.PersistentVector.EMPTY);

return result__20092__auto__;
}));
cljs.core._add_method.call(null,rerenderer.platform.core.information,new cljs.core.Keyword(null,"browser","browser",828191719),(function (options){
var canvas = rerenderer.platform.browser.core.get_canvas.call(null,options);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),canvas.width,new cljs.core.Keyword(null,"height","height",1025178622),canvas.height,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),null,new cljs.core.Keyword(null,"mouse","mouse",478628972),null], null), null)], null);
}));
