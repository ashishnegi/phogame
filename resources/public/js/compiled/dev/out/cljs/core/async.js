// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19519 = [];
var len__17910__auto___19525 = arguments.length;
var i__17911__auto___19526 = (0);
while(true){
if((i__17911__auto___19526 < len__17910__auto___19525)){
args19519.push((arguments[i__17911__auto___19526]));

var G__19527 = (i__17911__auto___19526 + (1));
i__17911__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var G__19521 = args19519.length;
switch (G__19521) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19519.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19522 = (function (f,blockable,meta19523){
this.f = f;
this.blockable = blockable;
this.meta19523 = meta19523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19524,meta19523__$1){
var self__ = this;
var _19524__$1 = this;
return (new cljs.core.async.t_cljs$core$async19522(self__.f,self__.blockable,meta19523__$1));
});

cljs.core.async.t_cljs$core$async19522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19524){
var self__ = this;
var _19524__$1 = this;
return self__.meta19523;
});

cljs.core.async.t_cljs$core$async19522.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19523","meta19523",-55574407,null)], null);
});

cljs.core.async.t_cljs$core$async19522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19522";

cljs.core.async.t_cljs$core$async19522.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19522");
});

cljs.core.async.__GT_t_cljs$core$async19522 = (function cljs$core$async$__GT_t_cljs$core$async19522(f__$1,blockable__$1,meta19523){
return (new cljs.core.async.t_cljs$core$async19522(f__$1,blockable__$1,meta19523));
});

}

return (new cljs.core.async.t_cljs$core$async19522(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args19531 = [];
var len__17910__auto___19534 = arguments.length;
var i__17911__auto___19535 = (0);
while(true){
if((i__17911__auto___19535 < len__17910__auto___19534)){
args19531.push((arguments[i__17911__auto___19535]));

var G__19536 = (i__17911__auto___19535 + (1));
i__17911__auto___19535 = G__19536;
continue;
} else {
}
break;
}

var G__19533 = args19531.length;
switch (G__19533) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19531.length)].join('')));

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
var args19538 = [];
var len__17910__auto___19541 = arguments.length;
var i__17911__auto___19542 = (0);
while(true){
if((i__17911__auto___19542 < len__17910__auto___19541)){
args19538.push((arguments[i__17911__auto___19542]));

var G__19543 = (i__17911__auto___19542 + (1));
i__17911__auto___19542 = G__19543;
continue;
} else {
}
break;
}

var G__19540 = args19538.length;
switch (G__19540) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19538.length)].join('')));

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
var args19545 = [];
var len__17910__auto___19548 = arguments.length;
var i__17911__auto___19549 = (0);
while(true){
if((i__17911__auto___19549 < len__17910__auto___19548)){
args19545.push((arguments[i__17911__auto___19549]));

var G__19550 = (i__17911__auto___19549 + (1));
i__17911__auto___19549 = G__19550;
continue;
} else {
}
break;
}

var G__19547 = args19545.length;
switch (G__19547) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19545.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19552 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19552);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19552,ret){
return (function (){
return fn1.call(null,val_19552);
});})(val_19552,ret))
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
var args19553 = [];
var len__17910__auto___19556 = arguments.length;
var i__17911__auto___19557 = (0);
while(true){
if((i__17911__auto___19557 < len__17910__auto___19556)){
args19553.push((arguments[i__17911__auto___19557]));

var G__19558 = (i__17911__auto___19557 + (1));
i__17911__auto___19557 = G__19558;
continue;
} else {
}
break;
}

var G__19555 = args19553.length;
switch (G__19555) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19553.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17755__auto___19560 = n;
var x_19561 = (0);
while(true){
if((x_19561 < n__17755__auto___19560)){
(a[x_19561] = (0));

var G__19562 = (x_19561 + (1));
x_19561 = G__19562;
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

var G__19563 = (i + (1));
i = G__19563;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19567 = (function (alt_flag,flag,meta19568){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19568 = meta19568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19569,meta19568__$1){
var self__ = this;
var _19569__$1 = this;
return (new cljs.core.async.t_cljs$core$async19567(self__.alt_flag,self__.flag,meta19568__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19569){
var self__ = this;
var _19569__$1 = this;
return self__.meta19568;
});})(flag))
;

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19567.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19568","meta19568",1393145788,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19567";

cljs.core.async.t_cljs$core$async19567.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19567");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19567 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19567(alt_flag__$1,flag__$1,meta19568){
return (new cljs.core.async.t_cljs$core$async19567(alt_flag__$1,flag__$1,meta19568));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19567(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19573 = (function (alt_handler,flag,cb,meta19574){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19574 = meta19574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19575,meta19574__$1){
var self__ = this;
var _19575__$1 = this;
return (new cljs.core.async.t_cljs$core$async19573(self__.alt_handler,self__.flag,self__.cb,meta19574__$1));
});

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19575){
var self__ = this;
var _19575__$1 = this;
return self__.meta19574;
});

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19574","meta19574",-1006406726,null)], null);
});

cljs.core.async.t_cljs$core$async19573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19573";

cljs.core.async.t_cljs$core$async19573.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19573");
});

cljs.core.async.__GT_t_cljs$core$async19573 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19573(alt_handler__$1,flag__$1,cb__$1,meta19574){
return (new cljs.core.async.t_cljs$core$async19573(alt_handler__$1,flag__$1,cb__$1,meta19574));
});

}

