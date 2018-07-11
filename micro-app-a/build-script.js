const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/micro-app-a/runtime.js",
    "./dist/micro-app-a/polyfills.js",
    "./dist/micro-app-a/styles.js",
    "./dist/micro-app-a/scripts.js",
    "./dist/micro-app-a/vendor.js",
    "./dist/micro-app-a/main.js"
  ];

  await fs.ensureDir("elements");

  await concat(files, "elements/micro-app-a.js");
  console.info("Elements created successfully!");
})();
