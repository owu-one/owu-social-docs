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
  sitemap: {
    hostname: "https://scg-docs.owu.one"
  },
  srcExclude: [
    '**/README.md',
    '**/LICENSE.md'
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
          { text: 'Owu Write', link: 'https://write.owu.one' },
          { text: 'Owu Chat', link: 'https://mtx.owu.one' },
          { text: 'Owu Social-M', link: 'https://scm.owu.one' }
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
          { text: '注册', link: '/faq/register' },
          { text: '登录与客户端', link: '/faq/clients' },
          { text: '发现内容', link: '/faq/discover' },
          { text: '发帖与互动', link: '/faq/posting' },
          { text: '搜素', link: '/faq/search' },
          { text: '过滤、静音与屏蔽', link: '/faq/filter' },
          { text: '功能支持', link: '/faq/feature' },
          { text: '隐私与安全', link: '/faq/privacy-and-security' }
        ]
      },
      {
        text: '设置',
        collapsed: true,
        items: [
          { text: '设置面板简介', link: '/settings/overview' },
          { text: '自定义样式(高级)', link: '/settings/custom-css' },
          { text: '账户迁移', link: '/settings/migration' },
          { text: '互动控制', link: '/settings/interaction-control' },
        ]
      },
      {
        text: '周边服务',
        collapsed: true,
        items: [
          { text: '站内机器人', link: '/services/bots' },
          { text: 'Owu Write', link: '/services/write' },
          { text: 'Owu Chat', link: '/services/chat' },
          { text: 'Owu Social-M', link: '/services/social-m' }
        ]
      },
      {
        text: '开发',
        collapsed: true,
        items: [
          { text: 'API', link: '/dev/api' }
        ]
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { text: '相关实例', link: '/instances' },
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
          svg: '',
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
