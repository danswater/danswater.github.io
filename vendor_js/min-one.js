
(function(window,undefined){var
readyList,rootjQuery,core_strundefined=typeof undefined,location=window.location,document=window.document,docElem=document.documentElement,_jQuery=window.jQuery,_$=window.$,class2type={},core_deletedIds=[],core_version="1.10.2",core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();},completed=function(event){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}},detach=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}};jQuery.fn=jQuery.prototype={jquery:core_version,constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem;if(!selector){return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",length:0,toArray:function(){return core_slice.call(this);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.ready.promise().done(fn);return this;},slice:function(){return this.pushStack(core_slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""),noConflict:function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
if(!document.body){return setTimeout(jQuery.ready);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj);},type:function(obj){if(obj==null){return String(obj);}
return typeof obj==="object"||typeof obj==="function"?class2type[core_toString.call(obj)]||"object":typeof obj;},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
if(jQuery.support.ownLast){for(key in obj){return core_hasOwn.call(obj,key);}}
for(key in obj){}
return key===undefined||core_hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},error:function(msg){throw new Error(msg);},parseHTML:function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);},parseJSON:function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(data===null){return data;}
if(typeof data==="string"){data=jQuery.trim(data);if(data){if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))();}}}
jQuery.error("Invalid JSON: "+data);},parseXML:function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;},trim:core_trim&&!core_trim.call("\uFEFF\xA0")?function(text){return text==null?"":core_trim.call(text);}:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{core_push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}
return core_concat.apply([],ret);},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(core_slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},access:function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;},now:function(){return(new Date()).getTime();},swap:function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false);}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
detach();jQuery.ready();}})();}}}
return readyList.promise(obj);};jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||type!=="function"&&(length===0||typeof length==="number"&&length>0&&(length-1)in obj);}
rootjQuery=jQuery(document);(function(window,undefined){var i,support,cachedruns,Expr,getText,isXML,compile,outermostContext,sortInput,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+-(new Date()),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),hasDuplicate=false,sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}
return 0;},strundefined=typeof undefined,MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=arr.indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:([*^$|!~]?=)"+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+attributes.replace(3,8)+")*)|.*)\\)|)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rsibling=new RegExp(whitespace+"*[+~]"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results;}
if((nodeType=context.nodeType)!==1&&nodeType!==9){return[];}
if(documentIsHTML&&!seed){if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType===9&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}
newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+=" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};support=Sizzle.support={};setDocument=Sizzle.setDocument=function(node){var doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=doc.documentElement;documentIsHTML=!isXML(doc);if(parent&&parent.attachEvent&&parent!==parent.top){parent.attachEvent("onbeforeunload",function(){setDocument();});}
support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=assert(function(div){div.innerHTML="<div class='a'></div><div class='a i'></div>";div.firstChild.className="i";return div.getElementsByClassName("i").length===2;});support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!==strundefined&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("t","");if(div.querySelectorAll("[t^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));contains=rnative.test(docElem.contains)||docElem.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=docElem.compareDocumentPosition?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b);if(compare){if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||contains(preferredDoc,a)){return-1;}
if(b===doc||contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}
return compare&4?-1:1;}
return a.compareDocumentPosition?-1:1;}:function(a,b){var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(a===b){hasDuplicate=true;return 0;}else if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val===undefined?support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null:val;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){for(;(node=elem[i]);i++){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]&&match[4]!==undefined){match[2]=match[4];}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
if(node===elem){break;}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeName>"@"||elem.nodeType===3||elem.nodeType===4){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===elem.type);},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push(tokens=[]);}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);}
function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var data,cache,outerCache,dirkey=dirruns+" "+doneName;if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((cache=outerCache[dir])&&cache[0]===dirkey){if((data=cache[1])===true||data===cachedruns){return data===true;}}else{cache=outerCache[dir]=[dirkey];cache[1]=matcher(elem,context,xml)||cachedruns;if(cache[1]===true){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var matcherCachedRuns=0,bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1);if(outermost){outermostContext=context!==document&&context;cachedruns=matcherCachedRuns;}
for(;(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;cachedruns=++matcherCachedRuns;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!group){group=tokenize(selector);}
i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));}
return cached;};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function select(selector,context,results,seed){var i,tokens,token,type,find,match=tokenize(selector);if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&context.parentNode||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}}
compile(selector,match)(seed,context,!documentIsHTML,results,rsibling.test(selector));return results;}
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return(val=elem.getAttributeNode(name))&&val.specified?val.value:elem[name]===true?name.toLowerCase():null;}});}
jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})(window);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(core_rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);},empty:function(){list=[];firingLength=0;return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args);}else{fire(args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[action+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});jQuery.support=(function(support){var all,a,input,select,fragment,opt,eventName,isSupported,i,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*")||[];a=div.getElementsByTagName("a")[0];if(!a||!a.style||!all.length){return support;}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support.getSetAttribute=div.className!=="t";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.opacity=/^0.5/.test(a.style.opacity);support.cssFloat=!!a.style.cssFloat;support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";support.inlineBlockNeedsLayout=false;support.shrinkWrapBlocks=false;support.pixelPosition=false;support.deleteExpando=true;support.noCloneEvent=true;support.reliableMarginRight=true;support.boxSizingReliable=true;input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test;}catch(e){support.deleteExpando=false;}
input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","t");input.setAttribute("name","t");fragment=document.createDocumentFragment();fragment.appendChild(input);support.appendChecked=input.checked;support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).click();}
for(i in{submit:true,change:true,focusin:true}){div.setAttribute(eventName="on"+i,"t");support[i+"Bubbles"]=eventName in window||div.attributes[eventName].expando===false;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";for(i in jQuery(support)){break;}
support.ownLast=i!=="0";jQuery(function(){var container,marginDiv,tds,divReset="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",body=document.getElementsByTagName("body")[0];if(!body){return;}
container=document.createElement("div");container.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";body.appendChild(container).appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";jQuery.swap(body,body.style.zoom!=null?{zoom:1}:{},function(){support.boxSizing=div.offsetWidth===4;});if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight);}
if(typeof div.style.zoom!==core_strundefined){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=(div.offsetWidth===3);div.style.display="block";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=(div.offsetWidth!==3);if(support.inlineBlockNeedsLayout){body.style.zoom=1;}}
body.removeChild(container);container=div=tds=marginDiv=null;});all=select=fragment=opt=a=input=null;return support;})({});var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return;}
if(!id){if(isNode){id=elem[internalKey]=core_deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop};}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;}
function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase));}
i=name.length;while(i--){delete thisCache[name[i]];}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}}
jQuery.extend({cache:{},noData:{"applet":true,"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data){return internalData(elem,name,data);},removeData:function(elem,name){return internalRemoveData(elem,name);},_data:function(elem,name,data){return internalData(elem,name,data,true);},_removeData:function(elem,name){return internalRemoveData(elem,name,true);},acceptData:function(elem){if(elem.nodeType&&elem.nodeType!==1&&elem.nodeType!==9){return false;}
var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData;}});jQuery.fn.extend({data:function(key,value){var attrs,name,data=null,i=0,elem=this[0];if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attrs=elem.attributes;for(;i<attrs.length;i++){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
return arguments.length>1?this.each(function(){jQuery.data(this,key,value);}):elem?dataAttr(elem,key,jQuery.data(elem,key)):null;},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var nodeHook,boolHook,rclass=/[\t\r\n\f]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,getSetInput=jQuery.support.input;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
elem.className=jQuery.trim(cur);}}}
return this;},removeClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}
elem.className=value?jQuery.trim(cur):"";}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(core_rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(type===core_strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;},val:function(value){var ret,hooks,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:elem.text;}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if((option.selected=jQuery.inArray(jQuery(option).val(),values)>=0)){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}},attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute===core_strundefined){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(core_rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false;}else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=false;}}else{jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function(elem,value){if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value);}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name];}},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true;}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=jQuery.expr.attrHandle[name]||jQuery.find.attr;jQuery.expr.attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?function(elem,name,isXML){var fn=jQuery.expr.attrHandle[name],ret=isXML?undefined:(jQuery.expr.attrHandle[name]=undefined)!=getter(elem,name,isXML)?name.toLowerCase():null;jQuery.expr.attrHandle[name]=fn;return ret;}:function(elem,name,isXML){return isXML?undefined:elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null;};});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value;}else{return nodeHook&&nodeHook.set(elem,value,name);}}};}
if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));}
ret.value=value+="";return name==="value"||value===elem.getAttribute(name)?value:undefined;}};jQuery.expr.attrHandle.id=jQuery.expr.attrHandle.name=jQuery.expr.attrHandle.coords=function(elem,name,isXML){var ret;return isXML?undefined:(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null;};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);return ret&&ret.specified?ret.value:undefined;},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}};});}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4);}};});}
if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
if(!jQuery.support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";}
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}};if(!jQuery.support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==core_strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=core_hasOwn.call(event,"type")?event.type:event,namespaces=core_hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault();}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;try{elem[type]();}catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=core_slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false;}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===core_strundefined){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"submitBubbles",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
jQuery.event.simulate("change",this,event,true);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;},closest:function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){cur=ret.push(cur);break;}}}
return this.pushStack(ret.length>1?jQuery.unique(ret):ret);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(jQuery.unique(all));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret);}
if(rparentsprev.test(name)){ret=ret.reverse();}}
return this.pushStack(ret);};});jQuery.extend({filter:function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(isSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>=0)!==not;});}
function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:jQuery.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;jQuery.fn.extend({text:function(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
elem.parentNode.removeChild(elem);}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var
args=jQuery.map(this,function(elem){return[elem.nextSibling,elem.parentNode];}),i=0;this.domManip(arguments,function(elem){var next=args[i++],parent=args[i++];if(parent){if(next&&next.parentNode!==parent){next=this.nextSibling;}
jQuery(this).remove();parent.insertBefore(elem,next);}},true);return i?this:this.remove();},detach:function(selector){return this.remove(selector,true);},domManip:function(args,callback,allowIntersection){args=core_concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||!(l<=1||typeof value!=="string"||jQuery.support.checkClone||!rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
self.domManip(args,callback,allowIntersection);});}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,!allowIntersection&&this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(this[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){jQuery._evalUrl(node.src);}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}}
fragment=first=null;}}
return this;}});function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType===1?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return;}
nodeName=dest.nodeName.toLowerCase();if(!jQuery.support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);}
dest.removeAttribute(jQuery.expando);}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest);}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(jQuery.support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&manipulation_rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);core_push.apply(ret,elems.get());}
return this.pushStack(ret);};});function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==core_strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==core_strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else{jQuery.merge(found,getAll(elem,tag));}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;}
function fixDefaultChecked(elem){if(manipulation_rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
destElements=srcElements=node=null;return clone;},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}
if(!jQuery.support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild);}
tmp=safe.lastChild;}}}
if(tmp){safe.removeChild(tmp);}
if(!jQuery.support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
tmp=null;return safe;},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute!==core_strundefined){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
core_deletedIds.push(id);}}}}},_evalUrl:function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});}});jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});var iframe,getStyles,curCSS,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name;}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName));}}else{if(!values[index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.fn.extend({css:function(name,value){return jQuery.access(this,function(elem,name,value){var len,styles,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"columnCount":true,"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||type==="number"&&isNaN(value)){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!jQuery.support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
return val;}});if(window.getComputedStyle){getStyles=function(elem){return window.getComputedStyle(elem,null);};curCSS=function(elem,name,_computed){var width,minWidth,maxWidth,computed=_computed||getStyles(elem),ret=computed?computed.getPropertyValue(name)||computed[name]:undefined,style=elem.style;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret;};}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle;};curCSS=function(elem,name,_computed){var left,rs,rsLeft,computed=_computed||getStyles(elem),ret=computed?computed[name]:undefined,style=elem.style;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft;}}
return ret===""?"auto":ret;};}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function css_defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write("<!doctype html><html><body>");doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.remove();return display;}
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}};}
if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}}};});}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!manipulation_rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});var
ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(core_rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(core_rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(ajax_rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+ajax_nonce++):cacheURL+(ajax_rquery.test(cacheURL)?"&":"?")+"_="+ajax_nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}
script=null;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(ajax_nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(ajax_rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});var xhrCallbacks,xhrSupported,xhrId=0,xhrOnUnloadAbort=window.ActiveXObject&&function(){var key;for(key in xhrCallbacks){xhrCallbacks[key](undefined,true);}};function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;xhrSupported=jQuery.ajaxSettings.xhr();jQuery.support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);xhrSupported=jQuery.support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(err){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,responseHeaders,statusText,responses;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{responses={};status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async){callback();}else if(xhr.readyState===4){setTimeout(callback);}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);}
xhrCallbacks[handle]=callback;}
xhr.onreadystatechange=callback;}},abort:function(){if(callback){callback(undefined,true);}}};}});}
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2];}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue;}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=jQuery._data(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}}
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)){jQuery.fx.start();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!==core_strundefined){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};};jQuery.offset={setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return;}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||docElem;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=jQuery;}else{window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}}})(window);

if(window.jQuery===undefined)
throw new Error('The jQuery library is not loaded. The October CMS framework cannot be initialized.');+function($){"use strict";var Request=function(element,handler,options){var $el=this.$el=$(element);this.options=options||{};if(handler==undefined)
throw new Error('The request handler name is not specified.')
if(!handler.match(/^(?:\w+\:{2})?on*/))
throw new Error('Invalid handler name. The correct handler name format is: "onEvent".')
function handleConfirmMessage(message){var _event=jQuery.Event('ajaxConfirmMessage')
_event.promise=$.Deferred()
if($(window).triggerHandler(_event,[message])!==undefined){_event.promise.done(function(){options.confirm=null
new Request(element,handler,options)})
return false}
if(_event.isDefaultPrevented())return
if(message)return confirm(message)}
if(options.confirm&&!handleConfirmMessage(options.confirm))
return
var
form=$el.closest('form'),context={handler:handler,options:options},loading=options.loading!==undefined&&options.loading.length?$(options.loading):null,isRedirect=options.redirect!==undefined&&options.redirect.length
var _event=jQuery.Event('oc.beforeRequest')
form.trigger(_event,context)
if(_event.isDefaultPrevented())return
var data=[form.serialize()]
$.each($el.parents('[data-request-data]').toArray().reverse(),function extendReque(){data.push($.param(paramToObj('data-request-data',$(this).data('request-data'))))})
if($el.is(':input')&&!form.length){var inputName=$el.attr('name')
if(options.data[inputName]===undefined)
options.data[inputName]=$el.val()}
if(options.data!==undefined&&!$.isEmptyObject(options.data))
data.push($.param(options.data))
var requestOptions={context:context,headers:{'X-OCTOBER-REQUEST-HANDLER':handler,'X-OCTOBER-REQUEST-PARTIALS':this.extractPartials(options.update)},success:function(data,textStatus,jqXHR){if(this.options.beforeUpdate.apply(this,[data,textStatus,jqXHR])===false)return
if(options.evalBeforeUpdate&&eval('(function($el, context, data, textStatus, jqXHR) {'+options.evalBeforeUpdate+'}.call($el.get(0), $el, context, data, textStatus, jqXHR))')===false)return
var _event=jQuery.Event('ajaxBeforeUpdate')
form.trigger(_event,[context,data,textStatus,jqXHR])
if(_event.isDefaultPrevented())return
var updatePromise=requestOptions.handleUpdateResponse(data,textStatus,jqXHR)
updatePromise.done(function(){form.trigger('ajaxSuccess',[context,data,textStatus,jqXHR])
options.evalSuccess&&eval('(function($el, context, data, textStatus, jqXHR) {'+options.evalSuccess+'}.call($el.get(0), $el, context, data, textStatus, jqXHR))')})
return updatePromise},error:function(jqXHR,textStatus,errorThrown){var errorMsg,updatePromise=$.Deferred()
if((window.ocUnloading!==undefined&&window.ocUnloading)||errorThrown=='abort')
return
isRedirect=false
options.redirect=null
if(jqXHR.status==406&&jqXHR.responseJSON){errorMsg=jqXHR.responseJSON['X_OCTOBER_ERROR_MESSAGE']
updatePromise=requestOptions.handleUpdateResponse(jqXHR.responseJSON,textStatus,jqXHR)}
else{errorMsg=jqXHR.responseText?jqXHR.responseText:jqXHR.statusText
updatePromise.resolve()}
updatePromise.done(function(){$el.data('error-message',errorMsg)
var _event=jQuery.Event('ajaxError')
form.trigger(_event,[context,textStatus,jqXHR])
if(_event.isDefaultPrevented())return
if(options.evalError&&eval('(function($el, context, textStatus, jqXHR) {'+options.evalError+'}.call($el.get(0), $el, context, textStatus, jqXHR))')===false)
return
requestOptions.handleErrorMessage(errorMsg)})
return updatePromise},complete:function(data,textStatus,jqXHR){form.trigger('ajaxComplete',[context,data,textStatus,jqXHR])
options.evalComplete&&eval('(function($el, context, data, textStatus, jqXHR) {'+options.evalComplete+'}.call($el.get(0), $el, context, data, textStatus, jqXHR))')},handleErrorMessage:function(message){var _event=jQuery.Event('ajaxErrorMessage')
$(window).trigger(_event,[message])
if(_event.isDefaultPrevented())return
if(message)alert(message)},handleUpdateResponse:function(data,textStatus,jqXHR){var updatePromise=$.Deferred().done(function(){for(var partial in data){var selector=(options.update[partial])?options.update[partial]:partial
if(jQuery.type(selector)=='string'&&selector.charAt(0)=='@'){$(selector.substring(1)).append(data[partial]).trigger('ajaxUpdate',[context,data,textStatus,jqXHR])}else if(jQuery.type(selector)=='string'&&selector.charAt(0)=='^'){$(selector.substring(1)).prepend(data[partial]).trigger('ajaxUpdate',[context,data,textStatus,jqXHR])}else{$(selector).trigger('ajaxBeforeReplace')
$(selector).html(data[partial]).trigger('ajaxUpdate',[context,data,textStatus,jqXHR])}}
setTimeout(function(){$(window).trigger('ajaxUpdateComplete',[context,data,textStatus,jqXHR]).trigger('resize')},0)})
if(data['X_OCTOBER_REDIRECT']){options.redirect=data['X_OCTOBER_REDIRECT']
isRedirect=true}
if(isRedirect)
window.location.href=options.redirect
if(data['X_OCTOBER_ERROR_FIELDS']){var isFirstInvalidField=true
$.each(data['X_OCTOBER_ERROR_FIELDS'],function focusErrorField(fieldName,fieldMessages){var fieldElement=form.find('[name="'+fieldName+'"], [name="'+fieldName+'[]"], [name$="['+fieldName+']"], [name$="['+fieldName+'][]"]').filter(':enabled').first()
if(fieldElement.length>0){var _event=jQuery.Event('ajaxInvalidField')
$(window).trigger(_event,[fieldElement,fieldName,fieldMessages,isFirstInvalidField])
if(isFirstInvalidField){if(!_event.isDefaultPrevented())fieldElement.focus()
isFirstInvalidField=false}}})}
if(data['X_OCTOBER_ASSETS']){assetManager.load(data['X_OCTOBER_ASSETS'],$.proxy(updatePromise.resolve,updatePromise))}
else
updatePromise.resolve()
return updatePromise}}
context.success=requestOptions.success
context.error=requestOptions.error
context.complete=requestOptions.complete
requestOptions=$.extend(requestOptions,options)
requestOptions.data=data.join('&')
if(loading)loading.show()
$(window).trigger('ajaxBeforeSend',[context])
$el.trigger('ajaxPromise',[context])
return $.ajax(requestOptions).fail(function(jqXHR,textStatus,errorThrown){if(!isRedirect){$el.trigger('ajaxFail',[context,textStatus,jqXHR])
if(loading)loading.hide()}}).done(function(data,textStatus,jqXHR){if(!isRedirect){$el.trigger('ajaxDone',[context,data,textStatus,jqXHR])
if(loading)loading.hide()}}).always(function(dataOrXhr,textStatus,xhrOrError){$el.trigger('ajaxAlways',[context,dataOrXhr,textStatus,xhrOrError])})}
Request.DEFAULTS={update:{},type:'POST',beforeUpdate:function(data,textStatus,jqXHR){},evalBeforeUpdate:null,evalSuccess:null,evalError:null,evalComplete:null,}
Request.prototype.extractPartials=function(update){var result=[]
for(var partial in update)
result.push(partial)
return result.join('&')}
var old=$.fn.request
$.fn.request=function(handler,option){var args=arguments
var $this=$(this).first()
var data={evalBeforeUpdate:$this.data('request-before-update'),evalSuccess:$this.data('request-success'),evalError:$this.data('request-error'),evalComplete:$this.data('request-complete'),confirm:$this.data('request-confirm'),redirect:$this.data('request-redirect'),loading:$this.data('request-loading'),update:paramToObj('data-request-update',$this.data('request-update')),data:paramToObj('data-request-data',$this.data('request-data'))}
if(!handler)handler=$this.data('request')
var options=$.extend(true,{},Request.DEFAULTS,data,typeof option=='object'&&option)
return new Request($this,handler,options)}
$.fn.request.Constructor=Request
$.request=function(handler,option){return $('<form />').request(handler,option)}
$.fn.request.noConflict=function(){$.fn.request=old
return this}
function paramToObj(name,value){if(value===undefined)value=''
if(typeof value=='object')return value
try{return JSON.parse(JSON.stringify(eval("({"+value+"})")))}
catch(e){throw new Error('Error parsing the '+name+' attribute value. '+e)}}
$(document).on('change','select[data-request], input[type=radio][data-request], input[type=checkbox][data-request]',function documentOnChange(){$(this).request()})
$(document).on('click','a[data-request], button[data-request], input[type=button][data-request], input[type=submit][data-request]',function documentOnClick(){$(this).request()
return false})
$(document).on('keydown','input[type=text][data-request], input[type=submit][data-request], input[type=password][data-request]',function documentOnKeydown(e){if(e.keyCode==13){if(this.dataTrackInputTimer!==undefined)
window.clearTimeout(this.dataTrackInputTimer)
$(this).request()
return false}})
$(document).on('keyup','input[type=text][data-request][data-track-input], input[type=password][data-request][data-track-input], input[type=number][data-request][data-track-input]',function documentOnKeyup(e){var
$el=$(this),lastValue=$el.data('oc.lastvalue')
if(lastValue!==undefined&&lastValue==this.value)
return
$el.data('oc.lastvalue',this.value)
if(this.dataTrackInputTimer!==undefined)
window.clearTimeout(this.dataTrackInputTimer)
var interval=$(this).data('track-input')
if(!interval)
interval=300
var self=this
this.dataTrackInputTimer=window.setTimeout(function(){$(self).request()},interval)})
$(document).on('submit','[data-request]',function documentOnsubmit(){$(this).request()
return false})
$(window).on('beforeunload',function documentOnBeforeunload(){window.ocUnloading=true})
$(document).ready(function triggerRenderOnReady(){$(document).trigger('render')})
$(window).on('ajaxUpdateComplete',function triggerRenderOnAjaxUpdateComplete(){$(document).trigger('render')})
$.fn.render=function(callback){$(document).on('render',callback)}}(window.jQuery);

