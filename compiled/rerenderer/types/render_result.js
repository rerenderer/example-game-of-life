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
rerenderer.types.render_result.RenderResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k19930,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__19932 = (((k19930 instanceof cljs.core.Keyword))?k19930.fqn:null);
switch (G__19932) {
case "script":
return self__.script;

break;
case "canvas":
return self__.canvas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19930,else__6773__auto__);

}
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.types.render-result.RenderResult{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script","script",-1304443801),self__.script],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null))], null),self__.__extmap));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IIterable$ = true;

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19929){
var self__ = this;
var G__19929__$1 = this;
return (new cljs.core.RecordIter((0),G__19929__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.types.render_result.RenderResult(self__.script,self__.canvas,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"script","script",-1304443801),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.types.render_result.RenderResult(self__.script,self__.canvas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__19929){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__19933 = cljs.core.keyword_identical_QMARK_;
var expr__19934 = k__6778__auto__;
if(cljs.core.truth_(pred__19933.call(null,new cljs.core.Keyword(null,"script","script",-1304443801),expr__19934))){
return (new rerenderer.types.render_result.RenderResult(G__19929,self__.canvas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19933.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),expr__19934))){
return (new rerenderer.types.render_result.RenderResult(self__.script,G__19929,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.types.render_result.RenderResult(self__.script,self__.canvas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__19929),null));
}
}
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script","script",-1304443801),self__.script],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null))], null),self__.__extmap));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__19929){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.types.render_result.RenderResult(self__.script,self__.canvas,G__19929,self__.__extmap,self__.__hash));
});

rerenderer.types.render_result.RenderResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.types.render_result.RenderResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"canvas","canvas",-158285962,null)], null);
});

rerenderer.types.render_result.RenderResult.cljs$lang$type = true;

rerenderer.types.render_result.RenderResult.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.types.render-result/RenderResult");
});

rerenderer.types.render_result.RenderResult.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.types.render-result/RenderResult");
});

rerenderer.types.render_result.__GT_RenderResult = (function rerenderer$types$render_result$__GT_RenderResult(script,canvas){
return (new rerenderer.types.render_result.RenderResult(script,canvas,null,null,null));
});

rerenderer.types.render_result.map__GT_RenderResult = (function rerenderer$types$render_result$map__GT_RenderResult(G__19931){
return (new rerenderer.types.render_result.RenderResult(new cljs.core.Keyword(null,"script","script",-1304443801).cljs$core$IFn$_invoke$arity$1(G__19931),new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(G__19931),null,cljs.core.dissoc.call(null,G__19931,new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)),null));
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
var paths = (function (){var G__19951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var vec__19952 = G__19951;
var node__$1 = cljs.core.nth.call(null,vec__19952,(0),null);
var rest_nodes = cljs.core.nthnext.call(null,vec__19952,(1));
var result = cljs.core.PersistentVector.EMPTY;
var G__19951__$1 = G__19951;
var result__$1 = result;
while(true){
var vec__19953 = G__19951__$1;
var node__$2 = cljs.core.nth.call(null,vec__19953,(0),null);
var rest_nodes__$1 = cljs.core.nthnext.call(null,vec__19953,(1));
var result__$2 = result__$1;
if(cljs.core.truth_(node__$2)){
var G__19962 = cljs.core.concat.call(null,new cljs.core.Keyword(null,"childs","childs",-1293201887).cljs$core$IFn$_invoke$arity$1(node__$2),rest_nodes__$1);
var G__19963 = cljs.core.conj.call(null,result__$2,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node__$2));
G__19951__$1 = G__19962;
result__$1 = G__19963;
continue;
} else {
return null;
}
break;
}
})();
var used_QMARK_ = cljs.core.set.call(null,paths);
return cljs.core.swap_BANG_.call(null,rerenderer.types.render_result.cache,((function (paths,used_QMARK_){
return (function (p1__19937_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6928__auto__ = ((function (paths,used_QMARK_){
return (function rerenderer$types$render_result$sanitize_cache_BANG__$_iter__19954(s__19955){
return (new cljs.core.LazySeq(null,((function (paths,used_QMARK_){
return (function (){
var s__19955__$1 = s__19955;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19955__$1);
if(temp__4657__auto__){
var s__19955__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19955__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__19955__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__19957 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__19956 = (0);
while(true){
if((i__19956 < size__6927__auto__)){
var vec__19960 = cljs.core._nth.call(null,c__6926__auto__,i__19956);
var k = cljs.core.nth.call(null,vec__19960,(0),null);
var v = cljs.core.nth.call(null,vec__19960,(1),null);
if(cljs.core.truth_(used_QMARK_.call(null,k))){
cljs.core.chunk_append.call(null,b__19957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19964 = (i__19956 + (1));
i__19956 = G__19964;
continue;
} else {
var G__19965 = (i__19956 + (1));
i__19956 = G__19965;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19957),rerenderer$types$render_result$sanitize_cache_BANG__$_iter__19954.call(null,cljs.core.chunk_rest.call(null,s__19955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19957),null);
}
} else {
var vec__19961 = cljs.core.first.call(null,s__19955__$2);
var k = cljs.core.nth.call(null,vec__19961,(0),null);
var v = cljs.core.nth.call(null,vec__19961,(1),null);
if(cljs.core.truth_(used_QMARK_.call(null,k))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),rerenderer$types$render_result$sanitize_cache_BANG__$_iter__19954.call(null,cljs.core.rest.call(null,s__19955__$2)));
} else {
var G__19966 = cljs.core.rest.call(null,s__19955__$2);
s__19955__$1 = G__19966;
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
return iter__6928__auto__.call(null,p1__19937_SHARP_);
})());
});})(paths,used_QMARK_))
);
});
