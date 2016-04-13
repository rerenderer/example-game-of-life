// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.browser.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Translate js event to local representation.
 */
rerenderer.platform.browser.events.translate_event = (function rerenderer$platform$browser$events$translate_event(event,data){
var pred__23228 = cljs.core._EQ_;
var expr__23229 = event;
if(cljs.core.truth_(pred__23228.call(null,"click",expr__23229))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),data.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),data.clientY], null)], null);
} else {
if(cljs.core.truth_(pred__23228.call(null,"keydown",expr__23229))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),data.keyCode], null)], null);
} else {
if(cljs.core.truth_(pred__23228.call(null,"keyup",expr__23229))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),data.keyCode], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,data], null);
}
}
}
});
/**
 * Binds all events to channel.
 */
rerenderer.platform.browser.events.bind_events_BANG_ = (function rerenderer$platform$browser$events$bind_events_BANG_(ch,canvas){
var seq__23261 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown","keyup"], null));
var chunk__23262 = null;
var count__23263 = (0);
var i__23264 = (0);
while(true){
if((i__23264 < count__23263)){
var event_name = cljs.core._nth.call(null,chunk__23262,i__23264);
canvas.addEventListener(event_name,((function (seq__23261,chunk__23262,count__23263,i__23264,event_name){
return (function (event){
event.preventDefault();

var c__20451__auto___23291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__23261,chunk__23262,count__23263,i__23264,c__20451__auto___23291,event_name){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (seq__23261,chunk__23262,count__23263,i__23264,c__20451__auto___23291,event_name){
return (function (state_23269){
var state_val_23270 = (state_23269[(1)]);
if((state_val_23270 === (1))){
var inst_23265 = rerenderer.platform.browser.events.translate_event.call(null,event_name,event);
var state_23269__$1 = state_23269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23269__$1,(2),ch,inst_23265);
} else {
if((state_val_23270 === (2))){
var inst_23267 = (state_23269[(2)]);
var state_23269__$1 = state_23269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23269__$1,inst_23267);
} else {
return null;
}
}
});})(seq__23261,chunk__23262,count__23263,i__23264,c__20451__auto___23291,event_name))
;
return ((function (seq__23261,chunk__23262,count__23263,i__23264,switch__20339__auto__,c__20451__auto___23291,event_name){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____0 = (function (){
var statearr_23274 = [null,null,null,null,null,null,null];
(statearr_23274[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__);

(statearr_23274[(1)] = (1));

return statearr_23274;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____1 = (function (state_23269){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_23269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e23275){if((e23275 instanceof Object)){
var ex__20343__auto__ = e23275;
var statearr_23276_23292 = state_23269;
(statearr_23276_23292[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23293 = state_23269;
state_23269 = G__23293;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__ = function(state_23269){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____1.call(this,state_23269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__;
})()
;})(seq__23261,chunk__23262,count__23263,i__23264,switch__20339__auto__,c__20451__auto___23291,event_name))
})();
var state__20453__auto__ = (function (){var statearr_23277 = f__20452__auto__.call(null);
(statearr_23277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___23291);

return statearr_23277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(seq__23261,chunk__23262,count__23263,i__23264,c__20451__auto___23291,event_name))
);


return false;
});})(seq__23261,chunk__23262,count__23263,i__23264,event_name))
);

var G__23294 = seq__23261;
var G__23295 = chunk__23262;
var G__23296 = count__23263;
var G__23297 = (i__23264 + (1));
seq__23261 = G__23294;
chunk__23262 = G__23295;
count__23263 = G__23296;
i__23264 = G__23297;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23261);
if(temp__4657__auto__){
var seq__23261__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23261__$1)){
var c__19101__auto__ = cljs.core.chunk_first.call(null,seq__23261__$1);
var G__23298 = cljs.core.chunk_rest.call(null,seq__23261__$1);
var G__23299 = c__19101__auto__;
var G__23300 = cljs.core.count.call(null,c__19101__auto__);
var G__23301 = (0);
seq__23261 = G__23298;
chunk__23262 = G__23299;
count__23263 = G__23300;
i__23264 = G__23301;
continue;
} else {
var event_name = cljs.core.first.call(null,seq__23261__$1);
canvas.addEventListener(event_name,((function (seq__23261,chunk__23262,count__23263,i__23264,event_name,seq__23261__$1,temp__4657__auto__){
return (function (event){
event.preventDefault();

var c__20451__auto___23302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__23261,chunk__23262,count__23263,i__23264,c__20451__auto___23302,event_name,seq__23261__$1,temp__4657__auto__){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (seq__23261,chunk__23262,count__23263,i__23264,c__20451__auto___23302,event_name,seq__23261__$1,temp__4657__auto__){
return (function (state_23282){
var state_val_23283 = (state_23282[(1)]);
if((state_val_23283 === (1))){
var inst_23278 = rerenderer.platform.browser.events.translate_event.call(null,event_name,event);
var state_23282__$1 = state_23282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23282__$1,(2),ch,inst_23278);
} else {
if((state_val_23283 === (2))){
var inst_23280 = (state_23282[(2)]);
var state_23282__$1 = state_23282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23282__$1,inst_23280);
} else {
return null;
}
}
});})(seq__23261,chunk__23262,count__23263,i__23264,c__20451__auto___23302,event_name,seq__23261__$1,temp__4657__auto__))
;
return ((function (seq__23261,chunk__23262,count__23263,i__23264,switch__20339__auto__,c__20451__auto___23302,event_name,seq__23261__$1,temp__4657__auto__){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____0 = (function (){
var statearr_23287 = [null,null,null,null,null,null,null];
(statearr_23287[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__);

(statearr_23287[(1)] = (1));

return statearr_23287;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____1 = (function (state_23282){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_23282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e23288){if((e23288 instanceof Object)){
var ex__20343__auto__ = e23288;
var statearr_23289_23303 = state_23282;
(statearr_23289_23303[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23304 = state_23282;
state_23282 = G__23304;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__ = function(state_23282){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____1.call(this,state_23282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__20340__auto__;
})()
;})(seq__23261,chunk__23262,count__23263,i__23264,switch__20339__auto__,c__20451__auto___23302,event_name,seq__23261__$1,temp__4657__auto__))
})();
var state__20453__auto__ = (function (){var statearr_23290 = f__20452__auto__.call(null);
(statearr_23290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___23302);

return statearr_23290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(seq__23261,chunk__23262,count__23263,i__23264,c__20451__auto___23302,event_name,seq__23261__$1,temp__4657__auto__))
);


return false;
});})(seq__23261,chunk__23262,count__23263,i__23264,event_name,seq__23261__$1,temp__4657__auto__))
);

var G__23305 = cljs.core.next.call(null,seq__23261__$1);
var G__23306 = null;
var G__23307 = (0);
var G__23308 = (0);
seq__23261 = G__23305;
chunk__23262 = G__23306;
count__23263 = G__23307;
i__23264 = G__23308;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=events.js.map