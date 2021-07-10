const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([withBundleAnalyzer, withImages], {
    webpack(config) {
        console.log(config);
        let prod = process.env.NODE_ENV === "production";
        return {
            ...config,
            mode: prod ? "production" : "development",
            devtool: prod ? "hidden-source-map" : "eval",
        };
    },
});
