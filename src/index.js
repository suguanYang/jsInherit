const extend = (function() {
  const ProxyF = function() {};
  return function(C, P) {
    ProxyF.prototype = P.prototype;
    C.prototype = new ProxyF();
    C.prototype.constructor = C;
  };
}());

const inheritContext = function(context, P, ...args) {
  if (context.prototype !== undefined) {
    console.error("Uncaught TypeError: not a instance");
    return;
  }
  P.apply(context, args);
};

export {
  extend,
  inheritContext,
};
