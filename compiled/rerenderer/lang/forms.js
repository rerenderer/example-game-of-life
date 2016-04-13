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
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.lang.forms.serialize[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,this$);
} else {
var m__6812__auto____$1 = (rerenderer.lang.forms.serialize["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,this$);
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
rerenderer.lang.forms.Ref.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k19988,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__19990 = (((k19988 instanceof cljs.core.Keyword))?k19988.fqn:null);
switch (G__19990) {
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19988,else__6773__auto__);

}
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.lang.forms.Ref{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19987){
var self__ = this;
var G__19987__$1 = this;
return (new cljs.core.RecordIter((0),G__19987__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.lang.forms.Ref(self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.lang.forms.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.lang.forms.Ref.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Ref.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),[cljs.core.str(self__.id)].join('')], null);
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.lang.forms.Ref(self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.lang.forms.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__19987){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__19991 = cljs.core.keyword_identical_QMARK_;
var expr__19992 = k__6778__auto__;
if(cljs.core.truth_(pred__19991.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__19992))){
return (new rerenderer.lang.forms.Ref(G__19987,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Ref(self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__19987),null));
}
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Ref.prototype.rerenderer$lang$forms$IVar$ = true;

rerenderer.lang.forms.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__19987){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.lang.forms.Ref(self__.id,G__19987,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.lang.forms.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null);
});

rerenderer.lang.forms.Ref.cljs$lang$type = true;

rerenderer.lang.forms.Ref.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Ref");
});

rerenderer.lang.forms.Ref.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.lang.forms/Ref");
});

rerenderer.lang.forms.__GT_Ref = (function rerenderer$lang$forms$__GT_Ref(id){
return (new rerenderer.lang.forms.Ref(id,null,null,null));
});

rerenderer.lang.forms.map__GT_Ref = (function rerenderer$lang$forms$map__GT_Ref(G__19989){
return (new rerenderer.lang.forms.Ref(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__19989),null,cljs.core.dissoc.call(null,G__19989,new cljs.core.Keyword(null,"id","id",-1388402092)),null));
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
rerenderer.lang.forms.Val.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.lang.forms.Val.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k19996,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__19998 = (((k19996 instanceof cljs.core.Keyword))?k19996.fqn:null);
switch (G__19998) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19996,else__6773__auto__);

}
});

rerenderer.lang.forms.Val.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.lang.forms.Val{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Val.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Val.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19995){
var self__ = this;
var G__19995__$1 = this;
return (new cljs.core.RecordIter((0),G__19995__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Val.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Val.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.lang.forms.Val(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Val.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Val.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.lang.forms.Val.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.lang.forms.Val.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Val.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),self__.value], null);
});

rerenderer.lang.forms.Val.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.lang.forms.Val(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.lang.forms.Val.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__19995){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__19999 = cljs.core.keyword_identical_QMARK_;
var expr__20000 = k__6778__auto__;
if(cljs.core.truth_(pred__19999.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__20000))){
return (new rerenderer.lang.forms.Val(G__19995,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Val(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__19995),null));
}
});

rerenderer.lang.forms.Val.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Val.prototype.rerenderer$lang$forms$IVar$ = true;

rerenderer.lang.forms.Val.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__19995){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.lang.forms.Val(self__.value,G__19995,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Val.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.lang.forms.Val.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

rerenderer.lang.forms.Val.cljs$lang$type = true;

rerenderer.lang.forms.Val.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Val");
});

rerenderer.lang.forms.Val.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.lang.forms/Val");
});

rerenderer.lang.forms.__GT_Val = (function rerenderer$lang$forms$__GT_Val(value){
return (new rerenderer.lang.forms.Val(value,null,null,null));
});

