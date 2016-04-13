// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.lang.forms');
goog.require('cljs.core');

/**
 * @interface
 */
rerenderer.lang.forms.IForm = function(){};

rerenderer.lang.forms.serialize = (function rerenderer$lang$forms$serialize(this$){
if((!((this$ == null))) && (!((this$.rerenderer$lang$forms$IForm$serialize$arity$1 == null)))){
return this$.rerenderer$lang$forms$IForm$serialize$arity$1(this$);
} else {
var x__18953__auto__ = (((this$ == null))?null:this$);
var m__18954__auto__ = (rerenderer.lang.forms.serialize[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,this$);
} else {
var m__18954__auto____$1 = (rerenderer.lang.forms.serialize["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.serialize",this$);
}
}
}
});


/**
 * @interface
 */
rerenderer.lang.forms.IVar = function(){};


/**
 * @interface
 */
rerenderer.lang.forms.IInstruction = function(){};


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rerenderer.lang.forms.IForm}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rerenderer.lang.forms.IVar}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.lang.forms.Ref = (function (id,__meta,__extmap,__hash){
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.lang.forms.Ref.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24803,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24805 = (((k24803 instanceof cljs.core.Keyword))?k24803.fqn:null);
switch (G__24805) {
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24803,else__18915__auto__);

}
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.lang.forms.Ref{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24802){
var self__ = this;
var G__24802__$1 = this;
return (new cljs.core.RecordIter((0),G__24802__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.lang.forms.Ref(self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.lang.forms.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.lang.forms.Ref.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Ref.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),[cljs.core.str(self__.id)].join('')], null);
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.lang.forms.Ref(self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24802){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24806 = cljs.core.keyword_identical_QMARK_;
var expr__24807 = k__18920__auto__;
if(cljs.core.truth_(pred__24806.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__24807))){
return (new rerenderer.lang.forms.Ref(G__24802,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Ref(self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24802),null));
}
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Ref.prototype.rerenderer$lang$forms$IVar$ = true;

rerenderer.lang.forms.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24802){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.lang.forms.Ref(self__.id,G__24802,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.lang.forms.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null);
});

rerenderer.lang.forms.Ref.cljs$lang$type = true;

rerenderer.lang.forms.Ref.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Ref");
});

rerenderer.lang.forms.Ref.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.lang.forms/Ref");
});

rerenderer.lang.forms.__GT_Ref = (function rerenderer$lang$forms$__GT_Ref(id){
return (new rerenderer.lang.forms.Ref(id,null,null,null));
});

rerenderer.lang.forms.map__GT_Ref = (function rerenderer$lang$forms$map__GT_Ref(G__24804){
return (new rerenderer.lang.forms.Ref(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__24804),null,cljs.core.dissoc.call(null,G__24804,new cljs.core.Keyword(null,"id","id",-1388402092)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rerenderer.lang.forms.IForm}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rerenderer.lang.forms.IVar}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.lang.forms.Val = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.lang.forms.Val.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.lang.forms.Val.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24811,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24813 = (((k24811 instanceof cljs.core.Keyword))?k24811.fqn:null);
switch (G__24813) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24811,else__18915__auto__);

}
});

rerenderer.lang.forms.Val.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.lang.forms.Val{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Val.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Val.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24810){
var self__ = this;
var G__24810__$1 = this;
return (new cljs.core.RecordIter((0),G__24810__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Val.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Val.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.lang.forms.Val(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Val.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Val.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.lang.forms.Val.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.lang.forms.Val.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Val.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),self__.value], null);
});

rerenderer.lang.forms.Val.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.lang.forms.Val(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.lang.forms.Val.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24810){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24814 = cljs.core.keyword_identical_QMARK_;
var expr__24815 = k__18920__auto__;
if(cljs.core.truth_(pred__24814.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__24815))){
return (new rerenderer.lang.forms.Val(G__24810,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Val(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24810),null));
}
});

rerenderer.lang.forms.Val.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Val.prototype.rerenderer$lang$forms$IVar$ = true;

rerenderer.lang.forms.Val.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24810){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.lang.forms.Val(self__.value,G__24810,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Val.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.lang.forms.Val.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

rerenderer.lang.forms.Val.cljs$lang$type = true;

rerenderer.lang.forms.Val.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Val");
});

rerenderer.lang.forms.Val.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.lang.forms/Val");
});

rerenderer.lang.forms.__GT_Val = (function rerenderer$lang$forms$__GT_Val(value){
return (new rerenderer.lang.forms.Val(value,null,null,null));
});

