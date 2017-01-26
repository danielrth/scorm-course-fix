var quizData;
var questionId;

//*****************************************************************************************************
//******************************************* LOAD QUIZ DATA ******************************************
//*****************************************************************************************************

$(document).ready(function loadQuizData(){

         //new XMLHttpRequest 
         var xhr = new XMLHttpRequest();

          //assign its onreadystatechange event handler to anonymous function
         xhr.onreadystatechange = function(){
            //4 means request finished and response is ready
            if(xhr.readyState === 4 ){
               //200 means 'OK' - 404 means page not found
               if(xhr.status === 200){

                     //responseText is the built-in result string
                     //ref to the the parsed JSON object
                     quizData = JSON.parse(xhr.responseText).data;

                     questionId = Math.round(Math.random() * (quizData.length- 1)) ;

                     chooseQuizItem();

                     chooseStyle();

                     chooseLanguage();

               }  else {

                  alert('JSON loading error');
               }
            }

         };
          //open an aysnchronous stream to the file
          //xhr.open('GET', 'quiz_data.json', true);
          xhr.open('GET', 'quiz_data/quiz_data.json', true);
          //send the arguments to the XMLHttpRequest instance (basically it loads it)
          xhr.send();

    });



//*****************************************************************************************************
//******************************************* CHOOSE QUIZ ITEM ****************************************
//*****************************************************************************************************

    function chooseQuizItem(){
      //defined in the JSON item's object
      //0 is Multiple Choice
      //1 is Multi-Select
      //2 is Drop-down List
      //3 is Matching (drag-and-drop)
      //4 is Word Bank (drag-and-drop)
      //5 is Group Matching (drag-and-drop)
      //6 is Sorting (drag-and-drop)
      //7 is Multiple Choice Images
      //8 is Multi-Select Images
      //9 is Matching Images (drag-and-drop)
      //10 is Word Bank Images (drag-and-drop)
      //11 is Group Matching Images (drag-and-drop)

      var questionType = quizData[questionId].type;

      switch(questionType){

        case 0:

          showMultipleChoice();

        break;
        case 1:

          showMultiSelect();

        break;
        case 2:

          showDropDownList();

        break;
        case 3:

          showMatching();

        break;
        case 4:

          showWordBank();

        break;
        case 5:

          showGroupMatch();

        break;
        case 6:

          showSorting();

        break;
        case 7:

          showMultipleChoiceImages();

        break;
        case 8:

          showMultiSelectImages();

        break;
        case 9:

          showMatchingImages();

        break;
        case 10:

          showWordBankImages();

        break;
        case 11:

          showGroupMatchImages();

        break;
      }
    }



//*****************************************************************************************************
//******************************************* CHOOSE LANGUAGE *****************************************
//*****************************************************************************************************

    function chooseLanguage(){
      //defined in the JSON item's object
      //0 is English
      //1 is Spanish
      var languageType = quizData[questionId].language;

      if (typeof languageType === "undefined") {
        showEngLang();

      } else {

          switch(languageType){

            case 0:

              showEngLang();// Set as English

            break;
            case 1:

              showEspLang();//Set as Spanish

            break;
          }
      }
    }


//*****************************************************************************************************
//******************************************* CHOOSE MODAL *****************************************
//*****************************************************************************************************
    var cssFile = "";
    var jsFile = "";

    function chooseStyle(){
      //defined in the JSON item's object
      //0 is SafetySkills
      //1 is default
      //2 is iSpring
      var styleType = quizData[questionId].style;
      //console.log(quizData[questionId].style)

      if (typeof styleType === "undefined") {
        showSafetySkills();

      } else {

          switch(styleType){

            case 0:

              showSafetySkills(); //set to SafetySkills style

            break;
            case 1:

              showDefaultStyle(); //set to default style


            break;
            case 2:

              showiSpringStyle(); //set to iSpring style

            break;
          }
      }
    }




//*****************************************************************************************************
//*****************************************************************************************************
//************************************* QUESTION TYPE SELECTIONS **************************************
//*****************************************************************************************************
//*****************************************************************************************************


//*****************************************************************************************************
//******************************************* MULTIPLE CHOICE *****************************************
//*****************************************************************************************************

    function showMultipleChoice(){


      //accessible ref to the JSON quiz data 
      var divStart;
      var selectBox;
      var divEnd;
      var correctValue;
      var currentQuizData = quizData[questionId];

      //Insert "question" into HTML
      $("legend").html(currentQuizData.question);

      //Insert "answers" into HTML
      var numAnswers = currentQuizData.answers.length;
      for(var i = 0; i < numAnswers; i++){
        divStart = "<div> <label class=radio>";
        selectBox = "<input type=radio name=color value=false>";
        divEnd = "<span class='svgCheck' ></span> </label> </div>";
        $("fieldset").append(divStart + selectBox + currentQuizData.answers[i] + divEnd);
      }

      //Insert "correct" into HTML
      document.getElementsByTagName("input")[currentQuizData.correct].setAttribute("value", "true");

      //Insert "submit" button
      $("form").append("<button type='submit' class='btn btn-primary btn-lg'>Submit</button>");

    }