rerenderer.lang.forms.map__GT_Val = (function rerenderer$lang$forms$map__GT_Val(G__19997){
return (new rerenderer.lang.forms.Val(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__19997),null,cljs.core.dissoc.call(null,G__19997,new cljs.core.Keyword(null,"value","value",305978217)),null));
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
rerenderer.lang.forms.Static.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.lang.forms.Static.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k20004,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__20006 = (((k20004 instanceof cljs.core.Keyword))?k20004.fqn:null);
switch (G__20006) {
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20004,else__6773__auto__);

}
});

rerenderer.lang.forms.Static.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.lang.forms.Static{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Static.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Static.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20003){
var self__ = this;
var G__20003__$1 = this;
return (new cljs.core.RecordIter((0),G__20003__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Static.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Static.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.lang.forms.Static(self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Static.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Static.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.lang.forms.Static.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.lang.forms.Static.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Static.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static","static",1214358571),self__.id], null);
});

rerenderer.lang.forms.Static.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.lang.forms.Static(self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.lang.forms.Static.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__20003){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__20007 = cljs.core.keyword_identical_QMARK_;
var expr__20008 = k__6778__auto__;
if(cljs.core.truth_(pred__20007.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__20008))){
return (new rerenderer.lang.forms.Static(G__20003,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Static(self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__20003),null));
}
});

rerenderer.lang.forms.Static.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Static.prototype.rerenderer$lang$forms$IVar$ = true;

rerenderer.lang.forms.Static.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__20003){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.lang.forms.Static(self__.id,G__20003,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Static.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.lang.forms.Static.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null);
});

rerenderer.lang.forms.Static.cljs$lang$type = true;

rerenderer.lang.forms.Static.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Static");
});

rerenderer.lang.forms.Static.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.lang.forms/Static");
});

rerenderer.lang.forms.__GT_Static = (function rerenderer$lang$forms$__GT_Static(id){
return (new rerenderer.lang.forms.Static(id,null,null,null));
});

rerenderer.lang.forms.map__GT_Static = (function rerenderer$lang$forms$map__GT_Static(G__20005){
return (new rerenderer.lang.forms.Static(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__20005),null,cljs.core.dissoc.call(null,G__20005,new cljs.core.Keyword(null,"id","id",-1388402092)),null));
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
rerenderer.lang.forms.New.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.lang.forms.New.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k20012,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__20014 = (((k20012 instanceof cljs.core.Keyword))?k20012.fqn:null);
switch (G__20014) {
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
return cljs.core.get.call(null,self__.__extmap,k20012,else__6773__auto__);

}
});

rerenderer.lang.forms.New.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.lang.forms.New{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cls","cls",-1270350575),self__.cls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

rerenderer.lang.forms.New.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.New.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20011){
var self__ = this;
var G__20011__$1 = this;
return (new cljs.core.RecordIter((0),G__20011__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.New.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.New.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.New.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.New.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.lang.forms.New.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.lang.forms.New.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.New.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.New.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",-2085437848),rerenderer.lang.forms.serialize.call(null,self__.result_ref),rerenderer.lang.forms.serialize.call(null,self__.cls),cljs.core.mapv.call(null,rerenderer.lang.forms.serialize,self__.args)], null);
});

rerenderer.lang.forms.New.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"cls","cls",-1270350575),null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.lang.forms.New.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__20011){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__20015 = cljs.core.keyword_identical_QMARK_;
var expr__20016 = k__6778__auto__;
if(cljs.core.truth_(pred__20015.call(null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),expr__20016))){
return (new rerenderer.lang.forms.New(G__20011,self__.cls,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20015.call(null,new cljs.core.Keyword(null,"cls","cls",-1270350575),expr__20016))){
return (new rerenderer.lang.forms.New(self__.result_ref,G__20011,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20015.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__20016))){
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,G__20011,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__20011),null));
}
}
}
});

rerenderer.lang.forms.New.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cls","cls",-1270350575),self__.cls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

