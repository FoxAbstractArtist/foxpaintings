module.exports = function (eleventyConfig) {
  // Pass through the admin folder inside src
  eleventyConfig.addPassthroughCopy("src/admin");

  // Pass through images/uploads folder (which is at root, outside src)
  eleventyConfig.addPassthroughCopy("images/uploads");

  // Add paintings collection
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
