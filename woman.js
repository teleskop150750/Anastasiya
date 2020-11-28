import womanCatalog from './scripts/womanCatalog.js';
import modalOpen from './scripts/modalOpen.js';
import inputsFocus from './scripts/inoutsFocus.js';
import Vue from './libs/vue.esm.browser.min.js';

const vueCatalog = new Vue({
  el: '#catalog_Vue',
  data: {
    buttons: [
      {
        name: 'показать все',
        isActive: true,
        category: 'all',
      },
      {
        name: 'Куртки',
        isActive: false,
        category: 'jacket',
      },
      {
        name: 'Джинсы',
        isActive: false,
        category: 'jeans',
      },
      {
        name: 'Футболки',
        isActive: false,
        category: 'undershirt',
      },
      {
        name: 'куртки',
        isActive: false,
        category: 'sport',
      },
    ],
    arr: '',
    arrSort: '',
    arr_coment: '',
  },
  methods: {
    sortGoods(category, i) {
      if (category === 'all') {
        this.arrSort = this.arr;
      } else {
        this.arrSort = this.arr.filter((el) => el.category === category);
      }
      this.buttons.forEach((button) => {
        const currentBtn = button;
        currentBtn.isActive = false;
      });
      this.buttons[i].isActive = true;
    },

    open() {
      const modal = document.querySelector('.modal');
      modalOpen(modal);
      // const messForm = document.querySelector('.form');
      const messInputs = document.querySelectorAll('.form__input');
      inputsFocus(messInputs);
    },
  },
});

vueCatalog.arr = womanCatalog;
vueCatalog.arrSort = womanCatalog;
