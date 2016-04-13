// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.primitives');
goog.require('cljs.core');
goog.require('rerenderer.platform.browser.core');
goog.require('rerenderer.platform.android.core');
goog.require('rerenderer.lang.core');
goog.require('rerenderer.types.component');
rerenderer.primitives.__GT_rgba = cljs.core.memoize.call(null,(function (color){
var map__20379 = cljs.core.js__GT_clj.call(null,tinycolor(cljs.core.clj__GT_js.call(null,color)).toRgb(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__20379__$1 = ((((!((map__20379 == null)))?((((map__20379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20379):map__20379);
var r = cljs.core.get.call(null,map__20379__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.call(null,map__20379__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.call(null,map__20379__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.call(null,map__20379__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,((255) * a)], null);
}));
/**
 * Rectangle primitive, can be nested:
 * 
 *   ```
 *   (rectangle {:color "red"
 *            :width 100
 *            :height 300
 *            :x 10
 *            :y 10}
 *  childs)
 *   ```
 */
rerenderer.primitives.rectangle = (function rerenderer$primitives$rectangle(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20391 = arguments.length;
var i__7215__auto___20392 = (0);
while(true){
if((i__7215__auto___20392 < len__7214__auto___20391)){
args__7221__auto__.push((arguments[i__7215__auto___20392]));

var G__20393 = (i__7215__auto___20392 + (1));
i__7215__auto___20392 = G__20393;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__20383,childs){
var map__20384 = p__20383;
var map__20384__$1 = ((((!((map__20384 == null)))?((((map__20384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20384):map__20384);
var props = map__20384__$1;
var width = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var color = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var x = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(!((width == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"width","width",1256460050,null)))))].join('')));
}

if(!((height == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)))))].join('')));
}

if(!((color == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"color","color",-1642760596,null)))))].join('')));
}

var color__$1 = rerenderer.primitives.__GT_rgba.call(null,color);
var x__$1 = (function (){var or__6156__auto__ = x;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__6156__auto__ = y;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var props__$1 = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1);
if(typeof rerenderer.primitives.t_rerenderer$primitives20386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.types.component.IComponent}
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives20386 = (function (p__20383,childs,map__20384,props,width,height,color,x,y,meta20387){
this.p__20383 = p__20383;
this.childs = childs;
this.map__20384 = map__20384;
this.props = props;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.meta20387 = meta20387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives20386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (_20388,meta20387__$1){
var self__ = this;
var _20388__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives20386(self__.p__20383,self__.childs,self__.map__20384,self__.props,self__.width,self__.height,self__.color,self__.x,self__.y,meta20387__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (_20388){
var self__ = this;
var _20388__$1 = this;
return self__.meta20387;
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.types.component.component__GT_string.call(null,this$);
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.rerenderer$types$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.rerenderer$types$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.rerenderer$types$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.flatten.call(null,self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.rerenderer$types$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__20389_20394 = self__.color;
var r_20395 = cljs.core.nth.call(null,vec__20389_20394,(0),null);
var g_20396 = cljs.core.nth.call(null,vec__20389_20394,(1),null);
var b_20397 = cljs.core.nth.call(null,vec__20389_20394,(2),null);
var a_20398 = cljs.core.nth.call(null,vec__20389_20394,(3),null);
var color_20399__$1 = [cljs.core.str("rgba("),cljs.core.str(r_20395),cljs.core.str(", "),cljs.core.str(g_20396),cljs.core.str(", "),cljs.core.str(b_20397),cljs.core.str(", "),cljs.core.str(a_20398),cljs.core.str(")")].join('');
rerenderer.lang.core.rset_BANG_.call(null,ctx,"fillStyle",color_20399__$1);

return rerenderer.lang.core.rcall_BANG_.call(null,ctx,"fillRect",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),self__.width,self__.height], null));
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives20386.prototype.rerenderer$platform$android$core$IAndroid$render_android$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (_,canvas){
var self__ = this;
var ___$1 = this;
var paint = rerenderer.lang.core.rnew.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Paint"),cljs.core.PersistentVector.EMPTY);
var vec__20390 = self__.color;
var r = cljs.core.nth.call(null,vec__20390,(0),null);
var g = cljs.core.nth.call(null,vec__20390,(1),null);
var b = cljs.core.nth.call(null,vec__20390,(2),null);
var a = cljs.core.nth.call(null,vec__20390,(3),null);
rerenderer.lang.core.rcall_BANG_.call(null,paint,"setARGB",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,r,g,b], null));

return rerenderer.lang.core.rcall_BANG_.call(null,canvas,"drawRect",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),self__.width,self__.height,paint], null));
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__20383","p__20383",1632856580,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"map__20384","map__20384",-971213621,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"meta20387","meta20387",313927749,null)], null);
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives20386.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives20386.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives20386";

