(function(e) {
    e.fn.bloxhover = function(t) {
        var n = e.extend({}, e.fn.bloxhover.defaults, t);
        if (e.easing && e.easing.easeInOutQuad) {
            var r = true
        } else {
            var r = false
        }
        var i = function(t, i, s) {
            var o = i.height() * i.width() / n.sliceCount;
            var u = Math.ceil(Math.sqrt(o));
            var a = 0;
            var f = Math.ceil(i.width() / u);
            var l = 0;
            var c = Math.ceil(i.height() / u);
            var h = f * c;
            var p = [];
            for (var d = 0; d < h; d++) {
                p[d] = d
            }
            p.sort(function() {
                return Math.random() - .5
            });
            while (l < c) {
                while (a < f) {
                    var v = a * u;
                    var m = l * u;
                    e("<div/>", {
                        "class": "bloxhoverSlice",
                        style: "position: absolute; z-index: 2; display: none; top: " + m + "px; height: " + u + "px; left: " + v + "px; background: " + n.color + ";"
                    }).appendTo(t);
                    a++
                }
                a = 0;
                l++
            }
            var g;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                var i = e(this);
                t.stop().fadeOut(0);
                t.each(function(t) {
                    var s = e(".bloxhoverSlice", i).eq(p[t]);
                    g = setTimeout(function() {
                        if (r && g)
                            s.fadeIn(n.duration, "easeInOutCubic");
                        else if (g)
                            s.fadeIn(n.duration)
                        }, t * n.delay)
                    });
                var o = n.duration + (n.sliceCount - 1) * n.delay / 2;
                s.stop().fadeIn(o)
                }, function() {
                clearTimeout(g);
                g = null;
                e(".bloxhoverSlice", this).stop().fadeOut(n.duration);
                s.stop().fadeOut(n.duration)
                })
            };
        var s = function(t, i) {
            var s = i.height() * i.width() / n.sliceCount;
            var o = Math.ceil(Math.sqrt(s));
            var u = 0;
            var a = Math.ceil(i.width() / o);
            var f = 0;
            var l = Math.ceil(i.height() / o);
            var c = a * l;
            var h = [];
            for (var p = 0; p < c; p++) {
                h[p] = p
            }
            h.sort(function() {
                return Math.random() - .5
            });
            while (f < l) {
                while (u < a) {
                    var d = u * o;
                    var v = f * o;
                    e("<div/>", {
                        "class": "bloxhoverSlice",
                        style: "position: absolute; z-index: 2; top: " + v + "px; height: " + o + "px;  left: " + d + "px; background: " + n.color + ";"
                    }).appendTo(t);
                    u++
                }
                u = 0;
                f++
            }
            var m;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                var i = e(this);
                t.stop().fadeIn(0);
                t.each(function(t) {
                    var s = e(".bloxhoverSlice", i).eq(h[t]);
                    m = setTimeout(function() {
                        if (r && m)
                            s.fadeOut(n.duration, "easeInOutCubic");
                        else if (m)
                            s.fadeOut(n.duration)
                        }, t * n.delay)
                    })
                }, function() {
                clearTimeout(m);
                m = null;
                e(".bloxhoverSlice", this).stop().fadeIn(n.duration)
                })
            };
        var o = function(t, i, s) {
            var o = Math.ceil(100 / n.sliceCount);
            var u = i.height();
            var a = 0;
            while (a < n.sliceCount) {
                var f = a * o;
                e("<div/>", {
                    "class": "bloxhoverSlice",
                    style: "position: absolute; z-index: 2; top: -" + u + "px; height: " + u + "px;  left: " + f + "%; background: " + n.color + ";"
                }).appendTo(t);
                a++
            }
            var l;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                t.stop().css({
                    top: "-" + u + "px"
                }).fadeIn(0);
                t.each(function(t) {
                    var i = e(this);
                    l = setTimeout(function() {
                        if (r && l)
                            i.animate({
                            top: "0"
                        }, n.duration, "easeInOutCubic");
                        else if (l)
                            i.animate({
                            top: "0"
                        }, n.duration)
                        }, t * n.delay)
                    });
                var i = n.duration + (n.sliceCount - 1) * n.delay / 2;
                s.stop().fadeIn(i)
                }, function() {
                clearTimeout(l);
                l = null;
                e(".bloxhoverSlice", this).stop().fadeOut(n.duration);
                s.stop().fadeOut(n.duration)
                })
            };
        var u = function(t, i) {
            var s = Math.ceil(100 / n.sliceCount);
            var o = i.height();
            var u = 0;
            while (u < n.sliceCount) {
                var a = u * s;
                e("<div/>", {
                    "class": "bloxhoverSlice",
                    style: "position: absolute; z-index: 2; top: 0px; height: " + o + "px; left: " + a + "%; background: " + n.color + ";"
                }).appendTo(t);
                u++
            }
            var f;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                t.stop().css({
                    top: "0px"
                }).fadeIn(0);
                var i = 0;
                t.each(function(t) {
                    var s = e(this);
                    f = setTimeout(function() {
                        console.log(i);
                        i++;
                        if (r && f)
                            s.animate({
                            top: "-" + o + "px"
                        }, n.duration, "easeInOutCubic");
                        else if (f)
                            s.animate({
                            top: "-" + o + "px"
                        }, n.duration)
                        }, t * n.delay)
                    })
                }, function() {
                clearTimeout(f);
                f = null;
                e(".bloxhoverSlice", this).dequeue().stop().css({
                    top: "0px"
                }).fadeIn(0)
                })
            };
        var a = function(t, i, s) {
            var o = Math.ceil(100 / n.sliceCount);
            var u = i.height();
            var a = 0;
            while (a < n.sliceCount) {
                var f = a * o;
                if (a % 2 === 0) {
                    e("<div/>", {
                        "class": "bloxhoverSlice bloxhoverSliceTop",
                        style: "position: absolute; z-index: 2; top: -" + u + "px; height: " + u + "px;  left: " + f + "%; background: " + n.color + ";"
                    }).appendTo(t)
                    } else {
                    e("<div/>", {
                        "class": "bloxhoverSlice bloxhoverSliceBot",
                        style: "position: absolute; z-index: 2; top:" + u + "px; height: " + u + "px; left: " + f + "%; background: " + n.color + ";"
                    }).appendTo(t)
                    }
                a++
            }
            var l;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                e(".bloxhoverSliceTop", this).stop().css({
                    top: "-" + u + "px"
                }).fadeIn(0);
                e(".bloxhoverSliceBot", this).stop().css({
                    top: u + "px"
                }).fadeIn(0);
                t.each(function(t) {
                    var i = e(this);
                    l = setTimeout(function() {
                        if (r && l)
                            i.animate({
                            top: "0"
                        }, n.duration, "easeInOutCubic");
                        else if (l)
                            i.animate({
                            top: "0"
                        }, n.duration)
                        }, t * n.delay)
                    });
                var i = n.duration + (n.sliceCount - 1) * n.delay / 2;
                s.stop().fadeIn(i)
                }, function() {
                clearTimeout(l);
                l = null;
                e(".bloxhoverSlice", this).stop().fadeOut(n.duration);
                s.stop().fadeOut(n.duration)
                })
            };
        var f = function(t, i) {
            var s = Math.ceil(100 / n.sliceCount);
            var o = i.height();
            var u = 0;
            while (u < n.sliceCount) {
                var a = u * s;
                if (u % 2 === 0) {
                    e("<div/>", {
                        "class": "bloxhoverSlice bloxhoverSliceTop",
                        style: "position: absolute; z-index: 2; top: 0px; height: " + o + "px; left: " + a + "%; background: " + n.color + ";"
                    }).appendTo(t)
                    } else {
                    e("<div/>", {
                        "class": "bloxhoverSlice bloxhoverSliceBot",
                        style: "position: absolute; z-index: 2; top: 0px; height: " + o + "px; left: " + a + "%; background: " + n.color + ";"
                    }).appendTo(t)
                    }
                u++
            }
            var f;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                t.stop().css({
                    top: "0"
                });
                t.each(function(t) {
                    var i = e(this);
                    f = setTimeout(function() {
                        if (r && f) {
                            if (t % 2 === 0)
                                i.animate({
                                top: "-" + o + "px"
                            }, n.duration, "easeInOutCubic");
                            else
                                i.animate({
                                top: o + "px"
                            }, n.duration, "easeInOutCubic")
                            } else if (f) {
                            if (t % 2 === 0)
                                i.animate({
                                top: "-" + o + "px"
                            }, n.duration);
                            else
                                i.animate({
                                top: o + "px"
                            }, n.duration)
                            }
                    }, t * n.delay)
                    })
                }, function() {
                clearTimeout(f);
                f = null;
                e(".bloxhoverSlice", this).stop().css({
                    top: "0"
                })
                })
            };
        var l = function(t, i, s) {
            var o = i.width()+10;
            var u = Math.ceil(100 / n.sliceCount);
            var a = 0;
            while (a < n.sliceCount) {
                var f = a * u;
                e("<div/>", {
                    "class": "bloxhoverSlice",
                    style: "position: absolute; z-index: 2; top: " + f + "%; height: " + u + "%; width: " + o + "px; left: -" + o + "px; background: " + n.color + ";"
                }).appendTo(t);
                a++
            }
            var l;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                t.stop().css({
                    left: "-" + o + "px"
                }).fadeIn(0);
                t.each(function(t) {
                    var i = e(this);
                    l = setTimeout(function() {
                        if (r && l)
                            i.animate({
                            left: "0"
                        }, n.duration, "easeInOutCubic");
                        else if (l)
                            i.animate({
                            left: "0"
                        }, n.duration)
                        }, t * n.delay)
                    });
                var i = n.duration + (n.sliceCount - 1) * n.delay / 2;
                s.stop().fadeIn(i)
                }, function() {
                clearTimeout(l);
                l = null;
                e(".bloxhoverSlice", this).stop().fadeOut(n.duration);
                s.stop().fadeOut(n.duration)
                })
            };
        var c = function(t, i) {
            var s = i.width();
            var o = Math.ceil(100 / n.sliceCount);
            var u = 0;
            while (u < n.sliceCount) {
                var a = u * o;
                e("<div/>", {
                    "class": "bloxhoverSlice",
                    style: "position: absolute; z-index: 2; top: " + a + "%; height: " + o + "%; width: " + s + "px; left: 0px; background: " + n.color + ";"
                }).appendTo(t);
                u++
            }
            var f;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                t.stop().css({
                    left: "0px"
                });
                t.each(function(t) {
                    var i = e(this);
                    f = setTimeout(function() {
                        if (r && f)
                            i.animate({
                            left: "-" + s + "px"
                        }, n.duration, "easeInOutCubic");
                        else if (f)
                            i.animate({
                            left: "-" + s + "px"
                        }, n.duration)
                        }, t * n.delay)
                    })
                }, function() {
                clearTimeout(f);
                f = null;
                e(".bloxhoverSlice", this).stop().css({
                    left: "0px"
                })
                })
            };
        var h = function(t, i, s) {
            var o = i.width();
            var u = Math.ceil(100 / n.sliceCount);
            var a = 0;
            while (a < n.sliceCount) {
                var f = a * u;
                if (a % 2 === 0) {
                    e("<div/>", {
                        "class": "bloxhoverSlice bloxhoverLeftSlice",
                        style: "position: absolute; z-index: 2; top: " + f + "%; height: " + u + "%; width: " + o + "px; left: -" + o + "px; background: " + n.color + ";"
                    }).appendTo(t)
                    } else {
                    e("<div/>", {
                        "class": "bloxhoverSlice bloxhoverRightSlice",
                        style: "position: absolute; z-index: 2; top: " + f + "%; height: " + u + "%; width: " + o + "px; left: " + o + "px; background: " + n.color + ";"
                    }).appendTo(t)
                    }
                a++
            }
            var l;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                e(".bloxhoverLeftSlice", this).css({
                    left: "-" + o + "px"
                }).fadeIn(0);
                e(".bloxhoverRightSlice", this).css({
                    left: o + "px"
                }).fadeIn(0);
                t.each(function(t) {
                    var i = e(this);
                    l = setTimeout(function() {
                        if (r && l)
                            i.animate({
                            left: "0"
                        }, n.duration, "easeInOutCubic");
                        else if (l)
                            i.animate({
                            left: "0"
                        }, n.duration)
                        }, t * n.delay)
                    });
                var i = n.duration + (n.sliceCount - 1) * n.delay / 2;
                s.stop().fadeIn(i)
                }, function() {
                clearTimeout(l);
                l = null;
                e(".bloxhoverSlice", this).stop().fadeOut(n.duration);
                s.stop().fadeOut(n.duration)
                })
            };
        var p = function(t, i) {
            var s = i.width();
            var o = Math.ceil(100 / n.sliceCount);
            var u = 0;
            while (u < n.sliceCount) {
                var a = u * o;
                if (u % 2 === 0) {
                    e("<div/>", {
                        "class": "bloxhoverSlice bloxhoverLeftSlice",
                        style: "position: absolute; z-index: 2; top: " + a + "%; height: " + o + "%; width: " + s + "px; left: 0px; background: " + n.color + ";"
                    }).appendTo(t)
                    } else {
                    e("<div/>", {
                        "class": "bloxhoverSlice bloxhoverRightSlice",
                        style: "position: absolute; z-index: 2; top: " + a + "%; height: " + o + "%; width: " + s + "px; left: 0px; background: " + n.color + ";"
                    }).appendTo(t)
                    }
                u++
            }
            var f;
            t.hover(function() {
                var t = e(".bloxhoverSlice", this);
                t.stop().css({
                    left: "0px"
                });
                t.each(function(t) {
                    var i = e(this);
                    f = setTimeout(function() {
                        if (r && f) {
                            if (t % 2 === 0)
                                i.animate({
                                left: "-" + s + "px"
                            }, n.duration, "easeInOutCubic");
                            else
                                i.animate({
                                left: s + "px"
                            }, n.duration, "easeInOutCubic")
                            } else if (f) {
                            if (t % 2 === 0)
                                i.animate({
                                left: "-" + s + "px"
                            }, n.duration);
                            else
                                i.animate({
                                left: s + "px"
                            }, n.duration)
                            }
                    }, t * n.delay)
                    })
                }, function() {
                clearTimeout(f);
                f = null;
                e(".bloxhoverSlice", this).stop().css({
                    left: "0px"
                });
            })
            };
        return this.each(function() {
            var t = e(this);
            var r = t.children("img:eq(0)");
            var d = t.children("div:eq(0)");
            r.load(function() {
                var e = r.width();
                var v = r.height();
                var m = e / 2 - d.width() / 2;
                var g = v / 2 - d.height() / 2;
                r.css({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    "z-index": "1"
                });
                d.css({
                    position: "absolute",
                    top: g + "px",
                    left: "0px",
                    right: "0",
                    "text-align": "center",
                    "z-index": "3",
                    display: "none"
                });
                t.css({
                    position: "relative",
                    display: "inline-block",
                    overflow: "hidden",
                    width: e + "px",
                    height: v + "px"
                });
                switch (n.effect) {
                case "square":
                    i(t, r, d);
                    break;
                case "square reveal":
                    s(t, r);
                    break;
                case "vertical":
                    o(t, r, d);
                    break;
                case "vertical reveal":
                    u(t, r);
                    break;
                case "vertical alternate":
                    a(t, r, d);
                    break;
                case "vertical alternate reveal":
                    f(t, r);
                    break;
                case "horizontal":
                    l(t, r, d);
                    break;
                case "horizontal reveal":
                    c(t, r);
                    break;
                case "horizontal alternate":
                    h(t, r, d);
                    break;
                case "horizontal alternate reveal":
                    p(t, r);
                    break;
                default:
                    o(t, r, d)
                    }
            })
            })
        };
    e.fn.bloxhover.defaults = {
        effect: "vertical",
        sliceCount: 8,
        color: "rgba(0, 0, 0, 0.5)",
        duration: 300,
        delay: 100
    }
})(jQuery)