rerenderer.lang.forms.map__GT_Val = (function rerenderer$lang$forms$map__GT_Val(G__24812){
return (new rerenderer.lang.forms.Val(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__24812),null,cljs.core.dissoc.call(null,G__24812,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rerenderer.lang.forms.IForm}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rerenderer.lang.forms.IVar}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.lang.forms.Static = (function (id,__meta,__extmap,__hash){
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.lang.forms.Static.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.lang.forms.Static.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24819,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24821 = (((k24819 instanceof cljs.core.Keyword))?k24819.fqn:null);
switch (G__24821) {
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24819,else__18915__auto__);

}
});

rerenderer.lang.forms.Static.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.lang.forms.Static{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Static.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Static.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24818){
var self__ = this;
var G__24818__$1 = this;
return (new cljs.core.RecordIter((0),G__24818__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Static.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Static.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.lang.forms.Static(self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Static.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Static.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.lang.forms.Static.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.lang.forms.Static.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Static.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static","static",1214358571),self__.id], null);
});

rerenderer.lang.forms.Static.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.lang.forms.Static(self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.lang.forms.Static.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24818){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24822 = cljs.core.keyword_identical_QMARK_;
var expr__24823 = k__18920__auto__;
if(cljs.core.truth_(pred__24822.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__24823))){
return (new rerenderer.lang.forms.Static(G__24818,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Static(self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24818),null));
}
});

rerenderer.lang.forms.Static.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Static.prototype.rerenderer$lang$forms$IVar$ = true;

rerenderer.lang.forms.Static.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24818){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.lang.forms.Static(self__.id,G__24818,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Static.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.lang.forms.Static.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null);
});

rerenderer.lang.forms.Static.cljs$lang$type = true;

rerenderer.lang.forms.Static.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Static");
});

rerenderer.lang.forms.Static.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.lang.forms/Static");
});

rerenderer.lang.forms.__GT_Static = (function rerenderer$lang$forms$__GT_Static(id){
return (new rerenderer.lang.forms.Static(id,null,null,null));
});

rerenderer.lang.forms.map__GT_Static = (function rerenderer$lang$forms$map__GT_Static(G__24820){
return (new rerenderer.lang.forms.Static(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__24820),null,cljs.core.dissoc.call(null,G__24820,new cljs.core.Keyword(null,"id","id",-1388402092)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rerenderer.lang.forms.IForm}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rerenderer.lang.forms.IInstruction}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.lang.forms.New = (function (result_ref,cls,args,__meta,__extmap,__hash){
this.result_ref = result_ref;
this.cls = cls;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.lang.forms.New.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.lang.forms.New.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24827,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24829 = (((k24827 instanceof cljs.core.Keyword))?k24827.fqn:null);
switch (G__24829) {
case "result-ref":
return self__.result_ref;

break;
case "cls":
return self__.cls;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24827,else__18915__auto__);

}
});

rerenderer.lang.forms.New.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.lang.forms.New{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cls","cls",-1270350575),self__.cls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

rerenderer.lang.forms.New.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.New.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24826){
var self__ = this;
var G__24826__$1 = this;
return (new cljs.core.RecordIter((0),G__24826__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.New.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.New.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.New.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.New.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.lang.forms.New.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.lang.forms.New.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.New.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.New.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",-2085437848),rerenderer.lang.forms.serialize.call(null,self__.result_ref),rerenderer.lang.forms.serialize.call(null,self__.cls),cljs.core.mapv.call(null,rerenderer.lang.forms.serialize,self__.args)], null);
});

rerenderer.lang.forms.New.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"cls","cls",-1270350575),null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.lang.forms.New.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24826){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24830 = cljs.core.keyword_identical_QMARK_;
var expr__24831 = k__18920__auto__;
if(cljs.core.truth_(pred__24830.call(null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),expr__24831))){
return (new rerenderer.lang.forms.New(G__24826,self__.cls,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24830.call(null,new cljs.core.Keyword(null,"cls","cls",-1270350575),expr__24831))){
return (new rerenderer.lang.forms.New(self__.result_ref,G__24826,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24830.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__24831))){
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,G__24826,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24826),null));
}
}
}
});

rerenderer.lang.forms.New.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cls","cls",-1270350575),self__.cls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

rerenderer.lang.forms.New.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24826){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,self__.args,G__24826,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.New.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.lang.forms.New.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result-ref","result-ref",874652450,null),new cljs.core.Symbol(null,"cls","cls",370180952,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

rerenderer.lang.forms.New.cljs$lang$type = true;

rerenderer.lang.forms.New.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/New");
});

