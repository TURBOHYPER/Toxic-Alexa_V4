const _0x3cd6b7=_0x44f3;(function(_0x11b139,_0x4e4b36){const _0x49b67f=_0x44f3,_0x585c8=_0x11b139();while(!![]){try{const _0x10c6c3=-parseInt(_0x49b67f(0x216))/0x1+-parseInt(_0x49b67f(0x1f7))/0x2*(parseInt(_0x49b67f(0x1fd))/0x3)+-parseInt(_0x49b67f(0x206))/0x4+-parseInt(_0x49b67f(0x211))/0x5*(parseInt(_0x49b67f(0x1f0))/0x6)+parseInt(_0x49b67f(0x209))/0x7*(-parseInt(_0x49b67f(0x203))/0x8)+-parseInt(_0x49b67f(0x208))/0x9+-parseInt(_0x49b67f(0x1ef))/0xa*(-parseInt(_0x49b67f(0x200))/0xb);if(_0x10c6c3===_0x4e4b36)break;else _0x585c8['push'](_0x585c8['shift']());}catch(_0x548774){_0x585c8['push'](_0x585c8['shift']());}}}(_0x43a1,0xef145));import{promises}from'fs';import{join}from'path';function _0x44f3(_0x38ce4d,_0x320240){const _0x43a1d6=_0x43a1();return _0x44f3=function(_0x44f34b,_0x40d7a3){_0x44f34b=_0x44f34b-0x1ef;let _0x47b633=_0x43a1d6[_0x44f34b];return _0x47b633;},_0x44f3(_0x38ce4d,_0x320240);}import _0x671165 from'axios';function _0x43a1(){const _0x1a0d2c=['4521ZaXNjc','login','owner','7800072MAbstx','git','help','2705624JvozLR','\x0a📂\x20Repository\x20Name:\x20','6322365mOrmNR','7vVwnVw','sender','get','forks_count','An\x20error\x20occurred\x20while\x20fetching\x20repository\x20information.','\x0a📝\x20Description:\x20','script','\x0a🍴\x20Forks:\x20','245MkzTrV','error','relayMessage','data','reply','733537XGOhxN','tags','trim','130850oeqWbU','121962FCPsvI','main','Unable\x20to\x20fetch\x20repository\x20information.','repo','\x0a⭐\x20Stars:\x20','name','description','4tYjSPP','chat','status','stargazers_count','command','https://github.com/TURBOHYPER/Toxic-Alexa','472809knluws','https://api.github.com/repos/','INR'];_0x43a1=function(){return _0x1a0d2c;};return _0x43a1();}let handler=async function(_0x42af1f,{conn:_0xbf6671,__dirname:_0x4fddd6}){const _0x3ab11a=_0x44f3,_0x28dc8d=_0x3ab11a(0x1fc);try{const [,_0x61512a,_0x56c8e2]=_0x28dc8d['match'](/github\.com\/([^/]+)\/([^/]+)/),_0x5dd63f=await _0x671165[_0x3ab11a(0x20b)](_0x3ab11a(0x1fe)+_0x61512a+'/'+_0x56c8e2);if(_0x5dd63f[_0x3ab11a(0x1f9)]===0xc8){const _0x21749c=_0x5dd63f[_0x3ab11a(0x214)],_0x581be5=(_0x3ab11a(0x207)+_0x21749c[_0x3ab11a(0x1f5)]+_0x3ab11a(0x20e)+_0x21749c[_0x3ab11a(0x1f6)]+'\x0a👤\x20Owner:\x20'+_0x21749c[_0x3ab11a(0x202)][_0x3ab11a(0x201)]+_0x3ab11a(0x1f4)+_0x21749c[_0x3ab11a(0x1fa)]+_0x3ab11a(0x210)+_0x21749c[_0x3ab11a(0x20c)]+'\x0a🌐\x20URL:\x20'+_0x21749c['html_url']+'\x0a\x20\x20\x20\x20\x20\x20')[_0x3ab11a(0x218)]();await _0xbf6671[_0x3ab11a(0x213)](_0x42af1f[_0x3ab11a(0x1f8)],{'requestPaymentMessage':{'currencyCodeIso4217':_0x3ab11a(0x1ff),'amount1000':0x42c1d80,'requestFrom':_0x42af1f[_0x3ab11a(0x20a)],'noteMessage':{'extendedTextMessage':{'text':_0x581be5,'contextInfo':{'externalAdReply':{'showAdAttribution':!![]}}}}}},{});}else await _0xbf6671[_0x3ab11a(0x215)](_0x42af1f['chat'],_0x3ab11a(0x1f2),_0x42af1f);}catch(_0x3c7452){console[_0x3ab11a(0x212)](_0x3c7452),await _0xbf6671[_0x3ab11a(0x215)](_0x42af1f['chat'],_0x3ab11a(0x20d),_0x42af1f);}};handler[_0x3cd6b7(0x205)]=[_0x3cd6b7(0x20f)],handler[_0x3cd6b7(0x217)]=[_0x3cd6b7(0x1f1)],handler[_0x3cd6b7(0x1fb)]=['sc',_0x3cd6b7(0x1f3),_0x3cd6b7(0x20f),_0x3cd6b7(0x204)];export default handler;