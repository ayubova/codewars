const once = (fn) => {
  let called = false;
  return f = (...args) => {
    if (called) {
      return;
    }
    called = true;
    return fn(...args);
  };
};
