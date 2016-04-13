// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18298__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18298__auto__){
return or__18298__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18298__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25151_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25151_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25156 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25157 = null;
var count__25158 = (0);
var i__25159 = (0);
while(true){
if((i__25159 < count__25158)){
var n = cljs.core._nth.call(null,chunk__25157,i__25159);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25160 = seq__25156;
var G__25161 = chunk__25157;
var G__25162 = count__25158;
var G__25163 = (i__25159 + (1));
seq__25156 = G__25160;
chunk__25157 = G__25161;
count__25158 = G__25162;
i__25159 = G__25163;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25156);
if(temp__4657__auto__){
var seq__25156__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25156__$1)){
var c__19101__auto__ = cljs.core.chunk_first.call(null,seq__25156__$1);
var G__25164 = cljs.core.chunk_rest.call(null,seq__25156__$1);
var G__25165 = c__19101__auto__;
var G__25166 = cljs.core.count.call(null,c__19101__auto__);
var G__25167 = (0);
seq__25156 = G__25164;
chunk__25157 = G__25165;
count__25158 = G__25166;
i__25159 = G__25167;
continue;
} else {
var n = cljs.core.first.call(null,seq__25156__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25168 = cljs.core.next.call(null,seq__25156__$1);
var G__25169 = null;
var G__25170 = (0);
var G__25171 = (0);
seq__25156 = G__25168;
chunk__25157 = G__25169;
count__25158 = G__25170;
i__25159 = G__25171;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25210_25217 = cljs.core.seq.call(null,deps);
var chunk__25211_25218 = null;
var count__25212_25219 = (0);
var i__25213_25220 = (0);
while(true){
if((i__25213_25220 < count__25212_25219)){
var dep_25221 = cljs.core._nth.call(null,chunk__25211_25218,i__25213_25220);
topo_sort_helper_STAR_.call(null,dep_25221,(depth + (1)),state);

var G__25222 = seq__25210_25217;
var G__25223 = chunk__25211_25218;
var G__25224 = count__25212_25219;
var G__25225 = (i__25213_25220 + (1));
seq__25210_25217 = G__25222;
chunk__25211_25218 = G__25223;
count__25212_25219 = G__25224;
i__25213_25220 = G__25225;
continue;
} else {
var temp__4657__auto___25226 = cljs.core.seq.call(null,seq__25210_25217);
if(temp__4657__auto___25226){
var seq__25210_25227__$1 = temp__4657__auto___25226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25210_25227__$1)){
var c__19101__auto___25228 = cljs.core.chunk_first.call(null,seq__25210_25227__$1);
var G__25229 = cljs.core.chunk_rest.call(null,seq__25210_25227__$1);
var G__25230 = c__19101__auto___25228;
var G__25231 = cljs.core.count.call(null,c__19101__auto___25228);
var G__25232 = (0);
seq__25210_25217 = G__25229;
chunk__25211_25218 = G__25230;
count__25212_25219 = G__25231;
i__25213_25220 = G__25232;
continue;
} else {
var dep_25233 = cljs.core.first.call(null,seq__25210_25227__$1);
topo_sort_helper_STAR_.call(null,dep_25233,(depth + (1)),state);

var G__25234 = cljs.core.next.call(null,seq__25210_25227__$1);
var G__25235 = null;
var G__25236 = (0);
var G__25237 = (0);
seq__25210_25217 = G__25234;
chunk__25211_25218 = G__25235;
count__25212_25219 = G__25236;
i__25213_25220 = G__25237;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25214){
var vec__25216 = p__25214;
var x = cljs.core.nth.call(null,vec__25216,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25216,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25216,x,xs,get_deps__$1){
return (function (p1__25172_SHARP_){
return clojure.set.difference.call(null,p1__25172_SHARP_,x);
});})(vec__25216,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25250 = cljs.core.seq.call(null,provides);
var chunk__25251 = null;
var count__25252 = (0);
var i__25253 = (0);
while(true){
if((i__25253 < count__25252)){
var prov = cljs.core._nth.call(null,chunk__25251,i__25253);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25254_25262 = cljs.core.seq.call(null,requires);
var chunk__25255_25263 = null;
var count__25256_25264 = (0);
var i__25257_25265 = (0);
while(true){
if((i__25257_25265 < count__25256_25264)){
var req_25266 = cljs.core._nth.call(null,chunk__25255_25263,i__25257_25265);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25266,prov);

var G__25267 = seq__25254_25262;
var G__25268 = chunk__25255_25263;
var G__25269 = count__25256_25264;
var G__25270 = (i__25257_25265 + (1));
seq__25254_25262 = G__25267;
chunk__25255_25263 = G__25268;
count__25256_25264 = G__25269;
i__25257_25265 = G__25270;
continue;
} else {
var temp__4657__auto___25271 = cljs.core.seq.call(null,seq__25254_25262);
if(temp__4657__auto___25271){
var seq__25254_25272__$1 = temp__4657__auto___25271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25254_25272__$1)){
var c__19101__auto___25273 = cljs.core.chunk_first.call(null,seq__25254_25272__$1);
var G__25274 = cljs.core.chunk_rest.call(null,seq__25254_25272__$1);
var G__25275 = c__19101__auto___25273;
var G__25276 = cljs.core.count.call(null,c__19101__auto___25273);
var G__25277 = (0);
seq__25254_25262 = G__25274;
chunk__25255_25263 = G__25275;
count__25256_25264 = G__25276;
i__25257_25265 = G__25277;
continue;
} else {
var req_25278 = cljs.core.first.call(null,seq__25254_25272__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25278,prov);

var G__25279 = cljs.core.next.call(null,seq__25254_25272__$1);
var G__25280 = null;
var G__25281 = (0);
var G__25282 = (0);
seq__25254_25262 = G__25279;
chunk__25255_25263 = G__25280;
count__25256_25264 = G__25281;
i__25257_25265 = G__25282;
continue;
}
} else {
}
}
break;
}

var G__25283 = seq__25250;
var G__25284 = chunk__25251;
var G__25285 = count__25252;
var G__25286 = (i__25253 + (1));
seq__25250 = G__25283;
chunk__25251 = G__25284;
count__25252 = G__25285;
i__25253 = G__25286;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25250);
if(temp__4657__auto__){
var seq__25250__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25250__$1)){
var c__19101__auto__ = cljs.core.chunk_first.call(null,seq__25250__$1);
var G__25287 = cljs.core.chunk_rest.call(null,seq__25250__$1);
var G__25288 = c__19101__auto__;
var G__25289 = cljs.core.count.call(null,c__19101__auto__);
var G__25290 = (0);
seq__25250 = G__25287;
chunk__25251 = G__25288;
count__25252 = G__25289;
i__25253 = G__25290;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25250__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25258_25291 = cljs.core.seq.call(null,requires);
var chunk__25259_25292 = null;
var count__25260_25293 = (0);
var i__25261_25294 = (0);
while(true){
if((i__25261_25294 < count__25260_25293)){
var req_25295 = cljs.core._nth.call(null,chunk__25259_25292,i__25261_25294);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25295,prov);

var G__25296 = seq__25258_25291;
var G__25297 = chunk__25259_25292;
var G__25298 = count__25260_25293;
var G__25299 = (i__25261_25294 + (1));
seq__25258_25291 = G__25296;
chunk__25259_25292 = G__25297;
count__25260_25293 = G__25298;
i__25261_25294 = G__25299;
continue;
} else {
var temp__4657__auto___25300__$1 = cljs.core.seq.call(null,seq__25258_25291);
if(temp__4657__auto___25300__$1){
var seq__25258_25301__$1 = temp__4657__auto___25300__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25258_25301__$1)){
var c__19101__auto___25302 = cljs.core.chunk_first.call(null,seq__25258_25301__$1);
var G__25303 = cljs.core.chunk_rest.call(null,seq__25258_25301__$1);
var G__25304 = c__19101__auto___25302;
var G__25305 = cljs.core.count.call(null,c__19101__auto___25302);
var G__25306 = (0);
seq__25258_25291 = G__25303;
chunk__25259_25292 = G__25304;
count__25260_25293 = G__25305;
i__25261_25294 = G__25306;
continue;
} else {
var req_25307 = cljs.core.first.call(null,seq__25258_25301__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25307,prov);

var G__25308 = cljs.core.next.call(null,seq__25258_25301__$1);
var G__25309 = null;
var G__25310 = (0);
var G__25311 = (0);
seq__25258_25291 = G__25308;
chunk__25259_25292 = G__25309;
count__25260_25293 = G__25310;
i__25261_25294 = G__25311;
continue;
}
} else {
}
}
break;
}

