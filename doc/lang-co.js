(function(){var a,b,c,d,e;a=function(a,b,c){var d,e,f;for(e=0,f=b.length;e<f;++e)d=b[e],d.length<4&&d.splice(2,0,0);return PR.registerLangHandler(PR.createSimpleLexer(b,c),[a])},b="(?:[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*)",c="(?![$\\w\\x7f-\\uffff])",a("co",[["str",/^'(?:''[\S\s]*?''|[^\\']*(?:\\.[^\\']*)*)'/,"'"],["lang-co-qq",/(^"(?:""[\S\s]*?""|[^\\"]*(?:\\.[^\\"]*)*)")/,'"'],["lang-co-qr",/(^\/{3}[\S\s]*?\/{3}(?:\?|[imgy]{0,4}))/,"/"],["lang-co-at",RegExp("(^@@?"+b+"?)"),"@"],["com",/^#.*/,"#"],["typ",/^(?:0x[\da-f]+|[1-9]\d?r[\da-z]+|(?:\d+(?:\.\d+)?)(?:e[+-]?\d+)?[a-z_]*)/i,"0123456789"],["lang-js",/^`([^\\`]*(?:\\.[^\\`]*)*)`/,"`"]],[["str",/^\\\S[^\s,;)}\]]*/],["com",/^\/\*[\S\s]*\*\//],["pln",RegExp("^(?:\\.{3}|(?:[?~]?\\.(?:\\s*(?:[-+*/%&|^:]|>>>?|<<)?=)?\\s*|[)}\\]]|::)"+b+"?|"+b+"[^\\n\\S]*:(?!:))")],["kwd",RegExp("^(?:t(?:ry|h(?:row|en)|ypeof)|f(?:or(?:[^\\n\\S]+(?:own|ever))?|inally|unction)|n(?:ew|ot)|c(?:ontinue|a(?:se|tch)|lass)|i(?:[fs]|n(?:stanceof)?|mport(?:[^\\n\\S]+all)?)|e(?:lse|xtends)|d(?:e(?:fault|lete|bugger)|o)|un(?:less|til)|o[fr]|return|break|while|switch|and)"+c)],["typ",RegExp("^(?:true|false|null|void)"+c)],["ctx",RegExp("^(?:t(?:h(?:is|at)|o|il)|f(?:rom|allthrough)|it|arguments|eval|super|by)"+c)],["glb",RegExp("^(?:Array|Boolean|Date|Error|Function|JSON|Math|Number|Object|RegExp|S(?:tring|yntaxError)|TypeError|is(?:NaN|Finite)|parse(?:Int|Float)|(?:en|de)codeURI(?:Component)?)"+c)],["var",RegExp("^"+b)],["str",/^<\[[\S\s]*?]>/],["lang-co-r",/^[^\/](\/(?![\s\/])[^[\/\n\\]*(?:(?:\\.|\[[^\]\n\\]*(?:\\.[^\]\n\\]*)*\])[^[\/\n\\]*)*\/[imgy]{0,4})(?!\d)/]]),d=["lang-co",/^#({[\S\s]*?})/,"#"],e=["lit",/^[\S\s]+?/],a("co-qq",[d],[["str",/^[\S\s]+?/]]),a("co-qr",[d],[["com",/^\s#(?!{).*/],e]),a("co-r",[],[e]),a("co-at",[["ctx",/^@+/,"@"]],[])}).call(this)