return (new cljs.core.async.t_cljs$core$async19573(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19576_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19576_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19577_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19577_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16852__auto__ = wport;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19578 = (i + (1));
i = G__19578;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16852__auto__ = ret;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16840__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16840__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17917__auto__ = [];
var len__17910__auto___19584 = arguments.length;
var i__17911__auto___19585 = (0);
while(true){
if((i__17911__auto___19585 < len__17910__auto___19584)){
args__17917__auto__.push((arguments[i__17911__auto___19585]));

var G__19586 = (i__17911__auto___19585 + (1));
i__17911__auto___19585 = G__19586;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((1) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17918__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19581){
var map__19582 = p__19581;
var map__19582__$1 = ((((!((map__19582 == null)))?((((map__19582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19582):map__19582);
var opts = map__19582__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19579){
var G__19580 = cljs.core.first.call(null,seq19579);
var seq19579__$1 = cljs.core.next.call(null,seq19579);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19580,seq19579__$1);
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
var args19587 = [];
var len__17910__auto___19637 = arguments.length;
var i__17911__auto___19638 = (0);
while(true){
if((i__17911__auto___19638 < len__17910__auto___19637)){
args19587.push((arguments[i__17911__auto___19638]));

var G__19639 = (i__17911__auto___19638 + (1));
i__17911__auto___19638 = G__19639;
continue;
} else {
}
break;
}

var G__19589 = args19587.length;
switch (G__19589) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19587.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19474__auto___19641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___19641){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___19641){
return (function (state_19613){
var state_val_19614 = (state_19613[(1)]);
if((state_val_19614 === (7))){
var inst_19609 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19615_19642 = state_19613__$1;
(statearr_19615_19642[(2)] = inst_19609);

(statearr_19615_19642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (1))){
var state_19613__$1 = state_19613;
var statearr_19616_19643 = state_19613__$1;
(statearr_19616_19643[(2)] = null);

(statearr_19616_19643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (4))){
var inst_19592 = (state_19613[(7)]);
var inst_19592__$1 = (state_19613[(2)]);
var inst_19593 = (inst_19592__$1 == null);
var state_19613__$1 = (function (){var statearr_19617 = state_19613;
(statearr_19617[(7)] = inst_19592__$1);

return statearr_19617;
})();
if(cljs.core.truth_(inst_19593)){
var statearr_19618_19644 = state_19613__$1;
(statearr_19618_19644[(1)] = (5));

} else {
var statearr_19619_19645 = state_19613__$1;
(statearr_19619_19645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (13))){
var state_19613__$1 = state_19613;
var statearr_19620_19646 = state_19613__$1;
(statearr_19620_19646[(2)] = null);

(statearr_19620_19646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (6))){
var inst_19592 = (state_19613[(7)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19613__$1,(11),to,inst_19592);
} else {
if((state_val_19614 === (3))){
var inst_19611 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19613__$1,inst_19611);
} else {
if((state_val_19614 === (12))){
var state_19613__$1 = state_19613;
var statearr_19621_19647 = state_19613__$1;
(statearr_19621_19647[(2)] = null);

(statearr_19621_19647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (2))){
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19613__$1,(4),from);
} else {
if((state_val_19614 === (11))){
var inst_19602 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19602)){
var statearr_19622_19648 = state_19613__$1;
(statearr_19622_19648[(1)] = (12));

} else {
var statearr_19623_19649 = state_19613__$1;
(statearr_19623_19649[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (9))){
var state_19613__$1 = state_19613;
var statearr_19624_19650 = state_19613__$1;
(statearr_19624_19650[(2)] = null);

(statearr_19624_19650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (5))){
var state_19613__$1 = state_19613;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19625_19651 = state_19613__$1;
(statearr_19625_19651[(1)] = (8));

} else {
var statearr_19626_19652 = state_19613__$1;
(statearr_19626_19652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (14))){
var inst_19607 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19627_19653 = state_19613__$1;
(statearr_19627_19653[(2)] = inst_19607);

(statearr_19627_19653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (10))){
var inst_19599 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19628_19654 = state_19613__$1;
(statearr_19628_19654[(2)] = inst_19599);

(statearr_19628_19654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19614 === (8))){
var inst_19596 = cljs.core.async.close_BANG_.call(null,to);
var state_19613__$1 = state_19613;
var statearr_19629_19655 = state_19613__$1;
(statearr_19629_19655[(2)] = inst_19596);

(statearr_19629_19655[(1)] = (10));


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
});})(c__19474__auto___19641))
;
return ((function (switch__19362__auto__,c__19474__auto___19641){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_19633 = [null,null,null,null,null,null,null,null];
(statearr_19633[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_19633[(1)] = (1));

return statearr_19633;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_19613){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_19613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e19634){if((e19634 instanceof Object)){
var ex__19366__auto__ = e19634;
var statearr_19635_19656 = state_19613;
(statearr_19635_19656[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19657 = state_19613;
state_19613 = G__19657;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_19613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_19613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___19641))
})();
var state__19476__auto__ = (function (){var statearr_19636 = f__19475__auto__.call(null);
(statearr_19636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___19641);

return statearr_19636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___19641))
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
return (function (p__19841){
var vec__19842 = p__19841;
var v = cljs.core.nth.call(null,vec__19842,(0),null);
var p = cljs.core.nth.call(null,vec__19842,(1),null);
var job = vec__19842;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19474__auto___20024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___20024,res,vec__19842,v,p,job,jobs,results){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___20024,res,vec__19842,v,p,job,jobs,results){
return (function (state_19847){
var state_val_19848 = (state_19847[(1)]);
if((state_val_19848 === (1))){
var state_19847__$1 = state_19847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19847__$1,(2),res,v);
} else {
if((state_val_19848 === (2))){
var inst_19844 = (state_19847[(2)]);
var inst_19845 = cljs.core.async.close_BANG_.call(null,res);
var state_19847__$1 = (function (){var statearr_19849 = state_19847;
(statearr_19849[(7)] = inst_19844);

return statearr_19849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19847__$1,inst_19845);
} else {
return null;
}
}
});})(c__19474__auto___20024,res,vec__19842,v,p,job,jobs,results))
;
return ((function (switch__19362__auto__,c__19474__auto___20024,res,vec__19842,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0 = (function (){
var statearr_19853 = [null,null,null,null,null,null,null,null];
(statearr_19853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__);

(statearr_19853[(1)] = (1));

return statearr_19853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1 = (function (state_19847){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_19847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e19854){if((e19854 instanceof Object)){
var ex__19366__auto__ = e19854;
var statearr_19855_20025 = state_19847;
(statearr_19855_20025[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20026 = state_19847;
state_19847 = G__20026;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = function(state_19847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1.call(this,state_19847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___20024,res,vec__19842,v,p,job,jobs,results))
})();
var state__19476__auto__ = (function (){var statearr_19856 = f__19475__auto__.call(null);
(statearr_19856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___20024);

return statearr_19856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___20024,res,vec__19842,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19857){
var vec__19858 = p__19857;
var v = cljs.core.nth.call(null,vec__19858,(0),null);
var p = cljs.core.nth.call(null,vec__19858,(1),null);
var job = vec__19858;
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
var n__17755__auto___20027 = n;
var __20028 = (0);
while(true){
if((__20028 < n__17755__auto___20027)){
var G__19859_20029 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19859_20029) {
case "compute":
var c__19474__auto___20031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20028,c__19474__auto___20031,G__19859_20029,n__17755__auto___20027,jobs,results,process,async){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (__20028,c__19474__auto___20031,G__19859_20029,n__17755__auto___20027,jobs,results,process,async){
return (function (state_19872){
var state_val_19873 = (state_19872[(1)]);
if((state_val_19873 === (1))){
var state_19872__$1 = state_19872;
var statearr_19874_20032 = state_19872__$1;
(statearr_19874_20032[(2)] = null);

(statearr_19874_20032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19873 === (2))){
var state_19872__$1 = state_19872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19872__$1,(4),jobs);
} else {
if((state_val_19873 === (3))){
var inst_19870 = (state_19872[(2)]);
var state_19872__$1 = state_19872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19872__$1,inst_19870);
} else {
if((state_val_19873 === (4))){
var inst_19862 = (state_19872[(2)]);
var inst_19863 = process.call(null,inst_19862);
var state_19872__$1 = state_19872;
if(cljs.core.truth_(inst_19863)){
var statearr_19875_20033 = state_19872__$1;
(statearr_19875_20033[(1)] = (5));

} else {
var statearr_19876_20034 = state_19872__$1;
(statearr_19876_20034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19873 === (5))){
var state_19872__$1 = state_19872;
var statearr_19877_20035 = state_19872__$1;
(statearr_19877_20035[(2)] = null);

(statearr_19877_20035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19873 === (6))){
var state_19872__$1 = state_19872;
var statearr_19878_20036 = state_19872__$1;
(statearr_19878_20036[(2)] = null);

(statearr_19878_20036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19873 === (7))){
var inst_19868 = (state_19872[(2)]);
var state_19872__$1 = state_19872;
var statearr_19879_20037 = state_19872__$1;
(statearr_19879_20037[(2)] = inst_19868);

(statearr_19879_20037[(1)] = (3));


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
});})(__20028,c__19474__auto___20031,G__19859_20029,n__17755__auto___20027,jobs,results,process,async))
;
return ((function (__20028,switch__19362__auto__,c__19474__auto___20031,G__19859_20029,n__17755__auto___20027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0 = (function (){
var statearr_19883 = [null,null,null,null,null,null,null];
(statearr_19883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__);

(statearr_19883[(1)] = (1));

return statearr_19883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1 = (function (state_19872){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_19872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e19884){if((e19884 instanceof Object)){
var ex__19366__auto__ = e19884;
var statearr_19885_20038 = state_19872;
(statearr_19885_20038[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20039 = state_19872;
state_19872 = G__20039;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = function(state_19872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1.call(this,state_19872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__;
})()
;})(__20028,switch__19362__auto__,c__19474__auto___20031,G__19859_20029,n__17755__auto___20027,jobs,results,process,async))
})();
var state__19476__auto__ = (function (){var statearr_19886 = f__19475__auto__.call(null);
(statearr_19886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___20031);

return statearr_19886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(__20028,c__19474__auto___20031,G__19859_20029,n__17755__auto___20027,jobs,results,process,async))
);


break;
case "async":
var c__19474__auto___20040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20028,c__19474__auto___20040,G__19859_20029,n__17755__auto___20027,jobs,results,process,async){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (__20028,c__19474__auto___20040,G__19859_20029,n__17755__auto___20027,jobs,results,process,async){
return (function (state_19899){
var state_val_19900 = (state_19899[(1)]);
if((state_val_19900 === (1))){
var state_19899__$1 = state_19899;
var statearr_19901_20041 = state_19899__$1;
(statearr_19901_20041[(2)] = null);

(statearr_19901_20041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (2))){
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19899__$1,(4),jobs);
} else {
if((state_val_19900 === (3))){
var inst_19897 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19899__$1,inst_19897);
} else {
if((state_val_19900 === (4))){
var inst_19889 = (state_19899[(2)]);
var inst_19890 = async.call(null,inst_19889);
var state_19899__$1 = state_19899;
if(cljs.core.truth_(inst_19890)){
var statearr_19902_20042 = state_19899__$1;
(statearr_19902_20042[(1)] = (5));

} else {
var statearr_19903_20043 = state_19899__$1;
(statearr_19903_20043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (5))){
var state_19899__$1 = state_19899;
var statearr_19904_20044 = state_19899__$1;
(statearr_19904_20044[(2)] = null);

(statearr_19904_20044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (6))){
var state_19899__$1 = state_19899;
var statearr_19905_20045 = state_19899__$1;
(statearr_19905_20045[(2)] = null);

(statearr_19905_20045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (7))){
var inst_19895 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19906_20046 = state_19899__$1;
(statearr_19906_20046[(2)] = inst_19895);

(statearr_19906_20046[(1)] = (3));


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
});})(__20028,c__19474__auto___20040,G__19859_20029,n__17755__auto___20027,jobs,results,process,async))
;
return ((function (__20028,switch__19362__auto__,c__19474__auto___20040,G__19859_20029,n__17755__auto___20027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0 = (function (){
var statearr_19910 = [null,null,null,null,null,null,null];
(statearr_19910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__);

(statearr_19910[(1)] = (1));

return statearr_19910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1 = (function (state_19899){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_19899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e19911){if((e19911 instanceof Object)){
var ex__19366__auto__ = e19911;
var statearr_19912_20047 = state_19899;
(statearr_19912_20047[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20048 = state_19899;
state_19899 = G__20048;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = function(state_19899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1.call(this,state_19899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__;
})()
;})(__20028,switch__19362__auto__,c__19474__auto___20040,G__19859_20029,n__17755__auto___20027,jobs,results,process,async))
})();
var state__19476__auto__ = (function (){var statearr_19913 = f__19475__auto__.call(null);
(statearr_19913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___20040);

return statearr_19913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(__20028,c__19474__auto___20040,G__19859_20029,n__17755__auto___20027,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20049 = (__20028 + (1));
__20028 = G__20049;
continue;
} else {
}
break;
}

var c__19474__auto___20050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___20050,jobs,results,process,async){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___20050,jobs,results,process,async){
return (function (state_19935){
var state_val_19936 = (state_19935[(1)]);
if((state_val_19936 === (1))){
var state_19935__$1 = state_19935;
var statearr_19937_20051 = state_19935__$1;
(statearr_19937_20051[(2)] = null);

(statearr_19937_20051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (2))){
var state_19935__$1 = state_19935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19935__$1,(4),from);
} else {
if((state_val_19936 === (3))){
var inst_19933 = (state_19935[(2)]);
var state_19935__$1 = state_19935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19935__$1,inst_19933);
} else {
if((state_val_19936 === (4))){
var inst_19916 = (state_19935[(7)]);
var inst_19916__$1 = (state_19935[(2)]);
var inst_19917 = (inst_19916__$1 == null);
var state_19935__$1 = (function (){var statearr_19938 = state_19935;
(statearr_19938[(7)] = inst_19916__$1);

return statearr_19938;
})();
if(cljs.core.truth_(inst_19917)){
var statearr_19939_20052 = state_19935__$1;
(statearr_19939_20052[(1)] = (5));

} else {
var statearr_19940_20053 = state_19935__$1;
(statearr_19940_20053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (5))){
var inst_19919 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19935__$1 = state_19935;
var statearr_19941_20054 = state_19935__$1;
(statearr_19941_20054[(2)] = inst_19919);

(statearr_19941_20054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (6))){
var inst_19921 = (state_19935[(8)]);
var inst_19916 = (state_19935[(7)]);
var inst_19921__$1 = cljs.core.async.chan.call(null,(1));
var inst_19922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19923 = [inst_19916,inst_19921__$1];
var inst_19924 = (new cljs.core.PersistentVector(null,2,(5),inst_19922,inst_19923,null));
var state_19935__$1 = (function (){var statearr_19942 = state_19935;
(statearr_19942[(8)] = inst_19921__$1);

return statearr_19942;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19935__$1,(8),jobs,inst_19924);
} else {
if((state_val_19936 === (7))){
var inst_19931 = (state_19935[(2)]);
var state_19935__$1 = state_19935;
var statearr_19943_20055 = state_19935__$1;
(statearr_19943_20055[(2)] = inst_19931);

(statearr_19943_20055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (8))){
var inst_19921 = (state_19935[(8)]);
var inst_19926 = (state_19935[(2)]);
var state_19935__$1 = (function (){var statearr_19944 = state_19935;
(statearr_19944[(9)] = inst_19926);

return statearr_19944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19935__$1,(9),results,inst_19921);
} else {
if((state_val_19936 === (9))){
var inst_19928 = (state_19935[(2)]);
var state_19935__$1 = (function (){var statearr_19945 = state_19935;
(statearr_19945[(10)] = inst_19928);

return statearr_19945;
})();
var statearr_19946_20056 = state_19935__$1;
(statearr_19946_20056[(2)] = null);

(statearr_19946_20056[(1)] = (2));


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
});})(c__19474__auto___20050,jobs,results,process,async))
;
return ((function (switch__19362__auto__,c__19474__auto___20050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0 = (function (){
var statearr_19950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__);

(statearr_19950[(1)] = (1));

return statearr_19950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1 = (function (state_19935){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_19935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e19951){if((e19951 instanceof Object)){
var ex__19366__auto__ = e19951;
var statearr_19952_20057 = state_19935;
(statearr_19952_20057[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20058 = state_19935;
state_19935 = G__20058;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = function(state_19935){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1.call(this,state_19935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___20050,jobs,results,process,async))
})();
var state__19476__auto__ = (function (){var statearr_19953 = f__19475__auto__.call(null);
(statearr_19953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___20050);

return statearr_19953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___20050,jobs,results,process,async))
);


var c__19474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto__,jobs,results,process,async){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto__,jobs,results,process,async){
return (function (state_19991){
var state_val_19992 = (state_19991[(1)]);
if((state_val_19992 === (7))){
var inst_19987 = (state_19991[(2)]);
var state_19991__$1 = state_19991;
var statearr_19993_20059 = state_19991__$1;
(statearr_19993_20059[(2)] = inst_19987);

(statearr_19993_20059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (20))){
var state_19991__$1 = state_19991;
var statearr_19994_20060 = state_19991__$1;
(statearr_19994_20060[(2)] = null);

(statearr_19994_20060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (1))){
var state_19991__$1 = state_19991;
var statearr_19995_20061 = state_19991__$1;
(statearr_19995_20061[(2)] = null);

(statearr_19995_20061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (4))){
var inst_19956 = (state_19991[(7)]);
var inst_19956__$1 = (state_19991[(2)]);
var inst_19957 = (inst_19956__$1 == null);
var state_19991__$1 = (function (){var statearr_19996 = state_19991;
(statearr_19996[(7)] = inst_19956__$1);

return statearr_19996;
})();
if(cljs.core.truth_(inst_19957)){
var statearr_19997_20062 = state_19991__$1;
(statearr_19997_20062[(1)] = (5));

} else {
var statearr_19998_20063 = state_19991__$1;
(statearr_19998_20063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (15))){
var inst_19969 = (state_19991[(8)]);
var state_19991__$1 = state_19991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19991__$1,(18),to,inst_19969);
} else {
if((state_val_19992 === (21))){
var inst_19982 = (state_19991[(2)]);
var state_19991__$1 = state_19991;
var statearr_19999_20064 = state_19991__$1;
(statearr_19999_20064[(2)] = inst_19982);

(statearr_19999_20064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (13))){
var inst_19984 = (state_19991[(2)]);
var state_19991__$1 = (function (){var statearr_20000 = state_19991;
(statearr_20000[(9)] = inst_19984);

return statearr_20000;
})();
var statearr_20001_20065 = state_19991__$1;
(statearr_20001_20065[(2)] = null);

(statearr_20001_20065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (6))){
var inst_19956 = (state_19991[(7)]);
var state_19991__$1 = state_19991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19991__$1,(11),inst_19956);
} else {
if((state_val_19992 === (17))){
var inst_19977 = (state_19991[(2)]);
var state_19991__$1 = state_19991;
if(cljs.core.truth_(inst_19977)){
var statearr_20002_20066 = state_19991__$1;
(statearr_20002_20066[(1)] = (19));

} else {
var statearr_20003_20067 = state_19991__$1;
(statearr_20003_20067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (3))){
var inst_19989 = (state_19991[(2)]);
var state_19991__$1 = state_19991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19991__$1,inst_19989);
} else {
if((state_val_19992 === (12))){
var inst_19966 = (state_19991[(10)]);
var state_19991__$1 = state_19991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19991__$1,(14),inst_19966);
} else {
if((state_val_19992 === (2))){
var state_19991__$1 = state_19991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19991__$1,(4),results);
} else {
if((state_val_19992 === (19))){
var state_19991__$1 = state_19991;
var statearr_20004_20068 = state_19991__$1;
(statearr_20004_20068[(2)] = null);

(statearr_20004_20068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (11))){
var inst_19966 = (state_19991[(2)]);
var state_19991__$1 = (function (){var statearr_20005 = state_19991;
(statearr_20005[(10)] = inst_19966);

return statearr_20005;
})();
var statearr_20006_20069 = state_19991__$1;
(statearr_20006_20069[(2)] = null);

(statearr_20006_20069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (9))){
var state_19991__$1 = state_19991;
var statearr_20007_20070 = state_19991__$1;
(statearr_20007_20070[(2)] = null);

(statearr_20007_20070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (5))){
var state_19991__$1 = state_19991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20008_20071 = state_19991__$1;
(statearr_20008_20071[(1)] = (8));

} else {
var statearr_20009_20072 = state_19991__$1;
(statearr_20009_20072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (14))){
var inst_19971 = (state_19991[(11)]);
var inst_19969 = (state_19991[(8)]);
var inst_19969__$1 = (state_19991[(2)]);
var inst_19970 = (inst_19969__$1 == null);
var inst_19971__$1 = cljs.core.not.call(null,inst_19970);
var state_19991__$1 = (function (){var statearr_20010 = state_19991;
(statearr_20010[(11)] = inst_19971__$1);

(statearr_20010[(8)] = inst_19969__$1);

return statearr_20010;
})();
if(inst_19971__$1){
var statearr_20011_20073 = state_19991__$1;
(statearr_20011_20073[(1)] = (15));

} else {
var statearr_20012_20074 = state_19991__$1;
(statearr_20012_20074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (16))){
var inst_19971 = (state_19991[(11)]);
var state_19991__$1 = state_19991;
var statearr_20013_20075 = state_19991__$1;
(statearr_20013_20075[(2)] = inst_19971);

(statearr_20013_20075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (10))){
var inst_19963 = (state_19991[(2)]);
var state_19991__$1 = state_19991;
var statearr_20014_20076 = state_19991__$1;
(statearr_20014_20076[(2)] = inst_19963);

(statearr_20014_20076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (18))){
var inst_19974 = (state_19991[(2)]);
var state_19991__$1 = state_19991;
var statearr_20015_20077 = state_19991__$1;
(statearr_20015_20077[(2)] = inst_19974);

(statearr_20015_20077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19992 === (8))){
var inst_19960 = cljs.core.async.close_BANG_.call(null,to);
var state_19991__$1 = state_19991;
var statearr_20016_20078 = state_19991__$1;
(statearr_20016_20078[(2)] = inst_19960);

(statearr_20016_20078[(1)] = (10));


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
});})(c__19474__auto__,jobs,results,process,async))
;
return ((function (switch__19362__auto__,c__19474__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0 = (function (){
var statearr_20020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__);

(statearr_20020[(1)] = (1));

return statearr_20020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1 = (function (state_19991){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_19991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e20021){if((e20021 instanceof Object)){
var ex__19366__auto__ = e20021;
var statearr_20022_20079 = state_19991;
(statearr_20022_20079[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20080 = state_19991;
state_19991 = G__20080;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__ = function(state_19991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1.call(this,state_19991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto__,jobs,results,process,async))
})();
var state__19476__auto__ = (function (){var statearr_20023 = f__19475__auto__.call(null);
(statearr_20023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto__);

return statearr_20023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto__,jobs,results,process,async))
);

return c__19474__auto__;
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
var args20081 = [];
var len__17910__auto___20084 = arguments.length;
var i__17911__auto___20085 = (0);
while(true){
if((i__17911__auto___20085 < len__17910__auto___20084)){
args20081.push((arguments[i__17911__auto___20085]));

var G__20086 = (i__17911__auto___20085 + (1));
i__17911__auto___20085 = G__20086;
continue;
} else {
}
break;
}

var G__20083 = args20081.length;
switch (G__20083) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20081.length)].join('')));

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
var args20088 = [];
var len__17910__auto___20091 = arguments.length;
var i__17911__auto___20092 = (0);
while(true){
if((i__17911__auto___20092 < len__17910__auto___20091)){
args20088.push((arguments[i__17911__auto___20092]));

var G__20093 = (i__17911__auto___20092 + (1));
i__17911__auto___20092 = G__20093;
continue;
} else {
}
break;
}

var G__20090 = args20088.length;
switch (G__20090) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20088.length)].join('')));

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
var args20095 = [];
var len__17910__auto___20148 = arguments.length;
var i__17911__auto___20149 = (0);
while(true){
if((i__17911__auto___20149 < len__17910__auto___20148)){
args20095.push((arguments[i__17911__auto___20149]));

var G__20150 = (i__17911__auto___20149 + (1));
i__17911__auto___20149 = G__20150;
continue;
} else {
}
break;
}

var G__20097 = args20095.length;
switch (G__20097) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20095.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19474__auto___20152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___20152,tc,fc){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___20152,tc,fc){
return (function (state_20123){
var state_val_20124 = (state_20123[(1)]);
if((state_val_20124 === (7))){
var inst_20119 = (state_20123[(2)]);
var state_20123__$1 = state_20123;
var statearr_20125_20153 = state_20123__$1;
(statearr_20125_20153[(2)] = inst_20119);

(statearr_20125_20153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (1))){
var state_20123__$1 = state_20123;
var statearr_20126_20154 = state_20123__$1;
(statearr_20126_20154[(2)] = null);

(statearr_20126_20154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (4))){
var inst_20100 = (state_20123[(7)]);
var inst_20100__$1 = (state_20123[(2)]);
var inst_20101 = (inst_20100__$1 == null);
var state_20123__$1 = (function (){var statearr_20127 = state_20123;
(statearr_20127[(7)] = inst_20100__$1);

return statearr_20127;
})();
if(cljs.core.truth_(inst_20101)){
var statearr_20128_20155 = state_20123__$1;
(statearr_20128_20155[(1)] = (5));

} else {
var statearr_20129_20156 = state_20123__$1;
(statearr_20129_20156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (13))){
var state_20123__$1 = state_20123;
var statearr_20130_20157 = state_20123__$1;
(statearr_20130_20157[(2)] = null);

(statearr_20130_20157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (6))){
var inst_20100 = (state_20123[(7)]);
var inst_20106 = p.call(null,inst_20100);
var state_20123__$1 = state_20123;
if(cljs.core.truth_(inst_20106)){
var statearr_20131_20158 = state_20123__$1;
(statearr_20131_20158[(1)] = (9));

} else {
var statearr_20132_20159 = state_20123__$1;
(statearr_20132_20159[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (3))){
var inst_20121 = (state_20123[(2)]);
var state_20123__$1 = state_20123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20123__$1,inst_20121);
} else {
if((state_val_20124 === (12))){
var state_20123__$1 = state_20123;
var statearr_20133_20160 = state_20123__$1;
(statearr_20133_20160[(2)] = null);

(statearr_20133_20160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (2))){
var state_20123__$1 = state_20123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20123__$1,(4),ch);
} else {
if((state_val_20124 === (11))){
var inst_20100 = (state_20123[(7)]);
var inst_20110 = (state_20123[(2)]);
var state_20123__$1 = state_20123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20123__$1,(8),inst_20110,inst_20100);
} else {
if((state_val_20124 === (9))){
var state_20123__$1 = state_20123;
var statearr_20134_20161 = state_20123__$1;
(statearr_20134_20161[(2)] = tc);

(statearr_20134_20161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (5))){
var inst_20103 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20104 = cljs.core.async.close_BANG_.call(null,fc);
var state_20123__$1 = (function (){var statearr_20135 = state_20123;
(statearr_20135[(8)] = inst_20103);

return statearr_20135;
})();
var statearr_20136_20162 = state_20123__$1;
(statearr_20136_20162[(2)] = inst_20104);

(statearr_20136_20162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (14))){
var inst_20117 = (state_20123[(2)]);
var state_20123__$1 = state_20123;
var statearr_20137_20163 = state_20123__$1;
(statearr_20137_20163[(2)] = inst_20117);

(statearr_20137_20163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (10))){
var state_20123__$1 = state_20123;
var statearr_20138_20164 = state_20123__$1;
(statearr_20138_20164[(2)] = fc);

(statearr_20138_20164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20124 === (8))){
var inst_20112 = (state_20123[(2)]);
var state_20123__$1 = state_20123;
if(cljs.core.truth_(inst_20112)){
var statearr_20139_20165 = state_20123__$1;
(statearr_20139_20165[(1)] = (12));

} else {
var statearr_20140_20166 = state_20123__$1;
(statearr_20140_20166[(1)] = (13));

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
});})(c__19474__auto___20152,tc,fc))
;
return ((function (switch__19362__auto__,c__19474__auto___20152,tc,fc){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_20144 = [null,null,null,null,null,null,null,null,null];
(statearr_20144[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_20144[(1)] = (1));

return statearr_20144;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_20123){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_20123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e20145){if((e20145 instanceof Object)){
var ex__19366__auto__ = e20145;
var statearr_20146_20167 = state_20123;
(statearr_20146_20167[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20168 = state_20123;
state_20123 = G__20168;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_20123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_20123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___20152,tc,fc))
})();
var state__19476__auto__ = (function (){var statearr_20147 = f__19475__auto__.call(null);
(statearr_20147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___20152);

return statearr_20147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___20152,tc,fc))
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
var c__19474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto__){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto__){
return (function (state_20232){
var state_val_20233 = (state_20232[(1)]);
if((state_val_20233 === (7))){
var inst_20228 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20234_20255 = state_20232__$1;
(statearr_20234_20255[(2)] = inst_20228);

(statearr_20234_20255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (1))){
var inst_20212 = init;
var state_20232__$1 = (function (){var statearr_20235 = state_20232;
(statearr_20235[(7)] = inst_20212);

return statearr_20235;
})();
var statearr_20236_20256 = state_20232__$1;
(statearr_20236_20256[(2)] = null);

(statearr_20236_20256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (4))){
var inst_20215 = (state_20232[(8)]);
var inst_20215__$1 = (state_20232[(2)]);
var inst_20216 = (inst_20215__$1 == null);
var state_20232__$1 = (function (){var statearr_20237 = state_20232;
(statearr_20237[(8)] = inst_20215__$1);

return statearr_20237;
})();
if(cljs.core.truth_(inst_20216)){
var statearr_20238_20257 = state_20232__$1;
(statearr_20238_20257[(1)] = (5));

} else {
var statearr_20239_20258 = state_20232__$1;
(statearr_20239_20258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (6))){
var inst_20215 = (state_20232[(8)]);
var inst_20212 = (state_20232[(7)]);
var inst_20219 = (state_20232[(9)]);
var inst_20219__$1 = f.call(null,inst_20212,inst_20215);
var inst_20220 = cljs.core.reduced_QMARK_.call(null,inst_20219__$1);
var state_20232__$1 = (function (){var statearr_20240 = state_20232;
(statearr_20240[(9)] = inst_20219__$1);

return statearr_20240;
})();
if(inst_20220){
var statearr_20241_20259 = state_20232__$1;
(statearr_20241_20259[(1)] = (8));

} else {
var statearr_20242_20260 = state_20232__$1;
(statearr_20242_20260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (3))){
var inst_20230 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20232__$1,inst_20230);
} else {
if((state_val_20233 === (2))){
var state_20232__$1 = state_20232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20232__$1,(4),ch);
} else {
if((state_val_20233 === (9))){
var inst_20219 = (state_20232[(9)]);
var inst_20212 = inst_20219;
var state_20232__$1 = (function (){var statearr_20243 = state_20232;
(statearr_20243[(7)] = inst_20212);

return statearr_20243;
})();
var statearr_20244_20261 = state_20232__$1;
(statearr_20244_20261[(2)] = null);

(statearr_20244_20261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (5))){
var inst_20212 = (state_20232[(7)]);
var state_20232__$1 = state_20232;
var statearr_20245_20262 = state_20232__$1;
(statearr_20245_20262[(2)] = inst_20212);

(statearr_20245_20262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (10))){
var inst_20226 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20246_20263 = state_20232__$1;
(statearr_20246_20263[(2)] = inst_20226);

(statearr_20246_20263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (8))){
var inst_20219 = (state_20232[(9)]);
var inst_20222 = cljs.core.deref.call(null,inst_20219);
var state_20232__$1 = state_20232;
var statearr_20247_20264 = state_20232__$1;
(statearr_20247_20264[(2)] = inst_20222);

(statearr_20247_20264[(1)] = (10));


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
});})(c__19474__auto__))
;
return ((function (switch__19362__auto__,c__19474__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19363__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19363__auto____0 = (function (){
var statearr_20251 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20251[(0)] = cljs$core$async$reduce_$_state_machine__19363__auto__);

(statearr_20251[(1)] = (1));

return statearr_20251;
});
var cljs$core$async$reduce_$_state_machine__19363__auto____1 = (function (state_20232){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_20232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e20252){if((e20252 instanceof Object)){
var ex__19366__auto__ = e20252;
var statearr_20253_20265 = state_20232;
(statearr_20253_20265[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20266 = state_20232;
state_20232 = G__20266;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19363__auto__ = function(state_20232){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19363__auto____1.call(this,state_20232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19363__auto____0;
cljs$core$async$reduce_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19363__auto____1;
return cljs$core$async$reduce_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto__))
})();
var state__19476__auto__ = (function (){var statearr_20254 = f__19475__auto__.call(null);
(statearr_20254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto__);

return statearr_20254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto__))
);

return c__19474__auto__;
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
var args20267 = [];
var len__17910__auto___20319 = arguments.length;
var i__17911__auto___20320 = (0);
while(true){
if((i__17911__auto___20320 < len__17910__auto___20319)){
args20267.push((arguments[i__17911__auto___20320]));

var G__20321 = (i__17911__auto___20320 + (1));
i__17911__auto___20320 = G__20321;
continue;
} else {
}
break;
}

var G__20269 = args20267.length;
switch (G__20269) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20267.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto__){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto__){
return (function (state_20294){
var state_val_20295 = (state_20294[(1)]);
if((state_val_20295 === (7))){
var inst_20276 = (state_20294[(2)]);
var state_20294__$1 = state_20294;
var statearr_20296_20323 = state_20294__$1;
(statearr_20296_20323[(2)] = inst_20276);

(statearr_20296_20323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (1))){
var inst_20270 = cljs.core.seq.call(null,coll);
var inst_20271 = inst_20270;
var state_20294__$1 = (function (){var statearr_20297 = state_20294;
(statearr_20297[(7)] = inst_20271);

return statearr_20297;
})();
var statearr_20298_20324 = state_20294__$1;
(statearr_20298_20324[(2)] = null);

(statearr_20298_20324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (4))){
var inst_20271 = (state_20294[(7)]);
var inst_20274 = cljs.core.first.call(null,inst_20271);
var state_20294__$1 = state_20294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20294__$1,(7),ch,inst_20274);
} else {
if((state_val_20295 === (13))){
var inst_20288 = (state_20294[(2)]);
var state_20294__$1 = state_20294;
var statearr_20299_20325 = state_20294__$1;
(statearr_20299_20325[(2)] = inst_20288);

(statearr_20299_20325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (6))){
var inst_20279 = (state_20294[(2)]);
var state_20294__$1 = state_20294;
if(cljs.core.truth_(inst_20279)){
var statearr_20300_20326 = state_20294__$1;
(statearr_20300_20326[(1)] = (8));

} else {
var statearr_20301_20327 = state_20294__$1;
(statearr_20301_20327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (3))){
var inst_20292 = (state_20294[(2)]);
var state_20294__$1 = state_20294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20294__$1,inst_20292);
} else {
if((state_val_20295 === (12))){
var state_20294__$1 = state_20294;
var statearr_20302_20328 = state_20294__$1;
(statearr_20302_20328[(2)] = null);

(statearr_20302_20328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (2))){
var inst_20271 = (state_20294[(7)]);
var state_20294__$1 = state_20294;
if(cljs.core.truth_(inst_20271)){
var statearr_20303_20329 = state_20294__$1;
(statearr_20303_20329[(1)] = (4));

} else {
var statearr_20304_20330 = state_20294__$1;
(statearr_20304_20330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (11))){
var inst_20285 = cljs.core.async.close_BANG_.call(null,ch);
var state_20294__$1 = state_20294;
var statearr_20305_20331 = state_20294__$1;
(statearr_20305_20331[(2)] = inst_20285);

(statearr_20305_20331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (9))){
var state_20294__$1 = state_20294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20306_20332 = state_20294__$1;
(statearr_20306_20332[(1)] = (11));

} else {
var statearr_20307_20333 = state_20294__$1;
(statearr_20307_20333[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (5))){
var inst_20271 = (state_20294[(7)]);
var state_20294__$1 = state_20294;
var statearr_20308_20334 = state_20294__$1;
(statearr_20308_20334[(2)] = inst_20271);

(statearr_20308_20334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (10))){
var inst_20290 = (state_20294[(2)]);
var state_20294__$1 = state_20294;
var statearr_20309_20335 = state_20294__$1;
(statearr_20309_20335[(2)] = inst_20290);

(statearr_20309_20335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20295 === (8))){
var inst_20271 = (state_20294[(7)]);
var inst_20281 = cljs.core.next.call(null,inst_20271);
var inst_20271__$1 = inst_20281;
var state_20294__$1 = (function (){var statearr_20310 = state_20294;
(statearr_20310[(7)] = inst_20271__$1);

return statearr_20310;
})();
var statearr_20311_20336 = state_20294__$1;
(statearr_20311_20336[(2)] = null);

(statearr_20311_20336[(1)] = (2));


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
});})(c__19474__auto__))
;
return ((function (switch__19362__auto__,c__19474__auto__){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_20315 = [null,null,null,null,null,null,null,null];
(statearr_20315[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_20315[(1)] = (1));

return statearr_20315;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_20294){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_20294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e20316){if((e20316 instanceof Object)){
var ex__19366__auto__ = e20316;
var statearr_20317_20337 = state_20294;
(statearr_20317_20337[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20338 = state_20294;
state_20294 = G__20338;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_20294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_20294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto__))
})();
var state__19476__auto__ = (function (){var statearr_20318 = f__19475__auto__.call(null);
(statearr_20318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto__);

return statearr_20318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto__))
);

return c__19474__auto__;
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
var x__17507__auto__ = (((_ == null))?null:_);
var m__17508__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,_);
} else {
var m__17508__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,_);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17508__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m);
} else {
var m__17508__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async20560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20560 = (function (mult,ch,cs,meta20561){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20561 = meta20561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20562,meta20561__$1){
var self__ = this;
var _20562__$1 = this;
return (new cljs.core.async.t_cljs$core$async20560(self__.mult,self__.ch,self__.cs,meta20561__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20562){
var self__ = this;
var _20562__$1 = this;
return self__.meta20561;
});})(cs))
;

cljs.core.async.t_cljs$core$async20560.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20560.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20560.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20560.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20560.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20560.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20560.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20561","meta20561",-1837711311,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20560";

cljs.core.async.t_cljs$core$async20560.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20560");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20560 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20560(mult__$1,ch__$1,cs__$1,meta20561){
return (new cljs.core.async.t_cljs$core$async20560(mult__$1,ch__$1,cs__$1,meta20561));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20560(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19474__auto___20781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___20781,cs,m,dchan,dctr,done){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___20781,cs,m,dchan,dctr,done){
return (function (state_20693){
var state_val_20694 = (state_20693[(1)]);
if((state_val_20694 === (7))){
var inst_20689 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20695_20782 = state_20693__$1;
(statearr_20695_20782[(2)] = inst_20689);

(statearr_20695_20782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (20))){
var inst_20594 = (state_20693[(7)]);
var inst_20604 = cljs.core.first.call(null,inst_20594);
var inst_20605 = cljs.core.nth.call(null,inst_20604,(0),null);
var inst_20606 = cljs.core.nth.call(null,inst_20604,(1),null);
var state_20693__$1 = (function (){var statearr_20696 = state_20693;
(statearr_20696[(8)] = inst_20605);

return statearr_20696;
})();
if(cljs.core.truth_(inst_20606)){
var statearr_20697_20783 = state_20693__$1;
(statearr_20697_20783[(1)] = (22));

} else {
var statearr_20698_20784 = state_20693__$1;
(statearr_20698_20784[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (27))){
var inst_20565 = (state_20693[(9)]);
var inst_20634 = (state_20693[(10)]);
var inst_20636 = (state_20693[(11)]);
var inst_20641 = (state_20693[(12)]);
var inst_20641__$1 = cljs.core._nth.call(null,inst_20634,inst_20636);
var inst_20642 = cljs.core.async.put_BANG_.call(null,inst_20641__$1,inst_20565,done);
var state_20693__$1 = (function (){var statearr_20699 = state_20693;
(statearr_20699[(12)] = inst_20641__$1);

return statearr_20699;
})();
if(cljs.core.truth_(inst_20642)){
var statearr_20700_20785 = state_20693__$1;
(statearr_20700_20785[(1)] = (30));

} else {
var statearr_20701_20786 = state_20693__$1;
(statearr_20701_20786[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (1))){
var state_20693__$1 = state_20693;
var statearr_20702_20787 = state_20693__$1;
(statearr_20702_20787[(2)] = null);

(statearr_20702_20787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (24))){
var inst_20594 = (state_20693[(7)]);
var inst_20611 = (state_20693[(2)]);
var inst_20612 = cljs.core.next.call(null,inst_20594);
var inst_20574 = inst_20612;
var inst_20575 = null;
var inst_20576 = (0);
var inst_20577 = (0);
var state_20693__$1 = (function (){var statearr_20703 = state_20693;
(statearr_20703[(13)] = inst_20574);

(statearr_20703[(14)] = inst_20575);

(statearr_20703[(15)] = inst_20577);

(statearr_20703[(16)] = inst_20611);

(statearr_20703[(17)] = inst_20576);

return statearr_20703;
})();
var statearr_20704_20788 = state_20693__$1;
(statearr_20704_20788[(2)] = null);

(statearr_20704_20788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (39))){
var state_20693__$1 = state_20693;
var statearr_20708_20789 = state_20693__$1;
(statearr_20708_20789[(2)] = null);

(statearr_20708_20789[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (4))){
var inst_20565 = (state_20693[(9)]);
var inst_20565__$1 = (state_20693[(2)]);
var inst_20566 = (inst_20565__$1 == null);
var state_20693__$1 = (function (){var statearr_20709 = state_20693;
(statearr_20709[(9)] = inst_20565__$1);

return statearr_20709;
})();
if(cljs.core.truth_(inst_20566)){
var statearr_20710_20790 = state_20693__$1;
(statearr_20710_20790[(1)] = (5));

} else {
var statearr_20711_20791 = state_20693__$1;
(statearr_20711_20791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (15))){
var inst_20574 = (state_20693[(13)]);
var inst_20575 = (state_20693[(14)]);
var inst_20577 = (state_20693[(15)]);
var inst_20576 = (state_20693[(17)]);
var inst_20590 = (state_20693[(2)]);
var inst_20591 = (inst_20577 + (1));
var tmp20705 = inst_20574;
var tmp20706 = inst_20575;
var tmp20707 = inst_20576;
var inst_20574__$1 = tmp20705;
var inst_20575__$1 = tmp20706;
var inst_20576__$1 = tmp20707;
var inst_20577__$1 = inst_20591;
var state_20693__$1 = (function (){var statearr_20712 = state_20693;
(statearr_20712[(13)] = inst_20574__$1);

(statearr_20712[(14)] = inst_20575__$1);

(statearr_20712[(18)] = inst_20590);

(statearr_20712[(15)] = inst_20577__$1);

(statearr_20712[(17)] = inst_20576__$1);

return statearr_20712;
})();
var statearr_20713_20792 = state_20693__$1;
(statearr_20713_20792[(2)] = null);

(statearr_20713_20792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (21))){
var inst_20615 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20717_20793 = state_20693__$1;
(statearr_20717_20793[(2)] = inst_20615);

(statearr_20717_20793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (31))){
var inst_20641 = (state_20693[(12)]);
var inst_20645 = done.call(null,null);
var inst_20646 = cljs.core.async.untap_STAR_.call(null,m,inst_20641);
var state_20693__$1 = (function (){var statearr_20718 = state_20693;
(statearr_20718[(19)] = inst_20645);

return statearr_20718;
})();
var statearr_20719_20794 = state_20693__$1;
(statearr_20719_20794[(2)] = inst_20646);

(statearr_20719_20794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (32))){
var inst_20635 = (state_20693[(20)]);
var inst_20634 = (state_20693[(10)]);
var inst_20633 = (state_20693[(21)]);
var inst_20636 = (state_20693[(11)]);
var inst_20648 = (state_20693[(2)]);
var inst_20649 = (inst_20636 + (1));
var tmp20714 = inst_20635;
var tmp20715 = inst_20634;
var tmp20716 = inst_20633;
var inst_20633__$1 = tmp20716;
var inst_20634__$1 = tmp20715;
var inst_20635__$1 = tmp20714;
var inst_20636__$1 = inst_20649;
var state_20693__$1 = (function (){var statearr_20720 = state_20693;
(statearr_20720[(22)] = inst_20648);

(statearr_20720[(20)] = inst_20635__$1);

(statearr_20720[(10)] = inst_20634__$1);

(statearr_20720[(21)] = inst_20633__$1);

(statearr_20720[(11)] = inst_20636__$1);

return statearr_20720;
})();
var statearr_20721_20795 = state_20693__$1;
(statearr_20721_20795[(2)] = null);

(statearr_20721_20795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (40))){
var inst_20661 = (state_20693[(23)]);
var inst_20665 = done.call(null,null);
var inst_20666 = cljs.core.async.untap_STAR_.call(null,m,inst_20661);
var state_20693__$1 = (function (){var statearr_20722 = state_20693;
(statearr_20722[(24)] = inst_20665);

return statearr_20722;
})();
var statearr_20723_20796 = state_20693__$1;
(statearr_20723_20796[(2)] = inst_20666);

(statearr_20723_20796[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (33))){
var inst_20652 = (state_20693[(25)]);
var inst_20654 = cljs.core.chunked_seq_QMARK_.call(null,inst_20652);
var state_20693__$1 = state_20693;
if(inst_20654){
var statearr_20724_20797 = state_20693__$1;
(statearr_20724_20797[(1)] = (36));

} else {
var statearr_20725_20798 = state_20693__$1;
(statearr_20725_20798[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (13))){
var inst_20584 = (state_20693[(26)]);
var inst_20587 = cljs.core.async.close_BANG_.call(null,inst_20584);
var state_20693__$1 = state_20693;
var statearr_20726_20799 = state_20693__$1;
(statearr_20726_20799[(2)] = inst_20587);

(statearr_20726_20799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (22))){
var inst_20605 = (state_20693[(8)]);
var inst_20608 = cljs.core.async.close_BANG_.call(null,inst_20605);
var state_20693__$1 = state_20693;
var statearr_20727_20800 = state_20693__$1;
(statearr_20727_20800[(2)] = inst_20608);

(statearr_20727_20800[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (36))){
var inst_20652 = (state_20693[(25)]);
var inst_20656 = cljs.core.chunk_first.call(null,inst_20652);
var inst_20657 = cljs.core.chunk_rest.call(null,inst_20652);
var inst_20658 = cljs.core.count.call(null,inst_20656);
var inst_20633 = inst_20657;
var inst_20634 = inst_20656;
var inst_20635 = inst_20658;
var inst_20636 = (0);
var state_20693__$1 = (function (){var statearr_20728 = state_20693;
(statearr_20728[(20)] = inst_20635);

(statearr_20728[(10)] = inst_20634);

(statearr_20728[(21)] = inst_20633);

(statearr_20728[(11)] = inst_20636);

return statearr_20728;
})();
var statearr_20729_20801 = state_20693__$1;
(statearr_20729_20801[(2)] = null);

(statearr_20729_20801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (41))){
var inst_20652 = (state_20693[(25)]);
var inst_20668 = (state_20693[(2)]);
var inst_20669 = cljs.core.next.call(null,inst_20652);
var inst_20633 = inst_20669;
var inst_20634 = null;
var inst_20635 = (0);
var inst_20636 = (0);
var state_20693__$1 = (function (){var statearr_20730 = state_20693;
(statearr_20730[(27)] = inst_20668);

(statearr_20730[(20)] = inst_20635);

(statearr_20730[(10)] = inst_20634);

(statearr_20730[(21)] = inst_20633);

(statearr_20730[(11)] = inst_20636);

return statearr_20730;
})();
var statearr_20731_20802 = state_20693__$1;
(statearr_20731_20802[(2)] = null);

(statearr_20731_20802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (43))){
var state_20693__$1 = state_20693;
var statearr_20732_20803 = state_20693__$1;
(statearr_20732_20803[(2)] = null);

(statearr_20732_20803[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (29))){
var inst_20677 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20733_20804 = state_20693__$1;
(statearr_20733_20804[(2)] = inst_20677);

(statearr_20733_20804[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (44))){
var inst_20686 = (state_20693[(2)]);
var state_20693__$1 = (function (){var statearr_20734 = state_20693;
(statearr_20734[(28)] = inst_20686);

return statearr_20734;
})();
var statearr_20735_20805 = state_20693__$1;
(statearr_20735_20805[(2)] = null);

(statearr_20735_20805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (6))){
var inst_20625 = (state_20693[(29)]);
var inst_20624 = cljs.core.deref.call(null,cs);
var inst_20625__$1 = cljs.core.keys.call(null,inst_20624);
var inst_20626 = cljs.core.count.call(null,inst_20625__$1);
var inst_20627 = cljs.core.reset_BANG_.call(null,dctr,inst_20626);
var inst_20632 = cljs.core.seq.call(null,inst_20625__$1);
var inst_20633 = inst_20632;
var inst_20634 = null;
var inst_20635 = (0);
var inst_20636 = (0);
var state_20693__$1 = (function (){var statearr_20736 = state_20693;
(statearr_20736[(20)] = inst_20635);

(statearr_20736[(10)] = inst_20634);

(statearr_20736[(21)] = inst_20633);

(statearr_20736[(29)] = inst_20625__$1);

(statearr_20736[(30)] = inst_20627);

(statearr_20736[(11)] = inst_20636);

return statearr_20736;
})();
var statearr_20737_20806 = state_20693__$1;
(statearr_20737_20806[(2)] = null);

(statearr_20737_20806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (28))){
var inst_20633 = (state_20693[(21)]);
var inst_20652 = (state_20693[(25)]);
var inst_20652__$1 = cljs.core.seq.call(null,inst_20633);
var state_20693__$1 = (function (){var statearr_20738 = state_20693;
(statearr_20738[(25)] = inst_20652__$1);

return statearr_20738;
})();
if(inst_20652__$1){
var statearr_20739_20807 = state_20693__$1;
(statearr_20739_20807[(1)] = (33));

} else {
var statearr_20740_20808 = state_20693__$1;
(statearr_20740_20808[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (25))){
var inst_20635 = (state_20693[(20)]);
var inst_20636 = (state_20693[(11)]);
var inst_20638 = (inst_20636 < inst_20635);
var inst_20639 = inst_20638;
var state_20693__$1 = state_20693;
if(cljs.core.truth_(inst_20639)){
var statearr_20741_20809 = state_20693__$1;
(statearr_20741_20809[(1)] = (27));

} else {
var statearr_20742_20810 = state_20693__$1;
(statearr_20742_20810[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (34))){
var state_20693__$1 = state_20693;
var statearr_20743_20811 = state_20693__$1;
(statearr_20743_20811[(2)] = null);

(statearr_20743_20811[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (17))){
var state_20693__$1 = state_20693;
var statearr_20744_20812 = state_20693__$1;
(statearr_20744_20812[(2)] = null);

(statearr_20744_20812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (3))){
var inst_20691 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20693__$1,inst_20691);
} else {
if((state_val_20694 === (12))){
var inst_20620 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20745_20813 = state_20693__$1;
(statearr_20745_20813[(2)] = inst_20620);

(statearr_20745_20813[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (2))){
var state_20693__$1 = state_20693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20693__$1,(4),ch);
} else {
if((state_val_20694 === (23))){
var state_20693__$1 = state_20693;
var statearr_20746_20814 = state_20693__$1;
(statearr_20746_20814[(2)] = null);

(statearr_20746_20814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (35))){
var inst_20675 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20747_20815 = state_20693__$1;
(statearr_20747_20815[(2)] = inst_20675);

(statearr_20747_20815[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (19))){
var inst_20594 = (state_20693[(7)]);
var inst_20598 = cljs.core.chunk_first.call(null,inst_20594);
var inst_20599 = cljs.core.chunk_rest.call(null,inst_20594);
var inst_20600 = cljs.core.count.call(null,inst_20598);
var inst_20574 = inst_20599;
var inst_20575 = inst_20598;
var inst_20576 = inst_20600;
var inst_20577 = (0);
var state_20693__$1 = (function (){var statearr_20748 = state_20693;
(statearr_20748[(13)] = inst_20574);

(statearr_20748[(14)] = inst_20575);

(statearr_20748[(15)] = inst_20577);

(statearr_20748[(17)] = inst_20576);

return statearr_20748;
})();
var statearr_20749_20816 = state_20693__$1;
(statearr_20749_20816[(2)] = null);

(statearr_20749_20816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (11))){
var inst_20574 = (state_20693[(13)]);
var inst_20594 = (state_20693[(7)]);
var inst_20594__$1 = cljs.core.seq.call(null,inst_20574);
var state_20693__$1 = (function (){var statearr_20750 = state_20693;
(statearr_20750[(7)] = inst_20594__$1);

return statearr_20750;
})();
if(inst_20594__$1){
var statearr_20751_20817 = state_20693__$1;
(statearr_20751_20817[(1)] = (16));

} else {
var statearr_20752_20818 = state_20693__$1;
(statearr_20752_20818[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (9))){
var inst_20622 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20753_20819 = state_20693__$1;
(statearr_20753_20819[(2)] = inst_20622);

(statearr_20753_20819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (5))){
var inst_20572 = cljs.core.deref.call(null,cs);
var inst_20573 = cljs.core.seq.call(null,inst_20572);
var inst_20574 = inst_20573;
var inst_20575 = null;
var inst_20576 = (0);
var inst_20577 = (0);
var state_20693__$1 = (function (){var statearr_20754 = state_20693;
(statearr_20754[(13)] = inst_20574);

(statearr_20754[(14)] = inst_20575);

(statearr_20754[(15)] = inst_20577);

(statearr_20754[(17)] = inst_20576);

return statearr_20754;
})();
var statearr_20755_20820 = state_20693__$1;
(statearr_20755_20820[(2)] = null);

(statearr_20755_20820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (14))){
var state_20693__$1 = state_20693;
var statearr_20756_20821 = state_20693__$1;
(statearr_20756_20821[(2)] = null);

(statearr_20756_20821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (45))){
var inst_20683 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20757_20822 = state_20693__$1;
(statearr_20757_20822[(2)] = inst_20683);

(statearr_20757_20822[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (26))){
var inst_20625 = (state_20693[(29)]);
var inst_20679 = (state_20693[(2)]);
var inst_20680 = cljs.core.seq.call(null,inst_20625);
var state_20693__$1 = (function (){var statearr_20758 = state_20693;
(statearr_20758[(31)] = inst_20679);

return statearr_20758;
})();
if(inst_20680){
var statearr_20759_20823 = state_20693__$1;
(statearr_20759_20823[(1)] = (42));

} else {
var statearr_20760_20824 = state_20693__$1;
(statearr_20760_20824[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (16))){
var inst_20594 = (state_20693[(7)]);
var inst_20596 = cljs.core.chunked_seq_QMARK_.call(null,inst_20594);
var state_20693__$1 = state_20693;
if(inst_20596){
var statearr_20761_20825 = state_20693__$1;
(statearr_20761_20825[(1)] = (19));

} else {
var statearr_20762_20826 = state_20693__$1;
(statearr_20762_20826[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (38))){
var inst_20672 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20763_20827 = state_20693__$1;
(statearr_20763_20827[(2)] = inst_20672);

(statearr_20763_20827[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (30))){
var state_20693__$1 = state_20693;
var statearr_20764_20828 = state_20693__$1;
(statearr_20764_20828[(2)] = null);

(statearr_20764_20828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (10))){
var inst_20575 = (state_20693[(14)]);
var inst_20577 = (state_20693[(15)]);
var inst_20583 = cljs.core._nth.call(null,inst_20575,inst_20577);
var inst_20584 = cljs.core.nth.call(null,inst_20583,(0),null);
var inst_20585 = cljs.core.nth.call(null,inst_20583,(1),null);
var state_20693__$1 = (function (){var statearr_20765 = state_20693;
(statearr_20765[(26)] = inst_20584);

return statearr_20765;
})();
if(cljs.core.truth_(inst_20585)){
var statearr_20766_20829 = state_20693__$1;
(statearr_20766_20829[(1)] = (13));

} else {
var statearr_20767_20830 = state_20693__$1;
(statearr_20767_20830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (18))){
var inst_20618 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20768_20831 = state_20693__$1;
(statearr_20768_20831[(2)] = inst_20618);

(statearr_20768_20831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (42))){
var state_20693__$1 = state_20693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20693__$1,(45),dchan);
} else {
if((state_val_20694 === (37))){
var inst_20565 = (state_20693[(9)]);
var inst_20661 = (state_20693[(23)]);
var inst_20652 = (state_20693[(25)]);
var inst_20661__$1 = cljs.core.first.call(null,inst_20652);
var inst_20662 = cljs.core.async.put_BANG_.call(null,inst_20661__$1,inst_20565,done);
var state_20693__$1 = (function (){var statearr_20769 = state_20693;
(statearr_20769[(23)] = inst_20661__$1);

return statearr_20769;
})();
if(cljs.core.truth_(inst_20662)){
var statearr_20770_20832 = state_20693__$1;
(statearr_20770_20832[(1)] = (39));

} else {
var statearr_20771_20833 = state_20693__$1;
(statearr_20771_20833[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (8))){
var inst_20577 = (state_20693[(15)]);
var inst_20576 = (state_20693[(17)]);
var inst_20579 = (inst_20577 < inst_20576);
var inst_20580 = inst_20579;
var state_20693__$1 = state_20693;
if(cljs.core.truth_(inst_20580)){
var statearr_20772_20834 = state_20693__$1;
(statearr_20772_20834[(1)] = (10));

} else {
var statearr_20773_20835 = state_20693__$1;
(statearr_20773_20835[(1)] = (11));

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
});})(c__19474__auto___20781,cs,m,dchan,dctr,done))
;
return ((function (switch__19362__auto__,c__19474__auto___20781,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19363__auto__ = null;
var cljs$core$async$mult_$_state_machine__19363__auto____0 = (function (){
var statearr_20777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20777[(0)] = cljs$core$async$mult_$_state_machine__19363__auto__);

(statearr_20777[(1)] = (1));

return statearr_20777;
});
var cljs$core$async$mult_$_state_machine__19363__auto____1 = (function (state_20693){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_20693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e20778){if((e20778 instanceof Object)){
var ex__19366__auto__ = e20778;
var statearr_20779_20836 = state_20693;
(statearr_20779_20836[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20837 = state_20693;
state_20693 = G__20837;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19363__auto__ = function(state_20693){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19363__auto____1.call(this,state_20693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19363__auto____0;
cljs$core$async$mult_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19363__auto____1;
return cljs$core$async$mult_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___20781,cs,m,dchan,dctr,done))
})();
var state__19476__auto__ = (function (){var statearr_20780 = f__19475__auto__.call(null);
(statearr_20780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___20781);

return statearr_20780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___20781,cs,m,dchan,dctr,done))
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
var args20838 = [];
var len__17910__auto___20841 = arguments.length;
var i__17911__auto___20842 = (0);
while(true){
if((i__17911__auto___20842 < len__17910__auto___20841)){
args20838.push((arguments[i__17911__auto___20842]));

var G__20843 = (i__17911__auto___20842 + (1));
i__17911__auto___20842 = G__20843;
continue;
} else {
}
break;
}

var G__20840 = args20838.length;
switch (G__20840) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20838.length)].join('')));

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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m);
} else {
var m__17508__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,state_map);
} else {
var m__17508__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,state_map);
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
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,mode);
} else {
var m__17508__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17917__auto__ = [];
var len__17910__auto___20855 = arguments.length;
var i__17911__auto___20856 = (0);
while(true){
if((i__17911__auto___20856 < len__17910__auto___20855)){
args__17917__auto__.push((arguments[i__17911__auto___20856]));

var G__20857 = (i__17911__auto___20856 + (1));
i__17911__auto___20856 = G__20857;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((3) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17918__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20849){
var map__20850 = p__20849;
var map__20850__$1 = ((((!((map__20850 == null)))?((((map__20850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20850):map__20850);
var opts = map__20850__$1;
var statearr_20852_20858 = state;
(statearr_20852_20858[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20850,map__20850__$1,opts){
return (function (val){
var statearr_20853_20859 = state;
(statearr_20853_20859[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20850,map__20850__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20854_20860 = state;
(statearr_20854_20860[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20845){
var G__20846 = cljs.core.first.call(null,seq20845);
var seq20845__$1 = cljs.core.next.call(null,seq20845);
var G__20847 = cljs.core.first.call(null,seq20845__$1);
var seq20845__$2 = cljs.core.next.call(null,seq20845__$1);
var G__20848 = cljs.core.first.call(null,seq20845__$2);
var seq20845__$3 = cljs.core.next.call(null,seq20845__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20846,G__20847,G__20848,seq20845__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21024 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21025){
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
this.meta21025 = meta21025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21026,meta21025__$1){
var self__ = this;
var _21026__$1 = this;
return (new cljs.core.async.t_cljs$core$async21024(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21025__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21026){
var self__ = this;
var _21026__$1 = this;
return self__.meta21025;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21024.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21024.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21025","meta21025",1775938724,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21024";

cljs.core.async.t_cljs$core$async21024.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21024");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21024 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21025){
return (new cljs.core.async.t_cljs$core$async21024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21025));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21024(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19474__auto___21187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___21187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___21187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21124){
var state_val_21125 = (state_21124[(1)]);
if((state_val_21125 === (7))){
var inst_21042 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
var statearr_21126_21188 = state_21124__$1;
(statearr_21126_21188[(2)] = inst_21042);

(statearr_21126_21188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (20))){
var inst_21054 = (state_21124[(7)]);
var state_21124__$1 = state_21124;
var statearr_21127_21189 = state_21124__$1;
(statearr_21127_21189[(2)] = inst_21054);

(statearr_21127_21189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (27))){
var state_21124__$1 = state_21124;
var statearr_21128_21190 = state_21124__$1;
(statearr_21128_21190[(2)] = null);

(statearr_21128_21190[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (1))){
var inst_21030 = (state_21124[(8)]);
var inst_21030__$1 = calc_state.call(null);
var inst_21032 = (inst_21030__$1 == null);
var inst_21033 = cljs.core.not.call(null,inst_21032);
var state_21124__$1 = (function (){var statearr_21129 = state_21124;
(statearr_21129[(8)] = inst_21030__$1);

return statearr_21129;
})();
if(inst_21033){
var statearr_21130_21191 = state_21124__$1;
(statearr_21130_21191[(1)] = (2));

} else {
var statearr_21131_21192 = state_21124__$1;
(statearr_21131_21192[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (24))){
var inst_21077 = (state_21124[(9)]);
var inst_21084 = (state_21124[(10)]);
var inst_21098 = (state_21124[(11)]);
var inst_21098__$1 = inst_21077.call(null,inst_21084);
var state_21124__$1 = (function (){var statearr_21132 = state_21124;
(statearr_21132[(11)] = inst_21098__$1);

return statearr_21132;
})();
if(cljs.core.truth_(inst_21098__$1)){
var statearr_21133_21193 = state_21124__$1;
(statearr_21133_21193[(1)] = (29));

} else {
var statearr_21134_21194 = state_21124__$1;
(statearr_21134_21194[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (4))){
var inst_21045 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
if(cljs.core.truth_(inst_21045)){
var statearr_21135_21195 = state_21124__$1;
(statearr_21135_21195[(1)] = (8));

} else {
var statearr_21136_21196 = state_21124__$1;
(statearr_21136_21196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (15))){
var inst_21071 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
if(cljs.core.truth_(inst_21071)){
var statearr_21137_21197 = state_21124__$1;
(statearr_21137_21197[(1)] = (19));

} else {
var statearr_21138_21198 = state_21124__$1;
(statearr_21138_21198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (21))){
var inst_21076 = (state_21124[(12)]);
var inst_21076__$1 = (state_21124[(2)]);
var inst_21077 = cljs.core.get.call(null,inst_21076__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21078 = cljs.core.get.call(null,inst_21076__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21079 = cljs.core.get.call(null,inst_21076__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21124__$1 = (function (){var statearr_21139 = state_21124;
(statearr_21139[(9)] = inst_21077);

(statearr_21139[(13)] = inst_21078);

(statearr_21139[(12)] = inst_21076__$1);

return statearr_21139;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21124__$1,(22),inst_21079);
} else {
if((state_val_21125 === (31))){
var inst_21106 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
if(cljs.core.truth_(inst_21106)){
var statearr_21140_21199 = state_21124__$1;
(statearr_21140_21199[(1)] = (32));

} else {
var statearr_21141_21200 = state_21124__$1;
(statearr_21141_21200[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (32))){
var inst_21083 = (state_21124[(14)]);
var state_21124__$1 = state_21124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21124__$1,(35),out,inst_21083);
} else {
if((state_val_21125 === (33))){
var inst_21076 = (state_21124[(12)]);
var inst_21054 = inst_21076;
var state_21124__$1 = (function (){var statearr_21142 = state_21124;
(statearr_21142[(7)] = inst_21054);

return statearr_21142;
})();
var statearr_21143_21201 = state_21124__$1;
(statearr_21143_21201[(2)] = null);

(statearr_21143_21201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (13))){
var inst_21054 = (state_21124[(7)]);
var inst_21061 = inst_21054.cljs$lang$protocol_mask$partition0$;
var inst_21062 = (inst_21061 & (64));
var inst_21063 = inst_21054.cljs$core$ISeq$;
var inst_21064 = (inst_21062) || (inst_21063);
var state_21124__$1 = state_21124;
if(cljs.core.truth_(inst_21064)){
var statearr_21144_21202 = state_21124__$1;
(statearr_21144_21202[(1)] = (16));

} else {
var statearr_21145_21203 = state_21124__$1;
(statearr_21145_21203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (22))){
var inst_21084 = (state_21124[(10)]);
var inst_21083 = (state_21124[(14)]);
var inst_21082 = (state_21124[(2)]);
var inst_21083__$1 = cljs.core.nth.call(null,inst_21082,(0),null);
var inst_21084__$1 = cljs.core.nth.call(null,inst_21082,(1),null);
var inst_21085 = (inst_21083__$1 == null);
var inst_21086 = cljs.core._EQ_.call(null,inst_21084__$1,change);
var inst_21087 = (inst_21085) || (inst_21086);
var state_21124__$1 = (function (){var statearr_21146 = state_21124;
(statearr_21146[(10)] = inst_21084__$1);

(statearr_21146[(14)] = inst_21083__$1);

return statearr_21146;
})();
if(cljs.core.truth_(inst_21087)){
var statearr_21147_21204 = state_21124__$1;
(statearr_21147_21204[(1)] = (23));

} else {
var statearr_21148_21205 = state_21124__$1;
(statearr_21148_21205[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (36))){
var inst_21076 = (state_21124[(12)]);
var inst_21054 = inst_21076;
var state_21124__$1 = (function (){var statearr_21149 = state_21124;
(statearr_21149[(7)] = inst_21054);

return statearr_21149;
})();
var statearr_21150_21206 = state_21124__$1;
(statearr_21150_21206[(2)] = null);

(statearr_21150_21206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (29))){
var inst_21098 = (state_21124[(11)]);
var state_21124__$1 = state_21124;
var statearr_21151_21207 = state_21124__$1;
(statearr_21151_21207[(2)] = inst_21098);

(statearr_21151_21207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (6))){
var state_21124__$1 = state_21124;
var statearr_21152_21208 = state_21124__$1;
(statearr_21152_21208[(2)] = false);

(statearr_21152_21208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (28))){
var inst_21094 = (state_21124[(2)]);
var inst_21095 = calc_state.call(null);
var inst_21054 = inst_21095;
var state_21124__$1 = (function (){var statearr_21153 = state_21124;
(statearr_21153[(15)] = inst_21094);

(statearr_21153[(7)] = inst_21054);

return statearr_21153;
})();
var statearr_21154_21209 = state_21124__$1;
(statearr_21154_21209[(2)] = null);

(statearr_21154_21209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (25))){
var inst_21120 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
var statearr_21155_21210 = state_21124__$1;
(statearr_21155_21210[(2)] = inst_21120);

(statearr_21155_21210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (34))){
var inst_21118 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
var statearr_21156_21211 = state_21124__$1;
(statearr_21156_21211[(2)] = inst_21118);

(statearr_21156_21211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (17))){
var state_21124__$1 = state_21124;
var statearr_21157_21212 = state_21124__$1;
(statearr_21157_21212[(2)] = false);

(statearr_21157_21212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (3))){
var state_21124__$1 = state_21124;
var statearr_21158_21213 = state_21124__$1;
(statearr_21158_21213[(2)] = false);

(statearr_21158_21213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (12))){
var inst_21122 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21124__$1,inst_21122);
} else {
if((state_val_21125 === (2))){
var inst_21030 = (state_21124[(8)]);
var inst_21035 = inst_21030.cljs$lang$protocol_mask$partition0$;
var inst_21036 = (inst_21035 & (64));
var inst_21037 = inst_21030.cljs$core$ISeq$;
var inst_21038 = (inst_21036) || (inst_21037);
var state_21124__$1 = state_21124;
if(cljs.core.truth_(inst_21038)){
var statearr_21159_21214 = state_21124__$1;
(statearr_21159_21214[(1)] = (5));

} else {
var statearr_21160_21215 = state_21124__$1;
(statearr_21160_21215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (23))){
var inst_21083 = (state_21124[(14)]);
var inst_21089 = (inst_21083 == null);
var state_21124__$1 = state_21124;
if(cljs.core.truth_(inst_21089)){
var statearr_21161_21216 = state_21124__$1;
(statearr_21161_21216[(1)] = (26));

} else {
var statearr_21162_21217 = state_21124__$1;
(statearr_21162_21217[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (35))){
var inst_21109 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
if(cljs.core.truth_(inst_21109)){
var statearr_21163_21218 = state_21124__$1;
(statearr_21163_21218[(1)] = (36));

} else {
var statearr_21164_21219 = state_21124__$1;
(statearr_21164_21219[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (19))){
var inst_21054 = (state_21124[(7)]);
var inst_21073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21054);
var state_21124__$1 = state_21124;
var statearr_21165_21220 = state_21124__$1;
(statearr_21165_21220[(2)] = inst_21073);

(statearr_21165_21220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (11))){
var inst_21054 = (state_21124[(7)]);
var inst_21058 = (inst_21054 == null);
var inst_21059 = cljs.core.not.call(null,inst_21058);
var state_21124__$1 = state_21124;
if(inst_21059){
var statearr_21166_21221 = state_21124__$1;
(statearr_21166_21221[(1)] = (13));

} else {
var statearr_21167_21222 = state_21124__$1;
(statearr_21167_21222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (9))){
var inst_21030 = (state_21124[(8)]);
var state_21124__$1 = state_21124;
var statearr_21168_21223 = state_21124__$1;
(statearr_21168_21223[(2)] = inst_21030);

(statearr_21168_21223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (5))){
var state_21124__$1 = state_21124;
var statearr_21169_21224 = state_21124__$1;
(statearr_21169_21224[(2)] = true);

(statearr_21169_21224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (14))){
var state_21124__$1 = state_21124;
var statearr_21170_21225 = state_21124__$1;
(statearr_21170_21225[(2)] = false);

(statearr_21170_21225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (26))){
var inst_21084 = (state_21124[(10)]);
var inst_21091 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21084);
var state_21124__$1 = state_21124;
var statearr_21171_21226 = state_21124__$1;
(statearr_21171_21226[(2)] = inst_21091);

(statearr_21171_21226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (16))){
var state_21124__$1 = state_21124;
var statearr_21172_21227 = state_21124__$1;
(statearr_21172_21227[(2)] = true);

(statearr_21172_21227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (38))){
var inst_21114 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
var statearr_21173_21228 = state_21124__$1;
(statearr_21173_21228[(2)] = inst_21114);

(statearr_21173_21228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (30))){
var inst_21077 = (state_21124[(9)]);
var inst_21084 = (state_21124[(10)]);
var inst_21078 = (state_21124[(13)]);
var inst_21101 = cljs.core.empty_QMARK_.call(null,inst_21077);
var inst_21102 = inst_21078.call(null,inst_21084);
var inst_21103 = cljs.core.not.call(null,inst_21102);
var inst_21104 = (inst_21101) && (inst_21103);
var state_21124__$1 = state_21124;
var statearr_21174_21229 = state_21124__$1;
(statearr_21174_21229[(2)] = inst_21104);

(statearr_21174_21229[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (10))){
var inst_21030 = (state_21124[(8)]);
var inst_21050 = (state_21124[(2)]);
var inst_21051 = cljs.core.get.call(null,inst_21050,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21052 = cljs.core.get.call(null,inst_21050,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21053 = cljs.core.get.call(null,inst_21050,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21054 = inst_21030;
var state_21124__$1 = (function (){var statearr_21175 = state_21124;
(statearr_21175[(16)] = inst_21052);

(statearr_21175[(7)] = inst_21054);

(statearr_21175[(17)] = inst_21053);

(statearr_21175[(18)] = inst_21051);

return statearr_21175;
})();
var statearr_21176_21230 = state_21124__$1;
(statearr_21176_21230[(2)] = null);

(statearr_21176_21230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (18))){
var inst_21068 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
var statearr_21177_21231 = state_21124__$1;
(statearr_21177_21231[(2)] = inst_21068);

(statearr_21177_21231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (37))){
var state_21124__$1 = state_21124;
var statearr_21178_21232 = state_21124__$1;
(statearr_21178_21232[(2)] = null);

(statearr_21178_21232[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (8))){
var inst_21030 = (state_21124[(8)]);
var inst_21047 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21030);
var state_21124__$1 = state_21124;
var statearr_21179_21233 = state_21124__$1;
(statearr_21179_21233[(2)] = inst_21047);

(statearr_21179_21233[(1)] = (10));


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
});})(c__19474__auto___21187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19362__auto__,c__19474__auto___21187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19363__auto__ = null;
var cljs$core$async$mix_$_state_machine__19363__auto____0 = (function (){
var statearr_21183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21183[(0)] = cljs$core$async$mix_$_state_machine__19363__auto__);

(statearr_21183[(1)] = (1));

return statearr_21183;
});
var cljs$core$async$mix_$_state_machine__19363__auto____1 = (function (state_21124){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_21124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e21184){if((e21184 instanceof Object)){
var ex__19366__auto__ = e21184;
var statearr_21185_21234 = state_21124;
(statearr_21185_21234[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21235 = state_21124;
state_21124 = G__21235;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19363__auto__ = function(state_21124){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19363__auto____1.call(this,state_21124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19363__auto____0;
cljs$core$async$mix_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19363__auto____1;
return cljs$core$async$mix_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___21187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19476__auto__ = (function (){var statearr_21186 = f__19475__auto__.call(null);
(statearr_21186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___21187);

return statearr_21186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___21187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17508__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21236 = [];
var len__17910__auto___21239 = arguments.length;
var i__17911__auto___21240 = (0);
while(true){
if((i__17911__auto___21240 < len__17910__auto___21239)){
args21236.push((arguments[i__17911__auto___21240]));

var G__21241 = (i__17911__auto___21240 + (1));
i__17911__auto___21240 = G__21241;
continue;
} else {
}
break;
}

var G__21238 = args21236.length;
switch (G__21238) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21236.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p);
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
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v);
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
var args21244 = [];
var len__17910__auto___21369 = arguments.length;
var i__17911__auto___21370 = (0);
while(true){
if((i__17911__auto___21370 < len__17910__auto___21369)){
args21244.push((arguments[i__17911__auto___21370]));

var G__21371 = (i__17911__auto___21370 + (1));
i__17911__auto___21370 = G__21371;
continue;
} else {
}
break;
}

var G__21246 = args21244.length;
switch (G__21246) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21244.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16852__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16852__auto__,mults){
return (function (p1__21243_SHARP_){
if(cljs.core.truth_(p1__21243_SHARP_.call(null,topic))){
return p1__21243_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21243_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16852__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21247 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21248){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21248 = meta21248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21249,meta21248__$1){
var self__ = this;
var _21249__$1 = this;
return (new cljs.core.async.t_cljs$core$async21247(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21248__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21249){
var self__ = this;
var _21249__$1 = this;
return self__.meta21248;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21247.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21248","meta21248",-1336662335,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21247";

cljs.core.async.t_cljs$core$async21247.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21247");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21247 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21247(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21248){
return (new cljs.core.async.t_cljs$core$async21247(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21248));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21247(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19474__auto___21373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___21373,mults,ensure_mult,p){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___21373,mults,ensure_mult,p){
return (function (state_21321){
var state_val_21322 = (state_21321[(1)]);
if((state_val_21322 === (7))){
var inst_21317 = (state_21321[(2)]);
var state_21321__$1 = state_21321;
var statearr_21323_21374 = state_21321__$1;
(statearr_21323_21374[(2)] = inst_21317);

(statearr_21323_21374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (20))){
var state_21321__$1 = state_21321;
var statearr_21324_21375 = state_21321__$1;
(statearr_21324_21375[(2)] = null);

(statearr_21324_21375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (1))){
var state_21321__$1 = state_21321;
var statearr_21325_21376 = state_21321__$1;
(statearr_21325_21376[(2)] = null);

(statearr_21325_21376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (24))){
var inst_21300 = (state_21321[(7)]);
var inst_21309 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21300);
var state_21321__$1 = state_21321;
var statearr_21326_21377 = state_21321__$1;
(statearr_21326_21377[(2)] = inst_21309);

(statearr_21326_21377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (4))){
var inst_21252 = (state_21321[(8)]);
var inst_21252__$1 = (state_21321[(2)]);
var inst_21253 = (inst_21252__$1 == null);
var state_21321__$1 = (function (){var statearr_21327 = state_21321;
(statearr_21327[(8)] = inst_21252__$1);

return statearr_21327;
})();
if(cljs.core.truth_(inst_21253)){
var statearr_21328_21378 = state_21321__$1;
(statearr_21328_21378[(1)] = (5));

} else {
var statearr_21329_21379 = state_21321__$1;
(statearr_21329_21379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (15))){
var inst_21294 = (state_21321[(2)]);
var state_21321__$1 = state_21321;
var statearr_21330_21380 = state_21321__$1;
(statearr_21330_21380[(2)] = inst_21294);

(statearr_21330_21380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (21))){
var inst_21314 = (state_21321[(2)]);
var state_21321__$1 = (function (){var statearr_21331 = state_21321;
(statearr_21331[(9)] = inst_21314);

return statearr_21331;
})();
var statearr_21332_21381 = state_21321__$1;
(statearr_21332_21381[(2)] = null);

(statearr_21332_21381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (13))){
var inst_21276 = (state_21321[(10)]);
var inst_21278 = cljs.core.chunked_seq_QMARK_.call(null,inst_21276);
var state_21321__$1 = state_21321;
if(inst_21278){
var statearr_21333_21382 = state_21321__$1;
(statearr_21333_21382[(1)] = (16));

} else {
var statearr_21334_21383 = state_21321__$1;
(statearr_21334_21383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (22))){
var inst_21306 = (state_21321[(2)]);
var state_21321__$1 = state_21321;
if(cljs.core.truth_(inst_21306)){
var statearr_21335_21384 = state_21321__$1;
(statearr_21335_21384[(1)] = (23));

} else {
var statearr_21336_21385 = state_21321__$1;
(statearr_21336_21385[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (6))){
var inst_21302 = (state_21321[(11)]);
var inst_21252 = (state_21321[(8)]);
var inst_21300 = (state_21321[(7)]);
var inst_21300__$1 = topic_fn.call(null,inst_21252);
var inst_21301 = cljs.core.deref.call(null,mults);
var inst_21302__$1 = cljs.core.get.call(null,inst_21301,inst_21300__$1);
var state_21321__$1 = (function (){var statearr_21337 = state_21321;
(statearr_21337[(11)] = inst_21302__$1);

(statearr_21337[(7)] = inst_21300__$1);

return statearr_21337;
})();
if(cljs.core.truth_(inst_21302__$1)){
var statearr_21338_21386 = state_21321__$1;
(statearr_21338_21386[(1)] = (19));

} else {
var statearr_21339_21387 = state_21321__$1;
(statearr_21339_21387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (25))){
var inst_21311 = (state_21321[(2)]);
var state_21321__$1 = state_21321;
var statearr_21340_21388 = state_21321__$1;
(statearr_21340_21388[(2)] = inst_21311);

(statearr_21340_21388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (17))){
var inst_21276 = (state_21321[(10)]);
var inst_21285 = cljs.core.first.call(null,inst_21276);
var inst_21286 = cljs.core.async.muxch_STAR_.call(null,inst_21285);
var inst_21287 = cljs.core.async.close_BANG_.call(null,inst_21286);
var inst_21288 = cljs.core.next.call(null,inst_21276);
var inst_21262 = inst_21288;
var inst_21263 = null;
var inst_21264 = (0);
var inst_21265 = (0);
var state_21321__$1 = (function (){var statearr_21341 = state_21321;
(statearr_21341[(12)] = inst_21265);

(statearr_21341[(13)] = inst_21287);

(statearr_21341[(14)] = inst_21262);

(statearr_21341[(15)] = inst_21263);

(statearr_21341[(16)] = inst_21264);

return statearr_21341;
})();
var statearr_21342_21389 = state_21321__$1;
(statearr_21342_21389[(2)] = null);

(statearr_21342_21389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (3))){
var inst_21319 = (state_21321[(2)]);
var state_21321__$1 = state_21321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21321__$1,inst_21319);
} else {
if((state_val_21322 === (12))){
var inst_21296 = (state_21321[(2)]);
var state_21321__$1 = state_21321;
var statearr_21343_21390 = state_21321__$1;
(statearr_21343_21390[(2)] = inst_21296);

(statearr_21343_21390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (2))){
var state_21321__$1 = state_21321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21321__$1,(4),ch);
} else {
if((state_val_21322 === (23))){
var state_21321__$1 = state_21321;
var statearr_21344_21391 = state_21321__$1;
(statearr_21344_21391[(2)] = null);

(statearr_21344_21391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (19))){
var inst_21302 = (state_21321[(11)]);
var inst_21252 = (state_21321[(8)]);
var inst_21304 = cljs.core.async.muxch_STAR_.call(null,inst_21302);
var state_21321__$1 = state_21321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21321__$1,(22),inst_21304,inst_21252);
} else {
if((state_val_21322 === (11))){
var inst_21276 = (state_21321[(10)]);
var inst_21262 = (state_21321[(14)]);
var inst_21276__$1 = cljs.core.seq.call(null,inst_21262);
var state_21321__$1 = (function (){var statearr_21345 = state_21321;
(statearr_21345[(10)] = inst_21276__$1);

return statearr_21345;
})();
if(inst_21276__$1){
var statearr_21346_21392 = state_21321__$1;
(statearr_21346_21392[(1)] = (13));

} else {
var statearr_21347_21393 = state_21321__$1;
(statearr_21347_21393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (9))){
var inst_21298 = (state_21321[(2)]);
var state_21321__$1 = state_21321;
var statearr_21348_21394 = state_21321__$1;
(statearr_21348_21394[(2)] = inst_21298);

(statearr_21348_21394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (5))){
var inst_21259 = cljs.core.deref.call(null,mults);
var inst_21260 = cljs.core.vals.call(null,inst_21259);
var inst_21261 = cljs.core.seq.call(null,inst_21260);
var inst_21262 = inst_21261;
var inst_21263 = null;
var inst_21264 = (0);
var inst_21265 = (0);
var state_21321__$1 = (function (){var statearr_21349 = state_21321;
(statearr_21349[(12)] = inst_21265);

(statearr_21349[(14)] = inst_21262);

(statearr_21349[(15)] = inst_21263);

(statearr_21349[(16)] = inst_21264);

return statearr_21349;
})();
var statearr_21350_21395 = state_21321__$1;
(statearr_21350_21395[(2)] = null);

(statearr_21350_21395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (14))){
var state_21321__$1 = state_21321;
var statearr_21354_21396 = state_21321__$1;
(statearr_21354_21396[(2)] = null);

(statearr_21354_21396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (16))){
var inst_21276 = (state_21321[(10)]);
var inst_21280 = cljs.core.chunk_first.call(null,inst_21276);
var inst_21281 = cljs.core.chunk_rest.call(null,inst_21276);
var inst_21282 = cljs.core.count.call(null,inst_21280);
var inst_21262 = inst_21281;
var inst_21263 = inst_21280;
var inst_21264 = inst_21282;
var inst_21265 = (0);
var state_21321__$1 = (function (){var statearr_21355 = state_21321;
(statearr_21355[(12)] = inst_21265);

(statearr_21355[(14)] = inst_21262);

(statearr_21355[(15)] = inst_21263);

(statearr_21355[(16)] = inst_21264);

return statearr_21355;
})();
var statearr_21356_21397 = state_21321__$1;
(statearr_21356_21397[(2)] = null);

(statearr_21356_21397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (10))){
var inst_21265 = (state_21321[(12)]);
var inst_21262 = (state_21321[(14)]);
var inst_21263 = (state_21321[(15)]);
var inst_21264 = (state_21321[(16)]);
var inst_21270 = cljs.core._nth.call(null,inst_21263,inst_21265);
var inst_21271 = cljs.core.async.muxch_STAR_.call(null,inst_21270);
var inst_21272 = cljs.core.async.close_BANG_.call(null,inst_21271);
var inst_21273 = (inst_21265 + (1));
var tmp21351 = inst_21262;
var tmp21352 = inst_21263;
var tmp21353 = inst_21264;
var inst_21262__$1 = tmp21351;
var inst_21263__$1 = tmp21352;
var inst_21264__$1 = tmp21353;
var inst_21265__$1 = inst_21273;
var state_21321__$1 = (function (){var statearr_21357 = state_21321;
(statearr_21357[(12)] = inst_21265__$1);

(statearr_21357[(14)] = inst_21262__$1);

(statearr_21357[(17)] = inst_21272);

(statearr_21357[(15)] = inst_21263__$1);

(statearr_21357[(16)] = inst_21264__$1);

return statearr_21357;
})();
var statearr_21358_21398 = state_21321__$1;
(statearr_21358_21398[(2)] = null);

(statearr_21358_21398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (18))){
var inst_21291 = (state_21321[(2)]);
var state_21321__$1 = state_21321;
var statearr_21359_21399 = state_21321__$1;
(statearr_21359_21399[(2)] = inst_21291);

(statearr_21359_21399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21322 === (8))){
var inst_21265 = (state_21321[(12)]);
var inst_21264 = (state_21321[(16)]);
var inst_21267 = (inst_21265 < inst_21264);
var inst_21268 = inst_21267;
var state_21321__$1 = state_21321;
if(cljs.core.truth_(inst_21268)){
var statearr_21360_21400 = state_21321__$1;
(statearr_21360_21400[(1)] = (10));

} else {
var statearr_21361_21401 = state_21321__$1;
(statearr_21361_21401[(1)] = (11));

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
});})(c__19474__auto___21373,mults,ensure_mult,p))
;
return ((function (switch__19362__auto__,c__19474__auto___21373,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_21365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21365[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_21365[(1)] = (1));

return statearr_21365;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_21321){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_21321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e21366){if((e21366 instanceof Object)){
var ex__19366__auto__ = e21366;
var statearr_21367_21402 = state_21321;
(statearr_21367_21402[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21403 = state_21321;
state_21321 = G__21403;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_21321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_21321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___21373,mults,ensure_mult,p))
})();
var state__19476__auto__ = (function (){var statearr_21368 = f__19475__auto__.call(null);
(statearr_21368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___21373);

return statearr_21368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___21373,mults,ensure_mult,p))
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
var args21404 = [];
var len__17910__auto___21407 = arguments.length;
var i__17911__auto___21408 = (0);
while(true){
if((i__17911__auto___21408 < len__17910__auto___21407)){
args21404.push((arguments[i__17911__auto___21408]));

var G__21409 = (i__17911__auto___21408 + (1));
i__17911__auto___21408 = G__21409;
continue;
} else {
}
break;
}

var G__21406 = args21404.length;
switch (G__21406) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21404.length)].join('')));

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
var args21411 = [];
var len__17910__auto___21414 = arguments.length;
var i__17911__auto___21415 = (0);
while(true){
if((i__17911__auto___21415 < len__17910__auto___21414)){
args21411.push((arguments[i__17911__auto___21415]));

var G__21416 = (i__17911__auto___21415 + (1));
i__17911__auto___21415 = G__21416;
continue;
} else {
}
break;
}

var G__21413 = args21411.length;
switch (G__21413) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21411.length)].join('')));

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
var args21418 = [];
var len__17910__auto___21489 = arguments.length;
var i__17911__auto___21490 = (0);
while(true){
if((i__17911__auto___21490 < len__17910__auto___21489)){
args21418.push((arguments[i__17911__auto___21490]));

var G__21491 = (i__17911__auto___21490 + (1));
i__17911__auto___21490 = G__21491;
continue;
} else {
}
break;
}

var G__21420 = args21418.length;
switch (G__21420) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21418.length)].join('')));

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
var c__19474__auto___21493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___21493,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___21493,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21459){
var state_val_21460 = (state_21459[(1)]);
if((state_val_21460 === (7))){
var state_21459__$1 = state_21459;
var statearr_21461_21494 = state_21459__$1;
(statearr_21461_21494[(2)] = null);

(statearr_21461_21494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (1))){
var state_21459__$1 = state_21459;
var statearr_21462_21495 = state_21459__$1;
(statearr_21462_21495[(2)] = null);

(statearr_21462_21495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (4))){
var inst_21423 = (state_21459[(7)]);
var inst_21425 = (inst_21423 < cnt);
var state_21459__$1 = state_21459;
if(cljs.core.truth_(inst_21425)){
var statearr_21463_21496 = state_21459__$1;
(statearr_21463_21496[(1)] = (6));

} else {
var statearr_21464_21497 = state_21459__$1;
(statearr_21464_21497[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (15))){
var inst_21455 = (state_21459[(2)]);
var state_21459__$1 = state_21459;
var statearr_21465_21498 = state_21459__$1;
(statearr_21465_21498[(2)] = inst_21455);

(statearr_21465_21498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (13))){
var inst_21448 = cljs.core.async.close_BANG_.call(null,out);
var state_21459__$1 = state_21459;
var statearr_21466_21499 = state_21459__$1;
(statearr_21466_21499[(2)] = inst_21448);

(statearr_21466_21499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (6))){
var state_21459__$1 = state_21459;
var statearr_21467_21500 = state_21459__$1;
(statearr_21467_21500[(2)] = null);

(statearr_21467_21500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (3))){
var inst_21457 = (state_21459[(2)]);
var state_21459__$1 = state_21459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21459__$1,inst_21457);
} else {
if((state_val_21460 === (12))){
var inst_21445 = (state_21459[(8)]);
var inst_21445__$1 = (state_21459[(2)]);
var inst_21446 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21445__$1);
var state_21459__$1 = (function (){var statearr_21468 = state_21459;
(statearr_21468[(8)] = inst_21445__$1);

return statearr_21468;
})();
if(cljs.core.truth_(inst_21446)){
var statearr_21469_21501 = state_21459__$1;
(statearr_21469_21501[(1)] = (13));

} else {
var statearr_21470_21502 = state_21459__$1;
(statearr_21470_21502[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (2))){
var inst_21422 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21423 = (0);
var state_21459__$1 = (function (){var statearr_21471 = state_21459;
(statearr_21471[(7)] = inst_21423);

(statearr_21471[(9)] = inst_21422);

return statearr_21471;
})();
var statearr_21472_21503 = state_21459__$1;
(statearr_21472_21503[(2)] = null);

(statearr_21472_21503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (11))){
var inst_21423 = (state_21459[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21459,(10),Object,null,(9));
var inst_21432 = chs__$1.call(null,inst_21423);
var inst_21433 = done.call(null,inst_21423);
var inst_21434 = cljs.core.async.take_BANG_.call(null,inst_21432,inst_21433);
var state_21459__$1 = state_21459;
var statearr_21473_21504 = state_21459__$1;
(statearr_21473_21504[(2)] = inst_21434);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21459__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (9))){
var inst_21423 = (state_21459[(7)]);
var inst_21436 = (state_21459[(2)]);
var inst_21437 = (inst_21423 + (1));
var inst_21423__$1 = inst_21437;
var state_21459__$1 = (function (){var statearr_21474 = state_21459;
(statearr_21474[(7)] = inst_21423__$1);

(statearr_21474[(10)] = inst_21436);

return statearr_21474;
})();
var statearr_21475_21505 = state_21459__$1;
(statearr_21475_21505[(2)] = null);

(statearr_21475_21505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (5))){
var inst_21443 = (state_21459[(2)]);
var state_21459__$1 = (function (){var statearr_21476 = state_21459;
(statearr_21476[(11)] = inst_21443);

return statearr_21476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21459__$1,(12),dchan);
} else {
if((state_val_21460 === (14))){
var inst_21445 = (state_21459[(8)]);
var inst_21450 = cljs.core.apply.call(null,f,inst_21445);
var state_21459__$1 = state_21459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21459__$1,(16),out,inst_21450);
} else {
if((state_val_21460 === (16))){
var inst_21452 = (state_21459[(2)]);
var state_21459__$1 = (function (){var statearr_21477 = state_21459;
(statearr_21477[(12)] = inst_21452);

return statearr_21477;
})();
var statearr_21478_21506 = state_21459__$1;
(statearr_21478_21506[(2)] = null);

(statearr_21478_21506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (10))){
var inst_21427 = (state_21459[(2)]);
var inst_21428 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21459__$1 = (function (){var statearr_21479 = state_21459;
(statearr_21479[(13)] = inst_21427);

return statearr_21479;
})();
var statearr_21480_21507 = state_21459__$1;
(statearr_21480_21507[(2)] = inst_21428);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21459__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21460 === (8))){
var inst_21441 = (state_21459[(2)]);
var state_21459__$1 = state_21459;
var statearr_21481_21508 = state_21459__$1;
(statearr_21481_21508[(2)] = inst_21441);

(statearr_21481_21508[(1)] = (5));


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
});})(c__19474__auto___21493,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19362__auto__,c__19474__auto___21493,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_21485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21485[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_21485[(1)] = (1));

return statearr_21485;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_21459){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_21459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e21486){if((e21486 instanceof Object)){
var ex__19366__auto__ = e21486;
var statearr_21487_21509 = state_21459;
(statearr_21487_21509[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21510 = state_21459;
state_21459 = G__21510;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_21459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_21459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___21493,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19476__auto__ = (function (){var statearr_21488 = f__19475__auto__.call(null);
(statearr_21488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___21493);

return statearr_21488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___21493,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args21512 = [];
var len__17910__auto___21568 = arguments.length;
var i__17911__auto___21569 = (0);
while(true){
if((i__17911__auto___21569 < len__17910__auto___21568)){
args21512.push((arguments[i__17911__auto___21569]));

var G__21570 = (i__17911__auto___21569 + (1));
i__17911__auto___21569 = G__21570;
continue;
} else {
}
break;
}

var G__21514 = args21512.length;
switch (G__21514) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21512.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19474__auto___21572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___21572,out){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___21572,out){
return (function (state_21544){
var state_val_21545 = (state_21544[(1)]);
if((state_val_21545 === (7))){
var inst_21524 = (state_21544[(7)]);
var inst_21523 = (state_21544[(8)]);
var inst_21523__$1 = (state_21544[(2)]);
var inst_21524__$1 = cljs.core.nth.call(null,inst_21523__$1,(0),null);
var inst_21525 = cljs.core.nth.call(null,inst_21523__$1,(1),null);
var inst_21526 = (inst_21524__$1 == null);
var state_21544__$1 = (function (){var statearr_21546 = state_21544;
(statearr_21546[(7)] = inst_21524__$1);

(statearr_21546[(9)] = inst_21525);

(statearr_21546[(8)] = inst_21523__$1);

return statearr_21546;
})();
if(cljs.core.truth_(inst_21526)){
var statearr_21547_21573 = state_21544__$1;
(statearr_21547_21573[(1)] = (8));

} else {
var statearr_21548_21574 = state_21544__$1;
(statearr_21548_21574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21545 === (1))){
var inst_21515 = cljs.core.vec.call(null,chs);
var inst_21516 = inst_21515;
var state_21544__$1 = (function (){var statearr_21549 = state_21544;
(statearr_21549[(10)] = inst_21516);

return statearr_21549;
})();
var statearr_21550_21575 = state_21544__$1;
(statearr_21550_21575[(2)] = null);

(statearr_21550_21575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21545 === (4))){
var inst_21516 = (state_21544[(10)]);
var state_21544__$1 = state_21544;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21544__$1,(7),inst_21516);
} else {
if((state_val_21545 === (6))){
var inst_21540 = (state_21544[(2)]);
var state_21544__$1 = state_21544;
var statearr_21551_21576 = state_21544__$1;
(statearr_21551_21576[(2)] = inst_21540);

(statearr_21551_21576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21545 === (3))){
var inst_21542 = (state_21544[(2)]);
var state_21544__$1 = state_21544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21544__$1,inst_21542);
} else {
if((state_val_21545 === (2))){
var inst_21516 = (state_21544[(10)]);
var inst_21518 = cljs.core.count.call(null,inst_21516);
var inst_21519 = (inst_21518 > (0));
var state_21544__$1 = state_21544;
if(cljs.core.truth_(inst_21519)){
var statearr_21553_21577 = state_21544__$1;
(statearr_21553_21577[(1)] = (4));

} else {
var statearr_21554_21578 = state_21544__$1;
(statearr_21554_21578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21545 === (11))){
var inst_21516 = (state_21544[(10)]);
var inst_21533 = (state_21544[(2)]);
var tmp21552 = inst_21516;
var inst_21516__$1 = tmp21552;
var state_21544__$1 = (function (){var statearr_21555 = state_21544;
(statearr_21555[(11)] = inst_21533);

(statearr_21555[(10)] = inst_21516__$1);

return statearr_21555;
})();
var statearr_21556_21579 = state_21544__$1;
(statearr_21556_21579[(2)] = null);

(statearr_21556_21579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21545 === (9))){
var inst_21524 = (state_21544[(7)]);
var state_21544__$1 = state_21544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21544__$1,(11),out,inst_21524);
} else {
if((state_val_21545 === (5))){
var inst_21538 = cljs.core.async.close_BANG_.call(null,out);
var state_21544__$1 = state_21544;
var statearr_21557_21580 = state_21544__$1;
(statearr_21557_21580[(2)] = inst_21538);

(statearr_21557_21580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21545 === (10))){
var inst_21536 = (state_21544[(2)]);
var state_21544__$1 = state_21544;
var statearr_21558_21581 = state_21544__$1;
(statearr_21558_21581[(2)] = inst_21536);

(statearr_21558_21581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21545 === (8))){
var inst_21524 = (state_21544[(7)]);
var inst_21516 = (state_21544[(10)]);
var inst_21525 = (state_21544[(9)]);
var inst_21523 = (state_21544[(8)]);
var inst_21528 = (function (){var cs = inst_21516;
var vec__21521 = inst_21523;
var v = inst_21524;
var c = inst_21525;
return ((function (cs,vec__21521,v,c,inst_21524,inst_21516,inst_21525,inst_21523,state_val_21545,c__19474__auto___21572,out){
return (function (p1__21511_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21511_SHARP_);
});
;})(cs,vec__21521,v,c,inst_21524,inst_21516,inst_21525,inst_21523,state_val_21545,c__19474__auto___21572,out))
})();
var inst_21529 = cljs.core.filterv.call(null,inst_21528,inst_21516);
var inst_21516__$1 = inst_21529;
var state_21544__$1 = (function (){var statearr_21559 = state_21544;
(statearr_21559[(10)] = inst_21516__$1);

return statearr_21559;
})();
var statearr_21560_21582 = state_21544__$1;
(statearr_21560_21582[(2)] = null);

(statearr_21560_21582[(1)] = (2));


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
});})(c__19474__auto___21572,out))
;
return ((function (switch__19362__auto__,c__19474__auto___21572,out){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_21564 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21564[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_21564[(1)] = (1));

return statearr_21564;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_21544){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_21544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e21565){if((e21565 instanceof Object)){
var ex__19366__auto__ = e21565;
var statearr_21566_21583 = state_21544;
(statearr_21566_21583[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21584 = state_21544;
state_21544 = G__21584;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_21544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_21544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___21572,out))
})();
var state__19476__auto__ = (function (){var statearr_21567 = f__19475__auto__.call(null);
(statearr_21567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___21572);

return statearr_21567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___21572,out))
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
var args21585 = [];
var len__17910__auto___21634 = arguments.length;
var i__17911__auto___21635 = (0);
while(true){
if((i__17911__auto___21635 < len__17910__auto___21634)){
args21585.push((arguments[i__17911__auto___21635]));

var G__21636 = (i__17911__auto___21635 + (1));
i__17911__auto___21635 = G__21636;
continue;
} else {
}
break;
}

var G__21587 = args21585.length;
switch (G__21587) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21585.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19474__auto___21638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___21638,out){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___21638,out){
return (function (state_21611){
var state_val_21612 = (state_21611[(1)]);
if((state_val_21612 === (7))){
var inst_21593 = (state_21611[(7)]);
var inst_21593__$1 = (state_21611[(2)]);
var inst_21594 = (inst_21593__$1 == null);
var inst_21595 = cljs.core.not.call(null,inst_21594);
var state_21611__$1 = (function (){var statearr_21613 = state_21611;
(statearr_21613[(7)] = inst_21593__$1);

return statearr_21613;
})();
if(inst_21595){
var statearr_21614_21639 = state_21611__$1;
(statearr_21614_21639[(1)] = (8));

} else {
var statearr_21615_21640 = state_21611__$1;
(statearr_21615_21640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21612 === (1))){
var inst_21588 = (0);
var state_21611__$1 = (function (){var statearr_21616 = state_21611;
(statearr_21616[(8)] = inst_21588);

return statearr_21616;
})();
var statearr_21617_21641 = state_21611__$1;
(statearr_21617_21641[(2)] = null);

(statearr_21617_21641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21612 === (4))){
var state_21611__$1 = state_21611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21611__$1,(7),ch);
} else {
if((state_val_21612 === (6))){
var inst_21606 = (state_21611[(2)]);
var state_21611__$1 = state_21611;
var statearr_21618_21642 = state_21611__$1;
(statearr_21618_21642[(2)] = inst_21606);

(statearr_21618_21642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21612 === (3))){
var inst_21608 = (state_21611[(2)]);
var inst_21609 = cljs.core.async.close_BANG_.call(null,out);
var state_21611__$1 = (function (){var statearr_21619 = state_21611;
(statearr_21619[(9)] = inst_21608);

return statearr_21619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21611__$1,inst_21609);
} else {
if((state_val_21612 === (2))){
var inst_21588 = (state_21611[(8)]);
var inst_21590 = (inst_21588 < n);
var state_21611__$1 = state_21611;
if(cljs.core.truth_(inst_21590)){
var statearr_21620_21643 = state_21611__$1;
(statearr_21620_21643[(1)] = (4));

} else {
var statearr_21621_21644 = state_21611__$1;
(statearr_21621_21644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21612 === (11))){
var inst_21588 = (state_21611[(8)]);
var inst_21598 = (state_21611[(2)]);
var inst_21599 = (inst_21588 + (1));
var inst_21588__$1 = inst_21599;
var state_21611__$1 = (function (){var statearr_21622 = state_21611;
(statearr_21622[(8)] = inst_21588__$1);

(statearr_21622[(10)] = inst_21598);

return statearr_21622;
})();
var statearr_21623_21645 = state_21611__$1;
(statearr_21623_21645[(2)] = null);

(statearr_21623_21645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21612 === (9))){
var state_21611__$1 = state_21611;
var statearr_21624_21646 = state_21611__$1;
(statearr_21624_21646[(2)] = null);

(statearr_21624_21646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21612 === (5))){
var state_21611__$1 = state_21611;
var statearr_21625_21647 = state_21611__$1;
(statearr_21625_21647[(2)] = null);

(statearr_21625_21647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21612 === (10))){
var inst_21603 = (state_21611[(2)]);
var state_21611__$1 = state_21611;
var statearr_21626_21648 = state_21611__$1;
(statearr_21626_21648[(2)] = inst_21603);

(statearr_21626_21648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21612 === (8))){
var inst_21593 = (state_21611[(7)]);
var state_21611__$1 = state_21611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21611__$1,(11),out,inst_21593);
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
});})(c__19474__auto___21638,out))
;
return ((function (switch__19362__auto__,c__19474__auto___21638,out){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_21630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21630[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_21630[(1)] = (1));

return statearr_21630;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_21611){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_21611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e21631){if((e21631 instanceof Object)){
var ex__19366__auto__ = e21631;
var statearr_21632_21649 = state_21611;
(statearr_21632_21649[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21650 = state_21611;
state_21611 = G__21650;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_21611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_21611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___21638,out))
})();
var state__19476__auto__ = (function (){var statearr_21633 = f__19475__auto__.call(null);
(statearr_21633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___21638);

return statearr_21633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___21638,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21658 = (function (map_LT_,f,ch,meta21659){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21659 = meta21659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21660,meta21659__$1){
var self__ = this;
var _21660__$1 = this;
return (new cljs.core.async.t_cljs$core$async21658(self__.map_LT_,self__.f,self__.ch,meta21659__$1));
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21660){
var self__ = this;
var _21660__$1 = this;
return self__.meta21659;
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21661 = (function (map_LT_,f,ch,meta21659,_,fn1,meta21662){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21659 = meta21659;
this._ = _;
this.fn1 = fn1;
this.meta21662 = meta21662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21663,meta21662__$1){
var self__ = this;
var _21663__$1 = this;
return (new cljs.core.async.t_cljs$core$async21661(self__.map_LT_,self__.f,self__.ch,self__.meta21659,self__._,self__.fn1,meta21662__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21663){
var self__ = this;
var _21663__$1 = this;
return self__.meta21662;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21651_SHARP_){
return f1.call(null,(((p1__21651_SHARP_ == null))?null:self__.f.call(null,p1__21651_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21661.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21659","meta21659",-37399482,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21658","cljs.core.async/t_cljs$core$async21658",-1026935540,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21662","meta21662",-568523972,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21661";

cljs.core.async.t_cljs$core$async21661.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21661");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21661 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21661(map_LT___$1,f__$1,ch__$1,meta21659__$1,___$2,fn1__$1,meta21662){
return (new cljs.core.async.t_cljs$core$async21661(map_LT___$1,f__$1,ch__$1,meta21659__$1,___$2,fn1__$1,meta21662));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21661(self__.map_LT_,self__.f,self__.ch,self__.meta21659,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16840__auto__ = ret;
if(cljs.core.truth_(and__16840__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16840__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21659","meta21659",-37399482,null)], null);
});

cljs.core.async.t_cljs$core$async21658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21658";

cljs.core.async.t_cljs$core$async21658.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21658");
});

cljs.core.async.__GT_t_cljs$core$async21658 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21658(map_LT___$1,f__$1,ch__$1,meta21659){
return (new cljs.core.async.t_cljs$core$async21658(map_LT___$1,f__$1,ch__$1,meta21659));
});

}

return (new cljs.core.async.t_cljs$core$async21658(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21667 = (function (map_GT_,f,ch,meta21668){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21668 = meta21668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21669,meta21668__$1){
var self__ = this;
var _21669__$1 = this;
return (new cljs.core.async.t_cljs$core$async21667(self__.map_GT_,self__.f,self__.ch,meta21668__$1));
});

cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21669){
var self__ = this;
var _21669__$1 = this;
return self__.meta21668;
});

cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21668","meta21668",727907310,null)], null);
});

cljs.core.async.t_cljs$core$async21667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21667";

cljs.core.async.t_cljs$core$async21667.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21667");
});

cljs.core.async.__GT_t_cljs$core$async21667 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21667(map_GT___$1,f__$1,ch__$1,meta21668){
return (new cljs.core.async.t_cljs$core$async21667(map_GT___$1,f__$1,ch__$1,meta21668));
});

}

return (new cljs.core.async.t_cljs$core$async21667(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21673 = (function (filter_GT_,p,ch,meta21674){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21674 = meta21674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21675,meta21674__$1){
var self__ = this;
var _21675__$1 = this;
return (new cljs.core.async.t_cljs$core$async21673(self__.filter_GT_,self__.p,self__.ch,meta21674__$1));
});

cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21675){
var self__ = this;
var _21675__$1 = this;
return self__.meta21674;
});

cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21674","meta21674",2072293792,null)], null);
});

cljs.core.async.t_cljs$core$async21673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21673";

cljs.core.async.t_cljs$core$async21673.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21673");
});

cljs.core.async.__GT_t_cljs$core$async21673 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21673(filter_GT___$1,p__$1,ch__$1,meta21674){
return (new cljs.core.async.t_cljs$core$async21673(filter_GT___$1,p__$1,ch__$1,meta21674));
});

}

return (new cljs.core.async.t_cljs$core$async21673(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args21676 = [];
var len__17910__auto___21720 = arguments.length;
var i__17911__auto___21721 = (0);
while(true){
if((i__17911__auto___21721 < len__17910__auto___21720)){
args21676.push((arguments[i__17911__auto___21721]));

var G__21722 = (i__17911__auto___21721 + (1));
i__17911__auto___21721 = G__21722;
continue;
} else {
}
break;
}

var G__21678 = args21676.length;
switch (G__21678) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21676.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19474__auto___21724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___21724,out){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___21724,out){
return (function (state_21699){
var state_val_21700 = (state_21699[(1)]);
if((state_val_21700 === (7))){
var inst_21695 = (state_21699[(2)]);
var state_21699__$1 = state_21699;
var statearr_21701_21725 = state_21699__$1;
(statearr_21701_21725[(2)] = inst_21695);

(statearr_21701_21725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (1))){
var state_21699__$1 = state_21699;
var statearr_21702_21726 = state_21699__$1;
(statearr_21702_21726[(2)] = null);

(statearr_21702_21726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (4))){
var inst_21681 = (state_21699[(7)]);
var inst_21681__$1 = (state_21699[(2)]);
var inst_21682 = (inst_21681__$1 == null);
var state_21699__$1 = (function (){var statearr_21703 = state_21699;
(statearr_21703[(7)] = inst_21681__$1);

return statearr_21703;
})();
if(cljs.core.truth_(inst_21682)){
var statearr_21704_21727 = state_21699__$1;
(statearr_21704_21727[(1)] = (5));

} else {
var statearr_21705_21728 = state_21699__$1;
(statearr_21705_21728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (6))){
var inst_21681 = (state_21699[(7)]);
var inst_21686 = p.call(null,inst_21681);
var state_21699__$1 = state_21699;
if(cljs.core.truth_(inst_21686)){
var statearr_21706_21729 = state_21699__$1;
(statearr_21706_21729[(1)] = (8));

} else {
var statearr_21707_21730 = state_21699__$1;
(statearr_21707_21730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (3))){
var inst_21697 = (state_21699[(2)]);
var state_21699__$1 = state_21699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21699__$1,inst_21697);
} else {
if((state_val_21700 === (2))){
var state_21699__$1 = state_21699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21699__$1,(4),ch);
} else {
if((state_val_21700 === (11))){
var inst_21689 = (state_21699[(2)]);
var state_21699__$1 = state_21699;
var statearr_21708_21731 = state_21699__$1;
(statearr_21708_21731[(2)] = inst_21689);

(statearr_21708_21731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (9))){
var state_21699__$1 = state_21699;
var statearr_21709_21732 = state_21699__$1;
(statearr_21709_21732[(2)] = null);

(statearr_21709_21732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (5))){
var inst_21684 = cljs.core.async.close_BANG_.call(null,out);
var state_21699__$1 = state_21699;
var statearr_21710_21733 = state_21699__$1;
(statearr_21710_21733[(2)] = inst_21684);

(statearr_21710_21733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (10))){
var inst_21692 = (state_21699[(2)]);
var state_21699__$1 = (function (){var statearr_21711 = state_21699;
(statearr_21711[(8)] = inst_21692);

return statearr_21711;
})();
var statearr_21712_21734 = state_21699__$1;
(statearr_21712_21734[(2)] = null);

(statearr_21712_21734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21700 === (8))){
var inst_21681 = (state_21699[(7)]);
var state_21699__$1 = state_21699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21699__$1,(11),out,inst_21681);
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
});})(c__19474__auto___21724,out))
;
return ((function (switch__19362__auto__,c__19474__auto___21724,out){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_21716 = [null,null,null,null,null,null,null,null,null];
(statearr_21716[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_21716[(1)] = (1));

return statearr_21716;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_21699){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_21699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e21717){if((e21717 instanceof Object)){
var ex__19366__auto__ = e21717;
var statearr_21718_21735 = state_21699;
(statearr_21718_21735[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21736 = state_21699;
state_21699 = G__21736;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_21699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_21699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___21724,out))
})();
var state__19476__auto__ = (function (){var statearr_21719 = f__19475__auto__.call(null);
(statearr_21719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___21724);

return statearr_21719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___21724,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21737 = [];
var len__17910__auto___21740 = arguments.length;
var i__17911__auto___21741 = (0);
while(true){
if((i__17911__auto___21741 < len__17910__auto___21740)){
args21737.push((arguments[i__17911__auto___21741]));

var G__21742 = (i__17911__auto___21741 + (1));
i__17911__auto___21741 = G__21742;
continue;
} else {
}
break;
}

var G__21739 = args21737.length;
switch (G__21739) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21737.length)].join('')));

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
var c__19474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto__){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto__){
return (function (state_21909){
var state_val_21910 = (state_21909[(1)]);
if((state_val_21910 === (7))){
var inst_21905 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
var statearr_21911_21952 = state_21909__$1;
(statearr_21911_21952[(2)] = inst_21905);

(statearr_21911_21952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (20))){
var inst_21875 = (state_21909[(7)]);
var inst_21886 = (state_21909[(2)]);
var inst_21887 = cljs.core.next.call(null,inst_21875);
var inst_21861 = inst_21887;
var inst_21862 = null;
var inst_21863 = (0);
var inst_21864 = (0);
var state_21909__$1 = (function (){var statearr_21912 = state_21909;
(statearr_21912[(8)] = inst_21886);

(statearr_21912[(9)] = inst_21861);

(statearr_21912[(10)] = inst_21863);

(statearr_21912[(11)] = inst_21862);

(statearr_21912[(12)] = inst_21864);

return statearr_21912;
})();
var statearr_21913_21953 = state_21909__$1;
(statearr_21913_21953[(2)] = null);

(statearr_21913_21953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (1))){
var state_21909__$1 = state_21909;
var statearr_21914_21954 = state_21909__$1;
(statearr_21914_21954[(2)] = null);

(statearr_21914_21954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (4))){
var inst_21850 = (state_21909[(13)]);
var inst_21850__$1 = (state_21909[(2)]);
var inst_21851 = (inst_21850__$1 == null);
var state_21909__$1 = (function (){var statearr_21915 = state_21909;
(statearr_21915[(13)] = inst_21850__$1);

return statearr_21915;
})();
if(cljs.core.truth_(inst_21851)){
var statearr_21916_21955 = state_21909__$1;
(statearr_21916_21955[(1)] = (5));

} else {
var statearr_21917_21956 = state_21909__$1;
(statearr_21917_21956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (15))){
var state_21909__$1 = state_21909;
var statearr_21921_21957 = state_21909__$1;
(statearr_21921_21957[(2)] = null);

(statearr_21921_21957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (21))){
var state_21909__$1 = state_21909;
var statearr_21922_21958 = state_21909__$1;
(statearr_21922_21958[(2)] = null);

(statearr_21922_21958[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (13))){
var inst_21861 = (state_21909[(9)]);
var inst_21863 = (state_21909[(10)]);
var inst_21862 = (state_21909[(11)]);
var inst_21864 = (state_21909[(12)]);
var inst_21871 = (state_21909[(2)]);
var inst_21872 = (inst_21864 + (1));
var tmp21918 = inst_21861;
var tmp21919 = inst_21863;
var tmp21920 = inst_21862;
var inst_21861__$1 = tmp21918;
var inst_21862__$1 = tmp21920;
var inst_21863__$1 = tmp21919;
var inst_21864__$1 = inst_21872;
var state_21909__$1 = (function (){var statearr_21923 = state_21909;
(statearr_21923[(9)] = inst_21861__$1);

(statearr_21923[(10)] = inst_21863__$1);

(statearr_21923[(11)] = inst_21862__$1);

(statearr_21923[(14)] = inst_21871);

(statearr_21923[(12)] = inst_21864__$1);

return statearr_21923;
})();
var statearr_21924_21959 = state_21909__$1;
(statearr_21924_21959[(2)] = null);

(statearr_21924_21959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (22))){
var state_21909__$1 = state_21909;
var statearr_21925_21960 = state_21909__$1;
(statearr_21925_21960[(2)] = null);

(statearr_21925_21960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (6))){
var inst_21850 = (state_21909[(13)]);
var inst_21859 = f.call(null,inst_21850);
var inst_21860 = cljs.core.seq.call(null,inst_21859);
var inst_21861 = inst_21860;
var inst_21862 = null;
var inst_21863 = (0);
var inst_21864 = (0);
var state_21909__$1 = (function (){var statearr_21926 = state_21909;
(statearr_21926[(9)] = inst_21861);

(statearr_21926[(10)] = inst_21863);

(statearr_21926[(11)] = inst_21862);

(statearr_21926[(12)] = inst_21864);

return statearr_21926;
})();
var statearr_21927_21961 = state_21909__$1;
(statearr_21927_21961[(2)] = null);

(statearr_21927_21961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (17))){
var inst_21875 = (state_21909[(7)]);
var inst_21879 = cljs.core.chunk_first.call(null,inst_21875);
var inst_21880 = cljs.core.chunk_rest.call(null,inst_21875);
var inst_21881 = cljs.core.count.call(null,inst_21879);
var inst_21861 = inst_21880;
var inst_21862 = inst_21879;
var inst_21863 = inst_21881;
var inst_21864 = (0);
var state_21909__$1 = (function (){var statearr_21928 = state_21909;
(statearr_21928[(9)] = inst_21861);

(statearr_21928[(10)] = inst_21863);

(statearr_21928[(11)] = inst_21862);

(statearr_21928[(12)] = inst_21864);

return statearr_21928;
})();
var statearr_21929_21962 = state_21909__$1;
(statearr_21929_21962[(2)] = null);

(statearr_21929_21962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (3))){
var inst_21907 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21909__$1,inst_21907);
} else {
if((state_val_21910 === (12))){
var inst_21895 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
var statearr_21930_21963 = state_21909__$1;
(statearr_21930_21963[(2)] = inst_21895);

(statearr_21930_21963[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (2))){
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21909__$1,(4),in$);
} else {
if((state_val_21910 === (23))){
var inst_21903 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
var statearr_21931_21964 = state_21909__$1;
(statearr_21931_21964[(2)] = inst_21903);

(statearr_21931_21964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (19))){
var inst_21890 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
var statearr_21932_21965 = state_21909__$1;
(statearr_21932_21965[(2)] = inst_21890);

(statearr_21932_21965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (11))){
var inst_21861 = (state_21909[(9)]);
var inst_21875 = (state_21909[(7)]);
var inst_21875__$1 = cljs.core.seq.call(null,inst_21861);
var state_21909__$1 = (function (){var statearr_21933 = state_21909;
(statearr_21933[(7)] = inst_21875__$1);

return statearr_21933;
})();
if(inst_21875__$1){
var statearr_21934_21966 = state_21909__$1;
(statearr_21934_21966[(1)] = (14));

} else {
var statearr_21935_21967 = state_21909__$1;
(statearr_21935_21967[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (9))){
var inst_21897 = (state_21909[(2)]);
var inst_21898 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21909__$1 = (function (){var statearr_21936 = state_21909;
(statearr_21936[(15)] = inst_21897);

return statearr_21936;
})();
if(cljs.core.truth_(inst_21898)){
var statearr_21937_21968 = state_21909__$1;
(statearr_21937_21968[(1)] = (21));

} else {
var statearr_21938_21969 = state_21909__$1;
(statearr_21938_21969[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (5))){
var inst_21853 = cljs.core.async.close_BANG_.call(null,out);
var state_21909__$1 = state_21909;
var statearr_21939_21970 = state_21909__$1;
(statearr_21939_21970[(2)] = inst_21853);

(statearr_21939_21970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (14))){
var inst_21875 = (state_21909[(7)]);
var inst_21877 = cljs.core.chunked_seq_QMARK_.call(null,inst_21875);
var state_21909__$1 = state_21909;
if(inst_21877){
var statearr_21940_21971 = state_21909__$1;
(statearr_21940_21971[(1)] = (17));

} else {
var statearr_21941_21972 = state_21909__$1;
(statearr_21941_21972[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (16))){
var inst_21893 = (state_21909[(2)]);
var state_21909__$1 = state_21909;
var statearr_21942_21973 = state_21909__$1;
(statearr_21942_21973[(2)] = inst_21893);

(statearr_21942_21973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21910 === (10))){
var inst_21862 = (state_21909[(11)]);
var inst_21864 = (state_21909[(12)]);
var inst_21869 = cljs.core._nth.call(null,inst_21862,inst_21864);
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21909__$1,(13),out,inst_21869);
} else {
if((state_val_21910 === (18))){
var inst_21875 = (state_21909[(7)]);
var inst_21884 = cljs.core.first.call(null,inst_21875);
var state_21909__$1 = state_21909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21909__$1,(20),out,inst_21884);
} else {
if((state_val_21910 === (8))){
var inst_21863 = (state_21909[(10)]);
var inst_21864 = (state_21909[(12)]);
var inst_21866 = (inst_21864 < inst_21863);
var inst_21867 = inst_21866;
var state_21909__$1 = state_21909;
if(cljs.core.truth_(inst_21867)){
var statearr_21943_21974 = state_21909__$1;
(statearr_21943_21974[(1)] = (10));

} else {
var statearr_21944_21975 = state_21909__$1;
(statearr_21944_21975[(1)] = (11));

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
});})(c__19474__auto__))
;
return ((function (switch__19362__auto__,c__19474__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19363__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19363__auto____0 = (function (){
var statearr_21948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21948[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19363__auto__);

(statearr_21948[(1)] = (1));

return statearr_21948;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19363__auto____1 = (function (state_21909){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_21909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e21949){if((e21949 instanceof Object)){
var ex__19366__auto__ = e21949;
var statearr_21950_21976 = state_21909;
(statearr_21950_21976[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21977 = state_21909;
state_21909 = G__21977;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19363__auto__ = function(state_21909){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19363__auto____1.call(this,state_21909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19363__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19363__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto__))
})();
var state__19476__auto__ = (function (){var statearr_21951 = f__19475__auto__.call(null);
(statearr_21951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto__);

return statearr_21951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto__))
);

return c__19474__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21978 = [];
var len__17910__auto___21981 = arguments.length;
var i__17911__auto___21982 = (0);
while(true){
if((i__17911__auto___21982 < len__17910__auto___21981)){
args21978.push((arguments[i__17911__auto___21982]));

var G__21983 = (i__17911__auto___21982 + (1));
i__17911__auto___21982 = G__21983;
continue;
} else {
}
break;
}

var G__21980 = args21978.length;
switch (G__21980) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21978.length)].join('')));

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
var args21985 = [];
var len__17910__auto___21988 = arguments.length;
var i__17911__auto___21989 = (0);
while(true){
if((i__17911__auto___21989 < len__17910__auto___21988)){
args21985.push((arguments[i__17911__auto___21989]));

var G__21990 = (i__17911__auto___21989 + (1));
i__17911__auto___21989 = G__21990;
continue;
} else {
}
break;
}

var G__21987 = args21985.length;
switch (G__21987) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21985.length)].join('')));

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
var args21992 = [];
var len__17910__auto___22043 = arguments.length;
var i__17911__auto___22044 = (0);
while(true){
if((i__17911__auto___22044 < len__17910__auto___22043)){
args21992.push((arguments[i__17911__auto___22044]));

var G__22045 = (i__17911__auto___22044 + (1));
i__17911__auto___22044 = G__22045;
continue;
} else {
}
break;
}

var G__21994 = args21992.length;
switch (G__21994) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21992.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19474__auto___22047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___22047,out){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___22047,out){
return (function (state_22018){
var state_val_22019 = (state_22018[(1)]);
if((state_val_22019 === (7))){
var inst_22013 = (state_22018[(2)]);
var state_22018__$1 = state_22018;
var statearr_22020_22048 = state_22018__$1;
(statearr_22020_22048[(2)] = inst_22013);

(statearr_22020_22048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22019 === (1))){
var inst_21995 = null;
var state_22018__$1 = (function (){var statearr_22021 = state_22018;
(statearr_22021[(7)] = inst_21995);

return statearr_22021;
})();
var statearr_22022_22049 = state_22018__$1;
(statearr_22022_22049[(2)] = null);

(statearr_22022_22049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22019 === (4))){
var inst_21998 = (state_22018[(8)]);
var inst_21998__$1 = (state_22018[(2)]);
var inst_21999 = (inst_21998__$1 == null);
var inst_22000 = cljs.core.not.call(null,inst_21999);
var state_22018__$1 = (function (){var statearr_22023 = state_22018;
(statearr_22023[(8)] = inst_21998__$1);

return statearr_22023;
})();
if(inst_22000){
var statearr_22024_22050 = state_22018__$1;
(statearr_22024_22050[(1)] = (5));

} else {
var statearr_22025_22051 = state_22018__$1;
(statearr_22025_22051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22019 === (6))){
var state_22018__$1 = state_22018;
var statearr_22026_22052 = state_22018__$1;
(statearr_22026_22052[(2)] = null);

(statearr_22026_22052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22019 === (3))){
var inst_22015 = (state_22018[(2)]);
var inst_22016 = cljs.core.async.close_BANG_.call(null,out);
var state_22018__$1 = (function (){var statearr_22027 = state_22018;
(statearr_22027[(9)] = inst_22015);

return statearr_22027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22018__$1,inst_22016);
} else {
if((state_val_22019 === (2))){
var state_22018__$1 = state_22018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22018__$1,(4),ch);
} else {
if((state_val_22019 === (11))){
var inst_21998 = (state_22018[(8)]);
var inst_22007 = (state_22018[(2)]);
var inst_21995 = inst_21998;
var state_22018__$1 = (function (){var statearr_22028 = state_22018;
(statearr_22028[(10)] = inst_22007);

(statearr_22028[(7)] = inst_21995);

return statearr_22028;
})();
var statearr_22029_22053 = state_22018__$1;
(statearr_22029_22053[(2)] = null);

(statearr_22029_22053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22019 === (9))){
var inst_21998 = (state_22018[(8)]);
var state_22018__$1 = state_22018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22018__$1,(11),out,inst_21998);
} else {
if((state_val_22019 === (5))){
var inst_21998 = (state_22018[(8)]);
var inst_21995 = (state_22018[(7)]);
var inst_22002 = cljs.core._EQ_.call(null,inst_21998,inst_21995);
var state_22018__$1 = state_22018;
if(inst_22002){
var statearr_22031_22054 = state_22018__$1;
(statearr_22031_22054[(1)] = (8));

} else {
var statearr_22032_22055 = state_22018__$1;
(statearr_22032_22055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22019 === (10))){
var inst_22010 = (state_22018[(2)]);
var state_22018__$1 = state_22018;
var statearr_22033_22056 = state_22018__$1;
(statearr_22033_22056[(2)] = inst_22010);

(statearr_22033_22056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22019 === (8))){
var inst_21995 = (state_22018[(7)]);
var tmp22030 = inst_21995;
var inst_21995__$1 = tmp22030;
var state_22018__$1 = (function (){var statearr_22034 = state_22018;
(statearr_22034[(7)] = inst_21995__$1);

return statearr_22034;
})();
var statearr_22035_22057 = state_22018__$1;
(statearr_22035_22057[(2)] = null);

(statearr_22035_22057[(1)] = (2));


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
});})(c__19474__auto___22047,out))
;
return ((function (switch__19362__auto__,c__19474__auto___22047,out){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_22039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22039[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_22039[(1)] = (1));

return statearr_22039;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_22018){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_22018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e22040){if((e22040 instanceof Object)){
var ex__19366__auto__ = e22040;
var statearr_22041_22058 = state_22018;
(statearr_22041_22058[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22059 = state_22018;
state_22018 = G__22059;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_22018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_22018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___22047,out))
})();
var state__19476__auto__ = (function (){var statearr_22042 = f__19475__auto__.call(null);
(statearr_22042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___22047);

return statearr_22042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___22047,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22060 = [];
var len__17910__auto___22130 = arguments.length;
var i__17911__auto___22131 = (0);
while(true){
if((i__17911__auto___22131 < len__17910__auto___22130)){
args22060.push((arguments[i__17911__auto___22131]));

var G__22132 = (i__17911__auto___22131 + (1));
i__17911__auto___22131 = G__22132;
continue;
} else {
}
break;
}

var G__22062 = args22060.length;
switch (G__22062) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22060.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19474__auto___22134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___22134,out){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___22134,out){
return (function (state_22100){
var state_val_22101 = (state_22100[(1)]);
if((state_val_22101 === (7))){
var inst_22096 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22102_22135 = state_22100__$1;
(statearr_22102_22135[(2)] = inst_22096);

(statearr_22102_22135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (1))){
var inst_22063 = (new Array(n));
var inst_22064 = inst_22063;
var inst_22065 = (0);
var state_22100__$1 = (function (){var statearr_22103 = state_22100;
(statearr_22103[(7)] = inst_22065);

(statearr_22103[(8)] = inst_22064);

return statearr_22103;
})();
var statearr_22104_22136 = state_22100__$1;
(statearr_22104_22136[(2)] = null);

(statearr_22104_22136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (4))){
var inst_22068 = (state_22100[(9)]);
var inst_22068__$1 = (state_22100[(2)]);
var inst_22069 = (inst_22068__$1 == null);
var inst_22070 = cljs.core.not.call(null,inst_22069);
var state_22100__$1 = (function (){var statearr_22105 = state_22100;
(statearr_22105[(9)] = inst_22068__$1);

return statearr_22105;
})();
if(inst_22070){
var statearr_22106_22137 = state_22100__$1;
(statearr_22106_22137[(1)] = (5));

} else {
var statearr_22107_22138 = state_22100__$1;
(statearr_22107_22138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (15))){
var inst_22090 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22108_22139 = state_22100__$1;
(statearr_22108_22139[(2)] = inst_22090);

(statearr_22108_22139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (13))){
var state_22100__$1 = state_22100;
var statearr_22109_22140 = state_22100__$1;
(statearr_22109_22140[(2)] = null);

(statearr_22109_22140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (6))){
var inst_22065 = (state_22100[(7)]);
var inst_22086 = (inst_22065 > (0));
var state_22100__$1 = state_22100;
if(cljs.core.truth_(inst_22086)){
var statearr_22110_22141 = state_22100__$1;
(statearr_22110_22141[(1)] = (12));

} else {
var statearr_22111_22142 = state_22100__$1;
(statearr_22111_22142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (3))){
var inst_22098 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22100__$1,inst_22098);
} else {
if((state_val_22101 === (12))){
var inst_22064 = (state_22100[(8)]);
var inst_22088 = cljs.core.vec.call(null,inst_22064);
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22100__$1,(15),out,inst_22088);
} else {
if((state_val_22101 === (2))){
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22100__$1,(4),ch);
} else {
if((state_val_22101 === (11))){
var inst_22080 = (state_22100[(2)]);
var inst_22081 = (new Array(n));
var inst_22064 = inst_22081;
var inst_22065 = (0);
var state_22100__$1 = (function (){var statearr_22112 = state_22100;
(statearr_22112[(10)] = inst_22080);

(statearr_22112[(7)] = inst_22065);

(statearr_22112[(8)] = inst_22064);

return statearr_22112;
})();
var statearr_22113_22143 = state_22100__$1;
(statearr_22113_22143[(2)] = null);

(statearr_22113_22143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (9))){
var inst_22064 = (state_22100[(8)]);
var inst_22078 = cljs.core.vec.call(null,inst_22064);
var state_22100__$1 = state_22100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22100__$1,(11),out,inst_22078);
} else {
if((state_val_22101 === (5))){
var inst_22065 = (state_22100[(7)]);
var inst_22068 = (state_22100[(9)]);
var inst_22064 = (state_22100[(8)]);
var inst_22073 = (state_22100[(11)]);
var inst_22072 = (inst_22064[inst_22065] = inst_22068);
var inst_22073__$1 = (inst_22065 + (1));
var inst_22074 = (inst_22073__$1 < n);
var state_22100__$1 = (function (){var statearr_22114 = state_22100;
(statearr_22114[(12)] = inst_22072);

(statearr_22114[(11)] = inst_22073__$1);

return statearr_22114;
})();
if(cljs.core.truth_(inst_22074)){
var statearr_22115_22144 = state_22100__$1;
(statearr_22115_22144[(1)] = (8));

} else {
var statearr_22116_22145 = state_22100__$1;
(statearr_22116_22145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (14))){
var inst_22093 = (state_22100[(2)]);
var inst_22094 = cljs.core.async.close_BANG_.call(null,out);
var state_22100__$1 = (function (){var statearr_22118 = state_22100;
(statearr_22118[(13)] = inst_22093);

return statearr_22118;
})();
var statearr_22119_22146 = state_22100__$1;
(statearr_22119_22146[(2)] = inst_22094);

(statearr_22119_22146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (10))){
var inst_22084 = (state_22100[(2)]);
var state_22100__$1 = state_22100;
var statearr_22120_22147 = state_22100__$1;
(statearr_22120_22147[(2)] = inst_22084);

(statearr_22120_22147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22101 === (8))){
var inst_22064 = (state_22100[(8)]);
var inst_22073 = (state_22100[(11)]);
var tmp22117 = inst_22064;
var inst_22064__$1 = tmp22117;
var inst_22065 = inst_22073;
var state_22100__$1 = (function (){var statearr_22121 = state_22100;
(statearr_22121[(7)] = inst_22065);

(statearr_22121[(8)] = inst_22064__$1);

return statearr_22121;
})();
var statearr_22122_22148 = state_22100__$1;
(statearr_22122_22148[(2)] = null);

(statearr_22122_22148[(1)] = (2));


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
});})(c__19474__auto___22134,out))
;
return ((function (switch__19362__auto__,c__19474__auto___22134,out){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_22126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22126[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_22126[(1)] = (1));

return statearr_22126;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_22100){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_22100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e22127){if((e22127 instanceof Object)){
var ex__19366__auto__ = e22127;
var statearr_22128_22149 = state_22100;
(statearr_22128_22149[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22150 = state_22100;
state_22100 = G__22150;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_22100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_22100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___22134,out))
})();
var state__19476__auto__ = (function (){var statearr_22129 = f__19475__auto__.call(null);
(statearr_22129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___22134);

return statearr_22129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___22134,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22151 = [];
var len__17910__auto___22225 = arguments.length;
var i__17911__auto___22226 = (0);
while(true){
if((i__17911__auto___22226 < len__17910__auto___22225)){
args22151.push((arguments[i__17911__auto___22226]));

var G__22227 = (i__17911__auto___22226 + (1));
i__17911__auto___22226 = G__22227;
continue;
} else {
}
break;
}

var G__22153 = args22151.length;
switch (G__22153) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22151.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19474__auto___22229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___22229,out){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___22229,out){
return (function (state_22195){
var state_val_22196 = (state_22195[(1)]);
if((state_val_22196 === (7))){
var inst_22191 = (state_22195[(2)]);
var state_22195__$1 = state_22195;
var statearr_22197_22230 = state_22195__$1;
(statearr_22197_22230[(2)] = inst_22191);

(statearr_22197_22230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (1))){
var inst_22154 = [];
var inst_22155 = inst_22154;
var inst_22156 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22195__$1 = (function (){var statearr_22198 = state_22195;
(statearr_22198[(7)] = inst_22156);

(statearr_22198[(8)] = inst_22155);

return statearr_22198;
})();
var statearr_22199_22231 = state_22195__$1;
(statearr_22199_22231[(2)] = null);

(statearr_22199_22231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (4))){
var inst_22159 = (state_22195[(9)]);
var inst_22159__$1 = (state_22195[(2)]);
var inst_22160 = (inst_22159__$1 == null);
var inst_22161 = cljs.core.not.call(null,inst_22160);
var state_22195__$1 = (function (){var statearr_22200 = state_22195;
(statearr_22200[(9)] = inst_22159__$1);

return statearr_22200;
})();
if(inst_22161){
var statearr_22201_22232 = state_22195__$1;
(statearr_22201_22232[(1)] = (5));

} else {
var statearr_22202_22233 = state_22195__$1;
(statearr_22202_22233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (15))){
var inst_22185 = (state_22195[(2)]);
var state_22195__$1 = state_22195;
var statearr_22203_22234 = state_22195__$1;
(statearr_22203_22234[(2)] = inst_22185);

(statearr_22203_22234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (13))){
var state_22195__$1 = state_22195;
var statearr_22204_22235 = state_22195__$1;
(statearr_22204_22235[(2)] = null);

(statearr_22204_22235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (6))){
var inst_22155 = (state_22195[(8)]);
var inst_22180 = inst_22155.length;
var inst_22181 = (inst_22180 > (0));
var state_22195__$1 = state_22195;
if(cljs.core.truth_(inst_22181)){
var statearr_22205_22236 = state_22195__$1;
(statearr_22205_22236[(1)] = (12));

} else {
var statearr_22206_22237 = state_22195__$1;
(statearr_22206_22237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (3))){
var inst_22193 = (state_22195[(2)]);
var state_22195__$1 = state_22195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22195__$1,inst_22193);
} else {
if((state_val_22196 === (12))){
var inst_22155 = (state_22195[(8)]);
var inst_22183 = cljs.core.vec.call(null,inst_22155);
var state_22195__$1 = state_22195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22195__$1,(15),out,inst_22183);
} else {
if((state_val_22196 === (2))){
var state_22195__$1 = state_22195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22195__$1,(4),ch);
} else {
if((state_val_22196 === (11))){
var inst_22163 = (state_22195[(10)]);
var inst_22159 = (state_22195[(9)]);
var inst_22173 = (state_22195[(2)]);
var inst_22174 = [];
var inst_22175 = inst_22174.push(inst_22159);
var inst_22155 = inst_22174;
var inst_22156 = inst_22163;
var state_22195__$1 = (function (){var statearr_22207 = state_22195;
(statearr_22207[(11)] = inst_22175);

(statearr_22207[(7)] = inst_22156);

(statearr_22207[(8)] = inst_22155);

(statearr_22207[(12)] = inst_22173);

return statearr_22207;
})();
var statearr_22208_22238 = state_22195__$1;
(statearr_22208_22238[(2)] = null);

(statearr_22208_22238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (9))){
var inst_22155 = (state_22195[(8)]);
var inst_22171 = cljs.core.vec.call(null,inst_22155);
var state_22195__$1 = state_22195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22195__$1,(11),out,inst_22171);
} else {
if((state_val_22196 === (5))){
var inst_22156 = (state_22195[(7)]);
var inst_22163 = (state_22195[(10)]);
var inst_22159 = (state_22195[(9)]);
var inst_22163__$1 = f.call(null,inst_22159);
var inst_22164 = cljs.core._EQ_.call(null,inst_22163__$1,inst_22156);
var inst_22165 = cljs.core.keyword_identical_QMARK_.call(null,inst_22156,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22166 = (inst_22164) || (inst_22165);
var state_22195__$1 = (function (){var statearr_22209 = state_22195;
(statearr_22209[(10)] = inst_22163__$1);

return statearr_22209;
})();
if(cljs.core.truth_(inst_22166)){
var statearr_22210_22239 = state_22195__$1;
(statearr_22210_22239[(1)] = (8));

} else {
var statearr_22211_22240 = state_22195__$1;
(statearr_22211_22240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (14))){
var inst_22188 = (state_22195[(2)]);
var inst_22189 = cljs.core.async.close_BANG_.call(null,out);
var state_22195__$1 = (function (){var statearr_22213 = state_22195;
(statearr_22213[(13)] = inst_22188);

return statearr_22213;
})();
var statearr_22214_22241 = state_22195__$1;
(statearr_22214_22241[(2)] = inst_22189);

(statearr_22214_22241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (10))){
var inst_22178 = (state_22195[(2)]);
var state_22195__$1 = state_22195;
var statearr_22215_22242 = state_22195__$1;
(statearr_22215_22242[(2)] = inst_22178);

(statearr_22215_22242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (8))){
var inst_22155 = (state_22195[(8)]);
var inst_22163 = (state_22195[(10)]);
var inst_22159 = (state_22195[(9)]);
var inst_22168 = inst_22155.push(inst_22159);
var tmp22212 = inst_22155;
var inst_22155__$1 = tmp22212;
var inst_22156 = inst_22163;
var state_22195__$1 = (function (){var statearr_22216 = state_22195;
(statearr_22216[(7)] = inst_22156);

(statearr_22216[(8)] = inst_22155__$1);

(statearr_22216[(14)] = inst_22168);

return statearr_22216;
})();
var statearr_22217_22243 = state_22195__$1;
(statearr_22217_22243[(2)] = null);

(statearr_22217_22243[(1)] = (2));


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
});})(c__19474__auto___22229,out))
;
return ((function (switch__19362__auto__,c__19474__auto___22229,out){
return (function() {
var cljs$core$async$state_machine__19363__auto__ = null;
var cljs$core$async$state_machine__19363__auto____0 = (function (){
var statearr_22221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22221[(0)] = cljs$core$async$state_machine__19363__auto__);

(statearr_22221[(1)] = (1));

return statearr_22221;
});
var cljs$core$async$state_machine__19363__auto____1 = (function (state_22195){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_22195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e22222){if((e22222 instanceof Object)){
var ex__19366__auto__ = e22222;
var statearr_22223_22244 = state_22195;
(statearr_22223_22244[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22245 = state_22195;
state_22195 = G__22245;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
cljs$core$async$state_machine__19363__auto__ = function(state_22195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19363__auto____1.call(this,state_22195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19363__auto____0;
cljs$core$async$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19363__auto____1;
return cljs$core$async$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___22229,out))
})();
var state__19476__auto__ = (function (){var statearr_22224 = f__19475__auto__.call(null);
(statearr_22224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___22229);

return statearr_22224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___22229,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1454142150055