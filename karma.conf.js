/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",
    
    files: [
      
    ],
    
    proxies: {
      "/app/": "/base/app/",
      "/jspm_packages/": "/base/app/jspm_packages"
    },
    
    jspm: {
      config: "app/config.js",
      packages: "app/jspm_packages/",
      serveFiles: [
        "app/**/*.*",
      ],
      loadFiles: [
        "app/tests/**/*.js"
      ]
    },

    autoWatch: true,

    frameworks: ["jspm", "jasmine"],
    
    browsers: ["Chrome", "Firefox"],

    plugins: [
      "karma-jspm",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
      "karma-junit-reporter"
    ],

    junitReporter: {
      outputFile: "unit.xml",
      suite: "unit"
    }

  });
};