// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.core');
goog.require('cljs.core');
rerenderer.platform.core.platform = cljs.core.atom.call(null,null);
rerenderer.platform.core.get_platform = (function rerenderer$platform$core$get_platform(){
return cljs.core.deref.call(null,rerenderer.platform.core.platform);
});
if(typeof rerenderer.platform.core.apply_script_BANG_ !== 'undefined'){
} else {
/**
 * (script, root-canvas-id, options) -> null
 *   Run script on platform side. final result of script on `root-canvas-id`.
 */
rerenderer.platform.core.apply_script_BANG_ = (function (){var method_table__7069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7073__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rerenderer.platform.core","apply-script!"),rerenderer.platform.core.get_platform,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
if(typeof rerenderer.platform.core.listen_BANG_ !== 'undefined'){
} else {
/**
 * (event-ch options) -> null
 *   Should put events to `event-ch`, supported events:
 *  - [:click {:x :y}]
 *  - [:keydown {:keycode}]
 *  - [:keyup {:keycode}]
 */
rerenderer.platform.core.listen_BANG_ = (function (){var method_table__7069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7073__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rerenderer.platform.core","listen!"),rerenderer.platform.core.get_platform,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
if(typeof rerenderer.platform.core.render !== 'undefined'){
} else {
/**
 * (component) -> RenderResult
 */
rerenderer.platform.core.render = (function (){var method_table__7069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7073__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rerenderer.platform.core","render"),rerenderer.platform.core.get_platform,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
if(typeof rerenderer.platform.core.render_to !== 'undefined'){
} else {
/**
 * (child-node, parent-node) -> script
 *   Render child node on top of parent node
 */
rerenderer.platform.core.render_to = (function (){var method_table__7069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7073__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rerenderer.platform.core","render-to"),rerenderer.platform.core.get_platform,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
if(typeof rerenderer.platform.core.information !== 'undefined'){
} else {
/**
 * Returns platform information in format:
 *   {:width int-px
 * :height int-px
 * :input #{:mouse :keyboard :touch}}
 */
rerenderer.platform.core.information = (function (){var method_table__7069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7073__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"rerenderer.platform.core","information"),rerenderer.platform.core.get_platform,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
