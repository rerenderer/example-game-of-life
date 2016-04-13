// Compiled by ClojureScript 1.7.228 {}
goog.provide('org.rerenderer.game_of_life.view');
goog.require('cljs.core');
goog.require('rerenderer.primitives');
org.rerenderer.game_of_life.view.cell_size = (40);
org.rerenderer.game_of_life.view.cell = (function org$rerenderer$game_of_life$view$cell(p__29680){
var vec__29682 = p__29680;
var x = cljs.core.nth.call(null,vec__29682,(0),null);
var y = cljs.core.nth.call(null,vec__29682,(1),null);
var cell_x = (org.rerenderer.game_of_life.view.cell_size * x);
var cell_y = (org.rerenderer.game_of_life.view.cell_size * y);
return rerenderer.primitives.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),cell_x,new cljs.core.Keyword(null,"y","y",-1757859776),cell_y,new cljs.core.Keyword(null,"width","width",-384071477),org.rerenderer.game_of_life.view.cell_size,new cljs.core.Keyword(null,"height","height",1025178622),org.rerenderer.game_of_life.view.cell_size,new cljs.core.Keyword(null,"color","color",1011675173),"green"], null));
});
org.rerenderer.game_of_life.view.root_view = (function org$rerenderer$game_of_life$view$root_view(p__29683){
var map__29690 = p__29683;
var map__29690__$1 = ((((!((map__29690 == null)))?((((map__29690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29690):map__29690);
var cells = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
return rerenderer.primitives.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1920),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),(function (){var iter__19070__auto__ = ((function (map__29690,map__29690__$1,cells){
return (function org$rerenderer$game_of_life$view$root_view_$_iter__29692(s__29693){
return (new cljs.core.LazySeq(null,((function (map__29690,map__29690__$1,cells){
return (function (){
var s__29693__$1 = s__29693;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29693__$1);
if(temp__4657__auto__){
var s__29693__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29693__$2)){
var c__19068__auto__ = cljs.core.chunk_first.call(null,s__29693__$2);
var size__19069__auto__ = cljs.core.count.call(null,c__19068__auto__);
var b__29695 = cljs.core.chunk_buffer.call(null,size__19069__auto__);
if((function (){var i__29694 = (0);
while(true){
if((i__29694 < size__19069__auto__)){
var cell_data = cljs.core._nth.call(null,c__19068__auto__,i__29694);
cljs.core.chunk_append.call(null,b__29695,org.rerenderer.game_of_life.view.cell.call(null,cell_data));

var G__29696 = (i__29694 + (1));
i__29694 = G__29696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29695),org$rerenderer$game_of_life$view$root_view_$_iter__29692.call(null,cljs.core.chunk_rest.call(null,s__29693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29695),null);
}
} else {
var cell_data = cljs.core.first.call(null,s__29693__$2);
return cljs.core.cons.call(null,org.rerenderer.game_of_life.view.cell.call(null,cell_data),org$rerenderer$game_of_life$view$root_view_$_iter__29692.call(null,cljs.core.rest.call(null,s__29693__$2)));
}
} else {
return null;
}
break;
}
});})(map__29690,map__29690__$1,cells))
,null,null));
});})(map__29690,map__29690__$1,cells))
;
return iter__19070__auto__.call(null,cells);
})());
});

//# sourceMappingURL=view.js.map