const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/search",
    proxy({
      target: "https://api.themoviedb.org/4",
      changeOrigin: true
    })
  );
};
