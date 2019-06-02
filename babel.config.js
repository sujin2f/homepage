module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'transform-react-jsx',
      {
        'pragma': 'wp.element.createElement',
      },
    ],
  ],
};
