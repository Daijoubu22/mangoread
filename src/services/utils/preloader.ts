// eslint-disable-next-line import/prefer-default-export
export const hidePreloader = () => {
  const preloader = document.querySelector('.preloader');
  if (!preloader) {
    return;
  }
  setTimeout(() => {
    preloader.classList.add('preloader_hidden');
    setTimeout(() => {
      preloader.remove();
    }, 1000);
  }, 2000);
};