//*****************************************************************************************************
//********************************************* MULTI-SELECT ******************************************
//*****************************************************************************************************

    function showMultiSelect(){

      //accessible ref to the JSON quiz data 
      var divStart;
      var selectBox;
      var divEnd;
      var correctValue;
      var currentQuizData = quizData[questionId];

      //Insert "question" into HTML
      $("legend").html(currentQuizData.question);
        //console.log(currentQuizData.question);  

      //Insert "columns" button      
      $("fieldset").append("<div class='column1'></div>");  
      $("fieldset").append("<div class='column2'></div>");  

      //Insert "answers" into HTML
      var numAnswers = currentQuizData.answers.length;
      for(var i = 0; i < numAnswers; i++){
        divStart = "<div class='checkDiv'> <label class='checkbox' for='check" + (i+1) + "'>";
        selectBox = "<input type='checkbox' name='check" + (i+1) + "' id='check" + (i+1) + "' value='false'>";
        divEnd = "<span class='svgCheck' ></span> </label> </div>";

        $("fieldset").append(divStart + selectBox + currentQuizData.answers[i] + divEnd);
        //console.log(divStart + selectBox + currentQuizData.answers[i] + divEnd);
      }

      //Insert "correct" into HTML
      var numCorrect = currentQuizData.correct.length;

        for(var i = 0; i < numCorrect; i++){
        targetNumber = currentQuizData.correct[i] + 1;
        correctTarget = ("#check" + targetNumber);

        $(correctTarget).attr("value", "true");
      }

      //Insert "submit" button
      $("form").append("<button type='submit' class='btn btn-primary btn-lg'>Submit</button>");

    }


//*****************************************************************************************************
//******************************************* DROP-DOWN LIST ******************************************
//*****************************************************************************************************

    function showDropDownList(){

      //accessible ref to the JSON quiz data 
      var currentQuizData = quizData[questionId];
   

      $("legend").html(quizData[questionId].question);      

      //Insert "answers" into HTML
      $("fieldset").append("<span></span>"); 

      var numAnswers = currentQuizData.answers.length;
      for(var i = 0; i < numAnswers; i++){

        if (currentQuizData.answers[i] == "<SELECT>") {
            $("fieldset span").append("<select id=answer name=select>"); 
            $("span").append("&nbsp;"); 
        } else {
            $("fieldset span").append(currentQuizData.answers[i] + "&nbsp;");
        }
      }

        //Insert "options" into HTML
        var numSelects = currentQuizData.options.length;
        for(var i = 0; i < numSelects; i++){

                optionStart = "<option value=false>";
                optionEnd = "</option>";
                $("select").append(optionStart + currentQuizData.options[i] + optionEnd);
        }

      //Set "correct" into HTML
          var numCorrect = currentQuizData.correct.length;

          for(var i = 0; i< numCorrect; i++){
              var optionValue = (currentQuizData.correct[i]);
              $("select:nth-of-type(" + (i + 1) + ") option:nth-of-type(" + (optionValue + 1) + ")").attr("value", "true");
            }

          //Insert "submit" button
          $("form").append("<button type='submit' class='btn btn-primary btn-lg'>Submit</button>");

    }



//*****************************************************************************************************
//*********************************************** MATCHING ********************************************
//*****************************************************************************************************

    function showMatching(){

      //accessible ref to the JSON quiz data 
      var currentQuizData = quizData[questionId];

      $("legend").html(quizData[questionId].question);      

      //Create "answers"
          //Insert start of #answerDiv
          $("fieldset").append("<div id=answerDiv>");
 
          var answerCount = 1;
          //Prepare "answers" line
          var numAnswers = currentQuizData.answers.length;
          for(var i = 0; i < numAnswers; i++){
            divStart = "<div class=draggable ";
            divId = "id=a" + (answerCount) + " ";
            divData = "data-number=" + (answerCount) + " ";
            divLabel = "><label> ";
            divEnd = " </label></div>";
            answerCount++;
          //Insert "answers" into HTML
            $("#answerDiv").append(divStart + divId + divData + divLabel + currentQuizData.answers[i] + divEnd);
          }

          //Prepare "distrators" line
          var numDistractors = currentQuizData.distractors.length;
          for(var i = 0; i < numDistractors; i++){
            divStart = "<div class='draggable distractor' ";
            divId = "id=a" + (answerCount) + " ";
            divLabel = "><label> ";
            divEnd = " </label></div>";
            answerCount++;
          //Insert "distractors" into HTML
            $("#answerDiv").append(divStart + divId + divLabel + currentQuizData.distractors[i] + divEnd);
          }
          
          //Insert end of #answerDiv
            $("fieldset").append("</div>");     


      //Create "droppables"
          //Insert start of #questionDiv
            $("fieldset").append("<div id=questionDiv>");
          //Prepare "answers" line
          var numDroppables = currentQuizData.droppables.length;
          for(var i = 0; i < numDroppables; i++){
            divSorter = "<div class='sorter'  >";
            divDropStart = "<div class=droppable ";
            divDropId = "id=q" + (i+1) + " ";
            divDropData = "data-number=" + (i+1) + " ";
            divDropEnd = "></div> ";
            divLabelStart ="<div class=questionText><label>"
            divLabelEnd = " </label></div></div>";
          //Insert "answers" into HTML
            $("#questionDiv").append(divSorter + divDropStart + divDropId + divDropData + divDropEnd + divLabelStart + currentQuizData.droppables[i] + divLabelEnd);
          }
          //Insert end of #questionDiv
            $("fieldset").append("</div>"); 
            $("form").append("<button type='submit' class='btn-submit btn btn-primary btn-lg'>Submit</button>"); 
            $("form").append("<button type='reset' class='btn-reset btn btn-primary btn-lg'>Reset</button>");
    }



