// Compiled by ClojureScript 1.7.228 {}
goog.provide('org.rerenderer.game_of_life.controller');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.core.async');
org.rerenderer.game_of_life.controller.under_population = (1);
org.rerenderer.game_of_life.controller.over_population = (4);
org.rerenderer.game_of_life.controller.parent_count = (3);
org.rerenderer.game_of_life.controller.neighbour_offsets = (function (){var digits = cljs.core.range.call(null,(-1),(2));
var iter__6928__auto__ = ((function (digits){
return (function org$rerenderer$game_of_life$controller$iter__20451(s__20452){
return (new cljs.core.LazySeq(null,((function (digits){
return (function (){
var s__20452__$1 = s__20452;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20452__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6924__auto__ = ((function (s__20452__$1,x,xs__5205__auto__,temp__4657__auto__,digits){
return (function org$rerenderer$game_of_life$controller$iter__20451_$_iter__20453(s__20454){
return (new cljs.core.LazySeq(null,((function (s__20452__$1,x,xs__5205__auto__,temp__4657__auto__,digits){
return (function (){
var s__20454__$1 = s__20454;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__20454__$1);
if(temp__4657__auto____$1){
var s__20454__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20454__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__20454__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__20456 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__20455 = (0);
while(true){
if((i__20455 < size__6927__auto__)){
var y = cljs.core._nth.call(null,c__6926__auto__,i__20455);
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(!(cljs.core._EQ_.call(null,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
cljs.core.chunk_append.call(null,b__20456,value);

var G__20457 = (i__20455 + (1));
i__20455 = G__20457;
continue;
} else {
var G__20458 = (i__20455 + (1));
i__20455 = G__20458;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20456),org$rerenderer$game_of_life$controller$iter__20451_$_iter__20453.call(null,cljs.core.chunk_rest.call(null,s__20454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20456),null);
}
} else {
var y = cljs.core.first.call(null,s__20454__$2);
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(!(cljs.core._EQ_.call(null,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
return cljs.core.cons.call(null,value,org$rerenderer$game_of_life$controller$iter__20451_$_iter__20453.call(null,cljs.core.rest.call(null,s__20454__$2)));
} else {
var G__20459 = cljs.core.rest.call(null,s__20454__$2);
s__20454__$1 = G__20459;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__20452__$1,x,xs__5205__auto__,temp__4657__auto__,digits))
,null,null));
});})(s__20452__$1,x,xs__5205__auto__,temp__4657__auto__,digits))
;
var fs__6925__auto__ = cljs.core.seq.call(null,iterys__6924__auto__.call(null,digits));
if(fs__6925__auto__){
return cljs.core.concat.call(null,fs__6925__auto__,org$rerenderer$game_of_life$controller$iter__20451.call(null,cljs.core.rest.call(null,s__20452__$1)));
} else {
var G__20460 = cljs.core.rest.call(null,s__20452__$1);
s__20452__$1 = G__20460;
continue;
}
} else {
return null;
}
break;
}
});})(digits))
,null,null));
});})(digits))
;
return iter__6928__auto__.call(null,digits);
})();
org.rerenderer.game_of_life.controller.all_neighbours = (function org$rerenderer$game_of_life$controller$all_neighbours(cell){
var iter__6928__auto__ = (function org$rerenderer$game_of_life$controller$all_neighbours_$_iter__20465(s__20466){
return (new cljs.core.LazySeq(null,(function (){
var s__20466__$1 = s__20466;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20466__$1);
if(temp__4657__auto__){
var s__20466__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20466__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__20466__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__20468 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__20467 = (0);
while(true){
if((i__20467 < size__6927__auto__)){
var offset = cljs.core._nth.call(null,c__6926__auto__,i__20467);
cljs.core.chunk_append.call(null,b__20468,cljs.core.map.call(null,cljs.core._PLUS_,offset,cell));

var G__20469 = (i__20467 + (1));
i__20467 = G__20469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20468),org$rerenderer$game_of_life$controller$all_neighbours_$_iter__20465.call(null,cljs.core.chunk_rest.call(null,s__20466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20468),null);
}
} else {
var offset = cljs.core.first.call(null,s__20466__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core._PLUS_,offset,cell),org$rerenderer$game_of_life$controller$all_neighbours_$_iter__20465.call(null,cljs.core.rest.call(null,s__20466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,org.rerenderer.game_of_life.controller.neighbour_offsets);
});
org.rerenderer.game_of_life.controller.alive_neighbours = (function org$rerenderer$game_of_life$controller$alive_neighbours(cells,cell){
return cljs.core.filter.call(null,(function (p1__20470_SHARP_){
return cljs.core.contains_QMARK_.call(null,cells,p1__20470_SHARP_);
}),org.rerenderer.game_of_life.controller.all_neighbours.call(null,cell));
});
org.rerenderer.game_of_life.controller.dead_neighbours = (function org$rerenderer$game_of_life$controller$dead_neighbours(cells,cell){
return cljs.core.filter.call(null,(function (p1__20471_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,cells,p1__20471_SHARP_));
}),org.rerenderer.game_of_life.controller.all_neighbours.call(null,cell));
});
org.rerenderer.game_of_life.controller.regulate = (function org$rerenderer$game_of_life$controller$regulate(cells){
return cljs.core.filter.call(null,(function (p1__20472_SHARP_){
var alive_neighbour_count = cljs.core.count.call(null,org.rerenderer.game_of_life.controller.alive_neighbours.call(null,cells,p1__20472_SHARP_));
return ((alive_neighbour_count > org.rerenderer.game_of_life.controller.under_population)) && ((alive_neighbour_count < org.rerenderer.game_of_life.controller.over_population));
}),cells);
});
org.rerenderer.game_of_life.controller.dead_neighbour_cells = (function org$rerenderer$game_of_life$controller$dead_neighbour_cells(cells){
return cljs.core.reduce.call(null,clojure.set.union,(function (){var iter__6928__auto__ = (function org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__20477(s__20478){
return (new cljs.core.LazySeq(null,(function (){
var s__20478__$1 = s__20478;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20478__$1);
if(temp__4657__auto__){
var s__20478__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20478__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__20478__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__20480 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__20479 = (0);
while(true){
if((i__20479 < size__6927__auto__)){
var cell = cljs.core._nth.call(null,c__6926__auto__,i__20479);
cljs.core.chunk_append.call(null,b__20480,org.rerenderer.game_of_life.controller.dead_neighbours.call(null,cells,cell));

var G__20481 = (i__20479 + (1));
i__20479 = G__20481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20480),org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__20477.call(null,cljs.core.chunk_rest.call(null,s__20478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20480),null);
}
} else {
var cell = cljs.core.first.call(null,s__20478__$2);
return cljs.core.cons.call(null,org.rerenderer.game_of_life.controller.dead_neighbours.call(null,cells,cell),org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__20477.call(null,cljs.core.rest.call(null,s__20478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,cells);
})());
});
org.rerenderer.game_of_life.controller.reproduce = (function org$rerenderer$game_of_life$controller$reproduce(cells){
return cljs.core.filter.call(null,(function (p1__20482_SHARP_){
return cljs.core._EQ_.call(null,org.rerenderer.game_of_life.controller.parent_count,cljs.core.count.call(null,org.rerenderer.game_of_life.controller.alive_neighbours.call(null,cells,p1__20482_SHARP_)));
}),org.rerenderer.game_of_life.controller.dead_neighbour_cells.call(null,cells));
});
org.rerenderer.game_of_life.controller.tick = (function org$rerenderer$game_of_life$controller$tick(cells){
return clojure.set.union.call(null,cljs.core.set.call(null,org.rerenderer.game_of_life.controller.reproduce.call(null,cells)),cljs.core.set.call(null,org.rerenderer.game_of_life.controller.regulate.call(null,cells)));
});
org.rerenderer.game_of_life.controller.main_controller = (function org$rerenderer$game_of_life$controller$main_controller(event_ch,state_atom,options){
var c__12555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto__){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto__){
return (function (state_20513){
var state_val_20514 = (state_20513[(1)]);
if((state_val_20514 === (1))){
var state_20513__$1 = state_20513;
var statearr_20515_20525 = state_20513__$1;
(statearr_20515_20525[(2)] = null);

(statearr_20515_20525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (2))){
var inst_20505 = cljs.core.async.timeout.call(null,(100));
var state_20513__$1 = state_20513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20513__$1,(4),inst_20505);
} else {
if((state_val_20514 === (3))){
var inst_20511 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20513__$1,inst_20511);
} else {
if((state_val_20514 === (4))){
var inst_20507 = (state_20513[(2)]);
var inst_20508 = cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update,new cljs.core.Keyword(null,"cells","cells",-985166822),org.rerenderer.game_of_life.controller.tick);
var state_20513__$1 = (function (){var statearr_20516 = state_20513;
(statearr_20516[(7)] = inst_20508);

(statearr_20516[(8)] = inst_20507);

return statearr_20516;
})();
var statearr_20517_20526 = state_20513__$1;
(statearr_20517_20526[(2)] = null);

(statearr_20517_20526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__12555__auto__))
;
return ((function (switch__12443__auto__,c__12555__auto__){
return (function() {
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto__ = null;
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto____0 = (function (){
var statearr_20521 = [null,null,null,null,null,null,null,null,null];
(statearr_20521[(0)] = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto__);

(statearr_20521[(1)] = (1));

return statearr_20521;
});
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto____1 = (function (state_20513){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_20513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e20522){if((e20522 instanceof Object)){
var ex__12447__auto__ = e20522;
var statearr_20523_20527 = state_20513;
(statearr_20523_20527[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20528 = state_20513;
state_20513 = G__20528;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto__ = function(state_20513){
switch(arguments.length){
case 0:
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto____0.call(this);
case 1:
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto____1.call(this,state_20513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto____0;
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto____1;
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto__))
})();
var state__12557__auto__ = (function (){var statearr_20524 = f__12556__auto__.call(null);
(statearr_20524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto__);

return statearr_20524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto__))
);

return c__12555__auto__;
});
