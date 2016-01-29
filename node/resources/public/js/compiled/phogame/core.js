// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('phogame.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('phogame.game');
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Edits to this text should show up in your developer console."], 0));
if(typeof phogame.core.game_state !== 'undefined'){
} else {
phogame.core.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
phogame.core.add_img = (function phogame$core$add_img(tile){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile,cljs.core.cst$kw$img_DASH_src,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/chunk",cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(tile),".jpg"], null)));
});
phogame.core.make_game = (function phogame$core$make_game(state){
return phogame.game.apply_fn(state,phogame.core.add_img);
});
phogame.core.game_init_state = phogame.core.make_game(phogame.game.init_state);
phogame.core.init_state = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$timer,cljs.core.cst$kw$user_DASH_name,cljs.core.cst$kw$state,cljs.core.cst$kw$encourage_DASH_msg,cljs.core.cst$kw$progress,cljs.core.cst$kw$background_DASH_img,cljs.core.cst$kw$user,cljs.core.cst$kw$hidden_DASH_tile_DASH_num,cljs.core.cst$kw$text],[(0),"",phogame.core.game_init_state,"",cljs.core.cst$kw$start,"",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tries,(0)], null),true,"In memory lanes, a sliding puzzle game..."]);
phogame.core.update_game = (function phogame$core$update_game(key,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phogame.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),(function (){
return cljs.core.identity(val);
}));
});
phogame.core.game_finished = (function phogame$core$game_finished(state){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$progress.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$done);
});
phogame.core.inc_time = (function phogame$core$inc_time(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phogame.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timer], null),cljs.core.inc);

