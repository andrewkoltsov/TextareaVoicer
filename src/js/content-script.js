(function() {
	console.log('en');
	var textareas = document.querySelectorAll('textarea');
	Array.prototype.forEach.call(textareas, function(textarea, i) {
		var inputId = ['mic', i, textarea.id || 'unid'].join('_');
		var input = document.getElementById(inputId)
			|| document.createElement('input'),
				attrs = {
					'type': 'text',
					'class': 'mic-for-textarea',
					'x-webkit-speech': 'x-webkit-speech',
					'id': inputId,
					'lang': 'en',
					'has_mic': 'true'
				},
				style = {
					'width': '25px',
					'height': '25px',
					'font-size': '25px',
					'cursor': 'pointer',
					'border': 'none',
					'position': 'absolute',
					'outline': 'none',
					'background': 'transparent',
					'z-index': 99,
					'-webkit-box-shadow': 'none',
					'top': String(textarea.offsetTop + textarea.offsetHeight - 30)
						.concat('px'),
					'left': String(textarea.offsetLeft + textarea.offsetWidth - 30)
						.concat('px')
				};
		for (var attrName in attrs) {
			input.setAttribute(attrName, attrs[attrName]);
		}
		var styleAttrValue = '';
		for (var styleName in style) {
			styleAttrValue += styleName + ': ' + style[styleName] + ';';
	}
		input.setAttribute('style', styleAttrValue);
		textarea.offsetParent.appendChild(input);
		input.onfocus = input.blur;
		input.onwebkitspeechchange = function() {
			textarea.value = this.value;
			this.value = '';
		};
	});

})();