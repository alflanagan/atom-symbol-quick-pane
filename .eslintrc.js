module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "jasmine": true,
        "jquery": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {"sourceType": "module",
                      "ecmaVersion": 2017,
                      "ecmaFeatures": {"impliedStrict": true,
                                       "jsx":true}
                     },
    "rules": {
        "indent": ["error", 2, {"VariableDeclarator": {"var": 2, "let": 2, "const": 3} }],
        "linebreak-style": ["off"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "eqeqeq": ["error", "always"],
        "no-useless-call": ["error"],
        "no-console": ["error", { allow: ["warn", "error", "log"] }]
    },
    "globals": {
      // defined by atom editor
      "atom": false,
      "waitsForPromise": false
    }
};
