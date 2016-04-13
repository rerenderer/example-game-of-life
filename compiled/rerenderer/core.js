// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.render');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.core.Game = (function (state_atom,initial_state,platform_info,render_ch,event_ch,__meta,__extmap,__hash){
this.state_atom = state_atom;
this.initial_state = initial_state;
this.platform_info = platform_info;
this.render_ch = render_ch;
this.event_ch = event_ch;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.core.Game.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.core.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k27324,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__27326 = (((k27324 instanceof cljs.core.Keyword))?k27324.fqn:null);
switch (G__27326) {
case "state-atom":
return self__.state_atom;

break;
case "initial-state":
return self__.initial_state;

break;
case "platform-info":
return self__.platform_info;

break;
case "render-ch":
return self__.render_ch;

break;
case "event-ch":
return self__.event_ch;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27324,else__18915__auto__);

}
});

rerenderer.core.Game.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.core.Game{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),self__.platform_info],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-ch","render-ch",988321140),self__.render_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),self__.event_ch],null))], null),self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IIterable$ = true;

rerenderer.core.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27323){
var self__ = this;
var G__27323__$1 = this;
return (new cljs.core.RecordIter((0),G__27323__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),new cljs.core.Keyword(null,"render-ch","render-ch",988321140),new cljs.core.Keyword(null,"event-ch","event-ch",1535658105)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.core.Game.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.core.Game.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.core.Game.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
var self__ = this;
var this__18907__auto____$1 = this;
var h__18733__auto__ = self__.__hash;
if(!((h__18733__auto__ == null))){
return h__18733__auto__;
} else {
var h__18733__auto____$1 = cljs.core.hash_imap.call(null,this__18907__auto____$1);
self__.__hash = h__18733__auto____$1;

return h__18733__auto____$1;
}
});

rerenderer.core.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
var self__ = this;
var this__18908__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18286__auto__ = other__18909__auto__;
if(cljs.core.truth_(and__18286__auto__)){
var and__18286__auto____$1 = (this__18908__auto____$1.constructor === other__18909__auto__.constructor);
if(and__18286__auto____$1){
return cljs.core.equiv_map.call(null,this__18908__auto____$1,other__18909__auto__);
} else {
return and__18286__auto____$1;
}
} else {
return and__18286__auto__;
}
})())){
return true;
} else {
return false;
}
});

rerenderer.core.Game.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),null,new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),null,new cljs.core.Keyword(null,"render-ch","render-ch",988321140),null,new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.core.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__27323){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__27327 = cljs.core.keyword_identical_QMARK_;
var expr__27328 = k__18920__auto__;
if(cljs.core.truth_(pred__27327.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),expr__27328))){
return (new rerenderer.core.Game(G__27323,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27327.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__27328))){
return (new rerenderer.core.Game(self__.state_atom,G__27323,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27327.call(null,new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),expr__27328))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,G__27323,self__.render_ch,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27327.call(null,new cljs.core.Keyword(null,"render-ch","render-ch",988321140),expr__27328))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,G__27323,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27327.call(null,new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),expr__27328))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,G__27323,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__27323),null));
}
}
}
}
}
});

rerenderer.core.Game.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),self__.platform_info],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-ch","render-ch",988321140),self__.render_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),self__.event_ch],null))], null),self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__27323){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,G__27323,self__.__extmap,self__.__hash));
});

rerenderer.core.Game.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.core.Game.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"platform-info","platform-info",-400693322,null),new cljs.core.Symbol(null,"render-ch","render-ch",-1666114629,null),new cljs.core.Symbol(null,"event-ch","event-ch",-1118777664,null)], null);
});

rerenderer.core.Game.cljs$lang$type = true;

rerenderer.core.Game.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.core/Game");
});

rerenderer.core.Game.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.core/Game");
});

