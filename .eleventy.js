module.exports = ( eleventyConfig, options ) =>
{
	/**
	 * Set a property on an object in Nunjucks

	 * @param {Object} object
	 * @param {string} key
	 * @param {mixed} value
	 * @example
	 * {{ scripts | nunjucksComponents_defineProperty( "keyName", [] ) }}
	 * @returns {Object}
	 */
	eleventyConfig.addFilter( "nunjucksComponents_defineProperty", (object, key, value) =>
	{
		if( !object[key] )
		{
			object[key] = value;
		}
		return object;
	});

	/**
	 * Use to silence return values of JavaScript functions
	 *
	 * @example
	 * {{ array.push( templateVar ) | nunjucksComponents_quiet }}
	 */
	eleventyConfig.addFilter( "nunjucksComponents_quiet", input => {} );

	/**
	 * Filter array contents to unique items only
	 *
	 * @example
	 * {{ array | nunjucksComponents_unique | join( "\n" ) }}
	 */
	eleventyConfig.addFilter( "nunjucksComponents_unique", array =>
	{
		let unique = (value, index, self) =>
		{
			return self.indexOf( value ) === index;
		};

		return array.filter( unique );
	});
};