var G__25312 = cljs.core.next.call(null,seq__25250__$1);
var G__25313 = null;
var G__25314 = (0);
var G__25315 = (0);
seq__25250 = G__25312;
chunk__25251 = G__25313;
count__25252 = G__25314;
i__25253 = G__25315;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25320_25324 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25321_25325 = null;
var count__25322_25326 = (0);
var i__25323_25327 = (0);
while(true){
if((i__25323_25327 < count__25322_25326)){
var ns_25328 = cljs.core._nth.call(null,chunk__25321_25325,i__25323_25327);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25328);

var G__25329 = seq__25320_25324;
var G__25330 = chunk__25321_25325;
var G__25331 = count__25322_25326;
var G__25332 = (i__25323_25327 + (1));
seq__25320_25324 = G__25329;
chunk__25321_25325 = G__25330;
count__25322_25326 = G__25331;
i__25323_25327 = G__25332;
continue;
} else {
var temp__4657__auto___25333 = cljs.core.seq.call(null,seq__25320_25324);
if(temp__4657__auto___25333){
var seq__25320_25334__$1 = temp__4657__auto___25333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25320_25334__$1)){
var c__19101__auto___25335 = cljs.core.chunk_first.call(null,seq__25320_25334__$1);
var G__25336 = cljs.core.chunk_rest.call(null,seq__25320_25334__$1);
var G__25337 = c__19101__auto___25335;
var G__25338 = cljs.core.count.call(null,c__19101__auto___25335);
var G__25339 = (0);
seq__25320_25324 = G__25336;
chunk__25321_25325 = G__25337;
count__25322_25326 = G__25338;
i__25323_25327 = G__25339;
continue;
} else {
var ns_25340 = cljs.core.first.call(null,seq__25320_25334__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25340);

var G__25341 = cljs.core.next.call(null,seq__25320_25334__$1);
var G__25342 = null;
var G__25343 = (0);
var G__25344 = (0);
seq__25320_25324 = G__25341;
chunk__25321_25325 = G__25342;
count__25322_25326 = G__25343;
i__25323_25327 = G__25344;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18298__auto__ = goog.require__;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25345__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25346__i = 0, G__25346__a = new Array(arguments.length -  0);
while (G__25346__i < G__25346__a.length) {G__25346__a[G__25346__i] = arguments[G__25346__i + 0]; ++G__25346__i;}
  args = new cljs.core.IndexedSeq(G__25346__a,0);
} 
return G__25345__delegate.call(this,args);};
G__25345.cljs$lang$maxFixedArity = 0;
G__25345.cljs$lang$applyTo = (function (arglist__25347){
var args = cljs.core.seq(arglist__25347);
return G__25345__delegate(args);
});
G__25345.cljs$core$IFn$_invoke$arity$variadic = G__25345__delegate;
return G__25345;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25349 = cljs.core._EQ_;
var expr__25350 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25349.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25350))){
var path_parts = ((function (pred__25349,expr__25350){
return (function (p1__25348_SHARP_){
return clojure.string.split.call(null,p1__25348_SHARP_,/[\/\\]/);
});})(pred__25349,expr__25350))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25349,expr__25350){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25352){if((e25352 instanceof Error)){
var e = e25352;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25352;

}
}})());
});
;})(path_parts,sep,root,pred__25349,expr__25350))
} else {
if(cljs.core.truth_(pred__25349.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25350))){
return ((function (pred__25349,expr__25350){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25349,expr__25350){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25349,expr__25350))
);

return deferred.addErrback(((function (deferred,pred__25349,expr__25350){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25349,expr__25350))
);
});
;})(pred__25349,expr__25350))
} else {
return ((function (pred__25349,expr__25350){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25349,expr__25350))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25353,callback){
var map__25356 = p__25353;
var map__25356__$1 = ((((!((map__25356 == null)))?((((map__25356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25356):map__25356);
var file_msg = map__25356__$1;
var request_url = cljs.core.get.call(null,map__25356__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25356,map__25356__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25356,map__25356__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__){
return (function (state_25380){
var state_val_25381 = (state_25380[(1)]);
if((state_val_25381 === (7))){
var inst_25376 = (state_25380[(2)]);
var state_25380__$1 = state_25380;
var statearr_25382_25402 = state_25380__$1;
(statearr_25382_25402[(2)] = inst_25376);

(statearr_25382_25402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (1))){
var state_25380__$1 = state_25380;
var statearr_25383_25403 = state_25380__$1;
(statearr_25383_25403[(2)] = null);

(statearr_25383_25403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (4))){
var inst_25360 = (state_25380[(7)]);
var inst_25360__$1 = (state_25380[(2)]);
var state_25380__$1 = (function (){var statearr_25384 = state_25380;
(statearr_25384[(7)] = inst_25360__$1);

return statearr_25384;
})();
if(cljs.core.truth_(inst_25360__$1)){
var statearr_25385_25404 = state_25380__$1;
(statearr_25385_25404[(1)] = (5));

} else {
var statearr_25386_25405 = state_25380__$1;
(statearr_25386_25405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (6))){
var state_25380__$1 = state_25380;
var statearr_25387_25406 = state_25380__$1;
(statearr_25387_25406[(2)] = null);

(statearr_25387_25406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (3))){
var inst_25378 = (state_25380[(2)]);
var state_25380__$1 = state_25380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25380__$1,inst_25378);
} else {
if((state_val_25381 === (2))){
var state_25380__$1 = state_25380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25380__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25381 === (11))){
var inst_25372 = (state_25380[(2)]);
var state_25380__$1 = (function (){var statearr_25388 = state_25380;
(statearr_25388[(8)] = inst_25372);

return statearr_25388;
})();
var statearr_25389_25407 = state_25380__$1;
(statearr_25389_25407[(2)] = null);

(statearr_25389_25407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (9))){
var inst_25364 = (state_25380[(9)]);
var inst_25366 = (state_25380[(10)]);
var inst_25368 = inst_25366.call(null,inst_25364);
var state_25380__$1 = state_25380;
var statearr_25390_25408 = state_25380__$1;
(statearr_25390_25408[(2)] = inst_25368);

(statearr_25390_25408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (5))){
var inst_25360 = (state_25380[(7)]);
var inst_25362 = figwheel.client.file_reloading.blocking_load.call(null,inst_25360);
var state_25380__$1 = state_25380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25380__$1,(8),inst_25362);
} else {
if((state_val_25381 === (10))){
var inst_25364 = (state_25380[(9)]);
var inst_25370 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25364);
var state_25380__$1 = state_25380;
var statearr_25391_25409 = state_25380__$1;
(statearr_25391_25409[(2)] = inst_25370);

(statearr_25391_25409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25381 === (8))){
var inst_25360 = (state_25380[(7)]);
var inst_25366 = (state_25380[(10)]);
var inst_25364 = (state_25380[(2)]);
var inst_25365 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25366__$1 = cljs.core.get.call(null,inst_25365,inst_25360);
var state_25380__$1 = (function (){var statearr_25392 = state_25380;
(statearr_25392[(9)] = inst_25364);

(statearr_25392[(10)] = inst_25366__$1);

return statearr_25392;
})();
if(cljs.core.truth_(inst_25366__$1)){
var statearr_25393_25410 = state_25380__$1;
(statearr_25393_25410[(1)] = (9));

} else {
var statearr_25394_25411 = state_25380__$1;
(statearr_25394_25411[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20451__auto__))
;
return ((function (switch__20339__auto__,c__20451__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20340__auto__ = null;
var figwheel$client$file_reloading$state_machine__20340__auto____0 = (function (){
var statearr_25398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25398[(0)] = figwheel$client$file_reloading$state_machine__20340__auto__);

(statearr_25398[(1)] = (1));

return statearr_25398;
});
var figwheel$client$file_reloading$state_machine__20340__auto____1 = (function (state_25380){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_25380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e25399){if((e25399 instanceof Object)){
var ex__20343__auto__ = e25399;
var statearr_25400_25412 = state_25380;
(statearr_25400_25412[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25413 = state_25380;
state_25380 = G__25413;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20340__auto__ = function(state_25380){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20340__auto____1.call(this,state_25380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20340__auto____0;
figwheel$client$file_reloading$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20340__auto____1;
return figwheel$client$file_reloading$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__))
})();
var state__20453__auto__ = (function (){var statearr_25401 = f__20452__auto__.call(null);
(statearr_25401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_25401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__))
);

return c__20451__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25414,callback){
var map__25417 = p__25414;
var map__25417__$1 = ((((!((map__25417 == null)))?((((map__25417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25417):map__25417);
var file_msg = map__25417__$1;
var namespace = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25417,map__25417__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25417,map__25417__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25419){
var map__25422 = p__25419;
var map__25422__$1 = ((((!((map__25422 == null)))?((((map__25422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25422):map__25422);
var file_msg = map__25422__$1;
var namespace = cljs.core.get.call(null,map__25422__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18286__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18286__auto__){
var or__18298__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
var or__18298__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18298__auto____$1)){
return or__18298__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18286__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25424,callback){
var map__25427 = p__25424;
var map__25427__$1 = ((((!((map__25427 == null)))?((((map__25427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25427):map__25427);
var file_msg = map__25427__$1;
var request_url = cljs.core.get.call(null,map__25427__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25427__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20451__auto___25515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___25515,out){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___25515,out){
return (function (state_25497){
var state_val_25498 = (state_25497[(1)]);
if((state_val_25498 === (1))){
var inst_25475 = cljs.core.nth.call(null,files,(0),null);
var inst_25476 = cljs.core.nthnext.call(null,files,(1));
var inst_25477 = files;
var state_25497__$1 = (function (){var statearr_25499 = state_25497;
(statearr_25499[(7)] = inst_25477);

(statearr_25499[(8)] = inst_25475);

(statearr_25499[(9)] = inst_25476);

return statearr_25499;
})();
var statearr_25500_25516 = state_25497__$1;
(statearr_25500_25516[(2)] = null);

(statearr_25500_25516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (2))){
var inst_25477 = (state_25497[(7)]);
var inst_25480 = (state_25497[(10)]);
var inst_25480__$1 = cljs.core.nth.call(null,inst_25477,(0),null);
var inst_25481 = cljs.core.nthnext.call(null,inst_25477,(1));
var inst_25482 = (inst_25480__$1 == null);
var inst_25483 = cljs.core.not.call(null,inst_25482);
var state_25497__$1 = (function (){var statearr_25501 = state_25497;
(statearr_25501[(10)] = inst_25480__$1);

(statearr_25501[(11)] = inst_25481);

return statearr_25501;
})();
if(inst_25483){
var statearr_25502_25517 = state_25497__$1;
(statearr_25502_25517[(1)] = (4));

} else {
var statearr_25503_25518 = state_25497__$1;
(statearr_25503_25518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (3))){
var inst_25495 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25497__$1,inst_25495);
} else {
if((state_val_25498 === (4))){
var inst_25480 = (state_25497[(10)]);
var inst_25485 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25480);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25497__$1,(7),inst_25485);
} else {
if((state_val_25498 === (5))){
var inst_25491 = cljs.core.async.close_BANG_.call(null,out);
var state_25497__$1 = state_25497;
var statearr_25504_25519 = state_25497__$1;
(statearr_25504_25519[(2)] = inst_25491);

(statearr_25504_25519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (6))){
var inst_25493 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25505_25520 = state_25497__$1;
(statearr_25505_25520[(2)] = inst_25493);

(statearr_25505_25520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (7))){
var inst_25481 = (state_25497[(11)]);
var inst_25487 = (state_25497[(2)]);
var inst_25488 = cljs.core.async.put_BANG_.call(null,out,inst_25487);
var inst_25477 = inst_25481;
var state_25497__$1 = (function (){var statearr_25506 = state_25497;
(statearr_25506[(7)] = inst_25477);

(statearr_25506[(12)] = inst_25488);

return statearr_25506;
})();
var statearr_25507_25521 = state_25497__$1;
(statearr_25507_25521[(2)] = null);

(statearr_25507_25521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20451__auto___25515,out))
;
return ((function (switch__20339__auto__,c__20451__auto___25515,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto____0 = (function (){
var statearr_25511 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25511[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto__);

(statearr_25511[(1)] = (1));

return statearr_25511;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto____1 = (function (state_25497){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_25497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e25512){if((e25512 instanceof Object)){
var ex__20343__auto__ = e25512;
var statearr_25513_25522 = state_25497;
(statearr_25513_25522[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25523 = state_25497;
state_25497 = G__25523;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto__ = function(state_25497){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto____1.call(this,state_25497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___25515,out))
})();
var state__20453__auto__ = (function (){var statearr_25514 = f__20452__auto__.call(null);
(statearr_25514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___25515);

return statearr_25514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___25515,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25524,opts){
var map__25528 = p__25524;
var map__25528__$1 = ((((!((map__25528 == null)))?((((map__25528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25528):map__25528);
var eval_body__$1 = cljs.core.get.call(null,map__25528__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25528__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18286__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18286__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18286__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25530){var e = e25530;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25531_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25531_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25536){
var vec__25537 = p__25536;
var k = cljs.core.nth.call(null,vec__25537,(0),null);
var v = cljs.core.nth.call(null,vec__25537,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25538){
var vec__25539 = p__25538;
var k = cljs.core.nth.call(null,vec__25539,(0),null);
var v = cljs.core.nth.call(null,vec__25539,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25543,p__25544){
var map__25791 = p__25543;
var map__25791__$1 = ((((!((map__25791 == null)))?((((map__25791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25791):map__25791);
var opts = map__25791__$1;
var before_jsload = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25792 = p__25544;
var map__25792__$1 = ((((!((map__25792 == null)))?((((map__25792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25792):map__25792);
var msg = map__25792__$1;
var files = cljs.core.get.call(null,map__25792__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25792__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25792__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25945){
var state_val_25946 = (state_25945[(1)]);
if((state_val_25946 === (7))){
var inst_25807 = (state_25945[(7)]);
var inst_25809 = (state_25945[(8)]);
var inst_25806 = (state_25945[(9)]);
var inst_25808 = (state_25945[(10)]);
var inst_25814 = cljs.core._nth.call(null,inst_25807,inst_25809);
var inst_25815 = figwheel.client.file_reloading.eval_body.call(null,inst_25814,opts);
var inst_25816 = (inst_25809 + (1));
var tmp25947 = inst_25807;
var tmp25948 = inst_25806;
var tmp25949 = inst_25808;
var inst_25806__$1 = tmp25948;
var inst_25807__$1 = tmp25947;
var inst_25808__$1 = tmp25949;
var inst_25809__$1 = inst_25816;
var state_25945__$1 = (function (){var statearr_25950 = state_25945;
(statearr_25950[(7)] = inst_25807__$1);

(statearr_25950[(8)] = inst_25809__$1);

(statearr_25950[(9)] = inst_25806__$1);

(statearr_25950[(10)] = inst_25808__$1);

(statearr_25950[(11)] = inst_25815);

return statearr_25950;
})();
var statearr_25951_26037 = state_25945__$1;
(statearr_25951_26037[(2)] = null);

(statearr_25951_26037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (20))){
var inst_25849 = (state_25945[(12)]);
var inst_25857 = figwheel.client.file_reloading.sort_files.call(null,inst_25849);
var state_25945__$1 = state_25945;
var statearr_25952_26038 = state_25945__$1;
(statearr_25952_26038[(2)] = inst_25857);

(statearr_25952_26038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (27))){
var state_25945__$1 = state_25945;
var statearr_25953_26039 = state_25945__$1;
(statearr_25953_26039[(2)] = null);

(statearr_25953_26039[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (1))){
var inst_25798 = (state_25945[(13)]);
var inst_25795 = before_jsload.call(null,files);
var inst_25796 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25797 = (function (){return ((function (inst_25798,inst_25795,inst_25796,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25540_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25540_SHARP_);
});
;})(inst_25798,inst_25795,inst_25796,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25798__$1 = cljs.core.filter.call(null,inst_25797,files);
var inst_25799 = cljs.core.not_empty.call(null,inst_25798__$1);
var state_25945__$1 = (function (){var statearr_25954 = state_25945;
(statearr_25954[(14)] = inst_25796);

(statearr_25954[(13)] = inst_25798__$1);

(statearr_25954[(15)] = inst_25795);

return statearr_25954;
})();
if(cljs.core.truth_(inst_25799)){
var statearr_25955_26040 = state_25945__$1;
(statearr_25955_26040[(1)] = (2));

} else {
var statearr_25956_26041 = state_25945__$1;
(statearr_25956_26041[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (24))){
var state_25945__$1 = state_25945;
var statearr_25957_26042 = state_25945__$1;
(statearr_25957_26042[(2)] = null);

(statearr_25957_26042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (39))){
var inst_25899 = (state_25945[(16)]);
var state_25945__$1 = state_25945;
var statearr_25958_26043 = state_25945__$1;
(statearr_25958_26043[(2)] = inst_25899);

(statearr_25958_26043[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (46))){
var inst_25940 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25959_26044 = state_25945__$1;
(statearr_25959_26044[(2)] = inst_25940);

(statearr_25959_26044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (4))){
var inst_25843 = (state_25945[(2)]);
var inst_25844 = cljs.core.List.EMPTY;
var inst_25845 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25844);
var inst_25846 = (function (){return ((function (inst_25843,inst_25844,inst_25845,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25541_SHARP_){
var and__18286__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25541_SHARP_);
if(cljs.core.truth_(and__18286__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25541_SHARP_));
} else {
return and__18286__auto__;
}
});
;})(inst_25843,inst_25844,inst_25845,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25847 = cljs.core.filter.call(null,inst_25846,files);
var inst_25848 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25849 = cljs.core.concat.call(null,inst_25847,inst_25848);
var state_25945__$1 = (function (){var statearr_25960 = state_25945;
(statearr_25960[(17)] = inst_25843);

(statearr_25960[(12)] = inst_25849);

(statearr_25960[(18)] = inst_25845);

return statearr_25960;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25961_26045 = state_25945__$1;
(statearr_25961_26045[(1)] = (16));

} else {
var statearr_25962_26046 = state_25945__$1;
(statearr_25962_26046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (15))){
var inst_25833 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25963_26047 = state_25945__$1;
(statearr_25963_26047[(2)] = inst_25833);

(statearr_25963_26047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (21))){
var inst_25859 = (state_25945[(19)]);
var inst_25859__$1 = (state_25945[(2)]);
var inst_25860 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25859__$1);
var state_25945__$1 = (function (){var statearr_25964 = state_25945;
(statearr_25964[(19)] = inst_25859__$1);

return statearr_25964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25945__$1,(22),inst_25860);
} else {
if((state_val_25946 === (31))){
var inst_25943 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25945__$1,inst_25943);
} else {
if((state_val_25946 === (32))){
var inst_25899 = (state_25945[(16)]);
var inst_25904 = inst_25899.cljs$lang$protocol_mask$partition0$;
var inst_25905 = (inst_25904 & (64));
var inst_25906 = inst_25899.cljs$core$ISeq$;
var inst_25907 = (inst_25905) || (inst_25906);
var state_25945__$1 = state_25945;
if(cljs.core.truth_(inst_25907)){
var statearr_25965_26048 = state_25945__$1;
(statearr_25965_26048[(1)] = (35));

} else {
var statearr_25966_26049 = state_25945__$1;
(statearr_25966_26049[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (40))){
var inst_25920 = (state_25945[(20)]);
var inst_25919 = (state_25945[(2)]);
var inst_25920__$1 = cljs.core.get.call(null,inst_25919,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25921 = cljs.core.get.call(null,inst_25919,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25922 = cljs.core.not_empty.call(null,inst_25920__$1);
var state_25945__$1 = (function (){var statearr_25967 = state_25945;
(statearr_25967[(20)] = inst_25920__$1);

(statearr_25967[(21)] = inst_25921);

return statearr_25967;
})();
if(cljs.core.truth_(inst_25922)){
var statearr_25968_26050 = state_25945__$1;
(statearr_25968_26050[(1)] = (41));

} else {
var statearr_25969_26051 = state_25945__$1;
(statearr_25969_26051[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (33))){
var state_25945__$1 = state_25945;
var statearr_25970_26052 = state_25945__$1;
(statearr_25970_26052[(2)] = false);

(statearr_25970_26052[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (13))){
var inst_25819 = (state_25945[(22)]);
var inst_25823 = cljs.core.chunk_first.call(null,inst_25819);
var inst_25824 = cljs.core.chunk_rest.call(null,inst_25819);
var inst_25825 = cljs.core.count.call(null,inst_25823);
var inst_25806 = inst_25824;
var inst_25807 = inst_25823;
var inst_25808 = inst_25825;
var inst_25809 = (0);
var state_25945__$1 = (function (){var statearr_25971 = state_25945;
(statearr_25971[(7)] = inst_25807);

(statearr_25971[(8)] = inst_25809);

(statearr_25971[(9)] = inst_25806);

(statearr_25971[(10)] = inst_25808);

return statearr_25971;
})();
var statearr_25972_26053 = state_25945__$1;
(statearr_25972_26053[(2)] = null);

(statearr_25972_26053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (22))){
var inst_25859 = (state_25945[(19)]);
var inst_25867 = (state_25945[(23)]);
var inst_25863 = (state_25945[(24)]);
var inst_25862 = (state_25945[(25)]);
var inst_25862__$1 = (state_25945[(2)]);
var inst_25863__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25862__$1);
var inst_25864 = (function (){var all_files = inst_25859;
var res_SINGLEQUOTE_ = inst_25862__$1;
var res = inst_25863__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25859,inst_25867,inst_25863,inst_25862,inst_25862__$1,inst_25863__$1,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25542_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25542_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25859,inst_25867,inst_25863,inst_25862,inst_25862__$1,inst_25863__$1,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25865 = cljs.core.filter.call(null,inst_25864,inst_25862__$1);
var inst_25866 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25867__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25866);
var inst_25868 = cljs.core.not_empty.call(null,inst_25867__$1);
var state_25945__$1 = (function (){var statearr_25973 = state_25945;
(statearr_25973[(23)] = inst_25867__$1);

(statearr_25973[(24)] = inst_25863__$1);

(statearr_25973[(26)] = inst_25865);

(statearr_25973[(25)] = inst_25862__$1);

return statearr_25973;
})();
if(cljs.core.truth_(inst_25868)){
var statearr_25974_26054 = state_25945__$1;
(statearr_25974_26054[(1)] = (23));

} else {
var statearr_25975_26055 = state_25945__$1;
(statearr_25975_26055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (36))){
var state_25945__$1 = state_25945;
var statearr_25976_26056 = state_25945__$1;
(statearr_25976_26056[(2)] = false);

(statearr_25976_26056[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (41))){
var inst_25920 = (state_25945[(20)]);
var inst_25924 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25925 = cljs.core.map.call(null,inst_25924,inst_25920);
var inst_25926 = cljs.core.pr_str.call(null,inst_25925);
var inst_25927 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25926)].join('');
var inst_25928 = figwheel.client.utils.log.call(null,inst_25927);
var state_25945__$1 = state_25945;
var statearr_25977_26057 = state_25945__$1;
(statearr_25977_26057[(2)] = inst_25928);

(statearr_25977_26057[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (43))){
var inst_25921 = (state_25945[(21)]);
var inst_25931 = (state_25945[(2)]);
var inst_25932 = cljs.core.not_empty.call(null,inst_25921);
var state_25945__$1 = (function (){var statearr_25978 = state_25945;
(statearr_25978[(27)] = inst_25931);

return statearr_25978;
})();
if(cljs.core.truth_(inst_25932)){
var statearr_25979_26058 = state_25945__$1;
(statearr_25979_26058[(1)] = (44));

} else {
var statearr_25980_26059 = state_25945__$1;
(statearr_25980_26059[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (29))){
var inst_25859 = (state_25945[(19)]);
var inst_25867 = (state_25945[(23)]);
var inst_25863 = (state_25945[(24)]);
var inst_25899 = (state_25945[(16)]);
var inst_25865 = (state_25945[(26)]);
var inst_25862 = (state_25945[(25)]);
var inst_25895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25898 = (function (){var all_files = inst_25859;
var res_SINGLEQUOTE_ = inst_25862;
var res = inst_25863;
var files_not_loaded = inst_25865;
var dependencies_that_loaded = inst_25867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25859,inst_25867,inst_25863,inst_25899,inst_25865,inst_25862,inst_25895,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25897){
var map__25981 = p__25897;
var map__25981__$1 = ((((!((map__25981 == null)))?((((map__25981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25981):map__25981);
var namespace = cljs.core.get.call(null,map__25981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25859,inst_25867,inst_25863,inst_25899,inst_25865,inst_25862,inst_25895,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25899__$1 = cljs.core.group_by.call(null,inst_25898,inst_25865);
var inst_25901 = (inst_25899__$1 == null);
var inst_25902 = cljs.core.not.call(null,inst_25901);
var state_25945__$1 = (function (){var statearr_25983 = state_25945;
(statearr_25983[(16)] = inst_25899__$1);

(statearr_25983[(28)] = inst_25895);

return statearr_25983;
})();
if(inst_25902){
var statearr_25984_26060 = state_25945__$1;
(statearr_25984_26060[(1)] = (32));

} else {
var statearr_25985_26061 = state_25945__$1;
(statearr_25985_26061[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (44))){
var inst_25921 = (state_25945[(21)]);
var inst_25934 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25921);
var inst_25935 = cljs.core.pr_str.call(null,inst_25934);
var inst_25936 = [cljs.core.str("not required: "),cljs.core.str(inst_25935)].join('');
var inst_25937 = figwheel.client.utils.log.call(null,inst_25936);
var state_25945__$1 = state_25945;
var statearr_25986_26062 = state_25945__$1;
(statearr_25986_26062[(2)] = inst_25937);

(statearr_25986_26062[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (6))){
var inst_25840 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25987_26063 = state_25945__$1;
(statearr_25987_26063[(2)] = inst_25840);

(statearr_25987_26063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (28))){
var inst_25865 = (state_25945[(26)]);
var inst_25892 = (state_25945[(2)]);
var inst_25893 = cljs.core.not_empty.call(null,inst_25865);
var state_25945__$1 = (function (){var statearr_25988 = state_25945;
(statearr_25988[(29)] = inst_25892);

return statearr_25988;
})();
if(cljs.core.truth_(inst_25893)){
var statearr_25989_26064 = state_25945__$1;
(statearr_25989_26064[(1)] = (29));

} else {
var statearr_25990_26065 = state_25945__$1;
(statearr_25990_26065[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (25))){
var inst_25863 = (state_25945[(24)]);
var inst_25879 = (state_25945[(2)]);
var inst_25880 = cljs.core.not_empty.call(null,inst_25863);
var state_25945__$1 = (function (){var statearr_25991 = state_25945;
(statearr_25991[(30)] = inst_25879);

return statearr_25991;
})();
if(cljs.core.truth_(inst_25880)){
var statearr_25992_26066 = state_25945__$1;
(statearr_25992_26066[(1)] = (26));

} else {
var statearr_25993_26067 = state_25945__$1;
(statearr_25993_26067[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (34))){
var inst_25914 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
if(cljs.core.truth_(inst_25914)){
var statearr_25994_26068 = state_25945__$1;
(statearr_25994_26068[(1)] = (38));

} else {
var statearr_25995_26069 = state_25945__$1;
(statearr_25995_26069[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (17))){
var state_25945__$1 = state_25945;
var statearr_25996_26070 = state_25945__$1;
(statearr_25996_26070[(2)] = recompile_dependents);

(statearr_25996_26070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (3))){
var state_25945__$1 = state_25945;
var statearr_25997_26071 = state_25945__$1;
(statearr_25997_26071[(2)] = null);

(statearr_25997_26071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (12))){
var inst_25836 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25998_26072 = state_25945__$1;
(statearr_25998_26072[(2)] = inst_25836);

(statearr_25998_26072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (2))){
var inst_25798 = (state_25945[(13)]);
var inst_25805 = cljs.core.seq.call(null,inst_25798);
var inst_25806 = inst_25805;
var inst_25807 = null;
var inst_25808 = (0);
var inst_25809 = (0);
var state_25945__$1 = (function (){var statearr_25999 = state_25945;
(statearr_25999[(7)] = inst_25807);

(statearr_25999[(8)] = inst_25809);

(statearr_25999[(9)] = inst_25806);

(statearr_25999[(10)] = inst_25808);

return statearr_25999;
})();
var statearr_26000_26073 = state_25945__$1;
(statearr_26000_26073[(2)] = null);

(statearr_26000_26073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (23))){
var inst_25859 = (state_25945[(19)]);
var inst_25867 = (state_25945[(23)]);
var inst_25863 = (state_25945[(24)]);
var inst_25865 = (state_25945[(26)]);
var inst_25862 = (state_25945[(25)]);
var inst_25870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25872 = (function (){var all_files = inst_25859;
var res_SINGLEQUOTE_ = inst_25862;
var res = inst_25863;
var files_not_loaded = inst_25865;
var dependencies_that_loaded = inst_25867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25859,inst_25867,inst_25863,inst_25865,inst_25862,inst_25870,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25871){
var map__26001 = p__25871;
var map__26001__$1 = ((((!((map__26001 == null)))?((((map__26001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26001):map__26001);
var request_url = cljs.core.get.call(null,map__26001__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25859,inst_25867,inst_25863,inst_25865,inst_25862,inst_25870,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25873 = cljs.core.reverse.call(null,inst_25867);
var inst_25874 = cljs.core.map.call(null,inst_25872,inst_25873);
var inst_25875 = cljs.core.pr_str.call(null,inst_25874);
var inst_25876 = figwheel.client.utils.log.call(null,inst_25875);
var state_25945__$1 = (function (){var statearr_26003 = state_25945;
(statearr_26003[(31)] = inst_25870);

return statearr_26003;
})();
var statearr_26004_26074 = state_25945__$1;
(statearr_26004_26074[(2)] = inst_25876);

(statearr_26004_26074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (35))){
var state_25945__$1 = state_25945;
var statearr_26005_26075 = state_25945__$1;
(statearr_26005_26075[(2)] = true);

(statearr_26005_26075[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (19))){
var inst_25849 = (state_25945[(12)]);
var inst_25855 = figwheel.client.file_reloading.expand_files.call(null,inst_25849);
var state_25945__$1 = state_25945;
var statearr_26006_26076 = state_25945__$1;
(statearr_26006_26076[(2)] = inst_25855);

(statearr_26006_26076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (11))){
var state_25945__$1 = state_25945;
var statearr_26007_26077 = state_25945__$1;
(statearr_26007_26077[(2)] = null);

(statearr_26007_26077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (9))){
var inst_25838 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_26008_26078 = state_25945__$1;
(statearr_26008_26078[(2)] = inst_25838);

(statearr_26008_26078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (5))){
var inst_25809 = (state_25945[(8)]);
var inst_25808 = (state_25945[(10)]);
var inst_25811 = (inst_25809 < inst_25808);
var inst_25812 = inst_25811;
var state_25945__$1 = state_25945;
if(cljs.core.truth_(inst_25812)){
var statearr_26009_26079 = state_25945__$1;
(statearr_26009_26079[(1)] = (7));

} else {
var statearr_26010_26080 = state_25945__$1;
(statearr_26010_26080[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (14))){
var inst_25819 = (state_25945[(22)]);
var inst_25828 = cljs.core.first.call(null,inst_25819);
var inst_25829 = figwheel.client.file_reloading.eval_body.call(null,inst_25828,opts);
var inst_25830 = cljs.core.next.call(null,inst_25819);
var inst_25806 = inst_25830;
var inst_25807 = null;
var inst_25808 = (0);
var inst_25809 = (0);
var state_25945__$1 = (function (){var statearr_26011 = state_25945;
(statearr_26011[(7)] = inst_25807);

(statearr_26011[(8)] = inst_25809);

(statearr_26011[(32)] = inst_25829);

(statearr_26011[(9)] = inst_25806);

(statearr_26011[(10)] = inst_25808);

return statearr_26011;
})();
var statearr_26012_26081 = state_25945__$1;
(statearr_26012_26081[(2)] = null);

(statearr_26012_26081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (45))){
var state_25945__$1 = state_25945;
var statearr_26013_26082 = state_25945__$1;
(statearr_26013_26082[(2)] = null);

(statearr_26013_26082[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (26))){
var inst_25859 = (state_25945[(19)]);
var inst_25867 = (state_25945[(23)]);
var inst_25863 = (state_25945[(24)]);
var inst_25865 = (state_25945[(26)]);
var inst_25862 = (state_25945[(25)]);
var inst_25882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25884 = (function (){var all_files = inst_25859;
var res_SINGLEQUOTE_ = inst_25862;
var res = inst_25863;
var files_not_loaded = inst_25865;
var dependencies_that_loaded = inst_25867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25859,inst_25867,inst_25863,inst_25865,inst_25862,inst_25882,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25883){
var map__26014 = p__25883;
var map__26014__$1 = ((((!((map__26014 == null)))?((((map__26014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26014):map__26014);
var namespace = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25859,inst_25867,inst_25863,inst_25865,inst_25862,inst_25882,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25885 = cljs.core.map.call(null,inst_25884,inst_25863);
var inst_25886 = cljs.core.pr_str.call(null,inst_25885);
var inst_25887 = figwheel.client.utils.log.call(null,inst_25886);
var inst_25888 = (function (){var all_files = inst_25859;
var res_SINGLEQUOTE_ = inst_25862;
var res = inst_25863;
var files_not_loaded = inst_25865;
var dependencies_that_loaded = inst_25867;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25859,inst_25867,inst_25863,inst_25865,inst_25862,inst_25882,inst_25884,inst_25885,inst_25886,inst_25887,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25859,inst_25867,inst_25863,inst_25865,inst_25862,inst_25882,inst_25884,inst_25885,inst_25886,inst_25887,state_val_25946,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25889 = setTimeout(inst_25888,(10));
var state_25945__$1 = (function (){var statearr_26016 = state_25945;
(statearr_26016[(33)] = inst_25887);

(statearr_26016[(34)] = inst_25882);

return statearr_26016;
})();
var statearr_26017_26083 = state_25945__$1;
(statearr_26017_26083[(2)] = inst_25889);

(statearr_26017_26083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (16))){
var state_25945__$1 = state_25945;
var statearr_26018_26084 = state_25945__$1;
(statearr_26018_26084[(2)] = reload_dependents);

(statearr_26018_26084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (38))){
var inst_25899 = (state_25945[(16)]);
var inst_25916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25899);
var state_25945__$1 = state_25945;
var statearr_26019_26085 = state_25945__$1;
(statearr_26019_26085[(2)] = inst_25916);

(statearr_26019_26085[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (30))){
var state_25945__$1 = state_25945;
var statearr_26020_26086 = state_25945__$1;
(statearr_26020_26086[(2)] = null);

(statearr_26020_26086[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (10))){
var inst_25819 = (state_25945[(22)]);
var inst_25821 = cljs.core.chunked_seq_QMARK_.call(null,inst_25819);
var state_25945__$1 = state_25945;
if(inst_25821){
var statearr_26021_26087 = state_25945__$1;
(statearr_26021_26087[(1)] = (13));

} else {
var statearr_26022_26088 = state_25945__$1;
(statearr_26022_26088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (18))){
var inst_25853 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
if(cljs.core.truth_(inst_25853)){
var statearr_26023_26089 = state_25945__$1;
(statearr_26023_26089[(1)] = (19));

} else {
var statearr_26024_26090 = state_25945__$1;
(statearr_26024_26090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (42))){
var state_25945__$1 = state_25945;
var statearr_26025_26091 = state_25945__$1;
(statearr_26025_26091[(2)] = null);

(statearr_26025_26091[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (37))){
var inst_25911 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_26026_26092 = state_25945__$1;
(statearr_26026_26092[(2)] = inst_25911);

(statearr_26026_26092[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (8))){
var inst_25819 = (state_25945[(22)]);
var inst_25806 = (state_25945[(9)]);
var inst_25819__$1 = cljs.core.seq.call(null,inst_25806);
var state_25945__$1 = (function (){var statearr_26027 = state_25945;
(statearr_26027[(22)] = inst_25819__$1);

return statearr_26027;
})();
if(inst_25819__$1){
var statearr_26028_26093 = state_25945__$1;
(statearr_26028_26093[(1)] = (10));

} else {
var statearr_26029_26094 = state_25945__$1;
(statearr_26029_26094[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20339__auto__,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto____0 = (function (){
var statearr_26033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26033[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto__);

(statearr_26033[(1)] = (1));

return statearr_26033;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto____1 = (function (state_25945){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_25945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e26034){if((e26034 instanceof Object)){
var ex__20343__auto__ = e26034;
var statearr_26035_26095 = state_25945;
(statearr_26035_26095[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26096 = state_25945;
state_25945 = G__26096;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto__ = function(state_25945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto____1.call(this,state_25945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20453__auto__ = (function (){var statearr_26036 = f__20452__auto__.call(null);
(statearr_26036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_26036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__,map__25791,map__25791__$1,opts,before_jsload,on_jsload,reload_dependents,map__25792,map__25792__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20451__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26099,link){
var map__26102 = p__26099;
var map__26102__$1 = ((((!((map__26102 == null)))?((((map__26102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26102):map__26102);
var file = cljs.core.get.call(null,map__26102__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26102,map__26102__$1,file){
return (function (p1__26097_SHARP_,p2__26098_SHARP_){
if(cljs.core._EQ_.call(null,p1__26097_SHARP_,p2__26098_SHARP_)){
return p1__26097_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26102,map__26102__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26108){
var map__26109 = p__26108;
var map__26109__$1 = ((((!((map__26109 == null)))?((((map__26109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26109):map__26109);
var match_length = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26104_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26104_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26111 = [];
var len__19356__auto___26114 = arguments.length;
var i__19357__auto___26115 = (0);
while(true){
if((i__19357__auto___26115 < len__19356__auto___26114)){
args26111.push((arguments[i__19357__auto___26115]));

var G__26116 = (i__19357__auto___26115 + (1));
i__19357__auto___26115 = G__26116;
continue;
} else {
}
break;
}

var G__26113 = args26111.length;
switch (G__26113) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26111.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26118_SHARP_,p2__26119_SHARP_){
return cljs.core.assoc.call(null,p1__26118_SHARP_,cljs.core.get.call(null,p2__26119_SHARP_,key),p2__26119_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26120){
var map__26123 = p__26120;
var map__26123__$1 = ((((!((map__26123 == null)))?((((map__26123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26123):map__26123);
var f_data = map__26123__$1;
var file = cljs.core.get.call(null,map__26123__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26125,files_msg){
var map__26132 = p__26125;
var map__26132__$1 = ((((!((map__26132 == null)))?((((map__26132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26132):map__26132);
var opts = map__26132__$1;
var on_cssload = cljs.core.get.call(null,map__26132__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26134_26138 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26135_26139 = null;
var count__26136_26140 = (0);
var i__26137_26141 = (0);
while(true){
if((i__26137_26141 < count__26136_26140)){
var f_26142 = cljs.core._nth.call(null,chunk__26135_26139,i__26137_26141);
figwheel.client.file_reloading.reload_css_file.call(null,f_26142);

var G__26143 = seq__26134_26138;
var G__26144 = chunk__26135_26139;
var G__26145 = count__26136_26140;
var G__26146 = (i__26137_26141 + (1));
seq__26134_26138 = G__26143;
chunk__26135_26139 = G__26144;
count__26136_26140 = G__26145;
i__26137_26141 = G__26146;
continue;
} else {
var temp__4657__auto___26147 = cljs.core.seq.call(null,seq__26134_26138);
if(temp__4657__auto___26147){
var seq__26134_26148__$1 = temp__4657__auto___26147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26134_26148__$1)){
var c__19101__auto___26149 = cljs.core.chunk_first.call(null,seq__26134_26148__$1);
var G__26150 = cljs.core.chunk_rest.call(null,seq__26134_26148__$1);
var G__26151 = c__19101__auto___26149;
var G__26152 = cljs.core.count.call(null,c__19101__auto___26149);
var G__26153 = (0);
seq__26134_26138 = G__26150;
chunk__26135_26139 = G__26151;
count__26136_26140 = G__26152;
i__26137_26141 = G__26153;
continue;
} else {
var f_26154 = cljs.core.first.call(null,seq__26134_26148__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26154);

var G__26155 = cljs.core.next.call(null,seq__26134_26148__$1);
var G__26156 = null;
var G__26157 = (0);
var G__26158 = (0);
seq__26134_26138 = G__26155;
chunk__26135_26139 = G__26156;
count__26136_26140 = G__26157;
i__26137_26141 = G__26158;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26132,map__26132__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26132,map__26132__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map