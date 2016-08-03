// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.debug');
goog.require('cljs.core');
/**
 * Rerenders game manualy, useful with figwheel.
 * 
 *   * `game` - `Game` record.
 */
rerenderer.debug.rerender_BANG_ = (function rerenderer$debug$rerender_BANG_(game){
cljs.core.println.call(null,"Rerender game manually!");

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(game),cljs.core.identity);
});
/**
 * Swaps game state, works like atom's `swap!`.
 * 
 *   * `game` - `Game` record;
 *   * `args` - `swap!` args.
 */
rerenderer.debug.swap_state_BANG_ = (function rerenderer$debug$swap_state_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15576 = arguments.length;
var i__7215__auto___15577 = (0);
while(true){
if((i__7215__auto___15577 < len__7214__auto___15576)){
args__7221__auto__.push((arguments[i__7215__auto___15577]));

var G__15578 = (i__7215__auto___15577 + (1));
i__7215__auto___15577 = G__15578;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (game,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(game),args);
});

rerenderer.debug.swap_state_BANG_.cljs$lang$maxFixedArity = (1);

rerenderer.debug.swap_state_BANG_.cljs$lang$applyTo = (function (seq15574){
var G__15575 = cljs.core.first.call(null,seq15574);
var seq15574__$1 = cljs.core.next.call(null,seq15574);
return rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15575,seq15574__$1);
});
/**
 * Resets game state, works like atom's `reset!`.
 * 
 *   * `game` - `Game` record;
 *   * `value` - new value.
 */
rerenderer.debug.reset_state_BANG_ = (function rerenderer$debug$reset_state_BANG_(game,value){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(game),value);
});
/**
 * Resets game state to initial value.
 * 
 *   * `game` - `Game` record.
 */
rerenderer.debug.reset_state_to_initial_BANG_ = (function rerenderer$debug$reset_state_to_initial_BANG_(game){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(game));
});