+function($){"use strict";if($.oc===undefined)
$.oc={}
var StripeLoadIndicator=function(){this.counter=0
this.indicator=$('<div/>').addClass('stripe-loading-indicator loaded').append($('<div />').addClass('stripe')).append($('<div />').addClass('stripe-loaded'))
this.stripe=this.indicator.find('.stripe')
$(document.body).append(this.indicator)}
StripeLoadIndicator.prototype.show=function(){this.counter++
this.stripe.after(this.stripe=this.stripe.clone()).remove()
if(this.counter>1)
return
this.indicator.removeClass('loaded')
$(document.body).addClass('oc-loading')}
StripeLoadIndicator.prototype.hide=function(force){this.counter--
if(force!==undefined&&force)
this.counter=0
if(this.counter<=0){this.indicator.addClass('loaded')
$(document.body).removeClass('oc-loading')}}
$(document).ready(function(){$.oc.stripeLoadIndicator=new StripeLoadIndicator()})
$(document).on('ajaxPromise','[data-request]',function(event){event.stopPropagation()
$.oc.stripeLoadIndicator.show()
var $el=$(this)
$(window).one('ajaxUpdateComplete',function(){if($el.closest('html').length===0)
$.oc.stripeLoadIndicator.hide()})}).on('ajaxFail ajaxDone','[data-request]',function(event){event.stopPropagation()
$.oc.stripeLoadIndicator.hide()})}(window.jQuery);
;(function(){function require(path,parent,orig){var resolved=require.resolve(path);if(null==resolved){orig=orig||path;parent=parent||'root';var err=new Error('Failed to require "'+orig+'" from "'+parent+'"');err.path=orig;err.parent=parent;err.require=true;throw err;}
var module=require.modules[resolved];if(!module._resolving&&!module.exports){var mod={};mod.exports={};mod.client=mod.component=true;module._resolving=true;module.call(this,mod.exports,require.relative(resolved),mod);delete module._resolving;module.exports=mod.exports;}
return module.exports;}
require.modules={};require.aliases={};require.resolve=function(path){if(path.charAt(0)==='/')path=path.slice(1);var paths=[path,path+'.js',path+'.json',path+'/index.js',path+'/index.json'];for(var i=0;i<paths.length;i++){var path=paths[i];if(require.modules.hasOwnProperty(path))return path;if(require.aliases.hasOwnProperty(path))return require.aliases[path];}};require.normalize=function(curr,path){var segs=[];if('.'!=path.charAt(0))return path;curr=curr.split('/');path=path.split('/');for(var i=0;i<path.length;++i){if('..'==path[i]){curr.pop();}else if('.'!=path[i]&&''!=path[i]){segs.push(path[i]);}}
return curr.concat(segs).join('/');};require.register=function(path,definition){require.modules[path]=definition;};require.alias=function(from,to){if(!require.modules.hasOwnProperty(from)){throw new Error('Failed to alias "'+from+'", it does not exist');}
require.aliases[to]=from;};require.relative=function(parent){var p=require.normalize(parent,'..');function lastIndexOf(arr,obj){var i=arr.length;while(i--){if(arr[i]===obj)return i;}
return-1;}
function localRequire(path){var resolved=localRequire.resolve(path);return require(resolved,parent,path);}
localRequire.resolve=function(path){var c=path.charAt(0);if('/'==c)return path.slice(1);if('.'==c)return require.normalize(p,path);var segs=parent.split('/');var i=lastIndexOf(segs,'deps')+1;if(!i)i=0;path=segs.slice(0,i+1).join('/')+'/deps/'+path;return path;};localRequire.exists=function(path){return require.modules.hasOwnProperty(localRequire.resolve(path));};return localRequire;};require.register("component-emitter/index.js",function(exports,require,module){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj);};function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key];}
return obj;}
Emitter.prototype.on=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this;};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments);}
fn._off=on;this.on(event,on);return this;};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=function(event,fn){this._callbacks=this._callbacks||{};var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this;}
var i=callbacks.indexOf(fn._off||fn);if(~i)callbacks.splice(i,1);return this;};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args);}}
return this;};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[];};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length;};});require.register("dropzone/index.js",function(exports,require,module){module.exports=require("./lib/dropzone.js");});require.register("dropzone/lib/dropzone.js",function(exports,require,module){(function(){var Dropzone,Em,camelize,contentLoaded,detectVerticalSquash,drawImageIOSFix,noop,without,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},__slice=[].slice;Em=typeof Emitter!=="undefined"&&Emitter!==null?Emitter:require("emitter");noop=function(){};Dropzone=(function(_super){var extend;__extends(Dropzone,_super);Dropzone.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached"];Dropzone.prototype.defaultOptions={url:null,method:"post",withCredentials:false,parallelUploads:2,uploadMultiple:false,maxFilesize:256,paramName:"file",createImageThumbnails:true,maxThumbnailFilesize:10,thumbnailWidth:100,thumbnailHeight:100,maxFiles:null,params:{},clickable:true,ignoreHiddenFiles:true,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:true,addRemoveLinks:false,previewsContainer:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(file,done){return done();},init:function(){return noop;},forceFallback:false,fallback:function(){var child,messageElement,span,_i,_len,_ref;this.element.className=""+this.element.className+" dz-browser-not-supported";_ref=this.element.getElementsByTagName("div");for(_i=0,_len=_ref.length;_i<_len;_i++){child=_ref[_i];if(/(^| )dz-message($| )/.test(child.className)){messageElement=child;child.className="dz-message";continue;}}
if(!messageElement){messageElement=Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");this.element.appendChild(messageElement);}
span=messageElement.getElementsByTagName("span")[0];if(span){span.textContent=this.options.dictFallbackMessage;}
return this.element.appendChild(this.getFallbackForm());},resize:function(file){var info,srcRatio,trgRatio;info={srcX:0,srcY:0,srcWidth:file.width,srcHeight:file.height};srcRatio=file.width/file.height;trgRatio=this.options.thumbnailWidth/this.options.thumbnailHeight;if(file.height<this.options.thumbnailHeight||file.width<this.options.thumbnailWidth){info.trgHeight=info.srcHeight;info.trgWidth=info.srcWidth;}else{if(srcRatio>trgRatio){info.srcHeight=file.height;info.srcWidth=info.srcHeight*trgRatio;}else{info.srcWidth=file.width;info.srcHeight=info.srcWidth/trgRatio;}}
info.srcX=(file.width-info.srcWidth)/2;info.srcY=(file.height-info.srcHeight)/2;return info;},drop:function(e){return this.element.classList.remove("dz-drag-hover");},dragstart:noop,dragend:function(e){return this.element.classList.remove("dz-drag-hover");},dragenter:function(e){return this.element.classList.add("dz-drag-hover");},dragover:function(e){return this.element.classList.add("dz-drag-hover");},dragleave:function(e){return this.element.classList.remove("dz-drag-hover");},paste:noop,reset:function(){return this.element.classList.remove("dz-started");},addedfile:function(file){var node,removeFileEvent,removeLink,_i,_j,_k,_len,_len1,_len2,_ref,_ref1,_ref2,_results,_this=this;if(this.element===this.previewsContainer){this.element.classList.add("dz-started");}
file.previewElement=Dropzone.createElement(this.options.previewTemplate.trim());file.previewTemplate=file.previewElement;this.previewsContainer.appendChild(file.previewElement);_ref=file.previewElement.querySelectorAll("[data-dz-name]");for(_i=0,_len=_ref.length;_i<_len;_i++){node=_ref[_i];node.textContent=file.name;}
_ref1=file.previewElement.querySelectorAll("[data-dz-size]");for(_j=0,_len1=_ref1.length;_j<_len1;_j++){node=_ref1[_j];node.innerHTML=this.filesize(file.size);}
if(this.options.addRemoveLinks){file._removeLink=Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>"+this.options.dictRemoveFile+"</a>");file.previewElement.appendChild(file._removeLink);}
removeFileEvent=function(e){e.preventDefault();e.stopPropagation();if(file.status===Dropzone.UPLOADING){return Dropzone.confirm(_this.options.dictCancelUploadConfirmation,function(){return _this.removeFile(file);});}else{if(_this.options.dictRemoveFileConfirmation){return Dropzone.confirm(_this.options.dictRemoveFileConfirmation,function(){return _this.removeFile(file);});}else{return _this.removeFile(file);}}};_ref2=file.previewElement.querySelectorAll("[data-dz-remove]");_results=[];for(_k=0,_len2=_ref2.length;_k<_len2;_k++){removeLink=_ref2[_k];_results.push(removeLink.addEventListener("click",removeFileEvent));}
return _results;},removedfile:function(file){var _ref;if((_ref=file.previewElement)!=null){_ref.parentNode.removeChild(file.previewElement);}
return this._updateMaxFilesReachedClass();},thumbnail:function(file,dataUrl){var thumbnailElement,_i,_len,_ref,_results;file.previewElement.classList.remove("dz-file-preview");file.previewElement.classList.add("dz-image-preview");_ref=file.previewElement.querySelectorAll("[data-dz-thumbnail]");_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){thumbnailElement=_ref[_i];thumbnailElement.alt=file.name;_results.push(thumbnailElement.src=dataUrl);}
return _results;},error:function(file,message){var node,_i,_len,_ref,_results;file.previewElement.classList.add("dz-error");if(typeof message!=="String"&&message.error){message=message.error;}
_ref=file.previewElement.querySelectorAll("[data-dz-errormessage]");_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){node=_ref[_i];_results.push(node.textContent=message);}
return _results;},errormultiple:noop,processing:function(file){file.previewElement.classList.add("dz-processing");if(file._removeLink){return file._removeLink.textContent=this.options.dictCancelUpload;}},processingmultiple:noop,uploadprogress:function(file,progress,bytesSent){var node,_i,_len,_ref,_results;_ref=file.previewElement.querySelectorAll("[data-dz-uploadprogress]");_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){node=_ref[_i];_results.push(node.style.width=""+progress+"%");}
return _results;},totaluploadprogress:noop,sending:noop,sendingmultiple:noop,success:function(file){return file.previewElement.classList.add("dz-success");},successmultiple:noop,canceled:function(file){return this.emit("error",file,"Upload canceled.");},canceledmultiple:noop,complete:function(file){if(file._removeLink){return file._removeLink.textContent=this.options.dictRemoveFile;}},completemultiple:noop,maxfilesexceeded:noop,maxfilesreached:noop,previewTemplate:"<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-details\">\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n    <div class=\"dz-size\" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-success-mark\"><span>✔</span></div>\n  <div class=\"dz-error-mark\"><span>✘</span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n</div>"};extend=function(){var key,object,objects,target,val,_i,_len;target=arguments[0],objects=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=objects.length;_i<_len;_i++){object=objects[_i];for(key in object){val=object[key];target[key]=val;}}
return target;};function Dropzone(element,options){var elementOptions,fallback,_ref;this.element=element;this.version=Dropzone.version;this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,"");this.clickableElements=[];this.listeners=[];this.files=[];if(typeof this.element==="string"){this.element=document.querySelector(this.element);}
if(!(this.element&&(this.element.nodeType!=null))){throw new Error("Invalid dropzone element.");}
if(this.element.dropzone){throw new Error("Dropzone already attached.");}
Dropzone.instances.push(this);this.element.dropzone=this;elementOptions=(_ref=Dropzone.optionsForElement(this.element))!=null?_ref:{};this.options=extend({},this.defaultOptions,elementOptions,options!=null?options:{});if(this.options.forceFallback||!Dropzone.isBrowserSupported()){return this.options.fallback.call(this);}
if(this.options.url==null){this.options.url=this.element.getAttribute("action");}
if(!this.options.url){throw new Error("No URL provided.");}
if(this.options.acceptedFiles&&this.options.acceptedMimeTypes){throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");}
if(this.options.acceptedMimeTypes){this.options.acceptedFiles=this.options.acceptedMimeTypes;delete this.options.acceptedMimeTypes;}
this.options.method=this.options.method.toUpperCase();if((fallback=this.getExistingFallback())&&fallback.parentNode){fallback.parentNode.removeChild(fallback);}
if(this.options.previewsContainer){this.previewsContainer=Dropzone.getElement(this.options.previewsContainer,"previewsContainer");}else{this.previewsContainer=this.element;}
if(this.options.clickable){if(this.options.clickable===true){this.clickableElements=[this.element];}else{this.clickableElements=Dropzone.getElements(this.options.clickable,"clickable");}}
this.init();}
Dropzone.prototype.getAcceptedFiles=function(){var file,_i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.accepted){_results.push(file);}}
return _results;};Dropzone.prototype.getRejectedFiles=function(){var file,_i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(!file.accepted){_results.push(file);}}
return _results;};Dropzone.prototype.getQueuedFiles=function(){var file,_i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.status===Dropzone.QUEUED){_results.push(file);}}
return _results;};Dropzone.prototype.getUploadingFiles=function(){var file,_i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.status===Dropzone.UPLOADING){_results.push(file);}}
return _results;};Dropzone.prototype.init=function(){var eventName,noPropagation,setupHiddenFileInput,_i,_len,_ref,_ref1,_this=this;if(this.element.tagName==="form"){this.element.setAttribute("enctype","multipart/form-data");}
if(this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")){this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>"+this.options.dictDefaultMessage+"</span></div>"));}
if(this.clickableElements.length){setupHiddenFileInput=function(){if(_this.hiddenFileInput){document.body.removeChild(_this.hiddenFileInput);}
_this.hiddenFileInput=document.createElement("input");_this.hiddenFileInput.setAttribute("type","file");if((_this.options.maxFiles==null)||_this.options.maxFiles>1){_this.hiddenFileInput.setAttribute("multiple","multiple");}
if(_this.options.acceptedFiles!=null){_this.hiddenFileInput.setAttribute("accept",_this.options.acceptedFiles);}
_this.hiddenFileInput.style.visibility="hidden";_this.hiddenFileInput.style.position="absolute";_this.hiddenFileInput.style.top="0";_this.hiddenFileInput.style.left="0";_this.hiddenFileInput.style.height="0";_this.hiddenFileInput.style.width="0";document.body.appendChild(_this.hiddenFileInput);return _this.hiddenFileInput.addEventListener("change",function(){var file,files,_i,_len;files=_this.hiddenFileInput.files;if(files.length){for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];_this.addFile(file);}}
return setupHiddenFileInput();});};setupHiddenFileInput();}
this.URL=(_ref=window.URL)!=null?_ref:window.webkitURL;_ref1=this.events;for(_i=0,_len=_ref1.length;_i<_len;_i++){eventName=_ref1[_i];this.on(eventName,this.options[eventName]);}
this.on("uploadprogress",function(){return _this.updateTotalUploadProgress();});this.on("removedfile",function(){return _this.updateTotalUploadProgress();});this.on("canceled",function(file){return _this.emit("complete",file);});this.on("complete",function(file){if(_this.getUploadingFiles().length===0&&_this.getQueuedFiles().length===0){return setTimeout((function(){return _this.emit("queuecomplete");}),0);}});noPropagation=function(e){e.stopPropagation();if(e.preventDefault){return e.preventDefault();}else{return e.returnValue=false;}};this.listeners=[{element:this.element,events:{"dragstart":function(e){return _this.emit("dragstart",e);},"dragenter":function(e){noPropagation(e);return _this.emit("dragenter",e);},"dragover":function(e){var efct;try{efct=e.dataTransfer.effectAllowed;}catch(_error){}
e.dataTransfer.dropEffect='move'===efct||'linkMove'===efct?'move':'copy';noPropagation(e);return _this.emit("dragover",e);},"dragleave":function(e){return _this.emit("dragleave",e);},"drop":function(e){noPropagation(e);return _this.drop(e);},"dragend":function(e){return _this.emit("dragend",e);}}}];this.clickableElements.forEach(function(clickableElement){return _this.listeners.push({element:clickableElement,events:{"click":function(evt){if((clickableElement!==_this.element)||(evt.target===_this.element||Dropzone.elementInside(evt.target,_this.element.querySelector(".dz-message")))){return _this.hiddenFileInput.click();}}}});});this.enable();return this.options.init.call(this);};Dropzone.prototype.destroy=function(){var _ref;this.disable();this.removeAllFiles(true);if((_ref=this.hiddenFileInput)!=null?_ref.parentNode:void 0){this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);this.hiddenFileInput=null;}
delete this.element.dropzone;return Dropzone.instances.splice(Dropzone.instances.indexOf(this),1);};Dropzone.prototype.updateTotalUploadProgress=function(){var acceptedFiles,file,totalBytes,totalBytesSent,totalUploadProgress,_i,_len,_ref;totalBytesSent=0;totalBytes=0;acceptedFiles=this.getAcceptedFiles();if(acceptedFiles.length){_ref=this.getAcceptedFiles();for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];totalBytesSent+=file.upload.bytesSent;totalBytes+=file.upload.total;}
totalUploadProgress=100*totalBytesSent/totalBytes;}else{totalUploadProgress=100;}
return this.emit("totaluploadprogress",totalUploadProgress,totalBytes,totalBytesSent);};Dropzone.prototype.getFallbackForm=function(){var existingFallback,fields,fieldsString,form;if(existingFallback=this.getExistingFallback()){return existingFallback;}
fieldsString="<div class=\"dz-fallback\">";if(this.options.dictFallbackText){fieldsString+="<p>"+this.options.dictFallbackText+"</p>";}
fieldsString+="<input type=\"file\" name=\""+this.options.paramName+(this.options.uploadMultiple?"[]":"")+"\" "+(this.options.uploadMultiple?'multiple="multiple"':void 0)+" /><input type=\"submit\" value=\"Upload!\"></div>";fields=Dropzone.createElement(fieldsString);if(this.element.tagName!=="FORM"){form=Dropzone.createElement("<form action=\""+this.options.url+"\" enctype=\"multipart/form-data\" method=\""+this.options.method+"\"></form>");form.appendChild(fields);}else{this.element.setAttribute("enctype","multipart/form-data");this.element.setAttribute("method",this.options.method);}
return form!=null?form:fields;};Dropzone.prototype.getExistingFallback=function(){var fallback,getFallback,tagName,_i,_len,_ref;getFallback=function(elements){var el,_i,_len;for(_i=0,_len=elements.length;_i<_len;_i++){el=elements[_i];if(/(^| )fallback($| )/.test(el.className)){return el;}}};_ref=["div","form"];for(_i=0,_len=_ref.length;_i<_len;_i++){tagName=_ref[_i];if(fallback=getFallback(this.element.getElementsByTagName(tagName))){return fallback;}}};Dropzone.prototype.setupEventListeners=function(){var elementListeners,event,listener,_i,_len,_ref,_results;_ref=this.listeners;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){elementListeners=_ref[_i];_results.push((function(){var _ref1,_results1;_ref1=elementListeners.events;_results1=[];for(event in _ref1){listener=_ref1[event];_results1.push(elementListeners.element.addEventListener(event,listener,false));}
return _results1;})());}
return _results;};Dropzone.prototype.removeEventListeners=function(){var elementListeners,event,listener,_i,_len,_ref,_results;_ref=this.listeners;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){elementListeners=_ref[_i];_results.push((function(){var _ref1,_results1;_ref1=elementListeners.events;_results1=[];for(event in _ref1){listener=_ref1[event];_results1.push(elementListeners.element.removeEventListener(event,listener,false));}
return _results1;})());}
return _results;};Dropzone.prototype.disable=function(){var file,_i,_len,_ref,_results;this.clickableElements.forEach(function(element){return element.classList.remove("dz-clickable");});this.removeEventListeners();_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];_results.push(this.cancelUpload(file));}
return _results;};Dropzone.prototype.enable=function(){this.clickableElements.forEach(function(element){return element.classList.add("dz-clickable");});return this.setupEventListeners();};Dropzone.prototype.filesize=function(size){var string;if(size>=1024*1024*1024*1024/10){size=size/(1024*1024*1024*1024/10);string="TiB";}else if(size>=1024*1024*1024/10){size=size/(1024*1024*1024/10);string="GiB";}else if(size>=1024*1024/10){size=size/(1024*1024/10);string="MiB";}else if(size>=1024/10){size=size/(1024/10);string="KiB";}else{size=size*10;string="b";}
return"<strong>"+(Math.round(size)/10)+"</strong> "+string;};Dropzone.prototype._updateMaxFilesReachedClass=function(){if((this.options.maxFiles!=null)&&this.getAcceptedFiles().length>=this.options.maxFiles){if(this.getAcceptedFiles().length===this.options.maxFiles){this.emit('maxfilesreached',this.files);}
return this.element.classList.add("dz-max-files-reached");}else{return this.element.classList.remove("dz-max-files-reached");}};Dropzone.prototype.drop=function(e){var files,items;if(!e.dataTransfer){return;}
this.emit("drop",e);files=e.dataTransfer.files;if(files.length){items=e.dataTransfer.items;if(items&&items.length&&(items[0].webkitGetAsEntry!=null)){this._addFilesFromItems(items);}else{this.handleFiles(files);}}};Dropzone.prototype.paste=function(e){var items,_ref;if((e!=null?(_ref=e.clipboardData)!=null?_ref.items:void 0:void 0)==null){return;}
this.emit("paste",e);items=e.clipboardData.items;if(items.length){return this._addFilesFromItems(items);}};Dropzone.prototype.handleFiles=function(files){var file,_i,_len,_results;_results=[];for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];_results.push(this.addFile(file));}
return _results;};Dropzone.prototype._addFilesFromItems=function(items){var entry,item,_i,_len,_results;_results=[];for(_i=0,_len=items.length;_i<_len;_i++){item=items[_i];if((item.webkitGetAsEntry!=null)&&(entry=item.webkitGetAsEntry())){if(entry.isFile){_results.push(this.addFile(item.getAsFile()));}else if(entry.isDirectory){_results.push(this._addFilesFromDirectory(entry,entry.name));}else{_results.push(void 0);}}else if(item.getAsFile!=null){if((item.kind==null)||item.kind==="file"){_results.push(this.addFile(item.getAsFile()));}else{_results.push(void 0);}}else{_results.push(void 0);}}
return _results;};Dropzone.prototype._addFilesFromDirectory=function(directory,path){var dirReader,entriesReader,_this=this;dirReader=directory.createReader();entriesReader=function(entries){var entry,_i,_len;for(_i=0,_len=entries.length;_i<_len;_i++){entry=entries[_i];if(entry.isFile){entry.file(function(file){if(_this.options.ignoreHiddenFiles&&file.name.substring(0,1)==='.'){return;}
file.fullPath=""+path+"/"+file.name;return _this.addFile(file);});}else if(entry.isDirectory){_this._addFilesFromDirectory(entry,""+path+"/"+entry.name);}}};return dirReader.readEntries(entriesReader,function(error){return typeof console!=="undefined"&&console!==null?typeof console.log==="function"?console.log(error):void 0:void 0;});};Dropzone.prototype.accept=function(file,done){if(file.size>this.options.maxFilesize*1024*1024){return done(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(file.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize));}else if(!Dropzone.isValidFile(file,this.options.acceptedFiles)){return done(this.options.dictInvalidFileType);}else if((this.options.maxFiles!=null)&&this.getAcceptedFiles().length>=this.options.maxFiles){done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles));return this.emit("maxfilesexceeded",file);}else{return this.options.accept.call(this,file,done);}};Dropzone.prototype.addFile=function(file){var _this=this;file.upload={progress:0,total:file.size,bytesSent:0};this.files.push(file);file.status=Dropzone.ADDED;this.emit("addedfile",file);this._enqueueThumbnail(file);return this.accept(file,function(error){if(error){file.accepted=false;_this._errorProcessing([file],error);}else{_this.enqueueFile(file);}
return _this._updateMaxFilesReachedClass();});};Dropzone.prototype.enqueueFiles=function(files){var file,_i,_len;for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];this.enqueueFile(file);}
return null;};Dropzone.prototype.enqueueFile=function(file){var _this=this;file.accepted=true;if(file.status===Dropzone.ADDED){file.status=Dropzone.QUEUED;if(this.options.autoProcessQueue){return setTimeout((function(){return _this.processQueue();}),0);}}else{throw new Error("This file can't be queued because it has already been processed or was rejected.");}};Dropzone.prototype._thumbnailQueue=[];Dropzone.prototype._processingThumbnail=false;Dropzone.prototype._enqueueThumbnail=function(file){var _this=this;if(this.options.createImageThumbnails&&file.type.match(/image.*/)&&file.size<=this.options.maxThumbnailFilesize*1024*1024){this._thumbnailQueue.push(file);return setTimeout((function(){return _this._processThumbnailQueue();}),0);}};Dropzone.prototype._processThumbnailQueue=function(){var _this=this;if(this._processingThumbnail||this._thumbnailQueue.length===0){return;}
this._processingThumbnail=true;return this.createThumbnail(this._thumbnailQueue.shift(),function(){_this._processingThumbnail=false;return _this._processThumbnailQueue();});};Dropzone.prototype.removeFile=function(file){if(file.status===Dropzone.UPLOADING){this.cancelUpload(file);}
this.files=without(this.files,file);this.emit("removedfile",file);if(this.files.length===0){return this.emit("reset");}};Dropzone.prototype.removeAllFiles=function(cancelIfNecessary){var file,_i,_len,_ref;if(cancelIfNecessary==null){cancelIfNecessary=false;}
_ref=this.files.slice();for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.status!==Dropzone.UPLOADING||cancelIfNecessary){this.removeFile(file);}}
return null;};Dropzone.prototype.createThumbnail=function(file,callback){var fileReader,_this=this;fileReader=new FileReader;fileReader.onload=function(){var img;img=document.createElement("img");img.onload=function(){var canvas,ctx,resizeInfo,thumbnail,_ref,_ref1,_ref2,_ref3;file.width=img.width;file.height=img.height;resizeInfo=_this.options.resize.call(_this,file);if(resizeInfo.trgWidth==null){resizeInfo.trgWidth=_this.options.thumbnailWidth;}
if(resizeInfo.trgHeight==null){resizeInfo.trgHeight=_this.options.thumbnailHeight;}
canvas=document.createElement("canvas");ctx=canvas.getContext("2d");canvas.width=resizeInfo.trgWidth;canvas.height=resizeInfo.trgHeight;drawImageIOSFix(ctx,img,(_ref=resizeInfo.srcX)!=null?_ref:0,(_ref1=resizeInfo.srcY)!=null?_ref1:0,resizeInfo.srcWidth,resizeInfo.srcHeight,(_ref2=resizeInfo.trgX)!=null?_ref2:0,(_ref3=resizeInfo.trgY)!=null?_ref3:0,resizeInfo.trgWidth,resizeInfo.trgHeight);thumbnail=canvas.toDataURL("image/png");_this.emit("thumbnail",file,thumbnail);if(callback!=null){return callback();}};return img.src=fileReader.result;};return fileReader.readAsDataURL(file);};Dropzone.prototype.processQueue=function(){var i,parallelUploads,processingLength,queuedFiles;parallelUploads=this.options.parallelUploads;processingLength=this.getUploadingFiles().length;i=processingLength;if(processingLength>=parallelUploads){return;}
queuedFiles=this.getQueuedFiles();if(!(queuedFiles.length>0)){return;}
if(this.options.uploadMultiple){return this.processFiles(queuedFiles.slice(0,parallelUploads-processingLength));}else{while(i<parallelUploads){if(!queuedFiles.length){return;}
this.processFile(queuedFiles.shift());i++;}}};Dropzone.prototype.processFile=function(file){return this.processFiles([file]);};Dropzone.prototype.processFiles=function(files){var file,_i,_len;for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];file.processing=true;file.status=Dropzone.UPLOADING;this.emit("processing",file);}
if(this.options.uploadMultiple){this.emit("processingmultiple",files);}
return this.uploadFiles(files);};Dropzone.prototype._getFilesWithXhr=function(xhr){var file,files;return files=(function(){var _i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.xhr===xhr){_results.push(file);}}
return _results;}).call(this);};Dropzone.prototype.cancelUpload=function(file){var groupedFile,groupedFiles,_i,_j,_len,_len1,_ref;if(file.status===Dropzone.UPLOADING){groupedFiles=this._getFilesWithXhr(file.xhr);for(_i=0,_len=groupedFiles.length;_i<_len;_i++){groupedFile=groupedFiles[_i];groupedFile.status=Dropzone.CANCELED;}
file.xhr.abort();for(_j=0,_len1=groupedFiles.length;_j<_len1;_j++){groupedFile=groupedFiles[_j];this.emit("canceled",groupedFile);}
if(this.options.uploadMultiple){this.emit("canceledmultiple",groupedFiles);}}else if((_ref=file.status)===Dropzone.ADDED||_ref===Dropzone.QUEUED){file.status=Dropzone.CANCELED;this.emit("canceled",file);if(this.options.uploadMultiple){this.emit("canceledmultiple",[file]);}}
if(this.options.autoProcessQueue){return this.processQueue();}};Dropzone.prototype.uploadFile=function(file){return this.uploadFiles([file]);};Dropzone.prototype.uploadFiles=function(files){var file,formData,handleError,headerName,headerValue,headers,input,inputName,inputType,key,option,progressObj,response,updateProgress,value,xhr,_i,_j,_k,_l,_len,_len1,_len2,_len3,_len4,_m,_ref,_ref1,_ref2,_ref3,_ref4,_this=this;xhr=new XMLHttpRequest();for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];file.xhr=xhr;}
xhr.open(this.options.method,this.options.url,true);xhr.withCredentials=!!this.options.withCredentials;response=null;handleError=function(){var _j,_len1,_results;_results=[];for(_j=0,_len1=files.length;_j<_len1;_j++){file=files[_j];_results.push(_this._errorProcessing(files,response||_this.options.dictResponseError.replace("{{statusCode}}",xhr.status),xhr));}
return _results;};updateProgress=function(e){var allFilesFinished,progress,_j,_k,_l,_len1,_len2,_len3,_results;if(e!=null){progress=100*e.loaded/e.total;for(_j=0,_len1=files.length;_j<_len1;_j++){file=files[_j];file.upload={progress:progress,total:e.total,bytesSent:e.loaded};}}else{allFilesFinished=true;progress=100;for(_k=0,_len2=files.length;_k<_len2;_k++){file=files[_k];if(!(file.upload.progress===100&&file.upload.bytesSent===file.upload.total)){allFilesFinished=false;}
file.upload.progress=progress;file.upload.bytesSent=file.upload.total;}
if(allFilesFinished){return;}}
_results=[];for(_l=0,_len3=files.length;_l<_len3;_l++){file=files[_l];_results.push(_this.emit("uploadprogress",file,progress,file.upload.bytesSent));}
return _results;};xhr.onload=function(e){var _ref;if(files[0].status===Dropzone.CANCELED){return;}
if(xhr.readyState!==4){return;}
response=xhr.responseText;if(xhr.getResponseHeader("content-type")&&~xhr.getResponseHeader("content-type").indexOf("application/json")){try{response=JSON.parse(response);}catch(_error){e=_error;response="Invalid JSON response from server.";}}
updateProgress();if(!((200<=(_ref=xhr.status)&&_ref<300))){return handleError();}else{return _this._finished(files,response,e);}};xhr.onerror=function(){if(files[0].status===Dropzone.CANCELED){return;}
return handleError();};progressObj=(_ref=xhr.upload)!=null?_ref:xhr;progressObj.onprogress=updateProgress;headers={"Accept":"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};if(this.options.headers){extend(headers,this.options.headers);}
for(headerName in headers){headerValue=headers[headerName];xhr.setRequestHeader(headerName,headerValue);}
formData=new FormData();if(this.options.params){_ref1=this.options.params;for(key in _ref1){value=_ref1[key];formData.append(key,value);}}
for(_j=0,_len1=files.length;_j<_len1;_j++){file=files[_j];this.emit("sending",file,xhr,formData);}
if(this.options.uploadMultiple){this.emit("sendingmultiple",files,xhr,formData);}
if(this.element.tagName==="FORM"){_ref2=this.element.querySelectorAll("input, textarea, select, button");for(_k=0,_len2=_ref2.length;_k<_len2;_k++){input=_ref2[_k];inputName=input.getAttribute("name");inputType=input.getAttribute("type");if(input.tagName==="SELECT"&&input.hasAttribute("multiple")){_ref3=input.options;for(_l=0,_len3=_ref3.length;_l<_len3;_l++){option=_ref3[_l];if(option.selected){formData.append(inputName,option.value);}}}else if(!inputType||((_ref4=inputType.toLowerCase())!=="checkbox"&&_ref4!=="radio")||input.checked){formData.append(inputName,input.value);}}}
for(_m=0,_len4=files.length;_m<_len4;_m++){file=files[_m];formData.append(""+this.options.paramName+(this.options.uploadMultiple?"[]":""),file,file.name);}
return xhr.send(formData);};Dropzone.prototype._finished=function(files,responseText,e){var file,_i,_len;for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];file.status=Dropzone.SUCCESS;this.emit("success",file,responseText,e);this.emit("complete",file);}
if(this.options.uploadMultiple){this.emit("successmultiple",files,responseText,e);this.emit("completemultiple",files);}
if(this.options.autoProcessQueue){return this.processQueue();}};Dropzone.prototype._errorProcessing=function(files,message,xhr){var file,_i,_len;for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];file.status=Dropzone.ERROR;this.emit("error",file,message,xhr);this.emit("complete",file);}
if(this.options.uploadMultiple){this.emit("errormultiple",files,message,xhr);this.emit("completemultiple",files);}
if(this.options.autoProcessQueue){return this.processQueue();}};return Dropzone;})(Em);Dropzone.version="3.8.4";Dropzone.options={};Dropzone.optionsForElement=function(element){if(element.getAttribute("id")){return Dropzone.options[camelize(element.getAttribute("id"))];}else{return void 0;}};Dropzone.instances=[];Dropzone.forElement=function(element){if(typeof element==="string"){element=document.querySelector(element);}
if((element!=null?element.dropzone:void 0)==null){throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");}
return element.dropzone;};Dropzone.autoDiscover=true;Dropzone.discover=function(){var checkElements,dropzone,dropzones,_i,_len,_results;if(document.querySelectorAll){dropzones=document.querySelectorAll(".dropzone");}else{dropzones=[];checkElements=function(elements){var el,_i,_len,_results;_results=[];for(_i=0,_len=elements.length;_i<_len;_i++){el=elements[_i];if(/(^| )dropzone($| )/.test(el.className)){_results.push(dropzones.push(el));}else{_results.push(void 0);}}
return _results;};checkElements(document.getElementsByTagName("div"));checkElements(document.getElementsByTagName("form"));}
_results=[];for(_i=0,_len=dropzones.length;_i<_len;_i++){dropzone=dropzones[_i];if(Dropzone.optionsForElement(dropzone)!==false){_results.push(new Dropzone(dropzone));}else{_results.push(void 0);}}
return _results;};Dropzone.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i];Dropzone.isBrowserSupported=function(){var capableBrowser,regex,_i,_len,_ref;capableBrowser=true;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector){if(!("classList"in document.createElement("a"))){capableBrowser=false;}else{_ref=Dropzone.blacklistedBrowsers;for(_i=0,_len=_ref.length;_i<_len;_i++){regex=_ref[_i];if(regex.test(navigator.userAgent)){capableBrowser=false;continue;}}}}else{capableBrowser=false;}
return capableBrowser;};without=function(list,rejectedItem){var item,_i,_len,_results;_results=[];for(_i=0,_len=list.length;_i<_len;_i++){item=list[_i];if(item!==rejectedItem){_results.push(item);}}
return _results;};camelize=function(str){return str.replace(/[\-_](\w)/g,function(match){return match[1].toUpperCase();});};Dropzone.createElement=function(string){var div;div=document.createElement("div");div.innerHTML=string;return div.childNodes[0];};Dropzone.elementInside=function(element,container){if(element===container){return true;}
while(element=element.parentNode){if(element===container){return true;}}
return false;};Dropzone.getElement=function(el,name){var element;if(typeof el==="string"){element=document.querySelector(el);}else if(el.nodeType!=null){element=el;}
if(element==null){throw new Error("Invalid `"+name+"` option provided. Please provide a CSS selector or a plain HTML element.");}
return element;};Dropzone.getElements=function(els,name){var e,el,elements,_i,_j,_len,_len1,_ref;if(els instanceof Array){elements=[];try{for(_i=0,_len=els.length;_i<_len;_i++){el=els[_i];elements.push(this.getElement(el,name));}}catch(_error){e=_error;elements=null;}}else if(typeof els==="string"){elements=[];_ref=document.querySelectorAll(els);for(_j=0,_len1=_ref.length;_j<_len1;_j++){el=_ref[_j];elements.push(el);}}else if(els.nodeType!=null){elements=[els];}
if(!((elements!=null)&&elements.length)){throw new Error("Invalid `"+name+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");}
return elements;};Dropzone.confirm=function(question,accepted,rejected){if(window.confirm(question)){return accepted();}else if(rejected!=null){return rejected();}};Dropzone.isValidFile=function(file,acceptedFiles){var baseMimeType,mimeType,validType,_i,_len;if(!acceptedFiles){return true;}
acceptedFiles=acceptedFiles.split(",");mimeType=file.type;baseMimeType=mimeType.replace(/\/.*$/,"");for(_i=0,_len=acceptedFiles.length;_i<_len;_i++){validType=acceptedFiles[_i];validType=validType.trim();if(validType.charAt(0)==="."){if(file.name.toLowerCase().indexOf(validType.toLowerCase(),file.name.length-validType.length)!==-1){return true;}}else if(/\/\*$/.test(validType)){if(baseMimeType===validType.replace(/\/.*$/,"")){return true;}}else{if(mimeType===validType){return true;}}}
return false;};if(typeof jQuery!=="undefined"&&jQuery!==null){jQuery.fn.dropzone=function(options){return this.each(function(){return new Dropzone(this,options);});};}
if(typeof module!=="undefined"&&module!==null){module.exports=Dropzone;}else{window.Dropzone=Dropzone;}
Dropzone.ADDED="added";Dropzone.QUEUED="queued";Dropzone.ACCEPTED=Dropzone.QUEUED;Dropzone.UPLOADING="uploading";Dropzone.PROCESSING=Dropzone.UPLOADING;Dropzone.CANCELED="canceled";Dropzone.ERROR="error";Dropzone.SUCCESS="success";detectVerticalSquash=function(img){var alpha,canvas,ctx,data,ey,ih,iw,py,ratio,sy;iw=img.naturalWidth;ih=img.naturalHeight;canvas=document.createElement("canvas");canvas.width=1;canvas.height=ih;ctx=canvas.getContext("2d");ctx.drawImage(img,0,0);data=ctx.getImageData(0,0,1,ih).data;sy=0;ey=ih;py=ih;while(py>sy){alpha=data[(py-1)*4+3];if(alpha===0){ey=py;}else{sy=py;}
py=(ey+sy)>>1;}
ratio=py/ih;if(ratio===0){return 1;}else{return ratio;}};drawImageIOSFix=function(ctx,img,sx,sy,sw,sh,dx,dy,dw,dh){var vertSquashRatio;vertSquashRatio=detectVerticalSquash(img);return ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh/vertSquashRatio);};contentLoaded=function(win,fn){var add,doc,done,init,poll,pre,rem,root,top;done=false;top=true;doc=win.document;root=doc.documentElement;add=(doc.addEventListener?"addEventListener":"attachEvent");rem=(doc.addEventListener?"removeEventListener":"detachEvent");pre=(doc.addEventListener?"":"on");init=function(e){if(e.type==="readystatechange"&&doc.readyState!=="complete"){return;}
(e.type==="load"?win:doc)[rem](pre+e.type,init,false);if(!done&&(done=true)){return fn.call(win,e.type||e);}};poll=function(){var e;try{root.doScroll("left");}catch(_error){e=_error;setTimeout(poll,50);return;}
return init("poll");};if(doc.readyState!=="complete"){if(doc.createEventObject&&root.doScroll){try{top=!win.frameElement;}catch(_error){}
if(top){poll();}}
doc[add](pre+"DOMContentLoaded",init,false);doc[add](pre+"readystatechange",init,false);return win[add](pre+"load",init,false);}};Dropzone._autoDiscoverFunction=function(){if(Dropzone.autoDiscover){return Dropzone.discover();}};contentLoaded(window,Dropzone._autoDiscoverFunction);}).call(this);});require.alias("component-emitter/index.js","dropzone/deps/emitter/index.js");require.alias("component-emitter/index.js","emitter/index.js");if(typeof exports=="object"){module.exports=require("dropzone");}else if(typeof define=="function"&&define.amd){define(function(){return require("dropzone");});}else{this["Dropzone"]=require("dropzone");}})();

function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js'];c=b.join(' ');h.className+=' '+c;return c;};css_browser_selector(navigator.userAgent);

