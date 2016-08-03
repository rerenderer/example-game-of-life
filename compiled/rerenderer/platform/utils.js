// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.platform.utils');
goog.require('cljs.core');
/**
 * Deserializes json to cljs data structure.
 */
rerenderer.platform.utils.from_json = (function rerenderer$platform$utils$from_json(data){
return cljs.core.js__GT_clj.call(null,JSON.parse(data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
/**
 * Serializes cljs data structure to json.
 */
rerenderer.platform.utils.to_json = (function rerenderer$platform$utils$to_json(data){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data));
});
