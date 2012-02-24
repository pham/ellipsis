(function($) {
$.fn.ellipsis = function() {
	return this.each(function() {
		var _orig_h = $(this).height(),
			_str = $(this).html(),
			_max, _i;

		$(this).html('&nbsp;').css({
			height: 'auto',
			display: 'block',
			overflow: 'hidden'
		});

		_max = Math.floor(_orig_h / $(this).height()) * $(this).height();

		for (_i = 1; _i <= _str.length; _i++) {
			$(this).html(_str.substring(0, _i) + '&hellip;');
			if ($(this).height() > _max) {
				$(this).html(_str.substring(0, _i - 1) + '&hellip;');
				break;
			} else {
				$(this).html(_str.substring(0, _i));
			}
		}

		$(this).height(_orig_h);
		return true;
	});
};
}(jQuery));