rerenderer.lang.forms.New.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.lang.forms/New");
});

rerenderer.lang.forms.__GT_New = (function rerenderer$lang$forms$__GT_New(result_ref,cls,args){
return (new rerenderer.lang.forms.New(result_ref,cls,args,null,null,null));
});

rerenderer.lang.forms.map__GT_New = (function rerenderer$lang$forms$map__GT_New(G__24828){
return (new rerenderer.lang.forms.New(new cljs.core.Keyword(null,"result-ref","result-ref",-765879077).cljs$core$IFn$_invoke$arity$1(G__24828),new cljs.core.Keyword(null,"cls","cls",-1270350575).cljs$core$IFn$_invoke$arity$1(G__24828),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__24828),null,cljs.core.dissoc.call(null,G__24828,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rerenderer.lang.forms.IForm}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rerenderer.lang.forms.IInstruction}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.lang.forms.Set = (function (ref,attr,value,__meta,__extmap,__hash){
this.ref = ref;
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.lang.forms.Set.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.lang.forms.Set.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24835,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24837 = (((k24835 instanceof cljs.core.Keyword))?k24835.fqn:null);
switch (G__24837) {
case "ref":
return self__.ref;

break;
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24835,else__18915__auto__);

}
});

rerenderer.lang.forms.Set.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.lang.forms.Set{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Set.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Set.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24834){
var self__ = this;
var G__24834__$1 = this;
return (new cljs.core.RecordIter((0),G__24834__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Set.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Set.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Set.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Set.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.lang.forms.Set.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.lang.forms.Set.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.Set.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Set.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),rerenderer.lang.forms.serialize.call(null,self__.ref),[cljs.core.str(self__.attr)].join(''),rerenderer.lang.forms.serialize.call(null,self__.value)], null);
});

rerenderer.lang.forms.Set.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.lang.forms.Set.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24834){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24838 = cljs.core.keyword_identical_QMARK_;
var expr__24839 = k__18920__auto__;
if(cljs.core.truth_(pred__24838.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__24839))){
return (new rerenderer.lang.forms.Set(G__24834,self__.attr,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24838.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__24839))){
return (new rerenderer.lang.forms.Set(self__.ref,G__24834,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24838.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__24839))){
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,G__24834,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24834),null));
}
}
}
});

rerenderer.lang.forms.Set.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Set.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24834){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,self__.value,G__24834,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Set.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.lang.forms.Set.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

rerenderer.lang.forms.Set.cljs$lang$type = true;

rerenderer.lang.forms.Set.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Set");
});

rerenderer.lang.forms.Set.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.lang.forms/Set");
});

rerenderer.lang.forms.__GT_Set = (function rerenderer$lang$forms$__GT_Set(ref,attr,value){
return (new rerenderer.lang.forms.Set(ref,attr,value,null,null,null));
});

rerenderer.lang.forms.map__GT_Set = (function rerenderer$lang$forms$map__GT_Set(G__24836){
return (new rerenderer.lang.forms.Set(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__24836),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__24836),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__24836),null,cljs.core.dissoc.call(null,G__24836,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rerenderer.lang.forms.IForm}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rerenderer.lang.forms.IInstruction}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.lang.forms.Get = (function (result_ref,ref,attr,__meta,__extmap,__hash){
this.result_ref = result_ref;
this.ref = ref;
this.attr = attr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.lang.forms.Get.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.lang.forms.Get.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24843,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24845 = (((k24843 instanceof cljs.core.Keyword))?k24843.fqn:null);
switch (G__24845) {
case "result-ref":
return self__.result_ref;

break;
case "ref":
return self__.ref;

break;
case "attr":
return self__.attr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24843,else__18915__auto__);

}
});

rerenderer.lang.forms.Get.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.lang.forms.Get{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Get.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Get.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24842){
var self__ = this;
var G__24842__$1 = this;
return (new cljs.core.RecordIter((0),G__24842__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Get.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Get.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,self__.attr,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Get.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Get.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.lang.forms.Get.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.lang.forms.Get.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.Get.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Get.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1683182755),rerenderer.lang.forms.serialize.call(null,self__.result_ref),rerenderer.lang.forms.serialize.call(null,self__.ref),[cljs.core.str(self__.attr)].join('')], null);
});