$(document).ready(function(){var $productList=$('[data-product-list]')
function updateListItemsHeight(){var width=$('li',$productList).first().width();$('li',$productList).each(function(){var $this=$(this),$item=$('image',$this);$item.height(width*0.75);})}
$(window).on('resize',updateListItemsHeight)
updateListItemsHeight()})

+function($){"use strict";var InlineEditor=function(element,options){this.options=options;this.$button=$('<a href="#" class="inline-editor-trigger"><i class="icon-pencil"></i></a>');this.$el=$(element)
this.$parent=this.$el.parent()
this.$container=$('<form class="inline-editor-container"></form>');this.$container.submit(function(){return false});this.$el.parent().prepend(this.$container)
this.$container.append(this.$el)
this.$container.append(this.$button);this.$button.click($.proxy(this.showEditor,this))
this.applyPlaceholder()}
InlineEditor.prototype.showEditor=function(){var height=this.$el.outerHeight(true)
this.$el.hide()
this.$button.hide()
if(this.options.hide)
$(this.options.hide,this.$parent).css('visibility','hidden')
this.createEditor()
return false;}
InlineEditor.prototype.hideEditor=function(){this.$editor.remove()
this.$applyButton.remove()
if(this.$buttonContainer!==undefined)
this.$buttonContainer.remove()
if(this.$cancelButton)
this.$cancelButton.remove()
if(this.$mdLabel)
this.$mdLabel.remove()
this.$el.show()
this.$button.show()
this.$container.css('height','auto')
if(this.options.hide)
$(this.options.hide,this.$parent).css('visibility','visible')}
InlineEditor.prototype.createEditor=function(){this.$editor=this.options.controlType=='text'?this.createTextEditor():this.createTextareaEditor()
this.$editor.attr('name',this.options.property)
var content=this.$el.data('content')
if(typeof content!=='undefined'&&content!==false)
this.$editor.val(content)
else
this.$editor.val(this.$el.hasClass('placeholder')?'':this.$el.text())
this.$editor.focus()
this.$applyButton.click($.proxy(this.applyChanges,this))
if(this.$cancelButton)
this.$cancelButton.click($.proxy(this.cancel,this))
var self=this
this.$editor.keydown(function(e){if(e.keyCode==27)
self.cancel()})}
InlineEditor.prototype.createTextEditor=function(){var $editor=$('<input type="text" class="form-control"/>')
this.$applyButton=$('<a href="#" class="apply-icon"><i class="icon-ok-circle"></i></a>')
this.$container.append(this.$applyButton)
this.$container.append($editor)
var self=this
$editor.keydown(function(e){if(e.keyCode==13)
return self.applyChanges()})
return $editor}
InlineEditor.prototype.createTextareaEditor=function(){var $editor=$('<textarea class="form-control"></textarea>')
$editor.height(this.$el.outerHeight(true)-80)
this.$mdLabel=$('<p class="help-block">You can use the <a target="_blank" href="/docs/help/markdown">October Flavored Markdown</a> syntax.</p>')
this.$container.append(this.$mdLabel)
this.$container.append($editor)
this.$buttonContainer=$('<div>')
this.$applyButton=$('<a href="#" class="apply btn btn-primary">Apply</a>')
this.$cancelButton=$('<a href="#" class="btn btn-default cancel">Cancel</a>')
this.$buttonContainer.append(this.$applyButton)
this.$buttonContainer.append(this.$cancelButton)
this.$container.append(this.$buttonContainer)
return $editor}
InlineEditor.prototype.cancel=function(){this.hideEditor()
return false}
InlineEditor.prototype.applyChanges=function(){var request=this.$container.request(this.options.handler,{data:{propertyName:this.options.property}}),self=this
request.success(function(data){if(self.options.type=='text')
self.$el.text(data.value)
else
self.$el.html(data.value)
if(self.$el.data('content')!==undefined)
self.$el.data('content',data.content)
self.hideEditor()
self.applyPlaceholder()
prettyPrint()})
return false}
InlineEditor.prototype.applyPlaceholder=function(){var hasValue=$.trim(this.$el.text()).length>0,placeholder=this.$el.data('placeholder')
if(!hasValue&&placeholder!==undefined){if(this.options.type=='text')
this.$el.text(placeholder)
else
this.$el.html('<p>'+placeholder+'</p>')
this.$el.addClass('placeholder')}else
this.$el.removeClass('placeholder')}
InlineEditor.DEFAULTS={controlType:'text',type:'text',hide:false}
var old=$.fn.inlineEditor
$.fn.inlineEditor=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.inlineEditor')
var options=$.extend({},InlineEditor.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.inlineEditor',(data=new InlineEditor(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.inlineEditor.Constructor=InlineEditor
$.fn.inlineEditor.noConflict=function(){$.fn.inlineEditor=old
return this}
$(document).render(function(){$('[data-control=inline-editor]').inlineEditor()})}(window.jQuery);
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.flexboxlegacy=function(){return J("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory;}else{factory(jQuery);}}(function($){var toFix=['wheel','mousewheel','DOMMouseScroll','MozMousePixelScroll'],toBind=('onwheel'in document||document.documentMode>=9)?['wheel']:['mousewheel','DomMouseScroll','MozMousePixelScroll'],slice=Array.prototype.slice,nullLowestDeltaTimeout,lowestDelta;if($.event.fixHooks){for(var i=toFix.length;i;){$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;}}
var special=$.event.special.mousewheel={version:'3.1.9',setup:function(){if(this.addEventListener){for(var i=toBind.length;i;){this.addEventListener(toBind[--i],handler,false);}}else{this.onmousewheel=handler;}
$.data(this,'mousewheel-line-height',special.getLineHeight(this));$.data(this,'mousewheel-page-height',special.getPageHeight(this));},teardown:function(){if(this.removeEventListener){for(var i=toBind.length;i;){this.removeEventListener(toBind[--i],handler,false);}}else{this.onmousewheel=null;}},getLineHeight:function(elem){return parseInt($(elem)['offsetParent'in $.fn?'offsetParent':'parent']().css('fontSize'),10);},getPageHeight:function(elem){return $(elem).height();},settings:{adjustOldDeltas:true}};$.fn.extend({mousewheel:function(fn){return fn?this.bind('mousewheel',fn):this.trigger('mousewheel');},unmousewheel:function(fn){return this.unbind('mousewheel',fn);}});function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;event=$.event.fix(orgEvent);event.type='mousewheel';if('detail'in orgEvent){deltaY=orgEvent.detail*-1;}
if('wheelDelta'in orgEvent){deltaY=orgEvent.wheelDelta;}
if('wheelDeltaY'in orgEvent){deltaY=orgEvent.wheelDeltaY;}
if('wheelDeltaX'in orgEvent){deltaX=orgEvent.wheelDeltaX*-1;}
if('axis'in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaX=deltaY*-1;deltaY=0;}
delta=deltaY===0?deltaX:deltaY;if('deltaY'in orgEvent){deltaY=orgEvent.deltaY*-1;delta=deltaY;}
if('deltaX'in orgEvent){deltaX=orgEvent.deltaX;if(deltaY===0){delta=deltaX*-1;}}
if(deltaY===0&&deltaX===0){return;}
if(orgEvent.deltaMode===1){var lineHeight=$.data(this,'mousewheel-line-height');delta*=lineHeight;deltaY*=lineHeight;deltaX*=lineHeight;}else if(orgEvent.deltaMode===2){var pageHeight=$.data(this,'mousewheel-page-height');delta*=pageHeight;deltaY*=pageHeight;deltaX*=pageHeight;}
absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDelta||absDelta<lowestDelta){lowestDelta=absDelta;if(shouldAdjustOldDeltas(orgEvent,absDelta)){lowestDelta/=40;}}
if(shouldAdjustOldDeltas(orgEvent,absDelta)){delta/=40;deltaX/=40;deltaY/=40;}
delta=Math[delta>=1?'floor':'ceil'](delta/lowestDelta);deltaX=Math[deltaX>=1?'floor':'ceil'](deltaX/lowestDelta);deltaY=Math[deltaY>=1?'floor':'ceil'](deltaY/lowestDelta);event.deltaX=deltaX;event.deltaY=deltaY;event.deltaFactor=lowestDelta;event.deltaMode=0;args.unshift(event,delta,deltaX,deltaY);if(nullLowestDeltaTimeout){clearTimeout(nullLowestDeltaTimeout);}
nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200);return($.event.dispatch||$.event.handle).apply(this,args);}
function nullLowestDelta(){lowestDelta=null;}
function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&orgEvent.type==='mousewheel'&&absDelta%120===0;}}));