rerenderer.primitives.t_rerenderer$primitives20386.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives20386");
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

rerenderer.primitives.__GT_t_rerenderer$primitives20386 = ((function (color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives20386(p__20383__$1,childs__$1,map__20384__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta20387){
return (new rerenderer.primitives.t_rerenderer$primitives20386(p__20383__$1,childs__$1,map__20384__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta20387));
});})(color__$1,x__$1,y__$1,props__$1,map__20384,map__20384__$1,props,width,height,color,x,y))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives20386(p__20383,childs,map__20384__$1,props__$1,width,height,color__$1,x__$1,y__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.rectangle.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.rectangle.cljs$lang$applyTo = (function (seq20381){
var G__20382 = cljs.core.first.call(null,seq20381);
var seq20381__$1 = cljs.core.next.call(null,seq20381);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(G__20382,seq20381__$1);
});
/**
 * Text primitive, can be nested:
 * 
 *   ```
 *   (text {:width 100
 *       :height 30
 *       :font-size 10
 *       :color "#ff00ff"
 *       :x 10
 *       :y 10
 *       :value "Hi there"}
 *  childs)
 *   ```
 */
rerenderer.primitives.text = (function rerenderer$primitives$text(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20410 = arguments.length;
var i__7215__auto___20411 = (0);
while(true){
if((i__7215__auto___20411 < len__7214__auto___20410)){
args__7221__auto__.push((arguments[i__7215__auto___20411]));

var G__20412 = (i__7215__auto___20411 + (1));
i__7215__auto___20411 = G__20412;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__20402,childs){
var map__20403 = p__20402;
var map__20403__$1 = ((((!((map__20403 == null)))?((((map__20403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20403):map__20403);
var props = map__20403__$1;
var width = cljs.core.get.call(null,map__20403__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20403__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var font_size = cljs.core.get.call(null,map__20403__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var color = cljs.core.get.call(null,map__20403__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var x = cljs.core.get.call(null,map__20403__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20403__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__20403__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(!((width == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"width","width",1256460050,null)))))].join('')));
}

if(!((height == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)))))].join('')));
}

if(!((font_size == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"font-size","font-size",-207408819,null)))))].join('')));
}

if(!((color == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"color","color",-1642760596,null)))))].join('')));
}

if(!((value == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"value","value",1946509744,null)))))].join('')));
}

