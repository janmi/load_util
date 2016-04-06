/* 
 * @Author: janmi
 * @Date:   2016-04-06 14:17:26
 * @Last Modified by:   anchen
 * @Last Modified time: 2016-04-06 14:36:59
 * https://github.com/janmi/load_util.git
 */

'use strict';

var loadUtil = $.extend({}, {
  maskTpl: function() {
    return '<div class="m-loading"><div class="preloader"></div></div>'
  },
  // 插入
  insert: function() {
    var _self = this;

    if (_self.element && isInDocument(_self.element[0])) {
      _self.show();
    } else {
      _self.element = $(_self.maskTpl());
      document.body.appendChild(_self.element[0]);
    }
  },
  // 显示 load
  show: function() {
    var _self = this;
    _self.element[0].style.visibility = 'visible';
  },
  // 隐藏 load
  hide: function() {
    var _self = this;
    _self.element[0].style.visibility = 'hidden';
  }
})

//module.exports = load;

function isInDocument(element) {
  return !!(document.documentElement.compareDocumentPosition(element) & 16);
}