/*global console */

var exampleMachine = function(parentEl, parentOptions) {
	'use strict';
	var main = {
		options : {
		},
		elements : {
			parent : null
		},
		values : {
		},
		init : function () {
			var attrname;
			for (attrname in parentOptions) {
				if (parentOptions.hasOwnProperty(attrname)) {
					this.options[attrname] = parentOptions[attrname];
				}
			}
			this.elements.parent = parentEl;
			if (this.elements.parent !== undefined && this.elements.parent !== null) {
				this.bindEvents();
				this.update();
			}
		},
		bindEvents : function () {
			var that = this;
			// Your stuff here
			this.elements.parent.addEventListener('click', function ( event ) {
				event.preventDefault();
				event.stopPropagation();
				// Your stuff here
				console.log(this);
				that.update();
			},false);
		},
		update : function () {
			// Your stuff here
			console.log('exampleMachine wins');
		}
	};
	main.init();
};

// You may want to move this someplace else
window.onload = function() {
	'use strict';
	exampleMachine(document.getElementById('container'));
	// document.getElementsByClassName('header')
};
