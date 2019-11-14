// Pin the version
const dependenciesJS = {
  "react-scripts": "3.2.0"
};
const dependenciesTS = {
  "@types/jest": "24.0.23",
  "@types/node": "12.12.7",
  "@types/react": "16.9.11",
  "@types/react-dom": "16.9.4",
  "react-scripts": "3.2.0",
  typescript: "3.7.2"
};

// Install the latest version
const installLibs = ["react", "react-dom"];

const commonMods = {
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
};
const commonResources = [
  { src: "favicon.ico", dir: "public" },
  { src: "index.html", dir: "public" },
  { src: "logo192.png", dir: "public" },
  { src: "logo512.png", dir: "public" },
  { src: "manifest.json", dir: "public" },
  { src: "robots.txt", dir: "public" },
  { src: "index.css", dir: "src" },
  { src: "logo.svg", dir: "src" }
];
const commonScripts = {
  start: "react-scripts start",
  build: "react-scripts build",
  test: "react-scripts test",
  eject: "react-scripts eject"
};
module.exports = (isTS = false) =>
  false === isTS
    ? require("mykit-core")(
        __dirname,
        [
          ...commonResources,
          { src: "App.css", dir: "src" },
          { src: "App.js", dir: "src" },
          { src: "App.test.js", dir: "src" },
          { src: "index.js", dir: "src" },
          { src: "serviceWorker.js", dir: "src" }
        ],
        {
          dependencies: dependenciesJS,
          scripts: {
            ...commonScripts,
            "mykit-install": `yarn && yarn add ${installLibs.join(" ")}`
          },
          ...commonMods
        }
      )
    : require("mykit-core")(
        __dirname,
        [
          ...commonResources,
          { src: "tsconfig.json" },
          { src: "App.css", dir: "src" },
          { src: "App.tsx", dir: "src" },
          { src: "App.test.tsx", dir: "src" },
          { src: "index.tsx", dir: "src" },
          { src: "serviceWorker.ts", dir: "src" },
          { src: "react-app-env.d.ts", dir: "src" }
        ],
        {
          dependencies: dependenciesTS,
          scripts: {
            ...commonScripts,
            "mykit-install": `yarn && yarn add ${installLibs.join(" ")}`
          },
          ...commonMods
        }
      );
