    var answerTotal;
    var correctCount = 0;
    //console.log("correctCount = " + correctCount); 

/* Function init starts here*/
$(function () {
    var answerList = $('#sortable .ui-state-default');
    var questionList = $('#questionDiv .droppable');
    answerTotal = answerList.length;
    //console.log("correctCount = " + correctCount);

    /*Assign properties to all ".draggable" class objects*/
    $( "#sortable" ).sortable({
      placeholder: "sortable-placeholder"
    });
    $( "#sortable" ).disableSelection();

    /*Assign a data 'number' to each <div> inisde "#answerDiv"*/
    //console.log("Read answer buttons ");                                            
    for (i=0; i<answerList.length;i++) {                                            
        $(answerList[i]).data( 'number', i )
        console.log( $(answerList[i]).attr('id') + " is number " + $(answerList[i]).data("number"));
    }
   
    /*Randomize the display order for each <div> in '#sortable'*/
    $(function () {
        var parent = $("#sortable");
        var divs = parent.children();
        while (divs.length) {sortable
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });

/*Check the answer totals when the SUBMIT BUTTON is clicked*/
    $('form').on('submit', function (e) {
        var answerList = $('#sortable .ui-state-default');
        correctCount = 0;   //reset the correct answer count to zero
        for (i=0; i<answerList.length;i++) {
            console.log( "Slot " + i + " is number " + $(answerList[i]).data("number"));
            if (i == $(answerList[i]).data("number")) {
                correctCount +=1;
                console.log("correctCount = " + correctCount);
            }
        }

        if(correctCount == answerTotal){
          $('#correctModal').modal('show');   
        } else {
          correctCount !== answerTotal;   
          $('#inCorrectModal').modal('show');
        }
            e.preventDefault();
    });

    /*Advance to next frame after clicking Continue button*/
    $('.btn-success').on('click', function () {
        if (parent.NS) {
          parent.NS.QuizCorrect();
        }
    });

    /*Kickback to review frame after clicking Ok button*/
    $('.btn-danger').on('click', function () {
        if (parent.NS) {
          parent.NS.QuizIncorrect();
        }
    });

    $('fieldset').focus();
});
/* Function init ends here*/


/*Submit quiz*/
/*
function submitForm(){
    var answerList = $('#sortable .ui-state-default');
    correctCount = 0;   //reset the correct answer count to zero
    for (i=0; i<answerList.length;i++) {
        console.log( "Slot " + i + " is number " + $(answerList[i]).data("number"));
        if (i == $(answerList[i]).data("number")) {
	        correctCount +=1;
            console.log("correctCount = " + correctCount);
        }
    }

    if(correctCount == answerTotal){
      $('#correctModal').modal('show');   
    } else {
      correctCount !== answerTotal;   
      $('#inCorrectModal').modal('show');
    }
}
*/