rerenderer.lang.forms.Get.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,self__.attr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.lang.forms.Get.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24842){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24846 = cljs.core.keyword_identical_QMARK_;
var expr__24847 = k__18920__auto__;
if(cljs.core.truth_(pred__24846.call(null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),expr__24847))){
return (new rerenderer.lang.forms.Get(G__24842,self__.ref,self__.attr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24846.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__24847))){
return (new rerenderer.lang.forms.Get(self__.result_ref,G__24842,self__.attr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24846.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__24847))){
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,G__24842,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,self__.attr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24842),null));
}
}
}
});

rerenderer.lang.forms.Get.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Get.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24842){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,self__.attr,G__24842,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Get.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.lang.forms.Get.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result-ref","result-ref",874652450,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null)], null);
});

rerenderer.lang.forms.Get.cljs$lang$type = true;

rerenderer.lang.forms.Get.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Get");
});

rerenderer.lang.forms.Get.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.lang.forms/Get");
});

rerenderer.lang.forms.__GT_Get = (function rerenderer$lang$forms$__GT_Get(result_ref,ref,attr){
return (new rerenderer.lang.forms.Get(result_ref,ref,attr,null,null,null));
});

rerenderer.lang.forms.map__GT_Get = (function rerenderer$lang$forms$map__GT_Get(G__24844){
return (new rerenderer.lang.forms.Get(new cljs.core.Keyword(null,"result-ref","result-ref",-765879077).cljs$core$IFn$_invoke$arity$1(G__24844),new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__24844),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__24844),null,cljs.core.dissoc.call(null,G__24844,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"attr","attr",-604132353)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rerenderer.lang.forms.IForm}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rerenderer.lang.forms.IInstruction}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.lang.forms.Call = (function (result_ref,ref,method,args,__meta,__extmap,__hash){
this.result_ref = result_ref;
this.ref = ref;
this.method = method;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.lang.forms.Call.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.lang.forms.Call.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24851,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24853 = (((k24851 instanceof cljs.core.Keyword))?k24851.fqn:null);
switch (G__24853) {
case "result-ref":
return self__.result_ref;

break;
case "ref":
return self__.ref;

break;
case "method":
return self__.method;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24851,else__18915__auto__);

}
});

rerenderer.lang.forms.Call.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.lang.forms.Call{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"method","method",55703592),self__.method],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Call.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Call.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24850){
var self__ = this;
var G__24850__$1 = this;
return (new cljs.core.RecordIter((0),G__24850__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Call.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Call.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Call.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Call.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.lang.forms.Call.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.lang.forms.Call.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.Call.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Call.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call","call",-519999866),rerenderer.lang.forms.serialize.call(null,self__.result_ref),rerenderer.lang.forms.serialize.call(null,self__.ref),[cljs.core.str(self__.method)].join(''),cljs.core.mapv.call(null,rerenderer.lang.forms.serialize,self__.args)], null);
});

rerenderer.lang.forms.Call.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ref","ref",1289896967),null,new cljs.core.Keyword(null,"method","method",55703592),null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.lang.forms.Call.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24850){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24854 = cljs.core.keyword_identical_QMARK_;
var expr__24855 = k__18920__auto__;
if(cljs.core.truth_(pred__24854.call(null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),expr__24855))){
return (new rerenderer.lang.forms.Call(G__24850,self__.ref,self__.method,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24854.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__24855))){
return (new rerenderer.lang.forms.Call(self__.result_ref,G__24850,self__.method,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24854.call(null,new cljs.core.Keyword(null,"method","method",55703592),expr__24855))){
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,G__24850,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24854.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__24855))){
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,G__24850,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24850),null));
}
}
}
}
});

rerenderer.lang.forms.Call.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"method","method",55703592),self__.method],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Call.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24850){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,self__.args,G__24850,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Call.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.lang.forms.Call.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result-ref","result-ref",874652450,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"method","method",1696235119,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

rerenderer.lang.forms.Call.cljs$lang$type = true;

rerenderer.lang.forms.Call.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Call");
});

rerenderer.lang.forms.Call.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.lang.forms/Call");
});

rerenderer.lang.forms.__GT_Call = (function rerenderer$lang$forms$__GT_Call(result_ref,ref,method,args){
return (new rerenderer.lang.forms.Call(result_ref,ref,method,args,null,null,null));
});