rerenderer.lang.forms.New.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__20011){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.lang.forms.New(self__.result_ref,self__.cls,self__.args,G__20011,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.New.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.lang.forms.New.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result-ref","result-ref",874652450,null),new cljs.core.Symbol(null,"cls","cls",370180952,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

rerenderer.lang.forms.New.cljs$lang$type = true;

rerenderer.lang.forms.New.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/New");
});

rerenderer.lang.forms.New.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.lang.forms/New");
});

rerenderer.lang.forms.__GT_New = (function rerenderer$lang$forms$__GT_New(result_ref,cls,args){
return (new rerenderer.lang.forms.New(result_ref,cls,args,null,null,null));
});

rerenderer.lang.forms.map__GT_New = (function rerenderer$lang$forms$map__GT_New(G__20013){
return (new rerenderer.lang.forms.New(new cljs.core.Keyword(null,"result-ref","result-ref",-765879077).cljs$core$IFn$_invoke$arity$1(G__20013),new cljs.core.Keyword(null,"cls","cls",-1270350575).cljs$core$IFn$_invoke$arity$1(G__20013),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__20013),null,cljs.core.dissoc.call(null,G__20013,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"cls","cls",-1270350575),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
rerenderer.lang.forms.Set.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.lang.forms.Set.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k20020,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__20022 = (((k20020 instanceof cljs.core.Keyword))?k20020.fqn:null);
switch (G__20022) {
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
return cljs.core.get.call(null,self__.__extmap,k20020,else__6773__auto__);

}
});

rerenderer.lang.forms.Set.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.lang.forms.Set{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Set.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Set.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20019){
var self__ = this;
var G__20019__$1 = this;
return (new cljs.core.RecordIter((0),G__20019__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Set.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Set.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Set.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Set.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.lang.forms.Set.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.lang.forms.Set.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.Set.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Set.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),rerenderer.lang.forms.serialize.call(null,self__.ref),[cljs.core.str(self__.attr)].join(''),rerenderer.lang.forms.serialize.call(null,self__.value)], null);
});

rerenderer.lang.forms.Set.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.lang.forms.Set.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__20019){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__20023 = cljs.core.keyword_identical_QMARK_;
var expr__20024 = k__6778__auto__;
if(cljs.core.truth_(pred__20023.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__20024))){
return (new rerenderer.lang.forms.Set(G__20019,self__.attr,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20023.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__20024))){
return (new rerenderer.lang.forms.Set(self__.ref,G__20019,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20023.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__20024))){
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,G__20019,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__20019),null));
}
}
}
});

rerenderer.lang.forms.Set.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Set.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__20019){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.lang.forms.Set(self__.ref,self__.attr,self__.value,G__20019,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Set.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.lang.forms.Set.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

rerenderer.lang.forms.Set.cljs$lang$type = true;

rerenderer.lang.forms.Set.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Set");
});

rerenderer.lang.forms.Set.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.lang.forms/Set");
});

rerenderer.lang.forms.__GT_Set = (function rerenderer$lang$forms$__GT_Set(ref,attr,value){
return (new rerenderer.lang.forms.Set(ref,attr,value,null,null,null));
});

rerenderer.lang.forms.map__GT_Set = (function rerenderer$lang$forms$map__GT_Set(G__20021){
return (new rerenderer.lang.forms.Set(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__20021),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__20021),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__20021),null,cljs.core.dissoc.call(null,G__20021,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)),null));
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
rerenderer.lang.forms.Get.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.lang.forms.Get.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k20028,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__20030 = (((k20028 instanceof cljs.core.Keyword))?k20028.fqn:null);
switch (G__20030) {
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
return cljs.core.get.call(null,self__.__extmap,k20028,else__6773__auto__);

}
});

