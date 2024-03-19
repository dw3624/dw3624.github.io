;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    1542: (_e, _t, r) => {
      Promise.resolve().then(r.t.bind(r, 2445, 23)),
        Promise.resolve().then(r.bind(r, 953)),
        Promise.resolve().then(r.bind(r, 6758)),
        Promise.resolve().then(r.bind(r, 9891)),
        Promise.resolve().then(r.t.bind(r, 3445, 23))
    },
    953: (_e, t, r) => {
      r.r(t), r.d(t, { default: () => x })
      const s = r(3827)
      const n = r(4090)
      const i = r(6316)
      const a = r(7742)
      const o = r(1657)
      const c = (0, a.j)(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        {
          variants: {
            variant: {
              default:
                'bg-primary text-primary-foreground shadow hover:bg-primary/90',
              destructive:
                'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
              outline:
                'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
              secondary:
                'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
              ghost: 'hover:bg-accent hover:text-accent-foreground',
              link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
              default: 'h-9 px-4 py-2',
              sm: 'h-8 rounded-md px-3 text-xs',
              lg: 'h-10 rounded-md px-8',
              icon: 'h-9 w-9',
              iconSm: 'p-1 m-1 rounded-sm',
            },
          },
          defaultVariants: { variant: 'default', size: 'default' },
        },
      )
      const l = n.forwardRef((e, t) => {
        const { className: r, variant: n, size: a, asChild: l = !1, ...d } = e
        const u = l ? i.g7 : 'button'
        return (0, s.jsx)(u, {
          className: (0, o.cn)(c({ variant: n, size: a, className: r })),
          ref: t,
          ...d,
        })
      })
      l.displayName = 'Button'
      const d = r(1047)
      const u = r(3013)
      const f = r(2891)
      const h = r(1774)
      const m = r(8792)
      const x = () => {
        const { theme: e, setTheme: t } = (0, h.F)()
        const [r, i] = n.useState(!1)
        return (
          n.useEffect(() => {
            i(!0)
          }, []),
          (0, s.jsx)('footer', {
            className: 'container max-w-3xl',
            children: (0, s.jsxs)('div', {
              className: 'h-20 flex justify-between items-center font-sm',
              children: [
                (0, s.jsx)(m.default, {
                  href: 'https://github.com/dw3624',
                  target: '_blank',
                  children: (0, s.jsx)('span', {
                    className:
                      'inline-flex items-center justify-center text-muted-foreground hover:underline',
                    children: '\xa9 dw3624',
                  }),
                }),
                r &&
                  (0, s.jsxs)('div', {
                    className: 'border',
                    children: [
                      (0, s.jsx)(l, {
                        variant: 'light' === e ? 'secondary' : 'ghost',
                        size: 'iconSm',
                        onClick: () => t('light'),
                        className: 'light' === e ? 'text-primary' : '',
                        children: (0, s.jsx)(d.Z, { size: 16 }),
                      }),
                      (0, s.jsx)(l, {
                        variant: 'system' === e ? 'secondary' : 'ghost',
                        size: 'iconSm',
                        onClick: () => t('system'),
                        className: 'system' === e ? 'text-primary' : '',
                        children: (0, s.jsx)(u.Z, { size: 16 }),
                      }),
                      (0, s.jsx)(l, {
                        variant: 'dark' === e ? 'secondary' : 'ghost',
                        size: 'iconSm',
                        onClick: () => t('dark'),
                        className: 'dark' === e ? 'text-primary' : '',
                        children: (0, s.jsx)(f.Z, { size: 16 }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        )
      }
    },
    6758: (_e, t, r) => {
      r.r(t)
      const s = r(3827)
      const n = r(1657)
      const i = r(8792)
      const a = r(7907)
      r(4090),
        (t.default = () => {
          const e = (0, a.usePathname)()
          const t = [
            {
              href: '/posts/pages/1',
              label: 'Posts',
              active: e.startsWith('/posts'),
            },
            { href: '/tags', label: 'Tags', active: e.startsWith('/tags') },
            {
              href: 'https://www.notion.so/69a26827954545ee94ba401f49b42ccb',
              label: 'Resume',
              active: !1,
            },
          ]
          return (0, s.jsx)('header', {
            className: 'container max-w-3xl',
            children: (0, s.jsxs)('div', {
              className: 'flex items-center justify-between h-16',
              children: [
                (0, s.jsxs)('div', {
                  className: 'flex gap-8 capitalize',
                  children: [
                    (0, s.jsx)(i.default, {
                      href: '/',
                      className:
                        'inline-flex items-center justify-center text-primary hover:text-primary/80',
                      children: (0, s.jsx)('span', {
                        className:
                          'inline-flex items-center h-full ml-2 font-bold',
                        children: '~/',
                      }),
                    }),
                    (0, s.jsx)('nav', {
                      className: 'flex gap-4',
                      children: t.map((e, t) =>
                        (0, s.jsx)(
                          i.default,
                          {
                            href: e.href,
                            target: e.href.startsWith('http')
                              ? '_blank'
                              : '_self',
                            className: (0, n.cn)(
                              'inline-flex items-center justify-center font-semibold hover:text-foreground/80',
                              e.active
                                ? 'text-foreground'
                                : 'text-foreground/60',
                            ),
                            children: e.label,
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, s.jsx)('nav', {
                  children: (0, s.jsx)('div', { children: 'Hi.' }),
                }),
              ],
            }),
          })
        })
    },
    9891: (_e, t, r) => {
      r.r(t), r.d(t, { ThemeProvider: () => i })
      const s = r(3827)
      r(4090)
      const n = r(1774)
      function i(e) {
        const { children: t, ...r } = e
        return (0, s.jsx)(n.f, { ...r, children: t })
      }
    },
    1657: (_e, t, r) => {
      r.d(t, { cn: () => i })
      const s = r(3167)
      const n = r(1367)
      function i() {
        for (let e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return (0, n.m6)((0, s.W)(t))
      }
    },
    2445: () => {},
  },
  (e) => {
    e.O(0, [250, 171, 971, 69, 744], () => e((e.s = 1542))), (_N_E = e.O())
  },
])
