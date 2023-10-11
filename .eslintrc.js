module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "stylelint-config-standard",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": 12, // Use the correct ECMA version (ES2021)
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "module": "writable" // Add the module variable as a global
    },
    "rules": {
    }
}