//*****************************************************************************************************
//********************************************** WORD BANK ********************************************
//*****************************************************************************************************

    function showWordBank(){

      //accessible ref to the JSON quiz data 
      var currentQuizData = quizData[questionId];
      

      $("legend").html(quizData[questionId].question);      

      //Create "answers"
          //Insert start of #answerDiv
            $("fieldset").append("<div id=answerDiv>");
          //Prepare "answers" line
          var answerCount = 1;
          var numAnswers = currentQuizData.answers.length;
          for(var i = 0; i < numAnswers; i++){
            divStart = "<div class='draggable' ";
            divId = "id='a" + (i+1) + "' ";
            divData = "data-number='" + (i+1) + "' >";
            	//console.log(divStart + divId + divData)
//            divData = "data-number=" + (i+1) + " ";
//            divLabel = "><label> ";
//            divEnd = " </label></div>";
            answerCount++;
            //Insert "answers" into HTML
            $("#answerDiv ").append(divStart + divId + divData + "<label>" + currentQuizData.answers[i] + "</label>");
            	//console.log(divStart + divId + divData + "<label>" + currentQuizData.answers[i] + "</label></div>");
          }
          //Prepare "distrators" line
          var numDistractors = currentQuizData.distractors.length;
          for(var i = 0; i < numDistractors; i++){
            divStart = "<div class='draggable distractor' ";
            divId = "id=a" + (answerCount) + " ";
            divLabel = "><label> ";
            divEnd = " </label></div>";
            answerCount++;
            //Insert "distractors" into HTML
            $("#answerDiv").append(divStart + divId + divLabel + currentQuizData.distractors[i] + divEnd);
          }

          //Insert end of #answerDiv
            $("fieldset").append("</div>");     


      //Create "droppables"
          //Insert start of #questionDiv
            $("fieldset").append("<div id=questionDiv>");
          //Prepare "droppables" line
          var numDroppables = currentQuizData.droppables.length;
          var dropCount = 1;
          for(var i = 0; i < numDroppables; i++){
          //Insert "droppables" into HTML
              if (currentQuizData.droppables[i] == "<DROPPABLE>") {
                  divDropStart = "<div class=droppable ";
                  divDropId = "id=q" + (dropCount) + " ";
                  divDropData = "data-number=" + (dropCount) + " ";
                  divDropEnd = "></div> ";
                  dropCount++;
                  //Insert "droppable" into HTML
                  $("#questionDiv").append(divDropStart + divDropId + divDropData + divDropEnd);
              } else {
                  divLabelStart ="<span class=questionText>"
                  divLabelEnd = " </span>"; 
                  //Insert "questionText" into HTML
                  $("#questionDiv").append(divLabelStart + currentQuizData.droppables[i] + divLabelEnd);           
              }
          } 
          //Insert end of #questionDiv
            $("fieldset").append("</div>"); 
            $("form").append("<button type='submit' class='btn-submit btn btn-primary btn-lg'>Submit</button>"); 
            $("form").append("<button type='reset' class='btn-reset btn btn-primary btn-lg'>Reset</button>"); 
    }



//*****************************************************************************************************
//******************************************** GROUP MATCHING *****************************************
//*****************************************************************************************************

    function showGroupMatch(){

      //accessible ref to the JSON quiz data 
      var currentQuizData = quizData[questionId];


      $('legend').html(currentQuizData.question);      

      //Read "groups"
        var numGroup = currentQuizData.groups.length;
        var groupNames = currentQuizData.groups;

      //Create "groupOne", "groupTwo", etc.
          //Insert start of #answerDiv
            $('fieldset').append("<div id='answerDiv'>");

          var answerCount = 1;
          //Select group to insert answers
            for(var g = 0; g < numGroup; g++){           
              //Insert answers from each group
               var currentGroup = groupNames[g].groupName;  
               var numAnswers = currentQuizData.groups[g].answers.length;
               for(var i = 0; i < numAnswers; i++){
                  var currentAnswer = currentQuizData.groups[g].answers[i].answer;
                  var divStart = "<div class='draggable' ";
                  var divId = "id='a" + (answerCount) + "' ";
                  var divAnswerData = "data-number='" + (g) + "' ";  
                  var divLabelStart = "><label>";
                  var divLabelEnd = "</label>";                  
                  var divEnd = " </div>";
                  answerCount++;
                //Insert "answers" into HTML
                  $('#answerDiv').append(divStart + divId + divAnswerData + divLabelStart + currentAnswer + divLabelEnd);
                  $('fieldset').append("</div>");                   
                  //console.log(divStart + divId + divAnswerData + divLabelStart + currentAnswer + divLabelEnd);
                  //console.log("</div>");
                }
            }

          //Prepare "distrators" line
          var numDistractors = currentQuizData.distractors.length;
          for(var i = 0; i < numDistractors; i++){
            var divStart = "<div class='draggable distractor' ";
            var divId = "id=a" + (answerCount) + " ";
            var divLabel = "><label> ";
            var divText = currentQuizData.distractors[i];
            var divEnd = " </label></div>";
            answerCount++;
            //Insert "distractors" into HTML
            $("#answerDiv").append(divStart + divId + divLabel + divText + divEnd);
          }

          //Insert end of #answerDiv
            $("fieldset").append("</div>");     


      //Create "droppables" zone
          //Insert start of #questionDiv
            $("fieldset").append("<div id='questionDiv'>");
          //Prepare "answers" line

          var numDroppables = currentQuizData.groups.length;
          for(var i = 0; i < numDroppables; i++){
            var currentGroup = groupNames[i].groupName;  
            var divDropStart = "<div class='droppable' ";
            var divDropId = "id='q" + (i+1) + "' ";
            var divData = "data-number='" + (i) + "' ";            
            var divDropEnd = ">";
            var divSpanStart ="<span>"
            var divText = groupNames[i].label;
            var divSpanEnd = "</span></div>";

          //Insert "answers" into HTML
           $("#questionDiv").append(divDropStart + divDropId + divData + divDropEnd + divSpanStart + divText + divSpanEnd);
          }

          //Insert end of #questionDiv
            $("fieldset").append("</div>"); 
            $("form").append("<button type='submit' class='btn-submit btn btn-primary btn-lg'>Submit</button>"); 
            $("form").append("<button type='reset' class='btn-reset btn btn-primary btn-lg'>Reset</button>");    

    }



