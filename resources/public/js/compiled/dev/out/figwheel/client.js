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
var pred__23831 = cljs.core._EQ_;
var expr__23832 = (function (){var or__16866__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23835){if((e23835 instanceof Error)){
var e = e23835;
return false;
} else {
throw e23835;

}
}})();
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23831.call(null,"true",expr__23832))){
return true;
} else {
if(cljs.core.truth_(pred__23831.call(null,"false",expr__23832))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23832)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23837){if((e23837 instanceof Error)){
var e = e23837;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23837;

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
var args__17931__auto__ = [];
var len__17924__auto___23839 = arguments.length;
var i__17925__auto___23840 = (0);
while(true){
if((i__17925__auto___23840 < len__17924__auto___23839)){
args__17931__auto__.push((arguments[i__17925__auto___23840]));

var G__23841 = (i__17925__auto___23840 + (1));
i__17925__auto___23840 = G__23841;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((0) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17932__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23838){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23838));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23842){
var map__23845 = p__23842;
var map__23845__$1 = ((((!((map__23845 == null)))?((((map__23845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23845):map__23845);
var message = cljs.core.get.call(null,map__23845__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23845__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16866__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16866__auto__)){
return or__16866__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16854__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16854__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16854__auto__;
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
var c__19494__auto___24007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___24007,ch){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___24007,ch){
return (function (state_23976){
var state_val_23977 = (state_23976[(1)]);
if((state_val_23977 === (7))){
var inst_23972 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_23978_24008 = state_23976__$1;
(statearr_23978_24008[(2)] = inst_23972);

(statearr_23978_24008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (1))){
var state_23976__$1 = state_23976;
var statearr_23979_24009 = state_23976__$1;
(statearr_23979_24009[(2)] = null);

(statearr_23979_24009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (4))){
var inst_23929 = (state_23976[(7)]);
var inst_23929__$1 = (state_23976[(2)]);
var state_23976__$1 = (function (){var statearr_23980 = state_23976;
(statearr_23980[(7)] = inst_23929__$1);

return statearr_23980;
})();
if(cljs.core.truth_(inst_23929__$1)){
var statearr_23981_24010 = state_23976__$1;
(statearr_23981_24010[(1)] = (5));

} else {
var statearr_23982_24011 = state_23976__$1;
(statearr_23982_24011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (15))){
var inst_23936 = (state_23976[(8)]);
var inst_23951 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23936);
var inst_23952 = cljs.core.first.call(null,inst_23951);
var inst_23953 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23952);
var inst_23954 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23953)].join('');
var inst_23955 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23954);
var state_23976__$1 = state_23976;
var statearr_23983_24012 = state_23976__$1;
(statearr_23983_24012[(2)] = inst_23955);

(statearr_23983_24012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (13))){
var inst_23960 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_23984_24013 = state_23976__$1;
(statearr_23984_24013[(2)] = inst_23960);

(statearr_23984_24013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (6))){
var state_23976__$1 = state_23976;
var statearr_23985_24014 = state_23976__$1;
(statearr_23985_24014[(2)] = null);

(statearr_23985_24014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (17))){
var inst_23958 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_23986_24015 = state_23976__$1;
(statearr_23986_24015[(2)] = inst_23958);

(statearr_23986_24015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (3))){
var inst_23974 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23976__$1,inst_23974);
} else {
if((state_val_23977 === (12))){
var inst_23935 = (state_23976[(9)]);
var inst_23949 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23935,opts);
var state_23976__$1 = state_23976;
if(cljs.core.truth_(inst_23949)){
var statearr_23987_24016 = state_23976__$1;
(statearr_23987_24016[(1)] = (15));

} else {
var statearr_23988_24017 = state_23976__$1;
(statearr_23988_24017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (2))){
var state_23976__$1 = state_23976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23976__$1,(4),ch);
} else {
if((state_val_23977 === (11))){
var inst_23936 = (state_23976[(8)]);
var inst_23941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23942 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23936);
var inst_23943 = cljs.core.async.timeout.call(null,(1000));
var inst_23944 = [inst_23942,inst_23943];
var inst_23945 = (new cljs.core.PersistentVector(null,2,(5),inst_23941,inst_23944,null));
var state_23976__$1 = state_23976;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23976__$1,(14),inst_23945);
} else {
if((state_val_23977 === (9))){
var inst_23936 = (state_23976[(8)]);
var inst_23962 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23963 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23936);
var inst_23964 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23963);
var inst_23965 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23964)].join('');
var inst_23966 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23965);
var state_23976__$1 = (function (){var statearr_23989 = state_23976;
(statearr_23989[(10)] = inst_23962);

return statearr_23989;
})();
var statearr_23990_24018 = state_23976__$1;
(statearr_23990_24018[(2)] = inst_23966);

(statearr_23990_24018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (5))){
var inst_23929 = (state_23976[(7)]);
var inst_23931 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23932 = (new cljs.core.PersistentArrayMap(null,2,inst_23931,null));
var inst_23933 = (new cljs.core.PersistentHashSet(null,inst_23932,null));
var inst_23934 = figwheel.client.focus_msgs.call(null,inst_23933,inst_23929);
var inst_23935 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23934);
var inst_23936 = cljs.core.first.call(null,inst_23934);
var inst_23937 = figwheel.client.autoload_QMARK_.call(null);
var state_23976__$1 = (function (){var statearr_23991 = state_23976;
(statearr_23991[(8)] = inst_23936);

(statearr_23991[(9)] = inst_23935);

return statearr_23991;
})();
if(cljs.core.truth_(inst_23937)){
var statearr_23992_24019 = state_23976__$1;
(statearr_23992_24019[(1)] = (8));

} else {
var statearr_23993_24020 = state_23976__$1;
(statearr_23993_24020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (14))){
var inst_23947 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_23994_24021 = state_23976__$1;
(statearr_23994_24021[(2)] = inst_23947);

(statearr_23994_24021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (16))){
var state_23976__$1 = state_23976;
var statearr_23995_24022 = state_23976__$1;
(statearr_23995_24022[(2)] = null);

(statearr_23995_24022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (10))){
var inst_23968 = (state_23976[(2)]);
var state_23976__$1 = (function (){var statearr_23996 = state_23976;
(statearr_23996[(11)] = inst_23968);

return statearr_23996;
})();
var statearr_23997_24023 = state_23976__$1;
(statearr_23997_24023[(2)] = null);

(statearr_23997_24023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (8))){
var inst_23935 = (state_23976[(9)]);
var inst_23939 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23935,opts);
var state_23976__$1 = state_23976;
if(cljs.core.truth_(inst_23939)){
var statearr_23998_24024 = state_23976__$1;
(statearr_23998_24024[(1)] = (11));

} else {
var statearr_23999_24025 = state_23976__$1;
(statearr_23999_24025[(1)] = (12));

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
});})(c__19494__auto___24007,ch))
;
return ((function (switch__19382__auto__,c__19494__auto___24007,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19383__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19383__auto____0 = (function (){
var statearr_24003 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24003[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19383__auto__);

(statearr_24003[(1)] = (1));

return statearr_24003;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19383__auto____1 = (function (state_23976){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_23976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e24004){if((e24004 instanceof Object)){
var ex__19386__auto__ = e24004;
var statearr_24005_24026 = state_23976;
(statearr_24005_24026[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24027 = state_23976;
state_23976 = G__24027;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19383__auto__ = function(state_23976){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19383__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19383__auto____1.call(this,state_23976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19383__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19383__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___24007,ch))
})();
var state__19496__auto__ = (function (){var statearr_24006 = f__19495__auto__.call(null);
(statearr_24006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___24007);

return statearr_24006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___24007,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24028_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24028_SHARP_));
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
var base_path_24035 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24035){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24033 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24034 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24034;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24033;
}}catch (e24032){if((e24032 instanceof Error)){
var e = e24032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24035], null));
} else {
var e = e24032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24035))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24036){
var map__24043 = p__24036;
var map__24043__$1 = ((((!((map__24043 == null)))?((((map__24043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24043):map__24043);
var opts = map__24043__$1;
var build_id = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24043,map__24043__$1,opts,build_id){
return (function (p__24045){
var vec__24046 = p__24045;
var map__24047 = cljs.core.nth.call(null,vec__24046,(0),null);
var map__24047__$1 = ((((!((map__24047 == null)))?((((map__24047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24047):map__24047);
var msg = map__24047__$1;
var msg_name = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24046,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24046,map__24047,map__24047__$1,msg,msg_name,_,map__24043,map__24043__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24046,map__24047,map__24047__$1,msg,msg_name,_,map__24043,map__24043__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24043,map__24043__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24053){
var vec__24054 = p__24053;
var map__24055 = cljs.core.nth.call(null,vec__24054,(0),null);
var map__24055__$1 = ((((!((map__24055 == null)))?((((map__24055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24055):map__24055);
var msg = map__24055__$1;
var msg_name = cljs.core.get.call(null,map__24055__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24054,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24057){
var map__24067 = p__24057;
var map__24067__$1 = ((((!((map__24067 == null)))?((((map__24067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24067):map__24067);
var on_compile_warning = cljs.core.get.call(null,map__24067__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24067__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24067,map__24067__$1,on_compile_warning,on_compile_fail){
return (function (p__24069){
var vec__24070 = p__24069;
var map__24071 = cljs.core.nth.call(null,vec__24070,(0),null);
var map__24071__$1 = ((((!((map__24071 == null)))?((((map__24071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24071):map__24071);
var msg = map__24071__$1;
var msg_name = cljs.core.get.call(null,map__24071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24070,(1));
var pred__24073 = cljs.core._EQ_;
var expr__24074 = msg_name;
if(cljs.core.truth_(pred__24073.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24074))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24073.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24074))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24067,map__24067__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19494__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto__,msg_hist,msg_names,msg){
return (function (state_24290){
var state_val_24291 = (state_24290[(1)]);
if((state_val_24291 === (7))){
var inst_24214 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24214)){
var statearr_24292_24338 = state_24290__$1;
(statearr_24292_24338[(1)] = (8));

} else {
var statearr_24293_24339 = state_24290__$1;
(statearr_24293_24339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (20))){
var inst_24284 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24294_24340 = state_24290__$1;
(statearr_24294_24340[(2)] = inst_24284);

(statearr_24294_24340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (27))){
var inst_24280 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24295_24341 = state_24290__$1;
(statearr_24295_24341[(2)] = inst_24280);

(statearr_24295_24341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (1))){
var inst_24207 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24207)){
var statearr_24296_24342 = state_24290__$1;
(statearr_24296_24342[(1)] = (2));

} else {
var statearr_24297_24343 = state_24290__$1;
(statearr_24297_24343[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (24))){
var inst_24282 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24298_24344 = state_24290__$1;
(statearr_24298_24344[(2)] = inst_24282);

(statearr_24298_24344[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (4))){
var inst_24288 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24290__$1,inst_24288);
} else {
if((state_val_24291 === (15))){
var inst_24286 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24299_24345 = state_24290__$1;
(statearr_24299_24345[(2)] = inst_24286);

(statearr_24299_24345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (21))){
var inst_24245 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24300_24346 = state_24290__$1;
(statearr_24300_24346[(2)] = inst_24245);

(statearr_24300_24346[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (31))){
var inst_24269 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24269)){
var statearr_24301_24347 = state_24290__$1;
(statearr_24301_24347[(1)] = (34));

} else {
var statearr_24302_24348 = state_24290__$1;
(statearr_24302_24348[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (32))){
var inst_24278 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24303_24349 = state_24290__$1;
(statearr_24303_24349[(2)] = inst_24278);

(statearr_24303_24349[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (33))){
var inst_24267 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24304_24350 = state_24290__$1;
(statearr_24304_24350[(2)] = inst_24267);

(statearr_24304_24350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (13))){
var inst_24228 = figwheel.client.heads_up.clear.call(null);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(16),inst_24228);
} else {
if((state_val_24291 === (22))){
var inst_24249 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24250 = figwheel.client.heads_up.append_message.call(null,inst_24249);
var state_24290__$1 = state_24290;
var statearr_24305_24351 = state_24290__$1;
(statearr_24305_24351[(2)] = inst_24250);

(statearr_24305_24351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (36))){
var inst_24276 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24306_24352 = state_24290__$1;
(statearr_24306_24352[(2)] = inst_24276);

(statearr_24306_24352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (29))){
var inst_24260 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24307_24353 = state_24290__$1;
(statearr_24307_24353[(2)] = inst_24260);

(statearr_24307_24353[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (6))){
var inst_24209 = (state_24290[(7)]);
var state_24290__$1 = state_24290;
var statearr_24308_24354 = state_24290__$1;
(statearr_24308_24354[(2)] = inst_24209);

(statearr_24308_24354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (28))){
var inst_24256 = (state_24290[(2)]);
var inst_24257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24258 = figwheel.client.heads_up.display_warning.call(null,inst_24257);
var state_24290__$1 = (function (){var statearr_24309 = state_24290;
(statearr_24309[(8)] = inst_24256);

return statearr_24309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(29),inst_24258);
} else {
if((state_val_24291 === (25))){
var inst_24254 = figwheel.client.heads_up.clear.call(null);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(28),inst_24254);
} else {
if((state_val_24291 === (34))){
var inst_24271 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(37),inst_24271);
} else {
if((state_val_24291 === (17))){
var inst_24236 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24310_24355 = state_24290__$1;
(statearr_24310_24355[(2)] = inst_24236);

(statearr_24310_24355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (3))){
var inst_24226 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24226)){
var statearr_24311_24356 = state_24290__$1;
(statearr_24311_24356[(1)] = (13));

} else {
var statearr_24312_24357 = state_24290__$1;
(statearr_24312_24357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (12))){
var inst_24222 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24313_24358 = state_24290__$1;
(statearr_24313_24358[(2)] = inst_24222);

(statearr_24313_24358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (2))){
var inst_24209 = (state_24290[(7)]);
var inst_24209__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24290__$1 = (function (){var statearr_24314 = state_24290;
(statearr_24314[(7)] = inst_24209__$1);

return statearr_24314;
})();
if(cljs.core.truth_(inst_24209__$1)){
var statearr_24315_24359 = state_24290__$1;
(statearr_24315_24359[(1)] = (5));

} else {
var statearr_24316_24360 = state_24290__$1;
(statearr_24316_24360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (23))){
var inst_24252 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24252)){
var statearr_24317_24361 = state_24290__$1;
(statearr_24317_24361[(1)] = (25));

} else {
var statearr_24318_24362 = state_24290__$1;
(statearr_24318_24362[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (35))){
var state_24290__$1 = state_24290;
var statearr_24319_24363 = state_24290__$1;
(statearr_24319_24363[(2)] = null);

(statearr_24319_24363[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (19))){
var inst_24247 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24247)){
var statearr_24320_24364 = state_24290__$1;
(statearr_24320_24364[(1)] = (22));

} else {
var statearr_24321_24365 = state_24290__$1;
(statearr_24321_24365[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (11))){
var inst_24218 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24322_24366 = state_24290__$1;
(statearr_24322_24366[(2)] = inst_24218);

(statearr_24322_24366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (9))){
var inst_24220 = figwheel.client.heads_up.clear.call(null);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(12),inst_24220);
} else {
if((state_val_24291 === (5))){
var inst_24211 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24290__$1 = state_24290;
var statearr_24323_24367 = state_24290__$1;
(statearr_24323_24367[(2)] = inst_24211);

(statearr_24323_24367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (14))){
var inst_24238 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24238)){
var statearr_24324_24368 = state_24290__$1;
(statearr_24324_24368[(1)] = (18));

} else {
var statearr_24325_24369 = state_24290__$1;
(statearr_24325_24369[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (26))){
var inst_24262 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24262)){
var statearr_24326_24370 = state_24290__$1;
(statearr_24326_24370[(1)] = (30));

} else {
var statearr_24327_24371 = state_24290__$1;
(statearr_24327_24371[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (16))){
var inst_24230 = (state_24290[(2)]);
var inst_24231 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24232 = figwheel.client.format_messages.call(null,inst_24231);
var inst_24233 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24234 = figwheel.client.heads_up.display_error.call(null,inst_24232,inst_24233);
var state_24290__$1 = (function (){var statearr_24328 = state_24290;
(statearr_24328[(9)] = inst_24230);

return statearr_24328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(17),inst_24234);
} else {
if((state_val_24291 === (30))){
var inst_24264 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24265 = figwheel.client.heads_up.display_warning.call(null,inst_24264);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(33),inst_24265);
} else {
if((state_val_24291 === (10))){
var inst_24224 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24329_24372 = state_24290__$1;
(statearr_24329_24372[(2)] = inst_24224);

(statearr_24329_24372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (18))){
var inst_24240 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24241 = figwheel.client.format_messages.call(null,inst_24240);
var inst_24242 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24243 = figwheel.client.heads_up.display_error.call(null,inst_24241,inst_24242);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(21),inst_24243);
} else {
if((state_val_24291 === (37))){
var inst_24273 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24330_24373 = state_24290__$1;
(statearr_24330_24373[(2)] = inst_24273);

(statearr_24330_24373[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (8))){
var inst_24216 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(11),inst_24216);
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
});})(c__19494__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19382__auto__,c__19494__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto____0 = (function (){
var statearr_24334 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24334[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto__);

(statearr_24334[(1)] = (1));

return statearr_24334;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto____1 = (function (state_24290){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_24290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e24335){if((e24335 instanceof Object)){
var ex__19386__auto__ = e24335;
var statearr_24336_24374 = state_24290;
(statearr_24336_24374[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24375 = state_24290;
state_24290 = G__24375;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto__ = function(state_24290){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto____1.call(this,state_24290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto__,msg_hist,msg_names,msg))
})();
var state__19496__auto__ = (function (){var statearr_24337 = f__19495__auto__.call(null);
(statearr_24337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto__);

return statearr_24337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto__,msg_hist,msg_names,msg))
);

return c__19494__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19494__auto___24438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto___24438,ch){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto___24438,ch){
return (function (state_24421){
var state_val_24422 = (state_24421[(1)]);
if((state_val_24422 === (1))){
var state_24421__$1 = state_24421;
var statearr_24423_24439 = state_24421__$1;
(statearr_24423_24439[(2)] = null);

(statearr_24423_24439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (2))){
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24421__$1,(4),ch);
} else {
if((state_val_24422 === (3))){
var inst_24419 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24421__$1,inst_24419);
} else {
if((state_val_24422 === (4))){
var inst_24409 = (state_24421[(7)]);
var inst_24409__$1 = (state_24421[(2)]);
var state_24421__$1 = (function (){var statearr_24424 = state_24421;
(statearr_24424[(7)] = inst_24409__$1);

return statearr_24424;
})();
if(cljs.core.truth_(inst_24409__$1)){
var statearr_24425_24440 = state_24421__$1;
(statearr_24425_24440[(1)] = (5));

} else {
var statearr_24426_24441 = state_24421__$1;
(statearr_24426_24441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (5))){
var inst_24409 = (state_24421[(7)]);
var inst_24411 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24409);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24421__$1,(8),inst_24411);
} else {
if((state_val_24422 === (6))){
var state_24421__$1 = state_24421;
var statearr_24427_24442 = state_24421__$1;
(statearr_24427_24442[(2)] = null);

(statearr_24427_24442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (7))){
var inst_24417 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24428_24443 = state_24421__$1;
(statearr_24428_24443[(2)] = inst_24417);

(statearr_24428_24443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (8))){
var inst_24413 = (state_24421[(2)]);
var state_24421__$1 = (function (){var statearr_24429 = state_24421;
(statearr_24429[(8)] = inst_24413);

return statearr_24429;
})();
var statearr_24430_24444 = state_24421__$1;
(statearr_24430_24444[(2)] = null);

(statearr_24430_24444[(1)] = (2));


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
});})(c__19494__auto___24438,ch))
;
return ((function (switch__19382__auto__,c__19494__auto___24438,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19383__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19383__auto____0 = (function (){
var statearr_24434 = [null,null,null,null,null,null,null,null,null];
(statearr_24434[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19383__auto__);

(statearr_24434[(1)] = (1));

return statearr_24434;
});
var figwheel$client$heads_up_plugin_$_state_machine__19383__auto____1 = (function (state_24421){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_24421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e24435){if((e24435 instanceof Object)){
var ex__19386__auto__ = e24435;
var statearr_24436_24445 = state_24421;
(statearr_24436_24445[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24446 = state_24421;
state_24421 = G__24446;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19383__auto__ = function(state_24421){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19383__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19383__auto____1.call(this,state_24421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19383__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19383__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto___24438,ch))
})();
var state__19496__auto__ = (function (){var statearr_24437 = f__19495__auto__.call(null);
(statearr_24437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto___24438);

return statearr_24437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto___24438,ch))
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
var c__19494__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19494__auto__){
return (function (){
var f__19495__auto__ = (function (){var switch__19382__auto__ = ((function (c__19494__auto__){
return (function (state_24467){
var state_val_24468 = (state_24467[(1)]);
if((state_val_24468 === (1))){
var inst_24462 = cljs.core.async.timeout.call(null,(3000));
var state_24467__$1 = state_24467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24467__$1,(2),inst_24462);
} else {
if((state_val_24468 === (2))){
var inst_24464 = (state_24467[(2)]);
var inst_24465 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24467__$1 = (function (){var statearr_24469 = state_24467;
(statearr_24469[(7)] = inst_24464);

return statearr_24469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24467__$1,inst_24465);
} else {
return null;
}
}
});})(c__19494__auto__))
;
return ((function (switch__19382__auto__,c__19494__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19383__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19383__auto____0 = (function (){
var statearr_24473 = [null,null,null,null,null,null,null,null];
(statearr_24473[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19383__auto__);

(statearr_24473[(1)] = (1));

return statearr_24473;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19383__auto____1 = (function (state_24467){
while(true){
var ret_value__19384__auto__ = (function (){try{while(true){
var result__19385__auto__ = switch__19382__auto__.call(null,state_24467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19385__auto__;
}
break;
}
}catch (e24474){if((e24474 instanceof Object)){
var ex__19386__auto__ = e24474;
var statearr_24475_24477 = state_24467;
(statearr_24475_24477[(5)] = ex__19386__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24478 = state_24467;
state_24467 = G__24478;
continue;
} else {
return ret_value__19384__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19383__auto__ = function(state_24467){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19383__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19383__auto____1.call(this,state_24467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19383__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19383__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19383__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19383__auto__;
})()
;})(switch__19382__auto__,c__19494__auto__))
})();
var state__19496__auto__ = (function (){var statearr_24476 = f__19495__auto__.call(null);
(statearr_24476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19494__auto__);

return statearr_24476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19496__auto__);
});})(c__19494__auto__))
);

return c__19494__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24479){
var map__24486 = p__24479;
var map__24486__$1 = ((((!((map__24486 == null)))?((((map__24486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24486):map__24486);
var ed = map__24486__$1;
var formatted_exception = cljs.core.get.call(null,map__24486__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24486__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24486__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24488_24492 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24489_24493 = null;
var count__24490_24494 = (0);
var i__24491_24495 = (0);
while(true){
if((i__24491_24495 < count__24490_24494)){
var msg_24496 = cljs.core._nth.call(null,chunk__24489_24493,i__24491_24495);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24496);

var G__24497 = seq__24488_24492;
var G__24498 = chunk__24489_24493;
var G__24499 = count__24490_24494;
var G__24500 = (i__24491_24495 + (1));
seq__24488_24492 = G__24497;
chunk__24489_24493 = G__24498;
count__24490_24494 = G__24499;
i__24491_24495 = G__24500;
continue;
} else {
var temp__4425__auto___24501 = cljs.core.seq.call(null,seq__24488_24492);
if(temp__4425__auto___24501){
var seq__24488_24502__$1 = temp__4425__auto___24501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24488_24502__$1)){
var c__17669__auto___24503 = cljs.core.chunk_first.call(null,seq__24488_24502__$1);
var G__24504 = cljs.core.chunk_rest.call(null,seq__24488_24502__$1);
var G__24505 = c__17669__auto___24503;
var G__24506 = cljs.core.count.call(null,c__17669__auto___24503);
var G__24507 = (0);
seq__24488_24492 = G__24504;
chunk__24489_24493 = G__24505;
count__24490_24494 = G__24506;
i__24491_24495 = G__24507;
continue;
} else {
var msg_24508 = cljs.core.first.call(null,seq__24488_24502__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24508);

var G__24509 = cljs.core.next.call(null,seq__24488_24502__$1);
var G__24510 = null;
var G__24511 = (0);
var G__24512 = (0);
seq__24488_24492 = G__24509;
chunk__24489_24493 = G__24510;
count__24490_24494 = G__24511;
i__24491_24495 = G__24512;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24513){
var map__24516 = p__24513;
var map__24516__$1 = ((((!((map__24516 == null)))?((((map__24516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24516):map__24516);
var w = map__24516__$1;
var message = cljs.core.get.call(null,map__24516__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16854__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16854__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16854__auto__;
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
var seq__24524 = cljs.core.seq.call(null,plugins);
var chunk__24525 = null;
var count__24526 = (0);
var i__24527 = (0);
while(true){
if((i__24527 < count__24526)){
var vec__24528 = cljs.core._nth.call(null,chunk__24525,i__24527);
var k = cljs.core.nth.call(null,vec__24528,(0),null);
var plugin = cljs.core.nth.call(null,vec__24528,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24530 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24524,chunk__24525,count__24526,i__24527,pl_24530,vec__24528,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24530.call(null,msg_hist);
});})(seq__24524,chunk__24525,count__24526,i__24527,pl_24530,vec__24528,k,plugin))
);
} else {
}

var G__24531 = seq__24524;
var G__24532 = chunk__24525;
var G__24533 = count__24526;
var G__24534 = (i__24527 + (1));
seq__24524 = G__24531;
chunk__24525 = G__24532;
count__24526 = G__24533;
i__24527 = G__24534;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24524);
if(temp__4425__auto__){
var seq__24524__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24524__$1)){
var c__17669__auto__ = cljs.core.chunk_first.call(null,seq__24524__$1);
var G__24535 = cljs.core.chunk_rest.call(null,seq__24524__$1);
var G__24536 = c__17669__auto__;
var G__24537 = cljs.core.count.call(null,c__17669__auto__);
var G__24538 = (0);
seq__24524 = G__24535;
chunk__24525 = G__24536;
count__24526 = G__24537;
i__24527 = G__24538;
continue;
} else {
var vec__24529 = cljs.core.first.call(null,seq__24524__$1);
var k = cljs.core.nth.call(null,vec__24529,(0),null);
var plugin = cljs.core.nth.call(null,vec__24529,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24539 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24524,chunk__24525,count__24526,i__24527,pl_24539,vec__24529,k,plugin,seq__24524__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24539.call(null,msg_hist);
});})(seq__24524,chunk__24525,count__24526,i__24527,pl_24539,vec__24529,k,plugin,seq__24524__$1,temp__4425__auto__))
);
} else {
}

var G__24540 = cljs.core.next.call(null,seq__24524__$1);
var G__24541 = null;
var G__24542 = (0);
var G__24543 = (0);
seq__24524 = G__24540;
chunk__24525 = G__24541;
count__24526 = G__24542;
i__24527 = G__24543;
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
var args24544 = [];
var len__17924__auto___24547 = arguments.length;
var i__17925__auto___24548 = (0);
while(true){
if((i__17925__auto___24548 < len__17924__auto___24547)){
args24544.push((arguments[i__17925__auto___24548]));

var G__24549 = (i__17925__auto___24548 + (1));
i__17925__auto___24548 = G__24549;
continue;
} else {
}
break;
}

var G__24546 = args24544.length;
switch (G__24546) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24544.length)].join('')));

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
var args__17931__auto__ = [];
var len__17924__auto___24555 = arguments.length;
var i__17925__auto___24556 = (0);
while(true){
if((i__17925__auto___24556 < len__17924__auto___24555)){
args__17931__auto__.push((arguments[i__17925__auto___24556]));

var G__24557 = (i__17925__auto___24556 + (1));
i__17925__auto___24556 = G__24557;
continue;
} else {
}
break;
}

var argseq__17932__auto__ = ((((0) < args__17931__auto__.length))?(new cljs.core.IndexedSeq(args__17931__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17932__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24552){
var map__24553 = p__24552;
var map__24553__$1 = ((((!((map__24553 == null)))?((((map__24553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24553):map__24553);
var opts = map__24553__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24551){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24551));
});

//# sourceMappingURL=client.js.map?rel=1455734075412