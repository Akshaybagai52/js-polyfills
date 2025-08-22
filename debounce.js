const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout();
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};
