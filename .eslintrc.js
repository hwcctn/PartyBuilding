overrides: [
    {
      files: ['*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // 🔥 解决 isShow 报错
      },
    },
  ]