/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";

  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat ? function (e) {
      return oe.flat.call(e);
    } : function (e) {
      return oe.concat.apply([], e);
    },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  ce.fn = ce.prototype = {
    jquery: t,
    constructor: ce,
    length: 0,
    toArray: function () {
      return ae.call(this);
    },
    get: function (e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = ce.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return ce.each(this, e);
    },
    map: function (n) {
      return this.pushStack(ce.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(ae.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(ce.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(ce.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: oe.sort,
    splice: oe.splice
  }, ce.extend = ce.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, ce.extend({
    expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function (e, t, n) {
      m(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n,
        r = 0;
      if (c(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    text: function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (!i) while (t = e[r++]) n += ce.text(t);
      return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : se.call(t, e, n);
    },
    isXMLDoc: function (e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !l.test(t || n && n.nodeName || "HTML");
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function (e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: le
  }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
      g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      M = function () {
        V();
      },
      R = J(function (e) {
        return !0 === e.disabled && fe(e, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        }
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (V(e), e = e || T, C)) {
        if (11 !== p && (u = L.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return k.call(n, a), n;
          } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n;
        } else {
          if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n;
        }
        if (!(h[t + " "] || d && d.test(t))) {
          if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
            (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function F(e) {
      return e[S] = !0, e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return o = +o, F(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) {
        return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $(function (e) {
        return i.call(e, "*");
      }), le.scope = $(function () {
        return T.querySelectorAll(":scope");
      }), le.cssHas = $(function () {
        try {
          return T.querySelector(":has(*,:jqfake)"), !1;
        } catch (e) {
          return !0;
        }
      }), le.getById ? (b.filter.ID = function (e) {
        var t = e.replace(O, P);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(O, P);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), b.find.TAG = function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
      }, b.find.CLASS = function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e);
      }, d = [], $(function (e) {
        var t;
        r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
      }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function (e, t) {
        if (e === t) return a = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1);
      }), T;
    }
    for (e in I.matches = function (e, t) {
      return I(e, null, null, t);
    }, I.matchesSelector = function (e, t) {
      if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
        var n = i.call(e, t);
        if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        h(t, !0);
      }
      return 0 < I(t, T, null, [e]).length;
    }, I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }, I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }, I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return o = null, e;
    }, ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b = ce.expr = {
      cacheLength: 50,
      createPseudo: F,
      match: D,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(O, P).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return fe(e, t);
          };
        },
        CLASS: function (e) {
          var t = s[e + " "];
          return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = I.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (d, e, t, h, g) {
          var v = "nth" !== d.slice(0, 3),
            y = "last" !== d.slice(-4),
            m = "of-type" === e;
          return 1 === h && 0 === g ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u = v !== y ? "nextSibling" : "previousSibling",
              l = e.parentNode,
              c = m && e.nodeName.toLowerCase(),
              f = !n && !m,
              p = !1;
            if (l) {
              if (v) {
                while (u) {
                  o = e;
                  while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                  s = u = "only" === d && !s && "nextSibling";
                }
                return !0;
              }
              if (s = [y ? l.firstChild : l.lastChild], y && f) {
                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) {
                  i[d] = [E, a, p];
                  break;
                }
              } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
              return (p -= g) === h || p % h == 0 && 0 <= p / h;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: F(function (e) {
          var r = [],
            i = [],
            s = ne(e.replace(ve, "$1"));
          return s[S] ? F(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: F(function (t) {
          return function (e) {
            return 0 < I(t, e).length;
          };
        }),
        contains: F(function (t) {
          return t = t.replace(O, P), function (e) {
            return -1 < (e.textContent || ce.text(e)).indexOf(t);
          };
        }),
        lang: F(function (n) {
          return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) {
            var t;
            do {
              if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function (e) {
          var t = ie.location && ie.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === r;
        },
        focus: function (e) {
          return e === function () {
            try {
              return T.activeElement;
            } catch (e) {}
          }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: z(!1),
        disabled: z(!0),
        checked: function (e) {
          return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return q.test(e.nodeName);
        },
        input: function (e) {
          return N.test(e.nodeName);
        },
        button: function (e) {
          return fe(e, "input") && "button" === e.type || fe(e, "button");
        },
        text: function (e) {
          var t;
          return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: X(function () {
          return [0];
        }),
        last: X(function (e, t) {
          return [t - 1];
        }),
        eq: X(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: X(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: X(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: X(function (e, t, n) {
          var r;
          for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: X(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(ve, " ")
        }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first ? function (e, t, n) {
        while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o = [E, f];
        if (n) {
          while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
        } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;else {
          if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
          if ((i[l] = o)[2] = a(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function K(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u = [],
          l = [],
          c = t.length,
          f = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          p = !d || !e && h ? f : Z(f, u, d, n, r);
        if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
          i = Z(s, l), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = s.length;
              while (o--) (a = s[o]) && i.push(p[o] = a);
              y(null, s = [], i, r);
            }
            o = s.length;
            while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
          }
        } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s);
      });
    }
    function te(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) {
          return e === i;
        }, a, !0), l = J(function (e) {
          return -1 < se.call(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = b.relative[e[s].type]) c = [J(K(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e));
        }
        c.push(t);
      }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), n = t.length;
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = E += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == T || (V(o), n = !C);
              while (s = v[a++]) if (s(o, t || T, n)) {
                k.call(r, o);
                break;
              }
              i && (E = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
              f = Z(f);
            }
            k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
          }
          return i && (E = h, w = p), c;
        }, m ? F(r) : r))).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
            break;
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n;
    }
    G.prototype = b.filters = b.pseudos, b.setFilters = new G(), le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
    }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort;
  }();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && ce(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n) ? ce.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? ce.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? ce.grep(e, function (e) {
      return -1 < se.call(n, e) !== r;
    }) : ce.filter(n, e, r);
  }
  ce.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ce.fn.extend({
    find: function (e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
        for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
      return 1 < r ? ce.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(T(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(T(this, e || [], !0));
    },
    is: function (e) {
      return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length;
    }
  });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || k, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ce.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return d(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return d(e, "parentNode", n);
    },
    next: function (e) {
      return A(e, "nextSibling");
    },
    prev: function (e) {
      return A(e, "previousSibling");
    },
    nextAll: function (e) {
      return d(e, "nextSibling");
    },
    prevAll: function (e) {
      return d(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return d(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return d(e, "previousSibling", n);
    },
    siblings: function (e) {
      return h((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return h(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
    }
  }, function (r, i) {
    ce.fn[r] = function (e, t) {
      var n = ce.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  ce.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) {
      n[t] = !0;
    }), n) : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            ce.each(e, function (e, t) {
              v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function () {
          return ce.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return a = u = [], s = t = "", this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        }
      };
    return f;
  }, ce.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function () {
            return i;
          },
          always: function () {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function (e) {
            return a.then(null, e);
          },
          pipe: function () {
            var i = arguments;
            return ce.Deferred(function (r) {
              ce.each(o, function (e, t) {
                var n = v(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function (t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function () {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
              };
            }
            return ce.Deferred(function (e) {
              o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q));
            }).promise();
          },
          promise: function (e) {
            return null != e ? ce.extend(e, a) : a;
          }
        },
        s = {};
      return ce.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = ae.call(arguments),
        o = ce.Deferred(),
        a = function (t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
      while (t--) L(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function (e, t) {
    ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, ce.readyException = function (e) {
    ie.setTimeout(function () {
      throw e;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function (e) {
    return O.then(e)["catch"](function (e) {
      ce.readyException(e);
    }), this;
  }, ce.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
    }
  }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
        return l.call(ce(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[F(t)] = n;else for (r in t) i[F(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !ce.isEmptyObject(t);
    }
  };
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      z.set(e, t, n);
    } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    }
  }), ce.fn.extend({
    data: function (n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
          _.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == typeof n ? this.each(function () {
        z.set(this, n);
      }) : M(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
        this.each(function () {
          z.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        z.remove(this, e);
      });
    }
  }), ce.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = ce.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = ce._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        ce.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return _.get(e, n) || _.access(e, n, {
        empty: ce.Callbacks("once memory").add(function () {
          _.remove(e, [t + "queue", n]);
        })
      });
    }
  }), ce.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = ce.queue(this, t, n);
        ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        ce.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
        r = 1,
        i = ce.Deferred(),
        o = this,
        a = this.length,
        s = function () {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0
    };
  J.getRootNode && (K = function (e) {
    return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
  });
  var ee = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display");
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return ce.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, ce.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ee(this) ? ce(this).show() : ce(this).hide();
      });
    }
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function Se(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n;
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);else if (je.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o);else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
      c = 0;
      while (o = a[c++]) Ce.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return ce().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () {
      ce.event.add(this, t, i, r, n);
    });
  }
  function He(e, r, t) {
    t ? (_.set(e, r, !1), ce.event.add(e, r, {
      namespace: !1,
      handler: function (e) {
        var t,
          n = _.get(this, r);
        if (1 & e.isTrigger && this[r]) {
          if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t;
        } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne);
      }
    })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(D) || [""]).length;
        while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ce.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0);
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = ce.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, ce.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ce.Event = function (e, t) {
    if (!(this instanceof ce.Event)) return new ce.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0;
  }, ce.Event.prototype = {
    constructor: ce.Event,
    isDefaultPrevented: qe,
    isPropagationStopped: qe,
    isImmediatePropagationStopped: qe,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ce.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, ce.event.addProp), ce.each({
    focus: "focusin",
    blur: "focusout"
  }, function (r, i) {
    function o(e) {
      if (C.documentMode) {
        var t = _.get(this, "handle"),
          n = ce.event.fix(e);
        n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n);
      } else ce.event.simulate(i, e.target, ce.event.fix(e));
    }
    ce.event.special[r] = {
      setup: function () {
        var e;
        if (He(this, r, !0), !C.documentMode) return !1;
        (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
      },
      trigger: function () {
        return He(this, r), !0;
      },
      teardown: function () {
        var e;
        if (!C.documentMode) return !1;
        (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
      },
      _default: function (e) {
        return _.get(e.target, r);
      },
      delegateType: i
    }, ce.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i);
        n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i) - 1;
        n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
      }
    };
  }), ce.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    ce.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), ce.fn.extend({
    on: function (e, t, n, r) {
      return Le(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return Le(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () {
        ce.event.remove(this, e, n, t);
      });
    }
  });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e;
  }
  function Ie(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function We(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
    });
    if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);else Fe(e, c);
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
        if (t = n[_.expando]) {
          if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
          n[_.expando] = void 0;
        }
        n[z.expando] && (n[z.expando] = void 0);
      }
    }
  }), ce.fn.extend({
    detach: function (e) {
      return Be(this, e, !0);
    },
    remove: function (e) {
      return Be(this, e);
    },
    text: function (e) {
      return M(this, function (e) {
        return void 0 === e ? ce.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return $e(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return $e(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Re(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ce.clone(this, e, t);
      });
    },
    html: function (e) {
      return M(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ce.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = [];
      return $e(this, arguments, function (e) {
        var t = this.parentNode;
        ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), ce.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    ce.fn[e] = function (e) {
      for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
      boxSizingReliable: function () {
        return e(), r;
      },
      pixelBoxStyles: function () {
        return e(), o;
      },
      pixelPosition: function () {
        return e(), n;
      },
      reliableMarginLeft: function () {
        return e(), s;
      },
      scrollboxSize: function () {
        return e(), i;
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a;
      }
    }));
  }();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return t || (e in Je ? e : Ke[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Qe.length;
      while (n--) if ((e = Qe[n] + t) in Je) return e;
    }(e) || e);
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l;
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), ce.each(["height", "width"], function (e, u) {
    ce.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () {
          return ot(e, u, n);
        });
      },
      set: function (e, t, n) {
        var r,
          i = Xe(e),
          o = !le.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
          s = n ? it(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s);
      }
    };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    ce.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (ce.cssHooks[i + o].set = rt);
  }), ce.fn.extend({
    css: function (e, t) {
      return M(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((ce.Tween = at).prototype = {
    constructor: at,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = at.propHooks[this.prop];
      return e && e.get ? e.get(this) : at.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = at.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
    }
  }).init.prototype = at.prototype, (at.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = at.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, ce.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function () {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, {
          specialEasing: {},
          easing: ce.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return te(n.elem, e, Y.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      v(e) ? (t = e, e = ["*"]) : e = e.match(D);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ee(e),
        v = _.get(e, "fxshow");
      for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ft.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = v && v[r] || ce.style(e, r);
      }
      if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && re([e], !0), p.done(function () {
        for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]);
      })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    }
  }), ce.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? ce.extend({}, e) : {
      complete: n || !n && t || v(e) && e,
      duration: e,
      easing: n && t || t && !v(t) && t
    };
    return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
    }, r;
  }, ce.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = ce.isEmptyObject(t),
        o = ce.speed(e, n, r),
        a = function () {
          var e = yt(this, ce.extend({}, t), o);
          (i || _.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = ce.timers,
          r = _.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || ce.dequeue(this, i);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = _.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = ce.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), ce.each(["toggle", "show", "hide"], function (e, r) {
    var i = ce.fn[r];
    ce.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
    };
  }), ce.each({
    slideDown: gt("show"),
    slideUp: gt("hide"),
    slideToggle: gt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    ce.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), ce.timers = [], ce.fx.tick = function () {
    var e,
      t = 0,
      n = ce.timers;
    for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function (e) {
    ce.timers.push(e), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function () {
    ut || (ut = !0, dt());
  }, ce.fx.stop = function () {
    ut = null;
  }, ce.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ce.fn.delay = function (r, e) {
    return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = ie.setTimeout(e, r);
      t.stop = function () {
        ie.clearTimeout(n);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    }
  }), ce.extend({
    attr: function (e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!le.radioValue && "radio" === t && fe(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
        r = 0,
        i = t && t.match(D);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), mt = {
    set: function (e, t, n) {
      return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = xt[t] || ce.find.attr;
    xt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    }
  }), ce.extend({
    prop: function (e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = ce.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), le.optSelected || (ce.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).addClass(t.call(this, e, Ct(this)));
      }) : (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this;
    },
    removeClass: function (t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).removeClass(t.call(this, e, Ct(this)));
      }) : arguments.length ? (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
          }
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this : this.attr("class", "");
    },
    toggleClass: function (t, n) {
      var e,
        r,
        i,
        o,
        a = typeof t,
        s = "string" === a || Array.isArray(t);
      return v(t) ? this.each(function (e) {
        ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () {
        if (s) for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
      }));
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = v(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0;
    }
  }), ce.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = ce.find.attr(e, "value");
          return null != t ? t : Tt(ce.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
            if (t = ce(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function (e, t) {
          var n,
            r,
            i = e.options,
            o = ce.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ce.each(["radio", "checkbox"], function () {
    ce.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t);
      }
    }, le.checkOn || (ce.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Et = ie.location,
    jt = {
      guid: Date.now()
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !y(n)) {
          for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0
      });
      ce.event.trigger(r, null, t);
    }
  }), ce.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        ce.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return ce.event.trigger(e, t, n, !0);
    }
  });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) ce.each(e, function (e, t) {
      r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== x(e)) i(n, e);else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }, ce.fn.extend({
    serialize: function () {
      return ce.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ce.prop(this, "elements");
        return e ? ce.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
      }).map(function (e, t) {
        var n = ce(this).val();
        return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Lt, "\r\n")
        };
      }).get();
    }
  });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return s[e] = !0, ce.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  Xt.href = Et.href, ce.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": zt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": ce.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
    },
    ajaxPrefilter: Ut(Bt),
    ajaxTransport: Ut(_t),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = ce.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
        x = ce.Deferred(),
        b = ce.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function () {
            return h ? p : null;
          },
          setRequestHeader: function (e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function (e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
        r = C.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
      for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = ie.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return ce.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return ce.get(e, void 0, t, "script");
    }
  }), ce.each(["get", "post"], function (e, i) {
    ce[i] = function (e, t, n, r) {
      return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, ce.isPlainObject(e) && e));
    };
  }), ce.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), ce._evalUrl = function (e, t, n) {
    return ce.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        ce.globalEval(e, t, n);
      }
    });
  }, ce.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return v(n) ? this.each(function (e) {
        ce(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = ce(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = v(t);
      return this.each(function (e) {
        ce(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        ce(this).replaceWith(this.childNodes);
      }), this;
    }
  }), ce.expr.pseudos.hidden = function (e) {
    return !ce.expr.pseudos.visible(e);
  }, ce.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, ce.ajaxSettings.xhr = function () {
    try {
      return new ie.XMLHttpRequest();
    } catch (e) {}
  };
  var Yt = {
      0: 200,
      1223: 204
    },
    Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) {
    var o, a;
    if (le.cors || Qt && !i.crossDomain) return {
      send: function (e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && ie.setTimeout(function () {
            o && a();
          });
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      }
    };
  }), ce.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), ce.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return ce.globalEval(e), e;
      }
    }
  }), ce.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), ce.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = ce("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), C.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return this[e] = !0, e;
    }
  }), ce.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || ce.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
    var r, i, o;
  }, ce.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function (t) {
    return ce.grep(ce.timers, function (e) {
      return t === e.elem;
    }).length;
  }, ce.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = ce.css(e, "position"),
        c = ce(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, ce.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        ce.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - ce.css(r, "marginTop", !0),
          left: t.left - i.left - ce.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
        return e || J;
      });
    }
  }), ce.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    ce.fn[t] = function (e) {
      return M(this, function (e, t, n) {
        var r;
        if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), ce.each(["top", "left"], function (e, n) {
    ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
      if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t;
    });
  }), ce.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    ce.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      ce.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return M(this, function (e, t, n) {
          var r;
          return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ce.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.on("mouseenter", e).on("mouseleave", t || e);
    }
  }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(ae.call(arguments)));
    }).guid = e.guid = e.guid || ce.guid++, i;
  }, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce;
  });
  var tn = ie.jQuery,
    nn = ie.$;
  return ce.noConflict = function (e) {
    return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
/**
 * Swiper 11.1.15
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 18, 2024
 */

var Swiper = function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
  }
  function t(s, a) {
    void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(i => {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: ""
    },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({
      initEvent() {}
    }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => []
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {}
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({
      getPropertyValue: () => ""
    }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  function n(e) {
    return void 0 === e && (e = ""), e.trim().split(" ").filter(e => !!e.trim());
  }
  function l(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function o() {
    return Date.now();
  }
  function d(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = function (e) {
      const t = r();
      let s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);
    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }
  function c(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }
  function p() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let a = 1; a < arguments.length; a += 1) {
      const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
        const s = Object.keys(Object(i)).filter(e => t.indexOf(e) < 0);
        for (let t = 0, a = s.length; t < a; t += 1) {
          const a = s[t],
            r = Object.getOwnPropertyDescriptor(i, a);
          void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a]);
        }
      }
    }
    var s;
    return e;
  }
  function u(e, t, s) {
    e.style.setProperty(t, s);
  }
  function m(e) {
    let {
      swiper: t,
      targetPosition: s,
      side: a
    } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? "next" : "prev",
      p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
      u = () => {
        l = new Date().getTime(), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = .5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
          [a]: c
        }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [a]: c
          });
        }), void i.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  function h(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e;
  }
  function f(e, t) {
    void 0 === t && (t = "");
    const s = [...e.children];
    return e instanceof HTMLSlotElement && s.push(...e.assignedElements()), t ? s.filter(e => e.matches(t)) : s;
  }
  function g(e) {
    try {
      return void console.warn(e);
    } catch (e) {}
  }
  function v(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : n(t))), s;
  }
  function w(e) {
    const t = r(),
      s = a(),
      i = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      c = e === t ? t.scrollX : e.scrollLeft;
    return {
      top: i.top + d - l,
      left: i.left + c - o
    };
  }
  function b(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function y(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function E(e, t) {
    const s = [];
    let a = e.parentElement;
    for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
    return s;
  }
  function x(e, t) {
    t && e.addEventListener("transitionend", function s(a) {
      a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s));
    });
  }
  function S(e, t, s) {
    const a = r();
    return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
  }
  function T(e) {
    return (Array.isArray(e) ? e : [e]).filter(e => !!e);
  }
  function M(e) {
    return t => Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 == 0 ? t + .001 : t;
  }
  let C, P, L;
  function I() {
    return C || (C = function () {
      const e = r(),
        t = a();
      return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
      };
    }()), C;
  }
  function z(e) {
    return void 0 === e && (e = {}), P || (P = function (e) {
      let {
        userAgent: t
      } = void 0 === e ? {} : e;
      const s = I(),
        a = r(),
        i = a.navigator.platform,
        n = t || a.navigator.userAgent,
        l = {
          ios: !1,
          android: !1
        },
        o = a.screen.width,
        d = a.screen.height,
        c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
      let p = n.match(/(iPad).*OS\s([\d_]+)/);
      const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        h = "Win32" === i;
      let f = "MacIntel" === i;
      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l;
    }(e)), P;
  }
  function A() {
    return L || (L = function () {
      const e = r(),
        t = z();
      let s = !1;
      function a() {
        const t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
      }
      if (a()) {
        const t = String(e.navigator.userAgent);
        if (t.includes("Version/")) {
          const [e, a] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
          s = e < 16 || 16 === e && a < 2;
        }
      }
      const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
        n = a();
      return {
        isSafari: s || n,
        needPerspectiveFix: s,
        need3dFix: n || i && t.ios,
        isWebView: i
      };
    }()), L;
  }
  var $ = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return e.split(" ").forEach(e => {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        t.apply(a, r);
      }
      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(e => {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i) => {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
      return (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
          e.apply(a, [t, ...s]);
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
          e.apply(a, s);
        });
      }), e;
    }
  };
  const k = (e, t, s) => {
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
  };
  const O = (e, t, s) => {
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
  };
  const D = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
      if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
          s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove());
        })), t && t.remove();
      }
    },
    G = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    H = e => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          r = [s - t];
        return r.push(...Array.from({
          length: t
        }).map((e, t) => s + a + t)), void e.slides.forEach((t, s) => {
          r.includes(t.column) && G(e, s);
        });
      }
      const r = i + a - 1;
      if (e.params.rewind || e.params.loop) for (let a = i - t; a <= r + t; a += 1) {
        const t = (a % s + s) % s;
        (t < i || t > r) && G(e, t);
      } else for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && G(e, a);
    };
  var B = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10), s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function () {
      const e = this;
      function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
      }
      const s = e.params,
        {
          wrapperEl: a,
          slidesEl: i,
          size: r,
          rtlTranslate: n,
          wrongRTL: l
        } = e,
        o = e.virtual && s.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = f(i, `.${e.params.slideClass}, swiper-slide`),
        p = o ? e.virtual.slides.length : c.length;
      let m = [];
      const h = [],
        g = [];
      let v = s.slidesOffsetBefore;
      "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
      let w = s.slidesOffsetAfter;
      "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
      const y = e.snapGrid.length,
        E = e.slidesGrid.length;
      let x = s.spaceBetween,
        T = -v,
        M = 0,
        C = 0;
      if (void 0 === r) return;
      "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)), e.virtualSize = -x, c.forEach(e => {
        n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
      }), s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""), u(a, "--swiper-centered-offset-after", ""));
      const P = s.grid && s.grid.rows > 1 && e.grid;
      let L;
      P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
      const I = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
      for (let a = 0; a < p; a += 1) {
        let i;
        if (L = 0, c[a] && (i = c[a]), P && e.grid.updateSlide(a, i, c), !c[a] || "none" !== b(i, "display")) {
          if ("auto" === s.slidesPerView) {
            I && (c[a].style[e.getDirectionLabel("width")] = "");
            const r = getComputedStyle(i),
              n = i.style.transform,
              l = i.style.webkitTransform;
            if (n && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);else {
              const e = t(r, "width"),
                s = t(r, "padding-left"),
                a = t(r, "padding-right"),
                n = t(r, "margin-left"),
                l = t(r, "margin-right"),
                o = r.getPropertyValue("box-sizing");
              if (o && "border-box" === o) L = e + n + l;else {
                const {
                  clientWidth: t,
                  offsetWidth: r
                } = i;
                L = e + s + a + n + l + (r - t);
              }
            }
            n && (i.style.transform = n), l && (i.style.webkitTransform = l), s.roundLengths && (L = Math.floor(L));
          } else L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
          c[a] && (c[a].swiperSlideSize = L), g.push(L), s.centeredSlides ? (T = T + L / 2 + M / 2 + x, 0 === M && 0 !== a && (T = T - r / 2 - x), 0 === a && (T = T - r / 2 - x), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), C % s.slidesPerGroup == 0 && m.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), h.push(T), T = T + L + x), e.virtualSize += L + x, M = L, C += 1;
        }
      }
      if (e.virtualSize = Math.max(e.virtualSize, r) + w, n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize + x}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`), P && e.grid.updateWrapperSize(L, m), !s.centeredSlides) {
        const t = [];
        for (let a = 0; a < m.length; a += 1) {
          let i = m[a];
          s.roundLengths && (i = Math.floor(i)), m[a] <= e.virtualSize - r && t.push(i);
        }
        m = t, Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r);
      }
      if (o && s.loop) {
        const t = g[0] + x;
        if (s.slidesPerGroup > 1) {
          const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
            i = t * s.slidesPerGroup;
          for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i);
        }
        for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1) 1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t;
      }
      if (0 === m.length && (m = [0]), 0 !== x) {
        const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
        c.filter((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1).forEach(e => {
          e.style[t] = `${x}px`;
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        g.forEach(t => {
          e += t + (x || 0);
        }), e -= x;
        const t = e > r ? e - r : 0;
        m = m.map(e => e <= 0 ? -v : e > t ? t + w : e);
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        g.forEach(t => {
          e += t + (x || 0);
        }), e -= x;
        const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
        if (e + t < r) {
          const s = (r - e - t) / 2;
          m.forEach((e, t) => {
            m[t] = e - s;
          }), h.forEach((e, t) => {
            h[t] = e + s;
          });
        }
      }
      if (Object.assign(e, {
        slides: c,
        snapGrid: m,
        slidesGrid: h,
        slidesSizesGrid: g
      }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        u(a, "--swiper-centered-offset-before", -m[0] + "px"), u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + s);
      }
      if (p !== d && e.emit("slidesLengthChange"), m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== E && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
        const t = `${s.containerModifierClass}backface-hidden`,
          a = e.el.classList.contains(t);
        p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
      const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || []).forEach(e => {
          s.push(e);
        });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          const e = t.activeIndex + i;
          if (e > t.slides.length && !a) break;
          s.push(n(e));
        }
      } else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
        const e = s[i].offsetHeight;
        r = e > r ? e : r;
      }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
      for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      const t = this,
        s = t.params,
        {
          slides: a,
          rtlTranslate: i,
          snapGrid: r
        } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < a.length; e += 1) {
        const o = a[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
        const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
          p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
          u = -(n - d),
          m = u + t.slidesSizesGrid[e],
          h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
          f = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
        f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)), k(o, f, s.slideVisibleClass), k(o, h, s.slideFullyVisibleClass), o.progress = i ? -c : c, o.originalProgress = i ? -p : p;
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * s || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let {
        progress: i,
        isBeginning: r,
        isEnd: n,
        progressLoop: l
      } = t;
      const o = r,
        d = n;
      if (0 === a) i = 0, r = !0, n = !0;else {
        i = (e - t.minTranslate()) / a;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          a = t.getSlideIndexByData(t.slides.length - 1),
          i = t.slidesGrid[s],
          r = t.slidesGrid[a],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: r,
        isEnd: n
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          slidesEl: a,
          activeIndex: i
        } = e,
        r = e.virtual && s.virtual.enabled,
        n = e.grid && s.grid && s.grid.rows > 1,
        l = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let o, d, c;
      if (r) {
        if (s.loop) {
          let t = i - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`);
        } else o = l(`[data-swiper-slide-index="${i}"]`);
      } else n ? (o = t.filter(e => e.column === i)[0], c = t.filter(e => e.column === i + 1)[0], d = t.filter(e => e.column === i - 1)[0]) : o = t[i];
      o && (n || (c = function (e, t) {
        const s = [];
        for (; e.nextElementSibling;) {
          const a = e.nextElementSibling;
          t ? a.matches(t) && s.push(a) : s.push(a), e = a;
        }
        return s;
      }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function (e, t) {
        const s = [];
        for (; e.previousElementSibling;) {
          const a = e.previousElementSibling;
          t ? a.matches(t) && s.push(a) : s.push(a), e = a;
        }
        return s;
      }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach(e => {
        O(e, e === o, s.slideActiveClass), O(e, e === c, s.slideNextClass), O(e, e === d, s.slidePrevClass);
      }), e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: a,
          params: i,
          activeIndex: r,
          realIndex: n,
          snapIndex: l
        } = t;
      let o,
        d = e;
      const c = e => {
        let s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
      };
      if (void 0 === d && (d = function (e) {
        const {
            slidesGrid: t,
            params: s
          } = e,
          a = e.rtlTranslate ? e.translate : -e.translate;
        let i;
        for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
        return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i;
      }(t)), a.indexOf(s) >= 0) o = a.indexOf(s);else {
        const e = Math.min(i.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / i.slidesPerGroup);
      }
      if (o >= a.length && (o = a.length - 1), d === r && !t.params.loop) return void (o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
      if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
      const p = t.grid && i.grid && i.grid.rows > 1;
      let u;
      if (t.virtual && i.virtual.enabled && i.loop) u = c(d);else if (p) {
        const e = t.slides.filter(e => e.column === d)[0];
        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows);
      } else if (t.slides[d]) {
        const e = t.slides[d].getAttribute("data-swiper-slide-index");
        u = e ? parseInt(e, 10) : d;
      } else u = d;
      Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: n,
        realIndex: u,
        previousIndex: r,
        activeIndex: d
      }), t.initialized && H(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"));
    },
    updateClickedSlide: function (e, t) {
      const s = this,
        a = s.params;
      let i = e.closest(`.${a.slideClass}, swiper-slide`);
      !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
        !i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e);
      });
      let r,
        n = !1;
      if (i) for (let e = 0; e < s.slides.length; e += 1) if (s.slides[e] === i) {
        n = !0, r = e;
        break;
      }
      if (!i || !n) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
      s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
    }
  };
  var N = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const {
        params: t,
        rtlTranslate: s,
        translate: a,
        wrapperEl: i
      } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = d(i, e);
      return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: a,
          params: i,
          wrapperEl: r,
          progress: n
        } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
      const c = s.maxTranslate() - s.minTranslate();
      l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      const r = this,
        {
          params: n,
          wrapperEl: l
        } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;else {
          if (!r.support.smoothScroll) return m({
            swiper: r,
            targetPosition: -c,
            side: e ? "left" : "top"
          }), !0;
          l.scrollTo({
            [e ? "left" : "top"]: -c,
            behavior: "smooth"
          });
        }
        return !0;
      }
      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, s && r.emit("transitionEnd"));
      }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
    }
  };
  function X(e) {
    let {
      swiper: t,
      runCallbacks: s,
      direction: a,
      step: i
    } = e;
    const {
      activeIndex: r,
      previousIndex: n
    } = t;
    let l = a;
    if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
    }
  }
  var Y = {
    slideTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: f
      } = r;
      if (!f && !a && !i || r.destroyed || r.animating && l.preventInteractionOnTransition) return !1;
      void 0 === t && (t = r.params.speed);
      const g = Math.min(r.params.slidesPerGroupSkip, n);
      let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
        const t = -Math.floor(100 * w),
          s = Math.floor(100 * d[e]),
          a = Math.floor(100 * d[e + 1]);
        void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e);
      }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
        if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
      }
      let b;
      n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset";
      const y = r.virtual && r.params.virtual.enabled;
      if (!(y && i) && (u && -w === r.translate || !u && w === r.translate)) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? w : -w;
        if (0 === t) y && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          h[e ? "scrollLeft" : "scrollTop"] = s;
        })) : h[e ? "scrollLeft" : "scrollTop"] = s, y && requestAnimationFrame(() => {
          r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
        });else {
          if (!r.support.smoothScroll) return m({
            swiper: r,
            targetPosition: s,
            side: e ? "left" : "top"
          }), !0;
          h.scrollTo({
            [e ? "left" : "top"]: s,
            behavior: "smooth"
          });
        }
        return !0;
      }
      return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
      }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function (e, t, s, a) {
      if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) {
        e = parseInt(e, 10);
      }
      const i = this;
      if (i.destroyed) return;
      void 0 === t && (t = i.params.speed);
      const r = i.grid && i.params.grid && i.params.grid.rows > 1;
      let n = e;
      if (i.params.loop) if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;else {
        let e;
        if (r) {
          const t = n * i.params.grid.rows;
          e = i.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column;
        } else e = i.getSlideIndexByData(n);
        const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
          {
            centeredSlides: s
          } = i.params;
        let l = i.params.slidesPerView;
        "auto" === l ? l = i.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && l % 2 == 0 && (l += 1));
        let o = t - e < l;
        if (s && (o = o || e < Math.ceil(l / 2)), a && s && "auto" !== i.params.slidesPerView && !r && (o = !1), o) {
          const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
          i.loopFix({
            direction: a,
            slideTo: !0,
            activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
            slideRealIndex: "next" === a ? i.realIndex : void 0
          });
        }
        if (r) {
          const e = n * i.params.grid.rows;
          n = i.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column;
        } else n = i.getSlideIndexByData(n);
      }
      return requestAnimationFrame(() => {
        i.slideTo(n, t, s, a);
      }), i;
    },
    slideNext: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this,
        {
          enabled: i,
          params: r,
          animating: n
        } = a;
      if (!i || a.destroyed) return a;
      void 0 === e && (e = a.params.speed);
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = a.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        if (a.loopFix({
          direction: "next"
        }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
          a.slideTo(a.activeIndex + o, e, t, s);
        }), !0;
      }
      return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          snapGrid: r,
          slidesGrid: n,
          rtlTranslate: l,
          enabled: o,
          animating: d
        } = a;
      if (!o || a.destroyed) return a;
      void 0 === e && (e = a.params.speed);
      const c = a.virtual && i.virtual.enabled;
      if (i.loop) {
        if (d && !c && i.loopPreventsSliding) return !1;
        a.loopFix({
          direction: "prev"
        }), a._clientLeft = a.wrapperEl.clientLeft;
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? a.translate : -a.translate),
        m = r.map(e => p(e));
      let h = r[m.indexOf(u) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }), void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a.isBeginning) {
        const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame(() => {
        a.slideTo(f, e, t, s);
      }), !0) : a.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this;
      if (!a.destroyed) return void 0 === e && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s);
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === t && (t = !0), void 0 === a && (a = .5);
      const i = this;
      if (i.destroyed) return;
      void 0 === e && (e = i.params.speed);
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function () {
      const e = this;
      if (e.destroyed) return;
      const {
          params: t,
          slidesEl: s
        } = e,
        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l(() => {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l(() => {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var R = {
    loopCreate: function (e) {
      const t = this,
        {
          params: s,
          slidesEl: a
        } = t;
      if (!s.loop || t.virtual && t.params.virtual.enabled) return;
      const i = () => {
          f(a, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          });
        },
        r = t.grid && s.grid && s.grid.rows > 1,
        n = s.slidesPerGroup * (r ? s.grid.rows : 1),
        l = t.slides.length % n != 0,
        o = r && t.slides.length % s.grid.rows != 0,
        d = e => {
          for (let a = 0; a < e; a += 1) {
            const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
            t.slidesEl.append(e);
          }
        };
      if (l) {
        if (s.loopAddBlankSlides) {
          d(n - t.slides.length % n), t.recalcSlides(), t.updateSlides();
        } else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i();
      } else if (o) {
        if (s.loopAddBlankSlides) {
          d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides();
        } else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i();
      } else i();
      t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next"
      });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: a,
        setTranslate: i,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
          slides: d,
          allowSlidePrev: c,
          allowSlideNext: p,
          slidesEl: u,
          params: m
        } = o,
        {
          centeredSlides: h
        } = m;
      if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
      let f = m.slidesPerView;
      "auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)), h && f % 2 == 0 && (f += 1));
      const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
      let w = v;
      w % v != 0 && (w += v - w % v), w += m.loopAdditionalSlides, o.loopedSlides = w;
      const b = o.grid && m.grid && m.grid.rows > 1;
      d.length < f + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
      const y = [],
        E = [];
      let x = o.activeIndex;
      void 0 === r ? r = o.getSlideIndex(d.filter(e => e.classList.contains(m.slideActiveClass))[0]) : x = r;
      const S = "next" === a || !a,
        T = "prev" === a || !a;
      let M = 0,
        C = 0;
      const P = b ? Math.ceil(d.length / m.grid.rows) : d.length,
        L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + .5 : 0);
      if (L < w) {
        M = Math.max(w - L, v);
        for (let e = 0; e < w - L; e += 1) {
          const t = e - Math.floor(e / P) * P;
          if (b) {
            const e = P - t - 1;
            for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t);
          } else y.push(P - t - 1);
        }
      } else if (L + f > P - w) {
        C = Math.max(L - (P - 2 * w), v);
        for (let e = 0; e < C; e += 1) {
          const t = e - Math.floor(e / P) * P;
          b ? d.forEach((e, s) => {
            e.column === t && E.push(s);
          }) : E.push(t);
        }
      }
      if (o.__preventObserver__ = !0, requestAnimationFrame(() => {
        o.__preventObserver__ = !1;
      }), T && y.forEach(e => {
        d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1;
      }), S && E.forEach(e => {
        d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1;
      }), o.recalcSlides(), "auto" === m.slidesPerView ? o.updateSlides() : b && (y.length > 0 && T || E.length > 0 && S) && o.slides.forEach((e, t) => {
        o.grid.updateSlide(t, e, o.slides);
      }), m.watchSlidesProgress && o.updateSlidesOffset(), s) if (y.length > 0 && T) {
        if (void 0 === t) {
          const e = o.slidesGrid[x],
            t = o.slidesGrid[x + M] - e;
          l ? o.setTranslate(o.translate - t) : (o.slideTo(x + Math.ceil(M), 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
        } else if (i) {
          const e = b ? y.length / m.grid.rows : y.length;
          o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
        }
      } else if (E.length > 0 && S) if (void 0 === t) {
        const e = o.slidesGrid[x],
          t = o.slidesGrid[x - C] - e;
        l ? o.setTranslate(o.translate - t) : (o.slideTo(x - C, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
      } else {
        const e = b ? E.length / m.grid.rows : E.length;
        o.slideTo(o.activeIndex - e, 0, !1, !0);
      }
      if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) {
        const e = {
          slideRealIndex: t,
          direction: a,
          setTranslate: i,
          activeSlideIndex: r,
          byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(t => {
          !t.destroyed && t.params.loop && t.loopFix({
            ...e,
            slideTo: t.params.slidesPerView === m.slidesPerView && s
          });
        }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
          ...e,
          slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
        });
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        {
          params: t,
          slidesEl: s
        } = e;
      if (!t.loop || e.virtual && e.params.virtual.enabled) return;
      e.recalcSlides();
      const a = [];
      e.slides.forEach(e => {
        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        a[t] = e;
      }), e.slides.forEach(e => {
        e.removeAttribute("data-swiper-slide-index");
      }), a.forEach(e => {
        s.append(e);
      }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
    }
  };
  function q(e, t, s) {
    const a = r(),
      {
        params: i
      } = e,
      n = i.edgeSwipeDetection,
      l = i.edgeSwipeThreshold;
    return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(), !0);
  }
  function F(e) {
    const t = this,
      s = a();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const n = t.touchEventsData;
    if ("pointerdown" === i.type) {
      if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
      n.pointerId = i.pointerId;
    } else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
    if ("touchstart" === i.type) return void q(t, i, i.targetTouches[0].pageX);
    const {
      params: l,
      touches: d,
      enabled: c
    } = t;
    if (!c) return;
    if (!l.simulateTouch && "mouse" === i.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = i.target;
    if ("wrapper" === l.touchEventsTarget && !function (e, t) {
      const s = t.contains(e);
      if (!s && t instanceof HTMLSlotElement) return [...t.assignedElements()].includes(e);
      return s;
    }(p, t.wrapperEl)) return;
    if ("which" in i && 3 === i.which) return;
    if ("button" in i && i.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
      m = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && m && (p = m[0]);
    const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
      f = !(!i.target || !i.target.shadowRoot);
    if (l.noSwiping && (f ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        if (!s || s === a() || s === r()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
      }(t);
    }(h, p) : p.closest(h))) return void (t.allowClick = !0);
    if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
    d.currentX = i.pageX, d.currentY = i.pageY;
    const g = d.currentX,
      v = d.currentY;
    if (!q(t, i, g)) return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), d.startX = g, d.startY = v, n.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1);
    let w = !0;
    p.matches(n.focusableElements) && (w = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !p.matches(n.focusableElements)) && s.activeElement.blur();
    const b = w && t.allowTouchMove && l.touchStartPreventDefault;
    !l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i);
  }
  function V(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      {
        params: r,
        touches: n,
        rtlTranslate: l,
        enabled: d
      } = s;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let c,
      p = e;
    if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
      if (null !== i.touchId) return;
      if (p.pointerId !== i.pointerId) return;
    }
    if ("touchmove" === p.type) {
      if (c = [...p.changedTouches].filter(e => e.identifier === i.touchId)[0], !c || c.identifier !== i.touchId) return;
    } else c = p;
    if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
    const u = c.pageX,
      m = c.pageY;
    if (p.preventedByNestedSwiper) return n.startX = u, void (n.startY = m);
    if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
      startX: u,
      startY: m,
      currentX: u,
      currentY: m
    }), i.touchStartTime = o()));
    if (r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate()) return;
    if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    i.allowTouchCallbacks && s.emit("touchMove", p), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = m;
    const h = n.currentX - n.startX,
      f = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
      let e;
      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === p.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
    let g = s.isHorizontal() ? h : f,
      v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), n.diff = g, g *= r.touchRatio, l && (g = -g, v = -v);
    const w = s.touchesDirection;
    s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
    const b = s.params.loop && !r.cssMode,
      y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
    if (!i.isMoved) {
      if (b && y && s.loopFix({
        direction: s.swipeDirection
      }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0
          }
        });
        s.wrapperEl.dispatchEvent(e);
      }
      i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p);
    }
    if (new Date().getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(n, {
      startX: u,
      startY: m,
      currentX: u,
      currentY: m,
      startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
    s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
    let E = !0,
      x = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (x = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > s.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), i.currentTranslate < s.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }
    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }
  function _(e) {
    const t = this,
      s = t.touchEventsData;
    let a,
      i = e;
    i.originalEvent && (i = i.originalEvent);
    if ("touchend" === i.type || "touchcancel" === i.type) {
      if (a = [...i.changedTouches].filter(e => e.identifier === s.touchId)[0], !a || a.identifier !== s.touchId) return;
    } else {
      if (null !== s.touchId) return;
      if (i.pointerId !== s.pointerId) return;
      a = i;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
      if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    s.pointerId = null, s.touchId = null;
    const {
      params: r,
      touches: n,
      rtlTranslate: d,
      slidesGrid: c,
      enabled: p
    } = t;
    if (!p) return;
    if (!r.simulateTouch && "mouse" === i.pointerType) return;
    if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const u = o(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = i.path || i.composedPath && i.composedPath();
      t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i);
    }
    if (s.lastClickTime = o(), l(() => {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    let h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
    if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    const f = h >= -t.maxTranslate() && !t.params.loop;
    let g = 0,
      v = t.slidesSizesGrid[0];
    for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      void 0 !== c[e + t] ? (f || h >= c[e] && h < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (f || h >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2]);
    }
    let w = null,
      b = null;
    r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
    const y = (h - c[g]) / v,
      E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (m > r.longSwipesMs) {
      if (!r.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + E) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(g + E) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g));
    } else {
      if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g));
    }
  }
  function W() {
    const e = this,
      {
        params: t,
        el: s
      } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: a,
        allowSlidePrev: i,
        snapGrid: r
      } = e,
      n = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function j(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function U() {
    const e = this,
      {
        wrapperEl: t,
        rtlTranslate: s,
        enabled: a
      } = e;
    if (!a) return;
    let i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
  function K(e) {
    const t = this;
    D(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
  }
  function Z() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  const Q = (e, t) => {
    const s = a(),
      {
        params: i,
        el: r,
        wrapperEl: n,
        device: l
      } = e,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    r && "string" != typeof r && (s[d]("touchstart", e.onDocumentTouchStart, {
      passive: !1,
      capture: o
    }), r[d]("touchstart", e.onTouchStart, {
      passive: !1
    }), r[d]("pointerdown", e.onTouchStart, {
      passive: !1
    }), s[d]("touchmove", e.onTouchMove, {
      passive: !1,
      capture: o
    }), s[d]("pointermove", e.onTouchMove, {
      passive: !1,
      capture: o
    }), s[d]("touchend", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerup", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointercancel", e.onTouchEnd, {
      passive: !0
    }), s[d]("touchcancel", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerout", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerleave", e.onTouchEnd, {
      passive: !0
    }), s[d]("contextmenu", e.onTouchEnd, {
      passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", W, !0) : e[c]("observerUpdate", W, !0), r[d]("load", e.onLoad, {
      capture: !0
    }));
  };
  const J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var ee = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
  function te(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {
        enabled: !0
      }), "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0), a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
        enabled: !1
      }), p(t, s)) : p(t, s)) : p(t, s);
    };
  }
  const se = {
      eventsEmitter: $,
      update: B,
      translate: N,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            {
              params: a
            } = s;
          a.cssMode || (a.autoHeight && s.updateAutoHeight(), X({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "Start"
          }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            {
              params: a
            } = s;
          s.animating = !1, a.cssMode || (s.setTransition(0), X({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "End"
          }));
        }
      },
      slide: Y,
      loop: R,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
          const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
            t.__preventObserver__ = !1;
          });
        },
        unsetGrabCursor: function () {
          const e = this;
          e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
            e.__preventObserver__ = !1;
          }));
        }
      },
      events: {
        attachEvents: function () {
          const e = this,
            {
              params: t
            } = e;
          e.onTouchStart = F.bind(e), e.onTouchMove = V.bind(e), e.onTouchEnd = _.bind(e), e.onDocumentTouchStart = Z.bind(e), t.cssMode && (e.onScroll = U.bind(e)), e.onClick = j.bind(e), e.onLoad = K.bind(e), Q(e, "on");
        },
        detachEvents: function () {
          Q(this, "off");
        }
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            {
              realIndex: t,
              initialized: s,
              params: a,
              el: i
            } = e,
            r = a.breakpoints;
          if (!r || r && 0 === Object.keys(r).length) return;
          const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          const l = (n in r ? r[n] : void 0) || e.originalParams,
            o = J(e, a),
            d = J(e, l),
            c = e.params.grabCursor,
            u = l.grabCursor,
            m = a.enabled;
          o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), c && !u ? e.unsetGrabCursor() : !c && u && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
            if (void 0 === l[t]) return;
            const s = a[t] && a[t].enabled,
              i = l[t] && l[t].enabled;
            s && !i && e[t].disable(), !s && i && e[t].enable();
          });
          const h = l.direction && l.direction !== a.direction,
            f = a.loop && (l.slidesPerView !== a.slidesPerView || h),
            g = a.loop;
          h && s && e.changeDirection(), p(e.params, l);
          const v = e.params.enabled,
            w = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), m && !v ? e.disable() : !m && v && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), s && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !g && w ? (e.loopCreate(t), e.updateSlides()) : g && !w && e.loopDestroy()), e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, s) {
          if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
          let a = !1;
          const i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map(e => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return {
                  value: n * t,
                  point: e
                };
              }
              return {
                value: e,
                point: e
              };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const {
              point: r,
              value: n
            } = l[e];
            "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
          }
          return a || "max";
        }
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            {
              isLocked: t,
              params: s
            } = e,
            {
              slidesOffsetBefore: a
            } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: s,
              rtl: a,
              el: i,
              device: r
            } = e,
            n = function (e, t) {
              const s = [];
              return e.forEach(e => {
                "object" == typeof e ? Object.keys(e).forEach(a => {
                  e[a] && s.push(t + a);
                }) : "string" == typeof e && s.push(t + e);
              }), s;
            }(["initialized", s.direction, {
              "free-mode": e.params.freeMode && s.freeMode.enabled
            }, {
              autoheight: s.autoHeight
            }, {
              rtl: a
            }, {
              grid: s.grid && s.grid.rows > 1
            }, {
              "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
            }, {
              android: r.android
            }, {
              ios: r.ios
            }, {
              "css-mode": s.cssMode
            }, {
              centered: s.cssMode && s.centeredSlides
            }, {
              "watch-progress": s.watchSlidesProgress
            }], s.containerModifierClass);
          t.push(...n), i.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const {
            el: e,
            classNames: t
          } = this;
          e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses());
        }
      }
    },
    ae = {};
  class ie {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
      1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
      const n = a();
      if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
        const e = [];
        return n.querySelectorAll(t.el).forEach(s => {
          const a = p({}, t, {
            el: s
          });
          e.push(new ie(a));
        }), e;
      }
      const l = this;
      l.__swiper__ = !0, l.support = I(), l.device = z({
        userAgent: t.userAgent
      }), l.browser = A(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const o = {};
      l.modules.forEach(e => {
        e({
          params: t,
          swiper: l,
          extendParams: te(t, o),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      const d = p({}, ee, o);
      return l.params = p({}, d, ae, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
        l.on(e, l.params.on[e]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: () => "horizontal" === l.params.direction,
        isVertical: () => "vertical" === l.params.direction,
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), l.emit("_swiper"), l.params.init && l.init(), l;
    }
    getDirectionLabel(e) {
      return this.isHorizontal() ? e : {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom"
      }[e];
    }
    getSlideIndex(e) {
      const {
          slidesEl: t,
          params: s
        } = this,
        a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
      return y(e) - a;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0]);
    }
    recalcSlides() {
      const {
        slidesEl: e,
        params: t
      } = this;
      this.slides = f(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach(s => {
        const a = e.getSlideClasses(s);
        t.push({
          slideEl: s,
          classNames: a
        }), e.emit("_slideClass", s, a);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l
      } = this;
      let o = 1;
      if ("number" == typeof s.slidesPerView) return s.slidesPerView;
      if (s.centeredSlides) {
        let e,
          t = a[l] ? Math.ceil(a[l].swiperSlideSize) : 0;
        for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += Math.ceil(a[s].swiperSlideSize), o += 1, t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
      } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
        (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
      } else for (let e = l - 1; e >= 0; e -= 1) {
        i[l] - i[e] < n && (o += 1);
      }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {
        snapGrid: t,
        params: s
      } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
        t.complete && D(e, t);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();else {
        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
          const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || a();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(t => {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), s.emit("changeDirection"), t && s.update()), s;
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
      s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
      const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(a());
        }
        return f(s, a())[0];
      })();
      return !i && t.params.createElements && (i = v("div", t.params.wrapperClass), s.append(i), f(s, `.${t.params.slideClass}`).forEach(e => {
        i.append(e);
      })), Object.assign(t, {
        el: s,
        wrapperEl: i,
        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
        wrongRTL: "-webkit-box" === b(i, "display")
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      if (!1 === t.mount(e)) return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
      const s = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach(e => {
        e.complete ? D(t, e) : e.addEventListener("load", e => {
          D(t, e.target);
        });
      }), H(t), t.initialized = !0, H(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        {
          params: a,
          el: i,
          wrapperEl: r,
          slides: n
        } = s;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), r && r.removeAttribute("style"), n && n.length && n.forEach(e => {
        e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
      })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
        s.off(e);
      }), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function (e) {
        const t = e;
        Object.keys(t).forEach(e => {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      }(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
      p(ae, e);
    }
    static get extendedDefaults() {
      return ae;
    }
    static get defaults() {
      return ee;
    }
    static installModule(e) {
      ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
      const t = ie.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach(e => ie.installModule(e)), ie) : (ie.installModule(e), ie);
    }
  }
  function re(e, t, s, a) {
    return e.params.createElements && Object.keys(a).forEach(i => {
      if (!s[i] && !0 === s.auto) {
        let r = f(e.el, `.${a[i]}`)[0];
        r || (r = v("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r;
      }
    }), s;
  }
  function ne(e) {
    return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function le(e) {
    const t = this,
      {
        params: s,
        slidesEl: a
      } = t;
    s.loop && t.loopDestroy();
    const i = e => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        t.innerHTML = e, a.append(t.children[0]), t.innerHTML = "";
      } else a.append(e);
    };
    if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);else i(e);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update();
  }
  function oe(e) {
    const t = this,
      {
        params: s,
        activeIndex: a,
        slidesEl: i
      } = t;
    s.loop && t.loopDestroy();
    let r = a + 1;
    const n = e => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = "";
      } else i.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
      r = a + e.length;
    } else n(e);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1);
  }
  function de(e, t) {
    const s = this,
      {
        params: a,
        activeIndex: i,
        slidesEl: r
      } = s;
    let n = i;
    a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides[t];
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function ce(e) {
    const t = this,
      {
        params: s,
        activeIndex: a
      } = t;
    let i = a;
    s.loop && (i -= t.loopedSlides, t.loopDestroy());
    let r,
      n = i;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
      n = Math.max(n, 0);
    } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function pe() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function ue(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d
    } = e;
    let c;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", () => {
      s.params.effect === t && i();
    }), a("setTransition", (e, a) => {
      s.params.effect === t && r(a);
    }), a("transitionEnd", () => {
      if (s.params.effect === t && o) {
        if (!d || !d().slideShadows) return;
        s.slides.forEach(e => {
          e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove());
        }), o();
      }
    }), a("virtualUpdate", () => {
      s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(() => {
        c && s.slides && s.slides.length && (i(), c = !1);
      }));
    });
  }
  function me(e, t) {
    const s = h(t);
    return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s;
  }
  function he(e) {
    let {
      swiper: t,
      duration: s,
      transformElements: a,
      allSlides: i
    } = e;
    const {
      activeIndex: r
    } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      e = i ? a : a.filter(e => {
        const s = e.classList.contains("swiper-slide-transform") ? (e => {
          if (!e.parentElement) return t.slides.filter(t => t.shadowRoot && t.shadowRoot === e.parentNode)[0];
          return e.parentElement;
        })(e) : e;
        return t.getSlideIndex(s) === r;
      }), e.forEach(e => {
        x(e, () => {
          if (s) return;
          if (!t || t.destroyed) return;
          s = !0, t.animating = !1;
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0
          });
          t.wrapperEl.dispatchEvent(e);
        });
      });
    }
  }
  function fe(e, t, s) {
    const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`,
      i = h(t);
    let r = i.querySelector(`.${a.split(" ").join(".")}`);
    return r || (r = v("div", a.split(" ")), i.append(r)), r;
  }
  Object.keys(se).forEach(e => {
    Object.keys(se[e]).forEach(t => {
      ie.prototype[t] = se[e][t];
    });
  }), ie.use([function (e) {
    let {
      swiper: t,
      on: s,
      emit: a
    } = e;
    const i = r();
    let n = null,
      l = null;
    const o = () => {
        t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
      },
      d = () => {
        t && !t.destroyed && t.initialized && a("orientationchange");
      };
    s("init", () => {
      t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(e => {
        l = i.requestAnimationFrame(() => {
          const {
            width: s,
            height: a
          } = t;
          let i = s,
            r = a;
          e.forEach(e => {
            let {
              contentBoxSize: s,
              contentRect: a,
              target: n
            } = e;
            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
          }), i === s && r === a || o();
        });
      }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
    }), s("destroy", () => {
      l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const n = [],
      l = r(),
      o = function (e, s) {
        void 0 === s && (s = {});
        const a = new (l.MutationObserver || l.WebkitMutationObserver)(e => {
          if (t.__preventObserver__) return;
          if (1 === e.length) return void i("observerUpdate", e[0]);
          const s = function () {
            i("observerUpdate", e[0]);
          };
          l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0);
        });
        a.observe(e, {
          attributes: void 0 === s.attributes || s.attributes,
          childList: t.isElement || (void 0 === s.childList || s).childList,
          characterData: void 0 === s.characterData || s.characterData
        }), n.push(a);
      };
    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), a("init", () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const e = E(t.hostEl);
          for (let t = 0; t < e.length; t += 1) o(e[t]);
        }
        o(t.hostEl, {
          childList: t.params.observeSlideChildren
        }), o(t.wrapperEl, {
          attributes: !1
        });
      }
    }), a("destroy", () => {
      n.forEach(e => {
        e.disconnect();
      }), n.splice(0, n.length);
    });
  }]);
  const ge = [function (e) {
    let t,
      {
        swiper: s,
        extendParams: i,
        on: r,
        emit: n
      } = e;
    i({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    const l = a();
    s.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    const o = l.createElement("div");
    function d(e, t) {
      const a = s.params.virtual;
      if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      let i;
      return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" == typeof i && (o.innerHTML = i, i = o.children[0])) : i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass), i.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i;
    }
    function c(e, t) {
      const {
        slidesPerView: a,
        slidesPerGroup: i,
        centeredSlides: r,
        loop: l,
        initialSlide: o
      } = s.params;
      if (t && !l && o > 0) return;
      const {
          addSlidesBefore: c,
          addSlidesAfter: p
        } = s.params.virtual,
        {
          from: u,
          to: m,
          slides: h,
          slidesGrid: g,
          offset: v
        } = s.virtual;
      s.params.cssMode || s.updateActiveIndex();
      const w = s.activeIndex || 0;
      let b, y, E;
      b = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", r ? (y = Math.floor(a / 2) + i + p, E = Math.floor(a / 2) + i + c) : (y = a + (i - 1) + p, E = (l ? a : i) + c);
      let x = w - E,
        S = w + y;
      l || (x = Math.max(x, 0), S = Math.min(S, h.length - 1));
      let T = (s.slidesGrid[x] || 0) - (s.slidesGrid[0] || 0);
      function M() {
        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate");
      }
      if (l && w >= E ? (x -= E, r || (T += s.slidesGrid[0])) : l && w < E && (x = -E, r && (T += s.slidesGrid[0])), Object.assign(s.virtual, {
        from: x,
        to: S,
        offset: T,
        slidesGrid: s.slidesGrid,
        slidesBefore: E,
        slidesAfter: y
      }), u === x && m === S && !e) return s.slidesGrid !== g && T !== v && s.slides.forEach(e => {
        e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px";
      }), s.updateProgress(), void n("virtualUpdate");
      if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
        offset: T,
        from: x,
        to: S,
        slides: function () {
          const e = [];
          for (let t = x; t <= S; t += 1) e.push(h[t]);
          return e;
        }()
      }), void (s.params.virtual.renderExternalUpdate ? M() : n("virtualUpdate"));
      const C = [],
        P = [],
        L = e => {
          let t = e;
          return e < 0 ? t = h.length + e : t >= h.length && (t -= h.length), t;
        };
      if (e) s.slides.filter(e => e.matches(`.${s.params.slideClass}, swiper-slide`)).forEach(e => {
        e.remove();
      });else for (let e = u; e <= m; e += 1) if (e < x || e > S) {
        const t = L(e);
        s.slides.filter(e => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`)).forEach(e => {
          e.remove();
        });
      }
      const I = l ? -h.length : 0,
        z = l ? 2 * h.length : h.length;
      for (let t = I; t < z; t += 1) if (t >= x && t <= S) {
        const s = L(t);
        void 0 === m || e ? P.push(s) : (t > m && P.push(s), t < u && C.push(s));
      }
      if (P.forEach(e => {
        s.slidesEl.append(d(h[e], e));
      }), l) for (let e = C.length - 1; e >= 0; e -= 1) {
        const t = C[e];
        s.slidesEl.prepend(d(h[t], t));
      } else C.sort((e, t) => t - e), C.forEach(e => {
        s.slidesEl.prepend(d(h[e], e));
      });
      f(s.slidesEl, ".swiper-slide, swiper-slide").forEach(e => {
        e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px";
      }), M();
    }
    r("beforeInit", () => {
      if (!s.params.virtual.enabled) return;
      let e;
      if (void 0 === s.passedParams.virtual.slides) {
        const t = [...s.slidesEl.children].filter(e => e.matches(`.${s.params.slideClass}, swiper-slide`));
        t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove();
        }));
      }
      e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, c(!1, !0);
    }), r("setTranslate", () => {
      s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
        c();
      }, 100)) : c());
    }), r("init update resize", () => {
      s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
    }), Object.assign(s.virtual, {
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);
        c(!0);
      },
      prependSlide: function (e) {
        const t = s.activeIndex;
        let a = t + 1,
          i = 1;
        if (Array.isArray(e)) {
          for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
          a = t + e.length, i = e.length;
        } else s.virtual.slides.unshift(e);
        if (s.params.virtual.cache) {
          const e = s.virtual.cache,
            t = {};
          Object.keys(e).forEach(s => {
            const a = e[s],
              r = a.getAttribute("data-swiper-slide-index");
            r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a;
          }), s.virtual.cache = t;
        }
        c(!0), s.slideTo(a, 0);
      },
      removeSlide: function (e) {
        if (null == e) return;
        let t = s.activeIndex;
        if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.params.virtual.cache && (delete s.virtual.cache[e[a]], Object.keys(s.virtual.cache).forEach(t => {
          t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t]);
        })), s.virtual.slides.splice(e[a], 1), e[a] < t && (t -= 1), t = Math.max(t, 0);else s.params.virtual.cache && (delete s.virtual.cache[e], Object.keys(s.virtual.cache).forEach(t => {
          t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t]);
        })), s.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
        c(!0), s.slideTo(t, 0);
      },
      removeAllSlides: function () {
        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0);
      },
      update: c
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i,
      emit: n
    } = e;
    const l = a(),
      o = r();
    function d(e) {
      if (!t.enabled) return;
      const {
        rtlTranslate: s
      } = t;
      let a = e;
      a.originalEvent && (a = a.originalEvent);
      const i = a.keyCode || a.charCode,
        r = t.params.keyboard.pageUpDown,
        d = r && 33 === i,
        c = r && 34 === i,
        p = 37 === i,
        u = 39 === i,
        m = 38 === i,
        h = 40 === i;
      if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
          let e = !1;
          if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
          const a = t.el,
            i = a.clientWidth,
            r = a.clientHeight,
            n = o.innerWidth,
            l = o.innerHeight,
            d = w(a);
          s && (d.left -= a.scrollLeft);
          const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
          for (let t = 0; t < c.length; t += 1) {
            const s = c[t];
            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
              if (0 === s[0] && 0 === s[1]) continue;
              e = !0;
            }
          }
          if (!e) return;
        }
        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || h) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", i);
      }
    }
    function c() {
      t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0);
    }
    function p() {
      t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1);
    }
    t.keyboard = {
      enabled: !1
    }, s({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), i("init", () => {
      t.params.keyboard.enabled && c();
    }), i("destroy", () => {
      t.keyboard.enabled && p();
    }), Object.assign(t.keyboard, {
      enable: c,
      disable: p
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const n = r();
    let d;
    s({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    }), t.mousewheel = {
      enabled: !1
    };
    let c,
      p = o();
    const u = [];
    function m() {
      t.enabled && (t.mouseEntered = !0);
    }
    function h() {
      t.enabled && (t.mouseEntered = !1);
    }
    function f(e) {
      return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), p = new n.Date().getTime(), !1));
    }
    function g(e) {
      let s = e,
        a = !0;
      if (!t.enabled) return;
      if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
      const r = t.params.mousewheel;
      t.params.cssMode && s.preventDefault();
      let n = t.el;
      "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
      const p = n && n.contains(s.target);
      if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      let m = 0;
      const h = t.rtlTranslate ? -1 : 1,
        g = function (e) {
          let t = 0,
            s = 0,
            a = 0,
            i = 0;
          return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
            spinX: t,
            spinY: s,
            pixelX: a,
            pixelY: i
          };
        }(s);
      if (r.forceToAxis) {
        if (t.isHorizontal()) {
          if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
          m = -g.pixelX * h;
        } else {
          if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
          m = -g.pixelY;
        }
      } else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
      if (0 === m) return !0;
      r.invert && (m = -m);
      let v = t.getTranslate() + m * r.sensitivity;
      if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
        const e = {
            time: o(),
            delta: Math.abs(m),
            direction: Math.sign(m)
          },
          a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
        if (!a) {
          c = void 0;
          let n = t.getTranslate() + m * r.sensitivity;
          const o = t.isBeginning,
            p = t.isEnd;
          if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
            direction: e.direction < 0 ? "next" : "prev",
            byMousewheel: !0
          }), t.params.freeMode.sticky) {
            clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
            const s = u.length ? u[u.length - 1] : void 0,
              a = u[0];
            if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0);else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
              const s = m > 0 ? .8 : .2;
              c = e, u.splice(0), d = l(() => {
                !t.destroyed && t.params && t.slideToClosest(t.params.speed, !0, void 0, s);
              }, 0);
            }
            d || (d = l(() => {
              if (t.destroyed || !t.params) return;
              c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
            }, 500));
          }
          if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate())) return !0;
        }
      } else {
        const s = {
          time: o(),
          delta: Math.abs(m),
          direction: Math.sign(m),
          raw: e
        };
        u.length >= 2 && u.shift();
        const a = u.length ? u[u.length - 1] : void 0;
        if (u.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function (e) {
          const s = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
          return !1;
        }(s)) return !0;
      }
      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }
    function v(e) {
      let s = t.el;
      "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g);
    }
    function w() {
      return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0);
    }
    function b() {
      return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0);
    }
    a("init", () => {
      !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w();
    }), a("destroy", () => {
      t.params.cssMode && w(), t.mousewheel.enabled && b();
    }), Object.assign(t.mousewheel, {
      enable: w,
      disable: b
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    function r(e) {
      let s;
      return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e) || t.hostEl.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s && s.length > 1 && 1 === t.el.querySelectorAll(e).length ? s = t.el.querySelector(e) : s && 1 === s.length && (s = s[0])), e && !s ? e : s);
    }
    function n(e, s) {
      const a = t.params.navigation;
      (e = T(e)).forEach(e => {
        e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
      });
    }
    function l() {
      const {
        nextEl: e,
        prevEl: s
      } = t.navigation;
      if (t.params.loop) return n(s, !1), void n(e, !1);
      n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
    }
    function o(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
    }
    function d(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
    }
    function c() {
      const e = t.params.navigation;
      if (t.params.navigation = re(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      let s = r(e.nextEl),
        a = r(e.prevEl);
      Object.assign(t.navigation, {
        nextEl: s,
        prevEl: a
      }), s = T(s), a = T(a);
      const i = (s, a) => {
        s && s.addEventListener("click", "next" === a ? d : o), !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
      };
      s.forEach(e => i(e, "next")), a.forEach(e => i(e, "prev"));
    }
    function p() {
      let {
        nextEl: e,
        prevEl: s
      } = t.navigation;
      e = T(e), s = T(s);
      const a = (e, s) => {
        e.removeEventListener("click", "next" === s ? d : o), e.classList.remove(...t.params.navigation.disabledClass.split(" "));
      };
      e.forEach(e => a(e, "next")), s.forEach(e => a(e, "prev"));
    }
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      prevEl: null
    }, a("init", () => {
      !1 === t.params.navigation.enabled ? u() : (c(), l());
    }), a("toEdge fromEdge lock unlock", () => {
      l();
    }), a("destroy", () => {
      p();
    }), a("enable disable", () => {
      let {
        nextEl: e,
        prevEl: s
      } = t.navigation;
      e = T(e), s = T(s), t.enabled ? l() : [...e, ...s].filter(e => !!e).forEach(e => e.classList.add(t.params.navigation.lockClass));
    }), a("click", (e, s) => {
      let {
        nextEl: a,
        prevEl: r
      } = t.navigation;
      a = T(a), r = T(r);
      const n = s.target;
      let l = r.includes(n) || a.includes(n);
      if (t.isElement && !l) {
        const e = s.path || s.composedPath && s.composedPath();
        e && (l = e.find(e => a.includes(e) || r.includes(e)));
      }
      if (t.params.navigation.hideOnClick && !l) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
        let e;
        a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : r.length && (e = r[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...a, ...r].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass));
      }
    });
    const u = () => {
      t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p();
    };
    Object.assign(t.navigation, {
      enable: () => {
        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), l();
      },
      disable: u,
      update: l,
      init: c,
      destroy: p
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const r = "swiper-pagination";
    let n;
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: e => e,
        formatFractionTotal: e => e,
        bulletClass: `${r}-bullet`,
        bulletActiveClass: `${r}-bullet-active`,
        modifierClass: `${r}-`,
        currentClass: `${r}-current`,
        totalClass: `${r}-total`,
        hiddenClass: `${r}-hidden`,
        progressbarFillClass: `${r}-progressbar-fill`,
        progressbarOppositeClass: `${r}-progressbar-opposite`,
        clickableClass: `${r}-clickable`,
        lockClass: `${r}-lock`,
        horizontalClass: `${r}-horizontal`,
        verticalClass: `${r}-vertical`,
        paginationDisabledClass: `${r}-disabled`
      }
    }), t.pagination = {
      el: null,
      bullets: []
    };
    let l = 0;
    function o() {
      return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length;
    }
    function d(e, s) {
      const {
        bulletActiveClass: a
      } = t.params.pagination;
      e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`));
    }
    function c(e) {
      const s = e.target.closest(ne(t.params.pagination.bulletClass));
      if (!s) return;
      e.preventDefault();
      const a = y(s) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === a) return;
        const e = (i = t.realIndex, r = a, n = t.slides.length, (r %= n) == 1 + (i %= n) ? "next" : r === i - 1 ? "previous" : void 0);
        "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(a);
      } else t.slideTo(a);
      var i, r, n;
    }
    function p() {
      const e = t.rtl,
        s = t.params.pagination;
      if (o()) return;
      let a,
        r,
        c = t.pagination.el;
      c = T(c);
      const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
        u = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
      if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        const i = t.pagination.bullets;
        let o, p, u;
        if (s.dynamicBullets && (n = S(i[0], t.isHorizontal() ? "width" : "height", !0), c.forEach(e => {
          e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
        }), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(a - l, 0), p = o + (Math.min(i.length, s.dynamicMainBullets) - 1), u = (p + o) / 2), i.forEach(e => {
          const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${s.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
          e.classList.remove(...t);
        }), c.length > 1) i.forEach(e => {
          const i = y(e);
          i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= o && i <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === o && d(e, "prev"), i === p && d(e, "next"));
        });else {
          const e = i[a];
          if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && i.forEach((e, t) => {
            e.setAttribute("part", t === a ? "bullet-active" : "bullet");
          }), s.dynamicBullets) {
            const e = i[o],
              t = i[p];
            for (let e = o; e <= p; e += 1) i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
            d(e, "prev"), d(t, "next");
          }
        }
        if (s.dynamicBullets) {
          const a = Math.min(i.length, s.dynamicMainBullets + 4),
            r = (n * a - n) / 2 - u * n,
            l = e ? "right" : "left";
          i.forEach(e => {
            e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
          });
        }
      }
      c.forEach((e, r) => {
        if ("fraction" === s.type && (e.querySelectorAll(ne(s.currentClass)).forEach(e => {
          e.textContent = s.formatFractionCurrent(a + 1);
        }), e.querySelectorAll(ne(s.totalClass)).forEach(e => {
          e.textContent = s.formatFractionTotal(u);
        })), "progressbar" === s.type) {
          let i;
          i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
          const r = (a + 1) / u;
          let n = 1,
            l = 1;
          "horizontal" === i ? n = r : l = r, e.querySelectorAll(ne(s.progressbarFillClass)).forEach(e => {
            e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`;
          });
        }
        "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, u), 0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
      });
    }
    function u() {
      const e = t.params.pagination;
      if (o()) return;
      const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
      let a = t.pagination.el;
      a = T(a);
      let r = "";
      if ("bullets" === e.type) {
        let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
        for (let s = 0; s < a; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`;
      }
      "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach(s => {
        "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(ne(e.bulletClass)));
      }), "custom" !== e.type && i("paginationRender", a[0]);
    }
    function m() {
      t.params.pagination = re(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      const e = t.params.pagination;
      if (!e.el) return;
      let s;
      "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter(e => E(e, ".swiper")[0] === t.el)[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
        el: s
      }), s = T(s), s.forEach(s => {
        "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), t.enabled || s.classList.add(e.lockClass);
      }));
    }
    function h() {
      const e = t.params.pagination;
      if (o()) return;
      let s = t.pagination.el;
      s && (s = T(s), s.forEach(s => {
        s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c));
      })), t.pagination.bullets && t.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")));
    }
    a("changeDirection", () => {
      if (!t.pagination || !t.pagination.el) return;
      const e = t.params.pagination;
      let {
        el: s
      } = t.pagination;
      s = T(s), s.forEach(s => {
        s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
      });
    }), a("init", () => {
      !1 === t.params.pagination.enabled ? f() : (m(), u(), p());
    }), a("activeIndexChange", () => {
      void 0 === t.snapIndex && p();
    }), a("snapIndexChange", () => {
      p();
    }), a("snapGridLengthChange", () => {
      u(), p();
    }), a("destroy", () => {
      h();
    }), a("enable disable", () => {
      let {
        el: e
      } = t.pagination;
      e && (e = T(e), e.forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
    }), a("lock unlock", () => {
      p();
    }), a("click", (e, s) => {
      const a = s.target,
        r = T(t.pagination.el);
      if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
        const e = r[0].classList.contains(t.params.pagination.hiddenClass);
        i(!0 === e ? "paginationShow" : "paginationHide"), r.forEach(e => e.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
    const f = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let {
        el: e
      } = t.pagination;
      e && (e = T(e), e.forEach(e => e.classList.add(t.params.pagination.paginationDisabledClass))), h();
    };
    Object.assign(t.pagination, {
      enable: () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let {
          el: e
        } = t.pagination;
        e && (e = T(e), e.forEach(e => e.classList.remove(t.params.pagination.paginationDisabledClass))), m(), u(), p();
      },
      disable: f,
      render: u,
      update: p,
      init: m,
      destroy: h
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i,
      emit: r
    } = e;
    const o = a();
    let d,
      c,
      p,
      u,
      m = !1,
      h = null,
      f = null;
    function g() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const {
          scrollbar: e,
          rtlTranslate: s
        } = t,
        {
          dragEl: a,
          el: i
        } = e,
        r = t.params.scrollbar,
        n = t.params.loop ? t.progressLoop : t.progress;
      let l = c,
        o = (p - c) * n;
      s ? (o = -o, o > 0 ? (l = c - o, o = 0) : -o + c > p && (l = p + o)) : o < 0 ? (l = c + o, o = 0) : o + c > p && (l = p - o), t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`, a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`, a.style.height = `${l}px`), r.hide && (clearTimeout(h), i.style.opacity = 1, h = setTimeout(() => {
        i.style.opacity = 0, i.style.transitionDuration = "400ms";
      }, 1e3));
    }
    function b() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const {
          scrollbar: e
        } = t,
        {
          dragEl: s,
          el: a
        } = e;
      s.style.width = "", s.style.height = "", p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`, a.style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass);
    }
    function y(e) {
      return t.isHorizontal() ? e.clientX : e.clientY;
    }
    function E(e) {
      const {
          scrollbar: s,
          rtlTranslate: a
        } = t,
        {
          el: i
        } = s;
      let r;
      r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
      t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    function x(e) {
      const s = t.params.scrollbar,
        {
          scrollbar: a,
          wrapperEl: i
        } = t,
        {
          el: n,
          dragEl: l
        } = a;
      m = !0, d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", E(e), clearTimeout(f), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e);
    }
    function S(e) {
      const {
          scrollbar: s,
          wrapperEl: a
        } = t,
        {
          el: i,
          dragEl: n
        } = s;
      m && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1, E(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", r("scrollbarDragMove", e));
    }
    function M(e) {
      const s = t.params.scrollbar,
        {
          scrollbar: a,
          wrapperEl: i
        } = t,
        {
          el: n
        } = a;
      m && (m = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), s.hide && (clearTimeout(f), f = l(() => {
        n.style.opacity = 0, n.style.transitionDuration = "400ms";
      }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
    }
    function C(e) {
      const {
          scrollbar: s,
          params: a
        } = t,
        i = s.el;
      if (!i) return;
      const r = i,
        n = !!a.passiveListeners && {
          passive: !1,
          capture: !1
        },
        l = !!a.passiveListeners && {
          passive: !0,
          capture: !1
        };
      if (!r) return;
      const d = "on" === e ? "addEventListener" : "removeEventListener";
      r[d]("pointerdown", x, n), o[d]("pointermove", S, n), o[d]("pointerup", M, l);
    }
    function P() {
      const {
        scrollbar: e,
        el: s
      } = t;
      t.params.scrollbar = re(t, t.originalParams.scrollbar, t.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const a = t.params.scrollbar;
      if (!a.el) return;
      let i, r;
      if ("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)), i || "string" != typeof a.el) i || (i = a.el);else if (i = o.querySelectorAll(a.el), !i.length) return;
      t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass), i && (r = i.querySelector(ne(t.params.scrollbar.dragClass)), r || (r = v("div", t.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
        el: i,
        dragEl: r
      }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass));
    }
    function L() {
      const e = t.params.scrollbar,
        s = t.scrollbar.el;
      s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && C("off");
    }
    s({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), t.scrollbar = {
      el: null,
      dragEl: null
    }, i("changeDirection", () => {
      if (!t.scrollbar || !t.scrollbar.el) return;
      const e = t.params.scrollbar;
      let {
        el: s
      } = t.scrollbar;
      s = T(s), s.forEach(s => {
        s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
      });
    }), i("init", () => {
      !1 === t.params.scrollbar.enabled ? I() : (P(), b(), g());
    }), i("update resize observerUpdate lock unlock changeDirection", () => {
      b();
    }), i("setTranslate", () => {
      g();
    }), i("setTransition", (e, s) => {
      !function (e) {
        t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
      }(s);
    }), i("enable disable", () => {
      const {
        el: e
      } = t.scrollbar;
      e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass));
    }), i("destroy", () => {
      L();
    });
    const I = () => {
      t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), L();
    };
    Object.assign(t.scrollbar, {
      enable: () => {
        t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), P(), b(), g();
      },
      disable: I,
      updateSize: b,
      setTranslate: g,
      init: P,
      destroy: L
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      parallax: {
        enabled: !1
      }
    });
    const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      r = (e, s) => {
        const {
            rtl: a
          } = t,
          i = a ? -1 : 1,
          r = e.getAttribute("data-swiper-parallax") || "0";
        let n = e.getAttribute("data-swiper-parallax-x"),
          l = e.getAttribute("data-swiper-parallax-y");
        const o = e.getAttribute("data-swiper-parallax-scale"),
          d = e.getAttribute("data-swiper-parallax-opacity"),
          c = e.getAttribute("data-swiper-parallax-rotate");
        if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
          const t = d - (d - 1) * (1 - Math.abs(s));
          e.style.opacity = t;
        }
        let p = `translate3d(${n}, ${l}, 0px)`;
        if (null != o) {
          p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
        }
        if (c && null != c) {
          p += ` rotate(${c * s * -1}deg)`;
        }
        e.style.transform = p;
      },
      n = () => {
        const {
            el: e,
            slides: s,
            progress: a,
            snapGrid: n,
            isElement: l
          } = t,
          o = f(e, i);
        t.isElement && o.push(...f(t.hostEl, i)), o.forEach(e => {
          r(e, a);
        }), s.forEach((e, s) => {
          let l = e.progress;
          t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach(e => {
            r(e, l);
          });
        });
      };
    a("beforeInit", () => {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
    }), a("init", () => {
      t.params.parallax.enabled && n();
    }), a("setTranslate", () => {
      t.params.parallax.enabled && n();
    }), a("setTransition", (e, s) => {
      t.params.parallax.enabled && function (e) {
        void 0 === e && (e = t.params.speed);
        const {
            el: s,
            hostEl: a
          } = t,
          r = [...s.querySelectorAll(i)];
        t.isElement && r.push(...a.querySelectorAll(i)), r.forEach(t => {
          let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
          0 === e && (s = 0), t.style.transitionDuration = `${s}ms`;
        });
      }(s);
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const n = r();
    s({
      zoom: {
        enabled: !1,
        limitToOriginalSize: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), t.zoom = {
      enabled: !1
    };
    let l,
      o,
      c = 1,
      p = !1;
    const u = [],
      m = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3
      },
      h = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
      },
      g = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
      };
    let v,
      b = 1;
    function y() {
      if (u.length < 2) return 1;
      const e = u[0].pageX,
        t = u[0].pageY,
        s = u[1].pageX,
        a = u[1].pageY;
      return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
    }
    function x() {
      const e = t.params.zoom,
        s = m.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
      if (e.limitToOriginalSize && m.imageEl && m.imageEl.naturalWidth) {
        const e = m.imageEl.naturalWidth / m.imageEl.offsetWidth;
        return Math.min(e, s);
      }
      return s;
    }
    function S(e) {
      const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
      return !!e.target.matches(s) || t.slides.filter(t => t.contains(e.target)).length > 0;
    }
    function T(e) {
      if ("mouse" === e.pointerType && u.splice(0, u.length), !S(e)) return;
      const s = t.params.zoom;
      if (l = !1, o = !1, u.push(e), !(u.length < 2)) {
        if (l = !0, m.scaleStart = y(), !m.slideEl) {
          m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
          let a = m.slideEl.querySelector(`.${s.containerClass}`);
          if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = a, m.imageWrapEl = a ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0, !m.imageWrapEl) return void (m.imageEl = void 0);
          m.maxRatio = x();
        }
        if (m.imageEl) {
          const [e, t] = function () {
            if (u.length < 2) return {
              x: null,
              y: null
            };
            const e = m.imageEl.getBoundingClientRect();
            return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c];
          }();
          m.originX = e, m.originY = t, m.imageEl.style.transitionDuration = "0ms";
        }
        p = !0;
      }
    }
    function M(e) {
      if (!S(e)) return;
      const s = t.params.zoom,
        a = t.zoom,
        i = u.findIndex(t => t.pointerId === e.pointerId);
      i >= 0 && (u[i] = e), u.length < 2 || (o = !0, m.scaleMove = y(), m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** .5), a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5), m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`));
    }
    function C(e) {
      if (!S(e)) return;
      if ("mouse" === e.pointerType && "pointerout" === e.type) return;
      const s = t.params.zoom,
        a = t.zoom,
        i = u.findIndex(t => t.pointerId === e.pointerId);
      i >= 0 && u.splice(i, 1), l && o && (l = !1, o = !1, m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio), m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, c = a.scale, p = !1, a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === a.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)));
    }
    function P() {
      t.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function L(e) {
      if (!S(e) || !function (e) {
        const s = `.${t.params.zoom.containerClass}`;
        return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter(t => t.contains(e.target)).length > 0;
      }(e)) return;
      const s = t.zoom;
      if (!m.imageEl) return;
      if (!h.isTouched || !m.slideEl) return;
      h.isMoved || (h.width = m.imageEl.offsetWidth || m.imageEl.clientWidth, h.height = m.imageEl.offsetHeight || m.imageEl.clientHeight, h.startX = d(m.imageWrapEl, "x") || 0, h.startY = d(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
      const a = h.width * s.scale,
        i = h.height * s.scale;
      h.minX = Math.min(m.slideWidth / 2 - a / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - i / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
      if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !p) {
        if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return h.isTouched = !1, void P();
        if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return h.isTouched = !1, void P();
      }
      e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(v), t.touchEventsData.preventTouchMoveFromPointerMove = !0, v = setTimeout(() => {
        t.destroyed || P();
      }), h.isMoved = !0;
      const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
        {
          originX: n,
          originY: l
        } = m;
      h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n), h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l), h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = h.touchesCurrent.x, g.prevPositionY = h.touchesCurrent.y, g.prevTime = Date.now(), m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`;
    }
    function I() {
      const e = t.zoom;
      m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0);
    }
    function z(e) {
      const s = t.zoom,
        a = t.params.zoom;
      if (!m.slideEl) {
        e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
        let s = m.slideEl.querySelector(`.${a.containerClass}`);
        s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = s, m.imageWrapEl = s ? E(m.imageEl, `.${a.containerClass}`)[0] : void 0;
      }
      if (!m.imageEl || !m.imageWrapEl) return;
      let i, r, l, o, d, p, u, g, v, b, y, S, T, M, C, P, L, I;
      t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (i = e.pageX, r = e.pageY) : (i = h.touchesStart.x, r = h.touchesStart.y);
      const z = "number" == typeof e ? e : null;
      1 === c && z && (i = void 0, r = void 0, h.touchesStart.x = void 0, h.touchesStart.y = void 0);
      const A = x();
      s.scale = z || A, c = z || A, !e || 1 === c && z ? (u = 0, g = 0) : (L = m.slideEl.offsetWidth, I = m.slideEl.offsetHeight, l = w(m.slideEl).left + n.scrollX, o = w(m.slideEl).top + n.scrollY, d = l + L / 2 - i, p = o + I / 2 - r, v = m.imageEl.offsetWidth || m.imageEl.clientWidth, b = m.imageEl.offsetHeight || m.imageEl.clientHeight, y = v * s.scale, S = b * s.scale, T = Math.min(L / 2 - y / 2, 0), M = Math.min(I / 2 - S / 2, 0), C = -T, P = -M, u = d * s.scale, g = p * s.scale, u < T && (u = T), u > C && (u = C), g < M && (g = M), g > P && (g = P)), z && 1 === s.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`, m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`;
    }
    function A() {
      const e = t.zoom,
        s = t.params.zoom;
      if (!m.slideEl) {
        t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
        let e = m.slideEl.querySelector(`.${s.containerClass}`);
        e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = e, m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0;
      }
      m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, h.touchesStart.x = void 0, h.touchesStart.y = void 0, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove(`${s.zoomedSlideClass}`), m.slideEl = void 0, m.originX = 0, m.originY = 0);
    }
    function $(e) {
      const s = t.zoom;
      s.scale && 1 !== s.scale ? A() : z(e);
    }
    function k() {
      return {
        passiveListener: !!t.params.passiveListeners && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !t.params.passiveListeners || {
          passive: !1,
          capture: !0
        }
      };
    }
    function O() {
      const e = t.zoom;
      if (e.enabled) return;
      e.enabled = !0;
      const {
        passiveListener: s,
        activeListenerWithCapture: a
      } = k();
      t.wrapperEl.addEventListener("pointerdown", T, s), t.wrapperEl.addEventListener("pointermove", M, a), ["pointerup", "pointercancel", "pointerout"].forEach(e => {
        t.wrapperEl.addEventListener(e, C, s);
      }), t.wrapperEl.addEventListener("pointermove", L, a);
    }
    function D() {
      const e = t.zoom;
      if (!e.enabled) return;
      e.enabled = !1;
      const {
        passiveListener: s,
        activeListenerWithCapture: a
      } = k();
      t.wrapperEl.removeEventListener("pointerdown", T, s), t.wrapperEl.removeEventListener("pointermove", M, a), ["pointerup", "pointercancel", "pointerout"].forEach(e => {
        t.wrapperEl.removeEventListener(e, C, s);
      }), t.wrapperEl.removeEventListener("pointermove", L, a);
    }
    Object.defineProperty(t.zoom, "scale", {
      get: () => b,
      set(e) {
        if (b !== e) {
          const t = m.imageEl,
            s = m.slideEl;
          i("zoomChange", e, t, s);
        }
        b = e;
      }
    }), a("init", () => {
      t.params.zoom.enabled && O();
    }), a("destroy", () => {
      D();
    }), a("touchStart", (e, s) => {
      t.zoom.enabled && function (e) {
        const s = t.device;
        if (!m.imageEl) return;
        if (h.isTouched) return;
        s.android && e.cancelable && e.preventDefault(), h.isTouched = !0;
        const a = u.length > 0 ? u[0] : e;
        h.touchesStart.x = a.pageX, h.touchesStart.y = a.pageY;
      }(s);
    }), a("touchEnd", (e, s) => {
      t.zoom.enabled && function () {
        const e = t.zoom;
        if (!m.imageEl) return;
        if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void (h.isMoved = !1);
        h.isTouched = !1, h.isMoved = !1;
        let s = 300,
          a = 300;
        const i = g.x * s,
          r = h.currentX + i,
          n = g.y * a,
          l = h.currentY + n;
        0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
        const o = Math.max(s, a);
        h.currentX = r, h.currentY = l;
        const d = h.width * e.scale,
          c = h.height * e.scale;
        h.minX = Math.min(m.slideWidth / 2 - d / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - c / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), m.imageWrapEl.style.transitionDuration = `${o}ms`, m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`;
      }();
    }), a("doubleTap", (e, s) => {
      !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && $(s);
    }), a("transitionEnd", () => {
      t.zoom.enabled && t.params.zoom.enabled && I();
    }), a("slideChange", () => {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && I();
    }), Object.assign(t.zoom, {
      enable: O,
      disable: D,
      in: z,
      out: A,
      toggle: $
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    function i(e, t) {
      const s = function () {
        let e, t, s;
        return (a, i) => {
          for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
          return e;
        };
      }();
      let a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
      }, this;
    }
    function r() {
      t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
    }
    s({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), t.controller = {
      control: void 0
    }, a("beforeInit", () => {
      if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
        ("string" == typeof t.params.controller.control ? [...document.querySelectorAll(t.params.controller.control)] : [t.params.controller.control]).forEach(e => {
          if (t.controller.control || (t.controller.control = []), e && e.swiper) t.controller.control.push(e.swiper);else if (e) {
            const s = `${t.params.eventsPrefix}init`,
              a = i => {
                t.controller.control.push(i.detail[0]), t.update(), e.removeEventListener(s, a);
              };
            e.addEventListener(s, a);
          }
        });
      } else t.controller.control = t.params.controller.control;
    }), a("update", () => {
      r();
    }), a("resize", () => {
      r();
    }), a("observerUpdate", () => {
      r();
    }), a("setTranslate", (e, s, a) => {
      t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a);
    }), a("setTransition", (e, s, a) => {
      t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a);
    }), Object.assign(t.controller, {
      setTranslate: function (e, s) {
        const a = t.controller.control;
        let r, n;
        const l = t.constructor;
        function o(e) {
          if (e.destroyed) return;
          const s = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by && (!function (e) {
            t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid);
          }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);else a instanceof l && s !== a && o(a);
      },
      setTransition: function (e, s) {
        const a = t.constructor,
          i = t.controller.control;
        let r;
        function n(s) {
          s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && l(() => {
            s.updateAutoHeight();
          }), x(s.wrapperEl, () => {
            i && s.transitionEnd();
          })));
        }
        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);else i instanceof a && s !== i && n(i);
      }
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i
    } = e;
    s({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: !0
      }
    }), t.a11y = {
      clicked: !1
    };
    let r,
      n,
      l = null,
      o = new Date().getTime();
    function d(e) {
      const t = l;
      0 !== t.length && (t.innerHTML = "", t.innerHTML = e);
    }
    function c(e) {
      (e = T(e)).forEach(e => {
        e.setAttribute("tabIndex", "0");
      });
    }
    function p(e) {
      (e = T(e)).forEach(e => {
        e.setAttribute("tabIndex", "-1");
      });
    }
    function u(e, t) {
      (e = T(e)).forEach(e => {
        e.setAttribute("role", t);
      });
    }
    function m(e, t) {
      (e = T(e)).forEach(e => {
        e.setAttribute("aria-roledescription", t);
      });
    }
    function h(e, t) {
      (e = T(e)).forEach(e => {
        e.setAttribute("aria-label", t);
      });
    }
    function f(e) {
      (e = T(e)).forEach(e => {
        e.setAttribute("aria-disabled", !0);
      });
    }
    function g(e) {
      (e = T(e)).forEach(e => {
        e.setAttribute("aria-disabled", !1);
      });
    }
    function w(e) {
      if (13 !== e.keyCode && 32 !== e.keyCode) return;
      const s = t.params.a11y,
        a = e.target;
      if (!t.pagination || !t.pagination.el || a !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(ne(t.params.pagination.bulletClass))) {
        if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
          const e = T(t.navigation.prevEl);
          T(t.navigation.nextEl).includes(a) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)), e.includes(a) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(s.firstSlideMessage) : d(s.prevSlideMessage));
        }
        t.pagination && a.matches(ne(t.params.pagination.bulletClass)) && a.click();
      }
    }
    function b() {
      return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
    }
    function E() {
      return b() && t.params.pagination.clickable;
    }
    const x = (e, t, s) => {
        c(e), "BUTTON" !== e.tagName && (u(e, "button"), e.addEventListener("keydown", w)), h(e, s), function (e, t) {
          (e = T(e)).forEach(e => {
            e.setAttribute("aria-controls", t);
          });
        }(e, t);
      },
      S = e => {
        n && n !== e.target && !n.contains(e.target) && (r = !0), t.a11y.clicked = !0;
      },
      M = () => {
        r = !1, requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
      },
      C = e => {
        o = new Date().getTime();
      },
      P = e => {
        if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
        if (new Date().getTime() - o < 100) return;
        const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
        if (!s || !t.slides.includes(s)) return;
        n = s;
        const a = t.slides.indexOf(s) === t.activeIndex,
          i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
        a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
          r || (t.params.loop ? t.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")), 0) : t.slideTo(t.slides.indexOf(s), 0), r = !1);
        }));
      },
      L = () => {
        const e = t.params.a11y;
        e.itemRoleDescriptionMessage && m(t.slides, e.itemRoleDescriptionMessage), e.slideRole && u(t.slides, e.slideRole);
        const s = t.slides.length;
        e.slideLabelMessage && t.slides.forEach((a, i) => {
          const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
          h(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s));
        });
      },
      I = () => {
        const e = t.params.a11y;
        t.el.append(l);
        const s = t.el;
        e.containerRoleDescriptionMessage && m(s, e.containerRoleDescriptionMessage), e.containerMessage && h(s, e.containerMessage), e.containerRole && u(s, e.containerRole);
        const i = t.wrapperEl,
          r = e.id || i.getAttribute("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))}`;
        var n;
        const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        var d;
        d = r, T(i).forEach(e => {
          e.setAttribute("id", d);
        }), function (e, t) {
          (e = T(e)).forEach(e => {
            e.setAttribute("aria-live", t);
          });
        }(i, o), L();
        let {
          nextEl: c,
          prevEl: p
        } = t.navigation ? t.navigation : {};
        if (c = T(c), p = T(p), c && c.forEach(t => x(t, r, e.nextSlideMessage)), p && p.forEach(t => x(t, r, e.prevSlideMessage)), E()) {
          T(t.pagination.el).forEach(e => {
            e.addEventListener("keydown", w);
          });
        }
        a().addEventListener("visibilitychange", C), t.el.addEventListener("focus", P, !0), t.el.addEventListener("focus", P, !0), t.el.addEventListener("pointerdown", S, !0), t.el.addEventListener("pointerup", M, !0);
      };
    i("beforeInit", () => {
      l = v("span", t.params.a11y.notificationClass), l.setAttribute("aria-live", "assertive"), l.setAttribute("aria-atomic", "true");
    }), i("afterInit", () => {
      t.params.a11y.enabled && I();
    }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      t.params.a11y.enabled && L();
    }), i("fromEdge toEdge afterInit lock unlock", () => {
      t.params.a11y.enabled && function () {
        if (t.params.loop || t.params.rewind || !t.navigation) return;
        const {
          nextEl: e,
          prevEl: s
        } = t.navigation;
        s && (t.isBeginning ? (f(s), p(s)) : (g(s), c(s))), e && (t.isEnd ? (f(e), p(e)) : (g(e), c(e)));
      }();
    }), i("paginationUpdate", () => {
      t.params.a11y.enabled && function () {
        const e = t.params.a11y;
        b() && t.pagination.bullets.forEach(s => {
          t.params.pagination.clickable && (c(s), t.params.pagination.renderBullet || (u(s, "button"), h(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))), s.matches(ne(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current");
        });
      }();
    }), i("destroy", () => {
      t.params.a11y.enabled && function () {
        l && l.remove();
        let {
          nextEl: e,
          prevEl: s
        } = t.navigation ? t.navigation : {};
        e = T(e), s = T(s), e && e.forEach(e => e.removeEventListener("keydown", w)), s && s.forEach(e => e.removeEventListener("keydown", w)), E() && T(t.pagination.el).forEach(e => {
          e.removeEventListener("keydown", w);
        });
        a().removeEventListener("visibilitychange", C), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", P, !0), t.el.removeEventListener("pointerdown", S, !0), t.el.removeEventListener("pointerup", M, !0));
      }();
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1
      }
    });
    let i = !1,
      n = {};
    const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
      o = e => {
        const t = r();
        let s;
        s = e ? new URL(e) : t.location;
        const a = s.pathname.slice(1).split("/").filter(e => "" !== e),
          i = a.length;
        return {
          key: a[i - 2],
          value: a[i - 1]
        };
      },
      d = (e, s) => {
        const a = r();
        if (!i || !t.params.history.enabled) return;
        let n;
        n = t.params.url ? new URL(t.params.url) : a.location;
        const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`) : t.slides[s];
        let d = l(o.getAttribute("data-history"));
        if (t.params.history.root.length > 0) {
          let s = t.params.history.root;
          "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e ? `${e}/` : ""}${d}`;
        } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
        t.params.history.keepQuery && (d += n.search);
        const c = a.history.state;
        c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
          value: d
        }, null, d) : a.history.pushState({
          value: d
        }, null, d));
      },
      c = (e, s, a) => {
        if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
          const r = t.slides[i];
          if (l(r.getAttribute("data-history")) === s) {
            const s = t.getSlideIndex(r);
            t.slideTo(s, e, a);
          }
        } else t.slideTo(0, e, a);
      },
      p = () => {
        n = o(t.params.url), c(t.params.speed, n.value, !1);
      };
    a("init", () => {
      t.params.history.enabled && (() => {
        const e = r();
        if (t.params.history) {
          if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
          i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p);
        }
      })();
    }), a("destroy", () => {
      t.params.history.enabled && (() => {
        const e = r();
        t.params.history.replaceState || e.removeEventListener("popstate", p);
      })();
    }), a("transitionEnd _freeModeNoMomentumRelease", () => {
      i && d(t.params.history.key, t.activeIndex);
    }), a("slideChange", () => {
      i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
    });
  }, function (e) {
    let {
        swiper: t,
        extendParams: s,
        emit: i,
        on: n
      } = e,
      l = !1;
    const o = a(),
      d = r();
    s({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex(e, s) {
          if (t.virtual && t.params.virtual.enabled) {
            const e = t.slides.filter(e => e.getAttribute("data-hash") === s)[0];
            if (!e) return 0;
            return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          }
          return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0]);
        }
      }
    });
    const c = () => {
        i("hashChange");
        const e = o.location.hash.replace("#", ""),
          s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
        if (e !== (s ? s.getAttribute("data-hash") : "")) {
          const s = t.params.hashNavigation.getSlideIndex(t, e);
          if (void 0 === s || Number.isNaN(s)) return;
          t.slideTo(s);
        }
      },
      p = () => {
        if (!l || !t.params.hashNavigation.enabled) return;
        const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
          s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
        t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"));
      };
    n("init", () => {
      t.params.hashNavigation.enabled && (() => {
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        l = !0;
        const e = o.location.hash.replace("#", "");
        if (e) {
          const s = 0,
            a = t.params.hashNavigation.getSlideIndex(t, e);
          t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0);
        }
        t.params.hashNavigation.watchState && d.addEventListener("hashchange", c);
      })();
    }), n("destroy", () => {
      t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c);
    }), n("transitionEnd _freeModeNoMomentumRelease", () => {
      l && p();
    }), n("slideChange", () => {
      l && t.params.cssMode && p();
    });
  }, function (e) {
    let t,
      s,
      {
        swiper: i,
        extendParams: r,
        on: n,
        emit: l,
        params: o
      } = e;
    i.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0
    }, r({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
    let d,
      c,
      p,
      u,
      m,
      h,
      f,
      g,
      v = o && o.autoplay ? o.autoplay.delay : 3e3,
      w = o && o.autoplay ? o.autoplay.delay : 3e3,
      b = new Date().getTime();
    function y(e) {
      i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || e.detail && e.detail.bySwiperTouchMove || C());
    }
    const E = () => {
        if (i.destroyed || !i.autoplay.running) return;
        i.autoplay.paused ? c = !0 : c && (w = d, c = !1);
        const e = i.autoplay.paused ? d : b + w - new Date().getTime();
        i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), s = requestAnimationFrame(() => {
          E();
        });
      },
      x = e => {
        if (i.destroyed || !i.autoplay.running) return;
        cancelAnimationFrame(s), E();
        let a = void 0 === e ? i.params.autoplay.delay : e;
        v = i.params.autoplay.delay, w = i.params.autoplay.delay;
        const r = (() => {
          let e;
          if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : i.slides[i.activeIndex], !e) return;
          return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        })();
        !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, v = r, w = r), d = a;
        const n = i.params.speed,
          o = () => {
            i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (b = new Date().getTime(), requestAnimationFrame(() => {
              x();
            })));
          };
        return a > 0 ? (clearTimeout(t), t = setTimeout(() => {
          o();
        }, a)) : requestAnimationFrame(() => {
          o();
        }), a;
      },
      S = () => {
        b = new Date().getTime(), i.autoplay.running = !0, x(), l("autoplayStart");
      },
      T = () => {
        i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop");
      },
      M = (e, s) => {
        if (i.destroyed || !i.autoplay.running) return;
        clearTimeout(t), e || (f = !0);
        const a = () => {
          l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C();
        };
        if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
        const r = d || i.params.autoplay.delay;
        d = r - (new Date().getTime() - b), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a());
      },
      C = () => {
        i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = new Date().getTime(), f ? (f = !1, x(d)) : x(), i.autoplay.paused = !1, l("autoplayResume"));
      },
      P = () => {
        if (i.destroyed || !i.autoplay.running) return;
        const e = a();
        "hidden" === e.visibilityState && (f = !0, M(!0)), "visible" === e.visibilityState && C();
      },
      L = e => {
        "mouse" === e.pointerType && (f = !0, g = !0, i.animating || i.autoplay.paused || M(!0));
      },
      I = e => {
        "mouse" === e.pointerType && (g = !1, i.autoplay.paused && C());
      };
    n("init", () => {
      i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L), i.el.addEventListener("pointerleave", I)), a().addEventListener("visibilitychange", P), S());
    }), n("destroy", () => {
      i.el && "string" != typeof i.el && (i.el.removeEventListener("pointerenter", L), i.el.removeEventListener("pointerleave", I)), a().removeEventListener("visibilitychange", P), i.autoplay.running && T();
    }), n("_freeModeStaticRelease", () => {
      (u || f) && C();
    }), n("_freeModeNoMomentumRelease", () => {
      i.params.autoplay.disableOnInteraction ? T() : M(!0, !0);
    }), n("beforeTransitionStart", (e, t, s) => {
      !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T());
    }), n("sliderFirstMove", () => {
      !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0, u = !1, f = !1, m = setTimeout(() => {
        f = !0, u = !0, M(!0);
      }, 200)));
    }), n("touchEnd", () => {
      if (!i.destroyed && i.autoplay.running && p) {
        if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void (p = !1);
        u && i.params.cssMode && C(), u = !1, p = !1;
      }
    }), n("slideChange", () => {
      !i.destroyed && i.autoplay.running && (h = !0);
    }), Object.assign(i.autoplay, {
      start: S,
      stop: T,
      pause: M,
      resume: C
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i
    } = e;
    s({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    let r = !1,
      n = !1;
    function l() {
      const e = t.thumbs.swiper;
      if (!e || e.destroyed) return;
      const s = e.clickedIndex,
        a = e.clickedSlide;
      if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      let i;
      i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
    }
    function o() {
      const {
        thumbs: e
      } = t.params;
      if (r) return !1;
      r = !0;
      const s = t.constructor;
      if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(t.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), t.thumbs.swiper.update();else if (c(e.swiper)) {
        const a = Object.assign({}, e.swiper);
        Object.assign(a, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper = new s(a), n = !0;
      }
      return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0;
    }
    function d(e) {
      const s = t.thumbs.swiper;
      if (!s || s.destroyed) return;
      const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
      let i = 1;
      const r = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach(e => e.classList.remove(r)), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach(e => {
        e.classList.add(r);
      });else for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
      const n = t.params.thumbs.autoScrollOffset,
        l = n && !s.params.loop;
      if (t.realIndex !== s.realIndex || l) {
        const i = s.activeIndex;
        let r, o;
        if (s.params.loop) {
          const e = s.slides.filter(e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`)[0];
          r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev";
        } else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
        l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0));
      }
    }
    t.thumbs = {
      swiper: null
    }, i("beforeInit", () => {
      const {
        thumbs: e
      } = t.params;
      if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
        const s = a(),
          i = () => {
            const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
            if (a && a.swiper) e.swiper = a.swiper, o(), d(!0);else if (a) {
              const s = `${t.params.eventsPrefix}init`,
                i = r => {
                  e.swiper = r.detail[0], a.removeEventListener(s, i), o(), d(!0), e.swiper.update(), t.update();
                };
              a.addEventListener(s, i);
            }
            return a;
          },
          r = () => {
            if (t.destroyed) return;
            i() || requestAnimationFrame(r);
          };
        requestAnimationFrame(r);
      } else o(), d(!0);
    }), i("slideChange update resize observerUpdate", () => {
      d();
    }), i("setTransition", (e, s) => {
      const a = t.thumbs.swiper;
      a && !a.destroyed && a.setTransition(s);
    }), i("beforeDestroy", () => {
      const e = t.thumbs.swiper;
      e && !e.destroyed && n && e.destroy();
    }), Object.assign(t.thumbs, {
      init: o,
      update: d
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      emit: a,
      once: i
    } = e;
    s({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(t, {
      freeMode: {
        onTouchStart: function () {
          if (t.params.cssMode) return;
          const e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
          });
        },
        onTouchMove: function () {
          if (t.params.cssMode) return;
          const {
            touchEventsData: e,
            touches: s
          } = t;
          0 === e.velocities.length && e.velocities.push({
            position: s[t.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: s[t.isHorizontal() ? "currentX" : "currentY"],
            time: o()
          });
        },
        onTouchEnd: function (e) {
          let {
            currentPos: s
          } = e;
          if (t.params.cssMode) return;
          const {
              params: r,
              wrapperEl: n,
              rtlTranslate: l,
              snapGrid: d,
              touchEventsData: c
            } = t,
            p = o() - c.touchStartTime;
          if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);else {
            if (r.freeMode.momentum) {
              if (c.velocities.length > 1) {
                const e = c.velocities.pop(),
                  s = c.velocities.pop(),
                  a = e.position - s.position,
                  i = e.time - s.time;
                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || o() - e.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
              let e = 1e3 * r.freeMode.momentumRatio;
              const s = t.velocity * e;
              let p = t.translate + s;
              l && (p = -p);
              let u,
                m = !1;
              const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
              let f;
              if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);else if (r.freeMode.sticky) {
                let e;
                for (let t = 0; t < d.length; t += 1) if (d[t] > -p) {
                  e = t;
                  break;
                }
                p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p;
              }
              if (f && i("transitionEnd", () => {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                  const s = Math.abs((l ? -p : p) - t.translate),
                    a = t.slidesSizesGrid[t.activeIndex];
                  e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, x(n, () => {
                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(() => {
                  t.setTranslate(u), x(n, () => {
                    t && !t.destroyed && t.transitionEnd();
                  });
                }, 0));
              })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, x(n, () => {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses();
            } else {
              if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode && a("_freeModeNoMomentumRelease");
            }
            (!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          }
        }
      }
    });
  }, function (e) {
    let t,
      s,
      a,
      i,
      {
        swiper: r,
        extendParams: n,
        on: l
      } = e;
    n({
      grid: {
        rows: 1,
        fill: "column"
      }
    });
    const o = () => {
      let e = r.params.spaceBetween;
      return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e;
    };
    l("init", () => {
      i = r.params.grid && r.params.grid.rows > 1;
    }), l("update", () => {
      const {
          params: e,
          el: t
        } = r,
        s = e.grid && e.grid.rows > 1;
      i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()), i = s;
    }), r.grid = {
      initSlides: e => {
        const {
            slidesPerView: i
          } = r.params,
          {
            rows: n,
            fill: l
          } = r.params.grid,
          o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
        a = Math.floor(o / n), t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n, "auto" !== i && "row" === l && (t = Math.max(t, i * n)), s = t / n;
      },
      unsetSlides: () => {
        r.slides && r.slides.forEach(e => {
          e.swiperSlideGridSet && (e.style.height = "", e.style[r.getDirectionLabel("margin-top")] = "");
        });
      },
      updateSlide: (e, i, n) => {
        const {
            slidesPerGroup: l
          } = r.params,
          d = o(),
          {
            rows: c,
            fill: p
          } = r.params.grid,
          u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
        let m, h, f;
        if ("row" === p && l > 1) {
          const s = Math.floor(e / (l * c)),
            a = e - c * l * s,
            r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
          f = Math.floor(a / r), h = a - f * r + s * l, m = h + f * t / c, i.style.order = m;
        } else "column" === p ? (h = Math.floor(e / c), f = e - h * c, (h > a || h === a && f === c - 1) && (f += 1, f >= c && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
        i.row = f, i.column = h, i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`, i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "", i.swiperSlideGridSet = !0;
      },
      updateWrapperSize: (e, s) => {
        const {
            centeredSlides: a,
            roundLengths: i
          } = r.params,
          n = o(),
          {
            rows: l
          } = r.params.grid;
        if (r.virtualSize = (e + n) * t, r.virtualSize = Math.ceil(r.virtualSize / l) - n, r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`), a) {
          const e = [];
          for (let t = 0; t < s.length; t += 1) {
            let a = s[t];
            i && (a = Math.floor(a)), s[t] < r.virtualSize + s[0] && e.push(a);
          }
          s.splice(0, s.length), s.push(...e);
        }
      }
    };
  }, function (e) {
    let {
      swiper: t
    } = e;
    Object.assign(t, {
      appendSlide: le.bind(t),
      prependSlide: oe.bind(t),
      addSlide: de.bind(t),
      removeSlide: ce.bind(t),
      removeAllSlides: pe.bind(t)
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      fadeEffect: {
        crossFade: !1
      }
    }), ue({
      effect: "fade",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
          slides: e
        } = t;
        t.params.fadeEffect;
        for (let s = 0; s < e.length; s += 1) {
          const e = t.slides[s];
          let a = -e.swiperSlideOffset;
          t.params.virtualTranslate || (a -= t.translate);
          let i = 0;
          t.isHorizontal() || (i = a, a = 0);
          const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
            n = me(0, e);
          n.style.opacity = r, n.style.transform = `translate3d(${a}px, ${i}px, 0px)`;
        }
      },
      setTransition: e => {
        const s = t.slides.map(e => h(e));
        s.forEach(t => {
          t.style.transitionDuration = `${e}ms`;
        }), he({
          swiper: t,
          duration: e,
          transformElements: s,
          allSlides: !0
        });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    });
    const i = (e, t, s) => {
      let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
        i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
      a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0));
    };
    ue({
      effect: "cube",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            el: e,
            wrapperEl: s,
            slides: a,
            width: r,
            height: n,
            rtlTranslate: l,
            size: o,
            browser: d
          } = t,
          c = M(t),
          p = t.params.cubeEffect,
          u = t.isHorizontal(),
          m = t.virtual && t.params.virtual.enabled;
        let h,
          f = 0;
        p.shadow && (u ? (h = t.wrapperEl.querySelector(".swiper-cube-shadow"), h || (h = v("div", "swiper-cube-shadow"), t.wrapperEl.append(h)), h.style.height = `${r}px`) : (h = e.querySelector(".swiper-cube-shadow"), h || (h = v("div", "swiper-cube-shadow"), e.append(h))));
        for (let e = 0; e < a.length; e += 1) {
          const t = a[e];
          let s = e;
          m && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
          let r = 90 * s,
            n = Math.floor(r / 360);
          l && (r = -r, n = Math.floor(-r / 360));
          const d = Math.max(Math.min(t.progress, 1), -1);
          let h = 0,
            g = 0,
            v = 0;
          s % 4 == 0 ? (h = 4 * -n * o, v = 0) : (s - 1) % 4 == 0 ? (h = 0, v = 4 * -n * o) : (s - 2) % 4 == 0 ? (h = o + 4 * n * o, v = o) : (s - 3) % 4 == 0 && (h = -o, v = 3 * o + 4 * o * n), l && (h = -h), u || (g = h, h = 0);
          const w = `rotateX(${c(u ? 0 : -r)}deg) rotateY(${c(u ? r : 0)}deg) translate3d(${h}px, ${g}px, ${v}px)`;
          d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.style.transform = w, p.slideShadows && i(t, d, u);
        }
        if (s.style.transformOrigin = `50% 50% -${o / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`, p.shadow) if (u) h.style.transform = `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`;else {
          const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
            s = p.shadowScale,
            a = p.shadowScale / t,
            i = p.shadowOffset;
          h.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-89.99deg)`;
        }
        const g = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
        s.style.transform = `translate3d(0px,0,${g}px) rotateX(${c(t.isHorizontal() ? 0 : f)}deg) rotateY(${c(t.isHorizontal() ? -f : 0)}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${g}px`);
      },
      setTransition: e => {
        const {
          el: s,
          slides: a
        } = t;
        if (a.forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        }), t.params.cubeEffect.shadow && !t.isHorizontal()) {
          const t = s.querySelector(".swiper-cube-shadow");
          t && (t.style.transitionDuration = `${e}ms`);
        }
      },
      recreateShadows: () => {
        const e = t.isHorizontal();
        t.slides.forEach(t => {
          const s = Math.max(Math.min(t.progress, 1), -1);
          i(t, s, e);
        });
      },
      getEffectParams: () => t.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    });
    const i = (e, s) => {
      let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
        i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
      a || (a = fe("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = fe("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity = Math.max(s, 0));
    };
    ue({
      effect: "flip",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            slides: e,
            rtlTranslate: s
          } = t,
          a = t.params.flipEffect,
          r = M(t);
        for (let n = 0; n < e.length; n += 1) {
          const l = e[n];
          let o = l.progress;
          t.params.flipEffect.limitRotation && (o = Math.max(Math.min(l.progress, 1), -1));
          const d = l.swiperSlideOffset;
          let c = -180 * o,
            p = 0,
            u = t.params.cssMode ? -d - t.translate : -d,
            m = 0;
          t.isHorizontal() ? s && (c = -c) : (m = u, u = 0, p = -c, c = 0), l.style.zIndex = -Math.abs(Math.round(o)) + e.length, a.slideShadows && i(l, o);
          const h = `translate3d(${u}px, ${m}px, 0px) rotateX(${r(p)}deg) rotateY(${r(c)}deg)`;
          me(0, l).style.transform = h;
        }
      },
      setTransition: e => {
        const s = t.slides.map(e => h(e));
        s.forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        }), he({
          swiper: t,
          duration: e,
          transformElements: s
        });
      },
      recreateShadows: () => {
        t.params.flipEffect, t.slides.forEach(e => {
          let s = e.progress;
          t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s);
        });
      },
      getEffectParams: () => t.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    }), ue({
      effect: "coverflow",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            width: e,
            height: s,
            slides: a,
            slidesSizesGrid: i
          } = t,
          r = t.params.coverflowEffect,
          n = t.isHorizontal(),
          l = t.translate,
          o = n ? e / 2 - l : s / 2 - l,
          d = n ? r.rotate : -r.rotate,
          c = r.depth,
          p = M(t);
        for (let e = 0, t = a.length; e < t; e += 1) {
          const t = a[e],
            s = i[e],
            l = (o - t.swiperSlideOffset - s / 2) / s,
            u = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
          let m = n ? d * u : 0,
            h = n ? 0 : d * u,
            f = -c * Math.abs(u),
            g = r.stretch;
          "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(r.stretch) / 100 * s);
          let v = n ? 0 : g * u,
            w = n ? g * u : 0,
            b = 1 - (1 - r.scale) * Math.abs(u);
          Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0);
          const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${p(h)}deg) rotateY(${p(m)}deg) scale(${b})`;
          if (me(0, t).style.transform = y, t.style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
            let e = n ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
              s = n ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
            e || (e = fe("coverflow", t, n ? "left" : "top")), s || (s = fe("coverflow", t, n ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), s && (s.style.opacity = -u > 0 ? -u : 0);
          }
        }
      },
      setTransition: e => {
        t.slides.map(e => h(e)).forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const i = e => "string" == typeof e ? e : `${e}px`;
    ue({
      effect: "creative",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            slides: e,
            wrapperEl: s,
            slidesSizesGrid: a
          } = t,
          r = t.params.creativeEffect,
          {
            progressMultiplier: n
          } = r,
          l = t.params.centeredSlides,
          o = M(t);
        if (l) {
          const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
          s.style.transform = `translateX(calc(50% - ${e}px))`;
        }
        for (let s = 0; s < e.length; s += 1) {
          const a = e[s],
            d = a.progress,
            c = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
          let p = c;
          l || (p = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
          const u = a.swiperSlideOffset,
            m = [t.params.cssMode ? -u - t.translate : -u, 0, 0],
            h = [0, 0, 0];
          let f = !1;
          t.isHorizontal() || (m[1] = m[0], m[0] = 0);
          let g = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          c < 0 ? (g = r.next, f = !0) : c > 0 && (g = r.prev, f = !0), m.forEach((e, t) => {
            m[t] = `calc(${e}px + (${i(g.translate[t])} * ${Math.abs(c * n)}))`;
          }), h.forEach((e, t) => {
            let s = g.rotate[t] * Math.abs(c * n);
            h[t] = s;
          }), a.style.zIndex = -Math.abs(Math.round(d)) + e.length;
          const v = m.join(", "),
            w = `rotateX(${o(h[0])}deg) rotateY(${o(h[1])}deg) rotateZ(${o(h[2])}deg)`,
            b = p < 0 ? `scale(${1 + (1 - g.scale) * p * n})` : `scale(${1 - (1 - g.scale) * p * n})`,
            y = p < 0 ? 1 + (1 - g.opacity) * p * n : 1 - (1 - g.opacity) * p * n,
            E = `translate3d(${v}) ${w} ${b}`;
          if (f && g.shadow || !f) {
            let e = a.querySelector(".swiper-slide-shadow");
            if (!e && g.shadow && (e = fe("creative", a)), e) {
              const t = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
              e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
            }
          }
          const x = me(0, a);
          x.style.transform = E, x.style.opacity = y, g.origin && (x.style.transformOrigin = g.origin);
        }
      },
      setTransition: e => {
        const s = t.slides.map(e => h(e));
        s.forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        }), he({
          swiper: t,
          duration: e,
          transformElements: s,
          allSlides: !0
        });
      },
      perspective: () => t.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    }), ue({
      effect: "cards",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            slides: e,
            activeIndex: s,
            rtlTranslate: a
          } = t,
          i = t.params.cardsEffect,
          {
            startTranslate: r,
            isTouched: n
          } = t.touchEventsData,
          l = a ? -t.translate : t.translate;
        for (let o = 0; o < e.length; o += 1) {
          const d = e[o],
            c = d.progress,
            p = Math.min(Math.max(c, -4), 4);
          let u = d.swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
          let m = t.params.cssMode ? -u - t.translate : -u,
            h = 0;
          const f = -100 * Math.abs(p);
          let g = 1,
            v = -i.perSlideRotate * p,
            w = i.perSlideOffset - .75 * Math.abs(p);
          const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
            y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r,
            E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
          if (y || E) {
            const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
            v += -28 * p * e, g += -.5 * e, w += 96 * e, h = -25 * e * Math.abs(p) + "%";
          }
          if (m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
            const e = h;
            h = m, m = e;
          }
          const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
            S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? a ? -v : v : 0}deg)\n        scale(${x})\n      `;
          if (i.slideShadows) {
            let e = d.querySelector(".swiper-slide-shadow");
            e || (e = fe("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1));
          }
          d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
          me(0, d).style.transform = S;
        }
      },
      setTransition: e => {
        const s = t.slides.map(e => h(e));
        s.forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        }), he({
          swiper: t,
          duration: e,
          transformElements: s
        });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }];
  return ie.use(ge), ie;
}();
// ui.js

