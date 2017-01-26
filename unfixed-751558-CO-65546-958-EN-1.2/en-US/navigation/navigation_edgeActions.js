/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 80742, function(sym, e) {
         parent.NS.SlideEnd();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
      
         if	(isDevice) {
         	sym.stop();
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${audio-play}", "click", function(sym, e) {
         
         sym.playAll();
         
         // Play an audio track 
         sym.$("mike")[0].play();
         
         
         
         
         
         

      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var options = {
            			slidePause: function () {
            				sym.stop();
                  		sym.$("mike")[0].pause();
            			},
            			slidePlay: function () {
         	   			sym.play();
         				sym.$("mike")[0].play();
            			}
            		};
                 parent.NS.SlideStart(options);

      });
      //Edge binding end
      
      

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "slide");