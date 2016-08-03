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
rerenderer.core.Game.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.core.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k15727,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__15729 = (((k15727 instanceof cljs.core.Keyword))?k15727.fqn:null);
switch (G__15729) {
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
return cljs.core.get.call(null,self__.__extmap,k15727,else__6773__auto__);

}
});

rerenderer.core.Game.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.core.Game{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),self__.platform_info],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-ch","render-ch",988321140),self__.render_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),self__.event_ch],null))], null),self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IIterable$ = true;

rerenderer.core.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15726){
var self__ = this;
var G__15726__$1 = this;
return (new cljs.core.RecordIter((0),G__15726__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),new cljs.core.Keyword(null,"render-ch","render-ch",988321140),new cljs.core.Keyword(null,"event-ch","event-ch",1535658105)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.core.Game.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.core.Game.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.core.Game.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap.call(null,this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

rerenderer.core.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map.call(null,this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

rerenderer.core.Game.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),null,new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),null,new cljs.core.Keyword(null,"render-ch","render-ch",988321140),null,new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.core.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__15726){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__15730 = cljs.core.keyword_identical_QMARK_;
var expr__15731 = k__6778__auto__;
if(cljs.core.truth_(pred__15730.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),expr__15731))){
return (new rerenderer.core.Game(G__15726,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15730.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__15731))){
return (new rerenderer.core.Game(self__.state_atom,G__15726,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15730.call(null,new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),expr__15731))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,G__15726,self__.render_ch,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15730.call(null,new cljs.core.Keyword(null,"render-ch","render-ch",988321140),expr__15731))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,G__15726,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15730.call(null,new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),expr__15731))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,G__15726,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__15726),null));
}
}
}
}
}
});

rerenderer.core.Game.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),self__.platform_info],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-ch","render-ch",988321140),self__.render_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),self__.event_ch],null))], null),self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__15726){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_ch,self__.event_ch,G__15726,self__.__extmap,self__.__hash));
});

rerenderer.core.Game.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.core.Game.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"platform-info","platform-info",-400693322,null),new cljs.core.Symbol(null,"render-ch","render-ch",-1666114629,null),new cljs.core.Symbol(null,"event-ch","event-ch",-1118777664,null)], null);
});

rerenderer.core.Game.cljs$lang$type = true;

rerenderer.core.Game.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.core/Game");
});

rerenderer.core.Game.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.core/Game");
});

rerenderer.core.__GT_Game = (function rerenderer$core$__GT_Game(state_atom,initial_state,platform_info,render_ch,event_ch){
return (new rerenderer.core.Game(state_atom,initial_state,platform_info,render_ch,event_ch,null,null,null));
});

rerenderer.core.map__GT_Game = (function rerenderer$core$map__GT_Game(G__15728){
return (new rerenderer.core.Game(new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(G__15728),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__15728),new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849).cljs$core$IFn$_invoke$arity$1(G__15728),new cljs.core.Keyword(null,"render-ch","render-ch",988321140).cljs$core$IFn$_invoke$arity$1(G__15728),new cljs.core.Keyword(null,"event-ch","event-ch",1535658105).cljs$core$IFn$_invoke$arity$1(G__15728),null,cljs.core.dissoc.call(null,G__15728,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),new cljs.core.Keyword(null,"render-ch","render-ch",988321140),new cljs.core.Keyword(null,"event-ch","event-ch",1535658105)),null));
});

/**
 * Initializes new rerenderer application.
 * 
 *   * `root-view` - function for rendering root canvas - `(fn [state options])`;
 *   * `event-handler` - function for handling events - `(fn [event-ch state-atom options])`;
 *   * `scale` - scale image to screen - `true/false`;
 *   * `options` - additional platform/app-dependent options.
 * 
 *   Returns `Game` record.
 */
