// Compiled by ClojureScript 1.7.228 {}
goog.provide('rerenderer.primitives');
goog.require('cljs.core');
goog.require('cljsjs.tinycolor');
goog.require('rerenderer.platform.browser.core');
goog.require('rerenderer.platform.android.core');
goog.require('rerenderer.lang.core');
goog.require('rerenderer.types.component');
rerenderer.primitives.__GT_rgba = cljs.core.memoize.call(null,(function (color){
var map__27425 = cljs.core.js__GT_clj.call(null,tinycolor(cljs.core.clj__GT_js.call(null,color)).toRgb(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__27425__$1 = ((((!((map__27425 == null)))?((((map__27425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27425):map__27425);
var r = cljs.core.get.call(null,map__27425__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.call(null,map__27425__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.call(null,map__27425__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.call(null,map__27425__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
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
var args__19363__auto__ = [];
var len__19356__auto___27437 = arguments.length;
var i__19357__auto___27438 = (0);
while(true){
if((i__19357__auto___27438 < len__19356__auto___27437)){
args__19363__auto__.push((arguments[i__19357__auto___27438]));

var G__27439 = (i__19357__auto___27438 + (1));
i__19357__auto___27438 = G__27439;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((1) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((1)),(0))):null);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19364__auto__);
});

rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__27429,childs){
var map__27430 = p__27429;
var map__27430__$1 = ((((!((map__27430 == null)))?((((map__27430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27430):map__27430);
var props = map__27430__$1;
var width = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var color = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var x = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
var x__$1 = (function (){var or__18298__auto__ = x;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__18298__auto__ = y;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
var props__$1 = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1);
if(typeof rerenderer.primitives.t_rerenderer$primitives27432 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives27432 = (function (p__27429,childs,map__27430,props,width,height,color,x,y,meta27433){
this.p__27429 = p__27429;
this.childs = childs;
this.map__27430 = map__27430;
this.props = props;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.meta27433 = meta27433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives27432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (_27434,meta27433__$1){
var self__ = this;
var _27434__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives27432(self__.p__27429,self__.childs,self__.map__27430,self__.props,self__.width,self__.height,self__.color,self__.x,self__.y,meta27433__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (_27434){
var self__ = this;
var _27434__$1 = this;
return self__.meta27433;
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.types.component.component__GT_string.call(null,this$);
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.rerenderer$types$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.rerenderer$types$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.rerenderer$types$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.flatten.call(null,self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.rerenderer$types$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__27435_27440 = self__.color;
var r_27441 = cljs.core.nth.call(null,vec__27435_27440,(0),null);
var g_27442 = cljs.core.nth.call(null,vec__27435_27440,(1),null);
var b_27443 = cljs.core.nth.call(null,vec__27435_27440,(2),null);
var a_27444 = cljs.core.nth.call(null,vec__27435_27440,(3),null);
var color_27445__$1 = [cljs.core.str("rgba("),cljs.core.str(r_27441),cljs.core.str(", "),cljs.core.str(g_27442),cljs.core.str(", "),cljs.core.str(b_27443),cljs.core.str(", "),cljs.core.str(a_27444),cljs.core.str(")")].join('');
rerenderer.lang.core.rset_BANG_.call(null,ctx,"fillStyle",color_27445__$1);

return rerenderer.lang.core.rcall_BANG_.call(null,ctx,"fillRect",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),self__.width,self__.height], null));
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives27432.prototype.rerenderer$platform$android$core$IAndroid$render_android$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (_,canvas){
var self__ = this;
var ___$1 = this;
var paint = rerenderer.lang.core.rnew.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Paint"),cljs.core.PersistentVector.EMPTY);
var vec__27436 = self__.color;
var r = cljs.core.nth.call(null,vec__27436,(0),null);
var g = cljs.core.nth.call(null,vec__27436,(1),null);
var b = cljs.core.nth.call(null,vec__27436,(2),null);
var a = cljs.core.nth.call(null,vec__27436,(3),null);
rerenderer.lang.core.rcall_BANG_.call(null,paint,"setARGB",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,r,g,b], null));

return rerenderer.lang.core.rcall_BANG_.call(null,canvas,"drawRect",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),self__.width,self__.height,paint], null));
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__27429","p__27429",716396318,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"map__27430","map__27430",1688981726,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"meta27433","meta27433",1108423346,null)], null);
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives27432.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives27432.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives27432";

rerenderer.primitives.t_rerenderer$primitives27432.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"rerenderer.primitives/t_rerenderer$primitives27432");
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

rerenderer.primitives.__GT_t_rerenderer$primitives27432 = ((function (color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives27432(p__27429__$1,childs__$1,map__27430__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta27433){
return (new rerenderer.primitives.t_rerenderer$primitives27432(p__27429__$1,childs__$1,map__27430__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta27433));
});})(color__$1,x__$1,y__$1,props__$1,map__27430,map__27430__$1,props,width,height,color,x,y))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives27432(p__27429,childs,map__27430__$1,props__$1,width,height,color__$1,x__$1,y__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.rectangle.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.rectangle.cljs$lang$applyTo = (function (seq27427){
var G__27428 = cljs.core.first.call(null,seq27427);
var seq27427__$1 = cljs.core.next.call(null,seq27427);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(G__27428,seq27427__$1);
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
var args__19363__auto__ = [];
var len__19356__auto___27456 = arguments.length;
var i__19357__auto___27457 = (0);
while(true){
if((i__19357__auto___27457 < len__19356__auto___27456)){
args__19363__auto__.push((arguments[i__19357__auto___27457]));

var G__27458 = (i__19357__auto___27457 + (1));
i__19357__auto___27457 = G__27458;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((1) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((1)),(0))):null);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19364__auto__);
});

rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__27448,childs){
var map__27449 = p__27448;
var map__27449__$1 = ((((!((map__27449 == null)))?((((map__27449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27449):map__27449);
var props = map__27449__$1;
var width = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var font_size = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var color = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var x = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
var x__$1 = (function (){var or__18298__auto__ = x;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__18298__auto__ = y;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
var props__$1 = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1);
if(typeof rerenderer.primitives.t_rerenderer$primitives27451 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives27451 = (function (x,height,props,y,childs,color,font_size,value,width,map__27449,p__27448,meta27452){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.color = color;
this.font_size = font_size;
this.value = value;
this.width = width;
this.map__27449 = map__27449;
this.p__27448 = p__27448;
this.meta27452 = meta27452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives27451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (_27453,meta27452__$1){
var self__ = this;
var _27453__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives27451(self__.x,self__.height,self__.props,self__.y,self__.childs,self__.color,self__.font_size,self__.value,self__.width,self__.map__27449,self__.p__27448,meta27452__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (_27453){
var self__ = this;
var _27453__$1 = this;
return self__.meta27452;
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.types.component.component__GT_string.call(null,this$);
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.rerenderer$types$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.rerenderer$types$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "text";
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.rerenderer$types$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.flatten.call(null,self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.rerenderer$types$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__27454_27459 = self__.color;
var r_27460 = cljs.core.nth.call(null,vec__27454_27459,(0),null);
var g_27461 = cljs.core.nth.call(null,vec__27454_27459,(1),null);
var b_27462 = cljs.core.nth.call(null,vec__27454_27459,(2),null);
var a_27463 = cljs.core.nth.call(null,vec__27454_27459,(3),null);
var color_27464__$1 = [cljs.core.str("rgba("),cljs.core.str(r_27460),cljs.core.str(", "),cljs.core.str(g_27461),cljs.core.str(", "),cljs.core.str(b_27462),cljs.core.str(", "),cljs.core.str(a_27463),cljs.core.str(")")].join('');
rerenderer.lang.core.rset_BANG_.call(null,ctx,"fillStyle",color_27464__$1);

rerenderer.lang.core.rset_BANG_.call(null,ctx,"font",[cljs.core.str(self__.font_size),cljs.core.str("px sans")].join(''));

return rerenderer.lang.core.rcall_BANG_.call(null,ctx,"fillText",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value,(0),self__.font_size], null));
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives27451.prototype.rerenderer$platform$android$core$IAndroid$render_android$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (_,canvas){
var self__ = this;
var ___$1 = this;
var paint = rerenderer.lang.core.rnew.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Paint"),cljs.core.PersistentVector.EMPTY);
var vec__27455 = self__.color;
var r = cljs.core.nth.call(null,vec__27455,(0),null);
var g = cljs.core.nth.call(null,vec__27455,(1),null);
var b = cljs.core.nth.call(null,vec__27455,(2),null);
var a = cljs.core.nth.call(null,vec__27455,(3),null);
var y__$1 = (self__.height - self__.y);
rerenderer.lang.core.rcall_BANG_.call(null,paint,"setARGB",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,r,g,b], null));

rerenderer.lang.core.rcall_BANG_.call(null,paint,"setTextSize",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.font_size], null));

return rerenderer.lang.core.rcall_BANG_.call(null,canvas,"drawText",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.value,self__.x,y__$1,paint], null));
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"font-size","font-size",-207408819,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"map__27449","map__27449",-975885390,null),new cljs.core.Symbol(null,"p__27448","p__27448",-66673025,null),new cljs.core.Symbol(null,"meta27452","meta27452",-359435410,null)], null);
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives27451.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives27451.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives27451";

rerenderer.primitives.t_rerenderer$primitives27451.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"rerenderer.primitives/t_rerenderer$primitives27451");
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.__GT_t_rerenderer$primitives27451 = ((function (color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives27451(x__$2,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,width__$1,map__27449__$2,p__27448__$1,meta27452){
return (new rerenderer.primitives.t_rerenderer$primitives27451(x__$2,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,width__$1,map__27449__$2,p__27448__$1,meta27452));
});})(color__$1,x__$1,y__$1,props__$1,map__27449,map__27449__$1,props,width,height,font_size,color,x,y,value))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives27451(x__$1,height,props__$1,y__$1,childs,color__$1,font_size,value,width,map__27449__$1,p__27448,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.text.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.text.cljs$lang$applyTo = (function (seq27446){
var G__27447 = cljs.core.first.call(null,seq27446);
var seq27446__$1 = cljs.core.next.call(null,seq27446);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic(G__27447,seq27446__$1);
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
var args__19363__auto__ = [];
var len__19356__auto___27473 = arguments.length;
var i__19357__auto___27474 = (0);
while(true){
if((i__19357__auto___27474 < len__19356__auto___27473)){
args__19363__auto__.push((arguments[i__19357__auto___27474]));

var G__27475 = (i__19357__auto___27474 + (1));
i__19357__auto___27474 = G__27475;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((1) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((1)),(0))):null);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19364__auto__);
});

rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic = (function (p__27467,childs){
var map__27468 = p__27467;
var map__27468__$1 = ((((!((map__27468 == null)))?((((map__27468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27468):map__27468);
var props = map__27468__$1;
var width = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var src = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var x = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sx = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var sy = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
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

var x__$1 = (function (){var or__18298__auto__ = x;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__18298__auto__ = y;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
var sx__$1 = (function (){var or__18298__auto__ = sx;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
var sy__$1 = (function (){var or__18298__auto__ = sy;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return (0);
}
})();
var props__$1 = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"sx","sx",-403071592),sx__$1,new cljs.core.Keyword(null,"sy","sy",227523849),sy__$1);
if(typeof rerenderer.primitives.t_rerenderer$primitives27470 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives27470 = (function (x,height,props,y,childs,sy,width,p__27467,src,map__27468,sx,meta27471){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.sy = sy;
this.width = width;
this.p__27467 = p__27467;
this.src = src;
this.map__27468 = map__27468;
this.sx = sx;
this.meta27471 = meta27471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives27470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (_27472,meta27471__$1){
var self__ = this;
var _27472__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives27470(self__.x,self__.height,self__.props,self__.y,self__.childs,self__.sy,self__.width,self__.p__27467,self__.src,self__.map__27468,self__.sx,meta27471__$1));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (_27472){
var self__ = this;
var _27472__$1 = this;
return self__.meta27471;
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.toString = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.types.component.component__GT_string.call(null,this$);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.rerenderer$types$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.rerenderer$types$component$IComponent$tag$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "image";
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.rerenderer$types$component$IComponent$childs$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.flatten.call(null,self__.childs);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.rerenderer$types$component$IComponent$props$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var img = rerenderer.lang.core.rcall_BANG_.call(null,rerenderer.lang.forms.__GT_Static.call(null,"document"),"getElementById",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.src], null));
return rerenderer.lang.core.rcall_BANG_.call(null,ctx,"drawImage",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [img,self__.sx,self__.sy,self__.width,self__.height,(0),(0),self__.width,self__.height], null));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives27470.prototype.rerenderer$platform$android$core$IAndroid$render_android$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (_,canvas){
var self__ = this;
var ___$1 = this;
var url = rerenderer.primitives.get_image_url.call(null,self__.src);
var bitmap = rerenderer.lang.core.rcall_BANG_.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"com"),"nvbn"),"tryrerenderer"),"RerendererLoader"),"bitmapFromUrl",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));
var clipped = rerenderer.lang.core.rcall_BANG_.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.core.rget.call(null,rerenderer.lang.forms.__GT_Static.call(null,"android"),"graphics"),"Bitmap"),"createBitmap",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bitmap,self__.sx,self__.sy,self__.width,self__.height], null));
return rerenderer.lang.core.rcall_BANG_.call(null,canvas,"drawBitmap",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clipped,(0),(0),rerenderer.lang.core.rnew.call(null,rerenderer.lang.forms.__GT_Static.call(null,"Paint"),cljs.core.PersistentVector.EMPTY)], null));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.getBasis = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"childs","childs",347329640,null),new cljs.core.Symbol(null,"sy","sy",1868055376,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"p__27467","p__27467",141397523,null),new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"map__27468","map__27468",547396409,null),new cljs.core.Symbol(null,"sx","sx",1237459935,null),new cljs.core.Symbol(null,"meta27471","meta27471",-1871913545,null)], null);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives27470.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives27470.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives27470";

rerenderer.primitives.t_rerenderer$primitives27470.cljs$lang$ctorPrWriter = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"rerenderer.primitives/t_rerenderer$primitives27470");
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.__GT_t_rerenderer$primitives27470 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives27470(x__$2,height__$1,props__$2,y__$2,childs__$1,sy__$2,width__$1,p__27467__$1,src__$1,map__27468__$2,sx__$2,meta27471){
return (new rerenderer.primitives.t_rerenderer$primitives27470(x__$2,height__$1,props__$2,y__$2,childs__$1,sy__$2,width__$1,p__27467__$1,src__$1,map__27468__$2,sx__$2,meta27471));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__27468,map__27468__$1,props,width,height,src,x,y,sx,sy))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives27470(x__$1,height,props__$1,y__$1,childs,sy__$1,width,p__27467,src,map__27468__$1,sx__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.image.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.image.cljs$lang$applyTo = (function (seq27465){
var G__27466 = cljs.core.first.call(null,seq27465);
var seq27465__$1 = cljs.core.next.call(null,seq27465);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic(G__27466,seq27465__$1);
});

//# sourceMappingURL=primitives.js.map