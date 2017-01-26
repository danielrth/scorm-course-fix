    var answerTotal =0;
    var correctCount = 0;
    var distractorCount = 0;

    console.log("correctCount = " + correctCount); 
    console.log('distractorCount = ' + distractorCount);

/* Function init starts here*/
$(function () {
   init();
});


function init() {
    var answerList = $('#answerDiv .draggable');
    var questionList = $('#questionDiv .droppable');
    answerTotal = answerList.length + distractorCount;

    /*Assign properties to all ".draggable" class objects*/
    $(".draggable").data( 'originLeft', $(".draggable").position().left)    
          .data( 'originTop', $(".draggable").position().top)             
          .data( 'dropContainer', '#answerDiv' )
          .draggable( {containment: '#content', stack: '.draggable', cursor: 'move', 
                drag: function (event, ui ){$(this).draggable( 'option', 'revert', true )} 
      });

    /*Assign a data 'number' to each element inisde "#answerDiv"*/
    /*
    for (i=0; i<answerList.length;i++) {                                            
        $(answerList[i]).data( 'number', i )
    }
    */

    /*Assign properties to all ".droppable" class objects*/
    $(".droppable").droppable({accept: '.draggable', hoverClass: 'hovered', tolerance: 'pointer', drop: handleCardDrop});

    /*Assign a data 'number' to each <div> inisde "#answerDiv"*/
    /*
    for (i=0; i<questionList.length;i++) {
        $(questionList[i]).data( 'number', i )
    }
    */    

    /*Randomize the display order for each <div> in '#answerDiv'*/
    $(function () {
        var parent = $("#answerDiv");
        var divs = parent.children();
        while (divs.length) {questionDiv
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });

    /*Make '#answerDiv' drop-capable and sortable*/
    $("#answerDiv").droppable({ 
            accept: ".draggable", 
            tolerance: 'pointer',
            drop: function(event, ui) {
                    var dropped = ui.draggable;
                    var droppedOn = $(this);
                    $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);

                    var thisData = ui.draggable.data( 'dropContainer');

                    ui.draggable.data( 'dropContainer', thisData );                 //save the starting '.droppable' id property
                    $(thisData).droppable();                                        //initialize the starting '.droppable'
                    $(thisData).droppable( "enable" );                              //re-enable the droppable after a draggable is dragged out
                     ui.draggable.data( 'dropContainer', '' );                      //clear the starting .droppable' id property                

                    if ( ui.draggable.hasClass( 'correct' ) ) { 
                        ui.draggable.removeClass( 'correct' );                      //Remove 'correct' class from '.draggable'
                    } 
                    if ( ui.draggable.hasClass( 'incorrect' ) ) { 
                        ui.draggable.removeClass( 'incorrect' );                    //Remove 'incorrect' class from '.draggable'
                    } 
            }
    });

/*Check the answer totals when the SUBMIT BUTTON is clicked*/
    $('form').on('submit', function (e) {
        var answerList = $('#answerDiv .draggable');
        var questionList = $('#questionDiv .draggable');
        correctCount=0;
        distractorCount=0;
        for (i=0; i<answerList.length;i++) {                                            
            if ($(answerList[i]).hasClass('distractor')) {
                distractorCount+=1;
                console.log("distractorCount is: " + distractorCount);
            }
        }
        for (i=0; i<questionList.length;i++) {
            if ($(questionList[i]).hasClass('correct')) {
                correctCount+=1;
                console.log("correctCount is: " + correctCount);
            }
        }
        if((correctCount + distractorCount) == answerTotal){
            $('#correctModal').modal('show');   
        } else {
            $('#inCorrectModal').modal('show');
        } 

        e.preventDefault();
    });


/*Reset the form when the RESET BUTTON is clicked*/
    $('form').on('reset', function (e) {
        correctCount = 0;   //reset the correct answer count to zero
        $(".draggable").detach().css({top: 0,left: 0}).appendTo("#answerDiv");
        $(".draggable").data( 'dropContainer', ''); 
        if ($(".draggable").hasClass( 'incorrect' ) ) { 
                $(".draggable").removeClass( 'incorrect' );
            }   
        if ($(".draggable").hasClass( 'correct' ) ) { 
                $(".draggable").removeClass( 'correct' ); 
            }   
        $(".droppable").droppable( "enable" );
        console.log("Correct answer count is: " + correctCount); 

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
    $('#answerDiv').focus();
};
/* Function init ends here*/



/* Function handleCardDrop starts here*/
function handleCardDrop(event, ui) {
    var dropped = ui.draggable;
    var droppedOn = $(this);
    var thisData = ui.draggable.data( 'dropContainer');

    ui.draggable.data( 'dropContainer', thisData );                                 //save the starting '.droppable' id property
    $(thisData).droppable();                                                        //initialize the starting '.droppable'
    $(thisData).droppable( "enable" );                                              //re-enable the droppable after a draggable is dragged out
    ui.draggable.data( 'dropContainer', '' );                                       //clear the starting .droppable' id property

    if ( droppedOn.data( 'number' ) == dropped.data( 'number' ) ) {                 //check 'dropped' against 'droppedOn', if true:
        if ( ui.draggable.hasClass( 'incorrect' ) ) { 
            ui.draggable.removeClass( 'incorrect' );                                //Remove 'correct' class from '.draggable'
        }    
        ui.draggable.addClass( 'correct' );                                         //add 'correct' class to draggable

        $(this).droppable( 'disable' );                                             //disable droppable property of droppable area

        $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn); 
        ui.draggable.data( 'dropContainer', ('#' + $(this).attr('id')));            
    } 
    else {    
        if ( ui.draggable.hasClass( 'correct' ) ) { 
            ui.draggable.removeClass( 'correct' );                                  //Remove 'correct' class from '.draggable'
        }
        if ( ui.draggable.hasClass( 'distractor') ) { 
            if ( ui.draggable.hasClass('incorrect') ) { 
                console.log("distractorCount = " + distractorCount); 
            }
        }                                                      
        ui.draggable.addClass( 'incorrect' );                                       //add 'incorrect' class to draggable
        $(this).droppable( 'disable' );                                             //disable droppable property of droppable area

        $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn); 
        ui.draggable.data( 'dropContainer', ('#' + $(this).attr('id')));            //console.log("Drop container is: " + ui.draggable.data( 'dropContainer'));      
    }  
}
/* Function handleCardDrop ends here*/
