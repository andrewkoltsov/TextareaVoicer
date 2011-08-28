$(function(){
	if (!localStorage["lang"]) {
		localStorage["lang"] = 'en';
	}
	setInterval(function(){
		var textareas = $('textarea[has_mic!=true]');
		console.log(textareas.length);
		textareas.each(function(i) {
			$this = $(this);
			if (!$this.attr('has_mic')) {
				var str = '<input type="text" class="mic-for-textarea"  style="width: 25px; height: 25px; font-size: 25px; cursor: pointer; border: none; position: absolute; margin-left: -27px; margin-top: 1px; outline: none; background: transparent;" x-webkit-speech id="mic_'+i+'_'+this.id+'" lang="' + localStorage["lang"] + '" />';
				var $input = $(str);
				$input.insertAfter(this);
				var input = $input[0];
				input.onfocus = input.blur;
				input.onwebkitspeechchange = function(e) {
				    console.log(e); // SpeechInputEvent
				    this.previousSibling.value = this.value;
				};
				$this.attr('has_mic', true);
			}
		});
	}, 2000);
});