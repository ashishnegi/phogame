// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('phogame.game');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
phogame.game.Tile = (function (num,type,__meta,__extmap,__hash){
this.num = num;
this.type = type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
phogame.game.Tile.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

phogame.game.Tile.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10436,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10438 = (((k10436 instanceof cljs.core.Keyword))?k10436.fqn:null);
switch (G__10438) {
case "num":
return self__.num;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10436,else__5285__auto__);

}
});

phogame.game.Tile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#phogame.game.Tile{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$num,self__.num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null))], null),self__.__extmap));
});

phogame.game.Tile.prototype.cljs$core$IIterable$ = true;

phogame.game.Tile.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10435){
var self__ = this;
var G__10435__$1 = this;
return (new cljs.core.RecordIter((0),G__10435__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$num,cljs.core.cst$kw$type], null),cljs.core._iterator(self__.__extmap)));
});

phogame.game.Tile.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

phogame.game.Tile.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new phogame.game.Tile(self__.num,self__.type,self__.__meta,self__.__extmap,self__.__hash));
});

phogame.game.Tile.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

phogame.game.Tile.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

phogame.game.Tile.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

phogame.game.Tile.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num,null,cljs.core.cst$kw$type,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new phogame.game.Tile(self__.num,self__.type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

phogame.game.Tile.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10435){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10439 = cljs.core.keyword_identical_QMARK_;
var expr__10440 = k__5290__auto__;
if(cljs.core.truth_((pred__10439.cljs$core$IFn$_invoke$arity$2 ? pred__10439.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$num,expr__10440) : pred__10439.call(null,cljs.core.cst$kw$num,expr__10440)))){
return (new phogame.game.Tile(G__10435,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10439.cljs$core$IFn$_invoke$arity$2 ? pred__10439.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,expr__10440) : pred__10439.call(null,cljs.core.cst$kw$type,expr__10440)))){
return (new phogame.game.Tile(self__.num,G__10435,self__.__meta,self__.__extmap,null));
} else {
return (new phogame.game.Tile(self__.num,self__.type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10435),null));
}
}
});

phogame.game.Tile.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$num,self__.num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null))], null),self__.__extmap));
});

phogame.game.Tile.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10435){
var self__ = this;
var this__5281__auto____$1 = this;
return (new phogame.game.Tile(self__.num,self__.type,G__10435,self__.__extmap,self__.__hash));
});

phogame.game.Tile.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

phogame.game.Tile.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$num,cljs.core.cst$sym$type], null);
});

phogame.game.Tile.cljs$lang$type = true;

phogame.game.Tile.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"phogame.game/Tile");
});

phogame.game.Tile.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"phogame.game/Tile");
});

phogame.game.__GT_Tile = (function phogame$game$__GT_Tile(num,type){
return (new phogame.game.Tile(num,type,null,null,null));
});

phogame.game.map__GT_Tile = (function phogame$game$map__GT_Tile(G__10437){
return (new phogame.game.Tile(cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(G__10437),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__10437),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10437,cljs.core.cst$kw$num,cljs.core.array_seq([cljs.core.cst$kw$type], 0)),null));
});

phogame.game.make_tile = (function phogame$game$make_tile(num,type){
return (new phogame.game.Tile(num,type,null,null,null));
});
phogame.game.init_pos = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(8),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(9),(6)], null)], null);
phogame.game.ntiles_row = (3);
phogame.game.ntiles_col = (3);
phogame.game.ntiles = (phogame.game.ntiles_row * phogame.game.ntiles_col);
phogame.game.make_game_tile = (function phogame$game$make_game_tile(num){
if((num === phogame.game.ntiles)){
return phogame.game.make_tile(num,cljs.core.cst$kw$cursor);
} else {
return phogame.game.make_tile(num,cljs.core.cst$kw$tile);
}
});
phogame.game.apply_fn = (function phogame$game$apply_fn(state,fn){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(phogame.game.ntiles_col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn,cljs.core.flatten(state)))));
});
phogame.game.init_state = phogame.game.apply_fn(phogame.game.init_pos,phogame.game.make_game_tile);
phogame.game.is_cursor_QMARK_ = (function phogame$game$is_cursor_QMARK_(tile){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cursor,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(tile));
});
phogame.game.has_cursor_QMARK_ = (function phogame$game$has_cursor_QMARK_(tiles_row){
return !(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(phogame.game.is_cursor_QMARK_,tiles_row)));
});
/**
 * if cursor is not in first row then we can move up
 */
