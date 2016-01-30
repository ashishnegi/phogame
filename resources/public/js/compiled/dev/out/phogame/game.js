// Compiled by ClojureScript 1.7.170 {}
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
phogame.game.Tile.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17466__auto__,k__17467__auto__){
var self__ = this;
var this__17466__auto____$1 = this;
return cljs.core._lookup.call(null,this__17466__auto____$1,k__17467__auto__,null);
});

phogame.game.Tile.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17468__auto__,k18190,else__17469__auto__){
var self__ = this;
var this__17468__auto____$1 = this;
var G__18192 = (((k18190 instanceof cljs.core.Keyword))?k18190.fqn:null);
switch (G__18192) {
case "num":
return self__.num;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18190,else__17469__auto__);

}
});

phogame.game.Tile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17480__auto__,writer__17481__auto__,opts__17482__auto__){
var self__ = this;
var this__17480__auto____$1 = this;
var pr_pair__17483__auto__ = ((function (this__17480__auto____$1){
return (function (keyval__17484__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17481__auto__,cljs.core.pr_writer,""," ","",opts__17482__auto__,keyval__17484__auto__);
});})(this__17480__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17481__auto__,pr_pair__17483__auto__,"#phogame.game.Tile{",", ","}",opts__17482__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num","num",1985240673),self__.num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null))], null),self__.__extmap));
});

phogame.game.Tile.prototype.cljs$core$IIterable$ = true;

phogame.game.Tile.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18189){
var self__ = this;
var G__18189__$1 = this;
return (new cljs.core.RecordIter((0),G__18189__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.Keyword(null,"type","type",1174270348)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

phogame.game.Tile.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
return self__.__meta;
});

phogame.game.Tile.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17460__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
return (new phogame.game.Tile(self__.num,self__.type,self__.__meta,self__.__extmap,self__.__hash));
});

phogame.game.Tile.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17470__auto__){
var self__ = this;
var this__17470__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

phogame.game.Tile.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17461__auto__){
var self__ = this;
var this__17461__auto____$1 = this;
var h__17287__auto__ = self__.__hash;
if(!((h__17287__auto__ == null))){
return h__17287__auto__;
} else {
var h__17287__auto____$1 = cljs.core.hash_imap.call(null,this__17461__auto____$1);
self__.__hash = h__17287__auto____$1;

return h__17287__auto____$1;
}
});

phogame.game.Tile.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17462__auto__,other__17463__auto__){
var self__ = this;
var this__17462__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16840__auto__ = other__17463__auto__;
if(cljs.core.truth_(and__16840__auto__)){
var and__16840__auto____$1 = (this__17462__auto____$1.constructor === other__17463__auto__.constructor);
if(and__16840__auto____$1){
return cljs.core.equiv_map.call(null,this__17462__auto____$1,other__17463__auto__);
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
})())){
return true;
} else {
return false;
}
});

phogame.game.Tile.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17475__auto__,k__17476__auto__){
var self__ = this;
var this__17475__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__17476__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17475__auto____$1),self__.__meta),k__17476__auto__);
} else {
return (new phogame.game.Tile(self__.num,self__.type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17476__auto__)),null));
}
});

phogame.game.Tile.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17473__auto__,k__17474__auto__,G__18189){
var self__ = this;
var this__17473__auto____$1 = this;
var pred__18193 = cljs.core.keyword_identical_QMARK_;
var expr__18194 = k__17474__auto__;
if(cljs.core.truth_(pred__18193.call(null,new cljs.core.Keyword(null,"num","num",1985240673),expr__18194))){
return (new phogame.game.Tile(G__18189,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18193.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__18194))){
return (new phogame.game.Tile(self__.num,G__18189,self__.__meta,self__.__extmap,null));
} else {
return (new phogame.game.Tile(self__.num,self__.type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17474__auto__,G__18189),null));
}
}
});

phogame.game.Tile.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17478__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num","num",1985240673),self__.num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null))], null),self__.__extmap));
});

phogame.game.Tile.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17465__auto__,G__18189){
var self__ = this;
var this__17465__auto____$1 = this;
return (new phogame.game.Tile(self__.num,self__.type,G__18189,self__.__extmap,self__.__hash));
});

