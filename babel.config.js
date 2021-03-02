module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver', {
        alias: {
          '@config': './src/config',
          '@controllers': './src/controllers',
          '@middlewares': './src/middlewares',
          '@validation': './src/validation'
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
