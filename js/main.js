var TheMachine = {
	options : {

	},
	elements : {
		parent : null
	},
	values : {

	},
	init : function (options) {
		this.options = options;
		// Your stuff here
		this.elements.parent = $('#container');
		this.bindEvents();
	},
	bindEvents : function () {
		var that = this;
		// Your stuff here
		this.elements.parent.on('click', function (event) {
			event.preventDefault();
			event.stopPropagation();
			that.update(); // $(this)
		})
	},
	update : function () {
		// Your stuff here
		console.log('TheMachine wins');
	}
}

// You may want to move this someplace else
$(document).ready(function() {
	TheMachine.init();
});