phogame.game.Tile.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17471__auto__,entry__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17472__auto__)){
return cljs.core._assoc.call(null,this__17471__auto____$1,cljs.core._nth.call(null,entry__17472__auto__,(0)),cljs.core._nth.call(null,entry__17472__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17471__auto____$1,entry__17472__auto__);
}
});

phogame.game.Tile.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null);
});

phogame.game.Tile.cljs$lang$type = true;

phogame.game.Tile.cljs$lang$ctorPrSeq = (function (this__17500__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"phogame.game/Tile");
});

phogame.game.Tile.cljs$lang$ctorPrWriter = (function (this__17500__auto__,writer__17501__auto__){
return cljs.core._write.call(null,writer__17501__auto__,"phogame.game/Tile");
});

phogame.game.__GT_Tile = (function phogame$game$__GT_Tile(num,type){
return (new phogame.game.Tile(num,type,null,null,null));
});

phogame.game.map__GT_Tile = (function phogame$game$map__GT_Tile(G__18191){
return (new phogame.game.Tile(new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(G__18191),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__18191),null,cljs.core.dissoc.call(null,G__18191,new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.Keyword(null,"type","type",1174270348)),null));
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
return phogame.game.make_tile.call(null,num,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
} else {
return phogame.game.make_tile.call(null,num,new cljs.core.Keyword(null,"tile","tile",758132866));
}
});
phogame.game.apply_fn = (function phogame$game$apply_fn(state,fn){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,phogame.game.ntiles_col,cljs.core.map.call(null,fn,cljs.core.flatten.call(null,state)))));
});
phogame.game.init_state = phogame.game.apply_fn.call(null,phogame.game.init_pos,phogame.game.make_game_tile);
phogame.game.is_cursor_QMARK_ = (function phogame$game$is_cursor_QMARK_(tile){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tile));
});
phogame.game.has_cursor_QMARK_ = (function phogame$game$has_cursor_QMARK_(tiles_row){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,phogame.game.is_cursor_QMARK_,tiles_row)));
});
/**
 * if cursor is not in first row then we can move up
 */
phogame.game.can_move_up_QMARK_ = (function phogame$game$can_move_up_QMARK_(game){
return cljs.core.not.call(null,phogame.game.has_cursor_QMARK_.call(null,cljs.core.first.call(null,game)));
});
phogame.game.can_move_down_QMARK_ = (function phogame$game$can_move_down_QMARK_(game){
return cljs.core.not.call(null,phogame.game.has_cursor_QMARK_.call(null,cljs.core.last.call(null,game)));
});
phogame.game.can_move_left_QMARK_ = (function phogame$game$can_move_left_QMARK_(game){
return cljs.core.not.call(null,phogame.game.has_cursor_QMARK_.call(null,cljs.core.map.call(null,cljs.core.first,game)));
});
phogame.game.can_move_right_QMARK_ = (function phogame$game$can_move_right_QMARK_(game){
return cljs.core.not.call(null,phogame.game.has_cursor_QMARK_.call(null,cljs.core.map.call(null,cljs.core.last,game)));
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
phogame.game.Position.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17466__auto__,k__17467__auto__){
var self__ = this;
var this__17466__auto____$1 = this;
return cljs.core._lookup.call(null,this__17466__auto____$1,k__17467__auto__,null);
});

phogame.game.Position.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17468__auto__,k18198,else__17469__auto__){
var self__ = this;
var this__17468__auto____$1 = this;
var G__18200 = (((k18198 instanceof cljs.core.Keyword))?k18198.fqn:null);
switch (G__18200) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18198,else__17469__auto__);

}
});

