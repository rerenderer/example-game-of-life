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
var args20496 = [];
var len__19356__auto___20502 = arguments.length;
var i__19357__auto___20503 = (0);
while(true){
if((i__19357__auto___20503 < len__19356__auto___20502)){
args20496.push((arguments[i__19357__auto___20503]));

var G__20504 = (i__19357__auto___20503 + (1));
i__19357__auto___20503 = G__20504;
continue;
} else {
}
break;
}

var G__20498 = args20496.length;
switch (G__20498) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20496.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20499 = (function (f,blockable,meta20500){
this.f = f;
this.blockable = blockable;
this.meta20500 = meta20500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20501,meta20500__$1){
var self__ = this;
var _20501__$1 = this;
return (new cljs.core.async.t_cljs$core$async20499(self__.f,self__.blockable,meta20500__$1));
});

cljs.core.async.t_cljs$core$async20499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20501){
var self__ = this;
var _20501__$1 = this;
return self__.meta20500;
});

cljs.core.async.t_cljs$core$async20499.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20499.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20499.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20499.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20500","meta20500",1991180055,null)], null);
});

cljs.core.async.t_cljs$core$async20499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20499";

cljs.core.async.t_cljs$core$async20499.cljs$lang$ctorPrWriter = (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async20499");
});

cljs.core.async.__GT_t_cljs$core$async20499 = (function cljs$core$async$__GT_t_cljs$core$async20499(f__$1,blockable__$1,meta20500){
return (new cljs.core.async.t_cljs$core$async20499(f__$1,blockable__$1,meta20500));
});

}

return (new cljs.core.async.t_cljs$core$async20499(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20508 = [];
var len__19356__auto___20511 = arguments.length;
var i__19357__auto___20512 = (0);
while(true){
if((i__19357__auto___20512 < len__19356__auto___20511)){
args20508.push((arguments[i__19357__auto___20512]));

var G__20513 = (i__19357__auto___20512 + (1));
i__19357__auto___20512 = G__20513;
continue;
} else {
}
break;
}

var G__20510 = args20508.length;
switch (G__20510) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20508.length)].join('')));

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
var args20515 = [];
var len__19356__auto___20518 = arguments.length;
var i__19357__auto___20519 = (0);
while(true){
if((i__19357__auto___20519 < len__19356__auto___20518)){
args20515.push((arguments[i__19357__auto___20519]));

var G__20520 = (i__19357__auto___20519 + (1));
i__19357__auto___20519 = G__20520;
continue;
} else {
}
break;
}

var G__20517 = args20515.length;
switch (G__20517) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20515.length)].join('')));

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
var args20522 = [];
var len__19356__auto___20525 = arguments.length;
var i__19357__auto___20526 = (0);
while(true){
if((i__19357__auto___20526 < len__19356__auto___20525)){
args20522.push((arguments[i__19357__auto___20526]));

var G__20527 = (i__19357__auto___20526 + (1));
i__19357__auto___20526 = G__20527;
continue;
} else {
}
break;
}

var G__20524 = args20522.length;
switch (G__20524) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20522.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20529 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20529);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20529,ret){
return (function (){
return fn1.call(null,val_20529);
});})(val_20529,ret))
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
var args20530 = [];
var len__19356__auto___20533 = arguments.length;
var i__19357__auto___20534 = (0);
while(true){
if((i__19357__auto___20534 < len__19356__auto___20533)){
args20530.push((arguments[i__19357__auto___20534]));

var G__20535 = (i__19357__auto___20534 + (1));
i__19357__auto___20534 = G__20535;
continue;
} else {
}
break;
}

var G__20532 = args20530.length;
switch (G__20532) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20530.length)].join('')));

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
var n__19201__auto___20537 = n;
var x_20538 = (0);
while(true){
if((x_20538 < n__19201__auto___20537)){
(a[x_20538] = (0));

var G__20539 = (x_20538 + (1));
x_20538 = G__20539;
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

var G__20540 = (i + (1));
i = G__20540;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20544 = (function (alt_flag,flag,meta20545){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20545 = meta20545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20546,meta20545__$1){
var self__ = this;
var _20546__$1 = this;
return (new cljs.core.async.t_cljs$core$async20544(self__.alt_flag,self__.flag,meta20545__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20546){
var self__ = this;
var _20546__$1 = this;
return self__.meta20545;
});})(flag))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20544.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20545","meta20545",1032698265,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20544";

cljs.core.async.t_cljs$core$async20544.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async20544");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20544 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20544(alt_flag__$1,flag__$1,meta20545){
return (new cljs.core.async.t_cljs$core$async20544(alt_flag__$1,flag__$1,meta20545));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20544(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20550 = (function (alt_handler,flag,cb,meta20551){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20551 = meta20551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20552,meta20551__$1){
var self__ = this;
var _20552__$1 = this;
return (new cljs.core.async.t_cljs$core$async20550(self__.alt_handler,self__.flag,self__.cb,meta20551__$1));
});

cljs.core.async.t_cljs$core$async20550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20552){
var self__ = this;
var _20552__$1 = this;
return self__.meta20551;
});

cljs.core.async.t_cljs$core$async20550.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20551","meta20551",-179587946,null)], null);
});

cljs.core.async.t_cljs$core$async20550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20550";

cljs.core.async.t_cljs$core$async20550.cljs$lang$ctorPrWriter = (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async20550");
});

cljs.core.async.__GT_t_cljs$core$async20550 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20550(alt_handler__$1,flag__$1,cb__$1,meta20551){
return (new cljs.core.async.t_cljs$core$async20550(alt_handler__$1,flag__$1,cb__$1,meta20551));
});

}

