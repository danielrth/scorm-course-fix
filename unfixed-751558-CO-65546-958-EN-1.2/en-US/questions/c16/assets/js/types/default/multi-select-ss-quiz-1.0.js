/* global $ */

/*Randomize the display order for each <div> in 'fieldset'*/
$(function () {
	var parent = $("fieldset");	
	var columnOne = $(".column1");
	var columnTwo = $(".column2");
	var divs = parent.children("fieldset .checkDiv");
	while (divs.length) {
		for(var i=divs.length-1; i >= 0; i--){

	        if ( i%2==0 ) {      	
	          columnOne.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	        } else if ( i%2==1 )  {
	          columnTwo.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	        }
	    }    
		//parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	}
});

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




	$('input:checkbox').change(function() {
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


	$('.svgCheck').append('<svg xml:space="preserve" enable-background="new 0 0 21 21" viewBox="0 0 21 21" height="21px" width="21px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1"><path class="check" d="M17.07,5.353h0.002c0.725,0.611,0.82,1.707,0.211,2.436 l-6.721,8.051c-0.07,0.086-0.148,0.162-0.232,0.23c-0.689,0.623-1.76,0.576-2.395-0.107l-4.515-4.867 C2.778,10.404,2.816,9.31,3.505,8.665l0,0C4.194,8.019,5.283,8.057,5.925,8.75l3.193,3.442l5.531-6.625 C15.256,4.837,16.346,4.742,17.07,5.353z" clip-rule="evenodd" fill-rule="evenodd" fill="rgb(51, 122, 183)"></svg>');


	$('.checkbox').focusin(function() {
			console.log($(this));
		if($('input').focus) {	
			$(this).css({'background-color':'rgba(255, 255, 255, 0.2)','border-radius':'5px'})
		}
	})/*.triggerHandler("focusin")*/;


	$('.checkbox').focusout(function() {
			console.log($(this));
		if($('input').focusout) {	
			$(this).css('background-color','')
		}
	});

	$('fieldset').focus();
	
});