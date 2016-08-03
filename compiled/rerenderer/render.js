// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.component');
/**
 * Returns channel that waits for states.
 */
rerenderer.render.get_render_ch = (function rerenderer$render$get_render_ch(root,options){
var ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var c__12557__auto___15655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___15655,ch){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___15655,ch){
return (function (state_15639){
var state_val_15640 = (state_15639[(1)]);
if((state_val_15640 === (1))){
var state_15639__$1 = state_15639;
var statearr_15641_15656 = state_15639__$1;
(statearr_15641_15656[(2)] = null);

(statearr_15641_15656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (2))){
var inst_15619 = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"fps-limit","fps-limit",-773004564),(25));
var inst_15620 = ((1000) / inst_15619);
var inst_15621 = cljs.core.async.timeout.call(null,inst_15620);
var state_15639__$1 = state_15639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15639__$1,(4),inst_15621);
} else {
if((state_val_15640 === (3))){
var inst_15637 = (state_15639[(2)]);
var state_15639__$1 = state_15639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15639__$1,inst_15637);
} else {
if((state_val_15640 === (4))){
var inst_15623 = (state_15639[(2)]);
var state_15639__$1 = (function (){var statearr_15642 = state_15639;
(statearr_15642[(7)] = inst_15623);

return statearr_15642;
})();
var statearr_15643_15657 = state_15639__$1;
(statearr_15643_15657[(2)] = null);

(statearr_15643_15657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (5))){
var inst_15634 = (state_15639[(2)]);
var state_15639__$1 = (function (){var statearr_15644 = state_15639;
(statearr_15644[(8)] = inst_15634);

return statearr_15644;
})();
var statearr_15645_15658 = state_15639__$1;
(statearr_15645_15658[(2)] = null);

(statearr_15645_15658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (6))){
var inst_15624 = (state_15639[(2)]);
var inst_15625 = console.error("Rendering failed",inst_15624);
var state_15639__$1 = state_15639;
var statearr_15646_15659 = state_15639__$1;
(statearr_15646_15659[(2)] = inst_15625);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15639__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15639,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var state_15639__$1 = state_15639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15639__$1,(8),ch);
} else {
if((state_val_15640 === (8))){
var inst_15630 = (state_15639[(2)]);
var inst_15631 = root.call(null,inst_15630,options);
var inst_15632 = rerenderer.platform.core.render.call(null,inst_15631);
var state_15639__$1 = state_15639;
var statearr_15647_15660 = state_15639__$1;
(statearr_15647_15660[(2)] = inst_15632);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15639__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__12557__auto___15655,ch))
;
return ((function (switch__12445__auto__,c__12557__auto___15655,ch){
return (function() {
var rerenderer$render$get_render_ch_$_state_machine__12446__auto__ = null;
var rerenderer$render$get_render_ch_$_state_machine__12446__auto____0 = (function (){
var statearr_15651 = [null,null,null,null,null,null,null,null,null];
(statearr_15651[(0)] = rerenderer$render$get_render_ch_$_state_machine__12446__auto__);

(statearr_15651[(1)] = (1));

return statearr_15651;
});
var rerenderer$render$get_render_ch_$_state_machine__12446__auto____1 = (function (state_15639){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15652){if((e15652 instanceof Object)){
var ex__12449__auto__ = e15652;
var statearr_15653_15661 = state_15639;
(statearr_15653_15661[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15662 = state_15639;
state_15639 = G__15662;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
rerenderer$render$get_render_ch_$_state_machine__12446__auto__ = function(state_15639){
switch(arguments.length){
case 0:
return rerenderer$render$get_render_ch_$_state_machine__12446__auto____0.call(this);
case 1:
return rerenderer$render$get_render_ch_$_state_machine__12446__auto____1.call(this,state_15639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$render$get_render_ch_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$render$get_render_ch_$_state_machine__12446__auto____0;
rerenderer$render$get_render_ch_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$render$get_render_ch_$_state_machine__12446__auto____1;
return rerenderer$render$get_render_ch_$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___15655,ch))
})();
var state__12559__auto__ = (function (){var statearr_15654 = f__12558__auto__.call(null);
(statearr_15654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___15655);

return statearr_15654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___15655,ch))
);


return ch;
});
