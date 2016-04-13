// Compiled by ClojureScript 1.7.228 {}
goog.provide('org.rerenderer.game_of_life.controller');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.core.async');
org.rerenderer.game_of_life.controller.under_population = (1);
org.rerenderer.game_of_life.controller.over_population = (4);
org.rerenderer.game_of_life.controller.parent_count = (3);
org.rerenderer.game_of_life.controller.neighbour_offsets = (function (){var digits = cljs.core.range.call(null,(-1),(2));
var iter__19070__auto__ = ((function (digits){
return (function org$rerenderer$game_of_life$controller$iter__29788(s__29789){
return (new cljs.core.LazySeq(null,((function (digits){
return (function (){
var s__29789__$1 = s__29789;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29789__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19066__auto__ = ((function (s__29789__$1,x,xs__5205__auto__,temp__4657__auto__,digits){
return (function org$rerenderer$game_of_life$controller$iter__29788_$_iter__29790(s__29791){
return (new cljs.core.LazySeq(null,((function (s__29789__$1,x,xs__5205__auto__,temp__4657__auto__,digits){
return (function (){
var s__29791__$1 = s__29791;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__29791__$1);
if(temp__4657__auto____$1){
var s__29791__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29791__$2)){
var c__19068__auto__ = cljs.core.chunk_first.call(null,s__29791__$2);
var size__19069__auto__ = cljs.core.count.call(null,c__19068__auto__);
var b__29793 = cljs.core.chunk_buffer.call(null,size__19069__auto__);
if((function (){var i__29792 = (0);
while(true){
if((i__29792 < size__19069__auto__)){
var y = cljs.core._nth.call(null,c__19068__auto__,i__29792);
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(!(cljs.core._EQ_.call(null,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
cljs.core.chunk_append.call(null,b__29793,value);

var G__29794 = (i__29792 + (1));
i__29792 = G__29794;
continue;
} else {
var G__29795 = (i__29792 + (1));
i__29792 = G__29795;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29793),org$rerenderer$game_of_life$controller$iter__29788_$_iter__29790.call(null,cljs.core.chunk_rest.call(null,s__29791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29793),null);
}
} else {
var y = cljs.core.first.call(null,s__29791__$2);
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(!(cljs.core._EQ_.call(null,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
return cljs.core.cons.call(null,value,org$rerenderer$game_of_life$controller$iter__29788_$_iter__29790.call(null,cljs.core.rest.call(null,s__29791__$2)));
} else {
var G__29796 = cljs.core.rest.call(null,s__29791__$2);
s__29791__$1 = G__29796;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29789__$1,x,xs__5205__auto__,temp__4657__auto__,digits))
,null,null));
});})(s__29789__$1,x,xs__5205__auto__,temp__4657__auto__,digits))
;
var fs__19067__auto__ = cljs.core.seq.call(null,iterys__19066__auto__.call(null,digits));
if(fs__19067__auto__){
return cljs.core.concat.call(null,fs__19067__auto__,org$rerenderer$game_of_life$controller$iter__29788.call(null,cljs.core.rest.call(null,s__29789__$1)));
} else {
var G__29797 = cljs.core.rest.call(null,s__29789__$1);
s__29789__$1 = G__29797;
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
return iter__19070__auto__.call(null,digits);
})();
org.rerenderer.game_of_life.controller.all_neighbours = (function org$rerenderer$game_of_life$controller$all_neighbours(cell){
var iter__19070__auto__ = (function org$rerenderer$game_of_life$controller$all_neighbours_$_iter__29802(s__29803){
return (new cljs.core.LazySeq(null,(function (){
var s__29803__$1 = s__29803;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29803__$1);
if(temp__4657__auto__){
var s__29803__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29803__$2)){
var c__19068__auto__ = cljs.core.chunk_first.call(null,s__29803__$2);
var size__19069__auto__ = cljs.core.count.call(null,c__19068__auto__);
var b__29805 = cljs.core.chunk_buffer.call(null,size__19069__auto__);
if((function (){var i__29804 = (0);
while(true){
if((i__29804 < size__19069__auto__)){
var offset = cljs.core._nth.call(null,c__19068__auto__,i__29804);
cljs.core.chunk_append.call(null,b__29805,cljs.core.map.call(null,cljs.core._PLUS_,offset,cell));

var G__29806 = (i__29804 + (1));
i__29804 = G__29806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29805),org$rerenderer$game_of_life$controller$all_neighbours_$_iter__29802.call(null,cljs.core.chunk_rest.call(null,s__29803__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29805),null);
}
} else {
var offset = cljs.core.first.call(null,s__29803__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core._PLUS_,offset,cell),org$rerenderer$game_of_life$controller$all_neighbours_$_iter__29802.call(null,cljs.core.rest.call(null,s__29803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19070__auto__.call(null,org.rerenderer.game_of_life.controller.neighbour_offsets);
});
org.rerenderer.game_of_life.controller.alive_neighbours = (function org$rerenderer$game_of_life$controller$alive_neighbours(cells,cell){
return cljs.core.filter.call(null,(function (p1__29807_SHARP_){
return cljs.core.contains_QMARK_.call(null,cells,p1__29807_SHARP_);
}),org.rerenderer.game_of_life.controller.all_neighbours.call(null,cell));
});
org.rerenderer.game_of_life.controller.dead_neighbours = (function org$rerenderer$game_of_life$controller$dead_neighbours(cells,cell){
return cljs.core.filter.call(null,(function (p1__29808_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,cells,p1__29808_SHARP_));
}),org.rerenderer.game_of_life.controller.all_neighbours.call(null,cell));
});
org.rerenderer.game_of_life.controller.regulate = (function org$rerenderer$game_of_life$controller$regulate(cells){
return cljs.core.filter.call(null,(function (p1__29809_SHARP_){
var alive_neighbour_count = cljs.core.count.call(null,org.rerenderer.game_of_life.controller.alive_neighbours.call(null,cells,p1__29809_SHARP_));
return ((alive_neighbour_count > org.rerenderer.game_of_life.controller.under_population)) && ((alive_neighbour_count < org.rerenderer.game_of_life.controller.over_population));
}),cells);
});
org.rerenderer.game_of_life.controller.dead_neighbour_cells = (function org$rerenderer$game_of_life$controller$dead_neighbour_cells(cells){
return cljs.core.reduce.call(null,clojure.set.union,(function (){var iter__19070__auto__ = (function org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__29814(s__29815){
return (new cljs.core.LazySeq(null,(function (){
var s__29815__$1 = s__29815;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29815__$1);
if(temp__4657__auto__){
var s__29815__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29815__$2)){
var c__19068__auto__ = cljs.core.chunk_first.call(null,s__29815__$2);
var size__19069__auto__ = cljs.core.count.call(null,c__19068__auto__);
var b__29817 = cljs.core.chunk_buffer.call(null,size__19069__auto__);
if((function (){var i__29816 = (0);
while(true){
if((i__29816 < size__19069__auto__)){
var cell = cljs.core._nth.call(null,c__19068__auto__,i__29816);
cljs.core.chunk_append.call(null,b__29817,org.rerenderer.game_of_life.controller.dead_neighbours.call(null,cells,cell));

var G__29818 = (i__29816 + (1));
i__29816 = G__29818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29817),org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__29814.call(null,cljs.core.chunk_rest.call(null,s__29815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29817),null);
}
} else {
var cell = cljs.core.first.call(null,s__29815__$2);
return cljs.core.cons.call(null,org.rerenderer.game_of_life.controller.dead_neighbours.call(null,cells,cell),org$rerenderer$game_of_life$controller$dead_neighbour_cells_$_iter__29814.call(null,cljs.core.rest.call(null,s__29815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19070__auto__.call(null,cells);
})());
});
org.rerenderer.game_of_life.controller.reproduce = (function org$rerenderer$game_of_life$controller$reproduce(cells){
return cljs.core.filter.call(null,(function (p1__29819_SHARP_){
return cljs.core._EQ_.call(null,org.rerenderer.game_of_life.controller.parent_count,cljs.core.count.call(null,org.rerenderer.game_of_life.controller.alive_neighbours.call(null,cells,p1__29819_SHARP_)));
}),org.rerenderer.game_of_life.controller.dead_neighbour_cells.call(null,cells));
});
org.rerenderer.game_of_life.controller.tick = (function org$rerenderer$game_of_life$controller$tick(cells){
return clojure.set.union.call(null,cljs.core.set.call(null,org.rerenderer.game_of_life.controller.reproduce.call(null,cells)),cljs.core.set.call(null,org.rerenderer.game_of_life.controller.regulate.call(null,cells)));
});
org.rerenderer.game_of_life.controller.main_controller = (function org$rerenderer$game_of_life$controller$main_controller(event_ch,state_atom,options){
var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__){
return (function (state_29850){
var state_val_29851 = (state_29850[(1)]);
if((state_val_29851 === (1))){
var state_29850__$1 = state_29850;
var statearr_29852_29862 = state_29850__$1;
(statearr_29852_29862[(2)] = null);

(statearr_29852_29862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (2))){
var inst_29842 = cljs.core.async.timeout.call(null,(100));
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29850__$1,(4),inst_29842);
} else {
if((state_val_29851 === (3))){
var inst_29848 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29850__$1,inst_29848);
} else {
if((state_val_29851 === (4))){
var inst_29844 = (state_29850[(2)]);
var inst_29845 = cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update,new cljs.core.Keyword(null,"cells","cells",-985166822),org.rerenderer.game_of_life.controller.tick);
var state_29850__$1 = (function (){var statearr_29853 = state_29850;
(statearr_29853[(7)] = inst_29844);

(statearr_29853[(8)] = inst_29845);

return statearr_29853;
})();
var statearr_29854_29863 = state_29850__$1;
(statearr_29854_29863[(2)] = null);

(statearr_29854_29863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__20451__auto__))
;
return ((function (switch__20339__auto__,c__20451__auto__){
return (function() {
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto__ = null;
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto____0 = (function (){
var statearr_29858 = [null,null,null,null,null,null,null,null,null];
(statearr_29858[(0)] = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto__);

(statearr_29858[(1)] = (1));

return statearr_29858;
});
var org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto____1 = (function (state_29850){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_29850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e29859){if((e29859 instanceof Object)){
var ex__20343__auto__ = e29859;
var statearr_29860_29864 = state_29850;
(statearr_29860_29864[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29865 = state_29850;
state_29850 = G__29865;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto__ = function(state_29850){
switch(arguments.length){
case 0:
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto____0.call(this);
case 1:
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto____1.call(this,state_29850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto____0;
org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto____1;
return org$rerenderer$game_of_life$controller$main_controller_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__))
})();
var state__20453__auto__ = (function (){var statearr_29861 = f__20452__auto__.call(null);
(statearr_29861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_29861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__))
);

return c__20451__auto__;
});

//# sourceMappingURL=controller.js.map