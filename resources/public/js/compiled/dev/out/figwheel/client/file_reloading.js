// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16852__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16852__auto__){
return or__16852__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16852__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22368_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22368_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22373 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22374 = null;
var count__22375 = (0);
var i__22376 = (0);
while(true){
if((i__22376 < count__22375)){
var n = cljs.core._nth.call(null,chunk__22374,i__22376);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22377 = seq__22373;
var G__22378 = chunk__22374;
var G__22379 = count__22375;
var G__22380 = (i__22376 + (1));
seq__22373 = G__22377;
chunk__22374 = G__22378;
count__22375 = G__22379;
i__22376 = G__22380;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22373);
if(temp__4425__auto__){
var seq__22373__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22373__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__22373__$1);
var G__22381 = cljs.core.chunk_rest.call(null,seq__22373__$1);
var G__22382 = c__17655__auto__;
var G__22383 = cljs.core.count.call(null,c__17655__auto__);
var G__22384 = (0);
seq__22373 = G__22381;
chunk__22374 = G__22382;
count__22375 = G__22383;
i__22376 = G__22384;
continue;
} else {
var n = cljs.core.first.call(null,seq__22373__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22385 = cljs.core.next.call(null,seq__22373__$1);
var G__22386 = null;
var G__22387 = (0);
var G__22388 = (0);
seq__22373 = G__22385;
chunk__22374 = G__22386;
count__22375 = G__22387;
i__22376 = G__22388;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22427_22434 = cljs.core.seq.call(null,deps);
var chunk__22428_22435 = null;
var count__22429_22436 = (0);
var i__22430_22437 = (0);
while(true){
if((i__22430_22437 < count__22429_22436)){
var dep_22438 = cljs.core._nth.call(null,chunk__22428_22435,i__22430_22437);
topo_sort_helper_STAR_.call(null,dep_22438,(depth + (1)),state);

var G__22439 = seq__22427_22434;
var G__22440 = chunk__22428_22435;
var G__22441 = count__22429_22436;
var G__22442 = (i__22430_22437 + (1));
seq__22427_22434 = G__22439;
chunk__22428_22435 = G__22440;
count__22429_22436 = G__22441;
i__22430_22437 = G__22442;
continue;
} else {
var temp__4425__auto___22443 = cljs.core.seq.call(null,seq__22427_22434);
if(temp__4425__auto___22443){
var seq__22427_22444__$1 = temp__4425__auto___22443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22427_22444__$1)){
var c__17655__auto___22445 = cljs.core.chunk_first.call(null,seq__22427_22444__$1);
var G__22446 = cljs.core.chunk_rest.call(null,seq__22427_22444__$1);
var G__22447 = c__17655__auto___22445;
var G__22448 = cljs.core.count.call(null,c__17655__auto___22445);
var G__22449 = (0);
seq__22427_22434 = G__22446;
chunk__22428_22435 = G__22447;
count__22429_22436 = G__22448;
i__22430_22437 = G__22449;
continue;
} else {
var dep_22450 = cljs.core.first.call(null,seq__22427_22444__$1);
topo_sort_helper_STAR_.call(null,dep_22450,(depth + (1)),state);

var G__22451 = cljs.core.next.call(null,seq__22427_22444__$1);
var G__22452 = null;
var G__22453 = (0);
var G__22454 = (0);
seq__22427_22434 = G__22451;
chunk__22428_22435 = G__22452;
count__22429_22436 = G__22453;
i__22430_22437 = G__22454;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22431){
var vec__22433 = p__22431;
var x = cljs.core.nth.call(null,vec__22433,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22433,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22433,x,xs,get_deps__$1){
return (function (p1__22389_SHARP_){
return clojure.set.difference.call(null,p1__22389_SHARP_,x);
});})(vec__22433,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22467 = cljs.core.seq.call(null,provides);
var chunk__22468 = null;
var count__22469 = (0);
var i__22470 = (0);
while(true){
if((i__22470 < count__22469)){
var prov = cljs.core._nth.call(null,chunk__22468,i__22470);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22471_22479 = cljs.core.seq.call(null,requires);
var chunk__22472_22480 = null;
var count__22473_22481 = (0);
var i__22474_22482 = (0);
while(true){
if((i__22474_22482 < count__22473_22481)){
var req_22483 = cljs.core._nth.call(null,chunk__22472_22480,i__22474_22482);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22483,prov);

var G__22484 = seq__22471_22479;
var G__22485 = chunk__22472_22480;
var G__22486 = count__22473_22481;
var G__22487 = (i__22474_22482 + (1));
seq__22471_22479 = G__22484;
chunk__22472_22480 = G__22485;
count__22473_22481 = G__22486;
i__22474_22482 = G__22487;
continue;
} else {
var temp__4425__auto___22488 = cljs.core.seq.call(null,seq__22471_22479);
if(temp__4425__auto___22488){
var seq__22471_22489__$1 = temp__4425__auto___22488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22471_22489__$1)){
var c__17655__auto___22490 = cljs.core.chunk_first.call(null,seq__22471_22489__$1);
var G__22491 = cljs.core.chunk_rest.call(null,seq__22471_22489__$1);
var G__22492 = c__17655__auto___22490;
var G__22493 = cljs.core.count.call(null,c__17655__auto___22490);
var G__22494 = (0);
seq__22471_22479 = G__22491;
chunk__22472_22480 = G__22492;
count__22473_22481 = G__22493;
i__22474_22482 = G__22494;
continue;
} else {
var req_22495 = cljs.core.first.call(null,seq__22471_22489__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22495,prov);

var G__22496 = cljs.core.next.call(null,seq__22471_22489__$1);
var G__22497 = null;
var G__22498 = (0);
var G__22499 = (0);
seq__22471_22479 = G__22496;
chunk__22472_22480 = G__22497;
count__22473_22481 = G__22498;
i__22474_22482 = G__22499;
continue;
}
} else {
}
}
break;
}

var G__22500 = seq__22467;
var G__22501 = chunk__22468;
var G__22502 = count__22469;
var G__22503 = (i__22470 + (1));
seq__22467 = G__22500;
chunk__22468 = G__22501;
count__22469 = G__22502;
i__22470 = G__22503;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22467);
if(temp__4425__auto__){
var seq__22467__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22467__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__22467__$1);
var G__22504 = cljs.core.chunk_rest.call(null,seq__22467__$1);
var G__22505 = c__17655__auto__;
var G__22506 = cljs.core.count.call(null,c__17655__auto__);
var G__22507 = (0);
seq__22467 = G__22504;
chunk__22468 = G__22505;
count__22469 = G__22506;
i__22470 = G__22507;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22467__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22475_22508 = cljs.core.seq.call(null,requires);
var chunk__22476_22509 = null;
var count__22477_22510 = (0);
var i__22478_22511 = (0);
while(true){
if((i__22478_22511 < count__22477_22510)){
var req_22512 = cljs.core._nth.call(null,chunk__22476_22509,i__22478_22511);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22512,prov);

var G__22513 = seq__22475_22508;
var G__22514 = chunk__22476_22509;
var G__22515 = count__22477_22510;
var G__22516 = (i__22478_22511 + (1));
seq__22475_22508 = G__22513;
chunk__22476_22509 = G__22514;
count__22477_22510 = G__22515;
i__22478_22511 = G__22516;
continue;
} else {
var temp__4425__auto___22517__$1 = cljs.core.seq.call(null,seq__22475_22508);
if(temp__4425__auto___22517__$1){
var seq__22475_22518__$1 = temp__4425__auto___22517__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22475_22518__$1)){
var c__17655__auto___22519 = cljs.core.chunk_first.call(null,seq__22475_22518__$1);
var G__22520 = cljs.core.chunk_rest.call(null,seq__22475_22518__$1);
var G__22521 = c__17655__auto___22519;
var G__22522 = cljs.core.count.call(null,c__17655__auto___22519);
var G__22523 = (0);
seq__22475_22508 = G__22520;
chunk__22476_22509 = G__22521;
count__22477_22510 = G__22522;
i__22478_22511 = G__22523;
continue;
} else {
var req_22524 = cljs.core.first.call(null,seq__22475_22518__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22524,prov);

var G__22525 = cljs.core.next.call(null,seq__22475_22518__$1);
var G__22526 = null;
var G__22527 = (0);
var G__22528 = (0);
seq__22475_22508 = G__22525;
chunk__22476_22509 = G__22526;
count__22477_22510 = G__22527;
i__22478_22511 = G__22528;
continue;
}
} else {
}
}
break;
}

