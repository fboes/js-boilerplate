/*global $,console */
(function ($) {
	"use strict";
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
					this.elements.parent.on('click.TheMachine', function (event) {
						event.preventDefault();
						event.stopPropagation();
						// Your stuff here
						that.update(); // $(this)
					});
				},
				update : function () {
					// Your stuff here
					console.log('TheMachine wins');
				}
			};

			main.init($(this));
		});
	};
}($));