rerenderer.core.__GT_Game = (function rerenderer$core$__GT_Game(state_atom,initial_state,platform_info,render_ch,event_ch){
return (new rerenderer.core.Game(state_atom,initial_state,platform_info,render_ch,event_ch,null,null,null));
});

rerenderer.core.map__GT_Game = (function rerenderer$core$map__GT_Game(G__27325){
return (new rerenderer.core.Game(new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(G__27325),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__27325),new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849).cljs$core$IFn$_invoke$arity$1(G__27325),new cljs.core.Keyword(null,"render-ch","render-ch",988321140).cljs$core$IFn$_invoke$arity$1(G__27325),new cljs.core.Keyword(null,"event-ch","event-ch",1535658105).cljs$core$IFn$_invoke$arity$1(G__27325),null,cljs.core.dissoc.call(null,G__27325,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),new cljs.core.Keyword(null,"render-ch","render-ch",988321140),new cljs.core.Keyword(null,"event-ch","event-ch",1535658105)),null));
});

/**
 * Initializes new rerenderer application, required params:
 *  - root-view - function for rendering root canvas - (fn [state options])
 *  - event-handler - function for handling events - (fn [event-ch state-atom options])
 *  - scale - true/false
 *  - **options - additional platform/app-dependent options.
 * 
 *   Returns Game record.
 */
rerenderer.core.init_BANG_ = (function rerenderer$core$init_BANG_(var_args){
var args__19363__auto__ = [];
var len__19356__auto___27370 = arguments.length;
var i__19357__auto___27371 = (0);
while(true){
if((i__19357__auto___27371 < len__19356__auto___27370)){
args__19363__auto__.push((arguments[i__19357__auto___27371]));

var G__27372 = (i__19357__auto___27371 + (1));
i__19357__auto___27371 = G__27372;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((0) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((0)),(0))):null);
return rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__19364__auto__);
});

rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__27336){
var map__27337 = p__27336;
var map__27337__$1 = ((((!((map__27337 == null)))?((((map__27337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27337):map__27337);
var options = map__27337__$1;
var root_view = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"root-view","root-view",496300818));
var event_handler = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var state = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.ifn_QMARK_.call(null,root_view)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"root-view","root-view",2136832345,null))))].join('')));
}

if(cljs.core.map_QMARK_.call(null,state)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"state","state",-348086572,null))))].join('')));
}

var render_ch = rerenderer.render.get_render_ch.call(null,root_view,options);
var event_ch = cljs.core.async.chan.call(null);
var platform_info = rerenderer.platform.core.information.call(null,options);
var state_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform_info));
rerenderer.platform.core.listen_BANG_.call(null,event_ch,options);