+function($){"use strict";var Scrollbar=function(element,options){var
$el=this.$el=$(element),el=$el.get(0),self=this,options=this.options=options||{},sizeName=this.sizeName=options.vertical?'height':'width',isTouch=this.isTouch=Modernizr.touch,isScrollable=this.isScrollable=false,isLocked=this.isLocked=false,eventElementName=options.vertical?'pageY':'pageX',dragStart=0,startOffset=0;this.$scrollbar=$('<div />').addClass('scrollbar-scrollbar')
this.$track=$('<div />').addClass('scrollbar-track').appendTo(this.$scrollbar)
this.$thumb=$('<div />').addClass('scrollbar-thumb').appendTo(this.$track)
$el.addClass('drag-scrollbar').addClass(options.vertical?'vertical':'horizontal').prepend(this.$scrollbar)
if(isTouch){this.$el.on('touchstart',function(event){var touchEvent=event.originalEvent;if(touchEvent.touches.length==1){startDrag(touchEvent.touches[0])
event.stopPropagation()}})}
else{this.$thumb.on('mousedown',function(event){startDrag(event)})
this.$track.on('mouseup',function(event){moveDrag(event)})}
$el.mousewheel(function(event){var offset=self.options.vertical?((event.deltaFactor*event.deltaY)*-1):(event.deltaFactor*event.deltaX)
return!scrollWheel(offset*self.options.scrollSpeed)})
$el.on('oc.scrollbar.gotoStart',function(event){self.options.vertical?$el.scrollTop(0):$el.scrollLeft(0)
self.update()
$el.trigger('scroll.oc.scrollbar')
event.stopPropagation()})
$(window).on('resize',$.proxy(this.update,this))
function startDrag(event){$('body').addClass('drag-noselect')
dragStart=event[eventElementName]
startOffset=self.options.vertical?$el.scrollTop():$el.scrollLeft()
if(isTouch){$(window).on('touchmove.scrollbar',function(event){var touchEvent=event.originalEvent
if(moveDrag(touchEvent.touches[0]))
event.preventDefault();});$el.on('touchend.scrollbar',stopDrag)}
else{$(window).on('mousemove.scrollbar',function(event){moveDrag(event)
return false})
$(window).on('mouseup.scrollbar',function(){stopDrag()
return false})}}
function moveDrag(event){self.isLocked=true;var
offset,dragTo=event[eventElementName]
if(self.isTouch){offset=dragStart-dragTo}
else{var ratio=self.getCanvasSize()/self.getViewportSize()
offset=(dragTo-dragStart)*ratio}
self.options.vertical?$el.scrollTop(startOffset+offset):$el.scrollLeft(startOffset+offset)
$el.trigger('scroll.oc.scrollbar')
self.setThumbPosition()
return self.options.vertical?el.scrollTop!=startOffset:el.scrollLeft!=startOffset}
function stopDrag(){$('body').removeClass('drag-noselect')
$(window).off('.scrollbar')}
function scrollWheel(offset){startOffset=self.options.vertical?el.scrollTop:el.scrollLeft
self.options.vertical?$el.scrollTop(startOffset+offset):$el.scrollLeft(startOffset+offset)
var scrolled=self.options.vertical?el.scrollTop!=startOffset:el.scrollLeft!=startOffset
self.setThumbPosition()
$el.trigger('scroll.oc.scrollbar')
return scrolled}
setTimeout(function(){self.update()},1);}
Scrollbar.DEFAULTS={vertical:true,scrollSpeed:2,start:function(){},drag:function(){},stop:function(){}}
Scrollbar.prototype.update=function(){this.$scrollbar.hide()
this.setThumbSize()
this.setThumbPosition()
this.$scrollbar.show()}
Scrollbar.prototype.setThumbSize=function(){var properties=this.calculateProperties()
this.isScrollable=!(properties.thumbSizeRatio>=1);this.$scrollbar.toggleClass('disabled',!this.isScrollable)
if(this.options.vertical){this.$track.height(properties.canvasSize)
this.$thumb.height(properties.thumbSize)}
else{this.$track.width(properties.canvasSize)
this.$thumb.width(properties.thumbSize)}}
Scrollbar.prototype.setThumbPosition=function(){var properties=this.calculateProperties()
if(this.options.vertical)
this.$thumb.css({top:properties.thumbPosition})
else
this.$thumb.css({left:properties.thumbPosition})}
Scrollbar.prototype.calculateProperties=function(){var $el=this.$el,properties={};properties.viewportSize=this.getViewportSize()
properties.canvasSize=this.getCanvasSize()
properties.scrollAmount=(this.options.vertical)?$el.scrollTop():$el.scrollLeft()
properties.thumbSizeRatio=properties.viewportSize/properties.canvasSize
properties.thumbSize=properties.viewportSize*properties.thumbSizeRatio
properties.thumbPositionRatio=properties.scrollAmount/(properties.canvasSize-properties.viewportSize)
properties.thumbPosition=((properties.viewportSize-properties.thumbSize)*properties.thumbPositionRatio)+properties.scrollAmount
if(isNaN(properties.thumbPosition))
properties.thumbPosition=0
return properties;}
Scrollbar.prototype.getViewportSize=function(){return(this.options.vertical)?this.$el.height():this.$el.width();}
Scrollbar.prototype.getCanvasSize=function(){return(this.options.vertical)?this.$el.get(0).scrollHeight:this.$el.get(0).scrollWidth;}
Scrollbar.prototype.gotoElement=function(element,callback){var $el=$(element)
if(!$el.length)
return;var self=this,offset=0,animated=false,params={duration:300,queue:false,complete:function(){if(callback!==undefined)
callback()}}
if(!this.options.vertical){offset=$el.get(0).offsetLeft-this.$el.scrollLeft()
if(offset<0){this.$el.animate({'scrollLeft':$el.get(0).offsetLeft},params)
animated=true}else{offset=$el.get(0).offsetLeft+$el.outerWidth()-(this.$el.scrollLeft()+this.$el.outerWidth())
if(offset>0){this.$el.animate({'scrollLeft':$el.get(0).offsetLeft+$el.outerWidth()-this.$el.outerWidth()},params)
animated=true}}}else{offset=$el.get(0).offsetTop-this.$el.scrollTop()
if(offset<0){this.$el.animate({'scrollTop':$el.get(0).offsetTop},params)
animated=true}else{offset=$el.get(0).offsetTop-(this.$el.scrollTop()+this.$el.outerHeight())
if(offset>0){this.$el.animate({'scrollTop':$el.get(0).offsetTop+$el.outerHeight()-this.$el.outerHeight()},params)
animated=true}}}
if(!animated&&callback!==undefined)
callback()
return this}
var old=$.fn.scrollbar
$.fn.scrollbar=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.scrollbar')
var options=$.extend({},Scrollbar.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.scrollbar',(data=new Scrollbar(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.scrollbar.Constructor=Scrollbar
$.fn.scrollbar.noConflict=function(){$.fn.scrollbar=old
return this}
$(document).ready(function(){$('[data-control=scrollbar]').scrollbar()})}(window.jQuery);

+function($){"use strict";var Popover=function(element,options){var $el=this.$el=$(element);this.options=options||{};this.arrowSize=15
this.show()}
Popover.prototype.hide=function(){var e=$.Event('hiding.oc.popover',{relatedTarget:this.$el})
this.$el.trigger(e,this)
if(e.isDefaultPrevented())
return
if(this.$container)this.$container.remove()
if(this.$overlay)this.$overlay.remove()
this.$overlay=false;this.$container=false;this.$el.removeClass('popover-highlight')
this.$el.data('oc.popover',null)
$(document.body).removeClass('popover-open')
$(document).unbind('mousedown',this.docClickHandler);this.$el.trigger('hide.oc.popover')
$(document).off('.oc.popover');}
Popover.prototype.show=function(options){var self=this;var e=$.Event('showing.oc.popover',{relatedTarget:this.$el})
this.$el.trigger(e,this)
if(e.isDefaultPrevented())
return
this.$container=$('<div/>').addClass('control-popover').css('visibility','hidden')
if(this.options.containerClass)
this.$container.addClass(this.options.containerClass)
var $content=$('<div/>').html(this.getContent())
this.$container.append($content)
if(this.options.width)
this.$container.width(this.options.width)
if(this.options.modal){this.$container.addClass('popover-modal')
this.$overlay=$('<div/>').addClass('popover-overlay')
$(document.body).append(this.$overlay)
if(this.options.highlightModalTarget){this.$el.addClass('popover-highlight')
this.$el.blur()}}else
this.$overlay=false
if(this.options.container)
$(this.options.container).append(this.$container);else
$(document.body).append(this.$container);var
placement=this.calcPlacement(),position=this.calcPosition(placement);this.$container.css({left:position.x,top:position.y}).addClass('placement-'+placement)
this.$container.css('visibility','visible')
$(document.body).addClass('popover-open')
this.$container.on('mousedown',function(e){e.stopPropagation();})
this.$container.on('close.oc.popover',function(e){self.hide()})
this.$container.on('click','[data-dismiss=popover]',function(e){self.hide()
return false;})
this.docClickHandler=$.proxy(this.onDocumentClick,this)
$(document).bind('mousedown',this.docClickHandler);if(this.options.closeOnEsc){$(document).on('keyup.oc.popover',function(e){if(e.keyCode==27){self.hide()
return false;}})}
this.options.onShow(this)}
Popover.prototype.getContent=function(){return typeof this.options.content=='function'?this.options.content.call(this.$el[0],this):this.options.content}
Popover.prototype.calcDimensions=function(){var
documentWidth=$(document).width(),documentHeight=$(document).height(),targetOffset=this.$el.offset(),targetWidth=this.$el.outerWidth(),targetHeight=this.$el.outerHeight();return{containerWidth:this.$container.outerWidth()+this.arrowSize,containerHeight:this.$container.outerHeight()+this.arrowSize,targetOffset:targetOffset,targetHeight:targetHeight,targetWidth:targetWidth,spaceLeft:targetOffset.left,spaceRight:documentWidth-(targetWidth+targetOffset.left),spaceTop:targetOffset.top,spaceBottom:documentHeight-(targetHeight+targetOffset.top),spaceHorizontalBottom:documentHeight-targetOffset.top,spaceVerticalRight:documentWidth-targetOffset.left}}
Popover.prototype.fitsLeft=function(dimensions){return dimensions.spaceLeft>=dimensions.containerWidth&&dimensions.spaceHorizontalBottom>=dimensions.containerHeight}
Popover.prototype.fitsRight=function(dimensions){return dimensions.spaceRight>=dimensions.containerWidth&&dimensions.spaceHorizontalBottom>=dimensions.containerHeight}
Popover.prototype.fitsBottom=function(dimensions){return dimensions.spaceBottom>=dimensions.containerHeight&&dimensions.spaceVerticalRight>=dimensions.containerWidth}
Popover.prototype.fitsTop=function(dimensions){return dimensions.spaceTop>=dimensions.containerHeight&&dimensions.spaceVerticalRight>=dimensions.containerWidth}
Popover.prototype.calcPlacement=function(){var
placement=this.options.placement,dimensions=this.calcDimensions();if(placement!='bottom'&&placement!='top'&&placement!='left'&&placement!='right')
placement='bottom'
var placementFunctions={top:this.fitsTop,bottom:this.fitsBottom,left:this.fitsLeft,right:this.fitsRight}
if(placementFunctions[placement](dimensions))
return placement
for(var index in placementFunctions){if(placementFunctions[index](dimensions))
return index}
return this.options.fallbackPlacement}
Popover.prototype.calcPosition=function(placement){var
dimensions=this.calcDimensions(),result;switch(placement){case'left':var realOffset=this.options.offsetY===undefined?this.options.offset:this.options.offsetY
result={x:(dimensions.targetOffset.left-dimensions.containerWidth),y:dimensions.targetOffset.top+realOffset}
break;case'top':var realOffset=this.options.offsetX===undefined?this.options.offset:this.options.offsetX
result={x:dimensions.targetOffset.left+realOffset,y:(dimensions.targetOffset.top-dimensions.containerHeight)}
break;case'bottom':var realOffset=this.options.offsetX===undefined?this.options.offset:this.options.offsetX
result={x:dimensions.targetOffset.left+realOffset,y:(dimensions.targetOffset.top+dimensions.targetHeight+this.arrowSize)}
break;case'right':var realOffset=this.options.offsetY===undefined?this.options.offset:this.options.offsetY
result={x:(dimensions.targetOffset.left+dimensions.targetWidth+this.arrowSize),y:dimensions.targetOffset.top+realOffset}
break;}
if(!this.options.container)
return result
var
$container=$(this.options.container),containerOffset=$container.offset();result.x-=containerOffset.left;result.y-=containerOffset.top;return result;}
Popover.prototype.onDocumentClick=function(){if(this.options.closeOnPageClick)
this.hide();}
Popover.DEFAULTS={placement:'bottom',fallbackPlacement:'bottom',content:'<p>Popover content<p>',width:false,modal:false,highlightModalTarget:false,closeOnPageClick:true,closeOnEsc:true,container:false,containerClass:null,offset:15,onShow:function(){}}
var old=$.fn.ocPopover
$.fn.ocPopover=function(option){var args=arguments;return this.each(function(){var $this=$(this)
var data=$this.data('oc.popover')
var options=$.extend({},Popover.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data){if(typeof option=='string')
return;$this.data('oc.popover',(data=new Popover(this,options)))}else{if(typeof option!='string')
return;var methodArgs=[];for(var i=1;i<args.length;i++)
methodArgs.push(args[i])
data[option].apply(data,methodArgs)}})}
$.fn.ocPopover.Constructor=Popover
$.fn.ocPopover.noConflict=function(){$.fn.ocPopover=old
return this}
$(document).on('click','[data-control=popover]',function(e){$(this).ocPopover()
return false;})}(window.jQuery);

$(document).ready(function(){$('[data-control=scrollable]').TrackpadScrollEmulator();})
;(function($){var pluginName='TrackpadScrollEmulator';function Plugin(element,options){var el=element;var $el=$(element);var $scrollContentEl;var $contentEl=$el.find('.tse-content');var $scrollbarEl;var $dragHandleEl;var dragOffset;var flashTimeout;var scrollDirection='vert';var scrollOffsetAttr='scrollTop';var sizeAttr='height';var offsetAttr='top';options=$.extend({},$.fn[pluginName].defaults,options);function init(){if($el.hasClass('horizontal')){scrollDirection='horiz';scrollOffsetAttr='scrollLeft';sizeAttr='width';offsetAttr='left';}
$el.prepend('<div class="tse-scrollbar"><div class="drag-handle"></div></div>');$scrollbarEl=$el.find('.tse-scrollbar');$dragHandleEl=$el.find('.drag-handle');if(options.wrapContent){$contentEl.wrap('<div class="tse-scroll-content" />');}
$scrollContentEl=$el.find('.tse-scroll-content');resizeScrollContent();if(options.autoHide){$el.on('mouseenter',flashScrollbar);}
$dragHandleEl.on('mousedown',startDrag);$scrollContentEl.on('scroll',onScrolled);resizeScrollbar();$(window).on('resize',function(){recalculate();});if(!options.autoHide){showScrollbar();}}
function startDrag(e){e.preventDefault();var eventOffset=e.pageY;if(scrollDirection==='horiz'){eventOffset=e.pageX;}
dragOffset=eventOffset-$dragHandleEl.offset()[offsetAttr];$(document).on('mousemove',drag);$(document).on('mouseup',endDrag);}
function drag(e){e.preventDefault();var eventOffset=e.pageY;if(scrollDirection==='horiz'){eventOffset=e.pageX;}
var dragPos=eventOffset-$scrollbarEl.offset()[offsetAttr]-dragOffset;var dragPerc=dragPos/$scrollbarEl[sizeAttr]();var scrollPos=dragPerc*$contentEl[sizeAttr]();$scrollContentEl[scrollOffsetAttr](scrollPos);}
function endDrag(){$(document).off('mousemove',drag);$(document).off('mouseup',endDrag);}
function onScrolled(e){flashScrollbar();}
function resizeScrollbar(){var contentSize=$contentEl[sizeAttr]();var scrollOffset=$scrollContentEl[scrollOffsetAttr]();var scrollbarSize=$scrollbarEl[sizeAttr]();var scrollbarRatio=scrollbarSize/contentSize;var handleOffset=Math.round(scrollbarRatio*scrollOffset)+2;var handleSize=Math.floor(scrollbarRatio*(scrollbarSize-2))-2;if(scrollbarSize<contentSize){if(scrollDirection==='vert'){$dragHandleEl.css({'top':handleOffset,'height':handleSize});}else{$dragHandleEl.css({'left':handleOffset,'width':handleSize});}
$scrollbarEl.show();}else{$scrollbarEl.hide();}}
function flashScrollbar(){resizeScrollbar();showScrollbar();}
function showScrollbar(){$dragHandleEl.addClass('visible');if(!options.autoHide){return;}
if(typeof flashTimeout==='number'){window.clearTimeout(flashTimeout);}
flashTimeout=window.setTimeout(function(){hideScrollbar();},1000);}
function hideScrollbar(){$dragHandleEl.removeClass('visible');if(typeof flashTimeout==='number'){window.clearTimeout(flashTimeout);}}
function resizeScrollContent(){if(scrollDirection==='vert'){$scrollContentEl.width($el.width()+scrollbarWidth());$scrollContentEl.height($el.height());}else{$scrollContentEl.width($el.width());$scrollContentEl.height($el.height()+scrollbarWidth());$contentEl.height($el.height());}}
function scrollbarWidth(){var tempEl=$('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');$('body').append(tempEl);var width=$(tempEl).innerWidth();var widthMinusScrollbars=$('div',tempEl).innerWidth();tempEl.remove();return(width-widthMinusScrollbars);}
function recalculate(){resizeScrollContent();resizeScrollbar();}
function option(key,val){if(val){options[key]=val;}else{return options[key];}}
function destroy(){$contentEl.insertBefore($scrollbarEl);$scrollbarEl.remove();$scrollContentEl.remove();$contentEl.css({'height':$el.height()+'px','overflow-y':'scroll'});hook('onDestroy');$el.removeData('plugin_'+pluginName);}
function hook(hookName){if(options[hookName]!==undefined){options[hookName].call(el);}}
init();return{option:option,destroy:destroy,recalculate:recalculate};}
$.fn[pluginName]=function(options){if(typeof arguments[0]==='string'){var methodName=arguments[0];var args=Array.prototype.slice.call(arguments,1);var returnVal;this.each(function(){if($.data(this,'plugin_'+pluginName)&&typeof $.data(this,'plugin_'+pluginName)[methodName]==='function'){returnVal=$.data(this,'plugin_'+pluginName)[methodName].apply(this,args);}else{throw new Error('Method '+methodName+' does not exist on jQuery.'+pluginName);}});if(returnVal!==undefined){return returnVal;}else{return this;}}else if(typeof options==="object"||!options){return this.each(function(){if(!$.data(this,'plugin_'+pluginName)){$.data(this,'plugin_'+pluginName,new Plugin(this,options));}});}};$.fn[pluginName].defaults={onInit:function(){},onDestroy:function(){},wrapContent:true,autoHide:true};})(jQuery);
!function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,this.outerHTML(c)):"":""},AbstractChosen.prototype.result_add_group=function(a){var b;return a.search_match||a.group_match?a.active_options>0?(b=document.createElement("li"),b.className="group-result",b.innerHTML=a.search_text,this.outerHTML(b)):"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(this.no_results_clear(),e=0,g=this.get_search_text(),a=g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=this.search_contains?"":"^",c=new RegExp(d+a,"i"),j=new RegExp(a,"i"),m=this.results_data,k=0,l=m.length;l>k;k++)b=m[k],b.search_match=!1,f=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(f=this.results_data[b.group_array_index],0===f.active_options&&f.search_match&&(e+=1),f.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.html,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(e+=1),b.search_match?(g.length&&(h=b.search_text.search(j),i=b.search_text.substr(0,h+g.length)+"</em>"+b.search_text.substr(h+g.length),b.search_text=i.substr(0,h)+"<em>"+i.substr(h)),null!=f&&(f.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>e&&g.length?(this.update_results_content(""),this.no_results(g)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d?d.destroy():d||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this);

(function(B){B.color={};B.color.make=function(F,E,C,D){var G={};G.r=F||0;G.g=E||0;G.b=C||0;G.a=D!=null?D:1;G.add=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]+=I}return G.normalize()};G.scale=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]*=I}return G.normalize()};G.toString=function(){if(G.a>=1){return"rgb("+[G.r,G.g,G.b].join(",")+")"}else{return"rgba("+[G.r,G.g,G.b,G.a].join(",")+")"}};G.normalize=function(){function H(J,K,I){return K<J?J:(K>I?I:K)}G.r=H(0,parseInt(G.r),255);G.g=H(0,parseInt(G.g),255);G.b=H(0,parseInt(G.b),255);G.a=H(0,G.a,1);return G};G.clone=function(){return B.color.make(G.r,G.b,G.g,G.a)};return G.normalize()};B.color.extract=function(D,C){var E;do{E=D.css(C).toLowerCase();if(E!=""&&E!="transparent"){break}D=D.parent()}while(!B.nodeName(D.get(0),"body"));if(E=="rgba(0, 0, 0, 0)"){E="transparent"}return B.color.parse(E)};B.color.parse=function(F){var E,C=B.color.make;if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10))}if(E=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10),parseFloat(E[4]))}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55)}if(E=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55,parseFloat(E[4]))}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return C(parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16))}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return C(parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16))}var D=B.trim(F).toLowerCase();if(D=="transparent"){return C(255,255,255,0)}else{E=A[D]||[0,0,0];return C(E[0],E[1],E[2])}};var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function($){var hasOwnProperty=Object.prototype.hasOwnProperty;function Canvas(cls,container){var element=container.children("."+cls)[0];if(element==null){element=document.createElement("canvas");element.className=cls;$(element).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(container);if(!element.getContext){if(window.G_vmlCanvasManager){element=window.G_vmlCanvasManager.initElement(element);}else{throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");}}}
this.element=element;var context=this.context=element.getContext("2d");var devicePixelRatio=window.devicePixelRatio||1,backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;this.pixelRatio=devicePixelRatio/backingStoreRatio;this.resize(container.width(),container.height());this.textContainer=null;this.text={};this._textCache={};}
Canvas.prototype.resize=function(width,height){if(width<=0||height<=0){throw new Error("Invalid dimensions for plot, width = "+width+", height = "+height);}
var element=this.element,context=this.context,pixelRatio=this.pixelRatio;if(this.width!=width){element.width=width*pixelRatio;element.style.width=width+"px";this.width=width;}
if(this.height!=height){element.height=height*pixelRatio;element.style.height=height+"px";this.height=height;}
context.restore();context.save();context.scale(pixelRatio,pixelRatio);};Canvas.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height);};Canvas.prototype.render=function(){var cache=this._textCache;for(var layerKey in cache){if(hasOwnProperty.call(cache,layerKey)){var layer=this.getTextLayer(layerKey),layerCache=cache[layerKey];layer.hide();for(var styleKey in layerCache){if(hasOwnProperty.call(layerCache,styleKey)){var styleCache=layerCache[styleKey];for(var key in styleCache){if(hasOwnProperty.call(styleCache,key)){var positions=styleCache[key].positions;for(var i=0,position;position=positions[i];i++){if(position.active){if(!position.rendered){layer.append(position.element);position.rendered=true;}}else{positions.splice(i--,1);if(position.rendered){position.element.detach();}}}
if(positions.length==0){delete styleCache[key];}}}}}
layer.show();}}};Canvas.prototype.getTextLayer=function(classes){var layer=this.text[classes];if(layer==null){if(this.textContainer==null){this.textContainer=$("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,'font-size':"smaller",color:"#545454"}).insertAfter(this.element);}
layer=this.text[classes]=$("<div></div>").addClass(classes).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer);}
return layer;};Canvas.prototype.getTextInfo=function(layer,text,font,angle,width){var textStyle,layerCache,styleCache,info;text=""+text;if(typeof font==="object"){textStyle=font.style+" "+font.variant+" "+font.weight+" "+font.size+"px/"+font.lineHeight+"px "+font.family;}else{textStyle=font;}
layerCache=this._textCache[layer];if(layerCache==null){layerCache=this._textCache[layer]={};}
styleCache=layerCache[textStyle];if(styleCache==null){styleCache=layerCache[textStyle]={};}
info=styleCache[text];if(info==null){var element=$("<div></div>").html(text).css({position:"absolute",'max-width':width,top:-9999}).appendTo(this.getTextLayer(layer));if(typeof font==="object"){element.css({font:textStyle,color:font.color});}else if(typeof font==="string"){element.addClass(font);}
info=styleCache[text]={width:element.outerWidth(true),height:element.outerHeight(true),element:element,positions:[]};element.detach();}
return info;};Canvas.prototype.addText=function(layer,x,y,text,font,angle,width,halign,valign){var info=this.getTextInfo(layer,text,font,angle,width),positions=info.positions;if(halign=="center"){x-=info.width/2;}else if(halign=="right"){x-=info.width;}
if(valign=="middle"){y-=info.height/2;}else if(valign=="bottom"){y-=info.height;}
for(var i=0,position;position=positions[i];i++){if(position.x==x&&position.y==y){position.active=true;return;}}
position={active:true,rendered:false,element:positions.length?info.element.clone():info.element,x:x,y:y};positions.push(position);position.element.css({top:Math.round(y),left:Math.round(x),'text-align':halign});};Canvas.prototype.removeText=function(layer,x,y,text,font,angle){if(text==null){var layerCache=this._textCache[layer];if(layerCache!=null){for(var styleKey in layerCache){if(hasOwnProperty.call(layerCache,styleKey)){var styleCache=layerCache[styleKey];for(var key in styleCache){if(hasOwnProperty.call(styleCache,key)){var positions=styleCache[key].positions;for(var i=0,position;position=positions[i];i++){position.active=false;}}}}}}}else{var positions=this.getTextInfo(layer,text,font,angle).positions;for(var i=0,position;position=positions[i];i++){if(position.x==x&&position.y==y){position.active=false;}}}};function Plot(placeholder,data_,options_,plugins){var series=[],options={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:0.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false,zero:true},shadowSize:3,highlightColor:null},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1000/60},hooks:{}},surface=null,overlay=null,eventHolder=null,ctx=null,octx=null,xaxes=[],yaxes=[],plotOffset={left:0,right:0,top:0,bottom:0},plotWidth=0,plotHeight=0,hooks={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},plot=this;plot.setData=setData;plot.setupGrid=setupGrid;plot.draw=draw;plot.getPlaceholder=function(){return placeholder;};plot.getCanvas=function(){return surface.element;};plot.getPlotOffset=function(){return plotOffset;};plot.width=function(){return plotWidth;};plot.height=function(){return plotHeight;};plot.offset=function(){var o=eventHolder.offset();o.left+=plotOffset.left;o.top+=plotOffset.top;return o;};plot.getData=function(){return series;};plot.getAxes=function(){var res={},i;$.each(xaxes.concat(yaxes),function(_,axis){if(axis)
res[axis.direction+(axis.n!=1?axis.n:"")+"axis"]=axis;});return res;};plot.getXAxes=function(){return xaxes;};plot.getYAxes=function(){return yaxes;};plot.c2p=canvasToAxisCoords;plot.p2c=axisToCanvasCoords;plot.getOptions=function(){return options;};plot.highlight=highlight;plot.unhighlight=unhighlight;plot.triggerRedrawOverlay=triggerRedrawOverlay;plot.pointOffset=function(point){return{left:parseInt(xaxes[axisNumber(point,"x")-1].p2c(+point.x)+plotOffset.left,10),top:parseInt(yaxes[axisNumber(point,"y")-1].p2c(+point.y)+plotOffset.top,10)};};plot.shutdown=shutdown;plot.resize=function(){var width=placeholder.width(),height=placeholder.height();surface.resize(width,height);overlay.resize(width,height);};plot.hooks=hooks;initPlugins(plot);parseOptions(options_);setupCanvases();setData(data_);setupGrid();draw();bindEvents();function executeHooks(hook,args){args=[plot].concat(args);for(var i=0;i<hook.length;++i)
hook[i].apply(this,args);}
function initPlugins(){var classes={Canvas:Canvas};for(var i=0;i<plugins.length;++i){var p=plugins[i];p.init(plot,classes);if(p.options)
$.extend(true,options,p.options);}}
function parseOptions(opts){$.extend(true,options,opts);if(opts&&opts.colors){options.colors=opts.colors;}
if(options.xaxis.color==null)
options.xaxis.color=$.color.parse(options.grid.color).scale('a',0.22).toString();if(options.yaxis.color==null)
options.yaxis.color=$.color.parse(options.grid.color).scale('a',0.22).toString();if(options.xaxis.tickColor==null)
options.xaxis.tickColor=options.grid.tickColor||options.xaxis.color;if(options.yaxis.tickColor==null)
options.yaxis.tickColor=options.grid.tickColor||options.yaxis.color;if(options.grid.borderColor==null)
options.grid.borderColor=options.grid.color;if(options.grid.tickColor==null)
options.grid.tickColor=$.color.parse(options.grid.color).scale('a',0.22).toString();var i,axisOptions,axisCount,fontDefaults={style:placeholder.css("font-style"),size:Math.round(0.8*(+placeholder.css("font-size").replace("px","")||13)),variant:placeholder.css("font-variant"),weight:placeholder.css("font-weight"),family:placeholder.css("font-family")};fontDefaults.lineHeight=fontDefaults.size*1.15;axisCount=options.xaxes.length||1;for(i=0;i<axisCount;++i){axisOptions=options.xaxes[i];if(axisOptions&&!axisOptions.tickColor){axisOptions.tickColor=axisOptions.color;}
axisOptions=$.extend(true,{},options.xaxis,axisOptions);options.xaxes[i]=axisOptions;if(axisOptions.font){axisOptions.font=$.extend({},fontDefaults,axisOptions.font);if(!axisOptions.font.color){axisOptions.font.color=axisOptions.color;}}}
axisCount=options.yaxes.length||1;for(i=0;i<axisCount;++i){axisOptions=options.yaxes[i];if(axisOptions&&!axisOptions.tickColor){axisOptions.tickColor=axisOptions.color;}
axisOptions=$.extend(true,{},options.yaxis,axisOptions);options.yaxes[i]=axisOptions;if(axisOptions.font){axisOptions.font=$.extend({},fontDefaults,axisOptions.font);if(!axisOptions.font.color){axisOptions.font.color=axisOptions.color;}}}
if(options.xaxis.noTicks&&options.xaxis.ticks==null)
options.xaxis.ticks=options.xaxis.noTicks;if(options.yaxis.noTicks&&options.yaxis.ticks==null)
options.yaxis.ticks=options.yaxis.noTicks;if(options.x2axis){options.xaxes[1]=$.extend(true,{},options.xaxis,options.x2axis);options.xaxes[1].position="top";}
if(options.y2axis){options.yaxes[1]=$.extend(true,{},options.yaxis,options.y2axis);options.yaxes[1].position="right";}
if(options.grid.coloredAreas)
options.grid.markings=options.grid.coloredAreas;if(options.grid.coloredAreasColor)
options.grid.markingsColor=options.grid.coloredAreasColor;if(options.lines)
$.extend(true,options.series.lines,options.lines);if(options.points)
$.extend(true,options.series.points,options.points);if(options.bars)
$.extend(true,options.series.bars,options.bars);if(options.shadowSize!=null)
options.series.shadowSize=options.shadowSize;if(options.highlightColor!=null)
options.series.highlightColor=options.highlightColor;for(i=0;i<options.xaxes.length;++i)
getOrCreateAxis(xaxes,i+1).options=options.xaxes[i];for(i=0;i<options.yaxes.length;++i)
getOrCreateAxis(yaxes,i+1).options=options.yaxes[i];for(var n in hooks)
if(options.hooks[n]&&options.hooks[n].length)
hooks[n]=hooks[n].concat(options.hooks[n]);executeHooks(hooks.processOptions,[options]);}
function setData(d){series=parseData(d);fillInSeriesOptions();processData();}
function parseData(d){var res=[];for(var i=0;i<d.length;++i){var s=$.extend(true,{},options.series);if(d[i].data!=null){s.data=d[i].data;delete d[i].data;$.extend(true,s,d[i]);d[i].data=s.data;}
else
s.data=d[i];res.push(s);}
return res;}
function axisNumber(obj,coord){var a=obj[coord+"axis"];if(typeof a=="object")
a=a.n;if(typeof a!="number")
a=1;return a;}
function allAxes(){return $.grep(xaxes.concat(yaxes),function(a){return a;});}
function canvasToAxisCoords(pos){var res={},i,axis;for(i=0;i<xaxes.length;++i){axis=xaxes[i];if(axis&&axis.used)
res["x"+axis.n]=axis.c2p(pos.left);}
for(i=0;i<yaxes.length;++i){axis=yaxes[i];if(axis&&axis.used)
res["y"+axis.n]=axis.c2p(pos.top);}
if(res.x1!==undefined)
res.x=res.x1;if(res.y1!==undefined)
res.y=res.y1;return res;}
function axisToCanvasCoords(pos){var res={},i,axis,key;for(i=0;i<xaxes.length;++i){axis=xaxes[i];if(axis&&axis.used){key="x"+axis.n;if(pos[key]==null&&axis.n==1)
key="x";if(pos[key]!=null){res.left=axis.p2c(pos[key]);break;}}}
for(i=0;i<yaxes.length;++i){axis=yaxes[i];if(axis&&axis.used){key="y"+axis.n;if(pos[key]==null&&axis.n==1)
key="y";if(pos[key]!=null){res.top=axis.p2c(pos[key]);break;}}}
return res;}
function getOrCreateAxis(axes,number){if(!axes[number-1])
axes[number-1]={n:number,direction:axes==xaxes?"x":"y",options:$.extend(true,{},axes==xaxes?options.xaxis:options.yaxis)};return axes[number-1];}
function fillInSeriesOptions(){var neededColors=series.length,maxIndex=-1,i;for(i=0;i<series.length;++i){var sc=series[i].color;if(sc!=null){neededColors--;if(typeof sc=="number"&&sc>maxIndex){maxIndex=sc;}}}
if(neededColors<=maxIndex){neededColors=maxIndex+1;}
var c,colors=[],colorPool=options.colors,colorPoolSize=colorPool.length,variation=0;for(i=0;i<neededColors;i++){c=$.color.parse(colorPool[i%colorPoolSize]||"#666");if(i%colorPoolSize==0&&i){if(variation>=0){if(variation<0.5){variation=-variation-0.2;}else variation=0;}else variation=-variation;}
colors[i]=c.scale('rgb',1+variation);}
var colori=0,s;for(i=0;i<series.length;++i){s=series[i];if(s.color==null){s.color=colors[colori].toString();++colori;}
else if(typeof s.color=="number")
s.color=colors[s.color].toString();if(s.lines.show==null){var v,show=true;for(v in s)
if(s[v]&&s[v].show){show=false;break;}
if(show)
s.lines.show=true;}
if(s.lines.zero==null){s.lines.zero=!!s.lines.fill;}
s.xaxis=getOrCreateAxis(xaxes,axisNumber(s,"x"));s.yaxis=getOrCreateAxis(yaxes,axisNumber(s,"y"));}}
function processData(){var topSentry=Number.POSITIVE_INFINITY,bottomSentry=Number.NEGATIVE_INFINITY,fakeInfinity=Number.MAX_VALUE,i,j,k,m,length,s,points,ps,x,y,axis,val,f,p,data,format;function updateAxis(axis,min,max){if(min<axis.datamin&&min!=-fakeInfinity)
axis.datamin=min;if(max>axis.datamax&&max!=fakeInfinity)
axis.datamax=max;}
$.each(allAxes(),function(_,axis){axis.datamin=topSentry;axis.datamax=bottomSentry;axis.used=false;});for(i=0;i<series.length;++i){s=series[i];s.datapoints={points:[]};executeHooks(hooks.processRawData,[s,s.data,s.datapoints]);}
for(i=0;i<series.length;++i){s=series[i];data=s.data;format=s.datapoints.format;if(!format){format=[];format.push({x:true,number:true,required:true});format.push({y:true,number:true,required:true});if(s.bars.show||(s.lines.show&&s.lines.fill)){var autoscale=!!((s.bars.show&&s.bars.zero)||(s.lines.show&&s.lines.zero));format.push({y:true,number:true,required:false,defaultValue:0,autoscale:autoscale});if(s.bars.horizontal){delete format[format.length-1].y;format[format.length-1].x=true;}}
s.datapoints.format=format;}
if(s.datapoints.pointsize!=null)
continue;s.datapoints.pointsize=format.length;ps=s.datapoints.pointsize;points=s.datapoints.points;var insertSteps=s.lines.show&&s.lines.steps;s.xaxis.used=s.yaxis.used=true;for(j=k=0;j<data.length;++j,k+=ps){p=data[j];var nullify=p==null;if(!nullify){for(m=0;m<ps;++m){val=p[m];f=format[m];if(f){if(f.number&&val!=null){val=+val;if(isNaN(val))
val=null;else if(val==Infinity)
val=fakeInfinity;else if(val==-Infinity)
val=-fakeInfinity;}
if(val==null){if(f.required)
nullify=true;if(f.defaultValue!=null)
val=f.defaultValue;}}
points[k+m]=val;}}
if(nullify){for(m=0;m<ps;++m){val=points[k+m];if(val!=null){f=format[m];if(f.autoscale){if(f.x){updateAxis(s.xaxis,val,val);}
if(f.y){updateAxis(s.yaxis,val,val);}}}
points[k+m]=null;}}
else{if(insertSteps&&k>0&&points[k-ps]!=null&&points[k-ps]!=points[k]&&points[k-ps+1]!=points[k+1]){for(m=0;m<ps;++m)
points[k+ps+m]=points[k+m];points[k+1]=points[k-ps+1];k+=ps;}}}}
for(i=0;i<series.length;++i){s=series[i];executeHooks(hooks.processDatapoints,[s,s.datapoints]);}
for(i=0;i<series.length;++i){s=series[i];points=s.datapoints.points;ps=s.datapoints.pointsize;format=s.datapoints.format;var xmin=topSentry,ymin=topSentry,xmax=bottomSentry,ymax=bottomSentry;for(j=0;j<points.length;j+=ps){if(points[j]==null)
continue;for(m=0;m<ps;++m){val=points[j+m];f=format[m];if(!f||f.autoscale===false||val==fakeInfinity||val==-fakeInfinity)
continue;if(f.x){if(val<xmin)
xmin=val;if(val>xmax)
xmax=val;}
if(f.y){if(val<ymin)
ymin=val;if(val>ymax)
ymax=val;}}}
if(s.bars.show){var delta;switch(s.bars.align){case"left":delta=0;break;case"right":delta=-s.bars.barWidth;break;case"center":delta=-s.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+s.bars.align);}
if(s.bars.horizontal){ymin+=delta;ymax+=delta+s.bars.barWidth;}
else{xmin+=delta;xmax+=delta+s.bars.barWidth;}}
updateAxis(s.xaxis,xmin,xmax);updateAxis(s.yaxis,ymin,ymax);}
$.each(allAxes(),function(_,axis){if(axis.datamin==topSentry)
axis.datamin=null;if(axis.datamax==bottomSentry)
axis.datamax=null;});}
function setupCanvases(){placeholder.css("padding",0).children(":not(.flot-base,.flot-overlay)").remove();if(placeholder.css("position")=='static')
placeholder.css("position","relative");surface=new Canvas("flot-base",placeholder);overlay=new Canvas("flot-overlay",placeholder);ctx=surface.context;octx=overlay.context;eventHolder=$(overlay.element).unbind();var existing=placeholder.data("plot");if(existing){existing.shutdown();overlay.clear();}
placeholder.data("plot",plot);}
function bindEvents(){if(options.grid.hoverable){eventHolder.mousemove(onMouseMove);eventHolder.bind("mouseleave",onMouseLeave);}
if(options.grid.clickable)
eventHolder.click(onClick);executeHooks(hooks.bindEvents,[eventHolder]);}
function shutdown(){if(redrawTimeout)
clearTimeout(redrawTimeout);eventHolder.unbind("mousemove",onMouseMove);eventHolder.unbind("mouseleave",onMouseLeave);eventHolder.unbind("click",onClick);executeHooks(hooks.shutdown,[eventHolder]);}
function setTransformationHelpers(axis){function identity(x){return x;}
var s,m,t=axis.options.transform||identity,it=axis.options.inverseTransform;if(axis.direction=="x"){s=axis.scale=plotWidth/Math.abs(t(axis.max)-t(axis.min));m=Math.min(t(axis.max),t(axis.min));}
else{s=axis.scale=plotHeight/Math.abs(t(axis.max)-t(axis.min));s=-s;m=Math.max(t(axis.max),t(axis.min));}
if(t==identity)
axis.p2c=function(p){return(p-m)*s;};else
axis.p2c=function(p){return(t(p)-m)*s;};if(!it)
axis.c2p=function(c){return m+c/s;};else
axis.c2p=function(c){return it(m+c/s);};}
function measureTickLabels(axis){var opts=axis.options,ticks=axis.ticks||[],labelWidth=opts.labelWidth||0,labelHeight=opts.labelHeight||0,maxWidth=labelWidth||axis.direction=="x"?Math.floor(surface.width/(ticks.length||1)):null,legacyStyles=axis.direction+"Axis "+axis.direction+axis.n+"Axis",layer="flot-"+axis.direction+"-axis flot-"+axis.direction+axis.n+"-axis "+legacyStyles,font=opts.font||"flot-tick-label tickLabel";for(var i=0;i<ticks.length;++i){var t=ticks[i];if(!t.label)
continue;var info=surface.getTextInfo(layer,t.label,font,null,maxWidth);labelWidth=Math.max(labelWidth,info.width);labelHeight=Math.max(labelHeight,info.height);}
axis.labelWidth=opts.labelWidth||labelWidth;axis.labelHeight=opts.labelHeight||labelHeight;}
function allocateAxisBoxFirstPhase(axis){var lw=axis.labelWidth,lh=axis.labelHeight,pos=axis.options.position,tickLength=axis.options.tickLength,axisMargin=options.grid.axisMargin,padding=options.grid.labelMargin,all=axis.direction=="x"?xaxes:yaxes,index,innermost;var samePosition=$.grep(all,function(a){return a&&a.options.position==pos&&a.reserveSpace;});if($.inArray(axis,samePosition)==samePosition.length-1)
axisMargin=0;innermost=$.inArray(axis,samePosition)==0;if(tickLength==null){if(innermost)
tickLength="full";else
tickLength=5;}
if(!isNaN(+tickLength))
padding+=+tickLength;if(axis.direction=="x"){lh+=padding;if(pos=="bottom"){plotOffset.bottom+=lh+axisMargin;axis.box={top:surface.height-plotOffset.bottom,height:lh};}
else{axis.box={top:plotOffset.top+axisMargin,height:lh};plotOffset.top+=lh+axisMargin;}}
else{lw+=padding;if(pos=="left"){axis.box={left:plotOffset.left+axisMargin,width:lw};plotOffset.left+=lw+axisMargin;}
else{plotOffset.right+=lw+axisMargin;axis.box={left:surface.width-plotOffset.right,width:lw};}}
axis.position=pos;axis.tickLength=tickLength;axis.box.padding=padding;axis.innermost=innermost;}
function allocateAxisBoxSecondPhase(axis){if(axis.direction=="x"){axis.box.left=plotOffset.left-axis.labelWidth/2;axis.box.width=surface.width-plotOffset.left-plotOffset.right+axis.labelWidth;}
else{axis.box.top=plotOffset.top-axis.labelHeight/2;axis.box.height=surface.height-plotOffset.bottom-plotOffset.top+axis.labelHeight;}}
function adjustLayoutForThingsStickingOut(){var minMargin=options.grid.minBorderMargin,margins={x:0,y:0},i,axis;if(minMargin==null){minMargin=0;for(i=0;i<series.length;++i)
minMargin=Math.max(minMargin,2*(series[i].points.radius+series[i].points.lineWidth/2));}
margins.x=margins.y=Math.ceil(minMargin);$.each(allAxes(),function(_,axis){var dir=axis.direction;if(axis.reserveSpace)
margins[dir]=Math.ceil(Math.max(margins[dir],(dir=="x"?axis.labelWidth:axis.labelHeight)/2));});plotOffset.left=Math.max(margins.x,plotOffset.left);plotOffset.right=Math.max(margins.x,plotOffset.right);plotOffset.top=Math.max(margins.y,plotOffset.top);plotOffset.bottom=Math.max(margins.y,plotOffset.bottom);}
function setupGrid(){var i,axes=allAxes(),showGrid=options.grid.show;for(var a in plotOffset){var margin=options.grid.margin||0;plotOffset[a]=typeof margin=="number"?margin:margin[a]||0;}
executeHooks(hooks.processOffset,[plotOffset]);for(var a in plotOffset){if(typeof(options.grid.borderWidth)=="object"){plotOffset[a]+=showGrid?options.grid.borderWidth[a]:0;}
else{plotOffset[a]+=showGrid?options.grid.borderWidth:0;}}
$.each(axes,function(_,axis){axis.show=axis.options.show;if(axis.show==null)
axis.show=axis.used;axis.reserveSpace=axis.show||axis.options.reserveSpace;setRange(axis);});if(showGrid){var allocatedAxes=$.grep(axes,function(axis){return axis.reserveSpace;});$.each(allocatedAxes,function(_,axis){setupTickGeneration(axis);setTicks(axis);snapRangeToTicks(axis,axis.ticks);measureTickLabels(axis);});for(i=allocatedAxes.length-1;i>=0;--i)
allocateAxisBoxFirstPhase(allocatedAxes[i]);adjustLayoutForThingsStickingOut();$.each(allocatedAxes,function(_,axis){allocateAxisBoxSecondPhase(axis);});}
plotWidth=surface.width-plotOffset.left-plotOffset.right;plotHeight=surface.height-plotOffset.bottom-plotOffset.top;$.each(axes,function(_,axis){setTransformationHelpers(axis);});if(showGrid){drawAxisLabels();}
insertLegend();}
function setRange(axis){var opts=axis.options,min=+(opts.min!=null?opts.min:axis.datamin),max=+(opts.max!=null?opts.max:axis.datamax),delta=max-min;if(delta==0.0){var widen=max==0?1:0.01;if(opts.min==null)
min-=widen;if(opts.max==null||opts.min!=null)
max+=widen;}
else{var margin=opts.autoscaleMargin;if(margin!=null){if(opts.min==null){min-=delta*margin;if(min<0&&axis.datamin!=null&&axis.datamin>=0)
min=0;}
if(opts.max==null){max+=delta*margin;if(max>0&&axis.datamax!=null&&axis.datamax<=0)
max=0;}}}
axis.min=min;axis.max=max;}
function setupTickGeneration(axis){var opts=axis.options;var noTicks;if(typeof opts.ticks=="number"&&opts.ticks>0)
noTicks=opts.ticks;else
noTicks=0.3*Math.sqrt(axis.direction=="x"?surface.width:surface.height);var delta=(axis.max-axis.min)/noTicks,dec=-Math.floor(Math.log(delta)/Math.LN10),maxDec=opts.tickDecimals;if(maxDec!=null&&dec>maxDec){dec=maxDec;}
var magn=Math.pow(10,-dec),norm=delta/magn,size;if(norm<1.5){size=1;}else if(norm<3){size=2;if(norm>2.25&&(maxDec==null||dec+1<=maxDec)){size=2.5;++dec;}}else if(norm<7.5){size=5;}else{size=10;}
size*=magn;if(opts.minTickSize!=null&&size<opts.minTickSize){size=opts.minTickSize;}
axis.delta=delta;axis.tickDecimals=Math.max(0,maxDec!=null?maxDec:dec);axis.tickSize=opts.tickSize||size;if(opts.mode=="time"&&!axis.tickGenerator){throw new Error("Time mode requires the flot.time plugin.");}
if(!axis.tickGenerator){axis.tickGenerator=function(axis){var ticks=[],start=floorInBase(axis.min,axis.tickSize),i=0,v=Number.NaN,prev;do{prev=v;v=start+i*axis.tickSize;ticks.push(v);++i;}while(v<axis.max&&v!=prev);return ticks;};axis.tickFormatter=function(value,axis){var factor=axis.tickDecimals?Math.pow(10,axis.tickDecimals):1;var formatted=""+Math.round(value*factor)/factor;if(axis.tickDecimals!=null){var decimal=formatted.indexOf(".");var precision=decimal==-1?0:formatted.length-decimal-1;if(precision<axis.tickDecimals){return(precision?formatted:formatted+".")+(""+factor).substr(1,axis.tickDecimals-precision);}}
return formatted;};}
if($.isFunction(opts.tickFormatter))
axis.tickFormatter=function(v,axis){return""+opts.tickFormatter(v,axis);};if(opts.alignTicksWithAxis!=null){var otherAxis=(axis.direction=="x"?xaxes:yaxes)[opts.alignTicksWithAxis-1];if(otherAxis&&otherAxis.used&&otherAxis!=axis){var niceTicks=axis.tickGenerator(axis);if(niceTicks.length>0){if(opts.min==null)
axis.min=Math.min(axis.min,niceTicks[0]);if(opts.max==null&&niceTicks.length>1)
axis.max=Math.max(axis.max,niceTicks[niceTicks.length-1]);}
axis.tickGenerator=function(axis){var ticks=[],v,i;for(i=0;i<otherAxis.ticks.length;++i){v=(otherAxis.ticks[i].v-otherAxis.min)/(otherAxis.max-otherAxis.min);v=axis.min+v*(axis.max-axis.min);ticks.push(v);}
return ticks;};if(!axis.mode&&opts.tickDecimals==null){var extraDec=Math.max(0,-Math.floor(Math.log(axis.delta)/Math.LN10)+1),ts=axis.tickGenerator(axis);if(!(ts.length>1&&/\..*0$/.test((ts[1]-ts[0]).toFixed(extraDec))))
axis.tickDecimals=extraDec;}}}}
function setTicks(axis){var oticks=axis.options.ticks,ticks=[];if(oticks==null||(typeof oticks=="number"&&oticks>0))
ticks=axis.tickGenerator(axis);else if(oticks){if($.isFunction(oticks))
ticks=oticks(axis);else
ticks=oticks;}
var i,v;axis.ticks=[];for(i=0;i<ticks.length;++i){var label=null;var t=ticks[i];if(typeof t=="object"){v=+t[0];if(t.length>1)
label=t[1];}
else
v=+t;if(label==null)
label=axis.tickFormatter(v,axis);if(!isNaN(v))
axis.ticks.push({v:v,label:label});}}
function snapRangeToTicks(axis,ticks){if(axis.options.autoscaleMargin&&ticks.length>0){if(axis.options.min==null)
axis.min=Math.min(axis.min,ticks[0].v);if(axis.options.max==null&&ticks.length>1)
axis.max=Math.max(axis.max,ticks[ticks.length-1].v);}}
function draw(){surface.clear();executeHooks(hooks.drawBackground,[ctx]);var grid=options.grid;if(grid.show&&grid.backgroundColor)
drawBackground();if(grid.show&&!grid.aboveData){drawGrid();}
for(var i=0;i<series.length;++i){executeHooks(hooks.drawSeries,[ctx,series[i]]);drawSeries(series[i]);}
executeHooks(hooks.draw,[ctx]);if(grid.show&&grid.aboveData){drawGrid();}
surface.render();triggerRedrawOverlay();}
function extractRange(ranges,coord){var axis,from,to,key,axes=allAxes();for(var i=0;i<axes.length;++i){axis=axes[i];if(axis.direction==coord){key=coord+axis.n+"axis";if(!ranges[key]&&axis.n==1)
key=coord+"axis";if(ranges[key]){from=ranges[key].from;to=ranges[key].to;break;}}}
if(!ranges[key]){axis=coord=="x"?xaxes[0]:yaxes[0];from=ranges[coord+"1"];to=ranges[coord+"2"];}
if(from!=null&&to!=null&&from>to){var tmp=from;from=to;to=tmp;}
return{from:from,to:to,axis:axis};}
function drawBackground(){ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.fillStyle=getColorOrGradient(options.grid.backgroundColor,plotHeight,0,"rgba(255, 255, 255, 0)");ctx.fillRect(0,0,plotWidth,plotHeight);ctx.restore();}
function drawGrid(){var i,axes,bw,bc;ctx.save();ctx.translate(plotOffset.left,plotOffset.top);var markings=options.grid.markings;if(markings){if($.isFunction(markings)){axes=plot.getAxes();axes.xmin=axes.xaxis.min;axes.xmax=axes.xaxis.max;axes.ymin=axes.yaxis.min;axes.ymax=axes.yaxis.max;markings=markings(axes);}
for(i=0;i<markings.length;++i){var m=markings[i],xrange=extractRange(m,"x"),yrange=extractRange(m,"y");if(xrange.from==null)
xrange.from=xrange.axis.min;if(xrange.to==null)
xrange.to=xrange.axis.max;if(yrange.from==null)
yrange.from=yrange.axis.min;if(yrange.to==null)
yrange.to=yrange.axis.max;if(xrange.to<xrange.axis.min||xrange.from>xrange.axis.max||yrange.to<yrange.axis.min||yrange.from>yrange.axis.max)
continue;xrange.from=Math.max(xrange.from,xrange.axis.min);xrange.to=Math.min(xrange.to,xrange.axis.max);yrange.from=Math.max(yrange.from,yrange.axis.min);yrange.to=Math.min(yrange.to,yrange.axis.max);if(xrange.from==xrange.to&&yrange.from==yrange.to)
continue;xrange.from=xrange.axis.p2c(xrange.from);xrange.to=xrange.axis.p2c(xrange.to);yrange.from=yrange.axis.p2c(yrange.from);yrange.to=yrange.axis.p2c(yrange.to);if(xrange.from==xrange.to||yrange.from==yrange.to){ctx.beginPath();ctx.strokeStyle=m.color||options.grid.markingsColor;ctx.lineWidth=m.lineWidth||options.grid.markingsLineWidth;ctx.moveTo(xrange.from,yrange.from);ctx.lineTo(xrange.to,yrange.to);ctx.stroke();}
else{ctx.fillStyle=m.color||options.grid.markingsColor;ctx.fillRect(xrange.from,yrange.to,xrange.to-xrange.from,yrange.from-yrange.to);}}}
axes=allAxes();bw=options.grid.borderWidth;for(var j=0;j<axes.length;++j){var axis=axes[j],box=axis.box,t=axis.tickLength,x,y,xoff,yoff;if(!axis.show||axis.ticks.length==0)
continue;ctx.lineWidth=1;if(axis.direction=="x"){x=0;if(t=="full")
y=(axis.position=="top"?0:plotHeight);else
y=box.top-plotOffset.top+(axis.position=="top"?box.height:0);}
else{y=0;if(t=="full")
x=(axis.position=="left"?0:plotWidth);else
x=box.left-plotOffset.left+(axis.position=="left"?box.width:0);}
if(!axis.innermost){ctx.strokeStyle=axis.options.color;ctx.beginPath();xoff=yoff=0;if(axis.direction=="x")
xoff=plotWidth+1;else
yoff=plotHeight+1;if(ctx.lineWidth==1){if(axis.direction=="x"){y=Math.floor(y)+0.5;}else{x=Math.floor(x)+0.5;}}
ctx.moveTo(x,y);ctx.lineTo(x+xoff,y+yoff);ctx.stroke();}
ctx.strokeStyle=axis.options.tickColor;ctx.beginPath();for(i=0;i<axis.ticks.length;++i){var v=axis.ticks[i].v;xoff=yoff=0;if(isNaN(v)||v<axis.min||v>axis.max||(t=="full"&&((typeof bw=="object"&&bw[axis.position]>0)||bw>0)&&(v==axis.min||v==axis.max)))
continue;if(axis.direction=="x"){x=axis.p2c(v);yoff=t=="full"?-plotHeight:t;if(axis.position=="top")
yoff=-yoff;}
else{y=axis.p2c(v);xoff=t=="full"?-plotWidth:t;if(axis.position=="left")
xoff=-xoff;}
if(ctx.lineWidth==1){if(axis.direction=="x")
x=Math.floor(x)+0.5;else
y=Math.floor(y)+0.5;}
ctx.moveTo(x,y);ctx.lineTo(x+xoff,y+yoff);}
ctx.stroke();}
if(bw){bc=options.grid.borderColor;if(typeof bw=="object"||typeof bc=="object"){if(typeof bw!=="object"){bw={top:bw,right:bw,bottom:bw,left:bw};}
if(typeof bc!=="object"){bc={top:bc,right:bc,bottom:bc,left:bc};}
if(bw.top>0){ctx.strokeStyle=bc.top;ctx.lineWidth=bw.top;ctx.beginPath();ctx.moveTo(0-bw.left,0-bw.top/2);ctx.lineTo(plotWidth,0-bw.top/2);ctx.stroke();}
if(bw.right>0){ctx.strokeStyle=bc.right;ctx.lineWidth=bw.right;ctx.beginPath();ctx.moveTo(plotWidth+bw.right/2,0-bw.top);ctx.lineTo(plotWidth+bw.right/2,plotHeight);ctx.stroke();}
if(bw.bottom>0){ctx.strokeStyle=bc.bottom;ctx.lineWidth=bw.bottom;ctx.beginPath();ctx.moveTo(plotWidth+bw.right,plotHeight+bw.bottom/2);ctx.lineTo(0,plotHeight+bw.bottom/2);ctx.stroke();}
if(bw.left>0){ctx.strokeStyle=bc.left;ctx.lineWidth=bw.left;ctx.beginPath();ctx.moveTo(0-bw.left/2,plotHeight+bw.bottom);ctx.lineTo(0-bw.left/2,0);ctx.stroke();}}
else{ctx.lineWidth=bw;ctx.strokeStyle=options.grid.borderColor;ctx.strokeRect(-bw/2,-bw/2,plotWidth+bw,plotHeight+bw);}}
ctx.restore();}
function drawAxisLabels(){$.each(allAxes(),function(_,axis){if(!axis.show||axis.ticks.length==0)
return;var box=axis.box,legacyStyles=axis.direction+"Axis "+axis.direction+axis.n+"Axis",layer="flot-"+axis.direction+"-axis flot-"+axis.direction+axis.n+"-axis "+legacyStyles,font=axis.options.font||"flot-tick-label tickLabel",tick,x,y,halign,valign;surface.removeText(layer);for(var i=0;i<axis.ticks.length;++i){tick=axis.ticks[i];if(!tick.label||tick.v<axis.min||tick.v>axis.max)
continue;if(axis.direction=="x"){halign="center";x=plotOffset.left+axis.p2c(tick.v);if(axis.position=="bottom"){y=box.top+box.padding;}else{y=box.top+box.height-box.padding;valign="bottom";}}else{valign="middle";y=plotOffset.top+axis.p2c(tick.v);if(axis.position=="left"){x=box.left+box.width-box.padding;halign="right";}else{x=box.left+box.padding;}}
surface.addText(layer,x,y,tick.label,font,null,null,halign,valign);}});}
function drawSeries(series){if(series.lines.show)
drawSeriesLines(series);if(series.bars.show)
drawSeriesBars(series);if(series.points.show)
drawSeriesPoints(series);}
function drawSeriesLines(series){function plotLine(datapoints,xoffset,yoffset,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize,prevx=null,prevy=null;ctx.beginPath();for(var i=ps;i<points.length;i+=ps){var x1=points[i-ps],y1=points[i-ps+1],x2=points[i],y2=points[i+1];if(x1==null||x2==null)
continue;if(y1<=y2&&y1<axisy.min){if(y2<axisy.min)
continue;x1=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.min;}
else if(y2<=y1&&y2<axisy.min){if(y1<axisy.min)
continue;x2=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.min;}
if(y1>=y2&&y1>axisy.max){if(y2>axisy.max)
continue;x1=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.max;}
else if(y2>=y1&&y2>axisy.max){if(y1>axisy.max)
continue;x2=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.max;}
if(x1<=x2&&x1<axisx.min){if(x2<axisx.min)
continue;y1=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.min;}
else if(x2<=x1&&x2<axisx.min){if(x1<axisx.min)
continue;y2=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.min;}
if(x1>=x2&&x1>axisx.max){if(x2>axisx.max)
continue;y1=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.max;}
else if(x2>=x1&&x2>axisx.max){if(x1>axisx.max)
continue;y2=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.max;}
if(x1!=prevx||y1!=prevy)
ctx.moveTo(axisx.p2c(x1)+xoffset,axisy.p2c(y1)+yoffset);prevx=x2;prevy=y2;ctx.lineTo(axisx.p2c(x2)+xoffset,axisy.p2c(y2)+yoffset);}
ctx.stroke();}
function plotLineArea(datapoints,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize,bottom=Math.min(Math.max(0,axisy.min),axisy.max),i=0,top,areaOpen=false,ypos=1,segmentStart=0,segmentEnd=0;while(true){if(ps>0&&i>points.length+ps)
break;i+=ps;var x1=points[i-ps],y1=points[i-ps+ypos],x2=points[i],y2=points[i+ypos];if(areaOpen){if(ps>0&&x1!=null&&x2==null){segmentEnd=i;ps=-ps;ypos=2;continue;}
if(ps<0&&i==segmentStart+ps){ctx.fill();areaOpen=false;ps=-ps;ypos=1;i=segmentStart=segmentEnd+ps;continue;}}
if(x1==null||x2==null)
continue;if(x1<=x2&&x1<axisx.min){if(x2<axisx.min)
continue;y1=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.min;}
else if(x2<=x1&&x2<axisx.min){if(x1<axisx.min)
continue;y2=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.min;}
if(x1>=x2&&x1>axisx.max){if(x2>axisx.max)
continue;y1=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.max;}
else if(x2>=x1&&x2>axisx.max){if(x1>axisx.max)
continue;y2=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.max;}
if(!areaOpen){ctx.beginPath();ctx.moveTo(axisx.p2c(x1),axisy.p2c(bottom));areaOpen=true;}
if(y1>=axisy.max&&y2>=axisy.max){ctx.lineTo(axisx.p2c(x1),axisy.p2c(axisy.max));ctx.lineTo(axisx.p2c(x2),axisy.p2c(axisy.max));continue;}
else if(y1<=axisy.min&&y2<=axisy.min){ctx.lineTo(axisx.p2c(x1),axisy.p2c(axisy.min));ctx.lineTo(axisx.p2c(x2),axisy.p2c(axisy.min));continue;}
var x1old=x1,x2old=x2;if(y1<=y2&&y1<axisy.min&&y2>=axisy.min){x1=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.min;}
else if(y2<=y1&&y2<axisy.min&&y1>=axisy.min){x2=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.min;}
if(y1>=y2&&y1>axisy.max&&y2<=axisy.max){x1=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.max;}
else if(y2>=y1&&y2>axisy.max&&y1<=axisy.max){x2=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.max;}
if(x1!=x1old){ctx.lineTo(axisx.p2c(x1old),axisy.p2c(y1));}
ctx.lineTo(axisx.p2c(x1),axisy.p2c(y1));ctx.lineTo(axisx.p2c(x2),axisy.p2c(y2));if(x2!=x2old){ctx.lineTo(axisx.p2c(x2),axisy.p2c(y2));ctx.lineTo(axisx.p2c(x2old),axisy.p2c(y2));}}}
ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.lineJoin="round";var lw=series.lines.lineWidth,sw=series.shadowSize;if(lw>0&&sw>0){ctx.lineWidth=sw;ctx.strokeStyle="rgba(0,0,0,0.1)";var angle=Math.PI/18;plotLine(series.datapoints,Math.sin(angle)*(lw/2+sw/2),Math.cos(angle)*(lw/2+sw/2),series.xaxis,series.yaxis);ctx.lineWidth=sw/2;plotLine(series.datapoints,Math.sin(angle)*(lw/2+sw/4),Math.cos(angle)*(lw/2+sw/4),series.xaxis,series.yaxis);}
ctx.lineWidth=lw;ctx.strokeStyle=series.color;var fillStyle=getFillStyle(series.lines,series.color,0,plotHeight);if(fillStyle){ctx.fillStyle=fillStyle;plotLineArea(series.datapoints,series.xaxis,series.yaxis);}
if(lw>0)
plotLine(series.datapoints,0,0,series.xaxis,series.yaxis);ctx.restore();}
function drawSeriesPoints(series){function plotPoints(datapoints,radius,fillStyle,offset,shadow,axisx,axisy,symbol){var points=datapoints.points,ps=datapoints.pointsize;for(var i=0;i<points.length;i+=ps){var x=points[i],y=points[i+1];if(x==null||x<axisx.min||x>axisx.max||y<axisy.min||y>axisy.max)
continue;ctx.beginPath();x=axisx.p2c(x);y=axisy.p2c(y)+offset;if(symbol=="circle")
ctx.arc(x,y,radius,0,shadow?Math.PI:Math.PI*2,false);else
symbol(ctx,x,y,radius,shadow);ctx.closePath();if(fillStyle){ctx.fillStyle=fillStyle;ctx.fill();}
ctx.stroke();}}
ctx.save();ctx.translate(plotOffset.left,plotOffset.top);var lw=series.points.lineWidth,sw=series.shadowSize,radius=series.points.radius,symbol=series.points.symbol;if(lw==0)
lw=0.0001;if(lw>0&&sw>0){var w=sw/2;ctx.lineWidth=w;ctx.strokeStyle="rgba(0,0,0,0.1)";plotPoints(series.datapoints,radius,null,w+w/2,true,series.xaxis,series.yaxis,symbol);ctx.strokeStyle="rgba(0,0,0,0.2)";plotPoints(series.datapoints,radius,null,w/2,true,series.xaxis,series.yaxis,symbol);}
ctx.lineWidth=lw;ctx.strokeStyle=series.color;plotPoints(series.datapoints,radius,getFillStyle(series.points,series.color),0,false,series.xaxis,series.yaxis,symbol);ctx.restore();}
function drawBar(x,y,b,barLeft,barRight,offset,fillStyleCallback,axisx,axisy,c,horizontal,lineWidth){var left,right,bottom,top,drawLeft,drawRight,drawTop,drawBottom,tmp;if(horizontal){drawBottom=drawRight=drawTop=true;drawLeft=false;left=b;right=x;top=y+barLeft;bottom=y+barRight;if(right<left){tmp=right;right=left;left=tmp;drawLeft=true;drawRight=false;}}
else{drawLeft=drawRight=drawTop=true;drawBottom=false;left=x+barLeft;right=x+barRight;bottom=b;top=y;if(top<bottom){tmp=top;top=bottom;bottom=tmp;drawBottom=true;drawTop=false;}}
if(right<axisx.min||left>axisx.max||top<axisy.min||bottom>axisy.max)
return;if(left<axisx.min){left=axisx.min;drawLeft=false;}
if(right>axisx.max){right=axisx.max;drawRight=false;}
if(bottom<axisy.min){bottom=axisy.min;drawBottom=false;}
if(top>axisy.max){top=axisy.max;drawTop=false;}
left=axisx.p2c(left);bottom=axisy.p2c(bottom);right=axisx.p2c(right);top=axisy.p2c(top);if(fillStyleCallback){c.beginPath();c.moveTo(left,bottom);c.lineTo(left,top);c.lineTo(right,top);c.lineTo(right,bottom);c.fillStyle=fillStyleCallback(bottom,top);c.fill();}
if(lineWidth>0&&(drawLeft||drawRight||drawTop||drawBottom)){c.beginPath();c.moveTo(left,bottom+offset);if(drawLeft)
c.lineTo(left,top+offset);else
c.moveTo(left,top+offset);if(drawTop)
c.lineTo(right,top+offset);else
c.moveTo(right,top+offset);if(drawRight)
c.lineTo(right,bottom+offset);else
c.moveTo(right,bottom+offset);if(drawBottom)
c.lineTo(left,bottom+offset);else
c.moveTo(left,bottom+offset);c.stroke();}}
function drawSeriesBars(series){function plotBars(datapoints,barLeft,barRight,offset,fillStyleCallback,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize;for(var i=0;i<points.length;i+=ps){if(points[i]==null)
continue;drawBar(points[i],points[i+1],points[i+2],barLeft,barRight,offset,fillStyleCallback,axisx,axisy,ctx,series.bars.horizontal,series.bars.lineWidth);}}
ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.lineWidth=series.bars.lineWidth;ctx.strokeStyle=series.color;var barLeft;switch(series.bars.align){case"left":barLeft=0;break;case"right":barLeft=-series.bars.barWidth;break;case"center":barLeft=-series.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+series.bars.align);}
var fillStyleCallback=series.bars.fill?function(bottom,top){return getFillStyle(series.bars,series.color,bottom,top);}:null;plotBars(series.datapoints,barLeft,barLeft+series.bars.barWidth,0,fillStyleCallback,series.xaxis,series.yaxis);ctx.restore();}
function getFillStyle(filloptions,seriesColor,bottom,top){var fill=filloptions.fill;if(!fill)
return null;if(filloptions.fillColor)
return getColorOrGradient(filloptions.fillColor,bottom,top,seriesColor);var c=$.color.parse(seriesColor);c.a=typeof fill=="number"?fill:0.4;c.normalize();return c.toString();}
function insertLegend(){placeholder.find(".legend").remove();if(!options.legend.show)
return;var fragments=[],entries=[],rowStarted=false,lf=options.legend.labelFormatter,s,label;for(var i=0;i<series.length;++i){s=series[i];if(s.label){label=lf?lf(s.label,s):s.label;if(label){entries.push({label:label,color:s.color});}}}
if(options.legend.sorted){if($.isFunction(options.legend.sorted)){entries.sort(options.legend.sorted);}else if(options.legend.sorted=="reverse"){entries.reverse();}else{var ascending=options.legend.sorted!="descending";entries.sort(function(a,b){return a.label==b.label?0:((a.label<b.label)!=ascending?1:-1);});}}
for(var i=0;i<entries.length;++i){var entry=entries[i];if(i%options.legend.noColumns==0){if(rowStarted)
fragments.push('</tr>');fragments.push('<tr>');rowStarted=true;}
fragments.push('<td class="legendColorBox"><div style="border:1px solid '+options.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+entry.color+';overflow:hidden"></div></div></td>'+'<td class="legendLabel">'+entry.label+'</td>');}
if(rowStarted)
fragments.push('</tr>');if(fragments.length==0)
return;var table='<table style="font-size:smaller;color:'+options.grid.color+'">'+fragments.join("")+'</table>';if(options.legend.container!=null)
$(options.legend.container).html(table);else{var pos="",p=options.legend.position,m=options.legend.margin;if(m[0]==null)
m=[m,m];if(p.charAt(0)=="n")
pos+='top:'+(m[1]+plotOffset.top)+'px;';else if(p.charAt(0)=="s")
pos+='bottom:'+(m[1]+plotOffset.bottom)+'px;';if(p.charAt(1)=="e")
pos+='right:'+(m[0]+plotOffset.right)+'px;';else if(p.charAt(1)=="w")
pos+='left:'+(m[0]+plotOffset.left)+'px;';var legend=$('<div class="legend">'+table.replace('style="','style="position:absolute;'+pos+';')+'</div>').appendTo(placeholder);if(options.legend.backgroundOpacity!=0.0){var c=options.legend.backgroundColor;if(c==null){c=options.grid.backgroundColor;if(c&&typeof c=="string")
c=$.color.parse(c);else
c=$.color.extract(legend,'background-color');c.a=1;c=c.toString();}
var div=legend.children();$('<div style="position:absolute;width:'+div.width()+'px;height:'+div.height()+'px;'+pos+'background-color:'+c+';"> </div>').prependTo(legend).css('opacity',options.legend.backgroundOpacity);}}}
var highlights=[],redrawTimeout=null;function findNearbyItem(mouseX,mouseY,seriesFilter){var maxDistance=options.grid.mouseActiveRadius,smallestDistance=maxDistance*maxDistance+1,item=null,foundPoint=false,i,j,ps;for(i=series.length-1;i>=0;--i){if(!seriesFilter(series[i]))
continue;var s=series[i],axisx=s.xaxis,axisy=s.yaxis,points=s.datapoints.points,mx=axisx.c2p(mouseX),my=axisy.c2p(mouseY),maxx=maxDistance/axisx.scale,maxy=maxDistance/axisy.scale;ps=s.datapoints.pointsize;if(axisx.options.inverseTransform)
maxx=Number.MAX_VALUE;if(axisy.options.inverseTransform)
maxy=Number.MAX_VALUE;if(s.lines.show||s.points.show){for(j=0;j<points.length;j+=ps){var x=points[j],y=points[j+1];if(x==null)
continue;if(x-mx>maxx||x-mx<-maxx||y-my>maxy||y-my<-maxy)
continue;var dx=Math.abs(axisx.p2c(x)-mouseX),dy=Math.abs(axisy.p2c(y)-mouseY),dist=dx*dx+dy*dy;if(dist<smallestDistance){smallestDistance=dist;item=[i,j/ps];}}}
if(s.bars.show&&!item){var barLeft=s.bars.align=="left"?0:-s.bars.barWidth/2,barRight=barLeft+s.bars.barWidth;for(j=0;j<points.length;j+=ps){var x=points[j],y=points[j+1],b=points[j+2];if(x==null)
continue;if(series[i].bars.horizontal?(mx<=Math.max(b,x)&&mx>=Math.min(b,x)&&my>=y+barLeft&&my<=y+barRight):(mx>=x+barLeft&&mx<=x+barRight&&my>=Math.min(b,y)&&my<=Math.max(b,y)))
item=[i,j/ps];}}}
if(item){i=item[0];j=item[1];ps=series[i].datapoints.pointsize;return{datapoint:series[i].datapoints.points.slice(j*ps,(j+1)*ps),dataIndex:j,series:series[i],seriesIndex:i};}
return null;}
function onMouseMove(e){if(options.grid.hoverable)
triggerClickHoverEvent("plothover",e,function(s){return s["hoverable"]!=false;});}
function onMouseLeave(e){if(options.grid.hoverable)
triggerClickHoverEvent("plothover",e,function(s){return false;});}
function onClick(e){triggerClickHoverEvent("plotclick",e,function(s){return s["clickable"]!=false;});}
function triggerClickHoverEvent(eventname,event,seriesFilter){var offset=eventHolder.offset(),canvasX=event.pageX-offset.left-plotOffset.left,canvasY=event.pageY-offset.top-plotOffset.top,pos=canvasToAxisCoords({left:canvasX,top:canvasY});pos.pageX=event.pageX;pos.pageY=event.pageY;var item=findNearbyItem(canvasX,canvasY,seriesFilter);if(item){item.pageX=parseInt(item.series.xaxis.p2c(item.datapoint[0])+offset.left+plotOffset.left,10);item.pageY=parseInt(item.series.yaxis.p2c(item.datapoint[1])+offset.top+plotOffset.top,10);}
if(options.grid.autoHighlight){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.auto==eventname&&!(item&&h.series==item.series&&h.point[0]==item.datapoint[0]&&h.point[1]==item.datapoint[1]))
unhighlight(h.series,h.point);}
if(item)
highlight(item.series,item.datapoint,eventname);}
placeholder.trigger(eventname,[pos,item]);}
function triggerRedrawOverlay(){var t=options.interaction.redrawOverlayInterval;if(t==-1){drawOverlay();return;}
if(!redrawTimeout)
redrawTimeout=setTimeout(drawOverlay,t);}
function drawOverlay(){redrawTimeout=null;octx.save();overlay.clear();octx.translate(plotOffset.left,plotOffset.top);var i,hi;for(i=0;i<highlights.length;++i){hi=highlights[i];if(hi.series.bars.show)
drawBarHighlight(hi.series,hi.point);else
drawPointHighlight(hi.series,hi.point);}
octx.restore();executeHooks(hooks.drawOverlay,[octx]);}
function highlight(s,point,auto){if(typeof s=="number")
s=series[s];if(typeof point=="number"){var ps=s.datapoints.pointsize;point=s.datapoints.points.slice(ps*point,ps*(point+1));}
var i=indexOfHighlight(s,point);if(i==-1){highlights.push({series:s,point:point,auto:auto});triggerRedrawOverlay();}
else if(!auto)
highlights[i].auto=false;}
function unhighlight(s,point){if(s==null&&point==null){highlights=[];triggerRedrawOverlay();return;}
if(typeof s=="number")
s=series[s];if(typeof point=="number"){var ps=s.datapoints.pointsize;point=s.datapoints.points.slice(ps*point,ps*(point+1));}
var i=indexOfHighlight(s,point);if(i!=-1){highlights.splice(i,1);triggerRedrawOverlay();}}
function indexOfHighlight(s,p){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.series==s&&h.point[0]==p[0]&&h.point[1]==p[1])
return i;}
return-1;}
function drawPointHighlight(series,point){var x=point[0],y=point[1],axisx=series.xaxis,axisy=series.yaxis,highlightColor=(typeof series.highlightColor==="string")?series.highlightColor:$.color.parse(series.color).scale('a',0.5).toString();if(x<axisx.min||x>axisx.max||y<axisy.min||y>axisy.max)
return;var pointRadius=series.points.radius+series.points.lineWidth/2;octx.lineWidth=pointRadius;octx.strokeStyle=highlightColor;var radius=1.5*pointRadius;x=axisx.p2c(x);y=axisy.p2c(y);octx.beginPath();if(series.points.symbol=="circle")
octx.arc(x,y,radius,0,2*Math.PI,false);else
series.points.symbol(octx,x,y,radius,false);octx.closePath();octx.stroke();}
function drawBarHighlight(series,point){var highlightColor=(typeof series.highlightColor==="string")?series.highlightColor:$.color.parse(series.color).scale('a',0.5).toString(),fillStyle=highlightColor,barLeft=series.bars.align=="left"?0:-series.bars.barWidth/2;octx.lineWidth=series.bars.lineWidth;octx.strokeStyle=highlightColor;drawBar(point[0],point[1],point[2]||0,barLeft,barLeft+series.bars.barWidth,0,function(){return fillStyle;},series.xaxis,series.yaxis,octx,series.bars.horizontal,series.bars.lineWidth);}
function getColorOrGradient(spec,bottom,top,defaultColor){if(typeof spec=="string")
return spec;else{var gradient=ctx.createLinearGradient(0,top,0,bottom);for(var i=0,l=spec.colors.length;i<l;++i){var c=spec.colors[i];if(typeof c!="string"){var co=$.color.parse(defaultColor);if(c.brightness!=null)
co=co.scale('rgb',c.brightness);if(c.opacity!=null)
co.a*=c.opacity;c=co.toString();}
gradient.addColorStop(i/(l-1),c);}
return gradient;}}}
$.plot=function(placeholder,data,options){var plot=new Plot($(placeholder),data,options,$.plot.plugins);return plot;};$.plot.version="0.8.2-alpha";$.plot.plugins=[];$.fn.plot=function(data,options){return this.each(function(){$.plot(this,data,options);});};function floorInBase(n,base){return base*Math.floor(n/base);}})(jQuery);

