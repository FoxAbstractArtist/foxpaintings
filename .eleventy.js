module.exports = function (eleventyConfig) {
  // Pass through the static folder to the output
  eleventyConfig.addPassthroughCopy("static");

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