return (new cljs.core.async.t_cljs$core$async20550(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20553_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20553_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20554_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20554_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18298__auto__ = wport;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20555 = (i + (1));
i = G__20555;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18298__auto__ = ret;
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18286__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18286__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18286__auto__;
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
var args__19363__auto__ = [];
var len__19356__auto___20561 = arguments.length;
var i__19357__auto___20562 = (0);
while(true){
if((i__19357__auto___20562 < len__19356__auto___20561)){
args__19363__auto__.push((arguments[i__19357__auto___20562]));

var G__20563 = (i__19357__auto___20562 + (1));
i__19357__auto___20562 = G__20563;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((1) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19364__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20558){
var map__20559 = p__20558;
var map__20559__$1 = ((((!((map__20559 == null)))?((((map__20559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20559):map__20559);
var opts = map__20559__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20556){
var G__20557 = cljs.core.first.call(null,seq20556);
var seq20556__$1 = cljs.core.next.call(null,seq20556);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20557,seq20556__$1);
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
var args20564 = [];
var len__19356__auto___20614 = arguments.length;
var i__19357__auto___20615 = (0);
while(true){
if((i__19357__auto___20615 < len__19356__auto___20614)){
args20564.push((arguments[i__19357__auto___20615]));

var G__20616 = (i__19357__auto___20615 + (1));
i__19357__auto___20615 = G__20616;
continue;
} else {
}
break;
}

var G__20566 = args20564.length;
switch (G__20566) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20564.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20451__auto___20618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___20618){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___20618){
return (function (state_20590){
var state_val_20591 = (state_20590[(1)]);
if((state_val_20591 === (7))){
var inst_20586 = (state_20590[(2)]);
var state_20590__$1 = state_20590;
var statearr_20592_20619 = state_20590__$1;
(statearr_20592_20619[(2)] = inst_20586);

(statearr_20592_20619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (1))){
var state_20590__$1 = state_20590;
var statearr_20593_20620 = state_20590__$1;
(statearr_20593_20620[(2)] = null);

(statearr_20593_20620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (4))){
var inst_20569 = (state_20590[(7)]);
var inst_20569__$1 = (state_20590[(2)]);
var inst_20570 = (inst_20569__$1 == null);
var state_20590__$1 = (function (){var statearr_20594 = state_20590;
(statearr_20594[(7)] = inst_20569__$1);

return statearr_20594;
})();
if(cljs.core.truth_(inst_20570)){
var statearr_20595_20621 = state_20590__$1;
(statearr_20595_20621[(1)] = (5));

} else {
var statearr_20596_20622 = state_20590__$1;
(statearr_20596_20622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (13))){
var state_20590__$1 = state_20590;
var statearr_20597_20623 = state_20590__$1;
(statearr_20597_20623[(2)] = null);

(statearr_20597_20623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (6))){
var inst_20569 = (state_20590[(7)]);
var state_20590__$1 = state_20590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20590__$1,(11),to,inst_20569);
} else {
if((state_val_20591 === (3))){
var inst_20588 = (state_20590[(2)]);
var state_20590__$1 = state_20590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20590__$1,inst_20588);
} else {
if((state_val_20591 === (12))){
var state_20590__$1 = state_20590;
var statearr_20598_20624 = state_20590__$1;
(statearr_20598_20624[(2)] = null);

(statearr_20598_20624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (2))){
var state_20590__$1 = state_20590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20590__$1,(4),from);
} else {
if((state_val_20591 === (11))){
var inst_20579 = (state_20590[(2)]);
var state_20590__$1 = state_20590;
if(cljs.core.truth_(inst_20579)){
var statearr_20599_20625 = state_20590__$1;
(statearr_20599_20625[(1)] = (12));

} else {
var statearr_20600_20626 = state_20590__$1;
(statearr_20600_20626[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (9))){
var state_20590__$1 = state_20590;
var statearr_20601_20627 = state_20590__$1;
(statearr_20601_20627[(2)] = null);

(statearr_20601_20627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (5))){
var state_20590__$1 = state_20590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20602_20628 = state_20590__$1;
(statearr_20602_20628[(1)] = (8));

} else {
var statearr_20603_20629 = state_20590__$1;
(statearr_20603_20629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (14))){
var inst_20584 = (state_20590[(2)]);
var state_20590__$1 = state_20590;
var statearr_20604_20630 = state_20590__$1;
(statearr_20604_20630[(2)] = inst_20584);

(statearr_20604_20630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (10))){
var inst_20576 = (state_20590[(2)]);
var state_20590__$1 = state_20590;
var statearr_20605_20631 = state_20590__$1;
(statearr_20605_20631[(2)] = inst_20576);

(statearr_20605_20631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20591 === (8))){
var inst_20573 = cljs.core.async.close_BANG_.call(null,to);
var state_20590__$1 = state_20590;
var statearr_20606_20632 = state_20590__$1;
(statearr_20606_20632[(2)] = inst_20573);

(statearr_20606_20632[(1)] = (10));


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
});})(c__20451__auto___20618))
;
return ((function (switch__20339__auto__,c__20451__auto___20618){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_20610 = [null,null,null,null,null,null,null,null];
(statearr_20610[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_20610[(1)] = (1));

return statearr_20610;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_20590){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_20590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e20611){if((e20611 instanceof Object)){
var ex__20343__auto__ = e20611;
var statearr_20612_20633 = state_20590;
(statearr_20612_20633[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20634 = state_20590;
state_20590 = G__20634;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_20590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_20590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___20618))
})();
var state__20453__auto__ = (function (){var statearr_20613 = f__20452__auto__.call(null);
(statearr_20613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___20618);

return statearr_20613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___20618))
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
return (function (p__20818){
var vec__20819 = p__20818;
var v = cljs.core.nth.call(null,vec__20819,(0),null);
var p = cljs.core.nth.call(null,vec__20819,(1),null);
var job = vec__20819;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20451__auto___21001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___21001,res,vec__20819,v,p,job,jobs,results){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___21001,res,vec__20819,v,p,job,jobs,results){
return (function (state_20824){
var state_val_20825 = (state_20824[(1)]);
if((state_val_20825 === (1))){
var state_20824__$1 = state_20824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20824__$1,(2),res,v);
} else {
if((state_val_20825 === (2))){
var inst_20821 = (state_20824[(2)]);
var inst_20822 = cljs.core.async.close_BANG_.call(null,res);
var state_20824__$1 = (function (){var statearr_20826 = state_20824;
(statearr_20826[(7)] = inst_20821);

return statearr_20826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20824__$1,inst_20822);
} else {
return null;
}
}
});})(c__20451__auto___21001,res,vec__20819,v,p,job,jobs,results))
;
return ((function (switch__20339__auto__,c__20451__auto___21001,res,vec__20819,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0 = (function (){
var statearr_20830 = [null,null,null,null,null,null,null,null];
(statearr_20830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__);

(statearr_20830[(1)] = (1));

return statearr_20830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1 = (function (state_20824){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_20824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e20831){if((e20831 instanceof Object)){
var ex__20343__auto__ = e20831;
var statearr_20832_21002 = state_20824;
(statearr_20832_21002[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21003 = state_20824;
state_20824 = G__21003;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = function(state_20824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1.call(this,state_20824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___21001,res,vec__20819,v,p,job,jobs,results))
})();
var state__20453__auto__ = (function (){var statearr_20833 = f__20452__auto__.call(null);
(statearr_20833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___21001);

return statearr_20833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___21001,res,vec__20819,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20834){
var vec__20835 = p__20834;
var v = cljs.core.nth.call(null,vec__20835,(0),null);
var p = cljs.core.nth.call(null,vec__20835,(1),null);
var job = vec__20835;
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
var n__19201__auto___21004 = n;
var __21005 = (0);
while(true){
if((__21005 < n__19201__auto___21004)){
var G__20836_21006 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20836_21006) {
case "compute":
var c__20451__auto___21008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21005,c__20451__auto___21008,G__20836_21006,n__19201__auto___21004,jobs,results,process,async){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (__21005,c__20451__auto___21008,G__20836_21006,n__19201__auto___21004,jobs,results,process,async){
return (function (state_20849){
var state_val_20850 = (state_20849[(1)]);
if((state_val_20850 === (1))){
var state_20849__$1 = state_20849;
var statearr_20851_21009 = state_20849__$1;
(statearr_20851_21009[(2)] = null);

(statearr_20851_21009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (2))){
var state_20849__$1 = state_20849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20849__$1,(4),jobs);
} else {
if((state_val_20850 === (3))){
var inst_20847 = (state_20849[(2)]);
var state_20849__$1 = state_20849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20849__$1,inst_20847);
} else {
if((state_val_20850 === (4))){
var inst_20839 = (state_20849[(2)]);
var inst_20840 = process.call(null,inst_20839);
var state_20849__$1 = state_20849;
if(cljs.core.truth_(inst_20840)){
var statearr_20852_21010 = state_20849__$1;
(statearr_20852_21010[(1)] = (5));

} else {
var statearr_20853_21011 = state_20849__$1;
(statearr_20853_21011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (5))){
var state_20849__$1 = state_20849;
var statearr_20854_21012 = state_20849__$1;
(statearr_20854_21012[(2)] = null);

(statearr_20854_21012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (6))){
var state_20849__$1 = state_20849;
var statearr_20855_21013 = state_20849__$1;
(statearr_20855_21013[(2)] = null);

(statearr_20855_21013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (7))){
var inst_20845 = (state_20849[(2)]);
var state_20849__$1 = state_20849;
var statearr_20856_21014 = state_20849__$1;
(statearr_20856_21014[(2)] = inst_20845);

(statearr_20856_21014[(1)] = (3));


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
});})(__21005,c__20451__auto___21008,G__20836_21006,n__19201__auto___21004,jobs,results,process,async))
;
return ((function (__21005,switch__20339__auto__,c__20451__auto___21008,G__20836_21006,n__19201__auto___21004,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0 = (function (){
var statearr_20860 = [null,null,null,null,null,null,null];
(statearr_20860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__);

(statearr_20860[(1)] = (1));

return statearr_20860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1 = (function (state_20849){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_20849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e20861){if((e20861 instanceof Object)){
var ex__20343__auto__ = e20861;
var statearr_20862_21015 = state_20849;
(statearr_20862_21015[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21016 = state_20849;
state_20849 = G__21016;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = function(state_20849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1.call(this,state_20849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__;
})()
;})(__21005,switch__20339__auto__,c__20451__auto___21008,G__20836_21006,n__19201__auto___21004,jobs,results,process,async))
})();
var state__20453__auto__ = (function (){var statearr_20863 = f__20452__auto__.call(null);
(statearr_20863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___21008);

return statearr_20863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(__21005,c__20451__auto___21008,G__20836_21006,n__19201__auto___21004,jobs,results,process,async))
);


break;
case "async":
var c__20451__auto___21017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21005,c__20451__auto___21017,G__20836_21006,n__19201__auto___21004,jobs,results,process,async){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (__21005,c__20451__auto___21017,G__20836_21006,n__19201__auto___21004,jobs,results,process,async){
return (function (state_20876){
var state_val_20877 = (state_20876[(1)]);
if((state_val_20877 === (1))){
var state_20876__$1 = state_20876;
var statearr_20878_21018 = state_20876__$1;
(statearr_20878_21018[(2)] = null);

(statearr_20878_21018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (2))){
var state_20876__$1 = state_20876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20876__$1,(4),jobs);
} else {
if((state_val_20877 === (3))){
var inst_20874 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20876__$1,inst_20874);
} else {
if((state_val_20877 === (4))){
var inst_20866 = (state_20876[(2)]);
var inst_20867 = async.call(null,inst_20866);
var state_20876__$1 = state_20876;
if(cljs.core.truth_(inst_20867)){
var statearr_20879_21019 = state_20876__$1;
(statearr_20879_21019[(1)] = (5));

} else {
var statearr_20880_21020 = state_20876__$1;
(statearr_20880_21020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (5))){
var state_20876__$1 = state_20876;
var statearr_20881_21021 = state_20876__$1;
(statearr_20881_21021[(2)] = null);

(statearr_20881_21021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (6))){
var state_20876__$1 = state_20876;
var statearr_20882_21022 = state_20876__$1;
(statearr_20882_21022[(2)] = null);

(statearr_20882_21022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20877 === (7))){
var inst_20872 = (state_20876[(2)]);
var state_20876__$1 = state_20876;
var statearr_20883_21023 = state_20876__$1;
(statearr_20883_21023[(2)] = inst_20872);

(statearr_20883_21023[(1)] = (3));


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
});})(__21005,c__20451__auto___21017,G__20836_21006,n__19201__auto___21004,jobs,results,process,async))
;
return ((function (__21005,switch__20339__auto__,c__20451__auto___21017,G__20836_21006,n__19201__auto___21004,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0 = (function (){
var statearr_20887 = [null,null,null,null,null,null,null];
(statearr_20887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__);

(statearr_20887[(1)] = (1));

return statearr_20887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1 = (function (state_20876){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_20876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e20888){if((e20888 instanceof Object)){
var ex__20343__auto__ = e20888;
var statearr_20889_21024 = state_20876;
(statearr_20889_21024[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21025 = state_20876;
state_20876 = G__21025;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = function(state_20876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1.call(this,state_20876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__;
})()
;})(__21005,switch__20339__auto__,c__20451__auto___21017,G__20836_21006,n__19201__auto___21004,jobs,results,process,async))
})();
var state__20453__auto__ = (function (){var statearr_20890 = f__20452__auto__.call(null);
(statearr_20890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___21017);

return statearr_20890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(__21005,c__20451__auto___21017,G__20836_21006,n__19201__auto___21004,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21026 = (__21005 + (1));
__21005 = G__21026;
continue;
} else {
}
break;
}

var c__20451__auto___21027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___21027,jobs,results,process,async){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___21027,jobs,results,process,async){
return (function (state_20912){
var state_val_20913 = (state_20912[(1)]);
if((state_val_20913 === (1))){
var state_20912__$1 = state_20912;
var statearr_20914_21028 = state_20912__$1;
(statearr_20914_21028[(2)] = null);

(statearr_20914_21028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20913 === (2))){
var state_20912__$1 = state_20912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20912__$1,(4),from);
} else {
if((state_val_20913 === (3))){
var inst_20910 = (state_20912[(2)]);
var state_20912__$1 = state_20912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20912__$1,inst_20910);
} else {
if((state_val_20913 === (4))){
var inst_20893 = (state_20912[(7)]);
var inst_20893__$1 = (state_20912[(2)]);
var inst_20894 = (inst_20893__$1 == null);
var state_20912__$1 = (function (){var statearr_20915 = state_20912;
(statearr_20915[(7)] = inst_20893__$1);

return statearr_20915;
})();
if(cljs.core.truth_(inst_20894)){
var statearr_20916_21029 = state_20912__$1;
(statearr_20916_21029[(1)] = (5));

} else {
var statearr_20917_21030 = state_20912__$1;
(statearr_20917_21030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20913 === (5))){
var inst_20896 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20912__$1 = state_20912;
var statearr_20918_21031 = state_20912__$1;
(statearr_20918_21031[(2)] = inst_20896);

(statearr_20918_21031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20913 === (6))){
var inst_20893 = (state_20912[(7)]);
var inst_20898 = (state_20912[(8)]);
var inst_20898__$1 = cljs.core.async.chan.call(null,(1));
var inst_20899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20900 = [inst_20893,inst_20898__$1];
var inst_20901 = (new cljs.core.PersistentVector(null,2,(5),inst_20899,inst_20900,null));
var state_20912__$1 = (function (){var statearr_20919 = state_20912;
(statearr_20919[(8)] = inst_20898__$1);

return statearr_20919;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20912__$1,(8),jobs,inst_20901);
} else {
if((state_val_20913 === (7))){
var inst_20908 = (state_20912[(2)]);
var state_20912__$1 = state_20912;
var statearr_20920_21032 = state_20912__$1;
(statearr_20920_21032[(2)] = inst_20908);

(statearr_20920_21032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20913 === (8))){
var inst_20898 = (state_20912[(8)]);
var inst_20903 = (state_20912[(2)]);
var state_20912__$1 = (function (){var statearr_20921 = state_20912;
(statearr_20921[(9)] = inst_20903);

return statearr_20921;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20912__$1,(9),results,inst_20898);
} else {
if((state_val_20913 === (9))){
var inst_20905 = (state_20912[(2)]);
var state_20912__$1 = (function (){var statearr_20922 = state_20912;
(statearr_20922[(10)] = inst_20905);

return statearr_20922;
})();
var statearr_20923_21033 = state_20912__$1;
(statearr_20923_21033[(2)] = null);

(statearr_20923_21033[(1)] = (2));


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
});})(c__20451__auto___21027,jobs,results,process,async))
;
return ((function (switch__20339__auto__,c__20451__auto___21027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0 = (function (){
var statearr_20927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__);

(statearr_20927[(1)] = (1));

return statearr_20927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1 = (function (state_20912){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_20912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e20928){if((e20928 instanceof Object)){
var ex__20343__auto__ = e20928;
var statearr_20929_21034 = state_20912;
(statearr_20929_21034[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21035 = state_20912;
state_20912 = G__21035;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = function(state_20912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1.call(this,state_20912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___21027,jobs,results,process,async))
})();
var state__20453__auto__ = (function (){var statearr_20930 = f__20452__auto__.call(null);
(statearr_20930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___21027);

return statearr_20930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___21027,jobs,results,process,async))
);


var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__,jobs,results,process,async){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__,jobs,results,process,async){
return (function (state_20968){
var state_val_20969 = (state_20968[(1)]);
if((state_val_20969 === (7))){
var inst_20964 = (state_20968[(2)]);
var state_20968__$1 = state_20968;
var statearr_20970_21036 = state_20968__$1;
(statearr_20970_21036[(2)] = inst_20964);

(statearr_20970_21036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (20))){
var state_20968__$1 = state_20968;
var statearr_20971_21037 = state_20968__$1;
(statearr_20971_21037[(2)] = null);

(statearr_20971_21037[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (1))){
var state_20968__$1 = state_20968;
var statearr_20972_21038 = state_20968__$1;
(statearr_20972_21038[(2)] = null);

(statearr_20972_21038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (4))){
var inst_20933 = (state_20968[(7)]);
var inst_20933__$1 = (state_20968[(2)]);
var inst_20934 = (inst_20933__$1 == null);
var state_20968__$1 = (function (){var statearr_20973 = state_20968;
(statearr_20973[(7)] = inst_20933__$1);

return statearr_20973;
})();
if(cljs.core.truth_(inst_20934)){
var statearr_20974_21039 = state_20968__$1;
(statearr_20974_21039[(1)] = (5));

} else {
var statearr_20975_21040 = state_20968__$1;
(statearr_20975_21040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (15))){
var inst_20946 = (state_20968[(8)]);
var state_20968__$1 = state_20968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20968__$1,(18),to,inst_20946);
} else {
if((state_val_20969 === (21))){
var inst_20959 = (state_20968[(2)]);
var state_20968__$1 = state_20968;
var statearr_20976_21041 = state_20968__$1;
(statearr_20976_21041[(2)] = inst_20959);

(statearr_20976_21041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (13))){
var inst_20961 = (state_20968[(2)]);
var state_20968__$1 = (function (){var statearr_20977 = state_20968;
(statearr_20977[(9)] = inst_20961);

return statearr_20977;
})();
var statearr_20978_21042 = state_20968__$1;
(statearr_20978_21042[(2)] = null);

(statearr_20978_21042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (6))){
var inst_20933 = (state_20968[(7)]);
var state_20968__$1 = state_20968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20968__$1,(11),inst_20933);
} else {
if((state_val_20969 === (17))){
var inst_20954 = (state_20968[(2)]);
var state_20968__$1 = state_20968;
if(cljs.core.truth_(inst_20954)){
var statearr_20979_21043 = state_20968__$1;
(statearr_20979_21043[(1)] = (19));

} else {
var statearr_20980_21044 = state_20968__$1;
(statearr_20980_21044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (3))){
var inst_20966 = (state_20968[(2)]);
var state_20968__$1 = state_20968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20968__$1,inst_20966);
} else {
if((state_val_20969 === (12))){
var inst_20943 = (state_20968[(10)]);
var state_20968__$1 = state_20968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20968__$1,(14),inst_20943);
} else {
if((state_val_20969 === (2))){
var state_20968__$1 = state_20968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20968__$1,(4),results);
} else {
if((state_val_20969 === (19))){
var state_20968__$1 = state_20968;
var statearr_20981_21045 = state_20968__$1;
(statearr_20981_21045[(2)] = null);

(statearr_20981_21045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (11))){
var inst_20943 = (state_20968[(2)]);
var state_20968__$1 = (function (){var statearr_20982 = state_20968;
(statearr_20982[(10)] = inst_20943);

return statearr_20982;
})();
var statearr_20983_21046 = state_20968__$1;
(statearr_20983_21046[(2)] = null);

(statearr_20983_21046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (9))){
var state_20968__$1 = state_20968;
var statearr_20984_21047 = state_20968__$1;
(statearr_20984_21047[(2)] = null);

(statearr_20984_21047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (5))){
var state_20968__$1 = state_20968;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20985_21048 = state_20968__$1;
(statearr_20985_21048[(1)] = (8));

} else {
var statearr_20986_21049 = state_20968__$1;
(statearr_20986_21049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (14))){
var inst_20946 = (state_20968[(8)]);
var inst_20948 = (state_20968[(11)]);
var inst_20946__$1 = (state_20968[(2)]);
var inst_20947 = (inst_20946__$1 == null);
var inst_20948__$1 = cljs.core.not.call(null,inst_20947);
var state_20968__$1 = (function (){var statearr_20987 = state_20968;
(statearr_20987[(8)] = inst_20946__$1);

(statearr_20987[(11)] = inst_20948__$1);

return statearr_20987;
})();
if(inst_20948__$1){
var statearr_20988_21050 = state_20968__$1;
(statearr_20988_21050[(1)] = (15));

} else {
var statearr_20989_21051 = state_20968__$1;
(statearr_20989_21051[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (16))){
var inst_20948 = (state_20968[(11)]);
var state_20968__$1 = state_20968;
var statearr_20990_21052 = state_20968__$1;
(statearr_20990_21052[(2)] = inst_20948);

(statearr_20990_21052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (10))){
var inst_20940 = (state_20968[(2)]);
var state_20968__$1 = state_20968;
var statearr_20991_21053 = state_20968__$1;
(statearr_20991_21053[(2)] = inst_20940);

(statearr_20991_21053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (18))){
var inst_20951 = (state_20968[(2)]);
var state_20968__$1 = state_20968;
var statearr_20992_21054 = state_20968__$1;
(statearr_20992_21054[(2)] = inst_20951);

(statearr_20992_21054[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20969 === (8))){
var inst_20937 = cljs.core.async.close_BANG_.call(null,to);
var state_20968__$1 = state_20968;
var statearr_20993_21055 = state_20968__$1;
(statearr_20993_21055[(2)] = inst_20937);

(statearr_20993_21055[(1)] = (10));


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
});})(c__20451__auto__,jobs,results,process,async))
;
return ((function (switch__20339__auto__,c__20451__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0 = (function (){
var statearr_20997 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__);

(statearr_20997[(1)] = (1));

return statearr_20997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1 = (function (state_20968){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_20968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e20998){if((e20998 instanceof Object)){
var ex__20343__auto__ = e20998;
var statearr_20999_21056 = state_20968;
(statearr_20999_21056[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21057 = state_20968;
state_20968 = G__21057;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__ = function(state_20968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1.call(this,state_20968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__,jobs,results,process,async))
})();
var state__20453__auto__ = (function (){var statearr_21000 = f__20452__auto__.call(null);
(statearr_21000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_21000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__,jobs,results,process,async))
);

return c__20451__auto__;
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
var args21058 = [];
var len__19356__auto___21061 = arguments.length;
var i__19357__auto___21062 = (0);
while(true){
if((i__19357__auto___21062 < len__19356__auto___21061)){
args21058.push((arguments[i__19357__auto___21062]));

var G__21063 = (i__19357__auto___21062 + (1));
i__19357__auto___21062 = G__21063;
continue;
} else {
}
break;
}

var G__21060 = args21058.length;
switch (G__21060) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21058.length)].join('')));

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
var args21065 = [];
var len__19356__auto___21068 = arguments.length;
var i__19357__auto___21069 = (0);
while(true){
if((i__19357__auto___21069 < len__19356__auto___21068)){
args21065.push((arguments[i__19357__auto___21069]));

var G__21070 = (i__19357__auto___21069 + (1));
i__19357__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var G__21067 = args21065.length;
switch (G__21067) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21065.length)].join('')));

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
var args21072 = [];
var len__19356__auto___21125 = arguments.length;
var i__19357__auto___21126 = (0);
while(true){
if((i__19357__auto___21126 < len__19356__auto___21125)){
args21072.push((arguments[i__19357__auto___21126]));

var G__21127 = (i__19357__auto___21126 + (1));
i__19357__auto___21126 = G__21127;
continue;
} else {
}
break;
}

var G__21074 = args21072.length;
switch (G__21074) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21072.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20451__auto___21129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___21129,tc,fc){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___21129,tc,fc){
return (function (state_21100){
var state_val_21101 = (state_21100[(1)]);
if((state_val_21101 === (7))){
var inst_21096 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
var statearr_21102_21130 = state_21100__$1;
(statearr_21102_21130[(2)] = inst_21096);

(statearr_21102_21130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (1))){
var state_21100__$1 = state_21100;
var statearr_21103_21131 = state_21100__$1;
(statearr_21103_21131[(2)] = null);

(statearr_21103_21131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (4))){
var inst_21077 = (state_21100[(7)]);
var inst_21077__$1 = (state_21100[(2)]);
var inst_21078 = (inst_21077__$1 == null);
var state_21100__$1 = (function (){var statearr_21104 = state_21100;
(statearr_21104[(7)] = inst_21077__$1);

return statearr_21104;
})();
if(cljs.core.truth_(inst_21078)){
var statearr_21105_21132 = state_21100__$1;
(statearr_21105_21132[(1)] = (5));

} else {
var statearr_21106_21133 = state_21100__$1;
(statearr_21106_21133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (13))){
var state_21100__$1 = state_21100;
var statearr_21107_21134 = state_21100__$1;
(statearr_21107_21134[(2)] = null);

(statearr_21107_21134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (6))){
var inst_21077 = (state_21100[(7)]);
var inst_21083 = p.call(null,inst_21077);
var state_21100__$1 = state_21100;
if(cljs.core.truth_(inst_21083)){
var statearr_21108_21135 = state_21100__$1;
(statearr_21108_21135[(1)] = (9));

} else {
var statearr_21109_21136 = state_21100__$1;
(statearr_21109_21136[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (3))){
var inst_21098 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21100__$1,inst_21098);
} else {
if((state_val_21101 === (12))){
var state_21100__$1 = state_21100;
var statearr_21110_21137 = state_21100__$1;
(statearr_21110_21137[(2)] = null);

(statearr_21110_21137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (2))){
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21100__$1,(4),ch);
} else {
if((state_val_21101 === (11))){
var inst_21077 = (state_21100[(7)]);
var inst_21087 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21100__$1,(8),inst_21087,inst_21077);
} else {
if((state_val_21101 === (9))){
var state_21100__$1 = state_21100;
var statearr_21111_21138 = state_21100__$1;
(statearr_21111_21138[(2)] = tc);

(statearr_21111_21138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (5))){
var inst_21080 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21081 = cljs.core.async.close_BANG_.call(null,fc);
var state_21100__$1 = (function (){var statearr_21112 = state_21100;
(statearr_21112[(8)] = inst_21080);

return statearr_21112;
})();
var statearr_21113_21139 = state_21100__$1;
(statearr_21113_21139[(2)] = inst_21081);

(statearr_21113_21139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (14))){
var inst_21094 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
var statearr_21114_21140 = state_21100__$1;
(statearr_21114_21140[(2)] = inst_21094);

(statearr_21114_21140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (10))){
var state_21100__$1 = state_21100;
var statearr_21115_21141 = state_21100__$1;
(statearr_21115_21141[(2)] = fc);

(statearr_21115_21141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21101 === (8))){
var inst_21089 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
if(cljs.core.truth_(inst_21089)){
var statearr_21116_21142 = state_21100__$1;
(statearr_21116_21142[(1)] = (12));

} else {
var statearr_21117_21143 = state_21100__$1;
(statearr_21117_21143[(1)] = (13));

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
});})(c__20451__auto___21129,tc,fc))
;
return ((function (switch__20339__auto__,c__20451__auto___21129,tc,fc){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_21121 = [null,null,null,null,null,null,null,null,null];
(statearr_21121[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_21121[(1)] = (1));

return statearr_21121;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_21100){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_21100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e21122){if((e21122 instanceof Object)){
var ex__20343__auto__ = e21122;
var statearr_21123_21144 = state_21100;
(statearr_21123_21144[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21145 = state_21100;
state_21100 = G__21145;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_21100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_21100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___21129,tc,fc))
})();
var state__20453__auto__ = (function (){var statearr_21124 = f__20452__auto__.call(null);
(statearr_21124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___21129);

return statearr_21124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___21129,tc,fc))
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
var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__){
return (function (state_21209){
var state_val_21210 = (state_21209[(1)]);
if((state_val_21210 === (7))){
var inst_21205 = (state_21209[(2)]);
var state_21209__$1 = state_21209;
var statearr_21211_21232 = state_21209__$1;
(statearr_21211_21232[(2)] = inst_21205);

(statearr_21211_21232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (1))){
var inst_21189 = init;
var state_21209__$1 = (function (){var statearr_21212 = state_21209;
(statearr_21212[(7)] = inst_21189);

return statearr_21212;
})();
var statearr_21213_21233 = state_21209__$1;
(statearr_21213_21233[(2)] = null);

(statearr_21213_21233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (4))){
var inst_21192 = (state_21209[(8)]);
var inst_21192__$1 = (state_21209[(2)]);
var inst_21193 = (inst_21192__$1 == null);
var state_21209__$1 = (function (){var statearr_21214 = state_21209;
(statearr_21214[(8)] = inst_21192__$1);

return statearr_21214;
})();
if(cljs.core.truth_(inst_21193)){
var statearr_21215_21234 = state_21209__$1;
(statearr_21215_21234[(1)] = (5));

} else {
var statearr_21216_21235 = state_21209__$1;
(statearr_21216_21235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (6))){
var inst_21196 = (state_21209[(9)]);
var inst_21192 = (state_21209[(8)]);
var inst_21189 = (state_21209[(7)]);
var inst_21196__$1 = f.call(null,inst_21189,inst_21192);
var inst_21197 = cljs.core.reduced_QMARK_.call(null,inst_21196__$1);
var state_21209__$1 = (function (){var statearr_21217 = state_21209;
(statearr_21217[(9)] = inst_21196__$1);

return statearr_21217;
})();
if(inst_21197){
var statearr_21218_21236 = state_21209__$1;
(statearr_21218_21236[(1)] = (8));

} else {
var statearr_21219_21237 = state_21209__$1;
(statearr_21219_21237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (3))){
var inst_21207 = (state_21209[(2)]);
var state_21209__$1 = state_21209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21209__$1,inst_21207);
} else {
if((state_val_21210 === (2))){
var state_21209__$1 = state_21209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21209__$1,(4),ch);
} else {
if((state_val_21210 === (9))){
var inst_21196 = (state_21209[(9)]);
var inst_21189 = inst_21196;
var state_21209__$1 = (function (){var statearr_21220 = state_21209;
(statearr_21220[(7)] = inst_21189);

return statearr_21220;
})();
var statearr_21221_21238 = state_21209__$1;
(statearr_21221_21238[(2)] = null);

(statearr_21221_21238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (5))){
var inst_21189 = (state_21209[(7)]);
var state_21209__$1 = state_21209;
var statearr_21222_21239 = state_21209__$1;
(statearr_21222_21239[(2)] = inst_21189);

(statearr_21222_21239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (10))){
var inst_21203 = (state_21209[(2)]);
var state_21209__$1 = state_21209;
var statearr_21223_21240 = state_21209__$1;
(statearr_21223_21240[(2)] = inst_21203);

(statearr_21223_21240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (8))){
var inst_21196 = (state_21209[(9)]);
var inst_21199 = cljs.core.deref.call(null,inst_21196);
var state_21209__$1 = state_21209;
var statearr_21224_21241 = state_21209__$1;
(statearr_21224_21241[(2)] = inst_21199);

(statearr_21224_21241[(1)] = (10));


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
});})(c__20451__auto__))
;
return ((function (switch__20339__auto__,c__20451__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20340__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20340__auto____0 = (function (){
var statearr_21228 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21228[(0)] = cljs$core$async$reduce_$_state_machine__20340__auto__);

(statearr_21228[(1)] = (1));

return statearr_21228;
});
var cljs$core$async$reduce_$_state_machine__20340__auto____1 = (function (state_21209){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_21209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e21229){if((e21229 instanceof Object)){
var ex__20343__auto__ = e21229;
var statearr_21230_21242 = state_21209;
(statearr_21230_21242[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21243 = state_21209;
state_21209 = G__21243;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20340__auto__ = function(state_21209){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20340__auto____1.call(this,state_21209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20340__auto____0;
cljs$core$async$reduce_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20340__auto____1;
return cljs$core$async$reduce_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__))
})();
var state__20453__auto__ = (function (){var statearr_21231 = f__20452__auto__.call(null);
(statearr_21231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_21231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__))
);

return c__20451__auto__;
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
var args21244 = [];
var len__19356__auto___21296 = arguments.length;
var i__19357__auto___21297 = (0);
while(true){
if((i__19357__auto___21297 < len__19356__auto___21296)){
args21244.push((arguments[i__19357__auto___21297]));

var G__21298 = (i__19357__auto___21297 + (1));
i__19357__auto___21297 = G__21298;
continue;
} else {
}
break;
}

var G__21246 = args21244.length;
switch (G__21246) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21244.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__){
return (function (state_21271){
var state_val_21272 = (state_21271[(1)]);
if((state_val_21272 === (7))){
var inst_21253 = (state_21271[(2)]);
var state_21271__$1 = state_21271;
var statearr_21273_21300 = state_21271__$1;
(statearr_21273_21300[(2)] = inst_21253);

(statearr_21273_21300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (1))){
var inst_21247 = cljs.core.seq.call(null,coll);
var inst_21248 = inst_21247;
var state_21271__$1 = (function (){var statearr_21274 = state_21271;
(statearr_21274[(7)] = inst_21248);

return statearr_21274;
})();
var statearr_21275_21301 = state_21271__$1;
(statearr_21275_21301[(2)] = null);

(statearr_21275_21301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (4))){
var inst_21248 = (state_21271[(7)]);
var inst_21251 = cljs.core.first.call(null,inst_21248);
var state_21271__$1 = state_21271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21271__$1,(7),ch,inst_21251);
} else {
if((state_val_21272 === (13))){
var inst_21265 = (state_21271[(2)]);
var state_21271__$1 = state_21271;
var statearr_21276_21302 = state_21271__$1;
(statearr_21276_21302[(2)] = inst_21265);

(statearr_21276_21302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (6))){
var inst_21256 = (state_21271[(2)]);
var state_21271__$1 = state_21271;
if(cljs.core.truth_(inst_21256)){
var statearr_21277_21303 = state_21271__$1;
(statearr_21277_21303[(1)] = (8));

} else {
var statearr_21278_21304 = state_21271__$1;
(statearr_21278_21304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (3))){
var inst_21269 = (state_21271[(2)]);
var state_21271__$1 = state_21271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21271__$1,inst_21269);
} else {
if((state_val_21272 === (12))){
var state_21271__$1 = state_21271;
var statearr_21279_21305 = state_21271__$1;
(statearr_21279_21305[(2)] = null);

(statearr_21279_21305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (2))){
var inst_21248 = (state_21271[(7)]);
var state_21271__$1 = state_21271;
if(cljs.core.truth_(inst_21248)){
var statearr_21280_21306 = state_21271__$1;
(statearr_21280_21306[(1)] = (4));

} else {
var statearr_21281_21307 = state_21271__$1;
(statearr_21281_21307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (11))){
var inst_21262 = cljs.core.async.close_BANG_.call(null,ch);
var state_21271__$1 = state_21271;
var statearr_21282_21308 = state_21271__$1;
(statearr_21282_21308[(2)] = inst_21262);

(statearr_21282_21308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (9))){
var state_21271__$1 = state_21271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21283_21309 = state_21271__$1;
(statearr_21283_21309[(1)] = (11));

} else {
var statearr_21284_21310 = state_21271__$1;
(statearr_21284_21310[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (5))){
var inst_21248 = (state_21271[(7)]);
var state_21271__$1 = state_21271;
var statearr_21285_21311 = state_21271__$1;
(statearr_21285_21311[(2)] = inst_21248);

(statearr_21285_21311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (10))){
var inst_21267 = (state_21271[(2)]);
var state_21271__$1 = state_21271;
var statearr_21286_21312 = state_21271__$1;
(statearr_21286_21312[(2)] = inst_21267);

(statearr_21286_21312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (8))){
var inst_21248 = (state_21271[(7)]);
var inst_21258 = cljs.core.next.call(null,inst_21248);
var inst_21248__$1 = inst_21258;
var state_21271__$1 = (function (){var statearr_21287 = state_21271;
(statearr_21287[(7)] = inst_21248__$1);

return statearr_21287;
})();
var statearr_21288_21313 = state_21271__$1;
(statearr_21288_21313[(2)] = null);

(statearr_21288_21313[(1)] = (2));


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
});})(c__20451__auto__))
;
return ((function (switch__20339__auto__,c__20451__auto__){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_21292 = [null,null,null,null,null,null,null,null];
(statearr_21292[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_21292[(1)] = (1));

return statearr_21292;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_21271){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_21271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e21293){if((e21293 instanceof Object)){
var ex__20343__auto__ = e21293;
var statearr_21294_21314 = state_21271;
(statearr_21294_21314[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21315 = state_21271;
state_21271 = G__21315;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_21271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_21271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__))
})();
var state__20453__auto__ = (function (){var statearr_21295 = f__20452__auto__.call(null);
(statearr_21295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_21295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__))
);

return c__20451__auto__;
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
var x__18953__auto__ = (((_ == null))?null:_);
var m__18954__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,_);
} else {
var m__18954__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,_);
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
var x__18953__auto__ = (((m == null))?null:m);
var m__18954__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18954__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__18953__auto__ = (((m == null))?null:m);
var m__18954__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,m,ch);
} else {
var m__18954__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,m,ch);
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
var x__18953__auto__ = (((m == null))?null:m);
var m__18954__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,m);
} else {
var m__18954__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async21537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21537 = (function (mult,ch,cs,meta21538){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21538 = meta21538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21539,meta21538__$1){
var self__ = this;
var _21539__$1 = this;
return (new cljs.core.async.t_cljs$core$async21537(self__.mult,self__.ch,self__.cs,meta21538__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21539){
var self__ = this;
var _21539__$1 = this;
return self__.meta21538;
});})(cs))
;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21537.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21537.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21538","meta21538",-946574536,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21537";

cljs.core.async.t_cljs$core$async21537.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async21537");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21537 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21537(mult__$1,ch__$1,cs__$1,meta21538){
return (new cljs.core.async.t_cljs$core$async21537(mult__$1,ch__$1,cs__$1,meta21538));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21537(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20451__auto___21758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___21758,cs,m,dchan,dctr,done){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___21758,cs,m,dchan,dctr,done){
return (function (state_21670){
var state_val_21671 = (state_21670[(1)]);
if((state_val_21671 === (7))){
var inst_21666 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21672_21759 = state_21670__$1;
(statearr_21672_21759[(2)] = inst_21666);

(statearr_21672_21759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (20))){
var inst_21571 = (state_21670[(7)]);
var inst_21581 = cljs.core.first.call(null,inst_21571);
var inst_21582 = cljs.core.nth.call(null,inst_21581,(0),null);
var inst_21583 = cljs.core.nth.call(null,inst_21581,(1),null);
var state_21670__$1 = (function (){var statearr_21673 = state_21670;
(statearr_21673[(8)] = inst_21582);

return statearr_21673;
})();
if(cljs.core.truth_(inst_21583)){
var statearr_21674_21760 = state_21670__$1;
(statearr_21674_21760[(1)] = (22));

} else {
var statearr_21675_21761 = state_21670__$1;
(statearr_21675_21761[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (27))){
var inst_21542 = (state_21670[(9)]);
var inst_21618 = (state_21670[(10)]);
var inst_21613 = (state_21670[(11)]);
var inst_21611 = (state_21670[(12)]);
var inst_21618__$1 = cljs.core._nth.call(null,inst_21611,inst_21613);
var inst_21619 = cljs.core.async.put_BANG_.call(null,inst_21618__$1,inst_21542,done);
var state_21670__$1 = (function (){var statearr_21676 = state_21670;
(statearr_21676[(10)] = inst_21618__$1);

return statearr_21676;
})();
if(cljs.core.truth_(inst_21619)){
var statearr_21677_21762 = state_21670__$1;
(statearr_21677_21762[(1)] = (30));

} else {
var statearr_21678_21763 = state_21670__$1;
(statearr_21678_21763[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (1))){
var state_21670__$1 = state_21670;
var statearr_21679_21764 = state_21670__$1;
(statearr_21679_21764[(2)] = null);

(statearr_21679_21764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (24))){
var inst_21571 = (state_21670[(7)]);
var inst_21588 = (state_21670[(2)]);
var inst_21589 = cljs.core.next.call(null,inst_21571);
var inst_21551 = inst_21589;
var inst_21552 = null;
var inst_21553 = (0);
var inst_21554 = (0);
var state_21670__$1 = (function (){var statearr_21680 = state_21670;
(statearr_21680[(13)] = inst_21552);

(statearr_21680[(14)] = inst_21553);

(statearr_21680[(15)] = inst_21551);

(statearr_21680[(16)] = inst_21588);

(statearr_21680[(17)] = inst_21554);

return statearr_21680;
})();
var statearr_21681_21765 = state_21670__$1;
(statearr_21681_21765[(2)] = null);

(statearr_21681_21765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (39))){
var state_21670__$1 = state_21670;
var statearr_21685_21766 = state_21670__$1;
(statearr_21685_21766[(2)] = null);

(statearr_21685_21766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (4))){
var inst_21542 = (state_21670[(9)]);
var inst_21542__$1 = (state_21670[(2)]);
var inst_21543 = (inst_21542__$1 == null);
var state_21670__$1 = (function (){var statearr_21686 = state_21670;
(statearr_21686[(9)] = inst_21542__$1);

return statearr_21686;
})();
if(cljs.core.truth_(inst_21543)){
var statearr_21687_21767 = state_21670__$1;
(statearr_21687_21767[(1)] = (5));

} else {
var statearr_21688_21768 = state_21670__$1;
(statearr_21688_21768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (15))){
var inst_21552 = (state_21670[(13)]);
var inst_21553 = (state_21670[(14)]);
var inst_21551 = (state_21670[(15)]);
var inst_21554 = (state_21670[(17)]);
var inst_21567 = (state_21670[(2)]);
var inst_21568 = (inst_21554 + (1));
var tmp21682 = inst_21552;
var tmp21683 = inst_21553;
var tmp21684 = inst_21551;
var inst_21551__$1 = tmp21684;
var inst_21552__$1 = tmp21682;
var inst_21553__$1 = tmp21683;
var inst_21554__$1 = inst_21568;
var state_21670__$1 = (function (){var statearr_21689 = state_21670;
(statearr_21689[(13)] = inst_21552__$1);

(statearr_21689[(14)] = inst_21553__$1);

(statearr_21689[(15)] = inst_21551__$1);

(statearr_21689[(18)] = inst_21567);

(statearr_21689[(17)] = inst_21554__$1);

return statearr_21689;
})();
var statearr_21690_21769 = state_21670__$1;
(statearr_21690_21769[(2)] = null);

(statearr_21690_21769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (21))){
var inst_21592 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21694_21770 = state_21670__$1;
(statearr_21694_21770[(2)] = inst_21592);

(statearr_21694_21770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (31))){
var inst_21618 = (state_21670[(10)]);
var inst_21622 = done.call(null,null);
var inst_21623 = cljs.core.async.untap_STAR_.call(null,m,inst_21618);
var state_21670__$1 = (function (){var statearr_21695 = state_21670;
(statearr_21695[(19)] = inst_21622);

return statearr_21695;
})();
var statearr_21696_21771 = state_21670__$1;
(statearr_21696_21771[(2)] = inst_21623);

(statearr_21696_21771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (32))){
var inst_21612 = (state_21670[(20)]);
var inst_21613 = (state_21670[(11)]);
var inst_21611 = (state_21670[(12)]);
var inst_21610 = (state_21670[(21)]);
var inst_21625 = (state_21670[(2)]);
var inst_21626 = (inst_21613 + (1));
var tmp21691 = inst_21612;
var tmp21692 = inst_21611;
var tmp21693 = inst_21610;
var inst_21610__$1 = tmp21693;
var inst_21611__$1 = tmp21692;
var inst_21612__$1 = tmp21691;
var inst_21613__$1 = inst_21626;
var state_21670__$1 = (function (){var statearr_21697 = state_21670;
(statearr_21697[(20)] = inst_21612__$1);

(statearr_21697[(11)] = inst_21613__$1);

(statearr_21697[(22)] = inst_21625);

(statearr_21697[(12)] = inst_21611__$1);

(statearr_21697[(21)] = inst_21610__$1);

return statearr_21697;
})();
var statearr_21698_21772 = state_21670__$1;
(statearr_21698_21772[(2)] = null);

(statearr_21698_21772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (40))){
var inst_21638 = (state_21670[(23)]);
var inst_21642 = done.call(null,null);
var inst_21643 = cljs.core.async.untap_STAR_.call(null,m,inst_21638);
var state_21670__$1 = (function (){var statearr_21699 = state_21670;
(statearr_21699[(24)] = inst_21642);

return statearr_21699;
})();
var statearr_21700_21773 = state_21670__$1;
(statearr_21700_21773[(2)] = inst_21643);

(statearr_21700_21773[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (33))){
var inst_21629 = (state_21670[(25)]);
var inst_21631 = cljs.core.chunked_seq_QMARK_.call(null,inst_21629);
var state_21670__$1 = state_21670;
if(inst_21631){
var statearr_21701_21774 = state_21670__$1;
(statearr_21701_21774[(1)] = (36));

} else {
var statearr_21702_21775 = state_21670__$1;
(statearr_21702_21775[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (13))){
var inst_21561 = (state_21670[(26)]);
var inst_21564 = cljs.core.async.close_BANG_.call(null,inst_21561);
var state_21670__$1 = state_21670;
var statearr_21703_21776 = state_21670__$1;
(statearr_21703_21776[(2)] = inst_21564);

(statearr_21703_21776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (22))){
var inst_21582 = (state_21670[(8)]);
var inst_21585 = cljs.core.async.close_BANG_.call(null,inst_21582);
var state_21670__$1 = state_21670;
var statearr_21704_21777 = state_21670__$1;
(statearr_21704_21777[(2)] = inst_21585);

(statearr_21704_21777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (36))){
var inst_21629 = (state_21670[(25)]);
var inst_21633 = cljs.core.chunk_first.call(null,inst_21629);
var inst_21634 = cljs.core.chunk_rest.call(null,inst_21629);
var inst_21635 = cljs.core.count.call(null,inst_21633);
var inst_21610 = inst_21634;
var inst_21611 = inst_21633;
var inst_21612 = inst_21635;
var inst_21613 = (0);
var state_21670__$1 = (function (){var statearr_21705 = state_21670;
(statearr_21705[(20)] = inst_21612);

(statearr_21705[(11)] = inst_21613);

(statearr_21705[(12)] = inst_21611);

(statearr_21705[(21)] = inst_21610);

return statearr_21705;
})();
var statearr_21706_21778 = state_21670__$1;
(statearr_21706_21778[(2)] = null);

(statearr_21706_21778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (41))){
var inst_21629 = (state_21670[(25)]);
var inst_21645 = (state_21670[(2)]);
var inst_21646 = cljs.core.next.call(null,inst_21629);
var inst_21610 = inst_21646;
var inst_21611 = null;
var inst_21612 = (0);
var inst_21613 = (0);
var state_21670__$1 = (function (){var statearr_21707 = state_21670;
(statearr_21707[(27)] = inst_21645);

(statearr_21707[(20)] = inst_21612);

(statearr_21707[(11)] = inst_21613);

(statearr_21707[(12)] = inst_21611);

(statearr_21707[(21)] = inst_21610);

return statearr_21707;
})();
var statearr_21708_21779 = state_21670__$1;
(statearr_21708_21779[(2)] = null);

(statearr_21708_21779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (43))){
var state_21670__$1 = state_21670;
var statearr_21709_21780 = state_21670__$1;
(statearr_21709_21780[(2)] = null);

(statearr_21709_21780[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (29))){
var inst_21654 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21710_21781 = state_21670__$1;
(statearr_21710_21781[(2)] = inst_21654);

(statearr_21710_21781[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (44))){
var inst_21663 = (state_21670[(2)]);
var state_21670__$1 = (function (){var statearr_21711 = state_21670;
(statearr_21711[(28)] = inst_21663);

return statearr_21711;
})();
var statearr_21712_21782 = state_21670__$1;
(statearr_21712_21782[(2)] = null);

(statearr_21712_21782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (6))){
var inst_21602 = (state_21670[(29)]);
var inst_21601 = cljs.core.deref.call(null,cs);
var inst_21602__$1 = cljs.core.keys.call(null,inst_21601);
var inst_21603 = cljs.core.count.call(null,inst_21602__$1);
var inst_21604 = cljs.core.reset_BANG_.call(null,dctr,inst_21603);
var inst_21609 = cljs.core.seq.call(null,inst_21602__$1);
var inst_21610 = inst_21609;
var inst_21611 = null;
var inst_21612 = (0);
var inst_21613 = (0);
var state_21670__$1 = (function (){var statearr_21713 = state_21670;
(statearr_21713[(29)] = inst_21602__$1);

(statearr_21713[(20)] = inst_21612);

(statearr_21713[(30)] = inst_21604);

(statearr_21713[(11)] = inst_21613);

(statearr_21713[(12)] = inst_21611);

(statearr_21713[(21)] = inst_21610);

return statearr_21713;
})();
var statearr_21714_21783 = state_21670__$1;
(statearr_21714_21783[(2)] = null);

(statearr_21714_21783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (28))){
var inst_21629 = (state_21670[(25)]);
var inst_21610 = (state_21670[(21)]);
var inst_21629__$1 = cljs.core.seq.call(null,inst_21610);
var state_21670__$1 = (function (){var statearr_21715 = state_21670;
(statearr_21715[(25)] = inst_21629__$1);

return statearr_21715;
})();
if(inst_21629__$1){
var statearr_21716_21784 = state_21670__$1;
(statearr_21716_21784[(1)] = (33));

} else {
var statearr_21717_21785 = state_21670__$1;
(statearr_21717_21785[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (25))){
var inst_21612 = (state_21670[(20)]);
var inst_21613 = (state_21670[(11)]);
var inst_21615 = (inst_21613 < inst_21612);
var inst_21616 = inst_21615;
var state_21670__$1 = state_21670;
if(cljs.core.truth_(inst_21616)){
var statearr_21718_21786 = state_21670__$1;
(statearr_21718_21786[(1)] = (27));

} else {
var statearr_21719_21787 = state_21670__$1;
(statearr_21719_21787[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (34))){
var state_21670__$1 = state_21670;
var statearr_21720_21788 = state_21670__$1;
(statearr_21720_21788[(2)] = null);

(statearr_21720_21788[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (17))){
var state_21670__$1 = state_21670;
var statearr_21721_21789 = state_21670__$1;
(statearr_21721_21789[(2)] = null);

(statearr_21721_21789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (3))){
var inst_21668 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21670__$1,inst_21668);
} else {
if((state_val_21671 === (12))){
var inst_21597 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21722_21790 = state_21670__$1;
(statearr_21722_21790[(2)] = inst_21597);

(statearr_21722_21790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (2))){
var state_21670__$1 = state_21670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21670__$1,(4),ch);
} else {
if((state_val_21671 === (23))){
var state_21670__$1 = state_21670;
var statearr_21723_21791 = state_21670__$1;
(statearr_21723_21791[(2)] = null);

(statearr_21723_21791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (35))){
var inst_21652 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21724_21792 = state_21670__$1;
(statearr_21724_21792[(2)] = inst_21652);

(statearr_21724_21792[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (19))){
var inst_21571 = (state_21670[(7)]);
var inst_21575 = cljs.core.chunk_first.call(null,inst_21571);
var inst_21576 = cljs.core.chunk_rest.call(null,inst_21571);
var inst_21577 = cljs.core.count.call(null,inst_21575);
var inst_21551 = inst_21576;
var inst_21552 = inst_21575;
var inst_21553 = inst_21577;
var inst_21554 = (0);
var state_21670__$1 = (function (){var statearr_21725 = state_21670;
(statearr_21725[(13)] = inst_21552);

(statearr_21725[(14)] = inst_21553);

(statearr_21725[(15)] = inst_21551);

(statearr_21725[(17)] = inst_21554);

return statearr_21725;
})();
var statearr_21726_21793 = state_21670__$1;
(statearr_21726_21793[(2)] = null);

(statearr_21726_21793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (11))){
var inst_21571 = (state_21670[(7)]);
var inst_21551 = (state_21670[(15)]);
var inst_21571__$1 = cljs.core.seq.call(null,inst_21551);
var state_21670__$1 = (function (){var statearr_21727 = state_21670;
(statearr_21727[(7)] = inst_21571__$1);

return statearr_21727;
})();
if(inst_21571__$1){
var statearr_21728_21794 = state_21670__$1;
(statearr_21728_21794[(1)] = (16));

} else {
var statearr_21729_21795 = state_21670__$1;
(statearr_21729_21795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (9))){
var inst_21599 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21730_21796 = state_21670__$1;
(statearr_21730_21796[(2)] = inst_21599);

(statearr_21730_21796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (5))){
var inst_21549 = cljs.core.deref.call(null,cs);
var inst_21550 = cljs.core.seq.call(null,inst_21549);
var inst_21551 = inst_21550;
var inst_21552 = null;
var inst_21553 = (0);
var inst_21554 = (0);
var state_21670__$1 = (function (){var statearr_21731 = state_21670;
(statearr_21731[(13)] = inst_21552);

(statearr_21731[(14)] = inst_21553);

(statearr_21731[(15)] = inst_21551);

(statearr_21731[(17)] = inst_21554);

return statearr_21731;
})();
var statearr_21732_21797 = state_21670__$1;
(statearr_21732_21797[(2)] = null);

(statearr_21732_21797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (14))){
var state_21670__$1 = state_21670;
var statearr_21733_21798 = state_21670__$1;
(statearr_21733_21798[(2)] = null);

(statearr_21733_21798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (45))){
var inst_21660 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21734_21799 = state_21670__$1;
(statearr_21734_21799[(2)] = inst_21660);

(statearr_21734_21799[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (26))){
var inst_21602 = (state_21670[(29)]);
var inst_21656 = (state_21670[(2)]);
var inst_21657 = cljs.core.seq.call(null,inst_21602);
var state_21670__$1 = (function (){var statearr_21735 = state_21670;
(statearr_21735[(31)] = inst_21656);

return statearr_21735;
})();
if(inst_21657){
var statearr_21736_21800 = state_21670__$1;
(statearr_21736_21800[(1)] = (42));

} else {
var statearr_21737_21801 = state_21670__$1;
(statearr_21737_21801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (16))){
var inst_21571 = (state_21670[(7)]);
var inst_21573 = cljs.core.chunked_seq_QMARK_.call(null,inst_21571);
var state_21670__$1 = state_21670;
if(inst_21573){
var statearr_21738_21802 = state_21670__$1;
(statearr_21738_21802[(1)] = (19));

} else {
var statearr_21739_21803 = state_21670__$1;
(statearr_21739_21803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (38))){
var inst_21649 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21740_21804 = state_21670__$1;
(statearr_21740_21804[(2)] = inst_21649);

(statearr_21740_21804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (30))){
var state_21670__$1 = state_21670;
var statearr_21741_21805 = state_21670__$1;
(statearr_21741_21805[(2)] = null);

(statearr_21741_21805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (10))){
var inst_21552 = (state_21670[(13)]);
var inst_21554 = (state_21670[(17)]);
var inst_21560 = cljs.core._nth.call(null,inst_21552,inst_21554);
var inst_21561 = cljs.core.nth.call(null,inst_21560,(0),null);
var inst_21562 = cljs.core.nth.call(null,inst_21560,(1),null);
var state_21670__$1 = (function (){var statearr_21742 = state_21670;
(statearr_21742[(26)] = inst_21561);

return statearr_21742;
})();
if(cljs.core.truth_(inst_21562)){
var statearr_21743_21806 = state_21670__$1;
(statearr_21743_21806[(1)] = (13));

} else {
var statearr_21744_21807 = state_21670__$1;
(statearr_21744_21807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (18))){
var inst_21595 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21745_21808 = state_21670__$1;
(statearr_21745_21808[(2)] = inst_21595);

(statearr_21745_21808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (42))){
var state_21670__$1 = state_21670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21670__$1,(45),dchan);
} else {
if((state_val_21671 === (37))){
var inst_21542 = (state_21670[(9)]);
var inst_21629 = (state_21670[(25)]);
var inst_21638 = (state_21670[(23)]);
var inst_21638__$1 = cljs.core.first.call(null,inst_21629);
var inst_21639 = cljs.core.async.put_BANG_.call(null,inst_21638__$1,inst_21542,done);
var state_21670__$1 = (function (){var statearr_21746 = state_21670;
(statearr_21746[(23)] = inst_21638__$1);

return statearr_21746;
})();
if(cljs.core.truth_(inst_21639)){
var statearr_21747_21809 = state_21670__$1;
(statearr_21747_21809[(1)] = (39));

} else {
var statearr_21748_21810 = state_21670__$1;
(statearr_21748_21810[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (8))){
var inst_21553 = (state_21670[(14)]);
var inst_21554 = (state_21670[(17)]);
var inst_21556 = (inst_21554 < inst_21553);
var inst_21557 = inst_21556;
var state_21670__$1 = state_21670;
if(cljs.core.truth_(inst_21557)){
var statearr_21749_21811 = state_21670__$1;
(statearr_21749_21811[(1)] = (10));

} else {
var statearr_21750_21812 = state_21670__$1;
(statearr_21750_21812[(1)] = (11));

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
});})(c__20451__auto___21758,cs,m,dchan,dctr,done))
;
return ((function (switch__20339__auto__,c__20451__auto___21758,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20340__auto__ = null;
var cljs$core$async$mult_$_state_machine__20340__auto____0 = (function (){
var statearr_21754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21754[(0)] = cljs$core$async$mult_$_state_machine__20340__auto__);

(statearr_21754[(1)] = (1));

return statearr_21754;
});
var cljs$core$async$mult_$_state_machine__20340__auto____1 = (function (state_21670){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_21670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e21755){if((e21755 instanceof Object)){
var ex__20343__auto__ = e21755;
var statearr_21756_21813 = state_21670;
(statearr_21756_21813[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21814 = state_21670;
state_21670 = G__21814;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20340__auto__ = function(state_21670){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20340__auto____1.call(this,state_21670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20340__auto____0;
cljs$core$async$mult_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20340__auto____1;
return cljs$core$async$mult_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___21758,cs,m,dchan,dctr,done))
})();
var state__20453__auto__ = (function (){var statearr_21757 = f__20452__auto__.call(null);
(statearr_21757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___21758);

return statearr_21757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___21758,cs,m,dchan,dctr,done))
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
var args21815 = [];
var len__19356__auto___21818 = arguments.length;
var i__19357__auto___21819 = (0);
while(true){
if((i__19357__auto___21819 < len__19356__auto___21818)){
args21815.push((arguments[i__19357__auto___21819]));

var G__21820 = (i__19357__auto___21819 + (1));
i__19357__auto___21819 = G__21820;
continue;
} else {
}
break;
}

var G__21817 = args21815.length;
switch (G__21817) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21815.length)].join('')));

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
var x__18953__auto__ = (((m == null))?null:m);
var m__18954__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,m,ch);
} else {
var m__18954__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,m,ch);
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
var x__18953__auto__ = (((m == null))?null:m);
var m__18954__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,m,ch);
} else {
var m__18954__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,m,ch);
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
var x__18953__auto__ = (((m == null))?null:m);
var m__18954__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,m);
} else {
var m__18954__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,m);
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
var x__18953__auto__ = (((m == null))?null:m);
var m__18954__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,m,state_map);
} else {
var m__18954__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,m,state_map);
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
var x__18953__auto__ = (((m == null))?null:m);
var m__18954__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,m,mode);
} else {
var m__18954__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19363__auto__ = [];
var len__19356__auto___21832 = arguments.length;
var i__19357__auto___21833 = (0);
while(true){
if((i__19357__auto___21833 < len__19356__auto___21832)){
args__19363__auto__.push((arguments[i__19357__auto___21833]));

var G__21834 = (i__19357__auto___21833 + (1));
i__19357__auto___21833 = G__21834;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((3) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19364__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21826){
var map__21827 = p__21826;
var map__21827__$1 = ((((!((map__21827 == null)))?((((map__21827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21827):map__21827);
var opts = map__21827__$1;
var statearr_21829_21835 = state;
(statearr_21829_21835[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21827,map__21827__$1,opts){
return (function (val){
var statearr_21830_21836 = state;
(statearr_21830_21836[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21827,map__21827__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21831_21837 = state;
(statearr_21831_21837[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21822){
var G__21823 = cljs.core.first.call(null,seq21822);
var seq21822__$1 = cljs.core.next.call(null,seq21822);
var G__21824 = cljs.core.first.call(null,seq21822__$1);
var seq21822__$2 = cljs.core.next.call(null,seq21822__$1);
var G__21825 = cljs.core.first.call(null,seq21822__$2);
var seq21822__$3 = cljs.core.next.call(null,seq21822__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21823,G__21824,G__21825,seq21822__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22001 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22002){
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
this.meta22002 = meta22002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22003,meta22002__$1){
var self__ = this;
var _22003__$1 = this;
return (new cljs.core.async.t_cljs$core$async22001(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22002__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22003){
var self__ = this;
var _22003__$1 = this;
return self__.meta22002;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22001.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22001.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22002","meta22002",1376912038,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22001";

cljs.core.async.t_cljs$core$async22001.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async22001");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22001 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22001(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22002){
return (new cljs.core.async.t_cljs$core$async22001(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22002));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22001(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20451__auto___22164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___22164,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___22164,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22101){
var state_val_22102 = (state_22101[(1)]);
if((state_val_22102 === (7))){
var inst_22019 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22103_22165 = state_22101__$1;
(statearr_22103_22165[(2)] = inst_22019);

(statearr_22103_22165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (20))){
var inst_22031 = (state_22101[(7)]);
var state_22101__$1 = state_22101;
var statearr_22104_22166 = state_22101__$1;
(statearr_22104_22166[(2)] = inst_22031);

(statearr_22104_22166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (27))){
var state_22101__$1 = state_22101;
var statearr_22105_22167 = state_22101__$1;
(statearr_22105_22167[(2)] = null);

(statearr_22105_22167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (1))){
var inst_22007 = (state_22101[(8)]);
var inst_22007__$1 = calc_state.call(null);
var inst_22009 = (inst_22007__$1 == null);
var inst_22010 = cljs.core.not.call(null,inst_22009);
var state_22101__$1 = (function (){var statearr_22106 = state_22101;
(statearr_22106[(8)] = inst_22007__$1);

return statearr_22106;
})();
if(inst_22010){
var statearr_22107_22168 = state_22101__$1;
(statearr_22107_22168[(1)] = (2));

} else {
var statearr_22108_22169 = state_22101__$1;
(statearr_22108_22169[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (24))){
var inst_22061 = (state_22101[(9)]);
var inst_22075 = (state_22101[(10)]);
var inst_22054 = (state_22101[(11)]);
var inst_22075__$1 = inst_22054.call(null,inst_22061);
var state_22101__$1 = (function (){var statearr_22109 = state_22101;
(statearr_22109[(10)] = inst_22075__$1);

return statearr_22109;
})();
if(cljs.core.truth_(inst_22075__$1)){
var statearr_22110_22170 = state_22101__$1;
(statearr_22110_22170[(1)] = (29));

} else {
var statearr_22111_22171 = state_22101__$1;
(statearr_22111_22171[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (4))){
var inst_22022 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22022)){
var statearr_22112_22172 = state_22101__$1;
(statearr_22112_22172[(1)] = (8));

} else {
var statearr_22113_22173 = state_22101__$1;
(statearr_22113_22173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (15))){
var inst_22048 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22048)){
var statearr_22114_22174 = state_22101__$1;
(statearr_22114_22174[(1)] = (19));

} else {
var statearr_22115_22175 = state_22101__$1;
(statearr_22115_22175[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (21))){
var inst_22053 = (state_22101[(12)]);
var inst_22053__$1 = (state_22101[(2)]);
var inst_22054 = cljs.core.get.call(null,inst_22053__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22055 = cljs.core.get.call(null,inst_22053__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22056 = cljs.core.get.call(null,inst_22053__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22101__$1 = (function (){var statearr_22116 = state_22101;
(statearr_22116[(12)] = inst_22053__$1);

(statearr_22116[(13)] = inst_22055);

(statearr_22116[(11)] = inst_22054);

return statearr_22116;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22101__$1,(22),inst_22056);
} else {
if((state_val_22102 === (31))){
var inst_22083 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22083)){
var statearr_22117_22176 = state_22101__$1;
(statearr_22117_22176[(1)] = (32));

} else {
var statearr_22118_22177 = state_22101__$1;
(statearr_22118_22177[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (32))){
var inst_22060 = (state_22101[(14)]);
var state_22101__$1 = state_22101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22101__$1,(35),out,inst_22060);
} else {
if((state_val_22102 === (33))){
var inst_22053 = (state_22101[(12)]);
var inst_22031 = inst_22053;
var state_22101__$1 = (function (){var statearr_22119 = state_22101;
(statearr_22119[(7)] = inst_22031);

return statearr_22119;
})();
var statearr_22120_22178 = state_22101__$1;
(statearr_22120_22178[(2)] = null);

(statearr_22120_22178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (13))){
var inst_22031 = (state_22101[(7)]);
var inst_22038 = inst_22031.cljs$lang$protocol_mask$partition0$;
var inst_22039 = (inst_22038 & (64));
var inst_22040 = inst_22031.cljs$core$ISeq$;
var inst_22041 = (inst_22039) || (inst_22040);
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22041)){
var statearr_22121_22179 = state_22101__$1;
(statearr_22121_22179[(1)] = (16));

} else {
var statearr_22122_22180 = state_22101__$1;
(statearr_22122_22180[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (22))){
var inst_22060 = (state_22101[(14)]);
var inst_22061 = (state_22101[(9)]);
var inst_22059 = (state_22101[(2)]);
var inst_22060__$1 = cljs.core.nth.call(null,inst_22059,(0),null);
var inst_22061__$1 = cljs.core.nth.call(null,inst_22059,(1),null);
var inst_22062 = (inst_22060__$1 == null);
var inst_22063 = cljs.core._EQ_.call(null,inst_22061__$1,change);
var inst_22064 = (inst_22062) || (inst_22063);
var state_22101__$1 = (function (){var statearr_22123 = state_22101;
(statearr_22123[(14)] = inst_22060__$1);

(statearr_22123[(9)] = inst_22061__$1);

return statearr_22123;
})();
if(cljs.core.truth_(inst_22064)){
var statearr_22124_22181 = state_22101__$1;
(statearr_22124_22181[(1)] = (23));

} else {
var statearr_22125_22182 = state_22101__$1;
(statearr_22125_22182[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (36))){
var inst_22053 = (state_22101[(12)]);
var inst_22031 = inst_22053;
var state_22101__$1 = (function (){var statearr_22126 = state_22101;
(statearr_22126[(7)] = inst_22031);

return statearr_22126;
})();
var statearr_22127_22183 = state_22101__$1;
(statearr_22127_22183[(2)] = null);

(statearr_22127_22183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (29))){
var inst_22075 = (state_22101[(10)]);
var state_22101__$1 = state_22101;
var statearr_22128_22184 = state_22101__$1;
(statearr_22128_22184[(2)] = inst_22075);

(statearr_22128_22184[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (6))){
var state_22101__$1 = state_22101;
var statearr_22129_22185 = state_22101__$1;
(statearr_22129_22185[(2)] = false);

(statearr_22129_22185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (28))){
var inst_22071 = (state_22101[(2)]);
var inst_22072 = calc_state.call(null);
var inst_22031 = inst_22072;
var state_22101__$1 = (function (){var statearr_22130 = state_22101;
(statearr_22130[(15)] = inst_22071);

(statearr_22130[(7)] = inst_22031);

return statearr_22130;
})();
var statearr_22131_22186 = state_22101__$1;
(statearr_22131_22186[(2)] = null);

(statearr_22131_22186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (25))){
var inst_22097 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22132_22187 = state_22101__$1;
(statearr_22132_22187[(2)] = inst_22097);

(statearr_22132_22187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (34))){
var inst_22095 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22133_22188 = state_22101__$1;
(statearr_22133_22188[(2)] = inst_22095);

(statearr_22133_22188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (17))){
var state_22101__$1 = state_22101;
var statearr_22134_22189 = state_22101__$1;
(statearr_22134_22189[(2)] = false);

(statearr_22134_22189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (3))){
var state_22101__$1 = state_22101;
var statearr_22135_22190 = state_22101__$1;
(statearr_22135_22190[(2)] = false);

(statearr_22135_22190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (12))){
var inst_22099 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22101__$1,inst_22099);
} else {
if((state_val_22102 === (2))){
var inst_22007 = (state_22101[(8)]);
var inst_22012 = inst_22007.cljs$lang$protocol_mask$partition0$;
var inst_22013 = (inst_22012 & (64));
var inst_22014 = inst_22007.cljs$core$ISeq$;
var inst_22015 = (inst_22013) || (inst_22014);
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22015)){
var statearr_22136_22191 = state_22101__$1;
(statearr_22136_22191[(1)] = (5));

} else {
var statearr_22137_22192 = state_22101__$1;
(statearr_22137_22192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (23))){
var inst_22060 = (state_22101[(14)]);
var inst_22066 = (inst_22060 == null);
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22066)){
var statearr_22138_22193 = state_22101__$1;
(statearr_22138_22193[(1)] = (26));

} else {
var statearr_22139_22194 = state_22101__$1;
(statearr_22139_22194[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (35))){
var inst_22086 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
if(cljs.core.truth_(inst_22086)){
var statearr_22140_22195 = state_22101__$1;
(statearr_22140_22195[(1)] = (36));

} else {
var statearr_22141_22196 = state_22101__$1;
(statearr_22141_22196[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (19))){
var inst_22031 = (state_22101[(7)]);
var inst_22050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22031);
var state_22101__$1 = state_22101;
var statearr_22142_22197 = state_22101__$1;
(statearr_22142_22197[(2)] = inst_22050);

(statearr_22142_22197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (11))){
var inst_22031 = (state_22101[(7)]);
var inst_22035 = (inst_22031 == null);
var inst_22036 = cljs.core.not.call(null,inst_22035);
var state_22101__$1 = state_22101;
if(inst_22036){
var statearr_22143_22198 = state_22101__$1;
(statearr_22143_22198[(1)] = (13));

} else {
var statearr_22144_22199 = state_22101__$1;
(statearr_22144_22199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (9))){
var inst_22007 = (state_22101[(8)]);
var state_22101__$1 = state_22101;
var statearr_22145_22200 = state_22101__$1;
(statearr_22145_22200[(2)] = inst_22007);

(statearr_22145_22200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (5))){
var state_22101__$1 = state_22101;
var statearr_22146_22201 = state_22101__$1;
(statearr_22146_22201[(2)] = true);

(statearr_22146_22201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (14))){
var state_22101__$1 = state_22101;
var statearr_22147_22202 = state_22101__$1;
(statearr_22147_22202[(2)] = false);

(statearr_22147_22202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (26))){
var inst_22061 = (state_22101[(9)]);
var inst_22068 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22061);
var state_22101__$1 = state_22101;
var statearr_22148_22203 = state_22101__$1;
(statearr_22148_22203[(2)] = inst_22068);

(statearr_22148_22203[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (16))){
var state_22101__$1 = state_22101;
var statearr_22149_22204 = state_22101__$1;
(statearr_22149_22204[(2)] = true);

(statearr_22149_22204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (38))){
var inst_22091 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22150_22205 = state_22101__$1;
(statearr_22150_22205[(2)] = inst_22091);

(statearr_22150_22205[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (30))){
var inst_22061 = (state_22101[(9)]);
var inst_22055 = (state_22101[(13)]);
var inst_22054 = (state_22101[(11)]);
var inst_22078 = cljs.core.empty_QMARK_.call(null,inst_22054);
var inst_22079 = inst_22055.call(null,inst_22061);
var inst_22080 = cljs.core.not.call(null,inst_22079);
var inst_22081 = (inst_22078) && (inst_22080);
var state_22101__$1 = state_22101;
var statearr_22151_22206 = state_22101__$1;
(statearr_22151_22206[(2)] = inst_22081);

(statearr_22151_22206[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (10))){
var inst_22007 = (state_22101[(8)]);
var inst_22027 = (state_22101[(2)]);
var inst_22028 = cljs.core.get.call(null,inst_22027,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22029 = cljs.core.get.call(null,inst_22027,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22030 = cljs.core.get.call(null,inst_22027,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22031 = inst_22007;
var state_22101__$1 = (function (){var statearr_22152 = state_22101;
(statearr_22152[(16)] = inst_22028);

(statearr_22152[(17)] = inst_22030);

(statearr_22152[(18)] = inst_22029);

(statearr_22152[(7)] = inst_22031);

return statearr_22152;
})();
var statearr_22153_22207 = state_22101__$1;
(statearr_22153_22207[(2)] = null);

(statearr_22153_22207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (18))){
var inst_22045 = (state_22101[(2)]);
var state_22101__$1 = state_22101;
var statearr_22154_22208 = state_22101__$1;
(statearr_22154_22208[(2)] = inst_22045);

(statearr_22154_22208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (37))){
var state_22101__$1 = state_22101;
var statearr_22155_22209 = state_22101__$1;
(statearr_22155_22209[(2)] = null);

(statearr_22155_22209[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22102 === (8))){
var inst_22007 = (state_22101[(8)]);
var inst_22024 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22007);
var state_22101__$1 = state_22101;
var statearr_22156_22210 = state_22101__$1;
(statearr_22156_22210[(2)] = inst_22024);

(statearr_22156_22210[(1)] = (10));


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
});})(c__20451__auto___22164,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20339__auto__,c__20451__auto___22164,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20340__auto__ = null;
var cljs$core$async$mix_$_state_machine__20340__auto____0 = (function (){
var statearr_22160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22160[(0)] = cljs$core$async$mix_$_state_machine__20340__auto__);

(statearr_22160[(1)] = (1));

return statearr_22160;
});
var cljs$core$async$mix_$_state_machine__20340__auto____1 = (function (state_22101){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_22101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e22161){if((e22161 instanceof Object)){
var ex__20343__auto__ = e22161;
var statearr_22162_22211 = state_22101;
(statearr_22162_22211[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22212 = state_22101;
state_22101 = G__22212;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20340__auto__ = function(state_22101){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20340__auto____1.call(this,state_22101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20340__auto____0;
cljs$core$async$mix_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20340__auto____1;
return cljs$core$async$mix_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___22164,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20453__auto__ = (function (){var statearr_22163 = f__20452__auto__.call(null);
(statearr_22163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___22164);

return statearr_22163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___22164,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__18953__auto__ = (((p == null))?null:p);
var m__18954__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18954__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__18953__auto__ = (((p == null))?null:p);
var m__18954__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,p,v,ch);
} else {
var m__18954__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22213 = [];
var len__19356__auto___22216 = arguments.length;
var i__19357__auto___22217 = (0);
while(true){
if((i__19357__auto___22217 < len__19356__auto___22216)){
args22213.push((arguments[i__19357__auto___22217]));

var G__22218 = (i__19357__auto___22217 + (1));
i__19357__auto___22217 = G__22218;
continue;
} else {
}
break;
}

var G__22215 = args22213.length;
switch (G__22215) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22213.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18953__auto__ = (((p == null))?null:p);
var m__18954__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,p);
} else {
var m__18954__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,p);
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
var x__18953__auto__ = (((p == null))?null:p);
var m__18954__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18953__auto__)]);
if(!((m__18954__auto__ == null))){
return m__18954__auto__.call(null,p,v);
} else {
var m__18954__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18954__auto____$1 == null))){
return m__18954__auto____$1.call(null,p,v);
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
var args22221 = [];
var len__19356__auto___22346 = arguments.length;
var i__19357__auto___22347 = (0);
while(true){
if((i__19357__auto___22347 < len__19356__auto___22346)){
args22221.push((arguments[i__19357__auto___22347]));

var G__22348 = (i__19357__auto___22347 + (1));
i__19357__auto___22347 = G__22348;
continue;
} else {
}
break;
}

var G__22223 = args22221.length;
switch (G__22223) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22221.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18298__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18298__auto__,mults){
return (function (p1__22220_SHARP_){
if(cljs.core.truth_(p1__22220_SHARP_.call(null,topic))){
return p1__22220_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22220_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18298__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22224 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22225){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22225 = meta22225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22226,meta22225__$1){
var self__ = this;
var _22226__$1 = this;
return (new cljs.core.async.t_cljs$core$async22224(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22225__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22226){
var self__ = this;
var _22226__$1 = this;
return self__.meta22225;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22224.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22225","meta22225",-2018434392,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22224";

cljs.core.async.t_cljs$core$async22224.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async22224");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22224 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22224(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22225){
return (new cljs.core.async.t_cljs$core$async22224(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22225));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22224(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20451__auto___22350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___22350,mults,ensure_mult,p){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___22350,mults,ensure_mult,p){
return (function (state_22298){
var state_val_22299 = (state_22298[(1)]);
if((state_val_22299 === (7))){
var inst_22294 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22300_22351 = state_22298__$1;
(statearr_22300_22351[(2)] = inst_22294);

(statearr_22300_22351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (20))){
var state_22298__$1 = state_22298;
var statearr_22301_22352 = state_22298__$1;
(statearr_22301_22352[(2)] = null);

(statearr_22301_22352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (1))){
var state_22298__$1 = state_22298;
var statearr_22302_22353 = state_22298__$1;
(statearr_22302_22353[(2)] = null);

(statearr_22302_22353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (24))){
var inst_22277 = (state_22298[(7)]);
var inst_22286 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22277);
var state_22298__$1 = state_22298;
var statearr_22303_22354 = state_22298__$1;
(statearr_22303_22354[(2)] = inst_22286);

(statearr_22303_22354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (4))){
var inst_22229 = (state_22298[(8)]);
var inst_22229__$1 = (state_22298[(2)]);
var inst_22230 = (inst_22229__$1 == null);
var state_22298__$1 = (function (){var statearr_22304 = state_22298;
(statearr_22304[(8)] = inst_22229__$1);

return statearr_22304;
})();
if(cljs.core.truth_(inst_22230)){
var statearr_22305_22355 = state_22298__$1;
(statearr_22305_22355[(1)] = (5));

} else {
var statearr_22306_22356 = state_22298__$1;
(statearr_22306_22356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (15))){
var inst_22271 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22307_22357 = state_22298__$1;
(statearr_22307_22357[(2)] = inst_22271);

(statearr_22307_22357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (21))){
var inst_22291 = (state_22298[(2)]);
var state_22298__$1 = (function (){var statearr_22308 = state_22298;
(statearr_22308[(9)] = inst_22291);

return statearr_22308;
})();
var statearr_22309_22358 = state_22298__$1;
(statearr_22309_22358[(2)] = null);

(statearr_22309_22358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (13))){
var inst_22253 = (state_22298[(10)]);
var inst_22255 = cljs.core.chunked_seq_QMARK_.call(null,inst_22253);
var state_22298__$1 = state_22298;
if(inst_22255){
var statearr_22310_22359 = state_22298__$1;
(statearr_22310_22359[(1)] = (16));

} else {
var statearr_22311_22360 = state_22298__$1;
(statearr_22311_22360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (22))){
var inst_22283 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
if(cljs.core.truth_(inst_22283)){
var statearr_22312_22361 = state_22298__$1;
(statearr_22312_22361[(1)] = (23));

} else {
var statearr_22313_22362 = state_22298__$1;
(statearr_22313_22362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (6))){
var inst_22279 = (state_22298[(11)]);
var inst_22229 = (state_22298[(8)]);
var inst_22277 = (state_22298[(7)]);
var inst_22277__$1 = topic_fn.call(null,inst_22229);
var inst_22278 = cljs.core.deref.call(null,mults);
var inst_22279__$1 = cljs.core.get.call(null,inst_22278,inst_22277__$1);
var state_22298__$1 = (function (){var statearr_22314 = state_22298;
(statearr_22314[(11)] = inst_22279__$1);

(statearr_22314[(7)] = inst_22277__$1);

return statearr_22314;
})();
if(cljs.core.truth_(inst_22279__$1)){
var statearr_22315_22363 = state_22298__$1;
(statearr_22315_22363[(1)] = (19));

} else {
var statearr_22316_22364 = state_22298__$1;
(statearr_22316_22364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (25))){
var inst_22288 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22317_22365 = state_22298__$1;
(statearr_22317_22365[(2)] = inst_22288);

(statearr_22317_22365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (17))){
var inst_22253 = (state_22298[(10)]);
var inst_22262 = cljs.core.first.call(null,inst_22253);
var inst_22263 = cljs.core.async.muxch_STAR_.call(null,inst_22262);
var inst_22264 = cljs.core.async.close_BANG_.call(null,inst_22263);
var inst_22265 = cljs.core.next.call(null,inst_22253);
var inst_22239 = inst_22265;
var inst_22240 = null;
var inst_22241 = (0);
var inst_22242 = (0);
var state_22298__$1 = (function (){var statearr_22318 = state_22298;
(statearr_22318[(12)] = inst_22239);

(statearr_22318[(13)] = inst_22264);

(statearr_22318[(14)] = inst_22240);

(statearr_22318[(15)] = inst_22241);

(statearr_22318[(16)] = inst_22242);

return statearr_22318;
})();
var statearr_22319_22366 = state_22298__$1;
(statearr_22319_22366[(2)] = null);

(statearr_22319_22366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (3))){
var inst_22296 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22298__$1,inst_22296);
} else {
if((state_val_22299 === (12))){
var inst_22273 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22320_22367 = state_22298__$1;
(statearr_22320_22367[(2)] = inst_22273);

(statearr_22320_22367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (2))){
var state_22298__$1 = state_22298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22298__$1,(4),ch);
} else {
if((state_val_22299 === (23))){
var state_22298__$1 = state_22298;
var statearr_22321_22368 = state_22298__$1;
(statearr_22321_22368[(2)] = null);

(statearr_22321_22368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (19))){
var inst_22279 = (state_22298[(11)]);
var inst_22229 = (state_22298[(8)]);
var inst_22281 = cljs.core.async.muxch_STAR_.call(null,inst_22279);
var state_22298__$1 = state_22298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22298__$1,(22),inst_22281,inst_22229);
} else {
if((state_val_22299 === (11))){
var inst_22239 = (state_22298[(12)]);
var inst_22253 = (state_22298[(10)]);
var inst_22253__$1 = cljs.core.seq.call(null,inst_22239);
var state_22298__$1 = (function (){var statearr_22322 = state_22298;
(statearr_22322[(10)] = inst_22253__$1);

return statearr_22322;
})();
if(inst_22253__$1){
var statearr_22323_22369 = state_22298__$1;
(statearr_22323_22369[(1)] = (13));

} else {
var statearr_22324_22370 = state_22298__$1;
(statearr_22324_22370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (9))){
var inst_22275 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22325_22371 = state_22298__$1;
(statearr_22325_22371[(2)] = inst_22275);

(statearr_22325_22371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (5))){
var inst_22236 = cljs.core.deref.call(null,mults);
var inst_22237 = cljs.core.vals.call(null,inst_22236);
var inst_22238 = cljs.core.seq.call(null,inst_22237);
var inst_22239 = inst_22238;
var inst_22240 = null;
var inst_22241 = (0);
var inst_22242 = (0);
var state_22298__$1 = (function (){var statearr_22326 = state_22298;
(statearr_22326[(12)] = inst_22239);

(statearr_22326[(14)] = inst_22240);

(statearr_22326[(15)] = inst_22241);

(statearr_22326[(16)] = inst_22242);

return statearr_22326;
})();
var statearr_22327_22372 = state_22298__$1;
(statearr_22327_22372[(2)] = null);

(statearr_22327_22372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (14))){
var state_22298__$1 = state_22298;
var statearr_22331_22373 = state_22298__$1;
(statearr_22331_22373[(2)] = null);

(statearr_22331_22373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (16))){
var inst_22253 = (state_22298[(10)]);
var inst_22257 = cljs.core.chunk_first.call(null,inst_22253);
var inst_22258 = cljs.core.chunk_rest.call(null,inst_22253);
var inst_22259 = cljs.core.count.call(null,inst_22257);
var inst_22239 = inst_22258;
var inst_22240 = inst_22257;
var inst_22241 = inst_22259;
var inst_22242 = (0);
var state_22298__$1 = (function (){var statearr_22332 = state_22298;
(statearr_22332[(12)] = inst_22239);

(statearr_22332[(14)] = inst_22240);

(statearr_22332[(15)] = inst_22241);

(statearr_22332[(16)] = inst_22242);

return statearr_22332;
})();
var statearr_22333_22374 = state_22298__$1;
(statearr_22333_22374[(2)] = null);

(statearr_22333_22374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (10))){
var inst_22239 = (state_22298[(12)]);
var inst_22240 = (state_22298[(14)]);
var inst_22241 = (state_22298[(15)]);
var inst_22242 = (state_22298[(16)]);
var inst_22247 = cljs.core._nth.call(null,inst_22240,inst_22242);
var inst_22248 = cljs.core.async.muxch_STAR_.call(null,inst_22247);
var inst_22249 = cljs.core.async.close_BANG_.call(null,inst_22248);
var inst_22250 = (inst_22242 + (1));
var tmp22328 = inst_22239;
var tmp22329 = inst_22240;
var tmp22330 = inst_22241;
var inst_22239__$1 = tmp22328;
var inst_22240__$1 = tmp22329;
var inst_22241__$1 = tmp22330;
var inst_22242__$1 = inst_22250;
var state_22298__$1 = (function (){var statearr_22334 = state_22298;
(statearr_22334[(12)] = inst_22239__$1);

(statearr_22334[(17)] = inst_22249);

(statearr_22334[(14)] = inst_22240__$1);

(statearr_22334[(15)] = inst_22241__$1);

(statearr_22334[(16)] = inst_22242__$1);

return statearr_22334;
})();
var statearr_22335_22375 = state_22298__$1;
(statearr_22335_22375[(2)] = null);

(statearr_22335_22375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (18))){
var inst_22268 = (state_22298[(2)]);
var state_22298__$1 = state_22298;
var statearr_22336_22376 = state_22298__$1;
(statearr_22336_22376[(2)] = inst_22268);

(statearr_22336_22376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22299 === (8))){
var inst_22241 = (state_22298[(15)]);
var inst_22242 = (state_22298[(16)]);
var inst_22244 = (inst_22242 < inst_22241);
var inst_22245 = inst_22244;
var state_22298__$1 = state_22298;
if(cljs.core.truth_(inst_22245)){
var statearr_22337_22377 = state_22298__$1;
(statearr_22337_22377[(1)] = (10));

} else {
var statearr_22338_22378 = state_22298__$1;
(statearr_22338_22378[(1)] = (11));

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
});})(c__20451__auto___22350,mults,ensure_mult,p))
;
return ((function (switch__20339__auto__,c__20451__auto___22350,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_22342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22342[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_22342[(1)] = (1));

return statearr_22342;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_22298){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_22298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e22343){if((e22343 instanceof Object)){
var ex__20343__auto__ = e22343;
var statearr_22344_22379 = state_22298;
(statearr_22344_22379[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22380 = state_22298;
state_22298 = G__22380;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_22298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_22298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___22350,mults,ensure_mult,p))
})();
var state__20453__auto__ = (function (){var statearr_22345 = f__20452__auto__.call(null);
(statearr_22345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___22350);

return statearr_22345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___22350,mults,ensure_mult,p))
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
var args22381 = [];
var len__19356__auto___22384 = arguments.length;
var i__19357__auto___22385 = (0);
while(true){
if((i__19357__auto___22385 < len__19356__auto___22384)){
args22381.push((arguments[i__19357__auto___22385]));

var G__22386 = (i__19357__auto___22385 + (1));
i__19357__auto___22385 = G__22386;
continue;
} else {
}
break;
}

var G__22383 = args22381.length;
switch (G__22383) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22381.length)].join('')));

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
var args22388 = [];
var len__19356__auto___22391 = arguments.length;
var i__19357__auto___22392 = (0);
while(true){
if((i__19357__auto___22392 < len__19356__auto___22391)){
args22388.push((arguments[i__19357__auto___22392]));

var G__22393 = (i__19357__auto___22392 + (1));
i__19357__auto___22392 = G__22393;
continue;
} else {
}
break;
}

var G__22390 = args22388.length;
switch (G__22390) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22388.length)].join('')));

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
var args22395 = [];
var len__19356__auto___22466 = arguments.length;
var i__19357__auto___22467 = (0);
while(true){
if((i__19357__auto___22467 < len__19356__auto___22466)){
args22395.push((arguments[i__19357__auto___22467]));

var G__22468 = (i__19357__auto___22467 + (1));
i__19357__auto___22467 = G__22468;
continue;
} else {
}
break;
}

var G__22397 = args22395.length;
switch (G__22397) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22395.length)].join('')));

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
var c__20451__auto___22470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22436){
var state_val_22437 = (state_22436[(1)]);
if((state_val_22437 === (7))){
var state_22436__$1 = state_22436;
var statearr_22438_22471 = state_22436__$1;
(statearr_22438_22471[(2)] = null);

(statearr_22438_22471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (1))){
var state_22436__$1 = state_22436;
var statearr_22439_22472 = state_22436__$1;
(statearr_22439_22472[(2)] = null);

(statearr_22439_22472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (4))){
var inst_22400 = (state_22436[(7)]);
var inst_22402 = (inst_22400 < cnt);
var state_22436__$1 = state_22436;
if(cljs.core.truth_(inst_22402)){
var statearr_22440_22473 = state_22436__$1;
(statearr_22440_22473[(1)] = (6));

} else {
var statearr_22441_22474 = state_22436__$1;
(statearr_22441_22474[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (15))){
var inst_22432 = (state_22436[(2)]);
var state_22436__$1 = state_22436;
var statearr_22442_22475 = state_22436__$1;
(statearr_22442_22475[(2)] = inst_22432);

(statearr_22442_22475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (13))){
var inst_22425 = cljs.core.async.close_BANG_.call(null,out);
var state_22436__$1 = state_22436;
var statearr_22443_22476 = state_22436__$1;
(statearr_22443_22476[(2)] = inst_22425);

(statearr_22443_22476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (6))){
var state_22436__$1 = state_22436;
var statearr_22444_22477 = state_22436__$1;
(statearr_22444_22477[(2)] = null);

(statearr_22444_22477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (3))){
var inst_22434 = (state_22436[(2)]);
var state_22436__$1 = state_22436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22436__$1,inst_22434);
} else {
if((state_val_22437 === (12))){
var inst_22422 = (state_22436[(8)]);
var inst_22422__$1 = (state_22436[(2)]);
var inst_22423 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22422__$1);
var state_22436__$1 = (function (){var statearr_22445 = state_22436;
(statearr_22445[(8)] = inst_22422__$1);

return statearr_22445;
})();
if(cljs.core.truth_(inst_22423)){
var statearr_22446_22478 = state_22436__$1;
(statearr_22446_22478[(1)] = (13));

} else {
var statearr_22447_22479 = state_22436__$1;
(statearr_22447_22479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (2))){
var inst_22399 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22400 = (0);
var state_22436__$1 = (function (){var statearr_22448 = state_22436;
(statearr_22448[(7)] = inst_22400);

(statearr_22448[(9)] = inst_22399);

return statearr_22448;
})();
var statearr_22449_22480 = state_22436__$1;
(statearr_22449_22480[(2)] = null);

(statearr_22449_22480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (11))){
var inst_22400 = (state_22436[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22436,(10),Object,null,(9));
var inst_22409 = chs__$1.call(null,inst_22400);
var inst_22410 = done.call(null,inst_22400);
var inst_22411 = cljs.core.async.take_BANG_.call(null,inst_22409,inst_22410);
var state_22436__$1 = state_22436;
var statearr_22450_22481 = state_22436__$1;
(statearr_22450_22481[(2)] = inst_22411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (9))){
var inst_22400 = (state_22436[(7)]);
var inst_22413 = (state_22436[(2)]);
var inst_22414 = (inst_22400 + (1));
var inst_22400__$1 = inst_22414;
var state_22436__$1 = (function (){var statearr_22451 = state_22436;
(statearr_22451[(10)] = inst_22413);

(statearr_22451[(7)] = inst_22400__$1);

return statearr_22451;
})();
var statearr_22452_22482 = state_22436__$1;
(statearr_22452_22482[(2)] = null);

(statearr_22452_22482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (5))){
var inst_22420 = (state_22436[(2)]);
var state_22436__$1 = (function (){var statearr_22453 = state_22436;
(statearr_22453[(11)] = inst_22420);

return statearr_22453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22436__$1,(12),dchan);
} else {
if((state_val_22437 === (14))){
var inst_22422 = (state_22436[(8)]);
var inst_22427 = cljs.core.apply.call(null,f,inst_22422);
var state_22436__$1 = state_22436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22436__$1,(16),out,inst_22427);
} else {
if((state_val_22437 === (16))){
var inst_22429 = (state_22436[(2)]);
var state_22436__$1 = (function (){var statearr_22454 = state_22436;
(statearr_22454[(12)] = inst_22429);

return statearr_22454;
})();
var statearr_22455_22483 = state_22436__$1;
(statearr_22455_22483[(2)] = null);

(statearr_22455_22483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (10))){
var inst_22404 = (state_22436[(2)]);
var inst_22405 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22436__$1 = (function (){var statearr_22456 = state_22436;
(statearr_22456[(13)] = inst_22404);

return statearr_22456;
})();
var statearr_22457_22484 = state_22436__$1;
(statearr_22457_22484[(2)] = inst_22405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22437 === (8))){
var inst_22418 = (state_22436[(2)]);
var state_22436__$1 = state_22436;
var statearr_22458_22485 = state_22436__$1;
(statearr_22458_22485[(2)] = inst_22418);

(statearr_22458_22485[(1)] = (5));


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
});})(c__20451__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20339__auto__,c__20451__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_22462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22462[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_22462[(1)] = (1));

return statearr_22462;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_22436){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_22436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e22463){if((e22463 instanceof Object)){
var ex__20343__auto__ = e22463;
var statearr_22464_22486 = state_22436;
(statearr_22464_22486[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22487 = state_22436;
state_22436 = G__22487;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_22436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_22436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20453__auto__ = (function (){var statearr_22465 = f__20452__auto__.call(null);
(statearr_22465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___22470);

return statearr_22465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22489 = [];
var len__19356__auto___22545 = arguments.length;
var i__19357__auto___22546 = (0);
while(true){
if((i__19357__auto___22546 < len__19356__auto___22545)){
args22489.push((arguments[i__19357__auto___22546]));

var G__22547 = (i__19357__auto___22546 + (1));
i__19357__auto___22546 = G__22547;
continue;
} else {
}
break;
}

var G__22491 = args22489.length;
switch (G__22491) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22489.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20451__auto___22549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___22549,out){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___22549,out){
return (function (state_22521){
var state_val_22522 = (state_22521[(1)]);
if((state_val_22522 === (7))){
var inst_22500 = (state_22521[(7)]);
var inst_22501 = (state_22521[(8)]);
var inst_22500__$1 = (state_22521[(2)]);
var inst_22501__$1 = cljs.core.nth.call(null,inst_22500__$1,(0),null);
var inst_22502 = cljs.core.nth.call(null,inst_22500__$1,(1),null);
var inst_22503 = (inst_22501__$1 == null);
var state_22521__$1 = (function (){var statearr_22523 = state_22521;
(statearr_22523[(7)] = inst_22500__$1);

(statearr_22523[(9)] = inst_22502);

(statearr_22523[(8)] = inst_22501__$1);

return statearr_22523;
})();
if(cljs.core.truth_(inst_22503)){
var statearr_22524_22550 = state_22521__$1;
(statearr_22524_22550[(1)] = (8));

} else {
var statearr_22525_22551 = state_22521__$1;
(statearr_22525_22551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (1))){
var inst_22492 = cljs.core.vec.call(null,chs);
var inst_22493 = inst_22492;
var state_22521__$1 = (function (){var statearr_22526 = state_22521;
(statearr_22526[(10)] = inst_22493);

return statearr_22526;
})();
var statearr_22527_22552 = state_22521__$1;
(statearr_22527_22552[(2)] = null);

(statearr_22527_22552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (4))){
var inst_22493 = (state_22521[(10)]);
var state_22521__$1 = state_22521;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22521__$1,(7),inst_22493);
} else {
if((state_val_22522 === (6))){
var inst_22517 = (state_22521[(2)]);
var state_22521__$1 = state_22521;
var statearr_22528_22553 = state_22521__$1;
(statearr_22528_22553[(2)] = inst_22517);

(statearr_22528_22553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (3))){
var inst_22519 = (state_22521[(2)]);
var state_22521__$1 = state_22521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22521__$1,inst_22519);
} else {
if((state_val_22522 === (2))){
var inst_22493 = (state_22521[(10)]);
var inst_22495 = cljs.core.count.call(null,inst_22493);
var inst_22496 = (inst_22495 > (0));
var state_22521__$1 = state_22521;
if(cljs.core.truth_(inst_22496)){
var statearr_22530_22554 = state_22521__$1;
(statearr_22530_22554[(1)] = (4));

} else {
var statearr_22531_22555 = state_22521__$1;
(statearr_22531_22555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (11))){
var inst_22493 = (state_22521[(10)]);
var inst_22510 = (state_22521[(2)]);
var tmp22529 = inst_22493;
var inst_22493__$1 = tmp22529;
var state_22521__$1 = (function (){var statearr_22532 = state_22521;
(statearr_22532[(10)] = inst_22493__$1);

(statearr_22532[(11)] = inst_22510);

return statearr_22532;
})();
var statearr_22533_22556 = state_22521__$1;
(statearr_22533_22556[(2)] = null);

(statearr_22533_22556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (9))){
var inst_22501 = (state_22521[(8)]);
var state_22521__$1 = state_22521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22521__$1,(11),out,inst_22501);
} else {
if((state_val_22522 === (5))){
var inst_22515 = cljs.core.async.close_BANG_.call(null,out);
var state_22521__$1 = state_22521;
var statearr_22534_22557 = state_22521__$1;
(statearr_22534_22557[(2)] = inst_22515);

(statearr_22534_22557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (10))){
var inst_22513 = (state_22521[(2)]);
var state_22521__$1 = state_22521;
var statearr_22535_22558 = state_22521__$1;
(statearr_22535_22558[(2)] = inst_22513);

(statearr_22535_22558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (8))){
var inst_22500 = (state_22521[(7)]);
var inst_22493 = (state_22521[(10)]);
var inst_22502 = (state_22521[(9)]);
var inst_22501 = (state_22521[(8)]);
var inst_22505 = (function (){var cs = inst_22493;
var vec__22498 = inst_22500;
var v = inst_22501;
var c = inst_22502;
return ((function (cs,vec__22498,v,c,inst_22500,inst_22493,inst_22502,inst_22501,state_val_22522,c__20451__auto___22549,out){
return (function (p1__22488_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22488_SHARP_);
});
;})(cs,vec__22498,v,c,inst_22500,inst_22493,inst_22502,inst_22501,state_val_22522,c__20451__auto___22549,out))
})();
var inst_22506 = cljs.core.filterv.call(null,inst_22505,inst_22493);
var inst_22493__$1 = inst_22506;
var state_22521__$1 = (function (){var statearr_22536 = state_22521;
(statearr_22536[(10)] = inst_22493__$1);

return statearr_22536;
})();
var statearr_22537_22559 = state_22521__$1;
(statearr_22537_22559[(2)] = null);

(statearr_22537_22559[(1)] = (2));


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
});})(c__20451__auto___22549,out))
;
return ((function (switch__20339__auto__,c__20451__auto___22549,out){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_22541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22541[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_22541[(1)] = (1));

return statearr_22541;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_22521){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_22521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e22542){if((e22542 instanceof Object)){
var ex__20343__auto__ = e22542;
var statearr_22543_22560 = state_22521;
(statearr_22543_22560[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22561 = state_22521;
state_22521 = G__22561;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_22521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_22521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___22549,out))
})();
var state__20453__auto__ = (function (){var statearr_22544 = f__20452__auto__.call(null);
(statearr_22544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___22549);

return statearr_22544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___22549,out))
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
var args22562 = [];
var len__19356__auto___22611 = arguments.length;
var i__19357__auto___22612 = (0);
while(true){
if((i__19357__auto___22612 < len__19356__auto___22611)){
args22562.push((arguments[i__19357__auto___22612]));

var G__22613 = (i__19357__auto___22612 + (1));
i__19357__auto___22612 = G__22613;
continue;
} else {
}
break;
}

var G__22564 = args22562.length;
switch (G__22564) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22562.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20451__auto___22615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___22615,out){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___22615,out){
return (function (state_22588){
var state_val_22589 = (state_22588[(1)]);
if((state_val_22589 === (7))){
var inst_22570 = (state_22588[(7)]);
var inst_22570__$1 = (state_22588[(2)]);
var inst_22571 = (inst_22570__$1 == null);
var inst_22572 = cljs.core.not.call(null,inst_22571);
var state_22588__$1 = (function (){var statearr_22590 = state_22588;
(statearr_22590[(7)] = inst_22570__$1);

return statearr_22590;
})();
if(inst_22572){
var statearr_22591_22616 = state_22588__$1;
(statearr_22591_22616[(1)] = (8));

} else {
var statearr_22592_22617 = state_22588__$1;
(statearr_22592_22617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (1))){
var inst_22565 = (0);
var state_22588__$1 = (function (){var statearr_22593 = state_22588;
(statearr_22593[(8)] = inst_22565);

return statearr_22593;
})();
var statearr_22594_22618 = state_22588__$1;
(statearr_22594_22618[(2)] = null);

(statearr_22594_22618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (4))){
var state_22588__$1 = state_22588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22588__$1,(7),ch);
} else {
if((state_val_22589 === (6))){
var inst_22583 = (state_22588[(2)]);
var state_22588__$1 = state_22588;
var statearr_22595_22619 = state_22588__$1;
(statearr_22595_22619[(2)] = inst_22583);

(statearr_22595_22619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (3))){
var inst_22585 = (state_22588[(2)]);
var inst_22586 = cljs.core.async.close_BANG_.call(null,out);
var state_22588__$1 = (function (){var statearr_22596 = state_22588;
(statearr_22596[(9)] = inst_22585);

return statearr_22596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22588__$1,inst_22586);
} else {
if((state_val_22589 === (2))){
var inst_22565 = (state_22588[(8)]);
var inst_22567 = (inst_22565 < n);
var state_22588__$1 = state_22588;
if(cljs.core.truth_(inst_22567)){
var statearr_22597_22620 = state_22588__$1;
(statearr_22597_22620[(1)] = (4));

} else {
var statearr_22598_22621 = state_22588__$1;
(statearr_22598_22621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (11))){
var inst_22565 = (state_22588[(8)]);
var inst_22575 = (state_22588[(2)]);
var inst_22576 = (inst_22565 + (1));
var inst_22565__$1 = inst_22576;
var state_22588__$1 = (function (){var statearr_22599 = state_22588;
(statearr_22599[(8)] = inst_22565__$1);

(statearr_22599[(10)] = inst_22575);

return statearr_22599;
})();
var statearr_22600_22622 = state_22588__$1;
(statearr_22600_22622[(2)] = null);

(statearr_22600_22622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (9))){
var state_22588__$1 = state_22588;
var statearr_22601_22623 = state_22588__$1;
(statearr_22601_22623[(2)] = null);

(statearr_22601_22623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (5))){
var state_22588__$1 = state_22588;
var statearr_22602_22624 = state_22588__$1;
(statearr_22602_22624[(2)] = null);

(statearr_22602_22624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (10))){
var inst_22580 = (state_22588[(2)]);
var state_22588__$1 = state_22588;
var statearr_22603_22625 = state_22588__$1;
(statearr_22603_22625[(2)] = inst_22580);

(statearr_22603_22625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (8))){
var inst_22570 = (state_22588[(7)]);
var state_22588__$1 = state_22588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22588__$1,(11),out,inst_22570);
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
});})(c__20451__auto___22615,out))
;
return ((function (switch__20339__auto__,c__20451__auto___22615,out){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_22607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22607[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_22607[(1)] = (1));

return statearr_22607;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_22588){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_22588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e22608){if((e22608 instanceof Object)){
var ex__20343__auto__ = e22608;
var statearr_22609_22626 = state_22588;
(statearr_22609_22626[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22627 = state_22588;
state_22588 = G__22627;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_22588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_22588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___22615,out))
})();
var state__20453__auto__ = (function (){var statearr_22610 = f__20452__auto__.call(null);
(statearr_22610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___22615);

return statearr_22610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___22615,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22635 = (function (map_LT_,f,ch,meta22636){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22636 = meta22636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22637,meta22636__$1){
var self__ = this;
var _22637__$1 = this;
return (new cljs.core.async.t_cljs$core$async22635(self__.map_LT_,self__.f,self__.ch,meta22636__$1));
});

cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22637){
var self__ = this;
var _22637__$1 = this;
return self__.meta22636;
});

cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22638 = (function (map_LT_,f,ch,meta22636,_,fn1,meta22639){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22636 = meta22636;
this._ = _;
this.fn1 = fn1;
this.meta22639 = meta22639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22640,meta22639__$1){
var self__ = this;
var _22640__$1 = this;
return (new cljs.core.async.t_cljs$core$async22638(self__.map_LT_,self__.f,self__.ch,self__.meta22636,self__._,self__.fn1,meta22639__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22640){
var self__ = this;
var _22640__$1 = this;
return self__.meta22639;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22638.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22628_SHARP_){
return f1.call(null,(((p1__22628_SHARP_ == null))?null:self__.f.call(null,p1__22628_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22638.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22636","meta22636",-1444442676,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22635","cljs.core.async/t_cljs$core$async22635",33587644,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22639","meta22639",-1921658083,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22638";

cljs.core.async.t_cljs$core$async22638.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async22638");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22638 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22638(map_LT___$1,f__$1,ch__$1,meta22636__$1,___$2,fn1__$1,meta22639){
return (new cljs.core.async.t_cljs$core$async22638(map_LT___$1,f__$1,ch__$1,meta22636__$1,___$2,fn1__$1,meta22639));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22638(self__.map_LT_,self__.f,self__.ch,self__.meta22636,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18286__auto__ = ret;
if(cljs.core.truth_(and__18286__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18286__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22636","meta22636",-1444442676,null)], null);
});

cljs.core.async.t_cljs$core$async22635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22635";

cljs.core.async.t_cljs$core$async22635.cljs$lang$ctorPrWriter = (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async22635");
});

cljs.core.async.__GT_t_cljs$core$async22635 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22635(map_LT___$1,f__$1,ch__$1,meta22636){
return (new cljs.core.async.t_cljs$core$async22635(map_LT___$1,f__$1,ch__$1,meta22636));
});

}

return (new cljs.core.async.t_cljs$core$async22635(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22644 = (function (map_GT_,f,ch,meta22645){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22645 = meta22645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22646,meta22645__$1){
var self__ = this;
var _22646__$1 = this;
return (new cljs.core.async.t_cljs$core$async22644(self__.map_GT_,self__.f,self__.ch,meta22645__$1));
});

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22646){
var self__ = this;
var _22646__$1 = this;
return self__.meta22645;
});

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22645","meta22645",31547275,null)], null);
});

cljs.core.async.t_cljs$core$async22644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22644";

cljs.core.async.t_cljs$core$async22644.cljs$lang$ctorPrWriter = (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async22644");
});

cljs.core.async.__GT_t_cljs$core$async22644 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22644(map_GT___$1,f__$1,ch__$1,meta22645){
return (new cljs.core.async.t_cljs$core$async22644(map_GT___$1,f__$1,ch__$1,meta22645));
});

}

return (new cljs.core.async.t_cljs$core$async22644(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22650 = (function (filter_GT_,p,ch,meta22651){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22651 = meta22651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22652,meta22651__$1){
var self__ = this;
var _22652__$1 = this;
return (new cljs.core.async.t_cljs$core$async22650(self__.filter_GT_,self__.p,self__.ch,meta22651__$1));
});

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22652){
var self__ = this;
var _22652__$1 = this;
return self__.meta22651;
});

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22651","meta22651",-171147654,null)], null);
});

cljs.core.async.t_cljs$core$async22650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22650";

cljs.core.async.t_cljs$core$async22650.cljs$lang$ctorPrWriter = (function (this__18896__auto__,writer__18897__auto__,opt__18898__auto__){
return cljs.core._write.call(null,writer__18897__auto__,"cljs.core.async/t_cljs$core$async22650");
});

cljs.core.async.__GT_t_cljs$core$async22650 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22650(filter_GT___$1,p__$1,ch__$1,meta22651){
return (new cljs.core.async.t_cljs$core$async22650(filter_GT___$1,p__$1,ch__$1,meta22651));
});

}

return (new cljs.core.async.t_cljs$core$async22650(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22653 = [];
var len__19356__auto___22697 = arguments.length;
var i__19357__auto___22698 = (0);
while(true){
if((i__19357__auto___22698 < len__19356__auto___22697)){
args22653.push((arguments[i__19357__auto___22698]));

var G__22699 = (i__19357__auto___22698 + (1));
i__19357__auto___22698 = G__22699;
continue;
} else {
}
break;
}

var G__22655 = args22653.length;
switch (G__22655) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22653.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20451__auto___22701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___22701,out){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___22701,out){
return (function (state_22676){
var state_val_22677 = (state_22676[(1)]);
if((state_val_22677 === (7))){
var inst_22672 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22678_22702 = state_22676__$1;
(statearr_22678_22702[(2)] = inst_22672);

(statearr_22678_22702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (1))){
var state_22676__$1 = state_22676;
var statearr_22679_22703 = state_22676__$1;
(statearr_22679_22703[(2)] = null);

(statearr_22679_22703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (4))){
var inst_22658 = (state_22676[(7)]);
var inst_22658__$1 = (state_22676[(2)]);
var inst_22659 = (inst_22658__$1 == null);
var state_22676__$1 = (function (){var statearr_22680 = state_22676;
(statearr_22680[(7)] = inst_22658__$1);

return statearr_22680;
})();
if(cljs.core.truth_(inst_22659)){
var statearr_22681_22704 = state_22676__$1;
(statearr_22681_22704[(1)] = (5));

} else {
var statearr_22682_22705 = state_22676__$1;
(statearr_22682_22705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (6))){
var inst_22658 = (state_22676[(7)]);
var inst_22663 = p.call(null,inst_22658);
var state_22676__$1 = state_22676;
if(cljs.core.truth_(inst_22663)){
var statearr_22683_22706 = state_22676__$1;
(statearr_22683_22706[(1)] = (8));

} else {
var statearr_22684_22707 = state_22676__$1;
(statearr_22684_22707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (3))){
var inst_22674 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22676__$1,inst_22674);
} else {
if((state_val_22677 === (2))){
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22676__$1,(4),ch);
} else {
if((state_val_22677 === (11))){
var inst_22666 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22685_22708 = state_22676__$1;
(statearr_22685_22708[(2)] = inst_22666);

(statearr_22685_22708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (9))){
var state_22676__$1 = state_22676;
var statearr_22686_22709 = state_22676__$1;
(statearr_22686_22709[(2)] = null);

(statearr_22686_22709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (5))){
var inst_22661 = cljs.core.async.close_BANG_.call(null,out);
var state_22676__$1 = state_22676;
var statearr_22687_22710 = state_22676__$1;
(statearr_22687_22710[(2)] = inst_22661);

(statearr_22687_22710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (10))){
var inst_22669 = (state_22676[(2)]);
var state_22676__$1 = (function (){var statearr_22688 = state_22676;
(statearr_22688[(8)] = inst_22669);

return statearr_22688;
})();
var statearr_22689_22711 = state_22676__$1;
(statearr_22689_22711[(2)] = null);

(statearr_22689_22711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (8))){
var inst_22658 = (state_22676[(7)]);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22676__$1,(11),out,inst_22658);
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
});})(c__20451__auto___22701,out))
;
return ((function (switch__20339__auto__,c__20451__auto___22701,out){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_22693 = [null,null,null,null,null,null,null,null,null];
(statearr_22693[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_22693[(1)] = (1));

return statearr_22693;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_22676){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_22676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e22694){if((e22694 instanceof Object)){
var ex__20343__auto__ = e22694;
var statearr_22695_22712 = state_22676;
(statearr_22695_22712[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22713 = state_22676;
state_22676 = G__22713;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_22676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_22676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___22701,out))
})();
var state__20453__auto__ = (function (){var statearr_22696 = f__20452__auto__.call(null);
(statearr_22696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___22701);

return statearr_22696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___22701,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22714 = [];
var len__19356__auto___22717 = arguments.length;
var i__19357__auto___22718 = (0);
while(true){
if((i__19357__auto___22718 < len__19356__auto___22717)){
args22714.push((arguments[i__19357__auto___22718]));

var G__22719 = (i__19357__auto___22718 + (1));
i__19357__auto___22718 = G__22719;
continue;
} else {
}
break;
}

var G__22716 = args22714.length;
switch (G__22716) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22714.length)].join('')));

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
var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__){
return (function (state_22886){
var state_val_22887 = (state_22886[(1)]);
if((state_val_22887 === (7))){
var inst_22882 = (state_22886[(2)]);
var state_22886__$1 = state_22886;
var statearr_22888_22929 = state_22886__$1;
(statearr_22888_22929[(2)] = inst_22882);

(statearr_22888_22929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (20))){
var inst_22852 = (state_22886[(7)]);
var inst_22863 = (state_22886[(2)]);
var inst_22864 = cljs.core.next.call(null,inst_22852);
var inst_22838 = inst_22864;
var inst_22839 = null;
var inst_22840 = (0);
var inst_22841 = (0);
var state_22886__$1 = (function (){var statearr_22889 = state_22886;
(statearr_22889[(8)] = inst_22838);

(statearr_22889[(9)] = inst_22840);

(statearr_22889[(10)] = inst_22839);

(statearr_22889[(11)] = inst_22841);

(statearr_22889[(12)] = inst_22863);

return statearr_22889;
})();
var statearr_22890_22930 = state_22886__$1;
(statearr_22890_22930[(2)] = null);

(statearr_22890_22930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (1))){
var state_22886__$1 = state_22886;
var statearr_22891_22931 = state_22886__$1;
(statearr_22891_22931[(2)] = null);

(statearr_22891_22931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (4))){
var inst_22827 = (state_22886[(13)]);
var inst_22827__$1 = (state_22886[(2)]);
var inst_22828 = (inst_22827__$1 == null);
var state_22886__$1 = (function (){var statearr_22892 = state_22886;
(statearr_22892[(13)] = inst_22827__$1);

return statearr_22892;
})();
if(cljs.core.truth_(inst_22828)){
var statearr_22893_22932 = state_22886__$1;
(statearr_22893_22932[(1)] = (5));

} else {
var statearr_22894_22933 = state_22886__$1;
(statearr_22894_22933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (15))){
var state_22886__$1 = state_22886;
var statearr_22898_22934 = state_22886__$1;
(statearr_22898_22934[(2)] = null);

(statearr_22898_22934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (21))){
var state_22886__$1 = state_22886;
var statearr_22899_22935 = state_22886__$1;
(statearr_22899_22935[(2)] = null);

(statearr_22899_22935[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (13))){
var inst_22838 = (state_22886[(8)]);
var inst_22840 = (state_22886[(9)]);
var inst_22839 = (state_22886[(10)]);
var inst_22841 = (state_22886[(11)]);
var inst_22848 = (state_22886[(2)]);
var inst_22849 = (inst_22841 + (1));
var tmp22895 = inst_22838;
var tmp22896 = inst_22840;
var tmp22897 = inst_22839;
var inst_22838__$1 = tmp22895;
var inst_22839__$1 = tmp22897;
var inst_22840__$1 = tmp22896;
var inst_22841__$1 = inst_22849;
var state_22886__$1 = (function (){var statearr_22900 = state_22886;
(statearr_22900[(8)] = inst_22838__$1);

(statearr_22900[(9)] = inst_22840__$1);

(statearr_22900[(14)] = inst_22848);

(statearr_22900[(10)] = inst_22839__$1);

(statearr_22900[(11)] = inst_22841__$1);

return statearr_22900;
})();
var statearr_22901_22936 = state_22886__$1;
(statearr_22901_22936[(2)] = null);

(statearr_22901_22936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (22))){
var state_22886__$1 = state_22886;
var statearr_22902_22937 = state_22886__$1;
(statearr_22902_22937[(2)] = null);

(statearr_22902_22937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (6))){
var inst_22827 = (state_22886[(13)]);
var inst_22836 = f.call(null,inst_22827);
var inst_22837 = cljs.core.seq.call(null,inst_22836);
var inst_22838 = inst_22837;
var inst_22839 = null;
var inst_22840 = (0);
var inst_22841 = (0);
var state_22886__$1 = (function (){var statearr_22903 = state_22886;
(statearr_22903[(8)] = inst_22838);

(statearr_22903[(9)] = inst_22840);

(statearr_22903[(10)] = inst_22839);

(statearr_22903[(11)] = inst_22841);

return statearr_22903;
})();
var statearr_22904_22938 = state_22886__$1;
(statearr_22904_22938[(2)] = null);

(statearr_22904_22938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (17))){
var inst_22852 = (state_22886[(7)]);
var inst_22856 = cljs.core.chunk_first.call(null,inst_22852);
var inst_22857 = cljs.core.chunk_rest.call(null,inst_22852);
var inst_22858 = cljs.core.count.call(null,inst_22856);
var inst_22838 = inst_22857;
var inst_22839 = inst_22856;
var inst_22840 = inst_22858;
var inst_22841 = (0);
var state_22886__$1 = (function (){var statearr_22905 = state_22886;
(statearr_22905[(8)] = inst_22838);

(statearr_22905[(9)] = inst_22840);

(statearr_22905[(10)] = inst_22839);

(statearr_22905[(11)] = inst_22841);

return statearr_22905;
})();
var statearr_22906_22939 = state_22886__$1;
(statearr_22906_22939[(2)] = null);

(statearr_22906_22939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (3))){
var inst_22884 = (state_22886[(2)]);
var state_22886__$1 = state_22886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22886__$1,inst_22884);
} else {
if((state_val_22887 === (12))){
var inst_22872 = (state_22886[(2)]);
var state_22886__$1 = state_22886;
var statearr_22907_22940 = state_22886__$1;
(statearr_22907_22940[(2)] = inst_22872);

(statearr_22907_22940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (2))){
var state_22886__$1 = state_22886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22886__$1,(4),in$);
} else {
if((state_val_22887 === (23))){
var inst_22880 = (state_22886[(2)]);
var state_22886__$1 = state_22886;
var statearr_22908_22941 = state_22886__$1;
(statearr_22908_22941[(2)] = inst_22880);

(statearr_22908_22941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (19))){
var inst_22867 = (state_22886[(2)]);
var state_22886__$1 = state_22886;
var statearr_22909_22942 = state_22886__$1;
(statearr_22909_22942[(2)] = inst_22867);

(statearr_22909_22942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (11))){
var inst_22838 = (state_22886[(8)]);
var inst_22852 = (state_22886[(7)]);
var inst_22852__$1 = cljs.core.seq.call(null,inst_22838);
var state_22886__$1 = (function (){var statearr_22910 = state_22886;
(statearr_22910[(7)] = inst_22852__$1);

return statearr_22910;
})();
if(inst_22852__$1){
var statearr_22911_22943 = state_22886__$1;
(statearr_22911_22943[(1)] = (14));

} else {
var statearr_22912_22944 = state_22886__$1;
(statearr_22912_22944[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (9))){
var inst_22874 = (state_22886[(2)]);
var inst_22875 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22886__$1 = (function (){var statearr_22913 = state_22886;
(statearr_22913[(15)] = inst_22874);

return statearr_22913;
})();
if(cljs.core.truth_(inst_22875)){
var statearr_22914_22945 = state_22886__$1;
(statearr_22914_22945[(1)] = (21));

} else {
var statearr_22915_22946 = state_22886__$1;
(statearr_22915_22946[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (5))){
var inst_22830 = cljs.core.async.close_BANG_.call(null,out);
var state_22886__$1 = state_22886;
var statearr_22916_22947 = state_22886__$1;
(statearr_22916_22947[(2)] = inst_22830);

(statearr_22916_22947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (14))){
var inst_22852 = (state_22886[(7)]);
var inst_22854 = cljs.core.chunked_seq_QMARK_.call(null,inst_22852);
var state_22886__$1 = state_22886;
if(inst_22854){
var statearr_22917_22948 = state_22886__$1;
(statearr_22917_22948[(1)] = (17));

} else {
var statearr_22918_22949 = state_22886__$1;
(statearr_22918_22949[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (16))){
var inst_22870 = (state_22886[(2)]);
var state_22886__$1 = state_22886;
var statearr_22919_22950 = state_22886__$1;
(statearr_22919_22950[(2)] = inst_22870);

(statearr_22919_22950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22887 === (10))){
var inst_22839 = (state_22886[(10)]);
var inst_22841 = (state_22886[(11)]);
var inst_22846 = cljs.core._nth.call(null,inst_22839,inst_22841);
var state_22886__$1 = state_22886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22886__$1,(13),out,inst_22846);
} else {
if((state_val_22887 === (18))){
var inst_22852 = (state_22886[(7)]);
var inst_22861 = cljs.core.first.call(null,inst_22852);
var state_22886__$1 = state_22886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22886__$1,(20),out,inst_22861);
} else {
if((state_val_22887 === (8))){
var inst_22840 = (state_22886[(9)]);
var inst_22841 = (state_22886[(11)]);
var inst_22843 = (inst_22841 < inst_22840);
var inst_22844 = inst_22843;
var state_22886__$1 = state_22886;
if(cljs.core.truth_(inst_22844)){
var statearr_22920_22951 = state_22886__$1;
(statearr_22920_22951[(1)] = (10));

} else {
var statearr_22921_22952 = state_22886__$1;
(statearr_22921_22952[(1)] = (11));

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
});})(c__20451__auto__))
;
return ((function (switch__20339__auto__,c__20451__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20340__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20340__auto____0 = (function (){
var statearr_22925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22925[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20340__auto__);

(statearr_22925[(1)] = (1));

return statearr_22925;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20340__auto____1 = (function (state_22886){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_22886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e22926){if((e22926 instanceof Object)){
var ex__20343__auto__ = e22926;
var statearr_22927_22953 = state_22886;
(statearr_22927_22953[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22954 = state_22886;
state_22886 = G__22954;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20340__auto__ = function(state_22886){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20340__auto____1.call(this,state_22886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20340__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20340__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__))
})();
var state__20453__auto__ = (function (){var statearr_22928 = f__20452__auto__.call(null);
(statearr_22928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_22928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__))
);

return c__20451__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22955 = [];
var len__19356__auto___22958 = arguments.length;
var i__19357__auto___22959 = (0);
while(true){
if((i__19357__auto___22959 < len__19356__auto___22958)){
args22955.push((arguments[i__19357__auto___22959]));

var G__22960 = (i__19357__auto___22959 + (1));
i__19357__auto___22959 = G__22960;
continue;
} else {
}
break;
}

var G__22957 = args22955.length;
switch (G__22957) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22955.length)].join('')));

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
var args22962 = [];
var len__19356__auto___22965 = arguments.length;
var i__19357__auto___22966 = (0);
while(true){
if((i__19357__auto___22966 < len__19356__auto___22965)){
args22962.push((arguments[i__19357__auto___22966]));

var G__22967 = (i__19357__auto___22966 + (1));
i__19357__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var G__22964 = args22962.length;
switch (G__22964) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22962.length)].join('')));

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
var args22969 = [];
var len__19356__auto___23020 = arguments.length;
var i__19357__auto___23021 = (0);
while(true){
if((i__19357__auto___23021 < len__19356__auto___23020)){
args22969.push((arguments[i__19357__auto___23021]));

var G__23022 = (i__19357__auto___23021 + (1));
i__19357__auto___23021 = G__23022;
continue;
} else {
}
break;
}

var G__22971 = args22969.length;
switch (G__22971) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22969.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20451__auto___23024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___23024,out){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___23024,out){
return (function (state_22995){
var state_val_22996 = (state_22995[(1)]);
if((state_val_22996 === (7))){
var inst_22990 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_22997_23025 = state_22995__$1;
(statearr_22997_23025[(2)] = inst_22990);

(statearr_22997_23025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (1))){
var inst_22972 = null;
var state_22995__$1 = (function (){var statearr_22998 = state_22995;
(statearr_22998[(7)] = inst_22972);

return statearr_22998;
})();
var statearr_22999_23026 = state_22995__$1;
(statearr_22999_23026[(2)] = null);

(statearr_22999_23026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (4))){
var inst_22975 = (state_22995[(8)]);
var inst_22975__$1 = (state_22995[(2)]);
var inst_22976 = (inst_22975__$1 == null);
var inst_22977 = cljs.core.not.call(null,inst_22976);
var state_22995__$1 = (function (){var statearr_23000 = state_22995;
(statearr_23000[(8)] = inst_22975__$1);

return statearr_23000;
})();
if(inst_22977){
var statearr_23001_23027 = state_22995__$1;
(statearr_23001_23027[(1)] = (5));

} else {
var statearr_23002_23028 = state_22995__$1;
(statearr_23002_23028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (6))){
var state_22995__$1 = state_22995;
var statearr_23003_23029 = state_22995__$1;
(statearr_23003_23029[(2)] = null);

(statearr_23003_23029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (3))){
var inst_22992 = (state_22995[(2)]);
var inst_22993 = cljs.core.async.close_BANG_.call(null,out);
var state_22995__$1 = (function (){var statearr_23004 = state_22995;
(statearr_23004[(9)] = inst_22992);

return statearr_23004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22995__$1,inst_22993);
} else {
if((state_val_22996 === (2))){
var state_22995__$1 = state_22995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22995__$1,(4),ch);
} else {
if((state_val_22996 === (11))){
var inst_22975 = (state_22995[(8)]);
var inst_22984 = (state_22995[(2)]);
var inst_22972 = inst_22975;
var state_22995__$1 = (function (){var statearr_23005 = state_22995;
(statearr_23005[(7)] = inst_22972);

(statearr_23005[(10)] = inst_22984);

return statearr_23005;
})();
var statearr_23006_23030 = state_22995__$1;
(statearr_23006_23030[(2)] = null);

(statearr_23006_23030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (9))){
var inst_22975 = (state_22995[(8)]);
var state_22995__$1 = state_22995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22995__$1,(11),out,inst_22975);
} else {
if((state_val_22996 === (5))){
var inst_22972 = (state_22995[(7)]);
var inst_22975 = (state_22995[(8)]);
var inst_22979 = cljs.core._EQ_.call(null,inst_22975,inst_22972);
var state_22995__$1 = state_22995;
if(inst_22979){
var statearr_23008_23031 = state_22995__$1;
(statearr_23008_23031[(1)] = (8));

} else {
var statearr_23009_23032 = state_22995__$1;
(statearr_23009_23032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (10))){
var inst_22987 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_23010_23033 = state_22995__$1;
(statearr_23010_23033[(2)] = inst_22987);

(statearr_23010_23033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (8))){
var inst_22972 = (state_22995[(7)]);
var tmp23007 = inst_22972;
var inst_22972__$1 = tmp23007;
var state_22995__$1 = (function (){var statearr_23011 = state_22995;
(statearr_23011[(7)] = inst_22972__$1);

return statearr_23011;
})();
var statearr_23012_23034 = state_22995__$1;
(statearr_23012_23034[(2)] = null);

(statearr_23012_23034[(1)] = (2));


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
});})(c__20451__auto___23024,out))
;
return ((function (switch__20339__auto__,c__20451__auto___23024,out){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_23016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23016[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_23016[(1)] = (1));

return statearr_23016;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_22995){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_22995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e23017){if((e23017 instanceof Object)){
var ex__20343__auto__ = e23017;
var statearr_23018_23035 = state_22995;
(statearr_23018_23035[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23036 = state_22995;
state_22995 = G__23036;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_22995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_22995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___23024,out))
})();
var state__20453__auto__ = (function (){var statearr_23019 = f__20452__auto__.call(null);
(statearr_23019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___23024);

return statearr_23019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___23024,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23037 = [];
var len__19356__auto___23107 = arguments.length;
var i__19357__auto___23108 = (0);
while(true){
if((i__19357__auto___23108 < len__19356__auto___23107)){
args23037.push((arguments[i__19357__auto___23108]));

var G__23109 = (i__19357__auto___23108 + (1));
i__19357__auto___23108 = G__23109;
continue;
} else {
}
break;
}

var G__23039 = args23037.length;
switch (G__23039) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23037.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20451__auto___23111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___23111,out){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___23111,out){
return (function (state_23077){
var state_val_23078 = (state_23077[(1)]);
if((state_val_23078 === (7))){
var inst_23073 = (state_23077[(2)]);
var state_23077__$1 = state_23077;
var statearr_23079_23112 = state_23077__$1;
(statearr_23079_23112[(2)] = inst_23073);

(statearr_23079_23112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (1))){
var inst_23040 = (new Array(n));
var inst_23041 = inst_23040;
var inst_23042 = (0);
var state_23077__$1 = (function (){var statearr_23080 = state_23077;
(statearr_23080[(7)] = inst_23041);

(statearr_23080[(8)] = inst_23042);

return statearr_23080;
})();
var statearr_23081_23113 = state_23077__$1;
(statearr_23081_23113[(2)] = null);

(statearr_23081_23113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (4))){
var inst_23045 = (state_23077[(9)]);
var inst_23045__$1 = (state_23077[(2)]);
var inst_23046 = (inst_23045__$1 == null);
var inst_23047 = cljs.core.not.call(null,inst_23046);
var state_23077__$1 = (function (){var statearr_23082 = state_23077;
(statearr_23082[(9)] = inst_23045__$1);

return statearr_23082;
})();
if(inst_23047){
var statearr_23083_23114 = state_23077__$1;
(statearr_23083_23114[(1)] = (5));

} else {
var statearr_23084_23115 = state_23077__$1;
(statearr_23084_23115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (15))){
var inst_23067 = (state_23077[(2)]);
var state_23077__$1 = state_23077;
var statearr_23085_23116 = state_23077__$1;
(statearr_23085_23116[(2)] = inst_23067);

(statearr_23085_23116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (13))){
var state_23077__$1 = state_23077;
var statearr_23086_23117 = state_23077__$1;
(statearr_23086_23117[(2)] = null);

(statearr_23086_23117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (6))){
var inst_23042 = (state_23077[(8)]);
var inst_23063 = (inst_23042 > (0));
var state_23077__$1 = state_23077;
if(cljs.core.truth_(inst_23063)){
var statearr_23087_23118 = state_23077__$1;
(statearr_23087_23118[(1)] = (12));

} else {
var statearr_23088_23119 = state_23077__$1;
(statearr_23088_23119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (3))){
var inst_23075 = (state_23077[(2)]);
var state_23077__$1 = state_23077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23077__$1,inst_23075);
} else {
if((state_val_23078 === (12))){
var inst_23041 = (state_23077[(7)]);
var inst_23065 = cljs.core.vec.call(null,inst_23041);
var state_23077__$1 = state_23077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23077__$1,(15),out,inst_23065);
} else {
if((state_val_23078 === (2))){
var state_23077__$1 = state_23077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23077__$1,(4),ch);
} else {
if((state_val_23078 === (11))){
var inst_23057 = (state_23077[(2)]);
var inst_23058 = (new Array(n));
var inst_23041 = inst_23058;
var inst_23042 = (0);
var state_23077__$1 = (function (){var statearr_23089 = state_23077;
(statearr_23089[(10)] = inst_23057);

(statearr_23089[(7)] = inst_23041);

(statearr_23089[(8)] = inst_23042);

return statearr_23089;
})();
var statearr_23090_23120 = state_23077__$1;
(statearr_23090_23120[(2)] = null);

(statearr_23090_23120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (9))){
var inst_23041 = (state_23077[(7)]);
var inst_23055 = cljs.core.vec.call(null,inst_23041);
var state_23077__$1 = state_23077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23077__$1,(11),out,inst_23055);
} else {
if((state_val_23078 === (5))){
var inst_23050 = (state_23077[(11)]);
var inst_23041 = (state_23077[(7)]);
var inst_23045 = (state_23077[(9)]);
var inst_23042 = (state_23077[(8)]);
var inst_23049 = (inst_23041[inst_23042] = inst_23045);
var inst_23050__$1 = (inst_23042 + (1));
var inst_23051 = (inst_23050__$1 < n);
var state_23077__$1 = (function (){var statearr_23091 = state_23077;
(statearr_23091[(11)] = inst_23050__$1);

(statearr_23091[(12)] = inst_23049);

return statearr_23091;
})();
if(cljs.core.truth_(inst_23051)){
var statearr_23092_23121 = state_23077__$1;
(statearr_23092_23121[(1)] = (8));

} else {
var statearr_23093_23122 = state_23077__$1;
(statearr_23093_23122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (14))){
var inst_23070 = (state_23077[(2)]);
var inst_23071 = cljs.core.async.close_BANG_.call(null,out);
var state_23077__$1 = (function (){var statearr_23095 = state_23077;
(statearr_23095[(13)] = inst_23070);

return statearr_23095;
})();
var statearr_23096_23123 = state_23077__$1;
(statearr_23096_23123[(2)] = inst_23071);

(statearr_23096_23123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (10))){
var inst_23061 = (state_23077[(2)]);
var state_23077__$1 = state_23077;
var statearr_23097_23124 = state_23077__$1;
(statearr_23097_23124[(2)] = inst_23061);

(statearr_23097_23124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23078 === (8))){
var inst_23050 = (state_23077[(11)]);
var inst_23041 = (state_23077[(7)]);
var tmp23094 = inst_23041;
var inst_23041__$1 = tmp23094;
var inst_23042 = inst_23050;
var state_23077__$1 = (function (){var statearr_23098 = state_23077;
(statearr_23098[(7)] = inst_23041__$1);

(statearr_23098[(8)] = inst_23042);

return statearr_23098;
})();
var statearr_23099_23125 = state_23077__$1;
(statearr_23099_23125[(2)] = null);

(statearr_23099_23125[(1)] = (2));


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
});})(c__20451__auto___23111,out))
;
return ((function (switch__20339__auto__,c__20451__auto___23111,out){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_23103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23103[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_23103[(1)] = (1));

return statearr_23103;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_23077){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_23077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e23104){if((e23104 instanceof Object)){
var ex__20343__auto__ = e23104;
var statearr_23105_23126 = state_23077;
(statearr_23105_23126[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23127 = state_23077;
state_23077 = G__23127;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_23077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_23077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___23111,out))
})();
var state__20453__auto__ = (function (){var statearr_23106 = f__20452__auto__.call(null);
(statearr_23106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___23111);

return statearr_23106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___23111,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23128 = [];
var len__19356__auto___23202 = arguments.length;
var i__19357__auto___23203 = (0);
while(true){
if((i__19357__auto___23203 < len__19356__auto___23202)){
args23128.push((arguments[i__19357__auto___23203]));

var G__23204 = (i__19357__auto___23203 + (1));
i__19357__auto___23203 = G__23204;
continue;
} else {
}
break;
}

var G__23130 = args23128.length;
switch (G__23130) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23128.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20451__auto___23206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___23206,out){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___23206,out){
return (function (state_23172){
var state_val_23173 = (state_23172[(1)]);
if((state_val_23173 === (7))){
var inst_23168 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
var statearr_23174_23207 = state_23172__$1;
(statearr_23174_23207[(2)] = inst_23168);

(statearr_23174_23207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (1))){
var inst_23131 = [];
var inst_23132 = inst_23131;
var inst_23133 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23172__$1 = (function (){var statearr_23175 = state_23172;
(statearr_23175[(7)] = inst_23133);

(statearr_23175[(8)] = inst_23132);

return statearr_23175;
})();
var statearr_23176_23208 = state_23172__$1;
(statearr_23176_23208[(2)] = null);

(statearr_23176_23208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (4))){
var inst_23136 = (state_23172[(9)]);
var inst_23136__$1 = (state_23172[(2)]);
var inst_23137 = (inst_23136__$1 == null);
var inst_23138 = cljs.core.not.call(null,inst_23137);
var state_23172__$1 = (function (){var statearr_23177 = state_23172;
(statearr_23177[(9)] = inst_23136__$1);

return statearr_23177;
})();
if(inst_23138){
var statearr_23178_23209 = state_23172__$1;
(statearr_23178_23209[(1)] = (5));

} else {
var statearr_23179_23210 = state_23172__$1;
(statearr_23179_23210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (15))){
var inst_23162 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
var statearr_23180_23211 = state_23172__$1;
(statearr_23180_23211[(2)] = inst_23162);

(statearr_23180_23211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (13))){
var state_23172__$1 = state_23172;
var statearr_23181_23212 = state_23172__$1;
(statearr_23181_23212[(2)] = null);

(statearr_23181_23212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (6))){
var inst_23132 = (state_23172[(8)]);
var inst_23157 = inst_23132.length;
var inst_23158 = (inst_23157 > (0));
var state_23172__$1 = state_23172;
if(cljs.core.truth_(inst_23158)){
var statearr_23182_23213 = state_23172__$1;
(statearr_23182_23213[(1)] = (12));

} else {
var statearr_23183_23214 = state_23172__$1;
(statearr_23183_23214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (3))){
var inst_23170 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23172__$1,inst_23170);
} else {
if((state_val_23173 === (12))){
var inst_23132 = (state_23172[(8)]);
var inst_23160 = cljs.core.vec.call(null,inst_23132);
var state_23172__$1 = state_23172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23172__$1,(15),out,inst_23160);
} else {
if((state_val_23173 === (2))){
var state_23172__$1 = state_23172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23172__$1,(4),ch);
} else {
if((state_val_23173 === (11))){
var inst_23136 = (state_23172[(9)]);
var inst_23140 = (state_23172[(10)]);
var inst_23150 = (state_23172[(2)]);
var inst_23151 = [];
var inst_23152 = inst_23151.push(inst_23136);
var inst_23132 = inst_23151;
var inst_23133 = inst_23140;
var state_23172__$1 = (function (){var statearr_23184 = state_23172;
(statearr_23184[(11)] = inst_23152);

(statearr_23184[(7)] = inst_23133);

(statearr_23184[(12)] = inst_23150);

(statearr_23184[(8)] = inst_23132);

return statearr_23184;
})();
var statearr_23185_23215 = state_23172__$1;
(statearr_23185_23215[(2)] = null);

(statearr_23185_23215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (9))){
var inst_23132 = (state_23172[(8)]);
var inst_23148 = cljs.core.vec.call(null,inst_23132);
var state_23172__$1 = state_23172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23172__$1,(11),out,inst_23148);
} else {
if((state_val_23173 === (5))){
var inst_23136 = (state_23172[(9)]);
var inst_23133 = (state_23172[(7)]);
var inst_23140 = (state_23172[(10)]);
var inst_23140__$1 = f.call(null,inst_23136);
var inst_23141 = cljs.core._EQ_.call(null,inst_23140__$1,inst_23133);
var inst_23142 = cljs.core.keyword_identical_QMARK_.call(null,inst_23133,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23143 = (inst_23141) || (inst_23142);
var state_23172__$1 = (function (){var statearr_23186 = state_23172;
(statearr_23186[(10)] = inst_23140__$1);

return statearr_23186;
})();
if(cljs.core.truth_(inst_23143)){
var statearr_23187_23216 = state_23172__$1;
(statearr_23187_23216[(1)] = (8));

} else {
var statearr_23188_23217 = state_23172__$1;
(statearr_23188_23217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (14))){
var inst_23165 = (state_23172[(2)]);
var inst_23166 = cljs.core.async.close_BANG_.call(null,out);
var state_23172__$1 = (function (){var statearr_23190 = state_23172;
(statearr_23190[(13)] = inst_23165);

return statearr_23190;
})();
var statearr_23191_23218 = state_23172__$1;
(statearr_23191_23218[(2)] = inst_23166);

(statearr_23191_23218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (10))){
var inst_23155 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
var statearr_23192_23219 = state_23172__$1;
(statearr_23192_23219[(2)] = inst_23155);

(statearr_23192_23219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (8))){
var inst_23136 = (state_23172[(9)]);
var inst_23140 = (state_23172[(10)]);
var inst_23132 = (state_23172[(8)]);
var inst_23145 = inst_23132.push(inst_23136);
var tmp23189 = inst_23132;
var inst_23132__$1 = tmp23189;
var inst_23133 = inst_23140;
var state_23172__$1 = (function (){var statearr_23193 = state_23172;
(statearr_23193[(14)] = inst_23145);

(statearr_23193[(7)] = inst_23133);

(statearr_23193[(8)] = inst_23132__$1);

return statearr_23193;
})();
var statearr_23194_23220 = state_23172__$1;
(statearr_23194_23220[(2)] = null);

(statearr_23194_23220[(1)] = (2));


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
});})(c__20451__auto___23206,out))
;
return ((function (switch__20339__auto__,c__20451__auto___23206,out){
return (function() {
var cljs$core$async$state_machine__20340__auto__ = null;
var cljs$core$async$state_machine__20340__auto____0 = (function (){
var statearr_23198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23198[(0)] = cljs$core$async$state_machine__20340__auto__);

(statearr_23198[(1)] = (1));

return statearr_23198;
});
var cljs$core$async$state_machine__20340__auto____1 = (function (state_23172){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_23172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e23199){if((e23199 instanceof Object)){
var ex__20343__auto__ = e23199;
var statearr_23200_23221 = state_23172;
(statearr_23200_23221[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23222 = state_23172;
state_23172 = G__23222;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
cljs$core$async$state_machine__20340__auto__ = function(state_23172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20340__auto____1.call(this,state_23172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20340__auto____0;
cljs$core$async$state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20340__auto____1;
return cljs$core$async$state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___23206,out))
})();
var state__20453__auto__ = (function (){var statearr_23201 = f__20452__auto__.call(null);
(statearr_23201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___23206);

return statearr_23201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___23206,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map