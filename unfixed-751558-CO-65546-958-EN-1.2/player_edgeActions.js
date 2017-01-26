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
    
    
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
        sym.stop();

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
		sym.stop();
		sym.$('no_btn').on('click', function (){
			sym.play("languageSelector");
		});
		sym.$('yes_btn').on('click', function (){
			NS.Resume();
			sym.play("loadingInterface");
		});
    });

	//Edge binding end
	Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1010, function(sym, e) {
		var data = NS.GetLanguages();
		$.each(data, function(index, item) {
			var s = sym.createChildSymbol("template", "language");
			s.getSymbolElement()
				.attr('title', item.label)
				.css({'position': 'relative'})
				.on('click', function () {
					NS.SelectLanguage(item.id);
					sym.play("loadingInterface");
				});
			s.$('title').text(item.label);
			s.play(index * -500);
		});
		$("[class^='link_'],[class*=' link_']").each(function () {
			$(this).replaceWith('<button id="' + $(this).attr('id') + '" class="' + $(this).attr("class") + '" style="' + $(this).attr('style') + '" type="button">' + $(this).html() + '</button>')
		});
	});

	//Edge binding end
    Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
        var localizedValues = NS.GetLocalizedValues();
        
        sym.$('Next').attr('title', localizedValues.next);
        sym.$('previous').attr('title', localizedValues.back);
        sym.$('Captioning').attr('title', localizedValues.caption);
        sym.$('Replay').attr('title', localizedValues.replay);
        sym.$('Play').attr('title', localizedValues.play);
        sym.$('Audio').attr('title', localizedValues.audio);
        
        var nextOptions = {
			onEnable: function() {
				sym.$('Next').show();
				sym.$('Next_disabled').hide();
				var next = sym.$("Next");
				TweenMax.to(next, 1, {left:"30px", repeat:5, yoyo:true});
			},
			onDisable: function(){
				sym.$('Next').hide();
				sym.$('Next_disabled').show();
			},
			disableOnNext: false
        };
        var previousOptions = {
			onEnable: function() {
				sym.$('previous').show();
				sym.$('Previous_disabled').hide();
			},
			onDisable: function(){
				sym.$('previous').hide();
				sym.$('Previous_disabled').show();
			}
        };
        var splitTextTimeline = new TimelineMax();
        var interfaceOptions = {
			onScoFinish: function() {
				sym.$('previous').hide();
				sym.$('Next').hide();
			},
			onAnimate: function (bullets, captions) {
				splitTextTimeline.clear().time(0);
				var BulletBox = sym.$("BulletBox");
				sym.getSymbol('BulletBox').$('bulletText').html(bullets);
				sym.getSymbol('ClosedCaptioning').$('captionText').html(captions);
				var Presenter = sym.$("Presenter");
				var Kickback = sym.$("Kickback");
				
				var bulletList = $('li[data-time], h3[data-time]');
				if (bulletList.length > 0) {
					TweenMax.set(BulletBox, {autoAlpha:1, scale:1});
					TweenMax.to(Presenter, 1, {left:"166px", scale:0.74});
					TweenMax.to(Kickback, 1, {left:"166px", scale:0.74});
				
					bulletList.each(function (index, item) {
					var time = $(item).data('time');
					splitTextTimeline.from($(item), 0.5, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -150"}, time);
					});
				} else {
					TweenMax.set(BulletBox, {autoAlpha:0, scale:0});
					TweenMax.to(Presenter, 1, {left:"0px", scale:1});
					TweenMax.to(Kickback, 1, {left:"0px", scale:1});
				}
				var captionList = $('q[data-time]');
				if (captionList.length > 0) {
					var previousItem;
					captionList.each(function (index, item) {
						var time = $(item).data('time');
						splitTextTimeline.from($(item), 0.5, {autoAlpha:0}, time);
						if	(previousItem) {
							splitTextTimeline.to(previousItem, 0.5, {autoAlpha:0}, time);
						}
						previousItem = $(item);
					});
				}
			},
			setProgressBar: function (percent) {
				sym.getSymbol('ProgressBar').$('progBar').width(percent + '%');
			},
			titleField: sym.$('courseName'),
			frameField: sym.$('frameCounter'),
			presentorFrame: sym.$('Presenter'),
			kickbackFrame: sym.$('Kickback')
			//commaHack: true
			//scoreHack: true
			//rusticiHack: false
        };
		sym.$('Next').on('click', NS.Next(nextOptions));
		sym.$('previous').on('click', NS.Previous(previousOptions));
		sym.$('Replay').on('click', NS.Replay());
		
		var playOptions = {
			play: function () {
				$("#Stage_Play_Play2").hide();
				$("#Stage_Play_Pause2").show();
				splitTextTimeline.play();
			},
			pause: function () {
				$("#Stage_Play_Play2").show();
				$("#Stage_Play_Pause2").hide();
				splitTextTimeline.pause();
			}
        }
        sym.$('Play').on('click', NS.Play(playOptions));
        
        var mutedOptions = {
			mute: function () {
				$("#Stage_Audio_audioOn").hide();
				$("#Stage_Audio_audioMuted").show();
			},
			unMute: function () {
				$("#Stage_Audio_audioOn").show();
				$("#Stage_Audio_audioMuted").hide();
			}
        }
        sym.$('Audio').on('click', NS.Mute(mutedOptions));
        
        NS.InitInterface(interfaceOptions);
    });
    //Edge binding end

    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
        yepnope({
          load: "css/bullets.css",
          complete: function() {
            // Do something when loading is complete
          }
        });
        
        sym.stop();
        
		$("[class^='link_'],[class*=' link_']").each(function () {
			$(this).replaceWith('<button id="' + $(this).attr('id') + '" class="' + $(this).attr("class") + '" style="' + $(this).attr('style') + '" type="button">' + $(this).html() + '</button>')
		});
        
        function initCallback(resuming) {
			sym.$('UsernameText').html(NS.GetStudentName());

			if (resuming) {
				var localizedValues = NS.GetLocalizedValues();
			
				sym.$('ContinueText').text(localizedValues.resumeText);
				sym.$('yes_btn').attr('title', localizedValues.resumeYes);
				sym.$('yes_text').text(localizedValues.resumeYes);
				sym.$('no_text').text(localizedValues.resumeNo);
				sym.$('no_btn').attr('title', localizedValues.resumeNo);
				sym.play("resume");
			} else {
				sym.play("languageSelector");
			}
		}
        
        NS.InitSco(initCallback);
    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
        var BulletBox = sym.$("BulletBox");
        var ClosedCaptioning = sym.$("ClosedCaptioning");
        
        TweenMax.set(BulletBox, {autoAlpha:0, scale:0});
        TweenMax.set(ClosedCaptioning, {autoAlpha:0, scale:0});
        
        sym.$('Captioning').on('click', function (){
        if ($("#Stage_Captioning_CCon").is(":visible")) {
          $("#Stage_Captioning_CCon").hide();
          $("#Stage_Captioning_ccOff").show();
          TweenMax.to(ClosedCaptioning, 1.5, {autoAlpha:1, scale:1});
        } else {
          $("#Stage_Captioning_CCon").show();
          $("#Stage_Captioning_ccOff").hide();
          TweenMax.to(ClosedCaptioning, 1.5, {autoAlpha:0, scale:0});
        }
        });

    });
    //Edge binding end

    Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
        link_1 ='#';

    });
    //Edge binding end

    

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
        // insert code here
        sym.stop();

    });
    //Edge binding end

  })("stage");
  //Edge symbol end:'stage'

  //=========================================================
  
  //Edge symbol: 'previous'
  (function(symbolName) {   
  
  })("previous3");
  //Edge symbol end:'previous3'

  //=========================================================
  
  //Edge symbol: 'Replay'
  (function(symbolName) {   
  
    

    

    

  })("Replay");
  //Edge symbol end:'Replay'

  //=========================================================
  
  //Edge symbol: 'CC'
  (function(symbolName) {   
  
  })("CC");
  //Edge symbol end:'CC'

  //=========================================================
  
  //Edge symbol: 'Next'
  (function(symbolName) {   
  
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
        sym.stop();
        

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
        sym.stop();

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
        sym.stop();

    });
    //Edge binding end

  })("Next");
  //Edge symbol end:'Next'

  //=========================================================
  
  //Edge symbol: 'Next2'
  (function(symbolName) {   
  
    

    

    

  })("Next2");
  //Edge symbol end:'Next2'

  //=========================================================
  
  //Edge symbol: 'previous2'
  (function(symbolName) {   
  
    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
        sym.stop();

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
        sym.stop();

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
        sym.stop();

    });
    //Edge binding end

  })("previous");
  //Edge symbol end:'previous'

  //=========================================================
  
  //Edge symbol: 'TopBar'
  (function(symbolName) {   
  
  })("TopBar");
  //Edge symbol end:'TopBar'

  //=========================================================
  
  //Edge symbol: 'template'
  (function(symbolName) {   
  
  })("template");
  //Edge symbol end:'template'

  //=========================================================
  
  //Edge symbol: 'ProgressBar'
  (function(symbolName) {   
  
  })("ProgressBar");
  //Edge symbol end:'ProgressBar'

  //=========================================================
  
  //Edge symbol: 'Bullets'
  (function(symbolName) {   
  
  })("Bullets");
  //Edge symbol end:'Bullets'

  //=========================================================
  
  //Edge symbol: 'MenuPanel'
  (function(symbolName) {   
  
  })("MenuPanel");
  //Edge symbol end:'MenuPanel'

  //=========================================================
  
  //Edge symbol: 'ClosedCaptioning'
  (function(symbolName) {   
  
  })("ClosedCaptioning");
  //Edge symbol end:'ClosedCaptioning'

  //=========================================================
  
  //Edge symbol: 'MenuBox'
  (function(symbolName) {   
  
  })("MenuBox");
  //Edge symbol end:'MenuBox'

  //=========================================================
  
  //Edge symbol: 'captionText'
  (function(symbolName) {   
  
  })("captionText");
  //Edge symbol end:'captionText'

  //=========================================================
  
  //Edge symbol: 'captionText2'
  (function(symbolName) {   
  
  })("captionText2");
  //Edge symbol end:'captionText2'

  //=========================================================
  
  //Edge symbol: 'bulletText'
  (function(symbolName) {   
  
  })("bulletText");
  //Edge symbol end:'bulletText'

  //=========================================================
  
  //Edge symbol: 'Next_disabled'
  (function(symbolName) {   
  
  })("Next_disabled");
  //Edge symbol end:'Next_disabled'

  //=========================================================
  
  //Edge symbol: 'Pause'
  (function(symbolName) {   
  
  })("Pause");
  //Edge symbol end:'Pause'

  //=========================================================
  
  //Edge symbol: 'Play'
  (function(symbolName) {   
  
  })("Play");
  //Edge symbol end:'Play'

  //=========================================================
  
  //Edge symbol: 'Previous_disabled'
  (function(symbolName) {   
  
  })("Previous_disabled");
  //Edge symbol end:'Previous_disabled'

  //=========================================================
  
  //Edge symbol: 'ccOff'
  (function(symbolName) {   
  
  })("ccOff");
  //Edge symbol end:'ccOff'

  //=========================================================
  
  //Edge symbol: 'ccOn'
  (function(symbolName) {   
  
  })("ccOn");
  //Edge symbol end:'ccOn'

  //=========================================================
  
  //Edge symbol: 'Preloader'
  (function(symbolName) {   
  
  })("Preloader");
  //Edge symbol end:'Preloader'

  //=========================================================
  
  //Edge symbol: 'Audio'
  (function(symbolName) {   
  
  })("Audio");
  //Edge symbol end:'Audio'

  //=========================================================
  
  //Edge symbol: 'ClosedCaptioning2'
  (function(symbolName) {   
  
  })("ClosedCaptioning2");
  //Edge symbol end:'ClosedCaptioning2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-872154746");