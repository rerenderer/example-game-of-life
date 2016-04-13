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
var args12600 = [];
var len__7214__auto___12606 = arguments.length;
var i__7215__auto___12607 = (0);
while(true){
if((i__7215__auto___12607 < len__7214__auto___12606)){
args12600.push((arguments[i__7215__auto___12607]));

var G__12608 = (i__7215__auto___12607 + (1));
i__7215__auto___12607 = G__12608;
continue;
} else {
}
break;
}

var G__12602 = args12600.length;
switch (G__12602) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12600.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12603 = (function (f,blockable,meta12604){
this.f = f;
this.blockable = blockable;
this.meta12604 = meta12604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12605,meta12604__$1){
var self__ = this;
var _12605__$1 = this;
return (new cljs.core.async.t_cljs$core$async12603(self__.f,self__.blockable,meta12604__$1));
});

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12605){
var self__ = this;
var _12605__$1 = this;
return self__.meta12604;
});

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12604","meta12604",462086862,null)], null);
});

cljs.core.async.t_cljs$core$async12603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12603";

cljs.core.async.t_cljs$core$async12603.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12603");
});

cljs.core.async.__GT_t_cljs$core$async12603 = (function cljs$core$async$__GT_t_cljs$core$async12603(f__$1,blockable__$1,meta12604){
return (new cljs.core.async.t_cljs$core$async12603(f__$1,blockable__$1,meta12604));
});

}

return (new cljs.core.async.t_cljs$core$async12603(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args12612 = [];
var len__7214__auto___12615 = arguments.length;
var i__7215__auto___12616 = (0);
while(true){
if((i__7215__auto___12616 < len__7214__auto___12615)){
args12612.push((arguments[i__7215__auto___12616]));

var G__12617 = (i__7215__auto___12616 + (1));
i__7215__auto___12616 = G__12617;
continue;
} else {
}
break;
}

var G__12614 = args12612.length;
switch (G__12614) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12612.length)].join('')));

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
var args12619 = [];
var len__7214__auto___12622 = arguments.length;
var i__7215__auto___12623 = (0);
while(true){
if((i__7215__auto___12623 < len__7214__auto___12622)){
args12619.push((arguments[i__7215__auto___12623]));

var G__12624 = (i__7215__auto___12623 + (1));
i__7215__auto___12623 = G__12624;
continue;
} else {
}
break;
}

var G__12621 = args12619.length;
switch (G__12621) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12619.length)].join('')));

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
var args12626 = [];
var len__7214__auto___12629 = arguments.length;
var i__7215__auto___12630 = (0);
while(true){
if((i__7215__auto___12630 < len__7214__auto___12629)){
args12626.push((arguments[i__7215__auto___12630]));

var G__12631 = (i__7215__auto___12630 + (1));
i__7215__auto___12630 = G__12631;
continue;
} else {
}
break;
}

var G__12628 = args12626.length;
switch (G__12628) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12626.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12633 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12633);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12633,ret){
return (function (){
return fn1.call(null,val_12633);
});})(val_12633,ret))
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
var args12634 = [];
var len__7214__auto___12637 = arguments.length;
var i__7215__auto___12638 = (0);
while(true){
if((i__7215__auto___12638 < len__7214__auto___12637)){
args12634.push((arguments[i__7215__auto___12638]));

var G__12639 = (i__7215__auto___12638 + (1));
i__7215__auto___12638 = G__12639;
continue;
} else {
}
break;
}

var G__12636 = args12634.length;
switch (G__12636) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12634.length)].join('')));

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
var n__7059__auto___12641 = n;
var x_12642 = (0);
while(true){
if((x_12642 < n__7059__auto___12641)){
(a[x_12642] = (0));

var G__12643 = (x_12642 + (1));
x_12642 = G__12643;
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

var G__12644 = (i + (1));
i = G__12644;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12648 = (function (alt_flag,flag,meta12649){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12649 = meta12649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12650,meta12649__$1){
var self__ = this;
var _12650__$1 = this;
return (new cljs.core.async.t_cljs$core$async12648(self__.alt_flag,self__.flag,meta12649__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12650){
var self__ = this;
var _12650__$1 = this;
return self__.meta12649;
});})(flag))
;

cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12648.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12649","meta12649",-1941992177,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12648";

cljs.core.async.t_cljs$core$async12648.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12648");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12648 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12648(alt_flag__$1,flag__$1,meta12649){
return (new cljs.core.async.t_cljs$core$async12648(alt_flag__$1,flag__$1,meta12649));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12648(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12654 = (function (alt_handler,flag,cb,meta12655){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12655 = meta12655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12656,meta12655__$1){
var self__ = this;
var _12656__$1 = this;
return (new cljs.core.async.t_cljs$core$async12654(self__.alt_handler,self__.flag,self__.cb,meta12655__$1));
});

cljs.core.async.t_cljs$core$async12654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12656){
var self__ = this;
var _12656__$1 = this;
return self__.meta12655;
});

cljs.core.async.t_cljs$core$async12654.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12655","meta12655",366517330,null)], null);
});

cljs.core.async.t_cljs$core$async12654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12654";

cljs.core.async.t_cljs$core$async12654.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async12654");
});

cljs.core.async.__GT_t_cljs$core$async12654 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12654(alt_handler__$1,flag__$1,cb__$1,meta12655){
return (new cljs.core.async.t_cljs$core$async12654(alt_handler__$1,flag__$1,cb__$1,meta12655));
});

}

