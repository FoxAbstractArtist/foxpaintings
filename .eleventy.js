onst markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function (eleventyConfig) {
  // ✅ Copy static assets (images, CMS, etc.)
  eleventyConfig.addPassthroughCopy("src/assets"); // e.g., background image
  eleventyConfig.addPassthroughCopy("src/admin");  // Netlify CMS
  eleventyConfig.addPassthroughCopy({ "src/images/uploads": "images/uploads" }); // Paintings
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("images/uploads");

  // ✅ Add paintings collection
  eleventyConfig.addCollection("paintings", function (collectionApi) {
  eleventyConfig.addCollection("paintings", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/paintings/*.md");
  });

  // ✅ Add markdown filters
  eleventyConfig.addLiquidFilter("markdownify", function (value) {
  // Add markdownify filter for Liquid
  eleventyConfig.addLiquidFilter("markdownify", function(value) {
    return md.render(value);
  });

  // ✅ Dummy safe filter for Liquid compatibility
  eleventyConfig.addLiquidFilter("safe", function (value) {
  // Add a no-op "safe" filter to avoid 'undefined filter: safe' error in Liquid
  eleventyConfig.addLiquidFilter("safe", function(value) {
    return value;
  });

  // ✅ Directory structure
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
