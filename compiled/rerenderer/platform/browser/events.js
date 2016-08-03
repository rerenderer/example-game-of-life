// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.browser.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Translate js event to local representation.
 */
rerenderer.platform.browser.events.translate_event = (function rerenderer$platform$browser$events$translate_event(event,data){
var pred__15334 = cljs.core._EQ_;
var expr__15335 = event;
if(cljs.core.truth_(pred__15334.call(null,"click",expr__15335))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),data.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),data.clientY], null)], null);
} else {
if(cljs.core.truth_(pred__15334.call(null,"keydown",expr__15335))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),data.keyCode], null)], null);
} else {
if(cljs.core.truth_(pred__15334.call(null,"keyup",expr__15335))){
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
var seq__15367 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown","keyup"], null));
var chunk__15368 = null;
var count__15369 = (0);
var i__15370 = (0);
while(true){
if((i__15370 < count__15369)){
var event_name = cljs.core._nth.call(null,chunk__15368,i__15370);
canvas.addEventListener(event_name,((function (seq__15367,chunk__15368,count__15369,i__15370,event_name){
return (function (event){
event.preventDefault();

var c__12557__auto___15397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__15367,chunk__15368,count__15369,i__15370,c__12557__auto___15397,event_name){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (seq__15367,chunk__15368,count__15369,i__15370,c__12557__auto___15397,event_name){
return (function (state_15375){
var state_val_15376 = (state_15375[(1)]);
if((state_val_15376 === (1))){
var inst_15371 = rerenderer.platform.browser.events.translate_event.call(null,event_name,event);
var state_15375__$1 = state_15375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15375__$1,(2),ch,inst_15371);
} else {
if((state_val_15376 === (2))){
var inst_15373 = (state_15375[(2)]);
var state_15375__$1 = state_15375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15375__$1,inst_15373);
} else {
return null;
}
}
});})(seq__15367,chunk__15368,count__15369,i__15370,c__12557__auto___15397,event_name))
;
return ((function (seq__15367,chunk__15368,count__15369,i__15370,switch__12445__auto__,c__12557__auto___15397,event_name){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____0 = (function (){
var statearr_15380 = [null,null,null,null,null,null,null];
(statearr_15380[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__);

(statearr_15380[(1)] = (1));

return statearr_15380;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____1 = (function (state_15375){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15381){if((e15381 instanceof Object)){
var ex__12449__auto__ = e15381;
var statearr_15382_15398 = state_15375;
(statearr_15382_15398[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15399 = state_15375;
state_15375 = G__15399;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__ = function(state_15375){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____1.call(this,state_15375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__;
})()
;})(seq__15367,chunk__15368,count__15369,i__15370,switch__12445__auto__,c__12557__auto___15397,event_name))
})();
var state__12559__auto__ = (function (){var statearr_15383 = f__12558__auto__.call(null);
(statearr_15383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___15397);

return statearr_15383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(seq__15367,chunk__15368,count__15369,i__15370,c__12557__auto___15397,event_name))
);


return false;
});})(seq__15367,chunk__15368,count__15369,i__15370,event_name))
);

var G__15400 = seq__15367;
var G__15401 = chunk__15368;
var G__15402 = count__15369;
var G__15403 = (i__15370 + (1));
seq__15367 = G__15400;
chunk__15368 = G__15401;
count__15369 = G__15402;
i__15370 = G__15403;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15367);
if(temp__4657__auto__){
var seq__15367__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15367__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__15367__$1);
var G__15404 = cljs.core.chunk_rest.call(null,seq__15367__$1);
var G__15405 = c__6959__auto__;
var G__15406 = cljs.core.count.call(null,c__6959__auto__);
var G__15407 = (0);
seq__15367 = G__15404;
chunk__15368 = G__15405;
count__15369 = G__15406;
i__15370 = G__15407;
continue;
} else {
var event_name = cljs.core.first.call(null,seq__15367__$1);
canvas.addEventListener(event_name,((function (seq__15367,chunk__15368,count__15369,i__15370,event_name,seq__15367__$1,temp__4657__auto__){
return (function (event){
event.preventDefault();

var c__12557__auto___15408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__15367,chunk__15368,count__15369,i__15370,c__12557__auto___15408,event_name,seq__15367__$1,temp__4657__auto__){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (seq__15367,chunk__15368,count__15369,i__15370,c__12557__auto___15408,event_name,seq__15367__$1,temp__4657__auto__){
return (function (state_15388){
var state_val_15389 = (state_15388[(1)]);
if((state_val_15389 === (1))){
var inst_15384 = rerenderer.platform.browser.events.translate_event.call(null,event_name,event);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15388__$1,(2),ch,inst_15384);
} else {
if((state_val_15389 === (2))){
var inst_15386 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15388__$1,inst_15386);
} else {
return null;
}
}
});})(seq__15367,chunk__15368,count__15369,i__15370,c__12557__auto___15408,event_name,seq__15367__$1,temp__4657__auto__))
;
return ((function (seq__15367,chunk__15368,count__15369,i__15370,switch__12445__auto__,c__12557__auto___15408,event_name,seq__15367__$1,temp__4657__auto__){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____0 = (function (){
var statearr_15393 = [null,null,null,null,null,null,null];
(statearr_15393[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__);

(statearr_15393[(1)] = (1));

return statearr_15393;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____1 = (function (state_15388){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15394){if((e15394 instanceof Object)){
var ex__12449__auto__ = e15394;
var statearr_15395_15409 = state_15388;
(statearr_15395_15409[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15410 = state_15388;
state_15388 = G__15410;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__ = function(state_15388){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____1.call(this,state_15388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__12446__auto__;
})()
;})(seq__15367,chunk__15368,count__15369,i__15370,switch__12445__auto__,c__12557__auto___15408,event_name,seq__15367__$1,temp__4657__auto__))
})();
var state__12559__auto__ = (function (){var statearr_15396 = f__12558__auto__.call(null);
(statearr_15396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___15408);

return statearr_15396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(seq__15367,chunk__15368,count__15369,i__15370,c__12557__auto___15408,event_name,seq__15367__$1,temp__4657__auto__))
);


return false;
});})(seq__15367,chunk__15368,count__15369,i__15370,event_name,seq__15367__$1,temp__4657__auto__))
);

var G__15411 = cljs.core.next.call(null,seq__15367__$1);
var G__15412 = null;
var G__15413 = (0);
var G__15414 = (0);
seq__15367 = G__15411;
chunk__15368 = G__15412;
count__15369 = G__15413;
i__15370 = G__15414;
continue;
}
} else {
return null;
}
}
break;
}
});
