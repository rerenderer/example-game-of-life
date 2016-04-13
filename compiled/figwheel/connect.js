// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('org.rerenderer.game_of_life.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29870__delegate = function (x){
if(cljs.core.truth_(org.rerenderer.game_of_life.core.on_reload)){
return cljs.core.apply.call(null,org.rerenderer.game_of_life.core.on_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'org.rerenderer.game-of-life.core/on-reload' is missing");
}
};
var G__29870 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29871__i = 0, G__29871__a = new Array(arguments.length -  0);
while (G__29871__i < G__29871__a.length) {G__29871__a[G__29871__i] = arguments[G__29871__i + 0]; ++G__29871__i;}
  x = new cljs.core.IndexedSeq(G__29871__a,0);
} 
return G__29870__delegate.call(this,x);};
G__29870.cljs$lang$maxFixedArity = 0;
G__29870.cljs$lang$applyTo = (function (arglist__29872){
var x = cljs.core.seq(arglist__29872);
return G__29870__delegate(x);
});
G__29870.cljs$core$IFn$_invoke$arity$variadic = G__29870__delegate;
return G__29870;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"main",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://192.168.2.110:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map