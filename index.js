const dependencies = {
  react: "^16.11.0",
  "react-dom": "^16.11.0",
  "react-scripts": "3.2.0"
};
module.exports = () =>
  require("mykit-core")(
    __dirname,
    [
      { src: "favicon.ico", dir: "public" },
      { src: "index.html", dir: "public" },
      { src: "logo192.png", dir: "public" },
      { src: "logo512.png", dir: "public" },
      { src: "manifest.json", dir: "public" },
      { src: "robots.txt", dir: "public" },
      { src: "App.css", dir: "src" },
      { src: "App.js", dir: "src" },
      { src: "App.test.js", dir: "src" },
      { src: "index.css", dir: "src" },
      { src: "index.js", dir: "src" },
      { src: "logo.svg", dir: "src" },
      { src: "serviceWorker.js", dir: "src" }
    ],
    {
      dependencies,
      scripts: {
        start: "react-scripts start",
        build: "react-scripts build",
        test: "react-scripts test",
        eject: "react-scripts eject",
        "mykit-install": `yarn add ${Object.keys(dependencies).join(" ")}`
      },
      eslintConfig: {
        extends: "react-app"
      },
      browserslist: {
        production: [">0.2%", "not dead", "not op_mini all"],
        development: [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }
  );
