// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.android.bus');
goog.require('cljs.core');
goog.require('rerenderer.platform.utils');
/**
 * Returns `true` when interop object available.
 */
rerenderer.platform.android.bus.available_QMARK_ = (function rerenderer$platform$android$bus$available_QMARK_(){
return (window["android"]);
});
/**
 * Interpretes script on android side.
 */
rerenderer.platform.android.bus.interpret_BANG_ = (function rerenderer$platform$android$bus$interpret_BANG_(script,root,options){
return android.interpret(rerenderer.platform.utils.to_json.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"script","script",-1304443801),script,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(options))], null)));
});
/**
 * Subscribes to events, event have format {:event name **props}
 */
rerenderer.platform.android.bus.on_event_BANG_ = (function rerenderer$platform$android$bus$on_event_BANG_(callback){
return window.androidEventsCallback = (function (p1__20111_SHARP_){
return callback.call(null,rerenderer.platform.utils.from_json.call(null,p1__20111_SHARP_));
});
});
rerenderer.platform.android.bus.on_event_BANG_.call(null,(function (p1__20112_SHARP_){
return console.log("Event listener not set, skip:",p1__20112_SHARP_);
}));
rerenderer.platform.android.bus.information = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"touch","touch",1496272469),null], null), null)], null));
window.androidUpdateInformation = (function (p1__20113_SHARP_,p2__20114_SHARP_){
return cljs.core.swap_BANG_.call(null,rerenderer.platform.android.bus.information,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),p1__20113_SHARP_,new cljs.core.Keyword(null,"height","height",1025178622),p2__20114_SHARP_);
});
