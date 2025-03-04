System.register("chunks:///_virtual/en.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"a9bf0nzMrBKqKqgxBXG+gbw","en",void 0);var a=window,g=e("languages",{});a.languages||(a.languages={}),a.languages.en=g,n._RF.pop()}}}));

System.register("chunks:///_virtual/Mgri18n.ts",["cc"],(function(n){var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"7d669fReVVBsYtwgbjfyriR","Mgri18n",void 0);n("Mgri18n",function(){function n(){}return n.prototype.onInit=function(){},n}());t._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./Mgri18n.ts","./en.ts","./zh.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"3d746CoX0JA1ozYuUGWfRHJ","zh",void 0);var u=window,a=e("languages",{});u.languages||(u.languages={}),u.languages.zh=a,n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});