//*****************************************************************************************************
//*********************************************** SORTING *********************************************
//*****************************************************************************************************

    function showSorting(){

      //accessible ref to the JSON quiz data 
      var currentQuizData = quizData[questionId];
     


      $("legend").html(quizData[questionId].question);      

      //Create "answers"
          //Insert start of #answerDiv
            $("fieldset").append("<ul id='sortable'>");
          //Prepare "answers" line
          var numAnswers = currentQuizData.answers.length;
          for(var i = 0; i < numAnswers; i++){
            sortStart = "<li class='ui-state-default' ";
            sortId = "id=a" + (i+1) + "> ";
            sortEnd = " </li>";
          //Insert "answers" into HTML
            $("fieldset ul").append(sortStart + sortId + currentQuizData.answers[i] + sortEnd);
          }
          //Insert end of #answerDiv
            $("fieldset").append("</ul>");     


          //Insert end of #questionDiv
            $("fieldset").append("</div>"); 
            $("form").append("<button type='submit' class='btn btn-primary btn-lg'>Submit</button>"); 
    

    }



//*****************************************************************************************************
//*************************************** MULTIPLE CHOICE IMAGES **************************************
//*****************************************************************************************************

    function showMultipleChoiceImages(){


      //accessible ref to the JSON quiz data 
      var divStart;
      var selectBox;
      var divEnd;
      var correctValue;
      var currentQuizData = quizData[questionId];

      //Insert "question" into HTML
      $("legend").html(currentQuizData.question);

      //Insert "answers" into HTML
      var numAnswers = currentQuizData.answers.length;
      for(var i = 0; i < numAnswers; i++){
        divStart = "<div> <label class=radio>";
        selectBox = "<input type=radio name=color value=false>";
        divEnd = "<span class='svgCheck' ></span> </label> </div>";
        $("fieldset").append(divStart + selectBox + currentQuizData.answers[i] + divEnd);
      }

      //Insert "correct" into HTML
      document.getElementsByTagName("input")[currentQuizData.correct].setAttribute("value", "true");

      //Insert "submit" button
      $("form").append("<button type='submit' class='btn btn-primary btn-lg'>Submit</button>");

    }


//*****************************************************************************************************
//**************************************** MULTI-SELECT IMAGES ****************************************
//*****************************************************************************************************

    function showMultiSelectImages(){

      //accessible ref to the JSON quiz data 
      var divStart;
      var selectBox;
      var divEnd;
      var correctValue;
      var currentQuizData = quizData[questionId];

      //Insert "question" into HTML
      $("legend").html(currentQuizData.question);
        //console.log(currentQuizData.question);            

      //Insert "answers" into HTML
      var numAnswers = currentQuizData.answers.length;
      for(var i = 0; i < numAnswers; i++){
        divStart = "<div> <label class='checkbox' for='check" + (i+1) + "'>";
        selectBox = "<input type='checkbox' name='check" + (i+1) + "' id='check" + (i+1) + "' value='false'>";
        divEnd = "<span class='svgCheck' ></span></label> </div>";
        $("fieldset").append(divStart + selectBox + currentQuizData.answers[i] + divEnd);
        //console.log(divStart + selectBox + currentQuizData.answers[i] + divEnd);
      }

      //Insert "correct" into HTML
      var numCorrect = currentQuizData.correct.length;

        for(var i = 0; i < numCorrect; i++){
        correctValue = i;

        document.getElementsByTagName("input")[currentQuizData.correct[i]].setAttribute("value", "true");
      }

      //Insert "submit" button
      $("form").append("<button type='submit' class='btn btn-primary btn-lg'>Submit</button>");

    }