phogame.game.can_move_up_QMARK_ = (function phogame$game$can_move_up_QMARK_(game){
return cljs.core.not(phogame.game.has_cursor_QMARK_(cljs.core.first(game)));
});
phogame.game.can_move_down_QMARK_ = (function phogame$game$can_move_down_QMARK_(game){
return cljs.core.not(phogame.game.has_cursor_QMARK_(cljs.core.last(game)));
});
phogame.game.can_move_left_QMARK_ = (function phogame$game$can_move_left_QMARK_(game){
return cljs.core.not(phogame.game.has_cursor_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,game)));
});
phogame.game.can_move_right_QMARK_ = (function phogame$game$can_move_right_QMARK_(game){
return cljs.core.not(phogame.game.has_cursor_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,game)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
phogame.game.Position = (function (row,col,__meta,__extmap,__hash){
this.row = row;
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
phogame.game.Position.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

phogame.game.Position.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k10444,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__10446 = (((k10444 instanceof cljs.core.Keyword))?k10444.fqn:null);
switch (G__10446) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10444,else__5285__auto__);

}
});

phogame.game.Position.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#phogame.game.Position{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$row,self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
});

phogame.game.Position.prototype.cljs$core$IIterable$ = true;

phogame.game.Position.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10443){
var self__ = this;
var G__10443__$1 = this;
return (new cljs.core.RecordIter((0),G__10443__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row,cljs.core.cst$kw$col], null),cljs.core._iterator(self__.__extmap)));
});

phogame.game.Position.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

phogame.game.Position.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new phogame.game.Position(self__.row,self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

phogame.game.Position.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

phogame.game.Position.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

phogame.game.Position.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

phogame.game.Position.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$col,null,cljs.core.cst$kw$row,null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new phogame.game.Position(self__.row,self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

phogame.game.Position.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__10443){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__10447 = cljs.core.keyword_identical_QMARK_;
var expr__10448 = k__5290__auto__;
if(cljs.core.truth_((pred__10447.cljs$core$IFn$_invoke$arity$2 ? pred__10447.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$row,expr__10448) : pred__10447.call(null,cljs.core.cst$kw$row,expr__10448)))){
return (new phogame.game.Position(G__10443,self__.col,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10447.cljs$core$IFn$_invoke$arity$2 ? pred__10447.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$col,expr__10448) : pred__10447.call(null,cljs.core.cst$kw$col,expr__10448)))){
return (new phogame.game.Position(self__.row,G__10443,self__.__meta,self__.__extmap,null));
} else {
return (new phogame.game.Position(self__.row,self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__10443),null));
}
}
});

phogame.game.Position.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$row,self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
});

phogame.game.Position.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__10443){
var self__ = this;
var this__5281__auto____$1 = this;
return (new phogame.game.Position(self__.row,self__.col,G__10443,self__.__extmap,self__.__hash));
});

phogame.game.Position.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

phogame.game.Position.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$int], null)),cljs.core.with_meta(cljs.core.cst$sym$col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$int], null))], null);
});

phogame.game.Position.cljs$lang$type = true;

phogame.game.Position.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"phogame.game/Position");
});

phogame.game.Position.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"phogame.game/Position");
});

phogame.game.__GT_Position = (function phogame$game$__GT_Position(row,col){
return (new phogame.game.Position(row,col,null,null,null));
});

phogame.game.map__GT_Position = (function phogame$game$map__GT_Position(G__10445){
return (new phogame.game.Position(cljs.core.cst$kw$row.cljs$core$IFn$_invoke$arity$1(G__10445),cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1(G__10445),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10445,cljs.core.cst$kw$row,cljs.core.array_seq([cljs.core.cst$kw$col], 0)),null));
});

