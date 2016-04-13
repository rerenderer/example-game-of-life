// Compiled by ClojureScript 1.7.228 {}
goog.provide('org.rerenderer.game_of_life.view');
goog.require('cljs.core');
goog.require('rerenderer.primitives');
org.rerenderer.game_of_life.view.cell_size = (40);
org.rerenderer.game_of_life.view.cell = (function org$rerenderer$game_of_life$view$cell(p__20432){
var vec__20434 = p__20432;
var x = cljs.core.nth.call(null,vec__20434,(0),null);
var y = cljs.core.nth.call(null,vec__20434,(1),null);
var cell_x = (org.rerenderer.game_of_life.view.cell_size * x);
var cell_y = (org.rerenderer.game_of_life.view.cell_size * y);
return rerenderer.primitives.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),cell_x,new cljs.core.Keyword(null,"y","y",-1757859776),cell_y,new cljs.core.Keyword(null,"width","width",-384071477),org.rerenderer.game_of_life.view.cell_size,new cljs.core.Keyword(null,"height","height",1025178622),org.rerenderer.game_of_life.view.cell_size,new cljs.core.Keyword(null,"color","color",1011675173),"green"], null));
});
org.rerenderer.game_of_life.view.root_view = (function org$rerenderer$game_of_life$view$root_view(p__20435){
var map__20442 = p__20435;
var map__20442__$1 = ((((!((map__20442 == null)))?((((map__20442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20442):map__20442);
var cells = cljs.core.get.call(null,map__20442__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
return rerenderer.primitives.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1920),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),(function (){var iter__6928__auto__ = ((function (map__20442,map__20442__$1,cells){
return (function org$rerenderer$game_of_life$view$root_view_$_iter__20444(s__20445){
return (new cljs.core.LazySeq(null,((function (map__20442,map__20442__$1,cells){
return (function (){
var s__20445__$1 = s__20445;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20445__$1);
if(temp__4657__auto__){
var s__20445__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20445__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__20445__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__20447 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__20446 = (0);
while(true){
if((i__20446 < size__6927__auto__)){
var cell_data = cljs.core._nth.call(null,c__6926__auto__,i__20446);
cljs.core.chunk_append.call(null,b__20447,org.rerenderer.game_of_life.view.cell.call(null,cell_data));

var G__20448 = (i__20446 + (1));
i__20446 = G__20448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20447),org$rerenderer$game_of_life$view$root_view_$_iter__20444.call(null,cljs.core.chunk_rest.call(null,s__20445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20447),null);
}
} else {
var cell_data = cljs.core.first.call(null,s__20445__$2);
return cljs.core.cons.call(null,org.rerenderer.game_of_life.view.cell.call(null,cell_data),org$rerenderer$game_of_life$view$root_view_$_iter__20444.call(null,cljs.core.rest.call(null,s__20445__$2)));
}
} else {
return null;
}
break;
}
});})(map__20442,map__20442__$1,cells))
,null,null));
});})(map__20442,map__20442__$1,cells))
;
return iter__6928__auto__.call(null,cells);
})());
});