//*****************************************************************************************************
//****************************************** MATCHING IMAGES ******************************************
//*****************************************************************************************************

    function showMatchingImages(){

      //accessible ref to the JSON quiz data 
      var currentQuizData = quizData[questionId];

      $("legend").html(quizData[questionId].question);      

      //Create "answers"
          //Insert start of #answerDiv
          $("fieldset").append("<div id=answerDiv>");
 
          var answerCount = 1;
          //Prepare "answers" line
          var numAnswers = currentQuizData.answers.length;
          for(var i = 0; i < numAnswers; i++){
            divStart = "<div class=draggable ";
            divId = "id=a" + (answerCount) + " ";
            divData = "data-number=" + (answerCount) + " >";
            divText = "<span>" + (i+1) + "</span>"
            divEnd = " </div>";
            answerCount++;
          //Insert "answers" into HTML
            $("#answerDiv").append(divStart + divId + divData + divText + currentQuizData.answers[i] + divEnd);
          }

          //Prepare "distrators" line
          var numDistractors = currentQuizData.distractors.length;
          for(var i = 0; i < numDistractors; i++){
            divStart = "<div class='draggable distractor' ";
            divId = "id=a" + (answerCount) + " >";
            divEnd = " </div>";
            answerCount++;
          //Insert "distractors" into HTML
            $("#answerDiv").append(divStart + divId + currentQuizData.distractors[i] + divEnd);
          }
          
          //Insert end of #answerDiv
            $("fieldset").append("</div>");     


      //Create "droppables"
          //Insert start of #questionDiv
            $("fieldset").append("<div id=questionDiv>");
          //Prepare "answers" line
          var numDroppables = currentQuizData.droppables.length;
          for(var i = 0; i < numDroppables; i++){
            divSorter = "<div class='sorter'  >";
            divDropStart = "<div class=droppable ";
            divDropId = "id=q" + (i+1) + " ";
            divDropData = "data-number=" + (i+1) + " ";
            divDropEnd = "></div> ";
            divLabelStart ="<div class=questionText><label>"
            divLabelEnd = " </label></div></div>";
          //Insert "answers" into HTML
            $("#questionDiv").append(divSorter + divDropStart + divDropId + divDropData + divDropEnd + divLabelStart + currentQuizData.droppables[i] + divLabelEnd);
          }
          //Insert end of #questionDiv
            $("fieldset").append("</div>"); 
            $("form").append("<button type='submit' class='btn-submit btn btn-primary btn-lg'>Submit</button>"); 
            $("form").append("<button type='reset' class='btn-reset btn btn-primary btn-lg'>Reset</button>");
    }





//*****************************************************************************************************
//********************************************** WORD BANK ********************************************
//*****************************************************************************************************

    function showWordBankImages(){

      //accessible ref to the JSON quiz data 
      var currentQuizData = quizData[questionId];
      

      $("legend").html(quizData[questionId].question);      

      //Create "answers"
          //Insert start of #answerDiv
            $("fieldset").append("<div id=answerDiv>");
          //Prepare "answers" line
          var answerCount = 1;
          var numAnswers = currentQuizData.answers.length;
          for(var i = 0; i < numAnswers; i++){
            divStart = "<div class='draggable' ";
            divId = "id='a" + (i+1) + "' ";
            divData = "data-number='" + (i+1) + "' >";
            divText = "<span>" + (i+1) + "</span>"
//            divData = "data-number=" + (i+1) + " ";
//            divLabel = "><label> ";
            divEnd = " </div>";
            answerCount++;
            //Insert "answers" into HTML
            $("#answerDiv ").append(divStart + divId + divData + divText + currentQuizData.answers[i] + divEnd);
              //console.log(divStart + divId + divData + currentQuizData.answers[i] + divEnd);
          }
          //Prepare "distrators" line
          var numDistractors = currentQuizData.distractors.length;
          for(var i = 0; i < numDistractors; i++){
            divStart = "<div class='draggable distractor' ";
            divId = "id=a" + (answerCount) + " >";
            divEnd = " </div>";
            answerCount++;
            //Insert "distractors" into HTML
            $("#answerDiv").append(divStart + divId + currentQuizData.distractors[i] + divEnd);
          }

          //Insert end of #answerDiv
            $("fieldset").append("</div>");     


      //Create "droppables"
          //Insert start of #questionDiv
            $("fieldset").append("<div id=questionDiv>");
          //Prepare "droppables" line
          var numDroppables = currentQuizData.droppables.length;
          var dropCount = 1;
          for(var i = 0; i < numDroppables; i++){
          //Insert "droppables" into HTML
              if (currentQuizData.droppables[i] == "<DROPPABLE>") {
                  divDropStart = "<div class=droppable ";
                  divDropId = "id=q" + (dropCount) + " ";
                  divDropData = "data-number=" + (dropCount) + " ";
                  divDropEnd = "></div> ";
                  dropCount++;
                  //Insert "droppable" into HTML
                  $("#questionDiv").append(divDropStart + divDropId + divDropData + divDropEnd);
              } else {
                  divLabelStart ="<span class=questionText>"
                  divLabelEnd = " </span>"; 
                  //Insert "questionText" into HTML
                  $("#questionDiv").append(divLabelStart + currentQuizData.droppables[i] + divLabelEnd);           
              }
          } 
          //Insert end of #questionDiv
            $("fieldset").append("</div>"); 
            $("form").append("<button type='submit' class='btn-submit btn btn-primary btn-lg'>Submit</button>"); 
            $("form").append("<button type='reset' class='btn-reset btn btn-primary btn-lg'>Reset</button>"); 

      //Set question script files
      $("body").append("<script src='assets/js/ss-wordbank-quiz-1.0.js'></script>");  
    }



