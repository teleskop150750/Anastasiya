import inputsFocus from './scripts/inputsFocus.js';
import formSubmit from './scripts/formSubmit.js';
import modalOpen from './scripts/modalOpen.js';
import modalClose from './scripts/modalClose.js';
import manCatalog from './scripts/manCatalog.js';
import womanCatalog from './scripts/womanCatalog.js';
import Vue from './libs/vue.esm.browser.min.js';

const arrGoodsAll = [...manCatalog, ...womanCatalog];

// eslint-disable-next-line no-unused-vars
const vm = new Vue({
  el: '#cart',
  data: {
    arrLS: [],
    arrCheck: [],
    arrGoodsAll: [],
    priceOne: 0,
    idOne: null,
    buyModal: 'one',
  },

  computed: {
    arrBuy() {
      if (this.arrLS.length > 0) {
        const arr = [];
        this.arrLS.forEach((itemLS) => {
          arr.push(
            this.arrGoodsAll.find((item) => item.id === +itemLS),
          );
        });
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
    arrBuyCheck() {
      if (this.arrCheck.length > 0) {
        const arr = [];
        this.arrCheck.forEach((itemCheck) => {
          arr.push(
            this.arrBuy.find((item) => item.id === +itemCheck),
          );
        });
        return arr;
      }
      return [];
    },
    checkPrice() {
      if (this.arrBuyCheck.length > 0) {
        return this.arrBuyCheck.reduce(
          (sum, current) => sum + current.count, 0,
        );
      }
      return 0;
    },
  },
  methods: {
    deleteOne(id, current) {
      if (current) {
        current.blur();
      }
      const arrLS = this.arrLS.filter((itemLS) => +itemLS !== id);
      this.arrLS = arrLS;
      const arrCheck = this.arrCheck.filter((itemLS) => +itemLS !== id);
      this.arrCheck = arrCheck;
      localStorage.setItem('cart', arrLS);
    },
    deleteAll() {
      localStorage.removeItem('cart');
      this.arrLS = [];
      this.arrCheck = [];
    },
    deleteCheck() {
      this.arrCheck.forEach((itemCheck) => {
        this.deleteOne(itemCheck);
      });
    },

    addCheck(id, current) {
      if (current.checked) {
        this.arrCheck.push(id);
      } else {
        const arrCheck = this.arrCheck.filter((itemLS) => +itemLS !== id);
        this.arrCheck = arrCheck;
      }
    },
    buyModalOpen(flag, current, id = null) {
      this.buyModal = flag;
      if (this.buyModal === 'one') {
        const goodByItem = this.arrBuy.find((item) => item.id === +id);
        this.idOne = id;
        this.priceOne = goodByItem.count;
      }
      current.blur();
      const modal = document.querySelector('.modal--buy');
      modalOpen(modal);
      const messInputs = modal.querySelectorAll('.form__input');
      inputsFocus(messInputs);
    },
    buyGoods(form) {
      const inputs = form.querySelectorAll('.form__input');
      const modal = form.closest('.modal--buy');
      let cl;
      if (this.buyModal === 'one') {
        cl = () => {
          modalClose(modal);
          this.deleteOne(this.idOne);
        };
      }
      if (this.buyModal === 'all') {
        cl = () => {
          modalClose(modal);
          this.deleteAll();
        };
      }
      if (this.buyModal === 'check') {
        cl = () => {
          modalClose(modal);
          this.deleteCheck();
        };
      }
      formSubmit(form, inputs, modal, cl);
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
