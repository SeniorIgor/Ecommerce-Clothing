export const useDisableScroll = () => {
  const disableScroll = () => {
    document.body.classList.add('modal-open');
  };

  const enableScroll = () => {
    document.body.classList.remove('modal-open');
  };

  return { disableScroll, enableScroll };
};
