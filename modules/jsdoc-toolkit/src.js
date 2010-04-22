/**
	@overview Find source files to be parsed for docs.
	@author Michael Mathews <micmath@gmail.com>
	@license Apache License 2.0 - See file 'LICENSE.markdown' in this project.
 */

/**
	@namespace src
 */
var src = (typeof exports === 'undefined')? {} : exports; // like commonjs

(function() {
	var fs = fs || require('common/fs');
	
	/**
		Get the help text for the command line options.
		@name src.getFilePaths
		@type Function
	 */
	src.getFilePaths = function(searchPaths, depth) {
		var filePaths = [];
		
		searchPaths = searchPaths || [];
		depth = depth || 1;
		
		searchPaths.forEach(function($) {
			filePaths = filePaths.concat(fs.ls($, depth));
		});
		
		filePaths = filePaths.filter(function($) {
			return /.+\.js$/i.test($);
		});
		
		return filePaths;
	}
	
})();