phogame.game.cursor_pos = (function phogame$game$cursor_pos(game){
var temp__4423__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10453){
var vec__10454 = p__10453;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10454,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10454,(1),null);
return phogame.game.is_cursor_QMARK_(x);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.flatten(game))));
if(cljs.core.truth_(temp__4423__auto__)){
var pos_val = temp__4423__auto__;
var pos = cljs.core.first(pos_val);
var row = ((pos / phogame.game.ntiles_col) | (0));
var col = ((pos - (row * phogame.game.ntiles_col)) | (0));
return (new phogame.game.Position(row,col,null,null,null));
} else {
return null;
}
});
phogame.game.val_game = (function phogame$game$val_game(game,row,col){
return cljs.core.cst$kw$num.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(game,row),col));
});
phogame.game.make_cursor_tile = (function phogame$game$make_cursor_tile(){
return phogame.game.make_tile(phogame.game.ntiles,cljs.core.cst$kw$cursor);
});
phogame.game.direction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up,cljs.core.cst$kw$right,cljs.core.cst$kw$down,cljs.core.cst$kw$left], null);
phogame.game.move_cursor = (function phogame$game$move_cursor(game,can_move_fn_QMARK_,row_fn,col_fn){
if(cljs.core.truth_((can_move_fn_QMARK_.cljs$core$IFn$_invoke$arity$1 ? can_move_fn_QMARK_.cljs$core$IFn$_invoke$arity$1(game) : can_move_fn_QMARK_.call(null,game)))){
var map__10457 = phogame.game.cursor_pos(game);
var map__10457__$1 = ((((!((map__10457 == null)))?((((map__10457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10457):map__10457);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10457__$1,cljs.core.cst$kw$col);
var next_row = (row_fn.cljs$core$IFn$_invoke$arity$1 ? row_fn.cljs$core$IFn$_invoke$arity$1(row) : row_fn.call(null,row));
var next_col = (col_fn.cljs$core$IFn$_invoke$arity$1 ? col_fn.cljs$core$IFn$_invoke$arity$1(col) : col_fn.call(null,col));
var val_above = phogame.game.val_game(game,next_row,next_col);
if(((next_row >= (0))) && ((next_col >= (0))) && ((next_row < phogame.game.ntiles_row)) && ((next_col < phogame.game.ntiles_col))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),((function (map__10457,map__10457__$1,row,col,next_row,next_col,val_above){
return (function (_,val){
return phogame.game.make_game_tile(val);
});})(map__10457,map__10457__$1,row,col,next_row,next_col,val_above))
,val_above),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_row,next_col], null),((function (map__10457,map__10457__$1,row,col,next_row,next_col,val_above){
return (function (x){
return phogame.game.make_cursor_tile();
});})(map__10457,map__10457__$1,row,col,next_row,next_col,val_above))
);
} else {
return game;
}
} else {
return game;
}
});
phogame.game.move_up = (function phogame$game$move_up(game){
return phogame.game.move_cursor(game,phogame.game.can_move_up_QMARK_,cljs.core.dec,cljs.core.identity);
});
/**
 * move the cursor down.
 */
phogame.game.move_down = (function phogame$game$move_down(game){
return phogame.game.move_cursor(game,phogame.game.can_move_down_QMARK_,cljs.core.inc,cljs.core.identity);
});
/**
 * move the cursor left
 */
phogame.game.move_left = (function phogame$game$move_left(game){
return phogame.game.move_cursor(game,phogame.game.can_move_left_QMARK_,cljs.core.identity,cljs.core.dec);
});
/**
 * move the cursor right
 */
phogame.game.move_right = (function phogame$game$move_right(game){
return phogame.game.move_cursor(game,phogame.game.can_move_right_QMARK_,cljs.core.identity,cljs.core.inc);
});
phogame.game.is_done_QMARK_ = (function phogame$game$is_done_QMARK_(game){
if(cljs.core.empty_QMARK_(game)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Error"], 0));
} else {
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10463){
var vec__10464 = p__10463;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10464,(0),null);
var map__10465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10464,(1),null);
var map__10465__$1 = ((((!((map__10465 == null)))?((((map__10465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10465):map__10465);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10465__$1,cljs.core.cst$kw$num);
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((i + (1)),num));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.flatten(game))));
}
});
