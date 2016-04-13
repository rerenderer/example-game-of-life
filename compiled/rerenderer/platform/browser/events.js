// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.browser.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Translate js event to local representation.
 */
rerenderer.platform.browser.events.translate_event = (function rerenderer$platform$browser$events$translate_event(event,data){
var pred__15332 = cljs.core._EQ_;
var expr__15333 = event;
if(cljs.core.truth_(pred__15332.call(null,"click",expr__15333))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),data.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),data.clientY], null)], null);
} else {
if(cljs.core.truth_(pred__15332.call(null,"keydown",expr__15333))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),data.keyCode], null)], null);
} else {
if(cljs.core.truth_(pred__15332.call(null,"keyup",expr__15333))){
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
var seq__15365 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown","keyup"], null));
var chunk__15366 = null;
var count__15367 = (0);
var i__15368 = (0);
while(true){
if((i__15368 < count__15367)){
var event_name = cljs.core._nth.call(null,chunk__15366,i__15368);
canvas.addEventListener(event_name,((function (seq__15365,chunk__15366,count__15367,i__15368,event_name){
return (function (event){
event.preventDefault();

var c__12555__auto___15395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__15365,chunk__15366,count__15367,i__15368,c__12555__auto___15395,event_name){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (seq__15365,chunk__15366,count__15367,i__15368,c__12555__auto___15395,event_name){
return (function (state_15373){
var state_val_15374 = (state_15373[(1)]);
if((state_val_15374 === (1))){
var inst_15369 = rerenderer.platform.browser.events.translate_event.call(null,event_name,event);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15373__$1,(2),ch,inst_15369);
} else {
if((state_val_15374 === (2))){
var inst_15371 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15373__$1,inst_15371);
} else {
return null;
}
}
});})(seq__15365,chunk__15366,count__15367,i__15368,c__12555__auto___15395,event_name))
;
return ((function (seq__15365,chunk__15366,count__15367,i__15368,switch__12443__auto__,c__12555__auto___15395,event_name){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____0 = (function (){
var statearr_15378 = [null,null,null,null,null,null,null];
(statearr_15378[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__);

(statearr_15378[(1)] = (1));

return statearr_15378;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____1 = (function (state_15373){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_15373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e15379){if((e15379 instanceof Object)){
var ex__12447__auto__ = e15379;
var statearr_15380_15396 = state_15373;
(statearr_15380_15396[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15397 = state_15373;
state_15373 = G__15397;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__ = function(state_15373){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____1.call(this,state_15373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__;
})()
;})(seq__15365,chunk__15366,count__15367,i__15368,switch__12443__auto__,c__12555__auto___15395,event_name))
})();
var state__12557__auto__ = (function (){var statearr_15381 = f__12556__auto__.call(null);
(statearr_15381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___15395);

return statearr_15381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(seq__15365,chunk__15366,count__15367,i__15368,c__12555__auto___15395,event_name))
);


return false;
});})(seq__15365,chunk__15366,count__15367,i__15368,event_name))
);

var G__15398 = seq__15365;
var G__15399 = chunk__15366;
var G__15400 = count__15367;
var G__15401 = (i__15368 + (1));
seq__15365 = G__15398;
chunk__15366 = G__15399;
count__15367 = G__15400;
i__15368 = G__15401;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15365);
if(temp__4657__auto__){
var seq__15365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15365__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__15365__$1);
var G__15402 = cljs.core.chunk_rest.call(null,seq__15365__$1);
var G__15403 = c__6959__auto__;
var G__15404 = cljs.core.count.call(null,c__6959__auto__);
var G__15405 = (0);
seq__15365 = G__15402;
chunk__15366 = G__15403;
count__15367 = G__15404;
i__15368 = G__15405;
continue;
} else {
var event_name = cljs.core.first.call(null,seq__15365__$1);
canvas.addEventListener(event_name,((function (seq__15365,chunk__15366,count__15367,i__15368,event_name,seq__15365__$1,temp__4657__auto__){
return (function (event){
event.preventDefault();

var c__12555__auto___15406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__15365,chunk__15366,count__15367,i__15368,c__12555__auto___15406,event_name,seq__15365__$1,temp__4657__auto__){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (seq__15365,chunk__15366,count__15367,i__15368,c__12555__auto___15406,event_name,seq__15365__$1,temp__4657__auto__){
return (function (state_15386){
var state_val_15387 = (state_15386[(1)]);
if((state_val_15387 === (1))){
var inst_15382 = rerenderer.platform.browser.events.translate_event.call(null,event_name,event);
var state_15386__$1 = state_15386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15386__$1,(2),ch,inst_15382);
} else {
if((state_val_15387 === (2))){
var inst_15384 = (state_15386[(2)]);
var state_15386__$1 = state_15386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15386__$1,inst_15384);
} else {
return null;
}
}
});})(seq__15365,chunk__15366,count__15367,i__15368,c__12555__auto___15406,event_name,seq__15365__$1,temp__4657__auto__))
;
return ((function (seq__15365,chunk__15366,count__15367,i__15368,switch__12443__auto__,c__12555__auto___15406,event_name,seq__15365__$1,temp__4657__auto__){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____0 = (function (){
var statearr_15391 = [null,null,null,null,null,null,null];
(statearr_15391[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__);

(statearr_15391[(1)] = (1));

return statearr_15391;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____1 = (function (state_15386){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_15386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e15392){if((e15392 instanceof Object)){
var ex__12447__auto__ = e15392;
var statearr_15393_15407 = state_15386;
(statearr_15393_15407[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15408 = state_15386;
state_15386 = G__15408;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__ = function(state_15386){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____1.call(this,state_15386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12444__auto__;
})()
;})(seq__15365,chunk__15366,count__15367,i__15368,switch__12443__auto__,c__12555__auto___15406,event_name,seq__15365__$1,temp__4657__auto__))
})();
var state__12557__auto__ = (function (){var statearr_15394 = f__12556__auto__.call(null);
(statearr_15394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___15406);

return statearr_15394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(seq__15365,chunk__15366,count__15367,i__15368,c__12555__auto___15406,event_name,seq__15365__$1,temp__4657__auto__))
);


return false;
});})(seq__15365,chunk__15366,count__15367,i__15368,event_name,seq__15365__$1,temp__4657__auto__))
);

var G__15409 = cljs.core.next.call(null,seq__15365__$1);
var G__15410 = null;
var G__15411 = (0);
var G__15412 = (0);
seq__15365 = G__15409;
chunk__15366 = G__15410;
count__15367 = G__15411;
i__15368 = G__15412;
continue;
}
} else {
return null;
}
}
break;
}
});
