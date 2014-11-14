/*global $,console */
(function ($) {
	'use strict';
	$.fn.examplePlugin = function (options) {
		return this.each(function() {
			var main = {
				options : $.extend(
					{
					},
					options
				),
				elements : {
					parent : null
				},
				values : {
				},
				init : function (el) {
					this.elements.parent = el;
					if (this.elements.parent.length) {
						this.bindEvents();
						this.update();
					}
				},
				bindEvents : function () {
					var that = this;
					// Your stuff here
					this.elements.parent.on('click.examplePlugin', function (event) {
						event.preventDefault();
						event.stopPropagation();
						// Your stuff here
						console.log($(this));
						that.update();
					});
				},
				update : function () {
					// Your stuff here
					console.log('examplePlugin wins');
				}
			};

			main.init($(this));
		});
	};
}($));

// You may want to move this someplace else
$(document).ready(function() {
	'use strict';
	$('#container').examplePlugin({});
});
