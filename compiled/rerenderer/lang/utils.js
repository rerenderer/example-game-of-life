// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.lang.utils');
goog.require('cljs.core');
goog.require('rerenderer.lang.forms');
/**
 * Returns all refs from script.
 */
rerenderer.lang.utils.get_all_refs = (function rerenderer$lang$utils$get_all_refs(script){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20124_SHARP_){
return (p1__20124_SHARP_ instanceof rerenderer.lang.forms.Ref);
}),cljs.core.flatten.call(null,(function (){var iter__6928__auto__ = (function rerenderer$lang$utils$get_all_refs_$_iter__20131(s__20132){
return (new cljs.core.LazySeq(null,(function (){
var s__20132__$1 = s__20132;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20132__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var instruction = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6924__auto__ = ((function (s__20132__$1,instruction,xs__5205__auto__,temp__4657__auto__){
return (function rerenderer$lang$utils$get_all_refs_$_iter__20131_$_iter__20133(s__20134){
return (new cljs.core.LazySeq(null,((function (s__20132__$1,instruction,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__20134__$1 = s__20134;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__20134__$1);
if(temp__4657__auto____$1){
var s__20134__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20134__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__20134__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__20136 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__20135 = (0);
while(true){
if((i__20135 < size__6927__auto__)){
var field = cljs.core._nth.call(null,c__6926__auto__,i__20135);
cljs.core.chunk_append.call(null,b__20136,cljs.core.get.call(null,instruction,field));

var G__20137 = (i__20135 + (1));
i__20135 = G__20137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20136),rerenderer$lang$utils$get_all_refs_$_iter__20131_$_iter__20133.call(null,cljs.core.chunk_rest.call(null,s__20134__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20136),null);
}
} else {
var field = cljs.core.first.call(null,s__20134__$2);
return cljs.core.cons.call(null,cljs.core.get.call(null,instruction,field),rerenderer$lang$utils$get_all_refs_$_iter__20131_$_iter__20133.call(null,cljs.core.rest.call(null,s__20134__$2)));
}
} else {
return null;
}
break;
}
});})(s__20132__$1,instruction,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__20132__$1,instruction,xs__5205__auto__,temp__4657__auto__))
;
var fs__6925__auto__ = cljs.core.seq.call(null,iterys__6924__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result-ref","result-ref",-765879077),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"cls","cls",-1270350575)], null)));
if(fs__6925__auto__){
return cljs.core.concat.call(null,fs__6925__auto__,rerenderer$lang$utils$get_all_refs_$_iter__20131.call(null,cljs.core.rest.call(null,s__20132__$1)));
} else {
var G__20138 = cljs.core.rest.call(null,s__20132__$1);
s__20132__$1 = G__20138;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,script);
})())));
});
