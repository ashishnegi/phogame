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
var seq__23412_23426 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23413_23427 = null;
var count__23414_23428 = (0);
var i__23415_23429 = (0);
while(true){
if((i__23415_23429 < count__23414_23428)){
var f_23430 = cljs.core._nth.call(null,chunk__23413_23427,i__23415_23429);
cljs.core.println.call(null,"  ",f_23430);

var G__23431 = seq__23412_23426;
var G__23432 = chunk__23413_23427;
var G__23433 = count__23414_23428;
var G__23434 = (i__23415_23429 + (1));
seq__23412_23426 = G__23431;
chunk__23413_23427 = G__23432;
count__23414_23428 = G__23433;
i__23415_23429 = G__23434;
continue;
} else {
var temp__4425__auto___23435 = cljs.core.seq.call(null,seq__23412_23426);
if(temp__4425__auto___23435){
var seq__23412_23436__$1 = temp__4425__auto___23435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23412_23436__$1)){
var c__17669__auto___23437 = cljs.core.chunk_first.call(null,seq__23412_23436__$1);
var G__23438 = cljs.core.chunk_rest.call(null,seq__23412_23436__$1);
var G__23439 = c__17669__auto___23437;
var G__23440 = cljs.core.count.call(null,c__17669__auto___23437);
var G__23441 = (0);
seq__23412_23426 = G__23438;
chunk__23413_23427 = G__23439;
count__23414_23428 = G__23440;
i__23415_23429 = G__23441;
continue;
} else {
var f_23442 = cljs.core.first.call(null,seq__23412_23436__$1);
cljs.core.println.call(null,"  ",f_23442);

var G__23443 = cljs.core.next.call(null,seq__23412_23436__$1);
var G__23444 = null;
var G__23445 = (0);
var G__23446 = (0);
seq__23412_23426 = G__23443;
chunk__23413_23427 = G__23444;
count__23414_23428 = G__23445;
i__23415_23429 = G__23446;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23447 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16866__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23447);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23447)))?cljs.core.second.call(null,arglists_23447):arglists_23447));
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
var seq__23416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23417 = null;
var count__23418 = (0);
var i__23419 = (0);
while(true){
if((i__23419 < count__23418)){
var vec__23420 = cljs.core._nth.call(null,chunk__23417,i__23419);
var name = cljs.core.nth.call(null,vec__23420,(0),null);
var map__23421 = cljs.core.nth.call(null,vec__23420,(1),null);
var map__23421__$1 = ((((!((map__23421 == null)))?((((map__23421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23421):map__23421);
var doc = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23448 = seq__23416;
var G__23449 = chunk__23417;
var G__23450 = count__23418;
var G__23451 = (i__23419 + (1));
seq__23416 = G__23448;
chunk__23417 = G__23449;
count__23418 = G__23450;
i__23419 = G__23451;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23416);
if(temp__4425__auto__){
var seq__23416__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23416__$1)){
var c__17669__auto__ = cljs.core.chunk_first.call(null,seq__23416__$1);
var G__23452 = cljs.core.chunk_rest.call(null,seq__23416__$1);
var G__23453 = c__17669__auto__;
var G__23454 = cljs.core.count.call(null,c__17669__auto__);
var G__23455 = (0);
seq__23416 = G__23452;
chunk__23417 = G__23453;
count__23418 = G__23454;
i__23419 = G__23455;
continue;
} else {
var vec__23423 = cljs.core.first.call(null,seq__23416__$1);
var name = cljs.core.nth.call(null,vec__23423,(0),null);
var map__23424 = cljs.core.nth.call(null,vec__23423,(1),null);
var map__23424__$1 = ((((!((map__23424 == null)))?((((map__23424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23424):map__23424);
var doc = cljs.core.get.call(null,map__23424__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23424__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23456 = cljs.core.next.call(null,seq__23416__$1);
var G__23457 = null;
var G__23458 = (0);
var G__23459 = (0);
seq__23416 = G__23456;
chunk__23417 = G__23457;
count__23418 = G__23458;
i__23419 = G__23459;
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

//# sourceMappingURL=repl.js.map?rel=1455734074644