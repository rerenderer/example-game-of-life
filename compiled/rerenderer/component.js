// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.component');
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
rerenderer.component.IComponent = function(){};

/**
 * Component's tag, like `rectangle`.
 */
rerenderer.component.tag = (function rerenderer$component$tag(this$){
if((!((this$ == null))) && (!((this$.rerenderer$component$IComponent$tag$arity$1 == null)))){
return this$.rerenderer$component$IComponent$tag$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.component.tag[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,this$);
} else {
var m__6812__auto____$1 = (rerenderer.component.tag["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IComponent.tag",this$);
}
}
}
});

/**
 * Component's childs if it nested.
 */
rerenderer.component.childs = (function rerenderer$component$childs(this$){
if((!((this$ == null))) && (!((this$.rerenderer$component$IComponent$childs$arity$1 == null)))){
return this$.rerenderer$component$IComponent$childs$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.component.childs[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,this$);
} else {
var m__6812__auto____$1 = (rerenderer.component.childs["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IComponent.childs",this$);
}
}
}
});

/**
 * Component's properties, like `{:width 100}`.
 */
rerenderer.component.props = (function rerenderer$component$props(this$){
if((!((this$ == null))) && (!((this$.rerenderer$component$IComponent$props$arity$1 == null)))){
return this$.rerenderer$component$IComponent$props$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.component.props[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,this$);
} else {
var m__6812__auto____$1 = (rerenderer.component.props["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IComponent.props",this$);
}
}
}
});

/**
 * Returns flatten list of non-empty childs.
 */
rerenderer.component.prepare_childs = (function rerenderer$component$prepare_childs(childs){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,childs));
});
/**
 * Translates component to string, thath looks like component usage in views.
 */
rerenderer.component.component__GT_string = (function rerenderer$component$component__GT_string(component){
var indent = clojure.string.join.call(null,(function (){var iter__6928__auto__ = (function rerenderer$component$component__GT_string_$_iter__15471(s__15472){
return (new cljs.core.LazySeq(null,(function (){
var s__15472__$1 = s__15472;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15472__$1);
if(temp__4657__auto__){
var s__15472__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15472__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__15472__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__15474 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__15473 = (0);
while(true){
if((i__15473 < size__6927__auto__)){
var _ = cljs.core._nth.call(null,c__6926__auto__,i__15473);
cljs.core.chunk_append.call(null,b__15474," ");

var G__15475 = (i__15473 + (1));
i__15473 = G__15475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15474),rerenderer$component$component__GT_string_$_iter__15471.call(null,cljs.core.chunk_rest.call(null,s__15472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15474),null);
}
} else {
var _ = cljs.core.first.call(null,s__15472__$2);
return cljs.core.cons.call(null," ",rerenderer$component$component__GT_string_$_iter__15471.call(null,cljs.core.rest.call(null,s__15472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,rerenderer.component.tag.call(null,component))));
})());
var childs_lines = cljs.core.flatten.call(null,cljs.core.map.call(null,((function (indent){
return (function (p1__15466_SHARP_){
return clojure.string.split_lines.call(null,rerenderer$component$component__GT_string.call(null,p1__15466_SHARP_));
});})(indent))
,rerenderer.component.childs.call(null,component)));
var childs_text = clojure.string.join.call(null,[cljs.core.str("\n"),cljs.core.str(indent)].join(''),childs_lines);
return [cljs.core.str("("),cljs.core.str(rerenderer.component.tag.call(null,component)),cljs.core.str(" "),cljs.core.str(rerenderer.component.props.call(null,component)),cljs.core.str((((cljs.core.count.call(null,childs_text) > (0)))?[cljs.core.str("\n"),cljs.core.str(indent),cljs.core.str(childs_text)].join(''):"")),cljs.core.str(")")].join('');
});
rerenderer.component.child_path = (function rerenderer$component$child_path(child){
var map__15478 = rerenderer.component.props.call(null,child);
var map__15478__$1 = ((((!((map__15478 == null)))?((((map__15478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15478):map__15478);
var x = cljs.core.get.call(null,map__15478__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15478__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return [cljs.core.str(rerenderer.component.path.call(null,child)),cljs.core.str(":("),cljs.core.str(x),cljs.core.str(", "),cljs.core.str(y),cljs.core.str(")")].join('');
});
/**
 * Returns full reversed components path, from childs to component.
 */
rerenderer.component.path = cljs.core.memoize.call(null,(function (component){
var cache_props = cljs.core.dissoc.call(null,rerenderer.component.props.call(null,component),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776));
return [cljs.core.str(rerenderer.component.tag.call(null,component)),cljs.core.str(":"),cljs.core.str(cache_props),cljs.core.str(":["),cljs.core.str(clojure.string.join.call(null,":",cljs.core.map.call(null,rerenderer.component.child_path,rerenderer.component.childs.call(null,component)))),cljs.core.str("]")].join('');
}));
/**
 * Converts color to rgba, supported formats: `#ff0000`, `rgb(255, 255, 0)`, `argb(255, 0, 0, 0)`, `red`.
 */
rerenderer.component.__GT_rgba = cljs.core.memoize.call(null,(function (color){
var map__15480 = cljs.core.js__GT_clj.call(null,tinycolor(cljs.core.clj__GT_js.call(null,color)).toRgb(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__15480__$1 = ((((!((map__15480 == null)))?((((map__15480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15480):map__15480);
var r = cljs.core.get.call(null,map__15480__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.call(null,map__15480__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.call(null,map__15480__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.call(null,map__15480__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,((255) * a)], null);
}));
/**
 * Get full url from relative or absolute url.
 */
rerenderer.component.__GT_url = (function rerenderer$component$__GT_url(src){
if((clojure.string.starts_with_QMARK_.call(null,src,"http://")) || (clojure.string.starts_with_QMARK_.call(null,src,"https://"))){
return src;
} else {
return [cljs.core.str(document.location.protocol),cljs.core.str("//"),cljs.core.str(document.location.host),cljs.core.str(src)].join('');
}
});
