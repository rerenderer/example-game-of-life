// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.primitives');
goog.require('cljs.core');
goog.require('rerenderer.platform.browser.core');
goog.require('rerenderer.platform.android.core');
goog.require('rerenderer.component');
/**
 * Rectangle primitive, can be nested.
 * 
 *   * `width` - rectangle width - number;
 *   * `height` - rectange height - number;
 *   * `color` - rectangle color, supported formats: `#ff0000`, `rgb(255, 255, 0)`, `argb(255, 0, 0, 0)`, `red`;
 *   * `x` - rectangle upper left corner x coordinate on parent;
 *   * `y` - rectangle upper left corner y coordinate on parent;
 *   * `childs` - primitives rendered inside the rectangle.
 * 
 *   Usage:
 * 
 *   ```
 *   (rectangle {:color "red"
 *            :width 100
 *            :height 300
 *            :x 10
 *            :y 10}
 *  (rectangle {:color "#00ff00"
 *              :x 50
 *              :y 50
 *              :x 10
 *              :y 10}))
 *   ```
 */
rerenderer.primitives.rectangle = (function rerenderer$primitives$rectangle(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15840 = arguments.length;
var i__7215__auto___15841 = (0);
while(true){
if((i__7215__auto___15841 < len__7214__auto___15840)){
args__7221__auto__.push((arguments[i__7215__auto___15841]));

var G__15842 = (i__7215__auto___15841 + (1));
i__7215__auto___15841 = G__15842;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__15833,childs){
var map__15834 = p__15833;
var map__15834__$1 = ((((!((map__15834 == null)))?((((map__15834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15834):map__15834);
var props = map__15834__$1;
var width = cljs.core.get.call(null,map__15834__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15834__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var color = cljs.core.get.call(null,map__15834__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var x = cljs.core.get.call(null,map__15834__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15834__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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

var color__$1 = rerenderer.component.__GT_rgba.call(null,color);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives15836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {rerenderer.component.IComponent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives15836 = (function (p__15833,childs,map__15834,props,width,height,color,x,y,meta15837){
this.p__15833 = p__15833;
this.childs = childs;
this.map__15834 = map__15834;
this.props = props;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.meta15837 = meta15837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives15836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (_15838,meta15837__$1){
var self__ = this;
var _15838__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives15836(self__.p__15833,self__.childs,self__.map__15834,self__.props,self__.width,self__.height,self__.color,self__.x,self__.y,meta15837__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (_15838){
var self__ = this;
var _15838__$1 = this;
return self__.meta15837;
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string.call(null,this$);
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs.call(null,self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__15839_15843 = self__.color;
var r_15844 = cljs.core.nth.call(null,vec__15839_15843,(0),null);
var g_15845 = cljs.core.nth.call(null,vec__15839_15843,(1),null);
var b_15846 = cljs.core.nth.call(null,vec__15839_15843,(2),null);
var a_15847 = cljs.core.nth.call(null,vec__15839_15843,(3),null);
var color_15848__$1 = [cljs.core.str("rgba("),cljs.core.str(r_15844),cljs.core.str(", "),cljs.core.str(g_15845),cljs.core.str(", "),cljs.core.str(b_15846),cljs.core.str(", "),cljs.core.str(a_15847),cljs.core.str(")")].join('');
ctx.fillStyle = color_15848__$1;

return ctx.fillRect((0),(0),self__.width,self__.height);
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives15836.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__15833","p__15833",-1306982489,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"map__15834","map__15834",940678165,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"meta15837","meta15837",1028450572,null)], null);
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives15836.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives15836.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives15836";

rerenderer.primitives.t_rerenderer$primitives15836.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives15836");
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

rerenderer.primitives.__GT_t_rerenderer$primitives15836 = ((function (color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives15836(p__15833__$1,childs__$1,map__15834__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta15837){
return (new rerenderer.primitives.t_rerenderer$primitives15836(p__15833__$1,childs__$1,map__15834__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta15837));
});})(color__$1,x__$1,y__$1,props__$1,map__15834,map__15834__$1,props,width,height,color,x,y))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives15836(p__15833,childs,map__15834__$1,props__$1,width,height,color__$1,x__$1,y__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.rectangle.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.rectangle.cljs$lang$applyTo = (function (seq15831){
var G__15832 = cljs.core.first.call(null,seq15831);
var seq15831__$1 = cljs.core.next.call(null,seq15831);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(G__15832,seq15831__$1);
});
/**
 * Text primitive, can be nested.
 * 
 *   * `width` - text holder width - number;
 *   * `height` - text holder height - number;
 *   * `font-size` - font size in px;
 *   * `color` - text color, supported formats: #ff0000, rgb(255, 255, 0), argb(255, 0, 0, 0), red;
 *   * `x` - text holder upper left corner x coordinate on parent;
 *   * `y` - text holder upper left corner y coordinate on parent;
 *   * `value` - text;
 *   * `childs` - primitives rendered inside the rectangle.
 * 
 *   Usage:
 * 
 *   ```
 *   (text {:width 100
 *       :height 30
 *       :font-size 10
 *       :color "#ff00ff"
 *       :x 10
 *       :y 10
 *       :value "Hi there"}
 *  (rectangle {:color "#00ff00"
 *              :x 50
 *              :y 50
 *              :x 10
 *              :y 10}))
 *   ```
 */
rerenderer.primitives.text = (function rerenderer$primitives$text(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15858 = arguments.length;
var i__7215__auto___15859 = (0);
while(true){
if((i__7215__auto___15859 < len__7214__auto___15858)){
args__7221__auto__.push((arguments[i__7215__auto___15859]));

var G__15860 = (i__7215__auto___15859 + (1));
i__7215__auto___15859 = G__15860;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__15851,childs){
var map__15852 = p__15851;
var map__15852__$1 = ((((!((map__15852 == null)))?((((map__15852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15852):map__15852);
var props = map__15852__$1;
var width = cljs.core.get.call(null,map__15852__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15852__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var font_size = cljs.core.get.call(null,map__15852__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var color = cljs.core.get.call(null,map__15852__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var x = cljs.core.get.call(null,map__15852__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15852__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__15852__$1,new cljs.core.Keyword(null,"value","value",305978217));
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

var color__$1 = rerenderer.component.__GT_rgba.call(null,color);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives15854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {rerenderer.component.IComponent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives15854 = (function (x,p__15851,height,props,y,childs,color,font_size,value,width,map__15852,meta15855){
this.x = x;
this.p__15851 = p__15851;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.color = color;
this.font_size = font_size;
this.value = value;
this.width = width;
this.map__15852 = map__15852;
this.meta15855 = meta15855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives15854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (_15856,meta15855__$1){
var self__ = this;
var _15856__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives15854(self__.x,self__.p__15851,self__.height,self__.props,self__.y,self__.childs,self__.color,self__.font_size,self__.value,self__.width,self__.map__15852,meta15855__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (_15856){
var self__ = this;
var _15856__$1 = this;
return self__.meta15855;
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string.call(null,this$);
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "text";
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs.call(null,self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__15857_15861 = self__.color;
var r_15862 = cljs.core.nth.call(null,vec__15857_15861,(0),null);
var g_15863 = cljs.core.nth.call(null,vec__15857_15861,(1),null);
var b_15864 = cljs.core.nth.call(null,vec__15857_15861,(2),null);
var a_15865 = cljs.core.nth.call(null,vec__15857_15861,(3),null);
var color_15866__$1 = [cljs.core.str("rgba("),cljs.core.str(r_15862),cljs.core.str(", "),cljs.core.str(g_15863),cljs.core.str(", "),cljs.core.str(b_15864),cljs.core.str(", "),cljs.core.str(a_15865),cljs.core.str(")")].join('');
ctx.fillStyle = color_15866__$1;

ctx.font = [cljs.core.str(self__.font_size),cljs.core.str("px sans")].join('');

return ctx.fillText(self__.value,(0),self__.font_size);
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives15854.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.text";
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"p__15851","p__15851",1257545825,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"font-size","font-size",-207408819,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"map__15852","map__15852",522862709,null),new cljs.core.Symbol(null,"meta15855","meta15855",588810463,null)], null);
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives15854.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives15854.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives15854";

rerenderer.primitives.t_rerenderer$primitives15854.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives15854");
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.__GT_t_rerenderer$primitives15854 = ((function (color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives15854(x__$2,p__15851__$1,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,width__$1,map__15852__$2,meta15855){
return (new rerenderer.primitives.t_rerenderer$primitives15854(x__$2,p__15851__$1,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,width__$1,map__15852__$2,meta15855));
});})(color__$1,x__$1,y__$1,props__$1,map__15852,map__15852__$1,props,width,height,font_size,color,x,y,value))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives15854(x__$1,p__15851,height,props__$1,y__$1,childs,color__$1,font_size,value,width,map__15852__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.text.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.text.cljs$lang$applyTo = (function (seq15849){
var G__15850 = cljs.core.first.call(null,seq15849);
var seq15849__$1 = cljs.core.next.call(null,seq15849);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic(G__15850,seq15849__$1);
});
/**
 * Image primitive, can be nested.
 * 
 *   * `width` - text holder width - number;
 *   * `height` - text holder height - number;
 *   * `x` - text holder upper left corner x coordinate on parent;
 *   * `y` - text holder upper left corner y coordinate on parent;
 *   * `sx` - source image x, useful for cutting sprites;
 *   * `sy` - source image y, useful for cutting sprites;
 *   * `childs` - primitives rendered inside the rectangle.
 * 
 *   Example:
 * 
 *   ```
 *   (image {:width 100
 *        :height 200
 *        :src "/bird.png" ; absolute path to image
 *        :sx 20 ; x on source image, usable for cutting sprites
 *        :sy 30 ; y on source image, usable for cutting sprites
 *        :x 10
 *        :y 20}
 *  (rectangle {:color "#00ff00"
 *              :x 50
 *              :y 50
 *              :x 10
 *              :y 10}))
 *   ```
 */
rerenderer.primitives.image = (function rerenderer$primitives$image(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15875 = arguments.length;
var i__7215__auto___15876 = (0);
while(true){
if((i__7215__auto___15876 < len__7214__auto___15875)){
args__7221__auto__.push((arguments[i__7215__auto___15876]));

var G__15877 = (i__7215__auto___15876 + (1));
i__7215__auto___15876 = G__15877;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic = (function (p__15869,childs){
var map__15870 = p__15869;
var map__15870__$1 = ((((!((map__15870 == null)))?((((map__15870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15870):map__15870);
var props = map__15870__$1;
var width = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var src = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var x = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sx = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var sy = cljs.core.get.call(null,map__15870__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
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
var src__$1 = rerenderer.component.__GT_url.call(null,src);
var props__$1 = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"sx","sx",-403071592),sx__$1,new cljs.core.Keyword(null,"sy","sy",227523849),sy__$1,new cljs.core.Keyword(null,"src","src",-1651076051),src__$1);
if(typeof rerenderer.primitives.t_rerenderer$primitives15872 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {rerenderer.component.IComponent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives15872 = (function (x,height,props,y,map__15870,childs,sy,width,src,p__15869,sx,meta15873){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.map__15870 = map__15870;
this.childs = childs;
this.sy = sy;
this.width = width;
this.src = src;
this.p__15869 = p__15869;
this.sx = sx;
this.meta15873 = meta15873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives15872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (_15874,meta15873__$1){
var self__ = this;
var _15874__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives15872(self__.x,self__.height,self__.props,self__.y,self__.map__15870,self__.childs,self__.sy,self__.width,self__.src,self__.p__15869,self__.sx,meta15873__$1));
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (_15874){
var self__ = this;
var _15874__$1 = this;
return self__.meta15873;
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.toString = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string.call(null,this$);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "image";
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs.call(null,self__.childs);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var img = (new Image());
img.src = self__.src;

return ctx.drawImage(img,self__.sx,self__.sy,self__.width,self__.height,(0),(0),self__.width,self__.height);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives15872.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.image";
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.getBasis = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__15870","map__15870",-687857785,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"sy","sy",1868055376,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"p__15869","p__15869",-291027779,null),new cljs.core.Symbol(null,"sx","sx",1237459935,null),new cljs.core.Symbol(null,"meta15873","meta15873",-1005754189,null)], null);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives15872.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives15872.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives15872";

rerenderer.primitives.t_rerenderer$primitives15872.cljs$lang$ctorPrWriter = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives15872");
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.__GT_t_rerenderer$primitives15872 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives15872(x__$2,height__$1,props__$2,y__$2,map__15870__$2,childs__$1,sy__$2,width__$1,src__$2,p__15869__$1,sx__$2,meta15873){
return (new rerenderer.primitives.t_rerenderer$primitives15872(x__$2,height__$1,props__$2,y__$2,map__15870__$2,childs__$1,sy__$2,width__$1,src__$2,p__15869__$1,sx__$2,meta15873));
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__15870,map__15870__$1,props,width,height,src,x,y,sx,sy))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives15872(x__$1,height,props__$1,y__$1,map__15870__$1,childs,sy__$1,width,src__$1,p__15869,sx__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.image.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.image.cljs$lang$applyTo = (function (seq15867){
var G__15868 = cljs.core.first.call(null,seq15867);
var seq15867__$1 = cljs.core.next.call(null,seq15867);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic(G__15868,seq15867__$1);
});
