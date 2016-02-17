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
var args19539 = [];
var len__17924__auto___19545 = arguments.length;
var i__17925__auto___19546 = (0);
while(true){
if((i__17925__auto___19546 < len__17924__auto___19545)){
args19539.push((arguments[i__17925__auto___19546]));

var G__19547 = (i__17925__auto___19546 + (1));
i__17925__auto___19546 = G__19547;
continue;
} else {
}
break;
}

var G__19541 = args19539.length;
switch (G__19541) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19539.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19542 = (function (f,blockable,meta19543){
this.f = f;
this.blockable = blockable;
this.meta19543 = meta19543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19544,meta19543__$1){
var self__ = this;
var _19544__$1 = this;
return (new cljs.core.async.t_cljs$core$async19542(self__.f,self__.blockable,meta19543__$1));
});

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19544){
var self__ = this;
var _19544__$1 = this;
return self__.meta19543;
});

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19543","meta19543",-199984465,null)], null);
});

cljs.core.async.t_cljs$core$async19542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19542";

cljs.core.async.t_cljs$core$async19542.cljs$lang$ctorPrWriter = (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async19542");
});

cljs.core.async.__GT_t_cljs$core$async19542 = (function cljs$core$async$__GT_t_cljs$core$async19542(f__$1,blockable__$1,meta19543){
return (new cljs.core.async.t_cljs$core$async19542(f__$1,blockable__$1,meta19543));
});

}

return (new cljs.core.async.t_cljs$core$async19542(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args19551 = [];
var len__17924__auto___19554 = arguments.length;
var i__17925__auto___19555 = (0);
while(true){
if((i__17925__auto___19555 < len__17924__auto___19554)){
args19551.push((arguments[i__17925__auto___19555]));

var G__19556 = (i__17925__auto___19555 + (1));
i__17925__auto___19555 = G__19556;
continue;
} else {
}
break;
}

var G__19553 = args19551.length;
switch (G__19553) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19551.length)].join('')));

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
var args19558 = [];
var len__17924__auto___19561 = arguments.length;
var i__17925__auto___19562 = (0);
while(true){
if((i__17925__auto___19562 < len__17924__auto___19561)){
args19558.push((arguments[i__17925__auto___19562]));

var G__19563 = (i__17925__auto___19562 + (1));
i__17925__auto___19562 = G__19563;
continue;
} else {
}
break;
}

var G__19560 = args19558.length;
switch (G__19560) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19558.length)].join('')));

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
var args19565 = [];
var len__17924__auto___19568 = arguments.length;
var i__17925__auto___19569 = (0);
while(true){
if((i__17925__auto___19569 < len__17924__auto___19568)){
args19565.push((arguments[i__17925__auto___19569]));

var G__19570 = (i__17925__auto___19569 + (1));
i__17925__auto___19569 = G__19570;
continue;
} else {
}
break;
}

var G__19567 = args19565.length;
switch (G__19567) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19565.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19572 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19572);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19572,ret){
return (function (){
return fn1.call(null,val_19572);
});})(val_19572,ret))
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
var args19573 = [];
var len__17924__auto___19576 = arguments.length;
var i__17925__auto___19577 = (0);
while(true){
if((i__17925__auto___19577 < len__17924__auto___19576)){
args19573.push((arguments[i__17925__auto___19577]));

var G__19578 = (i__17925__auto___19577 + (1));
i__17925__auto___19577 = G__19578;
continue;
} else {
}
break;
}

var G__19575 = args19573.length;
switch (G__19575) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19573.length)].join('')));

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
var n__17769__auto___19580 = n;
var x_19581 = (0);
while(true){
if((x_19581 < n__17769__auto___19580)){
(a[x_19581] = (0));

var G__19582 = (x_19581 + (1));
x_19581 = G__19582;
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

var G__19583 = (i + (1));
i = G__19583;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19587 = (function (alt_flag,flag,meta19588){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19588 = meta19588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19589,meta19588__$1){
var self__ = this;
var _19589__$1 = this;
return (new cljs.core.async.t_cljs$core$async19587(self__.alt_flag,self__.flag,meta19588__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19589){
var self__ = this;
var _19589__$1 = this;
return self__.meta19588;
});})(flag))
;

cljs.core.async.t_cljs$core$async19587.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19587.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19588","meta19588",-577333997,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19587";

cljs.core.async.t_cljs$core$async19587.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async19587");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19587 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19587(alt_flag__$1,flag__$1,meta19588){
return (new cljs.core.async.t_cljs$core$async19587(alt_flag__$1,flag__$1,meta19588));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19587(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19593 = (function (alt_handler,flag,cb,meta19594){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19594 = meta19594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19595,meta19594__$1){
var self__ = this;
var _19595__$1 = this;
return (new cljs.core.async.t_cljs$core$async19593(self__.alt_handler,self__.flag,self__.cb,meta19594__$1));
});

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19595){
var self__ = this;
var _19595__$1 = this;
return self__.meta19594;
});

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19594","meta19594",-689092459,null)], null);
});

cljs.core.async.t_cljs$core$async19593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19593";

cljs.core.async.t_cljs$core$async19593.cljs$lang$ctorPrWriter = (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async19593");
});

cljs.core.async.__GT_t_cljs$core$async19593 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19593(alt_handler__$1,flag__$1,cb__$1,meta19594){
return (new cljs.core.async.t_cljs$core$async19593(alt_handler__$1,flag__$1,cb__$1,meta19594));
});

}