rerenderer.lang.forms.Get.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.lang.forms.Get{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Get.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Get.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20027){
var self__ = this;
var G__20027__$1 = this;
return (new cljs.core.RecordIter((0),G__20027__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Get.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Get.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,self__.attr,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Get.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Get.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.lang.forms.Get.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.lang.forms.Get.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.Get.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Get.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1683182755),rerenderer.lang.forms.serialize.call(null,self__.result_ref),rerenderer.lang.forms.serialize.call(null,self__.ref),[cljs.core.str(self__.attr)].join('')], null);
});

rerenderer.lang.forms.Get.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,self__.attr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.lang.forms.Get.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__20027){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__20031 = cljs.core.keyword_identical_QMARK_;
var expr__20032 = k__6778__auto__;
if(cljs.core.truth_(pred__20031.call(null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),expr__20032))){
return (new rerenderer.lang.forms.Get(G__20027,self__.ref,self__.attr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20031.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__20032))){
return (new rerenderer.lang.forms.Get(self__.result_ref,G__20027,self__.attr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20031.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__20032))){
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,G__20027,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,self__.attr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__20027),null));
}
}
}
});

rerenderer.lang.forms.Get.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Get.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__20027){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.lang.forms.Get(self__.result_ref,self__.ref,self__.attr,G__20027,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Get.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.lang.forms.Get.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result-ref","result-ref",874652450,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null)], null);
});

rerenderer.lang.forms.Get.cljs$lang$type = true;

rerenderer.lang.forms.Get.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Get");
});

rerenderer.lang.forms.Get.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.lang.forms/Get");
});

rerenderer.lang.forms.__GT_Get = (function rerenderer$lang$forms$__GT_Get(result_ref,ref,attr){
return (new rerenderer.lang.forms.Get(result_ref,ref,attr,null,null,null));
});

rerenderer.lang.forms.map__GT_Get = (function rerenderer$lang$forms$map__GT_Get(G__20029){
return (new rerenderer.lang.forms.Get(new cljs.core.Keyword(null,"result-ref","result-ref",-765879077).cljs$core$IFn$_invoke$arity$1(G__20029),new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__20029),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__20029),null,cljs.core.dissoc.call(null,G__20029,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"attr","attr",-604132353)),null));
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
rerenderer.lang.forms.Call.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.lang.forms.Call.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k20036,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__20038 = (((k20036 instanceof cljs.core.Keyword))?k20036.fqn:null);
switch (G__20038) {
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
return cljs.core.get.call(null,self__.__extmap,k20036,else__6773__auto__);

}
});

rerenderer.lang.forms.Call.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.lang.forms.Call{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"method","method",55703592),self__.method],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Call.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Call.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20035){
var self__ = this;
var G__20035__$1 = this;
return (new cljs.core.RecordIter((0),G__20035__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Call.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Call.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Call.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Call.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.lang.forms.Call.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.lang.forms.Call.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.Call.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Call.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call","call",-519999866),rerenderer.lang.forms.serialize.call(null,self__.result_ref),rerenderer.lang.forms.serialize.call(null,self__.ref),[cljs.core.str(self__.method)].join(''),cljs.core.mapv.call(null,rerenderer.lang.forms.serialize,self__.args)], null);
});

rerenderer.lang.forms.Call.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ref","ref",1289896967),null,new cljs.core.Keyword(null,"method","method",55703592),null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.lang.forms.Call.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__20035){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__20039 = cljs.core.keyword_identical_QMARK_;
var expr__20040 = k__6778__auto__;
if(cljs.core.truth_(pred__20039.call(null,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),expr__20040))){
return (new rerenderer.lang.forms.Call(G__20035,self__.ref,self__.method,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20039.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__20040))){
return (new rerenderer.lang.forms.Call(self__.result_ref,G__20035,self__.method,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20039.call(null,new cljs.core.Keyword(null,"method","method",55703592),expr__20040))){
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,G__20035,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20039.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__20040))){
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,G__20035,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__20035),null));
}
}
}
}
});

