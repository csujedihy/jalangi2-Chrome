(function(){window.google={kEI:'oC8gWMnIH4awjwTm75WoBQ',kEXPI:'1351903,1352149,3300000,3300118,3300130,3300161,3313321,3700243,4026241,4029815,4031109,4032677,4036527,4038012,4038214,4038394,4039268,4041776,4041899,4043041,4043492,4044543,4045096,4045293,4045841,4046043,4046835,4046837,4046904,4047140,4047454,4047593,4048347,4048980,4049063,4050750,4051887,4052304,4053233,4056126,4056682,4058016,4059817,4061666,4061980,4062724,4064468,4064796,4064904,4065786,4068291,4068550,4068560,4069829,4069839,4069840,4069859,4070143,4071387,4072270,4072288,4072364,4072602,4072705,4072775,4073405,4073418,4073959,4074682,4075941,4076095,4076315,4076543,4076761,4076930,4076999,4077776,4078407,4078438,4078456,4078588,4078605,4078762,4079105,4079200,4079553,4079623,4079871,4080104,4080167,4080435,4080760,4080815,4081017,4081037,4081039,4081128,4081265,4081496,4081534,4081576,4081905,4082112,4082130,4082140,4082183,4082219,4082230,4082290,4082311,4082441,4082618,4082710,4082940,4083064,4083115,4083281,4083353,4084258,4084259,4084276,4084324,4084343,4084366,4084402,4084690,4084716,4084956,4085065,4085336,8300096,8300273,8500572,8502184,8503210,8503585,8504846,8505150,8505152,8505259,8506255,8506340,8506477,8506615,8507177,8507361,8507381,8507833,8507842,8507846,8508241,8508317,10200083,10201957,19001076',authuser:0,j:{en:1,bv:24,pm:'p',u:'989f3850',qbp:0},kscs:'989f3850_24'};google.kHL='en';})();(function(){google.lc=[];google.li=0;google.getEI=function(a){for(var b;a&&(!a.getAttribute||!(b=a.getAttribute("eid")));)a=a.parentNode;return b||google.kEI};google.getLEI=function(a){for(var b=null;a&&(!a.getAttribute||!(b=a.getAttribute("leid")));)a=a.parentNode;return b};google.https=function(){return"https:"==window.location.protocol};google.ml=function(){return null};google.wl=function(a,b){try{google.ml(Error(a),!1,b)}catch(c){}};google.time=function(){return(new Date).getTime()};google.log=function(a,b,c,e,g){a=google.logUrl(a,b,c,e,g);if(""!=a){b=new Image;var d=google.lc,f=google.li;d[f]=b;b.onerror=b.onload=b.onabort=function(){delete d[f]};window.google&&window.google.vel&&window.google.vel.lu&&window.google.vel.lu(a);b.src=a;google.li=f+1}};google.logUrl=function(a,b,c,e,g){var d="",f=google.ls||"";if(!c&&-1==b.search("&ei=")){var h=google.getEI(e),d="&ei="+h;-1==b.search("&lei=")&&((e=google.getLEI(e))?d+="&lei="+e:h!=google.kEI&&(d+="&lei="+google.kEI))}a=c||"/"+(g||"gen_204")+"?atyp=i&ct="+a+"&cad="+b+d+f+"&zx="+google.time();/^http:/i.test(a)&&google.https()&&(google.ml(Error("a"),!1,{src:a,glmm:1}),a="");return a};google.y={};google.x=function(a,b){google.y[a.id]=[a,b];return!1};google.lq=[];google.load=function(a,b,c){google.lq.push([[a],b,c])};google.loadAll=function(a,b){google.lq.push([a,b])};})();
google.j.b=(!!location.hash&&!!location.hash.match('[#&]((q|fp)=|tbs=rimg|tbs=simg|tbs=sbi)'))
||(google.j.qbp==1);(function(){google.hs={h:true,p:false,pa:true,q:false};})();(function(){google.c={c:{a:true,d:false,i:false,m:true,n:false}};google.sn='webhp';(function(){var e=function(a,b,c){a.addEventListener?a.removeEventListener(b,c,!1):a.attachEvent&&a.detachEvent("on"+b,c)},g=function(a,b,c){f.push({o:a,v:b,w:c});a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},f=[];google.timers={};google.startTick=function(a,b){b=b&&google.timers[b].t?google.timers[b].t.start:google.time();google.timers[a]={t:{start:b},e:{},it:{},m:{}};(b=window.performance)&&b.now&&(google.timers[a].wsrt=Math.floor(b.now()))};google.tick=function(a,b,c){google.timers[a]||google.startTick(a);c=c||google.time();b instanceof Array||(b=[b]);for(var d=0;d<b.length;++d)google.timers[a].t[b[d]]=c};google.c.e=function(a,b,c){google.timers[a].e[b]=c};google.bit=function(a,b){google.timers[a]||google.startTick(a);var c=google.timers[a].it[b];c||(c=google.timers[a].it[b]=[]);var d=c.push({s:google.time()})-1;return function(){c[d]&&(c[d].e=google.time())}};google.c.b=function(a){var b=google.timers.load.m;b[a]&&google.wl("ch_mab",{m:a});b[a]=!0};google.c.u=function(a){var b=google.timers.load.m;if(b[a]){b[a]=!1;for(a in b)if(b[a])return;google.csiReport()}else google.wl("ch_mnb",{m:a})};google.rll=function(a,b,c){var d=function(b){c(b);e(a,"load",d);e(a,"error",d)};g(a,"load",d);b&&g(a,"error",d)};google.ull=function(){for(var a;a=f.shift();)e(a.o,a.v,a.w)};google.iTick=function(a){var b=google.time();google.tick("load","iml",b);a=a.id||a.src||a.name;google.tick("iml",a,b);google.c.c.a&&google.tick("aft",a,b)};google.afte=!0;google.aft=function(a){google.c.c.a&&google.afte&&google.tick("aft",a.id||a.src||a.name)};google.startTick("load");google.c.b("pr");google.c.b("xe");})();})();(function(){'use strict';var k=this,l=Date.now||function(){return+new Date};var t={};var w=function(a,d){if(null===d)return!1;if("contains"in a&&1==d.nodeType)return a.contains(d);if("compareDocumentPosition"in a)return a==d||!!(a.compareDocumentPosition(d)&16);for(;d&&a!=d;)d=d.parentNode;return d==a};var x=function(a,d){return function(b){b||(b=window.event);return d.call(a,b)}},B=function(a){a=a.target||a.srcElement;!a.getAttribute&&a.parentNode&&(a=a.parentNode);return a},C="undefined"!=typeof navigator&&/Macintosh/.test(navigator.userAgent),D="undefined"!=typeof navigator&&!/Opera/.test(navigator.userAgent)&&/WebKit/.test(navigator.userAgent),E={A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},F=function(){this._mouseEventsPrevented=!0},G={A:13,BUTTON:0,CHECKBOX:32,COMBOBOX:13,GRIDCELL:13,LINK:13,LISTBOX:13,MENU:0,MENUBAR:0,MENUITEM:0,MENUITEMCHECKBOX:0,MENUITEMRADIO:0,OPTION:0,RADIO:32,RADIOGROUP:32,RESET:0,SUBMIT:0,TAB:0,TREE:13,TREEITEM:13},H=function(a){return(a.getAttribute("type")||a.tagName).toUpperCase()in aa},I=function(a){return(a.getAttribute("type")||a.tagName).toUpperCase()in ba},aa={CHECKBOX:!0,OPTION:!0,RADIO:!0},ba={COLOR:!0,DATE:!0,DATETIME:!0,"DATETIME-LOCAL":!0,EMAIL:!0,MONTH:!0,NUMBER:!0,PASSWORD:!0,RANGE:!0,SEARCH:!0,TEL:!0,TEXT:!0,TEXTAREA:!0,TIME:!0,URL:!0,WEEK:!0},ca={A:!0,AREA:!0,BUTTON:!0,DIALOG:!0,IMG:!0,INPUT:!0,LINK:!0,MENU:!0,OPTGROUP:!0,OPTION:!0,PROGRESS:!0,SELECT:!0,TEXTAREA:!0};var J=function(){this.v=this.o=null},L=function(a,d){var b=K;b.o=a;b.v=d;return b};J.prototype.s=function(){var a=this.o;this.o&&this.o!=this.v?this.o=this.o.__owner||this.o.parentNode:this.o=null;return a};var M=function(){this.w=[];this.o=0;this.v=null;this.H=!1};M.prototype.s=function(){if(this.H)return K.s();if(this.o!=this.w.length){var a=this.w[this.o];this.o++;a!=this.v&&a&&a.__owner&&(this.H=!0,L(a.__owner,this.v));return a}return null};var K=new J,O=new M;var Q=function(){this.S=[];this.o=[];this.s=[];this.H={};this.v=null;this.w=[];P(this,"_custom")},da="undefined"!=typeof navigator&&/iPhone|iPad|iPod/.test(navigator.userAgent),R=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")},ea=/\s*;\s*/,ia=function(a,d){return function(b){var c=d;if("_custom"==c){c=b.detail;if(!c||!c._type)return;c=c._type}var e;if("click"==c&&(C&&b.metaKey||!C&&b.ctrlKey||2==b.which||null==b.which&&4==b.button||b.shiftKey))c="clickmod";else{var f;f=b.which||b.keyCode||b.key;D&&3==f&&(f=13);if(13!=f&&32!=f)f=!1;else{var m=B(b),q=(m.getAttribute("role")||m.type||m.tagName).toUpperCase(),h;(h="keydown"!=b.type)||("getAttribute"in m?(h=(m.getAttribute("role")||m.tagName).toUpperCase(),h=!I(m)&&("COMBOBOX"!=h||"INPUT"!=h)&&!m.isContentEditable):h=!1,h=!h);(h=
h||b.ctrlKey||b.shiftKey||b.altKey||b.metaKey||H(m)&&32==f)||((h=m.tagName in E)||(h=m.getAttributeNode("tabindex"),h=null!=h&&h.specified),h=!(h&&!m.disabled));h?f=!1:(m="INPUT"!=m.tagName.toUpperCase()||m.type,h=!(q in G)&&13==f,f=(0==G[q]%f||h)&&!!m)}f&&(c="clickkey")}q=b.srcElement||b.target;f=S(c,b,q,"",null);var g;b.path?(O.w=b.path,O.o=0,O.v=this,O.H=!1,m=O):m=L(q,this);for(;h=m.s();){g=e=h;h=c;var n=g.__jsaction;if(!n){var u,n=null;"getAttribute"in g&&(n=g.getAttribute("jsaction"));if(u=n){n=
t[u];if(!n){for(var n={},y=u.split(ea),z=0,fa=y?y.length:0;z<fa;z++){var r=y[z];if(r){var A=r.indexOf(":"),N=-1!=A,ga=N?R(r.substr(0,A)):"click",r=N?R(r.substr(A+1)):r;n[ga]=r}}t[u]=n}g.__jsaction=n}else n=ha,g.__jsaction=n}"clickkey"==h?h="click":"click"!=h||n.click||(h="clickonly");g={R:h,action:n[h]||"",event:null,V:!1};f=S(g.R,g.event||b,q,g.action||"",e,f.timeStamp);if(g.V||g.action)break}f&&"touchend"==f.eventType&&(f.event._preventMouseEvents=F);if(g&&g.action){if(g="clickkey"==c)g=B(b),g=
(g.type||g.tagName).toUpperCase(),(g=32==(b.which||b.keyCode||b.key)&&"CHECKBOX"!=g)||(g=B(b),q=(g.getAttribute("role")||g.tagName).toUpperCase(),g=g.tagName.toUpperCase()in ca&&"A"!=q&&!H(g)&&!I(g)||"BUTTON"==q);g&&(b.preventDefault?b.preventDefault():b.returnValue=!1);if("mouseenter"==c||"mouseleave"==c)if(g=b.relatedTarget,!("mouseover"==b.type&&"mouseenter"==c||"mouseout"==b.type&&"mouseleave"==c)||g&&(g===e||w(e,g)))f.action="",f.actionElement=null;else{var c={},p;for(p in b)"function"!==typeof b[p]&&
"srcElement"!==p&&"target"!==p&&(c[p]=b[p]);c.type="mouseover"==b.type?"mouseenter":"mouseleave";c.target=c.srcElement=e;c.bubbles=!1;f.event=c;f.targetElement=e}}else f.action="",f.actionElement=null;e=f;a.v&&(p=S(e.eventType,e.event,e.targetElement,e.action,e.actionElement,e.timeStamp),"clickonly"==p.eventType&&(p.eventType="click"),a.v(p,!0));if(e.actionElement){"A"!=e.actionElement.tagName||"click"!=e.eventType&&"clickmod"!=e.eventType||(b.preventDefault?b.preventDefault():b.returnValue=!1);if(a.v)a.v(e);else{var v;if((p=k.document)&&!p.createEvent&&p.createEventObject)try{v=p.createEventObject(b)}catch(la){v=b}else v=b;e.event=v;a.w.push(e)}if("touchend"==e.event.type&&e.event._mouseEventsPrevented){b=e.event;for(var ma in b);l()}}}},S=function(a,d,b,c,e,f){return{eventType:a,event:d,targetElement:b,action:c,actionElement:e,timeStamp:f||l()}},ha={},ja=function(a,d){return function(b){var c=a,e=d,f=!1;"mouseenter"==c?c="mouseover":"mouseleave"==c&&(c="mouseout");if(b.addEventListener){if("focus"==c||"blur"==c||"error"==c||"load"==c)f=!0;b.addEventListener(c,e,f)}else b.attachEvent&&("focus"==c?c="focusin":"blur"==c&&(c="focusout"),e=x(b,e),b.attachEvent("on"+c,e));return{R:c,T:e,U:f}}},P=function(a,d){if(!a.H.hasOwnProperty(d)){var b=ia(a,d),c=ja(d,b);a.H[d]=b;a.S.push(c);for(b=0;b<a.o.length;++b){var e=a.o[b];e.s.push(c.call(null,e.o))}"click"==d&&P(a,"keydown")}};Q.prototype.T=function(a){return this.H[a]};var W=function(a,d){var b=new ka(d);a:{for(var c=0;c<a.o.length;c++)if(T(a.o[c],d)){d=!0;break a}d=!1}if(d)return a.s.push(b),b;U(a,b);a.o.push(b);V(a);return b},V=function(a){for(var d=a.s.concat(a.o),b=[],c=[],e=0;e<a.o.length;++e){var f=a.o[e];X(f,d)?(b.push(f),Y(f)):c.push(f)}for(e=0;e<a.s.length;++e)f=a.s[e],X(f,d)?b.push(f):(c.push(f),U(a,f));a.o=c;a.s=b},U=function(a,d){var b=d.o;da&&(b.style.cursor="pointer");for(b=0;b<a.S.length;++b)d.s.push(a.S[b].call(null,d.o))},ka=function(a){this.o=a;this.s=[]},T=function(a,d){for(a=a.o;a!=d&&d.parentNode;)d=d.parentNode;return a==d},X=function(a,d){for(var b=0;b<d.length;++b)if(d[b].o!=a.o&&T(d[b],a.o))return!0;return!1},Y=function(a){for(var d=0;d<a.s.length;++d){var b=a.o,c=a.s[d];b.removeEventListener?b.removeEventListener(c.R,c.T,c.U):b.detachEvent&&b.detachEvent("on"+c.R,c.T)}a.s=[]};var Z=new Q;W(Z,window.document.documentElement);P(Z,"click");P(Z,"focus");P(Z,"focusin");P(Z,"blur");P(Z,"focusout");P(Z,"error");P(Z,"load");P(Z,"change");P(Z,"dblclick");P(Z,"input");P(Z,"keyup");P(Z,"keydown");P(Z,"keypress");P(Z,"mousedown");P(Z,"mouseenter");P(Z,"mouseleave");P(Z,"mouseout");P(Z,"mouseover");P(Z,"mouseup");P(Z,"touchstart");P(Z,"touchend");P(Z,"touchcancel");P(Z,"speech");(function(a){window.google.jsad=function(d){a.v=d;a.w&&(0<a.w.length&&d(a.w),a.w=null)};window.google.jsaac=function(d){return W(a,d)};window.google.jsarc=function(d){Y(d);for(var b=!1,c=0;c<a.o.length;++c)if(a.o[c]===d){a.o.splice(c,1);b=!0;break}if(!b)for(c=0;c<a.s.length;++c)if(a.s[c]===d){a.s.splice(c,1);break}V(a)}})(Z);}).call(window);(function(){'use strict';var e=this,f=function(a,d){a=a.split(".");var b=e;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===d?b[c]?b=b[c]:b=b[c]={}:b[c]=d};var g=[];f("google.jsc.xx",g);f("google.jsc.x",function(a){g.push(a)});}).call(window);google.arwt=function(a){a.href=document.getElementById(a.id.substring(1)).href;return!0};