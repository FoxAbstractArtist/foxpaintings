const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function(eleventyConfig) {
  // ✅ Copy static assets properly
  eleventyConfig.addPassthroughCopy("src/assets"); // Background, icons, etc.
  eleventyConfig.addPassthroughCopy("src/admin");  // Netlify CMS
  eleventyConfig.addPassthroughCopy({ "src/images/uploads": "images/uploads" }); // Paintings folder (correct mapping)

  // ✅ Add collection for paintings
  eleventyConfig.addCollection("paintings", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/paintings/*.md");
  });

  // ✅ Liquid filters
  eleventyConfig.addLiquidFilter("markdownify", function(value) {
    return md.render(value);
  });

  eleventyConfig.addLiquidFilter("safe", function(value) {
    return value;
  });

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