rerenderer.lang.forms.Call.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),self__.result_ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"method","method",55703592),self__.method],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Call.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__20035){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.lang.forms.Call(self__.result_ref,self__.ref,self__.method,self__.args,G__20035,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Call.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.lang.forms.Call.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result-ref","result-ref",874652450,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"method","method",1696235119,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

rerenderer.lang.forms.Call.cljs$lang$type = true;

rerenderer.lang.forms.Call.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Call");
});

rerenderer.lang.forms.Call.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.lang.forms/Call");
});

rerenderer.lang.forms.__GT_Call = (function rerenderer$lang$forms$__GT_Call(result_ref,ref,method,args){
return (new rerenderer.lang.forms.Call(result_ref,ref,method,args,null,null,null));
});

rerenderer.lang.forms.map__GT_Call = (function rerenderer$lang$forms$map__GT_Call(G__20037){
return (new rerenderer.lang.forms.Call(new cljs.core.Keyword(null,"result-ref","result-ref",-765879077).cljs$core$IFn$_invoke$arity$1(G__20037),new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__20037),new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(G__20037),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__20037),null,cljs.core.dissoc.call(null,G__20037,new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
rerenderer.lang.forms.Free.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.lang.forms.Free.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k20044,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__20046 = (((k20044 instanceof cljs.core.Keyword))?k20044.fqn:null);
switch (G__20046) {
case "ref":
return self__.ref;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20044,else__6773__auto__);

}
});

rerenderer.lang.forms.Free.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.lang.forms.Free{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Free.prototype.cljs$core$IIterable$ = true;

rerenderer.lang.forms.Free.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20043){
var self__ = this;
var G__20043__$1 = this;
return (new cljs.core.RecordIter((0),G__20043__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

rerenderer.lang.forms.Free.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.lang.forms.Free.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.lang.forms.Free(self__.ref,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Free.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rerenderer.lang.forms.Free.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
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

rerenderer.lang.forms.Free.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
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

rerenderer.lang.forms.Free.prototype.rerenderer$lang$forms$IInstruction$ = true;

rerenderer.lang.forms.Free.prototype.rerenderer$lang$forms$IForm$ = true;

rerenderer.lang.forms.Free.prototype.rerenderer$lang$forms$IForm$serialize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"free","free",801364328),rerenderer.lang.forms.serialize.call(null,self__.ref)], null);
});

rerenderer.lang.forms.Free.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.lang.forms.Free(self__.ref,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.lang.forms.Free.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__20043){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__20047 = cljs.core.keyword_identical_QMARK_;
var expr__20048 = k__6778__auto__;
if(cljs.core.truth_(pred__20047.call(null,new cljs.core.Keyword(null,"ref","ref",1289896967),expr__20048))){
return (new rerenderer.lang.forms.Free(G__20043,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.lang.forms.Free(self__.ref,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__20043),null));
}
});

rerenderer.lang.forms.Free.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref","ref",1289896967),self__.ref],null))], null),self__.__extmap));
});

rerenderer.lang.forms.Free.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__20043){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.lang.forms.Free(self__.ref,G__20043,self__.__extmap,self__.__hash));
});

rerenderer.lang.forms.Free.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.lang.forms.Free.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null)], null);
});

rerenderer.lang.forms.Free.cljs$lang$type = true;

rerenderer.lang.forms.Free.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rerenderer.lang.forms/Free");
});

rerenderer.lang.forms.Free.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"rerenderer.lang.forms/Free");
});

rerenderer.lang.forms.__GT_Free = (function rerenderer$lang$forms$__GT_Free(ref){
return (new rerenderer.lang.forms.Free(ref,null,null,null));
});

rerenderer.lang.forms.map__GT_Free = (function rerenderer$lang$forms$map__GT_Free(G__20045){
return (new rerenderer.lang.forms.Free(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(G__20045),null,cljs.core.dissoc.call(null,G__20045,new cljs.core.Keyword(null,"ref","ref",1289896967)),null));
});