return (new cljs.core.async.t_cljs$core$async12654(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12657_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12657_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12658_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12658_SHARP_,port], null));
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
var G__12659 = (i + (1));
i = G__12659;
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
var len__7214__auto___12665 = arguments.length;
var i__7215__auto___12666 = (0);
while(true){
if((i__7215__auto___12666 < len__7214__auto___12665)){
args__7221__auto__.push((arguments[i__7215__auto___12666]));

var G__12667 = (i__7215__auto___12666 + (1));
i__7215__auto___12666 = G__12667;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12662){
var map__12663 = p__12662;
var map__12663__$1 = ((((!((map__12663 == null)))?((((map__12663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12663):map__12663);
var opts = map__12663__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12660){
var G__12661 = cljs.core.first.call(null,seq12660);
var seq12660__$1 = cljs.core.next.call(null,seq12660);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12661,seq12660__$1);
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
var args12668 = [];
var len__7214__auto___12718 = arguments.length;
var i__7215__auto___12719 = (0);
while(true){
if((i__7215__auto___12719 < len__7214__auto___12718)){
args12668.push((arguments[i__7215__auto___12719]));

var G__12720 = (i__7215__auto___12719 + (1));
i__7215__auto___12719 = G__12720;
continue;
} else {
}
break;
}

var G__12670 = args12668.length;
switch (G__12670) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12668.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12555__auto___12722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___12722){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___12722){
return (function (state_12694){
var state_val_12695 = (state_12694[(1)]);
if((state_val_12695 === (7))){
var inst_12690 = (state_12694[(2)]);
var state_12694__$1 = state_12694;
var statearr_12696_12723 = state_12694__$1;
(statearr_12696_12723[(2)] = inst_12690);

(statearr_12696_12723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (1))){
var state_12694__$1 = state_12694;
var statearr_12697_12724 = state_12694__$1;
(statearr_12697_12724[(2)] = null);

(statearr_12697_12724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (4))){
var inst_12673 = (state_12694[(7)]);
var inst_12673__$1 = (state_12694[(2)]);
var inst_12674 = (inst_12673__$1 == null);
var state_12694__$1 = (function (){var statearr_12698 = state_12694;
(statearr_12698[(7)] = inst_12673__$1);

return statearr_12698;
})();
if(cljs.core.truth_(inst_12674)){
var statearr_12699_12725 = state_12694__$1;
(statearr_12699_12725[(1)] = (5));

} else {
var statearr_12700_12726 = state_12694__$1;
(statearr_12700_12726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (13))){
var state_12694__$1 = state_12694;
var statearr_12701_12727 = state_12694__$1;
(statearr_12701_12727[(2)] = null);

(statearr_12701_12727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (6))){
var inst_12673 = (state_12694[(7)]);
var state_12694__$1 = state_12694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12694__$1,(11),to,inst_12673);
} else {
if((state_val_12695 === (3))){
var inst_12692 = (state_12694[(2)]);
var state_12694__$1 = state_12694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12694__$1,inst_12692);
} else {
if((state_val_12695 === (12))){
var state_12694__$1 = state_12694;
var statearr_12702_12728 = state_12694__$1;
(statearr_12702_12728[(2)] = null);

(statearr_12702_12728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (2))){
var state_12694__$1 = state_12694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12694__$1,(4),from);
} else {
if((state_val_12695 === (11))){
var inst_12683 = (state_12694[(2)]);
var state_12694__$1 = state_12694;
if(cljs.core.truth_(inst_12683)){
var statearr_12703_12729 = state_12694__$1;
(statearr_12703_12729[(1)] = (12));

} else {
var statearr_12704_12730 = state_12694__$1;
(statearr_12704_12730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (9))){
var state_12694__$1 = state_12694;
var statearr_12705_12731 = state_12694__$1;
(statearr_12705_12731[(2)] = null);

(statearr_12705_12731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (5))){
var state_12694__$1 = state_12694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12706_12732 = state_12694__$1;
(statearr_12706_12732[(1)] = (8));

} else {
var statearr_12707_12733 = state_12694__$1;
(statearr_12707_12733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (14))){
var inst_12688 = (state_12694[(2)]);
var state_12694__$1 = state_12694;
var statearr_12708_12734 = state_12694__$1;
(statearr_12708_12734[(2)] = inst_12688);

(statearr_12708_12734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (10))){
var inst_12680 = (state_12694[(2)]);
var state_12694__$1 = state_12694;
var statearr_12709_12735 = state_12694__$1;
(statearr_12709_12735[(2)] = inst_12680);

(statearr_12709_12735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12695 === (8))){
var inst_12677 = cljs.core.async.close_BANG_.call(null,to);
var state_12694__$1 = state_12694;
var statearr_12710_12736 = state_12694__$1;
(statearr_12710_12736[(2)] = inst_12677);

(statearr_12710_12736[(1)] = (10));


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
});})(c__12555__auto___12722))
;
return ((function (switch__12443__auto__,c__12555__auto___12722){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_12714 = [null,null,null,null,null,null,null,null];
(statearr_12714[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_12714[(1)] = (1));

return statearr_12714;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_12694){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_12694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e12715){if((e12715 instanceof Object)){
var ex__12447__auto__ = e12715;
var statearr_12716_12737 = state_12694;
(statearr_12716_12737[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12738 = state_12694;
state_12694 = G__12738;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_12694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_12694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___12722))
})();
var state__12557__auto__ = (function (){var statearr_12717 = f__12556__auto__.call(null);
(statearr_12717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___12722);

return statearr_12717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___12722))
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
return (function (p__12922){
var vec__12923 = p__12922;
var v = cljs.core.nth.call(null,vec__12923,(0),null);
var p = cljs.core.nth.call(null,vec__12923,(1),null);
var job = vec__12923;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12555__auto___13105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___13105,res,vec__12923,v,p,job,jobs,results){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___13105,res,vec__12923,v,p,job,jobs,results){
return (function (state_12928){
var state_val_12929 = (state_12928[(1)]);
if((state_val_12929 === (1))){
var state_12928__$1 = state_12928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12928__$1,(2),res,v);
} else {
if((state_val_12929 === (2))){
var inst_12925 = (state_12928[(2)]);
var inst_12926 = cljs.core.async.close_BANG_.call(null,res);
var state_12928__$1 = (function (){var statearr_12930 = state_12928;
(statearr_12930[(7)] = inst_12925);

return statearr_12930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12928__$1,inst_12926);
} else {
return null;
}
}
});})(c__12555__auto___13105,res,vec__12923,v,p,job,jobs,results))
;
return ((function (switch__12443__auto__,c__12555__auto___13105,res,vec__12923,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0 = (function (){
var statearr_12934 = [null,null,null,null,null,null,null,null];
(statearr_12934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__);

(statearr_12934[(1)] = (1));

return statearr_12934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1 = (function (state_12928){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_12928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e12935){if((e12935 instanceof Object)){
var ex__12447__auto__ = e12935;
var statearr_12936_13106 = state_12928;
(statearr_12936_13106[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13107 = state_12928;
state_12928 = G__13107;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = function(state_12928){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1.call(this,state_12928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___13105,res,vec__12923,v,p,job,jobs,results))
})();
var state__12557__auto__ = (function (){var statearr_12937 = f__12556__auto__.call(null);
(statearr_12937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___13105);

return statearr_12937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___13105,res,vec__12923,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12938){
var vec__12939 = p__12938;
var v = cljs.core.nth.call(null,vec__12939,(0),null);
var p = cljs.core.nth.call(null,vec__12939,(1),null);
var job = vec__12939;
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
var n__7059__auto___13108 = n;
var __13109 = (0);
while(true){
if((__13109 < n__7059__auto___13108)){
var G__12940_13110 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12940_13110) {
case "compute":
var c__12555__auto___13112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13109,c__12555__auto___13112,G__12940_13110,n__7059__auto___13108,jobs,results,process,async){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (__13109,c__12555__auto___13112,G__12940_13110,n__7059__auto___13108,jobs,results,process,async){
return (function (state_12953){
var state_val_12954 = (state_12953[(1)]);
if((state_val_12954 === (1))){
var state_12953__$1 = state_12953;
var statearr_12955_13113 = state_12953__$1;
(statearr_12955_13113[(2)] = null);

(statearr_12955_13113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12954 === (2))){
var state_12953__$1 = state_12953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12953__$1,(4),jobs);
} else {
if((state_val_12954 === (3))){
var inst_12951 = (state_12953[(2)]);
var state_12953__$1 = state_12953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12953__$1,inst_12951);
} else {
if((state_val_12954 === (4))){
var inst_12943 = (state_12953[(2)]);
var inst_12944 = process.call(null,inst_12943);
var state_12953__$1 = state_12953;
if(cljs.core.truth_(inst_12944)){
var statearr_12956_13114 = state_12953__$1;
(statearr_12956_13114[(1)] = (5));

} else {
var statearr_12957_13115 = state_12953__$1;
(statearr_12957_13115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12954 === (5))){
var state_12953__$1 = state_12953;
var statearr_12958_13116 = state_12953__$1;
(statearr_12958_13116[(2)] = null);

(statearr_12958_13116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12954 === (6))){
var state_12953__$1 = state_12953;
var statearr_12959_13117 = state_12953__$1;
(statearr_12959_13117[(2)] = null);

(statearr_12959_13117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12954 === (7))){
var inst_12949 = (state_12953[(2)]);
var state_12953__$1 = state_12953;
var statearr_12960_13118 = state_12953__$1;
(statearr_12960_13118[(2)] = inst_12949);

(statearr_12960_13118[(1)] = (3));


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
});})(__13109,c__12555__auto___13112,G__12940_13110,n__7059__auto___13108,jobs,results,process,async))
;
return ((function (__13109,switch__12443__auto__,c__12555__auto___13112,G__12940_13110,n__7059__auto___13108,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0 = (function (){
var statearr_12964 = [null,null,null,null,null,null,null];
(statearr_12964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__);

(statearr_12964[(1)] = (1));

return statearr_12964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1 = (function (state_12953){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_12953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e12965){if((e12965 instanceof Object)){
var ex__12447__auto__ = e12965;
var statearr_12966_13119 = state_12953;
(statearr_12966_13119[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_12953;
state_12953 = G__13120;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = function(state_12953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1.call(this,state_12953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__;
})()
;})(__13109,switch__12443__auto__,c__12555__auto___13112,G__12940_13110,n__7059__auto___13108,jobs,results,process,async))
})();
var state__12557__auto__ = (function (){var statearr_12967 = f__12556__auto__.call(null);
(statearr_12967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___13112);

return statearr_12967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(__13109,c__12555__auto___13112,G__12940_13110,n__7059__auto___13108,jobs,results,process,async))
);


break;
case "async":
var c__12555__auto___13121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13109,c__12555__auto___13121,G__12940_13110,n__7059__auto___13108,jobs,results,process,async){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (__13109,c__12555__auto___13121,G__12940_13110,n__7059__auto___13108,jobs,results,process,async){
return (function (state_12980){
var state_val_12981 = (state_12980[(1)]);
if((state_val_12981 === (1))){
var state_12980__$1 = state_12980;
var statearr_12982_13122 = state_12980__$1;
(statearr_12982_13122[(2)] = null);

(statearr_12982_13122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (2))){
var state_12980__$1 = state_12980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12980__$1,(4),jobs);
} else {
if((state_val_12981 === (3))){
var inst_12978 = (state_12980[(2)]);
var state_12980__$1 = state_12980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12980__$1,inst_12978);
} else {
if((state_val_12981 === (4))){
var inst_12970 = (state_12980[(2)]);
var inst_12971 = async.call(null,inst_12970);
var state_12980__$1 = state_12980;
if(cljs.core.truth_(inst_12971)){
var statearr_12983_13123 = state_12980__$1;
(statearr_12983_13123[(1)] = (5));

} else {
var statearr_12984_13124 = state_12980__$1;
(statearr_12984_13124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (5))){
var state_12980__$1 = state_12980;
var statearr_12985_13125 = state_12980__$1;
(statearr_12985_13125[(2)] = null);

(statearr_12985_13125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (6))){
var state_12980__$1 = state_12980;
var statearr_12986_13126 = state_12980__$1;
(statearr_12986_13126[(2)] = null);

(statearr_12986_13126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12981 === (7))){
var inst_12976 = (state_12980[(2)]);
var state_12980__$1 = state_12980;
var statearr_12987_13127 = state_12980__$1;
(statearr_12987_13127[(2)] = inst_12976);

(statearr_12987_13127[(1)] = (3));


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
});})(__13109,c__12555__auto___13121,G__12940_13110,n__7059__auto___13108,jobs,results,process,async))
;
return ((function (__13109,switch__12443__auto__,c__12555__auto___13121,G__12940_13110,n__7059__auto___13108,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0 = (function (){
var statearr_12991 = [null,null,null,null,null,null,null];
(statearr_12991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__);

(statearr_12991[(1)] = (1));

return statearr_12991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1 = (function (state_12980){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_12980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e12992){if((e12992 instanceof Object)){
var ex__12447__auto__ = e12992;
var statearr_12993_13128 = state_12980;
(statearr_12993_13128[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13129 = state_12980;
state_12980 = G__13129;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = function(state_12980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1.call(this,state_12980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__;
})()
;})(__13109,switch__12443__auto__,c__12555__auto___13121,G__12940_13110,n__7059__auto___13108,jobs,results,process,async))
})();
var state__12557__auto__ = (function (){var statearr_12994 = f__12556__auto__.call(null);
(statearr_12994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___13121);

return statearr_12994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(__13109,c__12555__auto___13121,G__12940_13110,n__7059__auto___13108,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13130 = (__13109 + (1));
__13109 = G__13130;
continue;
} else {
}
break;
}

var c__12555__auto___13131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___13131,jobs,results,process,async){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___13131,jobs,results,process,async){
return (function (state_13016){
var state_val_13017 = (state_13016[(1)]);
if((state_val_13017 === (1))){
var state_13016__$1 = state_13016;
var statearr_13018_13132 = state_13016__$1;
(statearr_13018_13132[(2)] = null);

(statearr_13018_13132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13017 === (2))){
var state_13016__$1 = state_13016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13016__$1,(4),from);
} else {
if((state_val_13017 === (3))){
var inst_13014 = (state_13016[(2)]);
var state_13016__$1 = state_13016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13016__$1,inst_13014);
} else {
if((state_val_13017 === (4))){
var inst_12997 = (state_13016[(7)]);
var inst_12997__$1 = (state_13016[(2)]);
var inst_12998 = (inst_12997__$1 == null);
var state_13016__$1 = (function (){var statearr_13019 = state_13016;
(statearr_13019[(7)] = inst_12997__$1);

return statearr_13019;
})();
if(cljs.core.truth_(inst_12998)){
var statearr_13020_13133 = state_13016__$1;
(statearr_13020_13133[(1)] = (5));

} else {
var statearr_13021_13134 = state_13016__$1;
(statearr_13021_13134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13017 === (5))){
var inst_13000 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13016__$1 = state_13016;
var statearr_13022_13135 = state_13016__$1;
(statearr_13022_13135[(2)] = inst_13000);

(statearr_13022_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13017 === (6))){
var inst_13002 = (state_13016[(8)]);
var inst_12997 = (state_13016[(7)]);
var inst_13002__$1 = cljs.core.async.chan.call(null,(1));
var inst_13003 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13004 = [inst_12997,inst_13002__$1];
var inst_13005 = (new cljs.core.PersistentVector(null,2,(5),inst_13003,inst_13004,null));
var state_13016__$1 = (function (){var statearr_13023 = state_13016;
(statearr_13023[(8)] = inst_13002__$1);

return statearr_13023;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13016__$1,(8),jobs,inst_13005);
} else {
if((state_val_13017 === (7))){
var inst_13012 = (state_13016[(2)]);
var state_13016__$1 = state_13016;
var statearr_13024_13136 = state_13016__$1;
(statearr_13024_13136[(2)] = inst_13012);

(statearr_13024_13136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13017 === (8))){
var inst_13002 = (state_13016[(8)]);
var inst_13007 = (state_13016[(2)]);
var state_13016__$1 = (function (){var statearr_13025 = state_13016;
(statearr_13025[(9)] = inst_13007);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13016__$1,(9),results,inst_13002);
} else {
if((state_val_13017 === (9))){
var inst_13009 = (state_13016[(2)]);
var state_13016__$1 = (function (){var statearr_13026 = state_13016;
(statearr_13026[(10)] = inst_13009);

return statearr_13026;
})();
var statearr_13027_13137 = state_13016__$1;
(statearr_13027_13137[(2)] = null);

(statearr_13027_13137[(1)] = (2));


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
});})(c__12555__auto___13131,jobs,results,process,async))
;
return ((function (switch__12443__auto__,c__12555__auto___13131,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0 = (function (){
var statearr_13031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__);

(statearr_13031[(1)] = (1));

return statearr_13031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1 = (function (state_13016){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_13016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e13032){if((e13032 instanceof Object)){
var ex__12447__auto__ = e13032;
var statearr_13033_13138 = state_13016;
(statearr_13033_13138[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13139 = state_13016;
state_13016 = G__13139;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = function(state_13016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1.call(this,state_13016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___13131,jobs,results,process,async))
})();
var state__12557__auto__ = (function (){var statearr_13034 = f__12556__auto__.call(null);
(statearr_13034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___13131);

return statearr_13034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___13131,jobs,results,process,async))
);


var c__12555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto__,jobs,results,process,async){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto__,jobs,results,process,async){
return (function (state_13072){
var state_val_13073 = (state_13072[(1)]);
if((state_val_13073 === (7))){
var inst_13068 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
var statearr_13074_13140 = state_13072__$1;
(statearr_13074_13140[(2)] = inst_13068);

(statearr_13074_13140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (20))){
var state_13072__$1 = state_13072;
var statearr_13075_13141 = state_13072__$1;
(statearr_13075_13141[(2)] = null);

(statearr_13075_13141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (1))){
var state_13072__$1 = state_13072;
var statearr_13076_13142 = state_13072__$1;
(statearr_13076_13142[(2)] = null);

(statearr_13076_13142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (4))){
var inst_13037 = (state_13072[(7)]);
var inst_13037__$1 = (state_13072[(2)]);
var inst_13038 = (inst_13037__$1 == null);
var state_13072__$1 = (function (){var statearr_13077 = state_13072;
(statearr_13077[(7)] = inst_13037__$1);

return statearr_13077;
})();
if(cljs.core.truth_(inst_13038)){
var statearr_13078_13143 = state_13072__$1;
(statearr_13078_13143[(1)] = (5));

} else {
var statearr_13079_13144 = state_13072__$1;
(statearr_13079_13144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (15))){
var inst_13050 = (state_13072[(8)]);
var state_13072__$1 = state_13072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13072__$1,(18),to,inst_13050);
} else {
if((state_val_13073 === (21))){
var inst_13063 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
var statearr_13080_13145 = state_13072__$1;
(statearr_13080_13145[(2)] = inst_13063);

(statearr_13080_13145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (13))){
var inst_13065 = (state_13072[(2)]);
var state_13072__$1 = (function (){var statearr_13081 = state_13072;
(statearr_13081[(9)] = inst_13065);

return statearr_13081;
})();
var statearr_13082_13146 = state_13072__$1;
(statearr_13082_13146[(2)] = null);

(statearr_13082_13146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (6))){
var inst_13037 = (state_13072[(7)]);
var state_13072__$1 = state_13072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13072__$1,(11),inst_13037);
} else {
if((state_val_13073 === (17))){
var inst_13058 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
if(cljs.core.truth_(inst_13058)){
var statearr_13083_13147 = state_13072__$1;
(statearr_13083_13147[(1)] = (19));

} else {
var statearr_13084_13148 = state_13072__$1;
(statearr_13084_13148[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (3))){
var inst_13070 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13072__$1,inst_13070);
} else {
if((state_val_13073 === (12))){
var inst_13047 = (state_13072[(10)]);
var state_13072__$1 = state_13072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13072__$1,(14),inst_13047);
} else {
if((state_val_13073 === (2))){
var state_13072__$1 = state_13072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13072__$1,(4),results);
} else {
if((state_val_13073 === (19))){
var state_13072__$1 = state_13072;
var statearr_13085_13149 = state_13072__$1;
(statearr_13085_13149[(2)] = null);

(statearr_13085_13149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (11))){
var inst_13047 = (state_13072[(2)]);
var state_13072__$1 = (function (){var statearr_13086 = state_13072;
(statearr_13086[(10)] = inst_13047);

return statearr_13086;
})();
var statearr_13087_13150 = state_13072__$1;
(statearr_13087_13150[(2)] = null);

(statearr_13087_13150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (9))){
var state_13072__$1 = state_13072;
var statearr_13088_13151 = state_13072__$1;
(statearr_13088_13151[(2)] = null);

(statearr_13088_13151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (5))){
var state_13072__$1 = state_13072;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13089_13152 = state_13072__$1;
(statearr_13089_13152[(1)] = (8));

} else {
var statearr_13090_13153 = state_13072__$1;
(statearr_13090_13153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (14))){
var inst_13052 = (state_13072[(11)]);
var inst_13050 = (state_13072[(8)]);
var inst_13050__$1 = (state_13072[(2)]);
var inst_13051 = (inst_13050__$1 == null);
var inst_13052__$1 = cljs.core.not.call(null,inst_13051);
var state_13072__$1 = (function (){var statearr_13091 = state_13072;
(statearr_13091[(11)] = inst_13052__$1);

(statearr_13091[(8)] = inst_13050__$1);

return statearr_13091;
})();
if(inst_13052__$1){
var statearr_13092_13154 = state_13072__$1;
(statearr_13092_13154[(1)] = (15));

} else {
var statearr_13093_13155 = state_13072__$1;
(statearr_13093_13155[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (16))){
var inst_13052 = (state_13072[(11)]);
var state_13072__$1 = state_13072;
var statearr_13094_13156 = state_13072__$1;
(statearr_13094_13156[(2)] = inst_13052);

(statearr_13094_13156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (10))){
var inst_13044 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
var statearr_13095_13157 = state_13072__$1;
(statearr_13095_13157[(2)] = inst_13044);

(statearr_13095_13157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (18))){
var inst_13055 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
var statearr_13096_13158 = state_13072__$1;
(statearr_13096_13158[(2)] = inst_13055);

(statearr_13096_13158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (8))){
var inst_13041 = cljs.core.async.close_BANG_.call(null,to);
var state_13072__$1 = state_13072;
var statearr_13097_13159 = state_13072__$1;
(statearr_13097_13159[(2)] = inst_13041);

(statearr_13097_13159[(1)] = (10));


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
});})(c__12555__auto__,jobs,results,process,async))
;
return ((function (switch__12443__auto__,c__12555__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0 = (function (){
var statearr_13101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__);

(statearr_13101[(1)] = (1));

return statearr_13101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1 = (function (state_13072){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_13072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e13102){if((e13102 instanceof Object)){
var ex__12447__auto__ = e13102;
var statearr_13103_13160 = state_13072;
(statearr_13103_13160[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13161 = state_13072;
state_13072 = G__13161;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__ = function(state_13072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1.call(this,state_13072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto__,jobs,results,process,async))
})();
var state__12557__auto__ = (function (){var statearr_13104 = f__12556__auto__.call(null);
(statearr_13104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto__);

return statearr_13104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto__,jobs,results,process,async))
);

return c__12555__auto__;
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
var args13162 = [];
var len__7214__auto___13165 = arguments.length;
var i__7215__auto___13166 = (0);
while(true){
if((i__7215__auto___13166 < len__7214__auto___13165)){
args13162.push((arguments[i__7215__auto___13166]));

var G__13167 = (i__7215__auto___13166 + (1));
i__7215__auto___13166 = G__13167;
continue;
} else {
}
break;
}

var G__13164 = args13162.length;
switch (G__13164) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13162.length)].join('')));

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
var args13169 = [];
var len__7214__auto___13172 = arguments.length;
var i__7215__auto___13173 = (0);
while(true){
if((i__7215__auto___13173 < len__7214__auto___13172)){
args13169.push((arguments[i__7215__auto___13173]));

var G__13174 = (i__7215__auto___13173 + (1));
i__7215__auto___13173 = G__13174;
continue;
} else {
}
break;
}

var G__13171 = args13169.length;
switch (G__13171) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13169.length)].join('')));

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
var args13176 = [];
var len__7214__auto___13229 = arguments.length;
var i__7215__auto___13230 = (0);
while(true){
if((i__7215__auto___13230 < len__7214__auto___13229)){
args13176.push((arguments[i__7215__auto___13230]));

var G__13231 = (i__7215__auto___13230 + (1));
i__7215__auto___13230 = G__13231;
continue;
} else {
}
break;
}

var G__13178 = args13176.length;
switch (G__13178) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13176.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12555__auto___13233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___13233,tc,fc){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___13233,tc,fc){
return (function (state_13204){
var state_val_13205 = (state_13204[(1)]);
if((state_val_13205 === (7))){
var inst_13200 = (state_13204[(2)]);
var state_13204__$1 = state_13204;
var statearr_13206_13234 = state_13204__$1;
(statearr_13206_13234[(2)] = inst_13200);

(statearr_13206_13234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (1))){
var state_13204__$1 = state_13204;
var statearr_13207_13235 = state_13204__$1;
(statearr_13207_13235[(2)] = null);

(statearr_13207_13235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (4))){
var inst_13181 = (state_13204[(7)]);
var inst_13181__$1 = (state_13204[(2)]);
var inst_13182 = (inst_13181__$1 == null);
var state_13204__$1 = (function (){var statearr_13208 = state_13204;
(statearr_13208[(7)] = inst_13181__$1);

return statearr_13208;
})();
if(cljs.core.truth_(inst_13182)){
var statearr_13209_13236 = state_13204__$1;
(statearr_13209_13236[(1)] = (5));

} else {
var statearr_13210_13237 = state_13204__$1;
(statearr_13210_13237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (13))){
var state_13204__$1 = state_13204;
var statearr_13211_13238 = state_13204__$1;
(statearr_13211_13238[(2)] = null);

(statearr_13211_13238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (6))){
var inst_13181 = (state_13204[(7)]);
var inst_13187 = p.call(null,inst_13181);
var state_13204__$1 = state_13204;
if(cljs.core.truth_(inst_13187)){
var statearr_13212_13239 = state_13204__$1;
(statearr_13212_13239[(1)] = (9));

} else {
var statearr_13213_13240 = state_13204__$1;
(statearr_13213_13240[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (3))){
var inst_13202 = (state_13204[(2)]);
var state_13204__$1 = state_13204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13204__$1,inst_13202);
} else {
if((state_val_13205 === (12))){
var state_13204__$1 = state_13204;
var statearr_13214_13241 = state_13204__$1;
(statearr_13214_13241[(2)] = null);

(statearr_13214_13241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (2))){
var state_13204__$1 = state_13204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13204__$1,(4),ch);
} else {
if((state_val_13205 === (11))){
var inst_13181 = (state_13204[(7)]);
var inst_13191 = (state_13204[(2)]);
var state_13204__$1 = state_13204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13204__$1,(8),inst_13191,inst_13181);
} else {
if((state_val_13205 === (9))){
var state_13204__$1 = state_13204;
var statearr_13215_13242 = state_13204__$1;
(statearr_13215_13242[(2)] = tc);

(statearr_13215_13242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (5))){
var inst_13184 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13185 = cljs.core.async.close_BANG_.call(null,fc);
var state_13204__$1 = (function (){var statearr_13216 = state_13204;
(statearr_13216[(8)] = inst_13184);

return statearr_13216;
})();
var statearr_13217_13243 = state_13204__$1;
(statearr_13217_13243[(2)] = inst_13185);

(statearr_13217_13243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (14))){
var inst_13198 = (state_13204[(2)]);
var state_13204__$1 = state_13204;
var statearr_13218_13244 = state_13204__$1;
(statearr_13218_13244[(2)] = inst_13198);

(statearr_13218_13244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (10))){
var state_13204__$1 = state_13204;
var statearr_13219_13245 = state_13204__$1;
(statearr_13219_13245[(2)] = fc);

(statearr_13219_13245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13205 === (8))){
var inst_13193 = (state_13204[(2)]);
var state_13204__$1 = state_13204;
if(cljs.core.truth_(inst_13193)){
var statearr_13220_13246 = state_13204__$1;
(statearr_13220_13246[(1)] = (12));

} else {
var statearr_13221_13247 = state_13204__$1;
(statearr_13221_13247[(1)] = (13));

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
});})(c__12555__auto___13233,tc,fc))
;
return ((function (switch__12443__auto__,c__12555__auto___13233,tc,fc){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_13225 = [null,null,null,null,null,null,null,null,null];
(statearr_13225[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_13225[(1)] = (1));

return statearr_13225;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_13204){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_13204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e13226){if((e13226 instanceof Object)){
var ex__12447__auto__ = e13226;
var statearr_13227_13248 = state_13204;
(statearr_13227_13248[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13249 = state_13204;
state_13204 = G__13249;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_13204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_13204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___13233,tc,fc))
})();
var state__12557__auto__ = (function (){var statearr_13228 = f__12556__auto__.call(null);
(statearr_13228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___13233);

return statearr_13228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___13233,tc,fc))
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
var c__12555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto__){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto__){
return (function (state_13313){
var state_val_13314 = (state_13313[(1)]);
if((state_val_13314 === (7))){
var inst_13309 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
var statearr_13315_13336 = state_13313__$1;
(statearr_13315_13336[(2)] = inst_13309);

(statearr_13315_13336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13314 === (1))){
var inst_13293 = init;
var state_13313__$1 = (function (){var statearr_13316 = state_13313;
(statearr_13316[(7)] = inst_13293);

return statearr_13316;
})();
var statearr_13317_13337 = state_13313__$1;
(statearr_13317_13337[(2)] = null);

(statearr_13317_13337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13314 === (4))){
var inst_13296 = (state_13313[(8)]);
var inst_13296__$1 = (state_13313[(2)]);
var inst_13297 = (inst_13296__$1 == null);
var state_13313__$1 = (function (){var statearr_13318 = state_13313;
(statearr_13318[(8)] = inst_13296__$1);

return statearr_13318;
})();
if(cljs.core.truth_(inst_13297)){
var statearr_13319_13338 = state_13313__$1;
(statearr_13319_13338[(1)] = (5));

} else {
var statearr_13320_13339 = state_13313__$1;
(statearr_13320_13339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13314 === (6))){
var inst_13293 = (state_13313[(7)]);
var inst_13300 = (state_13313[(9)]);
var inst_13296 = (state_13313[(8)]);
var inst_13300__$1 = f.call(null,inst_13293,inst_13296);
var inst_13301 = cljs.core.reduced_QMARK_.call(null,inst_13300__$1);
var state_13313__$1 = (function (){var statearr_13321 = state_13313;
(statearr_13321[(9)] = inst_13300__$1);

return statearr_13321;
})();
if(inst_13301){
var statearr_13322_13340 = state_13313__$1;
(statearr_13322_13340[(1)] = (8));

} else {
var statearr_13323_13341 = state_13313__$1;
(statearr_13323_13341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13314 === (3))){
var inst_13311 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13313__$1,inst_13311);
} else {
if((state_val_13314 === (2))){
var state_13313__$1 = state_13313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13313__$1,(4),ch);
} else {
if((state_val_13314 === (9))){
var inst_13300 = (state_13313[(9)]);
var inst_13293 = inst_13300;
var state_13313__$1 = (function (){var statearr_13324 = state_13313;
(statearr_13324[(7)] = inst_13293);

return statearr_13324;
})();
var statearr_13325_13342 = state_13313__$1;
(statearr_13325_13342[(2)] = null);

(statearr_13325_13342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13314 === (5))){
var inst_13293 = (state_13313[(7)]);
var state_13313__$1 = state_13313;
var statearr_13326_13343 = state_13313__$1;
(statearr_13326_13343[(2)] = inst_13293);

(statearr_13326_13343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13314 === (10))){
var inst_13307 = (state_13313[(2)]);
var state_13313__$1 = state_13313;
var statearr_13327_13344 = state_13313__$1;
(statearr_13327_13344[(2)] = inst_13307);

(statearr_13327_13344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13314 === (8))){
var inst_13300 = (state_13313[(9)]);
var inst_13303 = cljs.core.deref.call(null,inst_13300);
var state_13313__$1 = state_13313;
var statearr_13328_13345 = state_13313__$1;
(statearr_13328_13345[(2)] = inst_13303);

(statearr_13328_13345[(1)] = (10));


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
});})(c__12555__auto__))
;
return ((function (switch__12443__auto__,c__12555__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12444__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12444__auto____0 = (function (){
var statearr_13332 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13332[(0)] = cljs$core$async$reduce_$_state_machine__12444__auto__);

(statearr_13332[(1)] = (1));

return statearr_13332;
});
var cljs$core$async$reduce_$_state_machine__12444__auto____1 = (function (state_13313){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_13313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e13333){if((e13333 instanceof Object)){
var ex__12447__auto__ = e13333;
var statearr_13334_13346 = state_13313;
(statearr_13334_13346[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13347 = state_13313;
state_13313 = G__13347;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12444__auto__ = function(state_13313){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12444__auto____1.call(this,state_13313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12444__auto____0;
cljs$core$async$reduce_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12444__auto____1;
return cljs$core$async$reduce_$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto__))
})();
var state__12557__auto__ = (function (){var statearr_13335 = f__12556__auto__.call(null);
(statearr_13335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto__);

return statearr_13335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto__))
);

return c__12555__auto__;
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
var args13348 = [];
var len__7214__auto___13400 = arguments.length;
var i__7215__auto___13401 = (0);
while(true){
if((i__7215__auto___13401 < len__7214__auto___13400)){
args13348.push((arguments[i__7215__auto___13401]));

var G__13402 = (i__7215__auto___13401 + (1));
i__7215__auto___13401 = G__13402;
continue;
} else {
}
break;
}

var G__13350 = args13348.length;
switch (G__13350) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13348.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto__){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto__){
return (function (state_13375){
var state_val_13376 = (state_13375[(1)]);
if((state_val_13376 === (7))){
var inst_13357 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
var statearr_13377_13404 = state_13375__$1;
(statearr_13377_13404[(2)] = inst_13357);

(statearr_13377_13404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (1))){
var inst_13351 = cljs.core.seq.call(null,coll);
var inst_13352 = inst_13351;
var state_13375__$1 = (function (){var statearr_13378 = state_13375;
(statearr_13378[(7)] = inst_13352);

return statearr_13378;
})();
var statearr_13379_13405 = state_13375__$1;
(statearr_13379_13405[(2)] = null);

(statearr_13379_13405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (4))){
var inst_13352 = (state_13375[(7)]);
var inst_13355 = cljs.core.first.call(null,inst_13352);
var state_13375__$1 = state_13375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13375__$1,(7),ch,inst_13355);
} else {
if((state_val_13376 === (13))){
var inst_13369 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
var statearr_13380_13406 = state_13375__$1;
(statearr_13380_13406[(2)] = inst_13369);

(statearr_13380_13406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (6))){
var inst_13360 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
if(cljs.core.truth_(inst_13360)){
var statearr_13381_13407 = state_13375__$1;
(statearr_13381_13407[(1)] = (8));

} else {
var statearr_13382_13408 = state_13375__$1;
(statearr_13382_13408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (3))){
var inst_13373 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13375__$1,inst_13373);
} else {
if((state_val_13376 === (12))){
var state_13375__$1 = state_13375;
var statearr_13383_13409 = state_13375__$1;
(statearr_13383_13409[(2)] = null);

(statearr_13383_13409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (2))){
var inst_13352 = (state_13375[(7)]);
var state_13375__$1 = state_13375;
if(cljs.core.truth_(inst_13352)){
var statearr_13384_13410 = state_13375__$1;
(statearr_13384_13410[(1)] = (4));

} else {
var statearr_13385_13411 = state_13375__$1;
(statearr_13385_13411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (11))){
var inst_13366 = cljs.core.async.close_BANG_.call(null,ch);
var state_13375__$1 = state_13375;
var statearr_13386_13412 = state_13375__$1;
(statearr_13386_13412[(2)] = inst_13366);

(statearr_13386_13412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (9))){
var state_13375__$1 = state_13375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13387_13413 = state_13375__$1;
(statearr_13387_13413[(1)] = (11));

} else {
var statearr_13388_13414 = state_13375__$1;
(statearr_13388_13414[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (5))){
var inst_13352 = (state_13375[(7)]);
var state_13375__$1 = state_13375;
var statearr_13389_13415 = state_13375__$1;
(statearr_13389_13415[(2)] = inst_13352);

(statearr_13389_13415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (10))){
var inst_13371 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
var statearr_13390_13416 = state_13375__$1;
(statearr_13390_13416[(2)] = inst_13371);

(statearr_13390_13416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (8))){
var inst_13352 = (state_13375[(7)]);
var inst_13362 = cljs.core.next.call(null,inst_13352);
var inst_13352__$1 = inst_13362;
var state_13375__$1 = (function (){var statearr_13391 = state_13375;
(statearr_13391[(7)] = inst_13352__$1);

return statearr_13391;
})();
var statearr_13392_13417 = state_13375__$1;
(statearr_13392_13417[(2)] = null);

(statearr_13392_13417[(1)] = (2));


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
});})(c__12555__auto__))
;
return ((function (switch__12443__auto__,c__12555__auto__){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_13396 = [null,null,null,null,null,null,null,null];
(statearr_13396[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_13396[(1)] = (1));

return statearr_13396;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_13375){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_13375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e13397){if((e13397 instanceof Object)){
var ex__12447__auto__ = e13397;
var statearr_13398_13418 = state_13375;
(statearr_13398_13418[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13419 = state_13375;
state_13375 = G__13419;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_13375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_13375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto__))
})();
var state__12557__auto__ = (function (){var statearr_13399 = f__12556__auto__.call(null);
(statearr_13399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto__);

return statearr_13399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto__))
);

return c__12555__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async13641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13641 = (function (mult,ch,cs,meta13642){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13642 = meta13642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13643,meta13642__$1){
var self__ = this;
var _13643__$1 = this;
return (new cljs.core.async.t_cljs$core$async13641(self__.mult,self__.ch,self__.cs,meta13642__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13643){
var self__ = this;
var _13643__$1 = this;
return self__.meta13642;
});})(cs))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13641.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13641.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13642","meta13642",89702056,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13641";

cljs.core.async.t_cljs$core$async13641.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async13641");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13641 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13641(mult__$1,ch__$1,cs__$1,meta13642){
return (new cljs.core.async.t_cljs$core$async13641(mult__$1,ch__$1,cs__$1,meta13642));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13641(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12555__auto___13862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___13862,cs,m,dchan,dctr,done){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___13862,cs,m,dchan,dctr,done){
return (function (state_13774){
var state_val_13775 = (state_13774[(1)]);
if((state_val_13775 === (7))){
var inst_13770 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13776_13863 = state_13774__$1;
(statearr_13776_13863[(2)] = inst_13770);

(statearr_13776_13863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (20))){
var inst_13675 = (state_13774[(7)]);
var inst_13685 = cljs.core.first.call(null,inst_13675);
var inst_13686 = cljs.core.nth.call(null,inst_13685,(0),null);
var inst_13687 = cljs.core.nth.call(null,inst_13685,(1),null);
var state_13774__$1 = (function (){var statearr_13777 = state_13774;
(statearr_13777[(8)] = inst_13686);

return statearr_13777;
})();
if(cljs.core.truth_(inst_13687)){
var statearr_13778_13864 = state_13774__$1;
(statearr_13778_13864[(1)] = (22));

} else {
var statearr_13779_13865 = state_13774__$1;
(statearr_13779_13865[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (27))){
var inst_13717 = (state_13774[(9)]);
var inst_13715 = (state_13774[(10)]);
var inst_13722 = (state_13774[(11)]);
var inst_13646 = (state_13774[(12)]);
var inst_13722__$1 = cljs.core._nth.call(null,inst_13715,inst_13717);
var inst_13723 = cljs.core.async.put_BANG_.call(null,inst_13722__$1,inst_13646,done);
var state_13774__$1 = (function (){var statearr_13780 = state_13774;
(statearr_13780[(11)] = inst_13722__$1);

return statearr_13780;
})();
if(cljs.core.truth_(inst_13723)){
var statearr_13781_13866 = state_13774__$1;
(statearr_13781_13866[(1)] = (30));

} else {
var statearr_13782_13867 = state_13774__$1;
(statearr_13782_13867[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (1))){
var state_13774__$1 = state_13774;
var statearr_13783_13868 = state_13774__$1;
(statearr_13783_13868[(2)] = null);

(statearr_13783_13868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (24))){
var inst_13675 = (state_13774[(7)]);
var inst_13692 = (state_13774[(2)]);
var inst_13693 = cljs.core.next.call(null,inst_13675);
var inst_13655 = inst_13693;
var inst_13656 = null;
var inst_13657 = (0);
var inst_13658 = (0);
var state_13774__$1 = (function (){var statearr_13784 = state_13774;
(statearr_13784[(13)] = inst_13655);

(statearr_13784[(14)] = inst_13658);

(statearr_13784[(15)] = inst_13656);

(statearr_13784[(16)] = inst_13657);

(statearr_13784[(17)] = inst_13692);

return statearr_13784;
})();
var statearr_13785_13869 = state_13774__$1;
(statearr_13785_13869[(2)] = null);

(statearr_13785_13869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (39))){
var state_13774__$1 = state_13774;
var statearr_13789_13870 = state_13774__$1;
(statearr_13789_13870[(2)] = null);

(statearr_13789_13870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (4))){
var inst_13646 = (state_13774[(12)]);
var inst_13646__$1 = (state_13774[(2)]);
var inst_13647 = (inst_13646__$1 == null);
var state_13774__$1 = (function (){var statearr_13790 = state_13774;
(statearr_13790[(12)] = inst_13646__$1);

return statearr_13790;
})();
if(cljs.core.truth_(inst_13647)){
var statearr_13791_13871 = state_13774__$1;
(statearr_13791_13871[(1)] = (5));

} else {
var statearr_13792_13872 = state_13774__$1;
(statearr_13792_13872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (15))){
var inst_13655 = (state_13774[(13)]);
var inst_13658 = (state_13774[(14)]);
var inst_13656 = (state_13774[(15)]);
var inst_13657 = (state_13774[(16)]);
var inst_13671 = (state_13774[(2)]);
var inst_13672 = (inst_13658 + (1));
var tmp13786 = inst_13655;
var tmp13787 = inst_13656;
var tmp13788 = inst_13657;
var inst_13655__$1 = tmp13786;
var inst_13656__$1 = tmp13787;
var inst_13657__$1 = tmp13788;
var inst_13658__$1 = inst_13672;
var state_13774__$1 = (function (){var statearr_13793 = state_13774;
(statearr_13793[(13)] = inst_13655__$1);

(statearr_13793[(14)] = inst_13658__$1);

(statearr_13793[(18)] = inst_13671);

(statearr_13793[(15)] = inst_13656__$1);

(statearr_13793[(16)] = inst_13657__$1);

return statearr_13793;
})();
var statearr_13794_13873 = state_13774__$1;
(statearr_13794_13873[(2)] = null);

(statearr_13794_13873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (21))){
var inst_13696 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13798_13874 = state_13774__$1;
(statearr_13798_13874[(2)] = inst_13696);

(statearr_13798_13874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (31))){
var inst_13722 = (state_13774[(11)]);
var inst_13726 = done.call(null,null);
var inst_13727 = cljs.core.async.untap_STAR_.call(null,m,inst_13722);
var state_13774__$1 = (function (){var statearr_13799 = state_13774;
(statearr_13799[(19)] = inst_13726);

return statearr_13799;
})();
var statearr_13800_13875 = state_13774__$1;
(statearr_13800_13875[(2)] = inst_13727);

(statearr_13800_13875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (32))){
var inst_13717 = (state_13774[(9)]);
var inst_13714 = (state_13774[(20)]);
var inst_13715 = (state_13774[(10)]);
var inst_13716 = (state_13774[(21)]);
var inst_13729 = (state_13774[(2)]);
var inst_13730 = (inst_13717 + (1));
var tmp13795 = inst_13714;
var tmp13796 = inst_13715;
var tmp13797 = inst_13716;
var inst_13714__$1 = tmp13795;
var inst_13715__$1 = tmp13796;
var inst_13716__$1 = tmp13797;
var inst_13717__$1 = inst_13730;
var state_13774__$1 = (function (){var statearr_13801 = state_13774;
(statearr_13801[(9)] = inst_13717__$1);

(statearr_13801[(20)] = inst_13714__$1);

(statearr_13801[(10)] = inst_13715__$1);

(statearr_13801[(22)] = inst_13729);

(statearr_13801[(21)] = inst_13716__$1);

return statearr_13801;
})();
var statearr_13802_13876 = state_13774__$1;
(statearr_13802_13876[(2)] = null);

(statearr_13802_13876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (40))){
var inst_13742 = (state_13774[(23)]);
var inst_13746 = done.call(null,null);
var inst_13747 = cljs.core.async.untap_STAR_.call(null,m,inst_13742);
var state_13774__$1 = (function (){var statearr_13803 = state_13774;
(statearr_13803[(24)] = inst_13746);

return statearr_13803;
})();
var statearr_13804_13877 = state_13774__$1;
(statearr_13804_13877[(2)] = inst_13747);

(statearr_13804_13877[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (33))){
var inst_13733 = (state_13774[(25)]);
var inst_13735 = cljs.core.chunked_seq_QMARK_.call(null,inst_13733);
var state_13774__$1 = state_13774;
if(inst_13735){
var statearr_13805_13878 = state_13774__$1;
(statearr_13805_13878[(1)] = (36));

} else {
var statearr_13806_13879 = state_13774__$1;
(statearr_13806_13879[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (13))){
var inst_13665 = (state_13774[(26)]);
var inst_13668 = cljs.core.async.close_BANG_.call(null,inst_13665);
var state_13774__$1 = state_13774;
var statearr_13807_13880 = state_13774__$1;
(statearr_13807_13880[(2)] = inst_13668);

(statearr_13807_13880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (22))){
var inst_13686 = (state_13774[(8)]);
var inst_13689 = cljs.core.async.close_BANG_.call(null,inst_13686);
var state_13774__$1 = state_13774;
var statearr_13808_13881 = state_13774__$1;
(statearr_13808_13881[(2)] = inst_13689);

(statearr_13808_13881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (36))){
var inst_13733 = (state_13774[(25)]);
var inst_13737 = cljs.core.chunk_first.call(null,inst_13733);
var inst_13738 = cljs.core.chunk_rest.call(null,inst_13733);
var inst_13739 = cljs.core.count.call(null,inst_13737);
var inst_13714 = inst_13738;
var inst_13715 = inst_13737;
var inst_13716 = inst_13739;
var inst_13717 = (0);
var state_13774__$1 = (function (){var statearr_13809 = state_13774;
(statearr_13809[(9)] = inst_13717);

(statearr_13809[(20)] = inst_13714);

(statearr_13809[(10)] = inst_13715);

(statearr_13809[(21)] = inst_13716);

return statearr_13809;
})();
var statearr_13810_13882 = state_13774__$1;
(statearr_13810_13882[(2)] = null);

(statearr_13810_13882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (41))){
var inst_13733 = (state_13774[(25)]);
var inst_13749 = (state_13774[(2)]);
var inst_13750 = cljs.core.next.call(null,inst_13733);
var inst_13714 = inst_13750;
var inst_13715 = null;
var inst_13716 = (0);
var inst_13717 = (0);
var state_13774__$1 = (function (){var statearr_13811 = state_13774;
(statearr_13811[(9)] = inst_13717);

(statearr_13811[(20)] = inst_13714);

(statearr_13811[(10)] = inst_13715);

(statearr_13811[(21)] = inst_13716);

(statearr_13811[(27)] = inst_13749);

return statearr_13811;
})();
var statearr_13812_13883 = state_13774__$1;
(statearr_13812_13883[(2)] = null);

(statearr_13812_13883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (43))){
var state_13774__$1 = state_13774;
var statearr_13813_13884 = state_13774__$1;
(statearr_13813_13884[(2)] = null);

(statearr_13813_13884[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (29))){
var inst_13758 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13814_13885 = state_13774__$1;
(statearr_13814_13885[(2)] = inst_13758);

(statearr_13814_13885[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (44))){
var inst_13767 = (state_13774[(2)]);
var state_13774__$1 = (function (){var statearr_13815 = state_13774;
(statearr_13815[(28)] = inst_13767);

return statearr_13815;
})();
var statearr_13816_13886 = state_13774__$1;
(statearr_13816_13886[(2)] = null);

(statearr_13816_13886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (6))){
var inst_13706 = (state_13774[(29)]);
var inst_13705 = cljs.core.deref.call(null,cs);
var inst_13706__$1 = cljs.core.keys.call(null,inst_13705);
var inst_13707 = cljs.core.count.call(null,inst_13706__$1);
var inst_13708 = cljs.core.reset_BANG_.call(null,dctr,inst_13707);
var inst_13713 = cljs.core.seq.call(null,inst_13706__$1);
var inst_13714 = inst_13713;
var inst_13715 = null;
var inst_13716 = (0);
var inst_13717 = (0);
var state_13774__$1 = (function (){var statearr_13817 = state_13774;
(statearr_13817[(9)] = inst_13717);

(statearr_13817[(20)] = inst_13714);

(statearr_13817[(30)] = inst_13708);

(statearr_13817[(29)] = inst_13706__$1);

(statearr_13817[(10)] = inst_13715);

(statearr_13817[(21)] = inst_13716);

return statearr_13817;
})();
var statearr_13818_13887 = state_13774__$1;
(statearr_13818_13887[(2)] = null);

(statearr_13818_13887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (28))){
var inst_13714 = (state_13774[(20)]);
var inst_13733 = (state_13774[(25)]);
var inst_13733__$1 = cljs.core.seq.call(null,inst_13714);
var state_13774__$1 = (function (){var statearr_13819 = state_13774;
(statearr_13819[(25)] = inst_13733__$1);

return statearr_13819;
})();
if(inst_13733__$1){
var statearr_13820_13888 = state_13774__$1;
(statearr_13820_13888[(1)] = (33));

} else {
var statearr_13821_13889 = state_13774__$1;
(statearr_13821_13889[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (25))){
var inst_13717 = (state_13774[(9)]);
var inst_13716 = (state_13774[(21)]);
var inst_13719 = (inst_13717 < inst_13716);
var inst_13720 = inst_13719;
var state_13774__$1 = state_13774;
if(cljs.core.truth_(inst_13720)){
var statearr_13822_13890 = state_13774__$1;
(statearr_13822_13890[(1)] = (27));

} else {
var statearr_13823_13891 = state_13774__$1;
(statearr_13823_13891[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (34))){
var state_13774__$1 = state_13774;
var statearr_13824_13892 = state_13774__$1;
(statearr_13824_13892[(2)] = null);

(statearr_13824_13892[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (17))){
var state_13774__$1 = state_13774;
var statearr_13825_13893 = state_13774__$1;
(statearr_13825_13893[(2)] = null);

(statearr_13825_13893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (3))){
var inst_13772 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13774__$1,inst_13772);
} else {
if((state_val_13775 === (12))){
var inst_13701 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13826_13894 = state_13774__$1;
(statearr_13826_13894[(2)] = inst_13701);

(statearr_13826_13894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (2))){
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13774__$1,(4),ch);
} else {
if((state_val_13775 === (23))){
var state_13774__$1 = state_13774;
var statearr_13827_13895 = state_13774__$1;
(statearr_13827_13895[(2)] = null);

(statearr_13827_13895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (35))){
var inst_13756 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13828_13896 = state_13774__$1;
(statearr_13828_13896[(2)] = inst_13756);

(statearr_13828_13896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (19))){
var inst_13675 = (state_13774[(7)]);
var inst_13679 = cljs.core.chunk_first.call(null,inst_13675);
var inst_13680 = cljs.core.chunk_rest.call(null,inst_13675);
var inst_13681 = cljs.core.count.call(null,inst_13679);
var inst_13655 = inst_13680;
var inst_13656 = inst_13679;
var inst_13657 = inst_13681;
var inst_13658 = (0);
var state_13774__$1 = (function (){var statearr_13829 = state_13774;
(statearr_13829[(13)] = inst_13655);

(statearr_13829[(14)] = inst_13658);

(statearr_13829[(15)] = inst_13656);

(statearr_13829[(16)] = inst_13657);

return statearr_13829;
})();
var statearr_13830_13897 = state_13774__$1;
(statearr_13830_13897[(2)] = null);

(statearr_13830_13897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (11))){
var inst_13655 = (state_13774[(13)]);
var inst_13675 = (state_13774[(7)]);
var inst_13675__$1 = cljs.core.seq.call(null,inst_13655);
var state_13774__$1 = (function (){var statearr_13831 = state_13774;
(statearr_13831[(7)] = inst_13675__$1);

return statearr_13831;
})();
if(inst_13675__$1){
var statearr_13832_13898 = state_13774__$1;
(statearr_13832_13898[(1)] = (16));

} else {
var statearr_13833_13899 = state_13774__$1;
(statearr_13833_13899[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (9))){
var inst_13703 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13834_13900 = state_13774__$1;
(statearr_13834_13900[(2)] = inst_13703);

(statearr_13834_13900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (5))){
var inst_13653 = cljs.core.deref.call(null,cs);
var inst_13654 = cljs.core.seq.call(null,inst_13653);
var inst_13655 = inst_13654;
var inst_13656 = null;
var inst_13657 = (0);
var inst_13658 = (0);
var state_13774__$1 = (function (){var statearr_13835 = state_13774;
(statearr_13835[(13)] = inst_13655);

(statearr_13835[(14)] = inst_13658);

(statearr_13835[(15)] = inst_13656);

(statearr_13835[(16)] = inst_13657);

return statearr_13835;
})();
var statearr_13836_13901 = state_13774__$1;
(statearr_13836_13901[(2)] = null);

(statearr_13836_13901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (14))){
var state_13774__$1 = state_13774;
var statearr_13837_13902 = state_13774__$1;
(statearr_13837_13902[(2)] = null);

(statearr_13837_13902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (45))){
var inst_13764 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13838_13903 = state_13774__$1;
(statearr_13838_13903[(2)] = inst_13764);

(statearr_13838_13903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (26))){
var inst_13706 = (state_13774[(29)]);
var inst_13760 = (state_13774[(2)]);
var inst_13761 = cljs.core.seq.call(null,inst_13706);
var state_13774__$1 = (function (){var statearr_13839 = state_13774;
(statearr_13839[(31)] = inst_13760);

return statearr_13839;
})();
if(inst_13761){
var statearr_13840_13904 = state_13774__$1;
(statearr_13840_13904[(1)] = (42));

} else {
var statearr_13841_13905 = state_13774__$1;
(statearr_13841_13905[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (16))){
var inst_13675 = (state_13774[(7)]);
var inst_13677 = cljs.core.chunked_seq_QMARK_.call(null,inst_13675);
var state_13774__$1 = state_13774;
if(inst_13677){
var statearr_13842_13906 = state_13774__$1;
(statearr_13842_13906[(1)] = (19));

} else {
var statearr_13843_13907 = state_13774__$1;
(statearr_13843_13907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (38))){
var inst_13753 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13844_13908 = state_13774__$1;
(statearr_13844_13908[(2)] = inst_13753);

(statearr_13844_13908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (30))){
var state_13774__$1 = state_13774;
var statearr_13845_13909 = state_13774__$1;
(statearr_13845_13909[(2)] = null);

(statearr_13845_13909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (10))){
var inst_13658 = (state_13774[(14)]);
var inst_13656 = (state_13774[(15)]);
var inst_13664 = cljs.core._nth.call(null,inst_13656,inst_13658);
var inst_13665 = cljs.core.nth.call(null,inst_13664,(0),null);
var inst_13666 = cljs.core.nth.call(null,inst_13664,(1),null);
var state_13774__$1 = (function (){var statearr_13846 = state_13774;
(statearr_13846[(26)] = inst_13665);

return statearr_13846;
})();
if(cljs.core.truth_(inst_13666)){
var statearr_13847_13910 = state_13774__$1;
(statearr_13847_13910[(1)] = (13));

} else {
var statearr_13848_13911 = state_13774__$1;
(statearr_13848_13911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (18))){
var inst_13699 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13849_13912 = state_13774__$1;
(statearr_13849_13912[(2)] = inst_13699);

(statearr_13849_13912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (42))){
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13774__$1,(45),dchan);
} else {
if((state_val_13775 === (37))){
var inst_13742 = (state_13774[(23)]);
var inst_13733 = (state_13774[(25)]);
var inst_13646 = (state_13774[(12)]);
var inst_13742__$1 = cljs.core.first.call(null,inst_13733);
var inst_13743 = cljs.core.async.put_BANG_.call(null,inst_13742__$1,inst_13646,done);
var state_13774__$1 = (function (){var statearr_13850 = state_13774;
(statearr_13850[(23)] = inst_13742__$1);

return statearr_13850;
})();
if(cljs.core.truth_(inst_13743)){
var statearr_13851_13913 = state_13774__$1;
(statearr_13851_13913[(1)] = (39));

} else {
var statearr_13852_13914 = state_13774__$1;
(statearr_13852_13914[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (8))){
var inst_13658 = (state_13774[(14)]);
var inst_13657 = (state_13774[(16)]);
var inst_13660 = (inst_13658 < inst_13657);
var inst_13661 = inst_13660;
var state_13774__$1 = state_13774;
if(cljs.core.truth_(inst_13661)){
var statearr_13853_13915 = state_13774__$1;
(statearr_13853_13915[(1)] = (10));

} else {
var statearr_13854_13916 = state_13774__$1;
(statearr_13854_13916[(1)] = (11));

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
});})(c__12555__auto___13862,cs,m,dchan,dctr,done))
;
return ((function (switch__12443__auto__,c__12555__auto___13862,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12444__auto__ = null;
var cljs$core$async$mult_$_state_machine__12444__auto____0 = (function (){
var statearr_13858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13858[(0)] = cljs$core$async$mult_$_state_machine__12444__auto__);

(statearr_13858[(1)] = (1));

return statearr_13858;
});
var cljs$core$async$mult_$_state_machine__12444__auto____1 = (function (state_13774){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_13774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e13859){if((e13859 instanceof Object)){
var ex__12447__auto__ = e13859;
var statearr_13860_13917 = state_13774;
(statearr_13860_13917[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13918 = state_13774;
state_13774 = G__13918;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12444__auto__ = function(state_13774){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12444__auto____1.call(this,state_13774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12444__auto____0;
cljs$core$async$mult_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12444__auto____1;
return cljs$core$async$mult_$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___13862,cs,m,dchan,dctr,done))
})();
var state__12557__auto__ = (function (){var statearr_13861 = f__12556__auto__.call(null);
(statearr_13861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___13862);

return statearr_13861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___13862,cs,m,dchan,dctr,done))
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
var args13919 = [];
var len__7214__auto___13922 = arguments.length;
var i__7215__auto___13923 = (0);
while(true){
if((i__7215__auto___13923 < len__7214__auto___13922)){
args13919.push((arguments[i__7215__auto___13923]));

var G__13924 = (i__7215__auto___13923 + (1));
i__7215__auto___13923 = G__13924;
continue;
} else {
}
break;
}

var G__13921 = args13919.length;
switch (G__13921) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13919.length)].join('')));

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
var len__7214__auto___13936 = arguments.length;
var i__7215__auto___13937 = (0);
while(true){
if((i__7215__auto___13937 < len__7214__auto___13936)){
args__7221__auto__.push((arguments[i__7215__auto___13937]));

var G__13938 = (i__7215__auto___13937 + (1));
i__7215__auto___13937 = G__13938;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13930){
var map__13931 = p__13930;
var map__13931__$1 = ((((!((map__13931 == null)))?((((map__13931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13931):map__13931);
var opts = map__13931__$1;
var statearr_13933_13939 = state;
(statearr_13933_13939[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13931,map__13931__$1,opts){
return (function (val){
var statearr_13934_13940 = state;
(statearr_13934_13940[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13931,map__13931__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13935_13941 = state;
(statearr_13935_13941[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13926){
var G__13927 = cljs.core.first.call(null,seq13926);
var seq13926__$1 = cljs.core.next.call(null,seq13926);
var G__13928 = cljs.core.first.call(null,seq13926__$1);
var seq13926__$2 = cljs.core.next.call(null,seq13926__$1);
var G__13929 = cljs.core.first.call(null,seq13926__$2);
var seq13926__$3 = cljs.core.next.call(null,seq13926__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13927,G__13928,G__13929,seq13926__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14105 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14106){
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
this.meta14106 = meta14106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14107,meta14106__$1){
var self__ = this;
var _14107__$1 = this;
return (new cljs.core.async.t_cljs$core$async14105(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14106__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14107){
var self__ = this;
var _14107__$1 = this;
return self__.meta14106;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14105.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14105.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14106","meta14106",414709992,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14105";

cljs.core.async.t_cljs$core$async14105.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14105");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14105 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14105(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14106){
return (new cljs.core.async.t_cljs$core$async14105(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14106));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14105(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12555__auto___14268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___14268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___14268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14205){
var state_val_14206 = (state_14205[(1)]);
if((state_val_14206 === (7))){
var inst_14123 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14207_14269 = state_14205__$1;
(statearr_14207_14269[(2)] = inst_14123);

(statearr_14207_14269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (20))){
var inst_14135 = (state_14205[(7)]);
var state_14205__$1 = state_14205;
var statearr_14208_14270 = state_14205__$1;
(statearr_14208_14270[(2)] = inst_14135);

(statearr_14208_14270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (27))){
var state_14205__$1 = state_14205;
var statearr_14209_14271 = state_14205__$1;
(statearr_14209_14271[(2)] = null);

(statearr_14209_14271[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (1))){
var inst_14111 = (state_14205[(8)]);
var inst_14111__$1 = calc_state.call(null);
var inst_14113 = (inst_14111__$1 == null);
var inst_14114 = cljs.core.not.call(null,inst_14113);
var state_14205__$1 = (function (){var statearr_14210 = state_14205;
(statearr_14210[(8)] = inst_14111__$1);

return statearr_14210;
})();
if(inst_14114){
var statearr_14211_14272 = state_14205__$1;
(statearr_14211_14272[(1)] = (2));

} else {
var statearr_14212_14273 = state_14205__$1;
(statearr_14212_14273[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (24))){
var inst_14165 = (state_14205[(9)]);
var inst_14158 = (state_14205[(10)]);
var inst_14179 = (state_14205[(11)]);
var inst_14179__$1 = inst_14158.call(null,inst_14165);
var state_14205__$1 = (function (){var statearr_14213 = state_14205;
(statearr_14213[(11)] = inst_14179__$1);

return statearr_14213;
})();
if(cljs.core.truth_(inst_14179__$1)){
var statearr_14214_14274 = state_14205__$1;
(statearr_14214_14274[(1)] = (29));

} else {
var statearr_14215_14275 = state_14205__$1;
(statearr_14215_14275[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (4))){
var inst_14126 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14126)){
var statearr_14216_14276 = state_14205__$1;
(statearr_14216_14276[(1)] = (8));

} else {
var statearr_14217_14277 = state_14205__$1;
(statearr_14217_14277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (15))){
var inst_14152 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14152)){
var statearr_14218_14278 = state_14205__$1;
(statearr_14218_14278[(1)] = (19));

} else {
var statearr_14219_14279 = state_14205__$1;
(statearr_14219_14279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (21))){
var inst_14157 = (state_14205[(12)]);
var inst_14157__$1 = (state_14205[(2)]);
var inst_14158 = cljs.core.get.call(null,inst_14157__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14159 = cljs.core.get.call(null,inst_14157__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14160 = cljs.core.get.call(null,inst_14157__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14205__$1 = (function (){var statearr_14220 = state_14205;
(statearr_14220[(12)] = inst_14157__$1);

(statearr_14220[(13)] = inst_14159);

(statearr_14220[(10)] = inst_14158);

return statearr_14220;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14205__$1,(22),inst_14160);
} else {
if((state_val_14206 === (31))){
var inst_14187 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14187)){
var statearr_14221_14280 = state_14205__$1;
(statearr_14221_14280[(1)] = (32));

} else {
var statearr_14222_14281 = state_14205__$1;
(statearr_14222_14281[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (32))){
var inst_14164 = (state_14205[(14)]);
var state_14205__$1 = state_14205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14205__$1,(35),out,inst_14164);
} else {
if((state_val_14206 === (33))){
var inst_14157 = (state_14205[(12)]);
var inst_14135 = inst_14157;
var state_14205__$1 = (function (){var statearr_14223 = state_14205;
(statearr_14223[(7)] = inst_14135);

return statearr_14223;
})();
var statearr_14224_14282 = state_14205__$1;
(statearr_14224_14282[(2)] = null);

(statearr_14224_14282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (13))){
var inst_14135 = (state_14205[(7)]);
var inst_14142 = inst_14135.cljs$lang$protocol_mask$partition0$;
var inst_14143 = (inst_14142 & (64));
var inst_14144 = inst_14135.cljs$core$ISeq$;
var inst_14145 = (inst_14143) || (inst_14144);
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14145)){
var statearr_14225_14283 = state_14205__$1;
(statearr_14225_14283[(1)] = (16));

} else {
var statearr_14226_14284 = state_14205__$1;
(statearr_14226_14284[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (22))){
var inst_14165 = (state_14205[(9)]);
var inst_14164 = (state_14205[(14)]);
var inst_14163 = (state_14205[(2)]);
var inst_14164__$1 = cljs.core.nth.call(null,inst_14163,(0),null);
var inst_14165__$1 = cljs.core.nth.call(null,inst_14163,(1),null);
var inst_14166 = (inst_14164__$1 == null);
var inst_14167 = cljs.core._EQ_.call(null,inst_14165__$1,change);
var inst_14168 = (inst_14166) || (inst_14167);
var state_14205__$1 = (function (){var statearr_14227 = state_14205;
(statearr_14227[(9)] = inst_14165__$1);

(statearr_14227[(14)] = inst_14164__$1);

return statearr_14227;
})();
if(cljs.core.truth_(inst_14168)){
var statearr_14228_14285 = state_14205__$1;
(statearr_14228_14285[(1)] = (23));

} else {
var statearr_14229_14286 = state_14205__$1;
(statearr_14229_14286[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (36))){
var inst_14157 = (state_14205[(12)]);
var inst_14135 = inst_14157;
var state_14205__$1 = (function (){var statearr_14230 = state_14205;
(statearr_14230[(7)] = inst_14135);

return statearr_14230;
})();
var statearr_14231_14287 = state_14205__$1;
(statearr_14231_14287[(2)] = null);

(statearr_14231_14287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (29))){
var inst_14179 = (state_14205[(11)]);
var state_14205__$1 = state_14205;
var statearr_14232_14288 = state_14205__$1;
(statearr_14232_14288[(2)] = inst_14179);

(statearr_14232_14288[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (6))){
var state_14205__$1 = state_14205;
var statearr_14233_14289 = state_14205__$1;
(statearr_14233_14289[(2)] = false);

(statearr_14233_14289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (28))){
var inst_14175 = (state_14205[(2)]);
var inst_14176 = calc_state.call(null);
var inst_14135 = inst_14176;
var state_14205__$1 = (function (){var statearr_14234 = state_14205;
(statearr_14234[(15)] = inst_14175);

(statearr_14234[(7)] = inst_14135);

return statearr_14234;
})();
var statearr_14235_14290 = state_14205__$1;
(statearr_14235_14290[(2)] = null);

(statearr_14235_14290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (25))){
var inst_14201 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14236_14291 = state_14205__$1;
(statearr_14236_14291[(2)] = inst_14201);

(statearr_14236_14291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (34))){
var inst_14199 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14237_14292 = state_14205__$1;
(statearr_14237_14292[(2)] = inst_14199);

(statearr_14237_14292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (17))){
var state_14205__$1 = state_14205;
var statearr_14238_14293 = state_14205__$1;
(statearr_14238_14293[(2)] = false);

(statearr_14238_14293[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (3))){
var state_14205__$1 = state_14205;
var statearr_14239_14294 = state_14205__$1;
(statearr_14239_14294[(2)] = false);

(statearr_14239_14294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (12))){
var inst_14203 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14205__$1,inst_14203);
} else {
if((state_val_14206 === (2))){
var inst_14111 = (state_14205[(8)]);
var inst_14116 = inst_14111.cljs$lang$protocol_mask$partition0$;
var inst_14117 = (inst_14116 & (64));
var inst_14118 = inst_14111.cljs$core$ISeq$;
var inst_14119 = (inst_14117) || (inst_14118);
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14119)){
var statearr_14240_14295 = state_14205__$1;
(statearr_14240_14295[(1)] = (5));

} else {
var statearr_14241_14296 = state_14205__$1;
(statearr_14241_14296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (23))){
var inst_14164 = (state_14205[(14)]);
var inst_14170 = (inst_14164 == null);
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14170)){
var statearr_14242_14297 = state_14205__$1;
(statearr_14242_14297[(1)] = (26));

} else {
var statearr_14243_14298 = state_14205__$1;
(statearr_14243_14298[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (35))){
var inst_14190 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
if(cljs.core.truth_(inst_14190)){
var statearr_14244_14299 = state_14205__$1;
(statearr_14244_14299[(1)] = (36));

} else {
var statearr_14245_14300 = state_14205__$1;
(statearr_14245_14300[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (19))){
var inst_14135 = (state_14205[(7)]);
var inst_14154 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14135);
var state_14205__$1 = state_14205;
var statearr_14246_14301 = state_14205__$1;
(statearr_14246_14301[(2)] = inst_14154);

(statearr_14246_14301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (11))){
var inst_14135 = (state_14205[(7)]);
var inst_14139 = (inst_14135 == null);
var inst_14140 = cljs.core.not.call(null,inst_14139);
var state_14205__$1 = state_14205;
if(inst_14140){
var statearr_14247_14302 = state_14205__$1;
(statearr_14247_14302[(1)] = (13));

} else {
var statearr_14248_14303 = state_14205__$1;
(statearr_14248_14303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (9))){
var inst_14111 = (state_14205[(8)]);
var state_14205__$1 = state_14205;
var statearr_14249_14304 = state_14205__$1;
(statearr_14249_14304[(2)] = inst_14111);

(statearr_14249_14304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (5))){
var state_14205__$1 = state_14205;
var statearr_14250_14305 = state_14205__$1;
(statearr_14250_14305[(2)] = true);

(statearr_14250_14305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (14))){
var state_14205__$1 = state_14205;
var statearr_14251_14306 = state_14205__$1;
(statearr_14251_14306[(2)] = false);

(statearr_14251_14306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (26))){
var inst_14165 = (state_14205[(9)]);
var inst_14172 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14165);
var state_14205__$1 = state_14205;
var statearr_14252_14307 = state_14205__$1;
(statearr_14252_14307[(2)] = inst_14172);

(statearr_14252_14307[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (16))){
var state_14205__$1 = state_14205;
var statearr_14253_14308 = state_14205__$1;
(statearr_14253_14308[(2)] = true);

(statearr_14253_14308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (38))){
var inst_14195 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14254_14309 = state_14205__$1;
(statearr_14254_14309[(2)] = inst_14195);

(statearr_14254_14309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (30))){
var inst_14159 = (state_14205[(13)]);
var inst_14165 = (state_14205[(9)]);
var inst_14158 = (state_14205[(10)]);
var inst_14182 = cljs.core.empty_QMARK_.call(null,inst_14158);
var inst_14183 = inst_14159.call(null,inst_14165);
var inst_14184 = cljs.core.not.call(null,inst_14183);
var inst_14185 = (inst_14182) && (inst_14184);
var state_14205__$1 = state_14205;
var statearr_14255_14310 = state_14205__$1;
(statearr_14255_14310[(2)] = inst_14185);

(statearr_14255_14310[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (10))){
var inst_14111 = (state_14205[(8)]);
var inst_14131 = (state_14205[(2)]);
var inst_14132 = cljs.core.get.call(null,inst_14131,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14133 = cljs.core.get.call(null,inst_14131,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14134 = cljs.core.get.call(null,inst_14131,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14135 = inst_14111;
var state_14205__$1 = (function (){var statearr_14256 = state_14205;
(statearr_14256[(16)] = inst_14134);

(statearr_14256[(17)] = inst_14133);

(statearr_14256[(7)] = inst_14135);

(statearr_14256[(18)] = inst_14132);

return statearr_14256;
})();
var statearr_14257_14311 = state_14205__$1;
(statearr_14257_14311[(2)] = null);

(statearr_14257_14311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (18))){
var inst_14149 = (state_14205[(2)]);
var state_14205__$1 = state_14205;
var statearr_14258_14312 = state_14205__$1;
(statearr_14258_14312[(2)] = inst_14149);

(statearr_14258_14312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (37))){
var state_14205__$1 = state_14205;
var statearr_14259_14313 = state_14205__$1;
(statearr_14259_14313[(2)] = null);

(statearr_14259_14313[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14206 === (8))){
var inst_14111 = (state_14205[(8)]);
var inst_14128 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14111);
var state_14205__$1 = state_14205;
var statearr_14260_14314 = state_14205__$1;
(statearr_14260_14314[(2)] = inst_14128);

(statearr_14260_14314[(1)] = (10));


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
});})(c__12555__auto___14268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12443__auto__,c__12555__auto___14268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12444__auto__ = null;
var cljs$core$async$mix_$_state_machine__12444__auto____0 = (function (){
var statearr_14264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14264[(0)] = cljs$core$async$mix_$_state_machine__12444__auto__);

(statearr_14264[(1)] = (1));

return statearr_14264;
});
var cljs$core$async$mix_$_state_machine__12444__auto____1 = (function (state_14205){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_14205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e14265){if((e14265 instanceof Object)){
var ex__12447__auto__ = e14265;
var statearr_14266_14315 = state_14205;
(statearr_14266_14315[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14316 = state_14205;
state_14205 = G__14316;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12444__auto__ = function(state_14205){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12444__auto____1.call(this,state_14205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12444__auto____0;
cljs$core$async$mix_$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12444__auto____1;
return cljs$core$async$mix_$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___14268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12557__auto__ = (function (){var statearr_14267 = f__12556__auto__.call(null);
(statearr_14267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___14268);

return statearr_14267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___14268,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args14317 = [];
var len__7214__auto___14320 = arguments.length;
var i__7215__auto___14321 = (0);
while(true){
if((i__7215__auto___14321 < len__7214__auto___14320)){
args14317.push((arguments[i__7215__auto___14321]));

var G__14322 = (i__7215__auto___14321 + (1));
i__7215__auto___14321 = G__14322;
continue;
} else {
}
break;
}

var G__14319 = args14317.length;
switch (G__14319) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14317.length)].join('')));

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
var args14325 = [];
var len__7214__auto___14450 = arguments.length;
var i__7215__auto___14451 = (0);
while(true){
if((i__7215__auto___14451 < len__7214__auto___14450)){
args14325.push((arguments[i__7215__auto___14451]));

var G__14452 = (i__7215__auto___14451 + (1));
i__7215__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var G__14327 = args14325.length;
switch (G__14327) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14325.length)].join('')));

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
return (function (p1__14324_SHARP_){
if(cljs.core.truth_(p1__14324_SHARP_.call(null,topic))){
return p1__14324_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14324_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14328 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14329){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14329 = meta14329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14330,meta14329__$1){
var self__ = this;
var _14330__$1 = this;
return (new cljs.core.async.t_cljs$core$async14328(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14329__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14330){
var self__ = this;
var _14330__$1 = this;
return self__.meta14329;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14328.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14329","meta14329",-2055014370,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14328";

cljs.core.async.t_cljs$core$async14328.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14328");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14328 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14328(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14329){
return (new cljs.core.async.t_cljs$core$async14328(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14329));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14328(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12555__auto___14454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___14454,mults,ensure_mult,p){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___14454,mults,ensure_mult,p){
return (function (state_14402){
var state_val_14403 = (state_14402[(1)]);
if((state_val_14403 === (7))){
var inst_14398 = (state_14402[(2)]);
var state_14402__$1 = state_14402;
var statearr_14404_14455 = state_14402__$1;
(statearr_14404_14455[(2)] = inst_14398);

(statearr_14404_14455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (20))){
var state_14402__$1 = state_14402;
var statearr_14405_14456 = state_14402__$1;
(statearr_14405_14456[(2)] = null);

(statearr_14405_14456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (1))){
var state_14402__$1 = state_14402;
var statearr_14406_14457 = state_14402__$1;
(statearr_14406_14457[(2)] = null);

(statearr_14406_14457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (24))){
var inst_14381 = (state_14402[(7)]);
var inst_14390 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14381);
var state_14402__$1 = state_14402;
var statearr_14407_14458 = state_14402__$1;
(statearr_14407_14458[(2)] = inst_14390);

(statearr_14407_14458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (4))){
var inst_14333 = (state_14402[(8)]);
var inst_14333__$1 = (state_14402[(2)]);
var inst_14334 = (inst_14333__$1 == null);
var state_14402__$1 = (function (){var statearr_14408 = state_14402;
(statearr_14408[(8)] = inst_14333__$1);

return statearr_14408;
})();
if(cljs.core.truth_(inst_14334)){
var statearr_14409_14459 = state_14402__$1;
(statearr_14409_14459[(1)] = (5));

} else {
var statearr_14410_14460 = state_14402__$1;
(statearr_14410_14460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (15))){
var inst_14375 = (state_14402[(2)]);
var state_14402__$1 = state_14402;
var statearr_14411_14461 = state_14402__$1;
(statearr_14411_14461[(2)] = inst_14375);

(statearr_14411_14461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (21))){
var inst_14395 = (state_14402[(2)]);
var state_14402__$1 = (function (){var statearr_14412 = state_14402;
(statearr_14412[(9)] = inst_14395);

return statearr_14412;
})();
var statearr_14413_14462 = state_14402__$1;
(statearr_14413_14462[(2)] = null);

(statearr_14413_14462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (13))){
var inst_14357 = (state_14402[(10)]);
var inst_14359 = cljs.core.chunked_seq_QMARK_.call(null,inst_14357);
var state_14402__$1 = state_14402;
if(inst_14359){
var statearr_14414_14463 = state_14402__$1;
(statearr_14414_14463[(1)] = (16));

} else {
var statearr_14415_14464 = state_14402__$1;
(statearr_14415_14464[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (22))){
var inst_14387 = (state_14402[(2)]);
var state_14402__$1 = state_14402;
if(cljs.core.truth_(inst_14387)){
var statearr_14416_14465 = state_14402__$1;
(statearr_14416_14465[(1)] = (23));

} else {
var statearr_14417_14466 = state_14402__$1;
(statearr_14417_14466[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (6))){
var inst_14333 = (state_14402[(8)]);
var inst_14383 = (state_14402[(11)]);
var inst_14381 = (state_14402[(7)]);
var inst_14381__$1 = topic_fn.call(null,inst_14333);
var inst_14382 = cljs.core.deref.call(null,mults);
var inst_14383__$1 = cljs.core.get.call(null,inst_14382,inst_14381__$1);
var state_14402__$1 = (function (){var statearr_14418 = state_14402;
(statearr_14418[(11)] = inst_14383__$1);

(statearr_14418[(7)] = inst_14381__$1);

return statearr_14418;
})();
if(cljs.core.truth_(inst_14383__$1)){
var statearr_14419_14467 = state_14402__$1;
(statearr_14419_14467[(1)] = (19));

} else {
var statearr_14420_14468 = state_14402__$1;
(statearr_14420_14468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (25))){
var inst_14392 = (state_14402[(2)]);
var state_14402__$1 = state_14402;
var statearr_14421_14469 = state_14402__$1;
(statearr_14421_14469[(2)] = inst_14392);

(statearr_14421_14469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (17))){
var inst_14357 = (state_14402[(10)]);
var inst_14366 = cljs.core.first.call(null,inst_14357);
var inst_14367 = cljs.core.async.muxch_STAR_.call(null,inst_14366);
var inst_14368 = cljs.core.async.close_BANG_.call(null,inst_14367);
var inst_14369 = cljs.core.next.call(null,inst_14357);
var inst_14343 = inst_14369;
var inst_14344 = null;
var inst_14345 = (0);
var inst_14346 = (0);
var state_14402__$1 = (function (){var statearr_14422 = state_14402;
(statearr_14422[(12)] = inst_14368);

(statearr_14422[(13)] = inst_14343);

(statearr_14422[(14)] = inst_14345);

(statearr_14422[(15)] = inst_14344);

(statearr_14422[(16)] = inst_14346);

return statearr_14422;
})();
var statearr_14423_14470 = state_14402__$1;
(statearr_14423_14470[(2)] = null);

(statearr_14423_14470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (3))){
var inst_14400 = (state_14402[(2)]);
var state_14402__$1 = state_14402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14402__$1,inst_14400);
} else {
if((state_val_14403 === (12))){
var inst_14377 = (state_14402[(2)]);
var state_14402__$1 = state_14402;
var statearr_14424_14471 = state_14402__$1;
(statearr_14424_14471[(2)] = inst_14377);

(statearr_14424_14471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (2))){
var state_14402__$1 = state_14402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14402__$1,(4),ch);
} else {
if((state_val_14403 === (23))){
var state_14402__$1 = state_14402;
var statearr_14425_14472 = state_14402__$1;
(statearr_14425_14472[(2)] = null);

(statearr_14425_14472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (19))){
var inst_14333 = (state_14402[(8)]);
var inst_14383 = (state_14402[(11)]);
var inst_14385 = cljs.core.async.muxch_STAR_.call(null,inst_14383);
var state_14402__$1 = state_14402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14402__$1,(22),inst_14385,inst_14333);
} else {
if((state_val_14403 === (11))){
var inst_14343 = (state_14402[(13)]);
var inst_14357 = (state_14402[(10)]);
var inst_14357__$1 = cljs.core.seq.call(null,inst_14343);
var state_14402__$1 = (function (){var statearr_14426 = state_14402;
(statearr_14426[(10)] = inst_14357__$1);

return statearr_14426;
})();
if(inst_14357__$1){
var statearr_14427_14473 = state_14402__$1;
(statearr_14427_14473[(1)] = (13));

} else {
var statearr_14428_14474 = state_14402__$1;
(statearr_14428_14474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (9))){
var inst_14379 = (state_14402[(2)]);
var state_14402__$1 = state_14402;
var statearr_14429_14475 = state_14402__$1;
(statearr_14429_14475[(2)] = inst_14379);

(statearr_14429_14475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (5))){
var inst_14340 = cljs.core.deref.call(null,mults);
var inst_14341 = cljs.core.vals.call(null,inst_14340);
var inst_14342 = cljs.core.seq.call(null,inst_14341);
var inst_14343 = inst_14342;
var inst_14344 = null;
var inst_14345 = (0);
var inst_14346 = (0);
var state_14402__$1 = (function (){var statearr_14430 = state_14402;
(statearr_14430[(13)] = inst_14343);

(statearr_14430[(14)] = inst_14345);

(statearr_14430[(15)] = inst_14344);

(statearr_14430[(16)] = inst_14346);

return statearr_14430;
})();
var statearr_14431_14476 = state_14402__$1;
(statearr_14431_14476[(2)] = null);

(statearr_14431_14476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (14))){
var state_14402__$1 = state_14402;
var statearr_14435_14477 = state_14402__$1;
(statearr_14435_14477[(2)] = null);

(statearr_14435_14477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (16))){
var inst_14357 = (state_14402[(10)]);
var inst_14361 = cljs.core.chunk_first.call(null,inst_14357);
var inst_14362 = cljs.core.chunk_rest.call(null,inst_14357);
var inst_14363 = cljs.core.count.call(null,inst_14361);
var inst_14343 = inst_14362;
var inst_14344 = inst_14361;
var inst_14345 = inst_14363;
var inst_14346 = (0);
var state_14402__$1 = (function (){var statearr_14436 = state_14402;
(statearr_14436[(13)] = inst_14343);

(statearr_14436[(14)] = inst_14345);

(statearr_14436[(15)] = inst_14344);

(statearr_14436[(16)] = inst_14346);

return statearr_14436;
})();
var statearr_14437_14478 = state_14402__$1;
(statearr_14437_14478[(2)] = null);

(statearr_14437_14478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (10))){
var inst_14343 = (state_14402[(13)]);
var inst_14345 = (state_14402[(14)]);
var inst_14344 = (state_14402[(15)]);
var inst_14346 = (state_14402[(16)]);
var inst_14351 = cljs.core._nth.call(null,inst_14344,inst_14346);
var inst_14352 = cljs.core.async.muxch_STAR_.call(null,inst_14351);
var inst_14353 = cljs.core.async.close_BANG_.call(null,inst_14352);
var inst_14354 = (inst_14346 + (1));
var tmp14432 = inst_14343;
var tmp14433 = inst_14345;
var tmp14434 = inst_14344;
var inst_14343__$1 = tmp14432;
var inst_14344__$1 = tmp14434;
var inst_14345__$1 = tmp14433;
var inst_14346__$1 = inst_14354;
var state_14402__$1 = (function (){var statearr_14438 = state_14402;
(statearr_14438[(13)] = inst_14343__$1);

(statearr_14438[(14)] = inst_14345__$1);

(statearr_14438[(17)] = inst_14353);

(statearr_14438[(15)] = inst_14344__$1);

(statearr_14438[(16)] = inst_14346__$1);

return statearr_14438;
})();
var statearr_14439_14479 = state_14402__$1;
(statearr_14439_14479[(2)] = null);

(statearr_14439_14479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (18))){
var inst_14372 = (state_14402[(2)]);
var state_14402__$1 = state_14402;
var statearr_14440_14480 = state_14402__$1;
(statearr_14440_14480[(2)] = inst_14372);

(statearr_14440_14480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14403 === (8))){
var inst_14345 = (state_14402[(14)]);
var inst_14346 = (state_14402[(16)]);
var inst_14348 = (inst_14346 < inst_14345);
var inst_14349 = inst_14348;
var state_14402__$1 = state_14402;
if(cljs.core.truth_(inst_14349)){
var statearr_14441_14481 = state_14402__$1;
(statearr_14441_14481[(1)] = (10));

} else {
var statearr_14442_14482 = state_14402__$1;
(statearr_14442_14482[(1)] = (11));

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
});})(c__12555__auto___14454,mults,ensure_mult,p))
;
return ((function (switch__12443__auto__,c__12555__auto___14454,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_14446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14446[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_14446[(1)] = (1));

return statearr_14446;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_14402){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_14402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e14447){if((e14447 instanceof Object)){
var ex__12447__auto__ = e14447;
var statearr_14448_14483 = state_14402;
(statearr_14448_14483[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14484 = state_14402;
state_14402 = G__14484;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_14402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_14402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___14454,mults,ensure_mult,p))
})();
var state__12557__auto__ = (function (){var statearr_14449 = f__12556__auto__.call(null);
(statearr_14449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___14454);

return statearr_14449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___14454,mults,ensure_mult,p))
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
var args14485 = [];
var len__7214__auto___14488 = arguments.length;
var i__7215__auto___14489 = (0);
while(true){
if((i__7215__auto___14489 < len__7214__auto___14488)){
args14485.push((arguments[i__7215__auto___14489]));

var G__14490 = (i__7215__auto___14489 + (1));
i__7215__auto___14489 = G__14490;
continue;
} else {
}
break;
}

var G__14487 = args14485.length;
switch (G__14487) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14485.length)].join('')));

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
var args14492 = [];
var len__7214__auto___14495 = arguments.length;
var i__7215__auto___14496 = (0);
while(true){
if((i__7215__auto___14496 < len__7214__auto___14495)){
args14492.push((arguments[i__7215__auto___14496]));

var G__14497 = (i__7215__auto___14496 + (1));
i__7215__auto___14496 = G__14497;
continue;
} else {
}
break;
}

var G__14494 = args14492.length;
switch (G__14494) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14492.length)].join('')));

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
var args14499 = [];
var len__7214__auto___14570 = arguments.length;
var i__7215__auto___14571 = (0);
while(true){
if((i__7215__auto___14571 < len__7214__auto___14570)){
args14499.push((arguments[i__7215__auto___14571]));

var G__14572 = (i__7215__auto___14571 + (1));
i__7215__auto___14571 = G__14572;
continue;
} else {
}
break;
}

var G__14501 = args14499.length;
switch (G__14501) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14499.length)].join('')));

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
var c__12555__auto___14574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___14574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___14574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14540){
var state_val_14541 = (state_14540[(1)]);
if((state_val_14541 === (7))){
var state_14540__$1 = state_14540;
var statearr_14542_14575 = state_14540__$1;
(statearr_14542_14575[(2)] = null);

(statearr_14542_14575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (1))){
var state_14540__$1 = state_14540;
var statearr_14543_14576 = state_14540__$1;
(statearr_14543_14576[(2)] = null);

(statearr_14543_14576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (4))){
var inst_14504 = (state_14540[(7)]);
var inst_14506 = (inst_14504 < cnt);
var state_14540__$1 = state_14540;
if(cljs.core.truth_(inst_14506)){
var statearr_14544_14577 = state_14540__$1;
(statearr_14544_14577[(1)] = (6));

} else {
var statearr_14545_14578 = state_14540__$1;
(statearr_14545_14578[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (15))){
var inst_14536 = (state_14540[(2)]);
var state_14540__$1 = state_14540;
var statearr_14546_14579 = state_14540__$1;
(statearr_14546_14579[(2)] = inst_14536);

(statearr_14546_14579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (13))){
var inst_14529 = cljs.core.async.close_BANG_.call(null,out);
var state_14540__$1 = state_14540;
var statearr_14547_14580 = state_14540__$1;
(statearr_14547_14580[(2)] = inst_14529);

(statearr_14547_14580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (6))){
var state_14540__$1 = state_14540;
var statearr_14548_14581 = state_14540__$1;
(statearr_14548_14581[(2)] = null);

(statearr_14548_14581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (3))){
var inst_14538 = (state_14540[(2)]);
var state_14540__$1 = state_14540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14540__$1,inst_14538);
} else {
if((state_val_14541 === (12))){
var inst_14526 = (state_14540[(8)]);
var inst_14526__$1 = (state_14540[(2)]);
var inst_14527 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14526__$1);
var state_14540__$1 = (function (){var statearr_14549 = state_14540;
(statearr_14549[(8)] = inst_14526__$1);

return statearr_14549;
})();
if(cljs.core.truth_(inst_14527)){
var statearr_14550_14582 = state_14540__$1;
(statearr_14550_14582[(1)] = (13));

} else {
var statearr_14551_14583 = state_14540__$1;
(statearr_14551_14583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (2))){
var inst_14503 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14504 = (0);
var state_14540__$1 = (function (){var statearr_14552 = state_14540;
(statearr_14552[(9)] = inst_14503);

(statearr_14552[(7)] = inst_14504);

return statearr_14552;
})();
var statearr_14553_14584 = state_14540__$1;
(statearr_14553_14584[(2)] = null);

(statearr_14553_14584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (11))){
var inst_14504 = (state_14540[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14540,(10),Object,null,(9));
var inst_14513 = chs__$1.call(null,inst_14504);
var inst_14514 = done.call(null,inst_14504);
var inst_14515 = cljs.core.async.take_BANG_.call(null,inst_14513,inst_14514);
var state_14540__$1 = state_14540;
var statearr_14554_14585 = state_14540__$1;
(statearr_14554_14585[(2)] = inst_14515);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14540__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (9))){
var inst_14504 = (state_14540[(7)]);
var inst_14517 = (state_14540[(2)]);
var inst_14518 = (inst_14504 + (1));
var inst_14504__$1 = inst_14518;
var state_14540__$1 = (function (){var statearr_14555 = state_14540;
(statearr_14555[(10)] = inst_14517);

(statearr_14555[(7)] = inst_14504__$1);

return statearr_14555;
})();
var statearr_14556_14586 = state_14540__$1;
(statearr_14556_14586[(2)] = null);

(statearr_14556_14586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (5))){
var inst_14524 = (state_14540[(2)]);
var state_14540__$1 = (function (){var statearr_14557 = state_14540;
(statearr_14557[(11)] = inst_14524);

return statearr_14557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14540__$1,(12),dchan);
} else {
if((state_val_14541 === (14))){
var inst_14526 = (state_14540[(8)]);
var inst_14531 = cljs.core.apply.call(null,f,inst_14526);
var state_14540__$1 = state_14540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14540__$1,(16),out,inst_14531);
} else {
if((state_val_14541 === (16))){
var inst_14533 = (state_14540[(2)]);
var state_14540__$1 = (function (){var statearr_14558 = state_14540;
(statearr_14558[(12)] = inst_14533);

return statearr_14558;
})();
var statearr_14559_14587 = state_14540__$1;
(statearr_14559_14587[(2)] = null);

(statearr_14559_14587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (10))){
var inst_14508 = (state_14540[(2)]);
var inst_14509 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14540__$1 = (function (){var statearr_14560 = state_14540;
(statearr_14560[(13)] = inst_14508);

return statearr_14560;
})();
var statearr_14561_14588 = state_14540__$1;
(statearr_14561_14588[(2)] = inst_14509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14540__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (8))){
var inst_14522 = (state_14540[(2)]);
var state_14540__$1 = state_14540;
var statearr_14562_14589 = state_14540__$1;
(statearr_14562_14589[(2)] = inst_14522);

(statearr_14562_14589[(1)] = (5));


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
});})(c__12555__auto___14574,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12443__auto__,c__12555__auto___14574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_14566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14566[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_14566[(1)] = (1));

return statearr_14566;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_14540){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_14540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e14567){if((e14567 instanceof Object)){
var ex__12447__auto__ = e14567;
var statearr_14568_14590 = state_14540;
(statearr_14568_14590[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14591 = state_14540;
state_14540 = G__14591;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_14540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_14540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___14574,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12557__auto__ = (function (){var statearr_14569 = f__12556__auto__.call(null);
(statearr_14569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___14574);

return statearr_14569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___14574,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14593 = [];
var len__7214__auto___14649 = arguments.length;
var i__7215__auto___14650 = (0);
while(true){
if((i__7215__auto___14650 < len__7214__auto___14649)){
args14593.push((arguments[i__7215__auto___14650]));

var G__14651 = (i__7215__auto___14650 + (1));
i__7215__auto___14650 = G__14651;
continue;
} else {
}
break;
}

var G__14595 = args14593.length;
switch (G__14595) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14593.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12555__auto___14653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___14653,out){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___14653,out){
return (function (state_14625){
var state_val_14626 = (state_14625[(1)]);
if((state_val_14626 === (7))){
var inst_14604 = (state_14625[(7)]);
var inst_14605 = (state_14625[(8)]);
var inst_14604__$1 = (state_14625[(2)]);
var inst_14605__$1 = cljs.core.nth.call(null,inst_14604__$1,(0),null);
var inst_14606 = cljs.core.nth.call(null,inst_14604__$1,(1),null);
var inst_14607 = (inst_14605__$1 == null);
var state_14625__$1 = (function (){var statearr_14627 = state_14625;
(statearr_14627[(7)] = inst_14604__$1);

(statearr_14627[(9)] = inst_14606);

(statearr_14627[(8)] = inst_14605__$1);

return statearr_14627;
})();
if(cljs.core.truth_(inst_14607)){
var statearr_14628_14654 = state_14625__$1;
(statearr_14628_14654[(1)] = (8));

} else {
var statearr_14629_14655 = state_14625__$1;
(statearr_14629_14655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (1))){
var inst_14596 = cljs.core.vec.call(null,chs);
var inst_14597 = inst_14596;
var state_14625__$1 = (function (){var statearr_14630 = state_14625;
(statearr_14630[(10)] = inst_14597);

return statearr_14630;
})();
var statearr_14631_14656 = state_14625__$1;
(statearr_14631_14656[(2)] = null);

(statearr_14631_14656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (4))){
var inst_14597 = (state_14625[(10)]);
var state_14625__$1 = state_14625;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14625__$1,(7),inst_14597);
} else {
if((state_val_14626 === (6))){
var inst_14621 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14632_14657 = state_14625__$1;
(statearr_14632_14657[(2)] = inst_14621);

(statearr_14632_14657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (3))){
var inst_14623 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14625__$1,inst_14623);
} else {
if((state_val_14626 === (2))){
var inst_14597 = (state_14625[(10)]);
var inst_14599 = cljs.core.count.call(null,inst_14597);
var inst_14600 = (inst_14599 > (0));
var state_14625__$1 = state_14625;
if(cljs.core.truth_(inst_14600)){
var statearr_14634_14658 = state_14625__$1;
(statearr_14634_14658[(1)] = (4));

} else {
var statearr_14635_14659 = state_14625__$1;
(statearr_14635_14659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (11))){
var inst_14597 = (state_14625[(10)]);
var inst_14614 = (state_14625[(2)]);
var tmp14633 = inst_14597;
var inst_14597__$1 = tmp14633;
var state_14625__$1 = (function (){var statearr_14636 = state_14625;
(statearr_14636[(11)] = inst_14614);

(statearr_14636[(10)] = inst_14597__$1);

return statearr_14636;
})();
var statearr_14637_14660 = state_14625__$1;
(statearr_14637_14660[(2)] = null);

(statearr_14637_14660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (9))){
var inst_14605 = (state_14625[(8)]);
var state_14625__$1 = state_14625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14625__$1,(11),out,inst_14605);
} else {
if((state_val_14626 === (5))){
var inst_14619 = cljs.core.async.close_BANG_.call(null,out);
var state_14625__$1 = state_14625;
var statearr_14638_14661 = state_14625__$1;
(statearr_14638_14661[(2)] = inst_14619);

(statearr_14638_14661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (10))){
var inst_14617 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14639_14662 = state_14625__$1;
(statearr_14639_14662[(2)] = inst_14617);

(statearr_14639_14662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (8))){
var inst_14604 = (state_14625[(7)]);
var inst_14606 = (state_14625[(9)]);
var inst_14597 = (state_14625[(10)]);
var inst_14605 = (state_14625[(8)]);
var inst_14609 = (function (){var cs = inst_14597;
var vec__14602 = inst_14604;
var v = inst_14605;
var c = inst_14606;
return ((function (cs,vec__14602,v,c,inst_14604,inst_14606,inst_14597,inst_14605,state_val_14626,c__12555__auto___14653,out){
return (function (p1__14592_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14592_SHARP_);
});
;})(cs,vec__14602,v,c,inst_14604,inst_14606,inst_14597,inst_14605,state_val_14626,c__12555__auto___14653,out))
})();
var inst_14610 = cljs.core.filterv.call(null,inst_14609,inst_14597);
var inst_14597__$1 = inst_14610;
var state_14625__$1 = (function (){var statearr_14640 = state_14625;
(statearr_14640[(10)] = inst_14597__$1);

return statearr_14640;
})();
var statearr_14641_14663 = state_14625__$1;
(statearr_14641_14663[(2)] = null);

(statearr_14641_14663[(1)] = (2));


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
});})(c__12555__auto___14653,out))
;
return ((function (switch__12443__auto__,c__12555__auto___14653,out){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_14645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14645[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_14645[(1)] = (1));

return statearr_14645;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_14625){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_14625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e14646){if((e14646 instanceof Object)){
var ex__12447__auto__ = e14646;
var statearr_14647_14664 = state_14625;
(statearr_14647_14664[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14665 = state_14625;
state_14625 = G__14665;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_14625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_14625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___14653,out))
})();
var state__12557__auto__ = (function (){var statearr_14648 = f__12556__auto__.call(null);
(statearr_14648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___14653);

return statearr_14648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___14653,out))
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
var args14666 = [];
var len__7214__auto___14715 = arguments.length;
var i__7215__auto___14716 = (0);
while(true){
if((i__7215__auto___14716 < len__7214__auto___14715)){
args14666.push((arguments[i__7215__auto___14716]));

var G__14717 = (i__7215__auto___14716 + (1));
i__7215__auto___14716 = G__14717;
continue;
} else {
}
break;
}

var G__14668 = args14666.length;
switch (G__14668) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14666.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12555__auto___14719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___14719,out){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___14719,out){
return (function (state_14692){
var state_val_14693 = (state_14692[(1)]);
if((state_val_14693 === (7))){
var inst_14674 = (state_14692[(7)]);
var inst_14674__$1 = (state_14692[(2)]);
var inst_14675 = (inst_14674__$1 == null);
var inst_14676 = cljs.core.not.call(null,inst_14675);
var state_14692__$1 = (function (){var statearr_14694 = state_14692;
(statearr_14694[(7)] = inst_14674__$1);

return statearr_14694;
})();
if(inst_14676){
var statearr_14695_14720 = state_14692__$1;
(statearr_14695_14720[(1)] = (8));

} else {
var statearr_14696_14721 = state_14692__$1;
(statearr_14696_14721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14693 === (1))){
var inst_14669 = (0);
var state_14692__$1 = (function (){var statearr_14697 = state_14692;
(statearr_14697[(8)] = inst_14669);

return statearr_14697;
})();
var statearr_14698_14722 = state_14692__$1;
(statearr_14698_14722[(2)] = null);

(statearr_14698_14722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14693 === (4))){
var state_14692__$1 = state_14692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14692__$1,(7),ch);
} else {
if((state_val_14693 === (6))){
var inst_14687 = (state_14692[(2)]);
var state_14692__$1 = state_14692;
var statearr_14699_14723 = state_14692__$1;
(statearr_14699_14723[(2)] = inst_14687);

(statearr_14699_14723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14693 === (3))){
var inst_14689 = (state_14692[(2)]);
var inst_14690 = cljs.core.async.close_BANG_.call(null,out);
var state_14692__$1 = (function (){var statearr_14700 = state_14692;
(statearr_14700[(9)] = inst_14689);

return statearr_14700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14692__$1,inst_14690);
} else {
if((state_val_14693 === (2))){
var inst_14669 = (state_14692[(8)]);
var inst_14671 = (inst_14669 < n);
var state_14692__$1 = state_14692;
if(cljs.core.truth_(inst_14671)){
var statearr_14701_14724 = state_14692__$1;
(statearr_14701_14724[(1)] = (4));

} else {
var statearr_14702_14725 = state_14692__$1;
(statearr_14702_14725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14693 === (11))){
var inst_14669 = (state_14692[(8)]);
var inst_14679 = (state_14692[(2)]);
var inst_14680 = (inst_14669 + (1));
var inst_14669__$1 = inst_14680;
var state_14692__$1 = (function (){var statearr_14703 = state_14692;
(statearr_14703[(8)] = inst_14669__$1);

(statearr_14703[(10)] = inst_14679);

return statearr_14703;
})();
var statearr_14704_14726 = state_14692__$1;
(statearr_14704_14726[(2)] = null);

(statearr_14704_14726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14693 === (9))){
var state_14692__$1 = state_14692;
var statearr_14705_14727 = state_14692__$1;
(statearr_14705_14727[(2)] = null);

(statearr_14705_14727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14693 === (5))){
var state_14692__$1 = state_14692;
var statearr_14706_14728 = state_14692__$1;
(statearr_14706_14728[(2)] = null);

(statearr_14706_14728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14693 === (10))){
var inst_14684 = (state_14692[(2)]);
var state_14692__$1 = state_14692;
var statearr_14707_14729 = state_14692__$1;
(statearr_14707_14729[(2)] = inst_14684);

(statearr_14707_14729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14693 === (8))){
var inst_14674 = (state_14692[(7)]);
var state_14692__$1 = state_14692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14692__$1,(11),out,inst_14674);
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
});})(c__12555__auto___14719,out))
;
return ((function (switch__12443__auto__,c__12555__auto___14719,out){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_14711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14711[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_14711[(1)] = (1));

return statearr_14711;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_14692){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_14692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e14712){if((e14712 instanceof Object)){
var ex__12447__auto__ = e14712;
var statearr_14713_14730 = state_14692;
(statearr_14713_14730[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14731 = state_14692;
state_14692 = G__14731;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_14692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_14692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___14719,out))
})();
var state__12557__auto__ = (function (){var statearr_14714 = f__12556__auto__.call(null);
(statearr_14714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___14719);

return statearr_14714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___14719,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14739 = (function (map_LT_,f,ch,meta14740){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14740 = meta14740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14741,meta14740__$1){
var self__ = this;
var _14741__$1 = this;
return (new cljs.core.async.t_cljs$core$async14739(self__.map_LT_,self__.f,self__.ch,meta14740__$1));
});

cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14741){
var self__ = this;
var _14741__$1 = this;
return self__.meta14740;
});

cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14742 = (function (map_LT_,f,ch,meta14740,_,fn1,meta14743){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14740 = meta14740;
this._ = _;
this.fn1 = fn1;
this.meta14743 = meta14743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14744,meta14743__$1){
var self__ = this;
var _14744__$1 = this;
return (new cljs.core.async.t_cljs$core$async14742(self__.map_LT_,self__.f,self__.ch,self__.meta14740,self__._,self__.fn1,meta14743__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14744){
var self__ = this;
var _14744__$1 = this;
return self__.meta14743;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14742.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14732_SHARP_){
return f1.call(null,(((p1__14732_SHARP_ == null))?null:self__.f.call(null,p1__14732_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14742.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14740","meta14740",1598199416,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14739","cljs.core.async/t_cljs$core$async14739",-486369528,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14743","meta14743",1918289297,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14742";

cljs.core.async.t_cljs$core$async14742.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14742");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14742 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14742(map_LT___$1,f__$1,ch__$1,meta14740__$1,___$2,fn1__$1,meta14743){
return (new cljs.core.async.t_cljs$core$async14742(map_LT___$1,f__$1,ch__$1,meta14740__$1,___$2,fn1__$1,meta14743));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14742(self__.map_LT_,self__.f,self__.ch,self__.meta14740,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14740","meta14740",1598199416,null)], null);
});

cljs.core.async.t_cljs$core$async14739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14739";

cljs.core.async.t_cljs$core$async14739.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14739");
});

cljs.core.async.__GT_t_cljs$core$async14739 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14739(map_LT___$1,f__$1,ch__$1,meta14740){
return (new cljs.core.async.t_cljs$core$async14739(map_LT___$1,f__$1,ch__$1,meta14740));
});

}

return (new cljs.core.async.t_cljs$core$async14739(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14748 = (function (map_GT_,f,ch,meta14749){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14749 = meta14749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14750,meta14749__$1){
var self__ = this;
var _14750__$1 = this;
return (new cljs.core.async.t_cljs$core$async14748(self__.map_GT_,self__.f,self__.ch,meta14749__$1));
});

cljs.core.async.t_cljs$core$async14748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14750){
var self__ = this;
var _14750__$1 = this;
return self__.meta14749;
});

cljs.core.async.t_cljs$core$async14748.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14749","meta14749",2012168191,null)], null);
});

cljs.core.async.t_cljs$core$async14748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14748";

cljs.core.async.t_cljs$core$async14748.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14748");
});

cljs.core.async.__GT_t_cljs$core$async14748 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14748(map_GT___$1,f__$1,ch__$1,meta14749){
return (new cljs.core.async.t_cljs$core$async14748(map_GT___$1,f__$1,ch__$1,meta14749));
});

}

return (new cljs.core.async.t_cljs$core$async14748(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14754 = (function (filter_GT_,p,ch,meta14755){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14755 = meta14755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14756,meta14755__$1){
var self__ = this;
var _14756__$1 = this;
return (new cljs.core.async.t_cljs$core$async14754(self__.filter_GT_,self__.p,self__.ch,meta14755__$1));
});

cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14756){
var self__ = this;
var _14756__$1 = this;
return self__.meta14755;
});

cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14755","meta14755",725779104,null)], null);
});

cljs.core.async.t_cljs$core$async14754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14754";

cljs.core.async.t_cljs$core$async14754.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14754");
});

cljs.core.async.__GT_t_cljs$core$async14754 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14754(filter_GT___$1,p__$1,ch__$1,meta14755){
return (new cljs.core.async.t_cljs$core$async14754(filter_GT___$1,p__$1,ch__$1,meta14755));
});

}

return (new cljs.core.async.t_cljs$core$async14754(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14757 = [];
var len__7214__auto___14801 = arguments.length;
var i__7215__auto___14802 = (0);
while(true){
if((i__7215__auto___14802 < len__7214__auto___14801)){
args14757.push((arguments[i__7215__auto___14802]));

var G__14803 = (i__7215__auto___14802 + (1));
i__7215__auto___14802 = G__14803;
continue;
} else {
}
break;
}

var G__14759 = args14757.length;
switch (G__14759) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14757.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12555__auto___14805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___14805,out){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___14805,out){
return (function (state_14780){
var state_val_14781 = (state_14780[(1)]);
if((state_val_14781 === (7))){
var inst_14776 = (state_14780[(2)]);
var state_14780__$1 = state_14780;
var statearr_14782_14806 = state_14780__$1;
(statearr_14782_14806[(2)] = inst_14776);

(statearr_14782_14806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (1))){
var state_14780__$1 = state_14780;
var statearr_14783_14807 = state_14780__$1;
(statearr_14783_14807[(2)] = null);

(statearr_14783_14807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (4))){
var inst_14762 = (state_14780[(7)]);
var inst_14762__$1 = (state_14780[(2)]);
var inst_14763 = (inst_14762__$1 == null);
var state_14780__$1 = (function (){var statearr_14784 = state_14780;
(statearr_14784[(7)] = inst_14762__$1);

return statearr_14784;
})();
if(cljs.core.truth_(inst_14763)){
var statearr_14785_14808 = state_14780__$1;
(statearr_14785_14808[(1)] = (5));

} else {
var statearr_14786_14809 = state_14780__$1;
(statearr_14786_14809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (6))){
var inst_14762 = (state_14780[(7)]);
var inst_14767 = p.call(null,inst_14762);
var state_14780__$1 = state_14780;
if(cljs.core.truth_(inst_14767)){
var statearr_14787_14810 = state_14780__$1;
(statearr_14787_14810[(1)] = (8));

} else {
var statearr_14788_14811 = state_14780__$1;
(statearr_14788_14811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (3))){
var inst_14778 = (state_14780[(2)]);
var state_14780__$1 = state_14780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14780__$1,inst_14778);
} else {
if((state_val_14781 === (2))){
var state_14780__$1 = state_14780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14780__$1,(4),ch);
} else {
if((state_val_14781 === (11))){
var inst_14770 = (state_14780[(2)]);
var state_14780__$1 = state_14780;
var statearr_14789_14812 = state_14780__$1;
(statearr_14789_14812[(2)] = inst_14770);

(statearr_14789_14812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (9))){
var state_14780__$1 = state_14780;
var statearr_14790_14813 = state_14780__$1;
(statearr_14790_14813[(2)] = null);

(statearr_14790_14813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (5))){
var inst_14765 = cljs.core.async.close_BANG_.call(null,out);
var state_14780__$1 = state_14780;
var statearr_14791_14814 = state_14780__$1;
(statearr_14791_14814[(2)] = inst_14765);

(statearr_14791_14814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (10))){
var inst_14773 = (state_14780[(2)]);
var state_14780__$1 = (function (){var statearr_14792 = state_14780;
(statearr_14792[(8)] = inst_14773);

return statearr_14792;
})();
var statearr_14793_14815 = state_14780__$1;
(statearr_14793_14815[(2)] = null);

(statearr_14793_14815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14781 === (8))){
var inst_14762 = (state_14780[(7)]);
var state_14780__$1 = state_14780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14780__$1,(11),out,inst_14762);
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
});})(c__12555__auto___14805,out))
;
return ((function (switch__12443__auto__,c__12555__auto___14805,out){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_14797 = [null,null,null,null,null,null,null,null,null];
(statearr_14797[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_14797[(1)] = (1));

return statearr_14797;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_14780){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_14780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e14798){if((e14798 instanceof Object)){
var ex__12447__auto__ = e14798;
var statearr_14799_14816 = state_14780;
(statearr_14799_14816[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14817 = state_14780;
state_14780 = G__14817;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_14780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_14780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___14805,out))
})();
var state__12557__auto__ = (function (){var statearr_14800 = f__12556__auto__.call(null);
(statearr_14800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___14805);

return statearr_14800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___14805,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14818 = [];
var len__7214__auto___14821 = arguments.length;
var i__7215__auto___14822 = (0);
while(true){
if((i__7215__auto___14822 < len__7214__auto___14821)){
args14818.push((arguments[i__7215__auto___14822]));

var G__14823 = (i__7215__auto___14822 + (1));
i__7215__auto___14822 = G__14823;
continue;
} else {
}
break;
}

var G__14820 = args14818.length;
switch (G__14820) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14818.length)].join('')));

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
var c__12555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto__){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto__){
return (function (state_14990){
var state_val_14991 = (state_14990[(1)]);
if((state_val_14991 === (7))){
var inst_14986 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_14992_15033 = state_14990__$1;
(statearr_14992_15033[(2)] = inst_14986);

(statearr_14992_15033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (20))){
var inst_14956 = (state_14990[(7)]);
var inst_14967 = (state_14990[(2)]);
var inst_14968 = cljs.core.next.call(null,inst_14956);
var inst_14942 = inst_14968;
var inst_14943 = null;
var inst_14944 = (0);
var inst_14945 = (0);
var state_14990__$1 = (function (){var statearr_14993 = state_14990;
(statearr_14993[(8)] = inst_14943);

(statearr_14993[(9)] = inst_14945);

(statearr_14993[(10)] = inst_14944);

(statearr_14993[(11)] = inst_14967);

(statearr_14993[(12)] = inst_14942);

return statearr_14993;
})();
var statearr_14994_15034 = state_14990__$1;
(statearr_14994_15034[(2)] = null);

(statearr_14994_15034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (1))){
var state_14990__$1 = state_14990;
var statearr_14995_15035 = state_14990__$1;
(statearr_14995_15035[(2)] = null);

(statearr_14995_15035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (4))){
var inst_14931 = (state_14990[(13)]);
var inst_14931__$1 = (state_14990[(2)]);
var inst_14932 = (inst_14931__$1 == null);
var state_14990__$1 = (function (){var statearr_14996 = state_14990;
(statearr_14996[(13)] = inst_14931__$1);

return statearr_14996;
})();
if(cljs.core.truth_(inst_14932)){
var statearr_14997_15036 = state_14990__$1;
(statearr_14997_15036[(1)] = (5));

} else {
var statearr_14998_15037 = state_14990__$1;
(statearr_14998_15037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (15))){
var state_14990__$1 = state_14990;
var statearr_15002_15038 = state_14990__$1;
(statearr_15002_15038[(2)] = null);

(statearr_15002_15038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (21))){
var state_14990__$1 = state_14990;
var statearr_15003_15039 = state_14990__$1;
(statearr_15003_15039[(2)] = null);

(statearr_15003_15039[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (13))){
var inst_14943 = (state_14990[(8)]);
var inst_14945 = (state_14990[(9)]);
var inst_14944 = (state_14990[(10)]);
var inst_14942 = (state_14990[(12)]);
var inst_14952 = (state_14990[(2)]);
var inst_14953 = (inst_14945 + (1));
var tmp14999 = inst_14943;
var tmp15000 = inst_14944;
var tmp15001 = inst_14942;
var inst_14942__$1 = tmp15001;
var inst_14943__$1 = tmp14999;
var inst_14944__$1 = tmp15000;
var inst_14945__$1 = inst_14953;
var state_14990__$1 = (function (){var statearr_15004 = state_14990;
(statearr_15004[(8)] = inst_14943__$1);

(statearr_15004[(9)] = inst_14945__$1);

(statearr_15004[(10)] = inst_14944__$1);

(statearr_15004[(12)] = inst_14942__$1);

(statearr_15004[(14)] = inst_14952);

return statearr_15004;
})();
var statearr_15005_15040 = state_14990__$1;
(statearr_15005_15040[(2)] = null);

(statearr_15005_15040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (22))){
var state_14990__$1 = state_14990;
var statearr_15006_15041 = state_14990__$1;
(statearr_15006_15041[(2)] = null);

(statearr_15006_15041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (6))){
var inst_14931 = (state_14990[(13)]);
var inst_14940 = f.call(null,inst_14931);
var inst_14941 = cljs.core.seq.call(null,inst_14940);
var inst_14942 = inst_14941;
var inst_14943 = null;
var inst_14944 = (0);
var inst_14945 = (0);
var state_14990__$1 = (function (){var statearr_15007 = state_14990;
(statearr_15007[(8)] = inst_14943);

(statearr_15007[(9)] = inst_14945);

(statearr_15007[(10)] = inst_14944);

(statearr_15007[(12)] = inst_14942);

return statearr_15007;
})();
var statearr_15008_15042 = state_14990__$1;
(statearr_15008_15042[(2)] = null);

(statearr_15008_15042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (17))){
var inst_14956 = (state_14990[(7)]);
var inst_14960 = cljs.core.chunk_first.call(null,inst_14956);
var inst_14961 = cljs.core.chunk_rest.call(null,inst_14956);
var inst_14962 = cljs.core.count.call(null,inst_14960);
var inst_14942 = inst_14961;
var inst_14943 = inst_14960;
var inst_14944 = inst_14962;
var inst_14945 = (0);
var state_14990__$1 = (function (){var statearr_15009 = state_14990;
(statearr_15009[(8)] = inst_14943);

(statearr_15009[(9)] = inst_14945);

(statearr_15009[(10)] = inst_14944);

(statearr_15009[(12)] = inst_14942);

return statearr_15009;
})();
var statearr_15010_15043 = state_14990__$1;
(statearr_15010_15043[(2)] = null);

(statearr_15010_15043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (3))){
var inst_14988 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14990__$1,inst_14988);
} else {
if((state_val_14991 === (12))){
var inst_14976 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15011_15044 = state_14990__$1;
(statearr_15011_15044[(2)] = inst_14976);

(statearr_15011_15044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (2))){
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14990__$1,(4),in$);
} else {
if((state_val_14991 === (23))){
var inst_14984 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15012_15045 = state_14990__$1;
(statearr_15012_15045[(2)] = inst_14984);

(statearr_15012_15045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (19))){
var inst_14971 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15013_15046 = state_14990__$1;
(statearr_15013_15046[(2)] = inst_14971);

(statearr_15013_15046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (11))){
var inst_14942 = (state_14990[(12)]);
var inst_14956 = (state_14990[(7)]);
var inst_14956__$1 = cljs.core.seq.call(null,inst_14942);
var state_14990__$1 = (function (){var statearr_15014 = state_14990;
(statearr_15014[(7)] = inst_14956__$1);

return statearr_15014;
})();
if(inst_14956__$1){
var statearr_15015_15047 = state_14990__$1;
(statearr_15015_15047[(1)] = (14));

} else {
var statearr_15016_15048 = state_14990__$1;
(statearr_15016_15048[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (9))){
var inst_14978 = (state_14990[(2)]);
var inst_14979 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14990__$1 = (function (){var statearr_15017 = state_14990;
(statearr_15017[(15)] = inst_14978);

return statearr_15017;
})();
if(cljs.core.truth_(inst_14979)){
var statearr_15018_15049 = state_14990__$1;
(statearr_15018_15049[(1)] = (21));

} else {
var statearr_15019_15050 = state_14990__$1;
(statearr_15019_15050[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (5))){
var inst_14934 = cljs.core.async.close_BANG_.call(null,out);
var state_14990__$1 = state_14990;
var statearr_15020_15051 = state_14990__$1;
(statearr_15020_15051[(2)] = inst_14934);

(statearr_15020_15051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (14))){
var inst_14956 = (state_14990[(7)]);
var inst_14958 = cljs.core.chunked_seq_QMARK_.call(null,inst_14956);
var state_14990__$1 = state_14990;
if(inst_14958){
var statearr_15021_15052 = state_14990__$1;
(statearr_15021_15052[(1)] = (17));

} else {
var statearr_15022_15053 = state_14990__$1;
(statearr_15022_15053[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (16))){
var inst_14974 = (state_14990[(2)]);
var state_14990__$1 = state_14990;
var statearr_15023_15054 = state_14990__$1;
(statearr_15023_15054[(2)] = inst_14974);

(statearr_15023_15054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (10))){
var inst_14943 = (state_14990[(8)]);
var inst_14945 = (state_14990[(9)]);
var inst_14950 = cljs.core._nth.call(null,inst_14943,inst_14945);
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14990__$1,(13),out,inst_14950);
} else {
if((state_val_14991 === (18))){
var inst_14956 = (state_14990[(7)]);
var inst_14965 = cljs.core.first.call(null,inst_14956);
var state_14990__$1 = state_14990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14990__$1,(20),out,inst_14965);
} else {
if((state_val_14991 === (8))){
var inst_14945 = (state_14990[(9)]);
var inst_14944 = (state_14990[(10)]);
var inst_14947 = (inst_14945 < inst_14944);
var inst_14948 = inst_14947;
var state_14990__$1 = state_14990;
if(cljs.core.truth_(inst_14948)){
var statearr_15024_15055 = state_14990__$1;
(statearr_15024_15055[(1)] = (10));

} else {
var statearr_15025_15056 = state_14990__$1;
(statearr_15025_15056[(1)] = (11));

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
});})(c__12555__auto__))
;
return ((function (switch__12443__auto__,c__12555__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12444__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12444__auto____0 = (function (){
var statearr_15029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15029[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12444__auto__);

(statearr_15029[(1)] = (1));

return statearr_15029;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12444__auto____1 = (function (state_14990){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_14990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e15030){if((e15030 instanceof Object)){
var ex__12447__auto__ = e15030;
var statearr_15031_15057 = state_14990;
(statearr_15031_15057[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15058 = state_14990;
state_14990 = G__15058;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12444__auto__ = function(state_14990){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12444__auto____1.call(this,state_14990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12444__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12444__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto__))
})();
var state__12557__auto__ = (function (){var statearr_15032 = f__12556__auto__.call(null);
(statearr_15032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto__);

return statearr_15032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto__))
);

return c__12555__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15059 = [];
var len__7214__auto___15062 = arguments.length;
var i__7215__auto___15063 = (0);
while(true){
if((i__7215__auto___15063 < len__7214__auto___15062)){
args15059.push((arguments[i__7215__auto___15063]));

var G__15064 = (i__7215__auto___15063 + (1));
i__7215__auto___15063 = G__15064;
continue;
} else {
}
break;
}

var G__15061 = args15059.length;
switch (G__15061) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15059.length)].join('')));

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
var args15066 = [];
var len__7214__auto___15069 = arguments.length;
var i__7215__auto___15070 = (0);
while(true){
if((i__7215__auto___15070 < len__7214__auto___15069)){
args15066.push((arguments[i__7215__auto___15070]));

var G__15071 = (i__7215__auto___15070 + (1));
i__7215__auto___15070 = G__15071;
continue;
} else {
}
break;
}

var G__15068 = args15066.length;
switch (G__15068) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15066.length)].join('')));

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
var args15073 = [];
var len__7214__auto___15124 = arguments.length;
var i__7215__auto___15125 = (0);
while(true){
if((i__7215__auto___15125 < len__7214__auto___15124)){
args15073.push((arguments[i__7215__auto___15125]));

var G__15126 = (i__7215__auto___15125 + (1));
i__7215__auto___15125 = G__15126;
continue;
} else {
}
break;
}

var G__15075 = args15073.length;
switch (G__15075) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15073.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12555__auto___15128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___15128,out){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___15128,out){
return (function (state_15099){
var state_val_15100 = (state_15099[(1)]);
if((state_val_15100 === (7))){
var inst_15094 = (state_15099[(2)]);
var state_15099__$1 = state_15099;
var statearr_15101_15129 = state_15099__$1;
(statearr_15101_15129[(2)] = inst_15094);

(statearr_15101_15129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (1))){
var inst_15076 = null;
var state_15099__$1 = (function (){var statearr_15102 = state_15099;
(statearr_15102[(7)] = inst_15076);

return statearr_15102;
})();
var statearr_15103_15130 = state_15099__$1;
(statearr_15103_15130[(2)] = null);

(statearr_15103_15130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (4))){
var inst_15079 = (state_15099[(8)]);
var inst_15079__$1 = (state_15099[(2)]);
var inst_15080 = (inst_15079__$1 == null);
var inst_15081 = cljs.core.not.call(null,inst_15080);
var state_15099__$1 = (function (){var statearr_15104 = state_15099;
(statearr_15104[(8)] = inst_15079__$1);

return statearr_15104;
})();
if(inst_15081){
var statearr_15105_15131 = state_15099__$1;
(statearr_15105_15131[(1)] = (5));

} else {
var statearr_15106_15132 = state_15099__$1;
(statearr_15106_15132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (6))){
var state_15099__$1 = state_15099;
var statearr_15107_15133 = state_15099__$1;
(statearr_15107_15133[(2)] = null);

(statearr_15107_15133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (3))){
var inst_15096 = (state_15099[(2)]);
var inst_15097 = cljs.core.async.close_BANG_.call(null,out);
var state_15099__$1 = (function (){var statearr_15108 = state_15099;
(statearr_15108[(9)] = inst_15096);

return statearr_15108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15099__$1,inst_15097);
} else {
if((state_val_15100 === (2))){
var state_15099__$1 = state_15099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15099__$1,(4),ch);
} else {
if((state_val_15100 === (11))){
var inst_15079 = (state_15099[(8)]);
var inst_15088 = (state_15099[(2)]);
var inst_15076 = inst_15079;
var state_15099__$1 = (function (){var statearr_15109 = state_15099;
(statearr_15109[(10)] = inst_15088);

(statearr_15109[(7)] = inst_15076);

return statearr_15109;
})();
var statearr_15110_15134 = state_15099__$1;
(statearr_15110_15134[(2)] = null);

(statearr_15110_15134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (9))){
var inst_15079 = (state_15099[(8)]);
var state_15099__$1 = state_15099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15099__$1,(11),out,inst_15079);
} else {
if((state_val_15100 === (5))){
var inst_15079 = (state_15099[(8)]);
var inst_15076 = (state_15099[(7)]);
var inst_15083 = cljs.core._EQ_.call(null,inst_15079,inst_15076);
var state_15099__$1 = state_15099;
if(inst_15083){
var statearr_15112_15135 = state_15099__$1;
(statearr_15112_15135[(1)] = (8));

} else {
var statearr_15113_15136 = state_15099__$1;
(statearr_15113_15136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (10))){
var inst_15091 = (state_15099[(2)]);
var state_15099__$1 = state_15099;
var statearr_15114_15137 = state_15099__$1;
(statearr_15114_15137[(2)] = inst_15091);

(statearr_15114_15137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15100 === (8))){
var inst_15076 = (state_15099[(7)]);
var tmp15111 = inst_15076;
var inst_15076__$1 = tmp15111;
var state_15099__$1 = (function (){var statearr_15115 = state_15099;
(statearr_15115[(7)] = inst_15076__$1);

return statearr_15115;
})();
var statearr_15116_15138 = state_15099__$1;
(statearr_15116_15138[(2)] = null);

(statearr_15116_15138[(1)] = (2));


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
});})(c__12555__auto___15128,out))
;
return ((function (switch__12443__auto__,c__12555__auto___15128,out){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_15120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15120[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_15120[(1)] = (1));

return statearr_15120;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_15099){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_15099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e15121){if((e15121 instanceof Object)){
var ex__12447__auto__ = e15121;
var statearr_15122_15139 = state_15099;
(statearr_15122_15139[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15140 = state_15099;
state_15099 = G__15140;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_15099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_15099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___15128,out))
})();
var state__12557__auto__ = (function (){var statearr_15123 = f__12556__auto__.call(null);
(statearr_15123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___15128);

return statearr_15123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___15128,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15141 = [];
var len__7214__auto___15211 = arguments.length;
var i__7215__auto___15212 = (0);
while(true){
if((i__7215__auto___15212 < len__7214__auto___15211)){
args15141.push((arguments[i__7215__auto___15212]));

var G__15213 = (i__7215__auto___15212 + (1));
i__7215__auto___15212 = G__15213;
continue;
} else {
}
break;
}

var G__15143 = args15141.length;
switch (G__15143) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15141.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12555__auto___15215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___15215,out){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___15215,out){
return (function (state_15181){
var state_val_15182 = (state_15181[(1)]);
if((state_val_15182 === (7))){
var inst_15177 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15183_15216 = state_15181__$1;
(statearr_15183_15216[(2)] = inst_15177);

(statearr_15183_15216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (1))){
var inst_15144 = (new Array(n));
var inst_15145 = inst_15144;
var inst_15146 = (0);
var state_15181__$1 = (function (){var statearr_15184 = state_15181;
(statearr_15184[(7)] = inst_15146);

(statearr_15184[(8)] = inst_15145);

return statearr_15184;
})();
var statearr_15185_15217 = state_15181__$1;
(statearr_15185_15217[(2)] = null);

(statearr_15185_15217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (4))){
var inst_15149 = (state_15181[(9)]);
var inst_15149__$1 = (state_15181[(2)]);
var inst_15150 = (inst_15149__$1 == null);
var inst_15151 = cljs.core.not.call(null,inst_15150);
var state_15181__$1 = (function (){var statearr_15186 = state_15181;
(statearr_15186[(9)] = inst_15149__$1);

return statearr_15186;
})();
if(inst_15151){
var statearr_15187_15218 = state_15181__$1;
(statearr_15187_15218[(1)] = (5));

} else {
var statearr_15188_15219 = state_15181__$1;
(statearr_15188_15219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (15))){
var inst_15171 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15189_15220 = state_15181__$1;
(statearr_15189_15220[(2)] = inst_15171);

(statearr_15189_15220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (13))){
var state_15181__$1 = state_15181;
var statearr_15190_15221 = state_15181__$1;
(statearr_15190_15221[(2)] = null);

(statearr_15190_15221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (6))){
var inst_15146 = (state_15181[(7)]);
var inst_15167 = (inst_15146 > (0));
var state_15181__$1 = state_15181;
if(cljs.core.truth_(inst_15167)){
var statearr_15191_15222 = state_15181__$1;
(statearr_15191_15222[(1)] = (12));

} else {
var statearr_15192_15223 = state_15181__$1;
(statearr_15192_15223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (3))){
var inst_15179 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15181__$1,inst_15179);
} else {
if((state_val_15182 === (12))){
var inst_15145 = (state_15181[(8)]);
var inst_15169 = cljs.core.vec.call(null,inst_15145);
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15181__$1,(15),out,inst_15169);
} else {
if((state_val_15182 === (2))){
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15181__$1,(4),ch);
} else {
if((state_val_15182 === (11))){
var inst_15161 = (state_15181[(2)]);
var inst_15162 = (new Array(n));
var inst_15145 = inst_15162;
var inst_15146 = (0);
var state_15181__$1 = (function (){var statearr_15193 = state_15181;
(statearr_15193[(7)] = inst_15146);

(statearr_15193[(10)] = inst_15161);

(statearr_15193[(8)] = inst_15145);

return statearr_15193;
})();
var statearr_15194_15224 = state_15181__$1;
(statearr_15194_15224[(2)] = null);

(statearr_15194_15224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (9))){
var inst_15145 = (state_15181[(8)]);
var inst_15159 = cljs.core.vec.call(null,inst_15145);
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15181__$1,(11),out,inst_15159);
} else {
if((state_val_15182 === (5))){
var inst_15146 = (state_15181[(7)]);
var inst_15154 = (state_15181[(11)]);
var inst_15149 = (state_15181[(9)]);
var inst_15145 = (state_15181[(8)]);
var inst_15153 = (inst_15145[inst_15146] = inst_15149);
var inst_15154__$1 = (inst_15146 + (1));
var inst_15155 = (inst_15154__$1 < n);
var state_15181__$1 = (function (){var statearr_15195 = state_15181;
(statearr_15195[(12)] = inst_15153);

(statearr_15195[(11)] = inst_15154__$1);

return statearr_15195;
})();
if(cljs.core.truth_(inst_15155)){
var statearr_15196_15225 = state_15181__$1;
(statearr_15196_15225[(1)] = (8));

} else {
var statearr_15197_15226 = state_15181__$1;
(statearr_15197_15226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (14))){
var inst_15174 = (state_15181[(2)]);
var inst_15175 = cljs.core.async.close_BANG_.call(null,out);
var state_15181__$1 = (function (){var statearr_15199 = state_15181;
(statearr_15199[(13)] = inst_15174);

return statearr_15199;
})();
var statearr_15200_15227 = state_15181__$1;
(statearr_15200_15227[(2)] = inst_15175);

(statearr_15200_15227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (10))){
var inst_15165 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15201_15228 = state_15181__$1;
(statearr_15201_15228[(2)] = inst_15165);

(statearr_15201_15228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (8))){
var inst_15154 = (state_15181[(11)]);
var inst_15145 = (state_15181[(8)]);
var tmp15198 = inst_15145;
var inst_15145__$1 = tmp15198;
var inst_15146 = inst_15154;
var state_15181__$1 = (function (){var statearr_15202 = state_15181;
(statearr_15202[(7)] = inst_15146);

(statearr_15202[(8)] = inst_15145__$1);

return statearr_15202;
})();
var statearr_15203_15229 = state_15181__$1;
(statearr_15203_15229[(2)] = null);

(statearr_15203_15229[(1)] = (2));


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
});})(c__12555__auto___15215,out))
;
return ((function (switch__12443__auto__,c__12555__auto___15215,out){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_15207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15207[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_15207[(1)] = (1));

return statearr_15207;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_15181){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_15181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e15208){if((e15208 instanceof Object)){
var ex__12447__auto__ = e15208;
var statearr_15209_15230 = state_15181;
(statearr_15209_15230[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15231 = state_15181;
state_15181 = G__15231;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_15181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_15181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___15215,out))
})();
var state__12557__auto__ = (function (){var statearr_15210 = f__12556__auto__.call(null);
(statearr_15210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___15215);

return statearr_15210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___15215,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15232 = [];
var len__7214__auto___15306 = arguments.length;
var i__7215__auto___15307 = (0);
while(true){
if((i__7215__auto___15307 < len__7214__auto___15306)){
args15232.push((arguments[i__7215__auto___15307]));

var G__15308 = (i__7215__auto___15307 + (1));
i__7215__auto___15307 = G__15308;
continue;
} else {
}
break;
}

var G__15234 = args15232.length;
switch (G__15234) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15232.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12555__auto___15310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12555__auto___15310,out){
return (function (){
var f__12556__auto__ = (function (){var switch__12443__auto__ = ((function (c__12555__auto___15310,out){
return (function (state_15276){
var state_val_15277 = (state_15276[(1)]);
if((state_val_15277 === (7))){
var inst_15272 = (state_15276[(2)]);
var state_15276__$1 = state_15276;
var statearr_15278_15311 = state_15276__$1;
(statearr_15278_15311[(2)] = inst_15272);

(statearr_15278_15311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (1))){
var inst_15235 = [];
var inst_15236 = inst_15235;
var inst_15237 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15276__$1 = (function (){var statearr_15279 = state_15276;
(statearr_15279[(7)] = inst_15237);

(statearr_15279[(8)] = inst_15236);

return statearr_15279;
})();
var statearr_15280_15312 = state_15276__$1;
(statearr_15280_15312[(2)] = null);

(statearr_15280_15312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (4))){
var inst_15240 = (state_15276[(9)]);
var inst_15240__$1 = (state_15276[(2)]);
var inst_15241 = (inst_15240__$1 == null);
var inst_15242 = cljs.core.not.call(null,inst_15241);
var state_15276__$1 = (function (){var statearr_15281 = state_15276;
(statearr_15281[(9)] = inst_15240__$1);

return statearr_15281;
})();
if(inst_15242){
var statearr_15282_15313 = state_15276__$1;
(statearr_15282_15313[(1)] = (5));

} else {
var statearr_15283_15314 = state_15276__$1;
(statearr_15283_15314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (15))){
var inst_15266 = (state_15276[(2)]);
var state_15276__$1 = state_15276;
var statearr_15284_15315 = state_15276__$1;
(statearr_15284_15315[(2)] = inst_15266);

(statearr_15284_15315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (13))){
var state_15276__$1 = state_15276;
var statearr_15285_15316 = state_15276__$1;
(statearr_15285_15316[(2)] = null);

(statearr_15285_15316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (6))){
var inst_15236 = (state_15276[(8)]);
var inst_15261 = inst_15236.length;
var inst_15262 = (inst_15261 > (0));
var state_15276__$1 = state_15276;
if(cljs.core.truth_(inst_15262)){
var statearr_15286_15317 = state_15276__$1;
(statearr_15286_15317[(1)] = (12));

} else {
var statearr_15287_15318 = state_15276__$1;
(statearr_15287_15318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (3))){
var inst_15274 = (state_15276[(2)]);
var state_15276__$1 = state_15276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15276__$1,inst_15274);
} else {
if((state_val_15277 === (12))){
var inst_15236 = (state_15276[(8)]);
var inst_15264 = cljs.core.vec.call(null,inst_15236);
var state_15276__$1 = state_15276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15276__$1,(15),out,inst_15264);
} else {
if((state_val_15277 === (2))){
var state_15276__$1 = state_15276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15276__$1,(4),ch);
} else {
if((state_val_15277 === (11))){
var inst_15244 = (state_15276[(10)]);
var inst_15240 = (state_15276[(9)]);
var inst_15254 = (state_15276[(2)]);
var inst_15255 = [];
var inst_15256 = inst_15255.push(inst_15240);
var inst_15236 = inst_15255;
var inst_15237 = inst_15244;
var state_15276__$1 = (function (){var statearr_15288 = state_15276;
(statearr_15288[(11)] = inst_15256);

(statearr_15288[(7)] = inst_15237);

(statearr_15288[(8)] = inst_15236);

(statearr_15288[(12)] = inst_15254);

return statearr_15288;
})();
var statearr_15289_15319 = state_15276__$1;
(statearr_15289_15319[(2)] = null);

(statearr_15289_15319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (9))){
var inst_15236 = (state_15276[(8)]);
var inst_15252 = cljs.core.vec.call(null,inst_15236);
var state_15276__$1 = state_15276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15276__$1,(11),out,inst_15252);
} else {
if((state_val_15277 === (5))){
var inst_15244 = (state_15276[(10)]);
var inst_15237 = (state_15276[(7)]);
var inst_15240 = (state_15276[(9)]);
var inst_15244__$1 = f.call(null,inst_15240);
var inst_15245 = cljs.core._EQ_.call(null,inst_15244__$1,inst_15237);
var inst_15246 = cljs.core.keyword_identical_QMARK_.call(null,inst_15237,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15247 = (inst_15245) || (inst_15246);
var state_15276__$1 = (function (){var statearr_15290 = state_15276;
(statearr_15290[(10)] = inst_15244__$1);

return statearr_15290;
})();
if(cljs.core.truth_(inst_15247)){
var statearr_15291_15320 = state_15276__$1;
(statearr_15291_15320[(1)] = (8));

} else {
var statearr_15292_15321 = state_15276__$1;
(statearr_15292_15321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (14))){
var inst_15269 = (state_15276[(2)]);
var inst_15270 = cljs.core.async.close_BANG_.call(null,out);
var state_15276__$1 = (function (){var statearr_15294 = state_15276;
(statearr_15294[(13)] = inst_15269);

return statearr_15294;
})();
var statearr_15295_15322 = state_15276__$1;
(statearr_15295_15322[(2)] = inst_15270);

(statearr_15295_15322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (10))){
var inst_15259 = (state_15276[(2)]);
var state_15276__$1 = state_15276;
var statearr_15296_15323 = state_15276__$1;
(statearr_15296_15323[(2)] = inst_15259);

(statearr_15296_15323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (8))){
var inst_15244 = (state_15276[(10)]);
var inst_15236 = (state_15276[(8)]);
var inst_15240 = (state_15276[(9)]);
var inst_15249 = inst_15236.push(inst_15240);
var tmp15293 = inst_15236;
var inst_15236__$1 = tmp15293;
var inst_15237 = inst_15244;
var state_15276__$1 = (function (){var statearr_15297 = state_15276;
(statearr_15297[(7)] = inst_15237);

(statearr_15297[(14)] = inst_15249);

(statearr_15297[(8)] = inst_15236__$1);

return statearr_15297;
})();
var statearr_15298_15324 = state_15276__$1;
(statearr_15298_15324[(2)] = null);

(statearr_15298_15324[(1)] = (2));


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
});})(c__12555__auto___15310,out))
;
return ((function (switch__12443__auto__,c__12555__auto___15310,out){
return (function() {
var cljs$core$async$state_machine__12444__auto__ = null;
var cljs$core$async$state_machine__12444__auto____0 = (function (){
var statearr_15302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15302[(0)] = cljs$core$async$state_machine__12444__auto__);

(statearr_15302[(1)] = (1));

return statearr_15302;
});
var cljs$core$async$state_machine__12444__auto____1 = (function (state_15276){
while(true){
var ret_value__12445__auto__ = (function (){try{while(true){
var result__12446__auto__ = switch__12443__auto__.call(null,state_15276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12446__auto__;
}
break;
}
}catch (e15303){if((e15303 instanceof Object)){
var ex__12447__auto__ = e15303;
var statearr_15304_15325 = state_15276;
(statearr_15304_15325[(5)] = ex__12447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15326 = state_15276;
state_15276 = G__15326;
continue;
} else {
return ret_value__12445__auto__;
}
break;
}
});
cljs$core$async$state_machine__12444__auto__ = function(state_15276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12444__auto____1.call(this,state_15276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12444__auto____0;
cljs$core$async$state_machine__12444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12444__auto____1;
return cljs$core$async$state_machine__12444__auto__;
})()
;})(switch__12443__auto__,c__12555__auto___15310,out))
})();
var state__12557__auto__ = (function (){var statearr_15305 = f__12556__auto__.call(null);
(statearr_15305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12555__auto___15310);

return statearr_15305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12557__auto__);
});})(c__12555__auto___15310,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
