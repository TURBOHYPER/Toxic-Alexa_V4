import _0x27d1c3 from 'form-data';
import 'jimp';
async function processing(_0x32082e, _0x511952) {
  return new Promise((_0x39cf21, _0x47ecc8) => {
    let _0x345014 = ["enhance", 'recolor', 'dehaze'];
    _0x511952 = _0x345014.includes(_0x511952) ? _0x511952 : _0x345014[0x0];
    let _0x4ba4d6 = new _0x27d1c3();
    let _0x22eb48 = "https://inferenceengine.vyro.ai/" + _0x511952;
    _0x4ba4d6.append('model_version', 0x1, {
      'Content-Transfer-Encoding': "binary",
      contentType: "multipart/form-data; charset=utf-8"
    });
    _0x4ba4d6.append("image", Buffer.from(_0x32082e), {
      filename: 'enhance_image_body.jpg',
      contentType: "image/jpeg"
    });
    _0x4ba4d6.submit({
      url: _0x22eb48,
      host: "inferenceengine.vyro.ai",
      path: '/' + _0x511952,
      protocol: "https:",
      headers: {
        'User-Agent': "okhttp/4.9.3",
        Connection: "Keep-Alive",
        'Accept-Encoding': "gzip"
      }
    }, function (_0x2632f2, _0xf0ef98) {
      if (_0x2632f2) {
        _0x47ecc8();
      }
      let _0x381efd = [];
      _0xf0ef98.on('data', function (_0x591a60) {
        _0x381efd.push(_0x591a60);
      }).on("end", () => {
        _0x39cf21(Buffer.concat(_0x381efd));
      });
      _0xf0ef98.on("error", _0x2a4896 => {
        _0x47ecc8();
      });
    });
  });
}
let handler = async (_0x4a87d3, {
  conn: _0x292817,
  usedPrefix: _0x112249,
  command: _0x4291f5
}) => {
  switch (_0x4291f5) {
    case "enhancer":
    case "unblur":
    case 'enhance':
      {
        _0x292817.enhancer = _0x292817.enhancer ? _0x292817.enhancer : {};
        if (_0x4a87d3.sender in _0x292817.enhancer) {
          throw "There's an ongoing process. Please wait until it finishes >//<";
        }
        let _0x2262f4 = _0x4a87d3.quoted ? _0x4a87d3.quoted : _0x4a87d3;
        let _0xc3c698 = (_0x2262f4.msg || _0x2262f4).mimetype || '';
        if (!_0xc3c698) {
          throw "Where's the photo, sis?";
        }
        if (!/image\/(jpe?g|png)/.test(_0xc3c698)) {
          throw _0xc3c698 + " is not supported";
        } else {
          _0x292817.enhancer[_0x4a87d3.sender] = true;
        }
        _0x4a87d3.reply("Processing, sis...");
        let _0x29bb6b = await _0x2262f4.download();
        let _0x39033c;
        try {
          const _0x2017d4 = await processing(_0x29bb6b, "enhance");
          _0x292817.sendFile(_0x4a87d3.chat, _0x2017d4, '', "It's done, bro >//<", _0x4a87d3);
        } catch (_0x4d1cdd) {
          _0x39033c = true;
        } finally {
          if (_0x39033c) {
            _0x4a87d3.reply("Process failed :(");
          }
          delete _0x292817.enhancer[_0x4a87d3.sender];
        }
      }
      break;
    case "colorize":
    case 'colorizer':
      {
        _0x292817.recolor = _0x292817.recolor ? _0x292817.recolor : {};
        if (_0x4a87d3.sender in _0x292817.recolor) {
          throw "There's an ongoing process. Please wait until it finishes >//<";
        }
        let _0x4ca928 = _0x4a87d3.quoted ? _0x4a87d3.quoted : _0x4a87d3;
        let _0xa6aa98 = (_0x4ca928.msg || _0x4ca928).mimetype || '';
        if (!_0xa6aa98) {
          throw "Where's the photo, sis?";
        }
        if (!/image\/(jpe?g|png)/.test(_0xa6aa98)) {
          throw "Mime " + _0xa6aa98 + " is not supported";
        } else {
          _0x292817.recolor[_0x4a87d3.sender] = true;
        }
        _0x4a87d3.reply("Processing, sis...");
        let _0x4a8555 = await _0x4ca928.download();
        let _0x5bec7d;
        try {
          const _0x583aa7 = await processing(_0x4a8555, "recolor");
          _0x292817.sendFile(_0x4a87d3.chat, _0x583aa7, '', "It's done, bro >//<", _0x4a87d3);
        } catch (_0x4ab18e) {
          _0x5bec7d = true;
        } finally {
          if (_0x5bec7d) {
            _0x4a87d3.reply("Process failed :(");
          }
          delete _0x292817.recolor[_0x4a87d3.sender];
        }
      }
      break;
    case 'hd':
    case "hdr":
      {
        _0x292817.hdr = _0x292817.hdr ? _0x292817.hdr : {};
        if (_0x4a87d3.sender in _0x292817.hdr) {
          throw "There's an ongoing process. Please wait until it finishes >//<";
        }
        let _0x4ab7af = _0x4a87d3.quoted ? _0x4a87d3.quoted : _0x4a87d3;
        let _0x44e352 = (_0x4ab7af.msg || _0x4ab7af).mimetype || '';
        if (!_0x44e352) {
          throw "Where's the photo,?";
        }
        if (!/image\/(jpe?g|png)/.test(_0x44e352)) {
          throw "Mime " + _0x44e352 + " is not supported";
        } else {
          _0x292817.hdr[_0x4a87d3.sender] = true;
        }
        _0x4a87d3.reply("Processing, image...");
        let _0x219970 = await _0x4ab7af.download();
        let _0x44eecd;
        try {
          const _0x550f70 = await processing(_0x219970, "dehaze");
          _0x292817.sendFile(_0x4a87d3.chat, _0x550f70, '', "It's done, bro >//<", _0x4a87d3);
        } catch (_0x5b17f9) {
          _0x44eecd = true;
        } finally {
          if (_0x44eecd) {
            _0x4a87d3.reply("Process failed :(");
          }
          delete _0x292817.hdr[_0x4a87d3.sender];
        }
      }
      break;
  }
};
;
handler.help = ['hd', 'hdr', 'unblur', 'colorize', "colorizer", "enhance", 'enhancer', "dehaze", "recolor", "enhance"];
handler.tags = ['ai'];
handler.command = ['hd'];
export default handler;