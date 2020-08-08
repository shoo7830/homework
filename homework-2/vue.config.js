// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/base/_reset.scss";`
      }
    },
    sourceMap: true
  }
};