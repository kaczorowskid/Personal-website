const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      "@config": path.resolve(__dirname, 'src/config/'),
      '@helper': path.resolve(__dirname, 'src/helper/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      "@styles": path.resolve(__dirname, 'src/styles/'),
      '@types': path.resolve(__dirname, 'src/types/'),
      '@views': path.resolve(__dirname, 'src/views/'),
    },
    configure: {
      module: {
        rules: [
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            use: [],
          },
        ],
      },
    },
  }
}