(function($){var defaultOptions={tooltip:false,tooltipOpts:{content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,shifts:{x:10,y:20},defaultTheme:true,onHover:function(flotItem,$tooltipEl){}}};var FlotTooltip=function(plot){this.tipPosition={x:0,y:0};this.init(plot);};FlotTooltip.prototype.init=function(plot){var that=this;plot.hooks.bindEvents.push(function(plot,eventHolder){that.plotOptions=plot.getOptions();if(that.plotOptions.tooltip===false||typeof that.plotOptions.tooltip==='undefined')return;that.tooltipOptions=that.plotOptions.tooltipOpts;var $tip=that.getDomElement();$(plot.getPlaceholder()).bind("plothover",function(event,pos,item){if(item){var tipText;tipText=that.stringFormat(that.tooltipOptions.content,item);$tip.html(tipText);that.updateTooltipPosition({x:pos.pageX,y:pos.pageY});$tip.css({left:that.tipPosition.x+that.tooltipOptions.shifts.x,top:that.tipPosition.y+that.tooltipOptions.shifts.y}).show();if(typeof that.tooltipOptions.onHover==='function'){that.tooltipOptions.onHover(item,$tip);}}
else{$tip.hide().html('');}});eventHolder.mousemove(function(e){var pos={};pos.x=e.pageX;pos.y=e.pageY;that.updateTooltipPosition(pos);});});};FlotTooltip.prototype.getDomElement=function(){var $tip;if($('#flotTip').length>0){$tip=$('#flotTip');}
else{$tip=$('<div />').attr('id','flotTip');$tip.appendTo('body').hide().css({position:'absolute'});if(this.tooltipOptions.defaultTheme){$tip.css({'background':'#fff','z-index':'100','padding':'0.4em 0.6em','border-radius':'0.5em','font-size':'0.8em','border':'1px solid #111','display':'inline-block','white-space':'nowrap'});}}
return $tip;};FlotTooltip.prototype.updateTooltipPosition=function(pos){var totalTipWidth=$("#flotTip").outerWidth()+this.tooltipOptions.shifts.x;var totalTipHeight=$("#flotTip").outerHeight()+this.tooltipOptions.shifts.y;if((pos.x-$(window).scrollLeft())>($(window).innerWidth()-totalTipWidth)){pos.x-=totalTipWidth;}
if((pos.y-$(window).scrollTop())>($(window).innerHeight()-totalTipHeight)){pos.y-=totalTipHeight;}
this.tipPosition.x=pos.x;this.tipPosition.y=pos.y;};FlotTooltip.prototype.stringFormat=function(content,item){var percentPattern=/%p\.{0,1}(\d{0,})/;var seriesPattern=/%s/;var xPattern=/%x\.{0,1}(\d{0,})/;var yPattern=/%y\.{0,1}(\d{0,})/;if(typeof(content)==='function'){content=content(item.series.data[item.dataIndex][0],item.series.data[item.dataIndex][1]);}
if(typeof(item.series.percent)!=='undefined'){content=this.adjustValPrecision(percentPattern,content,item.series.percent);}
if(typeof(item.series.label)!=='undefined'){content=content.replace(seriesPattern,item.series.label);}
if(this.isTimeMode('xaxis',item)&&this.isXDateFormat(item)){content=content.replace(xPattern,this.timestampToDate(item.series.data[item.dataIndex][0],this.tooltipOptions.xDateFormat));}
if(this.isTimeMode('yaxis',item)&&this.isYDateFormat(item)){content=content.replace(yPattern,this.timestampToDate(item.series.data[item.dataIndex][1],this.tooltipOptions.yDateFormat));}
if(typeof item.series.data[item.dataIndex][0]==='number'){content=this.adjustValPrecision(xPattern,content,item.series.data[item.dataIndex][0]);}
if(typeof item.series.data[item.dataIndex][1]==='number'){content=this.adjustValPrecision(yPattern,content,item.series.data[item.dataIndex][1]);}
if(typeof item.series.xaxis.tickFormatter!=='undefined'){content=content.replace(xPattern,item.series.xaxis.tickFormatter(item.series.data[item.dataIndex][0],item.series.xaxis));}
if(typeof item.series.yaxis.tickFormatter!=='undefined'){content=content.replace(yPattern,item.series.yaxis.tickFormatter(item.series.data[item.dataIndex][1],item.series.yaxis));}
return content;};FlotTooltip.prototype.isTimeMode=function(axisName,item){return(typeof item.series[axisName].options.mode!=='undefined'&&item.series[axisName].options.mode==='time');};FlotTooltip.prototype.isXDateFormat=function(item){return(typeof this.tooltipOptions.xDateFormat!=='undefined'&&this.tooltipOptions.xDateFormat!==null);};FlotTooltip.prototype.isYDateFormat=function(item){return(typeof this.tooltipOptions.yDateFormat!=='undefined'&&this.tooltipOptions.yDateFormat!==null);};FlotTooltip.prototype.timestampToDate=function(tmst,dateFormat){var theDate=new Date(tmst);return $.plot.formatDate(theDate,dateFormat);};FlotTooltip.prototype.adjustValPrecision=function(pattern,content,value){var precision;if(content.match(pattern)!==null){if(RegExp.$1!==''){precision=RegExp.$1;value=value.toFixed(precision);content=content.replace(pattern,value);}}
return content;};var init=function(plot){new FlotTooltip(plot);};$.plot.plugins.push({init:init,options:defaultOptions,name:'tooltip',version:'0.6.1'});})(jQuery);

(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);(function($){var options={};function init(plot){function onResize(){var placeholder=plot.getPlaceholder();if(placeholder.width()==0||placeholder.height()==0)
return;plot.resize();plot.setupGrid();plot.draw();}
function bindEvents(plot,eventHolder){plot.getPlaceholder().resize(onResize);}
function shutdown(plot,eventHolder){plot.getPlaceholder().unbind("resize",onResize);}
plot.hooks.bindEvents.push(bindEvents);plot.hooks.shutdown.push(shutdown);}
$.plot.plugins.push({init:init,options:options,name:'resize',version:'1.0'});})(jQuery);