//*****************************************************************************************************
//******************************************** GROUP MATCHING *****************************************
//*****************************************************************************************************

    function showGroupMatchImages(){

      //accessible ref to the JSON quiz data 
      var currentQuizData = quizData[questionId];


      $('legend').html(currentQuizData.question);      

      //Read "groups"
        var numGroup = currentQuizData.groups.length;
        var groupNames = currentQuizData.groups;

      //Create "groupOne", "groupTwo", etc.
          //Insert start of #answerDiv
            $('fieldset').append("<div id='answerDiv'>");

          var answerCount = 1;
          //Select group to insert answers
            for(var g = 0; g < numGroup; g++){           
              //Insert answers from each group
               var currentGroup = groupNames[g].groupName;  
               var numAnswers = currentQuizData.groups[g].answers.length;
               for(var i = 0; i < numAnswers; i++){
                  var currentAnswer = currentQuizData.groups[g].answers[i].answer;
                  var divStart = "<div class='draggable' ";
                  var divId = "id='a" + (answerCount) + "' ";
                  var divAnswerData = "data-number='" + (g) + "' >";  
                  var divEnd = " </div>";
                  answerCount++;
                //Insert "answers" into HTML
                  $('#answerDiv').append(divStart + divId + divAnswerData + currentAnswer + divEnd);
                  $('fieldset').append("</div>");                   
                  //console.log(divStart + divId + divAnswerData + currentAnswer + divEnd);
                  //console.log("</div>");
                }
            }

          //Prepare "distrators" line
          var numDistractors = currentQuizData.distractors.length;
          for(var i = 0; i < numDistractors; i++){
            var divStart = "<div class='draggable distractor' ";
            var divId = "id=a" + (answerCount) + " >";
            var divText = currentQuizData.distractors[i];
            var divEnd = " </div>";
            answerCount++;
            //Insert "distractors" into HTML
            $("#answerDiv").append(divStart + divId + divText + divEnd);
          }

          //Insert end of #answerDiv
            $("fieldset").append("</div>");     


      //Create "droppables" zone
          //Insert start of #questionDiv
            $("fieldset").append("<div id='questionDiv'>");
          //Prepare "answers" line

          var numDroppables = currentQuizData.groups.length;
          for(var i = 0; i < numDroppables; i++){
            var currentGroup = groupNames[i].groupName;  
            var divDropStart = "<div class='droppable' ";
            var divDropId = "id='q" + (i+1) + "' ";
            var divData = "data-number='" + (i) + "' ";            
            var divDropEnd = ">";
            var divSpanStart ="<div><span>"
            var divText = groupNames[i].label;
            var divSpanEnd = "</span></div></div>";

          //Insert "answers" into HTML
           $("#questionDiv").append(divDropStart + divDropId + divData + divDropEnd + divSpanStart + divText + divSpanEnd);
          }

          //Insert end of #questionDiv
            $("fieldset").append("</div>"); 
            $("form").append("<button type='submit' class='btn-submit btn btn-primary btn-lg'>Submit</button>"); 
            $("form").append("<button type='reset' class='btn-reset btn btn-primary btn-lg'>Reset</button>");    

    }



//*****************************************************************************************************
//*****************************************************************************************************
//**************************************** LANGUAGE SELECTIONS ****************************************
//*****************************************************************************************************
//*****************************************************************************************************


//*****************************************************************************************************
//****************************************** ENGLISH LANGUAGE *****************************************
//*****************************************************************************************************
    function showEngLang(){
      	var styleType = quizData[questionId].style;
    	if(styleType !== 2) {
          $("title").html("Review Question");
          $("header").html("<h1>Review Question</h1>");
          $("form button:nth-of-type(1)").html("Submit");
          $("form button:nth-of-type(2)").html("Reset");

          $("#correctModal .modal-header span").append(" CORRECT!");
          $("#correctModal .modal-body").html("Please select the continue button to continue.");
          $("#correctModal .modal-footer button").html("Continue");
          
          $("#inCorrectModal .modal-header span").append(" INCORRECT");
          $("#inCorrectModal .modal-body").html("Please try again. Select the OK button to continue.");
          $("#inCorrectModal .modal-footer button").html("OK");
        }
    }


//*****************************************************************************************************
//****************************************** SPANISH LANGUAGE *****************************************
//*****************************************************************************************************

    function showEspLang(){
      	var styleType = quizData[questionId].style;
    	if(styleType !== 2) {
          $("title").html("Pregunta de repaso");
          $("header").html("<h1>Pregunta de repaso</h1>");
          $("form button:nth-of-type(1)").html("Enviar");
          $("form button:nth-of-type(2)").html("Readjustar");
          $("#correctModal .modal-header span").append(" CORRECTO");
          $("#correctModal .modal-body").html("Por favor, seleccione el bot&oacute;n continuar para seguir adelante.");
          $("#correctModal .modal-footer button").html("Continuar");
          $("#inCorrectModal .modal-header span").append(" INCORRECTO");
          $("#inCorrectModal .modal-body").html("Int&eacute;ntelo nuevamente. Seleccione el bot&oacute;n OK para seguir adelante.");
          $("#inCorrectModal .modal-footer button").html("OK");
        }
    }



