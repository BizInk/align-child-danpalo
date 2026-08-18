! function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return setTimeout(function() {
            i || t(o).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function o() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var s = t(this),
            n = s.attr("data-target");
        n || (n = (n = s.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(n);
        e && e.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o())
    };
    var o = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.alert");
            s || o.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(o)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.button"),
                n = "object" == typeof e && e;
            s || o.data("bs.button", s = new i(this, n)), "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }
    var i = function(e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            o = this.$element,
            s = o.is("input") ? "val" : "html",
            n = o.data();
        e += "Text", null == n.resetText && o.data("resetText", o[s]()), setTimeout(t.proxy(function() {
            o[s](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.carousel"),
                n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : n.slide;
            s || o.data("bs.carousel", s = new i(this, n)), "number" == typeof e ? s.to(e) : a ? s[a]() : n.interval && s.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function(e, o) {
        var s = this.$element.find(".item.active"),
            n = o || this.getItemForDirection(e, s),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var d = n[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: d,
                direction: r
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(n)]);
                p && p.addClass("active")
            }
            var u = t.Event("slid.bs.carousel", {
                relatedTarget: d,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, s.addClass(r), n.addClass(r), s.one("bsTransitionEnd", function() {
                n.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(u)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = o, this
    };
    var s = function(i) {
        var o, s = t(this),
            n = t(s.attr("data-target") || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var a = t.extend({}, n.data(), s.data()),
                r = s.attr("data-slide-to");
            r && (a.interval = !1), e.call(n, a), r && n.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.collapse"),
                n = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && n.toggle && /show|hide/.test(e) && (n.toggle = !1), s || i.data("bs.collapse", s = new o(this, n)), "string" == typeof e && s[e]()
        })
    }
    var o = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : s.call(this)
            }
        }
    }, o.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var s = t(o);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var s = t(this);
        s.attr("data-target") || o.preventDefault();
        var n = e(s),
            a = n.data("bs.collapse") ? "toggle" : s.data();
        i.call(n, a)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(s).each(function() {
            var o = t(this),
                s = e(o),
                n = {
                    relatedTarget: this
                };
            s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", n))))
        }))
    }
    var o = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        n = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    n.VERSION = "3.3.5", n.prototype.toggle = function(o) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var n = e(s),
                a = n.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, n.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o),
                    a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var l = r.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, n.prototype.toggle).on("keydown.bs.dropdown.data-api", s, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";

    function e(e, o) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            n || s.data("bs.modal", n = new i(this, a)), "string" == typeof e ? n[e](o) : a.show && n.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var o = this,
            s = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var s = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var o = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && s;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            s = o.attr("href"),
            n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            a = n.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, n.data(), o.data());
        o.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(n, a, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var s = this.options.trigger.split(" "), n = s.length; n--;) {
            var a = s[n];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function() {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !o) return;
            var s = this,
                n = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), n.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                d = l.test(r);
            d && (r = r.replace(l, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                p = n[0].offsetWidth,
                u = n[0].offsetHeight;
            if (d) {
                var h = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && c.bottom + u > f.bottom ? "top" : "top" == r && c.top - u < f.top ? "bottom" : "right" == r && c.right + p > f.width ? "left" : "left" == r && c.left - p < f.left ? "right" : r, n.removeClass(h).addClass(r)
            }
            var v = this.getCalculatedOffset(r, c, p, u);
            this.applyPlacement(v, r);
            var g = function() {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            s = o[0].offsetWidth,
            n = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            d = o[0].offsetHeight;
        "top" == i && d != n && (e.top = e.top + n - d);
        var c = this.getViewportAdjustedDelta(i, e, l, d);
        c.left ? e.left += c.left : e.top += c.top;
        var p = /top|bottom/.test(i),
            u = p ? 2 * c.left - s + l : 2 * c.top - n + d,
            h = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(u, o[0][h], p)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(i) {
        function o() {
            "in" != s.hoverState && n.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), i && i()
        }
        var s = this,
            n = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(a), !a.isDefaultPrevented()) return n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            o = "BODY" == i.tagName,
            s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top
        }));
        var n = o ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, s, a, r, n)
    }, e.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var n = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - n - a.scroll,
                l = e.top + n - a.scroll + o;
            r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
        } else {
            var d = e.left - n,
                c = e.left + n + i;
            d < a.left ? s.left = a.left - d : c > a.right && (s.left = a.left + a.width - c)
        }
        return s
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.tooltip"),
                n = "object" == typeof i && i;
            !s && /destroy|hide/.test(i) || (s || o.data("bs.tooltip", s = new e(this, n)), "string" == typeof i && s[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.5", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.popover"),
                n = "object" == typeof i && i;
            !s && /destroy|hide/.test(i) || (s || o.data("bs.popover", s = new e(this, n)), "string" == typeof i && s[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            s || o.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                s = e.data("target") || e.attr("href"),
                n = /^#./.test(s) && t(s);
            return n && n.length && n.is(":visible") && [
                [n[i]().top + o, s]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            n = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = n[n.length - 1]) && this.activate(t);
        if (a && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) a != n[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(n[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.tab");
            s || o.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = (o = e.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"),
                n = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: s[0]
                });
            if (s.trigger(n), e.trigger(a), !a.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, o, s) {
        function n() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }
        var a = o.find("> .active"),
            r = s && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = o, this
    };
    var s = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.affix"),
                n = "object" == typeof e && e;
            s || o.data("bs.affix", s = new i(this, n)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, o) {
        var s = this.$target.scrollTop(),
            n = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return s < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= n.top) && "bottom" : !(s + a <= t - o) && "bottom";
        var r = null == this.affixed,
            l = r ? s : n.top;
        return null != i && s <= i ? "top" : null != o && l + (r ? a : e) >= t - o && "bottom"
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                s = o.top,
                n = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (n = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof n && (n = o.bottom(this.$element));
            var r = this.getState(a, e, s, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    d = t.Event(l + ".bs.affix");
                if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - n
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = o, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery),
function(t) {
    var e = !0;
    t.flexslider = function(i, o) {
        var s = t(i);
        s.vars = t.extend({}, t.flexslider.defaults, o);
        var n, a = s.vars.namespace,
            r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            l = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && s.vars.touch,
            d = "click touchend MSPointerUp keyup",
            c = "",
            p = "vertical" === s.vars.direction,
            u = s.vars.reverse,
            h = s.vars.itemWidth > 0,
            f = "fade" === s.vars.animation,
            v = "" !== s.vars.asNavFor,
            g = {};
        t.data(i, "flexslider", s), g = {
            init: function() {
                s.animating = !1, s.currentSlide = parseInt(s.vars.startAt ? s.vars.startAt : 0, 10), isNaN(s.currentSlide) && (s.currentSlide = 0), s.animatingTo = s.currentSlide, s.atEnd = 0 === s.currentSlide || s.currentSlide === s.last, s.containerSelector = s.vars.selector.substr(0, s.vars.selector.search(" ")), s.slides = t(s.vars.selector, s), s.container = t(s.containerSelector, s), s.count = s.slides.length, s.syncExists = t(s.vars.sync).length > 0, "slide" === s.vars.animation && (s.vars.animation = "swing"), s.prop = p ? "top" : "marginLeft", s.args = {}, s.manualPause = !1, s.stopped = !1, s.started = !1, s.startTimeout = null, s.transitions = !s.vars.video && !f && s.vars.useCSS && function() {
                    var t = document.createElement("div"),
                        e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]]) return s.pfx = e[i].replace("Perspective", "").toLowerCase(), s.prop = "-" + s.pfx + "-transform", !0;
                    return !1
                }(), s.ensureAnimationEnd = "", "" !== s.vars.controlsContainer && (s.controlsContainer = t(s.vars.controlsContainer).length > 0 && t(s.vars.controlsContainer)), "" !== s.vars.manualControls && (s.manualControls = t(s.vars.manualControls).length > 0 && t(s.vars.manualControls)), "" !== s.vars.customDirectionNav && (s.customDirectionNav = 2 === t(s.vars.customDirectionNav).length && t(s.vars.customDirectionNav)), s.vars.randomize && (s.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), s.container.empty().append(s.slides)), s.doMath(), s.setup("init"), s.vars.controlNav && g.controlNav.setup(), s.vars.directionNav && g.directionNav.setup(), s.vars.keyboard && (1 === t(s.containerSelector).length || s.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                    var e = t.keyCode;
                    if (!s.animating && (39 === e || 37 === e)) {
                        var i = 39 === e ? s.getTarget("next") : 37 === e && s.getTarget("prev");
                        s.flexAnimate(i, s.vars.pauseOnAction)
                    }
                }), s.vars.mousewheel && s.bind("mousewheel", function(t, e, i, o) {
                    t.preventDefault();
                    var n = e < 0 ? s.getTarget("next") : s.getTarget("prev");
                    s.flexAnimate(n, s.vars.pauseOnAction)
                }), s.vars.pausePlay && g.pausePlay.setup(), s.vars.slideshow && s.vars.pauseInvisible && g.pauseInvisible.init(), s.vars.slideshow && (s.vars.pauseOnHover && s.hover(function() {
                    s.manualPlay || s.manualPause || s.pause()
                }, function() {
                    s.manualPause || s.manualPlay || s.stopped || s.play()
                }), s.vars.pauseInvisible && g.pauseInvisible.isHidden() || (s.vars.initDelay > 0 ? s.startTimeout = setTimeout(s.play, s.vars.initDelay) : s.play())), v && g.asNav.setup(), l && s.vars.touch && g.touch(), (!f || f && s.vars.smoothHeight) && t(window).bind("resize orientationchange focus", g.resize), s.find("img").attr("draggable", "false"), setTimeout(function() {
                    s.vars.start(s)
                }, 200)
            },
            asNav: {
                setup: function() {
                    s.asNav = !0, s.animatingTo = Math.floor(s.currentSlide / s.move), s.currentItem = s.currentSlide, s.slides.removeClass(a + "active-slide").eq(s.currentItem).addClass(a + "active-slide"), r ? (i._slider = s, s.slides.each(function() {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                            t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function(e) {
                            e.preventDefault();
                            var i = t(this),
                                o = i.index();
                            t(s.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (s.direction = s.currentItem < o ? "next" : "prev", s.flexAnimate(o, s.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : s.slides.on(d, function(e) {
                        e.preventDefault();
                        var i = t(this),
                            o = i.index();
                        i.offset().left - t(s).scrollLeft() <= 0 && i.hasClass(a + "active-slide") ? s.flexAnimate(s.getTarget("prev"), !0) : t(s.vars.asNavFor).data("flexslider").animating || i.hasClass(a + "active-slide") || (s.direction = s.currentItem < o ? "next" : "prev", s.flexAnimate(o, s.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    s.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var e, i, o = "thumbnails" === s.vars.controlNav ? "control-thumbs" : "control-paging",
                        n = 1;
                    if (s.controlNavScaffold = t('<ol class="' + a + "control-nav " + a + o + '"></ol>'), s.pagingCount > 1)
                        for (var r = 0; r < s.pagingCount; r++) {
                            if (void 0 === (i = s.slides.eq(r)).attr("data-thumb-alt") && i.attr("data-thumb-alt", ""), altText = "" !== i.attr("data-thumb-alt") ? altText = ' alt="' + i.attr("data-thumb-alt") + '"' : "", e = "thumbnails" === s.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + n + "</a>", "thumbnails" === s.vars.controlNav && !0 === s.vars.thumbCaptions) {
                                var l = i.attr("data-thumbcaption");
                                "" !== l && void 0 !== l && (e += '<span class="' + a + 'caption">' + l + "</span>")
                            }
                            s.controlNavScaffold.append("<li>" + e + "</li>"), n++
                        }
                    s.controlsContainer ? t(s.controlsContainer).append(s.controlNavScaffold) : s.append(s.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), s.controlNavScaffold.delegate("a, img", d, function(e) {
                        if (e.preventDefault(), "" === c || c === e.type) {
                            var i = t(this),
                                o = s.controlNav.index(i);
                            i.hasClass(a + "active") || (s.direction = o > s.currentSlide ? "next" : "prev", s.flexAnimate(o, s.vars.pauseOnAction))
                        }
                        "" === c && (c = e.type), g.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    s.controlNav = s.manualControls, g.controlNav.active(), s.controlNav.bind(d, function(e) {
                        if (e.preventDefault(), "" === c || c === e.type) {
                            var i = t(this),
                                o = s.controlNav.index(i);
                            i.hasClass(a + "active") || (o > s.currentSlide ? s.direction = "next" : s.direction = "prev", s.flexAnimate(o, s.vars.pauseOnAction))
                        }
                        "" === c && (c = e.type), g.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var e = "thumbnails" === s.vars.controlNav ? "img" : "a";
                    s.controlNav = t("." + a + "control-nav li " + e, s.controlsContainer ? s.controlsContainer : s)
                },
                active: function() {
                    s.controlNav.removeClass(a + "active").eq(s.animatingTo).addClass(a + "active")
                },
                update: function(e, i) {
                    s.pagingCount > 1 && "add" === e ? s.controlNavScaffold.append(t('<li><a href="#">' + s.count + "</a></li>")) : 1 === s.pagingCount ? s.controlNavScaffold.find("li").remove() : s.controlNav.eq(i).closest("li").remove(), g.controlNav.set(), s.pagingCount > 1 && s.pagingCount !== s.controlNav.length ? s.update(i, e) : g.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var e = t('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + s.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + s.vars.nextText + "</a></li></ul>");
                    s.customDirectionNav ? s.directionNav = s.customDirectionNav : s.controlsContainer ? (t(s.controlsContainer).append(e), s.directionNav = t("." + a + "direction-nav li a", s.controlsContainer)) : (s.append(e), s.directionNav = t("." + a + "direction-nav li a", s)), g.directionNav.update(), s.directionNav.bind(d, function(e) {
                        var i;
                        e.preventDefault(), "" !== c && c !== e.type || (i = t(this).hasClass(a + "next") ? s.getTarget("next") : s.getTarget("prev"), s.flexAnimate(i, s.vars.pauseOnAction)), "" === c && (c = e.type), g.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var t = a + "disabled";
                    1 === s.pagingCount ? s.directionNav.addClass(t).attr("tabindex", "-1") : s.vars.animationLoop ? s.directionNav.removeClass(t).removeAttr("tabindex") : 0 === s.animatingTo ? s.directionNav.removeClass(t).filter("." + a + "prev").addClass(t).attr("tabindex", "-1") : s.animatingTo === s.last ? s.directionNav.removeClass(t).filter("." + a + "next").addClass(t).attr("tabindex", "-1") : s.directionNav.removeClass(t).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var e = t('<div class="' + a + 'pauseplay"><a href="#"></a></div>');
                    s.controlsContainer ? (s.controlsContainer.append(e), s.pausePlay = t("." + a + "pauseplay a", s.controlsContainer)) : (s.append(e), s.pausePlay = t("." + a + "pauseplay a", s)), g.pausePlay.update(s.vars.slideshow ? a + "pause" : a + "play"), s.pausePlay.bind(d, function(e) {
                        e.preventDefault(), "" !== c && c !== e.type || (t(this).hasClass(a + "pause") ? (s.manualPause = !0, s.manualPlay = !1, s.pause()) : (s.manualPause = !1, s.manualPlay = !0, s.play())), "" === c && (c = e.type), g.setToClearWatchedEvent()
                    })
                },
                update: function(t) {
                    "play" === t ? s.pausePlay.removeClass(a + "pause").addClass(a + "play").html(s.vars.playText) : s.pausePlay.removeClass(a + "play").addClass(a + "pause").html(s.vars.pauseText)
                }
            },
            touch: function() {
                var t, e, o, n, a, l, d, c, v, g = !1,
                    m = 0,
                    y = 0,
                    w = 0;
                r ? (i.style.msTouchAction = "none", i._gesture = new MSGesture, i._gesture.target = i, i.addEventListener("MSPointerDown", function(t) {
                    t.stopPropagation(), s.animating ? t.preventDefault() : (s.pause(), i._gesture.addPointer(t.pointerId), w = 0, n = p ? s.h : s.w, l = Number(new Date), o = h && u && s.animatingTo === s.last ? 0 : h && u ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : h && s.currentSlide === s.last ? s.limit : h ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : u ? (s.last - s.currentSlide + s.cloneOffset) * n : (s.currentSlide + s.cloneOffset) * n)
                }, !1), i._slider = s, i.addEventListener("MSGestureChange", function(t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (e) {
                        var s = -t.translationX,
                            r = -t.translationY;
                        return a = w += p ? r : s, g = p ? Math.abs(w) < Math.abs(-s) : Math.abs(w) < Math.abs(-r), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            i._gesture.stop()
                        }) : void((!g || Number(new Date) - l > 500) && (t.preventDefault(), !f && e.transitions && (e.vars.animationLoop || (a = w / (0 === e.currentSlide && w < 0 || e.currentSlide === e.last && w > 0 ? Math.abs(w) / n + 2 : 1)), e.setProps(o + a, "setTouch"))))
                    }
                }, !1), i.addEventListener("MSGestureEnd", function(i) {
                    i.stopPropagation();
                    var s = i.target._slider;
                    if (s) {
                        if (s.animatingTo === s.currentSlide && !g && null !== a) {
                            var r = u ? -a : a,
                                d = r > 0 ? s.getTarget("next") : s.getTarget("prev");
                            s.canAdvance(d) && (Number(new Date) - l < 550 && Math.abs(r) > 50 || Math.abs(r) > n / 2) ? s.flexAnimate(d, s.vars.pauseOnAction) : f || s.flexAnimate(s.currentSlide, s.vars.pauseOnAction, !0)
                        }
                        t = null, e = null, a = null, o = null, w = 0
                    }
                }, !1)) : (d = function(a) {
                    s.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (s.pause(), n = p ? s.h : s.w, l = Number(new Date), m = a.touches[0].pageX, y = a.touches[0].pageY, o = h && u && s.animatingTo === s.last ? 0 : h && u ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : h && s.currentSlide === s.last ? s.limit : h ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : u ? (s.last - s.currentSlide + s.cloneOffset) * n : (s.currentSlide + s.cloneOffset) * n, t = p ? y : m, e = p ? m : y, i.addEventListener("touchmove", c, !1), i.addEventListener("touchend", v, !1))
                }, c = function(i) {
                    m = i.touches[0].pageX, y = i.touches[0].pageY, a = p ? t - y : t - m;
                    (!(g = p ? Math.abs(a) < Math.abs(m - e) : Math.abs(a) < Math.abs(y - e)) || Number(new Date) - l > 500) && (i.preventDefault(), !f && s.transitions && (s.vars.animationLoop || (a /= 0 === s.currentSlide && a < 0 || s.currentSlide === s.last && a > 0 ? Math.abs(a) / n + 2 : 1), s.setProps(o + a, "setTouch")))
                }, v = function(r) {
                    if (i.removeEventListener("touchmove", c, !1), s.animatingTo === s.currentSlide && !g && null !== a) {
                        var d = u ? -a : a,
                            p = d > 0 ? s.getTarget("next") : s.getTarget("prev");
                        s.canAdvance(p) && (Number(new Date) - l < 550 && Math.abs(d) > 50 || Math.abs(d) > n / 2) ? s.flexAnimate(p, s.vars.pauseOnAction) : f || s.flexAnimate(s.currentSlide, s.vars.pauseOnAction, !0)
                    }
                    i.removeEventListener("touchend", v, !1), t = null, e = null, a = null, o = null
                }, i.addEventListener("touchstart", d, !1))
            },
            resize: function() {
                !s.animating && s.is(":visible") && (h || s.doMath(), f ? g.smoothHeight() : h ? (s.slides.width(s.computedW), s.update(s.pagingCount), s.setProps()) : p ? (s.viewport.height(s.h), s.setProps(s.h, "setTotal")) : (s.vars.smoothHeight && g.smoothHeight(), s.newSlides.width(s.computedW), s.setProps(s.computedW, "setTotal")))
            },
            smoothHeight: function(t) {
                if (!p || f) {
                    var e = f ? s : s.viewport;
                    t ? e.animate({
                        height: s.slides.eq(s.animatingTo).height()
                    }, t) : e.height(s.slides.eq(s.animatingTo).height())
                }
            },
            sync: function(e) {
                var i = t(s.vars.sync).data("flexslider"),
                    o = s.animatingTo;
                switch (e) {
                    case "animate":
                        i.flexAnimate(o, s.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        i.playing || i.asNav || i.play();
                        break;
                    case "pause":
                        i.pause()
                }
            },
            uniqueID: function(e) {
                return e.filter("[id]").add(e.find("[id]")).each(function() {
                    var e = t(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var t = g.pauseInvisible.getHiddenProp();
                    if (t) {
                        var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(e, function() {
                            g.pauseInvisible.isHidden() ? s.startTimeout ? clearTimeout(s.startTimeout) : s.pause() : s.started ? s.play() : s.vars.initDelay > 0 ? setTimeout(s.play, s.vars.initDelay) : s.play()
                        })
                    }
                },
                isHidden: function() {
                    var t = g.pauseInvisible.getHiddenProp();
                    return !!t && document[t]
                },
                getHiddenProp: function() {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var e = 0; e < t.length; e++)
                        if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(n), n = setTimeout(function() {
                    c = ""
                }, 3e3)
            }
        }, s.flexAnimate = function(e, i, o, n, r) {
            if (s.vars.animationLoop || e === s.currentSlide || (s.direction = e > s.currentSlide ? "next" : "prev"), v && 1 === s.pagingCount && (s.direction = s.currentItem < e ? "next" : "prev"), !s.animating && (s.canAdvance(e, r) || o) && s.is(":visible")) {
                if (v && n) {
                    var d = t(s.vars.asNavFor).data("flexslider");
                    if (s.atEnd = 0 === e || e === s.count - 1, d.flexAnimate(e, !0, !1, !0, r), s.direction = s.currentItem < e ? "next" : "prev", d.direction = s.direction, Math.ceil((e + 1) / s.visible) - 1 === s.currentSlide || 0 === e) return s.currentItem = e, s.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), !1;
                    s.currentItem = e, s.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), e = Math.floor(e / s.visible)
                }
                if (s.animating = !0, s.animatingTo = e, i && s.pause(), s.vars.before(s), s.syncExists && !r && g.sync("animate"), s.vars.controlNav && g.controlNav.active(), h || s.slides.removeClass(a + "active-slide").eq(e).addClass(a + "active-slide"), s.atEnd = 0 === e || e === s.last, s.vars.directionNav && g.directionNav.update(), e === s.last && (s.vars.end(s), s.vars.animationLoop || s.pause()), f) l ? (s.slides.eq(s.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), s.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), s.wrapup(w)) : (s.slides.eq(s.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, s.vars.animationSpeed, s.vars.easing), s.slides.eq(e).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, s.vars.animationSpeed, s.vars.easing, s.wrapup));
                else {
                    var c, m, y, w = p ? s.slides.filter(":first").height() : s.computedW;
                    h ? (c = s.vars.itemMargin, m = (y = (s.itemW + c) * s.move * s.animatingTo) > s.limit && 1 !== s.visible ? s.limit : y) : m = 0 === s.currentSlide && e === s.count - 1 && s.vars.animationLoop && "next" !== s.direction ? u ? (s.count + s.cloneOffset) * w : 0 : s.currentSlide === s.last && 0 === e && s.vars.animationLoop && "prev" !== s.direction ? u ? 0 : (s.count + 1) * w : u ? (s.count - 1 - e + s.cloneOffset) * w : (e + s.cloneOffset) * w, s.setProps(m, "", s.vars.animationSpeed), s.transitions ? (s.vars.animationLoop && s.atEnd || (s.animating = !1, s.currentSlide = s.animatingTo), s.container.unbind("webkitTransitionEnd transitionend"), s.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(s.ensureAnimationEnd), s.wrapup(w)
                    }), clearTimeout(s.ensureAnimationEnd), s.ensureAnimationEnd = setTimeout(function() {
                        s.wrapup(w)
                    }, s.vars.animationSpeed + 100)) : s.container.animate(s.args, s.vars.animationSpeed, s.vars.easing, function() {
                        s.wrapup(w)
                    })
                }
                s.vars.smoothHeight && g.smoothHeight(s.vars.animationSpeed)
            }
        }, s.wrapup = function(t) {
            f || h || (0 === s.currentSlide && s.animatingTo === s.last && s.vars.animationLoop ? s.setProps(t, "jumpEnd") : s.currentSlide === s.last && 0 === s.animatingTo && s.vars.animationLoop && s.setProps(t, "jumpStart")), s.animating = !1, s.currentSlide = s.animatingTo, s.vars.after(s)
        }, s.animateSlides = function() {
            !s.animating && e && s.flexAnimate(s.getTarget("next"))
        }, s.pause = function() {
            clearInterval(s.animatedSlides), s.animatedSlides = null, s.playing = !1, s.vars.pausePlay && g.pausePlay.update("play"), s.syncExists && g.sync("pause")
        }, s.play = function() {
            s.playing && clearInterval(s.animatedSlides), s.animatedSlides = s.animatedSlides || setInterval(s.animateSlides, s.vars.slideshowSpeed), s.started = s.playing = !0, s.vars.pausePlay && g.pausePlay.update("pause"), s.syncExists && g.sync("play")
        }, s.stop = function() {
            s.pause(), s.stopped = !0
        }, s.canAdvance = function(t, e) {
            var i = v ? s.pagingCount - 1 : s.last;
            return !(!e && (!v || s.currentItem !== s.count - 1 || 0 !== t || "prev" !== s.direction) && (v && 0 === s.currentItem && t === s.pagingCount - 1 && "next" !== s.direction || t === s.currentSlide && !v || !s.vars.animationLoop && (s.atEnd && 0 === s.currentSlide && t === i && "next" !== s.direction || s.atEnd && s.currentSlide === i && 0 === t && "next" === s.direction)))
        }, s.getTarget = function(t) {
            return s.direction = t, "next" === t ? s.currentSlide === s.last ? 0 : s.currentSlide + 1 : 0 === s.currentSlide ? s.last : s.currentSlide - 1
        }, s.setProps = function(t, e, i) {
            var o = function() {
                var i = t || (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo;
                return -1 * function() {
                    if (h) return "setTouch" === e ? t : u && s.animatingTo === s.last ? 0 : u ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : s.animatingTo === s.last ? s.limit : i;
                    switch (e) {
                        case "setTotal":
                            return u ? (s.count - 1 - s.currentSlide + s.cloneOffset) * t : (s.currentSlide + s.cloneOffset) * t;
                        case "setTouch":
                            return t;
                        case "jumpEnd":
                            return u ? t : s.count * t;
                        case "jumpStart":
                            return u ? s.count * t : t;
                        default:
                            return t
                    }
                }() + "px"
            }();
            s.transitions && (o = p ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", s.container.css("-" + s.pfx + "-transition-duration", i), s.container.css("transition-duration", i)), s.args[s.prop] = o, (s.transitions || void 0 === i) && s.container.css(s.args), s.container.css("transform", o)
        }, s.setup = function(e) {
            var i, o;
            f ? (s.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (l ? s.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + s.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(s.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == s.vars.fadeFirstSlide ? s.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(s.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : s.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(s.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, s.vars.animationSpeed, s.vars.easing)), s.vars.smoothHeight && g.smoothHeight()) : ("init" === e && (s.viewport = t('<div class="' + a + 'viewport"></div>').css({
                overflow: "hidden",
                position: "relative"
            }).appendTo(s).append(s.container), s.cloneCount = 0, s.cloneOffset = 0, u && (o = t.makeArray(s.slides).reverse(), s.slides = t(o), s.container.empty().append(s.slides))), s.vars.animationLoop && !h && (s.cloneCount = 2, s.cloneOffset = 1, "init" !== e && s.container.find(".clone").remove(), s.container.append(g.uniqueID(s.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(s.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), s.newSlides = t(s.vars.selector, s), i = u ? s.count - 1 - s.currentSlide + s.cloneOffset : s.currentSlide + s.cloneOffset, p && !h ? (s.container.height(200 * (s.count + s.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                s.newSlides.css({
                    display: "block"
                }), s.doMath(), s.viewport.height(s.h), s.setProps(i * s.h, "init")
            }, "init" === e ? 100 : 0)) : (s.container.width(200 * (s.count + s.cloneCount) + "%"), s.setProps(i * s.computedW, "init"), setTimeout(function() {
                s.doMath(), s.newSlides.css({
                    width: s.computedW,
                    marginRight: s.computedM,
                    float: "left",
                    display: "block"
                }), s.vars.smoothHeight && g.smoothHeight()
            }, "init" === e ? 100 : 0)));
            h || s.slides.removeClass(a + "active-slide").eq(s.currentSlide).addClass(a + "active-slide"), s.vars.init(s)
        }, s.doMath = function() {
            var t = s.slides.first(),
                e = s.vars.itemMargin,
                i = s.vars.minItems,
                o = s.vars.maxItems;
            s.w = void 0 === s.viewport ? s.width() : s.viewport.width(), s.h = t.height(), s.boxPadding = t.outerWidth() - t.width(), h ? (s.itemT = s.vars.itemWidth + e, s.itemM = e, s.minW = i ? i * s.itemT : s.w, s.maxW = o ? o * s.itemT - e : s.w, s.itemW = s.minW > s.w ? (s.w - e * (i - 1)) / i : s.maxW < s.w ? (s.w - e * (o - 1)) / o : s.vars.itemWidth > s.w ? s.w : s.vars.itemWidth, s.visible = Math.floor(s.w / s.itemW), s.move = s.vars.move > 0 && s.vars.move < s.visible ? s.vars.move : s.visible, s.pagingCount = Math.ceil((s.count - s.visible) / s.move + 1), s.last = s.pagingCount - 1, s.limit = 1 === s.pagingCount ? 0 : s.vars.itemWidth > s.w ? s.itemW * (s.count - 1) + e * (s.count - 1) : (s.itemW + e) * s.count - s.w - e) : (s.itemW = s.w, s.itemM = e, s.pagingCount = s.count, s.last = s.count - 1), s.computedW = s.itemW - s.boxPadding, s.computedM = s.itemM
        }, s.update = function(t, e) {
            s.doMath(), h || (t < s.currentSlide ? s.currentSlide += 1 : t <= s.currentSlide && 0 !== t && (s.currentSlide -= 1), s.animatingTo = s.currentSlide), s.vars.controlNav && !s.manualControls && ("add" === e && !h || s.pagingCount > s.controlNav.length ? g.controlNav.update("add") : ("remove" === e && !h || s.pagingCount < s.controlNav.length) && (h && s.currentSlide > s.last && (s.currentSlide -= 1, s.animatingTo -= 1), g.controlNav.update("remove", s.last))), s.vars.directionNav && g.directionNav.update()
        }, s.addSlide = function(e, i) {
            var o = t(e);
            s.count += 1, s.last = s.count - 1, p && u ? void 0 !== i ? s.slides.eq(s.count - i).after(o) : s.container.prepend(o) : void 0 !== i ? s.slides.eq(i).before(o) : s.container.append(o), s.update(i, "add"), s.slides = t(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.added(s)
        }, s.removeSlide = function(e) {
            var i = isNaN(e) ? s.slides.index(t(e)) : e;
            s.count -= 1, s.last = s.count - 1, isNaN(e) ? t(e, s.slides).remove() : p && u ? s.slides.eq(s.last).remove() : s.slides.eq(e).remove(), s.doMath(), s.update(i, "remove"), s.slides = t(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.removed(s)
        }, g.init()
    }, t(window).blur(function(t) {
        e = !1
    }).focus(function(t) {
        e = !0
    }), t.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, t.fn.flexslider = function(e) {
        if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
            var i = t(this),
                o = e.selector ? e.selector : ".slides > li",
                s = i.find(o);
            1 === s.length && !0 === e.allowOneSlide || 0 === s.length ? (s.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
        });
        var i = t(this).data("flexslider");
        switch (e) {
            case "play":
                i.play();
                break;
            case "pause":
                i.pause();
                break;
            case "stop":
                i.stop();
                break;
            case "next":
                i.flexAnimate(i.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                i.flexAnimate(i.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && i.flexAnimate(e, !0)
        }
    }
}(jQuery),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = t(i), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = t(i).data("slick") || {}, n.options = t.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = t.proxy(n.autoPlay, n), n.autoPlayClear = t.proxy(n.autoPlayClear, n), n.autoPlayIterator = t.proxy(n.autoPlayIterator, n), n.changeSlide = t.proxy(n.changeSlide, n), n.clickHandler = t.proxy(n.clickHandler, n), n.selectHandler = t.proxy(n.selectHandler, n), n.setPosition = t.proxy(n.setPosition, n), n.swipeHandler = t.proxy(n.swipeHandler, n), n.dragHandler = t.proxy(n.dragHandler, n), n.keyHandler = t.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, o) {
        var s = this;
        if ("boolean" == typeof i) o = i, i = null;
        else if (i < 0 || i >= s.slideCount) return !1;
        s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : o ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : !0 === o ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, i) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), t({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(t) {
                t = Math.ceil(t), !1 === s.options.vertical ? (o[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(o))
            },
            complete: function() {
                i && i.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), i && setTimeout(function() {
            s.disableTransition(), i.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
    }, e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, i, o = this;
        if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
            for (o.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) i.append(t("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, i, o, s, n, a, r = this;
        if (o = document.createDocumentFragment(), n = r.$slider.children(), r.options.rows > 0) {
            for (a = r.options.slidesPerRow * r.options.rows, s = Math.ceil(n.length / a), t = 0; t < s; t++) {
                var l = document.createElement("div");
                for (e = 0; e < r.options.rows; e++) {
                    var d = document.createElement("div");
                    for (i = 0; i < r.options.slidesPerRow; i++) {
                        var c = t * a + (e * r.options.slidesPerRow + i);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    l.appendChild(d)
                }
                o.appendChild(l)
            }
            r.$slider.empty().append(o), r.$slider.children().children().children().css({
                width: 100 / r.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var o, s, n, a = this,
            r = !1,
            l = a.$slider.width(),
            d = window.innerWidth || t(window).width();
        if ("window" === a.respondTo ? n = d : "slider" === a.respondTo ? n = l : "min" === a.respondTo && (n = Math.min(d, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
            for (o in s = null, a.breakpoints) a.breakpoints.hasOwnProperty(o) && (!1 === a.originalSettings.mobileFirst ? n < a.breakpoints[o] && (s = a.breakpoints[o]) : n > a.breakpoints[o] && (s = a.breakpoints[o]));
            null !== s ? null !== a.activeBreakpoint ? (s !== a.activeBreakpoint || i) && (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = s) : (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = s) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e), r = s), e || !1 === r || a.$slider.trigger("breakpoint", [a, r])
        }
    }, e.prototype.changeSlide = function(e, i) {
        var o, s, n = this,
            a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? n.options.slidesToScroll : n.options.slidesToShow - o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, i);
                break;
            case "next":
                s = 0 === o ? n.options.slidesToScroll : o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, i);
                break;
            case "index":
                var r = 0 === e.data.index ? 0 : e.data.index || a.index() * n.options.slidesToScroll;
                n.slideHandler(n.checkNavigable(r), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = i;
                    break
                }
                i = e[o]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            i = {};
        i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var o = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            o = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++o;
            else
                for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) o = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(t) {
        var e, i, o, s, n = this,
            a = 0;
        return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), a = i * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, a = (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, a = n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, a = (t + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, a = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + a, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) s.push(i), i = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, i, o = this;
        return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - i + t(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(t(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            i = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(t) {
                return t >= 0 && t < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            var s = o.indexOf(i);
            if (t(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + i,
                    tabindex: -1
                }), -1 !== s) {
                var n = "slick-slide-control" + e.instanceUid + s;
                t("#" + n).length && t(this).attr({
                    "aria-describedby": n
                })
            }
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            t(this).attr({
                role: "presentation"
            }), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
            tabindex: "0"
        }) : e.$slides.eq(s).removeAttr("tabindex");
        e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    i = t(this).attr("data-lazy"),
                    o = t(this).attr("data-srcset"),
                    s = t(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    a = document.createElement("img");
                a.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, i])
                    })
                }, a.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, i])
                }, a.src = i
            })
        }
        var i, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), i = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var a = o - 1, r = s, l = n.$slider.find(".slick-slide"), d = 0; d < n.options.slidesToScroll; d++) a < 0 && (a = n.slideCount - 1), i = (i = i.add(l.eq(a))).add(l.eq(r)), a--, r++;
        e(i), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var i = this;
        !i.unslicked && (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange)) && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, o, s, n, a, r = this,
            l = t("img[data-lazy]", r.$slider);
        l.length ? (i = l.first(), o = i.attr("data-lazy"), s = i.attr("data-srcset"), n = i.attr("data-sizes") || r.$slider.attr("data-sizes"), (a = document.createElement("img")).onload = function() {
            s && (i.attr("srcset", s), n && i.attr("sizes", n)), i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, o]), r.progressiveLazyLoad()
        }, a.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, o]), r.progressiveLazyLoad())
        }, a.src = o) : r.$slider.trigger("allImagesLoaded", [r])
    }, e.prototype.refresh = function(e) {
        var i, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, {
            currentSlide: i
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, i, o, s = this,
            n = s.options.responsive || null;
        if ("array" === t.type(n) && n.length) {
            for (e in s.respondTo = s.options.respondTo || "window", n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (i = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === i && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(i), s.breakpointSettings[i] = n[e].settings
                } s.breakpoints.sort(function(t, e) {
                return s.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var o = this;
        return "boolean" == typeof t ? t = !0 === (e = t) ? 0 : o.slideCount - 1 : t = !0 === e ? --t : t, !(o.slideCount < 1 || t < 0 || t > o.slideCount - 1) && (o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
    }, e.prototype.setCSS = function(t) {
        var e, i, o = this,
            s = {};
        !0 === o.options.rtl && (t = -t), e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px", s[o.positionProp] = t, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + i + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + i + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(o, s) {
            e = i.slideWidth * o * -1, !0 === i.options.rtl ? t(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, o, s, n, a = this,
            r = !1;
        if ("object" === t.type(arguments[0]) ? (o = arguments[0], r = arguments[1], n = "multiple") : "string" === t.type(arguments[0]) && (o = arguments[0], s = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) a.options[o] = s;
        else if ("multiple" === n) t.each(o, function(t, e) {
            a.options[t] = e
        });
        else if ("responsive" === n)
            for (i in s)
                if ("array" !== t.type(a.options.responsive)) a.options.responsive = [s[i]];
                else {
                    for (e = a.options.responsive.length - 1; e >= 0;) a.options.responsive[e].breakpoint === s[i].breakpoint && a.options.responsive.splice(e, 1), e--;
                    a.options.responsive.push(s[i])
                } r && (a.unload(), a.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, o, s, n = this;
        if (i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(t).addClass("slick-current"), !0 === n.options.centerMode) {
            var a = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (t >= e && t <= n.slideCount - 1 - e ? n.$slides.slice(t - e + a, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + t, i.slice(o - e + 1 + a, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : t === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(t, t + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + t : t, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - t < n.options.slidesToShow ? i.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, i, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(t) {
        t || this.autoPlay(), this.interrupted = t
    }, e.prototype.selectHandler = function(e) {
        var i = this,
            o = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        return s || (s = 0), i.slideCount <= i.options.slidesToShow ? void i.slideHandler(s, !1, !0) : void i.slideHandler(s)
    }, e.prototype.slideHandler = function(t, e, i) {
        var o, s, n, a, r, l = null,
            d = this;
        if (e = e || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === t)) return !1 === e && d.asNavFor(t), o = t, l = d.getLeft(o), a = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (t < 0 || t > d.getDotCount() * d.options.slidesToScroll) ? void(!1 === d.options.fade && (o = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(a, function() {
            d.postSlide(o)
        }) : d.postSlide(o))) : !1 === d.options.infinite && !0 === d.options.centerMode && (t < 0 || t > d.slideCount - d.options.slidesToScroll) ? void(!1 === d.options.fade && (o = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(a, function() {
            d.postSlide(o)
        }) : d.postSlide(o))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), s = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), n = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && ((r = (r = d.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), !0 === d.options.fade ? (!0 !== i ? (d.fadeSlideOut(n), d.fadeSlide(s, function() {
            d.postSlide(s)
        })) : d.postSlide(s), void d.animateHeight()) : void(!0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(l, function() {
            d.postSlide(s)
        }) : d.postSlide(s)))
    }, e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, i, o, s = this;
        return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(t) {
        var e, i, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (i = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != i && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, o, s, n, a, r = this;
        return n = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || r.scrolling || n && 1 !== n.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && a > 4 ? (r.scrolling = !0, !1) : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = a), i = r.swipeDirection(), void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && (r.swiping = !0, t.preventDefault()), s = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + o * s : r.swipeLeft = e + o * (r.$list.height() / r.listWidth) * s, !0 === r.options.verticalSwiping && (r.swipeLeft = e + o * s), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))))
    }, e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function() {
        var t, i, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            a = o.length;
        for (t = 0; t < a; t++)
            if ("object" == typeof s || void 0 === s ? o[t].slick = new e(o[t], s) : i = o[t].slick[s].apply(o[t].slick, n), void 0 !== i) return i;
        return o
    }
}),
function(t) {
    var e = -1,
        i = -1,
        o = function(t) {
            return parseFloat(t) || 0
        },
        s = function(e) {
            var i = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), i)
        },
        n = t.fn.matchHeight = function(e) {
            var i = s(e);
            if (i.remove) {
                var o = this;
                return this.css(i.property, ""), t.each(n._groups, function(t, e) {
                    e.elements = e.elements.not(o)
                }), this
            }
            return this.length <= 1 && !i.target ? this : (n._groups.push({
                elements: this,
                options: i
            }), n._apply(this, i), this)
        };
    n._groups = [], n._throttle = 80, n._maintainScroll = !1, n._beforeUpdate = null, n._afterUpdate = null, n._apply = function(e, i) {
        var a = s(i),
            r = t(e),
            l = [r],
            d = t(window).scrollTop(),
            c = t("html").outerHeight(!0),
            p = r.parents().filter(":hidden");
        return p.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }), p.css("display", "block"), a.byRow && !a.target && (r.each(function() {
            var e = t(this),
                i = "inline-block" === e.css("display") ? "inline-block" : "block";
            e.data("style-cache", e.attr("style")), e.css({
                display: i,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px"
            })
        }), l = function(e) {
            var i = t(e),
                s = null,
                n = [];
            return i.each(function() {
                var e = t(this),
                    i = e.offset().top - o(e.css("margin-top")),
                    a = n.length > 0 ? n[n.length - 1] : null;
                null === a ? n.push(e) : Math.floor(Math.abs(s - i)) <= 1 ? n[n.length - 1] = a.add(e) : n.push(e), s = i
            }), n
        }(r), r.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })), t.each(l, function(e, i) {
            var s = t(i),
                n = 0;
            if (a.target) n = a.target.outerHeight(!1);
            else {
                if (a.byRow && s.length <= 1) return void s.css(a.property, "");
                s.each(function() {
                    var e = t(this),
                        i = {
                            display: "inline-block" === e.css("display") ? "inline-block" : "block"
                        };
                    i[a.property] = "", e.css(i), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), e.css("display", "")
                })
            }
            s.each(function() {
                var e = t(this),
                    i = 0;
                a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (i += o(e.css("border-top-width")) + o(e.css("border-bottom-width")), i += o(e.css("padding-top")) + o(e.css("padding-bottom"))), e.css(a.property, n - i))
            })
        }), p.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }), n._maintainScroll && t(window).scrollTop(d / c * t("html").outerHeight(!0)), this
    }, n._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var i = t(this),
                o = i.attr("data-mh") || i.attr("data-match-height");
            e[o] = o in e ? e[o].add(i) : i
        }), t.each(e, function() {
            this.matchHeight(!0)
        })
    };
    var a = function(e) {
        n._beforeUpdate && n._beforeUpdate(e, n._groups), t.each(n._groups, function() {
            n._apply(this.elements, this.options)
        }), n._afterUpdate && n._afterUpdate(e, n._groups)
    };
    n._update = function(o, s) {
        if (s && "resize" === s.type) {
            var r = t(window).width();
            if (r === e) return;
            e = r
        }
        o ? -1 === i && (i = setTimeout(function() {
            a(s), i = -1
        }, n._throttle)) : a(s)
    }, t(n._applyDataApi), t(window).bind("load", function(t) {
        n._update(!1, t)
    }), t(window).bind("resize orientationchange", function(t) {
        n._update(!0, t)
    })
}(jQuery),
function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var o = document.head || document.getElementsByTagName("head")[0],
                s = document.createElement("div");
            s.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', o.appendChild(s.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var o = ".fitvidsignore";
            i.ignore && (o = o + ", " + i.ignore);
            var s = t(this).find(e.join(","));
            (s = (s = s.not("object object")).not(o)).each(function(e) {
                var i = t(this);
                if (!(i.parents(o).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                    i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                    var s = ("object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height()) / (isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10));
                    if (!i.attr("id")) {
                        var n = "fitvid" + e;
                        i.attr("id", n)
                    }
                    i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * s + "%"), i.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function(t) {
    var e = {
            common: {
                init: function() {
                    t(".js-flexslider").each(function(e, i) {
                        $slider = t(this), $slider.flexslider({
                            selector: ".slider_slides > .slider_slide",
                            controlNav: !1,
                            directionNav: !1
                        }), $slider.addClass("slider-active"), $slider.find(".js-flex-next").on("click", function(t) {
                            t.preventDefault(), $slider.flexslider("next")
                        }), $slider.find(".js-flex-prev").on("click", function(t) {
                            t.preventDefault(), $slider.flexslider("prev")
                        })
                    }), t(".js-matchHeight").matchHeight(), t(".js-fitVids").fitVids(), t(".u-editorContent").fitVids(), t(".navBar_menu").on("show.bs.collapse", function() {
                        t(this).closest(".navBar").addClass("show")
                    }), t(".navBar_menu").on("hidden.bs.collapse", function() {
                        t(this).closest(".navBar").removeClass("show")
                    }), t(".js-testimonialSlider").slick({
                        infinite: !0,
                        arrows: !0,
                        dots: !1,
                        rows: 0,
                        speed: 800
                    }), t(".js-blogSlider").slick({
                        infinite: !0,
                        arrows: !0,
                        dots: !1,
                        rows: 0,
                        speed: 800,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }), t(".js-logosSlider").slick({
                        infinite: !0,
                        arrows: !0,
                        dots: !1,
                        rows: 0,
                        speed: 400,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }), t(".js-newsSlider").slick({
                        infinite: !0,
                        arrows: !0,
                        dots: !1,
                        rows: 0,
                        speed: 400,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }), t(".infoBar .gForm textarea").attr("autocomplete", "off")
                },
                finalize: function() {}
            },
            home: {
                init: function() {},
                finalize: function() {}
            },
            about_us: {
                init: function() {}
            }
        },
        i = {
            fire: function(t, i, o) {
                var s = e;
                i = void 0 === i ? "init" : i, "" !== t && s[t] && "function" == typeof s[t][i] && s[t][i](o)
            },
            loadEvents: function() {
                i.fire("common"), t.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(t, e) {
                    i.fire(e), i.fire(e, "finalize")
                }), i.fire("common", "finalize")
            }
        };
    t(document).ready(i.loadEvents)
}(jQuery);