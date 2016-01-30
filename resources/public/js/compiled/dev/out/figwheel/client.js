// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23811 = cljs.core._EQ_;
var expr__23812 = (function (){var or__16852__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23815){if((e23815 instanceof Error)){
var e = e23815;
return false;
} else {
throw e23815;

}
}})();
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23811.call(null,"true",expr__23812))){
return true;
} else {
if(cljs.core.truth_(pred__23811.call(null,"false",expr__23812))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23812)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23817){if((e23817 instanceof Error)){
var e = e23817;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23817;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17917__auto__ = [];
var len__17910__auto___23819 = arguments.length;
var i__17911__auto___23820 = (0);
while(true){
if((i__17911__auto___23820 < len__17910__auto___23819)){
args__17917__auto__.push((arguments[i__17911__auto___23820]));

var G__23821 = (i__17911__auto___23820 + (1));
i__17911__auto___23820 = G__23821;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23818){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23818));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23822){
var map__23825 = p__23822;
var map__23825__$1 = ((((!((map__23825 == null)))?((((map__23825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23825):map__23825);
var message = cljs.core.get.call(null,map__23825__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23825__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16852__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16840__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16840__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16840__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19474__auto___23987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___23987,ch){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___23987,ch){
return (function (state_23956){
var state_val_23957 = (state_23956[(1)]);
if((state_val_23957 === (7))){
var inst_23952 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23958_23988 = state_23956__$1;
(statearr_23958_23988[(2)] = inst_23952);

(statearr_23958_23988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (1))){
var state_23956__$1 = state_23956;
var statearr_23959_23989 = state_23956__$1;
(statearr_23959_23989[(2)] = null);

(statearr_23959_23989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (4))){
var inst_23909 = (state_23956[(7)]);
var inst_23909__$1 = (state_23956[(2)]);
var state_23956__$1 = (function (){var statearr_23960 = state_23956;
(statearr_23960[(7)] = inst_23909__$1);

return statearr_23960;
})();
if(cljs.core.truth_(inst_23909__$1)){
var statearr_23961_23990 = state_23956__$1;
(statearr_23961_23990[(1)] = (5));

} else {
var statearr_23962_23991 = state_23956__$1;
(statearr_23962_23991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (15))){
var inst_23916 = (state_23956[(8)]);
var inst_23931 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23916);
var inst_23932 = cljs.core.first.call(null,inst_23931);
var inst_23933 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23932);
var inst_23934 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23933)].join('');
var inst_23935 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23934);
var state_23956__$1 = state_23956;
var statearr_23963_23992 = state_23956__$1;
(statearr_23963_23992[(2)] = inst_23935);

(statearr_23963_23992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (13))){
var inst_23940 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23964_23993 = state_23956__$1;
(statearr_23964_23993[(2)] = inst_23940);

(statearr_23964_23993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (6))){
var state_23956__$1 = state_23956;
var statearr_23965_23994 = state_23956__$1;
(statearr_23965_23994[(2)] = null);

(statearr_23965_23994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (17))){
var inst_23938 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23966_23995 = state_23956__$1;
(statearr_23966_23995[(2)] = inst_23938);

(statearr_23966_23995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (3))){
var inst_23954 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23956__$1,inst_23954);
} else {
if((state_val_23957 === (12))){
var inst_23915 = (state_23956[(9)]);
var inst_23929 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23915,opts);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23929)){
var statearr_23967_23996 = state_23956__$1;
(statearr_23967_23996[(1)] = (15));

} else {
var statearr_23968_23997 = state_23956__$1;
(statearr_23968_23997[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (2))){
var state_23956__$1 = state_23956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23956__$1,(4),ch);
} else {
if((state_val_23957 === (11))){
var inst_23916 = (state_23956[(8)]);
var inst_23921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23922 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23916);
var inst_23923 = cljs.core.async.timeout.call(null,(1000));
var inst_23924 = [inst_23922,inst_23923];
var inst_23925 = (new cljs.core.PersistentVector(null,2,(5),inst_23921,inst_23924,null));
var state_23956__$1 = state_23956;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23956__$1,(14),inst_23925);
} else {
if((state_val_23957 === (9))){
var inst_23916 = (state_23956[(8)]);
var inst_23942 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23943 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23916);
var inst_23944 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23943);
var inst_23945 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23944)].join('');
var inst_23946 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23945);
var state_23956__$1 = (function (){var statearr_23969 = state_23956;
(statearr_23969[(10)] = inst_23942);

return statearr_23969;
})();
var statearr_23970_23998 = state_23956__$1;
(statearr_23970_23998[(2)] = inst_23946);

