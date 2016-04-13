// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.browser.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.match');
rerenderer.platform.browser.interpreter.refs_cache = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"document","document",311342840,null),document], null));
rerenderer.platform.browser.interpreter.extract_var = (function rerenderer$platform$browser$interpreter$extract_var(refs,var$){
try{if((cljs.core.vector_QMARK_.call(null,var$)) && ((cljs.core.count.call(null,var$) === 2))){
try{var var_0__24616 = cljs.core.nth.call(null,var$,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,var_0__24616,new cljs.core.Keyword(null,"static","static",1214358571))){
var x = cljs.core.nth.call(null,var$,(1));
return (window[x]);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24619){if((e24619 instanceof Error)){
var e__23814__auto__ = e24619;
if((e__23814__auto__ === cljs.core.match.backtrack)){
try{var var_0__24616 = cljs.core.nth.call(null,var$,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,var_0__24616,new cljs.core.Keyword(null,"ref","ref",1289896967))){
var x = cljs.core.nth.call(null,var$,(1));
return refs.call(null,x);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24620){if((e24620 instanceof Error)){
var e__23814__auto____$1 = e24620;
if((e__23814__auto____$1 === cljs.core.match.backtrack)){
try{var var_0__24616 = cljs.core.nth.call(null,var$,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,var_0__24616,new cljs.core.Keyword(null,"val","val",128701612))){
var x = cljs.core.nth.call(null,var$,(1));
return x;
} else {
throw cljs.core.match.backtrack;

}
}catch (e24621){if((e24621 instanceof Error)){
var e__23814__auto____$2 = e24621;
if((e__23814__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23814__auto____$2;
}
} else {
throw e24621;

}
}} else {
throw e__23814__auto____$1;
}
} else {
throw e24620;

}
}} else {
throw e__23814__auto__;
}
} else {
throw e24619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24618){if((e24618 instanceof Error)){
var e__23814__auto__ = e24618;
if((e__23814__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(var$)].join('')));
} else {
throw e__23814__auto__;
}
} else {
throw e24618;

}
}});
/**
 * Creates an instance of `cls` with `args` and puts it in `refs`.
 */
rerenderer.platform.browser.interpreter.create_instance = (function rerenderer$platform$browser$interpreter$create_instance(refs,p__24623,cls,args){
var vec__24625 = p__24623;
var _ = cljs.core.nth.call(null,vec__24625,(0),null);
var ref_id = cljs.core.nth.call(null,vec__24625,(1),null);
var cls__$1 = rerenderer.platform.browser.interpreter.extract_var.call(null,refs,cls);
var js_args = cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.map.call(null,((function (cls__$1,vec__24625,_,ref_id){
return (function (p1__24622_SHARP_){
return rerenderer.platform.browser.interpreter.extract_var.call(null,refs,p1__24622_SHARP_);
});})(cls__$1,vec__24625,_,ref_id))
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
rerenderer.platform.browser.interpreter.get_attr = (function rerenderer$platform$browser$interpreter$get_attr(refs,p__24626,ref,attr){
var vec__24628 = p__24626;
var _ = cljs.core.nth.call(null,vec__24628,(0),null);
var result_ref = cljs.core.nth.call(null,vec__24628,(1),null);
return cljs.core.assoc.call(null,refs,result_ref,(rerenderer.platform.browser.interpreter.extract_var.call(null,refs,ref)[attr]));
});
/**
 * Calls `method` of `var` with `args` and puts result in `refs`.
 */
rerenderer.platform.browser.interpreter.call_method = (function rerenderer$platform$browser$interpreter$call_method(refs,p__24630,var$,method,args){
var vec__24632 = p__24630;
var _ = cljs.core.nth.call(null,vec__24632,(0),null);
var result_ref = cljs.core.nth.call(null,vec__24632,(1),null);
var obj = rerenderer.platform.browser.interpreter.extract_var.call(null,refs,var$);
var js_args = cljs.core.clj__GT_js.call(null,cljs.core.mapv.call(null,((function (obj,vec__24632,_,result_ref){
return (function (p1__24629_SHARP_){
return rerenderer.platform.browser.interpreter.extract_var.call(null,refs,p1__24629_SHARP_);
});})(obj,vec__24632,_,result_ref))
,args));
var call_result = (obj[method]).apply(obj,js_args);
return cljs.core.assoc.call(null,refs,result_ref,call_result);
});
/**
 * Removes `ref` from `refs`.
 */
rerenderer.platform.browser.interpreter.free = (function rerenderer$platform$browser$interpreter$free(refs,p__24633){
var vec__24635 = p__24633;
var _ = cljs.core.nth.call(null,vec__24635,(0),null);
var ref = cljs.core.nth.call(null,vec__24635,(1),null);
return cljs.core.dissoc.call(null,refs,ref);
});
/**
 * Interpretes a single `instruction` of script and returns changed `refs`.
 */
rerenderer.platform.browser.interpreter.interpret_instruction = (function rerenderer$platform$browser$interpreter$interpret_instruction(refs,instruction){
try{try{if((cljs.core.vector_QMARK_.call(null,instruction)) && ((cljs.core.count.call(null,instruction) === 4))){
try{var instruction_0__24659 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__24659,new cljs.core.Keyword(null,"new","new",-2085437848))){
var result_var = cljs.core.nth.call(null,instruction,(1));
var cls = cljs.core.nth.call(null,instruction,(2));
var args = cljs.core.nth.call(null,instruction,(3));
return rerenderer.platform.browser.interpreter.create_instance.call(null,refs,result_var,cls,args);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24675){if((e24675 instanceof Error)){
var e__23814__auto__ = e24675;
if((e__23814__auto__ === cljs.core.match.backtrack)){
try{var instruction_0__24659 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__24659,new cljs.core.Keyword(null,"set","set",304602554))){
var var$ = cljs.core.nth.call(null,instruction,(1));
var attr = cljs.core.nth.call(null,instruction,(2));
var value = cljs.core.nth.call(null,instruction,(3));
return rerenderer.platform.browser.interpreter.set_attr.call(null,refs,var$,attr,value);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24676){if((e24676 instanceof Error)){
var e__23814__auto____$1 = e24676;
if((e__23814__auto____$1 === cljs.core.match.backtrack)){
try{var instruction_0__24659 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__24659,new cljs.core.Keyword(null,"get","get",1683182755))){
var result_var = cljs.core.nth.call(null,instruction,(1));
var var$ = cljs.core.nth.call(null,instruction,(2));
var attr = cljs.core.nth.call(null,instruction,(3));
return rerenderer.platform.browser.interpreter.get_attr.call(null,refs,result_var,var$,attr);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24677){if((e24677 instanceof Error)){
var e__23814__auto____$2 = e24677;
if((e__23814__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23814__auto____$2;
}
} else {
throw e24677;

}
}} else {
throw e__23814__auto____$1;
}
} else {
throw e24676;

}
}} else {
throw e__23814__auto__;
}
} else {
throw e24675;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24670){if((e24670 instanceof Error)){
var e__23814__auto__ = e24670;
if((e__23814__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,instruction)) && ((cljs.core.count.call(null,instruction) === 5))){
try{var instruction_0__24663 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__24663,new cljs.core.Keyword(null,"call","call",-519999866))){
var result_var = cljs.core.nth.call(null,instruction,(1));
var var$ = cljs.core.nth.call(null,instruction,(2));
var method = cljs.core.nth.call(null,instruction,(3));
var args = cljs.core.nth.call(null,instruction,(4));
return rerenderer.platform.browser.interpreter.call_method.call(null,refs,result_var,var$,method,args);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24674){if((e24674 instanceof Error)){
var e__23814__auto____$1 = e24674;
if((e__23814__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23814__auto____$1;
}
} else {
throw e24674;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24671){if((e24671 instanceof Error)){
var e__23814__auto____$1 = e24671;
if((e__23814__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,instruction)) && ((cljs.core.count.call(null,instruction) === 2))){
try{var instruction_0__24668 = cljs.core.nth.call(null,instruction,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,instruction_0__24668,new cljs.core.Keyword(null,"free","free",801364328))){
var var$ = cljs.core.nth.call(null,instruction,(1));
return rerenderer.platform.browser.interpreter.free.call(null,refs,var$);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24673){if((e24673 instanceof Error)){
var e__23814__auto____$2 = e24673;
if((e__23814__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23814__auto____$2;
}
} else {
throw e24673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24672){if((e24672 instanceof Error)){
var e__23814__auto____$2 = e24672;
if((e__23814__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(instruction)].join('')));
} else {
throw e__23814__auto____$2;
}
} else {
throw e24672;

}
}} else {
throw e__23814__auto____$1;
}
} else {
throw e24671;

}
}} else {
throw e__23814__auto__;
}
} else {
throw e24670;

}
}}catch (e24657){if((e24657 instanceof Error)){
var e = e24657;
console.warn("Can't execute instruction",instruction,":",e);

throw e;
} else {
throw e24657;

}
}});
/**
 * Interpretes `script` and returns hash-map with vars.
 */
rerenderer.platform.browser.interpreter.interpret_BANG_ = (function rerenderer$platform$browser$interpreter$interpret_BANG_(script){
return cljs.core.swap_BANG_.call(null,rerenderer.platform.browser.interpreter.refs_cache,(function (p1__24678_SHARP_){
return cljs.core.reduce.call(null,rerenderer.platform.browser.interpreter.interpret_instruction,p1__24678_SHARP_,script);
}));
});

//# sourceMappingURL=interpreter.js.map