var color__$1 = rerenderer.primitives.__GT_rgba.call(null,color);
var x__$1 = (function (){var or__6156__auto__ = x;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__6156__auto__ = y;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var props__$1 = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1);
if(typeof rerenderer.primitives.t_rerenderer$primitives20405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.types.component.IComponent}
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives20405 = (function (x,map__20403,height,props,y,childs,color,font_size,value,width,p__20402,meta20406){
this.x = x;
this.map__20403 = map__20403;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.color = color;
this.font_size = font_size;
this.value = value;
this.width = width;
this.p__20402 = p__20402;
this.meta20406 = meta20406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives20405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (_20407,meta20406__$1){
var self__ = this;
var _20407__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives20405(self__.x,self__.map__20403,self__.height,self__.props,self__.y,self__.childs,self__.color,self__.font_size,self__.value,self__.width,self__.p__20402,meta20406__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (_20407){
var self__ = this;
var _20407__$1 = this;
return self__.meta20406;
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.types.component.component__GT_string.call(null,this$);
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.rerenderer$types$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.rerenderer$types$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "text";
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.rerenderer$types$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.flatten.call(null,self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.rerenderer$types$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__20408_20413 = self__.color;
var r_20414 = cljs.core.nth.call(null,vec__20408_20413,(0),null);
var g_20415 = cljs.core.nth.call(null,vec__20408_20413,(1),null);
var b_20416 = cljs.core.nth.call(null,vec__20408_20413,(2),null);
var a_20417 = cljs.core.nth.call(null,vec__20408_20413,(3),null);
var color_20418__$1 = [cljs.core.str("rgba("),cljs.core.str(r_20414),cljs.core.str(", "),cljs.core.str(g_20415),cljs.core.str(", "),cljs.core.str(b_20416),cljs.core.str(", "),cljs.core.str(a_20417),cljs.core.str(")")].join('');
rerenderer.lang.core.rset_BANG_.call(null,ctx,"fillStyle",color_20418__$1);

rerenderer.lang.core.rset_BANG_.call(null,ctx,"font",[cljs.core.str(self__.font_size),cljs.core.str("px sans")].join(''));

return rerenderer.lang.core.rcall_BANG_.call(null,ctx,"fillText",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value,(0),self__.font_size], null));
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives20405.prototype.rerenderer$platform$android$core$IAndroid$render_android$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (_,canvas){
var self__ = this;
var ___$1 = this;
var paint = rerenderer.lang.core.rnew.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Paint"),cljs.core.PersistentVector.EMPTY);
var vec__20409 = self__.color;
var r = cljs.core.nth.call(null,vec__20409,(0),null);
var g = cljs.core.nth.call(null,vec__20409,(1),null);
var b = cljs.core.nth.call(null,vec__20409,(2),null);
var a = cljs.core.nth.call(null,vec__20409,(3),null);
var y__$1 = (self__.height - self__.y);
rerenderer.lang.core.rcall_BANG_.call(null,paint,"setARGB",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,r,g,b], null));

rerenderer.lang.core.rcall_BANG_.call(null,paint,"setTextSize",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.font_size], null));

return rerenderer.lang.core.rcall_BANG_.call(null,canvas,"drawText",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value,self__.x,y__$1,paint], null));
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__20403","map__20403",225480069,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"font-size","font-size",-207408819,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"p__20402","p__20402",1342917497,null),new cljs.core.Symbol(null,"meta20406","meta20406",432758073,null)], null);
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives20405.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives20405.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives20405";

rerenderer.primitives.t_rerenderer$primitives20405.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives20405");
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.__GT_t_rerenderer$primitives20405 = ((function (color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives20405(x__$2,map__20403__$2,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,width__$1,p__20402__$1,meta20406){
return (new rerenderer.primitives.t_rerenderer$primitives20405(x__$2,map__20403__$2,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,width__$1,p__20402__$1,meta20406));
});})(color__$1,x__$1,y__$1,props__$1,map__20403,map__20403__$1,props,width,height,font_size,color,x,y,value))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives20405(x__$1,map__20403__$1,height,props__$1,y__$1,childs,color__$1,font_size,value,width,p__20402,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.text.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.text.cljs$lang$applyTo = (function (seq20400){
var G__20401 = cljs.core.first.call(null,seq20400);
var seq20400__$1 = cljs.core.next.call(null,seq20400);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic(G__20401,seq20400__$1);
});
rerenderer.primitives.get_image_url = cljs.core.memoize.call(null,(function (src){
return [cljs.core.str(rerenderer.primitives.document.location.protocol),cljs.core.str(":/"),cljs.core.str(rerenderer.primitives.document.location.host),cljs.core.str(src)].join('');
}));
/**
 * Image primitive, can be nested:
 * 
 *   ```
 *   (image {:width 100
 *        :height 200
 *        :src "/bird.png" ; absolute path to image
 *        :sx 20 ; x on source image, usable for cutting sprites
 *        :sy 30 ; y on source image, usable for cutting sprites
 *        :x 10
 *        :y 20}
 *  childs)
 *   ```
 */
rerenderer.primitives.image = (function rerenderer$primitives$image(var_args){
var args__7221__auto__ = [];
var len__7214__auto___20427 = arguments.length;
var i__7215__auto___20428 = (0);
while(true){
if((i__7215__auto___20428 < len__7214__auto___20427)){
args__7221__auto__.push((arguments[i__7215__auto___20428]));

var G__20429 = (i__7215__auto___20428 + (1));
i__7215__auto___20428 = G__20429;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic = (function (p__20421,childs){
var map__20422 = p__20421;
var map__20422__$1 = ((((!((map__20422 == null)))?((((map__20422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20422):map__20422);
var props = map__20422__$1;
var width = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var src = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var x = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sx = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var sy = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
if(!((width == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"width","width",1256460050,null)))))].join('')));
}

if(!((height == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)))))].join('')));
}

