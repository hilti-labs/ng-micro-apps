const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/micro-app-e/runtime.js",
    "./dist/micro-app-e/polyfills.js",
    "./dist/micro-app-e/styles.js",
    "./dist/micro-app-e/scripts.js",
    "./dist/micro-app-e/vendor.js",
    "./dist/micro-app-e/main.js"
  ];

  await fs.ensureDir("elements");

  await concat(files, "elements/micro-app-e.js");
  console.info("Elements created successfully!");
})();