(function($){var REDRAW_ATTEMPTS=10;var REDRAW_SHRINK=0.95;function init(plot){var canvas=null,target=null,maxRadius=null,centerLeft=null,centerTop=null,processed=false,ctx=null;var highlights=[];plot.hooks.processOptions.push(function(plot,options){if(options.series.pie.show){options.grid.show=false;if(options.series.pie.label.show=="auto"){if(options.legend.show){options.series.pie.label.show=false;}else{options.series.pie.label.show=true;}}
if(options.series.pie.radius=="auto"){if(options.series.pie.label.show){options.series.pie.radius=3/4;}else{options.series.pie.radius=1;}}
if(options.series.pie.tilt>1){options.series.pie.tilt=1;}else if(options.series.pie.tilt<0){options.series.pie.tilt=0;}}});plot.hooks.bindEvents.push(function(plot,eventHolder){var options=plot.getOptions();if(options.series.pie.show){if(options.grid.hoverable){eventHolder.unbind("mousemove").mousemove(onMouseMove);}
if(options.grid.clickable){eventHolder.unbind("click").click(onClick);}}});plot.hooks.processDatapoints.push(function(plot,series,data,datapoints){var options=plot.getOptions();if(options.series.pie.show){processDatapoints(plot,series,data,datapoints);}});plot.hooks.drawOverlay.push(function(plot,octx){var options=plot.getOptions();if(options.series.pie.show){drawOverlay(plot,octx);}});plot.hooks.draw.push(function(plot,newCtx){var options=plot.getOptions();if(options.series.pie.show){draw(plot,newCtx);}});function processDatapoints(plot,series,datapoints){if(!processed){processed=true;canvas=plot.getCanvas();target=$(canvas).parent();options=plot.getOptions();plot.setData(combine(plot.getData()));}}
function combine(data){var total=0,combined=0,numCombined=0,color=options.series.pie.combine.color,newdata=[];for(var i=0;i<data.length;++i){var value=data[i].data;if($.isArray(value)&&value.length==1){value=value[0];}
if($.isArray(value)){if(!isNaN(parseFloat(value[1]))&&isFinite(value[1])){value[1]=+value[1];}else{value[1]=0;}}else if(!isNaN(parseFloat(value))&&isFinite(value)){value=[1,+value];}else{value=[1,0];}
data[i].data=[value];}
for(var i=0;i<data.length;++i){total+=data[i].data[0][1];}
for(var i=0;i<data.length;++i){var value=data[i].data[0][1];if(value/total<=options.series.pie.combine.threshold){combined+=value;numCombined++;if(!color){color=data[i].color;}}}
for(var i=0;i<data.length;++i){var value=data[i].data[0][1];if(numCombined<2||value/total>options.series.pie.combine.threshold){newdata.push({data:[[1,value]],color:data[i].color,label:data[i].label,angle:value*Math.PI*2/total,percent:value/(total/100)});}}
if(numCombined>1){newdata.push({data:[[1,combined]],color:color,label:options.series.pie.combine.label,angle:combined*Math.PI*2/total,percent:combined/(total/100)});}
return newdata;}
function draw(plot,newCtx){if(!target){return;}
var canvasWidth=plot.getPlaceholder().width(),canvasHeight=plot.getPlaceholder().height(),legendWidth=target.children().filter(".legend").children().width()||0;ctx=newCtx;processed=false;maxRadius=Math.min(canvasWidth,canvasHeight/options.series.pie.tilt)/2;centerTop=canvasHeight/2+options.series.pie.offset.top;centerLeft=canvasWidth/2;if(options.series.pie.offset.left=="auto"){if(options.legend.position.match("w")){centerLeft+=legendWidth/2;}else{centerLeft-=legendWidth/2;}}else{centerLeft+=options.series.pie.offset.left;}
if(centerLeft<maxRadius){centerLeft=maxRadius;}else if(centerLeft>canvasWidth-maxRadius){centerLeft=canvasWidth-maxRadius;}
var slices=plot.getData(),attempts=0;do{if(attempts>0){maxRadius*=REDRAW_SHRINK;}
attempts+=1;clear();if(options.series.pie.tilt<=0.8){drawShadow();}}while(!drawPie()&&attempts<REDRAW_ATTEMPTS)
if(attempts>=REDRAW_ATTEMPTS){clear();target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");}
if(plot.setSeries&&plot.insertLegend){plot.setSeries(slices);plot.insertLegend();}
function clear(){ctx.clearRect(0,0,canvasWidth,canvasHeight);target.children().filter(".pieLabel, .pieLabelBackground").remove();}
function drawShadow(){var shadowLeft=options.series.pie.shadow.left;var shadowTop=options.series.pie.shadow.top;var edge=10;var alpha=options.series.pie.shadow.alpha;var radius=options.series.pie.radius>1?options.series.pie.radius:maxRadius*options.series.pie.radius;if(radius>=canvasWidth/2-shadowLeft||radius*options.series.pie.tilt>=canvasHeight/2-shadowTop||radius<=edge){return;}
ctx.save();ctx.translate(shadowLeft,shadowTop);ctx.globalAlpha=alpha;ctx.fillStyle="#000";ctx.translate(centerLeft,centerTop);ctx.scale(1,options.series.pie.tilt);for(var i=1;i<=edge;i++){ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2,false);ctx.fill();radius-=i;}
ctx.restore();}
function drawPie(){var startAngle=Math.PI*options.series.pie.startAngle;var radius=options.series.pie.radius>1?options.series.pie.radius:maxRadius*options.series.pie.radius;ctx.save();ctx.translate(centerLeft,centerTop);ctx.scale(1,options.series.pie.tilt);ctx.save();var currentAngle=startAngle;for(var i=0;i<slices.length;++i){slices[i].startAngle=currentAngle;drawSlice(slices[i].angle,slices[i].color,true);}
ctx.restore();if(options.series.pie.stroke.width>0){ctx.save();ctx.lineWidth=options.series.pie.stroke.width;currentAngle=startAngle;for(var i=0;i<slices.length;++i){drawSlice(slices[i].angle,options.series.pie.stroke.color,false);}
ctx.restore();}
drawDonutHole(ctx);ctx.restore();if(options.series.pie.label.show){return drawLabels();}else return true;function drawSlice(angle,color,fill){if(angle<=0||isNaN(angle)){return;}
if(fill){ctx.fillStyle=color;}else{ctx.strokeStyle=color;ctx.lineJoin="round";}
ctx.beginPath();if(Math.abs(angle-Math.PI*2)>0.000000001){ctx.moveTo(0,0);}
ctx.arc(0,0,radius,currentAngle,currentAngle+angle/2,false);ctx.arc(0,0,radius,currentAngle+angle/2,currentAngle+angle,false);ctx.closePath();currentAngle+=angle;if(fill){ctx.fill();}else{ctx.stroke();}}
function drawLabels(){var currentAngle=startAngle;var radius=options.series.pie.label.radius>1?options.series.pie.label.radius:maxRadius*options.series.pie.label.radius;for(var i=0;i<slices.length;++i){if(slices[i].percent>=options.series.pie.label.threshold*100){if(!drawLabel(slices[i],currentAngle,i)){return false;}}
currentAngle+=slices[i].angle;}
return true;function drawLabel(slice,startAngle,index){if(slice.data[0][1]==0){return true;}
var lf=options.legend.labelFormatter,text,plf=options.series.pie.label.formatter;if(lf){text=lf(slice.label,slice);}else{text=slice.label;}
if(plf){text=plf(text,slice);}
var halfAngle=((startAngle+slice.angle)+startAngle)/2;var x=centerLeft+Math.round(Math.cos(halfAngle)*radius);var y=centerTop+Math.round(Math.sin(halfAngle)*radius)*options.series.pie.tilt;var html="<span class='pieLabel' id='pieLabel"+index+"' style='position:absolute;top:"+y+"px;left:"+x+"px;'>"+text+"</span>";target.append(html);var label=target.children("#pieLabel"+index);var labelTop=(y-label.height()/2);var labelLeft=(x-label.width()/2);label.css("top",labelTop);label.css("left",labelLeft);if(0-labelTop>0||0-labelLeft>0||canvasHeight-(labelTop+label.height())<0||canvasWidth-(labelLeft+label.width())<0){return false;}
if(options.series.pie.label.background.opacity!=0){var c=options.series.pie.label.background.color;if(c==null){c=slice.color;}
var pos="top:"+labelTop+"px;left:"+labelLeft+"px;";$("<div class='pieLabelBackground' style='position:absolute;width:"+label.width()+"px;height:"+label.height()+"px;"+pos+"background-color:"+c+";'></div>").css("opacity",options.series.pie.label.background.opacity).insertBefore(label);}
return true;}}}}
function drawDonutHole(layer){if(options.series.pie.innerRadius>0){layer.save();var innerRadius=options.series.pie.innerRadius>1?options.series.pie.innerRadius:maxRadius*options.series.pie.innerRadius;layer.globalCompositeOperation="destination-out";layer.beginPath();layer.fillStyle=options.series.pie.stroke.color;layer.arc(0,0,innerRadius,0,Math.PI*2,false);layer.fill();layer.closePath();layer.restore();layer.save();layer.beginPath();layer.strokeStyle=options.series.pie.stroke.color;layer.arc(0,0,innerRadius,0,Math.PI*2,false);layer.stroke();layer.closePath();layer.restore();}}
function isPointInPoly(poly,pt){for(var c=false,i=-1,l=poly.length,j=l-1;++i<l;j=i)
((poly[i][1]<=pt[1]&&pt[1]<poly[j][1])||(poly[j][1]<=pt[1]&&pt[1]<poly[i][1]))&&(pt[0]<(poly[j][0]-poly[i][0])*(pt[1]-poly[i][1])/(poly[j][1]-poly[i][1])+poly[i][0])&&(c=!c);return c;}
function findNearbySlice(mouseX,mouseY){var slices=plot.getData(),options=plot.getOptions(),radius=options.series.pie.radius>1?options.series.pie.radius:maxRadius*options.series.pie.radius,x,y;for(var i=0;i<slices.length;++i){var s=slices[i];if(s.pie.show){ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,radius,s.startAngle,s.startAngle+s.angle/2,false);ctx.arc(0,0,radius,s.startAngle+s.angle/2,s.startAngle+s.angle,false);ctx.closePath();x=mouseX-centerLeft;y=mouseY-centerTop;if(ctx.isPointInPath){if(ctx.isPointInPath(mouseX-centerLeft,mouseY-centerTop)){ctx.restore();return{datapoint:[s.percent,s.data],dataIndex:0,series:s,seriesIndex:i};}}else{var p1X=radius*Math.cos(s.startAngle),p1Y=radius*Math.sin(s.startAngle),p2X=radius*Math.cos(s.startAngle+s.angle/4),p2Y=radius*Math.sin(s.startAngle+s.angle/4),p3X=radius*Math.cos(s.startAngle+s.angle/2),p3Y=radius*Math.sin(s.startAngle+s.angle/2),p4X=radius*Math.cos(s.startAngle+s.angle/1.5),p4Y=radius*Math.sin(s.startAngle+s.angle/1.5),p5X=radius*Math.cos(s.startAngle+s.angle),p5Y=radius*Math.sin(s.startAngle+s.angle),arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]],arrPoint=[x,y];if(isPointInPoly(arrPoly,arrPoint)){ctx.restore();return{datapoint:[s.percent,s.data],dataIndex:0,series:s,seriesIndex:i};}}
ctx.restore();}}
return null;}
function onMouseMove(e){triggerClickHoverEvent("plothover",e);}
function onClick(e){triggerClickHoverEvent("plotclick",e);}
function triggerClickHoverEvent(eventname,e){var offset=plot.offset();var canvasX=parseInt(e.pageX-offset.left);var canvasY=parseInt(e.pageY-offset.top);var item=findNearbySlice(canvasX,canvasY);if(options.grid.autoHighlight){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.auto==eventname&&!(item&&h.series==item.series)){unhighlight(h.series);}}}
if(item){highlight(item.series,eventname);}
var pos={pageX:e.pageX,pageY:e.pageY};target.trigger(eventname,[pos,item]);}
function highlight(s,auto){var i=indexOfHighlight(s);if(i==-1){highlights.push({series:s,auto:auto});plot.triggerRedrawOverlay();}else if(!auto){highlights[i].auto=false;}}
function unhighlight(s){if(s==null){highlights=[];plot.triggerRedrawOverlay();}
var i=indexOfHighlight(s);if(i!=-1){highlights.splice(i,1);plot.triggerRedrawOverlay();}}
function indexOfHighlight(s){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.series==s)
return i;}
return-1;}
function drawOverlay(plot,octx){var options=plot.getOptions();var radius=options.series.pie.radius>1?options.series.pie.radius:maxRadius*options.series.pie.radius;octx.save();octx.translate(centerLeft,centerTop);octx.scale(1,options.series.pie.tilt);for(var i=0;i<highlights.length;++i){drawHighlight(highlights[i].series);}
drawDonutHole(octx);octx.restore();function drawHighlight(series){if(series.angle<=0||isNaN(series.angle)){return;}
octx.fillStyle="rgba(255, 255, 255, "+options.series.pie.highlight.opacity+")";octx.beginPath();if(Math.abs(series.angle-Math.PI*2)>0.000000001){octx.moveTo(0,0);}
octx.arc(0,0,radius,series.startAngle,series.startAngle+series.angle/2,false);octx.arc(0,0,radius,series.startAngle+series.angle/2,series.startAngle+series.angle,false);octx.closePath();octx.fill();}}}
var options={series:{pie:{show:false,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,shadow:{left:5,top:15,alpha:0.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(label,slice){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+slice.color+";'>"+label+"<br/>"+Math.round(slice.percent)+"%</div>";},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:0.5}}}};$.plot.plugins.push({init:init,options:options,name:"pie",version:"1.1"});})(jQuery);

+function($){"use strict";var ChartUtils=function(){}
ChartUtils.prototype.defaultValueColor='#b8b8b8';ChartUtils.prototype.getColor=function(index){var
colors=['#95b753','#cc3300','#e5a91a','#3366ff','#ff0f00','#ff6600','#ff9e01','#fcd202','#f8ff01','#b0de09','#04d215','#0d8ecf','#0d52d1','#2a0cd0','#8a0ccf','#cd0d74','#754deb','#dddddd','#999999','#333333','#000000','#57032a','#ca9726','#990000','#4b0c25'],colorIndex=index%(colors.length-1);return colors[colorIndex];}
ChartUtils.prototype.loadListValues=function($list){var result={values:[],labels:[],tooltips:[],colors:[],total:0,max:0}
$('> li',$list).each(function(index){var value=parseFloat($('span',this).text()),html=$(this).html(),pos=html.indexOf('<span>'),label=$.trim(html.substring(0,pos)),tooltip=$(this).data('tooltip'),color=$(this).data('color')
result.total+=value
result.values.push([index,value])
result.labels.push([index,label])
result.tooltips.push(tooltip)
result.max=Math.max(result.max,value)
result.colors.push(color)})
return result;}
ChartUtils.prototype.getLegendLabel=function($legend,index){return $('tr:eq('+index+') td:eq(1)',$legend).html();}
ChartUtils.prototype.initLegendColorIndicators=function($legend){var indicators=[];$('tr > td:first-child',$legend).each(function(){var indicator=$('<i></i>')
$(this).prepend(indicator)
indicators.push(indicator)})
return indicators;}
ChartUtils.prototype.createLegend=function($list){var
$legend=$('<div>').addClass('chart-legend'),$table=$('<table>')
$legend.append($table)
$('> li',$list).each(function(){var label=$(this).clone().children().remove().end().html();$table.append($('<tr>').append($('<td class="indicator">')).append($('<td>').html(label)).append($('<td>').addClass('value').html($('span',this).html())))})
$legend.insertAfter($list)
$list.remove()
return $legend;}
ChartUtils.prototype.showTooltip=function(x,y,text){var $tooltip=$('#chart-tooltip')
if($tooltip.length)
$tooltip.remove()
$tooltip=$('<div id="chart-tooltip">').html(text).css('visibility','hidden')
x+=10
y+=10
$(document.body).append($tooltip)
var tooltipWidth=$tooltip.outerWidth()
if((x+tooltipWidth)>$(window).width())
x=$(window).width()-tooltipWidth-10;$tooltip.css({top:y,left:x,visibility:'visible'});}
ChartUtils.prototype.formatNumber=function(n,c,d,t){var c=isNaN(c=Math.abs(c))?2:c,d=d==undefined?".":d,t=t==undefined?",":t,s=n<0?"-":"",i=parseInt(n=Math.abs(+n||0).toFixed(c))+"",j=(j=i.length)>3?j%3:0;return s+(j?i.substr(0,j)+t:"")+i.substr(j).replace(/(\d{3})(?=\d)/g,"$1"+t)+(c?d+Math.abs(n-i).toFixed(c).slice(2):"");}
ChartUtils.prototype.formatDollar=function(value){return'$'+this.formatNumber(value,2,'.',',');}
ChartUtils.prototype.hideTooltip=function(){$('#chart-tooltip').remove()}
if($.oc===undefined)
$.oc={}
$.oc.chartUtils=new ChartUtils();}(window.jQuery);

+function($){"use strict";var BarChart=function(element,options){this.options=options||{};var
$el=this.$el=$(element),size=this.size=$el.height(),total=0,self=this,values=$.oc.chartUtils.loadListValues($('ul',$el)),isFullWidth=this.isFullWidth(),chartHeight=this.options.height!==undefined?this.options.height:size,chartWidth=(isFullWidth?this.$el.width():size)-40,barWidth=(chartWidth-(values.values.length-1)*this.options.gap)/values.values.length,displayAsCurrency=this.options.currency
var $canvas=$('<div/>').addClass('canvas').height(chartHeight).width(isFullWidth?'100%':chartWidth)
$el.prepend($canvas)
$el.toggleClass('full-width',isFullWidth)
var labelWidth=10
if(values.labels.length>0)
labelWidth=values.labels[0][1].length*10
var $plot=$.plot($canvas,this.dataToSeries(values.values,values.labels),{xaxis:{ticks:function(){var result=[];var tickNumber=chartWidth/labelWidth,tickFreq=Math.round(values.labels.length/tickNumber);$.each(values.labels,function(index){if((index%tickFreq)==0)
result.push(this)})
return result},tickLength:0,color:'#bdc3c7',tickColor:'#bdc3c7'},yaxis:{ticks:3,color:'#bdc3c7',tickColor:'#bdc3c7',min:0},grid:{borderWidth:0,hoverable:true},series:{zero:false,points:{show:true,symbol:"circle",fill:true,fillColor:'#25ba9b',lineWidth:0,radius:2},shadowSize:0},highlightColor:'#1e947b',tooltip:true,tooltipOpts:{defaultTheme:false,content:function(label,xval,yval,flotItem){var value=self.formatValue(values.values[label][1])
if(values.tooltips[label]!==undefined)
return values.tooltips[label].replace('{value}',value)
return values.labels[label][1]+': <strong>'+value+'</strong>'},shifts:{x:-30,y:-30}}});if(isFullWidth){$(window).on('resize',function(){$plot.setupGrid()})}}
BarChart.prototype.formatValue=function(value){if(this.options.format=='currency')
return $.oc.chartUtils.formatDollar(value)
if(this.options.format=='integer')
return $.oc.chartUtils.formatNumber(value,0,'.',',')
if(this.options.format=='percent')
return $.oc.chartUtils.formatNumber(value,2,'.',',')+'%'
return value}
BarChart.prototype.isFullWidth=function(){return this.options.fullWidth!==undefined&&this.options.fullWidth}
BarChart.prototype.dataToSeries=function(values,labels){var result=[]
$.each(values,function(){result.push({data:[this],bars:{show:true,align:'center',lineWidth:0,barWidth:0.5,fillColor:'#25ba9b'}})})
return result}
BarChart.DEFAULTS={format:'currency'}
var old=$.fn.barChart
$.fn.barChart=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.barChart')
var options=$.extend({},BarChart.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data){$this.data('oc.barChart',(data=new BarChart(this,options)))}})}
$.fn.barChart.Constructor=BarChart
$.fn.barChart.noConflict=function(){$.fn.barChart=old
return this}
$(document).on('ready',function(){$('[data-control=bar-chart]').barChart()})}(window.jQuery);

+function($){"use strict";var PieChart=function(element,options){this.options=options||{};var
$el=this.$el=$(element),size=this.size=$el.height(),chartHeight=this.options.height!==undefined?this.options.height:size,self=this,values=$.oc.chartUtils.loadListValues($('ul',$el))
var $canvas=$('<div/>').addClass('canvas').height(chartHeight).width(chartHeight)
$el.prepend($canvas)
var $plot=$.plot($canvas,this.dataToSeries(values.values,values.labels,values.colors),{series:{pie:{innerRadius:0.7,show:true,label:{show:false},stroke:{width:0},startAngle:1.3}},legend:{show:false},tooltip:true,tooltipOpts:{defaultTheme:false,content:function(label,xval,yval,flotItem){var value=self.formatValue(values.values[label][1])
if(values.tooltips[label]!==undefined)
return values.tooltips[label].replace('{value}',value)
return values.labels[label][1]+': <strong>'+value+'</strong>'},shifts:{x:-30,y:-30}}});}
PieChart.prototype.formatValue=function(value){if(this.options.format=='currency')
return $.oc.chartUtils.formatDollar(value)
if(this.options.format=='integer')
return $.oc.chartUtils.formatNumber(value,0,'.',',')
if(this.options.format=='percent')
return $.oc.chartUtils.formatNumber(value,2,'.',',')+'%'
return value}
PieChart.prototype.isFullWidth=function(){return this.options.fullWidth!==undefined&&this.options.fullWidth}
PieChart.prototype.dataToSeries=function(values,labels,colors){var result=[]
$.each(values,function(index){result.push({data:this[1],label:labels[index][1],color:colors[index]})})
return result}
PieChart.DEFAULTS={format:'currency'}
var old=$.fn.pieChart
$.fn.pieChart=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.pieChart')
var options=$.extend({},PieChart.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data){$this.data('oc.pieChart',(data=new PieChart(this,options)))}})}
$.fn.pieChart.Constructor=PieChart
$.fn.pieChart.noConflict=function(){$.fn.pieChart=old
return this}
$(document).on('ready',function(){$('[data-control=pie-chart]').pieChart()})}(window.jQuery);