rerenderer.lang.forms.map__GT_Call = (function rerenderer$lang$forms$map__GT_Call(G__24852){
return (new rerenderer.lang.forms.Call(new cljs.core.Keyword(null,"result-ref","result-ref",-765879077).cljs$core$IFn$_invoke$arity$1(G__24852),new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__24852),new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(G__24852),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__24852),null,cljs.core.dissoc.call(null,G__24852,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rerenderer.lang.forms.IForm}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rerenderer.lang.forms.IInstruction}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.lang.forms.Free = (function (ref,__meta,__extmap,__hash){
this.ref = ref;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.lang.forms.Free.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18912__auto__,k__18913__auto__){
var self__ = this;
var this__18912__auto____$1 = this;
return cljs.core._lookup.call(null,this__18912__auto____$1,k__18913__auto__,null);
});

rerenderer.lang.forms.Free.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18914__auto__,k24859,else__18915__auto__){
var self__ = this;
var this__18914__auto____$1 = this;
var G__24861 = (((k24859 instanceof cljs.core.Keyword))?k24859.fqn:null);
switch (G__24861) {
case "ref":
return self__.ref;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24859,else__18915__auto__);

}
});

rerenderer.lang.forms.Free.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18926__auto__,writer__18927__auto__,opts__18928__auto__){
var self__ = this;
var this__18926__auto____$1 = this;
var pr_pair__18929__auto__ = ((function (this__18926__auto____$1){
return (function (keyval__18930__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,cljs.core.pr_writer,""," ","",opts__18928__auto__,keyval__18930__auto__);
});})(this__18926__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18927__auto__,pr_pair__18929__auto__,"#rerenderer.lang.forms.Free{",", ","}",opts__18928__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Free.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Free.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24858){
var self__ = this;
var G__24858__$1 = this;
return (new cljs.core.RecordIter((0),G__24858__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Free.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18910__auto__){
var self__ = this;
var this__18910__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Free.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18906__auto__){
var self__ = this;
var this__18906__auto____$1 = this;
return (new rerenderer.lang.forms.Free(self__.ref,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Free.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18916__auto__){
var self__ = this;
var this__18916__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Free.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18907__auto__){
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

rerenderer.lang.forms.Free.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18908__auto__,other__18909__auto__){
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

rerenderer.lang.forms.Free.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.Free.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Free.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"free","free",801364328),rerenderer.lang.forms.serialize.call(null,self__.ref)], null);
});

rerenderer.lang.forms.Free.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18921__auto__,k__18922__auto__){
var self__ = this;
var this__18921__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),null], null), null),k__18922__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18921__auto____$1),self__.__meta),k__18922__auto__);
} else {
return (new rerenderer.lang.forms.Free(self__.ref,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18922__auto__)),null));
}
});

rerenderer.lang.forms.Free.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18919__auto__,k__18920__auto__,G__24858){
var self__ = this;
var this__18919__auto____$1 = this;
var pred__24862 = cljs.core.keyword_identical_QMARK_;
var expr__24863 = k__18920__auto__;
if(cljs.core.truth_(pred__24862.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__24863))){
return (new rerenderer.lang.forms.Free(G__24858,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Free(self__.ref,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18920__auto__,G__24858),null));
}
});

rerenderer.lang.forms.Free.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18924__auto__){
var self__ = this;
var this__18924__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Free.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18911__auto__,G__24858){
var self__ = this;
var this__18911__auto____$1 = this;
return (new rerenderer.lang.forms.Free(self__.ref,G__24858,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Free.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18917__auto__,entry__18918__auto__){
var self__ = this;
var this__18917__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18918__auto__)){
return cljs.core._assoc.call(null,this__18917__auto____$1,cljs.core._nth.call(null,entry__18918__auto__,(0)),cljs.core._nth.call(null,entry__18918__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18917__auto____$1,entry__18918__auto__);
}
});

rerenderer.lang.forms.Free.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null)], null);
});

rerenderer.lang.forms.Free.cljs$lang$type = true;

rerenderer.lang.forms.Free.cljs$lang$ctorPrSeq = (function (this__18946__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Free");
});

rerenderer.lang.forms.Free.cljs$lang$ctorPrWriter = (function (this__18946__auto__,writer__18947__auto__){
return cljs.core._write.call(null,writer__18947__auto__,"rerenderer.lang.forms/Free");
});

rerenderer.lang.forms.__GT_Free = (function rerenderer$lang$forms$__GT_Free(ref){
return (new rerenderer.lang.forms.Free(ref,null,null,null));
});

rerenderer.lang.forms.map__GT_Free = (function rerenderer$lang$forms$map__GT_Free(G__24860){
return (new rerenderer.lang.forms.Free(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__24860),null,cljs.core.dissoc.call(null,G__24860,new cljs.core.Keyword(null,"ref","ref",1289896967)),null));
});


//# sourceMappingURL=forms.js.map