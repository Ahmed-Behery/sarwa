const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");

const localization = nextTranslate({
  reactStrictMode: true,
});

const images = {
  domains: ["contact-clients-dev.s3.amazonaws.com"],
};

module.exports = withPlugins([{ images }, localization]);
