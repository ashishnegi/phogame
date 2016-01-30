// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23392_23406 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23393_23407 = null;
var count__23394_23408 = (0);
var i__23395_23409 = (0);
while(true){
if((i__23395_23409 < count__23394_23408)){
var f_23410 = cljs.core._nth.call(null,chunk__23393_23407,i__23395_23409);
cljs.core.println.call(null,"  ",f_23410);

var G__23411 = seq__23392_23406;
var G__23412 = chunk__23393_23407;
var G__23413 = count__23394_23408;
var G__23414 = (i__23395_23409 + (1));
seq__23392_23406 = G__23411;
chunk__23393_23407 = G__23412;
count__23394_23408 = G__23413;
i__23395_23409 = G__23414;
continue;
} else {
var temp__4425__auto___23415 = cljs.core.seq.call(null,seq__23392_23406);
if(temp__4425__auto___23415){
var seq__23392_23416__$1 = temp__4425__auto___23415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23392_23416__$1)){
var c__17655__auto___23417 = cljs.core.chunk_first.call(null,seq__23392_23416__$1);
var G__23418 = cljs.core.chunk_rest.call(null,seq__23392_23416__$1);
var G__23419 = c__17655__auto___23417;
var G__23420 = cljs.core.count.call(null,c__17655__auto___23417);
var G__23421 = (0);
seq__23392_23406 = G__23418;
chunk__23393_23407 = G__23419;
count__23394_23408 = G__23420;
i__23395_23409 = G__23421;
continue;
} else {
var f_23422 = cljs.core.first.call(null,seq__23392_23416__$1);
cljs.core.println.call(null,"  ",f_23422);

var G__23423 = cljs.core.next.call(null,seq__23392_23416__$1);
var G__23424 = null;
var G__23425 = (0);
var G__23426 = (0);
seq__23392_23406 = G__23423;
chunk__23393_23407 = G__23424;
count__23394_23408 = G__23425;
i__23395_23409 = G__23426;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23427 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16852__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23427);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23427)))?cljs.core.second.call(null,arglists_23427):arglists_23427));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23396 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23397 = null;
var count__23398 = (0);
var i__23399 = (0);
while(true){
if((i__23399 < count__23398)){
var vec__23400 = cljs.core._nth.call(null,chunk__23397,i__23399);
var name = cljs.core.nth.call(null,vec__23400,(0),null);
var map__23401 = cljs.core.nth.call(null,vec__23400,(1),null);
var map__23401__$1 = ((((!((map__23401 == null)))?((((map__23401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23401):map__23401);
var doc = cljs.core.get.call(null,map__23401__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23401__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23428 = seq__23396;
var G__23429 = chunk__23397;
var G__23430 = count__23398;
var G__23431 = (i__23399 + (1));
seq__23396 = G__23428;
chunk__23397 = G__23429;
count__23398 = G__23430;
i__23399 = G__23431;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23396);
if(temp__4425__auto__){
var seq__23396__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23396__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__23396__$1);
var G__23432 = cljs.core.chunk_rest.call(null,seq__23396__$1);
var G__23433 = c__17655__auto__;
var G__23434 = cljs.core.count.call(null,c__17655__auto__);
var G__23435 = (0);
seq__23396 = G__23432;
chunk__23397 = G__23433;
count__23398 = G__23434;
i__23399 = G__23435;
continue;
} else {
var vec__23403 = cljs.core.first.call(null,seq__23396__$1);
var name = cljs.core.nth.call(null,vec__23403,(0),null);
var map__23404 = cljs.core.nth.call(null,vec__23403,(1),null);
var map__23404__$1 = ((((!((map__23404 == null)))?((((map__23404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23404):map__23404);
var doc = cljs.core.get.call(null,map__23404__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23404__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23436 = cljs.core.next.call(null,seq__23396__$1);
var G__23437 = null;
var G__23438 = (0);
var G__23439 = (0);
seq__23396 = G__23436;
chunk__23397 = G__23437;
count__23398 = G__23438;
i__23399 = G__23439;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1454142152718