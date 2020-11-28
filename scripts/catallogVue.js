import modalOpen from './modalOpen.js';
import inputsFocus from './inoutsFocus.js';
import Vue from '../libs/vue.esm.browser.min.js';

export default (catalog) => {
  const vm = new Vue({
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
      modaCartTitle: 'Поздравляем',
      modaCartContent: 'Товар добавлен в корзину',
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
        const modalCommet = document.querySelector('.modal--comment');
        modalOpen(modalCommet);
        const messInputs = document.querySelectorAll('.form__input');
        inputsFocus(messInputs);
      },
      addComment() {
        const text = document.querySelector('.form__textarea');
        const index = this.arrSort.findIndex(
          (item) => item.id === this.modalId,
        );
        this.arrSort[index].coment.push(text.value);
        text.value = '';
        const parent = text.closest('.form__group');
        parent.classList.remove('form__group--value');
      },
      addCart(good) {
        if (!localStorage.getItem('cart')) {
          localStorage.setItem('cart', []);
          localStorage.setItem('cart', good.id);
        } else {
          const array = localStorage.getItem('cart').split(',');
          const isCart = array.findIndex((el) => +el === good.id);
          if (isCart < 0) {
            array.push(good.id);
            localStorage.setItem('cart', array);
            this.modaCartTitle = 'Поздравляем';
            this.modaCartContent = 'Товар добавлен в корзину';
          } else {
            this.modaCartTitle = 'Внимание';
            this.modaCartContent = 'Данный товар уже добавлен в корзину';
          }
        }

        const modalCart = document.querySelector('.modal--cart');
        modalOpen(modalCart);
      },
    },
    created() {
      this.arr = catalog;
      this.arrSort = catalog;
    },
  });
};