//*****************************************************************************************************
//***************************************** SAFETYSKILLS MODAL ****************************************
//*****************************************************************************************************
    function showSafetySkills(){

      /*INSERT "CORRECT" MODAL*/
      $("#correctModal").append("<div class='modal-dialog' role='document'>" +
          "<div class='modal-content'>" +
          "<div class='modal-header' style='padding:35px 50px;' >" +
            "<h4 class='modal-title' id='myModalLabel'>" +
            "<span class='glyphicon glyphicon-ok' style='color:green' aria-hidden='true'><!--Correct message goes here --></span></h4>" +
          "</div>" +
          "<div class='modal-body'>" +
            "<!--Modal message goes here -->" +
          "</div>" +
          "<div class='modal-footer'>" +
            "<button type='button' class='btn btn-success' data-dismiss='modal'> <!--Button message goes here --></button>" +
          "</div>" +
          "</div>" +
        "</div>"
      );

      /*INSERT "INCORRECT" MODAL*/
      $("#inCorrectModal").append("<div class='modal-dialog' role='document'>" +
        "<div class='modal-content'>" +
          "<div class='modal-header 'style='padding:35px 50px;'>" +
            "<h4 class='modal-title' id='myModalLabel'>" +
            "<span class='glyphicon glyphicon-remove' style='color:#b40107' aria-hidden='true'><!--Incorrect message goes here --></span></h4>" +
          "</div>" +
          "<div class='modal-body'>" +
            "<!--Modal message goes here -->" +
          "</div>" +
          "<div class='modal-footer'>" +
            "<button type='button' class='btn btn-danger' data-dismiss='modal'> <!--Button message goes here --></button>" +
          "</div>" +
          "</div>" +
        "</div>"
      ); 


      var questionType = quizData[questionId].type;
      switch(questionType){
        case 0://multiple choice
         //Set JS script files
          $("body").append("<script src='assets/js/types/default/multiple-choice-ss-quiz-1.0.js'></script>");
        break;

        case 1://multi-select
          //Set JS script file
          $("body").append("<script src='assets/js/types/default/multi-select-ss-quiz-1.0.js'></script>");
        break;

        case 2://drop down list
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/drop-down-ss-quiz-1.0.js'></script>"); 
        break;

        case 3://matching
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/matching-ss-quiz-1.0.js'></script>");
        break;

        case 4://word bank
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/wordbank-ss-quiz-1.0.js'></script>"); 
        break;

        case 5://group matching
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/group-match-ss-quiz-1.0.js'></script>"); 
        break;

        case 6://sorting
          //Set JS script file
          $("body").append("<script src='assets/js/types/default/sorting-ss-quiz-1.0.js'></script>"); 
        break;

        case 7://multiple choice
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/multiple-choice-ss-quiz-1.0.js'></script>");
        break;

        case 8://multi-select
          //Set JS script file
          $("body").append("<script src='assets/js/types/default/multi-select-ss-quiz-1.0.js'></script>");
        break;

        case 9://matching
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/matching-ss-quiz-1.0.js'></script>");
        break;

        case 10://word bank
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/wordbank-ss-quiz-1.0.js'></script>"); 
        break;

        case 11://group matching
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/group-match-images-ss-quiz-1.0.js'></script>"); 
        break;

        default:
          alert("This type does not exist!");
      }

      var styleType = quizData[questionId].variant;
      //console.log(styleType);
      if(styleType > 0){
        $("head").append("<link href='assets/css/styles/safetySkills/var/var-" + styleType + ".css' rel='stylesheet' />");        
      } else {
        //Set CSS script files
        switch(questionType){
          case 0://multiple choice
            $("head").append("<link href='assets/css/styles/safetySkills/multiple-choice.css' rel='stylesheet' />");
          break;

          case 1://multi-select
            $("head").append("<link href='assets/css/styles/safetySkills/multi-select.css' rel='stylesheet' />");
          break;

          case 2://drop down list
            $("head").append("<link href='assets/css/styles/safetySkills/drop-down.css' rel='stylesheet' />");   
          break;

          case 3://matching
            $("head").append("<link href='assets/css/styles/safetySkills/matching.css' rel='stylesheet' />");
          break;

          case 4://word bank
            $("head").append("<link href='assets/css/styles/safetySkills/wordbank.css' rel='stylesheet' />");
          break;

          case 5://group matching
            $("head").append("<link href='assets/css/styles/safetySkills/group-match.css' rel='stylesheet' />"); 
          break;

          case 6://sorting
            $("head").append("<link href='assets/css/styles/safetySkills/sorting.css' rel='stylesheet' />"); 
          break;

          case 7://multiple choice
            $("head").append("<link href='assets/css/styles/safetySkills/multiple-choice-images.css' rel='stylesheet' />");
          break;

          case 8://multi-select
            $("head").append("<link href='assets/css/styles/safetySkills/multi-select-images.css' rel='stylesheet' />");
          break;

          case 9://matching
            $("head").append("<link href='assets/css/styles/safetySkills/matching-images.css' rel='stylesheet' />");
          break;

          case 10://word bank
            $("head").append("<link href='assets/css/styles/safetySkills/wordbank-images.css' rel='stylesheet' />");
          break;

          case 11://group matching
            $("head").append("<link href='assets/css/styles/safetySkills/group-match-images.css' rel='stylesheet' />"); 
          break;
        } 
      }
    }



