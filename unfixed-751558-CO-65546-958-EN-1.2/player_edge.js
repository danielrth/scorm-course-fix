/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'amethysta, serif': '<script src=\"http://use.edgefonts.net/amethysta:n4:all.js\"></script>'        },
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
            js+"TweenMax.min.js",
            js+"CSSPlugin.min.js",
            js+"ss.2.9.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'continueBG',
                            display: 'block',
                            type: 'image',
                            rect: ['0', '0', '1280px', '720', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bg1.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Sign-in-1-H3',
                            display: 'none',
                            type: 'image',
                            rect: ['64px', '144px', '500px', '1px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Sign-in-1-H.png",'0px','0px']
                        },
                        {
                            id: 'Sign-in-1-H3Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['716px', '144px', '500px', '1px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Sign-in-1-H.png",'0px','0px']
                        },
                        {
                            id: 'Kickback',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '75', '1280', '565', 'auto', 'auto'],
                            fill: ["rgba(162,162,162,0.00)"],
                            stroke: [0,"rgb(29, 29, 29)","none"]
                        },
                        {
                            id: 'Presenter',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '75', '1280', '565', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(162,162,162,0.00)"],
                            stroke: [0,"rgb(29, 29, 29)","none"]
                        },
                        {
                            id: 'language',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '319px', '24.9%', '41.7%', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(162,162,162,0.00)"],
                            stroke: [1,"rgba(29,29,29,1.00)","none"]
                        },
                        {
                            id: 'Sign-up-1-H',
                            display: 'none',
                            type: 'image',
                            rect: ['565px', '68px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Sign-up-1-H.png",'0px','0px']
                        },
                        {
                            id: 'ContinueBoxBG',
                            display: 'none',
                            type: 'rect',
                            rect: ['314px', '286px', '650px', '289px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.60)"],
                            stroke: [1,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['474px', '633px', '805px', '87px', 'auto', 'auto'],
                            fill: ["rgba(225,225,225,0.00)",[181,[['rgba(253,253,253,1.00)',0],['rgba(255,255,255,0.00)',100]]]],
                            stroke: [2,"rgba(255,255,255,1.00)","none"]
                        },
                        {
                            id: 'ContinueText',
                            type: 'text',
                            tag: 'p',
                            rect: ['332', '313px', '616px', '90px', 'auto', 'auto'],
                            text: "",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(29,29,29,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'no_btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '431px', '283px', '107px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(224,87,87,1.00)"],
                            stroke: [1,"rgba(189,2,2,1.00)","solid"],
                            userClass: "link_1 ",
                            c: [
                            {
                                id: 'no_text',
                                display: 'none',
                                type: 'text',
                                rect: ['48px', '25px', '186px', '58px', 'auto', 'auto'],
                                text: "NO",
                                align: "center",
                                userClass: "",
                                font: ['Lucida Console, Monaco, monospace', [47, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'yes_btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['663px', '431px', '283', '107px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(65,151,84,1.00)"],
                            stroke: [1,"rgba(0,73,18,1.00)","solid"],
                            userClass: "link_1 ",
                            c: [
                            {
                                id: 'yes_text',
                                display: 'none',
                                type: 'text',
                                rect: ['49', '25px', '186px', '58px', 'auto', 'auto'],
                                text: "YES",
                                align: "center",
                                userClass: "",
                                font: ['\'Lucida Console\', Monaco, monospace', [47, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'BulletBox',
                            symbolName: 'MenuBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '102', '322', '515', 'auto', 'auto']
                        },
                        {
                            id: 'MenuBG',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '640', '1280px', '80px', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(0,0,0,0)",im+"MenuBG.png",'0px','0px']
                        },
                        {
                            id: 'footerLine',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '719', '1280px', '1', 'auto', 'auto'],
                            fill: ["rgba(156,156,156,0.82)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'HeaderBorder',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '70px', '1280px', '6px', 'auto', 'auto'],
                            fill: ["rgba(203,22,22,1.00)"],
                            stroke: [0,"rgb(29, 29, 29)","none"]
                        },
                        {
                            id: 'Logo_BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['479px', '0', '310', '64', 'auto', 'auto'],
                            fill: ["rgba(140,140,140,1.00)"],
                            stroke: [6,"rgba(75,75,75,1.00)","solid"]
                        },
                        {
                            id: 'frameCounter_BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['801', '0px', '479', '72px', 'auto', 'auto'],
                            fill: ["rgba(29,29,29,0.99)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'CourseName_BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '479', '72px', 'auto', 'auto'],
                            fill: ["rgba(29,29,29,0.99)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            display: 'none',
                            type: 'rect',
                            rect: ['498', '6px', '285', '64', 'auto', 'auto'],
                            fill: ["rgba(92,66,66,1.00)"],
                            stroke: [6,"rgb(75, 75, 75)","none"]
                        },
                        {
                            id: 'ProgressBar',
                            symbolName: 'ProgressBar',
                            display: 'none',
                            type: 'rect',
                            rect: ['480', '2', '320', '72', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.89199','0.90278']]
                        },
                        {
                            id: 'UsernameText',
                            display: 'none',
                            type: 'text',
                            tag: 'h2',
                            rect: ['867px', '226px', '386px', '30', 'auto', 'auto'],
                            text: "User Name",
                            align: "center",
                            font: ['amethysta, serif', [23, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'frameCounter',
                            display: 'none',
                            type: 'text',
                            tag: 'h2',
                            rect: ['685px', '36px', '98px', '40px', 'auto', 'auto'],
                            text: "999/999",
                            font: ['Arial, Helvetica, sans-serif', [24, "undefined"], "rgba(162,162,162,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'courseName',
                            display: 'none',
                            type: 'text',
                            tag: 'h1',
                            rect: ['30', '11px', '440px', '50px', 'auto', 'auto'],
                            text: "Loading Course",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Captioning',
                            symbolName: 'ccOff',
                            display: 'none',
                            type: 'rect',
                            rect: ['93', '655', '69', '50', 'auto', 'auto'],
                            userClass: "link_1"
                        },
                        {
                            id: 'previous',
                            symbolName: 'previous',
                            display: 'none',
                            type: 'rect',
                            rect: ['359', '658', '55', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "link_1 "
                        },
                        {
                            id: 'Previous_disabled',
                            symbolName: 'Previous_disabled',
                            display: 'none',
                            type: 'rect',
                            rect: ['359', '659', '52', '50', 'auto', 'auto'],
                            userClass: ""
                        },
                        {
                            id: 'Play',
                            symbolName: 'Play',
                            display: 'none',
                            type: 'rect',
                            rect: ['603px', '655px', '59', '58', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "link_1"
                        },
                        {
                            id: 'Next',
                            symbolName: 'Next2',
                            display: 'none',
                            type: 'rect',
                            rect: ['855px', '659px', '55', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "link_1 "
                        },
                        {
                            id: 'Next_disabled',
                            symbolName: 'Next_disabled',
                            display: 'none',
                            type: 'rect',
                            rect: ['856px', '659px', '52', '50', 'auto', 'auto'],
                            userClass: ""
                        },
                        {
                            id: 'Replay',
                            symbolName: 'Replay',
                            display: 'none',
                            type: 'rect',
                            rect: ['1117px', '655', '66', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "link_1"
                        },
                        {
                            id: 'ClosedCaptioning',
                            symbolName: 'ClosedCaptioning2',
                            display: 'none',
                            type: 'rect',
                            rect: ['343px', '558px', '598', '74', 'auto', 'auto']
                        },
                        {
                            id: 'user',
                            display: 'none',
                            type: 'image',
                            rect: ['828px', '104px', '56px', '56px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"user.png",'0px','0px']
                        },
                        {
                            id: 'SafetySkillsLogo3',
                            display: 'none',
                            type: 'image',
                            rect: ['986px', '649px', '267px', '56px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"SafetySkillsLogo.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280', '720', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(29,29,29,1.00)",[50,50,true,'farthest-corner',[['rgba(201,201,201,1.00)',0],['rgba(0,0,0,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "resume": 250,
                        "languageSelector": 1000,
                        "loadingInterface": 1873
                    },
                    data: [
                        [
                            "eid542",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid543",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid544",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid343",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${ProgressBar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid342",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${ProgressBar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${continueBG}",
                            'block',
                            'block'
                        ],
                        [
                            "eid594",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${continueBG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${continueBG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid554",
                            "background-color",
                            2000,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'rgba(92,66,66,1.00)',
                            'rgba(92,66,66,1.00)'
                        ],
                        [
                            "eid599",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${courseName}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ContinueBoxBG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${ContinueBoxBG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            808,
                            0,
                            "linear",
                            "${ContinueBoxBG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid456",
                            "display",
                            0,
                            0,
                            "linear",
                            "${footerLine}",
                            'none',
                            'none'
                        ],
                        [
                            "eid455",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${footerLine}",
                            'none',
                            'block'
                        ],
                        [
                            "eid516",
                            "scaleY",
                            2000,
                            0,
                            "linear",
                            "${ProgressBar}",
                            '0.90278',
                            '0.90278'
                        ],
                        [
                            "eid674",
                            "display",
                            0,
                            0,
                            "linear",
                            "${user}",
                            'none',
                            'none'
                        ],
                        [
                            "eid673",
                            "display",
                            250,
                            0,
                            "linear",
                            "${user}",
                            'none',
                            'block'
                        ],
                        [
                            "eid675",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${user}",
                            'block',
                            'none'
                        ],
                        [
                            "eid681",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${user}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yes_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            250,
                            0,
                            "linear",
                            "${yes_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            808,
                            0,
                            "linear",
                            "${yes_btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid670",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${UsernameText}",
                            '386px',
                            '386px'
                        ],
                        [
                            "eid296",
                            "display",
                            0,
                            0,
                            "linear",
                            "${frameCounter}",
                            'none',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${frameCounter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid678",
                            "top",
                            250,
                            0,
                            "linear",
                            "${user}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid680",
                            "top",
                            1794,
                            0,
                            "linear",
                            "${user}",
                            '104px',
                            '102px'
                        ],
                        [
                            "eid683",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${user}",
                            '102px',
                            '8px'
                        ],
                        [
                            "eid685",
                            "height",
                            1794,
                            0,
                            "linear",
                            "${user}",
                            '80px',
                            '80px'
                        ],
                        [
                            "eid687",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${user}",
                            '80px',
                            '56px'
                        ],
                        [
                            "eid315",
                            "display",
                            0,
                            0,
                            "linear",
                            "${courseName}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${courseName}",
                            'none',
                            'block'
                        ],
                        [
                            "eid655",
                            "height",
                            250,
                            0,
                            "linear",
                            "${ContinueBoxBG}",
                            '289px',
                            '289px'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${MenuBG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${MenuBG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid692",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SafetySkillsLogo3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid691",
                            "display",
                            250,
                            0,
                            "linear",
                            "${SafetySkillsLogo3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid693",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${SafetySkillsLogo3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid548",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${continueBG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid270",
                            "display",
                            0,
                            0,
                            "linear",
                            "${previous}",
                            'none',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${previous}",
                            'none',
                            'none'
                        ],
                        [
                            "eid652",
                            "top",
                            250,
                            0,
                            "linear",
                            "${yes_text}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid239",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Kickback}",
                            'none',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Kickback}",
                            'none',
                            'block'
                        ],
                        [
                            "eid643",
                            "top",
                            250,
                            0,
                            "linear",
                            "${ContinueBoxBG}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid706",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ClosedCaptioning}",
                            'none',
                            'none'
                        ],
                        [
                            "eid705",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${ClosedCaptioning}",
                            'none',
                            'block'
                        ],
                        [
                            "eid653",
                            "left",
                            250,
                            0,
                            "linear",
                            "${no_text}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid656",
                            "left",
                            250,
                            0,
                            "linear",
                            "${ContinueBoxBG}",
                            '314px',
                            '314px'
                        ],
                        [
                            "eid672",
                            "top",
                            250,
                            0,
                            "linear",
                            "${UsernameText}",
                            '226px',
                            '226px'
                        ],
                        [
                            "eid412",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${UsernameText}",
                            '230px',
                            '40px'
                        ],
                        [
                            "eid77",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ContinueText}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            250,
                            0,
                            "linear",
                            "${ContinueText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid593",
                            "display",
                            750,
                            0,
                            "linear",
                            "${ContinueText}",
                            'block',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            808,
                            0,
                            "linear",
                            "${ContinueText}",
                            'block',
                            'none'
                        ],
                        [
                            "eid214",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Next}",
                            'none',
                            'none'
                        ],
                        [
                            "eid465",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Next}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${UsernameText}",
                            'none',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            250,
                            0,
                            "linear",
                            "${UsernameText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${UsernameText}",
                            'block',
                            'none'
                        ],
                        [
                            "eid410",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${UsernameText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid380",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${Logo_BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid379",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${Logo_BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid579",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Captioning}",
                            'none',
                            'block'
                        ],
                        [
                            "eid451",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BulletBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid468",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${BulletBox}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Presenter}",
                            'none',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Presenter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid665",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${language}",
                            'rgba(162,162,162,0.00)',
                            'rgba(162,162,162,0.00)'
                        ],
                        [
                            "eid357",
                            "left",
                            2000,
                            0,
                            "easeOutBounce",
                            "${ProgressBar}",
                            '480px',
                            '480px'
                        ],
                        [
                            "eid654",
                            "top",
                            250,
                            0,
                            "linear",
                            "${no_text}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid639",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '87px',
                            '87px'
                        ],
                        [
                            "eid558",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Next}",
                            '659px',
                            '659px'
                        ],
                        [
                            "eid552",
                            "left",
                            2000,
                            0,
                            "easeOutBounce",
                            "${frameCounter}",
                            '685px',
                            '685px'
                        ],
                        [
                            "eid349",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${CourseName_BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid348",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${CourseName_BG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid697",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Sign-in-1-H3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid699",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Sign-in-1-H3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid695",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${Sign-in-1-H3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid596",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${courseName}",
                            '440px',
                            '440px'
                        ],
                        [
                            "eid677",
                            "left",
                            250,
                            0,
                            "linear",
                            "${user}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid679",
                            "left",
                            1794,
                            0,
                            "linear",
                            "${user}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid682",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${user}",
                            '600px',
                            '828px'
                        ],
                        [
                            "eid650",
                            "height",
                            250,
                            0,
                            "linear",
                            "${no_btn}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid597",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${courseName}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid646",
                            "top",
                            250,
                            0,
                            "linear",
                            "${yes_btn}",
                            '431px',
                            '431px'
                        ],
                        [
                            "eid696",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Sign-in-1-H3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid698",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Sign-in-1-H3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid694",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${Sign-in-1-H3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid657",
                            "left",
                            250,
                            0,
                            "linear",
                            "${yes_btn}",
                            '663px',
                            '663px'
                        ],
                        [
                            "eid651",
                            "height",
                            250,
                            0,
                            "linear",
                            "${yes_btn}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid517",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${ProgressBar}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "linear",
                            "${language}",
                            'none',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${language}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${language}",
                            'block',
                            'none'
                        ],
                        [
                            "eid557",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Next}",
                            '855px',
                            '855px'
                        ],
                        [
                            "eid356",
                            "scaleX",
                            2000,
                            0,
                            "easeOutBounce",
                            "${ProgressBar}",
                            '0.89199',
                            '0.89199'
                        ],
                        [
                            "eid645",
                            "top",
                            250,
                            0,
                            "linear",
                            "${no_btn}",
                            '431px',
                            '431px'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Replay}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Replay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yes_text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            250,
                            0,
                            "linear",
                            "${yes_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            808,
                            0,
                            "linear",
                            "${yes_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "linear",
                            "${no_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            250,
                            0,
                            "linear",
                            "${no_btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            808,
                            0,
                            "linear",
                            "${no_btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid382",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${HeaderBorder}",
                            'none',
                            'none'
                        ],
                        [
                            "eid381",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${HeaderBorder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid567",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Play}",
                            'none',
                            'none'
                        ],
                        [
                            "eid568",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Play}",
                            'none',
                            'block'
                        ],
                        [
                            "eid559",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Next_disabled}",
                            'none',
                            'block'
                        ],
                        [
                            "eid638",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${language}",
                            '319px',
                            '319px'
                        ],
                        [
                            "eid671",
                            "left",
                            250,
                            0,
                            "linear",
                            "${UsernameText}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid411",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${UsernameText}",
                            '475px',
                            '867px'
                        ],
                        [
                            "eid662",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Sign-up-1-H}",
                            'none',
                            'none'
                        ],
                        [
                            "eid661",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Sign-up-1-H}",
                            'none',
                            'block'
                        ],
                        [
                            "eid660",
                            "display",
                            1794,
                            0,
                            "linear",
                            "${Sign-up-1-H}",
                            'block',
                            'none'
                        ],
                        [
                            "eid553",
                            "top",
                            2000,
                            0,
                            "easeOutBounce",
                            "${frameCounter}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid595",
                            "font-size",
                            2000,
                            0,
                            "linear",
                            "${courseName}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid580",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Previous_disabled}",
                            'none',
                            'none'
                        ],
                        [
                            "eid581",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Previous_disabled}",
                            'none',
                            'block'
                        ],
                        [
                            "eid684",
                            "width",
                            1794,
                            0,
                            "linear",
                            "${user}",
                            '80px',
                            '80px'
                        ],
                        [
                            "eid686",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${user}",
                            '80px',
                            '56px'
                        ],
                        [
                            "eid633",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '633px',
                            '633px'
                        ],
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "linear",
                            "${no_text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            250,
                            0,
                            "linear",
                            "${no_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            808,
                            0,
                            "linear",
                            "${no_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid632",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '474px',
                            '474px'
                        ],
                        [
                            "eid520",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid519",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid350",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${frameCounter_BG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid351",
                            "display",
                            2000,
                            0,
                            "easeOutBounce",
                            "${frameCounter_BG}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "previous3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            r: null,
                            id: 'previousImage',
                            t: 'image',
                            v: null,
                            rect: [0, 0, '53px', '50px', 'auto', 'auto'],
                            display: 'none',
                            f: null,
                            fill: ['rgba(0,0,0,0)', 'images/previous.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 53, 50]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${previousImage}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Replay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Replay2',
                            rect: ['0px', '0px', '66px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Replay.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66', '50']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "CC": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 69, 50]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Next": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Next.png', '0px', '0px'],
                            r: null,
                            id: 'NextImage',
                            t: 'image',
                            rect: [0, 0, '52px', '50px', 'auto', 'auto'],
                            f: null
                        }
                    ],
                    style: {
                        '${Text}': {
                            font: '{{:}{undefined{:}:{:}}{:}{{:}u{:}n{:}d',
                            rect: [27, 25, 0, 0]
                        },
                        '${symbolSelector}': {
                            rect: [null, null, 52, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "up": 0,
                        "over": 500,
                        "down": 1000
                    },
                    data: [

                    ]
                }
            },
            "Next2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '52px', '50px', 'auto', 'auto'],
                            id: 'Next2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Next.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '55', '50']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid212",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Next2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "previous": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            r: null,
                            id: 'previous4',
                            t: 'image',
                            v: null,
                            rect: [-1, 0, '53px', '50px', 'auto', 'auto'],
                            display: 'block',
                            f: null,
                            fill: ['rgba(0,0,0,0)', 'images/previous.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 55, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "up": 0,
                        "over": 500,
                        "down": 1000
                    },
                    data: [
                        [
                            "eid283",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Prev_Over_Right}",
                            'none',
                            'none'
                        ],
                        [
                            "eid282",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Prev_Over_Right}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Prev_Over_Right}",
                            'block',
                            'none'
                        ],
                        [
                            "eid265",
                            "display",
                            500,
                            0,
                            "linear",
                            "${previous4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid266",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${previous4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid286",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Prev_Over_Left}",
                            'none',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Prev_Over_Left}",
                            'none',
                            'block'
                        ],
                        [
                            "eid287",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Prev_Over_Left}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "TopBar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'progBarBG',
                            t: 'rect',
                            f: null,
                            rect: [0, 0, '101.51%', '18.75%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(193,193,192,0.00)']
                        },
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'progBar',
                            t: 'rect',
                            f: null,
                            rect: [4, 4, '99.56%', '9.48%', 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            br: null,
                            fill: ['rgba(73,73,73,0.88)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '3.2%']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "template": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'template_background',
                            stroke: [2, 'rgba(2,2,90,1.00)', 'none'],
                            cursor: 'pointer',
                            userClass: '',
                            overflow: 'hidden',
                            rect: ['10', '5', '289', '41', 'auto', 'auto'],
                            fill: ['rgba(162,162,162,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle2',
                                stroke: [1, 'rgba(3,31,78,0.98)', 'none'],
                                cursor: 'pointer',
                                rect: ['347', '-2', '302', '45px', 'auto', 'auto'],
                                overflow: 'visible',
                                fill: ['rgba(49,86,115,0.81)'],
                                c: [
                                {
                                    font: ['\'Arial Black\', Gadget, sans-serif', [150, '%'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                    rect: ['46', '6', '210', 'auto', 'auto', 'auto'],
                                    userClass: 'link_1',
                                    id: 'title',
                                    align: 'center',
                                    text: 'title',
                                    cursor: 'pointer',
                                    type: 'text'
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '316', '56']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid328",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid327",
                            "left",
                            0,
                            1500,
                            "easeOutBounce",
                            "${Rectangle2}",
                            '347px',
                            '-7px'
                        ]
                    ]
                }
            },
            "ProgressBar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'ProgressBar',
                            t: 'rect',
                            f: null,
                            rect: ['0', '0', '537px', '72px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(73,73,73,0.00)']
                        },
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'progBar',
                            t: 'rect',
                            f: null,
                            rect: ['0px', '0px', '238.4%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(49,6,6,0.82)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '320', '72']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Bullets": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'background',
                            t: 'rect',
                            f: null,
                            rect: [0, 0, '375px', '565px', 'auto', 'auto'],
                            stroke: [0, 'rgb(29, 29, 29)', 'none'],
                            fill: ['rgba(0,0,0,0.85)']
                        },
                        {
                            type: 'text',
                            r: null,
                            align: 'left',
                            text: 'Bullet points Bullet points Bullet points Bullet points Bullet points',
                            rect: ['25px', '108px', '308px', '23px', 'auto', 'auto'],
                            font: ['amethysta, serif', [23, 'px'], 'rgba(211,211,211,1.00)', '400', 'none', 'normal'],
                            t: 'text',
                            id: 'Text4',
                            n: null
                        },
                        {
                            type: 'text',
                            r: null,
                            align: 'left',
                            text: 'Bullet points Bullet points Bullet points Bullet points Bullet points',
                            rect: ['25px', 216, '308px', '23px', 'auto', 'auto'],
                            font: ['amethysta, serif', [23, 'px'], 'rgba(211,211,211,1.00)', '400', 'none', 'normal'],
                            t: 'text',
                            id: 'Text4Copy',
                            n: null
                        },
                        {
                            type: 'text',
                            r: null,
                            align: 'left',
                            text: 'Bullet points Bullet points Bullet points Bullet points Bullet points',
                            rect: ['25px', 17, '308px', '23px', 'auto', 'auto'],
                            font: ['amethysta, serif', [23, 'px'], 'rgba(211,211,211,1.00)', '400', 'none', 'normal'],
                            t: 'text',
                            id: 'Text4Copy2',
                            n: null
                        },
                        {
                            type: 'text',
                            r: null,
                            align: 'left',
                            text: 'Bullet points Bullet points Bullet points Bullet points Bullet points',
                            rect: ['25px', 318, '308px', '23px', 'auto', 'auto'],
                            font: ['amethysta, serif', [23, 'px'], 'rgba(211,211,211,1.00)', '400', 'none', 'normal'],
                            t: 'text',
                            id: 'Text4Copy3',
                            n: null
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 375, 565]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "MenuPanel": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'Rectangle4',
                            t: 'rect',
                            f: null,
                            rect: [0, 0, 325, 563, 'auto', 'auto'],
                            stroke: [0, 'rgb(29, 29, 29)', 'none'],
                            fill: ['rgba(29,29,29,0.85)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 325, 563]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ClosedCaptioning": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '596px', '72px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(29,29,29,0.64)']
                        },
                        {
                            rect: ['6px', '5px', '583px', '60px', 'auto', 'auto'],
                            id: 'captionBox',
                            stroke: [0, 'rgb(29, 29, 29)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,0)']
                        },
                        {
                            type: 'text',
                            rect: ['11px', '5px', '572px', '60px', 'auto', 'auto'],
                            id: 'captionText',
                            text: 'CC',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '500', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '596px', '72']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "MenuBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '-26', '332', '564', 'auto', 'auto'],
                            id: 'Rectangle8',
                            stroke: [1, 'rgba(162,10,10,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,26,26,0.74)']
                        },
                        {
                            rect: ['17', '0', '301', '513', 'auto', 'auto'],
                            id: 'Rectangle9',
                            stroke: [1, 'rgb(29, 29, 29)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(206,49,48,1.00)']
                        },
                        {
                            rect: ['0px', '-26px', '332', '26', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(29, 29, 29)', 'none'],
                            type: 'rect',
                            fill: ['rgba(30,30,30,1.00)']
                        },
                        {
                            type: 'rect',
                            overflow: 'auto',
                            id: 'bulletText',
                            symbolName: 'bulletText',
                            rect: ['26px', '2', '295', '510', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '322', '515']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "captionText": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'Rectangle4',
                            t: 'rect',
                            f: null,
                            rect: ['0', '0', '922', '80px', 'auto', 'auto'],
                            stroke: [0, 'rgb(29, 29, 29)', 'none'],
                            fill: ['rgba(34,34,34,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '927', '80']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "captionText2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1046, 92]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bulletText": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'Rectangle2',
                            t: 'rect',
                            f: null,
                            rect: ['0px', '0px', '272px', '510px', 'auto', 'auto'],
                            stroke: [1, 'rgb(162, 10, 10)', 'none'],
                            fill: ['rgba(26,26,26,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 295, 510]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Next_disabled": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            userClass: '',
                            type: 'image',
                            rect: ['0px', '0px', '52px', '50px', 'auto', 'auto'],
                            id: 'Next_disabled',
                            display: 'block',
                            cursor: 'no-drop',
                            fill: ['rgba(0,0,0,0)', 'images/Next_disabled.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid311",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Next_disabled}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Pause": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            r: null,
                            id: 'Pause2',
                            t: 'image',
                            cursor: 'pointer',
                            cu: null,
                            rect: ['0px', '0px', '59', '58', 'auto', 'auto'],
                            uc: null,
                            f: null,
                            userClass: 'link_1 ',
                            fill: ['rgba(0,0,0,0)', 'images/Pause.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Play": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            alt: 'Play',
                            type: 'image',
                            id: 'Play2',
                            cursor: 'pointer',
                            userClass: '',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Play.png', '0px', '0px'],
                            rect: ['0px', '0px', '59', '58', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            alt: 'Pause',
                            rect: ['0px', '0px', '59px', '58px', 'auto', 'auto'],
                            id: 'Pause2',
                            fill: ['rgba(0,0,0,0)', 'images/Pause.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid515",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Play2}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Previous_disabled": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            userClass: '',
                            type: 'image',
                            rect: ['0px', '0px', '52px', '50px', 'auto', 'auto'],
                            id: 'Previous_disabled',
                            display: 'block',
                            cursor: 'no-drop',
                            fill: ['rgba(0,0,0,0)', 'images/Previous_disabled.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid313",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Previous_disabled}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "ccOff": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'ccOff',
                            cursor: 'pointer',
                            userClass: '',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/ccImageclose.png', '0px', '0px'],
                            rect: ['0px', '0px', '69px', '50px', 'auto', 'auto'],
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '69px', '50px', 'auto', 'auto'],
                            id: 'CCon',
                            fill: ['rgba(0,0,0,0)', 'images/CC.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '69px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid527",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ccOff}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "ccOn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            r: null,
                            id: 'ccOn2',
                            t: 'image',
                            cursor: 'pointer',
                            v: null,
                            rect: ['0px', '0px', '69px', '50px', 'auto', 'auto'],
                            cu: null,
                            uc: null,
                            display: 'block',
                            userClass: 'link_1 ',
                            f: null,
                            fill: ['rgba(0,0,0,0)', 'images/CC.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '69px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid525",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ccOn2}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'audioMuted',
                            rect: ['0px', '0px', '61px', '49px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/audioMuted.png', '0px', '0px']
                        },
                        {
                            id: 'audioOn',
                            rect: ['0px', '0px', '61px', '49px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/audioOn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "ClosedCaptioning2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '596px', '72px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(29,29,29,1.00)']
                        },
                        {
                            rect: ['6px', '5px', '583px', '60px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'captionBox',
                            stroke: [0, 'rgb(29, 29, 29)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,0)']
                        },
                        {
                            rect: ['11px', '5px', '572px', '60px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '500', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            overflow: 'auto',
                            id: 'captionText',
                            text: 'CC',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '598px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("player_edgeActions.js");
})("EDGE-872154746");
