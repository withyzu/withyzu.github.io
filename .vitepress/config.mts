import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: "/",
  title: '文档管理',
  description: '用于管理车间的设备设施图纸及方案',
  srcDir: ".",
  themeConfig: {
    nav: [
      { text: '一车间', link: '/一车间/index' },
      { text: '二车间', link: '/二车间/index' },
      { text: '三车间', link: '/三车间/index' },
      { text: '五车间', link: '/五车间/index' },
      { text: '芒硝车间', link: '/芒硝车间/index' },
      { text: '综合处理车间', link: '/综合处理车间/index' },
    ],

    sidebar: {
      '/一车间/': [
        {
          text: '一车间',
          items: [
            { text: '首页', link: '/一车间/index' },
            { text: '设备图纸', link: '/一车间/drawings' },
            { text: '技术文档', link: '/一车间/documents' },
            { text: '维护记录', link: '/一车间/maintenance' }
          ]
        }
      ],
      '/二车间/': [
        {
          text: '二车间',
          items: [
            { text: '首页', link: '/二车间/index' },
            { text: '设备图纸', link: '/二车间/drawings' },
            { text: '技术文档', link: '/二车间/documents' },
            { text: '维护记录', link: '/二车间/maintenance' }
          ]
        }
      ],
      '/三车间/': [
        {
          text: '三车间',
          items: [
            { text: '首页', link: '/三车间/index' },
            { text: '设备图纸', link: '/三车间/drawings' },
            { text: '技术文档', link: '/三车间/documents' },
            { text: '维护记录', link: '/三车间/maintenance' }
          ]
        }
      ],
      '/五车间/': [
        {
          text: '五车间',
          items: [
            { text: '首页', link: '/五车间/index' },
            { text: '设备图纸', link: '/五车间/drawings' },
            { text: '技术文档', link: '/五车间/documents' },
            { text: '维护记录', link: '/五车间/maintenance' }
          ]
        }
      ],
      '/芒硝车间/': [
        {
          text: '芒硝车间',
          items: [
            { text: '首页', link: '/芒硝车间/index' },
            { text: '设备图纸', link: '/芒硝车间/drawings' },
            { text: '技术文档', link: '/芒硝车间/documents' },
            { text: '维护记录', link: '/芒硝车间/maintenance' }
          ]
        }
      ],
      '/综合处理车间/': [
        {
          text: '综合处理车间',
          items: [
            { text: '首页', link: '/综合处理车间/index' },
            { text: '设备图纸', link: '/综合处理车间/drawings' },
            { text: '技术文档', link: '/综合处理车间/documents' },
            { text: '维护记录', link: '/综合处理车间/maintenance' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})