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
var or__16866__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16866__auto__){
return or__16866__auto__;
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
var or__16866__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22388_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22388_SHARP_));
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
var seq__22393 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22394 = null;
var count__22395 = (0);
var i__22396 = (0);
while(true){
if((i__22396 < count__22395)){
var n = cljs.core._nth.call(null,chunk__22394,i__22396);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22397 = seq__22393;
var G__22398 = chunk__22394;
var G__22399 = count__22395;
var G__22400 = (i__22396 + (1));
seq__22393 = G__22397;
chunk__22394 = G__22398;
count__22395 = G__22399;
i__22396 = G__22400;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22393);
if(temp__4425__auto__){
var seq__22393__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22393__$1)){
var c__17669__auto__ = cljs.core.chunk_first.call(null,seq__22393__$1);
var G__22401 = cljs.core.chunk_rest.call(null,seq__22393__$1);
var G__22402 = c__17669__auto__;
var G__22403 = cljs.core.count.call(null,c__17669__auto__);
var G__22404 = (0);
seq__22393 = G__22401;
chunk__22394 = G__22402;
count__22395 = G__22403;
i__22396 = G__22404;
continue;
} else {
var n = cljs.core.first.call(null,seq__22393__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22405 = cljs.core.next.call(null,seq__22393__$1);
var G__22406 = null;
var G__22407 = (0);
var G__22408 = (0);
seq__22393 = G__22405;
chunk__22394 = G__22406;
count__22395 = G__22407;
i__22396 = G__22408;
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

var seq__22447_22454 = cljs.core.seq.call(null,deps);
var chunk__22448_22455 = null;
var count__22449_22456 = (0);
var i__22450_22457 = (0);
while(true){
if((i__22450_22457 < count__22449_22456)){
var dep_22458 = cljs.core._nth.call(null,chunk__22448_22455,i__22450_22457);
topo_sort_helper_STAR_.call(null,dep_22458,(depth + (1)),state);

var G__22459 = seq__22447_22454;
var G__22460 = chunk__22448_22455;
var G__22461 = count__22449_22456;
var G__22462 = (i__22450_22457 + (1));
seq__22447_22454 = G__22459;
chunk__22448_22455 = G__22460;
count__22449_22456 = G__22461;
i__22450_22457 = G__22462;
continue;
} else {
var temp__4425__auto___22463 = cljs.core.seq.call(null,seq__22447_22454);
if(temp__4425__auto___22463){
var seq__22447_22464__$1 = temp__4425__auto___22463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22447_22464__$1)){
var c__17669__auto___22465 = cljs.core.chunk_first.call(null,seq__22447_22464__$1);
var G__22466 = cljs.core.chunk_rest.call(null,seq__22447_22464__$1);
var G__22467 = c__17669__auto___22465;
var G__22468 = cljs.core.count.call(null,c__17669__auto___22465);
var G__22469 = (0);
seq__22447_22454 = G__22466;
chunk__22448_22455 = G__22467;
count__22449_22456 = G__22468;
i__22450_22457 = G__22469;
continue;
} else {
var dep_22470 = cljs.core.first.call(null,seq__22447_22464__$1);
topo_sort_helper_STAR_.call(null,dep_22470,(depth + (1)),state);

var G__22471 = cljs.core.next.call(null,seq__22447_22464__$1);
var G__22472 = null;
var G__22473 = (0);
var G__22474 = (0);
seq__22447_22454 = G__22471;
chunk__22448_22455 = G__22472;
count__22449_22456 = G__22473;
i__22450_22457 = G__22474;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22451){
var vec__22453 = p__22451;
var x = cljs.core.nth.call(null,vec__22453,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22453,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22453,x,xs,get_deps__$1){
return (function (p1__22409_SHARP_){
return clojure.set.difference.call(null,p1__22409_SHARP_,x);
});})(vec__22453,x,xs,get_deps__$1))
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
var seq__22487 = cljs.core.seq.call(null,provides);
var chunk__22488 = null;
var count__22489 = (0);
var i__22490 = (0);
while(true){
if((i__22490 < count__22489)){
var prov = cljs.core._nth.call(null,chunk__22488,i__22490);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22491_22499 = cljs.core.seq.call(null,requires);
var chunk__22492_22500 = null;
var count__22493_22501 = (0);
var i__22494_22502 = (0);
while(true){
if((i__22494_22502 < count__22493_22501)){
var req_22503 = cljs.core._nth.call(null,chunk__22492_22500,i__22494_22502);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22503,prov);

var G__22504 = seq__22491_22499;
var G__22505 = chunk__22492_22500;
var G__22506 = count__22493_22501;
var G__22507 = (i__22494_22502 + (1));
seq__22491_22499 = G__22504;
chunk__22492_22500 = G__22505;
count__22493_22501 = G__22506;
i__22494_22502 = G__22507;
continue;
} else {
var temp__4425__auto___22508 = cljs.core.seq.call(null,seq__22491_22499);
if(temp__4425__auto___22508){
var seq__22491_22509__$1 = temp__4425__auto___22508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22491_22509__$1)){
var c__17669__auto___22510 = cljs.core.chunk_first.call(null,seq__22491_22509__$1);
var G__22511 = cljs.core.chunk_rest.call(null,seq__22491_22509__$1);
var G__22512 = c__17669__auto___22510;
var G__22513 = cljs.core.count.call(null,c__17669__auto___22510);
var G__22514 = (0);
seq__22491_22499 = G__22511;
chunk__22492_22500 = G__22512;
count__22493_22501 = G__22513;
i__22494_22502 = G__22514;
continue;
} else {
var req_22515 = cljs.core.first.call(null,seq__22491_22509__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22515,prov);

var G__22516 = cljs.core.next.call(null,seq__22491_22509__$1);
var G__22517 = null;
var G__22518 = (0);
var G__22519 = (0);
seq__22491_22499 = G__22516;
chunk__22492_22500 = G__22517;
count__22493_22501 = G__22518;
i__22494_22502 = G__22519;
continue;
}
} else {
}
}
break;
}

var G__22520 = seq__22487;
var G__22521 = chunk__22488;
var G__22522 = count__22489;
var G__22523 = (i__22490 + (1));
seq__22487 = G__22520;
chunk__22488 = G__22521;
count__22489 = G__22522;
i__22490 = G__22523;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22487);
if(temp__4425__auto__){
var seq__22487__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22487__$1)){
var c__17669__auto__ = cljs.core.chunk_first.call(null,seq__22487__$1);
var G__22524 = cljs.core.chunk_rest.call(null,seq__22487__$1);
var G__22525 = c__17669__auto__;
var G__22526 = cljs.core.count.call(null,c__17669__auto__);
var G__22527 = (0);
seq__22487 = G__22524;
chunk__22488 = G__22525;
count__22489 = G__22526;
i__22490 = G__22527;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22487__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22495_22528 = cljs.core.seq.call(null,requires);
var chunk__22496_22529 = null;
var count__22497_22530 = (0);
var i__22498_22531 = (0);
while(true){
if((i__22498_22531 < count__22497_22530)){
var req_22532 = cljs.core._nth.call(null,chunk__22496_22529,i__22498_22531);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22532,prov);

var G__22533 = seq__22495_22528;
var G__22534 = chunk__22496_22529;
var G__22535 = count__22497_22530;
var G__22536 = (i__22498_22531 + (1));
seq__22495_22528 = G__22533;
chunk__22496_22529 = G__22534;
count__22497_22530 = G__22535;
i__22498_22531 = G__22536;
continue;
} else {
var temp__4425__auto___22537__$1 = cljs.core.seq.call(null,seq__22495_22528);
if(temp__4425__auto___22537__$1){
var seq__22495_22538__$1 = temp__4425__auto___22537__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22495_22538__$1)){
var c__17669__auto___22539 = cljs.core.chunk_first.call(null,seq__22495_22538__$1);
var G__22540 = cljs.core.chunk_rest.call(null,seq__22495_22538__$1);
var G__22541 = c__17669__auto___22539;
var G__22542 = cljs.core.count.call(null,c__17669__auto___22539);
var G__22543 = (0);
seq__22495_22528 = G__22540;
chunk__22496_22529 = G__22541;
count__22497_22530 = G__22542;
i__22498_22531 = G__22543;
continue;
} else {
var req_22544 = cljs.core.first.call(null,seq__22495_22538__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22544,prov);

var G__22545 = cljs.core.next.call(null,seq__22495_22538__$1);
var G__22546 = null;
var G__22547 = (0);
var G__22548 = (0);
seq__22495_22528 = G__22545;
chunk__22496_22529 = G__22546;
count__22497_22530 = G__22547;
i__22498_22531 = G__22548;
continue;
}
} else {
}
}
break;
}

