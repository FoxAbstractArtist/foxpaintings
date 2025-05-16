module.exports = function (eleventyConfig) {
  // Pass through admin folder to output (_site/admin)
  eleventyConfig.addPassthroughCopy("admin");

  // Pass through images/uploads folder
  eleventyConfig.addPassthroughCopy("images/uploads");

  // Add a collection for paintings
  eleventyConfig.addCollection("paintings", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/paintings/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
