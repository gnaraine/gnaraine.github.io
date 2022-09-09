
// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/gnaraine.github.io/" : "",
  images: {
    domains: ["images.ctfassets.net"],
  },
  compiler: {
    styledComponents: true,
  }
};
