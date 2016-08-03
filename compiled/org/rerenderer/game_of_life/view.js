// Compiled by ClojureScript 1.7.228 {}
goog.provide('org.rerenderer.game_of_life.view');
goog.require('cljs.core');
goog.require('rerenderer.primitives');
org.rerenderer.game_of_life.view.cell_size = (40);
org.rerenderer.game_of_life.view.cell = (function org$rerenderer$game_of_life$view$cell(p__15880){
var vec__15882 = p__15880;
var x = cljs.core.nth.call(null,vec__15882,(0),null);
var y = cljs.core.nth.call(null,vec__15882,(1),null);
var cell_x = (org.rerenderer.game_of_life.view.cell_size * x);
var cell_y = (org.rerenderer.game_of_life.view.cell_size * y);
return rerenderer.primitives.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),cell_x,new cljs.core.Keyword(null,"y","y",-1757859776),cell_y,new cljs.core.Keyword(null,"width","width",-384071477),org.rerenderer.game_of_life.view.cell_size,new cljs.core.Keyword(null,"height","height",1025178622),org.rerenderer.game_of_life.view.cell_size,new cljs.core.Keyword(null,"color","color",1011675173),"green"], null));
});
org.rerenderer.game_of_life.view.root_view = (function org$rerenderer$game_of_life$view$root_view(p__15883){
var map__15890 = p__15883;
var map__15890__$1 = ((((!((map__15890 == null)))?((((map__15890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15890):map__15890);
var cells = cljs.core.get.call(null,map__15890__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
return rerenderer.primitives.rectangle.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1920),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),(function (){var iter__6928__auto__ = ((function (map__15890,map__15890__$1,cells){
return (function org$rerenderer$game_of_life$view$root_view_$_iter__15892(s__15893){
return (new cljs.core.LazySeq(null,((function (map__15890,map__15890__$1,cells){
return (function (){
var s__15893__$1 = s__15893;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15893__$1);
if(temp__4657__auto__){
var s__15893__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15893__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__15893__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__15895 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__15894 = (0);
while(true){
if((i__15894 < size__6927__auto__)){
var cell_data = cljs.core._nth.call(null,c__6926__auto__,i__15894);
cljs.core.chunk_append.call(null,b__15895,org.rerenderer.game_of_life.view.cell.call(null,cell_data));

var G__15896 = (i__15894 + (1));
i__15894 = G__15896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15895),org$rerenderer$game_of_life$view$root_view_$_iter__15892.call(null,cljs.core.chunk_rest.call(null,s__15893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15895),null);
}
} else {
var cell_data = cljs.core.first.call(null,s__15893__$2);
return cljs.core.cons.call(null,org.rerenderer.game_of_life.view.cell.call(null,cell_data),org$rerenderer$game_of_life$view$root_view_$_iter__15892.call(null,cljs.core.rest.call(null,s__15893__$2)));
}
} else {
return null;
}
break;
}
});})(map__15890,map__15890__$1,cells))
,null,null));
});})(map__15890,map__15890__$1,cells))
;
return iter__6928__auto__.call(null,cells);
})());
});
