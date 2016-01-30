// Compiled by ClojureScript 1.7.170 {}
goog.provide('phogame.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('phogame.game');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof phogame.core.game_state !== 'undefined'){
} else {
phogame.core.game_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
phogame.core.add_img = (function phogame$core$add_img(tile){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"img-src","img-src",-108905265),clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/chunk",new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(tile),".jpg"], null)));
});
phogame.core.make_game = (function phogame$core$make_game(state){
return phogame.game.apply_fn.call(null,state,phogame.core.add_img);
});
phogame.core.game_init_state = phogame.core.make_game.call(null,phogame.game.init_state);
phogame.core.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"user-name","user-name",1302913545),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"encourage-msg","encourage-msg",497069336),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"background-img","background-img",173027612),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"hidden-tile-num","hidden-tile-num",1496262430),new cljs.core.Keyword(null,"text","text",-1790561697)],[(0),"",phogame.core.game_init_state,"",new cljs.core.Keyword(null,"start","start",-355208981),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tries","tries",425666016),(0)], null),true,"In memory lanes, a sliding puzzle game..."]);
phogame.core.update_game = (function phogame$core$update_game(key,val){
return cljs.core.swap_BANG_.call(null,phogame.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),(function (){
return cljs.core.identity.call(null,val);
}));
});
phogame.core.game_finished = (function phogame$core$game_finished(state){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"done","done",-889844188));
});
phogame.core.inc_time = (function phogame$core$inc_time(){
cljs.core.swap_BANG_.call(null,phogame.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),cljs.core.inc);

var time = cljs.core.mod.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state)),(600));
var f = ((function (time){
return (function (x){
return phogame.core.update_game.call(null,new cljs.core.Keyword(null,"encourage-msg","encourage-msg",497069336),x);
});})(time))
;
var u_n = new cljs.core.Keyword(null,"user-name","user-name",1302913545).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state));
if((time < (8))){
return f.call(null,"Go.. Go. Go..");
} else {
if((time < (15))){
return f.call(null,"Press arrow keys faster..");
} else {
if((time < (28))){
return f.call(null,[cljs.core.str("Remember "),cljs.core.str(u_n),cljs.core.str(".. If you have a dream, don't wait. Act.")].join(''));
} else {
if((time < (50))){
return f.call(null,"We all make choices, but in the end our choices make us.");
} else {
if((time < (75))){
return f.call(null,"There is no shortcut to perfection... Hard traning is the only way.");
} else {
if((time < (120))){
return f.call(null,"Maybe we'd fall short. Maybe we'd never even come close. But someone, someday, would know we'd tried.");
} else {
if((time < (180))){
return f.call(null,[cljs.core.str(u_n),cljs.core.str(".. your actions have meaning only if they hold true to your ideals.")].join(''));
} else {
if((time < (300))){
return f.call(null,"You don't need a reason to play this game.. again.");
} else {
if((time < (600))){
return f.call(null,[cljs.core.str("You can always refresh to restart the game.. Meet you again.. "),cljs.core.str(u_n)].join(''));
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
});
phogame.core.timer_start = (function phogame$core$timer_start(){
return setInterval(phogame.core.inc_time,(1000));
});
if(typeof phogame.core.timer_update !== 'undefined'){
} else {
phogame.core.timer_update = phogame.core.timer_start.call(null);
}
phogame.core.move_cursor;
phogame.core.dir__GT_action;
phogame.core.pos_in_game = (function phogame$core$pos_in_game(num){
return cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (x){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,x)),num);
}),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state))))));
});
phogame.core.tile_com = (function phogame$core$tile_com(tile){
var tile_num = phogame.core.pos_in_game.call(null,new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(tile));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tile_num){
return (function (){
return phogame.core.move_cursor.call(null,phogame.core.dir__GT_action.call(null,(function (){var v = phogame.game.move_to_tile.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state)),tile_num);
cljs.core.println.call(null,"move-to-tile ",v);

return v;
})()));
});})(tile_num))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.number","div.number",1532437158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"hidden-tile-num","hidden-tile-num",1496262430).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state))], null),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(tile)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"img-src","img-src",-108905265).cljs$core$IFn$_invoke$arity$1(tile),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden-tile-num","hidden-tile-num",1496262430).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tile),new cljs.core.Keyword(null,"cursor","cursor",1011937484)))?"cursor-tile":"normal-tile")], null)], null)], null);
});
phogame.core.tiles_com = (function phogame$core$tiles_com(tiles){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tiles-row","div.tiles-row",-807771617)], null),cljs.core.map.call(null,phogame.core.tile_com,tiles));
});
phogame.core.get_val = (function phogame$core$get_val(event){
return event.target.value;
});
phogame.core.show_hide_elem = (function phogame$core$show_hide_elem(id,show){
var temp__4423__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__4423__auto__)){
var div = temp__4423__auto__;
return div.style.display = (cljs.core.truth_(show)?"block":"none");
} else {
return null;
}
});
phogame.core.show_game = (function phogame$core$show_game(){
return phogame.core.show_hide_elem.call(null,"game-play",true);
});
phogame.core.hide_intro = (function phogame$core$hide_intro(){
return phogame.core.show_hide_elem.call(null,"game-intro",false);
});
phogame.core.is_enter_QMARK_ = (function phogame$core$is_enter_QMARK_(event){
var temp__4423__auto__ = event.key;
if(cljs.core.truth_(temp__4423__auto__)){
var code = temp__4423__auto__;
return cljs.core._EQ_.call(null,code,"Enter");
} else {
return false;
}
});
phogame.core.game_app = (function phogame$core$game_app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.intro","div.intro",1937098677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"game-intro"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.welcome-msg","div.welcome-msg",-1064809418),"I would like to remember you. Your name, please."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name","div.name",1027675228),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"your name",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__21521_SHARP_){
if(cljs.core.truth_((function (){var and__16840__auto__ = phogame.core.is_enter_QMARK_.call(null,p1__21521_SHARP_);
if(cljs.core.truth_(and__16840__auto__)){
return (cljs.core.count.call(null,phogame.core.get_val.call(null,p1__21521_SHARP_)) > (0));
} else {
return and__16840__auto__;
}
})())){
phogame.core.hide_intro.call(null);

phogame.core.update_game.call(null,new cljs.core.Keyword(null,"user-name","user-name",1302913545),phogame.core.get_val.call(null,p1__21521_SHARP_));

return phogame.core.show_game.call(null);
} else {
return null;
}
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"id","id",-1388402092),"game-play",new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-img","background-img",173027612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contents","div.contents",-1428662400),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-container","div.left-container",-1037608467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock","div.clock",297094939),clojure.string.join.call(null,"",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.secs","div.secs",29668377),"secs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.encourage-msg","div.encourage-msg",1714641284),new cljs.core.Keyword(null,"encourage-msg","encourage-msg",497069336).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center-container","div.center-container",1986574622),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pictures","div.pictures",-1225854088)], null),cljs.core.map.call(null,phogame.core.tiles_com,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-container","div.right-container",793487504),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,phogame.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hidden-tile-num","hidden-tile-num",1496262430)], null),cljs.core.not);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"action-button shadow animate green"], null),"Hint."], null)], null)], null)], null)], null);
});
phogame.core.on_js_reload = (function phogame$core$on_js_reload(){
cljs.core.println.call(null,"Reloaded...");

cljs.core.reset_BANG_.call(null,phogame.core.game_state,phogame.core.init_state);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phogame.core.game_app], null),document.getElementById("app"));
});
phogame.core.codename = new cljs.core.PersistentArrayMap(null, 4, [(37),"LEFT",(38),"UP",(39),"RIGHT",(40),"DOWN"], null);
phogame.core.action = new cljs.core.PersistentArrayMap(null, 4, ["LEFT",phogame.game.move_left,"RIGHT",phogame.game.move_right,"UP",phogame.game.move_up,"DOWN",phogame.game.move_down], null);
phogame.core.dir__GT_action = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"up","up",-269712113),phogame.game.move_up,new cljs.core.Keyword(null,"down","down",1565245570),phogame.game.move_down,new cljs.core.Keyword(null,"left","left",-399115937),phogame.game.move_left,new cljs.core.Keyword(null,"right","right",-452581833),phogame.game.move_right], null);
phogame.core.game_done = (function phogame$core$game_done(new_state){
clearInterval(phogame.core.timer_update);

phogame.core.update_game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);

phogame.core.update_game.call(null,new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"done","done",-889844188));

