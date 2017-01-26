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
	$('legend').focus();
});