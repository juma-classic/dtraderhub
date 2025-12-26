"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["394"], {
        71035: function(e, t, a) {
            a.r(t), a.d(t, {
                default: () => tb
            });
            var o = a("85893"),
                n = a("67294"),
                i = a("67026"),
                s = a("92198"),
                l = a("89250"),
                r = a("30453"),
                c = a("37979"),
                d = a("2502"),
                h = a("89471");
            let u = function() {
                let e = (0, l.TH)(),
                    t = (0, l.s0)();
                return {
                    deleteQueryString: function(a) {
                        let o = new URLSearchParams(e.search);
                        o.delete(a), t({
                            search: o.toString()
                        }, {
                            replace: !0
                        })
                    },
                    queryString: function() {
                        let t = new URLSearchParams(e.search),
                            a = {};
                        return t.forEach((e, t) => {
                            a[t] = e
                        }), a
                    }(),
                    setQueryString: function(a) {
                        ! function(a) {
                            let o = new URLSearchParams(e.search);
                            Object.entries(a).forEach(e => {
                                let [t, a] = e;
                                void 0 === a ? o.delete(t) : o.set(t, a)
                            }), t({
                                search: o.toString()
                            }, {
                                replace: !0
                            })
                        }(a)
                    }
                }
            };

            function m(e) {
                let {
                    deleteQueryString: t,
                    queryString: a,
                    setQueryString: o
                } = u(), {
                    isDesktop: i
                } = (0, d.F)(), [s, l] = (0, h.Sx)(), r = () => {
                    if (!a.modal && l.setAll([]), (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 && !1 === e.shouldReinitializeModals) t("modal");
                    else {
                        let e = a.modal;
                        if (e) {
                            let t = e.split(","),
                                a = t.slice(-1)[0];
                            l.setAll([]), t.forEach(e => {
                                l.set(e, !i)
                            }), l.set(a, !0)
                        }
                    }
                };
                return (0, n.useEffect)(() => {
                    r()
                }, []), (0, n.useEffect)(() => {
                    !(null == a ? void 0 : a.modal) && l.reset()
                }, [null == a ? void 0 : a.modal]), (0, h.OR)("popstate", () => {
                    r()
                }), {
                    hideModal: e => {
                        let n = a.modal;
                        if (n) {
                            let a = n.split(",");
                            if (null == e ? void 0 : e.shouldHideAllModals) s.forEach((e, a) => {
                                l.set(a, !1), t("modal")
                            });
                            else if (null == e ? void 0 : e.shouldHidePreviousModals) {
                                if (a.length > 1) {
                                    let e = a.shift();
                                    a.forEach(e => {
                                        l.set(e, !1)
                                    }), a = [e ?? ""], o({
                                        modal: e
                                    })
                                } else 1 === a.length ? o({
                                    modal: a[0]
                                }) : t("modal")
                            } else {
                                let e = a.pop(),
                                    n = a.slice(-1)[0];
                                n ? (l.set(e, !1), l.set(n, !0)) : l.set(e, !1), 0 === a.length ? t("modal") : o({
                                    modal: a.join(",")
                                })
                            }
                        }
                    },
                    isModalOpenFor: e => s.get(e) || !1,
                    showModal: (e, t) => {
                        let n = a.modal;
                        if (n) {
                            let a = n.split(","),
                                s = a.slice(-1)[0];
                            if (s === e) return;
                            (null == t ? void 0 : t.shouldStackModals) === !1 ? l.set(s, !1) : l.set(s, (null == t ? void 0 : t.shouldStackModals) || !i), l.set(e, !0), a.push(e), o({
                                modal: (null == t ? void 0 : t.shouldClearPreviousModals) ? e : a.join(",")
                            })
                        } else l.set(e, !0), o({
                            modal: e
                        })
                    }
                }
            }
            let p = () => {
                let e = localStorage.getItem("active_tab"),
                    t = ["dashboard", "bot_builder", "chart", "tutorial"],
                    a = t[Number(e)],
                    o = window.location.href.split("#")[0];
                return `${o}#${a}`
            };
            var w = a("32305"),
                g = a("96223"),
                x = a("3693"),
                b = a("98146"),
                f = a("64410"),
                j = a("918"),
                v = a("50051"),
                k = a("16496"),
                _ = a("59001"),
                y = a("57218"),
                C = a("12811"),
                I = a("28505"),
                Z = a("73971"),
                N = a("99243"),
                z = a("63066"),
                L = a("96396"),
                S = a("14249"),
                F = a("45322"),
                M = a("34273"),
                E = a("473");
            let T = [{
                code: "EN",
                displayName: "English",
                icon: (0, o.jsx)(w.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(w.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(w.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "AR",
                displayName: "العربية",
                icon: (0, o.jsx)(g.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(g.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(g.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "BN",
                displayName: "বাংলা",
                icon: (0, o.jsx)(x.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(x.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(x.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "DE",
                displayName: "Deutsch",
                icon: (0, o.jsx)(b.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(b.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(b.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ES",
                displayName: "Espa\xf1ol",
                icon: (0, o.jsx)(f.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(f.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(f.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "FR",
                displayName: "Fran\xe7ais",
                icon: (0, o.jsx)(j.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(j.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(j.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "IT",
                displayName: "Italiano",
                icon: (0, o.jsx)(v.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(v.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(v.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SW",
                displayName: "Kiswahili",
                icon: (0, o.jsx)(k.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(k.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(k.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KM",
                displayName: "ខ្មែរ",
                icon: (0, o.jsx)(_.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(_.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(_.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KO",
                displayName: "한국어",
                icon: (0, o.jsx)(y.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(y.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(y.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PL",
                displayName: "Polish",
                icon: (0, o.jsx)(C.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(C.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(C.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PT",
                displayName: "Portugu\xeas",
                icon: (0, o.jsx)(I.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(I.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(I.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "RU",
                displayName: "Русский",
                icon: (0, o.jsx)(Z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(Z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(Z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SI",
                displayName: "සිංහල",
                icon: (0, o.jsx)(N.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(N.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(N.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TH",
                displayName: "ไทย",
                icon: (0, o.jsx)(z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TR",
                displayName: "T\xfcrk\xe7e",
                icon: (0, o.jsx)(L.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(L.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(L.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "UZ",
                displayName: "O'zbek",
                icon: (0, o.jsx)(S.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(S.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(S.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "VI",
                displayName: "Tiếng Việt",
                icon: (0, o.jsx)(F.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(F.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(F.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_CN",
                displayName: "简体中文",
                icon: (0, o.jsx)(M.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(M.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(M.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_TW",
                displayName: "繁體中文",
                icon: (0, o.jsx)(E.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(E.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(E.Z, {
                    height: 14.67,
                    width: 22
                })
            }];
            var A = a("48059"),
                D = a("44412"),
                R = a("96877"),
                V = a("83257"),
                B = a("53261"),
                O = a("21456"),
                P = a("64915");
            let H = (0, R.Pi)(() => {
                let {
                    is_dark_mode_on: e,
                    toggleTheme: t
                } = (0, V.Z)(), {
                    localize: a
                } = (0, A.T_)();
                return (0, o.jsx)(P.u, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: a("Change theme"),
                    onClick: t,
                    children: e ? (0, o.jsx)(O.Z, {
                        iconSize: "xs"
                    }) : (0, o.jsx)(B.Z, {
                        iconSize: "xs"
                    })
                })
            });
            var U = a("79655"),
                J = a("66175"),
                G = a("45452"),
                X = a("12838");
            let q = () => {
                    let e = X.fV.getValue(X.sE.configServerURL);
                    return e ? (0, o.jsxs)(G.Z, {
                        className: "app-footer__endpoint",
                        color: "red",
                        size: "s",
                        children: ["The server", " ", (0, o.jsx)(U.rU, {
                            className: "app-footer__endpoint-text",
                            to: J.xOw.endpoint,
                            children: "endpoint"
                        }), " ", `is: ${e}`]
                    }) : null
                },
                W = {
                    exit: ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    request: ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    screenChange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    screenElement: ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"]
                },
                Y = () => {
                    let [e, t] = (0, n.useState)(!1), {
                        exit: a,
                        request: o,
                        screenChange: i,
                        screenElement: s
                    } = W, l = (0, n.useCallback)(() => t(s.some(e => document[e])), [s]);
                    return (0, n.useEffect)(() => (i.forEach(e => {
                        document.addEventListener(e, l, !1)
                    }), () => {
                        i.forEach(e => {
                            document.removeEventListener(e, l, !1)
                        })
                    }), [l, i]), {
                        toggleFullScreenMode: n => {
                            null == n || n.stopPropagation();
                            let i = a.find(e => document[e]),
                                s = o.find(e => document.documentElement[e]);
                            e && i ? document[i]() : s ? document.documentElement[s]() : t(!1)
                        }
                    }
                };
            var K = a("69914");
            let $ = () => {
                    let {
                        toggleFullScreenMode: e
                    } = Y(), {
                        localize: t
                    } = (0, A.T_)();
                    return (0, o.jsx)(P.u, {
                        as: "button",
                        className: "app-footer__icon",
                        onClick: e,
                        tooltipContent: t("Full screen"),
                        children: (0, o.jsx)(K.Z, {
                            iconSize: "xs"
                        })
                    })
                },
                Q = e => {
                    let {
                        openLanguageSettingModal: t
                    } = e, {
                        currentLang: a,
                        localize: i
                    } = (0, A.T_)(), s = (0, n.useMemo)(() => {
                        var e;
                        return null === (e = T.find(e => {
                            let {
                                code: t
                            } = e;
                            return t == a
                        })) || void 0 === e ? void 0 : e.placeholderIcon
                    }, [a]);
                    return (0, o.jsxs)(P.u, {
                        as: "button",
                        className: "app-footer__language",
                        onClick: t,
                        tooltipContent: i("Language"),
                        children: [s, (0, o.jsx)(G.Z, {
                            size: "xs",
                            weight: "bold",
                            children: a
                        })]
                    })
                },
                ee = () => "undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine,
                et = () => {
                    let [e, t] = (0, n.useState)(ee()), a = () => t(!0), o = () => t(!1);
                    return (0, n.useEffect)(() => (window.addEventListener("online", a), window.addEventListener("offline", o), () => {
                        window.removeEventListener("online", a), window.removeEventListener("offline", o)
                    }), []), e
                },
                ea = () => {
                    let [e, t] = (0, n.useState)("online"), a = et();
                    return (0, n.useEffect)(() => {
                        a ? t("online") : t("offline")
                    }, [a]), e
                },
                eo = () => ({
                    blinking: {
                        className: "app-footer__network-status-online app-footer__network-status-blinking",
                        tooltip: (0, A.NC)("Connecting to server")
                    },
                    offline: {
                        className: "app-footer__network-status-offline",
                        tooltip: "Offline"
                    },
                    online: {
                        className: "app-footer__network-status-online",
                        tooltip: "Online"
                    }
                }),
                en = () => {
                    let e = ea(),
                        {
                            className: t,
                            tooltip: a
                        } = (0, n.useMemo)(() => eo()[e], [e]);
                    return (0, o.jsx)(P.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_network_status",
                        tooltipContent: (0, A.NC)("Network status: {{status}}", {
                            status: a
                        }),
                        children: (0, o.jsx)("div", {
                            className: (0, i.Z)("app-footer__network-status", t),
                            "data-testid": "dt_circle"
                        })
                    })
                };
            var ei = a("30381"),
                es = a.n(ei),
                el = a("83274"),
                er = a("27179"),
                ec = a("83606");
            let ed = (0, R.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, d.F)(), {
                        common: t
                    } = (0, el.oR)() ?? {
                        common: {
                            server_time: es()()
                        }
                    };
                    return (0, o.jsx)(P.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_server_time",
                        tooltipContent: t.server_time.format(er.kT),
                        children: (0, o.jsx)(ec.x, {
                            size: e ? "xs" : "sm",
                            children: t.server_time.format(er.Yp)
                        })
                    })
                }),
                eh = () => {
                    let {
                        currentLang: e = "EN",
                        localize: t,
                        switchLanguage: a
                    } = (0, A.T_)(), {
                        hideModal: n,
                        isModalOpenFor: i,
                        showModal: s
                    } = m();
                    return (0, o.jsxs)("footer", {
                        className: "app-footer",
                        children: [(0, o.jsx)($, {}), (0, o.jsx)(Q, {
                            openLanguageSettingModal: () => s("DesktopLanguagesModal")
                        }), (0, o.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, o.jsx)(H, {}), (0, o.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, o.jsx)(ed, {}), (0, o.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, o.jsx)(en, {}), (0, o.jsx)(q, {}), i("DesktopLanguagesModal") && (0, o.jsx)(D.u, {
                            headerTitle: t("Select Language"),
                            isModalOpen: !0,
                            languages: T,
                            onClose: n,
                            onLanguageSwitch: e => {
                                a(e), n(), window.location.replace(p()), window.location.reload()
                            },
                            selectedLanguage: e
                        })]
                    })
                };
            var eu = a("8015");
            let em = {
                    aud: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyAudIcon
                    }))),
                    bch: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyBchIcon
                    }))),
                    btc: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyBtcIcon
                    }))),
                    busd: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyBusdIcon
                    }))),
                    dai: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyDaiIcon
                    }))),
                    eth: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyEthIcon
                    }))),
                    eur: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    "eur-check": (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    eurs: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyEursIcon
                    }))),
                    eusdt: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    gbp: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyGbpIcon
                    }))),
                    idk: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyIdkIcon
                    }))),
                    ltc: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyLtcIcon
                    }))),
                    pax: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyPaxIcon
                    }))),
                    tusd: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyTusdIcon
                    }))),
                    tusdt: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    unknown: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyPlaceholderIcon
                    }))),
                    usd: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyUsdIcon
                    }))),
                    usdc: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyUsdcIcon
                    }))),
                    usdk: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyUsdkIcon
                    }))),
                    ust: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    virtual: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyDemoIcon
                    }))),
                    xrp: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyXrpIcon
                    }))),
                    algo: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyAlgoIcon
                    }))),
                    avax: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyAvaxIcon
                    }))),
                    bat: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyBatIcon
                    }))),
                    bnb: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyBnbIcon
                    }))),
                    dash: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyDashIcon
                    }))),
                    doge: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyDogeIcon
                    }))),
                    dot: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyDotIcon
                    }))),
                    eos: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyEosIcon
                    }))),
                    etc: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyEtcIcon
                    }))),
                    fil: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyFilIcon
                    }))),
                    iota: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyIotaIcon
                    }))),
                    link: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyLinkIcon
                    }))),
                    matic: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyMaticIcon
                    }))),
                    mkr: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyMkrIcon
                    }))),
                    mcd: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyMultiCollateralDaiIcon
                    }))),
                    neo: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyNeoIcon
                    }))),
                    none: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyNoneIcon
                    }))),
                    omg: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyOmgIcon
                    }))),
                    p2p: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyP2PIcon
                    }))),
                    scd: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencySingleCollateralDaiIcon
                    }))),
                    sol: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencySolIcon
                    }))),
                    terra: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyTerraIcon
                    }))),
                    trx: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyTrxIcon
                    }))),
                    uni: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyUniIcon
                    }))),
                    xlm: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyXlmIcon
                    }))),
                    xmr: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyXmrIcon
                    }))),
                    xtz: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyXtzIcon
                    }))),
                    zec: (0, n.lazy)(() => a.e("609").then(a.bind(a, 19673)).then(e => ({
                        default: e.CurrencyZecIcon
                    })))
                },
                ep = e => {
                    let {
                        currency: t,
                        isVirtual: a
                    } = e, i = a ? em.virtual : em[null == t ? void 0 : t.toLowerCase()] || em.unknown;
                    return (0, o.jsx)(n.Suspense, {
                        fallback: null,
                        children: (0, o.jsx)(i, {
                            iconSize: "sm"
                        })
                    })
                };
            var ew = a("79649");
            let eg = e => {
                var t;
                let {
                    allBalanceData: a
                } = e, {
                    accountList: i,
                    activeLoginid: s
                } = (0, ew.T)(), l = (0, n.useMemo)(() => null == i ? void 0 : i.find(e => e.loginid === s), [s, i]), r = null == a ? void 0 : null === (t = a.accounts) || void 0 === t ? void 0 : t[(null == l ? void 0 : l.loginid) ?? ""];
                return {
                    data: (0, n.useMemo)(() => {
                        var e, t;
                        return l ? { ...l,
                            balance: (0, J.oC5)(null == r ? void 0 : null === (e = r.balance) || void 0 === e ? void 0 : e.toFixed((0, J.i4S)(r.currency))) ?? "0",
                            currencyLabel: (null == l ? void 0 : l.is_virtual) ? (0, A.NC)("Demo") : null == l ? void 0 : l.currency,
                            icon: (0, o.jsx)(ep, {
                                currency: null == l ? void 0 : null === (t = l.currency) || void 0 === t ? void 0 : t.toLowerCase(),
                                isVirtual: !!(null == l ? void 0 : l.is_virtual)
                            }),
                            isVirtual: !!(null == l ? void 0 : l.is_virtual),
                            isActive: (null == l ? void 0 : l.loginid) === s
                        } : void 0
                    }, [l, s, a])
                }
            };
            var ex = a("77898"),
                eb = a("16857"),
                ef = a("32767"),
                ej = a("99466"),
                ev = a("42913"),
                ek = a("54458"),
                e_ = a("62269"),
                ey = a("28607"),
                eC = a("56594");
            let eI = {
                    "www.smartdollarhub.site": {
                        logo: "/gamer.jpeg",
                        name: "Dollar Hub",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/LFzX7IJxVoN5Sh5gm7HwcD",
                            telegram: "https://t.me/gamerstradingtools",
                            tiktok: "https://www.tiktok.com/@gamerbrayoh"
                        }
                    },
                    "random.binarytool.site": {
                        logo: "/random.jpeg",
                        name: "MR Random",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/LWJ7RqrNcU7AaMFAs8g76S",
                            telegram: "https://t.me/randomhubtools",
                            tiktok: "tiktok.com/@random.binarytool"
                        }
                    },
                    "www.marketsniper.site": {
                        name: "Market Sniper",
                        social: {}
                    },
                    "www.tickflow.site": {
                        name: "Tickflow",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/GZjzv0nTFzmGrCoS7vhS1s?mode=ems_copy_t",
                            telegram: "https://t.me/tickflo",
                            tiktok: "https://www.tiktok.com/@legoo.site"
                        }
                    },
                    "mrdollars.tickflow.site": {
                        name: "Tickflow",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/GZjzv0nTFzmGrCoS7vhS1s?mode=ems_copy_t",
                            telegram: "https://t.me/tickflo",
                            tiktok: "https://www.tiktok.com/@legoo.site"
                        }
                    },
                    "bot.frankfxx.com": {
                        name: "Frank FX",
                        social: {
                            youtube: "https://www.youtube.com/@frankfx4724",
                            telegram: "https://www.instagram.com/frankfx120"
                        }
                    },
                    "app.sammykhizz.site": {
                        name: "Sammykhizz",
                        social: {
                            telegram: "https://t.me/smartkhizz"
                        }
                    },
                    "www.dtraderscore.com": {
                        name: "Dtraderscore",
                        social: {}
                    },
                    "www.derexhub.site": {
                        logo: "/derex.jpeg",
                        name: "Derexhub",
                        social: {
                            whatsapp: "https://wa.me/254704258754",
                            tiktok: "https://www.tiktok.com/@darictrader"
                        }
                    },
                    "www.primetrades.net": {
                        logo: "/prime.png",
                        name: "Primetraders",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/Fubz7vk2yoeIS7fkXuh8Ph",
                            whatsapp1: "https://chat.whatsapp.com/CvklZRDsVknGYeJWZM9f9z",
                            telegram: "https://t.me/pt_005",
                            tiktok: "https://www.tiktok.com/@primetrades.net.bot1"
                        }
                    },
                    "forexalmighty.vercel.app": {
                        name: "Forex Almighty",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/JLJL9FV2Sm4FZkvGiahVqa",
                            telegram: "https://t.me/derivhome",
                            tiktok: "https://www.tiktok.com/@forex_almighty",
                            youtube: "https://www.youtube.com/@DIGITALWORLD61",
                            instagram: "https://www.instagram.com/alm_forex?igsh=MTBoYmlxaXN2ejl6dg%3D%3D&utm_source=qr"
                        }
                    },
                    "www.kingsfx.site": {
                        name: "Kings FX",
                        social: {
                            telegram: "https://t.me/+SwZUsH-5O7kwZDRk",
                            tiktok: "https://www.tiktok.com/@simonwills254?_t=ZM-8w9K3UHnerv&_r=1"
                        }
                    },
                    "www.kashytrader.site": {
                        name: "Kashy Trader",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029Vb6Huq0H5JM0wikCrM3Q",
                            telegram: "https://t.me/+F9MAhse_I-AxM2Vk",
                            tiktok: "https://www.tiktok.com/@kashytrader"
                        }
                    },
                    "www.marketscalper.site": {
                        name: "Marketscalper",
                        social: {
                            tiktok: "https://www.tiktok.com/@skippertrader.site",
                            instagram: "https://www.instagram.com/mwangi_mwangi_345"
                        }
                    },
                    "www.fametraders.site": {
                        name: "Fametraders",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/IlYLp3JZjc3BFDutyxklRi",
                            telegram: "https://t.me/+C-uyxrByLzo5YzFk"
                        }
                    },
                    "jeffhub.binarytool.site": {
                        logo: "/jeffhub.jpeg",
                        name: "JeffHub",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VawwKhVFCCoRpmFH3j23",
                            instagram: "https://instagram.com/jeffhub-instagram",
                            tiktok: "https://www.tiktok.com/@jeff.hub.traders"
                        }
                    },
                    "siralex.binarytool.site": {
                        logo: "/alex.jpeg",
                        name: "Sir Alex",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/Bmrvj3by3vDJpuzvX4eEvz",
                            telegram: "https://t.me/+ER8TG4VRkTUxODM0",
                            tiktok: "https://www.tiktok.com/@sir.alex.mathenge_backup"
                        }
                    },
                    "www.binaryedge.site": {
                        logo: "/binary_logo.svg",
                        name: "Binary Edge",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/JjWtqcE43OH75EfwFjaDFe",
                            telegram: "https://t.me/+nEA3cZfEGTJhMjg8",
                            tiktok: "https://tiktok.com/@binaryedge.site"
                        }
                    },
                    "www.bmbtraders.site": {
                        logo: "/bmb.jpeg",
                        name: "BMB Traders",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/EU9uiFZ7KRQ7dOc4nqaiyv",
                            telegram: "https://t.me/derivsignalsbmbtraders",
                            youtube: "https://youtube.com/@bmbtraderssite",
                            instagram: "https://www.instagram.com/bmb_traders_ke",
                            tiktok: "https://www.tiktok.com/@bmbtrader.site"
                        }
                    },
                    "www.ikiihub.site": {
                        name: "Ikii Hub",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VaWuMaXJENyAlkol1D14"
                        }
                    },
                    "dbot.dollarprinterhub.site": {
                        name: "D-Traders",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VbB3YovCxoB0aLFFPm0A",
                            tiktok: "https://www.tiktok.com/@www.dtraters.site?_t=ZM-8yYFBf27nUe&_r=1"
                        }
                    },
                    "www.succeedtool.com": {
                        name: "Succeedtool",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VbBUfWM3wtb62uDXzw27",
                            telegram: "https://t.me/suedfx"
                        }
                    },
                    "www.primeanalyser.com": {
                        name: "Prime Analyser",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029Vb6r4SgLY6d75plBNZ3i",
                            telegram: "https://t.me/primeanalyser"
                        }
                    },
                    "spallis.copytradingsite.com": {
                        name: "spallis"
                    },
                    "states.copytradingsite.com": {
                        name: "states"
                    },
                    "dfire.copytradingsite.com": {
                        name: "dfire"
                    },
                    "jose.copytradingsite.com": {
                        name: "jose"
                    },
                    "spongebobfx.copytradingsite.com": {
                        name: "Spongebobfx"
                    },
                    "tangi.copytradingsite.com": {
                        name: "tangi"
                    },
                    "brandy.copytradingsite.com": {
                        name: "brandy"
                    },
                    "www.binaryflipper.site": {
                        name: "Binary Flipper",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/Je07192834567890",
                            telegram: "https://t.me/binaryflipper",
                            youtube: "https://youtube.com/@binaryflipper",
                            instagram: "https://www.instagram.com/binaryflipper",
                            tiktok: "https://www.tiktok.com/@binaryflipper"
                        }
                    },
                    default: {
                        logo: "/binary_logo.svg",
                        name: "DollarPrinterHub",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VaDbybILo4heuWEGso3B",
                            telegram: "https://t.me/dollarprinterhub",
                            youtube: "https://www.youtube.com/@dollarprinterhub",
                            instagram: "https://www.instagram.com/dollarprinterhubite/",
                            tiktok: "https://www.tiktok.com/@dollarprinterhub",
                            facebook: "https://www.facebook.com/profile.php?id=61559570918487"
                        }
                    }
                },
                eZ = () => {
                    let [e, t] = (0, n.useState)(!1), {
                        logo: a,
                        name: i,
                        social: s
                    } = eI[window.location.hostname] || eI.default;
                    return (0, o.jsxs)("div", {
                        className: "d-apollo-logo",
                        children: [(0, o.jsxs)("div", {
                            className: "logo-holder",
                            children: [a && (0, o.jsx)("img", {
                                src: a,
                                alt: "custom Logo",
                                className: "d-apollo-logo__image"
                            }), (0, o.jsx)(G.Z, {
                                color: "less-prominent",
                                lineHeight: "xs",
                                size: "xs",
                                weight: "bold",
                                align: "center",
                                className: "dc-contract-card-message",
                                children: i
                            })]
                        }), (0, o.jsx)("button", {
                            className: "d-apollo-logo__icon",
                            onClick: () => t(!0),
                            children: (0, o.jsx)(ef.Kz1, {})
                        }), e && (0, o.jsx)("div", {
                            className: "modal-overlay",
                            onClick: () => t(!1),
                            children: (0, o.jsxs)("div", {
                                className: "modal-content",
                                onClick: e => e.stopPropagation(),
                                children: [(0, o.jsx)("h3", {
                                    children: "Follow Us"
                                }), (0, o.jsxs)("ul", {
                                    children: [s.whatsapp && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: s.whatsapp,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ej.Z, {}), " WhatsApp Group"]
                                        })
                                    }), [2, 3, 4, 5, 6].map(e => {
                                        let t = s[`whatsapp${e}`];
                                        return t ? (0, o.jsx)("li", {
                                            children: (0, o.jsxs)("a", {
                                                href: t,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, o.jsx)(ej.Z, {}), " WhatsApp Group ", e]
                                            })
                                        }, `whatsapp${e}`) : null
                                    }), s.telegram && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: s.telegram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ev.Z, {}), " Telegram"]
                                        })
                                    }), s.youtube && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: s.youtube,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ek.Z, {}), " YouTube"]
                                        })
                                    }), s.instagram && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: s.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(e_.Z, {}), " Instagram"]
                                        })
                                    }), s.tiktok && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: s.tiktok,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ey.Z, {}), " TikTok"]
                                        })
                                    }), s.facebook && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: s.facebook,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(eC.Z, {}), " Facebook"]
                                        })
                                    })]
                                }), (0, o.jsx)("button", {
                                    onClick: () => t(!1),
                                    children: "Close"
                                })]
                            })
                        })]
                    })
                },
                eN = () => {
                    let {
                        isDesktop: e
                    } = (0, d.F)();
                    return e ? (0, o.jsx)(eZ, {}) : null
                };
            var ez = a("24561");
            let eL = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, o.jsx)(o.Fragment, {
                        children: t ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "13"
                            }), (0, o.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "35",
                                y: "19"
                            }), (0, o.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "120",
                                y: "6"
                            })]
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "12"
                            }), (0, o.jsx)("circle", {
                                cx: "58",
                                cy: "22",
                                r: "12"
                            }), (0, o.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "150",
                                y: "20"
                            }), (0, o.jsx)("circle", {
                                cx: "118",
                                cy: "24",
                                r: "13"
                            }), (0, o.jsx)("rect", {
                                height: "30",
                                rx: "4",
                                ry: "4",
                                width: "1",
                                x: "87",
                                y: "8"
                            }), (0, o.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "250",
                                y: "8"
                            })]
                        })
                    })
                },
                eS = e => {
                    let {
                        isMobile: t,
                        speed: a
                    } = e;
                    return (0, o.jsx)(ez.ZP, {
                        "data-testid": "dt_accounts_info_loader",
                        height: t ? 42 : 46,
                        speed: a,
                        width: t ? 216 : 350,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: (0, o.jsx)(eL, {
                            isMobile: t
                        })
                    })
                };
            var eF = a("30394"),
                eM = a("88199"),
                eE = a("42457"),
                eT = a("33281"),
                eA = a("47342"),
                eD = a("63387"),
                eR = a.n(eD);
            let eV = e => {
                let {
                    width: t,
                    height: a
                } = e;
                return (0, o.jsx)("div", {
                    className: "skeleton",
                    style: {
                        width: t,
                        height: a
                    }
                })
            };
            var eB = a("44884"),
                eO = a("37410"),
                eP = a("37528");
            let eH = {
                    currency: " ",
                    currencyLabel: "Options & Multipliers",
                    is_virtual: 1,
                    loginid: "",
                    is_disabled: !1,
                    balance: "",
                    icon: (0, o.jsx)(eO.Z, {
                        width: 24,
                        height: 24
                    }),
                    isActive: !1,
                    isVirtual: !0
                },
                eU = e => Number(e.replace(/,/g, "")),
                eJ = () => (0, o.jsx)(eP.i, {
                    color: "var(--general-section-2)",
                    height: "4px"
                }),
                eG = e => {
                    let {
                        oAuthLogout: t,
                        loginid: a,
                        is_logging_out: n
                    } = e, i = (null == a ? void 0 : a.includes("CR")) || (null == a ? void 0 : a.includes("MF"));
                    return (0, o.jsxs)("div", {
                        className: "",
                        children: [(0, o.jsx)(eA.T.TradersHubLink, {
                            href: J.xOw.traders_hub,
                            children: (0, A.NC)("Looking for CFD accounts? Go to Trader's Hub")
                        }), (0, o.jsx)(eJ, {}), (0, o.jsxs)("div", {
                            className: eR()("account-switcher-footer__actions", {
                                "account-switcher-footer__actions--hide-manage-button": !i
                            }),
                            children: [i && (0, o.jsx)(eu.Z, {
                                id: "manage-button",
                                className: "manage-button",
                                onClick: () => location.replace("https://app.deriv.com"),
                                children: (0, o.jsx)(A.Xx, {
                                    i18n_default_text: "Manage accounts"
                                })
                            }), (0, o.jsx)(eA.T.Footer, {
                                children: n ? (0, o.jsx)("div", {
                                    className: "deriv-account-switcher__logout--loader",
                                    children: (0, o.jsx)(eV, {
                                        width: "120px",
                                        height: "12px"
                                    })
                                }) : (0, o.jsxs)("div", {
                                    id: "dt_logout_button",
                                    className: "deriv-account-switcher__logout",
                                    onClick: t,
                                    children: [(0, o.jsx)(G.Z, {
                                        color: "prominent",
                                        size: "xs",
                                        align: "left",
                                        className: "deriv-account-switcher__logout-text",
                                        children: (0, A.NC)("Logout")
                                    }), (0, o.jsx)(eB.Z, {
                                        iconSize: "xs",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                eX = e => {
                    let {
                        tabs_labels: t,
                        modifiedVRTCRAccountList: a,
                        switchAccount: n,
                        isVirtual: s,
                        activeLoginId: l,
                        oAuthLogout: r,
                        is_logging_out: c
                    } = e;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(eA.T.AccountsPanel, {
                            isOpen: !0,
                            title: (0, A.NC)("Deriv account"),
                            className: "account-switcher-panel",
                            children: a && a.map(e => (0, o.jsx)("span", {
                                className: (0, i.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, o.jsx)(eA.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && n(e.loginid)
                                    },
                                    onResetBalance: s && l === e.loginid && 1e4 !== eU(e.balance) ? () => {
                                        var e;
                                        null === eM.api_base || void 0 === eM.api_base || null === (e = eM.api_base.api) || void 0 === e || e.send({
                                            topup_virtual: 1
                                        })
                                    } : void 0
                                })
                            }, e.loginid))
                        }, t.demo.toLowerCase()), (0, o.jsx)(eJ, {}), (0, o.jsx)(eG, {
                            loginid: l,
                            oAuthLogout: r,
                            is_logging_out: c
                        })]
                    })
                },
                eq = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: a,
                        modifiedMFAccountList: n,
                        switchAccount: s,
                        is_low_risk_country: l
                    } = e, r = (null == n ? void 0 : n.length) !== 0 && l ? (0, A.NC)("Eu Deriv accounts") : (0, A.NC)("Deriv accounts");
                    return (0, o.jsx)(eA.T.AccountsPanel, {
                        isOpen: !0,
                        title: r,
                        className: "account-switcher-panel",
                        children: n.map(e => (e.currencyLabel = (0, A.NC)("Multipliers"), (0, o.jsx)("span", {
                            className: (0, i.Z)("account-switcher__item", {
                                "account-switcher__item--disabled": e.is_disabled
                            }),
                            children: (0, o.jsx)(eA.T.AccountsItem, {
                                account: e,
                                onSelectAccount: () => {
                                    !e.is_disabled && s(e.loginid)
                                }
                            })
                        }, e.loginid)))
                    }, t ? a.real.toLowerCase() : a.demo.toLowerCase())
                };
            var eW = a("11527");
            let eY = e => {
                    var t, a;
                    let {
                        isVirtual: n,
                        tabs_labels: i,
                        is_low_risk_country: s
                    } = e;
                    return s ? (0, o.jsx)(eA.T.AccountsPanel, {
                        isOpen: !0,
                        title: (0, A.NC)("Non-Eu Deriv account"),
                        className: "account-switcher-panel",
                        children: (0, o.jsxs)("div", {
                            className: "account-switcher-panel__no-eu-accounts",
                            children: [(0, o.jsx)(eA.T.AccountsItem, {
                                account: eH,
                                onSelectAccount: () => {}
                            }), (0, o.jsx)(eJ, {}), (0, o.jsx)(eW.z, {
                                id: "add-button",
                                className: "add-button",
                                onClick: () => location.replace(J.xOw.traders_hub),
                                children: (0, o.jsx)(A.Xx, {
                                    i18n_default_text: "Add"
                                })
                            })]
                        })
                    }, n ? null == i ? void 0 : null === (a = i.real) || void 0 === a ? void 0 : a.toLowerCase() : null == i ? void 0 : null === (t = i.demo) || void 0 === t ? void 0 : t.toLowerCase()) : null
                },
                eK = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: a,
                        modifiedCRAccountList: n,
                        modifiedMFAccountList: s,
                        is_low_risk_country: l,
                        switchAccount: r
                    } = e;
                    if (!l && n && (null == n ? void 0 : n.length) === 0) return null;
                    let c = (null == s ? void 0 : s.length) === 0 ? (0, A.NC)("Deriv accounts") : (0, A.NC)("Non-Eu Deriv account");
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(eA.T.AccountsPanel, {
                            isOpen: !0,
                            title: c,
                            className: "account-switcher-panel",
                            style: {
                                maxHeight: "220px"
                            },
                            children: n.map(e => (0, o.jsx)("span", {
                                className: (0, i.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, o.jsx)(eA.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && r(e.loginid)
                                    }
                                })
                            }, e.loginid))
                        }, t ? null == a ? void 0 : a.real.toLowerCase() : a.demo.toLowerCase())
                    })
                },
                e$ = e => {
                    let {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: a,
                        switchAccount: n,
                        isVirtual: i,
                        tabs_labels: s,
                        is_low_risk_country: l,
                        oAuthLogout: r,
                        loginid: c,
                        is_logging_out: d
                    } = e, h = t && (null == t ? void 0 : t.length) > 0, u = a && (null == a ? void 0 : a.length) > 0;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [h ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(eK, {
                                modifiedCRAccountList: t,
                                modifiedMFAccountList: a,
                                switchAccount: n,
                                isVirtual: i,
                                tabs_labels: s,
                                is_low_risk_country: l
                            }), (0, o.jsx)(eJ, {})]
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(eY, {
                                is_low_risk_country: l,
                                isVirtual: i,
                                tabs_labels: s
                            }), (0, o.jsx)(eJ, {})]
                        }), u && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(eq, {
                                modifiedMFAccountList: a,
                                switchAccount: n,
                                isVirtual: i,
                                tabs_labels: s,
                                is_low_risk_country: l
                            }), (0, o.jsx)(eJ, {})]
                        }), (0, o.jsx)(eG, {
                            oAuthLogout: r,
                            loginid: c,
                            is_logging_out: d
                        })]
                    })
                };
            var eQ = a("17481");
            let e0 = (0, n.lazy)(() => a.e("932").then(a.bind(a, 67568))),
                e1 = {
                    demo: (0, A.NC)("Demo"),
                    real: (0, A.NC)("Real")
                },
                e6 = e => {
                    var t;
                    let {
                        isVirtual: a,
                        modifiedCRAccountList: i,
                        modifiedMFAccountList: s,
                        modifiedVRTCRAccountList: l,
                        switchAccount: c,
                        activeLoginId: d,
                        client: h
                    } = e, {
                        oAuthLogout: u
                    } = (0, r.q)({
                        handleLogout: async () => h.logout(),
                        client: h
                    }), m = (0, eQ.Gz)().includes((null === (t = h.account_settings) || void 0 === t ? void 0 : t.country_code) ?? ""), p = !!a;
                    return ((0, n.useEffect)(() => {
                        var e, t;
                        let o = null === (e = document.getElementsByClassName("account-switcher-panel")) || void 0 === e ? void 0 : e[0];
                        !a && o && (o.style.maxHeight = "70vh", null === (t = (0, eE._)(".deriv-accordion__content", o)) || void 0 === t || t.then(e => {
                            e && (e.style.maxHeight = "70vh")
                        }))
                    }, [a]), p) ? (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(eX, {
                            modifiedVRTCRAccountList: l,
                            switchAccount: c,
                            activeLoginId: d,
                            isVirtual: p,
                            tabs_labels: e1,
                            oAuthLogout: u,
                            is_logging_out: h.is_logging_out
                        })
                    }) : (0, o.jsx)(e$, {
                        modifiedCRAccountList: i,
                        modifiedMFAccountList: s,
                        switchAccount: c,
                        isVirtual: p,
                        tabs_labels: e1,
                        is_low_risk_country: m,
                        oAuthLogout: u,
                        loginid: d,
                        is_logging_out: h.is_logging_out
                    })
                },
                e2 = (0, R.Pi)(e => {
                    var t, a;
                    let {
                        activeAccount: i
                    } = e, {
                        isDesktop: s
                    } = (0, d.F)(), {
                        accountList: l
                    } = (0, ew.T)(), {
                        ui: r,
                        run_panel: c,
                        client: h
                    } = (0, el.oR)(), {
                        accounts: u
                    } = h, {
                        toggleAccountsDialog: m,
                        is_accounts_switcher_on: p,
                        account_switcher_disabled_message: w
                    } = r, {
                        is_stop_button_visible: g
                    } = c, x = Object.keys(u).some(e => "wallet" === u[e].account_category), b = (0, n.useMemo)(() => null == l ? void 0 : l.map(e => {
                        var t, a, n, s, l, r, c, d;
                        return { ...e,
                            balance: (0, J.oC5)((null === (s = h.all_accounts_balance) || void 0 === s ? void 0 : null === (n = s.accounts) || void 0 === n ? void 0 : null === (a = n[null == e ? void 0 : e.loginid]) || void 0 === a ? void 0 : null === (t = a.balance) || void 0 === t ? void 0 : t.toFixed((0, J.i4S)(e.currency))) ?? "0"),
                            currencyLabel: (null == e ? void 0 : e.is_virtual) ? e1.demo : (null === (c = h.website_status) || void 0 === c ? void 0 : null === (r = c.currencies_config) || void 0 === r ? void 0 : null === (l = r[null == e ? void 0 : e.currency]) || void 0 === l ? void 0 : l.name) ?? (null == e ? void 0 : e.currency),
                            icon: (0, o.jsx)(ep, {
                                currency: null == e ? void 0 : null === (d = e.currency) || void 0 === d ? void 0 : d.toLowerCase(),
                                isVirtual: !!(null == e ? void 0 : e.is_virtual)
                            }),
                            isVirtual: !!(null == e ? void 0 : e.is_virtual),
                            isActive: (null == e ? void 0 : e.loginid) === (null == i ? void 0 : i.loginid)
                        }
                    }), [l, null === (t = h.all_accounts_balance) || void 0 === t ? void 0 : t.accounts, null === (a = h.website_status) || void 0 === a ? void 0 : a.currencies_config, null == i ? void 0 : i.loginid]), f = (0, n.useMemo)(() => (null == b ? void 0 : b.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("CR")
                    })) ?? [], [b]), j = (0, n.useMemo)(() => (null == b ? void 0 : b.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("MF")
                    })) ?? [], [b]), v = (0, n.useMemo)(() => (null == b ? void 0 : b.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("VRT")
                    })) ?? [], [b]), k = async e => {
                        if (e.toString() === (null == i ? void 0 : i.loginid)) return;
                        let t = JSON.parse(localStorage.getItem("accountsList") ?? "{}")[e];
                        if (!t) return;
                        localStorage.setItem("authToken", t), localStorage.setItem("active_loginid", e.toString()), await (null === eM.api_base || void 0 === eM.api_base ? void 0 : eM.api_base.init(!0));
                        let a = new URLSearchParams(window.location.search),
                            o = b.find(t => t.loginid === e.toString());
                        if (!o) return;
                        let n = o.is_virtual ? "demo" : o.currency;
                        a.set("account", n), window.history.pushState({}, "", `${window.location.pathname}?${a.toString()}`)
                    };
                    return i && (x ? (0, o.jsx)(n.Suspense, {
                        fallback: (0, o.jsx)(eT.a, {}),
                        children: (0, o.jsx)(e0, {
                            is_dialog_on: p,
                            toggleDialog: m
                        })
                    }) : (0, o.jsx)(eF.Z, {
                        className: "run-panel__info",
                        classNameBubble: "run-panel__info--bubble",
                        alignment: "bottom",
                        message: w,
                        zIndex: "5",
                        children: (0, o.jsxs)(eA.T, {
                            activeAccount: i,
                            isDisabled: g,
                            tabsLabels: e1,
                            modalContentStyle: {
                                content: {
                                    top: s ? "30%" : "50%",
                                    borderRadius: "10px"
                                }
                            },
                            children: [(0, o.jsx)(eA.T.Tab, {
                                title: e1.real,
                                children: (0, o.jsx)(e6, {
                                    modifiedCRAccountList: f,
                                    modifiedMFAccountList: j,
                                    switchAccount: k,
                                    activeLoginId: null == i ? void 0 : i.loginid,
                                    client: h
                                })
                            }), (0, o.jsx)(eA.T.Tab, {
                                title: e1.demo,
                                children: (0, o.jsx)(e6, {
                                    modifiedVRTCRAccountList: v,
                                    switchAccount: k,
                                    isVirtual: !0,
                                    activeLoginId: null == i ? void 0 : i.loginid,
                                    client: h
                                })
                            })]
                        })
                    }))
                });
            var e9 = a("39523"),
                e3 = a("38051"),
                e7 = a("39590"),
                e4 = a("14393"),
                e8 = a("34215"),
                e5 = a("44741");
            e4.Z, (0, A.NC)("A whole new trading experience on a powerful yet easy to use platform."), J.xOw.trade, e4.Z, e8.Z, (0, A.NC)("Automated trading at your fingertips. No coding needed."), J.xOw.bot, e8.Z, e5.Z, (0, A.NC)("Trade the world’s markets with our popular user-friendly platform."), J.xOw.smarttrader, e5.Z;
            let te = {
                    as: "a",
                    href: J.xOw.traders_hub,
                    icon: (0, o.jsx)(e3.Z, {
                        iconSize: "xs"
                    }),
                    label: "Trader's Hub"
                },
                tt = [{
                    as: "a",
                    href: J.xOw.reports,
                    icon: (0, o.jsx)(e7.Z, {
                        iconSize: "xs"
                    }),
                    label: (0, A.NC)("Reports")
                }],
                ta = (0, R.Pi)(() => {
                    let {
                        localize: e
                    } = (0, A.T_)(), {
                        isDesktop: t
                    } = (0, d.F)(), a = (0, el.oR)();
                    if (!a) return null;
                    let {
                        is_logged_in: n
                    } = a.client;
                    return (0, o.jsx)(o.Fragment, {
                        children: n && (t ? tt.map(t => {
                            let {
                                as: a,
                                href: n,
                                icon: i,
                                label: s
                            } = t;
                            return (0, o.jsx)(e9.s, {
                                as: a,
                                className: "app-header__menu",
                                href: n,
                                leftComponent: i,
                                children: (0, o.jsx)(ec.x, {
                                    children: e(s)
                                })
                            }, s)
                        }) : (0, o.jsx)(e9.s, {
                            as: tt["1"].as,
                            className: "flex gap-2 p-5",
                            href: tt["1"].href,
                            leftComponent: tt["1"].icon,
                            children: (0, o.jsx)(ec.x, {
                                children: e(tt["1"].label)
                            })
                        }, tt["1"].label))
                    })
                });
            ta.TradershubLink = () => (0, o.jsx)(e9.s, {
                as: "a",
                className: "app-header__menu",
                href: te.href,
                leftComponent: te.icon,
                children: (0, o.jsx)(ec.x, {
                    children: te.label
                })
            }, te.label);
            var to = a("17934"),
                tn = a("41301"),
                ti = a("68782");
            let ts = e => {
                let {
                    buttonText: t,
                    onClick: a
                } = e, {
                    isDesktop: n
                } = (0, d.F)();
                return (0, o.jsxs)("button", {
                    className: "flex items-center w-full pt-8 p-[3.2rem]",
                    onClick: a,
                    children: [(0, o.jsx)(ti.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    }), (0, o.jsx)(ec.x, {
                        className: "ml-[1.6rem]",
                        size: n ? "md" : "lg",
                        weight: "bold",
                        children: t
                    })]
                })
            };
            var tl = a("68534"),
                tr = a("93217");
            let tc = e => {
                    let {
                        localize: t
                    } = (0, A.T_)(), {
                        is_dark_mode_on: a,
                        toggleTheme: n
                    } = (0, V.Z)(), {
                        oAuthLogout: i
                    } = (0, r.q)({
                        handleLogout: async () => null == e ? void 0 : e.logout(),
                        client: e
                    });
                    return {
                        config: [
                            [{
                                as: "button",
                                label: t("Dark theme"),
                                LeftComponent: tl.Z,
                                RightComponent: (0, o.jsx)(tr.Z, {
                                    value: a,
                                    onChange: n
                                })
                            }], (null == e ? void 0 : e.is_logged_in) ? [{
                                as: "button",
                                label: t("Log out"),
                                LeftComponent: eB.Z,
                                onClick: i,
                                removeBorderBottom: !0
                            }] : []
                        ]
                    }
                },
                td = (0, R.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, d.F)(), {
                        client: t
                    } = (0, el.oR)(), a = e ? "sm" : "md", {
                        config: n
                    } = tc(t);
                    return (0, o.jsx)("div", {
                        className: "mobile-menu__content",
                        children: (0, o.jsx)("div", {
                            className: "mobile-menu__content__items",
                            children: n.map((e, t) => {
                                let n = e.find(e => {
                                    let {
                                        removeBorderBottom: t
                                    } = e;
                                    return t
                                });
                                return (0, o.jsx)("div", {
                                    className: (0, i.Z)("mobile-menu__content__items--padding", {
                                        "mobile-menu__content__items--bottom-border": !n
                                    }),
                                    "data-testid": "dt_menu_item",
                                    children: e.map(e => {
                                        let {
                                            LeftComponent: t,
                                            RightComponent: n,
                                            as: s,
                                            href: l,
                                            label: r,
                                            onClick: c,
                                            target: d
                                        } = e, h = "DollarPrinterHub.com" === r;
                                        return "a" === s ? (0, o.jsx)(e9.s, {
                                            as: "a",
                                            className: (0, i.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !h
                                            }),
                                            disableHover: !0,
                                            href: l,
                                            leftComponent: (0, o.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                height: 16,
                                                width: 16
                                            }),
                                            target: d,
                                            children: (0, o.jsx)(ec.x, {
                                                size: a,
                                                children: r
                                            })
                                        }, r) : (0, o.jsx)(e9.s, {
                                            as: "button",
                                            className: (0, i.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !h
                                            }),
                                            disableHover: !0,
                                            leftComponent: (0, o.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                iconSize: "xs"
                                            }),
                                            onClick: c,
                                            rightComponent: n,
                                            children: (0, o.jsx)(ec.x, {
                                                size: a,
                                                children: r
                                            })
                                        }, r)
                                    })
                                }, t)
                            })
                        })
                    })
                }),
                th = e => {
                    let {
                        hideLanguageSetting: t,
                        openLanguageSetting: a
                    } = e, {
                        currentLang: i,
                        localize: s
                    } = (0, A.T_)(), {
                        isDesktop: l
                    } = (0, d.F)(), r = (0, n.useMemo)(() => {
                        var e;
                        return null === (e = T.find(e => {
                            let {
                                code: t
                            } = e;
                            return t === i
                        })) || void 0 === e ? void 0 : e.placeholderIconInMobile
                    }, [i]);
                    return (0, o.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0, o.jsx)(ec.x, {
                            size: l ? "md" : "lg",
                            weight: "bold",
                            children: s("Menu")
                        }), !t && (0, o.jsxs)("button", {
                            className: "mobile-menu__header__language items-center",
                            onClick: a,
                            children: [r, (0, o.jsx)(ec.x, {
                                className: "ml-[0.4rem]",
                                size: l ? "xs" : "sm",
                                weight: "bold",
                                children: i
                            })]
                        })]
                    })
                };
            var tu = a("89816");
            let tm = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, o.jsx)("button", {
                        onClick: t,
                        children: (0, o.jsx)(tu.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)"
                        })
                    })
                },
                tp = {
                    "jeffhub.binarytool.site": {
                        logo: "/jeffhub.jpeg",
                        name: "JeffHub",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VawwKhVFCCoRpmFH3j23",
                            instagram: "https://instagram.com/jeffhub-instagram",
                            tiktok: "https://www.tiktok.com/@jeff.hub.traders"
                        }
                    },
                    "www.smartdollarhub.site": {
                        logo: "/gamer.jpeg",
                        name: "Dollar Hub",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/LFzX7IJxVoN5Sh5gm7HwcD",
                            telegram: "https://t.me/gamerstradingtools",
                            tiktok: "https://www.tiktok.com/@gamerbrayoh"
                        }
                    },
                    "www.marketsniper.site": {
                        name: "Market Sniper",
                        social: {}
                    },
                    "www.tickflow.site": {
                        name: "Tickflow",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/GZjzv0nTFzmGrCoS7vhS1s?mode=ems_copy_t",
                            telegram: "https://t.me/tickflo",
                            tiktok: "https://www.tiktok.com/@legoo.site"
                        }
                    },
                    "mrdollars.tickflow.site": {
                        name: "Tickflow",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/GZjzv0nTFzmGrCoS7vhS1s?mode=ems_copy_t",
                            telegram: "https://t.me/tickflo",
                            tiktok: "https://www.tiktok.com/@legoo.site"
                        }
                    },
                    "bot.frankfxx.com": {
                        name: "Frank FX",
                        social: {
                            youtube: "https://www.youtube.com/@frankfx4724",
                            telegram: "https://www.instagram.com/frankfx120"
                        }
                    },
                    "app.sammykhizz.site": {
                        name: "Sammykhizz",
                        social: {
                            telegram: "https://t.me/smartkhizz"
                        }
                    },
                    "www.dtraderscore.com": {
                        name: "Dtraderscore",
                        social: {}
                    },
                    "www.derexhub.site": {
                        logo: "/derex.jpeg",
                        name: "Derexhub",
                        social: {
                            whatsapp: "https://wa.me/254704258754",
                            tiktok: "https://www.tiktok.com/@darictrader"
                        }
                    },
                    "www.primetrades.net": {
                        logo: "/prime.png",
                        name: "Primetrades",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/Fubz7vk2yoeIS7fkXuh8Ph",
                            whatsapp1: "https://chat.whatsapp.com/CvklZRDsVknGYeJWZM9f9z",
                            telegram: "https://t.me/pt_005",
                            tiktok: "https://www.tiktok.com/@primetrades.net.bot1"
                        }
                    },
                    "forexalmighty.vercel.app": {
                        name: "Forex Almighty",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/JLJL9FV2Sm4FZkvGiahVqa",
                            telegram: "https://t.me/derivhome",
                            tiktok: "https://www.tiktok.com/@forex_almighty",
                            youtube: "https://www.youtube.com/@DIGITALWORLD61",
                            instagram: "https://www.instagram.com/alm_forex?igsh=MTBoYmlxaXN2ejl6dg%3D%3D&utm_source=qr"
                        }
                    },
                    "www.kingsfx.site": {
                        name: "Kings FX",
                        social: {
                            telegram: "https://t.me/+SwZUsH-5O7kwZDRk",
                            tiktok: "https://www.tiktok.com/@simonwills254?_t=ZM-8w9K3UHnerv&_r=1"
                        }
                    },
                    "www.kashytrader.site": {
                        name: "Kashy Trader",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029Vb6Huq0H5JM0wikCrM3Q",
                            telegram: "https://t.me/+F9MAhse_I-AxM2Vk",
                            tiktok: "https://www.tiktok.com/@kashytrader"
                        }
                    },
                    "www.marketscalper.site": {
                        name: "Marketscalper",
                        social: {
                            tiktok: "https://www.tiktok.com/@skippertrader.site",
                            instagram: "https://www.instagram.com/mwangi_mwangi_345"
                        }
                    },
                    "www.fametraders.site": {
                        name: "Fametraders",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/IlYLp3JZjc3BFDutyxklRi",
                            telegram: "https://t.me/+C-uyxrByLzo5YzFk"
                        }
                    },
                    "random.binarytool.site": {
                        logo: "/random.jpeg",
                        name: "MR Random",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/LWJ7RqrNcU7AaMFAs8g76S",
                            telegram: "https://t.me/randomhubtools",
                            tiktok: "tiktok.com/@random.binarytool"
                        }
                    },
                    "siralex.binarytool.site": {
                        logo: "/alex.jpeg",
                        name: "Sir Alex",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/Bmrvj3by3vDJpuzvX4eEvz",
                            telegram: "https://t.me/+ER8TG4VRkTUxODM0",
                            tiktok: "https://www.tiktok.com/@sir.alex.mathenge_backup"
                        }
                    },
                    "www.binaryedge.site": {
                        name: "Binary Edge",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/JjWtqcE43OH75EfwFjaDFe",
                            telegram: "https://t.me/+nEA3cZfEGTJhMjg8",
                            tiktok: "https://tiktok.com/@binaryedge.site"
                        }
                    },
                    "www.bmbtraders.site": {
                        logo: "/bmb.jpeg",
                        name: "BMB Traders",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/EU9uiFZ7KRQ7dOc4nqaiyv",
                            telegram: "https://t.me/derivsignalsbmbtraders",
                            youtube: "https://youtube.com/@bmbtraderssite",
                            instagram: "https://www.instagram.com/bmb_traders_ke",
                            tiktok: "https://www.tiktok.com/@bmbtrader.site"
                        }
                    },
                    "www.ikiihub.site": {
                        name: "Ikii Hub",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VaWuMaXJENyAlkol1D14"
                        }
                    },
                    "dbot.dollarprinterhub.site": {
                        name: "D-Traders",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VbB3YovCxoB0aLFFPm0A",
                            tiktok: "https://www.tiktok.com/@www.dtraters.site?_t=ZM-8yYFBf27nUe&_r=1"
                        }
                    },
                    "www.succeedtool.com": {
                        name: "Succeedtool",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VbBUfWM3wtb62uDXzw27",
                            telegram: "https://t.me/suedfx"
                        }
                    },
                    "www.primeanalyser.com": {
                        name: "Prime Analyser",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029Vb6r4SgLY6d75plBNZ3i",
                            telegram: "https://t.me/primeanalyser"
                        }
                    },
                    "spallis.copytradingsite.com": {
                        name: "spallis"
                    },
                    "states.copytradingsite.com": {
                        name: "states"
                    },
                    "dfire.copytradingsite.com": {
                        name: "dfire"
                    },
                    "jose.copytradingsite.com": {
                        name: "jose"
                    },
                    "spongebobfx.copytradingsite.com": {
                        name: "Spongebobfx"
                    },
                    "tangi.copytradingsite.com": {
                        name: "tangi"
                    },
                    "brandy.copytradingsite.com": {
                        name: "brandy"
                    },
                    "www.binaryflipper.site": {
                        name: "Binary Flipper",
                        social: {
                            whatsapp: "https://chat.whatsapp.com/Je07192834567890",
                            telegram: "https://t.me/binaryflipper",
                            youtube: "https://youtube.com/@binaryflipper",
                            instagram: "https://www.instagram.com/binaryflipper",
                            tiktok: "https://www.tiktok.com/@binaryflipper"
                        }
                    },
                    default: {
                        logo: "/binary_logo.svg",
                        name: "DollarPrinterHub",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VaDbybILo4heuWEGso3B",
                            telegram: "https://t.me/dollarprinterhub",
                            youtube: "https://www.youtube.com/@dollarprinterhub",
                            instagram: "https://www.instagram.com/dollarprinterhubite/",
                            tiktok: "https://www.tiktok.com/@dollarprinterhub",
                            facebook: "https://www.facebook.com/profile.php?id=61559570918487"
                        }
                    }
                },
                tw = () => {
                    let [e, t] = (0, n.useState)(!1), [a, i] = (0, n.useState)(!1), {
                        currentLang: s = "EN",
                        localize: l,
                        switchLanguage: r
                    } = (0, A.T_)(), {
                        hideModal: c,
                        isModalOpenFor: h,
                        showModal: u
                    } = m(), {
                        isDesktop: w
                    } = (0, d.F)(), g = () => t(!1), x = !!h("MobileLanguagesDrawer"), b = () => {
                        window.location.reload()
                    }, {
                        social: f
                    } = tp[window.location.hostname] || tp.default;
                    return w ? null : (0, o.jsxs)("div", {
                        className: "mobile-menu",
                        children: [(0, o.jsxs)("div", {
                            className: "mobile-menu__toggle",
                            children: [(0, o.jsx)(tm, {
                                onClick: () => t(!0)
                            }), (0, o.jsx)("div", {
                                className: "mobile-menu__social-icon",
                                onClick: () => i(!0),
                                children: (0, o.jsx)(ef.Kz1, {
                                    size: 25,
                                    style: {
                                        color: "#60b5ff"
                                    }
                                })
                            }), (0, o.jsx)("div", {
                                onClick: () => b(),
                                children: (0, o.jsx)(ef.e8N, {
                                    size: 20,
                                    style: {
                                        color: "#29dfc0"
                                    }
                                })
                            })]
                        }), a && (0, o.jsx)("div", {
                            className: "modal-overlay",
                            onClick: () => i(!1),
                            children: (0, o.jsxs)("div", {
                                className: "modal-content",
                                onClick: e => e.stopPropagation(),
                                children: [(0, o.jsx)("h3", {
                                    children: "Follow Us"
                                }), (0, o.jsxs)("ul", {
                                    className: "social-links-list",
                                    children: [f.whatsapp && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: f.whatsapp,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ej.Z, {}), " WhatsApp"]
                                        })
                                    }), [2, 3, 4, 5, 6].map(e => {
                                        let t = f[`whatsapp${e}`];
                                        return t ? (0, o.jsx)("li", {
                                            children: (0, o.jsxs)("a", {
                                                href: t,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, o.jsx)(ej.Z, {}), " WhatsApp Group ", e]
                                            })
                                        }, `whatsapp${e}`) : null
                                    }), f.telegram && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: f.telegram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ev.Z, {}), " Telegram"]
                                        })
                                    }), f.youtube && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: f.youtube,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ek.Z, {}), " Youtube"]
                                        })
                                    }), f.instagram && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: f.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(e_.Z, {}), " Instagram"]
                                        })
                                    }), f.tiktok && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: f.tiktok,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ey.Z, {}), " Tiktok"]
                                        })
                                    })]
                                }), (0, o.jsx)("button", {
                                    className: "modal-close-button",
                                    onClick: () => i(!1),
                                    children: "Close"
                                })]
                            })
                        }), (0, o.jsxs)(to.d, {
                            isOpen: e,
                            onCloseDrawer: g,
                            width: "29.5rem",
                            children: [(0, o.jsx)(to.d.Header, {
                                onCloseDrawer: g,
                                children: (0, o.jsx)(th, {
                                    hideLanguageSetting: x,
                                    openLanguageSetting: () => u("MobileLanguagesDrawer")
                                })
                            }), (0, o.jsx)(to.d.Content, {
                                children: x ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, o.jsx)(ts, {
                                            buttonText: l("Language"),
                                            onClick: c
                                        })
                                    }), (0, o.jsx)(tn.I, {
                                        isOpen: !0,
                                        languages: T,
                                        onClose: c,
                                        onLanguageSwitch: e => {
                                            r(e), window.location.replace(p()), window.location.reload()
                                        },
                                        selectedLanguage: s,
                                        wrapperClassName: "mobile-menu__language-drawer"
                                    })]
                                }) : (0, o.jsx)(td, {})
                            }), (0, o.jsxs)(to.d.Footer, {
                                className: "mobile-menu__footer",
                                children: [(0, o.jsx)(ed, {}), (0, o.jsx)(en, {})]
                            })]
                        })]
                    })
                },
                tg = (0, R.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, d.F)(), {
                        isAuthorizing: t,
                        activeLoginid: a
                    } = (0, ew.T)(), {
                        client: n
                    } = (0, el.oR)() ?? {}, {
                        data: s
                    } = eg({
                        allBalanceData: null == n ? void 0 : n.all_accounts_balance
                    }), {
                        isOAuth2Enabled: l
                    } = (0, r.q)();
                    return (0, o.jsxs)(ex.h, {
                        className: (0, i.Z)("app-header", {
                            "app-header--desktop": e,
                            "app-header--mobile": !e
                        }),
                        children: [(0, o.jsxs)(eb.i, {
                            variant: "left",
                            children: [(0, o.jsx)(eN, {}), (0, o.jsx)(tw, {}), e && (0, o.jsx)(ta, {})]
                        }), (0, o.jsx)(eb.i, {
                            variant: "right",
                            children: t ? (0, o.jsx)(eS, {
                                isLoggedIn: !0,
                                isMobile: !e,
                                speed: 3
                            }) : a ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(e2, {
                                    activeAccount: s
                                })
                            }) : (0, o.jsxs)("div", {
                                className: "auth-actions",
                                children: [(0, o.jsx)(eu.Z, {
                                    tertiary: !0,
                                    onClick: async () => {
                                        l ? await (0, c.P6)({
                                            redirectCallbackUri: `${window.location.origin}/callback`
                                        }) : window.location.replace((0, J.O2o)())
                                    },
                                    children: (0, o.jsx)(A.Xx, {
                                        i18n_default_text: "Log in"
                                    })
                                }), (0, o.jsx)(eu.Z, {
                                    primary: !0,
                                    onClick: () => {
                                        window.open(J.xOw.signup)
                                    },
                                    children: (0, o.jsx)(A.Xx, {
                                        i18n_default_text: "Sign up"
                                    })
                                })]
                            })
                        })]
                    })
                }),
                tx = e => {
                    let {
                        children: t
                    } = e, a = localStorage.getItem("theme") ?? "light", {
                        ui: i
                    } = (0, el.oR)() ?? {
                        ui: {
                            setDevice: () => {}
                        }
                    }, {
                        setDevice: s
                    } = i, {
                        isDesktop: l,
                        isMobile: r,
                        isTablet: c
                    } = (0, d.F)();
                    return (0, n.useEffect)(() => {
                        let e = document.querySelector("body");
                        e && ("light" === a ? (e.classList.remove("theme--dark"), e.classList.add("theme--light")) : (e.classList.remove("theme--light"), e.classList.add("theme--dark")))
                    }, [a]), (0, n.useEffect)(() => {
                        r ? s("mobile") : c ? s("tablet") : s("desktop")
                    }, [l, r, c, s]), (0, o.jsx)("div", {
                        className: "main-body",
                        children: t
                    })
                },
                tb = () => {
                    let {
                        isDesktop: e
                    } = (0, d.F)(), {
                        isOAuth2Enabled: t
                    } = (0, r.q)(), a = "/callback" === window.location.pathname, h = "true" === s.Z.get("logged_state"), u = window.location.pathname.includes("endpoint"), m = Object.keys(JSON.parse(localStorage.getItem("accountsList") ?? "{}")).length > 0;
                    return (0, n.useEffect)(() => {
                        h && !m && t && !u && !a && (0, c.P6)({
                            redirectCallbackUri: `${window.location.origin}/callback`
                        })
                    }, [h, m, t, u, a]), (0, o.jsxs)("div", {
                        className: (0, i.Z)("layout", {
                            responsive: e
                        }),
                        children: [!a && (0, o.jsx)(tg, {}), (0, o.jsx)(tx, {
                            children: (0, o.jsx)(l.j3, {})
                        }), !a && e && (0, o.jsx)(eh, {})]
                    })
                }
        },
        30394: function(e, t, a) {
            a.d(t, {
                Z: () => p
            });
            var o = a("85893"),
                n = a("67294"),
                i = a("63387"),
                s = a.n(i),
                l = a("82106"),
                r = a("86278"),
                c = a("14244"),
                d = a("26088"),
                h = a("92868"),
                u = a("2502"),
                m = a("45452");
            let p = e => {
                let {
                    alignment: t,
                    children: a,
                    className: i,
                    classNameBubble: p,
                    classNameTarget: w,
                    classNameTargetIcon: g,
                    counter: x,
                    disable_message_icon: b,
                    disable_target_icon: f,
                    has_error: j,
                    icon: v,
                    id: k,
                    is_open: _,
                    is_bubble_hover_enabled: y,
                    margin: C = 0,
                    message: I,
                    onBubbleClose: Z,
                    onBubbleOpen: N,
                    onClick: z = () => void 0,
                    relative_render: L = !1,
                    should_disable_pointer_events: S = !1,
                    should_show_cursor: F,
                    zIndex: M = "1",
                    data_testid: E,
                    arrow_styles: T
                } = e, A = n.useRef(), [D, R] = n.useState(void 0), [V, B] = n.useState(!1), {
                    isDesktop: O
                } = (0, u.F)(), [P, H] = (0, r.X)(null, !0), [U, J] = (0, r.m)(), G = n.useMemo(() => !O && void 0 === _, [O, _]);
                n.useEffect(() => {
                    A.current && R(A.current)
                }, [j]), n.useEffect(() => {
                    !H && G && B(!1)
                }, [H, G]);
                let X = () => {
                        N && N()
                    },
                    q = () => {
                        Z && Z()
                    },
                    W = s()(g, v),
                    Y = H && I && (!G || V);
                return (0, o.jsxs)("div", {
                    ref: P,
                    className: s()({
                        "dc-popover__wrapper": L
                    }),
                    onClick: e => {
                        z(e), G && B(!V)
                    },
                    "data-testid": "dt_popover_wrapper",
                    children: [L && (0, o.jsx)("div", {
                        className: "dc-popover__container",
                        style: {
                            zIndex: M
                        },
                        children: (0, o.jsx)("div", {
                            ref: A,
                            className: "dc-popover__container-relative",
                            "data-testid": "dt_popover_relative_container"
                        })
                    }), (D || !L) && (0, o.jsx)(l.Popover, {
                        isOpen: _ ?? (Y || y && J),
                        positions: [t],
                        padding: C + 8,
                        containerClassName: s()({
                            "react-tiny-popover-container--disabled-pointer-event": S,
                            "react-tiny-popover-cursor-option": F
                        }),
                        ...L ? {
                            parentElement: D,
                            contentLocation: e => {
                                let {
                                    childRect: a,
                                    popoverRect: o,
                                    nudgedLeft: n
                                } = e, i = document.body.clientWidth, s = a.right + (o.width - a.width / 2), l = 0, r = 0;
                                switch (t) {
                                    case "left":
                                        r = -1 * Math.abs((o.height > o.width ? n : o.width) + C), l = a.height > o.height ? (a.height - o.height) / 2 : -((o.height - a.height) / 2 * 1);
                                        break;
                                    case "right":
                                        r = o.width + C, l = a.height > o.height ? (a.height - o.height) / 2 : -((o.height - a.height) / 2 * 1);
                                        break;
                                    case "top":
                                        r = s > i ? -1 * Math.abs(s - i) : 0, l = -1 * Math.abs(o.height + C);
                                        break;
                                    case "bottom":
                                        r = s > i ? -1 * Math.abs(s - i) : 0, l = a.height + C
                                }
                                return {
                                    top: l,
                                    left: r
                                }
                            }
                        } : {
                            containerStyle: {
                                zIndex: M
                            }
                        },
                        content: e => {
                            let {
                                position: t,
                                childRect: a,
                                popoverRect: n
                            } = e;
                            return (0, o.jsx)(l.ArrowContainer, {
                                position: t,
                                childRect: a,
                                popoverRect: n,
                                arrowColor: j ? "var(--status-danger)" : "var(--general-active)",
                                arrowSize: 5,
                                arrowStyle: L ? {
                                    borderTop: "10px solid transparent",
                                    borderLeft: "10px solid transparent",
                                    borderRight: `10px solid ${j?"var(--status-danger)":"var(--general-active)"}`,
                                    transform: "rotate(315deg)",
                                    right: "0px",
                                    top: "5px",
                                    height: "10px",
                                    margin: "auto",
                                    bottom: "0px"
                                } : { ...T
                                },
                                children: (0, o.jsxs)("div", {
                                    id: k,
                                    onMouseEnter: X,
                                    onMouseLeave: q,
                                    className: s()(p, "dc-popover__bubble", {
                                        "dc-popover__bubble--error": j
                                    }),
                                    ref: U,
                                    children: [!b && "info" === v && (0, o.jsx)("i", {
                                        className: "dc-popover__bubble__icon",
                                        children: (0, o.jsx)(c.Z, {})
                                    }), j && (0, o.jsx)(m.Z, {
                                        size: "xxs",
                                        color: "colored-background",
                                        children: I
                                    }) || (0, o.jsx)(m.Z, {
                                        lineHeight: "md",
                                        size: "xxs",
                                        className: "dc-popover__bubble__text",
                                        children: I
                                    })]
                                })
                            })
                        },
                        children: (0, o.jsx)("div", {
                            "data-testid": E,
                            className: s()("dc-popover", i),
                            id: k,
                            children: (0, o.jsxs)("div", {
                                className: s()(w, "dc-popover__target"),
                                children: [!f && (0, o.jsxs)("i", {
                                    className: I ? "dc-popover__target__icon" : "dc-popover__target__icon--disabled",
                                    children: ["info" === v && (0, o.jsx)(c.Z, {
                                        className: W
                                    }), "question" === v && (0, o.jsx)(h.Z, {
                                        className: W
                                    }), "dot" === v && (0, o.jsx)(d.Z, {
                                        className: W
                                    }), "counter" === v && (0, o.jsx)("span", {
                                        className: W,
                                        children: x
                                    })]
                                }), a]
                            })
                        })
                    })]
                })
            }
        },
        86278: function(e, t, a) {
            a.d(t, {
                X: function() {
                    return n
                },
                m: function() {
                    return i
                }
            });
            var o = a(67294);
            let n = (e, t) => {
                    let [a, n] = o.useState(!1), i = o.useRef(null), s = e || i, l = () => n(!0), r = () => n(!1);
                    return o.useEffect(() => {
                        let e = s.current;
                        if (e) return t ? (e.addEventListener("mouseenter", l), e.addEventListener("mouseleave", r)) : (e.addEventListener("mouseover", l), e.addEventListener("mouseout", r)), () => {
                            t ? (e.removeEventListener("mouseenter", l), e.removeEventListener("mouseleave", r)) : (e.removeEventListener("mouseover", l), e.removeEventListener("mouseout", r))
                        }
                    }, [s, t]), [s, a]
                },
                i = () => {
                    let [e, t] = o.useState(!1), a = o.useCallback(() => t(!0), []), n = o.useCallback(() => t(!1), []), i = o.useRef(null);
                    return [o.useCallback(e => {
                        i.current && (i.current.removeEventListener("mouseover", a), i.current.removeEventListener("mouseout", n)), i.current = e, i.current && (i.current.addEventListener("mouseover", a), i.current.addEventListener("mouseout", n))
                    }, [a, n]), e]
                }
        },
        83257: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var o = a(67294),
                n = a(83274);
            let i = () => {
                let {
                    ui: e
                } = (0, n.oR)() ?? {
                    ui: {
                        setDarkMode: () => {},
                        is_dark_mode_on: !1
                    }
                }, {
                    setDarkMode: t,
                    is_dark_mode_on: a
                } = e;
                return {
                    toggleTheme: (0, o.useCallback)(() => {
                        let e = document.querySelector("body");
                        e && (e.classList.contains("theme--dark") ? (localStorage.setItem("theme", "light"), e.classList.remove("theme--dark"), e.classList.add("theme--light"), t(!1)) : (localStorage.setItem("theme", "dark"), e.classList.remove("theme--light"), e.classList.add("theme--dark"), t(!0)))
                    }, [t]),
                    is_dark_mode_on: a,
                    setDarkMode: t
                }
            }
        }
    }
]);