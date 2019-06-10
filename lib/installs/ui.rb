# Jest and scripts configuration. Essential for Jest test and Vue Ui
scripts =   <<-eos
  "scripts": {
    "yarn test": "jest",
    "yarn install": "yarn install --check-files",
    "rails assets:precompile": "yarn install --check-files; rails assets:precompile",
    "rails server": "rails server",
    "webpack-dev-server": "./bin/webpack-dev-server"
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
    "transformIgnorePatterns": [
      "node_modules/(?!(vueonrails)/)"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/config/webpack/"
    ],
    "snapshotSerializers": [
      "<rootDir>/node_modules/jest-serializer-vue"
    ]
  },
eos

insert_into_file Rails.root.join("package.json").to_s,
scripts, after: "\"private\": true,\n"

puts "Vue UI Ready!"
