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
return (function org$rerenderer$game_of_life$controller$iter__15899(s__15900){
return (new cljs.core.LazySeq(null,((function (digits){
return (function (){
var s__15900__$1 = s__15900;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15900__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6924__auto__ = ((function (s__15900__$1,x,xs__5205__auto__,temp__4657__auto__,digits){
return (function org$rerenderer$game_of_life$controller$iter__15899_$_iter__15901(s__15902){
return (new cljs.core.LazySeq(null,((function (s__15900__$1,x,xs__5205__auto__,temp__4657__auto__,digits){
return (function (){
var s__15902__$1 = s__15902;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__15902__$1);
if(temp__4657__auto____$1){
var s__15902__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15902__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__15902__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__15904 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__15903 = (0);
while(true){
if((i__15903 < size__6927__auto__)){
var y = cljs.core._nth.call(null,c__6926__auto__,i__15903);
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(!(cljs.core._EQ_.call(null,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
cljs.core.chunk_append.call(null,b__15904,value);

var G__15905 = (i__15903 + (1));
i__15903 = G__15905;
continue;
} else {
var G__15906 = (i__15903 + (1));
i__15903 = G__15906;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15904),org$rerenderer$game_of_life$controller$iter__15899_$_iter__15901.call(null,cljs.core.chunk_rest.call(null,s__15902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15904),null);
}
} else {
var y = cljs.core.first.call(null,s__15902__$2);
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(!(cljs.core._EQ_.call(null,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
return cljs.core.cons.call(null,value,org$rerenderer$game_of_life$controller$iter__15899_$_iter__15901.call(null,cljs.core.rest.call(null,s__15902__$2)));
} else {
var G__15907 = cljs.core.rest.call(null,s__15902__$2);
s__15902__$1 = G__15907;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__15900__$1,x,xs__5205__auto__,temp__4657__auto__,digits))
,null,null));
});})(s__15900__$1,x,xs__5205__auto__,temp__4657__auto__,digits))
;
var fs__6925__auto__ = cljs.core.seq.call(null,iterys__6924__auto__.call(null,digits));
if(fs__6925__auto__){
return cljs.core.concat.call(null,fs__6925__auto__,org$rerenderer$game_of_life$controller$iter__15899.call(null,cljs.core.rest.call(null,s__15900__$1)));
} else {
var G__15908 = cljs.core.rest.call(null,s__15900__$1);
s__15900__$1 = G__15908;
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
var iter__6928__auto__ = (function org$rerenderer$game_of_life$controller$all_neighbours_$_iter__15913(s__15914){
return (new cljs.core.LazySeq(null,(function (){
var s__15914__$1 = s__15914;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15914__$1);
if(temp__4657__auto__){
var s__15914__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15914__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__15914__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__15916 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__15915 = (0);
while(true){
if((i__15915 < size__6927__auto__)){
var offset = cljs.core._nth.call(null,c__6926__auto__,i__15915);
cljs.core.chunk_append.call(null,b__15916,cljs.core.map.call(null,cljs.core._PLUS_,offset,cell));

var G__15917 = (i__15915 + (1));
i__15915 = G__15917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15916),org$rerenderer$game_of_life$controller$all_neighbours_$_iter__15913.call(null,cljs.core.chunk_rest.call(null,s__15914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15916),null);
}
} else {
var offset = cljs.core.first.call(null,s__15914__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core._PLUS_,offset,cell),org$rerenderer$game_of_life$controller$all_neighbours_$_iter__15913.call(null,cljs.core.rest.call(null,s__15914__$2)));
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
return cljs.core.filter.call(null,(function (p1__15918_SHARP_){
return cljs.core.contains_QMARK_.call(null,cells,p1__15918_SHARP_);
}),org.rerenderer.game_of_life.controller.all_neighbours.call(null,cell));
});
org.rerenderer.game_of_life.controller.dead_neighbours = (function org$rerenderer$game_of_life$controller$dead_neighbours(cells,cell){
return cljs.core.filter.call(null,(function (p1__15919_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,cells,p1__15919_SHARP_));
}),org.rerenderer.game_of_life.controller.all_neighbours.call(null,cell));
});
org.rerenderer.game_of_life.controller.regulate = (function org$rerenderer$game_of_life$controller$regulate(cells){
return cljs.core.filter.call(null,(function (p1__15920_SHARP_){
var alive_neighbour_count = cljs.core.count.call(null,org.rerenderer.game_of_life.controller.alive_neighbours.call(null,cells,p1__15920_SHARP_));
return ((alive_neighbour_count > org.rerenderer.game_of_life.controller.under_population)) && ((alive_neighbour_count < org.rerenderer.game_of_life.controller.over_population));
}),cells);
});
org.rerenderer.game_of_life.controller.dead_neighbour_cells = (function org$rerenderer$game_of_life$controller$dead_neighbour_cells(cells){
return cljs.core.reduce.call(null,clojure.set.union,(function (){var iter__6928__auto__ = (function org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__15925(s__15926){
return (new cljs.core.LazySeq(null,(function (){
var s__15926__$1 = s__15926;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15926__$1);
if(temp__4657__auto__){
var s__15926__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15926__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__15926__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__15928 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__15927 = (0);
while(true){
if((i__15927 < size__6927__auto__)){
var cell = cljs.core._nth.call(null,c__6926__auto__,i__15927);
cljs.core.chunk_append.call(null,b__15928,org.rerenderer.game_of_life.controller.dead_neighbours.call(null,cells,cell));

var G__15929 = (i__15927 + (1));
i__15927 = G__15929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15928),org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__15925.call(null,cljs.core.chunk_rest.call(null,s__15926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15928),null);
}
} else {
var cell = cljs.core.first.call(null,s__15926__$2);
return cljs.core.cons.call(null,org.rerenderer.game_of_life.controller.dead_neighbours.call(null,cells,cell),org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__15925.call(null,cljs.core.rest.call(null,s__15926__$2)));
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
return cljs.core.filter.call(null,(function (p1__15930_SHARP_){
return cljs.core._EQ_.call(null,org.rerenderer.game_of_life.controller.parent_count,cljs.core.count.call(null,org.rerenderer.game_of_life.controller.alive_neighbours.call(null,cells,p1__15930_SHARP_)));
}),org.rerenderer.game_of_life.controller.dead_neighbour_cells.call(null,cells));
});
org.rerenderer.game_of_life.controller.tick = (function org$rerenderer$game_of_life$controller$tick(cells){
return clojure.set.union.call(null,cljs.core.set.call(null,org.rerenderer.game_of_life.controller.reproduce.call(null,cells)),cljs.core.set.call(null,org.rerenderer.game_of_life.controller.regulate.call(null,cells)));
});
org.rerenderer.game_of_life.controller.main_controller = (function org$rerenderer$game_of_life$controller$main_controller(event_ch,state_atom,options){
var c__12557__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto__){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto__){
return (function (state_15961){
var state_val_15962 = (state_15961[(1)]);
if((state_val_15962 === (1))){
var state_15961__$1 = state_15961;
var statearr_15963_15973 = state_15961__$1;
(statearr_15963_15973[(2)] = null);

(statearr_15963_15973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15962 === (2))){
var inst_15953 = cljs.core.async.timeout.call(null,(100));
var state_15961__$1 = state_15961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15961__$1,(4),inst_15953);
} else {
if((state_val_15962 === (3))){
var inst_15959 = (state_15961[(2)]);
var state_15961__$1 = state_15961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15961__$1,inst_15959);
} else {
if((state_val_15962 === (4))){
var inst_15955 = (state_15961[(2)]);
var inst_15956 = cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update,new cljs.core.Keyword(null,"cells","cells",-985166822),org.rerenderer.game_of_life.controller.tick);
var state_15961__$1 = (function (){var statearr_15964 = state_15961;
(statearr_15964[(7)] = inst_15955);

(statearr_15964[(8)] = inst_15956);

return statearr_15964;
})();
var statearr_15965_15974 = state_15961__$1;
(statearr_15965_15974[(2)] = null);

(statearr_15965_15974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__12557__auto__))
;
return ((function (switch__12445__auto__,c__12557__auto__){
return (function() {
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto__ = null;
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto____0 = (function (){
var statearr_15969 = [null,null,null,null,null,null,null,null,null];
(statearr_15969[(0)] = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto__);

(statearr_15969[(1)] = (1));

return statearr_15969;
});
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto____1 = (function (state_15961){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15970){if((e15970 instanceof Object)){
var ex__12449__auto__ = e15970;
var statearr_15971_15975 = state_15961;
(statearr_15971_15975[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15976 = state_15961;
state_15961 = G__15976;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto__ = function(state_15961){
switch(arguments.length){
case 0:
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto____0.call(this);
case 1:
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto____1.call(this,state_15961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto____0;
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto____1;
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto__))
})();
var state__12559__auto__ = (function (){var statearr_15972 = f__12558__auto__.call(null);
(statearr_15972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto__);

return statearr_15972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto__))
);

return c__12557__auto__;
});
