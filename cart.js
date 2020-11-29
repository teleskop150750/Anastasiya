import inputsFocus from './scripts/inoutsFocus.js';
import manCatalog from './scripts/manCatalog.js';
import womanCatalog from './scripts/womanCatalog.js';
import Vue from './libs/vue.esm.browser.min.js';

const arrGoodsAll = [...manCatalog, ...womanCatalog];

const vm = new Vue({
  el: '#cart',
  data: {
    arrLS: [],
    arrCheck: [],
    arrGoodsAll: [],
    arrGoodsBuy: [],
  },

  computed: {
    arrBuy() {
      if (this.arrLS.length > 0) {
        const arr = [];
        this.arrLS.forEach((itemLS) => {
          const goodByIndex = this.arrGoodsAll.findIndex(
            (item) => item.id === +itemLS,
          );
          if (goodByIndex >= 0) {
            arr.push(this.arrGoodsAll[goodByIndex]);
          }
        });
        return arr;
      }
      return [];
    },
    arrBuyCheck() {
      console.log(2);
      if (this.arrCheck.length > 0) {
        const arr = [];
        this.arrCheck.forEach((itemLS) => {
          const goodByIndex = this.arrGoodsAll.findIndex(
            (item) => item.id === +itemLS,
          );
          if (goodByIndex >= 0) {
            arr.push(this.arrGoodsAll[goodByIndex]);
          }
        });
        console.log(...arr);
        return arr;
      }
      return [];
    },
    allPrice() {
      if (this.arrBuy.length > 0) {
        return this.arrBuy.reduce((sum, current) => sum + current.count, 0);
      }
      return 0;
    },
  },
  methods: {
    deleteOne(id, current) {
      current.blur();
      const arrLS = this.arrLS.filter((itemLS) => +itemLS !== id);
      this.arrLS = arrLS;
      const arrCheck = this.arrCheck.filter((itemLS) => +itemLS !== id);
      this.arrCheck = arrCheck;
      localStorage.setItem('cart', arrLS);
    },
    deleteAll(current) {
      current.blur();
      localStorage.removeItem('cart');
      this.arrLS = [];
      this.arrCheck = [];
    },

    addCheck(id, current) {
      if (current.checked) {
        this.arrCheck.push(id);
      } else {
        const arrCheck = this.arrCheck.filter((itemLS) => +itemLS !== id);
        this.arrCheck = arrCheck;
      }
    },
  },
  created() {
    this.arrGoodsAll = arrGoodsAll;
    if (localStorage.getItem('cart')) {
      this.arrLS = localStorage.getItem('cart').split(',');
    }
  },

  mounted() {
    const arr = document.querySelectorAll('.form__input');
    inputsFocus(arr);
  },
});
