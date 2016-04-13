// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.lang.core');
goog.require('cljs.core');
goog.require('rerenderer.lang.forms');
rerenderer.lang.core.script = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
rerenderer.lang.core.to_var = (function rerenderer$lang$core$to_var(x){
if(((!((x == null)))?(((false) || (x.rerenderer$lang$forms$IVar$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,rerenderer.lang.forms.IVar,x):false)):cljs.core.native_satisfies_QMARK_.call(null,rerenderer.lang.forms.IVar,x))){
return x;
} else {
return rerenderer.lang.forms.__GT_Val.call(null,x);
}
});
rerenderer.lang.core.make_ref = (function rerenderer$lang$core$make_ref(){
return rerenderer.lang.forms.__GT_Ref.call(null,cljs.core.gensym.call(null));
});
rerenderer.lang.core.rnew = (function rerenderer$lang$core$rnew(cls,args){
var result_ref = rerenderer.lang.core.make_ref.call(null);
cljs.core.swap_BANG_.call(null,rerenderer.lang.core.script,cljs.core.conj,rerenderer.lang.forms.__GT_New.call(null,result_ref,cls,cljs.core.mapv.call(null,rerenderer.lang.core.to_var,args)));

return result_ref;
});
rerenderer.lang.core.rset_BANG_ = (function rerenderer$lang$core$rset_BANG_(ref,attr,value){
return cljs.core.swap_BANG_.call(null,rerenderer.lang.core.script,cljs.core.conj,rerenderer.lang.forms.__GT_Set.call(null,rerenderer.lang.core.to_var.call(null,ref),attr,rerenderer.lang.core.to_var.call(null,value)));
});
rerenderer.lang.core.rget = (function rerenderer$lang$core$rget(ref,attr){
var result_ref = rerenderer.lang.core.make_ref.call(null);
cljs.core.swap_BANG_.call(null,rerenderer.lang.core.script,cljs.core.conj,rerenderer.lang.forms.__GT_Get.call(null,result_ref,rerenderer.lang.core.to_var.call(null,ref),attr));

return result_ref;
});
rerenderer.lang.core.rcall_BANG_ = (function rerenderer$lang$core$rcall_BANG_(ref,method,args){
var result_ref = rerenderer.lang.core.make_ref.call(null);
cljs.core.swap_BANG_.call(null,rerenderer.lang.core.script,cljs.core.conj,rerenderer.lang.forms.__GT_Call.call(null,result_ref,rerenderer.lang.core.to_var.call(null,ref),method,cljs.core.mapv.call(null,rerenderer.lang.core.to_var,args)));

return result_ref;
});
