function _0x4b1a(_0x4718f8,_0x52a725){const _0x475be6=_0x475b();return _0x4b1a=function(_0x4b1a39,_0xa00d9d){_0x4b1a39=_0x4b1a39-0x174;let _0x23c3d8=_0x475be6[_0x4b1a39];return _0x23c3d8;},_0x4b1a(_0x4718f8,_0x52a725);}(function(_0x2c40be,_0x4800cf){const _0x2a53be=_0x4b1a,_0x1e7a04=_0x2c40be();while(!![]){try{const _0x51f00c=-parseInt(_0x2a53be(0x175))/0x1+-parseInt(_0x2a53be(0x186))/0x2+-parseInt(_0x2a53be(0x174))/0x3+parseInt(_0x2a53be(0x17d))/0x4*(-parseInt(_0x2a53be(0x182))/0x5)+parseInt(_0x2a53be(0x189))/0x6*(-parseInt(_0x2a53be(0x183))/0x7)+-parseInt(_0x2a53be(0x177))/0x8+parseInt(_0x2a53be(0x17f))/0x9;if(_0x51f00c===_0x4800cf)break;else _0x1e7a04['push'](_0x1e7a04['shift']());}catch(_0x129c9f){_0x1e7a04['push'](_0x1e7a04['shift']());}}}(_0x475b,0x21094));import _0x126651 from'node-fetch';import{FormData,Blob}from'formdata-node';import{fileTypeFromBuffer}from'file-type';const fileIO=async _0x353858=>{const _0x5a0423=_0x4b1a,{ext:_0x1a621d,mime:_0x5c5082}=await fileTypeFromBuffer(_0x353858)||{};let _0x3f5d0b=new FormData();const _0x3e3266=new Blob([_0x353858[_0x5a0423(0x17c)]()],{'type':_0x5c5082});_0x3f5d0b['append'](_0x5a0423(0x17e),_0x3e3266,_0x5a0423(0x17a)+_0x1a621d);let _0x7389a6=await _0x126651(_0x5a0423(0x179),{'method':_0x5a0423(0x187),'body':_0x3f5d0b}),_0x191c2b=await _0x7389a6['json']();if(!_0x191c2b[_0x5a0423(0x176)])throw _0x191c2b;return _0x191c2b['link'];},RESTfulAPI=async _0x5ce745=>{const _0x10ad61=_0x4b1a;let _0x4fbd24=new FormData(),_0x273dc1=_0x5ce745;if(!Array[_0x10ad61(0x17b)](_0x5ce745))_0x273dc1=[_0x5ce745];for(let _0x11b1e4 of _0x273dc1){const _0x5068d7=new Blob([_0x11b1e4[_0x10ad61(0x17c)]()]);_0x4fbd24['append'](_0x10ad61(0x17e),_0x5068d7);}let _0x3b978b=await _0x126651(_0x10ad61(0x188),{'method':_0x10ad61(0x187),'body':_0x4fbd24}),_0x4e9611=await _0x3b978b[_0x10ad61(0x185)]();try{_0x4e9611=JSON[_0x10ad61(0x184)](_0x4e9611);if(!Array[_0x10ad61(0x17b)](_0x5ce745))return _0x4e9611[_0x10ad61(0x180)][0x0][_0x10ad61(0x178)];return _0x4e9611['files'][_0x10ad61(0x181)](_0x1ab35a=>_0x1ab35a[_0x10ad61(0x178)]);}catch(_0x495f1e){throw _0x4e9611;}};function _0x475b(){const _0x5be9ee=['tmp.','isArray','toArrayBuffer','2524GaOKmu','file','9086391eGLLZF','files','map','695pYfLdj','7IOwPRA','parse','text','178212guYcje','POST','https://storage.restfulapi.my.id/upload','111102ARvArd','659532hAezxV','210728UJqtdI','success','1987032WxBzSr','url','https://file.io/?expires=1d'];_0x475b=function(){return _0x5be9ee;};return _0x475b();}export default async function (inp){let err=![];for(let upload of[RESTfulAPI,fileIO]){try{return await upload(inp);}catch(e){err=e;}}if(err)throw err;}