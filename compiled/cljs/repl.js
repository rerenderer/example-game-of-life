// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26175_26189 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26176_26190 = null;
var count__26177_26191 = (0);
var i__26178_26192 = (0);
while(true){
if((i__26178_26192 < count__26177_26191)){
var f_26193 = cljs.core._nth.call(null,chunk__26176_26190,i__26178_26192);
cljs.core.println.call(null,"  ",f_26193);

var G__26194 = seq__26175_26189;
var G__26195 = chunk__26176_26190;
var G__26196 = count__26177_26191;
var G__26197 = (i__26178_26192 + (1));
seq__26175_26189 = G__26194;
chunk__26176_26190 = G__26195;
count__26177_26191 = G__26196;
i__26178_26192 = G__26197;
continue;
} else {
var temp__4657__auto___26198 = cljs.core.seq.call(null,seq__26175_26189);
if(temp__4657__auto___26198){
var seq__26175_26199__$1 = temp__4657__auto___26198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26175_26199__$1)){
var c__19101__auto___26200 = cljs.core.chunk_first.call(null,seq__26175_26199__$1);
var G__26201 = cljs.core.chunk_rest.call(null,seq__26175_26199__$1);
var G__26202 = c__19101__auto___26200;
var G__26203 = cljs.core.count.call(null,c__19101__auto___26200);
var G__26204 = (0);
seq__26175_26189 = G__26201;
chunk__26176_26190 = G__26202;
count__26177_26191 = G__26203;
i__26178_26192 = G__26204;
continue;
} else {
var f_26205 = cljs.core.first.call(null,seq__26175_26199__$1);
cljs.core.println.call(null,"  ",f_26205);

var G__26206 = cljs.core.next.call(null,seq__26175_26199__$1);
var G__26207 = null;
var G__26208 = (0);
var G__26209 = (0);
seq__26175_26189 = G__26206;
chunk__26176_26190 = G__26207;
count__26177_26191 = G__26208;
i__26178_26192 = G__26209;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26210 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18298__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26210);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26210)))?cljs.core.second.call(null,arglists_26210):arglists_26210));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26179 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26180 = null;
var count__26181 = (0);
var i__26182 = (0);
while(true){
if((i__26182 < count__26181)){
var vec__26183 = cljs.core._nth.call(null,chunk__26180,i__26182);
var name = cljs.core.nth.call(null,vec__26183,(0),null);
var map__26184 = cljs.core.nth.call(null,vec__26183,(1),null);
var map__26184__$1 = ((((!((map__26184 == null)))?((((map__26184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26184):map__26184);
var doc = cljs.core.get.call(null,map__26184__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26184__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26211 = seq__26179;
var G__26212 = chunk__26180;
var G__26213 = count__26181;
var G__26214 = (i__26182 + (1));
seq__26179 = G__26211;
chunk__26180 = G__26212;
count__26181 = G__26213;
i__26182 = G__26214;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26179);
if(temp__4657__auto__){
var seq__26179__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26179__$1)){
var c__19101__auto__ = cljs.core.chunk_first.call(null,seq__26179__$1);
var G__26215 = cljs.core.chunk_rest.call(null,seq__26179__$1);
var G__26216 = c__19101__auto__;
var G__26217 = cljs.core.count.call(null,c__19101__auto__);
var G__26218 = (0);
seq__26179 = G__26215;
chunk__26180 = G__26216;
count__26181 = G__26217;
i__26182 = G__26218;
continue;
} else {
var vec__26186 = cljs.core.first.call(null,seq__26179__$1);
var name = cljs.core.nth.call(null,vec__26186,(0),null);
var map__26187 = cljs.core.nth.call(null,vec__26186,(1),null);
var map__26187__$1 = ((((!((map__26187 == null)))?((((map__26187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26187):map__26187);
var doc = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26219 = cljs.core.next.call(null,seq__26179__$1);
var G__26220 = null;
var G__26221 = (0);
var G__26222 = (0);
seq__26179 = G__26219;
chunk__26180 = G__26220;
count__26181 = G__26221;
i__26182 = G__26222;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map