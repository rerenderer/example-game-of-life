// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.lang.gc');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('rerenderer.lang.forms');
goog.require('rerenderer.lang.utils');
rerenderer.lang.gc.refs_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Add `Free` instructions for old refs to script.
 */
rerenderer.lang.gc.gc = (function rerenderer$lang$gc$gc(script){
var used = cljs.core.set.call(null,rerenderer.lang.utils.get_all_refs.call(null,script));
var to_gc = cljs.core.remove.call(null,used,cljs.core.deref.call(null,rerenderer.lang.gc.refs_cache));
cljs.core.reset_BANG_.call(null,rerenderer.lang.gc.refs_cache,used);

return cljs.core.concat.call(null,script,cljs.core.map.call(null,rerenderer.lang.forms.__GT_Free,to_gc));
});
