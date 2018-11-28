const extend = function(C, P) {
  C.prototype = new P();
};

const inheritContext = function(context, P, ...args) {
  if (context.prototype !== undefined) {
    console.error("Uncaught TypeError: not a instance");
    return;
  }
  P.apply(this, ...args);
};

export {
  extend,
  inheritContext,
};
