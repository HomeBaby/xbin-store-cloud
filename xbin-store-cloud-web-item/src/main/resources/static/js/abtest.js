/*!Name: abtest.js
 * Date: 2017-2-14 17:14:18 */
define("MOD_ROOT/js/abtest",function(require,exports,module){var t=function(t,s,o){return this.id=t,this.percent=s,this.base=o||1e4,this.tested=!1,this.version={A:0,B:0,N:0},this.result={A:[],B:[],N:[]},this};t.prototype={test:function(){function t(){var t=o.version;console.log("%c====================\u7ed3\u679c====================","color:#f00");for(var s in t)console.info("| \u7248\u672c"+s+"\u547d\u4e2d\u4e86"+t[s]/100+"	% \u7684uuuid");console.log("%c====================\u7ed3\u679c====================","color:#f00"),o.tested=!0}function s(s){for(var e=s,i=s.length,n=[],r=0;i>r;r++)n.push("UUUID\u300c"+e[r]+"\u300d	\u547d\u4e2d\u4e86 \u7248\u672c\u300c"+o.isHitVersion(e[r])+"\u300d");console.log(n.join("\n")),t()}var o=this;window.collectUUUID=function(t){s(t)},$.ajax({url:"//nfa.jd.com/loadFa_toJson.js?aid=2_163_4827-2_163_4828",dataType:"jsonp",cache:!0,success:function(t){}})},isHitVersion:function(t){t=t||this.id;var s,o=this.base*this.percent;return"string"!=typeof t&&(t+=""),t&&t>0?(s=this.getHashProbability(t,this.base),o>s?(this.version.A++,this.result.A.push(t),"A"):s>=o&&2*o>s?(this.version.B++,this.result.B.push(t),"B"):(this.version.N++,this.result.N.push(t),"NONE")):(version.N++,this.result.N.push(t),"NONE")},switchVersion:function(t){if(!t||!/A|B|N/.test(t))return console.warn("Are you kidding me~ Is there a test version called "+t+"?"),!1;this.tested||console.warn("Please run test method first.");var s=this.result[t],o=s[Math.floor(Math.random()*s.length)];createCookie("__jda","122270672."+o+".043878.1386043878.1386043878.1",10,"/;domain=jd.com"),console.log(o)},getHashProbability:function(t,s){function o(t){for(var s=0,o=0;o<t.length;o++)s=(s<<5)-s+t.charCodeAt(o),s&=s;return s}return Math.abs(o(t))%s}},module.exports=t});