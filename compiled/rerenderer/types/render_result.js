// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.types.render_result');
goog.require('cljs.core');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.types.component');

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
rerenderer.types.render_result.RenderResult = (function (script,canvas,__meta,__extmap,__hash){
this.script = script;
this.canvas = canvas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.types.render_result.RenderResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24745,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24747 = (((k24745 instanceof cljs.core.Keyword))?k24745.fqn:null);
switch (G__24747) {
case "script":
return self__.script;

break;
case "canvas":
return self__.canvas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24745,else__18915__auto__);

}
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.types.render-result.RenderResult{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script","script",-1304443801),self__.script],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null))], null),self__.__extmap));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IIterable$ = true;

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24744){
var self__ = this;
var G__24744__$1 = this;
return (new cljs.core.RecordIter((0),G__24744__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.types.render_result.RenderResult(self__.script,self__.canvas,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"script","script",-1304443801),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.types.render_result.RenderResult(self__.script,self__.canvas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24744){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24748 = cljs.core.keyword_identical_QMARK_;
var expr__24749 = k__18920__auto__;
if(cljs.core.truth_(pred__24748.call(null,new cljs.core.Keyword(null,"script","script",-1304443801),expr__24749))){
return (new rerenderer.types.render_result.RenderResult(G__24744,self__.canvas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24748.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),expr__24749))){
return (new rerenderer.types.render_result.RenderResult(self__.script,G__24744,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.types.render_result.RenderResult(self__.script,self__.canvas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24744),null));
}
}
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script","script",-1304443801),self__.script],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null))], null),self__.__extmap));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24744){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.types.render_result.RenderResult(self__.script,self__.canvas,G__24744,self__.__extmap,self__.__hash));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.types.render_result.RenderResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"canvas","canvas",-158285962,null)], null);
});

rerenderer.types.render_result.RenderResult.cljs$lang$type = true;

rerenderer.types.render_result.RenderResult.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.types.render-result/RenderResult");
});

rerenderer.types.render_result.RenderResult.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.types.render-result/RenderResult");
});

rerenderer.types.render_result.__GT_RenderResult = (function rerenderer$types$render_result$__GT_RenderResult(script,canvas){
return (new rerenderer.types.render_result.RenderResult(script,canvas,null,null,null));
});

rerenderer.types.render_result.map__GT_RenderResult = (function rerenderer$types$render_result$map__GT_RenderResult(G__24746){
return (new rerenderer.types.render_result.RenderResult(new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(G__24746),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(G__24746),null,cljs.core.dissoc.call(null,G__24746,new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)),null));
});

rerenderer.types.render_result.cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Renders component and creates render result.
 */
rerenderer.types.render_result.Component__GT_RenderResult = (function rerenderer$types$render_result$Component__GT_RenderResult(component){
var path = rerenderer.types.component.calculate_path.call(null,component);
var cached = cljs.core.get.call(null,cljs.core.deref.call(null,rerenderer.types.render_result.cache),path);
if(cljs.core.truth_(cached)){
return rerenderer.types.render_result.__GT_RenderResult.call(null,cljs.core.PersistentVector.EMPTY,cached);
} else {
var rendered = rerenderer.platform.core.render.call(null,component);
cljs.core.swap_BANG_.call(null,rerenderer.types.render_result.cache,cljs.core.assoc,path,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(rendered));

return rendered;
}
});
/**
 * Removes old nodes from cache.
 */
rerenderer.types.render_result.sanitize_cache_BANG_ = (function rerenderer$types$render_result$sanitize_cache_BANG_(node){
var paths = (function (){var G__24766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var vec__24767 = G__24766;
var node__$1 = cljs.core.nth.call(null,vec__24767,(0),null);
var rest_nodes = cljs.core.nthnext.call(null,vec__24767,(1));
var result = cljs.core.PersistentVector.EMPTY;
var G__24766__$1 = G__24766;
var result__$1 = result;
while(true){
var vec__24768 = G__24766__$1;
var node__$2 = cljs.core.nth.call(null,vec__24768,(0),null);
var rest_nodes__$1 = cljs.core.nthnext.call(null,vec__24768,(1));
var result__$2 = result__$1;
if(cljs.core.truth_(node__$2)){
var G__24777 = cljs.core.concat.call(null,new cljs.core.Keyword(null,"childs","childs",-1293201887).cljs$core$IFn$_invoke$arity$1(node__$2),rest_nodes__$1);
var G__24778 = cljs.core.conj.call(null,result__$2,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node__$2));
G__24766__$1 = G__24777;
result__$1 = G__24778;
continue;
} else {
return null;
}
break;
}
})();
var used_QMARK_ = cljs.core.set.call(null,paths);
return cljs.core.swap_BANG_.call(null,rerenderer.types.render_result.cache,((function (paths,used_QMARK_){
return (function (p1__24752_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19070__auto__ = ((function (paths,used_QMARK_){
return (function rerenderer$types$render_result$sanitize_cache_BANG__$_iter__24769(s__24770){
return (new cljs.core.LazySeq(null,((function (paths,used_QMARK_){
return (function (){
var s__24770__$1 = s__24770;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24770__$1);
if(temp__4657__auto__){
var s__24770__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24770__$2)){
var c__19068__auto__ = cljs.core.chunk_first.call(null,s__24770__$2);
var size__19069__auto__ = cljs.core.count.call(null,c__19068__auto__);
var b__24772 = cljs.core.chunk_buffer.call(null,size__19069__auto__);
if((function (){var i__24771 = (0);
while(true){
if((i__24771 < size__19069__auto__)){
var vec__24775 = cljs.core._nth.call(null,c__19068__auto__,i__24771);
var k = cljs.core.nth.call(null,vec__24775,(0),null);
var v = cljs.core.nth.call(null,vec__24775,(1),null);
if(cljs.core.truth_(used_QMARK_.call(null,k))){
cljs.core.chunk_append.call(null,b__24772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__24779 = (i__24771 + (1));
i__24771 = G__24779;
continue;
} else {
var G__24780 = (i__24771 + (1));
i__24771 = G__24780;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24772),rerenderer$types$render_result$sanitize_cache_BANG__$_iter__24769.call(null,cljs.core.chunk_rest.call(null,s__24770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24772),null);
}
} else {
var vec__24776 = cljs.core.first.call(null,s__24770__$2);
var k = cljs.core.nth.call(null,vec__24776,(0),null);
var v = cljs.core.nth.call(null,vec__24776,(1),null);
if(cljs.core.truth_(used_QMARK_.call(null,k))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),rerenderer$types$render_result$sanitize_cache_BANG__$_iter__24769.call(null,cljs.core.rest.call(null,s__24770__$2)));
} else {
var G__24781 = cljs.core.rest.call(null,s__24770__$2);
s__24770__$1 = G__24781;
continue;
}
}
} else {
return null;
}
break;
}
});})(paths,used_QMARK_))
,null,null));
});})(paths,used_QMARK_))
;
return iter__19070__auto__.call(null,p1__24752_SHARP_);
})());
});})(paths,used_QMARK_))
);
});

//# sourceMappingURL=render_result.js.map