return (new cljs.core.async.t_cljs$core$async19593(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19596_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19596_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19597_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19597_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16866__auto__ = wport;
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19598 = (i + (1));
i = G__19598;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16866__auto__ = ret;
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16854__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16854__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16854__auto__;
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
var args__17931__auto__ = [];
var len__17924__auto___19604 = arguments.length;
var i__17925__auto___19605 = (0);
while(true){
if((i__17925__auto___19605 < len__17924__auto___19604)){
args__17931__auto__.push((arguments[i__17925__auto___19605]));

var G__19606 = (i__17925__auto___19605 + (1));
i__17925__auto___19605 = G__19606;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((1) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17932__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19601){
var map__19602 = p__19601;
var map__19602__$1 = ((((!((map__19602 == null)))?((((map__19602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19602):map__19602);
var opts = map__19602__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19599){
var G__19600 = cljs.core.first.call(null,seq19599);
var seq19599__$1 = cljs.core.next.call(null,seq19599);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19600,seq19599__$1);
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
var args19607 = [];
var len__17924__auto___19657 = arguments.length;
var i__17925__auto___19658 = (0);
while(true){
if((i__17925__auto___19658 < len__17924__auto___19657)){
args19607.push((arguments[i__17925__auto___19658]));

var G__19659 = (i__17925__auto___19658 + (1));
i__17925__auto___19658 = G__19659;
continue;
} else {
}
break;
}

var G__19609 = args19607.length;
switch (G__19609) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19607.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19494__auto___19661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___19661){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___19661){
return (function (state_19633){
var state_val_19634 = (state_19633[(1)]);
if((state_val_19634 === (7))){
var inst_19629 = (state_19633[(2)]);
var state_19633__$1 = state_19633;
var statearr_19635_19662 = state_19633__$1;
(statearr_19635_19662[(2)] = inst_19629);

(statearr_19635_19662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (1))){
var state_19633__$1 = state_19633;
var statearr_19636_19663 = state_19633__$1;
(statearr_19636_19663[(2)] = null);

(statearr_19636_19663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (4))){
var inst_19612 = (state_19633[(7)]);
var inst_19612__$1 = (state_19633[(2)]);
var inst_19613 = (inst_19612__$1 == null);
var state_19633__$1 = (function (){var statearr_19637 = state_19633;
(statearr_19637[(7)] = inst_19612__$1);

return statearr_19637;
})();
if(cljs.core.truth_(inst_19613)){
var statearr_19638_19664 = state_19633__$1;
(statearr_19638_19664[(1)] = (5));

} else {
var statearr_19639_19665 = state_19633__$1;
(statearr_19639_19665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (13))){
var state_19633__$1 = state_19633;
var statearr_19640_19666 = state_19633__$1;
(statearr_19640_19666[(2)] = null);

(statearr_19640_19666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (6))){
var inst_19612 = (state_19633[(7)]);
var state_19633__$1 = state_19633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19633__$1,(11),to,inst_19612);
} else {
if((state_val_19634 === (3))){
var inst_19631 = (state_19633[(2)]);
var state_19633__$1 = state_19633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19633__$1,inst_19631);
} else {
if((state_val_19634 === (12))){
var state_19633__$1 = state_19633;
var statearr_19641_19667 = state_19633__$1;
(statearr_19641_19667[(2)] = null);

(statearr_19641_19667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (2))){
var state_19633__$1 = state_19633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19633__$1,(4),from);
} else {
if((state_val_19634 === (11))){
var inst_19622 = (state_19633[(2)]);
var state_19633__$1 = state_19633;
if(cljs.core.truth_(inst_19622)){
var statearr_19642_19668 = state_19633__$1;
(statearr_19642_19668[(1)] = (12));

} else {
var statearr_19643_19669 = state_19633__$1;
(statearr_19643_19669[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (9))){
var state_19633__$1 = state_19633;
var statearr_19644_19670 = state_19633__$1;
(statearr_19644_19670[(2)] = null);

(statearr_19644_19670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (5))){
var state_19633__$1 = state_19633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19645_19671 = state_19633__$1;
(statearr_19645_19671[(1)] = (8));

} else {
var statearr_19646_19672 = state_19633__$1;
(statearr_19646_19672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (14))){
var inst_19627 = (state_19633[(2)]);
var state_19633__$1 = state_19633;
var statearr_19647_19673 = state_19633__$1;
(statearr_19647_19673[(2)] = inst_19627);

(statearr_19647_19673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (10))){
var inst_19619 = (state_19633[(2)]);
var state_19633__$1 = state_19633;
var statearr_19648_19674 = state_19633__$1;
(statearr_19648_19674[(2)] = inst_19619);

(statearr_19648_19674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19634 === (8))){
var inst_19616 = cljs.core.async.close_BANG_.call(null,to);
var state_19633__$1 = state_19633;
var statearr_19649_19675 = state_19633__$1;
(statearr_19649_19675[(2)] = inst_19616);

(statearr_19649_19675[(1)] = (10));


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
});})(c__19494__auto___19661))
;
return ((function (switch__19382__auto__,c__19494__auto___19661){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_19653 = [null,null,null,null,null,null,null,null];
(statearr_19653[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_19653[(1)] = (1));

return statearr_19653;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_19633){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_19633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e19654){if((e19654 instanceof Object)){
var ex__19386__auto__ = e19654;
var statearr_19655_19676 = state_19633;
(statearr_19655_19676[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19677 = state_19633;
state_19633 = G__19677;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_19633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_19633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___19661))
})();
var state__19496__auto__ = (function (){var statearr_19656 = f__19495__auto__.call(null);
(statearr_19656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___19661);

return statearr_19656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___19661))
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
return (function (p__19861){
var vec__19862 = p__19861;
var v = cljs.core.nth.call(null,vec__19862,(0),null);
var p = cljs.core.nth.call(null,vec__19862,(1),null);
var job = vec__19862;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19494__auto___20044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___20044,res,vec__19862,v,p,job,jobs,results){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___20044,res,vec__19862,v,p,job,jobs,results){
return (function (state_19867){
var state_val_19868 = (state_19867[(1)]);
if((state_val_19868 === (1))){
var state_19867__$1 = state_19867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19867__$1,(2),res,v);
} else {
if((state_val_19868 === (2))){
var inst_19864 = (state_19867[(2)]);
var inst_19865 = cljs.core.async.close_BANG_.call(null,res);
var state_19867__$1 = (function (){var statearr_19869 = state_19867;
(statearr_19869[(7)] = inst_19864);

return statearr_19869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19867__$1,inst_19865);
} else {
return null;
}
}
});})(c__19494__auto___20044,res,vec__19862,v,p,job,jobs,results))
;
return ((function (switch__19382__auto__,c__19494__auto___20044,res,vec__19862,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0 = (function (){
var statearr_19873 = [null,null,null,null,null,null,null,null];
(statearr_19873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__);

(statearr_19873[(1)] = (1));

return statearr_19873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1 = (function (state_19867){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_19867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e19874){if((e19874 instanceof Object)){
var ex__19386__auto__ = e19874;
var statearr_19875_20045 = state_19867;
(statearr_19875_20045[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20046 = state_19867;
state_19867 = G__20046;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = function(state_19867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1.call(this,state_19867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___20044,res,vec__19862,v,p,job,jobs,results))
})();
var state__19496__auto__ = (function (){var statearr_19876 = f__19495__auto__.call(null);
(statearr_19876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___20044);

return statearr_19876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___20044,res,vec__19862,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19877){
var vec__19878 = p__19877;
var v = cljs.core.nth.call(null,vec__19878,(0),null);
var p = cljs.core.nth.call(null,vec__19878,(1),null);
var job = vec__19878;
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
var n__17769__auto___20047 = n;
var __20048 = (0);
while(true){
if((__20048 < n__17769__auto___20047)){
var G__19879_20049 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19879_20049) {
case "compute":
var c__19494__auto___20051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20048,c__19494__auto___20051,G__19879_20049,n__17769__auto___20047,jobs,results,process,async){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (__20048,c__19494__auto___20051,G__19879_20049,n__17769__auto___20047,jobs,results,process,async){
return (function (state_19892){
var state_val_19893 = (state_19892[(1)]);
if((state_val_19893 === (1))){
var state_19892__$1 = state_19892;
var statearr_19894_20052 = state_19892__$1;
(statearr_19894_20052[(2)] = null);

(statearr_19894_20052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (2))){
var state_19892__$1 = state_19892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19892__$1,(4),jobs);
} else {
if((state_val_19893 === (3))){
var inst_19890 = (state_19892[(2)]);
var state_19892__$1 = state_19892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19892__$1,inst_19890);
} else {
if((state_val_19893 === (4))){
var inst_19882 = (state_19892[(2)]);
var inst_19883 = process.call(null,inst_19882);
var state_19892__$1 = state_19892;
if(cljs.core.truth_(inst_19883)){
var statearr_19895_20053 = state_19892__$1;
(statearr_19895_20053[(1)] = (5));

} else {
var statearr_19896_20054 = state_19892__$1;
(statearr_19896_20054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (5))){
var state_19892__$1 = state_19892;
var statearr_19897_20055 = state_19892__$1;
(statearr_19897_20055[(2)] = null);

(statearr_19897_20055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (6))){
var state_19892__$1 = state_19892;
var statearr_19898_20056 = state_19892__$1;
(statearr_19898_20056[(2)] = null);

(statearr_19898_20056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19893 === (7))){
var inst_19888 = (state_19892[(2)]);
var state_19892__$1 = state_19892;
var statearr_19899_20057 = state_19892__$1;
(statearr_19899_20057[(2)] = inst_19888);

(statearr_19899_20057[(1)] = (3));


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
});})(__20048,c__19494__auto___20051,G__19879_20049,n__17769__auto___20047,jobs,results,process,async))
;
return ((function (__20048,switch__19382__auto__,c__19494__auto___20051,G__19879_20049,n__17769__auto___20047,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0 = (function (){
var statearr_19903 = [null,null,null,null,null,null,null];
(statearr_19903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__);

(statearr_19903[(1)] = (1));

return statearr_19903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1 = (function (state_19892){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_19892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e19904){if((e19904 instanceof Object)){
var ex__19386__auto__ = e19904;
var statearr_19905_20058 = state_19892;
(statearr_19905_20058[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20059 = state_19892;
state_19892 = G__20059;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = function(state_19892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1.call(this,state_19892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__;
})()
;})(__20048,switch__19382__auto__,c__19494__auto___20051,G__19879_20049,n__17769__auto___20047,jobs,results,process,async))
})();
var state__19496__auto__ = (function (){var statearr_19906 = f__19495__auto__.call(null);
(statearr_19906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___20051);

return statearr_19906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(__20048,c__19494__auto___20051,G__19879_20049,n__17769__auto___20047,jobs,results,process,async))
);


break;
case "async":
var c__19494__auto___20060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20048,c__19494__auto___20060,G__19879_20049,n__17769__auto___20047,jobs,results,process,async){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (__20048,c__19494__auto___20060,G__19879_20049,n__17769__auto___20047,jobs,results,process,async){
return (function (state_19919){
var state_val_19920 = (state_19919[(1)]);
if((state_val_19920 === (1))){
var state_19919__$1 = state_19919;
var statearr_19921_20061 = state_19919__$1;
(statearr_19921_20061[(2)] = null);

(statearr_19921_20061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (2))){
var state_19919__$1 = state_19919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19919__$1,(4),jobs);
} else {
if((state_val_19920 === (3))){
var inst_19917 = (state_19919[(2)]);
var state_19919__$1 = state_19919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19919__$1,inst_19917);
} else {
if((state_val_19920 === (4))){
var inst_19909 = (state_19919[(2)]);
var inst_19910 = async.call(null,inst_19909);
var state_19919__$1 = state_19919;
if(cljs.core.truth_(inst_19910)){
var statearr_19922_20062 = state_19919__$1;
(statearr_19922_20062[(1)] = (5));

} else {
var statearr_19923_20063 = state_19919__$1;
(statearr_19923_20063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (5))){
var state_19919__$1 = state_19919;
var statearr_19924_20064 = state_19919__$1;
(statearr_19924_20064[(2)] = null);

(statearr_19924_20064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (6))){
var state_19919__$1 = state_19919;
var statearr_19925_20065 = state_19919__$1;
(statearr_19925_20065[(2)] = null);

(statearr_19925_20065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (7))){
var inst_19915 = (state_19919[(2)]);
var state_19919__$1 = state_19919;
var statearr_19926_20066 = state_19919__$1;
(statearr_19926_20066[(2)] = inst_19915);

(statearr_19926_20066[(1)] = (3));


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
});})(__20048,c__19494__auto___20060,G__19879_20049,n__17769__auto___20047,jobs,results,process,async))
;
return ((function (__20048,switch__19382__auto__,c__19494__auto___20060,G__19879_20049,n__17769__auto___20047,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0 = (function (){
var statearr_19930 = [null,null,null,null,null,null,null];
(statearr_19930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__);

(statearr_19930[(1)] = (1));

return statearr_19930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1 = (function (state_19919){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_19919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e19931){if((e19931 instanceof Object)){
var ex__19386__auto__ = e19931;
var statearr_19932_20067 = state_19919;
(statearr_19932_20067[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20068 = state_19919;
state_19919 = G__20068;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = function(state_19919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1.call(this,state_19919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__;
})()
;})(__20048,switch__19382__auto__,c__19494__auto___20060,G__19879_20049,n__17769__auto___20047,jobs,results,process,async))
})();
var state__19496__auto__ = (function (){var statearr_19933 = f__19495__auto__.call(null);
(statearr_19933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___20060);

return statearr_19933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(__20048,c__19494__auto___20060,G__19879_20049,n__17769__auto___20047,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20069 = (__20048 + (1));
__20048 = G__20069;
continue;
} else {
}
break;
}

var c__19494__auto___20070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___20070,jobs,results,process,async){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___20070,jobs,results,process,async){
return (function (state_19955){
var state_val_19956 = (state_19955[(1)]);
if((state_val_19956 === (1))){
var state_19955__$1 = state_19955;
var statearr_19957_20071 = state_19955__$1;
(statearr_19957_20071[(2)] = null);

(statearr_19957_20071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (2))){
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19955__$1,(4),from);
} else {
if((state_val_19956 === (3))){
var inst_19953 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19955__$1,inst_19953);
} else {
if((state_val_19956 === (4))){
var inst_19936 = (state_19955[(7)]);
var inst_19936__$1 = (state_19955[(2)]);
var inst_19937 = (inst_19936__$1 == null);
var state_19955__$1 = (function (){var statearr_19958 = state_19955;
(statearr_19958[(7)] = inst_19936__$1);

return statearr_19958;
})();
if(cljs.core.truth_(inst_19937)){
var statearr_19959_20072 = state_19955__$1;
(statearr_19959_20072[(1)] = (5));

} else {
var statearr_19960_20073 = state_19955__$1;
(statearr_19960_20073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (5))){
var inst_19939 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19955__$1 = state_19955;
var statearr_19961_20074 = state_19955__$1;
(statearr_19961_20074[(2)] = inst_19939);

(statearr_19961_20074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (6))){
var inst_19941 = (state_19955[(8)]);
var inst_19936 = (state_19955[(7)]);
var inst_19941__$1 = cljs.core.async.chan.call(null,(1));
var inst_19942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19943 = [inst_19936,inst_19941__$1];
var inst_19944 = (new cljs.core.PersistentVector(null,2,(5),inst_19942,inst_19943,null));
var state_19955__$1 = (function (){var statearr_19962 = state_19955;
(statearr_19962[(8)] = inst_19941__$1);

return statearr_19962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19955__$1,(8),jobs,inst_19944);
} else {
if((state_val_19956 === (7))){
var inst_19951 = (state_19955[(2)]);
var state_19955__$1 = state_19955;
var statearr_19963_20075 = state_19955__$1;
(statearr_19963_20075[(2)] = inst_19951);

(statearr_19963_20075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19956 === (8))){
var inst_19941 = (state_19955[(8)]);
var inst_19946 = (state_19955[(2)]);
var state_19955__$1 = (function (){var statearr_19964 = state_19955;
(statearr_19964[(9)] = inst_19946);

return statearr_19964;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19955__$1,(9),results,inst_19941);
} else {
if((state_val_19956 === (9))){
var inst_19948 = (state_19955[(2)]);
var state_19955__$1 = (function (){var statearr_19965 = state_19955;
(statearr_19965[(10)] = inst_19948);

return statearr_19965;
})();
var statearr_19966_20076 = state_19955__$1;
(statearr_19966_20076[(2)] = null);

(statearr_19966_20076[(1)] = (2));


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
});})(c__19494__auto___20070,jobs,results,process,async))
;
return ((function (switch__19382__auto__,c__19494__auto___20070,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0 = (function (){
var statearr_19970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__);

(statearr_19970[(1)] = (1));

return statearr_19970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1 = (function (state_19955){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_19955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e19971){if((e19971 instanceof Object)){
var ex__19386__auto__ = e19971;
var statearr_19972_20077 = state_19955;
(statearr_19972_20077[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20078 = state_19955;
state_19955 = G__20078;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = function(state_19955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1.call(this,state_19955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___20070,jobs,results,process,async))
})();
var state__19496__auto__ = (function (){var statearr_19973 = f__19495__auto__.call(null);
(statearr_19973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___20070);

return statearr_19973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___20070,jobs,results,process,async))
);


var c__19494__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto__,jobs,results,process,async){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto__,jobs,results,process,async){
return (function (state_20011){
var state_val_20012 = (state_20011[(1)]);
if((state_val_20012 === (7))){
var inst_20007 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
var statearr_20013_20079 = state_20011__$1;
(statearr_20013_20079[(2)] = inst_20007);

(statearr_20013_20079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (20))){
var state_20011__$1 = state_20011;
var statearr_20014_20080 = state_20011__$1;
(statearr_20014_20080[(2)] = null);

(statearr_20014_20080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (1))){
var state_20011__$1 = state_20011;
var statearr_20015_20081 = state_20011__$1;
(statearr_20015_20081[(2)] = null);

(statearr_20015_20081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (4))){
var inst_19976 = (state_20011[(7)]);
var inst_19976__$1 = (state_20011[(2)]);
var inst_19977 = (inst_19976__$1 == null);
var state_20011__$1 = (function (){var statearr_20016 = state_20011;
(statearr_20016[(7)] = inst_19976__$1);

return statearr_20016;
})();
if(cljs.core.truth_(inst_19977)){
var statearr_20017_20082 = state_20011__$1;
(statearr_20017_20082[(1)] = (5));

} else {
var statearr_20018_20083 = state_20011__$1;
(statearr_20018_20083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (15))){
var inst_19989 = (state_20011[(8)]);
var state_20011__$1 = state_20011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20011__$1,(18),to,inst_19989);
} else {
if((state_val_20012 === (21))){
var inst_20002 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
var statearr_20019_20084 = state_20011__$1;
(statearr_20019_20084[(2)] = inst_20002);

(statearr_20019_20084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (13))){
var inst_20004 = (state_20011[(2)]);
var state_20011__$1 = (function (){var statearr_20020 = state_20011;
(statearr_20020[(9)] = inst_20004);

return statearr_20020;
})();
var statearr_20021_20085 = state_20011__$1;
(statearr_20021_20085[(2)] = null);

(statearr_20021_20085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (6))){
var inst_19976 = (state_20011[(7)]);
var state_20011__$1 = state_20011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20011__$1,(11),inst_19976);
} else {
if((state_val_20012 === (17))){
var inst_19997 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
if(cljs.core.truth_(inst_19997)){
var statearr_20022_20086 = state_20011__$1;
(statearr_20022_20086[(1)] = (19));

} else {
var statearr_20023_20087 = state_20011__$1;
(statearr_20023_20087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (3))){
var inst_20009 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20011__$1,inst_20009);
} else {
if((state_val_20012 === (12))){
var inst_19986 = (state_20011[(10)]);
var state_20011__$1 = state_20011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20011__$1,(14),inst_19986);
} else {
if((state_val_20012 === (2))){
var state_20011__$1 = state_20011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20011__$1,(4),results);
} else {
if((state_val_20012 === (19))){
var state_20011__$1 = state_20011;
var statearr_20024_20088 = state_20011__$1;
(statearr_20024_20088[(2)] = null);

(statearr_20024_20088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (11))){
var inst_19986 = (state_20011[(2)]);
var state_20011__$1 = (function (){var statearr_20025 = state_20011;
(statearr_20025[(10)] = inst_19986);

return statearr_20025;
})();
var statearr_20026_20089 = state_20011__$1;
(statearr_20026_20089[(2)] = null);

(statearr_20026_20089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (9))){
var state_20011__$1 = state_20011;
var statearr_20027_20090 = state_20011__$1;
(statearr_20027_20090[(2)] = null);

(statearr_20027_20090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (5))){
var state_20011__$1 = state_20011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20028_20091 = state_20011__$1;
(statearr_20028_20091[(1)] = (8));

} else {
var statearr_20029_20092 = state_20011__$1;
(statearr_20029_20092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (14))){
var inst_19991 = (state_20011[(11)]);
var inst_19989 = (state_20011[(8)]);
var inst_19989__$1 = (state_20011[(2)]);
var inst_19990 = (inst_19989__$1 == null);
var inst_19991__$1 = cljs.core.not.call(null,inst_19990);
var state_20011__$1 = (function (){var statearr_20030 = state_20011;
(statearr_20030[(11)] = inst_19991__$1);

(statearr_20030[(8)] = inst_19989__$1);

return statearr_20030;
})();
if(inst_19991__$1){
var statearr_20031_20093 = state_20011__$1;
(statearr_20031_20093[(1)] = (15));

} else {
var statearr_20032_20094 = state_20011__$1;
(statearr_20032_20094[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (16))){
var inst_19991 = (state_20011[(11)]);
var state_20011__$1 = state_20011;
var statearr_20033_20095 = state_20011__$1;
(statearr_20033_20095[(2)] = inst_19991);

(statearr_20033_20095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (10))){
var inst_19983 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
var statearr_20034_20096 = state_20011__$1;
(statearr_20034_20096[(2)] = inst_19983);

(statearr_20034_20096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (18))){
var inst_19994 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
var statearr_20035_20097 = state_20011__$1;
(statearr_20035_20097[(2)] = inst_19994);

(statearr_20035_20097[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (8))){
var inst_19980 = cljs.core.async.close_BANG_.call(null,to);
var state_20011__$1 = state_20011;
var statearr_20036_20098 = state_20011__$1;
(statearr_20036_20098[(2)] = inst_19980);

(statearr_20036_20098[(1)] = (10));


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
});})(c__19494__auto__,jobs,results,process,async))
;
return ((function (switch__19382__auto__,c__19494__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0 = (function (){
var statearr_20040 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__);

(statearr_20040[(1)] = (1));

return statearr_20040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1 = (function (state_20011){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_20011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e20041){if((e20041 instanceof Object)){
var ex__19386__auto__ = e20041;
var statearr_20042_20099 = state_20011;
(statearr_20042_20099[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20100 = state_20011;
state_20011 = G__20100;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__ = function(state_20011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1.call(this,state_20011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19383__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto__,jobs,results,process,async))
})();
var state__19496__auto__ = (function (){var statearr_20043 = f__19495__auto__.call(null);
(statearr_20043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto__);

return statearr_20043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto__,jobs,results,process,async))
);

return c__19494__auto__;
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
var args20101 = [];
var len__17924__auto___20104 = arguments.length;
var i__17925__auto___20105 = (0);
while(true){
if((i__17925__auto___20105 < len__17924__auto___20104)){
args20101.push((arguments[i__17925__auto___20105]));

var G__20106 = (i__17925__auto___20105 + (1));
i__17925__auto___20105 = G__20106;
continue;
} else {
}
break;
}

var G__20103 = args20101.length;
switch (G__20103) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20101.length)].join('')));

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
var args20108 = [];
var len__17924__auto___20111 = arguments.length;
var i__17925__auto___20112 = (0);
while(true){
if((i__17925__auto___20112 < len__17924__auto___20111)){
args20108.push((arguments[i__17925__auto___20112]));

var G__20113 = (i__17925__auto___20112 + (1));
i__17925__auto___20112 = G__20113;
continue;
} else {
}
break;
}

var G__20110 = args20108.length;
switch (G__20110) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20108.length)].join('')));

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
var args20115 = [];
var len__17924__auto___20168 = arguments.length;
var i__17925__auto___20169 = (0);
while(true){
if((i__17925__auto___20169 < len__17924__auto___20168)){
args20115.push((arguments[i__17925__auto___20169]));

var G__20170 = (i__17925__auto___20169 + (1));
i__17925__auto___20169 = G__20170;
continue;
} else {
}
break;
}

var G__20117 = args20115.length;
switch (G__20117) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20115.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19494__auto___20172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___20172,tc,fc){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___20172,tc,fc){
return (function (state_20143){
var state_val_20144 = (state_20143[(1)]);
if((state_val_20144 === (7))){
var inst_20139 = (state_20143[(2)]);
var state_20143__$1 = state_20143;
var statearr_20145_20173 = state_20143__$1;
(statearr_20145_20173[(2)] = inst_20139);

(statearr_20145_20173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (1))){
var state_20143__$1 = state_20143;
var statearr_20146_20174 = state_20143__$1;
(statearr_20146_20174[(2)] = null);

(statearr_20146_20174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (4))){
var inst_20120 = (state_20143[(7)]);
var inst_20120__$1 = (state_20143[(2)]);
var inst_20121 = (inst_20120__$1 == null);
var state_20143__$1 = (function (){var statearr_20147 = state_20143;
(statearr_20147[(7)] = inst_20120__$1);

return statearr_20147;
})();
if(cljs.core.truth_(inst_20121)){
var statearr_20148_20175 = state_20143__$1;
(statearr_20148_20175[(1)] = (5));

} else {
var statearr_20149_20176 = state_20143__$1;
(statearr_20149_20176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (13))){
var state_20143__$1 = state_20143;
var statearr_20150_20177 = state_20143__$1;
(statearr_20150_20177[(2)] = null);

(statearr_20150_20177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (6))){
var inst_20120 = (state_20143[(7)]);
var inst_20126 = p.call(null,inst_20120);
var state_20143__$1 = state_20143;
if(cljs.core.truth_(inst_20126)){
var statearr_20151_20178 = state_20143__$1;
(statearr_20151_20178[(1)] = (9));

} else {
var statearr_20152_20179 = state_20143__$1;
(statearr_20152_20179[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (3))){
var inst_20141 = (state_20143[(2)]);
var state_20143__$1 = state_20143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20143__$1,inst_20141);
} else {
if((state_val_20144 === (12))){
var state_20143__$1 = state_20143;
var statearr_20153_20180 = state_20143__$1;
(statearr_20153_20180[(2)] = null);

(statearr_20153_20180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (2))){
var state_20143__$1 = state_20143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20143__$1,(4),ch);
} else {
if((state_val_20144 === (11))){
var inst_20120 = (state_20143[(7)]);
var inst_20130 = (state_20143[(2)]);
var state_20143__$1 = state_20143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20143__$1,(8),inst_20130,inst_20120);
} else {
if((state_val_20144 === (9))){
var state_20143__$1 = state_20143;
var statearr_20154_20181 = state_20143__$1;
(statearr_20154_20181[(2)] = tc);

(statearr_20154_20181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (5))){
var inst_20123 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20124 = cljs.core.async.close_BANG_.call(null,fc);
var state_20143__$1 = (function (){var statearr_20155 = state_20143;
(statearr_20155[(8)] = inst_20123);

return statearr_20155;
})();
var statearr_20156_20182 = state_20143__$1;
(statearr_20156_20182[(2)] = inst_20124);

(statearr_20156_20182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (14))){
var inst_20137 = (state_20143[(2)]);
var state_20143__$1 = state_20143;
var statearr_20157_20183 = state_20143__$1;
(statearr_20157_20183[(2)] = inst_20137);

(statearr_20157_20183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (10))){
var state_20143__$1 = state_20143;
var statearr_20158_20184 = state_20143__$1;
(statearr_20158_20184[(2)] = fc);

(statearr_20158_20184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20144 === (8))){
var inst_20132 = (state_20143[(2)]);
var state_20143__$1 = state_20143;
if(cljs.core.truth_(inst_20132)){
var statearr_20159_20185 = state_20143__$1;
(statearr_20159_20185[(1)] = (12));

} else {
var statearr_20160_20186 = state_20143__$1;
(statearr_20160_20186[(1)] = (13));

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
});})(c__19494__auto___20172,tc,fc))
;
return ((function (switch__19382__auto__,c__19494__auto___20172,tc,fc){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_20164 = [null,null,null,null,null,null,null,null,null];
(statearr_20164[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_20164[(1)] = (1));

return statearr_20164;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_20143){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_20143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e20165){if((e20165 instanceof Object)){
var ex__19386__auto__ = e20165;
var statearr_20166_20187 = state_20143;
(statearr_20166_20187[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20188 = state_20143;
state_20143 = G__20188;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_20143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_20143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___20172,tc,fc))
})();
var state__19496__auto__ = (function (){var statearr_20167 = f__19495__auto__.call(null);
(statearr_20167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___20172);

return statearr_20167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___20172,tc,fc))
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
var c__19494__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto__){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto__){
return (function (state_20252){
var state_val_20253 = (state_20252[(1)]);
if((state_val_20253 === (7))){
var inst_20248 = (state_20252[(2)]);
var state_20252__$1 = state_20252;
var statearr_20254_20275 = state_20252__$1;
(statearr_20254_20275[(2)] = inst_20248);

(statearr_20254_20275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (1))){
var inst_20232 = init;
var state_20252__$1 = (function (){var statearr_20255 = state_20252;
(statearr_20255[(7)] = inst_20232);

return statearr_20255;
})();
var statearr_20256_20276 = state_20252__$1;
(statearr_20256_20276[(2)] = null);

(statearr_20256_20276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (4))){
var inst_20235 = (state_20252[(8)]);
var inst_20235__$1 = (state_20252[(2)]);
var inst_20236 = (inst_20235__$1 == null);
var state_20252__$1 = (function (){var statearr_20257 = state_20252;
(statearr_20257[(8)] = inst_20235__$1);

return statearr_20257;
})();
if(cljs.core.truth_(inst_20236)){
var statearr_20258_20277 = state_20252__$1;
(statearr_20258_20277[(1)] = (5));

} else {
var statearr_20259_20278 = state_20252__$1;
(statearr_20259_20278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (6))){
var inst_20232 = (state_20252[(7)]);
var inst_20235 = (state_20252[(8)]);
var inst_20239 = (state_20252[(9)]);
var inst_20239__$1 = f.call(null,inst_20232,inst_20235);
var inst_20240 = cljs.core.reduced_QMARK_.call(null,inst_20239__$1);
var state_20252__$1 = (function (){var statearr_20260 = state_20252;
(statearr_20260[(9)] = inst_20239__$1);

return statearr_20260;
})();
if(inst_20240){
var statearr_20261_20279 = state_20252__$1;
(statearr_20261_20279[(1)] = (8));

} else {
var statearr_20262_20280 = state_20252__$1;
(statearr_20262_20280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (3))){
var inst_20250 = (state_20252[(2)]);
var state_20252__$1 = state_20252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20252__$1,inst_20250);
} else {
if((state_val_20253 === (2))){
var state_20252__$1 = state_20252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20252__$1,(4),ch);
} else {
if((state_val_20253 === (9))){
var inst_20239 = (state_20252[(9)]);
var inst_20232 = inst_20239;
var state_20252__$1 = (function (){var statearr_20263 = state_20252;
(statearr_20263[(7)] = inst_20232);

return statearr_20263;
})();
var statearr_20264_20281 = state_20252__$1;
(statearr_20264_20281[(2)] = null);

(statearr_20264_20281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (5))){
var inst_20232 = (state_20252[(7)]);
var state_20252__$1 = state_20252;
var statearr_20265_20282 = state_20252__$1;
(statearr_20265_20282[(2)] = inst_20232);

(statearr_20265_20282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (10))){
var inst_20246 = (state_20252[(2)]);
var state_20252__$1 = state_20252;
var statearr_20266_20283 = state_20252__$1;
(statearr_20266_20283[(2)] = inst_20246);

(statearr_20266_20283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20253 === (8))){
var inst_20239 = (state_20252[(9)]);
var inst_20242 = cljs.core.deref.call(null,inst_20239);
var state_20252__$1 = state_20252;
var statearr_20267_20284 = state_20252__$1;
(statearr_20267_20284[(2)] = inst_20242);

(statearr_20267_20284[(1)] = (10));


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
});})(c__19494__auto__))
;
return ((function (switch__19382__auto__,c__19494__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19383__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19383__auto____0 = (function (){
var statearr_20271 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20271[(0)] = cljs$core$async$reduce_$_state_machine__19383__auto__);

(statearr_20271[(1)] = (1));

return statearr_20271;
});
var cljs$core$async$reduce_$_state_machine__19383__auto____1 = (function (state_20252){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_20252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e20272){if((e20272 instanceof Object)){
var ex__19386__auto__ = e20272;
var statearr_20273_20285 = state_20252;
(statearr_20273_20285[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20286 = state_20252;
state_20252 = G__20286;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19383__auto__ = function(state_20252){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19383__auto____1.call(this,state_20252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19383__auto____0;
cljs$core$async$reduce_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19383__auto____1;
return cljs$core$async$reduce_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto__))
})();
var state__19496__auto__ = (function (){var statearr_20274 = f__19495__auto__.call(null);
(statearr_20274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto__);

return statearr_20274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto__))
);

return c__19494__auto__;
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
var args20287 = [];
var len__17924__auto___20339 = arguments.length;
var i__17925__auto___20340 = (0);
while(true){
if((i__17925__auto___20340 < len__17924__auto___20339)){
args20287.push((arguments[i__17925__auto___20340]));

var G__20341 = (i__17925__auto___20340 + (1));
i__17925__auto___20340 = G__20341;
continue;
} else {
}
break;
}

var G__20289 = args20287.length;
switch (G__20289) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20287.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19494__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto__){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto__){
return (function (state_20314){
var state_val_20315 = (state_20314[(1)]);
if((state_val_20315 === (7))){
var inst_20296 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20316_20343 = state_20314__$1;
(statearr_20316_20343[(2)] = inst_20296);

(statearr_20316_20343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (1))){
var inst_20290 = cljs.core.seq.call(null,coll);
var inst_20291 = inst_20290;
var state_20314__$1 = (function (){var statearr_20317 = state_20314;
(statearr_20317[(7)] = inst_20291);

return statearr_20317;
})();
var statearr_20318_20344 = state_20314__$1;
(statearr_20318_20344[(2)] = null);

(statearr_20318_20344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (4))){
var inst_20291 = (state_20314[(7)]);
var inst_20294 = cljs.core.first.call(null,inst_20291);
var state_20314__$1 = state_20314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20314__$1,(7),ch,inst_20294);
} else {
if((state_val_20315 === (13))){
var inst_20308 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20319_20345 = state_20314__$1;
(statearr_20319_20345[(2)] = inst_20308);

(statearr_20319_20345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (6))){
var inst_20299 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
if(cljs.core.truth_(inst_20299)){
var statearr_20320_20346 = state_20314__$1;
(statearr_20320_20346[(1)] = (8));

} else {
var statearr_20321_20347 = state_20314__$1;
(statearr_20321_20347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (3))){
var inst_20312 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20314__$1,inst_20312);
} else {
if((state_val_20315 === (12))){
var state_20314__$1 = state_20314;
var statearr_20322_20348 = state_20314__$1;
(statearr_20322_20348[(2)] = null);

(statearr_20322_20348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (2))){
var inst_20291 = (state_20314[(7)]);
var state_20314__$1 = state_20314;
if(cljs.core.truth_(inst_20291)){
var statearr_20323_20349 = state_20314__$1;
(statearr_20323_20349[(1)] = (4));

} else {
var statearr_20324_20350 = state_20314__$1;
(statearr_20324_20350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (11))){
var inst_20305 = cljs.core.async.close_BANG_.call(null,ch);
var state_20314__$1 = state_20314;
var statearr_20325_20351 = state_20314__$1;
(statearr_20325_20351[(2)] = inst_20305);

(statearr_20325_20351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (9))){
var state_20314__$1 = state_20314;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20326_20352 = state_20314__$1;
(statearr_20326_20352[(1)] = (11));

} else {
var statearr_20327_20353 = state_20314__$1;
(statearr_20327_20353[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (5))){
var inst_20291 = (state_20314[(7)]);
var state_20314__$1 = state_20314;
var statearr_20328_20354 = state_20314__$1;
(statearr_20328_20354[(2)] = inst_20291);

(statearr_20328_20354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (10))){
var inst_20310 = (state_20314[(2)]);
var state_20314__$1 = state_20314;
var statearr_20329_20355 = state_20314__$1;
(statearr_20329_20355[(2)] = inst_20310);

(statearr_20329_20355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20315 === (8))){
var inst_20291 = (state_20314[(7)]);
var inst_20301 = cljs.core.next.call(null,inst_20291);
var inst_20291__$1 = inst_20301;
var state_20314__$1 = (function (){var statearr_20330 = state_20314;
(statearr_20330[(7)] = inst_20291__$1);

return statearr_20330;
})();
var statearr_20331_20356 = state_20314__$1;
(statearr_20331_20356[(2)] = null);

(statearr_20331_20356[(1)] = (2));


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
});})(c__19494__auto__))
;
return ((function (switch__19382__auto__,c__19494__auto__){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_20335 = [null,null,null,null,null,null,null,null];
(statearr_20335[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_20335[(1)] = (1));

return statearr_20335;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_20314){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_20314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e20336){if((e20336 instanceof Object)){
var ex__19386__auto__ = e20336;
var statearr_20337_20357 = state_20314;
(statearr_20337_20357[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20358 = state_20314;
state_20314 = G__20358;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_20314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_20314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto__))
})();
var state__19496__auto__ = (function (){var statearr_20338 = f__19495__auto__.call(null);
(statearr_20338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto__);

return statearr_20338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto__))
);

return c__19494__auto__;
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
var x__17521__auto__ = (((_ == null))?null:_);
var m__17522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,_);
} else {
var m__17522__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,_);
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
var x__17521__auto__ = (((m == null))?null:m);
var m__17522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17522__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17521__auto__ = (((m == null))?null:m);
var m__17522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,m,ch);
} else {
var m__17522__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,m,ch);
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
var x__17521__auto__ = (((m == null))?null:m);
var m__17522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,m);
} else {
var m__17522__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async20580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20580 = (function (mult,ch,cs,meta20581){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20581 = meta20581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20582,meta20581__$1){
var self__ = this;
var _20582__$1 = this;
return (new cljs.core.async.t_cljs$core$async20580(self__.mult,self__.ch,self__.cs,meta20581__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20582){
var self__ = this;
var _20582__$1 = this;
return self__.meta20581;
});})(cs))
;

cljs.core.async.t_cljs$core$async20580.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20580.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20580.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20580.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20580.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20580.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20581","meta20581",764284941,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20580";

cljs.core.async.t_cljs$core$async20580.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async20580");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20580 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20580(mult__$1,ch__$1,cs__$1,meta20581){
return (new cljs.core.async.t_cljs$core$async20580(mult__$1,ch__$1,cs__$1,meta20581));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20580(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19494__auto___20801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___20801,cs,m,dchan,dctr,done){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___20801,cs,m,dchan,dctr,done){
return (function (state_20713){
var state_val_20714 = (state_20713[(1)]);
if((state_val_20714 === (7))){
var inst_20709 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20715_20802 = state_20713__$1;
(statearr_20715_20802[(2)] = inst_20709);

(statearr_20715_20802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (20))){
var inst_20614 = (state_20713[(7)]);
var inst_20624 = cljs.core.first.call(null,inst_20614);
var inst_20625 = cljs.core.nth.call(null,inst_20624,(0),null);
var inst_20626 = cljs.core.nth.call(null,inst_20624,(1),null);
var state_20713__$1 = (function (){var statearr_20716 = state_20713;
(statearr_20716[(8)] = inst_20625);

return statearr_20716;
})();
if(cljs.core.truth_(inst_20626)){
var statearr_20717_20803 = state_20713__$1;
(statearr_20717_20803[(1)] = (22));

} else {
var statearr_20718_20804 = state_20713__$1;
(statearr_20718_20804[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (27))){
var inst_20654 = (state_20713[(9)]);
var inst_20656 = (state_20713[(10)]);
var inst_20661 = (state_20713[(11)]);
var inst_20585 = (state_20713[(12)]);
var inst_20661__$1 = cljs.core._nth.call(null,inst_20654,inst_20656);
var inst_20662 = cljs.core.async.put_BANG_.call(null,inst_20661__$1,inst_20585,done);
var state_20713__$1 = (function (){var statearr_20719 = state_20713;
(statearr_20719[(11)] = inst_20661__$1);

return statearr_20719;
})();
if(cljs.core.truth_(inst_20662)){
var statearr_20720_20805 = state_20713__$1;
(statearr_20720_20805[(1)] = (30));

} else {
var statearr_20721_20806 = state_20713__$1;
(statearr_20721_20806[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (1))){
var state_20713__$1 = state_20713;
var statearr_20722_20807 = state_20713__$1;
(statearr_20722_20807[(2)] = null);

(statearr_20722_20807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (24))){
var inst_20614 = (state_20713[(7)]);
var inst_20631 = (state_20713[(2)]);
var inst_20632 = cljs.core.next.call(null,inst_20614);
var inst_20594 = inst_20632;
var inst_20595 = null;
var inst_20596 = (0);
var inst_20597 = (0);
var state_20713__$1 = (function (){var statearr_20723 = state_20713;
(statearr_20723[(13)] = inst_20595);

(statearr_20723[(14)] = inst_20631);

(statearr_20723[(15)] = inst_20596);

(statearr_20723[(16)] = inst_20594);

(statearr_20723[(17)] = inst_20597);

return statearr_20723;
})();
var statearr_20724_20808 = state_20713__$1;
(statearr_20724_20808[(2)] = null);

(statearr_20724_20808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (39))){
var state_20713__$1 = state_20713;
var statearr_20728_20809 = state_20713__$1;
(statearr_20728_20809[(2)] = null);

(statearr_20728_20809[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (4))){
var inst_20585 = (state_20713[(12)]);
var inst_20585__$1 = (state_20713[(2)]);
var inst_20586 = (inst_20585__$1 == null);
var state_20713__$1 = (function (){var statearr_20729 = state_20713;
(statearr_20729[(12)] = inst_20585__$1);

return statearr_20729;
})();
if(cljs.core.truth_(inst_20586)){
var statearr_20730_20810 = state_20713__$1;
(statearr_20730_20810[(1)] = (5));

} else {
var statearr_20731_20811 = state_20713__$1;
(statearr_20731_20811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (15))){
var inst_20595 = (state_20713[(13)]);
var inst_20596 = (state_20713[(15)]);
var inst_20594 = (state_20713[(16)]);
var inst_20597 = (state_20713[(17)]);
var inst_20610 = (state_20713[(2)]);
var inst_20611 = (inst_20597 + (1));
var tmp20725 = inst_20595;
var tmp20726 = inst_20596;
var tmp20727 = inst_20594;
var inst_20594__$1 = tmp20727;
var inst_20595__$1 = tmp20725;
var inst_20596__$1 = tmp20726;
var inst_20597__$1 = inst_20611;
var state_20713__$1 = (function (){var statearr_20732 = state_20713;
(statearr_20732[(13)] = inst_20595__$1);

(statearr_20732[(18)] = inst_20610);

(statearr_20732[(15)] = inst_20596__$1);

(statearr_20732[(16)] = inst_20594__$1);

(statearr_20732[(17)] = inst_20597__$1);

return statearr_20732;
})();
var statearr_20733_20812 = state_20713__$1;
(statearr_20733_20812[(2)] = null);

(statearr_20733_20812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (21))){
var inst_20635 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20737_20813 = state_20713__$1;
(statearr_20737_20813[(2)] = inst_20635);

(statearr_20737_20813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (31))){
var inst_20661 = (state_20713[(11)]);
var inst_20665 = done.call(null,null);
var inst_20666 = cljs.core.async.untap_STAR_.call(null,m,inst_20661);
var state_20713__$1 = (function (){var statearr_20738 = state_20713;
(statearr_20738[(19)] = inst_20665);

return statearr_20738;
})();
var statearr_20739_20814 = state_20713__$1;
(statearr_20739_20814[(2)] = inst_20666);

(statearr_20739_20814[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (32))){
var inst_20653 = (state_20713[(20)]);
var inst_20654 = (state_20713[(9)]);
var inst_20656 = (state_20713[(10)]);
var inst_20655 = (state_20713[(21)]);
var inst_20668 = (state_20713[(2)]);
var inst_20669 = (inst_20656 + (1));
var tmp20734 = inst_20653;
var tmp20735 = inst_20654;
var tmp20736 = inst_20655;
var inst_20653__$1 = tmp20734;
var inst_20654__$1 = tmp20735;
var inst_20655__$1 = tmp20736;
var inst_20656__$1 = inst_20669;
var state_20713__$1 = (function (){var statearr_20740 = state_20713;
(statearr_20740[(22)] = inst_20668);

(statearr_20740[(20)] = inst_20653__$1);

(statearr_20740[(9)] = inst_20654__$1);

(statearr_20740[(10)] = inst_20656__$1);

(statearr_20740[(21)] = inst_20655__$1);

return statearr_20740;
})();
var statearr_20741_20815 = state_20713__$1;
(statearr_20741_20815[(2)] = null);

(statearr_20741_20815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (40))){
var inst_20681 = (state_20713[(23)]);
var inst_20685 = done.call(null,null);
var inst_20686 = cljs.core.async.untap_STAR_.call(null,m,inst_20681);
var state_20713__$1 = (function (){var statearr_20742 = state_20713;
(statearr_20742[(24)] = inst_20685);

return statearr_20742;
})();
var statearr_20743_20816 = state_20713__$1;
(statearr_20743_20816[(2)] = inst_20686);

(statearr_20743_20816[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (33))){
var inst_20672 = (state_20713[(25)]);
var inst_20674 = cljs.core.chunked_seq_QMARK_.call(null,inst_20672);
var state_20713__$1 = state_20713;
if(inst_20674){
var statearr_20744_20817 = state_20713__$1;
(statearr_20744_20817[(1)] = (36));

} else {
var statearr_20745_20818 = state_20713__$1;
(statearr_20745_20818[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (13))){
var inst_20604 = (state_20713[(26)]);
var inst_20607 = cljs.core.async.close_BANG_.call(null,inst_20604);
var state_20713__$1 = state_20713;
var statearr_20746_20819 = state_20713__$1;
(statearr_20746_20819[(2)] = inst_20607);

(statearr_20746_20819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (22))){
var inst_20625 = (state_20713[(8)]);
var inst_20628 = cljs.core.async.close_BANG_.call(null,inst_20625);
var state_20713__$1 = state_20713;
var statearr_20747_20820 = state_20713__$1;
(statearr_20747_20820[(2)] = inst_20628);

(statearr_20747_20820[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (36))){
var inst_20672 = (state_20713[(25)]);
var inst_20676 = cljs.core.chunk_first.call(null,inst_20672);
var inst_20677 = cljs.core.chunk_rest.call(null,inst_20672);
var inst_20678 = cljs.core.count.call(null,inst_20676);
var inst_20653 = inst_20677;
var inst_20654 = inst_20676;
var inst_20655 = inst_20678;
var inst_20656 = (0);
var state_20713__$1 = (function (){var statearr_20748 = state_20713;
(statearr_20748[(20)] = inst_20653);

(statearr_20748[(9)] = inst_20654);

(statearr_20748[(10)] = inst_20656);

(statearr_20748[(21)] = inst_20655);

return statearr_20748;
})();
var statearr_20749_20821 = state_20713__$1;
(statearr_20749_20821[(2)] = null);

(statearr_20749_20821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (41))){
var inst_20672 = (state_20713[(25)]);
var inst_20688 = (state_20713[(2)]);
var inst_20689 = cljs.core.next.call(null,inst_20672);
var inst_20653 = inst_20689;
var inst_20654 = null;
var inst_20655 = (0);
var inst_20656 = (0);
var state_20713__$1 = (function (){var statearr_20750 = state_20713;
(statearr_20750[(20)] = inst_20653);

(statearr_20750[(9)] = inst_20654);

(statearr_20750[(27)] = inst_20688);

(statearr_20750[(10)] = inst_20656);

(statearr_20750[(21)] = inst_20655);

return statearr_20750;
})();
var statearr_20751_20822 = state_20713__$1;
(statearr_20751_20822[(2)] = null);

(statearr_20751_20822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (43))){
var state_20713__$1 = state_20713;
var statearr_20752_20823 = state_20713__$1;
(statearr_20752_20823[(2)] = null);

(statearr_20752_20823[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (29))){
var inst_20697 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20753_20824 = state_20713__$1;
(statearr_20753_20824[(2)] = inst_20697);

(statearr_20753_20824[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (44))){
var inst_20706 = (state_20713[(2)]);
var state_20713__$1 = (function (){var statearr_20754 = state_20713;
(statearr_20754[(28)] = inst_20706);

return statearr_20754;
})();
var statearr_20755_20825 = state_20713__$1;
(statearr_20755_20825[(2)] = null);

(statearr_20755_20825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (6))){
var inst_20645 = (state_20713[(29)]);
var inst_20644 = cljs.core.deref.call(null,cs);
var inst_20645__$1 = cljs.core.keys.call(null,inst_20644);
var inst_20646 = cljs.core.count.call(null,inst_20645__$1);
var inst_20647 = cljs.core.reset_BANG_.call(null,dctr,inst_20646);
var inst_20652 = cljs.core.seq.call(null,inst_20645__$1);
var inst_20653 = inst_20652;
var inst_20654 = null;
var inst_20655 = (0);
var inst_20656 = (0);
var state_20713__$1 = (function (){var statearr_20756 = state_20713;
(statearr_20756[(29)] = inst_20645__$1);

(statearr_20756[(20)] = inst_20653);

(statearr_20756[(9)] = inst_20654);

(statearr_20756[(10)] = inst_20656);

(statearr_20756[(30)] = inst_20647);

(statearr_20756[(21)] = inst_20655);

return statearr_20756;
})();
var statearr_20757_20826 = state_20713__$1;
(statearr_20757_20826[(2)] = null);

(statearr_20757_20826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (28))){
var inst_20653 = (state_20713[(20)]);
var inst_20672 = (state_20713[(25)]);
var inst_20672__$1 = cljs.core.seq.call(null,inst_20653);
var state_20713__$1 = (function (){var statearr_20758 = state_20713;
(statearr_20758[(25)] = inst_20672__$1);

return statearr_20758;
})();
if(inst_20672__$1){
var statearr_20759_20827 = state_20713__$1;
(statearr_20759_20827[(1)] = (33));

} else {
var statearr_20760_20828 = state_20713__$1;
(statearr_20760_20828[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (25))){
var inst_20656 = (state_20713[(10)]);
var inst_20655 = (state_20713[(21)]);
var inst_20658 = (inst_20656 < inst_20655);
var inst_20659 = inst_20658;
var state_20713__$1 = state_20713;
if(cljs.core.truth_(inst_20659)){
var statearr_20761_20829 = state_20713__$1;
(statearr_20761_20829[(1)] = (27));

} else {
var statearr_20762_20830 = state_20713__$1;
(statearr_20762_20830[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (34))){
var state_20713__$1 = state_20713;
var statearr_20763_20831 = state_20713__$1;
(statearr_20763_20831[(2)] = null);

(statearr_20763_20831[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (17))){
var state_20713__$1 = state_20713;
var statearr_20764_20832 = state_20713__$1;
(statearr_20764_20832[(2)] = null);

(statearr_20764_20832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (3))){
var inst_20711 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20713__$1,inst_20711);
} else {
if((state_val_20714 === (12))){
var inst_20640 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20765_20833 = state_20713__$1;
(statearr_20765_20833[(2)] = inst_20640);

(statearr_20765_20833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (2))){
var state_20713__$1 = state_20713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20713__$1,(4),ch);
} else {
if((state_val_20714 === (23))){
var state_20713__$1 = state_20713;
var statearr_20766_20834 = state_20713__$1;
(statearr_20766_20834[(2)] = null);

(statearr_20766_20834[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (35))){
var inst_20695 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20767_20835 = state_20713__$1;
(statearr_20767_20835[(2)] = inst_20695);

(statearr_20767_20835[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (19))){
var inst_20614 = (state_20713[(7)]);
var inst_20618 = cljs.core.chunk_first.call(null,inst_20614);
var inst_20619 = cljs.core.chunk_rest.call(null,inst_20614);
var inst_20620 = cljs.core.count.call(null,inst_20618);
var inst_20594 = inst_20619;
var inst_20595 = inst_20618;
var inst_20596 = inst_20620;
var inst_20597 = (0);
var state_20713__$1 = (function (){var statearr_20768 = state_20713;
(statearr_20768[(13)] = inst_20595);

(statearr_20768[(15)] = inst_20596);

(statearr_20768[(16)] = inst_20594);

(statearr_20768[(17)] = inst_20597);

return statearr_20768;
})();
var statearr_20769_20836 = state_20713__$1;
(statearr_20769_20836[(2)] = null);

(statearr_20769_20836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (11))){
var inst_20594 = (state_20713[(16)]);
var inst_20614 = (state_20713[(7)]);
var inst_20614__$1 = cljs.core.seq.call(null,inst_20594);
var state_20713__$1 = (function (){var statearr_20770 = state_20713;
(statearr_20770[(7)] = inst_20614__$1);

return statearr_20770;
})();
if(inst_20614__$1){
var statearr_20771_20837 = state_20713__$1;
(statearr_20771_20837[(1)] = (16));

} else {
var statearr_20772_20838 = state_20713__$1;
(statearr_20772_20838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (9))){
var inst_20642 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20773_20839 = state_20713__$1;
(statearr_20773_20839[(2)] = inst_20642);

(statearr_20773_20839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (5))){
var inst_20592 = cljs.core.deref.call(null,cs);
var inst_20593 = cljs.core.seq.call(null,inst_20592);
var inst_20594 = inst_20593;
var inst_20595 = null;
var inst_20596 = (0);
var inst_20597 = (0);
var state_20713__$1 = (function (){var statearr_20774 = state_20713;
(statearr_20774[(13)] = inst_20595);

(statearr_20774[(15)] = inst_20596);

(statearr_20774[(16)] = inst_20594);

(statearr_20774[(17)] = inst_20597);

return statearr_20774;
})();
var statearr_20775_20840 = state_20713__$1;
(statearr_20775_20840[(2)] = null);

(statearr_20775_20840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (14))){
var state_20713__$1 = state_20713;
var statearr_20776_20841 = state_20713__$1;
(statearr_20776_20841[(2)] = null);

(statearr_20776_20841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (45))){
var inst_20703 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20777_20842 = state_20713__$1;
(statearr_20777_20842[(2)] = inst_20703);

(statearr_20777_20842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (26))){
var inst_20645 = (state_20713[(29)]);
var inst_20699 = (state_20713[(2)]);
var inst_20700 = cljs.core.seq.call(null,inst_20645);
var state_20713__$1 = (function (){var statearr_20778 = state_20713;
(statearr_20778[(31)] = inst_20699);

return statearr_20778;
})();
if(inst_20700){
var statearr_20779_20843 = state_20713__$1;
(statearr_20779_20843[(1)] = (42));

} else {
var statearr_20780_20844 = state_20713__$1;
(statearr_20780_20844[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (16))){
var inst_20614 = (state_20713[(7)]);
var inst_20616 = cljs.core.chunked_seq_QMARK_.call(null,inst_20614);
var state_20713__$1 = state_20713;
if(inst_20616){
var statearr_20781_20845 = state_20713__$1;
(statearr_20781_20845[(1)] = (19));

} else {
var statearr_20782_20846 = state_20713__$1;
(statearr_20782_20846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (38))){
var inst_20692 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20783_20847 = state_20713__$1;
(statearr_20783_20847[(2)] = inst_20692);

(statearr_20783_20847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (30))){
var state_20713__$1 = state_20713;
var statearr_20784_20848 = state_20713__$1;
(statearr_20784_20848[(2)] = null);

(statearr_20784_20848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (10))){
var inst_20595 = (state_20713[(13)]);
var inst_20597 = (state_20713[(17)]);
var inst_20603 = cljs.core._nth.call(null,inst_20595,inst_20597);
var inst_20604 = cljs.core.nth.call(null,inst_20603,(0),null);
var inst_20605 = cljs.core.nth.call(null,inst_20603,(1),null);
var state_20713__$1 = (function (){var statearr_20785 = state_20713;
(statearr_20785[(26)] = inst_20604);

return statearr_20785;
})();
if(cljs.core.truth_(inst_20605)){
var statearr_20786_20849 = state_20713__$1;
(statearr_20786_20849[(1)] = (13));

} else {
var statearr_20787_20850 = state_20713__$1;
(statearr_20787_20850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (18))){
var inst_20638 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20788_20851 = state_20713__$1;
(statearr_20788_20851[(2)] = inst_20638);

(statearr_20788_20851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (42))){
var state_20713__$1 = state_20713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20713__$1,(45),dchan);
} else {
if((state_val_20714 === (37))){
var inst_20681 = (state_20713[(23)]);
var inst_20672 = (state_20713[(25)]);
var inst_20585 = (state_20713[(12)]);
var inst_20681__$1 = cljs.core.first.call(null,inst_20672);
var inst_20682 = cljs.core.async.put_BANG_.call(null,inst_20681__$1,inst_20585,done);
var state_20713__$1 = (function (){var statearr_20789 = state_20713;
(statearr_20789[(23)] = inst_20681__$1);

return statearr_20789;
})();
if(cljs.core.truth_(inst_20682)){
var statearr_20790_20852 = state_20713__$1;
(statearr_20790_20852[(1)] = (39));

} else {
var statearr_20791_20853 = state_20713__$1;
(statearr_20791_20853[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (8))){
var inst_20596 = (state_20713[(15)]);
var inst_20597 = (state_20713[(17)]);
var inst_20599 = (inst_20597 < inst_20596);
var inst_20600 = inst_20599;
var state_20713__$1 = state_20713;
if(cljs.core.truth_(inst_20600)){
var statearr_20792_20854 = state_20713__$1;
(statearr_20792_20854[(1)] = (10));

} else {
var statearr_20793_20855 = state_20713__$1;
(statearr_20793_20855[(1)] = (11));

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
});})(c__19494__auto___20801,cs,m,dchan,dctr,done))
;
return ((function (switch__19382__auto__,c__19494__auto___20801,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19383__auto__ = null;
var cljs$core$async$mult_$_state_machine__19383__auto____0 = (function (){
var statearr_20797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20797[(0)] = cljs$core$async$mult_$_state_machine__19383__auto__);

(statearr_20797[(1)] = (1));

return statearr_20797;
});
var cljs$core$async$mult_$_state_machine__19383__auto____1 = (function (state_20713){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_20713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e20798){if((e20798 instanceof Object)){
var ex__19386__auto__ = e20798;
var statearr_20799_20856 = state_20713;
(statearr_20799_20856[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20857 = state_20713;
state_20713 = G__20857;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19383__auto__ = function(state_20713){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19383__auto____1.call(this,state_20713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19383__auto____0;
cljs$core$async$mult_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19383__auto____1;
return cljs$core$async$mult_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___20801,cs,m,dchan,dctr,done))
})();
var state__19496__auto__ = (function (){var statearr_20800 = f__19495__auto__.call(null);
(statearr_20800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___20801);

return statearr_20800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___20801,cs,m,dchan,dctr,done))
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
var args20858 = [];
var len__17924__auto___20861 = arguments.length;
var i__17925__auto___20862 = (0);
while(true){
if((i__17925__auto___20862 < len__17924__auto___20861)){
args20858.push((arguments[i__17925__auto___20862]));

var G__20863 = (i__17925__auto___20862 + (1));
i__17925__auto___20862 = G__20863;
continue;
} else {
}
break;
}

var G__20860 = args20858.length;
switch (G__20860) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20858.length)].join('')));

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
var x__17521__auto__ = (((m == null))?null:m);
var m__17522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,m,ch);
} else {
var m__17522__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,m,ch);
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
var x__17521__auto__ = (((m == null))?null:m);
var m__17522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,m,ch);
} else {
var m__17522__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,m,ch);
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
var x__17521__auto__ = (((m == null))?null:m);
var m__17522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,m);
} else {
var m__17522__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,m);
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
var x__17521__auto__ = (((m == null))?null:m);
var m__17522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,m,state_map);
} else {
var m__17522__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,m,state_map);
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
var x__17521__auto__ = (((m == null))?null:m);
var m__17522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,m,mode);
} else {
var m__17522__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17931__auto__ = [];
var len__17924__auto___20875 = arguments.length;
var i__17925__auto___20876 = (0);
while(true){
if((i__17925__auto___20876 < len__17924__auto___20875)){
args__17931__auto__.push((arguments[i__17925__auto___20876]));

var G__20877 = (i__17925__auto___20876 + (1));
i__17925__auto___20876 = G__20877;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((3) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17932__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20869){
var map__20870 = p__20869;
var map__20870__$1 = ((((!((map__20870 == null)))?((((map__20870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20870):map__20870);
var opts = map__20870__$1;
var statearr_20872_20878 = state;
(statearr_20872_20878[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20870,map__20870__$1,opts){
return (function (val){
var statearr_20873_20879 = state;
(statearr_20873_20879[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20870,map__20870__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20874_20880 = state;
(statearr_20874_20880[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20865){
var G__20866 = cljs.core.first.call(null,seq20865);
var seq20865__$1 = cljs.core.next.call(null,seq20865);
var G__20867 = cljs.core.first.call(null,seq20865__$1);
var seq20865__$2 = cljs.core.next.call(null,seq20865__$1);
var G__20868 = cljs.core.first.call(null,seq20865__$2);
var seq20865__$3 = cljs.core.next.call(null,seq20865__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20866,G__20867,G__20868,seq20865__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21044 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21045){
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
this.meta21045 = meta21045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21046,meta21045__$1){
var self__ = this;
var _21046__$1 = this;
return (new cljs.core.async.t_cljs$core$async21044(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21045__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21046){
var self__ = this;
var _21046__$1 = this;
return self__.meta21045;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21044.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21044.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21045","meta21045",1545690698,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21044";

cljs.core.async.t_cljs$core$async21044.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async21044");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21044 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21044(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21045){
return (new cljs.core.async.t_cljs$core$async21044(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21045));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21044(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19494__auto___21207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___21207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___21207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21144){
var state_val_21145 = (state_21144[(1)]);
if((state_val_21145 === (7))){
var inst_21062 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
var statearr_21146_21208 = state_21144__$1;
(statearr_21146_21208[(2)] = inst_21062);

(statearr_21146_21208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (20))){
var inst_21074 = (state_21144[(7)]);
var state_21144__$1 = state_21144;
var statearr_21147_21209 = state_21144__$1;
(statearr_21147_21209[(2)] = inst_21074);

(statearr_21147_21209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (27))){
var state_21144__$1 = state_21144;
var statearr_21148_21210 = state_21144__$1;
(statearr_21148_21210[(2)] = null);

(statearr_21148_21210[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (1))){
var inst_21050 = (state_21144[(8)]);
var inst_21050__$1 = calc_state.call(null);
var inst_21052 = (inst_21050__$1 == null);
var inst_21053 = cljs.core.not.call(null,inst_21052);
var state_21144__$1 = (function (){var statearr_21149 = state_21144;
(statearr_21149[(8)] = inst_21050__$1);

return statearr_21149;
})();
if(inst_21053){
var statearr_21150_21211 = state_21144__$1;
(statearr_21150_21211[(1)] = (2));

} else {
var statearr_21151_21212 = state_21144__$1;
(statearr_21151_21212[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (24))){
var inst_21118 = (state_21144[(9)]);
var inst_21097 = (state_21144[(10)]);
var inst_21104 = (state_21144[(11)]);
var inst_21118__$1 = inst_21097.call(null,inst_21104);
var state_21144__$1 = (function (){var statearr_21152 = state_21144;
(statearr_21152[(9)] = inst_21118__$1);

return statearr_21152;
})();
if(cljs.core.truth_(inst_21118__$1)){
var statearr_21153_21213 = state_21144__$1;
(statearr_21153_21213[(1)] = (29));

} else {
var statearr_21154_21214 = state_21144__$1;
(statearr_21154_21214[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (4))){
var inst_21065 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
if(cljs.core.truth_(inst_21065)){
var statearr_21155_21215 = state_21144__$1;
(statearr_21155_21215[(1)] = (8));

} else {
var statearr_21156_21216 = state_21144__$1;
(statearr_21156_21216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (15))){
var inst_21091 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
if(cljs.core.truth_(inst_21091)){
var statearr_21157_21217 = state_21144__$1;
(statearr_21157_21217[(1)] = (19));

} else {
var statearr_21158_21218 = state_21144__$1;
(statearr_21158_21218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (21))){
var inst_21096 = (state_21144[(12)]);
var inst_21096__$1 = (state_21144[(2)]);
var inst_21097 = cljs.core.get.call(null,inst_21096__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21098 = cljs.core.get.call(null,inst_21096__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21099 = cljs.core.get.call(null,inst_21096__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21144__$1 = (function (){var statearr_21159 = state_21144;
(statearr_21159[(12)] = inst_21096__$1);

(statearr_21159[(13)] = inst_21098);

(statearr_21159[(10)] = inst_21097);

return statearr_21159;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21144__$1,(22),inst_21099);
} else {
if((state_val_21145 === (31))){
var inst_21126 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
if(cljs.core.truth_(inst_21126)){
var statearr_21160_21219 = state_21144__$1;
(statearr_21160_21219[(1)] = (32));

} else {
var statearr_21161_21220 = state_21144__$1;
(statearr_21161_21220[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (32))){
var inst_21103 = (state_21144[(14)]);
var state_21144__$1 = state_21144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21144__$1,(35),out,inst_21103);
} else {
if((state_val_21145 === (33))){
var inst_21096 = (state_21144[(12)]);
var inst_21074 = inst_21096;
var state_21144__$1 = (function (){var statearr_21162 = state_21144;
(statearr_21162[(7)] = inst_21074);

return statearr_21162;
})();
var statearr_21163_21221 = state_21144__$1;
(statearr_21163_21221[(2)] = null);

(statearr_21163_21221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (13))){
var inst_21074 = (state_21144[(7)]);
var inst_21081 = inst_21074.cljs$lang$protocol_mask$partition0$;
var inst_21082 = (inst_21081 & (64));
var inst_21083 = inst_21074.cljs$core$ISeq$;
var inst_21084 = (inst_21082) || (inst_21083);
var state_21144__$1 = state_21144;
if(cljs.core.truth_(inst_21084)){
var statearr_21164_21222 = state_21144__$1;
(statearr_21164_21222[(1)] = (16));

} else {
var statearr_21165_21223 = state_21144__$1;
(statearr_21165_21223[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (22))){
var inst_21103 = (state_21144[(14)]);
var inst_21104 = (state_21144[(11)]);
var inst_21102 = (state_21144[(2)]);
var inst_21103__$1 = cljs.core.nth.call(null,inst_21102,(0),null);
var inst_21104__$1 = cljs.core.nth.call(null,inst_21102,(1),null);
var inst_21105 = (inst_21103__$1 == null);
var inst_21106 = cljs.core._EQ_.call(null,inst_21104__$1,change);
var inst_21107 = (inst_21105) || (inst_21106);
var state_21144__$1 = (function (){var statearr_21166 = state_21144;
(statearr_21166[(14)] = inst_21103__$1);

(statearr_21166[(11)] = inst_21104__$1);

return statearr_21166;
})();
if(cljs.core.truth_(inst_21107)){
var statearr_21167_21224 = state_21144__$1;
(statearr_21167_21224[(1)] = (23));

} else {
var statearr_21168_21225 = state_21144__$1;
(statearr_21168_21225[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (36))){
var inst_21096 = (state_21144[(12)]);
var inst_21074 = inst_21096;
var state_21144__$1 = (function (){var statearr_21169 = state_21144;
(statearr_21169[(7)] = inst_21074);

return statearr_21169;
})();
var statearr_21170_21226 = state_21144__$1;
(statearr_21170_21226[(2)] = null);

(statearr_21170_21226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (29))){
var inst_21118 = (state_21144[(9)]);
var state_21144__$1 = state_21144;
var statearr_21171_21227 = state_21144__$1;
(statearr_21171_21227[(2)] = inst_21118);

(statearr_21171_21227[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (6))){
var state_21144__$1 = state_21144;
var statearr_21172_21228 = state_21144__$1;
(statearr_21172_21228[(2)] = false);

(statearr_21172_21228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (28))){
var inst_21114 = (state_21144[(2)]);
var inst_21115 = calc_state.call(null);
var inst_21074 = inst_21115;
var state_21144__$1 = (function (){var statearr_21173 = state_21144;
(statearr_21173[(7)] = inst_21074);

(statearr_21173[(15)] = inst_21114);

return statearr_21173;
})();
var statearr_21174_21229 = state_21144__$1;
(statearr_21174_21229[(2)] = null);

(statearr_21174_21229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (25))){
var inst_21140 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
var statearr_21175_21230 = state_21144__$1;
(statearr_21175_21230[(2)] = inst_21140);

(statearr_21175_21230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (34))){
var inst_21138 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
var statearr_21176_21231 = state_21144__$1;
(statearr_21176_21231[(2)] = inst_21138);

(statearr_21176_21231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (17))){
var state_21144__$1 = state_21144;
var statearr_21177_21232 = state_21144__$1;
(statearr_21177_21232[(2)] = false);

(statearr_21177_21232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (3))){
var state_21144__$1 = state_21144;
var statearr_21178_21233 = state_21144__$1;
(statearr_21178_21233[(2)] = false);

(statearr_21178_21233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (12))){
var inst_21142 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21144__$1,inst_21142);
} else {
if((state_val_21145 === (2))){
var inst_21050 = (state_21144[(8)]);
var inst_21055 = inst_21050.cljs$lang$protocol_mask$partition0$;
var inst_21056 = (inst_21055 & (64));
var inst_21057 = inst_21050.cljs$core$ISeq$;
var inst_21058 = (inst_21056) || (inst_21057);
var state_21144__$1 = state_21144;
if(cljs.core.truth_(inst_21058)){
var statearr_21179_21234 = state_21144__$1;
(statearr_21179_21234[(1)] = (5));

} else {
var statearr_21180_21235 = state_21144__$1;
(statearr_21180_21235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (23))){
var inst_21103 = (state_21144[(14)]);
var inst_21109 = (inst_21103 == null);
var state_21144__$1 = state_21144;
if(cljs.core.truth_(inst_21109)){
var statearr_21181_21236 = state_21144__$1;
(statearr_21181_21236[(1)] = (26));

} else {
var statearr_21182_21237 = state_21144__$1;
(statearr_21182_21237[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (35))){
var inst_21129 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
if(cljs.core.truth_(inst_21129)){
var statearr_21183_21238 = state_21144__$1;
(statearr_21183_21238[(1)] = (36));

} else {
var statearr_21184_21239 = state_21144__$1;
(statearr_21184_21239[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (19))){
var inst_21074 = (state_21144[(7)]);
var inst_21093 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21074);
var state_21144__$1 = state_21144;
var statearr_21185_21240 = state_21144__$1;
(statearr_21185_21240[(2)] = inst_21093);

(statearr_21185_21240[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (11))){
var inst_21074 = (state_21144[(7)]);
var inst_21078 = (inst_21074 == null);
var inst_21079 = cljs.core.not.call(null,inst_21078);
var state_21144__$1 = state_21144;
if(inst_21079){
var statearr_21186_21241 = state_21144__$1;
(statearr_21186_21241[(1)] = (13));

} else {
var statearr_21187_21242 = state_21144__$1;
(statearr_21187_21242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (9))){
var inst_21050 = (state_21144[(8)]);
var state_21144__$1 = state_21144;
var statearr_21188_21243 = state_21144__$1;
(statearr_21188_21243[(2)] = inst_21050);

(statearr_21188_21243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (5))){
var state_21144__$1 = state_21144;
var statearr_21189_21244 = state_21144__$1;
(statearr_21189_21244[(2)] = true);

(statearr_21189_21244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (14))){
var state_21144__$1 = state_21144;
var statearr_21190_21245 = state_21144__$1;
(statearr_21190_21245[(2)] = false);

(statearr_21190_21245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (26))){
var inst_21104 = (state_21144[(11)]);
var inst_21111 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21104);
var state_21144__$1 = state_21144;
var statearr_21191_21246 = state_21144__$1;
(statearr_21191_21246[(2)] = inst_21111);

(statearr_21191_21246[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (16))){
var state_21144__$1 = state_21144;
var statearr_21192_21247 = state_21144__$1;
(statearr_21192_21247[(2)] = true);

(statearr_21192_21247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (38))){
var inst_21134 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
var statearr_21193_21248 = state_21144__$1;
(statearr_21193_21248[(2)] = inst_21134);

(statearr_21193_21248[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (30))){
var inst_21098 = (state_21144[(13)]);
var inst_21097 = (state_21144[(10)]);
var inst_21104 = (state_21144[(11)]);
var inst_21121 = cljs.core.empty_QMARK_.call(null,inst_21097);
var inst_21122 = inst_21098.call(null,inst_21104);
var inst_21123 = cljs.core.not.call(null,inst_21122);
var inst_21124 = (inst_21121) && (inst_21123);
var state_21144__$1 = state_21144;
var statearr_21194_21249 = state_21144__$1;
(statearr_21194_21249[(2)] = inst_21124);

(statearr_21194_21249[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (10))){
var inst_21050 = (state_21144[(8)]);
var inst_21070 = (state_21144[(2)]);
var inst_21071 = cljs.core.get.call(null,inst_21070,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21072 = cljs.core.get.call(null,inst_21070,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21073 = cljs.core.get.call(null,inst_21070,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21074 = inst_21050;
var state_21144__$1 = (function (){var statearr_21195 = state_21144;
(statearr_21195[(16)] = inst_21073);

(statearr_21195[(7)] = inst_21074);

(statearr_21195[(17)] = inst_21072);

(statearr_21195[(18)] = inst_21071);

return statearr_21195;
})();
var statearr_21196_21250 = state_21144__$1;
(statearr_21196_21250[(2)] = null);

(statearr_21196_21250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (18))){
var inst_21088 = (state_21144[(2)]);
var state_21144__$1 = state_21144;
var statearr_21197_21251 = state_21144__$1;
(statearr_21197_21251[(2)] = inst_21088);

(statearr_21197_21251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (37))){
var state_21144__$1 = state_21144;
var statearr_21198_21252 = state_21144__$1;
(statearr_21198_21252[(2)] = null);

(statearr_21198_21252[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21145 === (8))){
var inst_21050 = (state_21144[(8)]);
var inst_21067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21050);
var state_21144__$1 = state_21144;
var statearr_21199_21253 = state_21144__$1;
(statearr_21199_21253[(2)] = inst_21067);

(statearr_21199_21253[(1)] = (10));


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
});})(c__19494__auto___21207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19382__auto__,c__19494__auto___21207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19383__auto__ = null;
var cljs$core$async$mix_$_state_machine__19383__auto____0 = (function (){
var statearr_21203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21203[(0)] = cljs$core$async$mix_$_state_machine__19383__auto__);

(statearr_21203[(1)] = (1));

return statearr_21203;
});
var cljs$core$async$mix_$_state_machine__19383__auto____1 = (function (state_21144){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_21144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e21204){if((e21204 instanceof Object)){
var ex__19386__auto__ = e21204;
var statearr_21205_21254 = state_21144;
(statearr_21205_21254[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21255 = state_21144;
state_21144 = G__21255;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19383__auto__ = function(state_21144){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19383__auto____1.call(this,state_21144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19383__auto____0;
cljs$core$async$mix_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19383__auto____1;
return cljs$core$async$mix_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___21207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19496__auto__ = (function (){var statearr_21206 = f__19495__auto__.call(null);
(statearr_21206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___21207);

return statearr_21206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___21207,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17521__auto__ = (((p == null))?null:p);
var m__17522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17522__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17521__auto__ = (((p == null))?null:p);
var m__17522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,p,v,ch);
} else {
var m__17522__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21256 = [];
var len__17924__auto___21259 = arguments.length;
var i__17925__auto___21260 = (0);
while(true){
if((i__17925__auto___21260 < len__17924__auto___21259)){
args21256.push((arguments[i__17925__auto___21260]));

var G__21261 = (i__17925__auto___21260 + (1));
i__17925__auto___21260 = G__21261;
continue;
} else {
}
break;
}

var G__21258 = args21256.length;
switch (G__21258) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21256.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17521__auto__ = (((p == null))?null:p);
var m__17522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,p);
} else {
var m__17522__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,p);
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
var x__17521__auto__ = (((p == null))?null:p);
var m__17522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17521__auto__)]);
if(!((m__17522__auto__ == null))){
return m__17522__auto__.call(null,p,v);
} else {
var m__17522__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17522__auto____$1 == null))){
return m__17522__auto____$1.call(null,p,v);
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
var args21264 = [];
var len__17924__auto___21389 = arguments.length;
var i__17925__auto___21390 = (0);
while(true){
if((i__17925__auto___21390 < len__17924__auto___21389)){
args21264.push((arguments[i__17925__auto___21390]));

var G__21391 = (i__17925__auto___21390 + (1));
i__17925__auto___21390 = G__21391;
continue;
} else {
}
break;
}

var G__21266 = args21264.length;
switch (G__21266) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21264.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16866__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16866__auto__,mults){
return (function (p1__21263_SHARP_){
if(cljs.core.truth_(p1__21263_SHARP_.call(null,topic))){
return p1__21263_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21263_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16866__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21267 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21268){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21268 = meta21268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21269,meta21268__$1){
var self__ = this;
var _21269__$1 = this;
return (new cljs.core.async.t_cljs$core$async21267(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21268__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21269){
var self__ = this;
var _21269__$1 = this;
return self__.meta21268;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21267.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21268","meta21268",130165290,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21267";

cljs.core.async.t_cljs$core$async21267.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async21267");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21267 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21268){
return (new cljs.core.async.t_cljs$core$async21267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21268));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21267(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19494__auto___21393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___21393,mults,ensure_mult,p){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___21393,mults,ensure_mult,p){
return (function (state_21341){
var state_val_21342 = (state_21341[(1)]);
if((state_val_21342 === (7))){
var inst_21337 = (state_21341[(2)]);
var state_21341__$1 = state_21341;
var statearr_21343_21394 = state_21341__$1;
(statearr_21343_21394[(2)] = inst_21337);

(statearr_21343_21394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (20))){
var state_21341__$1 = state_21341;
var statearr_21344_21395 = state_21341__$1;
(statearr_21344_21395[(2)] = null);

(statearr_21344_21395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (1))){
var state_21341__$1 = state_21341;
var statearr_21345_21396 = state_21341__$1;
(statearr_21345_21396[(2)] = null);

(statearr_21345_21396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (24))){
var inst_21320 = (state_21341[(7)]);
var inst_21329 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21320);
var state_21341__$1 = state_21341;
var statearr_21346_21397 = state_21341__$1;
(statearr_21346_21397[(2)] = inst_21329);

(statearr_21346_21397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (4))){
var inst_21272 = (state_21341[(8)]);
var inst_21272__$1 = (state_21341[(2)]);
var inst_21273 = (inst_21272__$1 == null);
var state_21341__$1 = (function (){var statearr_21347 = state_21341;
(statearr_21347[(8)] = inst_21272__$1);

return statearr_21347;
})();
if(cljs.core.truth_(inst_21273)){
var statearr_21348_21398 = state_21341__$1;
(statearr_21348_21398[(1)] = (5));

} else {
var statearr_21349_21399 = state_21341__$1;
(statearr_21349_21399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (15))){
var inst_21314 = (state_21341[(2)]);
var state_21341__$1 = state_21341;
var statearr_21350_21400 = state_21341__$1;
(statearr_21350_21400[(2)] = inst_21314);

(statearr_21350_21400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (21))){
var inst_21334 = (state_21341[(2)]);
var state_21341__$1 = (function (){var statearr_21351 = state_21341;
(statearr_21351[(9)] = inst_21334);

return statearr_21351;
})();
var statearr_21352_21401 = state_21341__$1;
(statearr_21352_21401[(2)] = null);

(statearr_21352_21401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (13))){
var inst_21296 = (state_21341[(10)]);
var inst_21298 = cljs.core.chunked_seq_QMARK_.call(null,inst_21296);
var state_21341__$1 = state_21341;
if(inst_21298){
var statearr_21353_21402 = state_21341__$1;
(statearr_21353_21402[(1)] = (16));

} else {
var statearr_21354_21403 = state_21341__$1;
(statearr_21354_21403[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (22))){
var inst_21326 = (state_21341[(2)]);
var state_21341__$1 = state_21341;
if(cljs.core.truth_(inst_21326)){
var statearr_21355_21404 = state_21341__$1;
(statearr_21355_21404[(1)] = (23));

} else {
var statearr_21356_21405 = state_21341__$1;
(statearr_21356_21405[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (6))){
var inst_21320 = (state_21341[(7)]);
var inst_21322 = (state_21341[(11)]);
var inst_21272 = (state_21341[(8)]);
var inst_21320__$1 = topic_fn.call(null,inst_21272);
var inst_21321 = cljs.core.deref.call(null,mults);
var inst_21322__$1 = cljs.core.get.call(null,inst_21321,inst_21320__$1);
var state_21341__$1 = (function (){var statearr_21357 = state_21341;
(statearr_21357[(7)] = inst_21320__$1);

(statearr_21357[(11)] = inst_21322__$1);

return statearr_21357;
})();
if(cljs.core.truth_(inst_21322__$1)){
var statearr_21358_21406 = state_21341__$1;
(statearr_21358_21406[(1)] = (19));

} else {
var statearr_21359_21407 = state_21341__$1;
(statearr_21359_21407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (25))){
var inst_21331 = (state_21341[(2)]);
var state_21341__$1 = state_21341;
var statearr_21360_21408 = state_21341__$1;
(statearr_21360_21408[(2)] = inst_21331);

(statearr_21360_21408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (17))){
var inst_21296 = (state_21341[(10)]);
var inst_21305 = cljs.core.first.call(null,inst_21296);
var inst_21306 = cljs.core.async.muxch_STAR_.call(null,inst_21305);
var inst_21307 = cljs.core.async.close_BANG_.call(null,inst_21306);
var inst_21308 = cljs.core.next.call(null,inst_21296);
var inst_21282 = inst_21308;
var inst_21283 = null;
var inst_21284 = (0);
var inst_21285 = (0);
var state_21341__$1 = (function (){var statearr_21361 = state_21341;
(statearr_21361[(12)] = inst_21307);

(statearr_21361[(13)] = inst_21283);

(statearr_21361[(14)] = inst_21284);

(statearr_21361[(15)] = inst_21282);

(statearr_21361[(16)] = inst_21285);

return statearr_21361;
})();
var statearr_21362_21409 = state_21341__$1;
(statearr_21362_21409[(2)] = null);

(statearr_21362_21409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (3))){
var inst_21339 = (state_21341[(2)]);
var state_21341__$1 = state_21341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21341__$1,inst_21339);
} else {
if((state_val_21342 === (12))){
var inst_21316 = (state_21341[(2)]);
var state_21341__$1 = state_21341;
var statearr_21363_21410 = state_21341__$1;
(statearr_21363_21410[(2)] = inst_21316);

(statearr_21363_21410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (2))){
var state_21341__$1 = state_21341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21341__$1,(4),ch);
} else {
if((state_val_21342 === (23))){
var state_21341__$1 = state_21341;
var statearr_21364_21411 = state_21341__$1;
(statearr_21364_21411[(2)] = null);

(statearr_21364_21411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (19))){
var inst_21322 = (state_21341[(11)]);
var inst_21272 = (state_21341[(8)]);
var inst_21324 = cljs.core.async.muxch_STAR_.call(null,inst_21322);
var state_21341__$1 = state_21341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21341__$1,(22),inst_21324,inst_21272);
} else {
if((state_val_21342 === (11))){
var inst_21282 = (state_21341[(15)]);
var inst_21296 = (state_21341[(10)]);
var inst_21296__$1 = cljs.core.seq.call(null,inst_21282);
var state_21341__$1 = (function (){var statearr_21365 = state_21341;
(statearr_21365[(10)] = inst_21296__$1);

return statearr_21365;
})();
if(inst_21296__$1){
var statearr_21366_21412 = state_21341__$1;
(statearr_21366_21412[(1)] = (13));

} else {
var statearr_21367_21413 = state_21341__$1;
(statearr_21367_21413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (9))){
var inst_21318 = (state_21341[(2)]);
var state_21341__$1 = state_21341;
var statearr_21368_21414 = state_21341__$1;
(statearr_21368_21414[(2)] = inst_21318);

(statearr_21368_21414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (5))){
var inst_21279 = cljs.core.deref.call(null,mults);
var inst_21280 = cljs.core.vals.call(null,inst_21279);
var inst_21281 = cljs.core.seq.call(null,inst_21280);
var inst_21282 = inst_21281;
var inst_21283 = null;
var inst_21284 = (0);
var inst_21285 = (0);
var state_21341__$1 = (function (){var statearr_21369 = state_21341;
(statearr_21369[(13)] = inst_21283);

(statearr_21369[(14)] = inst_21284);

(statearr_21369[(15)] = inst_21282);

(statearr_21369[(16)] = inst_21285);

return statearr_21369;
})();
var statearr_21370_21415 = state_21341__$1;
(statearr_21370_21415[(2)] = null);

(statearr_21370_21415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (14))){
var state_21341__$1 = state_21341;
var statearr_21374_21416 = state_21341__$1;
(statearr_21374_21416[(2)] = null);

(statearr_21374_21416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (16))){
var inst_21296 = (state_21341[(10)]);
var inst_21300 = cljs.core.chunk_first.call(null,inst_21296);
var inst_21301 = cljs.core.chunk_rest.call(null,inst_21296);
var inst_21302 = cljs.core.count.call(null,inst_21300);
var inst_21282 = inst_21301;
var inst_21283 = inst_21300;
var inst_21284 = inst_21302;
var inst_21285 = (0);
var state_21341__$1 = (function (){var statearr_21375 = state_21341;
(statearr_21375[(13)] = inst_21283);

(statearr_21375[(14)] = inst_21284);

(statearr_21375[(15)] = inst_21282);

(statearr_21375[(16)] = inst_21285);

return statearr_21375;
})();
var statearr_21376_21417 = state_21341__$1;
(statearr_21376_21417[(2)] = null);

(statearr_21376_21417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (10))){
var inst_21283 = (state_21341[(13)]);
var inst_21284 = (state_21341[(14)]);
var inst_21282 = (state_21341[(15)]);
var inst_21285 = (state_21341[(16)]);
var inst_21290 = cljs.core._nth.call(null,inst_21283,inst_21285);
var inst_21291 = cljs.core.async.muxch_STAR_.call(null,inst_21290);
var inst_21292 = cljs.core.async.close_BANG_.call(null,inst_21291);
var inst_21293 = (inst_21285 + (1));
var tmp21371 = inst_21283;
var tmp21372 = inst_21284;
var tmp21373 = inst_21282;
var inst_21282__$1 = tmp21373;
var inst_21283__$1 = tmp21371;
var inst_21284__$1 = tmp21372;
var inst_21285__$1 = inst_21293;
var state_21341__$1 = (function (){var statearr_21377 = state_21341;
(statearr_21377[(13)] = inst_21283__$1);

(statearr_21377[(14)] = inst_21284__$1);

(statearr_21377[(15)] = inst_21282__$1);

(statearr_21377[(17)] = inst_21292);

(statearr_21377[(16)] = inst_21285__$1);

return statearr_21377;
})();
var statearr_21378_21418 = state_21341__$1;
(statearr_21378_21418[(2)] = null);

(statearr_21378_21418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (18))){
var inst_21311 = (state_21341[(2)]);
var state_21341__$1 = state_21341;
var statearr_21379_21419 = state_21341__$1;
(statearr_21379_21419[(2)] = inst_21311);

(statearr_21379_21419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21342 === (8))){
var inst_21284 = (state_21341[(14)]);
var inst_21285 = (state_21341[(16)]);
var inst_21287 = (inst_21285 < inst_21284);
var inst_21288 = inst_21287;
var state_21341__$1 = state_21341;
if(cljs.core.truth_(inst_21288)){
var statearr_21380_21420 = state_21341__$1;
(statearr_21380_21420[(1)] = (10));

} else {
var statearr_21381_21421 = state_21341__$1;
(statearr_21381_21421[(1)] = (11));

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
});})(c__19494__auto___21393,mults,ensure_mult,p))
;
return ((function (switch__19382__auto__,c__19494__auto___21393,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_21385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21385[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_21385[(1)] = (1));

return statearr_21385;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_21341){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_21341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e21386){if((e21386 instanceof Object)){
var ex__19386__auto__ = e21386;
var statearr_21387_21422 = state_21341;
(statearr_21387_21422[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21423 = state_21341;
state_21341 = G__21423;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_21341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_21341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___21393,mults,ensure_mult,p))
})();
var state__19496__auto__ = (function (){var statearr_21388 = f__19495__auto__.call(null);
(statearr_21388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___21393);

return statearr_21388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___21393,mults,ensure_mult,p))
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
var args21424 = [];
var len__17924__auto___21427 = arguments.length;
var i__17925__auto___21428 = (0);
while(true){
if((i__17925__auto___21428 < len__17924__auto___21427)){
args21424.push((arguments[i__17925__auto___21428]));

var G__21429 = (i__17925__auto___21428 + (1));
i__17925__auto___21428 = G__21429;
continue;
} else {
}
break;
}

var G__21426 = args21424.length;
switch (G__21426) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21424.length)].join('')));

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
var args21431 = [];
var len__17924__auto___21434 = arguments.length;
var i__17925__auto___21435 = (0);
while(true){
if((i__17925__auto___21435 < len__17924__auto___21434)){
args21431.push((arguments[i__17925__auto___21435]));

var G__21436 = (i__17925__auto___21435 + (1));
i__17925__auto___21435 = G__21436;
continue;
} else {
}
break;
}

var G__21433 = args21431.length;
switch (G__21433) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21431.length)].join('')));

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
var args21438 = [];
var len__17924__auto___21509 = arguments.length;
var i__17925__auto___21510 = (0);
while(true){
if((i__17925__auto___21510 < len__17924__auto___21509)){
args21438.push((arguments[i__17925__auto___21510]));

var G__21511 = (i__17925__auto___21510 + (1));
i__17925__auto___21510 = G__21511;
continue;
} else {
}
break;
}

var G__21440 = args21438.length;
switch (G__21440) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21438.length)].join('')));

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
var c__19494__auto___21513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___21513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___21513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21479){
var state_val_21480 = (state_21479[(1)]);
if((state_val_21480 === (7))){
var state_21479__$1 = state_21479;
var statearr_21481_21514 = state_21479__$1;
(statearr_21481_21514[(2)] = null);

(statearr_21481_21514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (1))){
var state_21479__$1 = state_21479;
var statearr_21482_21515 = state_21479__$1;
(statearr_21482_21515[(2)] = null);

(statearr_21482_21515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (4))){
var inst_21443 = (state_21479[(7)]);
var inst_21445 = (inst_21443 < cnt);
var state_21479__$1 = state_21479;
if(cljs.core.truth_(inst_21445)){
var statearr_21483_21516 = state_21479__$1;
(statearr_21483_21516[(1)] = (6));

} else {
var statearr_21484_21517 = state_21479__$1;
(statearr_21484_21517[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (15))){
var inst_21475 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
var statearr_21485_21518 = state_21479__$1;
(statearr_21485_21518[(2)] = inst_21475);

(statearr_21485_21518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (13))){
var inst_21468 = cljs.core.async.close_BANG_.call(null,out);
var state_21479__$1 = state_21479;
var statearr_21486_21519 = state_21479__$1;
(statearr_21486_21519[(2)] = inst_21468);

(statearr_21486_21519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (6))){
var state_21479__$1 = state_21479;
var statearr_21487_21520 = state_21479__$1;
(statearr_21487_21520[(2)] = null);

(statearr_21487_21520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (3))){
var inst_21477 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21479__$1,inst_21477);
} else {
if((state_val_21480 === (12))){
var inst_21465 = (state_21479[(8)]);
var inst_21465__$1 = (state_21479[(2)]);
var inst_21466 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21465__$1);
var state_21479__$1 = (function (){var statearr_21488 = state_21479;
(statearr_21488[(8)] = inst_21465__$1);

return statearr_21488;
})();
if(cljs.core.truth_(inst_21466)){
var statearr_21489_21521 = state_21479__$1;
(statearr_21489_21521[(1)] = (13));

} else {
var statearr_21490_21522 = state_21479__$1;
(statearr_21490_21522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (2))){
var inst_21442 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21443 = (0);
var state_21479__$1 = (function (){var statearr_21491 = state_21479;
(statearr_21491[(9)] = inst_21442);

(statearr_21491[(7)] = inst_21443);

return statearr_21491;
})();
var statearr_21492_21523 = state_21479__$1;
(statearr_21492_21523[(2)] = null);

(statearr_21492_21523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (11))){
var inst_21443 = (state_21479[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21479,(10),Object,null,(9));
var inst_21452 = chs__$1.call(null,inst_21443);
var inst_21453 = done.call(null,inst_21443);
var inst_21454 = cljs.core.async.take_BANG_.call(null,inst_21452,inst_21453);
var state_21479__$1 = state_21479;
var statearr_21493_21524 = state_21479__$1;
(statearr_21493_21524[(2)] = inst_21454);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21479__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (9))){
var inst_21443 = (state_21479[(7)]);
var inst_21456 = (state_21479[(2)]);
var inst_21457 = (inst_21443 + (1));
var inst_21443__$1 = inst_21457;
var state_21479__$1 = (function (){var statearr_21494 = state_21479;
(statearr_21494[(7)] = inst_21443__$1);

(statearr_21494[(10)] = inst_21456);

return statearr_21494;
})();
var statearr_21495_21525 = state_21479__$1;
(statearr_21495_21525[(2)] = null);

(statearr_21495_21525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (5))){
var inst_21463 = (state_21479[(2)]);
var state_21479__$1 = (function (){var statearr_21496 = state_21479;
(statearr_21496[(11)] = inst_21463);

return statearr_21496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21479__$1,(12),dchan);
} else {
if((state_val_21480 === (14))){
var inst_21465 = (state_21479[(8)]);
var inst_21470 = cljs.core.apply.call(null,f,inst_21465);
var state_21479__$1 = state_21479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21479__$1,(16),out,inst_21470);
} else {
if((state_val_21480 === (16))){
var inst_21472 = (state_21479[(2)]);
var state_21479__$1 = (function (){var statearr_21497 = state_21479;
(statearr_21497[(12)] = inst_21472);

return statearr_21497;
})();
var statearr_21498_21526 = state_21479__$1;
(statearr_21498_21526[(2)] = null);

(statearr_21498_21526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (10))){
var inst_21447 = (state_21479[(2)]);
var inst_21448 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21479__$1 = (function (){var statearr_21499 = state_21479;
(statearr_21499[(13)] = inst_21447);

return statearr_21499;
})();
var statearr_21500_21527 = state_21479__$1;
(statearr_21500_21527[(2)] = inst_21448);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21479__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21480 === (8))){
var inst_21461 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
var statearr_21501_21528 = state_21479__$1;
(statearr_21501_21528[(2)] = inst_21461);

(statearr_21501_21528[(1)] = (5));


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
});})(c__19494__auto___21513,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19382__auto__,c__19494__auto___21513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_21505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21505[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_21505[(1)] = (1));

return statearr_21505;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_21479){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_21479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e21506){if((e21506 instanceof Object)){
var ex__19386__auto__ = e21506;
var statearr_21507_21529 = state_21479;
(statearr_21507_21529[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21530 = state_21479;
state_21479 = G__21530;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_21479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_21479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___21513,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19496__auto__ = (function (){var statearr_21508 = f__19495__auto__.call(null);
(statearr_21508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___21513);

return statearr_21508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___21513,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args21532 = [];
var len__17924__auto___21588 = arguments.length;
var i__17925__auto___21589 = (0);
while(true){
if((i__17925__auto___21589 < len__17924__auto___21588)){
args21532.push((arguments[i__17925__auto___21589]));

var G__21590 = (i__17925__auto___21589 + (1));
i__17925__auto___21589 = G__21590;
continue;
} else {
}
break;
}

var G__21534 = args21532.length;
switch (G__21534) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21532.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19494__auto___21592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___21592,out){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___21592,out){
return (function (state_21564){
var state_val_21565 = (state_21564[(1)]);
if((state_val_21565 === (7))){
var inst_21543 = (state_21564[(7)]);
var inst_21544 = (state_21564[(8)]);
var inst_21543__$1 = (state_21564[(2)]);
var inst_21544__$1 = cljs.core.nth.call(null,inst_21543__$1,(0),null);
var inst_21545 = cljs.core.nth.call(null,inst_21543__$1,(1),null);
var inst_21546 = (inst_21544__$1 == null);
var state_21564__$1 = (function (){var statearr_21566 = state_21564;
(statearr_21566[(7)] = inst_21543__$1);

(statearr_21566[(9)] = inst_21545);

(statearr_21566[(8)] = inst_21544__$1);

return statearr_21566;
})();
if(cljs.core.truth_(inst_21546)){
var statearr_21567_21593 = state_21564__$1;
(statearr_21567_21593[(1)] = (8));

} else {
var statearr_21568_21594 = state_21564__$1;
(statearr_21568_21594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (1))){
var inst_21535 = cljs.core.vec.call(null,chs);
var inst_21536 = inst_21535;
var state_21564__$1 = (function (){var statearr_21569 = state_21564;
(statearr_21569[(10)] = inst_21536);

return statearr_21569;
})();
var statearr_21570_21595 = state_21564__$1;
(statearr_21570_21595[(2)] = null);

(statearr_21570_21595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (4))){
var inst_21536 = (state_21564[(10)]);
var state_21564__$1 = state_21564;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21564__$1,(7),inst_21536);
} else {
if((state_val_21565 === (6))){
var inst_21560 = (state_21564[(2)]);
var state_21564__$1 = state_21564;
var statearr_21571_21596 = state_21564__$1;
(statearr_21571_21596[(2)] = inst_21560);

(statearr_21571_21596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (3))){
var inst_21562 = (state_21564[(2)]);
var state_21564__$1 = state_21564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21564__$1,inst_21562);
} else {
if((state_val_21565 === (2))){
var inst_21536 = (state_21564[(10)]);
var inst_21538 = cljs.core.count.call(null,inst_21536);
var inst_21539 = (inst_21538 > (0));
var state_21564__$1 = state_21564;
if(cljs.core.truth_(inst_21539)){
var statearr_21573_21597 = state_21564__$1;
(statearr_21573_21597[(1)] = (4));

} else {
var statearr_21574_21598 = state_21564__$1;
(statearr_21574_21598[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (11))){
var inst_21536 = (state_21564[(10)]);
var inst_21553 = (state_21564[(2)]);
var tmp21572 = inst_21536;
var inst_21536__$1 = tmp21572;
var state_21564__$1 = (function (){var statearr_21575 = state_21564;
(statearr_21575[(10)] = inst_21536__$1);

(statearr_21575[(11)] = inst_21553);

return statearr_21575;
})();
var statearr_21576_21599 = state_21564__$1;
(statearr_21576_21599[(2)] = null);

(statearr_21576_21599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (9))){
var inst_21544 = (state_21564[(8)]);
var state_21564__$1 = state_21564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21564__$1,(11),out,inst_21544);
} else {
if((state_val_21565 === (5))){
var inst_21558 = cljs.core.async.close_BANG_.call(null,out);
var state_21564__$1 = state_21564;
var statearr_21577_21600 = state_21564__$1;
(statearr_21577_21600[(2)] = inst_21558);

(statearr_21577_21600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (10))){
var inst_21556 = (state_21564[(2)]);
var state_21564__$1 = state_21564;
var statearr_21578_21601 = state_21564__$1;
(statearr_21578_21601[(2)] = inst_21556);

(statearr_21578_21601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21565 === (8))){
var inst_21543 = (state_21564[(7)]);
var inst_21545 = (state_21564[(9)]);
var inst_21536 = (state_21564[(10)]);
var inst_21544 = (state_21564[(8)]);
var inst_21548 = (function (){var cs = inst_21536;
var vec__21541 = inst_21543;
var v = inst_21544;
var c = inst_21545;
return ((function (cs,vec__21541,v,c,inst_21543,inst_21545,inst_21536,inst_21544,state_val_21565,c__19494__auto___21592,out){
return (function (p1__21531_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21531_SHARP_);
});
;})(cs,vec__21541,v,c,inst_21543,inst_21545,inst_21536,inst_21544,state_val_21565,c__19494__auto___21592,out))
})();
var inst_21549 = cljs.core.filterv.call(null,inst_21548,inst_21536);
var inst_21536__$1 = inst_21549;
var state_21564__$1 = (function (){var statearr_21579 = state_21564;
(statearr_21579[(10)] = inst_21536__$1);

return statearr_21579;
})();
var statearr_21580_21602 = state_21564__$1;
(statearr_21580_21602[(2)] = null);

(statearr_21580_21602[(1)] = (2));


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
});})(c__19494__auto___21592,out))
;
return ((function (switch__19382__auto__,c__19494__auto___21592,out){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_21584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21584[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_21584[(1)] = (1));

return statearr_21584;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_21564){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_21564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e21585){if((e21585 instanceof Object)){
var ex__19386__auto__ = e21585;
var statearr_21586_21603 = state_21564;
(statearr_21586_21603[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21604 = state_21564;
state_21564 = G__21604;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_21564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_21564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___21592,out))
})();
var state__19496__auto__ = (function (){var statearr_21587 = f__19495__auto__.call(null);
(statearr_21587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___21592);

return statearr_21587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___21592,out))
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
var args21605 = [];
var len__17924__auto___21654 = arguments.length;
var i__17925__auto___21655 = (0);
while(true){
if((i__17925__auto___21655 < len__17924__auto___21654)){
args21605.push((arguments[i__17925__auto___21655]));

var G__21656 = (i__17925__auto___21655 + (1));
i__17925__auto___21655 = G__21656;
continue;
} else {
}
break;
}

var G__21607 = args21605.length;
switch (G__21607) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21605.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19494__auto___21658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___21658,out){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___21658,out){
return (function (state_21631){
var state_val_21632 = (state_21631[(1)]);
if((state_val_21632 === (7))){
var inst_21613 = (state_21631[(7)]);
var inst_21613__$1 = (state_21631[(2)]);
var inst_21614 = (inst_21613__$1 == null);
var inst_21615 = cljs.core.not.call(null,inst_21614);
var state_21631__$1 = (function (){var statearr_21633 = state_21631;
(statearr_21633[(7)] = inst_21613__$1);

return statearr_21633;
})();
if(inst_21615){
var statearr_21634_21659 = state_21631__$1;
(statearr_21634_21659[(1)] = (8));

} else {
var statearr_21635_21660 = state_21631__$1;
(statearr_21635_21660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21632 === (1))){
var inst_21608 = (0);
var state_21631__$1 = (function (){var statearr_21636 = state_21631;
(statearr_21636[(8)] = inst_21608);

return statearr_21636;
})();
var statearr_21637_21661 = state_21631__$1;
(statearr_21637_21661[(2)] = null);

(statearr_21637_21661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21632 === (4))){
var state_21631__$1 = state_21631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21631__$1,(7),ch);
} else {
if((state_val_21632 === (6))){
var inst_21626 = (state_21631[(2)]);
var state_21631__$1 = state_21631;
var statearr_21638_21662 = state_21631__$1;
(statearr_21638_21662[(2)] = inst_21626);

(statearr_21638_21662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21632 === (3))){
var inst_21628 = (state_21631[(2)]);
var inst_21629 = cljs.core.async.close_BANG_.call(null,out);
var state_21631__$1 = (function (){var statearr_21639 = state_21631;
(statearr_21639[(9)] = inst_21628);

return statearr_21639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21631__$1,inst_21629);
} else {
if((state_val_21632 === (2))){
var inst_21608 = (state_21631[(8)]);
var inst_21610 = (inst_21608 < n);
var state_21631__$1 = state_21631;
if(cljs.core.truth_(inst_21610)){
var statearr_21640_21663 = state_21631__$1;
(statearr_21640_21663[(1)] = (4));

} else {
var statearr_21641_21664 = state_21631__$1;
(statearr_21641_21664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21632 === (11))){
var inst_21608 = (state_21631[(8)]);
var inst_21618 = (state_21631[(2)]);
var inst_21619 = (inst_21608 + (1));
var inst_21608__$1 = inst_21619;
var state_21631__$1 = (function (){var statearr_21642 = state_21631;
(statearr_21642[(10)] = inst_21618);

(statearr_21642[(8)] = inst_21608__$1);

return statearr_21642;
})();
var statearr_21643_21665 = state_21631__$1;
(statearr_21643_21665[(2)] = null);

(statearr_21643_21665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21632 === (9))){
var state_21631__$1 = state_21631;
var statearr_21644_21666 = state_21631__$1;
(statearr_21644_21666[(2)] = null);

(statearr_21644_21666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21632 === (5))){
var state_21631__$1 = state_21631;
var statearr_21645_21667 = state_21631__$1;
(statearr_21645_21667[(2)] = null);

(statearr_21645_21667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21632 === (10))){
var inst_21623 = (state_21631[(2)]);
var state_21631__$1 = state_21631;
var statearr_21646_21668 = state_21631__$1;
(statearr_21646_21668[(2)] = inst_21623);

(statearr_21646_21668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21632 === (8))){
var inst_21613 = (state_21631[(7)]);
var state_21631__$1 = state_21631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21631__$1,(11),out,inst_21613);
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
});})(c__19494__auto___21658,out))
;
return ((function (switch__19382__auto__,c__19494__auto___21658,out){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_21650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21650[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_21650[(1)] = (1));

return statearr_21650;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_21631){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_21631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e21651){if((e21651 instanceof Object)){
var ex__19386__auto__ = e21651;
var statearr_21652_21669 = state_21631;
(statearr_21652_21669[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21670 = state_21631;
state_21631 = G__21670;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_21631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_21631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___21658,out))
})();
var state__19496__auto__ = (function (){var statearr_21653 = f__19495__auto__.call(null);
(statearr_21653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___21658);

return statearr_21653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___21658,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21678 = (function (map_LT_,f,ch,meta21679){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21679 = meta21679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21680,meta21679__$1){
var self__ = this;
var _21680__$1 = this;
return (new cljs.core.async.t_cljs$core$async21678(self__.map_LT_,self__.f,self__.ch,meta21679__$1));
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21680){
var self__ = this;
var _21680__$1 = this;
return self__.meta21679;
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21681 = (function (map_LT_,f,ch,meta21679,_,fn1,meta21682){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21679 = meta21679;
this._ = _;
this.fn1 = fn1;
this.meta21682 = meta21682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21683,meta21682__$1){
var self__ = this;
var _21683__$1 = this;
return (new cljs.core.async.t_cljs$core$async21681(self__.map_LT_,self__.f,self__.ch,self__.meta21679,self__._,self__.fn1,meta21682__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21683){
var self__ = this;
var _21683__$1 = this;
return self__.meta21682;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21681.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21671_SHARP_){
return f1.call(null,(((p1__21671_SHARP_ == null))?null:self__.f.call(null,p1__21671_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21681.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21679","meta21679",1474553362,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21678","cljs.core.async/t_cljs$core$async21678",726377347,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21682","meta21682",2061571336,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21681";

cljs.core.async.t_cljs$core$async21681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async21681");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21681 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21681(map_LT___$1,f__$1,ch__$1,meta21679__$1,___$2,fn1__$1,meta21682){
return (new cljs.core.async.t_cljs$core$async21681(map_LT___$1,f__$1,ch__$1,meta21679__$1,___$2,fn1__$1,meta21682));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21681(self__.map_LT_,self__.f,self__.ch,self__.meta21679,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16854__auto__ = ret;
if(cljs.core.truth_(and__16854__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16854__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21679","meta21679",1474553362,null)], null);
});

cljs.core.async.t_cljs$core$async21678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21678";

cljs.core.async.t_cljs$core$async21678.cljs$lang$ctorPrWriter = (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async21678");
});

cljs.core.async.__GT_t_cljs$core$async21678 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21678(map_LT___$1,f__$1,ch__$1,meta21679){
return (new cljs.core.async.t_cljs$core$async21678(map_LT___$1,f__$1,ch__$1,meta21679));
});

}

return (new cljs.core.async.t_cljs$core$async21678(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21687 = (function (map_GT_,f,ch,meta21688){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21688 = meta21688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21689,meta21688__$1){
var self__ = this;
var _21689__$1 = this;
return (new cljs.core.async.t_cljs$core$async21687(self__.map_GT_,self__.f,self__.ch,meta21688__$1));
});

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21689){
var self__ = this;
var _21689__$1 = this;
return self__.meta21688;
});

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21688","meta21688",587019540,null)], null);
});

cljs.core.async.t_cljs$core$async21687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21687";

cljs.core.async.t_cljs$core$async21687.cljs$lang$ctorPrWriter = (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async21687");
});

cljs.core.async.__GT_t_cljs$core$async21687 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21687(map_GT___$1,f__$1,ch__$1,meta21688){
return (new cljs.core.async.t_cljs$core$async21687(map_GT___$1,f__$1,ch__$1,meta21688));
});

}

return (new cljs.core.async.t_cljs$core$async21687(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21693 = (function (filter_GT_,p,ch,meta21694){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21694 = meta21694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21695,meta21694__$1){
var self__ = this;
var _21695__$1 = this;
return (new cljs.core.async.t_cljs$core$async21693(self__.filter_GT_,self__.p,self__.ch,meta21694__$1));
});

cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21695){
var self__ = this;
var _21695__$1 = this;
return self__.meta21694;
});

cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21694","meta21694",-1109003406,null)], null);
});

cljs.core.async.t_cljs$core$async21693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21693";

cljs.core.async.t_cljs$core$async21693.cljs$lang$ctorPrWriter = (function (this__17464__auto__,writer__17465__auto__,opt__17466__auto__){
return cljs.core._write.call(null,writer__17465__auto__,"cljs.core.async/t_cljs$core$async21693");
});

cljs.core.async.__GT_t_cljs$core$async21693 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21693(filter_GT___$1,p__$1,ch__$1,meta21694){
return (new cljs.core.async.t_cljs$core$async21693(filter_GT___$1,p__$1,ch__$1,meta21694));
});

}

return (new cljs.core.async.t_cljs$core$async21693(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args21696 = [];
var len__17924__auto___21740 = arguments.length;
var i__17925__auto___21741 = (0);
while(true){
if((i__17925__auto___21741 < len__17924__auto___21740)){
args21696.push((arguments[i__17925__auto___21741]));

var G__21742 = (i__17925__auto___21741 + (1));
i__17925__auto___21741 = G__21742;
continue;
} else {
}
break;
}

var G__21698 = args21696.length;
switch (G__21698) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21696.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19494__auto___21744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___21744,out){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___21744,out){
return (function (state_21719){
var state_val_21720 = (state_21719[(1)]);
if((state_val_21720 === (7))){
var inst_21715 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
var statearr_21721_21745 = state_21719__$1;
(statearr_21721_21745[(2)] = inst_21715);

(statearr_21721_21745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (1))){
var state_21719__$1 = state_21719;
var statearr_21722_21746 = state_21719__$1;
(statearr_21722_21746[(2)] = null);

(statearr_21722_21746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (4))){
var inst_21701 = (state_21719[(7)]);
var inst_21701__$1 = (state_21719[(2)]);
var inst_21702 = (inst_21701__$1 == null);
var state_21719__$1 = (function (){var statearr_21723 = state_21719;
(statearr_21723[(7)] = inst_21701__$1);

return statearr_21723;
})();
if(cljs.core.truth_(inst_21702)){
var statearr_21724_21747 = state_21719__$1;
(statearr_21724_21747[(1)] = (5));

} else {
var statearr_21725_21748 = state_21719__$1;
(statearr_21725_21748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (6))){
var inst_21701 = (state_21719[(7)]);
var inst_21706 = p.call(null,inst_21701);
var state_21719__$1 = state_21719;
if(cljs.core.truth_(inst_21706)){
var statearr_21726_21749 = state_21719__$1;
(statearr_21726_21749[(1)] = (8));

} else {
var statearr_21727_21750 = state_21719__$1;
(statearr_21727_21750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (3))){
var inst_21717 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21719__$1,inst_21717);
} else {
if((state_val_21720 === (2))){
var state_21719__$1 = state_21719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21719__$1,(4),ch);
} else {
if((state_val_21720 === (11))){
var inst_21709 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
var statearr_21728_21751 = state_21719__$1;
(statearr_21728_21751[(2)] = inst_21709);

(statearr_21728_21751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (9))){
var state_21719__$1 = state_21719;
var statearr_21729_21752 = state_21719__$1;
(statearr_21729_21752[(2)] = null);

(statearr_21729_21752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (5))){
var inst_21704 = cljs.core.async.close_BANG_.call(null,out);
var state_21719__$1 = state_21719;
var statearr_21730_21753 = state_21719__$1;
(statearr_21730_21753[(2)] = inst_21704);

(statearr_21730_21753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (10))){
var inst_21712 = (state_21719[(2)]);
var state_21719__$1 = (function (){var statearr_21731 = state_21719;
(statearr_21731[(8)] = inst_21712);

return statearr_21731;
})();
var statearr_21732_21754 = state_21719__$1;
(statearr_21732_21754[(2)] = null);

(statearr_21732_21754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (8))){
var inst_21701 = (state_21719[(7)]);
var state_21719__$1 = state_21719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21719__$1,(11),out,inst_21701);
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
});})(c__19494__auto___21744,out))
;
return ((function (switch__19382__auto__,c__19494__auto___21744,out){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_21736 = [null,null,null,null,null,null,null,null,null];
(statearr_21736[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_21736[(1)] = (1));

return statearr_21736;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_21719){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_21719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e21737){if((e21737 instanceof Object)){
var ex__19386__auto__ = e21737;
var statearr_21738_21755 = state_21719;
(statearr_21738_21755[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21756 = state_21719;
state_21719 = G__21756;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_21719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_21719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___21744,out))
})();
var state__19496__auto__ = (function (){var statearr_21739 = f__19495__auto__.call(null);
(statearr_21739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___21744);

return statearr_21739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___21744,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21757 = [];
var len__17924__auto___21760 = arguments.length;
var i__17925__auto___21761 = (0);
while(true){
if((i__17925__auto___21761 < len__17924__auto___21760)){
args21757.push((arguments[i__17925__auto___21761]));

var G__21762 = (i__17925__auto___21761 + (1));
i__17925__auto___21761 = G__21762;
continue;
} else {
}
break;
}

var G__21759 = args21757.length;
switch (G__21759) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21757.length)].join('')));

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
var c__19494__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto__){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto__){
return (function (state_21929){
var state_val_21930 = (state_21929[(1)]);
if((state_val_21930 === (7))){
var inst_21925 = (state_21929[(2)]);
var state_21929__$1 = state_21929;
var statearr_21931_21972 = state_21929__$1;
(statearr_21931_21972[(2)] = inst_21925);

(statearr_21931_21972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (20))){
var inst_21895 = (state_21929[(7)]);
var inst_21906 = (state_21929[(2)]);
var inst_21907 = cljs.core.next.call(null,inst_21895);
var inst_21881 = inst_21907;
var inst_21882 = null;
var inst_21883 = (0);
var inst_21884 = (0);
var state_21929__$1 = (function (){var statearr_21932 = state_21929;
(statearr_21932[(8)] = inst_21906);

(statearr_21932[(9)] = inst_21882);

(statearr_21932[(10)] = inst_21883);

(statearr_21932[(11)] = inst_21881);

(statearr_21932[(12)] = inst_21884);

return statearr_21932;
})();
var statearr_21933_21973 = state_21929__$1;
(statearr_21933_21973[(2)] = null);

(statearr_21933_21973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (1))){
var state_21929__$1 = state_21929;
var statearr_21934_21974 = state_21929__$1;
(statearr_21934_21974[(2)] = null);

(statearr_21934_21974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (4))){
var inst_21870 = (state_21929[(13)]);
var inst_21870__$1 = (state_21929[(2)]);
var inst_21871 = (inst_21870__$1 == null);
var state_21929__$1 = (function (){var statearr_21935 = state_21929;
(statearr_21935[(13)] = inst_21870__$1);

return statearr_21935;
})();
if(cljs.core.truth_(inst_21871)){
var statearr_21936_21975 = state_21929__$1;
(statearr_21936_21975[(1)] = (5));

} else {
var statearr_21937_21976 = state_21929__$1;
(statearr_21937_21976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (15))){
var state_21929__$1 = state_21929;
var statearr_21941_21977 = state_21929__$1;
(statearr_21941_21977[(2)] = null);

(statearr_21941_21977[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (21))){
var state_21929__$1 = state_21929;
var statearr_21942_21978 = state_21929__$1;
(statearr_21942_21978[(2)] = null);

(statearr_21942_21978[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (13))){
var inst_21882 = (state_21929[(9)]);
var inst_21883 = (state_21929[(10)]);
var inst_21881 = (state_21929[(11)]);
var inst_21884 = (state_21929[(12)]);
var inst_21891 = (state_21929[(2)]);
var inst_21892 = (inst_21884 + (1));
var tmp21938 = inst_21882;
var tmp21939 = inst_21883;
var tmp21940 = inst_21881;
var inst_21881__$1 = tmp21940;
var inst_21882__$1 = tmp21938;
var inst_21883__$1 = tmp21939;
var inst_21884__$1 = inst_21892;
var state_21929__$1 = (function (){var statearr_21943 = state_21929;
(statearr_21943[(14)] = inst_21891);

(statearr_21943[(9)] = inst_21882__$1);

(statearr_21943[(10)] = inst_21883__$1);

(statearr_21943[(11)] = inst_21881__$1);

(statearr_21943[(12)] = inst_21884__$1);

return statearr_21943;
})();
var statearr_21944_21979 = state_21929__$1;
(statearr_21944_21979[(2)] = null);

(statearr_21944_21979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (22))){
var state_21929__$1 = state_21929;
var statearr_21945_21980 = state_21929__$1;
(statearr_21945_21980[(2)] = null);

(statearr_21945_21980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (6))){
var inst_21870 = (state_21929[(13)]);
var inst_21879 = f.call(null,inst_21870);
var inst_21880 = cljs.core.seq.call(null,inst_21879);
var inst_21881 = inst_21880;
var inst_21882 = null;
var inst_21883 = (0);
var inst_21884 = (0);
var state_21929__$1 = (function (){var statearr_21946 = state_21929;
(statearr_21946[(9)] = inst_21882);

(statearr_21946[(10)] = inst_21883);

(statearr_21946[(11)] = inst_21881);

(statearr_21946[(12)] = inst_21884);

return statearr_21946;
})();
var statearr_21947_21981 = state_21929__$1;
(statearr_21947_21981[(2)] = null);

(statearr_21947_21981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (17))){
var inst_21895 = (state_21929[(7)]);
var inst_21899 = cljs.core.chunk_first.call(null,inst_21895);
var inst_21900 = cljs.core.chunk_rest.call(null,inst_21895);
var inst_21901 = cljs.core.count.call(null,inst_21899);
var inst_21881 = inst_21900;
var inst_21882 = inst_21899;
var inst_21883 = inst_21901;
var inst_21884 = (0);
var state_21929__$1 = (function (){var statearr_21948 = state_21929;
(statearr_21948[(9)] = inst_21882);

(statearr_21948[(10)] = inst_21883);

(statearr_21948[(11)] = inst_21881);

(statearr_21948[(12)] = inst_21884);

return statearr_21948;
})();
var statearr_21949_21982 = state_21929__$1;
(statearr_21949_21982[(2)] = null);

(statearr_21949_21982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (3))){
var inst_21927 = (state_21929[(2)]);
var state_21929__$1 = state_21929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21929__$1,inst_21927);
} else {
if((state_val_21930 === (12))){
var inst_21915 = (state_21929[(2)]);
var state_21929__$1 = state_21929;
var statearr_21950_21983 = state_21929__$1;
(statearr_21950_21983[(2)] = inst_21915);

(statearr_21950_21983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (2))){
var state_21929__$1 = state_21929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21929__$1,(4),in$);
} else {
if((state_val_21930 === (23))){
var inst_21923 = (state_21929[(2)]);
var state_21929__$1 = state_21929;
var statearr_21951_21984 = state_21929__$1;
(statearr_21951_21984[(2)] = inst_21923);

(statearr_21951_21984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (19))){
var inst_21910 = (state_21929[(2)]);
var state_21929__$1 = state_21929;
var statearr_21952_21985 = state_21929__$1;
(statearr_21952_21985[(2)] = inst_21910);

(statearr_21952_21985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (11))){
var inst_21881 = (state_21929[(11)]);
var inst_21895 = (state_21929[(7)]);
var inst_21895__$1 = cljs.core.seq.call(null,inst_21881);
var state_21929__$1 = (function (){var statearr_21953 = state_21929;
(statearr_21953[(7)] = inst_21895__$1);

return statearr_21953;
})();
if(inst_21895__$1){
var statearr_21954_21986 = state_21929__$1;
(statearr_21954_21986[(1)] = (14));

} else {
var statearr_21955_21987 = state_21929__$1;
(statearr_21955_21987[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (9))){
var inst_21917 = (state_21929[(2)]);
var inst_21918 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21929__$1 = (function (){var statearr_21956 = state_21929;
(statearr_21956[(15)] = inst_21917);

return statearr_21956;
})();
if(cljs.core.truth_(inst_21918)){
var statearr_21957_21988 = state_21929__$1;
(statearr_21957_21988[(1)] = (21));

} else {
var statearr_21958_21989 = state_21929__$1;
(statearr_21958_21989[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (5))){
var inst_21873 = cljs.core.async.close_BANG_.call(null,out);
var state_21929__$1 = state_21929;
var statearr_21959_21990 = state_21929__$1;
(statearr_21959_21990[(2)] = inst_21873);

(statearr_21959_21990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (14))){
var inst_21895 = (state_21929[(7)]);
var inst_21897 = cljs.core.chunked_seq_QMARK_.call(null,inst_21895);
var state_21929__$1 = state_21929;
if(inst_21897){
var statearr_21960_21991 = state_21929__$1;
(statearr_21960_21991[(1)] = (17));

} else {
var statearr_21961_21992 = state_21929__$1;
(statearr_21961_21992[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (16))){
var inst_21913 = (state_21929[(2)]);
var state_21929__$1 = state_21929;
var statearr_21962_21993 = state_21929__$1;
(statearr_21962_21993[(2)] = inst_21913);

(statearr_21962_21993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21930 === (10))){
var inst_21882 = (state_21929[(9)]);
var inst_21884 = (state_21929[(12)]);
var inst_21889 = cljs.core._nth.call(null,inst_21882,inst_21884);
var state_21929__$1 = state_21929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21929__$1,(13),out,inst_21889);
} else {
if((state_val_21930 === (18))){
var inst_21895 = (state_21929[(7)]);
var inst_21904 = cljs.core.first.call(null,inst_21895);
var state_21929__$1 = state_21929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21929__$1,(20),out,inst_21904);
} else {
if((state_val_21930 === (8))){
var inst_21883 = (state_21929[(10)]);
var inst_21884 = (state_21929[(12)]);
var inst_21886 = (inst_21884 < inst_21883);
var inst_21887 = inst_21886;
var state_21929__$1 = state_21929;
if(cljs.core.truth_(inst_21887)){
var statearr_21963_21994 = state_21929__$1;
(statearr_21963_21994[(1)] = (10));

} else {
var statearr_21964_21995 = state_21929__$1;
(statearr_21964_21995[(1)] = (11));

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
});})(c__19494__auto__))
;
return ((function (switch__19382__auto__,c__19494__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19383__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19383__auto____0 = (function (){
var statearr_21968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21968[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19383__auto__);

(statearr_21968[(1)] = (1));

return statearr_21968;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19383__auto____1 = (function (state_21929){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_21929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e21969){if((e21969 instanceof Object)){
var ex__19386__auto__ = e21969;
var statearr_21970_21996 = state_21929;
(statearr_21970_21996[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21997 = state_21929;
state_21929 = G__21997;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19383__auto__ = function(state_21929){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19383__auto____1.call(this,state_21929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19383__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19383__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto__))
})();
var state__19496__auto__ = (function (){var statearr_21971 = f__19495__auto__.call(null);
(statearr_21971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto__);

return statearr_21971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto__))
);

return c__19494__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21998 = [];
var len__17924__auto___22001 = arguments.length;
var i__17925__auto___22002 = (0);
while(true){
if((i__17925__auto___22002 < len__17924__auto___22001)){
args21998.push((arguments[i__17925__auto___22002]));

var G__22003 = (i__17925__auto___22002 + (1));
i__17925__auto___22002 = G__22003;
continue;
} else {
}
break;
}

var G__22000 = args21998.length;
switch (G__22000) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21998.length)].join('')));

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
var args22005 = [];
var len__17924__auto___22008 = arguments.length;
var i__17925__auto___22009 = (0);
while(true){
if((i__17925__auto___22009 < len__17924__auto___22008)){
args22005.push((arguments[i__17925__auto___22009]));

var G__22010 = (i__17925__auto___22009 + (1));
i__17925__auto___22009 = G__22010;
continue;
} else {
}
break;
}

var G__22007 = args22005.length;
switch (G__22007) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22005.length)].join('')));

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
var args22012 = [];
var len__17924__auto___22063 = arguments.length;
var i__17925__auto___22064 = (0);
while(true){
if((i__17925__auto___22064 < len__17924__auto___22063)){
args22012.push((arguments[i__17925__auto___22064]));

var G__22065 = (i__17925__auto___22064 + (1));
i__17925__auto___22064 = G__22065;
continue;
} else {
}
break;
}

var G__22014 = args22012.length;
switch (G__22014) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22012.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19494__auto___22067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___22067,out){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___22067,out){
return (function (state_22038){
var state_val_22039 = (state_22038[(1)]);
if((state_val_22039 === (7))){
var inst_22033 = (state_22038[(2)]);
var state_22038__$1 = state_22038;
var statearr_22040_22068 = state_22038__$1;
(statearr_22040_22068[(2)] = inst_22033);

(statearr_22040_22068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (1))){
var inst_22015 = null;
var state_22038__$1 = (function (){var statearr_22041 = state_22038;
(statearr_22041[(7)] = inst_22015);

return statearr_22041;
})();
var statearr_22042_22069 = state_22038__$1;
(statearr_22042_22069[(2)] = null);

(statearr_22042_22069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (4))){
var inst_22018 = (state_22038[(8)]);
var inst_22018__$1 = (state_22038[(2)]);
var inst_22019 = (inst_22018__$1 == null);
var inst_22020 = cljs.core.not.call(null,inst_22019);
var state_22038__$1 = (function (){var statearr_22043 = state_22038;
(statearr_22043[(8)] = inst_22018__$1);

return statearr_22043;
})();
if(inst_22020){
var statearr_22044_22070 = state_22038__$1;
(statearr_22044_22070[(1)] = (5));

} else {
var statearr_22045_22071 = state_22038__$1;
(statearr_22045_22071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (6))){
var state_22038__$1 = state_22038;
var statearr_22046_22072 = state_22038__$1;
(statearr_22046_22072[(2)] = null);

(statearr_22046_22072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (3))){
var inst_22035 = (state_22038[(2)]);
var inst_22036 = cljs.core.async.close_BANG_.call(null,out);
var state_22038__$1 = (function (){var statearr_22047 = state_22038;
(statearr_22047[(9)] = inst_22035);

return statearr_22047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22038__$1,inst_22036);
} else {
if((state_val_22039 === (2))){
var state_22038__$1 = state_22038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22038__$1,(4),ch);
} else {
if((state_val_22039 === (11))){
var inst_22018 = (state_22038[(8)]);
var inst_22027 = (state_22038[(2)]);
var inst_22015 = inst_22018;
var state_22038__$1 = (function (){var statearr_22048 = state_22038;
(statearr_22048[(7)] = inst_22015);

(statearr_22048[(10)] = inst_22027);

return statearr_22048;
})();
var statearr_22049_22073 = state_22038__$1;
(statearr_22049_22073[(2)] = null);

(statearr_22049_22073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (9))){
var inst_22018 = (state_22038[(8)]);
var state_22038__$1 = state_22038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22038__$1,(11),out,inst_22018);
} else {
if((state_val_22039 === (5))){
var inst_22015 = (state_22038[(7)]);
var inst_22018 = (state_22038[(8)]);
var inst_22022 = cljs.core._EQ_.call(null,inst_22018,inst_22015);
var state_22038__$1 = state_22038;
if(inst_22022){
var statearr_22051_22074 = state_22038__$1;
(statearr_22051_22074[(1)] = (8));

} else {
var statearr_22052_22075 = state_22038__$1;
(statearr_22052_22075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (10))){
var inst_22030 = (state_22038[(2)]);
var state_22038__$1 = state_22038;
var statearr_22053_22076 = state_22038__$1;
(statearr_22053_22076[(2)] = inst_22030);

(statearr_22053_22076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22039 === (8))){
var inst_22015 = (state_22038[(7)]);
var tmp22050 = inst_22015;
var inst_22015__$1 = tmp22050;
var state_22038__$1 = (function (){var statearr_22054 = state_22038;
(statearr_22054[(7)] = inst_22015__$1);

return statearr_22054;
})();
var statearr_22055_22077 = state_22038__$1;
(statearr_22055_22077[(2)] = null);

(statearr_22055_22077[(1)] = (2));


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
});})(c__19494__auto___22067,out))
;
return ((function (switch__19382__auto__,c__19494__auto___22067,out){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_22059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22059[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_22059[(1)] = (1));

return statearr_22059;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_22038){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_22038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e22060){if((e22060 instanceof Object)){
var ex__19386__auto__ = e22060;
var statearr_22061_22078 = state_22038;
(statearr_22061_22078[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22079 = state_22038;
state_22038 = G__22079;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_22038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_22038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___22067,out))
})();
var state__19496__auto__ = (function (){var statearr_22062 = f__19495__auto__.call(null);
(statearr_22062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___22067);

return statearr_22062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___22067,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22080 = [];
var len__17924__auto___22150 = arguments.length;
var i__17925__auto___22151 = (0);
while(true){
if((i__17925__auto___22151 < len__17924__auto___22150)){
args22080.push((arguments[i__17925__auto___22151]));

var G__22152 = (i__17925__auto___22151 + (1));
i__17925__auto___22151 = G__22152;
continue;
} else {
}
break;
}

var G__22082 = args22080.length;
switch (G__22082) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22080.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19494__auto___22154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___22154,out){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___22154,out){
return (function (state_22120){
var state_val_22121 = (state_22120[(1)]);
if((state_val_22121 === (7))){
var inst_22116 = (state_22120[(2)]);
var state_22120__$1 = state_22120;
var statearr_22122_22155 = state_22120__$1;
(statearr_22122_22155[(2)] = inst_22116);

(statearr_22122_22155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (1))){
var inst_22083 = (new Array(n));
var inst_22084 = inst_22083;
var inst_22085 = (0);
var state_22120__$1 = (function (){var statearr_22123 = state_22120;
(statearr_22123[(7)] = inst_22085);

(statearr_22123[(8)] = inst_22084);

return statearr_22123;
})();
var statearr_22124_22156 = state_22120__$1;
(statearr_22124_22156[(2)] = null);

(statearr_22124_22156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (4))){
var inst_22088 = (state_22120[(9)]);
var inst_22088__$1 = (state_22120[(2)]);
var inst_22089 = (inst_22088__$1 == null);
var inst_22090 = cljs.core.not.call(null,inst_22089);
var state_22120__$1 = (function (){var statearr_22125 = state_22120;
(statearr_22125[(9)] = inst_22088__$1);

return statearr_22125;
})();
if(inst_22090){
var statearr_22126_22157 = state_22120__$1;
(statearr_22126_22157[(1)] = (5));

} else {
var statearr_22127_22158 = state_22120__$1;
(statearr_22127_22158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (15))){
var inst_22110 = (state_22120[(2)]);
var state_22120__$1 = state_22120;
var statearr_22128_22159 = state_22120__$1;
(statearr_22128_22159[(2)] = inst_22110);

(statearr_22128_22159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (13))){
var state_22120__$1 = state_22120;
var statearr_22129_22160 = state_22120__$1;
(statearr_22129_22160[(2)] = null);

(statearr_22129_22160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (6))){
var inst_22085 = (state_22120[(7)]);
var inst_22106 = (inst_22085 > (0));
var state_22120__$1 = state_22120;
if(cljs.core.truth_(inst_22106)){
var statearr_22130_22161 = state_22120__$1;
(statearr_22130_22161[(1)] = (12));

} else {
var statearr_22131_22162 = state_22120__$1;
(statearr_22131_22162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (3))){
var inst_22118 = (state_22120[(2)]);
var state_22120__$1 = state_22120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22120__$1,inst_22118);
} else {
if((state_val_22121 === (12))){
var inst_22084 = (state_22120[(8)]);
var inst_22108 = cljs.core.vec.call(null,inst_22084);
var state_22120__$1 = state_22120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22120__$1,(15),out,inst_22108);
} else {
if((state_val_22121 === (2))){
var state_22120__$1 = state_22120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22120__$1,(4),ch);
} else {
if((state_val_22121 === (11))){
var inst_22100 = (state_22120[(2)]);
var inst_22101 = (new Array(n));
var inst_22084 = inst_22101;
var inst_22085 = (0);
var state_22120__$1 = (function (){var statearr_22132 = state_22120;
(statearr_22132[(7)] = inst_22085);

(statearr_22132[(8)] = inst_22084);

(statearr_22132[(10)] = inst_22100);

return statearr_22132;
})();
var statearr_22133_22163 = state_22120__$1;
(statearr_22133_22163[(2)] = null);

(statearr_22133_22163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (9))){
var inst_22084 = (state_22120[(8)]);
var inst_22098 = cljs.core.vec.call(null,inst_22084);
var state_22120__$1 = state_22120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22120__$1,(11),out,inst_22098);
} else {
if((state_val_22121 === (5))){
var inst_22093 = (state_22120[(11)]);
var inst_22085 = (state_22120[(7)]);
var inst_22084 = (state_22120[(8)]);
var inst_22088 = (state_22120[(9)]);
var inst_22092 = (inst_22084[inst_22085] = inst_22088);
var inst_22093__$1 = (inst_22085 + (1));
var inst_22094 = (inst_22093__$1 < n);
var state_22120__$1 = (function (){var statearr_22134 = state_22120;
(statearr_22134[(12)] = inst_22092);

(statearr_22134[(11)] = inst_22093__$1);

return statearr_22134;
})();
if(cljs.core.truth_(inst_22094)){
var statearr_22135_22164 = state_22120__$1;
(statearr_22135_22164[(1)] = (8));

} else {
var statearr_22136_22165 = state_22120__$1;
(statearr_22136_22165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (14))){
var inst_22113 = (state_22120[(2)]);
var inst_22114 = cljs.core.async.close_BANG_.call(null,out);
var state_22120__$1 = (function (){var statearr_22138 = state_22120;
(statearr_22138[(13)] = inst_22113);

return statearr_22138;
})();
var statearr_22139_22166 = state_22120__$1;
(statearr_22139_22166[(2)] = inst_22114);

(statearr_22139_22166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (10))){
var inst_22104 = (state_22120[(2)]);
var state_22120__$1 = state_22120;
var statearr_22140_22167 = state_22120__$1;
(statearr_22140_22167[(2)] = inst_22104);

(statearr_22140_22167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22121 === (8))){
var inst_22093 = (state_22120[(11)]);
var inst_22084 = (state_22120[(8)]);
var tmp22137 = inst_22084;
var inst_22084__$1 = tmp22137;
var inst_22085 = inst_22093;
var state_22120__$1 = (function (){var statearr_22141 = state_22120;
(statearr_22141[(7)] = inst_22085);

(statearr_22141[(8)] = inst_22084__$1);

return statearr_22141;
})();
var statearr_22142_22168 = state_22120__$1;
(statearr_22142_22168[(2)] = null);

(statearr_22142_22168[(1)] = (2));


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
});})(c__19494__auto___22154,out))
;
return ((function (switch__19382__auto__,c__19494__auto___22154,out){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_22146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22146[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_22146[(1)] = (1));

return statearr_22146;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_22120){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_22120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e22147){if((e22147 instanceof Object)){
var ex__19386__auto__ = e22147;
var statearr_22148_22169 = state_22120;
(statearr_22148_22169[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22170 = state_22120;
state_22120 = G__22170;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_22120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_22120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___22154,out))
})();
var state__19496__auto__ = (function (){var statearr_22149 = f__19495__auto__.call(null);
(statearr_22149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___22154);

return statearr_22149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___22154,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22171 = [];
var len__17924__auto___22245 = arguments.length;
var i__17925__auto___22246 = (0);
while(true){
if((i__17925__auto___22246 < len__17924__auto___22245)){
args22171.push((arguments[i__17925__auto___22246]));

var G__22247 = (i__17925__auto___22246 + (1));
i__17925__auto___22246 = G__22247;
continue;
} else {
}
break;
}

var G__22173 = args22171.length;
switch (G__22173) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22171.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19494__auto___22249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___22249,out){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___22249,out){
return (function (state_22215){
var state_val_22216 = (state_22215[(1)]);
if((state_val_22216 === (7))){
var inst_22211 = (state_22215[(2)]);
var state_22215__$1 = state_22215;
var statearr_22217_22250 = state_22215__$1;
(statearr_22217_22250[(2)] = inst_22211);

(statearr_22217_22250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (1))){
var inst_22174 = [];
var inst_22175 = inst_22174;
var inst_22176 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22215__$1 = (function (){var statearr_22218 = state_22215;
(statearr_22218[(7)] = inst_22175);

(statearr_22218[(8)] = inst_22176);

return statearr_22218;
})();
var statearr_22219_22251 = state_22215__$1;
(statearr_22219_22251[(2)] = null);

(statearr_22219_22251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (4))){
var inst_22179 = (state_22215[(9)]);
var inst_22179__$1 = (state_22215[(2)]);
var inst_22180 = (inst_22179__$1 == null);
var inst_22181 = cljs.core.not.call(null,inst_22180);
var state_22215__$1 = (function (){var statearr_22220 = state_22215;
(statearr_22220[(9)] = inst_22179__$1);

return statearr_22220;
})();
if(inst_22181){
var statearr_22221_22252 = state_22215__$1;
(statearr_22221_22252[(1)] = (5));

} else {
var statearr_22222_22253 = state_22215__$1;
(statearr_22222_22253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (15))){
var inst_22205 = (state_22215[(2)]);
var state_22215__$1 = state_22215;
var statearr_22223_22254 = state_22215__$1;
(statearr_22223_22254[(2)] = inst_22205);

(statearr_22223_22254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (13))){
var state_22215__$1 = state_22215;
var statearr_22224_22255 = state_22215__$1;
(statearr_22224_22255[(2)] = null);

(statearr_22224_22255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (6))){
var inst_22175 = (state_22215[(7)]);
var inst_22200 = inst_22175.length;
var inst_22201 = (inst_22200 > (0));
var state_22215__$1 = state_22215;
if(cljs.core.truth_(inst_22201)){
var statearr_22225_22256 = state_22215__$1;
(statearr_22225_22256[(1)] = (12));

} else {
var statearr_22226_22257 = state_22215__$1;
(statearr_22226_22257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (3))){
var inst_22213 = (state_22215[(2)]);
var state_22215__$1 = state_22215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22215__$1,inst_22213);
} else {
if((state_val_22216 === (12))){
var inst_22175 = (state_22215[(7)]);
var inst_22203 = cljs.core.vec.call(null,inst_22175);
var state_22215__$1 = state_22215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22215__$1,(15),out,inst_22203);
} else {
if((state_val_22216 === (2))){
var state_22215__$1 = state_22215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22215__$1,(4),ch);
} else {
if((state_val_22216 === (11))){
var inst_22183 = (state_22215[(10)]);
var inst_22179 = (state_22215[(9)]);
var inst_22193 = (state_22215[(2)]);
var inst_22194 = [];
var inst_22195 = inst_22194.push(inst_22179);
var inst_22175 = inst_22194;
var inst_22176 = inst_22183;
var state_22215__$1 = (function (){var statearr_22227 = state_22215;
(statearr_22227[(7)] = inst_22175);

(statearr_22227[(11)] = inst_22193);

(statearr_22227[(8)] = inst_22176);

(statearr_22227[(12)] = inst_22195);

return statearr_22227;
})();
var statearr_22228_22258 = state_22215__$1;
(statearr_22228_22258[(2)] = null);

(statearr_22228_22258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (9))){
var inst_22175 = (state_22215[(7)]);
var inst_22191 = cljs.core.vec.call(null,inst_22175);
var state_22215__$1 = state_22215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22215__$1,(11),out,inst_22191);
} else {
if((state_val_22216 === (5))){
var inst_22176 = (state_22215[(8)]);
var inst_22183 = (state_22215[(10)]);
var inst_22179 = (state_22215[(9)]);
var inst_22183__$1 = f.call(null,inst_22179);
var inst_22184 = cljs.core._EQ_.call(null,inst_22183__$1,inst_22176);
var inst_22185 = cljs.core.keyword_identical_QMARK_.call(null,inst_22176,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22186 = (inst_22184) || (inst_22185);
var state_22215__$1 = (function (){var statearr_22229 = state_22215;
(statearr_22229[(10)] = inst_22183__$1);

return statearr_22229;
})();
if(cljs.core.truth_(inst_22186)){
var statearr_22230_22259 = state_22215__$1;
(statearr_22230_22259[(1)] = (8));

} else {
var statearr_22231_22260 = state_22215__$1;
(statearr_22231_22260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (14))){
var inst_22208 = (state_22215[(2)]);
var inst_22209 = cljs.core.async.close_BANG_.call(null,out);
var state_22215__$1 = (function (){var statearr_22233 = state_22215;
(statearr_22233[(13)] = inst_22208);

return statearr_22233;
})();
var statearr_22234_22261 = state_22215__$1;
(statearr_22234_22261[(2)] = inst_22209);

(statearr_22234_22261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (10))){
var inst_22198 = (state_22215[(2)]);
var state_22215__$1 = state_22215;
var statearr_22235_22262 = state_22215__$1;
(statearr_22235_22262[(2)] = inst_22198);

(statearr_22235_22262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22216 === (8))){
var inst_22175 = (state_22215[(7)]);
var inst_22183 = (state_22215[(10)]);
var inst_22179 = (state_22215[(9)]);
var inst_22188 = inst_22175.push(inst_22179);
var tmp22232 = inst_22175;
var inst_22175__$1 = tmp22232;
var inst_22176 = inst_22183;
var state_22215__$1 = (function (){var statearr_22236 = state_22215;
(statearr_22236[(7)] = inst_22175__$1);

(statearr_22236[(8)] = inst_22176);

(statearr_22236[(14)] = inst_22188);

return statearr_22236;
})();
var statearr_22237_22263 = state_22215__$1;
(statearr_22237_22263[(2)] = null);

(statearr_22237_22263[(1)] = (2));


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
});})(c__19494__auto___22249,out))
;
return ((function (switch__19382__auto__,c__19494__auto___22249,out){
return (function() {
var cljs$core$async$state_machine__19383__auto__ = null;
var cljs$core$async$state_machine__19383__auto____0 = (function (){
var statearr_22241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22241[(0)] = cljs$core$async$state_machine__19383__auto__);

(statearr_22241[(1)] = (1));

return statearr_22241;
});
var cljs$core$async$state_machine__19383__auto____1 = (function (state_22215){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_22215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e22242){if((e22242 instanceof Object)){
var ex__19386__auto__ = e22242;
var statearr_22243_22264 = state_22215;
(statearr_22243_22264[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22265 = state_22215;
state_22215 = G__22265;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
cljs$core$async$state_machine__19383__auto__ = function(state_22215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19383__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19383__auto____1.call(this,state_22215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19383__auto____0;
cljs$core$async$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19383__auto____1;
return cljs$core$async$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___22249,out))
})();
var state__19496__auto__ = (function (){var statearr_22244 = f__19495__auto__.call(null);
(statearr_22244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___22249);

return statearr_22244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___22249,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1455734073843