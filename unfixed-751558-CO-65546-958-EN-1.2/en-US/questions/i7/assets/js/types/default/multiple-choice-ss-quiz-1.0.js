/* global $ */
$(function () {
	$('form').on('submit', function (e) {
		var correct = true;
		var answers = $(this).serializeArray();
		$(':checkbox').each(function (i, box) {
			var checkAnswer = false;
			if (box.value === 'true') {
				$.each(answers, function (i, answer) {
					if (box.name === answer.name) {
						checkAnswer = true;
					}
				});

				if (checkAnswer) {
					correct = true;
				} else {
					correct = false;
					return false;
				}
			}
		});
		if (correct) {
			correct = false;
			$.each(answers, function (i, answer) {
				if (answer.value === 'false') {
					correct = false;
					return false;
				}

				correct = true;
			});
		}

		if (correct) {
			$('#correctModal').modal('show');
		} else{
			$('#inCorrectModal').modal('show');
		}

		e.preventDefault();
	});
	$('.btn-success').on('click', function () {
		if (parent.NS) {
			parent.NS.QuizCorrect();
		}
	});
	$('.btn-danger').on('click', function () {
		if (parent.NS) {
			parent.NS.QuizIncorrect();
		}
	});



	$('input:radio').change(function() {
	  // this runs, when the checkbox is changed

	  // the label, identified by its "for" attribute
	  var label = $('label[for="'+$(this).attr('id')+'"]');

	  // add or remove a class "checked" on the label
	  if ($(this).filter(":checked").length) {
	    label.addClass("checked");
	  } else {
	    label.removeClass("checked");
	  }
	}).trigger("change"); // run the above once on loading to
	                      // get initial values right


/*INSERT THE SVG CHECKMARK VISUALLY*/
	$('.svgCheck').append('<svg xml:space="preserve" enable-background="new 0 0 21 21" viewBox="0 0 21 21" height="21px" width="21px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1"><circle cx="11" cy="9.5" r="4" stroke="rgb(51, 122, 183)" stroke-width="5.5" fill="rgb(51, 122, 183)"></svg>');


	$('.radio ').focusin(function() {
			console.log($(this));
		if($('.input').focus) {	
			$(this).css({'background-color':'rgba(166, 166, 89, 0.2)','border-radius':'5px'})
		}
	})/*.triggerHandler("focusin")*/;


	$('.radio ').focusout(function() {
			console.log($(this));
		if($('.input').focusout) {	
			$(this).css('background-color','')
		}
	});

	$('fieldset').focus();
});