phogame.game.Position.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17480__auto__,writer__17481__auto__,opts__17482__auto__){
var self__ = this;
var this__17480__auto____$1 = this;
var pr_pair__17483__auto__ = ((function (this__17480__auto____$1){
return (function (keyval__17484__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17481__auto__,cljs.core.pr_writer,""," ","",opts__17482__auto__,keyval__17484__auto__);
});})(this__17480__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17481__auto__,pr_pair__17483__auto__,"#phogame.game.Position{",", ","}",opts__17482__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row","row",-570139521),self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

phogame.game.Position.prototype.cljs$core$IIterable$ = true;

phogame.game.Position.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18197){
var self__ = this;
var G__18197__$1 = this;
return (new cljs.core.RecordIter((0),G__18197__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

phogame.game.Position.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
return self__.__meta;
});

phogame.game.Position.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17460__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
return (new phogame.game.Position(self__.row,self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

phogame.game.Position.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17470__auto__){
var self__ = this;
var this__17470__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

phogame.game.Position.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17461__auto__){
var self__ = this;
var this__17461__auto____$1 = this;
var h__17287__auto__ = self__.__hash;
if(!((h__17287__auto__ == null))){
return h__17287__auto__;
} else {
var h__17287__auto____$1 = cljs.core.hash_imap.call(null,this__17461__auto____$1);
self__.__hash = h__17287__auto____$1;

return h__17287__auto____$1;
}
});

phogame.game.Position.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17462__auto__,other__17463__auto__){
var self__ = this;
var this__17462__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16840__auto__ = other__17463__auto__;
if(cljs.core.truth_(and__16840__auto__)){
var and__16840__auto____$1 = (this__17462__auto____$1.constructor === other__17463__auto__.constructor);
if(and__16840__auto____$1){
return cljs.core.equiv_map.call(null,this__17462__auto____$1,other__17463__auto__);
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
})())){
return true;
} else {
return false;
}
});

phogame.game.Position.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17475__auto__,k__17476__auto__){
var self__ = this;
var this__17475__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col","col",-1959363084),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),k__17476__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17475__auto____$1),self__.__meta),k__17476__auto__);
} else {
return (new phogame.game.Position(self__.row,self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17476__auto__)),null));
}
});

phogame.game.Position.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17473__auto__,k__17474__auto__,G__18197){
var self__ = this;
var this__17473__auto____$1 = this;
var pred__18201 = cljs.core.keyword_identical_QMARK_;
var expr__18202 = k__17474__auto__;
if(cljs.core.truth_(pred__18201.call(null,new cljs.core.Keyword(null,"row","row",-570139521),expr__18202))){
return (new phogame.game.Position(G__18197,self__.col,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18201.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__18202))){
return (new phogame.game.Position(self__.row,G__18197,self__.__meta,self__.__extmap,null));
} else {
return (new phogame.game.Position(self__.row,self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17474__auto__,G__18197),null));
}
}
});

phogame.game.Position.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17478__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row","row",-570139521),self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

phogame.game.Position.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17465__auto__,G__18197){
var self__ = this;
var this__17465__auto____$1 = this;
return (new phogame.game.Position(self__.row,self__.col,G__18197,self__.__extmap,self__.__hash));
});

phogame.game.Position.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17471__auto__,entry__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17472__auto__)){
return cljs.core._assoc.call(null,this__17471__auto____$1,cljs.core._nth.call(null,entry__17472__auto__,(0)),cljs.core._nth.call(null,entry__17472__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17471__auto____$1,entry__17472__auto__);
}
});

phogame.game.Position.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"int","int",-100885395,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"int","int",-100885395,null)], null))], null);
});

phogame.game.Position.cljs$lang$type = true;

phogame.game.Position.cljs$lang$ctorPrSeq = (function (this__17500__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"phogame.game/Position");
});

phogame.game.Position.cljs$lang$ctorPrWriter = (function (this__17500__auto__,writer__17501__auto__){
return cljs.core._write.call(null,writer__17501__auto__,"phogame.game/Position");
});

phogame.game.__GT_Position = (function phogame$game$__GT_Position(row,col){
return (new phogame.game.Position(row,col,null,null,null));
});

phogame.game.map__GT_Position = (function phogame$game$map__GT_Position(G__18199){
return (new phogame.game.Position(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(G__18199),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__18199),null,cljs.core.dissoc.call(null,G__18199,new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)),null));
});

