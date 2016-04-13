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
return cljs.core.mapcat.call(null,(function (p1__20143_SHARP_){
return rerenderer.platform.core.render_to.call(null,p1__20143_SHARP_,node);
}),new cljs.core.Keyword(null,"childs","childs",-1293201887).cljs$core$IFn$_invoke$arity$1(node));
});
/**
 * Render node and all childs recursevly.
 */
rerenderer.render.render_node = (function rerenderer$render$render_node(node){
var G__20149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var vec__20150 = G__20149;
var node__$1 = cljs.core.nth.call(null,vec__20150,(0),null);
var rest_nodes = cljs.core.nthnext.call(null,vec__20150,(1));
var render_inside = cljs.core.PersistentVector.EMPTY;
var render_on = cljs.core.PersistentVector.EMPTY;
var G__20149__$1 = G__20149;
var render_inside__$1 = render_inside;
var render_on__$1 = render_on;
while(true){
var vec__20151 = G__20149__$1;
var node__$2 = cljs.core.nth.call(null,vec__20151,(0),null);
var rest_nodes__$1 = cljs.core.nthnext.call(null,vec__20151,(1));
var render_inside__$2 = render_inside__$1;
var render_on__$2 = render_on__$1;
if(cljs.core.truth_(node__$2)){
var G__20152 = cljs.core.concat.call(null,rest_nodes__$1,new cljs.core.Keyword(null,"childs","childs",-1293201887).cljs$core$IFn$_invoke$arity$1(node__$2));
var G__20153 = cljs.core.concat.call(null,render_inside__$2,new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(node__$2));
var G__20154 = cljs.core.concat.call(null,render_on__$2,rerenderer.render.render_childs.call(null,node__$2));
G__20149__$1 = G__20152;
render_inside__$1 = G__20153;
render_on__$1 = G__20154;
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
var c__12555__auto___20209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___20209,ch){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___20209,ch){
return (function (state_20196){
var state_val_20197 = (state_20196[(1)]);
if((state_val_20197 === (1))){
var state_20196__$1 = state_20196;
var statearr_20198_20210 = state_20196__$1;
(statearr_20198_20210[(2)] = null);

(statearr_20198_20210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20197 === (2))){
var inst_20183 = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"fps-limit","fps-limit",-773004564),(25));
var inst_20184 = ((1000) / inst_20183);
var inst_20185 = cljs.core.async.timeout.call(null,inst_20184);
var state_20196__$1 = state_20196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20196__$1,(4),inst_20185);
} else {
if((state_val_20197 === (3))){
var inst_20194 = (state_20196[(2)]);
var state_20196__$1 = state_20196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20196__$1,inst_20194);
} else {
if((state_val_20197 === (4))){
var inst_20187 = (state_20196[(2)]);
var state_20196__$1 = (function (){var statearr_20199 = state_20196;
(statearr_20199[(7)] = inst_20187);

return statearr_20199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20196__$1,(5),ch);
} else {
if((state_val_20197 === (5))){
var inst_20189 = (state_20196[(2)]);
var inst_20190 = root.call(null,inst_20189);
var inst_20191 = rerenderer.render.render_component_BANG_.call(null,inst_20190,options);
var state_20196__$1 = (function (){var statearr_20200 = state_20196;
(statearr_20200[(8)] = inst_20191);

return statearr_20200;
})();
var statearr_20201_20211 = state_20196__$1;
(statearr_20201_20211[(2)] = null);

(statearr_20201_20211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__12555__auto___20209,ch))
;
return ((function (switch__12443__auto__,c__12555__auto___20209,ch){
return (function() {
var rerenderer$render$get_render_ch_$_state_machine__12444__auto__ = null;
var rerenderer$render$get_render_ch_$_state_machine__12444__auto____0 = (function (){
var statearr_20205 = [null,null,null,null,null,null,null,null,null];
(statearr_20205[(0)] = rerenderer$render$get_render_ch_$_state_machine__12444__auto__);

(statearr_20205[(1)] = (1));

return statearr_20205;
});
var rerenderer$render$get_render_ch_$_state_machine__12444__auto____1 = (function (state_20196){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_20196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e20206){if((e20206 instanceof Object)){
var ex__12447__auto__ = e20206;
var statearr_20207_20212 = state_20196;
(statearr_20207_20212[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20213 = state_20196;
state_20196 = G__20213;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
rerenderer$render$get_render_ch_$_state_machine__12444__auto__ = function(state_20196){
switch(arguments.length){
case 0:
return rerenderer$render$get_render_ch_$_state_machine__12444__auto____0.call(this);
case 1:
return rerenderer$render$get_render_ch_$_state_machine__12444__auto____1.call(this,state_20196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$render$get_render_ch_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$render$get_render_ch_$_state_machine__12444__auto____0;
rerenderer$render$get_render_ch_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$render$get_render_ch_$_state_machine__12444__auto____1;
return rerenderer$render$get_render_ch_$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___20209,ch))
})();
var state__12557__auto__ = (function (){var statearr_20208 = f__12556__auto__.call(null);
(statearr_20208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___20209);

return statearr_20208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___20209,ch))
);


return ch;
});
