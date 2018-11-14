const BundleTracker = require("webpack-bundle-tracker");
const path = require("path");

module.exports = {
  baseUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:9000/static/django_airavata_admin/dist/"
      : "/static/django_airavata_admin/dist/",
  outputDir: "./static/django_airavata_admin/dist",
  css: {
    extract: true,
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new BundleTracker({
        filename: "webpack-stats.json",
        path: "./static/django_airavata_admin/dist/"
      })
    ],
    optimization: {
      /*
       * Force creating a vendor bundle so we can load the 'app' and 'vendor'
       * bundles on development as well as production using django-webpack-loader.
       * Otherwise there is no vendor bundle on development and we would need
       * some template logic to skip trying to load it.
       * See also: https://bitbucket.org/calidae/dejavu/src/d63d10b0030a951c3cafa6b574dad25b3bef3fe9/%7B%7Bcookiecutter.project_slug%7D%7D/frontend/vue.config.js?at=master&fileviewer=file-view-default#vue.config.js-27
       */
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    }
  },
  chainWebpack: config => {
    /*
     * Specify the eslint config file otherwise it complains of a missing
     * config file for the ../api and ../../static/common packages
     *
     * See: https://github.com/vuejs/vue-cli/issues/2539#issuecomment-422295246
     */
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .tap(options => {
        options.configFile = path.resolve(__dirname, "package.json");
        return options;
      });
  },
  devServer: {
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true,
    hotOnly: true
  }
};
