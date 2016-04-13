// Compiled by ClojureScript 1.7.228 {}
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
var pred__26594 = cljs.core._EQ_;
var expr__26595 = (function (){var or__18298__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e26598){if((e26598 instanceof Error)){
var e = e26598;
return false;
} else {
throw e26598;

}
}})();
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26594.call(null,"true",expr__26595))){
return true;
} else {
if(cljs.core.truth_(pred__26594.call(null,"false",expr__26595))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26595)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e26600){if((e26600 instanceof Error)){
var e = e26600;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e26600;

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
var args__19363__auto__ = [];
var len__19356__auto___26602 = arguments.length;
var i__19357__auto___26603 = (0);
while(true){
if((i__19357__auto___26603 < len__19356__auto___26602)){
args__19363__auto__.push((arguments[i__19357__auto___26603]));

var G__26604 = (i__19357__auto___26603 + (1));
i__19357__auto___26603 = G__26604;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((0) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19364__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26601){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26601));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26605){
var map__26608 = p__26605;
var map__26608__$1 = ((((!((map__26608 == null)))?((((map__26608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26608):map__26608);
var message = cljs.core.get.call(null,map__26608__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26608__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18298__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18298__auto__)){
return or__18298__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18286__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18286__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18286__auto__;
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
var c__20451__auto___26770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___26770,ch){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___26770,ch){
return (function (state_26739){
var state_val_26740 = (state_26739[(1)]);
if((state_val_26740 === (7))){
var inst_26735 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26741_26771 = state_26739__$1;
(statearr_26741_26771[(2)] = inst_26735);

(statearr_26741_26771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (1))){
var state_26739__$1 = state_26739;
var statearr_26742_26772 = state_26739__$1;
(statearr_26742_26772[(2)] = null);

(statearr_26742_26772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (4))){
var inst_26692 = (state_26739[(7)]);
var inst_26692__$1 = (state_26739[(2)]);
var state_26739__$1 = (function (){var statearr_26743 = state_26739;
(statearr_26743[(7)] = inst_26692__$1);

return statearr_26743;
})();
if(cljs.core.truth_(inst_26692__$1)){
var statearr_26744_26773 = state_26739__$1;
(statearr_26744_26773[(1)] = (5));

} else {
var statearr_26745_26774 = state_26739__$1;
(statearr_26745_26774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (15))){
var inst_26699 = (state_26739[(8)]);
var inst_26714 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26699);
var inst_26715 = cljs.core.first.call(null,inst_26714);
var inst_26716 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26715);
var inst_26717 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26716)].join('');
var inst_26718 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26717);
var state_26739__$1 = state_26739;
var statearr_26746_26775 = state_26739__$1;
(statearr_26746_26775[(2)] = inst_26718);

(statearr_26746_26775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (13))){
var inst_26723 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26747_26776 = state_26739__$1;
(statearr_26747_26776[(2)] = inst_26723);

(statearr_26747_26776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (6))){
var state_26739__$1 = state_26739;
var statearr_26748_26777 = state_26739__$1;
(statearr_26748_26777[(2)] = null);

(statearr_26748_26777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (17))){
var inst_26721 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26749_26778 = state_26739__$1;
(statearr_26749_26778[(2)] = inst_26721);

(statearr_26749_26778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (3))){
var inst_26737 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26739__$1,inst_26737);
} else {
if((state_val_26740 === (12))){
var inst_26698 = (state_26739[(9)]);
var inst_26712 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26698,opts);
var state_26739__$1 = state_26739;
if(cljs.core.truth_(inst_26712)){
var statearr_26750_26779 = state_26739__$1;
(statearr_26750_26779[(1)] = (15));

} else {
var statearr_26751_26780 = state_26739__$1;
(statearr_26751_26780[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (2))){
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26739__$1,(4),ch);
} else {
if((state_val_26740 === (11))){
var inst_26699 = (state_26739[(8)]);
var inst_26704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26705 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26699);
var inst_26706 = cljs.core.async.timeout.call(null,(1000));
var inst_26707 = [inst_26705,inst_26706];
var inst_26708 = (new cljs.core.PersistentVector(null,2,(5),inst_26704,inst_26707,null));
var state_26739__$1 = state_26739;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26739__$1,(14),inst_26708);
} else {
if((state_val_26740 === (9))){
var inst_26699 = (state_26739[(8)]);
var inst_26725 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26726 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26699);
var inst_26727 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26726);
var inst_26728 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26727)].join('');
var inst_26729 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26728);
var state_26739__$1 = (function (){var statearr_26752 = state_26739;
(statearr_26752[(10)] = inst_26725);

return statearr_26752;
})();
var statearr_26753_26781 = state_26739__$1;
(statearr_26753_26781[(2)] = inst_26729);

(statearr_26753_26781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (5))){
var inst_26692 = (state_26739[(7)]);
var inst_26694 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26695 = (new cljs.core.PersistentArrayMap(null,2,inst_26694,null));
var inst_26696 = (new cljs.core.PersistentHashSet(null,inst_26695,null));
var inst_26697 = figwheel.client.focus_msgs.call(null,inst_26696,inst_26692);
var inst_26698 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26697);
var inst_26699 = cljs.core.first.call(null,inst_26697);
var inst_26700 = figwheel.client.autoload_QMARK_.call(null);
var state_26739__$1 = (function (){var statearr_26754 = state_26739;
(statearr_26754[(9)] = inst_26698);

(statearr_26754[(8)] = inst_26699);

return statearr_26754;
})();
if(cljs.core.truth_(inst_26700)){
var statearr_26755_26782 = state_26739__$1;
(statearr_26755_26782[(1)] = (8));

} else {
var statearr_26756_26783 = state_26739__$1;
(statearr_26756_26783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (14))){
var inst_26710 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26757_26784 = state_26739__$1;
(statearr_26757_26784[(2)] = inst_26710);

(statearr_26757_26784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (16))){
var state_26739__$1 = state_26739;
var statearr_26758_26785 = state_26739__$1;
(statearr_26758_26785[(2)] = null);

(statearr_26758_26785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (10))){
var inst_26731 = (state_26739[(2)]);
var state_26739__$1 = (function (){var statearr_26759 = state_26739;
(statearr_26759[(11)] = inst_26731);

return statearr_26759;
})();
var statearr_26760_26786 = state_26739__$1;
(statearr_26760_26786[(2)] = null);

(statearr_26760_26786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (8))){
var inst_26698 = (state_26739[(9)]);
var inst_26702 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26698,opts);
var state_26739__$1 = state_26739;
if(cljs.core.truth_(inst_26702)){
var statearr_26761_26787 = state_26739__$1;
(statearr_26761_26787[(1)] = (11));

} else {
var statearr_26762_26788 = state_26739__$1;
(statearr_26762_26788[(1)] = (12));

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
});})(c__20451__auto___26770,ch))
;
return ((function (switch__20339__auto__,c__20451__auto___26770,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20340__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20340__auto____0 = (function (){
var statearr_26766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26766[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20340__auto__);

(statearr_26766[(1)] = (1));

return statearr_26766;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20340__auto____1 = (function (state_26739){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_26739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e26767){if((e26767 instanceof Object)){
var ex__20343__auto__ = e26767;
var statearr_26768_26789 = state_26739;
(statearr_26768_26789[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26790 = state_26739;
state_26739 = G__26790;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20340__auto__ = function(state_26739){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20340__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20340__auto____1.call(this,state_26739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20340__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20340__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___26770,ch))
})();
var state__20453__auto__ = (function (){var statearr_26769 = f__20452__auto__.call(null);
(statearr_26769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___26770);

return statearr_26769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___26770,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26791_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26791_SHARP_));
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
var base_path_26798 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26798){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26796 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26797 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26797;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26796;
}}catch (e26795){if((e26795 instanceof Error)){
var e = e26795;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26798], null));
} else {
var e = e26795;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26798))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26799){
var map__26806 = p__26799;
var map__26806__$1 = ((((!((map__26806 == null)))?((((map__26806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26806):map__26806);
var opts = map__26806__$1;
var build_id = cljs.core.get.call(null,map__26806__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26806,map__26806__$1,opts,build_id){
return (function (p__26808){
var vec__26809 = p__26808;
var map__26810 = cljs.core.nth.call(null,vec__26809,(0),null);
var map__26810__$1 = ((((!((map__26810 == null)))?((((map__26810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26810):map__26810);
var msg = map__26810__$1;
var msg_name = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26809,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26809,map__26810,map__26810__$1,msg,msg_name,_,map__26806,map__26806__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26809,map__26810,map__26810__$1,msg,msg_name,_,map__26806,map__26806__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26806,map__26806__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26816){
var vec__26817 = p__26816;
var map__26818 = cljs.core.nth.call(null,vec__26817,(0),null);
var map__26818__$1 = ((((!((map__26818 == null)))?((((map__26818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26818):map__26818);
var msg = map__26818__$1;
var msg_name = cljs.core.get.call(null,map__26818__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26817,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26820){
var map__26830 = p__26820;
var map__26830__$1 = ((((!((map__26830 == null)))?((((map__26830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26830):map__26830);
var on_compile_warning = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26830,map__26830__$1,on_compile_warning,on_compile_fail){
return (function (p__26832){
var vec__26833 = p__26832;
var map__26834 = cljs.core.nth.call(null,vec__26833,(0),null);
var map__26834__$1 = ((((!((map__26834 == null)))?((((map__26834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);
var msg = map__26834__$1;
var msg_name = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26833,(1));
var pred__26836 = cljs.core._EQ_;
var expr__26837 = msg_name;
if(cljs.core.truth_(pred__26836.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26837))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26836.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26837))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26830,map__26830__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__,msg_hist,msg_names,msg){
return (function (state_27053){
var state_val_27054 = (state_27053[(1)]);
if((state_val_27054 === (7))){
var inst_26977 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
if(cljs.core.truth_(inst_26977)){
var statearr_27055_27101 = state_27053__$1;
(statearr_27055_27101[(1)] = (8));

} else {
var statearr_27056_27102 = state_27053__$1;
(statearr_27056_27102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (20))){
var inst_27047 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27057_27103 = state_27053__$1;
(statearr_27057_27103[(2)] = inst_27047);

(statearr_27057_27103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (27))){
var inst_27043 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27058_27104 = state_27053__$1;
(statearr_27058_27104[(2)] = inst_27043);

(statearr_27058_27104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (1))){
var inst_26970 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27053__$1 = state_27053;
if(cljs.core.truth_(inst_26970)){
var statearr_27059_27105 = state_27053__$1;
(statearr_27059_27105[(1)] = (2));

} else {
var statearr_27060_27106 = state_27053__$1;
(statearr_27060_27106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (24))){
var inst_27045 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27061_27107 = state_27053__$1;
(statearr_27061_27107[(2)] = inst_27045);

(statearr_27061_27107[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (4))){
var inst_27051 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27053__$1,inst_27051);
} else {
if((state_val_27054 === (15))){
var inst_27049 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27062_27108 = state_27053__$1;
(statearr_27062_27108[(2)] = inst_27049);

(statearr_27062_27108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (21))){
var inst_27008 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27063_27109 = state_27053__$1;
(statearr_27063_27109[(2)] = inst_27008);

(statearr_27063_27109[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (31))){
var inst_27032 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27053__$1 = state_27053;
if(cljs.core.truth_(inst_27032)){
var statearr_27064_27110 = state_27053__$1;
(statearr_27064_27110[(1)] = (34));

} else {
var statearr_27065_27111 = state_27053__$1;
(statearr_27065_27111[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (32))){
var inst_27041 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27066_27112 = state_27053__$1;
(statearr_27066_27112[(2)] = inst_27041);

(statearr_27066_27112[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (33))){
var inst_27030 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27067_27113 = state_27053__$1;
(statearr_27067_27113[(2)] = inst_27030);

(statearr_27067_27113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (13))){
var inst_26991 = figwheel.client.heads_up.clear.call(null);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(16),inst_26991);
} else {
if((state_val_27054 === (22))){
var inst_27012 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27013 = figwheel.client.heads_up.append_message.call(null,inst_27012);
var state_27053__$1 = state_27053;
var statearr_27068_27114 = state_27053__$1;
(statearr_27068_27114[(2)] = inst_27013);

(statearr_27068_27114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (36))){
var inst_27039 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27069_27115 = state_27053__$1;
(statearr_27069_27115[(2)] = inst_27039);

(statearr_27069_27115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (29))){
var inst_27023 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27070_27116 = state_27053__$1;
(statearr_27070_27116[(2)] = inst_27023);

(statearr_27070_27116[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (6))){
var inst_26972 = (state_27053[(7)]);
var state_27053__$1 = state_27053;
var statearr_27071_27117 = state_27053__$1;
(statearr_27071_27117[(2)] = inst_26972);

(statearr_27071_27117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (28))){
var inst_27019 = (state_27053[(2)]);
var inst_27020 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27021 = figwheel.client.heads_up.display_warning.call(null,inst_27020);
var state_27053__$1 = (function (){var statearr_27072 = state_27053;
(statearr_27072[(8)] = inst_27019);

return statearr_27072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(29),inst_27021);
} else {
if((state_val_27054 === (25))){
var inst_27017 = figwheel.client.heads_up.clear.call(null);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(28),inst_27017);
} else {
if((state_val_27054 === (34))){
var inst_27034 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(37),inst_27034);
} else {
if((state_val_27054 === (17))){
var inst_26999 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27073_27118 = state_27053__$1;
(statearr_27073_27118[(2)] = inst_26999);

(statearr_27073_27118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (3))){
var inst_26989 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27053__$1 = state_27053;
if(cljs.core.truth_(inst_26989)){
var statearr_27074_27119 = state_27053__$1;
(statearr_27074_27119[(1)] = (13));

} else {
var statearr_27075_27120 = state_27053__$1;
(statearr_27075_27120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (12))){
var inst_26985 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27076_27121 = state_27053__$1;
(statearr_27076_27121[(2)] = inst_26985);

(statearr_27076_27121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (2))){
var inst_26972 = (state_27053[(7)]);
var inst_26972__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27053__$1 = (function (){var statearr_27077 = state_27053;
(statearr_27077[(7)] = inst_26972__$1);

return statearr_27077;
})();
if(cljs.core.truth_(inst_26972__$1)){
var statearr_27078_27122 = state_27053__$1;
(statearr_27078_27122[(1)] = (5));

} else {
var statearr_27079_27123 = state_27053__$1;
(statearr_27079_27123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (23))){
var inst_27015 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27053__$1 = state_27053;
if(cljs.core.truth_(inst_27015)){
var statearr_27080_27124 = state_27053__$1;
(statearr_27080_27124[(1)] = (25));

} else {
var statearr_27081_27125 = state_27053__$1;
(statearr_27081_27125[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (35))){
var state_27053__$1 = state_27053;
var statearr_27082_27126 = state_27053__$1;
(statearr_27082_27126[(2)] = null);

(statearr_27082_27126[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (19))){
var inst_27010 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27053__$1 = state_27053;
if(cljs.core.truth_(inst_27010)){
var statearr_27083_27127 = state_27053__$1;
(statearr_27083_27127[(1)] = (22));

} else {
var statearr_27084_27128 = state_27053__$1;
(statearr_27084_27128[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (11))){
var inst_26981 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27085_27129 = state_27053__$1;
(statearr_27085_27129[(2)] = inst_26981);

(statearr_27085_27129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (9))){
var inst_26983 = figwheel.client.heads_up.clear.call(null);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(12),inst_26983);
} else {
if((state_val_27054 === (5))){
var inst_26974 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27053__$1 = state_27053;
var statearr_27086_27130 = state_27053__$1;
(statearr_27086_27130[(2)] = inst_26974);

(statearr_27086_27130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (14))){
var inst_27001 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27053__$1 = state_27053;
if(cljs.core.truth_(inst_27001)){
var statearr_27087_27131 = state_27053__$1;
(statearr_27087_27131[(1)] = (18));

} else {
var statearr_27088_27132 = state_27053__$1;
(statearr_27088_27132[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (26))){
var inst_27025 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27053__$1 = state_27053;
if(cljs.core.truth_(inst_27025)){
var statearr_27089_27133 = state_27053__$1;
(statearr_27089_27133[(1)] = (30));

} else {
var statearr_27090_27134 = state_27053__$1;
(statearr_27090_27134[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (16))){
var inst_26993 = (state_27053[(2)]);
var inst_26994 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26995 = figwheel.client.format_messages.call(null,inst_26994);
var inst_26996 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26997 = figwheel.client.heads_up.display_error.call(null,inst_26995,inst_26996);
var state_27053__$1 = (function (){var statearr_27091 = state_27053;
(statearr_27091[(9)] = inst_26993);

return statearr_27091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(17),inst_26997);
} else {
if((state_val_27054 === (30))){
var inst_27027 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27028 = figwheel.client.heads_up.display_warning.call(null,inst_27027);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(33),inst_27028);
} else {
if((state_val_27054 === (10))){
var inst_26987 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27092_27135 = state_27053__$1;
(statearr_27092_27135[(2)] = inst_26987);

(statearr_27092_27135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (18))){
var inst_27003 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27004 = figwheel.client.format_messages.call(null,inst_27003);
var inst_27005 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27006 = figwheel.client.heads_up.display_error.call(null,inst_27004,inst_27005);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(21),inst_27006);
} else {
if((state_val_27054 === (37))){
var inst_27036 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27093_27136 = state_27053__$1;
(statearr_27093_27136[(2)] = inst_27036);

(statearr_27093_27136[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (8))){
var inst_26979 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(11),inst_26979);
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
});})(c__20451__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20339__auto__,c__20451__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto____0 = (function (){
var statearr_27097 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27097[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto__);

(statearr_27097[(1)] = (1));

return statearr_27097;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto____1 = (function (state_27053){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_27053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e27098){if((e27098 instanceof Object)){
var ex__20343__auto__ = e27098;
var statearr_27099_27137 = state_27053;
(statearr_27099_27137[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27138 = state_27053;
state_27053 = G__27138;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto__ = function(state_27053){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto____1.call(this,state_27053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__,msg_hist,msg_names,msg))
})();
var state__20453__auto__ = (function (){var statearr_27100 = f__20452__auto__.call(null);
(statearr_27100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_27100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__,msg_hist,msg_names,msg))
);

return c__20451__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20451__auto___27201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto___27201,ch){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto___27201,ch){
return (function (state_27184){
var state_val_27185 = (state_27184[(1)]);
if((state_val_27185 === (1))){
var state_27184__$1 = state_27184;
var statearr_27186_27202 = state_27184__$1;
(statearr_27186_27202[(2)] = null);

(statearr_27186_27202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (2))){
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27184__$1,(4),ch);
} else {
if((state_val_27185 === (3))){
var inst_27182 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27184__$1,inst_27182);
} else {
if((state_val_27185 === (4))){
var inst_27172 = (state_27184[(7)]);
var inst_27172__$1 = (state_27184[(2)]);
var state_27184__$1 = (function (){var statearr_27187 = state_27184;
(statearr_27187[(7)] = inst_27172__$1);

return statearr_27187;
})();
if(cljs.core.truth_(inst_27172__$1)){
var statearr_27188_27203 = state_27184__$1;
(statearr_27188_27203[(1)] = (5));

} else {
var statearr_27189_27204 = state_27184__$1;
(statearr_27189_27204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (5))){
var inst_27172 = (state_27184[(7)]);
var inst_27174 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27172);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27184__$1,(8),inst_27174);
} else {
if((state_val_27185 === (6))){
var state_27184__$1 = state_27184;
var statearr_27190_27205 = state_27184__$1;
(statearr_27190_27205[(2)] = null);

(statearr_27190_27205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (7))){
var inst_27180 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27191_27206 = state_27184__$1;
(statearr_27191_27206[(2)] = inst_27180);

(statearr_27191_27206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (8))){
var inst_27176 = (state_27184[(2)]);
var state_27184__$1 = (function (){var statearr_27192 = state_27184;
(statearr_27192[(8)] = inst_27176);

return statearr_27192;
})();
var statearr_27193_27207 = state_27184__$1;
(statearr_27193_27207[(2)] = null);

(statearr_27193_27207[(1)] = (2));


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
});})(c__20451__auto___27201,ch))
;
return ((function (switch__20339__auto__,c__20451__auto___27201,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20340__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20340__auto____0 = (function (){
var statearr_27197 = [null,null,null,null,null,null,null,null,null];
(statearr_27197[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20340__auto__);

(statearr_27197[(1)] = (1));

return statearr_27197;
});
var figwheel$client$heads_up_plugin_$_state_machine__20340__auto____1 = (function (state_27184){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_27184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e27198){if((e27198 instanceof Object)){
var ex__20343__auto__ = e27198;
var statearr_27199_27208 = state_27184;
(statearr_27199_27208[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27209 = state_27184;
state_27184 = G__27209;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20340__auto__ = function(state_27184){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20340__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20340__auto____1.call(this,state_27184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20340__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20340__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto___27201,ch))
})();
var state__20453__auto__ = (function (){var statearr_27200 = f__20452__auto__.call(null);
(statearr_27200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto___27201);

return statearr_27200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto___27201,ch))
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
var c__20451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20451__auto__){
return (function (){
var f__20452__auto__ = (function (){var switch__20339__auto__ = ((function (c__20451__auto__){
return (function (state_27230){
var state_val_27231 = (state_27230[(1)]);
if((state_val_27231 === (1))){
var inst_27225 = cljs.core.async.timeout.call(null,(3000));
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(2),inst_27225);
} else {
if((state_val_27231 === (2))){
var inst_27227 = (state_27230[(2)]);
var inst_27228 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27230__$1 = (function (){var statearr_27232 = state_27230;
(statearr_27232[(7)] = inst_27227);

return statearr_27232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27230__$1,inst_27228);
} else {
return null;
}
}
});})(c__20451__auto__))
;
return ((function (switch__20339__auto__,c__20451__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20340__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20340__auto____0 = (function (){
var statearr_27236 = [null,null,null,null,null,null,null,null];
(statearr_27236[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20340__auto__);

(statearr_27236[(1)] = (1));

return statearr_27236;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20340__auto____1 = (function (state_27230){
while(true){
var ret_value__20341__auto__ = (function (){try{while(true){
var result__20342__auto__ = switch__20339__auto__.call(null,state_27230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20342__auto__;
}
break;
}
}catch (e27237){if((e27237 instanceof Object)){
var ex__20343__auto__ = e27237;
var statearr_27238_27240 = state_27230;
(statearr_27238_27240[(5)] = ex__20343__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27241 = state_27230;
state_27230 = G__27241;
continue;
} else {
return ret_value__20341__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20340__auto__ = function(state_27230){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20340__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20340__auto____1.call(this,state_27230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20340__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20340__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20340__auto__;
})()
;})(switch__20339__auto__,c__20451__auto__))
})();
var state__20453__auto__ = (function (){var statearr_27239 = f__20452__auto__.call(null);
(statearr_27239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20451__auto__);

return statearr_27239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20453__auto__);
});})(c__20451__auto__))
);

return c__20451__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27242){
var map__27249 = p__27242;
var map__27249__$1 = ((((!((map__27249 == null)))?((((map__27249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27249):map__27249);
var ed = map__27249__$1;
var formatted_exception = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27251_27255 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27252_27256 = null;
var count__27253_27257 = (0);
var i__27254_27258 = (0);
while(true){
if((i__27254_27258 < count__27253_27257)){
var msg_27259 = cljs.core._nth.call(null,chunk__27252_27256,i__27254_27258);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27259);

var G__27260 = seq__27251_27255;
var G__27261 = chunk__27252_27256;
var G__27262 = count__27253_27257;
var G__27263 = (i__27254_27258 + (1));
seq__27251_27255 = G__27260;
chunk__27252_27256 = G__27261;
count__27253_27257 = G__27262;
i__27254_27258 = G__27263;
continue;
} else {
var temp__4657__auto___27264 = cljs.core.seq.call(null,seq__27251_27255);
if(temp__4657__auto___27264){
var seq__27251_27265__$1 = temp__4657__auto___27264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27251_27265__$1)){
var c__19101__auto___27266 = cljs.core.chunk_first.call(null,seq__27251_27265__$1);
var G__27267 = cljs.core.chunk_rest.call(null,seq__27251_27265__$1);
var G__27268 = c__19101__auto___27266;
var G__27269 = cljs.core.count.call(null,c__19101__auto___27266);
var G__27270 = (0);
seq__27251_27255 = G__27267;
chunk__27252_27256 = G__27268;
count__27253_27257 = G__27269;
i__27254_27258 = G__27270;
continue;
} else {
var msg_27271 = cljs.core.first.call(null,seq__27251_27265__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27271);

var G__27272 = cljs.core.next.call(null,seq__27251_27265__$1);
var G__27273 = null;
var G__27274 = (0);
var G__27275 = (0);
seq__27251_27255 = G__27272;
chunk__27252_27256 = G__27273;
count__27253_27257 = G__27274;
i__27254_27258 = G__27275;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27276){
var map__27279 = p__27276;
var map__27279__$1 = ((((!((map__27279 == null)))?((((map__27279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27279):map__27279);
var w = map__27279__$1;
var message = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18286__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18286__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18286__auto__;
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
var seq__27287 = cljs.core.seq.call(null,plugins);
var chunk__27288 = null;
var count__27289 = (0);
var i__27290 = (0);
while(true){
if((i__27290 < count__27289)){
var vec__27291 = cljs.core._nth.call(null,chunk__27288,i__27290);
var k = cljs.core.nth.call(null,vec__27291,(0),null);
var plugin = cljs.core.nth.call(null,vec__27291,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27293 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27287,chunk__27288,count__27289,i__27290,pl_27293,vec__27291,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27293.call(null,msg_hist);
});})(seq__27287,chunk__27288,count__27289,i__27290,pl_27293,vec__27291,k,plugin))
);
} else {
}

var G__27294 = seq__27287;
var G__27295 = chunk__27288;
var G__27296 = count__27289;
var G__27297 = (i__27290 + (1));
seq__27287 = G__27294;
chunk__27288 = G__27295;
count__27289 = G__27296;
i__27290 = G__27297;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27287);
if(temp__4657__auto__){
var seq__27287__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27287__$1)){
var c__19101__auto__ = cljs.core.chunk_first.call(null,seq__27287__$1);
var G__27298 = cljs.core.chunk_rest.call(null,seq__27287__$1);
var G__27299 = c__19101__auto__;
var G__27300 = cljs.core.count.call(null,c__19101__auto__);
var G__27301 = (0);
seq__27287 = G__27298;
chunk__27288 = G__27299;
count__27289 = G__27300;
i__27290 = G__27301;
continue;
} else {
var vec__27292 = cljs.core.first.call(null,seq__27287__$1);
var k = cljs.core.nth.call(null,vec__27292,(0),null);
var plugin = cljs.core.nth.call(null,vec__27292,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27302 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27287,chunk__27288,count__27289,i__27290,pl_27302,vec__27292,k,plugin,seq__27287__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27302.call(null,msg_hist);
});})(seq__27287,chunk__27288,count__27289,i__27290,pl_27302,vec__27292,k,plugin,seq__27287__$1,temp__4657__auto__))
);
} else {
}

var G__27303 = cljs.core.next.call(null,seq__27287__$1);
var G__27304 = null;
var G__27305 = (0);
var G__27306 = (0);
seq__27287 = G__27303;
chunk__27288 = G__27304;
count__27289 = G__27305;
i__27290 = G__27306;
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
var args27307 = [];
var len__19356__auto___27310 = arguments.length;
var i__19357__auto___27311 = (0);
while(true){
if((i__19357__auto___27311 < len__19356__auto___27310)){
args27307.push((arguments[i__19357__auto___27311]));

var G__27312 = (i__19357__auto___27311 + (1));
i__19357__auto___27311 = G__27312;
continue;
} else {
}
break;
}

var G__27309 = args27307.length;
switch (G__27309) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27307.length)].join('')));

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
var args__19363__auto__ = [];
var len__19356__auto___27318 = arguments.length;
var i__19357__auto___27319 = (0);
while(true){
if((i__19357__auto___27319 < len__19356__auto___27318)){
args__19363__auto__.push((arguments[i__19357__auto___27319]));

var G__27320 = (i__19357__auto___27319 + (1));
i__19357__auto___27319 = G__27320;
continue;
} else {
}
break;
}

var argseq__19364__auto__ = ((((0) < args__19363__auto__.length))?(new cljs.core.IndexedSeq(args__19363__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19364__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27315){
var map__27316 = p__27315;
var map__27316__$1 = ((((!((map__27316 == null)))?((((map__27316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);
var opts = map__27316__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27314){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27314));
});

//# sourceMappingURL=client.js.map