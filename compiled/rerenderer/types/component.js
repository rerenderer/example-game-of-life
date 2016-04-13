// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.types.component');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * For creating component you should implement IComponent, platform-specific protocls
 * (IAndroid, etc) and Object with toString, like:
 * 
 * ```
 * (reify
 *   IComponent
 *   (tag [_] "rectangle")
 *   (childs [_] list-of-childs)
 *   (props [_] map-of-props)
 *   Object
 *   (toString [this] (component->string this))
 *   IBrowser
 *   ...
 *   IAndroid
 *   ...)
 * ```
 * @interface
 */
rerenderer.types.component.IComponent = function(){};

rerenderer.types.component.tag = (function rerenderer$types$component$tag(this$){
if((!((this$ == null))) && (!((this$.rerenderer$types$component$IComponent$tag$arity$1 == null)))){
return this$.rerenderer$types$component$IComponent$tag$arity$1(this$);
} else {
var x__18953__auto__ = (((this$ == null))?null:this$);
var m__18954__auto__ = (rerenderer.types.component.tag[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,this$);
} else {
var m__18954__auto____$1 = (rerenderer.types.component.tag["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IComponent.tag",this$);
}
}
}
});

rerenderer.types.component.childs = (function rerenderer$types$component$childs(this$){
if((!((this$ == null))) && (!((this$.rerenderer$types$component$IComponent$childs$arity$1 == null)))){
return this$.rerenderer$types$component$IComponent$childs$arity$1(this$);
} else {
var x__18953__auto__ = (((this$ == null))?null:this$);
var m__18954__auto__ = (rerenderer.types.component.childs[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,this$);
} else {
var m__18954__auto____$1 = (rerenderer.types.component.childs["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IComponent.childs",this$);
}
}
}
});

rerenderer.types.component.props = (function rerenderer$types$component$props(this$){
if((!((this$ == null))) && (!((this$.rerenderer$types$component$IComponent$props$arity$1 == null)))){
return this$.rerenderer$types$component$IComponent$props$arity$1(this$);
} else {
var x__18953__auto__ = (((this$ == null))?null:this$);
var m__18954__auto__ = (rerenderer.types.component.props[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,this$);
} else {
var m__18954__auto____$1 = (rerenderer.types.component.props["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IComponent.props",this$);
}
}
}
});

/**
 * Translates component to string, thath looks like component usage in views.
 */
rerenderer.types.component.component__GT_string = (function rerenderer$types$component$component__GT_string(component){
var indent = clojure.string.join.call(null,(function (){var iter__19070__auto__ = (function rerenderer$types$component$component__GT_string_$_iter__24735(s__24736){
return (new cljs.core.LazySeq(null,(function (){
var s__24736__$1 = s__24736;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24736__$1);
if(temp__4657__auto__){
var s__24736__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24736__$2)){
var c__19068__auto__ = cljs.core.chunk_first.call(null,s__24736__$2);
var size__19069__auto__ = cljs.core.count.call(null,c__19068__auto__);
var b__24738 = cljs.core.chunk_buffer.call(null,size__19069__auto__);
if((function (){var i__24737 = (0);
while(true){
if((i__24737 < size__19069__auto__)){
var _ = cljs.core._nth.call(null,c__19068__auto__,i__24737);
cljs.core.chunk_append.call(null,b__24738," ");

var G__24739 = (i__24737 + (1));
i__24737 = G__24739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24738),rerenderer$types$component$component__GT_string_$_iter__24735.call(null,cljs.core.chunk_rest.call(null,s__24736__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24738),null);
}
} else {
var _ = cljs.core.first.call(null,s__24736__$2);
return cljs.core.cons.call(null," ",rerenderer$types$component$component__GT_string_$_iter__24735.call(null,cljs.core.rest.call(null,s__24736__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19070__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,rerenderer.types.component.tag.call(null,component))));
})());
var childs_lines = cljs.core.flatten.call(null,cljs.core.map.call(null,((function (indent){
return (function (p1__24730_SHARP_){
return clojure.string.split_lines.call(null,rerenderer$types$component$component__GT_string.call(null,p1__24730_SHARP_));
});})(indent))
,rerenderer.types.component.childs.call(null,component)));
var childs_text = clojure.string.join.call(null,[cljs.core.str("\n"),cljs.core.str(indent)].join(''),childs_lines);
return [cljs.core.str("("),cljs.core.str(rerenderer.types.component.tag.call(null,component)),cljs.core.str(" "),cljs.core.str(rerenderer.types.component.props.call(null,component)),cljs.core.str((((cljs.core.count.call(null,childs_text) > (0)))?[cljs.core.str("\n"),cljs.core.str(indent),cljs.core.str(childs_text)].join(''):"")),cljs.core.str(")")].join('');
});
rerenderer.types.component.calculate_path = cljs.core.memoize.call(null,(function (component){
var cache_props = cljs.core.dissoc.call(null,rerenderer.types.component.props.call(null,component),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776));
return [cljs.core.str(rerenderer.types.component.tag.call(null,component)),cljs.core.str(":"),cljs.core.str(cache_props),cljs.core.str(":["),cljs.core.str(clojure.string.join.call(null,":",cljs.core.map.call(null,rerenderer.types.component.calculate_path,rerenderer.types.component.childs.call(null,component)))),cljs.core.str("]")].join('');
}));

//# sourceMappingURL=component.js.map