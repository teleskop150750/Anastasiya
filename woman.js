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
    modalId: null,
  },

  computed: {
    arr_coment() {
      if (this.modalId !== null) {
        const good = this.arrSort.find((item) => item.id === this.modalId);
        return good.coment;
      }
      return [];
    },
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

    openComment(id) {
      this.modalId = id;
      const modal = document.querySelector('.modal');
      modalOpen(modal);
      const messInputs = document.querySelectorAll('.form__input');
      inputsFocus(messInputs);
    },
    addComment() {
      const text = document.querySelector('.form__textarea');
      const index = this.arrSort.findIndex((item) => item.id === this.modalId);
      this.arrSort[index].coment.push(text.value);
      text.value = '';
    },
  },
});

vueCatalog.arr = womanCatalog;
vueCatalog.arrSort = womanCatalog;