cljs.core.add_watch.call(null,state_atom,new cljs.core.Keyword(null,"render","render",-1408033454),((function (render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state){
return (function (p1__27332_SHARP_,p2__27333_SHARP_,p3__27334_SHARP_,p4__27331_SHARP_){
var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state){
return (function (state_27342){
var state_val_27343 = (state_27342[(1)]);
if((state_val_27343 === (1))){
var state_27342__$1 = state_27342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27342__$1,(2),render_ch,p4__27331_SHARP_);
} else {
if((state_val_27343 === (2))){
var inst_27340 = (state_27342[(2)]);
var state_27342__$1 = state_27342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27342__$1,inst_27340);
} else {
return null;
}
}
});})(c__20451__auto__,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state))
;
return ((function (switch__20339__auto__,c__20451__auto__,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state){
return (function() {
var rerenderer$core$state_machine__20340__auto__ = null;
var rerenderer$core$state_machine__20340__auto____0 = (function (){
var statearr_27347 = [null,null,null,null,null,null,null];
(statearr_27347[(0)] = rerenderer$core$state_machine__20340__auto__);

(statearr_27347[(1)] = (1));

return statearr_27347;
});
var rerenderer$core$state_machine__20340__auto____1 = (function (state_27342){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_27342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e27348){if((e27348 instanceof Object)){
var ex__20343__auto__ = e27348;
var statearr_27349_27373 = state_27342;
(statearr_27349_27373[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27374 = state_27342;
state_27342 = G__27374;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
rerenderer$core$state_machine__20340__auto__ = function(state_27342){
switch(arguments.length){
case 0:
return rerenderer$core$state_machine__20340__auto____0.call(this);
case 1:
return rerenderer$core$state_machine__20340__auto____1.call(this,state_27342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$core$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$core$state_machine__20340__auto____0;
rerenderer$core$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$core$state_machine__20340__auto____1;
return rerenderer$core$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state))
})();
var state__20453__auto__ = (function (){var statearr_27350 = f__20452__auto__.call(null);
(statearr_27350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_27350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state))
);

return c__20451__auto__;
});})(render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state))
);

var c__20451__auto___27375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___27375,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___27375,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state){
return (function (state_27360){
var state_val_27361 = (state_27360[(1)]);
if((state_val_27361 === (1))){
var inst_27351 = cljs.core.deref.call(null,state_atom);
var state_27360__$1 = state_27360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27360__$1,(2),render_ch,inst_27351);
} else {
if((state_val_27361 === (2))){
var inst_27353 = (state_27360[(2)]);
var inst_27354 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27355 = [new cljs.core.Keyword(null,"init","init",-1875481434)];
var inst_27356 = (new cljs.core.PersistentVector(null,1,(5),inst_27354,inst_27355,null));
var state_27360__$1 = (function (){var statearr_27362 = state_27360;
(statearr_27362[(7)] = inst_27353);

return statearr_27362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27360__$1,(3),event_ch,inst_27356);
} else {
if((state_val_27361 === (3))){
var inst_27358 = (state_27360[(2)]);
var state_27360__$1 = state_27360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27360__$1,inst_27358);
} else {
return null;
}
}
}
});})(c__20451__auto___27375,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state))
;
return ((function (switch__20339__auto__,c__20451__auto___27375,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state){
return (function() {
var rerenderer$core$state_machine__20340__auto__ = null;
var rerenderer$core$state_machine__20340__auto____0 = (function (){
var statearr_27366 = [null,null,null,null,null,null,null,null];
(statearr_27366[(0)] = rerenderer$core$state_machine__20340__auto__);

(statearr_27366[(1)] = (1));

return statearr_27366;
});
var rerenderer$core$state_machine__20340__auto____1 = (function (state_27360){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_27360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e27367){if((e27367 instanceof Object)){
var ex__20343__auto__ = e27367;
var statearr_27368_27376 = state_27360;
(statearr_27368_27376[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27377 = state_27360;
state_27360 = G__27377;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
rerenderer$core$state_machine__20340__auto__ = function(state_27360){
switch(arguments.length){
case 0:
return rerenderer$core$state_machine__20340__auto____0.call(this);
case 1:
return rerenderer$core$state_machine__20340__auto____1.call(this,state_27360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$core$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$core$state_machine__20340__auto____0;
rerenderer$core$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$core$state_machine__20340__auto____1;
return rerenderer$core$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___27375,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state))
})();
var state__20453__auto__ = (function (){var statearr_27369 = f__20452__auto__.call(null);
(statearr_27369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___27375);

return statearr_27369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___27375,render_ch,event_ch,platform_info,state_atom,map__27337,map__27337__$1,options,root_view,event_handler,state))
);


if(cljs.core.truth_(event_handler)){
event_handler.call(null,event_ch,state_atom,options);
} else {
}

return rerenderer.core.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),state_atom,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state,new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),platform_info,new cljs.core.Keyword(null,"render-ch","render-ch",988321140),render_ch,new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),event_ch], null));
});

rerenderer.core.init_BANG_.cljs$lang$maxFixedArity = (0);

rerenderer.core.init_BANG_.cljs$lang$applyTo = (function (seq27335){
return rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27335));
});

//# sourceMappingURL=core.js.map