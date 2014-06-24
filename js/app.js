jQuery(function ($) {
	$('.nav li').each(function (index) {
		$(this).click(function () {
			$(this).addClass('active').siblings().removeClass('active');
			var div = $('#main').children().addClass('hide').get(index);
			if (div) {
				$(div).removeClass('hide');
			}
		});
	});
	
	$('#btn-pretty').click(function () {
		var code = $('#code').val(),
			json,
			$result = $('#result').hide();
		if (code) {
			try {
				json = JSON.parse(code.replace(/\s/g, ""));
				$result.html(prettyPrintOne(JSON.stringify(json, undefined, 2)));
			}
			catch (e) {
				$result.html(prettyPrintOne(code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'), '.js', false));
			}

			prettyPrint(function () {
				$result.show();
			}, $result[0]);
		}
	});
});