var time = cljs.core.mod(cljs.core.cst$kw$timer.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state))),(600));
var f = ((function (time){
return (function (x){
return phogame.core.update_game(cljs.core.cst$kw$encourage_DASH_msg,x);
});})(time))
;
var u_n = cljs.core.cst$kw$user_DASH_name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)));
if((time < (8))){
return f("Go.. Go. Go..");
} else {
if((time < (15))){
return f("Press arrow keys faster..");
} else {
if((time < (28))){
return f([cljs.core.str("Remember "),cljs.core.str(u_n),cljs.core.str(".. If you have a dream, don't wait. Act.")].join(''));
} else {
if((time < (50))){
return f("We all make choices, but in the end our choices make us.");
} else {
if((time < (75))){
return f("There is no shortcut to perfection... Hard traning is the only way.");
} else {
if((time < (120))){
return f("Maybe we'd fall short. Maybe we'd never even come close. But someone, someday, would know we'd tried.");
} else {
if((time < (180))){
return f([cljs.core.str(u_n),cljs.core.str(".. your actions have meaning only if they hold true to your ideals.")].join(''));
} else {
if((time < (300))){
return f("You don't need a reason to play this game.. again.");
} else {
if((time < (600))){
return f([cljs.core.str("You can always refresh to restart the game.. Meet you again.. "),cljs.core.str(u_n)].join(''));
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
phogame.core.timer_update = phogame.core.timer_start();
}
phogame.core.tile_com = (function phogame$core$tile_com(tile){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$number,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hidden,cljs.core.cst$kw$hidden_DASH_tile_DASH_num.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)))], null),cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(tile)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$src,cljs.core.cst$kw$img_DASH_src.cljs$core$IFn$_invoke$arity$1(tile),cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$hidden,cljs.core.not(cljs.core.cst$kw$hidden_DASH_tile_DASH_num.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)))),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(tile),cljs.core.cst$kw$cursor))?"cursor-tile":"normal-tile")], null)], null)], null);
});
phogame.core.tiles_com = (function phogame$core$tiles_com(tiles){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tiles_DASH_row], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(phogame.core.tile_com,tiles));
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
return phogame.core.show_hide_elem("game-play",true);
});
phogame.core.hide_intro = (function phogame$core$hide_intro(){
return phogame.core.show_hide_elem("game-intro",false);
});
phogame.core.is_enter_QMARK_ = (function phogame$core$is_enter_QMARK_(event){
var temp__4423__auto__ = event.key;
if(cljs.core.truth_(temp__4423__auto__)){
var code = temp__4423__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"Enter");
} else {
return false;
}
});
phogame.core.game_app = (function phogame$core$game_app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$intro,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"game-intro"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$welcome_DASH_msg,"I would like to remember you. Your name, please."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"your name",cljs.core.cst$kw$on_DASH_key_DASH_press,(function (p1__10775_SHARP_){
if(cljs.core.truth_((function (){var and__4656__auto__ = phogame.core.is_enter_QMARK_(p1__10775_SHARP_);
if(cljs.core.truth_(and__4656__auto__)){
return (cljs.core.count(phogame.core.get_val(p1__10775_SHARP_)) > (0));
} else {
return and__4656__auto__;
}
})())){
phogame.core.hide_intro();

phogame.core.update_game(cljs.core.cst$kw$user_DASH_name,phogame.core.get_val(p1__10775_SHARP_));

return phogame.core.show_game();
} else {
return null;
}
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$game,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hidden,true,cljs.core.cst$kw$id,"game-play",cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$background_DASH_img.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$title,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$contents,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$left_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$clock,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timer.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$secs,"secs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$encourage_DASH_msg,cljs.core.cst$kw$encourage_DASH_msg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$center_DASH_container,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$pictures], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(phogame.core.tiles_com,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$right_DASH_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phogame.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hidden_DASH_tile_DASH_num], null),cljs.core.not);
}),cljs.core.cst$kw$class,"action-button shadow animate green"], null),"Hint."], null)], null)], null)], null)], null);
});
phogame.core.on_js_reload = (function phogame$core$on_js_reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reloaded..."], 0));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(phogame.core.game_state,phogame.core.init_state) : cljs.core.reset_BANG_.call(null,phogame.core.game_state,phogame.core.init_state));

var G__10778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phogame.core.game_app], null);
var G__10779 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10778,G__10779) : reagent.core.render_component.call(null,G__10778,G__10779));
});
phogame.core.codename = new cljs.core.PersistentArrayMap(null, 4, [(37),"LEFT",(38),"UP",(39),"RIGHT",(40),"DOWN"], null);
phogame.core.action = new cljs.core.PersistentArrayMap(null, 4, ["LEFT",phogame.game.move_left,"RIGHT",phogame.game.move_right,"UP",phogame.game.move_up,"DOWN",phogame.game.move_down], null);
phogame.core.game_done = (function phogame$core$game_done(new_state){
clearInterval(phogame.core.timer_update);

phogame.core.update_game(cljs.core.cst$kw$state,new_state);

phogame.core.update_game(cljs.core.cst$kw$progress,cljs.core.cst$kw$done);

document.body.style.backgroundImage = "url('/images/main.jpg')";

return alert("Great.. you did it.");
});
phogame.core.handle_keydown = (function phogame$core$handle_keydown(e){
if(cljs.core.truth_(phogame.core.game_finished((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state))))){
return null;
} else {
var temp__4425__auto__ = (function (){var G__10784 = (function (){var G__10785 = e.keyCode;
return (phogame.core.codename.cljs$core$IFn$_invoke$arity$1 ? phogame.core.codename.cljs$core$IFn$_invoke$arity$1(G__10785) : phogame.core.codename.call(null,G__10785));
})();
return (phogame.core.action.cljs$core$IFn$_invoke$arity$1 ? phogame.core.action.cljs$core$IFn$_invoke$arity$1(G__10784) : phogame.core.action.call(null,G__10784));
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
e.preventDefault();

var curr_state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phogame.core.game_state) : cljs.core.deref.call(null,phogame.core.game_state)));
var new_state = phogame.core.make_game((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(curr_state) : f.call(null,curr_state)));
var done = phogame.game.is_done_QMARK_(new_state);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state], 0));

if(cljs.core.truth_(done)){
return phogame.core.game_done(new_state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_state,curr_state)){
return alert("not right move.");
} else {
return phogame.core.update_game(cljs.core.cst$kw$state,new_state);
}
}
} else {
return null;
}
}
});
phogame.core.init = (function phogame$core$init(){
phogame.core.on_js_reload();

document.addEventListener("keydown",phogame.core.handle_keydown);

var G__10788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phogame.core.game_app], null);
var G__10789 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10788,G__10789) : reagent.core.render_component.call(null,G__10788,G__10789));
});
if(typeof phogame.core.start !== 'undefined'){
} else {
phogame.core.start = phogame.core.init();
}
