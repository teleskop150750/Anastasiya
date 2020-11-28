import inputsFocus from './scripts/inoutsFocus.js';
import manCatalog from './scripts/manCatalog.js';
import womanCatalog from './scripts/womanCatalog.js';
import Vue from './libs/vue.esm.browser.min.js';

const arrGoodsAll = [...manCatalog, ...womanCatalog];

const vm = new Vue({
  el: '#cart',
  data: {
    arrGoodsAll: [],
    arrGoodsBoy: [],
    df: 1234,
  },

  computed: {
    arrBoy() {
      if (localStorage.getItem('cart')) {
        const arrLS = localStorage.getItem('cart').split(',');
        const arr = [];

        arrLS.forEach((itemLS) => {
          const goodByIndex = this.arrGoodsAll.findIndex(
            (item) => item.id === +itemLS,
          );
          if (goodByIndex >= 0) {
            arr.push(this.arrGoodsAll[goodByIndex]);
          }
        });
        return arr;
      }
      return [0, 3];
    },
    allPrice() {
      if (this.arrBoy.length > 0) {
        return this.arrBoy.reduce((sum, current) => sum + current.count, 0);
      }
      return 0;
    },
  },
  created() {
    this.arrGoodsAll = arrGoodsAll;
  },

  mounted() {
    const arr = document.querySelectorAll('.form__input');
    inputsFocus(arr);
  },
});
