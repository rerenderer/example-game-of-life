// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.browser.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.match');
rerenderer.platform.browser.interpreter.refs_cache = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"document","document",311342840,null),document], null));
rerenderer.platform.browser.interpreter.extract_var = (function rerenderer$platform$browser$interpreter$extract_var(refs,var$){
try{if((cljs.core.vector_QMARK_.call(null,var$)) && ((cljs.core.count.call(null,var$) === 2))){
try{var var_0__19801 = cljs.core.nth.call(null,var$,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,var_0__19801,new cljs.core.Keyword(null,"static","static",1214358571))){
var x = cljs.core.nth.call(null,var$,(1));
return (window[x]);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19804){if((e19804 instanceof Error)){
var e__18999__auto__ = e19804;
if((e__18999__auto__ === cljs.core.match.backtrack)){
try{var var_0__19801 = cljs.core.nth.call(null,var$,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,var_0__19801,new cljs.core.Keyword(null,"ref","ref",1289896967))){
var x = cljs.core.nth.call(null,var$,(1));
return refs.call(null,x);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19805){if((e19805 instanceof Error)){
var e__18999__auto____$1 = e19805;
if((e__18999__auto____$1 === cljs.core.match.backtrack)){
try{var var_0__19801 = cljs.core.nth.call(null,var$,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,var_0__19801,new cljs.core.Keyword(null,"val","val",128701612))){
var x = cljs.core.nth.call(null,var$,(1));
return x;
} else {
throw cljs.core.match.backtrack;

}
}catch (e19806){if((e19806 instanceof Error)){
var e__18999__auto____$2 = e19806;
if((e__18999__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18999__auto____$2;
}
} else {
throw e19806;

}
}} else {
throw e__18999__auto____$1;
}
} else {
throw e19805;

}
}} else {
throw e__18999__auto__;
}
} else {
throw e19804;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19803){if((e19803 instanceof Error)){
var e__18999__auto__ = e19803;
if((e__18999__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(var$)].join('')));
} else {
throw e__18999__auto__;
}
} else {
throw e19803;

}
}});
/**
 * Creates an instance of `cls` with `args` and puts it in `refs`.
 */
rerenderer.platform.browser.interpreter.create_instance = (function rerenderer$platform$browser$interpreter$create_instance(refs,p__19808,cls,args){
var vec__19810 = p__19808;
var _ = cljs.core.nth.call(null,vec__19810,(0),null);
var ref_id = cljs.core.nth.call(null,vec__19810,(1),null);
var cls__$1 = rerenderer.platform.browser.interpreter.extract_var.call(null,refs,cls);
var js_args = cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.map.call(null,((function (cls__$1,vec__19810,_,ref_id){
return (function (p1__19807_SHARP_){
return rerenderer.platform.browser.interpreter.extract_var.call(null,refs,p1__19807_SHARP_);
});})(cls__$1,vec__19810,_,ref_id))
,args)));
var constructor$ = Function.prototype.bind.apply(cls__$1,js_args);
var inst = (new constructor$());
return cljs.core.assoc.call(null,refs,ref_id,inst);
});
/**
 * Sets `value` to `attr` of `ref`.
 */
rerenderer.platform.browser.interpreter.set_attr = (function rerenderer$platform$browser$interpreter$set_attr(refs,obj,attr,value){
(rerenderer.platform.browser.interpreter.extract_var.call(null,refs,obj)[attr] = rerenderer.platform.browser.interpreter.extract_var.call(null,refs,value));

return refs;
});
/**
 * Gets value of `attr` of `ref` and puts it in `refs`.
 */
rerenderer.platform.browser.interpreter.get_attr = (function rerenderer$platform$browser$interpreter$get_attr(refs,p__19811,ref,attr){
var vec__19813 = p__19811;
var _ = cljs.core.nth.call(null,vec__19813,(0),null);
var result_ref = cljs.core.nth.call(null,vec__19813,(1),null);
return cljs.core.assoc.call(null,refs,result_ref,(rerenderer.platform.browser.interpreter.extract_var.call(null,refs,ref)[attr]));
});
/**
 * Calls `method` of `var` with `args` and puts result in `refs`.
 */
rerenderer.platform.browser.interpreter.call_method = (function rerenderer$platform$browser$interpreter$call_method(refs,p__19815,var$,method,args){
var vec__19817 = p__19815;
var _ = cljs.core.nth.call(null,vec__19817,(0),null);
var result_ref = cljs.core.nth.call(null,vec__19817,(1),null);
var obj = rerenderer.platform.browser.interpreter.extract_var.call(null,refs,var$);
var js_args = cljs.core.clj__GT_js.call(null,cljs.core.mapv.call(null,((function (obj,vec__19817,_,result_ref){
return (function (p1__19814_SHARP_){
return rerenderer.platform.browser.interpreter.extract_var.call(null,refs,p1__19814_SHARP_);
});})(obj,vec__19817,_,result_ref))
,args));
var call_result = (obj[method]).apply(obj,js_args);
return cljs.core.assoc.call(null,refs,result_ref,call_result);
});
/**
 * Removes `ref` from `refs`.
 */
