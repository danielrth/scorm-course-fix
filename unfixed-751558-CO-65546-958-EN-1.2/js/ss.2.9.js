this.CanAutoplay = !1, this.NS = function(e, t, n, i) {
    "use strict";
    var a = {},
        r = "aicc",
        s = "aicc-local",
        o = "none",
        l = "1.2",
        c = "2004",
        u = "xapi",
        d = "completed",
        m = "failed",
        f = "incomplete",
        p = "passed",
        g = "100",
        h = "0",
        b = "cmi.core.entry",
        v = "cmi.core.exit",
        y = "cmi.core.lesson_location",
        _ = "cmi.core.session_time",
        k = "cmi.core.score.raw",
        S = "cmi.core.lesson_status",
        w = "cmi.core.student_id",
        A = "cmi.core.student_name",
        E = "cmi.suspend_data",
        T = "An error occurred with the action you performed, if you continue to get this message please close and restart the course. \n\n Se ha producido un error en la accion realizada, si usted continua recibir este mensaje, por favor, cierre y reinicie el curso.",
        x = "Thank you for watching this course demo!",
        N = "This course encountered an error. Your progress will NOT be recorded. Please close and restart the course. \n\n Este curso ha detectado un error. NO se grabara su progreso. Por favor, cierre y reincie el curso.",
        M = "Sorry this subscription is no longer active. Please contact your supervisor or SafetySkills support at support@safetyskills.com",
        L = new Date,
        P = f,
        C = "",
        G = "suspend",
        O = "~",
        V = "Example, Anne E.",
        D = "",
        B = "",
        I = "00:00:00",
        U = {},
        z = l,
        q = g,
        F = "",
        R = i,
        X = i,
        H = i,
        J = "",
        $ = !1,
        j = 0,
        Q = {
            disableNext: !1,
            frameNumber: i,
            kickback: i,
            on: {
                animate: i,
                mute: i,
                nextEnable: i,
                nextDisable: i,
                pause: i,
                play: i,
                previousEnable: i,
                previousDisable: i,
                progressBar: i,
                slidePlay: i,
                slidePause: i,
                slideMute: i,
                slideUnMute: i,
                scoFinish: i,
                unMute: i
            },
            presentor: i,
            title: i
        },
        W = !1,
        Y = !1,
        K = !1,
        Z = !1,
        ee = !1,
        te = !0,
        ne = [],
        ie = [],
        ae = 0,
        re = i,
        se = i,
        oe = {
            _relayUrl: "https://scorm.safetyskills.com/relay/",
            _version: "4.0",
            Exit: function() {
                le(this._relayUrl, {
                    async: !1,
                    data: {
                        command: "ExitAU",
                        version: this._version,
                        session_id: n.aicc_sid
                    }
                })
            },
            Put: function() {
                var e = P,
                    t = "";
                W || (e === d || e === p) && (W = !0, t = this._relayUrl.indexOf("?") > -1 ? "&completed=true" : "?completed=true"), "" !== G && (e = e + "," + G), le(this._relayUrl + t, {
                    async: !1,
                    data: {
                        command: "PutParam",
                        version: this._version,
                        session_id: n.aicc_sid,
                        aicc_data: "[CORE]\nlesson_location=" + D + "\nscore=" + B + "\nlesson_status=" + e + "\ntime=" + I + "\n[CORE_LESSON]\r\nsuspend_data=" + JSON.stringify(U)
                    },
                    done: function(e) {
                        q = h, ge(!1, e.responseText)
                    },
                    fail: function(e) {
                        402 === e.status && ge(!0, M), q = g
                    }
                })
            }
        },
        le = function(t, n) {
            var i = !0,
                a = "",
                r = !e.requestAnimationFrame,
                s = {
                    done: function() {},
                    fail: function() {}
                },
                o = "POST",
                l = new XMLHttpRequest;
            if (n) {
                if (n.async === !1 && (i = !1), n.cache === !1 && (o = "GET", t = t + "?_=" + (new Date).getTime()), n.data) {
                    var c = [];
                    for (var u in n.data) n.data.hasOwnProperty(u) && c.push(encodeURIComponent(u) + "=" + encodeURIComponent(n.data[u]));
                    a = c.join("&")
                }
                n.done && (s.done = n.done), n.fail && (s.fail = n.fail)
            }
            "POST" === o && r && (l = new e.XDomainRequest, l.onload = function() {
                s.done.call(s, l)
            }, l.onerror = function() {
                s.fail.call(s, l)
            }, l.onprogress = function() {}, l.ontimeout = function() {}), l.open(o, t, i), l.setRequestHeader && (l.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=utf-8"), l.onreadystatechange = function() {
                4 === this.readyState && (200 === this.status ? s.done.call(s, this) : s.fail.call(s, this))
            }), setTimeout(function() {
                l.send(a)
            }, 0)
        },
        ce = function() {
            try {
                var t = new Audio;
                t.addEventListener("play", function() {
                    e.CanAutoplay = !0
                }, !1), t.volume = 0, t.autoplay = !0, t.src = "end-sound.mp3"
            } catch (n) {}
        },
        ue = function(e) {
            var t = Y ? "slide-kick" : "slide-frame";
            return e.indexOf(".swf") > -1 ? '<embed fullscreen="yes" height="100%" src="' + e + '" width="100%" id="' + t + '" name="' + t + '" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" quality="high" wmode="opaque"></embed>' : '<iframe height="100%" id="' + t + '" scrolling="no" src="' + e + '" style="border: none; overflow: hidden;" width="100%"></iframe>'
        },
        de = function() {
            if ("~" !== O) switch (O = "~", z) {
                case r:
                case s:
                    oe.Exit();
                    break;
                case l:
                    Ae.Terminate();
                    break;
                case u:
            }
        },
        me = function(e) {
            for (var t = 0; t < ne.length; t++)
                if (ne[t].getAttribute("file") === e) return t + 1
        },
        fe = function(e) {
            for (var t = 0; t < ne.length; t++)
                if (ne[t].getAttribute("file") === e) return ne[t];
            return ne[0]
        },
        pe = function(n) {
            if ("~" === O && ge(!0, N), e.addEventListener("beforeunload", de), t.onkeydown = function(e) {
                    var t = !1;
                    33 === e.which && (Z || $) && (ve(), t = !0), 34 === e.which && te && (Se(), t = !0), 106 === e.which && (ke(), t = !0), 36 === e.which && (we(), t = !0), $ || 119 === e.which && ($ = !0, t = !0, ge(!1, "Debug enabled")), t && e.preventDefault()
                }, D && "" !== D)
                for (var i = D.split("/")[0], r = a.GetLanguages(), s = 0; s < r.length; s++) r[s].id === i && (J = i);
            ye(J), n("resume" === C)
        },
        ge = function(t, n) {
            t ? $ ? e.console.log(n) : alert(n) : e.console && e.console.log && e.console.log(n)
        },
        he = function(e, t) {
            var n = new Date;
            n.setTime(e);
            var i = "",
                a = "000" + Math.floor(e / 36e5),
                r = "0" + n.getMinutes(),
                s = "0" + n.getSeconds(),
                o = "0" + Math.round(n.getMilliseconds() / 10);
            if (i = a.substr(a.length - 4) + ":" + r.substr(r.length - 2) + ":", i += s.substr(s.length - 2) + "." + o.substr(o.length - 2), t === c) {
                var l = i.split(":"),
                    u = l[0],
                    d = l[1],
                    m = l[2];
                i = "PT" + u + "H" + d + "M" + m + "S"
            }
            return i
        },
        be = function() {
            K ? (Q.on.unMute && Q.on.unMute(), K = !1, Q.on.slideUnMute && Q.on.slideUnMute()) : (Q.on.mute && Q.on.mute(), K = !0, Q.on.slideMute && Q.on.slideMute())
        },
        ve = function() {
            if (j && j < me(X.getAttribute("file"))) alert(x);
            else {
                for (var e, t = !1, n = Y ? X.getElementsByTagName("kickback") : ne, a = Y ? H.getAttribute("file") : X.getAttribute("file"), r = 0; r < n.length; r++) {
                    var s = n[r].getAttribute("file");
                    if (t) {
                        e = s;
                        break
                    }
                    a === s && (t = !0)
                }
                if (t && e) {
                    var o = fe(e);
                    Te(o) && (Y ? H = o : X = o)
                } else Y && (Y = !1, H = i, Te(X, !0))
            }
        },
        ye = function(e) {
            for (var n, i = se.getElementsByTagName("topics"), a = 0; a < i.length; a++) {
                var r = i[a];
                r.getAttribute("lang") === e && (n = r, t.title = n.getAttribute("title"))
            }
            ne = n.getElementsByTagName("page"), ae = 0;
            for (var s = 0; s < ne.length; s++) {
                var o = ne[s];
                "quiz" === o.getAttribute("pType") && ae++
            }
        },
        _e = function(e) {
            var t = {
                    section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
                    param: /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,
                    comment: /^\s*;.*$/
                },
                n = {},
                i = e.substring(e.indexOf("[")).split(/\n|\r\n/g),
                a = null;
            return i.forEach(function(e) {
                if (!t.comment.test(e))
                    if (t.param.test(e)) {
                        var i = e.match(t.param);
                        a ? n[a.toLowerCase()][i[1].toLowerCase()] = i[2] : n[i[1].toLowerCase()] = i[2]
                    } else if (t.section.test(e)) {
                    var r = e.match(t.section);
                    n[r[1].toLowerCase()] = {}, a = r[1].toLowerCase()
                } else 0 === e.length && a && (a = null)
            }), n
        },
        ke = function() {
            ee ? (Q.on.play && Q.on.play(), ee = !1, Q.on.slidePlay && Q.on.slidePlay()) : (Q.on.pause && Q.on.pause(), ee = !0, Q.on.slidePause && Q.on.slidePause())
        },
        Se = function() {
            var e, t = Y ? X.getElementsByTagName("kickback") : ne,
                n = Y ? H.getAttribute("file") : X.getAttribute("file");
            if (t[0].getAttribute("file") !== n) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i].getAttribute("file");
                    if (e && n === a) break;
                    e = a
                }
                var r = fe(e);
                Te(r) && (Y ? H = r : X = r)
            }
        },
        we = function() {
            Y ? Q.kickback.html(ue(H.getAttribute("file"))) : Q.presentor.html(ue(X.getAttribute("file"))), Q.on.play && (Q.on.play(), ee = !1)
        },
        Ae = {
            _api: i,
            _getApi: function(e) {
                var t = "API";
                z === c && (t = "API_1484_11"), this._api = this._scanParents(e), this._api || null == e.parent || e.parent == e || (this._api = this._scanParents(e.parent, t)), this._api || null == e.opener || (this._api = this._scanParents(e.opener, t))
            },
            _scanParents: function(e, t) {
                for (var n = 0; !e[t] && null != e.parent && e.parent != e;) {
                    if (n++, n > 10) return i;
                    e = e.parent
                }
                return e[t]
            },
            Commit: function() {
                var e = "false";
                return this._api && (e = z === c ? this._api.Commit("") : this._api.LMSCommit("")), e.toString()
            },
            GetLastError: function() {
                var e = 100;
                return this._api && (e = z === c ? this._api.GetLastError() : this._api.LMSGetLastError()), e.toString()
            },
            GetValue: function(e) {
                var t = "",
                    n = g;
                if (this._api) {
                    if (z === c) {
                        switch (e) {
                            case S:
                                e = "cmi.completion_status";
                                break;
                            case b:
                                e = "cmi.entry";
                                break;
                            case _:
                                e = "cmi.session_time";
                                break;
                            case "cmi.core.total_time":
                                e = "cmi.total_time";
                                break;
                            case y:
                                e = "cmi.location";
                                break;
                            case A:
                                e = "cmi.learner_name";
                                break;
                            case w:
                                e = "cmi.learner_id";
                                break;
                            case "cmi.student_preference._children":
                                e = "cmi.learner_preference._children";
                                break;
                            case "cmi.student_preference.language":
                                e = "cmi.learner_preference.language";
                                break;
                            case "cmi.core.score._children":
                                e = "cmi.score._children";
                                break;
                            case k:
                                e = "cmi.score.raw";
                                break;
                            case "cmi.core.score.min":
                                e = "cmi.score.min";
                                break;
                            case "cmi.core.score.max":
                                e = "cmi.score.max"
                        }
                        t = this._api.GetValue(e), n = this._api.GetLastError().toString()
                    } else t = this._api.LMSGetValue(e), n = this._api.LMSGetLastError().toString();
                    n !== h && (t = "")
                }
                return t.toString()
            },
            Initialize: function() {
                var t = "false";
                return this._getApi(e), this._api && (t = z === c ? this._api.Initialize("") : this._api.LMSInitialize("")), t.toString()
            },
            SetValue: function(e, t) {
                if (this._api)
                    if (z === c) {
                        switch (e) {
                            case S:
                                (t === p || t === m) && (e = "cmi.success_status"), (t === d || t === f) && (e = "cmi.completion_status");
                                break;
                            case _:
                                e = "cmi.session_time";
                                break;
                            case y:
                                e = "cmi.location";
                                break;
                            case v:
                                e = "cmi.exit";
                                break;
                            case k:
                                e = "cmi.score.raw", this._api.SetValue("cmi.score.scaled", t / 100)
                        }
                        this._api.SetValue(e, t)
                    } else e === E && (t = JSON.stringify(t)), this._api.LMSSetValue(e, t)
            },
            Terminate: function() {
                var e = "false";
                return this._api && (e = z === c ? this._api.Terminate("") : this._api.LMSFinish("")), e.toString()
            }
        },
        Ee = function(t) {
            e.CanAutoplay ? (Q.presentor.css("visibility", t ? "visible" : "hidden"), Q.kickback.css("visibility", t ? "hidden" : "visible")) : (Q.presentor.css("display", t ? "block" : "none"), Q.kickback.css("display", t ? "none" : "block"))
        },
        Te = function(t, n) {
            var i = t.getAttribute("file"),
                o = me(i),
                c = "true" === t.getAttribute("end"),
                m = "survey" === t.getAttribute("pType"),
                f = "quiz" === t.getAttribute("pType") || "summary" === t.getAttribute("pType"),
                g = t.getElementsByTagName("narration")[0],
                b = t.getElementsByTagName("bullets")[0];
            if ("~" !== O) {
                var w = new Date,
                    A = w.getTime() - L.getTime(),
                    x = he(A, z);
                switch (Y || (D = i), I = x.toString(), (c || m) && (G = "", P = re ? p : d), z) {
                    case r:
                    case s:
                        oe.Put();
                        break;
                    case l:
                        Y || (Ae.SetValue(y, D), q = Ae.GetLastError()), q === h && (Ae.SetValue(_, I), Ae.SetValue(v, G), Ae.SetValue(S, P), Ae.SetValue(k, B), Ae.SetValue(E, U), q = Ae.GetLastError()), q === h && (Ae.Commit(), q = Ae.GetLastError());
                        break;
                    case u:
                }
            } else ge(!0, N);
            if (q === h || $) {
                if (Q.frameNumber && Q.frameNumber.html(o + " / " + ne.length), Q.on.progressBar) {
                    var M = o / ne.length;
                    isNaN(M) && (M = 0), M > 1 && (M = 1), Q.on.progressBar(100 * M)
                }
                return R = g && null !== g ? e.XDomainRequest ? g.xml : (new XMLSerializer).serializeToString(g) : "", F = b && null !== b ? e.XDomainRequest ? b.xml : (new XMLSerializer).serializeToString(b) : "", n ? (Ee(!0), Q.kickback.empty(), Z = !1, te = !0) : (Y ? (Ee(!1), Q.kickback.html(ue(i)), te = X.getElementsByTagName("kickback")[0].getAttribute("file") !== i) : (Ee(!0), Q.presentor.html(ue(i)), te = ne[0].getAttribute("file") !== i), Z = !Y && (f || Q.disableNext && o > 1 && !m) ? !1 : !0), te ? Q.on.previousEnable() : Q.on.previousDisable(), Z ? Q.on.nextEnable() : Q.on.nextDisable(), (f || m || c) && a.SlideStart({}), Q.on.play && (Q.on.play(), ee = !1), c && (Q.on.scoFinish(), e.setTimeout(de, 1e3)), !0
            }
            return ge(!0, T), !1
        };
    return a.InitSco = function(e) {
        var i = t.createElement("audio");
        i.id = "end", i.src = "end-sound.mp3", i.preload = "auto", i.volume = 0, t.body.appendChild(i), ce(), n.debug && ($ = !0, ge(!1, "Debug Enabled")), n.demo && (z = "Demo", $ = !0, j = n.demo), z === o && n.aicc_url && n.subid && (z = r, oe._relayUrl += n.subid + "?relay-url=" + n.aicc_url), z === o && n.aicc_url && n.local && (z = s, oe._relayUrl = n.aicc_url), z === o && (z = l), ge(!1, z + " selected");
        var a = t.querySelector("meta[name=author]"),
            c = Math.floor(L.getTime() / 864e5 - L.getTimezoneOffset() / 1440 + 2440587.5);
        if (a && a.getAttribute("content") < c) ge(!0, M);
        else {
            var d = "sco.xml";
            n.sco && (d = n.sco), le(d, {
                cache: !1,
                done: function(t) {
                    se = t.responseXML, ie = se.getElementsByTagName("language"), J = se.getElementsByTagName("languages")[0].getAttribute("default");
                    var i = se.getElementsByTagName("sco")[0];
                    switch (i.getAttribute("mastery-score") && (re = i.getAttribute("mastery-score")), z) {
                        case r:
                        case s:
                            le(oe._relayUrl, {
                                data: {
                                    command: "GetParam",
                                    version: oe._version,
                                    session_id: n.aicc_sid
                                },
                                done: function(t) {
                                    ge(!1, t.responseText);
                                    var n = _e(t.responseText),
                                        i = n.core.lesson_status.toLowerCase();
                                    if ("n;i".split(";").indexOf(i.slice(0, 1)) > -1 ? P = f : (P = i, W = !0), i.indexOf(",") > -1) {
                                        var a = i.split(",")[1];
                                        "r" === a.slice(0, 1) && (C = "resume"), "a" === a.slice(0, 1) && (C = "ab-initio")
                                    }
                                    O = n.core.student_id, V = n.core.student_name, D = n.core.lesson_location;
                                    var r = n.core.score.split(",");
                                    B = r[0], n.core_lesson && n.core_lesson.suspend_data && (U = JSON.parse(n.core_lesson.suspend_data)), pe(e), oe.Put()
                                },
                                fail: function(t) {
                                    402 === t.status && ge(!0, M), pe(e)
                                }
                            });
                            break;
                        case l:
                            "true" === Ae.Initialize() && ("not attempted" === Ae.GetValue(S) && Ae.SetValue(S, f), O = Ae.GetValue(w), V = Ae.GetValue(A), C = Ae.GetValue(b), D = Ae.GetValue(y), B = Ae.GetValue(k), "" !== Ae.GetValue(E) && (U = JSON.parse(Ae.GetValue(E)))), pe(e);
                            break;
                        case u:
                            break;
                        default:
                            pe(e)
                    }
                }
            })
        }
    }, a.GetLanguages = function() {
        for (var e = [], t = 0; t < ie.length; t++) {
            var n = ie[t];
            e[t] = {
                id: n.getAttribute("id"),
                label: n.getAttribute("label")
            }
        }
        return e
    }, a.SelectLanguage = function(e) {
        t.getElementById("end").play(), J = e ? e : se.getElementsByTagName("languages")[0].getAttribute("default"), ye(J), X = ne[0]
    }, a.Resume = function() {
        if (t.getElementById("end").play(), D && "" !== D)
            for (var e = D.split("/")[0], n = a.GetLanguages(), i = 0; i < n.length; i++) n[i].id === e && (J = e);
        ye(J);
        var r = fe(D);
        r && (X = r)
    }, a.GetLocalizedValues = function() {
        for (var e = {}, t = 0; t < ie.length; t++) {
            var n = ie[t];
            if (n.getAttribute("id") === J)
                for (var i = n.childNodes, a = 0; a < i.length; a++) i[a].textContent ? e[i[a].tagName] = i[a].textContent : e[i[a].tagName] = i[a].firstChild.nodeValue
        }
        return e
    }, a.InitInterface = function(e) {
        Q.on.animate = e.onAnimate, Q.on.progressBar = e.setProgressBar, Q.on.scoFinish = e.onScoFinish, Q.title = e.titleField, Q.frameNumber = e.frameField, Q.presentor = e.presentorFrame, Q.kickback = e.kickbackFrame, Q.title && Q.title.html(t.title), Te(X)
    }, a.Mute = function(e) {
        return Q.on.mute = e.mute, Q.on.unMute = e.unMute, Q.on.unMute(), be
    }, a.Next = function(e) {
        return Q.on.nextDisable = e.onDisable, Q.on.nextEnable = e.onEnable, e.disableOnNext && (Q.disableNext = e.disableOnNext), ve
    }, a.Play = function(e) {
        return Q.on.play = e.play, Q.on.pause = e.pause, ke
    }, a.Previous = function(e) {
        return Q.on.previousDisable = e.onDisable, Q.on.previousEnable = e.onEnable, Se
    }, a.Replay = function() {
        return we
    }, a.EndSco = function() {
        return function() {
            de(), e.top.opener ? e.top.close() : ge(!0, "Data saved, but window was not able to be closed")
        }
    }, a.GetStudentName = function() {
        return V
    }, a.SubmitSurvey = function(e) {
        if (e) {
            var n = {
                Comments: e.Comments,
                CourseName: t.title,
                Emphasis: e.Emphasis,
                Intro: e.Intro,
                Overall: e.Overall,
                ScreenHeight: screen.height,
                ScreenWidth: screen.width,
                Student: "",
                Summaries: e.Summaries,
                Thoroughness: e.Thoroughness,
                Url: location.href,
                UserAgent: navigator.userAgent
            };
            e.IsAnonymous ? n.Student = "anonymous" : n.Student = V, le("https://admin.safetyskills.com/api/survey", {
                data: n,
                done: function() {
                    ge(!1, "Survey Data: " + n)
                }
            })
        }
        ve()
    }, a.SlideStart = function(e) {
        Q.on.slidePause = e.slidePause, Q.on.slidePlay = e.slidePlay, Q.on.slideMute = e.slideMute, Q.on.slideUnMute = e.slideUnMute, Q.on.animate && Q.on.animate(F, R), K && Q.on.slideMute && Q.on.slideMute()
    }, a.SlideEnd = function() {
        e.CanAutoplay || ce(), setTimeout(function() {
            var n = t.getElementById("end");
            n.volume = 1, n.play(), e.CanAutoplay ? (Q.on.nextEnable(), Z = !0) : ve()
        }, 1e3)
    }, a.ScoreResults = function() {
        var e = 0;
        U.answered && (e = U.answered.length);
        var t = e / ae;
        return {
            answered: e,
            passed: t >= re,
            percent: (100 * t).toFixed(2),
            total: ae
        }
    }, a.QuizCorrect = function() {
        if (re && "quiz" === X.getAttribute("pType")) {
            var e = -1;
            if (U.answered ? e = U.answered.indexOf(X.getAttribute("file")) : U.answered = [], -1 === e) {
                U.answered.push(X.getAttribute("file"));
                var t = 0;
                U.answered && (t = U.answered.length);
                var n = t / ae;
                B = (100 * n).toFixed(2)
            }
        }
        ve()
    }, a.QuizIncorrect = function() {
        var e = X.getElementsByTagName("kickback")[0];
        if (re) {
            var t = -1;
            if (U.answered && (t = U.answered.indexOf(X.getAttribute("file"))), t > -1) {
                U.answered.splice(t, 1);
                var n = 0;
                U.answered && (n = U.answered.length);
                var i = n / ae;
                B = (100 * i).toFixed(2)
            }
            if (e) {
                var a = fe(e.getAttribute("file"));
                Y = !1, Te(a) && (X = a)
            } else ve()
        } else if (e) {
            var r = fe(e.getAttribute("file"));
            Y = !0, Te(r) && (H = r)
        }
    }, ge(!1, "SS v2.9.3 Loaded"), a
}(this, this.document, this.querystrings || {});
//# sourceMappingURL=ss.2.9.js.map