+function($){"use strict";var IconControl=function(element,options){this.options=options
this.$container=$(element)
this.$el=$('.content',element)
this.$img=$('img',element)
this.$input=$('input[type=file]',element)
this.$el.click($.proxy(this.onClick,this))
this.$input.change($.proxy(this.handleFile,this))}
IconControl.prototype.onClick=function(){this.$input.click()
return false}
IconControl.prototype.handleFile=function(){var input=this.$input.get(0),self=this,fileName=input.value,valid=false;for(var j=0;j<this.options.extensions.length;j++){var extension=this.options.extensions[j]
if(fileName.substr(fileName.length-extension.length,extension.length).toLowerCase()==extension.toLowerCase()){valid=true
break}}
if(!valid){alert("The file is invalid, allowed extensions are: "+this.options.extensions.join(", ")+".")
return}
if(input.files&&input.files[0]){var reader=new FileReader();reader.onload=function(e){self.$img.attr('src',e.target.result);self.$container.addClass('has-icon')}
reader.readAsDataURL(input.files[0]);}}
IconControl.DEFAULTS={extensions:['.jpg','.jpeg','.bmp','.gif','.png']}
var old=$.fn.iconControl
$.fn.iconControl=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.iconControl')
var options=$.extend({},IconControl.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.iconControl',(data=new IconControl(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.iconControl.Constructor=IconControl
$.fn.iconControl.noConflict=function(){$.fn.iconControl=old
return this}
$(document).ready(function(){$('[data-control=icon-control]').iconControl()})}(window.jQuery);

+function($){"use strict";var IconUploadControl=function(element,options){this.options=options
this.$container=$(element)
this.$el=$('.content',element)
this.$imageHolder=$('div.img',this.$el)
this.$container.on('click','button.close',$.proxy(this.deleteImage,this))
this.$container.append('<div class="loading">')
this.dropzone=new Dropzone(this.$container.get(0),{url:window.location,clickable:this.$el.get(0),acceptedFiles:this.options.extensions,paramName:this.options.paramName})
var self=this
this.dropzone.on("error",function(file,error){alert(error)
self.stop()})
this.dropzone.on("sending",function(file,xhr,formData){self.start()})
this.dropzone.on("success",function(file,error){self.updateIcon()})}
IconUploadControl.prototype.updateIcon=function(){var updateList={}
updateList[this.options.updatePartial]=this.$el
var request=$('form',this.$container).request('onUpdateIconImage',{'update':updateList}),self=this
request.success(function(){self.stop()})}
IconUploadControl.prototype.start=function(){this.$container.addClass('loading')}
IconUploadControl.prototype.stop=function(){this.$container.removeClass('loading')}
IconUploadControl.prototype.deleteImage=function(ev){ev.stopPropagation()
ev.preventDefault()
var updateList={}
updateList[this.options.updatePartial]=this.$el
var data={paramName:this.options.paramName},self=this
$('form',this.$container).request('onDeleteImage',{'update':updateList,data:data}).done(function(){self.$container.removeClass('has-icon')})}
IconUploadControl.DEFAULTS={extensions:'.gif,.jpg,.jpeg,.png,.gif',updatePartial:'account-plugin/icon-image',paramName:'icon'}
var old=$.fn.iconUploadControl
$.fn.iconUploadControl=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.iconUploadControl')
var options=$.extend({},IconUploadControl.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.iconUploadControl',(data=new IconUploadControl(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.iconUploadControl.Constructor=IconUploadControl
$.fn.iconUploadControl.noConflict=function(){$.fn.iconUploadControl=old
return this}
$(document).ready(function(){$('[data-control=icon-upload-control]').iconUploadControl()})}(window.jQuery);

+function($){"use strict";var DropdownSelector=function(element,options){this.options=options
this.$el=$(element)
this.$links=$('ul.dropdown-menu li',this.$el)
this.$label=$('p[data-toggle=dropdown]',this.$el)
this.$input=$('input[data-role="selector-value"]',this.$el)
var self=this
$('a',this.$links).click(function(){self.onClick($(this))})
this.$links.filter('[data-value="'+this.$input.val()+'"]').addClass('active')}
DropdownSelector.prototype.onClick=function($link){var $li=$link.closest('li')
this.$links.removeClass('active')
$li.addClass('active')
this.$label.text($link.text())
this.$input.val($li.data('value'))
this.$el.trigger('change')}
DropdownSelector.DEFAULTS={}
var old=$.fn.dropdownSelector
$.fn.dropdownSelector=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.dropdownSelector')
var options=$.extend({},DropdownSelector.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.dropdownSelector',(data=new DropdownSelector(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdownSelector.Constructor=DropdownSelector
$.fn.dropdownSelector.noConflict=function(){$.fn.dropdownSelector=old
return this}
$(document).ready(function(){$('[data-control="dropdown-selector"]').dropdownSelector()})}(window.jQuery);

+function($){"use strict";var ContextMainMenu=function(element,options){this.$element=$(element)
this.options=options
this.$returnLink=$('li.return',this.$element)
this.mainMenuVisible=false
this.$returnLink.on('mouseover',$.proxy(this.returnToMainMenu,this))
this.$element.mouseleave($.proxy(this.showContextMenuAnimated,this))
$(window).resize($.proxy(this.resizeFixScroll,this))
this.showContextMenu()}
ContextMainMenu.prototype.returnToMainMenu=function(){var self=this
$(document.body).addClass('context-main-menu-animation')
this.$element.addClass('main-menu-visible')
this.$element.animate({scrollLeft:0},400,'swing',function(){self.mainMenuVisible=true
$(document.body).removeClass('context-main-menu-animation')})}
ContextMainMenu.prototype.showContextMenu=function(){var windowWidth=$(window).width()
this.$element.get(0).scrollLeft=windowWidth}
ContextMainMenu.prototype.showContextMenuAnimated=function(e){if(!this.mainMenuVisible)
return
var windowWidth=$(window).width(),self=this
$(document.body).addClass('context-main-menu-animation')
window.setTimeout(function(){self.$element.removeClass('main-menu-visible')},200)
this.$element.animate({scrollLeft:windowWidth},400,'swing',function(){self.mainMenuVisible=false
$(document.body).removeClass('context-main-menu-animation')})}
ContextMainMenu.prototype.resizeFixScroll=function(){if(this.mainMenuVisible)
this.$element.get(0).scrollLeft=0
else
this.$element.get(0).scrollLeft=$(window).width()}
$.fn.contextMainMenu=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.contextMainMenu')
var options=$.extend({},$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.contextMainMenu',(data=new ContextMainMenu(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.contextMainMenu.Constructor=ContextMainMenu
$(document).ready(function(){$('[data-control=context-main-menu]').contextMainMenu()})}(window.jQuery);

+function($){"use strict";var LinkList=function(element,options){this.options=options
this.$el=$(element)
var self=this
this.$el.on('click','li[data-href]',function(){self.onClick(this)})}
LinkList.prototype.onClick=function(li){window.location=$(li).data('href')}
LinkList.DEFAULTS={}
var old=$.fn.linkList
$.fn.linkList=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.linkList')
var options=$.extend({},LinkList.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.linkList',(data=new LinkList(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.linkList.Constructor=LinkList
$.fn.linkList.noConflict=function(){$.fn.linkList=old
return this}
$(document).ready(function(){$('ul[data-control=link-list]').linkList()})}(window.jQuery);

+function($){"use strict";var ScreenshotControl=function(element,options){this.options=options
this.listOrders=[]
this.$el=$(element)
this.$addButton=$('.add-button',this.$el)
this.dropzone=new Dropzone(this.$addButton.get(0),{url:this.options.url,clickable:$('i',this.$addButton).get(0),acceptedFiles:'.gif,.jpg,.jpeg,.png,.gif'});this.initSortable()
var self=this;this.dropzone.on("sending",function(file,xhr,formData){self.start()
formData.append("type",self.options.type)})
this.dropzone.on("error",function(file,error){alert(error)
if(self.queueIsEmpty())
self.stop()})
this.dropzone.on("success",function(file,error){self.updateList()})
this.$el.on('click','ul li button.close',function(){self.removeScreenshot(this)})
this.$el.on('click','ul li a.edit-description, ul li p',function(){self.editDescription(this)
return false})}
ScreenshotControl.prototype.updateSortableOrder=function(){this.listOrders=[]
var self=this,$list=$('ul',this.$el)
$('input.screenshot-order',$list).each(function(){self.listOrders.push(this.value)})}
ScreenshotControl.prototype.pushOrders=function(){var listIds=[],$list=$('ul',this.$el)
$('input.screenshot-id',$list).each(function(){listIds.push(this.value)})
var request=$('form',this.$el).request('onUpdateScreenshotOrders',{data:{'ids':listIds.join(','),'orders':this.listOrders.join(',')}})}
ScreenshotControl.prototype.updateList=function(){if(!this.queueIsEmpty())
return
var updateList={}
updateList[this.options.component+'::screenshot-list']='#screenshot-list-ul'
var request=$('form',this.$el).request('onUpdateScreenshotList',{'update':updateList});var self=this
request.done(function(){self.stop()
self.initSortable()})}
ScreenshotControl.prototype.start=function(){this.$addButton.addClass('loading')}
ScreenshotControl.prototype.stop=function(){this.$addButton.removeClass('loading')}
ScreenshotControl.prototype.queueIsEmpty=function(){return this.dropzone.getQueuedFiles().length==0&&this.dropzone.getUploadingFiles().length==0}
ScreenshotControl.prototype.initSortable=function(){var $list=$('ul',this.$el),self=this
$list.sortable({axis:'x',forcePlaceholderSize:true,start:function(event,ui){ui.placeholder.height(0)},stop:function(){self.pushOrders()}})
$list.disableSelection()
this.updateSortableOrder()}
ScreenshotControl.prototype.removeScreenshot=function(button){if(!confirm('Remove the screenshot?'))
return false
var $li=$(button).closest('li'),id=$('input.screenshot-id',$li).val(),request=$('form',this.$el).request('onDeleteScreenshot',{data:{'id':id}})
var self=this
request.done(function(){$li.remove()
self.initSortable()})
return false}
ScreenshotControl.prototype.editDescription=function(link){var $li=$(link).closest('li'),id=$('input.screenshot-id',$li).val(),self=this
$(this).request('onLoadEditScreenshotDescriptionForm',{data:{'id':id},success:function(data){var $popup=$(data.popup)
$popup.modal({backdrop:'static',keyboard:false});$popup.on('submit',function(){self.applyDescription(id,$popup,$li)
return false})}});return false}
ScreenshotControl.prototype.applyDescription=function(id,$popup,$li){var description=$.trim($('input[name=description]',$popup).val())
$(this).request('onApplyScreenshotDescription',{data:{'id':id,'description':description},success:function(){$popup.modal('hide')
var $span=$('p span',$li),$p=$('p',$li)
$span.remove()
$span=$('<span></span>')
if(description.length>0)
$span.text(description).addClass('description')
else
$span.text('...').addClass('no-file-description')
$p.prepend($span)}})}
ScreenshotControl.DEFAULTS={}
var old=$.fn.screenshotControl
$.fn.screenshotControl=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.screenshotControl')
var options=$.extend({},ScreenshotControl.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.screenshotControl',(data=new ScreenshotControl(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.screenshotControl.Constructor=ScreenshotControl
$.fn.screenshotControl.noConflict=function(){$.fn.screenshotControl=old
return this}
$(document).ready(function(){$('[data-control=screenshot-control]').screenshotControl()})}(window.jQuery);

+function($){"use strict";if($.oc===undefined)
$.oc={}
var ModalLoadIndicator=function(){this.counter=0
this.indicator=$('<div/>').addClass('modal-loading-indicator hidden').append($('<div />'))
$(document.body).append(this.indicator)}
ModalLoadIndicator.prototype.show=function(){this.counter++
if(this.counter>1)
return
this.indicator.removeClass('hidden')
$(document.body).addClass('loading')}
ModalLoadIndicator.prototype.hide=function(force){this.counter--
if(force!==undefined&&force)
this.counter=0
if(this.counter<=0){this.indicator.addClass('hidden')
$(document.body).removeClass('loading')}}
$(document).ready(function(){$.oc.modalLoadIndicator=new ModalLoadIndicator()})}(window.jQuery);

(function($){"use strict";var JFilestyle=function(element,options){this.options=options;this.$elementjFilestyle=[];this.$element=$(element);};JFilestyle.prototype={clear:function(){this.$element.val('');this.$elementjFilestyle.find(':text').val('');},destroy:function(){this.$element.removeAttr('style').removeData('jfilestyle').val('');this.$elementjFilestyle.remove();},icon:function(value){if(value===true){if(!this.options.icon){this.options.icon=true;this.$elementjFilestyle.find('label').prepend(this.htmlIcon());}}else if(value===false){if(this.options.icon){this.options.icon=false;this.$elementjFilestyle.find('i').remove();}}else{return this.options.icon;}},input:function(value){if(value===true){if(!this.options.input){this.options.input=true;this.$elementjFilestyle.prepend(this.htmlInput());var content='',files=[];if(this.$element[0].files===undefined){files[0]={'name':this.$element[0].value};}else{files=this.$element[0].files;}
for(var i=0;i<files.length;i++){content+=files[i].name.split("\\").pop()+', ';}
if(content!==''){this.$elementjFilestyle.find(':text').val(content.replace(/\, $/g,''));}}}else if(value===false){if(this.options.input){this.options.input=false;this.$elementjFilestyle.find(':text').remove();}}else{return this.options.input;}},buttonText:function(value){if(value!==undefined){this.options.buttonText=value;this.$elementjFilestyle.find('label span').html(this.options.buttonText);}else{return this.options.buttonText;}},iconName:function(value){if(value!==undefined){this.options.iconName=value;if(this.options.theme.search(/blue|green|red|orange|black/i)!==-1){this.$elementjFilestyle.find('label').find('i').attr({'class':'icon-white '+this.options.iconName});}else{this.$elementjFilestyle.find('label').find('i').attr({'class':this.options.iconName});}}else{return this.options.iconName;}},size:function(value){if(value!==undefined){this.options.size=value;this.$elementjFilestyle.find(':text').css('width',this.options.size);}else{return this.options.size;}},htmlIcon:function(){if(this.options.icon){var colorIcon='';if(this.options.theme.search(/blue|green|red|orange|black/i)!==-1){colorIcon=' icon-white ';}
return'<i class="'+colorIcon+this.options.iconName+'"></i> ';}else{return'';}},htmlInput:function(){if(this.options.input){return'<input type="text" style="width:'+this.options.size+'" disabled> ';}else{return'';}},constructor:function(){var _self=this,html='',id=this.$element.attr('id'),files=[];if(id===''||!id){id='jfilestyle-'+$('.jquery-filestyle').length;this.$element.attr({'id':id});}
html=this.htmlInput()+'<label for="'+id+'">'+
this.htmlIcon()+'<span>'+this.options.buttonText+'</span>'+'</label>';this.$elementjFilestyle=$('<div class="jquery-filestyle '+this.options.theme+'" style="display: inline;">'+html+'</div>');this.$element.css({'position':'fixed','left':'-500px'}).after(this.$elementjFilestyle);this.$element.change(function(){var content='';if(this.files===undefined){files[0]={'name':this.value};}else{files=this.files;}
for(var i=0;i<files.length;i++){content+=files[i].name.split("\\").pop()+', ';}
if(content!==''){_self.$elementjFilestyle.find(':text').val(content.replace(/\, $/g,''));}});if(window.navigator.userAgent.search(/firefox/i)>-1){this.$elementjFilestyle.find('label').click(function(){_self.$element.click();return false;});}}};var old=$.fn.jfilestyle;$.fn.jfilestyle=function(option,value){var get='',element=this.each(function(){if($(this).attr('type')==='file'){var $this=$(this),data=$this.data('jfilestyle'),options=$.extend({},$.fn.jfilestyle.defaults,option,typeof option==='object'&&option);if(!data){$this.data('jfilestyle',(data=new JFilestyle(this,options)));data.constructor();}
if(typeof option==='string'){get=data[option](value);}}});if(typeof get!==undefined){return get;}else{return element;}};$.fn.jfilestyle.defaults={'buttonText':'Choose file','input':true,'icon':true,'size':'200px','iconName':'icon-folder-open','theme':''};$.fn.jfilestyle.noConflict=function(){$.fn.jfilestyle=old;return this;};$('.jfilestyle').each(function(){var $this=$(this),options={'buttonText':$this.attr('data-buttonText'),'input':$this.attr('data-input')==='false'?false:true,'icon':$this.attr('data-icon')==='false'?false:true,'size':$this.attr('data-size'),'iconName':$this.attr('data-iconName'),'theme':$this.attr('data-theme')};$this.jfilestyle(options);});})(window.jQuery);

(function($,undefined){var uuid=0,runiqueId=/^ui-id-\d+$/;$.ui=$.ui||{};$.extend($.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});$.fn.extend({focus:(function(orig){return function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem);}},delay);}):orig.apply(this,arguments);};})($.fn.focus),scrollParent:function(){var scrollParent;if(($.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.css(this,"position"))&&(/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));}).eq(0);}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));}).eq(0);}
return(/fixed/).test(this.css("position"))||!scrollParent.length?$(document):scrollParent;},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex);}
if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}
elem=elem.parent();}}
return 0;},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid);}});},removeUniqueId:function(){return this.each(function(){if(runiqueId.test(this.id)){$(this).removeAttr("id");}});}});function focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img);}
return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element);}
function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden";}).length;}
$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")));},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN);}});if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}
if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}
return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}
return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}
if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=(function(removeData){return function(key){if(arguments.length){return removeData.call(this,$.camelCase(key));}else{return removeData.call(this);}};})($.fn.removeData);}
$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());$.support.selectstart="onselectstart"in document.createElement("div");$.fn.extend({disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault();});},enableSelection:function(){return this.unbind(".ui-disableSelection");}});$.extend($.ui,{plugin:{add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args){var i,set=instance.plugins[name];if(!set||!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11){return;}
for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}},hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false;}
var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has;}});})(jQuery);(function($,undefined){var uuid=0,slice=Array.prototype.slice,_cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++){try{$(elem).triggerHandler("remove");}catch(e){}}
_cleanData(elems);};$.widget=function(name,base,prototype){var fullName,existingConstructor,constructor,basePrototype,proxiedPrototype={},namespace=name.split(".")[0];name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element);}
if(arguments.length){this._createWidget(options,element);}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}
proxiedPrototype[prop]=(function(){var _super=function(){return base.prototype[prop].apply(this,arguments);},_superApply=function(args){return base.prototype[prop].apply(this,args);};return function(){var __super=this._super,__superApply=this._superApply,returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};})();});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}
$.widget.bridge(name,constructor);};$.widget.extend=function(target){var input=slice.call(arguments,1),inputIndex=0,inputLength=input.length,key,value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value);}else{target[key]=value;}}}}
return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=slice.call(arguments,1),returnValue=this;options=!isMethodCall&&args.length?$.widget.extend.apply(null,[options].concat(args)):options;if(isMethodCall){this.each(function(){var methodValue,instance=$.data(this,fullName);if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}
methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}else{this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{})._init();}else{$.data(this,fullName,new object(options,this));}});}
return returnValue;};};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=uuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this.bindings=$();this.hoverable=$();this.focusable=$();if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}
this._create();this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");},_destroy:$.noop,widget:function(){return this.element;},option:function(key,value){var options=key,parts,curOption,i;if(arguments.length===0){return $.widget.extend({},this.options);}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}
key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}
curOption[key]=value;}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}
options[key]=value;}}
this._setOptions(options);return this;},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key]);}
return this;},_setOption:function(key,value){this.options[key]=value;if(key==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!value).attr("aria-disabled",value);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");}
return this;},enable:function(){return this._setOption("disabled",false);},disable:function(){return this._setOption("disabled",true);},_on:function(suppressDisabledCheck,element,handlers){var delegateElement,instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}
$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}
return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}
var match=event.match(/^(\w+)\s*(.*)$/),eventName=match[1]+instance.eventNamespace,selector=match[2];if(selector){delegateElement.delegate(selector,eventName,handlerProxy);}else{element.bind(eventName,handlerProxy);}});},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.unbind(eventName).undelegate(eventName);},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){$(event.currentTarget).addClass("ui-state-hover");},mouseleave:function(event){$(event.currentTarget).removeClass("ui-state-hover");}});},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){$(event.currentTarget).addClass("ui-state-focus");},focusout:function(event){$(event.currentTarget).removeClass("ui-state-focus");}});},_trigger:function(type,event,data){var prop,orig,callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}
var hasOptions,effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}
hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}
next();});}};});})(jQuery);(function($,undefined){var mouseHandled=false;$(document).mouseup(function(){mouseHandled=false;});$.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.bind("mousedown."+this.widgetName,function(event){return that._mouseDown(event);}).bind("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false;}});this.started=false;},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);}},_mouseDown:function(event){if(mouseHandled){return;}
(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var that=this,btnIsLeft=(event.which===1),elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true;},this.options.delay);}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}
if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent");}
this._mouseMoveDelegate=function(event){return that._mouseMove(event);};this._mouseUpDelegate=function(event){return that._mouseUp(event);};$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function(event){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event);}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));}
return!this._mouseStarted;},_mouseUp:function(event){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true);}
this._mouseStop(event);}
return false;},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(){return this.mouseDelayMet;},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true;}});})(jQuery);(function($,undefined){$.ui=$.ui||{};var cachedScrollbarWidth,max=Math.max,abs=Math.abs,round=Math.round,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)];}
function parseCss(element,property){return parseInt($.css(element,property),10)||0;}
function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}
if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}
if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}
return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}
$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}
var w1,w2,div=$("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}
div.remove();return(cachedScrollbarWidth=w1-w2);},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9;return{element:withinElement,isWindow:isWindow,isDocument:isDocument,offset:withinElement.offset()||{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:isWindow?withinElement.width():withinElement.outerWidth(),height:isWindow?withinElement.height():withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top";}
targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});if(collision.length===1){collision[1]=collision[0];}
if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2;}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2;}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth/2;}
if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight/2;}
position.left+=myOffset[0];position.top+=myOffset[1];if(!$.support.offsetFractions){position.left=round(position.left);position.top=round(position.top);}
collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}
options.using.call(this,props,feedback);};}
elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0){position.left=withinOffset;}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}}else if(overLeft>0){position.left+=overLeft;}else if(overRight>0){position.left-=overRight;}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0){position.top=withinOffset;}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}}else if(overTop>0){position.top+=overTop;}else if(overBottom>0){position.top-=overBottom;}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}
else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if((position.top+myOffset+atOffset+offset)>overTop&&(newOverBottom<0||newOverBottom<abs(overTop))){position.top+=myOffset+atOffset+offset;}}
else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if((position.top+myOffset+atOffset+offset)>overBottom&&(newOverTop>0||abs(newOverTop)<overBottom)){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};(function(){var testElement,testElementParent,testElementStyle,offsetLeft,i,body=document.getElementsByTagName("body")[0],div=document.createElement("div");testElement=document.createElement(body?"div":"body");testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(body){$.extend(testElementStyle,{position:"absolute",left:"-1000px",top:"-1000px"});}
for(i in testElementStyle){testElement.style[i]=testElementStyle[i];}
testElement.appendChild(div);testElementParent=body||document.documentElement;testElementParent.insertBefore(testElement,testElementParent.firstChild);div.style.cssText="position: absolute; left: 10.7432222px;";offsetLeft=$(div).offset().left;$.support.offsetFractions=offsetLeft>10&&offsetLeft<11;testElement.innerHTML="";testElementParent.removeChild(testElement);})();}(jQuery));(function($,undefined){function isOverAxis(x,reference,size){return(x>reference)&&(x<(reference+size));}
function isFloating(item){return(/left|right/).test(item.css("float"))||(/inline|table-cell/).test(item.css("display"));}
$.widget("ui.sortable",$.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var o=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?o.axis==="x"||isFloating(this.items[0].item):false;this.offset=this.element.offset();this._mouseInit();this.ready=true;},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item");}
return this;},_setOption:function(key,value){if(key==="disabled"){this.options[key]=value;this.widget().toggleClass("ui-sortable-disabled",!!value);}else{$.Widget.prototype._setOption.apply(this,arguments);}},_mouseCapture:function(event,overrideHandle){var currentItem=null,validHandle=false,that=this;if(this.reverting){return false;}
if(this.options.disabled||this.options.type==="static"){return false;}
this._refreshItems(event);$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return false;}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target);}
if(!currentItem){return false;}
if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=true;}});if(!validHandle){return false;}}
this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function(event,overrideHandle,noActivation){var i,body,o=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide();}
this._createPlaceholder();if(o.containment){this._setContainment();}
if(o.cursor&&o.cursor!=="auto"){body=this.document.find("body");this.storedCursor=body.css("cursor");body.css("cursor",o.cursor);this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body);}
if(o.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity");}
this.helper.css("opacity",o.opacity);}
if(o.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex");}
this.helper.css("zIndex",o.zIndex);}
if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset();}
this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions();}
if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this));}}
if($.ui.ddmanager){$.ui.ddmanager.current=this;}
if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}
this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(event);return true;},_mouseDrag:function(event){var i,item,itemElement,intersection,o=this.options,scrolled=false;this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs;}
if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;}
if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}
if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}}
this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}
if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}
for(i=this.items.length-1;i>=0;i--){item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue;}
if(item.instance!==this.currentContainer){continue;}
if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):true)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}
this._trigger("change",event,this._uiHash());break;}}
this._contactContainers(event);if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}
this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function(event,noPropagation){if(!event){return;}
if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event);}
if(this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};if(!axis||axis==="x"){animation.left=cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft);}
if(!axis||axis==="y"){animation.top=cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop);}
this.reverting=true;$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event);});}else{this._clear(event,noPropagation);}
return false;},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}
for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0]);}
if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove();}
$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}
return this;},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||(/(.+)[\-=_](.+)/));if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]));}});if(!str.length&&o.key){str.push(o.key+"=");}
return str.join("&");},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"");});return ret;},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight=(this.options.axis==="x")||((y1+dyClick)>t&&(y1+dyClick)<b),isOverElementWidth=(this.options.axis==="y")||((x1+dxClick)>l&&(x1+dxClick)<r),isOverElement=isOverElementHeight&&isOverElementWidth;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"])){return isOverElement;}else{return(l<x1+(this.helperProportions.width/2)&&x2-(this.helperProportions.width/2)<r&&t<y1+(this.helperProportions.height/2)&&y2-(this.helperProportions.height/2)<b);}},_intersectsWithPointer:function(item){var isOverElementHeight=(this.options.axis==="x")||isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=(this.options.axis==="y")||isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(!isOverElement){return false;}
return this.floating?(((horizontalDirection&&horizontalDirection==="right")||verticalDirection==="down")?2:1):(verticalDirection&&(verticalDirection==="down"?2:1));},_intersectsWithSides:function(item){var isOverBottomHalf=isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return((horizontalDirection==="right"&&isOverRightHalf)||(horizontalDirection==="left"&&!isOverRightHalf));}else{return verticalDirection&&((verticalDirection==="down"&&isOverBottomHalf)||(verticalDirection==="up"&&!isOverBottomHalf));}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left");},refresh:function(event){this._refreshItems(event);this.refreshPositions();return this;},_connectWith:function(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst]);}}}}
queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);function addItems(){items.push(this);}
for(i=queries.length-1;i>=0;i--){queries[i][0].each(addItems);}
return $(items);},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return false;}}
return true;});},_refreshItems:function(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}}}}
for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});}}},refreshPositions:function(fast){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}
var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];if(item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]){continue;}
t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}
p=t.offset();item.left=p.left;item.top=p.top;}
if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();}}
return this;},_createPlaceholder:function(that){that=that||this;var className,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;o.placeholder={element:function(){var nodeName=that.currentItem[0].nodeName.toLowerCase(),element=$("<"+nodeName+">",that.document[0]).addClass(className||that.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");if(nodeName==="tr"){that.currentItem.children().each(function(){$("<td>&#160;</td>",that.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(element);});}else if(nodeName==="img"){element.attr("src",that.currentItem.attr("src"));}
if(!className){element.css("visibility","hidden");}
return element;},update:function(container,p){if(className&&!o.forcePlaceholderSize){return;}
if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10));}
if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10));}}};}
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));that.currentItem.after(that.placeholder);o.placeholder.update(that,that.placeholder);},_contactContainers:function(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,base,cur,nearBottom,floating,innermostContainer=null,innermostIndex=null;for(i=this.containers.length-1;i>=0;i--){if($.contains(this.currentItem[0],this.containers[i].element[0])){continue;}
if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue;}
innermostContainer=this.containers[i];innermostIndex=i;}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(!innermostContainer){return;}
if(this.containers.length===1){if(!this.containers[innermostIndex].containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}}else{dist=10000;itemWithLeastDistance=null;floating=innermostContainer.floating||isFloating(this.currentItem);posProperty=floating?"left":"top";sizeProperty=floating?"width":"height";base=this.positionAbs[posProperty]+this.offset.click[posProperty];for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue;}
if(this.items[j].item[0]===this.currentItem[0]){continue;}
if(floating&&!isOverAxis(this.positionAbs.top+this.offset.click.top,this.items[j].top,this.items[j].height)){continue;}
cur=this.items[j].item.offset()[posProperty];nearBottom=false;if(Math.abs(cur-base)>Math.abs(cur+this.items[j][sizeProperty]-base)){nearBottom=true;cur+=this.items[j][sizeProperty];}
if(Math.abs(cur-base)<dist){dist=Math.abs(cur-base);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down";}}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return;}
if(this.currentContainer===this.containers[innermostIndex]){return;}
itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.currentContainer=this.containers[innermostIndex];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper==="clone"?this.currentItem.clone():this.currentItem);if(!helper.parents("body").length){$(o.appendTo!=="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);}
if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};}
if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width());}
if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height());}
return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ");}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}
if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}
if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){po={top:0,left:0};}
return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}
if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,$(o.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,($(o.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];}
if(!(/^(document|window|parent)$/).test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=($(ce).css("overflow")!=="hidden");this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];}},_convertPositionTo:function(d,pos){if(!pos){pos=this.position;}
var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top+
this.offset.relative.top*mod+
this.offset.parent.top*mod-
((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left+
this.offset.relative.left*mod+
this.offset.parent.left*mod-
((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}
if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left;}
if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top;}
if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left;}
if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top;}}
if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?((top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3])?top:((top-this.offset.click.top>=this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?((left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2])?left:((left-this.offset.click.left>=this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
return{top:(pageY-
this.offset.click.top-
this.offset.relative.top-
this.offset.parent.top+
((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX-
this.offset.click.left-
this.offset.relative.left-
this.offset.parent.left+
((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?i.item[0]:i.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){this.refreshPositions(!hardRefresh);}});},_clear:function(event,noPropagation){this.reverting=false;var i,delayedTriggers=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem);}
this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]="";}}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}
if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});}
if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});}
if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}).call(this,this.currentContainer));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}).call(this,this.currentContainer));}}
function delayEvent(type,instance,container){return function(event){container._trigger(type,event,instance._uiHash(instance));};}
for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push(delayEvent("deactivate",this,this.containers[i]));}
if(this.containers[i].containerCache.over){delayedTriggers.push(delayEvent("out",this,this.containers[i]));this.containers[i].containerCache.over=0;}}
if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove();}
if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity);}
if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex);}
this.dragging=false;if(this.cancelHelperRemoval){if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}
this._trigger("stop",event,this._uiHash());}
this.fromOutside=false;return false;}
if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());}
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!==this.currentItem[0]){this.helper.remove();}
this.helper=null;if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}
this._trigger("stop",event,this._uiHash());}
this.fromOutside=false;return true;},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null};}});})(jQuery);