/**
 * @description SweetAlert2를 이용한 메시지 공통 클래스
 * @see https://sweetalert2.github.io/#usage
 * @params {Object} options - SweetAlert2 options (위 링크 참조)
 * @returns {Promise}
 */
class Message {
  static show(options) {
    if (!window.Swal) {
      console.error('SweetAlert2가 선언되지 않았습니다.');
      return;
    }
    const {
      confirmButtonText = '확인',
      cancelButtonText = '취소',
      denyButtonText = '거부',
      onConfirm,
      onCancel,
      onDenied
    } = options || {};

    // 취소, 거부 버튼 표시 여부
    const showCancelButton = Boolean(options?.cancelButtonText);
    const showDenyButton = Boolean(options?.denyButtonText);
    return window.Swal.fire({
      ...options,
      showCancelButton,
      showDenyButton,
      confirmButtonText,
      cancelButtonText,
      denyButtonText
    }).then(result => {
      const isConfirmed = result?.isConfirmed;
      const isDenied = result?.isDenied;
      const isDismissed = result?.isDismissed;

      // '확인' (confirm) 클릭
      if (isConfirmed) {
        onConfirm?.();
        return;
      }

      // '거부' (deny) 클릭
      if (isDenied) {
        onDenied?.();
        return;
      }

      // '취소' (dismiss) 클릭
      if (isDismissed) {
        onCancel?.();
        return;
      }
    });
  }
}
window.Message = Message;

