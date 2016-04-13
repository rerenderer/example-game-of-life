// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.lang.utils');
goog.require('cljs.core');
goog.require('rerenderer.lang.forms');
/**
 * Returns all refs from script.
 */
rerenderer.lang.utils.get_all_refs = (function rerenderer$lang$utils$get_all_refs(script){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24939_SHARP_){
return (p1__24939_SHARP_ instanceof rerenderer.lang.forms.Ref);
}),cljs.core.flatten.call(null,(function (){var iter__19070__auto__ = (function rerenderer$lang$utils$get_all_refs_$_iter__24946(s__24947){
return (new cljs.core.LazySeq(null,(function (){
var s__24947__$1 = s__24947;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24947__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var instruction = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19066__auto__ = ((function (s__24947__$1,instruction,xs__5205__auto__,temp__4657__auto__){
return (function rerenderer$lang$utils$get_all_refs_$_iter__24946_$_iter__24948(s__24949){
return (new cljs.core.LazySeq(null,((function (s__24947__$1,instruction,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__24949__$1 = s__24949;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__24949__$1);
if(temp__4657__auto____$1){
var s__24949__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24949__$2)){
var c__19068__auto__ = cljs.core.chunk_first.call(null,s__24949__$2);
var size__19069__auto__ = cljs.core.count.call(null,c__19068__auto__);
var b__24951 = cljs.core.chunk_buffer.call(null,size__19069__auto__);
if((function (){var i__24950 = (0);
while(true){
if((i__24950 < size__19069__auto__)){
var field = cljs.core._nth.call(null,c__19068__auto__,i__24950);
cljs.core.chunk_append.call(null,b__24951,cljs.core.get.call(null,instruction,field));

var G__24952 = (i__24950 + (1));
i__24950 = G__24952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24951),rerenderer$lang$utils$get_all_refs_$_iter__24946_$_iter__24948.call(null,cljs.core.chunk_rest.call(null,s__24949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24951),null);
}
} else {
var field = cljs.core.first.call(null,s__24949__$2);
return cljs.core.cons.call(null,cljs.core.get.call(null,instruction,field),rerenderer$lang$utils$get_all_refs_$_iter__24946_$_iter__24948.call(null,cljs.core.rest.call(null,s__24949__$2)));
}
} else {
return null;
}
break;
}
});})(s__24947__$1,instruction,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__24947__$1,instruction,xs__5205__auto__,temp__4657__auto__))
;
var fs__19067__auto__ = cljs.core.seq.call(null,iterys__19066__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"cls","cls",-1270350575)], null)));
if(fs__19067__auto__){
return cljs.core.concat.call(null,fs__19067__auto__,rerenderer$lang$utils$get_all_refs_$_iter__24946.call(null,cljs.core.rest.call(null,s__24947__$1)));
} else {
var G__24953 = cljs.core.rest.call(null,s__24947__$1);
s__24947__$1 = G__24953;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19070__auto__.call(null,script);
})())));
});

//# sourceMappingURL=utils.js.map