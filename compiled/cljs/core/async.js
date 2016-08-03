// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args12602 = [];
var len__7214__auto___12608 = arguments.length;
var i__7215__auto___12609 = (0);
while(true){
if((i__7215__auto___12609 < len__7214__auto___12608)){
args12602.push((arguments[i__7215__auto___12609]));

var G__12610 = (i__7215__auto___12609 + (1));
i__7215__auto___12609 = G__12610;
continue;
} else {
}
break;
}

var G__12604 = args12602.length;
switch (G__12604) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12602.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12605 = (function (f,blockable,meta12606){
this.f = f;
this.blockable = blockable;
this.meta12606 = meta12606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12607,meta12606__$1){
var self__ = this;
var _12607__$1 = this;
return (new cljs.core.async.t_cljs$core$async12605(self__.f,self__.blockable,meta12606__$1));
});

cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12607){
var self__ = this;
var _12607__$1 = this;
return self__.meta12606;
});

cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12606","meta12606",-1370667569,null)], null);
});

cljs.core.async.t_cljs$core$async12605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12605";

cljs.core.async.t_cljs$core$async12605.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12605");
});

cljs.core.async.__GT_t_cljs$core$async12605 = (function cljs$core$async$__GT_t_cljs$core$async12605(f__$1,blockable__$1,meta12606){
return (new cljs.core.async.t_cljs$core$async12605(f__$1,blockable__$1,meta12606));
});

}

return (new cljs.core.async.t_cljs$core$async12605(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args12614 = [];
var len__7214__auto___12617 = arguments.length;
var i__7215__auto___12618 = (0);
while(true){
if((i__7215__auto___12618 < len__7214__auto___12617)){
args12614.push((arguments[i__7215__auto___12618]));

var G__12619 = (i__7215__auto___12618 + (1));
i__7215__auto___12618 = G__12619;
continue;
} else {
}
break;
}

var G__12616 = args12614.length;
switch (G__12616) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12614.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args12621 = [];
var len__7214__auto___12624 = arguments.length;
var i__7215__auto___12625 = (0);
while(true){
if((i__7215__auto___12625 < len__7214__auto___12624)){
args12621.push((arguments[i__7215__auto___12625]));

var G__12626 = (i__7215__auto___12625 + (1));
i__7215__auto___12625 = G__12626;
continue;
} else {
}
break;
}

var G__12623 = args12621.length;
switch (G__12623) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12621.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args12628 = [];
var len__7214__auto___12631 = arguments.length;
var i__7215__auto___12632 = (0);
while(true){
if((i__7215__auto___12632 < len__7214__auto___12631)){
args12628.push((arguments[i__7215__auto___12632]));

var G__12633 = (i__7215__auto___12632 + (1));
i__7215__auto___12632 = G__12633;
continue;
} else {
}
break;
}

var G__12630 = args12628.length;
switch (G__12630) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12628.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12635 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12635);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12635,ret){
return (function (){
return fn1.call(null,val_12635);
});})(val_12635,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args12636 = [];
var len__7214__auto___12639 = arguments.length;
var i__7215__auto___12640 = (0);
while(true){
if((i__7215__auto___12640 < len__7214__auto___12639)){
args12636.push((arguments[i__7215__auto___12640]));

var G__12641 = (i__7215__auto___12640 + (1));
i__7215__auto___12640 = G__12641;
continue;
} else {
}
break;
}

var G__12638 = args12636.length;
switch (G__12638) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12636.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7059__auto___12643 = n;
var x_12644 = (0);
while(true){
if((x_12644 < n__7059__auto___12643)){
(a[x_12644] = (0));

var G__12645 = (x_12644 + (1));
x_12644 = G__12645;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12646 = (i + (1));
i = G__12646;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12650 = (function (alt_flag,flag,meta12651){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12651 = meta12651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12652,meta12651__$1){
var self__ = this;
var _12652__$1 = this;
return (new cljs.core.async.t_cljs$core$async12650(self__.alt_flag,self__.flag,meta12651__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12652){
var self__ = this;
var _12652__$1 = this;
return self__.meta12651;
});})(flag))
;

cljs.core.async.t_cljs$core$async12650.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12650.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12651","meta12651",23786523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12650";

cljs.core.async.t_cljs$core$async12650.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12650");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12650 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12650(alt_flag__$1,flag__$1,meta12651){
return (new cljs.core.async.t_cljs$core$async12650(alt_flag__$1,flag__$1,meta12651));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12650(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12656 = (function (alt_handler,flag,cb,meta12657){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12657 = meta12657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12658,meta12657__$1){
var self__ = this;
var _12658__$1 = this;
return (new cljs.core.async.t_cljs$core$async12656(self__.alt_handler,self__.flag,self__.cb,meta12657__$1));
});

cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12658){
var self__ = this;
var _12658__$1 = this;
return self__.meta12657;
});

cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12657","meta12657",-1453389725,null)], null);
});

cljs.core.async.t_cljs$core$async12656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12656";

cljs.core.async.t_cljs$core$async12656.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12656");
});

cljs.core.async.__GT_t_cljs$core$async12656 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12656(alt_handler__$1,flag__$1,cb__$1,meta12657){
return (new cljs.core.async.t_cljs$core$async12656(alt_handler__$1,flag__$1,cb__$1,meta12657));
});

}

