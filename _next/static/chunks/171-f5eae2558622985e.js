;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [171],
  {
    7461: (_e, t, r) => {
      r.d(t, { Z: () => a })
      const o = r(4090)
      const n = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      } /**
       * @license lucide-react v0.331.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      const l = (e) =>
        e
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .toLowerCase()
          .trim()
      const a = (e, t) => {
        const r = (0, o.forwardRef)((r, a) => {
          const {
            color: i = 'currentColor',
            size: s = 24,
            strokeWidth: c = 2,
            absoluteStrokeWidth: d,
            className: u = '',
            children: p,
            ...f
          } = r
          return (0, o.createElement)(
            'svg',
            {
              ref: a,
              ...n,
              width: s,
              height: s,
              stroke: i,
              strokeWidth: d ? (24 * Number(c)) / Number(s) : c,
              className: ['lucide', 'lucide-'.concat(l(e)), u].join(' '),
              ...f,
            },
            [
              ...t.map((e) => {
                const [t, r] = e
                return (0, o.createElement)(t, r)
              }),
              ...(Array.isArray(p) ? p : [p]),
            ],
          )
        })
        return (r.displayName = ''.concat(e)), r
      }
    },
    3013: (_e, t, r) => {
      r.d(t, { Z: () => o }) /**
       * @license lucide-react v0.331.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      const o = (0, r(7461).Z)('Monitor', [
        [
          'rect',
          { width: '20', height: '14', x: '2', y: '3', rx: '2', key: '48i651' },
        ],
        ['line', { x1: '8', x2: '16', y1: '21', y2: '21', key: '1svkeh' }],
        ['line', { x1: '12', x2: '12', y1: '17', y2: '21', key: 'vw1qmm' }],
      ])
    },
    2891: (_e, t, r) => {
      r.d(t, { Z: () => o }) /**
       * @license lucide-react v0.331.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      const o = (0, r(7461).Z)('Moon', [
        ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
      ])
    },
    1047: (_e, t, r) => {
      r.d(t, { Z: () => o }) /**
       * @license lucide-react v0.331.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
      const o = (0, r(7461).Z)('Sun', [
        ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
        ['path', { d: 'M12 2v2', key: 'tus03m' }],
        ['path', { d: 'M12 20v2', key: '1lh1kg' }],
        ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
        ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
        ['path', { d: 'M2 12h2', key: '1t8f8n' }],
        ['path', { d: 'M20 12h2', key: '1q8mjw' }],
        ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
        ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
      ])
    },
    1774: (_e, t, r) => {
      r.d(t, { F: () => s, f: () => c })
      const o = r(4090)
      const n = ['light', 'dark']
      const l = '(prefers-color-scheme: dark)'
      const a = (0, o.createContext)(void 0)
      const i = { setTheme: (_e) => {}, themes: [] }
      const s = () => {
        let e
        return null !== (e = (0, o.useContext)(a)) && void 0 !== e ? e : i
      }
      const c = (e) =>
        (0, o.useContext)(a)
          ? o.createElement(o.Fragment, null, e.children)
          : o.createElement(u, e)
      const d = ['light', 'dark']
      const u = (e) => {
        const {
          forcedTheme: t,
          disableTransitionOnChange: r = !1,
          enableSystem: i = !0,
          enableColorScheme: s = !0,
          storageKey: c = 'theme',
          themes: u = d,
          defaultTheme: h = i ? 'system' : 'light',
          attribute: g = 'data-theme',
          value: y,
          children: v,
          nonce: w,
        } = e
        const [x, k] = (0, o.useState)(() => f(c, h))
        const [z, C] = (0, o.useState)(() => f(c))
        const j = y ? Object.values(y) : u
        const S = (0, o.useCallback)((e) => {
          let t = e
          if (!t) return
          'system' === e && i && (t = b())
          const o = y ? y[t] : t
          const l = r ? m() : null
          const a = document.documentElement
          if (
            ('class' === g
              ? (a.classList.remove(...j), o && a.classList.add(o))
              : o
                ? a.setAttribute(g, o)
                : a.removeAttribute(g),
            s)
          ) {
            const e = n.includes(h) ? h : null
            const r = n.includes(t) ? t : e
            a.style.colorScheme = r
          }
          null == l || l()
        }, [])
        const E = (0, o.useCallback)(
          (e) => {
            k(e)
            try {
              localStorage.setItem(c, e)
            } catch (_e) {}
          },
          [t],
        )
        const N = (0, o.useCallback)(
          (e) => {
            C(b(e)), 'system' === x && i && !t && S('system')
          },
          [x, t],
        )
        ;(0, o.useEffect)(() => {
          const e = window.matchMedia(l)
          return e.addListener(N), N(e), () => e.removeListener(N)
        }, [N]),
          (0, o.useEffect)(() => {
            const e = (e) => {
              e.key === c && E(e.newValue || h)
            }
            return (
              window.addEventListener('storage', e),
              () => window.removeEventListener('storage', e)
            )
          }, [E]),
          (0, o.useEffect)(() => {
            S(null != t ? t : x)
          }, [t, x])
        const T = (0, o.useMemo)(
          () => ({
            theme: x,
            setTheme: E,
            forcedTheme: t,
            resolvedTheme: 'system' === x ? z : x,
            themes: i ? [...u, 'system'] : u,
            systemTheme: i ? z : void 0,
          }),
          [x, E, t, z, i, u],
        )
        return o.createElement(
          a.Provider,
          { value: T },
          o.createElement(p, {
            forcedTheme: t,
            disableTransitionOnChange: r,
            enableSystem: i,
            enableColorScheme: s,
            storageKey: c,
            themes: u,
            defaultTheme: h,
            attribute: g,
            value: y,
            children: v,
            attrs: j,
            nonce: w,
          }),
          v,
        )
      }
      const p = (0, o.memo)(
        (e) => {
          const {
            forcedTheme: t,
            storageKey: r,
            attribute: a,
            enableSystem: i,
            enableColorScheme: s,
            defaultTheme: c,
            value: d,
            attrs: u,
            nonce: p,
          } = e
          const f = 'system' === c
          const m =
            'class' === a
              ? 'var d=document.documentElement,c=d.classList;c.remove('.concat(
                  u.map((e) => "'".concat(e, "'")).join(','),
                  ');',
                )
              : "var d=document.documentElement,n='".concat(
                  a,
                  "',s='setAttribute';",
                )
          const b = s
            ? n.includes(c) && c
              ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(
                  c,
                  "'",
                )
              : "if(e==='light'||e==='dark')d.style.colorScheme=e"
            : ''
          const h = (e) => {
            const t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            const r =
              !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
            const o = d ? d[e] : e
            const l = t ? `${e}|| ''` : "'".concat(o, "'")
            let i = ''
            return (
              s &&
                r &&
                !t &&
                n.includes(e) &&
                (i += "d.style.colorScheme = '".concat(e, "';")),
              'class' === a
                ? (i += t || o ? 'c.add('.concat(l, ')') : 'null')
                : o && (i += 'd[s](n,'.concat(l, ')')),
              i
            )
          }
          const g = t
            ? '!function(){'.concat(m).concat(h(t), '}()')
            : i
              ? '!function(){try{'
                  .concat(m, "var e=localStorage.getItem('")
                  .concat(r, "');if('system'===e||(!e&&")
                  .concat(f, ")){var t='")
                  .concat(
                    l,
                    "',m=window.matchMedia(t);if(m.media!==t||m.matches){",
                  )
                  .concat(h('dark'), '}else{')
                  .concat(h('light'), '}}else if(e){')
                  .concat(d ? 'var x='.concat(JSON.stringify(d), ';') : '')
                  .concat(h(d ? 'x[e]' : 'e', !0), '}')
                  .concat(f ? '' : `else{${h(c, !1, !1)}}`)
                  .concat(b, '}catch(e){}}()')
              : '!function(){try{'
                  .concat(m, "var e=localStorage.getItem('")
                  .concat(r, "');if(e){")
                  .concat(d ? 'var x='.concat(JSON.stringify(d), ';') : '')
                  .concat(h(d ? 'x[e]' : 'e', !0), '}else{')
                  .concat(h(c, !1, !1), ';}')
                  .concat(b, '}catch(t){}}();')
          return o.createElement('script', {
            nonce: p,
            dangerouslySetInnerHTML: { __html: g },
          })
        },
        () => !0,
      )
      const f = (e, t) => {
        let r
        try {
          r = localStorage.getItem(e) || void 0
        } catch (_e) {}
        return r || t
      }
      const m = () => {
        const e = document.createElement('style')
        return (
          e.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
            ),
          ),
          document.head.appendChild(e),
          () => {
            window.getComputedStyle(document.body),
              setTimeout(() => {
                document.head.removeChild(e)
              }, 1)
          }
        )
      }
      const b = (e) => (
        e || (e = window.matchMedia(l)), e.matches ? 'dark' : 'light'
      )
    },
    8792: (_e, t, r) => {
      r.d(t, { default: () => n.a })
      const o = r(5250)
      const n = r.n(o)
    },
    7907: (_e, t, r) => {
      const o = r(5313)
      r.o(o, 'usePathname') && r.d(t, { usePathname: () => o.usePathname })
    },
    3445: (e) => {
      e.exports = {
        style: {
          fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
          fontStyle: 'normal',
        },
        className: '__className_aaf875',
      }
    },
    6316: (_e, t, r) => {
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : (e) => {
              for (let t = 1; t < arguments.length; t++) {
                const r = arguments[t]
                for (const o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
              }
              return e
            }).apply(this, arguments)
      }
      r.d(t, { g7: () => l })
      const n = r(4090)
      const l = (0, n.forwardRef)((e, t) => {
        const { children: r, ...l } = e
        const i = n.Children.toArray(r)
        const c = i.find(s)
        if (c) {
          const e = c.props.children
          const r = i.map((t) =>
            t !== c
              ? t
              : n.Children.count(e) > 1
                ? n.Children.only(null)
                : (0, n.isValidElement)(e)
                  ? e.props.children
                  : null,
          )
          return (0, n.createElement)(
            a,
            o({}, l, { ref: t }),
            (0, n.isValidElement)(e) ? (0, n.cloneElement)(e, void 0, r) : null,
          )
        }
        return (0, n.createElement)(a, o({}, l, { ref: t }), r)
      })
      l.displayName = 'Slot'
      const a = (0, n.forwardRef)((e, t) => {
        const { children: r, ...o } = e
        return (0, n.isValidElement)(r)
          ? (0, n.cloneElement)(r, {
              ...((e, t) => {
                const r = { ...t }
                for (const o in t) {
                  const n = e[o]
                  const l = t[o]
                  ;/^on[A-Z]/.test(o)
                    ? n && l
                      ? (r[o] = () => {
                          for (
                            let e = arguments.length, t = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r]
                          l(...t), n(...t)
                        })
                      : n && (r[o] = n)
                    : 'style' === o
                      ? (r[o] = { ...n, ...l })
                      : 'className' === o &&
                        (r[o] = [n, l].filter(Boolean).join(' '))
                }
                return { ...e, ...r }
              })(o, r.props),
              ref: t
                ? (() => {
                    for (
                      let e = arguments.length, t = Array(e), r = 0;
                      r < e;
                      r++
                    )
                      t[r] = arguments[r]
                    return (e) =>
                      t.forEach((t) => {
                        'function' === typeof t
                          ? t(e)
                          : null != t && (t.current = e)
                      })
                  })(t, r.ref)
                : r.ref,
            })
          : n.Children.count(r) > 1
            ? n.Children.only(null)
            : null
      })
      a.displayName = 'SlotClone'
      const i = (e) => {
        const { children: t } = e
        return (0, n.createElement)(n.Fragment, null, t)
      }
      function s(e) {
        return (0, n.isValidElement)(e) && e.type === i
      }
    },
    7742: (_e, t, r) => {
      r.d(t, { j: () => l })
      const o = (e) =>
        'boolean' === typeof e ? ''.concat(e) : 0 === e ? '0' : e
      const n = () => {
        for (let e, t, r = 0, o = ''; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              let r
              let o
              let n = ''
              if ('string' === typeof t || 'number' === typeof t) n += t
              else if ('object' === typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (o = e(t[r])) && (n && (n += ' '), (n += o))
                else for (r in t) t[r] && (n && (n += ' '), (n += r))
              }
              return n
            })(e)) &&
            (o && (o += ' '), (o += t))
        return o
      }
      const l = (e, t) => (r) => {
        let l
        if ((null == t ? void 0 : t.variants) == null)
          return n(
            e,
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className,
          )
        const { variants: a, defaultVariants: i } = t
        const s = Object.keys(a).map((e) => {
          const t = null == r ? void 0 : r[e]
          const n = null == i ? void 0 : i[e]
          if (null === t) return null
          const l = o(t) || o(n)
          return a[e][l]
        })
        const c =
          r &&
          Object.entries(r).reduce((e, t) => {
            const [r, o] = t
            return void 0 === o || (e[r] = o), e
          }, {})
        return n(
          e,
          s,
          null == t
            ? void 0
            : null === (l = t.compoundVariants) || void 0 === l
              ? void 0
              : l.reduce((e, t) => {
                  const { class: r, className: o, ...n } = t
                  return Object.entries(n).every((e) => {
                    const [t, r] = e
                    return Array.isArray(r)
                      ? r.includes({ ...i, ...c }[t])
                      : { ...i, ...c }[t] === r
                  })
                    ? [...e, r, o]
                    : e
                }, []),
          null == r ? void 0 : r.class,
          null == r ? void 0 : r.className,
        )
      }
    },
    3167: (_e, t, r) => {
      function o() {
        for (let e, t, r = 0, o = '', n = arguments.length; r < n; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              let r
              let o
              let n = ''
              if ('string' === typeof t || 'number' === typeof t) n += t
              else if ('object' === typeof t) {
                if (Array.isArray(t)) {
                  const l = t.length
                  for (r = 0; r < l; r++)
                    t[r] && (o = e(t[r])) && (n && (n += ' '), (n += o))
                } else for (o in t) t[o] && (n && (n += ' '), (n += o))
              }
              return n
            })(e)) &&
            (o && (o += ' '), (o += t))
        return o
      }
      r.d(t, { W: () => o })
    },
    1367: (_e, t, r) => {
      r.d(t, { m6: () => G })
      const o = /^\[(.+)\]$/
      function n(e, t) {
        let r = e
        return (
          t.split('-').forEach((e) => {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e))
          }),
          r
        )
      }
      const l = /\s+/
      function a() {
        let e
        let t
        let r = 0
        let o = ''
        while (r < arguments.length)
          (e = arguments[r++]) &&
            (t = (function e(t) {
              let r
              if ('string' === typeof t) return t
              let o = ''
              for (let n = 0; n < t.length; n++)
                t[n] && (r = e(t[n])) && (o && (o += ' '), (o += r))
              return o
            })(e)) &&
            (o && (o += ' '), (o += t))
        return o
      }
      function i(e) {
        const t = (t) => t[e] || []
        return (t.isThemeGetter = !0), t
      }
      const s = /^\[(?:([a-z-]+):)?(.+)\]$/i
      const c = /^\d+\/\d+$/
      const d = new Set(['px', 'full', 'screen'])
      const u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
      const p =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
      const f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
      const m = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
      const b =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
      function h(e) {
        return y(e) || d.has(e) || c.test(e)
      }
      function g(e) {
        return A(e, 'length', O)
      }
      function y(e) {
        return !!e && !Number.isNaN(Number(e))
      }
      function v(e) {
        return A(e, 'number', y)
      }
      function w(e) {
        return !!e && Number.isInteger(Number(e))
      }
      function x(e) {
        return e.endsWith('%') && y(e.slice(0, -1))
      }
      function k(e) {
        return s.test(e)
      }
      function z(e) {
        return u.test(e)
      }
      const C = new Set(['length', 'size', 'percentage'])
      function j(e) {
        return A(e, C, _)
      }
      function S(e) {
        return A(e, 'position', _)
      }
      const E = new Set(['image', 'url'])
      function N(e) {
        return A(e, E, I)
      }
      function T(e) {
        return A(e, '', P)
      }
      function M() {
        return !0
      }
      function A(e, t, r) {
        const o = s.exec(e)
        return (
          !!o &&
          (o[1] ? ('string' === typeof t ? o[1] === t : t.has(o[1])) : r(o[2]))
        )
      }
      function O(e) {
        return p.test(e) && !f.test(e)
      }
      function _() {
        return !1
      }
      function P(e) {
        return m.test(e)
      }
      function I(e) {
        return b.test(e)
      }
      const G = ((e) => {
        let t
        let r
        let i
        for (
          let s = arguments.length, c = Array(s > 1 ? s - 1 : 0), d = 1;
          d < s;
          d++
        )
          c[d - 1] = arguments[d]
        let u = (l) => {
          let a
          return (
            (r = (t = {
              cache: ((e) => {
                if (e < 1) return { get: () => void 0, set: () => {} }
                let t = 0
                let r = new Map()
                let o = new Map()
                function n(n, l) {
                  r.set(n, l), ++t > e && ((t = 0), (o = r), (r = new Map()))
                }
                return {
                  get(e) {
                    let t = r.get(e)
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = o.get(e))
                        ? (n(e, t), t)
                        : void 0
                  },
                  set(e, t) {
                    r.has(e) ? r.set(e, t) : n(e, t)
                  },
                }
              })((a = c.reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: ((e) => {
                const t = e.separator
                const r = 1 === t.length
                const o = t[0]
                const n = t.length
                return (e) => {
                  let l
                  const a = []
                  let i = 0
                  let s = 0
                  for (let c = 0; c < e.length; c++) {
                    const d = e[c]
                    if (0 === i) {
                      if (d === o && (r || e.slice(c, c + n) === t)) {
                        a.push(e.slice(s, c)), (s = c + n)
                        continue
                      }
                      if ('/' === d) {
                        l = c
                        continue
                      }
                    }
                    '[' === d ? i++ : ']' === d && i--
                  }
                  const c = 0 === a.length ? e : e.substring(s)
                  const d = c.startsWith('!')
                  const u = d ? c.substring(1) : c
                  return {
                    modifiers: a,
                    hasImportantModifier: d,
                    baseClassName: u,
                    maybePostfixModifierPosition: l && l > s ? l - s : void 0,
                  }
                }
              })(a),
              ...((e) => {
                const t = ((e) => {
                  let t
                  const { theme: r, prefix: o } = e
                  const l = { nextPart: new Map(), validators: [] }
                  return (
                    ((t = Object.entries(e.classGroups)),
                    o
                      ? t.map((e) => {
                          const [t, r] = e
                          return [
                            t,
                            r.map((e) =>
                              'string' === typeof e
                                ? o + e
                                : 'object' === typeof e
                                  ? Object.fromEntries(
                                      Object.entries(e).map((e) => {
                                        const [t, r] = e
                                        return [o + t, r]
                                      }),
                                    )
                                  : e,
                            ),
                          ]
                        })
                      : t).forEach((e) => {
                      const [t, o] = e
                      ;(function e(t, r, o, l) {
                        t.forEach((t) => {
                          if ('string' === typeof t) {
                            ;('' === t ? r : n(r, t)).classGroupId = o
                            return
                          }
                          if ('function' === typeof t) {
                            if (t.isThemeGetter) {
                              e(t(l), r, o, l)
                              return
                            }
                            r.validators.push({ validator: t, classGroupId: o })
                            return
                          }
                          Object.entries(t).forEach((t) => {
                            const [a, i] = t
                            e(i, n(r, a), o, l)
                          })
                        })
                      })(o, l, t, r)
                    }),
                    l
                  )
                })(e)
                const {
                  conflictingClassGroups: r,
                  conflictingClassGroupModifiers: l,
                } = e
                return {
                  getClassGroupId: (e) => {
                    const r = e.split('-')
                    return (
                      '' === r[0] && 1 !== r.length && r.shift(),
                      (function e(t, r) {
                        let o
                        if (0 === t.length) return r.classGroupId
                        const n = t[0]
                        const l = r.nextPart.get(n)
                        const a = l ? e(t.slice(1), l) : void 0
                        if (a) return a
                        if (0 === r.validators.length) return
                        const i = t.join('-')
                        return null ===
                          (o = r.validators.find((e) => {
                            const { validator: t } = e
                            return t(i)
                          })) || void 0 === o
                          ? void 0
                          : o.classGroupId
                      })(r, t) ||
                        ((e) => {
                          if (o.test(e)) {
                            const t = o.exec(e)[1]
                            const r =
                              null == t
                                ? void 0
                                : t.substring(0, t.indexOf(':'))
                            if (r) return `arbitrary..${r}`
                          }
                        })(e)
                    )
                  },
                  getConflictingClassGroupIds: (e, t) => {
                    const o = r[e] || []
                    return t && l[e] ? [...o, ...l[e]] : o
                  },
                }
              })(a),
            }).cache.get),
            (i = t.cache.set),
            (u = p),
            p(l)
          )
        }
        function p(e) {
          const o = r(e)
          if (o) return o
          const n = ((e, t) => {
            const {
              splitModifiers: r,
              getClassGroupId: o,
              getConflictingClassGroupIds: n,
            } = t
            const a = new Set()
            return e
              .trim()
              .split(l)
              .map((e) => {
                const {
                  modifiers: t,
                  hasImportantModifier: n,
                  baseClassName: l,
                  maybePostfixModifierPosition: a,
                } = r(e)
                let i = o(a ? l.substring(0, a) : l)
                let s = !!a
                if (!i) {
                  if (!(a && (i = o(l))))
                    return { isTailwindClass: !1, originalClassName: e }
                  s = !1
                }
                const c = ((e) => {
                  if (e.length <= 1) return e
                  const t = []
                  let r = []
                  return (
                    e.forEach((e) => {
                      '[' === e[0]
                        ? (t.push(...r.sort(), e), (r = []))
                        : r.push(e)
                    }),
                    t.push(...r.sort()),
                    t
                  )
                })(t).join(':')
                return {
                  isTailwindClass: !0,
                  modifierId: n ? `${c}!` : c,
                  classGroupId: i,
                  originalClassName: e,
                  hasPostfixModifier: s,
                }
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0
                const {
                  modifierId: t,
                  classGroupId: r,
                  hasPostfixModifier: o,
                } = e
                const l = t + r
                return (
                  !a.has(l) &&
                  (a.add(l), n(r, o).forEach((e) => a.add(t + e)), !0)
                )
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(' ')
          })(e, t)
          return i(e, n), n
        }
        return () => u(a.apply(null, arguments))
      })(() => {
        const e = i('colors')
        const t = i('spacing')
        const r = i('blur')
        const o = i('brightness')
        const n = i('borderColor')
        const l = i('borderRadius')
        const a = i('borderSpacing')
        const s = i('borderWidth')
        const c = i('contrast')
        const d = i('grayscale')
        const u = i('hueRotate')
        const p = i('invert')
        const f = i('gap')
        const m = i('gradientColorStops')
        const b = i('gradientColorStopPositions')
        const C = i('inset')
        const E = i('margin')
        const A = i('opacity')
        const O = i('padding')
        const _ = i('saturate')
        const P = i('scale')
        const I = i('sepia')
        const G = i('skew')
        const L = i('space')
        const Z = i('translate')
        const $ = () => ['auto', 'contain', 'none']
        const R = () => ['auto', 'hidden', 'clip', 'visible', 'scroll']
        const W = () => ['auto', k, t]
        const V = () => [k, t]
        const F = () => ['', h, g]
        const q = () => ['auto', y, k]
        const K = () => [
          'bottom',
          'center',
          'left',
          'left-bottom',
          'left-top',
          'right',
          'right-bottom',
          'right-top',
          'top',
        ]
        const B = () => ['solid', 'dashed', 'dotted', 'double', 'none']
        const J = () => [
          'normal',
          'multiply',
          'screen',
          'overlay',
          'darken',
          'lighten',
          'color-dodge',
          'color-burn',
          'hard-light',
          'soft-light',
          'difference',
          'exclusion',
          'hue',
          'saturation',
          'color',
          'luminosity',
          'plus-lighter',
        ]
        const H = () => [
          'start',
          'end',
          'center',
          'between',
          'around',
          'evenly',
          'stretch',
        ]
        const D = () => ['', '0', k]
        const Q = () => [
          'auto',
          'avoid',
          'all',
          'avoid-page',
          'page',
          'left',
          'right',
          'column',
        ]
        const U = () => [y, v]
        const X = () => [y, k]
        return {
          cacheSize: 500,
          separator: ':',
          theme: {
            colors: [M],
            spacing: [h, g],
            blur: ['none', '', z, k],
            brightness: U(),
            borderColor: [e],
            borderRadius: ['none', '', 'full', z, k],
            borderSpacing: V(),
            borderWidth: F(),
            contrast: U(),
            grayscale: D(),
            hueRotate: X(),
            invert: D(),
            gap: V(),
            gradientColorStops: [e],
            gradientColorStopPositions: [x, g],
            inset: W(),
            margin: W(),
            opacity: U(),
            padding: V(),
            saturate: U(),
            scale: U(),
            sepia: D(),
            skew: X(),
            space: V(),
            translate: V(),
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', 'video', k] }],
            container: ['container'],
            columns: [{ columns: [z] }],
            'break-after': [{ 'break-after': Q() }],
            'break-before': [{ 'break-before': Q() }],
            'break-inside': [
              {
                'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
              },
            ],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
            clear: [
              { clear: ['left', 'right', 'both', 'none', 'start', 'end'] },
            ],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [
              { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
            ],
            'object-position': [{ object: [...K(), k] }],
            overflow: [{ overflow: R() }],
            'overflow-x': [{ 'overflow-x': R() }],
            'overflow-y': [{ 'overflow-y': R() }],
            overscroll: [{ overscroll: $() }],
            'overscroll-x': [{ 'overscroll-x': $() }],
            'overscroll-y': [{ 'overscroll-y': $() }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: [C] }],
            'inset-x': [{ 'inset-x': [C] }],
            'inset-y': [{ 'inset-y': [C] }],
            start: [{ start: [C] }],
            end: [{ end: [C] }],
            top: [{ top: [C] }],
            right: [{ right: [C] }],
            bottom: [{ bottom: [C] }],
            left: [{ left: [C] }],
            visibility: ['visible', 'invisible', 'collapse'],
            z: [{ z: ['auto', w, k] }],
            basis: [{ basis: W() }],
            'flex-direction': [
              { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
            ],
            'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
            flex: [{ flex: ['1', 'auto', 'initial', 'none', k] }],
            grow: [{ grow: D() }],
            shrink: [{ shrink: D() }],
            order: [{ order: ['first', 'last', 'none', w, k] }],
            'grid-cols': [{ 'grid-cols': [M] }],
            'col-start-end': [{ col: ['auto', { span: ['full', w, k] }, k] }],
            'col-start': [{ 'col-start': q() }],
            'col-end': [{ 'col-end': q() }],
            'grid-rows': [{ 'grid-rows': [M] }],
            'row-start-end': [{ row: ['auto', { span: [w, k] }, k] }],
            'row-start': [{ 'row-start': q() }],
            'row-end': [{ 'row-end': q() }],
            'grid-flow': [
              {
                'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'],
              },
            ],
            'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', k] }],
            'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', k] }],
            gap: [{ gap: [f] }],
            'gap-x': [{ 'gap-x': [f] }],
            'gap-y': [{ 'gap-y': [f] }],
            'justify-content': [{ justify: ['normal', ...H()] }],
            'justify-items': [
              { 'justify-items': ['start', 'end', 'center', 'stretch'] },
            ],
            'justify-self': [
              { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            'align-content': [{ content: ['normal', ...H(), 'baseline'] }],
            'align-items': [
              { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
            ],
            'align-self': [
              {
                self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
              },
            ],
            'place-content': [{ 'place-content': [...H(), 'baseline'] }],
            'place-items': [
              {
                'place-items': [
                  'start',
                  'end',
                  'center',
                  'baseline',
                  'stretch',
                ],
              },
            ],
            'place-self': [
              { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            p: [{ p: [O] }],
            px: [{ px: [O] }],
            py: [{ py: [O] }],
            ps: [{ ps: [O] }],
            pe: [{ pe: [O] }],
            pt: [{ pt: [O] }],
            pr: [{ pr: [O] }],
            pb: [{ pb: [O] }],
            pl: [{ pl: [O] }],
            m: [{ m: [E] }],
            mx: [{ mx: [E] }],
            my: [{ my: [E] }],
            ms: [{ ms: [E] }],
            me: [{ me: [E] }],
            mt: [{ mt: [E] }],
            mr: [{ mr: [E] }],
            mb: [{ mb: [E] }],
            ml: [{ ml: [E] }],
            'space-x': [{ 'space-x': [L] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [L] }],
            'space-y-reverse': ['space-y-reverse'],
            w: [
              { w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', k, t] },
            ],
            'min-w': [{ 'min-w': [k, t, 'min', 'max', 'fit'] }],
            'max-w': [
              {
                'max-w': [
                  k,
                  t,
                  'none',
                  'full',
                  'min',
                  'max',
                  'fit',
                  'prose',
                  { screen: [z] },
                  z,
                ],
              },
            ],
            h: [
              { h: [k, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            'min-h': [
              { 'min-h': [k, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            'max-h': [
              { 'max-h': [k, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            size: [{ size: [k, t, 'auto', 'min', 'max', 'fit'] }],
            'font-size': [{ text: ['base', z, g] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [
              {
                font: [
                  'thin',
                  'extralight',
                  'light',
                  'normal',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
                  v,
                ],
              },
            ],
            'font-family': [{ font: [M] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
            tracking: [
              {
                tracking: [
                  'tighter',
                  'tight',
                  'normal',
                  'wide',
                  'wider',
                  'widest',
                  k,
                ],
              },
            ],
            'line-clamp': [{ 'line-clamp': ['none', y, v] }],
            leading: [
              {
                leading: [
                  'none',
                  'tight',
                  'snug',
                  'normal',
                  'relaxed',
                  'loose',
                  h,
                  k,
                ],
              },
            ],
            'list-image': [{ 'list-image': ['none', k] }],
            'list-style-type': [{ list: ['none', 'disc', 'decimal', k] }],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'placeholder-color': [{ placeholder: [e] }],
            'placeholder-opacity': [{ 'placeholder-opacity': [A] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [A] }],
            'text-decoration': [
              'underline',
              'overline',
              'line-through',
              'no-underline',
            ],
            'text-decoration-style': [{ decoration: [...B(), 'wavy'] }],
            'text-decoration-thickness': [
              { decoration: ['auto', 'from-font', h, g] },
            ],
            'underline-offset': [{ 'underline-offset': ['auto', h, k] }],
            'text-decoration-color': [{ decoration: [e] }],
            'text-transform': [
              'uppercase',
              'lowercase',
              'capitalize',
              'normal-case',
            ],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
            indent: [{ indent: V() }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  k,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  'normal',
                  'nowrap',
                  'pre',
                  'pre-line',
                  'pre-wrap',
                  'break-spaces',
                ],
              },
            ],
            break: [{ break: ['normal', 'words', 'all', 'keep'] }],
            hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
            content: [{ content: ['none', k] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [
              { 'bg-clip': ['border', 'padding', 'content', 'text'] },
            ],
            'bg-opacity': [{ 'bg-opacity': [A] }],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [{ bg: [...K(), S] }],
            'bg-repeat': [
              {
                bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }],
              },
            ],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', j] }],
            'bg-image': [
              {
                bg: [
                  'none',
                  {
                    'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
                  },
                  N,
                ],
              },
            ],
            'bg-color': [{ bg: [e] }],
            'gradient-from-pos': [{ from: [b] }],
            'gradient-via-pos': [{ via: [b] }],
            'gradient-to-pos': [{ to: [b] }],
            'gradient-from': [{ from: [m] }],
            'gradient-via': [{ via: [m] }],
            'gradient-to': [{ to: [m] }],
            rounded: [{ rounded: [l] }],
            'rounded-s': [{ 'rounded-s': [l] }],
            'rounded-e': [{ 'rounded-e': [l] }],
            'rounded-t': [{ 'rounded-t': [l] }],
            'rounded-r': [{ 'rounded-r': [l] }],
            'rounded-b': [{ 'rounded-b': [l] }],
            'rounded-l': [{ 'rounded-l': [l] }],
            'rounded-ss': [{ 'rounded-ss': [l] }],
            'rounded-se': [{ 'rounded-se': [l] }],
            'rounded-ee': [{ 'rounded-ee': [l] }],
            'rounded-es': [{ 'rounded-es': [l] }],
            'rounded-tl': [{ 'rounded-tl': [l] }],
            'rounded-tr': [{ 'rounded-tr': [l] }],
            'rounded-br': [{ 'rounded-br': [l] }],
            'rounded-bl': [{ 'rounded-bl': [l] }],
            'border-w': [{ border: [s] }],
            'border-w-x': [{ 'border-x': [s] }],
            'border-w-y': [{ 'border-y': [s] }],
            'border-w-s': [{ 'border-s': [s] }],
            'border-w-e': [{ 'border-e': [s] }],
            'border-w-t': [{ 'border-t': [s] }],
            'border-w-r': [{ 'border-r': [s] }],
            'border-w-b': [{ 'border-b': [s] }],
            'border-w-l': [{ 'border-l': [s] }],
            'border-opacity': [{ 'border-opacity': [A] }],
            'border-style': [{ border: [...B(), 'hidden'] }],
            'divide-x': [{ 'divide-x': [s] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [s] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [A] }],
            'divide-style': [{ divide: B() }],
            'border-color': [{ border: [n] }],
            'border-color-x': [{ 'border-x': [n] }],
            'border-color-y': [{ 'border-y': [n] }],
            'border-color-t': [{ 'border-t': [n] }],
            'border-color-r': [{ 'border-r': [n] }],
            'border-color-b': [{ 'border-b': [n] }],
            'border-color-l': [{ 'border-l': [n] }],
            'divide-color': [{ divide: [n] }],
            'outline-style': [{ outline: ['', ...B()] }],
            'outline-offset': [{ 'outline-offset': [h, k] }],
            'outline-w': [{ outline: [h, g] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: F() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [A] }],
            'ring-offset-w': [{ 'ring-offset': [h, g] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [{ shadow: ['', 'inner', 'none', z, T] }],
            'shadow-color': [{ shadow: [M] }],
            opacity: [{ opacity: [A] }],
            'mix-blend': [{ 'mix-blend': J() }],
            'bg-blend': [{ 'bg-blend': J() }],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [o] }],
            contrast: [{ contrast: [c] }],
            'drop-shadow': [{ 'drop-shadow': ['', 'none', z, k] }],
            grayscale: [{ grayscale: [d] }],
            'hue-rotate': [{ 'hue-rotate': [u] }],
            invert: [{ invert: [p] }],
            saturate: [{ saturate: [_] }],
            sepia: [{ sepia: [I] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [r] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [o] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [c] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [d] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [u] }],
            'backdrop-invert': [{ 'backdrop-invert': [p] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [A] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [_] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [I] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': [a] }],
            'border-spacing-x': [{ 'border-spacing-x': [a] }],
            'border-spacing-y': [{ 'border-spacing-y': [a] }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            caption: [{ caption: ['top', 'bottom'] }],
            transition: [
              {
                transition: [
                  'none',
                  'all',
                  '',
                  'colors',
                  'opacity',
                  'shadow',
                  'transform',
                  k,
                ],
              },
            ],
            duration: [{ duration: X() }],
            ease: [{ ease: ['linear', 'in', 'out', 'in-out', k] }],
            delay: [{ delay: X() }],
            animate: [
              { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', k] },
            ],
            transform: [{ transform: ['', 'gpu', 'none'] }],
            scale: [{ scale: [P] }],
            'scale-x': [{ 'scale-x': [P] }],
            'scale-y': [{ 'scale-y': [P] }],
            rotate: [{ rotate: [w, k] }],
            'translate-x': [{ 'translate-x': [Z] }],
            'translate-y': [{ 'translate-y': [Z] }],
            'skew-x': [{ 'skew-x': [G] }],
            'skew-y': [{ 'skew-y': [G] }],
            'transform-origin': [
              {
                origin: [
                  'center',
                  'top',
                  'top-right',
                  'right',
                  'bottom-right',
                  'bottom',
                  'bottom-left',
                  'left',
                  'top-left',
                  k,
                ],
              },
            ],
            accent: [{ accent: ['auto', e] }],
            appearance: [{ appearance: ['none', 'auto'] }],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  k,
                ],
              },
            ],
            'caret-color': [{ caret: [e] }],
            'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
            resize: [{ resize: ['none', 'y', 'x', ''] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': V() }],
            'scroll-mx': [{ 'scroll-mx': V() }],
            'scroll-my': [{ 'scroll-my': V() }],
            'scroll-ms': [{ 'scroll-ms': V() }],
            'scroll-me': [{ 'scroll-me': V() }],
            'scroll-mt': [{ 'scroll-mt': V() }],
            'scroll-mr': [{ 'scroll-mr': V() }],
            'scroll-mb': [{ 'scroll-mb': V() }],
            'scroll-ml': [{ 'scroll-ml': V() }],
            'scroll-p': [{ 'scroll-p': V() }],
            'scroll-px': [{ 'scroll-px': V() }],
            'scroll-py': [{ 'scroll-py': V() }],
            'scroll-ps': [{ 'scroll-ps': V() }],
            'scroll-pe': [{ 'scroll-pe': V() }],
            'scroll-pt': [{ 'scroll-pt': V() }],
            'scroll-pr': [{ 'scroll-pr': V() }],
            'scroll-pb': [{ 'scroll-pb': V() }],
            'scroll-pl': [{ 'scroll-pl': V() }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [{ touch: ['auto', 'none', 'manipulation'] }],
            'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
            'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
            'touch-pz': ['touch-pinch-zoom'],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [
              { 'will-change': ['auto', 'scroll', 'contents', 'transform', k] },
            ],
            fill: [{ fill: [e, 'none'] }],
            'stroke-w': [{ stroke: [h, g, v] }],
            stroke: [{ stroke: [e, 'none'] }],
            sr: ['sr-only', 'not-sr-only'],
            'forced-color-adjust': [
              { 'forced-color-adjust': ['auto', 'none'] },
            ],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: [
              'inset-x',
              'inset-y',
              'start',
              'end',
              'top',
              'right',
              'bottom',
              'left',
            ],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            size: ['w', 'h'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            'line-clamp': ['display', 'overflow'],
            rounded: [
              'rounded-s',
              'rounded-e',
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-ss',
              'rounded-se',
              'rounded-ee',
              'rounded-es',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-s': ['rounded-ss', 'rounded-es'],
            'rounded-e': ['rounded-se', 'rounded-ee'],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-spacing': ['border-spacing-x', 'border-spacing-y'],
            'border-w': [
              'border-w-s',
              'border-w-e',
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-ms',
              'scroll-me',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-ps',
              'scroll-pe',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
            touch: ['touch-x', 'touch-y', 'touch-pz'],
            'touch-x': ['touch'],
            'touch-y': ['touch'],
            'touch-pz': ['touch'],
          },
          conflictingClassGroupModifiers: { 'font-size': ['leading'] },
        }
      })
    },
  },
])
