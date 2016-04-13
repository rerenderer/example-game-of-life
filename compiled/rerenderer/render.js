// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.types.node');
goog.require('rerenderer.types.render_result');
goog.require('rerenderer.lang.gc');
goog.require('rerenderer.lang.forms');
/**
 * Renders node childs to node canvas.
 */
rerenderer.render.render_childs = (function rerenderer$render$render_childs(node){
return cljs.core.mapcat.call(null,(function (p1__24958_SHARP_){
return rerenderer.platform.core.render_to.call(null,p1__24958_SHARP_,node);
}),new cljs.core.Keyword(null,"childs","childs",-1293201887).cljs$core$IFn$_invoke$arity$1(node));
});
/**
 * Render node and all childs recursevly.
 */
rerenderer.render.render_node = (function rerenderer$render$render_node(node){
var G__24964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var vec__24965 = G__24964;
var node__$1 = cljs.core.nth.call(null,vec__24965,(0),null);
var rest_nodes = cljs.core.nthnext.call(null,vec__24965,(1));
var render_inside = cljs.core.PersistentVector.EMPTY;
var render_on = cljs.core.PersistentVector.EMPTY;
var G__24964__$1 = G__24964;
var render_inside__$1 = render_inside;
var render_on__$1 = render_on;
while(true){
var vec__24966 = G__24964__$1;
var node__$2 = cljs.core.nth.call(null,vec__24966,(0),null);
var rest_nodes__$1 = cljs.core.nthnext.call(null,vec__24966,(1));
var render_inside__$2 = render_inside__$1;
var render_on__$2 = render_on__$1;
if(cljs.core.truth_(node__$2)){
var G__24967 = cljs.core.concat.call(null,rest_nodes__$1,new cljs.core.Keyword(null,"childs","childs",-1293201887).cljs$core$IFn$_invoke$arity$1(node__$2));
var G__24968 = cljs.core.concat.call(null,render_inside__$2,new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(node__$2));
var G__24969 = cljs.core.concat.call(null,render_on__$2,rerenderer.render.render_childs.call(null,node__$2));
G__24964__$1 = G__24967;
render_inside__$1 = G__24968;
render_on__$1 = G__24969;
continue;
} else {
return cljs.core.concat.call(null,render_inside__$2,render_on__$2);
}
break;
}
});
/**
 * Renders component and send script to platfrom side.
 */
rerenderer.render.render_component_BANG_ = (function rerenderer$render$render_component_BANG_(component,options){
var node = rerenderer.types.node.Component__GT_Node.call(null,component);
var script = rerenderer.lang.gc.gc.call(null,rerenderer.render.render_node.call(null,node));
var canvas = new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(node);
rerenderer.types.render_result.sanitize_cache_BANG_.call(null,node);

return rerenderer.platform.core.apply_script_BANG_.call(null,cljs.core.map.call(null,rerenderer.lang.forms.serialize,script),rerenderer.lang.forms.serialize.call(null,canvas),options);
});
/**
 * Returns channel that waits for states.
 */
rerenderer.render.get_render_ch = (function rerenderer$render$get_render_ch(root,options){
var ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var c__20451__auto___25024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___25024,ch){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___25024,ch){
return (function (state_25011){
var state_val_25012 = (state_25011[(1)]);
if((state_val_25012 === (1))){
var state_25011__$1 = state_25011;
var statearr_25013_25025 = state_25011__$1;
(statearr_25013_25025[(2)] = null);

(statearr_25013_25025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (2))){
var inst_24998 = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"fps-limit","fps-limit",-773004564),(25));
var inst_24999 = ((1000) / inst_24998);
var inst_25000 = cljs.core.async.timeout.call(null,inst_24999);
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25011__$1,(4),inst_25000);
} else {
if((state_val_25012 === (3))){
var inst_25009 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25011__$1,inst_25009);
} else {
if((state_val_25012 === (4))){
var inst_25002 = (state_25011[(2)]);
var state_25011__$1 = (function (){var statearr_25014 = state_25011;
(statearr_25014[(7)] = inst_25002);

return statearr_25014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25011__$1,(5),ch);
} else {
if((state_val_25012 === (5))){
var inst_25004 = (state_25011[(2)]);
var inst_25005 = root.call(null,inst_25004);
var inst_25006 = rerenderer.render.render_component_BANG_.call(null,inst_25005,options);
var state_25011__$1 = (function (){var statearr_25015 = state_25011;
(statearr_25015[(8)] = inst_25006);

return statearr_25015;
})();
var statearr_25016_25026 = state_25011__$1;
(statearr_25016_25026[(2)] = null);

(statearr_25016_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__20451__auto___25024,ch))
;
return ((function (switch__20339__auto__,c__20451__auto___25024,ch){
return (function() {
var rerenderer$render$get_render_ch_$_state_machine__20340__auto__ = null;
var rerenderer$render$get_render_ch_$_state_machine__20340__auto____0 = (function (){
var statearr_25020 = [null,null,null,null,null,null,null,null,null];
(statearr_25020[(0)] = rerenderer$render$get_render_ch_$_state_machine__20340__auto__);

(statearr_25020[(1)] = (1));

return statearr_25020;
});
var rerenderer$render$get_render_ch_$_state_machine__20340__auto____1 = (function (state_25011){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_25011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e25021){if((e25021 instanceof Object)){
var ex__20343__auto__ = e25021;
var statearr_25022_25027 = state_25011;
(statearr_25022_25027[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25028 = state_25011;
state_25011 = G__25028;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
rerenderer$render$get_render_ch_$_state_machine__20340__auto__ = function(state_25011){
switch(arguments.length){
case 0:
return rerenderer$render$get_render_ch_$_state_machine__20340__auto____0.call(this);
case 1:
return rerenderer$render$get_render_ch_$_state_machine__20340__auto____1.call(this,state_25011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$render$get_render_ch_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$render$get_render_ch_$_state_machine__20340__auto____0;
rerenderer$render$get_render_ch_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$render$get_render_ch_$_state_machine__20340__auto____1;
return rerenderer$render$get_render_ch_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___25024,ch))
})();
var state__20453__auto__ = (function (){var statearr_25023 = f__20452__auto__.call(null);
(statearr_25023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___25024);

return statearr_25023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___25024,ch))
);


return ch;
});

//# sourceMappingURL=render.js.map