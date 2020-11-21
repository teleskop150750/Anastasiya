/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
new Photostack(document.getElementById('photostack-3'), {
  showNavigation: false,
  afterShowPhoto: function (ps) {
    setTimeout(function () {
      ps._navigate('next');
    }, 3500);
  }
});