(function($,window,document,undefined){'use strict';var header_helpers=function(class_array){var i=class_array.length;var head=$('head');while(i--){if(head.has('.'+class_array[i]).length===0){head.append('<meta class="'+class_array[i]+'" />');}}};header_helpers(['foundation-mq-small','foundation-mq-medium','foundation-mq-large','foundation-mq-xlarge','foundation-mq-xxlarge','foundation-data-attribute-namespace']);$(function(){if(typeof FastClick!=='undefined'){if(typeof document.body!=='undefined'){FastClick.attach(document.body);}}});var S=function(selector,context){if(typeof selector==='string'){if(context){var cont;if(context.jquery){cont=context[0];if(!cont)return context;}else{cont=context;}
return $(cont.querySelectorAll(selector));}
return $(document.querySelectorAll(selector));}
return $(selector,context);};var attr_name=function(init){var arr=[];if(!init)arr.push('data');if(this.namespace.length>0)arr.push(this.namespace);arr.push(this.name);return arr.join('-');};var add_namespace=function(str){var parts=str.split('-'),i=parts.length,arr=[];while(i--){if(i!==0){arr.push(parts[i]);}else{if(this.namespace.length>0){arr.push(this.namespace,parts[i]);}else{arr.push(parts[i]);}}}
return arr.reverse().join('-');};var bindings=function(method,options){var self=this,should_bind_events=!S(this).data(this.attr_name(true));if(S(this.scope).is('['+this.attr_name()+']')){S(this.scope).data(this.attr_name(true)+'-init',$.extend({},this.settings,(options||method),this.data_options(S(this.scope))));if(should_bind_events){this.events(this.scope);}}else{S('['+this.attr_name()+']',this.scope).each(function(){var should_bind_events=!S(this).data(self.attr_name(true)+'-init');S(this).data(self.attr_name(true)+'-init',$.extend({},self.settings,(options||method),self.data_options(S(this))));if(should_bind_events){self.events(this);}});}
if(typeof method==='string'){return this[method].call(this,options);}};var single_image_loaded=function(image,callback){function loaded(){callback(image[0]);}
function bindLoad(){this.one('load',loaded);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var src=this.attr('src'),param=src.match(/\?/)?'&':'?';param+='random='+(new Date()).getTime();this.attr('src',src+param);}}
if(!image.attr('src')){loaded();return;}
if(image[0].complete||image[0].readyState===4){loaded();}else{bindLoad.call(image);}};window.matchMedia=window.matchMedia||(function(doc){"use strict";var bool,docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,fakeBody=doc.createElement("body"),div=doc.createElement("div");div.id="mq-test-1";div.style.cssText="position:absolute;top:-100em";fakeBody.style.background="none";fakeBody.appendChild(div);return function(q){div.innerHTML="&shy;<style media=\""+q+"\"> #mq-test-1 { width: 42px; }</style>";docElem.insertBefore(fakeBody,refNode);bool=div.offsetWidth===42;docElem.removeChild(fakeBody);return{matches:bool,media:q};};}(document));(function($){var animating,lastTime=0,vendors=['webkit','moz'],requestAnimationFrame=window.requestAnimationFrame,cancelAnimationFrame=window.cancelAnimationFrame,jqueryFxAvailable='undefined'!==typeof jQuery.fx;for(;lastTime<vendors.length&&!requestAnimationFrame;lastTime++){requestAnimationFrame=window[vendors[lastTime]+"RequestAnimationFrame"];cancelAnimationFrame=cancelAnimationFrame||window[vendors[lastTime]+"CancelAnimationFrame"]||window[vendors[lastTime]+"CancelRequestAnimationFrame"];}
function raf(){if(animating){requestAnimationFrame(raf);if(jqueryFxAvailable){jQuery.fx.tick();}}}
if(requestAnimationFrame){window.requestAnimationFrame=requestAnimationFrame;window.cancelAnimationFrame=cancelAnimationFrame;if(jqueryFxAvailable){jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)&&!animating){animating=true;raf();}};jQuery.fx.stop=function(){animating=false;};}}else{window.requestAnimationFrame=function(callback){var currTime=new Date().getTime(),timeToCall=Math.max(0,16-(currTime-lastTime)),id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};window.cancelAnimationFrame=function(id){clearTimeout(id);};}}(jQuery));function removeQuotes(string){if(typeof string==='string'||string instanceof String){string=string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,'');}
return string;}
window.Foundation={name:'Foundation',version:'5.3.0',media_queries:{small:S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,''),medium:S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,''),large:S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,''),xlarge:S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,''),xxlarge:S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,'')},stylesheet:$('<style></style>').appendTo('head')[0].sheet,global:{namespace:undefined},init:function(scope,libraries,method,options,response){var args=[scope,method,options,response],responses=[];this.rtl=/rtl/i.test(S('html').attr('dir'));this.scope=scope||this.scope;this.set_namespace();if(libraries&&typeof libraries==='string'&&!/reflow/i.test(libraries)){if(this.libs.hasOwnProperty(libraries)){responses.push(this.init_lib(libraries,args));}}else{for(var lib in this.libs){responses.push(this.init_lib(lib,libraries));}}
return scope;},init_lib:function(lib,args){if(this.libs.hasOwnProperty(lib)){this.patch(this.libs[lib]);if(args&&args.hasOwnProperty(lib)){if(typeof this.libs[lib].settings!=='undefined'){$.extend(true,this.libs[lib].settings,args[lib]);}
else if(typeof this.libs[lib].defaults!=='undefined'){$.extend(true,this.libs[lib].defaults,args[lib]);}
return this.libs[lib].init.apply(this.libs[lib],[this.scope,args[lib]]);}
args=args instanceof Array?args:new Array(args);return this.libs[lib].init.apply(this.libs[lib],args);}
return function(){};},patch:function(lib){lib.scope=this.scope;lib.namespace=this.global.namespace;lib.rtl=this.rtl;lib['data_options']=this.utils.data_options;lib['attr_name']=attr_name;lib['add_namespace']=add_namespace;lib['bindings']=bindings;lib['S']=this.utils.S;},inherit:function(scope,methods){var methods_arr=methods.split(' '),i=methods_arr.length;while(i--){if(this.utils.hasOwnProperty(methods_arr[i])){scope[methods_arr[i]]=this.utils[methods_arr[i]];}}},set_namespace:function(){var namespace=(this.global.namespace===undefined)?$('.foundation-data-attribute-namespace').css('font-family'):this.global.namespace;this.global.namespace=(namespace===undefined||/false/i.test(namespace))?'':namespace;},libs:{},utils:{S:S,throttle:function(func,delay){var timer=null;return function(){var context=this,args=arguments;if(timer==null){timer=setTimeout(function(){func.apply(context,args);timer=null;},delay);}};},debounce:function(func,delay,immediate){var timeout,result;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)result=func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,delay);if(callNow)result=func.apply(context,args);return result;};},data_options:function(el,data_attr_name){data_attr_name=data_attr_name||'options';var opts={},ii,p,opts_arr,data_options=function(el){var namespace=Foundation.global.namespace;if(namespace.length>0){return el.data(namespace+'-'+data_attr_name);}
return el.data(data_attr_name);};var cached_options=data_options(el);if(typeof cached_options==='object'){return cached_options;}
opts_arr=(cached_options||':').split(';');ii=opts_arr.length;function isNumber(o){return!isNaN(o-0)&&o!==null&&o!==""&&o!==false&&o!==true;}
function trim(str){if(typeof str==='string')return $.trim(str);return str;}
while(ii--){p=opts_arr[ii].split(':');p=[p[0],p.slice(1).join(':')];if(/true/i.test(p[1]))p[1]=true;if(/false/i.test(p[1]))p[1]=false;if(isNumber(p[1])){if(p[1].indexOf('.')===-1){p[1]=parseInt(p[1],10);}else{p[1]=parseFloat(p[1]);}}
if(p.length===2&&p[0].length>0){opts[trim(p[0])]=trim(p[1]);}}
return opts;},register_media:function(media,media_class){if(Foundation.media_queries[media]===undefined){$('head').append('<meta class="'+media_class+'"/>');Foundation.media_queries[media]=removeQuotes($('.'+media_class).css('font-family'));}},add_custom_rule:function(rule,media){if(media===undefined&&Foundation.stylesheet){Foundation.stylesheet.insertRule(rule,Foundation.stylesheet.cssRules.length);}else{var query=Foundation.media_queries[media];if(query!==undefined){Foundation.stylesheet.insertRule('@media '+
Foundation.media_queries[media]+'{ '+rule+' }');}}},image_loaded:function(images,callback){var self=this,unloaded=images.length;if(unloaded===0){callback(images);}
images.each(function(){single_image_loaded(self.S(this),function(){unloaded-=1;if(unloaded===0){callback(images);}});});},random_str:function(){if(!this.fidx)this.fidx=0;this.prefix=this.prefix||[(this.name||'F'),(+new Date).toString(36)].join('-');return this.prefix+(this.fidx++).toString(36);}}};$.fn.foundation=function(){var args=Array.prototype.slice.call(arguments,0);return this.each(function(){Foundation.init.apply(Foundation,[this].concat(args));return this;});};}(jQuery,window,window.document));
;(function($,window,document,undefined){'use strict';Foundation.libs.clearing={name:'clearing',version:'5.3.0',settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a>'+'<div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'+'<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>'+'<a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:'.clearing-close, div.clearing-blackout',open_selectors:'',touch_label:'',init:false,locked:false},init:function(scope,method,options){var self=this;Foundation.inherit(this,'throttle image_loaded');this.bindings(method,options);if(self.S(this.scope).is('['+this.attr_name()+']')){this.assemble(self.S('li',this.scope));}else{self.S('['+this.attr_name()+']',this.scope).each(function(){self.assemble(self.S('li',this));});}},events:function(scope){var self=this,S=self.S,$scroll_container=$('.scroll-container');if($scroll_container.length>0){this.scope=$scroll_container;}
S(this.scope).off('.clearing').on('click.fndtn.clearing','ul['+this.attr_name()+'] li '+this.settings.open_selectors,function(e,current,target){var current=current||S(this),target=target||current,next=current.next('li'),settings=current.closest('['+self.attr_name()+']').data(self.attr_name(true)+'-init'),image=S(e.target);e.preventDefault();if(!settings){self.init();settings=current.closest('['+self.attr_name()+']').data(self.attr_name(true)+'-init');}
if(target.hasClass('visible')&&current[0]===target[0]&&next.length>0&&self.is_open(current)){target=next;image=S('img',target);}
self.open(image,current,target);self.update_paddles(target);}).on('click.fndtn.clearing','.clearing-main-next',function(e){self.nav(e,'next')}).on('click.fndtn.clearing','.clearing-main-prev',function(e){self.nav(e,'prev')}).on('click.fndtn.clearing',this.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)});$(document).on('keydown.fndtn.clearing',function(e){self.keydown(e)});S(window).off('.clearing').on('resize.fndtn.clearing',function(){self.resize()});this.swipe_events(scope);},swipe_events:function(scope){var self=this,S=self.S;S(this.scope).on('touchstart.fndtn.clearing','.visible-img',function(e){if(!e.touches){e=e.originalEvent;}
var data={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date()).getTime(),delta_x:0,is_scrolling:undefined};S(this).data('swipe-transition',data);e.stopPropagation();}).on('touchmove.fndtn.clearing','.visible-img',function(e){if(!e.touches){e=e.originalEvent;}
if(e.touches.length>1||e.scale&&e.scale!==1)return;var data=S(this).data('swipe-transition');if(typeof data==='undefined'){data={};}
data.delta_x=e.touches[0].pageX-data.start_page_x;if(Foundation.rtl){data.delta_x=-data.delta_x;}
if(typeof data.is_scrolling==='undefined'){data.is_scrolling=!!(data.is_scrolling||Math.abs(data.delta_x)<Math.abs(e.touches[0].pageY-data.start_page_y));}
if(!data.is_scrolling&&!data.active){e.preventDefault();var direction=(data.delta_x<0)?'next':'prev';data.active=true;self.nav(e,direction);}}).on('touchend.fndtn.clearing','.visible-img',function(e){S(this).data('swipe-transition',{});e.stopPropagation();});},assemble:function($li){var $el=$li.parent();if($el.parent().hasClass('carousel')){return;}
$el.after('<div id="foundationClearingHolder"></div>');var grid=$el.detach(),grid_outerHTML='';if(grid[0]==null){return;}else{grid_outerHTML=grid[0].outerHTML;}
var holder=this.S('#foundationClearingHolder'),settings=$el.data(this.attr_name(true)+'-init'),data={grid:'<div class="carousel">'+grid_outerHTML+'</div>',viewing:settings.templates.viewing},wrapper='<div class="clearing-assembled"><div>'+data.viewing+
data.grid+'</div></div>',touch_label=this.settings.touch_label;if(Modernizr.touch){wrapper=$(wrapper).find('.clearing-touch-label').html(touch_label).end();}
holder.after(wrapper).remove();},open:function($image,current,target){var self=this,body=$(document.body),root=target.closest('.clearing-assembled'),container=self.S('div',root).first(),visible_image=self.S('.visible-img',container),image=self.S('img',visible_image).not($image),label=self.S('.clearing-touch-label',container),error=false;image.error(function(){error=true;});function startLoad(){setTimeout(function(){this.image_loaded(image,function(){if(image.outerWidth()===1&&!error){startLoad.call(this);}else{cb.call(this,image);}}.bind(this));}.bind(this),100);}
function cb(image){var $image=$(image);$image.css('visibility','visible');body.css('overflow','hidden');root.addClass('clearing-blackout');container.addClass('clearing-container');visible_image.show();this.fix_height(target).caption(self.S('.clearing-caption',visible_image),self.S('img',target)).center_and_label(image,label).shift(current,target,function(){target.closest('li').siblings().removeClass('visible');target.closest('li').addClass('visible');});visible_image.trigger('opened.fndtn.clearing')}
if(!this.locked()){visible_image.trigger('open.fndtn.clearing');image.attr('src',this.load($image)).css('visibility','hidden');startLoad.call(this);}},close:function(e,el){e.preventDefault();var root=(function(target){if(/blackout/.test(target.selector)){return target;}else{return target.closest('.clearing-blackout');}}($(el))),body=$(document.body),container,visible_image;if(el===e.target&&root){body.css('overflow','');container=$('div',root).first();visible_image=$('.visible-img',container);visible_image.trigger('close.fndtn.clearing');this.settings.prev_index=0;$('ul['+this.attr_name()+']',root).attr('style','').closest('.clearing-blackout').removeClass('clearing-blackout');container.removeClass('clearing-container');visible_image.hide();visible_image.trigger('closed.fndtn.clearing');}
return false;},is_open:function(current){return current.parent().prop('style').length>0;},keydown:function(e){var clearing=$('.clearing-blackout ul['+this.attr_name()+']'),NEXT_KEY=this.rtl?37:39,PREV_KEY=this.rtl?39:37,ESC_KEY=27;if(e.which===NEXT_KEY)this.go(clearing,'next');if(e.which===PREV_KEY)this.go(clearing,'prev');if(e.which===ESC_KEY)this.S('a.clearing-close').trigger('click').trigger('click.fndtn.clearing');},nav:function(e,direction){var clearing=$('ul['+this.attr_name()+']','.clearing-blackout');e.preventDefault();this.go(clearing,direction);},resize:function(){var image=$('img','.clearing-blackout .visible-img'),label=$('.clearing-touch-label','.clearing-blackout');if(image.length){this.center_and_label(image,label);image.trigger('resized.fndtn.clearing')}},fix_height:function(target){var lis=target.parent().children(),self=this;lis.each(function(){var li=self.S(this),image=li.find('img');if(li.height()>image.outerHeight()){li.addClass('fix-height');}}).closest('ul').width(lis.length*100+'%');return this;},update_paddles:function(target){target=target.closest('li');var visible_image=target.closest('.carousel').siblings('.visible-img');if(target.next().length>0){this.S('.clearing-main-next',visible_image).removeClass('disabled');}else{this.S('.clearing-main-next',visible_image).addClass('disabled');}
if(target.prev().length>0){this.S('.clearing-main-prev',visible_image).removeClass('disabled');}else{this.S('.clearing-main-prev',visible_image).addClass('disabled');}},center_and_label:function(target,label){if(!this.rtl){target.css({marginLeft:-(target.outerWidth()/2),marginTop:-(target.outerHeight()/2)});if(label.length>0){label.css({marginLeft:-(label.outerWidth()/2),marginTop:-(target.outerHeight()/2)-label.outerHeight()-10});}}else{target.css({marginRight:-(target.outerWidth()/2),marginTop:-(target.outerHeight()/2),left:'auto',right:'50%'});if(label.length>0){label.css({marginRight:-(label.outerWidth()/2),marginTop:-(target.outerHeight()/2)-label.outerHeight()-10,left:'auto',right:'50%'});}}
return this;},load:function($image){var href;if($image[0].nodeName==="A"){href=$image.attr('href');}else{href=$image.parent().attr('href');}
this.preload($image);if(href)return href;return $image.attr('src');},preload:function($image){this.img($image.closest('li').next()).img($image.closest('li').prev());},img:function(img){if(img.length){var new_img=new Image(),new_a=this.S('a',img);if(new_a.length){new_img.src=new_a.attr('href');}else{new_img.src=this.S('img',img).attr('src');}}
return this;},caption:function(container,$image){var caption=$image.attr('data-caption');if(caption){container.html(caption).show();}else{container.text('').hide();}
return this;},go:function($ul,direction){var current=this.S('.visible',$ul),target=current[direction]();if(target.length){this.S('img',target).trigger('click',[current,target]).trigger('click.fndtn.clearing',[current,target]).trigger('change.fndtn.clearing');}},shift:function(current,target,callback){var clearing=target.parent(),old_index=this.settings.prev_index||target.index(),direction=this.direction(clearing,current,target),dir=this.rtl?'right':'left',left=parseInt(clearing.css('left'),10),width=target.outerWidth(),skip_shift;var dir_obj={};if(target.index()!==old_index&&!/skip/.test(direction)){if(/left/.test(direction)){this.lock();dir_obj[dir]=left+width;clearing.animate(dir_obj,300,this.unlock());}else if(/right/.test(direction)){this.lock();dir_obj[dir]=left-width;clearing.animate(dir_obj,300,this.unlock());}}else if(/skip/.test(direction)){skip_shift=target.index()-this.settings.up_count;this.lock();if(skip_shift>0){dir_obj[dir]=-(skip_shift*width);clearing.animate(dir_obj,300,this.unlock());}else{dir_obj[dir]=0;clearing.animate(dir_obj,300,this.unlock());}}
callback();},direction:function($el,current,target){var lis=this.S('li',$el),li_width=lis.outerWidth()+(lis.outerWidth()/4),up_count=Math.floor(this.S('.clearing-container').outerWidth()/li_width)-1,target_index=lis.index(target),response;this.settings.up_count=up_count;if(this.adjacent(this.settings.prev_index,target_index)){if((target_index>up_count)&&target_index>this.settings.prev_index){response='right';}else if((target_index>up_count-1)&&target_index<=this.settings.prev_index){response='left';}else{response=false;}}else{response='skip';}
this.settings.prev_index=target_index;return response;},adjacent:function(current_index,target_index){for(var i=target_index+1;i>=target_index-1;i--){if(i===current_index)return true;}
return false;},lock:function(){this.settings.locked=true;},unlock:function(){this.settings.locked=false;},locked:function(){return this.settings.locked;},off:function(){this.S(this.scope).off('.fndtn.clearing');this.S(window).off('.fndtn.clearing');},reflow:function(){this.init();}};}(jQuery,window,window.document));
!function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;(function(){function S(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function T(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function U(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?V.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function C(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=S(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+
s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",RegExp(b),q]);return C(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?D.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=T(a.c,a.i),b=g.a;a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){D.console&&console.log(u&&u.stack||u)}}var D=window,y=["break,continue,do,else,for,if,return,while"],E=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[E,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],N=[E,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],O=[N,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],E=[E,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],P=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],Q=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],R=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,V=/\S/,X=v({keywords:[M,O,E,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",P,Q,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(C([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:R}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:O,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:R}),["cs"]);p(v({keywords:N,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:P,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:Q,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);p(C([],[["str",/^[\S\s]+/]]),["regex"]);var Y=D.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:D.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});return b.innerHTML},prettyPrint:D.prettyPrint=function(a,d){function g(){for(var b=D.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=U(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r={h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()

+function($){"use strict";var OffCanvas=function(element,options){this.$element=$(element)
this.options=$.extend({},OffCanvas.DEFAULTS,options)
this.state=null
this.placement=null
if(this.options.recalc){this.calcClone()
$(window).on('resize',$.proxy(this.recalc,this))}
if(this.options.autohide&&!this.options.modal)
$(document).on('click',$.proxy(this.autohide,this))
if(this.options.toggle)this.toggle()
if(this.options.disablescrolling){this.options.disableScrolling=this.options.disablescrolling
delete this.options.disablescrolling}}
OffCanvas.DEFAULTS={toggle:true,placement:'auto',autohide:true,recalc:true,disableScrolling:true,modal:false}
OffCanvas.prototype.offset=function(){switch(this.placement){case'left':case'right':return this.$element.outerWidth()
case'top':case'bottom':return this.$element.outerHeight()}}
OffCanvas.prototype.calcPlacement=function(){if(this.options.placement!=='auto'){this.placement=this.options.placement
return}
if(!this.$element.hasClass('in')){this.$element.css('visiblity','hidden !important').addClass('in')}
var horizontal=$(window).width()/this.$element.width()
var vertical=$(window).height()/this.$element.height()
var element=this.$element
function ab(a,b){if(element.css(b)==='auto')return a
if(element.css(a)==='auto')return b
var size_a=parseInt(element.css(a),10)
var size_b=parseInt(element.css(b),10)
return size_a>size_b?b:a}
this.placement=horizontal>=vertical?ab('left','right'):ab('top','bottom')
if(this.$element.css('visibility')==='hidden !important'){this.$element.removeClass('in').css('visiblity','')}}
OffCanvas.prototype.opposite=function(placement){switch(placement){case'top':return'bottom'
case'left':return'right'
case'bottom':return'top'
case'right':return'left'}}
OffCanvas.prototype.getCanvasElements=function(){var canvas=this.options.canvas?$(this.options.canvas):this.$element
var fixed_elements=canvas.find('*').filter(function(){return $(this).css('position')==='fixed'}).not(this.options.exclude)
return canvas.add(fixed_elements)}
OffCanvas.prototype.slide=function(elements,offset,callback){if(!$.support.transition){var anim={}
anim[this.placement]="+="+offset
return elements.animate(anim,350,callback)}
var placement=this.placement
var opposite=this.opposite(placement)
elements.each(function(){if($(this).css(placement)!=='auto')
$(this).css(placement,(parseInt($(this).css(placement),10)||0)+offset)
if($(this).css(opposite)!=='auto')
$(this).css(opposite,(parseInt($(this).css(opposite),10)||0)-offset)})
this.$element.one($.support.transition.end,callback).emulateTransitionEnd(350)}
OffCanvas.prototype.disableScrolling=function(){var bodyWidth=$('body').width()
var prop='padding-right'
if($('body').data('offcanvas-style')===undefined){$('body').data('offcanvas-style',$('body').attr('style')||'')}
$('body').css('overflow','hidden')
if($('body').width()>bodyWidth){var padding=parseInt($('body').css(prop),10)+$('body').width()-bodyWidth
setTimeout(function(){$('body').css(prop,padding)},1)}
$('body').on('touchmove.bs',function(e){if(!$(event.target).closest('.offcanvas-sm').length)
e.preventDefault();});}
OffCanvas.prototype.enableScrolling=function(){$('body').off('touchmove.bs');}
OffCanvas.prototype.show=function(){if(this.state)return
var startEvent=$.Event('show.bs.offcanvas')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
this.state='slide-in'
this.calcPlacement();var elements=this.getCanvasElements()
var placement=this.placement
var opposite=this.opposite(placement)
var offset=this.offset()
if(elements.index(this.$element)!==-1){$(this.$element).data('offcanvas-style',$(this.$element).attr('style')||'')
this.$element.css(placement,-1*offset)
this.$element.css(placement);}
elements.addClass('canvas-sliding').each(function(){if($(this).data('offcanvas-style')===undefined)$(this).data('offcanvas-style',$(this).attr('style')||'')
if($(this).css('position')==='static')$(this).css('position','relative')
if(($(this).css(placement)==='auto'||$(this).css(placement)==='0px')&&($(this).css(opposite)==='auto'||$(this).css(opposite)==='0px')){$(this).css(placement,0)}})
if(this.options.disableScrolling)this.disableScrolling()
if(this.options.modal)this.toggleBackdrop()
var complete=function(){if(this.state!='slide-in')return
this.state='slid'
elements.removeClass('canvas-sliding').addClass('canvas-slid')
this.$element.trigger('shown.bs.offcanvas')}
setTimeout($.proxy(function(){this.$element.addClass('in')
this.slide(elements,offset,$.proxy(complete,this))},this),1)}
OffCanvas.prototype.hide=function(fast){if(this.state!=='slid')return
var startEvent=$.Event('hide.bs.offcanvas')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
this.state='slide-out'
var elements=$('.canvas-slid')
var placement=this.placement
var offset=-1*this.offset()
var complete=function(){if(this.state!='slide-out')return
this.state=null
this.placement=null
this.$element.removeClass('in')
elements.removeClass('canvas-sliding')
elements.add(this.$element).add('body').each(function(){$(this).attr('style',$(this).data('offcanvas-style')).removeData('offcanvas-style')})
this.$element.trigger('hidden.bs.offcanvas')}
if(this.options.disableScrolling)this.enableScrolling()
if(this.options.modal)this.toggleBackdrop()
elements.removeClass('canvas-slid').addClass('canvas-sliding')
setTimeout($.proxy(function(){this.slide(elements,offset,$.proxy(complete,this))},this),1)}
OffCanvas.prototype.toggle=function(){if(this.state==='slide-in'||this.state==='slide-out')return
this[this.state==='slid'?'hide':'show']()}
OffCanvas.prototype.toggleBackdrop=function(callback){callback=callback||$.noop;if(this.state=='slide-in'){var doAnimate=$.support.transition;this.$backdrop=$('<div class="modal-backdrop fade" />').insertAfter(this.$element);if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
this.$backdrop.on('click.bs',$.proxy(this.autohide,this))
doAnimate?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()}else if(this.state=='slide-out'&&this.$backdrop){this.$backdrop.removeClass('in');$('body').off('touchmove.bs');var self=this;if($.support.transition){this.$backdrop.one($.support.transition.end,function(){self.$backdrop.remove();callback()
self.$backdrop=null;}).emulateTransitionEnd(150);}else{this.$backdrop.remove();this.$backdrop=null;callback();}}else if(callback){callback()}}
OffCanvas.prototype.calcClone=function(){this.$calcClone=this.$element.clone().html('').addClass('offcanvas-clone').removeClass('in').appendTo($('body'))}
OffCanvas.prototype.recalc=function(){if(this.$calcClone.css('display')==='none'||(this.state!=='slid'&&this.state!=='slide-in'))return
this.state=null
this.placement=null
var elements=this.getCanvasElements()
this.$element.removeClass('in')
elements.removeClass('canvas-slid')
elements.add(this.$element).add('body').each(function(){$(this).attr('style',$(this).data('offcanvas-style')).removeData('offcanvas-style')})}
OffCanvas.prototype.autohide=function(e){if($(e.target).closest(this.$element).length===0)this.hide()}
var old=$.fn.offcanvas
$.fn.offcanvas=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.offcanvas')
var options=$.extend({},OffCanvas.DEFAULTS,$this.data(),typeof option==='object'&&option)
if(!data)$this.data('bs.offcanvas',(data=new OffCanvas(this,options)))
if(typeof option==='string')data[option]()})}
$.fn.offcanvas.Constructor=OffCanvas
$.fn.offcanvas.noConflict=function(){$.fn.offcanvas=old
return this}
$(document).on('click.bs.offcanvas.data-api','[data-toggle=offcanvas]',function(e){var $this=$(this),href
var target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
var $canvas=$(target)
var data=$canvas.data('bs.offcanvas')
var option=data?'toggle':$this.data()
e.stopPropagation()
if(data)data.toggle()
else $canvas.offcanvas(option)})}(window.jQuery);

+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd otransitionend','transition':'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false,$el=this
$(this).one($.support.transition.end,function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.hasClass('alert')?$this:$this.parent()}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one($.support.transition.end,removeElement).emulateTransitionEnd(150):removeElement()}
var old=$.fn.alert
$.fn.alert=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state=state+'Text'
if(!data.resetText)$el.data('resetText',$el[val]())
$el[val](data[state]||this.options[state])
setTimeout($.proxy(function(){if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false
else $parent.find('.active').removeClass('active')}
if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}
if(changed)this.$element.toggleClass('active')}
var old=$.fn.button
$.fn.button=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^=button]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
$btn.button('toggle')
e.preventDefault()})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=this.sliding=this.interval=this.$active=this.$items=null
this.options.pause=='hover'&&this.$element.on('mouseenter',$.proxy(this.pause,this)).on('mouseleave',$.proxy(this.cycle,this))}
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getActiveIndex=function(){this.$active=this.$element.find('.item.active')
this.$items=this.$active.parent().children()
return this.$items.index(this.$active)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getActiveIndex()
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||$active[type]()
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var fallback=type=='next'?'first':'last'
var that=this
if(!$next.length){if(!this.options.wrap)return
$next=this.$element.find('.item')[fallback]()}
if($next.hasClass('active'))return this.sliding=false
var e=$.Event('slide.bs.carousel',{relatedTarget:$next[0],direction:direction})
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
this.$element.one('slid.bs.carousel',function(){var $nextIndicator=$(that.$indicators.children()[that.getActiveIndex()])
$nextIndicator&&$nextIndicator.addClass('active')})}
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one($.support.transition.end,function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger('slid.bs.carousel')},0)}).emulateTransitionEnd($active.css('transition-duration').slice(0,-1)*1000)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger('slid.bs.carousel')}
isCycling&&this.cycle()
return this}
var old=$.fn.carousel
$.fn.carousel=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
$(document).on('click.bs.carousel.data-api','[data-slide], [data-slide-to]',function(e){var $this=$(this),href
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
$target.carousel(options)
if(slideIndex=$this.attr('data-slide-to')){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()})
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
$carousel.carousel($carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.transitioning=null
if(this.options.parent)this.$parent=$(this.options.parent)
if(this.options.toggle)this.toggle()}
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var actives=this.$parent&&this.$parent.find('> .panel > .in')
if(actives&&actives.length){var hasData=actives.data('bs.collapse')
if(hasData&&hasData.transitioning)return
actives.collapse('hide')
hasData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')
[dimension](0)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')
[dimension]('auto')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(350)
[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element
[dimension](this.$element[dimension]())
[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse').removeClass('in')
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(350)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
var old=$.fn.collapse
$.fn.collapse=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&option=='show')option=!option
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle=collapse]',function(e){var $this=$(this),href
var target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
var $target=$(target)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
var parent=$this.attr('data-parent')
var $parent=parent&&$(parent)
if(!data||!data.transitioning){if($parent)$parent.find('[data-toggle=collapse][data-parent="'+parent+'"]').not($this).addClass('collapsed')
$this[$target.hasClass('in')?'addClass':'removeClass']('collapsed')}
$target.collapse(option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle=dropdown]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)
$this.focus()}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27)/.test(e.keyCode))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive||(isActive&&e.keyCode==27)){if(e.which==27)$parent.find(toggle).focus()
return $this.click()}
var desc=' li:not(.divider):visible a'
var $items=$parent.find('[role=menu]'+desc+', [role=listbox]'+desc)
if(!$items.length)return
var index=$items.index($items.filter(':focus'))
if(e.keyCode==38&&index>0)index--
if(e.keyCode==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).focus()}
function clearMenus(e){$(backdrop).remove()
$(toggle).each(function(){var $parent=getParent($(this))
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
var old=$.fn.dropdown
$.fn.dropdown=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle+', [role=menu], [role=listbox]',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$element=$(element)
this.$backdrop=this.isShown=null
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this[!this.isShown?'show':'hide'](_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(document.body)}
that.$element.show().scrollTop(0)
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$element.find('.modal-dialog').one($.support.transition.end,function(){that.$element.focus().trigger(e)}).emulateTransitionEnd(300):that.$element.focus().trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one($.support.transition.end,$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.focus()}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keyup.dismiss.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.removeBackdrop()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()}else if(callback){callback()}}
var old=$.fn.modal
$.fn.modal=function(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.modal(option,this).one('hide',function(){$this.is(':visible')&&$this.focus()})})
$(document).on('show.bs.modal','.modal',function(){$(document.body).addClass('modal-open')}).on('hidden.bs.modal','.modal',function(){$(document.body).removeClass('modal-open')})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null
this.init('tooltip',element,options)}
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type)
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type)
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
if(e.isDefaultPrevented())return
var that=this;var $tip=this.tip()
this.setContent()
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var $parent=this.$element.parent()
var orgPlacement=placement
var docScroll=document.documentElement.scrollTop||document.body.scrollTop
var parentWidth=this.options.container=='body'?window.innerWidth:$parent.outerWidth()
var parentHeight=this.options.container=='body'?window.innerHeight:$parent.outerHeight()
var parentLeft=this.options.container=='body'?0:$parent.offset().left
placement=placement=='bottom'&&pos.top+pos.height+actualHeight-docScroll>parentHeight?'top':placement=='top'&&pos.top-docScroll-actualHeight<0?'bottom':placement=='right'&&pos.right+actualWidth>parentWidth?'left':placement=='left'&&pos.left-actualWidth<parentLeft?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
this.hoverState=null
var complete=function(){that.$element.trigger('shown.bs.'+that.type)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one($.support.transition.end,complete).emulateTransitionEnd(150):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var replace
var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top=offset.top+marginTop
offset.left=offset.left+marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){replace=true
offset.top=offset.top+height-actualHeight}
if(/bottom|top/.test(placement)){var delta=0
if(offset.left<0){delta=offset.left*-2
offset.left=0
$tip.offset(offset)
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight}
this.replaceArrow(delta-width+actualWidth,actualWidth,'left')}else{this.replaceArrow(actualHeight-height,actualHeight,'top')}
if(replace)$tip.offset(offset)}
Tooltip.prototype.replaceArrow=function(delta,dimension,position){this.arrow().css(position,delta?(50*(1-delta/dimension)+'%'):'')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(){var that=this
var $tip=this.tip()
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.trigger('hidden.bs.'+that.type)}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&this.$tip.hasClass('fade')?$tip.one($.support.transition.end,complete).emulateTransitionEnd(150):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function(){var el=this.$element[0]
return $.extend({},(typeof el.getBoundingClientRect=='function')?el.getBoundingClientRect():{width:el.offsetWidth,height:el.offsetHeight},this.$element.offset())}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template)}
Tooltip.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow')}
Tooltip.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=e?$(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type):this
self.tip().hasClass('in')?self.leave(self):self.enter(self)}
Tooltip.prototype.destroy=function(){clearTimeout(this.timeout)
this.hide().$element.off('.'+this.type).removeData('bs.'+this.type)}
var old=$.fn.tooltip
$.fn.tooltip=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content')[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.arrow')}
Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template)
return this.$tip}
var old=$.fn.popover
$.fn.popover=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){var href
var process=$.proxy(this.process,this)
this.$element=$(element).is('body')?$(window):$(element)
this.$body=$('body')
this.$scrollElement=this.$element.on('scroll.bs.scroll-spy.data-api',process)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')+' .nav li > a'
this.offsets=$([])
this.targets=$([])
this.activeTarget=null
this.refresh()
this.process()}
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.refresh=function(){var offsetMethod=this.$element[0]==window?'offset':'position'
this.offsets=$([])
this.targets=$([])
var self=this
var $targets=this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight
var maxScroll=scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(scrollTop>=maxScroll){return activeTarget!=(i=targets.last()[0])&&this.activate(i)}
if(activeTarget&&scrollTop<=offsets[0]){return activeTarget!=(i=targets[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
var old=$.fn.scrollspy
$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
$spy.scrollspy($spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var previous=$ul.find('.active:last a')[0]
var e=$.Event('show.bs.tab',{relatedTarget:previous})
$this.trigger(e)
if(e.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.parent('li'),$ul)
this.activate($target,$target.parent(),function(){$this.trigger({type:'shown.bs.tab',relatedTarget:previous})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&$active.hasClass('fade')
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
element.addClass('active')
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active')}
callback&&callback()}
transition?$active.one($.support.transition.end,next).emulateTransitionEnd(150):next()
$active.removeClass('in')}
var old=$.fn.tab
$.fn.tab=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault()
$(this).tab('show')})}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$window=$(window).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=this.unpin=this.pinnedOffset=null
this.checkPosition()}
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$window.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var scrollHeight=$(document).height()
var scrollTop=this.$window.scrollTop()
var position=this.$element.offset()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
if(this.affixed=='top')position.top+=scrollTop
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&(scrollTop<=offsetTop)?'top':false
if(this.affixed===affix)return
if(this.unpin)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix','affixed')))
if(affix=='bottom'){this.$element.offset({top:scrollHeight-offsetBottom-this.$element.height()})}}
var old=$.fn.affix
$.fn.affix=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom)data.offset.bottom=data.offsetBottom
if(data.offsetTop)data.offset.top=data.offsetTop
$spy.affix(data)})})}(jQuery);+function($){"use strict";var CategorySelector=function(element,options){var $el=$(element),self=this;$('a',$el).click(function(){var $input=$('input',$(this).parent()),checked=$input.val()==1,$li=$(this).closest('li'),updateList={};if($li.data('all')!==undefined){$('li',$el).each(function(){var $li=$(this)
self.changeStatus($li,!checked);})}else{if(checked)
self.changeStatus($('li[data-all]',$el),false);}
updateList[options.updatePartial]='#list';self.changeStatus($li,!checked);$(this).closest('form').request('onCategorySelected',{'update':updateList})
return false;})}
CategorySelector.prototype.changeStatus=function($li,status){$li.toggleClass('checked',status)
$('input',$li).val(status?1:0)}
var old=$.fn.categorySelector
$.fn.categorySelector=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.categorySelector')
var options=$.extend({},$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.categorySelector',(data=new CategorySelector(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.categorySelector.Constructor=CategorySelector
$.fn.categorySelector.noConflict=function(){$.fn.categorySelector=old
return this}
$(document).ready(function(){$('[data-control=category-selector]').categorySelector()})}(window.jQuery);+function($){"use strict";var OptionSelector=function(element,options){var $el=$(element),self=this;$('input',$el).change(function(){var $label=$('label[for="'+$(this).attr('id')+'"]',$el)
$('label',$el).removeClass('selected')
$label.addClass('selected')
var updateList={}
updateList[options.updatePartial]='#list';$(this).closest('form').request(options.updateHandler,{'update':updateList})})}
var old=$.fn.optionSelector
$.fn.optionSelector=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.optionSelector')
var options=$.extend({},$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.optionSelector',(data=new OptionSelector(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.optionSelector.Constructor=OptionSelector
$.fn.optionSelector.noConflict=function(){$.fn.optionSelector=old
return this}
$(document).ready(function(){$('[data-control=option-selector]').optionSelector()})}(window.jQuery);+function($){"use strict";var SortSelector=function(element,options){var $el=$(element),$title=$('a[data-toggle=dropdown]',$el),$input=$('input',$el),label=$el.data('label'),self=this,updateList={};updateList[options.updatePartial]='#list';$('ul.dropdown-menu a',$el).click(function(){$title.html(label+' <span>'+$(this).text()+'</span>')
$title.dropdown('toggle')
$input.val($(this).data('option'))
$(this).closest('form').request('onSortingChanged',{'update':updateList})
return false;})}
var old=$.fn.sortSelector
$.fn.sortSelector=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.sortSelector')
var options=$.extend({},$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.sortSelector',(data=new SortSelector(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.sortSelector.Constructor=SortSelector
$.fn.sortSelector.noConflict=function(){$.fn.sortSelector=old
return this}
$(document).ready(function(){$('[data-control=sort-selector]').sortSelector()})}(window.jQuery);+function($){"use strict";var SearchBox=function(element,options){var self=this;this.$el=$(element)
this.$input=$('input',this.$el)
this.$el.append('<a href="#" class="remove-data">&times;</a>')
this.updateStatus()
this.$input.keyup(function(){self.updateStatus()})
this.$el.on('click','a.remove-data',function(){self.$input.val('')
self.$el.closest('form').submit()
return false})}
SearchBox.prototype.updateStatus=function(){this.$el.toggleClass('has-query',this.$input.val().trim().length>0)}
var old=$.fn.searchBox
$.fn.searchBox=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.searchBox')
var options=$.extend({},$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.searchBox',(data=new SearchBox(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.searchBox.Constructor=SearchBox
$.fn.searchBox.noConflict=function(){$.fn.searchBox=old
return this}
$(document).ready(function(){$('[data-control=search-box]').searchBox()})}(window.jQuery);+function($){"use strict";var ContactFormTrigger=function(element,options){this.$el=$(element);var self=this;this.$el.click(function(){self.showForm()
return false})
if(window.location.hash=='#submit-form')
this.showForm()}
ContactFormTrigger.prototype.showForm=function(){var $form=$('form',this.$el.parent())
$form.removeClass('hidden')
this.$el.addClass('hidden')
setTimeout(function(){$('textarea',$form).focus()},1)}
var old=$.fn.contactFormTrigger
$.fn.contactFormTrigger=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('oc.contactFormTrigger')
var options=$.extend({},$this.data(),typeof option=='object'&&option)
if(!data)$this.data('oc.contactFormTrigger',(data=new ContactFormTrigger(this,options)))
if(typeof option=='string')data[option].call($this)})}
$.fn.contactFormTrigger.Constructor=ContactFormTrigger
$.fn.sortSelector.noConflict=function(){$.fn.contactFormTrigger=old
return this}
$(document).ready(function(){$('[data-control=contact-form-trigger]').contactFormTrigger()})}(window.jQuery);$(document).ready(function(){function updateTileHeight(){var width=$('div.tiles ul li').first().width();$('div.tiles ul li').each(function(){var $tile=$('div.flip-container',this);$tile.height(width);})}
function updateBodyMargin(){$(document.body).css('margin-bottom',$('#footer').outerHeight());}
function updateLayout(){updateTileHeight();updateBodyMargin();}
updateLayout();$(window).on('resize',updateLayout)
if(!Modernizr.touch){$('div.tiles ul li').hover(function(){$(this).addClass('flipped')},function(){$(this).removeClass('flipped')})}else{$('div.tiles ul li').click(function(){if(!$(this).hasClass('flipped')){$('div.tiles ul li').removeClass('flipped')
$(this).addClass('flipped')}else
$(this).removeClass('flipped')})}
var mobile=(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));if(mobile){var $link=$('[data-provider="modal-video"]');$link.attr('href','http://player.vimeo.com/video/79963873?autoplay=1');$link.removeAttr('data-provider');$link.removeAttr('target')}
$(document).on('click','[data-provider="modal-video"]',function(e){e.preventDefault();var $target=$(e.currentTarget),videoSrc=$target.data('video-embed'),$modal=$($target.data('target'))
$modal.find('iframe').attr('src',videoSrc).end().on('hide.bs.modal',function(){$(this).off('hide.bs.modal').find('iframe').attr('src','');}).modal('show')});$(".chosen-select").chosen();$('form').find('input[type=text],input[type=email],textarea,select').filter(':not(.no-auto-focus)').filter(':not(#topicContent)').filter(':visible:first').focus()
$('[data-tooltip]').tooltip({animation:false})})
$(document).foundation();function disqus_config(){this.callbacks.onReady.push(function(){$(window).trigger('resize')});}
$(document).render(function(){$('div.forum-post .text pre').addClass('prettyprint')
prettyPrint()})