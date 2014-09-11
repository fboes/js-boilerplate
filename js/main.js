/*global console */
(function () {
	"use strict";
	var TheMachine = {
		options : {
			parentSelector : 'container'
		},
		elements : {
			parent : null
		},
		values : {
		},
		init : function (options) {
			var attrname;
			for (attrname in options) {
				if (options.hasOwnProperty(attrname)) {
					this.options[attrname] = options[attrname];
				}
			}
			this.elements.parent = document.getElementById(this.options.parentSelector);
			if (this.elements.parent !== undefined) {
				this.bindEvents();
				this.update();
			}
		},
		bindEvents : function () {
			var that = this;
			// Your stuff here
			this.elements.parent.addEventListener('click', function () {
				event.stopPropagation();
				// Your stuff here
				that.update(); // this
			},false);
		},
		update : function () {
			// Your stuff here
			console.log('TheMachine wins');
		}
	};

	// You may want to move this someplace else
	window.onload = function() {
		TheMachine.init();
	};
}());
