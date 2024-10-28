import { defineConfig } from 'vitepress'
import { useSidebar, useOpenapi } from 'vitepress-openapi'
import spec from '../spec/openapi.json' assert { type: "json" }

const sidebar = useSidebar({
  spec,
  linkPrefix: '/ops/',
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/dev/api/",
  title: "Owu Social API 文档",
  titleTemplate: ":title - Owu Social API 文档",
  description: "Owu Social 的 API 文档。",
  lang: "zh-CN",
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true, // experimental
  sitemap: {
    hostname: "https://scg-docs.owu.one/dev/api"
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '返回', link: 'https://scg-docs.owu.one/dev/' }
    ],

    sidebar: [
      { text: '返回食用指南', link: 'https://scg-docs.owu.one/dev/' },
      { text: '首页', link: '/' },
      ...sidebar.generateSidebarGroups()
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/owu-one/owu-social-docs' }
    ]
  }
})
