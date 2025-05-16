module.exports = function (eleventyConfig) {
  // Passthrough copies (keep as you have)
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("images/uploads");

  // Paintings collection (keep as is)
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
    markdownTemplateEngine: "liquid",   // <--- Add this line
    dataTemplateEngine: "liquid",       // Optional but recommended
    htmlTemplateEngine: "liquid",       // Optional but recommended
  };
};
