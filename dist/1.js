webpackJsonp([1],{

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(50);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(51);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(52);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(54);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(53);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(20);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(200);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(658);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(665);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var AboutPage = function (_React$Component) {
    (0, _inherits3.default)(AboutPage, _React$Component);
  
    function AboutPage() {
      (0, _classCallCheck3.default)(this, AboutPage);
      return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(AboutPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _index.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Layout2.default,
          { className: _styles2.default.content },
          _react2.default.createElement(
            'h1',
            null,
            _index.title
          ),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _index.html } })
        );
      }
    }]);
    return AboutPage;
  }(_react2.default.Component);
  
  exports.default = AboutPage;

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(84)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n *\n * Copyright © 2015-2016 Konstantin Tarkus (@koistya)\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@media screen and (max-width: 1024px) {\n\n  .styles_content_3tt {\n    padding: 0 16px;\n  }\n\n}\n", "", {"version":3,"sources":["/./pages/about/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;GAQG;;AAEH;;EAEE;IACE,gBAAgB;GACjB;;CAEF","file":"styles.css","sourcesContent":["/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n *\n * Copyright © 2015-2016 Konstantin Tarkus (@koistya)\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@media screen and (max-width: 1024px) {\n\n  .content {\n    padding: 0 16px;\n  }\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"content": "styles_content_3tt"
  };

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(544);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(87)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./styles.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 665:
/***/ function(module, exports) {

  module.exports = {"title":"About Us","html":"<h2>Cadme comitum fecere</h2>\n<p>Lorem markdownum velis auras figuram spes solebat spectabat, cum alium,\nplenissima aratri visae herbarum in corpore silvas consumpta. Subito virgae nec\nparatae flexit et niveae repperit erat paratu cum albis steterat conclamat hic!</p>\n<p>Nocte suae ligat! <em>Si</em> nitidum pervia, illa tua, ab minimo pasci dabitur? In\nfictus concurreret pennis, illis cum accipe rogavi in et nostro cum lacertis\nhostibus ab saxo ne. Genibusque vixque; sine videt terribili lucos ipsum vobis\nresque, et suum pietatis fulvis, est velle. Semele oscula ferat frigidus mactata\nmontes, es me parari, piae.</p>\n<h2>Inflataque ait leves frigida</h2>\n<p>Letum per ipsa nostro animae, mari illuc in levi corpus aestibus excussam\ndeflentem sic cuius. Venere dedit illa cui in quo senecta artus bella inficit,\nAchaica. Videbatur crinem resonantia alto dea umida dicitur igne; meus signa\nhabet; est. Cognovit coepta: similes fugis: habuissem votivi liquida: ictus visi\nnostra me Adoni.</p>\n<h2>Laedar cum margine quoque</h2>\n<p>Quam dato ullis, acer venturi volantes! Tuam non non cursu acta hic, novem\nnutrit, in sidera viscera iam fontes tempora, omnes. Saturnius artus inquit,\nconatoque erectos lenius, carinae, ora est infamia elige per Medusaei induitur.\nQuem quem ab postquam tunc frondescere nodis capiam labique. Voluere luce\nSemeles.</p>\n<pre><code>    if (delete(digital, hibernateSoft, dynamicExcelVpn) &gt; io_secondary_led /\n            <span class=\"hljs-number\">84</span>) {\n        disk = load;\n        orientationPci.matrix_laptop(modelSsdTweet);\n    } else {\n        kdeEmoticonLed.mebibyte_algorithm_domain(<span class=\"hljs-number\">2</span>,\n                hackerCtr.rom_iso_desktop.scarewarePrimaryBankruptcy(station,\n                disk_mask_matrix, restore_crt));\n        cameraSpyware(<span class=\"hljs-number\">4</span>, multitasking(<span class=\"hljs-number\">-3</span>, log_dfs_controller));\n        menuCisc.swappable -= w(mount_vle_unicode, <span class=\"hljs-number\">5</span>);\n    }\n    var optic_spider = newbieFunctionThick(<span class=\"hljs-number\">-3</span>, esportsKbpsUnix);\n    var dvd_ctp_resolution = dithering;\n</code></pre>\n<h2>Usus fixurus illi petunt</h2>\n<p>Domosque tune amas mihi adhuc et <em>alter per</em> suasque versavitque iners\ncrescentemque nomen verba nunc. Acervos hinc natus si habet. Et cervix imago\nquod! Arduus dolet!</p>\n<pre><code>    cpcDdrCommand.window(moodleAlpha, im, server_alpha.doubleVrmlMonochrome(\n            iosBar - -<span class=\"hljs-number\">2</span>, white_dual, ad(<span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">94</span>, <span class=\"hljs-number\">83</span>)));\n    mbps_typeface_publishing.bit.host_flash_capacity(click(<span class=\"hljs-number\">90</span>,\n            cyberspace_srgb_pup - mpeg, marketing_trackback +\n            table_plagiarism_domain));\n    syn_e = powerExtension * defragmentNntpOsd(alertOutputNode(pop,\n            pageResponsiveDrive));\n    <span class=\"hljs-function\"><span class=\"hljs-keyword\">method</span> -= <span class=\"hljs-title\">switch_newsgroup_flaming</span>;</span>\n</code></pre>\n<p>Aliquid mansura arida altismunera <strong>in illi</strong>. Dignus vir pontum <em>crimen\nversabat</em> carpunt omnes rotis Canentem erant in Oebalio, et manu senecta\niungere. Prima diurnis!</p>\n"};

/***/ }

});
//# sourceMappingURL=1.js.map?e132c802446901763c0f