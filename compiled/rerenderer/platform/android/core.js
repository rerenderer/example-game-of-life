// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.android.core');
goog.require('cljs.core');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.platform.android.bus');
goog.require('rerenderer.platform.android.events');
goog.require('rerenderer.component');
if(cljs.core.truth_(rerenderer.platform.android.bus.available_QMARK_.call(null))){
cljs.core.reset_BANG_.call(null,rerenderer.platform.core.platform,new cljs.core.Keyword(null,"android","android",-2084094573));
} else {
}

/**
 * Component that implement that protocol support rendering on Android.
 * @interface
 */
rerenderer.platform.android.core.IAndroid = function(){};

/**
 * Name of android-side primitive.
 */
rerenderer.platform.android.core.android_primitive = (function rerenderer$platform$android$core$android_primitive(this$){
if((!((this$ == null))) && (!((this$.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 == null)))){
return this$.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.platform.android.core.android_primitive[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,this$);
} else {
var m__6812__auto____$1 = (rerenderer.platform.android.core.android_primitive["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IAndroid.android-primitive",this$);
}
}
}
});

rerenderer.platform.android.core.serialize_component = (function rerenderer$platform$android$core$serialize_component(component){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rerenderer.platform.android.core.android_primitive.call(null,component),rerenderer.component.props.call(null,component),(function (){var iter__6928__auto__ = (function rerenderer$platform$android$core$serialize_component_$_iter__15824(s__15825){
return (new cljs.core.LazySeq(null,(function (){
var s__15825__$1 = s__15825;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15825__$1);
if(temp__4657__auto__){
var s__15825__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15825__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__15825__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__15827 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__15826 = (0);
while(true){
if((i__15826 < size__6927__auto__)){
var child = cljs.core._nth.call(null,c__6926__auto__,i__15826);
cljs.core.chunk_append.call(null,b__15827,rerenderer$platform$android$core$serialize_component.call(null,child));

var G__15828 = (i__15826 + (1));
i__15826 = G__15828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15827),rerenderer$platform$android$core$serialize_component_$_iter__15824.call(null,cljs.core.chunk_rest.call(null,s__15825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15827),null);
}
} else {
var child = cljs.core.first.call(null,s__15825__$2);
return cljs.core.cons.call(null,rerenderer$platform$android$core$serialize_component.call(null,child),rerenderer$platform$android$core$serialize_component_$_iter__15824.call(null,cljs.core.rest.call(null,s__15825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,rerenderer.component.childs.call(null,component));
})(),rerenderer.component.path.call(null,component)], null);
});
cljs.core._add_method.call(null,rerenderer.platform.core.render,new cljs.core.Keyword(null,"android","android",-2084094573),(function (component,options){
return rerenderer.platform.android.bus.render_BANG_.call(null,rerenderer.platform.android.core.serialize_component.call(null,component),options);
}));
cljs.core._add_method.call(null,rerenderer.platform.core.listen_BANG_,new cljs.core.Keyword(null,"android","android",-2084094573),(function (ch,_){
return rerenderer.platform.android.events.bind_event_BANG_.call(null,ch);
}));
cljs.core._add_method.call(null,rerenderer.platform.core.information,new cljs.core.Keyword(null,"android","android",-2084094573),(function (_){
return cljs.core.deref.call(null,rerenderer.platform.android.bus.information);
}));
