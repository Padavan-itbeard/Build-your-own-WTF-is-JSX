function loaders() {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: "defaults" }]
        ],
        plugins: ['@babel/plugin-syntax-jsx']
      },
    },
  };

  return [
    babelLoader
  ];
};

module.exports = {
  loaders
}