(function() {
	var jsdoc,
		doclets;
	
	JSpec.describe('@return', function() {
	
		before(function() {
			// docsets can only be created by parsers
			jsdoc = {
				tag: require('jsdoc/tag'),
				parser: require('jsdoc/parser')
			};
			jsdoc.parser.parseFiles(BASEDIR + 'test/tests/16_tag_return.js');

			doclets = jsdoc.parser.result.map(function($){ return $.toObject(); });
		});
		
		describe('A doclet with a returns tag whose value has a type and description', function() {
			it('should have an `returns` property', function() {
				var doclet = doclets[0];
				expect(doclet).to(have_property, 'returns');
			});
		});
		
		describe('The returns value of that doclet', function() {
			it('should have a single `type` documented as the given type', function() {
				var returns = doclets[0].returns;
				expect(returns).to(have_property, 'type');
				expect(returns.type).to(eql, 'number');
			});
			
			it('should have an `description` property set to the given description', function() {
				var returns = doclets[0].returns;
				expect(returns).to(have_property, 'description');
				expect(returns.description).to(eql, 'The size of the foo.');
			});
		});
		
		describe('A doclet with a (synonym) return tag whose value has a description', function() {
			it('should have an `returns` property', function() {
				var doclet = doclets[1];
				expect(doclet).to(have_property, 'returns');
			});
		});
		
		describe('The returns value of that doclet', function() {
			it('should have an `description` property set to the given description', function() {
				var returns = doclets[1].returns;
				expect(returns).to(have_property, 'description');
				expect(returns.description).to(eql, 'So a horse walks into a....');
			});
		});
		
		describe('The returns value of a doclet with multiple @returns', function() {
			it('should only have the first return documented.', function() {
				var returns = doclets[2].returns;
				expect(returns).to(have_property, 'description');
				expect(returns.description).to(eql, 'And so forth.');
			});
		});
		
		describe('The return with multiple types', function() {
			it('should document those types as an array.', function() {
				var returns = doclets[2].returns;
				expect(returns).to(have_property, 'type');
				expect(returns.type).to(eql, ['number', 'string']);
			});
		});
		
	});
})();

(function testarea() {

	/**
		@function foo
		@returns {number} The size of the foo.
	 */
	 
	 /**
		@function  bar
		@return    So a horse walks into a....
	 */
	 
	 /**
		@function  baz
		@returns {number|string} And so forth.
		@returns And so on.
	 */
	
})();