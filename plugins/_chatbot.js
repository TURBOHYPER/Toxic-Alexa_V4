(function(_0x5b11ed,_0x3b2536){const _0xf64207=_0x808b,_0x33dc18=_0x5b11ed();while(!![]){try{const _0x3ebe13=parseInt(_0xf64207(0x14b))/0x1+-parseInt(_0xf64207(0x12b))/0x2+-parseInt(_0xf64207(0x148))/0x3+-parseInt(_0xf64207(0x12f))/0x4+-parseInt(_0xf64207(0x143))/0x5*(parseInt(_0xf64207(0x130))/0x6)+parseInt(_0xf64207(0x149))/0x7+parseInt(_0xf64207(0x12d))/0x8*(parseInt(_0xf64207(0x128))/0x9);if(_0x3ebe13===_0x3b2536)break;else _0x33dc18['push'](_0x33dc18['shift']());}catch(_0x4fed48){_0x33dc18['push'](_0x33dc18['shift']());}}}(_0x4b38,0x7f79b));function _0x808b(_0x2e3b8e,_0x3a7990){const _0x4b38bd=_0x4b38();return _0x808b=function(_0x808b18,_0x197612){_0x808b18=_0x808b18-0x125;let _0x535c59=_0x4b38bd[_0x808b18];return _0x535c59;},_0x808b(_0x2e3b8e,_0x3a7990);}function _0x4b38(){const _0x473d51=['32586ohAeRy','candidates','isBaileys','fromMe','data','https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDJC5a882ruaC4XL6ejY1yhgRkN-JNQKg8','isGroup','message','replace','protocolMessage','No\x20suitable\x20response\x20from\x20the\x20API.','chatbot','users','banned','chats','mtype','chat','Toxic\x20Alexa','getName','505pjqQCj','reply','pollUpdateMessage','content','msg','2874981eoqSCt','5741120JHMbIo','quoted','267930xTHtsV','log','parts','length','963JgruqD','key','sender','441576AKgACD','isBanned','98544etPIOo','text','625324JoDkTb'];_0x4b38=function(){return _0x473d51;};return _0x4b38();}import _0x6f4289 from'node-fetch';import _0x50bffa from'axios';export async function before(_0x35b312,{conn:_0x418d0b}){const _0x34e45f=_0x808b;try{if(_0x35b312[_0x34e45f(0x132)]&&_0x35b312[_0x34e45f(0x133)])return!![];if(!_0x35b312[_0x34e45f(0x136)])return![];const _0x129dab=global['db'][_0x34e45f(0x134)]['users'],_0x24fc3c=global['db']['data'][_0x34e45f(0x13e)],_0x1625c9=global['db'][_0x34e45f(0x134)][_0x34e45f(0x13c)][_0x35b312['sender']],_0x1419c7=global['db'][_0x34e45f(0x134)][_0x34e45f(0x13e)][_0x35b312[_0x34e45f(0x140)]];let _0x204be7=_0x418d0b[_0x34e45f(0x142)](_0x35b312[_0x34e45f(0x12a)]);if(_0x35b312['mtype']===_0x34e45f(0x139)||_0x35b312[_0x34e45f(0x13f)]===_0x34e45f(0x145)||_0x35b312[_0x34e45f(0x13f)]==='reactionMessage'||_0x35b312['mtype']==='stickerMessage')return;if(!_0x35b312[_0x34e45f(0x147)]||!_0x35b312[_0x34e45f(0x137)]||_0x35b312[_0x34e45f(0x129)]['remoteJid']!==_0x35b312[_0x34e45f(0x140)]||_0x129dab[_0x35b312[_0x34e45f(0x12a)]][_0x34e45f(0x13d)]||_0x24fc3c[_0x35b312[_0x34e45f(0x140)]][_0x34e45f(0x12c)])return;if(!_0x35b312['quoted']||!_0x35b312[_0x34e45f(0x14a)][_0x34e45f(0x132)])return;if(!_0x1419c7[_0x34e45f(0x13b)])return!![];const _0x284de2=encodeURIComponent(_0x35b312[_0x34e45f(0x12e)]);console[_0x34e45f(0x125)](_0x284de2);const _0x2fee8d=await _0x50bffa['post'](_0x34e45f(0x135),{'contents':[{'parts':[{'text':_0x284de2}]}]}),_0x17c00d=_0x2fee8d[_0x34e45f(0x134)];if(_0x17c00d['candidates']&&_0x17c00d['candidates'][_0x34e45f(0x127)]>0x0){const _0x219a11=_0x17c00d[_0x34e45f(0x131)][0x0],_0x3110a7=_0x219a11[_0x34e45f(0x146)];let _0x3be677=_0x3110a7[_0x34e45f(0x126)][0x0][_0x34e45f(0x12e)];_0x3be677&&(_0x3be677=_0x3be677[_0x34e45f(0x138)](/Google/gi,_0x34e45f(0x141)),_0x3be677=_0x3be677[_0x34e45f(0x138)](/a large language model/gi,botname),_0x35b312[_0x34e45f(0x144)](_0x3be677));}else _0x35b312[_0x34e45f(0x144)](_0x34e45f(0x13a));}catch(_0x3b2b24){console[_0x34e45f(0x125)](_0x3b2b24);}}