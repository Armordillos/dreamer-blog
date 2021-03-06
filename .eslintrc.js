module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "babel"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "classProperties": true
        }
    },
    "extends": "airbnb",
    "globals": {
        "window": true,
        "document": true,
        "React":true,
        "PropTypes":true
    },
    "rules": {
        "eqeqeq": "off",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "flatTernaryExpressions": true
            }
        ],
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "react/prop-types": [0],
        "no-underscore-dangle": [0],
        "class-methods-use-this": [0],
        "react/jsx-indent": [4, 4],
        "react/jsx-indent-props": [4, 4],
        "jsx-a11y/alt-text": [0],
        "jsx-a11y/label-has-for": [0],
        "jsx-a11y/anchor-is-valid": [0],
        "jsx-a11y/click-events-have-key-events": [0],
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/no-static-element-interactions": [0],
        "no-script-url": [0],
        "max-len": ["error", {"code": 120}],
        "no-param-reassign": 0,
        "no-unused-expressions": 0,
        "react/forbid-prop-types": 0,
        "eqeqeq": 0,
        "react/react-in-jsx-scope":0,
    },
    "settings": {
        "import/resolver": {
        },
    }
};