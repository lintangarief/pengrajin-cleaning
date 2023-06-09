

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(jpeg|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    );
    return config;
  },
  images: {
    domains: ['cf.shopee.co.id'],
  },
})