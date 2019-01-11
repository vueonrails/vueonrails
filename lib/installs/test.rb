scripts =   <<-eos
  "scripts": {
    "test": "jest",
    "assets:precompile": "yarn install; rails assets:precompile",
    "webpack-dev-server": "./bin/webpack-dev-server", 
    "rails server": "rails server",
    "yarn install": "yarn install"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/app/javascript/parts/$1"
    },
    "transform": {
      "^.+\\\\\\.js$": "<rootDir>/node_modules/babel-jest",
      ".*\\\\\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    "snapshotSerializers": [
      "<rootDir>/node_modules/jest-serializer-vue"
    ]
  },
eos

insert_into_file Rails.root.join("package.json").to_s,
  "#{scripts}",
  after: "\"private\": true,\n"

run "yarn add jest-serializer-vue vue-jest babel-jest --no-progress --silent"
