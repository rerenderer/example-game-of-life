// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.android.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.android.bus');
/**
 * Translates event from intermediate representation.
 */
rerenderer.platform.android.events.translate_event = (function rerenderer$platform$android$events$translate_event(event){
var pred__27383 = cljs.core._EQ_;
var expr__27384 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(pred__27383.call(null,"click",expr__27384))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_(pred__27383.call(null,"keyup",expr__27384))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),new cljs.core.Keyword(null,"keycode","keycode",-47989070).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_(pred__27383.call(null,"keydown",expr__27384))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),new cljs.core.Keyword(null,"keycode","keycode",-47989070).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27384)].join('')));
}
}
}
});
/**
 * Binds all event to channel.
 */
rerenderer.platform.android.events.bind_event_BANG_ = (function rerenderer$platform$android$events$bind_event_BANG_(ch){
return rerenderer.platform.android.bus.on_event_BANG_.call(null,(function (p1__27386_SHARP_){
var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__){
return (function (state_27404){
var state_val_27405 = (state_27404[(1)]);
if((state_val_27405 === (1))){
var inst_27400 = rerenderer.platform.android.events.translate_event.call(null,p1__27386_SHARP_);
var state_27404__$1 = state_27404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27404__$1,(2),ch,inst_27400);
} else {
if((state_val_27405 === (2))){
var inst_27402 = (state_27404[(2)]);
var state_27404__$1 = state_27404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27404__$1,inst_27402);
} else {
return null;
}
}
});})(c__20451__auto__))
;
return ((function (switch__20339__auto__,c__20451__auto__){
return (function() {
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto__ = null;
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto____0 = (function (){
var statearr_27409 = [null,null,null,null,null,null,null];
(statearr_27409[(0)] = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto__);

(statearr_27409[(1)] = (1));

return statearr_27409;
});
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto____1 = (function (state_27404){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_27404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e27410){if((e27410 instanceof Object)){
var ex__20343__auto__ = e27410;
var statearr_27411_27413 = state_27404;
(statearr_27411_27413[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27414 = state_27404;
state_27404 = G__27414;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto__ = function(state_27404){
switch(arguments.length){
case 0:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto____0.call(this);
case 1:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto____1.call(this,state_27404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto____0;
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto____1;
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__))
})();
var state__20453__auto__ = (function (){var statearr_27412 = f__20452__auto__.call(null);
(statearr_27412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_27412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__))
);

return c__20451__auto__;
}));
});

//# sourceMappingURL=events.js.map