rerenderer.core.init_BANG_ = (function rerenderer$core$init_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15773 = arguments.length;
var i__7215__auto___15774 = (0);
while(true){
if((i__7215__auto___15774 < len__7214__auto___15773)){
args__7221__auto__.push((arguments[i__7215__auto___15774]));

var G__15775 = (i__7215__auto___15774 + (1));
i__7215__auto___15774 = G__15775;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15739){
var map__15740 = p__15739;
var map__15740__$1 = ((((!((map__15740 == null)))?((((map__15740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15740):map__15740);
var options = map__15740__$1;
var root_view = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"root-view","root-view",496300818));
var event_handler = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var state = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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

cljs.core.add_watch.call(null,state_atom,new cljs.core.Keyword(null,"render","render",-1408033454),((function (render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state){
return (function (p1__15735_SHARP_,p2__15736_SHARP_,p3__15737_SHARP_,p4__15734_SHARP_){
var c__12557__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto__,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto__,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state){
return (function (state_15745){
var state_val_15746 = (state_15745[(1)]);
if((state_val_15746 === (1))){
var state_15745__$1 = state_15745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15745__$1,(2),render_ch,p4__15734_SHARP_);
} else {
if((state_val_15746 === (2))){
var inst_15743 = (state_15745[(2)]);
var state_15745__$1 = state_15745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15745__$1,inst_15743);
} else {
return null;
}
}
});})(c__12557__auto__,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state))
;
return ((function (switch__12445__auto__,c__12557__auto__,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state){
return (function() {
var rerenderer$core$state_machine__12446__auto__ = null;
var rerenderer$core$state_machine__12446__auto____0 = (function (){
var statearr_15750 = [null,null,null,null,null,null,null];
(statearr_15750[(0)] = rerenderer$core$state_machine__12446__auto__);

(statearr_15750[(1)] = (1));

return statearr_15750;
});
var rerenderer$core$state_machine__12446__auto____1 = (function (state_15745){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15751){if((e15751 instanceof Object)){
var ex__12449__auto__ = e15751;
var statearr_15752_15776 = state_15745;
(statearr_15752_15776[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15777 = state_15745;
state_15745 = G__15777;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
rerenderer$core$state_machine__12446__auto__ = function(state_15745){
switch(arguments.length){
case 0:
return rerenderer$core$state_machine__12446__auto____0.call(this);
case 1:
return rerenderer$core$state_machine__12446__auto____1.call(this,state_15745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$core$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$core$state_machine__12446__auto____0;
rerenderer$core$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$core$state_machine__12446__auto____1;
return rerenderer$core$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto__,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state))
})();
var state__12559__auto__ = (function (){var statearr_15753 = f__12558__auto__.call(null);
(statearr_15753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto__);

return statearr_15753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto__,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state))
);

return c__12557__auto__;
});})(render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state))
);

var c__12557__auto___15778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___15778,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___15778,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state){
return (function (state_15763){
var state_val_15764 = (state_15763[(1)]);
if((state_val_15764 === (1))){
var inst_15754 = cljs.core.deref.call(null,state_atom);
var state_15763__$1 = state_15763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15763__$1,(2),render_ch,inst_15754);
} else {
if((state_val_15764 === (2))){
var inst_15756 = (state_15763[(2)]);
var inst_15757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15758 = [new cljs.core.Keyword(null,"init","init",-1875481434)];
var inst_15759 = (new cljs.core.PersistentVector(null,1,(5),inst_15757,inst_15758,null));
var state_15763__$1 = (function (){var statearr_15765 = state_15763;
(statearr_15765[(7)] = inst_15756);

return statearr_15765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15763__$1,(3),event_ch,inst_15759);
} else {
if((state_val_15764 === (3))){
var inst_15761 = (state_15763[(2)]);
var state_15763__$1 = state_15763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15763__$1,inst_15761);
} else {
return null;
}
}
}
});})(c__12557__auto___15778,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state))
;
return ((function (switch__12445__auto__,c__12557__auto___15778,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state){
return (function() {
var rerenderer$core$state_machine__12446__auto__ = null;
var rerenderer$core$state_machine__12446__auto____0 = (function (){
var statearr_15769 = [null,null,null,null,null,null,null,null];
(statearr_15769[(0)] = rerenderer$core$state_machine__12446__auto__);

(statearr_15769[(1)] = (1));

return statearr_15769;
});
var rerenderer$core$state_machine__12446__auto____1 = (function (state_15763){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15770){if((e15770 instanceof Object)){
var ex__12449__auto__ = e15770;
var statearr_15771_15779 = state_15763;
(statearr_15771_15779[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15780 = state_15763;
state_15763 = G__15780;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
rerenderer$core$state_machine__12446__auto__ = function(state_15763){
switch(arguments.length){
case 0:
return rerenderer$core$state_machine__12446__auto____0.call(this);
case 1:
return rerenderer$core$state_machine__12446__auto____1.call(this,state_15763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$core$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$core$state_machine__12446__auto____0;
rerenderer$core$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$core$state_machine__12446__auto____1;
return rerenderer$core$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___15778,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state))
})();
var state__12559__auto__ = (function (){var statearr_15772 = f__12558__auto__.call(null);
(statearr_15772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___15778);

return statearr_15772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___15778,render_ch,event_ch,platform_info,state_atom,map__15740,map__15740__$1,options,root_view,event_handler,state))
);


if(cljs.core.truth_(event_handler)){
event_handler.call(null,event_ch,state_atom,options);
} else {
}

return rerenderer.core.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),state_atom,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state,new cljs.core.Keyword(null,"platform-info","platform-info",-2041224849),platform_info,new cljs.core.Keyword(null,"render-ch","render-ch",988321140),render_ch,new cljs.core.Keyword(null,"event-ch","event-ch",1535658105),event_ch], null));
});

rerenderer.core.init_BANG_.cljs$lang$maxFixedArity = (0);

rerenderer.core.init_BANG_.cljs$lang$applyTo = (function (seq15738){
return rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15738));
});
