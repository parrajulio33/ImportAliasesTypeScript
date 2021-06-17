// craco.config.js
// const { paths } = require('@craco/craco')
// const CracoAlias = require("craco-alias");

// module.exports = {
//   webpack: {
//     alias: {
//       // Add the aliases for all the top-level folders in the `src/` folder.
//       '@common': `${paths}/app/common/`,
//       '@utils': `${paths}/util/`,

//       // Another example for using a wildcard character

//     }
//   }
// }

const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "src",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.paths.json",
      }
    }
  ]
};
