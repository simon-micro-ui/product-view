const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/product-view/scripts.js',
        './dist/product-view/main.js',
        './dist/product-view/runtime.js',
        './dist/product-view/polyfills.js',
    ]
    await fs.ensureDir('./dist-npm')
    await fs.ensureDir('./dist-npm/product-view')
    await concat(files, './dist-npm/product-view/product-view.js');
    await fs.copyFile('./dist/product-view/styles.css', './dist-npm/product-view/styles.css')
    await fs.copy('./dist/product-view/assets/', './dist-npm/product-view/assets/' )
    
})();