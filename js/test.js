!(function (t) {
	var e = {};
	function n(i) {
		if (e[i]) return e[i].exports;
		var r = (e[i] = {
			i: i,
			l: !1,
			exports: {},
		});
		return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, i) {
			n.o(t, e) ||
				Object.defineProperty(t, e, {
					enumerable: !0,
					get: i,
				});
		}),
		(n.r = function (t) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(t, '__esModule', {
					value: !0,
				});
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if (
				(n.r(i),
				Object.defineProperty(i, 'default', {
					enumerable: !0,
					value: t,
				}),
				2 & e && 'string' != typeof t)
			)
				for (var r in t)
					n.d(
						i,
						r,
						function (e) {
							return t[e];
						}.bind(null, r),
					);
			return i;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, 'a', e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = './'),
		n((n.s = 4));
})([
	function (t, e, n) {
		'use strict';
		(function (t) {
			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function i(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					(i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
				}
			}
			function r(t, e, n) {
				return e && i(t.prototype, e), n && i(t, n), t;
			}
			function o(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = n),
					t
				);
			}
			function s(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					e &&
						(i = i.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, i);
				}
				return n;
			}
			function a(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? s(Object(n), !0).forEach(function (e) {
								o(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: s(Object(n)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
						  });
				}
				return t;
			}
			function l(t, e) {
				if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
				(t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0,
					},
				})),
					e && h(t, e);
			}
			function c(t) {
				return (c = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function h(t, e) {
				return (h =
					Object.setPrototypeOf ||
					function (t, e) {
						return (t.__proto__ = e), t;
					})(t, e);
			}
			function u(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t;
			}
			function d(t, e) {
				return !e || ('object' != typeof e && 'function' != typeof e) ? u(t) : e;
			}
			function p(t) {
				var e = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
					} catch (t) {
						return !1;
					}
				})();
				return function () {
					var n,
						i = c(t);
					if (e) {
						var r = c(this).constructor;
						n = Reflect.construct(i, arguments, r);
					} else n = i.apply(this, arguments);
					return d(this, n);
				};
			}
			function f(t, e, n) {
				return (f =
					'undefined' != typeof Reflect && Reflect.get
						? Reflect.get
						: function (t, e, n) {
								var i = (function (t, e) {
									for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)); );
									return t;
								})(t, e);
								if (i) {
									var r = Object.getOwnPropertyDescriptor(i, e);
									return r.get ? r.get.call(n) : r.value;
								}
						  })(t, e, n || t);
			}
			function m(t, e) {
				return (
					(function (t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function (t, e) {
						if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t))) return;
						var n = [],
							i = !0,
							r = !1,
							o = void 0;
						try {
							for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
						} catch (t) {
							(r = !0), (o = t);
						} finally {
							try {
								i || null == a.return || a.return();
							} finally {
								if (r) throw o;
							}
						}
						return n;
					})(t, e) ||
					v(t, e) ||
					(function () {
						throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
					})()
				);
			}
			function g(t) {
				return (
					(function (t) {
						if (Array.isArray(t)) return y(t);
					})(t) ||
					(function (t) {
						if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
					})(t) ||
					v(t) ||
					(function () {
						throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
					})()
				);
			}
			function v(t, e) {
				if (t) {
					if ('string' == typeof t) return y(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					return (
						'Object' === n && t.constructor && (n = t.constructor.name),
						'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0
					);
				}
			}
			function y(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
				return i;
			}
			var x = {
					el: document,
					name: 'scroll',
					offset: [0, 0],
					repeat: !1,
					smooth: !1,
					direction: 'vertical',
					gestureDirection: 'vertical',
					reloadOnContextChange: !1,
					lerp: 0.1,
					class: 'is-inview',
					scrollbarContainer: !1,
					scrollbarClass: 'c-scrollbar',
					scrollingClass: 'has-scroll-scrolling',
					draggingClass: 'has-scroll-dragging',
					smoothClass: 'has-scroll-smooth',
					initClass: 'has-scroll-init',
					getSpeed: !1,
					getDirection: !1,
					scrollFromAnywhere: !1,
					multiplier: 1,
					firefoxMultiplier: 50,
					touchMultiplier: 2,
					resetNativeScroll: !0,
					tablet: {
						smooth: !1,
						direction: 'vertical',
						gestureDirection: 'vertical',
						breakpoint: 1024,
					},
					smartphone: {
						smooth: !1,
						direction: 'vertical',
						gestureDirection: 'vertical',
					},
				},
				_ = (function () {
					function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						n(this, t),
							Object.assign(this, x, e),
							(this.smartphone = x.smartphone),
							e.smartphone && Object.assign(this.smartphone, e.smartphone),
							(this.tablet = x.tablet),
							e.tablet && Object.assign(this.tablet, e.tablet),
							(this.namespace = 'locomotive'),
							(this.html = document.documentElement),
							(this.windowHeight = window.innerHeight),
							(this.windowWidth = window.innerWidth),
							(this.windowMiddle = {
								x: this.windowWidth / 2,
								y: this.windowHeight / 2,
							}),
							(this.els = {}),
							(this.currentElements = {}),
							(this.listeners = {}),
							(this.hasScrollTicking = !1),
							(this.hasCallEventSet = !1),
							(this.checkScroll = this.checkScroll.bind(this)),
							(this.checkResize = this.checkResize.bind(this)),
							(this.checkEvent = this.checkEvent.bind(this)),
							(this.instance = {
								scroll: {
									x: 0,
									y: 0,
								},
								limit: {
									x: this.html.offsetHeight,
									y: this.html.offsetHeight,
								},
								currentElements: this.currentElements,
							}),
							this.isMobile ? (this.isTablet ? (this.context = 'tablet') : (this.context = 'smartphone')) : (this.context = 'desktop'),
							this.isMobile && (this.direction = this[this.context].direction),
							'horizontal' === this.direction ? (this.directionAxis = 'x') : (this.directionAxis = 'y'),
							this.getDirection && (this.instance.direction = null),
							this.getDirection && (this.instance.speed = 0),
							this.html.classList.add(this.initClass),
							window.addEventListener('resize', this.checkResize, !1);
					}
					return (
						r(t, [
							{
								key: 'init',
								value: function () {
									this.initEvents();
								},
							},
							{
								key: 'checkScroll',
								value: function () {
									this.dispatchScroll();
								},
							},
							{
								key: 'checkResize',
								value: function () {
									var t = this;
									this.resizeTick ||
										((this.resizeTick = !0),
										requestAnimationFrame(function () {
											t.resize(), (t.resizeTick = !1);
										}));
								},
							},
							{
								key: 'resize',
								value: function () {},
							},
							{
								key: 'checkContext',
								value: function () {
									if (this.reloadOnContextChange) {
										(this.isMobile =
											/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
											('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1) ||
											this.windowWidth < this.tablet.breakpoint),
											(this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint);
										var t = this.context;
										if ((this.isMobile ? (this.isTablet ? (this.context = 'tablet') : (this.context = 'smartphone')) : (this.context = 'desktop'), t != this.context))
											('desktop' == t ? this.smooth : this[t].smooth) != ('desktop' == this.context ? this.smooth : this[this.context].smooth) && window.location.reload();
									}
								},
							},
							{
								key: 'initEvents',
								value: function () {
									var t = this;
									(this.scrollToEls = this.el.querySelectorAll('[data-'.concat(this.name, '-to]'))),
										(this.setScrollTo = this.setScrollTo.bind(this)),
										this.scrollToEls.forEach(function (e) {
											e.addEventListener('click', t.setScrollTo, !1);
										});
								},
							},
							{
								key: 'setScrollTo',
								value: function (t) {
									t.preventDefault(),
										this.scrollTo(t.currentTarget.getAttribute('data-'.concat(this.name, '-href')) || t.currentTarget.getAttribute('href'), {
											offset: t.currentTarget.getAttribute('data-'.concat(this.name, '-offset')),
										});
								},
							},
							{
								key: 'addElements',
								value: function () {},
							},
							{
								key: 'detectElements',
								value: function (t) {
									var e = this,
										n = this.instance.scroll.y,
										i = n + this.windowHeight,
										r = this.instance.scroll.x,
										o = r + this.windowWidth;
									Object.entries(this.els).forEach(function (s) {
										var a = m(s, 2),
											l = a[0],
											c = a[1];
										if ((!c || (c.inView && !t) || ('horizontal' === e.direction ? o >= c.left && r < c.right && e.setInView(c, l) : i >= c.top && n < c.bottom && e.setInView(c, l)), c && c.inView))
											if ('horizontal' === e.direction) {
												var h = c.right - c.left;
												(c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth)), (o < c.left || r > c.right) && e.setOutOfView(c, l);
											} else {
												var u = c.bottom - c.top;
												(c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (u + e.windowHeight)), (i < c.top || n > c.bottom) && e.setOutOfView(c, l);
											}
									}),
										(this.hasScrollTicking = !1);
								},
							},
							{
								key: 'setInView',
								value: function (t, e) {
									(this.els[e].inView = !0),
										t.el.classList.add(t.class),
										(this.currentElements[e] = t),
										t.call && this.hasCallEventSet && (this.dispatchCall(t, 'enter'), t.repeat || (this.els[e].call = !1));
								},
							},
							{
								key: 'setOutOfView',
								value: function (t, e) {
									var n = this;
									(this.els[e].inView = !1),
										Object.keys(this.currentElements).forEach(function (t) {
											t === e && delete n.currentElements[t];
										}),
										t.call && this.hasCallEventSet && this.dispatchCall(t, 'exit'),
										t.repeat && t.el.classList.remove(t.class);
								},
							},
							{
								key: 'dispatchCall',
								value: function (t, e) {
									(this.callWay = e),
										(this.callValue = t.call.split(',').map(function (t) {
											return t.trim();
										})),
										(this.callObj = t),
										1 == this.callValue.length && (this.callValue = this.callValue[0]);
									var n = new Event(this.namespace + 'call');
									this.el.dispatchEvent(n);
								},
							},
							{
								key: 'dispatchScroll',
								value: function () {
									var t = new Event(this.namespace + 'scroll');
									this.el.dispatchEvent(t);
								},
							},
							{
								key: 'setEvents',
								value: function (t, e) {
									this.listeners[t] || (this.listeners[t] = []);
									var n = this.listeners[t];
									n.push(e), 1 === n.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), 'call' === t && ((this.hasCallEventSet = !0), this.detectElements(!0));
								},
							},
							{
								key: 'unsetEvents',
								value: function (t, e) {
									if (this.listeners[t]) {
										var n = this.listeners[t],
											i = n.indexOf(e);
										i < 0 || (n.splice(i, 1), 0 === n.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1));
									}
								},
							},
							{
								key: 'checkEvent',
								value: function (t) {
									var e = this,
										n = t.type.replace(this.namespace, ''),
										i = this.listeners[n];
									i &&
										0 !== i.length &&
										i.forEach(function (t) {
											switch (n) {
												case 'scroll':
													return t(e.instance);
												case 'call':
													return t(e.callValue, e.callWay, e.callObj);
												default:
													return t();
											}
										});
								},
							},
							{
								key: 'startScroll',
								value: function () {},
							},
							{
								key: 'stopScroll',
								value: function () {},
							},
							{
								key: 'setScroll',
								value: function (t, e) {
									this.instance.scroll = {
										x: 0,
										y: 0,
									};
								},
							},
							{
								key: 'destroy',
								value: function () {
									var t = this;
									window.removeEventListener('resize', this.checkResize, !1),
										Object.keys(this.listeners).forEach(function (e) {
											t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
										}),
										(this.listeners = {}),
										this.scrollToEls.forEach(function (e) {
											e.removeEventListener('click', t.setScrollTo, !1);
										}),
										this.html.classList.remove(this.initClass);
								},
							},
						]),
						t
					);
				})(),
				b = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== t ? t : 'undefined' != typeof self ? self : {};
			function w(t, e) {
				return (
					t(
						(e = {
							exports: {},
						}),
						e.exports,
					),
					e.exports
				);
			}
			var M = w(function (t, e) {
					t.exports = {
						polyfill: function () {
							var t = window,
								e = document;
							if (!('scrollBehavior' in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
								var n,
									i = t.HTMLElement || t.Element,
									r = {
										scroll: t.scroll || t.scrollTo,
										scrollBy: t.scrollBy,
										elementScroll: i.prototype.scroll || a,
										scrollIntoView: i.prototype.scrollIntoView,
									},
									o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
									s = ((n = t.navigator.userAgent), new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(n) ? 1 : 0);
								(t.scroll = t.scrollTo = function () {
									void 0 !== arguments[0] &&
										(!0 !== l(arguments[0])
											? f.call(
													t,
													e.body,
													void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset,
													void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset,
											  )
											: r.scroll.call(
													t,
													void 0 !== arguments[0].left ? arguments[0].left : 'object' != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset,
													void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset,
											  ));
								}),
									(t.scrollBy = function () {
										void 0 !== arguments[0] &&
											(l(arguments[0])
												? r.scrollBy.call(
														t,
														void 0 !== arguments[0].left ? arguments[0].left : 'object' != typeof arguments[0] ? arguments[0] : 0,
														void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0,
												  )
												: f.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)));
									}),
									(i.prototype.scroll = i.prototype.scrollTo = function () {
										if (void 0 !== arguments[0])
											if (!0 !== l(arguments[0])) {
												var t = arguments[0].left,
													e = arguments[0].top;
												f.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e);
											} else {
												if ('number' == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError('Value could not be converted');
												r.elementScroll.call(
													this,
													void 0 !== arguments[0].left ? ~~arguments[0].left : 'object' != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft,
													void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop,
												);
											}
									}),
									(i.prototype.scrollBy = function () {
										void 0 !== arguments[0] &&
											(!0 !== l(arguments[0])
												? this.scroll({
														left: ~~arguments[0].left + this.scrollLeft,
														top: ~~arguments[0].top + this.scrollTop,
														behavior: arguments[0].behavior,
												  })
												: r.elementScroll.call(
														this,
														void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
														void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop,
												  ));
									}),
									(i.prototype.scrollIntoView = function () {
										if (!0 !== l(arguments[0])) {
											var n = d(this),
												i = n.getBoundingClientRect(),
												o = this.getBoundingClientRect();
											n !== e.body
												? (f.call(this, n, n.scrollLeft + o.left - i.left, n.scrollTop + o.top - i.top),
												  'fixed' !== t.getComputedStyle(n).position &&
														t.scrollBy({
															left: i.left,
															top: i.top,
															behavior: 'smooth',
														}))
												: t.scrollBy({
														left: o.left,
														top: o.top,
														behavior: 'smooth',
												  });
										} else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
									});
							}
							function a(t, e) {
								(this.scrollLeft = t), (this.scrollTop = e);
							}
							function l(t) {
								if (null === t || 'object' != typeof t || void 0 === t.behavior || 'auto' === t.behavior || 'instant' === t.behavior) return !0;
								if ('object' == typeof t && 'smooth' === t.behavior) return !1;
								throw new TypeError('behavior member of ScrollOptions ' + t.behavior + ' is not a valid value for enumeration ScrollBehavior.');
							}
							function c(t, e) {
								return 'Y' === e ? t.clientHeight + s < t.scrollHeight : 'X' === e ? t.clientWidth + s < t.scrollWidth : void 0;
							}
							function h(e, n) {
								var i = t.getComputedStyle(e, null)['overflow' + n];
								return 'auto' === i || 'scroll' === i;
							}
							function u(t) {
								var e = c(t, 'Y') && h(t, 'Y'),
									n = c(t, 'X') && h(t, 'X');
								return e || n;
							}
							function d(t) {
								for (; t !== e.body && !1 === u(t); ) t = t.parentNode || t.host;
								return t;
							}
							function p(e) {
								var n,
									i,
									r,
									s,
									a = (o() - e.startTime) / 468;
								(s = a = a > 1 ? 1 : a),
									(n = 0.5 * (1 - Math.cos(Math.PI * s))),
									(i = e.startX + (e.x - e.startX) * n),
									(r = e.startY + (e.y - e.startY) * n),
									e.method.call(e.scrollable, i, r),
									(i === e.x && r === e.y) || t.requestAnimationFrame(p.bind(t, e));
							}
							function f(n, i, s) {
								var l,
									c,
									h,
									u,
									d = o();
								n === e.body ? ((l = t), (c = t.scrollX || t.pageXOffset), (h = t.scrollY || t.pageYOffset), (u = r.scroll)) : ((l = n), (c = n.scrollLeft), (h = n.scrollTop), (u = a)),
									p({
										scrollable: l,
										method: u,
										startTime: d,
										startX: c,
										startY: h,
										x: i,
										y: s,
									});
							}
						},
					};
				}),
				S =
					(M.polyfill,
					(function (t) {
						l(i, t);
						var e = p(i);
						function i() {
							var t,
								r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							return (
								n(this, i),
								(t = e.call(this, r)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = 'manual'), window.scrollTo(0, 0)),
								window.addEventListener('scroll', t.checkScroll, !1),
								void 0 === window.smoothscrollPolyfill && ((window.smoothscrollPolyfill = M), window.smoothscrollPolyfill.polyfill()),
								t
							);
						}
						return (
							r(i, [
								{
									key: 'init',
									value: function () {
										(this.instance.scroll.y = window.pageYOffset), this.addElements(), this.detectElements(), f(c(i.prototype), 'init', this).call(this);
									},
								},
								{
									key: 'checkScroll',
									value: function () {
										var t = this;
										f(c(i.prototype), 'checkScroll', this).call(this),
											this.getDirection && this.addDirection(),
											this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
											(this.instance.scroll.y = window.pageYOffset),
											Object.entries(this.els).length &&
												(this.hasScrollTicking ||
													(requestAnimationFrame(function () {
														t.detectElements();
													}),
													(this.hasScrollTicking = !0)));
									},
								},
								{
									key: 'addDirection',
									value: function () {
										window.pageYOffset > this.instance.scroll.y
											? 'down' !== this.instance.direction && (this.instance.direction = 'down')
											: window.pageYOffset < this.instance.scroll.y && 'up' !== this.instance.direction && (this.instance.direction = 'up');
									},
								},
								{
									key: 'addSpeed',
									value: function () {
										window.pageYOffset != this.instance.scroll.y
											? (this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs))
											: (this.instance.speed = 0);
									},
								},
								{
									key: 'resize',
									value: function () {
										Object.entries(this.els).length && ((this.windowHeight = window.innerHeight), this.updateElements());
									},
								},
								{
									key: 'addElements',
									value: function () {
										var t = this;
										(this.els = {}),
											this.el.querySelectorAll('[data-' + this.name + ']').forEach(function (e, n) {
												var i = e.getBoundingClientRect(),
													r = e.dataset[t.name + 'Class'] || t.class,
													o = 'string' == typeof e.dataset[t.name + 'Id'] ? e.dataset[t.name + 'Id'] : n,
													s = i.top + t.instance.scroll.y,
													a = i.left,
													l = i.right,
													c = s + e.offsetHeight,
													h = 'string' == typeof e.dataset[t.name + 'Offset'] ? e.dataset[t.name + 'Offset'].split(',') : t.offset,
													u = e.dataset[t.name + 'Repeat'],
													d = e.dataset[t.name + 'Call'];
												u = 'false' != u && (null != u || t.repeat);
												var p = t.getRelativeOffset(h),
													f = {
														el: e,
														id: o,
														class: r,
														top: s + p[0],
														bottom: c - p[1],
														left: a,
														right: l,
														offset: h,
														progress: 0,
														repeat: u,
														inView: !1,
														call: d,
													};
												(t.els[o] = f), e.classList.contains(r) && t.setInView(t.els[o], o);
											});
									},
								},
								{
									key: 'updateElements',
									value: function () {
										var t = this;
										Object.entries(this.els).forEach(function (e) {
											var n = m(e, 2),
												i = n[0],
												r = n[1],
												o = r.el.getBoundingClientRect().top + t.instance.scroll.y,
												s = o + r.el.offsetHeight,
												a = t.getRelativeOffset(r.offset);
											(t.els[i].top = o + a[0]), (t.els[i].bottom = s - a[1]);
										}),
											(this.hasScrollTicking = !1);
									},
								},
								{
									key: 'getRelativeOffset',
									value: function (t) {
										var e = [0, 0];
										if (t)
											for (var n = 0; n < t.length; n++)
												'string' == typeof t[n] ? (t[n].includes('%') ? (e[n] = parseInt((t[n].replace('%', '') * this.windowHeight) / 100)) : (e[n] = parseInt(t[n]))) : (e[n] = t[n]);
										return e;
									},
								},
								{
									key: 'scrollTo',
									value: function (t) {
										var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
											n = parseInt(e.offset) || 0,
											i = !!e.callback && e.callback;
										if ('string' == typeof t) {
											if ('top' === t) t = this.html;
											else if ('bottom' === t) t = this.html.offsetHeight - window.innerHeight;
											else if (!(t = document.querySelector(t))) return;
										} else if ('number' == typeof t) t = parseInt(t);
										else if (!t || !t.tagName) return void console.warn('`target` parameter is not valid');
										if (((n = 'number' != typeof t ? t.getBoundingClientRect().top + n + this.instance.scroll.y : t + n), i)) {
											n = n.toFixed();
											var r = function t() {
												window.pageYOffset.toFixed() === n && (window.removeEventListener('scroll', t), i());
											};
											window.addEventListener('scroll', r);
										}
										window.scrollTo({
											top: n,
											behavior: 'smooth',
										});
									},
								},
								{
									key: 'update',
									value: function () {
										this.addElements(), this.detectElements();
									},
								},
								{
									key: 'destroy',
									value: function () {
										f(c(i.prototype), 'destroy', this).call(this), window.removeEventListener('scroll', this.checkScroll, !1);
									},
								},
							]),
							i
						);
					})(_)),
				T = Object.getOwnPropertySymbols,
				E = Object.prototype.hasOwnProperty,
				A = Object.prototype.propertyIsEnumerable;
			function L(t) {
				if (null == t) throw new TypeError('Object.assign cannot be called with null or undefined');
				return Object(t);
			}
			var R = (function () {
				try {
					if (!Object.assign) return !1;
					var t = new String('abc');
					if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1;
					for (var e = {}, n = 0; n < 10; n++) e['_' + String.fromCharCode(n)] = n;
					if (
						'0123456789' !==
						Object.getOwnPropertyNames(e)
							.map(function (t) {
								return e[t];
							})
							.join('')
					)
						return !1;
					var i = {};
					return (
						'abcdefghijklmnopqrst'.split('').forEach(function (t) {
							i[t] = t;
						}),
						'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, i)).join('')
					);
				} catch (t) {
					return !1;
				}
			})()
				? Object.assign
				: function (t, e) {
						for (var n, i, r = L(t), o = 1; o < arguments.length; o++) {
							for (var s in (n = Object(arguments[o]))) E.call(n, s) && (r[s] = n[s]);
							if (T) {
								i = T(n);
								for (var a = 0; a < i.length; a++) A.call(n, i[a]) && (r[i[a]] = n[i[a]]);
							}
						}
						return r;
				  };
			function P() {}
			P.prototype = {
				on: function (t, e, n) {
					var i = this.e || (this.e = {});
					return (
						(i[t] || (i[t] = [])).push({
							fn: e,
							ctx: n,
						}),
						this
					);
				},
				once: function (t, e, n) {
					var i = this;
					function r() {
						i.off(t, r), e.apply(n, arguments);
					}
					return (r._ = e), this.on(t, r, n);
				},
				emit: function (t) {
					for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, e);
					return this;
				},
				off: function (t, e) {
					var n = this.e || (this.e = {}),
						i = n[t],
						r = [];
					if (i && e) for (var o = 0, s = i.length; o < s; o++) i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
					return r.length ? (n[t] = r) : delete n[t], this;
				},
			};
			var C = P,
				O = w(function (t, e) {
					(function () {
						(null !== e ? e : this).Lethargy = (function () {
							function t(t, e, n, i) {
								(this.stability = null != t ? Math.abs(t) : 8),
									(this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
									(this.tolerance = null != n ? 1 + Math.abs(n) : 1.1),
									(this.delay = null != i ? i : 150),
									(this.lastUpDeltas = function () {
										var t, e, n;
										for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
										return n;
									}.call(this)),
									(this.lastDownDeltas = function () {
										var t, e, n;
										for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
										return n;
									}.call(this)),
									(this.deltasTimestamp = function () {
										var t, e, n;
										for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
										return n;
									}.call(this));
							}
							return (
								(t.prototype.check = function (t) {
									var e;
									return (
										null != (t = t.originalEvent || t).wheelDelta ? (e = t.wheelDelta) : null != t.deltaY ? (e = -40 * t.deltaY) : (null == t.detail && 0 !== t.detail) || (e = -40 * t.detail),
										this.deltasTimestamp.push(Date.now()),
										this.deltasTimestamp.shift(),
										e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
									);
								}),
								(t.prototype.isInertia = function (t) {
									var e, n, i, r, o, s, a;
									return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
										? t
										: !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) &&
												((i = e.slice(0, this.stability)),
												(n = e.slice(this.stability, 2 * this.stability)),
												(a = i.reduce(function (t, e) {
													return t + e;
												})),
												(o = n.reduce(function (t, e) {
													return t + e;
												})),
												(s = a / i.length),
												(r = o / n.length),
												Math.abs(s) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t);
								}),
								(t.prototype.showLastUpDeltas = function () {
									return this.lastUpDeltas;
								}),
								(t.prototype.showLastDownDeltas = function () {
									return this.lastDownDeltas;
								}),
								t
							);
						})();
					}.call(b));
				}),
				D = {
					hasWheelEvent: 'onwheel' in document,
					hasMouseWheelEvent: 'onmousewheel' in document,
					hasTouch: 'ontouchstart' in window || window.TouchEvent || (window.DocumentTouch && document instanceof DocumentTouch),
					hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
					hasPointer: !!window.navigator.msPointerEnabled,
					hasKeyDown: 'onkeydown' in document,
					isFirefox: navigator.userAgent.indexOf('Firefox') > -1,
				},
				I = Object.prototype.toString,
				N = Object.prototype.hasOwnProperty;
			function z(t, e) {
				return function () {
					return t.apply(e, arguments);
				};
			}
			var B = O.Lethargy,
				k = 'virtualscroll',
				F = W,
				U = 37,
				H = 38,
				G = 39,
				V = 40,
				j = 32;
			function W(t) {
				!(function (t) {
					if (!t) return console.warn('bindAll requires at least one argument.');
					var e = Array.prototype.slice.call(arguments, 1);
					if (0 === e.length) for (var n in t) N.call(t, n) && 'function' == typeof t[n] && '[object Function]' == I.call(t[n]) && e.push(n);
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						t[r] = z(t[r], t);
					}
				})(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown'),
					(this.el = window),
					t && t.el && ((this.el = t.el), delete t.el),
					(this.options = R(
						{
							mouseMultiplier: 1,
							touchMultiplier: 2,
							firefoxMultiplier: 15,
							keyStep: 120,
							preventTouch: !1,
							unpreventTouchClass: 'vs-touchmove-allowed',
							limitInertia: !1,
							useKeyboard: !0,
							useTouch: !0,
						},
						t,
					)),
					this.options.limitInertia && (this._lethargy = new B()),
					(this._emitter = new C()),
					(this._event = {
						y: 0,
						x: 0,
						deltaX: 0,
						deltaY: 0,
					}),
					(this.touchStartX = null),
					(this.touchStartY = null),
					(this.bodyTouchAction = null),
					void 0 !== this.options.passive &&
						(this.listenerOptions = {
							passive: this.options.passive,
						});
			}
			function q(t, e, n) {
				return (1 - n) * t + n * e;
			}
			function X(t) {
				var e = {};
				if (window.getComputedStyle) {
					var n = getComputedStyle(t),
						i = n.transform || n.webkitTransform || n.mozTransform,
						r = i.match(/^matrix3d\((.+)\)$/);
					return (
						r
							? ((e.x = r ? parseFloat(r[1].split(', ')[12]) : 0), (e.y = r ? parseFloat(r[1].split(', ')[13]) : 0))
							: ((r = i.match(/^matrix\((.+)\)$/)), (e.x = r ? parseFloat(r[1].split(', ')[4]) : 0), (e.y = r ? parseFloat(r[1].split(', ')[5]) : 0)),
						e
					);
				}
			}
			function Y(t) {
				for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
				return e;
			}
			(W.prototype._notify = function (t) {
				var e = this._event;
				(e.x += e.deltaX),
					(e.y += e.deltaY),
					this._emitter.emit(k, {
						x: e.x,
						y: e.y,
						deltaX: e.deltaX,
						deltaY: e.deltaY,
						originalEvent: t,
					});
			}),
				(W.prototype._onWheel = function (t) {
					var e = this.options;
					if (!this._lethargy || !1 !== this._lethargy.check(t)) {
						var n = this._event;
						(n.deltaX = t.wheelDeltaX || -1 * t.deltaX),
							(n.deltaY = t.wheelDeltaY || -1 * t.deltaY),
							D.isFirefox && 1 == t.deltaMode && ((n.deltaX *= e.firefoxMultiplier), (n.deltaY *= e.firefoxMultiplier)),
							(n.deltaX *= e.mouseMultiplier),
							(n.deltaY *= e.mouseMultiplier),
							this._notify(t);
					}
				}),
				(W.prototype._onMouseWheel = function (t) {
					if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
						var e = this._event;
						(e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0), (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta), this._notify(t);
					}
				}),
				(W.prototype._onTouchStart = function (t) {
					var e = t.targetTouches ? t.targetTouches[0] : t;
					(this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
				}),
				(W.prototype._onTouchMove = function (t) {
					var e = this.options;
					e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
					var n = this._event,
						i = t.targetTouches ? t.targetTouches[0] : t;
					(n.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier),
						(n.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier),
						(this.touchStartX = i.pageX),
						(this.touchStartY = i.pageY),
						this._notify(t);
				}),
				(W.prototype._onKeyDown = function (t) {
					var e = this._event;
					e.deltaX = e.deltaY = 0;
					var n = window.innerHeight - 40;
					switch (t.keyCode) {
						case U:
						case H:
							e.deltaY = this.options.keyStep;
							break;
						case G:
						case V:
							e.deltaY = -this.options.keyStep;
							break;
						case t.shiftKey:
							e.deltaY = n;
							break;
						case j:
							e.deltaY = -n;
							break;
						default:
							return;
					}
					this._notify(t);
				}),
				(W.prototype._bind = function () {
					D.hasWheelEvent && this.el.addEventListener('wheel', this._onWheel, this.listenerOptions),
						D.hasMouseWheelEvent && this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions),
						D.hasTouch &&
							this.options.useTouch &&
							(this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions), this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions)),
						D.hasPointer &&
							D.hasTouchWin &&
							((this.bodyTouchAction = document.body.style.msTouchAction),
							(document.body.style.msTouchAction = 'none'),
							this.el.addEventListener('MSPointerDown', this._onTouchStart, !0),
							this.el.addEventListener('MSPointerMove', this._onTouchMove, !0)),
						D.hasKeyDown && this.options.useKeyboard && document.addEventListener('keydown', this._onKeyDown);
				}),
				(W.prototype._unbind = function () {
					D.hasWheelEvent && this.el.removeEventListener('wheel', this._onWheel),
						D.hasMouseWheelEvent && this.el.removeEventListener('mousewheel', this._onMouseWheel),
						D.hasTouch && (this.el.removeEventListener('touchstart', this._onTouchStart), this.el.removeEventListener('touchmove', this._onTouchMove)),
						D.hasPointer &&
							D.hasTouchWin &&
							((document.body.style.msTouchAction = this.bodyTouchAction),
							this.el.removeEventListener('MSPointerDown', this._onTouchStart, !0),
							this.el.removeEventListener('MSPointerMove', this._onTouchMove, !0)),
						D.hasKeyDown && this.options.useKeyboard && document.removeEventListener('keydown', this._onKeyDown);
				}),
				(W.prototype.on = function (t, e) {
					this._emitter.on(k, t, e);
					var n = this._emitter.e;
					n && n[k] && 1 === n[k].length && this._bind();
				}),
				(W.prototype.off = function (t, e) {
					this._emitter.off(k, t, e);
					var n = this._emitter.e;
					(!n[k] || n[k].length <= 0) && this._unbind();
				}),
				(W.prototype.reset = function () {
					var t = this._event;
					(t.x = 0), (t.y = 0);
				}),
				(W.prototype.destroy = function () {
					this._emitter.off(), this._unbind();
				});
			var Z = 'function' == typeof Float32Array;
			function J(t, e) {
				return 1 - 3 * e + 3 * t;
			}
			function K(t, e) {
				return 3 * e - 6 * t;
			}
			function Q(t) {
				return 3 * t;
			}
			function $(t, e, n) {
				return ((J(e, n) * t + K(e, n)) * t + Q(e)) * t;
			}
			function tt(t, e, n) {
				return 3 * J(e, n) * t * t + 2 * K(e, n) * t + Q(e);
			}
			function et(t) {
				return t;
			}
			var nt = function (t, e, n, i) {
					if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error('bezier x values must be in [0, 1] range');
					if (t === e && n === i) return et;
					for (var r = Z ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o) r[o] = $(0.1 * o, t, n);
					function s(e) {
						for (var i = 0, o = 1; 10 !== o && r[o] <= e; ++o) i += 0.1;
						--o;
						var s = i + 0.1 * ((e - r[o]) / (r[o + 1] - r[o])),
							a = tt(s, t, n);
						return a >= 0.001
							? (function (t, e, n, i) {
									for (var r = 0; r < 4; ++r) {
										var o = tt(e, n, i);
										if (0 === o) return e;
										e -= ($(e, n, i) - t) / o;
									}
									return e;
							  })(e, s, t, n)
							: 0 === a
							? s
							: (function (t, e, n, i, r) {
									var o,
										s,
										a = 0;
									do {
										(o = $((s = e + (n - e) / 2), i, r) - t) > 0 ? (n = s) : (e = s);
									} while (Math.abs(o) > 1e-7 && ++a < 10);
									return s;
							  })(e, i, i + 0.1, t, n);
					}
					return function (t) {
						return 0 === t ? 0 : 1 === t ? 1 : $(s(t), e, i);
					};
				},
				it = 38,
				rt = 40,
				ot = 32,
				st = 9,
				at = 33,
				lt = 34,
				ct = 36,
				ht = 35,
				ut = (function (t) {
					l(i, t);
					var e = p(i);
					function i() {
						var t,
							r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return (
							n(this, i),
							history.scrollRestoration && (history.scrollRestoration = 'manual'),
							window.scrollTo(0, 0),
							(t = e.call(this, r)).inertia && (t.lerp = 0.1 * t.inertia),
							(t.isScrolling = !1),
							(t.isDraggingScrollbar = !1),
							(t.isTicking = !1),
							(t.hasScrollTicking = !1),
							(t.parallaxElements = {}),
							(t.stop = !1),
							(t.scrollbarContainer = r.scrollbarContainer),
							(t.checkKey = t.checkKey.bind(u(t))),
							window.addEventListener('keydown', t.checkKey, !1),
							t
						);
					}
					return (
						r(i, [
							{
								key: 'init',
								value: function () {
									var t = this;
									this.html.classList.add(this.smoothClass),
										this.html.setAttribute('data-'.concat(this.name, '-direction'), this.direction),
										(this.instance = a(
											{
												delta: {
													x: 0,
													y: 0,
												},
											},
											this.instance,
										)),
										(this.vs = new F({
											el: this.scrollFromAnywhere ? document : this.el,
											mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
											firefoxMultiplier: this.firefoxMultiplier,
											touchMultiplier: this.touchMultiplier,
											useKeyboard: !1,
											passive: !0,
										})),
										this.vs.on(function (e) {
											t.stop ||
												t.isDraggingScrollbar ||
												requestAnimationFrame(function () {
													t.updateDelta(e), t.isScrolling || t.startScrolling();
												});
										}),
										this.setScrollLimit(),
										this.initScrollBar(),
										this.addSections(),
										this.addElements(),
										this.checkScroll(!0),
										this.transformElements(!0, !0),
										f(c(i.prototype), 'init', this).call(this);
								},
							},
							{
								key: 'setScrollLimit',
								value: function () {
									if (((this.instance.limit.y = this.el.offsetHeight - this.windowHeight), 'horizontal' === this.direction)) {
										for (var t = 0, e = this.el.children, n = 0; n < e.length; n++) t += e[n].offsetWidth;
										this.instance.limit.x = t - this.windowWidth;
									}
								},
							},
							{
								key: 'startScrolling',
								value: function () {
									(this.startScrollTs = Date.now()), (this.isScrolling = !0), this.checkScroll(), this.html.classList.add(this.scrollingClass);
								},
							},
							{
								key: 'stopScrolling',
								value: function () {
									cancelAnimationFrame(this.checkScrollRaf),
										this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), (this.scrollToRaf = null)),
										(this.isScrolling = !1),
										(this.instance.scroll.y = Math.round(this.instance.scroll.y)),
										this.html.classList.remove(this.scrollingClass);
								},
							},
							{
								key: 'checkKey',
								value: function (t) {
									var e = this;
									if (this.stop)
										t.keyCode == st &&
											requestAnimationFrame(function () {
												(e.html.scrollTop = 0), (document.body.scrollTop = 0), (e.html.scrollLeft = 0), (document.body.scrollLeft = 0);
											});
									else {
										switch (t.keyCode) {
											case st:
												requestAnimationFrame(function () {
													(e.html.scrollTop = 0), (document.body.scrollTop = 0), (e.html.scrollLeft = 0), (document.body.scrollLeft = 0), e.scrollTo(document.activeElement, -window.innerHeight / 2);
												});
												break;
											case it:
												this.instance.delta[this.directionAxis] -= 240;
												break;
											case rt:
												this.instance.delta[this.directionAxis] += 240;
												break;
											case at:
												this.instance.delta[this.directionAxis] -= window.innerHeight;
												break;
											case lt:
												this.instance.delta[this.directionAxis] += window.innerHeight;
												break;
											case ct:
												this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
												break;
											case ht:
												this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
												break;
											case ot:
												document.activeElement instanceof HTMLInputElement ||
													document.activeElement instanceof HTMLTextAreaElement ||
													(t.shiftKey ? (this.instance.delta[this.directionAxis] -= window.innerHeight) : (this.instance.delta[this.directionAxis] += window.innerHeight));
												break;
											default:
												return;
										}
										this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
											this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
											this.stopScrolling(),
											(this.isScrolling = !0),
											this.checkScroll(),
											this.html.classList.add(this.scrollingClass);
									}
								},
							},
							{
								key: 'checkScroll',
								value: function () {
									var t = this,
										e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
									if (e || this.isScrolling || this.isDraggingScrollbar) {
										this.hasScrollTicking ||
											((this.checkScrollRaf = requestAnimationFrame(function () {
												return t.checkScroll();
											})),
											(this.hasScrollTicking = !0)),
											this.updateScroll();
										var n = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
											r = Date.now() - this.startScrollTs;
										if (
											(!this.animatingScroll &&
												r > 100 &&
												((n < 0.5 && 0 != this.instance.delta[this.directionAxis]) || (n < 0.5 && 0 == this.instance.delta[this.directionAxis])) &&
												this.stopScrolling(),
											Object.entries(this.sections).forEach(function (e) {
												var n = m(e, 2),
													i = (n[0], n[1]);
												i.persistent || (t.instance.scroll[t.directionAxis] > i.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < i.limit[t.directionAxis])
													? ('horizontal' === t.direction ? t.transform(i.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(i.el, 0, -t.instance.scroll[t.directionAxis]),
													  i.inView || ((i.inView = !0), (i.el.style.opacity = 1), (i.el.style.pointerEvents = 'all'), i.el.setAttribute('data-'.concat(t.name, '-section-inview'), '')))
													: (i.inView && ((i.inView = !1), (i.el.style.opacity = 0), (i.el.style.pointerEvents = 'none'), i.el.removeAttribute('data-'.concat(t.name, '-section-inview'))),
													  t.transform(i.el, 0, 0));
											}),
											this.getDirection && this.addDirection(),
											this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
											this.detectElements(),
											this.transformElements(),
											this.hasScrollbar)
										) {
											var o = (this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis]) * this.scrollBarLimit[this.directionAxis];
											'horizontal' === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o);
										}
										f(c(i.prototype), 'checkScroll', this).call(this), (this.hasScrollTicking = !1);
									}
								},
							},
							{
								key: 'resize',
								value: function () {
									(this.windowHeight = window.innerHeight),
										(this.windowWidth = window.innerWidth),
										this.checkContext(),
										(this.windowMiddle = {
											x: this.windowWidth / 2,
											y: this.windowHeight / 2,
										}),
										this.update();
								},
							},
							{
								key: 'updateDelta',
								value: function (t) {
									var e,
										n = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
									(e = 'both' === n ? t.deltaX + t.deltaY : 'vertical' === n ? t.deltaY : 'horizontal' === n ? t.deltaX : t.deltaY),
										(this.instance.delta[this.directionAxis] -= e * this.multiplier),
										this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
										this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]);
								},
							},
							{
								key: 'updateScroll',
								value: function (t) {
									this.isScrolling || this.isDraggingScrollbar
										? (this.instance.scroll[this.directionAxis] = q(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp))
										: this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]
										? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis])
										: this.instance.scroll.y < 0
										? this.setScroll(this.instance.scroll[this.directionAxis], 0)
										: this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
								},
							},
							{
								key: 'addDirection',
								value: function () {
									this.instance.delta.y > this.instance.scroll.y
										? 'down' !== this.instance.direction && (this.instance.direction = 'down')
										: this.instance.delta.y < this.instance.scroll.y && 'up' !== this.instance.direction && (this.instance.direction = 'up'),
										this.instance.delta.x > this.instance.scroll.x
											? 'right' !== this.instance.direction && (this.instance.direction = 'right')
											: this.instance.delta.x < this.instance.scroll.x && 'left' !== this.instance.direction && (this.instance.direction = 'left');
								},
							},
							{
								key: 'addSpeed',
								value: function () {
									this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]
										? (this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs))
										: (this.instance.speed = 0);
								},
							},
							{
								key: 'initScrollBar',
								value: function () {
									if (
										((this.scrollbar = document.createElement('span')),
										(this.scrollbarThumb = document.createElement('span')),
										this.scrollbar.classList.add(''.concat(this.scrollbarClass)),
										this.scrollbarThumb.classList.add(''.concat(this.scrollbarClass, '_thumb')),
										this.scrollbar.append(this.scrollbarThumb),
										this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
										(this.getScrollBar = this.getScrollBar.bind(this)),
										(this.releaseScrollBar = this.releaseScrollBar.bind(this)),
										(this.moveScrollBar = this.moveScrollBar.bind(this)),
										this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar),
										window.addEventListener('mouseup', this.releaseScrollBar),
										window.addEventListener('mousemove', this.moveScrollBar),
										(this.hasScrollbar = !1),
										'horizontal' == this.direction)
									) {
										if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
									} else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
									(this.hasScrollbar = !0),
										(this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
										(this.scrollbarHeight = this.scrollbarBCR.height),
										(this.scrollbarWidth = this.scrollbarBCR.width),
										'horizontal' === this.direction
											? (this.scrollbarThumb.style.width = ''.concat((this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth), 'px'))
											: (this.scrollbarThumb.style.height = ''.concat((this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight), 'px')),
										(this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
										(this.scrollBarLimit = {
											x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
											y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
										});
								},
							},
							{
								key: 'reinitScrollBar',
								value: function () {
									if (((this.hasScrollbar = !1), 'horizontal' == this.direction)) {
										if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
									} else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
									(this.hasScrollbar = !0),
										(this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
										(this.scrollbarHeight = this.scrollbarBCR.height),
										(this.scrollbarWidth = this.scrollbarBCR.width),
										'horizontal' === this.direction
											? (this.scrollbarThumb.style.width = ''.concat((this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth), 'px'))
											: (this.scrollbarThumb.style.height = ''.concat((this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight), 'px')),
										(this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
										(this.scrollBarLimit = {
											x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
											y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
										});
								},
							},
							{
								key: 'destroyScrollBar',
								value: function () {
									this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar),
										window.removeEventListener('mouseup', this.releaseScrollBar),
										window.removeEventListener('mousemove', this.moveScrollBar),
										this.scrollbar.remove();
								},
							},
							{
								key: 'getScrollBar',
								value: function (t) {
									(this.isDraggingScrollbar = !0), this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass);
								},
							},
							{
								key: 'releaseScrollBar',
								value: function (t) {
									(this.isDraggingScrollbar = !1), this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass);
								},
							},
							{
								key: 'moveScrollBar',
								value: function (t) {
									var e = this;
									this.isDraggingScrollbar &&
										requestAnimationFrame(function () {
											var n = (((100 * (t.clientX - e.scrollbarBCR.left)) / e.scrollbarWidth) * e.instance.limit.x) / 100,
												i = (((100 * (t.clientY - e.scrollbarBCR.top)) / e.scrollbarHeight) * e.instance.limit.y) / 100;
											i > 0 && i < e.instance.limit.y && (e.instance.delta.y = i), n > 0 && n < e.instance.limit.x && (e.instance.delta.x = n);
										});
								},
							},
							{
								key: 'addElements',
								value: function () {
									var t = this;
									(this.els = {}),
										(this.parallaxElements = {}),
										this.el.querySelectorAll('[data-'.concat(this.name, ']')).forEach(function (e, n) {
											var i,
												r,
												o,
												s = Y(e),
												a = Object.entries(t.sections)
													.map(function (t) {
														var e = m(t, 2);
														e[0];
														return e[1];
													})
													.find(function (t) {
														return s.includes(t.el);
													}),
												l = e.dataset[t.name + 'Class'] || t.class,
												c = 'string' == typeof e.dataset[t.name + 'Id'] ? e.dataset[t.name + 'Id'] : 'el' + n,
												h = e.dataset[t.name + 'Repeat'],
												u = e.dataset[t.name + 'Call'],
												d = e.dataset[t.name + 'Position'],
												p = e.dataset[t.name + 'Delay'],
												f = e.dataset[t.name + 'Direction'],
												g = 'string' == typeof e.dataset[t.name + 'Sticky'],
												v = !!e.dataset[t.name + 'Speed'] && parseFloat(e.dataset[t.name + 'Speed']) / 10,
												y = 'string' == typeof e.dataset[t.name + 'Offset'] ? e.dataset[t.name + 'Offset'].split(',') : t.offset,
												x = e.dataset[t.name + 'Target'],
												_ = (o = void 0 !== x ? document.querySelector(''.concat(x)) : e).getBoundingClientRect();
											null === a || a.inView
												? ((i = _.top + t.instance.scroll.y - X(o).y), (r = _.left + t.instance.scroll.x - X(o).x))
												: ((i = _.top - X(a.el).y - X(o).y), (r = _.left - X(a.el).x - X(o).x));
											var b = i + o.offsetHeight,
												w = r + o.offsetWidth,
												M = {
													x: (w - r) / 2 + r,
													y: (b - i) / 2 + i,
												};
											if (g) {
												var S = e.getBoundingClientRect(),
													T = S.top,
													E = S.left,
													A = {
														x: E - r,
														y: T - i,
													};
												(i += window.innerHeight),
													(r += window.innerWidth),
													(b = T + o.offsetHeight - e.offsetHeight - A[t.directionAxis]),
													(M = {
														x: ((w = E + o.offsetWidth - e.offsetWidth - A[t.directionAxis]) - r) / 2 + r,
														y: (b - i) / 2 + i,
													});
											}
											h = 'false' != h && (null != h || t.repeat);
											var L = [0, 0];
											if (y)
												if ('horizontal' === t.direction) {
													for (var R = 0; R < y.length; R++)
														'string' == typeof y[R] ? (y[R].includes('%') ? (L[R] = parseInt((y[R].replace('%', '') * t.windowWidth) / 100)) : (L[R] = parseInt(y[R]))) : (L[R] = y[R]);
													(r += L[0]), (w -= L[1]);
												} else {
													for (R = 0; R < y.length; R++)
														'string' == typeof y[R] ? (y[R].includes('%') ? (L[R] = parseInt((y[R].replace('%', '') * t.windowHeight) / 100)) : (L[R] = parseInt(y[R]))) : (L[R] = y[R]);
													(i += L[0]), (b -= L[1]);
												}
											var P = {
												el: e,
												id: c,
												class: l,
												section: a,
												top: i,
												middle: M,
												bottom: b,
												left: r,
												right: w,
												offset: y,
												progress: 0,
												repeat: h,
												inView: !1,
												call: u,
												speed: v,
												delay: p,
												position: d,
												target: o,
												direction: f,
												sticky: g,
											};
											(t.els[c] = P), e.classList.contains(l) && t.setInView(t.els[c], c), (!1 !== v || g) && (t.parallaxElements[c] = P);
										});
								},
							},
							{
								key: 'addSections',
								value: function () {
									var t = this;
									this.sections = {};
									var e = this.el.querySelectorAll('[data-'.concat(this.name, '-section]'));
									0 === e.length && (e = [this.el]),
										e.forEach(function (e, n) {
											var i = 'string' == typeof e.dataset[t.name + 'Id'] ? e.dataset[t.name + 'Id'] : 'section' + n,
												r = e.getBoundingClientRect(),
												o = {
													x: r.left - 1.5 * window.innerWidth - X(e).x,
													y: r.top - 1.5 * window.innerHeight - X(e).y,
												},
												s = {
													x: o.x + r.width + 2 * window.innerWidth,
													y: o.y + r.height + 2 * window.innerHeight,
												},
												a = 'string' == typeof e.dataset[t.name + 'Persistent'];
											e.setAttribute('data-scroll-section-id', i);
											var l = {
												el: e,
												offset: o,
												limit: s,
												inView: !1,
												persistent: a,
												id: i,
											};
											t.sections[i] = l;
										});
								},
							},
							{
								key: 'transform',
								value: function (t, e, n, i) {
									var r;
									if (i) {
										var o = X(t),
											s = q(o.x, e, i),
											a = q(o.y, n, i);
										r = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,'.concat(s, ',').concat(a, ',0,1)');
									} else r = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,'.concat(e, ',').concat(n, ',0,1)');
									(t.style.webkitTransform = r), (t.style.msTransform = r), (t.style.transform = r);
								},
							},
							{
								key: 'transformElements',
								value: function (t) {
									var e = this,
										n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
										i = this.instance.scroll.x + this.windowWidth,
										r = this.instance.scroll.y + this.windowHeight,
										o = {
											x: this.instance.scroll.x + this.windowMiddle.x,
											y: this.instance.scroll.y + this.windowMiddle.y,
										};
									Object.entries(this.parallaxElements).forEach(function (s) {
										var a = m(s, 2),
											l = (a[0], a[1]),
											c = !1;
										if ((t && (c = 0), l.inView || n))
											switch (l.position) {
												case 'top':
													c = e.instance.scroll[e.directionAxis] * -l.speed;
													break;
												case 'elementTop':
													c = (r - l.top) * -l.speed;
													break;
												case 'bottom':
													c = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * l.speed;
													break;
												case 'left':
													c = e.instance.scroll[e.directionAxis] * -l.speed;
													break;
												case 'elementLeft':
													c = (i - l.left) * -l.speed;
													break;
												case 'right':
													c = (e.instance.limit[e.directionAxis] - i + e.windowHeight) * l.speed;
													break;
												default:
													c = (o[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed;
											}
										l.sticky &&
											(c = l.inView
												? 'horizontal' === e.direction
													? e.instance.scroll.x - l.left + window.innerWidth
													: e.instance.scroll.y - l.top + window.innerHeight
												: 'horizontal' === e.direction
												? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2
													? 0
													: e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth
												: e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2
												? 0
												: e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight),
											!1 !== c &&
												('horizontal' === l.direction || ('horizontal' === e.direction && 'vertical' !== l.direction)
													? e.transform(l.el, c, 0, !t && l.delay)
													: e.transform(l.el, 0, c, !t && l.delay));
									});
								},
							},
							{
								key: 'scrollTo',
								value: function (t) {
									var e = this,
										n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
										i = parseInt(n.offset) || 0,
										r = n.duration || 1e3,
										o = n.easing || [0.25, 0, 0.35, 1],
										s = !!n.disableLerp,
										a = !!n.callback && n.callback;
									if (((o = nt.apply(void 0, g(o))), 'string' == typeof t)) {
										if ('top' === t) t = 0;
										else if ('bottom' === t) t = this.instance.limit.y;
										else if ('left' === t) t = 0;
										else if ('right' === t) t = this.instance.limit.x;
										else if (!(t = document.querySelector(t))) return;
									} else if ('number' == typeof t) t = parseInt(t);
									else if (!t || !t.tagName) return void console.warn('`target` parameter is not valid');
									if ('number' != typeof t) {
										var l = Y(t).includes(this.el);
										if (!l) return;
										var c = t.getBoundingClientRect(),
											h = c.top,
											u = c.left,
											d = Y(t),
											p = d.find(function (t) {
												return Object.entries(e.sections)
													.map(function (t) {
														var e = m(t, 2);
														e[0];
														return e[1];
													})
													.find(function (e) {
														return e.el == t;
													});
											}),
											f = 0;
										(f = p ? X(p)[this.directionAxis] : -this.instance.scroll[this.directionAxis]), (i = 'horizontal' === this.direction ? u + i - f : h + i - f);
									} else i = t + i;
									var v = parseFloat(this.instance.delta[this.directionAxis]),
										y = Math.max(0, Math.min(i, this.instance.limit[this.directionAxis])),
										x = y - v,
										_ = function (t) {
											s ? ('horizontal' === e.direction ? e.setScroll(v + x * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, v + x * t)) : (e.instance.delta[e.directionAxis] = v + x * t);
										};
									(this.animatingScroll = !0), this.stopScrolling(), this.startScrolling();
									var b = Date.now(),
										w = function t() {
											var n = (Date.now() - b) / r;
											n > 1 ? (_(1), (e.animatingScroll = !1), 0 == r && e.update(), a && a()) : ((e.scrollToRaf = requestAnimationFrame(t)), _(o(n)));
										};
									w();
								},
							},
							{
								key: 'update',
								value: function () {
									this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0);
								},
							},
							{
								key: 'startScroll',
								value: function () {
									this.stop = !1;
								},
							},
							{
								key: 'stopScroll',
								value: function () {
									this.stop = !0;
								},
							},
							{
								key: 'setScroll',
								value: function (t, e) {
									this.instance = a(
										a({}, this.instance),
										{},
										{
											scroll: {
												x: t,
												y: e,
											},
											delta: {
												x: t,
												y: e,
											},
											speed: 0,
										},
									);
								},
							},
							{
								key: 'destroy',
								value: function () {
									f(c(i.prototype), 'destroy', this).call(this),
										this.stopScrolling(),
										this.html.classList.remove(this.smoothClass),
										this.vs.destroy(),
										this.destroyScrollBar(),
										window.removeEventListener('keydown', this.checkKey, !1);
								},
							},
						]),
						i
					);
				})(_),
				dt = (function () {
					function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						n(this, t),
							(this.options = e),
							Object.assign(this, x, e),
							(this.smartphone = x.smartphone),
							e.smartphone && Object.assign(this.smartphone, e.smartphone),
							(this.tablet = x.tablet),
							e.tablet && Object.assign(this.tablet, e.tablet),
							this.smooth || 'horizontal' != this.direction || console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible'),
							this.tablet.smooth || 'horizontal' != this.tablet.direction || console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)'),
							this.smartphone.smooth || 'horizontal' != this.smartphone.direction || console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)'),
							this.init();
					}
					return (
						r(t, [
							{
								key: 'init',
								value: function () {
									if (
										((this.options.isMobile =
											/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
											('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1) ||
											window.innerWidth < this.tablet.breakpoint),
										(this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint),
										(this.smooth && !this.options.isMobile) || (this.tablet.smooth && this.options.isTablet) || (this.smartphone.smooth && this.options.isMobile && !this.options.isTablet)
											? (this.scroll = new ut(this.options))
											: (this.scroll = new S(this.options)),
										this.scroll.init(),
										window.location.hash)
									) {
										var t = window.location.hash.slice(1, window.location.hash.length),
											e = document.getElementById(t);
										e && this.scroll.scrollTo(e);
									}
								},
							},
							{
								key: 'update',
								value: function () {
									this.scroll.update();
								},
							},
							{
								key: 'start',
								value: function () {
									this.scroll.startScroll();
								},
							},
							{
								key: 'stop',
								value: function () {
									this.scroll.stopScroll();
								},
							},
							{
								key: 'scrollTo',
								value: function (t, e) {
									this.scroll.scrollTo(t, e);
								},
							},
							{
								key: 'setScroll',
								value: function (t, e) {
									this.scroll.setScroll(t, e);
								},
							},
							{
								key: 'on',
								value: function (t, e) {
									this.scroll.setEvents(t, e);
								},
							},
							{
								key: 'off',
								value: function (t, e) {
									this.scroll.unsetEvents(t, e);
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.scroll.destroy();
								},
							},
						]),
						t
					);
				})();
			e.a = dt;
		}.call(this, n(3)));
	},
	function (t, e, n) {
		/*!
		 * clipboard.js v2.0.6
		 * https://clipboardjs.com/
		 *
		 * Licensed MIT © Zeno Rocha
		 */
		var i;
		(i = function () {
			return (function (t) {
				var e = {};
				function n(i) {
					if (e[i]) return e[i].exports;
					var r = (e[i] = {
						i: i,
						l: !1,
						exports: {},
					});
					return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
				}
				return (
					(n.m = t),
					(n.c = e),
					(n.d = function (t, e, i) {
						n.o(t, e) ||
							Object.defineProperty(t, e, {
								enumerable: !0,
								get: i,
							});
					}),
					(n.r = function (t) {
						'undefined' != typeof Symbol &&
							Symbol.toStringTag &&
							Object.defineProperty(t, Symbol.toStringTag, {
								value: 'Module',
							}),
							Object.defineProperty(t, '__esModule', {
								value: !0,
							});
					}),
					(n.t = function (t, e) {
						if ((1 & e && (t = n(t)), 8 & e)) return t;
						if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
						var i = Object.create(null);
						if (
							(n.r(i),
							Object.defineProperty(i, 'default', {
								enumerable: !0,
								value: t,
							}),
							2 & e && 'string' != typeof t)
						)
							for (var r in t)
								n.d(
									i,
									r,
									function (e) {
										return t[e];
									}.bind(null, r),
								);
						return i;
					}),
					(n.n = function (t) {
						var e =
							t && t.__esModule
								? function () {
										return t.default;
								  }
								: function () {
										return t;
								  };
						return n.d(e, 'a', e), e;
					}),
					(n.o = function (t, e) {
						return Object.prototype.hasOwnProperty.call(t, e);
					}),
					(n.p = ''),
					n((n.s = 6))
				);
			})([
				function (t, e) {
					t.exports = function (t) {
						var e;
						if ('SELECT' === t.nodeName) t.focus(), (e = t.value);
						else if ('INPUT' === t.nodeName || 'TEXTAREA' === t.nodeName) {
							var n = t.hasAttribute('readonly');
							n || t.setAttribute('readonly', ''), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute('readonly'), (e = t.value);
						} else {
							t.hasAttribute('contenteditable') && t.focus();
							var i = window.getSelection(),
								r = document.createRange();
							r.selectNodeContents(t), i.removeAllRanges(), i.addRange(r), (e = i.toString());
						}
						return e;
					};
				},
				function (t, e) {
					function n() {}
					(n.prototype = {
						on: function (t, e, n) {
							var i = this.e || (this.e = {});
							return (
								(i[t] || (i[t] = [])).push({
									fn: e,
									ctx: n,
								}),
								this
							);
						},
						once: function (t, e, n) {
							var i = this;
							function r() {
								i.off(t, r), e.apply(n, arguments);
							}
							return (r._ = e), this.on(t, r, n);
						},
						emit: function (t) {
							for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, e);
							return this;
						},
						off: function (t, e) {
							var n = this.e || (this.e = {}),
								i = n[t],
								r = [];
							if (i && e) for (var o = 0, s = i.length; o < s; o++) i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
							return r.length ? (n[t] = r) : delete n[t], this;
						},
					}),
						(t.exports = n),
						(t.exports.TinyEmitter = n);
				},
				function (t, e, n) {
					var i = n(3),
						r = n(4);
					t.exports = function (t, e, n) {
						if (!t && !e && !n) throw new Error('Missing required arguments');
						if (!i.string(e)) throw new TypeError('Second argument must be a String');
						if (!i.fn(n)) throw new TypeError('Third argument must be a Function');
						if (i.node(t))
							return (function (t, e, n) {
								return (
									t.addEventListener(e, n),
									{
										destroy: function () {
											t.removeEventListener(e, n);
										},
									}
								);
							})(t, e, n);
						if (i.nodeList(t))
							return (function (t, e, n) {
								return (
									Array.prototype.forEach.call(t, function (t) {
										t.addEventListener(e, n);
									}),
									{
										destroy: function () {
											Array.prototype.forEach.call(t, function (t) {
												t.removeEventListener(e, n);
											});
										},
									}
								);
							})(t, e, n);
						if (i.string(t))
							return (function (t, e, n) {
								return r(document.body, t, e, n);
							})(t, e, n);
						throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
					};
				},
				function (t, e) {
					(e.node = function (t) {
						return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
					}),
						(e.nodeList = function (t) {
							var n = Object.prototype.toString.call(t);
							return void 0 !== t && ('[object NodeList]' === n || '[object HTMLCollection]' === n) && 'length' in t && (0 === t.length || e.node(t[0]));
						}),
						(e.string = function (t) {
							return 'string' == typeof t || t instanceof String;
						}),
						(e.fn = function (t) {
							return '[object Function]' === Object.prototype.toString.call(t);
						});
				},
				function (t, e, n) {
					var i = n(5);
					function r(t, e, n, i, r) {
						var s = o.apply(this, arguments);
						return (
							t.addEventListener(n, s, r),
							{
								destroy: function () {
									t.removeEventListener(n, s, r);
								},
							}
						);
					}
					function o(t, e, n, r) {
						return function (n) {
							(n.delegateTarget = i(n.target, e)), n.delegateTarget && r.call(t, n);
						};
					}
					t.exports = function (t, e, n, i, o) {
						return 'function' == typeof t.addEventListener
							? r.apply(null, arguments)
							: 'function' == typeof n
							? r.bind(null, document).apply(null, arguments)
							: ('string' == typeof t && (t = document.querySelectorAll(t)),
							  Array.prototype.map.call(t, function (t) {
									return r(t, e, n, i, o);
							  }));
					};
				},
				function (t, e) {
					if ('undefined' != typeof Element && !Element.prototype.matches) {
						var n = Element.prototype;
						n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
					}
					t.exports = function (t, e) {
						for (; t && 9 !== t.nodeType; ) {
							if ('function' == typeof t.matches && t.matches(e)) return t;
							t = t.parentNode;
						}
					};
				},
				function (t, e, n) {
					'use strict';
					n.r(e);
					var i = n(0),
						r = n.n(i),
						o =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
								  },
						s = (function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var i = e[n];
									(i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
								}
							}
							return function (e, n, i) {
								return n && t(e.prototype, n), i && t(e, i), e;
							};
						})(),
						a = (function () {
							function t(e) {
								!(function (t, e) {
									if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
								})(this, t),
									this.resolveOptions(e),
									this.initSelection();
							}
							return (
								s(t, [
									{
										key: 'resolveOptions',
										value: function () {
											var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
											(this.action = t.action),
												(this.container = t.container),
												(this.emitter = t.emitter),
												(this.target = t.target),
												(this.text = t.text),
												(this.trigger = t.trigger),
												(this.selectedText = '');
										},
									},
									{
										key: 'initSelection',
										value: function () {
											this.text ? this.selectFake() : this.target && this.selectTarget();
										},
									},
									{
										key: 'selectFake',
										value: function () {
											var t = this,
												e = 'rtl' == document.documentElement.getAttribute('dir');
											this.removeFake(),
												(this.fakeHandlerCallback = function () {
													return t.removeFake();
												}),
												(this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || !0),
												(this.fakeElem = document.createElement('textarea')),
												(this.fakeElem.style.fontSize = '12pt'),
												(this.fakeElem.style.border = '0'),
												(this.fakeElem.style.padding = '0'),
												(this.fakeElem.style.margin = '0'),
												(this.fakeElem.style.position = 'absolute'),
												(this.fakeElem.style[e ? 'right' : 'left'] = '-9999px');
											var n = window.pageYOffset || document.documentElement.scrollTop;
											(this.fakeElem.style.top = n + 'px'),
												this.fakeElem.setAttribute('readonly', ''),
												(this.fakeElem.value = this.text),
												this.container.appendChild(this.fakeElem),
												(this.selectedText = r()(this.fakeElem)),
												this.copyText();
										},
									},
									{
										key: 'removeFake',
										value: function () {
											this.fakeHandler && (this.container.removeEventListener('click', this.fakeHandlerCallback), (this.fakeHandler = null), (this.fakeHandlerCallback = null)),
												this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
										},
									},
									{
										key: 'selectTarget',
										value: function () {
											(this.selectedText = r()(this.target)), this.copyText();
										},
									},
									{
										key: 'copyText',
										value: function () {
											var t = void 0;
											try {
												t = document.execCommand(this.action);
											} catch (e) {
												t = !1;
											}
											this.handleResult(t);
										},
									},
									{
										key: 'handleResult',
										value: function (t) {
											this.emitter.emit(t ? 'success' : 'error', {
												action: this.action,
												text: this.selectedText,
												trigger: this.trigger,
												clearSelection: this.clearSelection.bind(this),
											});
										},
									},
									{
										key: 'clearSelection',
										value: function () {
											this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
										},
									},
									{
										key: 'destroy',
										value: function () {
											this.removeFake();
										},
									},
									{
										key: 'action',
										set: function () {
											var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'copy';
											if (((this._action = t), 'copy' !== this._action && 'cut' !== this._action)) throw new Error('Invalid "action" value, use either "copy" or "cut"');
										},
										get: function () {
											return this._action;
										},
									},
									{
										key: 'target',
										set: function (t) {
											if (void 0 !== t) {
												if (!t || 'object' !== (void 0 === t ? 'undefined' : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
												if ('copy' === this.action && t.hasAttribute('disabled')) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
												if ('cut' === this.action && (t.hasAttribute('readonly') || t.hasAttribute('disabled')))
													throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
												this._target = t;
											}
										},
										get: function () {
											return this._target;
										},
									},
								]),
								t
							);
						})(),
						l = n(1),
						c = n.n(l),
						h = n(2),
						u = n.n(h),
						d =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
								  },
						p = (function () {
							function t(t, e) {
								for (var n = 0; n < e.length; n++) {
									var i = e[n];
									(i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
								}
							}
							return function (e, n, i) {
								return n && t(e.prototype, n), i && t(e, i), e;
							};
						})(),
						f = (function (t) {
							function e(t, n) {
								!(function (t, e) {
									if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
								})(this, e);
								var i = (function (t, e) {
									if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
								})(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
								return i.resolveOptions(n), i.listenClick(t), i;
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
									(t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											enumerable: !1,
											writable: !0,
											configurable: !0,
										},
									})),
										e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
								})(e, t),
								p(
									e,
									[
										{
											key: 'resolveOptions',
											value: function () {
												var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
												(this.action = 'function' == typeof t.action ? t.action : this.defaultAction),
													(this.target = 'function' == typeof t.target ? t.target : this.defaultTarget),
													(this.text = 'function' == typeof t.text ? t.text : this.defaultText),
													(this.container = 'object' === d(t.container) ? t.container : document.body);
											},
										},
										{
											key: 'listenClick',
											value: function (t) {
												var e = this;
												this.listener = u()(t, 'click', function (t) {
													return e.onClick(t);
												});
											},
										},
										{
											key: 'onClick',
											value: function (t) {
												var e = t.delegateTarget || t.currentTarget;
												this.clipboardAction && (this.clipboardAction = null),
													(this.clipboardAction = new a({
														action: this.action(e),
														target: this.target(e),
														text: this.text(e),
														container: this.container,
														trigger: e,
														emitter: this,
													}));
											},
										},
										{
											key: 'defaultAction',
											value: function (t) {
												return m('action', t);
											},
										},
										{
											key: 'defaultTarget',
											value: function (t) {
												var e = m('target', t);
												if (e) return document.querySelector(e);
											},
										},
										{
											key: 'defaultText',
											value: function (t) {
												return m('text', t);
											},
										},
										{
											key: 'destroy',
											value: function () {
												this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
											},
										},
									],
									[
										{
											key: 'isSupported',
											value: function () {
												var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ['copy', 'cut'],
													e = 'string' == typeof t ? [t] : t,
													n = !!document.queryCommandSupported;
												return (
													e.forEach(function (t) {
														n = n && !!document.queryCommandSupported(t);
													}),
													n
												);
											},
										},
									],
								),
								e
							);
						})(c.a);
					function m(t, e) {
						var n = 'data-clipboard-' + t;
						if (e.hasAttribute(n)) return e.getAttribute(n);
					}
					e.default = f;
				},
			]).default;
		}),
			(t.exports = i());
	},
	function (t, e, n) {},
	function (t, e) {
		var n;
		n = (function () {
			return this;
		})();
		try {
			n = n || new Function('return this')();
		} catch (t) {
			'object' == typeof window && (n = window);
		}
		t.exports = n;
	},
	function (t, e, n) {
		'use strict';
		n.r(e);
		n(2);
		function i() {}
		i.prototype = {
			on: function (t, e, n) {
				var i = this.e || (this.e = {});
				return (
					(i[t] || (i[t] = [])).push({
						fn: e,
						ctx: n,
					}),
					this
				);
			},
			once: function (t, e, n) {
				var i = this;
				function r() {
					i.off(t, r), e.apply(n, arguments);
				}
				return (r._ = e), this.on(t, r, n);
			},
			emit: function (t) {
				for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, e);
				return this;
			},
			off: function (t, e) {
				var n = this.e || (this.e = {}),
					i = n[t],
					r = [];
				if (i && e) for (var o = 0, s = i.length; o < s; o++) i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
				return r.length ? (n[t] = r) : delete n[t], this;
			},
		};
		var r = i;
		r.TinyEmitter = i;
		var o = function (t) {
			(this.wrap = document.querySelector('[data-router-wrapper]')), (this.properties = t), (this.Transition = t.transition ? new t.transition.class(this.wrap, t.transition.name) : null);
		};
		(o.prototype.setup = function () {
			this.onEnter && this.onEnter(), this.onEnterCompleted && this.onEnterCompleted();
		}),
			(o.prototype.add = function () {
				this.wrap.insertAdjacentHTML('beforeend', this.properties.view.outerHTML);
			}),
			(o.prototype.update = function () {
				document.title = this.properties.page.title;
			}),
			(o.prototype.show = function (t) {
				var e = this;
				return new Promise(function (n) {
					try {
						function i(t) {
							e.onEnterCompleted && e.onEnterCompleted(), n();
						}
						return e.update(), e.onEnter && e.onEnter(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.show(t)).then(i) : i());
					} catch (t) {
						return Promise.reject(t);
					}
				});
			}),
			(o.prototype.hide = function (t) {
				var e = this;
				return new Promise(function (n) {
					try {
						function i(t) {
							e.onLeaveCompleted && e.onLeaveCompleted(), n();
						}
						return e.onLeave && e.onLeave(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.hide(t)).then(i) : i());
					} catch (t) {
						return Promise.reject(t);
					}
				});
			});
		var s = new window.DOMParser(),
			a = function (t, e) {
				(this.renderers = t), (this.transitions = e);
			};
		(a.prototype.getOrigin = function (t) {
			var e = t.match(/(https?:\/\/[\w\-.]+)/);
			return e ? e[1].replace(/https?:\/\//, '') : null;
		}),
			(a.prototype.getPathname = function (t) {
				var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
				return e ? e[1] : '/';
			}),
			(a.prototype.getAnchor = function (t) {
				var e = t.match(/(#.*)$/);
				return e ? e[1] : null;
			}),
			(a.prototype.getParams = function (t) {
				var e = t.match(/\?([\w_\-.=&]+)/);
				if (!e) return null;
				for (var n = e[1].split('&'), i = {}, r = 0; r < n.length; r++) {
					var o = n[r].split('=');
					i[o[0]] = o[1];
				}
				return i;
			}),
			(a.prototype.getDOM = function (t) {
				return 'string' == typeof t ? s.parseFromString(t, 'text/html') : t;
			}),
			(a.prototype.getView = function (t) {
				return t.querySelector('[data-router-view]');
			}),
			(a.prototype.getSlug = function (t) {
				return t.getAttribute('data-router-view');
			}),
			(a.prototype.getRenderer = function (t) {
				if (!this.renderers) return Promise.resolve(o);
				if (t in this.renderers) {
					var e = this.renderers[t];
					return 'function' != typeof e || o.isPrototypeOf(e)
						? 'function' == typeof e.then
							? Promise.resolve(e).then(function (t) {
									return t.default;
							  })
							: Promise.resolve(e)
						: Promise.resolve(e()).then(function (t) {
								return t.default;
						  });
				}
				return Promise.resolve(o);
			}),
			(a.prototype.getTransition = function (t) {
				return this.transitions
					? t in this.transitions
						? {
								class: this.transitions[t],
								name: t,
						  }
						: 'default' in this.transitions
						? {
								class: this.transitions.default,
								name: 'default',
						  }
						: null
					: null;
			}),
			(a.prototype.getProperties = function (t) {
				var e = this.getDOM(t),
					n = this.getView(e),
					i = this.getSlug(n);
				return {
					page: e,
					view: n,
					slug: i,
					renderer: this.getRenderer(i, this.renderers),
					transition: this.getTransition(i, this.transitions),
				};
			}),
			(a.prototype.getLocation = function (t) {
				return {
					href: t,
					anchor: this.getAnchor(t),
					origin: this.getOrigin(t),
					params: this.getParams(t),
					pathname: this.getPathname(t),
				};
			});
		var l = (function (t) {
				function e(e) {
					var n = this;
					void 0 === e && (e = {});
					var i = e.renderers,
						r = e.transitions;
					t.call(this),
						(this.Helpers = new a(i, r)),
						(this.Transitions = r),
						(this.Contextual = !1),
						(this.location = this.Helpers.getLocation(window.location.href)),
						(this.properties = this.Helpers.getProperties(document.cloneNode(!0))),
						(this.popping = !1),
						(this.running = !1),
						(this.trigger = null),
						(this.cache = new Map()),
						this.cache.set(this.location.href, this.properties),
						this.properties.renderer.then(function (t) {
							(n.From = new t(n.properties)), n.From.setup();
						}),
						(this._navigate = this.navigate.bind(this)),
						window.addEventListener('popstate', this.popState.bind(this)),
						(this.links = document.querySelectorAll('a:not([target]):not([data-router-disabled])')),
						this.attach(this.links);
				}
				return (
					t && (e.__proto__ = t),
					((e.prototype = Object.create(t && t.prototype)).constructor = e),
					(e.prototype.attach = function (t) {
						for (var e = 0, n = t; e < n.length; e += 1) n[e].addEventListener('click', this._navigate);
					}),
					(e.prototype.detach = function (t) {
						for (var e = 0, n = t; e < n.length; e += 1) n[e].removeEventListener('click', this._navigate);
					}),
					(e.prototype.navigate = function (t) {
						if (!t.metaKey && !t.ctrlKey) {
							t.preventDefault();
							var e = !!t.currentTarget.hasAttribute('data-transition') && t.currentTarget.dataset.transition;
							this.redirect(t.currentTarget.href, e, t.currentTarget);
						}
					}),
					(e.prototype.redirect = function (t, e, n) {
						if ((void 0 === e && (e = !1), void 0 === n && (n = 'script'), (this.trigger = n), !this.running && t !== this.location.href)) {
							var i = this.Helpers.getLocation(t);
							(this.Contextual = !1),
								e && ((this.Contextual = this.Transitions.contextual[e].prototype), (this.Contextual.name = e)),
								i.origin !== this.location.origin || (i.anchor && i.pathname === this.location.pathname) ? (window.location.href = t) : ((this.location = i), this.beforeFetch());
						}
					}),
					(e.prototype.popState = function () {
						(this.trigger = 'popstate'), (this.Contextual = !1);
						var t = this.Helpers.getLocation(window.location.href);
						this.location.pathname !== t.pathname || (!this.location.anchor && !t.anchor) ? ((this.popping = !0), (this.location = t), this.beforeFetch()) : (this.location = t);
					}),
					(e.prototype.pushState = function () {
						this.popping || window.history.pushState(this.location, '', this.location.href);
					}),
					(e.prototype.fetch = function () {
						try {
							var t = this;
							return Promise.resolve(
								fetch(t.location.href, {
									mode: 'same-origin',
									method: 'GET',
									headers: {
										'X-Requested-With': 'Highway',
									},
									credentials: 'same-origin',
								}),
							).then(function (e) {
								if (e.status >= 200 && e.status < 300) return e.text();
								window.location.href = t.location.href;
							});
						} catch (t) {
							return Promise.reject(t);
						}
					}),
					(e.prototype.beforeFetch = function () {
						try {
							var t = this;
							function e() {
								t.afterFetch();
							}
							t.pushState(),
								(t.running = !0),
								t.emit('NAVIGATE_OUT', {
									from: {
										page: t.From.properties.page,
										view: t.From.properties.view,
									},
									trigger: t.trigger,
									location: t.location,
								});
							var n = {
									trigger: t.trigger,
									contextual: t.Contextual,
								},
								i = t.cache.has(t.location.href)
									? Promise.resolve(t.From.hide(n)).then(function () {
											t.properties = t.cache.get(t.location.href);
									  })
									: Promise.resolve(Promise.all([t.fetch(), t.From.hide(n)])).then(function (e) {
											(t.properties = t.Helpers.getProperties(e[0])), t.cache.set(t.location.href, t.properties);
									  });
							return Promise.resolve(i && i.then ? i.then(e) : e());
						} catch (t) {
							return Promise.reject(t);
						}
					}),
					(e.prototype.afterFetch = function () {
						try {
							var t = this;
							return Promise.resolve(t.properties.renderer).then(function (e) {
								return (
									(t.To = new e(t.properties)),
									t.To.add(),
									t.emit('NAVIGATE_IN', {
										to: {
											page: t.To.properties.page,
											view: t.To.wrap.lastElementChild,
										},
										trigger: t.trigger,
										location: t.location,
									}),
									Promise.resolve(
										t.To.show({
											trigger: t.trigger,
											contextual: t.Contextual,
										}),
									).then(function () {
										(t.popping = !1),
											(t.running = !1),
											t.detach(t.links),
											(t.links = document.querySelectorAll('a:not([target]):not([data-router-disabled])')),
											t.attach(t.links),
											t.emit('NAVIGATE_END', {
												to: {
													page: t.To.properties.page,
													view: t.To.wrap.lastElementChild,
												},
												from: {
													page: t.From.properties.page,
													view: t.From.properties.view,
												},
												trigger: t.trigger,
												location: t.location,
											}),
											(t.From = t.To),
											(t.trigger = null);
									})
								);
							});
						} catch (t) {
							return Promise.reject(t);
						}
					}),
					e
				);
			})(r),
			c = function (t, e) {
				(this.wrap = t), (this.name = e);
			};
		(c.prototype.show = function (t) {
			var e = this,
				n = t.trigger,
				i = t.contextual,
				r = this.wrap.lastElementChild,
				o = this.wrap.firstElementChild;
			return new Promise(function (t) {
				i
					? (r.setAttribute('data-transition-in', i.name),
					  r.removeAttribute('data-transition-out', i.name),
					  i.in &&
							i.in({
								to: r,
								from: o,
								trigger: n,
								done: t,
							}))
					: (r.setAttribute('data-transition-in', e.name),
					  r.removeAttribute('data-transition-out', e.name),
					  e.in &&
							e.in({
								to: r,
								from: o,
								trigger: n,
								done: t,
							}));
			});
		}),
			(c.prototype.hide = function (t) {
				var e = this,
					n = t.trigger,
					i = t.contextual,
					r = this.wrap.firstElementChild;
				return new Promise(function (t) {
					i
						? (r.setAttribute('data-transition-out', i.name),
						  r.removeAttribute('data-transition-in', i.name),
						  i.out &&
								i.out({
									from: r,
									trigger: n,
									done: t,
								}))
						: (r.setAttribute('data-transition-out', e.name),
						  r.removeAttribute('data-transition-in', e.name),
						  e.out &&
								e.out({
									from: r,
									trigger: n,
									done: t,
								}));
				});
			}),
			console.log('Highway v2.2.0');
		var h = {
				Core: l,
				Helpers: a,
				Renderer: o,
				Transition: c,
			},
			u = n(0);
		class d {
			static init() {
				(window.scrollInit = new u.a({
					el: document.querySelector('[data-scroll-container]'),
					smooth: !0,
					getDirection: !0,
					smartphone: {
						smooth: !0,
					},
					tablet: {
						smooth: !0,
					},
				})),
					window.scrollInit.on('scroll', function () {
						var t = document.querySelector('#sound');
						scrollInit.scroll.instance.scroll.y >= 100
							? (t.classList.remove('opacity-100', 'pointer-events-auto'), t.classList.add('opacity-0', 'pointer-events-none'))
							: (t.classList.remove('opacity-0', 'pointer-events-none'), t.classList.add('opacity-100', 'pointer-events-auto')),
							'up' == scrollInit.scroll.instance.direction &&
								scrollInit.scroll.instance.scroll.y >= 100 &&
								(t.classList.remove('opacity-0', 'pointer-events-none'), t.classList.add('opacity-100', 'pointer-events-auto'));
					});
			}
			static destroy() {
				window.scrollInit.destroy();
			}
			static update() {
				window.scrollInit.update();
			}
			static start() {
				window.scrollInit.start();
			}
			static stop() {
				window.scrollInit.stop();
			}
			static scrollToPosition(t) {
				window.scrollInit.scrollTo(t);
			}
		}
		function p(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t;
		}
		function f(t, e) {
			(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
		}
		/*!
		 * GSAP 3.5.1
		 * https://greensock.com
		 *
		 * @license Copyright 2008-2020, GreenSock. All rights reserved.
		 * Subject to the terms at https://greensock.com/standard-license or for
		 * Club GreenSock members, the agreement issued with that membership.
		 * @author: Jack Doyle, jack@greensock.com
		 */
		var m,
			g,
			v,
			y,
			x,
			_,
			b,
			w,
			M,
			S,
			T,
			E,
			A,
			L,
			R,
			P,
			C,
			O,
			D,
			I,
			N,
			z,
			B,
			k = {
				autoSleep: 120,
				force3D: 'auto',
				nullTargetWarn: 1,
				units: {
					lineHeight: '',
				},
			},
			F = {
				duration: 0.5,
				overwrite: !1,
				delay: 0,
			},
			U = 1e8,
			H = 2 * Math.PI,
			G = H / 4,
			V = 0,
			j = Math.sqrt,
			W = Math.cos,
			q = Math.sin,
			X = function (t) {
				return 'string' == typeof t;
			},
			Y = function (t) {
				return 'function' == typeof t;
			},
			Z = function (t) {
				return 'number' == typeof t;
			},
			J = function (t) {
				return void 0 === t;
			},
			K = function (t) {
				return 'object' == typeof t;
			},
			Q = function (t) {
				return !1 !== t;
			},
			$ = function () {
				return 'undefined' != typeof window;
			},
			tt = function (t) {
				return Y(t) || X(t);
			},
			et = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
			nt = Array.isArray,
			it = /(?:-?\.?\d|\.)+/gi,
			rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
			ot = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
			st = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
			at = /[+-]=-?[\.\d]+/,
			lt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
			ct = {},
			ht = {},
			ut = function (t) {
				return (ht = Bt(t, ct)) && _n;
			},
			dt = function (t, e) {
				return console.warn('Invalid property', t, 'set to', e, 'Missing plugin? gsap.registerPlugin()');
			},
			pt = function (t, e) {
				return !e && console.warn(t);
			},
			ft = function (t, e) {
				return (t && (ct[t] = e) && ht && (ht[t] = e)) || ct;
			},
			mt = function () {
				return 0;
			},
			gt = {},
			vt = [],
			yt = {},
			xt = {},
			_t = {},
			bt = 30,
			wt = [],
			Mt = '',
			St = function (t) {
				var e,
					n,
					i = t[0];
				if ((K(i) || Y(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
					for (n = wt.length; n-- && !wt[n].targetTest(i); );
					e = wt[n];
				}
				for (n = t.length; n--; ) (t[n] && (t[n]._gsap || (t[n]._gsap = new je(t[n], e)))) || t.splice(n, 1);
				return t;
			},
			Tt = function (t) {
				return t._gsap || St(he(t))[0]._gsap;
			},
			Et = function (t, e, n) {
				return (n = t[e]) && Y(n) ? t[e]() : (J(n) && t.getAttribute && t.getAttribute(e)) || n;
			},
			At = function (t, e) {
				return (t = t.split(',')).forEach(e) || t;
			},
			Lt = function (t) {
				return Math.round(1e5 * t) / 1e5 || 0;
			},
			Rt = function (t, e) {
				for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; );
				return i < n;
			},
			Pt = function (t, e, n) {
				var i,
					r = Z(t[1]),
					o = (r ? 2 : 1) + (e < 2 ? 0 : 1),
					s = t[o];
				if ((r && (s.duration = t[1]), (s.parent = n), e)) {
					for (i = s; n && !('immediateRender' in i); ) (i = n.vars.defaults || {}), (n = Q(n.vars.inherit) && n.parent);
					(s.immediateRender = Q(i.immediateRender)), e < 2 ? (s.runBackwards = 1) : (s.startAt = t[o - 1]);
				}
				return s;
			},
			Ct = function () {
				var t,
					e,
					n = vt.length,
					i = vt.slice(0);
				for (yt = {}, vt.length = 0, t = 0; t < n; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
			},
			Ot = function (t, e, n, i) {
				vt.length && Ct(), t.render(e, n, i), vt.length && Ct();
			},
			Dt = function (t) {
				var e = parseFloat(t);
				return (e || 0 === e) && (t + '').match(lt).length < 2 ? e : X(t) ? t.trim() : t;
			},
			It = function (t) {
				return t;
			},
			Nt = function (t, e) {
				for (var n in e) n in t || (t[n] = e[n]);
				return t;
			},
			zt = function (t, e) {
				for (var n in e) n in t || 'duration' === n || 'ease' === n || (t[n] = e[n]);
			},
			Bt = function (t, e) {
				for (var n in e) t[n] = e[n];
				return t;
			},
			kt = function t(e, n) {
				for (var i in n) e[i] = K(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i];
				return e;
			},
			Ft = function (t, e) {
				var n,
					i = {};
				for (n in t) n in e || (i[n] = t[n]);
				return i;
			},
			Ut = function (t) {
				var e = t.parent || m,
					n = t.keyframes ? zt : Nt;
				if (Q(t.inherit)) for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
				return t;
			},
			Ht = function (t, e, n, i) {
				void 0 === n && (n = '_first'), void 0 === i && (i = '_last');
				var r = e._prev,
					o = e._next;
				r ? (r._next = o) : t[n] === e && (t[n] = o), o ? (o._prev = r) : t[i] === e && (t[i] = r), (e._next = e._prev = e.parent = null);
			},
			Gt = function (t, e) {
				t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
			},
			Vt = function (t, e) {
				if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
				return t;
			},
			jt = function (t) {
				for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
				return t;
			},
			Wt = function (t) {
				return t._repeat ? qt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
			},
			qt = function (t, e) {
				return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
			},
			Xt = function (t, e) {
				return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
			},
			Yt = function (t) {
				return (t._end = Lt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)));
			},
			Zt = function (t, e) {
				var n = t._dp;
				return n && n.smoothChildTiming && t._ts && ((t._start = Lt(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Yt(t), n._dirty || Vt(n, t)), t;
			},
			Jt = function (t, e) {
				var n;
				if (
					((e._time || (e._initted && !e._dur)) && ((n = Xt(t.rawTime(), e)), (!e._dur || oe(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)),
					Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
				) {
					if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
					t._zTime = -1e-8;
				}
			},
			Kt = function (t, e, n, i) {
				return (
					e.parent && Gt(e),
					(e._start = Lt(n + e._delay)),
					(e._end = Lt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
					(function (t, e, n, i, r) {
						void 0 === n && (n = '_first'), void 0 === i && (i = '_last');
						var o,
							s = t[i];
						if (r) for (o = e[r]; s && s[r] > o; ) s = s._prev;
						s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[n]), (t[n] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = s), (e.parent = e._dp = t);
					})(t, e, '_first', '_last', t._sort ? '_start' : 0),
					(t._recent = e),
					i || Jt(t, e),
					t
				);
			},
			Qt = function (t, e) {
				return (ct.ScrollTrigger || dt('scrollTrigger', e)) && ct.ScrollTrigger.create(e, t);
			},
			$t = function (t, e, n, i) {
				return Ke(t, e), t._initted ? (!n && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && _ !== Ce.frame ? (vt.push(t), (t._lazy = [e, i]), 1) : void 0) : 1;
			},
			te = function (t, e, n, i) {
				var r = t._repeat,
					o = Lt(e) || 0,
					s = t._tTime / t._tDur;
				return (
					s && !i && (t._time *= o / t._dur),
					(t._dur = o),
					(t._tDur = r ? (r < 0 ? 1e10 : Lt(o * (r + 1) + t._rDelay * r)) : o),
					s && !i ? Zt(t, (t._tTime = t._tDur * s)) : t.parent && Yt(t),
					n || Vt(t.parent, t),
					t
				);
			},
			ee = function (t) {
				return t instanceof qe ? Vt(t) : te(t, t._dur);
			},
			ne = {
				_start: 0,
				endTime: mt,
			},
			ie = function t(e, n) {
				var i,
					r,
					o = e.labels,
					s = e._recent || ne,
					a = e.duration() >= U ? s.endTime(!1) : e._dur;
				return X(n) && (isNaN(n) || n in o)
					? '<' === (i = n.charAt(0)) || '>' === i
						? ('<' === i ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0)
						: (i = n.indexOf('=')) < 0
						? (n in o || (o[n] = a), o[n])
						: ((r = +(n.charAt(i - 1) + n.substr(i + 1))), i > 1 ? t(e, n.substr(0, i - 1)) + r : a + r)
					: null == n
					? a
					: +n;
			},
			re = function (t, e) {
				return t || 0 === t ? e(t) : e;
			},
			oe = function (t, e, n) {
				return n < t ? t : n > e ? e : n;
			},
			se = function (t) {
				return (t = (t + '').substr((parseFloat(t) + '').length)) && isNaN(t) ? t : '';
			},
			ae = [].slice,
			le = function (t, e) {
				return t && K(t) && 'length' in t && ((!e && !t.length) || (t.length - 1 in t && K(t[0]))) && !t.nodeType && t !== g;
			},
			ce = function (t, e, n) {
				return (
					void 0 === n && (n = []),
					t.forEach(function (t) {
						var i;
						return (X(t) && !e) || le(t, 1) ? (i = n).push.apply(i, he(t)) : n.push(t);
					}) || n
				);
			},
			he = function (t, e) {
				return !X(t) || e || (!v && Oe()) ? (nt(t) ? ce(t, e) : le(t) ? ae.call(t, 0) : t ? [t] : []) : ae.call(y.querySelectorAll(t), 0);
			},
			ue = function (t) {
				return t.sort(function () {
					return 0.5 - Math.random();
				});
			},
			de = function (t) {
				if (Y(t)) return t;
				var e = K(t)
						? t
						: {
								each: t,
						  },
					n = Fe(e.ease),
					i = e.from || 0,
					r = parseFloat(e.base) || 0,
					o = {},
					s = i > 0 && i < 1,
					a = isNaN(i) || s,
					l = e.axis,
					c = i,
					h = i;
				return (
					X(i)
						? (c = h =
								{
									center: 0.5,
									edges: 0.5,
									end: 1,
								}[i] || 0)
						: !s && a && ((c = i[0]), (h = i[1])),
					function (t, s, u) {
						var d,
							p,
							f,
							m,
							g,
							v,
							y,
							x,
							_,
							b = (u || e).length,
							w = o[b];
						if (!w) {
							if (!(_ = 'auto' === e.grid ? 0 : (e.grid || [1, U])[1])) {
								for (y = -U; y < (y = u[_++].getBoundingClientRect().left) && _ < b; );
								_--;
							}
							for (w = o[b] = [], d = a ? Math.min(_, b) * c - 0.5 : i % _, p = a ? (b * h) / _ - 0.5 : (i / _) | 0, y = 0, x = U, v = 0; v < b; v++)
								(f = (v % _) - d), (m = p - ((v / _) | 0)), (w[v] = g = l ? Math.abs('y' === l ? m : f) : j(f * f + m * m)), g > y && (y = g), g < x && (x = g);
							'random' === i && ue(w),
								(w.max = y - x),
								(w.min = x),
								(w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (_ > b ? b - 1 : l ? ('y' === l ? b / _ : _) : Math.max(_, b / _)) || 0) * ('edges' === i ? -1 : 1)),
								(w.b = b < 0 ? r - b : r),
								(w.u = se(e.amount || e.each) || 0),
								(n = n && b < 0 ? Be(n) : n);
						}
						return (b = (w[t] - w.min) / w.max || 0), Lt(w.b + (n ? n(b) : b) * w.v) + w.u;
					}
				);
			},
			pe = function (t) {
				var e = t < 1 ? Math.pow(10, (t + '').length - 2) : 1;
				return function (n) {
					return Math.floor(Math.round(parseFloat(n) / t) * t * e) / e + (Z(n) ? 0 : se(n));
				};
			},
			fe = function (t, e) {
				var n,
					i,
					r = nt(t);
				return (
					!r && K(t) && ((n = r = t.radius || U), t.values ? ((t = he(t.values)), (i = !Z(t[0])) && (n *= n)) : (t = pe(t.increment))),
					re(
						e,
						r
							? Y(t)
								? function (e) {
										return (i = t(e)), Math.abs(i - e) <= n ? i : e;
								  }
								: function (e) {
										for (var r, o, s = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), l = U, c = 0, h = t.length; h--; )
											(r = i ? (r = t[h].x - s) * r + (o = t[h].y - a) * o : Math.abs(t[h] - s)) < l && ((l = r), (c = h));
										return (c = !n || l <= n ? t[c] : e), i || c === e || Z(e) ? c : c + se(e);
								  }
							: pe(t),
					)
				);
			},
			me = function (t, e, n, i) {
				return re(nt(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
					return nt(t)
						? t[~~(Math.random() * t.length)]
						: (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + '').length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / n) * n * i) / i;
				});
			},
			ge = function (t, e, n) {
				return re(n, function (n) {
					return t[~~e(n)];
				});
			},
			ve = function (t) {
				for (var e, n, i, r, o = 0, s = ''; ~(e = t.indexOf('random(', o)); )
					(i = t.indexOf(')', e)),
						(r = '[' === t.charAt(e + 7)),
						(n = t.substr(e + 7, i - e - 7).match(r ? lt : it)),
						(s += t.substr(o, e - o) + me(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
						(o = i + 1);
				return s + t.substr(o, t.length - o);
			},
			ye = function (t, e, n, i, r) {
				var o = e - t,
					s = i - n;
				return re(r, function (e) {
					return n + (((e - t) / o) * s || 0);
				});
			},
			xe = function (t, e, n) {
				var i,
					r,
					o,
					s = t.labels,
					a = U;
				for (i in s) (r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && ((o = i), (a = r));
				return o;
			},
			_e = function (t, e, n) {
				var i,
					r,
					o = t.vars,
					s = o[e];
				if (s) return (i = o[e + 'Params']), (r = o.callbackScope || t), n && vt.length && Ct(), i ? s.apply(r, i) : s.call(r);
			},
			be = function (t) {
				return Gt(t), t.progress() < 1 && _e(t, 'onInterrupt'), t;
			},
			we = function (t) {
				var e = (t = (!t.name && t.default) || t).name,
					n = Y(t),
					i =
						e && !n && t.init
							? function () {
									this._props = [];
							  }
							: t,
					r = {
						init: mt,
						render: un,
						add: Ze,
						kill: pn,
						modifier: dn,
						rawVars: 0,
					},
					o = {
						targetTest: 0,
						get: 0,
						getSetter: an,
						aliases: {},
						register: 0,
					};
				if ((Oe(), t !== i)) {
					if (xt[e]) return;
					Nt(i, Nt(Ft(t, r), o)),
						Bt(i.prototype, Bt(r, Ft(t, o))),
						(xt[(i.prop = e)] = i),
						t.targetTest && (wt.push(i), (gt[e] = 1)),
						(e = ('css' === e ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin');
				}
				ft(e, i), t.register && t.register(_n, i, gn);
			},
			Me = {
				aqua: [0, 255, 255],
				lime: [0, 255, 0],
				silver: [192, 192, 192],
				black: [0, 0, 0],
				maroon: [128, 0, 0],
				teal: [0, 128, 128],
				blue: [0, 0, 255],
				navy: [0, 0, 128],
				white: [255, 255, 255],
				olive: [128, 128, 0],
				yellow: [255, 255, 0],
				orange: [255, 165, 0],
				gray: [128, 128, 128],
				purple: [128, 0, 128],
				green: [0, 128, 0],
				red: [255, 0, 0],
				pink: [255, 192, 203],
				cyan: [0, 255, 255],
				transparent: [255, 255, 255, 0],
			},
			Se = function (t, e, n) {
				return (255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
			},
			Te = function (t, e, n) {
				var i,
					r,
					o,
					s,
					a,
					l,
					c,
					h,
					u,
					d,
					p = t ? (Z(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : Me.black;
				if (!p) {
					if ((',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), Me[t])) p = Me[t];
					else if ('#' === t.charAt(0))
						4 === t.length && ((i = t.charAt(1)), (r = t.charAt(2)), (o = t.charAt(3)), (t = '#' + i + i + r + r + o + o)), (p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t]);
					else if ('hsl' === t.substr(0, 3))
						if (((p = d = t.match(it)), e)) {
							if (~t.indexOf('=')) return (p = t.match(rt)), n && p.length < 4 && (p[3] = 1), p;
						} else
							(s = (+p[0] % 360) / 360),
								(a = +p[1] / 100),
								(i = 2 * (l = +p[2] / 100) - (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
								p.length > 3 && (p[3] *= 1),
								(p[0] = Se(s + 1 / 3, i, r)),
								(p[1] = Se(s, i, r)),
								(p[2] = Se(s - 1 / 3, i, r));
					else p = t.match(it) || Me.transparent;
					p = p.map(Number);
				}
				return (
					e &&
						!d &&
						((i = p[0] / 255),
						(r = p[1] / 255),
						(o = p[2] / 255),
						(l = ((c = Math.max(i, r, o)) + (h = Math.min(i, r, o))) / 2),
						c === h
							? (s = a = 0)
							: ((u = c - h), (a = l > 0.5 ? u / (2 - c - h) : u / (c + h)), (s = c === i ? (r - o) / u + (r < o ? 6 : 0) : c === r ? (o - i) / u + 2 : (i - r) / u + 4), (s *= 60)),
						(p[0] = ~~(s + 0.5)),
						(p[1] = ~~(100 * a + 0.5)),
						(p[2] = ~~(100 * l + 0.5))),
					n && p.length < 4 && (p[3] = 1),
					p
				);
			},
			Ee = function (t) {
				var e = [],
					n = [],
					i = -1;
				return (
					t.split(Le).forEach(function (t) {
						var r = t.match(ot) || [];
						e.push.apply(e, r), n.push((i += r.length + 1));
					}),
					(e.c = n),
					e
				);
			},
			Ae = function (t, e, n) {
				var i,
					r,
					o,
					s,
					a = '',
					l = (t + a).match(Le),
					c = e ? 'hsla(' : 'rgba(',
					h = 0;
				if (!l) return t;
				if (
					((l = l.map(function (t) {
						return (t = Te(t, e, 1)) && c + (e ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3] : t.join(',')) + ')';
					})),
					n && ((o = Ee(t)), (i = n.c).join(a) !== o.c.join(a)))
				)
					for (s = (r = t.replace(Le, '1').split(ot)).length - 1; h < s; h++) a += r[h] + (~i.indexOf(h) ? l.shift() || c + '0,0,0,0)' : (o.length ? o : l.length ? l : n).shift());
				if (!r) for (s = (r = t.split(Le)).length - 1; h < s; h++) a += r[h] + l[h];
				return a + r[s];
			},
			Le = (function () {
				var t,
					e = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b';
				for (t in Me) e += '|' + t + '\\b';
				return new RegExp(e + ')', 'gi');
			})(),
			Re = /hsl[a]?\(/,
			Pe = function (t) {
				var e,
					n = t.join(' ');
				if (((Le.lastIndex = 0), Le.test(n))) return (e = Re.test(n)), (t[1] = Ae(t[1], e)), (t[0] = Ae(t[0], e, Ee(t[1]))), !0;
			},
			Ce =
				((R = Date.now),
				(P = 500),
				(C = 33),
				(O = R()),
				(D = O),
				(N = I = 1e3 / 240),
				(B = function t(e) {
					var n,
						i,
						r,
						o,
						s = R() - D,
						a = !0 === e;
					if (
						(s > P && (O += s - C),
						((n = (r = (D += s) - O) - N) > 0 || a) && ((o = ++E.frame), (A = r - 1e3 * E.time), (E.time = r /= 1e3), (N += n + (n >= I ? 4 : I - n)), (i = 1)),
						a || (M = S(t)),
						i)
					)
						for (L = 0; L < z.length; L++) z[L](r, A, o, e);
				}),
				(E = {
					time: 0,
					frame: 0,
					tick: function () {
						B(!0);
					},
					deltaRatio: function (t) {
						return A / (1e3 / (t || 60));
					},
					wake: function () {
						x &&
							(!v &&
								$() &&
								((g = v = window),
								(y = g.document || {}),
								(ct.gsap = _n),
								(g.gsapVersions || (g.gsapVersions = [])).push(_n.version),
								ut(ht || g.GreenSockGlobals || (!g.gsap && g) || {}),
								(T = g.requestAnimationFrame)),
							M && E.sleep(),
							(S =
								T ||
								function (t) {
									return setTimeout(t, (N - 1e3 * E.time + 1) | 0);
								}),
							(w = 1),
							B(2));
					},
					sleep: function () {
						(T ? g.cancelAnimationFrame : clearTimeout)(M), (w = 0), (S = mt);
					},
					lagSmoothing: function (t, e) {
						(P = t || 1 / 1e-8), (C = Math.min(e, P, 0));
					},
					fps: function (t) {
						(I = 1e3 / (t || 240)), (N = 1e3 * E.time + I);
					},
					add: function (t) {
						z.indexOf(t) < 0 && z.push(t), Oe();
					},
					remove: function (t) {
						var e;
						~(e = z.indexOf(t)) && z.splice(e, 1) && L >= e && L--;
					},
					_listeners: (z = []),
				})),
			Oe = function () {
				return !w && Ce.wake();
			},
			De = {},
			Ie = /^[\d.\-M][\d.\-,\s]/,
			Ne = /["']/g,
			ze = function (t) {
				for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(':'), s = o[0], a = 1, l = o.length; a < l; a++)
					(n = o[a]), (e = a !== l - 1 ? n.lastIndexOf(',') : n.length), (i = n.substr(0, e)), (r[s] = isNaN(i) ? i.replace(Ne, '').trim() : +i), (s = n.substr(e + 1).trim());
				return r;
			},
			Be = function (t) {
				return function (e) {
					return 1 - t(1 - e);
				};
			},
			ke = function t(e, n) {
				for (var i, r = e._first; r; )
					r instanceof qe
						? t(r, n)
						: !r.vars.yoyoEase || (r._yoyo && r._repeat) || r._yoyo === n || (r.timeline ? t(r.timeline, n) : ((i = r._ease), (r._ease = r._yEase), (r._yEase = i), (r._yoyo = n))),
						(r = r._next);
			},
			Fe = function (t, e) {
				return (
					(t &&
						(Y(t)
							? t
							: De[t] ||
							  (function (t) {
									var e,
										n,
										i,
										r,
										o = (t + '').split('('),
										s = De[o[0]];
									return s && o.length > 1 && s.config
										? s.config.apply(
												null,
												~t.indexOf('{')
													? [ze(o[1])]
													: ((e = t), (n = e.indexOf('(') + 1), (i = e.indexOf(')')), (r = e.indexOf('(', n)), e.substring(n, ~r && r < i ? e.indexOf(')', i + 1) : i)).split(',').map(Dt),
										  )
										: De._CE && Ie.test(t)
										? De._CE('', t)
										: s;
							  })(t))) ||
					e
				);
			},
			Ue = function (t, e, n, i) {
				void 0 === n &&
					(n = function (t) {
						return 1 - e(1 - t);
					}),
					void 0 === i &&
						(i = function (t) {
							return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
						});
				var r,
					o = {
						easeIn: e,
						easeOut: n,
						easeInOut: i,
					};
				return (
					At(t, function (t) {
						for (var e in ((De[t] = ct[t] = o), (De[(r = t.toLowerCase())] = n), o)) De[r + ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')] = De[t + '.' + e] = o[e];
					}),
					o
				);
			},
			He = function (t) {
				return function (e) {
					return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
				};
			},
			Ge = function t(e, n, i) {
				var r = n >= 1 ? n : 1,
					o = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
					s = (o / H) * (Math.asin(1 / r) || 0),
					a = function (t) {
						return 1 === t ? 1 : r * Math.pow(2, -10 * t) * q((t - s) * o) + 1;
					},
					l =
						'out' === e
							? a
							: 'in' === e
							? function (t) {
									return 1 - a(1 - t);
							  }
							: He(a);
				return (
					(o = H / o),
					(l.config = function (n, i) {
						return t(e, n, i);
					}),
					l
				);
			},
			Ve = function t(e, n) {
				void 0 === n && (n = 1.70158);
				var i = function (t) {
						return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
					},
					r =
						'out' === e
							? i
							: 'in' === e
							? function (t) {
									return 1 - i(1 - t);
							  }
							: He(i);
				return (
					(r.config = function (n) {
						return t(e, n);
					}),
					r
				);
			};
		At('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
			var n = e < 5 ? e + 1 : e;
			Ue(
				t + ',Power' + (n - 1),
				e
					? function (t) {
							return Math.pow(t, n);
					  }
					: function (t) {
							return t;
					  },
				function (t) {
					return 1 - Math.pow(1 - t, n);
				},
				function (t) {
					return t < 0.5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
				},
			);
		}),
			(De.Linear.easeNone = De.none = De.Linear.easeIn),
			Ue('Elastic', Ge('in'), Ge('out'), Ge()),
			(function (t, e) {
				var n = 1 / e,
					i = function (i) {
						return i < n
							? t * i * i
							: i < 0.7272727272727273
							? t * Math.pow(i - 1.5 / e, 2) + 0.75
							: i < 0.9090909090909092
							? t * (i -= 2.25 / e) * i + 0.9375
							: t * Math.pow(i - 2.625 / e, 2) + 0.984375;
					};
				Ue(
					'Bounce',
					function (t) {
						return 1 - i(1 - t);
					},
					i,
				);
			})(7.5625, 2.75),
			Ue('Expo', function (t) {
				return t ? Math.pow(2, 10 * (t - 1)) : 0;
			}),
			Ue('Circ', function (t) {
				return -(j(1 - t * t) - 1);
			}),
			Ue('Sine', function (t) {
				return 1 === t ? 1 : 1 - W(t * G);
			}),
			Ue('Back', Ve('in'), Ve('out'), Ve()),
			(De.SteppedEase = De.steps = ct.SteppedEase = {
				config: function (t, e) {
					void 0 === t && (t = 1);
					var n = 1 / t,
						i = t + (e ? 0 : 1),
						r = e ? 1 : 0;
					return function (t) {
						return (((i * oe(0, 1 - 1e-8, t)) | 0) + r) * n;
					};
				},
			}),
			(F.ease = De['quad.out']),
			At('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (t) {
				return (Mt += t + ',' + t + 'Params,');
			});
		var je = function (t, e) {
				(this.id = V++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : Et), (this.set = e ? e.getSetter : an);
			},
			We = (function () {
				function t(t, e) {
					var n = t.parent || m;
					(this.vars = t),
						(this._delay = +t.delay || 0),
						(this._repeat = t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
						(this._ts = 1),
						te(this, +t.duration, 1, 1),
						(this.data = t.data),
						w || Ce.wake(),
						n && Kt(n, this, e || 0 === e ? e : n._time, 1),
						t.reversed && this.reverse(),
						t.paused && this.paused(!0);
				}
				var e = t.prototype;
				return (
					(e.delay = function (t) {
						return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
					}),
					(e.duration = function (t) {
						return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
					}),
					(e.totalDuration = function (t) {
						return arguments.length ? ((this._dirty = 0), te(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
					}),
					(e.totalTime = function (t, e) {
						if ((Oe(), !arguments.length)) return this._tTime;
						var n = this._dp;
						if (n && n.smoothChildTiming && this._ts) {
							for (Zt(this, t); n.parent; ) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
							!this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && Kt(this._dp, this, this._start - this._delay);
						}
						return (
							(this._tTime !== t || (!this._dur && !e) || (this._initted && 1e-8 === Math.abs(this._zTime)) || (!t && !this._initted && (this.add || this._ptLookup))) &&
								(this._ts || (this._pTime = t), Ot(this, t, e)),
							this
						);
					}),
					(e.time = function (t, e) {
						return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Wt(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
					}),
					(e.totalProgress = function (t, e) {
						return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
					}),
					(e.progress = function (t, e) {
						return arguments.length
							? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Wt(this), e)
							: this.duration()
							? Math.min(1, this._time / this._dur)
							: this.ratio;
					}),
					(e.iteration = function (t, e) {
						var n = this.duration() + this._rDelay;
						return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? qt(this._tTime, n) + 1 : 1;
					}),
					(e.timeScale = function (t) {
						if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
						if (this._rts === t) return this;
						var e = this.parent && this._ts ? Xt(this.parent._time, this) : this._tTime;
						return (this._rts = +t || 0), (this._ts = this._ps || -1e-8 === t ? 0 : this._rts), jt(this.totalTime(oe(-this._delay, this._tDur, e), !0));
					}),
					(e.paused = function (t) {
						return arguments.length
							? (this._ps !== t &&
									((this._ps = t),
									t
										? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
										: (Oe(),
										  (this._ts = this._rts),
										  this.totalTime(
												this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
												1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime),
										  ))),
							  this)
							: this._ps;
					}),
					(e.startTime = function (t) {
						if (arguments.length) {
							this._start = t;
							var e = this.parent || this._dp;
							return e && (e._sort || !this.parent) && Kt(e, this, t - this._delay), this;
						}
						return this._start;
					}),
					(e.endTime = function (t) {
						return this._start + (Q(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
					}),
					(e.rawTime = function (t) {
						var e = this.parent || this._dp;
						return e
							? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
								? this._tTime % (this._dur + this._rDelay)
								: this._ts
								? Xt(e.rawTime(t), this)
								: this._tTime
							: this._tTime;
					}),
					(e.globalTime = function (t) {
						for (var e = this, n = arguments.length ? t : e.rawTime(); e; ) (n = e._start + n / (e._ts || 1)), (e = e._dp);
						return n;
					}),
					(e.repeat = function (t) {
						return arguments.length ? ((this._repeat = t), ee(this)) : this._repeat;
					}),
					(e.repeatDelay = function (t) {
						return arguments.length ? ((this._rDelay = t), ee(this)) : this._rDelay;
					}),
					(e.yoyo = function (t) {
						return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
					}),
					(e.seek = function (t, e) {
						return this.totalTime(ie(this, t), Q(e));
					}),
					(e.restart = function (t, e) {
						return this.play().totalTime(t ? -this._delay : 0, Q(e));
					}),
					(e.play = function (t, e) {
						return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
					}),
					(e.reverse = function (t, e) {
						return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
					}),
					(e.pause = function (t, e) {
						return null != t && this.seek(t, e), this.paused(!0);
					}),
					(e.resume = function () {
						return this.paused(!1);
					}),
					(e.reversed = function (t) {
						return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
					}),
					(e.invalidate = function () {
						return (this._initted = 0), (this._zTime = -1e-8), this;
					}),
					(e.isActive = function () {
						var t,
							e = this.parent || this._dp,
							n = this._start;
						return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - 1e-8));
					}),
					(e.eventCallback = function (t, e, n) {
						var i = this.vars;
						return arguments.length > 1 ? (e ? ((i[t] = e), n && (i[t + 'Params'] = n), 'onUpdate' === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
					}),
					(e.then = function (t) {
						var e = this;
						return new Promise(function (n) {
							var i = Y(t) ? t : It,
								r = function () {
									var t = e.then;
									(e.then = null), Y(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), (e.then = t);
								};
							(e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? r() : (e._prom = r);
						});
					}),
					(e.kill = function () {
						be(this);
					}),
					t
				);
			})();
		Nt(We.prototype, {
			_time: 0,
			_start: 0,
			_end: 0,
			_tTime: 0,
			_tDur: 0,
			_dirty: 0,
			_repeat: 0,
			_yoyo: !1,
			parent: null,
			_initted: !1,
			_rDelay: 0,
			_ts: 1,
			_dp: 0,
			ratio: 0,
			_zTime: -1e-8,
			_prom: 0,
			_ps: !1,
			_rts: 1,
		});
		var qe = (function (t) {
			function e(e, n) {
				var i;
				return (
					void 0 === e && (e = {}),
					((i = t.call(this, e, n) || this).labels = {}),
					(i.smoothChildTiming = !!e.smoothChildTiming),
					(i.autoRemoveChildren = !!e.autoRemoveChildren),
					(i._sort = Q(e.sortChildren)),
					i.parent && Jt(i.parent, p(i)),
					e.scrollTrigger && Qt(p(i), e.scrollTrigger),
					i
				);
			}
			f(e, t);
			var n = e.prototype;
			return (
				(n.to = function (t, e, n) {
					return new en(t, Pt(arguments, 0, this), ie(this, Z(e) ? arguments[3] : n)), this;
				}),
				(n.from = function (t, e, n) {
					return new en(t, Pt(arguments, 1, this), ie(this, Z(e) ? arguments[3] : n)), this;
				}),
				(n.fromTo = function (t, e, n, i) {
					return new en(t, Pt(arguments, 2, this), ie(this, Z(e) ? arguments[4] : i)), this;
				}),
				(n.set = function (t, e, n) {
					return (e.duration = 0), (e.parent = this), Ut(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new en(t, e, ie(this, n), 1), this;
				}),
				(n.call = function (t, e, n) {
					return Kt(this, en.delayedCall(0, t, e), ie(this, n));
				}),
				(n.staggerTo = function (t, e, n, i, r, o, s) {
					return (n.duration = e), (n.stagger = n.stagger || i), (n.onComplete = o), (n.onCompleteParams = s), (n.parent = this), new en(t, n, ie(this, r)), this;
				}),
				(n.staggerFrom = function (t, e, n, i, r, o, s) {
					return (n.runBackwards = 1), (Ut(n).immediateRender = Q(n.immediateRender)), this.staggerTo(t, e, n, i, r, o, s);
				}),
				(n.staggerFromTo = function (t, e, n, i, r, o, s, a) {
					return (i.startAt = n), (Ut(i).immediateRender = Q(i.immediateRender)), this.staggerTo(t, e, i, r, o, s, a);
				}),
				(n.render = function (t, e, n) {
					var i,
						r,
						o,
						s,
						a,
						l,
						c,
						h,
						u,
						d,
						p,
						f,
						g = this._time,
						v = this._dirty ? this.totalDuration() : this._tDur,
						y = this._dur,
						x = this !== m && t > v - 1e-8 && t >= 0 ? v : t < 1e-8 ? 0 : t,
						_ = this._zTime < 0 != t < 0 && (this._initted || !y);
					if (x !== this._tTime || n || _) {
						if (
							(g !== this._time && y && ((x += this._time - g), (t += this._time - g)),
							(i = x),
							(u = this._start),
							(l = !(h = this._ts)),
							_ && (y || (g = this._zTime), (t || !e) && (this._zTime = t)),
							this._repeat &&
								((p = this._yoyo),
								(a = y + this._rDelay),
								(i = Lt(x % a)),
								x === v ? ((s = this._repeat), (i = y)) : ((s = ~~(x / a)) && s === x / a && ((i = y), s--), i > y && (i = y)),
								(d = qt(this._tTime, a)),
								!g && this._tTime && d !== s && (d = s),
								p && 1 & s && ((i = y - i), (f = 1)),
								s !== d && !this._lock))
						) {
							var b = p && 1 & d,
								w = b === (p && 1 & s);
							if (
								(s < d && (b = !b),
								(g = b ? 0 : y),
								(this._lock = 1),
								(this.render(g || (f ? 0 : Lt(s * a)), e, !y)._lock = 0),
								!e && this.parent && _e(this, 'onRepeat'),
								this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
								g !== this._time || l !== !this._ts)
							)
								return this;
							if (
								((y = this._dur),
								(v = this._tDur),
								w && ((this._lock = 2), (g = b ? y : -1e-4), this.render(g, !0), this.vars.repeatRefresh && !f && this.invalidate()),
								(this._lock = 0),
								!this._ts && !l)
							)
								return this;
							ke(this, f);
						}
						if (
							(this._hasPause &&
								!this._forcing &&
								this._lock < 2 &&
								(c = (function (t, e, n) {
									var i;
									if (n > e)
										for (i = t._first; i && i._start <= n; ) {
											if (!i._dur && 'isPause' === i.data && i._start > e) return i;
											i = i._next;
										}
									else
										for (i = t._last; i && i._start >= n; ) {
											if (!i._dur && 'isPause' === i.data && i._start < e) return i;
											i = i._prev;
										}
								})(this, Lt(g), Lt(i))) &&
								(x -= i - (i = c._start)),
							(this._tTime = x),
							(this._time = i),
							(this._act = !h),
							this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t)),
							!g && i && !e && _e(this, 'onStart'),
							i >= g && t >= 0)
						)
							for (r = this._first; r; ) {
								if (((o = r._next), (r._act || i >= r._start) && r._ts && c !== r)) {
									if (r.parent !== this) return this.render(t, e, n);
									if ((r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || (!this._ts && !l))) {
										(c = 0), o && (x += this._zTime = -1e-8);
										break;
									}
								}
								r = o;
							}
						else {
							r = this._last;
							for (var M = t < 0 ? t : i; r; ) {
								if (((o = r._prev), (r._act || M <= r._end) && r._ts && c !== r)) {
									if (r.parent !== this) return this.render(t, e, n);
									if ((r.render(r._ts > 0 ? (M - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (M - r._start) * r._ts, e, n), i !== this._time || (!this._ts && !l))) {
										(c = 0), o && (x += this._zTime = M ? -1e-8 : 1e-8);
										break;
									}
								}
								r = o;
							}
						}
						if (c && !e && (this.pause(), (c.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1), this._ts)) return (this._start = u), Yt(this), this.render(t, e, n);
						this._onUpdate && !e && _e(this, 'onUpdate', !0),
							((x === v && v >= this.totalDuration()) || (!x && g)) &&
								((u !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
									this._lock ||
									((t || !y) && ((x === v && this._ts > 0) || (!x && this._ts < 0)) && Gt(this, 1),
									e || (t < 0 && !g) || (!x && !g) || (_e(this, x === v ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(x < v && this.timeScale() > 0) && this._prom())));
					}
					return this;
				}),
				(n.add = function (t, e) {
					var n = this;
					if ((Z(e) || (e = ie(this, e)), !(t instanceof We))) {
						if (nt(t))
							return (
								t.forEach(function (t) {
									return n.add(t, e);
								}),
								this
							);
						if (X(t)) return this.addLabel(t, e);
						if (!Y(t)) return this;
						t = en.delayedCall(0, t);
					}
					return this !== t ? Kt(this, t, e) : this;
				}),
				(n.getChildren = function (t, e, n, i) {
					void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -U);
					for (var r = [], o = this._first; o; ) o._start >= i && (o instanceof en ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), (o = o._next);
					return r;
				}),
				(n.getById = function (t) {
					for (var e = this.getChildren(1, 1, 1), n = e.length; n--; ) if (e[n].vars.id === t) return e[n];
				}),
				(n.remove = function (t) {
					return X(t) ? this.removeLabel(t) : Y(t) ? this.killTweensOf(t) : (Ht(this, t), t === this._recent && (this._recent = this._last), Vt(this));
				}),
				(n.totalTime = function (e, n) {
					return arguments.length
						? ((this._forcing = 1),
						  !this._dp && this._ts && (this._start = Lt(Ce.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
						  t.prototype.totalTime.call(this, e, n),
						  (this._forcing = 0),
						  this)
						: this._tTime;
				}),
				(n.addLabel = function (t, e) {
					return (this.labels[t] = ie(this, e)), this;
				}),
				(n.removeLabel = function (t) {
					return delete this.labels[t], this;
				}),
				(n.addPause = function (t, e, n) {
					var i = en.delayedCall(0, e || mt, n);
					return (i.data = 'isPause'), (this._hasPause = 1), Kt(this, i, ie(this, t));
				}),
				(n.removePause = function (t) {
					var e = this._first;
					for (t = ie(this, t); e; ) e._start === t && 'isPause' === e.data && Gt(e), (e = e._next);
				}),
				(n.killTweensOf = function (t, e, n) {
					for (var i = this.getTweensOf(t, n), r = i.length; r--; ) Xe !== i[r] && i[r].kill(t, e);
					return this;
				}),
				(n.getTweensOf = function (t, e) {
					for (var n, i = [], r = he(t), o = this._first, s = Z(e); o; )
						o instanceof en
							? Rt(o._targets, r) && (s ? (!Xe || (o._initted && o._ts)) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && i.push(o)
							: (n = o.getTweensOf(r, e)).length && i.push.apply(i, n),
							(o = o._next);
					return i;
				}),
				(n.tweenTo = function (t, e) {
					e = e || {};
					var n = this,
						i = ie(n, t),
						r = e,
						o = r.startAt,
						s = r.onStart,
						a = r.onStartParams,
						l = en.to(
							n,
							Nt(e, {
								ease: 'none',
								lazy: !1,
								time: i,
								overwrite: 'auto',
								duration: e.duration || Math.abs((i - (o && 'time' in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
								onStart: function () {
									n.pause();
									var t = e.duration || Math.abs((i - n._time) / n.timeScale());
									l._dur !== t && te(l, t, 0, 1).render(l._time, !0, !0), s && s.apply(l, a || []);
								},
							}),
						);
					return l;
				}),
				(n.tweenFromTo = function (t, e, n) {
					return this.tweenTo(
						e,
						Nt(
							{
								startAt: {
									time: ie(this, t),
								},
							},
							n,
						),
					);
				}),
				(n.recent = function () {
					return this._recent;
				}),
				(n.nextLabel = function (t) {
					return void 0 === t && (t = this._time), xe(this, ie(this, t));
				}),
				(n.previousLabel = function (t) {
					return void 0 === t && (t = this._time), xe(this, ie(this, t), 1);
				}),
				(n.currentLabel = function (t) {
					return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8);
				}),
				(n.shiftChildren = function (t, e, n) {
					void 0 === n && (n = 0);
					for (var i, r = this._first, o = this.labels; r; ) r._start >= n && ((r._start += t), (r._end += t)), (r = r._next);
					if (e) for (i in o) o[i] >= n && (o[i] += t);
					return Vt(this);
				}),
				(n.invalidate = function () {
					var e = this._first;
					for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
					return t.prototype.invalidate.call(this);
				}),
				(n.clear = function (t) {
					void 0 === t && (t = !0);
					for (var e, n = this._first; n; ) (e = n._next), this.remove(n), (n = e);
					return (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Vt(this);
				}),
				(n.totalDuration = function (t) {
					var e,
						n,
						i,
						r = 0,
						o = this,
						s = o._last,
						a = U;
					if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
					if (o._dirty) {
						for (i = o.parent; s; )
							(e = s._prev),
								s._dirty && s.totalDuration(),
								(n = s._start) > a && o._sort && s._ts && !o._lock ? ((o._lock = 1), (Kt(o, s, n - s._delay, 1)._lock = 0)) : (a = n),
								n < 0 && s._ts && ((r -= n), ((!i && !o._dp) || (i && i.smoothChildTiming)) && ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)), o.shiftChildren(-n, !1, -Infinity), (a = 0)),
								s._end > r && s._ts && (r = s._end),
								(s = e);
						te(o, o === m && o._time > r ? o._time : r, 1, 1), (o._dirty = 0);
					}
					return o._tDur;
				}),
				(e.updateRoot = function (t) {
					if ((m._ts && (Ot(m, Xt(t, m)), (_ = Ce.frame)), Ce.frame >= bt)) {
						bt += k.autoSleep || 120;
						var e = m._first;
						if ((!e || !e._ts) && k.autoSleep && Ce._listeners.length < 2) {
							for (; e && !e._ts; ) e = e._next;
							e || Ce.sleep();
						}
					}
				}),
				e
			);
		})(We);
		Nt(qe.prototype, {
			_lock: 0,
			_hasPause: 0,
			_forcing: 0,
		});
		var Xe,
			Ye = function (t, e, n, i, r, o, s) {
				var a,
					l,
					c,
					h,
					u,
					d,
					p,
					f,
					m = new gn(this._pt, t, e, 0, 1, hn, null, r),
					g = 0,
					v = 0;
				for (m.b = n, m.e = i, n += '', (p = ~(i += '').indexOf('random(')) && (i = ve(i)), o && (o((f = [n, i]), t, e), (n = f[0]), (i = f[1])), l = n.match(st) || []; (a = st.exec(i)); )
					(h = a[0]),
						(u = i.substring(g, a.index)),
						c ? (c = (c + 1) % 5) : 'rgba(' === u.substr(-5) && (c = 1),
						h !== l[v++] &&
							((d = parseFloat(l[v - 1]) || 0),
							(m._pt = {
								_next: m._pt,
								p: u || 1 === v ? u : ',',
								s: d,
								c: '=' === h.charAt(1) ? parseFloat(h.substr(2)) * ('-' === h.charAt(0) ? -1 : 1) : parseFloat(h) - d,
								m: c && c < 4 ? Math.round : 0,
							}),
							(g = st.lastIndex));
				return (m.c = g < i.length ? i.substring(g, i.length) : ''), (m.fp = s), (at.test(i) || p) && (m.e = 0), (this._pt = m), m;
			},
			Ze = function (t, e, n, i, r, o, s, a, l) {
				Y(i) && (i = i(r || 0, t, o));
				var c,
					h = t[e],
					u = 'get' !== n ? n : Y(h) ? (l ? t[e.indexOf('set') || !Y(t['get' + e.substr(3)]) ? e : 'get' + e.substr(3)](l) : t[e]()) : h,
					d = Y(h) ? (l ? on : rn) : nn;
				if ((X(i) && (~i.indexOf('random(') && (i = ve(i)), '=' === i.charAt(1) && (i = parseFloat(u) + parseFloat(i.substr(2)) * ('-' === i.charAt(0) ? -1 : 1) + (se(u) || 0))), u !== i))
					return isNaN(u * i)
						? (!h && !(e in t) && dt(e, i), Ye.call(this, t, e, u, i, d, a || k.stringFilter, l))
						: ((c = new gn(this._pt, t, e, +u || 0, i - (u || 0), 'boolean' == typeof h ? cn : ln, 0, d)), l && (c.fp = l), s && c.modifier(s, this, t), (this._pt = c));
			},
			Je = function (t, e, n, i, r, o) {
				var s, a, l, c;
				if (
					xt[t] &&
					!1 !==
						(s = new xt[t]()).init(
							r,
							s.rawVars
								? e[t]
								: (function (t, e, n, i, r) {
										if ((Y(t) && (t = Qe(t, r, e, n, i)), !K(t) || (t.style && t.nodeType) || nt(t) || et(t))) return X(t) ? Qe(t, r, e, n, i) : t;
										var o,
											s = {};
										for (o in t) s[o] = Qe(t[o], r, e, n, i);
										return s;
								  })(e[t], i, r, o, n),
							n,
							i,
							o,
						) &&
					((n._pt = a = new gn(n._pt, r, t, 0, 1, s.render, s, 0, s.priority)), n !== b)
				)
					for (l = n._ptLookup[n._targets.indexOf(r)], c = s._props.length; c--; ) l[s._props[c]] = a;
				return s;
			},
			Ke = function t(e, n) {
				var i,
					r,
					o,
					s,
					a,
					l,
					c,
					h,
					u,
					d,
					p,
					f,
					g,
					v = e.vars,
					y = v.ease,
					x = v.startAt,
					_ = v.immediateRender,
					b = v.lazy,
					w = v.onUpdate,
					M = v.onUpdateParams,
					S = v.callbackScope,
					T = v.runBackwards,
					E = v.yoyoEase,
					A = v.keyframes,
					L = v.autoRevert,
					R = e._dur,
					P = e._startAt,
					C = e._targets,
					O = e.parent,
					D = O && 'nested' === O.data ? O.parent._targets : C,
					I = 'auto' === e._overwrite,
					N = e.timeline;
				if (
					(N && (!A || !y) && (y = 'none'),
					(e._ease = Fe(y, F.ease)),
					(e._yEase = E ? Be(Fe(!0 === E ? y : E, F.ease)) : 0),
					E && e._yoyo && !e._repeat && ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
					!N)
				) {
					if (((f = (h = C[0] ? Tt(C[0]).harness : 0) && v[h.prop]), (i = Ft(v, gt)), P && P.render(-1, !0).kill(), x)) {
						if (
							(Gt(
								(e._startAt = en.set(
									C,
									Nt(
										{
											data: 'isStart',
											overwrite: !1,
											parent: O,
											immediateRender: !0,
											lazy: Q(b),
											startAt: null,
											delay: 0,
											onUpdate: w,
											onUpdateParams: M,
											callbackScope: S,
											stagger: 0,
										},
										x,
									),
								)),
							),
							_)
						)
							if (n > 0) L || (e._startAt = 0);
							else if (R && !(n < 0 && P)) return void (n && (e._zTime = n));
					} else if (T && R)
						if (P) !L && (e._startAt = 0);
						else if (
							(n && (_ = !1),
							(o = Nt(
								{
									overwrite: !1,
									data: 'isFromStart',
									lazy: _ && Q(b),
									immediateRender: _,
									stagger: 0,
									parent: O,
								},
								i,
							)),
							f && (o[h.prop] = f),
							Gt((e._startAt = en.set(C, o))),
							_)
						) {
							if (!n) return;
						} else t(e._startAt, 1e-8);
					for (e._pt = 0, b = (R && Q(b)) || (b && !R), r = 0; r < C.length; r++) {
						if (
							((c = (a = C[r])._gsap || St(C)[r]._gsap),
							(e._ptLookup[r] = d = {}),
							yt[c.id] && vt.length && Ct(),
							(p = D === C ? r : D.indexOf(a)),
							h &&
								!1 !== (u = new h()).init(a, f || i, e, p, D) &&
								((e._pt = s = new gn(e._pt, a, u.name, 0, 1, u.render, u, 0, u.priority)),
								u._props.forEach(function (t) {
									d[t] = s;
								}),
								u.priority && (l = 1)),
							!h || f)
						)
							for (o in i) xt[o] && (u = Je(o, i, e, p, a, D)) ? u.priority && (l = 1) : (d[o] = s = Ze.call(e, a, o, 'get', i[o], p, D, 0, v.stringFilter));
						e._op && e._op[r] && e.kill(a, e._op[r]), I && e._pt && ((Xe = e), m.killTweensOf(a, d, e.globalTime(0)), (g = !e.parent), (Xe = 0)), e._pt && b && (yt[c.id] = 1);
					}
					l && mn(e), e._onInit && e._onInit(e);
				}
				(e._from = !N && !!v.runBackwards), (e._onUpdate = w), (e._initted = (!e._op || e._pt) && !g);
			},
			Qe = function (t, e, n, i, r) {
				return Y(t) ? t.call(e, n, i, r) : X(t) && ~t.indexOf('random(') ? ve(t) : t;
			},
			$e = Mt + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',
			tn = ($e + ',id,stagger,delay,duration,paused,scrollTrigger').split(','),
			en = (function (t) {
				function e(e, n, i, r) {
					var o;
					'number' == typeof n && ((i.duration = n), (n = i), (i = null));
					var s,
						a,
						l,
						c,
						h,
						u,
						d,
						f,
						g = (o = t.call(this, r ? n : Ut(n), i) || this).vars,
						v = g.duration,
						y = g.delay,
						x = g.immediateRender,
						_ = g.stagger,
						b = g.overwrite,
						w = g.keyframes,
						M = g.defaults,
						S = g.scrollTrigger,
						T = g.yoyoEase,
						E = o.parent,
						A = (nt(e) || et(e) ? Z(e[0]) : 'length' in n) ? [e] : he(e);
					if (
						((o._targets = A.length ? St(A) : pt('GSAP target ' + e + ' not found. https://greensock.com', !k.nullTargetWarn) || []), (o._ptLookup = []), (o._overwrite = b), w || _ || tt(v) || tt(y))
					) {
						if (
							((n = o.vars),
							(s = o.timeline = new qe({
								data: 'nested',
								defaults: M || {},
							})).kill(),
							(s.parent = p(o)),
							w)
						)
							Nt(s.vars.defaults, {
								ease: 'none',
							}),
								w.forEach(function (t) {
									return s.to(A, t, '>');
								});
						else {
							if (((c = A.length), (d = _ ? de(_) : mt), K(_))) for (h in _) ~$e.indexOf(h) && (f || (f = {}), (f[h] = _[h]));
							for (a = 0; a < c; a++) {
								for (h in ((l = {}), n)) tn.indexOf(h) < 0 && (l[h] = n[h]);
								(l.stagger = 0),
									T && (l.yoyoEase = T),
									f && Bt(l, f),
									(u = A[a]),
									(l.duration = +Qe(v, p(o), a, u, A)),
									(l.delay = (+Qe(y, p(o), a, u, A) || 0) - o._delay),
									!_ && 1 === c && l.delay && ((o._delay = y = l.delay), (o._start += y), (l.delay = 0)),
									s.to(u, l, d(a, u, A));
							}
							s.duration() ? (v = y = 0) : (o.timeline = 0);
						}
						v || o.duration((v = s.duration()));
					} else o.timeline = 0;
					return (
						!0 === b && ((Xe = p(o)), m.killTweensOf(A), (Xe = 0)),
						E && Jt(E, p(o)),
						(x ||
							(!v &&
								!w &&
								o._start === Lt(E._time) &&
								Q(x) &&
								(function t(e) {
									return !e || (e._ts && t(e.parent));
								})(p(o)) &&
								'nested' !== E.data)) &&
							((o._tTime = -1e-8), o.render(Math.max(0, -y))),
						S && Qt(p(o), S),
						o
					);
				}
				f(e, t);
				var n = e.prototype;
				return (
					(n.render = function (t, e, n) {
						var i,
							r,
							o,
							s,
							a,
							l,
							c,
							h,
							u,
							d = this._time,
							p = this._tDur,
							f = this._dur,
							m = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
						if (f) {
							if (m !== this._tTime || !t || n || (this._startAt && this._zTime < 0 != t < 0)) {
								if (((i = m), (h = this.timeline), this._repeat)) {
									if (
										((s = f + this._rDelay),
										(i = Lt(m % s)),
										m === p ? ((o = this._repeat), (i = f)) : ((o = ~~(m / s)) && o === m / s && ((i = f), o--), i > f && (i = f)),
										(l = this._yoyo && 1 & o) && ((u = this._yEase), (i = f - i)),
										(a = qt(this._tTime, s)),
										i === d && !n && this._initted)
									)
										return this;
									o !== a && (h && this._yEase && ke(h, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = n = 1), (this.render(Lt(s * o), !0).invalidate()._lock = 0)));
								}
								if (!this._initted) {
									if ($t(this, t < 0 ? t : i, n, e)) return (this._tTime = 0), this;
									if (f !== this._dur) return this.render(t, e, n);
								}
								for (
									this._tTime = m,
										this._time = i,
										!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
										this.ratio = c = (u || this._ease)(i / f),
										this._from && (this.ratio = c = 1 - c),
										i && !d && !e && _e(this, 'onStart'),
										r = this._pt;
									r;

								)
									r.r(c, r.d), (r = r._next);
								(h && h.render(t < 0 ? t : !i && l ? -1e-8 : h._dur * c, e, n)) || (this._startAt && (this._zTime = t)),
									this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), _e(this, 'onUpdate')),
									this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && _e(this, 'onRepeat'),
									(m !== this._tDur && m) ||
										this._tTime !== m ||
										(t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
										(t || !f) && ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) && Gt(this, 1),
										e || (t < 0 && !d) || (!m && !d) || (_e(this, m === p ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom()));
							}
						} else
							!(function (t, e, n, i) {
								var r,
									o,
									s = t.ratio,
									a = e < 0 || (!e && s && !t._start && t._zTime > 1e-8 && !t._dp._lock) || ((t._ts < 0 || t._dp._ts < 0) && 'isFromStart' !== t.data && 'isStart' !== t.data) ? 0 : 1,
									l = t._rDelay,
									c = 0;
								if (
									(l && t._repeat && ((c = oe(0, t._tDur, e)), qt(c, l) !== (o = qt(t._tTime, l)) && ((s = 1 - a), t.vars.repeatRefresh && t._initted && t.invalidate())),
									a !== s || i || 1e-8 === t._zTime || (!e && t._zTime))
								) {
									if (!t._initted && $t(t, e, i, n)) return;
									for (o = t._zTime, t._zTime = e || (n ? 1e-8 : 0), n || (n = e && !o), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = c, n || _e(t, 'onStart'), r = t._pt; r; )
										r.r(a, r.d), (r = r._next);
									t._startAt && e < 0 && t._startAt.render(e, !0, !0),
										t._onUpdate && !n && _e(t, 'onUpdate'),
										c && t._repeat && !n && t.parent && _e(t, 'onRepeat'),
										(e >= t._tDur || e < 0) && t.ratio === a && (a && Gt(t, 1), n || (_e(t, a ? 'onComplete' : 'onReverseComplete', !0), t._prom && t._prom()));
								} else t._zTime || (t._zTime = e);
							})(this, t, e, n);
						return this;
					}),
					(n.targets = function () {
						return this._targets;
					}),
					(n.invalidate = function () {
						return (
							(this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
						);
					}),
					(n.kill = function (t, e) {
						if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e)) && ((this._lazy = 0), this.parent))) return be(this);
						if (this.timeline) {
							var n = this.timeline.totalDuration();
							return (
								this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)._first || be(this),
								this.parent && n !== this.timeline.totalDuration() && te(this, (this._dur * this.timeline._tDur) / n, 0, 1),
								this
							);
						}
						var i,
							r,
							o,
							s,
							a,
							l,
							c,
							h = this._targets,
							u = t ? he(t) : h,
							d = this._ptLookup,
							p = this._pt;
						if (
							(!e || 'all' === e) &&
							(function (t, e) {
								for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; );
								return n < 0;
							})(h, u)
						)
							return 'all' === e && (this._pt = 0), be(this);
						for (
							i = this._op = this._op || [],
								'all' !== e &&
									(X(e) &&
										((a = {}),
										At(e, function (t) {
											return (a[t] = 1);
										}),
										(e = a)),
									(e = (function (t, e) {
										var n,
											i,
											r,
											o,
											s = t[0] ? Tt(t[0]).harness : 0,
											a = s && s.aliases;
										if (!a) return e;
										for (i in ((n = Bt({}, e)), a)) if ((i in n)) for (r = (o = a[i].split(',')).length; r--; ) n[o[r]] = n[i];
										return n;
									})(h, e))),
								c = h.length;
							c--;

						)
							if (~u.indexOf(h[c]))
								for (a in ((r = d[c]), 'all' === e ? ((i[c] = e), (s = r), (o = {})) : ((o = i[c] = i[c] || {}), (s = e)), s))
									(l = r && r[a]) && (('kill' in l.d && !0 !== l.d.kill(a)) || Ht(this, l, '_pt'), delete r[a]), 'all' !== o && (o[a] = 1);
						return this._initted && !this._pt && p && be(this), this;
					}),
					(e.to = function (t, n) {
						return new e(t, n, arguments[2]);
					}),
					(e.from = function (t, n) {
						return new e(t, Pt(arguments, 1));
					}),
					(e.delayedCall = function (t, n, i, r) {
						return new e(n, 0, {
							immediateRender: !1,
							lazy: !1,
							overwrite: !1,
							delay: t,
							onComplete: n,
							onReverseComplete: n,
							onCompleteParams: i,
							onReverseCompleteParams: i,
							callbackScope: r,
						});
					}),
					(e.fromTo = function (t, n, i) {
						return new e(t, Pt(arguments, 2));
					}),
					(e.set = function (t, n) {
						return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
					}),
					(e.killTweensOf = function (t, e, n) {
						return m.killTweensOf(t, e, n);
					}),
					e
				);
			})(We);
		Nt(en.prototype, {
			_targets: [],
			_lazy: 0,
			_startAt: 0,
			_op: 0,
			_onInit: 0,
		}),
			At('staggerTo,staggerFrom,staggerFromTo', function (t) {
				en[t] = function () {
					var e = new qe(),
						n = ae.call(arguments, 0);
					return n.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, n);
				};
			});
		var nn = function (t, e, n) {
				return (t[e] = n);
			},
			rn = function (t, e, n) {
				return t[e](n);
			},
			on = function (t, e, n, i) {
				return t[e](i.fp, n);
			},
			sn = function (t, e, n) {
				return t.setAttribute(e, n);
			},
			an = function (t, e) {
				return Y(t[e]) ? rn : J(t[e]) && t.setAttribute ? sn : nn;
			},
			ln = function (t, e) {
				return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
			},
			cn = function (t, e) {
				return e.set(e.t, e.p, !!(e.s + e.c * t), e);
			},
			hn = function (t, e) {
				var n = e._pt,
					i = '';
				if (!t && e.b) i = e.b;
				else if (1 === t && e.e) i = e.e;
				else {
					for (; n; ) (i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i), (n = n._next);
					i += e.c;
				}
				e.set(e.t, e.p, i, e);
			},
			un = function (t, e) {
				for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
			},
			dn = function (t, e, n, i) {
				for (var r, o = this._pt; o; ) (r = o._next), o.p === i && o.modifier(t, e, n), (o = r);
			},
			pn = function (t) {
				for (var e, n, i = this._pt; i; ) (n = i._next), (i.p === t && !i.op) || i.op === t ? Ht(this, i, '_pt') : i.dep || (e = 1), (i = n);
				return !e;
			},
			fn = function (t, e, n, i) {
				i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
			},
			mn = function (t) {
				for (var e, n, i, r, o = t._pt; o; ) {
					for (e = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
					(o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o), (o._next = n) ? (n._prev = o) : (r = o), (o = e);
				}
				t._pt = i;
			},
			gn = (function () {
				function t(t, e, n, i, r, o, s, a, l) {
					(this.t = e), (this.s = i), (this.c = r), (this.p = n), (this.r = o || ln), (this.d = s || this), (this.set = a || nn), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
				}
				return (
					(t.prototype.modifier = function (t, e, n) {
						(this.mSet = this.mSet || this.set), (this.set = fn), (this.m = t), (this.mt = n), (this.tween = e);
					}),
					t
				);
			})();
		At(
			Mt +
				'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
			function (t) {
				return (gt[t] = 1);
			},
		),
			(ct.TweenMax = ct.TweenLite = en),
			(ct.TimelineLite = ct.TimelineMax = qe),
			(m = new qe({
				sortChildren: !1,
				defaults: F,
				autoRemoveChildren: !0,
				id: 'root',
				smoothChildTiming: !0,
			})),
			(k.stringFilter = Pe);
		var vn = {
			registerPlugin: function () {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				e.forEach(function (t) {
					return we(t);
				});
			},
			timeline: function (t) {
				return new qe(t);
			},
			getTweensOf: function (t, e) {
				return m.getTweensOf(t, e);
			},
			getProperty: function (t, e, n, i) {
				X(t) && (t = he(t)[0]);
				var r = Tt(t || {}).get,
					o = n ? It : Dt;
				return (
					'native' === n && (n = ''),
					t
						? e
							? o(((xt[e] && xt[e].get) || r)(t, e, n, i))
							: function (e, n, i) {
									return o(((xt[e] && xt[e].get) || r)(t, e, n, i));
							  }
						: t
				);
			},
			quickSetter: function (t, e, n) {
				if ((t = he(t)).length > 1) {
					var i = t.map(function (t) {
							return _n.quickSetter(t, e, n);
						}),
						r = i.length;
					return function (t) {
						for (var e = r; e--; ) i[e](t);
					};
				}
				t = t[0] || {};
				var o = xt[e],
					s = Tt(t),
					a = (s.harness && (s.harness.aliases || {})[e]) || e,
					l = o
						? function (e) {
								var i = new o();
								(b._pt = 0), i.init(t, n ? e + n : e, b, 0, [t]), i.render(1, i), b._pt && un(1, b);
						  }
						: s.set(t, a);
				return o
					? l
					: function (e) {
							return l(t, a, n ? e + n : e, s, 1);
					  };
			},
			isTweening: function (t) {
				return m.getTweensOf(t, !0).length > 0;
			},
			defaults: function (t) {
				return t && t.ease && (t.ease = Fe(t.ease, F.ease)), kt(F, t || {});
			},
			config: function (t) {
				return kt(k, t || {});
			},
			registerEffect: function (t) {
				var e = t.name,
					n = t.effect,
					i = t.plugins,
					r = t.defaults,
					o = t.extendTimeline;
				(i || '').split(',').forEach(function (t) {
					return t && !xt[t] && !ct[t] && pt(e + ' effect requires ' + t + ' plugin.');
				}),
					(_t[e] = function (t, e, i) {
						return n(he(t), Nt(e || {}, r), i);
					}),
					o &&
						(qe.prototype[e] = function (t, n, i) {
							return this.add(_t[e](t, K(n) ? n : (i = n) && {}, this), i);
						});
			},
			registerEase: function (t, e) {
				De[t] = Fe(e);
			},
			parseEase: function (t, e) {
				return arguments.length ? Fe(t, e) : De;
			},
			getById: function (t) {
				return m.getById(t);
			},
			exportRoot: function (t, e) {
				void 0 === t && (t = {});
				var n,
					i,
					r = new qe(t);
				for (r.smoothChildTiming = Q(t.smoothChildTiming), m.remove(r), r._dp = 0, r._time = r._tTime = m._time, n = m._first; n; )
					(i = n._next), (!e && !n._dur && n instanceof en && n.vars.onComplete === n._targets[0]) || Kt(r, n, n._start - n._delay), (n = i);
				return Kt(m, r, 0), r;
			},
			utils: {
				wrap: function t(e, n, i) {
					var r = n - e;
					return nt(e)
						? ge(e, t(0, e.length), n)
						: re(i, function (t) {
								return ((r + ((t - e) % r)) % r) + e;
						  });
				},
				wrapYoyo: function t(e, n, i) {
					var r = n - e,
						o = 2 * r;
					return nt(e)
						? ge(e, t(0, e.length - 1), n)
						: re(i, function (t) {
								return e + ((t = (o + ((t - e) % o)) % o || 0) > r ? o - t : t);
						  });
				},
				distribute: de,
				random: me,
				snap: fe,
				normalize: function (t, e, n) {
					return ye(t, e, 0, 1, n);
				},
				getUnit: se,
				clamp: function (t, e, n) {
					return re(n, function (n) {
						return oe(t, e, n);
					});
				},
				splitColor: Te,
				toArray: he,
				mapRange: ye,
				pipe: function () {
					for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
					return function (t) {
						return e.reduce(function (t, e) {
							return e(t);
						}, t);
					};
				},
				unitize: function (t, e) {
					return function (n) {
						return t(parseFloat(n)) + (e || se(n));
					};
				},
				interpolate: function t(e, n, i, r) {
					var o = isNaN(e + n)
						? 0
						: function (t) {
								return (1 - t) * e + t * n;
						  };
					if (!o) {
						var s,
							a,
							l,
							c,
							h,
							u = X(e),
							d = {};
						if ((!0 === i && (r = 1) && (i = null), u))
							(e = {
								p: e,
							}),
								(n = {
									p: n,
								});
						else if (nt(e) && !nt(n)) {
							for (l = [], c = e.length, h = c - 2, a = 1; a < c; a++) l.push(t(e[a - 1], e[a]));
							c--,
								(o = function (t) {
									t *= c;
									var e = Math.min(h, ~~t);
									return l[e](t - e);
								}),
								(i = n);
						} else r || (e = Bt(nt(e) ? [] : {}, e));
						if (!l) {
							for (s in n) Ze.call(d, e, s, 'get', n[s]);
							o = function (t) {
								return un(t, d) || (u ? e.p : e);
							};
						}
					}
					return re(i, o);
				},
				shuffle: ue,
			},
			install: ut,
			effects: _t,
			ticker: Ce,
			updateRoot: qe.updateRoot,
			plugins: xt,
			globalTimeline: m,
			core: {
				PropTween: gn,
				globals: ft,
				Tween: en,
				Timeline: qe,
				Animation: We,
				getCache: Tt,
				_removeLinkedListItem: Ht,
			},
		};
		At('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
			return (vn[t] = en[t]);
		}),
			Ce.add(qe.updateRoot),
			(b = vn.to(
				{},
				{
					duration: 0,
				},
			));
		var yn = function (t, e) {
				for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; ) n = n._next;
				return n;
			},
			xn = function (t, e) {
				return {
					name: t,
					rawVars: 1,
					init: function (t, n, i) {
						i._onInit = function (t) {
							var i, r;
							if (
								(X(n) &&
									((i = {}),
									At(n, function (t) {
										return (i[t] = 1);
									}),
									(n = i)),
								e)
							) {
								for (r in ((i = {}), n)) i[r] = e(n[r]);
								n = i;
							}
							!(function (t, e) {
								var n,
									i,
									r,
									o = t._targets;
								for (n in e) for (i = o.length; i--; ) (r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = yn(r, n)), r && r.modifier && r.modifier(e[n], t, o[i], n));
							})(t, n);
						};
					},
				};
			},
			_n =
				vn.registerPlugin(
					{
						name: 'attr',
						init: function (t, e, n, i, r) {
							var o, s;
							for (o in e) (s = this.add(t, 'setAttribute', (t.getAttribute(o) || 0) + '', e[o], i, r, 0, 0, o)) && (s.op = o), this._props.push(o);
						},
					},
					{
						name: 'endArray',
						init: function (t, e) {
							for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
						},
					},
					xn('roundProps', pe),
					xn('modifiers'),
					xn('snap', fe),
				) || vn;
		(en.version = qe.version = _n.version = '3.5.1'), (x = 1), $() && Oe();
		De.Power0, De.Power1, De.Power2, De.Power3, De.Power4, De.Linear, De.Quad, De.Cubic, De.Quart, De.Quint, De.Strong, De.Elastic, De.Back, De.SteppedEase, De.Bounce, De.Sine, De.Expo, De.Circ;
		/*!
		 * CSSPlugin 3.5.1
		 * https://greensock.com
		 *
		 * Copyright 2008-2020, GreenSock. All rights reserved.
		 * Subject to the terms at https://greensock.com/standard-license or for
		 * Club GreenSock members, the agreement issued with that membership.
		 * @author: Jack Doyle, jack@greensock.com
		 */
		var bn,
			wn,
			Mn,
			Sn,
			Tn,
			En,
			An,
			Ln,
			Rn = {},
			Pn = 180 / Math.PI,
			Cn = Math.PI / 180,
			On = Math.atan2,
			Dn = /([A-Z])/g,
			In = /(?:left|right|width|margin|padding|x)/i,
			Nn = /[\s,\(]\S/,
			zn = {
				autoAlpha: 'opacity,visibility',
				scale: 'scaleX,scaleY',
				alpha: 'opacity',
			},
			Bn = function (t, e) {
				return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
			},
			kn = function (t, e) {
				return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
			},
			Fn = function (t, e) {
				return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
			},
			Un = function (t, e) {
				var n = e.s + e.c * t;
				e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
			},
			Hn = function (t, e) {
				return e.set(e.t, e.p, t ? e.e : e.b, e);
			},
			Gn = function (t, e) {
				return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
			},
			Vn = function (t, e, n) {
				return (t.style[e] = n);
			},
			jn = function (t, e, n) {
				return t.style.setProperty(e, n);
			},
			Wn = function (t, e, n) {
				return (t._gsap[e] = n);
			},
			qn = function (t, e, n) {
				return (t._gsap.scaleX = t._gsap.scaleY = n);
			},
			Xn = function (t, e, n, i, r) {
				var o = t._gsap;
				(o.scaleX = o.scaleY = n), o.renderTransform(r, o);
			},
			Yn = function (t, e, n, i, r) {
				var o = t._gsap;
				(o[e] = n), o.renderTransform(r, o);
			},
			Zn = 'transform',
			Jn = Zn + 'Origin',
			Kn = function (t, e) {
				var n = wn.createElementNS ? wn.createElementNS((e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), t) : wn.createElement(t);
				return n.style ? n : wn.createElement(t);
			},
			Qn = function t(e, n, i) {
				var r = getComputedStyle(e);
				return r[n] || r.getPropertyValue(n.replace(Dn, '-$1').toLowerCase()) || r.getPropertyValue(n) || (!i && t(e, ti(n) || n, 1)) || '';
			},
			$n = 'O,Moz,ms,Ms,Webkit'.split(','),
			ti = function (t, e, n) {
				var i = (e || Tn).style,
					r = 5;
				if (t in i && !n) return t;
				for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !($n[r] + t in i); );
				return r < 0 ? null : (3 === r ? 'ms' : r >= 0 ? $n[r] : '') + t;
			},
			ei = function () {
				'undefined' != typeof window &&
					window.document &&
					((bn = window),
					(wn = bn.document),
					(Mn = wn.documentElement),
					(Tn = Kn('div') || {
						style: {},
					}),
					(En = Kn('div')),
					(Zn = ti(Zn)),
					(Jn = Zn + 'Origin'),
					(Tn.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
					(Ln = !!ti('perspective')),
					(Sn = 1));
			},
			ni = function t(e) {
				var n,
					i = Kn('svg', (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'),
					r = this.parentNode,
					o = this.nextSibling,
					s = this.style.cssText;
				if ((Mn.appendChild(i), i.appendChild(this), (this.style.display = 'block'), e))
					try {
						(n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
					} catch (t) {}
				else this._gsapBBox && (n = this._gsapBBox());
				return r && (o ? r.insertBefore(this, o) : r.appendChild(this)), Mn.removeChild(i), (this.style.cssText = s), n;
			},
			ii = function (t, e) {
				for (var n = e.length; n--; ) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
			},
			ri = function (t) {
				var e;
				try {
					e = t.getBBox();
				} catch (n) {
					e = ni.call(t, !0);
				}
				return (
					(e && (e.width || e.height)) || t.getBBox === ni || (e = ni.call(t, !0)),
					!e || e.width || e.x || e.y
						? e
						: {
								x: +ii(t, ['x', 'cx', 'x1']) || 0,
								y: +ii(t, ['y', 'cy', 'y1']) || 0,
								width: 0,
								height: 0,
						  }
				);
			},
			oi = function (t) {
				return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ri(t));
			},
			si = function (t, e) {
				if (e) {
					var n = t.style;
					e in Rn && e !== Jn && (e = Zn),
						n.removeProperty ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) || (e = '-' + e), n.removeProperty(e.replace(Dn, '-$1').toLowerCase())) : n.removeAttribute(e);
				}
			},
			ai = function (t, e, n, i, r, o) {
				var s = new gn(t._pt, e, n, 0, 1, o ? Gn : Hn);
				return (t._pt = s), (s.b = i), (s.e = r), t._props.push(n), s;
			},
			li = {
				deg: 1,
				rad: 1,
				turn: 1,
			},
			ci = function t(e, n, i, r) {
				var o,
					s,
					a,
					l,
					c = parseFloat(i) || 0,
					h = (i + '').trim().substr((c + '').length) || 'px',
					u = Tn.style,
					d = In.test(n),
					p = 'svg' === e.tagName.toLowerCase(),
					f = (p ? 'client' : 'offset') + (d ? 'Width' : 'Height'),
					m = 'px' === r,
					g = '%' === r;
				return r === h || !c || li[r] || li[h]
					? c
					: ('px' !== h && !m && (c = t(e, n, i, 'px')),
					  (l = e.getCTM && oi(e)),
					  g && (Rn[n] || ~n.indexOf('adius'))
							? Lt((c / (l ? e.getBBox()[d ? 'width' : 'height'] : e[f])) * 100)
							: ((u[d ? 'width' : 'height'] = 100 + (m ? h : r)),
							  (s = ~n.indexOf('adius') || ('em' === r && e.appendChild && !p) ? e : e.parentNode),
							  l && (s = (e.ownerSVGElement || {}).parentNode),
							  (s && s !== wn && s.appendChild) || (s = wn.body),
							  (a = s._gsap) && g && a.width && d && a.time === Ce.time
									? Lt((c / a.width) * 100)
									: ((g || '%' === h) && (u.position = Qn(e, 'position')),
									  s === e && (u.position = 'static'),
									  s.appendChild(Tn),
									  (o = Tn[f]),
									  s.removeChild(Tn),
									  (u.position = 'absolute'),
									  d && g && (((a = Tt(s)).time = Ce.time), (a.width = s[f])),
									  Lt(m ? (o * c) / 100 : o && c ? (100 / o) * c : 0))));
			},
			hi = function (t, e, n, i) {
				var r;
				return (
					Sn || ei(),
					e in zn && 'transform' !== e && ~(e = zn[e]).indexOf(',') && (e = e.split(',')[0]),
					Rn[e] && 'transform' !== e
						? ((r = bi(t, i)), (r = 'transformOrigin' !== e ? r[e] : wi(Qn(t, Jn)) + ' ' + r.zOrigin + 'px'))
						: (!(r = t.style[e]) || 'auto' === r || i || ~(r + '').indexOf('calc(')) && (r = (fi[e] && fi[e](t, e, n)) || Qn(t, e) || Et(t, e) || ('opacity' === e ? 1 : 0)),
					n && !~(r + '').indexOf(' ') ? ci(t, e, r, n) + n : r
				);
			},
			ui = function (t, e, n, i) {
				if (!n || 'none' === n) {
					var r = ti(e, t, 1),
						o = r && Qn(t, r, 1);
					o && o !== n ? ((e = r), (n = o)) : 'borderColor' === e && (n = Qn(t, 'borderTopColor'));
				}
				var s,
					a,
					l,
					c,
					h,
					u,
					d,
					p,
					f,
					m,
					g,
					v,
					y = new gn(this._pt, t.style, e, 0, 1, hn),
					x = 0,
					_ = 0;
				if (
					((y.b = n),
					(y.e = i),
					(n += ''),
					'auto' === (i += '') && ((t.style[e] = i), (i = Qn(t, e) || i), (t.style[e] = n)),
					Pe((s = [n, i])),
					(i = s[1]),
					(l = (n = s[0]).match(ot) || []),
					(i.match(ot) || []).length)
				) {
					for (; (a = ot.exec(i)); )
						(d = a[0]),
							(f = i.substring(x, a.index)),
							h ? (h = (h + 1) % 5) : ('rgba(' !== f.substr(-5) && 'hsla(' !== f.substr(-5)) || (h = 1),
							d !== (u = l[_++] || '') &&
								((c = parseFloat(u) || 0),
								(g = u.substr((c + '').length)),
								(v = '=' === d.charAt(1) ? +(d.charAt(0) + '1') : 0) && (d = d.substr(2)),
								(p = parseFloat(d)),
								(m = d.substr((p + '').length)),
								(x = ot.lastIndex - m.length),
								m || ((m = m || k.units[e] || g), x === i.length && ((i += m), (y.e += m))),
								g !== m && (c = ci(t, e, u, m) || 0),
								(y._pt = {
									_next: y._pt,
									p: f || 1 === _ ? f : ',',
									s: c,
									c: v ? v * p : p - c,
									m: h && h < 4 ? Math.round : 0,
								}));
					y.c = x < i.length ? i.substring(x, i.length) : '';
				} else y.r = 'display' === e && 'none' === i ? Gn : Hn;
				return at.test(i) && (y.e = 0), (this._pt = y), y;
			},
			di = {
				top: '0%',
				bottom: '100%',
				left: '0%',
				right: '100%',
				center: '50%',
			},
			pi = function (t, e) {
				if (e.tween && e.tween._time === e.tween._dur) {
					var n,
						i,
						r,
						o = e.t,
						s = o.style,
						a = e.u,
						l = o._gsap;
					if ('all' === a || !0 === a) (s.cssText = ''), (i = 1);
					else for (r = (a = a.split(',')).length; --r > -1; ) (n = a[r]), Rn[n] && ((i = 1), (n = 'transformOrigin' === n ? Jn : Zn)), si(o, n);
					i && (si(o, Zn), l && (l.svg && o.removeAttribute('transform'), bi(o, 1), (l.uncache = 1)));
				}
			},
			fi = {
				clearProps: function (t, e, n, i, r) {
					if ('isFromStart' !== r.data) {
						var o = (t._pt = new gn(t._pt, e, n, 0, 0, pi));
						return (o.u = i), (o.pr = -10), (o.tween = r), t._props.push(n), 1;
					}
				},
			},
			mi = [1, 0, 0, 1, 0, 0],
			gi = {},
			vi = function (t) {
				return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
			},
			yi = function (t) {
				var e = Qn(t, Zn);
				return vi(e) ? mi : e.substr(7).match(rt).map(Lt);
			},
			xi = function (t, e) {
				var n,
					i,
					r,
					o,
					s = t._gsap || Tt(t),
					a = t.style,
					l = yi(t);
				return s.svg && t.getAttribute('transform')
					? '1,0,0,1,0,0' === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(',')
						? mi
						: l
					: (l !== mi ||
							t.offsetParent ||
							t === Mn ||
							s.svg ||
							((r = a.display),
							(a.display = 'block'),
							((n = t.parentNode) && t.offsetParent) || ((o = 1), (i = t.nextSibling), Mn.appendChild(t)),
							(l = yi(t)),
							r ? (a.display = r) : si(t, 'display'),
							o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : Mn.removeChild(t))),
					  e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
			},
			_i = function (t, e, n, i, r, o) {
				var s,
					a,
					l,
					c = t._gsap,
					h = r || xi(t, !0),
					u = c.xOrigin || 0,
					d = c.yOrigin || 0,
					p = c.xOffset || 0,
					f = c.yOffset || 0,
					m = h[0],
					g = h[1],
					v = h[2],
					y = h[3],
					x = h[4],
					_ = h[5],
					b = e.split(' '),
					w = parseFloat(b[0]) || 0,
					M = parseFloat(b[1]) || 0;
				n
					? h !== mi && (a = m * y - g * v) && ((l = w * (-g / a) + M * (m / a) - (m * _ - g * x) / a), (w = w * (y / a) + M * (-v / a) + (v * _ - y * x) / a), (M = l))
					: ((w = (s = ri(t)).x + (~b[0].indexOf('%') ? (w / 100) * s.width : w)), (M = s.y + (~(b[1] || b[0]).indexOf('%') ? (M / 100) * s.height : M))),
					i || (!1 !== i && c.smooth) ? ((x = w - u), (_ = M - d), (c.xOffset = p + (x * m + _ * v) - x), (c.yOffset = f + (x * g + _ * y) - _)) : (c.xOffset = c.yOffset = 0),
					(c.xOrigin = w),
					(c.yOrigin = M),
					(c.smooth = !!i),
					(c.origin = e),
					(c.originIsAbsolute = !!n),
					(t.style[Jn] = '0px 0px'),
					o && (ai(o, c, 'xOrigin', u, w), ai(o, c, 'yOrigin', d, M), ai(o, c, 'xOffset', p, c.xOffset), ai(o, c, 'yOffset', f, c.yOffset)),
					t.setAttribute('data-svg-origin', w + ' ' + M);
			},
			bi = function (t, e) {
				var n = t._gsap || new je(t);
				if ('x' in n && !e && !n.uncache) return n;
				var i,
					r,
					o,
					s,
					a,
					l,
					c,
					h,
					u,
					d,
					p,
					f,
					m,
					g,
					v,
					y,
					x,
					_,
					b,
					w,
					M,
					S,
					T,
					E,
					A,
					L,
					R,
					P,
					C,
					O,
					D,
					I,
					N = t.style,
					z = n.scaleX < 0,
					B = Qn(t, Jn) || '0';
				return (
					(i = r = o = l = c = h = u = d = p = 0),
					(s = a = 1),
					(n.svg = !(!t.getCTM || !oi(t))),
					(g = xi(t, n.svg)),
					n.svg && ((E = !n.uncache && t.getAttribute('data-svg-origin')), _i(t, E || B, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
					(f = n.xOrigin || 0),
					(m = n.yOrigin || 0),
					g !== mi &&
						((_ = g[0]),
						(b = g[1]),
						(w = g[2]),
						(M = g[3]),
						(i = S = g[4]),
						(r = T = g[5]),
						6 === g.length
							? ((s = Math.sqrt(_ * _ + b * b)),
							  (a = Math.sqrt(M * M + w * w)),
							  (l = _ || b ? On(b, _) * Pn : 0),
							  (u = w || M ? On(w, M) * Pn + l : 0) && (a *= Math.cos(u * Cn)),
							  n.svg && ((i -= f - (f * _ + m * w)), (r -= m - (f * b + m * M))))
							: ((I = g[6]),
							  (O = g[7]),
							  (R = g[8]),
							  (P = g[9]),
							  (C = g[10]),
							  (D = g[11]),
							  (i = g[12]),
							  (r = g[13]),
							  (o = g[14]),
							  (c = (v = On(I, C)) * Pn),
							  v &&
									((E = S * (y = Math.cos(-v)) + R * (x = Math.sin(-v))),
									(A = T * y + P * x),
									(L = I * y + C * x),
									(R = S * -x + R * y),
									(P = T * -x + P * y),
									(C = I * -x + C * y),
									(D = O * -x + D * y),
									(S = E),
									(T = A),
									(I = L)),
							  (h = (v = On(-w, C)) * Pn),
							  v && ((y = Math.cos(-v)), (D = M * (x = Math.sin(-v)) + D * y), (_ = E = _ * y - R * x), (b = A = b * y - P * x), (w = L = w * y - C * x)),
							  (l = (v = On(b, _)) * Pn),
							  v && ((E = _ * (y = Math.cos(v)) + b * (x = Math.sin(v))), (A = S * y + T * x), (b = b * y - _ * x), (T = T * y - S * x), (_ = E), (S = A)),
							  c && Math.abs(c) + Math.abs(l) > 359.9 && ((c = l = 0), (h = 180 - h)),
							  (s = Lt(Math.sqrt(_ * _ + b * b + w * w))),
							  (a = Lt(Math.sqrt(T * T + I * I))),
							  (v = On(S, T)),
							  (u = Math.abs(v) > 2e-4 ? v * Pn : 0),
							  (p = D ? 1 / (D < 0 ? -D : D) : 0)),
						n.svg && ((E = t.getAttribute('transform')), (n.forceCSS = t.setAttribute('transform', '') || !vi(Qn(t, Zn))), E && t.setAttribute('transform', E))),
					Math.abs(u) > 90 && Math.abs(u) < 270 && (z ? ((s *= -1), (u += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (u += u <= 0 ? 180 : -180))),
					(n.x = ((n.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + 'px'),
					(n.y = ((n.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + 'px'),
					(n.z = o + 'px'),
					(n.scaleX = Lt(s)),
					(n.scaleY = Lt(a)),
					(n.rotation = Lt(l) + 'deg'),
					(n.rotationX = Lt(c) + 'deg'),
					(n.rotationY = Lt(h) + 'deg'),
					(n.skewX = u + 'deg'),
					(n.skewY = d + 'deg'),
					(n.transformPerspective = p + 'px'),
					(n.zOrigin = parseFloat(B.split(' ')[2]) || 0) && (N[Jn] = wi(B)),
					(n.xOffset = n.yOffset = 0),
					(n.force3D = k.force3D),
					(n.renderTransform = n.svg ? Ei : Ln ? Ti : Si),
					(n.uncache = 0),
					n
				);
			},
			wi = function (t) {
				return (t = t.split(' '))[0] + ' ' + t[1];
			},
			Mi = function (t, e, n) {
				var i = se(e);
				return Lt(parseFloat(e) + parseFloat(ci(t, 'x', n + 'px', i))) + i;
			},
			Si = function (t, e) {
				(e.z = '0px'), (e.rotationY = e.rotationX = '0deg'), (e.force3D = 0), Ti(t, e);
			},
			Ti = function (t, e) {
				var n = e || this,
					i = n.xPercent,
					r = n.yPercent,
					o = n.x,
					s = n.y,
					a = n.z,
					l = n.rotation,
					c = n.rotationY,
					h = n.rotationX,
					u = n.skewX,
					d = n.skewY,
					p = n.scaleX,
					f = n.scaleY,
					m = n.transformPerspective,
					g = n.force3D,
					v = n.target,
					y = n.zOrigin,
					x = '',
					_ = ('auto' === g && t && 1 !== t) || !0 === g;
				if (y && ('0deg' !== h || '0deg' !== c)) {
					var b,
						w = parseFloat(c) * Cn,
						M = Math.sin(w),
						S = Math.cos(w);
					(w = parseFloat(h) * Cn), (b = Math.cos(w)), (o = Mi(v, o, M * b * -y)), (s = Mi(v, s, -Math.sin(w) * -y)), (a = Mi(v, a, S * b * -y + y));
				}
				'0px' !== m && (x += 'perspective(' + m + ') '),
					(i || r) && (x += 'translate(' + i + '%, ' + r + '%) '),
					(_ || '0px' !== o || '0px' !== s || '0px' !== a) && (x += '0px' !== a || _ ? 'translate3d(' + o + ', ' + s + ', ' + a + ') ' : 'translate(' + o + ', ' + s + ') '),
					'0deg' !== l && (x += 'rotate(' + l + ') '),
					'0deg' !== c && (x += 'rotateY(' + c + ') '),
					'0deg' !== h && (x += 'rotateX(' + h + ') '),
					('0deg' === u && '0deg' === d) || (x += 'skew(' + u + ', ' + d + ') '),
					(1 === p && 1 === f) || (x += 'scale(' + p + ', ' + f + ') '),
					(v.style[Zn] = x || 'translate(0, 0)');
			},
			Ei = function (t, e) {
				var n,
					i,
					r,
					o,
					s,
					a = e || this,
					l = a.xPercent,
					c = a.yPercent,
					h = a.x,
					u = a.y,
					d = a.rotation,
					p = a.skewX,
					f = a.skewY,
					m = a.scaleX,
					g = a.scaleY,
					v = a.target,
					y = a.xOrigin,
					x = a.yOrigin,
					_ = a.xOffset,
					b = a.yOffset,
					w = a.forceCSS,
					M = parseFloat(h),
					S = parseFloat(u);
				(d = parseFloat(d)),
					(p = parseFloat(p)),
					(f = parseFloat(f)) && ((p += f = parseFloat(f)), (d += f)),
					d || p
						? ((d *= Cn),
						  (p *= Cn),
						  (n = Math.cos(d) * m),
						  (i = Math.sin(d) * m),
						  (r = Math.sin(d - p) * -g),
						  (o = Math.cos(d - p) * g),
						  p && ((f *= Cn), (s = Math.tan(p - f)), (r *= s = Math.sqrt(1 + s * s)), (o *= s), f && ((s = Math.tan(f)), (n *= s = Math.sqrt(1 + s * s)), (i *= s))),
						  (n = Lt(n)),
						  (i = Lt(i)),
						  (r = Lt(r)),
						  (o = Lt(o)))
						: ((n = m), (o = g), (i = r = 0)),
					((M && !~(h + '').indexOf('px')) || (S && !~(u + '').indexOf('px'))) && ((M = ci(v, 'x', h, 'px')), (S = ci(v, 'y', u, 'px'))),
					(y || x || _ || b) && ((M = Lt(M + y - (y * n + x * r) + _)), (S = Lt(S + x - (y * i + x * o) + b))),
					(l || c) && ((s = v.getBBox()), (M = Lt(M + (l / 100) * s.width)), (S = Lt(S + (c / 100) * s.height))),
					(s = 'matrix(' + n + ',' + i + ',' + r + ',' + o + ',' + M + ',' + S + ')'),
					v.setAttribute('transform', s),
					w && (v.style[Zn] = s);
			},
			Ai = function (t, e, n, i, r, o) {
				var s,
					a,
					l = X(r),
					c = parseFloat(r) * (l && ~r.indexOf('rad') ? Pn : 1),
					h = o ? c * o : c - i,
					u = i + h + 'deg';
				return (
					l &&
						('short' === (s = r.split('_')[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360),
						'cw' === s && h < 0 ? (h = ((h + 36e9) % 360) - 360 * ~~(h / 360)) : 'ccw' === s && h > 0 && (h = ((h - 36e9) % 360) - 360 * ~~(h / 360))),
					(t._pt = a = new gn(t._pt, e, n, i, h, kn)),
					(a.e = u),
					(a.u = 'deg'),
					t._props.push(n),
					a
				);
			},
			Li = function (t, e, n) {
				var i,
					r,
					o,
					s,
					a,
					l,
					c,
					h = En.style,
					u = n._gsap;
				for (r in ((h.cssText = getComputedStyle(n).cssText + ';position:absolute;display:block;'), (h[Zn] = e), wn.body.appendChild(En), (i = bi(En, 1)), Rn))
					(o = u[r]) !== (s = i[r]) &&
						'perspective,force3D,transformOrigin,svgOrigin'.indexOf(r) < 0 &&
						((a = se(o) !== (c = se(s)) ? ci(n, r, o, c) : parseFloat(o)), (l = parseFloat(s)), (t._pt = new gn(t._pt, u, r, a, l - a, Bn)), (t._pt.u = c || 0), t._props.push(r));
				wn.body.removeChild(En);
			};
		At('padding,margin,Width,Radius', function (t, e) {
			var n = 'Top',
				i = 'Right',
				r = 'Bottom',
				o = 'Left',
				s = (e < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(function (n) {
					return e < 2 ? t + n : 'border' + n + t;
				});
			fi[e > 1 ? 'border' + t : t] = function (t, e, n, i, r) {
				var o, a;
				if (arguments.length < 4)
					return (
						(o = s.map(function (e) {
							return hi(t, e, n);
						})),
						5 === (a = o.join(' ')).split(o[0]).length ? o[0] : a
					);
				(o = (i + '').split(' ')),
					(a = {}),
					s.forEach(function (t, e) {
						return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
					}),
					t.init(e, a, r);
			};
		});
		var Ri,
			Pi,
			Ci = {
				name: 'css',
				register: ei,
				targetTest: function (t) {
					return t.style && t.nodeType;
				},
				init: function (t, e, n, i, r) {
					var o,
						s,
						a,
						l,
						c,
						h,
						u,
						d,
						p,
						f,
						m,
						g,
						v,
						y,
						x,
						_,
						b,
						w,
						M,
						S = this._props,
						T = t.style;
					for (u in (Sn || ei(), e))
						if ('autoRound' !== u && ((s = e[u]), !xt[u] || !Je(u, e, n, i, t, r)))
							if (((c = typeof s), (h = fi[u]), 'function' === c && (c = typeof (s = s.call(n, i, t, r))), 'string' === c && ~s.indexOf('random(') && (s = ve(s)), h)) h(this, t, u, s, n) && (x = 1);
							else if ('--' === u.substr(0, 2)) this.add(T, 'setProperty', getComputedStyle(t).getPropertyValue(u) + '', s + '', i, r, 0, 0, u);
							else if ('undefined' !== c) {
								if (
									((o = hi(t, u)),
									(l = parseFloat(o)),
									(f = 'string' === c && '=' === s.charAt(1) ? +(s.charAt(0) + '1') : 0) && (s = s.substr(2)),
									(a = parseFloat(s)),
									u in zn &&
										('autoAlpha' === u && (1 === l && 'hidden' === hi(t, 'visibility') && a && (l = 0), ai(this, T, 'visibility', l ? 'inherit' : 'hidden', a ? 'inherit' : 'hidden', !a)),
										'scale' !== u && 'transform' !== u && ~(u = zn[u]).indexOf(',') && (u = u.split(',')[0])),
									(m = u in Rn))
								)
									if (
										(g || ((v = t._gsap).renderTransform || bi(t), (y = !1 !== e.smoothOrigin && v.smooth), ((g = this._pt = new gn(this._pt, T, Zn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
										'scale' === u)
									)
										(this._pt = new gn(this._pt, v, 'scaleY', v.scaleY, f ? f * a : a - v.scaleY)), S.push('scaleY', u), (u += 'X');
									else {
										if ('transformOrigin' === u) {
											(b = void 0),
												(w = void 0),
												(M = void 0),
												(b = (_ = s).split(' ')),
												(w = b[0]),
												(M = b[1] || '50%'),
												('top' !== w && 'bottom' !== w && 'left' !== M && 'right' !== M) || ((_ = w), (w = M), (M = _)),
												(b[0] = di[w] || w),
												(b[1] = di[M] || M),
												(s = b.join(' ')),
												v.svg ? _i(t, s, 0, y, 0, this) : ((p = parseFloat(s.split(' ')[2]) || 0) !== v.zOrigin && ai(this, v, 'zOrigin', v.zOrigin, p), ai(this, T, u, wi(o), wi(s)));
											continue;
										}
										if ('svgOrigin' === u) {
											_i(t, s, 1, y, 0, this);
											continue;
										}
										if (u in gi) {
											Ai(this, v, u, l, s, f);
											continue;
										}
										if ('smoothOrigin' === u) {
											ai(this, v, 'smooth', v.smooth, s);
											continue;
										}
										if ('force3D' === u) {
											v[u] = s;
											continue;
										}
										if ('transform' === u) {
											Li(this, s, t);
											continue;
										}
									}
								else u in T || (u = ti(u) || u);
								if (m || ((a || 0 === a) && (l || 0 === l) && !Nn.test(s) && u in T))
									a || (a = 0),
										(d = (o + '').substr((l + '').length)) !== (p = se(s) || (u in k.units ? k.units[u] : d)) && (l = ci(t, u, o, p)),
										(this._pt = new gn(this._pt, m ? v : T, u, l, f ? f * a : a - l, 'px' !== p || !1 === e.autoRound || m ? Bn : Un)),
										(this._pt.u = p || 0),
										d !== p && ((this._pt.b = o), (this._pt.r = Fn));
								else if (u in T) ui.call(this, t, u, o, s);
								else {
									if (!(u in t)) {
										dt(u, s);
										continue;
									}
									this.add(t, u, t[u], s, i, r);
								}
								S.push(u);
							}
					x && mn(this);
				},
				get: hi,
				aliases: zn,
				getSetter: function (t, e, n) {
					var i = zn[e];
					return (
						i && i.indexOf(',') < 0 && (e = i),
						e in Rn && e !== Jn && (t._gsap.x || hi(t, 'x'))
							? n && An === n
								? 'scale' === e
									? qn
									: Wn
								: (An = n || {}) && ('scale' === e ? Xn : Yn)
							: t.style && !J(t.style[e])
							? Vn
							: ~e.indexOf('-')
							? jn
							: an(t, e)
					);
				},
				core: {
					_removeProperty: si,
					_getMatrix: xi,
				},
			};
		(_n.utils.checkPrefix = ti),
			(Pi = At(
				'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + (Ri = 'rotation,rotationX,rotationY,skewX,skewY') + ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
				function (t) {
					Rn[t] = 1;
				},
			)),
			At(Ri, function (t) {
				(k.units[t] = 'deg'), (gi[t] = 1);
			}),
			(zn[Pi[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + Ri),
			At('0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY', function (t) {
				var e = t.split(':');
				zn[e[1]] = Pi[e[0]];
			}),
			At('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (t) {
				k.units[t] = 'px';
			}),
			_n.registerPlugin(Ci);
		var Oi = _n.registerPlugin(Ci) || _n,
			Di = (Oi.core.Tween, n(1)),
			Ii = n.n(Di);
		class Ni {
			constructor() {
				if ((new Ii.a('[data-cursor="clipboard"]'), !window.touch.hasTouch)) {
					const r = document.querySelector('#cursor');
					Oi.set(r, {
						xPercent: -50,
						yPercent: -50,
						opacity: 0.2,
						scale: 0.5,
						zIndex: 50,
					});
					var t = {
							x: window.innerWidth / 2,
							y: window.innerHeight / 2,
						},
						e = {
							x: t.x,
							y: t.y,
						},
						n = Oi.quickSetter(r, 'x', 'px'),
						i = Oi.quickSetter(r, 'y', 'px');
					window.addEventListener('mousemove', (t) => {
						(e.x = t.x), (e.y = t.y);
					}),
						Oi.ticker.add((r, o) => {
							var s = 0.06 * o,
								a = 1 - Math.pow(0.8, s);
							(t.x += (e.x - t.x) * a), (t.y += (e.y - t.y) * a), n(t.x), i(t.y);
						});
				}
				const r = document.querySelector('#cursor .external'),
					o = document.querySelector('#cursor .clipboard');
				Oi.set(r, {
					translateY: '150%',
					translateX: '-150%',
				}),
					Oi.set(o, {
						opacity: 0,
						scale: 0,
					}),
					document.querySelectorAll('[data-cursor]').forEach(function (t) {
						var e = t.getAttribute('data-cursor');
						'scale' == e &&
							(t.addEventListener('mouseover', (t) => {
								Oi.to(cursor, {
									scale: 1,
									duration: 0.2,
								});
							}),
							t.addEventListener('mouseleave', (t) => {
								Oi.to(cursor, {
									scale: 0.5,
									duration: 0.2,
								});
							})),
							'external' == e &&
								(t.addEventListener('mouseover', (t) => {
									Oi.to(cursor, {
										scale: 0.75,
										opacity: 1,
										duration: 0.2,
									}),
										Oi.to(r, {
											translateY: '0%',
											translateX: '0%',
											duration: 0.2,
										});
								}),
								t.addEventListener('mouseleave', (t) => {
									Oi.to(cursor, {
										scale: 0.5,
										opacity: 0.2,
										duration: 0.2,
									}),
										Oi.to(r, {
											translateY: '-150%',
											translateX: '150%',
											duration: 0.2,
										}),
										Oi.set(r, {
											translateY: '150%',
											translateX: '-150%',
											delay: 0.2,
										});
								})),
							'clipboard' == e &&
								(t.addEventListener('mouseover', (t) => {
									Oi.to(cursor, {
										scale: 1,
										backgroundColor: '#FFF8E5',
										duration: 0.2,
									});
								}),
								t.addEventListener('mouseleave', (t) => {
									Oi.to(cursor, {
										scale: 0.5,
										backgroundColor: '#FFF8E5',
										opacity: 0.2,
										duration: 0.2,
									}),
										Oi.to(o, {
											opacity: 0,
											scale: 0,
											duration: 0.2,
										}),
										Oi.set(o, {
											opacity: 0,
											scale: 0,
											delay: 0.2,
										}),
										Oi.to('.text-copy', {
											opacity: 0,
											translateY: '-20px',
											duration: 0.2,
										});
								}),
								t.addEventListener('click', function () {
									Oi.to(cursor, {
										backgroundColor: '#58AD62',
										scale: 0.75,
										opacity: 1,
										duration: 0.2,
									}),
										Oi.to(o, {
											opacity: 1,
											scale: 0.75,
											duration: 0.2,
										}),
										Oi.fromTo(
											'.text-copy',
											{
												opacity: 0,
												translateY: '20px',
											},
											{
												opacity: 1,
												translateY: 0,
												duration: 0.2,
											},
										),
										Oi.to('.text-copy', {
											opacity: 0,
											translateY: '-20px',
											duration: 0.2,
											delay: 2,
										});
								}));
					});
			}
		}
		class zi extends h.Renderer {
			onEnter() {
				new Ni(), d.init(), d.stop();
			}
			onLeave() {}
			onEnterCompleted() {
				document.querySelectorAll('.anchor-link').forEach(function (t) {
					t.addEventListener('click', function () {
						var e = t.getAttribute('data-scrollto');
						d.scrollToPosition(e);
					});
				}),
					setTimeout(function () {
						Oi.to('.nnn-background', {
							opacity: 0.03,
							duration: 0.2,
						}),
							d.update(),
							d.start();
					}, 900),
					document.querySelectorAll('.project-link').forEach((t) => {
						var e = parseInt(t.getAttribute('data-color'));
						t.addEventListener('mouseover', (t) => {
							window.cloudThree.flash.color.set(e);
						}),
							t.addEventListener('mouseleave', (t) => {
								window.cloudThree.flash.color.set(window.cloudThree.flash.originalColor);
							});
					});
			}
			onLeaveCompleted() {
				d.destroy();
			}
		}
		class Bi extends h.Renderer {
			onEnter() {
				d.init(), d.stop(), new Ni();
			}
			onLeave() {}
			onEnterCompleted() {
				setTimeout(function () {
					d.update(), d.start();
				}, 300);
			}
			onLeaveCompleted() {
				d.destroy();
			}
		}
		class ki extends h.Transition {
			out({ from: t, trigger: e, done: n }) {
				Oi.to(t, {
					duration: 0.5,
					opacity: 0,
					onComplete: n,
				}),
					document.querySelector('#loader').classList.add('loading');
			}
			in({ from: t, to: e, trigger: n, done: i }) {
				t.remove(),
					window.scrollTo(0, 0),
					Oi.fromTo(
						e,
						{
							opacity: 0,
						},
						{
							duration: 0.5,
							opacity: 1,
							onComplete: i,
						},
					),
					setTimeout(function () {
						document.querySelector('#loader').classList.add('loaded');
					}, 900),
					setTimeout(function () {
						document.querySelector('#loader').classList.remove('loading'), document.querySelector('#loader').classList.remove('loaded');
					}, 1800);
			}
		}
		void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
			void 0 === Number.isInteger &&
				(Number.isInteger = function (t) {
					return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
				}),
			void 0 === Math.sign &&
				(Math.sign = function (t) {
					return t < 0 ? -1 : t > 0 ? 1 : +t;
				}),
			'name' in Function.prototype == !1 &&
				Object.defineProperty(Function.prototype, 'name', {
					get: function () {
						return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
					},
				}),
			void 0 === Object.assign &&
				(Object.assign = function (t) {
					if (null == t) throw new TypeError('Cannot convert undefined or null to object');
					const e = Object(t);
					for (let t = 1; t < arguments.length; t++) {
						const n = arguments[t];
						if (null != n) for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
					}
					return e;
				});
		function Fi() {}
		Object.assign(Fi.prototype, {
			addEventListener: function (t, e) {
				void 0 === this._listeners && (this._listeners = {});
				const n = this._listeners;
				void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
			},
			hasEventListener: function (t, e) {
				if (void 0 === this._listeners) return !1;
				const n = this._listeners;
				return void 0 !== n[t] && -1 !== n[t].indexOf(e);
			},
			removeEventListener: function (t, e) {
				if (void 0 === this._listeners) return;
				const n = this._listeners[t];
				if (void 0 !== n) {
					const t = n.indexOf(e);
					-1 !== t && n.splice(t, 1);
				}
			},
			dispatchEvent: function (t) {
				if (void 0 === this._listeners) return;
				const e = this._listeners[t.type];
				if (void 0 !== e) {
					t.target = this;
					const n = e.slice(0);
					for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
				}
			},
		});
		const Ui = [];
		for (let t = 0; t < 256; t++) Ui[t] = (t < 16 ? '0' : '') + t.toString(16);
		let Hi = 1234567;
		const Gi = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function () {
				const t = (4294967295 * Math.random()) | 0,
					e = (4294967295 * Math.random()) | 0,
					n = (4294967295 * Math.random()) | 0,
					i = (4294967295 * Math.random()) | 0;
				return (
					Ui[255 & t] +
					Ui[(t >> 8) & 255] +
					Ui[(t >> 16) & 255] +
					Ui[(t >> 24) & 255] +
					'-' +
					Ui[255 & e] +
					Ui[(e >> 8) & 255] +
					'-' +
					Ui[((e >> 16) & 15) | 64] +
					Ui[(e >> 24) & 255] +
					'-' +
					Ui[(63 & n) | 128] +
					Ui[(n >> 8) & 255] +
					'-' +
					Ui[(n >> 16) & 255] +
					Ui[(n >> 24) & 255] +
					Ui[255 & i] +
					Ui[(i >> 8) & 255] +
					Ui[(i >> 16) & 255] +
					Ui[(i >> 24) & 255]
				).toUpperCase();
			},
			clamp: function (t, e, n) {
				return Math.max(e, Math.min(n, t));
			},
			euclideanModulo: function (t, e) {
				return ((t % e) + e) % e;
			},
			mapLinear: function (t, e, n, i, r) {
				return i + ((t - e) * (r - i)) / (n - e);
			},
			lerp: function (t, e, n) {
				return (1 - n) * t + n * e;
			},
			smoothstep: function (t, e, n) {
				return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
			},
			smootherstep: function (t, e, n) {
				return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
			},
			randInt: function (t, e) {
				return t + Math.floor(Math.random() * (e - t + 1));
			},
			randFloat: function (t, e) {
				return t + Math.random() * (e - t);
			},
			randFloatSpread: function (t) {
				return t * (0.5 - Math.random());
			},
			seededRandom: function (t) {
				return void 0 !== t && (Hi = t % 2147483647), (Hi = (16807 * Hi) % 2147483647), (Hi - 1) / 2147483646;
			},
			degToRad: function (t) {
				return t * Gi.DEG2RAD;
			},
			radToDeg: function (t) {
				return t * Gi.RAD2DEG;
			},
			isPowerOfTwo: function (t) {
				return 0 == (t & (t - 1)) && 0 !== t;
			},
			ceilPowerOfTwo: function (t) {
				return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
			},
			floorPowerOfTwo: function (t) {
				return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
			},
			setQuaternionFromProperEuler: function (t, e, n, i, r) {
				const o = Math.cos,
					s = Math.sin,
					a = o(n / 2),
					l = s(n / 2),
					c = o((e + i) / 2),
					h = s((e + i) / 2),
					u = o((e - i) / 2),
					d = s((e - i) / 2),
					p = o((i - e) / 2),
					f = s((i - e) / 2);
				switch (r) {
					case 'XYX':
						t.set(a * h, l * u, l * d, a * c);
						break;
					case 'YZY':
						t.set(l * d, a * h, l * u, a * c);
						break;
					case 'ZXZ':
						t.set(l * u, l * d, a * h, a * c);
						break;
					case 'XZX':
						t.set(a * h, l * f, l * p, a * c);
						break;
					case 'YXY':
						t.set(l * p, a * h, l * f, a * c);
						break;
					case 'ZYZ':
						t.set(l * f, l * p, a * h, a * c);
						break;
					default:
						console.warn('THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + r);
				}
			},
		};
		class Vi {
			constructor(t = 0, e = 0) {
				Object.defineProperty(this, 'isVector2', {
					value: !0,
				}),
					(this.x = t),
					(this.y = e);
			}
			get width() {
				return this.x;
			}
			set width(t) {
				this.x = t;
			}
			get height() {
				return this.y;
			}
			set height(t) {
				this.y = t;
			}
			set(t, e) {
				return (this.x = t), (this.y = e), this;
			}
			setScalar(t) {
				return (this.x = t), (this.y = t), this;
			}
			setX(t) {
				return (this.x = t), this;
			}
			setY(t) {
				return (this.y = t), this;
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					default:
						throw new Error('index is out of range: ' + t);
				}
				return this;
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					default:
						throw new Error('index is out of range: ' + t);
				}
			}
			clone() {
				return new this.constructor(this.x, this.y);
			}
			copy(t) {
				return (this.x = t.x), (this.y = t.y), this;
			}
			add(t, e) {
				return void 0 !== e ? (console.warn('THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'), this.addVectors(t, e)) : ((this.x += t.x), (this.y += t.y), this);
			}
			addScalar(t) {
				return (this.x += t), (this.y += t), this;
			}
			addVectors(t, e) {
				return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
			}
			addScaledVector(t, e) {
				return (this.x += t.x * e), (this.y += t.y * e), this;
			}
			sub(t, e) {
				return void 0 !== e ? (console.warn('THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'), this.subVectors(t, e)) : ((this.x -= t.x), (this.y -= t.y), this);
			}
			subScalar(t) {
				return (this.x -= t), (this.y -= t), this;
			}
			subVectors(t, e) {
				return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
			}
			multiply(t) {
				return (this.x *= t.x), (this.y *= t.y), this;
			}
			multiplyScalar(t) {
				return (this.x *= t), (this.y *= t), this;
			}
			divide(t) {
				return (this.x /= t.x), (this.y /= t.y), this;
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t);
			}
			applyMatrix3(t) {
				const e = this.x,
					n = this.y,
					i = t.elements;
				return (this.x = i[0] * e + i[3] * n + i[6]), (this.y = i[1] * e + i[4] * n + i[7]), this;
			}
			min(t) {
				return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this;
			}
			max(t) {
				return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this;
			}
			clamp(t, e) {
				return (this.x = Math.max(t.x, Math.min(e.x, this.x))), (this.y = Math.max(t.y, Math.min(e.y, this.y))), this;
			}
			clampScalar(t, e) {
				return (this.x = Math.max(t, Math.min(e, this.x))), (this.y = Math.max(t, Math.min(e, this.y))), this;
			}
			clampLength(t, e) {
				const n = this.length();
				return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
			}
			floor() {
				return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
			}
			ceil() {
				return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
			}
			round() {
				return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
			}
			roundToZero() {
				return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), this;
			}
			negate() {
				return (this.x = -this.x), (this.y = -this.y), this;
			}
			dot(t) {
				return this.x * t.x + this.y * t.y;
			}
			cross(t) {
				return this.x * t.y - this.y * t.x;
			}
			lengthSq() {
				return this.x * this.x + this.y * this.y;
			}
			length() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
			manhattanLength() {
				return Math.abs(this.x) + Math.abs(this.y);
			}
			normalize() {
				return this.divideScalar(this.length() || 1);
			}
			angle() {
				return Math.atan2(-this.y, -this.x) + Math.PI;
			}
			distanceTo(t) {
				return Math.sqrt(this.distanceToSquared(t));
			}
			distanceToSquared(t) {
				const e = this.x - t.x,
					n = this.y - t.y;
				return e * e + n * n;
			}
			manhattanDistanceTo(t) {
				return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t);
			}
			lerp(t, e) {
				return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
			}
			lerpVectors(t, e, n) {
				return (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this;
			}
			equals(t) {
				return t.x === this.x && t.y === this.y;
			}
			fromArray(t, e) {
				return void 0 === e && (e = 0), (this.x = t[e]), (this.y = t[e + 1]), this;
			}
			toArray(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), t;
			}
			fromBufferAttribute(t, e, n) {
				return void 0 !== n && console.warn('THREE.Vector2: offset has been removed from .fromBufferAttribute().'), (this.x = t.getX(e)), (this.y = t.getY(e)), this;
			}
			rotateAround(t, e) {
				const n = Math.cos(e),
					i = Math.sin(e),
					r = this.x - t.x,
					o = this.y - t.y;
				return (this.x = r * n - o * i + t.x), (this.y = r * i + o * n + t.y), this;
			}
			random() {
				return (this.x = Math.random()), (this.y = Math.random()), this;
			}
		}
		class ji {
			constructor() {
				Object.defineProperty(this, 'isMatrix3', {
					value: !0,
				}),
					(this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
					arguments.length > 0 && console.error('THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.');
			}
			set(t, e, n, i, r, o, s, a, l) {
				const c = this.elements;
				return (c[0] = t), (c[1] = i), (c[2] = s), (c[3] = e), (c[4] = r), (c[5] = a), (c[6] = n), (c[7] = o), (c[8] = l), this;
			}
			identity() {
				return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
			}
			clone() {
				return new this.constructor().fromArray(this.elements);
			}
			copy(t) {
				const e = this.elements,
					n = t.elements;
				return (e[0] = n[0]), (e[1] = n[1]), (e[2] = n[2]), (e[3] = n[3]), (e[4] = n[4]), (e[5] = n[5]), (e[6] = n[6]), (e[7] = n[7]), (e[8] = n[8]), this;
			}
			extractBasis(t, e, n) {
				return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
			}
			setFromMatrix4(t) {
				const e = t.elements;
				return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
			}
			multiply(t) {
				return this.multiplyMatrices(this, t);
			}
			premultiply(t) {
				return this.multiplyMatrices(t, this);
			}
			multiplyMatrices(t, e) {
				const n = t.elements,
					i = e.elements,
					r = this.elements,
					o = n[0],
					s = n[3],
					a = n[6],
					l = n[1],
					c = n[4],
					h = n[7],
					u = n[2],
					d = n[5],
					p = n[8],
					f = i[0],
					m = i[3],
					g = i[6],
					v = i[1],
					y = i[4],
					x = i[7],
					_ = i[2],
					b = i[5],
					w = i[8];
				return (
					(r[0] = o * f + s * v + a * _),
					(r[3] = o * m + s * y + a * b),
					(r[6] = o * g + s * x + a * w),
					(r[1] = l * f + c * v + h * _),
					(r[4] = l * m + c * y + h * b),
					(r[7] = l * g + c * x + h * w),
					(r[2] = u * f + d * v + p * _),
					(r[5] = u * m + d * y + p * b),
					(r[8] = u * g + d * x + p * w),
					this
				);
			}
			multiplyScalar(t) {
				const e = this.elements;
				return (e[0] *= t), (e[3] *= t), (e[6] *= t), (e[1] *= t), (e[4] *= t), (e[7] *= t), (e[2] *= t), (e[5] *= t), (e[8] *= t), this;
			}
			determinant() {
				const t = this.elements,
					e = t[0],
					n = t[1],
					i = t[2],
					r = t[3],
					o = t[4],
					s = t[5],
					a = t[6],
					l = t[7],
					c = t[8];
				return e * o * c - e * s * l - n * r * c + n * s * a + i * r * l - i * o * a;
			}
			getInverse(t, e) {
				void 0 !== e && console.warn('THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.');
				const n = t.elements,
					i = this.elements,
					r = n[0],
					o = n[1],
					s = n[2],
					a = n[3],
					l = n[4],
					c = n[5],
					h = n[6],
					u = n[7],
					d = n[8],
					p = d * l - c * u,
					f = c * h - d * a,
					m = u * a - l * h,
					g = r * p + o * f + s * m;
				if (0 === g) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
				const v = 1 / g;
				return (
					(i[0] = p * v),
					(i[1] = (s * u - d * o) * v),
					(i[2] = (c * o - s * l) * v),
					(i[3] = f * v),
					(i[4] = (d * r - s * h) * v),
					(i[5] = (s * a - c * r) * v),
					(i[6] = m * v),
					(i[7] = (o * h - u * r) * v),
					(i[8] = (l * r - o * a) * v),
					this
				);
			}
			transpose() {
				let t;
				const e = this.elements;
				return (t = e[1]), (e[1] = e[3]), (e[3] = t), (t = e[2]), (e[2] = e[6]), (e[6] = t), (t = e[5]), (e[5] = e[7]), (e[7] = t), this;
			}
			getNormalMatrix(t) {
				return this.setFromMatrix4(t).getInverse(this).transpose();
			}
			transposeIntoArray(t) {
				const e = this.elements;
				return (t[0] = e[0]), (t[1] = e[3]), (t[2] = e[6]), (t[3] = e[1]), (t[4] = e[4]), (t[5] = e[7]), (t[6] = e[2]), (t[7] = e[5]), (t[8] = e[8]), this;
			}
			setUvTransform(t, e, n, i, r, o, s) {
				const a = Math.cos(r),
					l = Math.sin(r);
				this.set(n * a, n * l, -n * (a * o + l * s) + o + t, -i * l, i * a, -i * (-l * o + a * s) + s + e, 0, 0, 1);
			}
			scale(t, e) {
				const n = this.elements;
				return (n[0] *= t), (n[3] *= t), (n[6] *= t), (n[1] *= e), (n[4] *= e), (n[7] *= e), this;
			}
			rotate(t) {
				const e = Math.cos(t),
					n = Math.sin(t),
					i = this.elements,
					r = i[0],
					o = i[3],
					s = i[6],
					a = i[1],
					l = i[4],
					c = i[7];
				return (i[0] = e * r + n * a), (i[3] = e * o + n * l), (i[6] = e * s + n * c), (i[1] = -n * r + e * a), (i[4] = -n * o + e * l), (i[7] = -n * s + e * c), this;
			}
			translate(t, e) {
				const n = this.elements;
				return (n[0] += t * n[2]), (n[3] += t * n[5]), (n[6] += t * n[8]), (n[1] += e * n[2]), (n[4] += e * n[5]), (n[7] += e * n[8]), this;
			}
			equals(t) {
				const e = this.elements,
					n = t.elements;
				for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
				return !0;
			}
			fromArray(t, e) {
				void 0 === e && (e = 0);
				for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
				return this;
			}
			toArray(t, e) {
				void 0 === t && (t = []), void 0 === e && (e = 0);
				const n = this.elements;
				return (t[e] = n[0]), (t[e + 1] = n[1]), (t[e + 2] = n[2]), (t[e + 3] = n[3]), (t[e + 4] = n[4]), (t[e + 5] = n[5]), (t[e + 6] = n[6]), (t[e + 7] = n[7]), (t[e + 8] = n[8]), t;
			}
		}
		let Wi;
		const qi = {
			getDataURL: function (t) {
				if (/^data:/i.test(t.src)) return t.src;
				if ('undefined' == typeof HTMLCanvasElement) return t.src;
				let e;
				if (t instanceof HTMLCanvasElement) e = t;
				else {
					void 0 === Wi && (Wi = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas')), (Wi.width = t.width), (Wi.height = t.height);
					const n = Wi.getContext('2d');
					t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), (e = Wi);
				}
				return e.width > 2048 || e.height > 2048 ? e.toDataURL('image/jpeg', 0.6) : e.toDataURL('image/png');
			},
		};
		let Xi = 0;
		function Yi(t, e, n, i, r, o, s, a, l, c) {
			Object.defineProperty(this, 'id', {
				value: Xi++,
			}),
				(this.uuid = Gi.generateUUID()),
				(this.name = ''),
				(this.image = void 0 !== t ? t : Yi.DEFAULT_IMAGE),
				(this.mipmaps = []),
				(this.mapping = void 0 !== e ? e : Yi.DEFAULT_MAPPING),
				(this.wrapS = void 0 !== n ? n : 1001),
				(this.wrapT = void 0 !== i ? i : 1001),
				(this.magFilter = void 0 !== r ? r : 1006),
				(this.minFilter = void 0 !== o ? o : 1008),
				(this.anisotropy = void 0 !== l ? l : 1),
				(this.format = void 0 !== s ? s : 1023),
				(this.internalFormat = null),
				(this.type = void 0 !== a ? a : 1009),
				(this.offset = new Vi(0, 0)),
				(this.repeat = new Vi(1, 1)),
				(this.center = new Vi(0, 0)),
				(this.rotation = 0),
				(this.matrixAutoUpdate = !0),
				(this.matrix = new ji()),
				(this.generateMipmaps = !0),
				(this.premultiplyAlpha = !1),
				(this.flipY = !0),
				(this.unpackAlignment = 4),
				(this.encoding = void 0 !== c ? c : 3e3),
				(this.version = 0),
				(this.onUpdate = null);
		}
		(Yi.DEFAULT_IMAGE = void 0),
			(Yi.DEFAULT_MAPPING = 300),
			(Yi.prototype = Object.assign(Object.create(Fi.prototype), {
				constructor: Yi,
				isTexture: !0,
				updateMatrix: function () {
					this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				copy: function (t) {
					return (
						(this.name = t.name),
						(this.image = t.image),
						(this.mipmaps = t.mipmaps.slice(0)),
						(this.mapping = t.mapping),
						(this.wrapS = t.wrapS),
						(this.wrapT = t.wrapT),
						(this.magFilter = t.magFilter),
						(this.minFilter = t.minFilter),
						(this.anisotropy = t.anisotropy),
						(this.format = t.format),
						(this.internalFormat = t.internalFormat),
						(this.type = t.type),
						this.offset.copy(t.offset),
						this.repeat.copy(t.repeat),
						this.center.copy(t.center),
						(this.rotation = t.rotation),
						(this.matrixAutoUpdate = t.matrixAutoUpdate),
						this.matrix.copy(t.matrix),
						(this.generateMipmaps = t.generateMipmaps),
						(this.premultiplyAlpha = t.premultiplyAlpha),
						(this.flipY = t.flipY),
						(this.unpackAlignment = t.unpackAlignment),
						(this.encoding = t.encoding),
						this
					);
				},
				toJSON: function (t) {
					const e = void 0 === t || 'string' == typeof t;
					if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
					const n = {
						metadata: {
							version: 4.5,
							type: 'Texture',
							generator: 'Texture.toJSON',
						},
						uuid: this.uuid,
						name: this.name,
						mapping: this.mapping,
						repeat: [this.repeat.x, this.repeat.y],
						offset: [this.offset.x, this.offset.y],
						center: [this.center.x, this.center.y],
						rotation: this.rotation,
						wrap: [this.wrapS, this.wrapT],
						format: this.format,
						type: this.type,
						encoding: this.encoding,
						minFilter: this.minFilter,
						magFilter: this.magFilter,
						anisotropy: this.anisotropy,
						flipY: this.flipY,
						premultiplyAlpha: this.premultiplyAlpha,
						unpackAlignment: this.unpackAlignment,
					};
					if (void 0 !== this.image) {
						const i = this.image;
						if ((void 0 === i.uuid && (i.uuid = Gi.generateUUID()), !e && void 0 === t.images[i.uuid])) {
							let e;
							if (Array.isArray(i)) {
								e = [];
								for (let t = 0, n = i.length; t < n; t++) e.push(qi.getDataURL(i[t]));
							} else e = qi.getDataURL(i);
							t.images[i.uuid] = {
								uuid: i.uuid,
								url: e,
							};
						}
						n.image = i.uuid;
					}
					return e || (t.textures[this.uuid] = n), n;
				},
				dispose: function () {
					this.dispatchEvent({
						type: 'dispose',
					});
				},
				transformUv: function (t) {
					if (300 !== this.mapping) return t;
					if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
						switch (this.wrapS) {
							case 1e3:
								t.x = t.x - Math.floor(t.x);
								break;
							case 1001:
								t.x = t.x < 0 ? 0 : 1;
								break;
							case 1002:
								1 === Math.abs(Math.floor(t.x) % 2) ? (t.x = Math.ceil(t.x) - t.x) : (t.x = t.x - Math.floor(t.x));
						}
					if (t.y < 0 || t.y > 1)
						switch (this.wrapT) {
							case 1e3:
								t.y = t.y - Math.floor(t.y);
								break;
							case 1001:
								t.y = t.y < 0 ? 0 : 1;
								break;
							case 1002:
								1 === Math.abs(Math.floor(t.y) % 2) ? (t.y = Math.ceil(t.y) - t.y) : (t.y = t.y - Math.floor(t.y));
						}
					return this.flipY && (t.y = 1 - t.y), t;
				},
			})),
			Object.defineProperty(Yi.prototype, 'needsUpdate', {
				set: function (t) {
					!0 === t && this.version++;
				},
			});
		class Zi {
			constructor(t = 0, e = 0, n = 0, i = 1) {
				Object.defineProperty(this, 'isVector4', {
					value: !0,
				}),
					(this.x = t),
					(this.y = e),
					(this.z = n),
					(this.w = i);
			}
			get width() {
				return this.z;
			}
			set width(t) {
				this.z = t;
			}
			get height() {
				return this.w;
			}
			set height(t) {
				this.w = t;
			}
			set(t, e, n, i) {
				return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
			}
			setScalar(t) {
				return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
			}
			setX(t) {
				return (this.x = t), this;
			}
			setY(t) {
				return (this.y = t), this;
			}
			setZ(t) {
				return (this.z = t), this;
			}
			setW(t) {
				return (this.w = t), this;
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					case 3:
						this.w = e;
						break;
					default:
						throw new Error('index is out of range: ' + t);
				}
				return this;
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					case 3:
						return this.w;
					default:
						throw new Error('index is out of range: ' + t);
				}
			}
			clone() {
				return new this.constructor(this.x, this.y, this.z, this.w);
			}
			copy(t) {
				return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = void 0 !== t.w ? t.w : 1), this;
			}
			add(t, e) {
				return void 0 !== e
					? (console.warn('THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'), this.addVectors(t, e))
					: ((this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this);
			}
			addScalar(t) {
				return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
			}
			addVectors(t, e) {
				return (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), (this.w = t.w + e.w), this;
			}
			addScaledVector(t, e) {
				return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), (this.w += t.w * e), this;
			}
			sub(t, e) {
				return void 0 !== e
					? (console.warn('THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'), this.subVectors(t, e))
					: ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this);
			}
			subScalar(t) {
				return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
			}
			subVectors(t, e) {
				return (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), (this.w = t.w - e.w), this;
			}
			multiplyScalar(t) {
				return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
			}
			applyMatrix4(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = this.w,
					o = t.elements;
				return (
					(this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * r),
					(this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * r),
					(this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * r),
					(this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * r),
					this
				);
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t);
			}
			setAxisAngleFromQuaternion(t) {
				this.w = 2 * Math.acos(t.w);
				const e = Math.sqrt(1 - t.w * t.w);
				return e < 1e-4 ? ((this.x = 1), (this.y = 0), (this.z = 0)) : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)), this;
			}
			setAxisAngleFromRotationMatrix(t) {
				let e, n, i, r;
				const o = t.elements,
					s = o[0],
					a = o[4],
					l = o[8],
					c = o[1],
					h = o[5],
					u = o[9],
					d = o[2],
					p = o[6],
					f = o[10];
				if (Math.abs(a - c) < 0.01 && Math.abs(l - d) < 0.01 && Math.abs(u - p) < 0.01) {
					if (Math.abs(a + c) < 0.1 && Math.abs(l + d) < 0.1 && Math.abs(u + p) < 0.1 && Math.abs(s + h + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
					e = Math.PI;
					const t = (s + 1) / 2,
						o = (h + 1) / 2,
						m = (f + 1) / 2,
						g = (a + c) / 4,
						v = (l + d) / 4,
						y = (u + p) / 4;
					return (
						t > o && t > m
							? t < 0.01
								? ((n = 0), (i = 0.707106781), (r = 0.707106781))
								: ((n = Math.sqrt(t)), (i = g / n), (r = v / n))
							: o > m
							? o < 0.01
								? ((n = 0.707106781), (i = 0), (r = 0.707106781))
								: ((i = Math.sqrt(o)), (n = g / i), (r = y / i))
							: m < 0.01
							? ((n = 0.707106781), (i = 0.707106781), (r = 0))
							: ((r = Math.sqrt(m)), (n = v / r), (i = y / r)),
						this.set(n, i, r, e),
						this
					);
				}
				let m = Math.sqrt((p - u) * (p - u) + (l - d) * (l - d) + (c - a) * (c - a));
				return Math.abs(m) < 0.001 && (m = 1), (this.x = (p - u) / m), (this.y = (l - d) / m), (this.z = (c - a) / m), (this.w = Math.acos((s + h + f - 1) / 2)), this;
			}
			min(t) {
				return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), (this.z = Math.min(this.z, t.z)), (this.w = Math.min(this.w, t.w)), this;
			}
			max(t) {
				return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), (this.z = Math.max(this.z, t.z)), (this.w = Math.max(this.w, t.w)), this;
			}
			clamp(t, e) {
				return (
					(this.x = Math.max(t.x, Math.min(e.x, this.x))),
					(this.y = Math.max(t.y, Math.min(e.y, this.y))),
					(this.z = Math.max(t.z, Math.min(e.z, this.z))),
					(this.w = Math.max(t.w, Math.min(e.w, this.w))),
					this
				);
			}
			clampScalar(t, e) {
				return (this.x = Math.max(t, Math.min(e, this.x))), (this.y = Math.max(t, Math.min(e, this.y))), (this.z = Math.max(t, Math.min(e, this.z))), (this.w = Math.max(t, Math.min(e, this.w))), this;
			}
			clampLength(t, e) {
				const n = this.length();
				return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
			}
			floor() {
				return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), (this.w = Math.floor(this.w)), this;
			}
			ceil() {
				return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), (this.w = Math.ceil(this.w)), this;
			}
			round() {
				return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), (this.w = Math.round(this.w)), this;
			}
			roundToZero() {
				return (
					(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
					(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
					(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
					(this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
					this
				);
			}
			negate() {
				return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
			}
			dot(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
			}
			lengthSq() {
				return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
			}
			length() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
			}
			manhattanLength() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
			}
			normalize() {
				return this.divideScalar(this.length() || 1);
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t);
			}
			lerp(t, e) {
				return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), (this.z += (t.z - this.z) * e), (this.w += (t.w - this.w) * e), this;
			}
			lerpVectors(t, e, n) {
				return (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), (this.z = t.z + (e.z - t.z) * n), (this.w = t.w + (e.w - t.w) * n), this;
			}
			equals(t) {
				return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
			}
			fromArray(t, e) {
				return void 0 === e && (e = 0), (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), (this.w = t[e + 3]), this;
			}
			toArray(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), t;
			}
			fromBufferAttribute(t, e, n) {
				return (
					void 0 !== n && console.warn('THREE.Vector4: offset has been removed from .fromBufferAttribute().'),
					(this.x = t.getX(e)),
					(this.y = t.getY(e)),
					(this.z = t.getZ(e)),
					(this.w = t.getW(e)),
					this
				);
			}
			random() {
				return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), (this.w = Math.random()), this;
			}
		}
		function Ji(t, e, n) {
			(this.width = t),
				(this.height = e),
				(this.scissor = new Zi(0, 0, t, e)),
				(this.scissorTest = !1),
				(this.viewport = new Zi(0, 0, t, e)),
				(n = n || {}),
				(this.texture = new Yi(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding)),
				(this.texture.image = {}),
				(this.texture.image.width = t),
				(this.texture.image.height = e),
				(this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps),
				(this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006),
				(this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
				(this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
				(this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null);
		}
		function Ki(t, e, n) {
			Ji.call(this, t, e, n), (this.samples = 4);
		}
		(Ji.prototype = Object.assign(Object.create(Fi.prototype), {
			constructor: Ji,
			isWebGLRenderTarget: !0,
			setSize: function (t, e) {
				(this.width === t && this.height === e) || ((this.width = t), (this.height = e), (this.texture.image.width = t), (this.texture.image.height = e), this.dispose()),
					this.viewport.set(0, 0, t, e),
					this.scissor.set(0, 0, t, e);
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return (
					(this.width = t.width),
					(this.height = t.height),
					this.viewport.copy(t.viewport),
					(this.texture = t.texture.clone()),
					(this.depthBuffer = t.depthBuffer),
					(this.stencilBuffer = t.stencilBuffer),
					(this.depthTexture = t.depthTexture),
					this
				);
			},
			dispose: function () {
				this.dispatchEvent({
					type: 'dispose',
				});
			},
		})),
			(Ki.prototype = Object.assign(Object.create(Ji.prototype), {
				constructor: Ki,
				isWebGLMultisampleRenderTarget: !0,
				copy: function (t) {
					return Ji.prototype.copy.call(this, t), (this.samples = t.samples), this;
				},
			}));
		class Qi {
			constructor(t = 0, e = 0, n = 0, i = 1) {
				Object.defineProperty(this, 'isQuaternion', {
					value: !0,
				}),
					(this._x = t),
					(this._y = e),
					(this._z = n),
					(this._w = i);
			}
			static slerp(t, e, n, i) {
				return n.copy(t).slerp(e, i);
			}
			static slerpFlat(t, e, n, i, r, o, s) {
				let a = n[i + 0],
					l = n[i + 1],
					c = n[i + 2],
					h = n[i + 3];
				const u = r[o + 0],
					d = r[o + 1],
					p = r[o + 2],
					f = r[o + 3];
				if (h !== f || a !== u || l !== d || c !== p) {
					let t = 1 - s;
					const e = a * u + l * d + c * p + h * f,
						n = e >= 0 ? 1 : -1,
						i = 1 - e * e;
					if (i > Number.EPSILON) {
						const r = Math.sqrt(i),
							o = Math.atan2(r, e * n);
						(t = Math.sin(t * o) / r), (s = Math.sin(s * o) / r);
					}
					const r = s * n;
					if (((a = a * t + u * r), (l = l * t + d * r), (c = c * t + p * r), (h = h * t + f * r), t === 1 - s)) {
						const t = 1 / Math.sqrt(a * a + l * l + c * c + h * h);
						(a *= t), (l *= t), (c *= t), (h *= t);
					}
				}
				(t[e] = a), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
			}
			static multiplyQuaternionsFlat(t, e, n, i, r, o) {
				const s = n[i],
					a = n[i + 1],
					l = n[i + 2],
					c = n[i + 3],
					h = r[o],
					u = r[o + 1],
					d = r[o + 2],
					p = r[o + 3];
				return (t[e] = s * p + c * h + a * d - l * u), (t[e + 1] = a * p + c * u + l * h - s * d), (t[e + 2] = l * p + c * d + s * u - a * h), (t[e + 3] = c * p - s * h - a * u - l * d), t;
			}
			get x() {
				return this._x;
			}
			set x(t) {
				(this._x = t), this._onChangeCallback();
			}
			get y() {
				return this._y;
			}
			set y(t) {
				(this._y = t), this._onChangeCallback();
			}
			get z() {
				return this._z;
			}
			set z(t) {
				(this._z = t), this._onChangeCallback();
			}
			get w() {
				return this._w;
			}
			set w(t) {
				(this._w = t), this._onChangeCallback();
			}
			set(t, e, n, i) {
				return (this._x = t), (this._y = e), (this._z = n), (this._w = i), this._onChangeCallback(), this;
			}
			clone() {
				return new this.constructor(this._x, this._y, this._z, this._w);
			}
			copy(t) {
				return (this._x = t.x), (this._y = t.y), (this._z = t.z), (this._w = t.w), this._onChangeCallback(), this;
			}
			setFromEuler(t, e) {
				if (!t || !t.isEuler) throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');
				const n = t._x,
					i = t._y,
					r = t._z,
					o = t._order,
					s = Math.cos,
					a = Math.sin,
					l = s(n / 2),
					c = s(i / 2),
					h = s(r / 2),
					u = a(n / 2),
					d = a(i / 2),
					p = a(r / 2);
				switch (o) {
					case 'XYZ':
						(this._x = u * c * h + l * d * p), (this._y = l * d * h - u * c * p), (this._z = l * c * p + u * d * h), (this._w = l * c * h - u * d * p);
						break;
					case 'YXZ':
						(this._x = u * c * h + l * d * p), (this._y = l * d * h - u * c * p), (this._z = l * c * p - u * d * h), (this._w = l * c * h + u * d * p);
						break;
					case 'ZXY':
						(this._x = u * c * h - l * d * p), (this._y = l * d * h + u * c * p), (this._z = l * c * p + u * d * h), (this._w = l * c * h - u * d * p);
						break;
					case 'ZYX':
						(this._x = u * c * h - l * d * p), (this._y = l * d * h + u * c * p), (this._z = l * c * p - u * d * h), (this._w = l * c * h + u * d * p);
						break;
					case 'YZX':
						(this._x = u * c * h + l * d * p), (this._y = l * d * h + u * c * p), (this._z = l * c * p - u * d * h), (this._w = l * c * h - u * d * p);
						break;
					case 'XZY':
						(this._x = u * c * h - l * d * p), (this._y = l * d * h - u * c * p), (this._z = l * c * p + u * d * h), (this._w = l * c * h + u * d * p);
						break;
					default:
						console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + o);
				}
				return !1 !== e && this._onChangeCallback(), this;
			}
			setFromAxisAngle(t, e) {
				const n = e / 2,
					i = Math.sin(n);
				return (this._x = t.x * i), (this._y = t.y * i), (this._z = t.z * i), (this._w = Math.cos(n)), this._onChangeCallback(), this;
			}
			setFromRotationMatrix(t) {
				const e = t.elements,
					n = e[0],
					i = e[4],
					r = e[8],
					o = e[1],
					s = e[5],
					a = e[9],
					l = e[2],
					c = e[6],
					h = e[10],
					u = n + s + h;
				if (u > 0) {
					const t = 0.5 / Math.sqrt(u + 1);
					(this._w = 0.25 / t), (this._x = (c - a) * t), (this._y = (r - l) * t), (this._z = (o - i) * t);
				} else if (n > s && n > h) {
					const t = 2 * Math.sqrt(1 + n - s - h);
					(this._w = (c - a) / t), (this._x = 0.25 * t), (this._y = (i + o) / t), (this._z = (r + l) / t);
				} else if (s > h) {
					const t = 2 * Math.sqrt(1 + s - n - h);
					(this._w = (r - l) / t), (this._x = (i + o) / t), (this._y = 0.25 * t), (this._z = (a + c) / t);
				} else {
					const t = 2 * Math.sqrt(1 + h - n - s);
					(this._w = (o - i) / t), (this._x = (r + l) / t), (this._y = (a + c) / t), (this._z = 0.25 * t);
				}
				return this._onChangeCallback(), this;
			}
			setFromUnitVectors(t, e) {
				let n = t.dot(e) + 1;
				return (
					n < 1e-6
						? ((n = 0), Math.abs(t.x) > Math.abs(t.z) ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n)) : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
						: ((this._x = t.y * e.z - t.z * e.y), (this._y = t.z * e.x - t.x * e.z), (this._z = t.x * e.y - t.y * e.x), (this._w = n)),
					this.normalize()
				);
			}
			angleTo(t) {
				return 2 * Math.acos(Math.abs(Gi.clamp(this.dot(t), -1, 1)));
			}
			rotateTowards(t, e) {
				const n = this.angleTo(t);
				if (0 === n) return this;
				const i = Math.min(1, e / n);
				return this.slerp(t, i), this;
			}
			identity() {
				return this.set(0, 0, 0, 1);
			}
			inverse() {
				return this.conjugate();
			}
			conjugate() {
				return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
			}
			dot(t) {
				return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
			}
			lengthSq() {
				return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
			}
			length() {
				return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
			}
			normalize() {
				let t = this.length();
				return (
					0 === t ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1)) : ((t = 1 / t), (this._x = this._x * t), (this._y = this._y * t), (this._z = this._z * t), (this._w = this._w * t)),
					this._onChangeCallback(),
					this
				);
			}
			multiply(t, e) {
				return void 0 !== e
					? (console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'), this.multiplyQuaternions(t, e))
					: this.multiplyQuaternions(this, t);
			}
			premultiply(t) {
				return this.multiplyQuaternions(t, this);
			}
			multiplyQuaternions(t, e) {
				const n = t._x,
					i = t._y,
					r = t._z,
					o = t._w,
					s = e._x,
					a = e._y,
					l = e._z,
					c = e._w;
				return (
					(this._x = n * c + o * s + i * l - r * a),
					(this._y = i * c + o * a + r * s - n * l),
					(this._z = r * c + o * l + n * a - i * s),
					(this._w = o * c - n * s - i * a - r * l),
					this._onChangeCallback(),
					this
				);
			}
			slerp(t, e) {
				if (0 === e) return this;
				if (1 === e) return this.copy(t);
				const n = this._x,
					i = this._y,
					r = this._z,
					o = this._w;
				let s = o * t._w + n * t._x + i * t._y + r * t._z;
				if ((s < 0 ? ((this._w = -t._w), (this._x = -t._x), (this._y = -t._y), (this._z = -t._z), (s = -s)) : this.copy(t), s >= 1))
					return (this._w = o), (this._x = n), (this._y = i), (this._z = r), this;
				const a = 1 - s * s;
				if (a <= Number.EPSILON) {
					const t = 1 - e;
					return (this._w = t * o + e * this._w), (this._x = t * n + e * this._x), (this._y = t * i + e * this._y), (this._z = t * r + e * this._z), this.normalize(), this._onChangeCallback(), this;
				}
				const l = Math.sqrt(a),
					c = Math.atan2(l, s),
					h = Math.sin((1 - e) * c) / l,
					u = Math.sin(e * c) / l;
				return (this._w = o * h + this._w * u), (this._x = n * h + this._x * u), (this._y = i * h + this._y * u), (this._z = r * h + this._z * u), this._onChangeCallback(), this;
			}
			equals(t) {
				return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
			}
			fromArray(t, e) {
				return void 0 === e && (e = 0), (this._x = t[e]), (this._y = t[e + 1]), (this._z = t[e + 2]), (this._w = t[e + 3]), this._onChangeCallback(), this;
			}
			toArray(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), (t[e] = this._x), (t[e + 1] = this._y), (t[e + 2] = this._z), (t[e + 3] = this._w), t;
			}
			fromBufferAttribute(t, e) {
				return (this._x = t.getX(e)), (this._y = t.getY(e)), (this._z = t.getZ(e)), (this._w = t.getW(e)), this;
			}
			_onChange(t) {
				return (this._onChangeCallback = t), this;
			}
			_onChangeCallback() {}
		}
		class $i {
			constructor(t = 0, e = 0, n = 0) {
				Object.defineProperty(this, 'isVector3', {
					value: !0,
				}),
					(this.x = t),
					(this.y = e),
					(this.z = n);
			}
			set(t, e, n) {
				return void 0 === n && (n = this.z), (this.x = t), (this.y = e), (this.z = n), this;
			}
			setScalar(t) {
				return (this.x = t), (this.y = t), (this.z = t), this;
			}
			setX(t) {
				return (this.x = t), this;
			}
			setY(t) {
				return (this.y = t), this;
			}
			setZ(t) {
				return (this.z = t), this;
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					default:
						throw new Error('index is out of range: ' + t);
				}
				return this;
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					default:
						throw new Error('index is out of range: ' + t);
				}
			}
			clone() {
				return new this.constructor(this.x, this.y, this.z);
			}
			copy(t) {
				return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
			}
			add(t, e) {
				return void 0 !== e
					? (console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'), this.addVectors(t, e))
					: ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
			}
			addScalar(t) {
				return (this.x += t), (this.y += t), (this.z += t), this;
			}
			addVectors(t, e) {
				return (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this;
			}
			addScaledVector(t, e) {
				return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
			}
			sub(t, e) {
				return void 0 !== e
					? (console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'), this.subVectors(t, e))
					: ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
			}
			subScalar(t) {
				return (this.x -= t), (this.y -= t), (this.z -= t), this;
			}
			subVectors(t, e) {
				return (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this;
			}
			multiply(t, e) {
				return void 0 !== e
					? (console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'), this.multiplyVectors(t, e))
					: ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
			}
			multiplyScalar(t) {
				return (this.x *= t), (this.y *= t), (this.z *= t), this;
			}
			multiplyVectors(t, e) {
				return (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this;
			}
			applyEuler(t) {
				return (t && t.isEuler) || console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'), this.applyQuaternion(er.setFromEuler(t));
			}
			applyAxisAngle(t, e) {
				return this.applyQuaternion(er.setFromAxisAngle(t, e));
			}
			applyMatrix3(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements;
				return (this.x = r[0] * e + r[3] * n + r[6] * i), (this.y = r[1] * e + r[4] * n + r[7] * i), (this.z = r[2] * e + r[5] * n + r[8] * i), this;
			}
			applyNormalMatrix(t) {
				return this.applyMatrix3(t).normalize();
			}
			applyMatrix4(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements,
					o = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
				return (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * o), (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * o), (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * o), this;
			}
			applyQuaternion(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.x,
					o = t.y,
					s = t.z,
					a = t.w,
					l = a * e + o * i - s * n,
					c = a * n + s * e - r * i,
					h = a * i + r * n - o * e,
					u = -r * e - o * n - s * i;
				return (this.x = l * a + u * -r + c * -s - h * -o), (this.y = c * a + u * -o + h * -r - l * -s), (this.z = h * a + u * -s + l * -o - c * -r), this;
			}
			project(t) {
				return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
			}
			unproject(t) {
				return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
			}
			transformDirection(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements;
				return (this.x = r[0] * e + r[4] * n + r[8] * i), (this.y = r[1] * e + r[5] * n + r[9] * i), (this.z = r[2] * e + r[6] * n + r[10] * i), this.normalize();
			}
			divide(t) {
				return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t);
			}
			min(t) {
				return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), (this.z = Math.min(this.z, t.z)), this;
			}
			max(t) {
				return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), (this.z = Math.max(this.z, t.z)), this;
			}
			clamp(t, e) {
				return (this.x = Math.max(t.x, Math.min(e.x, this.x))), (this.y = Math.max(t.y, Math.min(e.y, this.y))), (this.z = Math.max(t.z, Math.min(e.z, this.z))), this;
			}
			clampScalar(t, e) {
				return (this.x = Math.max(t, Math.min(e, this.x))), (this.y = Math.max(t, Math.min(e, this.y))), (this.z = Math.max(t, Math.min(e, this.z))), this;
			}
			clampLength(t, e) {
				const n = this.length();
				return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
			}
			floor() {
				return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this;
			}
			ceil() {
				return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this;
			}
			round() {
				return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this;
			}
			roundToZero() {
				return (
					(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
					(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
					(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
					this
				);
			}
			negate() {
				return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
			}
			dot(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z;
			}
			lengthSq() {
				return this.x * this.x + this.y * this.y + this.z * this.z;
			}
			length() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
			}
			manhattanLength() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
			}
			normalize() {
				return this.divideScalar(this.length() || 1);
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t);
			}
			lerp(t, e) {
				return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), (this.z += (t.z - this.z) * e), this;
			}
			lerpVectors(t, e, n) {
				return (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), (this.z = t.z + (e.z - t.z) * n), this;
			}
			cross(t, e) {
				return void 0 !== e ? (console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'), this.crossVectors(t, e)) : this.crossVectors(this, t);
			}
			crossVectors(t, e) {
				const n = t.x,
					i = t.y,
					r = t.z,
					o = e.x,
					s = e.y,
					a = e.z;
				return (this.x = i * a - r * s), (this.y = r * o - n * a), (this.z = n * s - i * o), this;
			}
			projectOnVector(t) {
				const e = t.lengthSq();
				if (0 === e) return this.set(0, 0, 0);
				const n = t.dot(this) / e;
				return this.copy(t).multiplyScalar(n);
			}
			projectOnPlane(t) {
				return tr.copy(this).projectOnVector(t), this.sub(tr);
			}
			reflect(t) {
				return this.sub(tr.copy(t).multiplyScalar(2 * this.dot(t)));
			}
			angleTo(t) {
				const e = Math.sqrt(this.lengthSq() * t.lengthSq());
				if (0 === e) return Math.PI / 2;
				const n = this.dot(t) / e;
				return Math.acos(Gi.clamp(n, -1, 1));
			}
			distanceTo(t) {
				return Math.sqrt(this.distanceToSquared(t));
			}
			distanceToSquared(t) {
				const e = this.x - t.x,
					n = this.y - t.y,
					i = this.z - t.z;
				return e * e + n * n + i * i;
			}
			manhattanDistanceTo(t) {
				return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
			}
			setFromSpherical(t) {
				return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
			}
			setFromSphericalCoords(t, e, n) {
				const i = Math.sin(e) * t;
				return (this.x = i * Math.sin(n)), (this.y = Math.cos(e) * t), (this.z = i * Math.cos(n)), this;
			}
			setFromCylindrical(t) {
				return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
			}
			setFromCylindricalCoords(t, e, n) {
				return (this.x = t * Math.sin(e)), (this.y = n), (this.z = t * Math.cos(e)), this;
			}
			setFromMatrixPosition(t) {
				const e = t.elements;
				return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
			}
			setFromMatrixScale(t) {
				const e = this.setFromMatrixColumn(t, 0).length(),
					n = this.setFromMatrixColumn(t, 1).length(),
					i = this.setFromMatrixColumn(t, 2).length();
				return (this.x = e), (this.y = n), (this.z = i), this;
			}
			setFromMatrixColumn(t, e) {
				return this.fromArray(t.elements, 4 * e);
			}
			setFromMatrix3Column(t, e) {
				return this.fromArray(t.elements, 3 * e);
			}
			equals(t) {
				return t.x === this.x && t.y === this.y && t.z === this.z;
			}
			fromArray(t, e) {
				return void 0 === e && (e = 0), (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
			}
			toArray(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
			}
			fromBufferAttribute(t, e, n) {
				return void 0 !== n && console.warn('THREE.Vector3: offset has been removed from .fromBufferAttribute().'), (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this;
			}
			random() {
				return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
			}
		}
		const tr = new $i(),
			er = new Qi();
		class nr {
			constructor(t, e) {
				Object.defineProperty(this, 'isBox3', {
					value: !0,
				}),
					(this.min = void 0 !== t ? t : new $i(1 / 0, 1 / 0, 1 / 0)),
					(this.max = void 0 !== e ? e : new $i(-1 / 0, -1 / 0, -1 / 0));
			}
			set(t, e) {
				return this.min.copy(t), this.max.copy(e), this;
			}
			setFromArray(t) {
				let e = 1 / 0,
					n = 1 / 0,
					i = 1 / 0,
					r = -1 / 0,
					o = -1 / 0,
					s = -1 / 0;
				for (let a = 0, l = t.length; a < l; a += 3) {
					const l = t[a],
						c = t[a + 1],
						h = t[a + 2];
					l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > o && (o = c), h > s && (s = h);
				}
				return this.min.set(e, n, i), this.max.set(r, o, s), this;
			}
			setFromBufferAttribute(t) {
				let e = 1 / 0,
					n = 1 / 0,
					i = 1 / 0,
					r = -1 / 0,
					o = -1 / 0,
					s = -1 / 0;
				for (let a = 0, l = t.count; a < l; a++) {
					const l = t.getX(a),
						c = t.getY(a),
						h = t.getZ(a);
					l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > o && (o = c), h > s && (s = h);
				}
				return this.min.set(e, n, i), this.max.set(r, o, s), this;
			}
			setFromPoints(t) {
				this.makeEmpty();
				for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
				return this;
			}
			setFromCenterAndSize(t, e) {
				const n = or.copy(e).multiplyScalar(0.5);
				return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
			}
			setFromObject(t) {
				return this.makeEmpty(), this.expandByObject(t);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return this.min.copy(t.min), this.max.copy(t.max), this;
			}
			makeEmpty() {
				return (this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this;
			}
			isEmpty() {
				return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
			}
			getCenter(t) {
				return (
					void 0 === t && (console.warn('THREE.Box3: .getCenter() target is now required'), (t = new $i())), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5)
				);
			}
			getSize(t) {
				return void 0 === t && (console.warn('THREE.Box3: .getSize() target is now required'), (t = new $i())), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
			}
			expandByPoint(t) {
				return this.min.min(t), this.max.max(t), this;
			}
			expandByVector(t) {
				return this.min.sub(t), this.max.add(t), this;
			}
			expandByScalar(t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this;
			}
			expandByObject(t) {
				t.updateWorldMatrix(!1, !1);
				const e = t.geometry;
				void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), sr.copy(e.boundingBox), sr.applyMatrix4(t.matrixWorld), this.union(sr));
				const n = t.children;
				for (let t = 0, e = n.length; t < e; t++) this.expandByObject(n[t]);
				return this;
			}
			containsPoint(t) {
				return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
			}
			containsBox(t) {
				return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
			}
			getParameter(t, e) {
				return (
					void 0 === e && (console.warn('THREE.Box3: .getParameter() target is now required'), (e = new $i())),
					e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
				);
			}
			intersectsBox(t) {
				return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
			}
			intersectsSphere(t) {
				return this.clampPoint(t.center, or), or.distanceToSquared(t.center) <= t.radius * t.radius;
			}
			intersectsPlane(t) {
				let e, n;
				return (
					t.normal.x > 0 ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x)) : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
					t.normal.y > 0 ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y)) : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
					t.normal.z > 0 ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z)) : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
					e <= -t.constant && n >= -t.constant
				);
			}
			intersectsTriangle(t) {
				if (this.isEmpty()) return !1;
				this.getCenter(pr), fr.subVectors(this.max, pr), ar.subVectors(t.a, pr), lr.subVectors(t.b, pr), cr.subVectors(t.c, pr), hr.subVectors(lr, ar), ur.subVectors(cr, lr), dr.subVectors(ar, cr);
				let e = [0, -hr.z, hr.y, 0, -ur.z, ur.y, 0, -dr.z, dr.y, hr.z, 0, -hr.x, ur.z, 0, -ur.x, dr.z, 0, -dr.x, -hr.y, hr.x, 0, -ur.y, ur.x, 0, -dr.y, dr.x, 0];
				return !!ir(e, ar, lr, cr, fr) && ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !!ir(e, ar, lr, cr, fr) && (mr.crossVectors(hr, ur), (e = [mr.x, mr.y, mr.z]), ir(e, ar, lr, cr, fr)));
			}
			clampPoint(t, e) {
				return void 0 === e && (console.warn('THREE.Box3: .clampPoint() target is now required'), (e = new $i())), e.copy(t).clamp(this.min, this.max);
			}
			distanceToPoint(t) {
				return or.copy(t).clamp(this.min, this.max).sub(t).length();
			}
			getBoundingSphere(t) {
				return void 0 === t && console.error('THREE.Box3: .getBoundingSphere() target is now required'), this.getCenter(t.center), (t.radius = 0.5 * this.getSize(or).length()), t;
			}
			intersect(t) {
				return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
			}
			union(t) {
				return this.min.min(t.min), this.max.max(t.max), this;
			}
			applyMatrix4(t) {
				return (
					this.isEmpty() ||
						(rr[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
						rr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
						rr[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
						rr[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
						rr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
						rr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
						rr[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
						rr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
						this.setFromPoints(rr)),
					this
				);
			}
			translate(t) {
				return this.min.add(t), this.max.add(t), this;
			}
			equals(t) {
				return t.min.equals(this.min) && t.max.equals(this.max);
			}
		}
		function ir(t, e, n, i, r) {
			for (let o = 0, s = t.length - 3; o <= s; o += 3) {
				gr.fromArray(t, o);
				const s = r.x * Math.abs(gr.x) + r.y * Math.abs(gr.y) + r.z * Math.abs(gr.z),
					a = e.dot(gr),
					l = n.dot(gr),
					c = i.dot(gr);
				if (Math.max(-Math.max(a, l, c), Math.min(a, l, c)) > s) return !1;
			}
			return !0;
		}
		const rr = [new $i(), new $i(), new $i(), new $i(), new $i(), new $i(), new $i(), new $i()],
			or = new $i(),
			sr = new nr(),
			ar = new $i(),
			lr = new $i(),
			cr = new $i(),
			hr = new $i(),
			ur = new $i(),
			dr = new $i(),
			pr = new $i(),
			fr = new $i(),
			mr = new $i(),
			gr = new $i(),
			vr = new nr();
		class yr {
			constructor(t, e) {
				(this.center = void 0 !== t ? t : new $i()), (this.radius = void 0 !== e ? e : -1);
			}
			set(t, e) {
				return this.center.copy(t), (this.radius = e), this;
			}
			setFromPoints(t, e) {
				const n = this.center;
				void 0 !== e ? n.copy(e) : vr.setFromPoints(t).getCenter(n);
				let i = 0;
				for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
				return (this.radius = Math.sqrt(i)), this;
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return this.center.copy(t.center), (this.radius = t.radius), this;
			}
			isEmpty() {
				return this.radius < 0;
			}
			makeEmpty() {
				return this.center.set(0, 0, 0), (this.radius = -1), this;
			}
			containsPoint(t) {
				return t.distanceToSquared(this.center) <= this.radius * this.radius;
			}
			distanceToPoint(t) {
				return t.distanceTo(this.center) - this.radius;
			}
			intersectsSphere(t) {
				const e = this.radius + t.radius;
				return t.center.distanceToSquared(this.center) <= e * e;
			}
			intersectsBox(t) {
				return t.intersectsSphere(this);
			}
			intersectsPlane(t) {
				return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
			}
			clampPoint(t, e) {
				const n = this.center.distanceToSquared(t);
				return (
					void 0 === e && (console.warn('THREE.Sphere: .clampPoint() target is now required'), (e = new $i())),
					e.copy(t),
					n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)),
					e
				);
			}
			getBoundingBox(t) {
				return (
					void 0 === t && (console.warn('THREE.Sphere: .getBoundingBox() target is now required'), (t = new nr())),
					this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
				);
			}
			applyMatrix4(t) {
				return this.center.applyMatrix4(t), (this.radius = this.radius * t.getMaxScaleOnAxis()), this;
			}
			translate(t) {
				return this.center.add(t), this;
			}
			equals(t) {
				return t.center.equals(this.center) && t.radius === this.radius;
			}
		}
		const xr = new $i(),
			_r = new $i(),
			br = new $i(),
			wr = new $i(),
			Mr = new $i(),
			Sr = new $i(),
			Tr = new $i();
		class Er {
			constructor(t, e) {
				(this.origin = void 0 !== t ? t : new $i()), (this.direction = void 0 !== e ? e : new $i(0, 0, -1));
			}
			set(t, e) {
				return this.origin.copy(t), this.direction.copy(e), this;
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
			}
			at(t, e) {
				return void 0 === e && (console.warn('THREE.Ray: .at() target is now required'), (e = new $i())), e.copy(this.direction).multiplyScalar(t).add(this.origin);
			}
			lookAt(t) {
				return this.direction.copy(t).sub(this.origin).normalize(), this;
			}
			recast(t) {
				return this.origin.copy(this.at(t, xr)), this;
			}
			closestPointToPoint(t, e) {
				void 0 === e && (console.warn('THREE.Ray: .closestPointToPoint() target is now required'), (e = new $i())), e.subVectors(t, this.origin);
				const n = e.dot(this.direction);
				return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
			}
			distanceToPoint(t) {
				return Math.sqrt(this.distanceSqToPoint(t));
			}
			distanceSqToPoint(t) {
				const e = xr.subVectors(t, this.origin).dot(this.direction);
				return e < 0 ? this.origin.distanceToSquared(t) : (xr.copy(this.direction).multiplyScalar(e).add(this.origin), xr.distanceToSquared(t));
			}
			distanceSqToSegment(t, e, n, i) {
				_r.copy(t).add(e).multiplyScalar(0.5), br.copy(e).sub(t).normalize(), wr.copy(this.origin).sub(_r);
				const r = 0.5 * t.distanceTo(e),
					o = -this.direction.dot(br),
					s = wr.dot(this.direction),
					a = -wr.dot(br),
					l = wr.lengthSq(),
					c = Math.abs(1 - o * o);
				let h, u, d, p;
				if (c > 0)
					if (((h = o * a - s), (u = o * s - a), (p = r * c), h >= 0))
						if (u >= -p)
							if (u <= p) {
								const t = 1 / c;
								(h *= t), (u *= t), (d = h * (h + o * u + 2 * s) + u * (o * h + u + 2 * a) + l);
							} else (u = r), (h = Math.max(0, -(o * u + s))), (d = -h * h + u * (u + 2 * a) + l);
						else (u = -r), (h = Math.max(0, -(o * u + s))), (d = -h * h + u * (u + 2 * a) + l);
					else
						u <= -p
							? ((h = Math.max(0, -(-o * r + s))), (u = h > 0 ? -r : Math.min(Math.max(-r, -a), r)), (d = -h * h + u * (u + 2 * a) + l))
							: u <= p
							? ((h = 0), (u = Math.min(Math.max(-r, -a), r)), (d = u * (u + 2 * a) + l))
							: ((h = Math.max(0, -(o * r + s))), (u = h > 0 ? r : Math.min(Math.max(-r, -a), r)), (d = -h * h + u * (u + 2 * a) + l));
				else (u = o > 0 ? -r : r), (h = Math.max(0, -(o * u + s))), (d = -h * h + u * (u + 2 * a) + l);
				return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(br).multiplyScalar(u).add(_r), d;
			}
			intersectSphere(t, e) {
				xr.subVectors(t.center, this.origin);
				const n = xr.dot(this.direction),
					i = xr.dot(xr) - n * n,
					r = t.radius * t.radius;
				if (i > r) return null;
				const o = Math.sqrt(r - i),
					s = n - o,
					a = n + o;
				return s < 0 && a < 0 ? null : s < 0 ? this.at(a, e) : this.at(s, e);
			}
			intersectsSphere(t) {
				return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
			}
			distanceToPlane(t) {
				const e = t.normal.dot(this.direction);
				if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
				const n = -(this.origin.dot(t.normal) + t.constant) / e;
				return n >= 0 ? n : null;
			}
			intersectPlane(t, e) {
				const n = this.distanceToPlane(t);
				return null === n ? null : this.at(n, e);
			}
			intersectsPlane(t) {
				const e = t.distanceToPoint(this.origin);
				if (0 === e) return !0;
				return t.normal.dot(this.direction) * e < 0;
			}
			intersectBox(t, e) {
				let n, i, r, o, s, a;
				const l = 1 / this.direction.x,
					c = 1 / this.direction.y,
					h = 1 / this.direction.z,
					u = this.origin;
				return (
					l >= 0 ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l)) : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
					c >= 0 ? ((r = (t.min.y - u.y) * c), (o = (t.max.y - u.y) * c)) : ((r = (t.max.y - u.y) * c), (o = (t.min.y - u.y) * c)),
					n > o || r > i
						? null
						: ((r > n || n != n) && (n = r),
						  (o < i || i != i) && (i = o),
						  h >= 0 ? ((s = (t.min.z - u.z) * h), (a = (t.max.z - u.z) * h)) : ((s = (t.max.z - u.z) * h), (a = (t.min.z - u.z) * h)),
						  n > a || s > i ? null : ((s > n || n != n) && (n = s), (a < i || i != i) && (i = a), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
				);
			}
			intersectsBox(t) {
				return null !== this.intersectBox(t, xr);
			}
			intersectTriangle(t, e, n, i, r) {
				Mr.subVectors(e, t), Sr.subVectors(n, t), Tr.crossVectors(Mr, Sr);
				let o,
					s = this.direction.dot(Tr);
				if (s > 0) {
					if (i) return null;
					o = 1;
				} else {
					if (!(s < 0)) return null;
					(o = -1), (s = -s);
				}
				wr.subVectors(this.origin, t);
				const a = o * this.direction.dot(Sr.crossVectors(wr, Sr));
				if (a < 0) return null;
				const l = o * this.direction.dot(Mr.cross(wr));
				if (l < 0) return null;
				if (a + l > s) return null;
				const c = -o * wr.dot(Tr);
				return c < 0 ? null : this.at(c / s, r);
			}
			applyMatrix4(t) {
				return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
			}
			equals(t) {
				return t.origin.equals(this.origin) && t.direction.equals(this.direction);
			}
		}
		class Ar {
			constructor() {
				Object.defineProperty(this, 'isMatrix4', {
					value: !0,
				}),
					(this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
					arguments.length > 0 && console.error('THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.');
			}
			set(t, e, n, i, r, o, s, a, l, c, h, u, d, p, f, m) {
				const g = this.elements;
				return (
					(g[0] = t),
					(g[4] = e),
					(g[8] = n),
					(g[12] = i),
					(g[1] = r),
					(g[5] = o),
					(g[9] = s),
					(g[13] = a),
					(g[2] = l),
					(g[6] = c),
					(g[10] = h),
					(g[14] = u),
					(g[3] = d),
					(g[7] = p),
					(g[11] = f),
					(g[15] = m),
					this
				);
			}
			identity() {
				return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
			}
			clone() {
				return new Ar().fromArray(this.elements);
			}
			copy(t) {
				const e = this.elements,
					n = t.elements;
				return (
					(e[0] = n[0]),
					(e[1] = n[1]),
					(e[2] = n[2]),
					(e[3] = n[3]),
					(e[4] = n[4]),
					(e[5] = n[5]),
					(e[6] = n[6]),
					(e[7] = n[7]),
					(e[8] = n[8]),
					(e[9] = n[9]),
					(e[10] = n[10]),
					(e[11] = n[11]),
					(e[12] = n[12]),
					(e[13] = n[13]),
					(e[14] = n[14]),
					(e[15] = n[15]),
					this
				);
			}
			copyPosition(t) {
				const e = this.elements,
					n = t.elements;
				return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
			}
			extractBasis(t, e, n) {
				return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
			}
			makeBasis(t, e, n) {
				return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
			}
			extractRotation(t) {
				const e = this.elements,
					n = t.elements,
					i = 1 / Lr.setFromMatrixColumn(t, 0).length(),
					r = 1 / Lr.setFromMatrixColumn(t, 1).length(),
					o = 1 / Lr.setFromMatrixColumn(t, 2).length();
				return (
					(e[0] = n[0] * i),
					(e[1] = n[1] * i),
					(e[2] = n[2] * i),
					(e[3] = 0),
					(e[4] = n[4] * r),
					(e[5] = n[5] * r),
					(e[6] = n[6] * r),
					(e[7] = 0),
					(e[8] = n[8] * o),
					(e[9] = n[9] * o),
					(e[10] = n[10] * o),
					(e[11] = 0),
					(e[12] = 0),
					(e[13] = 0),
					(e[14] = 0),
					(e[15] = 1),
					this
				);
			}
			makeRotationFromEuler(t) {
				(t && t.isEuler) || console.error('THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.');
				const e = this.elements,
					n = t.x,
					i = t.y,
					r = t.z,
					o = Math.cos(n),
					s = Math.sin(n),
					a = Math.cos(i),
					l = Math.sin(i),
					c = Math.cos(r),
					h = Math.sin(r);
				if ('XYZ' === t.order) {
					const t = o * c,
						n = o * h,
						i = s * c,
						r = s * h;
					(e[0] = a * c), (e[4] = -a * h), (e[8] = l), (e[1] = n + i * l), (e[5] = t - r * l), (e[9] = -s * a), (e[2] = r - t * l), (e[6] = i + n * l), (e[10] = o * a);
				} else if ('YXZ' === t.order) {
					const t = a * c,
						n = a * h,
						i = l * c,
						r = l * h;
					(e[0] = t + r * s), (e[4] = i * s - n), (e[8] = o * l), (e[1] = o * h), (e[5] = o * c), (e[9] = -s), (e[2] = n * s - i), (e[6] = r + t * s), (e[10] = o * a);
				} else if ('ZXY' === t.order) {
					const t = a * c,
						n = a * h,
						i = l * c,
						r = l * h;
					(e[0] = t - r * s), (e[4] = -o * h), (e[8] = i + n * s), (e[1] = n + i * s), (e[5] = o * c), (e[9] = r - t * s), (e[2] = -o * l), (e[6] = s), (e[10] = o * a);
				} else if ('ZYX' === t.order) {
					const t = o * c,
						n = o * h,
						i = s * c,
						r = s * h;
					(e[0] = a * c), (e[4] = i * l - n), (e[8] = t * l + r), (e[1] = a * h), (e[5] = r * l + t), (e[9] = n * l - i), (e[2] = -l), (e[6] = s * a), (e[10] = o * a);
				} else if ('YZX' === t.order) {
					const t = o * a,
						n = o * l,
						i = s * a,
						r = s * l;
					(e[0] = a * c), (e[4] = r - t * h), (e[8] = i * h + n), (e[1] = h), (e[5] = o * c), (e[9] = -s * c), (e[2] = -l * c), (e[6] = n * h + i), (e[10] = t - r * h);
				} else if ('XZY' === t.order) {
					const t = o * a,
						n = o * l,
						i = s * a,
						r = s * l;
					(e[0] = a * c), (e[4] = -h), (e[8] = l * c), (e[1] = t * h + r), (e[5] = o * c), (e[9] = n * h - i), (e[2] = i * h - n), (e[6] = s * c), (e[10] = r * h + t);
				}
				return (e[3] = 0), (e[7] = 0), (e[11] = 0), (e[12] = 0), (e[13] = 0), (e[14] = 0), (e[15] = 1), this;
			}
			makeRotationFromQuaternion(t) {
				return this.compose(Pr, t, Cr);
			}
			lookAt(t, e, n) {
				const i = this.elements;
				return (
					Ir.subVectors(t, e),
					0 === Ir.lengthSq() && (Ir.z = 1),
					Ir.normalize(),
					Or.crossVectors(n, Ir),
					0 === Or.lengthSq() && (1 === Math.abs(n.z) ? (Ir.x += 1e-4) : (Ir.z += 1e-4), Ir.normalize(), Or.crossVectors(n, Ir)),
					Or.normalize(),
					Dr.crossVectors(Ir, Or),
					(i[0] = Or.x),
					(i[4] = Dr.x),
					(i[8] = Ir.x),
					(i[1] = Or.y),
					(i[5] = Dr.y),
					(i[9] = Ir.y),
					(i[2] = Or.z),
					(i[6] = Dr.z),
					(i[10] = Ir.z),
					this
				);
			}
			multiply(t, e) {
				return void 0 !== e
					? (console.warn('THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'), this.multiplyMatrices(t, e))
					: this.multiplyMatrices(this, t);
			}
			premultiply(t) {
				return this.multiplyMatrices(t, this);
			}
			multiplyMatrices(t, e) {
				const n = t.elements,
					i = e.elements,
					r = this.elements,
					o = n[0],
					s = n[4],
					a = n[8],
					l = n[12],
					c = n[1],
					h = n[5],
					u = n[9],
					d = n[13],
					p = n[2],
					f = n[6],
					m = n[10],
					g = n[14],
					v = n[3],
					y = n[7],
					x = n[11],
					_ = n[15],
					b = i[0],
					w = i[4],
					M = i[8],
					S = i[12],
					T = i[1],
					E = i[5],
					A = i[9],
					L = i[13],
					R = i[2],
					P = i[6],
					C = i[10],
					O = i[14],
					D = i[3],
					I = i[7],
					N = i[11],
					z = i[15];
				return (
					(r[0] = o * b + s * T + a * R + l * D),
					(r[4] = o * w + s * E + a * P + l * I),
					(r[8] = o * M + s * A + a * C + l * N),
					(r[12] = o * S + s * L + a * O + l * z),
					(r[1] = c * b + h * T + u * R + d * D),
					(r[5] = c * w + h * E + u * P + d * I),
					(r[9] = c * M + h * A + u * C + d * N),
					(r[13] = c * S + h * L + u * O + d * z),
					(r[2] = p * b + f * T + m * R + g * D),
					(r[6] = p * w + f * E + m * P + g * I),
					(r[10] = p * M + f * A + m * C + g * N),
					(r[14] = p * S + f * L + m * O + g * z),
					(r[3] = v * b + y * T + x * R + _ * D),
					(r[7] = v * w + y * E + x * P + _ * I),
					(r[11] = v * M + y * A + x * C + _ * N),
					(r[15] = v * S + y * L + x * O + _ * z),
					this
				);
			}
			multiplyScalar(t) {
				const e = this.elements;
				return (
					(e[0] *= t),
					(e[4] *= t),
					(e[8] *= t),
					(e[12] *= t),
					(e[1] *= t),
					(e[5] *= t),
					(e[9] *= t),
					(e[13] *= t),
					(e[2] *= t),
					(e[6] *= t),
					(e[10] *= t),
					(e[14] *= t),
					(e[3] *= t),
					(e[7] *= t),
					(e[11] *= t),
					(e[15] *= t),
					this
				);
			}
			determinant() {
				const t = this.elements,
					e = t[0],
					n = t[4],
					i = t[8],
					r = t[12],
					o = t[1],
					s = t[5],
					a = t[9],
					l = t[13],
					c = t[2],
					h = t[6],
					u = t[10],
					d = t[14];
				return (
					t[3] * (+r * a * h - i * l * h - r * s * u + n * l * u + i * s * d - n * a * d) +
					t[7] * (+e * a * d - e * l * u + r * o * u - i * o * d + i * l * c - r * a * c) +
					t[11] * (+e * l * h - e * s * d - r * o * h + n * o * d + r * s * c - n * l * c) +
					t[15] * (-i * s * c - e * a * h + e * s * u + i * o * h - n * o * u + n * a * c)
				);
			}
			transpose() {
				const t = this.elements;
				let e;
				return (
					(e = t[1]),
					(t[1] = t[4]),
					(t[4] = e),
					(e = t[2]),
					(t[2] = t[8]),
					(t[8] = e),
					(e = t[6]),
					(t[6] = t[9]),
					(t[9] = e),
					(e = t[3]),
					(t[3] = t[12]),
					(t[12] = e),
					(e = t[7]),
					(t[7] = t[13]),
					(t[13] = e),
					(e = t[11]),
					(t[11] = t[14]),
					(t[14] = e),
					this
				);
			}
			setPosition(t, e, n) {
				const i = this.elements;
				return t.isVector3 ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z)) : ((i[12] = t), (i[13] = e), (i[14] = n)), this;
			}
			getInverse(t, e) {
				void 0 !== e && console.warn('THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.');
				const n = this.elements,
					i = t.elements,
					r = i[0],
					o = i[1],
					s = i[2],
					a = i[3],
					l = i[4],
					c = i[5],
					h = i[6],
					u = i[7],
					d = i[8],
					p = i[9],
					f = i[10],
					m = i[11],
					g = i[12],
					v = i[13],
					y = i[14],
					x = i[15],
					_ = p * y * u - v * f * u + v * h * m - c * y * m - p * h * x + c * f * x,
					b = g * f * u - d * y * u - g * h * m + l * y * m + d * h * x - l * f * x,
					w = d * v * u - g * p * u + g * c * m - l * v * m - d * c * x + l * p * x,
					M = g * p * h - d * v * h - g * c * f + l * v * f + d * c * y - l * p * y,
					S = r * _ + o * b + s * w + a * M;
				if (0 === S) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				const T = 1 / S;
				return (
					(n[0] = _ * T),
					(n[1] = (v * f * a - p * y * a - v * s * m + o * y * m + p * s * x - o * f * x) * T),
					(n[2] = (c * y * a - v * h * a + v * s * u - o * y * u - c * s * x + o * h * x) * T),
					(n[3] = (p * h * a - c * f * a - p * s * u + o * f * u + c * s * m - o * h * m) * T),
					(n[4] = b * T),
					(n[5] = (d * y * a - g * f * a + g * s * m - r * y * m - d * s * x + r * f * x) * T),
					(n[6] = (g * h * a - l * y * a - g * s * u + r * y * u + l * s * x - r * h * x) * T),
					(n[7] = (l * f * a - d * h * a + d * s * u - r * f * u - l * s * m + r * h * m) * T),
					(n[8] = w * T),
					(n[9] = (g * p * a - d * v * a - g * o * m + r * v * m + d * o * x - r * p * x) * T),
					(n[10] = (l * v * a - g * c * a + g * o * u - r * v * u - l * o * x + r * c * x) * T),
					(n[11] = (d * c * a - l * p * a - d * o * u + r * p * u + l * o * m - r * c * m) * T),
					(n[12] = M * T),
					(n[13] = (d * v * s - g * p * s + g * o * f - r * v * f - d * o * y + r * p * y) * T),
					(n[14] = (g * c * s - l * v * s - g * o * h + r * v * h + l * o * y - r * c * y) * T),
					(n[15] = (l * p * s - d * c * s + d * o * h - r * p * h - l * o * f + r * c * f) * T),
					this
				);
			}
			scale(t) {
				const e = this.elements,
					n = t.x,
					i = t.y,
					r = t.z;
				return (e[0] *= n), (e[4] *= i), (e[8] *= r), (e[1] *= n), (e[5] *= i), (e[9] *= r), (e[2] *= n), (e[6] *= i), (e[10] *= r), (e[3] *= n), (e[7] *= i), (e[11] *= r), this;
			}
			getMaxScaleOnAxis() {
				const t = this.elements,
					e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
					n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
					i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
				return Math.sqrt(Math.max(e, n, i));
			}
			makeTranslation(t, e, n) {
				return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
			}
			makeRotationX(t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
			}
			makeRotationY(t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
			}
			makeRotationZ(t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
			}
			makeRotationAxis(t, e) {
				const n = Math.cos(e),
					i = Math.sin(e),
					r = 1 - n,
					o = t.x,
					s = t.y,
					a = t.z,
					l = r * o,
					c = r * s;
				return this.set(l * o + n, l * s - i * a, l * a + i * s, 0, l * s + i * a, c * s + n, c * a - i * o, 0, l * a - i * s, c * a + i * o, r * a * a + n, 0, 0, 0, 0, 1), this;
			}
			makeScale(t, e, n) {
				return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
			}
			makeShear(t, e, n) {
				return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this;
			}
			compose(t, e, n) {
				const i = this.elements,
					r = e._x,
					o = e._y,
					s = e._z,
					a = e._w,
					l = r + r,
					c = o + o,
					h = s + s,
					u = r * l,
					d = r * c,
					p = r * h,
					f = o * c,
					m = o * h,
					g = s * h,
					v = a * l,
					y = a * c,
					x = a * h,
					_ = n.x,
					b = n.y,
					w = n.z;
				return (
					(i[0] = (1 - (f + g)) * _),
					(i[1] = (d + x) * _),
					(i[2] = (p - y) * _),
					(i[3] = 0),
					(i[4] = (d - x) * b),
					(i[5] = (1 - (u + g)) * b),
					(i[6] = (m + v) * b),
					(i[7] = 0),
					(i[8] = (p + y) * w),
					(i[9] = (m - v) * w),
					(i[10] = (1 - (u + f)) * w),
					(i[11] = 0),
					(i[12] = t.x),
					(i[13] = t.y),
					(i[14] = t.z),
					(i[15] = 1),
					this
				);
			}
			decompose(t, e, n) {
				const i = this.elements;
				let r = Lr.set(i[0], i[1], i[2]).length();
				const o = Lr.set(i[4], i[5], i[6]).length(),
					s = Lr.set(i[8], i[9], i[10]).length();
				this.determinant() < 0 && (r = -r), (t.x = i[12]), (t.y = i[13]), (t.z = i[14]), Rr.copy(this);
				const a = 1 / r,
					l = 1 / o,
					c = 1 / s;
				return (
					(Rr.elements[0] *= a),
					(Rr.elements[1] *= a),
					(Rr.elements[2] *= a),
					(Rr.elements[4] *= l),
					(Rr.elements[5] *= l),
					(Rr.elements[6] *= l),
					(Rr.elements[8] *= c),
					(Rr.elements[9] *= c),
					(Rr.elements[10] *= c),
					e.setFromRotationMatrix(Rr),
					(n.x = r),
					(n.y = o),
					(n.z = s),
					this
				);
			}
			makePerspective(t, e, n, i, r, o) {
				void 0 === o && console.warn('THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.');
				const s = this.elements,
					a = (2 * r) / (e - t),
					l = (2 * r) / (n - i),
					c = (e + t) / (e - t),
					h = (n + i) / (n - i),
					u = -(o + r) / (o - r),
					d = (-2 * o * r) / (o - r);
				return (
					(s[0] = a),
					(s[4] = 0),
					(s[8] = c),
					(s[12] = 0),
					(s[1] = 0),
					(s[5] = l),
					(s[9] = h),
					(s[13] = 0),
					(s[2] = 0),
					(s[6] = 0),
					(s[10] = u),
					(s[14] = d),
					(s[3] = 0),
					(s[7] = 0),
					(s[11] = -1),
					(s[15] = 0),
					this
				);
			}
			makeOrthographic(t, e, n, i, r, o) {
				const s = this.elements,
					a = 1 / (e - t),
					l = 1 / (n - i),
					c = 1 / (o - r),
					h = (e + t) * a,
					u = (n + i) * l,
					d = (o + r) * c;
				return (
					(s[0] = 2 * a),
					(s[4] = 0),
					(s[8] = 0),
					(s[12] = -h),
					(s[1] = 0),
					(s[5] = 2 * l),
					(s[9] = 0),
					(s[13] = -u),
					(s[2] = 0),
					(s[6] = 0),
					(s[10] = -2 * c),
					(s[14] = -d),
					(s[3] = 0),
					(s[7] = 0),
					(s[11] = 0),
					(s[15] = 1),
					this
				);
			}
			equals(t) {
				const e = this.elements,
					n = t.elements;
				for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
				return !0;
			}
			fromArray(t, e) {
				void 0 === e && (e = 0);
				for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
				return this;
			}
			toArray(t, e) {
				void 0 === t && (t = []), void 0 === e && (e = 0);
				const n = this.elements;
				return (
					(t[e] = n[0]),
					(t[e + 1] = n[1]),
					(t[e + 2] = n[2]),
					(t[e + 3] = n[3]),
					(t[e + 4] = n[4]),
					(t[e + 5] = n[5]),
					(t[e + 6] = n[6]),
					(t[e + 7] = n[7]),
					(t[e + 8] = n[8]),
					(t[e + 9] = n[9]),
					(t[e + 10] = n[10]),
					(t[e + 11] = n[11]),
					(t[e + 12] = n[12]),
					(t[e + 13] = n[13]),
					(t[e + 14] = n[14]),
					(t[e + 15] = n[15]),
					t
				);
			}
		}
		const Lr = new $i(),
			Rr = new Ar(),
			Pr = new $i(0, 0, 0),
			Cr = new $i(1, 1, 1),
			Or = new $i(),
			Dr = new $i(),
			Ir = new $i();
		class Nr {
			constructor(t = 0, e = 0, n = 0, i = Nr.DefaultOrder) {
				Object.defineProperty(this, 'isEuler', {
					value: !0,
				}),
					(this._x = t),
					(this._y = e),
					(this._z = n),
					(this._order = i);
			}
			get x() {
				return this._x;
			}
			set x(t) {
				(this._x = t), this._onChangeCallback();
			}
			get y() {
				return this._y;
			}
			set y(t) {
				(this._y = t), this._onChangeCallback();
			}
			get z() {
				return this._z;
			}
			set z(t) {
				(this._z = t), this._onChangeCallback();
			}
			get order() {
				return this._order;
			}
			set order(t) {
				(this._order = t), this._onChangeCallback();
			}
			set(t, e, n, i) {
				return (this._x = t), (this._y = e), (this._z = n), (this._order = i || this._order), this._onChangeCallback(), this;
			}
			clone() {
				return new this.constructor(this._x, this._y, this._z, this._order);
			}
			copy(t) {
				return (this._x = t._x), (this._y = t._y), (this._z = t._z), (this._order = t._order), this._onChangeCallback(), this;
			}
			setFromRotationMatrix(t, e, n) {
				const i = Gi.clamp,
					r = t.elements,
					o = r[0],
					s = r[4],
					a = r[8],
					l = r[1],
					c = r[5],
					h = r[9],
					u = r[2],
					d = r[6],
					p = r[10];
				switch ((e = e || this._order)) {
					case 'XYZ':
						(this._y = Math.asin(i(a, -1, 1))), Math.abs(a) < 0.9999999 ? ((this._x = Math.atan2(-h, p)), (this._z = Math.atan2(-s, o))) : ((this._x = Math.atan2(d, c)), (this._z = 0));
						break;
					case 'YXZ':
						(this._x = Math.asin(-i(h, -1, 1))), Math.abs(h) < 0.9999999 ? ((this._y = Math.atan2(a, p)), (this._z = Math.atan2(l, c))) : ((this._y = Math.atan2(-u, o)), (this._z = 0));
						break;
					case 'ZXY':
						(this._x = Math.asin(i(d, -1, 1))), Math.abs(d) < 0.9999999 ? ((this._y = Math.atan2(-u, p)), (this._z = Math.atan2(-s, c))) : ((this._y = 0), (this._z = Math.atan2(l, o)));
						break;
					case 'ZYX':
						(this._y = Math.asin(-i(u, -1, 1))), Math.abs(u) < 0.9999999 ? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(l, o))) : ((this._x = 0), (this._z = Math.atan2(-s, c)));
						break;
					case 'YZX':
						(this._z = Math.asin(i(l, -1, 1))), Math.abs(l) < 0.9999999 ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-u, o))) : ((this._x = 0), (this._y = Math.atan2(a, p)));
						break;
					case 'XZY':
						(this._z = Math.asin(-i(s, -1, 1))), Math.abs(s) < 0.9999999 ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(a, o))) : ((this._x = Math.atan2(-h, p)), (this._y = 0));
						break;
					default:
						console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + e);
				}
				return (this._order = e), !1 !== n && this._onChangeCallback(), this;
			}
			setFromQuaternion(t, e, n) {
				return zr.makeRotationFromQuaternion(t), this.setFromRotationMatrix(zr, e, n);
			}
			setFromVector3(t, e) {
				return this.set(t.x, t.y, t.z, e || this._order);
			}
			reorder(t) {
				return Br.setFromEuler(this), this.setFromQuaternion(Br, t);
			}
			equals(t) {
				return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
			}
			fromArray(t) {
				return (this._x = t[0]), (this._y = t[1]), (this._z = t[2]), void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
			}
			toArray(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), (t[e] = this._x), (t[e + 1] = this._y), (t[e + 2] = this._z), (t[e + 3] = this._order), t;
			}
			toVector3(t) {
				return t ? t.set(this._x, this._y, this._z) : new $i(this._x, this._y, this._z);
			}
			_onChange(t) {
				return (this._onChangeCallback = t), this;
			}
			_onChangeCallback() {}
		}
		(Nr.DefaultOrder = 'XYZ'), (Nr.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX']);
		const zr = new Ar(),
			Br = new Qi();
		class kr {
			constructor() {
				this.mask = 1;
			}
			set(t) {
				this.mask = (1 << t) | 0;
			}
			enable(t) {
				this.mask |= (1 << t) | 0;
			}
			enableAll() {
				this.mask = -1;
			}
			toggle(t) {
				this.mask ^= (1 << t) | 0;
			}
			disable(t) {
				this.mask &= ~((1 << t) | 0);
			}
			disableAll() {
				this.mask = 0;
			}
			test(t) {
				return 0 != (this.mask & t.mask);
			}
		}
		let Fr = 0;
		const Ur = new $i(),
			Hr = new Qi(),
			Gr = new Ar(),
			Vr = new $i(),
			jr = new $i(),
			Wr = new $i(),
			qr = new Qi(),
			Xr = new $i(1, 0, 0),
			Yr = new $i(0, 1, 0),
			Zr = new $i(0, 0, 1),
			Jr = {
				type: 'added',
			},
			Kr = {
				type: 'removed',
			};
		function Qr() {
			Object.defineProperty(this, 'id', {
				value: Fr++,
			}),
				(this.uuid = Gi.generateUUID()),
				(this.name = ''),
				(this.type = 'Object3D'),
				(this.parent = null),
				(this.children = []),
				(this.up = Qr.DefaultUp.clone());
			const t = new $i(),
				e = new Nr(),
				n = new Qi(),
				i = new $i(1, 1, 1);
			e._onChange(function () {
				n.setFromEuler(e, !1);
			}),
				n._onChange(function () {
					e.setFromQuaternion(n, void 0, !1);
				}),
				Object.defineProperties(this, {
					position: {
						configurable: !0,
						enumerable: !0,
						value: t,
					},
					rotation: {
						configurable: !0,
						enumerable: !0,
						value: e,
					},
					quaternion: {
						configurable: !0,
						enumerable: !0,
						value: n,
					},
					scale: {
						configurable: !0,
						enumerable: !0,
						value: i,
					},
					modelViewMatrix: {
						value: new Ar(),
					},
					normalMatrix: {
						value: new ji(),
					},
				}),
				(this.matrix = new Ar()),
				(this.matrixWorld = new Ar()),
				(this.matrixAutoUpdate = Qr.DefaultMatrixAutoUpdate),
				(this.matrixWorldNeedsUpdate = !1),
				(this.layers = new kr()),
				(this.visible = !0),
				(this.castShadow = !1),
				(this.receiveShadow = !1),
				(this.frustumCulled = !0),
				(this.renderOrder = 0),
				(this.userData = {});
		}
		(Qr.DefaultUp = new $i(0, 1, 0)),
			(Qr.DefaultMatrixAutoUpdate = !0),
			(Qr.prototype = Object.assign(Object.create(Fi.prototype), {
				constructor: Qr,
				isObject3D: !0,
				onBeforeRender: function () {},
				onAfterRender: function () {},
				applyMatrix4: function (t) {
					this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
				},
				applyQuaternion: function (t) {
					return this.quaternion.premultiply(t), this;
				},
				setRotationFromAxisAngle: function (t, e) {
					this.quaternion.setFromAxisAngle(t, e);
				},
				setRotationFromEuler: function (t) {
					this.quaternion.setFromEuler(t, !0);
				},
				setRotationFromMatrix: function (t) {
					this.quaternion.setFromRotationMatrix(t);
				},
				setRotationFromQuaternion: function (t) {
					this.quaternion.copy(t);
				},
				rotateOnAxis: function (t, e) {
					return Hr.setFromAxisAngle(t, e), this.quaternion.multiply(Hr), this;
				},
				rotateOnWorldAxis: function (t, e) {
					return Hr.setFromAxisAngle(t, e), this.quaternion.premultiply(Hr), this;
				},
				rotateX: function (t) {
					return this.rotateOnAxis(Xr, t);
				},
				rotateY: function (t) {
					return this.rotateOnAxis(Yr, t);
				},
				rotateZ: function (t) {
					return this.rotateOnAxis(Zr, t);
				},
				translateOnAxis: function (t, e) {
					return Ur.copy(t).applyQuaternion(this.quaternion), this.position.add(Ur.multiplyScalar(e)), this;
				},
				translateX: function (t) {
					return this.translateOnAxis(Xr, t);
				},
				translateY: function (t) {
					return this.translateOnAxis(Yr, t);
				},
				translateZ: function (t) {
					return this.translateOnAxis(Zr, t);
				},
				localToWorld: function (t) {
					return t.applyMatrix4(this.matrixWorld);
				},
				worldToLocal: function (t) {
					return t.applyMatrix4(Gr.getInverse(this.matrixWorld));
				},
				lookAt: function (t, e, n) {
					t.isVector3 ? Vr.copy(t) : Vr.set(t, e, n);
					const i = this.parent;
					this.updateWorldMatrix(!0, !1),
						jr.setFromMatrixPosition(this.matrixWorld),
						this.isCamera || this.isLight ? Gr.lookAt(jr, Vr, this.up) : Gr.lookAt(Vr, jr, this.up),
						this.quaternion.setFromRotationMatrix(Gr),
						i && (Gr.extractRotation(i.matrixWorld), Hr.setFromRotationMatrix(Gr), this.quaternion.premultiply(Hr.inverse()));
				},
				add: function (t) {
					if (arguments.length > 1) {
						for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
						return this;
					}
					return t === this
						? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this)
						: (t && t.isObject3D
								? (null !== t.parent && t.parent.remove(t), (t.parent = this), this.children.push(t), t.dispatchEvent(Jr))
								: console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', t),
						  this);
				},
				remove: function (t) {
					if (arguments.length > 1) {
						for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
						return this;
					}
					const e = this.children.indexOf(t);
					return -1 !== e && ((t.parent = null), this.children.splice(e, 1), t.dispatchEvent(Kr)), this;
				},
				attach: function (t) {
					return (
						this.updateWorldMatrix(!0, !1),
						Gr.getInverse(this.matrixWorld),
						null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Gr.multiply(t.parent.matrixWorld)),
						t.applyMatrix4(Gr),
						t.updateWorldMatrix(!1, !1),
						this.add(t),
						this
					);
				},
				getObjectById: function (t) {
					return this.getObjectByProperty('id', t);
				},
				getObjectByName: function (t) {
					return this.getObjectByProperty('name', t);
				},
				getObjectByProperty: function (t, e) {
					if (this[t] === e) return this;
					for (let n = 0, i = this.children.length; n < i; n++) {
						const i = this.children[n].getObjectByProperty(t, e);
						if (void 0 !== i) return i;
					}
				},
				getWorldPosition: function (t) {
					return void 0 === t && (console.warn('THREE.Object3D: .getWorldPosition() target is now required'), (t = new $i())), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld);
				},
				getWorldQuaternion: function (t) {
					return void 0 === t && (console.warn('THREE.Object3D: .getWorldQuaternion() target is now required'), (t = new Qi())), this.updateMatrixWorld(!0), this.matrixWorld.decompose(jr, t, Wr), t;
				},
				getWorldScale: function (t) {
					return void 0 === t && (console.warn('THREE.Object3D: .getWorldScale() target is now required'), (t = new $i())), this.updateMatrixWorld(!0), this.matrixWorld.decompose(jr, qr, t), t;
				},
				getWorldDirection: function (t) {
					void 0 === t && (console.warn('THREE.Object3D: .getWorldDirection() target is now required'), (t = new $i())), this.updateMatrixWorld(!0);
					const e = this.matrixWorld.elements;
					return t.set(e[8], e[9], e[10]).normalize();
				},
				raycast: function () {},
				traverse: function (t) {
					t(this);
					const e = this.children;
					for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
				},
				traverseVisible: function (t) {
					if (!1 === this.visible) return;
					t(this);
					const e = this.children;
					for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
				},
				traverseAncestors: function (t) {
					const e = this.parent;
					null !== e && (t(e), e.traverseAncestors(t));
				},
				updateMatrix: function () {
					this.matrix.compose(this.position, this.quaternion, this.scale), (this.matrixWorldNeedsUpdate = !0);
				},
				updateMatrixWorld: function (t) {
					this.matrixAutoUpdate && this.updateMatrix(),
						(this.matrixWorldNeedsUpdate || t) &&
							(null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), (this.matrixWorldNeedsUpdate = !1), (t = !0));
					const e = this.children;
					for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
				},
				updateWorldMatrix: function (t, e) {
					const n = this.parent;
					if (
						(!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
						this.matrixAutoUpdate && this.updateMatrix(),
						null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
						!0 === e)
					) {
						const t = this.children;
						for (let e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0);
					}
				},
				toJSON: function (t) {
					const e = void 0 === t || 'string' == typeof t,
						n = {};
					e &&
						((t = {
							geometries: {},
							materials: {},
							textures: {},
							images: {},
							shapes: {},
						}),
						(n.metadata = {
							version: 4.5,
							type: 'Object',
							generator: 'Object3D.toJSON',
						}));
					const i = {};
					function r(e, n) {
						return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
					}
					if (
						((i.uuid = this.uuid),
						(i.type = this.type),
						'' !== this.name && (i.name = this.name),
						!0 === this.castShadow && (i.castShadow = !0),
						!0 === this.receiveShadow && (i.receiveShadow = !0),
						!1 === this.visible && (i.visible = !1),
						!1 === this.frustumCulled && (i.frustumCulled = !1),
						0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
						'{}' !== JSON.stringify(this.userData) && (i.userData = this.userData),
						(i.layers = this.layers.mask),
						(i.matrix = this.matrix.toArray()),
						!1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
						this.isInstancedMesh && ((i.type = 'InstancedMesh'), (i.count = this.count), (i.instanceMatrix = this.instanceMatrix.toJSON())),
						this.isMesh || this.isLine || this.isPoints)
					) {
						i.geometry = r(t.geometries, this.geometry);
						const e = this.geometry.parameters;
						if (void 0 !== e && void 0 !== e.shapes) {
							const n = e.shapes;
							if (Array.isArray(n))
								for (let e = 0, i = n.length; e < i; e++) {
									const i = n[e];
									r(t.shapes, i);
								}
							else r(t.shapes, n);
						}
					}
					if (void 0 !== this.material)
						if (Array.isArray(this.material)) {
							const e = [];
							for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
							i.material = e;
						} else i.material = r(t.materials, this.material);
					if (this.children.length > 0) {
						i.children = [];
						for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object);
					}
					if (e) {
						const e = o(t.geometries),
							i = o(t.materials),
							r = o(t.textures),
							s = o(t.images),
							a = o(t.shapes);
						e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s), a.length > 0 && (n.shapes = a);
					}
					return (n.object = i), n;
					function o(t) {
						const e = [];
						for (const n in t) {
							const i = t[n];
							delete i.metadata, e.push(i);
						}
						return e;
					}
				},
				clone: function (t) {
					return new this.constructor().copy(this, t);
				},
				copy: function (t, e) {
					if (
						(void 0 === e && (e = !0),
						(this.name = t.name),
						this.up.copy(t.up),
						this.position.copy(t.position),
						(this.rotation.order = t.rotation.order),
						this.quaternion.copy(t.quaternion),
						this.scale.copy(t.scale),
						this.matrix.copy(t.matrix),
						this.matrixWorld.copy(t.matrixWorld),
						(this.matrixAutoUpdate = t.matrixAutoUpdate),
						(this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
						(this.layers.mask = t.layers.mask),
						(this.visible = t.visible),
						(this.castShadow = t.castShadow),
						(this.receiveShadow = t.receiveShadow),
						(this.frustumCulled = t.frustumCulled),
						(this.renderOrder = t.renderOrder),
						(this.userData = JSON.parse(JSON.stringify(t.userData))),
						!0 === e)
					)
						for (let e = 0; e < t.children.length; e++) {
							const n = t.children[e];
							this.add(n.clone());
						}
					return this;
				},
			}));
		const $r = new $i(),
			to = new $i(),
			eo = new ji();
		class no {
			constructor(t, e) {
				Object.defineProperty(this, 'isPlane', {
					value: !0,
				}),
					(this.normal = void 0 !== t ? t : new $i(1, 0, 0)),
					(this.constant = void 0 !== e ? e : 0);
			}
			set(t, e) {
				return this.normal.copy(t), (this.constant = e), this;
			}
			setComponents(t, e, n, i) {
				return this.normal.set(t, e, n), (this.constant = i), this;
			}
			setFromNormalAndCoplanarPoint(t, e) {
				return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
			}
			setFromCoplanarPoints(t, e, n) {
				const i = $r.subVectors(n, e).cross(to.subVectors(t, e)).normalize();
				return this.setFromNormalAndCoplanarPoint(i, t), this;
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return this.normal.copy(t.normal), (this.constant = t.constant), this;
			}
			normalize() {
				const t = 1 / this.normal.length();
				return this.normal.multiplyScalar(t), (this.constant *= t), this;
			}
			negate() {
				return (this.constant *= -1), this.normal.negate(), this;
			}
			distanceToPoint(t) {
				return this.normal.dot(t) + this.constant;
			}
			distanceToSphere(t) {
				return this.distanceToPoint(t.center) - t.radius;
			}
			projectPoint(t, e) {
				return void 0 === e && (console.warn('THREE.Plane: .projectPoint() target is now required'), (e = new $i())), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
			}
			intersectLine(t, e) {
				void 0 === e && (console.warn('THREE.Plane: .intersectLine() target is now required'), (e = new $i()));
				const n = t.delta($r),
					i = this.normal.dot(n);
				if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
				const r = -(t.start.dot(this.normal) + this.constant) / i;
				return r < 0 || r > 1 ? void 0 : e.copy(n).multiplyScalar(r).add(t.start);
			}
			intersectsLine(t) {
				const e = this.distanceToPoint(t.start),
					n = this.distanceToPoint(t.end);
				return (e < 0 && n > 0) || (n < 0 && e > 0);
			}
			intersectsBox(t) {
				return t.intersectsPlane(this);
			}
			intersectsSphere(t) {
				return t.intersectsPlane(this);
			}
			coplanarPoint(t) {
				return void 0 === t && (console.warn('THREE.Plane: .coplanarPoint() target is now required'), (t = new $i())), t.copy(this.normal).multiplyScalar(-this.constant);
			}
			applyMatrix4(t, e) {
				const n = e || eo.getNormalMatrix(t),
					i = this.coplanarPoint($r).applyMatrix4(t),
					r = this.normal.applyMatrix3(n).normalize();
				return (this.constant = -i.dot(r)), this;
			}
			translate(t) {
				return (this.constant -= t.dot(this.normal)), this;
			}
			equals(t) {
				return t.normal.equals(this.normal) && t.constant === this.constant;
			}
		}
		const io = new $i(),
			ro = new $i(),
			oo = new $i(),
			so = new $i(),
			ao = new $i(),
			lo = new $i(),
			co = new $i(),
			ho = new $i(),
			uo = new $i(),
			po = new $i();
		class fo {
			constructor(t, e, n) {
				(this.a = void 0 !== t ? t : new $i()), (this.b = void 0 !== e ? e : new $i()), (this.c = void 0 !== n ? n : new $i());
			}
			static getNormal(t, e, n, i) {
				void 0 === i && (console.warn('THREE.Triangle: .getNormal() target is now required'), (i = new $i())), i.subVectors(n, e), io.subVectors(t, e), i.cross(io);
				const r = i.lengthSq();
				return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
			}
			static getBarycoord(t, e, n, i, r) {
				io.subVectors(i, e), ro.subVectors(n, e), oo.subVectors(t, e);
				const o = io.dot(io),
					s = io.dot(ro),
					a = io.dot(oo),
					l = ro.dot(ro),
					c = ro.dot(oo),
					h = o * l - s * s;
				if ((void 0 === r && (console.warn('THREE.Triangle: .getBarycoord() target is now required'), (r = new $i())), 0 === h)) return r.set(-2, -1, -1);
				const u = 1 / h,
					d = (l * a - s * c) * u,
					p = (o * c - s * a) * u;
				return r.set(1 - d - p, p, d);
			}
			static containsPoint(t, e, n, i) {
				return this.getBarycoord(t, e, n, i, so), so.x >= 0 && so.y >= 0 && so.x + so.y <= 1;
			}
			static getUV(t, e, n, i, r, o, s, a) {
				return this.getBarycoord(t, e, n, i, so), a.set(0, 0), a.addScaledVector(r, so.x), a.addScaledVector(o, so.y), a.addScaledVector(s, so.z), a;
			}
			static isFrontFacing(t, e, n, i) {
				return io.subVectors(n, e), ro.subVectors(t, e), io.cross(ro).dot(i) < 0;
			}
			set(t, e, n) {
				return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
			}
			setFromPointsAndIndices(t, e, n, i) {
				return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
			}
			getArea() {
				return io.subVectors(this.c, this.b), ro.subVectors(this.a, this.b), 0.5 * io.cross(ro).length();
			}
			getMidpoint(t) {
				return (
					void 0 === t && (console.warn('THREE.Triangle: .getMidpoint() target is now required'), (t = new $i())),
					t
						.addVectors(this.a, this.b)
						.add(this.c)
						.multiplyScalar(1 / 3)
				);
			}
			getNormal(t) {
				return fo.getNormal(this.a, this.b, this.c, t);
			}
			getPlane(t) {
				return void 0 === t && (console.warn('THREE.Triangle: .getPlane() target is now required'), (t = new no())), t.setFromCoplanarPoints(this.a, this.b, this.c);
			}
			getBarycoord(t, e) {
				return fo.getBarycoord(t, this.a, this.b, this.c, e);
			}
			getUV(t, e, n, i, r) {
				return fo.getUV(t, this.a, this.b, this.c, e, n, i, r);
			}
			containsPoint(t) {
				return fo.containsPoint(t, this.a, this.b, this.c);
			}
			isFrontFacing(t) {
				return fo.isFrontFacing(this.a, this.b, this.c, t);
			}
			intersectsBox(t) {
				return t.intersectsTriangle(this);
			}
			closestPointToPoint(t, e) {
				void 0 === e && (console.warn('THREE.Triangle: .closestPointToPoint() target is now required'), (e = new $i()));
				const n = this.a,
					i = this.b,
					r = this.c;
				let o, s;
				ao.subVectors(i, n), lo.subVectors(r, n), ho.subVectors(t, n);
				const a = ao.dot(ho),
					l = lo.dot(ho);
				if (a <= 0 && l <= 0) return e.copy(n);
				uo.subVectors(t, i);
				const c = ao.dot(uo),
					h = lo.dot(uo);
				if (c >= 0 && h <= c) return e.copy(i);
				const u = a * h - c * l;
				if (u <= 0 && a >= 0 && c <= 0) return (o = a / (a - c)), e.copy(n).addScaledVector(ao, o);
				po.subVectors(t, r);
				const d = ao.dot(po),
					p = lo.dot(po);
				if (p >= 0 && d <= p) return e.copy(r);
				const f = d * l - a * p;
				if (f <= 0 && l >= 0 && p <= 0) return (s = l / (l - p)), e.copy(n).addScaledVector(lo, s);
				const m = c * p - d * h;
				if (m <= 0 && h - c >= 0 && d - p >= 0) return co.subVectors(r, i), (s = (h - c) / (h - c + (d - p))), e.copy(i).addScaledVector(co, s);
				const g = 1 / (m + f + u);
				return (o = f * g), (s = u * g), e.copy(n).addScaledVector(ao, o).addScaledVector(lo, s);
			}
			equals(t) {
				return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
			}
		}
		const mo = {
				aliceblue: 15792383,
				antiquewhite: 16444375,
				aqua: 65535,
				aquamarine: 8388564,
				azure: 15794175,
				beige: 16119260,
				bisque: 16770244,
				black: 0,
				blanchedalmond: 16772045,
				blue: 255,
				blueviolet: 9055202,
				brown: 10824234,
				burlywood: 14596231,
				cadetblue: 6266528,
				chartreuse: 8388352,
				chocolate: 13789470,
				coral: 16744272,
				cornflowerblue: 6591981,
				cornsilk: 16775388,
				crimson: 14423100,
				cyan: 65535,
				darkblue: 139,
				darkcyan: 35723,
				darkgoldenrod: 12092939,
				darkgray: 11119017,
				darkgreen: 25600,
				darkgrey: 11119017,
				darkkhaki: 12433259,
				darkmagenta: 9109643,
				darkolivegreen: 5597999,
				darkorange: 16747520,
				darkorchid: 10040012,
				darkred: 9109504,
				darksalmon: 15308410,
				darkseagreen: 9419919,
				darkslateblue: 4734347,
				darkslategray: 3100495,
				darkslategrey: 3100495,
				darkturquoise: 52945,
				darkviolet: 9699539,
				deeppink: 16716947,
				deepskyblue: 49151,
				dimgray: 6908265,
				dimgrey: 6908265,
				dodgerblue: 2003199,
				firebrick: 11674146,
				floralwhite: 16775920,
				forestgreen: 2263842,
				fuchsia: 16711935,
				gainsboro: 14474460,
				ghostwhite: 16316671,
				gold: 16766720,
				goldenrod: 14329120,
				gray: 8421504,
				green: 32768,
				greenyellow: 11403055,
				grey: 8421504,
				honeydew: 15794160,
				hotpink: 16738740,
				indianred: 13458524,
				indigo: 4915330,
				ivory: 16777200,
				khaki: 15787660,
				lavender: 15132410,
				lavenderblush: 16773365,
				lawngreen: 8190976,
				lemonchiffon: 16775885,
				lightblue: 11393254,
				lightcoral: 15761536,
				lightcyan: 14745599,
				lightgoldenrodyellow: 16448210,
				lightgray: 13882323,
				lightgreen: 9498256,
				lightgrey: 13882323,
				lightpink: 16758465,
				lightsalmon: 16752762,
				lightseagreen: 2142890,
				lightskyblue: 8900346,
				lightslategray: 7833753,
				lightslategrey: 7833753,
				lightsteelblue: 11584734,
				lightyellow: 16777184,
				lime: 65280,
				limegreen: 3329330,
				linen: 16445670,
				magenta: 16711935,
				maroon: 8388608,
				mediumaquamarine: 6737322,
				mediumblue: 205,
				mediumorchid: 12211667,
				mediumpurple: 9662683,
				mediumseagreen: 3978097,
				mediumslateblue: 8087790,
				mediumspringgreen: 64154,
				mediumturquoise: 4772300,
				mediumvioletred: 13047173,
				midnightblue: 1644912,
				mintcream: 16121850,
				mistyrose: 16770273,
				moccasin: 16770229,
				navajowhite: 16768685,
				navy: 128,
				oldlace: 16643558,
				olive: 8421376,
				olivedrab: 7048739,
				orange: 16753920,
				orangered: 16729344,
				orchid: 14315734,
				palegoldenrod: 15657130,
				palegreen: 10025880,
				paleturquoise: 11529966,
				palevioletred: 14381203,
				papayawhip: 16773077,
				peachpuff: 16767673,
				peru: 13468991,
				pink: 16761035,
				plum: 14524637,
				powderblue: 11591910,
				purple: 8388736,
				rebeccapurple: 6697881,
				red: 16711680,
				rosybrown: 12357519,
				royalblue: 4286945,
				saddlebrown: 9127187,
				salmon: 16416882,
				sandybrown: 16032864,
				seagreen: 3050327,
				seashell: 16774638,
				sienna: 10506797,
				silver: 12632256,
				skyblue: 8900331,
				slateblue: 6970061,
				slategray: 7372944,
				slategrey: 7372944,
				snow: 16775930,
				springgreen: 65407,
				steelblue: 4620980,
				tan: 13808780,
				teal: 32896,
				thistle: 14204888,
				tomato: 16737095,
				turquoise: 4251856,
				violet: 15631086,
				wheat: 16113331,
				white: 16777215,
				whitesmoke: 16119285,
				yellow: 16776960,
				yellowgreen: 10145074,
			},
			go = {
				h: 0,
				s: 0,
				l: 0,
			},
			vo = {
				h: 0,
				s: 0,
				l: 0,
			};
		function yo(t, e, n) {
			return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
		}
		function xo(t) {
			return t < 0.04045 ? 0.0773993808 * t : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
		}
		function _o(t) {
			return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
		}
		class bo {
			constructor(t, e, n) {
				return (
					Object.defineProperty(this, 'isColor', {
						value: !0,
					}),
					void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
				);
			}
			set(t) {
				return t && t.isColor ? this.copy(t) : 'number' == typeof t ? this.setHex(t) : 'string' == typeof t && this.setStyle(t), this;
			}
			setScalar(t) {
				return (this.r = t), (this.g = t), (this.b = t), this;
			}
			setHex(t) {
				return (t = Math.floor(t)), (this.r = ((t >> 16) & 255) / 255), (this.g = ((t >> 8) & 255) / 255), (this.b = (255 & t) / 255), this;
			}
			setRGB(t, e, n) {
				return (this.r = t), (this.g = e), (this.b = n), this;
			}
			setHSL(t, e, n) {
				if (((t = Gi.euclideanModulo(t, 1)), (e = Gi.clamp(e, 0, 1)), (n = Gi.clamp(n, 0, 1)), 0 === e)) this.r = this.g = this.b = n;
				else {
					const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
						r = 2 * n - i;
					(this.r = yo(r, i, t + 1 / 3)), (this.g = yo(r, i, t)), (this.b = yo(r, i, t - 1 / 3));
				}
				return this;
			}
			setStyle(t) {
				function e(e) {
					void 0 !== e && parseFloat(e) < 1 && console.warn('THREE.Color: Alpha component of ' + t + ' will be ignored.');
				}
				let n;
				if ((n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t))) {
					let t;
					const i = n[1],
						r = n[2];
					switch (i) {
						case 'rgb':
						case 'rgba':
							if ((t = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r)))
								return (this.r = Math.min(255, parseInt(t[1], 10)) / 255), (this.g = Math.min(255, parseInt(t[2], 10)) / 255), (this.b = Math.min(255, parseInt(t[3], 10)) / 255), e(t[5]), this;
							if ((t = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r)))
								return (this.r = Math.min(100, parseInt(t[1], 10)) / 100), (this.g = Math.min(100, parseInt(t[2], 10)) / 100), (this.b = Math.min(100, parseInt(t[3], 10)) / 100), e(t[5]), this;
							break;
						case 'hsl':
						case 'hsla':
							if ((t = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r))) {
								const n = parseFloat(t[1]) / 360,
									i = parseInt(t[2], 10) / 100,
									r = parseInt(t[3], 10) / 100;
								return e(t[5]), this.setHSL(n, i, r);
							}
					}
				} else if ((n = /^\#([A-Fa-f0-9]+)$/.exec(t))) {
					const t = n[1],
						e = t.length;
					if (3 === e)
						return (this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255), (this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255), (this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255), this;
					if (6 === e)
						return (this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255), (this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255), (this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255), this;
				}
				return t && t.length > 0 ? this.setColorName(t) : this;
			}
			setColorName(t) {
				const e = mo[t];
				return void 0 !== e ? this.setHex(e) : console.warn('THREE.Color: Unknown color ' + t), this;
			}
			clone() {
				return new this.constructor(this.r, this.g, this.b);
			}
			copy(t) {
				return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
			}
			copyGammaToLinear(t, e) {
				return void 0 === e && (e = 2), (this.r = Math.pow(t.r, e)), (this.g = Math.pow(t.g, e)), (this.b = Math.pow(t.b, e)), this;
			}
			copyLinearToGamma(t, e) {
				void 0 === e && (e = 2);
				const n = e > 0 ? 1 / e : 1;
				return (this.r = Math.pow(t.r, n)), (this.g = Math.pow(t.g, n)), (this.b = Math.pow(t.b, n)), this;
			}
			convertGammaToLinear(t) {
				return this.copyGammaToLinear(this, t), this;
			}
			convertLinearToGamma(t) {
				return this.copyLinearToGamma(this, t), this;
			}
			copySRGBToLinear(t) {
				return (this.r = xo(t.r)), (this.g = xo(t.g)), (this.b = xo(t.b)), this;
			}
			copyLinearToSRGB(t) {
				return (this.r = _o(t.r)), (this.g = _o(t.g)), (this.b = _o(t.b)), this;
			}
			convertSRGBToLinear() {
				return this.copySRGBToLinear(this), this;
			}
			convertLinearToSRGB() {
				return this.copyLinearToSRGB(this), this;
			}
			getHex() {
				return ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0);
			}
			getHexString() {
				return ('000000' + this.getHex().toString(16)).slice(-6);
			}
			getHSL(t) {
				void 0 === t &&
					(console.warn('THREE.Color: .getHSL() target is now required'),
					(t = {
						h: 0,
						s: 0,
						l: 0,
					}));
				const e = this.r,
					n = this.g,
					i = this.b,
					r = Math.max(e, n, i),
					o = Math.min(e, n, i);
				let s, a;
				const l = (o + r) / 2;
				if (o === r) (s = 0), (a = 0);
				else {
					const t = r - o;
					switch (((a = l <= 0.5 ? t / (r + o) : t / (2 - r - o)), r)) {
						case e:
							s = (n - i) / t + (n < i ? 6 : 0);
							break;
						case n:
							s = (i - e) / t + 2;
							break;
						case i:
							s = (e - n) / t + 4;
					}
					s /= 6;
				}
				return (t.h = s), (t.s = a), (t.l = l), t;
			}
			getStyle() {
				return 'rgb(' + ((255 * this.r) | 0) + ',' + ((255 * this.g) | 0) + ',' + ((255 * this.b) | 0) + ')';
			}
			offsetHSL(t, e, n) {
				return this.getHSL(go), (go.h += t), (go.s += e), (go.l += n), this.setHSL(go.h, go.s, go.l), this;
			}
			add(t) {
				return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
			}
			addColors(t, e) {
				return (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this;
			}
			addScalar(t) {
				return (this.r += t), (this.g += t), (this.b += t), this;
			}
			sub(t) {
				return (this.r = Math.max(0, this.r - t.r)), (this.g = Math.max(0, this.g - t.g)), (this.b = Math.max(0, this.b - t.b)), this;
			}
			multiply(t) {
				return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
			}
			multiplyScalar(t) {
				return (this.r *= t), (this.g *= t), (this.b *= t), this;
			}
			lerp(t, e) {
				return (this.r += (t.r - this.r) * e), (this.g += (t.g - this.g) * e), (this.b += (t.b - this.b) * e), this;
			}
			lerpHSL(t, e) {
				this.getHSL(go), t.getHSL(vo);
				const n = Gi.lerp(go.h, vo.h, e),
					i = Gi.lerp(go.s, vo.s, e),
					r = Gi.lerp(go.l, vo.l, e);
				return this.setHSL(n, i, r), this;
			}
			equals(t) {
				return t.r === this.r && t.g === this.g && t.b === this.b;
			}
			fromArray(t, e) {
				return void 0 === e && (e = 0), (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
			}
			toArray(t, e) {
				return void 0 === t && (t = []), void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
			}
			fromBufferAttribute(t, e) {
				return (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), !0 === t.normalized && ((this.r /= 255), (this.g /= 255), (this.b /= 255)), this;
			}
			toJSON() {
				return this.getHex();
			}
		}
		(bo.NAMES = mo), (bo.prototype.r = 1), (bo.prototype.g = 1), (bo.prototype.b = 1);
		class wo {
			constructor(t, e, n, i, r, o) {
				(this.a = t),
					(this.b = e),
					(this.c = n),
					(this.normal = i && i.isVector3 ? i : new $i()),
					(this.vertexNormals = Array.isArray(i) ? i : []),
					(this.color = r && r.isColor ? r : new bo()),
					(this.vertexColors = Array.isArray(r) ? r : []),
					(this.materialIndex = void 0 !== o ? o : 0);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				(this.a = t.a), (this.b = t.b), (this.c = t.c), this.normal.copy(t.normal), this.color.copy(t.color), (this.materialIndex = t.materialIndex);
				for (let e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
				for (let e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
				return this;
			}
		}
		let Mo = 0;
		function So() {
			Object.defineProperty(this, 'id', {
				value: Mo++,
			}),
				(this.uuid = Gi.generateUUID()),
				(this.name = ''),
				(this.type = 'Material'),
				(this.fog = !0),
				(this.blending = 1),
				(this.side = 0),
				(this.flatShading = !1),
				(this.vertexColors = !1),
				(this.opacity = 1),
				(this.transparent = !1),
				(this.blendSrc = 204),
				(this.blendDst = 205),
				(this.blendEquation = 100),
				(this.blendSrcAlpha = null),
				(this.blendDstAlpha = null),
				(this.blendEquationAlpha = null),
				(this.depthFunc = 3),
				(this.depthTest = !0),
				(this.depthWrite = !0),
				(this.stencilWriteMask = 255),
				(this.stencilFunc = 519),
				(this.stencilRef = 0),
				(this.stencilFuncMask = 255),
				(this.stencilFail = 7680),
				(this.stencilZFail = 7680),
				(this.stencilZPass = 7680),
				(this.stencilWrite = !1),
				(this.clippingPlanes = null),
				(this.clipIntersection = !1),
				(this.clipShadows = !1),
				(this.shadowSide = null),
				(this.colorWrite = !0),
				(this.precision = null),
				(this.polygonOffset = !1),
				(this.polygonOffsetFactor = 0),
				(this.polygonOffsetUnits = 0),
				(this.dithering = !1),
				(this.alphaTest = 0),
				(this.premultipliedAlpha = !1),
				(this.visible = !0),
				(this.toneMapped = !0),
				(this.userData = {}),
				(this.version = 0);
		}
		function To(t) {
			So.call(this),
				(this.type = 'MeshBasicMaterial'),
				(this.color = new bo(16777215)),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = 'round'),
				(this.wireframeLinejoin = 'round'),
				(this.skinning = !1),
				(this.morphTargets = !1),
				this.setValues(t);
		}
		(So.prototype = Object.assign(Object.create(Fi.prototype), {
			constructor: So,
			isMaterial: !0,
			onBeforeCompile: function () {},
			customProgramCacheKey: function () {
				return this.onBeforeCompile.toString();
			},
			setValues: function (t) {
				if (void 0 !== t)
					for (const e in t) {
						const n = t[e];
						if (void 0 === n) {
							console.warn("THREE.Material: '" + e + "' parameter is undefined.");
							continue;
						}
						if ('shading' === e) {
							console.warn('THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.'), (this.flatShading = 1 === n);
							continue;
						}
						const i = this[e];
						void 0 !== i
							? i && i.isColor
								? i.set(n)
								: i && i.isVector3 && n && n.isVector3
								? i.copy(n)
								: (this[e] = n)
							: console.warn('THREE.' + this.type + ": '" + e + "' is not a property of this material.");
					}
			},
			toJSON: function (t) {
				const e = void 0 === t || 'string' == typeof t;
				e &&
					(t = {
						textures: {},
						images: {},
					});
				const n = {
					metadata: {
						version: 4.5,
						type: 'Material',
						generator: 'Material.toJSON',
					},
				};
				function i(t) {
					const e = [];
					for (const n in t) {
						const i = t[n];
						delete i.metadata, e.push(i);
					}
					return e;
				}
				if (
					((n.uuid = this.uuid),
					(n.type = this.type),
					'' !== this.name && (n.name = this.name),
					this.color && this.color.isColor && (n.color = this.color.getHex()),
					void 0 !== this.roughness && (n.roughness = this.roughness),
					void 0 !== this.metalness && (n.metalness = this.metalness),
					this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
					this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
					this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
					this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
					void 0 !== this.shininess && (n.shininess = this.shininess),
					void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
					void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
					this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
					this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
					this.clearcoatNormalMap &&
						this.clearcoatNormalMap.isTexture &&
						((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid), (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
					this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
					this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
					this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
					this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid),
					this.aoMap && this.aoMap.isTexture && ((n.aoMap = this.aoMap.toJSON(t).uuid), (n.aoMapIntensity = this.aoMapIntensity)),
					this.bumpMap && this.bumpMap.isTexture && ((n.bumpMap = this.bumpMap.toJSON(t).uuid), (n.bumpScale = this.bumpScale)),
					this.normalMap && this.normalMap.isTexture && ((n.normalMap = this.normalMap.toJSON(t).uuid), (n.normalMapType = this.normalMapType), (n.normalScale = this.normalScale.toArray())),
					this.displacementMap &&
						this.displacementMap.isTexture &&
						((n.displacementMap = this.displacementMap.toJSON(t).uuid), (n.displacementScale = this.displacementScale), (n.displacementBias = this.displacementBias)),
					this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
					this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
					this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
					this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
					this.envMap &&
						this.envMap.isTexture &&
						((n.envMap = this.envMap.toJSON(t).uuid),
						(n.reflectivity = this.reflectivity),
						(n.refractionRatio = this.refractionRatio),
						void 0 !== this.combine && (n.combine = this.combine),
						void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)),
					this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
					void 0 !== this.size && (n.size = this.size),
					void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
					1 !== this.blending && (n.blending = this.blending),
					!0 === this.flatShading && (n.flatShading = this.flatShading),
					0 !== this.side && (n.side = this.side),
					this.vertexColors && (n.vertexColors = !0),
					this.opacity < 1 && (n.opacity = this.opacity),
					!0 === this.transparent && (n.transparent = this.transparent),
					(n.depthFunc = this.depthFunc),
					(n.depthTest = this.depthTest),
					(n.depthWrite = this.depthWrite),
					(n.stencilWrite = this.stencilWrite),
					(n.stencilWriteMask = this.stencilWriteMask),
					(n.stencilFunc = this.stencilFunc),
					(n.stencilRef = this.stencilRef),
					(n.stencilFuncMask = this.stencilFuncMask),
					(n.stencilFail = this.stencilFail),
					(n.stencilZFail = this.stencilZFail),
					(n.stencilZPass = this.stencilZPass),
					this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
					!0 === this.polygonOffset && (n.polygonOffset = !0),
					0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
					0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
					this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
					void 0 !== this.dashSize && (n.dashSize = this.dashSize),
					void 0 !== this.gapSize && (n.gapSize = this.gapSize),
					void 0 !== this.scale && (n.scale = this.scale),
					!0 === this.dithering && (n.dithering = !0),
					this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
					!0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
					!0 === this.wireframe && (n.wireframe = this.wireframe),
					this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
					'round' !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
					'round' !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
					!0 === this.morphTargets && (n.morphTargets = !0),
					!0 === this.morphNormals && (n.morphNormals = !0),
					!0 === this.skinning && (n.skinning = !0),
					!1 === this.visible && (n.visible = !1),
					!1 === this.toneMapped && (n.toneMapped = !1),
					'{}' !== JSON.stringify(this.userData) && (n.userData = this.userData),
					e)
				) {
					const e = i(t.textures),
						r = i(t.images);
					e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
				}
				return n;
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				(this.name = t.name),
					(this.fog = t.fog),
					(this.blending = t.blending),
					(this.side = t.side),
					(this.flatShading = t.flatShading),
					(this.vertexColors = t.vertexColors),
					(this.opacity = t.opacity),
					(this.transparent = t.transparent),
					(this.blendSrc = t.blendSrc),
					(this.blendDst = t.blendDst),
					(this.blendEquation = t.blendEquation),
					(this.blendSrcAlpha = t.blendSrcAlpha),
					(this.blendDstAlpha = t.blendDstAlpha),
					(this.blendEquationAlpha = t.blendEquationAlpha),
					(this.depthFunc = t.depthFunc),
					(this.depthTest = t.depthTest),
					(this.depthWrite = t.depthWrite),
					(this.stencilWriteMask = t.stencilWriteMask),
					(this.stencilFunc = t.stencilFunc),
					(this.stencilRef = t.stencilRef),
					(this.stencilFuncMask = t.stencilFuncMask),
					(this.stencilFail = t.stencilFail),
					(this.stencilZFail = t.stencilZFail),
					(this.stencilZPass = t.stencilZPass),
					(this.stencilWrite = t.stencilWrite);
				const e = t.clippingPlanes;
				let n = null;
				if (null !== e) {
					const t = e.length;
					n = new Array(t);
					for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
				}
				return (
					(this.clippingPlanes = n),
					(this.clipIntersection = t.clipIntersection),
					(this.clipShadows = t.clipShadows),
					(this.shadowSide = t.shadowSide),
					(this.colorWrite = t.colorWrite),
					(this.precision = t.precision),
					(this.polygonOffset = t.polygonOffset),
					(this.polygonOffsetFactor = t.polygonOffsetFactor),
					(this.polygonOffsetUnits = t.polygonOffsetUnits),
					(this.dithering = t.dithering),
					(this.alphaTest = t.alphaTest),
					(this.premultipliedAlpha = t.premultipliedAlpha),
					(this.visible = t.visible),
					(this.toneMapped = t.toneMapped),
					(this.userData = JSON.parse(JSON.stringify(t.userData))),
					this
				);
			},
			dispose: function () {
				this.dispatchEvent({
					type: 'dispose',
				});
			},
		})),
			Object.defineProperty(So.prototype, 'needsUpdate', {
				set: function (t) {
					!0 === t && this.version++;
				},
			}),
			(To.prototype = Object.create(So.prototype)),
			(To.prototype.constructor = To),
			(To.prototype.isMeshBasicMaterial = !0),
			(To.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					this
				);
			});
		const Eo = new $i(),
			Ao = new Vi();
		function Lo(t, e, n) {
			if (Array.isArray(t)) throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');
			(this.name = ''),
				(this.array = t),
				(this.itemSize = e),
				(this.count = void 0 !== t ? t.length / e : 0),
				(this.normalized = !0 === n),
				(this.usage = 35044),
				(this.updateRange = {
					offset: 0,
					count: -1,
				}),
				(this.version = 0);
		}
		function Ro(t, e, n) {
			Lo.call(this, new Int8Array(t), e, n);
		}
		function Po(t, e, n) {
			Lo.call(this, new Uint8Array(t), e, n);
		}
		function Co(t, e, n) {
			Lo.call(this, new Uint8ClampedArray(t), e, n);
		}
		function Oo(t, e, n) {
			Lo.call(this, new Int16Array(t), e, n);
		}
		function Do(t, e, n) {
			Lo.call(this, new Uint16Array(t), e, n);
		}
		function Io(t, e, n) {
			Lo.call(this, new Int32Array(t), e, n);
		}
		function No(t, e, n) {
			Lo.call(this, new Uint32Array(t), e, n);
		}
		function zo(t, e, n) {
			Lo.call(this, new Float32Array(t), e, n);
		}
		function Bo(t, e, n) {
			Lo.call(this, new Float64Array(t), e, n);
		}
		Object.defineProperty(Lo.prototype, 'needsUpdate', {
			set: function (t) {
				!0 === t && this.version++;
			},
		}),
			Object.assign(Lo.prototype, {
				isBufferAttribute: !0,
				onUploadCallback: function () {},
				setUsage: function (t) {
					return (this.usage = t), this;
				},
				copy: function (t) {
					return (
						(this.name = t.name), (this.array = new t.array.constructor(t.array)), (this.itemSize = t.itemSize), (this.count = t.count), (this.normalized = t.normalized), (this.usage = t.usage), this
					);
				},
				copyAt: function (t, e, n) {
					(t *= this.itemSize), (n *= e.itemSize);
					for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
					return this;
				},
				copyArray: function (t) {
					return this.array.set(t), this;
				},
				copyColorsArray: function (t) {
					const e = this.array;
					let n = 0;
					for (let i = 0, r = t.length; i < r; i++) {
						let r = t[i];
						void 0 === r && (console.warn('THREE.BufferAttribute.copyColorsArray(): color is undefined', i), (r = new bo())), (e[n++] = r.r), (e[n++] = r.g), (e[n++] = r.b);
					}
					return this;
				},
				copyVector2sArray: function (t) {
					const e = this.array;
					let n = 0;
					for (let i = 0, r = t.length; i < r; i++) {
						let r = t[i];
						void 0 === r && (console.warn('THREE.BufferAttribute.copyVector2sArray(): vector is undefined', i), (r = new Vi())), (e[n++] = r.x), (e[n++] = r.y);
					}
					return this;
				},
				copyVector3sArray: function (t) {
					const e = this.array;
					let n = 0;
					for (let i = 0, r = t.length; i < r; i++) {
						let r = t[i];
						void 0 === r && (console.warn('THREE.BufferAttribute.copyVector3sArray(): vector is undefined', i), (r = new $i())), (e[n++] = r.x), (e[n++] = r.y), (e[n++] = r.z);
					}
					return this;
				},
				copyVector4sArray: function (t) {
					const e = this.array;
					let n = 0;
					for (let i = 0, r = t.length; i < r; i++) {
						let r = t[i];
						void 0 === r && (console.warn('THREE.BufferAttribute.copyVector4sArray(): vector is undefined', i), (r = new Zi())), (e[n++] = r.x), (e[n++] = r.y), (e[n++] = r.z), (e[n++] = r.w);
					}
					return this;
				},
				applyMatrix3: function (t) {
					if (2 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) Ao.fromBufferAttribute(this, e), Ao.applyMatrix3(t), this.setXY(e, Ao.x, Ao.y);
					else if (3 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) Eo.fromBufferAttribute(this, e), Eo.applyMatrix3(t), this.setXYZ(e, Eo.x, Eo.y, Eo.z);
					return this;
				},
				applyMatrix4: function (t) {
					for (let e = 0, n = this.count; e < n; e++) (Eo.x = this.getX(e)), (Eo.y = this.getY(e)), (Eo.z = this.getZ(e)), Eo.applyMatrix4(t), this.setXYZ(e, Eo.x, Eo.y, Eo.z);
					return this;
				},
				applyNormalMatrix: function (t) {
					for (let e = 0, n = this.count; e < n; e++) (Eo.x = this.getX(e)), (Eo.y = this.getY(e)), (Eo.z = this.getZ(e)), Eo.applyNormalMatrix(t), this.setXYZ(e, Eo.x, Eo.y, Eo.z);
					return this;
				},
				transformDirection: function (t) {
					for (let e = 0, n = this.count; e < n; e++) (Eo.x = this.getX(e)), (Eo.y = this.getY(e)), (Eo.z = this.getZ(e)), Eo.transformDirection(t), this.setXYZ(e, Eo.x, Eo.y, Eo.z);
					return this;
				},
				set: function (t, e) {
					return void 0 === e && (e = 0), this.array.set(t, e), this;
				},
				getX: function (t) {
					return this.array[t * this.itemSize];
				},
				setX: function (t, e) {
					return (this.array[t * this.itemSize] = e), this;
				},
				getY: function (t) {
					return this.array[t * this.itemSize + 1];
				},
				setY: function (t, e) {
					return (this.array[t * this.itemSize + 1] = e), this;
				},
				getZ: function (t) {
					return this.array[t * this.itemSize + 2];
				},
				setZ: function (t, e) {
					return (this.array[t * this.itemSize + 2] = e), this;
				},
				getW: function (t) {
					return this.array[t * this.itemSize + 3];
				},
				setW: function (t, e) {
					return (this.array[t * this.itemSize + 3] = e), this;
				},
				setXY: function (t, e, n) {
					return (t *= this.itemSize), (this.array[t + 0] = e), (this.array[t + 1] = n), this;
				},
				setXYZ: function (t, e, n, i) {
					return (t *= this.itemSize), (this.array[t + 0] = e), (this.array[t + 1] = n), (this.array[t + 2] = i), this;
				},
				setXYZW: function (t, e, n, i, r) {
					return (t *= this.itemSize), (this.array[t + 0] = e), (this.array[t + 1] = n), (this.array[t + 2] = i), (this.array[t + 3] = r), this;
				},
				onUpload: function (t) {
					return (this.onUploadCallback = t), this;
				},
				clone: function () {
					return new this.constructor(this.array, this.itemSize).copy(this);
				},
				toJSON: function () {
					return {
						itemSize: this.itemSize,
						type: this.array.constructor.name,
						array: Array.prototype.slice.call(this.array),
						normalized: this.normalized,
					};
				},
			}),
			(Ro.prototype = Object.create(Lo.prototype)),
			(Ro.prototype.constructor = Ro),
			(Po.prototype = Object.create(Lo.prototype)),
			(Po.prototype.constructor = Po),
			(Co.prototype = Object.create(Lo.prototype)),
			(Co.prototype.constructor = Co),
			(Oo.prototype = Object.create(Lo.prototype)),
			(Oo.prototype.constructor = Oo),
			(Do.prototype = Object.create(Lo.prototype)),
			(Do.prototype.constructor = Do),
			(Io.prototype = Object.create(Lo.prototype)),
			(Io.prototype.constructor = Io),
			(No.prototype = Object.create(Lo.prototype)),
			(No.prototype.constructor = No),
			(zo.prototype = Object.create(Lo.prototype)),
			(zo.prototype.constructor = zo),
			(Bo.prototype = Object.create(Lo.prototype)),
			(Bo.prototype.constructor = Bo);
		class ko {
			constructor() {
				(this.vertices = []),
					(this.normals = []),
					(this.colors = []),
					(this.uvs = []),
					(this.uvs2 = []),
					(this.groups = []),
					(this.morphTargets = {}),
					(this.skinWeights = []),
					(this.skinIndices = []),
					(this.boundingBox = null),
					(this.boundingSphere = null),
					(this.verticesNeedUpdate = !1),
					(this.normalsNeedUpdate = !1),
					(this.colorsNeedUpdate = !1),
					(this.uvsNeedUpdate = !1),
					(this.groupsNeedUpdate = !1);
			}
			computeGroups(t) {
				const e = [];
				let n,
					i,
					r = void 0;
				const o = t.faces;
				for (i = 0; i < o.length; i++) {
					const t = o[i];
					t.materialIndex !== r &&
						((r = t.materialIndex),
						void 0 !== n && ((n.count = 3 * i - n.start), e.push(n)),
						(n = {
							start: 3 * i,
							materialIndex: r,
						}));
				}
				void 0 !== n && ((n.count = 3 * i - n.start), e.push(n)), (this.groups = e);
			}
			fromGeometry(t) {
				const e = t.faces,
					n = t.vertices,
					i = t.faceVertexUvs,
					r = i[0] && i[0].length > 0,
					o = i[1] && i[1].length > 0,
					s = t.morphTargets,
					a = s.length;
				let l;
				if (a > 0) {
					l = [];
					for (let t = 0; t < a; t++)
						l[t] = {
							name: s[t].name,
							data: [],
						};
					this.morphTargets.position = l;
				}
				const c = t.morphNormals,
					h = c.length;
				let u;
				if (h > 0) {
					u = [];
					for (let t = 0; t < h; t++)
						u[t] = {
							name: c[t].name,
							data: [],
						};
					this.morphTargets.normal = u;
				}
				const d = t.skinIndices,
					p = t.skinWeights,
					f = d.length === n.length,
					m = p.length === n.length;
				n.length > 0 && 0 === e.length && console.error('THREE.DirectGeometry: Faceless geometries are not supported.');
				for (let t = 0; t < e.length; t++) {
					const g = e[t];
					this.vertices.push(n[g.a], n[g.b], n[g.c]);
					const v = g.vertexNormals;
					if (3 === v.length) this.normals.push(v[0], v[1], v[2]);
					else {
						const t = g.normal;
						this.normals.push(t, t, t);
					}
					const y = g.vertexColors;
					if (3 === y.length) this.colors.push(y[0], y[1], y[2]);
					else {
						const t = g.color;
						this.colors.push(t, t, t);
					}
					if (!0 === r) {
						const e = i[0][t];
						void 0 !== e ? this.uvs.push(e[0], e[1], e[2]) : (console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ', t), this.uvs.push(new Vi(), new Vi(), new Vi()));
					}
					if (!0 === o) {
						const e = i[1][t];
						void 0 !== e ? this.uvs2.push(e[0], e[1], e[2]) : (console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ', t), this.uvs2.push(new Vi(), new Vi(), new Vi()));
					}
					for (let t = 0; t < a; t++) {
						const e = s[t].vertices;
						l[t].data.push(e[g.a], e[g.b], e[g.c]);
					}
					for (let e = 0; e < h; e++) {
						const n = c[e].vertexNormals[t];
						u[e].data.push(n.a, n.b, n.c);
					}
					f && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), m && this.skinWeights.push(p[g.a], p[g.b], p[g.c]);
				}
				return (
					this.computeGroups(t),
					(this.verticesNeedUpdate = t.verticesNeedUpdate),
					(this.normalsNeedUpdate = t.normalsNeedUpdate),
					(this.colorsNeedUpdate = t.colorsNeedUpdate),
					(this.uvsNeedUpdate = t.uvsNeedUpdate),
					(this.groupsNeedUpdate = t.groupsNeedUpdate),
					null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
					null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
					this
				);
			}
		}
		function Fo(t) {
			if (0 === t.length) return -1 / 0;
			let e = t[0];
			for (let n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
			return e;
		}
		let Uo = 1;
		const Ho = new Ar(),
			Go = new Qr(),
			Vo = new $i(),
			jo = new nr(),
			Wo = new nr(),
			qo = new $i();
		function Xo() {
			Object.defineProperty(this, 'id', {
				value: (Uo += 2),
			}),
				(this.uuid = Gi.generateUUID()),
				(this.name = ''),
				(this.type = 'BufferGeometry'),
				(this.index = null),
				(this.attributes = {}),
				(this.morphAttributes = {}),
				(this.morphTargetsRelative = !1),
				(this.groups = []),
				(this.boundingBox = null),
				(this.boundingSphere = null),
				(this.drawRange = {
					start: 0,
					count: 1 / 0,
				}),
				(this.userData = {});
		}
		Xo.prototype = Object.assign(Object.create(Fi.prototype), {
			constructor: Xo,
			isBufferGeometry: !0,
			getIndex: function () {
				return this.index;
			},
			setIndex: function (t) {
				Array.isArray(t) ? (this.index = new (Fo(t) > 65535 ? No : Do)(t, 1)) : (this.index = t);
			},
			getAttribute: function (t) {
				return this.attributes[t];
			},
			setAttribute: function (t, e) {
				return (this.attributes[t] = e), this;
			},
			deleteAttribute: function (t) {
				return delete this.attributes[t], this;
			},
			addGroup: function (t, e, n) {
				this.groups.push({
					start: t,
					count: e,
					materialIndex: void 0 !== n ? n : 0,
				});
			},
			clearGroups: function () {
				this.groups = [];
			},
			setDrawRange: function (t, e) {
				(this.drawRange.start = t), (this.drawRange.count = e);
			},
			applyMatrix4: function (t) {
				const e = this.attributes.position;
				void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
				const n = this.attributes.normal;
				if (void 0 !== n) {
					const e = new ji().getNormalMatrix(t);
					n.applyNormalMatrix(e), (n.needsUpdate = !0);
				}
				const i = this.attributes.tangent;
				return (
					void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
				);
			},
			rotateX: function (t) {
				return Ho.makeRotationX(t), this.applyMatrix4(Ho), this;
			},
			rotateY: function (t) {
				return Ho.makeRotationY(t), this.applyMatrix4(Ho), this;
			},
			rotateZ: function (t) {
				return Ho.makeRotationZ(t), this.applyMatrix4(Ho), this;
			},
			translate: function (t, e, n) {
				return Ho.makeTranslation(t, e, n), this.applyMatrix4(Ho), this;
			},
			scale: function (t, e, n) {
				return Ho.makeScale(t, e, n), this.applyMatrix4(Ho), this;
			},
			lookAt: function (t) {
				return Go.lookAt(t), Go.updateMatrix(), this.applyMatrix4(Go.matrix), this;
			},
			center: function () {
				return this.computeBoundingBox(), this.boundingBox.getCenter(Vo).negate(), this.translate(Vo.x, Vo.y, Vo.z), this;
			},
			setFromObject: function (t) {
				const e = t.geometry;
				if (t.isPoints || t.isLine) {
					const t = new zo(3 * e.vertices.length, 3),
						n = new zo(3 * e.colors.length, 3);
					if (
						(this.setAttribute('position', t.copyVector3sArray(e.vertices)), this.setAttribute('color', n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length)
					) {
						const t = new zo(e.lineDistances.length, 1);
						this.setAttribute('lineDistance', t.copyArray(e.lineDistances));
					}
					null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone());
				} else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
				return this;
			},
			setFromPoints: function (t) {
				const e = [];
				for (let n = 0, i = t.length; n < i; n++) {
					const i = t[n];
					e.push(i.x, i.y, i.z || 0);
				}
				return this.setAttribute('position', new zo(e, 3)), this;
			},
			updateFromObject: function (t) {
				let e = t.geometry;
				if (t.isMesh) {
					let t = e.__directGeometry;
					if ((!0 === e.elementsNeedUpdate && ((t = void 0), (e.elementsNeedUpdate = !1)), void 0 === t)) return this.fromGeometry(e);
					(t.verticesNeedUpdate = e.verticesNeedUpdate),
						(t.normalsNeedUpdate = e.normalsNeedUpdate),
						(t.colorsNeedUpdate = e.colorsNeedUpdate),
						(t.uvsNeedUpdate = e.uvsNeedUpdate),
						(t.groupsNeedUpdate = e.groupsNeedUpdate),
						(e.verticesNeedUpdate = !1),
						(e.normalsNeedUpdate = !1),
						(e.colorsNeedUpdate = !1),
						(e.uvsNeedUpdate = !1),
						(e.groupsNeedUpdate = !1),
						(e = t);
				}
				if (!0 === e.verticesNeedUpdate) {
					const t = this.attributes.position;
					void 0 !== t && (t.copyVector3sArray(e.vertices), (t.needsUpdate = !0)), (e.verticesNeedUpdate = !1);
				}
				if (!0 === e.normalsNeedUpdate) {
					const t = this.attributes.normal;
					void 0 !== t && (t.copyVector3sArray(e.normals), (t.needsUpdate = !0)), (e.normalsNeedUpdate = !1);
				}
				if (!0 === e.colorsNeedUpdate) {
					const t = this.attributes.color;
					void 0 !== t && (t.copyColorsArray(e.colors), (t.needsUpdate = !0)), (e.colorsNeedUpdate = !1);
				}
				if (e.uvsNeedUpdate) {
					const t = this.attributes.uv;
					void 0 !== t && (t.copyVector2sArray(e.uvs), (t.needsUpdate = !0)), (e.uvsNeedUpdate = !1);
				}
				if (e.lineDistancesNeedUpdate) {
					const t = this.attributes.lineDistance;
					void 0 !== t && (t.copyArray(e.lineDistances), (t.needsUpdate = !0)), (e.lineDistancesNeedUpdate = !1);
				}
				return e.groupsNeedUpdate && (e.computeGroups(t.geometry), (this.groups = e.groups), (e.groupsNeedUpdate = !1)), this;
			},
			fromGeometry: function (t) {
				return (t.__directGeometry = new ko().fromGeometry(t)), this.fromDirectGeometry(t.__directGeometry);
			},
			fromDirectGeometry: function (t) {
				const e = new Float32Array(3 * t.vertices.length);
				if ((this.setAttribute('position', new Lo(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0)) {
					const e = new Float32Array(3 * t.normals.length);
					this.setAttribute('normal', new Lo(e, 3).copyVector3sArray(t.normals));
				}
				if (t.colors.length > 0) {
					const e = new Float32Array(3 * t.colors.length);
					this.setAttribute('color', new Lo(e, 3).copyColorsArray(t.colors));
				}
				if (t.uvs.length > 0) {
					const e = new Float32Array(2 * t.uvs.length);
					this.setAttribute('uv', new Lo(e, 2).copyVector2sArray(t.uvs));
				}
				if (t.uvs2.length > 0) {
					const e = new Float32Array(2 * t.uvs2.length);
					this.setAttribute('uv2', new Lo(e, 2).copyVector2sArray(t.uvs2));
				}
				this.groups = t.groups;
				for (const e in t.morphTargets) {
					const n = [],
						i = t.morphTargets[e];
					for (let t = 0, e = i.length; t < e; t++) {
						const e = i[t],
							r = new zo(3 * e.data.length, 3);
						(r.name = e.name), n.push(r.copyVector3sArray(e.data));
					}
					this.morphAttributes[e] = n;
				}
				if (t.skinIndices.length > 0) {
					const e = new zo(4 * t.skinIndices.length, 4);
					this.setAttribute('skinIndex', e.copyVector4sArray(t.skinIndices));
				}
				if (t.skinWeights.length > 0) {
					const e = new zo(4 * t.skinWeights.length, 4);
					this.setAttribute('skinWeight', e.copyVector4sArray(t.skinWeights));
				}
				return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this;
			},
			computeBoundingBox: function () {
				null === this.boundingBox && (this.boundingBox = new nr());
				const t = this.attributes.position,
					e = this.morphAttributes.position;
				if (t && t.isGLBufferAttribute)
					return (
						console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
						void this.boundingBox.set(new $i(-1 / 0, -1 / 0, -1 / 0), new $i(1 / 0, 1 / 0, 1 / 0))
					);
				if (void 0 !== t) {
					if ((this.boundingBox.setFromBufferAttribute(t), e))
						for (let t = 0, n = e.length; t < n; t++) {
							const n = e[t];
							jo.setFromBufferAttribute(n),
								this.morphTargetsRelative
									? (qo.addVectors(this.boundingBox.min, jo.min), this.boundingBox.expandByPoint(qo), qo.addVectors(this.boundingBox.max, jo.max), this.boundingBox.expandByPoint(qo))
									: (this.boundingBox.expandByPoint(jo.min), this.boundingBox.expandByPoint(jo.max));
						}
				} else this.boundingBox.makeEmpty();
				(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) &&
					console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
			},
			computeBoundingSphere: function () {
				null === this.boundingSphere && (this.boundingSphere = new yr());
				const t = this.attributes.position,
					e = this.morphAttributes.position;
				if (t && t.isGLBufferAttribute)
					return (
						console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
						void this.boundingSphere.set(new $i(), 1 / 0)
					);
				if (t) {
					const n = this.boundingSphere.center;
					if ((jo.setFromBufferAttribute(t), e))
						for (let t = 0, n = e.length; t < n; t++) {
							const n = e[t];
							Wo.setFromBufferAttribute(n),
								this.morphTargetsRelative
									? (qo.addVectors(jo.min, Wo.min), jo.expandByPoint(qo), qo.addVectors(jo.max, Wo.max), jo.expandByPoint(qo))
									: (jo.expandByPoint(Wo.min), jo.expandByPoint(Wo.max));
						}
					jo.getCenter(n);
					let i = 0;
					for (let e = 0, r = t.count; e < r; e++) qo.fromBufferAttribute(t, e), (i = Math.max(i, n.distanceToSquared(qo)));
					if (e)
						for (let r = 0, o = e.length; r < o; r++) {
							const o = e[r],
								s = this.morphTargetsRelative;
							for (let e = 0, r = o.count; e < r; e++) qo.fromBufferAttribute(o, e), s && (Vo.fromBufferAttribute(t, e), qo.add(Vo)), (i = Math.max(i, n.distanceToSquared(qo)));
						}
					(this.boundingSphere.radius = Math.sqrt(i)),
						isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
				}
			},
			computeFaceNormals: function () {},
			computeVertexNormals: function () {
				const t = this.index,
					e = this.getAttribute('position');
				if (void 0 !== e) {
					let n = this.getAttribute('normal');
					if (void 0 === n) (n = new Lo(new Float32Array(3 * e.count), 3)), this.setAttribute('normal', n);
					else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
					const i = new $i(),
						r = new $i(),
						o = new $i(),
						s = new $i(),
						a = new $i(),
						l = new $i(),
						c = new $i(),
						h = new $i();
					if (t)
						for (let u = 0, d = t.count; u < d; u += 3) {
							const d = t.getX(u + 0),
								p = t.getX(u + 1),
								f = t.getX(u + 2);
							i.fromBufferAttribute(e, d),
								r.fromBufferAttribute(e, p),
								o.fromBufferAttribute(e, f),
								c.subVectors(o, r),
								h.subVectors(i, r),
								c.cross(h),
								s.fromBufferAttribute(n, d),
								a.fromBufferAttribute(n, p),
								l.fromBufferAttribute(n, f),
								s.add(c),
								a.add(c),
								l.add(c),
								n.setXYZ(d, s.x, s.y, s.z),
								n.setXYZ(p, a.x, a.y, a.z),
								n.setXYZ(f, l.x, l.y, l.z);
						}
					else
						for (let t = 0, s = e.count; t < s; t += 3)
							i.fromBufferAttribute(e, t + 0),
								r.fromBufferAttribute(e, t + 1),
								o.fromBufferAttribute(e, t + 2),
								c.subVectors(o, r),
								h.subVectors(i, r),
								c.cross(h),
								n.setXYZ(t + 0, c.x, c.y, c.z),
								n.setXYZ(t + 1, c.x, c.y, c.z),
								n.setXYZ(t + 2, c.x, c.y, c.z);
					this.normalizeNormals(), (n.needsUpdate = !0);
				}
			},
			merge: function (t, e) {
				if (!t || !t.isBufferGeometry) return void console.error('THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.', t);
				void 0 === e &&
					((e = 0), console.warn('THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'));
				const n = this.attributes;
				for (const i in n) {
					if (void 0 === t.attributes[i]) continue;
					const r = n[i].array,
						o = t.attributes[i],
						s = o.array,
						a = o.itemSize * e,
						l = Math.min(s.length, r.length - a);
					for (let t = 0, e = a; t < l; t++, e++) r[e] = s[t];
				}
				return this;
			},
			normalizeNormals: function () {
				const t = this.attributes.normal;
				for (let e = 0, n = t.count; e < n; e++) qo.fromBufferAttribute(t, e), qo.normalize(), t.setXYZ(e, qo.x, qo.y, qo.z);
			},
			toNonIndexed: function () {
				function t(t, e) {
					const n = t.array,
						i = t.itemSize,
						r = t.normalized,
						o = new n.constructor(e.length * i);
					let s = 0,
						a = 0;
					for (let t = 0, r = e.length; t < r; t++) {
						s = e[t] * i;
						for (let t = 0; t < i; t++) o[a++] = n[s++];
					}
					return new Lo(o, i, r);
				}
				if (null === this.index) return console.warn('THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.'), this;
				const e = new Xo(),
					n = this.index.array,
					i = this.attributes;
				for (const r in i) {
					const o = t(i[r], n);
					e.setAttribute(r, o);
				}
				const r = this.morphAttributes;
				for (const i in r) {
					const o = [],
						s = r[i];
					for (let e = 0, i = s.length; e < i; e++) {
						const i = t(s[e], n);
						o.push(i);
					}
					e.morphAttributes[i] = o;
				}
				e.morphTargetsRelative = this.morphTargetsRelative;
				const o = this.groups;
				for (let t = 0, n = o.length; t < n; t++) {
					const n = o[t];
					e.addGroup(n.start, n.count, n.materialIndex);
				}
				return e;
			},
			toJSON: function () {
				const t = {
					metadata: {
						version: 4.5,
						type: 'BufferGeometry',
						generator: 'BufferGeometry.toJSON',
					},
				};
				if (((t.uuid = this.uuid), (t.type = this.type), '' !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters)) {
					const e = this.parameters;
					for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
					return t;
				}
				t.data = {
					attributes: {},
				};
				const e = this.index;
				null !== e &&
					(t.data.index = {
						type: e.array.constructor.name,
						array: Array.prototype.slice.call(e.array),
					});
				const n = this.attributes;
				for (const e in n) {
					const i = n[e],
						r = i.toJSON(t.data);
					'' !== i.name && (r.name = i.name), (t.data.attributes[e] = r);
				}
				const i = {};
				let r = !1;
				for (const e in this.morphAttributes) {
					const n = this.morphAttributes[e],
						o = [];
					for (let e = 0, i = n.length; e < i; e++) {
						const i = n[e],
							r = i.toJSON(t.data);
						'' !== i.name && (r.name = i.name), o.push(r);
					}
					o.length > 0 && ((i[e] = o), (r = !0));
				}
				r && ((t.data.morphAttributes = i), (t.data.morphTargetsRelative = this.morphTargetsRelative));
				const o = this.groups;
				o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
				const s = this.boundingSphere;
				return (
					null !== s &&
						(t.data.boundingSphere = {
							center: s.center.toArray(),
							radius: s.radius,
						}),
					t
				);
			},
			clone: function () {
				return new Xo().copy(this);
			},
			copy: function (t) {
				(this.index = null), (this.attributes = {}), (this.morphAttributes = {}), (this.groups = []), (this.boundingBox = null), (this.boundingSphere = null);
				const e = {};
				this.name = t.name;
				const n = t.index;
				null !== n && this.setIndex(n.clone(e));
				const i = t.attributes;
				for (const t in i) {
					const n = i[t];
					this.setAttribute(t, n.clone(e));
				}
				const r = t.morphAttributes;
				for (const t in r) {
					const n = [],
						i = r[t];
					for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
					this.morphAttributes[t] = n;
				}
				this.morphTargetsRelative = t.morphTargetsRelative;
				const o = t.groups;
				for (let t = 0, e = o.length; t < e; t++) {
					const e = o[t];
					this.addGroup(e.start, e.count, e.materialIndex);
				}
				const s = t.boundingBox;
				null !== s && (this.boundingBox = s.clone());
				const a = t.boundingSphere;
				return null !== a && (this.boundingSphere = a.clone()), (this.drawRange.start = t.drawRange.start), (this.drawRange.count = t.drawRange.count), (this.userData = t.userData), this;
			},
			dispose: function () {
				this.dispatchEvent({
					type: 'dispose',
				});
			},
		});
		const Yo = new Ar(),
			Zo = new Er(),
			Jo = new yr(),
			Ko = new $i(),
			Qo = new $i(),
			$o = new $i(),
			ts = new $i(),
			es = new $i(),
			ns = new $i(),
			is = new $i(),
			rs = new $i(),
			os = new $i(),
			ss = new Vi(),
			as = new Vi(),
			ls = new Vi(),
			cs = new $i(),
			hs = new $i();
		function us(t, e) {
			Qr.call(this), (this.type = 'Mesh'), (this.geometry = void 0 !== t ? t : new Xo()), (this.material = void 0 !== e ? e : new To()), this.updateMorphTargets();
		}
		function ds(t, e, n, i, r, o, s, a) {
			let l;
			if (((l = 1 === e.side ? i.intersectTriangle(s, o, r, !0, a) : i.intersectTriangle(r, o, s, 2 !== e.side, a)), null === l)) return null;
			hs.copy(a), hs.applyMatrix4(t.matrixWorld);
			const c = n.ray.origin.distanceTo(hs);
			return c < n.near || c > n.far
				? null
				: {
						distance: c,
						point: hs.clone(),
						object: t,
				  };
		}
		function ps(t, e, n, i, r, o, s, a, l, c, h, u) {
			Ko.fromBufferAttribute(r, c), Qo.fromBufferAttribute(r, h), $o.fromBufferAttribute(r, u);
			const d = t.morphTargetInfluences;
			if (e.morphTargets && o && d) {
				is.set(0, 0, 0), rs.set(0, 0, 0), os.set(0, 0, 0);
				for (let t = 0, e = o.length; t < e; t++) {
					const e = d[t],
						n = o[t];
					0 !== e &&
						(ts.fromBufferAttribute(n, c),
						es.fromBufferAttribute(n, h),
						ns.fromBufferAttribute(n, u),
						s
							? (is.addScaledVector(ts, e), rs.addScaledVector(es, e), os.addScaledVector(ns, e))
							: (is.addScaledVector(ts.sub(Ko), e), rs.addScaledVector(es.sub(Qo), e), os.addScaledVector(ns.sub($o), e)));
				}
				Ko.add(is), Qo.add(rs), $o.add(os);
			}
			t.isSkinnedMesh && (t.boneTransform(c, Ko), t.boneTransform(h, Qo), t.boneTransform(u, $o));
			const p = ds(t, e, n, i, Ko, Qo, $o, cs);
			if (p) {
				a && (ss.fromBufferAttribute(a, c), as.fromBufferAttribute(a, h), ls.fromBufferAttribute(a, u), (p.uv = fo.getUV(cs, Ko, Qo, $o, ss, as, ls, new Vi()))),
					l && (ss.fromBufferAttribute(l, c), as.fromBufferAttribute(l, h), ls.fromBufferAttribute(l, u), (p.uv2 = fo.getUV(cs, Ko, Qo, $o, ss, as, ls, new Vi())));
				const t = new wo(c, h, u);
				fo.getNormal(Ko, Qo, $o, t.normal), (p.face = t);
			}
			return p;
		}
		us.prototype = Object.assign(Object.create(Qr.prototype), {
			constructor: us,
			isMesh: !0,
			copy: function (t) {
				return (
					Qr.prototype.copy.call(this, t),
					void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
					void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
					(this.material = t.material),
					(this.geometry = t.geometry),
					this
				);
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e && e.length > 0 && console.error('THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.');
				}
			},
			raycast: function (t, e) {
				const n = this.geometry,
					i = this.material,
					r = this.matrixWorld;
				if (void 0 === i) return;
				if ((null === n.boundingSphere && n.computeBoundingSphere(), Jo.copy(n.boundingSphere), Jo.applyMatrix4(r), !1 === t.ray.intersectsSphere(Jo))) return;
				if ((Yo.getInverse(r), Zo.copy(t.ray).applyMatrix4(Yo), null !== n.boundingBox && !1 === Zo.intersectsBox(n.boundingBox))) return;
				let o;
				if (n.isBufferGeometry) {
					const r = n.index,
						s = n.attributes.position,
						a = n.morphAttributes.position,
						l = n.morphTargetsRelative,
						c = n.attributes.uv,
						h = n.attributes.uv2,
						u = n.groups,
						d = n.drawRange;
					if (null !== r)
						if (Array.isArray(i))
							for (let n = 0, p = u.length; n < p; n++) {
								const p = u[n],
									f = i[p.materialIndex];
								for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
									const i = r.getX(n),
										u = r.getX(n + 1),
										d = r.getX(n + 2);
									(o = ps(this, f, t, Zo, s, a, l, c, h, i, u, d)), o && ((o.faceIndex = Math.floor(n / 3)), (o.face.materialIndex = p.materialIndex), e.push(o));
								}
							}
						else {
							for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
								const u = r.getX(n),
									d = r.getX(n + 1),
									p = r.getX(n + 2);
								(o = ps(this, i, t, Zo, s, a, l, c, h, u, d, p)), o && ((o.faceIndex = Math.floor(n / 3)), e.push(o));
							}
						}
					else if (void 0 !== s)
						if (Array.isArray(i))
							for (let n = 0, r = u.length; n < r; n++) {
								const r = u[n],
									p = i[r.materialIndex];
								for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) {
									(o = ps(this, p, t, Zo, s, a, l, c, h, n, n + 1, n + 2)), o && ((o.faceIndex = Math.floor(n / 3)), (o.face.materialIndex = r.materialIndex), e.push(o));
								}
							}
						else {
							for (let n = Math.max(0, d.start), r = Math.min(s.count, d.start + d.count); n < r; n += 3) {
								(o = ps(this, i, t, Zo, s, a, l, c, h, n, n + 1, n + 2)), o && ((o.faceIndex = Math.floor(n / 3)), e.push(o));
							}
						}
				} else if (n.isGeometry) {
					const r = Array.isArray(i),
						s = n.vertices,
						a = n.faces;
					let l;
					const c = n.faceVertexUvs[0];
					c.length > 0 && (l = c);
					for (let n = 0, c = a.length; n < c; n++) {
						const c = a[n],
							h = r ? i[c.materialIndex] : i;
						if (void 0 === h) continue;
						const u = s[c.a],
							d = s[c.b],
							p = s[c.c];
						if (((o = ds(this, h, t, Zo, u, d, p, cs)), o)) {
							if (l && l[n]) {
								const t = l[n];
								ss.copy(t[0]), as.copy(t[1]), ls.copy(t[2]), (o.uv = fo.getUV(cs, u, d, p, ss, as, ls, new Vi()));
							}
							(o.face = c), (o.faceIndex = n), e.push(o);
						}
					}
				}
			},
		});
		let fs = 0;
		const ms = new Ar(),
			gs = new Qr(),
			vs = new $i();
		function ys() {
			Object.defineProperty(this, 'id', {
				value: (fs += 2),
			}),
				(this.uuid = Gi.generateUUID()),
				(this.name = ''),
				(this.type = 'Geometry'),
				(this.vertices = []),
				(this.colors = []),
				(this.faces = []),
				(this.faceVertexUvs = [[]]),
				(this.morphTargets = []),
				(this.morphNormals = []),
				(this.skinWeights = []),
				(this.skinIndices = []),
				(this.lineDistances = []),
				(this.boundingBox = null),
				(this.boundingSphere = null),
				(this.elementsNeedUpdate = !1),
				(this.verticesNeedUpdate = !1),
				(this.uvsNeedUpdate = !1),
				(this.normalsNeedUpdate = !1),
				(this.colorsNeedUpdate = !1),
				(this.lineDistancesNeedUpdate = !1),
				(this.groupsNeedUpdate = !1);
		}
		ys.prototype = Object.assign(Object.create(Fi.prototype), {
			constructor: ys,
			isGeometry: !0,
			applyMatrix4: function (t) {
				const e = new ji().getNormalMatrix(t);
				for (let e = 0, n = this.vertices.length; e < n; e++) {
					this.vertices[e].applyMatrix4(t);
				}
				for (let t = 0, n = this.faces.length; t < n; t++) {
					const n = this.faces[t];
					n.normal.applyMatrix3(e).normalize();
					for (let t = 0, i = n.vertexNormals.length; t < i; t++) n.vertexNormals[t].applyMatrix3(e).normalize();
				}
				return (
					null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), (this.verticesNeedUpdate = !0), (this.normalsNeedUpdate = !0), this
				);
			},
			rotateX: function (t) {
				return ms.makeRotationX(t), this.applyMatrix4(ms), this;
			},
			rotateY: function (t) {
				return ms.makeRotationY(t), this.applyMatrix4(ms), this;
			},
			rotateZ: function (t) {
				return ms.makeRotationZ(t), this.applyMatrix4(ms), this;
			},
			translate: function (t, e, n) {
				return ms.makeTranslation(t, e, n), this.applyMatrix4(ms), this;
			},
			scale: function (t, e, n) {
				return ms.makeScale(t, e, n), this.applyMatrix4(ms), this;
			},
			lookAt: function (t) {
				return gs.lookAt(t), gs.updateMatrix(), this.applyMatrix4(gs.matrix), this;
			},
			fromBufferGeometry: function (t) {
				const e = this,
					n = null !== t.index ? t.index : void 0,
					i = t.attributes;
				if (void 0 === i.position) return console.error('THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.'), this;
				const r = i.position,
					o = i.normal,
					s = i.color,
					a = i.uv,
					l = i.uv2;
				void 0 !== l && (this.faceVertexUvs[1] = []);
				for (let t = 0; t < r.count; t++) e.vertices.push(new $i().fromBufferAttribute(r, t)), void 0 !== s && e.colors.push(new bo().fromBufferAttribute(s, t));
				function c(t, n, i, r) {
					const c = void 0 === s ? [] : [e.colors[t].clone(), e.colors[n].clone(), e.colors[i].clone()],
						h = void 0 === o ? [] : [new $i().fromBufferAttribute(o, t), new $i().fromBufferAttribute(o, n), new $i().fromBufferAttribute(o, i)],
						u = new wo(t, n, i, h, c, r);
					e.faces.push(u),
						void 0 !== a && e.faceVertexUvs[0].push([new Vi().fromBufferAttribute(a, t), new Vi().fromBufferAttribute(a, n), new Vi().fromBufferAttribute(a, i)]),
						void 0 !== l && e.faceVertexUvs[1].push([new Vi().fromBufferAttribute(l, t), new Vi().fromBufferAttribute(l, n), new Vi().fromBufferAttribute(l, i)]);
				}
				const h = t.groups;
				if (h.length > 0)
					for (let t = 0; t < h.length; t++) {
						const e = h[t],
							i = e.start;
						for (let t = i, r = i + e.count; t < r; t += 3) void 0 !== n ? c(n.getX(t), n.getX(t + 1), n.getX(t + 2), e.materialIndex) : c(t, t + 1, t + 2, e.materialIndex);
					}
				else if (void 0 !== n) for (let t = 0; t < n.count; t += 3) c(n.getX(t), n.getX(t + 1), n.getX(t + 2));
				else for (let t = 0; t < r.count; t += 3) c(t, t + 1, t + 2);
				return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this;
			},
			center: function () {
				return this.computeBoundingBox(), this.boundingBox.getCenter(vs).negate(), this.translate(vs.x, vs.y, vs.z), this;
			},
			normalize: function () {
				this.computeBoundingSphere();
				const t = this.boundingSphere.center,
					e = this.boundingSphere.radius,
					n = 0 === e ? 1 : 1 / e,
					i = new Ar();
				return i.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix4(i), this;
			},
			computeFaceNormals: function () {
				const t = new $i(),
					e = new $i();
				for (let n = 0, i = this.faces.length; n < i; n++) {
					const i = this.faces[n],
						r = this.vertices[i.a],
						o = this.vertices[i.b],
						s = this.vertices[i.c];
					t.subVectors(s, o), e.subVectors(r, o), t.cross(e), t.normalize(), i.normal.copy(t);
				}
			},
			computeVertexNormals: function (t) {
				void 0 === t && (t = !0);
				const e = new Array(this.vertices.length);
				for (let t = 0, n = this.vertices.length; t < n; t++) e[t] = new $i();
				if (t) {
					const t = new $i(),
						n = new $i();
					for (let i = 0, r = this.faces.length; i < r; i++) {
						const r = this.faces[i],
							o = this.vertices[r.a],
							s = this.vertices[r.b],
							a = this.vertices[r.c];
						t.subVectors(a, s), n.subVectors(o, s), t.cross(n), e[r.a].add(t), e[r.b].add(t), e[r.c].add(t);
					}
				} else {
					this.computeFaceNormals();
					for (let t = 0, n = this.faces.length; t < n; t++) {
						const n = this.faces[t];
						e[n.a].add(n.normal), e[n.b].add(n.normal), e[n.c].add(n.normal);
					}
				}
				for (let t = 0, n = this.vertices.length; t < n; t++) e[t].normalize();
				for (let t = 0, n = this.faces.length; t < n; t++) {
					const n = this.faces[t],
						i = n.vertexNormals;
					3 === i.length ? (i[0].copy(e[n.a]), i[1].copy(e[n.b]), i[2].copy(e[n.c])) : ((i[0] = e[n.a].clone()), (i[1] = e[n.b].clone()), (i[2] = e[n.c].clone()));
				}
				this.faces.length > 0 && (this.normalsNeedUpdate = !0);
			},
			computeFlatVertexNormals: function () {
				this.computeFaceNormals();
				for (let t = 0, e = this.faces.length; t < e; t++) {
					const e = this.faces[t],
						n = e.vertexNormals;
					3 === n.length ? (n[0].copy(e.normal), n[1].copy(e.normal), n[2].copy(e.normal)) : ((n[0] = e.normal.clone()), (n[1] = e.normal.clone()), (n[2] = e.normal.clone()));
				}
				this.faces.length > 0 && (this.normalsNeedUpdate = !0);
			},
			computeMorphNormals: function () {
				for (let t = 0, e = this.faces.length; t < e; t++) {
					const e = this.faces[t];
					e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : (e.__originalFaceNormal = e.normal.clone()), e.__originalVertexNormals || (e.__originalVertexNormals = []);
					for (let t = 0, n = e.vertexNormals.length; t < n; t++)
						e.__originalVertexNormals[t] ? e.__originalVertexNormals[t].copy(e.vertexNormals[t]) : (e.__originalVertexNormals[t] = e.vertexNormals[t].clone());
				}
				const t = new ys();
				t.faces = this.faces;
				for (let e = 0, n = this.morphTargets.length; e < n; e++) {
					if (!this.morphNormals[e]) {
						(this.morphNormals[e] = {}), (this.morphNormals[e].faceNormals = []), (this.morphNormals[e].vertexNormals = []);
						const t = this.morphNormals[e].faceNormals,
							n = this.morphNormals[e].vertexNormals;
						for (let e = 0, i = this.faces.length; e < i; e++) {
							const e = new $i(),
								i = {
									a: new $i(),
									b: new $i(),
									c: new $i(),
								};
							t.push(e), n.push(i);
						}
					}
					const n = this.morphNormals[e];
					(t.vertices = this.morphTargets[e].vertices), t.computeFaceNormals(), t.computeVertexNormals();
					for (let t = 0, e = this.faces.length; t < e; t++) {
						const e = this.faces[t],
							i = n.faceNormals[t],
							r = n.vertexNormals[t];
						i.copy(e.normal), r.a.copy(e.vertexNormals[0]), r.b.copy(e.vertexNormals[1]), r.c.copy(e.vertexNormals[2]);
					}
				}
				for (let t = 0, e = this.faces.length; t < e; t++) {
					const e = this.faces[t];
					(e.normal = e.__originalFaceNormal), (e.vertexNormals = e.__originalVertexNormals);
				}
			},
			computeBoundingBox: function () {
				null === this.boundingBox && (this.boundingBox = new nr()), this.boundingBox.setFromPoints(this.vertices);
			},
			computeBoundingSphere: function () {
				null === this.boundingSphere && (this.boundingSphere = new yr()), this.boundingSphere.setFromPoints(this.vertices);
			},
			merge: function (t, e, n) {
				if (!t || !t.isGeometry) return void console.error('THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.', t);
				let i;
				const r = this.vertices.length,
					o = this.vertices,
					s = t.vertices,
					a = this.faces,
					l = t.faces,
					c = this.colors,
					h = t.colors;
				void 0 === n && (n = 0), void 0 !== e && (i = new ji().getNormalMatrix(e));
				for (let t = 0, n = s.length; t < n; t++) {
					const n = s[t].clone();
					void 0 !== e && n.applyMatrix4(e), o.push(n);
				}
				for (let t = 0, e = h.length; t < e; t++) c.push(h[t].clone());
				for (let t = 0, e = l.length; t < e; t++) {
					const e = l[t];
					let o, s;
					const c = e.vertexNormals,
						h = e.vertexColors,
						u = new wo(e.a + r, e.b + r, e.c + r);
					u.normal.copy(e.normal), void 0 !== i && u.normal.applyMatrix3(i).normalize();
					for (let t = 0, e = c.length; t < e; t++) (o = c[t].clone()), void 0 !== i && o.applyMatrix3(i).normalize(), u.vertexNormals.push(o);
					u.color.copy(e.color);
					for (let t = 0, e = h.length; t < e; t++) (s = h[t]), u.vertexColors.push(s.clone());
					(u.materialIndex = e.materialIndex + n), a.push(u);
				}
				for (let e = 0, n = t.faceVertexUvs.length; e < n; e++) {
					const n = t.faceVertexUvs[e];
					void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []);
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t],
							r = [];
						for (let t = 0, e = i.length; t < e; t++) r.push(i[t].clone());
						this.faceVertexUvs[e].push(r);
					}
				}
			},
			mergeMesh: function (t) {
				t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error('THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.', t);
			},
			mergeVertices: function () {
				const t = {},
					e = [],
					n = [],
					i = Math.pow(10, 4);
				for (let r = 0, o = this.vertices.length; r < o; r++) {
					const o = this.vertices[r],
						s = Math.round(o.x * i) + '_' + Math.round(o.y * i) + '_' + Math.round(o.z * i);
					void 0 === t[s] ? ((t[s] = r), e.push(this.vertices[r]), (n[r] = e.length - 1)) : (n[r] = n[t[s]]);
				}
				const r = [];
				for (let t = 0, e = this.faces.length; t < e; t++) {
					const e = this.faces[t];
					(e.a = n[e.a]), (e.b = n[e.b]), (e.c = n[e.c]);
					const i = [e.a, e.b, e.c];
					for (let e = 0; e < 3; e++)
						if (i[e] === i[(e + 1) % 3]) {
							r.push(t);
							break;
						}
				}
				for (let t = r.length - 1; t >= 0; t--) {
					const e = r[t];
					this.faces.splice(e, 1);
					for (let t = 0, n = this.faceVertexUvs.length; t < n; t++) this.faceVertexUvs[t].splice(e, 1);
				}
				const o = this.vertices.length - e.length;
				return (this.vertices = e), o;
			},
			setFromPoints: function (t) {
				this.vertices = [];
				for (let e = 0, n = t.length; e < n; e++) {
					const n = t[e];
					this.vertices.push(new $i(n.x, n.y, n.z || 0));
				}
				return this;
			},
			sortFacesByMaterialIndex: function () {
				const t = this.faces,
					e = t.length;
				for (let n = 0; n < e; n++) t[n]._id = n;
				t.sort(function (t, e) {
					return t.materialIndex - e.materialIndex;
				});
				const n = this.faceVertexUvs[0],
					i = this.faceVertexUvs[1];
				let r, o;
				n && n.length === e && (r = []), i && i.length === e && (o = []);
				for (let s = 0; s < e; s++) {
					const e = t[s]._id;
					r && r.push(n[e]), o && o.push(i[e]);
				}
				r && (this.faceVertexUvs[0] = r), o && (this.faceVertexUvs[1] = o);
			},
			toJSON: function () {
				const t = {
					metadata: {
						version: 4.5,
						type: 'Geometry',
						generator: 'Geometry.toJSON',
					},
				};
				if (((t.uuid = this.uuid), (t.type = this.type), '' !== this.name && (t.name = this.name), void 0 !== this.parameters)) {
					const e = this.parameters;
					for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
					return t;
				}
				const e = [];
				for (let t = 0; t < this.vertices.length; t++) {
					const n = this.vertices[t];
					e.push(n.x, n.y, n.z);
				}
				const n = [],
					i = [],
					r = {},
					o = [],
					s = {},
					a = [],
					l = {};
				for (let t = 0; t < this.faces.length; t++) {
					const e = this.faces[t],
						i = !0,
						r = !1,
						o = void 0 !== this.faceVertexUvs[0][t],
						s = e.normal.length() > 0,
						a = e.vertexNormals.length > 0,
						l = 1 !== e.color.r || 1 !== e.color.g || 1 !== e.color.b,
						p = e.vertexColors.length > 0;
					let f = 0;
					if (
						((f = c(f, 0, 0)),
						(f = c(f, 1, i)),
						(f = c(f, 2, r)),
						(f = c(f, 3, o)),
						(f = c(f, 4, s)),
						(f = c(f, 5, a)),
						(f = c(f, 6, l)),
						(f = c(f, 7, p)),
						n.push(f),
						n.push(e.a, e.b, e.c),
						n.push(e.materialIndex),
						o)
					) {
						const e = this.faceVertexUvs[0][t];
						n.push(d(e[0]), d(e[1]), d(e[2]));
					}
					if ((s && n.push(h(e.normal)), a)) {
						const t = e.vertexNormals;
						n.push(h(t[0]), h(t[1]), h(t[2]));
					}
					if ((l && n.push(u(e.color)), p)) {
						const t = e.vertexColors;
						n.push(u(t[0]), u(t[1]), u(t[2]));
					}
				}
				function c(t, e, n) {
					return n ? t | (1 << e) : t & ~(1 << e);
				}
				function h(t) {
					const e = t.x.toString() + t.y.toString() + t.z.toString();
					return void 0 !== r[e] || ((r[e] = i.length / 3), i.push(t.x, t.y, t.z)), r[e];
				}
				function u(t) {
					const e = t.r.toString() + t.g.toString() + t.b.toString();
					return void 0 !== s[e] || ((s[e] = o.length), o.push(t.getHex())), s[e];
				}
				function d(t) {
					const e = t.x.toString() + t.y.toString();
					return void 0 !== l[e] || ((l[e] = a.length / 2), a.push(t.x, t.y)), l[e];
				}
				return (t.data = {}), (t.data.vertices = e), (t.data.normals = i), o.length > 0 && (t.data.colors = o), a.length > 0 && (t.data.uvs = [a]), (t.data.faces = n), t;
			},
			clone: function () {
				return new ys().copy(this);
			},
			copy: function (t) {
				(this.vertices = []),
					(this.colors = []),
					(this.faces = []),
					(this.faceVertexUvs = [[]]),
					(this.morphTargets = []),
					(this.morphNormals = []),
					(this.skinWeights = []),
					(this.skinIndices = []),
					(this.lineDistances = []),
					(this.boundingBox = null),
					(this.boundingSphere = null),
					(this.name = t.name);
				const e = t.vertices;
				for (let t = 0, n = e.length; t < n; t++) this.vertices.push(e[t].clone());
				const n = t.colors;
				for (let t = 0, e = n.length; t < e; t++) this.colors.push(n[t].clone());
				const i = t.faces;
				for (let t = 0, e = i.length; t < e; t++) this.faces.push(i[t].clone());
				for (let e = 0, n = t.faceVertexUvs.length; e < n; e++) {
					const n = t.faceVertexUvs[e];
					void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []);
					for (let t = 0, i = n.length; t < i; t++) {
						const i = n[t],
							r = [];
						for (let t = 0, e = i.length; t < e; t++) {
							const e = i[t];
							r.push(e.clone());
						}
						this.faceVertexUvs[e].push(r);
					}
				}
				const r = t.morphTargets;
				for (let t = 0, e = r.length; t < e; t++) {
					const e = {};
					if (((e.name = r[t].name), void 0 !== r[t].vertices)) {
						e.vertices = [];
						for (let n = 0, i = r[t].vertices.length; n < i; n++) e.vertices.push(r[t].vertices[n].clone());
					}
					if (void 0 !== r[t].normals) {
						e.normals = [];
						for (let n = 0, i = r[t].normals.length; n < i; n++) e.normals.push(r[t].normals[n].clone());
					}
					this.morphTargets.push(e);
				}
				const o = t.morphNormals;
				for (let t = 0, e = o.length; t < e; t++) {
					const e = {};
					if (void 0 !== o[t].vertexNormals) {
						e.vertexNormals = [];
						for (let n = 0, i = o[t].vertexNormals.length; n < i; n++) {
							const i = o[t].vertexNormals[n],
								r = {};
							(r.a = i.a.clone()), (r.b = i.b.clone()), (r.c = i.c.clone()), e.vertexNormals.push(r);
						}
					}
					if (void 0 !== o[t].faceNormals) {
						e.faceNormals = [];
						for (let n = 0, i = o[t].faceNormals.length; n < i; n++) e.faceNormals.push(o[t].faceNormals[n].clone());
					}
					this.morphNormals.push(e);
				}
				const s = t.skinWeights;
				for (let t = 0, e = s.length; t < e; t++) this.skinWeights.push(s[t].clone());
				const a = t.skinIndices;
				for (let t = 0, e = a.length; t < e; t++) this.skinIndices.push(a[t].clone());
				const l = t.lineDistances;
				for (let t = 0, e = l.length; t < e; t++) this.lineDistances.push(l[t]);
				const c = t.boundingBox;
				null !== c && (this.boundingBox = c.clone());
				const h = t.boundingSphere;
				return (
					null !== h && (this.boundingSphere = h.clone()),
					(this.elementsNeedUpdate = t.elementsNeedUpdate),
					(this.verticesNeedUpdate = t.verticesNeedUpdate),
					(this.uvsNeedUpdate = t.uvsNeedUpdate),
					(this.normalsNeedUpdate = t.normalsNeedUpdate),
					(this.colorsNeedUpdate = t.colorsNeedUpdate),
					(this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate),
					(this.groupsNeedUpdate = t.groupsNeedUpdate),
					this
				);
			},
			dispose: function () {
				this.dispatchEvent({
					type: 'dispose',
				});
			},
		});
		class xs extends Xo {
			constructor(t = 1, e = 1, n = 1, i = 1, r = 1, o = 1) {
				super(),
					(this.type = 'BoxBufferGeometry'),
					(this.parameters = {
						width: t,
						height: e,
						depth: n,
						widthSegments: i,
						heightSegments: r,
						depthSegments: o,
					});
				const s = this;
				(i = Math.floor(i)), (r = Math.floor(r)), (o = Math.floor(o));
				const a = [],
					l = [],
					c = [],
					h = [];
				let u = 0,
					d = 0;
				function p(t, e, n, i, r, o, p, f, m, g, v) {
					const y = o / m,
						x = p / g,
						_ = o / 2,
						b = p / 2,
						w = f / 2,
						M = m + 1,
						S = g + 1;
					let T = 0,
						E = 0;
					const A = new $i();
					for (let o = 0; o < S; o++) {
						const s = o * x - b;
						for (let a = 0; a < M; a++) {
							const u = a * y - _;
							(A[t] = u * i), (A[e] = s * r), (A[n] = w), l.push(A.x, A.y, A.z), (A[t] = 0), (A[e] = 0), (A[n] = f > 0 ? 1 : -1), c.push(A.x, A.y, A.z), h.push(a / m), h.push(1 - o / g), (T += 1);
						}
					}
					for (let t = 0; t < g; t++)
						for (let e = 0; e < m; e++) {
							const n = u + e + M * t,
								i = u + e + M * (t + 1),
								r = u + (e + 1) + M * (t + 1),
								o = u + (e + 1) + M * t;
							a.push(n, i, o), a.push(i, r, o), (E += 6);
						}
					s.addGroup(d, E, v), (d += E), (u += T);
				}
				p('z', 'y', 'x', -1, -1, n, e, t, o, r, 0),
					p('z', 'y', 'x', 1, -1, n, e, -t, o, r, 1),
					p('x', 'z', 'y', 1, 1, t, n, e, i, o, 2),
					p('x', 'z', 'y', 1, -1, t, n, -e, i, o, 3),
					p('x', 'y', 'z', 1, -1, t, e, n, i, r, 4),
					p('x', 'y', 'z', -1, -1, t, e, -n, i, r, 5),
					this.setIndex(a),
					this.setAttribute('position', new zo(l, 3)),
					this.setAttribute('normal', new zo(c, 3)),
					this.setAttribute('uv', new zo(h, 2));
			}
		}
		function _s(t) {
			const e = {};
			for (const n in t) {
				e[n] = {};
				for (const i in t[n]) {
					const r = t[n][i];
					r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? (e[n][i] = r.clone()) : Array.isArray(r) ? (e[n][i] = r.slice()) : (e[n][i] = r);
				}
			}
			return e;
		}
		function bs(t) {
			const e = {};
			for (let n = 0; n < t.length; n++) {
				const i = _s(t[n]);
				for (const t in i) e[t] = i[t];
			}
			return e;
		}
		const ws = {
			clone: _s,
			merge: bs,
		};
		function Ms(t) {
			So.call(this),
				(this.type = 'ShaderMaterial'),
				(this.defines = {}),
				(this.uniforms = {}),
				(this.vertexShader = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}'),
				(this.fragmentShader = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}'),
				(this.linewidth = 1),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.fog = !1),
				(this.lights = !1),
				(this.clipping = !1),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				(this.extensions = {
					derivatives: !1,
					fragDepth: !1,
					drawBuffers: !1,
					shaderTextureLOD: !1,
				}),
				(this.defaultAttributeValues = {
					color: [1, 1, 1],
					uv: [0, 0],
					uv2: [0, 0],
				}),
				(this.index0AttributeName = void 0),
				(this.uniformsNeedUpdate = !1),
				(this.glslVersion = null),
				void 0 !== t && (void 0 !== t.attributes && console.error('THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'), this.setValues(t));
		}
		function Ss() {
			Qr.call(this), (this.type = 'Camera'), (this.matrixWorldInverse = new Ar()), (this.projectionMatrix = new Ar()), (this.projectionMatrixInverse = new Ar());
		}
		function Ts(t, e, n, i) {
			Ss.call(this),
				(this.type = 'PerspectiveCamera'),
				(this.fov = void 0 !== t ? t : 50),
				(this.zoom = 1),
				(this.near = void 0 !== n ? n : 0.1),
				(this.far = void 0 !== i ? i : 2e3),
				(this.focus = 10),
				(this.aspect = void 0 !== e ? e : 1),
				(this.view = null),
				(this.filmGauge = 35),
				(this.filmOffset = 0),
				this.updateProjectionMatrix();
		}
		(Ms.prototype = Object.create(So.prototype)),
			(Ms.prototype.constructor = Ms),
			(Ms.prototype.isShaderMaterial = !0),
			(Ms.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					(this.fragmentShader = t.fragmentShader),
					(this.vertexShader = t.vertexShader),
					(this.uniforms = _s(t.uniforms)),
					(this.defines = Object.assign({}, t.defines)),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.lights = t.lights),
					(this.clipping = t.clipping),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					(this.extensions = Object.assign({}, t.extensions)),
					(this.glslVersion = t.glslVersion),
					this
				);
			}),
			(Ms.prototype.toJSON = function (t) {
				const e = So.prototype.toJSON.call(this, t);
				(e.glslVersion = this.glslVersion), (e.uniforms = {});
				for (const n in this.uniforms) {
					const i = this.uniforms[n].value;
					i && i.isTexture
						? (e.uniforms[n] = {
								type: 't',
								value: i.toJSON(t).uuid,
						  })
						: i && i.isColor
						? (e.uniforms[n] = {
								type: 'c',
								value: i.getHex(),
						  })
						: i && i.isVector2
						? (e.uniforms[n] = {
								type: 'v2',
								value: i.toArray(),
						  })
						: i && i.isVector3
						? (e.uniforms[n] = {
								type: 'v3',
								value: i.toArray(),
						  })
						: i && i.isVector4
						? (e.uniforms[n] = {
								type: 'v4',
								value: i.toArray(),
						  })
						: i && i.isMatrix3
						? (e.uniforms[n] = {
								type: 'm3',
								value: i.toArray(),
						  })
						: i && i.isMatrix4
						? (e.uniforms[n] = {
								type: 'm4',
								value: i.toArray(),
						  })
						: (e.uniforms[n] = {
								value: i,
						  });
				}
				Object.keys(this.defines).length > 0 && (e.defines = this.defines), (e.vertexShader = this.vertexShader), (e.fragmentShader = this.fragmentShader);
				const n = {};
				for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
				return Object.keys(n).length > 0 && (e.extensions = n), e;
			}),
			(Ss.prototype = Object.assign(Object.create(Qr.prototype), {
				constructor: Ss,
				isCamera: !0,
				copy: function (t, e) {
					return (
						Qr.prototype.copy.call(this, t, e),
						this.matrixWorldInverse.copy(t.matrixWorldInverse),
						this.projectionMatrix.copy(t.projectionMatrix),
						this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
						this
					);
				},
				getWorldDirection: function (t) {
					void 0 === t && (console.warn('THREE.Camera: .getWorldDirection() target is now required'), (t = new $i())), this.updateMatrixWorld(!0);
					const e = this.matrixWorld.elements;
					return t.set(-e[8], -e[9], -e[10]).normalize();
				},
				updateMatrixWorld: function (t) {
					Qr.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld);
				},
				updateWorldMatrix: function (t, e) {
					Qr.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.getInverse(this.matrixWorld);
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
			})),
			(Ts.prototype = Object.assign(Object.create(Ss.prototype), {
				constructor: Ts,
				isPerspectiveCamera: !0,
				copy: function (t, e) {
					return (
						Ss.prototype.copy.call(this, t, e),
						(this.fov = t.fov),
						(this.zoom = t.zoom),
						(this.near = t.near),
						(this.far = t.far),
						(this.focus = t.focus),
						(this.aspect = t.aspect),
						(this.view = null === t.view ? null : Object.assign({}, t.view)),
						(this.filmGauge = t.filmGauge),
						(this.filmOffset = t.filmOffset),
						this
					);
				},
				setFocalLength: function (t) {
					const e = (0.5 * this.getFilmHeight()) / t;
					(this.fov = 2 * Gi.RAD2DEG * Math.atan(e)), this.updateProjectionMatrix();
				},
				getFocalLength: function () {
					const t = Math.tan(0.5 * Gi.DEG2RAD * this.fov);
					return (0.5 * this.getFilmHeight()) / t;
				},
				getEffectiveFOV: function () {
					return 2 * Gi.RAD2DEG * Math.atan(Math.tan(0.5 * Gi.DEG2RAD * this.fov) / this.zoom);
				},
				getFilmWidth: function () {
					return this.filmGauge * Math.min(this.aspect, 1);
				},
				getFilmHeight: function () {
					return this.filmGauge / Math.max(this.aspect, 1);
				},
				setViewOffset: function (t, e, n, i, r, o) {
					(this.aspect = t / e),
						null === this.view &&
							(this.view = {
								enabled: !0,
								fullWidth: 1,
								fullHeight: 1,
								offsetX: 0,
								offsetY: 0,
								width: 1,
								height: 1,
							}),
						(this.view.enabled = !0),
						(this.view.fullWidth = t),
						(this.view.fullHeight = e),
						(this.view.offsetX = n),
						(this.view.offsetY = i),
						(this.view.width = r),
						(this.view.height = o),
						this.updateProjectionMatrix();
				},
				clearViewOffset: function () {
					null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
				},
				updateProjectionMatrix: function () {
					const t = this.near;
					let e = (t * Math.tan(0.5 * Gi.DEG2RAD * this.fov)) / this.zoom,
						n = 2 * e,
						i = this.aspect * n,
						r = -0.5 * i;
					const o = this.view;
					if (null !== this.view && this.view.enabled) {
						const t = o.fullWidth,
							s = o.fullHeight;
						(r += (o.offsetX * i) / t), (e -= (o.offsetY * n) / s), (i *= o.width / t), (n *= o.height / s);
					}
					const s = this.filmOffset;
					0 !== s && (r += (t * s) / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
				},
				toJSON: function (t) {
					const e = Qr.prototype.toJSON.call(this, t);
					return (
						(e.object.fov = this.fov),
						(e.object.zoom = this.zoom),
						(e.object.near = this.near),
						(e.object.far = this.far),
						(e.object.focus = this.focus),
						(e.object.aspect = this.aspect),
						null !== this.view && (e.object.view = Object.assign({}, this.view)),
						(e.object.filmGauge = this.filmGauge),
						(e.object.filmOffset = this.filmOffset),
						e
					);
				},
			}));
		function Es(t, e, n) {
			if ((Qr.call(this), (this.type = 'CubeCamera'), !0 !== n.isWebGLCubeRenderTarget))
				return void console.error('THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.');
			this.renderTarget = n;
			const i = new Ts(90, 1, t, e);
			(i.layers = this.layers), i.up.set(0, -1, 0), i.lookAt(new $i(1, 0, 0)), this.add(i);
			const r = new Ts(90, 1, t, e);
			(r.layers = this.layers), r.up.set(0, -1, 0), r.lookAt(new $i(-1, 0, 0)), this.add(r);
			const o = new Ts(90, 1, t, e);
			(o.layers = this.layers), o.up.set(0, 0, 1), o.lookAt(new $i(0, 1, 0)), this.add(o);
			const s = new Ts(90, 1, t, e);
			(s.layers = this.layers), s.up.set(0, 0, -1), s.lookAt(new $i(0, -1, 0)), this.add(s);
			const a = new Ts(90, 1, t, e);
			(a.layers = this.layers), a.up.set(0, -1, 0), a.lookAt(new $i(0, 0, 1)), this.add(a);
			const l = new Ts(90, 1, t, e);
			(l.layers = this.layers),
				l.up.set(0, -1, 0),
				l.lookAt(new $i(0, 0, -1)),
				this.add(l),
				(this.update = function (t, e) {
					null === this.parent && this.updateMatrixWorld();
					const c = t.xr.enabled,
						h = t.getRenderTarget();
					t.xr.enabled = !1;
					const u = n.texture.generateMipmaps;
					(n.texture.generateMipmaps = !1),
						t.setRenderTarget(n, 0),
						t.render(e, i),
						t.setRenderTarget(n, 1),
						t.render(e, r),
						t.setRenderTarget(n, 2),
						t.render(e, o),
						t.setRenderTarget(n, 3),
						t.render(e, s),
						t.setRenderTarget(n, 4),
						t.render(e, a),
						(n.texture.generateMipmaps = u),
						t.setRenderTarget(n, 5),
						t.render(e, l),
						t.setRenderTarget(h),
						(t.xr.enabled = c);
				}),
				(this.clear = function (t, e, i, r) {
					const o = t.getRenderTarget();
					for (let o = 0; o < 6; o++) t.setRenderTarget(n, o), t.clear(e, i, r);
					t.setRenderTarget(o);
				});
		}
		function As(t, e, n) {
			Number.isInteger(e) && (console.warn('THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )'), (e = n)),
				Ji.call(this, t, t, e),
				(this.texture.isWebGLCubeRenderTargetTexture = !0);
		}
		function Ls(t, e, n, i, r, o, s, a, l, c, h, u) {
			Yi.call(this, null, o, s, a, l, c, i, r, h, u),
				(this.image = {
					data: t || null,
					width: e || 1,
					height: n || 1,
				}),
				(this.magFilter = void 0 !== l ? l : 1003),
				(this.minFilter = void 0 !== c ? c : 1003),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.unpackAlignment = 1),
				(this.needsUpdate = !0);
		}
		(Es.prototype = Object.create(Qr.prototype)),
			(Es.prototype.constructor = Es),
			(As.prototype = Object.create(Ji.prototype)),
			(As.prototype.constructor = As),
			(As.prototype.isWebGLCubeRenderTarget = !0),
			(As.prototype.fromEquirectangularTexture = function (t, e) {
				(this.texture.type = e.type),
					(this.texture.format = 1023),
					(this.texture.encoding = e.encoding),
					(this.texture.generateMipmaps = e.generateMipmaps),
					(this.texture.minFilter = e.minFilter),
					(this.texture.magFilter = e.magFilter);
				const n = {
						uniforms: {
							tEquirect: {
								value: null,
							},
						},
						vertexShader:
							'\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t',
						fragmentShader:
							'\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t',
					},
					i = new xs(5, 5, 5),
					r = new Ms({
						name: 'CubemapFromEquirect',
						uniforms: _s(n.uniforms),
						vertexShader: n.vertexShader,
						fragmentShader: n.fragmentShader,
						side: 1,
						blending: 0,
					});
				r.uniforms.tEquirect.value = e;
				const o = new us(i, r),
					s = e.minFilter;
				1008 === e.minFilter && (e.minFilter = 1006);
				return new Es(1, 10, this).update(t, o), (e.minFilter = s), o.geometry.dispose(), o.material.dispose(), this;
			}),
			(Ls.prototype = Object.create(Yi.prototype)),
			(Ls.prototype.constructor = Ls),
			(Ls.prototype.isDataTexture = !0);
		const Rs = new yr(),
			Ps = new $i();
		class Cs {
			constructor(t, e, n, i, r, o) {
				this.planes = [void 0 !== t ? t : new no(), void 0 !== e ? e : new no(), void 0 !== n ? n : new no(), void 0 !== i ? i : new no(), void 0 !== r ? r : new no(), void 0 !== o ? o : new no()];
			}
			set(t, e, n, i, r, o) {
				const s = this.planes;
				return s[0].copy(t), s[1].copy(e), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(o), this;
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
				return this;
			}
			setFromProjectionMatrix(t) {
				const e = this.planes,
					n = t.elements,
					i = n[0],
					r = n[1],
					o = n[2],
					s = n[3],
					a = n[4],
					l = n[5],
					c = n[6],
					h = n[7],
					u = n[8],
					d = n[9],
					p = n[10],
					f = n[11],
					m = n[12],
					g = n[13],
					v = n[14],
					y = n[15];
				return (
					e[0].setComponents(s - i, h - a, f - u, y - m).normalize(),
					e[1].setComponents(s + i, h + a, f + u, y + m).normalize(),
					e[2].setComponents(s + r, h + l, f + d, y + g).normalize(),
					e[3].setComponents(s - r, h - l, f - d, y - g).normalize(),
					e[4].setComponents(s - o, h - c, f - p, y - v).normalize(),
					e[5].setComponents(s + o, h + c, f + p, y + v).normalize(),
					this
				);
			}
			intersectsObject(t) {
				const e = t.geometry;
				return null === e.boundingSphere && e.computeBoundingSphere(), Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Rs);
			}
			intersectsSprite(t) {
				return Rs.center.set(0, 0, 0), (Rs.radius = 0.7071067811865476), Rs.applyMatrix4(t.matrixWorld), this.intersectsSphere(Rs);
			}
			intersectsSphere(t) {
				const e = this.planes,
					n = t.center,
					i = -t.radius;
				for (let t = 0; t < 6; t++) {
					if (e[t].distanceToPoint(n) < i) return !1;
				}
				return !0;
			}
			intersectsBox(t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) {
					const i = e[n];
					if (((Ps.x = i.normal.x > 0 ? t.max.x : t.min.x), (Ps.y = i.normal.y > 0 ? t.max.y : t.min.y), (Ps.z = i.normal.z > 0 ? t.max.z : t.min.z), i.distanceToPoint(Ps) < 0)) return !1;
				}
				return !0;
			}
			containsPoint(t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
				return !0;
			}
		}
		function Os() {
			let t = null,
				e = !1,
				n = null,
				i = null;
			function r(e, o) {
				n(e, o), (i = t.requestAnimationFrame(r));
			}
			return {
				start: function () {
					!0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
				},
				stop: function () {
					t.cancelAnimationFrame(i), (e = !1);
				},
				setAnimationLoop: function (t) {
					n = t;
				},
				setContext: function (e) {
					t = e;
				},
			};
		}
		function Ds(t, e) {
			const n = e.isWebGL2,
				i = new WeakMap();
			return {
				get: function (t) {
					return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
				},
				remove: function (e) {
					e.isInterleavedBufferAttribute && (e = e.data);
					const n = i.get(e);
					n && (t.deleteBuffer(n.buffer), i.delete(e));
				},
				update: function (e, r) {
					if (e.isGLBufferAttribute) {
						var o = i.get(e);
						return void (
							(!o || o.version < e.version) &&
							i.set(e, {
								buffer: e.buffer,
								type: e.type,
								bytesPerElement: e.elementSize,
								version: e.version,
							})
						);
					}
					e.isInterleavedBufferAttribute && (e = e.data);
					const s = i.get(e);
					void 0 === s
						? i.set(
								e,
								(function (e, n) {
									const i = e.array,
										r = e.usage,
										o = t.createBuffer();
									t.bindBuffer(n, o), t.bufferData(n, i, r), e.onUploadCallback();
									let s = 5126;
									return (
										i instanceof Float32Array
											? (s = 5126)
											: i instanceof Float64Array
											? console.warn('THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.')
											: i instanceof Uint16Array
											? (s = 5123)
											: i instanceof Int16Array
											? (s = 5122)
											: i instanceof Uint32Array
											? (s = 5125)
											: i instanceof Int32Array
											? (s = 5124)
											: i instanceof Int8Array
											? (s = 5120)
											: i instanceof Uint8Array && (s = 5121),
										{
											buffer: o,
											type: s,
											bytesPerElement: i.BYTES_PER_ELEMENT,
											version: e.version,
										}
									);
								})(e, r),
						  )
						: s.version < e.version &&
						  (!(function (e, i, r) {
								const o = i.array,
									s = i.updateRange;
								t.bindBuffer(r, e),
									-1 === s.count
										? t.bufferSubData(r, 0, o)
										: (n ? t.bufferSubData(r, s.offset * o.BYTES_PER_ELEMENT, o, s.offset, s.count) : t.bufferSubData(r, s.offset * o.BYTES_PER_ELEMENT, o.subarray(s.offset, s.offset + s.count)),
										  (s.count = -1));
						  })(s.buffer, e, r),
						  (s.version = e.version));
				},
			};
		}
		class Is extends Xo {
			constructor(t, e, n, i) {
				super(),
					(this.type = 'PlaneBufferGeometry'),
					(this.parameters = {
						width: t,
						height: e,
						widthSegments: n,
						heightSegments: i,
					});
				const r = (t = t || 1) / 2,
					o = (e = e || 1) / 2,
					s = Math.floor(n) || 1,
					a = Math.floor(i) || 1,
					l = s + 1,
					c = a + 1,
					h = t / s,
					u = e / a,
					d = [],
					p = [],
					f = [],
					m = [];
				for (let t = 0; t < c; t++) {
					const e = t * u - o;
					for (let n = 0; n < l; n++) {
						const i = n * h - r;
						p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - t / a);
					}
				}
				for (let t = 0; t < a; t++)
					for (let e = 0; e < s; e++) {
						const n = e + l * t,
							i = e + l * (t + 1),
							r = e + 1 + l * (t + 1),
							o = e + 1 + l * t;
						d.push(n, i, o), d.push(i, r, o);
					}
				this.setIndex(d), this.setAttribute('position', new zo(p, 3)), this.setAttribute('normal', new zo(f, 3)), this.setAttribute('uv', new zo(m, 2));
			}
		}
		const Ns = {
				alphamap_fragment: '#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif',
				alphamap_pars_fragment: '#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
				alphatest_fragment: '#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif',
				aomap_fragment:
					'#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif',
				aomap_pars_fragment: '#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif',
				begin_vertex: 'vec3 transformed = vec3( position );',
				beginnormal_vertex: 'vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif',
				bsdfs:
					'vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif',
				bumpmap_pars_fragment:
					'#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif',
				clipping_planes_fragment:
					'#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif',
				clipping_planes_pars_fragment: '#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif',
				clipping_planes_pars_vertex: '#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif',
				clipping_planes_vertex: '#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif',
				color_fragment: '#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif',
				color_pars_fragment: '#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif',
				color_pars_vertex: '#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif',
				color_vertex:
					'#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif',
				common:
					'#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}',
				cube_uv_reflection_fragment:
					'#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif',
				defaultnormal_vertex:
					'vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif',
				displacementmap_pars_vertex: '#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif',
				displacementmap_vertex: '#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif',
				emissivemap_fragment:
					'#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif',
				emissivemap_pars_fragment: '#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif',
				encodings_fragment: 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
				encodings_pars_fragment:
					'\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}',
				envmap_fragment:
					'#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif',
				envmap_common_pars_fragment:
					'#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif',
				envmap_pars_fragment:
					'#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif',
				envmap_pars_vertex:
					'#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif',
				envmap_physical_pars_fragment:
					'#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif',
				envmap_vertex:
					'#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif',
				fog_vertex: '#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif',
				fog_pars_vertex: '#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif',
				fog_fragment:
					'#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif',
				fog_pars_fragment:
					'#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif',
				gradientmap_pars_fragment:
					'#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}',
				lightmap_fragment:
					'#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif',
				lightmap_pars_fragment: '#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif',
				lights_lambert_vertex:
					'vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif',
				lights_pars_begin:
					'uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif',
				lights_toon_fragment: 'ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;',
				lights_toon_pars_fragment:
					'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)',
				lights_phong_fragment:
					'BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;',
				lights_phong_pars_fragment:
					'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)',
				lights_physical_fragment:
					'PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif',
				lights_physical_pars_fragment:
					'struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}',
				lights_fragment_begin:
					'\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif',
				lights_fragment_maps:
					'#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif',
				lights_fragment_end:
					'#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif',
				logdepthbuf_fragment:
					'#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif',
				logdepthbuf_pars_fragment:
					'#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif',
				logdepthbuf_pars_vertex:
					'#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif',
				logdepthbuf_vertex:
					'#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif',
				map_fragment: '#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif',
				map_pars_fragment: '#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif',
				map_particle_fragment:
					'#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif',
				map_particle_pars_fragment:
					'#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
				metalnessmap_fragment: 'float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif',
				metalnessmap_pars_fragment: '#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif',
				morphnormal_vertex:
					'#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif',
				morphtarget_pars_vertex:
					'#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif',
				morphtarget_vertex:
					'#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif',
				normal_fragment_begin:
					'#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;',
				normal_fragment_maps:
					'#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif',
				normalmap_pars_fragment:
					'#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif',
				clearcoat_normal_fragment_begin: '#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif',
				clearcoat_normal_fragment_maps:
					'#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif',
				clearcoat_pars_fragment:
					'#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif',
				packing:
					'vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}',
				premultiplied_alpha_fragment: '#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif',
				project_vertex:
					'vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;',
				dithering_fragment: '#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif',
				dithering_pars_fragment:
					'#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif',
				roughnessmap_fragment: 'float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif',
				roughnessmap_pars_fragment: '#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif',
				shadowmap_pars_fragment:
					'#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif',
				shadowmap_pars_vertex:
					'#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif',
				shadowmap_vertex:
					'#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif',
				shadowmask_pars_fragment:
					'float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}',
				skinbase_vertex:
					'#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif',
				skinning_pars_vertex:
					'#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif',
				skinning_vertex:
					'#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif',
				skinnormal_vertex:
					'#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif',
				specularmap_fragment:
					'float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif',
				specularmap_pars_fragment: '#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif',
				tonemapping_fragment: '#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif',
				tonemapping_pars_fragment:
					'#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }',
				transmissionmap_fragment: '#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif',
				transmissionmap_pars_fragment: '#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif',
				uv_pars_fragment: '#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif',
				uv_pars_vertex: '#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif',
				uv_vertex: '#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif',
				uv2_pars_fragment: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif',
				uv2_pars_vertex: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif',
				uv2_vertex: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif',
				worldpos_vertex:
					'#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif',
				background_frag:
					'uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
				background_vert: 'varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}',
				cube_frag:
					'#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
				cube_vert:
					'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}',
				depth_frag:
					'#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}',
				depth_vert:
					'#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}',
				distanceRGBA_frag:
					'#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}',
				distanceRGBA_vert:
					'#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}',
				equirect_frag:
					'uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
				equirect_vert:
					'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}',
				linedashed_frag:
					'uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}',
				linedashed_vert:
					'uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
				meshbasic_frag:
					'uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
				meshbasic_vert:
					'#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}',
				meshlambert_frag:
					'uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
				meshlambert_vert:
					'#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
				meshmatcap_frag:
					'#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
				meshmatcap_vert:
					'#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}',
				meshtoon_frag:
					'#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
				meshtoon_vert:
					'#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
				meshphong_frag:
					'#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
				meshphong_vert:
					'#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
				meshphysical_frag:
					'#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
				meshphysical_vert:
					'#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
				normal_frag:
					'#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}',
				normal_vert:
					'#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}',
				points_frag:
					'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}',
				points_vert:
					'uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}',
				shadow_frag:
					'uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
				shadow_vert:
					'#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
				sprite_frag:
					'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
				sprite_vert:
					'uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
			},
			zs = {
				common: {
					diffuse: {
						value: new bo(15658734),
					},
					opacity: {
						value: 1,
					},
					map: {
						value: null,
					},
					uvTransform: {
						value: new ji(),
					},
					uv2Transform: {
						value: new ji(),
					},
					alphaMap: {
						value: null,
					},
				},
				specularmap: {
					specularMap: {
						value: null,
					},
				},
				envmap: {
					envMap: {
						value: null,
					},
					flipEnvMap: {
						value: -1,
					},
					reflectivity: {
						value: 1,
					},
					refractionRatio: {
						value: 0.98,
					},
					maxMipLevel: {
						value: 0,
					},
				},
				aomap: {
					aoMap: {
						value: null,
					},
					aoMapIntensity: {
						value: 1,
					},
				},
				lightmap: {
					lightMap: {
						value: null,
					},
					lightMapIntensity: {
						value: 1,
					},
				},
				emissivemap: {
					emissiveMap: {
						value: null,
					},
				},
				bumpmap: {
					bumpMap: {
						value: null,
					},
					bumpScale: {
						value: 1,
					},
				},
				normalmap: {
					normalMap: {
						value: null,
					},
					normalScale: {
						value: new Vi(1, 1),
					},
				},
				displacementmap: {
					displacementMap: {
						value: null,
					},
					displacementScale: {
						value: 1,
					},
					displacementBias: {
						value: 0,
					},
				},
				roughnessmap: {
					roughnessMap: {
						value: null,
					},
				},
				metalnessmap: {
					metalnessMap: {
						value: null,
					},
				},
				gradientmap: {
					gradientMap: {
						value: null,
					},
				},
				fog: {
					fogDensity: {
						value: 25e-5,
					},
					fogNear: {
						value: 1,
					},
					fogFar: {
						value: 2e3,
					},
					fogColor: {
						value: new bo(16777215),
					},
				},
				lights: {
					ambientLightColor: {
						value: [],
					},
					lightProbe: {
						value: [],
					},
					directionalLights: {
						value: [],
						properties: {
							direction: {},
							color: {},
						},
					},
					directionalLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {},
						},
					},
					directionalShadowMap: {
						value: [],
					},
					directionalShadowMatrix: {
						value: [],
					},
					spotLights: {
						value: [],
						properties: {
							color: {},
							position: {},
							direction: {},
							distance: {},
							coneCos: {},
							penumbraCos: {},
							decay: {},
						},
					},
					spotLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {},
						},
					},
					spotShadowMap: {
						value: [],
					},
					spotShadowMatrix: {
						value: [],
					},
					pointLights: {
						value: [],
						properties: {
							color: {},
							position: {},
							decay: {},
							distance: {},
						},
					},
					pointLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {},
							shadowCameraNear: {},
							shadowCameraFar: {},
						},
					},
					pointShadowMap: {
						value: [],
					},
					pointShadowMatrix: {
						value: [],
					},
					hemisphereLights: {
						value: [],
						properties: {
							direction: {},
							skyColor: {},
							groundColor: {},
						},
					},
					rectAreaLights: {
						value: [],
						properties: {
							color: {},
							position: {},
							width: {},
							height: {},
						},
					},
					ltc_1: {
						value: null,
					},
					ltc_2: {
						value: null,
					},
				},
				points: {
					diffuse: {
						value: new bo(15658734),
					},
					opacity: {
						value: 1,
					},
					size: {
						value: 1,
					},
					scale: {
						value: 1,
					},
					map: {
						value: null,
					},
					alphaMap: {
						value: null,
					},
					uvTransform: {
						value: new ji(),
					},
				},
				sprite: {
					diffuse: {
						value: new bo(15658734),
					},
					opacity: {
						value: 1,
					},
					center: {
						value: new Vi(0.5, 0.5),
					},
					rotation: {
						value: 0,
					},
					map: {
						value: null,
					},
					alphaMap: {
						value: null,
					},
					uvTransform: {
						value: new ji(),
					},
				},
			},
			Bs = {
				basic: {
					uniforms: bs([zs.common, zs.specularmap, zs.envmap, zs.aomap, zs.lightmap, zs.fog]),
					vertexShader: Ns.meshbasic_vert,
					fragmentShader: Ns.meshbasic_frag,
				},
				lambert: {
					uniforms: bs([
						zs.common,
						zs.specularmap,
						zs.envmap,
						zs.aomap,
						zs.lightmap,
						zs.emissivemap,
						zs.fog,
						zs.lights,
						{
							emissive: {
								value: new bo(0),
							},
						},
					]),
					vertexShader: Ns.meshlambert_vert,
					fragmentShader: Ns.meshlambert_frag,
				},
				phong: {
					uniforms: bs([
						zs.common,
						zs.specularmap,
						zs.envmap,
						zs.aomap,
						zs.lightmap,
						zs.emissivemap,
						zs.bumpmap,
						zs.normalmap,
						zs.displacementmap,
						zs.fog,
						zs.lights,
						{
							emissive: {
								value: new bo(0),
							},
							specular: {
								value: new bo(1118481),
							},
							shininess: {
								value: 30,
							},
						},
					]),
					vertexShader: Ns.meshphong_vert,
					fragmentShader: Ns.meshphong_frag,
				},
				standard: {
					uniforms: bs([
						zs.common,
						zs.envmap,
						zs.aomap,
						zs.lightmap,
						zs.emissivemap,
						zs.bumpmap,
						zs.normalmap,
						zs.displacementmap,
						zs.roughnessmap,
						zs.metalnessmap,
						zs.fog,
						zs.lights,
						{
							emissive: {
								value: new bo(0),
							},
							roughness: {
								value: 1,
							},
							metalness: {
								value: 0,
							},
							envMapIntensity: {
								value: 1,
							},
						},
					]),
					vertexShader: Ns.meshphysical_vert,
					fragmentShader: Ns.meshphysical_frag,
				},
				toon: {
					uniforms: bs([
						zs.common,
						zs.aomap,
						zs.lightmap,
						zs.emissivemap,
						zs.bumpmap,
						zs.normalmap,
						zs.displacementmap,
						zs.gradientmap,
						zs.fog,
						zs.lights,
						{
							emissive: {
								value: new bo(0),
							},
						},
					]),
					vertexShader: Ns.meshtoon_vert,
					fragmentShader: Ns.meshtoon_frag,
				},
				matcap: {
					uniforms: bs([
						zs.common,
						zs.bumpmap,
						zs.normalmap,
						zs.displacementmap,
						zs.fog,
						{
							matcap: {
								value: null,
							},
						},
					]),
					vertexShader: Ns.meshmatcap_vert,
					fragmentShader: Ns.meshmatcap_frag,
				},
				points: {
					uniforms: bs([zs.points, zs.fog]),
					vertexShader: Ns.points_vert,
					fragmentShader: Ns.points_frag,
				},
				dashed: {
					uniforms: bs([
						zs.common,
						zs.fog,
						{
							scale: {
								value: 1,
							},
							dashSize: {
								value: 1,
							},
							totalSize: {
								value: 2,
							},
						},
					]),
					vertexShader: Ns.linedashed_vert,
					fragmentShader: Ns.linedashed_frag,
				},
				depth: {
					uniforms: bs([zs.common, zs.displacementmap]),
					vertexShader: Ns.depth_vert,
					fragmentShader: Ns.depth_frag,
				},
				normal: {
					uniforms: bs([
						zs.common,
						zs.bumpmap,
						zs.normalmap,
						zs.displacementmap,
						{
							opacity: {
								value: 1,
							},
						},
					]),
					vertexShader: Ns.normal_vert,
					fragmentShader: Ns.normal_frag,
				},
				sprite: {
					uniforms: bs([zs.sprite, zs.fog]),
					vertexShader: Ns.sprite_vert,
					fragmentShader: Ns.sprite_frag,
				},
				background: {
					uniforms: {
						uvTransform: {
							value: new ji(),
						},
						t2D: {
							value: null,
						},
					},
					vertexShader: Ns.background_vert,
					fragmentShader: Ns.background_frag,
				},
				cube: {
					uniforms: bs([
						zs.envmap,
						{
							opacity: {
								value: 1,
							},
						},
					]),
					vertexShader: Ns.cube_vert,
					fragmentShader: Ns.cube_frag,
				},
				equirect: {
					uniforms: {
						tEquirect: {
							value: null,
						},
					},
					vertexShader: Ns.equirect_vert,
					fragmentShader: Ns.equirect_frag,
				},
				distanceRGBA: {
					uniforms: bs([
						zs.common,
						zs.displacementmap,
						{
							referencePosition: {
								value: new $i(),
							},
							nearDistance: {
								value: 1,
							},
							farDistance: {
								value: 1e3,
							},
						},
					]),
					vertexShader: Ns.distanceRGBA_vert,
					fragmentShader: Ns.distanceRGBA_frag,
				},
				shadow: {
					uniforms: bs([
						zs.lights,
						zs.fog,
						{
							color: {
								value: new bo(0),
							},
							opacity: {
								value: 1,
							},
						},
					]),
					vertexShader: Ns.shadow_vert,
					fragmentShader: Ns.shadow_frag,
				},
			};
		function ks(t, e, n, i, r) {
			const o = new bo(0);
			let s,
				a,
				l = 0,
				c = null,
				h = 0,
				u = null;
			function d(t, e) {
				n.buffers.color.setClear(t.r, t.g, t.b, e, r);
			}
			return {
				getClearColor: function () {
					return o;
				},
				setClearColor: function (t, e) {
					o.set(t), (l = void 0 !== e ? e : 1), d(o, l);
				},
				getClearAlpha: function () {
					return l;
				},
				setClearAlpha: function (t) {
					(l = t), d(o, l);
				},
				render: function (n, r, p, f) {
					let m = !0 === r.isScene ? r.background : null;
					m && m.isTexture && (m = e.get(m));
					const g = t.xr,
						v = g.getSession && g.getSession();
					v && 'additive' === v.environmentBlendMode && (m = null),
						null === m ? d(o, l) : m && m.isColor && (d(m, 1), (f = !0)),
						(t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
						m && (m.isCubeTexture || m.isWebGLCubeRenderTarget || m.isWebGLCubeRenderTargetTexture || 306 === m.mapping)
							? (void 0 === a &&
									((a = new us(
										new xs(1, 1, 1),
										new Ms({
											name: 'BackgroundCubeMaterial',
											uniforms: _s(Bs.cube.uniforms),
											vertexShader: Bs.cube.vertexShader,
											fragmentShader: Bs.cube.fragmentShader,
											side: 1,
											depthTest: !1,
											depthWrite: !1,
											fog: !1,
										}),
									)),
									a.geometry.deleteAttribute('normal'),
									a.geometry.deleteAttribute('uv'),
									(a.onBeforeRender = function (t, e, n) {
										this.matrixWorld.copyPosition(n.matrixWorld);
									}),
									Object.defineProperty(a.material, 'envMap', {
										get: function () {
											return this.uniforms.envMap.value;
										},
									}),
									i.update(a)),
							  m.isWebGLCubeRenderTarget && (m = m.texture),
							  (a.material.uniforms.envMap.value = m),
							  (a.material.uniforms.flipEnvMap.value = m.isCubeTexture ? -1 : 1),
							  (c === m && h === m.version && u === t.toneMapping) || ((a.material.needsUpdate = !0), (c = m), (h = m.version), (u = t.toneMapping)),
							  n.unshift(a, a.geometry, a.material, 0, 0, null))
							: m &&
							  m.isTexture &&
							  (void 0 === s &&
									((s = new us(
										new Is(2, 2),
										new Ms({
											name: 'BackgroundMaterial',
											uniforms: _s(Bs.background.uniforms),
											vertexShader: Bs.background.vertexShader,
											fragmentShader: Bs.background.fragmentShader,
											side: 0,
											depthTest: !1,
											depthWrite: !1,
											fog: !1,
										}),
									)),
									s.geometry.deleteAttribute('normal'),
									Object.defineProperty(s.material, 'map', {
										get: function () {
											return this.uniforms.t2D.value;
										},
									}),
									i.update(s)),
							  (s.material.uniforms.t2D.value = m),
							  !0 === m.matrixAutoUpdate && m.updateMatrix(),
							  s.material.uniforms.uvTransform.value.copy(m.matrix),
							  (c === m && h === m.version && u === t.toneMapping) || ((s.material.needsUpdate = !0), (c = m), (h = m.version), (u = t.toneMapping)),
							  n.unshift(s, s.geometry, s.material, 0, 0, null));
				},
			};
		}
		function Fs(t, e, n, i) {
			const r = t.getParameter(34921),
				o = i.isWebGL2 ? null : e.get('OES_vertex_array_object'),
				s = i.isWebGL2 || null !== o,
				a = {},
				l = d(null);
			let c = l;
			function h(e) {
				return i.isWebGL2 ? t.bindVertexArray(e) : o.bindVertexArrayOES(e);
			}
			function u(e) {
				return i.isWebGL2 ? t.deleteVertexArray(e) : o.deleteVertexArrayOES(e);
			}
			function d(t) {
				const e = [],
					n = [],
					i = [];
				for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
				return {
					geometry: null,
					program: null,
					wireframe: !1,
					newAttributes: e,
					enabledAttributes: n,
					attributeDivisors: i,
					object: t,
					attributes: {},
					index: null,
				};
			}
			function p() {
				const t = c.newAttributes;
				for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
			}
			function f(t) {
				m(t, 0);
			}
			function m(n, r) {
				const o = c.newAttributes,
					s = c.enabledAttributes,
					a = c.attributeDivisors;
				if (((o[n] = 1), 0 === s[n] && (t.enableVertexAttribArray(n), (s[n] = 1)), a[n] !== r)) {
					(i.isWebGL2 ? t : e.get('ANGLE_instanced_arrays'))[i.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'](n, r), (a[n] = r);
				}
			}
			function g() {
				const e = c.newAttributes,
					n = c.enabledAttributes;
				for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
			}
			function v(e, n, r, o, s, a) {
				!0 !== i.isWebGL2 || (5124 !== r && 5125 !== r) ? t.vertexAttribPointer(e, n, r, o, s, a) : t.vertexAttribIPointer(e, n, r, s, a);
			}
			function y() {
				x(), c !== l && ((c = l), h(c.object));
			}
			function x() {
				(l.geometry = null), (l.program = null), (l.wireframe = !1);
			}
			return {
				setup: function (r, l, u, y, x) {
					let _ = !1;
					if (s) {
						const e = (function (e, n, r) {
							const s = !0 === r.wireframe;
							let l = a[e.id];
							void 0 === l && ((l = {}), (a[e.id] = l));
							let c = l[n.id];
							void 0 === c && ((c = {}), (l[n.id] = c));
							let h = c[s];
							void 0 === h && ((h = d(i.isWebGL2 ? t.createVertexArray() : o.createVertexArrayOES())), (c[s] = h));
							return h;
						})(y, u, l);
						c !== e && ((c = e), h(c.object)),
							(_ = (function (t, e) {
								const n = c.attributes,
									i = t.attributes;
								if (Object.keys(n).length !== Object.keys(i).length) return !0;
								for (const t in i) {
									const e = n[t],
										r = i[t];
									if (void 0 === e) return !0;
									if (e.attribute !== r) return !0;
									if (e.data !== r.data) return !0;
								}
								return c.index !== e;
							})(y, x)),
							_ &&
								(function (t, e) {
									const n = {},
										i = t.attributes;
									for (const t in i) {
										const e = i[t],
											r = {};
										(r.attribute = e), e.data && (r.data = e.data), (n[t] = r);
									}
									(c.attributes = n), (c.index = e);
								})(y, x);
					} else {
						const t = !0 === l.wireframe;
						(c.geometry === y.id && c.program === u.id && c.wireframe === t) || ((c.geometry = y.id), (c.program = u.id), (c.wireframe = t), (_ = !0));
					}
					!0 === r.isInstancedMesh && (_ = !0),
						null !== x && n.update(x, 34963),
						_ &&
							(!(function (r, o, s, a) {
								if (!1 === i.isWebGL2 && (r.isInstancedMesh || a.isInstancedBufferGeometry) && null === e.get('ANGLE_instanced_arrays')) return;
								p();
								const l = a.attributes,
									c = s.getAttributes(),
									h = o.defaultAttributeValues;
								for (const e in c) {
									const i = c[e];
									if (i >= 0) {
										const o = l[e];
										if (void 0 !== o) {
											const e = o.normalized,
												r = o.itemSize,
												s = n.get(o);
											if (void 0 === s) continue;
											const l = s.buffer,
												c = s.type,
												h = s.bytesPerElement;
											if (o.isInterleavedBufferAttribute) {
												const n = o.data,
													s = n.stride,
													u = o.offset;
												n && n.isInstancedInterleavedBuffer ? (m(i, n.meshPerAttribute), void 0 === a._maxInstanceCount && (a._maxInstanceCount = n.meshPerAttribute * n.count)) : f(i),
													t.bindBuffer(34962, l),
													v(i, r, c, e, s * h, u * h);
											} else
												o.isInstancedBufferAttribute ? (m(i, o.meshPerAttribute), void 0 === a._maxInstanceCount && (a._maxInstanceCount = o.meshPerAttribute * o.count)) : f(i),
													t.bindBuffer(34962, l),
													v(i, r, c, e, 0, 0);
										} else if ('instanceMatrix' === e) {
											const e = n.get(r.instanceMatrix);
											if (void 0 === e) continue;
											const o = e.buffer,
												s = e.type;
											m(i + 0, 1),
												m(i + 1, 1),
												m(i + 2, 1),
												m(i + 3, 1),
												t.bindBuffer(34962, o),
												t.vertexAttribPointer(i + 0, 4, s, !1, 64, 0),
												t.vertexAttribPointer(i + 1, 4, s, !1, 64, 16),
												t.vertexAttribPointer(i + 2, 4, s, !1, 64, 32),
												t.vertexAttribPointer(i + 3, 4, s, !1, 64, 48);
										} else if ('instanceColor' === e) {
											const e = n.get(r.instanceColor);
											if (void 0 === e) continue;
											const o = e.buffer,
												s = e.type;
											m(i, 1), t.bindBuffer(34962, o), t.vertexAttribPointer(i, 3, s, !1, 12, 0);
										} else if (void 0 !== h) {
											const n = h[e];
											if (void 0 !== n)
												switch (n.length) {
													case 2:
														t.vertexAttrib2fv(i, n);
														break;
													case 3:
														t.vertexAttrib3fv(i, n);
														break;
													case 4:
														t.vertexAttrib4fv(i, n);
														break;
													default:
														t.vertexAttrib1fv(i, n);
												}
										}
									}
								}
								g();
							})(r, l, u, y),
							null !== x && t.bindBuffer(34963, n.get(x).buffer));
				},
				reset: y,
				resetDefaultState: x,
				dispose: function () {
					y();
					for (const t in a) {
						const e = a[t];
						for (const t in e) {
							const n = e[t];
							for (const t in n) u(n[t].object), delete n[t];
							delete e[t];
						}
						delete a[t];
					}
				},
				releaseStatesOfGeometry: function (t) {
					if (void 0 === a[t.id]) return;
					const e = a[t.id];
					for (const t in e) {
						const n = e[t];
						for (const t in n) u(n[t].object), delete n[t];
						delete e[t];
					}
					delete a[t.id];
				},
				releaseStatesOfProgram: function (t) {
					for (const e in a) {
						const n = a[e];
						if (void 0 === n[t.id]) continue;
						const i = n[t.id];
						for (const t in i) u(i[t].object), delete i[t];
						delete n[t.id];
					}
				},
				initAttributes: p,
				enableAttribute: f,
				disableUnusedAttributes: g,
			};
		}
		function Us(t, e, n, i) {
			const r = i.isWebGL2;
			let o;
			(this.setMode = function (t) {
				o = t;
			}),
				(this.render = function (e, i) {
					t.drawArrays(o, e, i), n.update(i, o, 1);
				}),
				(this.renderInstances = function (i, s, a) {
					if (0 === a) return;
					let l, c;
					if (r) (l = t), (c = 'drawArraysInstanced');
					else if (((l = e.get('ANGLE_instanced_arrays')), (c = 'drawArraysInstancedANGLE'), null === l))
						return void console.error('THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
					l[c](o, i, s, a), n.update(s, o, a);
				});
		}
		function Hs(t, e, n) {
			let i;
			function r(e) {
				if ('highp' === e) {
					if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return 'highp';
					e = 'mediump';
				}
				return 'mediump' === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? 'mediump' : 'lowp';
			}
			const o =
				('undefined' != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext) || ('undefined' != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext);
			let s = void 0 !== n.precision ? n.precision : 'highp';
			const a = r(s);
			a !== s && (console.warn('THREE.WebGLRenderer:', s, 'not supported, using', a, 'instead.'), (s = a));
			const l = !0 === n.logarithmicDepthBuffer,
				c = t.getParameter(34930),
				h = t.getParameter(35660),
				u = t.getParameter(3379),
				d = t.getParameter(34076),
				p = t.getParameter(34921),
				f = t.getParameter(36347),
				m = t.getParameter(36348),
				g = t.getParameter(36349),
				v = h > 0,
				y = o || !!e.get('OES_texture_float');
			return {
				isWebGL2: o,
				getMaxAnisotropy: function () {
					if (void 0 !== i) return i;
					const n = e.get('EXT_texture_filter_anisotropic');
					return (i = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0), i;
				},
				getMaxPrecision: r,
				precision: s,
				logarithmicDepthBuffer: l,
				maxTextures: c,
				maxVertexTextures: h,
				maxTextureSize: u,
				maxCubemapSize: d,
				maxAttributes: p,
				maxVertexUniforms: f,
				maxVaryings: m,
				maxFragmentUniforms: g,
				vertexTextures: v,
				floatFragmentTextures: y,
				floatVertexTextures: v && y,
				maxSamples: o ? t.getParameter(36183) : 0,
			};
		}
		function Gs(t) {
			const e = this;
			let n = null,
				i = 0,
				r = !1,
				o = !1;
			const s = new no(),
				a = new ji(),
				l = {
					value: null,
					needsUpdate: !1,
				};
			function c() {
				l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)), (e.numPlanes = i), (e.numIntersection = 0);
			}
			function h(t, n, i, r) {
				const o = null !== t ? t.length : 0;
				let c = null;
				if (0 !== o) {
					if (((c = l.value), !0 !== r || null === c)) {
						const e = i + 4 * o,
							r = n.matrixWorldInverse;
						a.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
						for (let e = 0, n = i; e !== o; ++e, n += 4) s.copy(t[e]).applyMatrix4(r, a), s.normal.toArray(c, n), (c[n + 3] = s.constant);
					}
					(l.value = c), (l.needsUpdate = !0);
				}
				return (e.numPlanes = o), (e.numIntersection = 0), c;
			}
			(this.uniform = l),
				(this.numPlanes = 0),
				(this.numIntersection = 0),
				(this.init = function (t, e, o) {
					const s = 0 !== t.length || e || 0 !== i || r;
					return (r = e), (n = h(t, o, 0)), (i = t.length), s;
				}),
				(this.beginShadows = function () {
					(o = !0), h(null);
				}),
				(this.endShadows = function () {
					(o = !1), c();
				}),
				(this.setState = function (e, s, a) {
					const u = e.clippingPlanes,
						d = e.clipIntersection,
						p = e.clipShadows,
						f = t.get(e);
					if (!r || null === u || 0 === u.length || (o && !p)) o ? h(null) : c();
					else {
						const t = o ? 0 : i,
							e = 4 * t;
						let r = f.clippingState || null;
						(l.value = r), (r = h(u, s, e, a));
						for (let t = 0; t !== e; ++t) r[t] = n[t];
						(f.clippingState = r), (this.numIntersection = d ? this.numPlanes : 0), (this.numPlanes += t);
					}
				});
		}
		function Vs(t) {
			let e = new WeakMap();
			function n(t, e) {
				return 303 === e ? (t.mapping = 301) : 304 === e && (t.mapping = 302), t;
			}
			return {
				get: function (i) {
					if (i && i.isTexture) {
						const r = i.mapping;
						if (303 === r || 304 === r) {
							if (e.has(i)) {
								return n(e.get(i).texture, i.mapping);
							}
							{
								const r = i.image;
								if (r && r.height > 0) {
									const o = t.getRenderList(),
										s = t.getRenderTarget(),
										a = t.getRenderState(),
										l = new As(r.height / 2);
									return l.fromEquirectangularTexture(t, i), e.set(i, l), t.setRenderTarget(s), t.setRenderList(o), t.setRenderState(a), n(l.texture, i.mapping);
								}
								return null;
							}
						}
					}
					return i;
				},
				dispose: function () {
					e = new WeakMap();
				},
			};
		}
		function js(t) {
			const e = {};
			return {
				has: function (n) {
					if (void 0 !== e[n]) return null !== e[n];
					let i;
					switch (n) {
						case 'WEBGL_depth_texture':
							i = t.getExtension('WEBGL_depth_texture') || t.getExtension('MOZ_WEBGL_depth_texture') || t.getExtension('WEBKIT_WEBGL_depth_texture');
							break;
						case 'EXT_texture_filter_anisotropic':
							i = t.getExtension('EXT_texture_filter_anisotropic') || t.getExtension('MOZ_EXT_texture_filter_anisotropic') || t.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
							break;
						case 'WEBGL_compressed_texture_s3tc':
							i = t.getExtension('WEBGL_compressed_texture_s3tc') || t.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || t.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
							break;
						case 'WEBGL_compressed_texture_pvrtc':
							i = t.getExtension('WEBGL_compressed_texture_pvrtc') || t.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
							break;
						default:
							i = t.getExtension(n);
					}
					return (e[n] = i), null !== i;
				},
				get: function (t) {
					return this.has(t) || console.warn('THREE.WebGLRenderer: ' + t + ' extension not supported.'), e[t];
				},
			};
		}
		function Ws(t, e, n, i) {
			const r = new WeakMap(),
				o = new WeakMap();
			function s(t) {
				const a = t.target,
					l = r.get(a);
				null !== l.index && e.remove(l.index);
				for (const t in l.attributes) e.remove(l.attributes[t]);
				a.removeEventListener('dispose', s), r.delete(a);
				const c = o.get(l);
				c && (e.remove(c), o.delete(l)), i.releaseStatesOfGeometry(a), !0 === a.isInstancedBufferGeometry && delete a._maxInstanceCount, n.memory.geometries--;
			}
			function a(t) {
				const n = [],
					i = t.index,
					r = t.attributes.position;
				let s = 0;
				if (null !== i) {
					const t = i.array;
					s = i.version;
					for (let e = 0, i = t.length; e < i; e += 3) {
						const i = t[e + 0],
							r = t[e + 1],
							o = t[e + 2];
						n.push(i, r, r, o, o, i);
					}
				} else {
					const t = r.array;
					s = r.version;
					for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
						const t = e + 0,
							i = e + 1,
							r = e + 2;
						n.push(t, i, i, r, r, t);
					}
				}
				const a = new (Fo(n) > 65535 ? No : Do)(n, 1);
				a.version = s;
				const l = o.get(t);
				l && e.remove(l), o.set(t, a);
			}
			return {
				get: function (t, e) {
					let i = r.get(e);
					return (
						i ||
						(e.addEventListener('dispose', s),
						e.isBufferGeometry ? (i = e) : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = new Xo().setFromObject(t)), (i = e._bufferGeometry)),
						r.set(e, i),
						n.memory.geometries++,
						i)
					);
				},
				update: function (t) {
					const n = t.attributes;
					for (const t in n) e.update(n[t], 34962);
					const i = t.morphAttributes;
					for (const t in i) {
						const n = i[t];
						for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962);
					}
				},
				getWireframeAttribute: function (t) {
					const e = o.get(t);
					if (e) {
						const n = t.index;
						null !== n && e.version < n.version && a(t);
					} else a(t);
					return o.get(t);
				},
			};
		}
		function qs(t, e, n, i) {
			const r = i.isWebGL2;
			let o, s, a;
			(this.setMode = function (t) {
				o = t;
			}),
				(this.setIndex = function (t) {
					(s = t.type), (a = t.bytesPerElement);
				}),
				(this.render = function (e, i) {
					t.drawElements(o, i, s, e * a), n.update(i, o, 1);
				}),
				(this.renderInstances = function (i, l, c) {
					if (0 === c) return;
					let h, u;
					if (r) (h = t), (u = 'drawElementsInstanced');
					else if (((h = e.get('ANGLE_instanced_arrays')), (u = 'drawElementsInstancedANGLE'), null === h))
						return void console.error('THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
					h[u](o, l, s, i * a, c), n.update(l, o, c);
				});
		}
		function Xs(t) {
			const e = {
				frame: 0,
				calls: 0,
				triangles: 0,
				points: 0,
				lines: 0,
			};
			return {
				memory: {
					geometries: 0,
					textures: 0,
				},
				render: e,
				programs: null,
				autoReset: !0,
				reset: function () {
					e.frame++, (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
				},
				update: function (t, n, i) {
					switch ((e.calls++, n)) {
						case 4:
							e.triangles += i * (t / 3);
							break;
						case 1:
							e.lines += i * (t / 2);
							break;
						case 3:
							e.lines += i * (t - 1);
							break;
						case 2:
							e.lines += i * t;
							break;
						case 0:
							e.points += i * t;
							break;
						default:
							console.error('THREE.WebGLInfo: Unknown draw mode:', n);
					}
				},
			};
		}
		function Ys(t, e) {
			return t[0] - e[0];
		}
		function Zs(t, e) {
			return Math.abs(e[1]) - Math.abs(t[1]);
		}
		function Js(t) {
			const e = {},
				n = new Float32Array(8),
				i = [];
			for (let t = 0; t < 8; t++) i[t] = [t, 0];
			return {
				update: function (r, o, s, a) {
					const l = r.morphTargetInfluences,
						c = void 0 === l ? 0 : l.length;
					let h = e[o.id];
					if (void 0 === h) {
						h = [];
						for (let t = 0; t < c; t++) h[t] = [t, 0];
						e[o.id] = h;
					}
					for (let t = 0; t < c; t++) {
						const e = h[t];
						(e[0] = t), (e[1] = l[t]);
					}
					h.sort(Zs);
					for (let t = 0; t < 8; t++) t < c && h[t][1] ? ((i[t][0] = h[t][0]), (i[t][1] = h[t][1])) : ((i[t][0] = Number.MAX_SAFE_INTEGER), (i[t][1] = 0));
					i.sort(Ys);
					const u = s.morphTargets && o.morphAttributes.position,
						d = s.morphNormals && o.morphAttributes.normal;
					let p = 0;
					for (let t = 0; t < 8; t++) {
						const e = i[t],
							r = e[0],
							s = e[1];
						r !== Number.MAX_SAFE_INTEGER && s
							? (u && o.getAttribute('morphTarget' + t) !== u[r] && o.setAttribute('morphTarget' + t, u[r]),
							  d && o.getAttribute('morphNormal' + t) !== d[r] && o.setAttribute('morphNormal' + t, d[r]),
							  (n[t] = s),
							  (p += s))
							: (u && void 0 !== o.getAttribute('morphTarget' + t) && o.deleteAttribute('morphTarget' + t),
							  d && void 0 !== o.getAttribute('morphNormal' + t) && o.deleteAttribute('morphNormal' + t),
							  (n[t] = 0));
					}
					const f = o.morphTargetsRelative ? 1 : 1 - p;
					a.getUniforms().setValue(t, 'morphTargetBaseInfluence', f), a.getUniforms().setValue(t, 'morphTargetInfluences', n);
				},
			};
		}
		function Ks(t, e, n, i) {
			let r = new WeakMap();
			return {
				update: function (t) {
					const o = i.render.frame,
						s = t.geometry,
						a = e.get(t, s);
					return (
						r.get(a) !== o && (s.isGeometry && a.updateFromObject(t), e.update(a), r.set(a, o)),
						t.isInstancedMesh && (n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)),
						a
					);
				},
				dispose: function () {
					r = new WeakMap();
				},
			};
		}
		function Qs(t, e, n, i, r, o, s, a, l, c) {
			(t = void 0 !== t ? t : []), (e = void 0 !== e ? e : 301), (s = void 0 !== s ? s : 1022), Yi.call(this, t, e, n, i, r, o, s, a, l, c), (this.flipY = !1);
		}
		function $s(t, e, n, i) {
			Yi.call(this, null),
				(this.image = {
					data: t || null,
					width: e || 1,
					height: n || 1,
					depth: i || 1,
				}),
				(this.magFilter = 1003),
				(this.minFilter = 1003),
				(this.wrapR = 1001),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.needsUpdate = !0);
		}
		function ta(t, e, n, i) {
			Yi.call(this, null),
				(this.image = {
					data: t || null,
					width: e || 1,
					height: n || 1,
					depth: i || 1,
				}),
				(this.magFilter = 1003),
				(this.minFilter = 1003),
				(this.wrapR = 1001),
				(this.generateMipmaps = !1),
				(this.flipY = !1),
				(this.needsUpdate = !0);
		}
		(Bs.physical = {
			uniforms: bs([
				Bs.standard.uniforms,
				{
					clearcoat: {
						value: 0,
					},
					clearcoatMap: {
						value: null,
					},
					clearcoatRoughness: {
						value: 0,
					},
					clearcoatRoughnessMap: {
						value: null,
					},
					clearcoatNormalScale: {
						value: new Vi(1, 1),
					},
					clearcoatNormalMap: {
						value: null,
					},
					sheen: {
						value: new bo(0),
					},
					transmission: {
						value: 0,
					},
					transmissionMap: {
						value: null,
					},
				},
			]),
			vertexShader: Ns.meshphysical_vert,
			fragmentShader: Ns.meshphysical_frag,
		}),
			(Qs.prototype = Object.create(Yi.prototype)),
			(Qs.prototype.constructor = Qs),
			(Qs.prototype.isCubeTexture = !0),
			Object.defineProperty(Qs.prototype, 'images', {
				get: function () {
					return this.image;
				},
				set: function (t) {
					this.image = t;
				},
			}),
			($s.prototype = Object.create(Yi.prototype)),
			($s.prototype.constructor = $s),
			($s.prototype.isDataTexture2DArray = !0),
			(ta.prototype = Object.create(Yi.prototype)),
			(ta.prototype.constructor = ta),
			(ta.prototype.isDataTexture3D = !0);
		const ea = new Yi(),
			na = new $s(),
			ia = new ta(),
			ra = new Qs(),
			oa = [],
			sa = [],
			aa = new Float32Array(16),
			la = new Float32Array(9),
			ca = new Float32Array(4);
		function ha(t, e, n) {
			const i = t[0];
			if (i <= 0 || i > 0) return t;
			const r = e * n;
			let o = oa[r];
			if ((void 0 === o && ((o = new Float32Array(r)), (oa[r] = o)), 0 !== e)) {
				i.toArray(o, 0);
				for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(o, r);
			}
			return o;
		}
		function ua(t, e) {
			if (t.length !== e.length) return !1;
			for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
			return !0;
		}
		function da(t, e) {
			for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
		}
		function pa(t, e) {
			let n = sa[e];
			void 0 === n && ((n = new Int32Array(e)), (sa[e] = n));
			for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
			return n;
		}
		function fa(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
		}
		function ma(t, e) {
			const n = this.cache;
			if (void 0 !== e.x) (n[0] === e.x && n[1] === e.y) || (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
			else {
				if (ua(n, e)) return;
				t.uniform2fv(this.addr, e), da(n, e);
			}
		}
		function ga(t, e) {
			const n = this.cache;
			if (void 0 !== e.x) (n[0] === e.x && n[1] === e.y && n[2] === e.z) || (t.uniform3f(this.addr, e.x, e.y, e.z), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z));
			else if (void 0 !== e.r) (n[0] === e.r && n[1] === e.g && n[2] === e.b) || (t.uniform3f(this.addr, e.r, e.g, e.b), (n[0] = e.r), (n[1] = e.g), (n[2] = e.b));
			else {
				if (ua(n, e)) return;
				t.uniform3fv(this.addr, e), da(n, e);
			}
		}
		function va(t, e) {
			const n = this.cache;
			if (void 0 !== e.x) (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z), (n[3] = e.w));
			else {
				if (ua(n, e)) return;
				t.uniform4fv(this.addr, e), da(n, e);
			}
		}
		function ya(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (ua(n, e)) return;
				t.uniformMatrix2fv(this.addr, !1, e), da(n, e);
			} else {
				if (ua(n, i)) return;
				ca.set(i), t.uniformMatrix2fv(this.addr, !1, ca), da(n, i);
			}
		}
		function xa(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (ua(n, e)) return;
				t.uniformMatrix3fv(this.addr, !1, e), da(n, e);
			} else {
				if (ua(n, i)) return;
				la.set(i), t.uniformMatrix3fv(this.addr, !1, la), da(n, i);
			}
		}
		function _a(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (ua(n, e)) return;
				t.uniformMatrix4fv(this.addr, !1, e), da(n, e);
			} else {
				if (ua(n, i)) return;
				aa.set(i), t.uniformMatrix4fv(this.addr, !1, aa), da(n, i);
			}
		}
		function ba(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.safeSetTexture2D(e || ea, r);
		}
		function wa(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture2DArray(e || na, r);
		}
		function Ma(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture3D(e || ia, r);
		}
		function Sa(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.safeSetTextureCube(e || ra, r);
		}
		function Ta(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
		}
		function Ea(t, e) {
			const n = this.cache;
			ua(n, e) || (t.uniform2iv(this.addr, e), da(n, e));
		}
		function Aa(t, e) {
			const n = this.cache;
			ua(n, e) || (t.uniform3iv(this.addr, e), da(n, e));
		}
		function La(t, e) {
			const n = this.cache;
			ua(n, e) || (t.uniform4iv(this.addr, e), da(n, e));
		}
		function Ra(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
		}
		function Pa(t, e) {
			t.uniform1fv(this.addr, e);
		}
		function Ca(t, e) {
			t.uniform1iv(this.addr, e);
		}
		function Oa(t, e) {
			t.uniform2iv(this.addr, e);
		}
		function Da(t, e) {
			t.uniform3iv(this.addr, e);
		}
		function Ia(t, e) {
			t.uniform4iv(this.addr, e);
		}
		function Na(t, e) {
			const n = ha(e, this.size, 2);
			t.uniform2fv(this.addr, n);
		}
		function za(t, e) {
			const n = ha(e, this.size, 3);
			t.uniform3fv(this.addr, n);
		}
		function Ba(t, e) {
			const n = ha(e, this.size, 4);
			t.uniform4fv(this.addr, n);
		}
		function ka(t, e) {
			const n = ha(e, this.size, 4);
			t.uniformMatrix2fv(this.addr, !1, n);
		}
		function Fa(t, e) {
			const n = ha(e, this.size, 9);
			t.uniformMatrix3fv(this.addr, !1, n);
		}
		function Ua(t, e) {
			const n = ha(e, this.size, 16);
			t.uniformMatrix4fv(this.addr, !1, n);
		}
		function Ha(t, e, n) {
			const i = e.length,
				r = pa(n, i);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== i; ++t) n.safeSetTexture2D(e[t] || ea, r[t]);
		}
		function Ga(t, e, n) {
			const i = e.length,
				r = pa(n, i);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== i; ++t) n.safeSetTextureCube(e[t] || ra, r[t]);
		}
		function Va(t, e, n) {
			(this.id = t),
				(this.addr = n),
				(this.cache = []),
				(this.setValue = (function (t) {
					switch (t) {
						case 5126:
							return fa;
						case 35664:
							return ma;
						case 35665:
							return ga;
						case 35666:
							return va;
						case 35674:
							return ya;
						case 35675:
							return xa;
						case 35676:
							return _a;
						case 5124:
						case 35670:
							return Ta;
						case 35667:
						case 35671:
							return Ea;
						case 35668:
						case 35672:
							return Aa;
						case 35669:
						case 35673:
							return La;
						case 5125:
							return Ra;
						case 35678:
						case 36198:
						case 36298:
						case 36306:
						case 35682:
							return ba;
						case 35679:
						case 36299:
						case 36307:
							return Ma;
						case 35680:
						case 36300:
						case 36308:
						case 36293:
							return Sa;
						case 36289:
						case 36303:
						case 36311:
						case 36292:
							return wa;
					}
				})(e.type));
		}
		function ja(t, e, n) {
			(this.id = t),
				(this.addr = n),
				(this.cache = []),
				(this.size = e.size),
				(this.setValue = (function (t) {
					switch (t) {
						case 5126:
							return Pa;
						case 35664:
							return Na;
						case 35665:
							return za;
						case 35666:
							return Ba;
						case 35674:
							return ka;
						case 35675:
							return Fa;
						case 35676:
							return Ua;
						case 5124:
						case 35670:
							return Ca;
						case 35667:
						case 35671:
							return Oa;
						case 35668:
						case 35672:
							return Da;
						case 35669:
						case 35673:
							return Ia;
						case 35678:
						case 36198:
						case 36298:
						case 36306:
						case 35682:
							return Ha;
						case 35680:
						case 36300:
						case 36308:
						case 36293:
							return Ga;
					}
				})(e.type));
		}
		function Wa(t) {
			(this.id = t), (this.seq = []), (this.map = {});
		}
		(ja.prototype.updateCache = function (t) {
			const e = this.cache;
			t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), da(e, t);
		}),
			(Wa.prototype.setValue = function (t, e, n) {
				const i = this.seq;
				for (let r = 0, o = i.length; r !== o; ++r) {
					const o = i[r];
					o.setValue(t, e[o.id], n);
				}
			});
		const qa = /([\w\d_]+)(\])?(\[|\.)?/g;
		function Xa(t, e) {
			t.seq.push(e), (t.map[e.id] = e);
		}
		function Ya(t, e, n) {
			const i = t.name,
				r = i.length;
			for (qa.lastIndex = 0; ; ) {
				const o = qa.exec(i),
					s = qa.lastIndex;
				let a = o[1];
				const l = ']' === o[2],
					c = o[3];
				if ((l && (a |= 0), void 0 === c || ('[' === c && s + 2 === r))) {
					Xa(n, void 0 === c ? new Va(a, t, e) : new ja(a, t, e));
					break;
				}
				{
					let t = n.map[a];
					void 0 === t && ((t = new Wa(a)), Xa(n, t)), (n = t);
				}
			}
		}
		function Za(t, e) {
			(this.seq = []), (this.map = {});
			const n = t.getProgramParameter(e, 35718);
			for (let i = 0; i < n; ++i) {
				const n = t.getActiveUniform(e, i);
				Ya(n, t.getUniformLocation(e, n.name), this);
			}
		}
		function Ja(t, e, n) {
			const i = t.createShader(e);
			return t.shaderSource(i, n), t.compileShader(i), i;
		}
		(Za.prototype.setValue = function (t, e, n, i) {
			const r = this.map[e];
			void 0 !== r && r.setValue(t, n, i);
		}),
			(Za.prototype.setOptional = function (t, e, n) {
				const i = e[n];
				void 0 !== i && this.setValue(t, n, i);
			}),
			(Za.upload = function (t, e, n, i) {
				for (let r = 0, o = e.length; r !== o; ++r) {
					const o = e[r],
						s = n[o.id];
					!1 !== s.needsUpdate && o.setValue(t, s.value, i);
				}
			}),
			(Za.seqWithValue = function (t, e) {
				const n = [];
				for (let i = 0, r = t.length; i !== r; ++i) {
					const r = t[i];
					r.id in e && n.push(r);
				}
				return n;
			});
		let Ka = 0;
		function Qa(t) {
			switch (t) {
				case 3e3:
					return ['Linear', '( value )'];
				case 3001:
					return ['sRGB', '( value )'];
				case 3002:
					return ['RGBE', '( value )'];
				case 3004:
					return ['RGBM', '( value, 7.0 )'];
				case 3005:
					return ['RGBM', '( value, 16.0 )'];
				case 3006:
					return ['RGBD', '( value, 256.0 )'];
				case 3007:
					return ['Gamma', '( value, float( GAMMA_FACTOR ) )'];
				case 3003:
					return ['LogLuv', '( value )'];
				default:
					return console.warn('THREE.WebGLProgram: Unsupported encoding:', t), ['Linear', '( value )'];
			}
		}
		function $a(t, e, n) {
			const i = t.getShaderParameter(e, 35713),
				r = t.getShaderInfoLog(e).trim();
			if (i && '' === r) return '';
			return (
				'THREE.WebGLShader: gl.getShaderInfoLog() ' +
				n +
				'\n' +
				r +
				(function (t) {
					const e = t.split('\n');
					for (let t = 0; t < e.length; t++) e[t] = t + 1 + ': ' + e[t];
					return e.join('\n');
				})(t.getShaderSource(e))
			);
		}
		function tl(t, e) {
			const n = Qa(e);
			return 'vec4 ' + t + '( vec4 value ) { return ' + n[0] + 'ToLinear' + n[1] + '; }';
		}
		function el(t, e) {
			const n = Qa(e);
			return 'vec4 ' + t + '( vec4 value ) { return LinearTo' + n[0] + n[1] + '; }';
		}
		function nl(t, e) {
			let n;
			switch (e) {
				case 1:
					n = 'Linear';
					break;
				case 2:
					n = 'Reinhard';
					break;
				case 3:
					n = 'OptimizedCineon';
					break;
				case 4:
					n = 'ACESFilmic';
					break;
				case 5:
					n = 'Custom';
					break;
				default:
					console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e), (n = 'Linear');
			}
			return 'vec3 ' + t + '( vec3 color ) { return ' + n + 'ToneMapping( color ); }';
		}
		function il(t) {
			return '' !== t;
		}
		function rl(t, e) {
			return t
				.replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
				.replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
				.replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
				.replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
				.replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
				.replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
				.replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
				.replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
		}
		function ol(t, e) {
			return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
		}
		const sl = /^[ \t]*#include +<([\w\d./]+)>/gm;
		function al(t) {
			return t.replace(sl, ll);
		}
		function ll(t, e) {
			const n = Ns[e];
			if (void 0 === n) throw new Error('Can not resolve #include <' + e + '>');
			return al(n);
		}
		const cl = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
			hl = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
		function ul(t) {
			return t.replace(hl, pl).replace(cl, dl);
		}
		function dl(t, e, n, i) {
			return console.warn('WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.'), pl(t, e, n, i);
		}
		function pl(t, e, n, i) {
			let r = '';
			for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, '[ ' + t + ' ]').replace(/UNROLLED_LOOP_INDEX/g, t);
			return r;
		}
		function fl(t) {
			let e = 'precision ' + t.precision + ' float;\nprecision ' + t.precision + ' int;';
			return (
				'highp' === t.precision ? (e += '\n#define HIGH_PRECISION') : 'mediump' === t.precision ? (e += '\n#define MEDIUM_PRECISION') : 'lowp' === t.precision && (e += '\n#define LOW_PRECISION'), e
			);
		}
		function ml(t, e, n, i) {
			const r = t.getContext(),
				o = n.defines;
			let s = n.vertexShader,
				a = n.fragmentShader;
			const l = (function (t) {
					let e = 'SHADOWMAP_TYPE_BASIC';
					return 1 === t.shadowMapType ? (e = 'SHADOWMAP_TYPE_PCF') : 2 === t.shadowMapType ? (e = 'SHADOWMAP_TYPE_PCF_SOFT') : 3 === t.shadowMapType && (e = 'SHADOWMAP_TYPE_VSM'), e;
				})(n),
				c = (function (t) {
					let e = 'ENVMAP_TYPE_CUBE';
					if (t.envMap)
						switch (t.envMapMode) {
							case 301:
							case 302:
								e = 'ENVMAP_TYPE_CUBE';
								break;
							case 306:
							case 307:
								e = 'ENVMAP_TYPE_CUBE_UV';
						}
					return e;
				})(n),
				h = (function (t) {
					let e = 'ENVMAP_MODE_REFLECTION';
					if (t.envMap)
						switch (t.envMapMode) {
							case 302:
							case 307:
								e = 'ENVMAP_MODE_REFRACTION';
						}
					return e;
				})(n),
				u = (function (t) {
					let e = 'ENVMAP_BLENDING_NONE';
					if (t.envMap)
						switch (t.combine) {
							case 0:
								e = 'ENVMAP_BLENDING_MULTIPLY';
								break;
							case 1:
								e = 'ENVMAP_BLENDING_MIX';
								break;
							case 2:
								e = 'ENVMAP_BLENDING_ADD';
						}
					return e;
				})(n),
				d = t.gammaFactor > 0 ? t.gammaFactor : 1,
				p = n.isWebGL2
					? ''
					: (function (t) {
							return [
								t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || 'physical' === t.shaderID
									? '#extension GL_OES_standard_derivatives : enable'
									: '',
								(t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? '#extension GL_EXT_frag_depth : enable' : '',
								t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? '#extension GL_EXT_draw_buffers : require' : '',
								(t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? '#extension GL_EXT_shader_texture_lod : enable' : '',
							]
								.filter(il)
								.join('\n');
					  })(n),
				f = (function (t) {
					const e = [];
					for (const n in t) {
						const i = t[n];
						!1 !== i && e.push('#define ' + n + ' ' + i);
					}
					return e.join('\n');
				})(o),
				m = r.createProgram();
			let g,
				v,
				y = n.glslVersion ? '#version ' + n.glslVersion + '\n' : '';
			n.isRawShaderMaterial
				? ((g = [f].filter(il).join('\n')), g.length > 0 && (g += '\n'), (v = [p, f].filter(il).join('\n')), v.length > 0 && (v += '\n'))
				: ((g = [
						fl(n),
						'#define SHADER_NAME ' + n.shaderName,
						f,
						n.instancing ? '#define USE_INSTANCING' : '',
						n.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
						n.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
						'#define GAMMA_FACTOR ' + d,
						'#define MAX_BONES ' + n.maxBones,
						n.useFog && n.fog ? '#define USE_FOG' : '',
						n.useFog && n.fogExp2 ? '#define FOG_EXP2' : '',
						n.map ? '#define USE_MAP' : '',
						n.envMap ? '#define USE_ENVMAP' : '',
						n.envMap ? '#define ' + h : '',
						n.lightMap ? '#define USE_LIGHTMAP' : '',
						n.aoMap ? '#define USE_AOMAP' : '',
						n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
						n.bumpMap ? '#define USE_BUMPMAP' : '',
						n.normalMap ? '#define USE_NORMALMAP' : '',
						n.normalMap && n.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '',
						n.normalMap && n.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '',
						n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
						n.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
						n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
						n.displacementMap && n.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '',
						n.specularMap ? '#define USE_SPECULARMAP' : '',
						n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
						n.metalnessMap ? '#define USE_METALNESSMAP' : '',
						n.alphaMap ? '#define USE_ALPHAMAP' : '',
						n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
						n.vertexTangents ? '#define USE_TANGENT' : '',
						n.vertexColors ? '#define USE_COLOR' : '',
						n.vertexUvs ? '#define USE_UV' : '',
						n.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
						n.flatShading ? '#define FLAT_SHADED' : '',
						n.skinning ? '#define USE_SKINNING' : '',
						n.useVertexTexture ? '#define BONE_TEXTURE' : '',
						n.morphTargets ? '#define USE_MORPHTARGETS' : '',
						n.morphNormals && !1 === n.flatShading ? '#define USE_MORPHNORMALS' : '',
						n.doubleSided ? '#define DOUBLE_SIDED' : '',
						n.flipSided ? '#define FLIP_SIDED' : '',
						n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
						n.shadowMapEnabled ? '#define ' + l : '',
						n.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
						n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
						n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
						'uniform mat4 modelMatrix;',
						'uniform mat4 modelViewMatrix;',
						'uniform mat4 projectionMatrix;',
						'uniform mat4 viewMatrix;',
						'uniform mat3 normalMatrix;',
						'uniform vec3 cameraPosition;',
						'uniform bool isOrthographic;',
						'#ifdef USE_INSTANCING',
						'\tattribute mat4 instanceMatrix;',
						'#endif',
						'#ifdef USE_INSTANCING_COLOR',
						'\tattribute vec3 instanceColor;',
						'#endif',
						'attribute vec3 position;',
						'attribute vec3 normal;',
						'attribute vec2 uv;',
						'#ifdef USE_TANGENT',
						'\tattribute vec4 tangent;',
						'#endif',
						'#ifdef USE_COLOR',
						'\tattribute vec3 color;',
						'#endif',
						'#ifdef USE_MORPHTARGETS',
						'\tattribute vec3 morphTarget0;',
						'\tattribute vec3 morphTarget1;',
						'\tattribute vec3 morphTarget2;',
						'\tattribute vec3 morphTarget3;',
						'\t#ifdef USE_MORPHNORMALS',
						'\t\tattribute vec3 morphNormal0;',
						'\t\tattribute vec3 morphNormal1;',
						'\t\tattribute vec3 morphNormal2;',
						'\t\tattribute vec3 morphNormal3;',
						'\t#else',
						'\t\tattribute vec3 morphTarget4;',
						'\t\tattribute vec3 morphTarget5;',
						'\t\tattribute vec3 morphTarget6;',
						'\t\tattribute vec3 morphTarget7;',
						'\t#endif',
						'#endif',
						'#ifdef USE_SKINNING',
						'\tattribute vec4 skinIndex;',
						'\tattribute vec4 skinWeight;',
						'#endif',
						'\n',
				  ]
						.filter(il)
						.join('\n')),
				  (v = [
						p,
						fl(n),
						'#define SHADER_NAME ' + n.shaderName,
						f,
						n.alphaTest ? '#define ALPHATEST ' + n.alphaTest + (n.alphaTest % 1 ? '' : '.0') : '',
						'#define GAMMA_FACTOR ' + d,
						n.useFog && n.fog ? '#define USE_FOG' : '',
						n.useFog && n.fogExp2 ? '#define FOG_EXP2' : '',
						n.map ? '#define USE_MAP' : '',
						n.matcap ? '#define USE_MATCAP' : '',
						n.envMap ? '#define USE_ENVMAP' : '',
						n.envMap ? '#define ' + c : '',
						n.envMap ? '#define ' + h : '',
						n.envMap ? '#define ' + u : '',
						n.lightMap ? '#define USE_LIGHTMAP' : '',
						n.aoMap ? '#define USE_AOMAP' : '',
						n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
						n.bumpMap ? '#define USE_BUMPMAP' : '',
						n.normalMap ? '#define USE_NORMALMAP' : '',
						n.normalMap && n.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '',
						n.normalMap && n.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '',
						n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
						n.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
						n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
						n.specularMap ? '#define USE_SPECULARMAP' : '',
						n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
						n.metalnessMap ? '#define USE_METALNESSMAP' : '',
						n.alphaMap ? '#define USE_ALPHAMAP' : '',
						n.sheen ? '#define USE_SHEEN' : '',
						n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
						n.vertexTangents ? '#define USE_TANGENT' : '',
						n.vertexColors || n.instancingColor ? '#define USE_COLOR' : '',
						n.vertexUvs ? '#define USE_UV' : '',
						n.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
						n.gradientMap ? '#define USE_GRADIENTMAP' : '',
						n.flatShading ? '#define FLAT_SHADED' : '',
						n.doubleSided ? '#define DOUBLE_SIDED' : '',
						n.flipSided ? '#define FLIP_SIDED' : '',
						n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
						n.shadowMapEnabled ? '#define ' + l : '',
						n.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
						n.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '',
						n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
						n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
						(n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? '#define TEXTURE_LOD_EXT' : '',
						'uniform mat4 viewMatrix;',
						'uniform vec3 cameraPosition;',
						'uniform bool isOrthographic;',
						0 !== n.toneMapping ? '#define TONE_MAPPING' : '',
						0 !== n.toneMapping ? Ns.tonemapping_pars_fragment : '',
						0 !== n.toneMapping ? nl('toneMapping', n.toneMapping) : '',
						n.dithering ? '#define DITHERING' : '',
						Ns.encodings_pars_fragment,
						n.map ? tl('mapTexelToLinear', n.mapEncoding) : '',
						n.matcap ? tl('matcapTexelToLinear', n.matcapEncoding) : '',
						n.envMap ? tl('envMapTexelToLinear', n.envMapEncoding) : '',
						n.emissiveMap ? tl('emissiveMapTexelToLinear', n.emissiveMapEncoding) : '',
						n.lightMap ? tl('lightMapTexelToLinear', n.lightMapEncoding) : '',
						el('linearToOutputTexel', n.outputEncoding),
						n.depthPacking ? '#define DEPTH_PACKING ' + n.depthPacking : '',
						'\n',
				  ]
						.filter(il)
						.join('\n'))),
				(s = al(s)),
				(s = rl(s, n)),
				(s = ol(s, n)),
				(a = al(a)),
				(a = rl(a, n)),
				(a = ol(a, n)),
				(s = ul(s)),
				(a = ul(a)),
				n.isWebGL2 &&
					!0 !== n.isRawShaderMaterial &&
					((y = '#version 300 es\n'),
					(g = ['#define attribute in', '#define varying out', '#define texture2D texture'].join('\n') + '\n' + g),
					(v =
						[
							'#define varying in',
							'300 es' === n.glslVersion ? '' : 'out highp vec4 pc_fragColor;',
							'300 es' === n.glslVersion ? '' : '#define gl_FragColor pc_fragColor',
							'#define gl_FragDepthEXT gl_FragDepth',
							'#define texture2D texture',
							'#define textureCube texture',
							'#define texture2DProj textureProj',
							'#define texture2DLodEXT textureLod',
							'#define texture2DProjLodEXT textureProjLod',
							'#define textureCubeLodEXT textureLod',
							'#define texture2DGradEXT textureGrad',
							'#define texture2DProjGradEXT textureProjGrad',
							'#define textureCubeGradEXT textureGrad',
						].join('\n') +
						'\n' +
						v));
			const x = y + v + a,
				_ = Ja(r, 35633, y + g + s),
				b = Ja(r, 35632, x);
			if (
				(r.attachShader(m, _),
				r.attachShader(m, b),
				void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, 'position'),
				r.linkProgram(m),
				t.debug.checkShaderErrors)
			) {
				const t = r.getProgramInfoLog(m).trim(),
					e = r.getShaderInfoLog(_).trim(),
					n = r.getShaderInfoLog(b).trim();
				let i = !0,
					o = !0;
				if (!1 === r.getProgramParameter(m, 35714)) {
					i = !1;
					const e = $a(r, _, 'vertex'),
						n = $a(r, b, 'fragment');
					console.error('THREE.WebGLProgram: shader error: ', r.getError(), '35715', r.getProgramParameter(m, 35715), 'gl.getProgramInfoLog', t, e, n);
				} else '' !== t ? console.warn('THREE.WebGLProgram: gl.getProgramInfoLog()', t) : ('' !== e && '' !== n) || (o = !1);
				o &&
					(this.diagnostics = {
						runnable: i,
						programLog: t,
						vertexShader: {
							log: e,
							prefix: g,
						},
						fragmentShader: {
							log: n,
							prefix: v,
						},
					});
			}
			let w, M;
			return (
				r.deleteShader(_),
				r.deleteShader(b),
				(this.getUniforms = function () {
					return void 0 === w && (w = new Za(r, m)), w;
				}),
				(this.getAttributes = function () {
					return (
						void 0 === M &&
							(M = (function (t, e) {
								const n = {},
									i = t.getProgramParameter(e, 35721);
								for (let r = 0; r < i; r++) {
									const i = t.getActiveAttrib(e, r).name;
									n[i] = t.getAttribLocation(e, i);
								}
								return n;
							})(r, m)),
						M
					);
				}),
				(this.destroy = function () {
					i.releaseStatesOfProgram(this), r.deleteProgram(m), (this.program = void 0);
				}),
				(this.name = n.shaderName),
				(this.id = Ka++),
				(this.cacheKey = e),
				(this.usedTimes = 1),
				(this.program = m),
				(this.vertexShader = _),
				(this.fragmentShader = b),
				this
			);
		}
		function gl(t, e, n, i, r, o) {
			const s = [],
				a = i.isWebGL2,
				l = i.logarithmicDepthBuffer,
				c = i.floatVertexTextures,
				h = i.maxVertexUniforms,
				u = i.vertexTextures;
			let d = i.precision;
			const p = {
					MeshDepthMaterial: 'depth',
					MeshDistanceMaterial: 'distanceRGBA',
					MeshNormalMaterial: 'normal',
					MeshBasicMaterial: 'basic',
					MeshLambertMaterial: 'lambert',
					MeshPhongMaterial: 'phong',
					MeshToonMaterial: 'toon',
					MeshStandardMaterial: 'physical',
					MeshPhysicalMaterial: 'physical',
					MeshMatcapMaterial: 'matcap',
					LineBasicMaterial: 'basic',
					LineDashedMaterial: 'dashed',
					PointsMaterial: 'points',
					ShadowMaterial: 'shadow',
					SpriteMaterial: 'sprite',
				},
				f = [
					'precision',
					'isWebGL2',
					'supportsVertexTextures',
					'outputEncoding',
					'instancing',
					'instancingColor',
					'map',
					'mapEncoding',
					'matcap',
					'matcapEncoding',
					'envMap',
					'envMapMode',
					'envMapEncoding',
					'envMapCubeUV',
					'lightMap',
					'lightMapEncoding',
					'aoMap',
					'emissiveMap',
					'emissiveMapEncoding',
					'bumpMap',
					'normalMap',
					'objectSpaceNormalMap',
					'tangentSpaceNormalMap',
					'clearcoatMap',
					'clearcoatRoughnessMap',
					'clearcoatNormalMap',
					'displacementMap',
					'specularMap',
					'roughnessMap',
					'metalnessMap',
					'gradientMap',
					'alphaMap',
					'combine',
					'vertexColors',
					'vertexTangents',
					'vertexUvs',
					'uvsVertexOnly',
					'fog',
					'useFog',
					'fogExp2',
					'flatShading',
					'sizeAttenuation',
					'logarithmicDepthBuffer',
					'skinning',
					'maxBones',
					'useVertexTexture',
					'morphTargets',
					'morphNormals',
					'maxMorphTargets',
					'maxMorphNormals',
					'premultipliedAlpha',
					'numDirLights',
					'numPointLights',
					'numSpotLights',
					'numHemiLights',
					'numRectAreaLights',
					'numDirLightShadows',
					'numPointLightShadows',
					'numSpotLightShadows',
					'shadowMapEnabled',
					'shadowMapType',
					'toneMapping',
					'physicallyCorrectLights',
					'alphaTest',
					'doubleSided',
					'flipSided',
					'numClippingPlanes',
					'numClipIntersection',
					'depthPacking',
					'dithering',
					'sheen',
					'transmissionMap',
				];
			function m(t) {
				let e;
				return (
					t
						? t.isTexture
							? (e = t.encoding)
							: t.isWebGLRenderTarget &&
							  (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), (e = t.texture.encoding))
						: (e = 3e3),
					e
				);
			}
			return {
				getParameters: function (r, s, f, g, v) {
					const y = g.fog,
						x = r.isMeshStandardMaterial ? g.environment : null,
						_ = e.get(r.envMap || x),
						b = p[r.type],
						w = v.isSkinnedMesh
							? (function (t) {
									const e = t.skeleton.bones;
									if (c) return 1024;
									{
										const t = h,
											n = Math.floor((t - 20) / 4),
											i = Math.min(n, e.length);
										return i < e.length ? (console.warn('THREE.WebGLRenderer: Skeleton has ' + e.length + ' bones. This GPU supports ' + i + '.'), 0) : i;
									}
							  })(v)
							: 0;
					let M, S;
					if (
						(null !== r.precision && ((d = i.getMaxPrecision(r.precision)), d !== r.precision && console.warn('THREE.WebGLProgram.getParameters:', r.precision, 'not supported, using', d, 'instead.')),
						b)
					) {
						const t = Bs[b];
						(M = t.vertexShader), (S = t.fragmentShader);
					} else (M = r.vertexShader), (S = r.fragmentShader);
					const T = t.getRenderTarget();
					return {
						isWebGL2: a,
						shaderID: b,
						shaderName: r.type,
						vertexShader: M,
						fragmentShader: S,
						defines: r.defines,
						isRawShaderMaterial: !0 === r.isRawShaderMaterial,
						glslVersion: r.glslVersion,
						precision: d,
						instancing: !0 === v.isInstancedMesh,
						instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
						supportsVertexTextures: u,
						outputEncoding: null !== T ? m(T.texture) : t.outputEncoding,
						map: !!r.map,
						mapEncoding: m(r.map),
						matcap: !!r.matcap,
						matcapEncoding: m(r.matcap),
						envMap: !!_,
						envMapMode: _ && _.mapping,
						envMapEncoding: m(_),
						envMapCubeUV: !!_ && (306 === _.mapping || 307 === _.mapping),
						lightMap: !!r.lightMap,
						lightMapEncoding: m(r.lightMap),
						aoMap: !!r.aoMap,
						emissiveMap: !!r.emissiveMap,
						emissiveMapEncoding: m(r.emissiveMap),
						bumpMap: !!r.bumpMap,
						normalMap: !!r.normalMap,
						objectSpaceNormalMap: 1 === r.normalMapType,
						tangentSpaceNormalMap: 0 === r.normalMapType,
						clearcoatMap: !!r.clearcoatMap,
						clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
						clearcoatNormalMap: !!r.clearcoatNormalMap,
						displacementMap: !!r.displacementMap,
						roughnessMap: !!r.roughnessMap,
						metalnessMap: !!r.metalnessMap,
						specularMap: !!r.specularMap,
						alphaMap: !!r.alphaMap,
						gradientMap: !!r.gradientMap,
						sheen: !!r.sheen,
						transmissionMap: !!r.transmissionMap,
						combine: r.combine,
						vertexTangents: r.normalMap && r.vertexTangents,
						vertexColors: r.vertexColors,
						vertexUvs: !!(
							r.map ||
							r.bumpMap ||
							r.normalMap ||
							r.specularMap ||
							r.alphaMap ||
							r.emissiveMap ||
							r.roughnessMap ||
							r.metalnessMap ||
							r.clearcoatMap ||
							r.clearcoatRoughnessMap ||
							r.clearcoatNormalMap ||
							r.displacementMap ||
							r.transmissionMap
						),
						uvsVertexOnly: !(
							r.map ||
							r.bumpMap ||
							r.normalMap ||
							r.specularMap ||
							r.alphaMap ||
							r.emissiveMap ||
							r.roughnessMap ||
							r.metalnessMap ||
							r.clearcoatNormalMap ||
							r.transmissionMap ||
							!r.displacementMap
						),
						fog: !!y,
						useFog: r.fog,
						fogExp2: y && y.isFogExp2,
						flatShading: r.flatShading,
						sizeAttenuation: r.sizeAttenuation,
						logarithmicDepthBuffer: l,
						skinning: r.skinning && w > 0,
						maxBones: w,
						useVertexTexture: c,
						morphTargets: r.morphTargets,
						morphNormals: r.morphNormals,
						maxMorphTargets: t.maxMorphTargets,
						maxMorphNormals: t.maxMorphNormals,
						numDirLights: s.directional.length,
						numPointLights: s.point.length,
						numSpotLights: s.spot.length,
						numRectAreaLights: s.rectArea.length,
						numHemiLights: s.hemi.length,
						numDirLightShadows: s.directionalShadowMap.length,
						numPointLightShadows: s.pointShadowMap.length,
						numSpotLightShadows: s.spotShadowMap.length,
						numClippingPlanes: o.numPlanes,
						numClipIntersection: o.numIntersection,
						dithering: r.dithering,
						shadowMapEnabled: t.shadowMap.enabled && f.length > 0,
						shadowMapType: t.shadowMap.type,
						toneMapping: r.toneMapped ? t.toneMapping : 0,
						physicallyCorrectLights: t.physicallyCorrectLights,
						premultipliedAlpha: r.premultipliedAlpha,
						alphaTest: r.alphaTest,
						doubleSided: 2 === r.side,
						flipSided: 1 === r.side,
						depthPacking: void 0 !== r.depthPacking && r.depthPacking,
						index0AttributeName: r.index0AttributeName,
						extensionDerivatives: r.extensions && r.extensions.derivatives,
						extensionFragDepth: r.extensions && r.extensions.fragDepth,
						extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
						extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
						rendererExtensionFragDepth: a || n.has('EXT_frag_depth'),
						rendererExtensionDrawBuffers: a || n.has('WEBGL_draw_buffers'),
						rendererExtensionShaderTextureLod: a || n.has('EXT_shader_texture_lod'),
						customProgramCacheKey: r.customProgramCacheKey(),
					};
				},
				getProgramCacheKey: function (e) {
					const n = [];
					if ((e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)) for (const t in e.defines) n.push(t), n.push(e.defines[t]);
					if (!1 === e.isRawShaderMaterial) {
						for (let t = 0; t < f.length; t++) n.push(e[f[t]]);
						n.push(t.outputEncoding), n.push(t.gammaFactor);
					}
					return n.push(e.customProgramCacheKey), n.join();
				},
				getUniforms: function (t) {
					const e = p[t.type];
					let n;
					if (e) {
						const t = Bs[e];
						n = ws.clone(t.uniforms);
					} else n = t.uniforms;
					return n;
				},
				acquireProgram: function (e, n) {
					let i;
					for (let t = 0, e = s.length; t < e; t++) {
						const e = s[t];
						if (e.cacheKey === n) {
							(i = e), ++i.usedTimes;
							break;
						}
					}
					return void 0 === i && ((i = new ml(t, n, e, r)), s.push(i)), i;
				},
				releaseProgram: function (t) {
					if (0 == --t.usedTimes) {
						const e = s.indexOf(t);
						(s[e] = s[s.length - 1]), s.pop(), t.destroy();
					}
				},
				programs: s,
			};
		}
		function vl() {
			let t = new WeakMap();
			return {
				get: function (e) {
					let n = t.get(e);
					return void 0 === n && ((n = {}), t.set(e, n)), n;
				},
				remove: function (e) {
					t.delete(e);
				},
				update: function (e, n, i) {
					t.get(e)[n] = i;
				},
				dispose: function () {
					t = new WeakMap();
				},
			};
		}
		function yl(t, e) {
			return t.groupOrder !== e.groupOrder
				? t.groupOrder - e.groupOrder
				: t.renderOrder !== e.renderOrder
				? t.renderOrder - e.renderOrder
				: t.program !== e.program
				? t.program.id - e.program.id
				: t.material.id !== e.material.id
				? t.material.id - e.material.id
				: t.z !== e.z
				? t.z - e.z
				: t.id - e.id;
		}
		function xl(t, e) {
			return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
		}
		function _l(t) {
			const e = [];
			let n = 0;
			const i = [],
				r = [],
				o = {
					id: -1,
				};
			function s(i, r, s, a, l, c) {
				let h = e[n];
				const u = t.get(s);
				return (
					void 0 === h
						? ((h = {
								id: i.id,
								object: i,
								geometry: r,
								material: s,
								program: u.program || o,
								groupOrder: a,
								renderOrder: i.renderOrder,
								z: l,
								group: c,
						  }),
						  (e[n] = h))
						: ((h.id = i.id), (h.object = i), (h.geometry = r), (h.material = s), (h.program = u.program || o), (h.groupOrder = a), (h.renderOrder = i.renderOrder), (h.z = l), (h.group = c)),
					n++,
					h
				);
			}
			return {
				opaque: i,
				transparent: r,
				init: function () {
					(n = 0), (i.length = 0), (r.length = 0);
				},
				push: function (t, e, n, o, a, l) {
					const c = s(t, e, n, o, a, l);
					(!0 === n.transparent ? r : i).push(c);
				},
				unshift: function (t, e, n, o, a, l) {
					const c = s(t, e, n, o, a, l);
					(!0 === n.transparent ? r : i).unshift(c);
				},
				finish: function () {
					for (let t = n, i = e.length; t < i; t++) {
						const n = e[t];
						if (null === n.id) break;
						(n.id = null), (n.object = null), (n.geometry = null), (n.material = null), (n.program = null), (n.group = null);
					}
				},
				sort: function (t, e) {
					i.length > 1 && i.sort(t || yl), r.length > 1 && r.sort(e || xl);
				},
			};
		}
		function bl(t) {
			let e = new WeakMap();
			return {
				get: function (n, i) {
					const r = e.get(n);
					let o;
					return void 0 === r ? ((o = new _l(t)), e.set(n, new WeakMap()), e.get(n).set(i, o)) : ((o = r.get(i)), void 0 === o && ((o = new _l(t)), r.set(i, o))), o;
				},
				dispose: function () {
					e = new WeakMap();
				},
			};
		}
		function wl() {
			const t = {};
			return {
				get: function (e) {
					if (void 0 !== t[e.id]) return t[e.id];
					let n;
					switch (e.type) {
						case 'DirectionalLight':
							n = {
								direction: new $i(),
								color: new bo(),
							};
							break;
						case 'SpotLight':
							n = {
								position: new $i(),
								direction: new $i(),
								color: new bo(),
								distance: 0,
								coneCos: 0,
								penumbraCos: 0,
								decay: 0,
							};
							break;
						case 'PointLight':
							n = {
								position: new $i(),
								color: new bo(),
								distance: 0,
								decay: 0,
							};
							break;
						case 'HemisphereLight':
							n = {
								direction: new $i(),
								skyColor: new bo(),
								groundColor: new bo(),
							};
							break;
						case 'RectAreaLight':
							n = {
								color: new bo(),
								position: new $i(),
								halfWidth: new $i(),
								halfHeight: new $i(),
							};
					}
					return (t[e.id] = n), n;
				},
			};
		}
		let Ml = 0;
		function Sl(t, e) {
			return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
		}
		function Tl() {
			const t = new wl(),
				e = (function () {
					const t = {};
					return {
						get: function (e) {
							if (void 0 !== t[e.id]) return t[e.id];
							let n;
							switch (e.type) {
								case 'DirectionalLight':
								case 'SpotLight':
									n = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new Vi(),
									};
									break;
								case 'PointLight':
									n = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new Vi(),
										shadowCameraNear: 1,
										shadowCameraFar: 1e3,
									};
							}
							return (t[e.id] = n), n;
						},
					};
				})(),
				n = {
					version: 0,
					hash: {
						directionalLength: -1,
						pointLength: -1,
						spotLength: -1,
						rectAreaLength: -1,
						hemiLength: -1,
						numDirectionalShadows: -1,
						numPointShadows: -1,
						numSpotShadows: -1,
					},
					ambient: [0, 0, 0],
					probe: [],
					directional: [],
					directionalShadow: [],
					directionalShadowMap: [],
					directionalShadowMatrix: [],
					spot: [],
					spotShadow: [],
					spotShadowMap: [],
					spotShadowMatrix: [],
					rectArea: [],
					rectAreaLTC1: null,
					rectAreaLTC2: null,
					point: [],
					pointShadow: [],
					pointShadowMap: [],
					pointShadowMatrix: [],
					hemi: [],
				};
			for (let t = 0; t < 9; t++) n.probe.push(new $i());
			const i = new $i(),
				r = new Ar(),
				o = new Ar();
			return {
				setup: function (s, a, l) {
					let c = 0,
						h = 0,
						u = 0;
					for (let t = 0; t < 9; t++) n.probe[t].set(0, 0, 0);
					let d = 0,
						p = 0,
						f = 0,
						m = 0,
						g = 0,
						v = 0,
						y = 0,
						x = 0;
					const _ = l.matrixWorldInverse;
					s.sort(Sl);
					for (let a = 0, l = s.length; a < l; a++) {
						const l = s[a],
							b = l.color,
							w = l.intensity,
							M = l.distance,
							S = l.shadow && l.shadow.map ? l.shadow.map.texture : null;
						if (l.isAmbientLight) (c += b.r * w), (h += b.g * w), (u += b.b * w);
						else if (l.isLightProbe) for (let t = 0; t < 9; t++) n.probe[t].addScaledVector(l.sh.coefficients[t], w);
						else if (l.isDirectionalLight) {
							const r = t.get(l);
							if (
								(r.color.copy(l.color).multiplyScalar(l.intensity),
								r.direction.setFromMatrixPosition(l.matrixWorld),
								i.setFromMatrixPosition(l.target.matrixWorld),
								r.direction.sub(i),
								r.direction.transformDirection(_),
								l.castShadow)
							) {
								const t = l.shadow,
									i = e.get(l);
								(i.shadowBias = t.bias),
									(i.shadowNormalBias = t.normalBias),
									(i.shadowRadius = t.radius),
									(i.shadowMapSize = t.mapSize),
									(n.directionalShadow[d] = i),
									(n.directionalShadowMap[d] = S),
									(n.directionalShadowMatrix[d] = l.shadow.matrix),
									v++;
							}
							(n.directional[d] = r), d++;
						} else if (l.isSpotLight) {
							const r = t.get(l);
							if (
								(r.position.setFromMatrixPosition(l.matrixWorld),
								r.position.applyMatrix4(_),
								r.color.copy(b).multiplyScalar(w),
								(r.distance = M),
								r.direction.setFromMatrixPosition(l.matrixWorld),
								i.setFromMatrixPosition(l.target.matrixWorld),
								r.direction.sub(i),
								r.direction.transformDirection(_),
								(r.coneCos = Math.cos(l.angle)),
								(r.penumbraCos = Math.cos(l.angle * (1 - l.penumbra))),
								(r.decay = l.decay),
								l.castShadow)
							) {
								const t = l.shadow,
									i = e.get(l);
								(i.shadowBias = t.bias),
									(i.shadowNormalBias = t.normalBias),
									(i.shadowRadius = t.radius),
									(i.shadowMapSize = t.mapSize),
									(n.spotShadow[f] = i),
									(n.spotShadowMap[f] = S),
									(n.spotShadowMatrix[f] = l.shadow.matrix),
									x++;
							}
							(n.spot[f] = r), f++;
						} else if (l.isRectAreaLight) {
							const e = t.get(l);
							e.color.copy(b).multiplyScalar(w),
								e.position.setFromMatrixPosition(l.matrixWorld),
								e.position.applyMatrix4(_),
								o.identity(),
								r.copy(l.matrixWorld),
								r.premultiply(_),
								o.extractRotation(r),
								e.halfWidth.set(0.5 * l.width, 0, 0),
								e.halfHeight.set(0, 0.5 * l.height, 0),
								e.halfWidth.applyMatrix4(o),
								e.halfHeight.applyMatrix4(o),
								(n.rectArea[m] = e),
								m++;
						} else if (l.isPointLight) {
							const i = t.get(l);
							if (
								(i.position.setFromMatrixPosition(l.matrixWorld),
								i.position.applyMatrix4(_),
								i.color.copy(l.color).multiplyScalar(l.intensity),
								(i.distance = l.distance),
								(i.decay = l.decay),
								l.castShadow)
							) {
								const t = l.shadow,
									i = e.get(l);
								(i.shadowBias = t.bias),
									(i.shadowNormalBias = t.normalBias),
									(i.shadowRadius = t.radius),
									(i.shadowMapSize = t.mapSize),
									(i.shadowCameraNear = t.camera.near),
									(i.shadowCameraFar = t.camera.far),
									(n.pointShadow[p] = i),
									(n.pointShadowMap[p] = S),
									(n.pointShadowMatrix[p] = l.shadow.matrix),
									y++;
							}
							(n.point[p] = i), p++;
						} else if (l.isHemisphereLight) {
							const e = t.get(l);
							e.direction.setFromMatrixPosition(l.matrixWorld),
								e.direction.transformDirection(_),
								e.direction.normalize(),
								e.skyColor.copy(l.color).multiplyScalar(w),
								e.groundColor.copy(l.groundColor).multiplyScalar(w),
								(n.hemi[g] = e),
								g++;
						}
					}
					m > 0 && ((n.rectAreaLTC1 = zs.LTC_1), (n.rectAreaLTC2 = zs.LTC_2)), (n.ambient[0] = c), (n.ambient[1] = h), (n.ambient[2] = u);
					const b = n.hash;
					(b.directionalLength === d &&
						b.pointLength === p &&
						b.spotLength === f &&
						b.rectAreaLength === m &&
						b.hemiLength === g &&
						b.numDirectionalShadows === v &&
						b.numPointShadows === y &&
						b.numSpotShadows === x) ||
						((n.directional.length = d),
						(n.spot.length = f),
						(n.rectArea.length = m),
						(n.point.length = p),
						(n.hemi.length = g),
						(n.directionalShadow.length = v),
						(n.directionalShadowMap.length = v),
						(n.pointShadow.length = y),
						(n.pointShadowMap.length = y),
						(n.spotShadow.length = x),
						(n.spotShadowMap.length = x),
						(n.directionalShadowMatrix.length = v),
						(n.pointShadowMatrix.length = y),
						(n.spotShadowMatrix.length = x),
						(b.directionalLength = d),
						(b.pointLength = p),
						(b.spotLength = f),
						(b.rectAreaLength = m),
						(b.hemiLength = g),
						(b.numDirectionalShadows = v),
						(b.numPointShadows = y),
						(b.numSpotShadows = x),
						(n.version = Ml++));
				},
				state: n,
			};
		}
		function El() {
			const t = new Tl(),
				e = [],
				n = [];
			return {
				init: function () {
					(e.length = 0), (n.length = 0);
				},
				state: {
					lightsArray: e,
					shadowsArray: n,
					lights: t,
				},
				setupLights: function (i) {
					t.setup(e, n, i);
				},
				pushLight: function (t) {
					e.push(t);
				},
				pushShadow: function (t) {
					n.push(t);
				},
			};
		}
		function Al() {
			let t = new WeakMap();
			return {
				get: function (e, n) {
					let i;
					return !1 === t.has(e) ? ((i = new El()), t.set(e, new WeakMap()), t.get(e).set(n, i)) : !1 === t.get(e).has(n) ? ((i = new El()), t.get(e).set(n, i)) : (i = t.get(e).get(n)), i;
				},
				dispose: function () {
					t = new WeakMap();
				},
			};
		}
		function Ll(t) {
			So.call(this),
				(this.type = 'MeshDepthMaterial'),
				(this.depthPacking = 3200),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.map = null),
				(this.alphaMap = null),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.fog = !1),
				this.setValues(t);
		}
		function Rl(t) {
			So.call(this),
				(this.type = 'MeshDistanceMaterial'),
				(this.referencePosition = new $i()),
				(this.nearDistance = 1),
				(this.farDistance = 1e3),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.map = null),
				(this.alphaMap = null),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.fog = !1),
				this.setValues(t);
		}
		(Ll.prototype = Object.create(So.prototype)),
			(Ll.prototype.constructor = Ll),
			(Ll.prototype.isMeshDepthMaterial = !0),
			(Ll.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					(this.depthPacking = t.depthPacking),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					this
				);
			}),
			(Rl.prototype = Object.create(So.prototype)),
			(Rl.prototype.constructor = Rl),
			(Rl.prototype.isMeshDistanceMaterial = !0),
			(Rl.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					this.referencePosition.copy(t.referencePosition),
					(this.nearDistance = t.nearDistance),
					(this.farDistance = t.farDistance),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					this
				);
			});
		function Pl(t, e, n) {
			let i = new Cs();
			const r = new Vi(),
				o = new Vi(),
				s = new Zi(),
				a = [],
				l = [],
				c = {},
				h = {
					0: 1,
					1: 0,
					2: 2,
				},
				u = new Ms({
					defines: {
						SAMPLE_RATE: 2 / 8,
						HALF_SAMPLE_RATE: 1 / 8,
					},
					uniforms: {
						shadow_pass: {
							value: null,
						},
						resolution: {
							value: new Vi(),
						},
						radius: {
							value: 4,
						},
					},
					vertexShader: 'void main() {\n\tgl_Position = vec4( position, 1.0 );\n}',
					fragmentShader:
						'uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}',
				}),
				d = u.clone();
			d.defines.HORIZONAL_PASS = 1;
			const p = new Xo();
			p.setAttribute('position', new Lo(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
			const f = new us(p, u),
				m = this;
			function g(n, i) {
				const r = e.update(f);
				(u.uniforms.shadow_pass.value = n.map.texture),
					(u.uniforms.resolution.value = n.mapSize),
					(u.uniforms.radius.value = n.radius),
					t.setRenderTarget(n.mapPass),
					t.clear(),
					t.renderBufferDirect(i, null, r, u, f, null),
					(d.uniforms.shadow_pass.value = n.mapPass.texture),
					(d.uniforms.resolution.value = n.mapSize),
					(d.uniforms.radius.value = n.radius),
					t.setRenderTarget(n.map),
					t.clear(),
					t.renderBufferDirect(i, null, r, d, f, null);
			}
			function v(t, e, n) {
				const i = (t << 0) | (e << 1) | (n << 2);
				let r = a[i];
				return (
					void 0 === r &&
						((r = new Ll({
							depthPacking: 3201,
							morphTargets: t,
							skinning: e,
						})),
						(a[i] = r)),
					r
				);
			}
			function y(t, e, n) {
				const i = (t << 0) | (e << 1) | (n << 2);
				let r = l[i];
				return (
					void 0 === r &&
						((r = new Rl({
							morphTargets: t,
							skinning: e,
						})),
						(l[i] = r)),
					r
				);
			}
			function x(e, n, i, r, o, s, a) {
				let l = null,
					u = v,
					d = e.customDepthMaterial;
				if ((!0 === r.isPointLight && ((u = y), (d = e.customDistanceMaterial)), void 0 === d)) {
					let t = !1;
					!0 === i.morphTargets && (t = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
					let r = !1;
					!0 === e.isSkinnedMesh && (!0 === i.skinning ? (r = !0) : console.warn('THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:', e));
					l = u(t, r, !0 === e.isInstancedMesh);
				} else l = d;
				if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
					const t = l.uuid,
						e = i.uuid;
					let n = c[t];
					void 0 === n && ((n = {}), (c[t] = n));
					let r = n[e];
					void 0 === r && ((r = l.clone()), (n[e] = r)), (l = r);
				}
				return (
					(l.visible = i.visible),
					(l.wireframe = i.wireframe),
					(l.side = 3 === a ? (null !== i.shadowSide ? i.shadowSide : i.side) : null !== i.shadowSide ? i.shadowSide : h[i.side]),
					(l.clipShadows = i.clipShadows),
					(l.clippingPlanes = i.clippingPlanes),
					(l.clipIntersection = i.clipIntersection),
					(l.wireframeLinewidth = i.wireframeLinewidth),
					(l.linewidth = i.linewidth),
					!0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), (l.nearDistance = o), (l.farDistance = s)),
					l
				);
			}
			function _(n, r, o, s, a) {
				if (!1 === n.visible) return;
				if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || (n.receiveShadow && 3 === a)) && (!n.frustumCulled || i.intersectsObject(n))) {
					n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, n.matrixWorld);
					const i = e.update(n),
						r = n.material;
					if (Array.isArray(r)) {
						const e = i.groups;
						for (let l = 0, c = e.length; l < c; l++) {
							const c = e[l],
								h = r[c.materialIndex];
							if (h && h.visible) {
								const e = x(n, i, h, s, o.near, o.far, a);
								t.renderBufferDirect(o, null, i, e, n, c);
							}
						}
					} else if (r.visible) {
						const e = x(n, i, r, s, o.near, o.far, a);
						t.renderBufferDirect(o, null, i, e, n, null);
					}
				}
				const l = n.children;
				for (let t = 0, e = l.length; t < e; t++) _(l[t], r, o, s, a);
			}
			(this.enabled = !1),
				(this.autoUpdate = !0),
				(this.needsUpdate = !1),
				(this.type = 1),
				(this.render = function (e, a, l) {
					if (!1 === m.enabled) return;
					if (!1 === m.autoUpdate && !1 === m.needsUpdate) return;
					if (0 === e.length) return;
					const c = t.getRenderTarget(),
						h = t.getActiveCubeFace(),
						u = t.getActiveMipmapLevel(),
						d = t.state;
					d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
					for (let c = 0, h = e.length; c < h; c++) {
						const h = e[c],
							u = h.shadow;
						if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
						if (void 0 === u) {
							console.warn('THREE.WebGLShadowMap:', h, 'has no shadow.');
							continue;
						}
						r.copy(u.mapSize);
						const p = u.getFrameExtents();
						if (
							(r.multiply(p),
							o.copy(u.mapSize),
							(r.x > n || r.y > n) &&
								(r.x > n && ((o.x = Math.floor(n / p.x)), (r.x = o.x * p.x), (u.mapSize.x = o.x)), r.y > n && ((o.y = Math.floor(n / p.y)), (r.y = o.y * p.y), (u.mapSize.y = o.y))),
							null === u.map && !u.isPointLightShadow && 3 === this.type)
						) {
							const t = {
								minFilter: 1006,
								magFilter: 1006,
								format: 1023,
							};
							(u.map = new Ji(r.x, r.y, t)), (u.map.texture.name = h.name + '.shadowMap'), (u.mapPass = new Ji(r.x, r.y, t)), u.camera.updateProjectionMatrix();
						}
						if (null === u.map) {
							const t = {
								minFilter: 1003,
								magFilter: 1003,
								format: 1023,
							};
							(u.map = new Ji(r.x, r.y, t)), (u.map.texture.name = h.name + '.shadowMap'), u.camera.updateProjectionMatrix();
						}
						t.setRenderTarget(u.map), t.clear();
						const f = u.getViewportCount();
						for (let t = 0; t < f; t++) {
							const e = u.getViewport(t);
							s.set(o.x * e.x, o.y * e.y, o.x * e.z, o.y * e.w), d.viewport(s), u.updateMatrices(h, t), (i = u.getFrustum()), _(a, l, u.camera, h, this.type);
						}
						u.isPointLightShadow || 3 !== this.type || g(u, l), (u.needsUpdate = !1);
					}
					(m.needsUpdate = !1), t.setRenderTarget(c, h, u);
				});
		}
		function Cl(t, e, n) {
			const i = n.isWebGL2;
			const r = new (function () {
					let e = !1;
					const n = new Zi();
					let i = null;
					const r = new Zi(0, 0, 0, 0);
					return {
						setMask: function (n) {
							i === n || e || (t.colorMask(n, n, n, n), (i = n));
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e, i, o, s, a) {
							!0 === a && ((e *= s), (i *= s), (o *= s)), n.set(e, i, o, s), !1 === r.equals(n) && (t.clearColor(e, i, o, s), r.copy(n));
						},
						reset: function () {
							(e = !1), (i = null), r.set(-1, 0, 0, 0);
						},
					};
				})(),
				o = new (function () {
					let e = !1,
						n = null,
						i = null,
						r = null;
					return {
						setTest: function (t) {
							t ? D(2929) : I(2929);
						},
						setMask: function (i) {
							n === i || e || (t.depthMask(i), (n = i));
						},
						setFunc: function (e) {
							if (i !== e) {
								if (e)
									switch (e) {
										case 0:
											t.depthFunc(512);
											break;
										case 1:
											t.depthFunc(519);
											break;
										case 2:
											t.depthFunc(513);
											break;
										case 3:
											t.depthFunc(515);
											break;
										case 4:
											t.depthFunc(514);
											break;
										case 5:
											t.depthFunc(518);
											break;
										case 6:
											t.depthFunc(516);
											break;
										case 7:
											t.depthFunc(517);
											break;
										default:
											t.depthFunc(515);
									}
								else t.depthFunc(515);
								i = e;
							}
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e) {
							r !== e && (t.clearDepth(e), (r = e));
						},
						reset: function () {
							(e = !1), (n = null), (i = null), (r = null);
						},
					};
				})(),
				s = new (function () {
					let e = !1,
						n = null,
						i = null,
						r = null,
						o = null,
						s = null,
						a = null,
						l = null,
						c = null;
					return {
						setTest: function (t) {
							e || (t ? D(2960) : I(2960));
						},
						setMask: function (i) {
							n === i || e || (t.stencilMask(i), (n = i));
						},
						setFunc: function (e, n, s) {
							(i === e && r === n && o === s) || (t.stencilFunc(e, n, s), (i = e), (r = n), (o = s));
						},
						setOp: function (e, n, i) {
							(s === e && a === n && l === i) || (t.stencilOp(e, n, i), (s = e), (a = n), (l = i));
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e) {
							c !== e && (t.clearStencil(e), (c = e));
						},
						reset: function () {
							(e = !1), (n = null), (i = null), (r = null), (o = null), (s = null), (a = null), (l = null), (c = null);
						},
					};
				})();
			let a = {},
				l = null,
				c = null,
				h = null,
				u = null,
				d = null,
				p = null,
				f = null,
				m = null,
				g = null,
				v = !1,
				y = null,
				x = null,
				_ = null,
				b = null,
				w = null;
			const M = t.getParameter(35661);
			let S = !1,
				T = 0;
			const E = t.getParameter(7938);
			-1 !== E.indexOf('WebGL') ? ((T = parseFloat(/^WebGL\ ([0-9])/.exec(E)[1])), (S = T >= 1)) : -1 !== E.indexOf('OpenGL ES') && ((T = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(E)[1])), (S = T >= 2));
			let A = null,
				L = {};
			const R = new Zi(),
				P = new Zi();
			function C(e, n, i) {
				const r = new Uint8Array(4),
					o = t.createTexture();
				t.bindTexture(e, o), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
				for (let e = 0; e < i; e++) t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
				return o;
			}
			const O = {};
			function D(e) {
				!0 !== a[e] && (t.enable(e), (a[e] = !0));
			}
			function I(e) {
				!1 !== a[e] && (t.disable(e), (a[e] = !1));
			}
			(O[3553] = C(3553, 3553, 1)), (O[34067] = C(34067, 34069, 6)), r.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), D(2929), o.setFunc(3), k(!1), F(1), D(2884), B(0);
			const N = {
				100: 32774,
				101: 32778,
				102: 32779,
			};
			if (i) (N[103] = 32775), (N[104] = 32776);
			else {
				const t = e.get('EXT_blend_minmax');
				null !== t && ((N[103] = t.MIN_EXT), (N[104] = t.MAX_EXT));
			}
			const z = {
				200: 0,
				201: 1,
				202: 768,
				204: 770,
				210: 776,
				208: 774,
				206: 772,
				203: 769,
				205: 771,
				209: 775,
				207: 773,
			};
			function B(e, n, i, r, o, s, a, l) {
				if (0 !== e) {
					if ((c || (D(3042), (c = !0)), 5 === e))
						(o = o || n),
							(s = s || i),
							(a = a || r),
							(n === u && o === f) || (t.blendEquationSeparate(N[n], N[o]), (u = n), (f = o)),
							(i === d && r === p && s === m && a === g) || (t.blendFuncSeparate(z[i], z[r], z[s], z[a]), (d = i), (p = r), (m = s), (g = a)),
							(h = e),
							(v = null);
					else if (e !== h || l !== v) {
						if (((100 === u && 100 === f) || (t.blendEquation(32774), (u = 100), (f = 100)), l))
							switch (e) {
								case 1:
									t.blendFuncSeparate(1, 771, 1, 771);
									break;
								case 2:
									t.blendFunc(1, 1);
									break;
								case 3:
									t.blendFuncSeparate(0, 0, 769, 771);
									break;
								case 4:
									t.blendFuncSeparate(0, 768, 0, 770);
									break;
								default:
									console.error('THREE.WebGLState: Invalid blending: ', e);
							}
						else
							switch (e) {
								case 1:
									t.blendFuncSeparate(770, 771, 1, 771);
									break;
								case 2:
									t.blendFunc(770, 1);
									break;
								case 3:
									t.blendFunc(0, 769);
									break;
								case 4:
									t.blendFunc(0, 768);
									break;
								default:
									console.error('THREE.WebGLState: Invalid blending: ', e);
							}
						(d = null), (p = null), (m = null), (g = null), (h = e), (v = l);
					}
				} else c && (I(3042), (c = !1));
			}
			function k(e) {
				y !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (y = e));
			}
			function F(e) {
				0 !== e ? (D(2884), e !== x && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : I(2884), (x = e);
			}
			function U(e, n, i) {
				e ? (D(32823), (b === n && w === i) || (t.polygonOffset(n, i), (b = n), (w = i))) : I(32823);
			}
			function H(e) {
				void 0 === e && (e = 33984 + M - 1), A !== e && (t.activeTexture(e), (A = e));
			}
			return {
				buffers: {
					color: r,
					depth: o,
					stencil: s,
				},
				enable: D,
				disable: I,
				useProgram: function (e) {
					return l !== e && (t.useProgram(e), (l = e), !0);
				},
				setBlending: B,
				setMaterial: function (t, e) {
					2 === t.side ? I(2884) : D(2884);
					let n = 1 === t.side;
					e && (n = !n),
						k(n),
						1 === t.blending && !1 === t.transparent ? B(0) : B(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha),
						o.setFunc(t.depthFunc),
						o.setTest(t.depthTest),
						o.setMask(t.depthWrite),
						r.setMask(t.colorWrite);
					const i = t.stencilWrite;
					s.setTest(i),
						i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
						U(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
				},
				setFlipSided: k,
				setCullFace: F,
				setLineWidth: function (e) {
					e !== _ && (S && t.lineWidth(e), (_ = e));
				},
				setPolygonOffset: U,
				setScissorTest: function (t) {
					t ? D(3089) : I(3089);
				},
				activeTexture: H,
				bindTexture: function (e, n) {
					null === A && H();
					let i = L[A];
					void 0 === i &&
						((i = {
							type: void 0,
							texture: void 0,
						}),
						(L[A] = i)),
						(i.type === e && i.texture === n) || (t.bindTexture(e, n || O[e]), (i.type = e), (i.texture = n));
				},
				unbindTexture: function () {
					const e = L[A];
					void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), (e.type = void 0), (e.texture = void 0));
				},
				compressedTexImage2D: function () {
					try {
						t.compressedTexImage2D.apply(t, arguments);
					} catch (t) {
						console.error('THREE.WebGLState:', t);
					}
				},
				texImage2D: function () {
					try {
						t.texImage2D.apply(t, arguments);
					} catch (t) {
						console.error('THREE.WebGLState:', t);
					}
				},
				texImage3D: function () {
					try {
						t.texImage3D.apply(t, arguments);
					} catch (t) {
						console.error('THREE.WebGLState:', t);
					}
				},
				scissor: function (e) {
					!1 === R.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), R.copy(e));
				},
				viewport: function (e) {
					!1 === P.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), P.copy(e));
				},
				reset: function () {
					(a = {}), (A = null), (L = {}), (l = null), (h = null), (y = null), (x = null), r.reset(), o.reset(), s.reset();
				},
			};
		}
		function Ol(t, e, n, i, r, o, s) {
			const a = r.isWebGL2,
				l = r.maxTextures,
				c = r.maxCubemapSize,
				h = r.maxTextureSize,
				u = r.maxSamples,
				d = new WeakMap();
			let p,
				f = !1;
			try {
				f = 'undefined' != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext('2d');
			} catch (t) {}
			function m(t, e) {
				return f ? new OffscreenCanvas(t, e) : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
			}
			function g(t, e, n, i) {
				let r = 1;
				if (((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e)) {
					if (
						('undefined' != typeof HTMLImageElement && t instanceof HTMLImageElement) ||
						('undefined' != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ||
						('undefined' != typeof ImageBitmap && t instanceof ImageBitmap)
					) {
						const i = e ? Gi.floorPowerOfTwo : Math.floor,
							o = i(r * t.width),
							s = i(r * t.height);
						void 0 === p && (p = m(o, s));
						const a = n ? m(o, s) : p;
						(a.width = o), (a.height = s);
						return a.getContext('2d').drawImage(t, 0, 0, o, s), console.warn('THREE.WebGLRenderer: Texture has been resized from (' + t.width + 'x' + t.height + ') to (' + o + 'x' + s + ').'), a;
					}
					return 'data' in t && console.warn('THREE.WebGLRenderer: Image in DataTexture is too big (' + t.width + 'x' + t.height + ').'), t;
				}
				return t;
			}
			function v(t) {
				return Gi.isPowerOfTwo(t.width) && Gi.isPowerOfTwo(t.height);
			}
			function y(t, e) {
				return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter;
			}
			function x(e, n, r, o) {
				t.generateMipmap(e);
				i.get(n).__maxMipLevel = Math.log(Math.max(r, o)) * Math.LOG2E;
			}
			function _(n, i, r) {
				if (!1 === a) return i;
				if (null !== n) {
					if (void 0 !== t[n]) return t[n];
					console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
				}
				let o = i;
				return (
					6403 === i && (5126 === r && (o = 33326), 5131 === r && (o = 33325), 5121 === r && (o = 33321)),
					6407 === i && (5126 === r && (o = 34837), 5131 === r && (o = 34843), 5121 === r && (o = 32849)),
					6408 === i && (5126 === r && (o = 34836), 5131 === r && (o = 34842), 5121 === r && (o = 32856)),
					(33325 !== o && 33326 !== o && 34842 !== o && 34836 !== o) || e.get('EXT_color_buffer_float'),
					o
				);
			}
			function b(t) {
				return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729;
			}
			function w(e) {
				const n = e.target;
				n.removeEventListener('dispose', w),
					(function (e) {
						const n = i.get(e);
						if (void 0 === n.__webglInit) return;
						t.deleteTexture(n.__webglTexture), i.remove(e);
					})(n),
					n.isVideoTexture && d.delete(n),
					s.memory.textures--;
			}
			function M(e) {
				const n = e.target;
				n.removeEventListener('dispose', M),
					(function (e) {
						const n = i.get(e),
							r = i.get(e.texture);
						if (!e) return;
						void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
						e.depthTexture && e.depthTexture.dispose();
						if (e.isWebGLCubeRenderTarget) for (let e = 0; e < 6; e++) t.deleteFramebuffer(n.__webglFramebuffer[e]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[e]);
						else
							t.deleteFramebuffer(n.__webglFramebuffer),
								n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer),
								n.__webglMultisampledFramebuffer && t.deleteFramebuffer(n.__webglMultisampledFramebuffer),
								n.__webglColorRenderbuffer && t.deleteRenderbuffer(n.__webglColorRenderbuffer),
								n.__webglDepthRenderbuffer && t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
						i.remove(e.texture), i.remove(e);
					})(n),
					s.memory.textures--;
			}
			let S = 0;
			function T(t, e) {
				const r = i.get(t);
				if (
					(t.isVideoTexture &&
						(function (t) {
							const e = s.render.frame;
							d.get(t) !== e && (d.set(t, e), t.update());
						})(t),
					t.version > 0 && r.__version !== t.version)
				) {
					const n = t.image;
					if (void 0 === n) console.warn('THREE.WebGLRenderer: Texture marked for update but image is undefined');
					else {
						if (!1 !== n.complete) return void O(r, t, e);
						console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');
					}
				}
				n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
			}
			function E(e, r) {
				if (6 !== e.image.length) return;
				const s = i.get(e);
				if (e.version > 0 && s.__version !== e.version) {
					C(s, e), n.activeTexture(33984 + r), n.bindTexture(34067, s.__webglTexture), t.pixelStorei(37440, e.flipY);
					const i = e && (e.isCompressedTexture || e.image[0].isCompressedTexture),
						l = e.image[0] && e.image[0].isDataTexture,
						h = [];
					for (let t = 0; t < 6; t++) h[t] = i || l ? (l ? e.image[t].image : e.image[t]) : g(e.image[t], !1, !0, c);
					const u = h[0],
						d = v(u) || a,
						p = o.convert(e.format),
						f = o.convert(e.type),
						m = _(e.internalFormat, p, f);
					let b;
					if ((P(34067, e, d), i)) {
						for (let t = 0; t < 6; t++) {
							b = h[t].mipmaps;
							for (let i = 0; i < b.length; i++) {
								const r = b[i];
								1023 !== e.format && 1022 !== e.format
									? null !== p
										? n.compressedTexImage2D(34069 + t, i, m, r.width, r.height, 0, r.data)
										: console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()')
									: n.texImage2D(34069 + t, i, m, r.width, r.height, 0, p, f, r.data);
							}
						}
						s.__maxMipLevel = b.length - 1;
					} else {
						b = e.mipmaps;
						for (let t = 0; t < 6; t++)
							if (l) {
								n.texImage2D(34069 + t, 0, m, h[t].width, h[t].height, 0, p, f, h[t].data);
								for (let e = 0; e < b.length; e++) {
									const i = b[e].image[t].image;
									n.texImage2D(34069 + t, e + 1, m, i.width, i.height, 0, p, f, i.data);
								}
							} else {
								n.texImage2D(34069 + t, 0, m, p, f, h[t]);
								for (let e = 0; e < b.length; e++) {
									const i = b[e];
									n.texImage2D(34069 + t, e + 1, m, p, f, i.image[t]);
								}
							}
						s.__maxMipLevel = b.length;
					}
					y(e, d) && x(34067, e, u.width, u.height), (s.__version = e.version), e.onUpdate && e.onUpdate(e);
				} else n.activeTexture(33984 + r), n.bindTexture(34067, s.__webglTexture);
			}
			function A(t, e) {
				n.activeTexture(33984 + e), n.bindTexture(34067, i.get(t).__webglTexture);
			}
			const L = {
					1e3: 10497,
					1001: 33071,
					1002: 33648,
				},
				R = {
					1003: 9728,
					1004: 9984,
					1005: 9986,
					1006: 9729,
					1007: 9985,
					1008: 9987,
				};
			function P(n, o, s) {
				s
					? (t.texParameteri(n, 10242, L[o.wrapS]),
					  t.texParameteri(n, 10243, L[o.wrapT]),
					  (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, L[o.wrapR]),
					  t.texParameteri(n, 10240, R[o.magFilter]),
					  t.texParameteri(n, 10241, R[o.minFilter]))
					: (t.texParameteri(n, 10242, 33071),
					  t.texParameteri(n, 10243, 33071),
					  (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, 33071),
					  (1001 === o.wrapS && 1001 === o.wrapT) || console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'),
					  t.texParameteri(n, 10240, b(o.magFilter)),
					  t.texParameteri(n, 10241, b(o.minFilter)),
					  1003 !== o.minFilter &&
							1006 !== o.minFilter &&
							console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'));
				const l = e.get('EXT_texture_filter_anisotropic');
				if (l) {
					if (1015 === o.type && null === e.get('OES_texture_float_linear')) return;
					if (1016 === o.type && null === (a || e.get('OES_texture_half_float_linear'))) return;
					(o.anisotropy > 1 || i.get(o).__currentAnisotropy) &&
						(t.texParameterf(n, l.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), (i.get(o).__currentAnisotropy = o.anisotropy));
				}
			}
			function C(e, n) {
				void 0 === e.__webglInit && ((e.__webglInit = !0), n.addEventListener('dispose', w), (e.__webglTexture = t.createTexture()), s.memory.textures++);
			}
			function O(e, i, r) {
				let s = 3553;
				i.isDataTexture2DArray && (s = 35866),
					i.isDataTexture3D && (s = 32879),
					C(e, i),
					n.activeTexture(33984 + r),
					n.bindTexture(s, e.__webglTexture),
					t.pixelStorei(37440, i.flipY),
					t.pixelStorei(37441, i.premultiplyAlpha),
					t.pixelStorei(3317, i.unpackAlignment);
				const l =
						(function (t) {
							return !a && (1001 !== t.wrapS || 1001 !== t.wrapT || (1003 !== t.minFilter && 1006 !== t.minFilter));
						})(i) && !1 === v(i.image),
					c = g(i.image, l, !1, h),
					u = v(c) || a,
					d = o.convert(i.format);
				let p,
					f = o.convert(i.type),
					m = _(i.internalFormat, d, f);
				P(s, i, u);
				const b = i.mipmaps;
				if (i.isDepthTexture)
					(m = 6402),
						a
							? (m = 1015 === i.type ? 36012 : 1014 === i.type ? 33190 : 1020 === i.type ? 35056 : 33189)
							: 1015 === i.type && console.error('WebGLRenderer: Floating point depth texture requires WebGL2.'),
						1026 === i.format &&
							6402 === m &&
							1012 !== i.type &&
							1014 !== i.type &&
							(console.warn('THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'), (i.type = 1012), (f = o.convert(i.type))),
						1027 === i.format &&
							6402 === m &&
							((m = 34041), 1020 !== i.type && (console.warn('THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'), (i.type = 1020), (f = o.convert(i.type)))),
						n.texImage2D(3553, 0, m, c.width, c.height, 0, d, f, null);
				else if (i.isDataTexture)
					if (b.length > 0 && u) {
						for (let t = 0, e = b.length; t < e; t++) (p = b[t]), n.texImage2D(3553, t, m, p.width, p.height, 0, d, f, p.data);
						(i.generateMipmaps = !1), (e.__maxMipLevel = b.length - 1);
					} else n.texImage2D(3553, 0, m, c.width, c.height, 0, d, f, c.data), (e.__maxMipLevel = 0);
				else if (i.isCompressedTexture) {
					for (let t = 0, e = b.length; t < e; t++)
						(p = b[t]),
							1023 !== i.format && 1022 !== i.format
								? null !== d
									? n.compressedTexImage2D(3553, t, m, p.width, p.height, 0, p.data)
									: console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()')
								: n.texImage2D(3553, t, m, p.width, p.height, 0, d, f, p.data);
					e.__maxMipLevel = b.length - 1;
				} else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, m, c.width, c.height, c.depth, 0, d, f, c.data), (e.__maxMipLevel = 0);
				else if (i.isDataTexture3D) n.texImage3D(32879, 0, m, c.width, c.height, c.depth, 0, d, f, c.data), (e.__maxMipLevel = 0);
				else if (b.length > 0 && u) {
					for (let t = 0, e = b.length; t < e; t++) (p = b[t]), n.texImage2D(3553, t, m, d, f, p);
					(i.generateMipmaps = !1), (e.__maxMipLevel = b.length - 1);
				} else n.texImage2D(3553, 0, m, d, f, c), (e.__maxMipLevel = 0);
				y(i, u) && x(s, i, c.width, c.height), (e.__version = i.version), i.onUpdate && i.onUpdate(i);
			}
			function D(e, r, s, a) {
				const l = o.convert(r.texture.format),
					c = o.convert(r.texture.type),
					h = _(r.texture.internalFormat, l, c);
				n.texImage2D(a, 0, h, r.width, r.height, 0, l, c, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, s, a, i.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null);
			}
			function I(e, n, i) {
				if ((t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)) {
					let r = 33189;
					if (i) {
						const e = n.depthTexture;
						e && e.isDepthTexture && (1015 === e.type ? (r = 36012) : 1014 === e.type && (r = 33190));
						const i = z(n);
						t.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
					} else t.renderbufferStorage(36161, r, n.width, n.height);
					t.framebufferRenderbuffer(36160, 36096, 36161, e);
				} else if (n.depthBuffer && n.stencilBuffer) {
					if (i) {
						const e = z(n);
						t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height);
					} else t.renderbufferStorage(36161, 34041, n.width, n.height);
					t.framebufferRenderbuffer(36160, 33306, 36161, e);
				} else {
					const e = o.convert(n.texture.format),
						r = o.convert(n.texture.type),
						s = _(n.texture.internalFormat, e, r);
					if (i) {
						const e = z(n);
						t.renderbufferStorageMultisample(36161, e, s, n.width, n.height);
					} else t.renderbufferStorage(36161, s, n.width, n.height);
				}
				t.bindRenderbuffer(36161, null);
			}
			function N(e) {
				const n = i.get(e),
					r = !0 === e.isWebGLCubeRenderTarget;
				if (e.depthTexture) {
					if (r) throw new Error('target.depthTexture not supported in Cube render targets');
					!(function (e, n) {
						if (n && n.isWebGLCubeRenderTarget) throw new Error('Depth Texture with cube render targets is not supported');
						if ((t.bindFramebuffer(36160, e), !n.depthTexture || !n.depthTexture.isDepthTexture)) throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');
						(i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height) ||
							((n.depthTexture.image.width = n.width), (n.depthTexture.image.height = n.height), (n.depthTexture.needsUpdate = !0)),
							T(n.depthTexture, 0);
						const r = i.get(n.depthTexture).__webglTexture;
						if (1026 === n.depthTexture.format) t.framebufferTexture2D(36160, 36096, 3553, r, 0);
						else {
							if (1027 !== n.depthTexture.format) throw new Error('Unknown depthTexture format');
							t.framebufferTexture2D(36160, 33306, 3553, r, 0);
						}
					})(n.__webglFramebuffer, e);
				} else if (r) {
					n.__webglDepthbuffer = [];
					for (let i = 0; i < 6; i++) t.bindFramebuffer(36160, n.__webglFramebuffer[i]), (n.__webglDepthbuffer[i] = t.createRenderbuffer()), I(n.__webglDepthbuffer[i], e, !1);
				} else t.bindFramebuffer(36160, n.__webglFramebuffer), (n.__webglDepthbuffer = t.createRenderbuffer()), I(n.__webglDepthbuffer, e, !1);
				t.bindFramebuffer(36160, null);
			}
			function z(t) {
				return a && t.isWebGLMultisampleRenderTarget ? Math.min(u, t.samples) : 0;
			}
			let B = !1,
				k = !1;
			(this.allocateTextureUnit = function () {
				const t = S;
				return t >= l && console.warn('THREE.WebGLTextures: Trying to use ' + t + ' texture units while this GPU supports only ' + l), (S += 1), t;
			}),
				(this.resetTextureUnits = function () {
					S = 0;
				}),
				(this.setTexture2D = T),
				(this.setTexture2DArray = function (t, e) {
					const r = i.get(t);
					t.version > 0 && r.__version !== t.version ? O(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture));
				}),
				(this.setTexture3D = function (t, e) {
					const r = i.get(t);
					t.version > 0 && r.__version !== t.version ? O(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture));
				}),
				(this.setTextureCube = E),
				(this.setTextureCubeDynamic = A),
				(this.setupRenderTarget = function (e) {
					const r = i.get(e),
						l = i.get(e.texture);
					e.addEventListener('dispose', M), (l.__webglTexture = t.createTexture()), s.memory.textures++;
					const c = !0 === e.isWebGLCubeRenderTarget,
						h = !0 === e.isWebGLMultisampleRenderTarget,
						u = v(e) || a;
					if (
						(!a ||
							1022 !== e.texture.format ||
							(1015 !== e.texture.type && 1016 !== e.texture.type) ||
							((e.texture.format = 1023), console.warn('THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.')),
						c)
					) {
						r.__webglFramebuffer = [];
						for (let e = 0; e < 6; e++) r.__webglFramebuffer[e] = t.createFramebuffer();
					} else if (((r.__webglFramebuffer = t.createFramebuffer()), h))
						if (a) {
							(r.__webglMultisampledFramebuffer = t.createFramebuffer()), (r.__webglColorRenderbuffer = t.createRenderbuffer()), t.bindRenderbuffer(36161, r.__webglColorRenderbuffer);
							const n = o.convert(e.texture.format),
								i = o.convert(e.texture.type),
								s = _(e.texture.internalFormat, n, i),
								a = z(e);
							t.renderbufferStorageMultisample(36161, a, s, e.width, e.height),
								t.bindFramebuffer(36160, r.__webglMultisampledFramebuffer),
								t.framebufferRenderbuffer(36160, 36064, 36161, r.__webglColorRenderbuffer),
								t.bindRenderbuffer(36161, null),
								e.depthBuffer && ((r.__webglDepthRenderbuffer = t.createRenderbuffer()), I(r.__webglDepthRenderbuffer, e, !0)),
								t.bindFramebuffer(36160, null);
						} else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.');
					if (c) {
						n.bindTexture(34067, l.__webglTexture), P(34067, e.texture, u);
						for (let t = 0; t < 6; t++) D(r.__webglFramebuffer[t], e, 36064, 34069 + t);
						y(e.texture, u) && x(34067, e.texture, e.width, e.height), n.bindTexture(34067, null);
					} else
						n.bindTexture(3553, l.__webglTexture), P(3553, e.texture, u), D(r.__webglFramebuffer, e, 36064, 3553), y(e.texture, u) && x(3553, e.texture, e.width, e.height), n.bindTexture(3553, null);
					e.depthBuffer && N(e);
				}),
				(this.updateRenderTargetMipmap = function (t) {
					const e = t.texture;
					if (y(e, v(t) || a)) {
						const r = t.isWebGLCubeRenderTarget ? 34067 : 3553,
							o = i.get(e).__webglTexture;
						n.bindTexture(r, o), x(r, e, t.width, t.height), n.bindTexture(r, null);
					}
				}),
				(this.updateMultisampleRenderTarget = function (e) {
					if (e.isWebGLMultisampleRenderTarget)
						if (a) {
							const n = i.get(e);
							t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, n.__webglFramebuffer);
							const r = e.width,
								o = e.height;
							let s = 16384;
							e.depthBuffer && (s |= 256), e.stencilBuffer && (s |= 1024), t.blitFramebuffer(0, 0, r, o, 0, 0, r, o, s, 9728), t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer);
						} else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.');
				}),
				(this.safeSetTexture2D = function (t, e) {
					t &&
						t.isWebGLRenderTarget &&
						(!1 === B && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), (B = !0)), (t = t.texture)),
						T(t, e);
				}),
				(this.safeSetTextureCube = function (t, e) {
					t &&
						t.isWebGLCubeRenderTarget &&
						(!1 === k && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), (k = !0)), (t = t.texture)),
						(t && t.isCubeTexture) || (Array.isArray(t.image) && 6 === t.image.length) ? E(t, e) : A(t, e);
				});
		}
		function Dl(t, e, n) {
			const i = n.isWebGL2;
			return {
				convert: function (t) {
					let n;
					if (1009 === t) return 5121;
					if (1017 === t) return 32819;
					if (1018 === t) return 32820;
					if (1019 === t) return 33635;
					if (1010 === t) return 5120;
					if (1011 === t) return 5122;
					if (1012 === t) return 5123;
					if (1013 === t) return 5124;
					if (1014 === t) return 5125;
					if (1015 === t) return 5126;
					if (1016 === t) return i ? 5131 : ((n = e.get('OES_texture_half_float')), null !== n ? n.HALF_FLOAT_OES : null);
					if (1021 === t) return 6406;
					if (1022 === t) return 6407;
					if (1023 === t) return 6408;
					if (1024 === t) return 6409;
					if (1025 === t) return 6410;
					if (1026 === t) return 6402;
					if (1027 === t) return 34041;
					if (1028 === t) return 6403;
					if (1029 === t) return 36244;
					if (1030 === t) return 33319;
					if (1031 === t) return 33320;
					if (1032 === t) return 36248;
					if (1033 === t) return 36249;
					if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
						if (((n = e.get('WEBGL_compressed_texture_s3tc')), null === n)) return null;
						if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
						if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
						if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
						if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
					}
					if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
						if (((n = e.get('WEBGL_compressed_texture_pvrtc')), null === n)) return null;
						if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
						if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
						if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
						if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
					}
					if (36196 === t) return (n = e.get('WEBGL_compressed_texture_etc1')), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
					if ((37492 === t || 37496 === t) && ((n = e.get('WEBGL_compressed_texture_etc')), null !== n)) {
						if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
						if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC;
					}
					return 37808 === t ||
						37809 === t ||
						37810 === t ||
						37811 === t ||
						37812 === t ||
						37813 === t ||
						37814 === t ||
						37815 === t ||
						37816 === t ||
						37817 === t ||
						37818 === t ||
						37819 === t ||
						37820 === t ||
						37821 === t ||
						37840 === t ||
						37841 === t ||
						37842 === t ||
						37843 === t ||
						37844 === t ||
						37845 === t ||
						37846 === t ||
						37847 === t ||
						37848 === t ||
						37849 === t ||
						37850 === t ||
						37851 === t ||
						37852 === t ||
						37853 === t
						? ((n = e.get('WEBGL_compressed_texture_astc')), null !== n ? t : null)
						: 36492 === t
						? ((n = e.get('EXT_texture_compression_bptc')), null !== n ? t : null)
						: 1020 === t
						? i
							? 34042
							: ((n = e.get('WEBGL_depth_texture')), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null)
						: void 0;
				},
			};
		}
		function Il(t) {
			Ts.call(this), (this.cameras = t || []);
		}
		function Nl() {
			Qr.call(this), (this.type = 'Group');
		}
		function zl() {
			(this._targetRay = null), (this._grip = null), (this._hand = null);
		}
		function Bl(t, e) {
			const n = this;
			let i = null,
				r = 1,
				o = null,
				s = 'local-floor',
				a = null;
			const l = [],
				c = new Map(),
				h = new Ts();
			h.layers.enable(1), (h.viewport = new Zi());
			const u = new Ts();
			u.layers.enable(2), (u.viewport = new Zi());
			const d = [h, u],
				p = new Il();
			p.layers.enable(1), p.layers.enable(2);
			let f = null,
				m = null;
			function g(t) {
				const e = c.get(t.inputSource);
				e &&
					e.dispatchEvent({
						type: t.type,
					});
			}
			function v() {
				c.forEach(function (t, e) {
					t.disconnect(e);
				}),
					c.clear(),
					t.setFramebuffer(null),
					t.setRenderTarget(t.getRenderTarget()),
					S.stop(),
					(n.isPresenting = !1),
					n.dispatchEvent({
						type: 'sessionend',
					});
			}
			function y(t) {
				(o = t),
					S.setContext(i),
					S.start(),
					(n.isPresenting = !0),
					n.dispatchEvent({
						type: 'sessionstart',
					});
			}
			function x(t) {
				const e = i.inputSources;
				for (let t = 0; t < l.length; t++) c.set(e[t], l[t]);
				for (let e = 0; e < t.removed.length; e++) {
					const n = t.removed[e],
						i = c.get(n);
					i &&
						(i.dispatchEvent({
							type: 'disconnected',
							data: n,
						}),
						c.delete(n));
				}
				for (let e = 0; e < t.added.length; e++) {
					const n = t.added[e],
						i = c.get(n);
					i &&
						i.dispatchEvent({
							type: 'connected',
							data: n,
						});
				}
			}
			(this.enabled = !1),
				(this.isPresenting = !1),
				(this.getController = function (t) {
					let e = l[t];
					return void 0 === e && ((e = new zl()), (l[t] = e)), e.getTargetRaySpace();
				}),
				(this.getControllerGrip = function (t) {
					let e = l[t];
					return void 0 === e && ((e = new zl()), (l[t] = e)), e.getGripSpace();
				}),
				(this.getHand = function (t) {
					let e = l[t];
					return void 0 === e && ((e = new zl()), (l[t] = e)), e.getHandSpace();
				}),
				(this.setFramebufferScaleFactor = function (t) {
					(r = t), !0 === n.isPresenting && console.warn('THREE.WebXRManager: Cannot change framebuffer scale while presenting.');
				}),
				(this.setReferenceSpaceType = function (t) {
					(s = t), !0 === n.isPresenting && console.warn('THREE.WebXRManager: Cannot change reference space type while presenting.');
				}),
				(this.getReferenceSpace = function () {
					return o;
				}),
				(this.getSession = function () {
					return i;
				}),
				(this.setSession = function (t) {
					if (((i = t), null !== i)) {
						i.addEventListener('select', g),
							i.addEventListener('selectstart', g),
							i.addEventListener('selectend', g),
							i.addEventListener('squeeze', g),
							i.addEventListener('squeezestart', g),
							i.addEventListener('squeezeend', g),
							i.addEventListener('end', v);
						const t = e.getContextAttributes();
						!0 !== t.xrCompatible && e.makeXRCompatible();
						const n = {
								antialias: t.antialias,
								alpha: t.alpha,
								depth: t.depth,
								stencil: t.stencil,
								framebufferScaleFactor: r,
							},
							o = new XRWebGLLayer(i, e, n);
						i.updateRenderState({
							baseLayer: o,
						}),
							i.requestReferenceSpace(s).then(y),
							i.addEventListener('inputsourceschange', x);
					}
				});
			const _ = new $i(),
				b = new $i();
			function w(t, e) {
				null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld);
			}
			this.getCamera = function (t) {
				(p.near = u.near = h.near = t.near),
					(p.far = u.far = h.far = t.far),
					(f === p.near && m === p.far) ||
						(i.updateRenderState({
							depthNear: p.near,
							depthFar: p.far,
						}),
						(f = p.near),
						(m = p.far));
				const e = t.parent,
					n = p.cameras;
				w(p, e);
				for (let t = 0; t < n.length; t++) w(n[t], e);
				t.matrixWorld.copy(p.matrixWorld);
				const r = t.children;
				for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
				return (
					2 === n.length
						? (function (t, e, n) {
								_.setFromMatrixPosition(e.matrixWorld), b.setFromMatrixPosition(n.matrixWorld);
								const i = _.distanceTo(b),
									r = e.projectionMatrix.elements,
									o = n.projectionMatrix.elements,
									s = r[14] / (r[10] - 1),
									a = r[14] / (r[10] + 1),
									l = (r[9] + 1) / r[5],
									c = (r[9] - 1) / r[5],
									h = (r[8] - 1) / r[0],
									u = (o[8] + 1) / o[0],
									d = s * h,
									p = s * u,
									f = i / (-h + u),
									m = f * -h;
								e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
									t.translateX(m),
									t.translateZ(f),
									t.matrixWorld.compose(t.position, t.quaternion, t.scale),
									t.matrixWorldInverse.getInverse(t.matrixWorld);
								const g = s + f,
									v = a + f,
									y = d - m,
									x = p + (i - m),
									w = ((l * a) / v) * g,
									M = ((c * a) / v) * g;
								t.projectionMatrix.makePerspective(y, x, w, M, g, v);
						  })(p, h, u)
						: p.projectionMatrix.copy(h.projectionMatrix),
					p
				);
			};
			let M = null;
			const S = new Os();
			S.setAnimationLoop(function (e, n) {
				if (((a = n.getViewerPose(o)), null !== a)) {
					const e = a.views,
						n = i.renderState.baseLayer;
					t.setFramebuffer(n.framebuffer);
					let r = !1;
					e.length !== p.cameras.length && ((p.cameras.length = 0), (r = !0));
					for (let t = 0; t < e.length; t++) {
						const i = e[t],
							o = n.getViewport(i),
							s = d[t];
						s.matrix.fromArray(i.transform.matrix),
							s.projectionMatrix.fromArray(i.projectionMatrix),
							s.viewport.set(o.x, o.y, o.width, o.height),
							0 === t && p.matrix.copy(s.matrix),
							!0 === r && p.cameras.push(s);
					}
				}
				const r = i.inputSources;
				for (let t = 0; t < l.length; t++) {
					const e = l[t],
						i = r[t];
					e.update(i, n, o);
				}
				M && M(e, n);
			}),
				(this.setAnimationLoop = function (t) {
					M = t;
				}),
				(this.dispose = function () {});
		}
		function kl(t) {
			function e(e, n) {
				(e.opacity.value = n.opacity),
					n.color && e.diffuse.value.copy(n.color),
					n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
					n.map && (e.map.value = n.map),
					n.alphaMap && (e.alphaMap.value = n.alphaMap),
					n.specularMap && (e.specularMap.value = n.specularMap);
				const i = t.get(n).envMap;
				if (i) {
					(e.envMap.value = i), (e.flipEnvMap.value = i.isCubeTexture ? -1 : 1), (e.reflectivity.value = n.reflectivity), (e.refractionRatio.value = n.refractionRatio);
					const r = t.get(i).__maxMipLevel;
					void 0 !== r && (e.maxMipLevel.value = r);
				}
				let r, o;
				n.lightMap && ((e.lightMap.value = n.lightMap), (e.lightMapIntensity.value = n.lightMapIntensity)),
					n.aoMap && ((e.aoMap.value = n.aoMap), (e.aoMapIntensity.value = n.aoMapIntensity)),
					n.map
						? (r = n.map)
						: n.specularMap
						? (r = n.specularMap)
						: n.displacementMap
						? (r = n.displacementMap)
						: n.normalMap
						? (r = n.normalMap)
						: n.bumpMap
						? (r = n.bumpMap)
						: n.roughnessMap
						? (r = n.roughnessMap)
						: n.metalnessMap
						? (r = n.metalnessMap)
						: n.alphaMap
						? (r = n.alphaMap)
						: n.emissiveMap
						? (r = n.emissiveMap)
						: n.clearcoatMap
						? (r = n.clearcoatMap)
						: n.clearcoatNormalMap
						? (r = n.clearcoatNormalMap)
						: n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap),
					void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)),
					n.aoMap ? (o = n.aoMap) : n.lightMap && (o = n.lightMap),
					void 0 !== o && (o.isWebGLRenderTarget && (o = o.texture), !0 === o.matrixAutoUpdate && o.updateMatrix(), e.uv2Transform.value.copy(o.matrix));
			}
			function n(e, n) {
				(e.roughness.value = n.roughness),
					(e.metalness.value = n.metalness),
					n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
					n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
					n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
					n.bumpMap && ((e.bumpMap.value = n.bumpMap), (e.bumpScale.value = n.bumpScale), 1 === n.side && (e.bumpScale.value *= -1)),
					n.normalMap && ((e.normalMap.value = n.normalMap), e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()),
					n.displacementMap && ((e.displacementMap.value = n.displacementMap), (e.displacementScale.value = n.displacementScale), (e.displacementBias.value = n.displacementBias));
				t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
			}
			return {
				refreshFogUniforms: function (t, e) {
					t.fogColor.value.copy(e.color), e.isFog ? ((t.fogNear.value = e.near), (t.fogFar.value = e.far)) : e.isFogExp2 && (t.fogDensity.value = e.density);
				},
				refreshMaterialUniforms: function (t, i, r, o) {
					i.isMeshBasicMaterial
						? e(t, i)
						: i.isMeshLambertMaterial
						? (e(t, i),
						  (function (t, e) {
								e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
						  })(t, i))
						: i.isMeshToonMaterial
						? (e(t, i),
						  (function (t, e) {
								e.gradientMap && (t.gradientMap.value = e.gradientMap);
								e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
								e.bumpMap && ((t.bumpMap.value = e.bumpMap), (t.bumpScale.value = e.bumpScale), 1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap && ((t.normalMap.value = e.normalMap), t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
								e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshPhongMaterial
						? (e(t, i),
						  (function (t, e) {
								t.specular.value.copy(e.specular), (t.shininess.value = Math.max(e.shininess, 1e-4)), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
								e.bumpMap && ((t.bumpMap.value = e.bumpMap), (t.bumpScale.value = e.bumpScale), 1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap && ((t.normalMap.value = e.normalMap), t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
								e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshStandardMaterial
						? (e(t, i),
						  i.isMeshPhysicalMaterial
								? (function (t, e) {
										n(t, e), (t.reflectivity.value = e.reflectivity), (t.clearcoat.value = e.clearcoat), (t.clearcoatRoughness.value = e.clearcoatRoughness), e.sheen && t.sheen.value.copy(e.sheen);
										e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
										e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
										e.clearcoatNormalMap &&
											(t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), (t.clearcoatNormalMap.value = e.clearcoatNormalMap), 1 === e.side && t.clearcoatNormalScale.value.negate());
										(t.transmission.value = e.transmission), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap);
								  })(t, i)
								: n(t, i))
						: i.isMeshMatcapMaterial
						? (e(t, i),
						  (function (t, e) {
								e.matcap && (t.matcap.value = e.matcap);
								e.bumpMap && ((t.bumpMap.value = e.bumpMap), (t.bumpScale.value = e.bumpScale), 1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap && ((t.normalMap.value = e.normalMap), t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
								e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshDepthMaterial
						? (e(t, i),
						  (function (t, e) {
								e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshDistanceMaterial
						? (e(t, i),
						  (function (t, e) {
								e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
								t.referencePosition.value.copy(e.referencePosition), (t.nearDistance.value = e.nearDistance), (t.farDistance.value = e.farDistance);
						  })(t, i))
						: i.isMeshNormalMaterial
						? (e(t, i),
						  (function (t, e) {
								e.bumpMap && ((t.bumpMap.value = e.bumpMap), (t.bumpScale.value = e.bumpScale), 1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap && ((t.normalMap.value = e.normalMap), t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
								e.displacementMap && ((t.displacementMap.value = e.displacementMap), (t.displacementScale.value = e.displacementScale), (t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isLineBasicMaterial
						? ((function (t, e) {
								t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
						  })(t, i),
						  i.isLineDashedMaterial &&
								(function (t, e) {
									(t.dashSize.value = e.dashSize), (t.totalSize.value = e.dashSize + e.gapSize), (t.scale.value = e.scale);
								})(t, i))
						: i.isPointsMaterial
						? (function (t, e, n, i) {
								t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity), (t.size.value = e.size * n), (t.scale.value = 0.5 * i), e.map && (t.map.value = e.map);
								e.alphaMap && (t.alphaMap.value = e.alphaMap);
								let r;
								e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap);
								void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
						  })(t, i, r, o)
						: i.isSpriteMaterial
						? (function (t, e) {
								t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity), (t.rotation.value = e.rotation), e.map && (t.map.value = e.map);
								e.alphaMap && (t.alphaMap.value = e.alphaMap);
								let n;
								e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap);
								void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
						  })(t, i)
						: i.isShadowMaterial
						? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
						: i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
				},
			};
		}
		function Fl(t) {
			const e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas'),
				n = void 0 !== t.context ? t.context : null,
				i = void 0 !== t.alpha && t.alpha,
				r = void 0 === t.depth || t.depth,
				o = void 0 === t.stencil || t.stencil,
				s = void 0 !== t.antialias && t.antialias,
				a = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
				l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
				c = void 0 !== t.powerPreference ? t.powerPreference : 'default',
				h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
			let u = null,
				d = null;
			(this.domElement = e),
				(this.debug = {
					checkShaderErrors: !0,
				}),
				(this.autoClear = !0),
				(this.autoClearColor = !0),
				(this.autoClearDepth = !0),
				(this.autoClearStencil = !0),
				(this.sortObjects = !0),
				(this.clippingPlanes = []),
				(this.localClippingEnabled = !1),
				(this.gammaFactor = 2),
				(this.outputEncoding = 3e3),
				(this.physicallyCorrectLights = !1),
				(this.toneMapping = 0),
				(this.toneMappingExposure = 1),
				(this.maxMorphTargets = 8),
				(this.maxMorphNormals = 4);
			const p = this;
			let f = !1,
				m = null,
				g = 0,
				v = 0,
				y = null,
				x = null,
				_ = -1,
				b = null,
				w = null;
			const M = new Zi(),
				S = new Zi();
			let T = null,
				E = e.width,
				A = e.height,
				L = 1,
				R = null,
				P = null;
			const C = new Zi(0, 0, E, A),
				O = new Zi(0, 0, E, A);
			let D = !1;
			const I = new Cs();
			let N = !1,
				z = !1;
			const B = new Ar(),
				k = new $i(),
				F = {
					background: null,
					fog: null,
					environment: null,
					overrideMaterial: null,
					isScene: !0,
				};
			function U() {
				return null === y ? L : 1;
			}
			let H,
				G,
				V,
				j,
				W,
				q,
				X,
				Y,
				Z,
				J,
				K,
				Q,
				$,
				tt,
				et,
				nt,
				it,
				rt,
				ot,
				st,
				at,
				lt = n;
			function ct(t, n) {
				for (let i = 0; i < t.length; i++) {
					const r = t[i],
						o = e.getContext(r, n);
					if (null !== o) return o;
				}
				return null;
			}
			try {
				const t = {
					alpha: i,
					depth: r,
					stencil: o,
					antialias: s,
					premultipliedAlpha: a,
					preserveDrawingBuffer: l,
					powerPreference: c,
					failIfMajorPerformanceCaveat: h,
				};
				if ((e.addEventListener('webglcontextlost', pt, !1), e.addEventListener('webglcontextrestored', ft, !1), null === lt)) {
					const e = ['webgl2', 'webgl', 'experimental-webgl'];
					if ((!0 === p.isWebGL1Renderer && e.shift(), (lt = ct(e, t)), null === lt))
						throw ct(e) ? new Error('Error creating WebGL context with your selected attributes.') : new Error('Error creating WebGL context.');
				}
				void 0 === lt.getShaderPrecisionFormat &&
					(lt.getShaderPrecisionFormat = function () {
						return {
							rangeMin: 1,
							rangeMax: 1,
							precision: 1,
						};
					});
			} catch (t) {
				throw (console.error('THREE.WebGLRenderer: ' + t.message), t);
			}
			function ht() {
				(H = new js(lt)),
					(G = new Hs(lt, H, t)),
					!1 === G.isWebGL2 &&
						(H.get('WEBGL_depth_texture'),
						H.get('OES_texture_float'),
						H.get('OES_texture_half_float'),
						H.get('OES_texture_half_float_linear'),
						H.get('OES_standard_derivatives'),
						H.get('OES_element_index_uint'),
						H.get('OES_vertex_array_object'),
						H.get('ANGLE_instanced_arrays')),
					H.get('OES_texture_float_linear'),
					(st = new Dl(lt, H, G)),
					(V = new Cl(lt, H, G)),
					V.scissor(S.copy(O).multiplyScalar(L).floor()),
					V.viewport(M.copy(C).multiplyScalar(L).floor()),
					(j = new Xs(lt)),
					(W = new vl()),
					(q = new Ol(lt, H, V, W, G, st, j)),
					(X = new Vs(p)),
					(Y = new Ds(lt, G)),
					(at = new Fs(lt, H, Y, G)),
					(Z = new Ws(lt, Y, j, at)),
					(J = new Ks(lt, Z, Y, j)),
					(it = new Js(lt)),
					(et = new Gs(W)),
					(K = new gl(p, X, H, G, at, et)),
					(Q = new kl(W)),
					($ = new bl(W)),
					(tt = new Al()),
					(nt = new ks(p, X, V, J, a)),
					(rt = new Us(lt, H, j, G)),
					(ot = new qs(lt, H, j, G)),
					(j.programs = K.programs),
					(p.capabilities = G),
					(p.extensions = H),
					(p.properties = W),
					(p.renderLists = $),
					(p.state = V),
					(p.info = j);
			}
			ht();
			const ut = new Bl(p, lt);
			this.xr = ut;
			const dt = new Pl(p, J, G.maxTextureSize);
			function pt(t) {
				t.preventDefault(), console.log('THREE.WebGLRenderer: Context Lost.'), (f = !0);
			}
			function ft() {
				console.log('THREE.WebGLRenderer: Context Restored.'), (f = !1), ht();
			}
			function mt(t) {
				const e = t.target;
				e.removeEventListener('dispose', mt),
					(function (t) {
						gt(t), W.remove(t);
					})(e);
			}
			function gt(t) {
				const e = W.get(t).program;
				void 0 !== e && K.releaseProgram(e);
			}
			(this.shadowMap = dt),
				(this.getContext = function () {
					return lt;
				}),
				(this.getContextAttributes = function () {
					return lt.getContextAttributes();
				}),
				(this.forceContextLoss = function () {
					const t = H.get('WEBGL_lose_context');
					t && t.loseContext();
				}),
				(this.forceContextRestore = function () {
					const t = H.get('WEBGL_lose_context');
					t && t.restoreContext();
				}),
				(this.getPixelRatio = function () {
					return L;
				}),
				(this.setPixelRatio = function (t) {
					void 0 !== t && ((L = t), this.setSize(E, A, !1));
				}),
				(this.getSize = function (t) {
					return void 0 === t && (console.warn('WebGLRenderer: .getsize() now requires a Vector2 as an argument'), (t = new Vi())), t.set(E, A);
				}),
				(this.setSize = function (t, n, i) {
					ut.isPresenting
						? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.")
						: ((E = t), (A = n), (e.width = Math.floor(t * L)), (e.height = Math.floor(n * L)), !1 !== i && ((e.style.width = t + 'px'), (e.style.height = n + 'px')), this.setViewport(0, 0, t, n));
				}),
				(this.getDrawingBufferSize = function (t) {
					return void 0 === t && (console.warn('WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument'), (t = new Vi())), t.set(E * L, A * L).floor();
				}),
				(this.setDrawingBufferSize = function (t, n, i) {
					(E = t), (A = n), (L = i), (e.width = Math.floor(t * i)), (e.height = Math.floor(n * i)), this.setViewport(0, 0, t, n);
				}),
				(this.getCurrentViewport = function (t) {
					return void 0 === t && (console.warn('WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument'), (t = new Zi())), t.copy(M);
				}),
				(this.getViewport = function (t) {
					return t.copy(C);
				}),
				(this.setViewport = function (t, e, n, i) {
					t.isVector4 ? C.set(t.x, t.y, t.z, t.w) : C.set(t, e, n, i), V.viewport(M.copy(C).multiplyScalar(L).floor());
				}),
				(this.getScissor = function (t) {
					return t.copy(O);
				}),
				(this.setScissor = function (t, e, n, i) {
					t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, n, i), V.scissor(S.copy(O).multiplyScalar(L).floor());
				}),
				(this.getScissorTest = function () {
					return D;
				}),
				(this.setScissorTest = function (t) {
					V.setScissorTest((D = t));
				}),
				(this.setOpaqueSort = function (t) {
					R = t;
				}),
				(this.setTransparentSort = function (t) {
					P = t;
				}),
				(this.getClearColor = function () {
					return nt.getClearColor();
				}),
				(this.setClearColor = function () {
					nt.setClearColor.apply(nt, arguments);
				}),
				(this.getClearAlpha = function () {
					return nt.getClearAlpha();
				}),
				(this.setClearAlpha = function () {
					nt.setClearAlpha.apply(nt, arguments);
				}),
				(this.clear = function (t, e, n) {
					let i = 0;
					(void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), lt.clear(i);
				}),
				(this.clearColor = function () {
					this.clear(!0, !1, !1);
				}),
				(this.clearDepth = function () {
					this.clear(!1, !0, !1);
				}),
				(this.clearStencil = function () {
					this.clear(!1, !1, !0);
				}),
				(this.dispose = function () {
					e.removeEventListener('webglcontextlost', pt, !1),
						e.removeEventListener('webglcontextrestored', ft, !1),
						$.dispose(),
						tt.dispose(),
						W.dispose(),
						X.dispose(),
						J.dispose(),
						at.dispose(),
						ut.dispose(),
						yt.stop();
				}),
				(this.renderBufferImmediate = function (t, e) {
					at.initAttributes();
					const n = W.get(t);
					t.hasPositions && !n.position && (n.position = lt.createBuffer()),
						t.hasNormals && !n.normal && (n.normal = lt.createBuffer()),
						t.hasUvs && !n.uv && (n.uv = lt.createBuffer()),
						t.hasColors && !n.color && (n.color = lt.createBuffer());
					const i = e.getAttributes();
					t.hasPositions && (lt.bindBuffer(34962, n.position), lt.bufferData(34962, t.positionArray, 35048), at.enableAttribute(i.position), lt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)),
						t.hasNormals && (lt.bindBuffer(34962, n.normal), lt.bufferData(34962, t.normalArray, 35048), at.enableAttribute(i.normal), lt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)),
						t.hasUvs && (lt.bindBuffer(34962, n.uv), lt.bufferData(34962, t.uvArray, 35048), at.enableAttribute(i.uv), lt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)),
						t.hasColors && (lt.bindBuffer(34962, n.color), lt.bufferData(34962, t.colorArray, 35048), at.enableAttribute(i.color), lt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)),
						at.disableUnusedAttributes(),
						lt.drawArrays(4, 0, t.count),
						(t.count = 0);
				}),
				(this.renderBufferDirect = function (t, e, n, i, r, o) {
					null === e && (e = F);
					const s = r.isMesh && r.matrixWorld.determinant() < 0,
						a = Mt(t, e, i, r);
					V.setMaterial(i, s);
					let l = n.index;
					const c = n.attributes.position;
					if (null === l) {
						if (void 0 === c || 0 === c.count) return;
					} else if (0 === l.count) return;
					let h,
						u = 1;
					!0 === i.wireframe && ((l = Z.getWireframeAttribute(n)), (u = 2)), (i.morphTargets || i.morphNormals) && it.update(r, n, i, a), at.setup(r, i, a, n, l);
					let d = rt;
					null !== l && ((h = Y.get(l)), (d = ot), d.setIndex(h));
					const p = null !== l ? l.count : c.count,
						f = n.drawRange.start * u,
						m = n.drawRange.count * u,
						g = null !== o ? o.start * u : 0,
						v = null !== o ? o.count * u : 1 / 0,
						y = Math.max(f, g),
						x = Math.min(p, f + m, g + v) - 1,
						_ = Math.max(0, x - y + 1);
					if (0 !== _) {
						if (r.isMesh) !0 === i.wireframe ? (V.setLineWidth(i.wireframeLinewidth * U()), d.setMode(1)) : d.setMode(4);
						else if (r.isLine) {
							let t = i.linewidth;
							void 0 === t && (t = 1), V.setLineWidth(t * U()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3);
						} else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
						if (r.isInstancedMesh) d.renderInstances(y, _, r.count);
						else if (n.isInstancedBufferGeometry) {
							const t = Math.min(n.instanceCount, n._maxInstanceCount);
							d.renderInstances(y, _, t);
						} else d.render(y, _);
					}
				}),
				(this.compile = function (t, e) {
					(d = tt.get(t, e)),
						d.init(),
						t.traverse(function (t) {
							t.isLight && (d.pushLight(t), t.castShadow && d.pushShadow(t));
						}),
						d.setupLights(e);
					const n = new WeakMap();
					t.traverse(function (e) {
						const i = e.material;
						if (i)
							if (Array.isArray(i))
								for (let r = 0; r < i.length; r++) {
									const o = i[r];
									!1 === n.has(o) && (wt(o, t, e), n.set(o));
								}
							else !1 === n.has(i) && (wt(i, t, e), n.set(i));
					});
				});
			let vt = null;
			const yt = new Os();
			function xt(t, e, n, i) {
				if (!1 === t.visible) return;
				if (t.layers.test(e.layers))
					if (t.isGroup) n = t.renderOrder;
					else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
					else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
					else if (t.isSprite) {
						if (!t.frustumCulled || I.intersectsSprite(t)) {
							i && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B);
							const e = J.update(t),
								r = t.material;
							r.visible && u.push(t, e, r, n, k.z, null);
						}
					} else if (t.isImmediateRenderObject) i && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B), u.push(t, null, t.material, n, k.z, null);
					else if (
						(t.isMesh || t.isLine || t.isPoints) &&
						(t.isSkinnedMesh && t.skeleton.frame !== j.render.frame && (t.skeleton.update(), (t.skeleton.frame = j.render.frame)), !t.frustumCulled || I.intersectsObject(t))
					) {
						i && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B);
						const e = J.update(t),
							r = t.material;
						if (Array.isArray(r)) {
							const i = e.groups;
							for (let o = 0, s = i.length; o < s; o++) {
								const s = i[o],
									a = r[s.materialIndex];
								a && a.visible && u.push(t, e, a, n, k.z, s);
							}
						} else r.visible && u.push(t, e, r, n, k.z, null);
					}
				const r = t.children;
				for (let t = 0, o = r.length; t < o; t++) xt(r[t], e, n, i);
			}
			function _t(t, e, n) {
				const i = !0 === e.isScene ? e.overrideMaterial : null;
				for (let r = 0, o = t.length; r < o; r++) {
					const o = t[r],
						s = o.object,
						a = o.geometry,
						l = null === i ? o.material : i,
						c = o.group;
					if (n.isArrayCamera) {
						w = n;
						const t = n.cameras;
						for (let n = 0, i = t.length; n < i; n++) {
							const i = t[n];
							s.layers.test(i.layers) && (V.viewport(M.copy(i.viewport)), d.setupLights(i), bt(s, e, i, a, l, c));
						}
					} else (w = null), bt(s, e, n, a, l, c);
				}
			}
			function bt(t, e, n, i, r, o) {
				if (
					(t.onBeforeRender(p, e, n, i, r, o),
					(d = tt.get(e, w || n)),
					t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
					t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
					t.isImmediateRenderObject)
				) {
					const i = Mt(n, e, r, t);
					V.setMaterial(r),
						at.reset(),
						(function (t, e) {
							t.render(function (t) {
								p.renderBufferImmediate(t, e);
							});
						})(t, i);
				} else p.renderBufferDirect(n, e, i, r, t, o);
				t.onAfterRender(p, e, n, i, r, o), (d = tt.get(e, w || n));
			}
			function wt(t, e, n) {
				!0 !== e.isScene && (e = F);
				const i = W.get(t),
					r = d.state.lights,
					o = d.state.shadowsArray,
					s = r.state.version,
					a = K.getParameters(t, r.state, o, e, n),
					l = K.getProgramCacheKey(a);
				let c = i.program,
					h = !0;
				if (void 0 === c) t.addEventListener('dispose', mt);
				else if (c.cacheKey !== l) gt(t);
				else if (i.lightsStateVersion !== s) h = !1;
				else {
					if (void 0 !== a.shaderID) {
						const n = t.isMeshStandardMaterial ? e.environment : null;
						return void (i.envMap = X.get(t.envMap || n));
					}
					h = !1;
				}
				h && ((a.uniforms = K.getUniforms(t)), t.onBeforeCompile(a, p), (c = K.acquireProgram(a, l)), (i.program = c), (i.uniforms = a.uniforms), (i.outputEncoding = a.outputEncoding));
				const u = i.uniforms;
				((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) || ((i.numClippingPlanes = et.numPlanes), (i.numIntersection = et.numIntersection), (u.clippingPlanes = et.uniform)),
					(i.environment = t.isMeshStandardMaterial ? e.environment : null),
					(i.fog = e.fog),
					(i.envMap = X.get(t.envMap || i.environment)),
					(i.needsLights = (function (t) {
						return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || (t.isShaderMaterial && !0 === t.lights);
					})(t)),
					(i.lightsStateVersion = s),
					i.needsLights &&
						((u.ambientLightColor.value = r.state.ambient),
						(u.lightProbe.value = r.state.probe),
						(u.directionalLights.value = r.state.directional),
						(u.directionalLightShadows.value = r.state.directionalShadow),
						(u.spotLights.value = r.state.spot),
						(u.spotLightShadows.value = r.state.spotShadow),
						(u.rectAreaLights.value = r.state.rectArea),
						(u.ltc_1.value = r.state.rectAreaLTC1),
						(u.ltc_2.value = r.state.rectAreaLTC2),
						(u.pointLights.value = r.state.point),
						(u.pointLightShadows.value = r.state.pointShadow),
						(u.hemisphereLights.value = r.state.hemi),
						(u.directionalShadowMap.value = r.state.directionalShadowMap),
						(u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
						(u.spotShadowMap.value = r.state.spotShadowMap),
						(u.spotShadowMatrix.value = r.state.spotShadowMatrix),
						(u.pointShadowMap.value = r.state.pointShadowMap),
						(u.pointShadowMatrix.value = r.state.pointShadowMatrix));
				const f = i.program.getUniforms(),
					m = Za.seqWithValue(f.seq, u);
				i.uniformsList = m;
			}
			function Mt(t, e, n, i) {
				!0 !== e.isScene && (e = F), q.resetTextureUnits();
				const r = e.fog,
					o = n.isMeshStandardMaterial ? e.environment : null,
					s = null === y ? p.outputEncoding : y.texture.encoding,
					a = X.get(n.envMap || o),
					l = W.get(n),
					c = d.state.lights;
				if (!0 === N && (!0 === z || t !== b)) {
					const e = t === b && n.id === _;
					et.setState(n, t, e);
				}
				n.version === l.__version
					? (n.fog && l.fog !== r) || l.environment !== o || (l.needsLights && l.lightsStateVersion !== c.state.version)
						? wt(n, e, i)
						: void 0 === l.numClippingPlanes || (l.numClippingPlanes === et.numPlanes && l.numIntersection === et.numIntersection)
						? (l.outputEncoding !== s || l.envMap !== a) && wt(n, e, i)
						: wt(n, e, i)
					: (wt(n, e, i), (l.__version = n.version));
				let h = !1,
					u = !1,
					f = !1;
				const m = l.program,
					g = m.getUniforms(),
					v = l.uniforms;
				if ((V.useProgram(m.program) && ((h = !0), (u = !0), (f = !0)), n.id !== _ && ((_ = n.id), (u = !0)), h || b !== t)) {
					if (
						(g.setValue(lt, 'projectionMatrix', t.projectionMatrix),
						G.logarithmicDepthBuffer && g.setValue(lt, 'logDepthBufFC', 2 / (Math.log(t.far + 1) / Math.LN2)),
						b !== t && ((b = t), (u = !0), (f = !0)),
						n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap)
					) {
						const e = g.map.cameraPosition;
						void 0 !== e && e.setValue(lt, k.setFromMatrixPosition(t.matrixWorld));
					}
					(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) &&
						g.setValue(lt, 'isOrthographic', !0 === t.isOrthographicCamera),
						(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) &&
							g.setValue(lt, 'viewMatrix', t.matrixWorldInverse);
				}
				if (n.skinning) {
					g.setOptional(lt, i, 'bindMatrix'), g.setOptional(lt, i, 'bindMatrixInverse');
					const t = i.skeleton;
					if (t) {
						const e = t.bones;
						if (G.floatVertexTextures) {
							if (void 0 === t.boneTexture) {
								let n = Math.sqrt(4 * e.length);
								(n = Gi.ceilPowerOfTwo(n)), (n = Math.max(n, 4));
								const i = new Float32Array(n * n * 4);
								i.set(t.boneMatrices);
								const r = new Ls(i, n, n, 1023, 1015);
								(t.boneMatrices = i), (t.boneTexture = r), (t.boneTextureSize = n);
							}
							g.setValue(lt, 'boneTexture', t.boneTexture, q), g.setValue(lt, 'boneTextureSize', t.boneTextureSize);
						} else g.setOptional(lt, t, 'boneMatrices');
					}
				}
				var x, w;
				return (
					(u || l.receiveShadow !== i.receiveShadow) && ((l.receiveShadow = i.receiveShadow), g.setValue(lt, 'receiveShadow', i.receiveShadow)),
					u &&
						(g.setValue(lt, 'toneMappingExposure', p.toneMappingExposure),
						l.needsLights &&
							((w = f),
							((x = v).ambientLightColor.needsUpdate = w),
							(x.lightProbe.needsUpdate = w),
							(x.directionalLights.needsUpdate = w),
							(x.directionalLightShadows.needsUpdate = w),
							(x.pointLights.needsUpdate = w),
							(x.pointLightShadows.needsUpdate = w),
							(x.spotLights.needsUpdate = w),
							(x.spotLightShadows.needsUpdate = w),
							(x.rectAreaLights.needsUpdate = w),
							(x.hemisphereLights.needsUpdate = w)),
						r && n.fog && Q.refreshFogUniforms(v, r),
						Q.refreshMaterialUniforms(v, n, L, A),
						Za.upload(lt, l.uniformsList, v, q)),
					n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Za.upload(lt, l.uniformsList, v, q), (n.uniformsNeedUpdate = !1)),
					n.isSpriteMaterial && g.setValue(lt, 'center', i.center),
					g.setValue(lt, 'modelViewMatrix', i.modelViewMatrix),
					g.setValue(lt, 'normalMatrix', i.normalMatrix),
					g.setValue(lt, 'modelMatrix', i.matrixWorld),
					m
				);
			}
			yt.setAnimationLoop(function (t) {
				ut.isPresenting || (vt && vt(t));
			}),
				'undefined' != typeof window && yt.setContext(window),
				(this.setAnimationLoop = function (t) {
					(vt = t), ut.setAnimationLoop(t), null === t ? yt.stop() : yt.start();
				}),
				(this.render = function (t, e) {
					let n, i;
					if (
						(void 0 !== arguments[2] && (console.warn('THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.'), (n = arguments[2])),
						void 0 !== arguments[3] && (console.warn('THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.'), (i = arguments[3])),
						void 0 !== e && !0 !== e.isCamera)
					)
						return void console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
					if (!0 === f) return;
					at.resetDefaultState(),
						(_ = -1),
						(b = null),
						!0 === t.autoUpdate && t.updateMatrixWorld(),
						null === e.parent && e.updateMatrixWorld(),
						!0 === ut.enabled && !0 === ut.isPresenting && (e = ut.getCamera(e)),
						!0 === t.isScene && t.onBeforeRender(p, t, e, n || y),
						(d = tt.get(t, e)),
						d.init(),
						B.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
						I.setFromProjectionMatrix(B),
						(z = this.localClippingEnabled),
						(N = et.init(this.clippingPlanes, z, e)),
						(u = $.get(t, e)),
						u.init(),
						xt(t, e, 0, p.sortObjects),
						u.finish(),
						!0 === p.sortObjects && u.sort(R, P),
						!0 === N && et.beginShadows();
					const r = d.state.shadowsArray;
					dt.render(r, t, e), d.setupLights(e), !0 === N && et.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), nt.render(u, t, e, i);
					const o = u.opaque,
						s = u.transparent;
					o.length > 0 && _t(o, t, e),
						s.length > 0 && _t(s, t, e),
						!0 === t.isScene && t.onAfterRender(p, t, e),
						null !== y && (q.updateRenderTargetMipmap(y), q.updateMultisampleRenderTarget(y)),
						V.buffers.depth.setTest(!0),
						V.buffers.depth.setMask(!0),
						V.buffers.color.setMask(!0),
						V.setPolygonOffset(!1),
						(u = null),
						(d = null);
				}),
				(this.setFramebuffer = function (t) {
					m !== t && null === y && lt.bindFramebuffer(36160, t), (m = t);
				}),
				(this.getActiveCubeFace = function () {
					return g;
				}),
				(this.getActiveMipmapLevel = function () {
					return v;
				}),
				(this.getRenderList = function () {
					return u;
				}),
				(this.setRenderList = function (t) {
					u = t;
				}),
				(this.getRenderState = function () {
					return d;
				}),
				(this.setRenderState = function (t) {
					d = t;
				}),
				(this.getRenderTarget = function () {
					return y;
				}),
				(this.setRenderTarget = function (t, e = 0, n = 0) {
					(y = t), (g = e), (v = n), t && void 0 === W.get(t).__webglFramebuffer && q.setupRenderTarget(t);
					let i = m,
						r = !1;
					if (t) {
						const n = W.get(t).__webglFramebuffer;
						t.isWebGLCubeRenderTarget ? ((i = n[e]), (r = !0)) : (i = t.isWebGLMultisampleRenderTarget ? W.get(t).__webglMultisampledFramebuffer : n),
							M.copy(t.viewport),
							S.copy(t.scissor),
							(T = t.scissorTest);
					} else M.copy(C).multiplyScalar(L).floor(), S.copy(O).multiplyScalar(L).floor(), (T = D);
					if ((x !== i && (lt.bindFramebuffer(36160, i), (x = i)), V.viewport(M), V.scissor(S), V.setScissorTest(T), r)) {
						const i = W.get(t.texture);
						lt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
					}
				}),
				(this.readRenderTargetPixels = function (t, e, n, i, r, o, s) {
					if (!t || !t.isWebGLRenderTarget) return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');
					let a = W.get(t).__webglFramebuffer;
					if ((t.isWebGLCubeRenderTarget && void 0 !== s && (a = a[s]), a)) {
						let s = !1;
						a !== x && (lt.bindFramebuffer(36160, a), (s = !0));
						try {
							const a = t.texture,
								l = a.format,
								c = a.type;
							if (1023 !== l && st.convert(l) !== lt.getParameter(35739))
								return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.');
							if (
								!(
									1009 === c ||
									st.convert(c) === lt.getParameter(35738) ||
									(1015 === c && (G.isWebGL2 || H.get('OES_texture_float') || H.get('WEBGL_color_buffer_float'))) ||
									(1016 === c && (G.isWebGL2 ? H.get('EXT_color_buffer_float') : H.get('EXT_color_buffer_half_float')))
								)
							)
								return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.');
							36053 === lt.checkFramebufferStatus(36160)
								? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && lt.readPixels(e, n, i, r, st.convert(l), st.convert(c), o)
								: console.error('THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.');
						} finally {
							s && lt.bindFramebuffer(36160, x);
						}
					}
				}),
				(this.copyFramebufferToTexture = function (t, e, n) {
					void 0 === n && (n = 0);
					const i = Math.pow(2, -n),
						r = Math.floor(e.image.width * i),
						o = Math.floor(e.image.height * i),
						s = st.convert(e.format);
					q.setTexture2D(e, 0), lt.copyTexImage2D(3553, n, s, t.x, t.y, r, o, 0), V.unbindTexture();
				}),
				(this.copyTextureToTexture = function (t, e, n, i) {
					void 0 === i && (i = 0);
					const r = e.image.width,
						o = e.image.height,
						s = st.convert(n.format),
						a = st.convert(n.type);
					q.setTexture2D(n, 0),
						lt.pixelStorei(37440, n.flipY),
						lt.pixelStorei(37441, n.premultiplyAlpha),
						lt.pixelStorei(3317, n.unpackAlignment),
						e.isDataTexture
							? lt.texSubImage2D(3553, i, t.x, t.y, r, o, s, a, e.image.data)
							: e.isCompressedTexture
							? lt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, s, e.mipmaps[0].data)
							: lt.texSubImage2D(3553, i, t.x, t.y, s, a, e.image),
						0 === i && n.generateMipmaps && lt.generateMipmap(3553),
						V.unbindTexture();
				}),
				(this.initTexture = function (t) {
					q.setTexture2D(t, 0), V.unbindTexture();
				}),
				'undefined' != typeof __THREE_DEVTOOLS__ &&
					__THREE_DEVTOOLS__.dispatchEvent(
						new CustomEvent('observe', {
							detail: this,
						}),
					);
		}
		function Ul(t) {
			Fl.call(this, t);
		}
		(Il.prototype = Object.assign(Object.create(Ts.prototype), {
			constructor: Il,
			isArrayCamera: !0,
		})),
			(Nl.prototype = Object.assign(Object.create(Qr.prototype), {
				constructor: Nl,
				isGroup: !0,
			})),
			Object.assign(zl.prototype, {
				constructor: zl,
				getHandSpace: function () {
					if (
						null === this._hand &&
						((this._hand = new Nl()),
						(this._hand.matrixAutoUpdate = !1),
						(this._hand.visible = !1),
						(this._hand.joints = []),
						(this._hand.inputState = {
							pinching: !1,
						}),
						window.XRHand)
					)
						for (let t = 0; t <= window.XRHand.LITTLE_PHALANX_TIP; t++) {
							const t = new Nl();
							(t.matrixAutoUpdate = !1), (t.visible = !1), this._hand.joints.push(t), this._hand.add(t);
						}
					return this._hand;
				},
				getTargetRaySpace: function () {
					return null === this._targetRay && ((this._targetRay = new Nl()), (this._targetRay.matrixAutoUpdate = !1), (this._targetRay.visible = !1)), this._targetRay;
				},
				getGripSpace: function () {
					return null === this._grip && ((this._grip = new Nl()), (this._grip.matrixAutoUpdate = !1), (this._grip.visible = !1)), this._grip;
				},
				dispatchEvent: function (t) {
					return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this;
				},
				disconnect: function (t) {
					return (
						this.dispatchEvent({
							type: 'disconnected',
							data: t,
						}),
						null !== this._targetRay && (this._targetRay.visible = !1),
						null !== this._grip && (this._grip.visible = !1),
						null !== this._hand && (this._hand.visible = !1),
						this
					);
				},
				update: function (t, e, n) {
					let i = null,
						r = null,
						o = null;
					const s = this._targetRay,
						a = this._grip,
						l = this._hand;
					if (t)
						if (l && t.hand) {
							o = !0;
							for (let i = 0; i <= window.XRHand.LITTLE_PHALANX_TIP; i++)
								if (t.hand[i]) {
									const r = e.getJointPose(t.hand[i], n),
										o = l.joints[i];
									null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), (o.jointRadius = r.radius)), (o.visible = null !== r);
									const s = l.joints[window.XRHand.INDEX_PHALANX_TIP],
										a = l.joints[window.XRHand.THUMB_PHALANX_TIP],
										c = s.position.distanceTo(a.position),
										h = 0.02,
										u = 0.005;
									l.inputState.pinching && c > h + u
										? ((l.inputState.pinching = !1),
										  this.dispatchEvent({
												type: 'pinchend',
												handedness: t.handedness,
												target: this,
										  }))
										: !l.inputState.pinching &&
										  c <= h - u &&
										  ((l.inputState.pinching = !0),
										  this.dispatchEvent({
												type: 'pinchstart',
												handedness: t.handedness,
												target: this,
										  }));
								}
						} else
							null !== s && ((i = e.getPose(t.targetRaySpace, n)), null !== i && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale))),
								null !== a && t.gripSpace && ((r = e.getPose(t.gripSpace, n)), null !== r && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale)));
					return null !== s && (s.visible = null !== i), null !== a && (a.visible = null !== r), null !== l && (l.visible = null !== o), this;
				},
			}),
			Object.assign(Bl.prototype, Fi.prototype),
			(Ul.prototype = Object.assign(Object.create(Fl.prototype), {
				constructor: Ul,
				isWebGL1Renderer: !0,
			}));
		class Hl {
			constructor(t, e) {
				Object.defineProperty(this, 'isFogExp2', {
					value: !0,
				}),
					(this.name = ''),
					(this.color = new bo(t)),
					(this.density = void 0 !== e ? e : 25e-5);
			}
			clone() {
				return new Hl(this.color, this.density);
			}
			toJSON() {
				return {
					type: 'FogExp2',
					color: this.color.getHex(),
					density: this.density,
				};
			}
		}
		class Gl {
			constructor(t, e, n) {
				Object.defineProperty(this, 'isFog', {
					value: !0,
				}),
					(this.name = ''),
					(this.color = new bo(t)),
					(this.near = void 0 !== e ? e : 1),
					(this.far = void 0 !== n ? n : 1e3);
			}
			clone() {
				return new Gl(this.color, this.near, this.far);
			}
			toJSON() {
				return {
					type: 'Fog',
					color: this.color.getHex(),
					near: this.near,
					far: this.far,
				};
			}
		}
		class Vl extends Qr {
			constructor() {
				super(),
					Object.defineProperty(this, 'isScene', {
						value: !0,
					}),
					(this.type = 'Scene'),
					(this.background = null),
					(this.environment = null),
					(this.fog = null),
					(this.overrideMaterial = null),
					(this.autoUpdate = !0),
					'undefined' != typeof __THREE_DEVTOOLS__ &&
						__THREE_DEVTOOLS__.dispatchEvent(
							new CustomEvent('observe', {
								detail: this,
							}),
						);
			}
			copy(t, e) {
				return (
					super.copy(t, e),
					null !== t.background && (this.background = t.background.clone()),
					null !== t.environment && (this.environment = t.environment.clone()),
					null !== t.fog && (this.fog = t.fog.clone()),
					null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
					(this.autoUpdate = t.autoUpdate),
					(this.matrixAutoUpdate = t.matrixAutoUpdate),
					this
				);
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return (
					null !== this.background && (e.object.background = this.background.toJSON(t)),
					null !== this.environment && (e.object.environment = this.environment.toJSON(t)),
					null !== this.fog && (e.object.fog = this.fog.toJSON()),
					e
				);
			}
		}
		function jl(t, e) {
			(this.array = t),
				(this.stride = e),
				(this.count = void 0 !== t ? t.length / e : 0),
				(this.usage = 35044),
				(this.updateRange = {
					offset: 0,
					count: -1,
				}),
				(this.version = 0),
				(this.uuid = Gi.generateUUID());
		}
		Object.defineProperty(jl.prototype, 'needsUpdate', {
			set: function (t) {
				!0 === t && this.version++;
			},
		}),
			Object.assign(jl.prototype, {
				isInterleavedBuffer: !0,
				onUploadCallback: function () {},
				setUsage: function (t) {
					return (this.usage = t), this;
				},
				copy: function (t) {
					return (this.array = new t.array.constructor(t.array)), (this.count = t.count), (this.stride = t.stride), (this.usage = t.usage), this;
				},
				copyAt: function (t, e, n) {
					(t *= this.stride), (n *= e.stride);
					for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
					return this;
				},
				set: function (t, e) {
					return void 0 === e && (e = 0), this.array.set(t, e), this;
				},
				clone: function (t) {
					void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
						void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Gi.generateUUID()),
						void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
					const e = new jl(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), this.stride);
					return e.setUsage(this.usage), e;
				},
				onUpload: function (t) {
					return (this.onUploadCallback = t), this;
				},
				toJSON: function (t) {
					return (
						void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
						void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Gi.generateUUID()),
						void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
						{
							uuid: this.uuid,
							buffer: this.array.buffer._uuid,
							type: this.array.constructor.name,
							stride: this.stride,
						}
					);
				},
			});
		const Wl = new $i();
		function ql(t, e, n, i) {
			(this.name = ''), (this.data = t), (this.itemSize = e), (this.offset = n), (this.normalized = !0 === i);
		}
		function Xl(t) {
			So.call(this),
				(this.type = 'SpriteMaterial'),
				(this.color = new bo(16777215)),
				(this.map = null),
				(this.alphaMap = null),
				(this.rotation = 0),
				(this.sizeAttenuation = !0),
				(this.transparent = !0),
				this.setValues(t);
		}
		let Yl;
		Object.defineProperties(ql.prototype, {
			count: {
				get: function () {
					return this.data.count;
				},
			},
			array: {
				get: function () {
					return this.data.array;
				},
			},
			needsUpdate: {
				set: function (t) {
					this.data.needsUpdate = t;
				},
			},
		}),
			Object.assign(ql.prototype, {
				isInterleavedBufferAttribute: !0,
				applyMatrix4: function (t) {
					for (let e = 0, n = this.data.count; e < n; e++) (Wl.x = this.getX(e)), (Wl.y = this.getY(e)), (Wl.z = this.getZ(e)), Wl.applyMatrix4(t), this.setXYZ(e, Wl.x, Wl.y, Wl.z);
					return this;
				},
				setX: function (t, e) {
					return (this.data.array[t * this.data.stride + this.offset] = e), this;
				},
				setY: function (t, e) {
					return (this.data.array[t * this.data.stride + this.offset + 1] = e), this;
				},
				setZ: function (t, e) {
					return (this.data.array[t * this.data.stride + this.offset + 2] = e), this;
				},
				setW: function (t, e) {
					return (this.data.array[t * this.data.stride + this.offset + 3] = e), this;
				},
				getX: function (t) {
					return this.data.array[t * this.data.stride + this.offset];
				},
				getY: function (t) {
					return this.data.array[t * this.data.stride + this.offset + 1];
				},
				getZ: function (t) {
					return this.data.array[t * this.data.stride + this.offset + 2];
				},
				getW: function (t) {
					return this.data.array[t * this.data.stride + this.offset + 3];
				},
				setXY: function (t, e, n) {
					return (t = t * this.data.stride + this.offset), (this.data.array[t + 0] = e), (this.data.array[t + 1] = n), this;
				},
				setXYZ: function (t, e, n, i) {
					return (t = t * this.data.stride + this.offset), (this.data.array[t + 0] = e), (this.data.array[t + 1] = n), (this.data.array[t + 2] = i), this;
				},
				setXYZW: function (t, e, n, i, r) {
					return (t = t * this.data.stride + this.offset), (this.data.array[t + 0] = e), (this.data.array[t + 1] = n), (this.data.array[t + 2] = i), (this.data.array[t + 3] = r), this;
				},
				clone: function (t) {
					if (void 0 === t) {
						console.log('THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.');
						const t = [];
						for (let e = 0; e < this.count; e++) {
							const n = e * this.data.stride + this.offset;
							for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
						}
						return new Lo(new this.array.constructor(t), this.itemSize, this.normalized);
					}
					return (
						void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
						void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
						new ql(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
					);
				},
				toJSON: function (t) {
					if (void 0 === t) {
						console.log('THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.');
						const t = [];
						for (let e = 0; e < this.count; e++) {
							const n = e * this.data.stride + this.offset;
							for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
						}
						return {
							itemSize: this.itemSize,
							type: this.array.constructor.name,
							array: t,
							normalized: this.normalized,
						};
					}
					return (
						void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
						void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
						{
							isInterleavedBufferAttribute: !0,
							itemSize: this.itemSize,
							data: this.data.uuid,
							offset: this.offset,
							normalized: this.normalized,
						}
					);
				},
			}),
			(Xl.prototype = Object.create(So.prototype)),
			(Xl.prototype.constructor = Xl),
			(Xl.prototype.isSpriteMaterial = !0),
			(Xl.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t), this.color.copy(t.color), (this.map = t.map), (this.alphaMap = t.alphaMap), (this.rotation = t.rotation), (this.sizeAttenuation = t.sizeAttenuation), this
				);
			});
		const Zl = new $i(),
			Jl = new $i(),
			Kl = new $i(),
			Ql = new Vi(),
			$l = new Vi(),
			tc = new Ar(),
			ec = new $i(),
			nc = new $i(),
			ic = new $i(),
			rc = new Vi(),
			oc = new Vi(),
			sc = new Vi();
		function ac(t) {
			if ((Qr.call(this), (this.type = 'Sprite'), void 0 === Yl)) {
				Yl = new Xo();
				const t = new jl(new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), 5);
				Yl.setIndex([0, 1, 2, 0, 2, 3]), Yl.setAttribute('position', new ql(t, 3, 0, !1)), Yl.setAttribute('uv', new ql(t, 2, 3, !1));
			}
			(this.geometry = Yl), (this.material = void 0 !== t ? t : new Xl()), (this.center = new Vi(0.5, 0.5));
		}
		function lc(t, e, n, i, r, o) {
			Ql.subVectors(t, n).addScalar(0.5).multiply(i),
				void 0 !== r ? (($l.x = o * Ql.x - r * Ql.y), ($l.y = r * Ql.x + o * Ql.y)) : $l.copy(Ql),
				t.copy(e),
				(t.x += $l.x),
				(t.y += $l.y),
				t.applyMatrix4(tc);
		}
		ac.prototype = Object.assign(Object.create(Qr.prototype), {
			constructor: ac,
			isSprite: !0,
			raycast: function (t, e) {
				null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),
					Jl.setFromMatrixScale(this.matrixWorld),
					tc.copy(t.camera.matrixWorld),
					this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld),
					Kl.setFromMatrixPosition(this.modelViewMatrix),
					t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Jl.multiplyScalar(-Kl.z);
				const n = this.material.rotation;
				let i, r;
				0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
				const o = this.center;
				lc(ec.set(-0.5, -0.5, 0), Kl, o, Jl, i, r), lc(nc.set(0.5, -0.5, 0), Kl, o, Jl, i, r), lc(ic.set(0.5, 0.5, 0), Kl, o, Jl, i, r), rc.set(0, 0), oc.set(1, 0), sc.set(1, 1);
				let s = t.ray.intersectTriangle(ec, nc, ic, !1, Zl);
				if (null === s && (lc(nc.set(-0.5, 0.5, 0), Kl, o, Jl, i, r), oc.set(0, 1), (s = t.ray.intersectTriangle(ec, ic, nc, !1, Zl)), null === s)) return;
				const a = t.ray.origin.distanceTo(Zl);
				a < t.near ||
					a > t.far ||
					e.push({
						distance: a,
						point: Zl.clone(),
						uv: fo.getUV(Zl, ec, nc, ic, rc, oc, sc, new Vi()),
						face: null,
						object: this,
					});
			},
			copy: function (t) {
				return Qr.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), (this.material = t.material), this;
			},
		});
		const cc = new $i(),
			hc = new $i();
		function uc() {
			Qr.call(this),
				(this._currentLevel = 0),
				(this.type = 'LOD'),
				Object.defineProperties(this, {
					levels: {
						enumerable: !0,
						value: [],
					},
				}),
				(this.autoUpdate = !0);
		}
		function dc(t, e) {
			t && t.isGeometry && console.error('THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'),
				us.call(this, t, e),
				(this.type = 'SkinnedMesh'),
				(this.bindMode = 'attached'),
				(this.bindMatrix = new Ar()),
				(this.bindMatrixInverse = new Ar());
		}
		(uc.prototype = Object.assign(Object.create(Qr.prototype), {
			constructor: uc,
			isLOD: !0,
			copy: function (t) {
				Qr.prototype.copy.call(this, t, !1);
				const e = t.levels;
				for (let t = 0, n = e.length; t < n; t++) {
					const n = e[t];
					this.addLevel(n.object.clone(), n.distance);
				}
				return (this.autoUpdate = t.autoUpdate), this;
			},
			addLevel: function (t, e) {
				void 0 === e && (e = 0), (e = Math.abs(e));
				const n = this.levels;
				let i;
				for (i = 0; i < n.length && !(e < n[i].distance); i++);
				return (
					n.splice(i, 0, {
						distance: e,
						object: t,
					}),
					this.add(t),
					this
				);
			},
			getCurrentLevel: function () {
				return this._currentLevel;
			},
			getObjectForDistance: function (t) {
				const e = this.levels;
				if (e.length > 0) {
					let n, i;
					for (n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
					return e[n - 1].object;
				}
				return null;
			},
			raycast: function (t, e) {
				if (this.levels.length > 0) {
					cc.setFromMatrixPosition(this.matrixWorld);
					const n = t.ray.origin.distanceTo(cc);
					this.getObjectForDistance(n).raycast(t, e);
				}
			},
			update: function (t) {
				const e = this.levels;
				if (e.length > 1) {
					cc.setFromMatrixPosition(t.matrixWorld), hc.setFromMatrixPosition(this.matrixWorld);
					const n = cc.distanceTo(hc) / t.zoom;
					let i, r;
					for (e[0].object.visible = !0, i = 1, r = e.length; i < r && n >= e[i].distance; i++) (e[i - 1].object.visible = !1), (e[i].object.visible = !0);
					for (this._currentLevel = i - 1; i < r; i++) e[i].object.visible = !1;
				}
			},
			toJSON: function (t) {
				const e = Qr.prototype.toJSON.call(this, t);
				!1 === this.autoUpdate && (e.object.autoUpdate = !1), (e.object.levels = []);
				const n = this.levels;
				for (let t = 0, i = n.length; t < i; t++) {
					const i = n[t];
					e.object.levels.push({
						object: i.object.uuid,
						distance: i.distance,
					});
				}
				return e;
			},
		})),
			(dc.prototype = Object.assign(Object.create(us.prototype), {
				constructor: dc,
				isSkinnedMesh: !0,
				copy: function (t) {
					return (
						us.prototype.copy.call(this, t), (this.bindMode = t.bindMode), this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), (this.skeleton = t.skeleton), this
					);
				},
				bind: function (t, e) {
					(this.skeleton = t), void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), (e = this.matrixWorld)), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e);
				},
				pose: function () {
					this.skeleton.pose();
				},
				normalizeSkinWeights: function () {
					const t = new Zi(),
						e = this.geometry.attributes.skinWeight;
					for (let n = 0, i = e.count; n < i; n++) {
						(t.x = e.getX(n)), (t.y = e.getY(n)), (t.z = e.getZ(n)), (t.w = e.getW(n));
						const i = 1 / t.manhattanLength();
						i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
					}
				},
				updateMatrixWorld: function (t) {
					us.prototype.updateMatrixWorld.call(this, t),
						'attached' === this.bindMode
							? this.bindMatrixInverse.getInverse(this.matrixWorld)
							: 'detached' === this.bindMode
							? this.bindMatrixInverse.getInverse(this.bindMatrix)
							: console.warn('THREE.SkinnedMesh: Unrecognized bindMode: ' + this.bindMode);
				},
				boneTransform: (function () {
					const t = new $i(),
						e = new Zi(),
						n = new Zi(),
						i = new $i(),
						r = new Ar();
					return function (o, s) {
						const a = this.skeleton,
							l = this.geometry;
						e.fromBufferAttribute(l.attributes.skinIndex, o),
							n.fromBufferAttribute(l.attributes.skinWeight, o),
							t.fromBufferAttribute(l.attributes.position, o).applyMatrix4(this.bindMatrix),
							s.set(0, 0, 0);
						for (let o = 0; o < 4; o++) {
							const l = n.getComponent(o);
							if (0 !== l) {
								const n = e.getComponent(o);
								r.multiplyMatrices(a.bones[n].matrixWorld, a.boneInverses[n]), s.addScaledVector(i.copy(t).applyMatrix4(r), l);
							}
						}
						return s.applyMatrix4(this.bindMatrixInverse);
					};
				})(),
			}));
		const pc = new Ar(),
			fc = new Ar();
		function mc(t, e) {
			if (((t = t || []), (this.bones = t.slice(0)), (this.boneMatrices = new Float32Array(16 * this.bones.length)), (this.frame = -1), void 0 === e)) this.calculateInverses();
			else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
			else {
				console.warn('THREE.Skeleton boneInverses is the wrong length.'), (this.boneInverses = []);
				for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new Ar());
			}
		}
		function gc() {
			Qr.call(this), (this.type = 'Bone');
		}
		Object.assign(mc.prototype, {
			calculateInverses: function () {
				this.boneInverses = [];
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = new Ar();
					this.bones[t] && e.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(e);
				}
			},
			pose: function () {
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = this.bones[t];
					e && e.matrixWorld.getInverse(this.boneInverses[t]);
				}
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = this.bones[t];
					e &&
						(e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld),
						e.matrix.decompose(e.position, e.quaternion, e.scale));
				}
			},
			update: function () {
				const t = this.bones,
					e = this.boneInverses,
					n = this.boneMatrices,
					i = this.boneTexture;
				for (let i = 0, r = t.length; i < r; i++) {
					const r = t[i] ? t[i].matrixWorld : fc;
					pc.multiplyMatrices(r, e[i]), pc.toArray(n, 16 * i);
				}
				void 0 !== i && (i.needsUpdate = !0);
			},
			clone: function () {
				return new mc(this.bones, this.boneInverses);
			},
			getBoneByName: function (t) {
				for (let e = 0, n = this.bones.length; e < n; e++) {
					const n = this.bones[e];
					if (n.name === t) return n;
				}
			},
			dispose: function () {
				this.boneTexture && (this.boneTexture.dispose(), (this.boneTexture = void 0));
			},
		}),
			(gc.prototype = Object.assign(Object.create(Qr.prototype), {
				constructor: gc,
				isBone: !0,
			}));
		const vc = new Ar(),
			yc = new Ar(),
			xc = [],
			_c = new us();
		function bc(t, e, n) {
			us.call(this, t, e), (this.instanceMatrix = new Lo(new Float32Array(16 * n), 16)), (this.instanceColor = null), (this.count = n), (this.frustumCulled = !1);
		}
		function wc(t) {
			So.call(this),
				(this.type = 'LineBasicMaterial'),
				(this.color = new bo(16777215)),
				(this.linewidth = 1),
				(this.linecap = 'round'),
				(this.linejoin = 'round'),
				(this.morphTargets = !1),
				this.setValues(t);
		}
		(bc.prototype = Object.assign(Object.create(us.prototype), {
			constructor: bc,
			isInstancedMesh: !0,
			copy: function (t) {
				return us.prototype.copy.call(this, t), this.instanceMatrix.copy(t.instanceMatrix), (this.count = t.count), this;
			},
			setColorAt: function (t, e) {
				null === this.instanceColor && (this.instanceColor = new Lo(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t);
			},
			getMatrixAt: function (t, e) {
				e.fromArray(this.instanceMatrix.array, 16 * t);
			},
			raycast: function (t, e) {
				const n = this.matrixWorld,
					i = this.count;
				if (((_c.geometry = this.geometry), (_c.material = this.material), void 0 !== _c.material))
					for (let r = 0; r < i; r++) {
						this.getMatrixAt(r, vc), yc.multiplyMatrices(n, vc), (_c.matrixWorld = yc), _c.raycast(t, xc);
						for (let t = 0, n = xc.length; t < n; t++) {
							const n = xc[t];
							(n.instanceId = r), (n.object = this), e.push(n);
						}
						xc.length = 0;
					}
			},
			setMatrixAt: function (t, e) {
				e.toArray(this.instanceMatrix.array, 16 * t);
			},
			updateMorphTargets: function () {},
		})),
			(wc.prototype = Object.create(So.prototype)),
			(wc.prototype.constructor = wc),
			(wc.prototype.isLineBasicMaterial = !0),
			(wc.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.linewidth = t.linewidth),
					(this.linecap = t.linecap),
					(this.linejoin = t.linejoin),
					(this.morphTargets = t.morphTargets),
					this
				);
			});
		const Mc = new $i(),
			Sc = new $i(),
			Tc = new Ar(),
			Ec = new Er(),
			Ac = new yr();
		function Lc(t, e, n) {
			1 === n && console.error('THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.'),
				Qr.call(this),
				(this.type = 'Line'),
				(this.geometry = void 0 !== t ? t : new Xo()),
				(this.material = void 0 !== e ? e : new wc()),
				this.updateMorphTargets();
		}
		Lc.prototype = Object.assign(Object.create(Qr.prototype), {
			constructor: Lc,
			isLine: !0,
			copy: function (t) {
				return Qr.prototype.copy.call(this, t), (this.material = t.material), (this.geometry = t.geometry), this;
			},
			computeLineDistances: function () {
				const t = this.geometry;
				if (t.isBufferGeometry)
					if (null === t.index) {
						const e = t.attributes.position,
							n = [0];
						for (let t = 1, i = e.count; t < i; t++) Mc.fromBufferAttribute(e, t - 1), Sc.fromBufferAttribute(e, t), (n[t] = n[t - 1]), (n[t] += Mc.distanceTo(Sc));
						t.setAttribute('lineDistance', new zo(n, 1));
					} else console.warn('THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.');
				else if (t.isGeometry) {
					const e = t.vertices,
						n = t.lineDistances;
					n[0] = 0;
					for (let t = 1, i = e.length; t < i; t++) (n[t] = n[t - 1]), (n[t] += e[t - 1].distanceTo(e[t]));
				}
				return this;
			},
			raycast: function (t, e) {
				const n = this.geometry,
					i = this.matrixWorld,
					r = t.params.Line.threshold;
				if ((null === n.boundingSphere && n.computeBoundingSphere(), Ac.copy(n.boundingSphere), Ac.applyMatrix4(i), (Ac.radius += r), !1 === t.ray.intersectsSphere(Ac))) return;
				Tc.getInverse(i), Ec.copy(t.ray).applyMatrix4(Tc);
				const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					s = o * o,
					a = new $i(),
					l = new $i(),
					c = new $i(),
					h = new $i(),
					u = this && this.isLineSegments ? 2 : 1;
				if (n.isBufferGeometry) {
					const i = n.index,
						r = n.attributes.position.array;
					if (null !== i) {
						const n = i.array;
						for (let i = 0, o = n.length - 1; i < o; i += u) {
							const o = n[i],
								u = n[i + 1];
							a.fromArray(r, 3 * o), l.fromArray(r, 3 * u);
							if (Ec.distanceSqToSegment(a, l, h, c) > s) continue;
							h.applyMatrix4(this.matrixWorld);
							const d = t.ray.origin.distanceTo(h);
							d < t.near ||
								d > t.far ||
								e.push({
									distance: d,
									point: c.clone().applyMatrix4(this.matrixWorld),
									index: i,
									face: null,
									faceIndex: null,
									object: this,
								});
						}
					} else
						for (let n = 0, i = r.length / 3 - 1; n < i; n += u) {
							a.fromArray(r, 3 * n), l.fromArray(r, 3 * n + 3);
							if (Ec.distanceSqToSegment(a, l, h, c) > s) continue;
							h.applyMatrix4(this.matrixWorld);
							const i = t.ray.origin.distanceTo(h);
							i < t.near ||
								i > t.far ||
								e.push({
									distance: i,
									point: c.clone().applyMatrix4(this.matrixWorld),
									index: n,
									face: null,
									faceIndex: null,
									object: this,
								});
						}
				} else if (n.isGeometry) {
					const i = n.vertices,
						r = i.length;
					for (let n = 0; n < r - 1; n += u) {
						if (Ec.distanceSqToSegment(i[n], i[n + 1], h, c) > s) continue;
						h.applyMatrix4(this.matrixWorld);
						const r = t.ray.origin.distanceTo(h);
						r < t.near ||
							r > t.far ||
							e.push({
								distance: r,
								point: c.clone().applyMatrix4(this.matrixWorld),
								index: n,
								face: null,
								faceIndex: null,
								object: this,
							});
					}
				}
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e && e.length > 0 && console.error('THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.');
				}
			},
		});
		const Rc = new $i(),
			Pc = new $i();
		function Cc(t, e) {
			Lc.call(this, t, e), (this.type = 'LineSegments');
		}
		function Oc(t, e) {
			Lc.call(this, t, e), (this.type = 'LineLoop');
		}
		function Dc(t) {
			So.call(this),
				(this.type = 'PointsMaterial'),
				(this.color = new bo(16777215)),
				(this.map = null),
				(this.alphaMap = null),
				(this.size = 1),
				(this.sizeAttenuation = !0),
				(this.morphTargets = !1),
				this.setValues(t);
		}
		(Cc.prototype = Object.assign(Object.create(Lc.prototype), {
			constructor: Cc,
			isLineSegments: !0,
			computeLineDistances: function () {
				const t = this.geometry;
				if (t.isBufferGeometry)
					if (null === t.index) {
						const e = t.attributes.position,
							n = [];
						for (let t = 0, i = e.count; t < i; t += 2) Rc.fromBufferAttribute(e, t), Pc.fromBufferAttribute(e, t + 1), (n[t] = 0 === t ? 0 : n[t - 1]), (n[t + 1] = n[t] + Rc.distanceTo(Pc));
						t.setAttribute('lineDistance', new zo(n, 1));
					} else console.warn('THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.');
				else if (t.isGeometry) {
					const e = t.vertices,
						n = t.lineDistances;
					for (let t = 0, i = e.length; t < i; t += 2) Rc.copy(e[t]), Pc.copy(e[t + 1]), (n[t] = 0 === t ? 0 : n[t - 1]), (n[t + 1] = n[t] + Rc.distanceTo(Pc));
				}
				return this;
			},
		})),
			(Oc.prototype = Object.assign(Object.create(Lc.prototype), {
				constructor: Oc,
				isLineLoop: !0,
			})),
			(Dc.prototype = Object.create(So.prototype)),
			(Dc.prototype.constructor = Dc),
			(Dc.prototype.isPointsMaterial = !0),
			(Dc.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.size = t.size),
					(this.sizeAttenuation = t.sizeAttenuation),
					(this.morphTargets = t.morphTargets),
					this
				);
			});
		const Ic = new Ar(),
			Nc = new Er(),
			zc = new yr(),
			Bc = new $i();
		function kc(t, e) {
			Qr.call(this), (this.type = 'Points'), (this.geometry = void 0 !== t ? t : new Xo()), (this.material = void 0 !== e ? e : new Dc()), this.updateMorphTargets();
		}
		function Fc(t, e, n, i, r, o, s) {
			const a = Nc.distanceSqToPoint(t);
			if (a < n) {
				const n = new $i();
				Nc.closestPointToPoint(t, n), n.applyMatrix4(i);
				const l = r.ray.origin.distanceTo(n);
				if (l < r.near || l > r.far) return;
				o.push({
					distance: l,
					distanceToRay: Math.sqrt(a),
					point: n,
					index: e,
					face: null,
					object: s,
				});
			}
		}
		function Uc(t, e, n, i, r, o, s, a, l) {
			Yi.call(this, t, e, n, i, r, o, s, a, l),
				(this.format = void 0 !== s ? s : 1022),
				(this.minFilter = void 0 !== o ? o : 1006),
				(this.magFilter = void 0 !== r ? r : 1006),
				(this.generateMipmaps = !1);
			const c = this;
			'requestVideoFrameCallback' in t &&
				t.requestVideoFrameCallback(function e() {
					(c.needsUpdate = !0), t.requestVideoFrameCallback(e);
				});
		}
		function Hc(t, e, n, i, r, o, s, a, l, c, h, u) {
			Yi.call(this, null, o, s, a, l, c, i, r, h, u),
				(this.image = {
					width: e,
					height: n,
				}),
				(this.mipmaps = t),
				(this.flipY = !1),
				(this.generateMipmaps = !1);
		}
		function Gc(t, e, n, i, r, o, s, a, l) {
			Yi.call(this, t, e, n, i, r, o, s, a, l), (this.needsUpdate = !0);
		}
		function Vc(t, e, n, i, r, o, s, a, l, c) {
			if (1026 !== (c = void 0 !== c ? c : 1026) && 1027 !== c) throw new Error('DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat');
			void 0 === n && 1026 === c && (n = 1012),
				void 0 === n && 1027 === c && (n = 1020),
				Yi.call(this, null, i, r, o, s, a, c, n, l),
				(this.image = {
					width: t,
					height: e,
				}),
				(this.magFilter = void 0 !== s ? s : 1003),
				(this.minFilter = void 0 !== a ? a : 1003),
				(this.flipY = !1),
				(this.generateMipmaps = !1);
		}
		(kc.prototype = Object.assign(Object.create(Qr.prototype), {
			constructor: kc,
			isPoints: !0,
			copy: function (t) {
				return Qr.prototype.copy.call(this, t), (this.material = t.material), (this.geometry = t.geometry), this;
			},
			raycast: function (t, e) {
				const n = this.geometry,
					i = this.matrixWorld,
					r = t.params.Points.threshold;
				if ((null === n.boundingSphere && n.computeBoundingSphere(), zc.copy(n.boundingSphere), zc.applyMatrix4(i), (zc.radius += r), !1 === t.ray.intersectsSphere(zc))) return;
				Ic.getInverse(i), Nc.copy(t.ray).applyMatrix4(Ic);
				const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					s = o * o;
				if (n.isBufferGeometry) {
					const r = n.index,
						o = n.attributes.position.array;
					if (null !== r) {
						const n = r.array;
						for (let r = 0, a = n.length; r < a; r++) {
							const a = n[r];
							Bc.fromArray(o, 3 * a), Fc(Bc, a, s, i, t, e, this);
						}
					} else for (let n = 0, r = o.length / 3; n < r; n++) Bc.fromArray(o, 3 * n), Fc(Bc, n, s, i, t, e, this);
				} else {
					const r = n.vertices;
					for (let n = 0, o = r.length; n < o; n++) Fc(r[n], n, s, i, t, e, this);
				}
			},
			updateMorphTargets: function () {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0), (this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e && e.length > 0 && console.error('THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.');
				}
			},
		})),
			(Uc.prototype = Object.assign(Object.create(Yi.prototype), {
				constructor: Uc,
				isVideoTexture: !0,
				update: function () {
					const t = this.image;
					!1 === 'requestVideoFrameCallback' in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
				},
			})),
			(Hc.prototype = Object.create(Yi.prototype)),
			(Hc.prototype.constructor = Hc),
			(Hc.prototype.isCompressedTexture = !0),
			(Gc.prototype = Object.create(Yi.prototype)),
			(Gc.prototype.constructor = Gc),
			(Gc.prototype.isCanvasTexture = !0),
			(Vc.prototype = Object.create(Yi.prototype)),
			(Vc.prototype.constructor = Vc),
			(Vc.prototype.isDepthTexture = !0);
		class jc extends Xo {
			constructor(t) {
				super(), (this.type = 'WireframeGeometry');
				const e = [],
					n = [0, 0],
					i = {},
					r = ['a', 'b', 'c'];
				if (t && t.isGeometry) {
					const o = t.faces;
					for (let t = 0, e = o.length; t < e; t++) {
						const e = o[t];
						for (let t = 0; t < 3; t++) {
							const o = e[r[t]],
								s = e[r[(t + 1) % 3]];
							(n[0] = Math.min(o, s)), (n[1] = Math.max(o, s));
							const a = n[0] + ',' + n[1];
							void 0 === i[a] &&
								(i[a] = {
									index1: n[0],
									index2: n[1],
								});
						}
					}
					for (const n in i) {
						const r = i[n];
						let o = t.vertices[r.index1];
						e.push(o.x, o.y, o.z), (o = t.vertices[r.index2]), e.push(o.x, o.y, o.z);
					}
				} else if (t && t.isBufferGeometry) {
					const r = new $i();
					if (null !== t.index) {
						const o = t.attributes.position,
							s = t.index;
						let a = t.groups;
						0 === a.length &&
							(a = [
								{
									start: 0,
									count: s.count,
									materialIndex: 0,
								},
							]);
						for (let t = 0, e = a.length; t < e; ++t) {
							const e = a[t],
								r = e.start;
							for (let t = r, o = r + e.count; t < o; t += 3)
								for (let e = 0; e < 3; e++) {
									const r = s.getX(t + e),
										o = s.getX(t + ((e + 1) % 3));
									(n[0] = Math.min(r, o)), (n[1] = Math.max(r, o));
									const a = n[0] + ',' + n[1];
									void 0 === i[a] &&
										(i[a] = {
											index1: n[0],
											index2: n[1],
										});
								}
						}
						for (const t in i) {
							const n = i[t];
							r.fromBufferAttribute(o, n.index1), e.push(r.x, r.y, r.z), r.fromBufferAttribute(o, n.index2), e.push(r.x, r.y, r.z);
						}
					} else {
						const n = t.attributes.position;
						for (let t = 0, i = n.count / 3; t < i; t++)
							for (let i = 0; i < 3; i++) {
								const o = 3 * t + i;
								r.fromBufferAttribute(n, o), e.push(r.x, r.y, r.z);
								const s = 3 * t + ((i + 1) % 3);
								r.fromBufferAttribute(n, s), e.push(r.x, r.y, r.z);
							}
					}
				}
				this.setAttribute('position', new zo(e, 3));
			}
		}
		function Wc(t, e, n) {
			ys.call(this),
				(this.type = 'ParametricGeometry'),
				(this.parameters = {
					func: t,
					slices: e,
					stacks: n,
				}),
				this.fromBufferGeometry(new qc(t, e, n)),
				this.mergeVertices();
		}
		function qc(t, e, n) {
			Xo.call(this),
				(this.type = 'ParametricBufferGeometry'),
				(this.parameters = {
					func: t,
					slices: e,
					stacks: n,
				});
			const i = [],
				r = [],
				o = [],
				s = [],
				a = 1e-5,
				l = new $i(),
				c = new $i(),
				h = new $i(),
				u = new $i(),
				d = new $i();
			t.length < 3 && console.error('THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.');
			const p = e + 1;
			for (let i = 0; i <= n; i++) {
				const p = i / n;
				for (let n = 0; n <= e; n++) {
					const i = n / e;
					t(i, p, c),
						r.push(c.x, c.y, c.z),
						i - a >= 0 ? (t(i - a, p, h), u.subVectors(c, h)) : (t(i + a, p, h), u.subVectors(h, c)),
						p - a >= 0 ? (t(i, p - a, h), d.subVectors(c, h)) : (t(i, p + a, h), d.subVectors(h, c)),
						l.crossVectors(u, d).normalize(),
						o.push(l.x, l.y, l.z),
						s.push(i, p);
				}
			}
			for (let t = 0; t < n; t++)
				for (let n = 0; n < e; n++) {
					const e = t * p + n,
						r = t * p + n + 1,
						o = (t + 1) * p + n + 1,
						s = (t + 1) * p + n;
					i.push(e, r, s), i.push(r, o, s);
				}
			this.setIndex(i), this.setAttribute('position', new zo(r, 3)), this.setAttribute('normal', new zo(o, 3)), this.setAttribute('uv', new zo(s, 2));
		}
		(Wc.prototype = Object.create(ys.prototype)), (Wc.prototype.constructor = Wc), (qc.prototype = Object.create(Xo.prototype)), (qc.prototype.constructor = qc);
		class Xc extends Xo {
			constructor(t, e, n, i) {
				super(),
					(this.type = 'PolyhedronBufferGeometry'),
					(this.parameters = {
						vertices: t,
						indices: e,
						radius: n,
						detail: i,
					}),
					(n = n || 1);
				const r = [],
					o = [];
				function s(t, e, n, i) {
					const r = Math.pow(2, i),
						o = [];
					for (let i = 0; i <= r; i++) {
						o[i] = [];
						const s = t.clone().lerp(n, i / r),
							a = e.clone().lerp(n, i / r),
							l = r - i;
						for (let t = 0; t <= l; t++) o[i][t] = 0 === t && i === r ? s : s.clone().lerp(a, t / l);
					}
					for (let t = 0; t < r; t++)
						for (let e = 0; e < 2 * (r - t) - 1; e++) {
							const n = Math.floor(e / 2);
							e % 2 == 0 ? (a(o[t][n + 1]), a(o[t + 1][n]), a(o[t][n])) : (a(o[t][n + 1]), a(o[t + 1][n + 1]), a(o[t + 1][n]));
						}
				}
				function a(t) {
					r.push(t.x, t.y, t.z);
				}
				function l(e, n) {
					const i = 3 * e;
					(n.x = t[i + 0]), (n.y = t[i + 1]), (n.z = t[i + 2]);
				}
				function c(t, e, n, i) {
					i < 0 && 1 === t.x && (o[e] = t.x - 1), 0 === n.x && 0 === n.z && (o[e] = i / 2 / Math.PI + 0.5);
				}
				function h(t) {
					return Math.atan2(t.z, -t.x);
				}
				!(function (t) {
					const n = new $i(),
						i = new $i(),
						r = new $i();
					for (let o = 0; o < e.length; o += 3) l(e[o + 0], n), l(e[o + 1], i), l(e[o + 2], r), s(n, i, r, t);
				})((i = i || 0)),
					(function (t) {
						const e = new $i();
						for (let n = 0; n < r.length; n += 3) (e.x = r[n + 0]), (e.y = r[n + 1]), (e.z = r[n + 2]), e.normalize().multiplyScalar(t), (r[n + 0] = e.x), (r[n + 1] = e.y), (r[n + 2] = e.z);
					})(n),
					(function () {
						const t = new $i();
						for (let n = 0; n < r.length; n += 3) {
							(t.x = r[n + 0]), (t.y = r[n + 1]), (t.z = r[n + 2]);
							const i = h(t) / 2 / Math.PI + 0.5,
								s = ((e = t), Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + 0.5);
							o.push(i, 1 - s);
						}
						var e;
						(function () {
							const t = new $i(),
								e = new $i(),
								n = new $i(),
								i = new $i(),
								s = new Vi(),
								a = new Vi(),
								l = new Vi();
							for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
								t.set(r[u + 0], r[u + 1], r[u + 2]),
									e.set(r[u + 3], r[u + 4], r[u + 5]),
									n.set(r[u + 6], r[u + 7], r[u + 8]),
									s.set(o[d + 0], o[d + 1]),
									a.set(o[d + 2], o[d + 3]),
									l.set(o[d + 4], o[d + 5]),
									i.copy(t).add(e).add(n).divideScalar(3);
								const p = h(i);
								c(s, d + 0, t, p), c(a, d + 2, e, p), c(l, d + 4, n, p);
							}
						})(),
							(function () {
								for (let t = 0; t < o.length; t += 6) {
									const e = o[t + 0],
										n = o[t + 2],
										i = o[t + 4],
										r = Math.max(e, n, i),
										s = Math.min(e, n, i);
									r > 0.9 && s < 0.1 && (e < 0.2 && (o[t + 0] += 1), n < 0.2 && (o[t + 2] += 1), i < 0.2 && (o[t + 4] += 1));
								}
							})();
					})(),
					this.setAttribute('position', new zo(r, 3)),
					this.setAttribute('normal', new zo(r.slice(), 3)),
					this.setAttribute('uv', new zo(o, 2)),
					0 === i ? this.computeVertexNormals() : this.normalizeNormals();
			}
		}
		class Yc extends Xc {
			constructor(t, e) {
				super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e),
					(this.type = 'TetrahedronBufferGeometry'),
					(this.parameters = {
						radius: t,
						detail: e,
					});
			}
		}
		class Zc extends Xc {
			constructor(t, e) {
				super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e),
					(this.type = 'OctahedronBufferGeometry'),
					(this.parameters = {
						radius: t,
						detail: e,
					});
			}
		}
		class Jc extends Xc {
			constructor(t, e) {
				const n = (1 + Math.sqrt(5)) / 2;
				super(
					[-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1],
					[
						0,
						11,
						5,
						0,
						5,
						1,
						0,
						1,
						7,
						0,
						7,
						10,
						0,
						10,
						11,
						1,
						5,
						9,
						5,
						11,
						4,
						11,
						10,
						2,
						10,
						7,
						6,
						7,
						1,
						8,
						3,
						9,
						4,
						3,
						4,
						2,
						3,
						2,
						6,
						3,
						6,
						8,
						3,
						8,
						9,
						4,
						9,
						5,
						2,
						4,
						11,
						6,
						2,
						10,
						8,
						6,
						7,
						9,
						8,
						1,
					],
					t,
					e,
				),
					(this.type = 'IcosahedronBufferGeometry'),
					(this.parameters = {
						radius: t,
						detail: e,
					});
			}
		}
		class Kc extends Xc {
			constructor(t, e) {
				const n = (1 + Math.sqrt(5)) / 2,
					i = 1 / n;
				super(
					[
						-1,
						-1,
						-1,
						-1,
						-1,
						1,
						-1,
						1,
						-1,
						-1,
						1,
						1,
						1,
						-1,
						-1,
						1,
						-1,
						1,
						1,
						1,
						-1,
						1,
						1,
						1,
						0,
						-i,
						-n,
						0,
						-i,
						n,
						0,
						i,
						-n,
						0,
						i,
						n,
						-i,
						-n,
						0,
						-i,
						n,
						0,
						i,
						-n,
						0,
						i,
						n,
						0,
						-n,
						0,
						-i,
						n,
						0,
						-i,
						-n,
						0,
						i,
						n,
						0,
						i,
					],
					[
						3,
						11,
						7,
						3,
						7,
						15,
						3,
						15,
						13,
						7,
						19,
						17,
						7,
						17,
						6,
						7,
						6,
						15,
						17,
						4,
						8,
						17,
						8,
						10,
						17,
						10,
						6,
						8,
						0,
						16,
						8,
						16,
						2,
						8,
						2,
						10,
						0,
						12,
						1,
						0,
						1,
						18,
						0,
						18,
						16,
						6,
						10,
						2,
						6,
						2,
						13,
						6,
						13,
						15,
						2,
						16,
						18,
						2,
						18,
						3,
						2,
						3,
						13,
						18,
						1,
						9,
						18,
						9,
						11,
						18,
						11,
						3,
						4,
						14,
						12,
						4,
						12,
						0,
						4,
						0,
						8,
						11,
						9,
						5,
						11,
						5,
						19,
						11,
						19,
						7,
						19,
						5,
						14,
						19,
						14,
						4,
						19,
						4,
						17,
						1,
						12,
						14,
						1,
						14,
						5,
						1,
						5,
						9,
					],
					t,
					e,
				),
					(this.type = 'DodecahedronBufferGeometry'),
					(this.parameters = {
						radius: t,
						detail: e,
					});
			}
		}
		class Qc extends Xo {
			constructor(t, e, n, i, r) {
				super(),
					(this.type = 'TubeBufferGeometry'),
					(this.parameters = {
						path: t,
						tubularSegments: e,
						radius: n,
						radialSegments: i,
						closed: r,
					}),
					(e = e || 64),
					(n = n || 1),
					(i = i || 8),
					(r = r || !1);
				const o = t.computeFrenetFrames(e, r);
				(this.tangents = o.tangents), (this.normals = o.normals), (this.binormals = o.binormals);
				const s = new $i(),
					a = new $i(),
					l = new Vi();
				let c = new $i();
				const h = [],
					u = [],
					d = [],
					p = [];
				function f(r) {
					c = t.getPointAt(r / e, c);
					const l = o.normals[r],
						d = o.binormals[r];
					for (let t = 0; t <= i; t++) {
						const e = (t / i) * Math.PI * 2,
							r = Math.sin(e),
							o = -Math.cos(e);
						(a.x = o * l.x + r * d.x),
							(a.y = o * l.y + r * d.y),
							(a.z = o * l.z + r * d.z),
							a.normalize(),
							u.push(a.x, a.y, a.z),
							(s.x = c.x + n * a.x),
							(s.y = c.y + n * a.y),
							(s.z = c.z + n * a.z),
							h.push(s.x, s.y, s.z);
					}
				}
				!(function () {
					for (let t = 0; t < e; t++) f(t);
					f(!1 === r ? e : 0),
						(function () {
							for (let t = 0; t <= e; t++) for (let n = 0; n <= i; n++) (l.x = t / e), (l.y = n / i), d.push(l.x, l.y);
						})(),
						(function () {
							for (let t = 1; t <= e; t++)
								for (let e = 1; e <= i; e++) {
									const n = (i + 1) * (t - 1) + (e - 1),
										r = (i + 1) * t + (e - 1),
										o = (i + 1) * t + e,
										s = (i + 1) * (t - 1) + e;
									p.push(n, r, s), p.push(r, o, s);
								}
						})();
				})(),
					this.setIndex(p),
					this.setAttribute('position', new zo(h, 3)),
					this.setAttribute('normal', new zo(u, 3)),
					this.setAttribute('uv', new zo(d, 2));
			}
			toJSON() {
				const t = Xo.prototype.toJSON.call(this);
				return (t.path = this.parameters.path.toJSON()), t;
			}
		}
		class $c extends Xo {
			constructor(t, e, n, i, r, o) {
				super(),
					(this.type = 'TorusKnotBufferGeometry'),
					(this.parameters = {
						radius: t,
						tube: e,
						tubularSegments: n,
						radialSegments: i,
						p: r,
						q: o,
					}),
					(t = t || 1),
					(e = e || 0.4),
					(n = Math.floor(n) || 64),
					(i = Math.floor(i) || 8),
					(r = r || 2),
					(o = o || 3);
				const s = [],
					a = [],
					l = [],
					c = [],
					h = new $i(),
					u = new $i(),
					d = new $i(),
					p = new $i(),
					f = new $i(),
					m = new $i(),
					g = new $i();
				for (let s = 0; s <= n; ++s) {
					const y = (s / n) * r * Math.PI * 2;
					v(y, r, o, t, d), v(y + 0.01, r, o, t, p), m.subVectors(p, d), g.addVectors(p, d), f.crossVectors(m, g), g.crossVectors(f, m), f.normalize(), g.normalize();
					for (let t = 0; t <= i; ++t) {
						const r = (t / i) * Math.PI * 2,
							o = -e * Math.cos(r),
							p = e * Math.sin(r);
						(h.x = d.x + (o * g.x + p * f.x)),
							(h.y = d.y + (o * g.y + p * f.y)),
							(h.z = d.z + (o * g.z + p * f.z)),
							a.push(h.x, h.y, h.z),
							u.subVectors(h, d).normalize(),
							l.push(u.x, u.y, u.z),
							c.push(s / n),
							c.push(t / i);
					}
				}
				for (let t = 1; t <= n; t++)
					for (let e = 1; e <= i; e++) {
						const n = (i + 1) * (t - 1) + (e - 1),
							r = (i + 1) * t + (e - 1),
							o = (i + 1) * t + e,
							a = (i + 1) * (t - 1) + e;
						s.push(n, r, a), s.push(r, o, a);
					}
				function v(t, e, n, i, r) {
					const o = Math.cos(t),
						s = Math.sin(t),
						a = (n / e) * t,
						l = Math.cos(a);
					(r.x = i * (2 + l) * 0.5 * o), (r.y = i * (2 + l) * s * 0.5), (r.z = i * Math.sin(a) * 0.5);
				}
				this.setIndex(s), this.setAttribute('position', new zo(a, 3)), this.setAttribute('normal', new zo(l, 3)), this.setAttribute('uv', new zo(c, 2));
			}
		}
		class th extends Xo {
			constructor(t, e, n, i, r) {
				super(),
					(this.type = 'TorusBufferGeometry'),
					(this.parameters = {
						radius: t,
						tube: e,
						radialSegments: n,
						tubularSegments: i,
						arc: r,
					}),
					(t = t || 1),
					(e = e || 0.4),
					(n = Math.floor(n) || 8),
					(i = Math.floor(i) || 6),
					(r = r || 2 * Math.PI);
				const o = [],
					s = [],
					a = [],
					l = [],
					c = new $i(),
					h = new $i(),
					u = new $i();
				for (let o = 0; o <= n; o++)
					for (let d = 0; d <= i; d++) {
						const p = (d / i) * r,
							f = (o / n) * Math.PI * 2;
						(h.x = (t + e * Math.cos(f)) * Math.cos(p)),
							(h.y = (t + e * Math.cos(f)) * Math.sin(p)),
							(h.z = e * Math.sin(f)),
							s.push(h.x, h.y, h.z),
							(c.x = t * Math.cos(p)),
							(c.y = t * Math.sin(p)),
							u.subVectors(h, c).normalize(),
							a.push(u.x, u.y, u.z),
							l.push(d / i),
							l.push(o / n);
					}
				for (let t = 1; t <= n; t++)
					for (let e = 1; e <= i; e++) {
						const n = (i + 1) * t + e - 1,
							r = (i + 1) * (t - 1) + e - 1,
							s = (i + 1) * (t - 1) + e,
							a = (i + 1) * t + e;
						o.push(n, r, a), o.push(r, s, a);
					}
				this.setIndex(o), this.setAttribute('position', new zo(s, 3)), this.setAttribute('normal', new zo(a, 3)), this.setAttribute('uv', new zo(l, 2));
			}
		}
		const eh = function (t, e, n) {
			n = n || 2;
			const i = e && e.length,
				r = i ? e[0] * n : t.length;
			let o = nh(t, 0, r, n, !0);
			const s = [];
			if (!o || o.next === o.prev) return s;
			let a, l, c, h, u, d, p;
			if (
				(i &&
					(o = (function (t, e, n, i) {
						const r = [];
						let o, s, a, l, c;
						for (o = 0, s = e.length; o < s; o++) (a = e[o] * i), (l = o < s - 1 ? e[o + 1] * i : t.length), (c = nh(t, a, l, i, !1)), c === c.next && (c.steiner = !0), r.push(ph(c));
						for (r.sort(ch), o = 0; o < r.length; o++) hh(r[o], n), (n = ih(n, n.next));
						return n;
					})(t, e, o, n)),
				t.length > 80 * n)
			) {
				(a = c = t[0]), (l = h = t[1]);
				for (let e = n; e < r; e += n) (u = t[e]), (d = t[e + 1]), u < a && (a = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
				(p = Math.max(c - a, h - l)), (p = 0 !== p ? 1 / p : 0);
			}
			return rh(o, s, n, a, l, p), s;
		};
		function nh(t, e, n, i, r) {
			let o, s;
			if (
				r ===
				(function (t, e, n, i) {
					let r = 0;
					for (let o = e, s = n - i; o < n; o += i) (r += (t[s] - t[o]) * (t[o + 1] + t[s + 1])), (s = o);
					return r;
				})(t, e, n, i) >
					0
			)
				for (o = e; o < n; o += i) s = Mh(o, t[o], t[o + 1], s);
			else for (o = n - i; o >= e; o -= i) s = Mh(o, t[o], t[o + 1], s);
			return s && vh(s, s.next) && (Sh(s), (s = s.next)), s;
		}
		function ih(t, e) {
			if (!t) return t;
			e || (e = t);
			let n,
				i = t;
			do {
				if (((n = !1), i.steiner || (!vh(i, i.next) && 0 !== gh(i.prev, i, i.next)))) i = i.next;
				else {
					if ((Sh(i), (i = e = i.prev), i === i.next)) break;
					n = !0;
				}
			} while (n || i !== e);
			return e;
		}
		function rh(t, e, n, i, r, o, s) {
			if (!t) return;
			!s &&
				o &&
				(function (t, e, n, i) {
					let r = t;
					do {
						null === r.z && (r.z = dh(r.x, r.y, e, n, i)), (r.prevZ = r.prev), (r.nextZ = r.next), (r = r.next);
					} while (r !== t);
					(r.prevZ.nextZ = null),
						(r.prevZ = null),
						(function (t) {
							let e,
								n,
								i,
								r,
								o,
								s,
								a,
								l,
								c = 1;
							do {
								for (n = t, t = null, o = null, s = 0; n; ) {
									for (s++, i = n, a = 0, e = 0; e < c && (a++, (i = i.nextZ), i); e++);
									for (l = c; a > 0 || (l > 0 && i); )
										0 !== a && (0 === l || !i || n.z <= i.z) ? ((r = n), (n = n.nextZ), a--) : ((r = i), (i = i.nextZ), l--), o ? (o.nextZ = r) : (t = r), (r.prevZ = o), (o = r);
									n = i;
								}
								(o.nextZ = null), (c *= 2);
							} while (s > 1);
						})(r);
				})(t, i, r, o);
			let a,
				l,
				c = t;
			for (; t.prev !== t.next; )
				if (((a = t.prev), (l = t.next), o ? sh(t, i, r, o) : oh(t))) e.push(a.i / n), e.push(t.i / n), e.push(l.i / n), Sh(t), (t = l.next), (c = l.next);
				else if ((t = l) === c) {
					s ? (1 === s ? rh((t = ah(ih(t), e, n)), e, n, i, r, o, 2) : 2 === s && lh(t, e, n, i, r, o)) : rh(ih(t), e, n, i, r, o, 1);
					break;
				}
		}
		function oh(t) {
			const e = t.prev,
				n = t,
				i = t.next;
			if (gh(e, n, i) >= 0) return !1;
			let r = t.next.next;
			for (; r !== t.prev; ) {
				if (fh(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && gh(r.prev, r, r.next) >= 0) return !1;
				r = r.next;
			}
			return !0;
		}
		function sh(t, e, n, i) {
			const r = t.prev,
				o = t,
				s = t.next;
			if (gh(r, o, s) >= 0) return !1;
			const a = r.x < o.x ? (r.x < s.x ? r.x : s.x) : o.x < s.x ? o.x : s.x,
				l = r.y < o.y ? (r.y < s.y ? r.y : s.y) : o.y < s.y ? o.y : s.y,
				c = r.x > o.x ? (r.x > s.x ? r.x : s.x) : o.x > s.x ? o.x : s.x,
				h = r.y > o.y ? (r.y > s.y ? r.y : s.y) : o.y > s.y ? o.y : s.y,
				u = dh(a, l, e, n, i),
				d = dh(c, h, e, n, i);
			let p = t.prevZ,
				f = t.nextZ;
			for (; p && p.z >= u && f && f.z <= d; ) {
				if (p !== t.prev && p !== t.next && fh(r.x, r.y, o.x, o.y, s.x, s.y, p.x, p.y) && gh(p.prev, p, p.next) >= 0) return !1;
				if (((p = p.prevZ), f !== t.prev && f !== t.next && fh(r.x, r.y, o.x, o.y, s.x, s.y, f.x, f.y) && gh(f.prev, f, f.next) >= 0)) return !1;
				f = f.nextZ;
			}
			for (; p && p.z >= u; ) {
				if (p !== t.prev && p !== t.next && fh(r.x, r.y, o.x, o.y, s.x, s.y, p.x, p.y) && gh(p.prev, p, p.next) >= 0) return !1;
				p = p.prevZ;
			}
			for (; f && f.z <= d; ) {
				if (f !== t.prev && f !== t.next && fh(r.x, r.y, o.x, o.y, s.x, s.y, f.x, f.y) && gh(f.prev, f, f.next) >= 0) return !1;
				f = f.nextZ;
			}
			return !0;
		}
		function ah(t, e, n) {
			let i = t;
			do {
				const r = i.prev,
					o = i.next.next;
				!vh(r, o) && yh(r, i, i.next, o) && bh(r, o) && bh(o, r) && (e.push(r.i / n), e.push(i.i / n), e.push(o.i / n), Sh(i), Sh(i.next), (i = t = o)), (i = i.next);
			} while (i !== t);
			return ih(i);
		}
		function lh(t, e, n, i, r, o) {
			let s = t;
			do {
				let t = s.next.next;
				for (; t !== s.prev; ) {
					if (s.i !== t.i && mh(s, t)) {
						let a = wh(s, t);
						return (s = ih(s, s.next)), (a = ih(a, a.next)), rh(s, e, n, i, r, o), void rh(a, e, n, i, r, o);
					}
					t = t.next;
				}
				s = s.next;
			} while (s !== t);
		}
		function ch(t, e) {
			return t.x - e.x;
		}
		function hh(t, e) {
			if (
				(e = (function (t, e) {
					let n = e;
					const i = t.x,
						r = t.y;
					let o,
						s = -1 / 0;
					do {
						if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
							const t = n.x + ((r - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
							if (t <= i && t > s) {
								if (((s = t), t === i)) {
									if (r === n.y) return n;
									if (r === n.next.y) return n.next;
								}
								o = n.x < n.next.x ? n : n.next;
							}
						}
						n = n.next;
					} while (n !== e);
					if (!o) return null;
					if (i === s) return o;
					const a = o,
						l = o.x,
						c = o.y;
					let h,
						u = 1 / 0;
					n = o;
					do {
						i >= n.x &&
							n.x >= l &&
							i !== n.x &&
							fh(r < c ? i : s, r, l, c, r < c ? s : i, r, n.x, n.y) &&
							((h = Math.abs(r - n.y) / (i - n.x)), bh(n, t) && (h < u || (h === u && (n.x > o.x || (n.x === o.x && uh(o, n))))) && ((o = n), (u = h))),
							(n = n.next);
					} while (n !== a);
					return o;
				})(t, e))
			) {
				const n = wh(e, t);
				ih(e, e.next), ih(n, n.next);
			}
		}
		function uh(t, e) {
			return gh(t.prev, t, e.prev) < 0 && gh(e.next, t, t.next) < 0;
		}
		function dh(t, e, n, i, r) {
			return (
				(t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | (t << 8))) | (t << 4))) | (t << 2))) | (t << 1))) |
				((e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | (e << 8))) | (e << 4))) | (e << 2))) | (e << 1))) << 1)
			);
		}
		function ph(t) {
			let e = t,
				n = t;
			do {
				(e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
			} while (e !== t);
			return n;
		}
		function fh(t, e, n, i, r, o, s, a) {
			return (r - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (i - a) - (n - s) * (e - a) >= 0 && (n - s) * (o - a) - (r - s) * (i - a) >= 0;
		}
		function mh(t, e) {
			return (
				t.next.i !== e.i &&
				t.prev.i !== e.i &&
				!(function (t, e) {
					let n = t;
					do {
						if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && yh(n, n.next, t, e)) return !0;
						n = n.next;
					} while (n !== t);
					return !1;
				})(t, e) &&
				((bh(t, e) &&
					bh(e, t) &&
					(function (t, e) {
						let n = t,
							i = !1;
						const r = (t.x + e.x) / 2,
							o = (t.y + e.y) / 2;
						do {
							n.y > o != n.next.y > o && n.next.y !== n.y && r < ((n.next.x - n.x) * (o - n.y)) / (n.next.y - n.y) + n.x && (i = !i), (n = n.next);
						} while (n !== t);
						return i;
					})(t, e) &&
					(gh(t.prev, t, e.prev) || gh(t, e.prev, e))) ||
					(vh(t, e) && gh(t.prev, t, t.next) > 0 && gh(e.prev, e, e.next) > 0))
			);
		}
		function gh(t, e, n) {
			return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
		}
		function vh(t, e) {
			return t.x === e.x && t.y === e.y;
		}
		function yh(t, e, n, i) {
			const r = _h(gh(t, e, n)),
				o = _h(gh(t, e, i)),
				s = _h(gh(n, i, t)),
				a = _h(gh(n, i, e));
			return (r !== o && s !== a) || !(0 !== r || !xh(t, n, e)) || !(0 !== o || !xh(t, i, e)) || !(0 !== s || !xh(n, t, i)) || !(0 !== a || !xh(n, e, i));
		}
		function xh(t, e, n) {
			return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
		}
		function _h(t) {
			return t > 0 ? 1 : t < 0 ? -1 : 0;
		}
		function bh(t, e) {
			return gh(t.prev, t, t.next) < 0 ? gh(t, e, t.next) >= 0 && gh(t, t.prev, e) >= 0 : gh(t, e, t.prev) < 0 || gh(t, t.next, e) < 0;
		}
		function wh(t, e) {
			const n = new Th(t.i, t.x, t.y),
				i = new Th(e.i, e.x, e.y),
				r = t.next,
				o = e.prev;
			return (t.next = e), (e.prev = t), (n.next = r), (r.prev = n), (i.next = n), (n.prev = i), (o.next = i), (i.prev = o), i;
		}
		function Mh(t, e, n, i) {
			const r = new Th(t, e, n);
			return i ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r)) : ((r.prev = r), (r.next = r)), r;
		}
		function Sh(t) {
			(t.next.prev = t.prev), (t.prev.next = t.next), t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
		}
		function Th(t, e, n) {
			(this.i = t), (this.x = e), (this.y = n), (this.prev = null), (this.next = null), (this.z = null), (this.prevZ = null), (this.nextZ = null), (this.steiner = !1);
		}
		const Eh = {
			area: function (t) {
				const e = t.length;
				let n = 0;
				for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
				return 0.5 * n;
			},
			isClockWise: function (t) {
				return Eh.area(t) < 0;
			},
			triangulateShape: function (t, e) {
				const n = [],
					i = [],
					r = [];
				Ah(t), Lh(n, t);
				let o = t.length;
				e.forEach(Ah);
				for (let t = 0; t < e.length; t++) i.push(o), (o += e[t].length), Lh(n, e[t]);
				const s = eh(n, i);
				for (let t = 0; t < s.length; t += 3) r.push(s.slice(t, t + 3));
				return r;
			},
		};
		function Ah(t) {
			const e = t.length;
			e > 2 && t[e - 1].equals(t[0]) && t.pop();
		}
		function Lh(t, e) {
			for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
		}
		class Rh extends ys {
			constructor(t, e) {
				super(),
					(this.type = 'ExtrudeGeometry'),
					(this.parameters = {
						shapes: t,
						options: e,
					}),
					this.fromBufferGeometry(new Ph(t, e)),
					this.mergeVertices();
			}
			toJSON() {
				const t = super.toJSON();
				return Oh(this.parameters.shapes, this.parameters.options, t);
			}
		}
		class Ph extends Xo {
			constructor(t, e) {
				super(),
					(this.type = 'ExtrudeBufferGeometry'),
					(this.parameters = {
						shapes: t,
						options: e,
					}),
					(t = Array.isArray(t) ? t : [t]);
				const n = this,
					i = [],
					r = [];
				for (let e = 0, n = t.length; e < n; e++) {
					o(t[e]);
				}
				function o(t) {
					const o = [],
						s = void 0 !== e.curveSegments ? e.curveSegments : 12,
						a = void 0 !== e.steps ? e.steps : 1;
					let l = void 0 !== e.depth ? e.depth : 100,
						c = void 0 === e.bevelEnabled || e.bevelEnabled,
						h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
						u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
						d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
						p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
					const f = e.extrudePath,
						m = void 0 !== e.UVGenerator ? e.UVGenerator : Ch;
					void 0 !== e.amount && (console.warn('THREE.ExtrudeBufferGeometry: amount has been renamed to depth.'), (l = e.amount));
					let g,
						v,
						y,
						x,
						_,
						b = !1;
					f && ((g = f.getSpacedPoints(a)), (b = !0), (c = !1), (v = f.computeFrenetFrames(a, !1)), (y = new $i()), (x = new $i()), (_ = new $i())), c || ((p = 0), (h = 0), (u = 0), (d = 0));
					const w = t.extractPoints(s);
					let M = w.shape;
					const S = w.holes;
					if (!Eh.isClockWise(M)) {
						M = M.reverse();
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							Eh.isClockWise(e) && (S[t] = e.reverse());
						}
					}
					const T = Eh.triangulateShape(M, S),
						E = M;
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						M = M.concat(e);
					}
					function A(t, e, n) {
						return e || console.error('THREE.ExtrudeGeometry: vec does not exist'), e.clone().multiplyScalar(n).add(t);
					}
					const L = M.length,
						R = T.length;
					function P(t, e, n) {
						let i, r, o;
						const s = t.x - e.x,
							a = t.y - e.y,
							l = n.x - t.x,
							c = n.y - t.y,
							h = s * s + a * a,
							u = s * c - a * l;
						if (Math.abs(u) > Number.EPSILON) {
							const u = Math.sqrt(h),
								d = Math.sqrt(l * l + c * c),
								p = e.x - a / u,
								f = e.y + s / u,
								m = ((n.x - c / d - p) * c - (n.y + l / d - f) * l) / (s * c - a * l);
							(i = p + s * m - t.x), (r = f + a * m - t.y);
							const g = i * i + r * r;
							if (g <= 2) return new Vi(i, r);
							o = Math.sqrt(g / 2);
						} else {
							let t = !1;
							s > Number.EPSILON ? l > Number.EPSILON && (t = !0) : s < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(a) === Math.sign(c) && (t = !0),
								t ? ((i = -a), (r = s), (o = Math.sqrt(h))) : ((i = s), (r = a), (o = Math.sqrt(h / 2)));
						}
						return new Vi(i / o, r / o);
					}
					const C = [];
					for (let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++, n++, i++) n === e && (n = 0), i === e && (i = 0), (C[t] = P(E[t], E[n], E[i]));
					const O = [];
					let D,
						I = C.concat();
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						D = [];
						for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++) i === n && (i = 0), r === n && (r = 0), (D[t] = P(e[t], e[i], e[r]));
						O.push(D), (I = I.concat(D));
					}
					for (let t = 0; t < p; t++) {
						const e = t / p,
							n = h * Math.cos((e * Math.PI) / 2),
							i = u * Math.sin((e * Math.PI) / 2) + d;
						for (let t = 0, e = E.length; t < e; t++) {
							const e = A(E[t], C[t], i);
							B(e.x, e.y, -n);
						}
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							D = O[t];
							for (let t = 0, r = e.length; t < r; t++) {
								const r = A(e[t], D[t], i);
								B(r.x, r.y, -n);
							}
						}
					}
					const N = u + d;
					for (let t = 0; t < L; t++) {
						const e = c ? A(M[t], I[t], N) : M[t];
						b ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g[0]).add(x).add(y), B(_.x, _.y, _.z)) : B(e.x, e.y, 0);
					}
					for (let t = 1; t <= a; t++)
						for (let e = 0; e < L; e++) {
							const n = c ? A(M[e], I[e], N) : M[e];
							b ? (x.copy(v.normals[t]).multiplyScalar(n.x), y.copy(v.binormals[t]).multiplyScalar(n.y), _.copy(g[t]).add(x).add(y), B(_.x, _.y, _.z)) : B(n.x, n.y, (l / a) * t);
						}
					for (let t = p - 1; t >= 0; t--) {
						const e = t / p,
							n = h * Math.cos((e * Math.PI) / 2),
							i = u * Math.sin((e * Math.PI) / 2) + d;
						for (let t = 0, e = E.length; t < e; t++) {
							const e = A(E[t], C[t], i);
							B(e.x, e.y, l + n);
						}
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							D = O[t];
							for (let t = 0, r = e.length; t < r; t++) {
								const r = A(e[t], D[t], i);
								b ? B(r.x, r.y + g[a - 1].y, g[a - 1].x + n) : B(r.x, r.y, l + n);
							}
						}
					}
					function z(t, e) {
						let n = t.length;
						for (; --n >= 0; ) {
							const i = n;
							let r = n - 1;
							r < 0 && (r = t.length - 1);
							for (let t = 0, n = a + 2 * p; t < n; t++) {
								const n = L * t,
									o = L * (t + 1);
								F(e + i + n, e + r + n, e + r + o, e + i + o);
							}
						}
					}
					function B(t, e, n) {
						o.push(t), o.push(e), o.push(n);
					}
					function k(t, e, r) {
						U(t), U(e), U(r);
						const o = i.length / 3,
							s = m.generateTopUV(n, i, o - 3, o - 2, o - 1);
						H(s[0]), H(s[1]), H(s[2]);
					}
					function F(t, e, r, o) {
						U(t), U(e), U(o), U(e), U(r), U(o);
						const s = i.length / 3,
							a = m.generateSideWallUV(n, i, s - 6, s - 3, s - 2, s - 1);
						H(a[0]), H(a[1]), H(a[3]), H(a[1]), H(a[2]), H(a[3]);
					}
					function U(t) {
						i.push(o[3 * t + 0]), i.push(o[3 * t + 1]), i.push(o[3 * t + 2]);
					}
					function H(t) {
						r.push(t.x), r.push(t.y);
					}
					!(function () {
						const t = i.length / 3;
						if (c) {
							let t = 0,
								e = L * t;
							for (let t = 0; t < R; t++) {
								const n = T[t];
								k(n[2] + e, n[1] + e, n[0] + e);
							}
							(t = a + 2 * p), (e = L * t);
							for (let t = 0; t < R; t++) {
								const n = T[t];
								k(n[0] + e, n[1] + e, n[2] + e);
							}
						} else {
							for (let t = 0; t < R; t++) {
								const e = T[t];
								k(e[2], e[1], e[0]);
							}
							for (let t = 0; t < R; t++) {
								const e = T[t];
								k(e[0] + L * a, e[1] + L * a, e[2] + L * a);
							}
						}
						n.addGroup(t, i.length / 3 - t, 0);
					})(),
						(function () {
							const t = i.length / 3;
							let e = 0;
							z(E, e), (e += E.length);
							for (let t = 0, n = S.length; t < n; t++) {
								const n = S[t];
								z(n, e), (e += n.length);
							}
							n.addGroup(t, i.length / 3 - t, 1);
						})();
				}
				this.setAttribute('position', new zo(i, 3)), this.setAttribute('uv', new zo(r, 2)), this.computeVertexNormals();
			}
			toJSON() {
				const t = Xo.prototype.toJSON.call(this);
				return Oh(this.parameters.shapes, this.parameters.options, t);
			}
		}
		const Ch = {
			generateTopUV: function (t, e, n, i, r) {
				const o = e[3 * n],
					s = e[3 * n + 1],
					a = e[3 * i],
					l = e[3 * i + 1],
					c = e[3 * r],
					h = e[3 * r + 1];
				return [new Vi(o, s), new Vi(a, l), new Vi(c, h)];
			},
			generateSideWallUV: function (t, e, n, i, r, o) {
				const s = e[3 * n],
					a = e[3 * n + 1],
					l = e[3 * n + 2],
					c = e[3 * i],
					h = e[3 * i + 1],
					u = e[3 * i + 2],
					d = e[3 * r],
					p = e[3 * r + 1],
					f = e[3 * r + 2],
					m = e[3 * o],
					g = e[3 * o + 1],
					v = e[3 * o + 2];
				return Math.abs(a - h) < 0.01 ? [new Vi(s, 1 - l), new Vi(c, 1 - u), new Vi(d, 1 - f), new Vi(m, 1 - v)] : [new Vi(a, 1 - l), new Vi(h, 1 - u), new Vi(p, 1 - f), new Vi(g, 1 - v)];
			},
		};
		function Oh(t, e, n) {
			if (((n.shapes = []), Array.isArray(t)))
				for (let e = 0, i = t.length; e < i; e++) {
					const i = t[e];
					n.shapes.push(i.uuid);
				}
			else n.shapes.push(t.uuid);
			return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n;
		}
		class Dh extends Ph {
			constructor(t, e) {
				const n = (e = e || {}).font;
				if (!n || !n.isFont) return console.error('THREE.TextGeometry: font parameter is not an instance of THREE.Font.'), new ys();
				const i = n.generateShapes(t, e.size);
				(e.depth = void 0 !== e.height ? e.height : 50),
					void 0 === e.bevelThickness && (e.bevelThickness = 10),
					void 0 === e.bevelSize && (e.bevelSize = 8),
					void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
					super(i, e),
					(this.type = 'TextBufferGeometry');
			}
		}
		class Ih extends Xo {
			constructor(t, e, n, i, r, o, s) {
				super(),
					(this.type = 'SphereBufferGeometry'),
					(this.parameters = {
						radius: t,
						widthSegments: e,
						heightSegments: n,
						phiStart: i,
						phiLength: r,
						thetaStart: o,
						thetaLength: s,
					}),
					(t = t || 1),
					(e = Math.max(3, Math.floor(e) || 8)),
					(n = Math.max(2, Math.floor(n) || 6)),
					(i = void 0 !== i ? i : 0),
					(r = void 0 !== r ? r : 2 * Math.PI),
					(o = void 0 !== o ? o : 0),
					(s = void 0 !== s ? s : Math.PI);
				const a = Math.min(o + s, Math.PI);
				let l = 0;
				const c = [],
					h = new $i(),
					u = new $i(),
					d = [],
					p = [],
					f = [],
					m = [];
				for (let d = 0; d <= n; d++) {
					const g = [],
						v = d / n;
					let y = 0;
					0 == d && 0 == o ? (y = 0.5 / e) : d == n && a == Math.PI && (y = -0.5 / e);
					for (let n = 0; n <= e; n++) {
						const a = n / e;
						(h.x = -t * Math.cos(i + a * r) * Math.sin(o + v * s)),
							(h.y = t * Math.cos(o + v * s)),
							(h.z = t * Math.sin(i + a * r) * Math.sin(o + v * s)),
							p.push(h.x, h.y, h.z),
							u.copy(h).normalize(),
							f.push(u.x, u.y, u.z),
							m.push(a + y, 1 - v),
							g.push(l++);
					}
					c.push(g);
				}
				for (let t = 0; t < n; t++)
					for (let i = 0; i < e; i++) {
						const e = c[t][i + 1],
							r = c[t][i],
							s = c[t + 1][i],
							l = c[t + 1][i + 1];
						(0 !== t || o > 0) && d.push(e, r, l), (t !== n - 1 || a < Math.PI) && d.push(r, s, l);
					}
				this.setIndex(d), this.setAttribute('position', new zo(p, 3)), this.setAttribute('normal', new zo(f, 3)), this.setAttribute('uv', new zo(m, 2));
			}
		}
		class Nh extends Xo {
			constructor(t, e, n, i, r, o) {
				super(),
					(this.type = 'RingBufferGeometry'),
					(this.parameters = {
						innerRadius: t,
						outerRadius: e,
						thetaSegments: n,
						phiSegments: i,
						thetaStart: r,
						thetaLength: o,
					}),
					(t = t || 0.5),
					(e = e || 1),
					(r = void 0 !== r ? r : 0),
					(o = void 0 !== o ? o : 2 * Math.PI),
					(n = void 0 !== n ? Math.max(3, n) : 8);
				const s = [],
					a = [],
					l = [],
					c = [];
				let h = t;
				const u = (e - t) / (i = void 0 !== i ? Math.max(1, i) : 1),
					d = new $i(),
					p = new Vi();
				for (let t = 0; t <= i; t++) {
					for (let t = 0; t <= n; t++) {
						const i = r + (t / n) * o;
						(d.x = h * Math.cos(i)), (d.y = h * Math.sin(i)), a.push(d.x, d.y, d.z), l.push(0, 0, 1), (p.x = (d.x / e + 1) / 2), (p.y = (d.y / e + 1) / 2), c.push(p.x, p.y);
					}
					h += u;
				}
				for (let t = 0; t < i; t++) {
					const e = t * (n + 1);
					for (let t = 0; t < n; t++) {
						const i = t + e,
							r = i,
							o = i + n + 1,
							a = i + n + 2,
							l = i + 1;
						s.push(r, o, l), s.push(o, a, l);
					}
				}
				this.setIndex(s), this.setAttribute('position', new zo(a, 3)), this.setAttribute('normal', new zo(l, 3)), this.setAttribute('uv', new zo(c, 2));
			}
		}
		class zh extends Xo {
			constructor(t, e, n, i) {
				super(),
					(this.type = 'LatheBufferGeometry'),
					(this.parameters = {
						points: t,
						segments: e,
						phiStart: n,
						phiLength: i,
					}),
					(e = Math.floor(e) || 12),
					(n = n || 0),
					(i = i || 2 * Math.PI),
					(i = Gi.clamp(i, 0, 2 * Math.PI));
				const r = [],
					o = [],
					s = [],
					a = 1 / e,
					l = new $i(),
					c = new Vi();
				for (let r = 0; r <= e; r++) {
					const h = n + r * a * i,
						u = Math.sin(h),
						d = Math.cos(h);
					for (let n = 0; n <= t.length - 1; n++) (l.x = t[n].x * u), (l.y = t[n].y), (l.z = t[n].x * d), o.push(l.x, l.y, l.z), (c.x = r / e), (c.y = n / (t.length - 1)), s.push(c.x, c.y);
				}
				for (let n = 0; n < e; n++)
					for (let e = 0; e < t.length - 1; e++) {
						const i = e + n * t.length,
							o = i,
							s = i + t.length,
							a = i + t.length + 1,
							l = i + 1;
						r.push(o, s, l), r.push(s, a, l);
					}
				if ((this.setIndex(r), this.setAttribute('position', new zo(o, 3)), this.setAttribute('uv', new zo(s, 2)), this.computeVertexNormals(), i === 2 * Math.PI)) {
					const n = this.attributes.normal.array,
						i = new $i(),
						r = new $i(),
						o = new $i(),
						s = e * t.length * 3;
					for (let e = 0, a = 0; e < t.length; e++, a += 3)
						(i.x = n[a + 0]),
							(i.y = n[a + 1]),
							(i.z = n[a + 2]),
							(r.x = n[s + a + 0]),
							(r.y = n[s + a + 1]),
							(r.z = n[s + a + 2]),
							o.addVectors(i, r).normalize(),
							(n[a + 0] = n[s + a + 0] = o.x),
							(n[a + 1] = n[s + a + 1] = o.y),
							(n[a + 2] = n[s + a + 2] = o.z);
				}
			}
		}
		class Bh extends ys {
			constructor(t, e) {
				super(),
					(this.type = 'ShapeGeometry'),
					'object' == typeof e && (console.warn('THREE.ShapeGeometry: Options parameter has been removed.'), (e = e.curveSegments)),
					(this.parameters = {
						shapes: t,
						curveSegments: e,
					}),
					this.fromBufferGeometry(new kh(t, e)),
					this.mergeVertices();
			}
			toJSON() {
				const t = ys.prototype.toJSON.call(this);
				return Fh(this.parameters.shapes, t);
			}
		}
		class kh extends Xo {
			constructor(t, e) {
				super(),
					(this.type = 'ShapeBufferGeometry'),
					(this.parameters = {
						shapes: t,
						curveSegments: e,
					}),
					(e = e || 12);
				const n = [],
					i = [],
					r = [],
					o = [];
				let s = 0,
					a = 0;
				if (!1 === Array.isArray(t)) l(t);
				else for (let e = 0; e < t.length; e++) l(t[e]), this.addGroup(s, a, e), (s += a), (a = 0);
				function l(t) {
					const s = i.length / 3,
						l = t.extractPoints(e);
					let c = l.shape;
					const h = l.holes;
					!1 === Eh.isClockWise(c) && (c = c.reverse());
					for (let t = 0, e = h.length; t < e; t++) {
						const e = h[t];
						!0 === Eh.isClockWise(e) && (h[t] = e.reverse());
					}
					const u = Eh.triangulateShape(c, h);
					for (let t = 0, e = h.length; t < e; t++) {
						const e = h[t];
						c = c.concat(e);
					}
					for (let t = 0, e = c.length; t < e; t++) {
						const e = c[t];
						i.push(e.x, e.y, 0), r.push(0, 0, 1), o.push(e.x, e.y);
					}
					for (let t = 0, e = u.length; t < e; t++) {
						const e = u[t],
							i = e[0] + s,
							r = e[1] + s,
							o = e[2] + s;
						n.push(i, r, o), (a += 3);
					}
				}
				this.setIndex(n), this.setAttribute('position', new zo(i, 3)), this.setAttribute('normal', new zo(r, 3)), this.setAttribute('uv', new zo(o, 2));
			}
			toJSON() {
				const t = Xo.prototype.toJSON.call(this);
				return Fh(this.parameters.shapes, t);
			}
		}
		function Fh(t, e) {
			if (((e.shapes = []), Array.isArray(t)))
				for (let n = 0, i = t.length; n < i; n++) {
					const i = t[n];
					e.shapes.push(i.uuid);
				}
			else e.shapes.push(t.uuid);
			return e;
		}
		class Uh extends Xo {
			constructor(t, e) {
				super(),
					(this.type = 'EdgesGeometry'),
					(this.parameters = {
						thresholdAngle: e,
					}),
					(e = void 0 !== e ? e : 1);
				const n = [],
					i = Math.cos(Gi.DEG2RAD * e),
					r = [0, 0],
					o = {};
				let s, a, l;
				const c = ['a', 'b', 'c'];
				let h;
				t.isBufferGeometry ? ((h = new ys()), h.fromBufferGeometry(t)) : (h = t.clone()), h.mergeVertices(), h.computeFaceNormals();
				const u = h.vertices,
					d = h.faces;
				for (let t = 0, e = d.length; t < e; t++) {
					const e = d[t];
					for (let n = 0; n < 3; n++)
						(s = e[c[n]]),
							(a = e[c[(n + 1) % 3]]),
							(r[0] = Math.min(s, a)),
							(r[1] = Math.max(s, a)),
							(l = r[0] + ',' + r[1]),
							void 0 === o[l]
								? (o[l] = {
										index1: r[0],
										index2: r[1],
										face1: t,
										face2: void 0,
								  })
								: (o[l].face2 = t);
				}
				for (l in o) {
					const t = o[l];
					if (void 0 === t.face2 || d[t.face1].normal.dot(d[t.face2].normal) <= i) {
						let e = u[t.index1];
						n.push(e.x, e.y, e.z), (e = u[t.index2]), n.push(e.x, e.y, e.z);
					}
				}
				this.setAttribute('position', new zo(n, 3));
			}
		}
		class Hh extends ys {
			constructor(t, e, n, i, r, o, s, a) {
				super(),
					(this.type = 'CylinderGeometry'),
					(this.parameters = {
						radiusTop: t,
						radiusBottom: e,
						height: n,
						radialSegments: i,
						heightSegments: r,
						openEnded: o,
						thetaStart: s,
						thetaLength: a,
					}),
					this.fromBufferGeometry(new Gh(t, e, n, i, r, o, s, a)),
					this.mergeVertices();
			}
		}
		class Gh extends Xo {
			constructor(t, e, n, i, r, o, s, a) {
				super(),
					(this.type = 'CylinderBufferGeometry'),
					(this.parameters = {
						radiusTop: t,
						radiusBottom: e,
						height: n,
						radialSegments: i,
						heightSegments: r,
						openEnded: o,
						thetaStart: s,
						thetaLength: a,
					});
				const l = this;
				(t = void 0 !== t ? t : 1),
					(e = void 0 !== e ? e : 1),
					(n = n || 1),
					(i = Math.floor(i) || 8),
					(r = Math.floor(r) || 1),
					(o = void 0 !== o && o),
					(s = void 0 !== s ? s : 0),
					(a = void 0 !== a ? a : 2 * Math.PI);
				const c = [],
					h = [],
					u = [],
					d = [];
				let p = 0;
				const f = [],
					m = n / 2;
				let g = 0;
				function v(n) {
					const r = p,
						o = new Vi(),
						f = new $i();
					let v = 0;
					const y = !0 === n ? t : e,
						x = !0 === n ? 1 : -1;
					for (let t = 1; t <= i; t++) h.push(0, m * x, 0), u.push(0, x, 0), d.push(0.5, 0.5), p++;
					const _ = p;
					for (let t = 0; t <= i; t++) {
						const e = (t / i) * a + s,
							n = Math.cos(e),
							r = Math.sin(e);
						(f.x = y * r), (f.y = m * x), (f.z = y * n), h.push(f.x, f.y, f.z), u.push(0, x, 0), (o.x = 0.5 * n + 0.5), (o.y = 0.5 * r * x + 0.5), d.push(o.x, o.y), p++;
					}
					for (let t = 0; t < i; t++) {
						const e = r + t,
							i = _ + t;
						!0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), (v += 3);
					}
					l.addGroup(g, v, !0 === n ? 1 : 2), (g += v);
				}
				!(function () {
					const o = new $i(),
						v = new $i();
					let y = 0;
					const x = (e - t) / n;
					for (let l = 0; l <= r; l++) {
						const c = [],
							g = l / r,
							y = g * (e - t) + t;
						for (let t = 0; t <= i; t++) {
							const e = t / i,
								r = e * a + s,
								l = Math.sin(r),
								f = Math.cos(r);
							(v.x = y * l), (v.y = -g * n + m), (v.z = y * f), h.push(v.x, v.y, v.z), o.set(l, x, f).normalize(), u.push(o.x, o.y, o.z), d.push(e, 1 - g), c.push(p++);
						}
						f.push(c);
					}
					for (let t = 0; t < i; t++)
						for (let e = 0; e < r; e++) {
							const n = f[e][t],
								i = f[e + 1][t],
								r = f[e + 1][t + 1],
								o = f[e][t + 1];
							c.push(n, i, o), c.push(i, r, o), (y += 6);
						}
					l.addGroup(g, y, 0), (g += y);
				})(),
					!1 === o && (t > 0 && v(!0), e > 0 && v(!1)),
					this.setIndex(c),
					this.setAttribute('position', new zo(h, 3)),
					this.setAttribute('normal', new zo(u, 3)),
					this.setAttribute('uv', new zo(d, 2));
			}
		}
		class Vh extends Xo {
			constructor(t, e, n, i) {
				super(),
					(this.type = 'CircleBufferGeometry'),
					(this.parameters = {
						radius: t,
						segments: e,
						thetaStart: n,
						thetaLength: i,
					}),
					(t = t || 1),
					(e = void 0 !== e ? Math.max(3, e) : 8),
					(n = void 0 !== n ? n : 0),
					(i = void 0 !== i ? i : 2 * Math.PI);
				const r = [],
					o = [],
					s = [],
					a = [],
					l = new $i(),
					c = new Vi();
				o.push(0, 0, 0), s.push(0, 0, 1), a.push(0.5, 0.5);
				for (let r = 0, h = 3; r <= e; r++, h += 3) {
					const u = n + (r / e) * i;
					(l.x = t * Math.cos(u)), (l.y = t * Math.sin(u)), o.push(l.x, l.y, l.z), s.push(0, 0, 1), (c.x = (o[h] / t + 1) / 2), (c.y = (o[h + 1] / t + 1) / 2), a.push(c.x, c.y);
				}
				for (let t = 1; t <= e; t++) r.push(t, t + 1, 0);
				this.setIndex(r), this.setAttribute('position', new zo(o, 3)), this.setAttribute('normal', new zo(s, 3)), this.setAttribute('uv', new zo(a, 2));
			}
		}
		var jh = Object.freeze({
			__proto__: null,
			WireframeGeometry: jc,
			ParametricGeometry: Wc,
			ParametricBufferGeometry: qc,
			TetrahedronGeometry: class extends ys {
				constructor(t, e) {
					super(),
						(this.type = 'TetrahedronGeometry'),
						(this.parameters = {
							radius: t,
							detail: e,
						}),
						this.fromBufferGeometry(new Yc(t, e)),
						this.mergeVertices();
				}
			},
			TetrahedronBufferGeometry: Yc,
			OctahedronGeometry: class extends ys {
				constructor(t, e) {
					super(),
						(this.type = 'OctahedronGeometry'),
						(this.parameters = {
							radius: t,
							detail: e,
						}),
						this.fromBufferGeometry(new Zc(t, e)),
						this.mergeVertices();
				}
			},
			OctahedronBufferGeometry: Zc,
			IcosahedronGeometry: class extends ys {
				constructor(t, e) {
					super(),
						(this.type = 'IcosahedronGeometry'),
						(this.parameters = {
							radius: t,
							detail: e,
						}),
						this.fromBufferGeometry(new Jc(t, e)),
						this.mergeVertices();
				}
			},
			IcosahedronBufferGeometry: Jc,
			DodecahedronGeometry: class extends ys {
				constructor(t, e) {
					super(),
						(this.type = 'DodecahedronGeometry'),
						(this.parameters = {
							radius: t,
							detail: e,
						}),
						this.fromBufferGeometry(new Kc(t, e)),
						this.mergeVertices();
				}
			},
			DodecahedronBufferGeometry: Kc,
			PolyhedronGeometry: class extends ys {
				constructor(t, e, n, i) {
					super(),
						(this.type = 'PolyhedronGeometry'),
						(this.parameters = {
							vertices: t,
							indices: e,
							radius: n,
							detail: i,
						}),
						this.fromBufferGeometry(new Xc(t, e, n, i)),
						this.mergeVertices();
				}
			},
			PolyhedronBufferGeometry: Xc,
			TubeGeometry: class extends ys {
				constructor(t, e, n, i, r, o) {
					super(),
						(this.type = 'TubeGeometry'),
						(this.parameters = {
							path: t,
							tubularSegments: e,
							radius: n,
							radialSegments: i,
							closed: r,
						}),
						void 0 !== o && console.warn('THREE.TubeGeometry: taper has been removed.');
					const s = new Qc(t, e, n, i, r);
					(this.tangents = s.tangents), (this.normals = s.normals), (this.binormals = s.binormals), this.fromBufferGeometry(s), this.mergeVertices();
				}
			},
			TubeBufferGeometry: Qc,
			TorusKnotGeometry: class extends ys {
				constructor(t, e, n, i, r, o, s) {
					super(),
						(this.type = 'TorusKnotGeometry'),
						(this.parameters = {
							radius: t,
							tube: e,
							tubularSegments: n,
							radialSegments: i,
							p: r,
							q: o,
						}),
						void 0 !== s && console.warn('THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.'),
						this.fromBufferGeometry(new $c(t, e, n, i, r, o)),
						this.mergeVertices();
				}
			},
			TorusKnotBufferGeometry: $c,
			TorusGeometry: class extends ys {
				constructor(t, e, n, i, r) {
					super(),
						(this.type = 'TorusGeometry'),
						(this.parameters = {
							radius: t,
							tube: e,
							radialSegments: n,
							tubularSegments: i,
							arc: r,
						}),
						this.fromBufferGeometry(new th(t, e, n, i, r)),
						this.mergeVertices();
				}
			},
			TorusBufferGeometry: th,
			TextGeometry: class extends ys {
				constructor(t, e) {
					super(),
						(this.type = 'TextGeometry'),
						(this.parameters = {
							text: t,
							parameters: e,
						}),
						this.fromBufferGeometry(new Dh(t, e)),
						this.mergeVertices();
				}
			},
			TextBufferGeometry: Dh,
			SphereGeometry: class extends ys {
				constructor(t, e, n, i, r, o, s) {
					super(),
						(this.type = 'SphereGeometry'),
						(this.parameters = {
							radius: t,
							widthSegments: e,
							heightSegments: n,
							phiStart: i,
							phiLength: r,
							thetaStart: o,
							thetaLength: s,
						}),
						this.fromBufferGeometry(new Ih(t, e, n, i, r, o, s)),
						this.mergeVertices();
				}
			},
			SphereBufferGeometry: Ih,
			RingGeometry: class extends ys {
				constructor(t, e, n, i, r, o) {
					super(),
						(this.type = 'RingGeometry'),
						(this.parameters = {
							innerRadius: t,
							outerRadius: e,
							thetaSegments: n,
							phiSegments: i,
							thetaStart: r,
							thetaLength: o,
						}),
						this.fromBufferGeometry(new Nh(t, e, n, i, r, o)),
						this.mergeVertices();
				}
			},
			RingBufferGeometry: Nh,
			PlaneGeometry: class extends ys {
				constructor(t, e, n, i) {
					super(),
						(this.type = 'PlaneGeometry'),
						(this.parameters = {
							width: t,
							height: e,
							widthSegments: n,
							heightSegments: i,
						}),
						this.fromBufferGeometry(new Is(t, e, n, i)),
						this.mergeVertices();
				}
			},
			PlaneBufferGeometry: Is,
			LatheGeometry: class extends ys {
				constructor(t, e, n, i) {
					super(),
						(this.type = 'LatheGeometry'),
						(this.parameters = {
							points: t,
							segments: e,
							phiStart: n,
							phiLength: i,
						}),
						this.fromBufferGeometry(new zh(t, e, n, i)),
						this.mergeVertices();
				}
			},
			LatheBufferGeometry: zh,
			ShapeGeometry: Bh,
			ShapeBufferGeometry: kh,
			ExtrudeGeometry: Rh,
			ExtrudeBufferGeometry: Ph,
			EdgesGeometry: Uh,
			ConeGeometry: class extends Hh {
				constructor(t, e, n, i, r, o, s) {
					super(0, t, e, n, i, r, o, s),
						(this.type = 'ConeGeometry'),
						(this.parameters = {
							radius: t,
							height: e,
							radialSegments: n,
							heightSegments: i,
							openEnded: r,
							thetaStart: o,
							thetaLength: s,
						});
				}
			},
			ConeBufferGeometry: class extends Gh {
				constructor(t, e, n, i, r, o, s) {
					super(0, t, e, n, i, r, o, s),
						(this.type = 'ConeBufferGeometry'),
						(this.parameters = {
							radius: t,
							height: e,
							radialSegments: n,
							heightSegments: i,
							openEnded: r,
							thetaStart: o,
							thetaLength: s,
						});
				}
			},
			CylinderGeometry: Hh,
			CylinderBufferGeometry: Gh,
			CircleGeometry: class extends ys {
				constructor(t, e, n, i) {
					super(),
						(this.type = 'CircleGeometry'),
						(this.parameters = {
							radius: t,
							segments: e,
							thetaStart: n,
							thetaLength: i,
						}),
						this.fromBufferGeometry(new Vh(t, e, n, i)),
						this.mergeVertices();
				}
			},
			CircleBufferGeometry: Vh,
			BoxGeometry: class extends ys {
				constructor(t, e, n, i, r, o) {
					super(),
						(this.type = 'BoxGeometry'),
						(this.parameters = {
							width: t,
							height: e,
							depth: n,
							widthSegments: i,
							heightSegments: r,
							depthSegments: o,
						}),
						this.fromBufferGeometry(new xs(t, e, n, i, r, o)),
						this.mergeVertices();
				}
			},
			BoxBufferGeometry: xs,
		});
		function Wh(t) {
			So.call(this), (this.type = 'ShadowMaterial'), (this.color = new bo(0)), (this.transparent = !0), this.setValues(t);
		}
		function qh(t) {
			Ms.call(this, t), (this.type = 'RawShaderMaterial');
		}
		function Xh(t) {
			So.call(this),
				(this.defines = {
					STANDARD: '',
				}),
				(this.type = 'MeshStandardMaterial'),
				(this.color = new bo(16777215)),
				(this.roughness = 1),
				(this.metalness = 0),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new bo(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Vi(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.roughnessMap = null),
				(this.metalnessMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.envMapIntensity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = 'round'),
				(this.wireframeLinejoin = 'round'),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				(this.vertexTangents = !1),
				this.setValues(t);
		}
		function Yh(t) {
			Xh.call(this),
				(this.defines = {
					STANDARD: '',
					PHYSICAL: '',
				}),
				(this.type = 'MeshPhysicalMaterial'),
				(this.clearcoat = 0),
				(this.clearcoatMap = null),
				(this.clearcoatRoughness = 0),
				(this.clearcoatRoughnessMap = null),
				(this.clearcoatNormalScale = new Vi(1, 1)),
				(this.clearcoatNormalMap = null),
				(this.reflectivity = 0.5),
				(this.sheen = null),
				(this.transmission = 0),
				(this.transmissionMap = null),
				this.setValues(t);
		}
		function Zh(t) {
			So.call(this),
				(this.type = 'MeshPhongMaterial'),
				(this.color = new bo(16777215)),
				(this.specular = new bo(1118481)),
				(this.shininess = 30),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new bo(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Vi(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = 'round'),
				(this.wireframeLinejoin = 'round'),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function Jh(t) {
			So.call(this),
				(this.defines = {
					TOON: '',
				}),
				(this.type = 'MeshToonMaterial'),
				(this.color = new bo(16777215)),
				(this.map = null),
				(this.gradientMap = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new bo(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Vi(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.alphaMap = null),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = 'round'),
				(this.wireframeLinejoin = 'round'),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function Kh(t) {
			So.call(this),
				(this.type = 'MeshNormalMaterial'),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Vi(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.fog = !1),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function Qh(t) {
			So.call(this),
				(this.type = 'MeshLambertMaterial'),
				(this.color = new bo(16777215)),
				(this.map = null),
				(this.lightMap = null),
				(this.lightMapIntensity = 1),
				(this.aoMap = null),
				(this.aoMapIntensity = 1),
				(this.emissive = new bo(0)),
				(this.emissiveIntensity = 1),
				(this.emissiveMap = null),
				(this.specularMap = null),
				(this.alphaMap = null),
				(this.envMap = null),
				(this.combine = 0),
				(this.reflectivity = 1),
				(this.refractionRatio = 0.98),
				(this.wireframe = !1),
				(this.wireframeLinewidth = 1),
				(this.wireframeLinecap = 'round'),
				(this.wireframeLinejoin = 'round'),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function $h(t) {
			So.call(this),
				(this.defines = {
					MATCAP: '',
				}),
				(this.type = 'MeshMatcapMaterial'),
				(this.color = new bo(16777215)),
				(this.matcap = null),
				(this.map = null),
				(this.bumpMap = null),
				(this.bumpScale = 1),
				(this.normalMap = null),
				(this.normalMapType = 0),
				(this.normalScale = new Vi(1, 1)),
				(this.displacementMap = null),
				(this.displacementScale = 1),
				(this.displacementBias = 0),
				(this.alphaMap = null),
				(this.skinning = !1),
				(this.morphTargets = !1),
				(this.morphNormals = !1),
				this.setValues(t);
		}
		function tu(t) {
			wc.call(this), (this.type = 'LineDashedMaterial'), (this.scale = 1), (this.dashSize = 3), (this.gapSize = 1), this.setValues(t);
		}
		(Wh.prototype = Object.create(So.prototype)),
			(Wh.prototype.constructor = Wh),
			(Wh.prototype.isShadowMaterial = !0),
			(Wh.prototype.copy = function (t) {
				return So.prototype.copy.call(this, t), this.color.copy(t.color), this;
			}),
			(qh.prototype = Object.create(Ms.prototype)),
			(qh.prototype.constructor = qh),
			(qh.prototype.isRawShaderMaterial = !0),
			(Xh.prototype = Object.create(So.prototype)),
			(Xh.prototype.constructor = Xh),
			(Xh.prototype.isMeshStandardMaterial = !0),
			(Xh.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					(this.defines = {
						STANDARD: '',
					}),
					this.color.copy(t.color),
					(this.roughness = t.roughness),
					(this.metalness = t.metalness),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.roughnessMap = t.roughnessMap),
					(this.metalnessMap = t.metalnessMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.envMapIntensity = t.envMapIntensity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					(this.vertexTangents = t.vertexTangents),
					this
				);
			}),
			(Yh.prototype = Object.create(Xh.prototype)),
			(Yh.prototype.constructor = Yh),
			(Yh.prototype.isMeshPhysicalMaterial = !0),
			(Yh.prototype.copy = function (t) {
				return (
					Xh.prototype.copy.call(this, t),
					(this.defines = {
						STANDARD: '',
						PHYSICAL: '',
					}),
					(this.clearcoat = t.clearcoat),
					(this.clearcoatMap = t.clearcoatMap),
					(this.clearcoatRoughness = t.clearcoatRoughness),
					(this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
					(this.clearcoatNormalMap = t.clearcoatNormalMap),
					this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
					(this.reflectivity = t.reflectivity),
					t.sheen ? (this.sheen = (this.sheen || new bo()).copy(t.sheen)) : (this.sheen = null),
					(this.transmission = t.transmission),
					(this.transmissionMap = t.transmissionMap),
					this
				);
			}),
			(Zh.prototype = Object.create(So.prototype)),
			(Zh.prototype.constructor = Zh),
			(Zh.prototype.isMeshPhongMaterial = !0),
			(Zh.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					this.color.copy(t.color),
					this.specular.copy(t.specular),
					(this.shininess = t.shininess),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(Jh.prototype = Object.create(So.prototype)),
			(Jh.prototype.constructor = Jh),
			(Jh.prototype.isMeshToonMaterial = !0),
			(Jh.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.gradientMap = t.gradientMap),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.alphaMap = t.alphaMap),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(Kh.prototype = Object.create(So.prototype)),
			(Kh.prototype.constructor = Kh),
			(Kh.prototype.isMeshNormalMaterial = !0),
			(Kh.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(Qh.prototype = Object.create(So.prototype)),
			(Qh.prototype.constructor = Qh),
			(Qh.prototype.isMeshLambertMaterial = !0),
			(Qh.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			($h.prototype = Object.create(So.prototype)),
			($h.prototype.constructor = $h),
			($h.prototype.isMeshMatcapMaterial = !0),
			($h.prototype.copy = function (t) {
				return (
					So.prototype.copy.call(this, t),
					(this.defines = {
						MATCAP: '',
					}),
					this.color.copy(t.color),
					(this.matcap = t.matcap),
					(this.map = t.map),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.alphaMap = t.alphaMap),
					(this.skinning = t.skinning),
					(this.morphTargets = t.morphTargets),
					(this.morphNormals = t.morphNormals),
					this
				);
			}),
			(tu.prototype = Object.create(wc.prototype)),
			(tu.prototype.constructor = tu),
			(tu.prototype.isLineDashedMaterial = !0),
			(tu.prototype.copy = function (t) {
				return wc.prototype.copy.call(this, t), (this.scale = t.scale), (this.dashSize = t.dashSize), (this.gapSize = t.gapSize), this;
			});
		var eu = Object.freeze({
			__proto__: null,
			ShadowMaterial: Wh,
			SpriteMaterial: Xl,
			RawShaderMaterial: qh,
			ShaderMaterial: Ms,
			PointsMaterial: Dc,
			MeshPhysicalMaterial: Yh,
			MeshStandardMaterial: Xh,
			MeshPhongMaterial: Zh,
			MeshToonMaterial: Jh,
			MeshNormalMaterial: Kh,
			MeshLambertMaterial: Qh,
			MeshDepthMaterial: Ll,
			MeshDistanceMaterial: Rl,
			MeshBasicMaterial: To,
			MeshMatcapMaterial: $h,
			LineDashedMaterial: tu,
			LineBasicMaterial: wc,
			Material: So,
		});
		const nu = {
			arraySlice: function (t, e, n) {
				return nu.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
			},
			convertArray: function (t, e, n) {
				return !t || (!n && t.constructor === e) ? t : 'number' == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
			},
			isTypedArray: function (t) {
				return ArrayBuffer.isView(t) && !(t instanceof DataView);
			},
			getKeyframeOrder: function (t) {
				const e = t.length,
					n = new Array(e);
				for (let t = 0; t !== e; ++t) n[t] = t;
				return (
					n.sort(function (e, n) {
						return t[e] - t[n];
					}),
					n
				);
			},
			sortedArray: function (t, e, n) {
				const i = t.length,
					r = new t.constructor(i);
				for (let o = 0, s = 0; s !== i; ++o) {
					const i = n[o] * e;
					for (let n = 0; n !== e; ++n) r[s++] = t[i + n];
				}
				return r;
			},
			flattenJSON: function (t, e, n, i) {
				let r = 1,
					o = t[0];
				for (; void 0 !== o && void 0 === o[i]; ) o = t[r++];
				if (void 0 === o) return;
				let s = o[i];
				if (void 0 !== s)
					if (Array.isArray(s))
						do {
							(s = o[i]), void 0 !== s && (e.push(o.time), n.push.apply(n, s)), (o = t[r++]);
						} while (void 0 !== o);
					else if (void 0 !== s.toArray)
						do {
							(s = o[i]), void 0 !== s && (e.push(o.time), s.toArray(n, n.length)), (o = t[r++]);
						} while (void 0 !== o);
					else
						do {
							(s = o[i]), void 0 !== s && (e.push(o.time), n.push(s)), (o = t[r++]);
						} while (void 0 !== o);
			},
			subclip: function (t, e, n, i, r) {
				r = r || 30;
				const o = t.clone();
				o.name = e;
				const s = [];
				for (let t = 0; t < o.tracks.length; ++t) {
					const e = o.tracks[t],
						a = e.getValueSize(),
						l = [],
						c = [];
					for (let t = 0; t < e.times.length; ++t) {
						const o = e.times[t] * r;
						if (!(o < n || o >= i)) {
							l.push(e.times[t]);
							for (let n = 0; n < a; ++n) c.push(e.values[t * a + n]);
						}
					}
					0 !== l.length && ((e.times = nu.convertArray(l, e.times.constructor)), (e.values = nu.convertArray(c, e.values.constructor)), s.push(e));
				}
				o.tracks = s;
				let a = 1 / 0;
				for (let t = 0; t < o.tracks.length; ++t) a > o.tracks[t].times[0] && (a = o.tracks[t].times[0]);
				for (let t = 0; t < o.tracks.length; ++t) o.tracks[t].shift(-1 * a);
				return o.resetDuration(), o;
			},
			makeClipAdditive: function (t, e, n, i) {
				void 0 === e && (e = 0), void 0 === n && (n = t), (void 0 === i || i <= 0) && (i = 30);
				const r = t.tracks.length,
					o = e / i;
				for (let e = 0; e < r; ++e) {
					const i = n.tracks[e],
						r = i.ValueTypeName;
					if ('bool' === r || 'string' === r) continue;
					const s = t.tracks.find(function (t) {
						return t.name === i.name && t.ValueTypeName === r;
					});
					if (void 0 === s) continue;
					let a = 0;
					const l = i.getValueSize();
					i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (a = l / 3);
					let c = 0;
					const h = s.getValueSize();
					s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
					const u = i.times.length - 1;
					let d;
					if (o <= i.times[0]) {
						const t = a,
							e = l - a;
						d = nu.arraySlice(i.values, t, e);
					} else if (o >= i.times[u]) {
						const t = u * l + a,
							e = t + l - a;
						d = nu.arraySlice(i.values, t, e);
					} else {
						const t = i.createInterpolant(),
							e = a,
							n = l - a;
						t.evaluate(o), (d = nu.arraySlice(t.resultBuffer, e, n));
					}
					if ('quaternion' === r) {
						new Qi().fromArray(d).normalize().conjugate().toArray(d);
					}
					const p = s.times.length;
					for (let t = 0; t < p; ++t) {
						const e = t * h + c;
						if ('quaternion' === r) Qi.multiplyQuaternionsFlat(s.values, e, d, 0, s.values, e);
						else {
							const t = h - 2 * c;
							for (let n = 0; n < t; ++n) s.values[e + n] -= d[n];
						}
					}
				}
				return (t.blendMode = 2501), t;
			},
		};
		function iu(t, e, n, i) {
			(this.parameterPositions = t), (this._cachedIndex = 0), (this.resultBuffer = void 0 !== i ? i : new e.constructor(n)), (this.sampleValues = e), (this.valueSize = n);
		}
		function ru(t, e, n, i) {
			iu.call(this, t, e, n, i), (this._weightPrev = -0), (this._offsetPrev = -0), (this._weightNext = -0), (this._offsetNext = -0);
		}
		function ou(t, e, n, i) {
			iu.call(this, t, e, n, i);
		}
		function su(t, e, n, i) {
			iu.call(this, t, e, n, i);
		}
		function au(t, e, n, i) {
			if (void 0 === t) throw new Error('THREE.KeyframeTrack: track name is undefined');
			if (void 0 === e || 0 === e.length) throw new Error('THREE.KeyframeTrack: no keyframes in track named ' + t);
			(this.name = t), (this.times = nu.convertArray(e, this.TimeBufferType)), (this.values = nu.convertArray(n, this.ValueBufferType)), this.setInterpolation(i || this.DefaultInterpolation);
		}
		function lu(t, e, n) {
			au.call(this, t, e, n);
		}
		function cu(t, e, n, i) {
			au.call(this, t, e, n, i);
		}
		function hu(t, e, n, i) {
			au.call(this, t, e, n, i);
		}
		function uu(t, e, n, i) {
			iu.call(this, t, e, n, i);
		}
		function du(t, e, n, i) {
			au.call(this, t, e, n, i);
		}
		function pu(t, e, n, i) {
			au.call(this, t, e, n, i);
		}
		function fu(t, e, n, i) {
			au.call(this, t, e, n, i);
		}
		function mu(t, e, n, i) {
			(this.name = t),
				(this.tracks = n),
				(this.duration = void 0 !== e ? e : -1),
				(this.blendMode = void 0 !== i ? i : 2500),
				(this.uuid = Gi.generateUUID()),
				this.duration < 0 && this.resetDuration();
		}
		function gu(t) {
			if (void 0 === t.type) throw new Error('THREE.KeyframeTrack: track type undefined, can not parse');
			const e = (function (t) {
				switch (t.toLowerCase()) {
					case 'scalar':
					case 'double':
					case 'float':
					case 'number':
					case 'integer':
						return hu;
					case 'vector':
					case 'vector2':
					case 'vector3':
					case 'vector4':
						return fu;
					case 'color':
						return cu;
					case 'quaternion':
						return du;
					case 'bool':
					case 'boolean':
						return lu;
					case 'string':
						return pu;
				}
				throw new Error('THREE.KeyframeTrack: Unsupported typeName: ' + t);
			})(t.type);
			if (void 0 === t.times) {
				const e = [],
					n = [];
				nu.flattenJSON(t.keys, e, n, 'value'), (t.times = e), (t.values = n);
			}
			return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
		}
		Object.assign(iu.prototype, {
			evaluate: function (t) {
				const e = this.parameterPositions;
				let n = this._cachedIndex,
					i = e[n],
					r = e[n - 1];
				t: {
					e: {
						let o;
						n: {
							i: if (!(t < i)) {
								for (let o = n + 2; ; ) {
									if (void 0 === i) {
										if (t < r) break i;
										return (n = e.length), (this._cachedIndex = n), this.afterEnd_(n - 1, t, r);
									}
									if (n === o) break;
									if (((r = i), (i = e[++n]), t < i)) break e;
								}
								o = e.length;
								break n;
							}
							if (t >= r) break t;
							{
								const s = e[1];
								t < s && ((n = 2), (r = s));
								for (let o = n - 2; ; ) {
									if (void 0 === r) return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
									if (n === o) break;
									if (((i = r), (r = e[--n - 1]), t >= r)) break e;
								}
								(o = n), (n = 0);
							}
						}
						for (; n < o; ) {
							const i = (n + o) >>> 1;
							t < e[i] ? (o = i) : (n = i + 1);
						}
						if (((i = e[n]), (r = e[n - 1]), void 0 === r)) return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
						if (void 0 === i) return (n = e.length), (this._cachedIndex = n), this.afterEnd_(n - 1, r, t);
					}
					(this._cachedIndex = n), this.intervalChanged_(n, r, i);
				}
				return this.interpolate_(n, r, t, i);
			},
			settings: null,
			DefaultSettings_: {},
			getSettings_: function () {
				return this.settings || this.DefaultSettings_;
			},
			copySampleValue_: function (t) {
				const e = this.resultBuffer,
					n = this.sampleValues,
					i = this.valueSize,
					r = t * i;
				for (let t = 0; t !== i; ++t) e[t] = n[r + t];
				return e;
			},
			interpolate_: function () {
				throw new Error('call to abstract method');
			},
			intervalChanged_: function () {},
		}),
			Object.assign(iu.prototype, {
				beforeStart_: iu.prototype.copySampleValue_,
				afterEnd_: iu.prototype.copySampleValue_,
			}),
			(ru.prototype = Object.assign(Object.create(iu.prototype), {
				constructor: ru,
				DefaultSettings_: {
					endingStart: 2400,
					endingEnd: 2400,
				},
				intervalChanged_: function (t, e, n) {
					const i = this.parameterPositions;
					let r = t - 2,
						o = t + 1,
						s = i[r],
						a = i[o];
					if (void 0 === s)
						switch (this.getSettings_().endingStart) {
							case 2401:
								(r = t), (s = 2 * e - n);
								break;
							case 2402:
								(r = i.length - 2), (s = e + i[r] - i[r + 1]);
								break;
							default:
								(r = t), (s = n);
						}
					if (void 0 === a)
						switch (this.getSettings_().endingEnd) {
							case 2401:
								(o = t), (a = 2 * n - e);
								break;
							case 2402:
								(o = 1), (a = n + i[1] - i[0]);
								break;
							default:
								(o = t - 1), (a = e);
						}
					const l = 0.5 * (n - e),
						c = this.valueSize;
					(this._weightPrev = l / (e - s)), (this._weightNext = l / (a - n)), (this._offsetPrev = r * c), (this._offsetNext = o * c);
				},
				interpolate_: function (t, e, n, i) {
					const r = this.resultBuffer,
						o = this.sampleValues,
						s = this.valueSize,
						a = t * s,
						l = a - s,
						c = this._offsetPrev,
						h = this._offsetNext,
						u = this._weightPrev,
						d = this._weightNext,
						p = (n - e) / (i - e),
						f = p * p,
						m = f * p,
						g = -u * m + 2 * u * f - u * p,
						v = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
						y = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
						x = d * m - d * f;
					for (let t = 0; t !== s; ++t) r[t] = g * o[c + t] + v * o[l + t] + y * o[a + t] + x * o[h + t];
					return r;
				},
			})),
			(ou.prototype = Object.assign(Object.create(iu.prototype), {
				constructor: ou,
				interpolate_: function (t, e, n, i) {
					const r = this.resultBuffer,
						o = this.sampleValues,
						s = this.valueSize,
						a = t * s,
						l = a - s,
						c = (n - e) / (i - e),
						h = 1 - c;
					for (let t = 0; t !== s; ++t) r[t] = o[l + t] * h + o[a + t] * c;
					return r;
				},
			})),
			(su.prototype = Object.assign(Object.create(iu.prototype), {
				constructor: su,
				interpolate_: function (t) {
					return this.copySampleValue_(t - 1);
				},
			})),
			Object.assign(au, {
				toJSON: function (t) {
					const e = t.constructor;
					let n;
					if (void 0 !== e.toJSON) n = e.toJSON(t);
					else {
						n = {
							name: t.name,
							times: nu.convertArray(t.times, Array),
							values: nu.convertArray(t.values, Array),
						};
						const e = t.getInterpolation();
						e !== t.DefaultInterpolation && (n.interpolation = e);
					}
					return (n.type = t.ValueTypeName), n;
				},
			}),
			Object.assign(au.prototype, {
				constructor: au,
				TimeBufferType: Float32Array,
				ValueBufferType: Float32Array,
				DefaultInterpolation: 2301,
				InterpolantFactoryMethodDiscrete: function (t) {
					return new su(this.times, this.values, this.getValueSize(), t);
				},
				InterpolantFactoryMethodLinear: function (t) {
					return new ou(this.times, this.values, this.getValueSize(), t);
				},
				InterpolantFactoryMethodSmooth: function (t) {
					return new ru(this.times, this.values, this.getValueSize(), t);
				},
				setInterpolation: function (t) {
					let e;
					switch (t) {
						case 2300:
							e = this.InterpolantFactoryMethodDiscrete;
							break;
						case 2301:
							e = this.InterpolantFactoryMethodLinear;
							break;
						case 2302:
							e = this.InterpolantFactoryMethodSmooth;
					}
					if (void 0 === e) {
						const e = 'unsupported interpolation for ' + this.ValueTypeName + ' keyframe track named ' + this.name;
						if (void 0 === this.createInterpolant) {
							if (t === this.DefaultInterpolation) throw new Error(e);
							this.setInterpolation(this.DefaultInterpolation);
						}
						return console.warn('THREE.KeyframeTrack:', e), this;
					}
					return (this.createInterpolant = e), this;
				},
				getInterpolation: function () {
					switch (this.createInterpolant) {
						case this.InterpolantFactoryMethodDiscrete:
							return 2300;
						case this.InterpolantFactoryMethodLinear:
							return 2301;
						case this.InterpolantFactoryMethodSmooth:
							return 2302;
					}
				},
				getValueSize: function () {
					return this.values.length / this.times.length;
				},
				shift: function (t) {
					if (0 !== t) {
						const e = this.times;
						for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
					}
					return this;
				},
				scale: function (t) {
					if (1 !== t) {
						const e = this.times;
						for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
					}
					return this;
				},
				trim: function (t, e) {
					const n = this.times,
						i = n.length;
					let r = 0,
						o = i - 1;
					for (; r !== i && n[r] < t; ) ++r;
					for (; -1 !== o && n[o] > e; ) --o;
					if ((++o, 0 !== r || o !== i)) {
						r >= o && ((o = Math.max(o, 1)), (r = o - 1));
						const t = this.getValueSize();
						(this.times = nu.arraySlice(n, r, o)), (this.values = nu.arraySlice(this.values, r * t, o * t));
					}
					return this;
				},
				validate: function () {
					let t = !0;
					const e = this.getValueSize();
					e - Math.floor(e) != 0 && (console.error('THREE.KeyframeTrack: Invalid value size in track.', this), (t = !1));
					const n = this.times,
						i = this.values,
						r = n.length;
					0 === r && (console.error('THREE.KeyframeTrack: Track is empty.', this), (t = !1));
					let o = null;
					for (let e = 0; e !== r; e++) {
						const i = n[e];
						if ('number' == typeof i && isNaN(i)) {
							console.error('THREE.KeyframeTrack: Time is not a valid number.', this, e, i), (t = !1);
							break;
						}
						if (null !== o && o > i) {
							console.error('THREE.KeyframeTrack: Out of order keys.', this, e, i, o), (t = !1);
							break;
						}
						o = i;
					}
					if (void 0 !== i && nu.isTypedArray(i))
						for (let e = 0, n = i.length; e !== n; ++e) {
							const n = i[e];
							if (isNaN(n)) {
								console.error('THREE.KeyframeTrack: Value is not a valid number.', this, e, n), (t = !1);
								break;
							}
						}
					return t;
				},
				optimize: function () {
					const t = nu.arraySlice(this.times),
						e = nu.arraySlice(this.values),
						n = this.getValueSize(),
						i = 2302 === this.getInterpolation(),
						r = t.length - 1;
					let o = 1;
					for (let s = 1; s < r; ++s) {
						let r = !1;
						const a = t[s];
						if (a !== t[s + 1] && (1 !== s || a !== a[0]))
							if (i) r = !0;
							else {
								const t = s * n,
									i = t - n,
									o = t + n;
								for (let s = 0; s !== n; ++s) {
									const n = e[t + s];
									if (n !== e[i + s] || n !== e[o + s]) {
										r = !0;
										break;
									}
								}
							}
						if (r) {
							if (s !== o) {
								t[o] = t[s];
								const i = s * n,
									r = o * n;
								for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
							}
							++o;
						}
					}
					if (r > 0) {
						t[o] = t[r];
						for (let t = r * n, i = o * n, s = 0; s !== n; ++s) e[i + s] = e[t + s];
						++o;
					}
					return o !== t.length ? ((this.times = nu.arraySlice(t, 0, o)), (this.values = nu.arraySlice(e, 0, o * n))) : ((this.times = t), (this.values = e)), this;
				},
				clone: function () {
					const t = nu.arraySlice(this.times, 0),
						e = nu.arraySlice(this.values, 0),
						n = new (0, this.constructor)(this.name, t, e);
					return (n.createInterpolant = this.createInterpolant), n;
				},
			}),
			(lu.prototype = Object.assign(Object.create(au.prototype), {
				constructor: lu,
				ValueTypeName: 'bool',
				ValueBufferType: Array,
				DefaultInterpolation: 2300,
				InterpolantFactoryMethodLinear: void 0,
				InterpolantFactoryMethodSmooth: void 0,
			})),
			(cu.prototype = Object.assign(Object.create(au.prototype), {
				constructor: cu,
				ValueTypeName: 'color',
			})),
			(hu.prototype = Object.assign(Object.create(au.prototype), {
				constructor: hu,
				ValueTypeName: 'number',
			})),
			(uu.prototype = Object.assign(Object.create(iu.prototype), {
				constructor: uu,
				interpolate_: function (t, e, n, i) {
					const r = this.resultBuffer,
						o = this.sampleValues,
						s = this.valueSize,
						a = (n - e) / (i - e);
					let l = t * s;
					for (let t = l + s; l !== t; l += 4) Qi.slerpFlat(r, 0, o, l - s, o, l, a);
					return r;
				},
			})),
			(du.prototype = Object.assign(Object.create(au.prototype), {
				constructor: du,
				ValueTypeName: 'quaternion',
				DefaultInterpolation: 2301,
				InterpolantFactoryMethodLinear: function (t) {
					return new uu(this.times, this.values, this.getValueSize(), t);
				},
				InterpolantFactoryMethodSmooth: void 0,
			})),
			(pu.prototype = Object.assign(Object.create(au.prototype), {
				constructor: pu,
				ValueTypeName: 'string',
				ValueBufferType: Array,
				DefaultInterpolation: 2300,
				InterpolantFactoryMethodLinear: void 0,
				InterpolantFactoryMethodSmooth: void 0,
			})),
			(fu.prototype = Object.assign(Object.create(au.prototype), {
				constructor: fu,
				ValueTypeName: 'vector',
			})),
			Object.assign(mu, {
				parse: function (t) {
					const e = [],
						n = t.tracks,
						i = 1 / (t.fps || 1);
					for (let t = 0, r = n.length; t !== r; ++t) e.push(gu(n[t]).scale(i));
					return new mu(t.name, t.duration, e, t.blendMode);
				},
				toJSON: function (t) {
					const e = [],
						n = t.tracks,
						i = {
							name: t.name,
							duration: t.duration,
							tracks: e,
							uuid: t.uuid,
							blendMode: t.blendMode,
						};
					for (let t = 0, i = n.length; t !== i; ++t) e.push(au.toJSON(n[t]));
					return i;
				},
				CreateFromMorphTargetSequence: function (t, e, n, i) {
					const r = e.length,
						o = [];
					for (let t = 0; t < r; t++) {
						let s = [],
							a = [];
						s.push((t + r - 1) % r, t, (t + 1) % r), a.push(0, 1, 0);
						const l = nu.getKeyframeOrder(s);
						(s = nu.sortedArray(s, 1, l)), (a = nu.sortedArray(a, 1, l)), i || 0 !== s[0] || (s.push(r), a.push(a[0])), o.push(new hu('.morphTargetInfluences[' + e[t].name + ']', s, a).scale(1 / n));
					}
					return new mu(t, -1, o);
				},
				findByName: function (t, e) {
					let n = t;
					if (!Array.isArray(t)) {
						const e = t;
						n = (e.geometry && e.geometry.animations) || e.animations;
					}
					for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
					return null;
				},
				CreateClipsFromMorphTargetSequences: function (t, e, n) {
					const i = {},
						r = /^([\w-]*?)([\d]+)$/;
					for (let e = 0, n = t.length; e < n; e++) {
						const n = t[e],
							o = n.name.match(r);
						if (o && o.length > 1) {
							const t = o[1];
							let e = i[t];
							e || (i[t] = e = []), e.push(n);
						}
					}
					const o = [];
					for (const t in i) o.push(mu.CreateFromMorphTargetSequence(t, i[t], e, n));
					return o;
				},
				parseAnimation: function (t, e) {
					if (!t) return console.error('THREE.AnimationClip: No animation in JSONLoader data.'), null;
					const n = function (t, e, n, i, r) {
							if (0 !== n.length) {
								const o = [],
									s = [];
								nu.flattenJSON(n, o, s, i), 0 !== o.length && r.push(new t(e, o, s));
							}
						},
						i = [],
						r = t.name || 'default',
						o = t.fps || 30,
						s = t.blendMode;
					let a = t.length || -1;
					const l = t.hierarchy || [];
					for (let t = 0; t < l.length; t++) {
						const r = l[t].keys;
						if (r && 0 !== r.length)
							if (r[0].morphTargets) {
								const t = {};
								let e;
								for (e = 0; e < r.length; e++) if (r[e].morphTargets) for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
								for (const n in t) {
									const t = [],
										o = [];
									for (let i = 0; i !== r[e].morphTargets.length; ++i) {
										const i = r[e];
										t.push(i.time), o.push(i.morphTarget === n ? 1 : 0);
									}
									i.push(new hu('.morphTargetInfluence[' + n + ']', t, o));
								}
								a = t.length * (o || 1);
							} else {
								const o = '.bones[' + e[t].name + ']';
								n(fu, o + '.position', r, 'pos', i), n(du, o + '.quaternion', r, 'rot', i), n(fu, o + '.scale', r, 'scl', i);
							}
					}
					if (0 === i.length) return null;
					return new mu(r, a, i, s);
				},
			}),
			Object.assign(mu.prototype, {
				resetDuration: function () {
					let t = 0;
					for (let e = 0, n = this.tracks.length; e !== n; ++e) {
						const n = this.tracks[e];
						t = Math.max(t, n.times[n.times.length - 1]);
					}
					return (this.duration = t), this;
				},
				trim: function () {
					for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
					return this;
				},
				validate: function () {
					let t = !0;
					for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
					return t;
				},
				optimize: function () {
					for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
					return this;
				},
				clone: function () {
					const t = [];
					for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
					return new mu(this.name, this.duration, t, this.blendMode);
				},
			});
		const vu = {
			enabled: !1,
			files: {},
			add: function (t, e) {
				!1 !== this.enabled && (this.files[t] = e);
			},
			get: function (t) {
				if (!1 !== this.enabled) return this.files[t];
			},
			remove: function (t) {
				delete this.files[t];
			},
			clear: function () {
				this.files = {};
			},
		};
		function yu(t, e, n) {
			const i = this;
			let r = !1,
				o = 0,
				s = 0,
				a = void 0;
			const l = [];
			(this.onStart = void 0),
				(this.onLoad = t),
				(this.onProgress = e),
				(this.onError = n),
				(this.itemStart = function (t) {
					s++, !1 === r && void 0 !== i.onStart && i.onStart(t, o, s), (r = !0);
				}),
				(this.itemEnd = function (t) {
					o++, void 0 !== i.onProgress && i.onProgress(t, o, s), o === s && ((r = !1), void 0 !== i.onLoad && i.onLoad());
				}),
				(this.itemError = function (t) {
					void 0 !== i.onError && i.onError(t);
				}),
				(this.resolveURL = function (t) {
					return a ? a(t) : t;
				}),
				(this.setURLModifier = function (t) {
					return (a = t), this;
				}),
				(this.addHandler = function (t, e) {
					return l.push(t, e), this;
				}),
				(this.removeHandler = function (t) {
					const e = l.indexOf(t);
					return -1 !== e && l.splice(e, 2), this;
				}),
				(this.getHandler = function (t) {
					for (let e = 0, n = l.length; e < n; e += 2) {
						const n = l[e],
							i = l[e + 1];
						if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
					}
					return null;
				});
		}
		const xu = new yu();
		function _u(t) {
			(this.manager = void 0 !== t ? t : xu), (this.crossOrigin = 'anonymous'), (this.path = ''), (this.resourcePath = ''), (this.requestHeader = {});
		}
		Object.assign(_u.prototype, {
			load: function () {},
			loadAsync: function (t, e) {
				const n = this;
				return new Promise(function (i, r) {
					n.load(t, i, e, r);
				});
			},
			parse: function () {},
			setCrossOrigin: function (t) {
				return (this.crossOrigin = t), this;
			},
			setPath: function (t) {
				return (this.path = t), this;
			},
			setResourcePath: function (t) {
				return (this.resourcePath = t), this;
			},
			setRequestHeader: function (t) {
				return (this.requestHeader = t), this;
			},
		});
		const bu = {};
		function wu(t) {
			_u.call(this, t);
		}
		function Mu(t) {
			_u.call(this, t);
		}
		function Su(t) {
			_u.call(this, t);
		}
		function Tu(t) {
			_u.call(this, t);
		}
		function Eu(t) {
			_u.call(this, t);
		}
		function Au(t) {
			_u.call(this, t);
		}
		function Lu(t) {
			_u.call(this, t);
		}
		function Ru() {
			(this.type = 'Curve'), (this.arcLengthDivisions = 200);
		}
		function Pu(t, e, n, i, r, o, s, a) {
			Ru.call(this),
				(this.type = 'EllipseCurve'),
				(this.aX = t || 0),
				(this.aY = e || 0),
				(this.xRadius = n || 1),
				(this.yRadius = i || 1),
				(this.aStartAngle = r || 0),
				(this.aEndAngle = o || 2 * Math.PI),
				(this.aClockwise = s || !1),
				(this.aRotation = a || 0);
		}
		function Cu(t, e, n, i, r, o) {
			Pu.call(this, t, e, n, n, i, r, o), (this.type = 'ArcCurve');
		}
		function Ou() {
			let t = 0,
				e = 0,
				n = 0,
				i = 0;
			function r(r, o, s, a) {
				(t = r), (e = s), (n = -3 * r + 3 * o - 2 * s - a), (i = 2 * r - 2 * o + s + a);
			}
			return {
				initCatmullRom: function (t, e, n, i, o) {
					r(e, n, o * (n - t), o * (i - e));
				},
				initNonuniformCatmullRom: function (t, e, n, i, o, s, a) {
					let l = (e - t) / o - (n - t) / (o + s) + (n - e) / s,
						c = (n - e) / s - (i - e) / (s + a) + (i - n) / a;
					(l *= s), (c *= s), r(e, n, l, c);
				},
				calc: function (r) {
					const o = r * r;
					return t + e * r + n * o + i * (o * r);
				},
			};
		}
		(wu.prototype = Object.assign(Object.create(_u.prototype), {
			constructor: wu,
			load: function (t, e, n, i) {
				void 0 === t && (t = ''), void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
				const r = this,
					o = vu.get(t);
				if (void 0 !== o)
					return (
						r.manager.itemStart(t),
						setTimeout(function () {
							e && e(o), r.manager.itemEnd(t);
						}, 0),
						o
					);
				if (void 0 !== bu[t])
					return void bu[t].push({
						onLoad: e,
						onProgress: n,
						onError: i,
					});
				const s = t.match(/^data:(.*?)(;base64)?,(.*)$/);
				let a;
				if (s) {
					const n = s[1],
						o = !!s[2];
					let a = s[3];
					(a = decodeURIComponent(a)), o && (a = atob(a));
					try {
						let i;
						const o = (this.responseType || '').toLowerCase();
						switch (o) {
							case 'arraybuffer':
							case 'blob':
								const t = new Uint8Array(a.length);
								for (let e = 0; e < a.length; e++) t[e] = a.charCodeAt(e);
								i =
									'blob' === o
										? new Blob([t.buffer], {
												type: n,
										  })
										: t.buffer;
								break;
							case 'document':
								const e = new DOMParser();
								i = e.parseFromString(a, n);
								break;
							case 'json':
								i = JSON.parse(a);
								break;
							default:
								i = a;
						}
						setTimeout(function () {
							e && e(i), r.manager.itemEnd(t);
						}, 0);
					} catch (e) {
						setTimeout(function () {
							i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
						}, 0);
					}
				} else {
					(bu[t] = []),
						bu[t].push({
							onLoad: e,
							onProgress: n,
							onError: i,
						}),
						(a = new XMLHttpRequest()),
						a.open('GET', t, !0),
						a.addEventListener(
							'load',
							function (e) {
								const n = this.response,
									i = bu[t];
								if ((delete bu[t], 200 === this.status || 0 === this.status)) {
									0 === this.status && console.warn('THREE.FileLoader: HTTP Status 0 received.'), vu.add(t, n);
									for (let t = 0, e = i.length; t < e; t++) {
										const e = i[t];
										e.onLoad && e.onLoad(n);
									}
									r.manager.itemEnd(t);
								} else {
									for (let t = 0, n = i.length; t < n; t++) {
										const n = i[t];
										n.onError && n.onError(e);
									}
									r.manager.itemError(t), r.manager.itemEnd(t);
								}
							},
							!1,
						),
						a.addEventListener(
							'progress',
							function (e) {
								const n = bu[t];
								for (let t = 0, i = n.length; t < i; t++) {
									const i = n[t];
									i.onProgress && i.onProgress(e);
								}
							},
							!1,
						),
						a.addEventListener(
							'error',
							function (e) {
								const n = bu[t];
								delete bu[t];
								for (let t = 0, i = n.length; t < i; t++) {
									const i = n[t];
									i.onError && i.onError(e);
								}
								r.manager.itemError(t), r.manager.itemEnd(t);
							},
							!1,
						),
						a.addEventListener(
							'abort',
							function (e) {
								const n = bu[t];
								delete bu[t];
								for (let t = 0, i = n.length; t < i; t++) {
									const i = n[t];
									i.onError && i.onError(e);
								}
								r.manager.itemError(t), r.manager.itemEnd(t);
							},
							!1,
						),
						void 0 !== this.responseType && (a.responseType = this.responseType),
						void 0 !== this.withCredentials && (a.withCredentials = this.withCredentials),
						a.overrideMimeType && a.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : 'text/plain');
					for (const t in this.requestHeader) a.setRequestHeader(t, this.requestHeader[t]);
					a.send(null);
				}
				return r.manager.itemStart(t), a;
			},
			setResponseType: function (t) {
				return (this.responseType = t), this;
			},
			setWithCredentials: function (t) {
				return (this.withCredentials = t), this;
			},
			setMimeType: function (t) {
				return (this.mimeType = t), this;
			},
		})),
			(Mu.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: Mu,
				load: function (t, e, n, i) {
					const r = this,
						o = new wu(r.manager);
					o.setPath(r.path),
						o.setRequestHeader(r.requestHeader),
						o.load(
							t,
							function (n) {
								try {
									e(r.parse(JSON.parse(n)));
								} catch (e) {
									i ? i(e) : console.error(e), r.manager.itemError(t);
								}
							},
							n,
							i,
						);
				},
				parse: function (t) {
					const e = [];
					for (let n = 0; n < t.length; n++) {
						const i = mu.parse(t[n]);
						e.push(i);
					}
					return e;
				},
			})),
			(Su.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: Su,
				load: function (t, e, n, i) {
					const r = this,
						o = [],
						s = new Hc();
					s.image = o;
					const a = new wu(this.manager);
					a.setPath(this.path), a.setResponseType('arraybuffer'), a.setRequestHeader(this.requestHeader);
					let l = 0;
					function c(c) {
						a.load(
							t[c],
							function (t) {
								const n = r.parse(t, !0);
								(o[c] = {
									width: n.width,
									height: n.height,
									format: n.format,
									mipmaps: n.mipmaps,
								}),
									(l += 1),
									6 === l && (1 === n.mipmapCount && (s.minFilter = 1006), (s.format = n.format), (s.needsUpdate = !0), e && e(s));
							},
							n,
							i,
						);
					}
					if (Array.isArray(t)) for (let e = 0, n = t.length; e < n; ++e) c(e);
					else
						a.load(
							t,
							function (t) {
								const n = r.parse(t, !0);
								if (n.isCubemap) {
									const t = n.mipmaps.length / n.mipmapCount;
									for (let e = 0; e < t; e++) {
										o[e] = {
											mipmaps: [],
										};
										for (let t = 0; t < n.mipmapCount; t++) o[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]), (o[e].format = n.format), (o[e].width = n.width), (o[e].height = n.height);
									}
								} else (s.image.width = n.width), (s.image.height = n.height), (s.mipmaps = n.mipmaps);
								1 === n.mipmapCount && (s.minFilter = 1006), (s.format = n.format), (s.needsUpdate = !0), e && e(s);
							},
							n,
							i,
						);
					return s;
				},
			})),
			(Tu.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: Tu,
				load: function (t, e, n, i) {
					void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
					const r = this,
						o = vu.get(t);
					if (void 0 !== o)
						return (
							r.manager.itemStart(t),
							setTimeout(function () {
								e && e(o), r.manager.itemEnd(t);
							}, 0),
							o
						);
					const s = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');
					function a() {
						s.removeEventListener('load', a, !1), s.removeEventListener('error', l, !1), vu.add(t, this), e && e(this), r.manager.itemEnd(t);
					}
					function l(e) {
						s.removeEventListener('load', a, !1), s.removeEventListener('error', l, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
					}
					return (
						s.addEventListener('load', a, !1),
						s.addEventListener('error', l, !1),
						'data:' !== t.substr(0, 5) && void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin),
						r.manager.itemStart(t),
						(s.src = t),
						s
					);
				},
			})),
			(Eu.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: Eu,
				load: function (t, e, n, i) {
					const r = new Qs(),
						o = new Tu(this.manager);
					o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
					let s = 0;
					function a(n) {
						o.load(
							t[n],
							function (t) {
								(r.images[n] = t), s++, 6 === s && ((r.needsUpdate = !0), e && e(r));
							},
							void 0,
							i,
						);
					}
					for (let e = 0; e < t.length; ++e) a(e);
					return r;
				},
			})),
			(Au.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: Au,
				load: function (t, e, n, i) {
					const r = this,
						o = new Ls(),
						s = new wu(this.manager);
					return (
						s.setResponseType('arraybuffer'),
						s.setRequestHeader(this.requestHeader),
						s.setPath(this.path),
						s.load(
							t,
							function (t) {
								const n = r.parse(t);
								n &&
									(void 0 !== n.image ? (o.image = n.image) : void 0 !== n.data && ((o.image.width = n.width), (o.image.height = n.height), (o.image.data = n.data)),
									(o.wrapS = void 0 !== n.wrapS ? n.wrapS : 1001),
									(o.wrapT = void 0 !== n.wrapT ? n.wrapT : 1001),
									(o.magFilter = void 0 !== n.magFilter ? n.magFilter : 1006),
									(o.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006),
									(o.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1),
									void 0 !== n.format && (o.format = n.format),
									void 0 !== n.type && (o.type = n.type),
									void 0 !== n.mipmaps && ((o.mipmaps = n.mipmaps), (o.minFilter = 1008)),
									1 === n.mipmapCount && (o.minFilter = 1006),
									(o.needsUpdate = !0),
									e && e(o, n));
							},
							n,
							i,
						),
						o
					);
				},
			})),
			(Lu.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: Lu,
				load: function (t, e, n, i) {
					const r = new Yi(),
						o = new Tu(this.manager);
					return (
						o.setCrossOrigin(this.crossOrigin),
						o.setPath(this.path),
						o.load(
							t,
							function (n) {
								r.image = n;
								const i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
								(r.format = i ? 1022 : 1023), (r.needsUpdate = !0), void 0 !== e && e(r);
							},
							n,
							i,
						),
						r
					);
				},
			})),
			Object.assign(Ru.prototype, {
				getPoint: function () {
					return console.warn('THREE.Curve: .getPoint() not implemented.'), null;
				},
				getPointAt: function (t, e) {
					const n = this.getUtoTmapping(t);
					return this.getPoint(n, e);
				},
				getPoints: function (t) {
					void 0 === t && (t = 5);
					const e = [];
					for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
					return e;
				},
				getSpacedPoints: function (t) {
					void 0 === t && (t = 5);
					const e = [];
					for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
					return e;
				},
				getLength: function () {
					const t = this.getLengths();
					return t[t.length - 1];
				},
				getLengths: function (t) {
					if ((void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)) return this.cacheArcLengths;
					this.needsUpdate = !1;
					const e = [];
					let n,
						i = this.getPoint(0),
						r = 0;
					e.push(0);
					for (let o = 1; o <= t; o++) (n = this.getPoint(o / t)), (r += n.distanceTo(i)), e.push(r), (i = n);
					return (this.cacheArcLengths = e), e;
				},
				updateArcLengths: function () {
					(this.needsUpdate = !0), this.getLengths();
				},
				getUtoTmapping: function (t, e) {
					const n = this.getLengths();
					let i = 0;
					const r = n.length;
					let o;
					o = e || t * n[r - 1];
					let s,
						a = 0,
						l = r - 1;
					for (; a <= l; )
						if (((i = Math.floor(a + (l - a) / 2)), (s = n[i] - o), s < 0)) a = i + 1;
						else {
							if (!(s > 0)) {
								l = i;
								break;
							}
							l = i - 1;
						}
					if (((i = l), n[i] === o)) return i / (r - 1);
					const c = n[i];
					return (i + (o - c) / (n[i + 1] - c)) / (r - 1);
				},
				getTangent: function (t, e) {
					let n = t - 1e-4,
						i = t + 1e-4;
					n < 0 && (n = 0), i > 1 && (i = 1);
					const r = this.getPoint(n),
						o = this.getPoint(i),
						s = e || (r.isVector2 ? new Vi() : new $i());
					return s.copy(o).sub(r).normalize(), s;
				},
				getTangentAt: function (t, e) {
					const n = this.getUtoTmapping(t);
					return this.getTangent(n, e);
				},
				computeFrenetFrames: function (t, e) {
					const n = new $i(),
						i = [],
						r = [],
						o = [],
						s = new $i(),
						a = new Ar();
					for (let e = 0; e <= t; e++) {
						const n = e / t;
						(i[e] = this.getTangentAt(n, new $i())), i[e].normalize();
					}
					(r[0] = new $i()), (o[0] = new $i());
					let l = Number.MAX_VALUE;
					const c = Math.abs(i[0].x),
						h = Math.abs(i[0].y),
						u = Math.abs(i[0].z);
					c <= l && ((l = c), n.set(1, 0, 0)),
						h <= l && ((l = h), n.set(0, 1, 0)),
						u <= l && n.set(0, 0, 1),
						s.crossVectors(i[0], n).normalize(),
						r[0].crossVectors(i[0], s),
						o[0].crossVectors(i[0], r[0]);
					for (let e = 1; e <= t; e++) {
						if (((r[e] = r[e - 1].clone()), (o[e] = o[e - 1].clone()), s.crossVectors(i[e - 1], i[e]), s.length() > Number.EPSILON)) {
							s.normalize();
							const t = Math.acos(Gi.clamp(i[e - 1].dot(i[e]), -1, 1));
							r[e].applyMatrix4(a.makeRotationAxis(s, t));
						}
						o[e].crossVectors(i[e], r[e]);
					}
					if (!0 === e) {
						let e = Math.acos(Gi.clamp(r[0].dot(r[t]), -1, 1));
						(e /= t), i[0].dot(s.crossVectors(r[0], r[t])) > 0 && (e = -e);
						for (let n = 1; n <= t; n++) r[n].applyMatrix4(a.makeRotationAxis(i[n], e * n)), o[n].crossVectors(i[n], r[n]);
					}
					return {
						tangents: i,
						normals: r,
						binormals: o,
					};
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				copy: function (t) {
					return (this.arcLengthDivisions = t.arcLengthDivisions), this;
				},
				toJSON: function () {
					const t = {
						metadata: {
							version: 4.5,
							type: 'Curve',
							generator: 'Curve.toJSON',
						},
					};
					return (t.arcLengthDivisions = this.arcLengthDivisions), (t.type = this.type), t;
				},
				fromJSON: function (t) {
					return (this.arcLengthDivisions = t.arcLengthDivisions), this;
				},
			}),
			(Pu.prototype = Object.create(Ru.prototype)),
			(Pu.prototype.constructor = Pu),
			(Pu.prototype.isEllipseCurve = !0),
			(Pu.prototype.getPoint = function (t, e) {
				const n = e || new Vi(),
					i = 2 * Math.PI;
				let r = this.aEndAngle - this.aStartAngle;
				const o = Math.abs(r) < Number.EPSILON;
				for (; r < 0; ) r += i;
				for (; r > i; ) r -= i;
				r < Number.EPSILON && (r = o ? 0 : i), !0 !== this.aClockwise || o || (r === i ? (r = -i) : (r -= i));
				const s = this.aStartAngle + t * r;
				let a = this.aX + this.xRadius * Math.cos(s),
					l = this.aY + this.yRadius * Math.sin(s);
				if (0 !== this.aRotation) {
					const t = Math.cos(this.aRotation),
						e = Math.sin(this.aRotation),
						n = a - this.aX,
						i = l - this.aY;
					(a = n * t - i * e + this.aX), (l = n * e + i * t + this.aY);
				}
				return n.set(a, l);
			}),
			(Pu.prototype.copy = function (t) {
				return (
					Ru.prototype.copy.call(this, t),
					(this.aX = t.aX),
					(this.aY = t.aY),
					(this.xRadius = t.xRadius),
					(this.yRadius = t.yRadius),
					(this.aStartAngle = t.aStartAngle),
					(this.aEndAngle = t.aEndAngle),
					(this.aClockwise = t.aClockwise),
					(this.aRotation = t.aRotation),
					this
				);
			}),
			(Pu.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				return (
					(t.aX = this.aX),
					(t.aY = this.aY),
					(t.xRadius = this.xRadius),
					(t.yRadius = this.yRadius),
					(t.aStartAngle = this.aStartAngle),
					(t.aEndAngle = this.aEndAngle),
					(t.aClockwise = this.aClockwise),
					(t.aRotation = this.aRotation),
					t
				);
			}),
			(Pu.prototype.fromJSON = function (t) {
				return (
					Ru.prototype.fromJSON.call(this, t),
					(this.aX = t.aX),
					(this.aY = t.aY),
					(this.xRadius = t.xRadius),
					(this.yRadius = t.yRadius),
					(this.aStartAngle = t.aStartAngle),
					(this.aEndAngle = t.aEndAngle),
					(this.aClockwise = t.aClockwise),
					(this.aRotation = t.aRotation),
					this
				);
			}),
			(Cu.prototype = Object.create(Pu.prototype)),
			(Cu.prototype.constructor = Cu),
			(Cu.prototype.isArcCurve = !0);
		const Du = new $i(),
			Iu = new Ou(),
			Nu = new Ou(),
			zu = new Ou();
		function Bu(t, e, n, i) {
			Ru.call(this), (this.type = 'CatmullRomCurve3'), (this.points = t || []), (this.closed = e || !1), (this.curveType = n || 'centripetal'), (this.tension = void 0 !== i ? i : 0.5);
		}
		function ku(t, e, n, i, r) {
			const o = 0.5 * (i - e),
				s = 0.5 * (r - n),
				a = t * t;
			return (2 * n - 2 * i + o + s) * (t * a) + (-3 * n + 3 * i - 2 * o - s) * a + o * t + n;
		}
		function Fu(t, e, n, i) {
			return (
				(function (t, e) {
					const n = 1 - t;
					return n * n * e;
				})(t, e) +
				(function (t, e) {
					return 2 * (1 - t) * t * e;
				})(t, n) +
				(function (t, e) {
					return t * t * e;
				})(t, i)
			);
		}
		function Uu(t, e, n, i, r) {
			return (
				(function (t, e) {
					const n = 1 - t;
					return n * n * n * e;
				})(t, e) +
				(function (t, e) {
					const n = 1 - t;
					return 3 * n * n * t * e;
				})(t, n) +
				(function (t, e) {
					return 3 * (1 - t) * t * t * e;
				})(t, i) +
				(function (t, e) {
					return t * t * t * e;
				})(t, r)
			);
		}
		function Hu(t, e, n, i) {
			Ru.call(this), (this.type = 'CubicBezierCurve'), (this.v0 = t || new Vi()), (this.v1 = e || new Vi()), (this.v2 = n || new Vi()), (this.v3 = i || new Vi());
		}
		function Gu(t, e, n, i) {
			Ru.call(this), (this.type = 'CubicBezierCurve3'), (this.v0 = t || new $i()), (this.v1 = e || new $i()), (this.v2 = n || new $i()), (this.v3 = i || new $i());
		}
		function Vu(t, e) {
			Ru.call(this), (this.type = 'LineCurve'), (this.v1 = t || new Vi()), (this.v2 = e || new Vi());
		}
		function ju(t, e) {
			Ru.call(this), (this.type = 'LineCurve3'), (this.v1 = t || new $i()), (this.v2 = e || new $i());
		}
		function Wu(t, e, n) {
			Ru.call(this), (this.type = 'QuadraticBezierCurve'), (this.v0 = t || new Vi()), (this.v1 = e || new Vi()), (this.v2 = n || new Vi());
		}
		function qu(t, e, n) {
			Ru.call(this), (this.type = 'QuadraticBezierCurve3'), (this.v0 = t || new $i()), (this.v1 = e || new $i()), (this.v2 = n || new $i());
		}
		function Xu(t) {
			Ru.call(this), (this.type = 'SplineCurve'), (this.points = t || []);
		}
		(Bu.prototype = Object.create(Ru.prototype)),
			(Bu.prototype.constructor = Bu),
			(Bu.prototype.isCatmullRomCurve3 = !0),
			(Bu.prototype.getPoint = function (t, e) {
				const n = e || new $i(),
					i = this.points,
					r = i.length,
					o = (r - (this.closed ? 0 : 1)) * t;
				let s,
					a,
					l = Math.floor(o),
					c = o - l;
				this.closed ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r) : 0 === c && l === r - 1 && ((l = r - 2), (c = 1)),
					this.closed || l > 0 ? (s = i[(l - 1) % r]) : (Du.subVectors(i[0], i[1]).add(i[0]), (s = Du));
				const h = i[l % r],
					u = i[(l + 1) % r];
				if ((this.closed || l + 2 < r ? (a = i[(l + 2) % r]) : (Du.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (a = Du)), 'centripetal' === this.curveType || 'chordal' === this.curveType)) {
					const t = 'chordal' === this.curveType ? 0.5 : 0.25;
					let e = Math.pow(s.distanceToSquared(h), t),
						n = Math.pow(h.distanceToSquared(u), t),
						i = Math.pow(u.distanceToSquared(a), t);
					n < 1e-4 && (n = 1),
						e < 1e-4 && (e = n),
						i < 1e-4 && (i = n),
						Iu.initNonuniformCatmullRom(s.x, h.x, u.x, a.x, e, n, i),
						Nu.initNonuniformCatmullRom(s.y, h.y, u.y, a.y, e, n, i),
						zu.initNonuniformCatmullRom(s.z, h.z, u.z, a.z, e, n, i);
				} else
					'catmullrom' === this.curveType &&
						(Iu.initCatmullRom(s.x, h.x, u.x, a.x, this.tension), Nu.initCatmullRom(s.y, h.y, u.y, a.y, this.tension), zu.initCatmullRom(s.z, h.z, u.z, a.z, this.tension));
				return n.set(Iu.calc(c), Nu.calc(c), zu.calc(c)), n;
			}),
			(Bu.prototype.copy = function (t) {
				Ru.prototype.copy.call(this, t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(n.clone());
				}
				return (this.closed = t.closed), (this.curveType = t.curveType), (this.tension = t.tension), this;
			}),
			(Bu.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				t.points = [];
				for (let e = 0, n = this.points.length; e < n; e++) {
					const n = this.points[e];
					t.points.push(n.toArray());
				}
				return (t.closed = this.closed), (t.curveType = this.curveType), (t.tension = this.tension), t;
			}),
			(Bu.prototype.fromJSON = function (t) {
				Ru.prototype.fromJSON.call(this, t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(new $i().fromArray(n));
				}
				return (this.closed = t.closed), (this.curveType = t.curveType), (this.tension = t.tension), this;
			}),
			(Hu.prototype = Object.create(Ru.prototype)),
			(Hu.prototype.constructor = Hu),
			(Hu.prototype.isCubicBezierCurve = !0),
			(Hu.prototype.getPoint = function (t, e) {
				const n = e || new Vi(),
					i = this.v0,
					r = this.v1,
					o = this.v2,
					s = this.v3;
				return n.set(Uu(t, i.x, r.x, o.x, s.x), Uu(t, i.y, r.y, o.y, s.y)), n;
			}),
			(Hu.prototype.copy = function (t) {
				return Ru.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
			}),
			(Hu.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), (t.v3 = this.v3.toArray()), t;
			}),
			(Hu.prototype.fromJSON = function (t) {
				return Ru.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
			}),
			(Gu.prototype = Object.create(Ru.prototype)),
			(Gu.prototype.constructor = Gu),
			(Gu.prototype.isCubicBezierCurve3 = !0),
			(Gu.prototype.getPoint = function (t, e) {
				const n = e || new $i(),
					i = this.v0,
					r = this.v1,
					o = this.v2,
					s = this.v3;
				return n.set(Uu(t, i.x, r.x, o.x, s.x), Uu(t, i.y, r.y, o.y, s.y), Uu(t, i.z, r.z, o.z, s.z)), n;
			}),
			(Gu.prototype.copy = function (t) {
				return Ru.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
			}),
			(Gu.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), (t.v3 = this.v3.toArray()), t;
			}),
			(Gu.prototype.fromJSON = function (t) {
				return Ru.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
			}),
			(Vu.prototype = Object.create(Ru.prototype)),
			(Vu.prototype.constructor = Vu),
			(Vu.prototype.isLineCurve = !0),
			(Vu.prototype.getPoint = function (t, e) {
				const n = e || new Vi();
				return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
			}),
			(Vu.prototype.getPointAt = function (t, e) {
				return this.getPoint(t, e);
			}),
			(Vu.prototype.getTangent = function (t, e) {
				const n = e || new Vi();
				return n.copy(this.v2).sub(this.v1).normalize(), n;
			}),
			(Vu.prototype.copy = function (t) {
				return Ru.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
			}),
			(Vu.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}),
			(Vu.prototype.fromJSON = function (t) {
				return Ru.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
			}),
			(ju.prototype = Object.create(Ru.prototype)),
			(ju.prototype.constructor = ju),
			(ju.prototype.isLineCurve3 = !0),
			(ju.prototype.getPoint = function (t, e) {
				const n = e || new $i();
				return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
			}),
			(ju.prototype.getPointAt = function (t, e) {
				return this.getPoint(t, e);
			}),
			(ju.prototype.copy = function (t) {
				return Ru.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
			}),
			(ju.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}),
			(ju.prototype.fromJSON = function (t) {
				return Ru.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
			}),
			(Wu.prototype = Object.create(Ru.prototype)),
			(Wu.prototype.constructor = Wu),
			(Wu.prototype.isQuadraticBezierCurve = !0),
			(Wu.prototype.getPoint = function (t, e) {
				const n = e || new Vi(),
					i = this.v0,
					r = this.v1,
					o = this.v2;
				return n.set(Fu(t, i.x, r.x, o.x), Fu(t, i.y, r.y, o.y)), n;
			}),
			(Wu.prototype.copy = function (t) {
				return Ru.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
			}),
			(Wu.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}),
			(Wu.prototype.fromJSON = function (t) {
				return Ru.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
			}),
			(qu.prototype = Object.create(Ru.prototype)),
			(qu.prototype.constructor = qu),
			(qu.prototype.isQuadraticBezierCurve3 = !0),
			(qu.prototype.getPoint = function (t, e) {
				const n = e || new $i(),
					i = this.v0,
					r = this.v1,
					o = this.v2;
				return n.set(Fu(t, i.x, r.x, o.x), Fu(t, i.y, r.y, o.y), Fu(t, i.z, r.z, o.z)), n;
			}),
			(qu.prototype.copy = function (t) {
				return Ru.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
			}),
			(qu.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				return (t.v0 = this.v0.toArray()), (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}),
			(qu.prototype.fromJSON = function (t) {
				return Ru.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
			}),
			(Xu.prototype = Object.create(Ru.prototype)),
			(Xu.prototype.constructor = Xu),
			(Xu.prototype.isSplineCurve = !0),
			(Xu.prototype.getPoint = function (t, e) {
				const n = e || new Vi(),
					i = this.points,
					r = (i.length - 1) * t,
					o = Math.floor(r),
					s = r - o,
					a = i[0 === o ? o : o - 1],
					l = i[o],
					c = i[o > i.length - 2 ? i.length - 1 : o + 1],
					h = i[o > i.length - 3 ? i.length - 1 : o + 2];
				return n.set(ku(s, a.x, l.x, c.x, h.x), ku(s, a.y, l.y, c.y, h.y)), n;
			}),
			(Xu.prototype.copy = function (t) {
				Ru.prototype.copy.call(this, t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(n.clone());
				}
				return this;
			}),
			(Xu.prototype.toJSON = function () {
				const t = Ru.prototype.toJSON.call(this);
				t.points = [];
				for (let e = 0, n = this.points.length; e < n; e++) {
					const n = this.points[e];
					t.points.push(n.toArray());
				}
				return t;
			}),
			(Xu.prototype.fromJSON = function (t) {
				Ru.prototype.fromJSON.call(this, t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(new Vi().fromArray(n));
				}
				return this;
			});
		var Yu = Object.freeze({
			__proto__: null,
			ArcCurve: Cu,
			CatmullRomCurve3: Bu,
			CubicBezierCurve: Hu,
			CubicBezierCurve3: Gu,
			EllipseCurve: Pu,
			LineCurve: Vu,
			LineCurve3: ju,
			QuadraticBezierCurve: Wu,
			QuadraticBezierCurve3: qu,
			SplineCurve: Xu,
		});
		function Zu() {
			Ru.call(this), (this.type = 'CurvePath'), (this.curves = []), (this.autoClose = !1);
		}
		function Ju(t) {
			Zu.call(this), (this.type = 'Path'), (this.currentPoint = new Vi()), t && this.setFromPoints(t);
		}
		function Ku(t) {
			Ju.call(this, t), (this.uuid = Gi.generateUUID()), (this.type = 'Shape'), (this.holes = []);
		}
		function Qu(t, e) {
			Qr.call(this), (this.type = 'Light'), (this.color = new bo(t)), (this.intensity = void 0 !== e ? e : 1), (this.receiveShadow = void 0);
		}
		function $u(t, e, n) {
			Qu.call(this, t, n), (this.type = 'HemisphereLight'), (this.castShadow = void 0), this.position.copy(Qr.DefaultUp), this.updateMatrix(), (this.groundColor = new bo(e));
		}
		function td(t) {
			(this.camera = t),
				(this.bias = 0),
				(this.normalBias = 0),
				(this.radius = 1),
				(this.mapSize = new Vi(512, 512)),
				(this.map = null),
				(this.mapPass = null),
				(this.matrix = new Ar()),
				(this.autoUpdate = !0),
				(this.needsUpdate = !1),
				(this._frustum = new Cs()),
				(this._frameExtents = new Vi(1, 1)),
				(this._viewportCount = 1),
				(this._viewports = [new Zi(0, 0, 1, 1)]);
		}
		function ed() {
			td.call(this, new Ts(50, 1, 0.5, 500));
		}
		function nd(t, e, n, i, r, o) {
			Qu.call(this, t, e),
				(this.type = 'SpotLight'),
				this.position.copy(Qr.DefaultUp),
				this.updateMatrix(),
				(this.target = new Qr()),
				Object.defineProperty(this, 'power', {
					get: function () {
						return this.intensity * Math.PI;
					},
					set: function (t) {
						this.intensity = t / Math.PI;
					},
				}),
				(this.distance = void 0 !== n ? n : 0),
				(this.angle = void 0 !== i ? i : Math.PI / 3),
				(this.penumbra = void 0 !== r ? r : 0),
				(this.decay = void 0 !== o ? o : 1),
				(this.shadow = new ed());
		}
		function id() {
			td.call(this, new Ts(90, 1, 0.5, 500)),
				(this._frameExtents = new Vi(4, 2)),
				(this._viewportCount = 6),
				(this._viewports = [new Zi(2, 1, 1, 1), new Zi(0, 1, 1, 1), new Zi(3, 1, 1, 1), new Zi(1, 1, 1, 1), new Zi(3, 0, 1, 1), new Zi(1, 0, 1, 1)]),
				(this._cubeDirections = [new $i(1, 0, 0), new $i(-1, 0, 0), new $i(0, 0, 1), new $i(0, 0, -1), new $i(0, 1, 0), new $i(0, -1, 0)]),
				(this._cubeUps = [new $i(0, 1, 0), new $i(0, 1, 0), new $i(0, 1, 0), new $i(0, 1, 0), new $i(0, 0, 1), new $i(0, 0, -1)]);
		}
		function rd(t, e, n, i) {
			Qu.call(this, t, e),
				(this.type = 'PointLight'),
				Object.defineProperty(this, 'power', {
					get: function () {
						return 4 * this.intensity * Math.PI;
					},
					set: function (t) {
						this.intensity = t / (4 * Math.PI);
					},
				}),
				(this.distance = void 0 !== n ? n : 0),
				(this.decay = void 0 !== i ? i : 1),
				(this.shadow = new id());
		}
		function od(t, e, n, i, r, o) {
			Ss.call(this),
				(this.type = 'OrthographicCamera'),
				(this.zoom = 1),
				(this.view = null),
				(this.left = void 0 !== t ? t : -1),
				(this.right = void 0 !== e ? e : 1),
				(this.top = void 0 !== n ? n : 1),
				(this.bottom = void 0 !== i ? i : -1),
				(this.near = void 0 !== r ? r : 0.1),
				(this.far = void 0 !== o ? o : 2e3),
				this.updateProjectionMatrix();
		}
		function sd() {
			td.call(this, new od(-5, 5, 5, -5, 0.5, 500));
		}
		function ad(t, e) {
			Qu.call(this, t, e), (this.type = 'DirectionalLight'), this.position.copy(Qr.DefaultUp), this.updateMatrix(), (this.target = new Qr()), (this.shadow = new sd());
		}
		function ld(t, e) {
			Qu.call(this, t, e), (this.type = 'AmbientLight'), (this.castShadow = void 0);
		}
		function cd(t, e, n, i) {
			Qu.call(this, t, e), (this.type = 'RectAreaLight'), (this.width = void 0 !== n ? n : 10), (this.height = void 0 !== i ? i : 10);
		}
		(Zu.prototype = Object.assign(Object.create(Ru.prototype), {
			constructor: Zu,
			add: function (t) {
				this.curves.push(t);
			},
			closePath: function () {
				const t = this.curves[0].getPoint(0),
					e = this.curves[this.curves.length - 1].getPoint(1);
				t.equals(e) || this.curves.push(new Vu(e, t));
			},
			getPoint: function (t) {
				const e = t * this.getLength(),
					n = this.getCurveLengths();
				let i = 0;
				for (; i < n.length; ) {
					if (n[i] >= e) {
						const t = n[i] - e,
							r = this.curves[i],
							o = r.getLength(),
							s = 0 === o ? 0 : 1 - t / o;
						return r.getPointAt(s);
					}
					i++;
				}
				return null;
			},
			getLength: function () {
				const t = this.getCurveLengths();
				return t[t.length - 1];
			},
			updateArcLengths: function () {
				(this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
			},
			getCurveLengths: function () {
				if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
				const t = [];
				let e = 0;
				for (let n = 0, i = this.curves.length; n < i; n++) (e += this.curves[n].getLength()), t.push(e);
				return (this.cacheLengths = t), t;
			},
			getSpacedPoints: function (t) {
				void 0 === t && (t = 40);
				const e = [];
				for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
				return this.autoClose && e.push(e[0]), e;
			},
			getPoints: function (t) {
				t = t || 12;
				const e = [];
				let n;
				for (let i = 0, r = this.curves; i < r.length; i++) {
					const o = r[i],
						s = o && o.isEllipseCurve ? 2 * t : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? t * o.points.length : t,
						a = o.getPoints(s);
					for (let t = 0; t < a.length; t++) {
						const i = a[t];
						(n && n.equals(i)) || (e.push(i), (n = i));
					}
				}
				return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
			},
			copy: function (t) {
				Ru.prototype.copy.call(this, t), (this.curves = []);
				for (let e = 0, n = t.curves.length; e < n; e++) {
					const n = t.curves[e];
					this.curves.push(n.clone());
				}
				return (this.autoClose = t.autoClose), this;
			},
			toJSON: function () {
				const t = Ru.prototype.toJSON.call(this);
				(t.autoClose = this.autoClose), (t.curves = []);
				for (let e = 0, n = this.curves.length; e < n; e++) {
					const n = this.curves[e];
					t.curves.push(n.toJSON());
				}
				return t;
			},
			fromJSON: function (t) {
				Ru.prototype.fromJSON.call(this, t), (this.autoClose = t.autoClose), (this.curves = []);
				for (let e = 0, n = t.curves.length; e < n; e++) {
					const n = t.curves[e];
					this.curves.push(new Yu[n.type]().fromJSON(n));
				}
				return this;
			},
		})),
			(Ju.prototype = Object.assign(Object.create(Zu.prototype), {
				constructor: Ju,
				setFromPoints: function (t) {
					this.moveTo(t[0].x, t[0].y);
					for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
					return this;
				},
				moveTo: function (t, e) {
					return this.currentPoint.set(t, e), this;
				},
				lineTo: function (t, e) {
					const n = new Vu(this.currentPoint.clone(), new Vi(t, e));
					return this.curves.push(n), this.currentPoint.set(t, e), this;
				},
				quadraticCurveTo: function (t, e, n, i) {
					const r = new Wu(this.currentPoint.clone(), new Vi(t, e), new Vi(n, i));
					return this.curves.push(r), this.currentPoint.set(n, i), this;
				},
				bezierCurveTo: function (t, e, n, i, r, o) {
					const s = new Hu(this.currentPoint.clone(), new Vi(t, e), new Vi(n, i), new Vi(r, o));
					return this.curves.push(s), this.currentPoint.set(r, o), this;
				},
				splineThru: function (t) {
					const e = new Xu([this.currentPoint.clone()].concat(t));
					return this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this;
				},
				arc: function (t, e, n, i, r, o) {
					const s = this.currentPoint.x,
						a = this.currentPoint.y;
					return this.absarc(t + s, e + a, n, i, r, o), this;
				},
				absarc: function (t, e, n, i, r, o) {
					return this.absellipse(t, e, n, n, i, r, o), this;
				},
				ellipse: function (t, e, n, i, r, o, s, a) {
					const l = this.currentPoint.x,
						c = this.currentPoint.y;
					return this.absellipse(t + l, e + c, n, i, r, o, s, a), this;
				},
				absellipse: function (t, e, n, i, r, o, s, a) {
					const l = new Pu(t, e, n, i, r, o, s, a);
					if (this.curves.length > 0) {
						const t = l.getPoint(0);
						t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
					}
					this.curves.push(l);
					const c = l.getPoint(1);
					return this.currentPoint.copy(c), this;
				},
				copy: function (t) {
					return Zu.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this;
				},
				toJSON: function () {
					const t = Zu.prototype.toJSON.call(this);
					return (t.currentPoint = this.currentPoint.toArray()), t;
				},
				fromJSON: function (t) {
					return Zu.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this;
				},
			})),
			(Ku.prototype = Object.assign(Object.create(Ju.prototype), {
				constructor: Ku,
				getPointsHoles: function (t) {
					const e = [];
					for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
					return e;
				},
				extractPoints: function (t) {
					return {
						shape: this.getPoints(t),
						holes: this.getPointsHoles(t),
					};
				},
				copy: function (t) {
					Ju.prototype.copy.call(this, t), (this.holes = []);
					for (let e = 0, n = t.holes.length; e < n; e++) {
						const n = t.holes[e];
						this.holes.push(n.clone());
					}
					return this;
				},
				toJSON: function () {
					const t = Ju.prototype.toJSON.call(this);
					(t.uuid = this.uuid), (t.holes = []);
					for (let e = 0, n = this.holes.length; e < n; e++) {
						const n = this.holes[e];
						t.holes.push(n.toJSON());
					}
					return t;
				},
				fromJSON: function (t) {
					Ju.prototype.fromJSON.call(this, t), (this.uuid = t.uuid), (this.holes = []);
					for (let e = 0, n = t.holes.length; e < n; e++) {
						const n = t.holes[e];
						this.holes.push(new Ju().fromJSON(n));
					}
					return this;
				},
			})),
			(Qu.prototype = Object.assign(Object.create(Qr.prototype), {
				constructor: Qu,
				isLight: !0,
				copy: function (t) {
					return Qr.prototype.copy.call(this, t), this.color.copy(t.color), (this.intensity = t.intensity), this;
				},
				toJSON: function (t) {
					const e = Qr.prototype.toJSON.call(this, t);
					return (
						(e.object.color = this.color.getHex()),
						(e.object.intensity = this.intensity),
						void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
						void 0 !== this.distance && (e.object.distance = this.distance),
						void 0 !== this.angle && (e.object.angle = this.angle),
						void 0 !== this.decay && (e.object.decay = this.decay),
						void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
						void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
						e
					);
				},
			})),
			($u.prototype = Object.assign(Object.create(Qu.prototype), {
				constructor: $u,
				isHemisphereLight: !0,
				copy: function (t) {
					return Qu.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
				},
			})),
			Object.assign(td.prototype, {
				_projScreenMatrix: new Ar(),
				_lightPositionWorld: new $i(),
				_lookTarget: new $i(),
				getViewportCount: function () {
					return this._viewportCount;
				},
				getFrustum: function () {
					return this._frustum;
				},
				updateMatrices: function (t) {
					const e = this.camera,
						n = this.matrix,
						i = this._projScreenMatrix,
						r = this._lookTarget,
						o = this._lightPositionWorld;
					o.setFromMatrixPosition(t.matrixWorld),
						e.position.copy(o),
						r.setFromMatrixPosition(t.target.matrixWorld),
						e.lookAt(r),
						e.updateMatrixWorld(),
						i.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
						this._frustum.setFromProjectionMatrix(i),
						n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
						n.multiply(e.projectionMatrix),
						n.multiply(e.matrixWorldInverse);
				},
				getViewport: function (t) {
					return this._viewports[t];
				},
				getFrameExtents: function () {
					return this._frameExtents;
				},
				copy: function (t) {
					return (this.camera = t.camera.clone()), (this.bias = t.bias), (this.radius = t.radius), this.mapSize.copy(t.mapSize), this;
				},
				clone: function () {
					return new this.constructor().copy(this);
				},
				toJSON: function () {
					const t = {};
					return (
						0 !== this.bias && (t.bias = this.bias),
						0 !== this.normalBias && (t.normalBias = this.normalBias),
						1 !== this.radius && (t.radius = this.radius),
						(512 === this.mapSize.x && 512 === this.mapSize.y) || (t.mapSize = this.mapSize.toArray()),
						(t.camera = this.camera.toJSON(!1).object),
						delete t.camera.matrix,
						t
					);
				},
			}),
			(ed.prototype = Object.assign(Object.create(td.prototype), {
				constructor: ed,
				isSpotLightShadow: !0,
				updateMatrices: function (t) {
					const e = this.camera,
						n = 2 * Gi.RAD2DEG * t.angle,
						i = this.mapSize.width / this.mapSize.height,
						r = t.distance || e.far;
					(n === e.fov && i === e.aspect && r === e.far) || ((e.fov = n), (e.aspect = i), (e.far = r), e.updateProjectionMatrix()), td.prototype.updateMatrices.call(this, t);
				},
			})),
			(nd.prototype = Object.assign(Object.create(Qu.prototype), {
				constructor: nd,
				isSpotLight: !0,
				copy: function (t) {
					return (
						Qu.prototype.copy.call(this, t),
						(this.distance = t.distance),
						(this.angle = t.angle),
						(this.penumbra = t.penumbra),
						(this.decay = t.decay),
						(this.target = t.target.clone()),
						(this.shadow = t.shadow.clone()),
						this
					);
				},
			})),
			(id.prototype = Object.assign(Object.create(td.prototype), {
				constructor: id,
				isPointLightShadow: !0,
				updateMatrices: function (t, e) {
					void 0 === e && (e = 0);
					const n = this.camera,
						i = this.matrix,
						r = this._lightPositionWorld,
						o = this._lookTarget,
						s = this._projScreenMatrix;
					r.setFromMatrixPosition(t.matrixWorld),
						n.position.copy(r),
						o.copy(n.position),
						o.add(this._cubeDirections[e]),
						n.up.copy(this._cubeUps[e]),
						n.lookAt(o),
						n.updateMatrixWorld(),
						i.makeTranslation(-r.x, -r.y, -r.z),
						s.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
						this._frustum.setFromProjectionMatrix(s);
				},
			})),
			(rd.prototype = Object.assign(Object.create(Qu.prototype), {
				constructor: rd,
				isPointLight: !0,
				copy: function (t) {
					return Qu.prototype.copy.call(this, t), (this.distance = t.distance), (this.decay = t.decay), (this.shadow = t.shadow.clone()), this;
				},
			})),
			(od.prototype = Object.assign(Object.create(Ss.prototype), {
				constructor: od,
				isOrthographicCamera: !0,
				copy: function (t, e) {
					return (
						Ss.prototype.copy.call(this, t, e),
						(this.left = t.left),
						(this.right = t.right),
						(this.top = t.top),
						(this.bottom = t.bottom),
						(this.near = t.near),
						(this.far = t.far),
						(this.zoom = t.zoom),
						(this.view = null === t.view ? null : Object.assign({}, t.view)),
						this
					);
				},
				setViewOffset: function (t, e, n, i, r, o) {
					null === this.view &&
						(this.view = {
							enabled: !0,
							fullWidth: 1,
							fullHeight: 1,
							offsetX: 0,
							offsetY: 0,
							width: 1,
							height: 1,
						}),
						(this.view.enabled = !0),
						(this.view.fullWidth = t),
						(this.view.fullHeight = e),
						(this.view.offsetX = n),
						(this.view.offsetY = i),
						(this.view.width = r),
						(this.view.height = o),
						this.updateProjectionMatrix();
				},
				clearViewOffset: function () {
					null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
				},
				updateProjectionMatrix: function () {
					const t = (this.right - this.left) / (2 * this.zoom),
						e = (this.top - this.bottom) / (2 * this.zoom),
						n = (this.right + this.left) / 2,
						i = (this.top + this.bottom) / 2;
					let r = n - t,
						o = n + t,
						s = i + e,
						a = i - e;
					if (null !== this.view && this.view.enabled) {
						const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
							e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
						(r += t * this.view.offsetX), (o = r + t * this.view.width), (s -= e * this.view.offsetY), (a = s - e * this.view.height);
					}
					this.projectionMatrix.makeOrthographic(r, o, s, a, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
				},
				toJSON: function (t) {
					const e = Qr.prototype.toJSON.call(this, t);
					return (
						(e.object.zoom = this.zoom),
						(e.object.left = this.left),
						(e.object.right = this.right),
						(e.object.top = this.top),
						(e.object.bottom = this.bottom),
						(e.object.near = this.near),
						(e.object.far = this.far),
						null !== this.view && (e.object.view = Object.assign({}, this.view)),
						e
					);
				},
			})),
			(sd.prototype = Object.assign(Object.create(td.prototype), {
				constructor: sd,
				isDirectionalLightShadow: !0,
				updateMatrices: function (t) {
					td.prototype.updateMatrices.call(this, t);
				},
			})),
			(ad.prototype = Object.assign(Object.create(Qu.prototype), {
				constructor: ad,
				isDirectionalLight: !0,
				copy: function (t) {
					return Qu.prototype.copy.call(this, t), (this.target = t.target.clone()), (this.shadow = t.shadow.clone()), this;
				},
			})),
			(ld.prototype = Object.assign(Object.create(Qu.prototype), {
				constructor: ld,
				isAmbientLight: !0,
			})),
			(cd.prototype = Object.assign(Object.create(Qu.prototype), {
				constructor: cd,
				isRectAreaLight: !0,
				copy: function (t) {
					return Qu.prototype.copy.call(this, t), (this.width = t.width), (this.height = t.height), this;
				},
				toJSON: function (t) {
					const e = Qu.prototype.toJSON.call(this, t);
					return (e.object.width = this.width), (e.object.height = this.height), e;
				},
			}));
		class hd {
			constructor() {
				Object.defineProperty(this, 'isSphericalHarmonics3', {
					value: !0,
				}),
					(this.coefficients = []);
				for (let t = 0; t < 9; t++) this.coefficients.push(new $i());
			}
			set(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
				return this;
			}
			zero() {
				for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
				return this;
			}
			getAt(t, e) {
				const n = t.x,
					i = t.y,
					r = t.z,
					o = this.coefficients;
				return (
					e.copy(o[0]).multiplyScalar(0.282095),
					e.addScaledVector(o[1], 0.488603 * i),
					e.addScaledVector(o[2], 0.488603 * r),
					e.addScaledVector(o[3], 0.488603 * n),
					e.addScaledVector(o[4], n * i * 1.092548),
					e.addScaledVector(o[5], i * r * 1.092548),
					e.addScaledVector(o[6], 0.315392 * (3 * r * r - 1)),
					e.addScaledVector(o[7], n * r * 1.092548),
					e.addScaledVector(o[8], 0.546274 * (n * n - i * i)),
					e
				);
			}
			getIrradianceAt(t, e) {
				const n = t.x,
					i = t.y,
					r = t.z,
					o = this.coefficients;
				return (
					e.copy(o[0]).multiplyScalar(0.886227),
					e.addScaledVector(o[1], 1.023328 * i),
					e.addScaledVector(o[2], 1.023328 * r),
					e.addScaledVector(o[3], 1.023328 * n),
					e.addScaledVector(o[4], 0.858086 * n * i),
					e.addScaledVector(o[5], 0.858086 * i * r),
					e.addScaledVector(o[6], 0.743125 * r * r - 0.247708),
					e.addScaledVector(o[7], 0.858086 * n * r),
					e.addScaledVector(o[8], 0.429043 * (n * n - i * i)),
					e
				);
			}
			add(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
				return this;
			}
			addScaledSH(t, e) {
				for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
				return this;
			}
			scale(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
				return this;
			}
			lerp(t, e) {
				for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
				return this;
			}
			equals(t) {
				for (let e = 0; e < 9; e++) if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
				return !0;
			}
			copy(t) {
				return this.set(t.coefficients);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			fromArray(t, e) {
				void 0 === e && (e = 0);
				const n = this.coefficients;
				for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
				return this;
			}
			toArray(t, e) {
				void 0 === t && (t = []), void 0 === e && (e = 0);
				const n = this.coefficients;
				for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
				return t;
			}
			static getBasisAt(t, e) {
				const n = t.x,
					i = t.y,
					r = t.z;
				(e[0] = 0.282095),
					(e[1] = 0.488603 * i),
					(e[2] = 0.488603 * r),
					(e[3] = 0.488603 * n),
					(e[4] = 1.092548 * n * i),
					(e[5] = 1.092548 * i * r),
					(e[6] = 0.315392 * (3 * r * r - 1)),
					(e[7] = 1.092548 * n * r),
					(e[8] = 0.546274 * (n * n - i * i));
			}
		}
		function ud(t, e) {
			Qu.call(this, void 0, e), (this.type = 'LightProbe'), (this.sh = void 0 !== t ? t : new hd());
		}
		function dd(t) {
			_u.call(this, t), (this.textures = {});
		}
		(ud.prototype = Object.assign(Object.create(Qu.prototype), {
			constructor: ud,
			isLightProbe: !0,
			copy: function (t) {
				return Qu.prototype.copy.call(this, t), this.sh.copy(t.sh), this;
			},
			fromJSON: function (t) {
				return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
			},
			toJSON: function (t) {
				const e = Qu.prototype.toJSON.call(this, t);
				return (e.object.sh = this.sh.toArray()), e;
			},
		})),
			(dd.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: dd,
				load: function (t, e, n, i) {
					const r = this,
						o = new wu(r.manager);
					o.setPath(r.path),
						o.setRequestHeader(r.requestHeader),
						o.load(
							t,
							function (n) {
								try {
									e(r.parse(JSON.parse(n)));
								} catch (e) {
									i ? i(e) : console.error(e), r.manager.itemError(t);
								}
							},
							n,
							i,
						);
				},
				parse: function (t) {
					const e = this.textures;
					function n(t) {
						return void 0 === e[t] && console.warn('THREE.MaterialLoader: Undefined texture', t), e[t];
					}
					const i = new eu[t.type]();
					if (
						(void 0 !== t.uuid && (i.uuid = t.uuid),
						void 0 !== t.name && (i.name = t.name),
						void 0 !== t.color && i.color.setHex(t.color),
						void 0 !== t.roughness && (i.roughness = t.roughness),
						void 0 !== t.metalness && (i.metalness = t.metalness),
						void 0 !== t.sheen && (i.sheen = new bo().setHex(t.sheen)),
						void 0 !== t.emissive && i.emissive.setHex(t.emissive),
						void 0 !== t.specular && i.specular.setHex(t.specular),
						void 0 !== t.shininess && (i.shininess = t.shininess),
						void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat),
						void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness),
						void 0 !== t.fog && (i.fog = t.fog),
						void 0 !== t.flatShading && (i.flatShading = t.flatShading),
						void 0 !== t.blending && (i.blending = t.blending),
						void 0 !== t.combine && (i.combine = t.combine),
						void 0 !== t.side && (i.side = t.side),
						void 0 !== t.opacity && (i.opacity = t.opacity),
						void 0 !== t.transparent && (i.transparent = t.transparent),
						void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest),
						void 0 !== t.depthTest && (i.depthTest = t.depthTest),
						void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite),
						void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite),
						void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite),
						void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask),
						void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc),
						void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef),
						void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask),
						void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail),
						void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail),
						void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass),
						void 0 !== t.wireframe && (i.wireframe = t.wireframe),
						void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth),
						void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap),
						void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin),
						void 0 !== t.rotation && (i.rotation = t.rotation),
						1 !== t.linewidth && (i.linewidth = t.linewidth),
						void 0 !== t.dashSize && (i.dashSize = t.dashSize),
						void 0 !== t.gapSize && (i.gapSize = t.gapSize),
						void 0 !== t.scale && (i.scale = t.scale),
						void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset),
						void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor),
						void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits),
						void 0 !== t.skinning && (i.skinning = t.skinning),
						void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets),
						void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals),
						void 0 !== t.dithering && (i.dithering = t.dithering),
						void 0 !== t.vertexTangents && (i.vertexTangents = t.vertexTangents),
						void 0 !== t.visible && (i.visible = t.visible),
						void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped),
						void 0 !== t.userData && (i.userData = t.userData),
						void 0 !== t.vertexColors && ('number' == typeof t.vertexColors ? (i.vertexColors = t.vertexColors > 0) : (i.vertexColors = t.vertexColors)),
						void 0 !== t.uniforms)
					)
						for (const e in t.uniforms) {
							const r = t.uniforms[e];
							switch (((i.uniforms[e] = {}), r.type)) {
								case 't':
									i.uniforms[e].value = n(r.value);
									break;
								case 'c':
									i.uniforms[e].value = new bo().setHex(r.value);
									break;
								case 'v2':
									i.uniforms[e].value = new Vi().fromArray(r.value);
									break;
								case 'v3':
									i.uniforms[e].value = new $i().fromArray(r.value);
									break;
								case 'v4':
									i.uniforms[e].value = new Zi().fromArray(r.value);
									break;
								case 'm3':
									i.uniforms[e].value = new ji().fromArray(r.value);
									break;
								case 'm4':
									i.uniforms[e].value = new Ar().fromArray(r.value);
									break;
								default:
									i.uniforms[e].value = r.value;
							}
						}
					if (
						(void 0 !== t.defines && (i.defines = t.defines),
						void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader),
						void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader),
						void 0 !== t.extensions)
					)
						for (const e in t.extensions) i.extensions[e] = t.extensions[e];
					if (
						(void 0 !== t.shading && (i.flatShading = 1 === t.shading),
						void 0 !== t.size && (i.size = t.size),
						void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation),
						void 0 !== t.map && (i.map = n(t.map)),
						void 0 !== t.matcap && (i.matcap = n(t.matcap)),
						void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)),
						void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)),
						void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale),
						void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)),
						void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType),
						void 0 !== t.normalScale)
					) {
						let e = t.normalScale;
						!1 === Array.isArray(e) && (e = [e, e]), (i.normalScale = new Vi().fromArray(e));
					}
					return (
						void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)),
						void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale),
						void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias),
						void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)),
						void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)),
						void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)),
						void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity),
						void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)),
						void 0 !== t.envMap && (i.envMap = n(t.envMap)),
						void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity),
						void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity),
						void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio),
						void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)),
						void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity),
						void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)),
						void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity),
						void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)),
						void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)),
						void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)),
						void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)),
						void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = new Vi().fromArray(t.clearcoatNormalScale)),
						void 0 !== t.transmission && (i.transmission = t.transmission),
						void 0 !== t.transmissionMap && (i.transmissionMap = n(t.transmissionMap)),
						i
					);
				},
				setTextures: function (t) {
					return (this.textures = t), this;
				},
			}));
		const pd = function (t) {
			const e = t.lastIndexOf('/');
			return -1 === e ? './' : t.substr(0, e + 1);
		};
		function fd() {
			Xo.call(this), (this.type = 'InstancedBufferGeometry'), (this.instanceCount = 1 / 0);
		}
		function md(t, e, n, i) {
			'number' == typeof n && ((i = n), (n = !1), console.error('THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.')),
				Lo.call(this, t, e, n),
				(this.meshPerAttribute = i || 1);
		}
		function gd(t) {
			_u.call(this, t);
		}
		(fd.prototype = Object.assign(Object.create(Xo.prototype), {
			constructor: fd,
			isInstancedBufferGeometry: !0,
			copy: function (t) {
				return Xo.prototype.copy.call(this, t), (this.instanceCount = t.instanceCount), this;
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			toJSON: function () {
				const t = Xo.prototype.toJSON.call(this);
				return (t.instanceCount = this.instanceCount), (t.isInstancedBufferGeometry = !0), t;
			},
		})),
			(md.prototype = Object.assign(Object.create(Lo.prototype), {
				constructor: md,
				isInstancedBufferAttribute: !0,
				copy: function (t) {
					return Lo.prototype.copy.call(this, t), (this.meshPerAttribute = t.meshPerAttribute), this;
				},
				toJSON: function () {
					const t = Lo.prototype.toJSON.call(this);
					return (t.meshPerAttribute = this.meshPerAttribute), (t.isInstancedBufferAttribute = !0), t;
				},
			})),
			(gd.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: gd,
				load: function (t, e, n, i) {
					const r = this,
						o = new wu(r.manager);
					o.setPath(r.path),
						o.setRequestHeader(r.requestHeader),
						o.load(
							t,
							function (n) {
								try {
									e(r.parse(JSON.parse(n)));
								} catch (e) {
									i ? i(e) : console.error(e), r.manager.itemError(t);
								}
							},
							n,
							i,
						);
				},
				parse: function (t) {
					const e = {},
						n = {};
					function i(t, i) {
						if (void 0 !== e[i]) return e[i];
						const r = t.interleavedBuffers[i],
							o = (function (t, e) {
								if (void 0 !== n[e]) return n[e];
								const i = t.arrayBuffers[e],
									r = new Uint32Array(i).buffer;
								return (n[e] = r), r;
							})(t, r.buffer),
							s = new jl(new vd[r.type](o), r.stride);
						return (s.uuid = r.uuid), (e[i] = s), s;
					}
					const r = t.isInstancedBufferGeometry ? new fd() : new Xo(),
						o = t.data.index;
					if (void 0 !== o) {
						const t = new vd[o.type](o.array);
						r.setIndex(new Lo(t, 1));
					}
					const s = t.data.attributes;
					for (const e in s) {
						const n = s[e];
						let o;
						if (n.isInterleavedBufferAttribute) {
							o = new ql(i(t.data, n.data), n.itemSize, n.offset, n.normalized);
						} else {
							const t = new vd[n.type](n.array);
							o = new (n.isInstancedBufferAttribute ? md : Lo)(t, n.itemSize, n.normalized);
						}
						void 0 !== n.name && (o.name = n.name), r.setAttribute(e, o);
					}
					const a = t.data.morphAttributes;
					if (a)
						for (const e in a) {
							const n = a[e],
								o = [];
							for (let e = 0, r = n.length; e < r; e++) {
								const r = n[e];
								let s;
								if (r.isInterleavedBufferAttribute) {
									s = new ql(i(t.data, r.data), r.itemSize, r.offset, r.normalized);
								} else {
									s = new Lo(new vd[r.type](r.array), r.itemSize, r.normalized);
								}
								void 0 !== r.name && (s.name = r.name), o.push(s);
							}
							r.morphAttributes[e] = o;
						}
					t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
					const l = t.data.groups || t.data.drawcalls || t.data.offsets;
					if (void 0 !== l)
						for (let t = 0, e = l.length; t !== e; ++t) {
							const e = l[t];
							r.addGroup(e.start, e.count, e.materialIndex);
						}
					const c = t.data.boundingSphere;
					if (void 0 !== c) {
						const t = new $i();
						void 0 !== c.center && t.fromArray(c.center), (r.boundingSphere = new yr(t, c.radius));
					}
					return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r;
				},
			}));
		const vd = {
			Int8Array: Int8Array,
			Uint8Array: Uint8Array,
			Uint8ClampedArray: 'undefined' != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
			Int16Array: Int16Array,
			Uint16Array: Uint16Array,
			Int32Array: Int32Array,
			Uint32Array: Uint32Array,
			Float32Array: Float32Array,
			Float64Array: Float64Array,
		};
		function yd(t) {
			_u.call(this, t);
		}
		yd.prototype = Object.assign(Object.create(_u.prototype), {
			constructor: yd,
			load: function (t, e, n, i) {
				const r = this,
					o = '' === this.path ? pd(t) : this.path;
				this.resourcePath = this.resourcePath || o;
				const s = new wu(r.manager);
				s.setPath(this.path),
					s.setRequestHeader(this.requestHeader),
					s.load(
						t,
						function (n) {
							let o = null;
							try {
								o = JSON.parse(n);
							} catch (e) {
								return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + '.', e.message);
							}
							const s = o.metadata;
							void 0 !== s && void 0 !== s.type && 'geometry' !== s.type.toLowerCase() ? r.parse(o, e) : console.error("THREE.ObjectLoader: Can't load " + t);
						},
						n,
						i,
					);
			},
			parse: function (t, e) {
				const n = this.parseShape(t.shapes),
					i = this.parseGeometries(t.geometries, n),
					r = this.parseImages(t.images, function () {
						void 0 !== e && e(a);
					}),
					o = this.parseTextures(t.textures, r),
					s = this.parseMaterials(t.materials, o),
					a = this.parseObject(t.object, i, s);
				return t.animations && (a.animations = this.parseAnimations(t.animations)), (void 0 !== t.images && 0 !== t.images.length) || (void 0 !== e && e(a)), a;
			},
			parseShape: function (t) {
				const e = {};
				if (void 0 !== t)
					for (let n = 0, i = t.length; n < i; n++) {
						const i = new Ku().fromJSON(t[n]);
						e[i.uuid] = i;
					}
				return e;
			},
			parseGeometries: function (t, e) {
				const n = {};
				let i;
				if (void 0 !== t) {
					const r = new gd();
					for (let o = 0, s = t.length; o < s; o++) {
						let s;
						const a = t[o];
						switch (a.type) {
							case 'PlaneGeometry':
							case 'PlaneBufferGeometry':
								s = new jh[a.type](a.width, a.height, a.widthSegments, a.heightSegments);
								break;
							case 'BoxGeometry':
							case 'BoxBufferGeometry':
							case 'CubeGeometry':
								s = new jh[a.type](a.width, a.height, a.depth, a.widthSegments, a.heightSegments, a.depthSegments);
								break;
							case 'CircleGeometry':
							case 'CircleBufferGeometry':
								s = new jh[a.type](a.radius, a.segments, a.thetaStart, a.thetaLength);
								break;
							case 'CylinderGeometry':
							case 'CylinderBufferGeometry':
								s = new jh[a.type](a.radiusTop, a.radiusBottom, a.height, a.radialSegments, a.heightSegments, a.openEnded, a.thetaStart, a.thetaLength);
								break;
							case 'ConeGeometry':
							case 'ConeBufferGeometry':
								s = new jh[a.type](a.radius, a.height, a.radialSegments, a.heightSegments, a.openEnded, a.thetaStart, a.thetaLength);
								break;
							case 'SphereGeometry':
							case 'SphereBufferGeometry':
								s = new jh[a.type](a.radius, a.widthSegments, a.heightSegments, a.phiStart, a.phiLength, a.thetaStart, a.thetaLength);
								break;
							case 'DodecahedronGeometry':
							case 'DodecahedronBufferGeometry':
							case 'IcosahedronGeometry':
							case 'IcosahedronBufferGeometry':
							case 'OctahedronGeometry':
							case 'OctahedronBufferGeometry':
							case 'TetrahedronGeometry':
							case 'TetrahedronBufferGeometry':
								s = new jh[a.type](a.radius, a.detail);
								break;
							case 'RingGeometry':
							case 'RingBufferGeometry':
								s = new jh[a.type](a.innerRadius, a.outerRadius, a.thetaSegments, a.phiSegments, a.thetaStart, a.thetaLength);
								break;
							case 'TorusGeometry':
							case 'TorusBufferGeometry':
								s = new jh[a.type](a.radius, a.tube, a.radialSegments, a.tubularSegments, a.arc);
								break;
							case 'TorusKnotGeometry':
							case 'TorusKnotBufferGeometry':
								s = new jh[a.type](a.radius, a.tube, a.tubularSegments, a.radialSegments, a.p, a.q);
								break;
							case 'TubeGeometry':
							case 'TubeBufferGeometry':
								s = new jh[a.type](new Yu[a.path.type]().fromJSON(a.path), a.tubularSegments, a.radius, a.radialSegments, a.closed);
								break;
							case 'LatheGeometry':
							case 'LatheBufferGeometry':
								s = new jh[a.type](a.points, a.segments, a.phiStart, a.phiLength);
								break;
							case 'PolyhedronGeometry':
							case 'PolyhedronBufferGeometry':
								s = new jh[a.type](a.vertices, a.indices, a.radius, a.details);
								break;
							case 'ShapeGeometry':
							case 'ShapeBufferGeometry':
								i = [];
								for (let t = 0, n = a.shapes.length; t < n; t++) {
									const n = e[a.shapes[t]];
									i.push(n);
								}
								s = new jh[a.type](i, a.curveSegments);
								break;
							case 'ExtrudeGeometry':
							case 'ExtrudeBufferGeometry':
								i = [];
								for (let t = 0, n = a.shapes.length; t < n; t++) {
									const n = e[a.shapes[t]];
									i.push(n);
								}
								const t = a.options.extrudePath;
								void 0 !== t && (a.options.extrudePath = new Yu[t.type]().fromJSON(t)), (s = new jh[a.type](i, a.options));
								break;
							case 'BufferGeometry':
							case 'InstancedBufferGeometry':
								s = r.parse(a);
								break;
							case 'Geometry':
								console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
								break;
							default:
								console.warn('THREE.ObjectLoader: Unsupported geometry type "' + a.type + '"');
								continue;
						}
						(s.uuid = a.uuid), void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), (n[a.uuid] = s);
					}
				}
				return n;
			},
			parseMaterials: function (t, e) {
				const n = {},
					i = {};
				if (void 0 !== t) {
					const r = new dd();
					r.setTextures(e);
					for (let e = 0, o = t.length; e < o; e++) {
						const o = t[e];
						if ('MultiMaterial' === o.type) {
							const t = [];
							for (let e = 0; e < o.materials.length; e++) {
								const i = o.materials[e];
								void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)), t.push(n[i.uuid]);
							}
							i[o.uuid] = t;
						} else void 0 === n[o.uuid] && (n[o.uuid] = r.parse(o)), (i[o.uuid] = n[o.uuid]);
					}
				}
				return i;
			},
			parseAnimations: function (t) {
				const e = [];
				for (let n = 0; n < t.length; n++) {
					const i = t[n],
						r = mu.parse(i);
					void 0 !== i.uuid && (r.uuid = i.uuid), e.push(r);
				}
				return e;
			},
			parseImages: function (t, e) {
				const n = this,
					i = {};
				let r;
				function o(t) {
					return (
						n.manager.itemStart(t),
						r.load(
							t,
							function () {
								n.manager.itemEnd(t);
							},
							void 0,
							function () {
								n.manager.itemError(t), n.manager.itemEnd(t);
							},
						)
					);
				}
				if (void 0 !== t && t.length > 0) {
					const s = new yu(e);
					(r = new Tu(s)), r.setCrossOrigin(this.crossOrigin);
					for (let e = 0, r = t.length; e < r; e++) {
						const r = t[e],
							s = r.url;
						if (Array.isArray(s)) {
							i[r.uuid] = [];
							for (let t = 0, e = s.length; t < e; t++) {
								const e = s[t],
									a = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e;
								i[r.uuid].push(o(a));
							}
						} else {
							const t = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(r.url) ? r.url : n.resourcePath + r.url;
							i[r.uuid] = o(t);
						}
					}
				}
				return i;
			},
			parseTextures: function (t, e) {
				function n(t, e) {
					return 'number' == typeof t ? t : (console.warn('THREE.ObjectLoader.parseTexture: Constant should be in numeric form.', t), e[t]);
				}
				const i = {};
				if (void 0 !== t)
					for (let r = 0, o = t.length; r < o; r++) {
						const o = t[r];
						let s;
						void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid),
							void 0 === e[o.image] && console.warn('THREE.ObjectLoader: Undefined image', o.image),
							(s = Array.isArray(e[o.image]) ? new Qs(e[o.image]) : new Yi(e[o.image])),
							(s.needsUpdate = !0),
							(s.uuid = o.uuid),
							void 0 !== o.name && (s.name = o.name),
							void 0 !== o.mapping && (s.mapping = n(o.mapping, xd)),
							void 0 !== o.offset && s.offset.fromArray(o.offset),
							void 0 !== o.repeat && s.repeat.fromArray(o.repeat),
							void 0 !== o.center && s.center.fromArray(o.center),
							void 0 !== o.rotation && (s.rotation = o.rotation),
							void 0 !== o.wrap && ((s.wrapS = n(o.wrap[0], _d)), (s.wrapT = n(o.wrap[1], _d))),
							void 0 !== o.format && (s.format = o.format),
							void 0 !== o.type && (s.type = o.type),
							void 0 !== o.encoding && (s.encoding = o.encoding),
							void 0 !== o.minFilter && (s.minFilter = n(o.minFilter, bd)),
							void 0 !== o.magFilter && (s.magFilter = n(o.magFilter, bd)),
							void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy),
							void 0 !== o.flipY && (s.flipY = o.flipY),
							void 0 !== o.premultiplyAlpha && (s.premultiplyAlpha = o.premultiplyAlpha),
							void 0 !== o.unpackAlignment && (s.unpackAlignment = o.unpackAlignment),
							(i[o.uuid] = s);
					}
				return i;
			},
			parseObject: function (t, e, n) {
				let i, r, o;
				function s(t) {
					return void 0 === e[t] && console.warn('THREE.ObjectLoader: Undefined geometry', t), e[t];
				}
				function a(t) {
					if (void 0 !== t) {
						if (Array.isArray(t)) {
							const e = [];
							for (let i = 0, r = t.length; i < r; i++) {
								const r = t[i];
								void 0 === n[r] && console.warn('THREE.ObjectLoader: Undefined material', r), e.push(n[r]);
							}
							return e;
						}
						return void 0 === n[t] && console.warn('THREE.ObjectLoader: Undefined material', t), n[t];
					}
				}
				switch (t.type) {
					case 'Scene':
						(i = new Vl()),
							void 0 !== t.background && Number.isInteger(t.background) && (i.background = new bo(t.background)),
							void 0 !== t.fog && ('Fog' === t.fog.type ? (i.fog = new Gl(t.fog.color, t.fog.near, t.fog.far)) : 'FogExp2' === t.fog.type && (i.fog = new Hl(t.fog.color, t.fog.density)));
						break;
					case 'PerspectiveCamera':
						(i = new Ts(t.fov, t.aspect, t.near, t.far)),
							void 0 !== t.focus && (i.focus = t.focus),
							void 0 !== t.zoom && (i.zoom = t.zoom),
							void 0 !== t.filmGauge && (i.filmGauge = t.filmGauge),
							void 0 !== t.filmOffset && (i.filmOffset = t.filmOffset),
							void 0 !== t.view && (i.view = Object.assign({}, t.view));
						break;
					case 'OrthographicCamera':
						(i = new od(t.left, t.right, t.top, t.bottom, t.near, t.far)), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.view && (i.view = Object.assign({}, t.view));
						break;
					case 'AmbientLight':
						i = new ld(t.color, t.intensity);
						break;
					case 'DirectionalLight':
						i = new ad(t.color, t.intensity);
						break;
					case 'PointLight':
						i = new rd(t.color, t.intensity, t.distance, t.decay);
						break;
					case 'RectAreaLight':
						i = new cd(t.color, t.intensity, t.width, t.height);
						break;
					case 'SpotLight':
						i = new nd(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
						break;
					case 'HemisphereLight':
						i = new $u(t.color, t.groundColor, t.intensity);
						break;
					case 'LightProbe':
						i = new ud().fromJSON(t);
						break;
					case 'SkinnedMesh':
						console.warn('THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.');
					case 'Mesh':
						(r = s(t.geometry)), (o = a(t.material)), (i = new us(r, o));
						break;
					case 'InstancedMesh':
						(r = s(t.geometry)), (o = a(t.material));
						const e = t.count,
							n = t.instanceMatrix;
						(i = new bc(r, o, e)), (i.instanceMatrix = new Lo(new Float32Array(n.array), 16));
						break;
					case 'LOD':
						i = new uc();
						break;
					case 'Line':
						i = new Lc(s(t.geometry), a(t.material), t.mode);
						break;
					case 'LineLoop':
						i = new Oc(s(t.geometry), a(t.material));
						break;
					case 'LineSegments':
						i = new Cc(s(t.geometry), a(t.material));
						break;
					case 'PointCloud':
					case 'Points':
						i = new kc(s(t.geometry), a(t.material));
						break;
					case 'Sprite':
						i = new ac(a(t.material));
						break;
					case 'Group':
						i = new Nl();
						break;
					default:
						i = new Qr();
				}
				if (
					((i.uuid = t.uuid),
					void 0 !== t.name && (i.name = t.name),
					void 0 !== t.matrix
						? (i.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (i.matrixAutoUpdate = t.matrixAutoUpdate), i.matrixAutoUpdate && i.matrix.decompose(i.position, i.quaternion, i.scale))
						: (void 0 !== t.position && i.position.fromArray(t.position),
						  void 0 !== t.rotation && i.rotation.fromArray(t.rotation),
						  void 0 !== t.quaternion && i.quaternion.fromArray(t.quaternion),
						  void 0 !== t.scale && i.scale.fromArray(t.scale)),
					void 0 !== t.castShadow && (i.castShadow = t.castShadow),
					void 0 !== t.receiveShadow && (i.receiveShadow = t.receiveShadow),
					t.shadow &&
						(void 0 !== t.shadow.bias && (i.shadow.bias = t.shadow.bias),
						void 0 !== t.shadow.normalBias && (i.shadow.normalBias = t.shadow.normalBias),
						void 0 !== t.shadow.radius && (i.shadow.radius = t.shadow.radius),
						void 0 !== t.shadow.mapSize && i.shadow.mapSize.fromArray(t.shadow.mapSize),
						void 0 !== t.shadow.camera && (i.shadow.camera = this.parseObject(t.shadow.camera))),
					void 0 !== t.visible && (i.visible = t.visible),
					void 0 !== t.frustumCulled && (i.frustumCulled = t.frustumCulled),
					void 0 !== t.renderOrder && (i.renderOrder = t.renderOrder),
					void 0 !== t.userData && (i.userData = t.userData),
					void 0 !== t.layers && (i.layers.mask = t.layers),
					void 0 !== t.children)
				) {
					const r = t.children;
					for (let t = 0; t < r.length; t++) i.add(this.parseObject(r[t], e, n));
				}
				if ('LOD' === t.type) {
					void 0 !== t.autoUpdate && (i.autoUpdate = t.autoUpdate);
					const e = t.levels;
					for (let t = 0; t < e.length; t++) {
						const n = e[t],
							r = i.getObjectByProperty('uuid', n.object);
						void 0 !== r && i.addLevel(r, n.distance);
					}
				}
				return i;
			},
		});
		const xd = {
				UVMapping: 300,
				CubeReflectionMapping: 301,
				CubeRefractionMapping: 302,
				EquirectangularReflectionMapping: 303,
				EquirectangularRefractionMapping: 304,
				CubeUVReflectionMapping: 306,
				CubeUVRefractionMapping: 307,
			},
			_d = {
				RepeatWrapping: 1e3,
				ClampToEdgeWrapping: 1001,
				MirroredRepeatWrapping: 1002,
			},
			bd = {
				NearestFilter: 1003,
				NearestMipmapNearestFilter: 1004,
				NearestMipmapLinearFilter: 1005,
				LinearFilter: 1006,
				LinearMipmapNearestFilter: 1007,
				LinearMipmapLinearFilter: 1008,
			};
		function wd(t) {
			'undefined' == typeof createImageBitmap && console.warn('THREE.ImageBitmapLoader: createImageBitmap() not supported.'),
				'undefined' == typeof fetch && console.warn('THREE.ImageBitmapLoader: fetch() not supported.'),
				_u.call(this, t),
				(this.options = {
					premultiplyAlpha: 'none',
				});
		}
		function Md() {
			(this.type = 'ShapePath'), (this.color = new bo()), (this.subPaths = []), (this.currentPath = null);
		}
		function Sd(t) {
			(this.type = 'Font'), (this.data = t);
		}
		function Td(t, e, n, i, r) {
			const o = r.glyphs[t] || r.glyphs['?'];
			if (!o) return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + '.');
			const s = new Md();
			let a, l, c, h, u, d, p, f;
			if (o.o) {
				const t = o._cachedOutline || (o._cachedOutline = o.o.split(' '));
				for (let r = 0, o = t.length; r < o; ) {
					switch (t[r++]) {
						case 'm':
							(a = t[r++] * e + n), (l = t[r++] * e + i), s.moveTo(a, l);
							break;
						case 'l':
							(a = t[r++] * e + n), (l = t[r++] * e + i), s.lineTo(a, l);
							break;
						case 'q':
							(c = t[r++] * e + n), (h = t[r++] * e + i), (u = t[r++] * e + n), (d = t[r++] * e + i), s.quadraticCurveTo(u, d, c, h);
							break;
						case 'b':
							(c = t[r++] * e + n), (h = t[r++] * e + i), (u = t[r++] * e + n), (d = t[r++] * e + i), (p = t[r++] * e + n), (f = t[r++] * e + i), s.bezierCurveTo(u, d, p, f, c, h);
					}
				}
			}
			return {
				offsetX: o.ha * e,
				path: s,
			};
		}
		function Ed(t) {
			_u.call(this, t);
		}
		let Ad;
		(wd.prototype = Object.assign(Object.create(_u.prototype), {
			constructor: wd,
			isImageBitmapLoader: !0,
			setOptions: function (t) {
				return (this.options = t), this;
			},
			load: function (t, e, n, i) {
				void 0 === t && (t = ''), void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
				const r = this,
					o = vu.get(t);
				if (void 0 !== o)
					return (
						r.manager.itemStart(t),
						setTimeout(function () {
							e && e(o), r.manager.itemEnd(t);
						}, 0),
						o
					);
				fetch(t)
					.then(function (t) {
						return t.blob();
					})
					.then(function (t) {
						return createImageBitmap(t, r.options);
					})
					.then(function (n) {
						vu.add(t, n), e && e(n), r.manager.itemEnd(t);
					})
					.catch(function (e) {
						i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
					}),
					r.manager.itemStart(t);
			},
		})),
			Object.assign(Md.prototype, {
				moveTo: function (t, e) {
					return (this.currentPath = new Ju()), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
				},
				lineTo: function (t, e) {
					return this.currentPath.lineTo(t, e), this;
				},
				quadraticCurveTo: function (t, e, n, i) {
					return this.currentPath.quadraticCurveTo(t, e, n, i), this;
				},
				bezierCurveTo: function (t, e, n, i, r, o) {
					return this.currentPath.bezierCurveTo(t, e, n, i, r, o), this;
				},
				splineThru: function (t) {
					return this.currentPath.splineThru(t), this;
				},
				toShapes: function (t, e) {
					function n(t) {
						const e = [];
						for (let n = 0, i = t.length; n < i; n++) {
							const i = t[n],
								r = new Ku();
							(r.curves = i.curves), e.push(r);
						}
						return e;
					}
					function i(t, e) {
						const n = e.length;
						let i = !1;
						for (let r = n - 1, o = 0; o < n; r = o++) {
							let n = e[r],
								s = e[o],
								a = s.x - n.x,
								l = s.y - n.y;
							if (Math.abs(l) > Number.EPSILON) {
								if ((l < 0 && ((n = e[o]), (a = -a), (s = e[r]), (l = -l)), t.y < n.y || t.y > s.y)) continue;
								if (t.y === n.y) {
									if (t.x === n.x) return !0;
								} else {
									const e = l * (t.x - n.x) - a * (t.y - n.y);
									if (0 === e) return !0;
									if (e < 0) continue;
									i = !i;
								}
							} else {
								if (t.y !== n.y) continue;
								if ((s.x <= t.x && t.x <= n.x) || (n.x <= t.x && t.x <= s.x)) return !0;
							}
						}
						return i;
					}
					const r = Eh.isClockWise,
						o = this.subPaths;
					if (0 === o.length) return [];
					if (!0 === e) return n(o);
					let s, a, l;
					const c = [];
					if (1 === o.length) return (a = o[0]), (l = new Ku()), (l.curves = a.curves), c.push(l), c;
					let h = !r(o[0].getPoints());
					h = t ? !h : h;
					const u = [],
						d = [];
					let p,
						f,
						m = [],
						g = 0;
					(d[g] = void 0), (m[g] = []);
					for (let e = 0, n = o.length; e < n; e++)
						(a = o[e]),
							(p = a.getPoints()),
							(s = r(p)),
							(s = t ? !s : s),
							s
								? (!h && d[g] && g++,
								  (d[g] = {
										s: new Ku(),
										p: p,
								  }),
								  (d[g].s.curves = a.curves),
								  h && g++,
								  (m[g] = []))
								: m[g].push({
										h: a,
										p: p[0],
								  });
					if (!d[0]) return n(o);
					if (d.length > 1) {
						let t = !1;
						const e = [];
						for (let t = 0, e = d.length; t < e; t++) u[t] = [];
						for (let n = 0, r = d.length; n < r; n++) {
							const r = m[n];
							for (let o = 0; o < r.length; o++) {
								const s = r[o];
								let a = !0;
								for (let r = 0; r < d.length; r++)
									i(s.p, d[r].p) &&
										(n !== r &&
											e.push({
												froms: n,
												tos: r,
												hole: o,
											}),
										a ? ((a = !1), u[r].push(s)) : (t = !0));
								a && u[n].push(s);
							}
						}
						e.length > 0 && (t || (m = u));
					}
					for (let t = 0, e = d.length; t < e; t++) {
						(l = d[t].s), c.push(l), (f = m[t]);
						for (let t = 0, e = f.length; t < e; t++) l.holes.push(f[t].h);
					}
					return c;
				},
			}),
			Object.assign(Sd.prototype, {
				isFont: !0,
				generateShapes: function (t, e) {
					void 0 === e && (e = 100);
					const n = [],
						i = (function (t, e, n) {
							const i = Array.from ? Array.from(t) : String(t).split(''),
								r = e / n.resolution,
								o = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r,
								s = [];
							let a = 0,
								l = 0;
							for (let t = 0; t < i.length; t++) {
								const e = i[t];
								if ('\n' === e) (a = 0), (l -= o);
								else {
									const t = Td(e, r, a, l, n);
									(a += t.offsetX), s.push(t.path);
								}
							}
							return s;
						})(t, e, this.data);
					for (let t = 0, e = i.length; t < e; t++) Array.prototype.push.apply(n, i[t].toShapes());
					return n;
				},
			}),
			(Ed.prototype = Object.assign(Object.create(_u.prototype), {
				constructor: Ed,
				load: function (t, e, n, i) {
					const r = this,
						o = new wu(this.manager);
					o.setPath(this.path),
						o.setRequestHeader(this.requestHeader),
						o.load(
							t,
							function (t) {
								let n;
								try {
									n = JSON.parse(t);
								} catch (e) {
									console.warn('THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.'), (n = JSON.parse(t.substring(65, t.length - 2)));
								}
								const i = r.parse(n);
								e && e(i);
							},
							n,
							i,
						);
				},
				parse: function (t) {
					return new Sd(t);
				},
			}));
		const Ld = function () {
			return void 0 === Ad && (Ad = new (window.AudioContext || window.webkitAudioContext)()), Ad;
		};
		function Rd(t) {
			_u.call(this, t);
		}
		function Pd(t, e, n) {
			ud.call(this, void 0, n);
			const i = new bo().set(t),
				r = new bo().set(e),
				o = new $i(i.r, i.g, i.b),
				s = new $i(r.r, r.g, r.b),
				a = Math.sqrt(Math.PI),
				l = a * Math.sqrt(0.75);
			this.sh.coefficients[0].copy(o).add(s).multiplyScalar(a), this.sh.coefficients[1].copy(o).sub(s).multiplyScalar(l);
		}
		function Cd(t, e) {
			ud.call(this, void 0, e);
			const n = new bo().set(t);
			this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
		}
		(Rd.prototype = Object.assign(Object.create(_u.prototype), {
			constructor: Rd,
			load: function (t, e, n, i) {
				const r = this,
					o = new wu(r.manager);
				o.setResponseType('arraybuffer'),
					o.setPath(r.path),
					o.setRequestHeader(r.requestHeader),
					o.load(
						t,
						function (n) {
							try {
								const t = n.slice(0);
								Ld().decodeAudioData(t, function (t) {
									e(t);
								});
							} catch (e) {
								i ? i(e) : console.error(e), r.manager.itemError(t);
							}
						},
						n,
						i,
					);
			},
		})),
			(Pd.prototype = Object.assign(Object.create(ud.prototype), {
				constructor: Pd,
				isHemisphereLightProbe: !0,
				copy: function (t) {
					return ud.prototype.copy.call(this, t), this;
				},
				toJSON: function (t) {
					return ud.prototype.toJSON.call(this, t);
				},
			})),
			(Cd.prototype = Object.assign(Object.create(ud.prototype), {
				constructor: Cd,
				isAmbientLightProbe: !0,
				copy: function (t) {
					return ud.prototype.copy.call(this, t), this;
				},
				toJSON: function (t) {
					return ud.prototype.toJSON.call(this, t);
				},
			}));
		const Od = new Ar(),
			Dd = new Ar();
		Object.assign(
			function () {
				(this.type = 'StereoCamera'),
					(this.aspect = 1),
					(this.eyeSep = 0.064),
					(this.cameraL = new Ts()),
					this.cameraL.layers.enable(1),
					(this.cameraL.matrixAutoUpdate = !1),
					(this.cameraR = new Ts()),
					this.cameraR.layers.enable(2),
					(this.cameraR.matrixAutoUpdate = !1),
					(this._cache = {
						focus: null,
						fov: null,
						aspect: null,
						near: null,
						far: null,
						zoom: null,
						eyeSep: null,
					});
			}.prototype,
			{
				update: function (t) {
					const e = this._cache;
					if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
						(e.focus = t.focus), (e.fov = t.fov), (e.aspect = t.aspect * this.aspect), (e.near = t.near), (e.far = t.far), (e.zoom = t.zoom), (e.eyeSep = this.eyeSep);
						const n = t.projectionMatrix.clone(),
							i = e.eyeSep / 2,
							r = (i * e.near) / e.focus,
							o = (e.near * Math.tan(Gi.DEG2RAD * e.fov * 0.5)) / e.zoom;
						let s, a;
						(Dd.elements[12] = -i),
							(Od.elements[12] = i),
							(s = -o * e.aspect + r),
							(a = o * e.aspect + r),
							(n.elements[0] = (2 * e.near) / (a - s)),
							(n.elements[8] = (a + s) / (a - s)),
							this.cameraL.projectionMatrix.copy(n),
							(s = -o * e.aspect - r),
							(a = o * e.aspect - r),
							(n.elements[0] = (2 * e.near) / (a - s)),
							(n.elements[8] = (a + s) / (a - s)),
							this.cameraR.projectionMatrix.copy(n);
					}
					this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Dd), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Od);
				},
			},
		);
		class Id {
			constructor(t) {
				(this.autoStart = void 0 === t || t), (this.startTime = 0), (this.oldTime = 0), (this.elapsedTime = 0), (this.running = !1);
			}
			start() {
				(this.startTime = ('undefined' == typeof performance ? Date : performance).now()), (this.oldTime = this.startTime), (this.elapsedTime = 0), (this.running = !0);
			}
			stop() {
				this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
			}
			getElapsedTime() {
				return this.getDelta(), this.elapsedTime;
			}
			getDelta() {
				let t = 0;
				if (this.autoStart && !this.running) return this.start(), 0;
				if (this.running) {
					const e = ('undefined' == typeof performance ? Date : performance).now();
					(t = (e - this.oldTime) / 1e3), (this.oldTime = e), (this.elapsedTime += t);
				}
				return t;
			}
		}
		const Nd = new $i(),
			zd = new Qi(),
			Bd = new $i(),
			kd = new $i();
		class Fd extends Qr {
			constructor() {
				super(),
					(this.type = 'AudioListener'),
					(this.context = Ld()),
					(this.gain = this.context.createGain()),
					this.gain.connect(this.context.destination),
					(this.filter = null),
					(this.timeDelta = 0),
					(this._clock = new Id());
			}
			getInput() {
				return this.gain;
			}
			removeFilter() {
				return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), (this.filter = null)), this;
			}
			getFilter() {
				return this.filter;
			}
			setFilter(t) {
				return (
					null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
					(this.filter = t),
					this.gain.connect(this.filter),
					this.filter.connect(this.context.destination),
					this
				);
			}
			getMasterVolume() {
				return this.gain.gain.value;
			}
			setMasterVolume(t) {
				return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
			}
			updateMatrixWorld(t) {
				super.updateMatrixWorld(t);
				const e = this.context.listener,
					n = this.up;
				if (((this.timeDelta = this._clock.getDelta()), this.matrixWorld.decompose(Nd, zd, Bd), kd.set(0, 0, -1).applyQuaternion(zd), e.positionX)) {
					const t = this.context.currentTime + this.timeDelta;
					e.positionX.linearRampToValueAtTime(Nd.x, t),
						e.positionY.linearRampToValueAtTime(Nd.y, t),
						e.positionZ.linearRampToValueAtTime(Nd.z, t),
						e.forwardX.linearRampToValueAtTime(kd.x, t),
						e.forwardY.linearRampToValueAtTime(kd.y, t),
						e.forwardZ.linearRampToValueAtTime(kd.z, t),
						e.upX.linearRampToValueAtTime(n.x, t),
						e.upY.linearRampToValueAtTime(n.y, t),
						e.upZ.linearRampToValueAtTime(n.z, t);
				} else e.setPosition(Nd.x, Nd.y, Nd.z), e.setOrientation(kd.x, kd.y, kd.z, n.x, n.y, n.z);
			}
		}
		class Ud extends Qr {
			constructor(t) {
				super(),
					(this.type = 'Audio'),
					(this.listener = t),
					(this.context = t.context),
					(this.gain = this.context.createGain()),
					this.gain.connect(t.getInput()),
					(this.autoplay = !1),
					(this.buffer = null),
					(this.detune = 0),
					(this.loop = !1),
					(this.loopStart = 0),
					(this.loopEnd = 0),
					(this.offset = 0),
					(this.duration = void 0),
					(this.playbackRate = 1),
					(this.isPlaying = !1),
					(this.hasPlaybackControl = !0),
					(this.source = null),
					(this.sourceType = 'empty'),
					(this._startedAt = 0),
					(this._progress = 0),
					(this._connected = !1),
					(this.filters = []);
			}
			getOutput() {
				return this.gain;
			}
			setNodeSource(t) {
				return (this.hasPlaybackControl = !1), (this.sourceType = 'audioNode'), (this.source = t), this.connect(), this;
			}
			setMediaElementSource(t) {
				return (this.hasPlaybackControl = !1), (this.sourceType = 'mediaNode'), (this.source = this.context.createMediaElementSource(t)), this.connect(), this;
			}
			setMediaStreamSource(t) {
				return (this.hasPlaybackControl = !1), (this.sourceType = 'mediaStreamNode'), (this.source = this.context.createMediaStreamSource(t)), this.connect(), this;
			}
			setBuffer(t) {
				return (this.buffer = t), (this.sourceType = 'buffer'), this.autoplay && this.play(), this;
			}
			play(t) {
				if ((void 0 === t && (t = 0), !0 === this.isPlaying)) return void console.warn('THREE.Audio: Audio is already playing.');
				if (!1 === this.hasPlaybackControl) return void console.warn('THREE.Audio: this Audio has no playback control.');
				this._startedAt = this.context.currentTime + t;
				const e = this.context.createBufferSource();
				return (
					(e.buffer = this.buffer),
					(e.loop = this.loop),
					(e.loopStart = this.loopStart),
					(e.loopEnd = this.loopEnd),
					(e.onended = this.onEnded.bind(this)),
					e.start(this._startedAt, this._progress + this.offset, this.duration),
					(this.isPlaying = !0),
					(this.source = e),
					this.setDetune(this.detune),
					this.setPlaybackRate(this.playbackRate),
					this.connect()
				);
			}
			pause() {
				if (!1 !== this.hasPlaybackControl)
					return (
						!0 === this.isPlaying &&
							((this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate),
							!0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)),
							this.source.stop(),
							(this.source.onended = null),
							(this.isPlaying = !1)),
						this
					);
				console.warn('THREE.Audio: this Audio has no playback control.');
			}
			stop() {
				if (!1 !== this.hasPlaybackControl) return (this._progress = 0), this.source.stop(), (this.source.onended = null), (this.isPlaying = !1), this;
				console.warn('THREE.Audio: this Audio has no playback control.');
			}
			connect() {
				if (this.filters.length > 0) {
					this.source.connect(this.filters[0]);
					for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
					this.filters[this.filters.length - 1].connect(this.getOutput());
				} else this.source.connect(this.getOutput());
				return (this._connected = !0), this;
			}
			disconnect() {
				if (this.filters.length > 0) {
					this.source.disconnect(this.filters[0]);
					for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
					this.filters[this.filters.length - 1].disconnect(this.getOutput());
				} else this.source.disconnect(this.getOutput());
				return (this._connected = !1), this;
			}
			getFilters() {
				return this.filters;
			}
			setFilters(t) {
				return t || (t = []), !0 === this._connected ? (this.disconnect(), (this.filters = t), this.connect()) : (this.filters = t), this;
			}
			setDetune(t) {
				if (((this.detune = t), void 0 !== this.source.detune)) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
			}
			getDetune() {
				return this.detune;
			}
			getFilter() {
				return this.getFilters()[0];
			}
			setFilter(t) {
				return this.setFilters(t ? [t] : []);
			}
			setPlaybackRate(t) {
				if (!1 !== this.hasPlaybackControl) return (this.playbackRate = t), !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
				console.warn('THREE.Audio: this Audio has no playback control.');
			}
			getPlaybackRate() {
				return this.playbackRate;
			}
			onEnded() {
				this.isPlaying = !1;
			}
			getLoop() {
				return !1 === this.hasPlaybackControl ? (console.warn('THREE.Audio: this Audio has no playback control.'), !1) : this.loop;
			}
			setLoop(t) {
				if (!1 !== this.hasPlaybackControl) return (this.loop = t), !0 === this.isPlaying && (this.source.loop = this.loop), this;
				console.warn('THREE.Audio: this Audio has no playback control.');
			}
			setLoopStart(t) {
				return (this.loopStart = t), this;
			}
			setLoopEnd(t) {
				return (this.loopEnd = t), this;
			}
			getVolume() {
				return this.gain.gain.value;
			}
			setVolume(t) {
				return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
			}
		}
		new $i(), new Qi(), new $i(), new $i();
		function Hd(t, e, n) {
			let i, r, o;
			switch (((this.binding = t), (this.valueSize = n), e)) {
				case 'quaternion':
					(i = this._slerp), (r = this._slerpAdditive), (o = this._setAdditiveIdentityQuaternion), (this.buffer = new Float64Array(6 * n)), (this._workIndex = 5);
					break;
				case 'string':
				case 'bool':
					(i = this._select), (r = this._select), (o = this._setAdditiveIdentityOther), (this.buffer = new Array(5 * n));
					break;
				default:
					(i = this._lerp), (r = this._lerpAdditive), (o = this._setAdditiveIdentityNumeric), (this.buffer = new Float64Array(5 * n));
			}
			(this._mixBufferRegion = i),
				(this._mixBufferRegionAdditive = r),
				(this._setIdentity = o),
				(this._origIndex = 3),
				(this._addIndex = 4),
				(this.cumulativeWeight = 0),
				(this.cumulativeWeightAdditive = 0),
				(this.useCount = 0),
				(this.referenceCount = 0);
		}
		Object.assign(Hd.prototype, {
			accumulate: function (t, e) {
				const n = this.buffer,
					i = this.valueSize,
					r = t * i + i;
				let o = this.cumulativeWeight;
				if (0 === o) {
					for (let t = 0; t !== i; ++t) n[r + t] = n[t];
					o = e;
				} else {
					o += e;
					const t = e / o;
					this._mixBufferRegion(n, r, 0, t, i);
				}
				this.cumulativeWeight = o;
			},
			accumulateAdditive: function (t) {
				const e = this.buffer,
					n = this.valueSize,
					i = n * this._addIndex;
				0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), (this.cumulativeWeightAdditive += t);
			},
			apply: function (t) {
				const e = this.valueSize,
					n = this.buffer,
					i = t * e + e,
					r = this.cumulativeWeight,
					o = this.cumulativeWeightAdditive,
					s = this.binding;
				if (((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), r < 1)) {
					const t = e * this._origIndex;
					this._mixBufferRegion(n, i, t, 1 - r, e);
				}
				o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
				for (let t = e, r = e + e; t !== r; ++t)
					if (n[t] !== n[t + e]) {
						s.setValue(n, i);
						break;
					}
			},
			saveOriginalState: function () {
				const t = this.binding,
					e = this.buffer,
					n = this.valueSize,
					i = n * this._origIndex;
				t.getValue(e, i);
				for (let t = n, r = i; t !== r; ++t) e[t] = e[i + (t % n)];
				this._setIdentity(), (this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0);
			},
			restoreOriginalState: function () {
				const t = 3 * this.valueSize;
				this.binding.setValue(this.buffer, t);
			},
			_setAdditiveIdentityNumeric: function () {
				const t = this._addIndex * this.valueSize,
					e = t + this.valueSize;
				for (let n = t; n < e; n++) this.buffer[n] = 0;
			},
			_setAdditiveIdentityQuaternion: function () {
				this._setAdditiveIdentityNumeric(), (this.buffer[this._addIndex * this.valueSize + 3] = 1);
			},
			_setAdditiveIdentityOther: function () {
				const t = this._origIndex * this.valueSize,
					e = this._addIndex * this.valueSize;
				for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n];
			},
			_select: function (t, e, n, i, r) {
				if (i >= 0.5) for (let i = 0; i !== r; ++i) t[e + i] = t[n + i];
			},
			_slerp: function (t, e, n, i) {
				Qi.slerpFlat(t, e, t, e, t, n, i);
			},
			_slerpAdditive: function (t, e, n, i, r) {
				const o = this._workIndex * r;
				Qi.multiplyQuaternionsFlat(t, o, t, e, t, n), Qi.slerpFlat(t, e, t, e, t, o, i);
			},
			_lerp: function (t, e, n, i, r) {
				const o = 1 - i;
				for (let s = 0; s !== r; ++s) {
					const r = e + s;
					t[r] = t[r] * o + t[n + s] * i;
				}
			},
			_lerpAdditive: function (t, e, n, i, r) {
				for (let o = 0; o !== r; ++o) {
					const r = e + o;
					t[r] = t[r] + t[n + o] * i;
				}
			},
		});
		const Gd = new RegExp('[\\[\\]\\.:\\/]', 'g'),
			Vd = '[^' + '\\[\\]\\.:\\/'.replace('\\.', '') + ']',
			jd = /((?:WC+[\/:])*)/.source.replace('WC', '[^\\[\\]\\.:\\/]'),
			Wd = /(WCOD+)?/.source.replace('WCOD', Vd),
			qd = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace('WC', '[^\\[\\]\\.:\\/]'),
			Xd = /\.(WC+)(?:\[(.+)\])?/.source.replace('WC', '[^\\[\\]\\.:\\/]'),
			Yd = new RegExp('^' + jd + Wd + qd + Xd + '$'),
			Zd = ['material', 'materials', 'bones'];
		function Jd(t, e, n) {
			const i = n || Kd.parseTrackName(e);
			(this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
		}
		function Kd(t, e, n) {
			(this.path = e), (this.parsedPath = n || Kd.parseTrackName(e)), (this.node = Kd.findNode(t, this.parsedPath.nodeName) || t), (this.rootNode = t);
		}
		Object.assign(Jd.prototype, {
			getValue: function (t, e) {
				this.bind();
				const n = this._targetGroup.nCachedObjects_,
					i = this._bindings[n];
				void 0 !== i && i.getValue(t, e);
			},
			setValue: function (t, e) {
				const n = this._bindings;
				for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e);
			},
			bind: function () {
				const t = this._bindings;
				for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind();
			},
			unbind: function () {
				const t = this._bindings;
				for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind();
			},
		}),
			Object.assign(Kd, {
				Composite: Jd,
				create: function (t, e, n) {
					return t && t.isAnimationObjectGroup ? new Kd.Composite(t, e, n) : new Kd(t, e, n);
				},
				sanitizeNodeName: function (t) {
					return t.replace(/\s/g, '_').replace(Gd, '');
				},
				parseTrackName: function (t) {
					const e = Yd.exec(t);
					if (!e) throw new Error('PropertyBinding: Cannot parse trackName: ' + t);
					const n = {
							nodeName: e[2],
							objectName: e[3],
							objectIndex: e[4],
							propertyName: e[5],
							propertyIndex: e[6],
						},
						i = n.nodeName && n.nodeName.lastIndexOf('.');
					if (void 0 !== i && -1 !== i) {
						const t = n.nodeName.substring(i + 1);
						-1 !== Zd.indexOf(t) && ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
					}
					if (null === n.propertyName || 0 === n.propertyName.length) throw new Error('PropertyBinding: can not parse propertyName from trackName: ' + t);
					return n;
				},
				findNode: function (t, e) {
					if (!e || '' === e || '.' === e || -1 === e || e === t.name || e === t.uuid) return t;
					if (t.skeleton) {
						const n = t.skeleton.getBoneByName(e);
						if (void 0 !== n) return n;
					}
					if (t.children) {
						const n = function (t) {
								for (let i = 0; i < t.length; i++) {
									const r = t[i];
									if (r.name === e || r.uuid === e) return r;
									const o = n(r.children);
									if (o) return o;
								}
								return null;
							},
							i = n(t.children);
						if (i) return i;
					}
					return null;
				},
			}),
			Object.assign(Kd.prototype, {
				_getValue_unavailable: function () {},
				_setValue_unavailable: function () {},
				BindingType: {
					Direct: 0,
					EntireArray: 1,
					ArrayElement: 2,
					HasFromToArray: 3,
				},
				Versioning: {
					None: 0,
					NeedsUpdate: 1,
					MatrixWorldNeedsUpdate: 2,
				},
				GetterByBindingType: [
					function (t, e) {
						t[e] = this.node[this.propertyName];
					},
					function (t, e) {
						const n = this.resolvedProperty;
						for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
					},
					function (t, e) {
						t[e] = this.resolvedProperty[this.propertyIndex];
					},
					function (t, e) {
						this.resolvedProperty.toArray(t, e);
					},
				],
				SetterByBindingTypeAndVersioning: [
					[
						function (t, e) {
							this.targetObject[this.propertyName] = t[e];
						},
						function (t, e) {
							(this.targetObject[this.propertyName] = t[e]), (this.targetObject.needsUpdate = !0);
						},
						function (t, e) {
							(this.targetObject[this.propertyName] = t[e]), (this.targetObject.matrixWorldNeedsUpdate = !0);
						},
					],
					[
						function (t, e) {
							const n = this.resolvedProperty;
							for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
						},
						function (t, e) {
							const n = this.resolvedProperty;
							for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
							this.targetObject.needsUpdate = !0;
						},
						function (t, e) {
							const n = this.resolvedProperty;
							for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
							this.targetObject.matrixWorldNeedsUpdate = !0;
						},
					],
					[
						function (t, e) {
							this.resolvedProperty[this.propertyIndex] = t[e];
						},
						function (t, e) {
							(this.resolvedProperty[this.propertyIndex] = t[e]), (this.targetObject.needsUpdate = !0);
						},
						function (t, e) {
							(this.resolvedProperty[this.propertyIndex] = t[e]), (this.targetObject.matrixWorldNeedsUpdate = !0);
						},
					],
					[
						function (t, e) {
							this.resolvedProperty.fromArray(t, e);
						},
						function (t, e) {
							this.resolvedProperty.fromArray(t, e), (this.targetObject.needsUpdate = !0);
						},
						function (t, e) {
							this.resolvedProperty.fromArray(t, e), (this.targetObject.matrixWorldNeedsUpdate = !0);
						},
					],
				],
				getValue: function (t, e) {
					this.bind(), this.getValue(t, e);
				},
				setValue: function (t, e) {
					this.bind(), this.setValue(t, e);
				},
				bind: function () {
					let t = this.node;
					const e = this.parsedPath,
						n = e.objectName,
						i = e.propertyName;
					let r = e.propertyIndex;
					if ((t || ((t = Kd.findNode(this.rootNode, e.nodeName) || this.rootNode), (this.node = t)), (this.getValue = this._getValue_unavailable), (this.setValue = this._setValue_unavailable), !t))
						return void console.error('THREE.PropertyBinding: Trying to update node for track: ' + this.path + " but it wasn't found.");
					if (n) {
						let i = e.objectIndex;
						switch (n) {
							case 'materials':
								if (!t.material) return void console.error('THREE.PropertyBinding: Can not bind to material as node does not have a material.', this);
								if (!t.material.materials) return void console.error('THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.', this);
								t = t.material.materials;
								break;
							case 'bones':
								if (!t.skeleton) return void console.error('THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.', this);
								t = t.skeleton.bones;
								for (let e = 0; e < t.length; e++)
									if (t[e].name === i) {
										i = e;
										break;
									}
								break;
							default:
								if (void 0 === t[n]) return void console.error('THREE.PropertyBinding: Can not bind to objectName of node undefined.', this);
								t = t[n];
						}
						if (void 0 !== i) {
							if (void 0 === t[i]) return void console.error('THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.', this, t);
							t = t[i];
						}
					}
					const o = t[i];
					if (void 0 === o) {
						const n = e.nodeName;
						return void console.error('THREE.PropertyBinding: Trying to update property for track: ' + n + '.' + i + " but it wasn't found.", t);
					}
					let s = this.Versioning.None;
					(this.targetObject = t), void 0 !== t.needsUpdate ? (s = this.Versioning.NeedsUpdate) : void 0 !== t.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate);
					let a = this.BindingType.Direct;
					if (void 0 !== r) {
						if ('morphTargetInfluences' === i) {
							if (!t.geometry) return void console.error('THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.', this);
							if (!t.geometry.isBufferGeometry) return void console.error('THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.', this);
							if (!t.geometry.morphAttributes) return void console.error('THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.', this);
							void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
						}
						(a = this.BindingType.ArrayElement), (this.resolvedProperty = o), (this.propertyIndex = r);
					} else
						void 0 !== o.fromArray && void 0 !== o.toArray
							? ((a = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
							: Array.isArray(o)
							? ((a = this.BindingType.EntireArray), (this.resolvedProperty = o))
							: (this.propertyName = i);
					(this.getValue = this.GetterByBindingType[a]), (this.setValue = this.SetterByBindingTypeAndVersioning[a][s]);
				},
				unbind: function () {
					(this.node = null), (this.getValue = this._getValue_unbound), (this.setValue = this._setValue_unbound);
				},
			}),
			Object.assign(Kd.prototype, {
				_getValue_unbound: Kd.prototype.getValue,
				_setValue_unbound: Kd.prototype.setValue,
			}),
			Object.assign(
				function () {
					(this.uuid = Gi.generateUUID()), (this._objects = Array.prototype.slice.call(arguments)), (this.nCachedObjects_ = 0);
					const t = {};
					this._indicesByUUID = t;
					for (let e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
					(this._paths = []), (this._parsedPaths = []), (this._bindings = []), (this._bindingsIndicesByPath = {});
					const e = this;
					this.stats = {
						objects: {
							get total() {
								return e._objects.length;
							},
							get inUse() {
								return this.total - e.nCachedObjects_;
							},
						},
						get bindingsPerObject() {
							return e._bindings.length;
						},
					};
				}.prototype,
				{
					isAnimationObjectGroup: !0,
					add: function () {
						const t = this._objects,
							e = this._indicesByUUID,
							n = this._paths,
							i = this._parsedPaths,
							r = this._bindings,
							o = r.length;
						let s = void 0,
							a = t.length,
							l = this.nCachedObjects_;
						for (let c = 0, h = arguments.length; c !== h; ++c) {
							const h = arguments[c],
								u = h.uuid;
							let d = e[u];
							if (void 0 === d) {
								(d = a++), (e[u] = d), t.push(h);
								for (let t = 0, e = o; t !== e; ++t) r[t].push(new Kd(h, n[t], i[t]));
							} else if (d < l) {
								s = t[d];
								const a = --l,
									c = t[a];
								(e[c.uuid] = d), (t[d] = c), (e[u] = a), (t[a] = h);
								for (let t = 0, e = o; t !== e; ++t) {
									const e = r[t],
										o = e[a];
									let s = e[d];
									(e[d] = o), void 0 === s && (s = new Kd(h, n[t], i[t])), (e[a] = s);
								}
							} else t[d] !== s && console.error('THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.');
						}
						this.nCachedObjects_ = l;
					},
					remove: function () {
						const t = this._objects,
							e = this._indicesByUUID,
							n = this._bindings,
							i = n.length;
						let r = this.nCachedObjects_;
						for (let o = 0, s = arguments.length; o !== s; ++o) {
							const s = arguments[o],
								a = s.uuid,
								l = e[a];
							if (void 0 !== l && l >= r) {
								const o = r++,
									c = t[o];
								(e[c.uuid] = l), (t[l] = c), (e[a] = o), (t[o] = s);
								for (let t = 0, e = i; t !== e; ++t) {
									const e = n[t],
										i = e[o],
										r = e[l];
									(e[l] = i), (e[o] = r);
								}
							}
						}
						this.nCachedObjects_ = r;
					},
					uncache: function () {
						const t = this._objects,
							e = this._indicesByUUID,
							n = this._bindings,
							i = n.length;
						let r = this.nCachedObjects_,
							o = t.length;
						for (let s = 0, a = arguments.length; s !== a; ++s) {
							const a = arguments[s].uuid,
								l = e[a];
							if (void 0 !== l)
								if ((delete e[a], l < r)) {
									const s = --r,
										a = t[s],
										c = --o,
										h = t[c];
									(e[a.uuid] = l), (t[l] = a), (e[h.uuid] = s), (t[s] = h), t.pop();
									for (let t = 0, e = i; t !== e; ++t) {
										const e = n[t],
											i = e[s],
											r = e[c];
										(e[l] = i), (e[s] = r), e.pop();
									}
								} else {
									const r = --o,
										s = t[r];
									(e[s.uuid] = l), (t[l] = s), t.pop();
									for (let t = 0, e = i; t !== e; ++t) {
										const e = n[t];
										(e[l] = e[r]), e.pop();
									}
								}
						}
						this.nCachedObjects_ = r;
					},
					subscribe_: function (t, e) {
						const n = this._bindingsIndicesByPath;
						let i = n[t];
						const r = this._bindings;
						if (void 0 !== i) return r[i];
						const o = this._paths,
							s = this._parsedPaths,
							a = this._objects,
							l = a.length,
							c = this.nCachedObjects_,
							h = new Array(l);
						(i = r.length), (n[t] = i), o.push(t), s.push(e), r.push(h);
						for (let n = c, i = a.length; n !== i; ++n) {
							const i = a[n];
							h[n] = new Kd(i, t, e);
						}
						return h;
					},
					unsubscribe_: function (t) {
						const e = this._bindingsIndicesByPath,
							n = e[t];
						if (void 0 !== n) {
							const i = this._paths,
								r = this._parsedPaths,
								o = this._bindings,
								s = o.length - 1,
								a = o[s];
							(e[t[s]] = n), (o[n] = a), o.pop(), (r[n] = r[s]), r.pop(), (i[n] = i[s]), i.pop();
						}
					},
				},
			);
		class Qd {
			constructor(t, e, n, i) {
				(this._mixer = t), (this._clip = e), (this._localRoot = n || null), (this.blendMode = i || e.blendMode);
				const r = e.tracks,
					o = r.length,
					s = new Array(o),
					a = {
						endingStart: 2400,
						endingEnd: 2400,
					};
				for (let t = 0; t !== o; ++t) {
					const e = r[t].createInterpolant(null);
					(s[t] = e), (e.settings = a);
				}
				(this._interpolantSettings = a),
					(this._interpolants = s),
					(this._propertyBindings = new Array(o)),
					(this._cacheIndex = null),
					(this._byClipCacheIndex = null),
					(this._timeScaleInterpolant = null),
					(this._weightInterpolant = null),
					(this.loop = 2201),
					(this._loopCount = -1),
					(this._startTime = null),
					(this.time = 0),
					(this.timeScale = 1),
					(this._effectiveTimeScale = 1),
					(this.weight = 1),
					(this._effectiveWeight = 1),
					(this.repetitions = 1 / 0),
					(this.paused = !1),
					(this.enabled = !0),
					(this.clampWhenFinished = !1),
					(this.zeroSlopeAtStart = !0),
					(this.zeroSlopeAtEnd = !0);
			}
			play() {
				return this._mixer._activateAction(this), this;
			}
			stop() {
				return this._mixer._deactivateAction(this), this.reset();
			}
			reset() {
				return (this.paused = !1), (this.enabled = !0), (this.time = 0), (this._loopCount = -1), (this._startTime = null), this.stopFading().stopWarping();
			}
			isRunning() {
				return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
			}
			isScheduled() {
				return this._mixer._isActiveAction(this);
			}
			startAt(t) {
				return (this._startTime = t), this;
			}
			setLoop(t, e) {
				return (this.loop = t), (this.repetitions = e), this;
			}
			setEffectiveWeight(t) {
				return (this.weight = t), (this._effectiveWeight = this.enabled ? t : 0), this.stopFading();
			}
			getEffectiveWeight() {
				return this._effectiveWeight;
			}
			fadeIn(t) {
				return this._scheduleFading(t, 0, 1);
			}
			fadeOut(t) {
				return this._scheduleFading(t, 1, 0);
			}
			crossFadeFrom(t, e, n) {
				if ((t.fadeOut(e), this.fadeIn(e), n)) {
					const n = this._clip.duration,
						i = t._clip.duration,
						r = i / n,
						o = n / i;
					t.warp(1, r, e), this.warp(o, 1, e);
				}
				return this;
			}
			crossFadeTo(t, e, n) {
				return t.crossFadeFrom(this, e, n);
			}
			stopFading() {
				const t = this._weightInterpolant;
				return null !== t && ((this._weightInterpolant = null), this._mixer._takeBackControlInterpolant(t)), this;
			}
			setEffectiveTimeScale(t) {
				return (this.timeScale = t), (this._effectiveTimeScale = this.paused ? 0 : t), this.stopWarping();
			}
			getEffectiveTimeScale() {
				return this._effectiveTimeScale;
			}
			setDuration(t) {
				return (this.timeScale = this._clip.duration / t), this.stopWarping();
			}
			syncWith(t) {
				return (this.time = t.time), (this.timeScale = t.timeScale), this.stopWarping();
			}
			halt(t) {
				return this.warp(this._effectiveTimeScale, 0, t);
			}
			warp(t, e, n) {
				const i = this._mixer,
					r = i.time,
					o = this.timeScale;
				let s = this._timeScaleInterpolant;
				null === s && ((s = i._lendControlInterpolant()), (this._timeScaleInterpolant = s));
				const a = s.parameterPositions,
					l = s.sampleValues;
				return (a[0] = r), (a[1] = r + n), (l[0] = t / o), (l[1] = e / o), this;
			}
			stopWarping() {
				const t = this._timeScaleInterpolant;
				return null !== t && ((this._timeScaleInterpolant = null), this._mixer._takeBackControlInterpolant(t)), this;
			}
			getMixer() {
				return this._mixer;
			}
			getClip() {
				return this._clip;
			}
			getRoot() {
				return this._localRoot || this._mixer._root;
			}
			_update(t, e, n, i) {
				if (!this.enabled) return void this._updateWeight(t);
				const r = this._startTime;
				if (null !== r) {
					const i = (t - r) * n;
					if (i < 0 || 0 === n) return;
					(this._startTime = null), (e = n * i);
				}
				e *= this._updateTimeScale(t);
				const o = this._updateTime(e),
					s = this._updateWeight(t);
				if (s > 0) {
					const t = this._interpolants,
						e = this._propertyBindings;
					switch (this.blendMode) {
						case 2501:
							for (let n = 0, i = t.length; n !== i; ++n) t[n].evaluate(o), e[n].accumulateAdditive(s);
							break;
						case 2500:
						default:
							for (let n = 0, r = t.length; n !== r; ++n) t[n].evaluate(o), e[n].accumulate(i, s);
					}
				}
			}
			_updateWeight(t) {
				let e = 0;
				if (this.enabled) {
					e = this.weight;
					const n = this._weightInterpolant;
					if (null !== n) {
						const i = n.evaluate(t)[0];
						(e *= i), t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1));
					}
				}
				return (this._effectiveWeight = e), e;
			}
			_updateTimeScale(t) {
				let e = 0;
				if (!this.paused) {
					e = this.timeScale;
					const n = this._timeScaleInterpolant;
					if (null !== n) {
						(e *= n.evaluate(t)[0]), t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? (this.paused = !0) : (this.timeScale = e));
					}
				}
				return (this._effectiveTimeScale = e), e;
			}
			_updateTime(t) {
				const e = this._clip.duration,
					n = this.loop;
				let i = this.time + t,
					r = this._loopCount;
				const o = 2202 === n;
				if (0 === t) return -1 === r ? i : o && 1 == (1 & r) ? e - i : i;
				if (2200 === n) {
					-1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
					t: {
						if (i >= e) i = e;
						else {
							if (!(i < 0)) {
								this.time = i;
								break t;
							}
							i = 0;
						}
						this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
							(this.time = i),
							this._mixer.dispatchEvent({
								type: 'finished',
								action: this,
								direction: t < 0 ? -1 : 1,
							});
					}
				} else {
					if ((-1 === r && (t >= 0 ? ((r = 0), this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)), i >= e || i < 0)) {
						const n = Math.floor(i / e);
						(i -= e * n), (r += Math.abs(n));
						const s = this.repetitions - r;
						if (s <= 0)
							this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
								(i = t > 0 ? e : 0),
								(this.time = i),
								this._mixer.dispatchEvent({
									type: 'finished',
									action: this,
									direction: t > 0 ? 1 : -1,
								});
						else {
							if (1 === s) {
								const e = t < 0;
								this._setEndings(e, !e, o);
							} else this._setEndings(!1, !1, o);
							(this._loopCount = r),
								(this.time = i),
								this._mixer.dispatchEvent({
									type: 'loop',
									action: this,
									loopDelta: n,
								});
						}
					} else this.time = i;
					if (o && 1 == (1 & r)) return e - i;
				}
				return i;
			}
			_setEndings(t, e, n) {
				const i = this._interpolantSettings;
				n ? ((i.endingStart = 2401), (i.endingEnd = 2401)) : ((i.endingStart = t ? (this.zeroSlopeAtStart ? 2401 : 2400) : 2402), (i.endingEnd = e ? (this.zeroSlopeAtEnd ? 2401 : 2400) : 2402));
			}
			_scheduleFading(t, e, n) {
				const i = this._mixer,
					r = i.time;
				let o = this._weightInterpolant;
				null === o && ((o = i._lendControlInterpolant()), (this._weightInterpolant = o));
				const s = o.parameterPositions,
					a = o.sampleValues;
				return (s[0] = r), (a[0] = e), (s[1] = r + t), (a[1] = n), this;
			}
		}
		function $d(t) {
			(this._root = t), this._initMemoryManager(), (this._accuIndex = 0), (this.time = 0), (this.timeScale = 1);
		}
		$d.prototype = Object.assign(Object.create(Fi.prototype), {
			constructor: $d,
			_bindAction: function (t, e) {
				const n = t._localRoot || this._root,
					i = t._clip.tracks,
					r = i.length,
					o = t._propertyBindings,
					s = t._interpolants,
					a = n.uuid,
					l = this._bindingsByRootAndName;
				let c = l[a];
				void 0 === c && ((c = {}), (l[a] = c));
				for (let t = 0; t !== r; ++t) {
					const r = i[t],
						l = r.name;
					let h = c[l];
					if (void 0 !== h) o[t] = h;
					else {
						if (((h = o[t]), void 0 !== h)) {
							null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, a, l));
							continue;
						}
						const i = e && e._propertyBindings[t].binding.parsedPath;
						(h = new Hd(Kd.create(n, l, i), r.ValueTypeName, r.getValueSize())), ++h.referenceCount, this._addInactiveBinding(h, a, l), (o[t] = h);
					}
					s[t].resultBuffer = h.buffer;
				}
			},
			_activateAction: function (t) {
				if (!this._isActiveAction(t)) {
					if (null === t._cacheIndex) {
						const e = (t._localRoot || this._root).uuid,
							n = t._clip.uuid,
							i = this._actionsByClip[n];
						this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e);
					}
					const e = t._propertyBindings;
					for (let t = 0, n = e.length; t !== n; ++t) {
						const n = e[t];
						0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
					}
					this._lendAction(t);
				}
			},
			_deactivateAction: function (t) {
				if (this._isActiveAction(t)) {
					const e = t._propertyBindings;
					for (let t = 0, n = e.length; t !== n; ++t) {
						const n = e[t];
						0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n));
					}
					this._takeBackAction(t);
				}
			},
			_initMemoryManager: function () {
				(this._actions = []),
					(this._nActiveActions = 0),
					(this._actionsByClip = {}),
					(this._bindings = []),
					(this._nActiveBindings = 0),
					(this._bindingsByRootAndName = {}),
					(this._controlInterpolants = []),
					(this._nActiveControlInterpolants = 0);
				const t = this;
				this.stats = {
					actions: {
						get total() {
							return t._actions.length;
						},
						get inUse() {
							return t._nActiveActions;
						},
					},
					bindings: {
						get total() {
							return t._bindings.length;
						},
						get inUse() {
							return t._nActiveBindings;
						},
					},
					controlInterpolants: {
						get total() {
							return t._controlInterpolants.length;
						},
						get inUse() {
							return t._nActiveControlInterpolants;
						},
					},
				};
			},
			_isActiveAction: function (t) {
				const e = t._cacheIndex;
				return null !== e && e < this._nActiveActions;
			},
			_addInactiveAction: function (t, e, n) {
				const i = this._actions,
					r = this._actionsByClip;
				let o = r[e];
				if (void 0 === o)
					(o = {
						knownActions: [t],
						actionByRoot: {},
					}),
						(t._byClipCacheIndex = 0),
						(r[e] = o);
				else {
					const e = o.knownActions;
					(t._byClipCacheIndex = e.length), e.push(t);
				}
				(t._cacheIndex = i.length), i.push(t), (o.actionByRoot[n] = t);
			},
			_removeInactiveAction: function (t) {
				const e = this._actions,
					n = e[e.length - 1],
					i = t._cacheIndex;
				(n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
				const r = t._clip.uuid,
					o = this._actionsByClip,
					s = o[r],
					a = s.knownActions,
					l = a[a.length - 1],
					c = t._byClipCacheIndex;
				(l._byClipCacheIndex = c), (a[c] = l), a.pop(), (t._byClipCacheIndex = null);
				delete s.actionByRoot[(t._localRoot || this._root).uuid], 0 === a.length && delete o[r], this._removeInactiveBindingsForAction(t);
			},
			_removeInactiveBindingsForAction: function (t) {
				const e = t._propertyBindings;
				for (let t = 0, n = e.length; t !== n; ++t) {
					const n = e[t];
					0 == --n.referenceCount && this._removeInactiveBinding(n);
				}
			},
			_lendAction: function (t) {
				const e = this._actions,
					n = t._cacheIndex,
					i = this._nActiveActions++,
					r = e[i];
				(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
			},
			_takeBackAction: function (t) {
				const e = this._actions,
					n = t._cacheIndex,
					i = --this._nActiveActions,
					r = e[i];
				(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
			},
			_addInactiveBinding: function (t, e, n) {
				const i = this._bindingsByRootAndName,
					r = this._bindings;
				let o = i[e];
				void 0 === o && ((o = {}), (i[e] = o)), (o[n] = t), (t._cacheIndex = r.length), r.push(t);
			},
			_removeInactiveBinding: function (t) {
				const e = this._bindings,
					n = t.binding,
					i = n.rootNode.uuid,
					r = n.path,
					o = this._bindingsByRootAndName,
					s = o[i],
					a = e[e.length - 1],
					l = t._cacheIndex;
				(a._cacheIndex = l), (e[l] = a), e.pop(), delete s[r], 0 === Object.keys(s).length && delete o[i];
			},
			_lendBinding: function (t) {
				const e = this._bindings,
					n = t._cacheIndex,
					i = this._nActiveBindings++,
					r = e[i];
				(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
			},
			_takeBackBinding: function (t) {
				const e = this._bindings,
					n = t._cacheIndex,
					i = --this._nActiveBindings,
					r = e[i];
				(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
			},
			_lendControlInterpolant: function () {
				const t = this._controlInterpolants,
					e = this._nActiveControlInterpolants++;
				let n = t[e];
				return void 0 === n && ((n = new ou(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)), (n.__cacheIndex = e), (t[e] = n)), n;
			},
			_takeBackControlInterpolant: function (t) {
				const e = this._controlInterpolants,
					n = t.__cacheIndex,
					i = --this._nActiveControlInterpolants,
					r = e[i];
				(t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
			},
			_controlInterpolantsResultBuffer: new Float32Array(1),
			clipAction: function (t, e, n) {
				const i = e || this._root,
					r = i.uuid;
				let o = 'string' == typeof t ? mu.findByName(i, t) : t;
				const s = null !== o ? o.uuid : t,
					a = this._actionsByClip[s];
				let l = null;
				if ((void 0 === n && (n = null !== o ? o.blendMode : 2500), void 0 !== a)) {
					const t = a.actionByRoot[r];
					if (void 0 !== t && t.blendMode === n) return t;
					(l = a.knownActions[0]), null === o && (o = l._clip);
				}
				if (null === o) return null;
				const c = new Qd(this, o, e, n);
				return this._bindAction(c, l), this._addInactiveAction(c, s, r), c;
			},
			existingAction: function (t, e) {
				const n = e || this._root,
					i = n.uuid,
					r = 'string' == typeof t ? mu.findByName(n, t) : t,
					o = r ? r.uuid : t,
					s = this._actionsByClip[o];
				return (void 0 !== s && s.actionByRoot[i]) || null;
			},
			stopAllAction: function () {
				const t = this._actions;
				for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
				return this;
			},
			update: function (t) {
				t *= this.timeScale;
				const e = this._actions,
					n = this._nActiveActions,
					i = (this.time += t),
					r = Math.sign(t),
					o = (this._accuIndex ^= 1);
				for (let s = 0; s !== n; ++s) {
					e[s]._update(i, t, r, o);
				}
				const s = this._bindings,
					a = this._nActiveBindings;
				for (let t = 0; t !== a; ++t) s[t].apply(o);
				return this;
			},
			setTime: function (t) {
				this.time = 0;
				for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
				return this.update(t);
			},
			getRoot: function () {
				return this._root;
			},
			uncacheClip: function (t) {
				const e = this._actions,
					n = t.uuid,
					i = this._actionsByClip,
					r = i[n];
				if (void 0 !== r) {
					const t = r.knownActions;
					for (let n = 0, i = t.length; n !== i; ++n) {
						const i = t[n];
						this._deactivateAction(i);
						const r = i._cacheIndex,
							o = e[e.length - 1];
						(i._cacheIndex = null), (i._byClipCacheIndex = null), (o._cacheIndex = r), (e[r] = o), e.pop(), this._removeInactiveBindingsForAction(i);
					}
					delete i[n];
				}
			},
			uncacheRoot: function (t) {
				const e = t.uuid,
					n = this._actionsByClip;
				for (const t in n) {
					const i = n[t].actionByRoot[e];
					void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
				}
				const i = this._bindingsByRootAndName[e];
				if (void 0 !== i)
					for (const t in i) {
						const e = i[t];
						e.restoreOriginalState(), this._removeInactiveBinding(e);
					}
			},
			uncacheAction: function (t, e) {
				const n = this.existingAction(t, e);
				null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
			},
		});
		class tp {
			constructor(t) {
				'string' == typeof t && (console.warn('THREE.Uniform: Type parameter is no longer needed.'), (t = arguments[1])), (this.value = t);
			}
			clone() {
				return new tp(void 0 === this.value.clone ? this.value : this.value.clone());
			}
		}
		function ep(t, e, n) {
			jl.call(this, t, e), (this.meshPerAttribute = n || 1);
		}
		function np(t, e, n, i, r) {
			(this.buffer = t), (this.type = e), (this.itemSize = n), (this.elementSize = i), (this.count = r), (this.version = 0);
		}
		function ip(t, e, n, i) {
			(this.ray = new Er(t, e)),
				(this.near = n || 0),
				(this.far = i || 1 / 0),
				(this.camera = null),
				(this.layers = new kr()),
				(this.params = {
					Mesh: {},
					Line: {
						threshold: 1,
					},
					LOD: {},
					Points: {
						threshold: 1,
					},
					Sprite: {},
				}),
				Object.defineProperties(this.params, {
					PointCloud: {
						get: function () {
							return console.warn('THREE.Raycaster: params.PointCloud has been renamed to params.Points.'), this.Points;
						},
					},
				});
		}
		function rp(t, e) {
			return t.distance - e.distance;
		}
		function op(t, e, n, i) {
			if ((t.layers.test(e.layers) && t.raycast(e, n), !0 === i)) {
				const i = t.children;
				for (let t = 0, r = i.length; t < r; t++) op(i[t], e, n, !0);
			}
		}
		(ep.prototype = Object.assign(Object.create(jl.prototype), {
			constructor: ep,
			isInstancedInterleavedBuffer: !0,
			copy: function (t) {
				return jl.prototype.copy.call(this, t), (this.meshPerAttribute = t.meshPerAttribute), this;
			},
			clone: function (t) {
				const e = jl.prototype.clone.call(this, t);
				return (e.meshPerAttribute = this.meshPerAttribute), e;
			},
			toJSON: function (t) {
				const e = jl.prototype.toJSON.call(this, t);
				return (e.isInstancedInterleavedBuffer = !0), (e.meshPerAttribute = this.meshPerAttribute), e;
			},
		})),
			Object.defineProperty(np.prototype, 'needsUpdate', {
				set: function (t) {
					!0 === t && this.version++;
				},
			}),
			Object.assign(np.prototype, {
				isGLBufferAttribute: !0,
				setBuffer: function (t) {
					return (this.buffer = t), this;
				},
				setType: function (t, e) {
					return (this.type = t), (this.elementSize = e), this;
				},
				setItemSize: function (t) {
					return (this.itemSize = t), this;
				},
				setCount: function (t) {
					return (this.count = t), this;
				},
			}),
			Object.assign(ip.prototype, {
				set: function (t, e) {
					this.ray.set(t, e);
				},
				setFromCamera: function (t, e) {
					e && e.isPerspectiveCamera
						? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), (this.camera = e))
						: e && e.isOrthographicCamera
						? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), (this.camera = e))
						: console.error('THREE.Raycaster: Unsupported camera type.');
				},
				intersectObject: function (t, e, n) {
					const i = n || [];
					return op(t, this, i, e), i.sort(rp), i;
				},
				intersectObjects: function (t, e, n) {
					const i = n || [];
					if (!1 === Array.isArray(t)) return console.warn('THREE.Raycaster.intersectObjects: objects is not an Array.'), i;
					for (let n = 0, r = t.length; n < r; n++) op(t[n], this, i, e);
					return i.sort(rp), i;
				},
			});
		const sp = new Vi();
		const ap = new $i(),
			lp = new $i();
		function cp(t) {
			Qr.call(this),
				(this.material = t),
				(this.render = function () {}),
				(this.hasPositions = !1),
				(this.hasNormals = !1),
				(this.hasColors = !1),
				(this.hasUvs = !1),
				(this.positionArray = null),
				(this.normalArray = null),
				(this.colorArray = null),
				(this.uvArray = null),
				(this.count = 0);
		}
		(cp.prototype = Object.create(Qr.prototype)), (cp.prototype.constructor = cp), (cp.prototype.isImmediateRenderObject = !0);
		new $i();
		const hp = new $i(),
			up = new Ar(),
			dp = new Ar();
		new $i(), new bo(), new bo();
		new $i(), new $i(), new $i();
		new $i(), new Ss();
		new nr();
		new $i();
		Math.pow(2, 8);
		const pp = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
			fp = 5 + pp.length,
			{ _lodPlanes: mp, _sizeLods: gp, _sigmas: vp } =
				(new od(),
				(function () {
					const t = [],
						e = [],
						n = [];
					let i = 8;
					for (let r = 0; r < fp; r++) {
						const o = Math.pow(2, i);
						e.push(o);
						let s = 1 / o;
						r > 4 ? (s = pp[r - 8 + 4 - 1]) : 0 == r && (s = 0), n.push(s);
						const a = 1 / (o - 1),
							l = -a / 2,
							c = 1 + a / 2,
							h = [l, l, c, l, c, c, l, l, c, c, l, c],
							u = 6,
							d = 6,
							p = 3,
							f = 2,
							m = 1,
							g = new Float32Array(p * d * u),
							v = new Float32Array(f * d * u),
							y = new Float32Array(m * d * u);
						for (let t = 0; t < u; t++) {
							const e = ((t % 3) * 2) / 3 - 1,
								n = t > 2 ? 0 : -1,
								i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
							g.set(i, p * d * t), v.set(h, f * d * t);
							const r = [t, t, t, t, t, t];
							y.set(r, m * d * t);
						}
						const x = new Xo();
						x.setAttribute('position', new Lo(g, p)), x.setAttribute('uv', new Lo(v, f)), x.setAttribute('faceIndex', new Lo(y, m)), t.push(x), i > 4 && i--;
					}
					return {
						_lodPlanes: t,
						_sizeLods: e,
						_sigmas: n,
					};
				})());
		const yp = (1 + Math.sqrt(5)) / 2,
			xp = 1 / yp;
		new $i(1, 1, 1), new $i(-1, 1, 1), new $i(1, 1, -1), new $i(-1, 1, -1), new $i(0, yp, xp), new $i(0, yp, -xp), new $i(xp, 0, yp), new $i(-xp, 0, yp), new $i(yp, xp, 0), new $i(-yp, xp, 0);
		function _p(t) {
			console.warn('THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.'), Bu.call(this, t), (this.type = 'catmullrom');
		}
		(Ru.create = function (t, e) {
			return console.log('THREE.Curve.create() has been deprecated'), (t.prototype = Object.create(Ru.prototype)), (t.prototype.constructor = t), (t.prototype.getPoint = e), t;
		}),
			Object.assign(Zu.prototype, {
				createPointsGeometry: function (t) {
					console.warn('THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.');
					const e = this.getPoints(t);
					return this.createGeometry(e);
				},
				createSpacedPointsGeometry: function (t) {
					console.warn('THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.');
					const e = this.getSpacedPoints(t);
					return this.createGeometry(e);
				},
				createGeometry: function (t) {
					console.warn('THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.');
					const e = new ys();
					for (let n = 0, i = t.length; n < i; n++) {
						const i = t[n];
						e.vertices.push(new $i(i.x, i.y, i.z || 0));
					}
					return e;
				},
			}),
			Object.assign(Ju.prototype, {
				fromPoints: function (t) {
					return console.warn('THREE.Path: .fromPoints() has been renamed to .setFromPoints().'), this.setFromPoints(t);
				},
			}),
			Object.create(Bu.prototype),
			Object.create(Bu.prototype),
			(_p.prototype = Object.create(Bu.prototype)),
			Object.assign(_p.prototype, {
				initFromArray: function () {
					console.error('THREE.Spline: .initFromArray() has been removed.');
				},
				getControlPointsArray: function () {
					console.error('THREE.Spline: .getControlPointsArray() has been removed.');
				},
				reparametrizeByArcLength: function () {
					console.error('THREE.Spline: .reparametrizeByArcLength() has been removed.');
				},
			}),
			(class extends Cc {
				constructor(t, e, n, i) {
					(t = t || 10), (e = e || 10), (n = new bo(void 0 !== n ? n : 4473924)), (i = new bo(void 0 !== i ? i : 8947848));
					const r = e / 2,
						o = t / e,
						s = t / 2,
						a = [],
						l = [];
					for (let t = 0, c = 0, h = -s; t <= e; t++, h += o) {
						a.push(-s, 0, h, s, 0, h), a.push(h, 0, -s, h, 0, s);
						const e = t === r ? n : i;
						e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3), e.toArray(l, c), (c += 3);
					}
					const c = new Xo();
					c.setAttribute('position', new zo(a, 3)), c.setAttribute('color', new zo(l, 3));
					super(
						c,
						new wc({
							vertexColors: !0,
							toneMapped: !1,
						}),
					),
						(this.type = 'GridHelper');
				}
			}.prototype.setColors = function () {
				console.error('THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.');
			}),
			(class extends Cc {
				constructor(t) {
					const e = (function t(e) {
							const n = [];
							e && e.isBone && n.push(e);
							for (let i = 0; i < e.children.length; i++) n.push.apply(n, t(e.children[i]));
							return n;
						})(t),
						n = new Xo(),
						i = [],
						r = [],
						o = new bo(0, 0, 1),
						s = new bo(0, 1, 0);
					for (let t = 0; t < e.length; t++) {
						const n = e[t];
						n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(s.r, s.g, s.b));
					}
					n.setAttribute('position', new zo(i, 3)), n.setAttribute('color', new zo(r, 3));
					super(
						n,
						new wc({
							vertexColors: !0,
							depthTest: !1,
							depthWrite: !1,
							toneMapped: !1,
							transparent: !0,
						}),
					),
						(this.type = 'SkeletonHelper'),
						(this.isSkeletonHelper = !0),
						(this.root = t),
						(this.bones = e),
						(this.matrix = t.matrixWorld),
						(this.matrixAutoUpdate = !1);
				}
				updateMatrixWorld(t) {
					const e = this.bones,
						n = this.geometry,
						i = n.getAttribute('position');
					dp.getInverse(this.root.matrixWorld);
					for (let t = 0, n = 0; t < e.length; t++) {
						const r = e[t];
						r.parent &&
							r.parent.isBone &&
							(up.multiplyMatrices(dp, r.matrixWorld),
							hp.setFromMatrixPosition(up),
							i.setXYZ(n, hp.x, hp.y, hp.z),
							up.multiplyMatrices(dp, r.parent.matrixWorld),
							hp.setFromMatrixPosition(up),
							i.setXYZ(n + 1, hp.x, hp.y, hp.z),
							(n += 2));
					}
					(n.getAttribute('position').needsUpdate = !0), super.updateMatrixWorld(t);
				}
			}.prototype.update = function () {
				console.error('THREE.SkeletonHelper: update() no longer needs to be called.');
			}),
			Object.assign(_u.prototype, {
				extractUrlBase: function (t) {
					return console.warn('THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.'), pd(t);
				},
			}),
			(_u.Handlers = {
				add: function () {
					console.error('THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.');
				},
				get: function () {
					console.error('THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.');
				},
			}),
			Object.assign(yd.prototype, {
				setTexturePath: function (t) {
					return console.warn('THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().'), this.setResourcePath(t);
				},
			}),
			Object.assign(
				class {
					constructor(t, e) {
						Object.defineProperty(this, 'isBox2', {
							value: !0,
						}),
							(this.min = void 0 !== t ? t : new Vi(1 / 0, 1 / 0)),
							(this.max = void 0 !== e ? e : new Vi(-1 / 0, -1 / 0));
					}
					set(t, e) {
						return this.min.copy(t), this.max.copy(e), this;
					}
					setFromPoints(t) {
						this.makeEmpty();
						for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
						return this;
					}
					setFromCenterAndSize(t, e) {
						const n = sp.copy(e).multiplyScalar(0.5);
						return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
					}
					clone() {
						return new this.constructor().copy(this);
					}
					copy(t) {
						return this.min.copy(t.min), this.max.copy(t.max), this;
					}
					makeEmpty() {
						return (this.min.x = this.min.y = 1 / 0), (this.max.x = this.max.y = -1 / 0), this;
					}
					isEmpty() {
						return this.max.x < this.min.x || this.max.y < this.min.y;
					}
					getCenter(t) {
						return (
							void 0 === t && (console.warn('THREE.Box2: .getCenter() target is now required'), (t = new Vi())), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5)
						);
					}
					getSize(t) {
						return void 0 === t && (console.warn('THREE.Box2: .getSize() target is now required'), (t = new Vi())), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
					}
					expandByPoint(t) {
						return this.min.min(t), this.max.max(t), this;
					}
					expandByVector(t) {
						return this.min.sub(t), this.max.add(t), this;
					}
					expandByScalar(t) {
						return this.min.addScalar(-t), this.max.addScalar(t), this;
					}
					containsPoint(t) {
						return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
					}
					containsBox(t) {
						return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
					}
					getParameter(t, e) {
						return (
							void 0 === e && (console.warn('THREE.Box2: .getParameter() target is now required'), (e = new Vi())),
							e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
						);
					}
					intersectsBox(t) {
						return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
					}
					clampPoint(t, e) {
						return void 0 === e && (console.warn('THREE.Box2: .clampPoint() target is now required'), (e = new Vi())), e.copy(t).clamp(this.min, this.max);
					}
					distanceToPoint(t) {
						return sp.copy(t).clamp(this.min, this.max).sub(t).length();
					}
					intersect(t) {
						return this.min.max(t.min), this.max.min(t.max), this;
					}
					union(t) {
						return this.min.min(t.min), this.max.max(t.max), this;
					}
					translate(t) {
						return this.min.add(t), this.max.add(t), this;
					}
					equals(t) {
						return t.min.equals(this.min) && t.max.equals(this.max);
					}
				}.prototype,
				{
					center: function (t) {
						return console.warn('THREE.Box2: .center() has been renamed to .getCenter().'), this.getCenter(t);
					},
					empty: function () {
						return console.warn('THREE.Box2: .empty() has been renamed to .isEmpty().'), this.isEmpty();
					},
					isIntersectionBox: function (t) {
						return console.warn('THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().'), this.intersectsBox(t);
					},
					size: function (t) {
						return console.warn('THREE.Box2: .size() has been renamed to .getSize().'), this.getSize(t);
					},
				},
			),
			Object.assign(nr.prototype, {
				center: function (t) {
					return console.warn('THREE.Box3: .center() has been renamed to .getCenter().'), this.getCenter(t);
				},
				empty: function () {
					return console.warn('THREE.Box3: .empty() has been renamed to .isEmpty().'), this.isEmpty();
				},
				isIntersectionBox: function (t) {
					return console.warn('THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().'), this.intersectsBox(t);
				},
				isIntersectionSphere: function (t) {
					return console.warn('THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().'), this.intersectsSphere(t);
				},
				size: function (t) {
					return console.warn('THREE.Box3: .size() has been renamed to .getSize().'), this.getSize(t);
				},
			}),
			Object.assign(yr.prototype, {
				empty: function () {
					return console.warn('THREE.Sphere: .empty() has been renamed to .isEmpty().'), this.isEmpty();
				},
			}),
			(Cs.prototype.setFromMatrix = function (t) {
				return console.warn('THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().'), this.setFromProjectionMatrix(t);
			}),
			(class {
				constructor(t, e) {
					(this.start = void 0 !== t ? t : new $i()), (this.end = void 0 !== e ? e : new $i());
				}
				set(t, e) {
					return this.start.copy(t), this.end.copy(e), this;
				}
				clone() {
					return new this.constructor().copy(this);
				}
				copy(t) {
					return this.start.copy(t.start), this.end.copy(t.end), this;
				}
				getCenter(t) {
					return void 0 === t && (console.warn('THREE.Line3: .getCenter() target is now required'), (t = new $i())), t.addVectors(this.start, this.end).multiplyScalar(0.5);
				}
				delta(t) {
					return void 0 === t && (console.warn('THREE.Line3: .delta() target is now required'), (t = new $i())), t.subVectors(this.end, this.start);
				}
				distanceSq() {
					return this.start.distanceToSquared(this.end);
				}
				distance() {
					return this.start.distanceTo(this.end);
				}
				at(t, e) {
					return void 0 === e && (console.warn('THREE.Line3: .at() target is now required'), (e = new $i())), this.delta(e).multiplyScalar(t).add(this.start);
				}
				closestPointToPointParameter(t, e) {
					ap.subVectors(t, this.start), lp.subVectors(this.end, this.start);
					const n = lp.dot(lp);
					let i = lp.dot(ap) / n;
					return e && (i = Gi.clamp(i, 0, 1)), i;
				}
				closestPointToPoint(t, e, n) {
					const i = this.closestPointToPointParameter(t, e);
					return void 0 === n && (console.warn('THREE.Line3: .closestPointToPoint() target is now required'), (n = new $i())), this.delta(n).multiplyScalar(i).add(this.start);
				}
				applyMatrix4(t) {
					return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
				}
				equals(t) {
					return t.start.equals(this.start) && t.end.equals(this.end);
				}
			}.prototype.center = function (t) {
				return console.warn('THREE.Line3: .center() has been renamed to .getCenter().'), this.getCenter(t);
			}),
			Object.assign(Gi, {
				random16: function () {
					return console.warn('THREE.Math: .random16() has been deprecated. Use Math.random() instead.'), Math.random();
				},
				nearestPowerOfTwo: function (t) {
					return console.warn('THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().'), Gi.floorPowerOfTwo(t);
				},
				nextPowerOfTwo: function (t) {
					return console.warn('THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().'), Gi.ceilPowerOfTwo(t);
				},
			}),
			Object.assign(ji.prototype, {
				flattenToArrayOffset: function (t, e) {
					return console.warn('THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'), this.toArray(t, e);
				},
				multiplyVector3: function (t) {
					return console.warn('THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.'), t.applyMatrix3(this);
				},
				multiplyVector3Array: function () {
					console.error('THREE.Matrix3: .multiplyVector3Array() has been removed.');
				},
				applyToBufferAttribute: function (t) {
					return console.warn('THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.'), t.applyMatrix3(this);
				},
				applyToVector3Array: function () {
					console.error('THREE.Matrix3: .applyToVector3Array() has been removed.');
				},
			}),
			Object.assign(Ar.prototype, {
				extractPosition: function (t) {
					return console.warn('THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().'), this.copyPosition(t);
				},
				flattenToArrayOffset: function (t, e) {
					return console.warn('THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'), this.toArray(t, e);
				},
				getPosition: function () {
					return console.warn('THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.'), new $i().setFromMatrixColumn(this, 3);
				},
				setRotationFromQuaternion: function (t) {
					return console.warn('THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().'), this.makeRotationFromQuaternion(t);
				},
				multiplyToArray: function () {
					console.warn('THREE.Matrix4: .multiplyToArray() has been removed.');
				},
				multiplyVector3: function (t) {
					return console.warn('THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.'), t.applyMatrix4(this);
				},
				multiplyVector4: function (t) {
					return console.warn('THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.'), t.applyMatrix4(this);
				},
				multiplyVector3Array: function () {
					console.error('THREE.Matrix4: .multiplyVector3Array() has been removed.');
				},
				rotateAxis: function (t) {
					console.warn('THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.'), t.transformDirection(this);
				},
				crossVector: function (t) {
					return console.warn('THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.'), t.applyMatrix4(this);
				},
				translate: function () {
					console.error('THREE.Matrix4: .translate() has been removed.');
				},
				rotateX: function () {
					console.error('THREE.Matrix4: .rotateX() has been removed.');
				},
				rotateY: function () {
					console.error('THREE.Matrix4: .rotateY() has been removed.');
				},
				rotateZ: function () {
					console.error('THREE.Matrix4: .rotateZ() has been removed.');
				},
				rotateByAxis: function () {
					console.error('THREE.Matrix4: .rotateByAxis() has been removed.');
				},
				applyToBufferAttribute: function (t) {
					return console.warn('THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.'), t.applyMatrix4(this);
				},
				applyToVector3Array: function () {
					console.error('THREE.Matrix4: .applyToVector3Array() has been removed.');
				},
				makeFrustum: function (t, e, n, i, r, o) {
					return console.warn('THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.'), this.makePerspective(t, e, i, n, r, o);
				},
			}),
			(no.prototype.isIntersectionLine = function (t) {
				return console.warn('THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().'), this.intersectsLine(t);
			}),
			(Qi.prototype.multiplyVector3 = function (t) {
				return console.warn('THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.'), t.applyQuaternion(this);
			}),
			Object.assign(Er.prototype, {
				isIntersectionBox: function (t) {
					return console.warn('THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().'), this.intersectsBox(t);
				},
				isIntersectionPlane: function (t) {
					return console.warn('THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().'), this.intersectsPlane(t);
				},
				isIntersectionSphere: function (t) {
					return console.warn('THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().'), this.intersectsSphere(t);
				},
			}),
			Object.assign(fo.prototype, {
				area: function () {
					return console.warn('THREE.Triangle: .area() has been renamed to .getArea().'), this.getArea();
				},
				barycoordFromPoint: function (t, e) {
					return console.warn('THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'), this.getBarycoord(t, e);
				},
				midpoint: function (t) {
					return console.warn('THREE.Triangle: .midpoint() has been renamed to .getMidpoint().'), this.getMidpoint(t);
				},
				normal: function (t) {
					return console.warn('THREE.Triangle: .normal() has been renamed to .getNormal().'), this.getNormal(t);
				},
				plane: function (t) {
					return console.warn('THREE.Triangle: .plane() has been renamed to .getPlane().'), this.getPlane(t);
				},
			}),
			Object.assign(fo, {
				barycoordFromPoint: function (t, e, n, i, r) {
					return console.warn('THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'), fo.getBarycoord(t, e, n, i, r);
				},
				normal: function (t, e, n, i) {
					return console.warn('THREE.Triangle: .normal() has been renamed to .getNormal().'), fo.getNormal(t, e, n, i);
				},
			}),
			Object.assign(Ku.prototype, {
				extractAllPoints: function (t) {
					return console.warn('THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.'), this.extractPoints(t);
				},
				extrude: function (t) {
					return console.warn('THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.'), new Rh(this, t);
				},
				makeGeometry: function (t) {
					return console.warn('THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.'), new Bh(this, t);
				},
			}),
			Object.assign(Vi.prototype, {
				fromAttribute: function (t, e, n) {
					return console.warn('THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().'), this.fromBufferAttribute(t, e, n);
				},
				distanceToManhattan: function (t) {
					return console.warn('THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'), this.manhattanDistanceTo(t);
				},
				lengthManhattan: function () {
					return console.warn('THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().'), this.manhattanLength();
				},
			}),
			Object.assign($i.prototype, {
				setEulerFromRotationMatrix: function () {
					console.error('THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.');
				},
				setEulerFromQuaternion: function () {
					console.error('THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.');
				},
				getPositionFromMatrix: function (t) {
					return console.warn('THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().'), this.setFromMatrixPosition(t);
				},
				getScaleFromMatrix: function (t) {
					return console.warn('THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().'), this.setFromMatrixScale(t);
				},
				getColumnFromMatrix: function (t, e) {
					return console.warn('THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().'), this.setFromMatrixColumn(e, t);
				},
				applyProjection: function (t) {
					return console.warn('THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.'), this.applyMatrix4(t);
				},
				fromAttribute: function (t, e, n) {
					return console.warn('THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().'), this.fromBufferAttribute(t, e, n);
				},
				distanceToManhattan: function (t) {
					return console.warn('THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'), this.manhattanDistanceTo(t);
				},
				lengthManhattan: function () {
					return console.warn('THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().'), this.manhattanLength();
				},
			}),
			Object.assign(Zi.prototype, {
				fromAttribute: function (t, e, n) {
					return console.warn('THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().'), this.fromBufferAttribute(t, e, n);
				},
				lengthManhattan: function () {
					return console.warn('THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().'), this.manhattanLength();
				},
			}),
			Object.assign(ys.prototype, {
				computeTangents: function () {
					console.error('THREE.Geometry: .computeTangents() has been removed.');
				},
				computeLineDistances: function () {
					console.error('THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.');
				},
				applyMatrix: function (t) {
					return console.warn('THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4().'), this.applyMatrix4(t);
				},
			}),
			Object.assign(Qr.prototype, {
				getChildByName: function (t) {
					return console.warn('THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().'), this.getObjectByName(t);
				},
				renderDepth: function () {
					console.warn('THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.');
				},
				translate: function (t, e) {
					return console.warn('THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.'), this.translateOnAxis(e, t);
				},
				getWorldRotation: function () {
					console.error('THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.');
				},
				applyMatrix: function (t) {
					return console.warn('THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().'), this.applyMatrix4(t);
				},
			}),
			Object.defineProperties(Qr.prototype, {
				eulerOrder: {
					get: function () {
						return console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'), this.rotation.order;
					},
					set: function (t) {
						console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'), (this.rotation.order = t);
					},
				},
				useQuaternion: {
					get: function () {
						console.warn('THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.');
					},
					set: function () {
						console.warn('THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.');
					},
				},
			}),
			Object.assign(us.prototype, {
				setDrawMode: function () {
					console.error(
						'THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.',
					);
				},
			}),
			Object.defineProperties(us.prototype, {
				drawMode: {
					get: function () {
						return console.error('THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.'), 0;
					},
					set: function () {
						console.error(
							'THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.',
						);
					},
				},
			}),
			Object.defineProperties(uc.prototype, {
				objects: {
					get: function () {
						return console.warn('THREE.LOD: .objects has been renamed to .levels.'), this.levels;
					},
				},
			}),
			Object.defineProperty(mc.prototype, 'useVertexTexture', {
				get: function () {
					console.warn('THREE.Skeleton: useVertexTexture has been removed.');
				},
				set: function () {
					console.warn('THREE.Skeleton: useVertexTexture has been removed.');
				},
			}),
			(dc.prototype.initBones = function () {
				console.error('THREE.SkinnedMesh: initBones() has been removed.');
			}),
			Object.defineProperty(Ru.prototype, '__arcLengthDivisions', {
				get: function () {
					return console.warn('THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'), this.arcLengthDivisions;
				},
				set: function (t) {
					console.warn('THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'), (this.arcLengthDivisions = t);
				},
			}),
			(Ts.prototype.setLens = function (t, e) {
				console.warn('THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.'), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t);
			}),
			Object.defineProperties(Qu.prototype, {
				onlyShadow: {
					set: function () {
						console.warn('THREE.Light: .onlyShadow has been removed.');
					},
				},
				shadowCameraFov: {
					set: function (t) {
						console.warn('THREE.Light: .shadowCameraFov is now .shadow.camera.fov.'), (this.shadow.camera.fov = t);
					},
				},
				shadowCameraLeft: {
					set: function (t) {
						console.warn('THREE.Light: .shadowCameraLeft is now .shadow.camera.left.'), (this.shadow.camera.left = t);
					},
				},
				shadowCameraRight: {
					set: function (t) {
						console.warn('THREE.Light: .shadowCameraRight is now .shadow.camera.right.'), (this.shadow.camera.right = t);
					},
				},
				shadowCameraTop: {
					set: function (t) {
						console.warn('THREE.Light: .shadowCameraTop is now .shadow.camera.top.'), (this.shadow.camera.top = t);
					},
				},
				shadowCameraBottom: {
					set: function (t) {
						console.warn('THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.'), (this.shadow.camera.bottom = t);
					},
				},
				shadowCameraNear: {
					set: function (t) {
						console.warn('THREE.Light: .shadowCameraNear is now .shadow.camera.near.'), (this.shadow.camera.near = t);
					},
				},
				shadowCameraFar: {
					set: function (t) {
						console.warn('THREE.Light: .shadowCameraFar is now .shadow.camera.far.'), (this.shadow.camera.far = t);
					},
				},
				shadowCameraVisible: {
					set: function () {
						console.warn('THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.');
					},
				},
				shadowBias: {
					set: function (t) {
						console.warn('THREE.Light: .shadowBias is now .shadow.bias.'), (this.shadow.bias = t);
					},
				},
				shadowDarkness: {
					set: function () {
						console.warn('THREE.Light: .shadowDarkness has been removed.');
					},
				},
				shadowMapWidth: {
					set: function (t) {
						console.warn('THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.'), (this.shadow.mapSize.width = t);
					},
				},
				shadowMapHeight: {
					set: function (t) {
						console.warn('THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.'), (this.shadow.mapSize.height = t);
					},
				},
			}),
			Object.defineProperties(Lo.prototype, {
				length: {
					get: function () {
						return console.warn('THREE.BufferAttribute: .length has been deprecated. Use .count instead.'), this.array.length;
					},
				},
				dynamic: {
					get: function () {
						return console.warn('THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.'), 35048 === this.usage;
					},
					set: function () {
						console.warn('THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.'), this.setUsage(35048);
					},
				},
			}),
			Object.assign(Lo.prototype, {
				setDynamic: function (t) {
					return console.warn('THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.'), this.setUsage(!0 === t ? 35048 : 35044), this;
				},
				copyIndicesArray: function () {
					console.error('THREE.BufferAttribute: .copyIndicesArray() has been removed.');
				},
				setArray: function () {
					console.error('THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers');
				},
			}),
			Object.assign(Xo.prototype, {
				addIndex: function (t) {
					console.warn('THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().'), this.setIndex(t);
				},
				addAttribute: function (t, e) {
					return (
						console.warn('THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().'),
						(e && e.isBufferAttribute) || (e && e.isInterleavedBufferAttribute)
							? 'index' === t
								? (console.warn('THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.'), this.setIndex(e), this)
								: this.setAttribute(t, e)
							: (console.warn('THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).'), this.setAttribute(t, new Lo(arguments[1], arguments[2])))
					);
				},
				addDrawCall: function (t, e, n) {
					void 0 !== n && console.warn('THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.'),
						console.warn('THREE.BufferGeometry: .addDrawCall() is now .addGroup().'),
						this.addGroup(t, e);
				},
				clearDrawCalls: function () {
					console.warn('THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().'), this.clearGroups();
				},
				computeTangents: function () {
					console.warn('THREE.BufferGeometry: .computeTangents() has been removed.');
				},
				computeOffsets: function () {
					console.warn('THREE.BufferGeometry: .computeOffsets() has been removed.');
				},
				removeAttribute: function (t) {
					return console.warn('THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().'), this.deleteAttribute(t);
				},
				applyMatrix: function (t) {
					return console.warn('THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().'), this.applyMatrix4(t);
				},
			}),
			Object.defineProperties(Xo.prototype, {
				drawcalls: {
					get: function () {
						return console.error('THREE.BufferGeometry: .drawcalls has been renamed to .groups.'), this.groups;
					},
				},
				offsets: {
					get: function () {
						return console.warn('THREE.BufferGeometry: .offsets has been renamed to .groups.'), this.groups;
					},
				},
			}),
			Object.defineProperties(fd.prototype, {
				maxInstancedCount: {
					get: function () {
						return console.warn('THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.'), this.instanceCount;
					},
					set: function (t) {
						console.warn('THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.'), (this.instanceCount = t);
					},
				},
			}),
			Object.defineProperties(ip.prototype, {
				linePrecision: {
					get: function () {
						return console.warn('THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.'), this.params.Line.threshold;
					},
					set: function (t) {
						console.warn('THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.'), (this.params.Line.threshold = t);
					},
				},
			}),
			Object.defineProperties(jl.prototype, {
				dynamic: {
					get: function () {
						return console.warn('THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.'), 35048 === this.usage;
					},
					set: function (t) {
						console.warn('THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.'), this.setUsage(t);
					},
				},
			}),
			Object.assign(jl.prototype, {
				setDynamic: function (t) {
					return console.warn('THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.'), this.setUsage(!0 === t ? 35048 : 35044), this;
				},
				setArray: function () {
					console.error('THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers');
				},
			}),
			Object.assign(Ph.prototype, {
				getArrays: function () {
					console.error('THREE.ExtrudeBufferGeometry: .getArrays() has been removed.');
				},
				addShapeList: function () {
					console.error('THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.');
				},
				addShape: function () {
					console.error('THREE.ExtrudeBufferGeometry: .addShape() has been removed.');
				},
			}),
			Object.assign(Vl.prototype, {
				dispose: function () {
					console.error('THREE.Scene: .dispose() has been removed.');
				},
			}),
			Object.defineProperties(tp.prototype, {
				dynamic: {
					set: function () {
						console.warn('THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.');
					},
				},
				onUpdate: {
					value: function () {
						return console.warn('THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.'), this;
					},
				},
			}),
			Object.defineProperties(So.prototype, {
				wrapAround: {
					get: function () {
						console.warn('THREE.Material: .wrapAround has been removed.');
					},
					set: function () {
						console.warn('THREE.Material: .wrapAround has been removed.');
					},
				},
				overdraw: {
					get: function () {
						console.warn('THREE.Material: .overdraw has been removed.');
					},
					set: function () {
						console.warn('THREE.Material: .overdraw has been removed.');
					},
				},
				wrapRGB: {
					get: function () {
						return console.warn('THREE.Material: .wrapRGB has been removed.'), new bo();
					},
				},
				shading: {
					get: function () {
						console.error('THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.');
					},
					set: function (t) {
						console.warn('THREE.' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.'), (this.flatShading = 1 === t);
					},
				},
				stencilMask: {
					get: function () {
						return console.warn('THREE.' + this.type + ': .stencilMask has been removed. Use .stencilFuncMask instead.'), this.stencilFuncMask;
					},
					set: function (t) {
						console.warn('THREE.' + this.type + ': .stencilMask has been removed. Use .stencilFuncMask instead.'), (this.stencilFuncMask = t);
					},
				},
			}),
			Object.defineProperties(Zh.prototype, {
				metal: {
					get: function () {
						return console.warn('THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.'), !1;
					},
					set: function () {
						console.warn('THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead');
					},
				},
			}),
			Object.defineProperties(Yh.prototype, {
				transparency: {
					get: function () {
						return console.warn('THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission.'), this.transmission;
					},
					set: function (t) {
						console.warn('THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission.'), (this.transmission = t);
					},
				},
			}),
			Object.defineProperties(Ms.prototype, {
				derivatives: {
					get: function () {
						return console.warn('THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'), this.extensions.derivatives;
					},
					set: function (t) {
						console.warn('THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'), (this.extensions.derivatives = t);
					},
				},
			}),
			Object.assign(Fl.prototype, {
				clearTarget: function (t, e, n, i) {
					console.warn('THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.'), this.setRenderTarget(t), this.clear(e, n, i);
				},
				animate: function (t) {
					console.warn('THREE.WebGLRenderer: .animate() is now .setAnimationLoop().'), this.setAnimationLoop(t);
				},
				getCurrentRenderTarget: function () {
					return console.warn('THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().'), this.getRenderTarget();
				},
				getMaxAnisotropy: function () {
					return console.warn('THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().'), this.capabilities.getMaxAnisotropy();
				},
				getPrecision: function () {
					return console.warn('THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.'), this.capabilities.precision;
				},
				resetGLState: function () {
					return console.warn('THREE.WebGLRenderer: .resetGLState() is now .state.reset().'), this.state.reset();
				},
				supportsFloatTextures: function () {
					return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get('OES_texture_float');
				},
				supportsHalfFloatTextures: function () {
					return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get('OES_texture_half_float');
				},
				supportsStandardDerivatives: function () {
					return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get('OES_standard_derivatives');
				},
				supportsCompressedTextureS3TC: function () {
					return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get('WEBGL_compressed_texture_s3tc');
				},
				supportsCompressedTexturePVRTC: function () {
					return (
						console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get('WEBGL_compressed_texture_pvrtc')
					);
				},
				supportsBlendMinMax: function () {
					return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get('EXT_blend_minmax');
				},
				supportsVertexTextures: function () {
					return console.warn('THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.'), this.capabilities.vertexTextures;
				},
				supportsInstancedArrays: function () {
					return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get('ANGLE_instanced_arrays');
				},
				enableScissorTest: function (t) {
					console.warn('THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().'), this.setScissorTest(t);
				},
				initMaterial: function () {
					console.warn('THREE.WebGLRenderer: .initMaterial() has been removed.');
				},
				addPrePlugin: function () {
					console.warn('THREE.WebGLRenderer: .addPrePlugin() has been removed.');
				},
				addPostPlugin: function () {
					console.warn('THREE.WebGLRenderer: .addPostPlugin() has been removed.');
				},
				updateShadowMap: function () {
					console.warn('THREE.WebGLRenderer: .updateShadowMap() has been removed.');
				},
				setFaceCulling: function () {
					console.warn('THREE.WebGLRenderer: .setFaceCulling() has been removed.');
				},
				allocTextureUnit: function () {
					console.warn('THREE.WebGLRenderer: .allocTextureUnit() has been removed.');
				},
				setTexture: function () {
					console.warn('THREE.WebGLRenderer: .setTexture() has been removed.');
				},
				setTexture2D: function () {
					console.warn('THREE.WebGLRenderer: .setTexture2D() has been removed.');
				},
				setTextureCube: function () {
					console.warn('THREE.WebGLRenderer: .setTextureCube() has been removed.');
				},
				getActiveMipMapLevel: function () {
					return console.warn('THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().'), this.getActiveMipmapLevel();
				},
			}),
			Object.defineProperties(Fl.prototype, {
				shadowMapEnabled: {
					get: function () {
						return this.shadowMap.enabled;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.'), (this.shadowMap.enabled = t);
					},
				},
				shadowMapType: {
					get: function () {
						return this.shadowMap.type;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.'), (this.shadowMap.type = t);
					},
				},
				shadowMapCullFace: {
					get: function () {
						console.warn('THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.');
					},
					set: function () {
						console.warn('THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.');
					},
				},
				context: {
					get: function () {
						return console.warn('THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.'), this.getContext();
					},
				},
				vr: {
					get: function () {
						return console.warn('THREE.WebGLRenderer: .vr has been renamed to .xr'), this.xr;
					},
				},
				gammaInput: {
					get: function () {
						return console.warn('THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.'), !1;
					},
					set: function () {
						console.warn('THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.');
					},
				},
				gammaOutput: {
					get: function () {
						return console.warn('THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.'), !1;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.'), (this.outputEncoding = !0 === t ? 3001 : 3e3);
					},
				},
				toneMappingWhitePoint: {
					get: function () {
						return console.warn('THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.'), 1;
					},
					set: function () {
						console.warn('THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.');
					},
				},
			}),
			Object.defineProperties(Pl.prototype, {
				cullFace: {
					get: function () {
						console.warn('THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.');
					},
					set: function () {
						console.warn('THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.');
					},
				},
				renderReverseSided: {
					get: function () {
						console.warn('THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.');
					},
					set: function () {
						console.warn('THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.');
					},
				},
				renderSingleSided: {
					get: function () {
						console.warn('THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.');
					},
					set: function () {
						console.warn('THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.');
					},
				},
			}),
			Object.defineProperties(Ji.prototype, {
				wrapS: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'), this.texture.wrapS;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'), (this.texture.wrapS = t);
					},
				},
				wrapT: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'), this.texture.wrapT;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'), (this.texture.wrapT = t);
					},
				},
				magFilter: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'), this.texture.magFilter;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'), (this.texture.magFilter = t);
					},
				},
				minFilter: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'), this.texture.minFilter;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'), (this.texture.minFilter = t);
					},
				},
				anisotropy: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'), this.texture.anisotropy;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'), (this.texture.anisotropy = t);
					},
				},
				offset: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'), this.texture.offset;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'), (this.texture.offset = t);
					},
				},
				repeat: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'), this.texture.repeat;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'), (this.texture.repeat = t);
					},
				},
				format: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'), this.texture.format;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'), (this.texture.format = t);
					},
				},
				type: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'), this.texture.type;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'), (this.texture.type = t);
					},
				},
				generateMipmaps: {
					get: function () {
						return console.warn('THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'), this.texture.generateMipmaps;
					},
					set: function (t) {
						console.warn('THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'), (this.texture.generateMipmaps = t);
					},
				},
			}),
			Object.defineProperties(Ud.prototype, {
				load: {
					value: function (t) {
						console.warn('THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.');
						const e = this;
						return (
							new Rd().load(t, function (t) {
								e.setBuffer(t);
							}),
							this
						);
					},
				},
				startTime: {
					set: function () {
						console.warn('THREE.Audio: .startTime is now .play( delay ).');
					},
				},
			}),
			(class {
				constructor(t, e) {
					(this.analyser = t.context.createAnalyser()),
						(this.analyser.fftSize = void 0 !== e ? e : 2048),
						(this.data = new Uint8Array(this.analyser.frequencyBinCount)),
						t.getOutput().connect(this.analyser);
				}
				getFrequencyData() {
					return this.analyser.getByteFrequencyData(this.data), this.data;
				}
				getAverageFrequency() {
					let t = 0;
					const e = this.getFrequencyData();
					for (let n = 0; n < e.length; n++) t += e[n];
					return t / e.length;
				}
			}.prototype.getData = function () {
				return console.warn('THREE.AudioAnalyser: .getData() is now .getFrequencyData().'), this.getFrequencyData();
			}),
			(Es.prototype.updateCubeMap = function (t, e) {
				return console.warn('THREE.CubeCamera: .updateCubeMap() is now .update().'), this.update(t, e);
			});
		(qi.crossOrigin = void 0),
			(qi.loadTexture = function (t, e, n, i) {
				console.warn('THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.');
				const r = new Lu();
				r.setCrossOrigin(this.crossOrigin);
				const o = r.load(t, n, void 0, i);
				return e && (o.mapping = e), o;
			}),
			(qi.loadTextureCube = function (t, e, n, i) {
				console.warn('THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.');
				const r = new Eu();
				r.setCrossOrigin(this.crossOrigin);
				const o = r.load(t, n, void 0, i);
				return e && (o.mapping = e), o;
			}),
			(qi.loadCompressedTexture = function () {
				console.error('THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.');
			}),
			(qi.loadCompressedTextureCube = function () {
				console.error('THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.');
			});
		'undefined' != typeof __THREE_DEVTOOLS__ &&
			__THREE_DEVTOOLS__.dispatchEvent(
				new CustomEvent('register', {
					detail: {
						revision: '120',
					},
				}),
			);
		var bp = n.p + 'img/6fdfe8413757bf44b3911711ebb303fa.png',
			wp = n.p + 'files/649522753c1150deacab71994580ee20.mp3',
			Mp = n.p + 'cdf69d1a66b8f66f4013c0d4e12a11b9.ogg';
		class Sp {
			constructor() {
				let t, e, n, i, r, o;
				this.cloudParticles = [];
				var s = parseInt('0x5E76A3');
				(this.scene = new Vl()),
					(this.camera = new Ts(60, window.innerWidth / window.innerHeight, 1, 1e3)),
					(this.camera.position.z = 1),
					(this.camera.rotation.x = 1.16),
					(this.camera.rotation.y = -0.12),
					(this.camera.rotation.z = 0.27),
					(t = new ld(5592405)),
					this.scene.add(t),
					(e = new ad(16772829)),
					e.position.set(0, 0, 1),
					this.scene.add(e),
					(this.flash = new rd(s, 30, 500, 1.7)),
					(this.flash.originalColor = s),
					this.flash.position.set(200, 300, 100),
					this.scene.add(this.flash),
					(this.renderer = new Fl()),
					(this.scene.fog = new Hl(1514795, 0.002)),
					this.renderer.setClearColor(this.scene.fog.color),
					this.renderer.setSize(window.innerWidth, window.innerHeight),
					document.querySelector('#cloud').appendChild(this.renderer.domElement),
					(this.rainGeo = new ys());
				for (let t = 0; t < 1e4; t++) (n = new $i(400 * Math.random() - 200, 500 * Math.random() - 250, 400 * Math.random() - 200)), (n.velocity = {}), (n.velocity = 0), this.rainGeo.vertices.push(n);
				(i = new Dc({
					color: 8815223,
					size: 0.18,
					transparent: !0,
				})),
					(this.rain = new kc(this.rainGeo, i)),
					this.scene.add(this.rain),
					new Lu().load(bp, (t) => {
						(r = new Is(500, 500)),
							(o = new Qh({
								map: t,
								transparent: !0,
							}));
						for (let t = 0; t < 20; t++) {
							let t = new us(r, o);
							t.position.set(800 * Math.random() - 400, 500, 500 * Math.random() - 450),
								(t.rotation.x = 1.16),
								(t.rotation.y = -0.12),
								(t.rotation.z = 360 * Math.random()),
								(t.material.opacity = 0.7),
								this.cloudParticles.push(t),
								this.scene.add(t);
						}
						this.animate();
					});
				var a = new Fd();
				this.camera.add(a);
				var l = new Ud(a),
					c = new Rd();
				if (-1 != navigator.userAgent.toLowerCase().indexOf('safari')) var h = wp;
				else h = Mp;
				c.load(h, function (t) {
					l.setBuffer(t), l.setLoop(!0), l.setVolume(0.2), l.pause();
				}),
					document.querySelector('#sound').addEventListener('click', () => {
						1 == l.isPlaying ? (l.pause(), document.querySelector('#sound').classList.add('isOff')) : (l.play(), document.querySelector('#sound').classList.remove('isOff'));
					}),
					window.addEventListener('resize', () => {
						(this.camera.aspect = window.innerWidth / window.innerHeight), this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight);
					}),
					(xu.onLoad = function () {
						setTimeout(function () {
							document.querySelector('#loader').classList.add('loaded');
						}, 900),
							setTimeout(function () {
								document.querySelector('#loader').classList.remove('loading'), document.querySelector('#loader').classList.remove('loaded');
							}, 1800);
					});
			}
			animate() {
				this.cloudParticles.forEach((t) => {
					t.rotation.z -= 0.002;
				}),
					this.rainGeo.vertices.forEach((t) => {
						(t.velocity -= 0.1 + 0.1 * Math.random()), (t.y += t.velocity), t.y < -200 && ((t.y = 200), (t.velocity = 0));
					}),
					(this.rainGeo.verticesNeedUpdate = !0),
					(this.rain.rotation.y += 0.002),
					(Math.random() > 0.93 || this.flash.power > 100) &&
						(this.flash.power < 100 && this.flash.position.set(400 * Math.random(), 300 + 200 * Math.random(), 100), (this.flash.power = 50 + 500 * Math.random())),
					setTimeout(() => {
						requestAnimationFrame(() => {
							this.animate();
						});
					}, 1e3 / 30),
					this.renderer.render(this.scene, this.camera);
			}
		}
		window.touch = new (class {
			constructor() {
				(this.hasTouch = screen.width <= 480),
					this.hasTouch || (this.hasTouch = 'ontouchstart' in window),
					this.hasTouch
						? document.querySelector('body').classList.add('touch')
						: (window.addEventListener(
								'touchstart',
								function t() {
									(this.hasTouch = !0), document.querySelector('body').classList.add('touch'), document.querySelector('body').classList.remove('no-touch'), window.removeEventListener('touchstart', t);
								}.bind(this),
								!1,
						  ),
						  document.querySelector('body').classList.add('no-touch'));
			}
		})();
		new h.Core({
			renderers: {
				homepage: zi,
				404: zi,
				403: zi,
				about: Bi,
				default: zi,
			},
			transitions: {
				default: ki,
			},
		}).on('NAVIGATE_END', ({ to: t }) => {}),
			window.addEventListener('load', () => {
				window.cloudThree = new Sp();
			});
	},
]);
