// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.debug');
goog.require('cljs.core');
/**
 * Rerenders game manualy, useful with figwheel.
 */
rerenderer.debug.rerender_BANG_ = (function rerenderer$debug$rerender_BANG_(game){
cljs.core.println.call(null,"Rerender game manually!");

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(game),cljs.core.identity);
});
/**
 * Swaps game state, works like atom's swap!
 */
rerenderer.debug.swap_state_BANG_ = (function rerenderer$debug$swap_state_BANG_(var_args){
var args__19363__auto__ = [];
var len__19356__auto___24934 = arguments.length;
var i__19357__auto___24935 = (0);
while(true){
if((i__19357__auto___24935 < len__19356__auto___24934)){
args__19363__auto__.push((arguments[i__19357__auto___24935]));

var G__24936 = (i__19357__auto___24935 + (1));
i__19357__auto___24935 = G__24936;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((1) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((1)),(0))):null);
return rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19364__auto__);
});

rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (game,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(game),args);
});

rerenderer.debug.swap_state_BANG_.cljs$lang$maxFixedArity = (1);

rerenderer.debug.swap_state_BANG_.cljs$lang$applyTo = (function (seq24932){
var G__24933 = cljs.core.first.call(null,seq24932);
var seq24932__$1 = cljs.core.next.call(null,seq24932);
return rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24933,seq24932__$1);
});
/**
 * Resets game state, works like atom's reset!
 */
rerenderer.debug.reset_state_BANG_ = (function rerenderer$debug$reset_state_BANG_(game,value){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(game),value);
});
/**
 * Resets game state to initial value.
 */
rerenderer.debug.reset_state_to_initial_BANG_ = (function rerenderer$debug$reset_state_to_initial_BANG_(game){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(game));
});

//# sourceMappingURL=debug.js.map