phogame.game.cursor_pos = (function phogame$game$cursor_pos(game){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__18207){
var vec__18208 = p__18207;
var _ = cljs.core.nth.call(null,vec__18208,(0),null);
var x = cljs.core.nth.call(null,vec__18208,(1),null);
return phogame.game.is_cursor_QMARK_.call(null,x);
}),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.flatten.call(null,game))));
if(cljs.core.truth_(temp__4423__auto__)){
var pos_val = temp__4423__auto__;
var pos = cljs.core.first.call(null,pos_val);
var row = ((pos / phogame.game.ntiles_col) | (0));
var col = ((pos - (row * phogame.game.ntiles_col)) | (0));
return (new phogame.game.Position(row,col,null,null,null));
} else {
return null;
}
});
phogame.game.val_game = (function phogame$game$val_game(game,row,col){
return new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,game,row),col));
});
phogame.game.make_cursor_tile = (function phogame$game$make_cursor_tile(){
return phogame.game.make_tile.call(null,phogame.game.ntiles,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
});
phogame.game.direction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"left","left",-399115937)], null);
phogame.game.move_cursor = (function phogame$game$move_cursor(game,can_move_fn_QMARK_,row_fn,col_fn){
if(cljs.core.truth_(can_move_fn_QMARK_.call(null,game))){
var map__18211 = phogame.game.cursor_pos.call(null,game);
var map__18211__$1 = ((((!((map__18211 == null)))?((((map__18211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18211):map__18211);
var row = cljs.core.get.call(null,map__18211__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__18211__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var next_row = row_fn.call(null,row);
var next_col = col_fn.call(null,col);
var val_above = phogame.game.val_game.call(null,game,next_row,next_col);
if(((next_row >= (0))) && ((next_col >= (0))) && ((next_row < phogame.game.ntiles_row)) && ((next_col < phogame.game.ntiles_col))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),((function (map__18211,map__18211__$1,row,col,next_row,next_col,val_above){
return (function (_,val){
return phogame.game.make_game_tile.call(null,val);
});})(map__18211,map__18211__$1,row,col,next_row,next_col,val_above))
,val_above),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_row,next_col], null),((function (map__18211,map__18211__$1,row,col,next_row,next_col,val_above){
return (function (x){
return phogame.game.make_cursor_tile.call(null);
});})(map__18211,map__18211__$1,row,col,next_row,next_col,val_above))
);
} else {
return game;
}
} else {
return game;
}
});
phogame.game.move_up = (function phogame$game$move_up(game){
return phogame.game.move_cursor.call(null,game,phogame.game.can_move_up_QMARK_,cljs.core.dec,cljs.core.identity);
});
/**
 * move the cursor down.
 */
phogame.game.move_down = (function phogame$game$move_down(game){
return phogame.game.move_cursor.call(null,game,phogame.game.can_move_down_QMARK_,cljs.core.inc,cljs.core.identity);
});
/**
 * move the cursor left
 */
phogame.game.move_left = (function phogame$game$move_left(game){
return phogame.game.move_cursor.call(null,game,phogame.game.can_move_left_QMARK_,cljs.core.identity,cljs.core.dec);
});
/**
 * move the cursor right
 */
phogame.game.move_right = (function phogame$game$move_right(game){
return phogame.game.move_cursor.call(null,game,phogame.game.can_move_right_QMARK_,cljs.core.identity,cljs.core.inc);
});
phogame.game.is_done_QMARK_ = (function phogame$game$is_done_QMARK_(game){
if(cljs.core.empty_QMARK_.call(null,game)){
return cljs.core.println.call(null,"Error");
} else {
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,(function (p__18217){
var vec__18218 = p__18217;
var i = cljs.core.nth.call(null,vec__18218,(0),null);
var map__18219 = cljs.core.nth.call(null,vec__18218,(1),null);
var map__18219__$1 = ((((!((map__18219 == null)))?((((map__18219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18219):map__18219);
var num = cljs.core.get.call(null,map__18219__$1,new cljs.core.Keyword(null,"num","num",1985240673));
return !(cljs.core._EQ_.call(null,(i + (1)),num));
}),cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.flatten.call(null,game))));
}
});

//# sourceMappingURL=game.js.map?rel=1454142141923