var G__22549 = cljs.core.next.call(null,seq__22487__$1);
var G__22550 = null;
var G__22551 = (0);
var G__22552 = (0);
seq__22487 = G__22549;
chunk__22488 = G__22550;
count__22489 = G__22551;
i__22490 = G__22552;
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
var seq__22557_22561 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22558_22562 = null;
var count__22559_22563 = (0);
var i__22560_22564 = (0);
while(true){
if((i__22560_22564 < count__22559_22563)){
var ns_22565 = cljs.core._nth.call(null,chunk__22558_22562,i__22560_22564);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22565);

var G__22566 = seq__22557_22561;
var G__22567 = chunk__22558_22562;
var G__22568 = count__22559_22563;
var G__22569 = (i__22560_22564 + (1));
seq__22557_22561 = G__22566;
chunk__22558_22562 = G__22567;
count__22559_22563 = G__22568;
i__22560_22564 = G__22569;
continue;
} else {
var temp__4425__auto___22570 = cljs.core.seq.call(null,seq__22557_22561);
if(temp__4425__auto___22570){
var seq__22557_22571__$1 = temp__4425__auto___22570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22557_22571__$1)){
var c__17669__auto___22572 = cljs.core.chunk_first.call(null,seq__22557_22571__$1);
var G__22573 = cljs.core.chunk_rest.call(null,seq__22557_22571__$1);
var G__22574 = c__17669__auto___22572;
var G__22575 = cljs.core.count.call(null,c__17669__auto___22572);
var G__22576 = (0);
seq__22557_22561 = G__22573;
chunk__22558_22562 = G__22574;
count__22559_22563 = G__22575;
i__22560_22564 = G__22576;
continue;
} else {
var ns_22577 = cljs.core.first.call(null,seq__22557_22571__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22577);

var G__22578 = cljs.core.next.call(null,seq__22557_22571__$1);
var G__22579 = null;
var G__22580 = (0);
var G__22581 = (0);
seq__22557_22561 = G__22578;
chunk__22558_22562 = G__22579;
count__22559_22563 = G__22580;
i__22560_22564 = G__22581;
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
goog.require_figwheel_backup_ = (function (){var or__16866__auto__ = goog.require__;
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
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
var G__22582__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22583__i = 0, G__22583__a = new Array(arguments.length -  0);
while (G__22583__i < G__22583__a.length) {G__22583__a[G__22583__i] = arguments[G__22583__i + 0]; ++G__22583__i;}
  args = new cljs.core.IndexedSeq(G__22583__a,0);
} 
return G__22582__delegate.call(this,args);};
G__22582.cljs$lang$maxFixedArity = 0;
G__22582.cljs$lang$applyTo = (function (arglist__22584){
var args = cljs.core.seq(arglist__22584);
return G__22582__delegate(args);
});
G__22582.cljs$core$IFn$_invoke$arity$variadic = G__22582__delegate;
return G__22582;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22586 = cljs.core._EQ_;
var expr__22587 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22586.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22587))){
var path_parts = ((function (pred__22586,expr__22587){
return (function (p1__22585_SHARP_){
return clojure.string.split.call(null,p1__22585_SHARP_,/[\/\\]/);
});})(pred__22586,expr__22587))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22586,expr__22587){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22589){if((e22589 instanceof Error)){
var e = e22589;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22589;

}
}})());
});
;})(path_parts,sep,root,pred__22586,expr__22587))
} else {
if(cljs.core.truth_(pred__22586.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22587))){
return ((function (pred__22586,expr__22587){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22586,expr__22587){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22586,expr__22587))
);

return deferred.addErrback(((function (deferred,pred__22586,expr__22587){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22586,expr__22587))
);
});
;})(pred__22586,expr__22587))
} else {
return ((function (pred__22586,expr__22587){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22586,expr__22587))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22590,callback){
var map__22593 = p__22590;
var map__22593__$1 = ((((!((map__22593 == null)))?((((map__22593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22593):map__22593);
var file_msg = map__22593__$1;
var request_url = cljs.core.get.call(null,map__22593__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22593,map__22593__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22593,map__22593__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19494__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto__){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto__){
return (function (state_22617){
var state_val_22618 = (state_22617[(1)]);
if((state_val_22618 === (7))){
var inst_22613 = (state_22617[(2)]);
var state_22617__$1 = state_22617;
var statearr_22619_22639 = state_22617__$1;
(statearr_22619_22639[(2)] = inst_22613);

(statearr_22619_22639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (1))){
var state_22617__$1 = state_22617;
var statearr_22620_22640 = state_22617__$1;
(statearr_22620_22640[(2)] = null);

(statearr_22620_22640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (4))){
var inst_22597 = (state_22617[(7)]);
var inst_22597__$1 = (state_22617[(2)]);
var state_22617__$1 = (function (){var statearr_22621 = state_22617;
(statearr_22621[(7)] = inst_22597__$1);

return statearr_22621;
})();
if(cljs.core.truth_(inst_22597__$1)){
var statearr_22622_22641 = state_22617__$1;
(statearr_22622_22641[(1)] = (5));

} else {
var statearr_22623_22642 = state_22617__$1;
(statearr_22623_22642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (6))){
var state_22617__$1 = state_22617;
var statearr_22624_22643 = state_22617__$1;
(statearr_22624_22643[(2)] = null);

(statearr_22624_22643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (3))){
var inst_22615 = (state_22617[(2)]);
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22617__$1,inst_22615);
} else {
if((state_val_22618 === (2))){
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22617__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22618 === (11))){
var inst_22609 = (state_22617[(2)]);
var state_22617__$1 = (function (){var statearr_22625 = state_22617;
(statearr_22625[(8)] = inst_22609);

return statearr_22625;
})();
var statearr_22626_22644 = state_22617__$1;
(statearr_22626_22644[(2)] = null);

(statearr_22626_22644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (9))){
var inst_22601 = (state_22617[(9)]);
var inst_22603 = (state_22617[(10)]);
var inst_22605 = inst_22603.call(null,inst_22601);
var state_22617__$1 = state_22617;
var statearr_22627_22645 = state_22617__$1;
(statearr_22627_22645[(2)] = inst_22605);

(statearr_22627_22645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (5))){
var inst_22597 = (state_22617[(7)]);
var inst_22599 = figwheel.client.file_reloading.blocking_load.call(null,inst_22597);
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22617__$1,(8),inst_22599);
} else {
if((state_val_22618 === (10))){
var inst_22601 = (state_22617[(9)]);
var inst_22607 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22601);
var state_22617__$1 = state_22617;
var statearr_22628_22646 = state_22617__$1;
(statearr_22628_22646[(2)] = inst_22607);

(statearr_22628_22646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (8))){
var inst_22597 = (state_22617[(7)]);
var inst_22603 = (state_22617[(10)]);
var inst_22601 = (state_22617[(2)]);
var inst_22602 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22603__$1 = cljs.core.get.call(null,inst_22602,inst_22597);
var state_22617__$1 = (function (){var statearr_22629 = state_22617;
(statearr_22629[(9)] = inst_22601);

(statearr_22629[(10)] = inst_22603__$1);

return statearr_22629;
})();
if(cljs.core.truth_(inst_22603__$1)){
var statearr_22630_22647 = state_22617__$1;
(statearr_22630_22647[(1)] = (9));

} else {
var statearr_22631_22648 = state_22617__$1;
(statearr_22631_22648[(1)] = (10));

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
});})(c__19494__auto__))
;
return ((function (switch__19382__auto__,c__19494__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19383__auto__ = null;
var figwheel$client$file_reloading$state_machine__19383__auto____0 = (function (){
var statearr_22635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22635[(0)] = figwheel$client$file_reloading$state_machine__19383__auto__);

(statearr_22635[(1)] = (1));

return statearr_22635;
});
var figwheel$client$file_reloading$state_machine__19383__auto____1 = (function (state_22617){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_22617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e22636){if((e22636 instanceof Object)){
var ex__19386__auto__ = e22636;
var statearr_22637_22649 = state_22617;
(statearr_22637_22649[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22650 = state_22617;
state_22617 = G__22650;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19383__auto__ = function(state_22617){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19383__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19383__auto____1.call(this,state_22617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19383__auto____0;
figwheel$client$file_reloading$state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19383__auto____1;
return figwheel$client$file_reloading$state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto__))
})();
var state__19496__auto__ = (function (){var statearr_22638 = f__19495__auto__.call(null);
(statearr_22638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto__);

return statearr_22638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto__))
);

return c__19494__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22651,callback){
var map__22654 = p__22651;
var map__22654__$1 = ((((!((map__22654 == null)))?((((map__22654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22654):map__22654);
var file_msg = map__22654__$1;
var namespace = cljs.core.get.call(null,map__22654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22654,map__22654__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22654,map__22654__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22656){
var map__22659 = p__22656;
var map__22659__$1 = ((((!((map__22659 == null)))?((((map__22659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22659):map__22659);
var file_msg = map__22659__$1;
var namespace = cljs.core.get.call(null,map__22659__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16854__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16854__auto__){
var or__16866__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
var or__16866__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16866__auto____$1)){
return or__16866__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16854__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22661,callback){
var map__22664 = p__22661;
var map__22664__$1 = ((((!((map__22664 == null)))?((((map__22664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22664):map__22664);
var file_msg = map__22664__$1;
var request_url = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19494__auto___22752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___22752,out){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___22752,out){
return (function (state_22734){
var state_val_22735 = (state_22734[(1)]);
if((state_val_22735 === (1))){
var inst_22712 = cljs.core.nth.call(null,files,(0),null);
var inst_22713 = cljs.core.nthnext.call(null,files,(1));
var inst_22714 = files;
var state_22734__$1 = (function (){var statearr_22736 = state_22734;
(statearr_22736[(7)] = inst_22713);

(statearr_22736[(8)] = inst_22714);

(statearr_22736[(9)] = inst_22712);

return statearr_22736;
})();
var statearr_22737_22753 = state_22734__$1;
(statearr_22737_22753[(2)] = null);

(statearr_22737_22753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (2))){
var inst_22717 = (state_22734[(10)]);
var inst_22714 = (state_22734[(8)]);
var inst_22717__$1 = cljs.core.nth.call(null,inst_22714,(0),null);
var inst_22718 = cljs.core.nthnext.call(null,inst_22714,(1));
var inst_22719 = (inst_22717__$1 == null);
var inst_22720 = cljs.core.not.call(null,inst_22719);
var state_22734__$1 = (function (){var statearr_22738 = state_22734;
(statearr_22738[(11)] = inst_22718);

(statearr_22738[(10)] = inst_22717__$1);

return statearr_22738;
})();
if(inst_22720){
var statearr_22739_22754 = state_22734__$1;
(statearr_22739_22754[(1)] = (4));

} else {
var statearr_22740_22755 = state_22734__$1;
(statearr_22740_22755[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (3))){
var inst_22732 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22734__$1,inst_22732);
} else {
if((state_val_22735 === (4))){
var inst_22717 = (state_22734[(10)]);
var inst_22722 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22717);
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22734__$1,(7),inst_22722);
} else {
if((state_val_22735 === (5))){
var inst_22728 = cljs.core.async.close_BANG_.call(null,out);
var state_22734__$1 = state_22734;
var statearr_22741_22756 = state_22734__$1;
(statearr_22741_22756[(2)] = inst_22728);

(statearr_22741_22756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (6))){
var inst_22730 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
var statearr_22742_22757 = state_22734__$1;
(statearr_22742_22757[(2)] = inst_22730);

(statearr_22742_22757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (7))){
var inst_22718 = (state_22734[(11)]);
var inst_22724 = (state_22734[(2)]);
var inst_22725 = cljs.core.async.put_BANG_.call(null,out,inst_22724);
var inst_22714 = inst_22718;
var state_22734__$1 = (function (){var statearr_22743 = state_22734;
(statearr_22743[(12)] = inst_22725);

(statearr_22743[(8)] = inst_22714);

return statearr_22743;
})();
var statearr_22744_22758 = state_22734__$1;
(statearr_22744_22758[(2)] = null);

(statearr_22744_22758[(1)] = (2));


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
});})(c__19494__auto___22752,out))
;
return ((function (switch__19382__auto__,c__19494__auto___22752,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto____0 = (function (){
var statearr_22748 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22748[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto__);

(statearr_22748[(1)] = (1));

return statearr_22748;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto____1 = (function (state_22734){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_22734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e22749){if((e22749 instanceof Object)){
var ex__19386__auto__ = e22749;
var statearr_22750_22759 = state_22734;
(statearr_22750_22759[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22760 = state_22734;
state_22734 = G__22760;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto__ = function(state_22734){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto____1.call(this,state_22734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___22752,out))
})();
var state__19496__auto__ = (function (){var statearr_22751 = f__19495__auto__.call(null);
(statearr_22751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___22752);

return statearr_22751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___22752,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22761,opts){
var map__22765 = p__22761;
var map__22765__$1 = ((((!((map__22765 == null)))?((((map__22765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22765):map__22765);
var eval_body__$1 = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16854__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16854__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16854__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22767){var e = e22767;
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
return (function (p1__22768_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22768_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__22773){
var vec__22774 = p__22773;
var k = cljs.core.nth.call(null,vec__22774,(0),null);
var v = cljs.core.nth.call(null,vec__22774,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22775){
var vec__22776 = p__22775;
var k = cljs.core.nth.call(null,vec__22776,(0),null);
var v = cljs.core.nth.call(null,vec__22776,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22780,p__22781){
var map__23028 = p__22780;
var map__23028__$1 = ((((!((map__23028 == null)))?((((map__23028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23028):map__23028);
var opts = map__23028__$1;
var before_jsload = cljs.core.get.call(null,map__23028__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23028__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23028__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23029 = p__22781;
var map__23029__$1 = ((((!((map__23029 == null)))?((((map__23029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23029):map__23029);
var msg = map__23029__$1;
var files = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19494__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23182){
var state_val_23183 = (state_23182[(1)]);
if((state_val_23183 === (7))){
var inst_23045 = (state_23182[(7)]);
var inst_23044 = (state_23182[(8)]);
var inst_23043 = (state_23182[(9)]);
var inst_23046 = (state_23182[(10)]);
var inst_23051 = cljs.core._nth.call(null,inst_23044,inst_23046);
var inst_23052 = figwheel.client.file_reloading.eval_body.call(null,inst_23051,opts);
var inst_23053 = (inst_23046 + (1));
var tmp23184 = inst_23045;
var tmp23185 = inst_23044;
var tmp23186 = inst_23043;
var inst_23043__$1 = tmp23186;
var inst_23044__$1 = tmp23185;
var inst_23045__$1 = tmp23184;
var inst_23046__$1 = inst_23053;
var state_23182__$1 = (function (){var statearr_23187 = state_23182;
(statearr_23187[(7)] = inst_23045__$1);

(statearr_23187[(8)] = inst_23044__$1);

(statearr_23187[(11)] = inst_23052);

(statearr_23187[(9)] = inst_23043__$1);

(statearr_23187[(10)] = inst_23046__$1);

return statearr_23187;
})();
var statearr_23188_23274 = state_23182__$1;
(statearr_23188_23274[(2)] = null);

(statearr_23188_23274[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (20))){
var inst_23086 = (state_23182[(12)]);
var inst_23094 = figwheel.client.file_reloading.sort_files.call(null,inst_23086);
var state_23182__$1 = state_23182;
var statearr_23189_23275 = state_23182__$1;
(statearr_23189_23275[(2)] = inst_23094);

(statearr_23189_23275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (27))){
var state_23182__$1 = state_23182;
var statearr_23190_23276 = state_23182__$1;
(statearr_23190_23276[(2)] = null);

(statearr_23190_23276[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (1))){
var inst_23035 = (state_23182[(13)]);
var inst_23032 = before_jsload.call(null,files);
var inst_23033 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23034 = (function (){return ((function (inst_23035,inst_23032,inst_23033,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22777_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22777_SHARP_);
});
;})(inst_23035,inst_23032,inst_23033,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23035__$1 = cljs.core.filter.call(null,inst_23034,files);
var inst_23036 = cljs.core.not_empty.call(null,inst_23035__$1);
var state_23182__$1 = (function (){var statearr_23191 = state_23182;
(statearr_23191[(14)] = inst_23033);

(statearr_23191[(15)] = inst_23032);

(statearr_23191[(13)] = inst_23035__$1);

return statearr_23191;
})();
if(cljs.core.truth_(inst_23036)){
var statearr_23192_23277 = state_23182__$1;
(statearr_23192_23277[(1)] = (2));

} else {
var statearr_23193_23278 = state_23182__$1;
(statearr_23193_23278[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (24))){
var state_23182__$1 = state_23182;
var statearr_23194_23279 = state_23182__$1;
(statearr_23194_23279[(2)] = null);

(statearr_23194_23279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (39))){
var inst_23136 = (state_23182[(16)]);
var state_23182__$1 = state_23182;
var statearr_23195_23280 = state_23182__$1;
(statearr_23195_23280[(2)] = inst_23136);

(statearr_23195_23280[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (46))){
var inst_23177 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
var statearr_23196_23281 = state_23182__$1;
(statearr_23196_23281[(2)] = inst_23177);

(statearr_23196_23281[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (4))){
var inst_23080 = (state_23182[(2)]);
var inst_23081 = cljs.core.List.EMPTY;
var inst_23082 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23081);
var inst_23083 = (function (){return ((function (inst_23080,inst_23081,inst_23082,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22778_SHARP_){
var and__16854__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22778_SHARP_);
if(cljs.core.truth_(and__16854__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22778_SHARP_));
} else {
return and__16854__auto__;
}
});
;})(inst_23080,inst_23081,inst_23082,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23084 = cljs.core.filter.call(null,inst_23083,files);
var inst_23085 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23086 = cljs.core.concat.call(null,inst_23084,inst_23085);
var state_23182__$1 = (function (){var statearr_23197 = state_23182;
(statearr_23197[(12)] = inst_23086);

(statearr_23197[(17)] = inst_23080);

(statearr_23197[(18)] = inst_23082);

return statearr_23197;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23198_23282 = state_23182__$1;
(statearr_23198_23282[(1)] = (16));

} else {
var statearr_23199_23283 = state_23182__$1;
(statearr_23199_23283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (15))){
var inst_23070 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
var statearr_23200_23284 = state_23182__$1;
(statearr_23200_23284[(2)] = inst_23070);

(statearr_23200_23284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (21))){
var inst_23096 = (state_23182[(19)]);
var inst_23096__$1 = (state_23182[(2)]);
var inst_23097 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23096__$1);
var state_23182__$1 = (function (){var statearr_23201 = state_23182;
(statearr_23201[(19)] = inst_23096__$1);

return statearr_23201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23182__$1,(22),inst_23097);
} else {
if((state_val_23183 === (31))){
var inst_23180 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23182__$1,inst_23180);
} else {
if((state_val_23183 === (32))){
var inst_23136 = (state_23182[(16)]);
var inst_23141 = inst_23136.cljs$lang$protocol_mask$partition0$;
var inst_23142 = (inst_23141 & (64));
var inst_23143 = inst_23136.cljs$core$ISeq$;
var inst_23144 = (inst_23142) || (inst_23143);
var state_23182__$1 = state_23182;
if(cljs.core.truth_(inst_23144)){
var statearr_23202_23285 = state_23182__$1;
(statearr_23202_23285[(1)] = (35));

} else {
var statearr_23203_23286 = state_23182__$1;
(statearr_23203_23286[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (40))){
var inst_23157 = (state_23182[(20)]);
var inst_23156 = (state_23182[(2)]);
var inst_23157__$1 = cljs.core.get.call(null,inst_23156,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23158 = cljs.core.get.call(null,inst_23156,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23159 = cljs.core.not_empty.call(null,inst_23157__$1);
var state_23182__$1 = (function (){var statearr_23204 = state_23182;
(statearr_23204[(21)] = inst_23158);

(statearr_23204[(20)] = inst_23157__$1);

return statearr_23204;
})();
if(cljs.core.truth_(inst_23159)){
var statearr_23205_23287 = state_23182__$1;
(statearr_23205_23287[(1)] = (41));

} else {
var statearr_23206_23288 = state_23182__$1;
(statearr_23206_23288[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (33))){
var state_23182__$1 = state_23182;
var statearr_23207_23289 = state_23182__$1;
(statearr_23207_23289[(2)] = false);

(statearr_23207_23289[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (13))){
var inst_23056 = (state_23182[(22)]);
var inst_23060 = cljs.core.chunk_first.call(null,inst_23056);
var inst_23061 = cljs.core.chunk_rest.call(null,inst_23056);
var inst_23062 = cljs.core.count.call(null,inst_23060);
var inst_23043 = inst_23061;
var inst_23044 = inst_23060;
var inst_23045 = inst_23062;
var inst_23046 = (0);
var state_23182__$1 = (function (){var statearr_23208 = state_23182;
(statearr_23208[(7)] = inst_23045);

(statearr_23208[(8)] = inst_23044);

(statearr_23208[(9)] = inst_23043);

(statearr_23208[(10)] = inst_23046);

return statearr_23208;
})();
var statearr_23209_23290 = state_23182__$1;
(statearr_23209_23290[(2)] = null);

(statearr_23209_23290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (22))){
var inst_23099 = (state_23182[(23)]);
var inst_23096 = (state_23182[(19)]);
var inst_23104 = (state_23182[(24)]);
var inst_23100 = (state_23182[(25)]);
var inst_23099__$1 = (state_23182[(2)]);
var inst_23100__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23099__$1);
var inst_23101 = (function (){var all_files = inst_23096;
var res_SINGLEQUOTE_ = inst_23099__$1;
var res = inst_23100__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23099,inst_23096,inst_23104,inst_23100,inst_23099__$1,inst_23100__$1,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22779_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22779_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23099,inst_23096,inst_23104,inst_23100,inst_23099__$1,inst_23100__$1,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23102 = cljs.core.filter.call(null,inst_23101,inst_23099__$1);
var inst_23103 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23104__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23103);
var inst_23105 = cljs.core.not_empty.call(null,inst_23104__$1);
var state_23182__$1 = (function (){var statearr_23210 = state_23182;
(statearr_23210[(23)] = inst_23099__$1);

(statearr_23210[(24)] = inst_23104__$1);

(statearr_23210[(26)] = inst_23102);

(statearr_23210[(25)] = inst_23100__$1);

return statearr_23210;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23211_23291 = state_23182__$1;
(statearr_23211_23291[(1)] = (23));

} else {
var statearr_23212_23292 = state_23182__$1;
(statearr_23212_23292[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (36))){
var state_23182__$1 = state_23182;
var statearr_23213_23293 = state_23182__$1;
(statearr_23213_23293[(2)] = false);

(statearr_23213_23293[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (41))){
var inst_23157 = (state_23182[(20)]);
var inst_23161 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23162 = cljs.core.map.call(null,inst_23161,inst_23157);
var inst_23163 = cljs.core.pr_str.call(null,inst_23162);
var inst_23164 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23163)].join('');
var inst_23165 = figwheel.client.utils.log.call(null,inst_23164);
var state_23182__$1 = state_23182;
var statearr_23214_23294 = state_23182__$1;
(statearr_23214_23294[(2)] = inst_23165);

(statearr_23214_23294[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (43))){
var inst_23158 = (state_23182[(21)]);
var inst_23168 = (state_23182[(2)]);
var inst_23169 = cljs.core.not_empty.call(null,inst_23158);
var state_23182__$1 = (function (){var statearr_23215 = state_23182;
(statearr_23215[(27)] = inst_23168);

return statearr_23215;
})();
if(cljs.core.truth_(inst_23169)){
var statearr_23216_23295 = state_23182__$1;
(statearr_23216_23295[(1)] = (44));

} else {
var statearr_23217_23296 = state_23182__$1;
(statearr_23217_23296[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (29))){
var inst_23099 = (state_23182[(23)]);
var inst_23096 = (state_23182[(19)]);
var inst_23104 = (state_23182[(24)]);
var inst_23102 = (state_23182[(26)]);
var inst_23136 = (state_23182[(16)]);
var inst_23100 = (state_23182[(25)]);
var inst_23132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23135 = (function (){var all_files = inst_23096;
var res_SINGLEQUOTE_ = inst_23099;
var res = inst_23100;
var files_not_loaded = inst_23102;
var dependencies_that_loaded = inst_23104;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23104,inst_23102,inst_23136,inst_23100,inst_23132,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23134){
var map__23218 = p__23134;
var map__23218__$1 = ((((!((map__23218 == null)))?((((map__23218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23218):map__23218);
var namespace = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23104,inst_23102,inst_23136,inst_23100,inst_23132,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23136__$1 = cljs.core.group_by.call(null,inst_23135,inst_23102);
var inst_23138 = (inst_23136__$1 == null);
var inst_23139 = cljs.core.not.call(null,inst_23138);
var state_23182__$1 = (function (){var statearr_23220 = state_23182;
(statearr_23220[(16)] = inst_23136__$1);

(statearr_23220[(28)] = inst_23132);

return statearr_23220;
})();
if(inst_23139){
var statearr_23221_23297 = state_23182__$1;
(statearr_23221_23297[(1)] = (32));

} else {
var statearr_23222_23298 = state_23182__$1;
(statearr_23222_23298[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (44))){
var inst_23158 = (state_23182[(21)]);
var inst_23171 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23158);
var inst_23172 = cljs.core.pr_str.call(null,inst_23171);
var inst_23173 = [cljs.core.str("not required: "),cljs.core.str(inst_23172)].join('');
var inst_23174 = figwheel.client.utils.log.call(null,inst_23173);
var state_23182__$1 = state_23182;
var statearr_23223_23299 = state_23182__$1;
(statearr_23223_23299[(2)] = inst_23174);

(statearr_23223_23299[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (6))){
var inst_23077 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
var statearr_23224_23300 = state_23182__$1;
(statearr_23224_23300[(2)] = inst_23077);

(statearr_23224_23300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (28))){
var inst_23102 = (state_23182[(26)]);
var inst_23129 = (state_23182[(2)]);
var inst_23130 = cljs.core.not_empty.call(null,inst_23102);
var state_23182__$1 = (function (){var statearr_23225 = state_23182;
(statearr_23225[(29)] = inst_23129);

return statearr_23225;
})();
if(cljs.core.truth_(inst_23130)){
var statearr_23226_23301 = state_23182__$1;
(statearr_23226_23301[(1)] = (29));

} else {
var statearr_23227_23302 = state_23182__$1;
(statearr_23227_23302[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (25))){
var inst_23100 = (state_23182[(25)]);
var inst_23116 = (state_23182[(2)]);
var inst_23117 = cljs.core.not_empty.call(null,inst_23100);
var state_23182__$1 = (function (){var statearr_23228 = state_23182;
(statearr_23228[(30)] = inst_23116);

return statearr_23228;
})();
if(cljs.core.truth_(inst_23117)){
var statearr_23229_23303 = state_23182__$1;
(statearr_23229_23303[(1)] = (26));

} else {
var statearr_23230_23304 = state_23182__$1;
(statearr_23230_23304[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (34))){
var inst_23151 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
if(cljs.core.truth_(inst_23151)){
var statearr_23231_23305 = state_23182__$1;
(statearr_23231_23305[(1)] = (38));

} else {
var statearr_23232_23306 = state_23182__$1;
(statearr_23232_23306[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (17))){
var state_23182__$1 = state_23182;
var statearr_23233_23307 = state_23182__$1;
(statearr_23233_23307[(2)] = recompile_dependents);

(statearr_23233_23307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (3))){
var state_23182__$1 = state_23182;
var statearr_23234_23308 = state_23182__$1;
(statearr_23234_23308[(2)] = null);

(statearr_23234_23308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (12))){
var inst_23073 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
var statearr_23235_23309 = state_23182__$1;
(statearr_23235_23309[(2)] = inst_23073);

(statearr_23235_23309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (2))){
var inst_23035 = (state_23182[(13)]);
var inst_23042 = cljs.core.seq.call(null,inst_23035);
var inst_23043 = inst_23042;
var inst_23044 = null;
var inst_23045 = (0);
var inst_23046 = (0);
var state_23182__$1 = (function (){var statearr_23236 = state_23182;
(statearr_23236[(7)] = inst_23045);

(statearr_23236[(8)] = inst_23044);

(statearr_23236[(9)] = inst_23043);

(statearr_23236[(10)] = inst_23046);

return statearr_23236;
})();
var statearr_23237_23310 = state_23182__$1;
(statearr_23237_23310[(2)] = null);

(statearr_23237_23310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (23))){
var inst_23099 = (state_23182[(23)]);
var inst_23096 = (state_23182[(19)]);
var inst_23104 = (state_23182[(24)]);
var inst_23102 = (state_23182[(26)]);
var inst_23100 = (state_23182[(25)]);
var inst_23107 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23109 = (function (){var all_files = inst_23096;
var res_SINGLEQUOTE_ = inst_23099;
var res = inst_23100;
var files_not_loaded = inst_23102;
var dependencies_that_loaded = inst_23104;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23104,inst_23102,inst_23100,inst_23107,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23108){
var map__23238 = p__23108;
var map__23238__$1 = ((((!((map__23238 == null)))?((((map__23238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23238):map__23238);
var request_url = cljs.core.get.call(null,map__23238__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23104,inst_23102,inst_23100,inst_23107,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23110 = cljs.core.reverse.call(null,inst_23104);
var inst_23111 = cljs.core.map.call(null,inst_23109,inst_23110);
var inst_23112 = cljs.core.pr_str.call(null,inst_23111);
var inst_23113 = figwheel.client.utils.log.call(null,inst_23112);
var state_23182__$1 = (function (){var statearr_23240 = state_23182;
(statearr_23240[(31)] = inst_23107);

return statearr_23240;
})();
var statearr_23241_23311 = state_23182__$1;
(statearr_23241_23311[(2)] = inst_23113);

(statearr_23241_23311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (35))){
var state_23182__$1 = state_23182;
var statearr_23242_23312 = state_23182__$1;
(statearr_23242_23312[(2)] = true);

(statearr_23242_23312[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (19))){
var inst_23086 = (state_23182[(12)]);
var inst_23092 = figwheel.client.file_reloading.expand_files.call(null,inst_23086);
var state_23182__$1 = state_23182;
var statearr_23243_23313 = state_23182__$1;
(statearr_23243_23313[(2)] = inst_23092);

(statearr_23243_23313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (11))){
var state_23182__$1 = state_23182;
var statearr_23244_23314 = state_23182__$1;
(statearr_23244_23314[(2)] = null);

(statearr_23244_23314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (9))){
var inst_23075 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
var statearr_23245_23315 = state_23182__$1;
(statearr_23245_23315[(2)] = inst_23075);

(statearr_23245_23315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (5))){
var inst_23045 = (state_23182[(7)]);
var inst_23046 = (state_23182[(10)]);
var inst_23048 = (inst_23046 < inst_23045);
var inst_23049 = inst_23048;
var state_23182__$1 = state_23182;
if(cljs.core.truth_(inst_23049)){
var statearr_23246_23316 = state_23182__$1;
(statearr_23246_23316[(1)] = (7));

} else {
var statearr_23247_23317 = state_23182__$1;
(statearr_23247_23317[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (14))){
var inst_23056 = (state_23182[(22)]);
var inst_23065 = cljs.core.first.call(null,inst_23056);
var inst_23066 = figwheel.client.file_reloading.eval_body.call(null,inst_23065,opts);
var inst_23067 = cljs.core.next.call(null,inst_23056);
var inst_23043 = inst_23067;
var inst_23044 = null;
var inst_23045 = (0);
var inst_23046 = (0);
var state_23182__$1 = (function (){var statearr_23248 = state_23182;
(statearr_23248[(32)] = inst_23066);

(statearr_23248[(7)] = inst_23045);

(statearr_23248[(8)] = inst_23044);

(statearr_23248[(9)] = inst_23043);

(statearr_23248[(10)] = inst_23046);

return statearr_23248;
})();
var statearr_23249_23318 = state_23182__$1;
(statearr_23249_23318[(2)] = null);

(statearr_23249_23318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (45))){
var state_23182__$1 = state_23182;
var statearr_23250_23319 = state_23182__$1;
(statearr_23250_23319[(2)] = null);

(statearr_23250_23319[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (26))){
var inst_23099 = (state_23182[(23)]);
var inst_23096 = (state_23182[(19)]);
var inst_23104 = (state_23182[(24)]);
var inst_23102 = (state_23182[(26)]);
var inst_23100 = (state_23182[(25)]);
var inst_23119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23121 = (function (){var all_files = inst_23096;
var res_SINGLEQUOTE_ = inst_23099;
var res = inst_23100;
var files_not_loaded = inst_23102;
var dependencies_that_loaded = inst_23104;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23104,inst_23102,inst_23100,inst_23119,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23120){
var map__23251 = p__23120;
var map__23251__$1 = ((((!((map__23251 == null)))?((((map__23251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23251):map__23251);
var namespace = cljs.core.get.call(null,map__23251__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23104,inst_23102,inst_23100,inst_23119,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23122 = cljs.core.map.call(null,inst_23121,inst_23100);
var inst_23123 = cljs.core.pr_str.call(null,inst_23122);
var inst_23124 = figwheel.client.utils.log.call(null,inst_23123);
var inst_23125 = (function (){var all_files = inst_23096;
var res_SINGLEQUOTE_ = inst_23099;
var res = inst_23100;
var files_not_loaded = inst_23102;
var dependencies_that_loaded = inst_23104;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23104,inst_23102,inst_23100,inst_23119,inst_23121,inst_23122,inst_23123,inst_23124,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23104,inst_23102,inst_23100,inst_23119,inst_23121,inst_23122,inst_23123,inst_23124,state_val_23183,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23126 = setTimeout(inst_23125,(10));
var state_23182__$1 = (function (){var statearr_23253 = state_23182;
(statearr_23253[(33)] = inst_23124);

(statearr_23253[(34)] = inst_23119);

return statearr_23253;
})();
var statearr_23254_23320 = state_23182__$1;
(statearr_23254_23320[(2)] = inst_23126);

(statearr_23254_23320[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (16))){
var state_23182__$1 = state_23182;
var statearr_23255_23321 = state_23182__$1;
(statearr_23255_23321[(2)] = reload_dependents);

(statearr_23255_23321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (38))){
var inst_23136 = (state_23182[(16)]);
var inst_23153 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23136);
var state_23182__$1 = state_23182;
var statearr_23256_23322 = state_23182__$1;
(statearr_23256_23322[(2)] = inst_23153);

(statearr_23256_23322[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (30))){
var state_23182__$1 = state_23182;
var statearr_23257_23323 = state_23182__$1;
(statearr_23257_23323[(2)] = null);

(statearr_23257_23323[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (10))){
var inst_23056 = (state_23182[(22)]);
var inst_23058 = cljs.core.chunked_seq_QMARK_.call(null,inst_23056);
var state_23182__$1 = state_23182;
if(inst_23058){
var statearr_23258_23324 = state_23182__$1;
(statearr_23258_23324[(1)] = (13));

} else {
var statearr_23259_23325 = state_23182__$1;
(statearr_23259_23325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (18))){
var inst_23090 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
if(cljs.core.truth_(inst_23090)){
var statearr_23260_23326 = state_23182__$1;
(statearr_23260_23326[(1)] = (19));

} else {
var statearr_23261_23327 = state_23182__$1;
(statearr_23261_23327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (42))){
var state_23182__$1 = state_23182;
var statearr_23262_23328 = state_23182__$1;
(statearr_23262_23328[(2)] = null);

(statearr_23262_23328[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (37))){
var inst_23148 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
var statearr_23263_23329 = state_23182__$1;
(statearr_23263_23329[(2)] = inst_23148);

(statearr_23263_23329[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23183 === (8))){
var inst_23056 = (state_23182[(22)]);
var inst_23043 = (state_23182[(9)]);
var inst_23056__$1 = cljs.core.seq.call(null,inst_23043);
var state_23182__$1 = (function (){var statearr_23264 = state_23182;
(statearr_23264[(22)] = inst_23056__$1);

return statearr_23264;
})();
if(inst_23056__$1){
var statearr_23265_23330 = state_23182__$1;
(statearr_23265_23330[(1)] = (10));

} else {
var statearr_23266_23331 = state_23182__$1;
(statearr_23266_23331[(1)] = (11));

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
});})(c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19382__auto__,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto____0 = (function (){
var statearr_23270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23270[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto__);

(statearr_23270[(1)] = (1));

return statearr_23270;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto____1 = (function (state_23182){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_23182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e23271){if((e23271 instanceof Object)){
var ex__19386__auto__ = e23271;
var statearr_23272_23332 = state_23182;
(statearr_23272_23332[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23333 = state_23182;
state_23182 = G__23333;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto__ = function(state_23182){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto____1.call(this,state_23182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19496__auto__ = (function (){var statearr_23273 = f__19495__auto__.call(null);
(statearr_23273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto__);

return statearr_23273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto__,map__23028,map__23028__$1,opts,before_jsload,on_jsload,reload_dependents,map__23029,map__23029__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19494__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23336,link){
var map__23339 = p__23336;
var map__23339__$1 = ((((!((map__23339 == null)))?((((map__23339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23339):map__23339);
var file = cljs.core.get.call(null,map__23339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23339,map__23339__$1,file){
return (function (p1__23334_SHARP_,p2__23335_SHARP_){
if(cljs.core._EQ_.call(null,p1__23334_SHARP_,p2__23335_SHARP_)){
return p1__23334_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23339,map__23339__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23345){
var map__23346 = p__23345;
var map__23346__$1 = ((((!((map__23346 == null)))?((((map__23346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23346):map__23346);
var match_length = cljs.core.get.call(null,map__23346__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23346__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23341_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23341_SHARP_);
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
var args23348 = [];
var len__17924__auto___23351 = arguments.length;
var i__17925__auto___23352 = (0);
while(true){
if((i__17925__auto___23352 < len__17924__auto___23351)){
args23348.push((arguments[i__17925__auto___23352]));

var G__23353 = (i__17925__auto___23352 + (1));
i__17925__auto___23352 = G__23353;
continue;
} else {
}
break;
}

var G__23350 = args23348.length;
switch (G__23350) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23348.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23355_SHARP_,p2__23356_SHARP_){
return cljs.core.assoc.call(null,p1__23355_SHARP_,cljs.core.get.call(null,p2__23356_SHARP_,key),p2__23356_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23357){
var map__23360 = p__23357;
var map__23360__$1 = ((((!((map__23360 == null)))?((((map__23360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23360):map__23360);
var f_data = map__23360__$1;
var file = cljs.core.get.call(null,map__23360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23362,files_msg){
var map__23369 = p__23362;
var map__23369__$1 = ((((!((map__23369 == null)))?((((map__23369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23369):map__23369);
var opts = map__23369__$1;
var on_cssload = cljs.core.get.call(null,map__23369__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23371_23375 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23372_23376 = null;
var count__23373_23377 = (0);
var i__23374_23378 = (0);
while(true){
if((i__23374_23378 < count__23373_23377)){
var f_23379 = cljs.core._nth.call(null,chunk__23372_23376,i__23374_23378);
figwheel.client.file_reloading.reload_css_file.call(null,f_23379);

var G__23380 = seq__23371_23375;
var G__23381 = chunk__23372_23376;
var G__23382 = count__23373_23377;
var G__23383 = (i__23374_23378 + (1));
seq__23371_23375 = G__23380;
chunk__23372_23376 = G__23381;
count__23373_23377 = G__23382;
i__23374_23378 = G__23383;
continue;
} else {
var temp__4425__auto___23384 = cljs.core.seq.call(null,seq__23371_23375);
if(temp__4425__auto___23384){
var seq__23371_23385__$1 = temp__4425__auto___23384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23371_23385__$1)){
var c__17669__auto___23386 = cljs.core.chunk_first.call(null,seq__23371_23385__$1);
var G__23387 = cljs.core.chunk_rest.call(null,seq__23371_23385__$1);
var G__23388 = c__17669__auto___23386;
var G__23389 = cljs.core.count.call(null,c__17669__auto___23386);
var G__23390 = (0);
seq__23371_23375 = G__23387;
chunk__23372_23376 = G__23388;
count__23373_23377 = G__23389;
i__23374_23378 = G__23390;
continue;
} else {
var f_23391 = cljs.core.first.call(null,seq__23371_23385__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23391);

var G__23392 = cljs.core.next.call(null,seq__23371_23385__$1);
var G__23393 = null;
var G__23394 = (0);
var G__23395 = (0);
seq__23371_23375 = G__23392;
chunk__23372_23376 = G__23393;
count__23373_23377 = G__23394;
i__23374_23378 = G__23395;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23369,map__23369__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23369,map__23369__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1455734074569