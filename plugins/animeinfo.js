function _0x4aa3(_0x5f3591,_0x56be69){const _0x5a5397=_0x5a53();return _0x4aa3=function(_0x4aa31b,_0x2bf027){_0x4aa31b=_0x4aa31b-0xbd;let _0x4cae6b=_0x5a5397[_0x4aa31b];return _0x4cae6b;},_0x4aa3(_0x5f3591,_0x56be69);}(function(_0x26134c,_0x5c3be6){const _0x59da9a=_0x4aa3,_0x5da295=_0x26134c();while(!![]){try{const _0x3ad061=parseInt(_0x59da9a(0xe1))/0x1*(parseInt(_0x59da9a(0xc0))/0x2)+parseInt(_0x59da9a(0xcd))/0x3+-parseInt(_0x59da9a(0xcf))/0x4+-parseInt(_0x59da9a(0xd9))/0x5*(-parseInt(_0x59da9a(0xd7))/0x6)+parseInt(_0x59da9a(0xca))/0x7+parseInt(_0x59da9a(0xde))/0x8*(-parseInt(_0x59da9a(0xd0))/0x9)+-parseInt(_0x59da9a(0xc9))/0xa;if(_0x3ad061===_0x5c3be6)break;else _0x5da295['push'](_0x5da295['shift']());}catch(_0x37432e){_0x5da295['push'](_0x5da295['shift']());}}}(_0x5a53,0xec81c));function _0x5a53(){const _0x24f706=['135715BGLBiy','\x0a💫\x20•\x20*Released:*\x20','searchAnime','\x0a🌐\x20•\x20*URL:*\x20','\x0a🎗\x20•\x20*Finished:*\x20','96aQtEuw','\x0a♦\x20•\x20*Trailer:*\x20','\x0a🍥\x20•\x20*Total\x20Episodes:*\x20','1RimFMW','\x0a🎋\x20•\x20*Format:*\x20','reply','\x0a🎏\x20•\x20*Favorites:*\x20','jpg','type','synopsis','\x0a🎐\x20•\x20*Popularity:*\x20','status','error.jpg','\x0a🎇\x20•\x20*Rating:*\x20','1423486pKnRyT','toUpperCase','\x0a🏅\x20•\x20*Rank:*\x20','sendFile','source','duration','rating','background','chat','4365950lQzPHv','10889340TKVNxk','\x0a🎀\x20•\x20*Title:*\x20','url','378399AqTfhg','\x0a📈\x20•\x20*Status:*\x20','3018448zeuAHz','1172673dMGRHv','rank','\x0a🎈\x20•\x20*Duration:\x20','*[❗]\x20ERROR,\x20please\x20try\x20again.*','trailer','images','text','294vRZjmE','aired'];_0x5a53=function(){return _0x24f706;};return _0x5a53();}import{translate}from'@vitalets/google-translate-api';import{Anime}from'@shineiichijo/marika';const client=new Anime();let handler=async(_0x9bf80,{conn:_0x1236cf,text:_0x3c0873,usedPrefix:_0x591e52})=>{const _0x5c53c7=_0x4aa3;if(!_0x3c0873)return _0x9bf80[_0x5c53c7(0xe3)]('*[❗]\x20Please\x20enter\x20the\x20name\x20of\x20an\x20anime\x20to\x20search\x20for.*');try{let _0x2a42ee=await client[_0x5c53c7(0xdb)](_0x3c0873),_0x2bd738=_0x2a42ee['data'][0x0],_0x161da2=await translate(''+_0x2bd738[_0x5c53c7(0xc7)],{'to':'en','autoCorrect':!![]}),_0x32bd77=await translate(''+_0x2bd738[_0x5c53c7(0xe7)],{'to':'hi','autoCorrect':!![]}),_0x3ed111=_0x5c53c7(0xcb)+_0x2bd738['title']+_0x5c53c7(0xe2)+_0x2bd738[_0x5c53c7(0xe6)]+_0x5c53c7(0xce)+_0x2bd738[_0x5c53c7(0xbd)]['toUpperCase']()['replace'](/\_/g,'\x20')+_0x5c53c7(0xe0)+_0x2bd738['episodes']+_0x5c53c7(0xd2)+_0x2bd738[_0x5c53c7(0xc5)]+'*\x0a✨\x20•\x20*Based\x20on:*\x20'+_0x2bd738[_0x5c53c7(0xc4)][_0x5c53c7(0xc1)]()+_0x5c53c7(0xda)+_0x2bd738[_0x5c53c7(0xd8)]['from']+_0x5c53c7(0xdd)+_0x2bd738['aired']['to']+_0x5c53c7(0xe8)+_0x2bd738['popularity']+_0x5c53c7(0xe4)+_0x2bd738['favorites']+_0x5c53c7(0xbf)+_0x2bd738[_0x5c53c7(0xc6)]+_0x5c53c7(0xc2)+_0x2bd738[_0x5c53c7(0xd1)]+_0x5c53c7(0xdf)+_0x2bd738[_0x5c53c7(0xd4)]['url']+_0x5c53c7(0xdc)+_0x2bd738[_0x5c53c7(0xcc)]+'\x0a🎆\x20•\x20*Background:*\x20'+_0x161da2[_0x5c53c7(0xd6)];_0x1236cf[_0x5c53c7(0xc3)](_0x9bf80[_0x5c53c7(0xc8)],_0x2bd738[_0x5c53c7(0xd5)][_0x5c53c7(0xe5)]['image_url'],_0x5c53c7(0xbe),_0x3ed111,_0x9bf80);}catch{throw _0x5c53c7(0xd3);}};handler['help']=['anime'],handler['tags']=['anime'],handler['command']=/^(anime|animeinfo)$/i;export default handler;