document.body.style.backgroundImage = "url('/images/main.jpg')";

return alert("Great.. you did it.");
});
phogame.core.move_cursor = (function phogame$core$move_cursor(direction_fn){
if(cljs.core.truth_(phogame.core.game_finished.call(null,cljs.core.deref.call(null,phogame.core.game_state)))){
return null;
} else {
var temp__4425__auto__ = direction_fn;
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var curr_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,phogame.core.game_state));
var new_state = phogame.core.make_game.call(null,f.call(null,curr_state));
var done = phogame.game.is_done_QMARK_.call(null,new_state);
cljs.core.println.call(null,new_state);

if(cljs.core.truth_(done)){
return phogame.core.game_done.call(null,new_state);
} else {
if(cljs.core._EQ_.call(null,new_state,curr_state)){
return alert("not right move.");
} else {
return phogame.core.update_game.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),new_state);
}
}
} else {
return null;
}
}
});
phogame.core.handle_keydown = (function phogame$core$handle_keydown(e){
return phogame.core.move_cursor.call(null,phogame.core.action.call(null,phogame.core.codename.call(null,e.keyCode)));
});
phogame.core.init = (function phogame$core$init(){
phogame.core.on_js_reload.call(null);

document.addEventListener("keydown",phogame.core.handle_keydown);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phogame.core.game_app], null),document.getElementById("app"));
});
if(typeof phogame.core.start !== 'undefined'){
} else {
phogame.core.start = phogame.core.init.call(null);
}

//# sourceMappingURL=core.js.map?rel=1454177975012