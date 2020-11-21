new Photostack(document.querySelector('#photostack-1'), {
  showNavigation: false,
  afterShowPhoto(ps) {
    setTimeout(() => {
      ps._navigate('next');
    }, 3500);
  },
});
