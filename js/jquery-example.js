(function ($) {
	$.fn.examplePlugin = function (options) {
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
				// Your stuff here
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

		return this.each(function() {
			main.init($(this));
		});
	}
})(jQuery);

// You may want to move this someplace else
$(document).ready(function() {
	$('#container').examplePlugin({});
});