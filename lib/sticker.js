const _0x5d1c16=_0xd325;(function(_0x38dd3c,_0x49c4a0){const _0x28d27d=_0xd325,_0x5c7f1b=_0x38dd3c();while(!![]){try{const _0x5ead2c=-parseInt(_0x28d27d(0xd7))/0x1+-parseInt(_0x28d27d(0xbc))/0x2+-parseInt(_0x28d27d(0xc3))/0x3+-parseInt(_0x28d27d(0xbd))/0x4+parseInt(_0x28d27d(0xcf))/0x5+-parseInt(_0x28d27d(0xac))/0x6+parseInt(_0x28d27d(0xa2))/0x7*(parseInt(_0x28d27d(0xc4))/0x8);if(_0x5ead2c===_0x49c4a0)break;else _0x5c7f1b['push'](_0x5c7f1b['shift']());}catch(_0x58d132){_0x5c7f1b['push'](_0x5c7f1b['shift']());}}}(_0x6875,0x6e2e6));import{dirname}from'path';import{fileURLToPath}from'url';import*as _0x43ce17 from'fs';import*as _0x2a428c from'path';import*as _0xb72539 from'crypto';import{ffmpeg}from'./converter.js';import _0x4c2abf from'fluent-ffmpeg';import{spawn}from'child_process';import _0x299c24 from'./uploadFile.js';import _0x5f129c from'./uploadImage.js';import{fileTypeFromBuffer}from'file-type';import _0xee09e2 from'node-webpmux';import _0x34d970 from'node-fetch';const __dirname=dirname(fileURLToPath(import.meta['url'])),tmp=_0x2a428c[_0x5d1c16(0xa8)](__dirname,_0x5d1c16(0xa9));function sticker2(_0x220eae,_0x3462f6){return new Promise(async(_0x4e768a,_0x5690fa)=>{const _0x57226c=_0xd325;try{if(_0x3462f6){let _0x2c291c=await _0x34d970(_0x3462f6);if(_0x2c291c[_0x57226c(0xb6)]!==0xc8)throw await _0x2c291c['text']();_0x220eae=await _0x2c291c[_0x57226c(0xcd)]();}let _0xe101ac=_0x2a428c[_0x57226c(0xa8)](tmp,+new Date()+_0x57226c(0xbf));await _0x43ce17['promises']['writeFile'](_0xe101ac,_0x220eae);let _0x45e818=spawn(_0x57226c(0xd5),['-y','-i',_0xe101ac,_0x57226c(0xd1),_0x57226c(0xd9),'-f',_0x57226c(0xc7),'-']);_0x45e818['on'](_0x57226c(0x9a),_0x5690fa),_0x45e818['on']('close',async()=>{const _0xda489=_0x57226c;await _0x43ce17[_0xda489(0xb0)]['unlink'](_0xe101ac);});let _0x4eb77f=[];const [_0xab7006,..._0x481845]=[...module[_0x57226c(0xdc)][_0x57226c(0xa4)]['gm']?['gm']:module[_0x57226c(0xdc)][_0x57226c(0xc8)]?[_0x57226c(0xc8)]:[],_0x57226c(0xd4),_0x57226c(0xba),_0x57226c(0xb2)];let _0x534339=spawn(_0xab7006,_0x481845);_0x534339['on'](_0x57226c(0x9a),_0x1f947b=>conn['reply'](m['chat'],util[_0x57226c(0xc1)](_0x1f947b),m)),_0x534339[_0x57226c(0xa3)]['on'](_0x57226c(0xae),_0x2e7927=>_0x4eb77f[_0x57226c(0xbe)](_0x2e7927)),_0x45e818[_0x57226c(0xa3)][_0x57226c(0xd2)](_0x534339[_0x57226c(0xa1)]),_0x534339['on'](_0x57226c(0x99),()=>{const _0x1071cf=_0x57226c;_0x4e768a(Buffer[_0x1071cf(0xb8)](_0x4eb77f));});}catch(_0x3df7fa){_0x5690fa(_0x3df7fa);}});}function _0xd325(_0x206124,_0x44ef89){const _0x687563=_0x6875();return _0xd325=function(_0xd325f0,_0x5e2a7b){_0xd325f0=_0xd325f0-0x97;let _0xcf9478=_0x687563[_0xd325f0];return _0xcf9478;},_0xd325(_0x206124,_0x44ef89);}async function sticker3(_0x2ff019,_0x2f0514,_0x5acb51,_0xab1150){const _0x408169=_0x5d1c16;_0x2f0514=_0x2f0514?_0x2f0514:await _0x299c24(_0x2ff019);let _0xab13ff=await _0x34d970(_0x408169(0xb7)+new URLSearchParams(Object[_0x408169(0xab)]({'url':_0x2f0514,'packname':_0x5acb51,'author':_0xab1150})));return await _0xab13ff[_0x408169(0xcd)]();}function _0x6875(){const _0xfa72d0=['stdin','25991kBaAlY','stdout','support','ext','inputFormat','save','join','../tmp','mime','entries','166224bFVXgQ','toBuffer','data','length','promises','text','webp:-','bin','toString','end','status','https://api.xteam.xyz/sticker/wm?','concat','stringify','png:-','writeFile','552840CvMVAl','2661588UDihNa','push','.jpeg','-vcodec','format','WEBP','1624161SvMcEd','4768vDHtYx','test','wa-sticker-formatter','png','magick','ffmpegWebp','webp','includes','.webp','buffer','default','2587260ZYdvpR','../tmp/','-vf','pipe','filter','convert','ffmpeg','randomBytes','768190gdqkhK','hex','scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1','utf8','writeUIntLE','exports','unlink','input','html','exit','error','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','addOutputOptions','libwebp','exif','toFormat','from'];_0x6875=function(){return _0xfa72d0;};return _0x6875();}async function sticker4(_0x2ea5de,_0x1386e1){const _0x4330e8=_0x5d1c16;if(_0x1386e1){let _0xafcb99=await _0x34d970(_0x1386e1);if(_0xafcb99[_0x4330e8(0xb6)]!==0xc8)throw await _0xafcb99[_0x4330e8(0xb1)]();_0x2ea5de=await _0xafcb99['buffer']();}return await ffmpeg(_0x2ea5de,[_0x4330e8(0xd1),_0x4330e8(0xd9)],'jpeg',_0x4330e8(0xca));}async function sticker5(_0x2f089d,_0x561a62,_0x17b826,_0x2f651d,_0x2c39b6=[''],_0x19725e={}){const _0x270412=_0x5d1c16,{Sticker:_0x2ee769}=await import(_0x270412(0xc6)),_0x4b482a={'type':_0x270412(0xce),'pack':_0x17b826,'author':_0x2f651d,'categories':_0x2c39b6,..._0x19725e};return new _0x2ee769(_0x2f089d?_0x2f089d:_0x561a62,_0x4b482a)[_0x270412(0xad)]();}function sticker6(_0x398169,_0x1490cf){return new Promise(async(_0x350405,_0x8d0a30)=>{const _0x52e1cd=_0xd325;if(_0x1490cf){let _0x5b1d9a=await _0x34d970(_0x1490cf);if(_0x5b1d9a[_0x52e1cd(0xb6)]!==0xc8)throw await _0x5b1d9a[_0x52e1cd(0xb1)]();_0x398169=await _0x5b1d9a[_0x52e1cd(0xcd)]();}const _0xba2310=await fileTypeFromBuffer(_0x398169)||{'mime':'application/octet-stream','ext':'bin'};if(_0xba2310[_0x52e1cd(0xa5)]==_0x52e1cd(0xb3))_0x8d0a30(_0x398169);const _0xcc7df=_0x2a428c[_0x52e1cd(0xa8)](__dirname,_0x52e1cd(0xd0)+ +new Date()+'.'+_0xba2310['ext']),_0x28bb04=_0x2a428c['join'](_0xcc7df+_0x52e1cd(0xcc));await _0x43ce17['promises'][_0x52e1cd(0xbb)](_0xcc7df,_0x398169);let _0x1cf6ce=/video/i[_0x52e1cd(0xc5)](_0xba2310[_0x52e1cd(0xaa)])?_0x4c2abf(_0xcc7df)[_0x52e1cd(0xa6)](_0xba2310[_0x52e1cd(0xa5)]):_0x4c2abf(_0xcc7df)[_0x52e1cd(0x97)](_0xcc7df);_0x1cf6ce['on'](_0x52e1cd(0x9a),function(_0x18488c){const _0x91c1d8=_0x52e1cd;console[_0x91c1d8(0x9a)](_0x18488c),_0x43ce17['promises']['unlink'](_0xcc7df),_0x8d0a30(_0x398169);})['on'](_0x52e1cd(0xb5),async function(){const _0x2a8b40=_0x52e1cd;_0x43ce17['promises'][_0x2a8b40(0xdd)](_0xcc7df),_0x350405(await _0x43ce17['promises']['readFile'](_0x28bb04));})[_0x52e1cd(0x9c)]([_0x52e1cd(0xc0),_0x52e1cd(0x9d),_0x52e1cd(0xd1),_0x52e1cd(0x9b)])[_0x52e1cd(0x9f)]('webp')[_0x52e1cd(0xa7)](_0x28bb04);});}async function addExif(_0x498f04,_0x2cdc82,_0x57309b,_0x2d46dd=[''],_0x2de156={}){const _0x19c857=_0x5d1c16,_0x1ca80b=new _0xee09e2['Image'](),_0x2c8467=_0xb72539[_0x19c857(0xd6)](0x20)[_0x19c857(0xb4)](_0x19c857(0xd8)),_0x46e7d8={'sticker-pack-id':_0x2c8467,'sticker-pack-name':_0x2cdc82,'sticker-pack-publisher':_0x57309b,'emojis':_0x2d46dd,..._0x2de156};let _0x5e498a=Buffer[_0x19c857(0xa0)]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x519977=Buffer['from'](JSON[_0x19c857(0xb9)](_0x46e7d8),_0x19c857(0xda)),_0x140d52=Buffer['concat']([_0x5e498a,_0x519977]);return _0x140d52[_0x19c857(0xdb)](_0x519977[_0x19c857(0xaf)],0xe,0x4),await _0x1ca80b['load'](_0x498f04),_0x1ca80b[_0x19c857(0x9e)]=_0x140d52,await _0x1ca80b['save'](null);}async function sticker(_0x33cfd1,_0x47efa9,..._0x259d71){const _0x52253b=_0x5d1c16;let _0x454921,_0x3f801f;for(let _0x41dac6 of[sticker3,global[_0x52253b(0xa4)][_0x52253b(0xd5)]&&sticker6,sticker5,global[_0x52253b(0xa4)][_0x52253b(0xd5)]&&global[_0x52253b(0xa4)][_0x52253b(0xc9)]&&sticker4,global['support'][_0x52253b(0xd5)]&&(global[_0x52253b(0xa4)][_0x52253b(0xd4)]||global['support'][_0x52253b(0xc8)]||global[_0x52253b(0xa4)]['gm'])&&sticker2][_0x52253b(0xd3)](_0xa0c4c0=>_0xa0c4c0)){try{_0x3f801f=await _0x41dac6(_0x33cfd1,_0x47efa9,..._0x259d71);if(_0x3f801f[_0x52253b(0xcb)](_0x52253b(0x98)))continue;if(_0x3f801f[_0x52253b(0xcb)](_0x52253b(0xc2)))try{return await addExif(_0x3f801f,..._0x259d71);}catch(_0x29048d){return console[_0x52253b(0x9a)](_0x29048d),_0x3f801f;}throw _0x3f801f['toString']();}catch(_0x503f3f){_0x454921=_0x503f3f;continue;}}return console[_0x52253b(0x9a)](_0x454921),_0x454921;}const support={'ffmpeg':!![],'ffprobe':!![],'ffmpegWebp':!![],'convert':!![],'magick':![],'gm':![],'find':![]};export{sticker,sticker2,sticker3,sticker4,sticker6,addExif,support};