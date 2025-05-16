const md = new markdownIt();

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("images/uploads");

  eleventyConfig.addCollection("paintings", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/paintings/*.md");
  });

  // Add markdownify filter for Liquid
  eleventyConfig.addLiquidFilter("markdownify", function(value) {
    return md.render(value);
  });

  // Add a no-op "safe" filter to avoid 'undefined filter: safe' error in Liquid
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
