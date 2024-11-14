import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Owu Social 食用说明",
  titleTemplate: ":title - Owu Social食用说明",
  description: "Owu Social 的站点文档，包含关于站点的基础信息、常见问题、周边服务、开发文档等内容。",
  lang: "zh-CN",
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true, // experimental
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Owu Social 食用说明' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],
  sitemap: {
    hostname: "https://scg-docs.owu.one"
  },
  srcExclude: [
    '**/README.md',
    '**/LICENSE.md',
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.svg",
    siteTitle: false,
    nav: [
      { text: '链接',
        items: [
          { text: 'Owu Social', link: 'https://scg.owu.one' },
          { text: '服务状态', link: 'https://status.owu.one' },
          { text: '周边服务', link: '/services/'}
        ]
      }
    ],
    sidebar: [
      {
        text: '基础信息',
        collapsed: false,
        items: [
          { text: '关于本站', link: '/about' },
          { text: '实例规则',
            collapsed: true,
            items: [
              { text: '内容规范', link: '/rules/content' },
              { text: '特殊账户', link: '/rules/special-accounts' },
              { text: '联合范围', link: '/rules/federation' }
            ]
          },
          { text: '服务条款',
            collapsed: true,
            items: [
              { text: '用户协议', link: '/terms/user' },
              { text: '隐私政策', link: '/terms/privacy' },
              { text: '数据保护', link: '/terms/data' },
              { text: '核查与申诉', link: '/terms/moderation' },
              { text: '信息披露', link: '/terms/disclosure' },
              { text: '服务承诺', link: '/terms/commitment' }
            ]
          },
          { text: '联系我们', link: '/contact' }
        ]
      },
      {
        text: '常见问题',
        collapsed: false,
        items: [
          { text: '认识联邦宇宙', link: '/faq/fediverse' },
          { text: '注册', link: '/faq/sign-up' },
          { text: '登录与客户端', link: '/faq/clients' },
          { text: '发现内容', link: '/faq/discover' },
          { text: '发帖与互动', link: '/faq/posting' },
          { text: '搜素', link: '/faq/search' },
          { text: '过滤、静音与屏蔽', link: '/faq/filter' },
          { text: '功能支持', link: '/faq/feature' },
          { text: '兼容性', link: '/faq/compatibility' },
          { text: '隐私与安全', link: '/faq/privacy-and-security' }
        ]
      },
      {
        text: '设置',
        collapsed: true,
        items: [
          { text: '设置面板简介', link: '/settings/overview' },
          { text: '自定义样式', link: '/settings/custom-css' },
          { text: '账户迁移', link: '/settings/migration' },
          { text: '互动控制', link: '/settings/interaction-control' },
        ]
      },
      {
        text: '周边服务',
        collapsed: true,
        items: [
          { text: '机器人', link: '/services/bots' },
          { text: 'OwKey', link: '/services/misskey' },
          { text: 'Owu Board', link: '/services/board' },
          { text: 'Owu Chat', link: '/services/chat' },
          { text: 'Owu Social-M', link: '/services/social-m' },
          { text: 'OwuTube', link: 'services/peertube' },
          { text: 'Owu Write', link: '/services/write' }
        ]
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { text: '开发文档', link: '/development' },
          { text: '相关实例', link: '/instances' },
          { text: '服务状态', link: '/status' },
          { text: '更新日志', link: '/changelog' },
          { text: '完善文档', link: '/contribute' },
          { text: '参考与致谢', link: '/credits' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/owu-one/owu-social-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/owu-one/owu-social-docs' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="196.52mm" height="196.52mm" viewBox="0 0 196.52 196.52"><path fill="#a730b8" d="M47.9242 72.7966a18.2278 18.2278 0 0 1-7.7959 7.7597l42.7984 42.9653 10.3182-5.2291zm56.4524 56.6704-10.3182 5.2291 21.686 21.7708a18.2278 18.2278 0 0 1 7.7975-7.7608z"/><path fill="#5496be" d="M129.6645 102.0765l1.7865 11.4272 27.4149-13.8942a18.2278 18.2278 0 0 1-4.9719-9.8124zm-14.0658 7.1282-57.2891 29.0339a18.2278 18.2278 0 0 1 4.9728 9.8133l54.1027-27.4194z"/><path fill="#ce3d1a" d="M69.5312 91.6539l8.1618 8.1933 29.269-57.1387a18.2278 18.2278 0 0 1-9.787-5.0219zm-7.1897 14.0363-14.0022 27.3353a18.2278 18.2278 0 0 1 9.786 5.0214l12.3775-24.1639z"/><path fill="#d0188f" d="M39.8906 80.6763a18.2278 18.2278 0 0 1-10.8655 1.7198l8.1762 52.2981a18.2278 18.2278 0 0 1 10.8645-1.7198z"/><path fill="#5b36e9" d="M63.3259 148.3109a18.2278 18.2278 0 0 1-1.7322 10.8629l52.2893 8.3907a18.2278 18.2278 0 0 1 1.7322-10.8629z"/><path fill="#30b873" d="M134.9148 146.9182a18.2278 18.2278 0 0 1 9.788 5.0224l24.1345-47.117a18.2278 18.2278 0 0 1-9.7875-5.0229z"/><path fill="#ebe305" d="M126.1329 33.1603a18.2278 18.2278 0 0 1-7.7975 7.7608l37.3765 37.5207a18.2278 18.2278 0 0 1 7.7969-7.7608z"/><path fill="#f47601" d="M44.7704 51.6279a18.2278 18.2278 0 0 1 4.9723 9.8123l47.2478-23.9453a18.2278 18.2278 0 0 1-4.9718-9.8113z"/><path fill="#57c115" d="M118.2491 40.9645a18.2278 18.2278 0 0 1-10.8511 1.8123l4.1853 26.8 11.42 1.8324zm-4.2333 44.1927 9.8955 63.3631a18.2278 18.2278 0 0 1 10.88-1.6278l-9.355-59.9035z"/><path fill="#dbb210" d="M49.7763 61.6412a18.2278 18.2278 0 0 1-1.694 10.8686l26.8206 4.3077 5.2715-10.2945zm45.9677 7.382-5.272 10.2955 63.3713 10.1777a18.2278 18.2278 0 0 1 1.7606-10.8593z"/><path fill="#ffca00" d="M93.4385 23.8419a1 1 0 1 0 33.0924 1.8025 1 1 0 1 0-33.0924-1.8025"/><path fill="#64ff00" d="M155.314 85.957a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/><path fill="#00a3ff" d="M115.3466 163.9824a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/><path fill="#9500ff" d="M28.7698 150.0898a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/><path fill="#ff0000" d="M15.2298 63.4781a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/></svg>',
        },
        ariaLabel: 'Fediverse',
        link: 'https://scg.owu.one/@admin',
      }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索"
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "重置搜索",
            backButtonTitle: "关闭搜索",
            noResultsText: "没有找到结果",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "输入",
              navigateText: "导航",
              navigateUpKeyAriaLabel: "上箭头",
              navigateDownKeyAriaLabel: "下箭头",
              closeText: "关闭",
              closeKeyAriaLabel: "esc"
            }
          }
        }
      }
    },
    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "切换至亮色主题",
    darkModeSwitchTitle: "切换至暗色主题",
    sidebarMenuLabel: "目录",
    langMenuLabel: "语言",
    // docFooter: {}
    outline: {
      level: 'deep',
      label: '概要'
    },
    footer: {
      message: '本页面内容采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</a> 协议授权',
      copyright: `© 2023 - ${new Date().getFullYear()} Owu One`,
    }
  },
})