//*****************************************************************************************************
//******************************************* STANDARD MODAL ******************************************
//*****************************************************************************************************
    function showDefaultStyle(){

      /*INSERT "CORRECT" MODAL*/
      $("#correctModal").append("<div class='modal-dialog' role='document'>" +
          "<div class='modal-content'>" +
          "<div class='modal-header' style='padding:35px 50px;' >" +
            "<h4 class='modal-title' id='myModalLabel'>" +
            "<span class='glyphicon glyphicon-ok' style='color:green' aria-hidden='true'><!--Correct message goes here --></span></h4>" +
          "</div>" +
          "<div class='modal-body'>" +
            "<!--Modal message goes here -->" +
          "</div>" +
          "<div class='modal-footer'>" +
            "<button type='button' class='btn btn-success' data-dismiss='modal'> <!--Button message goes here --></button>" +
          "</div>" +
          "</div>" +
        "</div>"
      );

      /*INSERT "INCORRECT" MODAL*/
      $("#inCorrectModal").append("<div class='modal-dialog' role='document'>" +
        "<div class='modal-content'>" +
          "<div class='modal-header 'style='padding:35px 50px;'>" +
            "<h4 class='modal-title' id='myModalLabel'>" +
            "<span class='glyphicon glyphicon-remove' style='color:#b40107' aria-hidden='true'><!--Incorrect message goes here --></span></h4>" +
          "</div>" +
          "<div class='modal-body'>" +
            "<!--Modal message goes here -->" +
          "</div>" +
          "<div class='modal-footer'>" +
            "<button type='button' class='btn btn-danger' data-dismiss='modal'> <!--Button message goes here --></button>" +
          "</div>" +
          "</div>" +
        "</div>"
      ); 
      

      var questionType = quizData[questionId].type;
      switch(questionType){
        case 0://multiple choice
         //Set JS script files
          $("body").append("<script src='assets/js/types/default/multiple-choice-ss-quiz-1.0.js'></script>");
        break;

        case 1://multi-select
          //Set JS script file
          $("body").append("<script src='assets/js/types/default/multi-select-ss-quiz-1.0.js'></script>");
        break;

        case 2://drop down list
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/drop-down-ss-quiz-1.0.js'></script>"); 
        break;

        case 4://wordbank list
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/wordbank-ss-quiz-1.0.js'></script>"); 
        break;

        default:
          alert("This type does not exist!");
      }

      var styleType = quizData[questionId].variant;
      //console.log(styleType);
      if(styleType > 0){
        $("head").append("<link href='assets/css/styles/default/var/var-" + styleType + ".css' rel='stylesheet' />");
      } else {
        //Set CSS script files
        switch(questionType){
          case 0://multiple choice
            //Set CSS script files
            $("head").append("<link href='assets/css/styles/default/multiple-choice.css' rel='stylesheet' />");
          break;

          case 1://multi-select
            $("head").append("<link href='assets/css/styles/default/multi-select.css' rel='stylesheet' />");
          break;

          case 2://drop down list
            $("head").append("<link href='assets/css/styles/default/drop-down.css' rel='stylesheet' />");   
          break;

          case 4://drop down list
            $("head").append("<link href='assets/css/styles/default/wordbank.css' rel='stylesheet' />");   
          break;        } 
      }
    }



//*****************************************************************************************************
//******************************************* ISPRING MODAL ******************************************
//*****************************************************************************************************
    function showiSpringStyle(){

      /*INSERT "CORRECT" MODAL*/
      $("#correctModal").append("<div class='modal-dialog' role='document'>" +
        "<div class='modal-content'>" +
        "<div class='modal-header' style='padding:35px 50px;' >" +
        "</div>" +
        "<div class='modal-body'>" +
        	"<h4 class='modal-title' id='myModalLabel'>" +
        		"<span class='glyphicon glyphicon-ok' aria-hidden='true'></span>" +
        		"<span> Correct</span>" +
        	"</h4>" +
        "</div>" +
        "<div class='modal-footer'>" +
        "<button type='button' class='btn btn-success' data-dismiss='modal'>OK</button>" +
        "</div>" +
        "</div>" +
      "</div>" 
      );

      /*INSERT "INCORRECT" MODAL*/
      $("#inCorrectModal").append("<div class='modal-dialog' role='document'>" +
        "<div class='modal-content'>" +
        "<div class='modal-header 'style='padding:35px 50px;'>" +
        "</div>" +
        "<div class='modal-body'>" +
          "<h4 class='modal-title' id='myModalLabel'>" +
            "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span>" +
            "<div>" +
              "<span> Incorrect</span><BR>" +
              "<span>You have Unlimited attempts</span>" +
            "</div>" +
          "</h4>" +
        "</div>" +
        "<div class='modal-footer'>" +
          "<button type='button' class='btn btn-danger' data-dismiss='modal'>Try Again</button>" +
        "</div>" +
        "</div>" +
      "</div>"
      );


      var questionType = quizData[questionId].type;
      switch(questionType){
        case 0://multiple choice
          //Set CSS script files
          $("head").append("<link href='assets/css/styles/iSpring/multiple-choice.css' rel='stylesheet' />");
          //Set JS script files
          $("body").append("<script src='assets/js/types/default/multiple-choice-ss-quiz-1.0.js'></script>");
          $('#contact header').html("");
          $('#contact button').attr('class','btn-submit');                     
        break;
        break;

        case 1://multi-select
          //Set CSS script file
          $("head").append("<link href='assets/css/styles/iSpring/multi-select.css' rel='stylesheet' />");
          //Set JS script file
          $("body").append("<script src='assets/js/types/default/multi-select-ss-quiz-1.0.js'></script>");
          $('#contact header').html("");
          $('#contact button').attr('class','btn-submit');    
        break;

        default:
          alert("This type does not exist!");
      }
 

    }