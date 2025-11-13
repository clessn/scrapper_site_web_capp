module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

module.exports = function(eleventyConfig) {
  // Copy all assets to the output folder
  eleventyConfig.addPassthroughCopy("src/assets");
};

module.exports = function(eleventyConfig) {
  // Copy assets as-is
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy static folders as-is
  eleventyConfig.addPassthroughCopy("src/static");

  // Optional: set input/output folders if different from default
  return {
    dir: {
      input: "src/pages",
      output: "_site"
    }
  };
};
