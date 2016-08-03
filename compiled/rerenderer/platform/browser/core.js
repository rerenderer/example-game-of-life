// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.browser.core');
goog.require('cljs.core');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.platform.browser.events');
goog.require('rerenderer.component');
if(cljs.core.truth_(cljs.core.deref.call(null,rerenderer.platform.core.platform))){
} else {
cljs.core.reset_BANG_.call(null,rerenderer.platform.core.platform,new cljs.core.Keyword(null,"browser","browser",828191719));
}

/**
 * Component that implement that protocol support rendering in browser.
 * @interface
 */
rerenderer.platform.browser.core.IBrowser = function(){};

/**
 * Render component on canvas context.
 * 
 *                Example:
 * 
 *                ```
 *                (reify
 *                  IComponent
 *                  ...
 *                  IBrowser
 *                  (render-browser [_ ctx]
 *                    (set! (.-fillStyle ctx) "rgb(255, 0, 0)")
 *                    (.fillRect ctx 0 0 100 100)))
 *                ```
 */
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
rerenderer.platform.browser.core.cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
rerenderer.platform.browser.core.used = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
cljs.core._add_method.call(null,rerenderer.platform.core.listen_BANG_,new cljs.core.Keyword(null,"browser","browser",828191719),(function (ch,options){
return rerenderer.platform.browser.events.bind_events_BANG_.call(null,ch,rerenderer.platform.browser.core.get_canvas.call(null,options));
}));
rerenderer.platform.browser.core.render_component = (function rerenderer$platform$browser$core$render_component(parent_canvas,component){
if(((!((component == null)))?(((false) || (component.rerenderer$component$IComponent$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.component.IComponent,component):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.component.IComponent,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IComponent","IComponent",-2062734473,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.rerenderer$platform$browser$core$IBrowser$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.platform.browser.core.IBrowser,component):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.platform.browser.core.IBrowser,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IBrowser","IBrowser",-1679262377,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var map__15496 = rerenderer.component.props.call(null,component);
var map__15496__$1 = ((((!((map__15496 == null)))?((((map__15496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15496):map__15496);
var width = cljs.core.get.call(null,map__15496__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15496__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.call(null,map__15496__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15496__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var parent_ctx = parent_canvas.getContext("2d");
var component_path = rerenderer.component.path.call(null,component);
cljs.core.swap_BANG_.call(null,rerenderer.platform.browser.core.used,cljs.core.conj,component_path);

if(cljs.core.truth_(cljs.core.deref.call(null,rerenderer.platform.browser.core.cache).call(null,component_path))){
var canvas = cljs.core.deref.call(null,rerenderer.platform.browser.core.cache).call(null,component_path);
parent_ctx.drawImage(canvas,x,y);

return canvas;
} else {
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = width;

canvas.height = height;

rerenderer.platform.browser.core.render_browser.call(null,component,ctx);

var seq__15498_15502 = cljs.core.seq.call(null,rerenderer.component.childs.call(null,component));
var chunk__15499_15503 = null;
var count__15500_15504 = (0);
var i__15501_15505 = (0);
while(true){
if((i__15501_15505 < count__15500_15504)){
var child_15506 = cljs.core._nth.call(null,chunk__15499_15503,i__15501_15505);
rerenderer$platform$browser$core$render_component.call(null,canvas,child_15506);

var G__15507 = seq__15498_15502;
var G__15508 = chunk__15499_15503;
var G__15509 = count__15500_15504;
var G__15510 = (i__15501_15505 + (1));
seq__15498_15502 = G__15507;
chunk__15499_15503 = G__15508;
count__15500_15504 = G__15509;
i__15501_15505 = G__15510;
continue;
} else {
var temp__4657__auto___15511 = cljs.core.seq.call(null,seq__15498_15502);
if(temp__4657__auto___15511){
var seq__15498_15512__$1 = temp__4657__auto___15511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15498_15512__$1)){
var c__6959__auto___15513 = cljs.core.chunk_first.call(null,seq__15498_15512__$1);
var G__15514 = cljs.core.chunk_rest.call(null,seq__15498_15512__$1);
var G__15515 = c__6959__auto___15513;
var G__15516 = cljs.core.count.call(null,c__6959__auto___15513);
var G__15517 = (0);
seq__15498_15502 = G__15514;
chunk__15499_15503 = G__15515;
count__15500_15504 = G__15516;
i__15501_15505 = G__15517;
continue;
} else {
var child_15518 = cljs.core.first.call(null,seq__15498_15512__$1);
rerenderer$platform$browser$core$render_component.call(null,canvas,child_15518);

var G__15519 = cljs.core.next.call(null,seq__15498_15512__$1);
var G__15520 = null;
var G__15521 = (0);
var G__15522 = (0);
seq__15498_15502 = G__15519;
chunk__15499_15503 = G__15520;
count__15500_15504 = G__15521;
i__15501_15505 = G__15522;
continue;
}
} else {
}
}
break;
}

parent_ctx.drawImage(canvas,x,y);

return canvas;
}
});
cljs.core._add_method.call(null,rerenderer.platform.core.render,new cljs.core.Keyword(null,"browser","browser",828191719),(function (component,options){
if(((!((component == null)))?(((false) || (component.rerenderer$component$IComponent$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.component.IComponent,component):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.component.IComponent,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IComponent","IComponent",-2062734473,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.rerenderer$platform$browser$core$IBrowser$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.platform.browser.core.IBrowser,component):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.platform.browser.core.IBrowser,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IBrowser","IBrowser",-1679262377,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,rerenderer.platform.browser.core.used,cljs.core.PersistentHashSet.EMPTY);

var result = rerenderer.platform.browser.core.render_component.call(null,rerenderer.platform.browser.core.get_canvas.call(null,options),component);
var seq__15525_15533 = cljs.core.seq.call(null,cljs.core.deref.call(null,rerenderer.platform.browser.core.cache));
var chunk__15527_15534 = null;
var count__15528_15535 = (0);
var i__15529_15536 = (0);
while(true){
if((i__15529_15536 < count__15528_15535)){
var vec__15531_15537 = cljs.core._nth.call(null,chunk__15527_15534,i__15529_15536);
var k_15538 = cljs.core.nth.call(null,vec__15531_15537,(0),null);
var __15539 = cljs.core.nth.call(null,vec__15531_15537,(1),null);
if(cljs.core.not.call(null,cljs.core.deref.call(null,rerenderer.platform.browser.core.used).call(null,k_15538))){
cljs.core.swap_BANG_.call(null,rerenderer.platform.browser.core.cache,cljs.core.dissoc,k_15538);

var G__15540 = seq__15525_15533;
var G__15541 = chunk__15527_15534;
var G__15542 = count__15528_15535;
var G__15543 = (i__15529_15536 + (1));
seq__15525_15533 = G__15540;
chunk__15527_15534 = G__15541;
count__15528_15535 = G__15542;
i__15529_15536 = G__15543;
continue;
} else {
var G__15544 = seq__15525_15533;
var G__15545 = chunk__15527_15534;
var G__15546 = count__15528_15535;
var G__15547 = (i__15529_15536 + (1));
seq__15525_15533 = G__15544;
chunk__15527_15534 = G__15545;
count__15528_15535 = G__15546;
i__15529_15536 = G__15547;
continue;
}
} else {
var temp__4657__auto___15548 = cljs.core.seq.call(null,seq__15525_15533);
if(temp__4657__auto___15548){
var seq__15525_15549__$1 = temp__4657__auto___15548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15525_15549__$1)){
var c__6959__auto___15550 = cljs.core.chunk_first.call(null,seq__15525_15549__$1);
var G__15551 = cljs.core.chunk_rest.call(null,seq__15525_15549__$1);
var G__15552 = c__6959__auto___15550;
var G__15553 = cljs.core.count.call(null,c__6959__auto___15550);
var G__15554 = (0);
seq__15525_15533 = G__15551;
chunk__15527_15534 = G__15552;
count__15528_15535 = G__15553;
i__15529_15536 = G__15554;
continue;
} else {
var vec__15532_15555 = cljs.core.first.call(null,seq__15525_15549__$1);
var k_15556 = cljs.core.nth.call(null,vec__15532_15555,(0),null);
var __15557 = cljs.core.nth.call(null,vec__15532_15555,(1),null);
if(cljs.core.not.call(null,cljs.core.deref.call(null,rerenderer.platform.browser.core.used).call(null,k_15556))){
cljs.core.swap_BANG_.call(null,rerenderer.platform.browser.core.cache,cljs.core.dissoc,k_15556);

var G__15558 = cljs.core.next.call(null,seq__15525_15549__$1);
var G__15559 = null;
var G__15560 = (0);
var G__15561 = (0);
seq__15525_15533 = G__15558;
chunk__15527_15534 = G__15559;
count__15528_15535 = G__15560;
i__15529_15536 = G__15561;
continue;
} else {
var G__15562 = cljs.core.next.call(null,seq__15525_15549__$1);
var G__15563 = null;
var G__15564 = (0);
var G__15565 = (0);
seq__15525_15533 = G__15562;
chunk__15527_15534 = G__15563;
count__15528_15535 = G__15564;
i__15529_15536 = G__15565;
continue;
}
}
} else {
}
}
break;
}

return result;
}));
cljs.core._add_method.call(null,rerenderer.platform.core.information,new cljs.core.Keyword(null,"browser","browser",828191719),(function (options){
var canvas = rerenderer.platform.browser.core.get_canvas.call(null,options);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),canvas.width,new cljs.core.Keyword(null,"height","height",1025178622),canvas.height,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),null,new cljs.core.Keyword(null,"mouse","mouse",478628972),null], null), null)], null);
}));