return (new cljs.core.async.t_cljs$core$async12656(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12659_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12659_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12660_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12660_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6156__auto__ = wport;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12661 = (i + (1));
i = G__12661;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6156__auto__ = ret;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6144__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12667 = arguments.length;
var i__7215__auto___12668 = (0);
while(true){
if((i__7215__auto___12668 < len__7214__auto___12667)){
args__7221__auto__.push((arguments[i__7215__auto___12668]));

var G__12669 = (i__7215__auto___12668 + (1));
i__7215__auto___12668 = G__12669;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12664){
var map__12665 = p__12664;
var map__12665__$1 = ((((!((map__12665 == null)))?((((map__12665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12665):map__12665);
var opts = map__12665__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12662){
var G__12663 = cljs.core.first.call(null,seq12662);
var seq12662__$1 = cljs.core.next.call(null,seq12662);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12663,seq12662__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12670 = [];
var len__7214__auto___12720 = arguments.length;
var i__7215__auto___12721 = (0);
while(true){
if((i__7215__auto___12721 < len__7214__auto___12720)){
args12670.push((arguments[i__7215__auto___12721]));

var G__12722 = (i__7215__auto___12721 + (1));
i__7215__auto___12721 = G__12722;
continue;
} else {
}
break;
}

var G__12672 = args12670.length;
switch (G__12672) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12670.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12557__auto___12724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___12724){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___12724){
return (function (state_12696){
var state_val_12697 = (state_12696[(1)]);
if((state_val_12697 === (7))){
var inst_12692 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
var statearr_12698_12725 = state_12696__$1;
(statearr_12698_12725[(2)] = inst_12692);

(statearr_12698_12725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (1))){
var state_12696__$1 = state_12696;
var statearr_12699_12726 = state_12696__$1;
(statearr_12699_12726[(2)] = null);

(statearr_12699_12726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (4))){
var inst_12675 = (state_12696[(7)]);
var inst_12675__$1 = (state_12696[(2)]);
var inst_12676 = (inst_12675__$1 == null);
var state_12696__$1 = (function (){var statearr_12700 = state_12696;
(statearr_12700[(7)] = inst_12675__$1);

return statearr_12700;
})();
if(cljs.core.truth_(inst_12676)){
var statearr_12701_12727 = state_12696__$1;
(statearr_12701_12727[(1)] = (5));

} else {
var statearr_12702_12728 = state_12696__$1;
(statearr_12702_12728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (13))){
var state_12696__$1 = state_12696;
var statearr_12703_12729 = state_12696__$1;
(statearr_12703_12729[(2)] = null);

(statearr_12703_12729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (6))){
var inst_12675 = (state_12696[(7)]);
var state_12696__$1 = state_12696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12696__$1,(11),to,inst_12675);
} else {
if((state_val_12697 === (3))){
var inst_12694 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12696__$1,inst_12694);
} else {
if((state_val_12697 === (12))){
var state_12696__$1 = state_12696;
var statearr_12704_12730 = state_12696__$1;
(statearr_12704_12730[(2)] = null);

(statearr_12704_12730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (2))){
var state_12696__$1 = state_12696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12696__$1,(4),from);
} else {
if((state_val_12697 === (11))){
var inst_12685 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
if(cljs.core.truth_(inst_12685)){
var statearr_12705_12731 = state_12696__$1;
(statearr_12705_12731[(1)] = (12));

} else {
var statearr_12706_12732 = state_12696__$1;
(statearr_12706_12732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (9))){
var state_12696__$1 = state_12696;
var statearr_12707_12733 = state_12696__$1;
(statearr_12707_12733[(2)] = null);

(statearr_12707_12733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (5))){
var state_12696__$1 = state_12696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12708_12734 = state_12696__$1;
(statearr_12708_12734[(1)] = (8));

} else {
var statearr_12709_12735 = state_12696__$1;
(statearr_12709_12735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (14))){
var inst_12690 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
var statearr_12710_12736 = state_12696__$1;
(statearr_12710_12736[(2)] = inst_12690);

(statearr_12710_12736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (10))){
var inst_12682 = (state_12696[(2)]);
var state_12696__$1 = state_12696;
var statearr_12711_12737 = state_12696__$1;
(statearr_12711_12737[(2)] = inst_12682);

(statearr_12711_12737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12697 === (8))){
var inst_12679 = cljs.core.async.close_BANG_.call(null,to);
var state_12696__$1 = state_12696;
var statearr_12712_12738 = state_12696__$1;
(statearr_12712_12738[(2)] = inst_12679);

(statearr_12712_12738[(1)] = (10));


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
});})(c__12557__auto___12724))
;
return ((function (switch__12445__auto__,c__12557__auto___12724){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_12716 = [null,null,null,null,null,null,null,null];
(statearr_12716[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_12716[(1)] = (1));

return statearr_12716;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_12696){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_12696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e12717){if((e12717 instanceof Object)){
var ex__12449__auto__ = e12717;
var statearr_12718_12739 = state_12696;
(statearr_12718_12739[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12740 = state_12696;
state_12696 = G__12740;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_12696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_12696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___12724))
})();
var state__12559__auto__ = (function (){var statearr_12719 = f__12558__auto__.call(null);
(statearr_12719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___12724);

return statearr_12719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___12724))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12924){
var vec__12925 = p__12924;
var v = cljs.core.nth.call(null,vec__12925,(0),null);
var p = cljs.core.nth.call(null,vec__12925,(1),null);
var job = vec__12925;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12557__auto___13107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___13107,res,vec__12925,v,p,job,jobs,results){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___13107,res,vec__12925,v,p,job,jobs,results){
return (function (state_12930){
var state_val_12931 = (state_12930[(1)]);
if((state_val_12931 === (1))){
var state_12930__$1 = state_12930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12930__$1,(2),res,v);
} else {
if((state_val_12931 === (2))){
var inst_12927 = (state_12930[(2)]);
var inst_12928 = cljs.core.async.close_BANG_.call(null,res);
var state_12930__$1 = (function (){var statearr_12932 = state_12930;
(statearr_12932[(7)] = inst_12927);

return statearr_12932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12930__$1,inst_12928);
} else {
return null;
}
}
});})(c__12557__auto___13107,res,vec__12925,v,p,job,jobs,results))
;
return ((function (switch__12445__auto__,c__12557__auto___13107,res,vec__12925,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0 = (function (){
var statearr_12936 = [null,null,null,null,null,null,null,null];
(statearr_12936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__);

(statearr_12936[(1)] = (1));

return statearr_12936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1 = (function (state_12930){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_12930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e12937){if((e12937 instanceof Object)){
var ex__12449__auto__ = e12937;
var statearr_12938_13108 = state_12930;
(statearr_12938_13108[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13109 = state_12930;
state_12930 = G__13109;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = function(state_12930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1.call(this,state_12930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___13107,res,vec__12925,v,p,job,jobs,results))
})();
var state__12559__auto__ = (function (){var statearr_12939 = f__12558__auto__.call(null);
(statearr_12939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___13107);

return statearr_12939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___13107,res,vec__12925,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12940){
var vec__12941 = p__12940;
var v = cljs.core.nth.call(null,vec__12941,(0),null);
var p = cljs.core.nth.call(null,vec__12941,(1),null);
var job = vec__12941;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7059__auto___13110 = n;
var __13111 = (0);
while(true){
if((__13111 < n__7059__auto___13110)){
var G__12942_13112 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12942_13112) {
case "compute":
var c__12557__auto___13114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13111,c__12557__auto___13114,G__12942_13112,n__7059__auto___13110,jobs,results,process,async){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (__13111,c__12557__auto___13114,G__12942_13112,n__7059__auto___13110,jobs,results,process,async){
return (function (state_12955){
var state_val_12956 = (state_12955[(1)]);
if((state_val_12956 === (1))){
var state_12955__$1 = state_12955;
var statearr_12957_13115 = state_12955__$1;
(statearr_12957_13115[(2)] = null);

(statearr_12957_13115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12956 === (2))){
var state_12955__$1 = state_12955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12955__$1,(4),jobs);
} else {
if((state_val_12956 === (3))){
var inst_12953 = (state_12955[(2)]);
var state_12955__$1 = state_12955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12955__$1,inst_12953);
} else {
if((state_val_12956 === (4))){
var inst_12945 = (state_12955[(2)]);
var inst_12946 = process.call(null,inst_12945);
var state_12955__$1 = state_12955;
if(cljs.core.truth_(inst_12946)){
var statearr_12958_13116 = state_12955__$1;
(statearr_12958_13116[(1)] = (5));

} else {
var statearr_12959_13117 = state_12955__$1;
(statearr_12959_13117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12956 === (5))){
var state_12955__$1 = state_12955;
var statearr_12960_13118 = state_12955__$1;
(statearr_12960_13118[(2)] = null);

(statearr_12960_13118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12956 === (6))){
var state_12955__$1 = state_12955;
var statearr_12961_13119 = state_12955__$1;
(statearr_12961_13119[(2)] = null);

(statearr_12961_13119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12956 === (7))){
var inst_12951 = (state_12955[(2)]);
var state_12955__$1 = state_12955;
var statearr_12962_13120 = state_12955__$1;
(statearr_12962_13120[(2)] = inst_12951);

(statearr_12962_13120[(1)] = (3));


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
});})(__13111,c__12557__auto___13114,G__12942_13112,n__7059__auto___13110,jobs,results,process,async))
;
return ((function (__13111,switch__12445__auto__,c__12557__auto___13114,G__12942_13112,n__7059__auto___13110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0 = (function (){
var statearr_12966 = [null,null,null,null,null,null,null];
(statearr_12966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__);

(statearr_12966[(1)] = (1));

return statearr_12966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1 = (function (state_12955){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_12955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e12967){if((e12967 instanceof Object)){
var ex__12449__auto__ = e12967;
var statearr_12968_13121 = state_12955;
(statearr_12968_13121[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13122 = state_12955;
state_12955 = G__13122;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = function(state_12955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1.call(this,state_12955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__;
})()
;})(__13111,switch__12445__auto__,c__12557__auto___13114,G__12942_13112,n__7059__auto___13110,jobs,results,process,async))
})();
var state__12559__auto__ = (function (){var statearr_12969 = f__12558__auto__.call(null);
(statearr_12969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___13114);

return statearr_12969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(__13111,c__12557__auto___13114,G__12942_13112,n__7059__auto___13110,jobs,results,process,async))
);


break;
case "async":
var c__12557__auto___13123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13111,c__12557__auto___13123,G__12942_13112,n__7059__auto___13110,jobs,results,process,async){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (__13111,c__12557__auto___13123,G__12942_13112,n__7059__auto___13110,jobs,results,process,async){
return (function (state_12982){
var state_val_12983 = (state_12982[(1)]);
if((state_val_12983 === (1))){
var state_12982__$1 = state_12982;
var statearr_12984_13124 = state_12982__$1;
(statearr_12984_13124[(2)] = null);

(statearr_12984_13124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (2))){
var state_12982__$1 = state_12982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12982__$1,(4),jobs);
} else {
if((state_val_12983 === (3))){
var inst_12980 = (state_12982[(2)]);
var state_12982__$1 = state_12982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12982__$1,inst_12980);
} else {
if((state_val_12983 === (4))){
var inst_12972 = (state_12982[(2)]);
var inst_12973 = async.call(null,inst_12972);
var state_12982__$1 = state_12982;
if(cljs.core.truth_(inst_12973)){
var statearr_12985_13125 = state_12982__$1;
(statearr_12985_13125[(1)] = (5));

} else {
var statearr_12986_13126 = state_12982__$1;
(statearr_12986_13126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (5))){
var state_12982__$1 = state_12982;
var statearr_12987_13127 = state_12982__$1;
(statearr_12987_13127[(2)] = null);

(statearr_12987_13127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (6))){
var state_12982__$1 = state_12982;
var statearr_12988_13128 = state_12982__$1;
(statearr_12988_13128[(2)] = null);

(statearr_12988_13128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12983 === (7))){
var inst_12978 = (state_12982[(2)]);
var state_12982__$1 = state_12982;
var statearr_12989_13129 = state_12982__$1;
(statearr_12989_13129[(2)] = inst_12978);

(statearr_12989_13129[(1)] = (3));


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
});})(__13111,c__12557__auto___13123,G__12942_13112,n__7059__auto___13110,jobs,results,process,async))
;
return ((function (__13111,switch__12445__auto__,c__12557__auto___13123,G__12942_13112,n__7059__auto___13110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0 = (function (){
var statearr_12993 = [null,null,null,null,null,null,null];
(statearr_12993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__);

(statearr_12993[(1)] = (1));

return statearr_12993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1 = (function (state_12982){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_12982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e12994){if((e12994 instanceof Object)){
var ex__12449__auto__ = e12994;
var statearr_12995_13130 = state_12982;
(statearr_12995_13130[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13131 = state_12982;
state_12982 = G__13131;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = function(state_12982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1.call(this,state_12982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__;
})()
;})(__13111,switch__12445__auto__,c__12557__auto___13123,G__12942_13112,n__7059__auto___13110,jobs,results,process,async))
})();
var state__12559__auto__ = (function (){var statearr_12996 = f__12558__auto__.call(null);
(statearr_12996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___13123);

return statearr_12996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(__13111,c__12557__auto___13123,G__12942_13112,n__7059__auto___13110,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13132 = (__13111 + (1));
__13111 = G__13132;
continue;
} else {
}
break;
}

var c__12557__auto___13133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___13133,jobs,results,process,async){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___13133,jobs,results,process,async){
return (function (state_13018){
var state_val_13019 = (state_13018[(1)]);
if((state_val_13019 === (1))){
var state_13018__$1 = state_13018;
var statearr_13020_13134 = state_13018__$1;
(statearr_13020_13134[(2)] = null);

(statearr_13020_13134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13019 === (2))){
var state_13018__$1 = state_13018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13018__$1,(4),from);
} else {
if((state_val_13019 === (3))){
var inst_13016 = (state_13018[(2)]);
var state_13018__$1 = state_13018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13018__$1,inst_13016);
} else {
if((state_val_13019 === (4))){
var inst_12999 = (state_13018[(7)]);
var inst_12999__$1 = (state_13018[(2)]);
var inst_13000 = (inst_12999__$1 == null);
var state_13018__$1 = (function (){var statearr_13021 = state_13018;
(statearr_13021[(7)] = inst_12999__$1);

return statearr_13021;
})();
if(cljs.core.truth_(inst_13000)){
var statearr_13022_13135 = state_13018__$1;
(statearr_13022_13135[(1)] = (5));

} else {
var statearr_13023_13136 = state_13018__$1;
(statearr_13023_13136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13019 === (5))){
var inst_13002 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13018__$1 = state_13018;
var statearr_13024_13137 = state_13018__$1;
(statearr_13024_13137[(2)] = inst_13002);

(statearr_13024_13137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13019 === (6))){
var inst_12999 = (state_13018[(7)]);
var inst_13004 = (state_13018[(8)]);
var inst_13004__$1 = cljs.core.async.chan.call(null,(1));
var inst_13005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13006 = [inst_12999,inst_13004__$1];
var inst_13007 = (new cljs.core.PersistentVector(null,2,(5),inst_13005,inst_13006,null));
var state_13018__$1 = (function (){var statearr_13025 = state_13018;
(statearr_13025[(8)] = inst_13004__$1);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13018__$1,(8),jobs,inst_13007);
} else {
if((state_val_13019 === (7))){
var inst_13014 = (state_13018[(2)]);
var state_13018__$1 = state_13018;
var statearr_13026_13138 = state_13018__$1;
(statearr_13026_13138[(2)] = inst_13014);

(statearr_13026_13138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13019 === (8))){
var inst_13004 = (state_13018[(8)]);
var inst_13009 = (state_13018[(2)]);
var state_13018__$1 = (function (){var statearr_13027 = state_13018;
(statearr_13027[(9)] = inst_13009);

return statearr_13027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13018__$1,(9),results,inst_13004);
} else {
if((state_val_13019 === (9))){
var inst_13011 = (state_13018[(2)]);
var state_13018__$1 = (function (){var statearr_13028 = state_13018;
(statearr_13028[(10)] = inst_13011);

return statearr_13028;
})();
var statearr_13029_13139 = state_13018__$1;
(statearr_13029_13139[(2)] = null);

(statearr_13029_13139[(1)] = (2));


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
});})(c__12557__auto___13133,jobs,results,process,async))
;
return ((function (switch__12445__auto__,c__12557__auto___13133,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0 = (function (){
var statearr_13033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__);

(statearr_13033[(1)] = (1));

return statearr_13033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1 = (function (state_13018){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_13018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e13034){if((e13034 instanceof Object)){
var ex__12449__auto__ = e13034;
var statearr_13035_13140 = state_13018;
(statearr_13035_13140[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_13018;
state_13018 = G__13141;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = function(state_13018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1.call(this,state_13018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___13133,jobs,results,process,async))
})();
var state__12559__auto__ = (function (){var statearr_13036 = f__12558__auto__.call(null);
(statearr_13036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___13133);

return statearr_13036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___13133,jobs,results,process,async))
);


var c__12557__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto__,jobs,results,process,async){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto__,jobs,results,process,async){
return (function (state_13074){
var state_val_13075 = (state_13074[(1)]);
if((state_val_13075 === (7))){
var inst_13070 = (state_13074[(2)]);
var state_13074__$1 = state_13074;
var statearr_13076_13142 = state_13074__$1;
(statearr_13076_13142[(2)] = inst_13070);

(statearr_13076_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (20))){
var state_13074__$1 = state_13074;
var statearr_13077_13143 = state_13074__$1;
(statearr_13077_13143[(2)] = null);

(statearr_13077_13143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (1))){
var state_13074__$1 = state_13074;
var statearr_13078_13144 = state_13074__$1;
(statearr_13078_13144[(2)] = null);

(statearr_13078_13144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (4))){
var inst_13039 = (state_13074[(7)]);
var inst_13039__$1 = (state_13074[(2)]);
var inst_13040 = (inst_13039__$1 == null);
var state_13074__$1 = (function (){var statearr_13079 = state_13074;
(statearr_13079[(7)] = inst_13039__$1);

return statearr_13079;
})();
if(cljs.core.truth_(inst_13040)){
var statearr_13080_13145 = state_13074__$1;
(statearr_13080_13145[(1)] = (5));

} else {
var statearr_13081_13146 = state_13074__$1;
(statearr_13081_13146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (15))){
var inst_13052 = (state_13074[(8)]);
var state_13074__$1 = state_13074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13074__$1,(18),to,inst_13052);
} else {
if((state_val_13075 === (21))){
var inst_13065 = (state_13074[(2)]);
var state_13074__$1 = state_13074;
var statearr_13082_13147 = state_13074__$1;
(statearr_13082_13147[(2)] = inst_13065);

(statearr_13082_13147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (13))){
var inst_13067 = (state_13074[(2)]);
var state_13074__$1 = (function (){var statearr_13083 = state_13074;
(statearr_13083[(9)] = inst_13067);

return statearr_13083;
})();
var statearr_13084_13148 = state_13074__$1;
(statearr_13084_13148[(2)] = null);

(statearr_13084_13148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (6))){
var inst_13039 = (state_13074[(7)]);
var state_13074__$1 = state_13074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13074__$1,(11),inst_13039);
} else {
if((state_val_13075 === (17))){
var inst_13060 = (state_13074[(2)]);
var state_13074__$1 = state_13074;
if(cljs.core.truth_(inst_13060)){
var statearr_13085_13149 = state_13074__$1;
(statearr_13085_13149[(1)] = (19));

} else {
var statearr_13086_13150 = state_13074__$1;
(statearr_13086_13150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (3))){
var inst_13072 = (state_13074[(2)]);
var state_13074__$1 = state_13074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13074__$1,inst_13072);
} else {
if((state_val_13075 === (12))){
var inst_13049 = (state_13074[(10)]);
var state_13074__$1 = state_13074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13074__$1,(14),inst_13049);
} else {
if((state_val_13075 === (2))){
var state_13074__$1 = state_13074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13074__$1,(4),results);
} else {
if((state_val_13075 === (19))){
var state_13074__$1 = state_13074;
var statearr_13087_13151 = state_13074__$1;
(statearr_13087_13151[(2)] = null);

(statearr_13087_13151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (11))){
var inst_13049 = (state_13074[(2)]);
var state_13074__$1 = (function (){var statearr_13088 = state_13074;
(statearr_13088[(10)] = inst_13049);

return statearr_13088;
})();
var statearr_13089_13152 = state_13074__$1;
(statearr_13089_13152[(2)] = null);

(statearr_13089_13152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (9))){
var state_13074__$1 = state_13074;
var statearr_13090_13153 = state_13074__$1;
(statearr_13090_13153[(2)] = null);

(statearr_13090_13153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (5))){
var state_13074__$1 = state_13074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13091_13154 = state_13074__$1;
(statearr_13091_13154[(1)] = (8));

} else {
var statearr_13092_13155 = state_13074__$1;
(statearr_13092_13155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (14))){
var inst_13052 = (state_13074[(8)]);
var inst_13054 = (state_13074[(11)]);
var inst_13052__$1 = (state_13074[(2)]);
var inst_13053 = (inst_13052__$1 == null);
var inst_13054__$1 = cljs.core.not.call(null,inst_13053);
var state_13074__$1 = (function (){var statearr_13093 = state_13074;
(statearr_13093[(8)] = inst_13052__$1);

(statearr_13093[(11)] = inst_13054__$1);

return statearr_13093;
})();
if(inst_13054__$1){
var statearr_13094_13156 = state_13074__$1;
(statearr_13094_13156[(1)] = (15));

} else {
var statearr_13095_13157 = state_13074__$1;
(statearr_13095_13157[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (16))){
var inst_13054 = (state_13074[(11)]);
var state_13074__$1 = state_13074;
var statearr_13096_13158 = state_13074__$1;
(statearr_13096_13158[(2)] = inst_13054);

(statearr_13096_13158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (10))){
var inst_13046 = (state_13074[(2)]);
var state_13074__$1 = state_13074;
var statearr_13097_13159 = state_13074__$1;
(statearr_13097_13159[(2)] = inst_13046);

(statearr_13097_13159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (18))){
var inst_13057 = (state_13074[(2)]);
var state_13074__$1 = state_13074;
var statearr_13098_13160 = state_13074__$1;
(statearr_13098_13160[(2)] = inst_13057);

(statearr_13098_13160[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13075 === (8))){
var inst_13043 = cljs.core.async.close_BANG_.call(null,to);
var state_13074__$1 = state_13074;
var statearr_13099_13161 = state_13074__$1;
(statearr_13099_13161[(2)] = inst_13043);

(statearr_13099_13161[(1)] = (10));


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
});})(c__12557__auto__,jobs,results,process,async))
;
return ((function (switch__12445__auto__,c__12557__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0 = (function (){
var statearr_13103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__);

(statearr_13103[(1)] = (1));

return statearr_13103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1 = (function (state_13074){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_13074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e13104){if((e13104 instanceof Object)){
var ex__12449__auto__ = e13104;
var statearr_13105_13162 = state_13074;
(statearr_13105_13162[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13163 = state_13074;
state_13074 = G__13163;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__ = function(state_13074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1.call(this,state_13074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto__,jobs,results,process,async))
})();
var state__12559__auto__ = (function (){var statearr_13106 = f__12558__auto__.call(null);
(statearr_13106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto__);

return statearr_13106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto__,jobs,results,process,async))
);

return c__12557__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13164 = [];
var len__7214__auto___13167 = arguments.length;
var i__7215__auto___13168 = (0);
while(true){
if((i__7215__auto___13168 < len__7214__auto___13167)){
args13164.push((arguments[i__7215__auto___13168]));

var G__13169 = (i__7215__auto___13168 + (1));
i__7215__auto___13168 = G__13169;
continue;
} else {
}
break;
}

var G__13166 = args13164.length;
switch (G__13166) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13164.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13171 = [];
var len__7214__auto___13174 = arguments.length;
var i__7215__auto___13175 = (0);
while(true){
if((i__7215__auto___13175 < len__7214__auto___13174)){
args13171.push((arguments[i__7215__auto___13175]));

var G__13176 = (i__7215__auto___13175 + (1));
i__7215__auto___13175 = G__13176;
continue;
} else {
}
break;
}

var G__13173 = args13171.length;
switch (G__13173) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13171.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13178 = [];
var len__7214__auto___13231 = arguments.length;
var i__7215__auto___13232 = (0);
while(true){
if((i__7215__auto___13232 < len__7214__auto___13231)){
args13178.push((arguments[i__7215__auto___13232]));

var G__13233 = (i__7215__auto___13232 + (1));
i__7215__auto___13232 = G__13233;
continue;
} else {
}
break;
}

var G__13180 = args13178.length;
switch (G__13180) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13178.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12557__auto___13235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___13235,tc,fc){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___13235,tc,fc){
return (function (state_13206){
var state_val_13207 = (state_13206[(1)]);
if((state_val_13207 === (7))){
var inst_13202 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
var statearr_13208_13236 = state_13206__$1;
(statearr_13208_13236[(2)] = inst_13202);

(statearr_13208_13236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (1))){
var state_13206__$1 = state_13206;
var statearr_13209_13237 = state_13206__$1;
(statearr_13209_13237[(2)] = null);

(statearr_13209_13237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (4))){
var inst_13183 = (state_13206[(7)]);
var inst_13183__$1 = (state_13206[(2)]);
var inst_13184 = (inst_13183__$1 == null);
var state_13206__$1 = (function (){var statearr_13210 = state_13206;
(statearr_13210[(7)] = inst_13183__$1);

return statearr_13210;
})();
if(cljs.core.truth_(inst_13184)){
var statearr_13211_13238 = state_13206__$1;
(statearr_13211_13238[(1)] = (5));

} else {
var statearr_13212_13239 = state_13206__$1;
(statearr_13212_13239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (13))){
var state_13206__$1 = state_13206;
var statearr_13213_13240 = state_13206__$1;
(statearr_13213_13240[(2)] = null);

(statearr_13213_13240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (6))){
var inst_13183 = (state_13206[(7)]);
var inst_13189 = p.call(null,inst_13183);
var state_13206__$1 = state_13206;
if(cljs.core.truth_(inst_13189)){
var statearr_13214_13241 = state_13206__$1;
(statearr_13214_13241[(1)] = (9));

} else {
var statearr_13215_13242 = state_13206__$1;
(statearr_13215_13242[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (3))){
var inst_13204 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13206__$1,inst_13204);
} else {
if((state_val_13207 === (12))){
var state_13206__$1 = state_13206;
var statearr_13216_13243 = state_13206__$1;
(statearr_13216_13243[(2)] = null);

(statearr_13216_13243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (2))){
var state_13206__$1 = state_13206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13206__$1,(4),ch);
} else {
if((state_val_13207 === (11))){
var inst_13183 = (state_13206[(7)]);
var inst_13193 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13206__$1,(8),inst_13193,inst_13183);
} else {
if((state_val_13207 === (9))){
var state_13206__$1 = state_13206;
var statearr_13217_13244 = state_13206__$1;
(statearr_13217_13244[(2)] = tc);

(statearr_13217_13244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (5))){
var inst_13186 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13187 = cljs.core.async.close_BANG_.call(null,fc);
var state_13206__$1 = (function (){var statearr_13218 = state_13206;
(statearr_13218[(8)] = inst_13186);

return statearr_13218;
})();
var statearr_13219_13245 = state_13206__$1;
(statearr_13219_13245[(2)] = inst_13187);

(statearr_13219_13245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (14))){
var inst_13200 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
var statearr_13220_13246 = state_13206__$1;
(statearr_13220_13246[(2)] = inst_13200);

(statearr_13220_13246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (10))){
var state_13206__$1 = state_13206;
var statearr_13221_13247 = state_13206__$1;
(statearr_13221_13247[(2)] = fc);

(statearr_13221_13247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (8))){
var inst_13195 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
if(cljs.core.truth_(inst_13195)){
var statearr_13222_13248 = state_13206__$1;
(statearr_13222_13248[(1)] = (12));

} else {
var statearr_13223_13249 = state_13206__$1;
(statearr_13223_13249[(1)] = (13));

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
});})(c__12557__auto___13235,tc,fc))
;
return ((function (switch__12445__auto__,c__12557__auto___13235,tc,fc){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_13227 = [null,null,null,null,null,null,null,null,null];
(statearr_13227[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_13227[(1)] = (1));

return statearr_13227;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_13206){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_13206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e13228){if((e13228 instanceof Object)){
var ex__12449__auto__ = e13228;
var statearr_13229_13250 = state_13206;
(statearr_13229_13250[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13251 = state_13206;
state_13206 = G__13251;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_13206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_13206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___13235,tc,fc))
})();
var state__12559__auto__ = (function (){var statearr_13230 = f__12558__auto__.call(null);
(statearr_13230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___13235);

return statearr_13230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___13235,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12557__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto__){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto__){
return (function (state_13315){
var state_val_13316 = (state_13315[(1)]);
if((state_val_13316 === (7))){
var inst_13311 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13317_13338 = state_13315__$1;
(statearr_13317_13338[(2)] = inst_13311);

(statearr_13317_13338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (1))){
var inst_13295 = init;
var state_13315__$1 = (function (){var statearr_13318 = state_13315;
(statearr_13318[(7)] = inst_13295);

return statearr_13318;
})();
var statearr_13319_13339 = state_13315__$1;
(statearr_13319_13339[(2)] = null);

(statearr_13319_13339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (4))){
var inst_13298 = (state_13315[(8)]);
var inst_13298__$1 = (state_13315[(2)]);
var inst_13299 = (inst_13298__$1 == null);
var state_13315__$1 = (function (){var statearr_13320 = state_13315;
(statearr_13320[(8)] = inst_13298__$1);

return statearr_13320;
})();
if(cljs.core.truth_(inst_13299)){
var statearr_13321_13340 = state_13315__$1;
(statearr_13321_13340[(1)] = (5));

} else {
var statearr_13322_13341 = state_13315__$1;
(statearr_13322_13341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (6))){
var inst_13302 = (state_13315[(9)]);
var inst_13298 = (state_13315[(8)]);
var inst_13295 = (state_13315[(7)]);
var inst_13302__$1 = f.call(null,inst_13295,inst_13298);
var inst_13303 = cljs.core.reduced_QMARK_.call(null,inst_13302__$1);
var state_13315__$1 = (function (){var statearr_13323 = state_13315;
(statearr_13323[(9)] = inst_13302__$1);

return statearr_13323;
})();
if(inst_13303){
var statearr_13324_13342 = state_13315__$1;
(statearr_13324_13342[(1)] = (8));

} else {
var statearr_13325_13343 = state_13315__$1;
(statearr_13325_13343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (3))){
var inst_13313 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13315__$1,inst_13313);
} else {
if((state_val_13316 === (2))){
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13315__$1,(4),ch);
} else {
if((state_val_13316 === (9))){
var inst_13302 = (state_13315[(9)]);
var inst_13295 = inst_13302;
var state_13315__$1 = (function (){var statearr_13326 = state_13315;
(statearr_13326[(7)] = inst_13295);

return statearr_13326;
})();
var statearr_13327_13344 = state_13315__$1;
(statearr_13327_13344[(2)] = null);

(statearr_13327_13344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (5))){
var inst_13295 = (state_13315[(7)]);
var state_13315__$1 = state_13315;
var statearr_13328_13345 = state_13315__$1;
(statearr_13328_13345[(2)] = inst_13295);

(statearr_13328_13345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (10))){
var inst_13309 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13329_13346 = state_13315__$1;
(statearr_13329_13346[(2)] = inst_13309);

(statearr_13329_13346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (8))){
var inst_13302 = (state_13315[(9)]);
var inst_13305 = cljs.core.deref.call(null,inst_13302);
var state_13315__$1 = state_13315;
var statearr_13330_13347 = state_13315__$1;
(statearr_13330_13347[(2)] = inst_13305);

(statearr_13330_13347[(1)] = (10));


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
});})(c__12557__auto__))
;
return ((function (switch__12445__auto__,c__12557__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12446__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12446__auto____0 = (function (){
var statearr_13334 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13334[(0)] = cljs$core$async$reduce_$_state_machine__12446__auto__);

(statearr_13334[(1)] = (1));

return statearr_13334;
});
var cljs$core$async$reduce_$_state_machine__12446__auto____1 = (function (state_13315){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_13315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e13335){if((e13335 instanceof Object)){
var ex__12449__auto__ = e13335;
var statearr_13336_13348 = state_13315;
(statearr_13336_13348[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13349 = state_13315;
state_13315 = G__13349;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12446__auto__ = function(state_13315){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12446__auto____1.call(this,state_13315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12446__auto____0;
cljs$core$async$reduce_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12446__auto____1;
return cljs$core$async$reduce_$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto__))
})();
var state__12559__auto__ = (function (){var statearr_13337 = f__12558__auto__.call(null);
(statearr_13337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto__);

return statearr_13337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto__))
);

return c__12557__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13350 = [];
var len__7214__auto___13402 = arguments.length;
var i__7215__auto___13403 = (0);
while(true){
if((i__7215__auto___13403 < len__7214__auto___13402)){
args13350.push((arguments[i__7215__auto___13403]));

var G__13404 = (i__7215__auto___13403 + (1));
i__7215__auto___13403 = G__13404;
continue;
} else {
}
break;
}

var G__13352 = args13350.length;
switch (G__13352) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13350.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12557__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto__){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto__){
return (function (state_13377){
var state_val_13378 = (state_13377[(1)]);
if((state_val_13378 === (7))){
var inst_13359 = (state_13377[(2)]);
var state_13377__$1 = state_13377;
var statearr_13379_13406 = state_13377__$1;
(statearr_13379_13406[(2)] = inst_13359);

(statearr_13379_13406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (1))){
var inst_13353 = cljs.core.seq.call(null,coll);
var inst_13354 = inst_13353;
var state_13377__$1 = (function (){var statearr_13380 = state_13377;
(statearr_13380[(7)] = inst_13354);

return statearr_13380;
})();
var statearr_13381_13407 = state_13377__$1;
(statearr_13381_13407[(2)] = null);

(statearr_13381_13407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (4))){
var inst_13354 = (state_13377[(7)]);
var inst_13357 = cljs.core.first.call(null,inst_13354);
var state_13377__$1 = state_13377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13377__$1,(7),ch,inst_13357);
} else {
if((state_val_13378 === (13))){
var inst_13371 = (state_13377[(2)]);
var state_13377__$1 = state_13377;
var statearr_13382_13408 = state_13377__$1;
(statearr_13382_13408[(2)] = inst_13371);

(statearr_13382_13408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (6))){
var inst_13362 = (state_13377[(2)]);
var state_13377__$1 = state_13377;
if(cljs.core.truth_(inst_13362)){
var statearr_13383_13409 = state_13377__$1;
(statearr_13383_13409[(1)] = (8));

} else {
var statearr_13384_13410 = state_13377__$1;
(statearr_13384_13410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (3))){
var inst_13375 = (state_13377[(2)]);
var state_13377__$1 = state_13377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13377__$1,inst_13375);
} else {
if((state_val_13378 === (12))){
var state_13377__$1 = state_13377;
var statearr_13385_13411 = state_13377__$1;
(statearr_13385_13411[(2)] = null);

(statearr_13385_13411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (2))){
var inst_13354 = (state_13377[(7)]);
var state_13377__$1 = state_13377;
if(cljs.core.truth_(inst_13354)){
var statearr_13386_13412 = state_13377__$1;
(statearr_13386_13412[(1)] = (4));

} else {
var statearr_13387_13413 = state_13377__$1;
(statearr_13387_13413[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (11))){
var inst_13368 = cljs.core.async.close_BANG_.call(null,ch);
var state_13377__$1 = state_13377;
var statearr_13388_13414 = state_13377__$1;
(statearr_13388_13414[(2)] = inst_13368);

(statearr_13388_13414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (9))){
var state_13377__$1 = state_13377;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13389_13415 = state_13377__$1;
(statearr_13389_13415[(1)] = (11));

} else {
var statearr_13390_13416 = state_13377__$1;
(statearr_13390_13416[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (5))){
var inst_13354 = (state_13377[(7)]);
var state_13377__$1 = state_13377;
var statearr_13391_13417 = state_13377__$1;
(statearr_13391_13417[(2)] = inst_13354);

(statearr_13391_13417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (10))){
var inst_13373 = (state_13377[(2)]);
var state_13377__$1 = state_13377;
var statearr_13392_13418 = state_13377__$1;
(statearr_13392_13418[(2)] = inst_13373);

(statearr_13392_13418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13378 === (8))){
var inst_13354 = (state_13377[(7)]);
var inst_13364 = cljs.core.next.call(null,inst_13354);
var inst_13354__$1 = inst_13364;
var state_13377__$1 = (function (){var statearr_13393 = state_13377;
(statearr_13393[(7)] = inst_13354__$1);

return statearr_13393;
})();
var statearr_13394_13419 = state_13377__$1;
(statearr_13394_13419[(2)] = null);

(statearr_13394_13419[(1)] = (2));


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
});})(c__12557__auto__))
;
return ((function (switch__12445__auto__,c__12557__auto__){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_13398 = [null,null,null,null,null,null,null,null];
(statearr_13398[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_13398[(1)] = (1));

return statearr_13398;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_13377){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_13377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e13399){if((e13399 instanceof Object)){
var ex__12449__auto__ = e13399;
var statearr_13400_13420 = state_13377;
(statearr_13400_13420[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13421 = state_13377;
state_13377 = G__13421;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_13377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_13377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto__))
})();
var state__12559__auto__ = (function (){var statearr_13401 = f__12558__auto__.call(null);
(statearr_13401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto__);

return statearr_13401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto__))
);

return c__12557__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,_);
} else {
var m__6812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13643 = (function (mult,ch,cs,meta13644){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13644 = meta13644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13645,meta13644__$1){
var self__ = this;
var _13645__$1 = this;
return (new cljs.core.async.t_cljs$core$async13643(self__.mult,self__.ch,self__.cs,meta13644__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13645){
var self__ = this;
var _13645__$1 = this;
return self__.meta13644;
});})(cs))
;

cljs.core.async.t_cljs$core$async13643.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13643.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13643.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13643.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13643.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13643.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13644","meta13644",2083115625,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13643";

cljs.core.async.t_cljs$core$async13643.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async13643");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13643 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13643(mult__$1,ch__$1,cs__$1,meta13644){
return (new cljs.core.async.t_cljs$core$async13643(mult__$1,ch__$1,cs__$1,meta13644));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13643(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12557__auto___13864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___13864,cs,m,dchan,dctr,done){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___13864,cs,m,dchan,dctr,done){
return (function (state_13776){
var state_val_13777 = (state_13776[(1)]);
if((state_val_13777 === (7))){
var inst_13772 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13778_13865 = state_13776__$1;
(statearr_13778_13865[(2)] = inst_13772);

(statearr_13778_13865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (20))){
var inst_13677 = (state_13776[(7)]);
var inst_13687 = cljs.core.first.call(null,inst_13677);
var inst_13688 = cljs.core.nth.call(null,inst_13687,(0),null);
var inst_13689 = cljs.core.nth.call(null,inst_13687,(1),null);
var state_13776__$1 = (function (){var statearr_13779 = state_13776;
(statearr_13779[(8)] = inst_13688);

return statearr_13779;
})();
if(cljs.core.truth_(inst_13689)){
var statearr_13780_13866 = state_13776__$1;
(statearr_13780_13866[(1)] = (22));

} else {
var statearr_13781_13867 = state_13776__$1;
(statearr_13781_13867[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (27))){
var inst_13717 = (state_13776[(9)]);
var inst_13719 = (state_13776[(10)]);
var inst_13648 = (state_13776[(11)]);
var inst_13724 = (state_13776[(12)]);
var inst_13724__$1 = cljs.core._nth.call(null,inst_13717,inst_13719);
var inst_13725 = cljs.core.async.put_BANG_.call(null,inst_13724__$1,inst_13648,done);
var state_13776__$1 = (function (){var statearr_13782 = state_13776;
(statearr_13782[(12)] = inst_13724__$1);

return statearr_13782;
})();
if(cljs.core.truth_(inst_13725)){
var statearr_13783_13868 = state_13776__$1;
(statearr_13783_13868[(1)] = (30));

} else {
var statearr_13784_13869 = state_13776__$1;
(statearr_13784_13869[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (1))){
var state_13776__$1 = state_13776;
var statearr_13785_13870 = state_13776__$1;
(statearr_13785_13870[(2)] = null);

(statearr_13785_13870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (24))){
var inst_13677 = (state_13776[(7)]);
var inst_13694 = (state_13776[(2)]);
var inst_13695 = cljs.core.next.call(null,inst_13677);
var inst_13657 = inst_13695;
var inst_13658 = null;
var inst_13659 = (0);
var inst_13660 = (0);
var state_13776__$1 = (function (){var statearr_13786 = state_13776;
(statearr_13786[(13)] = inst_13658);

(statearr_13786[(14)] = inst_13657);

(statearr_13786[(15)] = inst_13659);

(statearr_13786[(16)] = inst_13694);

(statearr_13786[(17)] = inst_13660);

return statearr_13786;
})();
var statearr_13787_13871 = state_13776__$1;
(statearr_13787_13871[(2)] = null);

(statearr_13787_13871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (39))){
var state_13776__$1 = state_13776;
var statearr_13791_13872 = state_13776__$1;
(statearr_13791_13872[(2)] = null);

(statearr_13791_13872[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (4))){
var inst_13648 = (state_13776[(11)]);
var inst_13648__$1 = (state_13776[(2)]);
var inst_13649 = (inst_13648__$1 == null);
var state_13776__$1 = (function (){var statearr_13792 = state_13776;
(statearr_13792[(11)] = inst_13648__$1);

return statearr_13792;
})();
if(cljs.core.truth_(inst_13649)){
var statearr_13793_13873 = state_13776__$1;
(statearr_13793_13873[(1)] = (5));

} else {
var statearr_13794_13874 = state_13776__$1;
(statearr_13794_13874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (15))){
var inst_13658 = (state_13776[(13)]);
var inst_13657 = (state_13776[(14)]);
var inst_13659 = (state_13776[(15)]);
var inst_13660 = (state_13776[(17)]);
var inst_13673 = (state_13776[(2)]);
var inst_13674 = (inst_13660 + (1));
var tmp13788 = inst_13658;
var tmp13789 = inst_13657;
var tmp13790 = inst_13659;
var inst_13657__$1 = tmp13789;
var inst_13658__$1 = tmp13788;
var inst_13659__$1 = tmp13790;
var inst_13660__$1 = inst_13674;
var state_13776__$1 = (function (){var statearr_13795 = state_13776;
(statearr_13795[(13)] = inst_13658__$1);

(statearr_13795[(14)] = inst_13657__$1);

(statearr_13795[(15)] = inst_13659__$1);

(statearr_13795[(17)] = inst_13660__$1);

(statearr_13795[(18)] = inst_13673);

return statearr_13795;
})();
var statearr_13796_13875 = state_13776__$1;
(statearr_13796_13875[(2)] = null);

(statearr_13796_13875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (21))){
var inst_13698 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13800_13876 = state_13776__$1;
(statearr_13800_13876[(2)] = inst_13698);

(statearr_13800_13876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (31))){
var inst_13724 = (state_13776[(12)]);
var inst_13728 = done.call(null,null);
var inst_13729 = cljs.core.async.untap_STAR_.call(null,m,inst_13724);
var state_13776__$1 = (function (){var statearr_13801 = state_13776;
(statearr_13801[(19)] = inst_13728);

return statearr_13801;
})();
var statearr_13802_13877 = state_13776__$1;
(statearr_13802_13877[(2)] = inst_13729);

(statearr_13802_13877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (32))){
var inst_13717 = (state_13776[(9)]);
var inst_13719 = (state_13776[(10)]);
var inst_13718 = (state_13776[(20)]);
var inst_13716 = (state_13776[(21)]);
var inst_13731 = (state_13776[(2)]);
var inst_13732 = (inst_13719 + (1));
var tmp13797 = inst_13717;
var tmp13798 = inst_13718;
var tmp13799 = inst_13716;
var inst_13716__$1 = tmp13799;
var inst_13717__$1 = tmp13797;
var inst_13718__$1 = tmp13798;
var inst_13719__$1 = inst_13732;
var state_13776__$1 = (function (){var statearr_13803 = state_13776;
(statearr_13803[(9)] = inst_13717__$1);

(statearr_13803[(10)] = inst_13719__$1);

(statearr_13803[(20)] = inst_13718__$1);

(statearr_13803[(22)] = inst_13731);

(statearr_13803[(21)] = inst_13716__$1);

return statearr_13803;
})();
var statearr_13804_13878 = state_13776__$1;
(statearr_13804_13878[(2)] = null);

(statearr_13804_13878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (40))){
var inst_13744 = (state_13776[(23)]);
var inst_13748 = done.call(null,null);
var inst_13749 = cljs.core.async.untap_STAR_.call(null,m,inst_13744);
var state_13776__$1 = (function (){var statearr_13805 = state_13776;
(statearr_13805[(24)] = inst_13748);

return statearr_13805;
})();
var statearr_13806_13879 = state_13776__$1;
(statearr_13806_13879[(2)] = inst_13749);

(statearr_13806_13879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (33))){
var inst_13735 = (state_13776[(25)]);
var inst_13737 = cljs.core.chunked_seq_QMARK_.call(null,inst_13735);
var state_13776__$1 = state_13776;
if(inst_13737){
var statearr_13807_13880 = state_13776__$1;
(statearr_13807_13880[(1)] = (36));

} else {
var statearr_13808_13881 = state_13776__$1;
(statearr_13808_13881[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (13))){
var inst_13667 = (state_13776[(26)]);
var inst_13670 = cljs.core.async.close_BANG_.call(null,inst_13667);
var state_13776__$1 = state_13776;
var statearr_13809_13882 = state_13776__$1;
(statearr_13809_13882[(2)] = inst_13670);

(statearr_13809_13882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (22))){
var inst_13688 = (state_13776[(8)]);
var inst_13691 = cljs.core.async.close_BANG_.call(null,inst_13688);
var state_13776__$1 = state_13776;
var statearr_13810_13883 = state_13776__$1;
(statearr_13810_13883[(2)] = inst_13691);

(statearr_13810_13883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (36))){
var inst_13735 = (state_13776[(25)]);
var inst_13739 = cljs.core.chunk_first.call(null,inst_13735);
var inst_13740 = cljs.core.chunk_rest.call(null,inst_13735);
var inst_13741 = cljs.core.count.call(null,inst_13739);
var inst_13716 = inst_13740;
var inst_13717 = inst_13739;
var inst_13718 = inst_13741;
var inst_13719 = (0);
var state_13776__$1 = (function (){var statearr_13811 = state_13776;
(statearr_13811[(9)] = inst_13717);

(statearr_13811[(10)] = inst_13719);

(statearr_13811[(20)] = inst_13718);

(statearr_13811[(21)] = inst_13716);

return statearr_13811;
})();
var statearr_13812_13884 = state_13776__$1;
(statearr_13812_13884[(2)] = null);

(statearr_13812_13884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (41))){
var inst_13735 = (state_13776[(25)]);
var inst_13751 = (state_13776[(2)]);
var inst_13752 = cljs.core.next.call(null,inst_13735);
var inst_13716 = inst_13752;
var inst_13717 = null;
var inst_13718 = (0);
var inst_13719 = (0);
var state_13776__$1 = (function (){var statearr_13813 = state_13776;
(statearr_13813[(9)] = inst_13717);

(statearr_13813[(10)] = inst_13719);

(statearr_13813[(20)] = inst_13718);

(statearr_13813[(27)] = inst_13751);

(statearr_13813[(21)] = inst_13716);

return statearr_13813;
})();
var statearr_13814_13885 = state_13776__$1;
(statearr_13814_13885[(2)] = null);

(statearr_13814_13885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (43))){
var state_13776__$1 = state_13776;
var statearr_13815_13886 = state_13776__$1;
(statearr_13815_13886[(2)] = null);

(statearr_13815_13886[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (29))){
var inst_13760 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13816_13887 = state_13776__$1;
(statearr_13816_13887[(2)] = inst_13760);

(statearr_13816_13887[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (44))){
var inst_13769 = (state_13776[(2)]);
var state_13776__$1 = (function (){var statearr_13817 = state_13776;
(statearr_13817[(28)] = inst_13769);

return statearr_13817;
})();
var statearr_13818_13888 = state_13776__$1;
(statearr_13818_13888[(2)] = null);

(statearr_13818_13888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (6))){
var inst_13708 = (state_13776[(29)]);
var inst_13707 = cljs.core.deref.call(null,cs);
var inst_13708__$1 = cljs.core.keys.call(null,inst_13707);
var inst_13709 = cljs.core.count.call(null,inst_13708__$1);
var inst_13710 = cljs.core.reset_BANG_.call(null,dctr,inst_13709);
var inst_13715 = cljs.core.seq.call(null,inst_13708__$1);
var inst_13716 = inst_13715;
var inst_13717 = null;
var inst_13718 = (0);
var inst_13719 = (0);
var state_13776__$1 = (function (){var statearr_13819 = state_13776;
(statearr_13819[(9)] = inst_13717);

(statearr_13819[(10)] = inst_13719);

(statearr_13819[(29)] = inst_13708__$1);

(statearr_13819[(20)] = inst_13718);

(statearr_13819[(21)] = inst_13716);

(statearr_13819[(30)] = inst_13710);

return statearr_13819;
})();
var statearr_13820_13889 = state_13776__$1;
(statearr_13820_13889[(2)] = null);

(statearr_13820_13889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (28))){
var inst_13716 = (state_13776[(21)]);
var inst_13735 = (state_13776[(25)]);
var inst_13735__$1 = cljs.core.seq.call(null,inst_13716);
var state_13776__$1 = (function (){var statearr_13821 = state_13776;
(statearr_13821[(25)] = inst_13735__$1);

return statearr_13821;
})();
if(inst_13735__$1){
var statearr_13822_13890 = state_13776__$1;
(statearr_13822_13890[(1)] = (33));

} else {
var statearr_13823_13891 = state_13776__$1;
(statearr_13823_13891[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (25))){
var inst_13719 = (state_13776[(10)]);
var inst_13718 = (state_13776[(20)]);
var inst_13721 = (inst_13719 < inst_13718);
var inst_13722 = inst_13721;
var state_13776__$1 = state_13776;
if(cljs.core.truth_(inst_13722)){
var statearr_13824_13892 = state_13776__$1;
(statearr_13824_13892[(1)] = (27));

} else {
var statearr_13825_13893 = state_13776__$1;
(statearr_13825_13893[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (34))){
var state_13776__$1 = state_13776;
var statearr_13826_13894 = state_13776__$1;
(statearr_13826_13894[(2)] = null);

(statearr_13826_13894[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (17))){
var state_13776__$1 = state_13776;
var statearr_13827_13895 = state_13776__$1;
(statearr_13827_13895[(2)] = null);

(statearr_13827_13895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (3))){
var inst_13774 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13776__$1,inst_13774);
} else {
if((state_val_13777 === (12))){
var inst_13703 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13828_13896 = state_13776__$1;
(statearr_13828_13896[(2)] = inst_13703);

(statearr_13828_13896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (2))){
var state_13776__$1 = state_13776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13776__$1,(4),ch);
} else {
if((state_val_13777 === (23))){
var state_13776__$1 = state_13776;
var statearr_13829_13897 = state_13776__$1;
(statearr_13829_13897[(2)] = null);

(statearr_13829_13897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (35))){
var inst_13758 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13830_13898 = state_13776__$1;
(statearr_13830_13898[(2)] = inst_13758);

(statearr_13830_13898[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (19))){
var inst_13677 = (state_13776[(7)]);
var inst_13681 = cljs.core.chunk_first.call(null,inst_13677);
var inst_13682 = cljs.core.chunk_rest.call(null,inst_13677);
var inst_13683 = cljs.core.count.call(null,inst_13681);
var inst_13657 = inst_13682;
var inst_13658 = inst_13681;
var inst_13659 = inst_13683;
var inst_13660 = (0);
var state_13776__$1 = (function (){var statearr_13831 = state_13776;
(statearr_13831[(13)] = inst_13658);

(statearr_13831[(14)] = inst_13657);

(statearr_13831[(15)] = inst_13659);

(statearr_13831[(17)] = inst_13660);

return statearr_13831;
})();
var statearr_13832_13899 = state_13776__$1;
(statearr_13832_13899[(2)] = null);

(statearr_13832_13899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (11))){
var inst_13657 = (state_13776[(14)]);
var inst_13677 = (state_13776[(7)]);
var inst_13677__$1 = cljs.core.seq.call(null,inst_13657);
var state_13776__$1 = (function (){var statearr_13833 = state_13776;
(statearr_13833[(7)] = inst_13677__$1);

return statearr_13833;
})();
if(inst_13677__$1){
var statearr_13834_13900 = state_13776__$1;
(statearr_13834_13900[(1)] = (16));

} else {
var statearr_13835_13901 = state_13776__$1;
(statearr_13835_13901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (9))){
var inst_13705 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13836_13902 = state_13776__$1;
(statearr_13836_13902[(2)] = inst_13705);

(statearr_13836_13902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (5))){
var inst_13655 = cljs.core.deref.call(null,cs);
var inst_13656 = cljs.core.seq.call(null,inst_13655);
var inst_13657 = inst_13656;
var inst_13658 = null;
var inst_13659 = (0);
var inst_13660 = (0);
var state_13776__$1 = (function (){var statearr_13837 = state_13776;
(statearr_13837[(13)] = inst_13658);

(statearr_13837[(14)] = inst_13657);

(statearr_13837[(15)] = inst_13659);

(statearr_13837[(17)] = inst_13660);

return statearr_13837;
})();
var statearr_13838_13903 = state_13776__$1;
(statearr_13838_13903[(2)] = null);

(statearr_13838_13903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (14))){
var state_13776__$1 = state_13776;
var statearr_13839_13904 = state_13776__$1;
(statearr_13839_13904[(2)] = null);

(statearr_13839_13904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (45))){
var inst_13766 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13840_13905 = state_13776__$1;
(statearr_13840_13905[(2)] = inst_13766);

(statearr_13840_13905[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (26))){
var inst_13708 = (state_13776[(29)]);
var inst_13762 = (state_13776[(2)]);
var inst_13763 = cljs.core.seq.call(null,inst_13708);
var state_13776__$1 = (function (){var statearr_13841 = state_13776;
(statearr_13841[(31)] = inst_13762);

return statearr_13841;
})();
if(inst_13763){
var statearr_13842_13906 = state_13776__$1;
(statearr_13842_13906[(1)] = (42));

} else {
var statearr_13843_13907 = state_13776__$1;
(statearr_13843_13907[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (16))){
var inst_13677 = (state_13776[(7)]);
var inst_13679 = cljs.core.chunked_seq_QMARK_.call(null,inst_13677);
var state_13776__$1 = state_13776;
if(inst_13679){
var statearr_13844_13908 = state_13776__$1;
(statearr_13844_13908[(1)] = (19));

} else {
var statearr_13845_13909 = state_13776__$1;
(statearr_13845_13909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (38))){
var inst_13755 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13846_13910 = state_13776__$1;
(statearr_13846_13910[(2)] = inst_13755);

(statearr_13846_13910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (30))){
var state_13776__$1 = state_13776;
var statearr_13847_13911 = state_13776__$1;
(statearr_13847_13911[(2)] = null);

(statearr_13847_13911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (10))){
var inst_13658 = (state_13776[(13)]);
var inst_13660 = (state_13776[(17)]);
var inst_13666 = cljs.core._nth.call(null,inst_13658,inst_13660);
var inst_13667 = cljs.core.nth.call(null,inst_13666,(0),null);
var inst_13668 = cljs.core.nth.call(null,inst_13666,(1),null);
var state_13776__$1 = (function (){var statearr_13848 = state_13776;
(statearr_13848[(26)] = inst_13667);

return statearr_13848;
})();
if(cljs.core.truth_(inst_13668)){
var statearr_13849_13912 = state_13776__$1;
(statearr_13849_13912[(1)] = (13));

} else {
var statearr_13850_13913 = state_13776__$1;
(statearr_13850_13913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (18))){
var inst_13701 = (state_13776[(2)]);
var state_13776__$1 = state_13776;
var statearr_13851_13914 = state_13776__$1;
(statearr_13851_13914[(2)] = inst_13701);

(statearr_13851_13914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (42))){
var state_13776__$1 = state_13776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13776__$1,(45),dchan);
} else {
if((state_val_13777 === (37))){
var inst_13744 = (state_13776[(23)]);
var inst_13648 = (state_13776[(11)]);
var inst_13735 = (state_13776[(25)]);
var inst_13744__$1 = cljs.core.first.call(null,inst_13735);
var inst_13745 = cljs.core.async.put_BANG_.call(null,inst_13744__$1,inst_13648,done);
var state_13776__$1 = (function (){var statearr_13852 = state_13776;
(statearr_13852[(23)] = inst_13744__$1);

return statearr_13852;
})();
if(cljs.core.truth_(inst_13745)){
var statearr_13853_13915 = state_13776__$1;
(statearr_13853_13915[(1)] = (39));

} else {
var statearr_13854_13916 = state_13776__$1;
(statearr_13854_13916[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13777 === (8))){
var inst_13659 = (state_13776[(15)]);
var inst_13660 = (state_13776[(17)]);
var inst_13662 = (inst_13660 < inst_13659);
var inst_13663 = inst_13662;
var state_13776__$1 = state_13776;
if(cljs.core.truth_(inst_13663)){
var statearr_13855_13917 = state_13776__$1;
(statearr_13855_13917[(1)] = (10));

} else {
var statearr_13856_13918 = state_13776__$1;
(statearr_13856_13918[(1)] = (11));

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
});})(c__12557__auto___13864,cs,m,dchan,dctr,done))
;
return ((function (switch__12445__auto__,c__12557__auto___13864,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12446__auto__ = null;
var cljs$core$async$mult_$_state_machine__12446__auto____0 = (function (){
var statearr_13860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13860[(0)] = cljs$core$async$mult_$_state_machine__12446__auto__);

(statearr_13860[(1)] = (1));

return statearr_13860;
});
var cljs$core$async$mult_$_state_machine__12446__auto____1 = (function (state_13776){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_13776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e13861){if((e13861 instanceof Object)){
var ex__12449__auto__ = e13861;
var statearr_13862_13919 = state_13776;
(statearr_13862_13919[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13920 = state_13776;
state_13776 = G__13920;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12446__auto__ = function(state_13776){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12446__auto____1.call(this,state_13776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12446__auto____0;
cljs$core$async$mult_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12446__auto____1;
return cljs$core$async$mult_$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___13864,cs,m,dchan,dctr,done))
})();
var state__12559__auto__ = (function (){var statearr_13863 = f__12558__auto__.call(null);
(statearr_13863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___13864);

return statearr_13863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___13864,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args13921 = [];
var len__7214__auto___13924 = arguments.length;
var i__7215__auto___13925 = (0);
while(true){
if((i__7215__auto___13925 < len__7214__auto___13924)){
args13921.push((arguments[i__7215__auto___13925]));

var G__13926 = (i__7215__auto___13925 + (1));
i__7215__auto___13925 = G__13926;
continue;
} else {
}
break;
}

var G__13923 = args13921.length;
switch (G__13923) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13921.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,state_map);
} else {
var m__6812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,mode);
} else {
var m__6812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___13938 = arguments.length;
var i__7215__auto___13939 = (0);
while(true){
if((i__7215__auto___13939 < len__7214__auto___13938)){
args__7221__auto__.push((arguments[i__7215__auto___13939]));

var G__13940 = (i__7215__auto___13939 + (1));
i__7215__auto___13939 = G__13940;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13932){
var map__13933 = p__13932;
var map__13933__$1 = ((((!((map__13933 == null)))?((((map__13933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13933):map__13933);
var opts = map__13933__$1;
var statearr_13935_13941 = state;
(statearr_13935_13941[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13933,map__13933__$1,opts){
return (function (val){
var statearr_13936_13942 = state;
(statearr_13936_13942[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13933,map__13933__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13937_13943 = state;
(statearr_13937_13943[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13928){
var G__13929 = cljs.core.first.call(null,seq13928);
var seq13928__$1 = cljs.core.next.call(null,seq13928);
var G__13930 = cljs.core.first.call(null,seq13928__$1);
var seq13928__$2 = cljs.core.next.call(null,seq13928__$1);
var G__13931 = cljs.core.first.call(null,seq13928__$2);
var seq13928__$3 = cljs.core.next.call(null,seq13928__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13929,G__13930,G__13931,seq13928__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14107 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14108){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14108 = meta14108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14109,meta14108__$1){
var self__ = this;
var _14109__$1 = this;
return (new cljs.core.async.t_cljs$core$async14107(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14108__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14109){
var self__ = this;
var _14109__$1 = this;
return self__.meta14108;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14108","meta14108",370705733,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14107";

cljs.core.async.t_cljs$core$async14107.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14107");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14107 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14107(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14108){
return (new cljs.core.async.t_cljs$core$async14107(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14108));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14107(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12557__auto___14270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___14270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___14270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14207){
var state_val_14208 = (state_14207[(1)]);
if((state_val_14208 === (7))){
var inst_14125 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
var statearr_14209_14271 = state_14207__$1;
(statearr_14209_14271[(2)] = inst_14125);

(statearr_14209_14271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (20))){
var inst_14137 = (state_14207[(7)]);
var state_14207__$1 = state_14207;
var statearr_14210_14272 = state_14207__$1;
(statearr_14210_14272[(2)] = inst_14137);

(statearr_14210_14272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (27))){
var state_14207__$1 = state_14207;
var statearr_14211_14273 = state_14207__$1;
(statearr_14211_14273[(2)] = null);

(statearr_14211_14273[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (1))){
var inst_14113 = (state_14207[(8)]);
var inst_14113__$1 = calc_state.call(null);
var inst_14115 = (inst_14113__$1 == null);
var inst_14116 = cljs.core.not.call(null,inst_14115);
var state_14207__$1 = (function (){var statearr_14212 = state_14207;
(statearr_14212[(8)] = inst_14113__$1);

return statearr_14212;
})();
if(inst_14116){
var statearr_14213_14274 = state_14207__$1;
(statearr_14213_14274[(1)] = (2));

} else {
var statearr_14214_14275 = state_14207__$1;
(statearr_14214_14275[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (24))){
var inst_14160 = (state_14207[(9)]);
var inst_14167 = (state_14207[(10)]);
var inst_14181 = (state_14207[(11)]);
var inst_14181__$1 = inst_14160.call(null,inst_14167);
var state_14207__$1 = (function (){var statearr_14215 = state_14207;
(statearr_14215[(11)] = inst_14181__$1);

return statearr_14215;
})();
if(cljs.core.truth_(inst_14181__$1)){
var statearr_14216_14276 = state_14207__$1;
(statearr_14216_14276[(1)] = (29));

} else {
var statearr_14217_14277 = state_14207__$1;
(statearr_14217_14277[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (4))){
var inst_14128 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
if(cljs.core.truth_(inst_14128)){
var statearr_14218_14278 = state_14207__$1;
(statearr_14218_14278[(1)] = (8));

} else {
var statearr_14219_14279 = state_14207__$1;
(statearr_14219_14279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (15))){
var inst_14154 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
if(cljs.core.truth_(inst_14154)){
var statearr_14220_14280 = state_14207__$1;
(statearr_14220_14280[(1)] = (19));

} else {
var statearr_14221_14281 = state_14207__$1;
(statearr_14221_14281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (21))){
var inst_14159 = (state_14207[(12)]);
var inst_14159__$1 = (state_14207[(2)]);
var inst_14160 = cljs.core.get.call(null,inst_14159__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14161 = cljs.core.get.call(null,inst_14159__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14162 = cljs.core.get.call(null,inst_14159__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14207__$1 = (function (){var statearr_14222 = state_14207;
(statearr_14222[(9)] = inst_14160);

(statearr_14222[(13)] = inst_14161);

(statearr_14222[(12)] = inst_14159__$1);

return statearr_14222;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14207__$1,(22),inst_14162);
} else {
if((state_val_14208 === (31))){
var inst_14189 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
if(cljs.core.truth_(inst_14189)){
var statearr_14223_14282 = state_14207__$1;
(statearr_14223_14282[(1)] = (32));

} else {
var statearr_14224_14283 = state_14207__$1;
(statearr_14224_14283[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (32))){
var inst_14166 = (state_14207[(14)]);
var state_14207__$1 = state_14207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14207__$1,(35),out,inst_14166);
} else {
if((state_val_14208 === (33))){
var inst_14159 = (state_14207[(12)]);
var inst_14137 = inst_14159;
var state_14207__$1 = (function (){var statearr_14225 = state_14207;
(statearr_14225[(7)] = inst_14137);

return statearr_14225;
})();
var statearr_14226_14284 = state_14207__$1;
(statearr_14226_14284[(2)] = null);

(statearr_14226_14284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (13))){
var inst_14137 = (state_14207[(7)]);
var inst_14144 = inst_14137.cljs$lang$protocol_mask$partition0$;
var inst_14145 = (inst_14144 & (64));
var inst_14146 = inst_14137.cljs$core$ISeq$;
var inst_14147 = (inst_14145) || (inst_14146);
var state_14207__$1 = state_14207;
if(cljs.core.truth_(inst_14147)){
var statearr_14227_14285 = state_14207__$1;
(statearr_14227_14285[(1)] = (16));

} else {
var statearr_14228_14286 = state_14207__$1;
(statearr_14228_14286[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (22))){
var inst_14167 = (state_14207[(10)]);
var inst_14166 = (state_14207[(14)]);
var inst_14165 = (state_14207[(2)]);
var inst_14166__$1 = cljs.core.nth.call(null,inst_14165,(0),null);
var inst_14167__$1 = cljs.core.nth.call(null,inst_14165,(1),null);
var inst_14168 = (inst_14166__$1 == null);
var inst_14169 = cljs.core._EQ_.call(null,inst_14167__$1,change);
var inst_14170 = (inst_14168) || (inst_14169);
var state_14207__$1 = (function (){var statearr_14229 = state_14207;
(statearr_14229[(10)] = inst_14167__$1);

(statearr_14229[(14)] = inst_14166__$1);

return statearr_14229;
})();
if(cljs.core.truth_(inst_14170)){
var statearr_14230_14287 = state_14207__$1;
(statearr_14230_14287[(1)] = (23));

} else {
var statearr_14231_14288 = state_14207__$1;
(statearr_14231_14288[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (36))){
var inst_14159 = (state_14207[(12)]);
var inst_14137 = inst_14159;
var state_14207__$1 = (function (){var statearr_14232 = state_14207;
(statearr_14232[(7)] = inst_14137);

return statearr_14232;
})();
var statearr_14233_14289 = state_14207__$1;
(statearr_14233_14289[(2)] = null);

(statearr_14233_14289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (29))){
var inst_14181 = (state_14207[(11)]);
var state_14207__$1 = state_14207;
var statearr_14234_14290 = state_14207__$1;
(statearr_14234_14290[(2)] = inst_14181);

(statearr_14234_14290[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (6))){
var state_14207__$1 = state_14207;
var statearr_14235_14291 = state_14207__$1;
(statearr_14235_14291[(2)] = false);

(statearr_14235_14291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (28))){
var inst_14177 = (state_14207[(2)]);
var inst_14178 = calc_state.call(null);
var inst_14137 = inst_14178;
var state_14207__$1 = (function (){var statearr_14236 = state_14207;
(statearr_14236[(7)] = inst_14137);

(statearr_14236[(15)] = inst_14177);

return statearr_14236;
})();
var statearr_14237_14292 = state_14207__$1;
(statearr_14237_14292[(2)] = null);

(statearr_14237_14292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (25))){
var inst_14203 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
var statearr_14238_14293 = state_14207__$1;
(statearr_14238_14293[(2)] = inst_14203);

(statearr_14238_14293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (34))){
var inst_14201 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
var statearr_14239_14294 = state_14207__$1;
(statearr_14239_14294[(2)] = inst_14201);

(statearr_14239_14294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (17))){
var state_14207__$1 = state_14207;
var statearr_14240_14295 = state_14207__$1;
(statearr_14240_14295[(2)] = false);

(statearr_14240_14295[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (3))){
var state_14207__$1 = state_14207;
var statearr_14241_14296 = state_14207__$1;
(statearr_14241_14296[(2)] = false);

(statearr_14241_14296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (12))){
var inst_14205 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14207__$1,inst_14205);
} else {
if((state_val_14208 === (2))){
var inst_14113 = (state_14207[(8)]);
var inst_14118 = inst_14113.cljs$lang$protocol_mask$partition0$;
var inst_14119 = (inst_14118 & (64));
var inst_14120 = inst_14113.cljs$core$ISeq$;
var inst_14121 = (inst_14119) || (inst_14120);
var state_14207__$1 = state_14207;
if(cljs.core.truth_(inst_14121)){
var statearr_14242_14297 = state_14207__$1;
(statearr_14242_14297[(1)] = (5));

} else {
var statearr_14243_14298 = state_14207__$1;
(statearr_14243_14298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (23))){
var inst_14166 = (state_14207[(14)]);
var inst_14172 = (inst_14166 == null);
var state_14207__$1 = state_14207;
if(cljs.core.truth_(inst_14172)){
var statearr_14244_14299 = state_14207__$1;
(statearr_14244_14299[(1)] = (26));

} else {
var statearr_14245_14300 = state_14207__$1;
(statearr_14245_14300[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (35))){
var inst_14192 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
if(cljs.core.truth_(inst_14192)){
var statearr_14246_14301 = state_14207__$1;
(statearr_14246_14301[(1)] = (36));

} else {
var statearr_14247_14302 = state_14207__$1;
(statearr_14247_14302[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (19))){
var inst_14137 = (state_14207[(7)]);
var inst_14156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14137);
var state_14207__$1 = state_14207;
var statearr_14248_14303 = state_14207__$1;
(statearr_14248_14303[(2)] = inst_14156);

(statearr_14248_14303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (11))){
var inst_14137 = (state_14207[(7)]);
var inst_14141 = (inst_14137 == null);
var inst_14142 = cljs.core.not.call(null,inst_14141);
var state_14207__$1 = state_14207;
if(inst_14142){
var statearr_14249_14304 = state_14207__$1;
(statearr_14249_14304[(1)] = (13));

} else {
var statearr_14250_14305 = state_14207__$1;
(statearr_14250_14305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (9))){
var inst_14113 = (state_14207[(8)]);
var state_14207__$1 = state_14207;
var statearr_14251_14306 = state_14207__$1;
(statearr_14251_14306[(2)] = inst_14113);

(statearr_14251_14306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (5))){
var state_14207__$1 = state_14207;
var statearr_14252_14307 = state_14207__$1;
(statearr_14252_14307[(2)] = true);

(statearr_14252_14307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (14))){
var state_14207__$1 = state_14207;
var statearr_14253_14308 = state_14207__$1;
(statearr_14253_14308[(2)] = false);

(statearr_14253_14308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (26))){
var inst_14167 = (state_14207[(10)]);
var inst_14174 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14167);
var state_14207__$1 = state_14207;
var statearr_14254_14309 = state_14207__$1;
(statearr_14254_14309[(2)] = inst_14174);

(statearr_14254_14309[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (16))){
var state_14207__$1 = state_14207;
var statearr_14255_14310 = state_14207__$1;
(statearr_14255_14310[(2)] = true);

(statearr_14255_14310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (38))){
var inst_14197 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
var statearr_14256_14311 = state_14207__$1;
(statearr_14256_14311[(2)] = inst_14197);

(statearr_14256_14311[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (30))){
var inst_14160 = (state_14207[(9)]);
var inst_14161 = (state_14207[(13)]);
var inst_14167 = (state_14207[(10)]);
var inst_14184 = cljs.core.empty_QMARK_.call(null,inst_14160);
var inst_14185 = inst_14161.call(null,inst_14167);
var inst_14186 = cljs.core.not.call(null,inst_14185);
var inst_14187 = (inst_14184) && (inst_14186);
var state_14207__$1 = state_14207;
var statearr_14257_14312 = state_14207__$1;
(statearr_14257_14312[(2)] = inst_14187);

(statearr_14257_14312[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (10))){
var inst_14113 = (state_14207[(8)]);
var inst_14133 = (state_14207[(2)]);
var inst_14134 = cljs.core.get.call(null,inst_14133,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14135 = cljs.core.get.call(null,inst_14133,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14136 = cljs.core.get.call(null,inst_14133,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14137 = inst_14113;
var state_14207__$1 = (function (){var statearr_14258 = state_14207;
(statearr_14258[(7)] = inst_14137);

(statearr_14258[(16)] = inst_14134);

(statearr_14258[(17)] = inst_14135);

(statearr_14258[(18)] = inst_14136);

return statearr_14258;
})();
var statearr_14259_14313 = state_14207__$1;
(statearr_14259_14313[(2)] = null);

(statearr_14259_14313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (18))){
var inst_14151 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
var statearr_14260_14314 = state_14207__$1;
(statearr_14260_14314[(2)] = inst_14151);

(statearr_14260_14314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (37))){
var state_14207__$1 = state_14207;
var statearr_14261_14315 = state_14207__$1;
(statearr_14261_14315[(2)] = null);

(statearr_14261_14315[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (8))){
var inst_14113 = (state_14207[(8)]);
var inst_14130 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14113);
var state_14207__$1 = state_14207;
var statearr_14262_14316 = state_14207__$1;
(statearr_14262_14316[(2)] = inst_14130);

(statearr_14262_14316[(1)] = (10));


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
});})(c__12557__auto___14270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12445__auto__,c__12557__auto___14270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12446__auto__ = null;
var cljs$core$async$mix_$_state_machine__12446__auto____0 = (function (){
var statearr_14266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14266[(0)] = cljs$core$async$mix_$_state_machine__12446__auto__);

(statearr_14266[(1)] = (1));

return statearr_14266;
});
var cljs$core$async$mix_$_state_machine__12446__auto____1 = (function (state_14207){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_14207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e14267){if((e14267 instanceof Object)){
var ex__12449__auto__ = e14267;
var statearr_14268_14317 = state_14207;
(statearr_14268_14317[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14318 = state_14207;
state_14207 = G__14318;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12446__auto__ = function(state_14207){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12446__auto____1.call(this,state_14207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12446__auto____0;
cljs$core$async$mix_$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12446__auto____1;
return cljs$core$async$mix_$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___14270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12559__auto__ = (function (){var statearr_14269 = f__12558__auto__.call(null);
(statearr_14269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___14270);

return statearr_14269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___14270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14319 = [];
var len__7214__auto___14322 = arguments.length;
var i__7215__auto___14323 = (0);
while(true){
if((i__7215__auto___14323 < len__7214__auto___14322)){
args14319.push((arguments[i__7215__auto___14323]));

var G__14324 = (i__7215__auto___14323 + (1));
i__7215__auto___14323 = G__14324;
continue;
} else {
}
break;
}

var G__14321 = args14319.length;
switch (G__14321) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14319.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14327 = [];
var len__7214__auto___14452 = arguments.length;
var i__7215__auto___14453 = (0);
while(true){
if((i__7215__auto___14453 < len__7214__auto___14452)){
args14327.push((arguments[i__7215__auto___14453]));

var G__14454 = (i__7215__auto___14453 + (1));
i__7215__auto___14453 = G__14454;
continue;
} else {
}
break;
}

var G__14329 = args14327.length;
switch (G__14329) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14327.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6156__auto__,mults){
return (function (p1__14326_SHARP_){
if(cljs.core.truth_(p1__14326_SHARP_.call(null,topic))){
return p1__14326_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14326_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14330 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14331){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14331 = meta14331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14332,meta14331__$1){
var self__ = this;
var _14332__$1 = this;
return (new cljs.core.async.t_cljs$core$async14330(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14331__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14332){
var self__ = this;
var _14332__$1 = this;
return self__.meta14331;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14330.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14331","meta14331",-1404079490,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14330";

cljs.core.async.t_cljs$core$async14330.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14330");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14330 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14331){
return (new cljs.core.async.t_cljs$core$async14330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14331));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14330(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12557__auto___14456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___14456,mults,ensure_mult,p){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___14456,mults,ensure_mult,p){
return (function (state_14404){
var state_val_14405 = (state_14404[(1)]);
if((state_val_14405 === (7))){
var inst_14400 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
var statearr_14406_14457 = state_14404__$1;
(statearr_14406_14457[(2)] = inst_14400);

(statearr_14406_14457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (20))){
var state_14404__$1 = state_14404;
var statearr_14407_14458 = state_14404__$1;
(statearr_14407_14458[(2)] = null);

(statearr_14407_14458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (1))){
var state_14404__$1 = state_14404;
var statearr_14408_14459 = state_14404__$1;
(statearr_14408_14459[(2)] = null);

(statearr_14408_14459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (24))){
var inst_14383 = (state_14404[(7)]);
var inst_14392 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14383);
var state_14404__$1 = state_14404;
var statearr_14409_14460 = state_14404__$1;
(statearr_14409_14460[(2)] = inst_14392);

(statearr_14409_14460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (4))){
var inst_14335 = (state_14404[(8)]);
var inst_14335__$1 = (state_14404[(2)]);
var inst_14336 = (inst_14335__$1 == null);
var state_14404__$1 = (function (){var statearr_14410 = state_14404;
(statearr_14410[(8)] = inst_14335__$1);

return statearr_14410;
})();
if(cljs.core.truth_(inst_14336)){
var statearr_14411_14461 = state_14404__$1;
(statearr_14411_14461[(1)] = (5));

} else {
var statearr_14412_14462 = state_14404__$1;
(statearr_14412_14462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (15))){
var inst_14377 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
var statearr_14413_14463 = state_14404__$1;
(statearr_14413_14463[(2)] = inst_14377);

(statearr_14413_14463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (21))){
var inst_14397 = (state_14404[(2)]);
var state_14404__$1 = (function (){var statearr_14414 = state_14404;
(statearr_14414[(9)] = inst_14397);

return statearr_14414;
})();
var statearr_14415_14464 = state_14404__$1;
(statearr_14415_14464[(2)] = null);

(statearr_14415_14464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (13))){
var inst_14359 = (state_14404[(10)]);
var inst_14361 = cljs.core.chunked_seq_QMARK_.call(null,inst_14359);
var state_14404__$1 = state_14404;
if(inst_14361){
var statearr_14416_14465 = state_14404__$1;
(statearr_14416_14465[(1)] = (16));

} else {
var statearr_14417_14466 = state_14404__$1;
(statearr_14417_14466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (22))){
var inst_14389 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
if(cljs.core.truth_(inst_14389)){
var statearr_14418_14467 = state_14404__$1;
(statearr_14418_14467[(1)] = (23));

} else {
var statearr_14419_14468 = state_14404__$1;
(statearr_14419_14468[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (6))){
var inst_14385 = (state_14404[(11)]);
var inst_14383 = (state_14404[(7)]);
var inst_14335 = (state_14404[(8)]);
var inst_14383__$1 = topic_fn.call(null,inst_14335);
var inst_14384 = cljs.core.deref.call(null,mults);
var inst_14385__$1 = cljs.core.get.call(null,inst_14384,inst_14383__$1);
var state_14404__$1 = (function (){var statearr_14420 = state_14404;
(statearr_14420[(11)] = inst_14385__$1);

(statearr_14420[(7)] = inst_14383__$1);

return statearr_14420;
})();
if(cljs.core.truth_(inst_14385__$1)){
var statearr_14421_14469 = state_14404__$1;
(statearr_14421_14469[(1)] = (19));

} else {
var statearr_14422_14470 = state_14404__$1;
(statearr_14422_14470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (25))){
var inst_14394 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
var statearr_14423_14471 = state_14404__$1;
(statearr_14423_14471[(2)] = inst_14394);

(statearr_14423_14471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (17))){
var inst_14359 = (state_14404[(10)]);
var inst_14368 = cljs.core.first.call(null,inst_14359);
var inst_14369 = cljs.core.async.muxch_STAR_.call(null,inst_14368);
var inst_14370 = cljs.core.async.close_BANG_.call(null,inst_14369);
var inst_14371 = cljs.core.next.call(null,inst_14359);
var inst_14345 = inst_14371;
var inst_14346 = null;
var inst_14347 = (0);
var inst_14348 = (0);
var state_14404__$1 = (function (){var statearr_14424 = state_14404;
(statearr_14424[(12)] = inst_14345);

(statearr_14424[(13)] = inst_14370);

(statearr_14424[(14)] = inst_14348);

(statearr_14424[(15)] = inst_14347);

(statearr_14424[(16)] = inst_14346);

return statearr_14424;
})();
var statearr_14425_14472 = state_14404__$1;
(statearr_14425_14472[(2)] = null);

(statearr_14425_14472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (3))){
var inst_14402 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14404__$1,inst_14402);
} else {
if((state_val_14405 === (12))){
var inst_14379 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
var statearr_14426_14473 = state_14404__$1;
(statearr_14426_14473[(2)] = inst_14379);

(statearr_14426_14473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (2))){
var state_14404__$1 = state_14404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14404__$1,(4),ch);
} else {
if((state_val_14405 === (23))){
var state_14404__$1 = state_14404;
var statearr_14427_14474 = state_14404__$1;
(statearr_14427_14474[(2)] = null);

(statearr_14427_14474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (19))){
var inst_14385 = (state_14404[(11)]);
var inst_14335 = (state_14404[(8)]);
var inst_14387 = cljs.core.async.muxch_STAR_.call(null,inst_14385);
var state_14404__$1 = state_14404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14404__$1,(22),inst_14387,inst_14335);
} else {
if((state_val_14405 === (11))){
var inst_14345 = (state_14404[(12)]);
var inst_14359 = (state_14404[(10)]);
var inst_14359__$1 = cljs.core.seq.call(null,inst_14345);
var state_14404__$1 = (function (){var statearr_14428 = state_14404;
(statearr_14428[(10)] = inst_14359__$1);

return statearr_14428;
})();
if(inst_14359__$1){
var statearr_14429_14475 = state_14404__$1;
(statearr_14429_14475[(1)] = (13));

} else {
var statearr_14430_14476 = state_14404__$1;
(statearr_14430_14476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (9))){
var inst_14381 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
var statearr_14431_14477 = state_14404__$1;
(statearr_14431_14477[(2)] = inst_14381);

(statearr_14431_14477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (5))){
var inst_14342 = cljs.core.deref.call(null,mults);
var inst_14343 = cljs.core.vals.call(null,inst_14342);
var inst_14344 = cljs.core.seq.call(null,inst_14343);
var inst_14345 = inst_14344;
var inst_14346 = null;
var inst_14347 = (0);
var inst_14348 = (0);
var state_14404__$1 = (function (){var statearr_14432 = state_14404;
(statearr_14432[(12)] = inst_14345);

(statearr_14432[(14)] = inst_14348);

(statearr_14432[(15)] = inst_14347);

(statearr_14432[(16)] = inst_14346);

return statearr_14432;
})();
var statearr_14433_14478 = state_14404__$1;
(statearr_14433_14478[(2)] = null);

(statearr_14433_14478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (14))){
var state_14404__$1 = state_14404;
var statearr_14437_14479 = state_14404__$1;
(statearr_14437_14479[(2)] = null);

(statearr_14437_14479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (16))){
var inst_14359 = (state_14404[(10)]);
var inst_14363 = cljs.core.chunk_first.call(null,inst_14359);
var inst_14364 = cljs.core.chunk_rest.call(null,inst_14359);
var inst_14365 = cljs.core.count.call(null,inst_14363);
var inst_14345 = inst_14364;
var inst_14346 = inst_14363;
var inst_14347 = inst_14365;
var inst_14348 = (0);
var state_14404__$1 = (function (){var statearr_14438 = state_14404;
(statearr_14438[(12)] = inst_14345);

(statearr_14438[(14)] = inst_14348);

(statearr_14438[(15)] = inst_14347);

(statearr_14438[(16)] = inst_14346);

return statearr_14438;
})();
var statearr_14439_14480 = state_14404__$1;
(statearr_14439_14480[(2)] = null);

(statearr_14439_14480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (10))){
var inst_14345 = (state_14404[(12)]);
var inst_14348 = (state_14404[(14)]);
var inst_14347 = (state_14404[(15)]);
var inst_14346 = (state_14404[(16)]);
var inst_14353 = cljs.core._nth.call(null,inst_14346,inst_14348);
var inst_14354 = cljs.core.async.muxch_STAR_.call(null,inst_14353);
var inst_14355 = cljs.core.async.close_BANG_.call(null,inst_14354);
var inst_14356 = (inst_14348 + (1));
var tmp14434 = inst_14345;
var tmp14435 = inst_14347;
var tmp14436 = inst_14346;
var inst_14345__$1 = tmp14434;
var inst_14346__$1 = tmp14436;
var inst_14347__$1 = tmp14435;
var inst_14348__$1 = inst_14356;
var state_14404__$1 = (function (){var statearr_14440 = state_14404;
(statearr_14440[(17)] = inst_14355);

(statearr_14440[(12)] = inst_14345__$1);

(statearr_14440[(14)] = inst_14348__$1);

(statearr_14440[(15)] = inst_14347__$1);

(statearr_14440[(16)] = inst_14346__$1);

return statearr_14440;
})();
var statearr_14441_14481 = state_14404__$1;
(statearr_14441_14481[(2)] = null);

(statearr_14441_14481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (18))){
var inst_14374 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
var statearr_14442_14482 = state_14404__$1;
(statearr_14442_14482[(2)] = inst_14374);

(statearr_14442_14482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (8))){
var inst_14348 = (state_14404[(14)]);
var inst_14347 = (state_14404[(15)]);
var inst_14350 = (inst_14348 < inst_14347);
var inst_14351 = inst_14350;
var state_14404__$1 = state_14404;
if(cljs.core.truth_(inst_14351)){
var statearr_14443_14483 = state_14404__$1;
(statearr_14443_14483[(1)] = (10));

} else {
var statearr_14444_14484 = state_14404__$1;
(statearr_14444_14484[(1)] = (11));

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
});})(c__12557__auto___14456,mults,ensure_mult,p))
;
return ((function (switch__12445__auto__,c__12557__auto___14456,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_14448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14448[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_14448[(1)] = (1));

return statearr_14448;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_14404){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_14404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e14449){if((e14449 instanceof Object)){
var ex__12449__auto__ = e14449;
var statearr_14450_14485 = state_14404;
(statearr_14450_14485[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14486 = state_14404;
state_14404 = G__14486;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_14404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_14404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___14456,mults,ensure_mult,p))
})();
var state__12559__auto__ = (function (){var statearr_14451 = f__12558__auto__.call(null);
(statearr_14451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___14456);

return statearr_14451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___14456,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14487 = [];
var len__7214__auto___14490 = arguments.length;
var i__7215__auto___14491 = (0);
while(true){
if((i__7215__auto___14491 < len__7214__auto___14490)){
args14487.push((arguments[i__7215__auto___14491]));

var G__14492 = (i__7215__auto___14491 + (1));
i__7215__auto___14491 = G__14492;
continue;
} else {
}
break;
}

var G__14489 = args14487.length;
switch (G__14489) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14487.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14494 = [];
var len__7214__auto___14497 = arguments.length;
var i__7215__auto___14498 = (0);
while(true){
if((i__7215__auto___14498 < len__7214__auto___14497)){
args14494.push((arguments[i__7215__auto___14498]));

var G__14499 = (i__7215__auto___14498 + (1));
i__7215__auto___14498 = G__14499;
continue;
} else {
}
break;
}

var G__14496 = args14494.length;
switch (G__14496) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14494.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args14501 = [];
var len__7214__auto___14572 = arguments.length;
var i__7215__auto___14573 = (0);
while(true){
if((i__7215__auto___14573 < len__7214__auto___14572)){
args14501.push((arguments[i__7215__auto___14573]));

var G__14574 = (i__7215__auto___14573 + (1));
i__7215__auto___14573 = G__14574;
continue;
} else {
}
break;
}

var G__14503 = args14501.length;
switch (G__14503) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14501.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12557__auto___14576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___14576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___14576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14542){
var state_val_14543 = (state_14542[(1)]);
if((state_val_14543 === (7))){
var state_14542__$1 = state_14542;
var statearr_14544_14577 = state_14542__$1;
(statearr_14544_14577[(2)] = null);

(statearr_14544_14577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (1))){
var state_14542__$1 = state_14542;
var statearr_14545_14578 = state_14542__$1;
(statearr_14545_14578[(2)] = null);

(statearr_14545_14578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (4))){
var inst_14506 = (state_14542[(7)]);
var inst_14508 = (inst_14506 < cnt);
var state_14542__$1 = state_14542;
if(cljs.core.truth_(inst_14508)){
var statearr_14546_14579 = state_14542__$1;
(statearr_14546_14579[(1)] = (6));

} else {
var statearr_14547_14580 = state_14542__$1;
(statearr_14547_14580[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (15))){
var inst_14538 = (state_14542[(2)]);
var state_14542__$1 = state_14542;
var statearr_14548_14581 = state_14542__$1;
(statearr_14548_14581[(2)] = inst_14538);

(statearr_14548_14581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (13))){
var inst_14531 = cljs.core.async.close_BANG_.call(null,out);
var state_14542__$1 = state_14542;
var statearr_14549_14582 = state_14542__$1;
(statearr_14549_14582[(2)] = inst_14531);

(statearr_14549_14582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (6))){
var state_14542__$1 = state_14542;
var statearr_14550_14583 = state_14542__$1;
(statearr_14550_14583[(2)] = null);

(statearr_14550_14583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (3))){
var inst_14540 = (state_14542[(2)]);
var state_14542__$1 = state_14542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14542__$1,inst_14540);
} else {
if((state_val_14543 === (12))){
var inst_14528 = (state_14542[(8)]);
var inst_14528__$1 = (state_14542[(2)]);
var inst_14529 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14528__$1);
var state_14542__$1 = (function (){var statearr_14551 = state_14542;
(statearr_14551[(8)] = inst_14528__$1);

return statearr_14551;
})();
if(cljs.core.truth_(inst_14529)){
var statearr_14552_14584 = state_14542__$1;
(statearr_14552_14584[(1)] = (13));

} else {
var statearr_14553_14585 = state_14542__$1;
(statearr_14553_14585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (2))){
var inst_14505 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14506 = (0);
var state_14542__$1 = (function (){var statearr_14554 = state_14542;
(statearr_14554[(7)] = inst_14506);

(statearr_14554[(9)] = inst_14505);

return statearr_14554;
})();
var statearr_14555_14586 = state_14542__$1;
(statearr_14555_14586[(2)] = null);

(statearr_14555_14586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (11))){
var inst_14506 = (state_14542[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14542,(10),Object,null,(9));
var inst_14515 = chs__$1.call(null,inst_14506);
var inst_14516 = done.call(null,inst_14506);
var inst_14517 = cljs.core.async.take_BANG_.call(null,inst_14515,inst_14516);
var state_14542__$1 = state_14542;
var statearr_14556_14587 = state_14542__$1;
(statearr_14556_14587[(2)] = inst_14517);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14542__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (9))){
var inst_14506 = (state_14542[(7)]);
var inst_14519 = (state_14542[(2)]);
var inst_14520 = (inst_14506 + (1));
var inst_14506__$1 = inst_14520;
var state_14542__$1 = (function (){var statearr_14557 = state_14542;
(statearr_14557[(7)] = inst_14506__$1);

(statearr_14557[(10)] = inst_14519);

return statearr_14557;
})();
var statearr_14558_14588 = state_14542__$1;
(statearr_14558_14588[(2)] = null);

(statearr_14558_14588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (5))){
var inst_14526 = (state_14542[(2)]);
var state_14542__$1 = (function (){var statearr_14559 = state_14542;
(statearr_14559[(11)] = inst_14526);

return statearr_14559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14542__$1,(12),dchan);
} else {
if((state_val_14543 === (14))){
var inst_14528 = (state_14542[(8)]);
var inst_14533 = cljs.core.apply.call(null,f,inst_14528);
var state_14542__$1 = state_14542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14542__$1,(16),out,inst_14533);
} else {
if((state_val_14543 === (16))){
var inst_14535 = (state_14542[(2)]);
var state_14542__$1 = (function (){var statearr_14560 = state_14542;
(statearr_14560[(12)] = inst_14535);

return statearr_14560;
})();
var statearr_14561_14589 = state_14542__$1;
(statearr_14561_14589[(2)] = null);

(statearr_14561_14589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (10))){
var inst_14510 = (state_14542[(2)]);
var inst_14511 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14542__$1 = (function (){var statearr_14562 = state_14542;
(statearr_14562[(13)] = inst_14510);

return statearr_14562;
})();
var statearr_14563_14590 = state_14542__$1;
(statearr_14563_14590[(2)] = inst_14511);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14542__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14543 === (8))){
var inst_14524 = (state_14542[(2)]);
var state_14542__$1 = state_14542;
var statearr_14564_14591 = state_14542__$1;
(statearr_14564_14591[(2)] = inst_14524);

(statearr_14564_14591[(1)] = (5));


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
});})(c__12557__auto___14576,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12445__auto__,c__12557__auto___14576,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_14568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14568[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_14568[(1)] = (1));

return statearr_14568;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_14542){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_14542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e14569){if((e14569 instanceof Object)){
var ex__12449__auto__ = e14569;
var statearr_14570_14592 = state_14542;
(statearr_14570_14592[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14593 = state_14542;
state_14542 = G__14593;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_14542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_14542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___14576,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12559__auto__ = (function (){var statearr_14571 = f__12558__auto__.call(null);
(statearr_14571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___14576);

return statearr_14571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___14576,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14595 = [];
var len__7214__auto___14651 = arguments.length;
var i__7215__auto___14652 = (0);
while(true){
if((i__7215__auto___14652 < len__7214__auto___14651)){
args14595.push((arguments[i__7215__auto___14652]));

var G__14653 = (i__7215__auto___14652 + (1));
i__7215__auto___14652 = G__14653;
continue;
} else {
}
break;
}

var G__14597 = args14595.length;
switch (G__14597) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14595.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12557__auto___14655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___14655,out){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___14655,out){
return (function (state_14627){
var state_val_14628 = (state_14627[(1)]);
if((state_val_14628 === (7))){
var inst_14607 = (state_14627[(7)]);
var inst_14606 = (state_14627[(8)]);
var inst_14606__$1 = (state_14627[(2)]);
var inst_14607__$1 = cljs.core.nth.call(null,inst_14606__$1,(0),null);
var inst_14608 = cljs.core.nth.call(null,inst_14606__$1,(1),null);
var inst_14609 = (inst_14607__$1 == null);
var state_14627__$1 = (function (){var statearr_14629 = state_14627;
(statearr_14629[(7)] = inst_14607__$1);

(statearr_14629[(8)] = inst_14606__$1);

(statearr_14629[(9)] = inst_14608);

return statearr_14629;
})();
if(cljs.core.truth_(inst_14609)){
var statearr_14630_14656 = state_14627__$1;
(statearr_14630_14656[(1)] = (8));

} else {
var statearr_14631_14657 = state_14627__$1;
(statearr_14631_14657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (1))){
var inst_14598 = cljs.core.vec.call(null,chs);
var inst_14599 = inst_14598;
var state_14627__$1 = (function (){var statearr_14632 = state_14627;
(statearr_14632[(10)] = inst_14599);

return statearr_14632;
})();
var statearr_14633_14658 = state_14627__$1;
(statearr_14633_14658[(2)] = null);

(statearr_14633_14658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (4))){
var inst_14599 = (state_14627[(10)]);
var state_14627__$1 = state_14627;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14627__$1,(7),inst_14599);
} else {
if((state_val_14628 === (6))){
var inst_14623 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14634_14659 = state_14627__$1;
(statearr_14634_14659[(2)] = inst_14623);

(statearr_14634_14659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (3))){
var inst_14625 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14627__$1,inst_14625);
} else {
if((state_val_14628 === (2))){
var inst_14599 = (state_14627[(10)]);
var inst_14601 = cljs.core.count.call(null,inst_14599);
var inst_14602 = (inst_14601 > (0));
var state_14627__$1 = state_14627;
if(cljs.core.truth_(inst_14602)){
var statearr_14636_14660 = state_14627__$1;
(statearr_14636_14660[(1)] = (4));

} else {
var statearr_14637_14661 = state_14627__$1;
(statearr_14637_14661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (11))){
var inst_14599 = (state_14627[(10)]);
var inst_14616 = (state_14627[(2)]);
var tmp14635 = inst_14599;
var inst_14599__$1 = tmp14635;
var state_14627__$1 = (function (){var statearr_14638 = state_14627;
(statearr_14638[(10)] = inst_14599__$1);

(statearr_14638[(11)] = inst_14616);

return statearr_14638;
})();
var statearr_14639_14662 = state_14627__$1;
(statearr_14639_14662[(2)] = null);

(statearr_14639_14662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (9))){
var inst_14607 = (state_14627[(7)]);
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14627__$1,(11),out,inst_14607);
} else {
if((state_val_14628 === (5))){
var inst_14621 = cljs.core.async.close_BANG_.call(null,out);
var state_14627__$1 = state_14627;
var statearr_14640_14663 = state_14627__$1;
(statearr_14640_14663[(2)] = inst_14621);

(statearr_14640_14663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (10))){
var inst_14619 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14641_14664 = state_14627__$1;
(statearr_14641_14664[(2)] = inst_14619);

(statearr_14641_14664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (8))){
var inst_14607 = (state_14627[(7)]);
var inst_14599 = (state_14627[(10)]);
var inst_14606 = (state_14627[(8)]);
var inst_14608 = (state_14627[(9)]);
var inst_14611 = (function (){var cs = inst_14599;
var vec__14604 = inst_14606;
var v = inst_14607;
var c = inst_14608;
return ((function (cs,vec__14604,v,c,inst_14607,inst_14599,inst_14606,inst_14608,state_val_14628,c__12557__auto___14655,out){
return (function (p1__14594_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14594_SHARP_);
});
;})(cs,vec__14604,v,c,inst_14607,inst_14599,inst_14606,inst_14608,state_val_14628,c__12557__auto___14655,out))
})();
var inst_14612 = cljs.core.filterv.call(null,inst_14611,inst_14599);
var inst_14599__$1 = inst_14612;
var state_14627__$1 = (function (){var statearr_14642 = state_14627;
(statearr_14642[(10)] = inst_14599__$1);

return statearr_14642;
})();
var statearr_14643_14665 = state_14627__$1;
(statearr_14643_14665[(2)] = null);

(statearr_14643_14665[(1)] = (2));


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
});})(c__12557__auto___14655,out))
;
return ((function (switch__12445__auto__,c__12557__auto___14655,out){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_14647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14647[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_14647[(1)] = (1));

return statearr_14647;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_14627){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_14627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e14648){if((e14648 instanceof Object)){
var ex__12449__auto__ = e14648;
var statearr_14649_14666 = state_14627;
(statearr_14649_14666[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14667 = state_14627;
state_14627 = G__14667;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_14627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_14627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___14655,out))
})();
var state__12559__auto__ = (function (){var statearr_14650 = f__12558__auto__.call(null);
(statearr_14650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___14655);

return statearr_14650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___14655,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args14668 = [];
var len__7214__auto___14717 = arguments.length;
var i__7215__auto___14718 = (0);
while(true){
if((i__7215__auto___14718 < len__7214__auto___14717)){
args14668.push((arguments[i__7215__auto___14718]));

var G__14719 = (i__7215__auto___14718 + (1));
i__7215__auto___14718 = G__14719;
continue;
} else {
}
break;
}

var G__14670 = args14668.length;
switch (G__14670) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14668.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12557__auto___14721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___14721,out){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___14721,out){
return (function (state_14694){
var state_val_14695 = (state_14694[(1)]);
if((state_val_14695 === (7))){
var inst_14676 = (state_14694[(7)]);
var inst_14676__$1 = (state_14694[(2)]);
var inst_14677 = (inst_14676__$1 == null);
var inst_14678 = cljs.core.not.call(null,inst_14677);
var state_14694__$1 = (function (){var statearr_14696 = state_14694;
(statearr_14696[(7)] = inst_14676__$1);

return statearr_14696;
})();
if(inst_14678){
var statearr_14697_14722 = state_14694__$1;
(statearr_14697_14722[(1)] = (8));

} else {
var statearr_14698_14723 = state_14694__$1;
(statearr_14698_14723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (1))){
var inst_14671 = (0);
var state_14694__$1 = (function (){var statearr_14699 = state_14694;
(statearr_14699[(8)] = inst_14671);

return statearr_14699;
})();
var statearr_14700_14724 = state_14694__$1;
(statearr_14700_14724[(2)] = null);

(statearr_14700_14724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (4))){
var state_14694__$1 = state_14694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14694__$1,(7),ch);
} else {
if((state_val_14695 === (6))){
var inst_14689 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
var statearr_14701_14725 = state_14694__$1;
(statearr_14701_14725[(2)] = inst_14689);

(statearr_14701_14725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (3))){
var inst_14691 = (state_14694[(2)]);
var inst_14692 = cljs.core.async.close_BANG_.call(null,out);
var state_14694__$1 = (function (){var statearr_14702 = state_14694;
(statearr_14702[(9)] = inst_14691);

return statearr_14702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14694__$1,inst_14692);
} else {
if((state_val_14695 === (2))){
var inst_14671 = (state_14694[(8)]);
var inst_14673 = (inst_14671 < n);
var state_14694__$1 = state_14694;
if(cljs.core.truth_(inst_14673)){
var statearr_14703_14726 = state_14694__$1;
(statearr_14703_14726[(1)] = (4));

} else {
var statearr_14704_14727 = state_14694__$1;
(statearr_14704_14727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (11))){
var inst_14671 = (state_14694[(8)]);
var inst_14681 = (state_14694[(2)]);
var inst_14682 = (inst_14671 + (1));
var inst_14671__$1 = inst_14682;
var state_14694__$1 = (function (){var statearr_14705 = state_14694;
(statearr_14705[(10)] = inst_14681);

(statearr_14705[(8)] = inst_14671__$1);

return statearr_14705;
})();
var statearr_14706_14728 = state_14694__$1;
(statearr_14706_14728[(2)] = null);

(statearr_14706_14728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (9))){
var state_14694__$1 = state_14694;
var statearr_14707_14729 = state_14694__$1;
(statearr_14707_14729[(2)] = null);

(statearr_14707_14729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (5))){
var state_14694__$1 = state_14694;
var statearr_14708_14730 = state_14694__$1;
(statearr_14708_14730[(2)] = null);

(statearr_14708_14730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (10))){
var inst_14686 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
var statearr_14709_14731 = state_14694__$1;
(statearr_14709_14731[(2)] = inst_14686);

(statearr_14709_14731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (8))){
var inst_14676 = (state_14694[(7)]);
var state_14694__$1 = state_14694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14694__$1,(11),out,inst_14676);
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
});})(c__12557__auto___14721,out))
;
return ((function (switch__12445__auto__,c__12557__auto___14721,out){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_14713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14713[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_14713[(1)] = (1));

return statearr_14713;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_14694){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_14694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e14714){if((e14714 instanceof Object)){
var ex__12449__auto__ = e14714;
var statearr_14715_14732 = state_14694;
(statearr_14715_14732[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14733 = state_14694;
state_14694 = G__14733;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_14694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_14694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___14721,out))
})();
var state__12559__auto__ = (function (){var statearr_14716 = f__12558__auto__.call(null);
(statearr_14716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___14721);

return statearr_14716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___14721,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14741 = (function (map_LT_,f,ch,meta14742){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14742 = meta14742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14743,meta14742__$1){
var self__ = this;
var _14743__$1 = this;
return (new cljs.core.async.t_cljs$core$async14741(self__.map_LT_,self__.f,self__.ch,meta14742__$1));
});

cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14743){
var self__ = this;
var _14743__$1 = this;
return self__.meta14742;
});

cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14744 = (function (map_LT_,f,ch,meta14742,_,fn1,meta14745){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14742 = meta14742;
this._ = _;
this.fn1 = fn1;
this.meta14745 = meta14745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14746,meta14745__$1){
var self__ = this;
var _14746__$1 = this;
return (new cljs.core.async.t_cljs$core$async14744(self__.map_LT_,self__.f,self__.ch,self__.meta14742,self__._,self__.fn1,meta14745__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14746){
var self__ = this;
var _14746__$1 = this;
return self__.meta14745;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14734_SHARP_){
return f1.call(null,(((p1__14734_SHARP_ == null))?null:self__.f.call(null,p1__14734_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14744.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14742","meta14742",-428150116,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14741","cljs.core.async/t_cljs$core$async14741",762198020,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14745","meta14745",-1819698604,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14744";

cljs.core.async.t_cljs$core$async14744.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14744");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14744 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14744(map_LT___$1,f__$1,ch__$1,meta14742__$1,___$2,fn1__$1,meta14745){
return (new cljs.core.async.t_cljs$core$async14744(map_LT___$1,f__$1,ch__$1,meta14742__$1,___$2,fn1__$1,meta14745));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14744(self__.map_LT_,self__.f,self__.ch,self__.meta14742,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14742","meta14742",-428150116,null)], null);
});

cljs.core.async.t_cljs$core$async14741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14741";

cljs.core.async.t_cljs$core$async14741.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14741");
});

cljs.core.async.__GT_t_cljs$core$async14741 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14741(map_LT___$1,f__$1,ch__$1,meta14742){
return (new cljs.core.async.t_cljs$core$async14741(map_LT___$1,f__$1,ch__$1,meta14742));
});

}

return (new cljs.core.async.t_cljs$core$async14741(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14750 = (function (map_GT_,f,ch,meta14751){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14751 = meta14751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14752,meta14751__$1){
var self__ = this;
var _14752__$1 = this;
return (new cljs.core.async.t_cljs$core$async14750(self__.map_GT_,self__.f,self__.ch,meta14751__$1));
});

cljs.core.async.t_cljs$core$async14750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14752){
var self__ = this;
var _14752__$1 = this;
return self__.meta14751;
});

cljs.core.async.t_cljs$core$async14750.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14750.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14750.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14750.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14750.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14750.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14751","meta14751",-2133394900,null)], null);
});

cljs.core.async.t_cljs$core$async14750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14750";

cljs.core.async.t_cljs$core$async14750.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14750");
});

cljs.core.async.__GT_t_cljs$core$async14750 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14750(map_GT___$1,f__$1,ch__$1,meta14751){
return (new cljs.core.async.t_cljs$core$async14750(map_GT___$1,f__$1,ch__$1,meta14751));
});

}

return (new cljs.core.async.t_cljs$core$async14750(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14756 = (function (filter_GT_,p,ch,meta14757){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14757 = meta14757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14758,meta14757__$1){
var self__ = this;
var _14758__$1 = this;
return (new cljs.core.async.t_cljs$core$async14756(self__.filter_GT_,self__.p,self__.ch,meta14757__$1));
});

cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14758){
var self__ = this;
var _14758__$1 = this;
return self__.meta14757;
});

cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14757","meta14757",866774700,null)], null);
});

cljs.core.async.t_cljs$core$async14756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14756";

cljs.core.async.t_cljs$core$async14756.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14756");
});

cljs.core.async.__GT_t_cljs$core$async14756 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14756(filter_GT___$1,p__$1,ch__$1,meta14757){
return (new cljs.core.async.t_cljs$core$async14756(filter_GT___$1,p__$1,ch__$1,meta14757));
});

}

return (new cljs.core.async.t_cljs$core$async14756(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args14759 = [];
var len__7214__auto___14803 = arguments.length;
var i__7215__auto___14804 = (0);
while(true){
if((i__7215__auto___14804 < len__7214__auto___14803)){
args14759.push((arguments[i__7215__auto___14804]));

var G__14805 = (i__7215__auto___14804 + (1));
i__7215__auto___14804 = G__14805;
continue;
} else {
}
break;
}

var G__14761 = args14759.length;
switch (G__14761) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14759.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12557__auto___14807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___14807,out){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___14807,out){
return (function (state_14782){
var state_val_14783 = (state_14782[(1)]);
if((state_val_14783 === (7))){
var inst_14778 = (state_14782[(2)]);
var state_14782__$1 = state_14782;
var statearr_14784_14808 = state_14782__$1;
(statearr_14784_14808[(2)] = inst_14778);

(statearr_14784_14808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (1))){
var state_14782__$1 = state_14782;
var statearr_14785_14809 = state_14782__$1;
(statearr_14785_14809[(2)] = null);

(statearr_14785_14809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (4))){
var inst_14764 = (state_14782[(7)]);
var inst_14764__$1 = (state_14782[(2)]);
var inst_14765 = (inst_14764__$1 == null);
var state_14782__$1 = (function (){var statearr_14786 = state_14782;
(statearr_14786[(7)] = inst_14764__$1);

return statearr_14786;
})();
if(cljs.core.truth_(inst_14765)){
var statearr_14787_14810 = state_14782__$1;
(statearr_14787_14810[(1)] = (5));

} else {
var statearr_14788_14811 = state_14782__$1;
(statearr_14788_14811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (6))){
var inst_14764 = (state_14782[(7)]);
var inst_14769 = p.call(null,inst_14764);
var state_14782__$1 = state_14782;
if(cljs.core.truth_(inst_14769)){
var statearr_14789_14812 = state_14782__$1;
(statearr_14789_14812[(1)] = (8));

} else {
var statearr_14790_14813 = state_14782__$1;
(statearr_14790_14813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (3))){
var inst_14780 = (state_14782[(2)]);
var state_14782__$1 = state_14782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14782__$1,inst_14780);
} else {
if((state_val_14783 === (2))){
var state_14782__$1 = state_14782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14782__$1,(4),ch);
} else {
if((state_val_14783 === (11))){
var inst_14772 = (state_14782[(2)]);
var state_14782__$1 = state_14782;
var statearr_14791_14814 = state_14782__$1;
(statearr_14791_14814[(2)] = inst_14772);

(statearr_14791_14814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (9))){
var state_14782__$1 = state_14782;
var statearr_14792_14815 = state_14782__$1;
(statearr_14792_14815[(2)] = null);

(statearr_14792_14815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (5))){
var inst_14767 = cljs.core.async.close_BANG_.call(null,out);
var state_14782__$1 = state_14782;
var statearr_14793_14816 = state_14782__$1;
(statearr_14793_14816[(2)] = inst_14767);

(statearr_14793_14816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (10))){
var inst_14775 = (state_14782[(2)]);
var state_14782__$1 = (function (){var statearr_14794 = state_14782;
(statearr_14794[(8)] = inst_14775);

return statearr_14794;
})();
var statearr_14795_14817 = state_14782__$1;
(statearr_14795_14817[(2)] = null);

(statearr_14795_14817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (8))){
var inst_14764 = (state_14782[(7)]);
var state_14782__$1 = state_14782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14782__$1,(11),out,inst_14764);
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
});})(c__12557__auto___14807,out))
;
return ((function (switch__12445__auto__,c__12557__auto___14807,out){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_14799 = [null,null,null,null,null,null,null,null,null];
(statearr_14799[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_14799[(1)] = (1));

return statearr_14799;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_14782){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_14782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e14800){if((e14800 instanceof Object)){
var ex__12449__auto__ = e14800;
var statearr_14801_14818 = state_14782;
(statearr_14801_14818[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14819 = state_14782;
state_14782 = G__14819;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_14782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_14782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___14807,out))
})();
var state__12559__auto__ = (function (){var statearr_14802 = f__12558__auto__.call(null);
(statearr_14802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___14807);

return statearr_14802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___14807,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14820 = [];
var len__7214__auto___14823 = arguments.length;
var i__7215__auto___14824 = (0);
while(true){
if((i__7215__auto___14824 < len__7214__auto___14823)){
args14820.push((arguments[i__7215__auto___14824]));

var G__14825 = (i__7215__auto___14824 + (1));
i__7215__auto___14824 = G__14825;
continue;
} else {
}
break;
}

var G__14822 = args14820.length;
switch (G__14822) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14820.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12557__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto__){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto__){
return (function (state_14992){
var state_val_14993 = (state_14992[(1)]);
if((state_val_14993 === (7))){
var inst_14988 = (state_14992[(2)]);
var state_14992__$1 = state_14992;
var statearr_14994_15035 = state_14992__$1;
(statearr_14994_15035[(2)] = inst_14988);

(statearr_14994_15035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (20))){
var inst_14958 = (state_14992[(7)]);
var inst_14969 = (state_14992[(2)]);
var inst_14970 = cljs.core.next.call(null,inst_14958);
var inst_14944 = inst_14970;
var inst_14945 = null;
var inst_14946 = (0);
var inst_14947 = (0);
var state_14992__$1 = (function (){var statearr_14995 = state_14992;
(statearr_14995[(8)] = inst_14947);

(statearr_14995[(9)] = inst_14945);

(statearr_14995[(10)] = inst_14944);

(statearr_14995[(11)] = inst_14946);

(statearr_14995[(12)] = inst_14969);

return statearr_14995;
})();
var statearr_14996_15036 = state_14992__$1;
(statearr_14996_15036[(2)] = null);

(statearr_14996_15036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (1))){
var state_14992__$1 = state_14992;
var statearr_14997_15037 = state_14992__$1;
(statearr_14997_15037[(2)] = null);

(statearr_14997_15037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (4))){
var inst_14933 = (state_14992[(13)]);
var inst_14933__$1 = (state_14992[(2)]);
var inst_14934 = (inst_14933__$1 == null);
var state_14992__$1 = (function (){var statearr_14998 = state_14992;
(statearr_14998[(13)] = inst_14933__$1);

return statearr_14998;
})();
if(cljs.core.truth_(inst_14934)){
var statearr_14999_15038 = state_14992__$1;
(statearr_14999_15038[(1)] = (5));

} else {
var statearr_15000_15039 = state_14992__$1;
(statearr_15000_15039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (15))){
var state_14992__$1 = state_14992;
var statearr_15004_15040 = state_14992__$1;
(statearr_15004_15040[(2)] = null);

(statearr_15004_15040[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (21))){
var state_14992__$1 = state_14992;
var statearr_15005_15041 = state_14992__$1;
(statearr_15005_15041[(2)] = null);

(statearr_15005_15041[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (13))){
var inst_14947 = (state_14992[(8)]);
var inst_14945 = (state_14992[(9)]);
var inst_14944 = (state_14992[(10)]);
var inst_14946 = (state_14992[(11)]);
var inst_14954 = (state_14992[(2)]);
var inst_14955 = (inst_14947 + (1));
var tmp15001 = inst_14945;
var tmp15002 = inst_14944;
var tmp15003 = inst_14946;
var inst_14944__$1 = tmp15002;
var inst_14945__$1 = tmp15001;
var inst_14946__$1 = tmp15003;
var inst_14947__$1 = inst_14955;
var state_14992__$1 = (function (){var statearr_15006 = state_14992;
(statearr_15006[(8)] = inst_14947__$1);

(statearr_15006[(9)] = inst_14945__$1);

(statearr_15006[(14)] = inst_14954);

(statearr_15006[(10)] = inst_14944__$1);

(statearr_15006[(11)] = inst_14946__$1);

return statearr_15006;
})();
var statearr_15007_15042 = state_14992__$1;
(statearr_15007_15042[(2)] = null);

(statearr_15007_15042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (22))){
var state_14992__$1 = state_14992;
var statearr_15008_15043 = state_14992__$1;
(statearr_15008_15043[(2)] = null);

(statearr_15008_15043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (6))){
var inst_14933 = (state_14992[(13)]);
var inst_14942 = f.call(null,inst_14933);
var inst_14943 = cljs.core.seq.call(null,inst_14942);
var inst_14944 = inst_14943;
var inst_14945 = null;
var inst_14946 = (0);
var inst_14947 = (0);
var state_14992__$1 = (function (){var statearr_15009 = state_14992;
(statearr_15009[(8)] = inst_14947);

(statearr_15009[(9)] = inst_14945);

(statearr_15009[(10)] = inst_14944);

(statearr_15009[(11)] = inst_14946);

return statearr_15009;
})();
var statearr_15010_15044 = state_14992__$1;
(statearr_15010_15044[(2)] = null);

(statearr_15010_15044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (17))){
var inst_14958 = (state_14992[(7)]);
var inst_14962 = cljs.core.chunk_first.call(null,inst_14958);
var inst_14963 = cljs.core.chunk_rest.call(null,inst_14958);
var inst_14964 = cljs.core.count.call(null,inst_14962);
var inst_14944 = inst_14963;
var inst_14945 = inst_14962;
var inst_14946 = inst_14964;
var inst_14947 = (0);
var state_14992__$1 = (function (){var statearr_15011 = state_14992;
(statearr_15011[(8)] = inst_14947);

(statearr_15011[(9)] = inst_14945);

(statearr_15011[(10)] = inst_14944);

(statearr_15011[(11)] = inst_14946);

return statearr_15011;
})();
var statearr_15012_15045 = state_14992__$1;
(statearr_15012_15045[(2)] = null);

(statearr_15012_15045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (3))){
var inst_14990 = (state_14992[(2)]);
var state_14992__$1 = state_14992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14992__$1,inst_14990);
} else {
if((state_val_14993 === (12))){
var inst_14978 = (state_14992[(2)]);
var state_14992__$1 = state_14992;
var statearr_15013_15046 = state_14992__$1;
(statearr_15013_15046[(2)] = inst_14978);

(statearr_15013_15046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (2))){
var state_14992__$1 = state_14992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14992__$1,(4),in$);
} else {
if((state_val_14993 === (23))){
var inst_14986 = (state_14992[(2)]);
var state_14992__$1 = state_14992;
var statearr_15014_15047 = state_14992__$1;
(statearr_15014_15047[(2)] = inst_14986);

(statearr_15014_15047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (19))){
var inst_14973 = (state_14992[(2)]);
var state_14992__$1 = state_14992;
var statearr_15015_15048 = state_14992__$1;
(statearr_15015_15048[(2)] = inst_14973);

(statearr_15015_15048[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (11))){
var inst_14944 = (state_14992[(10)]);
var inst_14958 = (state_14992[(7)]);
var inst_14958__$1 = cljs.core.seq.call(null,inst_14944);
var state_14992__$1 = (function (){var statearr_15016 = state_14992;
(statearr_15016[(7)] = inst_14958__$1);

return statearr_15016;
})();
if(inst_14958__$1){
var statearr_15017_15049 = state_14992__$1;
(statearr_15017_15049[(1)] = (14));

} else {
var statearr_15018_15050 = state_14992__$1;
(statearr_15018_15050[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (9))){
var inst_14980 = (state_14992[(2)]);
var inst_14981 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14992__$1 = (function (){var statearr_15019 = state_14992;
(statearr_15019[(15)] = inst_14980);

return statearr_15019;
})();
if(cljs.core.truth_(inst_14981)){
var statearr_15020_15051 = state_14992__$1;
(statearr_15020_15051[(1)] = (21));

} else {
var statearr_15021_15052 = state_14992__$1;
(statearr_15021_15052[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (5))){
var inst_14936 = cljs.core.async.close_BANG_.call(null,out);
var state_14992__$1 = state_14992;
var statearr_15022_15053 = state_14992__$1;
(statearr_15022_15053[(2)] = inst_14936);

(statearr_15022_15053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (14))){
var inst_14958 = (state_14992[(7)]);
var inst_14960 = cljs.core.chunked_seq_QMARK_.call(null,inst_14958);
var state_14992__$1 = state_14992;
if(inst_14960){
var statearr_15023_15054 = state_14992__$1;
(statearr_15023_15054[(1)] = (17));

} else {
var statearr_15024_15055 = state_14992__$1;
(statearr_15024_15055[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (16))){
var inst_14976 = (state_14992[(2)]);
var state_14992__$1 = state_14992;
var statearr_15025_15056 = state_14992__$1;
(statearr_15025_15056[(2)] = inst_14976);

(statearr_15025_15056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (10))){
var inst_14947 = (state_14992[(8)]);
var inst_14945 = (state_14992[(9)]);
var inst_14952 = cljs.core._nth.call(null,inst_14945,inst_14947);
var state_14992__$1 = state_14992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14992__$1,(13),out,inst_14952);
} else {
if((state_val_14993 === (18))){
var inst_14958 = (state_14992[(7)]);
var inst_14967 = cljs.core.first.call(null,inst_14958);
var state_14992__$1 = state_14992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14992__$1,(20),out,inst_14967);
} else {
if((state_val_14993 === (8))){
var inst_14947 = (state_14992[(8)]);
var inst_14946 = (state_14992[(11)]);
var inst_14949 = (inst_14947 < inst_14946);
var inst_14950 = inst_14949;
var state_14992__$1 = state_14992;
if(cljs.core.truth_(inst_14950)){
var statearr_15026_15057 = state_14992__$1;
(statearr_15026_15057[(1)] = (10));

} else {
var statearr_15027_15058 = state_14992__$1;
(statearr_15027_15058[(1)] = (11));

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
});})(c__12557__auto__))
;
return ((function (switch__12445__auto__,c__12557__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12446__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12446__auto____0 = (function (){
var statearr_15031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15031[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12446__auto__);

(statearr_15031[(1)] = (1));

return statearr_15031;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12446__auto____1 = (function (state_14992){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_14992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15032){if((e15032 instanceof Object)){
var ex__12449__auto__ = e15032;
var statearr_15033_15059 = state_14992;
(statearr_15033_15059[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15060 = state_14992;
state_14992 = G__15060;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12446__auto__ = function(state_14992){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12446__auto____1.call(this,state_14992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12446__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12446__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto__))
})();
var state__12559__auto__ = (function (){var statearr_15034 = f__12558__auto__.call(null);
(statearr_15034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto__);

return statearr_15034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto__))
);

return c__12557__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15061 = [];
var len__7214__auto___15064 = arguments.length;
var i__7215__auto___15065 = (0);
while(true){
if((i__7215__auto___15065 < len__7214__auto___15064)){
args15061.push((arguments[i__7215__auto___15065]));

var G__15066 = (i__7215__auto___15065 + (1));
i__7215__auto___15065 = G__15066;
continue;
} else {
}
break;
}

var G__15063 = args15061.length;
switch (G__15063) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15061.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15068 = [];
var len__7214__auto___15071 = arguments.length;
var i__7215__auto___15072 = (0);
while(true){
if((i__7215__auto___15072 < len__7214__auto___15071)){
args15068.push((arguments[i__7215__auto___15072]));

var G__15073 = (i__7215__auto___15072 + (1));
i__7215__auto___15072 = G__15073;
continue;
} else {
}
break;
}

var G__15070 = args15068.length;
switch (G__15070) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15068.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15075 = [];
var len__7214__auto___15126 = arguments.length;
var i__7215__auto___15127 = (0);
while(true){
if((i__7215__auto___15127 < len__7214__auto___15126)){
args15075.push((arguments[i__7215__auto___15127]));

var G__15128 = (i__7215__auto___15127 + (1));
i__7215__auto___15127 = G__15128;
continue;
} else {
}
break;
}

var G__15077 = args15075.length;
switch (G__15077) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15075.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12557__auto___15130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___15130,out){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___15130,out){
return (function (state_15101){
var state_val_15102 = (state_15101[(1)]);
if((state_val_15102 === (7))){
var inst_15096 = (state_15101[(2)]);
var state_15101__$1 = state_15101;
var statearr_15103_15131 = state_15101__$1;
(statearr_15103_15131[(2)] = inst_15096);

(statearr_15103_15131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (1))){
var inst_15078 = null;
var state_15101__$1 = (function (){var statearr_15104 = state_15101;
(statearr_15104[(7)] = inst_15078);

return statearr_15104;
})();
var statearr_15105_15132 = state_15101__$1;
(statearr_15105_15132[(2)] = null);

(statearr_15105_15132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (4))){
var inst_15081 = (state_15101[(8)]);
var inst_15081__$1 = (state_15101[(2)]);
var inst_15082 = (inst_15081__$1 == null);
var inst_15083 = cljs.core.not.call(null,inst_15082);
var state_15101__$1 = (function (){var statearr_15106 = state_15101;
(statearr_15106[(8)] = inst_15081__$1);

return statearr_15106;
})();
if(inst_15083){
var statearr_15107_15133 = state_15101__$1;
(statearr_15107_15133[(1)] = (5));

} else {
var statearr_15108_15134 = state_15101__$1;
(statearr_15108_15134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (6))){
var state_15101__$1 = state_15101;
var statearr_15109_15135 = state_15101__$1;
(statearr_15109_15135[(2)] = null);

(statearr_15109_15135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (3))){
var inst_15098 = (state_15101[(2)]);
var inst_15099 = cljs.core.async.close_BANG_.call(null,out);
var state_15101__$1 = (function (){var statearr_15110 = state_15101;
(statearr_15110[(9)] = inst_15098);

return statearr_15110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15101__$1,inst_15099);
} else {
if((state_val_15102 === (2))){
var state_15101__$1 = state_15101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15101__$1,(4),ch);
} else {
if((state_val_15102 === (11))){
var inst_15081 = (state_15101[(8)]);
var inst_15090 = (state_15101[(2)]);
var inst_15078 = inst_15081;
var state_15101__$1 = (function (){var statearr_15111 = state_15101;
(statearr_15111[(7)] = inst_15078);

(statearr_15111[(10)] = inst_15090);

return statearr_15111;
})();
var statearr_15112_15136 = state_15101__$1;
(statearr_15112_15136[(2)] = null);

(statearr_15112_15136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (9))){
var inst_15081 = (state_15101[(8)]);
var state_15101__$1 = state_15101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15101__$1,(11),out,inst_15081);
} else {
if((state_val_15102 === (5))){
var inst_15078 = (state_15101[(7)]);
var inst_15081 = (state_15101[(8)]);
var inst_15085 = cljs.core._EQ_.call(null,inst_15081,inst_15078);
var state_15101__$1 = state_15101;
if(inst_15085){
var statearr_15114_15137 = state_15101__$1;
(statearr_15114_15137[(1)] = (8));

} else {
var statearr_15115_15138 = state_15101__$1;
(statearr_15115_15138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (10))){
var inst_15093 = (state_15101[(2)]);
var state_15101__$1 = state_15101;
var statearr_15116_15139 = state_15101__$1;
(statearr_15116_15139[(2)] = inst_15093);

(statearr_15116_15139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (8))){
var inst_15078 = (state_15101[(7)]);
var tmp15113 = inst_15078;
var inst_15078__$1 = tmp15113;
var state_15101__$1 = (function (){var statearr_15117 = state_15101;
(statearr_15117[(7)] = inst_15078__$1);

return statearr_15117;
})();
var statearr_15118_15140 = state_15101__$1;
(statearr_15118_15140[(2)] = null);

(statearr_15118_15140[(1)] = (2));


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
});})(c__12557__auto___15130,out))
;
return ((function (switch__12445__auto__,c__12557__auto___15130,out){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_15122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15122[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_15122[(1)] = (1));

return statearr_15122;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_15101){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15123){if((e15123 instanceof Object)){
var ex__12449__auto__ = e15123;
var statearr_15124_15141 = state_15101;
(statearr_15124_15141[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15142 = state_15101;
state_15101 = G__15142;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_15101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_15101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___15130,out))
})();
var state__12559__auto__ = (function (){var statearr_15125 = f__12558__auto__.call(null);
(statearr_15125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___15130);

return statearr_15125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___15130,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15143 = [];
var len__7214__auto___15213 = arguments.length;
var i__7215__auto___15214 = (0);
while(true){
if((i__7215__auto___15214 < len__7214__auto___15213)){
args15143.push((arguments[i__7215__auto___15214]));

var G__15215 = (i__7215__auto___15214 + (1));
i__7215__auto___15214 = G__15215;
continue;
} else {
}
break;
}

var G__15145 = args15143.length;
switch (G__15145) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15143.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12557__auto___15217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___15217,out){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___15217,out){
return (function (state_15183){
var state_val_15184 = (state_15183[(1)]);
if((state_val_15184 === (7))){
var inst_15179 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
var statearr_15185_15218 = state_15183__$1;
(statearr_15185_15218[(2)] = inst_15179);

(statearr_15185_15218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (1))){
var inst_15146 = (new Array(n));
var inst_15147 = inst_15146;
var inst_15148 = (0);
var state_15183__$1 = (function (){var statearr_15186 = state_15183;
(statearr_15186[(7)] = inst_15147);

(statearr_15186[(8)] = inst_15148);

return statearr_15186;
})();
var statearr_15187_15219 = state_15183__$1;
(statearr_15187_15219[(2)] = null);

(statearr_15187_15219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (4))){
var inst_15151 = (state_15183[(9)]);
var inst_15151__$1 = (state_15183[(2)]);
var inst_15152 = (inst_15151__$1 == null);
var inst_15153 = cljs.core.not.call(null,inst_15152);
var state_15183__$1 = (function (){var statearr_15188 = state_15183;
(statearr_15188[(9)] = inst_15151__$1);

return statearr_15188;
})();
if(inst_15153){
var statearr_15189_15220 = state_15183__$1;
(statearr_15189_15220[(1)] = (5));

} else {
var statearr_15190_15221 = state_15183__$1;
(statearr_15190_15221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (15))){
var inst_15173 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
var statearr_15191_15222 = state_15183__$1;
(statearr_15191_15222[(2)] = inst_15173);

(statearr_15191_15222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (13))){
var state_15183__$1 = state_15183;
var statearr_15192_15223 = state_15183__$1;
(statearr_15192_15223[(2)] = null);

(statearr_15192_15223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (6))){
var inst_15148 = (state_15183[(8)]);
var inst_15169 = (inst_15148 > (0));
var state_15183__$1 = state_15183;
if(cljs.core.truth_(inst_15169)){
var statearr_15193_15224 = state_15183__$1;
(statearr_15193_15224[(1)] = (12));

} else {
var statearr_15194_15225 = state_15183__$1;
(statearr_15194_15225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (3))){
var inst_15181 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15183__$1,inst_15181);
} else {
if((state_val_15184 === (12))){
var inst_15147 = (state_15183[(7)]);
var inst_15171 = cljs.core.vec.call(null,inst_15147);
var state_15183__$1 = state_15183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15183__$1,(15),out,inst_15171);
} else {
if((state_val_15184 === (2))){
var state_15183__$1 = state_15183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15183__$1,(4),ch);
} else {
if((state_val_15184 === (11))){
var inst_15163 = (state_15183[(2)]);
var inst_15164 = (new Array(n));
var inst_15147 = inst_15164;
var inst_15148 = (0);
var state_15183__$1 = (function (){var statearr_15195 = state_15183;
(statearr_15195[(10)] = inst_15163);

(statearr_15195[(7)] = inst_15147);

(statearr_15195[(8)] = inst_15148);

return statearr_15195;
})();
var statearr_15196_15226 = state_15183__$1;
(statearr_15196_15226[(2)] = null);

(statearr_15196_15226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (9))){
var inst_15147 = (state_15183[(7)]);
var inst_15161 = cljs.core.vec.call(null,inst_15147);
var state_15183__$1 = state_15183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15183__$1,(11),out,inst_15161);
} else {
if((state_val_15184 === (5))){
var inst_15147 = (state_15183[(7)]);
var inst_15151 = (state_15183[(9)]);
var inst_15156 = (state_15183[(11)]);
var inst_15148 = (state_15183[(8)]);
var inst_15155 = (inst_15147[inst_15148] = inst_15151);
var inst_15156__$1 = (inst_15148 + (1));
var inst_15157 = (inst_15156__$1 < n);
var state_15183__$1 = (function (){var statearr_15197 = state_15183;
(statearr_15197[(12)] = inst_15155);

(statearr_15197[(11)] = inst_15156__$1);

return statearr_15197;
})();
if(cljs.core.truth_(inst_15157)){
var statearr_15198_15227 = state_15183__$1;
(statearr_15198_15227[(1)] = (8));

} else {
var statearr_15199_15228 = state_15183__$1;
(statearr_15199_15228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (14))){
var inst_15176 = (state_15183[(2)]);
var inst_15177 = cljs.core.async.close_BANG_.call(null,out);
var state_15183__$1 = (function (){var statearr_15201 = state_15183;
(statearr_15201[(13)] = inst_15176);

return statearr_15201;
})();
var statearr_15202_15229 = state_15183__$1;
(statearr_15202_15229[(2)] = inst_15177);

(statearr_15202_15229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (10))){
var inst_15167 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
var statearr_15203_15230 = state_15183__$1;
(statearr_15203_15230[(2)] = inst_15167);

(statearr_15203_15230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (8))){
var inst_15147 = (state_15183[(7)]);
var inst_15156 = (state_15183[(11)]);
var tmp15200 = inst_15147;
var inst_15147__$1 = tmp15200;
var inst_15148 = inst_15156;
var state_15183__$1 = (function (){var statearr_15204 = state_15183;
(statearr_15204[(7)] = inst_15147__$1);

(statearr_15204[(8)] = inst_15148);

return statearr_15204;
})();
var statearr_15205_15231 = state_15183__$1;
(statearr_15205_15231[(2)] = null);

(statearr_15205_15231[(1)] = (2));


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
});})(c__12557__auto___15217,out))
;
return ((function (switch__12445__auto__,c__12557__auto___15217,out){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_15209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15209[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_15209[(1)] = (1));

return statearr_15209;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_15183){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15210){if((e15210 instanceof Object)){
var ex__12449__auto__ = e15210;
var statearr_15211_15232 = state_15183;
(statearr_15211_15232[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15233 = state_15183;
state_15183 = G__15233;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_15183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_15183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___15217,out))
})();
var state__12559__auto__ = (function (){var statearr_15212 = f__12558__auto__.call(null);
(statearr_15212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___15217);

return statearr_15212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___15217,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15234 = [];
var len__7214__auto___15308 = arguments.length;
var i__7215__auto___15309 = (0);
while(true){
if((i__7215__auto___15309 < len__7214__auto___15308)){
args15234.push((arguments[i__7215__auto___15309]));

var G__15310 = (i__7215__auto___15309 + (1));
i__7215__auto___15309 = G__15310;
continue;
} else {
}
break;
}

var G__15236 = args15234.length;
switch (G__15236) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15234.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12557__auto___15312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12557__auto___15312,out){
return (function (){
var f__12558__auto__ = (function (){var switch__12445__auto__ = ((function (c__12557__auto___15312,out){
return (function (state_15278){
var state_val_15279 = (state_15278[(1)]);
if((state_val_15279 === (7))){
var inst_15274 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15280_15313 = state_15278__$1;
(statearr_15280_15313[(2)] = inst_15274);

(statearr_15280_15313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (1))){
var inst_15237 = [];
var inst_15238 = inst_15237;
var inst_15239 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15278__$1 = (function (){var statearr_15281 = state_15278;
(statearr_15281[(7)] = inst_15238);

(statearr_15281[(8)] = inst_15239);

return statearr_15281;
})();
var statearr_15282_15314 = state_15278__$1;
(statearr_15282_15314[(2)] = null);

(statearr_15282_15314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (4))){
var inst_15242 = (state_15278[(9)]);
var inst_15242__$1 = (state_15278[(2)]);
var inst_15243 = (inst_15242__$1 == null);
var inst_15244 = cljs.core.not.call(null,inst_15243);
var state_15278__$1 = (function (){var statearr_15283 = state_15278;
(statearr_15283[(9)] = inst_15242__$1);

return statearr_15283;
})();
if(inst_15244){
var statearr_15284_15315 = state_15278__$1;
(statearr_15284_15315[(1)] = (5));

} else {
var statearr_15285_15316 = state_15278__$1;
(statearr_15285_15316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (15))){
var inst_15268 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15286_15317 = state_15278__$1;
(statearr_15286_15317[(2)] = inst_15268);

(statearr_15286_15317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (13))){
var state_15278__$1 = state_15278;
var statearr_15287_15318 = state_15278__$1;
(statearr_15287_15318[(2)] = null);

(statearr_15287_15318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (6))){
var inst_15238 = (state_15278[(7)]);
var inst_15263 = inst_15238.length;
var inst_15264 = (inst_15263 > (0));
var state_15278__$1 = state_15278;
if(cljs.core.truth_(inst_15264)){
var statearr_15288_15319 = state_15278__$1;
(statearr_15288_15319[(1)] = (12));

} else {
var statearr_15289_15320 = state_15278__$1;
(statearr_15289_15320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (3))){
var inst_15276 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15278__$1,inst_15276);
} else {
if((state_val_15279 === (12))){
var inst_15238 = (state_15278[(7)]);
var inst_15266 = cljs.core.vec.call(null,inst_15238);
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15278__$1,(15),out,inst_15266);
} else {
if((state_val_15279 === (2))){
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15278__$1,(4),ch);
} else {
if((state_val_15279 === (11))){
var inst_15246 = (state_15278[(10)]);
var inst_15242 = (state_15278[(9)]);
var inst_15256 = (state_15278[(2)]);
var inst_15257 = [];
var inst_15258 = inst_15257.push(inst_15242);
var inst_15238 = inst_15257;
var inst_15239 = inst_15246;
var state_15278__$1 = (function (){var statearr_15290 = state_15278;
(statearr_15290[(7)] = inst_15238);

(statearr_15290[(11)] = inst_15256);

(statearr_15290[(12)] = inst_15258);

(statearr_15290[(8)] = inst_15239);

return statearr_15290;
})();
var statearr_15291_15321 = state_15278__$1;
(statearr_15291_15321[(2)] = null);

(statearr_15291_15321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (9))){
var inst_15238 = (state_15278[(7)]);
var inst_15254 = cljs.core.vec.call(null,inst_15238);
var state_15278__$1 = state_15278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15278__$1,(11),out,inst_15254);
} else {
if((state_val_15279 === (5))){
var inst_15246 = (state_15278[(10)]);
var inst_15239 = (state_15278[(8)]);
var inst_15242 = (state_15278[(9)]);
var inst_15246__$1 = f.call(null,inst_15242);
var inst_15247 = cljs.core._EQ_.call(null,inst_15246__$1,inst_15239);
var inst_15248 = cljs.core.keyword_identical_QMARK_.call(null,inst_15239,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15249 = (inst_15247) || (inst_15248);
var state_15278__$1 = (function (){var statearr_15292 = state_15278;
(statearr_15292[(10)] = inst_15246__$1);

return statearr_15292;
})();
if(cljs.core.truth_(inst_15249)){
var statearr_15293_15322 = state_15278__$1;
(statearr_15293_15322[(1)] = (8));

} else {
var statearr_15294_15323 = state_15278__$1;
(statearr_15294_15323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (14))){
var inst_15271 = (state_15278[(2)]);
var inst_15272 = cljs.core.async.close_BANG_.call(null,out);
var state_15278__$1 = (function (){var statearr_15296 = state_15278;
(statearr_15296[(13)] = inst_15271);

return statearr_15296;
})();
var statearr_15297_15324 = state_15278__$1;
(statearr_15297_15324[(2)] = inst_15272);

(statearr_15297_15324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (10))){
var inst_15261 = (state_15278[(2)]);
var state_15278__$1 = state_15278;
var statearr_15298_15325 = state_15278__$1;
(statearr_15298_15325[(2)] = inst_15261);

(statearr_15298_15325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15279 === (8))){
var inst_15238 = (state_15278[(7)]);
var inst_15246 = (state_15278[(10)]);
var inst_15242 = (state_15278[(9)]);
var inst_15251 = inst_15238.push(inst_15242);
var tmp15295 = inst_15238;
var inst_15238__$1 = tmp15295;
var inst_15239 = inst_15246;
var state_15278__$1 = (function (){var statearr_15299 = state_15278;
(statearr_15299[(7)] = inst_15238__$1);

(statearr_15299[(14)] = inst_15251);

(statearr_15299[(8)] = inst_15239);

return statearr_15299;
})();
var statearr_15300_15326 = state_15278__$1;
(statearr_15300_15326[(2)] = null);

(statearr_15300_15326[(1)] = (2));


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
});})(c__12557__auto___15312,out))
;
return ((function (switch__12445__auto__,c__12557__auto___15312,out){
return (function() {
var cljs$core$async$state_machine__12446__auto__ = null;
var cljs$core$async$state_machine__12446__auto____0 = (function (){
var statearr_15304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15304[(0)] = cljs$core$async$state_machine__12446__auto__);

(statearr_15304[(1)] = (1));

return statearr_15304;
});
var cljs$core$async$state_machine__12446__auto____1 = (function (state_15278){
while(true){
var ret_value__12447__auto__ = (function (){try{while(true){
var result__12448__auto__ = switch__12445__auto__.call(null,state_15278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12448__auto__;
}
break;
}
}catch (e15305){if((e15305 instanceof Object)){
var ex__12449__auto__ = e15305;
var statearr_15306_15327 = state_15278;
(statearr_15306_15327[(5)] = ex__12449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15328 = state_15278;
state_15278 = G__15328;
continue;
} else {
return ret_value__12447__auto__;
}
break;
}
});
cljs$core$async$state_machine__12446__auto__ = function(state_15278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12446__auto____1.call(this,state_15278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12446__auto____0;
cljs$core$async$state_machine__12446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12446__auto____1;
return cljs$core$async$state_machine__12446__auto__;
})()
;})(switch__12445__auto__,c__12557__auto___15312,out))
})();
var state__12559__auto__ = (function (){var statearr_15307 = f__12558__auto__.call(null);
(statearr_15307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12557__auto___15312);

return statearr_15307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12559__auto__);
});})(c__12557__auto___15312,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
