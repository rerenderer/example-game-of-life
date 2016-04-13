// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.types.node');
goog.require('cljs.core');
goog.require('rerenderer.types.component');
goog.require('rerenderer.types.render_result');
goog.require('rerenderer.platform.core');

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
rerenderer.types.node.Node = (function (childs,script,canvas,x,y,__meta,__extmap,__hash){
this.childs = childs;
this.script = script;
this.canvas = canvas;
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.types.node.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.types.node.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k19970,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__19972 = (((k19970 instanceof cljs.core.Keyword))?k19970.fqn:null);
switch (G__19972) {
case "childs":
return self__.childs;

break;
case "script":
return self__.script;

break;
case "canvas":
return self__.canvas;

break;
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19970,else__6773__auto__);

}
});

rerenderer.types.node.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.types.node.Node{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"childs","childs",-1293201887),self__.childs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script","script",-1304443801),self__.script],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

rerenderer.types.node.Node.prototype.cljs$core$IIterable$ = true;

rerenderer.types.node.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19969){
var self__ = this;
var G__19969__$1 = this;
return (new cljs.core.RecordIter((0),G__19969__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"childs","childs",-1293201887),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.types.node.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.types.node.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.types.node.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.types.node.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.types.node.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.types.node.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"childs","childs",-1293201887),null,new cljs.core.Keyword(null,"script","script",-1304443801),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.types.node.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__19969){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__19973 = cljs.core.keyword_identical_QMARK_;
var expr__19974 = k__6778__auto__;
if(cljs.core.truth_(pred__19973.call(null,new cljs.core.Keyword(null,"childs","childs",-1293201887),expr__19974))){
return (new rerenderer.types.node.Node(G__19969,self__.script,self__.canvas,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19973.call(null,new cljs.core.Keyword(null,"script","script",-1304443801),expr__19974))){
return (new rerenderer.types.node.Node(self__.childs,G__19969,self__.canvas,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19973.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),expr__19974))){
return (new rerenderer.types.node.Node(self__.childs,self__.script,G__19969,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19973.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19974))){
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,G__19969,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19973.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19974))){
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,G__19969,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__19969),null));
}
}
}
}
}
});

rerenderer.types.node.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"childs","childs",-1293201887),self__.childs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script","script",-1304443801),self__.script],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

rerenderer.types.node.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__19969){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,self__.y,G__19969,self__.__extmap,self__.__hash));
});

rerenderer.types.node.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.types.node.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

rerenderer.types.node.Node.cljs$lang$type = true;

rerenderer.types.node.Node.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.types.node/Node");
});

rerenderer.types.node.Node.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.types.node/Node");
});

rerenderer.types.node.__GT_Node = (function rerenderer$types$node$__GT_Node(childs,script,canvas,x,y){
return (new rerenderer.types.node.Node(childs,script,canvas,x,y,null,null,null));
});

rerenderer.types.node.map__GT_Node = (function rerenderer$types$node$map__GT_Node(G__19971){
return (new rerenderer.types.node.Node(new cljs.core.Keyword(null,"childs","childs",-1293201887).cljs$core$IFn$_invoke$arity$1(G__19971),new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(G__19971),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(G__19971),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19971),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19971),null,cljs.core.dissoc.call(null,G__19971,new cljs.core.Keyword(null,"childs","childs",-1293201887),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),null));
});

/**
 * Creates node from component.
 */
rerenderer.types.node.Component__GT_Node = (function rerenderer$types$node$Component__GT_Node(component){
var map__19981 = rerenderer.types.render_result.Component__GT_RenderResult.call(null,component);
var map__19981__$1 = ((((!((map__19981 == null)))?((((map__19981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19981):map__19981);
var script = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"script","script",-1304443801));
var canvas = cljs.core.get.call(null,map__19981__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var map__19982 = rerenderer.types.component.props.call(null,component);
var map__19982__$1 = ((((!((map__19982 == null)))?((((map__19982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19982):map__19982);
var x = cljs.core.get.call(null,map__19982__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19982__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return rerenderer.types.node.map__GT_Node.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"childs","childs",-1293201887),cljs.core.mapv.call(null,rerenderer$types$node$Component__GT_Node,rerenderer.types.component.childs.call(null,component)),new cljs.core.Keyword(null,"script","script",-1304443801),script,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