if(!((src == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))].join('')));
}

var x__$1 = (function (){var or__6156__auto__ = x;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__6156__auto__ = y;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var sx__$1 = (function (){var or__6156__auto__ = sx;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var sy__$1 = (function (){var or__6156__auto__ = sy;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var props__$1 = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"sx","sx",-403071592),sx__$1,new cljs.core.Keyword(null,"sy","sy",227523849),sy__$1);
if(typeof rerenderer.primitives.t_rerenderer$primitives20424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.types.component.IComponent}
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives20424 = (function (x,height,props,y,childs,sy,width,src,map__20422,p__20421,sx,meta20425){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.sy = sy;
this.width = width;
this.src = src;
this.map__20422 = map__20422;
this.p__20421 = p__20421;
this.sx = sx;
this.meta20425 = meta20425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives20424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (_20426,meta20425__$1){
var self__ = this;
var _20426__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives20424(self__.x,self__.height,self__.props,self__.y,self__.childs,self__.sy,self__.width,self__.src,self__.map__20422,self__.p__20421,self__.sx,meta20425__$1));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (_20426){
var self__ = this;
var _20426__$1 = this;
return self__.meta20425;
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.toString = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.types.component.component__GT_string.call(null,this$);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.rerenderer$types$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.rerenderer$types$component$IComponent$tag$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "image";
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.rerenderer$types$component$IComponent$childs$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.flatten.call(null,self__.childs);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.rerenderer$types$component$IComponent$props$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var img = rerenderer.lang.core.rcall_BANG_.call(null,rerenderer.lang.forms.__GT_Static.call(null,"document"),"getElementById",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.src], null));
return rerenderer.lang.core.rcall_BANG_.call(null,ctx,"drawImage",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [img,self__.sx,self__.sy,self__.width,self__.height,(0),(0),self__.width,self__.height], null));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives20424.prototype.rerenderer$platform$android$core$IAndroid$render_android$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (_,canvas){
var self__ = this;
var ___$1 = this;
var url = rerenderer.primitives.get_image_url.call(null,self__.src);
var bitmap = rerenderer.lang.core.rcall_BANG_.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"com"),"nvbn"),"tryrerenderer"),"RerendererLoader"),"bitmapFromUrl",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var clipped = rerenderer.lang.core.rcall_BANG_.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Bitmap"),"createBitmap",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bitmap,self__.sx,self__.sy,self__.width,self__.height], null));
return rerenderer.lang.core.rcall_BANG_.call(null,canvas,"drawBitmap",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clipped,(0),(0),rerenderer.lang.core.rnew.call(null,rerenderer.lang.forms.__GT_Static.call(null,"Paint"),cljs.core.PersistentVector.EMPTY)], null));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.getBasis = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"sy","sy",1868055376,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"map__20422","map__20422",1986212951,null),new cljs.core.Symbol(null,"p__20421","p__20421",401959646,null),new cljs.core.Symbol(null,"sx","sx",1237459935,null),new cljs.core.Symbol(null,"meta20425","meta20425",1286975535,null)], null);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives20424.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives20424.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives20424";

rerenderer.primitives.t_rerenderer$primitives20424.cljs$lang$ctorPrWriter = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives20424");
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.__GT_t_rerenderer$primitives20424 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives20424(x__$2,height__$1,props__$2,y__$2,childs__$1,sy__$2,width__$1,src__$1,map__20422__$2,p__20421__$1,sx__$2,meta20425){
return (new rerenderer.primitives.t_rerenderer$primitives20424(x__$2,height__$1,props__$2,y__$2,childs__$1,sy__$2,width__$1,src__$1,map__20422__$2,p__20421__$1,sx__$2,meta20425));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__20422,map__20422__$1,props,width,height,src,x,y,sx,sy))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives20424(x__$1,height,props__$1,y__$1,childs,sy__$1,width,src,map__20422__$1,p__20421,sx__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.image.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.image.cljs$lang$applyTo = (function (seq20419){
var G__20420 = cljs.core.first.call(null,seq20419);
var seq20419__$1 = cljs.core.next.call(null,seq20419);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic(G__20420,seq20419__$1);
});