rerenderer.platform.browser.interpreter.free = (function rerenderer$platform$browser$interpreter$free(refs,p__19818){
var vec__19820 = p__19818;
var _ = cljs.core.nth.call(null,vec__19820,(0),null);
var ref = cljs.core.nth.call(null,vec__19820,(1),null);
return cljs.core.dissoc.call(null,refs,ref);
});
/**
 * Interpretes a single `instruction` of script and returns changed `refs`.
 */
rerenderer.platform.browser.interpreter.interpret_instruction = (function rerenderer$platform$browser$interpreter$interpret_instruction(refs,instruction){
try{try{if((cljs.core.vector_QMARK_.call(null,instruction)) && ((cljs.core.count.call(null,instruction) === 4))){
try{var instruction_0__19844 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__19844,new cljs.core.Keyword(null,"new","new",-2085437848))){
var result_var = cljs.core.nth.call(null,instruction,(1));
var cls = cljs.core.nth.call(null,instruction,(2));
var args = cljs.core.nth.call(null,instruction,(3));
return rerenderer.platform.browser.interpreter.create_instance.call(null,refs,result_var,cls,args);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19860){if((e19860 instanceof Error)){
var e__18999__auto__ = e19860;
if((e__18999__auto__ === cljs.core.match.backtrack)){
try{var instruction_0__19844 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__19844,new cljs.core.Keyword(null,"set","set",304602554))){
var var$ = cljs.core.nth.call(null,instruction,(1));
var attr = cljs.core.nth.call(null,instruction,(2));
var value = cljs.core.nth.call(null,instruction,(3));
return rerenderer.platform.browser.interpreter.set_attr.call(null,refs,var$,attr,value);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19861){if((e19861 instanceof Error)){
var e__18999__auto____$1 = e19861;
if((e__18999__auto____$1 === cljs.core.match.backtrack)){
try{var instruction_0__19844 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__19844,new cljs.core.Keyword(null,"get","get",1683182755))){
var result_var = cljs.core.nth.call(null,instruction,(1));
var var$ = cljs.core.nth.call(null,instruction,(2));
var attr = cljs.core.nth.call(null,instruction,(3));
return rerenderer.platform.browser.interpreter.get_attr.call(null,refs,result_var,var$,attr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19862){if((e19862 instanceof Error)){
var e__18999__auto____$2 = e19862;
if((e__18999__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18999__auto____$2;
}
} else {
throw e19862;

}
}} else {
throw e__18999__auto____$1;
}
} else {
throw e19861;

}
}} else {
throw e__18999__auto__;
}
} else {
throw e19860;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19855){if((e19855 instanceof Error)){
var e__18999__auto__ = e19855;
if((e__18999__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,instruction)) && ((cljs.core.count.call(null,instruction) === 5))){
try{var instruction_0__19848 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__19848,new cljs.core.Keyword(null,"call","call",-519999866))){
var result_var = cljs.core.nth.call(null,instruction,(1));
var var$ = cljs.core.nth.call(null,instruction,(2));
var method = cljs.core.nth.call(null,instruction,(3));
var args = cljs.core.nth.call(null,instruction,(4));
return rerenderer.platform.browser.interpreter.call_method.call(null,refs,result_var,var$,method,args);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19859){if((e19859 instanceof Error)){
var e__18999__auto____$1 = e19859;
if((e__18999__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18999__auto____$1;
}
} else {
throw e19859;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19856){if((e19856 instanceof Error)){
var e__18999__auto____$1 = e19856;
if((e__18999__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,instruction)) && ((cljs.core.count.call(null,instruction) === 2))){
try{var instruction_0__19853 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__19853,new cljs.core.Keyword(null,"free","free",801364328))){
var var$ = cljs.core.nth.call(null,instruction,(1));
return rerenderer.platform.browser.interpreter.free.call(null,refs,var$);
} else {
throw cljs.core.match.backtrack;

}
}catch (e19858){if((e19858 instanceof Error)){
var e__18999__auto____$2 = e19858;
if((e__18999__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18999__auto____$2;
}
} else {
throw e19858;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e19857){if((e19857 instanceof Error)){
var e__18999__auto____$2 = e19857;
if((e__18999__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(instruction)].join('')));
} else {
throw e__18999__auto____$2;
}
} else {
throw e19857;

}
}} else {
throw e__18999__auto____$1;
}
} else {
throw e19856;

}
}} else {
throw e__18999__auto__;
}
} else {
throw e19855;

}
}}catch (e19842){if((e19842 instanceof Error)){
var e = e19842;
console.warn("Can't execute instruction",instruction,":",e);

throw e;
} else {
throw e19842;

}
}});
/**
 * Interpretes `script` and returns hash-map with vars.
 */
rerenderer.platform.browser.interpreter.interpret_BANG_ = (function rerenderer$platform$browser$interpreter$interpret_BANG_(script){
return cljs.core.swap_BANG_.call(null,rerenderer.platform.browser.interpreter.refs_cache,(function (p1__19863_SHARP_){
return cljs.core.reduce.call(null,rerenderer.platform.browser.interpreter.interpret_instruction,p1__19863_SHARP_,script);
}));
});