(statearr_23970_23998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (5))){
var inst_23909 = (state_23956[(7)]);
var inst_23911 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23912 = (new cljs.core.PersistentArrayMap(null,2,inst_23911,null));
var inst_23913 = (new cljs.core.PersistentHashSet(null,inst_23912,null));
var inst_23914 = figwheel.client.focus_msgs.call(null,inst_23913,inst_23909);
var inst_23915 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23914);
var inst_23916 = cljs.core.first.call(null,inst_23914);
var inst_23917 = figwheel.client.autoload_QMARK_.call(null);
var state_23956__$1 = (function (){var statearr_23971 = state_23956;
(statearr_23971[(8)] = inst_23916);

(statearr_23971[(9)] = inst_23915);

return statearr_23971;
})();
if(cljs.core.truth_(inst_23917)){
var statearr_23972_23999 = state_23956__$1;
(statearr_23972_23999[(1)] = (8));

} else {
var statearr_23973_24000 = state_23956__$1;
(statearr_23973_24000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (14))){
var inst_23927 = (state_23956[(2)]);
var state_23956__$1 = state_23956;
var statearr_23974_24001 = state_23956__$1;
(statearr_23974_24001[(2)] = inst_23927);

(statearr_23974_24001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (16))){
var state_23956__$1 = state_23956;
var statearr_23975_24002 = state_23956__$1;
(statearr_23975_24002[(2)] = null);

(statearr_23975_24002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (10))){
var inst_23948 = (state_23956[(2)]);
var state_23956__$1 = (function (){var statearr_23976 = state_23956;
(statearr_23976[(11)] = inst_23948);

return statearr_23976;
})();
var statearr_23977_24003 = state_23956__$1;
(statearr_23977_24003[(2)] = null);

(statearr_23977_24003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23957 === (8))){
var inst_23915 = (state_23956[(9)]);
var inst_23919 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23915,opts);
var state_23956__$1 = state_23956;
if(cljs.core.truth_(inst_23919)){
var statearr_23978_24004 = state_23956__$1;
(statearr_23978_24004[(1)] = (11));

} else {
var statearr_23979_24005 = state_23956__$1;
(statearr_23979_24005[(1)] = (12));

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
});})(c__19474__auto___23987,ch))
;
return ((function (switch__19362__auto__,c__19474__auto___23987,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19363__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19363__auto____0 = (function (){
var statearr_23983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23983[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19363__auto__);

(statearr_23983[(1)] = (1));

return statearr_23983;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19363__auto____1 = (function (state_23956){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_23956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e23984){if((e23984 instanceof Object)){
var ex__19366__auto__ = e23984;
var statearr_23985_24006 = state_23956;
(statearr_23985_24006[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24007 = state_23956;
state_23956 = G__24007;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19363__auto__ = function(state_23956){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19363__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19363__auto____1.call(this,state_23956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19363__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19363__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___23987,ch))
})();
var state__19476__auto__ = (function (){var statearr_23986 = f__19475__auto__.call(null);
(statearr_23986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___23987);

return statearr_23986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___23987,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24008_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24008_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24015 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24015){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24013 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24014 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24014;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24013;
}}catch (e24012){if((e24012 instanceof Error)){
var e = e24012;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24015], null));
} else {
var e = e24012;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24015))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24016){
var map__24023 = p__24016;
var map__24023__$1 = ((((!((map__24023 == null)))?((((map__24023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24023):map__24023);
var opts = map__24023__$1;
var build_id = cljs.core.get.call(null,map__24023__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24023,map__24023__$1,opts,build_id){
return (function (p__24025){
var vec__24026 = p__24025;
var map__24027 = cljs.core.nth.call(null,vec__24026,(0),null);
var map__24027__$1 = ((((!((map__24027 == null)))?((((map__24027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);
var msg = map__24027__$1;
var msg_name = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24026,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24026,map__24027,map__24027__$1,msg,msg_name,_,map__24023,map__24023__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24026,map__24027,map__24027__$1,msg,msg_name,_,map__24023,map__24023__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24023,map__24023__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24033){
var vec__24034 = p__24033;
var map__24035 = cljs.core.nth.call(null,vec__24034,(0),null);
var map__24035__$1 = ((((!((map__24035 == null)))?((((map__24035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24035):map__24035);
var msg = map__24035__$1;
var msg_name = cljs.core.get.call(null,map__24035__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24034,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24037){
var map__24047 = p__24037;
var map__24047__$1 = ((((!((map__24047 == null)))?((((map__24047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24047):map__24047);
var on_compile_warning = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24047,map__24047__$1,on_compile_warning,on_compile_fail){
return (function (p__24049){
var vec__24050 = p__24049;
var map__24051 = cljs.core.nth.call(null,vec__24050,(0),null);
var map__24051__$1 = ((((!((map__24051 == null)))?((((map__24051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24051):map__24051);
var msg = map__24051__$1;
var msg_name = cljs.core.get.call(null,map__24051__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24050,(1));
var pred__24053 = cljs.core._EQ_;
var expr__24054 = msg_name;
if(cljs.core.truth_(pred__24053.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24054))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24053.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24054))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24047,map__24047__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto__,msg_hist,msg_names,msg){
return (function (state_24270){
var state_val_24271 = (state_24270[(1)]);
if((state_val_24271 === (7))){
var inst_24194 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
if(cljs.core.truth_(inst_24194)){
var statearr_24272_24318 = state_24270__$1;
(statearr_24272_24318[(1)] = (8));

} else {
var statearr_24273_24319 = state_24270__$1;
(statearr_24273_24319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (20))){
var inst_24264 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24274_24320 = state_24270__$1;
(statearr_24274_24320[(2)] = inst_24264);

(statearr_24274_24320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (27))){
var inst_24260 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24275_24321 = state_24270__$1;
(statearr_24275_24321[(2)] = inst_24260);

(statearr_24275_24321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (1))){
var inst_24187 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24270__$1 = state_24270;
if(cljs.core.truth_(inst_24187)){
var statearr_24276_24322 = state_24270__$1;
(statearr_24276_24322[(1)] = (2));

} else {
var statearr_24277_24323 = state_24270__$1;
(statearr_24277_24323[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (24))){
var inst_24262 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24278_24324 = state_24270__$1;
(statearr_24278_24324[(2)] = inst_24262);

(statearr_24278_24324[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (4))){
var inst_24268 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24270__$1,inst_24268);
} else {
if((state_val_24271 === (15))){
var inst_24266 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24279_24325 = state_24270__$1;
(statearr_24279_24325[(2)] = inst_24266);

(statearr_24279_24325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (21))){
var inst_24225 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24280_24326 = state_24270__$1;
(statearr_24280_24326[(2)] = inst_24225);

(statearr_24280_24326[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (31))){
var inst_24249 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24270__$1 = state_24270;
if(cljs.core.truth_(inst_24249)){
var statearr_24281_24327 = state_24270__$1;
(statearr_24281_24327[(1)] = (34));

} else {
var statearr_24282_24328 = state_24270__$1;
(statearr_24282_24328[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (32))){
var inst_24258 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24283_24329 = state_24270__$1;
(statearr_24283_24329[(2)] = inst_24258);

(statearr_24283_24329[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (33))){
var inst_24247 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24284_24330 = state_24270__$1;
(statearr_24284_24330[(2)] = inst_24247);

(statearr_24284_24330[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (13))){
var inst_24208 = figwheel.client.heads_up.clear.call(null);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(16),inst_24208);
} else {
if((state_val_24271 === (22))){
var inst_24229 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24230 = figwheel.client.heads_up.append_message.call(null,inst_24229);
var state_24270__$1 = state_24270;
var statearr_24285_24331 = state_24270__$1;
(statearr_24285_24331[(2)] = inst_24230);

(statearr_24285_24331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (36))){
var inst_24256 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24286_24332 = state_24270__$1;
(statearr_24286_24332[(2)] = inst_24256);

(statearr_24286_24332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (29))){
var inst_24240 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24287_24333 = state_24270__$1;
(statearr_24287_24333[(2)] = inst_24240);

(statearr_24287_24333[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (6))){
var inst_24189 = (state_24270[(7)]);
var state_24270__$1 = state_24270;
var statearr_24288_24334 = state_24270__$1;
(statearr_24288_24334[(2)] = inst_24189);

(statearr_24288_24334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (28))){
var inst_24236 = (state_24270[(2)]);
var inst_24237 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24238 = figwheel.client.heads_up.display_warning.call(null,inst_24237);
var state_24270__$1 = (function (){var statearr_24289 = state_24270;
(statearr_24289[(8)] = inst_24236);

return statearr_24289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(29),inst_24238);
} else {
if((state_val_24271 === (25))){
var inst_24234 = figwheel.client.heads_up.clear.call(null);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(28),inst_24234);
} else {
if((state_val_24271 === (34))){
var inst_24251 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(37),inst_24251);
} else {
if((state_val_24271 === (17))){
var inst_24216 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24290_24335 = state_24270__$1;
(statearr_24290_24335[(2)] = inst_24216);

(statearr_24290_24335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (3))){
var inst_24206 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24270__$1 = state_24270;
if(cljs.core.truth_(inst_24206)){
var statearr_24291_24336 = state_24270__$1;
(statearr_24291_24336[(1)] = (13));

} else {
var statearr_24292_24337 = state_24270__$1;
(statearr_24292_24337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (12))){
var inst_24202 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24293_24338 = state_24270__$1;
(statearr_24293_24338[(2)] = inst_24202);

(statearr_24293_24338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (2))){
var inst_24189 = (state_24270[(7)]);
var inst_24189__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24270__$1 = (function (){var statearr_24294 = state_24270;
(statearr_24294[(7)] = inst_24189__$1);

return statearr_24294;
})();
if(cljs.core.truth_(inst_24189__$1)){
var statearr_24295_24339 = state_24270__$1;
(statearr_24295_24339[(1)] = (5));

} else {
var statearr_24296_24340 = state_24270__$1;
(statearr_24296_24340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (23))){
var inst_24232 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24270__$1 = state_24270;
if(cljs.core.truth_(inst_24232)){
var statearr_24297_24341 = state_24270__$1;
(statearr_24297_24341[(1)] = (25));

} else {
var statearr_24298_24342 = state_24270__$1;
(statearr_24298_24342[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (35))){
var state_24270__$1 = state_24270;
var statearr_24299_24343 = state_24270__$1;
(statearr_24299_24343[(2)] = null);

(statearr_24299_24343[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (19))){
var inst_24227 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24270__$1 = state_24270;
if(cljs.core.truth_(inst_24227)){
var statearr_24300_24344 = state_24270__$1;
(statearr_24300_24344[(1)] = (22));

} else {
var statearr_24301_24345 = state_24270__$1;
(statearr_24301_24345[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (11))){
var inst_24198 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24302_24346 = state_24270__$1;
(statearr_24302_24346[(2)] = inst_24198);

(statearr_24302_24346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (9))){
var inst_24200 = figwheel.client.heads_up.clear.call(null);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(12),inst_24200);
} else {
if((state_val_24271 === (5))){
var inst_24191 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24270__$1 = state_24270;
var statearr_24303_24347 = state_24270__$1;
(statearr_24303_24347[(2)] = inst_24191);

(statearr_24303_24347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (14))){
var inst_24218 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24270__$1 = state_24270;
if(cljs.core.truth_(inst_24218)){
var statearr_24304_24348 = state_24270__$1;
(statearr_24304_24348[(1)] = (18));

} else {
var statearr_24305_24349 = state_24270__$1;
(statearr_24305_24349[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (26))){
var inst_24242 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24270__$1 = state_24270;
if(cljs.core.truth_(inst_24242)){
var statearr_24306_24350 = state_24270__$1;
(statearr_24306_24350[(1)] = (30));

} else {
var statearr_24307_24351 = state_24270__$1;
(statearr_24307_24351[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (16))){
var inst_24210 = (state_24270[(2)]);
var inst_24211 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24212 = figwheel.client.format_messages.call(null,inst_24211);
var inst_24213 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24214 = figwheel.client.heads_up.display_error.call(null,inst_24212,inst_24213);
var state_24270__$1 = (function (){var statearr_24308 = state_24270;
(statearr_24308[(9)] = inst_24210);

return statearr_24308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(17),inst_24214);
} else {
if((state_val_24271 === (30))){
var inst_24244 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24245 = figwheel.client.heads_up.display_warning.call(null,inst_24244);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(33),inst_24245);
} else {
if((state_val_24271 === (10))){
var inst_24204 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24309_24352 = state_24270__$1;
(statearr_24309_24352[(2)] = inst_24204);

(statearr_24309_24352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (18))){
var inst_24220 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24221 = figwheel.client.format_messages.call(null,inst_24220);
var inst_24222 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24223 = figwheel.client.heads_up.display_error.call(null,inst_24221,inst_24222);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(21),inst_24223);
} else {
if((state_val_24271 === (37))){
var inst_24253 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24310_24353 = state_24270__$1;
(statearr_24310_24353[(2)] = inst_24253);

(statearr_24310_24353[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (8))){
var inst_24196 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(11),inst_24196);
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
});})(c__19474__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19362__auto__,c__19474__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto____0 = (function (){
var statearr_24314 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24314[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto__);

(statearr_24314[(1)] = (1));

return statearr_24314;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto____1 = (function (state_24270){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_24270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e24315){if((e24315 instanceof Object)){
var ex__19366__auto__ = e24315;
var statearr_24316_24354 = state_24270;
(statearr_24316_24354[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24355 = state_24270;
state_24270 = G__24355;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto__ = function(state_24270){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto____1.call(this,state_24270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto__,msg_hist,msg_names,msg))
})();
var state__19476__auto__ = (function (){var statearr_24317 = f__19475__auto__.call(null);
(statearr_24317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto__);

return statearr_24317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto__,msg_hist,msg_names,msg))
);

return c__19474__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19474__auto___24418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto___24418,ch){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto___24418,ch){
return (function (state_24401){
var state_val_24402 = (state_24401[(1)]);
if((state_val_24402 === (1))){
var state_24401__$1 = state_24401;
var statearr_24403_24419 = state_24401__$1;
(statearr_24403_24419[(2)] = null);

(statearr_24403_24419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (2))){
var state_24401__$1 = state_24401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24401__$1,(4),ch);
} else {
if((state_val_24402 === (3))){
var inst_24399 = (state_24401[(2)]);
var state_24401__$1 = state_24401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24401__$1,inst_24399);
} else {
if((state_val_24402 === (4))){
var inst_24389 = (state_24401[(7)]);
var inst_24389__$1 = (state_24401[(2)]);
var state_24401__$1 = (function (){var statearr_24404 = state_24401;
(statearr_24404[(7)] = inst_24389__$1);

return statearr_24404;
})();
if(cljs.core.truth_(inst_24389__$1)){
var statearr_24405_24420 = state_24401__$1;
(statearr_24405_24420[(1)] = (5));

} else {
var statearr_24406_24421 = state_24401__$1;
(statearr_24406_24421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (5))){
var inst_24389 = (state_24401[(7)]);
var inst_24391 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24389);
var state_24401__$1 = state_24401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24401__$1,(8),inst_24391);
} else {
if((state_val_24402 === (6))){
var state_24401__$1 = state_24401;
var statearr_24407_24422 = state_24401__$1;
(statearr_24407_24422[(2)] = null);

(statearr_24407_24422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (7))){
var inst_24397 = (state_24401[(2)]);
var state_24401__$1 = state_24401;
var statearr_24408_24423 = state_24401__$1;
(statearr_24408_24423[(2)] = inst_24397);

(statearr_24408_24423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24402 === (8))){
var inst_24393 = (state_24401[(2)]);
var state_24401__$1 = (function (){var statearr_24409 = state_24401;
(statearr_24409[(8)] = inst_24393);

return statearr_24409;
})();
var statearr_24410_24424 = state_24401__$1;
(statearr_24410_24424[(2)] = null);

(statearr_24410_24424[(1)] = (2));


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
});})(c__19474__auto___24418,ch))
;
return ((function (switch__19362__auto__,c__19474__auto___24418,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19363__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19363__auto____0 = (function (){
var statearr_24414 = [null,null,null,null,null,null,null,null,null];
(statearr_24414[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19363__auto__);

(statearr_24414[(1)] = (1));

return statearr_24414;
});
var figwheel$client$heads_up_plugin_$_state_machine__19363__auto____1 = (function (state_24401){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_24401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e24415){if((e24415 instanceof Object)){
var ex__19366__auto__ = e24415;
var statearr_24416_24425 = state_24401;
(statearr_24416_24425[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24426 = state_24401;
state_24401 = G__24426;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19363__auto__ = function(state_24401){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19363__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19363__auto____1.call(this,state_24401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19363__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19363__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto___24418,ch))
})();
var state__19476__auto__ = (function (){var statearr_24417 = f__19475__auto__.call(null);
(statearr_24417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto___24418);

return statearr_24417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto___24418,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19474__auto__){
return (function (){
var f__19475__auto__ = (function (){var switch__19362__auto__ = ((function (c__19474__auto__){
return (function (state_24447){
var state_val_24448 = (state_24447[(1)]);
if((state_val_24448 === (1))){
var inst_24442 = cljs.core.async.timeout.call(null,(3000));
var state_24447__$1 = state_24447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24447__$1,(2),inst_24442);
} else {
if((state_val_24448 === (2))){
var inst_24444 = (state_24447[(2)]);
var inst_24445 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24447__$1 = (function (){var statearr_24449 = state_24447;
(statearr_24449[(7)] = inst_24444);

return statearr_24449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24447__$1,inst_24445);
} else {
return null;
}
}
});})(c__19474__auto__))
;
return ((function (switch__19362__auto__,c__19474__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19363__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19363__auto____0 = (function (){
var statearr_24453 = [null,null,null,null,null,null,null,null];
(statearr_24453[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19363__auto__);

(statearr_24453[(1)] = (1));

return statearr_24453;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19363__auto____1 = (function (state_24447){
while(true){
var ret_value__19364__auto__ = (function (){try{while(true){
var result__19365__auto__ = switch__19362__auto__.call(null,state_24447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19365__auto__;
}
break;
}
}catch (e24454){if((e24454 instanceof Object)){
var ex__19366__auto__ = e24454;
var statearr_24455_24457 = state_24447;
(statearr_24455_24457[(5)] = ex__19366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24458 = state_24447;
state_24447 = G__24458;
continue;
} else {
return ret_value__19364__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19363__auto__ = function(state_24447){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19363__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19363__auto____1.call(this,state_24447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19363__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19363__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19363__auto__;
})()
;})(switch__19362__auto__,c__19474__auto__))
})();
var state__19476__auto__ = (function (){var statearr_24456 = f__19475__auto__.call(null);
(statearr_24456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19474__auto__);

return statearr_24456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19476__auto__);
});})(c__19474__auto__))
);

return c__19474__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24459){
var map__24466 = p__24459;
var map__24466__$1 = ((((!((map__24466 == null)))?((((map__24466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24466):map__24466);
var ed = map__24466__$1;
var formatted_exception = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24468_24472 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24469_24473 = null;
var count__24470_24474 = (0);
var i__24471_24475 = (0);
while(true){
if((i__24471_24475 < count__24470_24474)){
var msg_24476 = cljs.core._nth.call(null,chunk__24469_24473,i__24471_24475);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24476);

var G__24477 = seq__24468_24472;
var G__24478 = chunk__24469_24473;
var G__24479 = count__24470_24474;
var G__24480 = (i__24471_24475 + (1));
seq__24468_24472 = G__24477;
chunk__24469_24473 = G__24478;
count__24470_24474 = G__24479;
i__24471_24475 = G__24480;
continue;
} else {
var temp__4425__auto___24481 = cljs.core.seq.call(null,seq__24468_24472);
if(temp__4425__auto___24481){
var seq__24468_24482__$1 = temp__4425__auto___24481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24468_24482__$1)){
var c__17655__auto___24483 = cljs.core.chunk_first.call(null,seq__24468_24482__$1);
var G__24484 = cljs.core.chunk_rest.call(null,seq__24468_24482__$1);
var G__24485 = c__17655__auto___24483;
var G__24486 = cljs.core.count.call(null,c__17655__auto___24483);
var G__24487 = (0);
seq__24468_24472 = G__24484;
chunk__24469_24473 = G__24485;
count__24470_24474 = G__24486;
i__24471_24475 = G__24487;
continue;
} else {
var msg_24488 = cljs.core.first.call(null,seq__24468_24482__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24488);

var G__24489 = cljs.core.next.call(null,seq__24468_24482__$1);
var G__24490 = null;
var G__24491 = (0);
var G__24492 = (0);
seq__24468_24472 = G__24489;
chunk__24469_24473 = G__24490;
count__24470_24474 = G__24491;
i__24471_24475 = G__24492;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24493){
var map__24496 = p__24493;
var map__24496__$1 = ((((!((map__24496 == null)))?((((map__24496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24496):map__24496);
var w = map__24496__$1;
var message = cljs.core.get.call(null,map__24496__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16840__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16840__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16840__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24504 = cljs.core.seq.call(null,plugins);
var chunk__24505 = null;
var count__24506 = (0);
var i__24507 = (0);
while(true){
if((i__24507 < count__24506)){
var vec__24508 = cljs.core._nth.call(null,chunk__24505,i__24507);
var k = cljs.core.nth.call(null,vec__24508,(0),null);
var plugin = cljs.core.nth.call(null,vec__24508,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24510 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24504,chunk__24505,count__24506,i__24507,pl_24510,vec__24508,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24510.call(null,msg_hist);
});})(seq__24504,chunk__24505,count__24506,i__24507,pl_24510,vec__24508,k,plugin))
);
} else {
}

var G__24511 = seq__24504;
var G__24512 = chunk__24505;
var G__24513 = count__24506;
var G__24514 = (i__24507 + (1));
seq__24504 = G__24511;
chunk__24505 = G__24512;
count__24506 = G__24513;
i__24507 = G__24514;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24504);
if(temp__4425__auto__){
var seq__24504__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24504__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__24504__$1);
var G__24515 = cljs.core.chunk_rest.call(null,seq__24504__$1);
var G__24516 = c__17655__auto__;
var G__24517 = cljs.core.count.call(null,c__17655__auto__);
var G__24518 = (0);
seq__24504 = G__24515;
chunk__24505 = G__24516;
count__24506 = G__24517;
i__24507 = G__24518;
continue;
} else {
var vec__24509 = cljs.core.first.call(null,seq__24504__$1);
var k = cljs.core.nth.call(null,vec__24509,(0),null);
var plugin = cljs.core.nth.call(null,vec__24509,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24519 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24504,chunk__24505,count__24506,i__24507,pl_24519,vec__24509,k,plugin,seq__24504__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24519.call(null,msg_hist);
});})(seq__24504,chunk__24505,count__24506,i__24507,pl_24519,vec__24509,k,plugin,seq__24504__$1,temp__4425__auto__))
);
} else {
}

var G__24520 = cljs.core.next.call(null,seq__24504__$1);
var G__24521 = null;
var G__24522 = (0);
var G__24523 = (0);
seq__24504 = G__24520;
chunk__24505 = G__24521;
count__24506 = G__24522;
i__24507 = G__24523;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24524 = [];
var len__17910__auto___24527 = arguments.length;
var i__17911__auto___24528 = (0);
while(true){
if((i__17911__auto___24528 < len__17910__auto___24527)){
args24524.push((arguments[i__17911__auto___24528]));

var G__24529 = (i__17911__auto___24528 + (1));
i__17911__auto___24528 = G__24529;
continue;
} else {
}
break;
}

var G__24526 = args24524.length;
switch (G__24526) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24524.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17917__auto__ = [];
var len__17910__auto___24535 = arguments.length;
var i__17911__auto___24536 = (0);
while(true){
if((i__17911__auto___24536 < len__17910__auto___24535)){
args__17917__auto__.push((arguments[i__17911__auto___24536]));

var G__24537 = (i__17911__auto___24536 + (1));
i__17911__auto___24536 = G__24537;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24532){
var map__24533 = p__24532;
var map__24533__$1 = ((((!((map__24533 == null)))?((((map__24533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24533):map__24533);
var opts = map__24533__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24531){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24531));
});

//# sourceMappingURL=client.js.map?rel=1454142155344