var G__22529 = cljs.core.next.call(null,seq__22467__$1);
var G__22530 = null;
var G__22531 = (0);
var G__22532 = (0);
seq__22467 = G__22529;
chunk__22468 = G__22530;
count__22469 = G__22531;
i__22470 = G__22532;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22537_22541 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22538_22542 = null;
var count__22539_22543 = (0);
var i__22540_22544 = (0);
while(true){
if((i__22540_22544 < count__22539_22543)){
var ns_22545 = cljs.core._nth.call(null,chunk__22538_22542,i__22540_22544);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22545);

var G__22546 = seq__22537_22541;
var G__22547 = chunk__22538_22542;
var G__22548 = count__22539_22543;
var G__22549 = (i__22540_22544 + (1));
seq__22537_22541 = G__22546;
chunk__22538_22542 = G__22547;
count__22539_22543 = G__22548;
i__22540_22544 = G__22549;
continue;
} else {
var temp__4425__auto___22550 = cljs.core.seq.call(null,seq__22537_22541);
if(temp__4425__auto___22550){
var seq__22537_22551__$1 = temp__4425__auto___22550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22537_22551__$1)){
var c__17655__auto___22552 = cljs.core.chunk_first.call(null,seq__22537_22551__$1);
var G__22553 = cljs.core.chunk_rest.call(null,seq__22537_22551__$1);
var G__22554 = c__17655__auto___22552;
var G__22555 = cljs.core.count.call(null,c__17655__auto___22552);
var G__22556 = (0);
seq__22537_22541 = G__22553;
chunk__22538_22542 = G__22554;
count__22539_22543 = G__22555;
i__22540_22544 = G__22556;
continue;
} else {
var ns_22557 = cljs.core.first.call(null,seq__22537_22551__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22557);

var G__22558 = cljs.core.next.call(null,seq__22537_22551__$1);
var G__22559 = null;
var G__22560 = (0);
var G__22561 = (0);
seq__22537_22541 = G__22558;
chunk__22538_22542 = G__22559;
count__22539_22543 = G__22560;
i__22540_22544 = G__22561;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16852__auto__ = goog.require__;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22562__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22563__i = 0, G__22563__a = new Array(arguments.length -  0);
while (G__22563__i < G__22563__a.length) {G__22563__a[G__22563__i] = arguments[G__22563__i + 0]; ++G__22563__i;}
  args = new cljs.core.IndexedSeq(G__22563__a,0);
} 
return G__22562__delegate.call(this,args);};
G__22562.cljs$lang$maxFixedArity = 0;
G__22562.cljs$lang$applyTo = (function (arglist__22564){
var args = cljs.core.seq(arglist__22564);
return G__22562__delegate(args);
});
G__22562.cljs$core$IFn$_invoke$arity$variadic = G__22562__delegate;
return G__22562;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22566 = cljs.core._EQ_;
var expr__22567 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22567))){
var path_parts = ((function (pred__22566,expr__22567){
return (function (p1__22565_SHARP_){
return clojure.string.split.call(null,p1__22565_SHARP_,/[\/\\]/);
});})(pred__22566,expr__22567))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22566,expr__22567){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22569){if((e22569 instanceof Error)){
var e = e22569;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22569;

}
}})());
});
;})(path_parts,sep,root,pred__22566,expr__22567))
} else {
if(cljs.core.truth_(pred__22566.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22567))){
return ((function (pred__22566,expr__22567){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22566,expr__22567){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22566,expr__22567))
);

return deferred.addErrback(((function (deferred,pred__22566,expr__22567){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22566,expr__22567))
);
});
;})(pred__22566,expr__22567))
} else {
return ((function (pred__22566,expr__22567){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22566,expr__22567))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22570,callback){
var map__22573 = p__22570;
var map__22573__$1 = ((((!((map__22573 == null)))?((((map__22573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22573):map__22573);
var file_msg = map__22573__$1;
var request_url = cljs.core.get.call(null,map__22573__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22573,map__22573__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22573,map__22573__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto__){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto__){
return (function (state_22597){
var state_val_22598 = (state_22597[(1)]);
if((state_val_22598 === (7))){
var inst_22593 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
var statearr_22599_22619 = state_22597__$1;
(statearr_22599_22619[(2)] = inst_22593);

(statearr_22599_22619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (1))){
var state_22597__$1 = state_22597;
var statearr_22600_22620 = state_22597__$1;
(statearr_22600_22620[(2)] = null);

(statearr_22600_22620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (4))){
var inst_22577 = (state_22597[(7)]);
var inst_22577__$1 = (state_22597[(2)]);
var state_22597__$1 = (function (){var statearr_22601 = state_22597;
(statearr_22601[(7)] = inst_22577__$1);

return statearr_22601;
})();
if(cljs.core.truth_(inst_22577__$1)){
var statearr_22602_22621 = state_22597__$1;
(statearr_22602_22621[(1)] = (5));

} else {
var statearr_22603_22622 = state_22597__$1;
(statearr_22603_22622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (6))){
var state_22597__$1 = state_22597;
var statearr_22604_22623 = state_22597__$1;
(statearr_22604_22623[(2)] = null);

(statearr_22604_22623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (3))){
var inst_22595 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22597__$1,inst_22595);
} else {
if((state_val_22598 === (2))){
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22597__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22598 === (11))){
var inst_22589 = (state_22597[(2)]);
var state_22597__$1 = (function (){var statearr_22605 = state_22597;
(statearr_22605[(8)] = inst_22589);

return statearr_22605;
})();
var statearr_22606_22624 = state_22597__$1;
(statearr_22606_22624[(2)] = null);

(statearr_22606_22624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (9))){
var inst_22583 = (state_22597[(9)]);
var inst_22581 = (state_22597[(10)]);
var inst_22585 = inst_22583.call(null,inst_22581);
var state_22597__$1 = state_22597;
var statearr_22607_22625 = state_22597__$1;
(statearr_22607_22625[(2)] = inst_22585);

(statearr_22607_22625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (5))){
var inst_22577 = (state_22597[(7)]);
var inst_22579 = figwheel.client.file_reloading.blocking_load.call(null,inst_22577);
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22597__$1,(8),inst_22579);
} else {
if((state_val_22598 === (10))){
var inst_22581 = (state_22597[(10)]);
var inst_22587 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22581);
var state_22597__$1 = state_22597;
var statearr_22608_22626 = state_22597__$1;
(statearr_22608_22626[(2)] = inst_22587);

(statearr_22608_22626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (8))){
var inst_22577 = (state_22597[(7)]);
var inst_22583 = (state_22597[(9)]);
var inst_22581 = (state_22597[(2)]);
var inst_22582 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22583__$1 = cljs.core.get.call(null,inst_22582,inst_22577);
var state_22597__$1 = (function (){var statearr_22609 = state_22597;
(statearr_22609[(9)] = inst_22583__$1);

(statearr_22609[(10)] = inst_22581);

return statearr_22609;
})();
if(cljs.core.truth_(inst_22583__$1)){
var statearr_22610_22627 = state_22597__$1;
(statearr_22610_22627[(1)] = (9));

} else {
var statearr_22611_22628 = state_22597__$1;
(statearr_22611_22628[(1)] = (10));

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
});})(c__19474__auto__))
;
return ((function (switch__19362__auto__,c__19474__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19363__auto__ = null;
var figwheel$client$file_reloading$state_machine__19363__auto____0 = (function (){
var statearr_22615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22615[(0)] = figwheel$client$file_reloading$state_machine__19363__auto__);

(statearr_22615[(1)] = (1));

return statearr_22615;
});
var figwheel$client$file_reloading$state_machine__19363__auto____1 = (function (state_22597){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_22597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e22616){if((e22616 instanceof Object)){
var ex__19366__auto__ = e22616;
var statearr_22617_22629 = state_22597;
(statearr_22617_22629[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22630 = state_22597;
state_22597 = G__22630;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19363__auto__ = function(state_22597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19363__auto____1.call(this,state_22597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19363__auto____0;
figwheel$client$file_reloading$state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19363__auto____1;
return figwheel$client$file_reloading$state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto__))
})();
var state__19476__auto__ = (function (){var statearr_22618 = f__19475__auto__.call(null);
(statearr_22618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto__);

return statearr_22618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto__))
);

return c__19474__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22631,callback){
var map__22634 = p__22631;
var map__22634__$1 = ((((!((map__22634 == null)))?((((map__22634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22634):map__22634);
var file_msg = map__22634__$1;
var namespace = cljs.core.get.call(null,map__22634__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22634,map__22634__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22634,map__22634__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22636){
var map__22639 = p__22636;
var map__22639__$1 = ((((!((map__22639 == null)))?((((map__22639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22639):map__22639);
var file_msg = map__22639__$1;
var namespace = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16840__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16840__auto__){
var or__16852__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
var or__16852__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16852__auto____$1)){
return or__16852__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16840__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22641,callback){
var map__22644 = p__22641;
var map__22644__$1 = ((((!((map__22644 == null)))?((((map__22644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22644):map__22644);
var file_msg = map__22644__$1;
var request_url = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19474__auto___22732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___22732,out){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___22732,out){
return (function (state_22714){
var state_val_22715 = (state_22714[(1)]);
if((state_val_22715 === (1))){
var inst_22692 = cljs.core.nth.call(null,files,(0),null);
var inst_22693 = cljs.core.nthnext.call(null,files,(1));
var inst_22694 = files;
var state_22714__$1 = (function (){var statearr_22716 = state_22714;
(statearr_22716[(7)] = inst_22692);

(statearr_22716[(8)] = inst_22693);

(statearr_22716[(9)] = inst_22694);

return statearr_22716;
})();
var statearr_22717_22733 = state_22714__$1;
(statearr_22717_22733[(2)] = null);

(statearr_22717_22733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (2))){
var inst_22694 = (state_22714[(9)]);
var inst_22697 = (state_22714[(10)]);
var inst_22697__$1 = cljs.core.nth.call(null,inst_22694,(0),null);
var inst_22698 = cljs.core.nthnext.call(null,inst_22694,(1));
var inst_22699 = (inst_22697__$1 == null);
var inst_22700 = cljs.core.not.call(null,inst_22699);
var state_22714__$1 = (function (){var statearr_22718 = state_22714;
(statearr_22718[(10)] = inst_22697__$1);

(statearr_22718[(11)] = inst_22698);

return statearr_22718;
})();
if(inst_22700){
var statearr_22719_22734 = state_22714__$1;
(statearr_22719_22734[(1)] = (4));

} else {
var statearr_22720_22735 = state_22714__$1;
(statearr_22720_22735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (3))){
var inst_22712 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22714__$1,inst_22712);
} else {
if((state_val_22715 === (4))){
var inst_22697 = (state_22714[(10)]);
var inst_22702 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22697);
var state_22714__$1 = state_22714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22714__$1,(7),inst_22702);
} else {
if((state_val_22715 === (5))){
var inst_22708 = cljs.core.async.close_BANG_.call(null,out);
var state_22714__$1 = state_22714;
var statearr_22721_22736 = state_22714__$1;
(statearr_22721_22736[(2)] = inst_22708);

(statearr_22721_22736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (6))){
var inst_22710 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22722_22737 = state_22714__$1;
(statearr_22722_22737[(2)] = inst_22710);

(statearr_22722_22737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (7))){
var inst_22698 = (state_22714[(11)]);
var inst_22704 = (state_22714[(2)]);
var inst_22705 = cljs.core.async.put_BANG_.call(null,out,inst_22704);
var inst_22694 = inst_22698;
var state_22714__$1 = (function (){var statearr_22723 = state_22714;
(statearr_22723[(12)] = inst_22705);

(statearr_22723[(9)] = inst_22694);

return statearr_22723;
})();
var statearr_22724_22738 = state_22714__$1;
(statearr_22724_22738[(2)] = null);

(statearr_22724_22738[(1)] = (2));


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
});})(c__19474__auto___22732,out))
;
return ((function (switch__19362__auto__,c__19474__auto___22732,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto____0 = (function (){
var statearr_22728 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22728[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto__);

(statearr_22728[(1)] = (1));

return statearr_22728;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto____1 = (function (state_22714){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_22714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e22729){if((e22729 instanceof Object)){
var ex__19366__auto__ = e22729;
var statearr_22730_22739 = state_22714;
(statearr_22730_22739[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22740 = state_22714;
state_22714 = G__22740;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto__ = function(state_22714){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto____1.call(this,state_22714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___22732,out))
})();
var state__19476__auto__ = (function (){var statearr_22731 = f__19475__auto__.call(null);
(statearr_22731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___22732);

return statearr_22731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___22732,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22741,opts){
var map__22745 = p__22741;
var map__22745__$1 = ((((!((map__22745 == null)))?((((map__22745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22745):map__22745);
var eval_body__$1 = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16840__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16840__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16840__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22747){var e = e22747;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22748_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22748_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22753){
var vec__22754 = p__22753;
var k = cljs.core.nth.call(null,vec__22754,(0),null);
var v = cljs.core.nth.call(null,vec__22754,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22755){
var vec__22756 = p__22755;
var k = cljs.core.nth.call(null,vec__22756,(0),null);
var v = cljs.core.nth.call(null,vec__22756,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22760,p__22761){
var map__23008 = p__22760;
var map__23008__$1 = ((((!((map__23008 == null)))?((((map__23008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23008):map__23008);
var opts = map__23008__$1;
var before_jsload = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23009 = p__22761;
var map__23009__$1 = ((((!((map__23009 == null)))?((((map__23009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23009):map__23009);
var msg = map__23009__$1;
var files = cljs.core.get.call(null,map__23009__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23009__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23009__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23162){
var state_val_23163 = (state_23162[(1)]);
if((state_val_23163 === (7))){
var inst_23024 = (state_23162[(7)]);
var inst_23023 = (state_23162[(8)]);
var inst_23026 = (state_23162[(9)]);
var inst_23025 = (state_23162[(10)]);
var inst_23031 = cljs.core._nth.call(null,inst_23024,inst_23026);
var inst_23032 = figwheel.client.file_reloading.eval_body.call(null,inst_23031,opts);
var inst_23033 = (inst_23026 + (1));
var tmp23164 = inst_23024;
var tmp23165 = inst_23023;
var tmp23166 = inst_23025;
var inst_23023__$1 = tmp23165;
var inst_23024__$1 = tmp23164;
var inst_23025__$1 = tmp23166;
var inst_23026__$1 = inst_23033;
var state_23162__$1 = (function (){var statearr_23167 = state_23162;
(statearr_23167[(11)] = inst_23032);

(statearr_23167[(7)] = inst_23024__$1);

(statearr_23167[(8)] = inst_23023__$1);

(statearr_23167[(9)] = inst_23026__$1);

(statearr_23167[(10)] = inst_23025__$1);

return statearr_23167;
})();
var statearr_23168_23254 = state_23162__$1;
(statearr_23168_23254[(2)] = null);

(statearr_23168_23254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (20))){
var inst_23066 = (state_23162[(12)]);
var inst_23074 = figwheel.client.file_reloading.sort_files.call(null,inst_23066);
var state_23162__$1 = state_23162;
var statearr_23169_23255 = state_23162__$1;
(statearr_23169_23255[(2)] = inst_23074);

(statearr_23169_23255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (27))){
var state_23162__$1 = state_23162;
var statearr_23170_23256 = state_23162__$1;
(statearr_23170_23256[(2)] = null);

(statearr_23170_23256[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (1))){
var inst_23015 = (state_23162[(13)]);
var inst_23012 = before_jsload.call(null,files);
var inst_23013 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23014 = (function (){return ((function (inst_23015,inst_23012,inst_23013,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22757_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22757_SHARP_);
});
;})(inst_23015,inst_23012,inst_23013,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23015__$1 = cljs.core.filter.call(null,inst_23014,files);
var inst_23016 = cljs.core.not_empty.call(null,inst_23015__$1);
var state_23162__$1 = (function (){var statearr_23171 = state_23162;
(statearr_23171[(14)] = inst_23012);

(statearr_23171[(13)] = inst_23015__$1);

(statearr_23171[(15)] = inst_23013);

return statearr_23171;
})();
if(cljs.core.truth_(inst_23016)){
var statearr_23172_23257 = state_23162__$1;
(statearr_23172_23257[(1)] = (2));

} else {
var statearr_23173_23258 = state_23162__$1;
(statearr_23173_23258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (24))){
var state_23162__$1 = state_23162;
var statearr_23174_23259 = state_23162__$1;
(statearr_23174_23259[(2)] = null);

(statearr_23174_23259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (39))){
var inst_23116 = (state_23162[(16)]);
var state_23162__$1 = state_23162;
var statearr_23175_23260 = state_23162__$1;
(statearr_23175_23260[(2)] = inst_23116);

(statearr_23175_23260[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (46))){
var inst_23157 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23176_23261 = state_23162__$1;
(statearr_23176_23261[(2)] = inst_23157);

(statearr_23176_23261[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (4))){
var inst_23060 = (state_23162[(2)]);
var inst_23061 = cljs.core.List.EMPTY;
var inst_23062 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23061);
var inst_23063 = (function (){return ((function (inst_23060,inst_23061,inst_23062,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22758_SHARP_){
var and__16840__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22758_SHARP_);
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22758_SHARP_));
} else {
return and__16840__auto__;
}
});
;})(inst_23060,inst_23061,inst_23062,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23064 = cljs.core.filter.call(null,inst_23063,files);
var inst_23065 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23066 = cljs.core.concat.call(null,inst_23064,inst_23065);
var state_23162__$1 = (function (){var statearr_23177 = state_23162;
(statearr_23177[(12)] = inst_23066);

(statearr_23177[(17)] = inst_23060);

(statearr_23177[(18)] = inst_23062);

return statearr_23177;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23178_23262 = state_23162__$1;
(statearr_23178_23262[(1)] = (16));

} else {
var statearr_23179_23263 = state_23162__$1;
(statearr_23179_23263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (15))){
var inst_23050 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23180_23264 = state_23162__$1;
(statearr_23180_23264[(2)] = inst_23050);

(statearr_23180_23264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (21))){
var inst_23076 = (state_23162[(19)]);
var inst_23076__$1 = (state_23162[(2)]);
var inst_23077 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23076__$1);
var state_23162__$1 = (function (){var statearr_23181 = state_23162;
(statearr_23181[(19)] = inst_23076__$1);

return statearr_23181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23162__$1,(22),inst_23077);
} else {
if((state_val_23163 === (31))){
var inst_23160 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23162__$1,inst_23160);
} else {
if((state_val_23163 === (32))){
var inst_23116 = (state_23162[(16)]);
var inst_23121 = inst_23116.cljs$lang$protocol_mask$partition0$;
var inst_23122 = (inst_23121 & (64));
var inst_23123 = inst_23116.cljs$core$ISeq$;
var inst_23124 = (inst_23122) || (inst_23123);
var state_23162__$1 = state_23162;
if(cljs.core.truth_(inst_23124)){
var statearr_23182_23265 = state_23162__$1;
(statearr_23182_23265[(1)] = (35));

} else {
var statearr_23183_23266 = state_23162__$1;
(statearr_23183_23266[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (40))){
var inst_23137 = (state_23162[(20)]);
var inst_23136 = (state_23162[(2)]);
var inst_23137__$1 = cljs.core.get.call(null,inst_23136,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23138 = cljs.core.get.call(null,inst_23136,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23139 = cljs.core.not_empty.call(null,inst_23137__$1);
var state_23162__$1 = (function (){var statearr_23184 = state_23162;
(statearr_23184[(20)] = inst_23137__$1);

(statearr_23184[(21)] = inst_23138);

return statearr_23184;
})();
if(cljs.core.truth_(inst_23139)){
var statearr_23185_23267 = state_23162__$1;
(statearr_23185_23267[(1)] = (41));

} else {
var statearr_23186_23268 = state_23162__$1;
(statearr_23186_23268[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (33))){
var state_23162__$1 = state_23162;
var statearr_23187_23269 = state_23162__$1;
(statearr_23187_23269[(2)] = false);

(statearr_23187_23269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (13))){
var inst_23036 = (state_23162[(22)]);
var inst_23040 = cljs.core.chunk_first.call(null,inst_23036);
var inst_23041 = cljs.core.chunk_rest.call(null,inst_23036);
var inst_23042 = cljs.core.count.call(null,inst_23040);
var inst_23023 = inst_23041;
var inst_23024 = inst_23040;
var inst_23025 = inst_23042;
var inst_23026 = (0);
var state_23162__$1 = (function (){var statearr_23188 = state_23162;
(statearr_23188[(7)] = inst_23024);

(statearr_23188[(8)] = inst_23023);

(statearr_23188[(9)] = inst_23026);

(statearr_23188[(10)] = inst_23025);

return statearr_23188;
})();
var statearr_23189_23270 = state_23162__$1;
(statearr_23189_23270[(2)] = null);

(statearr_23189_23270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (22))){
var inst_23080 = (state_23162[(23)]);
var inst_23079 = (state_23162[(24)]);
var inst_23076 = (state_23162[(19)]);
var inst_23084 = (state_23162[(25)]);
var inst_23079__$1 = (state_23162[(2)]);
var inst_23080__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23079__$1);
var inst_23081 = (function (){var all_files = inst_23076;
var res_SINGLEQUOTE_ = inst_23079__$1;
var res = inst_23080__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23080,inst_23079,inst_23076,inst_23084,inst_23079__$1,inst_23080__$1,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22759_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22759_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23080,inst_23079,inst_23076,inst_23084,inst_23079__$1,inst_23080__$1,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23082 = cljs.core.filter.call(null,inst_23081,inst_23079__$1);
var inst_23083 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23084__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23083);
var inst_23085 = cljs.core.not_empty.call(null,inst_23084__$1);
var state_23162__$1 = (function (){var statearr_23190 = state_23162;
(statearr_23190[(23)] = inst_23080__$1);

(statearr_23190[(26)] = inst_23082);

(statearr_23190[(24)] = inst_23079__$1);

(statearr_23190[(25)] = inst_23084__$1);

return statearr_23190;
})();
if(cljs.core.truth_(inst_23085)){
var statearr_23191_23271 = state_23162__$1;
(statearr_23191_23271[(1)] = (23));

} else {
var statearr_23192_23272 = state_23162__$1;
(statearr_23192_23272[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (36))){
var state_23162__$1 = state_23162;
var statearr_23193_23273 = state_23162__$1;
(statearr_23193_23273[(2)] = false);

(statearr_23193_23273[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (41))){
var inst_23137 = (state_23162[(20)]);
var inst_23141 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23142 = cljs.core.map.call(null,inst_23141,inst_23137);
var inst_23143 = cljs.core.pr_str.call(null,inst_23142);
var inst_23144 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23143)].join('');
var inst_23145 = figwheel.client.utils.log.call(null,inst_23144);
var state_23162__$1 = state_23162;
var statearr_23194_23274 = state_23162__$1;
(statearr_23194_23274[(2)] = inst_23145);

(statearr_23194_23274[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (43))){
var inst_23138 = (state_23162[(21)]);
var inst_23148 = (state_23162[(2)]);
var inst_23149 = cljs.core.not_empty.call(null,inst_23138);
var state_23162__$1 = (function (){var statearr_23195 = state_23162;
(statearr_23195[(27)] = inst_23148);

return statearr_23195;
})();
if(cljs.core.truth_(inst_23149)){
var statearr_23196_23275 = state_23162__$1;
(statearr_23196_23275[(1)] = (44));

} else {
var statearr_23197_23276 = state_23162__$1;
(statearr_23197_23276[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (29))){
var inst_23080 = (state_23162[(23)]);
var inst_23082 = (state_23162[(26)]);
var inst_23079 = (state_23162[(24)]);
var inst_23076 = (state_23162[(19)]);
var inst_23084 = (state_23162[(25)]);
var inst_23116 = (state_23162[(16)]);
var inst_23112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23115 = (function (){var all_files = inst_23076;
var res_SINGLEQUOTE_ = inst_23079;
var res = inst_23080;
var files_not_loaded = inst_23082;
var dependencies_that_loaded = inst_23084;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23080,inst_23082,inst_23079,inst_23076,inst_23084,inst_23116,inst_23112,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23114){
var map__23198 = p__23114;
var map__23198__$1 = ((((!((map__23198 == null)))?((((map__23198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23198):map__23198);
var namespace = cljs.core.get.call(null,map__23198__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23080,inst_23082,inst_23079,inst_23076,inst_23084,inst_23116,inst_23112,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23116__$1 = cljs.core.group_by.call(null,inst_23115,inst_23082);
var inst_23118 = (inst_23116__$1 == null);
var inst_23119 = cljs.core.not.call(null,inst_23118);
var state_23162__$1 = (function (){var statearr_23200 = state_23162;
(statearr_23200[(28)] = inst_23112);

(statearr_23200[(16)] = inst_23116__$1);

return statearr_23200;
})();
if(inst_23119){
var statearr_23201_23277 = state_23162__$1;
(statearr_23201_23277[(1)] = (32));

} else {
var statearr_23202_23278 = state_23162__$1;
(statearr_23202_23278[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (44))){
var inst_23138 = (state_23162[(21)]);
var inst_23151 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23138);
var inst_23152 = cljs.core.pr_str.call(null,inst_23151);
var inst_23153 = [cljs.core.str("not required: "),cljs.core.str(inst_23152)].join('');
var inst_23154 = figwheel.client.utils.log.call(null,inst_23153);
var state_23162__$1 = state_23162;
var statearr_23203_23279 = state_23162__$1;
(statearr_23203_23279[(2)] = inst_23154);

(statearr_23203_23279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (6))){
var inst_23057 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23204_23280 = state_23162__$1;
(statearr_23204_23280[(2)] = inst_23057);

(statearr_23204_23280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (28))){
var inst_23082 = (state_23162[(26)]);
var inst_23109 = (state_23162[(2)]);
var inst_23110 = cljs.core.not_empty.call(null,inst_23082);
var state_23162__$1 = (function (){var statearr_23205 = state_23162;
(statearr_23205[(29)] = inst_23109);

return statearr_23205;
})();
if(cljs.core.truth_(inst_23110)){
var statearr_23206_23281 = state_23162__$1;
(statearr_23206_23281[(1)] = (29));

} else {
var statearr_23207_23282 = state_23162__$1;
(statearr_23207_23282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (25))){
var inst_23080 = (state_23162[(23)]);
var inst_23096 = (state_23162[(2)]);
var inst_23097 = cljs.core.not_empty.call(null,inst_23080);
var state_23162__$1 = (function (){var statearr_23208 = state_23162;
(statearr_23208[(30)] = inst_23096);

return statearr_23208;
})();
if(cljs.core.truth_(inst_23097)){
var statearr_23209_23283 = state_23162__$1;
(statearr_23209_23283[(1)] = (26));

} else {
var statearr_23210_23284 = state_23162__$1;
(statearr_23210_23284[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (34))){
var inst_23131 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
if(cljs.core.truth_(inst_23131)){
var statearr_23211_23285 = state_23162__$1;
(statearr_23211_23285[(1)] = (38));

} else {
var statearr_23212_23286 = state_23162__$1;
(statearr_23212_23286[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (17))){
var state_23162__$1 = state_23162;
var statearr_23213_23287 = state_23162__$1;
(statearr_23213_23287[(2)] = recompile_dependents);

(statearr_23213_23287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (3))){
var state_23162__$1 = state_23162;
var statearr_23214_23288 = state_23162__$1;
(statearr_23214_23288[(2)] = null);

(statearr_23214_23288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (12))){
var inst_23053 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23215_23289 = state_23162__$1;
(statearr_23215_23289[(2)] = inst_23053);

(statearr_23215_23289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (2))){
var inst_23015 = (state_23162[(13)]);
var inst_23022 = cljs.core.seq.call(null,inst_23015);
var inst_23023 = inst_23022;
var inst_23024 = null;
var inst_23025 = (0);
var inst_23026 = (0);
var state_23162__$1 = (function (){var statearr_23216 = state_23162;
(statearr_23216[(7)] = inst_23024);

(statearr_23216[(8)] = inst_23023);

(statearr_23216[(9)] = inst_23026);

(statearr_23216[(10)] = inst_23025);

return statearr_23216;
})();
var statearr_23217_23290 = state_23162__$1;
(statearr_23217_23290[(2)] = null);

(statearr_23217_23290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (23))){
var inst_23080 = (state_23162[(23)]);
var inst_23082 = (state_23162[(26)]);
var inst_23079 = (state_23162[(24)]);
var inst_23076 = (state_23162[(19)]);
var inst_23084 = (state_23162[(25)]);
var inst_23087 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23089 = (function (){var all_files = inst_23076;
var res_SINGLEQUOTE_ = inst_23079;
var res = inst_23080;
var files_not_loaded = inst_23082;
var dependencies_that_loaded = inst_23084;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23080,inst_23082,inst_23079,inst_23076,inst_23084,inst_23087,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23088){
var map__23218 = p__23088;
var map__23218__$1 = ((((!((map__23218 == null)))?((((map__23218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23218):map__23218);
var request_url = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23080,inst_23082,inst_23079,inst_23076,inst_23084,inst_23087,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23090 = cljs.core.reverse.call(null,inst_23084);
var inst_23091 = cljs.core.map.call(null,inst_23089,inst_23090);
var inst_23092 = cljs.core.pr_str.call(null,inst_23091);
var inst_23093 = figwheel.client.utils.log.call(null,inst_23092);
var state_23162__$1 = (function (){var statearr_23220 = state_23162;
(statearr_23220[(31)] = inst_23087);

return statearr_23220;
})();
var statearr_23221_23291 = state_23162__$1;
(statearr_23221_23291[(2)] = inst_23093);

(statearr_23221_23291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (35))){
var state_23162__$1 = state_23162;
var statearr_23222_23292 = state_23162__$1;
(statearr_23222_23292[(2)] = true);

(statearr_23222_23292[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (19))){
var inst_23066 = (state_23162[(12)]);
var inst_23072 = figwheel.client.file_reloading.expand_files.call(null,inst_23066);
var state_23162__$1 = state_23162;
var statearr_23223_23293 = state_23162__$1;
(statearr_23223_23293[(2)] = inst_23072);

(statearr_23223_23293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (11))){
var state_23162__$1 = state_23162;
var statearr_23224_23294 = state_23162__$1;
(statearr_23224_23294[(2)] = null);

(statearr_23224_23294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (9))){
var inst_23055 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23225_23295 = state_23162__$1;
(statearr_23225_23295[(2)] = inst_23055);

(statearr_23225_23295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (5))){
var inst_23026 = (state_23162[(9)]);
var inst_23025 = (state_23162[(10)]);
var inst_23028 = (inst_23026 < inst_23025);
var inst_23029 = inst_23028;
var state_23162__$1 = state_23162;
if(cljs.core.truth_(inst_23029)){
var statearr_23226_23296 = state_23162__$1;
(statearr_23226_23296[(1)] = (7));

} else {
var statearr_23227_23297 = state_23162__$1;
(statearr_23227_23297[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (14))){
var inst_23036 = (state_23162[(22)]);
var inst_23045 = cljs.core.first.call(null,inst_23036);
var inst_23046 = figwheel.client.file_reloading.eval_body.call(null,inst_23045,opts);
var inst_23047 = cljs.core.next.call(null,inst_23036);
var inst_23023 = inst_23047;
var inst_23024 = null;
var inst_23025 = (0);
var inst_23026 = (0);
var state_23162__$1 = (function (){var statearr_23228 = state_23162;
(statearr_23228[(7)] = inst_23024);

(statearr_23228[(8)] = inst_23023);

(statearr_23228[(9)] = inst_23026);

(statearr_23228[(10)] = inst_23025);

(statearr_23228[(32)] = inst_23046);

return statearr_23228;
})();
var statearr_23229_23298 = state_23162__$1;
(statearr_23229_23298[(2)] = null);

(statearr_23229_23298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (45))){
var state_23162__$1 = state_23162;
var statearr_23230_23299 = state_23162__$1;
(statearr_23230_23299[(2)] = null);

(statearr_23230_23299[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (26))){
var inst_23080 = (state_23162[(23)]);
var inst_23082 = (state_23162[(26)]);
var inst_23079 = (state_23162[(24)]);
var inst_23076 = (state_23162[(19)]);
var inst_23084 = (state_23162[(25)]);
var inst_23099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23101 = (function (){var all_files = inst_23076;
var res_SINGLEQUOTE_ = inst_23079;
var res = inst_23080;
var files_not_loaded = inst_23082;
var dependencies_that_loaded = inst_23084;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23080,inst_23082,inst_23079,inst_23076,inst_23084,inst_23099,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23100){
var map__23231 = p__23100;
var map__23231__$1 = ((((!((map__23231 == null)))?((((map__23231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23231):map__23231);
var namespace = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23080,inst_23082,inst_23079,inst_23076,inst_23084,inst_23099,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23102 = cljs.core.map.call(null,inst_23101,inst_23080);
var inst_23103 = cljs.core.pr_str.call(null,inst_23102);
var inst_23104 = figwheel.client.utils.log.call(null,inst_23103);
var inst_23105 = (function (){var all_files = inst_23076;
var res_SINGLEQUOTE_ = inst_23079;
var res = inst_23080;
var files_not_loaded = inst_23082;
var dependencies_that_loaded = inst_23084;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23080,inst_23082,inst_23079,inst_23076,inst_23084,inst_23099,inst_23101,inst_23102,inst_23103,inst_23104,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23080,inst_23082,inst_23079,inst_23076,inst_23084,inst_23099,inst_23101,inst_23102,inst_23103,inst_23104,state_val_23163,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23106 = setTimeout(inst_23105,(10));
var state_23162__$1 = (function (){var statearr_23233 = state_23162;
(statearr_23233[(33)] = inst_23099);

(statearr_23233[(34)] = inst_23104);

return statearr_23233;
})();
var statearr_23234_23300 = state_23162__$1;
(statearr_23234_23300[(2)] = inst_23106);

(statearr_23234_23300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (16))){
var state_23162__$1 = state_23162;
var statearr_23235_23301 = state_23162__$1;
(statearr_23235_23301[(2)] = reload_dependents);

(statearr_23235_23301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (38))){
var inst_23116 = (state_23162[(16)]);
var inst_23133 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23116);
var state_23162__$1 = state_23162;
var statearr_23236_23302 = state_23162__$1;
(statearr_23236_23302[(2)] = inst_23133);

(statearr_23236_23302[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (30))){
var state_23162__$1 = state_23162;
var statearr_23237_23303 = state_23162__$1;
(statearr_23237_23303[(2)] = null);

(statearr_23237_23303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (10))){
var inst_23036 = (state_23162[(22)]);
var inst_23038 = cljs.core.chunked_seq_QMARK_.call(null,inst_23036);
var state_23162__$1 = state_23162;
if(inst_23038){
var statearr_23238_23304 = state_23162__$1;
(statearr_23238_23304[(1)] = (13));

} else {
var statearr_23239_23305 = state_23162__$1;
(statearr_23239_23305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (18))){
var inst_23070 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
if(cljs.core.truth_(inst_23070)){
var statearr_23240_23306 = state_23162__$1;
(statearr_23240_23306[(1)] = (19));

} else {
var statearr_23241_23307 = state_23162__$1;
(statearr_23241_23307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (42))){
var state_23162__$1 = state_23162;
var statearr_23242_23308 = state_23162__$1;
(statearr_23242_23308[(2)] = null);

(statearr_23242_23308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (37))){
var inst_23128 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23243_23309 = state_23162__$1;
(statearr_23243_23309[(2)] = inst_23128);

(statearr_23243_23309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (8))){
var inst_23023 = (state_23162[(8)]);
var inst_23036 = (state_23162[(22)]);
var inst_23036__$1 = cljs.core.seq.call(null,inst_23023);
var state_23162__$1 = (function (){var statearr_23244 = state_23162;
(statearr_23244[(22)] = inst_23036__$1);

return statearr_23244;
})();
if(inst_23036__$1){
var statearr_23245_23310 = state_23162__$1;
(statearr_23245_23310[(1)] = (10));

} else {
var statearr_23246_23311 = state_23162__$1;
(statearr_23246_23311[(1)] = (11));

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
}
});})(c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19362__auto__,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto____0 = (function (){
var statearr_23250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23250[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto__);

(statearr_23250[(1)] = (1));

return statearr_23250;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto____1 = (function (state_23162){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_23162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e23251){if((e23251 instanceof Object)){
var ex__19366__auto__ = e23251;
var statearr_23252_23312 = state_23162;
(statearr_23252_23312[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23313 = state_23162;
state_23162 = G__23313;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto__ = function(state_23162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto____1.call(this,state_23162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19476__auto__ = (function (){var statearr_23253 = f__19475__auto__.call(null);
(statearr_23253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto__);

return statearr_23253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto__,map__23008,map__23008__$1,opts,before_jsload,on_jsload,reload_dependents,map__23009,map__23009__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19474__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23316,link){
var map__23319 = p__23316;
var map__23319__$1 = ((((!((map__23319 == null)))?((((map__23319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23319):map__23319);
var file = cljs.core.get.call(null,map__23319__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23319,map__23319__$1,file){
return (function (p1__23314_SHARP_,p2__23315_SHARP_){
if(cljs.core._EQ_.call(null,p1__23314_SHARP_,p2__23315_SHARP_)){
return p1__23314_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23319,map__23319__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23325){
var map__23326 = p__23325;
var map__23326__$1 = ((((!((map__23326 == null)))?((((map__23326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23326):map__23326);
var match_length = cljs.core.get.call(null,map__23326__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23326__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23321_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23321_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23328 = [];
var len__17910__auto___23331 = arguments.length;
var i__17911__auto___23332 = (0);
while(true){
if((i__17911__auto___23332 < len__17910__auto___23331)){
args23328.push((arguments[i__17911__auto___23332]));

var G__23333 = (i__17911__auto___23332 + (1));
i__17911__auto___23332 = G__23333;
continue;
} else {
}
break;
}

var G__23330 = args23328.length;
switch (G__23330) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23328.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23335_SHARP_,p2__23336_SHARP_){
return cljs.core.assoc.call(null,p1__23335_SHARP_,cljs.core.get.call(null,p2__23336_SHARP_,key),p2__23336_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23337){
var map__23340 = p__23337;
var map__23340__$1 = ((((!((map__23340 == null)))?((((map__23340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23340):map__23340);
var f_data = map__23340__$1;
var file = cljs.core.get.call(null,map__23340__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23342,files_msg){
var map__23349 = p__23342;
var map__23349__$1 = ((((!((map__23349 == null)))?((((map__23349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23349):map__23349);
var opts = map__23349__$1;
var on_cssload = cljs.core.get.call(null,map__23349__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23351_23355 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23352_23356 = null;
var count__23353_23357 = (0);
var i__23354_23358 = (0);
while(true){
if((i__23354_23358 < count__23353_23357)){
var f_23359 = cljs.core._nth.call(null,chunk__23352_23356,i__23354_23358);
figwheel.client.file_reloading.reload_css_file.call(null,f_23359);

var G__23360 = seq__23351_23355;
var G__23361 = chunk__23352_23356;
var G__23362 = count__23353_23357;
var G__23363 = (i__23354_23358 + (1));
seq__23351_23355 = G__23360;
chunk__23352_23356 = G__23361;
count__23353_23357 = G__23362;
i__23354_23358 = G__23363;
continue;
} else {
var temp__4425__auto___23364 = cljs.core.seq.call(null,seq__23351_23355);
if(temp__4425__auto___23364){
var seq__23351_23365__$1 = temp__4425__auto___23364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23351_23365__$1)){
var c__17655__auto___23366 = cljs.core.chunk_first.call(null,seq__23351_23365__$1);
var G__23367 = cljs.core.chunk_rest.call(null,seq__23351_23365__$1);
var G__23368 = c__17655__auto___23366;
var G__23369 = cljs.core.count.call(null,c__17655__auto___23366);
var G__23370 = (0);
seq__23351_23355 = G__23367;
chunk__23352_23356 = G__23368;
count__23353_23357 = G__23369;
i__23354_23358 = G__23370;
continue;
} else {
var f_23371 = cljs.core.first.call(null,seq__23351_23365__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23371);

var G__23372 = cljs.core.next.call(null,seq__23351_23365__$1);
var G__23373 = null;
var G__23374 = (0);
var G__23375 = (0);
seq__23351_23355 = G__23372;
chunk__23352_23356 = G__23373;
count__23353_23357 = G__23374;
i__23354_23358 = G__23375;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23349,map__23349__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23349,map__23349__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1454142152468