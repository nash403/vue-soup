// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    "ecmaFeatures": {
        "jsx": true
    },
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  extends: [
    'eslint:recommended',
    'kentcdodds',
    'prettier',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` for stricter rules (or `plugin:vue/essential` less strict).
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // settings:{
  //   'import/resolver': {
  //     webpack: {
  //       config: 'build/webpack.base.conf.js'
  //     }
  //   }
  // },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 0,
    'spaced-comment': 0,
    'space-before-function-paren': 1,
    'key-spacing': [0, {
      'singleLine': {
        'beforeColon': false,
        'afterColon': true
      },
      'multiLine': {
        'beforeColon': true,
        'afterColon': true,
        'align': 'colon'
      }
    }],
    'no-multi-spaces'   : ['error', {
      exceptions: {
        'Property': true, 'VariableDeclarator': true, 'ImportDeclaration': true, 'AssignmentExpression': true
      }
    }],
    'complexity': ['error', { "max": 15 }],
    'no-nested-ternary': 1,
    'import/no-unassigned-import': ['error', { allow: ['**/*.*css', '@/filters'] }],

    // Vue rules
    'vue/require-default-prop': 1,
    'vue/max-attributes-per-line': [2, {
      'singleline': 2,
      'multiline': {
        'max': 2,
        'allowFirstLine': true
      }
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never'
      }
    }]
  }
}
