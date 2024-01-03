module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/favicon');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addWatchTarget('src/js');
    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        dir: {
            input: 'src',
        },
    };
};