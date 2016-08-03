// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.android.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.android.bus');
/**
 * Translates event from intermediate representation.
 */
rerenderer.platform.android.events.translate_event = (function rerenderer$platform$android$events$translate_event(event){
var pred__15786 = cljs.core._EQ_;
var expr__15787 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(pred__15786.call(null,"click",expr__15787))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_(pred__15786.call(null,"keyup",expr__15787))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),new cljs.core.Keyword(null,"keycode","keycode",-47989070).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_(pred__15786.call(null,"keydown",expr__15787))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keycode","keycode",-47989070),new cljs.core.Keyword(null,"keycode","keycode",-47989070).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__15787)].join('')));
}
}
}
});
/**
 * Binds all event to channel.
 */
rerenderer.platform.android.events.bind_event_BANG_ = (function rerenderer$platform$android$events$bind_event_BANG_(ch){
return rerenderer.platform.android.bus.on_event_BANG_.call(null,(function (p1__15789_SHARP_){
var c__12557__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto__){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto__){
return (function (state_15807){
var state_val_15808 = (state_15807[(1)]);
if((state_val_15808 === (1))){
var inst_15803 = rerenderer.platform.android.events.translate_event.call(null,p1__15789_SHARP_);
var state_15807__$1 = state_15807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15807__$1,(2),ch,inst_15803);
} else {
if((state_val_15808 === (2))){
var inst_15805 = (state_15807[(2)]);
var state_15807__$1 = state_15807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15807__$1,inst_15805);
} else {
return null;
}
}
});})(c__12557__auto__))
;
return ((function (switch__12445__auto__,c__12557__auto__){
return (function() {
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto__ = null;
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto____0 = (function (){
var statearr_15812 = [null,null,null,null,null,null,null];
(statearr_15812[(0)] = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto__);

(statearr_15812[(1)] = (1));

return statearr_15812;
});
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto____1 = (function (state_15807){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15813){if((e15813 instanceof Object)){
var ex__12449__auto__ = e15813;
var statearr_15814_15816 = state_15807;
(statearr_15814_15816[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15817 = state_15807;
state_15807 = G__15817;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto__ = function(state_15807){
switch(arguments.length){
case 0:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto____0.call(this);
case 1:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto____1.call(this,state_15807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto____0;
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto____1;
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto__))
})();
var state__12559__auto__ = (function (){var statearr_15815 = f__12558__auto__.call(null);
(statearr_15815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto__);

return statearr_15815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto__))
);

return c__12557__auto__;
}));
});
