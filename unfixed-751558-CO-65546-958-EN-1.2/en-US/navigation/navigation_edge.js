/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'de-walpergens-pica, serif': '<script src=\"http://use.edgefonts.net/de-walpergens-pica:n4,i4:all.js\"></script>',
            'patrick-hand, sans-serif': '<script src=\"http://use.edgefonts.net/patrick-hand:n4:all.js\"></script>',
            'walter-turncoat, sans-serif': '<script src=\"http://use.edgefonts.net/walter-turncoat:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"SplitText.min.js",
            js+"TimelineMax.min.js",
            js+"TweenMax.js",
            js+"TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0', '0px', '1280', '565px', 'auto', 'auto'],
                            fill: ["rgba(159,159,159,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'shutterstock_1860383542',
                            type: 'image',
                            rect: ['-10', '-42', '1300px', '720px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"shutterstock_186038354.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['-14', '-12', '1300', '620', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.48)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'TextCopy',
                            display: 'none',
                            type: 'text',
                            rect: ['127', '90', '1017px', '193', 'auto', 'auto'],
                            opacity: '1',
                            text: "Before we start",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [118, "px"], "rgba(255,255,255,1.00)", "900", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['32', '237', '1215', '295', 'auto', 'auto'],
                            opacity: '1',
                            text: "you need to understand the course’s controls",
                            align: "center",
                            userClass: "wave2",
                            font: ['Arial, Helvetica, sans-serif', [92, "px"], "rgba(255,255,255,1.00)", "900", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text2',
                            display: 'block',
                            type: 'text',
                            rect: ['-295px', '27', '1828', '527', 'auto', 'auto'],
                            opacity: '1',
                            text: "Welcome",
                            align: "center",
                            userClass: "flip",
                            font: ['Arial, Helvetica, sans-serif', [365, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'quizCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['322', '600', '675', '295', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"quiz.png",'0px','0px'],
                            transform: [[],[],[],['0.92244','0.92244']]
                        },
                        {
                            id: 'quizCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['322', '600', '675', '295', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"competency%20quiz.png",'0px','0px'],
                            transform: [[],[],[],['0.92244','0.92244']]
                        },
                        {
                            id: 'quizCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['322', '600', '675', '295', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"quiz%20wrong.png",'0px','0px'],
                            transform: [[],[],[],['0.92244','0.92244']]
                        },
                        {
                            id: 'quiz',
                            display: 'none',
                            type: 'image',
                            rect: ['322', '600', '675', '295', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"quiz%20correct.png",'0px','0px'],
                            transform: [[],[],[],['0.92244','0.92244']]
                        },
                        {
                            id: 'closed_captioningCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['-72', '432', '1433px', '627px', 'auto', 'auto'],
                            clip: 'rect(173.8114013671875px 1433px 627px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"closed%20captioning.png",'0px','0px'],
                            transform: [[],[],[],['0.48615','0.48615']]
                        },
                        {
                            id: 'closed_captioning',
                            display: 'none',
                            type: 'image',
                            rect: ['-72', '-42', '1433px', '627px', 'auto', 'auto'],
                            clip: 'rect(173.8114013671875px 1433px 627px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"no%20closed%20captioning.png",'0px','0px'],
                            transform: [[],[],[],['0.6571','0.6571']]
                        },
                        {
                            id: 'buttons',
                            display: 'none',
                            type: 'image',
                            rect: ['176', '608', '892', '57', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['817', '434', '119', '162', 'auto', 'auto'],
                            opacity: '0',
                            text: "X",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [136, "px"], "rgba(255,0,0,1.00)", "900", "none", "normal", "break-word", ""],
                            transform: [[],[],[],['0.88477','0.88477']]
                        },
                        {
                            id: 'Reddown_Arrow_DownCopy4',
                            display: 'none',
                            type: 'image',
                            rect: ['583', '283', '108', '108', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Reddown_Arrow_Down.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Reddown_Arrow_DownCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['815', '283', '108', '108', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Reddown_Arrow_Down.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Reddown_Arrow_DownCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['351', '283', '108', '108', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Reddown_Arrow_Down.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Reddown_Arrow_DownCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['1055', '283', '108', '108', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Reddown_Arrow_Down.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Reddown_Arrow_Down',
                            display: 'none',
                            type: 'image',
                            rect: ['106', '283', '108', '108', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Reddown_Arrow_Down.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text4Copy15',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '6', '1280px', '412', 'auto', 'auto'],
                            text: "This is the ‘play and pause’ button",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [80, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy14',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '6', '867px', '412', 'auto', 'auto'],
                            text: "Topics will play automatically, but you’ll click this button to pause and start them again",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy13',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '6', '1271px', '412', 'auto', 'auto'],
                            text: "This is the ‘next’ button",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [80, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy12',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '6', '867px', '412', 'auto', 'auto'],
                            text: "You’ll click this button to advance through the course",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy11',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '6', '1280px', '412', 'auto', 'auto'],
                            text: "This is the ‘back’ button",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [80, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy10',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '6', '867px', '412', 'auto', 'auto'],
                            text: "You’ll click this button to go back and rewatch topics you’ve already seen",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy9',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '6', '1280px', '412', 'auto', 'auto'],
                            text: "This is the ‘replay’ button",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [80, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy8',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '6', '954px', '412', 'auto', 'auto'],
                            text: "You’ll click this button to make the current topic start over",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy7',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '7px', '1280px', '65px', 'auto', 'auto'],
                            text: "There are test questions located throughout this course",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy6',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '11px', '1280px', '65px', 'auto', 'auto'],
                            text: "The ‘next’ button will not work while you’re on a question",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy5',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '3px', '1280px', '116px', 'auto', 'auto'],
                            text: "If you answer a question incorrectly, you’ll rewatch the topics that will help you answer the question",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy4',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '7px', '1280px', '65px', 'auto', 'auto'],
                            text: "Then you’ll get another chance to answer",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [50, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '3px', '1280px', '116px', 'auto', 'auto'],
                            text: "This process repeats until you answer all the questions correctly",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '3px', '1280px', '116px', 'auto', 'auto'],
                            text: "If you want to read the narrative for a topic, click the ‘CC’ button, which stands for ‘closed captioning’ ",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '13px', '1280px', '116px', 'auto', 'auto'],
                            text: "If you click it again, the text will disappear",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['100px', '33px', '1059px', '116px', 'auto', 'auto'],
                            text: "When you hear the ‘beep,’ click next to begin your course",
                            align: "center",
                            userClass: "wave",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(255,255,255,1)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'mike',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['760', '410', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"mike.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio-play',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '0', '1280px', '565px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"audio-play.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280', '565', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 80741.591590853,
                    autoPlay: true,
                    data: [
                        [
                            "eid989",
                            "top",
                            72485,
                            0,
                            "easeOutQuad",
                            "${closed_captioning}",
                            '-124px',
                            '-124px'
                        ],
                        [
                            "eid936",
                            "display",
                            21763,
                            0,
                            "easeOutBounce",
                            "${Text4Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid937",
                            "display",
                            25735,
                            0,
                            "linear",
                            "${Text4Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid994",
                            "opacity",
                            72485,
                            2062,
                            "easeOutQuad",
                            "${closed_captioning}",
                            '0',
                            '1'
                        ],
                        [
                            "eid995",
                            "opacity",
                            75500,
                            1000,
                            "easeOutQuad",
                            "${closed_captioning}",
                            '1',
                            '0'
                        ],
                        [
                            "eid961",
                            "opacity",
                            18731,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid962",
                            "opacity",
                            25294,
                            1055,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid963",
                            "opacity",
                            76500,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1018",
                            "height",
                            50000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            '391px',
                            '391px'
                        ],
                        [
                            "eid1019",
                            "height",
                            61000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            '391px',
                            '391px'
                        ],
                        [
                            "eid926",
                            "display",
                            42000,
                            0,
                            "easeOutBounce",
                            "${Text4Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid927",
                            "display",
                            45768,
                            0,
                            "linear",
                            "${Text4Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid976",
                            "top",
                            9265,
                            1000,
                            "easeOutQuad",
                            "${buttons}",
                            '608px',
                            '457px'
                        ],
                        [
                            "eid977",
                            "top",
                            41500,
                            1026,
                            "easeOutQuad",
                            "${buttons}",
                            '457px',
                            '651px'
                        ],
                        [
                            "eid978",
                            "top",
                            45411,
                            1026,
                            "easeOutQuad",
                            "${buttons}",
                            '651px',
                            '483px'
                        ],
                        [
                            "eid944",
                            "display",
                            65000,
                            0,
                            "easeOutQuad",
                            "${Reddown_Arrow_Down}",
                            'none',
                            'block'
                        ],
                        [
                            "eid945",
                            "display",
                            68055,
                            0,
                            "easeOutBounce",
                            "${Reddown_Arrow_Down}",
                            'block',
                            'none'
                        ],
                        [
                            "eid991",
                            "left",
                            72485,
                            0,
                            "easeOutQuad",
                            "${closed_captioning}",
                            '-59px',
                            '-59px'
                        ],
                        [
                            "eid1038",
                            "width",
                            43000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy2}",
                            '675px',
                            '894px'
                        ],
                        [
                            "eid1033",
                            "display",
                            43000,
                            0,
                            "easeOutBounce",
                            "${quizCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1034",
                            "display",
                            46437,
                            0,
                            "easeOutQuad",
                            "${quizCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1035",
                            "display",
                            72874,
                            0,
                            "easeOutQuad",
                            "${quizCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1043",
                            "left",
                            42000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy3}",
                            '322px',
                            '195px'
                        ],
                        [
                            "eid948",
                            "top",
                            65000,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_Down}",
                            '283px',
                            '395px'
                        ],
                        [
                            "eid1020",
                            "display",
                            50000,
                            0,
                            "easeOutBounce",
                            "${quizCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1021",
                            "display",
                            58099,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1022",
                            "display",
                            61000,
                            0,
                            "easeOutBounce",
                            "${quizCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1023",
                            "display",
                            64000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid953",
                            "top",
                            33945,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy}",
                            '283px',
                            '375px'
                        ],
                        [
                            "eid970",
                            "display",
                            9933,
                            0,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid971",
                            "display",
                            19786,
                            0,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid955",
                            "opacity",
                            25294,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid956",
                            "opacity",
                            33945,
                            1055,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1004",
                            "display",
                            65000,
                            0,
                            "easeOutBounce",
                            "${closed_captioningCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1005",
                            "display",
                            74547,
                            0,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid974",
                            "opacity",
                            46437,
                            961,
                            "easeOutQuad",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid975",
                            "opacity",
                            50000,
                            1000,
                            "easeOutQuad",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1008",
                            "top",
                            63000,
                            0,
                            "easeOutQuad",
                            "${quiz}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid1014",
                            "left",
                            63000,
                            0,
                            "easeOutQuad",
                            "${quiz}",
                            '195px',
                            '195px'
                        ],
                        [
                            "eid1060",
                            "width",
                            6995,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            '1215px',
                            '1215px'
                        ],
                        [
                            "eid1055",
                            "font-size",
                            6995,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            '92px',
                            '92px'
                        ],
                        [
                            "eid1054",
                            "height",
                            6995,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            '295px',
                            '295px'
                        ],
                        [
                            "eid1058",
                            "opacity",
                            9500,
                            1000,
                            "easeOutQuad",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid924",
                            "display",
                            45768,
                            0,
                            "easeOutBounce",
                            "${Text4Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid925",
                            "display",
                            50000,
                            0,
                            "linear",
                            "${Text4Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid972",
                            "display",
                            46437,
                            0,
                            "easeOutQuad",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid973",
                            "display",
                            51000,
                            0,
                            "easeOutQuad",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1037",
                            "left",
                            43000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy2}",
                            '322px',
                            '256px'
                        ],
                        [
                            "eid918",
                            "display",
                            60265,
                            0,
                            "easeOutBounce",
                            "${Text4Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid919",
                            "display",
                            65000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid934",
                            "display",
                            25735,
                            0,
                            "easeOutBounce",
                            "${Text4Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid935",
                            "display",
                            28596,
                            0,
                            "linear",
                            "${Text4Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid922",
                            "display",
                            50000,
                            0,
                            "easeOutBounce",
                            "${Text4Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid923",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text4Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1063",
                            "opacity",
                            9265,
                            1000,
                            "easeOutQuad",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1015",
                            "width",
                            63000,
                            0,
                            "easeOutQuad",
                            "${quiz}",
                            '894px',
                            '894px'
                        ],
                        [
                            "eid1064",
                            "opacity",
                            500,
                            1500,
                            "easeOutQuad",
                            "${Rectangle3}",
                            '0',
                            '0.73170731707317'
                        ],
                        [
                            "eid1039",
                            "top",
                            42000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy3}",
                            '600px',
                            '102px'
                        ],
                        [
                            "eid967",
                            "top",
                            9933,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy4}",
                            '283px',
                            '375px'
                        ],
                        [
                            "eid982",
                            "display",
                            9265,
                            0,
                            "easeOutQuad",
                            "${buttons}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1059",
                            "left",
                            6995,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid534",
                            "display",
                            14,
                            0,
                            "easeOutBounce",
                            "${audio-play}",
                            'block',
                            'none'
                        ],
                        [
                            "eid932",
                            "display",
                            28596,
                            0,
                            "easeOutBounce",
                            "${Text4Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid933",
                            "display",
                            34500,
                            0,
                            "linear",
                            "${Text4Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid942",
                            "display",
                            9933,
                            0,
                            "easeOutBounce",
                            "${Text4Copy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid943",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${Text4Copy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1044",
                            "width",
                            42000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy3}",
                            '675px',
                            '894px'
                        ],
                        [
                            "eid913",
                            "display",
                            76239,
                            0,
                            "easeOutBounce",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid996",
                            "clip",
                            72485,
                            0,
                            "easeOutQuad",
                            "${closed_captioning}",
                            [288.8614196777344,1330.11328125,627,66.65839385986328],
                            [288.8614196777344,1330.11328125,627,66.65839385986328],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1045",
                            "display",
                            5000,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1009",
                            "display",
                            63000,
                            0,
                            "easeOutBounce",
                            "${quiz}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1010",
                            "display",
                            65987,
                            0,
                            "easeOutQuad",
                            "${quiz}",
                            'block',
                            'none'
                        ],
                        [
                            "eid938",
                            "display",
                            19500,
                            0,
                            "easeOutBounce",
                            "${Text4Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid939",
                            "display",
                            21763,
                            0,
                            "linear",
                            "${Text4Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid979",
                            "height",
                            9265,
                            1000,
                            "easeOutQuad",
                            "${buttons}",
                            '57px',
                            '75px'
                        ],
                        [
                            "eid980",
                            "height",
                            41500,
                            1026,
                            "easeOutQuad",
                            "${buttons}",
                            '75px',
                            '65px'
                        ],
                        [
                            "eid981",
                            "height",
                            45411,
                            1026,
                            "easeOutQuad",
                            "${buttons}",
                            '65px',
                            '75px'
                        ],
                        [
                            "eid1061",
                            "display",
                            5500,
                            0,
                            "easeOutQuad",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1062",
                            "display",
                            10265,
                            0,
                            "easeOutQuad",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1049",
                            "left",
                            500,
                            1000,
                            "easeOutQuad",
                            "${Text2}",
                            '-1839px',
                            '1290px'
                        ],
                        [
                            "eid1050",
                            "left",
                            2500,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            '1290px',
                            '-295px'
                        ],
                        [
                            "eid1051",
                            "font-size",
                            500,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid1052",
                            "font-size",
                            2518,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            '365px',
                            '208px'
                        ],
                        [
                            "eid1031",
                            "top",
                            43000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy2}",
                            '600px',
                            '162px'
                        ],
                        [
                            "eid986",
                            "width",
                            9265,
                            1000,
                            "easeOutQuad",
                            "${buttons}",
                            '892px',
                            '1170px'
                        ],
                        [
                            "eid987",
                            "width",
                            41500,
                            1026,
                            "easeOutQuad",
                            "${buttons}",
                            '1170px',
                            '1017px'
                        ],
                        [
                            "eid988",
                            "width",
                            45411,
                            1026,
                            "easeOutQuad",
                            "${buttons}",
                            '1017px',
                            '1170px'
                        ],
                        [
                            "eid1016",
                            "top",
                            50000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid1017",
                            "top",
                            61000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid1042",
                            "height",
                            42000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy3}",
                            '295px',
                            '391px'
                        ],
                        [
                            "eid1027",
                            "left",
                            50000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            '195px',
                            '195px'
                        ],
                        [
                            "eid1028",
                            "left",
                            61000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            '195px',
                            '195px'
                        ],
                        [
                            "eid959",
                            "top",
                            18731,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy3}",
                            '283px',
                            '375px'
                        ],
                        [
                            "eid960",
                            "top",
                            76500,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy3}",
                            '283px',
                            '395px'
                        ],
                        [
                            "eid949",
                            "display",
                            33945,
                            0,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid950",
                            "display",
                            42555,
                            0,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1046",
                            "opacity",
                            2500,
                            18,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1047",
                            "opacity",
                            2518,
                            833,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1048",
                            "opacity",
                            4000,
                            1000,
                            "easeOutQuad",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1040",
                            "display",
                            42000,
                            0,
                            "easeOutBounce",
                            "${quizCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1041",
                            "display",
                            64000,
                            0,
                            "easeOutQuad",
                            "${quizCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1002",
                            "scaleX",
                            65000,
                            1013,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            '0.48615',
                            '0.6571'
                        ],
                        [
                            "eid1003",
                            "scaleX",
                            67055,
                            3487,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            '0.6571',
                            '0.92011'
                        ],
                        [
                            "eid916",
                            "display",
                            65000,
                            0,
                            "easeOutBounce",
                            "${Text4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid917",
                            "display",
                            72485,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1053",
                            "top",
                            6995,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            '237px',
                            '237px'
                        ],
                        [
                            "eid983",
                            "left",
                            9265,
                            1000,
                            "easeOutQuad",
                            "${buttons}",
                            '176px',
                            '55px'
                        ],
                        [
                            "eid984",
                            "left",
                            41500,
                            1026,
                            "easeOutQuad",
                            "${buttons}",
                            '55px',
                            '131px'
                        ],
                        [
                            "eid985",
                            "left",
                            45411,
                            1026,
                            "easeOutQuad",
                            "${buttons}",
                            '131px',
                            '55px'
                        ],
                        [
                            "eid1032",
                            "height",
                            43000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy2}",
                            '295px',
                            '391px'
                        ],
                        [
                            "eid1029",
                            "width",
                            50000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            '894px',
                            '894px'
                        ],
                        [
                            "eid1030",
                            "width",
                            61000,
                            0,
                            "easeOutQuad",
                            "${quizCopy}",
                            '894px',
                            '894px'
                        ],
                        [
                            "eid1036",
                            "opacity",
                            45411,
                            1026,
                            "easeOutQuad",
                            "${quizCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid930",
                            "display",
                            34500,
                            0,
                            "easeOutBounce",
                            "${Text4Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid931",
                            "display",
                            37287,
                            0,
                            "linear",
                            "${Text4Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid940",
                            "display",
                            13000,
                            0,
                            "easeOutBounce",
                            "${Text4Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid941",
                            "display",
                            19500,
                            0,
                            "linear",
                            "${Text4Copy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1024",
                            "opacity",
                            50000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1025",
                            "opacity",
                            57099,
                            1000,
                            "easeOutQuad",
                            "${quizCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1026",
                            "opacity",
                            61000,
                            1000,
                            "easeOutQuad",
                            "${quizCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid997",
                            "scaleX",
                            72485,
                            0,
                            "easeOutQuad",
                            "${closed_captioning}",
                            '0.92011',
                            '0.92011'
                        ],
                        [
                            "eid1012",
                            "opacity",
                            63000,
                            1000,
                            "easeOutQuad",
                            "${quiz}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1013",
                            "opacity",
                            65000,
                            987,
                            "easeOutQuad",
                            "${quiz}",
                            '1',
                            '0'
                        ],
                        [
                            "eid928",
                            "display",
                            37287,
                            0,
                            "easeOutBounce",
                            "${Text4Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid929",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Text4Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid951",
                            "opacity",
                            33945,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid952",
                            "opacity",
                            41500,
                            1055,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1007",
                            "left",
                            67055,
                            3487,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            '-72px',
                            '-59px'
                        ],
                        [
                            "eid964",
                            "display",
                            18731,
                            0,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid965",
                            "display",
                            26349,
                            0,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid966",
                            "display",
                            76500,
                            0,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1011",
                            "height",
                            63000,
                            0,
                            "easeOutQuad",
                            "${quiz}",
                            '391px',
                            '391px'
                        ],
                        [
                            "eid1006",
                            "clip",
                            67055,
                            3487,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            [173.8114013671875,1433,627,0],
                            [288.8614196777344,1330.11328125,627,66.65839385986328],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid957",
                            "display",
                            25294,
                            0,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid958",
                            "display",
                            35000,
                            0,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid992",
                            "display",
                            72485,
                            0,
                            "easeOutBounce",
                            "${closed_captioning}",
                            'none',
                            'block'
                        ],
                        [
                            "eid993",
                            "display",
                            76500,
                            0,
                            "easeOutQuad",
                            "${closed_captioning}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1000",
                            "scaleY",
                            65000,
                            1013,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            '0.48615',
                            '0.6571'
                        ],
                        [
                            "eid1001",
                            "scaleY",
                            67055,
                            3487,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            '0.6571',
                            '0.92011'
                        ],
                        [
                            "eid1056",
                            "display",
                            6995,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1057",
                            "display",
                            10500,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid946",
                            "opacity",
                            65000,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_Down}",
                            '0',
                            '1'
                        ],
                        [
                            "eid947",
                            "opacity",
                            67000,
                            1055,
                            "easeOutQuad",
                            "${Reddown_Arrow_Down}",
                            '1',
                            '0'
                        ],
                        [
                            "eid998",
                            "top",
                            65000,
                            1013,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            '432px',
                            '-42px'
                        ],
                        [
                            "eid999",
                            "top",
                            67055,
                            3487,
                            "easeOutQuad",
                            "${closed_captioningCopy}",
                            '-42px',
                            '-124px'
                        ],
                        [
                            "eid914",
                            "display",
                            72485,
                            0,
                            "easeOutBounce",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid915",
                            "display",
                            76239,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid968",
                            "opacity",
                            9933,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid969",
                            "opacity",
                            18731,
                            1055,
                            "easeOutQuad",
                            "${Reddown_Arrow_DownCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid954",
                            "top",
                            25294,
                            987,
                            "easeOutBounce",
                            "${Reddown_Arrow_DownCopy2}",
                            '283px',
                            '375px'
                        ],
                        [
                            "eid920",
                            "display",
                            57000,
                            0,
                            "easeOutBounce",
                            "${Text4Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid921",
                            "display",
                            60265,
                            0,
                            "linear",
                            "${Text4Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid990",
                            "scaleY",
                            72485,
                            0,
                            "easeOutQuad",
                            "${closed_captioning}",
                            '0.92011',
                            '0.92011'
                        ],
                            [ "eid1070", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${mike}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("navigation_edgeActions.js");
})("slide");
