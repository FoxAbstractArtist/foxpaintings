const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function (eleventyConfig) {
  // ✅ Copy static assets (images, CMS, etc.)
  eleventyConfig.addPassthroughCopy("src/assets"); // e.g., background image
  eleventyConfig.addPassthroughCopy("src/admin");  // Netlify CMS
  eleventyConfig.addPassthroughCopy({ "src/images/uploads": "images/uploads" }); // Paintings

  // ✅ Add paintings collection
  eleventyConfig.addCollection("paintings", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/paintings/*.md");
  });

  // ✅ Add markdown filters
  eleventyConfig.addLiquidFilter("markdownify", function (value) {
    return md.render(value);
  });

  // ✅ Dummy safe filter for Liquid compatibility
  eleventyConfig.addLiquidFilter("safe", function (value) {
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