/**
 * @description SweetAlert2를 이용한 모달 공통 클래스
 * @see https://sweetalert2.github.io/#usage
 * @params {Object} options - SweetAlert2 options (위 링크 참조) {
 *  title: '제목',
 *  html: '내용',
 *  actions: ['확인', '취소'],
 *  onAction: (result) => { ... }
 * }
 * @returns {Promise}
 */
class Modal {
  static show(options) {
    if (!window.Swal) {
      console.error('SweetAlert2가 선언되지 않았습니다.');
      return;
    }
    const _defaultClass = {
      container: 'modal-container',
      popup: 'modal-popup',
      header: 'modal-header',
      title: 'modal-title',
      closeButton: 'modal-close-button',
      htmlContainer: 'modal-html',
      actions: 'modal-actions'
    };

    // 취소, 거부 버튼 표시 여부
    const showCloseButton = true;
    const showConfirmButton = Boolean(options?.confirmButtonText);
    const showCancelButton = Boolean(options?.cancelButtonText);
    const showDenyButton = Boolean(options?.denyButtonText);
    return window.Swal.fire({
      ...options,
      customClass: {
        ..._defaultClass,
        ...options?.customClass
      },
      showCloseButton,
      showConfirmButton,
      showCancelButton,
      showDenyButton
    }).then(result => {
      const isConfirmed = result?.isConfirmed;
      const isDenied = result?.isDenied;
      const isDismissed = result?.isDismissed;

      // '확인' (confirm) 클릭
      if (isConfirmed) {
        onConfirm?.();
        return;
      }

      // '거부' (deny) 클릭
      if (isDenied) {
        onDenied?.();
        return;
      }

      // '취소' (dismiss) 클릭
      if (isDismissed) {
        onCancel?.();
        return;
      }
    });
  }
}
window.Modal = Modal;
$(function () {
  $('.links-content li').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    console.log('!!!');
  });
});