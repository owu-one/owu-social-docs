// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import './style.css'
import { theme, useOpenapi } from 'vitepress-openapi'
import 'vitepress-openapi/dist/style.css'

import spec from '../../spec/openapi.json' assert { type: 'json' }

export default {
  extends: DefaultTheme,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    const openapi = useOpenapi({ spec })
    app.provide('openapi', openapi)
    theme.enhanceApp({ app })
  }
} satisfies Theme
