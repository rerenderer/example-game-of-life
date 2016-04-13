// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.android.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.android.bus');
/**
 * Translates event from intermediate representation.
 */
rerenderer.platform.android.events.translate_event = (function rerenderer$platform$android$events$translate_event(event){
var pred__20337 = cljs.core._EQ_;
var expr__20338 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(pred__20337.call(null,"click",expr__20338))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_(pred__20337.call(null,"keyup",expr__20338))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),new cljs.core.Keyword(null,"keycode","keycode",-47989070).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_(pred__20337.call(null,"keydown",expr__20338))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),new cljs.core.Keyword(null,"keycode","keycode",-47989070).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20338)].join('')));
}
}
}
});
/**
 * Binds all event to channel.
 */
rerenderer.platform.android.events.bind_event_BANG_ = (function rerenderer$platform$android$events$bind_event_BANG_(ch){
return rerenderer.platform.android.bus.on_event_BANG_.call(null,(function (p1__20340_SHARP_){
var c__12555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto__){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto__){
return (function (state_20358){
var state_val_20359 = (state_20358[(1)]);
if((state_val_20359 === (1))){
var inst_20354 = rerenderer.platform.android.events.translate_event.call(null,p1__20340_SHARP_);
var state_20358__$1 = state_20358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20358__$1,(2),ch,inst_20354);
} else {
if((state_val_20359 === (2))){
var inst_20356 = (state_20358[(2)]);
var state_20358__$1 = state_20358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20358__$1,inst_20356);
} else {
return null;
}
}
});})(c__12555__auto__))
;
return ((function (switch__12443__auto__,c__12555__auto__){
return (function() {
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto__ = null;
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto____0 = (function (){
var statearr_20363 = [null,null,null,null,null,null,null];
(statearr_20363[(0)] = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto__);

(statearr_20363[(1)] = (1));

return statearr_20363;
});
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto____1 = (function (state_20358){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_20358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e20364){if((e20364 instanceof Object)){
var ex__12447__auto__ = e20364;
var statearr_20365_20367 = state_20358;
(statearr_20365_20367[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20368 = state_20358;
state_20358 = G__20368;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto__ = function(state_20358){
switch(arguments.length){
case 0:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto____0.call(this);
case 1:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto____1.call(this,state_20358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto____0;
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto____1;
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto__))
})();
var state__12557__auto__ = (function (){var statearr_20366 = f__12556__auto__.call(null);
(statearr_20366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto__);

return statearr_20366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto__))
);

return c__12555__auto__;
}));
});
