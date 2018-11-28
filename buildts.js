const rollup = require("rollup");
const rollupTypescript = require("rollup-plugin-typescript");

rollup.rollup({
  input: "./test/index.ts",
  plugins: [
    rollupTypescript(),
  ],
}).then(bundle => bundle.write({
  file: "./test/index.js",
  format: "cjs",
  name: "library",
  sourcemap: false,
}));
