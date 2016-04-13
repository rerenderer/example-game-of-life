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
rerenderer.types.node.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.types.node.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24785,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24787 = (((k24785 instanceof cljs.core.Keyword))?k24785.fqn:null);
switch (G__24787) {
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
return cljs.core.get.call(null,self__.__extmap,k24785,else__18915__auto__);

}
});

rerenderer.types.node.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.types.node.Node{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"childs","childs",-1293201887),self__.childs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script","script",-1304443801),self__.script],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

rerenderer.types.node.Node.prototype.cljs$core$IIterable$ = true;

rerenderer.types.node.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24784){
var self__ = this;
var G__24784__$1 = this;
return (new cljs.core.RecordIter((0),G__24784__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"childs","childs",-1293201887),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.types.node.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.types.node.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.types.node.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.types.node.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.types.node.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.types.node.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"childs","childs",-1293201887),null,new cljs.core.Keyword(null,"script","script",-1304443801),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.types.node.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24784){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24788 = cljs.core.keyword_identical_QMARK_;
var expr__24789 = k__18920__auto__;
if(cljs.core.truth_(pred__24788.call(null,new cljs.core.Keyword(null,"childs","childs",-1293201887),expr__24789))){
return (new rerenderer.types.node.Node(G__24784,self__.script,self__.canvas,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24788.call(null,new cljs.core.Keyword(null,"script","script",-1304443801),expr__24789))){
return (new rerenderer.types.node.Node(self__.childs,G__24784,self__.canvas,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24788.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),expr__24789))){
return (new rerenderer.types.node.Node(self__.childs,self__.script,G__24784,self__.x,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24788.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__24789))){
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,G__24784,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24788.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__24789))){
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,G__24784,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24784),null));
}
}
}
}
}
});

rerenderer.types.node.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"childs","childs",-1293201887),self__.childs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script","script",-1304443801),self__.script],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

rerenderer.types.node.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24784){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.types.node.Node(self__.childs,self__.script,self__.canvas,self__.x,self__.y,G__24784,self__.__extmap,self__.__hash));
});

rerenderer.types.node.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.types.node.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

rerenderer.types.node.Node.cljs$lang$type = true;

rerenderer.types.node.Node.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.types.node/Node");
});

rerenderer.types.node.Node.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.types.node/Node");
});

rerenderer.types.node.__GT_Node = (function rerenderer$types$node$__GT_Node(childs,script,canvas,x,y){
return (new rerenderer.types.node.Node(childs,script,canvas,x,y,null,null,null));
});

rerenderer.types.node.map__GT_Node = (function rerenderer$types$node$map__GT_Node(G__24786){
return (new rerenderer.types.node.Node(new cljs.core.Keyword(null,"childs","childs",-1293201887).cljs$core$IFn$_invoke$arity$1(G__24786),new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(G__24786),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(G__24786),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__24786),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__24786),null,cljs.core.dissoc.call(null,G__24786,new cljs.core.Keyword(null,"childs","childs",-1293201887),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),null));
});

/**
 * Creates node from component.
 */
rerenderer.types.node.Component__GT_Node = (function rerenderer$types$node$Component__GT_Node(component){
var map__24796 = rerenderer.types.render_result.Component__GT_RenderResult.call(null,component);
var map__24796__$1 = ((((!((map__24796 == null)))?((((map__24796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24796):map__24796);
var script = cljs.core.get.call(null,map__24796__$1,new cljs.core.Keyword(null,"script","script",-1304443801));
var canvas = cljs.core.get.call(null,map__24796__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var map__24797 = rerenderer.types.component.props.call(null,component);
var map__24797__$1 = ((((!((map__24797 == null)))?((((map__24797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24797):map__24797);
var x = cljs.core.get.call(null,map__24797__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24797__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return rerenderer.types.node.map__GT_Node.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"childs","childs",-1293201887),cljs.core.mapv.call(null,rerenderer$types$node$Component__GT_Node,rerenderer.types.component.childs.call(null,component)),new cljs.core.Keyword(null,"script","script",-1304443801),script,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});

//# sourceMappingURL=node.js.map