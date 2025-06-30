module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@screens', './src/screens'],
          ['@hooks', './src/hooks'],
          ['@contexts', './src/contexts'],
          ['@styles', './src/styles'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // React правила
    'react/react-in-jsx-scope': 'off', // React 17+ автоматический импорт
    'react/prop-types': 'warn', // Пропсы должны быть типизированы
    'react/jsx-props-no-spreading': 'off', // Разрешаем spread props
    'react/jsx-boolean-value': ['error', 'never'], // <Component enabled /> вместо <Component enabled={true} />
    'react/jsx-curly-brace-presence': ['error', 'never'], // Убираем лишние скобки
    'react/self-closing-comp': 'error', // <Component /> вместо <Component></Component>
    'react/jsx-sort-props': ['warn', { 
      callbacksLast: true,
      shorthandFirst: true,
      reservedFirst: true,
    }],
    'react/jsx-no-useless-fragment': 'error', // Убираем пустые фрагменты
    'react/jsx-key': ['error', { checkFragmentShorthand: true }], // key в списках
    'react/no-array-index-key': 'warn', // Избегаем index как key
    'react/no-unused-state': 'warn', // Неиспользуемое состояние
    'react/no-direct-mutation-state': 'error', // Прямая мутация state
    'react/prefer-stateless-function': 'warn', // Функциональные компоненты

    // React Hooks правила
    'react-hooks/rules-of-hooks': 'error', // Правила хуков
    'react-hooks/exhaustive-deps': 'warn', // Зависимости useEffect

    // Accessibility и Performance правила отключены пока не установлены плагины
    
    // Общие правила
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Разрешаем warn/error
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-var': 'error', // Используем let/const
    'prefer-const': 'error', // const где возможно
    'prefer-arrow-callback': 'error', // Arrow functions
    'prefer-template': 'error', // Template literals
    'no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    'no-unused-expressions': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'eqeqeq': ['error', 'always'], // === вместо ==
    'curly': ['error', 'all'], // Скобки для всех блоков
    'brace-style': ['error', '1tbs'], // Стиль скобок
    'comma-dangle': ['error', 'always-multiline'], // Trailing comma
    'semi': ['error', 'always'], // Точки с запятой
    'quotes': ['error', 'single', { avoidEscape: true }], // Одинарные кавычки
    'indent': ['error', 2], // 2 пробела
    'max-len': ['warn', { 
      code: 100, 
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Именование
    'camelcase': ['error', { properties: 'never' }],
    
    // Функции
    'max-params': ['warn', 4], // Максимум 4 параметра
    'complexity': ['warn', 10], // Сложность функций
    'max-depth': ['warn', 4], // Глубина вложенности
    'max-statements': ['warn', 20], // Количество операторов
    
    // Объекты и массивы
    'object-shorthand': 'error', // { foo } вместо { foo: foo }
    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }],
    'dot-notation': 'error', // obj.prop вместо obj['prop']
  },
  
  // Переопределения для specific файлов
  overrides: [
    {
      files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
        'max-statements': 'off',
      },
    },
    {
      files: ['src/contexts/**/*.{js,jsx}'],
      rules: {
        'max-statements': ['warn', 30], // Контексты могут быть больше
        'complexity': ['warn', 15],
      },
    },
    {
      files: ['src/screens/**/*.{js,jsx}'],
      rules: {
        'max-statements': ['warn', 25], // Экраны могут быть больше
        'max-params': ['warn', 5],
      },
    },
    {
      files: ['vite.config.js', '.eslintrc.js'],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
}; 